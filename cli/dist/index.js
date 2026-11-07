import { Ud, ru, Ql, QY, GY, xY, PY, KY, AY, OY, EY, qY, UY, ik, ek, ak, gk, tk, hk, lk, yk, bk, wk, mk, Ck, Hk, Qk, Gk, xk, Pk, Kk, Ak, Ok, Ek, qk, Uk, iL, eL, aL, gL, tL, hL, lL, yL, bL, wL, mL, YL, LL, SL, CL, HL, TL, QL, GL, xL, PL, KL, AL, OL, EL, qL, UL, iZ, eZ, aZ, gZ, tZ, hZ, lZ, yZ, bZ, wZ, mZ, YZ, LZ, SZ, CZ, HZ, TZ, QZ, GZ, xZ, PZ, KZ, AZ, OZ, EZ, qZ, UZ, i1, e1, a1, g1, t1, h1, l1, y1, b1, w1, m1, Y1, L1, S1, C1, H1, T1, Q1, G1, x1, P1, K1, A1, O1, E1, q1, U1, iS, eS, aS, gS, tS, hS, lS, yS, bS, wS, mS, YS, LS, SS, CS, HS, TS, QS, GS, xS, PS, KS, AS, OS, ES, qS, US, iJ, eJ, aJ, gJ, tJ, hJ, lJ, yJ, bJ, wJ, mJ, YJ, LJ, SJ, CJ, HJ, TJ, QJ, GJ, xJ, PJ, KJ, AJ, OJ, EJ, qJ, UJ, Jn } from "./index.parts.js";
import { createRequire } from 'node:module';
import { a as a$3, u as u$1, b as b$3, h as h$2, i as i$1, c as c$1, g as g$1, l as l$1, d as d$2, o, A as A$3, r as r$1, e as c$2, f as g$2, j as b$4, S as S$3, R as R$5, z as z$3, k as h$3, y, m as m$2, B as B$5, F as F$3, n as a$4, s as s$2, E as E$4, x as x$3, p as l$2, q as d$3, L as L$3, O as O$2, H as H$3, K as K$5, T as T$2, G as G$4, t as f$1, M as M$3, w as w$2, v as k$3, C as j$3, D as t$1 } from './packem_shared/index.server-iAND-ZxX.js';
import { spawnSync } from 'node:child_process';
import { statSync, accessSync, constants, mkdirSync, appendFileSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { homedir } from 'node:os';
import * as readline from 'node:readline';

const s$1 = 16;
const t = 32;
const n$2 = 64;
const E$3 = 128;
const c = "positionals";

let h$1 = class h extends Error {
  loc;
  title;
  hint;
  type = "VisulimaError";
  constructor({ cause: t, hint: e, location: i, message: a, name: c, stack: n, title: o }) {
    super(a, { cause: t }), this.title = o, this.name = c, this.stack = n ?? this.stack, this.loc = i, this.hint = e;
  }
  setLocation(t) {
    this.loc = t;
  }
  setName(t) {
    this.name = t;
  }
  setMessage(t) {
    this.message = t;
  }
  setHint(t) {
    this.hint = t;
  }
};

let n$1 = class n extends h$1 {
  code;
  context;
  constructor(r, e, o) {
    super({ message: r, name: "CerebroError" }), this.code = e, this.context = o;
  }
};

class n extends n$1 {
  argument;
  choices;
  value;
  constructor(e, o, r) {
    super(`Invalid value "${o}" for argument "${e}". Allowed values: ${r.join(", ")}`, "INVALID_CHOICE", { argument: e, choices: r, value: o }), this.name = "InvalidArgumentChoiceError", this.argument = e, this.value = o, this.choices = r, this.hint = `Pass one of: ${r.join(", ")}`;
  }
}

class e extends n$1 {
  commandName;
  missingArguments;
  constructor(i, r) {
    super(`Command "${i}" is missing required arguments: ${r.join(", ")}`, "MISSING_ARGUMENT", { commandName: i, missingArguments: r }), this.name = "MissingArgumentError", this.commandName = i, this.missingArguments = r, this.hint = `Provide the following positional arguments: ${r.join(", ")}`;
  }
}

class i extends n$1 {
  commandName;
  surplusArguments;
  constructor(r, t, e) {
    super(`Command "${r}" accepts ${String(e)} positional argument${e === 1 ? "" : "s"}, but got ${String(t.length)} extra: ${t.join(", ")}`, "SURPLUS_ARGUMENT", { commandName: r, surplusArguments: [...t] }), this.name = "SurplusArgumentError", this.commandName = r, this.surplusArguments = t, this.hint = `Remove the extra argument${t.length === 1 ? "" : "s"}, or declare a trailing "multiple: true" argument to collect them.`;
  }
}

const N$4 = { COMMAND_NOT_FOUND: "COMMAND_NOT_FOUND", COMMAND_VALIDATION_ERROR: "COMMAND_VALIDATION_ERROR", CONFLICTING_OPTIONS: "CONFLICTING_OPTIONS", INVALID_ARGUMENT: "INVALID_ARGUMENT", INVALID_CHOICE: "INVALID_CHOICE", INVALID_INPUT: "INVALID_INPUT", MISSING_ARGUMENT: "MISSING_ARGUMENT", SURPLUS_ARGUMENT: "SURPLUS_ARGUMENT", UNKNOWN_OPTION: "UNKNOWN_OPTION" };
const U$5 = /* @__PURE__ */ new Set([N$4.COMMAND_NOT_FOUND, N$4.COMMAND_VALIDATION_ERROR, N$4.CONFLICTING_OPTIONS, N$4.INVALID_ARGUMENT, N$4.INVALID_CHOICE, N$4.INVALID_INPUT, N$4.MISSING_ARGUMENT, N$4.SURPLUS_ARGUMENT, N$4.UNKNOWN_OPTION]);
const r = (O) => {
  const I = O?.code;
  return typeof I == "string" && U$5.has(I);
};
const R$4 = (O) => {
  if (!r(O)) return;
  const { hint: I, message: _ } = O, A = (Array.isArray(I) ? I : [I]).filter((T) => typeof T == "string" && T.length > 0);
  return A.length > 0 ? [_, ...A].join(`
`) : _;
};

const peq = new Uint32Array(65536);
const myers_32 = (a, b) => {
  const n = a.length;
  const m = b.length;
  const lst = 1 << n - 1;
  let pv = -1;
  let mv = 0;
  let sc = n;
  let i = n;
  while (i--) {
    peq[a.charCodeAt(i)] |= 1 << i;
  }
  for (i = 0; i < m; i++) {
    let eq = peq[b.charCodeAt(i)];
    const xv = eq | mv;
    eq |= (eq & pv) + pv ^ pv;
    mv |= ~(eq | pv);
    pv &= eq;
    if (mv & lst) {
      sc++;
    }
    if (pv & lst) {
      sc--;
    }
    mv = mv << 1 | 1;
    pv = pv << 1 | ~(xv | mv);
    mv &= xv;
  }
  i = n;
  while (i--) {
    peq[a.charCodeAt(i)] = 0;
  }
  return sc;
};
const myers_x = (b, a) => {
  const n = a.length;
  const m = b.length;
  const mhc = [];
  const phc = [];
  const hsize = Math.ceil(n / 32);
  const vsize = Math.ceil(m / 32);
  for (let i = 0; i < hsize; i++) {
    phc[i] = -1;
    mhc[i] = 0;
  }
  let j = 0;
  for (; j < vsize - 1; j++) {
    let mv2 = 0;
    let pv2 = -1;
    const start2 = j * 32;
    const vlen2 = Math.min(32, m) + start2;
    for (let k = start2; k < vlen2; k++) {
      peq[b.charCodeAt(k)] |= 1 << k;
    }
    for (let i = 0; i < n; i++) {
      const eq = peq[a.charCodeAt(i)];
      const pb = phc[i / 32 | 0] >>> i & 1;
      const mb = mhc[i / 32 | 0] >>> i & 1;
      const xv = eq | mv2;
      const xh = ((eq | mb) & pv2) + pv2 ^ pv2 | eq | mb;
      let ph = mv2 | ~(xh | pv2);
      let mh = pv2 & xh;
      if (ph >>> 31 ^ pb) {
        phc[i / 32 | 0] ^= 1 << i;
      }
      if (mh >>> 31 ^ mb) {
        mhc[i / 32 | 0] ^= 1 << i;
      }
      ph = ph << 1 | pb;
      mh = mh << 1 | mb;
      pv2 = mh | ~(xv | ph);
      mv2 = ph & xv;
    }
    for (let k = start2; k < vlen2; k++) {
      peq[b.charCodeAt(k)] = 0;
    }
  }
  let mv = 0;
  let pv = -1;
  const start = j * 32;
  const vlen = Math.min(32, m - start) + start;
  for (let k = start; k < vlen; k++) {
    peq[b.charCodeAt(k)] |= 1 << k;
  }
  let score = m;
  for (let i = 0; i < n; i++) {
    const eq = peq[a.charCodeAt(i)];
    const pb = phc[i / 32 | 0] >>> i & 1;
    const mb = mhc[i / 32 | 0] >>> i & 1;
    const xv = eq | mv;
    const xh = ((eq | mb) & pv) + pv ^ pv | eq | mb;
    let ph = mv | ~(xh | pv);
    let mh = pv & xh;
    score += ph >>> m - 1 & 1;
    score -= mh >>> m - 1 & 1;
    if (ph >>> 31 ^ pb) {
      phc[i / 32 | 0] ^= 1 << i;
    }
    if (mh >>> 31 ^ mb) {
      mhc[i / 32 | 0] ^= 1 << i;
    }
    ph = ph << 1 | pb;
    mh = mh << 1 | mb;
    pv = mh | ~(xv | ph);
    mv = ph & xv;
  }
  for (let k = start; k < vlen; k++) {
    peq[b.charCodeAt(k)] = 0;
  }
  return score;
};
const distance = (a, b) => {
  if (a.length < b.length) {
    const tmp = b;
    b = a;
    a = tmp;
  }
  if (b.length === 0) {
    return a.length;
  }
  if (a.length <= 32) {
    return myers_32(a, b);
  }
  return myers_x(a, b);
};

let ht$3;
const ut$3 = (t) => (ht$3 ??= createRequire(import.meta.url))(t);
const Z$3 = typeof globalThis < "u" && typeof globalThis.process < "u" ? globalThis.process : process;
const pt$3 = (t) => {
  if (typeof Z$3 < "u" && Z$3.versions && Z$3.versions.node) {
    const [e, n] = Z$3.versions.node.split(".").map(Number);
    if (e > 22 || e === 22 && n >= 3 || e === 20 && n >= 16) return Z$3.getBuiltinModule(t);
  }
  return ut$3(t);
};
const { writeFile: ft$3, stat: dt$3, rm: gt$3, readFile: Ce$2, readdir: mt$3, mkdir: wt$3, access: yt$2 } = pt$3("node:fs/promises");
const te$4 = [{ alias: "v", description: "Turn on verbose output", group: "global", name: "verbose", type: Boolean }, { description: "Turn on debugging output", group: "global", name: "debug", type: Boolean }, { alias: "h", description: "Print out helpful usage information", group: "global", name: "help", type: Boolean }, { alias: "q", description: "Silence output", group: "global", name: "quiet", type: Boolean }, { alias: "V", description: "Print version info", group: "global", name: "version", type: Boolean }, { description: "Turn off colored output", group: "global", name: "no-color", type: Boolean }, { description: "Force colored output", group: "global", name: "color", type: Boolean }];
let B$4 = class B extends n$1 {
  commandName;
  constructor(e, n = []) {
    const s = `Command "${e}" not found${n.length > 0 ? `. Did you mean: ${n.join(", ")}?` : ""}`;
    super(s, "COMMAND_NOT_FOUND", { commandName: e, suggestions: n }), this.name = "CommandNotFoundError", this.commandName = e, n.length > 0 && (this.hint = `Try one of these commands: ${n.join(", ")}`);
  }
};
let Ge$3 = class Ge extends n$1 {
  option1;
  option2;
  constructor(e, n) {
    super(`Options "${e}" and "${n}" cannot be used together`, "CONFLICTING_OPTIONS", { option1: e, option2: n }), this.name = "ConflictingOptionsError", this.option1 = e, this.option2 = n, this.hint = `Remove either --${e} or --${n}`;
  }
};
let Zt$2 = class Zt extends n$1 {
  unknownOptions;
  constructor(e, n) {
    const s = e.join(", "), i = `Found unknown ${e.length === 1 ? "option" : "options"}: ${s}`;
    super(i, "UNKNOWN_OPTION", { suggestions: n, unknownOptions: e }), this.name = "UnknownOptionError", this.unknownOptions = e, n && n.length > 0 && (this.hint = `Did you mean: ${n.join(", ")}?`);
  }
};
let Qt$2 = class Qt extends n$1 {
  pluginName;
  constructor(e, n, s) {
    super(`Plugin "${e}" error: ${n}`, "PLUGIN_ERROR", { originalError: s, pluginName: e }), this.name = "PluginError", this.pluginName = e, s && (this.cause = s);
  }
};
let en$2 = class en {
  logger;
  plugins = /* @__PURE__ */ new Map();
  initialized = false;
  cachedDependencyOrder = void 0;
  constructor(e) {
    this.logger = e;
  }
  hasPlugins() {
    return this.plugins.size > 0;
  }
  register(e) {
    if (this.initialized) throw new Error(`Cannot register plugin "${e.name}" after initialization`);
    if (this.plugins.has(e.name)) throw new Error(`Plugin "${e.name}" is already registered`);
    a$3().CEREBRO_OUTPUT_LEVEL === String(E$3) && this.logger.debug(`registering plugin: ${e.name}`), this.plugins.set(e.name, e), this.cachedDependencyOrder = void 0;
  }
  async init(e) {
    if (this.initialized) throw new Error("PluginManager already initialized");
    if (this.plugins.size === 0) {
      this.logger.debug("no plugins registered, skipping initialization"), this.initialized = true;
      return;
    }
    this.validateDependencies();
    const n = this.getDependencyOrder();
    this.logger.debug(`initializing ${String(n.length)} plugin(s)...`);
    for (const s of n) if (typeof s.init == "function") {
      this.logger.debug(`initializing plugin: ${s.name}`);
      try {
        await s.init(e);
      } catch (i) {
        const o = new Qt$2(s.name, `Failed to initialize: ${i instanceof Error ? i.message : String(i)}`, i instanceof Error ? i : void 0);
        throw this.logger.error(o.message), o;
      }
    }
    this.initialized = true;
  }
  async executeLifecycle(e, n, s) {
    if (!this.initialized) throw new Error("PluginManager not initialized");
    if (this.plugins.size === 0) return;
    const i = this.getDependencyOrder();
    for (const o of i) {
      const l = o[e];
      if (typeof l == "function") {
        this.logger.debug(`executing ${e} hook for plugin: ${o.name}`);
        try {
          await (e === "afterCommand" ? l(n, s) : l(n));
        } catch (a) {
          throw this.logger.error(`Error in ${e} hook for plugin "${o.name}":`, a), a;
        }
      }
    }
  }
  async executeErrorHandlers(e, n) {
    if (!this.initialized || this.plugins.size === 0) return;
    const s = this.getDependencyOrder();
    for (const i of s) if (typeof i.onError == "function") {
      this.logger.debug(`executing error handler for plugin: ${i.name}`);
      try {
        await i.onError(e, n);
      } catch (o) {
        this.logger.error(`Error in error handler for plugin "${i.name}":`, o);
      }
    }
  }
  getDependencyOrder() {
    if (this.cachedDependencyOrder !== void 0) return this.cachedDependencyOrder;
    const e = [], n = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), i = (o) => {
      if (n.has(o)) return;
      if (s.has(o)) throw new Error(`Circular dependency detected involving plugin "${o}"`);
      const l = this.plugins.get(o);
      if (!l) throw new Error(`Plugin "${o}" not found`);
      if (s.add(o), l.dependencies) for (const a of l.dependencies) i(a);
      s.delete(o), n.add(o), e.push(l);
    };
    for (const o of this.plugins.keys()) i(o);
    return this.cachedDependencyOrder = e, e;
  }
  validateDependencies() {
    for (const e of this.plugins.values()) if (e.dependencies) {
      for (const n of e.dependencies) if (!this.plugins.has(n)) throw new Error(`Plugin "${e.name}" depends on "${n}" which is not registered`);
    }
  }
};
const Q$3 = (t) => t.type?.name === "Boolean";
const tn$2 = (t) => {
  let e = t.type ? t.type.name.toLowerCase() : "string";
  const n = t.multiple ?? t.lazyMultiple ? "[]" : "";
  return e && (e = e === "boolean" ? "" : `{underline ${e}${n}}`), e;
};
const Ie$2 = (t) => (Q$3(t) || (t.typeLabel = t.typeLabel ?? tn$2(t), t.defaultOption && (t.typeLabel = `${t.typeLabel} (D)`), t.required && (t.typeLabel = `${t.typeLabel} (R)`)), t);
const nn$2 = new RegExp(/^-([^\d-])$/);
const sn$2 = new RegExp(/^--(\S+)/);
const on$2 = new RegExp(/^-([^\d-]{2,})$/);
const rn$2 = (t) => nn$2.test(t) || sn$2.test(t) || on$2.test(t);
const an$2 = (t, e) => {
  const n = e[0] && rn$2(e[0]) || e.length === 0 ? null : e.shift() ?? null;
  if (!t.includes(n)) {
    const s = new Error(`Command not recognised: ${String(n)}`);
    throw s.command = n, s.name = "INVALID_COMMAND", s;
  }
  return { argv: e, command: n };
};
let ln$2 = class Ke extends h$1 {
  optionName;
  value;
  constructor(e, n, s) {
    super({ hint: `Pass a valid ${s} value for '${e}'.`, message: `Invalid ${s} value '${n}' for option '${e}'`, name: "INVALID_VALUE", title: "Invalid Value" }), this.optionName = e, this.value = n, Object.setPrototypeOf(this, Ke.prototype);
  }
};
let cn$2 = class He extends h$1 {
  optionName;
  constructor(e) {
    super({ cause: void 0, hint: `Remove the duplicate option '${e}' from your command line arguments.`, location: void 0, message: `Option '${e}' is already set`, name: "ALREADY_SET", stack: void 0, title: "Option Already Set" }), this.optionName = e, Object.setPrototypeOf(this, He.prototype);
  }
};
let Pe$1 = class Xe extends h$1 {
  optionName;
  constructor(e) {
    super({ cause: void 0, hint: `Check your option definitions or remove the unknown option '${e}' from your command line arguments.`, location: void 0, message: `Unknown option: --${e}`, name: "UNKNOWN_OPTION", stack: void 0, title: "Unknown Option" }), this.optionName = `--${e}`, Object.setPrototypeOf(this, Xe.prototype);
  }
};
let Ae$2 = class Ae extends h$1 {
  value;
  constructor(e) {
    super({ hint: "Use a defined option or add a defaultOption to capture this value.", message: `Unknown value: ${e}`, name: "UNKNOWN_VALUE", title: "Unknown Value" }), this.value = e, Object.setPrototypeOf(this, Ae.prototype);
  }
};
let L$2 = class Ye extends h$1 {
  constructor(e, n) {
    super({ cause: void 0, hint: n, location: void 0, message: e, name: "INVALID_DEFINITIONS", stack: void 0, title: "Invalid Option Definition" }), Object.setPrototypeOf(this, Ye.prototype);
  }
};
const G$3 = (t) => t === Boolean || typeof t == "function" && t.name === "Boolean";
const ye$2 = (t) => t === Number || typeof t == "function" && t.name === "Number";
const $e$3 = (t) => t === String || typeof t == "function" && t.name === "String";
const Le$3 = (t, e, n) => {
  const s = Number(t);
  if (e && Number.isNaN(s) && String(t).trim().toLowerCase() !== "nan") throw new ln$2(n ?? "", String(t), "Number");
  return s;
};
const hn$2 = (t, e, n = {}) => {
  const { optionName: s, strictTypes: i } = n;
  return Array.isArray(t) ? G$3(e) ? t.map(Boolean) : ye$2(e) ? t.map((o) => Le$3(o, i, s)) : $e$3(e) ? t.map(String) : t.map((o) => e(String(o))) : t === null ? null : G$3(e) ? !!t : ye$2(e) ? Le$3(t, i, s) : $e$3(e) ? typeof t == "string" ? t : String(t) : e(typeof t == "string" ? t : String(t));
};
const x$2 = (t, e, n, ...s) => {
  t && console.debug(`[command-line-args:${n}] ${e}`, ...s);
};
const un$2 = /-([a-z])/g;
const pn$2 = /^\d+$/;
const fn$2 = (t) => t.codePointAt(0) === 95;
const Me$3 = (t, e) => Array.isArray(t) ? [...t, ...e] : [t, ...e];
const Ue$3 = (t) => t === "__proto__" || t === "constructor" || t === "prototype";
const he$3 = (t, e, n, s = false) => {
  t[e] === void 0 ? t[e] = s ? [n] : n : s && Array.isArray(t[e]) ? t[e].push(n) : t[e] = [t[e], n];
};
const Se$3 = (t, e, n, s, i) => {
  let o = e.get(t) ?? n.get(t);
  if (!o && s) {
    const l = t.toLowerCase();
    o = s.get(l) ?? i?.get(l);
  }
  return o;
};
const dn$2 = (t, e, n, s) => {
  const i = n.debug ?? false;
  x$2(i, "resolveArgs called with options:", "resolver", { partial: n.partial, stopAtFirstUnknown: n.stopAtFirstUnknown }), x$2(i, "Starting argument resolution", "resolver"), x$2(i, "Tokens:", "resolver", t), x$2(i, "Definitions:", "resolver", e), x$2(i, "Processing tokens...", "resolver");
  const o = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), a = n.caseInsensitive ? /* @__PURE__ */ new Map() : void 0, u = n.caseInsensitive ? /* @__PURE__ */ new Map() : void 0, r = n.camelCase ? /* @__PURE__ */ new Map() : void 0, c = n.camelCase ? /* @__PURE__ */ new Map() : void 0;
  for (const f of e) if (o.set(f.name, f), f.alias && l.set(f.alias, f), n.caseInsensitive && a && (a.set(f.name.toLowerCase(), f), f.alias && u && u.set(f.alias.toLowerCase(), f)), n.camelCase && r && c) {
    const w = f.name.replaceAll(un$2, (v, I) => I.toUpperCase());
    r.set(f.name, w), c.set(w, f.name);
  }
  const p = /* @__PURE__ */ Object.create(null), h = /* @__PURE__ */ Object.create(null), m = [], g = [], y = /* @__PURE__ */ new Set();
  let A = false;
  const d = e.find((f) => f.defaultOption), C = e.some((f) => f.group), O = e.find((f) => ye$2(f.type));
  for (let f = 0; f < t.length; f++) {
    const w = t[f];
    if (w.kind === "option-terminator") {
      p._unknown = s.slice(w.index), A = true;
      break;
    }
    if (w.kind === "option" && w.name) {
      let v = Se$3(w.name, o, l, a, u);
      !v && w.value === void 0 && O && pn$2.test(w.name) && (v = O, w.value = w.name, w.name = O.name);
      let I = false;
      if (!v && n.negation && w.value === void 0 && w.name.startsWith("no-")) {
        const _ = w.name.slice(3), U = Se$3(_, o, l, a, u);
        U?.type && G$3(U.type) && (v = U, I = true);
      }
      const N = v ? v.name : w.name, P = v?.multiple, M = v?.lazyMultiple;
      if (Object.hasOwn(h, N) && h[N] !== void 0 && !P && !M && !n.partial) throw new cn$2(N);
      if (!v && n.partial) {
        const _ = w.rawName ?? `--${w.name}${w.value !== void 0 && w.inlineValue ? `=${w.value}` : ""}`;
        m.push({ index: w.index, value: _ });
        continue;
      }
      if (!v && n.stopAtFirstUnknown) {
        p._unknown = s.slice(w.index);
        break;
      }
      if (!v && !n.partial) throw new Pe$1(w.name);
      if (w.value === void 0) {
        const _ = t[f + 1], U = _?.kind === "option" && !("name" in _) && _.value !== void 0, T = _ && v && !(v.type && G$3(v.type)) && (_.kind === "positional" || U), lt = v && v.defaultOption && !v.multiple && !v.lazyMultiple;
        if (T && (!v?.defaultOption || lt)) if (P) {
          let D = f + 1;
          const ae = [];
          for (; D < t.length && (t[D].kind === "positional" || t[D].kind === "option" && !("name" in t[D]) && t[D].value !== void 0); ) ae.push(t[D].value), y.add(t[D].index), D++;
          h[N] = h[N] === void 0 ? ae : Me$3(h[N], ae), f = D - 1;
        } else M ? (he$3(h, N, _.value, true), y.add(_.index), f++) : (h[N] = _.value, y.add(_.index), f++);
        else v?.type && G$3(v.type) ? he$3(h, N, !I, P) : (P || M) && h[N] !== void 0 ? he$3(h, N, null, true) : h[N] = P ? [] : null;
      } else {
        let { value: _ } = w;
        if (v?.type && G$3(v.type)) switch (_) {
          case "": {
            if (n.partial) {
              const T = `${w.rawName ?? `--${w.name}`}${w.value ? `=${w.value}` : ""}`;
              g.push({ index: w.index, value: T }), _ = true;
            } else throw new Pe$1(w.name);
            break;
          }
          case "false": {
            _ = false;
            break;
          }
          case "true": {
            _ = true;
            break;
          }
          default:
            _ = true;
        }
        const U = [_];
        if (P) {
          let T = f + 1;
          for (; T < t.length && t[T].kind === "positional"; ) U.push(t[T].value), y.add(t[T].index), T++;
          f = T - 1;
        }
        h[N] === void 0 ? h[N] = P || M ? U : _ : P || M ? h[N] = Me$3(h[N], U) : h[N] = _;
      }
    } else if (w.kind === "positional" && n.stopAtFirstUnknown && !y.has(w.index) && !d) {
      x$2(i, `Found unconsumed positional token at index ${String(w.index)}, stopping processing`, "resolver"), p._unknown = s.slice(w.index);
      break;
    }
  }
  for (const [f, w] of Object.entries(h)) {
    const v = o.get(f);
    v && (v.multiple || v.lazyMultiple) && !Array.isArray(w) && (h[f] = [w]);
  }
  const k = (f) => f.kind === "option" && !o.has(f.name ?? "") && !l.has(f.name ?? "") && (!n.caseInsensitive || !a?.has(f.name?.toLowerCase() ?? "") && !u?.has(f.name?.toLowerCase() ?? ""));
  let E = -1, H = Number.POSITIVE_INFINITY;
  if (n.stopAtFirstUnknown && !A && (E = t.findIndex((f) => k(f)), E !== -1 && (H = t[E].index)), d) {
    const f = [], w = [];
    for (const v of t) v.kind === "positional" && !y.has(v.index) && v.index < H && (f.push(v.value), w.push(v));
    if (f.length > 0) {
      const v = h[d.name], I = d.multiple ?? d.lazyMultiple;
      v === void 0 ? I ? (w.forEach((N) => y.add(N.index)), h[d.name] = f) : (y.add(w[0].index), h[d.name] = f[0]) : I && (w.forEach((N) => y.add(N.index)), h[d.name] = Array.isArray(v) ? [...f, ...v] : [...f, v]);
    }
  }
  if (!n.partial) {
    for (const f of t) if (f.kind === "positional" && !y.has(f.index)) throw new Ae$2(s[f.index]);
  }
  if (n.partial && !n.stopAtFirstUnknown) {
    const f = [...m];
    for (const w of g) f.push({ index: w.index, value: w.value });
    for (const w of t) w.kind === "positional" && !y.has(w.index) && f.push({ index: w.index, value: s[w.index] });
    f.length > 0 && (f.sort((w, v) => w.index - v.index), p._unknown = f.map((w) => w.value));
  }
  if (n.stopAtFirstUnknown && !A) {
    const f = t.findIndex((v) => v.kind === "positional" && !y.has(v.index));
    let w = -1;
    if (E !== -1 && f !== -1 ? w = Math.min(E, f) : E !== -1 ? w = E : f !== -1 && (w = f), w >= 0) {
      const v = t[w].index;
      p._unknown = s.slice(v);
    }
  }
  for (const [f, w] of Object.entries(h)) {
    const v = n.camelCase ? r?.get(f) ?? f : f, I = o.get(f);
    I?.type ? p[v] = hn$2(w, I.type, { optionName: I.name, strictTypes: n.strictTypes }) : p[v] = w === void 0 ? null : w;
  }
  for (const f of e) {
    const w = n.camelCase ? r?.get(f.name) ?? f.name : f.name;
    !(w in p) && f.defaultValue !== void 0 && (f.multiple ?? f.lazyMultiple ? p[w] = Array.isArray(f.defaultValue) ? [...f.defaultValue] : [f.defaultValue] : p[w] = f.defaultValue);
  }
  if (C) {
    const f = {}, w = {}, v = {};
    for (const N of e) if (N.group) {
      const P = Array.isArray(N.group) ? N.group : [N.group];
      for (const M of P) Ue$3(M) || (f[M] ??= {});
    }
    for (const N of Object.keys(p)) if (!fn$2(N)) {
      w[N] = p[N];
      let P = N;
      n.camelCase && (P = c?.get(N) ?? N);
      const M = o.get(P);
      if (M?.group) {
        const _ = Array.isArray(M.group) ? M.group : [M.group];
        for (const U of _) Ue$3(U) || f[U] && (f[U][N] = p[N]);
      } else v[N] = p[N];
    }
    const I = { _all: w };
    for (const [N, P] of Object.entries(f)) I[N] = P;
    Object.keys(v).length > 0 && (I._none = v), p._unknown && (I._unknown = p._unknown), Object.keys(p).forEach((N) => delete p[N]), Object.assign(p, I);
  }
  const S = Object.defineProperties({}, Object.getOwnPropertyDescriptors(p));
  return x$2(i, "Final parsed result:", "resolver", S), S;
};
const Je$3 = "-";
const J$4 = Je$3.codePointAt(0);
const K$4 = "=";
const gn$2 = K$4.codePointAt(0);
const mn$2 = "--";
const wn$2 = Je$3;
const yn$2 = "--";
const Ze$3 = (t) => t.length > 2 && t.startsWith(yn$2);
const vn$2 = (t) => Ze$3(t) && !t.includes(K$4, 3);
const An$2 = (t) => Ze$3(t) && t.includes(K$4, 3);
const Cn$2 = (t) => {
  if (t.length !== 2 || t.codePointAt(0) !== J$4 || t.codePointAt(1) === J$4) return false;
  const e = t.codePointAt(1);
  return e !== void 0 && (e < 48 || e > 57);
};
const Nn$2 = (t) => {
  if (t.length <= 2 || t.codePointAt(0) !== J$4 || t.codePointAt(1) === J$4) return false;
  const e = t.codePointAt(1);
  return !(e !== void 0 && e >= 48 && e <= 57);
};
const bn$2 = (t) => {
  const e = [];
  let n = 0, s = [], i = 0, o = -1, l = 0;
  for (; i < s.length || n < t.length; ) {
    let a;
    if (i < s.length ? (a = s[i], i++) : (a = t[n], n++), l > 0 ? l-- : o++, a === mn$2) {
      e.push({ index: o, kind: "option-terminator" });
      const u = [...s.slice(i), ...t.slice(n)], r = u.map((c, p) => ({ index: o + p + 1, kind: "positional", value: c }));
      e.push(...r), o += u.length;
      break;
    }
    if (Cn$2(a)) {
      const u = a.charAt(1);
      e.push({ index: o, kind: "option", name: u, rawName: a });
      continue;
    }
    if (Nn$2(a) && !a.includes(K$4)) {
      const u = [];
      let r = "", c = false;
      for (let p = 1; p < a.length; p++) {
        const h = a.charAt(p);
        c ? r += h : h.codePointAt(0) === gn$2 ? c = true : u.push(`${wn$2}${h}`);
      }
      if (c) if (u.length > 0) {
        const p = u.pop();
        u.push(`${p}=${r}`);
      } else u.push(r);
      s = i < s.length ? [...u, ...s.slice(i)] : u, i = 0, l = u.length;
      continue;
    }
    if (vn$2(a)) {
      const u = a.slice(2);
      e.push({ index: o, kind: "option", name: u, rawName: a });
      continue;
    }
    if (An$2(a)) {
      const u = a.indexOf(K$4), r = a.slice(2, u), c = a.slice(u + 1);
      e.push({ index: o, inlineValue: true, kind: "option", name: r, rawName: a, value: c });
      continue;
    }
    if (a.length > 2 && a.codePointAt(0) === J$4 && a.codePointAt(1) !== J$4 && a.includes(K$4)) {
      const u = a.indexOf(K$4), r = a.charAt(1), c = a.slice(u + 1);
      e.push({ index: o, inlineValue: true, kind: "option", name: r, rawName: a, value: c });
      continue;
    }
    e.push({ index: o, kind: "positional", value: a });
  }
  return e;
};
const On$2 = /\d/;
const _n$2 = (t) => typeof t == "function";
const En$1 = (t, e, n) => {
  const s = n?.debug ?? false;
  x$2(s, "Validating definitions:", "validation", t, "caseInsensitive:", e);
  const i = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set();
  let u = 0;
  for (const r of t) {
    if (x$2(s, "Checking definition:", "validation", r), !r.name) throw x$2(s, "Validation failed: name is required", "validation"), new L$2("Invalid option definition: name is required");
    if (typeof r.name != "string") throw new L$2("Invalid option definition: name must be a string");
    if (r.name.trim() === "") throw new L$2("Invalid option definition: name cannot be empty");
    const c = e ? r.name.toLowerCase() : "";
    if (i.has(r.name) || e && l.has(c)) throw new L$2(`Invalid option definition: duplicate name '${r.name}'`);
    if (o.has(r.name) || e && a.has(c)) throw new L$2(`Invalid option definition: name '${r.name}' conflicts with an existing alias`);
    if (i.add(r.name), e && l.add(c), r.alias !== void 0) {
      if (typeof r.alias != "string") throw new L$2("Invalid option definition: alias must be a string");
      if (r.alias.length !== 1) throw new L$2("Invalid option definition: alias must be a single character");
      if (On$2.test(r.alias)) throw new L$2("Invalid option definition: alias cannot be numeric");
      if (r.alias === "-") throw new L$2('Invalid option definition: alias cannot be "-"');
      const p = e ? r.alias.toLowerCase() : "";
      if (o.has(r.alias) || e && a.has(p)) throw new L$2(`Invalid option definition: duplicate alias '${r.alias}'`);
      if (i.has(r.alias) || e && l.has(p)) throw new L$2(`Invalid option definition: alias '${r.alias}' conflicts with an existing option name`);
      o.add(r.alias), e && a.add(p);
    }
    if (r.defaultOption && (u++, r.type !== void 0 && G$3(r.type))) throw new L$2("Invalid option definition: defaultOption cannot be Boolean type");
    if (r.type !== void 0 && !(r.type === Boolean || r.type === Number || r.type === String || typeof r.type == "function" && _n$2(r.type))) throw new L$2("Invalid option definition: invalid type");
  }
  if (u > 1) throw x$2(s, "Validation failed: multiple defaultOptions not allowed", "validation"), new L$2("Invalid option definition: multiple defaultOptions not allowed");
  x$2(s, "Validation completed successfully", "validation");
};
function xn$2(t, e = {}) {
  const n = e.debug ?? false;
  x$2(n, "Starting command-line-args parsing", "index"), x$2(n, "Options:", "index", e);
  const s = { ...e };
  s.stopAtFirstUnknown && (s.partial = true);
  const i = Array.isArray(t) ? t : [t];
  x$2(n, "Normalized definitions:", "index", i), En$1(i, s.caseInsensitive, n ? s : void 0);
  let { argv: o } = s;
  o ??= process.argv.slice(2), x$2(n, "Using argv:", "index", o);
  let l = o;
  s.caseInsensitive && (l = o.map((r) => {
    if (r.startsWith("--")) {
      const c = r.indexOf("="), p = (c === -1 ? r.slice(2) : r.slice(2, c)).toLowerCase();
      return c === -1 ? `--${p}` : `--${p}${r.slice(c)}`;
    }
    if (r.startsWith("-") && !r.startsWith("--") && r.length > 1) {
      const c = r.indexOf("="), p = c === -1 ? r.slice(1) : r.slice(1, c);
      if (!p) return r;
      const h = p.toLowerCase();
      return c === -1 ? `-${h}` : `-${h}${r.slice(c)}`;
    }
    return r;
  }));
  const a = bn$2(l.map(String));
  x$2(n, "Tokenized arguments:", "index", a);
  const u = dn$2(a, i, s, o);
  return x$2(n, "Command-line-args parsing completed", "index"), u;
}
let kn$2 = class kn {
  result;
  argv;
  options;
  argument;
  args;
  command;
  commandName;
  env;
  logger;
  console;
  fs;
  process;
  runtime;
  rawUnknown;
  rawArgv;
  constructor(e, n) {
    this.commandName = e, this.command = n;
  }
};
let ue$2 = class ue extends n$1 {
  commandName;
  constructor(e, n, s) {
    super(`Failed to load command "${e}": ${n}`, "COMMAND_LOADER_ERROR", { commandName: e, reason: n }), this.name = "CommandLoaderError", this.commandName = e, this.hint = "Ensure the loader resolves to a module with a default export that is the command handler function.", s !== void 0 && (this.cause = s);
  }
};
const In$2 = /^-{1,2}(\w+)(=(.+))?$/;
const Qe$3 = (t, e, n, s) => {
  const i = In$2.exec(t);
  if (i === null) return {};
  const o = i[1];
  if (!o) return {};
  const l = n && s ? n.get(o) ?? s.get(o) : e.find((a) => a.name === o || a.alias === o);
  return l !== void 0 ? { argName: l.name, argValue: i[3], option: l } : {};
};
const Te$3 = (t, e) => {
  if (e.type === void 0) return t;
  if (e.type.name === "Boolean") {
    if (t === "true" || t === "1") return e.type(true);
    if (t === "false" || t === "0") return e.type(false);
  }
  return e.type(t);
};
const Pn$2 = /* @__PURE__ */ new Set(["0", "1", "false", "true"]);
const $n$2 = (t, e, n, s) => {
  if (e.length === 0 || t.length === 0) return {};
  const i = (o, l) => {
    const { argName: a, argValue: u, option: r } = Qe$3(l, e, n, s), { lastOption: c } = o;
    return r && Q$3(r) && u && a ? o.partial[a] = Te$3(u, r) : o.lastName && c && Q$3(c) && Pn$2.has(l) && (o.partial[o.lastName] = Te$3(l, c)), { lastName: a, lastOption: r, partial: o.partial };
  };
  return t.reduce(i, { partial: {} }).partial;
};
const Ln$2 = /* @__PURE__ */ new Set(["0", "1", "false", "true"]);
const Mn$2 = (t, e, n, s) => {
  if (e.length === 0 || t.length === 0) return t;
  const i = (o, l) => {
    const { argValue: a, option: u } = Qe$3(l, e, n, s), { lastOption: r } = o;
    if (r && Q$3(r) && Ln$2.has(l)) {
      const { args: p } = o;
      return { args: p.slice(0, -1) };
    }
    return u && Q$3(u) && a ? { args: o.args } : { args: [...o.args, l], lastOption: u };
  };
  return t.reduce(i, { args: [] }).args;
};
const De$2 = (t) => {
  const e = /* @__PURE__ */ new Map();
  for (const n of t) {
    const s = e.get(n.name);
    s ? e.set(n.name, { ...s, ...n }) : e.set(n.name, n);
  }
  return [...e.values()];
};
const Un$2 = (t) => {
  if (t === void 0) return;
  const e = t.toLowerCase().trim();
  return e === "true" || e === "1" || e === "yes" || e === "on";
};
const Sn$2 = (t, e) => {
  if (!t.type) return e;
  if (e === void 0) return;
  if (t.type === Boolean || typeof t.type == "function" && t.type.name === "Boolean") return Un$2(e);
  if (t.type === Number || typeof t.type == "function" && t.type.name === "Number") {
    const o = Number.parseFloat(e);
    return Number.isNaN(o) ? void 0 : o;
  }
  return t.type === String || typeof t.type == "function" && t.type.name === "String" ? e : t.type(e);
};
const Tn$2 = /_./g;
const Dn$2 = /^[A-Z]/;
const Vn$2 = (t) => t.toLowerCase().replaceAll(Tn$2, (e) => e[1]?.toUpperCase() ?? e).replace(Dn$2, (e) => e.toLowerCase());
const jn$2 = (t, e = a$3()) => {
  if (!t || t.length === 0) return {};
  const n = {};
  for (const s of t) {
    const i = e[s.name], o = Sn$2(s, i), l = o === void 0 ? s.defaultValue : o, a = Vn$2(s.name);
    n[a] = l;
  }
  return n;
};
const Rn$2 = /-([a-z])/g;
const et$4 = (t) => t.replaceAll(Rn$2, (e, n) => n.toUpperCase());
const Ve$2 = (t, e) => t.type === void 0 ? e : t.type(e);
const Bn$2 = (t, e) => {
  const { choices: n } = t;
  if (!n || n.length === 0) return [];
  const s = [];
  for (const i of e) n.includes(i) || s.push({ choices: n, name: t.name, value: i });
  return s;
};
const zn$2 = (t, e) => e && t.defaultValue !== void 0 && !Array.isArray(t.defaultValue) ? [t.defaultValue] : t.defaultValue;
const Fn$2 = (t, e) => {
  const n = {}, s = [], i = [], o = t.length - 1;
  let l = 0;
  for (const [a, u] of t.entries()) {
    const r = et$4(u.name), c = a === o && u.multiple === true, p = c ? e.slice(a) : e.slice(a, a + 1);
    if (p.length === 0) {
      u.required === true && s.push(u.name), n[r] = zn$2(u, c);
      continue;
    }
    i.push(...Bn$2(u, p)), l = a + p.length, n[r] = c ? p.map((h) => Ve$2(u, h)) : Ve$2(u, p[0]);
  }
  return { invalid: i, missing: s, resolved: n, surplus: e.slice(l) };
};
const Wn$2 = (t) => {
  const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  for (const s of t) if (e.set(s.name, s), s.alias) {
    const i = Array.isArray(s.alias) ? s.alias : [s.alias];
    for (const o of i) n.set(o, s);
  }
  return { optionMapByAlias: n, optionMapByName: e };
};
const tt$4 = async (t) => {
  if (typeof t.__resolvedExecute__ == "function") return t.__resolvedExecute__;
  if (typeof t.loader != "function") throw new ue$2(t.name, "no execute or loader defined");
  let e;
  try {
    e = await t.loader();
  } catch (s) {
    throw new ue$2(t.name, s instanceof Error ? s.message : String(s), s);
  }
  const n = e.default;
  if (typeof n != "function") throw new ue$2(t.name, "loader did not return a module with a default-exported handler function");
  return t.__resolvedExecute__ = n, n;
};
const qn$2 = (t, e, n, s, i, o = []) => {
  const l = new kn$2(t.name, t), { _all: a, _unknown: u, positionals: r } = e, p = Object.keys(n).length > 0 ? { ...a, ...n } : a;
  c in p && delete p[c], l.argument = r?.[c] ?? [], l.args = {}, l.rawUnknown = [...u ?? []], l.rawArgv = [...o];
  const h = Object.keys(s).length > 0;
  return l.options = h ? { ...p, ...s } : p, l.env = jn$2(t.env, i), l;
};
const Gn$2 = (t, e, n) => {
  const s = t.options ?? [], i = s.length > 0;
  let o = De$2(i ? [...s, ...n] : n);
  if (o.length > 0) {
    for (const c of o) if (c.multiple && c.lazyMultiple) throw new Error(`Argument "${c.name}" cannot have both multiple and lazyMultiple options, please choose one.`);
  }
  const l = t.arguments !== void 0 && t.arguments.length > 0;
  (t.argument || l) && (o = [{ defaultOption: true, description: t.argument?.description, group: "positionals", multiple: true, name: c, type: t.argument?.type ?? String, typeLabel: t.argument?.typeLabel }, ...o]);
  let a, u;
  if (i) {
    const { optionMapByAlias: c, optionMapByName: p } = Wn$2(s);
    a = Mn$2(e, s, p, c), u = $n$2(e, s, p, c);
  } else a = e, u = {};
  const r = xn$2(o, { argv: a, camelCase: true, partial: true, stopAtFirstUnknown: true });
  return { arguments_: o, booleanValues: u, parsedArgs: r };
};
const pe$3 = async (t, e, n) => typeof t.execute == "function" ? t.execute(e) : (await tt$4(t))(e);
const Kn$2 = (t, e$1) => {
  if (!t.arguments || t.arguments.length === 0) return;
  const n$1 = e$1.rawUnknown.indexOf("--"), s = n$1 === -1 ? [] : e$1.rawUnknown.slice(n$1 + 1), i$1 = s.length === 0 ? e$1.argument : e$1.argument.slice(0, Math.max(0, e$1.argument.length - s.length)), o = Fn$2(t.arguments, i$1);
  if (e$1.args = o.resolved, o.missing.length > 0) throw new e(t.name, o.missing);
  const [l] = o.invalid;
  if (l) throw new n(l.name, l.value, l.choices);
  if (o.surplus.length > 0) throw new i(t.name, o.surplus, t.arguments.length);
};
let Hn$2 = class Hn {
  capacity;
  cache;
  constructor(e) {
    this.capacity = e, this.cache = /* @__PURE__ */ new Map();
  }
  get(e) {
    if (!this.cache.has(e)) return;
    const n = this.cache.get(e);
    return this.cache.delete(e), this.cache.set(e, n), n;
  }
  has(e) {
    return this.cache.has(e);
  }
  set(e, n) {
    if (this.cache.has(e)) this.cache.delete(e);
    else if (this.cache.size >= this.capacity) {
      const s = this.cache.keys().next().value;
      s !== void 0 && this.cache.delete(s);
    }
    this.cache.set(e, n);
  }
  delete(e) {
    this.cache.delete(e);
  }
  clear() {
    this.cache.clear();
  }
  size() {
    return this.cache.size;
  }
};
const Xn$2 = (t, e) => typeof t != "string" || t === "" ? "" : t[0].toLowerCase() + t.slice(1);
const Yn$2 = new RegExp("[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))|(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))", "g");
const Jn$2 = (t) => {
  if (typeof t != "string") throw new TypeError(`The "value" argument must be of type string. Received ${typeof t}`);
  return t.replaceAll(Yn$2, "");
};
const fe$2 = new Hn$2(1e3);
const Zn$2 = /[.*+?^${}()|[\]\\]/g;
const Qn$2 = (t) => {
  const e = t.join("");
  if (fe$2.has(e)) {
    const i = fe$2.get(e);
    return i.lastIndex = 0, i;
  }
  const n = t.map((i) => i.replaceAll(Zn$2, String.raw`\$&`)).join("|"), s = new RegExp(n, "g");
  return fe$2.set(e, s), s;
};
const es$1 = (t) => {
  const e = [];
  let n = 0, s;
  for (c$2.lastIndex = 0; (s = c$2.exec(t)) !== null; ) s.index > n && e.push(t.slice(n, s.index)), e.push(s[0]), n = c$2.lastIndex;
  return n < t.length && e.push(t.slice(n)), e.filter(Boolean);
};
const ts$1 = /[ČŠŽĐ]/i;
const nt$4 = new Uint8Array(128);
const st$4 = new Uint8Array(128);
const ot$4 = new Uint8Array(128);
for (let t = 0; t < 128; t++) nt$4[t] = t >= 65 && t <= 90 ? 1 : 0, st$4[t] = t >= 97 && t <= 122 ? 1 : 0, ot$4[t] = t >= 48 && t <= 57 ? 1 : 0;
const de$3 = (t) => nt$4[t];
const je$2 = (t) => st$4[t];
const ge$3 = (t) => ot$4[t];
const j$2 = (t, e, n, s, i) => {
  if (t.length === 0) return [];
  let o = false;
  const l = Object.values(e);
  for (const m of l) if (m(t[0])) {
    o = true;
    break;
  }
  if (!o && !n) return [t];
  const a = [...t], u = [];
  let r = a[0], c = "other";
  const p = Object.entries(e);
  for (const m of p) {
    const [g, y] = m;
    if (y(a[0])) {
      c = g;
      break;
    }
  }
  let h = n && s ? a[0] === a[0].toLocaleUpperCase(s) : false;
  for (let m = 1; m < a.length; m++) {
    const g = a[m];
    let y = "other";
    for (const C of p) {
      const [O, k] = C;
      if (k(g)) {
        y = O;
        break;
      }
    }
    const A = n && s ? g === g.toLocaleUpperCase(s) : false;
    let d = false;
    i ? d = i(c, y, h, A, g, m, a) : (c !== y && c !== "other" && y !== "other" && (d = true), n && y !== "other" && !h && A && (d = true)), d ? (u.push(r), r = g) : r += g, c = y, n && (h = A);
  }
  return r && r.length > 0 && u.push(r), u.length > 0 ? u : [t];
};
const ns$1 = (t, e, n, s) => {
  if (n.size === 0) return e;
  for (const i of n) if (t.startsWith(i, e)) return s.push(i), e + i.length;
  return e;
};
const it$4 = (t, e = /* @__PURE__ */ new Set()) => {
  if (t.length === 0) return [];
  if (t.toUpperCase() === t) return [t];
  let n = 0;
  const s = [], i = t.length;
  for (let o = 1; o < i; o++) {
    const l = ns$1(t, n, e, s);
    if (l !== n) {
      n = l, o = n - 1;
      continue;
    }
    const a = t.codePointAt(o - 1), u = t.codePointAt(o), r = a && a < 128 && de$3(a), c = u && u < 128 && de$3(u), p = a && a < 128 && je$2(a), h = a && a < 128 && ge$3(a), m = u && u < 128 && ge$3(u);
    if (p && c) {
      s.push(t.slice(n, o)), n = o;
      continue;
    }
    if (h && !m || !h && m) {
      s.push(t.slice(n, o)), n = o;
      continue;
    }
    if (m && !h) {
      let g = false, y = false;
      if (o + 1 < i) {
        const A = t.codePointAt(o + 1);
        g = A && A < 128 && de$3(A), y = A && A < 128 && ge$3(A);
      }
      if (!y && g) {
        s.push(t.slice(n, o), t.slice(o, o + 1)), n = o + 1;
        continue;
      }
    }
    if (o + 1 < i) {
      const g = t.codePointAt(o + 1), y = g && g < 128 && je$2(g);
      if (r && c && y) {
        const A = t.slice(n, o + 1);
        e.has(A) || (s.push(t.slice(n, o)), n = o);
      }
    }
  }
  return n < i && s.push(t.slice(n)), s.filter((o) => o !== "");
};
const rt$4 = (t, e, n) => {
  if (t.length === 0) return [];
  const s = t === t.toLocaleUpperCase(e);
  if (e.startsWith("de")) {
    if (!s && t.replaceAll("ß", "SS") === t.toLocaleUpperCase(e)) return [t];
    const r = [...t], c = r.length, p = [];
    let h = r[0], m = r[0] === r[0].toLocaleUpperCase(e), g = m, y = m ? 0 : -1;
    for (let A = 1; A < c; A++) {
      const d = r[A], C = d === d.toLocaleUpperCase(e);
      if (C === m) h += d;
      else if (C) h && h.length > 0 && (p.push(h), h = d), g = true, y = A;
      else {
        if (g && A - y > 1) {
          const O = r[A - 1], k = h.slice(0, -1);
          k && k.length > 0 && p.push(k), h = O + d;
        } else h += d;
        g = false, y = -1;
      }
      m = C;
    }
    return h && h.length > 0 && p.push(h), p;
  }
  if (e.startsWith("uk") || e.startsWith("ru") || e.startsWith("bg") || e.startsWith("sr") || e.startsWith("mk") || e.startsWith("be")) {
    if (!g$2.test(t) && !b$4.test(t)) return [t];
    const r = [...t], c = r.length, p = [];
    let h = r[0];
    const m = r[0];
    let g;
    g$2.test(m) ? g = 1 : b$4.test(m) ? g = 2 : g = 0;
    let y = m === m.toLocaleUpperCase(e);
    for (let d = 1; d < c; d++) {
      const C = r[d];
      let O;
      g$2.test(C) ? O = 1 : b$4.test(C) ? O = 2 : O = 0;
      const k = C === C.toLocaleUpperCase(e);
      g !== O && (g === 1 || g === 2) && (O === 1 || O === 2) || O === g && !y && k ? (p.push(h), h = C) : h += C, g = O, y = k;
    }
    h && h.length > 0 && p.push(h);
    const A = [];
    for (let d = 0; d < p.length; d++) d < p.length - 1 && p[d].length === 1 && b$4.test(p[d]) && g$2.test(p[d + 1][0]) ? (A.push(p[d] + p[d + 1]), d += 1) : A.push(p[d]);
    return A;
  }
  if (e.startsWith("el")) {
    if (!S$3.test(t) && !b$4.test(t)) return [t];
    const r = [];
    R$5.lastIndex = 0;
    let c;
    for (; (c = R$5.exec(t)) !== null; ) r.push(c[0]);
    r.length === 0 && r.push(t);
    const p = [];
    if (r.length === 1) {
      const h = r[0];
      if (!h || !S$3.test(h[0]) || h.length === 1) return [h ?? t];
    }
    for (const h of r) {
      if (!h) continue;
      if (!S$3.test(h[0]) || h.length === 1) {
        p.push(h);
        continue;
      }
      const m = h.length;
      let g = h[0], y = h[0] === h[0].toLocaleUpperCase(e);
      for (let A = 1; A < m; A++) {
        const d = h[A], C = d === d.toLocaleUpperCase(e);
        !y && C ? (p.push(g), g = d) : g += d, y = C;
      }
      g && p.push(g);
    }
    return p;
  }
  if (e.startsWith("ja") || e.startsWith("ko")) {
    const r = e.startsWith("ja"), c = r ? { hiragana: (h) => m$2.test(h), kanji: (h) => y.test(h), katakana: (h) => h$3.test(h), latin: (h) => b$4.test(h) } : { hangul: (h) => B$5.test(h), latin: (h) => b$4.test(h) }, p = /* @__PURE__ */ new Set(["が", "で", "と", "に", "の", "は", "へ", "も", "や", "を"]);
    if (r) {
      const h = j$2(t, c, false, e, (g, y) => g === "hiragana" && y === "katakana" || g === "katakana" && y === "hiragana" || g === "hiragana" && y === "latin" || g === "katakana" && y === "latin" || g === "kanji" && y === "latin" || g === "latin" && (y === "hiragana" || y === "katakana" || y === "kanji")), m = [];
      for (const g of h) {
        const y = g;
        y.length === 1 && p.has(y) && m.length > 0 ? m[m.length - 1] = m.at(-1) + y : m.push(y);
      }
      return m.length > 0 ? m : [t];
    }
    return j$2(t, c, false, e, (h, m) => h === "hangul" && m === "latin" || h === "latin" && m === "hangul");
  }
  if (e.startsWith("sl")) {
    const r = [...t], c = r.length, p = [];
    let h = r[0], m = r[0] === r[0].toLocaleUpperCase(e);
    for (let g = 1; g < c; g++) {
      const y = r[g], A = y === y.toLocaleUpperCase(e), d = ts$1.test(y), C = g < c - 1 && r[g + 1] === r[g + 1].toLocaleUpperCase(e);
      !m && A || d && C ? (p.push(h), h = y, d && C && (p.push(h), h = "")) : h += y, m = A;
    }
    return h && h.length > 0 && p.push(h), p;
  }
  if (e.startsWith("zh")) return j$2(t, { han: (r) => y.test(r), latin: (r) => b$4.test(r) }, false, e);
  if (["ar", "fa", "he", "ur"].includes(e.split("-")[0])) {
    const r = (c) => F$3.test(c) || a$4.test(c);
    return j$2(t, { latin: (c) => b$4.test(c), rtl: (c) => r(c) }, false, e);
  }
  if (["am", "bn", "gu", "hi", "km", "kn", "lo", "ml", "mr", "ne", "or", "pa", "si", "ta", "te", "th"].includes(e.split("-")[0])) {
    const r = (c) => s$2.test(c) || E$4.test(c) || x$3.test(c) || l$2.test(c) || d$3.test(c) || L$3.test(c) || O$2.test(c) || H$3.test(c) || K$5.test(c) || T$2.test(c) || G$4.test(c) || f$1.test(c) || M$3.test(c) || w$2.test(c) || k$3.test(c) || j$3.test(c);
    return j$2(t, { indic: (c) => r(c), latin: (c) => b$4.test(c) }, false, e);
  }
  if (["be", "bg", "ru", "sr", "uk"].includes(e)) return j$2(t, { cyrillic: (r) => g$2.test(r), latin: (r) => b$4.test(r) }, true, e);
  if (["ar", "fa", "he"].includes(e)) return j$2(t, { latin: (r) => b$4.test(r), rtl: (r) => F$3.test(r) || a$4.test(r) }, false, e);
  if (e.startsWith("ko")) return j$2(t, { hangul: (r) => B$5.test(r), latin: (r) => b$4.test(r) }, false, e);
  if (e.startsWith("uz")) {
    if (!g$2.test(t) && !b$4.test(t)) return [t];
    const r = [...t], c = r.length, p = [];
    let h = r[0], m = r[0] === r[0].toLocaleUpperCase(e);
    for (let g = 1; g < c; g++) {
      const y = r[g], A = y === y.toLocaleUpperCase(e);
      if (z$3.test(y) || z$3.test(r[g - 1])) {
        h += y;
        continue;
      }
      !m && A ? (p.push(h), h = y) : h += y, m = A;
    }
    return h && h.length > 0 && p.push(h), p;
  }
  const i = [...t], o = i.length, l = [];
  let a = i[0], u = i[0] === i[0].toLocaleUpperCase(e);
  for (const r of n) if (t.startsWith(r)) {
    l.push(r), a = i[r.length], u = a === a.toLocaleUpperCase(e);
    break;
  }
  for (let r = 1; r < o; r++) {
    const c = i[r], p = c === c.toLocaleUpperCase(e);
    let h = 0;
    for (const m of n) if (t.startsWith(m, r)) {
      l.push(a, m), h = m.length, a = "";
      const g = m.at(-1);
      g && (u = g === g.toLocaleUpperCase(e));
      break;
    }
    if (h > 0) {
      r += h - 1;
      continue;
    }
    !u && p ? (l.push(a), a = c) : a += c, u = p;
  }
  return a && l.push(a), l;
};
const ss$1 = (t, e, n) => {
  const s = [], i = o.test(t) ? t.split(o).filter(Boolean) : [t];
  for (const o$1 of i) {
    const l = o$1;
    if (o.test(l)) s.push(l);
    else {
      c$2.lastIndex = 0;
      const a = c$2.test(l) ? es$1(l).filter(Boolean) : [l];
      for (const u of a) if (c$2.lastIndex = 0, c$2.test(u)) s.push(u);
      else if (e) {
        const r = e.toLowerCase().split("-")[0];
        s.push(...rt$4(u, r, n));
      } else s.push(...it$4(u, n));
    }
  }
  return s;
};
const os$1 = (t, e = {}) => {
  if (!t || typeof t != "string") return [];
  const { handleAnsi: n = false, handleEmoji: s = false, knownAcronyms: i = [], locale: o, normalize: l = false, separators: a, stripAnsi: u = false, stripEmoji: r = false } = e, c = new Set([...i].toSorted((d, C) => C.length - d.length));
  let p = t;
  u && (p = Jn$2(p)), r && (p = A$3(p));
  let h;
  Array.isArray(a) ? h = Qn$2(a) : a instanceof RegExp ? h = a : h = r$1;
  const m = [];
  let g = p;
  const y = h.flags.includes("g") ? h : new RegExp(h.source, `${h.flags}g`);
  for (; g.length > 0; ) {
    const d = y.exec(g);
    if (!d) {
      g === ".." ? m.push("..") : g === "." ? m.push(".") : g.length > 0 && m.push(g);
      break;
    }
    const C = d.index, O = d[0], k = O.length, E = g.slice(0, C), H = g.slice(C + k);
    if (O.startsWith("../")) m.push(".."), g = g.slice(C + 3);
    else if (O.startsWith("./")) m.push("."), g = g.slice(C + 2);
    else if (C === 0 && O === "..") m.push(".."), g = g.slice(2);
    else if (C === 0 && O === ".") m.push("."), g = g.slice(1);
    else {
      E.length > 0 && m.push(E);
      let S = 0;
      for (; (S = O.indexOf("../", S)) !== -1; ) m.push(".."), S += 3;
      for (S = 0; (S = O.indexOf("./", S)) !== -1; ) (S === 0 || O[S - 1] !== ".") && m.push("."), S += 2;
      let f = H;
      for (; f.startsWith("../"); ) m.push(".."), f = f.slice(3);
      for (; f.startsWith("./"); ) m.push("."), f = f.slice(2);
      if (f === "..") {
        m.push("..");
        break;
      } else if (f === ".") {
        m.push(".");
        break;
      } else g = f;
    }
    y.lastIndex = 0;
  }
  if (m.length === 0) {
    const d = p.split(h).filter(Boolean);
    m.push(...d);
  }
  let A = [];
  for (const d of m) n || s ? A.push(...ss$1(d, o, c)) : o ? A.push(...rt$4(d, o, c)) : A.push(...it$4(d, c));
  return l && (A = A.map((d) => c.has(d) ? d : o && d === d.toLocaleUpperCase(o) ? d[0] + d.slice(1).toLocaleLowerCase(o) : d.toUpperCase() === d && !c.has(d) ? d.slice(0, 1) + d.slice(1).toLowerCase() : d)), A;
};
const is$1 = (t, e) => typeof t != "string" || t === "" ? "" : t[0].toUpperCase() + t.slice(1);
const rs$1 = (t, e) => {
  const { length: n } = t;
  if (n === 0) return "";
  if (n === 1) return t[0];
  const s = [];
  let i = "", o$1 = "";
  for (let l = 0; l < n; l++) {
    const a = t[l];
    if (o.test(a)) {
      i ? (s.push(i + o$1 + a), i = "", o$1 = "") : (s.length > 0 && s.push(e), i = a);
      continue;
    }
    i ? (o$1 && (o$1 += e), o$1 += a) : (s.length > 0 && s.push(e), s.push(a));
  }
  return s.join("");
};
const Y$3 = (t, e) => {
  if (typeof t != "string" || !t) return "";
  let n = true;
  return rs$1(os$1(t, { handleAnsi: e?.handleAnsi, handleEmoji: e?.handleEmoji, knownAcronyms: e?.knownAcronyms, locale: e?.locale, normalize: e?.normalize, separators: void 0, stripAnsi: e?.stripAnsi, stripEmoji: e?.stripEmoji }).map((i) => {
    const o = i, l = o.toLowerCase();
    return n ? (n = false, Xn$2(l)) : is$1(l);
  }), "");
};
let as$1 = class as extends n$1 {
  commandName;
  missingOptions;
  constructor(e, n) {
    super(`Command "${e}" is missing required options: ${n.join(", ")}`, "COMMAND_VALIDATION_ERROR", { commandName: e, missingOptions: n }), this.name = "CommandValidationError", this.commandName = e, this.missingOptions = n, this.hint = `Provide the following required options: ${n.join(", ")}`;
  }
};
let ls$1 = class ls extends n$1 {
  choices;
  option;
  value;
  constructor(e, n, s) {
    super(`Invalid value "${n}" for option "${e}". Allowed values: ${s.join(", ")}`, "INVALID_CHOICE", { choices: s, option: e, value: n }), this.name = "InvalidChoiceError", this.option = e, this.value = n, this.choices = s, this.hint = `Use one of: ${s.map((i) => `--${e} ${i}`).join(", ")}`;
  }
};
const Re$3 = (t, e, n = false) => {
  const s = [], i = e._all ?? e;
  for (const o of t) {
    if (!n && !o.required) continue;
    const l = o.__camelCaseName__ ?? o.name;
    if (i[l] === void 0) {
      if (o.type?.name === "Boolean") {
        e[l] = false;
        continue;
      }
      s.push(o);
    }
  }
  return s;
};
const cs$1 = (t, e) => e.includes(t) ? true : Math.abs(t.length - e.length) > t.length / 2 ? false : distance(t, e) <= t.length / 3;
const R$3 = (t, e) => {
  const n = t.toLowerCase();
  return e.filter((s) => cs$1(s.toLowerCase(), n));
};
const hs$1 = (t, e) => {
  const n = [];
  if (t._unknown && t._unknown.forEach((s) => {
    const i = s.startsWith("--");
    let o = `Found unknown ${i ? "option" : "argument"} "${s}"`;
    if (i) {
      const l = R$3(s.replace("--", ""), (e.options ?? []).map((a) => a.name));
      if (l.length > 0) {
        const [a, ...u] = l.map((r) => `--${r}`);
        o += u.length > 0 ? `, did you mean ${a ?? ""} or ${u.join(", ")}?` : `, did you mean ${a ?? ""}?`;
      }
    }
    n.push(o);
  }), n.length > 0) throw new n$1(n.join(`
`), N$4.UNKNOWN_OPTION, { unknownOptions: [...t._unknown ?? []] });
};
const W$4 = (t, e) => new n$1(`Command "${t}" ${e}`, "INVALID_COMMAND", { commandName: t });
const us$1 = (t, e) => {
  const n = /* @__PURE__ */ new Set();
  for (const [s, i] of t.entries()) {
    if (typeof i != "object" || i === null) throw W$4(e, `has a positional argument at index ${String(s)} that is not an object`);
    const { name: o } = i;
    if (typeof o != "string" || o.length === 0) throw W$4(e, `has a positional argument at index ${String(s)} without a name`);
    const l = et$4(o);
    if (n.has(l)) throw W$4(e, `declares duplicate positional argument "${o}"`);
    n.add(l);
    const a = s === 0 ? void 0 : t[s - 1];
    if (i.required === true && a !== void 0 && a.required !== true) throw W$4(e, `declares required positional "${o}" after an optional one, which can never be satisfied`);
    if (i.multiple === true && s !== t.length - 1) throw W$4(e, `declares a variadic positional "${o}" that is not the last one`);
  }
};
const ps$1 = (t, e, n) => {
  const s = n.__requiredOptions__, i = s ? Re$3(s, e, true) : Re$3(t, e, false);
  if (i.length > 0) throw new as$1(n.name, i.map((o) => o.name));
  e._unknown && e._unknown.length > 0 && !n.argument && !n.arguments?.length && hs$1(e, n);
};
const fs$1 = (t, e, n) => {
  const s = n.__conflictingOptions__ ?? t.filter((i) => i.conflicts !== void 0);
  if (s.length > 0) {
    const i = s.find((o) => {
      const l = o.__camelCaseName__ ?? Y$3(o.name);
      return Array.isArray(o.conflicts) ? o.conflicts.some((a) => e[Y$3(a)] !== void 0) && e[l] !== void 0 : e[Y$3(o.conflicts)] !== void 0 && e[l] !== void 0;
    });
    if (i) throw new Ge$3(i.name, typeof i.conflicts == "string" ? i.conflicts : i.conflicts?.[0] ?? "unknown");
  }
};
const ds$1 = (t, e) => {
  const n = e.options;
  if (n) for (const s of n) {
    if (!s.choices || s.choices.length === 0) continue;
    const i = s.__camelCaseName__ ?? Y$3(s.name), o = t[i];
    if (o == null) continue;
    const l = Array.isArray(o) ? o : [o];
    for (const a of l) {
      const u = String(a);
      if (!s.choices.includes(u)) throw new ls$1(s.name, u, s.choices);
    }
  }
};
const gs$1 = (t) => {
  if (!Array.isArray(t.options)) return;
  const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  for (const i of t.options) {
    if (i.name) {
      const o = e.get(i.name) ?? [];
      o.push(i), e.set(i.name, o);
    }
    if (typeof i.alias == "string" && i.alias.length > 0) {
      const o = n.get(i.alias) ?? [];
      o.push(i), n.set(i.alias, o);
    } else if (Array.isArray(i.alias)) {
      for (const o of i.alias) if (o.length > 0) {
        const l = n.get(o) ?? [];
        l.push(i), n.set(o, l);
      }
    }
  }
  const s = [];
  for (const [i, o] of e) o.length > 1 && s.push(`Duplicate option name "${i}" in command "${t.name}": ${JSON.stringify(o)}`);
  for (const [i, o] of n) o.length > 1 && s.push(`Duplicate option alias "-${i}" used by options ${o.map((l) => `"${l.name}"`).join(", ")} in command "${t.name}"`);
  if (s.length > 0) throw new Error(s.join(`
`));
};
const ms$1 = (t) => {
  const { arguments: e } = t;
  if (e !== void 0) {
    if (!Array.isArray(e)) throw W$4(t.name, 'must declare "arguments" as an array — slot order is significant, so a record cannot express it');
    if (t.argument !== void 0) throw W$4(t.name, 'cannot define both "argument" and "arguments" — choose one');
    us$1(e, t.name);
  }
};
const ws$1 = (t, e) => {
  if (e.length === 0) return { argv: [], commandPath: void 0 };
  const n = [];
  let s;
  for (let i = 1; i <= e.length; i += 1) {
    const o = e[i - 1];
    if (o === void 0 || o.startsWith("-")) break;
    n.push(o);
    const l = n.join(" ");
    t.has(l) && (s = { commandPath: [...n], depth: i });
  }
  return s ? { argv: e.slice(s.depth), commandPath: s.commandPath } : { argv: e, commandPath: void 0 };
};
const z$2 = (t) => t.join(" ");
const Be$3 = (t, e) => e && e.length > 0 ? [...e, t] : [t];
const ze$2 = (t) => t === void 0 || Array.isArray(t) ? t : Object.entries(t).map(([e, n]) => ({ ...n, name: e }));
const ys$1 = (t) => {
  const e = ze$2(t.options), n = ze$2(t.env);
  return e === t.options && n === t.env ? t : Object.assign(Object.create(Object.getPrototypeOf(t)), t, { env: n, options: e });
};
const vs$1 = /^no-/;
const As$1 = (t) => {
  t.options?.forEach((e) => {
    e.__camelCaseName__ = Y$3(e.name);
  });
};
const Cs$1 = (t) => {
  if (!Array.isArray(t.options) || t.options.length === 0) return;
  const e = /* @__PURE__ */ new Set();
  for (const s of t.options) e.add(s.name);
  const n = [];
  for (const s of t.options) if (s.name.startsWith("no-")) {
    const i = s.name.replace(vs$1, "");
    if (!e.has(i)) {
      if (s.type !== Boolean) throw new Error(`Cannot add negated option "${s.name}" to command "${t.name}" because it is not a boolean.`);
      const o = { ...s, alias: void 0, defaultValue: s.defaultValue === void 0 ? true : !s.defaultValue, description: `Inverse of --${s.name}.`, name: i };
      n.push(o), e.add(i);
    }
  }
  n.length > 0 && t.options.push(...n);
};
const Ns$1 = (t, e) => {
  if (!e.options || e.options.length === 0) return;
  const { options: n } = t, s = /* @__PURE__ */ new Map();
  for (const o of e.options) if (o.name.startsWith("no-")) {
    const l = Y$3(o.name);
    s.set(l, o);
  }
  const i = Object.keys(n).filter((o) => s.has(o));
  if (i.length !== 0) for (const o of i) {
    const l = o.charAt(2);
    if (!l) continue;
    const a = l.toLowerCase() + o.slice(3), u = s.get(o);
    u && (u.__negated__ = true), n[a] = !n[o], Reflect.deleteProperty(n, o);
  }
};
const bs$1 = (t, e) => {
  if (!e.options || e.options.length === 0) return;
  const n = /* @__PURE__ */ new Map();
  for (const i of e.options) i.__camelCaseName__ && i.__negated__ === void 0 && i.implies !== void 0 && n.set(i.__camelCaseName__, i);
  if (n.size === 0) return;
  const { options: s } = t;
  for (const i of Object.keys(s)) {
    const o = n.get(i);
    if (o?.implies) {
      const { implies: l } = o;
      for (const [a, u] of Object.entries(l)) s[a] === void 0 && (s[a] = u);
    }
  }
};
const Os$1 = () => !!process.versions.electron;
const _s$1 = () => Os$1() && !process.defaultApp;
const Es$1 = () => _s$1() ? 0 : 1;
const xs$1 = (t) => t.slice(Es$1() + 1);
const ks$1 = " ";
const Is$1 = (t, e) => t === e ? true : t.length !== e.length ? false : t.every((n, s) => n === e[s]);
const Ps$1 = (t) => {
  if (typeof t == "string") return t.split(ks$1);
  const e = i$1();
  return Is$1(t, e) ? xs$1(t) : t;
};
const $s$1 = (t) => {
  const e = (o) => {
    t.error(`Uncaught exception: ${o.message || o}`), o.stack && t.error(o.stack), b$3(1);
  }, n = (o, l) => {
    if (o instanceof Error) t.error(`Promise rejection: ${o.message || o}`), o.stack && t.error(o.stack);
    else {
      let a;
      if (typeof o == "string") a = o;
      else try {
        a = JSON.stringify(o);
      } catch {
        a = String(o);
      }
      t.error(`Promise rejection: ${a}`);
    }
    b$3(1);
  }, s = d$2("uncaughtException", e), i = d$2("unhandledRejection", n);
  return () => {
    s(), i();
  };
};
const Fe$2 = 100;
const Ls$1 = /^[a-z][\w-]*$/i;
const ve$2 = (t, e) => {
  if (typeof t != "string" || t.trim().length === 0) throw new n$1(`${e} must be a non-empty string`, "INVALID_INPUT", { fieldName: e, value: t });
  return t.trim();
};
const We$3 = (t, e) => {
  if (!Array.isArray(t) || !t.every((n) => typeof n == "string")) throw new n$1(`${e} must be an array of strings`, "INVALID_INPUT", { fieldName: e, value: t });
  return t;
};
const ne$4 = (t, e) => {
  if (typeof t != "object" || t === null) throw new n$1(`${e} must be an object`, "INVALID_INPUT", { fieldName: e, value: t });
  return t;
};
const se$3 = (t) => {
  const e = ve$2(t, "Command name");
  if (e.length > Fe$2) throw new n$1(`Command name is too long (maximum ${String(Fe$2)} characters)`, "INVALID_COMMAND_NAME", { commandName: e, length: e.length });
  if (e.includes("..") || e.includes("/") || e.includes("\\") || e.includes(";") || e.includes("|") || e.includes("&")) throw new n$1(`Command name "${e}" contains invalid characters`, "INVALID_COMMAND_NAME", { commandName: e });
  if (!Ls$1.test(e)) throw new n$1(`Command name "${e}" must start with a letter and contain only letters, numbers, hyphens, and underscores`, "INVALID_COMMAND_NAME", { commandName: e });
  return e;
};
const Ms$1 = 1e6;
const Us$1 = 1e5;
const Ss$1 = /* @__PURE__ */ new Set([`
`, "\r", "	", "\0", '"', "$", "&", "'", "(", ")", ";", "<", ">", "[", "\\", "]", "`", "{", "|", "}"]);
const Ts$1 = (t, e = {}) => {
  if (typeof t != "string") throw new TypeError("Argument must be a string");
  const n = typeof e == "boolean" ? { checkDangerousChars: e } : e, s = n.maxArgumentLength ?? Ms$1;
  if (Number.isFinite(s) && s > 0 && t.length > s) throw new Error(`Argument is too long (maximum ${String(s)} characters)`);
  if (n.checkDangerousChars) {
    for (const i of t) if (Ss$1.has(i)) throw new Error(`Argument contains dangerous character: ${i}`);
  }
  return n.trim ? t.trim() : t;
};
const qe$2 = (t, e = {}) => {
  if (!Array.isArray(t)) throw new TypeError("Arguments must be an array");
  const n = typeof e == "boolean" ? { checkDangerousChars: e } : e, s = n.maxArguments ?? Us$1;
  if (Number.isFinite(s) && s > 0 && t.length > s) throw new Error(`Too many arguments (maximum ${String(s)})`);
  return t.map((i) => Ts$1(i, n));
};
const Ds$1 = /^-([^\d-])$/;
const Vs$1 = /^--(\S+)/;
const js$1 = /^-([^\d-]{2,})$/;
const me$3 = (t) => Ds$1.test(t) || Vs$1.test(t) || js$1.test(t);
const Rs$1 = { access: (t, e) => yt$2(t, e), mkdir: (t, e) => wt$3(t, e), readdir: (t) => mt$3(t), readFile: (async (t, e) => e === void 0 ? Ce$2(t) : Ce$2(t, e)), rm: (t, e) => gt$3(t, e), stat: (t) => dt$3(t), writeFile: (t, e, n) => ft$3(t, e, n) };
const Bs$1 = (t, e, n) => {
  const s = e.indexOf("--"), i = s === -1 ? /* @__PURE__ */ new Set() : new Set(e.slice(s + 1)), o = n.filter((u) => u.startsWith("--") && u !== "--" && !i.has(u));
  if (o.length === 0) return;
  const l = (t.options ?? []).map((u) => u.name), a = o.flatMap((u) => R$3(u.slice(2), l).map((r) => `--${r}`));
  throw new Zt$2(o, a);
};
let at$4 = class at {
  #t;
  #e;
  #h;
  #p;
  #f;
  #d;
  #O;
  #_;
  #E;
  #A;
  #x;
  #C;
  #k;
  #N = t;
  #u;
  #n;
  #s;
  #o;
  #i;
  #r;
  #I = false;
  #P;
  #$ = false;
  #g;
  #m;
  #w;
  #l = [];
  #D() {
    return this.#g === void 0 && (this.#g = [...this.#s.keys()]), this.#g;
  }
  #L() {
    return this.#m === void 0 && (this.#m = [...this.#n.keys()]), this.#m;
  }
  #a() {
    return this.#w === void 0 && (this.#w = [...this.#D(), ...this.#L()]), this.#w;
  }
  #M() {
    return this.#l.length === 0 ? te$4 : [...te$4, ...this.#l];
  }
  #U() {
    this.#g = void 0, this.#m = void 0, this.#w = void 0;
  }
  #b() {
    if (this.#h === void 0) {
      const e = Ps$1(this.#e.argv);
      this.#h = qe$2(e, { maxArguments: this.#C }), this.#V();
    }
    return this.#h;
  }
  #y() {
    return this.#A ?? a$3();
  }
  #v(e) {
    this.#N = e, this.#y().CEREBRO_OUTPUT_LEVEL = String(e);
  }
  #c() {
    return this.#N;
  }
  #V() {
    if (!this.#h) return;
    let e = false;
    for (const n of this.#h) {
      if (n === "--quiet" || n === "-q") {
        this.#v(s$1), e = true;
        break;
      }
      if (n === "--verbose" || n === "-v") {
        this.#v(n$2), e = true;
        break;
      }
      if (n === "--debug") {
        this.#v(E$3), e = true;
        break;
      }
    }
    e || this.#v(Object.hasOwn(this.#y(), "DEBUG") ? E$3 : t);
  }
  #j() {
    this.#$ || (this.#P = $s$1(this.#t), this.#$ = true);
  }
  #R() {
    return { arch: h$2(), argv: this.#b(), cwd: this.#p, env: this.#A ?? a$3(), exit: this.#E ?? ((e) => b$3(e ?? 0)), platform: u$1(), stdin: this.#x };
  }
  #S(e, n, s, i) {
    this.#c() === E$3 && this.#t.debug(`command '${i}' found, parsing command args: ${n.join(", ")}`);
    const { arguments_: o, booleanValues: l, parsedArgs: a } = Gn$2(e, n, this.#M()), u = Object.keys(l).length > 0;
    let r = a;
    u && (r = { ...a, _all: { ...a._all, ...l } }), ps$1(o, r, e);
    const c = qn$2(e, a, l, s, this.#y(), n);
    c.runtime = this, c.argv = this.#b(), c.fs = this.#_ ?? Rs$1, c.process = this.#R(), c.console = this.#t, Kn$2(e, c);
    const p = e.options && e.options.length > 0;
    if (p && e.options) {
      const h = e.options.filter((m) => m.name.startsWith("no-"));
      for (const m of h) {
        const g = m.name.slice(3), y = `--${m.name}`, A = `--${g}`, d = n.includes(y), C = n.includes(A);
        if (d && C) throw new Ge$3(g, m.name);
      }
    }
    return p && (Ns$1(c, e), bs$1(c, e)), fs$1(o, c.options, e), ds$1(c.options, e), this.#k && Bs$1(e, n, c.rawUnknown), this.#c() === E$3 && (this.#t.debug("command options parsed from options:"), this.#t.debug(JSON.stringify(c.options, null, 2)), this.#t.debug("command argument parsed from argument:"), this.#t.debug(JSON.stringify(c.argument, null, 2))), { arguments_: o, booleanValues: l, commandArgs: r, parsedArgs: a, toolbox: c };
  }
  async #T(e, n, s) {
    const i = this.getPluginManager();
    try {
      !this.#I && i.hasPlugins() && (await i.init({ cli: this, cwd: this.#p, logger: this.#t }), this.#I = true), await i.executeLifecycle("execute", n), await i.executeLifecycle("beforeCommand", n);
      let o;
      const l = s.global;
      if (l?.help) {
        const a = this.#n.get("help");
        if (!a) throw new n$1("Help command not found", "COMMAND_NOT_FOUND");
        o = await pe$3(a, n, s);
      } else if (l?.version ?? l?.V) {
        const a = this.#n.get("version");
        if (!a) throw new n$1("Version command not found", "COMMAND_NOT_FOUND");
        o = await pe$3(a, n, s);
      } else o = await pe$3(e, n, s);
      return await i.executeLifecycle("afterCommand", n, o), o;
    } catch (o) {
      throw await i.executeErrorHandlers(o, n), o;
    }
  }
  constructor(e, n = {}) {
    if (typeof e != "string" || e.trim().length === 0) throw new n$1("CLI name must be a non-empty string", "INVALID_INPUT", { cliName: e });
    this.#f = e.trim();
    const s = n.argv ?? i$1(), i = n.cwd ?? c$1();
    if (this.#e = { ...n, argv: s, cwd: i }, this.#e.argv && !Array.isArray(this.#e.argv)) throw new n$1("CLI argv option must be an array of strings", "INVALID_INPUT", { argv: this.#e.argv });
    if (this.#e.cwd && typeof this.#e.cwd != "string") throw new n$1("CLI cwd option must be a string", "INVALID_INPUT", { cwd: this.#e.cwd });
    if (this.#e.packageName && typeof this.#e.packageName != "string") throw new n$1("CLI packageName option must be a string", "INVALID_INPUT", { packageName: this.#e.packageName });
    if (this.#e.packageVersion && typeof this.#e.packageVersion != "string") throw new n$1("CLI packageVersion option must be a string", "INVALID_INPUT", { packageVersion: this.#e.packageVersion });
    if (typeof this.#e.logger == "object") {
      const p = ["debug", "error", "info", "log", "warn"], h = [], m = this.#e.logger;
      for (const g of p) typeof m[g] != "function" && h.push(g);
      if (h.length > 0) throw new n$1(`Logger object is missing required methods: ${h.join(", ")}`, "INVALID_INPUT", { logger: this.#e.logger, missingMethods: h });
      this.#t = this.#e.logger;
    } else this.#t = { ...console, debug: (...p) => {
      this.#c() === E$3 && console.debug(...p);
    } };
    this.#d = this.#e.packageVersion, this.#O = this.#e.packageName, this.#p = this.#e.cwd, this.#i = "help", this.#r = {};
    const o = n.fs;
    if (o !== void 0 && (typeof o != "object" || o === null)) throw new n$1("CLI fs option must be an object implementing the CerebroFs interface", "INVALID_INPUT", { fs: n.fs });
    const l = n.exit;
    if (l !== void 0 && typeof l != "function") throw new n$1("CLI exit option must be a function", "INVALID_INPUT", { exit: n.exit });
    const a = n.env;
    if (a !== void 0 && (typeof a != "object" || a === null)) throw new n$1("CLI env option must be a record of string keys", "INVALID_INPUT", { env: n.env });
    const u = n.stdin;
    if (u !== void 0 && typeof u != "string") throw new n$1("CLI stdin option must be a string", "INVALID_INPUT", { stdin: n.stdin });
    this.#_ = n.fs, this.#E = n.exit, this.#A = n.env, this.#x = n.stdin ?? "", this.#C = n.maxArguments, this.#k = n.strictOptions ?? false;
    const r = this.#y().CEREBRO_OUTPUT_LEVEL, c = r === void 0 ? Number.NaN : Number(r);
    this.#N = Number.isNaN(c) ? t : c, this.#n = /* @__PURE__ */ new Map(), this.#s = /* @__PURE__ */ new Map(), this.#o = /* @__PURE__ */ new Map();
  }
  setCommandSection(e) {
    return this.#r = e, this;
  }
  getCommandSection() {
    return this.#r.header || (this.#r.header = `${this.#f}${this.#d ? ` v${this.#d}` : ""}`), this.#r;
  }
  setDefaultCommand(e) {
    return this.#i = e, this;
  }
  get defaultCommand() {
    return this.#i;
  }
  addCommand(e) {
    ne$4(e, "Command"), se$3(e.name), e.options !== void 0 && ne$4(e.options, "Command options"), e.env !== void 0 && ne$4(e.env, "Command env"), ms$1(e);
    const n = ys$1(e), s = typeof n.execute == "function", i = typeof n.loader == "function";
    if (s && i) throw new n$1(`Command "${n.name}" cannot define both "execute" and "loader" — choose one`, "INVALID_COMMAND", { commandName: n.name });
    if (!s && !i) throw new n$1(`Command "${n.name}" must define either "execute" or "loader"`, "INVALID_COMMAND", { commandName: n.name });
    n.alias && (typeof n.alias == "string" ? se$3(n.alias) : We$3(n.alias, "Command alias").forEach((c) => se$3(c))), n.argument && ne$4(n.argument, "Command argument"), n.commandPath && (We$3(n.commandPath, "Command commandPath"), n.commandPath.forEach((c) => {
      se$3(c);
    }));
    const o = Be$3(n.name, n.commandPath), l = z$2(o);
    if (this.#s.has(l)) throw new n$1(`Command with path "${l}" already exists`, "DUPLICATE_COMMAND", { commandName: n.name, commandPath: n.commandPath });
    const a = Array.isArray(n.commandPath) && n.commandPath.length > 0, u = this.#n.get(n.name), r = u !== void 0 && (u.commandPath === void 0 || u.commandPath.length === 0);
    if (!a && r) throw new n$1(`Command with name "${n.name}" already exists`, "DUPLICATE_COMMAND", { commandName: n.name });
    if (n.options) for (const c of n.options) Ie$2(c);
    if (gs$1(n), Cs$1(n), As$1(n), n.options && (n.__conflictingOptions__ = n.options.filter((c) => c.conflicts !== void 0), n.__requiredOptions__ = n.options.filter((c) => c.required === true)), a && u !== void 0) this.#n.set(l, n);
    else {
      if (!a && u !== void 0 && !r) {
        const c = Be$3(u.name, u.commandPath);
        this.#n.set(z$2(c), u);
      }
      this.#n.set(n.name, n);
    }
    if (this.#s.set(l, o), this.#o.set(l, n), this.#U(), n.alias !== void 0) {
      const c = typeof n.alias == "string" ? [n.alias] : n.alias;
      for (const p of c) {
        if (this.#c() === E$3 && this.#t.debug("adding alias", p), this.#n.has(p)) throw new n$1(`Command alias "${p}" conflicts with existing command`, "DUPLICATE_COMMAND", { alias: p, commandName: n.name });
        this.#n.set(p, n);
      }
    }
    return this;
  }
  addGlobalOption(e) {
    const n = e, s = new Set(te$4.map((l) => l.name)), i = new Set(te$4.map((l) => l.alias).filter(Boolean));
    if (s.has(n.name)) throw new n$1(`Cannot add global option "--${n.name}": it conflicts with a built-in global option`, "DUPLICATE_OPTION", { optionName: n.name });
    if (n.alias && i.has(n.alias)) throw new n$1(`Cannot add global option with alias "-${n.alias}": it conflicts with a built-in global option alias`, "DUPLICATE_OPTION", { alias: n.alias, optionName: n.name });
    if (new Set(this.#l.map((l) => l.name)).has(n.name)) throw new n$1(`Global option "--${n.name}" has already been added`, "DUPLICATE_OPTION", { optionName: n.name });
    return n.group = "global", Ie$2(n), this.#l.push(n), this;
  }
  getGlobalOptions() {
    return this.#M();
  }
  addPlugin(e) {
    return this.getPluginManager().register(e), this;
  }
  getPluginManager() {
    return this.#u ? this.#u : (this.#u = new en$2(this.#t), this.#u.register({ description: "Attaches the logger to the toolbox", execute: (e) => {
      e.logger = this.#t, e.console = e.logger;
    }, name: "logger" }), this.#u);
  }
  getCliName() {
    return this.#f;
  }
  getPackageVersion() {
    return this.#d;
  }
  getPackageName() {
    return this.#O;
  }
  getCommands() {
    return this.#n;
  }
  getCwd() {
    return this.#p;
  }
  dispose() {
    this.#P?.();
  }
  async run(e = {}) {
    const { autoDispose: n = true, shouldExitProcess: s = true, ...i } = e;
    if (!this.#n.has("help")) {
      const { default: d } = await import('./packem_chunks/help-command.js');
      this.addCommand(new d(this.#n));
    }
    const o = this.#L(), l = this.#s;
    this.#j();
    const a = this.#b();
    let u, r = [...a];
    this.#c() === E$3 && (this.#t.debug(`process.execPath: ${g$1()}`), this.#t.debug(`process.execArgv: ${l$1().join(" ")}`), this.#t.debug(`process.argv: ${i$1().join(" ")}`));
    const c = ws$1(l, [...a]);
    if (c.commandPath) u = c.commandPath, r = c.argv;
    else {
      if (a.length > 1 && a[0] && a[1] && !me$3(a[0]) && !me$3(a[1])) {
        const C = [];
        let O = 0;
        for (; O < a.length; ) {
          const E = a[O];
          if (!E || me$3(E)) break;
          C.push(E), O += 1;
        }
        const k = z$2(C);
        if (C[0] && !o.includes(C[0])) {
          const E = this.#a(), H = R$3(k, E);
          throw new B$4(k, H);
        }
      }
      let d;
      try {
        d = an$2([null, ...o], [...a]);
      } catch (C) {
        if (C instanceof Error && C.name === "INVALID_COMMAND" && "command" in C) {
          const O = C.command, k = this.#a(), E = R$3(O, k);
          throw new B$4(O, E);
        }
        throw C;
      }
      d.command && (u = [d.command], r = d.argv);
    }
    if (!u) if (this.#i) u = [this.#i];
    else {
      const d = this.#a();
      throw new B$4("", d);
    }
    const p = z$2(u), h = this.#s.get(p);
    let m;
    if (h) {
      if (m = this.#o.get(p), !m || z$2(h) !== p) {
        const d = this.#a(), C = R$3(p, d);
        throw new B$4(p, C);
      }
    } else {
      const d = u.at(-1);
      if (m = d ? this.#n.get(d) : void 0, !m) {
        const C = this.#a(), O = R$3(p, C);
        throw new B$4(p, O);
      }
    }
    if (typeof m.execute != "function" && typeof m.loader != "function") return this.#t.error(`Command "${m.name}" has no function to execute.`), s ? b$3(1) : void 0;
    const g = r;
    let y, A;
    try {
      ({ commandArgs: y, toolbox: A } = this.#S(m, g, i, p));
    } catch (d) {
      const C = R$4(d);
      if (this.#t.error(C ?? d), s) return b$3(1);
      throw d;
    }
    try {
      return await this.#T(m, A, y), s ? b$3(0) : void 0;
    } catch (d) {
      if (s) return this.#t.error(d), b$3(1);
      throw d;
    } finally {
      n && this.dispose();
    }
  }
  async runCommand(e, n = {}) {
    const { argv: s = [], ...i } = n;
    ve$2(e, "Command name");
    const o = e.split(" ").filter(Boolean), l = z$2(o), u = this.#s.get(l) ? this.#o.get(l) : this.#n.get(e);
    if (!u) {
      const m = this.#a(), g = R$3(l || e, m);
      throw new B$4(e, g);
    }
    if (typeof u.execute != "function" && typeof u.loader != "function") throw new n$1(`Command "${u.name}" has no function to execute`, "INVALID_COMMAND", { commandName: u.name });
    const c = [...qe$2(s, { maxArguments: this.#C })];
    this.#c() === E$3 && this.#t.debug(`running command '${e}' programmatically with args: ${c.join(", ")}`);
    const { commandArgs: p, toolbox: h } = this.#S(u, c, i, l || e);
    return this.#T(u, h, p);
  }
  clone(e) {
    const n = { ...this.#e, ...e }, s = new at(this.#f, n);
    for (const [i, o] of this.#n) s.#n.set(i, o);
    for (const [i, o] of this.#s) s.#s.set(i, [...o]);
    for (const [i, o] of this.#o) s.#o.set(i, o);
    for (const i of this.#l) s.#l.push(i);
    return s.#i = this.#i, s.#r = { ...this.#r }, s.#U(), s;
  }
  async getAction(e) {
    ve$2(e, "Command name");
    const n = e.split(" ").filter(Boolean), s = z$2(n), o = this.#s.get(s) ? this.#o.get(s) : this.#n.get(e);
    if (!o) {
      const l = this.#a(), a = R$3(s || e, l);
      throw new B$4(e, a);
    }
    if (typeof o.execute == "function") return o.execute;
    if (typeof o.loader == "function") return tt$4(o);
    throw new n$1(`Command "${o.name}" has no execute or loader defined`, "INVALID_COMMAND", { commandName: o.name });
  }
};

const a$2 = (r, e) => new at$4(r, e);

const TRUSTED_DIRS = ["/usr/bin", "/bin", "/usr/sbin", "/usr/share/omarchy/bin"];
function resolveTool(name) {
  for (const dir of TRUSTED_DIRS) {
    const candidate = join(dir, name);
    try {
      if (statSync(candidate).isFile()) {
        accessSync(candidate, constants.X_OK);
        return candidate;
      }
    } catch {
    }
  }
  return void 0;
}
function capture(binary, args, env = [], input) {
  const result = spawnSync(binary, [...args], {
    env: commandEnv(env),
    encoding: "utf8",
    input,
    maxBuffer: 64 * 1024 * 1024
  });
  return {
    code: result.status ?? 1,
    stdout: result.stdout ?? "",
    stderr: result.stderr ?? ""
  };
}
function commandEnv(extra) {
  const base = {
    HOME: process.env["HOME"] ?? "",
    PATH: TRUSTED_DIRS.join(":"),
    LANG: "C.UTF-8",
    OMARCHY_PATH: process.env["OMARCHY_PATH"] ?? "/usr/share/omarchy"
  };
  for (const name of [
    "XDG_CONFIG_HOME",
    "XDG_STATE_HOME",
    "XDG_DATA_HOME",
    "XDG_CACHE_HOME",
    "XDG_RUNTIME_DIR",
    "WAYLAND_DISPLAY",
    "DISPLAY",
    "DBUS_SESSION_BUS_ADDRESS"
  ]) {
    const value = process.env[name];
    if (value) {
      base[name] = value;
    }
  }
  for (const entry of extra) {
    const eq = entry.indexOf("=");
    if (eq > 0) {
      base[entry.slice(0, eq)] = entry.slice(eq + 1);
    }
  }
  return base;
}
function run(binary, args, extra) {
  const result = spawnSync(binary, [...args], {
    stdio: "inherit",
    env: process.env 
  });
  return result.status === 0;
}
function isDir(path) {
  try {
    return statSync(path).isDirectory();
  } catch {
    return false;
  }
}

let Ed;
const $d = (i) => (Ed ??= createRequire(import.meta.url))(i);
const $i = typeof globalThis < "u" && typeof globalThis.process < "u" ? globalThis.process : process;
const qe$1 = (i) => {
  if (typeof $i < "u" && $i.versions && $i.versions.node) {
    const [o, e] = $i.versions.node.split(".").map(Number);
    if (o > 22 || o === 22 && e >= 3 || o === 20 && e >= 16) return $i.getBuiltinModule(i);
  }
  return $d(i);
};
const Pi = $i;
const { execFileSync: qd } = qe$1("node:child_process");
const co = qe$1("node:fs");
const Id = qe$1("node:tty");
const Vd = 12288;
const it$3 = 65510;
const ot$3 = [12288, 12288, 65281, 65376, 65504, 65510];
const et$3 = 8361;
const nt$3 = 65518;
const at$3 = [8361, 8361, 65377, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500, 65512, 65518];
const ut$2 = 32;
const gt$2 = 10630;
const dt$2 = [32, 126, 162, 163, 165, 166, 172, 172, 175, 175, 10214, 10221, 10629, 10630];
const tt$3 = 4352;
const st$3 = 262141;
const Lo = (i, o) => {
  let e = 0, n = Math.floor(i.length / 2) - 1;
  for (; e <= n; ) {
    const a = Math.floor((e + n) / 2), u = a * 2;
    if (o < i[u]) n = a - 1;
    else if (o > i[u + 1]) e = a + 1;
    else return true;
  }
  return false;
};
const $n$1 = 19968;
const [ht$2, rt$3] = lt$3(ru);
function lt$3(i) {
  let o = i[0], e = i[1];
  for (let n = 0; n < i.length; n += 2) {
    const a = i[n], u = i[n + 1];
    if ($n$1 >= a && $n$1 <= u) return [a, u];
    u - a > e - o && (o = a, e = u);
  }
  return [o, e];
}
const vt$2 = (i) => i < 161 || i > 1114109 ? false : Lo(Ud, i);
const yt$1 = (i) => i < Vd || i > it$3 ? false : Lo(ot$3, i);
const ct$3 = (i) => i < et$3 || i > nt$3 ? false : Lo(at$3, i);
const bt$2 = (i) => i < ut$2 || i > gt$2 ? false : Lo(dt$2, i);
const pt$2 = (i) => i >= ht$2 && i <= rt$3 ? true : i < tt$3 || i > st$3 ? false : Lo(ru, i);
function wt$2(i) {
  return vt$2(i) ? "ambiguous" : yt$1(i) ? "fullwidth" : ct$3(i) ? "halfwidth" : bt$2(i) ? "narrow" : pt$2(i) ? "wide" : "neutral";
}
function jt$2(i) {
  if (!Number.isSafeInteger(i)) throw new TypeError(`Expected a code point, got \`${typeof i}\`.`);
}
function lu(i) {
  return jt$2(i), wt$2(i);
}
const vu = String.raw;
const qn$1 = vu`\p{Emoji}(?:\p{EMod}|[\u{E0020}-\u{E007E}]+\u{E007F}|\uFE0F?\u20E3?)`;
const mt$2 = () => new RegExp(vu`\p{RI}{2}|(?![#*\d](?!\uFE0F?\u20E3))${qn$1}(?:\u200D${qn$1})*`, "gu");
const eo$1 = /* @__PURE__ */ new Set(["\x1B", ""]);
const Oo = "\x07";
const yu = "[";
const Ie$1 = "m";
const wo = "]8;;";
const ft$2 = 39;
const Yt$1 = /[\u200B\uFEFF\u2060-\u2064]/g;
const kt$2 = new RegExp(`(?:\\${yu}(?<code>\\d+)m|\\${wo}(?<uri>.*)${Oo})`);
const Lt$2 = Object.freeze(/* @__PURE__ */ new Map([[0, 0], [1, 22], [2, 22], [3, 23], [4, 24], [7, 27], [8, 28], [9, 29], [30, 39], [31, 39], [32, 39], [33, 39], [34, 39], [35, 39], [36, 39], [37, 39], [40, 49], [41, 49], [42, 49], [43, 49], [44, 49], [45, 49], [46, 49], [47, 49], [90, 39]]));
const Zt$1 = /^[ \t]*(?:\r\n|\r|\n)/;
const St$2 = /(?:\r\n|\r|\n)[ \t]*$/;
const Jt$1 = /^(?:[\r\n]|$)/;
const Ct$1 = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/;
const Xt$1 = /^[ \t]*[\r\n][ \t\r\n]*$/;
const Ht$1 = /\r\n|\n|\r/g;
const cu = /[\u001B\u009B](?:[[()#;?]{0,10}(?:\d{1,4}(?:;\d{0,4})*)?[0-9A-ORZcf-nqry=><]|\]8;;[^\u0007\u001B]{0,100}(?:\u0007|\u001B\\))/g;
const To = /[\u0000-\u0008\n-\u001F\u007F-\u009F]{1,1000}/y;
const Dt$1 = mt$2();
const In$1 = /* @__PURE__ */ new Map();
const Tt$2 = (i) => [i.ambiguousIsNarrow ? 1 : 0, i.control, i.fullWidth, i.regular, i.wide].join("|");
const Bt$2 = (i) => {
  const o = Tt$2(i.width);
  let e = In$1.get(o);
  return e || (e = /* @__PURE__ */ new Map(), In$1.set(o, e)), e;
};
const Bo = new RegExp(cu.source, "y");
const we$2 = new RegExp(Dt$1.source, "uy");
const Qo = /(?:[\u0020-\u007E\u00A0-\u00FF](?!\uFE0F)){1,1000}/y;
const bu = (i) => i >= 32 && i <= 126 ? "latin" : i === 8203 || i === 8204 || i === 8205 || i === 8288 ? "zero" : i <= 31 || i >= 127 && i <= 159 ? "control" : i >= 160 && i <= 255 || i >= 9472 && i <= 9599 ? "latin" : i >= 4352 && i <= 4607 || i >= 11904 && i <= 40959 || i >= 44032 && i <= 55215 || i >= 63744 && i <= 64255 || i >= 65280 && i <= 65519 && !(i >= 65377 && i <= 65439) || i >= 12352 && i <= 12543 ? "wide" : i === 8230 ? "latin" : "other";
const Qt$1 = (i, o) => {
  const e = Bt$2(o), n = Math.floor(i / 65536), a = i % 65536;
  let u = e.get(n);
  if (u || (u = /* @__PURE__ */ new Map(), e.set(n, u)), u.has(a)) return u.get(a);
  let g;
  switch (bu(i)) {
    case "control": {
      g = o.width.control;
      break;
    }
    case "latin": {
      g = o.width.regular;
      break;
    }
    case "wide": {
      g = o.width.wide;
      break;
    }
    case "zero": {
      g = 0;
      break;
    }
    default:
      switch (lu(i)) {
        case "ambiguous": {
          g = o.width.ambiguousIsNarrow ? o.width.regular : o.width.wide;
          break;
        }
        case "fullwidth": {
          g = o.width.fullWidth;
          break;
        }
        case "wide": {
          g = o.width.wide;
          break;
        }
        default:
          g = o.width.regular;
      }
  }
  return u.set(a, g), g;
};
const Mt$2 = (i) => i >= 768 && i <= 879 || i >= 6832 && i <= 6911 || i >= 7616 && i <= 7679 || i >= 8400 && i <= 8447 || i >= 65056 && i <= 65071 || i >= 917760 && i <= 917999 || i >= 65024 && i <= 65039 || i >= 3633 && i <= 3642 || i >= 3655 && i <= 3662 || i >= 3761 && i <= 3769 || i >= 3771 && i <= 3772 || i >= 3784 && i <= 3789 || i >= 2304 && i <= 2307 || i >= 2362 && i <= 2383 || i >= 2385 && i <= 2391 || i >= 2402 && i <= 2403 || i >= 2433 && i <= 2435 || i >= 2492 && i <= 2500 || i >= 2509 && i <= 2509 || i >= 2561 && i <= 2563 || i >= 2620 && i <= 2637 || i >= 1611 && i <= 1631 || i >= 1648 && i <= 1648 || i >= 1750 && i <= 1773 || i >= 2276 && i <= 2302 || i >= 1425 && i <= 1469 || i >= 1471 && i <= 1471 || i >= 1473 && i <= 1474 || i >= 1476 && i <= 1477 || i >= 1479 && i <= 1479 || i >= 3893 && i <= 3893 || i >= 3895 && i <= 3895 || i >= 3897 && i <= 3897 || i >= 3953 && i <= 3966 || i >= 3968 && i <= 3972 || i >= 3974 && i <= 3975 ? true : i >= 768 && i <= 777 || i >= 803 && i <= 803;
const Qe$2 = (i, o = {}) => {
  if (!i || i.length === 0) return { ellipsed: false, index: 0, truncated: false, width: 0 };
  const e = { truncation: { countAnsiEscapeCodes: o.countAnsiEscapeCodes ?? false, ellipsis: o.ellipsis ?? "", ellipsisWidth: o.ellipsisWidth ?? (o.ellipsis ? Qe$2(o.ellipsis, { ...o, ellipsis: "", ellipsisWidth: 0, limit: Number.POSITIVE_INFINITY }).width : 0), limit: o.limit ?? Number.POSITIVE_INFINITY }, width: { ambiguousIsNarrow: o.ambiguousIsNarrow ?? false, ansi: o.ansiWidth ?? 0, control: o.controlWidth ?? 0, emoji: o.emojiWidth ?? 2, fullWidth: o.fullWidth ?? 2, halfWidth: o.halfWidth ?? 1, regular: o.regularWidth ?? 1, tab: o.tabWidth ?? 8, wide: o.wideWidth ?? 2 } }, n = Math.max(0, e.truncation.limit - e.truncation.ellipsisWidth), { length: a } = i, u = a > 1e4;
  let g = 0, t = 0, s = a, h = false;
  const r = i.includes("\x1B") || i.includes("");
  for (; g < a; ) {
    if (r && (i[g] === "\x1B" || i[g] === "")) {
      if (i.startsWith("\x1B]8;;", g)) {
        const p = "\x1B]8;;\x07", j = p.length, L = i.indexOf("\x07", g + 5);
        if (L !== -1) {
          const K = i.indexOf(p, L + 1);
          if (K !== -1) {
            const R = K + j, O = i.slice(L + 1, K).replace(cu, ""), Q = Qe$2(O, { ambiguousIsNarrow: e.width.ambiguousIsNarrow, ansiWidth: e.width.ansi, controlWidth: e.width.control, countAnsiEscapeCodes: false, ellipsis: e.truncation.ellipsis, ellipsisWidth: e.truncation.ellipsisWidth, emojiWidth: e.width.emoji, fullWidth: e.width.fullWidth, halfWidth: e.width.halfWidth, limit: Math.max(0, n - t), regularWidth: e.width.regular, tabWidth: e.width.tab, wideWidth: e.width.wide }), z = Q.width;
            if (Q.truncated) h = true, s = Math.min(s, g);
            else if (t + z > n && (s = Math.min(s, g), h = true, t + z > e.truncation.limit)) break;
            if (t += z, g = R, h && t >= e.truncation.limit) break;
            continue;
          }
        }
      }
      if (Bo.lastIndex = g, Bo.test(i)) {
        const p = Bo.lastIndex - g, j = e.truncation.countAnsiEscapeCodes ? p : e.width.ansi;
        if (t + j > n && (s = Math.min(s, g), t + j > e.truncation.limit)) {
          h = true;
          break;
        }
        t += j, g = Bo.lastIndex;
        continue;
      }
    }
    const y = i.codePointAt(g);
    if (y === 8203 || y === 65279 || y >= 8288 && y <= 8292) {
      g += 1;
      continue;
    }
    if (y === 9) {
      if (t + e.width.tab > n && (s = Math.min(s, g), t + e.width.tab > e.truncation.limit)) {
        h = true;
        break;
      }
      t += e.width.tab, g += 1;
      continue;
    }
    if (Qo.lastIndex = g, Qo.test(i)) {
      const p = (Qo.lastIndex - g) * e.width.regular;
      if (t + p > n) {
        const j = e.width.regular > 0 ? Math.floor((n - t) / e.width.regular) : 0;
        if (s = Math.min(s, g + j), t + p > e.truncation.limit) {
          h = true;
          break;
        }
      }
      t += p, g = Qo.lastIndex;
      continue;
    }
    if ((y <= 31 || y >= 127 && y <= 159) && (To.lastIndex = g, To.test(i))) {
      const p = (To.lastIndex - g) * e.width.control;
      if (t + p > n) {
        const j = e.width.control > 0 ? Math.floor((n - t) / e.width.control) : 0;
        if (s = Math.min(s, g + j), t + p > e.truncation.limit) {
          h = true;
          break;
        }
      }
      t += p, g = To.lastIndex;
      continue;
    }
    if (we$2.lastIndex = g, we$2.test(i)) {
      if (t + e.width.emoji > n && (s = Math.min(s, g), t + e.width.emoji > e.truncation.limit)) {
        h = true;
        break;
      }
      t += e.width.emoji, g = we$2.lastIndex;
      continue;
    }
    const c = i.codePointAt(g) ?? 0;
    if (Mt$2(c)) {
      g += c > 65535 ? 2 : 1;
      continue;
    }
    let b;
    if (u) b = Qt$1(c, e);
    else switch (bu(c)) {
      case "control": {
        b = e.width.control;
        break;
      }
      case "latin": {
        b = e.width.regular;
        break;
      }
      case "wide": {
        b = e.width.wide;
        break;
      }
      case "zero": {
        b = 0;
        break;
      }
      default:
        switch (lu(c)) {
          case "ambiguous": {
            b = e.width.ambiguousIsNarrow ? e.width.regular : e.width.wide;
            break;
          }
          case "fullwidth": {
            b = e.width.fullWidth;
            break;
          }
          case "wide": {
            b = e.width.wide;
            break;
          }
          default:
            b = e.width.regular;
        }
    }
    if (t + b > n && (s = Math.min(s, g), t + b > e.truncation.limit)) {
      h = true;
      break;
    }
    t += b, g += c > 65535 ? 2 : 1;
  }
  let l = t, v = false;
  return h && e.truncation.limit >= e.truncation.ellipsisWidth && (l = e.truncation.limit, v = true), { ellipsed: v, index: h ? s : a, truncated: h, width: l };
};
const Hi = (i, o = {}) => Qe$2(i, { ...o, ellipsis: "", ellipsisWidth: 0, limit: Number.POSITIVE_INFINITY }).width;
const Gt$1 = new Uint8Array(128);
const Nt$2 = new Uint8Array(128);
const xt$2 = new Uint8Array(128);
for (let i = 0; i < 128; i++) Gt$1[i] = i >= 65 && i <= 90 ? 1 : 0, Nt$2[i] = i >= 97 && i <= 122 ? 1 : 0, xt$2[i] = i >= 48 && i <= 57 ? 1 : 0;
function Wt$1(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var je$1;
var Un$1;
function Pt$1() {
  if (Un$1) return je$1;
  Un$1 = 1, je$1 = o;
  function i(n) {
    return n instanceof Buffer ? Buffer.from(n) : new n.constructor(n.buffer.slice(), n.byteOffset, n.length);
  }
  function o(n) {
    if (n = n || {}, n.circles) return e(n);
    const a = /* @__PURE__ */ new Map();
    if (a.set(Date, (h) => new Date(h)), a.set(Map, (h, r) => new Map(g(Array.from(h), r))), a.set(Set, (h, r) => new Set(g(Array.from(h), r))), n.constructorHandlers) for (const h of n.constructorHandlers) a.set(h[0], h[1]);
    let u = null;
    return n.proto ? s : t;
    function g(h, r) {
      const l = Object.keys(h), v = new Array(l.length);
      for (let y = 0; y < l.length; y++) {
        const c = l[y], b = h[c];
        typeof b != "object" || b === null ? v[c] = b : b.constructor !== Object && (u = a.get(b.constructor)) ? v[c] = u(b, r) : ArrayBuffer.isView(b) ? v[c] = i(b) : v[c] = r(b);
      }
      return v;
    }
    function t(h) {
      if (typeof h != "object" || h === null) return h;
      if (Array.isArray(h)) return g(h, t);
      if (h.constructor !== Object && (u = a.get(h.constructor))) return u(h, t);
      const r = {};
      for (const l in h) {
        if (Object.hasOwnProperty.call(h, l) === false) continue;
        const v = h[l];
        typeof v != "object" || v === null ? r[l] = v : v.constructor !== Object && (u = a.get(v.constructor)) ? r[l] = u(v, t) : ArrayBuffer.isView(v) ? r[l] = i(v) : r[l] = t(v);
      }
      return r;
    }
    function s(h) {
      if (typeof h != "object" || h === null) return h;
      if (Array.isArray(h)) return g(h, s);
      if (h.constructor !== Object && (u = a.get(h.constructor))) return u(h, s);
      const r = {};
      for (const l in h) {
        const v = h[l];
        typeof v != "object" || v === null ? r[l] = v : v.constructor !== Object && (u = a.get(v.constructor)) ? r[l] = u(v, s) : ArrayBuffer.isView(v) ? r[l] = i(v) : r[l] = s(v);
      }
      return r;
    }
  }
  function e(n) {
    const a = [], u = [], g = /* @__PURE__ */ new Map();
    if (g.set(Date, (l) => new Date(l)), g.set(Map, (l, v) => new Map(s(Array.from(l), v))), g.set(Set, (l, v) => new Set(s(Array.from(l), v))), n.constructorHandlers) for (const l of n.constructorHandlers) g.set(l[0], l[1]);
    let t = null;
    return n.proto ? r : h;
    function s(l, v) {
      const y = Object.keys(l), c = new Array(y.length);
      for (let b = 0; b < y.length; b++) {
        const p = y[b], j = l[p];
        if (typeof j != "object" || j === null) c[p] = j;
        else if (j.constructor !== Object && (t = g.get(j.constructor))) c[p] = t(j, v);
        else if (ArrayBuffer.isView(j)) c[p] = i(j);
        else {
          const L = a.indexOf(j);
          L !== -1 ? c[p] = u[L] : c[p] = v(j);
        }
      }
      return c;
    }
    function h(l) {
      if (typeof l != "object" || l === null) return l;
      if (Array.isArray(l)) return s(l, h);
      if (l.constructor !== Object && (t = g.get(l.constructor))) return t(l, h);
      const v = {};
      a.push(l), u.push(v);
      for (const y in l) {
        if (Object.hasOwnProperty.call(l, y) === false) continue;
        const c = l[y];
        if (typeof c != "object" || c === null) v[y] = c;
        else if (c.constructor !== Object && (t = g.get(c.constructor))) v[y] = t(c, h);
        else if (ArrayBuffer.isView(c)) v[y] = i(c);
        else {
          const b = a.indexOf(c);
          b !== -1 ? v[y] = u[b] : v[y] = h(c);
        }
      }
      return a.pop(), u.pop(), v;
    }
    function r(l) {
      if (typeof l != "object" || l === null) return l;
      if (Array.isArray(l)) return s(l, r);
      if (l.constructor !== Object && (t = g.get(l.constructor))) return t(l, r);
      const v = {};
      a.push(l), u.push(v);
      for (const y in l) {
        const c = l[y];
        if (typeof c != "object" || c === null) v[y] = c;
        else if (c.constructor !== Object && (t = g.get(c.constructor))) v[y] = t(c, r);
        else if (ArrayBuffer.isView(c)) v[y] = i(c);
        else {
          const b = a.indexOf(c);
          b !== -1 ? v[y] = u[b] : v[y] = r(c);
        }
      }
      return a.pop(), u.pop(), v;
    }
  }
  return je$1;
}
var Ft$1 = Pt$1();
const pu = Wt$1(Ft$1);
pu();
var wu = typeof global == "object" && global && global.Object === Object && global;
var Kt$1 = typeof self == "object" && self && self.Object === Object && self;
var P$3 = wu || Kt$1 || Function("return this")();
var _$2 = P$3.Symbol;
var ju = Object.prototype;
var Rt$2 = ju.hasOwnProperty;
var At$2 = ju.toString;
var vo = _$2 ? _$2.toStringTag : void 0;
function _t$1(i) {
  var o = Rt$2.call(i, vo), e = i[vo];
  try {
    i[vo] = void 0;
    var n = true;
  } catch {
  }
  var a = At$2.call(i);
  return n && (o ? i[vo] = e : delete i[vo]), a;
}
var Ot$2 = Object.prototype;
var zt$1 = Ot$2.toString;
function Et$2(i) {
  return zt$1.call(i);
}
var $t$2 = "[object Null]";
var qt$1 = "[object Undefined]";
var Vn$1 = _$2 ? _$2.toStringTag : void 0;
function $$1(i) {
  return i == null ? i === void 0 ? qt$1 : $t$2 : Vn$1 && Vn$1 in Object(i) ? _t$1(i) : Et$2(i);
}
function N$3(i) {
  return i != null && typeof i == "object";
}
var It$1 = "[object Symbol]";
function oi(i) {
  return typeof i == "symbol" || N$3(i) && $$1(i) == It$1;
}
var Ut$1 = NaN;
function ia(i) {
  return typeof i == "number" ? i : oi(i) ? Ut$1 : +i;
}
function M$2(i, o) {
  for (var e = -1, n = i == null ? 0 : i.length, a = Array(n); ++e < n; ) a[e] = o(i[e], e, i);
  return a;
}
var k$2 = Array.isArray;
var oa = _$2 ? _$2.prototype : void 0;
var ea = oa ? oa.toString : void 0;
function ei(i) {
  if (typeof i == "string") return i;
  if (k$2(i)) return M$2(i, ei) + "";
  if (oi(i)) return ea ? ea.call(i) : "";
  var o = i + "";
  return o == "0" && 1 / i == -1 / 0 ? "-0" : o;
}
function zo(i, o) {
  return function(e, n) {
    var a;
    if (e === void 0 && n === void 0) return o;
    if (e !== void 0 && (a = e), n !== void 0) {
      if (a === void 0) return n;
      typeof e == "string" || typeof n == "string" ? (e = ei(e), n = ei(n)) : (e = ia(e), n = ia(n)), a = i(e, n);
    }
    return a;
  };
}
var Vt$1 = zo(function(i, o) {
  return i + o;
}, 0);
var is = /\s/;
function mu(i) {
  for (var o = i.length; o-- && is.test(i.charAt(o)); ) ;
  return o;
}
var os = /^\s+/;
function fu(i) {
  return i && i.slice(0, mu(i) + 1).replace(os, "");
}
function G$2(i) {
  var o = typeof i;
  return i != null && (o == "object" || o == "function");
}
var na = NaN;
var es = /^[-+]0x[0-9a-f]+$/i;
var ns = /^0b[01]+$/i;
var as = /^0o[0-7]+$/i;
var us = parseInt;
function gi(i) {
  if (typeof i == "number") return i;
  if (oi(i)) return na;
  if (G$2(i)) {
    var o = typeof i.valueOf == "function" ? i.valueOf() : i;
    i = G$2(o) ? o + "" : o;
  }
  if (typeof i != "string") return i === 0 ? i : +i;
  i = fu(i);
  var e = ns.test(i);
  return e || as.test(i) ? us(i.slice(2), e ? 2 : 8) : es.test(i) ? na : +i;
}
var aa = 1 / 0;
var gs = 17976931348623157e292;
function ki(i) {
  if (!i) return i === 0 ? i : 0;
  if (i = gi(i), i === aa || i === -aa) {
    var o = i < 0 ? -1 : 1;
    return o * gs;
  }
  return i === i ? i : 0;
}
function Z$2(i) {
  var o = ki(i), e = o % 1;
  return o === o ? e ? o - e : o : 0;
}
var ds = "Expected a function";
function ts(i, o) {
  if (typeof o != "function") throw new TypeError(ds);
  return i = Z$2(i), function() {
    if (--i < 1) return o.apply(this, arguments);
  };
}
function U$4(i) {
  return i;
}
var ss = "[object AsyncFunction]";
var hs = "[object Function]";
var rs = "[object GeneratorFunction]";
var ls = "[object Proxy]";
function Li(i) {
  if (!G$2(i)) return false;
  var o = $$1(i);
  return o == hs || o == rs || o == ss || o == ls;
}
var No = P$3["__core-js_shared__"];
var ua = (function() {
  var i = /[^.]+$/.exec(No && No.keys && No.keys.IE_PROTO || "");
  return i ? "Symbol(src)_1." + i : "";
})();
function vs(i) {
  return !!ua && ua in i;
}
var ys = Function.prototype;
var cs = ys.toString;
function _i(i) {
  if (i != null) {
    try {
      return cs.call(i);
    } catch {
    }
    try {
      return i + "";
    } catch {
    }
  }
  return "";
}
var bs = /[\\^$.*+?()[\]{}|]/g;
var ps = /^\[object .+?Constructor\]$/;
var ws = Function.prototype;
var js = Object.prototype;
var ms = ws.toString;
var fs = js.hasOwnProperty;
var Ys = RegExp("^" + ms.call(fs).replace(bs, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Yu(i) {
  if (!G$2(i) || vs(i)) return false;
  var o = Li(i) ? Ys : ps;
  return o.test(_i(i));
}
function ks(i, o) {
  return i?.[o];
}
function Oi(i, o) {
  var e = ks(i, o);
  return Yu(e) ? e : void 0;
}
var jo = Oi(P$3, "WeakMap");
var Ko = jo && new jo();
var ku = Ko ? function(i, o) {
  return Ko.set(i, o), i;
} : U$4;
var ga = Object.create;
var no$1 = /* @__PURE__ */ (function() {
  function i() {
  }
  return function(o) {
    if (!G$2(o)) return {};
    if (ga) return ga(o);
    i.prototype = o;
    var e = new i();
    return i.prototype = void 0, e;
  };
})();
function mo(i) {
  return function() {
    var o = arguments;
    switch (o.length) {
      case 0:
        return new i();
      case 1:
        return new i(o[0]);
      case 2:
        return new i(o[0], o[1]);
      case 3:
        return new i(o[0], o[1], o[2]);
      case 4:
        return new i(o[0], o[1], o[2], o[3]);
      case 5:
        return new i(o[0], o[1], o[2], o[3], o[4]);
      case 6:
        return new i(o[0], o[1], o[2], o[3], o[4], o[5]);
      case 7:
        return new i(o[0], o[1], o[2], o[3], o[4], o[5], o[6]);
    }
    var e = no$1(i.prototype), n = i.apply(e, o);
    return G$2(n) ? n : e;
  };
}
var Ls = 1;
function Zs(i, o, e) {
  var n = o & Ls, a = mo(i);
  function u() {
    var g = this && this !== P$3 && this instanceof u ? a : i;
    return g.apply(n ? e : this, arguments);
  }
  return u;
}
function ni(i, o, e) {
  switch (e.length) {
    case 0:
      return i.call(o);
    case 1:
      return i.call(o, e[0]);
    case 2:
      return i.call(o, e[0], e[1]);
    case 3:
      return i.call(o, e[0], e[1], e[2]);
  }
  return i.apply(o, e);
}
var Ss = Math.max;
function Lu(i, o, e, n) {
  for (var a = -1, u = i.length, g = e.length, t = -1, s = o.length, h = Ss(u - g, 0), r = Array(s + h), l = !n; ++t < s; ) r[t] = o[t];
  for (; ++a < g; ) (l || a < u) && (r[e[a]] = i[a]);
  for (; h--; ) r[t++] = i[a++];
  return r;
}
var Js = Math.max;
function Zu(i, o, e, n) {
  for (var a = -1, u = i.length, g = -1, t = e.length, s = -1, h = o.length, r = Js(u - t, 0), l = Array(r + h), v = !n; ++a < r; ) l[a] = i[a];
  for (var y = a; ++s < h; ) l[y + s] = o[s];
  for (; ++g < t; ) (v || a < u) && (l[y + e[g]] = i[a++]);
  return l;
}
function Cs(i, o) {
  for (var e = i.length, n = 0; e--; ) i[e] === o && ++n;
  return n;
}
function Eo() {
}
var Xs = 4294967295;
function J$3(i) {
  this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = Xs, this.__views__ = [];
}
J$3.prototype = no$1(Eo.prototype);
J$3.prototype.constructor = J$3;
function Ue$2() {
}
var Ve$1 = Ko ? function(i) {
  return Ko.get(i);
} : Ue$2;
var Ui = {};
var Hs = Object.prototype;
var Ds = Hs.hasOwnProperty;
function xo(i) {
  for (var o = i.name + "", e = Ui[o], n = Ds.call(Ui, o) ? e.length : 0; n--; ) {
    var a = e[n], u = a.func;
    if (u == null || u == i) return a.name;
  }
  return o;
}
function ti(i, o) {
  this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = void 0;
}
ti.prototype = no$1(Eo.prototype);
ti.prototype.constructor = ti;
function I$2(i, o) {
  var e = -1, n = i.length;
  for (o || (o = Array(n)); ++e < n; ) o[e] = i[e];
  return o;
}
function Su(i) {
  if (i instanceof J$3) return i.clone();
  var o = new ti(i.__wrapped__, i.__chain__);
  return o.__actions__ = I$2(i.__actions__), o.__index__ = i.__index__, o.__values__ = i.__values__, o;
}
var Ts = Object.prototype;
var Bs = Ts.hasOwnProperty;
function d$1(i) {
  if (N$3(i) && !k$2(i) && !(i instanceof J$3)) {
    if (i instanceof ti) return i;
    if (Bs.call(i, "__wrapped__")) return Su(i);
  }
  return new ti(i);
}
d$1.prototype = Eo.prototype;
d$1.prototype.constructor = d$1;
function Me$2(i) {
  var o = xo(i), e = d$1[o];
  if (typeof e != "function" || !(o in J$3.prototype)) return false;
  if (i === e) return true;
  var n = Ve$1(e);
  return !!n && i === n[0];
}
var Qs = 800;
var Ms = 16;
var Gs = Date.now;
function Ju(i) {
  var o = 0, e = 0;
  return function() {
    var n = Gs(), a = Ms - (n - e);
    if (e = n, a > 0) {
      if (++o >= Qs) return arguments[0];
    } else o = 0;
    return i.apply(void 0, arguments);
  };
}
var Cu = Ju(ku);
var Ns = /\{\n\/\* \[wrapped with (.+)\] \*/;
var xs = /,? & /;
function Ws(i) {
  var o = i.match(Ns);
  return o ? o[1].split(xs) : [];
}
var Ps = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
function Fs(i, o) {
  var e = o.length;
  if (!e) return i;
  var n = e - 1;
  return o[n] = (e > 1 ? "& " : "") + o[n], o = o.join(e > 2 ? ", " : " "), i.replace(Ps, `{
/* [wrapped with ` + o + `] */
`);
}
function on$1(i) {
  return function() {
    return i;
  };
}
var Ro = (function() {
  try {
    var i = Oi(Object, "defineProperty");
    return i({}, "", {}), i;
  } catch {
  }
})();
var Ks = Ro ? function(i, o) {
  return Ro(i, "toString", { configurable: true, enumerable: false, value: on$1(o), writable: true });
} : U$4;
var en$1 = Ju(Ks);
function ui(i, o) {
  for (var e = -1, n = i == null ? 0 : i.length; ++e < n && o(i[e], e, i) !== false; ) ;
  return i;
}
function $o(i, o, e, n) {
  for (var a = i.length, u = e + (n ? 1 : -1); n ? u-- : ++u < a; ) if (o(i[u], u, i)) return u;
  return -1;
}
function Xu(i) {
  return i !== i;
}
function Rs(i, o, e) {
  for (var n = e - 1, a = i.length; ++n < a; ) if (i[n] === o) return n;
  return -1;
}
function ao(i, o, e) {
  return o === o ? Rs(i, o, e) : $o(i, Xu, e);
}
function qo(i, o) {
  var e = i == null ? 0 : i.length;
  return !!e && ao(i, o, 0) > -1;
}
var As = 1;
var _s = 2;
var Os = 8;
var zs = 16;
var Es = 32;
var $s = 64;
var qs = 128;
var Is = 256;
var Us = 512;
var Vs = [["ary", qs], ["bind", As], ["bindKey", _s], ["curry", Os], ["curryRight", zs], ["flip", Us], ["partial", Es], ["partialRight", $s], ["rearg", Is]];
function ih(i, o) {
  return ui(Vs, function(e) {
    var n = "_." + e[0];
    o & e[1] && !qo(i, n) && i.push(n);
  }), i.sort();
}
function Hu(i, o, e) {
  var n = o + "";
  return en$1(i, Fs(n, ih(Ws(n), e)));
}
var oh = 4;
var eh = 8;
var da = 32;
var ta = 64;
function Du(i, o, e, n, a, u, g, t, s, h) {
  var r = o & eh, l = r ? g : void 0, v = r ? void 0 : g, y = r ? u : void 0, c = r ? void 0 : u;
  o |= r ? da : ta, o &= ~(r ? ta : da), o & oh || (o &= -4);
  var b = [i, o, a, y, l, c, v, t, s, h], p = e.apply(void 0, b);
  return Me$2(i) && Cu(p, b), p.placeholder = n, Hu(p, i, o);
}
function uo(i) {
  var o = i;
  return o.placeholder;
}
var nh = 9007199254740991;
var ah = /^(?:0|[1-9]\d*)$/;
function Zi(i, o) {
  var e = typeof i;
  return o = o ?? nh, !!o && (e == "number" || e != "symbol" && ah.test(i)) && i > -1 && i % 1 == 0 && i < o;
}
var uh = Math.min;
function gh(i, o) {
  for (var e = i.length, n = uh(o.length, e), a = I$2(i); n--; ) {
    var u = o[n];
    i[n] = Zi(u, e) ? a[u] : void 0;
  }
  return i;
}
var sa = "__lodash_placeholder__";
function Di(i, o) {
  for (var e = -1, n = i.length, a = 0, u = []; ++e < n; ) {
    var g = i[e];
    (g === o || g === sa) && (i[e] = sa, u[a++] = e);
  }
  return u;
}
var dh = 1;
var th = 2;
var sh = 8;
var hh = 16;
var rh = 128;
var lh = 512;
function Io(i, o, e, n, a, u, g, t, s, h) {
  var r = o & rh, l = o & dh, v = o & th, y = o & (sh | hh), c = o & lh, b = v ? void 0 : mo(i);
  function p() {
    for (var j = arguments.length, L = Array(j), K = j; K--; ) L[K] = arguments[K];
    if (y) var R = uo(p), O = Cs(L, R);
    if (n && (L = Lu(L, n, a, y)), u && (L = Zu(L, u, g, y)), j -= O, y && j < h) {
      var Q = Di(L, R);
      return Du(i, o, Io, p.placeholder, e, L, Q, t, s, h - j);
    }
    var z = l ? e : this, Yi = v ? z[i] : i;
    return j = L.length, t ? L = gh(L, t) : c && j > 1 && L.reverse(), r && s < j && (L.length = s), this && this !== P$3 && this instanceof p && (Yi = b || mo(Yi)), Yi.apply(z, L);
  }
  return p;
}
function vh(i, o, e) {
  var n = mo(i);
  function a() {
    for (var u = arguments.length, g = Array(u), t = u, s = uo(a); t--; ) g[t] = arguments[t];
    var h = u < 3 && g[0] !== s && g[u - 1] !== s ? [] : Di(g, s);
    if (u -= h.length, u < e) return Du(i, o, Io, a.placeholder, void 0, g, h, void 0, void 0, e - u);
    var r = this && this !== P$3 && this instanceof a ? n : i;
    return ni(r, this, g);
  }
  return a;
}
var yh = 1;
function ch(i, o, e, n) {
  var a = o & yh, u = mo(i);
  function g() {
    for (var t = -1, s = arguments.length, h = -1, r = n.length, l = Array(r + s), v = this && this !== P$3 && this instanceof g ? u : i; ++h < r; ) l[h] = n[h];
    for (; s--; ) l[h++] = arguments[++t];
    return ni(v, a ? e : this, l);
  }
  return g;
}
var ha = "__lodash_placeholder__";
var me$2 = 1;
var bh = 2;
var ph = 4;
var ra = 8;
var yo = 128;
var la = 256;
var wh = Math.min;
function jh(i, o) {
  var e = i[1], n = o[1], a = e | n, u = a < (me$2 | bh | yo), g = n == yo && e == ra || n == yo && e == la && i[7].length <= o[8] || n == (yo | la) && o[7].length <= o[8] && e == ra;
  if (!(u || g)) return i;
  n & me$2 && (i[2] = o[2], a |= e & me$2 ? 0 : ph);
  var t = o[3];
  if (t) {
    var s = i[3];
    i[3] = s ? Lu(s, t, o[4]) : t, i[4] = s ? Di(i[3], ha) : o[4];
  }
  return t = o[5], t && (s = i[5], i[5] = s ? Zu(s, t, o[6]) : t, i[6] = s ? Di(i[5], ha) : o[6]), t = o[7], t && (i[7] = t), n & yo && (i[8] = i[8] == null ? o[8] : wh(i[8], o[8])), i[9] == null && (i[9] = o[9]), i[0] = o[0], i[1] = a, i;
}
var mh = "Expected a function";
var va = 1;
var fh = 2;
var ya = 8;
var ca = 16;
var ba = 32;
var Yh = 64;
var pa = Math.max;
function Si(i, o, e, n, a, u, g, t) {
  var s = o & fh;
  if (!s && typeof i != "function") throw new TypeError(mh);
  var h = n ? n.length : 0;
  if (h || (o &= -97, n = a = void 0), g = g === void 0 ? g : pa(Z$2(g), 0), t = t === void 0 ? t : Z$2(t), h -= a ? a.length : 0, o & Yh) {
    var r = n, l = a;
    n = a = void 0;
  }
  var v = s ? void 0 : Ve$1(i), y = [i, o, e, n, a, r, l, u, g, t];
  if (v && jh(y, v), i = y[0], o = y[1], e = y[2], n = y[3], a = y[4], t = y[9] = y[9] === void 0 ? s ? 0 : i.length : pa(y[9] - h, 0), !t && o & (ya | ca) && (o &= -25), !o || o == va) var c = Zs(i, o, e);
  else o == ya || o == ca ? c = vh(i, o, t) : (o == ba || o == (va | ba)) && !a.length ? c = ch(i, o, e, n) : c = Io.apply(void 0, y);
  var b = v ? ku : Cu;
  return Hu(b(c, y), i, o);
}
var kh = 128;
function Tu(i, o, e) {
  return o = e ? void 0 : o, o = i && o == null ? i.length : o, Si(i, kh, void 0, void 0, void 0, void 0, o);
}
function pi(i, o, e) {
  o == "__proto__" && Ro ? Ro(i, o, { configurable: true, enumerable: true, value: e, writable: true }) : i[o] = e;
}
function ci(i, o) {
  return i === o || i !== i && o !== o;
}
var Lh = Object.prototype;
var Zh = Lh.hasOwnProperty;
function Zo(i, o, e) {
  var n = i[o];
  (!(Zh.call(i, o) && ci(n, e)) || e === void 0 && !(o in i)) && pi(i, o, e);
}
function wi(i, o, e, n) {
  var a = !e;
  e || (e = {});
  for (var u = -1, g = o.length; ++u < g; ) {
    var t = o[u], s = n ? n(e[t], i[t], t, e, i) : void 0;
    s === void 0 && (s = i[t]), a ? pi(e, t, s) : Zo(e, t, s);
  }
  return e;
}
var wa = Math.max;
function Bu(i, o, e) {
  return o = wa(o === void 0 ? i.length - 1 : o, 0), function() {
    for (var n = arguments, a = -1, u = wa(n.length - o, 0), g = Array(u); ++a < u; ) g[a] = n[o + a];
    a = -1;
    for (var t = Array(o + 1); ++a < o; ) t[a] = n[a];
    return t[o] = e(g), ni(i, this, t);
  };
}
function S$2(i, o) {
  return en$1(Bu(i, o, U$4), i + "");
}
var Sh = 9007199254740991;
function Uo(i) {
  return typeof i == "number" && i > -1 && i % 1 == 0 && i <= Sh;
}
function V$4(i) {
  return i != null && Uo(i.length) && !Li(i);
}
function E$2(i, o, e) {
  if (!G$2(e)) return false;
  var n = typeof o;
  return (n == "number" ? V$4(e) && Zi(o, e.length) : n == "string" && o in e) ? ci(e[o], i) : false;
}
function go(i) {
  return S$2(function(o, e) {
    var n = -1, a = e.length, u = a > 1 ? e[a - 1] : void 0, g = a > 2 ? e[2] : void 0;
    for (u = i.length > 3 && typeof u == "function" ? (a--, u) : void 0, g && E$2(e[0], e[1], g) && (u = a < 3 ? void 0 : u, a = 1), o = Object(o); ++n < a; ) {
      var t = e[n];
      t && i(o, t, n, u);
    }
    return o;
  });
}
var Jh = Object.prototype;
function So(i) {
  var o = i && i.constructor, e = typeof o == "function" && o.prototype || Jh;
  return i === e;
}
function nn$1(i, o) {
  for (var e = -1, n = Array(i); ++e < i; ) n[e] = o(e);
  return n;
}
var Ch = "[object Arguments]";
function ja(i) {
  return N$3(i) && $$1(i) == Ch;
}
var Qu = Object.prototype;
var Xh = Qu.hasOwnProperty;
var Hh = Qu.propertyIsEnumerable;
var Ki = ja(/* @__PURE__ */ (function() {
  return arguments;
})()) ? ja : function(i) {
  return N$3(i) && Xh.call(i, "callee") && !Hh.call(i, "callee");
};
function an$1() {
  return false;
}
var Mu = typeof exports == "object" && exports && !exports.nodeType && exports;
var ma = Mu && typeof module == "object" && module && !module.nodeType && module;
var Dh = ma && ma.exports === Mu;
var fa = Dh ? P$3.Buffer : void 0;
var Th = fa ? fa.isBuffer : void 0;
var Ti = Th || an$1;
var Bh = "[object Arguments]";
var Qh = "[object Array]";
var Mh = "[object Boolean]";
var Gh = "[object Date]";
var Nh = "[object Error]";
var xh = "[object Function]";
var Wh = "[object Map]";
var Ph = "[object Number]";
var Fh = "[object Object]";
var Kh = "[object RegExp]";
var Rh = "[object Set]";
var Ah = "[object String]";
var _h = "[object WeakMap]";
var Oh = "[object ArrayBuffer]";
var zh = "[object DataView]";
var Eh = "[object Float32Array]";
var $h = "[object Float64Array]";
var qh = "[object Int8Array]";
var Ih = "[object Int16Array]";
var Uh = "[object Int32Array]";
var Vh = "[object Uint8Array]";
var ir$1 = "[object Uint8ClampedArray]";
var or$1 = "[object Uint16Array]";
var er$1 = "[object Uint32Array]";
var B$3 = {};
B$3[Eh] = B$3[$h] = B$3[qh] = B$3[Ih] = B$3[Uh] = B$3[Vh] = B$3[ir$1] = B$3[or$1] = B$3[er$1] = true;
B$3[Bh] = B$3[Qh] = B$3[Oh] = B$3[Mh] = B$3[zh] = B$3[Gh] = B$3[Nh] = B$3[xh] = B$3[Wh] = B$3[Ph] = B$3[Fh] = B$3[Kh] = B$3[Rh] = B$3[Ah] = B$3[_h] = false;
function nr$1(i) {
  return N$3(i) && Uo(i.length) && !!B$3[$$1(i)];
}
function ai(i) {
  return function(o) {
    return i(o);
  };
}
var Gu = typeof exports == "object" && exports && !exports.nodeType && exports;
var po = Gu && typeof module == "object" && module && !module.nodeType && module;
var ar$1 = po && po.exports === Gu;
var fe$1 = ar$1 && wu.process;
var si = (function() {
  try {
    var i = po && po.require && po.require("util").types;
    return i || fe$1 && fe$1.binding && fe$1.binding("util");
  } catch {
  }
})();
var Ya = si && si.isTypedArray;
var to$1 = Ya ? ai(Ya) : nr$1;
var ur$1 = Object.prototype;
var gr$1 = ur$1.hasOwnProperty;
function Nu(i, o) {
  var e = k$2(i), n = !e && Ki(i), a = !e && !n && Ti(i), u = !e && !n && !a && to$1(i), g = e || n || a || u, t = g ? nn$1(i.length, String) : [], s = t.length;
  for (var h in i) (o || gr$1.call(i, h)) && !(g && (h == "length" || a && (h == "offset" || h == "parent") || u && (h == "buffer" || h == "byteLength" || h == "byteOffset") || Zi(h, s))) && t.push(h);
  return t;
}
function xu(i, o) {
  return function(e) {
    return i(o(e));
  };
}
var dr$1 = xu(Object.keys, Object);
var tr$1 = Object.prototype;
var sr$1 = tr$1.hasOwnProperty;
function un$1(i) {
  if (!So(i)) return dr$1(i);
  var o = [];
  for (var e in Object(i)) sr$1.call(i, e) && e != "constructor" && o.push(e);
  return o;
}
function F$2(i) {
  return V$4(i) ? Nu(i) : un$1(i);
}
var hr$1 = Object.prototype;
var rr$1 = hr$1.hasOwnProperty;
var lr$1 = go(function(i, o) {
  if (So(o) || V$4(o)) {
    wi(o, F$2(o), i);
    return;
  }
  for (var e in o) rr$1.call(o, e) && Zo(i, e, o[e]);
});
function vr$1(i) {
  var o = [];
  if (i != null) for (var e in Object(i)) o.push(e);
  return o;
}
var yr$1 = Object.prototype;
var cr$1 = yr$1.hasOwnProperty;
function br$1(i) {
  if (!G$2(i)) return vr$1(i);
  var o = So(i), e = [];
  for (var n in i) n == "constructor" && (o || !cr$1.call(i, n)) || e.push(n);
  return e;
}
function ii(i) {
  return V$4(i) ? Nu(i, true) : br$1(i);
}
var pr$1 = go(function(i, o) {
  wi(o, ii(o), i);
});
var wr$1 = go(function(i, o, e, n) {
  wi(o, ii(o), i, n);
});
var Ge$2 = go(function(i, o, e, n) {
  wi(o, F$2(o), i, n);
});
var jr$1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var mr$1 = /^\w*$/;
function gn$1(i, o) {
  if (k$2(i)) return false;
  var e = typeof i;
  return e == "number" || e == "symbol" || e == "boolean" || i == null || oi(i) ? true : mr$1.test(i) || !jr$1.test(i) || o != null && i in Object(o);
}
var fo = Oi(Object, "create");
function fr$1() {
  this.__data__ = fo ? fo(null) : {}, this.size = 0;
}
function Yr$1(i) {
  var o = this.has(i) && delete this.__data__[i];
  return this.size -= o ? 1 : 0, o;
}
var kr$1 = "__lodash_hash_undefined__";
var Lr$1 = Object.prototype;
var Zr$1 = Lr$1.hasOwnProperty;
function Sr$1(i) {
  var o = this.__data__;
  if (fo) {
    var e = o[i];
    return e === kr$1 ? void 0 : e;
  }
  return Zr$1.call(o, i) ? o[i] : void 0;
}
var Jr$1 = Object.prototype;
var Cr$1 = Jr$1.hasOwnProperty;
function Xr$1(i) {
  var o = this.__data__;
  return fo ? o[i] !== void 0 : Cr$1.call(o, i);
}
var Hr = "__lodash_hash_undefined__";
function Dr$1(i, o) {
  var e = this.__data__;
  return this.size += this.has(i) ? 0 : 1, e[i] = fo && o === void 0 ? Hr : o, this;
}
function Ri(i) {
  var o = -1, e = i == null ? 0 : i.length;
  for (this.clear(); ++o < e; ) {
    var n = i[o];
    this.set(n[0], n[1]);
  }
}
Ri.prototype.clear = fr$1;
Ri.prototype.delete = Yr$1;
Ri.prototype.get = Sr$1;
Ri.prototype.has = Xr$1;
Ri.prototype.set = Dr$1;
function Tr$1() {
  this.__data__ = [], this.size = 0;
}
function Vo(i, o) {
  for (var e = i.length; e--; ) if (ci(i[e][0], o)) return e;
  return -1;
}
var Br$1 = Array.prototype;
var Qr$1 = Br$1.splice;
function Mr$1(i) {
  var o = this.__data__, e = Vo(o, i);
  if (e < 0) return false;
  var n = o.length - 1;
  return e == n ? o.pop() : Qr$1.call(o, e, 1), --this.size, true;
}
function Gr$1(i) {
  var o = this.__data__, e = Vo(o, i);
  return e < 0 ? void 0 : o[e][1];
}
function Nr$1(i) {
  return Vo(this.__data__, i) > -1;
}
function xr$1(i, o) {
  var e = this.__data__, n = Vo(e, i);
  return n < 0 ? (++this.size, e.push([i, o])) : e[n][1] = o, this;
}
function Ji(i) {
  var o = -1, e = i == null ? 0 : i.length;
  for (this.clear(); ++o < e; ) {
    var n = i[o];
    this.set(n[0], n[1]);
  }
}
Ji.prototype.clear = Tr$1;
Ji.prototype.delete = Mr$1;
Ji.prototype.get = Gr$1;
Ji.prototype.has = Nr$1;
Ji.prototype.set = xr$1;
var Yo = Oi(P$3, "Map");
function Wr$1() {
  this.size = 0, this.__data__ = { hash: new Ri(), map: new (Yo || Ji)(), string: new Ri() };
}
function Pr$1(i) {
  var o = typeof i;
  return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? i !== "__proto__" : i === null;
}
function ie$1(i, o) {
  var e = i.__data__;
  return Pr$1(o) ? e[typeof o == "string" ? "string" : "hash"] : e.map;
}
function Fr$1(i) {
  var o = ie$1(this, i).delete(i);
  return this.size -= o ? 1 : 0, o;
}
function Kr$1(i) {
  return ie$1(this, i).get(i);
}
function Rr$1(i) {
  return ie$1(this, i).has(i);
}
function Ar$1(i, o) {
  var e = ie$1(this, i), n = e.size;
  return e.set(i, o), this.size += e.size == n ? 0 : 1, this;
}
function Ci(i) {
  var o = -1, e = i == null ? 0 : i.length;
  for (this.clear(); ++o < e; ) {
    var n = i[o];
    this.set(n[0], n[1]);
  }
}
Ci.prototype.clear = Wr$1;
Ci.prototype.delete = Fr$1;
Ci.prototype.get = Kr$1;
Ci.prototype.has = Rr$1;
Ci.prototype.set = Ar$1;
var _r$1 = "Expected a function";
function oe$2(i, o) {
  if (typeof i != "function" || o != null && typeof o != "function") throw new TypeError(_r$1);
  var e = function() {
    var n = arguments, a = o ? o.apply(this, n) : n[0], u = e.cache;
    if (u.has(a)) return u.get(a);
    var g = i.apply(this, n);
    return e.cache = u.set(a, g) || u, g;
  };
  return e.cache = new (oe$2.Cache || Ci)(), e;
}
oe$2.Cache = Ci;
var Or$1 = 500;
function zr$1(i) {
  var o = oe$2(i, function(n) {
    return e.size === Or$1 && e.clear(), n;
  }), e = o.cache;
  return o;
}
var Er$1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var $r$1 = /\\(\\)?/g;
var Wu = zr$1(function(i) {
  var o = [];
  return i.charCodeAt(0) === 46 && o.push(""), i.replace(Er$1, function(e, n, a, u) {
    o.push(a ? u.replace($r$1, "$1") : n || e);
  }), o;
});
function X$2(i) {
  return i == null ? "" : ei(i);
}
function Qi(i, o) {
  return k$2(i) ? i : gn$1(i, o) ? [i] : Wu(X$2(i));
}
function vi(i) {
  if (typeof i == "string" || oi(i)) return i;
  var o = i + "";
  return o == "0" && 1 / i == -1 / 0 ? "-0" : o;
}
function zi(i, o) {
  o = Qi(o, i);
  for (var e = 0, n = o.length; i != null && e < n; ) i = i[vi(o[e++])];
  return e && e == n ? i : void 0;
}
function dn$1(i, o, e) {
  var n = i == null ? void 0 : zi(i, o);
  return n === void 0 ? e : n;
}
function tn$1(i, o) {
  for (var e = -1, n = o.length, a = Array(n), u = i == null; ++e < n; ) a[e] = u ? void 0 : dn$1(i, o[e]);
  return a;
}
function Mi(i, o) {
  for (var e = -1, n = o.length, a = i.length; ++e < n; ) i[a + e] = o[e];
  return i;
}
var ka = _$2 ? _$2.isConcatSpreadable : void 0;
function qr$1(i) {
  return k$2(i) || Ki(i) || !!(ka && i && i[ka]);
}
function A$2(i, o, e, n, a) {
  var u = -1, g = i.length;
  for (e || (e = qr$1), a || (a = []); ++u < g; ) {
    var t = i[u];
    o > 0 && e(t) ? o > 1 ? A$2(t, o - 1, e, n, a) : Mi(a, t) : n || (a[a.length] = t);
  }
  return a;
}
function Pu(i) {
  var o = i == null ? 0 : i.length;
  return o ? A$2(i, 1) : [];
}
function Xi(i) {
  return en$1(Bu(i, void 0, Pu), i + "");
}
var Ir$1 = Xi(tn$1);
var ee$2 = xu(Object.getPrototypeOf, Object);
var Ur = "[object Object]";
var Vr$1 = Function.prototype;
var il = Object.prototype;
var Fu = Vr$1.toString;
var ol = il.hasOwnProperty;
var el = Fu.call(Object);
function Jo(i) {
  if (!N$3(i) || $$1(i) != Ur) return false;
  var o = ee$2(i);
  if (o === null) return true;
  var e = ol.call(o, "constructor") && o.constructor;
  return typeof e == "function" && e instanceof e && Fu.call(e) == el;
}
var nl = "[object DOMException]";
var al = "[object Error]";
function sn$1(i) {
  if (!N$3(i)) return false;
  var o = $$1(i);
  return o == al || o == nl || typeof i.message == "string" && typeof i.name == "string" && !Jo(i);
}
var Ku = S$2(function(i, o) {
  try {
    return ni(i, void 0, o);
  } catch (e) {
    return sn$1(e) ? e : new Error(e);
  }
});
var ul = "Expected a function";
function Ru(i, o) {
  var e;
  if (typeof o != "function") throw new TypeError(ul);
  return i = Z$2(i), function() {
    return --i > 0 && (e = o.apply(this, arguments)), i <= 1 && (o = void 0), e;
  };
}
var gl = 1;
var dl = 32;
var ne$3 = S$2(function(i, o, e) {
  var n = gl;
  if (e.length) {
    var a = Di(e, uo(ne$3));
    n |= dl;
  }
  return Si(i, n, o, e, a);
});
ne$3.placeholder = {};
var tl = Xi(function(i, o) {
  return ui(o, function(e) {
    e = vi(e), pi(i, e, ne$3(i[e], i));
  }), i;
});
var sl = 1;
var hl = 2;
var rl = 32;
var hn$1 = S$2(function(i, o, e) {
  var n = sl | hl;
  if (e.length) {
    var a = Di(e, uo(hn$1));
    n |= rl;
  }
  return Si(o, n, i, e, a);
});
hn$1.placeholder = {};
function hi(i, o, e) {
  var n = -1, a = i.length;
  o < 0 && (o = -o > a ? 0 : a + o), e = e > a ? a : e, e < 0 && (e += a), a = o > e ? 0 : e - o >>> 0, o >>>= 0;
  for (var u = Array(a); ++n < a; ) u[n] = i[n + o];
  return u;
}
function Gi(i, o, e) {
  var n = i.length;
  return e = e === void 0 ? n : e, !o && e >= n ? i : hi(i, o, e);
}
var ll = "\\ud800-\\udfff";
var vl = "\\u0300-\\u036f";
var yl = "\\ufe20-\\ufe2f";
var cl = "\\u20d0-\\u20ff";
var bl = vl + yl + cl;
var pl = "\\ufe0e\\ufe0f";
var wl = "\\u200d";
var jl = RegExp("[" + wl + ll + bl + pl + "]");
function so$1(i) {
  return jl.test(i);
}
function ml(i) {
  return i.split("");
}
var Au = "\\ud800-\\udfff";
var fl = "\\u0300-\\u036f";
var Yl = "\\ufe20-\\ufe2f";
var kl = "\\u20d0-\\u20ff";
var Ll = fl + Yl + kl;
var Zl = "\\ufe0e\\ufe0f";
var Sl = "[" + Au + "]";
var Ne$1 = "[" + Ll + "]";
var xe$2 = "\\ud83c[\\udffb-\\udfff]";
var Jl = "(?:" + Ne$1 + "|" + xe$2 + ")";
var _u = "[^" + Au + "]";
var Ou = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var zu = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var Cl = "\\u200d";
var Eu = Jl + "?";
var $u = "[" + Zl + "]?";
var Xl = "(?:" + Cl + "(?:" + [_u, Ou, zu].join("|") + ")" + $u + Eu + ")*";
var Hl = $u + Eu + Xl;
var Dl = "(?:" + [_u + Ne$1 + "?", Ne$1, Ou, zu, Sl].join("|") + ")";
var Tl = RegExp(xe$2 + "(?=" + xe$2 + ")|" + Dl + Hl, "g");
function Bl(i) {
  return i.match(Tl) || [];
}
function yi(i) {
  return so$1(i) ? Bl(i) : ml(i);
}
function qu(i) {
  return function(o) {
    o = X$2(o);
    var e = so$1(o) ? yi(o) : void 0, n = e ? e[0] : o.charAt(0), a = e ? Gi(e, 1).join("") : o.slice(1);
    return n[i]() + a;
  };
}
var rn$1 = qu("toUpperCase");
function Iu(i) {
  return rn$1(X$2(i).toLowerCase());
}
function ln$1(i, o, e, n) {
  var a = -1, u = i == null ? 0 : i.length;
  for (n && u && (e = i[++a]); ++a < u; ) e = o(e, i[a], a, i);
  return e;
}
function vn$1(i) {
  return function(o) {
    return i?.[o];
  };
}
var Ml = vn$1(Ql);
var Gl = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
var Nl = "\\u0300-\\u036f";
var xl = "\\ufe20-\\ufe2f";
var Wl = "\\u20d0-\\u20ff";
var Pl = Nl + xl + Wl;
var Fl = "[" + Pl + "]";
var Kl = RegExp(Fl, "g");
function Uu(i) {
  return i = X$2(i), i && i.replace(Gl, Ml).replace(Kl, "");
}
var Rl = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function Al(i) {
  return i.match(Rl) || [];
}
var _l = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Ol(i) {
  return _l.test(i);
}
var Vu = "\\ud800-\\udfff";
var zl = "\\u0300-\\u036f";
var El = "\\ufe20-\\ufe2f";
var $l = "\\u20d0-\\u20ff";
var ql = zl + El + $l;
var ig = "\\u2700-\\u27bf";
var og = "a-z\\xdf-\\xf6\\xf8-\\xff";
var Il = "\\xac\\xb1\\xd7\\xf7";
var Ul = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
var Vl = "\\u2000-\\u206f";
var iv = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
var eg = "A-Z\\xc0-\\xd6\\xd8-\\xde";
var ov = "\\ufe0e\\ufe0f";
var ng = Il + Ul + Vl + iv;
var ag = "['’]";
var La = "[" + ng + "]";
var ev = "[" + ql + "]";
var ug = "\\d+";
var nv = "[" + ig + "]";
var gg = "[" + og + "]";
var dg = "[^" + Vu + ng + ug + ig + og + eg + "]";
var av = "\\ud83c[\\udffb-\\udfff]";
var uv = "(?:" + ev + "|" + av + ")";
var gv = "[^" + Vu + "]";
var tg = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var sg = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var qi = "[" + eg + "]";
var dv = "\\u200d";
var Za = "(?:" + gg + "|" + dg + ")";
var tv = "(?:" + qi + "|" + dg + ")";
var Sa = "(?:" + ag + "(?:d|ll|m|re|s|t|ve))?";
var Ja = "(?:" + ag + "(?:D|LL|M|RE|S|T|VE))?";
var hg = uv + "?";
var rg = "[" + ov + "]?";
var sv = "(?:" + dv + "(?:" + [gv, tg, sg].join("|") + ")" + rg + hg + ")*";
var hv = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])";
var rv = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])";
var lv = rg + hg + sv;
var vv = "(?:" + [nv, tg, sg].join("|") + ")" + lv;
var yv = RegExp([qi + "?" + gg + "+" + Sa + "(?=" + [La, qi, "$"].join("|") + ")", tv + "+" + Ja + "(?=" + [La, qi + Za, "$"].join("|") + ")", qi + "?" + Za + "+" + Sa, qi + "+" + Ja, rv, hv, ug, vv].join("|"), "g");
function cv(i) {
  return i.match(yv) || [];
}
function lg(i, o, e) {
  return i = X$2(i), o = e ? void 0 : o, o === void 0 ? Ol(i) ? cv(i) : Al(i) : i.match(o) || [];
}
var bv = "['’]";
var pv = RegExp(bv, "g");
function ho(i) {
  return function(o) {
    return ln$1(lg(Uu(o).replace(pv, "")), i, "");
  };
}
var wv = ho(function(i, o, e) {
  return o = o.toLowerCase(), i + (e ? Iu(o) : o);
});
function jv() {
  if (!arguments.length) return [];
  var i = arguments[0];
  return k$2(i) ? i : [i];
}
var mv = P$3.isFinite;
var fv = Math.min;
function yn$1(i) {
  var o = Math[i];
  return function(e, n) {
    if (e = gi(e), n = n == null ? 0 : fv(Z$2(n), 292), n && mv(e)) {
      var a = (X$2(e) + "e").split("e"), u = o(a[0] + "e" + (+a[1] + n));
      return a = (X$2(u) + "e").split("e"), +(a[0] + "e" + (+a[1] - n));
    }
    return o(e);
  };
}
var Yv = yn$1("ceil");
function vg(i) {
  var o = d$1(i);
  return o.__chain__ = true, o;
}
var kv = Math.ceil;
var Lv = Math.max;
function Zv(i, o, e) {
  (e ? E$2(i, o, e) : o === void 0) ? o = 1 : o = Lv(Z$2(o), 0);
  var n = i == null ? 0 : i.length;
  if (!n || o < 1) return [];
  for (var a = 0, u = 0, g = Array(kv(n / o)); a < n; ) g[u++] = hi(i, a, a += o);
  return g;
}
function Ei(i, o, e) {
  return i === i && (e !== void 0 && (i = i <= e ? i : e), o !== void 0 && (i = i >= o ? i : o)), i;
}
function Sv(i, o, e) {
  return e === void 0 && (e = o, o = void 0), e !== void 0 && (e = gi(e), e = e === e ? e : 0), o !== void 0 && (o = gi(o), o = o === o ? o : 0), Ei(gi(i), o, e);
}
function Jv() {
  this.__data__ = new Ji(), this.size = 0;
}
function Cv(i) {
  var o = this.__data__, e = o.delete(i);
  return this.size = o.size, e;
}
function Xv(i) {
  return this.__data__.get(i);
}
function Hv(i) {
  return this.__data__.has(i);
}
var Dv = 200;
function Tv(i, o) {
  var e = this.__data__;
  if (e instanceof Ji) {
    var n = e.__data__;
    if (!Yo || n.length < Dv - 1) return n.push([i, o]), this.size = ++e.size, this;
    e = this.__data__ = new Ci(n);
  }
  return e.set(i, o), this.size = e.size, this;
}
function li(i) {
  var o = this.__data__ = new Ji(i);
  this.size = o.size;
}
li.prototype.clear = Jv;
li.prototype.delete = Cv;
li.prototype.get = Xv;
li.prototype.has = Hv;
li.prototype.set = Tv;
function yg(i, o) {
  return i && wi(o, F$2(o), i);
}
function Bv(i, o) {
  return i && wi(o, ii(o), i);
}
var cg = typeof exports == "object" && exports && !exports.nodeType && exports;
var Ca = cg && typeof module == "object" && module && !module.nodeType && module;
var Qv = Ca && Ca.exports === cg;
var Xa = Qv ? P$3.Buffer : void 0;
var Ha = Xa ? Xa.allocUnsafe : void 0;
function bg(i, o) {
  if (o) return i.slice();
  var e = i.length, n = Ha ? Ha(e) : new i.constructor(e);
  return i.copy(n), n;
}
function Ni(i, o) {
  for (var e = -1, n = i == null ? 0 : i.length, a = 0, u = []; ++e < n; ) {
    var g = i[e];
    o(g, e, i) && (u[a++] = g);
  }
  return u;
}
function cn$1() {
  return [];
}
var Mv = Object.prototype;
var Gv = Mv.propertyIsEnumerable;
var Da = Object.getOwnPropertySymbols;
var bn$1 = Da ? function(i) {
  return i == null ? [] : (i = Object(i), Ni(Da(i), function(o) {
    return Gv.call(i, o);
  }));
} : cn$1;
function Nv(i, o) {
  return wi(i, bn$1(i), o);
}
var xv = Object.getOwnPropertySymbols;
var pg = xv ? function(i) {
  for (var o = []; i; ) Mi(o, bn$1(i)), i = ee$2(i);
  return o;
} : cn$1;
function Wv(i, o) {
  return wi(i, pg(i), o);
}
function wg(i, o, e) {
  var n = o(i);
  return k$2(i) ? n : Mi(n, e(i));
}
function We$2(i) {
  return wg(i, F$2, bn$1);
}
function pn$1(i) {
  return wg(i, ii, pg);
}
var Pe = Oi(P$3, "DataView");
var Fe$1 = Oi(P$3, "Promise");
var Vi = Oi(P$3, "Set");
var Ta = "[object Map]";
var Pv = "[object Object]";
var Ba = "[object Promise]";
var Qa = "[object Set]";
var Ma = "[object WeakMap]";
var Ga = "[object DataView]";
var Fv = _i(Pe);
var Kv = _i(Yo);
var Rv = _i(Fe$1);
var Av = _i(Vi);
var _v = _i(jo);
var Wi = $$1;
(Pe && Wi(new Pe(new ArrayBuffer(1))) != Ga || Yo && Wi(new Yo()) != Ta || Fe$1 && Wi(Fe$1.resolve()) != Ba || Vi && Wi(new Vi()) != Qa || jo && Wi(new jo()) != Ma) && (Wi = function(i) {
  var o = $$1(i), e = o == Pv ? i.constructor : void 0, n = e ? _i(e) : "";
  if (n) switch (n) {
    case Fv:
      return Ga;
    case Kv:
      return Ta;
    case Rv:
      return Ba;
    case Av:
      return Qa;
    case _v:
      return Ma;
  }
  return o;
});
const bi = Wi;
var Ov = Object.prototype;
var zv = Ov.hasOwnProperty;
function Ev(i) {
  var o = i.length, e = new i.constructor(o);
  return o && typeof i[0] == "string" && zv.call(i, "index") && (e.index = i.index, e.input = i.input), e;
}
var Ao = P$3.Uint8Array;
function wn$1(i) {
  var o = new i.constructor(i.byteLength);
  return new Ao(o).set(new Ao(i)), o;
}
function $v(i, o) {
  var e = o ? wn$1(i.buffer) : i.buffer;
  return new i.constructor(e, i.byteOffset, i.byteLength);
}
var qv = /\w*$/;
function Iv(i) {
  var o = new i.constructor(i.source, qv.exec(i));
  return o.lastIndex = i.lastIndex, o;
}
var Na = _$2 ? _$2.prototype : void 0;
var xa = Na ? Na.valueOf : void 0;
function Uv(i) {
  return xa ? Object(xa.call(i)) : {};
}
function jg(i, o) {
  var e = o ? wn$1(i.buffer) : i.buffer;
  return new i.constructor(e, i.byteOffset, i.length);
}
var Vv = "[object Boolean]";
var i0 = "[object Date]";
var o0 = "[object Map]";
var e0 = "[object Number]";
var n0 = "[object RegExp]";
var a0 = "[object Set]";
var u0 = "[object String]";
var g0 = "[object Symbol]";
var d0 = "[object ArrayBuffer]";
var t0 = "[object DataView]";
var s0 = "[object Float32Array]";
var h0 = "[object Float64Array]";
var r0 = "[object Int8Array]";
var l0 = "[object Int16Array]";
var v0 = "[object Int32Array]";
var y0 = "[object Uint8Array]";
var c0 = "[object Uint8ClampedArray]";
var b0 = "[object Uint16Array]";
var p0 = "[object Uint32Array]";
function w0(i, o, e) {
  var n = i.constructor;
  switch (o) {
    case d0:
      return wn$1(i);
    case Vv:
    case i0:
      return new n(+i);
    case t0:
      return $v(i, e);
    case s0:
    case h0:
    case r0:
    case l0:
    case v0:
    case y0:
    case c0:
    case b0:
    case p0:
      return jg(i, e);
    case o0:
      return new n();
    case e0:
    case u0:
      return new n(i);
    case n0:
      return Iv(i);
    case a0:
      return new n();
    case g0:
      return Uv(i);
  }
}
function mg(i) {
  return typeof i.constructor == "function" && !So(i) ? no$1(ee$2(i)) : {};
}
var j0 = "[object Map]";
function m0(i) {
  return N$3(i) && bi(i) == j0;
}
var Wa = si && si.isMap;
var fg = Wa ? ai(Wa) : m0;
var f0 = "[object Set]";
function Y0(i) {
  return N$3(i) && bi(i) == f0;
}
var Pa = si && si.isSet;
var Yg = Pa ? ai(Pa) : Y0;
var k0 = 1;
var L0 = 2;
var Z0 = 4;
var kg = "[object Arguments]";
var S0 = "[object Array]";
var J0 = "[object Boolean]";
var C0 = "[object Date]";
var X0 = "[object Error]";
var Lg = "[object Function]";
var H0 = "[object GeneratorFunction]";
var D0 = "[object Map]";
var T0 = "[object Number]";
var Zg = "[object Object]";
var B0 = "[object RegExp]";
var Q0 = "[object Set]";
var M0 = "[object String]";
var G0 = "[object Symbol]";
var N0 = "[object WeakMap]";
var x0 = "[object ArrayBuffer]";
var W0 = "[object DataView]";
var P0 = "[object Float32Array]";
var F0 = "[object Float64Array]";
var K0 = "[object Int8Array]";
var R0 = "[object Int16Array]";
var A0 = "[object Int32Array]";
var _0 = "[object Uint8Array]";
var O0 = "[object Uint8ClampedArray]";
var z0 = "[object Uint16Array]";
var E0 = "[object Uint32Array]";
var T$1 = {};
T$1[kg] = T$1[S0] = T$1[x0] = T$1[W0] = T$1[J0] = T$1[C0] = T$1[P0] = T$1[F0] = T$1[K0] = T$1[R0] = T$1[A0] = T$1[D0] = T$1[T0] = T$1[Zg] = T$1[B0] = T$1[Q0] = T$1[M0] = T$1[G0] = T$1[_0] = T$1[O0] = T$1[z0] = T$1[E0] = true;
T$1[X0] = T$1[Lg] = T$1[N0] = false;
function di(i, o, e, n, a, u) {
  var g, t = o & k0, s = o & L0, h = o & Z0;
  if (e && (g = a ? e(i, n, a, u) : e(i)), g !== void 0) return g;
  if (!G$2(i)) return i;
  var r = k$2(i);
  if (r) {
    if (g = Ev(i), !t) return I$2(i, g);
  } else {
    var l = bi(i), v = l == Lg || l == H0;
    if (Ti(i)) return bg(i, t);
    if (l == Zg || l == kg || v && !a) {
      if (g = s || v ? {} : mg(i), !t) return s ? Wv(i, Bv(g, i)) : Nv(i, yg(g, i));
    } else {
      if (!T$1[l]) return a ? i : {};
      g = w0(i, l, t);
    }
  }
  u || (u = new li());
  var y = u.get(i);
  if (y) return y;
  u.set(i, g), Yg(i) ? i.forEach(function(p) {
    g.add(di(p, o, e, p, i, u));
  }) : fg(i) && i.forEach(function(p, j) {
    g.set(j, di(p, o, e, j, i, u));
  });
  var c = h ? s ? pn$1 : We$2 : s ? ii : F$2, b = r ? void 0 : c(i);
  return ui(b || i, function(p, j) {
    b && (j = p, p = i[j]), Zo(g, j, di(p, o, e, j, i, u));
  }), g;
}
var $0 = 4;
function q0(i) {
  return di(i, $0);
}
var I0 = 1;
var U0 = 4;
function V0(i) {
  return di(i, I0 | U0);
}
var iy = 1;
var oy = 4;
function ey(i, o) {
  return o = typeof o == "function" ? o : void 0, di(i, iy | oy, o);
}
var ny = 4;
function ay(i, o) {
  return o = typeof o == "function" ? o : void 0, di(i, ny, o);
}
function uy() {
  return new ti(this.value(), this.__chain__);
}
function gy(i) {
  for (var o = -1, e = i == null ? 0 : i.length, n = 0, a = []; ++o < e; ) {
    var u = i[o];
    u && (a[n++] = u);
  }
  return a;
}
function dy() {
  var i = arguments.length;
  if (!i) return [];
  for (var o = Array(i - 1), e = arguments[0], n = i; n--; ) o[n - 1] = arguments[n];
  return Mi(k$2(e) ? I$2(e) : [e], A$2(o, 1));
}
var ty = "__lodash_hash_undefined__";
function sy(i) {
  return this.__data__.set(i, ty), this;
}
function hy(i) {
  return this.__data__.has(i);
}
function Ai(i) {
  var o = -1, e = i == null ? 0 : i.length;
  for (this.__data__ = new Ci(); ++o < e; ) this.add(i[o]);
}
Ai.prototype.add = Ai.prototype.push = sy;
Ai.prototype.has = hy;
function jn$1(i, o) {
  for (var e = -1, n = i == null ? 0 : i.length; ++e < n; ) if (o(i[e], e, i)) return true;
  return false;
}
function ko(i, o) {
  return i.has(o);
}
var ry = 1;
var ly = 2;
function Sg(i, o, e, n, a, u) {
  var g = e & ry, t = i.length, s = o.length;
  if (t != s && !(g && s > t)) return false;
  var h = u.get(i), r = u.get(o);
  if (h && r) return h == o && r == i;
  var l = -1, v = true, y = e & ly ? new Ai() : void 0;
  for (u.set(i, o), u.set(o, i); ++l < t; ) {
    var c = i[l], b = o[l];
    if (n) var p = g ? n(b, c, l, o, i, u) : n(c, b, l, i, o, u);
    if (p !== void 0) {
      if (p) continue;
      v = false;
      break;
    }
    if (y) {
      if (!jn$1(o, function(j, L) {
        if (!ko(y, L) && (c === j || a(c, j, e, n, u))) return y.push(L);
      })) {
        v = false;
        break;
      }
    } else if (!(c === b || a(c, b, e, n, u))) {
      v = false;
      break;
    }
  }
  return u.delete(i), u.delete(o), v;
}
function mn$1(i) {
  var o = -1, e = Array(i.size);
  return i.forEach(function(n, a) {
    e[++o] = [a, n];
  }), e;
}
function ae$2(i) {
  var o = -1, e = Array(i.size);
  return i.forEach(function(n) {
    e[++o] = n;
  }), e;
}
var vy = 1;
var yy = 2;
var cy = "[object Boolean]";
var by = "[object Date]";
var py = "[object Error]";
var wy = "[object Map]";
var jy = "[object Number]";
var my = "[object RegExp]";
var fy = "[object Set]";
var Yy = "[object String]";
var ky = "[object Symbol]";
var Ly = "[object ArrayBuffer]";
var Zy = "[object DataView]";
var Fa = _$2 ? _$2.prototype : void 0;
var Ye$2 = Fa ? Fa.valueOf : void 0;
function Sy(i, o, e, n, a, u, g) {
  switch (e) {
    case Zy:
      if (i.byteLength != o.byteLength || i.byteOffset != o.byteOffset) return false;
      i = i.buffer, o = o.buffer;
    case Ly:
      return !(i.byteLength != o.byteLength || !u(new Ao(i), new Ao(o)));
    case cy:
    case by:
    case jy:
      return ci(+i, +o);
    case py:
      return i.name == o.name && i.message == o.message;
    case my:
    case Yy:
      return i == o + "";
    case wy:
      var t = mn$1;
    case fy:
      var s = n & vy;
      if (t || (t = ae$2), i.size != o.size && !s) return false;
      var h = g.get(i);
      if (h) return h == o;
      n |= yy, g.set(i, o);
      var r = Sg(t(i), t(o), n, a, u, g);
      return g.delete(i), r;
    case ky:
      if (Ye$2) return Ye$2.call(i) == Ye$2.call(o);
  }
  return false;
}
var Jy = 1;
var Cy = Object.prototype;
var Xy = Cy.hasOwnProperty;
function Hy(i, o, e, n, a, u) {
  var g = e & Jy, t = We$2(i), s = t.length, h = We$2(o), r = h.length;
  if (s != r && !g) return false;
  for (var l = s; l--; ) {
    var v = t[l];
    if (!(g ? v in o : Xy.call(o, v))) return false;
  }
  var y = u.get(i), c = u.get(o);
  if (y && c) return y == o && c == i;
  var b = true;
  u.set(i, o), u.set(o, i);
  for (var p = g; ++l < s; ) {
    v = t[l];
    var j = i[v], L = o[v];
    if (n) var K = g ? n(L, j, v, o, i, u) : n(j, L, v, i, o, u);
    if (!(K === void 0 ? j === L || a(j, L, e, n, u) : K)) {
      b = false;
      break;
    }
    p || (p = v == "constructor");
  }
  if (b && !p) {
    var R = i.constructor, O = o.constructor;
    R != O && "constructor" in i && "constructor" in o && !(typeof R == "function" && R instanceof R && typeof O == "function" && O instanceof O) && (b = false);
  }
  return u.delete(i), u.delete(o), b;
}
var Dy = 1;
var Ka = "[object Arguments]";
var Ra = "[object Array]";
var Mo = "[object Object]";
var Ty = Object.prototype;
var Aa = Ty.hasOwnProperty;
function By(i, o, e, n, a, u) {
  var g = k$2(i), t = k$2(o), s = g ? Ra : bi(i), h = t ? Ra : bi(o);
  s = s == Ka ? Mo : s, h = h == Ka ? Mo : h;
  var r = s == Mo, l = h == Mo, v = s == h;
  if (v && Ti(i)) {
    if (!Ti(o)) return false;
    g = true, r = false;
  }
  if (v && !r) return u || (u = new li()), g || to$1(i) ? Sg(i, o, e, n, a, u) : Sy(i, o, s, e, n, a, u);
  if (!(e & Dy)) {
    var y = r && Aa.call(i, "__wrapped__"), c = l && Aa.call(o, "__wrapped__");
    if (y || c) {
      var b = y ? i.value() : i, p = c ? o.value() : o;
      return u || (u = new li()), a(b, p, e, n, u);
    }
  }
  return v ? (u || (u = new li()), Hy(i, o, e, n, a, u)) : false;
}
function Co(i, o, e, n, a) {
  return i === o ? true : i == null || o == null || !N$3(i) && !N$3(o) ? i !== i && o !== o : By(i, o, e, n, Co, a);
}
var Qy = 1;
var My = 2;
function fn$1(i, o, e, n) {
  var a = e.length, u = a, g = !n;
  if (i == null) return !u;
  for (i = Object(i); a--; ) {
    var t = e[a];
    if (g && t[2] ? t[1] !== i[t[0]] : !(t[0] in i)) return false;
  }
  for (; ++a < u; ) {
    t = e[a];
    var s = t[0], h = i[s], r = t[1];
    if (g && t[2]) {
      if (h === void 0 && !(s in i)) return false;
    } else {
      var l = new li();
      if (n) var v = n(h, r, s, i, o, l);
      if (!(v === void 0 ? Co(r, h, Qy | My, n, l) : v)) return false;
    }
  }
  return true;
}
function Jg(i) {
  return i === i && !G$2(i);
}
function Yn$1(i) {
  for (var o = F$2(i), e = o.length; e--; ) {
    var n = o[e], a = i[n];
    o[e] = [n, a, Jg(a)];
  }
  return o;
}
function Cg(i, o) {
  return function(e) {
    return e == null ? false : e[i] === o && (o !== void 0 || i in Object(e));
  };
}
function Xg(i) {
  var o = Yn$1(i);
  return o.length == 1 && o[0][2] ? Cg(o[0][0], o[0][1]) : function(e) {
    return e === i || fn$1(e, i, o);
  };
}
function Gy(i, o) {
  return i != null && o in Object(i);
}
function Hg(i, o, e) {
  o = Qi(o, i);
  for (var n = -1, a = o.length, u = false; ++n < a; ) {
    var g = vi(o[n]);
    if (!(u = i != null && e(i, g))) break;
    i = i[g];
  }
  return u || ++n != a ? u : (a = i == null ? 0 : i.length, !!a && Uo(a) && Zi(g, a) && (k$2(i) || Ki(i)));
}
function kn$1(i, o) {
  return i != null && Hg(i, o, Gy);
}
var Ny = 1;
var xy = 2;
function Dg(i, o) {
  return gn$1(i) && Jg(o) ? Cg(vi(i), o) : function(e) {
    var n = dn$1(e, i);
    return n === void 0 && n === o ? kn$1(e, i) : Co(o, n, Ny | xy);
  };
}
function Ln$1(i) {
  return function(o) {
    return o?.[i];
  };
}
function Wy(i) {
  return function(o) {
    return zi(o, i);
  };
}
function Tg(i) {
  return gn$1(i) ? Ln$1(vi(i)) : Wy(i);
}
function Y$2(i) {
  return typeof i == "function" ? i : i == null ? U$4 : typeof i == "object" ? k$2(i) ? Dg(i[0], i[1]) : Xg(i) : Tg(i);
}
var Py = "Expected a function";
function Fy(i) {
  var o = i == null ? 0 : i.length, e = Y$2;
  return i = o ? M$2(i, function(n) {
    if (typeof n[1] != "function") throw new TypeError(Py);
    return [e(n[0]), n[1]];
  }) : [], S$2(function(n) {
    for (var a = -1; ++a < o; ) {
      var u = i[a];
      if (ni(u[0], this, n)) return ni(u[1], this, n);
    }
  });
}
function Bg(i, o, e) {
  var n = e.length;
  if (i == null) return !n;
  for (i = Object(i); n--; ) {
    var a = e[n], u = o[a], g = i[a];
    if (g === void 0 && !(a in i) || !u(g)) return false;
  }
  return true;
}
function Ky(i) {
  var o = F$2(i);
  return function(e) {
    return Bg(e, i, o);
  };
}
var Ry = 1;
function Ay(i) {
  return Ky(di(i, Ry));
}
function _y(i, o) {
  return o == null || Bg(i, o, F$2(o));
}
function Oy(i, o, e, n) {
  for (var a = -1, u = i == null ? 0 : i.length; ++a < u; ) {
    var g = i[a];
    o(n, g, e(g), i);
  }
  return n;
}
function Qg(i) {
  return function(o, e, n) {
    for (var a = -1, u = Object(o), g = n(o), t = g.length; t--; ) {
      var s = g[i ? t : ++a];
      if (e(u[s], s, u) === false) break;
    }
    return o;
  };
}
var Zn$1 = Qg();
function ji(i, o) {
  return i && Zn$1(i, o, F$2);
}
function Mg(i, o) {
  return function(e, n) {
    if (e == null) return e;
    if (!V$4(e)) return i(e, n);
    for (var a = e.length, u = o ? a : -1, g = Object(e); (o ? u-- : ++u < a) && n(g[u], u, g) !== false; ) ;
    return e;
  };
}
var xi = Mg(ji);
function zy(i, o, e, n) {
  return xi(i, function(a, u, g) {
    o(n, a, e(a), g);
  }), n;
}
function ue$1(i, o) {
  return function(e, n) {
    var a = k$2(e) ? Oy : zy, u = o ? o() : {};
    return a(e, i, Y$2(n), u);
  };
}
var Ey = Object.prototype;
var $y = Ey.hasOwnProperty;
var qy = ue$1(function(i, o, e) {
  $y.call(i, e) ? ++i[e] : pi(i, e, 1);
});
function Iy(i, o) {
  var e = no$1(i);
  return o == null ? e : yg(e, o);
}
var Uy = 8;
function Sn$1(i, o, e) {
  o = e ? void 0 : o;
  var n = Si(i, Uy, void 0, void 0, void 0, void 0, void 0, o);
  return n.placeholder = Sn$1.placeholder, n;
}
Sn$1.placeholder = {};
var Vy = 16;
function Jn$1(i, o, e) {
  o = e ? void 0 : o;
  var n = Si(i, Vy, void 0, void 0, void 0, void 0, void 0, o);
  return n.placeholder = Jn$1.placeholder, n;
}
Jn$1.placeholder = {};
var Wo = function() {
  return P$3.Date.now();
};
var ic = "Expected a function";
var oc = Math.max;
var ec = Math.min;
function Gg(i, o, e) {
  var n, a, u, g, t, s, h = 0, r = false, l = false, v = true;
  if (typeof i != "function") throw new TypeError(ic);
  o = gi(o) || 0, G$2(e) && (r = !!e.leading, l = "maxWait" in e, u = l ? oc(gi(e.maxWait) || 0, o) : u, v = "trailing" in e ? !!e.trailing : v);
  function y(Q) {
    var z = n, Yi = a;
    return n = a = void 0, h = Q, g = i.apply(Yi, z), g;
  }
  function c(Q) {
    return h = Q, t = setTimeout(j, o), r ? y(Q) : g;
  }
  function b(Q) {
    var z = Q - s, Yi = Q - h, En = o - z;
    return l ? ec(En, u - Yi) : En;
  }
  function p(Q) {
    var z = Q - s, Yi = Q - h;
    return s === void 0 || z >= o || z < 0 || l && Yi >= u;
  }
  function j() {
    var Q = Wo();
    if (p(Q)) return L(Q);
    t = setTimeout(j, b(Q));
  }
  function L(Q) {
    return t = void 0, v && n ? y(Q) : (n = a = void 0, g);
  }
  function K() {
    t !== void 0 && clearTimeout(t), h = 0, n = s = a = t = void 0;
  }
  function R() {
    return t === void 0 ? g : L(Wo());
  }
  function O() {
    var Q = Wo(), z = p(Q);
    if (n = arguments, a = this, s = Q, z) {
      if (t === void 0) return c(s);
      if (l) return clearTimeout(t), t = setTimeout(j, o), y(s);
    }
    return t === void 0 && (t = setTimeout(j, o)), g;
  }
  return O.cancel = K, O.flush = R, O;
}
function nc(i, o) {
  return i == null || i !== i ? o : i;
}
var Ng = Object.prototype;
var ac = Ng.hasOwnProperty;
var uc = S$2(function(i, o) {
  i = Object(i);
  var e = -1, n = o.length, a = n > 2 ? o[2] : void 0;
  for (a && E$2(o[0], o[1], a) && (n = 1); ++e < n; ) for (var u = o[e], g = ii(u), t = -1, s = g.length; ++t < s; ) {
    var h = g[t], r = i[h];
    (r === void 0 || ci(r, Ng[h]) && !ac.call(i, h)) && (i[h] = u[h]);
  }
  return i;
});
function Ke$2(i, o, e) {
  (e !== void 0 && !ci(i[o], e) || e === void 0 && !(o in i)) && pi(i, o, e);
}
function W$3(i) {
  return N$3(i) && V$4(i);
}
function Re$2(i, o) {
  if (!(o === "constructor" && typeof i[o] == "function") && o != "__proto__") return i[o];
}
function xg(i) {
  return wi(i, ii(i));
}
function gc(i, o, e, n, a, u, g) {
  var t = Re$2(i, e), s = Re$2(o, e), h = g.get(s);
  if (h) {
    Ke$2(i, e, h);
    return;
  }
  var r = u ? u(t, s, e + "", i, o, g) : void 0, l = r === void 0;
  if (l) {
    var v = k$2(s), y = !v && Ti(s), c = !v && !y && to$1(s);
    r = s, v || y || c ? k$2(t) ? r = t : W$3(t) ? r = I$2(t) : y ? (l = false, r = bg(s, true)) : c ? (l = false, r = jg(s, true)) : r = [] : Jo(s) || Ki(s) ? (r = t, Ki(t) ? r = xg(t) : (!G$2(t) || Li(t)) && (r = mg(s))) : l = false;
  }
  l && (g.set(s, r), a(r, s, n, u, g), g.delete(s)), Ke$2(i, e, r);
}
function ge$2(i, o, e, n, a) {
  i !== o && Zn$1(o, function(u, g) {
    if (a || (a = new li()), G$2(u)) gc(i, o, g, e, ge$2, n, a);
    else {
      var t = n ? n(Re$2(i, g), u, g + "", i, o, a) : void 0;
      t === void 0 && (t = u), Ke$2(i, g, t);
    }
  }, ii);
}
function Wg(i, o, e, n, a, u) {
  return G$2(i) && G$2(o) && (u.set(o, i), ge$2(i, o, void 0, Wg, u), u.delete(o)), i;
}
var Pg = go(function(i, o, e, n) {
  ge$2(i, o, e, n);
});
var dc = S$2(function(i) {
  return i.push(void 0, Wg), ni(Pg, void 0, i);
});
var tc = "Expected a function";
function Fg(i, o, e) {
  if (typeof i != "function") throw new TypeError(tc);
  return setTimeout(function() {
    i.apply(void 0, e);
  }, o);
}
var sc = S$2(function(i, o) {
  return Fg(i, 1, o);
});
var hc = S$2(function(i, o, e) {
  return Fg(i, gi(o) || 0, e);
});
function Cn$1(i, o, e) {
  for (var n = -1, a = i == null ? 0 : i.length; ++n < a; ) if (e(o, i[n])) return true;
  return false;
}
var rc = 200;
function Xo(i, o, e, n) {
  var a = -1, u = qo, g = true, t = i.length, s = [], h = o.length;
  if (!t) return s;
  e && (o = M$2(o, ai(e))), n ? (u = Cn$1, g = false) : o.length >= rc && (u = ko, g = false, o = new Ai(o));
  i: for (; ++a < t; ) {
    var r = i[a], l = e == null ? r : e(r);
    if (r = n || r !== 0 ? r : 0, g && l === l) {
      for (var v = h; v--; ) if (o[v] === l) continue i;
      s.push(r);
    } else u(o, l, n) || s.push(r);
  }
  return s;
}
var lc = S$2(function(i, o) {
  return W$3(i) ? Xo(i, A$2(o, 1, W$3, true)) : [];
});
function ri(i) {
  var o = i == null ? 0 : i.length;
  return o ? i[o - 1] : void 0;
}
var vc = S$2(function(i, o) {
  var e = ri(o);
  return W$3(e) && (e = void 0), W$3(i) ? Xo(i, A$2(o, 1, W$3, true), Y$2(e)) : [];
});
var yc = S$2(function(i, o) {
  var e = ri(o);
  return W$3(e) && (e = void 0), W$3(i) ? Xo(i, A$2(o, 1, W$3, true), void 0, e) : [];
});
var cc = zo(function(i, o) {
  return i / o;
}, 1);
function bc(i, o, e) {
  var n = i == null ? 0 : i.length;
  return n ? (o = e || o === void 0 ? 1 : Z$2(o), hi(i, o < 0 ? 0 : o, n)) : [];
}
function pc(i, o, e) {
  var n = i == null ? 0 : i.length;
  return n ? (o = e || o === void 0 ? 1 : Z$2(o), o = n - o, hi(i, 0, o < 0 ? 0 : o)) : [];
}
function de$2(i, o, e, n) {
  for (var a = i.length, u = n ? a : -1; (n ? u-- : ++u < a) && o(i[u], u, i); ) ;
  return e ? hi(i, n ? 0 : u, n ? u + 1 : a) : hi(i, n ? u + 1 : 0, n ? a : u);
}
function wc(i, o) {
  return i && i.length ? de$2(i, Y$2(o), true, true) : [];
}
function jc(i, o) {
  return i && i.length ? de$2(i, Y$2(o), true) : [];
}
function mi(i) {
  return typeof i == "function" ? i : U$4;
}
function mc(i, o) {
  var e = k$2(i) ? ui : xi;
  return e(i, mi(o));
}
function fc(i, o) {
  for (var e = i == null ? 0 : i.length; e-- && o(i[e], e, i) !== false; ) ;
  return i;
}
var Kg = Qg(true);
function Xn$1(i, o) {
  return i && Kg(i, o, F$2);
}
var Rg = Mg(Xn$1, true);
function Yc(i, o) {
  var e = k$2(i) ? fc : Rg;
  return e(i, mi(o));
}
function kc(i, o, e) {
  i = X$2(i), o = ei(o);
  var n = i.length;
  e = e === void 0 ? n : Ei(Z$2(e), 0, n);
  var a = e;
  return e -= o.length, e >= 0 && i.slice(e, a) == o;
}
function Lc(i, o) {
  return M$2(o, function(e) {
    return [e, i[e]];
  });
}
function Zc(i) {
  var o = -1, e = Array(i.size);
  return i.forEach(function(n) {
    e[++o] = [n, n];
  }), e;
}
var Sc = "[object Map]";
var Jc = "[object Set]";
function Ag(i) {
  return function(o) {
    var e = bi(o);
    return e == Sc ? mn$1(o) : e == Jc ? Zc(o) : Lc(o, i(o));
  };
}
var Cc = Ag(F$2);
var Xc = Ag(ii);
var Hc = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
var Dc = vn$1(Hc);
var _g = /[&<>"']/g;
var Tc = RegExp(_g.source);
function Og(i) {
  return i = X$2(i), i && Tc.test(i) ? i.replace(_g, Dc) : i;
}
var zg = /[\\^$.*+?()[\]{}|]/g;
var Bc = RegExp(zg.source);
function Qc(i) {
  return i = X$2(i), i && Bc.test(i) ? i.replace(zg, "\\$&") : i;
}
function Eg(i, o) {
  for (var e = -1, n = i == null ? 0 : i.length; ++e < n; ) if (!o(i[e], e, i)) return false;
  return true;
}
function Mc(i, o) {
  var e = true;
  return xi(i, function(n, a, u) {
    return e = !!o(n, a, u), e;
  }), e;
}
function Gc(i, o, e) {
  var n = k$2(i) ? Eg : Mc;
  return e && E$2(i, o, e) && (o = void 0), n(i, Y$2(o));
}
var Nc = 4294967295;
function $g(i) {
  return i ? Ei(Z$2(i), 0, Nc) : 0;
}
function xc(i, o, e, n) {
  var a = i.length;
  for (e = Z$2(e), e < 0 && (e = -e > a ? 0 : a + e), n = n === void 0 || n > a ? a : Z$2(n), n < 0 && (n += a), n = e > n ? 0 : $g(n); e < n; ) i[e++] = o;
  return i;
}
function Wc(i, o, e, n) {
  var a = i == null ? 0 : i.length;
  return a ? (e && typeof e != "number" && E$2(i, o, e) && (e = 0, n = a), xc(i, o, e, n)) : [];
}
function qg(i, o) {
  var e = [];
  return xi(i, function(n, a, u) {
    o(n, a, u) && e.push(n);
  }), e;
}
function Pc(i, o) {
  var e = k$2(i) ? Ni : qg;
  return e(i, Y$2(o));
}
function Ig(i) {
  return function(o, e, n) {
    var a = Object(o);
    if (!V$4(o)) {
      var u = Y$2(e);
      o = F$2(o), e = function(t) {
        return u(a[t], t, a);
      };
    }
    var g = i(o, e, n);
    return g > -1 ? a[u ? o[g] : g] : void 0;
  };
}
var Fc = Math.max;
function Ug(i, o, e) {
  var n = i == null ? 0 : i.length;
  if (!n) return -1;
  var a = e == null ? 0 : Z$2(e);
  return a < 0 && (a = Fc(n + a, 0)), $o(i, Y$2(o), a);
}
var Kc = Ig(Ug);
function Vg(i, o, e) {
  var n;
  return e(i, function(a, u, g) {
    if (o(a, u, g)) return n = u, false;
  }), n;
}
function Rc(i, o) {
  return Vg(i, Y$2(o), ji);
}
var Ac = Math.max;
var _c = Math.min;
function id(i, o, e) {
  var n = i == null ? 0 : i.length;
  if (!n) return -1;
  var a = n - 1;
  return e !== void 0 && (a = Z$2(e), a = e < 0 ? Ac(n + a, 0) : _c(a, n - 1)), $o(i, Y$2(o), a, true);
}
var Oc = Ig(id);
function zc(i, o) {
  return Vg(i, Y$2(o), Xn$1);
}
function Ec(i) {
  return i && i.length ? i[0] : void 0;
}
function od(i, o) {
  var e = -1, n = V$4(i) ? Array(i.length) : [];
  return xi(i, function(a, u, g) {
    n[++e] = o(a, u, g);
  }), n;
}
function te$3(i, o) {
  var e = k$2(i) ? M$2 : od;
  return e(i, Y$2(o));
}
function $c(i, o) {
  return A$2(te$3(i, o), 1);
}
var qc = 1 / 0;
function Ic(i, o) {
  return A$2(te$3(i, o), qc);
}
function Uc(i, o, e) {
  return e = e === void 0 ? 1 : Z$2(e), A$2(te$3(i, o), e);
}
var Vc = 1 / 0;
function ib(i) {
  var o = i == null ? 0 : i.length;
  return o ? A$2(i, Vc) : [];
}
function ob(i, o) {
  var e = i == null ? 0 : i.length;
  return e ? (o = o === void 0 ? 1 : Z$2(o), A$2(i, o)) : [];
}
var eb = 512;
function nb(i) {
  return Si(i, eb);
}
var ab = yn$1("floor");
var ub = "Expected a function";
var gb = 8;
var db = 32;
var tb = 128;
var sb = 256;
function ed(i) {
  return Xi(function(o) {
    var e = o.length, n = e, a = ti.prototype.thru;
    for (i && o.reverse(); n--; ) {
      var u = o[n];
      if (typeof u != "function") throw new TypeError(ub);
      if (a && !g && xo(u) == "wrapper") var g = new ti([], true);
    }
    for (n = g ? n : e; ++n < e; ) {
      u = o[n];
      var t = xo(u), s = t == "wrapper" ? Ve$1(u) : void 0;
      s && Me$2(s[0]) && s[1] == (tb | gb | db | sb) && !s[4].length && s[9] == 1 ? g = g[xo(s[0])].apply(g, s[3]) : g = u.length == 1 && Me$2(u) ? g[t]() : g.thru(u);
    }
    return function() {
      var h = arguments, r = h[0];
      if (g && h.length == 1 && k$2(r)) return g.plant(r).value();
      for (var l = 0, v = e ? o[l].apply(this, h) : r; ++l < e; ) v = o[l].call(this, v);
      return v;
    };
  });
}
var hb = ed();
var rb = ed(true);
function lb(i, o) {
  return i == null ? i : Zn$1(i, mi(o), ii);
}
function vb(i, o) {
  return i == null ? i : Kg(i, mi(o), ii);
}
function yb(i, o) {
  return i && ji(i, mi(o));
}
function cb(i, o) {
  return i && Xn$1(i, mi(o));
}
function bb(i) {
  for (var o = -1, e = i == null ? 0 : i.length, n = {}; ++o < e; ) {
    var a = i[o];
    pi(n, a[0], a[1]);
  }
  return n;
}
function se$2(i, o) {
  return Ni(o, function(e) {
    return Li(i[e]);
  });
}
function pb(i) {
  return i == null ? [] : se$2(i, F$2(i));
}
function wb(i) {
  return i == null ? [] : se$2(i, ii(i));
}
var jb = Object.prototype;
var mb = jb.hasOwnProperty;
var fb = ue$1(function(i, o, e) {
  mb.call(i, e) ? i[e].push(o) : pi(i, e, [o]);
});
function Hn$1(i, o) {
  return i > o;
}
function he$2(i) {
  return function(o, e) {
    return typeof o == "string" && typeof e == "string" || (o = gi(o), e = gi(e)), i(o, e);
  };
}
var Yb = he$2(Hn$1);
var kb = he$2(function(i, o) {
  return i >= o;
});
var Lb = Object.prototype;
var Zb = Lb.hasOwnProperty;
function Sb(i, o) {
  return i != null && Zb.call(i, o);
}
function Jb(i, o) {
  return i != null && Hg(i, o, Sb);
}
var Cb = Math.max;
var Xb = Math.min;
function Hb(i, o, e) {
  return i >= Xb(o, e) && i < Cb(o, e);
}
function Db(i, o, e) {
  return o = ki(o), e === void 0 ? (e = o, o = 0) : e = ki(e), i = gi(i), Hb(i, o, e);
}
var Tb = "[object String]";
function re$1(i) {
  return typeof i == "string" || !k$2(i) && N$3(i) && $$1(i) == Tb;
}
function Dn$1(i, o) {
  return M$2(o, function(e) {
    return i[e];
  });
}
function ro$1(i) {
  return i == null ? [] : Dn$1(i, F$2(i));
}
var Bb = Math.max;
function Qb(i, o, e, n) {
  i = V$4(i) ? i : ro$1(i), e = e && !n ? Z$2(e) : 0;
  var a = i.length;
  return e < 0 && (e = Bb(a + e, 0)), re$1(i) ? e <= a && i.indexOf(o, e) > -1 : !!a && ao(i, o, e) > -1;
}
var Mb = Math.max;
function Gb(i, o, e) {
  var n = i == null ? 0 : i.length;
  if (!n) return -1;
  var a = e == null ? 0 : Z$2(e);
  return a < 0 && (a = Mb(n + a, 0)), ao(i, o, a);
}
function Nb(i) {
  var o = i == null ? 0 : i.length;
  return o ? hi(i, 0, -1) : [];
}
var xb = Math.min;
function Tn$1(i, o, e) {
  for (var n = e ? Cn$1 : qo, a = i[0].length, u = i.length, g = u, t = Array(u), s = 1 / 0, h = []; g--; ) {
    var r = i[g];
    g && o && (r = M$2(r, ai(o))), s = xb(r.length, s), t[g] = !e && (o || a >= 120 && r.length >= 120) ? new Ai(g && r) : void 0;
  }
  r = i[0];
  var l = -1, v = t[0];
  i: for (; ++l < a && h.length < s; ) {
    var y = r[l], c = o ? o(y) : y;
    if (y = e || y !== 0 ? y : 0, !(v ? ko(v, c) : n(h, c, e))) {
      for (g = u; --g; ) {
        var b = t[g];
        if (!(b ? ko(b, c) : n(i[g], c, e))) continue i;
      }
      v && v.push(c), h.push(y);
    }
  }
  return h;
}
function Bn$1(i) {
  return W$3(i) ? i : [];
}
var Wb = S$2(function(i) {
  var o = M$2(i, Bn$1);
  return o.length && o[0] === i[0] ? Tn$1(o) : [];
});
var Pb = S$2(function(i) {
  var o = ri(i), e = M$2(i, Bn$1);
  return o === ri(e) ? o = void 0 : e.pop(), e.length && e[0] === i[0] ? Tn$1(e, Y$2(o)) : [];
});
var Fb = S$2(function(i) {
  var o = ri(i), e = M$2(i, Bn$1);
  return o = typeof o == "function" ? o : void 0, o && e.pop(), e.length && e[0] === i[0] ? Tn$1(e, void 0, o) : [];
});
function Kb(i, o, e, n) {
  return ji(i, function(a, u, g) {
    o(n, e(a), u, g);
  }), n;
}
function nd(i, o) {
  return function(e, n) {
    return Kb(e, i, o(n), {});
  };
}
var Rb = Object.prototype;
var Ab = Rb.toString;
var _b = nd(function(i, o, e) {
  o != null && typeof o.toString != "function" && (o = Ab.call(o)), i[o] = e;
}, on$1(U$4));
var ad = Object.prototype;
var Ob = ad.hasOwnProperty;
var zb = ad.toString;
var Eb = nd(function(i, o, e) {
  o != null && typeof o.toString != "function" && (o = zb.call(o)), Ob.call(i, o) ? i[o].push(e) : i[o] = [e];
}, Y$2);
function ud(i, o) {
  return o.length < 2 ? i : zi(i, hi(o, 0, -1));
}
function Ho(i, o, e) {
  o = Qi(o, i), i = ud(i, o);
  var n = i == null ? i : i[vi(ri(o))];
  return n == null ? void 0 : ni(n, i, e);
}
var $b = S$2(Ho);
var qb = S$2(function(i, o, e) {
  var n = -1, a = typeof o == "function", u = V$4(i) ? Array(i.length) : [];
  return xi(i, function(g) {
    u[++n] = a ? ni(o, g, e) : Ho(g, o, e);
  }), u;
});
var Ib = "[object ArrayBuffer]";
function Ub(i) {
  return N$3(i) && $$1(i) == Ib;
}
var _a = si && si.isArrayBuffer;
var Vb = _a ? ai(_a) : Ub;
var ip = "[object Boolean]";
function op(i) {
  return i === true || i === false || N$3(i) && $$1(i) == ip;
}
var ep = "[object Date]";
function np(i) {
  return N$3(i) && $$1(i) == ep;
}
var Oa = si && si.isDate;
var ap = Oa ? ai(Oa) : np;
function up(i) {
  return N$3(i) && i.nodeType === 1 && !Jo(i);
}
var gp = "[object Map]";
var dp = "[object Set]";
var tp = Object.prototype;
var sp = tp.hasOwnProperty;
function hp(i) {
  if (i == null) return true;
  if (V$4(i) && (k$2(i) || typeof i == "string" || typeof i.splice == "function" || Ti(i) || to$1(i) || Ki(i))) return !i.length;
  var o = bi(i);
  if (o == gp || o == dp) return !i.size;
  if (So(i)) return !un$1(i).length;
  for (var e in i) if (sp.call(i, e)) return false;
  return true;
}
function rp(i, o) {
  return Co(i, o);
}
function lp(i, o, e) {
  e = typeof e == "function" ? e : void 0;
  var n = e ? e(i, o) : void 0;
  return n === void 0 ? Co(i, o, void 0, e) : !!n;
}
var vp = P$3.isFinite;
function yp(i) {
  return typeof i == "number" && vp(i);
}
function gd(i) {
  return typeof i == "number" && i == Z$2(i);
}
function cp(i, o) {
  return i === o || fn$1(i, o, Yn$1(o));
}
function bp(i, o, e) {
  return e = typeof e == "function" ? e : void 0, fn$1(i, o, Yn$1(o), e);
}
var pp = "[object Number]";
function dd(i) {
  return typeof i == "number" || N$3(i) && $$1(i) == pp;
}
function wp(i) {
  return dd(i) && i != +i;
}
var jp = No ? Li : an$1;
var mp = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.";
function fp(i) {
  if (jp(i)) throw new Error(mp);
  return Yu(i);
}
function Yp(i) {
  return i == null;
}
function kp(i) {
  return i === null;
}
var Lp = "[object RegExp]";
function Zp(i) {
  return N$3(i) && $$1(i) == Lp;
}
var za = si && si.isRegExp;
var Qn$1 = za ? ai(za) : Zp;
var Ea = 9007199254740991;
function Sp(i) {
  return gd(i) && i >= -Ea && i <= Ea;
}
function Jp(i) {
  return i === void 0;
}
var Cp = "[object WeakMap]";
function Xp(i) {
  return N$3(i) && bi(i) == Cp;
}
var Hp = "[object WeakSet]";
function Dp(i) {
  return N$3(i) && $$1(i) == Hp;
}
var Tp = 1;
function Bp(i) {
  return Y$2(typeof i == "function" ? i : di(i, Tp));
}
var Qp = Array.prototype;
var Mp = Qp.join;
function Gp(i, o) {
  return i == null ? "" : Mp.call(i, o);
}
var Np = ho(function(i, o, e) {
  return i + (e ? "-" : "") + o.toLowerCase();
});
var xp = ue$1(function(i, o, e) {
  pi(i, e, o);
});
function Wp(i, o, e) {
  for (var n = e + 1; n--; ) if (i[n] === o) return n;
  return n;
}
var Pp = Math.max;
var Fp = Math.min;
function Kp(i, o, e) {
  var n = i == null ? 0 : i.length;
  if (!n) return -1;
  var a = n;
  return e !== void 0 && (a = Z$2(e), a = a < 0 ? Pp(n + a, 0) : Fp(a, n - 1)), o === o ? Wp(i, o, a) : $o(i, Xu, a, true);
}
var Rp = ho(function(i, o, e) {
  return i + (e ? " " : "") + o.toLowerCase();
});
var Ap = qu("toLowerCase");
function Mn$1(i, o) {
  return i < o;
}
var _p = he$2(Mn$1);
var Op = he$2(function(i, o) {
  return i <= o;
});
function zp(i, o) {
  var e = {};
  return o = Y$2(o), ji(i, function(n, a, u) {
    pi(e, o(n, a, u), n);
  }), e;
}
function Ep(i, o) {
  var e = {};
  return o = Y$2(o), ji(i, function(n, a, u) {
    pi(e, a, o(n, a, u));
  }), e;
}
var $p = 1;
function qp(i) {
  return Xg(di(i, $p));
}
var Ip = 1;
function Up(i, o) {
  return Dg(i, di(o, Ip));
}
function le$2(i, o, e) {
  for (var n = -1, a = i.length; ++n < a; ) {
    var u = i[n], g = o(u);
    if (g != null && (t === void 0 ? g === g && !oi(g) : e(g, t))) var t = g, s = u;
  }
  return s;
}
function Vp(i) {
  return i && i.length ? le$2(i, U$4, Hn$1) : void 0;
}
function iw(i, o) {
  return i && i.length ? le$2(i, Y$2(o), Hn$1) : void 0;
}
function Gn$1(i, o) {
  for (var e, n = -1, a = i.length; ++n < a; ) {
    var u = o(i[n]);
    u !== void 0 && (e = e === void 0 ? u : e + u);
  }
  return e;
}
var ow = NaN;
function td(i, o) {
  var e = i == null ? 0 : i.length;
  return e ? Gn$1(i, o) / e : ow;
}
function ew(i) {
  return td(i, U$4);
}
function nw(i, o) {
  return td(i, Y$2(o));
}
var aw = go(function(i, o, e) {
  ge$2(i, o, e);
});
var uw = S$2(function(i, o) {
  return function(e) {
    return Ho(e, i, o);
  };
});
var gw = S$2(function(i, o) {
  return function(e) {
    return Ho(i, e, o);
  };
});
function dw(i) {
  return i && i.length ? le$2(i, U$4, Mn$1) : void 0;
}
function tw(i, o) {
  return i && i.length ? le$2(i, Y$2(o), Mn$1) : void 0;
}
function sw(i, o, e) {
  var n = F$2(o), a = se$2(o, n), u = !(G$2(e) && "chain" in e) || !!e.chain, g = Li(i);
  return ui(a, function(t) {
    var s = o[t];
    i[t] = s, g && (i.prototype[t] = function() {
      var h = this.__chain__;
      if (u || h) {
        var r = i(this.__wrapped__), l = r.__actions__ = I$2(this.__actions__);
        return l.push({ func: s, args: arguments, thisArg: i }), r.__chain__ = h, r;
      }
      return s.apply(i, Mi([this.value()], arguments));
    });
  }), i;
}
var hw = zo(function(i, o) {
  return i * o;
}, 1);
var rw = "Expected a function";
function ve$1(i) {
  if (typeof i != "function") throw new TypeError(rw);
  return function() {
    var o = arguments;
    switch (o.length) {
      case 0:
        return !i.call(this);
      case 1:
        return !i.call(this, o[0]);
      case 2:
        return !i.call(this, o[0], o[1]);
      case 3:
        return !i.call(this, o[0], o[1], o[2]);
    }
    return !i.apply(this, o);
  };
}
function lw(i) {
  for (var o, e = []; !(o = i.next()).done; ) e.push(o.value);
  return e;
}
var vw = "[object Map]";
var yw = "[object Set]";
var ke$2 = _$2 ? _$2.iterator : void 0;
function sd(i) {
  if (!i) return [];
  if (V$4(i)) return re$1(i) ? yi(i) : I$2(i);
  if (ke$2 && i[ke$2]) return lw(i[ke$2]());
  var o = bi(i), e = o == vw ? mn$1 : o == yw ? ae$2 : ro$1;
  return e(i);
}
function cw() {
  this.__values__ === void 0 && (this.__values__ = sd(this.value()));
  var i = this.__index__ >= this.__values__.length, o = i ? void 0 : this.__values__[this.__index__++];
  return { done: i, value: o };
}
function hd(i, o) {
  var e = i.length;
  if (e) return o += o < 0 ? e : 0, Zi(o, e) ? i[o] : void 0;
}
function bw(i, o) {
  return i && i.length ? hd(i, Z$2(o)) : void 0;
}
function pw(i) {
  return i = Z$2(i), S$2(function(o) {
    return hd(o, i);
  });
}
var ww = Object.prototype;
var jw = ww.hasOwnProperty;
function Nn$1(i, o) {
  o = Qi(o, i);
  var e = -1, n = o.length;
  if (!n) return true;
  for (; ++e < n; ) {
    var a = vi(o[e]);
    if (a === "__proto__" && !jw.call(i, "__proto__") || (a === "constructor" || a === "prototype") && e < n - 1) return false;
  }
  var u = ud(i, o);
  return u == null || delete u[vi(ri(o))];
}
function mw(i) {
  return Jo(i) ? void 0 : i;
}
var fw = 1;
var Yw = 2;
var kw = 4;
var Lw = Xi(function(i, o) {
  var e = {};
  if (i == null) return e;
  var n = false;
  o = M$2(o, function(u) {
    return u = Qi(u, i), n || (n = u.length > 1), u;
  }), wi(i, pn$1(i), e), n && (e = di(e, fw | Yw | kw, mw));
  for (var a = o.length; a--; ) Nn$1(e, o[a]);
  return e;
});
function Do(i, o, e, n) {
  if (!G$2(i)) return i;
  o = Qi(o, i);
  for (var a = -1, u = o.length, g = u - 1, t = i; t != null && ++a < u; ) {
    var s = vi(o[a]), h = e;
    if (s === "__proto__" || s === "constructor" || s === "prototype") return i;
    if (a != g) {
      var r = t[s];
      h = n ? n(r, s, t) : void 0, h === void 0 && (h = G$2(r) ? r : Zi(o[a + 1]) ? [] : {});
    }
    Zo(t, s, h), t = t[s];
  }
  return i;
}
function rd(i, o, e) {
  for (var n = -1, a = o.length, u = {}; ++n < a; ) {
    var g = o[n], t = zi(i, g);
    e(t, g) && Do(u, Qi(g, i), t);
  }
  return u;
}
function ld(i, o) {
  if (i == null) return {};
  var e = M$2(pn$1(i), function(n) {
    return [n];
  });
  return o = Y$2(o), rd(i, e, function(n, a) {
    return o(n, a[0]);
  });
}
function Zw(i, o) {
  return ld(i, ve$1(Y$2(o)));
}
function Sw(i) {
  return Ru(2, i);
}
function Jw(i, o) {
  var e = i.length;
  for (i.sort(o); e--; ) i[e] = i[e].value;
  return i;
}
function vd(i, o) {
  if (i !== o) {
    var e = i !== void 0, n = i === null, a = i === i, u = oi(i), g = o !== void 0, t = o === null, s = o === o, h = oi(o);
    if (!t && !h && !u && i > o || u && g && s && !t && !h || n && g && s || !e && s || !a) return 1;
    if (!n && !u && !h && i < o || h && e && a && !n && !u || t && e && a || !g && a || !s) return -1;
  }
  return 0;
}
function Cw(i, o, e) {
  for (var n = -1, a = i.criteria, u = o.criteria, g = a.length, t = e.length; ++n < g; ) {
    var s = vd(a[n], u[n]);
    if (s) {
      if (n >= t) return s;
      var h = e[n];
      return s * (h == "desc" ? -1 : 1);
    }
  }
  return i.index - o.index;
}
function yd(i, o, e) {
  o.length ? o = M$2(o, function(u) {
    return k$2(u) ? function(g) {
      return zi(g, u.length === 1 ? u[0] : u);
    } : u;
  }) : o = [U$4];
  var n = -1;
  o = M$2(o, ai(Y$2));
  var a = od(i, function(u, g, t) {
    var s = M$2(o, function(h) {
      return h(u);
    });
    return { criteria: s, index: ++n, value: u };
  });
  return Jw(a, function(u, g) {
    return Cw(u, g, e);
  });
}
function Xw(i, o, e, n) {
  return i == null ? [] : (k$2(o) || (o = o == null ? [] : [o]), e = n ? void 0 : e, k$2(e) || (e = e == null ? [] : [e]), yd(i, o, e));
}
function xn$1(i) {
  return Xi(function(o) {
    return o = M$2(o, ai(Y$2)), S$2(function(e) {
      var n = this;
      return i(o, function(a) {
        return ni(a, n, e);
      });
    });
  });
}
var Hw = xn$1(M$2);
var Dw = S$2;
var Tw = Math.min;
var Bw = Dw(function(i, o) {
  o = o.length == 1 && k$2(o[0]) ? M$2(o[0], ai(Y$2)) : M$2(A$2(o, 1), ai(Y$2));
  var e = o.length;
  return S$2(function(n) {
    for (var a = -1, u = Tw(n.length, e); ++a < u; ) n[a] = o[a].call(this, n[a]);
    return ni(i, this, n);
  });
});
var Qw = xn$1(Eg);
var Mw = xn$1(jn$1);
var Gw = 9007199254740991;
var Nw = Math.floor;
function Ae$1(i, o) {
  var e = "";
  if (!i || o < 1 || o > Gw) return e;
  do
    o % 2 && (e += i), o = Nw(o / 2), o && (i += i);
  while (o);
  return e;
}
var xw = Ln$1("length");
var cd = "\\ud800-\\udfff";
var Ww = "\\u0300-\\u036f";
var Pw = "\\ufe20-\\ufe2f";
var Fw = "\\u20d0-\\u20ff";
var Kw = Ww + Pw + Fw;
var Rw = "\\ufe0e\\ufe0f";
var Aw = "[" + cd + "]";
var _e$1 = "[" + Kw + "]";
var Oe$2 = "\\ud83c[\\udffb-\\udfff]";
var _w = "(?:" + _e$1 + "|" + Oe$2 + ")";
var bd = "[^" + cd + "]";
var pd = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var wd = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var Ow = "\\u200d";
var jd = _w + "?";
var md = "[" + Rw + "]?";
var zw = "(?:" + Ow + "(?:" + [bd, pd, wd].join("|") + ")" + md + jd + ")*";
var Ew = md + jd + zw;
var $w = "(?:" + [bd + _e$1 + "?", _e$1, pd, wd, Aw].join("|") + ")";
var $a = RegExp(Oe$2 + "(?=" + Oe$2 + ")|" + $w + Ew, "g");
function qw(i) {
  for (var o = $a.lastIndex = 0; $a.test(i); ) ++o;
  return o;
}
function lo(i) {
  return so$1(i) ? qw(i) : xw(i);
}
var Iw = Math.ceil;
function _o(i, o) {
  o = o === void 0 ? " " : ei(o);
  var e = o.length;
  if (e < 2) return e ? Ae$1(o, i) : o;
  var n = Ae$1(o, Iw(i / lo(o)));
  return so$1(o) ? Gi(yi(n), 0, i).join("") : n.slice(0, i);
}
var Uw = Math.ceil;
var Vw = Math.floor;
function ij(i, o, e) {
  i = X$2(i), o = Z$2(o);
  var n = o ? lo(i) : 0;
  if (!o || n >= o) return i;
  var a = (o - n) / 2;
  return _o(Vw(a), e) + i + _o(Uw(a), e);
}
function oj(i, o, e) {
  i = X$2(i), o = Z$2(o);
  var n = o ? lo(i) : 0;
  return o && n < o ? i + _o(o - n, e) : i;
}
function ej(i, o, e) {
  i = X$2(i), o = Z$2(o);
  var n = o ? lo(i) : 0;
  return o && n < o ? _o(o - n, e) + i : i;
}
var nj = /^\s+/;
var aj = P$3.parseInt;
function uj(i, o, e) {
  return e || o == null ? o = 0 : o && (o = +o), aj(X$2(i).replace(nj, ""), o || 0);
}
var gj = 32;
var ye$1 = S$2(function(i, o) {
  var e = Di(o, uo(ye$1));
  return Si(i, gj, void 0, o, e);
});
ye$1.placeholder = {};
var dj = 64;
var Wn$1 = S$2(function(i, o) {
  var e = Di(o, uo(Wn$1));
  return Si(i, dj, void 0, o, e);
});
Wn$1.placeholder = {};
var tj = ue$1(function(i, o, e) {
  i[e ? 0 : 1].push(o);
}, function() {
  return [[], []];
});
function sj(i, o) {
  return rd(i, o, function(e, n) {
    return kn$1(i, n);
  });
}
var hj = Xi(function(i, o) {
  return i == null ? {} : sj(i, o);
});
function rj(i) {
  for (var o, e = this; e instanceof Eo; ) {
    var n = Su(e);
    n.__index__ = 0, n.__values__ = void 0, o ? a.__wrapped__ = n : o = n;
    var a = n;
    e = e.__wrapped__;
  }
  return a.__wrapped__ = i, o;
}
function lj(i) {
  return function(o) {
    return i == null ? void 0 : zi(i, o);
  };
}
function vj(i, o, e, n) {
  for (var a = e - 1, u = i.length; ++a < u; ) if (n(i[a], o)) return a;
  return -1;
}
var yj = Array.prototype;
var qa = yj.splice;
function Pn$1(i, o, e, n) {
  var a = n ? vj : ao, u = -1, g = o.length, t = i;
  for (i === o && (o = I$2(o)), e && (t = M$2(i, ai(e))); ++u < g; ) for (var s = 0, h = o[u], r = e ? e(h) : h; (s = a(t, r, s, n)) > -1; ) t !== i && qa.call(t, s, 1), qa.call(i, s, 1);
  return i;
}
function fd(i, o) {
  return i && i.length && o && o.length ? Pn$1(i, o) : i;
}
var cj = S$2(fd);
function bj(i, o, e) {
  return i && i.length && o && o.length ? Pn$1(i, o, Y$2(e)) : i;
}
function pj(i, o, e) {
  return i && i.length && o && o.length ? Pn$1(i, o, void 0, e) : i;
}
var wj = Array.prototype;
var jj = wj.splice;
function Yd(i, o) {
  for (var e = i ? o.length : 0, n = e - 1; e--; ) {
    var a = o[e];
    if (e == n || a !== u) {
      var u = a;
      Zi(a) ? jj.call(i, a, 1) : Nn$1(i, a);
    }
  }
  return i;
}
var mj = Xi(function(i, o) {
  var e = i == null ? 0 : i.length, n = tn$1(i, o);
  return Yd(i, M$2(o, function(a) {
    return Zi(a, e) ? +a : a;
  }).sort(vd)), n;
});
var fj = Math.floor;
var Yj = Math.random;
function Fn$1(i, o) {
  return i + fj(Yj() * (o - i + 1));
}
var kj = parseFloat;
var Lj = Math.min;
var Zj = Math.random;
function Sj(i, o, e) {
  if (e && typeof e != "boolean" && E$2(i, o, e) && (o = e = void 0), e === void 0 && (typeof o == "boolean" ? (e = o, o = void 0) : typeof i == "boolean" && (e = i, i = void 0)), i === void 0 && o === void 0 ? (i = 0, o = 1) : (i = ki(i), o === void 0 ? (o = i, i = 0) : o = ki(o)), i > o) {
    var n = i;
    i = o, o = n;
  }
  if (e || i % 1 || o % 1) {
    var a = Zj();
    return Lj(i + a * (o - i + kj("1e-" + ((a + "").length - 1))), o);
  }
  return Fn$1(i, o);
}
var Jj = Math.ceil;
var Cj = Math.max;
function Xj(i, o, e, n) {
  for (var a = -1, u = Cj(Jj((o - i) / (e || 1)), 0), g = Array(u); u--; ) g[n ? u : ++a] = i, i += e;
  return g;
}
function kd(i) {
  return function(o, e, n) {
    return n && typeof n != "number" && E$2(o, e, n) && (e = n = void 0), o = ki(o), e === void 0 ? (e = o, o = 0) : e = ki(e), n = n === void 0 ? o < e ? 1 : -1 : ki(n), Xj(o, e, n, i);
  };
}
var Hj = kd();
var Dj = kd(true);
var Tj = 256;
var Bj = Xi(function(i, o) {
  return Si(i, Tj, void 0, void 0, void 0, o);
});
function Ld(i, o, e, n, a) {
  return a(i, function(u, g, t) {
    e = n ? (n = false, u) : o(e, u, g, t);
  }), e;
}
function Qj(i, o, e) {
  var n = k$2(i) ? ln$1 : Ld, a = arguments.length < 3;
  return n(i, Y$2(o), e, a, xi);
}
function Mj(i, o, e, n) {
  var a = i == null ? 0 : i.length;
  for (n && a && (e = i[--a]); a--; ) e = o(e, i[a], a, i);
  return e;
}
function Gj(i, o, e) {
  var n = k$2(i) ? Mj : Ld, a = arguments.length < 3;
  return n(i, Y$2(o), e, a, Rg);
}
function Nj(i, o) {
  var e = k$2(i) ? Ni : qg;
  return e(i, ve$1(Y$2(o)));
}
function xj(i, o) {
  var e = [];
  if (!(i && i.length)) return e;
  var n = -1, a = [], u = i.length;
  for (o = Y$2(o); ++n < u; ) {
    var g = i[n];
    o(g, n, i) && (e.push(g), a.push(n));
  }
  return Yd(i, a), e;
}
function Wj(i, o, e) {
  return (e ? E$2(i, o, e) : o === void 0) ? o = 1 : o = Z$2(o), Ae$1(X$2(i), o);
}
function Pj() {
  var i = arguments, o = X$2(i[0]);
  return i.length < 3 ? o : o.replace(i[1], i[2]);
}
var Fj = "Expected a function";
function Kj(i, o) {
  if (typeof i != "function") throw new TypeError(Fj);
  return o = o === void 0 ? o : Z$2(o), S$2(i, o);
}
function Rj(i, o, e) {
  o = Qi(o, i);
  var n = -1, a = o.length;
  for (a || (a = 1, i = void 0); ++n < a; ) {
    var u = i?.[vi(o[n])];
    u === void 0 && (n = a, u = e), i = Li(u) ? u.call(i) : u;
  }
  return i;
}
var Aj = Array.prototype;
var _j = Aj.reverse;
function ze$1(i) {
  return i == null ? i : _j.call(i);
}
var Oj = yn$1("round");
function Zd(i) {
  var o = i.length;
  return o ? i[Fn$1(0, o - 1)] : void 0;
}
function zj(i) {
  return Zd(ro$1(i));
}
function Ej(i) {
  var o = k$2(i) ? Zd : zj;
  return o(i);
}
function ce$2(i, o) {
  var e = -1, n = i.length, a = n - 1;
  for (o = o === void 0 ? n : o; ++e < o; ) {
    var u = Fn$1(e, a), g = i[u];
    i[u] = i[e], i[e] = g;
  }
  return i.length = o, i;
}
function $j(i, o) {
  return ce$2(I$2(i), Ei(o, 0, i.length));
}
function qj(i, o) {
  var e = ro$1(i);
  return ce$2(e, Ei(o, 0, e.length));
}
function Ij(i, o, e) {
  (e ? E$2(i, o, e) : o === void 0) ? o = 1 : o = Z$2(o);
  var n = k$2(i) ? $j : qj;
  return n(i, o);
}
function Uj(i, o, e) {
  return i == null ? i : Do(i, o, e);
}
function Vj(i, o, e, n) {
  return n = typeof n == "function" ? n : void 0, i == null ? i : Do(i, o, e, n);
}
function im(i) {
  return ce$2(I$2(i));
}
function om(i) {
  return ce$2(ro$1(i));
}
function em(i) {
  var o = k$2(i) ? im : om;
  return o(i);
}
var nm = "[object Map]";
var am = "[object Set]";
function um(i) {
  if (i == null) return 0;
  if (V$4(i)) return re$1(i) ? lo(i) : i.length;
  var o = bi(i);
  return o == nm || o == am ? i.size : un$1(i).length;
}
function gm(i, o, e) {
  var n = i == null ? 0 : i.length;
  return n ? (e && typeof e != "number" && E$2(i, o, e) ? (o = 0, e = n) : (o = o == null ? 0 : Z$2(o), e = e === void 0 ? n : Z$2(e)), hi(i, o, e)) : [];
}
var dm = ho(function(i, o, e) {
  return i + (e ? "_" : "") + o.toLowerCase();
});
function tm(i, o) {
  var e;
  return xi(i, function(n, a, u) {
    return e = o(n, a, u), !e;
  }), !!e;
}
function sm(i, o, e) {
  var n = k$2(i) ? jn$1 : tm;
  return e && E$2(i, o, e) && (o = void 0), n(i, Y$2(o));
}
var hm = S$2(function(i, o) {
  if (i == null) return [];
  var e = o.length;
  return e > 1 && E$2(i, o[0], o[1]) ? o = [] : e > 2 && E$2(o[0], o[1], o[2]) && (o = [o[0]]), yd(i, A$2(o, 1), []);
});
var rm = 4294967295;
var lm = rm - 1;
var vm = Math.floor;
var ym = Math.min;
function Kn$1(i, o, e, n) {
  var a = 0, u = i == null ? 0 : i.length;
  if (u === 0) return 0;
  o = e(o);
  for (var g = o !== o, t = o === null, s = oi(o), h = o === void 0; a < u; ) {
    var r = vm((a + u) / 2), l = e(i[r]), v = l !== void 0, y = l === null, c = l === l, b = oi(l);
    if (g) var p = n || c;
    else h ? p = c && (n || v) : t ? p = c && v && (n || !y) : s ? p = c && v && !y && (n || !b) : y || b ? p = false : p = n ? l <= o : l < o;
    p ? a = r + 1 : u = r;
  }
  return ym(u, lm);
}
var cm = 4294967295;
var bm = cm >>> 1;
function be$2(i, o, e) {
  var n = 0, a = i == null ? n : i.length;
  if (typeof o == "number" && o === o && a <= bm) {
    for (; n < a; ) {
      var u = n + a >>> 1, g = i[u];
      g !== null && !oi(g) && (e ? g <= o : g < o) ? n = u + 1 : a = u;
    }
    return a;
  }
  return Kn$1(i, o, U$4, e);
}
function pm(i, o) {
  return be$2(i, o);
}
function wm(i, o, e) {
  return Kn$1(i, o, Y$2(e));
}
function jm(i, o) {
  var e = i == null ? 0 : i.length;
  if (e) {
    var n = be$2(i, o);
    if (n < e && ci(i[n], o)) return n;
  }
  return -1;
}
function mm(i, o) {
  return be$2(i, o, true);
}
function fm(i, o, e) {
  return Kn$1(i, o, Y$2(e), true);
}
function Ym(i, o) {
  var e = i == null ? 0 : i.length;
  if (e) {
    var n = be$2(i, o, true) - 1;
    if (ci(i[n], o)) return n;
  }
  return -1;
}
function Sd(i, o) {
  for (var e = -1, n = i.length, a = 0, u = []; ++e < n; ) {
    var g = i[e], t = o ? o(g) : g;
    if (!e || !ci(t, s)) {
      var s = t;
      u[a++] = g === 0 ? 0 : g;
    }
  }
  return u;
}
function km(i) {
  return i && i.length ? Sd(i) : [];
}
function Lm(i, o) {
  return i && i.length ? Sd(i, Y$2(o)) : [];
}
var Zm = 4294967295;
function Sm(i, o, e) {
  return e && typeof e != "number" && E$2(i, o, e) && (o = e = void 0), e = e === void 0 ? Zm : e >>> 0, e ? (i = X$2(i), i && (typeof o == "string" || o != null && !Qn$1(o)) && (o = ei(o), !o && so$1(i)) ? Gi(yi(i), 0, e) : i.split(o, e)) : [];
}
var Jm = "Expected a function";
var Cm = Math.max;
function Xm(i, o) {
  if (typeof i != "function") throw new TypeError(Jm);
  return o = o == null ? 0 : Cm(Z$2(o), 0), S$2(function(e) {
    var n = e[o], a = Gi(e, 0, o);
    return n && Mi(a, n), ni(i, this, a);
  });
}
var Hm = ho(function(i, o, e) {
  return i + (e ? " " : "") + rn$1(o);
});
function Dm(i, o, e) {
  return i = X$2(i), e = e == null ? 0 : Ei(Z$2(e), 0, i.length), o = ei(o), i.slice(e, e + o.length) == o;
}
function Tm() {
  return {};
}
function Bm() {
  return "";
}
function Qm() {
  return true;
}
var Mm = zo(function(i, o) {
  return i - o;
}, 0);
function Gm(i) {
  return i && i.length ? Gn$1(i, U$4) : 0;
}
function Nm(i, o) {
  return i && i.length ? Gn$1(i, Y$2(o)) : 0;
}
function xm(i) {
  var o = i == null ? 0 : i.length;
  return o ? hi(i, 1, o) : [];
}
function Wm(i, o, e) {
  return i && i.length ? (o = e || o === void 0 ? 1 : Z$2(o), hi(i, 0, o < 0 ? 0 : o)) : [];
}
function Pm(i, o, e) {
  var n = i == null ? 0 : i.length;
  return n ? (o = e || o === void 0 ? 1 : Z$2(o), o = n - o, hi(i, o < 0 ? 0 : o, n)) : [];
}
function Fm(i, o) {
  return i && i.length ? de$2(i, Y$2(o), false, true) : [];
}
function Km(i, o) {
  return i && i.length ? de$2(i, Y$2(o)) : [];
}
function Rm(i, o) {
  return o(i), i;
}
var Jd = Object.prototype;
var Am = Jd.hasOwnProperty;
function Ia(i, o, e, n) {
  return i === void 0 || ci(i, Jd[e]) && !Am.call(n, e) ? o : i;
}
var _m = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" };
function Om(i) {
  return "\\" + _m[i];
}
var Cd = /<%=([\s\S]+?)%>/g;
var zm = /<%-([\s\S]+?)%>/g;
var Em = /<%([\s\S]+?)%>/g;
var Ee$1 = { escape: zm, evaluate: Em, interpolate: Cd, variable: "", imports: { _: { escape: Og } } };
var $m = "Invalid `variable` option passed into `_.template`";
var qm = "Invalid `imports` option passed into `_.template`";
var Im = /\b__p \+= '';/g;
var Um = /\b(__p \+=) '' \+/g;
var Vm = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
var Ua = /[()=,{}\[\]\/\s]/;
var of = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
var Go = /($^)/;
var ef = /['\n\r\u2028\u2029\\]/g;
var nf = Object.prototype;
var Va = nf.hasOwnProperty;
function af(i, o, e) {
  var n = Ee$1.imports._.templateSettings || Ee$1;
  e && E$2(i, o, e) && (o = void 0), i = X$2(i), o = Ge$2({}, o, n, Ia);
  var a = Ge$2({}, o.imports, n.imports, Ia), u = F$2(a), g = Dn$1(a, u);
  ui(u, function(p) {
    if (Ua.test(p)) throw new Error(qm);
  });
  var t, s, h = 0, r = o.interpolate || Go, l = "__p += '", v = RegExp((o.escape || Go).source + "|" + r.source + "|" + (r === Cd ? of : Go).source + "|" + (o.evaluate || Go).source + "|$", "g"), y = Va.call(o, "sourceURL") ? "//# sourceURL=" + (o.sourceURL + "").replace(/\s/g, " ") + `
` : "";
  i.replace(v, function(p, j, L, K, R, O) {
    return L || (L = K), l += i.slice(h, O).replace(ef, Om), j && (t = true, l += `' +
__e(` + j + `) +
'`), R && (s = true, l += `';
` + R + `;
__p += '`), L && (l += `' +
((__t = (` + L + `)) == null ? '' : __t) +
'`), h = O + p.length, p;
  }), l += `';
`;
  var c = Va.call(o, "variable") && o.variable;
  if (!c) l = `with (obj) {
` + l + `
}
`;
  else if (Ua.test(c)) throw new Error($m);
  l = (s ? l.replace(Im, "") : l).replace(Um, "$1").replace(Vm, "$1;"), l = "function(" + (c || "obj") + `) {
` + (c ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (t ? ", __e = _.escape" : "") + (s ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + l + `return __p
}`;
  var b = Ku(function() {
    return Function(u, y + "return " + l).apply(void 0, g);
  });
  if (b.source = l, sn$1(b)) throw b;
  return b;
}
var uf = "Expected a function";
function gf(i, o, e) {
  var n = true, a = true;
  if (typeof i != "function") throw new TypeError(uf);
  return G$2(e) && (n = "leading" in e ? !!e.leading : n, a = "trailing" in e ? !!e.trailing : a), Gg(i, o, { leading: n, maxWait: o, trailing: a });
}
function pe$2(i, o) {
  return o(i);
}
var df = 9007199254740991;
var Le$2 = 4294967295;
var tf = Math.min;
function sf(i, o) {
  if (i = Z$2(i), i < 1 || i > df) return [];
  var e = Le$2, n = tf(i, Le$2);
  o = mi(o), i -= Le$2;
  for (var a = nn$1(n, o); ++e < i; ) o(e);
  return a;
}
function hf() {
  return this;
}
function Xd(i, o) {
  var e = i;
  return e instanceof J$3 && (e = e.value()), ln$1(o, function(n, a) {
    return a.func.apply(a.thisArg, Mi([n], a.args));
  }, e);
}
function rf() {
  return Xd(this.__wrapped__, this.__actions__);
}
function lf(i) {
  return X$2(i).toLowerCase();
}
function vf(i) {
  return k$2(i) ? M$2(i, vi) : oi(i) ? [i] : I$2(Wu(X$2(i)));
}
var iu = 9007199254740991;
function yf(i) {
  return i ? Ei(Z$2(i), -iu, iu) : i === 0 ? i : 0;
}
function cf(i) {
  return X$2(i).toUpperCase();
}
function bf(i, o, e) {
  var n = k$2(i), a = n || Ti(i) || to$1(i);
  if (o = Y$2(o), e == null) {
    var u = i && i.constructor;
    a ? e = n ? new u() : [] : G$2(i) ? e = Li(u) ? no$1(ee$2(i)) : {} : e = {};
  }
  return (a ? ui : ji)(i, function(g, t, s) {
    return o(e, g, t, s);
  }), e;
}
function Hd(i, o) {
  for (var e = i.length; e-- && ao(o, i[e], 0) > -1; ) ;
  return e;
}
function Dd(i, o) {
  for (var e = -1, n = i.length; ++e < n && ao(o, i[e], 0) > -1; ) ;
  return e;
}
function pf(i, o, e) {
  if (i = X$2(i), i && (e || o === void 0)) return fu(i);
  if (!i || !(o = ei(o))) return i;
  var n = yi(i), a = yi(o), u = Dd(n, a), g = Hd(n, a) + 1;
  return Gi(n, u, g).join("");
}
function wf(i, o, e) {
  if (i = X$2(i), i && (e || o === void 0)) return i.slice(0, mu(i) + 1);
  if (!i || !(o = ei(o))) return i;
  var n = yi(i), a = Hd(n, yi(o)) + 1;
  return Gi(n, 0, a).join("");
}
var jf = /^\s+/;
function mf(i, o, e) {
  if (i = X$2(i), i && (e || o === void 0)) return i.replace(jf, "");
  if (!i || !(o = ei(o))) return i;
  var n = yi(i), a = Dd(n, yi(o));
  return Gi(n, a).join("");
}
var ff = 30;
var Yf = "...";
var kf = /\w*$/;
function Lf(i, o) {
  var e = ff, n = Yf;
  if (G$2(o)) {
    var a = "separator" in o ? o.separator : a;
    e = "length" in o ? Z$2(o.length) : e, n = "omission" in o ? ei(o.omission) : n;
  }
  i = X$2(i);
  var u = i.length;
  if (so$1(i)) {
    var g = yi(i);
    u = g.length;
  }
  if (e >= u) return i;
  var t = e - lo(n);
  if (t < 1) return n;
  var s = g ? Gi(g, 0, t).join("") : i.slice(0, t);
  if (a === void 0) return s + n;
  if (g && (t += s.length - t), Qn$1(a)) {
    if (i.slice(t).search(a)) {
      var h, r = s;
      for (a.global || (a = RegExp(a.source, X$2(kf.exec(a)) + "g")), a.lastIndex = 0; h = a.exec(r); ) var l = h.index;
      s = s.slice(0, l === void 0 ? t : l);
    }
  } else if (i.indexOf(ei(a), t) != t) {
    var v = s.lastIndexOf(a);
    v > -1 && (s = s.slice(0, v));
  }
  return s + n;
}
function Zf(i) {
  return Tu(i, 1);
}
var Sf = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" };
var Jf = vn$1(Sf);
var Td = /&(?:amp|lt|gt|quot|#39);/g;
var Cf = RegExp(Td.source);
function Xf(i) {
  return i = X$2(i), i && Cf.test(i) ? i.replace(Td, Jf) : i;
}
var Hf = 1 / 0;
var Df = Vi && 1 / ae$2(new Vi([, -0]))[1] == Hf ? function(i) {
  return new Vi(i);
} : Ue$2;
var Tf = 200;
function Bi(i, o, e) {
  var n = -1, a = qo, u = i.length, g = true, t = [], s = t;
  if (e) g = false, a = Cn$1;
  else if (u >= Tf) {
    var h = o ? null : Df(i);
    if (h) return ae$2(h);
    g = false, a = ko, s = new Ai();
  } else s = o ? [] : t;
  i: for (; ++n < u; ) {
    var r = i[n], l = o ? o(r) : r;
    if (r = e || r !== 0 ? r : 0, g && l === l) {
      for (var v = s.length; v--; ) if (s[v] === l) continue i;
      o && s.push(l), t.push(r);
    } else a(s, l, e) || (s !== t && s.push(l), t.push(r));
  }
  return t;
}
var Bf = S$2(function(i) {
  return Bi(A$2(i, 1, W$3, true));
});
var Qf = S$2(function(i) {
  var o = ri(i);
  return W$3(o) && (o = void 0), Bi(A$2(i, 1, W$3, true), Y$2(o));
});
var Mf = S$2(function(i) {
  var o = ri(i);
  return o = typeof o == "function" ? o : void 0, Bi(A$2(i, 1, W$3, true), void 0, o);
});
function Gf(i) {
  return i && i.length ? Bi(i) : [];
}
function Nf(i, o) {
  return i && i.length ? Bi(i, Y$2(o)) : [];
}
function xf(i, o) {
  return o = typeof o == "function" ? o : void 0, i && i.length ? Bi(i, void 0, o) : [];
}
var Wf = 0;
function Pf(i) {
  var o = ++Wf;
  return X$2(i) + o;
}
function Ff(i, o) {
  return i == null ? true : Nn$1(i, o);
}
var Kf = Math.max;
function Rn$1(i) {
  if (!(i && i.length)) return [];
  var o = 0;
  return i = Ni(i, function(e) {
    if (W$3(e)) return o = Kf(e.length, o), true;
  }), nn$1(o, function(e) {
    return M$2(i, Ln$1(e));
  });
}
function Bd(i, o) {
  if (!(i && i.length)) return [];
  var e = Rn$1(i);
  return o == null ? e : M$2(e, function(n) {
    return ni(o, void 0, n);
  });
}
function Qd(i, o, e, n) {
  return Do(i, o, e(zi(i, o)), n);
}
function Rf(i, o, e) {
  return i == null ? i : Qd(i, o, mi(e));
}
function Af(i, o, e, n) {
  return n = typeof n == "function" ? n : void 0, i == null ? i : Qd(i, o, mi(e), n);
}
var _f = ho(function(i, o, e) {
  return i + (e ? " " : "") + o.toUpperCase();
});
function Of(i) {
  return i == null ? [] : Dn$1(i, ii(i));
}
var zf = S$2(function(i, o) {
  return W$3(i) ? Xo(i, o) : [];
});
function Ef(i, o) {
  return ye$1(mi(o), i);
}
var $f = Xi(function(i) {
  var o = i.length, e = o ? i[0] : 0, n = this.__wrapped__, a = function(u) {
    return tn$1(u, i);
  };
  return o > 1 || this.__actions__.length || !(n instanceof J$3) || !Zi(e) ? this.thru(a) : (n = n.slice(e, +e + (o ? 1 : 0)), n.__actions__.push({ func: pe$2, args: [a], thisArg: void 0 }), new ti(n, this.__chain__).thru(function(u) {
    return o && !u.length && u.push(void 0), u;
  }));
});
function qf() {
  return vg(this);
}
function If() {
  var i = this.__wrapped__;
  if (i instanceof J$3) {
    var o = i;
    return this.__actions__.length && (o = new J$3(this)), o = o.reverse(), o.__actions__.push({ func: pe$2, args: [ze$1], thisArg: void 0 }), new ti(o, this.__chain__);
  }
  return this.thru(ze$1);
}
function An$1(i, o, e) {
  var n = i.length;
  if (n < 2) return n ? Bi(i[0]) : [];
  for (var a = -1, u = Array(n); ++a < n; ) for (var g = i[a], t = -1; ++t < n; ) t != a && (u[a] = Xo(u[a] || g, i[t], o, e));
  return Bi(A$2(u, 1), o, e);
}
var Uf = S$2(function(i) {
  return An$1(Ni(i, W$3));
});
var Vf = S$2(function(i) {
  var o = ri(i);
  return W$3(o) && (o = void 0), An$1(Ni(i, W$3), Y$2(o));
});
var iY = S$2(function(i) {
  var o = ri(i);
  return o = typeof o == "function" ? o : void 0, An$1(Ni(i, W$3), void 0, o);
});
var oY = S$2(Rn$1);
function Md(i, o, e) {
  for (var n = -1, a = i.length, u = o.length, g = {}; ++n < a; ) {
    var t = n < u ? o[n] : void 0;
    e(g, i[n], t);
  }
  return g;
}
function eY(i, o) {
  return Md(i || [], o || [], Zo);
}
function nY(i, o) {
  return Md(i || [], o || [], Do);
}
var aY = S$2(function(i) {
  var o = i.length, e = o > 1 ? i[o - 1] : void 0;
  return e = typeof e == "function" ? (i.pop(), e) : void 0, Bd(i, e);
});
const w$1 = { chunk: Zv, compact: gy, concat: dy, difference: lc, differenceBy: vc, differenceWith: yc, drop: bc, dropRight: pc, dropRightWhile: wc, dropWhile: jc, fill: Wc, findIndex: Ug, findLastIndex: id, flatten: Pu, flattenDeep: ib, flattenDepth: ob, fromPairs: bb, head: Ec, indexOf: Gb, initial: Nb, intersection: Wb, intersectionBy: Pb, intersectionWith: Fb, join: Gp, lastIndexOf: Kp, nth: bw, pull: cj, pullAll: fd, pullAllBy: bj, pullAllWith: pj, pullAt: mj, remove: xj, reverse: ze$1, slice: gm, sortedIndex: pm, sortedIndexBy: wm, sortedIndexOf: jm, sortedLastIndex: mm, sortedLastIndexBy: fm, sortedLastIndexOf: Ym, sortedUniq: km, sortedUniqBy: Lm, tail: xm, take: Wm, takeRight: Pm, takeRightWhile: Fm, takeWhile: Km, union: Bf, unionBy: Qf, unionWith: Mf, uniq: Gf, uniqBy: Nf, uniqWith: xf, unzip: Rn$1, unzipWith: Bd, without: zf, xor: Uf, xorBy: Vf, xorWith: iY, zip: oY, zipObject: eY, zipObjectDeep: nY, zipWith: aY };
const D$2 = { countBy: qy, every: Gc, filter: Pc, find: Kc, findLast: Oc, flatMap: $c, flatMapDeep: Ic, flatMapDepth: Uc, forEach: mc, forEachRight: Yc, groupBy: fb, includes: Qb, invokeMap: qb, keyBy: xp, map: te$3, orderBy: Xw, partition: tj, reduce: Qj, reduceRight: Gj, reject: Nj, sample: Ej, sampleSize: Ij, shuffle: em, size: um, some: sm, sortBy: hm };
const uY = { now: Wo };
const x$1 = { after: ts, ary: Tu, before: Ru, bind: ne$3, bindKey: hn$1, curry: Sn$1, curryRight: Jn$1, debounce: Gg, defer: sc, delay: hc, flip: nb, memoize: oe$2, once: Sw, overArgs: Bw, partial: ye$1, partialRight: Wn$1, rearg: Bj, rest: Kj, spread: Xm, throttle: gf, unary: Zf, wrap: Ef };
const m$1 = { castArray: jv, clone: q0, cloneDeep: V0, cloneDeepWith: ey, cloneWith: ay, conformsTo: _y, eq: ci, gt: Yb, gte: kb, isArguments: Ki, isArrayBuffer: Vb, isArrayLike: V$4, isArrayLikeObject: W$3, isBoolean: op, isBuffer: Ti, isDate: ap, isElement: up, isEmpty: hp, isEqual: rp, isEqualWith: lp, isError: sn$1, isFinite: yp, isFunction: Li, isInteger: gd, isLength: Uo, isMap: fg, isMatch: cp, isMatchWith: bp, isNaN: wp, isNative: fp, isNil: Yp, isNull: kp, isNumber: dd, isObjectLike: N$3, isPlainObject: Jo, isRegExp: Qn$1, isSafeInteger: Sp, isSet: Yg, isString: re$1, isSymbol: oi, isTypedArray: to$1, isUndefined: Jp, isWeakMap: Xp, isWeakSet: Dp, lt: _p, lte: Op, toArray: sd, toFinite: ki, toLength: $g, toNumber: gi, toPlainObject: xg, toSafeInteger: yf, toString: X$2 };
const q$2 = { add: Vt$1, ceil: Yv, divide: cc, floor: ab, max: Vp, maxBy: iw, mean: ew, meanBy: nw, min: dw, minBy: tw, multiply: hw, round: Oj, subtract: Mm, sum: Gm, sumBy: Nm };
const _n$1 = { clamp: Sv, inRange: Db, random: Sj };
const f = { assign: lr$1, assignIn: pr$1, assignInWith: wr$1, assignWith: Ge$2, at: Ir$1, create: Iy, defaults: uc, defaultsDeep: dc, findKey: Rc, findLastKey: zc, forIn: lb, forInRight: vb, forOwn: yb, forOwnRight: cb, functions: pb, functionsIn: wb, get: dn$1, has: Jb, hasIn: kn$1, invert: _b, invertBy: Eb, invoke: $b, keysIn: ii, mapKeys: zp, mapValues: Ep, merge: aw, mergeWith: Pg, omit: Lw, omitBy: Zw, pick: hj, pickBy: ld, result: Rj, set: Uj, setWith: Vj, toPairs: Cc, toPairsIn: Xc, transform: bf, unset: Ff, update: Rf, updateWith: Af, values: ro$1, valuesIn: Of };
const fi = { at: $f, chain: vg, commit: uy, next: cw, plant: rj, reverse: If, tap: Rm, toIterator: hf, value: rf, wrapperChain: qf };
const C$2 = { camelCase: wv, capitalize: Iu, deburr: Uu, endsWith: kc, escape: Og, escapeRegExp: Qc, kebabCase: Np, lowerCase: Rp, lowerFirst: Ap, pad: ij, padEnd: oj, padStart: ej, parseInt: uj, repeat: Wj, replace: Pj, snakeCase: dm, split: Sm, startCase: Hm, startsWith: Dm, template: af, templateSettings: Ee$1, toLower: lf, toUpper: cf, trim: pf, trimEnd: wf, trimStart: mf, truncate: Lf, unescape: Xf, upperCase: _f, upperFirst: rn$1, words: lg };
const H$2 = { attempt: Ku, bindAll: tl, cond: Fy, conforms: Ay, constant: on$1, defaultTo: nc, flow: hb, flowRight: rb, iteratee: Bp, matches: qp, matchesProperty: Up, method: uw, methodOf: gw, noop: Ue$2, nthArg: pw, over: Hw, overEvery: Qw, overSome: Mw, property: Tg, propertyOf: lj, range: Hj, rangeRight: Dj, stubArray: cn$1, stubFalse: an$1, stubObject: Tm, stubString: Bm, stubTrue: Qm, times: sf, toPath: vf, uniqueId: Pf };
function gY() {
  var i = new J$3(this.__wrapped__);
  return i.__actions__ = I$2(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = I$2(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = I$2(this.__views__), i;
}
function dY() {
  if (this.__filtered__) {
    var i = new J$3(this);
    i.__dir__ = -1, i.__filtered__ = true;
  } else i = this.clone(), i.__dir__ *= -1;
  return i;
}
var tY = Math.max;
var sY = Math.min;
function hY(i, o, e) {
  for (var n = -1, a = e.length; ++n < a; ) {
    var u = e[n], g = u.size;
    switch (u.type) {
      case "drop":
        i += g;
        break;
      case "dropRight":
        o -= g;
        break;
      case "take":
        o = sY(o, i + g);
        break;
      case "takeRight":
        i = tY(i, o - g);
        break;
    }
  }
  return { start: i, end: o };
}
var rY = 1;
var lY = 2;
var vY = Math.min;
function yY() {
  var i = this.__wrapped__.value(), o = this.__dir__, e = k$2(i), n = o < 0, a = e ? i.length : 0, u = hY(0, a, this.__views__), g = u.start, t = u.end, s = t - g, h = n ? t : g - 1, r = this.__iteratees__, l = r.length, v = 0, y = vY(s, this.__takeCount__);
  if (!e || !n && a == s && y == s) return Xd(i, this.__actions__);
  var c = [];
  i: for (; s-- && v < y; ) {
    h += o;
    for (var b = -1, p = i[h]; ++b < l; ) {
      var j = r[b], L = j.iteratee, K = j.type, R = L(p);
      if (K == lY) p = R;
      else if (!R) {
        if (K == rY) continue i;
        break i;
      }
    }
    c[v++] = p;
  }
  return c;
}
var cY = "4.18.1";
var bY = 2;
var pY = 1;
var wY = 3;
var Gd = 4294967295;
var jY = Array.prototype;
var mY = Object.prototype;
var Nd = mY.hasOwnProperty;
var ou = _$2 ? _$2.iterator : void 0;
var fY = Math.max;
var eu = Math.min;
var On$1 = /* @__PURE__ */ (function(i) {
  return function(o, e, n) {
    if (n == null) {
      var a = G$2(e), u = a && F$2(e), g = u && u.length && se$2(e, u);
      (g ? g.length : a) || (n = e, e = o, o = this);
    }
    return i(o, e, n);
  };
})(sw);
d$1.after = x$1.after;
d$1.ary = x$1.ary;
d$1.assign = f.assign;
d$1.assignIn = f.assignIn;
d$1.assignInWith = f.assignInWith;
d$1.assignWith = f.assignWith;
d$1.at = f.at;
d$1.before = x$1.before;
d$1.bind = x$1.bind;
d$1.bindAll = H$2.bindAll;
d$1.bindKey = x$1.bindKey;
d$1.castArray = m$1.castArray;
d$1.chain = fi.chain;
d$1.chunk = w$1.chunk;
d$1.compact = w$1.compact;
d$1.concat = w$1.concat;
d$1.cond = H$2.cond;
d$1.conforms = H$2.conforms;
d$1.constant = H$2.constant;
d$1.countBy = D$2.countBy;
d$1.create = f.create;
d$1.curry = x$1.curry;
d$1.curryRight = x$1.curryRight;
d$1.debounce = x$1.debounce;
d$1.defaults = f.defaults;
d$1.defaultsDeep = f.defaultsDeep;
d$1.defer = x$1.defer;
d$1.delay = x$1.delay;
d$1.difference = w$1.difference;
d$1.differenceBy = w$1.differenceBy;
d$1.differenceWith = w$1.differenceWith;
d$1.drop = w$1.drop;
d$1.dropRight = w$1.dropRight;
d$1.dropRightWhile = w$1.dropRightWhile;
d$1.dropWhile = w$1.dropWhile;
d$1.fill = w$1.fill;
d$1.filter = D$2.filter;
d$1.flatMap = D$2.flatMap;
d$1.flatMapDeep = D$2.flatMapDeep;
d$1.flatMapDepth = D$2.flatMapDepth;
d$1.flatten = w$1.flatten;
d$1.flattenDeep = w$1.flattenDeep;
d$1.flattenDepth = w$1.flattenDepth;
d$1.flip = x$1.flip;
d$1.flow = H$2.flow;
d$1.flowRight = H$2.flowRight;
d$1.fromPairs = w$1.fromPairs;
d$1.functions = f.functions;
d$1.functionsIn = f.functionsIn;
d$1.groupBy = D$2.groupBy;
d$1.initial = w$1.initial;
d$1.intersection = w$1.intersection;
d$1.intersectionBy = w$1.intersectionBy;
d$1.intersectionWith = w$1.intersectionWith;
d$1.invert = f.invert;
d$1.invertBy = f.invertBy;
d$1.invokeMap = D$2.invokeMap;
d$1.iteratee = H$2.iteratee;
d$1.keyBy = D$2.keyBy;
d$1.keys = F$2;
d$1.keysIn = f.keysIn;
d$1.map = D$2.map;
d$1.mapKeys = f.mapKeys;
d$1.mapValues = f.mapValues;
d$1.matches = H$2.matches;
d$1.matchesProperty = H$2.matchesProperty;
d$1.memoize = x$1.memoize;
d$1.merge = f.merge;
d$1.mergeWith = f.mergeWith;
d$1.method = H$2.method;
d$1.methodOf = H$2.methodOf;
d$1.mixin = On$1;
d$1.negate = ve$1;
d$1.nthArg = H$2.nthArg;
d$1.omit = f.omit;
d$1.omitBy = f.omitBy;
d$1.once = x$1.once;
d$1.orderBy = D$2.orderBy;
d$1.over = H$2.over;
d$1.overArgs = x$1.overArgs;
d$1.overEvery = H$2.overEvery;
d$1.overSome = H$2.overSome;
d$1.partial = x$1.partial;
d$1.partialRight = x$1.partialRight;
d$1.partition = D$2.partition;
d$1.pick = f.pick;
d$1.pickBy = f.pickBy;
d$1.property = H$2.property;
d$1.propertyOf = H$2.propertyOf;
d$1.pull = w$1.pull;
d$1.pullAll = w$1.pullAll;
d$1.pullAllBy = w$1.pullAllBy;
d$1.pullAllWith = w$1.pullAllWith;
d$1.pullAt = w$1.pullAt;
d$1.range = H$2.range;
d$1.rangeRight = H$2.rangeRight;
d$1.rearg = x$1.rearg;
d$1.reject = D$2.reject;
d$1.remove = w$1.remove;
d$1.rest = x$1.rest;
d$1.reverse = w$1.reverse;
d$1.sampleSize = D$2.sampleSize;
d$1.set = f.set;
d$1.setWith = f.setWith;
d$1.shuffle = D$2.shuffle;
d$1.slice = w$1.slice;
d$1.sortBy = D$2.sortBy;
d$1.sortedUniq = w$1.sortedUniq;
d$1.sortedUniqBy = w$1.sortedUniqBy;
d$1.split = C$2.split;
d$1.spread = x$1.spread;
d$1.tail = w$1.tail;
d$1.take = w$1.take;
d$1.takeRight = w$1.takeRight;
d$1.takeRightWhile = w$1.takeRightWhile;
d$1.takeWhile = w$1.takeWhile;
d$1.tap = fi.tap;
d$1.throttle = x$1.throttle;
d$1.thru = pe$2;
d$1.toArray = m$1.toArray;
d$1.toPairs = f.toPairs;
d$1.toPairsIn = f.toPairsIn;
d$1.toPath = H$2.toPath;
d$1.toPlainObject = m$1.toPlainObject;
d$1.transform = f.transform;
d$1.unary = x$1.unary;
d$1.union = w$1.union;
d$1.unionBy = w$1.unionBy;
d$1.unionWith = w$1.unionWith;
d$1.uniq = w$1.uniq;
d$1.uniqBy = w$1.uniqBy;
d$1.uniqWith = w$1.uniqWith;
d$1.unset = f.unset;
d$1.unzip = w$1.unzip;
d$1.unzipWith = w$1.unzipWith;
d$1.update = f.update;
d$1.updateWith = f.updateWith;
d$1.values = f.values;
d$1.valuesIn = f.valuesIn;
d$1.without = w$1.without;
d$1.words = C$2.words;
d$1.wrap = x$1.wrap;
d$1.xor = w$1.xor;
d$1.xorBy = w$1.xorBy;
d$1.xorWith = w$1.xorWith;
d$1.zip = w$1.zip;
d$1.zipObject = w$1.zipObject;
d$1.zipObjectDeep = w$1.zipObjectDeep;
d$1.zipWith = w$1.zipWith;
d$1.entries = f.toPairs;
d$1.entriesIn = f.toPairsIn;
d$1.extend = f.assignIn;
d$1.extendWith = f.assignInWith;
On$1(d$1, d$1);
d$1.add = q$2.add;
d$1.attempt = H$2.attempt;
d$1.camelCase = C$2.camelCase;
d$1.capitalize = C$2.capitalize;
d$1.ceil = q$2.ceil;
d$1.clamp = _n$1.clamp;
d$1.clone = m$1.clone;
d$1.cloneDeep = m$1.cloneDeep;
d$1.cloneDeepWith = m$1.cloneDeepWith;
d$1.cloneWith = m$1.cloneWith;
d$1.conformsTo = m$1.conformsTo;
d$1.deburr = C$2.deburr;
d$1.defaultTo = H$2.defaultTo;
d$1.divide = q$2.divide;
d$1.endsWith = C$2.endsWith;
d$1.eq = m$1.eq;
d$1.escape = C$2.escape;
d$1.escapeRegExp = C$2.escapeRegExp;
d$1.every = D$2.every;
d$1.find = D$2.find;
d$1.findIndex = w$1.findIndex;
d$1.findKey = f.findKey;
d$1.findLast = D$2.findLast;
d$1.findLastIndex = w$1.findLastIndex;
d$1.findLastKey = f.findLastKey;
d$1.floor = q$2.floor;
d$1.forEach = D$2.forEach;
d$1.forEachRight = D$2.forEachRight;
d$1.forIn = f.forIn;
d$1.forInRight = f.forInRight;
d$1.forOwn = f.forOwn;
d$1.forOwnRight = f.forOwnRight;
d$1.get = f.get;
d$1.gt = m$1.gt;
d$1.gte = m$1.gte;
d$1.has = f.has;
d$1.hasIn = f.hasIn;
d$1.head = w$1.head;
d$1.identity = U$4;
d$1.includes = D$2.includes;
d$1.indexOf = w$1.indexOf;
d$1.inRange = _n$1.inRange;
d$1.invoke = f.invoke;
d$1.isArguments = m$1.isArguments;
d$1.isArray = k$2;
d$1.isArrayBuffer = m$1.isArrayBuffer;
d$1.isArrayLike = m$1.isArrayLike;
d$1.isArrayLikeObject = m$1.isArrayLikeObject;
d$1.isBoolean = m$1.isBoolean;
d$1.isBuffer = m$1.isBuffer;
d$1.isDate = m$1.isDate;
d$1.isElement = m$1.isElement;
d$1.isEmpty = m$1.isEmpty;
d$1.isEqual = m$1.isEqual;
d$1.isEqualWith = m$1.isEqualWith;
d$1.isError = m$1.isError;
d$1.isFinite = m$1.isFinite;
d$1.isFunction = m$1.isFunction;
d$1.isInteger = m$1.isInteger;
d$1.isLength = m$1.isLength;
d$1.isMap = m$1.isMap;
d$1.isMatch = m$1.isMatch;
d$1.isMatchWith = m$1.isMatchWith;
d$1.isNaN = m$1.isNaN;
d$1.isNative = m$1.isNative;
d$1.isNil = m$1.isNil;
d$1.isNull = m$1.isNull;
d$1.isNumber = m$1.isNumber;
d$1.isObject = G$2;
d$1.isObjectLike = m$1.isObjectLike;
d$1.isPlainObject = m$1.isPlainObject;
d$1.isRegExp = m$1.isRegExp;
d$1.isSafeInteger = m$1.isSafeInteger;
d$1.isSet = m$1.isSet;
d$1.isString = m$1.isString;
d$1.isSymbol = m$1.isSymbol;
d$1.isTypedArray = m$1.isTypedArray;
d$1.isUndefined = m$1.isUndefined;
d$1.isWeakMap = m$1.isWeakMap;
d$1.isWeakSet = m$1.isWeakSet;
d$1.join = w$1.join;
d$1.kebabCase = C$2.kebabCase;
d$1.last = ri;
d$1.lastIndexOf = w$1.lastIndexOf;
d$1.lowerCase = C$2.lowerCase;
d$1.lowerFirst = C$2.lowerFirst;
d$1.lt = m$1.lt;
d$1.lte = m$1.lte;
d$1.max = q$2.max;
d$1.maxBy = q$2.maxBy;
d$1.mean = q$2.mean;
d$1.meanBy = q$2.meanBy;
d$1.min = q$2.min;
d$1.minBy = q$2.minBy;
d$1.stubArray = H$2.stubArray;
d$1.stubFalse = H$2.stubFalse;
d$1.stubObject = H$2.stubObject;
d$1.stubString = H$2.stubString;
d$1.stubTrue = H$2.stubTrue;
d$1.multiply = q$2.multiply;
d$1.nth = w$1.nth;
d$1.noop = H$2.noop;
d$1.now = uY.now;
d$1.pad = C$2.pad;
d$1.padEnd = C$2.padEnd;
d$1.padStart = C$2.padStart;
d$1.parseInt = C$2.parseInt;
d$1.random = _n$1.random;
d$1.reduce = D$2.reduce;
d$1.reduceRight = D$2.reduceRight;
d$1.repeat = C$2.repeat;
d$1.replace = C$2.replace;
d$1.result = f.result;
d$1.round = q$2.round;
d$1.sample = D$2.sample;
d$1.size = D$2.size;
d$1.snakeCase = C$2.snakeCase;
d$1.some = D$2.some;
d$1.sortedIndex = w$1.sortedIndex;
d$1.sortedIndexBy = w$1.sortedIndexBy;
d$1.sortedIndexOf = w$1.sortedIndexOf;
d$1.sortedLastIndex = w$1.sortedLastIndex;
d$1.sortedLastIndexBy = w$1.sortedLastIndexBy;
d$1.sortedLastIndexOf = w$1.sortedLastIndexOf;
d$1.startCase = C$2.startCase;
d$1.startsWith = C$2.startsWith;
d$1.subtract = q$2.subtract;
d$1.sum = q$2.sum;
d$1.sumBy = q$2.sumBy;
d$1.template = C$2.template;
d$1.times = H$2.times;
d$1.toFinite = m$1.toFinite;
d$1.toInteger = Z$2;
d$1.toLength = m$1.toLength;
d$1.toLower = C$2.toLower;
d$1.toNumber = m$1.toNumber;
d$1.toSafeInteger = m$1.toSafeInteger;
d$1.toString = m$1.toString;
d$1.toUpper = C$2.toUpper;
d$1.trim = C$2.trim;
d$1.trimEnd = C$2.trimEnd;
d$1.trimStart = C$2.trimStart;
d$1.truncate = C$2.truncate;
d$1.unescape = C$2.unescape;
d$1.uniqueId = H$2.uniqueId;
d$1.upperCase = C$2.upperCase;
d$1.upperFirst = C$2.upperFirst;
d$1.each = D$2.forEach;
d$1.eachRight = D$2.forEachRight;
d$1.first = w$1.head;
On$1(d$1, (function() {
  var i = {};
  return ji(d$1, function(o, e) {
    Nd.call(d$1.prototype, e) || (i[e] = o);
  }), i;
})(), { chain: false });
d$1.VERSION = cY;
(d$1.templateSettings = C$2.templateSettings).imports._ = d$1;
ui(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
  d$1[i].placeholder = d$1;
});
ui(["drop", "take"], function(i, o) {
  J$3.prototype[i] = function(e) {
    e = e === void 0 ? 1 : fY(Z$2(e), 0);
    var n = this.__filtered__ && !o ? new J$3(this) : this.clone();
    return n.__filtered__ ? n.__takeCount__ = eu(e, n.__takeCount__) : n.__views__.push({ size: eu(e, Gd), type: i + (n.__dir__ < 0 ? "Right" : "") }), n;
  }, J$3.prototype[i + "Right"] = function(e) {
    return this.reverse()[i](e).reverse();
  };
});
ui(["filter", "map", "takeWhile"], function(i, o) {
  var e = o + 1, n = e == pY || e == wY;
  J$3.prototype[i] = function(a) {
    var u = this.clone();
    return u.__iteratees__.push({ iteratee: Y$2(a), type: e }), u.__filtered__ = u.__filtered__ || n, u;
  };
});
ui(["head", "last"], function(i, o) {
  var e = "take" + (o ? "Right" : "");
  J$3.prototype[i] = function() {
    return this[e](1).value()[0];
  };
});
ui(["initial", "tail"], function(i, o) {
  var e = "drop" + (o ? "" : "Right");
  J$3.prototype[i] = function() {
    return this.__filtered__ ? new J$3(this) : this[e](1);
  };
});
J$3.prototype.compact = function() {
  return this.filter(U$4);
};
J$3.prototype.find = function(i) {
  return this.filter(i).head();
};
J$3.prototype.findLast = function(i) {
  return this.reverse().find(i);
};
J$3.prototype.invokeMap = S$2(function(i, o) {
  return typeof i == "function" ? new J$3(this) : this.map(function(e) {
    return Ho(e, i, o);
  });
});
J$3.prototype.reject = function(i) {
  return this.filter(ve$1(Y$2(i)));
};
J$3.prototype.slice = function(i, o) {
  i = Z$2(i);
  var e = this;
  return e.__filtered__ && (i > 0 || o < 0) ? new J$3(e) : (i < 0 ? e = e.takeRight(-i) : i && (e = e.drop(i)), o !== void 0 && (o = Z$2(o), e = o < 0 ? e.dropRight(-o) : e.take(o - i)), e);
};
J$3.prototype.takeRightWhile = function(i) {
  return this.reverse().takeWhile(i).reverse();
};
J$3.prototype.toArray = function() {
  return this.take(Gd);
};
ji(J$3.prototype, function(i, o) {
  var e = /^(?:filter|find|map|reject)|While$/.test(o), n = /^(?:head|last)$/.test(o), a = d$1[n ? "take" + (o == "last" ? "Right" : "") : o], u = n || /^find/.test(o);
  a && (d$1.prototype[o] = function() {
    var g = this.__wrapped__, t = n ? [1] : arguments, s = g instanceof J$3, h = t[0], r = s || k$2(g), l = function(j) {
      var L = a.apply(d$1, Mi([j], t));
      return n && v ? L[0] : L;
    };
    r && e && typeof h == "function" && h.length != 1 && (s = r = false);
    var v = this.__chain__, y = !!this.__actions__.length, c = u && !v, b = s && !y;
    if (!u && r) {
      g = b ? g : new J$3(this);
      var p = i.apply(g, t);
      return p.__actions__.push({ func: pe$2, args: [l], thisArg: void 0 }), new ti(p, v);
    }
    return c && b ? i.apply(this, t) : (p = this.thru(l), c ? n ? p.value()[0] : p.value() : p);
  });
});
ui(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
  var o = jY[i], e = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru", n = /^(?:pop|shift)$/.test(i);
  d$1.prototype[i] = function() {
    var a = arguments;
    if (n && !this.__chain__) {
      var u = this.value();
      return o.apply(k$2(u) ? u : [], a);
    }
    return this[e](function(g) {
      return o.apply(k$2(g) ? g : [], a);
    });
  };
});
ji(J$3.prototype, function(i, o) {
  var e = d$1[o];
  if (e) {
    var n = e.name + "";
    Nd.call(Ui, n) || (Ui[n] = []), Ui[n].push({ name: o, func: e });
  }
});
Ui[Io(void 0, bY).name] = [{ name: "wrapper", func: void 0 }];
J$3.prototype.clone = gY;
J$3.prototype.reverse = dY;
J$3.prototype.value = yY;
d$1.prototype.at = fi.at;
d$1.prototype.chain = fi.wrapperChain;
d$1.prototype.commit = fi.commit;
d$1.prototype.next = fi.next;
d$1.prototype.plant = fi.plant;
d$1.prototype.reverse = fi.reverse;
d$1.prototype.toJSON = d$1.prototype.valueOf = d$1.prototype.value = fi.value;
d$1.prototype.first = d$1.prototype.head;
ou && (d$1.prototype[ou] = fi.toIterator);
var Ii = function() {
  return Ii = Object.assign || function(i) {
    for (var o, e = 1, n = arguments.length; e < n; e++) {
      o = arguments[e];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (i[a] = o[a]);
    }
    return i;
  }, Ii.apply(this, arguments);
};
var YY = "~";
var kY = "~~";
function zn$1(i, o) {
  for (var e = {}, n = {}, a = i.split(kY), u = false, g = 0; a.length > g; g++) {
    for (var t = a[g].split(YY), s = 0; s < t.length; s += 2) {
      var h = t[s], r = t[s + 1], l = "&" + h + ";";
      e[l] = r, u && (e["&" + h] = r), n[r] = l;
    }
    u = true;
  }
  return o ? { entities: Ii(Ii({}, e), o.entities), characters: Ii(Ii({}, n), o.characters) } : { entities: e, characters: n };
}
var Ze$2 = { xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g, html4: /&notin;|&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g, html5: /&centerdot;|&copysr;|&divideontimes;|&gtcc;|&gtcir;|&gtdot;|&gtlPar;|&gtquest;|&gtrapprox;|&gtrarr;|&gtrdot;|&gtreqless;|&gtreqqless;|&gtrless;|&gtrsim;|&ltcc;|&ltcir;|&ltdot;|&lthree;|&ltimes;|&ltlarr;|&ltquest;|&ltrPar;|&ltri;|&ltrie;|&ltrif;|&notin;|&notinE;|&notindot;|&notinva;|&notinvb;|&notinvc;|&notni;|&notniva;|&notnivb;|&notnivc;|&parallel;|&timesb;|&timesbar;|&timesd;|&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g };
var io = {};
io.xml = zn$1(`lt~<~gt~>~quot~"~apos~'~amp~&`);
io.html4 = zn$1(`apos~'~OElig~Œ~oelig~œ~Scaron~Š~scaron~š~Yuml~Ÿ~circ~ˆ~tilde~˜~ensp~ ~emsp~ ~thinsp~ ~zwnj~‌~zwj~‍~lrm~‎~rlm~‏~ndash~–~mdash~—~lsquo~‘~rsquo~’~sbquo~‚~ldquo~“~rdquo~”~bdquo~„~dagger~†~Dagger~‡~permil~‰~lsaquo~‹~rsaquo~›~euro~€~fnof~ƒ~Alpha~Α~Beta~Β~Gamma~Γ~Delta~Δ~Epsilon~Ε~Zeta~Ζ~Eta~Η~Theta~Θ~Iota~Ι~Kappa~Κ~Lambda~Λ~Mu~Μ~Nu~Ν~Xi~Ξ~Omicron~Ο~Pi~Π~Rho~Ρ~Sigma~Σ~Tau~Τ~Upsilon~Υ~Phi~Φ~Chi~Χ~Psi~Ψ~Omega~Ω~alpha~α~beta~β~gamma~γ~delta~δ~epsilon~ε~zeta~ζ~eta~η~theta~θ~iota~ι~kappa~κ~lambda~λ~mu~μ~nu~ν~xi~ξ~omicron~ο~pi~π~rho~ρ~sigmaf~ς~sigma~σ~tau~τ~upsilon~υ~phi~φ~chi~χ~psi~ψ~omega~ω~thetasym~ϑ~upsih~ϒ~piv~ϖ~bull~•~hellip~…~prime~′~Prime~″~oline~‾~frasl~⁄~weierp~℘~image~ℑ~real~ℜ~trade~™~alefsym~ℵ~larr~←~uarr~↑~rarr~→~darr~↓~harr~↔~crarr~↵~lArr~⇐~uArr~⇑~rArr~⇒~dArr~⇓~hArr~⇔~forall~∀~part~∂~exist~∃~empty~∅~nabla~∇~isin~∈~notin~∉~ni~∋~prod~∏~sum~∑~minus~−~lowast~∗~radic~√~prop~∝~infin~∞~ang~∠~and~∧~or~∨~cap~∩~cup~∪~int~∫~there4~∴~sim~∼~cong~≅~asymp~≈~ne~≠~equiv~≡~le~≤~ge~≥~sub~⊂~sup~⊃~nsub~⊄~sube~⊆~supe~⊇~oplus~⊕~otimes~⊗~perp~⊥~sdot~⋅~lceil~⌈~rceil~⌉~lfloor~⌊~rfloor~⌋~lang~〈~rang~〉~loz~◊~spades~♠~clubs~♣~hearts~♥~diams~♦~~nbsp~ ~iexcl~¡~cent~¢~pound~£~curren~¤~yen~¥~brvbar~¦~sect~§~uml~¨~copy~©~ordf~ª~laquo~«~not~¬~shy~­~reg~®~macr~¯~deg~°~plusmn~±~sup2~²~sup3~³~acute~´~micro~µ~para~¶~middot~·~cedil~¸~sup1~¹~ordm~º~raquo~»~frac14~¼~frac12~½~frac34~¾~iquest~¿~Agrave~À~Aacute~Á~Acirc~Â~Atilde~Ã~Auml~Ä~Aring~Å~AElig~Æ~Ccedil~Ç~Egrave~È~Eacute~É~Ecirc~Ê~Euml~Ë~Igrave~Ì~Iacute~Í~Icirc~Î~Iuml~Ï~ETH~Ð~Ntilde~Ñ~Ograve~Ò~Oacute~Ó~Ocirc~Ô~Otilde~Õ~Ouml~Ö~times~×~Oslash~Ø~Ugrave~Ù~Uacute~Ú~Ucirc~Û~Uuml~Ü~Yacute~Ý~THORN~Þ~szlig~ß~agrave~à~aacute~á~acirc~â~atilde~ã~auml~ä~aring~å~aelig~æ~ccedil~ç~egrave~è~eacute~é~ecirc~ê~euml~ë~igrave~ì~iacute~í~icirc~î~iuml~ï~eth~ð~ntilde~ñ~ograve~ò~oacute~ó~ocirc~ô~otilde~õ~ouml~ö~divide~÷~oslash~ø~ugrave~ù~uacute~ú~ucirc~û~uuml~ü~yacute~ý~thorn~þ~yuml~ÿ~quot~"~amp~&~lt~<~gt~>`);
io.html5 = zn$1('Abreve~Ă~Acy~А~Afr~𝔄~Amacr~Ā~And~⩓~Aogon~Ą~Aopf~𝔸~ApplyFunction~⁡~Ascr~𝒜~Assign~≔~Backslash~∖~Barv~⫧~Barwed~⌆~Bcy~Б~Because~∵~Bernoullis~ℬ~Bfr~𝔅~Bopf~𝔹~Breve~˘~Bscr~ℬ~Bumpeq~≎~CHcy~Ч~Cacute~Ć~Cap~⋒~CapitalDifferentialD~ⅅ~Cayleys~ℭ~Ccaron~Č~Ccirc~Ĉ~Cconint~∰~Cdot~Ċ~Cedilla~¸~CenterDot~·~Cfr~ℭ~CircleDot~⊙~CircleMinus~⊖~CirclePlus~⊕~CircleTimes~⊗~ClockwiseContourIntegral~∲~CloseCurlyDoubleQuote~”~CloseCurlyQuote~’~Colon~∷~Colone~⩴~Congruent~≡~Conint~∯~ContourIntegral~∮~Copf~ℂ~Coproduct~∐~CounterClockwiseContourIntegral~∳~Cross~⨯~Cscr~𝒞~Cup~⋓~CupCap~≍~DD~ⅅ~DDotrahd~⤑~DJcy~Ђ~DScy~Ѕ~DZcy~Џ~Darr~↡~Dashv~⫤~Dcaron~Ď~Dcy~Д~Del~∇~Dfr~𝔇~DiacriticalAcute~´~DiacriticalDot~˙~DiacriticalDoubleAcute~˝~DiacriticalGrave~`~DiacriticalTilde~˜~Diamond~⋄~DifferentialD~ⅆ~Dopf~𝔻~Dot~¨~DotDot~⃜~DotEqual~≐~DoubleContourIntegral~∯~DoubleDot~¨~DoubleDownArrow~⇓~DoubleLeftArrow~⇐~DoubleLeftRightArrow~⇔~DoubleLeftTee~⫤~DoubleLongLeftArrow~⟸~DoubleLongLeftRightArrow~⟺~DoubleLongRightArrow~⟹~DoubleRightArrow~⇒~DoubleRightTee~⊨~DoubleUpArrow~⇑~DoubleUpDownArrow~⇕~DoubleVerticalBar~∥~DownArrow~↓~DownArrowBar~⤓~DownArrowUpArrow~⇵~DownBreve~̑~DownLeftRightVector~⥐~DownLeftTeeVector~⥞~DownLeftVector~↽~DownLeftVectorBar~⥖~DownRightTeeVector~⥟~DownRightVector~⇁~DownRightVectorBar~⥗~DownTee~⊤~DownTeeArrow~↧~Downarrow~⇓~Dscr~𝒟~Dstrok~Đ~ENG~Ŋ~Ecaron~Ě~Ecy~Э~Edot~Ė~Efr~𝔈~Element~∈~Emacr~Ē~EmptySmallSquare~◻~EmptyVerySmallSquare~▫~Eogon~Ę~Eopf~𝔼~Equal~⩵~EqualTilde~≂~Equilibrium~⇌~Escr~ℰ~Esim~⩳~Exists~∃~ExponentialE~ⅇ~Fcy~Ф~Ffr~𝔉~FilledSmallSquare~◼~FilledVerySmallSquare~▪~Fopf~𝔽~ForAll~∀~Fouriertrf~ℱ~Fscr~ℱ~GJcy~Ѓ~Gammad~Ϝ~Gbreve~Ğ~Gcedil~Ģ~Gcirc~Ĝ~Gcy~Г~Gdot~Ġ~Gfr~𝔊~Gg~⋙~Gopf~𝔾~GreaterEqual~≥~GreaterEqualLess~⋛~GreaterFullEqual~≧~GreaterGreater~⪢~GreaterLess~≷~GreaterSlantEqual~⩾~GreaterTilde~≳~Gscr~𝒢~Gt~≫~HARDcy~Ъ~Hacek~ˇ~Hat~^~Hcirc~Ĥ~Hfr~ℌ~HilbertSpace~ℋ~Hopf~ℍ~HorizontalLine~─~Hscr~ℋ~Hstrok~Ħ~HumpDownHump~≎~HumpEqual~≏~IEcy~Е~IJlig~Ĳ~IOcy~Ё~Icy~И~Idot~İ~Ifr~ℑ~Im~ℑ~Imacr~Ī~ImaginaryI~ⅈ~Implies~⇒~Int~∬~Integral~∫~Intersection~⋂~InvisibleComma~⁣~InvisibleTimes~⁢~Iogon~Į~Iopf~𝕀~Iscr~ℐ~Itilde~Ĩ~Iukcy~І~Jcirc~Ĵ~Jcy~Й~Jfr~𝔍~Jopf~𝕁~Jscr~𝒥~Jsercy~Ј~Jukcy~Є~KHcy~Х~KJcy~Ќ~Kcedil~Ķ~Kcy~К~Kfr~𝔎~Kopf~𝕂~Kscr~𝒦~LJcy~Љ~Lacute~Ĺ~Lang~⟪~Laplacetrf~ℒ~Larr~↞~Lcaron~Ľ~Lcedil~Ļ~Lcy~Л~LeftAngleBracket~⟨~LeftArrow~←~LeftArrowBar~⇤~LeftArrowRightArrow~⇆~LeftCeiling~⌈~LeftDoubleBracket~⟦~LeftDownTeeVector~⥡~LeftDownVector~⇃~LeftDownVectorBar~⥙~LeftFloor~⌊~LeftRightArrow~↔~LeftRightVector~⥎~LeftTee~⊣~LeftTeeArrow~↤~LeftTeeVector~⥚~LeftTriangle~⊲~LeftTriangleBar~⧏~LeftTriangleEqual~⊴~LeftUpDownVector~⥑~LeftUpTeeVector~⥠~LeftUpVector~↿~LeftUpVectorBar~⥘~LeftVector~↼~LeftVectorBar~⥒~Leftarrow~⇐~Leftrightarrow~⇔~LessEqualGreater~⋚~LessFullEqual~≦~LessGreater~≶~LessLess~⪡~LessSlantEqual~⩽~LessTilde~≲~Lfr~𝔏~Ll~⋘~Lleftarrow~⇚~Lmidot~Ŀ~LongLeftArrow~⟵~LongLeftRightArrow~⟷~LongRightArrow~⟶~Longleftarrow~⟸~Longleftrightarrow~⟺~Longrightarrow~⟹~Lopf~𝕃~LowerLeftArrow~↙~LowerRightArrow~↘~Lscr~ℒ~Lsh~↰~Lstrok~Ł~Lt~≪~Map~⤅~Mcy~М~MediumSpace~ ~Mellintrf~ℳ~Mfr~𝔐~MinusPlus~∓~Mopf~𝕄~Mscr~ℳ~NJcy~Њ~Nacute~Ń~Ncaron~Ň~Ncedil~Ņ~Ncy~Н~NegativeMediumSpace~​~NegativeThickSpace~​~NegativeThinSpace~​~NegativeVeryThinSpace~​~NestedGreaterGreater~≫~NestedLessLess~≪~NewLine~\n~Nfr~𝔑~NoBreak~⁠~NonBreakingSpace~ ~Nopf~ℕ~Not~⫬~NotCongruent~≢~NotCupCap~≭~NotDoubleVerticalBar~∦~NotElement~∉~NotEqual~≠~NotEqualTilde~≂̸~NotExists~∄~NotGreater~≯~NotGreaterEqual~≱~NotGreaterFullEqual~≧̸~NotGreaterGreater~≫̸~NotGreaterLess~≹~NotGreaterSlantEqual~⩾̸~NotGreaterTilde~≵~NotHumpDownHump~≎̸~NotHumpEqual~≏̸~NotLeftTriangle~⋪~NotLeftTriangleBar~⧏̸~NotLeftTriangleEqual~⋬~NotLess~≮~NotLessEqual~≰~NotLessGreater~≸~NotLessLess~≪̸~NotLessSlantEqual~⩽̸~NotLessTilde~≴~NotNestedGreaterGreater~⪢̸~NotNestedLessLess~⪡̸~NotPrecedes~⊀~NotPrecedesEqual~⪯̸~NotPrecedesSlantEqual~⋠~NotReverseElement~∌~NotRightTriangle~⋫~NotRightTriangleBar~⧐̸~NotRightTriangleEqual~⋭~NotSquareSubset~⊏̸~NotSquareSubsetEqual~⋢~NotSquareSuperset~⊐̸~NotSquareSupersetEqual~⋣~NotSubset~⊂⃒~NotSubsetEqual~⊈~NotSucceeds~⊁~NotSucceedsEqual~⪰̸~NotSucceedsSlantEqual~⋡~NotSucceedsTilde~≿̸~NotSuperset~⊃⃒~NotSupersetEqual~⊉~NotTilde~≁~NotTildeEqual~≄~NotTildeFullEqual~≇~NotTildeTilde~≉~NotVerticalBar~∤~Nscr~𝒩~Ocy~О~Odblac~Ő~Ofr~𝔒~Omacr~Ō~Oopf~𝕆~OpenCurlyDoubleQuote~“~OpenCurlyQuote~‘~Or~⩔~Oscr~𝒪~Otimes~⨷~OverBar~‾~OverBrace~⏞~OverBracket~⎴~OverParenthesis~⏜~PartialD~∂~Pcy~П~Pfr~𝔓~PlusMinus~±~Poincareplane~ℌ~Popf~ℙ~Pr~⪻~Precedes~≺~PrecedesEqual~⪯~PrecedesSlantEqual~≼~PrecedesTilde~≾~Product~∏~Proportion~∷~Proportional~∝~Pscr~𝒫~Qfr~𝔔~Qopf~ℚ~Qscr~𝒬~RBarr~⤐~Racute~Ŕ~Rang~⟫~Rarr~↠~Rarrtl~⤖~Rcaron~Ř~Rcedil~Ŗ~Rcy~Р~Re~ℜ~ReverseElement~∋~ReverseEquilibrium~⇋~ReverseUpEquilibrium~⥯~Rfr~ℜ~RightAngleBracket~⟩~RightArrow~→~RightArrowBar~⇥~RightArrowLeftArrow~⇄~RightCeiling~⌉~RightDoubleBracket~⟧~RightDownTeeVector~⥝~RightDownVector~⇂~RightDownVectorBar~⥕~RightFloor~⌋~RightTee~⊢~RightTeeArrow~↦~RightTeeVector~⥛~RightTriangle~⊳~RightTriangleBar~⧐~RightTriangleEqual~⊵~RightUpDownVector~⥏~RightUpTeeVector~⥜~RightUpVector~↾~RightUpVectorBar~⥔~RightVector~⇀~RightVectorBar~⥓~Rightarrow~⇒~Ropf~ℝ~RoundImplies~⥰~Rrightarrow~⇛~Rscr~ℛ~Rsh~↱~RuleDelayed~⧴~SHCHcy~Щ~SHcy~Ш~SOFTcy~Ь~Sacute~Ś~Sc~⪼~Scedil~Ş~Scirc~Ŝ~Scy~С~Sfr~𝔖~ShortDownArrow~↓~ShortLeftArrow~←~ShortRightArrow~→~ShortUpArrow~↑~SmallCircle~∘~Sopf~𝕊~Sqrt~√~Square~□~SquareIntersection~⊓~SquareSubset~⊏~SquareSubsetEqual~⊑~SquareSuperset~⊐~SquareSupersetEqual~⊒~SquareUnion~⊔~Sscr~𝒮~Star~⋆~Sub~⋐~Subset~⋐~SubsetEqual~⊆~Succeeds~≻~SucceedsEqual~⪰~SucceedsSlantEqual~≽~SucceedsTilde~≿~SuchThat~∋~Sum~∑~Sup~⋑~Superset~⊃~SupersetEqual~⊇~Supset~⋑~TRADE~™~TSHcy~Ћ~TScy~Ц~Tab~	~Tcaron~Ť~Tcedil~Ţ~Tcy~Т~Tfr~𝔗~Therefore~∴~ThickSpace~  ~ThinSpace~ ~Tilde~∼~TildeEqual~≃~TildeFullEqual~≅~TildeTilde~≈~Topf~𝕋~TripleDot~⃛~Tscr~𝒯~Tstrok~Ŧ~Uarr~↟~Uarrocir~⥉~Ubrcy~Ў~Ubreve~Ŭ~Ucy~У~Udblac~Ű~Ufr~𝔘~Umacr~Ū~UnderBar~_~UnderBrace~⏟~UnderBracket~⎵~UnderParenthesis~⏝~Union~⋃~UnionPlus~⊎~Uogon~Ų~Uopf~𝕌~UpArrow~↑~UpArrowBar~⤒~UpArrowDownArrow~⇅~UpDownArrow~↕~UpEquilibrium~⥮~UpTee~⊥~UpTeeArrow~↥~Uparrow~⇑~Updownarrow~⇕~UpperLeftArrow~↖~UpperRightArrow~↗~Upsi~ϒ~Uring~Ů~Uscr~𝒰~Utilde~Ũ~VDash~⊫~Vbar~⫫~Vcy~В~Vdash~⊩~Vdashl~⫦~Vee~⋁~Verbar~‖~Vert~‖~VerticalBar~∣~VerticalLine~|~VerticalSeparator~❘~VerticalTilde~≀~VeryThinSpace~ ~Vfr~𝔙~Vopf~𝕍~Vscr~𝒱~Vvdash~⊪~Wcirc~Ŵ~Wedge~⋀~Wfr~𝔚~Wopf~𝕎~Wscr~𝒲~Xfr~𝔛~Xopf~𝕏~Xscr~𝒳~YAcy~Я~YIcy~Ї~YUcy~Ю~Ycirc~Ŷ~Ycy~Ы~Yfr~𝔜~Yopf~𝕐~Yscr~𝒴~ZHcy~Ж~Zacute~Ź~Zcaron~Ž~Zcy~З~Zdot~Ż~ZeroWidthSpace~​~Zfr~ℨ~Zopf~ℤ~Zscr~𝒵~abreve~ă~ac~∾~acE~∾̳~acd~∿~acy~а~af~⁡~afr~𝔞~aleph~ℵ~amacr~ā~amalg~⨿~andand~⩕~andd~⩜~andslope~⩘~andv~⩚~ange~⦤~angle~∠~angmsd~∡~angmsdaa~⦨~angmsdab~⦩~angmsdac~⦪~angmsdad~⦫~angmsdae~⦬~angmsdaf~⦭~angmsdag~⦮~angmsdah~⦯~angrt~∟~angrtvb~⊾~angrtvbd~⦝~angsph~∢~angst~Å~angzarr~⍼~aogon~ą~aopf~𝕒~ap~≈~apE~⩰~apacir~⩯~ape~≊~apid~≋~approx~≈~approxeq~≊~ascr~𝒶~ast~*~asympeq~≍~awconint~∳~awint~⨑~bNot~⫭~backcong~≌~backepsilon~϶~backprime~‵~backsim~∽~backsimeq~⋍~barvee~⊽~barwed~⌅~barwedge~⌅~bbrk~⎵~bbrktbrk~⎶~bcong~≌~bcy~б~becaus~∵~because~∵~bemptyv~⦰~bepsi~϶~bernou~ℬ~beth~ℶ~between~≬~bfr~𝔟~bigcap~⋂~bigcirc~◯~bigcup~⋃~bigodot~⨀~bigoplus~⨁~bigotimes~⨂~bigsqcup~⨆~bigstar~★~bigtriangledown~▽~bigtriangleup~△~biguplus~⨄~bigvee~⋁~bigwedge~⋀~bkarow~⤍~blacklozenge~⧫~blacksquare~▪~blacktriangle~▴~blacktriangledown~▾~blacktriangleleft~◂~blacktriangleright~▸~blank~␣~blk12~▒~blk14~░~blk34~▓~block~█~bne~=⃥~bnequiv~≡⃥~bnot~⌐~bopf~𝕓~bot~⊥~bottom~⊥~bowtie~⋈~boxDL~╗~boxDR~╔~boxDl~╖~boxDr~╓~boxH~═~boxHD~╦~boxHU~╩~boxHd~╤~boxHu~╧~boxUL~╝~boxUR~╚~boxUl~╜~boxUr~╙~boxV~║~boxVH~╬~boxVL~╣~boxVR~╠~boxVh~╫~boxVl~╢~boxVr~╟~boxbox~⧉~boxdL~╕~boxdR~╒~boxdl~┐~boxdr~┌~boxh~─~boxhD~╥~boxhU~╨~boxhd~┬~boxhu~┴~boxminus~⊟~boxplus~⊞~boxtimes~⊠~boxuL~╛~boxuR~╘~boxul~┘~boxur~└~boxv~│~boxvH~╪~boxvL~╡~boxvR~╞~boxvh~┼~boxvl~┤~boxvr~├~bprime~‵~breve~˘~bscr~𝒷~bsemi~⁏~bsim~∽~bsime~⋍~bsol~\\~bsolb~⧅~bsolhsub~⟈~bullet~•~bump~≎~bumpE~⪮~bumpe~≏~bumpeq~≏~cacute~ć~capand~⩄~capbrcup~⩉~capcap~⩋~capcup~⩇~capdot~⩀~caps~∩︀~caret~⁁~caron~ˇ~ccaps~⩍~ccaron~č~ccirc~ĉ~ccups~⩌~ccupssm~⩐~cdot~ċ~cemptyv~⦲~centerdot~·~cfr~𝔠~chcy~ч~check~✓~checkmark~✓~cir~○~cirE~⧃~circeq~≗~circlearrowleft~↺~circlearrowright~↻~circledR~®~circledS~Ⓢ~circledast~⊛~circledcirc~⊚~circleddash~⊝~cire~≗~cirfnint~⨐~cirmid~⫯~cirscir~⧂~clubsuit~♣~colon~:~colone~≔~coloneq~≔~comma~,~commat~@~comp~∁~compfn~∘~complement~∁~complexes~ℂ~congdot~⩭~conint~∮~copf~𝕔~coprod~∐~copysr~℗~cross~✗~cscr~𝒸~csub~⫏~csube~⫑~csup~⫐~csupe~⫒~ctdot~⋯~cudarrl~⤸~cudarrr~⤵~cuepr~⋞~cuesc~⋟~cularr~↶~cularrp~⤽~cupbrcap~⩈~cupcap~⩆~cupcup~⩊~cupdot~⊍~cupor~⩅~cups~∪︀~curarr~↷~curarrm~⤼~curlyeqprec~⋞~curlyeqsucc~⋟~curlyvee~⋎~curlywedge~⋏~curvearrowleft~↶~curvearrowright~↷~cuvee~⋎~cuwed~⋏~cwconint~∲~cwint~∱~cylcty~⌭~dHar~⥥~daleth~ℸ~dash~‐~dashv~⊣~dbkarow~⤏~dblac~˝~dcaron~ď~dcy~д~dd~ⅆ~ddagger~‡~ddarr~⇊~ddotseq~⩷~demptyv~⦱~dfisht~⥿~dfr~𝔡~dharl~⇃~dharr~⇂~diam~⋄~diamond~⋄~diamondsuit~♦~die~¨~digamma~ϝ~disin~⋲~div~÷~divideontimes~⋇~divonx~⋇~djcy~ђ~dlcorn~⌞~dlcrop~⌍~dollar~$~dopf~𝕕~dot~˙~doteq~≐~doteqdot~≑~dotminus~∸~dotplus~∔~dotsquare~⊡~doublebarwedge~⌆~downarrow~↓~downdownarrows~⇊~downharpoonleft~⇃~downharpoonright~⇂~drbkarow~⤐~drcorn~⌟~drcrop~⌌~dscr~𝒹~dscy~ѕ~dsol~⧶~dstrok~đ~dtdot~⋱~dtri~▿~dtrif~▾~duarr~⇵~duhar~⥯~dwangle~⦦~dzcy~џ~dzigrarr~⟿~eDDot~⩷~eDot~≑~easter~⩮~ecaron~ě~ecir~≖~ecolon~≕~ecy~э~edot~ė~ee~ⅇ~efDot~≒~efr~𝔢~eg~⪚~egs~⪖~egsdot~⪘~el~⪙~elinters~⏧~ell~ℓ~els~⪕~elsdot~⪗~emacr~ē~emptyset~∅~emptyv~∅~emsp13~ ~emsp14~ ~eng~ŋ~eogon~ę~eopf~𝕖~epar~⋕~eparsl~⧣~eplus~⩱~epsi~ε~epsiv~ϵ~eqcirc~≖~eqcolon~≕~eqsim~≂~eqslantgtr~⪖~eqslantless~⪕~equals~=~equest~≟~equivDD~⩸~eqvparsl~⧥~erDot~≓~erarr~⥱~escr~ℯ~esdot~≐~esim~≂~excl~!~expectation~ℰ~exponentiale~ⅇ~fallingdotseq~≒~fcy~ф~female~♀~ffilig~ﬃ~fflig~ﬀ~ffllig~ﬄ~ffr~𝔣~filig~ﬁ~fjlig~fj~flat~♭~fllig~ﬂ~fltns~▱~fopf~𝕗~fork~⋔~forkv~⫙~fpartint~⨍~frac13~⅓~frac15~⅕~frac16~⅙~frac18~⅛~frac23~⅔~frac25~⅖~frac35~⅗~frac38~⅜~frac45~⅘~frac56~⅚~frac58~⅝~frac78~⅞~frown~⌢~fscr~𝒻~gE~≧~gEl~⪌~gacute~ǵ~gammad~ϝ~gap~⪆~gbreve~ğ~gcirc~ĝ~gcy~г~gdot~ġ~gel~⋛~geq~≥~geqq~≧~geqslant~⩾~ges~⩾~gescc~⪩~gesdot~⪀~gesdoto~⪂~gesdotol~⪄~gesl~⋛︀~gesles~⪔~gfr~𝔤~gg~≫~ggg~⋙~gimel~ℷ~gjcy~ѓ~gl~≷~glE~⪒~gla~⪥~glj~⪤~gnE~≩~gnap~⪊~gnapprox~⪊~gne~⪈~gneq~⪈~gneqq~≩~gnsim~⋧~gopf~𝕘~grave~`~gscr~ℊ~gsim~≳~gsime~⪎~gsiml~⪐~gtcc~⪧~gtcir~⩺~gtdot~⋗~gtlPar~⦕~gtquest~⩼~gtrapprox~⪆~gtrarr~⥸~gtrdot~⋗~gtreqless~⋛~gtreqqless~⪌~gtrless~≷~gtrsim~≳~gvertneqq~≩︀~gvnE~≩︀~hairsp~ ~half~½~hamilt~ℋ~hardcy~ъ~harrcir~⥈~harrw~↭~hbar~ℏ~hcirc~ĥ~heartsuit~♥~hercon~⊹~hfr~𝔥~hksearow~⤥~hkswarow~⤦~hoarr~⇿~homtht~∻~hookleftarrow~↩~hookrightarrow~↪~hopf~𝕙~horbar~―~hscr~𝒽~hslash~ℏ~hstrok~ħ~hybull~⁃~hyphen~‐~ic~⁣~icy~и~iecy~е~iff~⇔~ifr~𝔦~ii~ⅈ~iiiint~⨌~iiint~∭~iinfin~⧜~iiota~℩~ijlig~ĳ~imacr~ī~imagline~ℐ~imagpart~ℑ~imath~ı~imof~⊷~imped~Ƶ~in~∈~incare~℅~infintie~⧝~inodot~ı~intcal~⊺~integers~ℤ~intercal~⊺~intlarhk~⨗~intprod~⨼~iocy~ё~iogon~į~iopf~𝕚~iprod~⨼~iscr~𝒾~isinE~⋹~isindot~⋵~isins~⋴~isinsv~⋳~isinv~∈~it~⁢~itilde~ĩ~iukcy~і~jcirc~ĵ~jcy~й~jfr~𝔧~jmath~ȷ~jopf~𝕛~jscr~𝒿~jsercy~ј~jukcy~є~kappav~ϰ~kcedil~ķ~kcy~к~kfr~𝔨~kgreen~ĸ~khcy~х~kjcy~ќ~kopf~𝕜~kscr~𝓀~lAarr~⇚~lAtail~⤛~lBarr~⤎~lE~≦~lEg~⪋~lHar~⥢~lacute~ĺ~laemptyv~⦴~lagran~ℒ~langd~⦑~langle~⟨~lap~⪅~larrb~⇤~larrbfs~⤟~larrfs~⤝~larrhk~↩~larrlp~↫~larrpl~⤹~larrsim~⥳~larrtl~↢~lat~⪫~latail~⤙~late~⪭~lates~⪭︀~lbarr~⤌~lbbrk~❲~lbrace~{~lbrack~[~lbrke~⦋~lbrksld~⦏~lbrkslu~⦍~lcaron~ľ~lcedil~ļ~lcub~{~lcy~л~ldca~⤶~ldquor~„~ldrdhar~⥧~ldrushar~⥋~ldsh~↲~leftarrow~←~leftarrowtail~↢~leftharpoondown~↽~leftharpoonup~↼~leftleftarrows~⇇~leftrightarrow~↔~leftrightarrows~⇆~leftrightharpoons~⇋~leftrightsquigarrow~↭~leftthreetimes~⋋~leg~⋚~leq~≤~leqq~≦~leqslant~⩽~les~⩽~lescc~⪨~lesdot~⩿~lesdoto~⪁~lesdotor~⪃~lesg~⋚︀~lesges~⪓~lessapprox~⪅~lessdot~⋖~lesseqgtr~⋚~lesseqqgtr~⪋~lessgtr~≶~lesssim~≲~lfisht~⥼~lfr~𝔩~lg~≶~lgE~⪑~lhard~↽~lharu~↼~lharul~⥪~lhblk~▄~ljcy~љ~ll~≪~llarr~⇇~llcorner~⌞~llhard~⥫~lltri~◺~lmidot~ŀ~lmoust~⎰~lmoustache~⎰~lnE~≨~lnap~⪉~lnapprox~⪉~lne~⪇~lneq~⪇~lneqq~≨~lnsim~⋦~loang~⟬~loarr~⇽~lobrk~⟦~longleftarrow~⟵~longleftrightarrow~⟷~longmapsto~⟼~longrightarrow~⟶~looparrowleft~↫~looparrowright~↬~lopar~⦅~lopf~𝕝~loplus~⨭~lotimes~⨴~lowbar~_~lozenge~◊~lozf~⧫~lpar~(~lparlt~⦓~lrarr~⇆~lrcorner~⌟~lrhar~⇋~lrhard~⥭~lrtri~⊿~lscr~𝓁~lsh~↰~lsim~≲~lsime~⪍~lsimg~⪏~lsqb~[~lsquor~‚~lstrok~ł~ltcc~⪦~ltcir~⩹~ltdot~⋖~lthree~⋋~ltimes~⋉~ltlarr~⥶~ltquest~⩻~ltrPar~⦖~ltri~◃~ltrie~⊴~ltrif~◂~lurdshar~⥊~luruhar~⥦~lvertneqq~≨︀~lvnE~≨︀~mDDot~∺~male~♂~malt~✠~maltese~✠~map~↦~mapsto~↦~mapstodown~↧~mapstoleft~↤~mapstoup~↥~marker~▮~mcomma~⨩~mcy~м~measuredangle~∡~mfr~𝔪~mho~℧~mid~∣~midast~*~midcir~⫰~minusb~⊟~minusd~∸~minusdu~⨪~mlcp~⫛~mldr~…~mnplus~∓~models~⊧~mopf~𝕞~mp~∓~mscr~𝓂~mstpos~∾~multimap~⊸~mumap~⊸~nGg~⋙̸~nGt~≫⃒~nGtv~≫̸~nLeftarrow~⇍~nLeftrightarrow~⇎~nLl~⋘̸~nLt~≪⃒~nLtv~≪̸~nRightarrow~⇏~nVDash~⊯~nVdash~⊮~nacute~ń~nang~∠⃒~nap~≉~napE~⩰̸~napid~≋̸~napos~ŉ~napprox~≉~natur~♮~natural~♮~naturals~ℕ~nbump~≎̸~nbumpe~≏̸~ncap~⩃~ncaron~ň~ncedil~ņ~ncong~≇~ncongdot~⩭̸~ncup~⩂~ncy~н~neArr~⇗~nearhk~⤤~nearr~↗~nearrow~↗~nedot~≐̸~nequiv~≢~nesear~⤨~nesim~≂̸~nexist~∄~nexists~∄~nfr~𝔫~ngE~≧̸~nge~≱~ngeq~≱~ngeqq~≧̸~ngeqslant~⩾̸~nges~⩾̸~ngsim~≵~ngt~≯~ngtr~≯~nhArr~⇎~nharr~↮~nhpar~⫲~nis~⋼~nisd~⋺~niv~∋~njcy~њ~nlArr~⇍~nlE~≦̸~nlarr~↚~nldr~‥~nle~≰~nleftarrow~↚~nleftrightarrow~↮~nleq~≰~nleqq~≦̸~nleqslant~⩽̸~nles~⩽̸~nless~≮~nlsim~≴~nlt~≮~nltri~⋪~nltrie~⋬~nmid~∤~nopf~𝕟~notinE~⋹̸~notindot~⋵̸~notinva~∉~notinvb~⋷~notinvc~⋶~notni~∌~notniva~∌~notnivb~⋾~notnivc~⋽~npar~∦~nparallel~∦~nparsl~⫽⃥~npart~∂̸~npolint~⨔~npr~⊀~nprcue~⋠~npre~⪯̸~nprec~⊀~npreceq~⪯̸~nrArr~⇏~nrarr~↛~nrarrc~⤳̸~nrarrw~↝̸~nrightarrow~↛~nrtri~⋫~nrtrie~⋭~nsc~⊁~nsccue~⋡~nsce~⪰̸~nscr~𝓃~nshortmid~∤~nshortparallel~∦~nsim~≁~nsime~≄~nsimeq~≄~nsmid~∤~nspar~∦~nsqsube~⋢~nsqsupe~⋣~nsubE~⫅̸~nsube~⊈~nsubset~⊂⃒~nsubseteq~⊈~nsubseteqq~⫅̸~nsucc~⊁~nsucceq~⪰̸~nsup~⊅~nsupE~⫆̸~nsupe~⊉~nsupset~⊃⃒~nsupseteq~⊉~nsupseteqq~⫆̸~ntgl~≹~ntlg~≸~ntriangleleft~⋪~ntrianglelefteq~⋬~ntriangleright~⋫~ntrianglerighteq~⋭~num~#~numero~№~numsp~ ~nvDash~⊭~nvHarr~⤄~nvap~≍⃒~nvdash~⊬~nvge~≥⃒~nvgt~>⃒~nvinfin~⧞~nvlArr~⤂~nvle~≤⃒~nvlt~<⃒~nvltrie~⊴⃒~nvrArr~⤃~nvrtrie~⊵⃒~nvsim~∼⃒~nwArr~⇖~nwarhk~⤣~nwarr~↖~nwarrow~↖~nwnear~⤧~oS~Ⓢ~oast~⊛~ocir~⊚~ocy~о~odash~⊝~odblac~ő~odiv~⨸~odot~⊙~odsold~⦼~ofcir~⦿~ofr~𝔬~ogon~˛~ogt~⧁~ohbar~⦵~ohm~Ω~oint~∮~olarr~↺~olcir~⦾~olcross~⦻~olt~⧀~omacr~ō~omid~⦶~ominus~⊖~oopf~𝕠~opar~⦷~operp~⦹~orarr~↻~ord~⩝~order~ℴ~orderof~ℴ~origof~⊶~oror~⩖~orslope~⩗~orv~⩛~oscr~ℴ~osol~⊘~otimesas~⨶~ovbar~⌽~par~∥~parallel~∥~parsim~⫳~parsl~⫽~pcy~п~percnt~%~period~.~pertenk~‱~pfr~𝔭~phiv~ϕ~phmmat~ℳ~phone~☎~pitchfork~⋔~planck~ℏ~planckh~ℎ~plankv~ℏ~plus~+~plusacir~⨣~plusb~⊞~pluscir~⨢~plusdo~∔~plusdu~⨥~pluse~⩲~plussim~⨦~plustwo~⨧~pm~±~pointint~⨕~popf~𝕡~pr~≺~prE~⪳~prap~⪷~prcue~≼~pre~⪯~prec~≺~precapprox~⪷~preccurlyeq~≼~preceq~⪯~precnapprox~⪹~precneqq~⪵~precnsim~⋨~precsim~≾~primes~ℙ~prnE~⪵~prnap~⪹~prnsim~⋨~profalar~⌮~profline~⌒~profsurf~⌓~propto~∝~prsim~≾~prurel~⊰~pscr~𝓅~puncsp~ ~qfr~𝔮~qint~⨌~qopf~𝕢~qprime~⁗~qscr~𝓆~quaternions~ℍ~quatint~⨖~quest~?~questeq~≟~rAarr~⇛~rAtail~⤜~rBarr~⤏~rHar~⥤~race~∽̱~racute~ŕ~raemptyv~⦳~rangd~⦒~range~⦥~rangle~⟩~rarrap~⥵~rarrb~⇥~rarrbfs~⤠~rarrc~⤳~rarrfs~⤞~rarrhk~↪~rarrlp~↬~rarrpl~⥅~rarrsim~⥴~rarrtl~↣~rarrw~↝~ratail~⤚~ratio~∶~rationals~ℚ~rbarr~⤍~rbbrk~❳~rbrace~}~rbrack~]~rbrke~⦌~rbrksld~⦎~rbrkslu~⦐~rcaron~ř~rcedil~ŗ~rcub~}~rcy~р~rdca~⤷~rdldhar~⥩~rdquor~”~rdsh~↳~realine~ℛ~realpart~ℜ~reals~ℝ~rect~▭~rfisht~⥽~rfr~𝔯~rhard~⇁~rharu~⇀~rharul~⥬~rhov~ϱ~rightarrow~→~rightarrowtail~↣~rightharpoondown~⇁~rightharpoonup~⇀~rightleftarrows~⇄~rightleftharpoons~⇌~rightrightarrows~⇉~rightsquigarrow~↝~rightthreetimes~⋌~ring~˚~risingdotseq~≓~rlarr~⇄~rlhar~⇌~rmoust~⎱~rmoustache~⎱~rnmid~⫮~roang~⟭~roarr~⇾~robrk~⟧~ropar~⦆~ropf~𝕣~roplus~⨮~rotimes~⨵~rpar~)~rpargt~⦔~rppolint~⨒~rrarr~⇉~rscr~𝓇~rsh~↱~rsqb~]~rsquor~’~rthree~⋌~rtimes~⋊~rtri~▹~rtrie~⊵~rtrif~▸~rtriltri~⧎~ruluhar~⥨~rx~℞~sacute~ś~sc~≻~scE~⪴~scap~⪸~sccue~≽~sce~⪰~scedil~ş~scirc~ŝ~scnE~⪶~scnap~⪺~scnsim~⋩~scpolint~⨓~scsim~≿~scy~с~sdotb~⊡~sdote~⩦~seArr~⇘~searhk~⤥~searr~↘~searrow~↘~semi~;~seswar~⤩~setminus~∖~setmn~∖~sext~✶~sfr~𝔰~sfrown~⌢~sharp~♯~shchcy~щ~shcy~ш~shortmid~∣~shortparallel~∥~sigmav~ς~simdot~⩪~sime~≃~simeq~≃~simg~⪞~simgE~⪠~siml~⪝~simlE~⪟~simne~≆~simplus~⨤~simrarr~⥲~slarr~←~smallsetminus~∖~smashp~⨳~smeparsl~⧤~smid~∣~smile~⌣~smt~⪪~smte~⪬~smtes~⪬︀~softcy~ь~sol~/~solb~⧄~solbar~⌿~sopf~𝕤~spadesuit~♠~spar~∥~sqcap~⊓~sqcaps~⊓︀~sqcup~⊔~sqcups~⊔︀~sqsub~⊏~sqsube~⊑~sqsubset~⊏~sqsubseteq~⊑~sqsup~⊐~sqsupe~⊒~sqsupset~⊐~sqsupseteq~⊒~squ~□~square~□~squarf~▪~squf~▪~srarr~→~sscr~𝓈~ssetmn~∖~ssmile~⌣~sstarf~⋆~star~☆~starf~★~straightepsilon~ϵ~straightphi~ϕ~strns~¯~subE~⫅~subdot~⪽~subedot~⫃~submult~⫁~subnE~⫋~subne~⊊~subplus~⪿~subrarr~⥹~subset~⊂~subseteq~⊆~subseteqq~⫅~subsetneq~⊊~subsetneqq~⫋~subsim~⫇~subsub~⫕~subsup~⫓~succ~≻~succapprox~⪸~succcurlyeq~≽~succeq~⪰~succnapprox~⪺~succneqq~⪶~succnsim~⋩~succsim~≿~sung~♪~supE~⫆~supdot~⪾~supdsub~⫘~supedot~⫄~suphsol~⟉~suphsub~⫗~suplarr~⥻~supmult~⫂~supnE~⫌~supne~⊋~supplus~⫀~supset~⊃~supseteq~⊇~supseteqq~⫆~supsetneq~⊋~supsetneqq~⫌~supsim~⫈~supsub~⫔~supsup~⫖~swArr~⇙~swarhk~⤦~swarr~↙~swarrow~↙~swnwar~⤪~target~⌖~tbrk~⎴~tcaron~ť~tcedil~ţ~tcy~т~tdot~⃛~telrec~⌕~tfr~𝔱~therefore~∴~thetav~ϑ~thickapprox~≈~thicksim~∼~thkap~≈~thksim~∼~timesb~⊠~timesbar~⨱~timesd~⨰~tint~∭~toea~⤨~top~⊤~topbot~⌶~topcir~⫱~topf~𝕥~topfork~⫚~tosa~⤩~tprime~‴~triangle~▵~triangledown~▿~triangleleft~◃~trianglelefteq~⊴~triangleq~≜~triangleright~▹~trianglerighteq~⊵~tridot~◬~trie~≜~triminus~⨺~triplus~⨹~trisb~⧍~tritime~⨻~trpezium~⏢~tscr~𝓉~tscy~ц~tshcy~ћ~tstrok~ŧ~twixt~≬~twoheadleftarrow~↞~twoheadrightarrow~↠~uHar~⥣~ubrcy~ў~ubreve~ŭ~ucy~у~udarr~⇅~udblac~ű~udhar~⥮~ufisht~⥾~ufr~𝔲~uharl~↿~uharr~↾~uhblk~▀~ulcorn~⌜~ulcorner~⌜~ulcrop~⌏~ultri~◸~umacr~ū~uogon~ų~uopf~𝕦~uparrow~↑~updownarrow~↕~upharpoonleft~↿~upharpoonright~↾~uplus~⊎~upsi~υ~upuparrows~⇈~urcorn~⌝~urcorner~⌝~urcrop~⌎~uring~ů~urtri~◹~uscr~𝓊~utdot~⋰~utilde~ũ~utri~▵~utrif~▴~uuarr~⇈~uwangle~⦧~vArr~⇕~vBar~⫨~vBarv~⫩~vDash~⊨~vangrt~⦜~varepsilon~ϵ~varkappa~ϰ~varnothing~∅~varphi~ϕ~varpi~ϖ~varpropto~∝~varr~↕~varrho~ϱ~varsigma~ς~varsubsetneq~⊊︀~varsubsetneqq~⫋︀~varsupsetneq~⊋︀~varsupsetneqq~⫌︀~vartheta~ϑ~vartriangleleft~⊲~vartriangleright~⊳~vcy~в~vdash~⊢~vee~∨~veebar~⊻~veeeq~≚~vellip~⋮~verbar~|~vert~|~vfr~𝔳~vltri~⊲~vnsub~⊂⃒~vnsup~⊃⃒~vopf~𝕧~vprop~∝~vrtri~⊳~vscr~𝓋~vsubnE~⫋︀~vsubne~⊊︀~vsupnE~⫌︀~vsupne~⊋︀~vzigzag~⦚~wcirc~ŵ~wedbar~⩟~wedge~∧~wedgeq~≙~wfr~𝔴~wopf~𝕨~wp~℘~wr~≀~wreath~≀~wscr~𝓌~xcap~⋂~xcirc~◯~xcup~⋃~xdtri~▽~xfr~𝔵~xhArr~⟺~xharr~⟷~xlArr~⟸~xlarr~⟵~xmap~⟼~xnis~⋻~xodot~⨀~xopf~𝕩~xoplus~⨁~xotime~⨂~xrArr~⟹~xrarr~⟶~xscr~𝓍~xsqcup~⨆~xuplus~⨄~xutri~△~xvee~⋁~xwedge~⋀~yacy~я~ycirc~ŷ~ycy~ы~yfr~𝔶~yicy~ї~yopf~𝕪~yscr~𝓎~yucy~ю~zacute~ź~zcaron~ž~zcy~з~zdot~ż~zeetrf~ℨ~zfr~𝔷~zhcy~ж~zigrarr~⇝~zopf~𝕫~zscr~𝓏~~AMP~&~COPY~©~GT~>~LT~<~QUOT~"~REG~®', io.html4);
var oo$1 = function() {
  return oo$1 = Object.assign || function(i) {
    for (var o, e = 1, n = arguments.length; e < n; e++) {
      o = arguments[e];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (i[a] = o[a]);
    }
    return i;
  }, oo$1.apply(this, arguments);
};
oo$1(oo$1({}, io), { all: io.html5 });
var Se$2 = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
var Je$2 = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
var nu = { xml: { strict: Se$2, attribute: Je$2, body: Ze$2.xml }, html4: { strict: Se$2, attribute: Je$2, body: Ze$2.html4 }, html5: { strict: Se$2, attribute: Je$2, body: Ze$2.html5 } };
oo$1(oo$1({}, nu), { all: nu.html5 });
pu();
const au = (i, o) => Object.hasOwn(i, o);
const Ce$1 = (i, o) => Object.assign(i, o);
const Xe$2 = (i, o, e) => {
  if (i.length === 0) return [];
  let n = 0;
  const a = Ct$1.exec(i[0]);
  a && (n = a[1].length);
  const u = String.raw`(\r\n|\r|\n).{0,${n}}`, g = new RegExp(u, "g"), t = o ? i.slice(1) : i, { newline: s, trimLeadingNewline: h, trimTrailingNewline: r } = e, l = typeof s == "string", v = t.length, y = Array.from({ length: v });
  for (let c = 0; c < v; c++) {
    let b = t[c];
    b = b.replace(g, "$1"), c === 0 && h && (b = b.replace(Zt$1, "")), c === v - 1 && r && (b = b.replace(St$2, "")), l && (b = b.replaceAll(Ht$1, s)), y[c] = b;
  }
  return y;
};
const LY = (i, o) => {
  const e = Array.from({ length: i.length + o.length });
  let n = 0;
  const a = i.length;
  for (; n < a - 1; n++) e[n * 2] = i[n], e[n * 2 + 1] = String(o[n]);
  return e[n * 2] = i[n], e.join("");
};
const ZY = (i) => au(i, "raw") && au(i, "length");
const SY = /* @__PURE__ */ new WeakMap();
const xd = (i) => {
  const o = i.cache !== false, e = o ? i.cacheStore ?? SY : void 0, n = i.newline !== void 0;
  function a(u, ...g) {
    if (ZY(u)) {
      const t = u, s = g.length;
      if (t.length === 1 && t[0] === "") return "";
      if (s === 0) {
        if (o && e && !n) {
          const v = e.get(t);
          if (v) return v[0];
        }
        const l = Xe$2(t, false, i);
        return o && e && e.set(t, l), l[0];
      }
      const h = (g[0] === a || g[0] === JY) && Xt$1.test(t[0]) && Jt$1.test(t[1]);
      let r;
      return o && e && !n && (r = e.get(t)), r || (r = Xe$2(t, h, i), o && e && e.set(t, r)), LY(r, h ? g.slice(1) : g);
    }
    return xd(Ce$1(Ce$1({}, i), u));
  }
  return Ce$1(a, { string(u) {
    return u === "" || !u ? "" : Xe$2([u], false, i)[0];
  } });
};
const JY = xd({ cache: true, newline: null, trimLeadingNewline: true, trimTrailingNewline: true });
const CY = ["\0", "", "", "", "", "", "", "\x07", "\b", "	", `
`, "\v", "\f", "\r", "", "", "", "", "", "", "", "", "", "", "", "", "", "\x1B", "", "", "", "", " ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, " ", "!", "C/", "PS", "$?", "Y=", "|", "SS", '"', "(c)", "a", "<<", "!", void 0, "(r)", "-", "deg", "+-", "2", "3", "'", "u", "P", "*", ",", "1", "o", ">>", "1/4", "1/2", "3/4", "?", "A", "A", "A", "A", "Ae", "Aa", "AE", "C", "E", "E", "E", "E", "I", "I", "I", "I", "D", "N", "O", "O", "O", "O", "Oe", "x", "Oe", "U", "U", "U", "Ue", "U", "Th", "ss", "a", "a", "a", "a", "ae", "aa", "ae", "c", "e", "e", "e", "e", "i", "i", "i", "i", "d", "n", "o", "o", "o", "o", "oe", "/", "oe", "u", "u", "u", "ue", "y", "th", "y"];
const XY = Object.freeze(CY);
const HY = ["A", "a", "A", "a", "A", "a", "C", "c", "C", "c", "C", "c", "C", "c", "D", "d", "D", "d", "E", "e", "E", "e", "E", "e", "E", "e", "E", "e", "G", "g", "G", "g", "G", "g", "G", "g", "H", "h", "H", "h", "I", "i", "I", "i", "I", "i", "I", "i", "I", "i", "IJ", "ij", "J", "j", "K", "k", "k", "L", "l", "L", "l", "L", "l", "L", "l", "L", "l", "N", "n", "N", "n", "N", "n", "'n", "NG", "ng", "O", "o", "O", "o", "O", "o", "OE", "oe", "R", "r", "R", "r", "R", "r", "S", "s", "S", "s", "S", "s", "S", "s", "T", "t", "T", "t", "T", "t", "U", "u", "U", "u", "U", "u", "U", "u", "U", "u", "U", "u", "W", "w", "Y", "y", "Y", "Z", "z", "Z", "z", "Z", "z", "s", "b", "B", "B", "b", "6", "6", "O", "C", "c", "D", "D", "D", "d", "d", "3", "@", "E", "F", "f", "G", "G", "hv", "I", "I", "K", "k", "l", "l", "W", "N", "n", "O", "O", "o", "OI", "oi", "P", "p", "YR", "2", "2", "SH", "sh", "t", "T", "t", "T", "U", "u", "Y", "V", "Y", "y", "Z", "z", "ZH", "ZH", "zh", "zh", "2", "5", "5", "ts", "w", "|", "||", "|=", "!", "DZ", "Dz", "dz", "LJ", "Lj", "lj", "NJ", "Nj", "nj", "A", "a", "I", "i", "O", "o", "U", "u", "U", "u", "U", "u", "U", "u", "U", "u", "@", "A", "a", "A", "a", "AE", "ae", "G", "g", "G", "g", "K", "k", "O", "o", "O", "o", "ZH", "zh", "j", "DZ", "D", "dz", "G", "g", "HV", "W", "N", "n", "A", "a", "AE", "ae", "O", "o"];
const DY = Object.freeze(HY);
const TY = ["A", "a", "A", "a", "E", "e", "E", "e", "I", "i", "I", "i", "O", "o", "O", "o", "R", "r", "R", "r", "U", "u", "U", "u", "S", "s", "T", "t", "Y", "y", "H", "h", "N", "d", "OU", "ou", "Z", "z", "A", "a", "E", "e", "O", "o", "O", "o", "O", "o", "O", "o", "Y", "y", "l", "n", "t", "j", "db", "qp", "A", "C", "c", "L", "T", "s", "z", "?", "?", "B", "U", "V", "E", "e", "J", "j", "Q", "q", "R", "r", "Y", "y", "a", "a", "a", "b", "o", "c", "d", "d", "e", "@", "@", "e", "e", "e", "e", "j", "g", "g", "g", "g", "u", "Y", "h", "h", "i", "i", "I", "l", "l", "l", "lZ", "W", "W", "m", "n", "n", "n", "o", "OE", "O", "F", "R", "R", "R", "R", "r", "r", "R", "R", "R", "s", "S", "j", "S", "S", "t", "t", "U", "U", "v", "^", "W", "Y", "Y", "z", "z", "Z", "Z", "?", "?", "?", "C", "@", "B", "E", "G", "H", "j", "k", "L", "q", "?", "?", "dz", "dZ", "dz", "ts", "tS", "tC", "fN", "ls", "lz", "WW", "]]", "h", "h", "k", "h", "j", "r", "r", "r", "r", "w", "y", "'", '"', "`", "'", "`", "`", "'", "?", "?", "<", ">", "^", "V", "^", "V", "'", "-", "/", "\\", ",", "_", "\\", "/", ":", ".", "`", "'", "^", "V", "+", "-", "V", ".", "@", ",", "~", '"', "R", "X", "G", "l", "s", "x", "?", void 0, void 0, void 0, void 0, void 0, void 0, void 0, "V", "=", '"', void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const BY = Object.freeze(TY);
const MY = Object.freeze(QY);
const NY = Object.freeze(GY);
const WY = Object.freeze(xY);
const FY = Object.freeze(PY);
const RY = Object.freeze(KY);
const _Y = Object.freeze(AY);
const zY = Object.freeze(OY);
const $Y = Object.freeze(EY);
const IY = Object.freeze(qY);
const VY = Object.freeze(UY);
const ok = Object.freeze(ik);
const nk = Object.freeze(ek);
const uk = Object.freeze(ak);
const dk = Object.freeze(gk);
const sk = Object.freeze(tk);
const rk = Object.freeze(hk);
const vk = Object.freeze(lk);
const ck = Object.freeze(yk);
const pk = Object.freeze(bk);
const jk = Object.freeze(wk);
const fk = Object.freeze(mk);
const Yk = ["A", "a", "B", "b", "B", "b", "B", "b", "C", "c", "D", "d", "D", "d", "D", "d", "D", "d", "D", "d", "E", "e", "E", "e", "E", "e", "E", "e", "E", "e", "F", "f", "G", "g", "H", "h", "H", "h", "H", "h", "H", "h", "H", "h", "I", "i", "I", "i", "K", "k", "K", "k", "K", "k", "L", "l", "L", "l", "L", "l", "L", "l", "M", "m", "M", "m", "M", "m", "N", "n", "N", "n", "N", "n", "N", "n", "O", "o", "O", "o", "O", "o", "O", "o", "P", "p", "P", "p", "R", "r", "R", "r", "R", "r", "R", "r", "S", "s", "S", "s", "S", "s", "S", "s", "S", "s", "T", "t", "T", "t", "T", "t", "T", "t", "U", "u", "U", "u", "U", "u", "U", "u", "U", "u", "V", "v", "V", "v", "W", "w", "W", "w", "W", "w", "W", "w", "W", "w", "X", "x", "X", "x", "Y", "y", "Z", "z", "Z", "z", "Z", "z", "h", "t", "w", "y", "a", "S", void 0, void 0, void 0, void 0, "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "E", "e", "E", "e", "E", "e", "E", "e", "E", "e", "E", "e", "E", "e", "E", "e", "I", "i", "I", "i", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "U", "u", "U", "u", "U", "u", "U", "u", "U", "u", "U", "u", "U", "u", "Y", "y", "Y", "y", "Y", "y", "Y", "y", void 0, void 0, void 0, void 0, void 0, void 0];
const kk = Object.freeze(Yk);
const Lk = ["a", "a", "a", "a", "a", "a", "a", "a", "A", "A", "A", "A", "A", "A", "A", "A", "e", "e", "e", "e", "e", "e", void 0, void 0, "E", "E", "E", "E", "E", "E", void 0, void 0, "e", "e", "e", "e", "e", "e", "e", "e", "E", "E", "E", "E", "E", "E", "E", "E", "i", "i", "i", "i", "i", "i", "i", "i", "I", "I", "I", "I", "I", "I", "I", "I", "o", "o", "o", "o", "o", "o", void 0, void 0, "O", "O", "O", "O", "O", "O", void 0, void 0, "u", "u", "u", "u", "u", "u", "u", "u", void 0, "U", void 0, "U", void 0, "U", void 0, "U", "o", "o", "o", "o", "o", "o", "o", "o", "O", "O", "O", "O", "O", "O", "O", "O", "a", "a", "e", "e", "e", "e", "i", "i", "o", "o", "u", "u", "o", "o", void 0, void 0, "a", "a", "a", "a", "a", "a", "a", "a", "A", "A", "A", "A", "A", "A", "A", "A", "e", "e", "e", "e", "e", "e", "e", "e", "E", "E", "E", "E", "E", "E", "E", "E", "o", "o", "o", "o", "o", "o", "o", "o", "O", "O", "O", "O", "O", "O", "O", "O", "a", "a", "a", "a", "a", void 0, "a", "a", "A", "A", "A", "A", "A", "'", "i", "'", "~", '"~', "e", "e", "e", void 0, "e", "e", "E", "E", "E", "E", "E", "'`", "''", "'~", "i", "i", "i", "i", void 0, void 0, "i", "i", "I", "I", "I", "I", void 0, "`'", "`'", "`~", "u", "u", "u", "u", "R", "R", "u", "u", "U", "U", "U", "U", "R", '"`', `"'`, "`", void 0, void 0, "o", "o", "o", void 0, "o", "o", "O", "O", "O", "O", "O", "'", "`", void 0];
const Zk = Object.freeze(Lk);
const Sk = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", void 0, void 0, void 0, void 0, "-", "-", "-", "-", "--", "--", "||", "_", "'", "'", ",", "'", '"', '"', ",,", '"', "+", "++", "*", "*>", ".", "..", "...", ".", `
`, `

`, void 0, void 0, void 0, void 0, void 0, " ", "%0", "%00", "'", "''", "'''", "`", "``", "```", "^", "<", ">", "*", "!!", "!?", "-", "_", "-", "^", "***", "--", "/", "-[", "]-", void 0, "?!", "!?", "7", "PP", "(]", "[)", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "0", void 0, void 0, void 0, "4", "5", "6", "7", "8", "9", "+", "-", "=", "(", ")", "n", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "=", "(", ")", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "ECU", "CL", "Cr", "FF", "L", "mil", "N", "Pts", "Rs", "W", "NS", "D", "EU", "K", "T", "Dr", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const Jk = Object.freeze(Sk);
const Xk = Object.freeze(Ck);
const Dk = Object.freeze(Hk);
const Tk = ["-", "-", "|", "|", "-", "-", "|", "|", "-", "-", "|", "|", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "-", "-", "|", "|", "-", "|", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "/", "\\", "X", "-", "|", "-", "|", "-", "|", "-", "|", "-", "|", "-", "|", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "-", "|", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "^", "^", "^", "^", ">", ">", ">", ">", ">", ">", "V", "V", "V", "V", "<", "<", "<", "<", "<", "<", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "#", "#", "#", "#", "#", "^", "^", "^", "O", "#", "#", "#", "#", "#", "#", "#", "#", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const Bk = Object.freeze(Tk);
const Mk = Object.freeze(Qk);
const Nk = Object.freeze(Gk);
const Wk = Object.freeze(xk);
const Fk = Object.freeze(Pk);
const Rk = Object.freeze(Kk);
const _k = Object.freeze(Ak);
const zk = Object.freeze(Ok);
const $k = Object.freeze(Ek);
const Ik = Object.freeze(qk);
const Vk = Object.freeze(Uk);
const oL = Object.freeze(iL);
const nL = Object.freeze(eL);
const uL = Object.freeze(aL);
const dL = Object.freeze(gL);
const sL = Object.freeze(tL);
const rL = Object.freeze(hL);
const vL = Object.freeze(lL);
const cL = Object.freeze(yL);
const pL = Object.freeze(bL);
const jL = Object.freeze(wL);
const fL = Object.freeze(mL);
const kL = Object.freeze(YL);
const ZL = Object.freeze(LL);
const JL = Object.freeze(SL);
const XL = Object.freeze(CL);
const DL = Object.freeze(HL);
const BL = Object.freeze(TL);
const ML = Object.freeze(QL);
const NL = Object.freeze(GL);
const WL = Object.freeze(xL);
const FL = Object.freeze(PL);
const RL = Object.freeze(KL);
const _L = Object.freeze(AL);
const zL = Object.freeze(OL);
const $L = Object.freeze(EL);
const IL = Object.freeze(qL);
const VL = Object.freeze(UL);
const oZ = Object.freeze(iZ);
const nZ = Object.freeze(eZ);
const uZ = Object.freeze(aZ);
const dZ = Object.freeze(gZ);
const sZ = Object.freeze(tZ);
const rZ = Object.freeze(hZ);
const vZ = Object.freeze(lZ);
const cZ = Object.freeze(yZ);
const pZ = Object.freeze(bZ);
const jZ = Object.freeze(wZ);
const fZ = Object.freeze(mZ);
const kZ = Object.freeze(YZ);
const ZZ = Object.freeze(LZ);
const JZ = Object.freeze(SZ);
const XZ = Object.freeze(CZ);
const DZ = Object.freeze(HZ);
const BZ = Object.freeze(TZ);
const MZ = Object.freeze(QZ);
const NZ = Object.freeze(GZ);
const WZ = Object.freeze(xZ);
const FZ = Object.freeze(PZ);
const RZ = Object.freeze(KZ);
const _Z = Object.freeze(AZ);
const zZ = Object.freeze(OZ);
const $Z = Object.freeze(EZ);
const IZ = Object.freeze(qZ);
const VZ = Object.freeze(UZ);
const o1 = Object.freeze(i1);
const n1 = Object.freeze(e1);
const u1 = Object.freeze(a1);
const d1 = Object.freeze(g1);
const s1 = Object.freeze(t1);
const r1 = Object.freeze(h1);
const v1 = Object.freeze(l1);
const c1 = Object.freeze(y1);
const p1 = Object.freeze(b1);
const j1 = Object.freeze(w1);
const f1 = Object.freeze(m1);
const k1 = Object.freeze(Y1);
const Z1 = Object.freeze(L1);
const J1 = Object.freeze(S1);
const X1 = Object.freeze(C1);
const D1 = Object.freeze(H1);
const B1 = Object.freeze(T1);
const M1 = Object.freeze(Q1);
const N1 = Object.freeze(G1);
const W1 = Object.freeze(x1);
const F1 = Object.freeze(P1);
const R1 = Object.freeze(K1);
const _1 = Object.freeze(A1);
const z1 = Object.freeze(O1);
const $1 = Object.freeze(E1);
const I1 = Object.freeze(q1);
const V1 = Object.freeze(U1);
const oS = Object.freeze(iS);
const nS = Object.freeze(eS);
const uS = Object.freeze(aS);
const dS = Object.freeze(gS);
const sS = Object.freeze(tS);
const rS = Object.freeze(hS);
const vS = Object.freeze(lS);
const cS = Object.freeze(yS);
const pS = Object.freeze(bS);
const jS = Object.freeze(wS);
const fS = Object.freeze(mS);
const kS = Object.freeze(YS);
const ZS = Object.freeze(LS);
const JS = Object.freeze(SS);
const XS = Object.freeze(CS);
const DS = Object.freeze(HS);
const BS = Object.freeze(TS);
const MS = Object.freeze(QS);
const NS = Object.freeze(GS);
const WS = Object.freeze(xS);
const FS = Object.freeze(PS);
const RS = Object.freeze(KS);
const _S = Object.freeze(AS);
const zS = Object.freeze(OS);
const $S = Object.freeze(ES);
const IS = Object.freeze(qS);
const VS = Object.freeze(US);
const oJ = Object.freeze(iJ);
const nJ = Object.freeze(eJ);
const uJ = Object.freeze(aJ);
const dJ = Object.freeze(gJ);
const sJ = Object.freeze(tJ);
const rJ = Object.freeze(hJ);
const vJ = Object.freeze(lJ);
const cJ = Object.freeze(yJ);
const pJ = Object.freeze(bJ);
const jJ = Object.freeze(wJ);
const fJ = Object.freeze(mJ);
const kJ = Object.freeze(YJ);
const ZJ = Object.freeze(LJ);
const JJ = Object.freeze(SJ);
const XJ = Object.freeze(CJ);
const DJ = Object.freeze(HJ);
const BJ = Object.freeze(TJ);
const MJ = Object.freeze(QJ);
const NJ = Object.freeze(GJ);
const WJ = Object.freeze(xJ);
const FJ = Object.freeze(PJ);
const RJ = Object.freeze(KJ);
const _J = Object.freeze(AJ);
const zJ = Object.freeze(OJ);
const $J = Object.freeze(EJ);
const IJ = Object.freeze(qJ);
const VJ = Object.freeze(UJ);
const iC = [void 0, "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~", void 0, void 0, ".", "[", "]", ",", "*", "wo", "a", "i", "u", "e", "o", "ya", "yu", "yo", "tu", "+", "a", "i", "u", "e", "o", "ka", "ki", "ku", "ke", "ko", "sa", "si", "su", "se", "so", "ta", "ti", "tu", "te", "to", "na", "ni", "nu", "ne", "no", "ha", "hi", "hu", "he", "ho", "ma", "mi", "mu", "me", "mo", "ya", "yu", "yo", "ra", "ri", "ru", "re", "ro", "wa", "n", ":", ";", void 0, "g", "gg", "gs", "n", "nj", "nh", "d", "dd", "r", "lg", "lm", "lb", "ls", "lt", "lp", "rh", "m", "b", "bb", "bs", "s", "ss", void 0, "j", "jj", "c", "k", "t", "p", "h", void 0, void 0, void 0, "a", "ae", "ya", "yae", "eo", "e", void 0, void 0, "yeo", "ye", "o", "wa", "wae", "oe", void 0, void 0, "yo", "u", "weo", "we", "wi", "yu", void 0, void 0, "eu", "yi", "i", void 0, void 0, void 0, "/C", "PS", "!", "-", "|", "Y=", "W=", void 0, "|", "-", "|", "-", "|", "#", "O", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "{", "|", "}", void 0, void 0, void 0, void 0];
const oC = Object.freeze(iC);
const He$2 = Object.freeze({ 0: XY, 1: DY, 2: BY, 3: MY, 4: NY, 5: WY, 6: FY, 7: RY, 9: _Y, 10: zY, 11: $Y, 12: IY, 13: VY, 14: ok, 15: nk, 16: uk, 17: dk, 18: sk, 19: rk, 20: vk, 21: ck, 22: pk, 23: jk, 24: fk, 30: kk, 31: Zk, 32: Jk, 33: Xk, 36: Dk, 37: Bk, 38: Mk, 39: Nk, 40: Wk, 48: Fk, 49: Rk, 50: _k, 51: zk, 78: $k, 79: Ik, 80: Vk, 81: oL, 82: nL, 83: uL, 84: dL, 85: sL, 86: rL, 87: vL, 88: cL, 89: pL, 90: jL, 91: fL, 92: kL, 93: ZL, 94: JL, 95: XL, 96: DL, 97: BL, 98: ML, 99: NL, 100: WL, 101: FL, 102: RL, 103: _L, 104: zL, 105: $L, 106: IL, 107: VL, 108: oZ, 109: nZ, 110: uZ, 111: dZ, 112: sZ, 113: rZ, 114: vZ, 115: cZ, 116: pZ, 117: jZ, 118: fZ, 119: kZ, 120: ZZ, 121: JZ, 122: XZ, 123: DZ, 124: BZ, 125: MZ, 126: NZ, 127: WZ, 128: FZ, 129: RZ, 130: _Z, 131: zZ, 132: $Z, 133: IZ, 134: VZ, 135: o1, 136: n1, 137: u1, 138: d1, 139: s1, 140: r1, 141: v1, 142: c1, 143: p1, 144: j1, 145: f1, 146: k1, 147: Z1, 148: J1, 149: X1, 150: D1, 151: B1, 152: M1, 153: N1, 154: W1, 155: F1, 156: R1, 157: _1, 158: z1, 159: $1, 160: I1, 161: V1, 162: oS, 163: nS, 164: uS, 167: dS, 172: sS, 173: rS, 174: vS, 175: cS, 176: pS, 177: jS, 178: fS, 179: kS, 180: ZS, 181: JS, 182: XS, 183: DS, 184: BS, 185: MS, 186: NS, 187: WS, 188: FS, 189: RS, 190: _S, 191: zS, 192: $S, 193: IS, 194: VS, 195: oJ, 196: nJ, 197: uJ, 198: dJ, 199: sJ, 200: rJ, 201: vJ, 202: cJ, 203: pJ, 204: jJ, 205: fJ, 206: kJ, 207: ZJ, 208: JJ, 209: XJ, 210: DJ, 211: BJ, 212: MJ, 213: NJ, 214: WJ, 215: FJ, 249: RJ, 250: _J, 251: zJ, 252: $J, 253: IJ, 254: VJ, 255: oC });
const Po = {};
for (const i in He$2) if (Object.prototype.hasOwnProperty.call(He$2, i)) {
  const o = He$2[i];
  if (o) {
    const e = Number(i) * 256, n = o.length;
    for (let a = 0; a < n; a++) {
      const u = o[a], g = e + a, t = String(g);
      Object.prototype.hasOwnProperty.call(Po, t) || (typeof u == "string" ? Po[t] = u : Po[t] = void 0);
    }
  }
}
Object.freeze(Po);
const Wd = [["เฅียะ", "khia"], ["เฅืยะ", "khuea"], ["เฅือย", "khueai"], ["เฆียว", "khiao"], ["เฆียะ", "khia"], ["เฆืยะ", "khuea"], ["เฆือย", "khueai"], ["เงียว", "ngiao"], ["เงียะ", "ngia"], ["เงืยะ", "nguea"], ["เงือย", "ngueai"], ["เจียว", "chiao"], ["เจียะ", "chia"], ["เจืยะ", "chuea"], ["เจือย", "chueai"], ["เฉียว", "chiao"], ["เฉียะ", "chia"], ["เฉืยะ", "chuea"], ["เฉือย", "chueai"], ["เชียว", "chiao"], ["เชียะ", "chia"], ["เชืยะ", "chuea"], ["เชือย", "chueai"], ["เซียว", "siao"], ["เซียะ", "sia"], ["เซืยะ", "suea"], ["เซือย", "sueai"], ["เดียว", "diao"], ["เดียะ", "dia"], ["เดืยะ", "duea"], ["เดือย", "dueai"], ["เตียว", "tiao"], ["เตียะ", "tia"], ["เตืยะ", "tuea"], ["เตือย", "tueai"], ["เถียว", "tiao"], ["เถียะ", "thia"], ["เถืยะ", "thuea"], ["เถือย", "thueai"], ["น้อย", "noi"], ["หน้า", "na"], ["เหล่อ", "le"], ["หยก", "yok"], ["หล่อ", "lo"], ["หม่อง", "mong"], ["หน่อง", "nong"], ["หนอง", "nong"], ["ทหาร", "thahan"], ["เทียว", "thiao"], ["เทียะ", "thia"], ["เทืยะ", "thuea"], ["เทือย", "thueai"], ["เธียว", "thiao"], ["เธียะ", "thia"], ["เธืยะ", "thuea"], ["เธือย", "thueai"], ["เนียว", "niao"], ["เนียะ", "nia"], ["เนืยะ", "nuea"], ["เนือย", "nueai"], ["เบียว", "biao"], ["เบียะ", "bia"], ["เบืยะ", "buea"], ["เบือย", "bueai"], ["เปียว", "piao"], ["เปียะ", "pia"], ["เปืยะ", "puea"], ["เปือย", "pueai"], ["เผียว", "phiao"], ["เผียะ", "phia"], ["เผืยะ", "phuea"], ["เผือย", "phueai"], ["เฝียว", "fiao"], ["เฝียะ", "fia"], ["เฝืยะ", "fuea"], ["เฝือย", "fueai"], ["เพียว", "phiao"], ["เพียะ", "phia"], ["เพืยะ", "phuea"], ["เพือย", "phueai"], ["เฟียว", "fiao"], ["เฟียะ", "fia"], ["เฟืยะ", "fuea"], ["เฟือย", "fueai"], ["เมียว", "miao"], ["เมียะ", "mia"], ["เมืยะ", "muea"], ["เมือย", "mueai"], ["หมื่น", "meun"], ["่", ""], ["เยียว", "yiao"], ["เยึยะ", "yia"], ["เยึีย", "yia"], ["เยืยะ", "yuea"], ["เยือย", "yueai"], ["เรือ", "rua"], ["เรียว", "riao"], ["เรียะ", "ria"], ["เรืยะ", "ruea"], ["เรือย", "rueai"], ["เลียว", "liao"], ["เลียะ", "lia"], ["เลืยะ", "luea"], ["เลือย", "lueai"], ["เวียว", "wiao"], ["เวียะ", "wia"], ["เวืยะ", "wuea"], ["เวือย", "wueai"], ["เศียว", "siao"], ["เศียะ", "sia"], ["เศืยะ", "suea"], ["เศือย", "sueai"], ["เษียว", "siao"], ["เษียะ", "sia"], ["เษืยะ", "suea"], ["เษือย", "sueai"], ["เสียว", "siao"], ["เสียะ", "sia"], ["เสืยะ", "suea"], ["เสือย", "sueai"], ["เหียว", "hiao"], ["เหียะ", "hia"], ["เหืยะ", "huea"], ["เหือย", "hueai"], ["เฮียว", "hiao"], ["เฮียะ", "hia"], ["เฮืยะ", "huea"], ["เฮือย", "hueai"], ["เต็ม", "tem"], ["กัวะ", "kua"], ["ขัวะ", "khua"], ["ฃัวะ", "khua"], ["คัวะ", "khua"], ["ฅัวะ", "khua"], ["ฆัวะ", "khua"], ["งัวะ", "ngua"], ["จัวะ", "chua"], ["ฉัวะ", "chua"], ["ชัวะ", "chua"], ["ซัวะ", "sua"], ["ดัวะ", "dua"], ["ตัวะ", "tua"], ["ถัวะ", "thua"], ["ทัวะ", "thua"], ["ธัวะ", "thua"], ["นัวะ", "nua"], ["บัวะ", "bua"], ["ปัวะ", "pua"], ["ผัวะ", "phua"], ["ฝัวะ", "fua"], ["พัวะ", "phua"], ["ฟัวะ", "fua"], ["มัวะ", "mua"], ["ยัวะ", "yua"], ["รัวะ", "rua"], ["ลัวะ", "lua"], ["วัวะ", "wua"], ["ศัวะ", "sua"], ["ษัวะ", "sua"], ["สัวะ", "sua"], ["หัวะ", "hua"], ["ฮัวะ", "hua"], ["เกอะ", "koe"], ["เกีย", "kia"], ["เกืย", "kuea"], ["เขอะ", "khoe"], ["เขีย", "khia"], ["เขืย", "khuea"], ["เฃอะ", "khoe"], ["เฃีย", "khia"], ["เฃืย", "khuea"], ["เคอะ", "khoe"], ["เคีย", "khia"], ["เคืย", "khuea"], ["เฅอะ", "khoe"], ["เฅีย", "khia"], ["เฅืย", "khuea"], ["เฆอะ", "khoe"], ["เฆีย", "khia"], ["เฆืย", "khuea"], ["เงอะ", "ngoe"], ["เงีย", "ngia"], ["เงืย", "nguea"], ["เจอะ", "choe"], ["เจีย", "chia"], ["เจืย", "chuea"], ["เฉอะ", "choe"], ["เฉีย", "chia"], ["เฉืย", "chuea"], ["เชอะ", "choe"], ["เชีย", "chia"], ["เชืย", "chuea"], ["เซอะ", "soe"], ["เซีย", "sia"], ["เซืย", "suea"], ["เดอะ", "doe"], ["เดีย", "dia"], ["เดืย", "duea"], ["เตอะ", "toe"], ["เตีย", "tia"], ["เตืย", "tuea"], ["เถอะ", "thoe"], ["เถีย", "thia"], ["เถืย", "thuea"], ["เทอะ", "thoe"], ["เทีย", "thia"], ["เทืย", "thuea"], ["เธอะ", "thoe"], ["เธีย", "thia"], ["เธืย", "thuea"], ["เนอะ", "noe"], ["เนีย", "nia"], ["เนืย", "nuea"], ["เบอะ", "boe"], ["เบีย", "bia"], ["เบืย", "buea"], ["เปอะ", "poe"], ["เปีย", "pia"], ["เปืย", "puea"], ["เผอะ", "phoe"], ["เผีย", "phia"], ["เผืย", "phuea"], ["เฝอะ", "foe"], ["เฝีย", "fia"], ["เฝืย", "fuea"], ["เพอะ", "phoe"], ["เพีย", "phia"], ["เพืย", "phuea"], ["เฟอะ", "foe"], ["เฟีย", "fia"], ["เฟืย", "fuea"], ["เมอะ", "moe"], ["เมีย", "mia"], ["เมืย", "muea"], ["เยอะ", "yoe"], ["เยืย", "yuea"], ["เรอะ", "roe"], ["เรีย", "ria"], ["เรืย", "ruea"], ["เลอะ", "loe"], ["เลีย", "lia"], ["เลืย", "luea"], ["เวอะ", "woe"], ["เวีย", "wia"], ["เวืย", "wuea"], ["เศอะ", "soe"], ["เศีย", "sia"], ["เศืย", "suea"], ["เษอะ", "soe"], ["เษีย", "sia"], ["เษืย", "suea"], ["เสอะ", "soe"], ["เสีย", "sia"], ["เสืย", "suea"], ["เหอะ", "hoe"], ["เหีย", "hia"], ["เหืย", "huea"], ["เฮอะ", "hoe"], ["เฮีย", "hia"], ["เฮืย", "huea"], ["โหมด", "mode"], ["ไก", "kai"], ["ไข", "khai"], ["ไฃ", "khai"], ["ไค", "khai"], ["ไฅ", "khai"], ["ไฆ", "khai"], ["ไง", "ngai"], ["ไจ", "chai"], ["ไฉ", "chai"], ["ไช", "chai"], ["ไซ", "sai"], ["ได", "dai"], ["ไต", "tai"], ["ไถ", "thai"], ["ไธ", "thai"], ["ไน", "nai"], ["ไบ", "bai"], ["ไป", "pai"], ["ไผ", "phai"], ["ไฝ", "fai"], ["ไพ", "phai"], ["ไฟ", "fai"], ["ไม", "mai"], ["ไย", "yai"], ["ไร", "rai"], ["ไล", "lai"], ["ไว", "wai"], ["ไศ", "sai"], ["ไษ", "sai"], ["ไส", "sai"], ["ไฮ", "hai"], ["กนก", "kanok"], ["กรร", "ka"], ["กวย", "kuai"], ["กอย", "koi"], ["กัย", "kai"], ["กัว", "kua"], ["กาย", "kai"], ["กาว", "kao"], ["กิว", "kio"], ["กือ", "kue"], ["กุย", "kui"], ["ขรร", "kha"], ["ขวย", "khuai"], ["ขอย", "khoi"], ["ขัย", "khai"], ["ขัว", "khua"], ["ขาย", "khai"], ["ขาว", "khao"], ["ขิว", "khio"], ["ขือ", "khue"], ["ขุย", "khui"], ["ฃรร", "kha"], ["ฃวย", "khuai"], ["ฃอย", "khoi"], ["ฃัย", "khai"], ["ฃัว", "khua"], ["ฃาย", "khai"], ["ฃาว", "khao"], ["ฃิว", "khio"], ["ฃือ", "khue"], ["ฃุย", "khui"], ["ครร", "kha"], ["ควย", "khuai"], ["คอย", "khoi"], ["คัย", "khai"], ["คัว", "khua"], ["คาย", "khai"], ["คาว", "khao"], ["ความ", "khwam"], ["คิว", "khio"], ["คือ", "khue"], ["คุย", "khui"], ["ฅรร", "kha"], ["ฅวย", "khuai"], ["ฅอย", "khoi"], ["ฅัย", "khai"], ["ฅัว", "khua"], ["ฅาย", "khai"], ["ฅาว", "khao"], ["ฅิว", "khio"], ["ฅือ", "khue"], ["ฅุย", "khui"], ["ฆรร", "kha"], ["ฆวย", "khuai"], ["ฆอย", "khoi"], ["ฆัย", "khai"], ["ฆัว", "khua"], ["ฆาย", "khai"], ["ฆาว", "khao"], ["ฆิว", "khio"], ["ฆือ", "khue"], ["ฆุย", "khui"], ["ยุ่ง", "yung"], ["งรร", "nga"], ["งวย", "nguai"], ["งวง", "nguang"], ["งอย", "ngoi"], ["งัย", "ngai"], ["งัว", "ngua"], ["งาย", "ngai"], ["งาว", "ngao"], ["งิว", "ngio"], ["งือ", "ngue"], ["งุย", "ngui"], ["จรร", "cha"], ["จวย", "chuai"], ["จอย", "choi"], ["จัย", "chai"], ["จัว", "chua"], ["จาย", "chai"], ["จาว", "chao"], ["จิว", "chio"], ["จือ", "chue"], ["จุย", "chui"], ["ฉรร", "cha"], ["ฉวย", "chuai"], ["ฉอย", "choi"], ["ฉัย", "chai"], ["ฉัว", "chua"], ["ฉาย", "chai"], ["ฉาว", "chao"], ["ฉิว", "chio"], ["ฉือ", "chue"], ["ฉุย", "chui"], ["ชรร", "cha"], ["ชวย", "chuai"], ["ชอย", "choi"], ["ชัย", "chai"], ["ชัว", "chua"], ["ชาติ", "chat"], ["ชาย", "chai"], ["ชาว", "chao"], ["ชิว", "chio"], ["ชือ", "chue"], ["ชุย", "chui"], ["ซรร", "sa"], ["ซวย", "suai"], ["ซอย", "soi"], ["ซัย", "sai"], ["ซัว", "sua"], ["ซาย", "sai"], ["ซาว", "sao"], ["ซิว", "sio"], ["ซือ", "sue"], ["ซุย", "sui"], ["ดรร", "da"], ["ดวย", "duai"], ["ดอย", "doi"], ["ดัย", "dai"], ["ดัว", "dua"], ["ดาย", "dai"], ["ดาว", "dao"], ["ดิว", "diw"], ["ดือ", "due"], ["ดุย", "dui"], ["ตรร", "ta"], ["ตวย", "tuai"], ["ตอย", "toi"], ["ตัย", "tai"], ["ตัว", "tua"], ["ตาย", "tai"], ["ตาว", "tao"], ["ติว", "tio"], ["ตือ", "tue"], ["ตุย", "tui"], ["ถรร", "tha"], ["ถวย", "tuau"], ["ถอย", "thoi"], ["ถัย", "thai"], ["ถัว", "thua"], ["ถาย", "thai"], ["ถาว", "thao"], ["ถิว", "tio"], ["ถุย", "thui"], ["ทรร", "tha"], ["ทวย", "thuai"], ["ทอย", "thoi"], ["ทัย", "thai"], ["ทัว", "thua"], ["ทาย", "thai"], ["ทาว", "thao"], ["ทิว", "thio"], ["ทือ", "thue"], ["ทุย", "thui"], ["ธรร", "tha"], ["ธวย", "thuai"], ["ธอย", "thoi"], ["ธัย", "thai"], ["ธัว", "thua"], ["ธาย", "thai"], ["ธาว", "thao"], ["ธิว", "thio"], ["ธุย", "thui"], ["นรร", "na"], ["นวย", "nuai"], ["นอย", "noi"], ["น้อง", "nong"], ["นัย", "nai"], ["นัว", "nua"], ["นาย", "nai"], ["นาว", "nao"], ["นิว", "nio"], ["นือ", "nue"], ["นุย", "nui"], ["บรร", "ba"], ["บวย", "buai"], ["บอย", "boi"], ["บัย", "bai"], ["บัว", "bua"], ["บาย", "bai"], ["บาว", "bao"], ["บิว", "bio"], ["บือ", "bue"], ["บุย", "bui"], ["ปรร", "pa"], ["ปวย", "puai"], ["ปอย", "poi"], ["ปัย", "pai"], ["ปัว", "pua"], ["ปาย", "pai"], ["ปาว", "pao"], ["ภาร", "phan"], ["ปิว", "pio"], ["ปือ", "pue"], ["ปุย", "pui"], ["ผรร", "pha"], ["ผวย", "phuai"], ["ผอย", "phoi"], ["ผัย", "phai"], ["ผัว", "phua"], ["ผาย", "phai"], ["ผาว", "phao"], ["ผิว", "phio"], ["ผือ", "phue"], ["ผุย", "phui"], ["ฝรร", "fa"], ["ฝวย", "fuai"], ["ฝอย", "foi"], ["ฝัย", "fai"], ["ฝาย", "fai"], ["ฝาว", "fao"], ["ฝิว", "fio"], ["ฝือ", "fue"], ["ฝุย", "fui"], ["พรร", "pha"], ["พวย", "phuai"], ["พอย", "phoi"], ["พัย", "phai"], ["พัว", "phua"], ["พาย", "phai"], ["พาว", "phao"], ["พิว", "phio"], ["พือ", "phue"], ["พุย", "phui"], ["ฟรร", "fa"], ["ฟวย", "fuai"], ["ฟอย", "faoi"], ["ฟัย", "fai"], ["ฟัว", "fua"], ["ฟาย", "fai"], ["ฟาว", "fao"], ["ฟิว", "fuai"], ["ฟือ", "fue"], ["ฟุย", "fui"], ["มรร", "ma"], ["มวย", "muai"], ["มอย", "moi"], ["มัย", "mai"], ["มัว", "mua"], ["มาย", "mai"], ["มาว", "mao"], ["มิว", "mio"], ["มือ", "mue"], ["มุย", "mui"], ["ยรร", "ya"], ["ยวย", "yuai"], ["ยอย", "yoi"], ["ยัย", "yai"], ["ยัว", "yua"], ["ยาย", "yai"], ["ยาว", "yao"], ["ยิว", "yio"], ["ยือ", "yue"], ["ยุย", "yui"], ["รรร", "ra"], ["รอง", "rong"], ["รวย", "ruai"], ["รอย", "roi"], ["รัย", "rai"], ["รัว", "rua"], ["ราย", "rai"], ["ราว", "rao"], ["ริว", "rio"], ["รือ", "rue"], ["รุย", "rui"], ["ลรร", "la"], ["ลวย", "luai"], ["ลอย", "loi"], ["ลัย", "lai"], ["ลัว", "lua"], ["ลาย", "lai"], ["ลาว", "lao"], ["ลิว", "lio"], ["ลือ", "lue"], ["ลุย", "lui"], ["วรร", "wa"], ["ววย", "wuai"], ["วอย", "woi"], ["วัย", "wai"], ["วัว", "wua"], ["วาย", "wai"], ["วาว", "wao"], ["วิว", "wio"], ["วุย", "wui"], ["ศรร", "sa"], ["ศวย", "suai"], ["ศอย", "soi"], ["ศัย", "sai"], ["ศาย", "sai"], ["ศาว", "sao"], ["ศิว", "sio"], ["ศุย", "sui"], ["ษรร", "sa"], ["ษวย", "suai"], ["ษอย", "soi"], ["ษัย", "sai"], ["ษาย", "sai"], ["ษาว", "sao"], ["ษา", "sa"], ["ษิว", "sio"], ["ษุย", "sui"], ["สรร", "sa"], ["สวย", "suai"], ["สอย", "soi"], ["สัย", "sai"], ["สาย", "sai"], ["สาว", "sao"], ["สิว", "sio"], ["สือ", "sue"], ["สุย", "sui"], ["หรร", "ha"], ["หมด", "mod"], ["หวย", "huai"], ["หอย", "hoi"], ["หัย", "hai"], ["หัว", "hua"], ["หาย", "hai"], ["มหา", "maha"], ["หาว", "hao"], ["หิว", "hio"], ["หือ", "hue"], ["หุย", "hui"], ["ฮรร", "ha"], ["ฮวย", "huai"], ["ฮอย", "hoi"], ["ฮัย", "hai"], ["ฮาย", "hai"], ["ฮาว", "haw"], ["ฮิว", "hio"], ["ฮือ", "hue"], ["ฮุย", "hui"], ["เกย", "koei"], ["เกอ", "koe"], ["เกะ", "ku"], ["เกา", "kao"], ["เกิ", "koe"], ["เก็", "ke"], ["เขย", "khoei"], ["เขอ", "khoe"], ["เขะ", "khe"], ["เขา", "khao"], ["เขิ", "khoe"], ["เข็", "khu"], ["เฃย", "khoei"], ["เฃอ", "khoe"], ["เฃะ", "khe"], ["เฃา", "khao"], ["เฃิ", "khoe"], ["เฃ็", "khu"], ["เคย", "khoei"], ["เคอ", "khoe"], ["เคะ", "khe"], ["เคา", "khao"], ["เคิ", "khoe"], ["เค็", "khu"], ["เฅย", "khoei"], ["เฅอ", "khoe"], ["เฅะ", "khe"], ["เฅา", "khao"], ["เฅิ", "khoe"], ["เฅ็", "khu"], ["เฆย", "khoei"], ["เฆอ", "khoe"], ["เฆะ", "khe"], ["เฆา", "khao"], ["เฆิ", "khoe"], ["เฆ็", "khu"], ["เงย", "ngoei"], ["เงอ", "ngoe"], ["เงะ", "nge"], ["เงา", "ngao"], ["เงิ", "ngoe"], ["เง็", "ngu"], ["เจย", "choei"], ["เจอ", "choe"], ["เจะ", "che"], ["เจา", "chao"], ["เจิ", "choe"], ["เจ็", "chu"], ["เฉย", "choei"], ["เฉอ", "choe"], ["เฉะ", "che"], ["เฉา", "chao"], ["เฉิ", "choe"], ["เฉ็", "chu"], ["เชย", "choei"], ["เชอ", "choe"], ["เชะ", "che"], ["เชา", "chao"], ["เชิ", "choe"], ["เช็", "chu"], ["เซย", "soei"], ["เซอ", "soe"], ["เซะ", "se"], ["เซา", "sao"], ["เซิ", "soe"], ["เซ็", "su"], ["เดย", "doei"], ["เดอ", "doe"], ["เดะ", "de"], ["เดา", "dao"], ["เดิ", "doe"], ["เด็", "du"], ["เตย", "toei"], ["เตอ", "toe"], ["เตะ", "te"], ["เตา", "tao"], ["เติ", "toe"], ["เต็", "tu"], ["เถย", "thoei"], ["เถอ", "thoe"], ["เถา", "thao"], ["เถิ", "thoe"], ["เทย", "thoei"], ["เทอ", "thoe"], ["เทะ", "the"], ["เทา", "thao"], ["เทิ", "thoe"], ["เท็", "thu"], ["เธย", "thoei"], ["เธอ", "thoe"], ["เธา", "thao"], ["เธิ", "thoe"], ["เนย", "noei"], ["เนอ", "noe"], ["เนะ", "ne"], ["เนา", "nao"], ["เนิ", "noe"], ["เน็", "nu"], ["เบย", "boei"], ["เบอ", "boe"], ["เบะ", "be"], ["เบา", "bao"], ["เบิ", "boe"], ["เบ็", "bu"], ["เปย", "poei"], ["เปอ", "poe"], ["เปะ", "pe"], ["เปา", "pao"], ["เปิ", "poe"], ["เป็", "pu"], ["เผย", "phoei"], ["เผอ", "phoe"], ["เผะ", "phe"], ["เผา", "phao"], ["เผิ", "phoe"], ["เผ็", "phu"], ["เฝย", "foei"], ["เฝอ", "foe"], ["เฝา", "fao"], ["เฝิ", "foe"], ["เฝ็", "fu"], ["เพย", "phoei"], ["เพอ", "phoe"], ["เพะ", "phe"], ["เพา", "phao"], ["เพิ", "phoe"], ["เพ็", "phu"], ["เฟย", "faoei"], ["เฟอ", "foe"], ["เฟา", "fao"], ["เฟิ", "foe"], ["เฟ็", "fu"], ["เมย", "moei"], ["เมอ", "moe"], ["เมะ", "me"], ["เมา", "mao"], ["เมิ", "moe"], ["เม็", "mu"], ["เยย", "yoei"], ["เยอ", "yoe"], ["เยา", "yao"], ["เยิ", "yoe"], ["เย็", "yu"], ["เรย", "roei"], ["เรอ", "roe"], ["เรา", "rao"], ["เริ", "roe"], ["เร็", "ru"], ["เลย", "loei"], ["เลอ", "loe"], ["เละ", "le"], ["เลา", "lao"], ["เลิ", "loe"], ["เล็", "lu"], ["เวย", "woei"], ["เวอ", "woe"], ["เวะ", "we"], ["เวา", "wao"], ["เวิ", "woe"], ["เว็", "wu"], ["เศย", "soei"], ["เศร้า", "sao"], ["เศอ", "soe"], ["เศา", "sao"], ["เศิ", "soe"], ["เศ็", "su"], ["เษย", "soei"], ["เษอ", "soe"], ["เษา", "sao"], ["เษิ", "soe"], ["เษ็", "su"], ["เสย", "soei"], ["เสอ", "soe"], ["เสะ", "se"], ["เสา", "sao"], ["เสิ", "soe"], ["เส็", "su"], ["เหย", "hoei"], ["เหอ", "hoe"], ["เหะ", "he"], ["เหา", "hao"], ["เหิ", "hoe"], ["เห็", "he"], ["เฮย", "hoei"], ["เฮอ", "hoe"], ["เฮะ", "he"], ["เฮา", "hao"], ["เฮิ", "hoe"], ["เฮ็", "hu"], ["แต", "tae"], ["แกว", "kaeo"], ["แกะ", "kae"], ["แขะ", "khae"], ["แฃะ", "khae"], ["แคว", "khaeo"], ["แคะ", "khae"], ["แฅะ", "khae"], ["แฆะ", "khae"], ["แงะ", "ngae"], ["แจว", "chaeo"], ["แจะ", "chae"], ["แฉว", "chaeo"], ["แฉะ", "chae"], ["แชว", "chaeo"], ["แชะ", "chae"], ["แซว", "saeo"], ["แซะ", "sae"], ["แดว", "daeo"], ["แดะ", "dae"], ["แตว", "taeo"], ["แตะ", "tae"], ["แถว", "taeo"], ["แทว", "thaeo"], ["แทะ", "thae"], ["แธว", "thaeo"], ["แนว", "naew"], ["แนะ", "nae"], ["แบว", "baeo"], ["แบะ", "bae"], ["แปว", "paeo"], ["แปะ", "pae"], ["แผว", "phaeo"], ["แผะ", "phae"], ["แฝว", "faeo"], ["แฝะ", "fae"], ["แพว", "phaeo"], ["แพะ", "phae"], ["แฟว", "faeo"], ["แฟะ", "fae"], ["แมว", "maeo"], ["แมะ", "mae"], ["แยว", "yaeo"], ["แยะ", "yae"], ["แรว", "raeo"], ["แระ", "rae"], ["แลว", "laeo"], ["และ", "lae"], ["แวว", "waeo"], ["แวะ", "wae"], ["แศว", "saeo"], ["แศะ", "sae"], ["แษว", "saeo"], ["แษะ", "sae"], ["แสว", "saeo"], ["แสะ", "sae"], ["แหว", "haeo"], ["แหะ", "hae"], ["แฮว", "haeo"], ["แฮะ", "hae"], ["โกย", "koi"], ["โกะ", "ko"], ["โขย", "khoi"], ["โขะ", "kho"], ["โฃย", "khoi"], ["โฃะ", "kho"], ["โคย", "khoi"], ["โคะ", "kho"], ["โฅย", "khoi"], ["โฅะ", "kho"], ["โฆย", "khoi"], ["โฆะ", "kho"], ["โงย", "ngoi"], ["โงะ", "ngo"], ["โจร", "cho"], ["โจย", "choi"], ["โจะ", "cho"], ["โฉย", "choi"], ["โฉะ", "cho"], ["โชย", "choi"], ["โชะ", "cho"], ["โซย", "soi"], ["โซะ", "so"], ["โดย", "doi"], ["โดะ", "do"], ["โตย", "toi"], ["โตะ", "to"], ["โถย", "thoi"], ["โทย", "thoi"], ["โทะ", "tho"], ["โธย", "thoi"], ["โนย", "noi"], ["โนะ", "no"], ["โบย", "boi"], ["โบะ", "bo"], ["โปย", "poi"], ["โปะ", "po"], ["โผย", "phoi"], ["โผะ", "pho"], ["โฝย", "foi"], ["โฝะ", "fo"], ["โพย", "phoi"], ["โพะ", "pho"], ["โฟย", "faoi"], ["โฟะ", "fo"], ["โมย", "moi"], ["โมะ", "mo"], ["โยย", "yoi"], ["โยะ", "yo"], ["โรย", "roi"], ["โระ", "ro"], ["โลย", "loi"], ["โละ", "lo"], ["โวย", "woi"], ["โวะ", "wo"], ["โศย", "soi"], ["โศะ", "so"], ["โษย", "soi"], ["โษะ", "so"], ["โสย", "soi"], ["โสะ", "so"], ["โหย", "hoi"], ["โหะ", "ho"], ["โฮย", "hoi"], ["โฮะ", "ho"], ["ไกย", "kai"], ["ไขย", "khai"], ["ไฃย", "khai"], ["ไคย", "khai"], ["ไฅย", "khai"], ["ไฆย", "khai"], ["ไงย", "ngai"], ["ไจย", "chai"], ["ไฉย", "chai"], ["ไชย", "chai"], ["ไซย", "sai"], ["ไดย", "dai"], ["ไตย", "tai"], ["ไถย", "thai"], ["ไทย", "thai"], ["ไธย", "thai"], ["ไนย", "nai"], ["ไบย", "bai"], ["ไปย", "pai"], ["ไผย", "phai"], ["ไฝย", "fai"], ["ไพย", "phai"], ["ไฟย", "fai"], ["ไมย", "mai"], ["ไยย", "yai"], ["ไรย", "rai"], ["ไลย", "lai"], ["ไวย", "wai"], ["ไศย", "sai"], ["ไษย", "sai"], ["ไสย", "sai"], ["ไหย", "hai"], ["ไฮย", "hai"], ["อาน", "an"], ["กอ", "ko"], ["กะ", "ka"], ["กั", "ka"], ["การ", "kan"], ["กา", "ka"], ["กำ", "kam"], ["กิ", "ki"], ["กี", "ki"], ["กึ", "kue"], ["กุ", "ku"], ["กู", "ku"], ["ขว", "khua"], ["ขอ", "kho"], ["ขะ", "kha"], ["ขั", "kha"], ["ขา", "kha"], ["ขำ", "kham"], ["ขิ", "khi"], ["ขี", "khi"], ["ขึ", "khue"], ["ขุ", "khu"], ["ขู", "khu"], ["ฃว", "khua"], ["ฃอ", "kho"], ["ฃะ", "kha"], ["ฃั", "kha"], ["ฃา", "kha"], ["ฃำ", "kham"], ["ฃิ", "khi"], ["ฃี", "khi"], ["ฃึ", "khue"], ["ฃุ", "khu"], ["ฃู", "khu"], ["คว", "khua"], ["คอ", "kho"], ["คะ", "kha"], ["คั", "kha"], ["คา", "kha"], ["คำ", "kham"], ["คิ", "khi"], ["คี", "khi"], ["คึ", "khue"], ["คุ", "khu"], ["คู", "khu"], ["ฅว", "khua"], ["ฅอ", "kho"], ["ฅะ", "kha"], ["ฅั", "kha"], ["ฅา", "kha"], ["ฅำ", "kham"], ["ฅิ", "khi"], ["ฅี", "khi"], ["ฅึ", "khue"], ["ฅุ", "khu"], ["ฅู", "khu"], ["ฆว", "khua"], ["ฆอ", "kho"], ["ฆะ", "kha"], ["ฆั", "kha"], ["ฆา", "kha"], ["ฆำ", "kham"], ["ฆิ", "khi"], ["ฆี", "khi"], ["ฆึ", "khue"], ["ฆุ", "khu"], ["ฆู", "khu"], ["งว", "ngua"], ["งอ", "ngo"], ["งะ", "nga"], ["งั", "nga"], ["งา", "nga"], ["งำ", "ngam"], ["งิ", "ngi"], ["งี", "ngi"], ["งึ", "ngue"], ["งุ", "ngu"], ["งู", "ngu"], ["จว", "chua"], ["จอ", "cho"], ["จะ", "cha"], ["จั", "cha"], ["จา", "cha"], ["จำ", "cham"], ["จิ", "chi"], ["จี", "chi"], ["จึ", "chue"], ["จุ", "chu"], ["จู", "chu"], ["ฉว", "chua"], ["ฉอ", "cho"], ["ฉะ", "cha"], ["ฉั", "cha"], ["ฉา", "cha"], ["ฉำ", "cham"], ["ฉิ", "chi"], ["ฉี", "chi"], ["ฉึ", "chue"], ["ฉุ", "chu"], ["ฉู", "chu"], ["ชว", "chua"], ["ชอ", "cho"], ["ชะ", "cha"], ["ชั", "cha"], ["ชา", "cha"], ["ชำ", "cham"], ["ชิ", "chi"], ["ชี", "chi"], ["ชึ", "chue"], ["ชุ", "chu"], ["ชู", "chu"], ["ซว", "sua"], ["ซอ", "so"], ["ซะ", "sa"], ["ซั", "sa"], ["ซา", "sa"], ["ซำ", "sam"], ["ซิ", "si"], ["ซี", "si"], ["ซึ", "sue"], ["ซุ", "su"], ["ซู", "su"], ["ดว", "dua"], ["ดอ", "do"], ["ดะ", "da"], ["ดั", "da"], ["ดา", "da"], ["ดำ", "dam"], ["ดิ", "di"], ["ดี", "di"], ["ดึ", "due"], ["ดุ", "du"], ["ดู", "du"], ["ตว", "tua"], ["ตอ", "to"], ["ตะ", "ta"], ["ตั", "ta"], ["ตา", "ta"], ["ตำ", "tam"], ["ติ", "ti"], ["ตี", "ti"], ["ตึ", "tue"], ["ตุ", "tu"], ["ตู", "tu"], ["ถว", "thua"], ["ถะ", "tha"], ["ถั", "tha"], ["ถา", "tha"], ["ทว", "thua"], ["ทอ", "tho"], ["ทะ", "tha"], ["ทั", "tha"], ["ท่า", "tha"], ["ทา", "tha"], ["ทำ", "tham"], ["ทิ", "thi"], ["ที", "thi"], ["ทึ", "thue"], ["ทุ", "thu"], ["ทู", "thu"], ["ธว", "thua"], ["ธะ", "tha"], ["ธั", "tha"], ["ธา", "tha"], ["ธี", "thi"], ["ธุ", "thu"], ["นว", "nua"], ["นอ", "no"], ["นะ", "na"], ["นั", "na"], ["นา", "na"], ["นำ", "nam"], ["นิ", "ni"], ["นี", "ni"], ["นึ", "nue"], ["นุ", "nu"], ["นู", "nu"], ["บว", "bua"], ["บอ", "bo"], ["บะ", "ba"], ["บั", "ba"], ["บา", "ba"], ["บำ", "bam"], ["บิ", "bi"], ["บี", "bi"], ["บึ", "bue"], ["บุ", "bu"], ["บู", "bu"], ["ปว", "pua"], ["ปอ", "po"], ["ภา", "pha"], ["ปะ", "pa"], ["ปั", "pa"], ["ปา", "pa"], ["ปำ", "pam"], ["ปิ", "pi"], ["ปี", "pi"], ["ปึ", "pue"], ["ปุ", "pu"], ["ปู", "pu"], ["ผว", "phua"], ["ผอ", "pho"], ["ผะ", "pha"], ["ผั", "pha"], ["ผา", "pha"], ["ผำ", "pham"], ["ผิ", "phi"], ["ผี", "phi"], ["ผึ", "phue"], ["ผุ", "phu"], ["ผู", "phu"], ["ฝว", "fua"], ["ฝอ", "fo"], ["ฝะ", "fa"], ["ฝั", "fa"], ["ฝา", "fa"], ["ฝำ", "fam"], ["ฝิ", "fi"], ["ฝี", "fi"], ["ฝึ", "fue"], ["ฝุ", "fu"], ["ฝู", "fu"], ["พว", "phua"], ["พอ", "pho"], ["พะ", "pha"], ["พั", "pha"], ["พา", "pha"], ["พำ", "pham"], ["พิ", "phi"], ["พี", "phi"], ["พึ", "phue"], ["พุ", "phu"], ["พู", "phu"], ["ฟว", "fua"], ["ฟอ", "fo"], ["ฟะ", "fa"], ["ฟั", "fa"], ["ฟา", "fa"], ["ฟำ", "fam"], ["ฟิ", "fi"], ["ฟี", "fi"], ["ฟึ", "fue"], ["ฟุ", "fu"], ["ฟู", "fu"], ["มว", "mua"], ["มอ", "mo"], ["มะ", "ma"], ["มั", "ma"], ["มา", "ma"], ["มำ", "mam"], ["มิ", "mi"], ["มี", "mi"], ["มึ", "mue"], ["มุ", "mu"], ["มู", "mu"], ["ยว", "yua"], ["ยอ", "yo"], ["ยะ", "ya"], ["ยั", "ya"], ["ยา", "ya"], ["ยำ", "yam"], ["ยิ", "yi"], ["ยี", "yi"], ["ยึ", "yue"], ["ยุ", "yu"], ["ยู", "yu"], ["รว", "rua"], ["รอ", "ro"], ["ระ", "ra"], ["รั", "ra"], ["รา", "ra"], ["รำ", "ram"], ["ริ", "ri"], ["รี", "ri"], ["รึ", "rue"], ["รุ", "ru"], ["รู", "ru"], ["ฤๅ", "rue"], ["ลว", "lua"], ["ลอ", "lo"], ["ละ", "la"], ["ลั", "la"], ["ลา", "la"], ["ลำ", "lam"], ["ลิ", "li"], ["ลี", "li"], ["ลึ", "lue"], ["ลุ", "lu"], ["ลู", "lu"], ["ฦๅ", "lue"], ["วว", "wua"], ["วอ", "wo"], ["วะ", "wa"], ["วั", "wa"], ["วา", "wa"], ["วำ", "wam"], ["วิ", "wi"], ["วี", "wi"], ["วึ", "wue"], ["วุ", "wu"], ["วู", "wu"], ["ศว", "sua"], ["ศอ", "so"], ["ศะ", "sa"], ["ศั", "sa"], ["ศา", "sa"], ["ศำ", "sam"], ["ศิ", "si"], ["ศี", "si"], ["ศึ", "sue"], ["ศุ", "su"], ["ศู", "su"], ["ษว", "sua"], ["ษอ", "so"], ["ษะ", "sa"], ["ษั", "sa"], ["ษา", "sa"], ["ษำ", "sam"], ["ษิ", "si"], ["ษี", "si"], ["ษึ", "sue"], ["ษุ", "su"], ["ษู", "su"], ["สว", "sua"], ["สอ", "so"], ["สะ", "sa"], ["สั", "sa"], ["สา", "sa"], ["สำ", "sam"], ["สิ", "si"], ["สี", "si"], ["สึ", "sue"], ["สุ", "su"], ["สู", "su"], ["หว", "hua"], ["หอ", "ho"], ["หะ", "ha"], ["หั", "ha"], ["หา", "ha"], ["หำ", "ham"], ["หิ", "hi"], ["หี", "hi"], ["หึ", "hue"], ["หุ", "hu"], ["หู", "hu"], ["ฮว", "hua"], ["ฮอ", "ho"], ["ฮะ", "ha"], ["ฮั", "ha"], ["ฮา", "ha"], ["ฮำ", "ham"], ["ฮิ", "hi"], ["ฮี", "hi"], ["ฮึ", "hue"], ["ฮุ", "hu"], ["ฮู", "hu"], ["อา", "a"], ["อำ", "am"], ["อิ", "i"], ["อี", "i"], ["อึ", "ue"], ["อุ", "u"], ["อู", "u"], ["เอ", "e"], ["แอ", "ae"], ["โอ", "o"], ["ใอ", "ai"], ["ไอ", "ai"], ["อย", "oi"], ["ออ", "o"], ["อะ", "a"], ["อั", "a"], ["อำ", "am"], ["อิ", "i"], ["อี", "i"], ["อึ", "ue"], ["อุ", "u"], ["อู", "u"], ["เอ", "e"], ["แอ", "ae"], ["โอ", "o"], ["ใอ", "ai"], ["ไอ", "ai"], ["อย", "oi"], ["อว", "ua"], ["อ๋วง", "uang"], ["วอก", "wok"], ["อ้วน", "on"], ["ออ", "o"], ["อะ", "a"], ["อั", "a"], ["อำ", "am"], ["อิ", "i"], ["อี", "i"], ["อึ", "ue"], ["อุ", "u"], ["อู", "u"], ["เอ", "e"], ["แอ", "ae"], ["โอ", "o"], ["ใอ", "ai"], ["ไอ", "ai"], ["อย", "oi"], ["ออ", "o"], ["อะ", "a"], ["อั", "a"], ["อำ", "am"], ["อิ", "i"], ["อี", "i"], ["อึ", "ue"], ["อุ", "u"], ["อู", "u"], ["เอ", "e"], ["แอ", "ae"], ["โอ", "o"], ["ใอ", "ai"], ["ไอ", "ai"], ["อย", "oi"], ["อว", "ua"], ["ออ", "o"], ["อะ", "a"], ["เกรง", "kreng"], ["เก", "ke"], ["เข", "khe"], ["เฃ", "khe"], ["เค", "khe"], ["เฅ", "khe"], ["เฆ", "khe"], ["เง", "nge"], ["เจ", "che"], ["เฉ", "che"], ["เช", "che"], ["เซ", "se"], ["เด", "de"], ["เต", "te"], ["เท", "the"], ["เน", "ne"], ["เบ", "be"], ["เป", "pe"], ["เผ", "phe"], ["เฝ", "fe"], ["เพ", "phe"], ["เฟ", "fe"], ["เม", "me"], ["เย", "ye"], ["เร", "re"], ["เล", "le"], ["เว", "we"], ["เศ", "se"], ["เส", "se"], ["เห", "he"], ["เฮ", "he"], ["แก", "kae"], ["แข", "khae"], ["แฃ", "khae"], ["แค", "khae"], ["แฅ", "khae"], ["แฆ", "khae"], ["แง", "ngae"], ["แจ", "chae"], ["แฉ", "chae"], ["แช", "chae"], ["แซ", "sae"], ["แด", "dae"], ["แต", "tae"], ["แท", "thae"], ["แน", "nae"], ["แบ", "bae"], ["แปล", "plae"], ["แป", "pae"], ["แผ", "phae"], ["แฝ", "fae"], ["แพ", "phae"], ["แฟ", "fae"], ["แม", "mae"], ["แย", "yae"], ["แร", "rae"], ["แล", "lae"], ["แว", "wae"], ["แศ", "sae"], ["แษ", "sae"], ["แส", "sae"], ["แห", "hae"], ["แฮ", "hae"], ["โก", "ko"], ["โข", "kho"], ["โฃ", "kho"], ["โค", "kho"], ["โฅ", "kho"], ["โฆ", "kho"], ["โง", "ngo"], ["โจ", "cho"], ["โฉ", "cho"], ["โช", "cho"], ["โซ", "so"], ["โด", "do"], ["โต", "to"], ["โท", "tho"], ["โน", "no"], ["โบ", "bo"], ["โป", "po"], ["โผ", "pho"], ["โฝ", "fo"], ["โพ", "pho"], ["โฟ", "fo"], ["โม", "mo"], ["โย", "yo"], ["โร", "ro"], ["โล", "lo"], ["โว", "wo"], ["โศ", "so"], ["โษ", "so"], ["โส", "so"], ["โห", "ho"], ["โฮ", "ho"], ["โอ", "o"], ["ใก", "kai"], ["ใข", "khai"], ["ใฃ", "khai"], ["ใค", "khai"], ["ใฅ", "khai"], ["ใฆ", "khai"], ["ใง", "ngai"], ["ใจ", "chai"], ["ใฉ", "chai"], ["ใช", "chai"], ["ใซ", "sai"], ["ใด", "dai"], ["ใต", "tai"], ["ใถ", "thai"], ["ใท", "thai"], ["ใธ", "thai"], ["ใน", "nai"], ["ใบ", "bai"], ["ใป", "pai"], ["ใผ", "phai"], ["ใฝ", "fai"], ["ใพ", "phai"], ["ใฟ", "fai"], ["ใม", "mai"], ["ใย", "yai"], ["ใร", "rai"], ["ใล", "lai"], ["ใว", "wai"], ["ใศ", "sai"], ["ใษ", "sai"], ["ใส", "sai"], ["ให", "hai"], ["ใฮ", "hai"], ["ไก", "kai"], ["ไข", "khai"], ["ไฃ", "khai"], ["ไค", "khai"], ["ไฅ", "khai"], ["ไฆ", "khai"], ["ไง", "ngai"], ["ไจ", "chai"], ["ไฉ", "chai"], ["ไช", "chai"], ["ไซ", "sai"], ["ได", "dai"], ["ไต", "tai"], ["ไถ", "thai"], ["ไท", "thai"], ["ไธ", "thai"], ["ไน", "nai"], ["ไบ", "bai"], ["ไป", "pai"], ["ไผ", "phai"], ["ไฝ", "fai"], ["ไพ", "phai"], ["ไฟ", "fai"], ["ไม", "mai"], ["ไย", "yai"], ["ไร", "rai"], ["ไล", "lai"], ["ไว", "wai"], ["ไศ", "sai"], ["ไษ", "sai"], ["ไส", "sai"], ["ไห", "hai"], ["ไฮ", "hai"], ["้", ""], ["พลเ", "phonla"], ["กรม", "krom"], ["นม", "nom"], ["([ก-ฮ])า", "a", "r"], [String.raw`([ก-ฮ])(?!\1)ง(?!ง)`, "ong", "r"], [String.raw`([ก-ฮ])(?!\1)ก(?!ก)`, "ok", "r"], [String.raw`([ก-ฮ])(?!\1)ด(?!ด)`, "od", "r"], [String.raw`([ก-ฮ])(?!\1)น(?!น)`, "on", "r"], [String.raw`([ก-ฮ])(?!\1)บ(?!บ)`, "ob", "r"], [String.raw`([ก-ฮ])(?!\1)ม(?!ม)`, "om", "r"], ["ก", "k", "c"], ["ข", "kh", "c"], ["ฃ", "kh", "c"], ["ค", "kh", "c"], ["ฅ", "kh", "c"], ["ฆ", "kh", "c"], ["ง", "ng", "c"], ["จ", "ch", "c"], ["ฉ", "ch", "c"], ["ช", "ch", "c"], ["ซ", "s", "c"], ["ฌ", "ch", "c"], ["ญ", "y"], ["ฎ", "d"], ["ฏ", "t"], ["ฐ", "th"], ["ฑ", "th"], ["ฒ", "th"], ["ณ", "n"], ["ด", "d", "c"], ["ต", "t", "c"], ["ถ", "th", "c"], ["ท", "th", "c"], ["ธ", "th", "c"], ["น", "n", "c"], ["บ", "b", "c"], ["ป", "p", "c"], ["ผ", "ph", "c"], ["ฝ", "f", "c"], ["พ", "ph", "c"], ["ฟ", "f", "c"], ["ภ", "ph", "c"], ["ม", "m", "c"], ["ย", "y", "c"], ["ร", "r", "c"], ["ฤ", "rue"], ["ล", "l", "c"], ["ฦ", "lue"], ["ว", "w", "c"], ["ศ", "s", "c"], ["ษ", "s", "c"], ["ส", "s", "c"], ["ห", "h", "c"], ["ฬ", "l", "c"], ["ฮ", "h", "c"], ["อ", "", "c"], ["้", ""], ["๊", ""], ["๋", ""], ["เ", ""], ["แ", ""], ["์", ""], ["็", ""], ["ู", ""], ["ิ", ""], ["ื", ""], ["ี", ""], ["ึ", ""], ["", ""], ["ํ", ""], ["ั", ""], ["้", ""], ["ุ", ""], ["ุ", ""], ["ๅ", ""], ["ำ", ""], ["ไ", ""], ["ใ", ""], ["ะ", "a"], ["ๆ", ""], ["า", "a"], ["ฯ", ""], ["๐", "0"], ["๏", "0"], ["๑", "1"], ["๒", "2"], ["๓", "3"], ["๔", "4"], ["๕", "5"], ["๖", "6"], ["๗", "7"], ["๘", "8"], ["๙", "9"]];
const uu = /* @__PURE__ */ new Map();
for (const [i, o, e] of Wd) typeof i == "string" && typeof o == "string" && (!e || e === "c") && !uu.has(i) && uu.set(i, o);
const gu = [];
for (const [i, o, e] of Wd) typeof i != "string" || typeof o != "string" || (e === "r" ? gu.push({ regex: new RegExp(i, "g"), replace: o, type: "r" }) : gu.push({ replace: o, search: i, type: "s" }));
const eC = /\x1B\[(\d+)m/;
class Pd {
  activeForeground = void 0;
  activeBackground = void 0;
  activeFormatting = [];
  processEscape(o) {
    const e = eC.exec(o);
    if (!e) return;
    const n = Number.parseInt(e[1], 10);
    switch (n) {
      case 0: {
        this.activeForeground = void 0, this.activeBackground = void 0, this.activeFormatting = [];
        break;
      }
      case 39: {
        this.activeForeground = void 0;
        break;
      }
      case 49: {
        this.activeBackground = void 0;
        break;
      }
      default:
        if (n >= 30 && n <= 37 || n >= 90 && n <= 97) this.activeForeground = o;
        else if (n >= 40 && n <= 47 || n >= 100 && n <= 107) this.activeBackground = o;
        else if ([1, 2, 3, 4, 7, 8, 9].includes(n)) this.activeFormatting.push(o);
        else if ([22, 23, 24, 27, 28, 29].includes(n)) {
          const a = { 22: "[1m", 23: "[3m", 24: "[4m", 27: "[7m", 28: "[8m", 29: "[9m" }[n];
          a && (this.activeFormatting = this.activeFormatting.filter((u) => !u.includes(a)));
        }
    }
  }
  getStartEscapesForAllActiveAttributes() {
    return [this.activeBackground, this.activeForeground, ...this.activeFormatting].filter(Boolean).join("");
  }
  getEndEscapesForAllActiveAttributes() {
    const o = [];
    if (this.activeFormatting.length > 0) {
      const e = { "\x1B[1m": "\x1B[22m", "\x1B[2m": "\x1B[22m", "\x1B[3m": "\x1B[23m", "\x1B[4m": "\x1B[24m", "\x1B[7m": "\x1B[27m", "\x1B[8m": "\x1B[28m", "\x1B[9m": "\x1B[29m" };
      [...this.activeFormatting].toReversed().forEach((n) => {
        const a = e[n];
        a && o.push(a);
      });
    }
    return this.activeForeground && o.push("\x1B[39m"), this.activeBackground && o.push("\x1B[49m"), o.join("");
  }
}
const nC = (i, o) => {
  if (!eo$1.has(i[o])) return { isInsideEscape: false, isInsideLinkEscape: false };
  const e = true, n = i.slice(o + 1, o + 1 + wo.length).join("") === wo;
  return { isInsideEscape: e, isInsideLinkEscape: n };
};
const aC = (i, o = {}) => {
  const e = new Pd();
  let n = "", a = false, u = "", g = "", t = false;
  const s = [...i];
  for (let h = 0; h < s.length; h++) {
    const r = s[h];
    if (r && eo$1.has(r)) {
      if (n) {
        const b = o.getWidth?.(n) ?? 0, p = { isEscapeSequence: false, isGrapheme: true, text: n, width: b };
        if (t && (p.isHyperlink = true, p.hyperlinkUrl = g), o.onSegment?.(p, e) === false) return;
        n = "";
      }
      a = true, u = r;
      const y = nC(s, h), { isInsideLinkEscape: c } = y;
      if (c) {
        let b = h + 1;
        for (g = ""; b < s.length; ) {
          const j = s[b];
          if (j === Oo) break;
          g += j, b += 1;
        }
        g = g.slice(4);
        const p = { hyperlinkUrl: g, isEscapeSequence: true, isGrapheme: false, isHyperlink: true, isHyperlinkStart: true, width: 0 };
        if (o.onSegment?.(p, e) === false) return;
        h = b, t = true, a = false, u = "";
        continue;
      }
      if (h + 1 < s.length && s[h + 1] === "\\" && t) {
        const b = { isEscapeSequence: true, isGrapheme: false, isHyperlink: true, isHyperlinkEnd: true, width: 0 };
        if (o.onSegment?.(b, e) === false) return;
        t = false, g = "", h += 1, a = false, u = "";
        continue;
      }
    }
    if (a) {
      if (u !== r && (u += r), r === Ie$1) {
        a = false, e.processEscape(u);
        const y = { isEscapeSequence: true, isGrapheme: false, text: u, width: 0 };
        if (o.onSegment?.(y, e) === false) return;
        u = "";
      }
      continue;
    }
    n += r;
    const l = o.getWidth?.(n) ?? 0, v = { isEscapeSequence: false, isGrapheme: true, text: n, width: l };
    if (t && (v.isHyperlink = true, v.hyperlinkUrl = g), o.onSegment?.(v, e) === false) return;
    n = "";
  }
  if (n) {
    const h = o.getWidth?.(n) ?? 0, r = { isEscapeSequence: false, isGrapheme: true, text: n, width: h };
    t && (r.isHyperlink = true, r.hyperlinkUrl = g), o.onSegment?.(r, e);
  }
  if (u) {
    const h = { isEscapeSequence: true, isGrapheme: false, text: u, width: 0 };
    o.onSegment?.(h, e);
  }
};
const du = (i) => `${eo$1.values().next().value}${yu}${String(i)}${Ie$1}`;
const tu = (i) => `${eo$1.values().next().value}${wo}${i}${Oo}`;
const uC = (i) => {
  if (i.length === 0) return "";
  if (i.length === 1) return i[0];
  let o = "", e, n;
  const a = i.join(`
`), u = [...a];
  let g = 0;
  for (const [t, s] of u.entries()) {
    if (o += s, eo$1.has(s)) {
      const r = kt$2.exec(a.slice(g))?.groups ?? {};
      if (r.code !== void 0) {
        const l = Number.parseFloat(r.code);
        e = l === ft$2 ? void 0 : l;
      } else r.uri !== void 0 && (n = r.uri.length === 0 ? void 0 : r.uri);
    }
    const h = Lt$2.get(Number(e));
    u[t + 1] === `
` ? (n && (o += tu("")), e && h && (o += du(h))) : s === `
` && (e && h && (o += du(e)), n && (o += tu(n))), g += s.length;
  }
  return o;
};
const Fd = /(?=\s)|(?<=\s)/;
const Kd = /^\s+$/;
const su = /* @__PURE__ */ new Map();
const gC = (i) => {
  const o = su.get(i);
  if (o !== void 0) return o;
  const e = Hi(i);
  return su.set(i, e), e;
};
const De$1 = (i) => {
  if (!i.includes("\x1B")) return i;
  let o = i;
  return i.includes("\x1B[30m") && (o += "\x1B[39m"), i.includes("\x1B[42m") && (o += "\x1B[49m"), o;
};
const Fi = (i) => {
  const o = i.split(" ");
  let e = o.length;
  for (; e > 0 && Hi(o[e - 1]) === 0; ) e--;
  return e === o.length ? i : o.slice(0, e).join(" ") + o.slice(e).join("");
};
const Rd = (i, o, e) => {
  if (i.length === 0) return [""];
  if (o <= 0) return [i];
  const n = [], a = new Pd();
  let u = "", g = 0, t = false, s = false, h = "", r = 0;
  for (; r < i.length; ) {
    const l = i.codePointAt(r), v = String.fromCodePoint(l), y = v.length;
    if (eo$1.has(v)) {
      t = true, h = v, u += v, s = i.startsWith(wo, r + 1), r += 1;
      continue;
    }
    if (t) {
      h += v, u += v, s ? v === Oo && (t = s = false) : v === Ie$1 && (t = false, a.processEscape(h)), r += 1;
      continue;
    }
    const c = gC(v), b = v === " ";
    if (c === 0) {
      u += v, r += y;
      continue;
    }
    if (g + c > o && (u && n.push(u + a.getEndEscapesForAllActiveAttributes()), u = a.getStartEscapesForAllActiveAttributes(), g = Hi(u), b && e)) {
      for (; r < i.length && i[r] === " "; ) r += 1;
      continue;
    }
    if (u += v, g += c, g === o && r + y < i.length && (n.push(u + a.getEndEscapesForAllActiveAttributes()), u = a.getStartEscapesForAllActiveAttributes(), g = Hi(u), r + y < i.length && i[r + y] === " " && e)) {
      for (r += y; r < i.length && i[r] === " "; ) r += 1;
      continue;
    }
    r += y;
  }
  return u && n.push(u + a.getEndEscapesForAllActiveAttributes()), e ? n.map((l) => Fi(l)) : n;
};
const dC = (i, o, e) => {
  if (i.length === 0) return [];
  const n = e ? i.trim() : i;
  if (n.length === 0) return [];
  const a = [];
  let u = "", g = 0;
  return aC(n, { getWidth: Hi, onSegment: (t, s) => {
    const h = t.text ?? "";
    if (t.isEscapeSequence) u += h;
    else {
      const r = h === " ";
      if (t.width === 0) return u += h, true;
      if (g + t.width > o && (u && a.push(u), u = s.getStartEscapesForAllActiveAttributes(), g = 0, r)) return e || a.push(s.getStartEscapesForAllActiveAttributes() + h), true;
      u += h, g += t.width;
    }
    return true;
  } }), u && a.push(u), e ? a.map((t) => Fi(t)) : a;
};
const tC = (i, o, e) => {
  if (i.length === 0) return [];
  const n = e ? i.trim() : i;
  if (n.length === 0) return [];
  const a = n.split(Fd), u = [];
  let g = "", t = 0, s = 0;
  for (; s < a.length; ) {
    const h = a[s], r = Kd.test(h), l = Hi(h);
    if (h.length === 0) {
      s += 1;
      continue;
    }
    if (e && r && t === 0) {
      s += 1;
      continue;
    }
    if (t + l > o && t > 0) {
      e ? u.push(Fi(g)) : u.push(g), g = "", t = 0;
      continue;
    }
    g += h, t += l, s += 1;
  }
  return g && (e ? u.push(Fi(g)) : u.push(g)), u;
};
const sC = (i, o, e) => {
  if (i.length === 0) return [];
  const n = e ? i.trim() : i;
  if (n.length === 0) return [];
  const a = n.split(Fd), u = [];
  let g = "", t = 0, s = 0;
  for (; s < a.length; ) {
    const h = a[s], r = Kd.test(h), l = Hi(h);
    if (h.length === 0) {
      s += 1;
      continue;
    }
    if (e && r && t === 0) {
      s += 1;
      continue;
    }
    if (l > o) {
      g && u.push(De$1(e ? Fi(g) : g));
      const v = Rd(h, o, e);
      if (v.length > 0) {
        for (let y = 0; y < v.length - 1; y += 1) u.push(v[y]);
        g = v.at(-1), t = Hi(g);
      } else g = "", t = 0;
      s += 1;
      continue;
    }
    if (t + l > o && t > 0 && (u.push(De$1(e ? Fi(g) : g)), g = "", t = 0, e && r)) {
      s += 1;
      continue;
    }
    g += h, t += l, s += 1;
  }
  return g && u.push(De$1(e ? Fi(g) : g)), u;
};
const bo = { BREAK_AT_CHARACTERS: "BREAK_AT_CHARACTERS", BREAK_WORDS: "BREAK_WORDS", PRESERVE_WORDS: "PRESERVE_WORDS", STRICT_WIDTH: "STRICT_WIDTH" };
const hC = (i, o = {}) => {
  const { removeZeroWidthCharacters: e = true, trim: n = true, width: a = 80, wrapMode: u = bo.PRESERVE_WORDS } = o;
  if (n && i.trim() === "") return "";
  let g = i.normalize("NFC").replaceAll(`\r
`, `
`);
  return e && (g = g.replaceAll(Yt$1, "")), g.split(`
`).map((t) => {
    if (n && t.trim() === "") return "";
    let s;
    switch (u) {
      case bo.BREAK_AT_CHARACTERS: {
        s = dC(t, a, n);
        break;
      }
      case bo.BREAK_WORDS: {
        s = sC(t, a, n);
        break;
      }
      case bo.STRICT_WIDTH: {
        s = Rd(t, a, n);
        break;
      }
      default:
        s = tC(t, a, n);
    }
    return uC(s);
  }).join(`
`);
};
const Ad = 80;
const _d = 24;
const $e$2 = (i, o, { shell: e, env: n } = {}) => qd(i, o, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"], timeout: 500, shell: e, env: n }).trim();
const Fo = (i, o) => ({ columns: Number.parseInt(i, 10), rows: Number.parseInt(o, 10) });
const Od = (i, o) => {
  const { columns: e, rows: n } = Fo(i, o);
  if (!(Number.isNaN(e) || Number.isNaN(n)) && !(e === Ad && n === _d)) return { columns: e, rows: n };
};
const rC = () => {
  if (Pi.platform !== "linux") return true;
  try {
    const i = co.readFileSync("/proc/self/stat", "utf8"), o = i.lastIndexOf(") ");
    if (o === -1) return false;
    const e = i.slice(o + 2).trim().split(/\s+/), n = Number.parseInt(e[2], 10), a = Number.parseInt(e[5], 10);
    return Number.isNaN(n) || Number.isNaN(a) || a <= 0 ? false : n === a;
  } catch {
    return false;
  }
};
function Te$2() {
  const { env: i, stdout: o, stderr: e } = Pi;
  if (o?.columns && o?.rows) return Fo(o.columns, o.rows);
  if (e?.columns && e?.rows) return Fo(e.columns, e.rows);
  if (i.COLUMNS && i.LINES) return Fo(i.COLUMNS, i.LINES);
  const n = { columns: Ad, rows: _d };
  return Pi.platform === "win32" ? Be$2() ?? n : Pi.platform === "darwin" ? hu() ?? Be$2() ?? n : hu() ?? Be$2() ?? lC() ?? n;
}
const hu = () => {
  try {
    const i = Pi.platform === "darwin" ? co.constants.O_EVTONLY | co.constants.O_NONBLOCK : co.constants.O_NONBLOCK, { columns: o, rows: e } = Id.WriteStream(co.openSync("/dev/tty", i));
    return { columns: o, rows: e };
  } catch {
  }
};
const Be$2 = () => {
  try {
    const i = $e$2("tput", ["cols"], { env: { TERM: "dumb", ...Pi.env } }), o = $e$2("tput", ["lines"], { env: { TERM: "dumb", ...Pi.env } });
    if (i && o) return Od(i, o);
  } catch {
  }
};
const lC = () => {
  try {
    if (!rC()) return;
    const i = $e$2("resize", ["-u"]).match(/\d+/g);
    if (i.length === 2) return Od(i[0], i[1]);
  } catch {
  }
};
class yC {
  #i;
  #a = false;
  #n = false;
  #o = 0;
  #e = 0;
  #u;
  #g;
  constructor(o, e) {
    this.#i = { stderr: e, stdout: o }, this.#u = Te$2(), this.#g = () => {
      this.#u = Te$2();
    };
    for (const n of Object.keys(this.#i)) this.#i[n].onEarlyFlush(() => {
      this.erase(n), this.#o = 0, this.#e = 0;
    });
  }
  get lastLength() {
    return this.#o;
  }
  get outside() {
    return this.#e;
  }
  get isHooked() {
    return this.#a;
  }
  get isSuspended() {
    return this.#n;
  }
  clear(o) {
    this.erase(o), this.#o = 0, this.#e = 0;
  }
  done(o) {
    this.#o = 0, this.#e = 0;
  }
  erase(o, e = this.#o) {
    this.#i[o].erase(e);
  }
  hook() {
    if (this.#a) return false;
    const o = Object.values(this.#i);
    for (const e of o) e.active();
    return this.#u = Te$2(), process.stdout.isTTY && typeof process.stdout.on == "function" && process.stdout.on("resize", this.#g), this.#d(true), true;
  }
  resume(o, e) {
    if (this.#n && this.#a) {
      this.#n = false, e && this.erase(o, e), this.#o = 0, this.#e = 0;
      const n = Object.values(this.#i);
      for (const a of n) a.active();
    }
  }
  suspend(o, e = true) {
    if (!this.#n) {
      this.#n = true, e && this.erase(o);
      const n = Object.values(this.#i);
      for (const a of n) a.renew();
    }
  }
  unhook(o = true) {
    if (!this.#a) return false;
    const e = Object.values(this.#i);
    for (const n of e) n.inactive(o);
    return typeof process.stdout.off == "function" && process.stdout.off("resize", this.#g), this.#d(), true;
  }
  update(o, e, n = 0) {
    if (this.#n) return;
    if (e.length === 0) {
      this.clear(o);
      return;
    }
    const a = this.#i[o], { columns: u, rows: g } = this.#u, t = Math.max(0, Math.min(g - 1, n)), s = this.lastLength - t, h = Math.max(s - g, this.outside);
    let r = e.flatMap((l) => hC(l, { trim: false, width: u, wrapMode: bo.STRICT_WIDTH }).split(`
`));
    g <= s ? (a.erase(g), t < h && (r = r.slice(h - t + 1))) : s && a.erase(s), a.write(`${r.join(`
`)}
`), this.#o = h ? h + r.length + 1 : t + r.length, this.#e = Math.max(this.lastLength - g, this.outside);
  }
  #d(o = false) {
    this.#a = o, this.#o = 0, this.#e = 0;
  }
}

let m;
const N$2 = (t) => (m ??= createRequire(import.meta.url))(t);
const a$1 = typeof globalThis < "u" && typeof globalThis.process < "u" ? globalThis.process : process;
const P$2 = (t) => {
  if (typeof a$1 < "u" && a$1.versions && a$1.versions.node) {
    const [e, i] = a$1.versions.node.split(".").map(Number);
    if (e > 22 || e === 22 && i >= 3 || e === 20 && i >= 16) return a$1.getBuiltinModule(t);
  }
  return N$2(t);
};
const { StringDecoder: A$1 } = P$2("node:string_decoder");
const s = "\x1B[";
const p = ";";
const D$1 = typeof globalThis < "u" && typeof globalThis.process < "u" ? globalThis.process : process;
const h = D$1;
const b$2 = (t, e, i, n) => {
  if (i === "length" || i === "prototype" || i === "arguments" || i === "caller") return;
  const r = Object.getOwnPropertyDescriptor(t, i), o = Object.getOwnPropertyDescriptor(e, i);
  !w(r, o) && n || Object.defineProperty(t, i, o);
};
const w = function(t, e) {
  return t === void 0 || t.configurable || t.writable === e.writable && t.enumerable === e.enumerable && t.configurable === e.configurable && (t.writable || t.value === e.value);
};
const L$1 = (t, e) => {
  const i = Object.getPrototypeOf(e);
  i !== Object.getPrototypeOf(t) && Object.setPrototypeOf(t, i);
};
const x = (t, e) => `/* Wrapped ${t}*/
${e}`;
const C$1 = Object.getOwnPropertyDescriptor(Function.prototype, "toString");
const v$1 = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name");
const M$1 = (t, e, i) => {
  const n = i === "" ? "" : `with ${i.trim()}() `, r = x.bind(null, n, e.toString());
  Object.defineProperty(r, "name", v$1);
  const { writable: o, enumerable: c, configurable: f } = C$1;
  Object.defineProperty(t, "toString", { value: r, writable: o, enumerable: c, configurable: f });
};
function B$2(t, e, { ignoreNonConfigurable: i = false } = {}) {
  const { name: n } = t;
  for (const r of Reflect.ownKeys(e)) b$2(t, e, r, i);
  return L$1(t, e), M$1(t, e, n), t;
}
const u = /* @__PURE__ */ new WeakMap();
const S$1 = (t, e = {}) => {
  if (typeof t != "function") throw new TypeError("Expected a function");
  let i, n = 0;
  const r = t.displayName || t.name || "<anonymous>", o = function(...c) {
    if (u.set(o, ++n), n === 1) i = t.apply(this, c), t = void 0;
    else if (e.throw === true) throw new Error(`Function \`${r}\` can only be called once`);
    return i;
  };
  return B$2(o, t), u.set(o, n), o;
};
S$1.callCount = (t) => {
  if (!u.has(t)) throw new Error(`The given function \`${t.name}\` is not wrapped by the \`onetime\` package`);
  return u.get(t);
};
const l = [];
l.push("SIGHUP", "SIGINT", "SIGTERM");
process.platform !== "win32" && l.push("SIGALRM", "SIGABRT", "SIGVTALRM", "SIGXCPU", "SIGXFSZ", "SIGUSR2", "SIGTRAP", "SIGSYS", "SIGQUIT", "SIGIOT");
process.platform === "linux" && l.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT");
const _$1 = (t) => !!t && true && typeof t.removeListener == "function" && typeof t.emit == "function" && typeof t.reallyExit == "function" && typeof t.listeners == "function" && typeof t.kill == "function" && typeof t.pid == "number" && typeof t.on == "function";
const T = /* @__PURE__ */ Symbol.for("signal-exit emitter");
const O$1 = globalThis;
const X$1 = Object.defineProperty.bind(Object);
let Z$1 = class Z {
  emitted = { afterExit: false, exit: false };
  listeners = { afterExit: [], exit: [] };
  count = 0;
  id = Math.random();
  constructor() {
    if (O$1[T]) return O$1[T];
    X$1(O$1, T, { value: this, writable: false, enumerable: false, configurable: false });
  }
  on(e, i) {
    this.listeners[e].push(i);
  }
  removeListener(e, i) {
    const n = this.listeners[e], r = n.indexOf(i);
    r !== -1 && (r === 0 && n.length === 1 ? n.length = 0 : n.splice(r, 1));
  }
  emit(e, i, n) {
    if (this.emitted[e]) return false;
    this.emitted[e] = true;
    let r = false;
    for (const o of this.listeners[e]) r = o(i, n) === true || r;
    return e === "exit" && (r = this.emit("afterExit", i, n) || r), r;
  }
};
let g = class {
};
const G$1 = (t) => ({ onExit(e, i) {
  return t.onExit(e, i);
}, load() {
  return t.load();
}, unload() {
  return t.unload();
} });
let j$1 = class j extends g {
  onExit() {
    return () => {
    };
  }
  load() {
  }
  unload() {
  }
};
let $ = class extends g {
  #s = E$1.platform === "win32" ? "SIGINT" : "SIGHUP";
  #e = new Z$1();
  #t;
  #n;
  #o;
  #r = {};
  #i = false;
  constructor(e) {
    super(), this.#t = e, this.#r = {};
    for (const i of l) this.#r[i] = () => {
      const n = this.#t.listeners(i);
      let { count: r } = this.#e;
      const o = e;
      if (typeof o.__signal_exit_emitter__ == "object" && typeof o.__signal_exit_emitter__.count == "number" && (r += o.__signal_exit_emitter__.count), n.length === r) {
        this.unload();
        const c = this.#e.emit("exit", null, i), f = i === "SIGHUP" ? this.#s : i;
        c || e.kill(e.pid, f);
      }
    };
    this.#o = e.reallyExit, this.#n = e.emit;
  }
  onExit(e, i) {
    if (!_$1(this.#t)) return () => {
    };
    this.#i === false && this.load();
    const n = i?.alwaysLast ? "afterExit" : "exit";
    return this.#e.on(n, e), () => {
      this.#e.removeListener(n, e), this.#e.listeners.exit.length === 0 && this.#e.listeners.afterExit.length === 0 && this.unload();
    };
  }
  load() {
    if (!this.#i) {
      this.#i = true, this.#e.count += 1;
      for (const e of l) try {
        const i = this.#r[e];
        i && this.#t.on(e, i);
      } catch {
      }
      this.#t.emit = (e, ...i) => this.#c(e, ...i), this.#t.reallyExit = (e) => this.#l(e);
    }
  }
  unload() {
    this.#i && (this.#i = false, l.forEach((e) => {
      const i = this.#r[e];
      if (!i) throw new Error("Listener not defined for signal: " + e);
      try {
        this.#t.removeListener(e, i);
      } catch {
      }
    }), this.#t.emit = this.#n, this.#t.reallyExit = this.#o, this.#e.count -= 1);
  }
  #l(e) {
    return _$1(this.#t) ? (this.#t.exitCode = e || 0, this.#e.emit("exit", this.#t.exitCode, null), this.#o.call(this.#t, this.#t.exitCode)) : 0;
  }
  #c(e, ...i) {
    const n = this.#n;
    if (e === "exit" && _$1(this.#t)) {
      typeof i[0] == "number" && (this.#t.exitCode = i[0]);
      const r = n.call(this.#t, e, ...i);
      return this.#e.emit("exit", this.#t.exitCode, null), r;
    } else return n.call(this.#t, e, ...i);
  }
};
const E$1 = globalThis.process;
const { onExit: U$3 } = G$1(_$1(E$1) ? new $(E$1) : new j$1());
const R$2 = h.stderr.isTTY ? h.stderr : h.stdout.isTTY ? h.stdout : void 0;
R$2 && S$1(() => {
  U$3(() => {
    R$2.write("\x1B[?25h");
  }, { alwaysLast: true });
});
const Y$1 = `${s}?25l`;
const k$1 = `${s}G`;
const F$1 = `${s}?25h`;
const H$1 = (t = 1) => `${s}${String(t)}A`;
var q$1 = ((t) => (t[t.Default = 0] = "Default", t[t.BlinkingBlock = 1] = "BlinkingBlock", t[t.SteadyBlock = 2] = "SteadyBlock", t[t.BlinkingUnderline = 3] = "BlinkingUnderline", t[t.SteadyUnderline = 4] = "SteadyUnderline", t[t.BlinkingBar = 5] = "BlinkingBar", t[t.SteadyBar = 6] = "SteadyBar", t))(q$1 || {});
var V$3 = ((t) => (t[t.ToEnd = 0] = "ToEnd", t[t.ToBeginning = 1] = "ToBeginning", t[t.EntireScreen = 2] = "EntireScreen", t[t.EntireScreenAndScrollback = 3] = "EntireScreenAndScrollback", t))(V$3 || {});
var K$3 = ((t) => (t[t.ToEnd = 0] = "ToEnd", t[t.ToBeginning = 1] = "ToBeginning", t[t.EntireLine = 2] = "EntireLine", t))(K$3 || {});
const Q$2 = (t) => {
  const e = t ;
  return `${s}${String(e)}K`;
};
const z$1 = Q$2(2);
const J$2 = (t) => {
  if (t <= 0) return "";
  let e = "";
  for (let i = 0; i < t; i += 1) e += z$1, i < t - 1 && (e += H$1());
  return e += k$1, e;
};
var tt$2 = ((t) => (t[t.NotRecognized = 0] = "NotRecognized", t[t.Set = 1] = "Set", t[t.Reset = 2] = "Reset", t[t.PermanentlySet = 3] = "PermanentlySet", t[t.PermanentlyReset = 4] = "PermanentlyReset", t))(tt$2 || {});
let et$2 = class et {
  constructor(e) {
    this.reportCode = e;
  }
  reportCode;
  isDecReport = false;
};
let it$2 = class it {
  constructor(e) {
    this.reportCode = e;
  }
  reportCode;
  isDecReport = true;
};
const rt$2 = (t) => new et$2(t);
const d = (t) => new it$2(t);
const I$1 = (...t) => {
  if (t.length === 0) return "";
  const e = t.filter((r) => !r.isDecReport).map((r) => r.reportCode.toString()), i = t.filter((r) => r.isDecReport).map((r) => r.reportCode.toString());
  let n = "";
  return e.length > 0 && (n += `${s}${e.join(p)}n`), i.length > 0 && (n += `${s}?${i.join(p)}n`), n;
};
const nt$2 = rt$2(5);
I$1(nt$2);
const ot$2 = d(15);
I$1(ot$2);
const st$2 = d(25);
I$1(st$2);
const lt$2 = d(26);
I$1(lt$2);
var ct$2 = ((t) => (t[t.DEICONIFY_WINDOW = 1] = "DEICONIFY_WINDOW", t[t.ICONIFY_WINDOW = 2] = "ICONIFY_WINDOW", t[t.MOVE_WINDOW = 3] = "MOVE_WINDOW", t[t.RESIZE_TEXT_AREA_CHARS = 4] = "RESIZE_TEXT_AREA_CHARS", t[t.RAISE_WINDOW = 5] = "RAISE_WINDOW", t[t.LOWER_WINDOW = 6] = "LOWER_WINDOW", t[t.REFRESH_WINDOW = 7] = "REFRESH_WINDOW", t[t.RESIZE_TEXT_AREA_PIXELS = 8] = "RESIZE_TEXT_AREA_PIXELS", t[t.RESTORE_MAXIMIZED_WINDOW = 9] = "RESTORE_MAXIMIZED_WINDOW", t[t.MAXIMIZE_WINDOW = 10] = "MAXIMIZE_WINDOW", t[t.MAXIMIZE_WINDOW_VERTICALLY = 10.1] = "MAXIMIZE_WINDOW_VERTICALLY", t[t.MAXIMIZE_WINDOW_HORIZONTALLY = 10.2] = "MAXIMIZE_WINDOW_HORIZONTALLY", t[t.UNDO_FULL_SCREEN_MODE = 10.3] = "UNDO_FULL_SCREEN_MODE", t[t.REPORT_WINDOW_STATE = 11] = "REPORT_WINDOW_STATE", t[t.REPORT_WINDOW_POSITION = 13] = "REPORT_WINDOW_POSITION", t[t.REPORT_TEXT_AREA_SIZE_CHARS = 14] = "REPORT_TEXT_AREA_SIZE_CHARS", t[t.REQUEST_WINDOW_SIZE_WIN_OP_COMPAT = 14] = "REQUEST_WINDOW_SIZE_WIN_OP_COMPAT", t[t.REPORT_CELL_SIZE_PIXELS = 16] = "REPORT_CELL_SIZE_PIXELS", t[t.REPORT_TEXT_AREA_SIZE_PIXELS = 18] = "REPORT_TEXT_AREA_SIZE_PIXELS", t[t.REPORT_ICON_LABEL = 19] = "REPORT_ICON_LABEL", t[t.REPORT_WINDOW_TITLE = 21] = "REPORT_WINDOW_TITLE", t[t.PUSH_WINDOW_TITLE = 22] = "PUSH_WINDOW_TITLE", t[t.POP_WINDOW_TITLE = 23] = "POP_WINDOW_TITLE", t[t.RESIZE_SCREEN_AND_TEXT_AREA = 24] = "RESIZE_SCREEN_AND_TEXT_AREA", t))(ct$2 || {});
const at$2 = 1e4;
let W$2 = class W {
  static DRAIN = true;
  #s = new A$1();
  #e = [];
  #t;
  #n;
  #o;
  #r;
  #i;
  isTTY;
  constructor(e, i = {}) {
    this.#r = e.write.bind(e), this.#i = e, this.#o = i.maxHistory ?? at$2, this.isTTY = e.isTTY;
  }
  active() {
    this.isTTY && this.write(Y$1);
    const e = (i, ...n) => {
      const r = n.at(-1);
      return this.#e.push(typeof i == "string" ? i : this.#s.write(Buffer.from(i))), this.#e.length > this.#o && (this.isTTY && this.#n !== void 0 && this.#n(), this.#l(this.#e.length - Math.floor(this.#o / 2))), typeof r == "function" && r(), W.DRAIN;
    };
    this.#t = e, this.#i.write = this.#t;
  }
  erase(e) {
    e > 0 && this.isTTY && this.write(J$2(e + 1));
  }
  inactive(e = false) {
    this.#e.length > 0 && (e && this.write(`
`), this.#l(this.#e.length));
    const i = this.#s.end();
    i && this.write(i), this.renew();
  }
  renew() {
    this.#t === void 0 || this.#i.write === this.#t ? this.#i.write = this.#r : console.warn("[@visulima/interactive-manager] stream.write was replaced by a third party while the hook was active; leaving it untouched to avoid stomping the other patch."), this.#t = void 0, this.isTTY && this.write(F$1);
  }
  onEarlyFlush(e) {
    this.#n = e;
  }
  write(e) {
    this.#r.apply(this.#i, [e]);
  }
  #l(e) {
    if (e <= 0) return;
    const i = this.#e.splice(0, e);
    for (const n of i) this.write(n);
  }
};

let bt$1;
const $t$1 = (e) => (bt$1 ??= createRequire(import.meta.url))(e);
const z = typeof globalThis < "u" && typeof globalThis.process < "u" ? globalThis.process : I;
const fe = (e) => {
  if (typeof z < "u" && z.versions && z.versions.node) {
    const [t, n] = z.versions.node.split(".").map(Number);
    if (t > 22 || t === 22 && n >= 3 || t === 20 && n >= 16) return z.getBuiltinModule(e);
  }
  return $t$1(e);
};
const I = z;
const { execFileSync: wt$1 } = fe("node:child_process");
const P$1 = fe("node:fs");
const vt$1 = fe("node:tty");
const qr = { alert: 7, critical: 6, debug: 1, emergency: 8, error: 5, informational: 2, notice: 3, trace: 2, warning: 4 };
const St$1 = { alert: { color: "red", label: "alert", logLevel: "alert" }, await: { color: "blue", label: "awaiting", logLevel: "informational" }, complete: { color: "cyan", label: "complete", logLevel: "informational" }, critical: { color: "redBright", label: "critical", logLevel: "critical" }, debug: { color: "gray", label: "debug", logLevel: "debug" }, emergency: { color: "redBright", label: "emergency", logLevel: "emergency" }, error: { color: "red", label: "error", logLevel: "error" }, info: { color: "blueBright", label: "info", logLevel: "informational" }, log: { label: "", logLevel: "informational" }, notice: { color: "magentaBright", label: "notice", logLevel: "notice" }, pending: { color: "magenta", label: "pending", logLevel: "informational" }, start: { color: "greenBright", label: "start", logLevel: "informational" }, stop: { color: "red", label: "stop", logLevel: "informational" }, success: { color: "green", label: "success", logLevel: "informational" }, trace: { color: "cyanBright", label: "trace", logLevel: "trace" }, wait: { color: "blue", label: "waiting", logLevel: "informational" }, warn: { color: "yellow", label: "warning", logLevel: "warning" }, warning: { color: "yellow", label: "warning", logLevel: "warning" }, watch: { color: "yellowBright", label: "watching", logLevel: "informational" } };
const Yr = /* @__PURE__ */ Symbol("EMPTY");
const Jr = (e) => {
  const t = Object.keys(e).map((n) => e[n].label ?? "");
  return t.length === 0 ? "" : t.reduce((n, r) => n.length > r.length ? n : r, "");
};
const E = "[Inspection threw]";
const b$1 = (e, t, n, r, o, s = ", ", i = Number.POSITIVE_INFINITY) => {
  const l = e.length;
  if (l === 0) return "";
  const c = Number.isFinite(i) && l > i, a = c ? Math.max(0, Math.floor(i)) : l;
  if (a === 0) return `…(${String(l)})`;
  let u = r;
  o !== void 0 && (u = o);
  const d = n.truncate, g = Number.isFinite(d);
  let f = "", h = "", p = "";
  for (let m = 0; m < a; m += 1) {
    const y = m + 1 === a, $ = m + 2 === a;
    g && (p = `…(${String(a - m)})`);
    let v = e[m];
    n.truncate = d - f.length - (y ? 0 : s.length);
    const x = h || u(v, t, n, r) + (y ? "" : s), w = f.length + x.length, L = w + p.length;
    if (y && w > d && f.length + p.length <= d || !y && !$ && L > d) break;
    v = e[m + 1];
    const T = $ ? "" : s;
    if (y ? h = "" : h = u(v, t, n, r) + T, !y && $ && L > d && w + h.length > d) break;
    if (f += x, !y && !$ && w + h.length >= d) {
      p = `…(${String(a - m - 1)})`;
      break;
    }
    p = "";
  }
  return c && p === "" && (p = `${s}… ${String(l - a)} more`), `${f}${p}`;
};
const At$1 = ([e, t], n, r) => (r.truncate -= 3, t ? `${r.stylize(String(e), "yellow")}=${r.stylize(`"${t}"`, "string")}` : r.stylize(String(e), "yellow"));
const Ce = (e) => {
  try {
    return Object.create(e, { length: { value: e.length } });
  } catch {
    return;
  }
};
const Et$1 = (e, t, n, r) => {
  let o;
  try {
    o = e.nodeType;
  } catch {
    return E;
  }
  if (o === 1) return De(e, e, n, r);
  if (o === 3) {
    let s;
    try {
      s = e.data;
    } catch {
      return E;
    }
    return r(s, void 0, n);
  }
  return r(e, void 0, n);
};
const ce$1 = (e, t, n, r) => {
  const o = Ce(e);
  return o === void 0 ? E : b$1(o, e, t, n, Et$1, `
`);
};
const De = (e, t, n, r) => {
  let o, s;
  try {
    o = e.getAttributeNames().map((f) => [f, e.getAttribute(f)]), s = e.tagName.toLowerCase();
  } catch {
    return E;
  }
  const i = n.stylize(`<${s}`, "special"), l = n.stylize(">", "special"), c = n.stylize(`</${s}>`, "special");
  n.truncate -= s.length * 2 + 5;
  let a = "";
  o.length > 0 && (a += " ", a += b$1(o, t, n, r, At$1, " ")), n.truncate -= a.length;
  const { truncate: u } = n;
  let d;
  try {
    d = Ce(e.children);
  } catch {
    d = void 0;
  }
  let g;
  return d === void 0 ? g = E : (g = ce$1(d, n, r), g && g.length > u && (g = `…(${String(d.length)})`)), `${i}${a}${l}${g}${c}`;
};
const xt$1 = (e, t, n) => e.length === 0 ? "Arguments []" : (t.truncate -= 13, `Arguments [ ${b$1(e, e, t, n, void 0, ", ", t.maxArrayLength)} ]`);
const Nt$1 = (e, t) => {
  let n;
  if (e === "	") n = "	";
  else if (typeof e == "number" && e > 0) n = Array.from({ length: e + 1 }).join(" ");
  else return;
  return { base: n, prev: `
${Array.from({ length: t + 1 }).join(n)}` };
};
const Q$1 = (e, t) => {
  if (e.length === 0) return "";
  const n = t.prev + t.base;
  return n + e.split("\0\0").join(`,${n}`) + t.prev;
};
const It = /^[a-z_]\w*$/i;
const Ot$1 = /^"|"$/g;
const kt$1 = (e, t) => {
  if (It.test(e)) return e;
  const n = JSON.stringify(e);
  return t.quoteStyle === "double" ? n.replaceAll('"', String.raw`\"`) : n.replaceAll("'", String.raw`\'`).replaceAll(String.raw`\"`, '"').replaceAll(Ot$1, "'");
};
const C = ([e, t], n, r, o) => {
  r.truncate -= 2;
  let s;
  typeof e == "string" ? s = kt$1(e, r) : typeof e == "number" ? s = String(e) : s = `[${o(e, n, r)}]`, r.truncate -= s.length;
  const i = o(t, n, r);
  return `${s}: ${i}`;
};
const Bt$1 = /* @__PURE__ */ Symbol.for("chai/inspect");
const ne$2 = (e) => ({ [Bt$1]: () => e });
const D = (e, t) => {
  let n;
  try {
    n = Object.getOwnPropertyDescriptor(e, t);
  } catch {
    n = void 0;
  }
  if (n === void 0 || "value" in n) try {
    return e[t];
  } catch {
    return ne$2(E);
  }
  if (n.get === void 0) return ne$2("[Setter]");
  try {
    return e[t];
  } catch {
    return ne$2(E);
  }
};
const Lt$1 = (e) => {
  for (const t of e) if (Array.isArray(t) || typeof t == "object" && t !== null) return true;
  return false;
};
const Tt$1 = (e) => {
  const t = [];
  for (const n of Object.keys(e)) {
    const r = Number(n);
    Number.isInteger(r) && r >= 0 && String(r) === n && r < 4294967295 || t.push(n);
  }
  return t;
};
const jt$1 = (e, t, n, r) => {
  const o = Tt$1(e);
  if (e.length === 0 && o.length === 0) return "[]";
  t.truncate -= 4;
  const s = !!r && Lt$1(e);
  let i = b$1(e, e, t, n, void 0, s ? "\0\0" : ", ", t.maxArrayLength);
  t.truncate -= i.length;
  let l = "";
  return o.length > 0 && (l = b$1(o.map((c) => [c, D(e, c)]), e, t, n, C)), s && r && (i = Q$1(i, r)), `[${s ? "" : " "}${i}${l ? `, ${l}` : ""}${s ? "" : " "}]`;
};
const Ft = 50;
const pe$1 = (e, t) => {
  const n = new Uint8Array(e), r = Math.min(n.length, Ft);
  let o = "", s = false;
  for (let a = 0; a < r; a += 1) {
    const u = n[a];
    u !== 0 && (s = true), o += (a === 0 ? "" : " ") + u.toString(16).padStart(2, "0");
  }
  n.length > r && (o += ` ... ${String(n.length - r)} more byte${n.length - r === 1 ? "" : "s"}`);
  const i = e instanceof ArrayBuffer ? "ArrayBuffer" : "SharedArrayBuffer", l = s || n.length > r, c = o !== "" && l ? `[Uint8Contents]: <${o}>, ` : "";
  return `${t.stylize(i, "special")} { ${c}byteLength: ${t.stylize(String(e.byteLength), "number")} }`;
};
const me$1 = /\d(?=(?:\d{3})+(?!\d))/g;
const Wt = /\d{3}/g;
const Mt$1 = /_$/;
const Ve = (e, t) => {
  if (t.length < 4 || t.length === 4 && t.codePointAt(0) === 45 || e === Number.POSITIVE_INFINITY || e === Number.NEGATIVE_INFINITY || t.includes("e")) return t;
  if (typeof e == "number") {
    const n = e < 0 ? -Math.floor(-e) : Math.floor(e);
    if (n !== e) {
      const r = String(n), o = t.slice(r.length + 1);
      return `${r.replace(me$1, "$&_")}.${o.replace(Wt, "$&_").replace(Mt$1, "")}`;
    }
  }
  return t.replace(me$1, "$&_");
};
const _t = (e) => e >= "\uD800" && e <= "\uDBFF";
const B$1 = (e, t, n = "…") => {
  e = String(e);
  const r = n.length, o = e.length;
  if (r > t && o > r) return n;
  if (o > t && o > r) {
    let s = t - r;
    return s > 0 && _t(e[s - 1]) && (s -= 1), `${e.slice(0, s)}${n}`;
  }
  return e;
};
const ye = (e, t) => {
  let n = B$1(e.toString(), t.truncate - 1);
  return n !== "…" && (n += "n"), t.stylize(t.numericSeparator ? Ve(e, n) : n, "bigint");
};
const Ge$1 = (e) => {
  try {
    return Array.isArray(e);
  } catch {
    return false;
  }
};
const F = (e, t) => {
  try {
    return e[t];
  } catch {
    return;
  }
};
const zt = (e, t) => {
  try {
    return e instanceof t;
  } catch {
    return false;
  }
};
const be$1 = (e, t) => {
  try {
    return Object.getOwnPropertyDescriptor(e, t)?.enumerable ?? false;
  } catch {
    return true;
  }
};
const Rt$1 = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : void 0);
const K$2 = (e, t, n, r) => {
  if ("window" in globalThis && e === globalThis) return "{ [object Window] }";
  if (e === globalThis) return "{ [object globalThis] }";
  let o, s;
  try {
    o = Object.getOwnPropertyNames(e), s = Object.getOwnPropertySymbols(e);
  } catch {
    return E;
  }
  let i, l;
  try {
    i = t.showHidden ? o : o.filter((f) => Object.getOwnPropertyDescriptor(e, f)?.enumerable);
  } catch {
    i = o.filter((f) => be$1(e, f));
  }
  try {
    l = s.filter((f) => t.showHidden || Object.getOwnPropertyDescriptor(e, f)?.enumerable);
  } catch {
    l = s.filter((f) => be$1(e, f));
  }
  let c;
  try {
    const f = Rt$1(e) === Object.prototype || e.constructor === Object, h = e instanceof Object ? "" : "null prototype";
    let p;
    !f && Symbol.toStringTag in e ? p = e[Symbol.toStringTag] : p = h ? "Object" : "", c = p || h ? `[${[p, h].filter(Boolean).join(": ")}] ` : "";
  } catch {
    c = "";
  }
  if (i.length === 0 && l.length === 0) return `${c}{}`;
  t.truncate -= 4;
  const a = r ? "\0\0" : ", ", u = b$1(i.map((f) => [f, D(e, f)]), e, t, n, C, a), d = b$1(l.map((f) => [f, D(e, f)]), e, t, n, C, a);
  let g = "";
  return u && d && (g = a), r ? `${c}{${Q$1(u + g + d, r)}}` : `${c}{ ${u}${g}${d} }`;
};
const Pt = (e, t, n, r) => {
  let o;
  try {
    o = typeof e.constructor == "function" ? e.constructor.name : "";
  } catch {
    o = "";
  }
  return (!o || o === "_class") && (o = "<Anonymous Class>"), t.truncate -= o.length, `${o} ${K$2(e, t, n, r)}`;
};
const Ct = (e, t) => {
  const n = t.stylize(String(e.byteLength), "number"), r = t.stylize(String(e.byteOffset), "number"), o = t.stylize(String(e.buffer.byteLength), "number");
  return `${t.stylize("DataView", "special")} { byteLength: ${n}, byteOffset: ${r}, buffer: ArrayBuffer { byteLength: ${o} } }`;
};
const Dt = (e, t) => {
  const n = e.toJSON();
  if (n === null) return "Invalid Date";
  const r = n.split("T"), o = r[0];
  return t.stylize(`${o}T${B$1(r[1], t.truncate - o.length - 1)}`, "date");
};
const Vt = /* @__PURE__ */ new Set(["column", "columnNumber", "description", "fileName", "line", "lineNumber", "message", "name", "number", "stack"]);
const Gt = (e, t, n) => {
  const r = Object.getOwnPropertyNames(e).filter((l) => !Vt.has(l)), { name: o } = e;
  t.truncate -= o.length;
  let s = "";
  typeof e.message == "string" ? s = B$1(e.message, t.truncate) : r.unshift("message"), s = s ? `: ${s}` : "", t.truncate -= s.length + 5;
  const i = b$1(r.map((l) => [l, D(e, l)]), e, t, n, C);
  return `${o}${s}${i ? ` { ${i} }` : ""}`;
};
const $e$1 = (e, t) => {
  let n, r, o;
  try {
    n = e[Symbol.toStringTag] || "Function", r = e.toString(), { name: o } = e;
  } catch {
    return t.stylize(E, "special");
  }
  return r.length < t.truncate - 12 ? t.stylize(`[${n}: ${r}]`, "special") : o ? t.stylize(`[${n} ${B$1(o, t.truncate - 11)}]`, "special") : t.stylize(`[${n}]`, "special");
};
const we$1 = (e, t) => {
  const n = F(e, Symbol.toStringTag), r = typeof n == "string" ? n : "Generator";
  return `${t.stylize(`Object [${r}]`, "special")} {}`;
};
const Ht = ([e, t], n, r, o) => (r.truncate -= 4, e = o(e, n, r), r.truncate -= e.length, `${e} => ${o(t, n, r)}`);
const Ut = (e, t, n, r) => {
  if (e.size <= 0) return "Map (0) {}";
  t.truncate -= 7;
  let o = b$1([...e.entries()], e, t, n, Ht, r ? "\0\0" : ", ", t.maxArrayLength);
  return r && (o = Q$1(o, r)), `Map (${String(e.size)}) {${r ? "" : " "}${o}${r ? "" : " "}}`;
};
function ve(e, t) {
  return Number.isNaN(e) ? t.stylize("NaN", "number") : e === Number.POSITIVE_INFINITY ? t.stylize("Infinity", "number") : e === Number.NEGATIVE_INFINITY ? t.stylize("-Infinity", "number") : e === 0 ? t.stylize(1 / e === Number.POSITIVE_INFINITY ? "+0" : "-0", "number") : t.stylize(B$1(t.numericSeparator ? Ve(e, e.toString()) : e.toString(), t.truncate), "number");
}
const qt = () => "Promise{…}";
const Yt = (e, t) => {
  const n = t.truncate - (2 + e.flags.length);
  return t.stylize(`/${B$1(e.source, n)}/${e.flags}`, "regexp");
};
const Jt = (e, t, n, r) => {
  if (e.size === 0) return "Set (0) {}";
  t.truncate -= 7;
  let o = b$1([...e], e, t, n, void 0, r ? "\0\0" : ", ", t.maxArrayLength);
  return r && (o = Q$1(o, r)), `Set (${String(e.size)}) {${r ? "" : " "}${o}${r ? "" : " "}}`;
};
const Kt = (e, t) => {
  const n = t.quoteStyle === "double" ? '"' : "'";
  return n + e + n;
};
const Se$1 = new RegExp(String.raw`['\0-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5` + String.raw`\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]`, "g");
const Zt = { "	": String.raw`\t`, "\n": String.raw`\n`, "\f": String.raw`\f`, "\r": String.raw`\r`, "\b": String.raw`\b`, "'": String.raw`\'`, "\\": "\\\\" };
const Xt = 16;
const Qt = (e) => Zt[e] || String.raw`\u${`0000${e.codePointAt(0).toString(Xt)}`.slice(-4)}`;
const Ae = (e, t) => (Se$1.test(e) && (e = e.replaceAll(Se$1, Qt)), t.stylize(Kt(B$1(e, t.truncate - 2), t), "string"));
const Ee = (e) => "description" in Symbol.prototype ? e.description ? `Symbol(${e.description})` : "Symbol()" : e.toString();
const en = (e) => typeof Buffer == "function" && e instanceof Buffer ? "Buffer" : e[Symbol.toStringTag];
const S = (e, t, n) => {
  const r = en(e);
  t.truncate -= r.length + 4;
  const o = Object.keys(e).slice(e.length);
  if (e.length === 0 && o.length === 0) return `${r}[]`;
  let s = "";
  const i = Number.isFinite(t.maxArrayLength) ? Math.min(e.length, Math.max(0, Math.floor(t.maxArrayLength))) : e.length;
  for (let c = 0; c < i; c++) {
    const a = `${t.stylize(B$1(e[c], t.truncate), "number")}${c === i - 1 ? "" : ", "}`;
    if (t.truncate -= a.length, c !== i - 1 && t.truncate <= 3) {
      s += `…(${String(e.length - c)})`;
      break;
    }
    s += a;
  }
  i < e.length && (s += `${s ? ", " : ""}… ${String(e.length - i)} more`);
  let l = "";
  return o.length > 0 && (l = b$1(o.map((c) => [c, D(e, c)]), e, t, n, C)), `${r}[ ${s}${l ? `, ${l}` : ""} ]`;
};
const xe$1 = (e) => typeof F(e, Symbol.toStringTag) != "string";
const tn = (e) => typeof e == "function";
const He$1 = (e, t, n) => {
  if (e == null) return;
  const r = Object.getOwnPropertyDescriptor(e, t);
  if (r === void 0) return;
  const o = n === "get" ? r.get : r.value;
  return typeof o == "function" ? o : void 0;
};
const Ue$1 = (e, t) => {
  if (e !== void 0) return (n) => {
    try {
      return e.call(n, t), true;
    } catch {
      return false;
    }
  };
};
const j = (e, t) => Ue$1(He$1(e, t, "get"));
const N$1 = (e, t, n) => Ue$1(He$1(e, t, "value"), n);
const Ne = Object.freeze({});
const A = j(Reflect.getPrototypeOf(Int8Array.prototype), "length");
const nn = typeof SharedArrayBuffer == "function" ? SharedArrayBuffer.prototype : void 0;
const rn = Object.assign(/* @__PURE__ */ Object.create(null), { Arguments: xe$1, Array: Ge$1, ArrayBuffer: j(ArrayBuffer.prototype, "byteLength"), BigInt: N$1(BigInt.prototype, "valueOf"), Boolean: N$1(Boolean.prototype, "valueOf"), DataView: j(DataView.prototype, "byteLength"), Date: N$1(Date.prototype, "valueOf"), Error: xe$1, Float32Array: A, Float64Array: A, Function: tn, Int8Array: A, Int16Array: A, Int32Array: A, Map: j(Map.prototype, "size"), Number: N$1(Number.prototype, "valueOf"), RegExp: j(RegExp.prototype, "source"), Set: j(Set.prototype, "size"), SharedArrayBuffer: j(nn, "byteLength"), String: N$1(String.prototype, "valueOf"), Symbol: N$1(Symbol.prototype, "valueOf"), Uint8Array: A, Uint8ClampedArray: A, Uint16Array: A, Uint32Array: A, WeakMap: N$1(WeakMap.prototype, "has", Ne), WeakSet: N$1(WeakSet.prototype, "has", Ne) });
const on = (e, t) => {
  const n = rn[t];
  return n === void 0 || n(e);
};
const Ie = /* @__PURE__ */ new WeakMap();
const Oe$1 = /* @__PURE__ */ Object.create(null);
const sn = Object.assign(/* @__PURE__ */ Object.create(null), { Arguments: xt$1, Array: jt$1, ArrayBuffer: pe$1, AsyncGenerator: we$1, BigInt: ye, bigint: ye, Boolean: (e, t) => t.stylize(String(e), "boolean"), boolean: (e, t) => t.stylize(String(e), "boolean"), DataView: Ct, Date: Dt, Error: Gt, Float32Array: S, Float64Array: S, Function: $e$1, function: $e$1, Generator: we$1, HTMLCollection: ce$1, Int8Array: S, Int16Array: S, Int32Array: S, Map: Ut, NodeList: ce$1, null: (e, t) => t.stylize("null", "null"), Number: ve, number: ve, Promise: qt, RegExp: Yt, Set: Jt, SharedArrayBuffer: pe$1, String: Ae, string: Ae, Symbol: Ee, symbol: Ee, Uint8Array: S, Uint8ClampedArray: S, Uint16Array: S, Uint32Array: S, undefined: (e, t) => t.stylize("undefined", "undefined"), WeakMap: (e, t) => t.stylize("WeakMap{…}", "special"), WeakSet: (e, t) => t.stylize("WeakSet{…}", "special") });
const ln = /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom");
const cn = /* @__PURE__ */ Symbol.for("chai/inspect");
const an = (e, t, n, r) => {
  const o = F(e, cn);
  if (typeof o == "function") return o.call(e, t);
  if (!("window" in globalThis)) {
    const c = F(e, ln);
    if (typeof c == "function") return c.call(e, r, t);
  }
  const s = F(e, "inspect");
  if (typeof s == "function") return s.call(e, r, t);
  const i = F(e, "constructor");
  if (typeof i == "function" && Ie.has(i)) return Ie.get(i)?.(e, t) ?? "unknown";
  const l = Object.hasOwn(Oe$1, n) ? Oe$1[n] : void 0;
  return l ? l(e, t) : "";
};
const re = (e, t, n) => {
  const { depth: r, inspect: o, seen: s } = n;
  if (s.includes(e)) return "[Circular]";
  if (r >= t.depth && t.depth > 0 && typeof e == "object" && e !== null) return Ge$1(e) ? "[Array]" : "[Object]";
  const i = t.indent ? Nt$1(t.indent, r) : void 0;
  let l = e === null ? "null" : typeof e;
  if (l === "object") try {
    l = Object.prototype.toString.call(e).slice(8, -1);
  } catch {
    l = "Object";
  }
  let c = sn[l];
  if (c !== void 0 && typeof e == "object" && e !== null && !on(e, l) && (c = void 0), c !== void 0) return c(e, t, o, i);
  if (t.customInspect && e) {
    const d = an(e, t, l, t.depth - r);
    if (d) return typeof d == "string" ? d : o(d, e, t);
  }
  let a = false;
  if (e) try {
    a = Object.getPrototypeOf(e);
  } catch {
    a = Object.prototype;
  }
  if (a === Object.prototype || a === null) return K$2(e, t, o, i);
  if (e && typeof HTMLElement == "function" && zt(e, HTMLElement)) return De(e, e, t, o);
  const u = F(e, "constructor");
  return u !== void 0 ? u !== Object ? Pt(e, t, o, i) : K$2(e, t, o, i) : e === Object(e) ? K$2(e, t, o, i) : t.stylize(String(e), l);
};
const Kr = (e, t = {}) => {
  const n = { customInspect: true, depth: 5, indent: void 0, maxArrayLength: Number.POSITIVE_INFINITY, numericSeparator: true, quoteStyle: "single", showHidden: false, stylize: (o) => o, truncate: Number.POSITIVE_INFINITY, ...t };
  if (n.indent !== void 0 && n.indent !== "	" && !(Number.parseInt(n.indent, 10) === n.indent && n.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `undefined`');
  const r = { depth: 0, inspect: void 0, seen: [] };
  return r.inspect = (o, s, i) => {
    if (s == null) {
      r.depth += 1;
      const c = re(o, i, r);
      return r.depth -= 1, c;
    }
    r.seen.push(s), r.depth += 1;
    const l = re(o, i, r);
    return r.depth -= 1, r.seen.pop(), l;
  }, re(e, n, r);
};
const un = /* @__PURE__ */ new Set(["alert", "critical", "emergency", "error", "trace", "warning"]);
const Zr = (e) => un.has(e);
const Xr = (e, t) => t ? (t.__write ?? t.write.bind(t)).call(t, e) : false;
const fn = globalThis.process ?? /* @__PURE__ */ Object.create(null);
const ke$1 = { versions: {} };
const V$2 = /* @__PURE__ */ new Proxy(fn, { get(e, t) {
  if (t in e) return e[t];
  if (t in ke$1) return ke$1[t];
} });
const ee$1 = (e) => {
  let t;
  return () => {
    if (t === void 0) {
      if (typeof V$2.getBuiltinModule != "function") throw new TypeError(`[@visulima/error] Cannot load ${e}: this runtime implements no process.getBuiltinModule(). Requires Node ^22.14.0 || >=24.10.0, or another runtime providing process.getBuiltinModule().`);
      t = V$2.getBuiltinModule(e);
    }
    return t;
  };
};
const dn = (e) => e.replaceAll(/\r\n|\r(?!\n)|\n/gu, `
`);
const gn = (e, t, n, r) => {
  const o = { column: 0, line: -1, ...e.start }, s = { ...o, ...e.end }, i = o.line, l = o.column, c = s.line, a = s.column;
  let u = Math.max(i - (n + 1), 0), d = Math.min(t.length, c + r);
  i === -1 && (u = 0), c === -1 && (d = t.length);
  const g = c - i, f = {};
  if (g) for (let h = 0; h <= g; h++) {
    const p = h + i;
    if (!l) f[p] = true;
    else if (h === 0) {
      const m = t[p - 1]?.length;
      f[p] = [l, (m ?? 0) - l + 1];
    } else if (h === g) f[p] = [0, a];
    else {
      const m = t[p - h]?.length;
      f[p] = [0, m];
    }
  }
  else l === a ? f[i] = l ? [l, 0] : true : f[i] = [l, (a ?? 0) - (l ?? 0)];
  return { end: d, markerLines: f, start: u };
};
const hn = V$2.platform === "win32" && !V$2.env?.WT_SESSION ? ">" : "❯";
const pn = (e, t, n) => {
  const r = { linesAbove: 2, linesBelow: 3, prefix: "", showGutter: true, tabWidth: 4, ...n, color: { gutter: (h) => h, marker: (h) => h, message: (h) => h, ...n?.color } }, o = typeof t.start.column == "number";
  let s = (e.includes("\r") ? dn(e) : e).split(`
`);
  typeof r.tabWidth == "number" && e.includes("	") && (s = s.map((h) => h.replaceAll("	", " ".repeat(r.tabWidth))));
  const { end: i, markerLines: l, start: c } = gn(t, s, r.linesAbove, r.linesBelow), a = String(i).length, { gutter: u, marker: d, message: g } = r.color;
  let f = s.slice(c, i).map((h, p) => {
    const m = c + 1 + p, y = l[m], $ = String(m).padStart(a), v = !l[m + 1], x = ` ${$}${r.showGutter ? " |" : ""}`;
    if (y) {
      let w = "";
      if (Array.isArray(y)) {
        const L = h.replaceAll(/[^\t]/g, " ").slice(0, Math.max(y[0] - 1, 0)), T = y[1] || 1;
        w = [`
 `, r.prefix + u(x.replaceAll(/\d/g, " ")), " ", L, d("^").repeat(T)].join(""), v && r.message && (w += ` ${g(r.message)}`);
      }
      return [r.prefix + d(hn), u(x), h.length > 0 ? ` ${h}` : "", w].join("");
    }
    return `${r.prefix} ${u(x)}${h.length > 0 ? ` ${h}` : ""}`;
  }).join(`
`);
  return r.message && !o && (f = `${r.prefix + " ".repeat(a + 1) + r.message}
${f}`), f;
};
const mn = () => V$2.env?.DEBUG === "true";
const M = (e, ...t) => {
  if (mn()) {
    const n = t.map((r) => typeof r == "function" ? r() : r);
    console.debug(`error:parse-stacktrace: ${e}`, ...n);
  }
};
const _ = "<unknown>";
const yn = /^(?:node:internal\/|node:|internal\/)/;
const bn = (e) => e !== void 0 && yn.test(e);
const $n = /^.*?\s*at\s(?:(.+?\)(?:\s\[.+\])?|\(?.*?)\s?\((?:address\sat\s)?)?(?:async\s)?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
const wn = /\((\S+)\),\s(<[^>]+>)?:(\d+)?:(\d+)?\)?/;
const vn = /(.*?):(\d+):(\d+)(?:\s<-\s.+:\d+:\d+)?/;
const Sn = /eval\sat\s(<anonymous>)\s\((.*)\)?:(\d+)?:(\d+)\),\s*<anonymous>?:(\d+)?:(\d+)/;
const An = /^\s*in\s(?:([^\\/]+(?:\s\[as\s\S+\])?)\s\(?)?\(at?\s?(.*?):(\d+)(?::(\d+))?\)?\s*$/;
const En = /in\s(.*)\s\(at\s(.+)\)\sat/;
const xn = /^(?:.*@)?(.*):(\d+):(\d+)$/;
const Nn = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. \/=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
const In = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
const On = /(\S[^\s[]*\[.*\]|.*?)@(.*):(\d+):(\d+)/;
const Be$1 = /\(error: ([^)]*)\)/;
const kn = /at\s/;
const Bn = /^(\S+):(\d+):(\d+)$|^(\S+):(\d+)$/;
const Ln = /Error: |AggregateError:/;
const qe = /^Anonymous function$/;
const Tn = /^\s*in\s.*/;
const jn = /^.*?\s*at\s.*/;
const Fn = /^.*?\s*@.*|\[native code\]/;
const Ye$1 = (e, t) => {
  const n = e.includes("safari-extension"), r = e.includes("safari-web-extension");
  return n || r ? [e.includes("@") ? e.split("@")[0] : _, n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t];
};
const Je$1 = (e, t) => {
  const n = vn.exec(t);
  n && (e.file = n[1], e.line = +n[2], e.column = +n[3]);
};
const Wn = (e) => {
  const t = En.exec(e);
  if (t) {
    M(`parse nested node error stack line: "${e}"`, () => `found: ${JSON.stringify(t)}`);
    const r = t[2].split(":");
    return { column: r[2] ? +r[2] : void 0, file: r[0], line: r[1] ? +r[1] : void 0, methodName: t[1] ?? _, raw: e, type: void 0 };
  }
  const n = An.exec(e);
  if (n) {
    M(`parse node error stack line: "${e}"`, () => `found: ${JSON.stringify(n)}`);
    const r = { column: n[4] ? +n[4] : void 0, file: n[2] ? n[2].replace(kn, "") : void 0, line: n[3] ? +n[3] : void 0, methodName: n[1] ?? _, raw: e, type: e.startsWith("internal") ? "internal" : void 0 };
    return Je$1(r, `${n[2]}:${n[3]}:${n[4]}`), r;
  }
};
const Mn = (e) => {
  const t = $n.exec(e);
  if (t) {
    M(`parse chrome error stack line: "${e}"`, () => `found: ${JSON.stringify(t)}`);
    const n = t[2]?.startsWith("native"), r = t[2]?.startsWith("eval") || t[1]?.startsWith("eval");
    let o, s;
    if (r) {
      const a = wn.exec(e);
      if (a) {
        const u = Bn.exec(a[1]);
        u ? (t[2] = u[4] ?? u[1], t[3] = u[5] ?? u[2], t[4] = u[3]) : a[2] && (t[2] = a[1]), a[2] && (o = { column: a[4] ? +a[4] : void 0, file: a[2], line: a[3] ? +a[3] : void 0, methodName: "eval", raw: e, type: "eval" });
      } else {
        const u = Sn.exec(e);
        u && (s = { column: u[4] ? +u[4] : void 0, file: u[2], line: u[3] ? +u[3] : void 0 }, o = { column: u[6] ? +u[6] : void 0, file: u[1], line: u[5] ? +u[5] : void 0, methodName: "eval", raw: u[0], type: "eval" });
      }
    }
    const [i, l] = Ye$1(t[1] ? t[1].replace(qe, "<anonymous>") : _, t[2]), c = { column: t[4] ? +t[4] : void 0, evalOrigin: o, file: l, line: t[3] ? +t[3] : void 0, methodName: i, raw: e, type: r ? "eval" : n ? "native" : bn(l) ? "internal" : void 0 };
    return s ? (c.column = s.column, c.file = s.file, c.line = s.line) : Je$1(c, `${l}:${t[3]}:${t[4]}`), c;
  }
};
const _n = (e, t) => {
  const n = Nn.exec(e);
  if (n) {
    M(`parse gecko error stack line: "${e}"`, () => `found: ${JSON.stringify(n)}`);
    const r = n[3]?.includes(" > eval"), o = r && n[3] && In.exec(n[3]);
    let s;
    r && o && (n[3] = o[1], s = { column: n[5] ? +n[5] : void 0, file: n[3], line: n[4] ? +n[4] : void 0, methodName: "eval", raw: e, type: "eval" }, n[4] = o[2]);
    const [i, l] = Ye$1(n[1] ? n[1].replace(qe, "<anonymous>") : _, n[3]);
    let c;
    (t?.type === "safari" || !r && t?.type === "firefox") && t.column ? c = t.column : !r && n[5] && (c = +n[5]);
    let a;
    return (t?.type === "safari" || !r && t?.type === "firefox") && t.line ? a = t.line : n[4] && (a = +n[4]), { column: c, evalOrigin: s, file: l, line: a, methodName: i, raw: e, type: r ? "eval" : l.includes("[native code]") ? "native" : void 0 };
  }
};
const zn = (e, t) => {
  const n = On.exec(e);
  if (!(n && n[2].includes(" > eval")) && n) return M(`parse firefox error stack line: "${e}"`, () => `found: ${JSON.stringify(n)}`), { column: n[4] ? +n[4] : t?.column ?? void 0, file: n[2], line: n[3] ? +n[3] : t?.line ?? void 0, methodName: n[1] || _, raw: e, type: void 0 };
};
const Rn = (e) => {
  const t = xn.exec(e);
  if (t) return M(`parse react android native error stack line: "${e}"`, () => `found: ${JSON.stringify(t)}`), { column: t[3] ? +t[3] : void 0, file: t[1], line: t[2] ? +t[2] : void 0, methodName: _, raw: e, type: void 0 };
};
const Ke$1 = (e, { filter: t, frameLimit: n = 50 } = {}) => {
  const r = e;
  let o = (typeof r.stacktrace == "string" ? r.stacktrace : e.stack ?? "").split(`
`).map((s) => (Be$1.test(s) ? s.replace(Be$1, "$1") : s).trim()).filter((s) => !Ln.test(s) && s !== "eval code");
  return t && (o = o.filter((s) => t(s))), o = o.slice(0, n), o.reduce((s, i, l) => {
    if (!i || i.length > 1024) return s;
    let c;
    if (Tn.test(i)) c = Wn(i);
    else if (jn.test(i)) c = Mn(i);
    else if (Fn.test(i)) {
      let a;
      if (l === 0) {
        const u = e, d = u.columnNumber, g = u.lineNumber, f = u.line, h = u.column;
        d || g ? a = { column: d, line: g, type: "firefox" } : (f || h) && (a = { column: h, line: f, type: "safari" });
      }
      c = zn(i, a) ?? _n(i, a);
    } else c = Rn(i);
    return c ? s.push(c) : M(`parse error stack line: "${i}"`, "not parser found"), s;
  }, []);
};
const Le$1 = ee$1("node:fs");
const Z = ee$1("node:path");
const Pn = ee$1("node:process");
const Cn = ee$1("node:url");
const O = (e, t, n) => n === 0 ? e : t === "	" ? e + "	".repeat(n) : e + " ".repeat(t * n);
const Ze$1 = (e) => e.replaceAll("\\", "/");
const Dn = (e) => {
  if (!e.startsWith("file:")) return e;
  try {
    return Cn().fileURLToPath(e);
  } catch {
    return e;
  }
};
const Vn = (e, t) => {
  const n = e.replace("async file:", "file:");
  return Ze$1(Z().relative(t, Dn(n)));
};
const Gn = (e, t, n) => {
  if (t) return n.title(e.message);
  const r = e.message ? `: ${e.message}` : "";
  return n.title(e.name + r);
};
const Xe$1 = (e, { color: t, hideErrorTitle: n, indentation: r, prefix: o }, s) => `${O(o, r, s)}${Gn(e, n, t)}
`;
const Qe$1 = (e, { color: t, indentation: n, prefix: r }, o) => {
  if (e.hint === void 0) return;
  const s = O(r, n, o);
  let i = "";
  if (Array.isArray(e.hint)) for (const l of e.hint) i += `${s + l}
`;
  else i += s + e.hint;
  return t.hint(i);
};
const de$1 = (e, t) => {
  if (!t || e.file === void 0 || e.line === void 0) return { trace: e };
  try {
    const n = t({ column: e.column, file: e.file, line: e.line });
    return n ? { source: n.source, trace: { ...e, column: n.column ?? e.column, file: n.file ?? e.file, line: n.line ?? e.line } } : { trace: e };
  } catch {
    return { trace: e };
  }
};
const ge$1 = (e, t, n = 0) => {
  const { color: r, cwd: o, displayShortPath: s, indentation: i, prefix: l } = t, { trace: c } = e;
  let a;
  c.file === void 0 ? a = "<unknown>" : a = s ? Vn(c.file, o) : Ze$1(c.file);
  const { fileLine: u, method: d } = r;
  return `${O(l, i, n)}at ${c.methodName ? `${d(c.methodName)} ` : ""}${u(a)}:${u(c.line?.toString() ?? "")}`;
};
const Hn = (e, t) => {
  if (t.allowAllFilePaths) return true;
  const n = Z().resolve(t.cwd), r = Z().resolve(n, e);
  return r === n || r.startsWith(n + Z().sep);
};
const Un = (e) => {
  try {
    return Le$1().existsSync(e) ? Le$1().readFileSync(e, "utf8") : void 0;
  } catch {
    return;
  }
};
const et$1 = (e, t, n) => {
  const { color: r, indentation: o, linesAbove: s, linesBelow: i, prefix: l, showGutter: c, showLineNumbers: a, tabWidth: u } = t, { source: d, trace: g } = e;
  if (g.file === void 0) return;
  let f;
  if (d === void 0) {
    const h = g.file.replace("file://", "");
    if (!Hn(h, t)) return;
    const p = Un(h);
    if (p === void 0) return;
    f = p;
  } else f = d;
  return pn(f, { start: { column: g.column, line: g.line } }, { color: r, linesAbove: s, linesBelow: i, prefix: O(l, o, n), showGutter: c, showLineNumbers: a, tabWidth: u });
};
const tt$1 = (e, t, n) => {
  if (e.errors.length === 0) return;
  let r = `${O(t.prefix, t.indentation, n)}Errors:

`, o = true;
  for (const s of e.errors) o ? o = false : r += `

`, r += rt$1(s, { ...t, framesMaxLimit: 1, hideErrorCodeView: t.hideErrorErrorsCodeView }, n + 1);
  return `
${r}`;
};
const qn = (e) => {
  if (typeof e == "object" && e !== null) try {
    return JSON.stringify(e);
  } catch {
    return Object.prototype.toString.call(e);
  }
  return String(e);
};
const nt$1 = (e, t, n, r = /* @__PURE__ */ new Set()) => {
  r.add(e);
  let o = `${O(t.prefix, t.indentation, n)}Caused by:

`;
  const { cause: s } = e;
  if (!(s instanceof Error)) {
    const c = qn(s);
    return o += `${O(t.prefix, t.indentation, n)}${t.color.title(c)}
`, `
${o}`;
  }
  o += Xe$1(s, t, n);
  const i = Ke$1(s).shift(), l = Qe$1(s, t, n);
  if (l && (o += `${l}
`), i) {
    const c = de$1(i, t.sourceMap);
    if (o += ge$1(c, t, n), !t.hideErrorCauseCodeView) {
      const a = et$1(c, t, n);
      a !== void 0 && (o += `
${a}`);
    }
  }
  if (s instanceof AggregateError) {
    const c = tt$1(s, t, n);
    c !== void 0 && (o += `
${c}`);
  }
  return s.cause && (o += r.has(s) ? `
${O(t.prefix, t.indentation, n + 1)}Caused by: [Circular]` : `
${nt$1(s, t, n + 1, r)}`), `
${o}`;
};
const Yn = (e, t) => (e.length > 0 ? `
` : "") + e.map((n) => ge$1(de$1(n, t.sourceMap), t)).join(`
`);
const rt$1 = (e, t, n) => {
  const r = { allowAllFilePaths: false, cwd: Pn().cwd(), displayShortPath: false, filterStacktrace: void 0, framesMaxLimit: Number.POSITIVE_INFINITY, hideErrorCauseCodeView: false, hideErrorCodeView: false, hideErrorErrorsCodeView: false, hideErrorTitle: false, hideMessage: false, indentation: 4, linesAbove: 2, linesBelow: 3, prefix: "", showGutter: true, showLineNumbers: true, tabWidth: 4, ...t, color: { fileLine: (l) => l, gutter: (l) => l, hint: (l) => l, marker: (l) => l, message: (l) => l, method: (l) => l, title: (l) => l, ...t.color } }, o = Ke$1(e, { filter: t.filterStacktrace, frameLimit: r.framesMaxLimit }), s = o.shift(), i = s ? de$1(s, r.sourceMap) : void 0;
  return [t.hideMessage ? void 0 : Xe$1(e, r, n), Qe$1(e, r, n), i ? ge$1(i, r, n) : void 0, i && !r.hideErrorCodeView ? et$1(i, r, n) : void 0, e instanceof AggregateError ? tt$1(e, r, n) : void 0, e.cause === void 0 || e.cause === null ? void 0 : nt$1(e, r, n), o.length > 0 ? Yn(o, r) : void 0].filter(Boolean).join(`
`);
};
const Qr = (e, t = {}) => {
  if (t.framesMaxLimit !== void 0 && t.framesMaxLimit <= 0) throw new RangeError("The 'framesMaxLimit' option must be a positive number");
  return rt$1(e, t, 0);
};
const Kn = 12288;
const Zn = 65510;
const Xn = [12288, 12288, 65281, 65376, 65504, 65510];
const Qn = 8361;
const er = 65518;
const tr = [8361, 8361, 65377, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500, 65512, 65518];
const nr = 32;
const rr = 10630;
const or = [32, 126, 162, 163, 165, 166, 172, 172, 175, 175, 10214, 10221, 10629, 10630];
const sr = 4352;
const ir = 262141;
const ot$1 = [4352, 4447, 8986, 8987, 9001, 9002, 9193, 9196, 9200, 9200, 9203, 9203, 9725, 9726, 9748, 9749, 9776, 9783, 9800, 9811, 9855, 9855, 9866, 9871, 9875, 9875, 9889, 9889, 9898, 9899, 9917, 9918, 9924, 9925, 9934, 9934, 9940, 9940, 9962, 9962, 9970, 9971, 9973, 9973, 9978, 9978, 9981, 9981, 9989, 9989, 9994, 9995, 10024, 10024, 10060, 10060, 10062, 10062, 10067, 10069, 10071, 10071, 10133, 10135, 10160, 10160, 10175, 10175, 11035, 11036, 11088, 11088, 11093, 11093, 11904, 11929, 11931, 12019, 12032, 12245, 12272, 12287, 12289, 12350, 12353, 12438, 12441, 12543, 12549, 12591, 12593, 12686, 12688, 12773, 12783, 12830, 12832, 12871, 12880, 42124, 42128, 42182, 43360, 43388, 44032, 55203, 63744, 64255, 65040, 65049, 65072, 65106, 65108, 65126, 65128, 65131, 94176, 94180, 94192, 94198, 94208, 101589, 101631, 101662, 101760, 101874, 110576, 110579, 110581, 110587, 110589, 110590, 110592, 110882, 110898, 110898, 110928, 110930, 110933, 110933, 110948, 110951, 110960, 111355, 119552, 119638, 119648, 119670, 126980, 126980, 127183, 127183, 127374, 127374, 127377, 127386, 127488, 127490, 127504, 127547, 127552, 127560, 127568, 127569, 127584, 127589, 127744, 127776, 127789, 127797, 127799, 127868, 127870, 127891, 127904, 127946, 127951, 127955, 127968, 127984, 127988, 127988, 127992, 128062, 128064, 128064, 128066, 128252, 128255, 128317, 128331, 128334, 128336, 128359, 128378, 128378, 128405, 128406, 128420, 128420, 128507, 128591, 128640, 128709, 128716, 128716, 128720, 128722, 128725, 128728, 128732, 128735, 128747, 128748, 128756, 128764, 128992, 129003, 129008, 129008, 129292, 129338, 129340, 129349, 129351, 129535, 129648, 129660, 129664, 129674, 129678, 129734, 129736, 129736, 129741, 129756, 129759, 129770, 129775, 129784, 131072, 196605, 196608, 262141];
const H = (e, t) => {
  let n = 0, r = Math.floor(e.length / 2) - 1;
  for (; n <= r; ) {
    const o = Math.floor((n + r) / 2), s = o * 2;
    if (t < e[s]) r = o - 1;
    else if (t > e[s + 1]) n = o + 1;
    else return true;
  }
  return false;
};
const Te$1 = 19968;
const [lr, cr] = ar(ot$1);
function ar(e) {
  let t = e[0], n = e[1];
  for (let r = 0; r < e.length; r += 2) {
    const o = e[r], s = e[r + 1];
    if (Te$1 >= o && Te$1 <= s) return [o, s];
    s - o > n - t && (t = o, n = s);
  }
  return [t, n];
}
const ur = (e) => e < 161 || e > 1114109 ? false : H(Jn, e);
const fr = (e) => e < Kn || e > Zn ? false : H(Xn, e);
const dr = (e) => e < Qn || e > er ? false : H(tr, e);
const gr = (e) => e < nr || e > rr ? false : H(or, e);
const hr = (e) => e >= lr && e <= cr ? true : e < sr || e > ir ? false : H(ot$1, e);
function pr(e) {
  return ur(e) ? "ambiguous" : fr(e) ? "fullwidth" : dr(e) ? "halfwidth" : gr(e) ? "narrow" : hr(e) ? "wide" : "neutral";
}
function mr(e) {
  if (!Number.isSafeInteger(e)) throw new TypeError(`Expected a code point, got \`${typeof e}\`.`);
}
function st$1(e) {
  return mr(e), pr(e);
}
const it$1 = String.raw;
const je = it$1`\p{Emoji}(?:\p{EMod}|[\u{E0020}-\u{E007E}]+\u{E007F}|\uFE0F?\u20E3?)`;
const yr = () => new RegExp(it$1`\p{RI}{2}|(?![#*\d](?!\uFE0F?\u20E3))${je}(?:\u200D${je})*`, "gu");
const R$1 = /* @__PURE__ */ new Set(["\x1B", ""]);
const te$2 = "\x07";
const lt$1 = "[";
const he$1 = "m";
const G = "]8;;";
const br = 39;
const $r = /[\u200B\uFEFF\u2060-\u2064]/g;
const wr = new RegExp(`(?:\\${lt$1}(?<code>\\d+)m|\\${G}(?<uri>.*)${te$2})`);
const vr = Object.freeze(/* @__PURE__ */ new Map([[0, 0], [1, 22], [2, 22], [3, 23], [4, 24], [7, 27], [8, 28], [9, 29], [30, 39], [31, 39], [32, 39], [33, 39], [34, 39], [35, 39], [36, 39], [37, 39], [40, 49], [41, 49], [42, 49], [43, 49], [44, 49], [45, 49], [46, 49], [47, 49], [90, 39]]));
const ct$1 = /[\u001B\u009B](?:[[()#;?]{0,10}(?:\d{1,4}(?:;\d{0,4})*)?[0-9A-ORZcf-nqry=><]|\]8;;[^\u0007\u001B]{0,100}(?:\u0007|\u001B\\))/g;
const U$2 = /[\u0000-\u0008\n-\u001F\u007F-\u009F]{1,1000}/y;
const Sr = yr();
const Fe = /* @__PURE__ */ new Map();
const Ar = (e) => [e.ambiguousIsNarrow ? 1 : 0, e.control, e.fullWidth, e.regular, e.wide].join("|");
const Er = (e) => {
  const t = Ar(e.width);
  let n = Fe.get(t);
  return n || (n = /* @__PURE__ */ new Map(), Fe.set(t, n)), n;
};
const q = new RegExp(ct$1.source, "y");
const oe$1 = new RegExp(Sr.source, "uy");
const Y = /(?:[\u0020-\u007E\u00A0-\u00FF](?!\uFE0F)){1,1000}/y;
const at$1 = (e) => e >= 32 && e <= 126 ? "latin" : e === 8203 || e === 8204 || e === 8205 || e === 8288 ? "zero" : e <= 31 || e >= 127 && e <= 159 ? "control" : e >= 160 && e <= 255 || e >= 9472 && e <= 9599 ? "latin" : e >= 4352 && e <= 4607 || e >= 11904 && e <= 40959 || e >= 44032 && e <= 55215 || e >= 63744 && e <= 64255 || e >= 65280 && e <= 65519 && !(e >= 65377 && e <= 65439) || e >= 12352 && e <= 12543 ? "wide" : e === 8230 ? "latin" : "other";
const xr = (e, t) => {
  const n = Er(t), r = Math.floor(e / 65536), o = e % 65536;
  let s = n.get(r);
  if (s || (s = /* @__PURE__ */ new Map(), n.set(r, s)), s.has(o)) return s.get(o);
  let i;
  switch (at$1(e)) {
    case "control": {
      i = t.width.control;
      break;
    }
    case "latin": {
      i = t.width.regular;
      break;
    }
    case "wide": {
      i = t.width.wide;
      break;
    }
    case "zero": {
      i = 0;
      break;
    }
    default:
      switch (st$1(e)) {
        case "ambiguous": {
          i = t.width.ambiguousIsNarrow ? t.width.regular : t.width.wide;
          break;
        }
        case "fullwidth": {
          i = t.width.fullWidth;
          break;
        }
        case "wide": {
          i = t.width.wide;
          break;
        }
        default:
          i = t.width.regular;
      }
  }
  return s.set(o, i), i;
};
const Nr = (e) => e >= 768 && e <= 879 || e >= 6832 && e <= 6911 || e >= 7616 && e <= 7679 || e >= 8400 && e <= 8447 || e >= 65056 && e <= 65071 || e >= 917760 && e <= 917999 || e >= 65024 && e <= 65039 || e >= 3633 && e <= 3642 || e >= 3655 && e <= 3662 || e >= 3761 && e <= 3769 || e >= 3771 && e <= 3772 || e >= 3784 && e <= 3789 || e >= 2304 && e <= 2307 || e >= 2362 && e <= 2383 || e >= 2385 && e <= 2391 || e >= 2402 && e <= 2403 || e >= 2433 && e <= 2435 || e >= 2492 && e <= 2500 || e >= 2509 && e <= 2509 || e >= 2561 && e <= 2563 || e >= 2620 && e <= 2637 || e >= 1611 && e <= 1631 || e >= 1648 && e <= 1648 || e >= 1750 && e <= 1773 || e >= 2276 && e <= 2302 || e >= 1425 && e <= 1469 || e >= 1471 && e <= 1471 || e >= 1473 && e <= 1474 || e >= 1476 && e <= 1477 || e >= 1479 && e <= 1479 || e >= 3893 && e <= 3893 || e >= 3895 && e <= 3895 || e >= 3897 && e <= 3897 || e >= 3953 && e <= 3966 || e >= 3968 && e <= 3972 || e >= 3974 && e <= 3975 ? true : e >= 768 && e <= 777 || e >= 803 && e <= 803;
const ae$1 = (e, t = {}) => {
  if (!e || e.length === 0) return { ellipsed: false, index: 0, truncated: false, width: 0 };
  const n = { truncation: { countAnsiEscapeCodes: t.countAnsiEscapeCodes ?? false, ellipsis: t.ellipsis ?? "", ellipsisWidth: t.ellipsisWidth ?? (t.ellipsis ? ae$1(t.ellipsis, { ...t, ellipsis: "", ellipsisWidth: 0, limit: Number.POSITIVE_INFINITY }).width : 0), limit: t.limit ?? Number.POSITIVE_INFINITY }, width: { ambiguousIsNarrow: t.ambiguousIsNarrow ?? false, ansi: t.ansiWidth ?? 0, control: t.controlWidth ?? 0, emoji: t.emojiWidth ?? 2, fullWidth: t.fullWidth ?? 2, halfWidth: t.halfWidth ?? 1, regular: t.regularWidth ?? 1, tab: t.tabWidth ?? 8, wide: t.wideWidth ?? 2 } }, r = Math.max(0, n.truncation.limit - n.truncation.ellipsisWidth), { length: o } = e, s = o > 1e4;
  let i = 0, l = 0, c = o, a = false;
  const u = e.includes("\x1B") || e.includes("");
  for (; i < o; ) {
    if (u && (e[i] === "\x1B" || e[i] === "")) {
      if (e.startsWith("\x1B]8;;", i)) {
        const m = "\x1B]8;;\x07", y = m.length, $ = e.indexOf("\x07", i + 5);
        if ($ !== -1) {
          const v = e.indexOf(m, $ + 1);
          if (v !== -1) {
            const x = v + y, w = e.slice($ + 1, v).replace(ct$1, ""), L = ae$1(w, { ambiguousIsNarrow: n.width.ambiguousIsNarrow, ansiWidth: n.width.ansi, controlWidth: n.width.control, countAnsiEscapeCodes: false, ellipsis: n.truncation.ellipsis, ellipsisWidth: n.truncation.ellipsisWidth, emojiWidth: n.width.emoji, fullWidth: n.width.fullWidth, halfWidth: n.width.halfWidth, limit: Math.max(0, r - l), regularWidth: n.width.regular, tabWidth: n.width.tab, wideWidth: n.width.wide }), T = L.width;
            if (L.truncated) a = true, c = Math.min(c, i);
            else if (l + T > r && (c = Math.min(c, i), a = true, l + T > n.truncation.limit)) break;
            if (l += T, i = x, a && l >= n.truncation.limit) break;
            continue;
          }
        }
      }
      if (q.lastIndex = i, q.test(e)) {
        const m = q.lastIndex - i, y = n.truncation.countAnsiEscapeCodes ? m : n.width.ansi;
        if (l + y > r && (c = Math.min(c, i), l + y > n.truncation.limit)) {
          a = true;
          break;
        }
        l += y, i = q.lastIndex;
        continue;
      }
    }
    const f = e.codePointAt(i);
    if (f === 8203 || f === 65279 || f >= 8288 && f <= 8292) {
      i += 1;
      continue;
    }
    if (f === 9) {
      if (l + n.width.tab > r && (c = Math.min(c, i), l + n.width.tab > n.truncation.limit)) {
        a = true;
        break;
      }
      l += n.width.tab, i += 1;
      continue;
    }
    if (Y.lastIndex = i, Y.test(e)) {
      const m = (Y.lastIndex - i) * n.width.regular;
      if (l + m > r) {
        const y = n.width.regular > 0 ? Math.floor((r - l) / n.width.regular) : 0;
        if (c = Math.min(c, i + y), l + m > n.truncation.limit) {
          a = true;
          break;
        }
      }
      l += m, i = Y.lastIndex;
      continue;
    }
    if ((f <= 31 || f >= 127 && f <= 159) && (U$2.lastIndex = i, U$2.test(e))) {
      const m = (U$2.lastIndex - i) * n.width.control;
      if (l + m > r) {
        const y = n.width.control > 0 ? Math.floor((r - l) / n.width.control) : 0;
        if (c = Math.min(c, i + y), l + m > n.truncation.limit) {
          a = true;
          break;
        }
      }
      l += m, i = U$2.lastIndex;
      continue;
    }
    if (oe$1.lastIndex = i, oe$1.test(e)) {
      if (l + n.width.emoji > r && (c = Math.min(c, i), l + n.width.emoji > n.truncation.limit)) {
        a = true;
        break;
      }
      l += n.width.emoji, i = oe$1.lastIndex;
      continue;
    }
    const h = e.codePointAt(i) ?? 0;
    if (Nr(h)) {
      i += h > 65535 ? 2 : 1;
      continue;
    }
    let p;
    if (s) p = xr(h, n);
    else switch (at$1(h)) {
      case "control": {
        p = n.width.control;
        break;
      }
      case "latin": {
        p = n.width.regular;
        break;
      }
      case "wide": {
        p = n.width.wide;
        break;
      }
      case "zero": {
        p = 0;
        break;
      }
      default:
        switch (st$1(h)) {
          case "ambiguous": {
            p = n.width.ambiguousIsNarrow ? n.width.regular : n.width.wide;
            break;
          }
          case "fullwidth": {
            p = n.width.fullWidth;
            break;
          }
          case "wide": {
            p = n.width.wide;
            break;
          }
          default:
            p = n.width.regular;
        }
    }
    if (l + p > r && (c = Math.min(c, i), l + p > n.truncation.limit)) {
      a = true;
      break;
    }
    l += p, i += h > 65535 ? 2 : 1;
  }
  let d = l, g = false;
  return a && n.truncation.limit >= n.truncation.ellipsisWidth && (d = n.truncation.limit, g = true), { ellipsed: g, index: a ? c : o, truncated: a, width: d };
};
const k = (e, t = {}) => ae$1(e, { ...t, ellipsis: "", ellipsisWidth: 0, limit: Number.POSITIVE_INFINITY }).width;
const Ir = /\x1B\[(\d+)m/;
let ut$1 = class ut {
  activeForeground = void 0;
  activeBackground = void 0;
  activeFormatting = [];
  processEscape(t) {
    const n = Ir.exec(t);
    if (!n) return;
    const r = Number.parseInt(n[1], 10);
    switch (r) {
      case 0: {
        this.activeForeground = void 0, this.activeBackground = void 0, this.activeFormatting = [];
        break;
      }
      case 39: {
        this.activeForeground = void 0;
        break;
      }
      case 49: {
        this.activeBackground = void 0;
        break;
      }
      default:
        if (r >= 30 && r <= 37 || r >= 90 && r <= 97) this.activeForeground = t;
        else if (r >= 40 && r <= 47 || r >= 100 && r <= 107) this.activeBackground = t;
        else if ([1, 2, 3, 4, 7, 8, 9].includes(r)) this.activeFormatting.push(t);
        else if ([22, 23, 24, 27, 28, 29].includes(r)) {
          const o = { 22: "[1m", 23: "[3m", 24: "[4m", 27: "[7m", 28: "[8m", 29: "[9m" }[r];
          o && (this.activeFormatting = this.activeFormatting.filter((s) => !s.includes(o)));
        }
    }
  }
  getStartEscapesForAllActiveAttributes() {
    return [this.activeBackground, this.activeForeground, ...this.activeFormatting].filter(Boolean).join("");
  }
  getEndEscapesForAllActiveAttributes() {
    const t = [];
    if (this.activeFormatting.length > 0) {
      const n = { "\x1B[1m": "\x1B[22m", "\x1B[2m": "\x1B[22m", "\x1B[3m": "\x1B[23m", "\x1B[4m": "\x1B[24m", "\x1B[7m": "\x1B[27m", "\x1B[8m": "\x1B[28m", "\x1B[9m": "\x1B[29m" };
      [...this.activeFormatting].toReversed().forEach((r) => {
        const o = n[r];
        o && t.push(o);
      });
    }
    return this.activeForeground && t.push("\x1B[39m"), this.activeBackground && t.push("\x1B[49m"), t.join("");
  }
};
const Or = (e, t) => {
  if (!R$1.has(e[t])) return { isInsideEscape: false, isInsideLinkEscape: false };
  const n = true, r = e.slice(t + 1, t + 1 + G.length).join("") === G;
  return { isInsideEscape: n, isInsideLinkEscape: r };
};
const kr = (e, t = {}) => {
  const n = new ut$1();
  let r = "", o = false, s = "", i = "", l = false;
  const c = [...e];
  for (let a = 0; a < c.length; a++) {
    const u = c[a];
    if (u && R$1.has(u)) {
      if (r) {
        const p = t.getWidth?.(r) ?? 0, m = { isEscapeSequence: false, isGrapheme: true, text: r, width: p };
        if (l && (m.isHyperlink = true, m.hyperlinkUrl = i), t.onSegment?.(m, n) === false) return;
        r = "";
      }
      o = true, s = u;
      const f = Or(c, a), { isInsideLinkEscape: h } = f;
      if (h) {
        let p = a + 1;
        for (i = ""; p < c.length; ) {
          const y = c[p];
          if (y === te$2) break;
          i += y, p += 1;
        }
        i = i.slice(4);
        const m = { hyperlinkUrl: i, isEscapeSequence: true, isGrapheme: false, isHyperlink: true, isHyperlinkStart: true, width: 0 };
        if (t.onSegment?.(m, n) === false) return;
        a = p, l = true, o = false, s = "";
        continue;
      }
      if (a + 1 < c.length && c[a + 1] === "\\" && l) {
        const p = { isEscapeSequence: true, isGrapheme: false, isHyperlink: true, isHyperlinkEnd: true, width: 0 };
        if (t.onSegment?.(p, n) === false) return;
        l = false, i = "", a += 1, o = false, s = "";
        continue;
      }
    }
    if (o) {
      if (s !== u && (s += u), u === he$1) {
        o = false, n.processEscape(s);
        const f = { isEscapeSequence: true, isGrapheme: false, text: s, width: 0 };
        if (t.onSegment?.(f, n) === false) return;
        s = "";
      }
      continue;
    }
    r += u;
    const d = t.getWidth?.(r) ?? 0, g = { isEscapeSequence: false, isGrapheme: true, text: r, width: d };
    if (l && (g.isHyperlink = true, g.hyperlinkUrl = i), t.onSegment?.(g, n) === false) return;
    r = "";
  }
  if (r) {
    const a = t.getWidth?.(r) ?? 0, u = { isEscapeSequence: false, isGrapheme: true, text: r, width: a };
    l && (u.isHyperlink = true, u.hyperlinkUrl = i), t.onSegment?.(u, n);
  }
  if (s) {
    const a = { isEscapeSequence: true, isGrapheme: false, text: s, width: 0 };
    t.onSegment?.(a, n);
  }
};
const We$1 = (e) => `${R$1.values().next().value}${lt$1}${String(e)}${he$1}`;
const Me$1 = (e) => `${R$1.values().next().value}${G}${e}${te$2}`;
const Br = (e) => {
  if (e.length === 0) return "";
  if (e.length === 1) return e[0];
  let t = "", n, r;
  const o = e.join(`
`), s = [...o];
  let i = 0;
  for (const [l, c] of s.entries()) {
    if (t += c, R$1.has(c)) {
      const u = wr.exec(o.slice(i))?.groups ?? {};
      if (u.code !== void 0) {
        const d = Number.parseFloat(u.code);
        n = d === br ? void 0 : d;
      } else u.uri !== void 0 && (r = u.uri.length === 0 ? void 0 : u.uri);
    }
    const a = vr.get(Number(n));
    s[l + 1] === `
` ? (r && (t += Me$1("")), n && a && (t += We$1(a))) : c === `
` && (n && a && (t += We$1(n)), r && (t += Me$1(r))), i += c.length;
  }
  return t;
};
const ft$1 = /(?=\s)|(?<=\s)/;
const dt$1 = /^\s+$/;
const _e = /* @__PURE__ */ new Map();
const Lr = (e) => {
  const t = _e.get(e);
  if (t !== void 0) return t;
  const n = k(e);
  return _e.set(e, n), n;
};
const se$1 = (e) => {
  if (!e.includes("\x1B")) return e;
  let t = e;
  return e.includes("\x1B[30m") && (t += "\x1B[39m"), e.includes("\x1B[42m") && (t += "\x1B[49m"), t;
};
const W$1 = (e) => {
  const t = e.split(" ");
  let n = t.length;
  for (; n > 0 && k(t[n - 1]) === 0; ) n--;
  return n === t.length ? e : t.slice(0, n).join(" ") + t.slice(n).join("");
};
const gt$1 = (e, t, n) => {
  if (e.length === 0) return [""];
  if (t <= 0) return [e];
  const r = [], o = new ut$1();
  let s = "", i = 0, l = false, c = false, a = "", u = 0;
  for (; u < e.length; ) {
    const d = e.codePointAt(u), g = String.fromCodePoint(d), f = g.length;
    if (R$1.has(g)) {
      l = true, a = g, s += g, c = e.startsWith(G, u + 1), u += 1;
      continue;
    }
    if (l) {
      a += g, s += g, c ? g === te$2 && (l = c = false) : g === he$1 && (l = false, o.processEscape(a)), u += 1;
      continue;
    }
    const h = Lr(g), p = g === " ";
    if (h === 0) {
      s += g, u += f;
      continue;
    }
    if (i + h > t && (s && r.push(s + o.getEndEscapesForAllActiveAttributes()), s = o.getStartEscapesForAllActiveAttributes(), i = k(s), p && n)) {
      for (; u < e.length && e[u] === " "; ) u += 1;
      continue;
    }
    if (s += g, i += h, i === t && u + f < e.length && (r.push(s + o.getEndEscapesForAllActiveAttributes()), s = o.getStartEscapesForAllActiveAttributes(), i = k(s), u + f < e.length && e[u + f] === " " && n)) {
      for (u += f; u < e.length && e[u] === " "; ) u += 1;
      continue;
    }
    u += f;
  }
  return s && r.push(s + o.getEndEscapesForAllActiveAttributes()), n ? r.map((d) => W$1(d)) : r;
};
const Tr = (e, t, n) => {
  if (e.length === 0) return [];
  const r = n ? e.trim() : e;
  if (r.length === 0) return [];
  const o = [];
  let s = "", i = 0;
  return kr(r, { getWidth: k, onSegment: (l, c) => {
    const a = l.text ?? "";
    if (l.isEscapeSequence) s += a;
    else {
      const u = a === " ";
      if (l.width === 0) return s += a, true;
      if (i + l.width > t && (s && o.push(s), s = c.getStartEscapesForAllActiveAttributes(), i = 0, u)) return n || o.push(c.getStartEscapesForAllActiveAttributes() + a), true;
      s += a, i += l.width;
    }
    return true;
  } }), s && o.push(s), n ? o.map((l) => W$1(l)) : o;
};
const jr = (e, t, n) => {
  if (e.length === 0) return [];
  const r = n ? e.trim() : e;
  if (r.length === 0) return [];
  const o = r.split(ft$1), s = [];
  let i = "", l = 0, c = 0;
  for (; c < o.length; ) {
    const a = o[c], u = dt$1.test(a), d = k(a);
    if (a.length === 0) {
      c += 1;
      continue;
    }
    if (n && u && l === 0) {
      c += 1;
      continue;
    }
    if (l + d > t && l > 0) {
      n ? s.push(W$1(i)) : s.push(i), i = "", l = 0;
      continue;
    }
    i += a, l += d, c += 1;
  }
  return i && (n ? s.push(W$1(i)) : s.push(i)), s;
};
const Fr = (e, t, n) => {
  if (e.length === 0) return [];
  const r = n ? e.trim() : e;
  if (r.length === 0) return [];
  const o = r.split(ft$1), s = [];
  let i = "", l = 0, c = 0;
  for (; c < o.length; ) {
    const a = o[c], u = dt$1.test(a), d = k(a);
    if (a.length === 0) {
      c += 1;
      continue;
    }
    if (n && u && l === 0) {
      c += 1;
      continue;
    }
    if (d > t) {
      i && s.push(se$1(n ? W$1(i) : i));
      const g = gt$1(a, t, n);
      if (g.length > 0) {
        for (let f = 0; f < g.length - 1; f += 1) s.push(g[f]);
        i = g.at(-1), l = k(i);
      } else i = "", l = 0;
      c += 1;
      continue;
    }
    if (l + d > t && l > 0 && (s.push(se$1(n ? W$1(i) : i)), i = "", l = 0, n && u)) {
      c += 1;
      continue;
    }
    i += a, l += d, c += 1;
  }
  return i && s.push(se$1(n ? W$1(i) : i)), s;
};
const J$1 = { BREAK_AT_CHARACTERS: "BREAK_AT_CHARACTERS", BREAK_WORDS: "BREAK_WORDS", PRESERVE_WORDS: "PRESERVE_WORDS", STRICT_WIDTH: "STRICT_WIDTH" };
const eo = (e, t = {}) => {
  const { removeZeroWidthCharacters: n = true, trim: r = true, width: o = 80, wrapMode: s = J$1.PRESERVE_WORDS } = t;
  if (r && e.trim() === "") return "";
  let i = e.normalize("NFC").replaceAll(`\r
`, `
`);
  return n && (i = i.replaceAll($r, "")), i.split(`
`).map((l) => {
    if (r && l.trim() === "") return "";
    let c;
    switch (s) {
      case J$1.BREAK_AT_CHARACTERS: {
        c = Tr(l, o, r);
        break;
      }
      case J$1.BREAK_WORDS: {
        c = Fr(l, o, r);
        break;
      }
      case J$1.STRICT_WIDTH: {
        c = gt$1(l, o, r);
        break;
      }
      default:
        c = jr(l, o, r);
    }
    return Br(c);
  }).join(`
`);
};
const ht$1 = 80;
const pt$1 = 24;
const ue = (e, t, { shell: n, env: r } = {}) => wt$1(e, t, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"], timeout: 500, shell: n, env: r }).trim();
const X = (e, t) => ({ columns: Number.parseInt(e, 10), rows: Number.parseInt(t, 10) });
const mt$1 = (e, t) => {
  const { columns: n, rows: r } = X(e, t);
  if (!(Number.isNaN(n) || Number.isNaN(r)) && !(n === ht$1 && r === pt$1)) return { columns: n, rows: r };
};
const Wr = () => {
  if (I.platform !== "linux") return true;
  try {
    const e = P$1.readFileSync("/proc/self/stat", "utf8"), t = e.lastIndexOf(") ");
    if (t === -1) return false;
    const n = e.slice(t + 2).trim().split(/\s+/), r = Number.parseInt(n[2], 10), o = Number.parseInt(n[5], 10);
    return Number.isNaN(r) || Number.isNaN(o) || o <= 0 ? false : r === o;
  } catch {
    return false;
  }
};
function to() {
  const { env: e, stdout: t, stderr: n } = I;
  if (t?.columns && t?.rows) return X(t.columns, t.rows);
  if (n?.columns && n?.rows) return X(n.columns, n.rows);
  if (e.COLUMNS && e.LINES) return X(e.COLUMNS, e.LINES);
  const r = { columns: ht$1, rows: pt$1 };
  return I.platform === "win32" ? ie() ?? r : I.platform === "darwin" ? ze() ?? ie() ?? r : ze() ?? ie() ?? Mr() ?? r;
}
const ze = () => {
  try {
    const e = I.platform === "darwin" ? P$1.constants.O_EVTONLY | P$1.constants.O_NONBLOCK : P$1.constants.O_NONBLOCK, { columns: t, rows: n } = vt$1.WriteStream(P$1.openSync("/dev/tty", e));
    return { columns: t, rows: n };
  } catch {
  }
};
const ie = () => {
  try {
    const e = ue("tput", ["cols"], { env: { TERM: "dumb", ...I.env } }), t = ue("tput", ["lines"], { env: { TERM: "dumb", ...I.env } });
    if (e && t) return mt$1(e, t);
  } catch {
  }
};
const Mr = () => {
  try {
    if (!Wr()) return;
    const e = ue("resize", ["-u"]).match(/\d+/g);
    if (e.length === 2) return mt$1(e[0], e[1]);
  } catch {
  }
};
const no = (e) => {
  const t = Object.keys(e).map((n) => e[n].badge ?? "");
  return t.length === 0 ? "" : t.reduce((n, r) => n.length > r.length ? n : r, "");
};
const { bold: _r, cyan: zr, green: Re$1, grey: Rr, magenta: Pr, red: Cr, yellow: le$1 } = t$1;
const ro = { indent: 2, quoteStyle: "single", stylize: (e, t) => {
  const n = { bigint: le$1, boolean: le$1, date: Pr, null: _r, number: le$1, regexp: Cr, special: zr, string: Re$1, symbol: Re$1, undefined: Rr };
  return Object.hasOwn(n, t) ? n[t](e) : e;
} };
const { bold: Dr, underline: Vr } = t$1;
const oo = (e, t) => {
  let n = t.uppercase.label ? e.toUpperCase() : e;
  return n = t.underline.label ? Vr(n) : n, t.bold.label && (n = Dr(n)), n;
};
const Gr = (e) => [e.getHours(), e.getMinutes(), e.getSeconds()].map((t) => String(t).padStart(2, "0")).join(":");
class so {
  styles;
  loggerTypes;
  constructor(t) {
    this.styles = { bold: { label: false }, dateFormatter: Gr, underline: { label: false, message: false, prefix: false, suffix: false }, uppercase: { label: false }, ...t }, this.loggerTypes = St$1;
  }
  setLoggerTypes(t) {
    this.loggerTypes = t;
  }
}

const Re = typeof globalThis < "u" && typeof globalThis.process < "u" ? globalThis.process : process;
const { stdout: he, stderr: de, env: K$1 } = Re;
const Je = "\x1B";
const J = "\x1B[";
const Ge = ";";
const Oe = typeof globalThis < "u" && typeof globalThis.window == "object" && globalThis.window.document !== void 0;
const We = /^(?:msys|cygwin)$/;
const ke = process;
const ce = ke?.env ?? {};
!Oe && ce.TERM_PROGRAM;
const Ye = !Oe && (ke?.platform === "win32" || ce.OSTYPE !== void 0 && We.test(ce.OSTYPE));
const He = (r, e) => `${J}${String(e + 1)}${Ge}${String(r + 1)}H`;
var Ke = ((r) => (r[r.Default = 0] = "Default", r[r.BlinkingBlock = 1] = "BlinkingBlock", r[r.SteadyBlock = 2] = "SteadyBlock", r[r.BlinkingUnderline = 3] = "BlinkingUnderline", r[r.SteadyUnderline = 4] = "SteadyUnderline", r[r.BlinkingBar = 5] = "BlinkingBar", r[r.SteadyBar = 6] = "SteadyBar", r))(Ke || {});
var W = ((r) => (r[r.ToEnd = 0] = "ToEnd", r[r.ToBeginning = 1] = "ToBeginning", r[r.EntireScreen = 2] = "EntireScreen", r[r.EntireScreenAndScrollback = 3] = "EntireScreenAndScrollback", r))(W || {});
const U$1 = (r) => {
  const e = r >= 0 && r <= 3 ? r : 0;
  return `${J}${e === 0 ? "" : String(e)}J`;
};
var Be = ((r) => (r[r.ToEnd = 0] = "ToEnd", r[r.ToBeginning = 1] = "ToBeginning", r[r.EntireLine = 2] = "EntireLine", r))(Be || {});
const Ue = (r) => {
  const e = r >= 0 && r <= 2 ? r : 0;
  return `${J}${e === 0 ? "" : String(e)}K`;
};
He(0, 0) + U$1(W.ToEnd);
`${Ue(Be.EntireLine)}${J}`;
`${J}${U$1(W.EntireScreen)}`;
const be = Ye ? `${U$1(W.EntireScreen)}${J}0f` : `${U$1(W.EntireScreen)}${U$1(W.EntireScreenAndScrollback)}${J}H${Je}c`;
var te$1 = { exports: {} };
var Se;
function Qe() {
  return Se || (Se = 1, (function(r, e) {
    const { hasOwnProperty: t } = Object.prototype, s = C();
    s.configure = C, s.stringify = s, s.default = s, e.stringify = s, e.configure = C, r.exports = s;
    const n = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]/;
    function l(c) {
      return c.length < 5e3 && !n.test(c) ? `"${c}"` : JSON.stringify(c);
    }
    function a(c, g) {
      if (c.length > 200 || g) return c.sort(g);
      for (let h = 1; h < c.length; h++) {
        const N = c[h];
        let B = h;
        for (; B !== 0 && c[B - 1] > N; ) c[B] = c[B - 1], B--;
        c[B] = N;
      }
      return c;
    }
    const o = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Object.getPrototypeOf(new Int8Array())), Symbol.toStringTag).get;
    function d(c) {
      return o.call(c) !== void 0 && c.length !== 0;
    }
    function m(c, g, h) {
      c.length < h && (h = c.length);
      const N = g === "," ? "" : " ";
      let B = `"0":${N}${c[0]}`;
      for (let A = 1; A < h; A++) B += `${g}"${A}":${N}${c[A]}`;
      return B;
    }
    function b(c) {
      if (t.call(c, "circularValue")) {
        const g = c.circularValue;
        if (typeof g == "string") return `"${g}"`;
        if (g == null) return g;
        if (g === Error || g === TypeError) return { toString() {
          throw new TypeError("Converting circular structure to JSON");
        } };
        throw new TypeError('The "circularValue" argument must be of type string or the value null or undefined');
      }
      return '"[Circular]"';
    }
    function f(c) {
      let g;
      if (t.call(c, "deterministic") && (g = c.deterministic, typeof g != "boolean" && typeof g != "function")) throw new TypeError('The "deterministic" argument must be of type boolean or comparator function');
      return g === void 0 ? true : g;
    }
    function $(c, g) {
      let h;
      if (t.call(c, g) && (h = c[g], typeof h != "boolean")) throw new TypeError(`The "${g}" argument must be of type boolean`);
      return h === void 0 ? true : h;
    }
    function u(c, g) {
      let h;
      if (t.call(c, g)) {
        if (h = c[g], typeof h != "number") throw new TypeError(`The "${g}" argument must be of type number`);
        if (!Number.isInteger(h)) throw new TypeError(`The "${g}" argument must be an integer`);
        if (h < 1) throw new RangeError(`The "${g}" argument must be >= 1`);
      }
      return h === void 0 ? 1 / 0 : h;
    }
    function L(c) {
      return c === 1 ? "1 item" : `${c} items`;
    }
    function I(c) {
      const g = /* @__PURE__ */ new Set();
      for (const h of c) (typeof h == "string" || typeof h == "number") && g.add(String(h));
      return g;
    }
    function G(c) {
      if (t.call(c, "strict")) {
        const g = c.strict;
        if (typeof g != "boolean") throw new TypeError('The "strict" argument must be of type boolean');
        if (g) return (h) => {
          let N = `Object can not safely be stringified. Received type ${typeof h}`;
          throw typeof h != "function" && (N += ` (${h.toString()})`), new Error(N);
        };
      }
    }
    function C(c) {
      c = { ...c };
      const g = G(c);
      g && (c.bigint === void 0 && (c.bigint = false), "circularValue" in c || (c.circularValue = Error));
      const h = b(c), N = $(c, "bigint"), B = f(c), A = typeof B == "function" ? B : void 0, R = u(c, "maximumDepth"), E = u(c, "maximumBreadth");
      function Q(P, i, p, x, S, T) {
        let y = i[P];
        switch (typeof y == "object" && y !== null && typeof y.toJSON == "function" && (y = y.toJSON(P)), y = x.call(i, P, y), typeof y) {
          case "string":
            return l(y);
          case "object": {
            if (y === null) return "null";
            if (p.indexOf(y) !== -1) return h;
            let w = "", O = ",";
            const k = T;
            if (Array.isArray(y)) {
              if (y.length === 0) return "[]";
              if (R < p.length + 1) return '"[Array]"';
              p.push(y), S !== "" && (T += S, w += `
${T}`, O = `,
${T}`);
              const D = Math.min(y.length, E);
              let q = 0;
              for (; q < D - 1; q++) {
                const Z = Q(String(q), y, p, x, S, T);
                w += Z !== void 0 ? Z : "null", w += O;
              }
              const z = Q(String(q), y, p, x, S, T);
              if (w += z !== void 0 ? z : "null", y.length - 1 > E) {
                const Z = y.length - E - 1;
                w += `${O}"... ${L(Z)} not stringified"`;
              }
              return S !== "" && (w += `
${k}`), p.pop(), `[${w}]`;
            }
            let v = Object.keys(y);
            const j = v.length;
            if (j === 0) return "{}";
            if (R < p.length + 1) return '"[Object]"';
            let M = "", _ = "";
            S !== "" && (T += S, O = `,
${T}`, M = " ");
            const F = Math.min(j, E);
            B && !d(y) && (v = a(v, A)), p.push(y);
            for (let D = 0; D < F; D++) {
              const q = v[D], z = Q(q, y, p, x, S, T);
              z !== void 0 && (w += `${_}${l(q)}:${M}${z}`, _ = O);
            }
            if (j > E) {
              const D = j - E;
              w += `${_}"...":${M}"${L(D)} not stringified"`, _ = O;
            }
            return S !== "" && _.length > 1 && (w = `
${T}${w}
${k}`), p.pop(), `{${w}}`;
          }
          case "number":
            return isFinite(y) ? String(y) : g ? g(y) : "null";
          case "boolean":
            return y === true ? "true" : "false";
          case "undefined":
            return;
          case "bigint":
            if (N) return String(y);
          default:
            return g ? g(y) : void 0;
        }
      }
      function X(P, i, p, x, S, T) {
        switch (typeof i == "object" && i !== null && typeof i.toJSON == "function" && (i = i.toJSON(P)), typeof i) {
          case "string":
            return l(i);
          case "object": {
            if (i === null) return "null";
            if (p.indexOf(i) !== -1) return h;
            const y = T;
            let w = "", O = ",";
            if (Array.isArray(i)) {
              if (i.length === 0) return "[]";
              if (R < p.length + 1) return '"[Array]"';
              p.push(i), S !== "" && (T += S, w += `
${T}`, O = `,
${T}`);
              const j = Math.min(i.length, E);
              let M = 0;
              for (; M < j - 1; M++) {
                const F = X(String(M), i[M], p, x, S, T);
                w += F !== void 0 ? F : "null", w += O;
              }
              const _ = X(String(M), i[M], p, x, S, T);
              if (w += _ !== void 0 ? _ : "null", i.length - 1 > E) {
                const F = i.length - E - 1;
                w += `${O}"... ${L(F)} not stringified"`;
              }
              return S !== "" && (w += `
${y}`), p.pop(), `[${w}]`;
            }
            p.push(i);
            let k = "";
            S !== "" && (T += S, O = `,
${T}`, k = " ");
            let v = "";
            for (const j of x) {
              const M = X(j, i[j], p, x, S, T);
              M !== void 0 && (w += `${v}${l(j)}:${k}${M}`, v = O);
            }
            return S !== "" && v.length > 1 && (w = `
${T}${w}
${y}`), p.pop(), `{${w}}`;
          }
          case "number":
            return isFinite(i) ? String(i) : g ? g(i) : "null";
          case "boolean":
            return i === true ? "true" : "false";
          case "undefined":
            return;
          case "bigint":
            if (N) return String(i);
          default:
            return g ? g(i) : void 0;
        }
      }
      function Y(P, i, p, x, S) {
        switch (typeof i) {
          case "string":
            return l(i);
          case "object": {
            if (i === null) return "null";
            if (typeof i.toJSON == "function") {
              if (i = i.toJSON(P), typeof i != "object") return Y(P, i, p, x, S);
              if (i === null) return "null";
            }
            if (p.indexOf(i) !== -1) return h;
            const T = S;
            if (Array.isArray(i)) {
              if (i.length === 0) return "[]";
              if (R < p.length + 1) return '"[Array]"';
              p.push(i), S += x;
              let M = `
${S}`;
              const _ = `,
${S}`, F = Math.min(i.length, E);
              let D = 0;
              for (; D < F - 1; D++) {
                const z = Y(String(D), i[D], p, x, S);
                M += z !== void 0 ? z : "null", M += _;
              }
              const q = Y(String(D), i[D], p, x, S);
              if (M += q !== void 0 ? q : "null", i.length - 1 > E) {
                const z = i.length - E - 1;
                M += `${_}"... ${L(z)} not stringified"`;
              }
              return M += `
${T}`, p.pop(), `[${M}]`;
            }
            let y = Object.keys(i);
            const w = y.length;
            if (w === 0) return "{}";
            if (R < p.length + 1) return '"[Object]"';
            S += x;
            const O = `,
${S}`;
            let k = "", v = "", j = Math.min(w, E);
            d(i) && (k += m(i, O, E), y = y.slice(i.length), j -= i.length, v = O), B && (y = a(y, A)), p.push(i);
            for (let M = 0; M < j; M++) {
              const _ = y[M], F = Y(_, i[_], p, x, S);
              F !== void 0 && (k += `${v}${l(_)}: ${F}`, v = O);
            }
            if (w > E) {
              const M = w - E;
              k += `${v}"...": "${L(M)} not stringified"`, v = O;
            }
            return v !== "" && (k = `
${S}${k}
${T}`), p.pop(), `{${k}}`;
          }
          case "number":
            return isFinite(i) ? String(i) : g ? g(i) : "null";
          case "boolean":
            return i === true ? "true" : "false";
          case "undefined":
            return;
          case "bigint":
            if (N) return String(i);
          default:
            return g ? g(i) : void 0;
        }
      }
      function H(P, i, p) {
        switch (typeof i) {
          case "string":
            return l(i);
          case "object": {
            if (i === null) return "null";
            if (typeof i.toJSON == "function") {
              if (i = i.toJSON(P), typeof i != "object") return H(P, i, p);
              if (i === null) return "null";
            }
            if (p.indexOf(i) !== -1) return h;
            let x = "";
            const S = i.length !== void 0;
            if (S && Array.isArray(i)) {
              if (i.length === 0) return "[]";
              if (R < p.length + 1) return '"[Array]"';
              p.push(i);
              const k = Math.min(i.length, E);
              let v = 0;
              for (; v < k - 1; v++) {
                const M = H(String(v), i[v], p);
                x += M !== void 0 ? M : "null", x += ",";
              }
              const j = H(String(v), i[v], p);
              if (x += j !== void 0 ? j : "null", i.length - 1 > E) {
                const M = i.length - E - 1;
                x += `,"... ${L(M)} not stringified"`;
              }
              return p.pop(), `[${x}]`;
            }
            let T = Object.keys(i);
            const y = T.length;
            if (y === 0) return "{}";
            if (R < p.length + 1) return '"[Object]"';
            let w = "", O = Math.min(y, E);
            S && d(i) && (x += m(i, ",", E), T = T.slice(i.length), O -= i.length, w = ","), B && (T = a(T, A)), p.push(i);
            for (let k = 0; k < O; k++) {
              const v = T[k], j = H(v, i[v], p);
              j !== void 0 && (x += `${w}${l(v)}:${j}`, w = ",");
            }
            if (y > E) {
              const k = y - E;
              x += `${w}"...":"${L(k)} not stringified"`;
            }
            return p.pop(), `{${x}}`;
          }
          case "number":
            return isFinite(i) ? String(i) : g ? g(i) : "null";
          case "boolean":
            return i === true ? "true" : "false";
          case "undefined":
            return;
          case "bigint":
            if (N) return String(i);
          default:
            return g ? g(i) : void 0;
        }
      }
      function je(P, i, p) {
        if (arguments.length > 1) {
          let x = "";
          if (typeof p == "number" ? x = " ".repeat(Math.min(p, 10)) : typeof p == "string" && (x = p.slice(0, 10)), i != null) {
            if (typeof i == "function") return Q("", { "": P }, [], i, x, "");
            if (Array.isArray(i)) return X("", P, [], I(i), x, "");
          }
          if (x.length !== 0) return Y("", P, [], x, "");
        }
        return H("", P, []);
      }
      return je;
    }
  })(te$1, te$1.exports)), te$1.exports;
}
var Xe = Qe();
class Ze {
  #t = /* @__PURE__ */ new Map();
  #e;
  constructor(e) {
    this.#e = e;
  }
  count(e = "default") {
    const t = this.#t.get(e) ?? 0;
    this.#t.set(e, t + 1), this.#e("log", false, false, { message: `${e}: ${String(t + 1)}`, prefix: e });
  }
  countReset(e = "default") {
    this.#t.has(e) ? this.#t.delete(e) : this.#e("warn", false, false, { message: `Count for ${e} does not exist`, prefix: e });
  }
}
const et = /* @__PURE__ */ new Set(["alert", "critical", "emergency", "error"]);
const tt = (r) => {
  const e = console;
  return et.has(r) ? e.__error ?? console.error : r === "warning" ? e.__warn ?? console.warn : r === "trace" ? e.__trace ?? console.trace : e.__log ?? console.log;
};
let rt = class {
  log(e) {
    const { context: t = [], message: s, type: n } = e;
    tt(n.level)(s, ...t);
  }
};
class st {
  #t = /* @__PURE__ */ new Map();
  #e = /* @__PURE__ */ new Set();
  #r;
  #i;
  #s;
  constructor(e, t, s) {
    this.#s = e, this.#r = t, this.#i = s;
  }
  time(e = "default") {
    this.#e.has(e) ? this.#s("warn", false, false, { message: `Timer '${e}' already exists`, prefix: e }) : (this.#e.add(e), this.#t.set(e, Date.now()), this.#s("start", false, false, { message: this.#r, prefix: e }));
  }
  timeLog(e, ...t) {
    if (!e && this.#e.size > 0 && (e = [...this.#e].pop()), e && this.#t.has(e)) {
      const s = Date.now() - this.#t.get(e);
      this.#s("info", false, false, { context: t, message: s < 1e3 ? `${String(s)} ms` : `${(s / 1e3).toFixed(2)} s`, prefix: e });
    } else this.#s("warn", false, false, { context: t, message: "Timer not found", prefix: e });
  }
  timeEnd(e) {
    if (!e && this.#e.size > 0 && (e = [...this.#e].pop()), e && this.#t.has(e)) {
      const t = Date.now() - this.#t.get(e);
      this.#t.delete(e), this.#e.delete(e), this.#s("stop", false, false, { message: `${this.#i} ${t < 1e3 ? `${String(t)} ms` : `${(t / 1e3).toFixed(2)} s`}`, prefix: e });
    } else this.#s("warn", false, false, { message: "Timer not found", prefix: e });
  }
}
const we = (r) => r === void 0 ? [] : Array.isArray(r) ? r : [r];
const $e = (r, e) => {
  const t = { ...r };
  return Object.keys(e).forEach((s) => {
    t[s] = { ...t[s], ...e[s] };
  }), t;
};
const it = (r) => {
  let e = false;
  return function(...t) {
    if (!e) {
      e = true;
      try {
        const s = r.apply(this, t);
        return e = false, s;
      } catch (s) {
        throw e = false, s;
      }
    }
  };
};
class pe {
  timerManager;
  counterManager;
  lastLog;
  logLevels;
  disabled;
  paused;
  messageQueue;
  scopeName;
  types;
  longestLabel;
  processors;
  generalLogLevel;
  reporters;
  throttle;
  throttleMin;
  stringify;
  groups;
  startTimerMessage;
  endTimerMessage;
  rawReporter;
  force = {};
  #t = /* @__PURE__ */ new Set();
  #e;
  #r;
  constructor(e) {
    this.throttle = e.throttle ?? 1e3, this.throttleMin = e.throttleMin ?? 5;
    const t = e.parentLongestLabel, s = e.parentTypes, n = e.parentStringify, l = e.parentLogLevels;
    this.stringify = n ?? Xe.configure({ strict: true }), this.startTimerMessage = e.messages?.timerStart ?? "Initialized timer...", this.endTimerMessage = e.messages?.timerEnd ?? "Timer run for:", s && t ? (this.types = s, this.longestLabel = t) : (this.types = $e(St$1, e.types ?? {}), this.longestLabel = Jr(this.types)), this.logLevels = l && !e.logLevels ? l : { ...qr, ...e.logLevels }, this.generalLogLevel = this.#n(e.logLevel), this.reporters = /* @__PURE__ */ new Set(), this.processors = /* @__PURE__ */ new Set(), this.disabled = e.disabled ?? false, this.paused = false, this.messageQueue = [], this.scopeName = we(e.scope).filter(Boolean), this.timerManager = new st((a, o, d, ...m) => {
      this.logger(a, o, d, ...m);
    }, this.startTimerMessage, this.endTimerMessage), this.counterManager = new Ze((a, o, d, ...m) => {
      this.logger(a, o, d, ...m);
    }), this.groups = [], this.lastLog = {}, this.logger = it(this.logger.bind(this)), this.#i(), Array.isArray(e.reporters) && this.registerReporters(e.reporters), this.rawReporter = this.extendReporter(e.rawReporter ?? new rt()), Array.isArray(e.processors) && this.registerProcessors(e.processors);
  }
  #i() {
    for (const e in this.types) this[e] = this.logger.bind(this, e, false, false);
    for (const e in this.types) this.force[e] = this.logger.bind(this, e, false, true);
    this.raw = this.raw.bind(this);
  }
  wrapConsole() {
    for (const e in this.types) Object.hasOwn(console, `__${e}`) || (console[`__${e}`] = console[e]), console[e] = this[e];
  }
  restoreConsole() {
    for (const e in this.types) if (Object.hasOwn(console, `__${e}`)) {
      const t = console[`__${e}`];
      t === void 0 ? delete console[e] : console[e] = t, delete console[`__${e}`];
    }
  }
  wrapException() {
    this.#e || this.#r || (this.#e = (e) => {
      this.error(e);
    }, this.#r = (e) => {
      this.error(e);
    }, process.on("uncaughtException", this.#e), process.on("unhandledRejection", this.#r));
  }
  restoreException() {
    this.#e && (process.off("uncaughtException", this.#e), this.#e = void 0), this.#r && (process.off("unhandledRejection", this.#r), this.#r = void 0);
  }
  disable() {
    this.disabled = true;
  }
  enable() {
    this.disabled = false;
  }
  isEnabled() {
    return !this.disabled;
  }
  pause() {
    this.paused = true;
  }
  resume() {
    this.paused = false;
    const e = this.messageQueue.splice(0);
    for (let t = 0; t < e.length; t += 1) {
      const { messageObject: s, raw: n, type: l } = e[t];
      this.logger(l, n, false, ...s);
    }
  }
  scope(...e) {
    if (e.length === 0) throw new Error("No scope name was defined.");
    return this.child({ scope: e });
  }
  unscope() {
    this.scopeName = [];
  }
  child(e) {
    return new pe(this.buildChildOptions(e));
  }
  time(e = "default") {
    this.timerManager.time(e);
  }
  timeLog(e, ...t) {
    this.timerManager.timeLog(e, ...t);
  }
  timeEnd(e) {
    this.timerManager.timeEnd(e);
  }
  group(e = "console.group") {
    globalThis.window === void 0 ? this.groups.push(e) : console.group(e);
  }
  groupEnd() {
    globalThis.window === void 0 ? this.groups.pop() : console.groupEnd();
  }
  count(e = "default") {
    this.counterManager.count(e);
  }
  countReset(e = "default") {
    this.counterManager.countReset(e);
  }
  clear() {
    console.clear();
  }
  raw(e, ...t) {
    this.disabled || this.logger("log", true, false, { context: t, message: e });
  }
  buildChildOptions(e) {
    const t = e?.types !== void 0, s = t ? $e(this.types, e.types) : this.types, n = e?.reporters ?? [], l = n.length > 0 ? [...this.reporters, ...n] : [...this.reporters], a = e?.processors ?? [], o = a.length > 0 ? [...this.processors, ...a] : [...this.processors], d = e?.logLevels ? { ...this.logLevels, ...e.logLevels } : this.logLevels;
    let m;
    if (e?.scope) {
      const $ = we(e.scope).filter(Boolean);
      m = this.scopeName.length > 0 ? [...this.scopeName, ...$] : $;
    } else m = this.scopeName.length > 0 ? this.scopeName : [];
    const b = e?.messages ? { timerEnd: this.endTimerMessage, timerStart: this.startTimerMessage, ...e.messages } : { timerEnd: this.endTimerMessage, timerStart: this.startTimerMessage }, f = { disabled: e?.disabled ?? this.disabled, logLevel: e?.logLevel ?? this.generalLogLevel, logLevels: d, messages: b, processors: o, rawReporter: e?.rawReporter ?? this.rawReporter, reporters: l, scope: m, throttle: e?.throttle ?? this.throttle, throttleMin: e?.throttleMin ?? this.throttleMin };
    return t ? (f.parentTypes = s, f.parentLongestLabel = Jr(s)) : (f.parentTypes = this.types, f.parentLongestLabel = this.longestLabel), e?.logLevels || (f.parentLogLevels = this.logLevels), e?.messages || (f.parentMessages = { timerEnd: this.endTimerMessage, timerStart: this.startTimerMessage }), f.parentStringify = this.stringify, f;
  }
  extendReporter(e) {
    return typeof e.setLoggerTypes == "function" && e.setLoggerTypes(this.types), typeof e.setStringify == "function" && e.setStringify(this.stringify), e;
  }
  registerReporters(e) {
    for (let t = 0; t < e.length; t += 1) this.reporters.add(this.extendReporter(e[t]));
  }
  registerProcessors(e) {
    for (let t = 0; t < e.length; t += 1) {
      const s = e[t];
      typeof s.setStringify == "function" && s.setStringify(this.stringify), this.processors.add(s);
    }
  }
  #s(e, t) {
    if (t) this.rawReporter.log(Object.freeze(e));
    else for (const s of this.reporters) s.log(Object.freeze(e));
  }
  #n(e) {
    let t = "debug";
    return e !== void 0 && Object.hasOwn(this.logLevels, e) ? t = e : e !== void 0 && !this.#t.has(e) && (this.#t.add(e), console.warn(`[pail] Unknown log level "${String(e)}". Valid levels: ${Object.keys(this.logLevels).join(", ")}. Falling back to "debug".`)), t;
  }
  #o(e, t, ...s) {
    const n = { badge: void 0, context: void 0, error: void 0, label: void 0, message: Yr, prefix: void 0, repeated: void 0, scope: void 0, suffix: void 0 };
    if (n.type = { level: t.logLevel, name: e }, n.groups = this.groups, n.scope = this.scopeName, n.date = /* @__PURE__ */ new Date(), s.length > 0 && s[0] instanceof Error) n.error = s[0], s.length > 1 && (n.context = s.slice(1));
    else if (s.length > 0 && typeof s[0] == "object" && s[0] !== null && "message" in s[0]) {
      const { context: l, message: a, prefix: o, suffix: d } = s[0];
      if (l && (n.context = l), o && (n.prefix = o), d && (n.suffix = d), n.message = a, s.length > 1) {
        const m = s.slice(1);
        n.context ? n.context = Array.isArray(n.context) ? [...n.context, ...m] : [n.context, ...m] : n.context = m;
      }
    } else s.length > 1 ? (n.message = s[0], n.context = s.slice(1)) : s.length === 1 ? n.message = s[0] : n.message = void 0;
    return t.logLevel === "trace" && (n.traceError = new Error("Trace")), t.badge && (n.badge = t.badge), t.label && (n.label = t.label), n;
  }
  logger(e, t, s, ...n) {
    if (this.disabled) return;
    if (this.paused) {
      this.messageQueue.push({ messageObject: n, raw: t, type: e });
      return;
    }
    const l = this.types[e], a = this.#n(l.logLevel);
    if (s || this.logLevels[a] >= this.logLevels[this.generalLogLevel]) {
      let o = this.#o(e, l, ...n), d;
      try {
        d = JSON.stringify([o.label, o.scope, o.type, o.message, o.prefix, o.suffix, o.context]);
      } catch {
        d = void 0;
      }
      const m = this.processors.size > 0, b = (u = false) => {
        const L = (this.lastLog.count ?? 0) - this.throttleMin;
        if (this.lastLog.object && L > 0) {
          const I = { ...this.lastLog.object };
          L > 1 && (I.repeated = L), this.#s(I, t), this.lastLog.count = 1;
        }
        if (u) {
          for (const I of this.processors) o = I.process(o);
          if (o.dropped === true) return;
          if (this.lastLog.object = o, m) try {
            this.lastLog.signature = JSON.stringify([o.label, o.scope, o.type, o.message, o.prefix, o.suffix, o.context]);
          } catch {
            this.lastLog.signature = void 0;
          }
          else this.lastLog.signature = d;
          this.#s(o, t);
        }
      };
      clearTimeout(this.lastLog.timeout);
      const f = o.date instanceof Date ? o.date : new Date(o.date), $ = this.lastLog.time ? f.getTime() - this.lastLog.time.getTime() : 0;
      if (this.lastLog.time = f, $ < this.throttle) try {
        const u = d;
        if (this.lastLog.object && u !== void 0 && u === this.lastLog.signature && (this.lastLog.count = (this.lastLog.count ?? 0) + 1, this.lastLog.count > this.throttleMin)) {
          this.lastLog.timeout = setTimeout(b, this.throttle);
          return;
        }
      } catch {
      }
      b(true);
    }
  }
}
class nt {
  #t;
  #e;
  #r;
  #i = false;
  #s;
  constructor(e = {}) {
    this.#t = he, this.#e = de, this.#s = e;
  }
  setStdout(e) {
    this.#t = e;
  }
  setStderr(e) {
    this.#e = e;
  }
  setInteractiveManager(e) {
    this.#r = e;
  }
  setIsInteractive(e) {
    this.#i = e;
  }
  log(e) {
    const { context: t, groups: s, message: n, type: l } = e, a = [];
    if (n !== Yr) {
      const b = typeof n == "string" ? n : Kr(n, this.#s);
      a.push(b);
    }
    t && a.push(...t.map((b) => typeof b == "object" ? ` ${Kr(b, this.#s)}` : ` ${String(b)}`));
    const o = Zr(l.level) ? "stderr" : "stdout", d = o === "stderr" ? this.#e : this.#t, m = s.map(() => "    ").join("");
    this.#i && this.#r !== void 0 && d.isTTY ? this.#r.update(o, (m + a.join("")).split(`
`), 0) : Xr(m + a.join(""), d);
  }
}
class me extends pe {
  constructor(e) {
    const t = e.parentStderr, s = e.parentStdout, { interactive: n, processors: l, rawReporter: a, reporters: o, stderr: d, stdout: m } = e, b = t ?? d, f = s ?? m, $ = e.parentLongestLabel, u = e.parentTypes, { parentLogLevels: L, parentMessages: I, parentStringify: G } = e, C = { disabled: e.disabled, logLevel: e.logLevel, logLevels: e.logLevels, messages: e.messages, processors: [], rawReporter: e.rawReporter, reporters: [], scope: e.scope, throttle: e.throttle, throttleMin: e.throttleMin }, c = "types" in e;
    u && $ && !c ? (C.parentTypes = u, C.parentLongestLabel = $) : c && e.types !== void 0 && (C.types = e.types), G && (C.parentStringify = G), L && !e.logLevels && (C.parentLogLevels = L), I && !e.messages && (C.parentMessages = I), super(C), this.options = e, this.interactive = n ?? false, this.stdout = f, this.stderr = b, this.interactive && this.stdout && this.stderr && (this.interactiveManager = new yC(new W$2(this.stdout), new W$2(this.stderr))), Array.isArray(o) && this.registerReporters(o), this.rawReporter = this.extendReporter(a ?? new nt()), Array.isArray(l) && this.registerProcessors(l);
  }
  options;
  stdout;
  stderr;
  interactiveManager;
  interactive;
  scope(...e) {
    if (e.length === 0) throw new Error("No scope name was defined.");
    return this.child({ scope: e });
  }
  child(e) {
    const t = this.buildChildOptions(e);
    return t.interactive = e?.interactive ?? this.interactive, t.stderr = e?.stderr ?? this.stderr, t.stdout = e?.stdout ?? this.stdout, e?.stdout || (t.parentStdout = this.stdout), e?.stderr || (t.parentStderr = this.stderr), new me(t);
  }
  getInteractiveManager() {
    return this.interactiveManager;
  }
  wrapStd() {
    this.#t(this.stdout, "log"), this.#t(this.stderr, "error");
  }
  restoreStd() {
    this.#e(this.stdout), this.#e(this.stderr);
  }
  wrapAll() {
    this.wrapConsole(), this.wrapStd();
  }
  restoreAll() {
    this.restoreConsole(), this.restoreStd();
  }
  clear() {
    this.stdout?.write(be), this.stderr?.write(be);
  }
  extendReporter(e) {
    return typeof e.setStdout == "function" && e.setStdout(this.stdout), typeof e.setStderr == "function" && e.setStderr(this.stderr), typeof e.setLoggerTypes == "function" && e.setLoggerTypes(this.types), typeof e.setStringify == "function" && e.setStringify(this.stringify), typeof e.setIsInteractive == "function" && e.setIsInteractive(this.interactive), this.interactive && typeof e.setInteractiveManager == "function" && e.setInteractiveManager(this.interactiveManager), e;
  }
  #t(e, t) {
    e && (e.__write || (e.__write = e.write), e.write = (s) => {
      this[t](String(s).trim());
    });
  }
  #e(e) {
    e && e.__write && (e.write = e.__write, delete e.__write);
  }
}
const ot = me;
let ne$1;
const lt = () => (ne$1 !== void 0 || (ne$1 = /* @__PURE__ */ new Map([["aliceblue", "#f0f8ff"], ["antiquewhite", "#faebd7"], ["aqua", "#00ffff"], ["aquamarine", "#7fffd4"], ["azure", "#f0ffff"], ["beige", "#f5f5dc"], ["bisque", "#ffe4c4"], ["black", "#000000"], ["blanchedalmond", "#ffebcd"], ["blue", "#0000ff"], ["blueviolet", "#8a2be2"], ["brown", "#a52a2a"], ["burlywood", "#deb887"], ["cadetblue", "#5f9ea0"], ["chartreuse", "#7fff00"], ["chocolate", "#d2691e"], ["coral", "#ff7f50"], ["cornflowerblue", "#6495ed"], ["cornsilk", "#fff8dc"], ["crimson", "#dc143c"], ["cyan", "#00ffff"], ["darkblue", "#00008b"], ["darkcyan", "#008b8b"], ["darkgoldenrod", "#b8860b"], ["darkgray", "#a9a9a9"], ["darkgreen", "#006400"], ["darkgrey", "#a9a9a9"], ["darkkhaki", "#bdb76b"], ["darkmagenta", "#8b008b"], ["darkolivegreen", "#556b2f"], ["darkorange", "#ff8c00"], ["darkorchid", "#9932cc"], ["darkred", "#8b0000"], ["darksalmon", "#e9967a"], ["darkseagreen", "#8fbc8f"], ["darkslateblue", "#483d8b"], ["darkslategray", "#2f4f4f"], ["darkslategrey", "#2f4f4f"], ["darkturquoise", "#00ced1"], ["darkviolet", "#9400d3"], ["deeppink", "#ff1493"], ["deepskyblue", "#00bfff"], ["dimgray", "#696969"], ["dimgrey", "#696969"], ["dodgerblue", "#1e90ff"], ["firebrick", "#b22222"], ["floralwhite", "#fffaf0"], ["forestgreen", "#228b22"], ["fuchsia", "#ff00ff"], ["gainsboro", "#dcdcdc"], ["ghostwhite", "#f8f8ff"], ["gold", "#ffd700"], ["goldenrod", "#daa520"], ["gray", "#808080"], ["green", "#008000"], ["greenyellow", "#adff2f"], ["grey", "#808080"], ["honeydew", "#f0fff0"], ["hotpink", "#ff69b4"], ["indianred", "#cd5c5c"], ["indigo", "#4b0082"], ["ivory", "#fffff0"], ["khaki", "#f0e68c"], ["lavender", "#e6e6fa"], ["lavenderblush", "#fff0f5"], ["lawngreen", "#7cfc00"], ["lemonchiffon", "#fffacd"], ["lightblue", "#add8e6"], ["lightcoral", "#f08080"], ["lightcyan", "#e0ffff"], ["lightgoldenrodyellow", "#fafad2"], ["lightgray", "#d3d3d3"], ["lightgreen", "#90ee90"], ["lightgrey", "#d3d3d3"], ["lightpink", "#ffb6c1"], ["lightsalmon", "#ffa07a"], ["lightseagreen", "#20b2aa"], ["lightskyblue", "#87cefa"], ["lightslategray", "#778899"], ["lightslategrey", "#778899"], ["lightsteelblue", "#b0c4de"], ["lightyellow", "#ffffe0"], ["lime", "#00ff00"], ["limegreen", "#32cd32"], ["linen", "#faf0e6"], ["magenta", "#ff00ff"], ["maroon", "#800000"], ["mediumaquamarine", "#66cdaa"], ["mediumblue", "#0000cd"], ["mediumorchid", "#ba55d3"], ["mediumpurple", "#9370db"], ["mediumseagreen", "#3cb371"], ["mediumslateblue", "#7b68ee"], ["mediumspringgreen", "#00fa9a"], ["mediumturquoise", "#48d1cc"], ["mediumvioletred", "#c71585"], ["midnightblue", "#191970"], ["mintcream", "#f5fffa"], ["mistyrose", "#ffe4e1"], ["moccasin", "#ffe4b5"], ["navajowhite", "#ffdead"], ["navy", "#000080"], ["oldlace", "#fdf5e6"], ["olive", "#808000"], ["olivedrab", "#6b8e23"], ["orange", "#ffa500"], ["orangered", "#ff4500"], ["orchid", "#da70d6"], ["palegoldenrod", "#eee8aa"], ["palegreen", "#98fb98"], ["paleturquoise", "#afeeee"], ["palevioletred", "#db7093"], ["papayawhip", "#ffefd5"], ["peachpuff", "#ffdab9"], ["peru", "#cd853f"], ["pink", "#ffc0cb"], ["plum", "#dda0dd"], ["powderblue", "#b0e0e6"], ["purple", "#800080"], ["rebeccapurple", "#663399"], ["red", "#ff0000"], ["rosybrown", "#bc8f8f"], ["royalblue", "#4169e1"], ["saddlebrown", "#8b4513"], ["salmon", "#fa8072"], ["sandybrown", "#f4a460"], ["seagreen", "#2e8b57"], ["seashell", "#fff5ee"], ["sienna", "#a0522d"], ["silver", "#c0c0c0"], ["skyblue", "#87ceeb"], ["slateblue", "#6a5acd"], ["slategray", "#708090"], ["slategrey", "#708090"], ["snow", "#fffafa"], ["springgreen", "#00ff7f"], ["steelblue", "#4682b4"], ["tan", "#d2b48c"], ["teal", "#008080"], ["thistle", "#d8bfd8"], ["tomato", "#ff6347"], ["turquoise", "#40e0d0"], ["violet", "#ee82ee"], ["wheat", "#f5deb3"], ["white", "#ffffff"], ["whitesmoke", "#f5f5f5"], ["yellow", "#ffff00"], ["yellowgreen", "#9acd32"]])), ne$1);
const at = /^#([\dA-F]{2})([\dA-F]{2})([\dA-F]{2})([\dA-F]{2})?$/i;
const ft = /^#([\dA-F])([\dA-F])([\dA-F])([\dA-F])?$/i;
const ct = /^rgba?\(\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*(,\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*)?\)$/;
const gt = /^hsla?\(\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))%\s*,\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))%\s*(,\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*)?\)$/;
const ge = () => ({ __proto__: null, backgroundColor: null, color: null, fontStyle: null, fontWeight: null, textDecorationColor: null, textDecorationLine: [] });
const Le = /\s+/;
const se = (r) => {
  const e = lt();
  e.has(r) && (r = e.get(r));
  const t = at.exec(r);
  if (t) return [Number.parseInt(t[1], 16), Number.parseInt(t[2], 16), Number.parseInt(t[3], 16)];
  const s = ft.exec(r);
  if (s) return [Number.parseInt(`${s[1]}${s[1]}`, 16), Number.parseInt(`${s[2]}${s[2]}`, 16), Number.parseInt(`${s[3]}${s[3]}`, 16)];
  const n = ct.exec(r);
  if (n) return [Math.round(Math.max(0, Math.min(255, Number(n[1])))), Math.round(Math.max(0, Math.min(255, Number(n[2])))), Math.round(Math.max(0, Math.min(255, Number(n[3]))))];
  const l = gt.exec(r);
  if (l) {
    let a = Number(l[1]) % 360;
    a < 0 && (a += 360);
    const o = Math.max(0, Math.min(100, Number(l[2]))) / 100, d = Math.max(0, Math.min(100, Number(l[3]))) / 100, m = (1 - Math.abs(2 * d - 1)) * o, b = m * (1 - Math.abs(a / 60 % 2 - 1)), f = d - m / 2;
    let $, u, L;
    return a < 60 ? { 0: $, 1: u, 2: L } = [m, b, 0] : a < 120 ? { 0: $, 1: u, 2: L } = [b, m, 0] : a < 180 ? { 0: $, 1: u, 2: L } = [0, m, b] : a < 240 ? { 0: $, 1: u, 2: L } = [0, b, m] : a < 300 ? { 0: $, 1: u, 2: L } = [b, 0, m] : { 0: $, 1: u, 2: L } = [m, 0, b], [Math.round(($ + f) * 255), Math.round((u + f) * 255), Math.round((L + f) * 255)];
  }
  return null;
};
const oe = (r, e) => typeof r == "string" || typeof e == "string" ? r === e : r?.[0] === e?.[0] && r?.[1] === e?.[1] && r?.[2] === e?.[2];
const ht = (r) => {
  if (typeof r != "string") return ge();
  const e = ge(), t = [];
  let s = false, n = null, l = 0, a = "";
  for (const o of r) {
    if (o === "(") l += 1;
    else if (l > 0) o === ")" && (l -= 1);
    else if (s) {
      if (o === ";") {
        const d = a.trim();
        d !== "" && t.push([n, d]), n = null, a = "", s = false;
        continue;
      }
    } else if (o === ":") {
      n = a.trim(), a = "", s = true;
      continue;
    }
    a += o;
  }
  if (s && l === 0) {
    const o = a.trim();
    o !== "" && t.push([n, o]), n = null, a = "";
  }
  for (const { 0: o, 1: d } of t) switch (o) {
    case "background-color": {
      d != null && (e.backgroundColor = d);
      break;
    }
    case "color": {
      d != null && (e.color = d);
      break;
    }
    case "font-style": {
      ["italic", "oblique", "oblique 14deg"].includes(d) && (e.fontStyle = "italic");
      break;
    }
    case "font-weight": {
      d === "bold" && (e.fontWeight = d);
      break;
    }
    case "text-decoration": {
      e.textDecorationColor = null, e.textDecorationLine = [];
      const m = d.split(Le);
      for (const b of m) {
        const f = se(b);
        f != null ? e.textDecorationColor = f : ["line-through", "overline", "underline"].includes(b) && e.textDecorationLine.push(b);
      }
      break;
    }
    case "text-decoration-color": {
      const m = se(d);
      m != null && (e.textDecorationColor = m);
      break;
    }
    case "text-decoration-line": {
      e.textDecorationLine = [];
      const m = d.split(Le);
      for (const b of m) ["line-through", "overline", "underline"].includes(b) && e.textDecorationLine.push(b);
      break;
    }
  }
  return e;
};
const dt = (r, e) => {
  e = e ?? ge();
  let t = "";
  if (!oe(r.backgroundColor, e.backgroundColor)) if (r.backgroundColor == null) t += "\x1B[49m";
  else switch (r.backgroundColor) {
    case "black": {
      t += "\x1B[40m";
      break;
    }
    case "blue": {
      t += "\x1B[44m";
      break;
    }
    case "cyan": {
      t += "\x1B[46m";
      break;
    }
    case "green": {
      t += "\x1B[42m";
      break;
    }
    case "magenta": {
      t += "\x1B[45m";
      break;
    }
    case "red": {
      t += "\x1B[41m";
      break;
    }
    case "white": {
      t += "\x1B[47m";
      break;
    }
    case "yellow": {
      t += "\x1B[43m";
      break;
    }
    default:
      if (Array.isArray(r.backgroundColor)) {
        const { 0: s, 1: n, 2: l } = r.backgroundColor;
        t += `\x1B[48;2;${String(s)};${String(n)};${String(l)}m`;
      } else {
        const s = se(r.backgroundColor);
        if (s === null) t += "\x1B[49m";
        else {
          const { 0: n, 1: l, 2: a } = s;
          t += `\x1B[48;2;${String(n)};${String(l)};${String(a)}m`;
        }
      }
  }
  if (!oe(r.color, e.color)) if (r.color == null) t += "\x1B[39m";
  else switch (r.color) {
    case "black": {
      t += "\x1B[30m";
      break;
    }
    case "blue": {
      t += "\x1B[34m";
      break;
    }
    case "cyan": {
      t += "\x1B[36m";
      break;
    }
    case "green": {
      t += "\x1B[32m";
      break;
    }
    case "magenta": {
      t += "\x1B[35m";
      break;
    }
    case "red": {
      t += "\x1B[31m";
      break;
    }
    case "white": {
      t += "\x1B[37m";
      break;
    }
    case "yellow": {
      t += "\x1B[33m";
      break;
    }
    default:
      if (Array.isArray(r.color)) {
        const { 0: s, 1: n, 2: l } = r.color;
        t += `\x1B[38;2;${String(s)};${String(n)};${String(l)}m`;
      } else {
        const s = se(r.color);
        if (s === null) t += "\x1B[39m";
        else {
          const { 0: n, 1: l, 2: a } = s;
          t += `\x1B[38;2;${String(n)};${String(l)};${String(a)}m`;
        }
      }
  }
  if (r.fontWeight !== e.fontWeight && (t += r.fontWeight === "bold" ? "\x1B[1m" : "\x1B[22m"), r.fontStyle !== e.fontStyle && (t += r.fontStyle === "italic" ? "\x1B[3m" : "\x1B[23m"), !oe(r.textDecorationColor, e.textDecorationColor)) if (r.textDecorationColor == null) t += "\x1B[59m";
  else {
    const { 0: s, 1: n, 2: l } = r.textDecorationColor;
    t += `\x1B[58;2;${String(s)};${String(n)};${String(l)}m`;
  }
  return r.textDecorationLine.includes("line-through") !== e.textDecorationLine.includes("line-through") && (t += r.textDecorationLine.includes("line-through") ? "\x1B[9m" : "\x1B[29m"), r.textDecorationLine.includes("overline") !== e.textDecorationLine.includes("overline") && (t += r.textDecorationLine.includes("overline") ? "\x1B[53m" : "\x1B[55m"), r.textDecorationLine.includes("underline") !== e.textDecorationLine.includes("underline") && (t += r.textDecorationLine.includes("underline") ? "\x1B[4m" : "\x1B[24m"), t;
};
const ut = (r) => {
  try {
    return JSON.stringify(r);
  } catch {
    return '"[Circular]"';
  }
};
const xe = "%".codePointAt(0);
const pt = "s".codePointAt(0);
const mt = "d".codePointAt(0);
const yt = "f".codePointAt(0);
const bt = "i".codePointAt(0);
const St = "O".codePointAt(0);
const wt = "o".codePointAt(0);
const $t = "j".codePointAt(0);
const Lt = "c".codePointAt(0);
const Te = (r, e = [], t = {}) => {
  if (typeof r != "string" && typeof r != "object" || r === null) throw new TypeError(`fmt must be a string or object, got ${r === null ? "null" : typeof r}`);
  const s = t.stringify ?? ut, n = 1;
  if (typeof r == "object") {
    const f = e.length + n;
    if (f === 1) return "{}";
    const $ = Array.from({ length: f });
    $[0] = s(r);
    for (let u = 1; u < f; u += 1) $[u] = s(e[u - n]);
    return $.join(" ");
  }
  if (e.length === 0) return r;
  let l = "", a = 1 - n, o = -1, d = false, m;
  const b = t.colors ?? globalThis.window === void 0;
  for (let f = 0; f < r.length; ) {
    if (r.codePointAt(f) === xe && f + 1 < r.length) {
      o = o > -1 ? o : 0;
      const $ = r.codePointAt(f + 1);
      switch ($) {
        case Lt: {
          if (o < f && (l += r.slice(o, f)), b) {
            const u = ht(e[a]), L = dt(u, m);
            l += L, L !== "" && (d = true, m = u);
          }
          o = f + 2, f += 1;
          break;
        }
        case mt:
        case yt: {
          const u = e[a];
          if (a >= e.length || u == null) break;
          o < f && (l += r.slice(o, f)), l += (typeof u == "symbol" ? Number.NaN : Number(u)).toString(), o = f + 2, f += 1;
          break;
        }
        case bt: {
          const u = e[a];
          if (a >= e.length || u == null) break;
          o < f && (l += r.slice(o, f)), l += Math.floor(typeof u == "symbol" ? Number.NaN : Number(u)).toString(), o = f + 2, f += 1;
          break;
        }
        case $t:
        case St:
        case wt: {
          if (a >= e.length || e[a] === void 0) break;
          o < f && (l += r.slice(o, f));
          const u = e[a], L = typeof u;
          if (L === "string") {
            l += `'${u}'`, o = f + 2, f += 1;
            break;
          }
          if (L === "function") {
            l += u.name ? `[Function: ${u.name}]` : "[Function: <anonymous>]", o = f + 2, f += 1;
            break;
          }
          l += s(u), o = f + 2, f += 1;
          break;
        }
        case xe: {
          o < f && (l += r.slice(o, f)), l += "%", o = f + 2, f += 1, a -= 1;
          break;
        }
        case pt: {
          if (a >= e.length) break;
          o < f && (l += r.slice(o, f));
          const u = e[a];
          l += typeof u == "object" && u !== null ? s(u) : String(u), o = f + 2, f += 1;
          break;
        }
        default:
          typeof t.formatters?.[$] == "function" ? (o < f && (l += r.slice(o, f)), l += t.formatters[$](e[a]), o = f + 2, f += 1) : a -= 1;
      }
      a += 1;
    }
    f += 1;
  }
  if (o === -1 && !(t.appendExtraArguments && a < e.length)) return r;
  if (o === -1 ? l = r : o < r.length && (l += r.slice(o)), o !== -1 && d && (l += "\x1B[0m"), t.appendExtraArguments && a < e.length) for (let f = Math.max(a, 0); f < e.length; f += 1) {
    const $ = e[f];
    l += ` ${typeof $ == "object" && $ !== null ? s($) : String($)}`;
  }
  return l;
};
const xt = (r = {}) => {
  const e = {};
  typeof r.formatters == "object" && Object.entries(r.formatters).forEach(([n, l]) => {
    if (n.length === 0) throw new Error(`Formatter %${n} has no characters`);
    if (n.length > 1) throw new Error(`Formatter %${n} has more than one character`);
    if (typeof l != "function") throw new TypeError(`Formatter for %${n} is not a function`);
    const a = n.codePointAt(0);
    if (a === void 0) throw new Error(`${n}.codePointAt(0) failed to return a value, please report this issue`);
    e[a] = l;
  });
  const t = { ...r };
  delete t.formatters;
  const s = Object.freeze({ ...t, formatters: e });
  return (n, l = [], a) => a === void 0 ? Te(n, l, s) : Te(n, l, { ...t, ...a, formatters: e });
};
const Tt = '"[Circular]"';
class Mt {
  #t;
  #e;
  #r;
  constructor(e = {}) {
    this.#e = e.formatters;
  }
  setStringify(e) {
    this.#t = e;
  }
  process(e) {
    this.#r === void 0 && (this.#r = xt({ formatters: this.#e, stringify: (s) => this.#i(s) }));
    const t = this.#r;
    return e.message !== void 0 && (e.message = this.#s(t, e.message, e.context ?? [])), e;
  }
  #i(e) {
    if (this.#t === void 0) try {
      return JSON.stringify(e);
    } catch {
      return Tt;
    }
    try {
      return this.#t(e);
    } catch (t) {
      return JSON.stringify(`[unserializable: ${t instanceof Error ? t.message : String(t)}]`);
    }
  }
  #s(e, t, s = []) {
    if (typeof t == "string") return e(t, s);
    if (typeof t == "object" && t !== null) {
      const n = t, l = Object.keys(n);
      for (let a = 0; a < l.length; a += 1) {
        const o = l[a], d = n[o];
        (typeof d == "string" || Array.isArray(d) || typeof d == "object") && (n[o] = this.#s(e, d, s));
      }
    }
    return t;
  }
}
const { bgGrey: Et, cyan: vt, green: At, greenBright: Ot, grey: V$1, red: le, underline: Me, white: kt } = t$1;
const Bt = /[\\/]pail[\\/]dist/;
const ae = (r) => !Bt.test(r);
class jt extends so {
  #t;
  #e;
  #r;
  #i = false;
  #s;
  #n;
  #o;
  #l = false;
  #a = "";
  #f = "";
  constructor(e = {}) {
    const { error: t, inspect: s, ...n } = e;
    super({ uppercase: { label: true, ...n.uppercase }, ...n }), this.#s = { ...ro, ...s }, this.#n = { ...t, color: { fileLine: At, hint: vt, marker: le, message: le, method: Ot, title: le } }, this.#t = he, this.#e = de, this.#c();
  }
  setLoggerTypes(e) {
    super.setLoggerTypes(e), this.#c();
  }
  setStdout(e) {
    this.#t = e, this.#o = void 0, this.#l = false;
  }
  setStderr(e) {
    this.#e = e;
  }
  setInteractiveManager(e) {
    this.#r = e;
  }
  setIsInteractive(e) {
    this.#i = e;
  }
  log(e) {
    this._log(this._formatMessage(e), e.type.level);
  }
  #c() {
    this.#a = no(this.loggerTypes), this.#f = Jr(this.loggerTypes);
  }
  #g() {
    return !this.#l && typeof this.#t.on == "function" && (this.#l = true, this.#t.on("resize", () => {
      this.#o = void 0;
    })), this.#o === void 0 && (this.#o = to().columns), this.#o;
  }
  _formatMessage(e) {
    let t = this.#g();
    typeof this.styles.messageLength == "number" && (t = this.styles.messageLength);
    const { badge: s, context: n, date: l, error: a, file: o, groups: d, label: m, message: b, prefix: f, repeated: $, scope: u, suffix: L, traceError: I, type: G } = e, { color: C } = this.loggerTypes[G.name], c = C ? t$1[C] : kt, g = d.map(() => "    ").join(""), h = [];
    if (d.length > 0 && h.push(`${g + V$1(`[${d.at(-1) ?? ""}]`)} `), l && h.push(`${V$1(this.styles.dateFormatter(typeof l == "string" ? new Date(l) : l))} `), s) h.push(c(s));
    else {
      const A = this.#a;
      A.length > 0 && h.push(`${V$1(".".repeat(A.length))} `);
    }
    const N = this.#f;
    if (m) {
      const A = k(N), R = k(m);
      h.push(`${c(oo(m, this.styles))} `, V$1(".".repeat(Math.max(0, A - R))));
    } else h.push(V$1(".".repeat(N.length + 2)));
    $ && h.push(`${Et.white(`[${String($)}x]`)} `), Array.isArray(u) && u.length > 0 && h.push(` ${V$1(`[${u.join(" > ")}]`)} `), f && h.push(`${V$1(`${Array.isArray(u) && u.length > 0 ? ". " : " "}[${this.styles.underline.prefix ? Me(f) : f}]`)} `);
    const B = k(h.join(" "));
    if (o) {
      const A = (o.name ?? "") + (o.line ? `:${String(o.line)}` : ""), R = k(A);
      if (R + B + 2 > t) h.push(V$1(` ${A}`));
      else {
        const E = Math.max(0, t - B - R - 2);
        h.push(V$1(`${".".repeat(E)} ${A}`));
      }
    } else h.push(V$1(".".repeat(Math.max(0, t - B - 1))));
    if (h.length > 0 && h.push(`

`), b !== Yr) {
      const A = typeof b == "string" ? b : Kr(b, this.#s);
      h.push(g + eo(A, { trim: false, width: t - 3, wrapMode: J$1.PRESERVE_WORDS }));
    }
    if (n) {
      let A = false;
      h.push(...n.map((R) => {
        if (R instanceof Error) return A = true, `

${Qr(R, { ...this.#n, filterStacktrace: ae, prefix: g })}`;
        if (typeof R == "object") return ` ${Kr(R, this.#s)}`;
        const E = (A ? `

` : " ") + String(R);
        return A = false, E;
      }));
    }
    return a && h.push(Qr(a, { ...this.#n, filterStacktrace: ae, prefix: g })), I && h.push(`

${Qr(I, { ...this.#n, filterStacktrace: ae, hideErrorCauseCodeView: true, hideErrorCodeView: true, hideErrorErrorsCodeView: true, hideMessage: true, prefix: g })}`), L && h.push(`
`, g + V$1(this.styles.underline.suffix ? Me(L) : L)), h.join("");
  }
  _log(e, t) {
    const s = Zr(t) ? "stderr" : "stdout", n = s === "stderr" ? this.#e : this.#t;
    this.#i && this.#r !== void 0 && n.isTTY ? this.#r.update(s, e.split(`
`), 0) : Xr(`${e}
`, n);
  }
}
const Rt = () => K$1.NODE_ENV === "debug" || K$1.DEBUG !== void 0 ? "debug" : K$1.NODE_ENV === "test" ? "warning" : "informational";
const Nt = (r) => {
  let e = Rt();
  return K$1.PAIL_LOG_LEVEL !== void 0 && (e = K$1.PAIL_LOG_LEVEL), new ot({ logLevel: e, processors: [new Mt()], reporters: [new jt()], stderr: de, stdout: he, ...r });
};
Nt();

const P = typeof globalThis < "u" && typeof globalThis.process < "u" ? globalThis.process : process;
const { stdout: B, stderr: V } = P;
const { bgGrey: K, bold: v, cyan: N, green: Q, greenBright: U, grey: a, red: b, underline: R, white: ee } = t$1;
const te = /[\\/]pail[\\/]dist/;
const L = ($) => !te.test($);
class ne extends so {
  #e;
  #r;
  #i;
  #a = false;
  #o;
  #s;
  #t;
  #n = false;
  #h = "";
  #l = "";
  constructor(t = {}) {
    const { error: o, inspect: h, ...i } = t;
    super({ uppercase: { label: true, ...i.uppercase }, ...i }), this.#o = { ...ro, indent: void 0, ...h }, this.#s = { ...o, color: { fileLine: Q, hint: N, marker: b, message: b, method: U, title: b } }, this.#e = B, this.#r = V, this.#p();
  }
  setLoggerTypes(t) {
    super.setLoggerTypes(t), this.#p();
  }
  setStdout(t) {
    this.#e = t, this.#t = void 0, this.#n = false;
  }
  setStderr(t) {
    this.#r = t;
  }
  setInteractiveManager(t) {
    this.#i = t;
  }
  setIsInteractive(t) {
    this.#a = t;
  }
  log(t) {
    const o = this.formatMessage(t), h = t.type.level, i = Zr(h) ? "stderr" : "stdout", n = i === "stderr" ? this.#r : this.#e;
    this.#a && this.#i !== void 0 && n.isTTY ? this.#i.update(i, o.split(`
`), 0) : Xr(`${o}
`, n);
  }
  #p() {
    this.#h = no(this.loggerTypes), this.#l = Jr(this.loggerTypes);
  }
  #c() {
    return !this.#n && typeof this.#e.on == "function" && (this.#n = true, this.#e.on("resize", () => {
      this.#t = void 0;
    })), this.#t === void 0 && (this.#t = to().columns), this.#t;
  }
  formatMessage(t) {
    let o = this.#c();
    typeof this.styles.messageLength == "number" && (o = this.styles.messageLength);
    const { badge: h, context: i, date: n, error: _, file: p, groups: g, label: d, message: c, prefix: u, repeated: x, scope: m, suffix: y, traceError: E, type: C } = t, { color: T } = this.loggerTypes[C.name], M = T ? t$1[T] : ee, l = g.map(() => "    ").join(""), e = [];
    if (g.length > 0 && e.push(`${l + a(`[${g.at(-1) ?? ""}]`)} `), n && e.push(`${a(this.styles.dateFormatter(typeof n == "string" ? new Date(n) : n))} `), h) e.push(v(M(h)));
    else {
      const s = this.#h;
      s.length > 0 && e.push(a(" ".repeat(s.length)));
    }
    const A = this.#l, w = k(A);
    if (d) {
      const s = k(d), r = Math.max(0, w - s);
      e.push(`${v(M(oo(d, this.styles)))} `, " ".repeat(r));
    } else e.push(" ".repeat(w + 1));
    x && e.push(`${K.white(`[${String(x)}x]`)} `), Array.isArray(m) && m.length > 0 && e.push(`${a(`[${m.join(" > ")}]`)} `), u && e.push(`${a(`[${this.styles.underline.prefix ? R(u) : u}]`)} `);
    const I = k(e.join(""));
    if (c !== Yr) {
      const s = typeof c == "string" ? c : Kr(c, this.#o);
      e.push(l + eo(s, { trim: false, width: o - 3, wrapMode: J$1.PRESERVE_WORDS }));
    }
    if (i) {
      let s = false;
      e.push(...i.map((r) => {
        if (r instanceof Error) return s = true, `

${Qr(r, { ...this.#s, filterStacktrace: L, prefix: l })}`;
        if (typeof r == "object") return ` ${Kr(r, this.#o)}`;
        const O = (s ? `

` : " ") + String(r);
        return s = false, O;
      }));
    }
    if (_ && e.push(Qr(_, { ...this.#s, filterStacktrace: L, prefix: l })), E && e.push(`

${Qr(E, { ...this.#s, filterStacktrace: L, hideErrorCauseCodeView: true, hideErrorCodeView: true, hideErrorErrorsCodeView: true, hideMessage: true, prefix: l })}`), y && e.push(` ${l}${a(this.styles.underline.suffix ? R(y) : y)}`), p) {
      const s = (p.name ?? "") + (p.line ? `:${String(p.line)}` : ""), r = Math.max(0, I - k("Caller: "));
      e.push(`
`, a("Caller: "), " ".repeat(r), s, `
`);
    }
    return e.join("");
  }
}

const HOME = homedir();
const paths = {
  /** 配置仓库(源文件 + mise.toml),可用 OMARSYNC_REPO 覆盖 */
  configRepo: process.env["OMARSYNC_REPO"] ?? join(HOME, "Documents", "GitHub", "omarchy-config"),
  /** 状态目录(status.json、last.log、锁) */
  stateDir: join(HOME, ".local", "state", "omarsync"),
  statusJson: join(HOME, ".local", "state", "omarsync", "status.json"),
  lastLog: join(HOME, ".local", "state", "omarsync", "last.log"),
  lockFile: join(HOME, ".local", "state", "omarsync", "omarsync.lock")
};

const logger = Nt({
  logLevel: "informational",
  reporters: [
    new ne({
      // 只留时分秒
      dateFormatter: (date) => date.toTimeString().slice(0, 8),
      uppercase: { label: false }
    })
  ],
  stderr: process.stderr,
  stdout: process.stdout
});
function appendLog(level, message) {
  try {
    mkdirSync(dirname(paths.lastLog), { recursive: true });
    appendFileSync(paths.lastLog, `${(/* @__PURE__ */ new Date()).toISOString()} omarsync[${level}]: ${message}
`);
  } catch {
  }
}
function die(message) {
  appendLog("error", message);
  logger.error(`omarsync: ${message}`);
  process.exit(1);
}
const log = {
  info(message) {
    appendLog("info", message);
    logger.info(`omarsync: ${message}`);
  },
  warn(message) {
    appendLog("warn", message);
    logger.warn(`omarsync: ${message}`);
  },
  die
};

function gitBin() {
  const bin = resolveTool("git");
  if (!bin) {
    die("git 不可用");
  }
  return bin;
}
function baseArgs(repo) {
  return ["-C", repo, "-c", "core.hooksPath=/dev/null"];
}
function git(repo, args) {
  return run(gitBin(), [...baseArgs(repo), ...args]);
}
function gitCapture(repo, args) {
  const result = capture(gitBin(), [...baseArgs(repo), ...args]);
  return { ok: result.code === 0, code: result.code, stdout: result.stdout, stderr: result.stderr };
}
function gitOut(repo, args) {
  const { ok, stdout } = gitCapture(repo, args);
  return ok ? stdout.trimEnd() : void 0;
}

function miseBin() {
  return resolveTool("mise");
}
function available() {
  return miseBin() !== void 0;
}
function dotApply() {
  const bin = miseBin();
  if (!bin) {
    return false;
  }
  return run(bin, ["-C", paths.configRepo, "dot", "apply"]);
}
function adoptChanged() {
  const bin = miseBin();
  if (!bin) {
    return { ok: false, stderr: "mise 不可用" };
  }
  const result = capture(bin, ["-C", paths.configRepo, "dot", "add", "--changed"]);
  return { ok: result.code === 0, stderr: result.stderr };
}
function dotStatus() {
  const bin = miseBin();
  if (!bin) {
    return { ok: false, stdout: "", stderr: "mise 不可用" };
  }
  const result = capture(bin, ["-C", paths.configRepo, "dot", "status", "--json"]);
  return { ok: result.code === 0, stdout: result.stdout, stderr: result.stderr };
}

function hostnameSafe() {
  let name = "";
  try {
    name = readFileSync("/etc/hostname", "utf8").split("\n")[0] ?? "";
  } catch {
  }
  name = name.replaceAll(/[^A-Za-z0-9._-]/g, "");
  return name === "" ? "unknown" : name;
}
function iso8601() {
  const date = /* @__PURE__ */ new Date();
  const offset = -date.getTimezoneOffset();
  const sign = offset >= 0 ? "+" : "-";
  const abs = Math.abs(offset);
  const pad = (n) => String(n).padStart(2, "0");
  const local = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
  return `${local}${sign}${pad(Math.floor(abs / 60))}:${pad(abs % 60)}`;
}
function stdinIsTty() {
  return process.stdin.isTTY === true && process.stdout.isTTY === true;
}
async function confirm(prompt) {
  if (!stdinIsTty()) {
    return false;
  }
  const rl = readline.createInterface({ input: process.stdin, output: process.stderr });
  return new Promise((resolve) => {
    rl.question(`${prompt} [y/N] `, (answer) => {
      rl.close();
      resolve(answer === "y" || answer === "Y");
    });
  });
}

const SHA40 = /^[0-9a-f]{40}$/;
function parseRemote(url) {
  const cleaned = url.trim().replace(/\.git$/, "");
  const match = /(?:https:\/\/github\.com\/|git@github\.com:)([^/]+\/[^/]+)$/.exec(cleaned);
  return match ? match[1] : "";
}
function porcelainPath(line) {
  const rest = line.slice(3);
  const arrow = rest.indexOf(" -> ");
  return arrow >= 0 ? rest.slice(arrow + 4) : rest;
}
function collectRepoState() {
  const state = {
    initialized: false,
    branch: "",
    remote: "",
    dirty: false,
    behind: null,
    ahead: null,
    remoteCommit: "",
    changedFiles: [],
    lastCommitTime: "",
    error: ""
  };
  const repo = paths.configRepo;
  if (!isDir(`${repo}/.git`)) {
    return state;
  }
  if (gitOut(repo, ["rev-parse", "--is-inside-work-tree"]) !== "true") {
    return state;
  }
  state.initialized = true;
  state.branch = gitOut(repo, ["symbolic-ref", "--short", "HEAD"]) ?? "";
  const remoteUrl = gitOut(repo, ["remote", "get-url", "origin"]) ?? "";
  state.remote = parseRemote(remoteUrl);
  state.lastCommitTime = gitOut(repo, ["log", "-1", "--format=%cI"]) ?? "";
  const porcelain = gitOut(repo, ["status", "--porcelain=v1", "-uall"]) ?? "";
  const lines = porcelain === "" ? [] : porcelain.split("\n");
  state.dirty = lines.length > 0;
  state.changedFiles = lines.slice(0, 30).map(porcelainPath);
  const upstream = gitOut(repo, ["rev-parse", "--abbrev-ref", "--symbolic-full-name", "@{upstream}"]);
  if (!upstream) {
    state.behind = 0;
    state.ahead = 0;
    return state;
  }
  const fetched = gitCapture(repo, ["fetch", "--quiet", "origin", state.branch || upstream.split("/").pop()]);
  if (!fetched.ok) {
    state.error = "could not fetch origin";
    state.behind = 0;
    state.ahead = 0;
    return state;
  }
  const counts = gitOut(repo, ["rev-list", "--left-right", "--count", "HEAD...@{upstream}"]) ?? "0	0";
  const [aheadText, behindText] = counts.split(/\s+/);
  state.ahead = Number(aheadText ?? 0);
  state.behind = Number(behindText ?? 0);
  const tip = gitOut(repo, ["rev-parse", "@{upstream}"]) ?? "";
  state.remoteCommit = SHA40.test(tip) ? tip : "";
  return state;
}

function ghInstalled() {
  return resolveTool("gh") !== void 0;
}
function ghLoggedIn() {
  const bin = resolveTool("gh");
  if (!bin) {
    return false;
  }
  return capture(bin, ["auth", "status"]).code === 0;
}
function githubUser() {
  const bin = resolveTool("gh");
  if (!bin) {
    return void 0;
  }
  const result = capture(bin, ["api", "user", "--jq", ".login"]);
  const user = result.stdout.trim();
  return result.code === 0 && user !== "" ? user : void 0;
}

function isRunning() {
  if (process.env["OMARSYNC_LOCK_HELD"] === "1") {
    return false;
  }
  const flock = resolveTool("flock");
  if (!flock) {
    return false;
  }
  mkdirSync(dirname(paths.lockFile), { recursive: true });
  const result = spawnSync(flock, ["-n", paths.lockFile, "-c", "true"]);
  return result.status !== 0;
}
function collect() {
  const repoState = collectRepoState();
  const st = {
    ghInstalled: ghInstalled(),
    loggedIn: false,
    user: "",
    repo: repoState.remote,
    // 面板有"打开文件分支"入口;新架构只有一个仓库一个分支,两个字段同源
    dotRepo: repoState.remote,
    dotBranch: repoState.branch || "main",
    branch: repoState.branch || "main",
    initialized: repoState.initialized,
    dirty: repoState.dirty,
    behind: repoState.behind,
    ahead: repoState.ahead,
    remoteCommit: repoState.remoteCommit,
    pinnedCommit: "",
    // 私有仓库 + 无签名门:所有远程内容一视同仁
    remoteSigned: true,
    remoteSignature: "trusted",
    signerFingerprint: "",
    hasTrustedKeys: true,
    firstApply: false,
    lastPush: { host: hostnameSafe(), time: repoState.lastCommitTime, omarchyVersion: "" },
    running: isRunning(),
    error: repoState.error,
    miseConnected: available() && repoState.initialized,
    changedFiles: repoState.changedFiles
  };
  if (st.ghInstalled && ghLoggedIn()) {
    st.loggedIn = true;
    st.user = githubUser() ?? "";
  }
  return st;
}
function writeJson(st) {
  const text = JSON.stringify(st);
  mkdirSync(paths.stateDir, { recursive: true });
  writeFileSync(paths.statusJson, `${text}
`);
  return text;
}
function executeStatus(json) {
  const st = collect();
  const text = writeJson(st);
  if (json) {
    process.stdout.write(`${text}
`);
    return;
  }
  const githubState = st.loggedIn ? st.user : st.ghInstalled ? "signed out" : "cli missing";
  log.info(`github: ${githubState}`);
  log.info(`repo: ${st.repo === "" ? "<unset>" : st.repo} (${st.branch})`);
  log.info(`local: ${st.initialized ? paths.configRepo : "not initialized"}`);
  log.info(`mise dot: ${st.miseConnected ? "available" : "unavailable"}`);
  log.info(`local changes: ${st.dirty ? "yes" : "no"}`);
  log.info(`behind: ${String(st.behind)}  ahead: ${String(st.ahead)}`);
  if (st.lastPush.time !== "") {
    log.info(`last commit: ${st.lastPush.time} on ${st.lastPush.host}`);
  }
  if (st.error !== "") {
    log.warn(st.error);
  }
}
function refreshStatusFile() {
  writeJson(collect());
}

function executeApply(options) {
  const repo = paths.configRepo;
  const state = collectRepoState();
  if (!state.initialized) {
    die(`配置仓库不存在或不是 git 仓库: ${repo}`);
  }
  if (!available()) {
    die("mise 不可用,无法部署");
  }
  if (state.dirty) {
    die("本地有未提交改动,请先 push 或 stash 后再 apply");
  }
  if ((state.behind ?? 0) === 0) {
    log.info("远程没有新提交,直接执行 mise dot apply");
  } else {
    log.info(`快进拉取 ${state.behind} 个远程提交…`);
    if (!git(repo, ["pull", "--ff-only"])) {
      die("git pull --ff-only 失败(历史可能已分叉),请在仓库里手动解决后重试");
    }
  }
  log.info("执行 mise dot apply…");
  if (!dotApply()) {
    die("mise dot apply 失败,见上方输出");
  }
  log.info("应用完成");
  refreshStatusFile();
}

function executeDoctor() {
  const checks = [];
  for (const tool of ["git", "node", "mise", "gh", "flock"]) {
    const bin = resolveTool(tool);
    checks.push({ name: tool, ok: bin !== void 0, detail: bin ?? "未在可信目录中找到" });
  }
  const state = collectRepoState();
  checks.push({
    name: "config repo",
    ok: state.initialized,
    detail: state.initialized ? paths.configRepo : "仓库不存在"
  });
  if (state.initialized) {
    checks.push({ name: "origin", ok: state.remote !== "", detail: state.remote || "未配置 origin" });
    checks.push({
      name: "upstream",
      ok: (gitOut(paths.configRepo, ["rev-parse", "--abbrev-ref", "--symbolic-full-name", "@{upstream}"]) ?? "") !== "",
      detail: state.branch || "(detached)"
    });
    const miseStatus = dotStatus();
    checks.push({
      name: "mise trust",
      ok: miseStatus.ok,
      detail: miseStatus.ok ? "配置受信任" : miseStatus.stderr.trim() || "mise dot status 失败,试试 mise trust"
    });
  }
  let failed = 0;
  for (const check of checks) {
    const mark = check.ok ? "✓" : "✗";
    process.stdout.write(`${mark} ${check.name.padEnd(12)} ${check.detail}
`);
    if (!check.ok) {
      failed += 1;
    }
  }
  return failed === 0 ? 0 : 1;
}

function notify(message) {
  if (process.env["OMARSYNC_NOTIFY"] !== "1") {
    return;
  }
  const bin = resolveTool("notify-send");
  if (bin) {
    run(bin, ["Omarsync", message]);
  }
}
async function executePush(yes, message) {
  const repo = paths.configRepo;
  const initial = collectRepoState();
  if (!initial.initialized) {
    die(`配置仓库不存在或不是 git 仓库: ${repo}`);
  }
  const adopted = adoptChanged();
  if (!adopted.ok && /\S/.test(adopted.stderr)) {
    log.warn(`mise dot add --changed 未完全成功(继续执行): ${adopted.stderr.trim()}`);
  }
  if (!git(repo, ["add", "-A"])) {
    die("git add 失败");
  }
  const staged = gitOut(repo, ["diff", "--cached", "--name-only"]) ?? "";
  if (staged === "") {
    log.info("没有需要推送的改动");
    refreshStatusFile();
    return;
  }
  const files = staged.split("\n").filter((line) => line !== "");
  log.info(`本次发布 ${files.length} 个文件:`);
  if (!git(repo, ["diff", "--cached", "--stat"])) {
    die("无法生成 diff 统计");
  }
  if (!yes) {
    const ok = await confirm("确认提交并推送到远程?");
    if (!ok) {
      die("已取消,改动仍在暂存区");
    }
  }
  const commitMessage = message && message !== "" ? message : `sync: ${hostnameSafe()} ${iso8601().slice(0, 16).replace("T", " ")}`;
  if (!git(repo, ["commit", "-m", commitMessage])) {
    die("git commit 失败");
  }
  const upstream = gitOut(repo, ["rev-parse", "--abbrev-ref", "--symbolic-full-name", "@{upstream}"]);
  const pushed = upstream ? git(repo, ["push"]) : git(repo, ["push", "-u", "origin", initial.branch || "main"]);
  if (!pushed) {
    const detail = gitCapture(repo, ["push"]).stderr.trim();
    die(`git push 失败${detail === "" ? "" : `: ${detail}`}`);
  }
  log.info("推送完成");
  notify(`${files.length} 个文件已推送`);
  refreshStatusFile();
}

const cli = a$2("omarsync", {
  packageName: "omarsync",
  packageVersion: "3.0.0"
});
cli.addCommand({
  name: "status",
  description: "聚合 git 与 mise dot 状态,落盘 status.json 供面板读取",
  options: [
    {
      name: "json",
      type: Boolean,
      description: "以 JSON 输出(供状态栏面板读取)"
    }
  ],
  execute: ({ options }) => {
    executeStatus(options["json"] === true);
  }
});
cli.addCommand({
  name: "push",
  description: "回写 copy 改动,暂存并在终端审阅 diff,确认后提交推送",
  options: [
    {
      name: "yes",
      type: Boolean,
      description: "跳过确认(供面板自动推送使用)"
    },
    {
      name: "notify",
      type: Boolean,
      description: "推送完成后弹出桌面通知"
    },
    {
      name: "message",
      type: String,
      description: "自定义提交信息(默认按主机名和时间生成)"
    }
  ],
  execute: async ({ options }) => {
    if (options["notify"] === true) {
      process.env["OMARSYNC_NOTIFY"] = "1";
    }
    await executePush(options["yes"] === true, typeof options["message"] === "string" ? options["message"] : void 0);
  }
});
cli.addCommand({
  name: "apply",
  description: "快进拉取远程改动并执行 mise dot apply",
  options: [
    {
      // 兼容旧面板调用;新架构不钉 sha,值被忽略
      name: "commit",
      type: String,
      description: "已废弃,仅为兼容旧面板保留"
    },
    {
      // 兼容旧面板的自动化调用
      name: "yes",
      type: Boolean,
      description: "已废弃,仅为兼容旧面板保留"
    }
  ],
  execute: ({ options }) => {
    executeApply({
      commit: typeof options["commit"] === "string" ? options["commit"] : void 0,
      yes: options["yes"] === true
    });
  }
});
cli.addCommand({
  name: "doctor",
  description: "体检:git/mise/node/gh/flock 与配置仓库、信任状态",
  execute: () => {
    process.exitCode = executeDoctor();
  }
});
await cli.run();
