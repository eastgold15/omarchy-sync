// 只把核对过的代理变量交给 git、gh 和 mise。
// 规则与 lib/proxy.sh 一致:名字限于代理变量,值必须是普通 URL 或 no_proxy 列表。

const PROXY_NAMES = [
    "http_proxy",
    "https_proxy",
    "all_proxy",
    "no_proxy",
    "HTTP_PROXY",
    "HTTPS_PROXY",
    "ALL_PROXY",
    "NO_PROXY",
] as const;

function hasForbidden(value: string): boolean {
    return (
        value.includes("$") ||
        value.includes("`") ||
        value.includes('"') ||
        value.includes("'") ||
        value.includes("\n") ||
        value.includes("\r") ||
        value.includes(" ") ||
        value.includes("..")
    );
}

function bodyOk(rest: string): boolean {
    if (rest === "") {
        return false;
    }

    return /^[\][A-Za-z0-9._~:/?#@%+-]+$/.test(rest);
}

export function urlOk(value: string): boolean {
    if (value === "" || value.length > 256 || hasForbidden(value)) {
        return false;
    }

    const rest = /^(?:https?|socks5h?|socks4):\/\/(.*)$/.exec(value)?.[1];

    return rest !== undefined && bodyOk(rest);
}

export function bypassOk(value: string): boolean {
    if (value === "" || value.length > 512) {
        return false;
    }

    if (value.includes("\n") || value.includes("\r") || value.includes(" ")) {
        return false;
    }

    return /^[A-Za-z0-9.*:,_/-]+$/.test(value);
}

export function valueOk(name: string, value: string): boolean {
    if (name === "no_proxy" || name === "NO_PROXY") {
        return bypassOk(value);
    }

    if (
        name === "http_proxy" ||
        name === "https_proxy" ||
        name === "all_proxy" ||
        name === "HTTP_PROXY" ||
        name === "HTTPS_PROXY" ||
        name === "ALL_PROXY"
    ) {
        return urlOk(value);
    }

    return false;
}

/** 返回可以放进子进程 env 的 "name=value" 列表 */
export function assignments(): string[] {
    const out: string[] = [];

    for (const name of PROXY_NAMES) {
        const value = process.env[name];

        if (value && valueOk(name, value)) {
            out.push(`${name}=${value}`);
        }
    }

    return out;
}
