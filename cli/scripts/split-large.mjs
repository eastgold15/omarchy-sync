import { readdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, relative, resolve } from "node:path";

// The marketplace scanner refuses any single source file over 512 KiB.
const limit = 500 * 1024;
const dist = fileURLToPath(new URL("../dist/", import.meta.url));

function filesNamed(dir) {
    const found = [];

    for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const path = join(dir, entry.name);

        if (entry.isDirectory()) {
            found.push(...filesNamed(path));
        } else if (entry.name.endsWith(".js")) {
            found.push(path);
        }
    }

    return found;
}

function reachable(entry) {
    const seen = new Set();
    const queue = [entry];

    while (queue.length > 0) {
        const path = queue.pop();

        if (seen.has(path)) {
            continue;
        }

        seen.add(path);
        const source = readFileSync(path, "utf8");
        const specifiers = source.matchAll(/from\s+["'](\.[^"']+)["']|import\(\s*["'](\.[^"']+)["']\s*\)/g);

        for (const match of specifiers) {
            queue.push(resolve(dirname(path), match[1] ?? match[2]));
        }
    }

    return seen;
}

function pureDeclaration(line) {
    const match = line.match(/^(?:const|let|var) (\w+)\s*=\s*([\s\S]*);$/);

    if (!match || Buffer.byteLength(line) <= 1500) {
        return undefined;
    }

    const stripped = match[2]
        .replace(/'(?:\\.|[^'\\])*'/g, "''")
        .replace(/"(?:\\.|[^"\\])*"/g, '""')
        .replace(/`(?:\\.|[^`\\])*`/g, "``");
    const identifiers = stripped.match(/[A-Za-z_$][\w$]*/g) ?? [];

    if (identifiers.some((name) => name !== "void")) {
        return undefined;
    }

    return match[1];
}

const root = filesNamed(dist);
const entry = root.find((path) => path.endsWith("/dist/index.js"));
const used = reachable(entry);

for (const path of root) {
    if (!used.has(path)) {
        unlinkSync(path);
    }
}

for (const path of filesNamed(dist)) {
    const source = readFileSync(path, "utf8");

    if (Buffer.byteLength(source) <= limit) {
        continue;
    }

    const kept = [];
    const moved = [];

    for (const line of source.split("\n")) {
        const name = pureDeclaration(line);

        if (name) {
            moved.push(`export ${line}`);
        } else {
            kept.push(line);
        }
    }

    if (moved.length === 0) {
        throw new Error(`${relative(dist, path)} is still over ${limit} bytes and has no pure data to move`);
    }

    const part = path.replace(/\.js$/, ".parts.js");
    const names = moved.map((line) => line.match(/^export (?:const|let|var) (\w+)/)[1]);

    writeFileSync(part, `${moved.join("\n")}\n`);
    writeFileSync(path, `import { ${names.join(", ")} } from "./${part.split("/").at(-1)}";\n${kept.join("\n")}`);

    for (const file of [path, part]) {
        const size = Buffer.byteLength(readFileSync(file));

        if (size > 512 * 1024) {
            throw new Error(`${file} is ${size} bytes`);
        }
    }
}
