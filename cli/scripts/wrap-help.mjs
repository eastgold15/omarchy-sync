import { writeFileSync } from "node:fs";

// Packem splits `omarsync --help` into a generated chunk with multi-kilobyte
// lines. The marketplace scanner will not read that file. Replace it with a
// short help command. The real command list still comes from cli/src/index.ts.
const file = new URL("../dist/packem_chunks/help-command.js", import.meta.url);

writeFileSync(
    file,
    `export default class HelpCommand {
    constructor(commands) {
        this.name = "help";
        this.description = "Show usage";
        this.commands = commands;
    }

    execute() {
        const seen = new Set();
        const lines = ["omarsync", ""];

        const asked = process.argv.slice(2).find((arg) => arg !== "--help" && arg !== "-h" && arg !== "help" && !arg.startsWith("-"));
        const selected = asked ? this.commands.get(asked) : undefined;

        if (selected) {
            const lines = [\`omarsync \${selected.name}\`, ""];

            if (selected.description) {
                lines.push(selected.description, "");
            }

            for (const option of selected.options ?? []) {
                const names = [option.name ? \`--\${option.name}\` : "", option.alias ? \`-\${option.alias}\` : ""].filter(Boolean).join(", ");
                lines.push(\`  \${names}  \${option.description ?? ""}\`);
            }

            process.stdout.write(lines.join("\\n") + "\\n");
            return;
        }

        for (const command of this.commands.values()) {
            if (!command || seen.has(command.name)) {
                continue;
            }

            seen.add(command.name);
            lines.push(\`  \${command.name}  \${command.description ?? ""}\`);
        }

        process.stdout.write(lines.join("\\n") + "\\n");
    }
}
`,
);
