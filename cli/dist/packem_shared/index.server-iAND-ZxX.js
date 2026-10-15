const o$1 = (e) => "Deno" in e;
const i$2 = () => {
  if (o$1(globalThis)) {
    const e = globalThis.Deno, n = e.execPath();
    let s = n;
    try {
      const { importMeta: r } = globalThis;
      r?.url && (s = r.url);
    } catch {
    }
    return [n, s, ...e.args];
  }
  return process.argv;
};
const c$2 = () => o$1(globalThis) ? globalThis.Deno.cwd() : process.cwd();
const a$1 = () => {
  if (o$1(globalThis)) {
    const e = globalThis.Deno;
    return /* @__PURE__ */ new Proxy(e.env.toObject(), { get: (n, s) => typeof s == "string" ? e.env.get(s) : n[s], has: (n, s) => typeof s == "string" ? e.env.has(s) : s in n, set: (n, s, r) => typeof s == "string" ? (r === void 0 || e.env.set(s, r), true) : false });
  }
  return process.env;
};
const l$1 = () => o$1(globalThis) ? [] : process.execArgv;
const g$2 = () => o$1(globalThis) ? globalThis.Deno.execPath() : process.execPath;
const u$1 = () => {
  if (o$1(globalThis)) {
    const n = globalThis.Deno.build?.os ?? "unknown";
    return n === "windows" ? "win32" : n;
  }
  return process.platform;
};
const h$2 = () => {
  if (o$1(globalThis)) {
    const n = globalThis.Deno.build?.arch ?? "unknown";
    return n === "x86_64" ? "x64" : n === "aarch64" ? "arm64" : n;
  }
  return process.arch;
};
const b$1 = (e = 0) => {
  if (o$1(globalThis)) throw globalThis.Deno.exit(e), new Error("Deno exit failed");
  process.exit(e);
};
const d$1 = (e, n) => {
  if (o$1(globalThis)) return () => {
  };
  const s = process;
  return s.on(e, n), () => {
    s.removeListener(e, n);
  };
};

const n = String.raw;
const p$1 = n`\p{Emoji}(?:\p{EMod}|[\u{E0020}-\u{E007E}]+\u{E007F}|\uFE0F?\u20E3?)`;
const t$1 = () => new RegExp(n`\p{RI}{2}|(?![#*\d](?!\uFE0F?\u20E3))${p$1}(?:\u200D${p$1})*`, "gu");
Object.freeze(/* @__PURE__ */ new Map([[0, 0], [1, 22], [2, 22], [3, 23], [4, 24], [7, 27], [8, 28], [9, 29], [30, 39], [31, 39], [32, 39], [33, 39], [34, 39], [35, 39], [36, 39], [37, 39], [40, 49], [41, 49], [42, 49], [43, 49], [44, 49], [45, 49], [46, 49], [47, 49], [90, 39]]));
const u = /[\u001B\u009B](?:[[()#;?]{0,10}(?:\d{1,4}(?:;\d{0,4})*)?[0-9A-ORZcf-nqry=><]|\]8;;[^\u0007\u001B]{0,100}(?:\u0007|\u001B\\))/g;
const i$1 = /[\u0000-\u0008\n-\u001F\u007F-\u009F]{1,1000}/y;
const c$1 = t$1();
const r = /[-_./\s]+/g;
const o = /(\u001B\[[0-9;]*[a-z])/i;
const a = new RegExp("\\p{Script=Arabic}", "u");
const E = new RegExp("\\p{Script=Bengali}", "u");
const g$1 = new RegExp("\\p{Script=Cyrillic}", "u");
const s = new RegExp("\\p{Script=Devanagari}", "u");
const w$2 = new RegExp("\\p{Script=Ethiopic}", "u");
const S$2 = new RegExp("\\p{Script=Greek}", "u");
const R$1 = new RegExp("\\p{Script=Greek}+|\\p{Script=Latin}+|[^\\p{Script=Greek}\\p{Script=Latin}]+", "gu");
const x$2 = new RegExp("\\p{Script=Gujarati}", "u");
const l = new RegExp("\\p{Script=Gurmukhi}", "u");
const B = new RegExp("\\p{Script=Hangul}", "u");
const F = new RegExp("\\p{Script=Hebrew}", "u");
const m$1 = new RegExp("\\p{Script=Hiragana}", "u");
const y$2 = new RegExp("\\p{Script=Han}", "u");
const d = new RegExp("\\p{Script=Kannada}", "u");
const h$1 = new RegExp("\\p{Script=Katakana}", "u");
const k$1 = new RegExp("\\p{Script=Khmer}", "u");
const G$2 = new RegExp("\\p{Script=Lao}", "u");
const b = new RegExp("\\p{Script=Latin}", "u");
const H = new RegExp("\\p{Script=Malayalam}", "u");
const M = new RegExp("\\p{Script=Myanmar}", "u");
const j$2 = new RegExp("\\p{Script=Oriya}", "u");
const K = new RegExp("\\p{Script=Sinhala}", "u");
const L = new RegExp("\\p{Script=Tamil}", "u");
const O$1 = new RegExp("\\p{Script=Telugu}", "u");
const T$1 = new RegExp("\\p{Script=Thai}", "u");
const f = new RegExp("\\p{Script=Tibetan}", "u");
const z = /[\u02BB\u02BC\u0027]/u;
const A$1 = (e) => e.replace(c$1, "");

const O = 0;
const C$1 = 1;
const S$1 = 2;
const _ = 3;

const h = /^-{1,2}(no-color|no-colors|color=false|color=never)$/;
const v$1 = /^-{1,2}(color=256)$/;
const g = /^-{1,2}(color=16m|color=full|color=truecolor)$/;
const x$1 = /^-{1,2}(color|colors|color=true|color=always)$/;
const y$1 = /-mono|dumb/i;
const P$2 = /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/;
const D = /-256(color)?$/i;
const G$1 = /^screen|^tmux|^xterm|^vt[1-5]\d\d|^ansi|color|mintty|rxvt|cygwin|linux/i;
const w$1 = () => {
  const u = globalThis.process?.getBuiltinModule;
  return typeof u != "function" ? "" : u("node:os").release();
};
const m = (u, a = {}) => {
  const { isTTY: M, sniffFlags: _$1 = true } = a, s = globalThis, R = s.Deno != null, l = s.process ?? s.Deno ?? {}, I = l.argv ?? l.args ?? [], p = _$1 ? I.indexOf("--") : -1, E = (r) => {
    if (!_$1) return false;
    const c = I.findIndex((b) => r.test(b));
    return c !== -1 && (p === -1 || c < p);
  };
  let e = {};
  try {
    e = R ? s.Deno.env.toObject() : l.env ?? {};
  } catch {
  }
  const C = "FORCE_COLOR", N = C in e, o = e[C] ?? void 0, A = typeof o == "string", S = typeof o == "number";
  let t;
  if (o === "true") t = C$1;
  else if (o === "false") t = O;
  else if (A && o.length === 0) t = C$1;
  else if (A && o.length > 0) {
    const r = Number.parseInt(o, 10);
    t = Number.isNaN(r) ? void 0 : Math.max(0, Math.min(r, 3));
  } else S && (t = Number.isNaN(o) ? void 0 : Math.max(0, Math.min(o, 3)));
  if (o !== "true" && o !== "false" && t !== void 0 && t < 4) return t;
  const L = N && t !== void 0 && t > 0;
  if (N && t === 0 || E(h) || !L && "NO_COLOR" in e) return O;
  if (E(v$1)) return S$1;
  if (E(g)) return _;
  if (E(x$1)) return C$1;
  const d = t ?? O;
  if ("TF_BUILD" in e && "AGENT_NAME" in e) return C$1;
  if (e.TERM && y$1.test(e.TERM)) return d;
  if (R ? s.Deno.build.os === "windows" : l.platform === "win32") {
    if ("WT_SESSION" in e) return _;
    if ("ANSICON" in e) return C$1;
    try {
      let r;
      R ? r = s.Deno.osRelease() : typeof l.os?.release == "function" ? r = l.os.release() : r = w$1();
      const c = r.split(".");
      return Number(c[0]) >= 10 && Number(c[2]) >= 10586 ? Number(c[2]) >= 14931 ? _ : S$1 : C$1;
    } catch {
    }
  }
  if ("CI" in e) return ["GITEA_ACTIONS", "CIRCLECI", "GITHUB_WORKFLOW", "GITHUB_ACTIONS"].some((r) => r in e) ? _ : ["TRAVIS", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some((r) => r in e) || e.CI_NAME === "codeship" ? C$1 : d;
  if (e.TERMINAL_EMULATOR?.includes("JediTerm")) return _;
  if ("TEAMCITY_VERSION" in e) return P$2.test(e.TEAMCITY_VERSION) ? C$1 : O;
  if (e.COLORTERM === "truecolor") return _;
  if (e.TERM === "xterm-kitty") return _;
  if (e.TERM === "xterm-ghostty") return _;
  if (e.TERM === "wezterm") return _;
  if ("TERM_PROGRAM" in e) {
    const r = Number.parseInt((e.TERM_PROGRAM_VERSION ?? "").split(".")[0], 10);
    if (e.TERM_PROGRAM === "iTerm.app") return r >= 3 ? _ : S$1;
    if (e.TERM_PROGRAM === "Apple_Terminal") return S$1;
  }
  if (D.test(e.TERM)) return S$1;
  let f;
  return M !== void 0 ? f = M : R ? f = u === "out" ? s.Deno.stdout.isTerminal() : s.Deno.stderr.isTerminal() : "PM2_HOME" in e && "pm_id" in e ? f = true : f = !!l[`std${u}`]?.isTTY, f && G$1.test(e.TERM) ? C$1 : "COLORTERM" in e ? C$1 : d;
};
const U = () => m("out");
const $$1 = () => m("err");

function R({ onlyFirst: t = false } = {}) {
  const s = "(?:\\u001B\\][^\\u0007\\u001B\\u009C]*(?:\\u0007|\\u001B\\u005C|\\u009C))|[\\u001B\\u009B][[\\]()#;?]*(?:\\d{1,4}(?:[;:]\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]";
  return new RegExp(s, t ? void 0 : "g");
}
const S = (t, e, o) => e > t ? e : Math.min(t, o);
const w = /^#?([a-f\d]{3}|[a-f\d]{6})$/i;
const A = (t) => {
  let [, e] = w.exec(t) ?? [];
  const o = e ? e.length : 0;
  if (o === 3) {
    const s = e.charAt(0), l = e.charAt(1), b = e.charAt(2);
    e = s + s + l + l + b + b;
  } else if (o !== 6) return globalThis.process?.env?.NODE_ENV !== "production" && console.warn(`[@visulima/colorize] Invalid hex color "${t}"; expected a 3- or 6-digit hex string (e.g. "#96C" or "#E0115F"). Falling back to black.`), [0, 0, 0];
  const r = Number.parseInt(e, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
};
const $ = (t, e, o) => t === e && e === o ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 51) + 6 * Math.round(e / 51) + Math.round(o / 51);
const y = (t) => {
  let e, o, r;
  if (t < 8) return 30 + t;
  if (t < 16) return 90 + (t - 8);
  if (t >= 232) e = o = r = ((t - 232) * 10 + 8) / 255;
  else {
    t -= 16;
    const b = t % 36;
    e = Math.floor(t / 36) / 5, o = Math.floor(b / 6) / 5, r = b % 6 / 5;
  }
  const s = Math.max(e, o, r) * 2;
  if (s === 0) return 30;
  const l = 30 + (Math.round(r) << 2 | Math.round(o) << 1 | Math.round(e));
  return s === 2 ? l + 60 : l;
};
const p = (t, e, o) => y($(t, e, o));
const c = 39;
const i = 49;
const v = 10;
const C = { close: "", open: "" };
const x = (t) => {
  const e = t > 0 ? (n, g) => ({ close: `\x1B[${String(g)}m`, open: `\x1B[${String(n)}m` }) : () => C, o = (n) => (g, u, d) => n($(Number(g), Number(u), Number(d))), r = (n) => (g) => {
    const [u, d, m] = A(g);
    return n(u, d, m);
  };
  let s = (n) => e(`38;5;${String(n)}`, c), l = (n) => e(`48;5;${String(n)}`, i), b = (n, g, u) => e(`38;2;${String(n)};${String(g)};${String(u)}`, c), f = (n, g, u) => e(`48;2;${String(n)};${String(g)};${String(u)}`, i);
  t === 1 ? (s = (n) => e(y(Number(n)), c), l = (n) => e(y(Number(n)) + v, i), b = (n, g, u) => e(p(Number(n), Number(g), Number(u)), c), f = (n, g, u) => e(p(Number(n), Number(g), Number(u)) + v, i)) : t === 2 && (b = o(s), f = o(l));
  const B = { bold: e(1, 22), dim: e(2, 22), hidden: e(8, 28), inverse: e(7, 27), italic: e(3, 23), overline: e(53, 55), reset: e(0, 0), strike: e(9, 29), strikethrough: e(9, 29), underline: e(4, 24), underlineCurly: e("4:3", 24), underlineDashed: e("4:5", 24), underlineDotted: e("4:4", 24), underlineDouble: e("4:2", 24), visible: C }, a = { bgBlack: e(40, i), bgBlackBright: e(100, i), bgBlue: e(44, i), bgBlueBright: e(104, i), bgCyan: e(46, i), bgCyanBright: e(106, i), bgGray: e(100, i), bgGreen: e(42, i), bgGreenBright: e(102, i), bgGrey: e(100, i), bgMagenta: e(45, i), bgMagentaBright: e(105, i), bgRed: e(41, i), bgRedBright: e(101, i), bgWhite: e(47, i), bgWhiteBright: e(107, i), bgYellow: e(43, i), bgYellowBright: e(103, i), black: e(30, c), blackBright: e(90, c), blue: e(34, c), blueBright: e(94, c), cyan: e(36, c), cyanBright: e(96, c), gray: e(90, c), green: e(32, c), greenBright: e(92, c), grey: e(90, c), magenta: e(35, c), magentaBright: e(95, c), red: e(31, c), redBright: e(91, c), white: e(37, c), whiteBright: e(97, c), yellow: e(33, c), yellowBright: e(93, c) }, h = { bg: (n) => l(S(n, 0, 255)), bgHex: r(f), bgRgb: (n, g, u) => f(S(n, 0, 255), S(g, 0, 255), S(u, 0, 255)), fg: (n) => s(S(n, 0, 255)), hex: r(b), rgb: (n, g, u) => b(S(n, 0, 255), S(g, 0, 255), S(u, 0, 255)) };
  return { baseColors: a, baseStyles: B, styleMethods: h };
};
const k = U();
const j$1 = $$1();
x(k);
const P$1 = (t, e, o) => {
  if (e === "") return t;
  let r = t.indexOf(e);
  if (r < 0) return t;
  const s = e.length;
  let l = 0, b = "";
  for (; ~r; ) b += t.slice(l, r) + o, l = r + s, r = t.indexOf(e, l);
  return b + t.slice(l);
};
const T = (t, e, o) => {
  if (t == null || t === "") return "";
  let r;
  if (t.raw === void 0 ? r = String(t) : r = String.raw(t, ...e), r.includes("\x1B")) for (let s = o; s; s = s.props) r = P$1(r, s.close, s.open);
  return r.includes(`
`) && (r = r.replace(/(\r*\n)/g, `${o.closeStack}$1${o.openStack}`)), o.openStack + r + o.closeStack;
};
const G = function(t) {
  const e = t?.level ?? k, { baseColors: o, baseStyles: r, styleMethods: s } = x(e), l = {};
  let b = null;
  const f = ({ props: a }, { close: h, open: n }) => {
    const g = (a?.openStack ?? "") + n, u = h + (a?.closeStack ?? ""), d = (m, ...M) => T(m, M, d.props);
    return Object.setPrototypeOf(d, b), d.props = { close: h, closeStack: u, open: n, openStack: g, props: a }, d.open = g, d.close = u, d;
  }, B = (a) => String(a);
  B.strip = (a) => a.replaceAll(R(), "");
  for (const a in o) l[a] = { get() {
    const h = f(this, o[a]);
    return Object.defineProperty(this, a, { value: h }), h;
  } };
  for (const a in r) l[a] = { get() {
    const h = f(this, r[a]);
    return Object.defineProperty(this, a, { value: h }), h;
  } };
  for (const a in s) l[a] = { get() {
    return (...h) => f(this, s[a](...h));
  } };
  return l.ansi256 = l.fg, l.bgAnsi256 = l.bg, b = Object.defineProperties({}, l), Object.setPrototypeOf(B, b), B;
};

const t = new G();
new G({ level: j$1 });
t.ansi256;
t.bg;
t.bgAnsi256;
t.bgHex;
t.bgRgb;
t.fg;
t.hex;
t.rgb;
t.strip;
t.bgBlack;
t.bgBlackBright;
t.bgBlue;
t.bgBlueBright;
t.bgCyan;
t.bgCyanBright;
t.bgGray;
t.bgGreen;
t.bgGreenBright;
t.bgGrey;
t.bgMagenta;
t.bgMagentaBright;
t.bgRed;
t.bgRedBright;
t.bgWhite;
t.bgWhiteBright;
t.bgYellow;
t.bgYellowBright;
t.black;
t.blackBright;
t.blue;
t.blueBright;
const j = t.bold;
const q = t.cyan;
t.cyanBright;
t.dim;
t.gray;
const J = t.green;
t.greenBright;
t.grey;
t.hidden;
const P = t.inverse;
t.italic;
t.magenta;
t.magentaBright;
t.overline;
t.red;
t.redBright;
t.reset;
t.strike;
t.strikethrough;
const et = t.underline;
t.underlineCurly;
t.underlineDashed;
t.underlineDotted;
t.underlineDouble;
t.visible;
t.white;
t.whiteBright;
const bt = t.yellow;
t.yellowBright;

export { $$1 as $, A$1 as A, B, j$2 as C, t as D, E, F, G$2 as G, H, et as I, j as J, K, L, M, u as N, O$1 as O, i$1 as P, P as Q, R$1 as R, S$2 as S, T$1 as T, U, q as V, J as W, bt as X, a$1 as a, b$1 as b, c$2 as c, d$1 as d, c$1 as e, g$1 as f, g$2 as g, h$2 as h, i$2 as i, b as j, h$1 as k, l$1 as l, m$1 as m, a as n, o, l as p, d as q, r, s, f as t, u$1 as u, k$1 as v, w$2 as w, x$2 as x, y$2 as y, z };
