#!/usr/bin/env node
import { createRequire } from 'node:module';
import { a as a$3, u as u$1, b as b$3, h as h$2, i as i$1, c as c$1, g as g$1, l as l$1, d as d$2, o, A as A$3, r as r$1, e as c$2, f as g$2, j as b$4, S as S$3, R as R$5, z as z$3, k as h$3, y, m as m$2, B as B$5, F as F$3, n as a$4, s as s$2, E as E$4, x as x$3, p as l$2, q as d$3, L as L$3, O as O$2, H as H$3, K as K$5, T as T$2, G as G$4, t as f$1, M as M$3, w as w$2, v as k$3, C as j$3, D as t$1 } from './packem_shared/index.server-iAND-ZxX.js';
import { spawnSync } from 'node:child_process';
import { statSync, accessSync, constants, existsSync, lstatSync, mkdtempSync, rmSync, realpathSync, readFileSync, mkdirSync, appendFileSync, copyFileSync, chmodSync, readdirSync, unlinkSync, writeFileSync, symlinkSync } from 'node:fs';
import { tmpdir, homedir } from 'node:os';
import { join, dirname } from 'node:path';
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
function capture(binary, args, env = []) {
  const base = {
    HOME: process.env["HOME"] ?? "",
    PATH: TRUSTED_DIRS.join(":"),
    LANG: "C.UTF-8"
  };
  for (const entry of env) {
    const eq = entry.indexOf("=");
    if (eq > 0) {
      base[entry.slice(0, eq)] = entry.slice(eq + 1);
    }
  }
  const result = spawnSync(binary, [...args], {
    env: base,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024
  });
  return {
    code: result.status ?? 1,
    stdout: result.stdout ?? "",
    stderr: result.stderr ?? ""
  };
}
function run(binary, args) {
  const result = spawnSync(binary, [...args], { stdio: "inherit" });
  return result.status === 0;
}
function isFile(path) {
  try {
    return statSync(path).isFile();
  } catch {
    return false;
  }
}
function isDir(path) {
  try {
    return statSync(path).isDirectory();
  } catch {
    return false;
  }
}
function exists(path) {
  return existsSync(path);
}
function isLink(path) {
  try {
    return lstatSync(path).isSymbolicLink();
  } catch {
    return false;
  }
}
function realpath$1(path) {
  try {
    return realpathSync(path);
  } catch {
    return void 0;
  }
}
function mktempDir() {
  return mkdtempSync(join(tmpdir(), "omarsync-"));
}
function rmrf(path) {
  try {
    rmSync(path, { force: true, recursive: true });
  } catch {
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
const Ud = [161, 161, 164, 164, 167, 168, 170, 170, 173, 174, 176, 180, 182, 186, 188, 191, 198, 198, 208, 208, 215, 216, 222, 225, 230, 230, 232, 234, 236, 237, 240, 240, 242, 243, 247, 250, 252, 252, 254, 254, 257, 257, 273, 273, 275, 275, 283, 283, 294, 295, 299, 299, 305, 307, 312, 312, 319, 322, 324, 324, 328, 331, 333, 333, 338, 339, 358, 359, 363, 363, 462, 462, 464, 464, 466, 466, 468, 468, 470, 470, 472, 472, 474, 474, 476, 476, 593, 593, 609, 609, 708, 708, 711, 711, 713, 715, 717, 717, 720, 720, 728, 731, 733, 733, 735, 735, 768, 879, 913, 929, 931, 937, 945, 961, 963, 969, 1025, 1025, 1040, 1103, 1105, 1105, 8208, 8208, 8211, 8214, 8216, 8217, 8220, 8221, 8224, 8226, 8228, 8231, 8240, 8240, 8242, 8243, 8245, 8245, 8251, 8251, 8254, 8254, 8308, 8308, 8319, 8319, 8321, 8324, 8364, 8364, 8451, 8451, 8453, 8453, 8457, 8457, 8467, 8467, 8470, 8470, 8481, 8482, 8486, 8486, 8491, 8491, 8531, 8532, 8539, 8542, 8544, 8555, 8560, 8569, 8585, 8585, 8592, 8601, 8632, 8633, 8658, 8658, 8660, 8660, 8679, 8679, 8704, 8704, 8706, 8707, 8711, 8712, 8715, 8715, 8719, 8719, 8721, 8721, 8725, 8725, 8730, 8730, 8733, 8736, 8739, 8739, 8741, 8741, 8743, 8748, 8750, 8750, 8756, 8759, 8764, 8765, 8776, 8776, 8780, 8780, 8786, 8786, 8800, 8801, 8804, 8807, 8810, 8811, 8814, 8815, 8834, 8835, 8838, 8839, 8853, 8853, 8857, 8857, 8869, 8869, 8895, 8895, 8978, 8978, 9312, 9449, 9451, 9547, 9552, 9587, 9600, 9615, 9618, 9621, 9632, 9633, 9635, 9641, 9650, 9651, 9654, 9655, 9660, 9661, 9664, 9665, 9670, 9672, 9675, 9675, 9678, 9681, 9698, 9701, 9711, 9711, 9733, 9734, 9737, 9737, 9742, 9743, 9756, 9756, 9758, 9758, 9792, 9792, 9794, 9794, 9824, 9825, 9827, 9829, 9831, 9834, 9836, 9837, 9839, 9839, 9886, 9887, 9919, 9919, 9926, 9933, 9935, 9939, 9941, 9953, 9955, 9955, 9960, 9961, 9963, 9969, 9972, 9972, 9974, 9977, 9979, 9980, 9982, 9983, 10045, 10045, 10102, 10111, 11094, 11097, 12872, 12879, 57344, 63743, 65024, 65039, 65533, 65533, 127232, 127242, 127248, 127277, 127280, 127337, 127344, 127373, 127375, 127376, 127387, 127404, 917760, 917999, 983040, 1048573, 1048576, 1114109];
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
const ru = [4352, 4447, 8986, 8987, 9001, 9002, 9193, 9196, 9200, 9200, 9203, 9203, 9725, 9726, 9748, 9749, 9776, 9783, 9800, 9811, 9855, 9855, 9866, 9871, 9875, 9875, 9889, 9889, 9898, 9899, 9917, 9918, 9924, 9925, 9934, 9934, 9940, 9940, 9962, 9962, 9970, 9971, 9973, 9973, 9978, 9978, 9981, 9981, 9989, 9989, 9994, 9995, 10024, 10024, 10060, 10060, 10062, 10062, 10067, 10069, 10071, 10071, 10133, 10135, 10160, 10160, 10175, 10175, 11035, 11036, 11088, 11088, 11093, 11093, 11904, 11929, 11931, 12019, 12032, 12245, 12272, 12287, 12289, 12350, 12353, 12438, 12441, 12543, 12549, 12591, 12593, 12686, 12688, 12773, 12783, 12830, 12832, 12871, 12880, 42124, 42128, 42182, 43360, 43388, 44032, 55203, 63744, 64255, 65040, 65049, 65072, 65106, 65108, 65126, 65128, 65131, 94176, 94180, 94192, 94198, 94208, 101589, 101631, 101662, 101760, 101874, 110576, 110579, 110581, 110587, 110589, 110590, 110592, 110882, 110898, 110898, 110928, 110930, 110933, 110933, 110948, 110951, 110960, 111355, 119552, 119638, 119648, 119670, 126980, 126980, 127183, 127183, 127374, 127374, 127377, 127386, 127488, 127490, 127504, 127547, 127552, 127560, 127568, 127569, 127584, 127589, 127744, 127776, 127789, 127797, 127799, 127868, 127870, 127891, 127904, 127946, 127951, 127955, 127968, 127984, 127988, 127988, 127992, 128062, 128064, 128064, 128066, 128252, 128255, 128317, 128331, 128334, 128336, 128359, 128378, 128378, 128405, 128406, 128420, 128420, 128507, 128591, 128640, 128709, 128716, 128716, 128720, 128722, 128725, 128728, 128732, 128735, 128747, 128748, 128756, 128764, 128992, 129003, 129008, 129008, 129292, 129338, 129340, 129349, 129351, 129535, 129648, 129660, 129664, 129674, 129678, 129734, 129736, 129736, 129741, 129756, 129759, 129770, 129775, 129784, 131072, 196605, 196608, 262141];
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
function gh$1(i, o) {
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
    return j = L.length, t ? L = gh$1(L, t) : c && j > 1 && L.reverse(), r && s < j && (L.length = s), this && this !== P$3 && this instanceof p && (Yi = b || mo(Yi)), Yi.apply(z, L);
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
var Ql = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" };
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
const QY = [void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "'", ",", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "?", void 0, void 0, void 0, void 0, void 0, void 0, void 0, "A", ";", "E", "I", "I", void 0, "O", void 0, "U", "O", "I", "A", "V", "G", "D", "E", "Z", "I", "Th", "I", "K", "L", "M", "N", "KS", "O", "P", "R", void 0, "S", "T", "Y", "F", "H", "Ps", "O", "I", "Y", "a", "e", "i", "i", "y", "a", "v", "g", "d", "e", "z", "i", "th", "i", "k", "l", "m", "n", "x", "o", "p", "r", "s", "s", "t", "y", "f", "h", "ps", "o", "i", "y", "o", "y", "o", void 0, "b", "th", "U", "U", "U", "ph", "p", "&", void 0, void 0, "St", "st", "W", "w", "Q", "q", "Sp", "sp", "Sh", "sh", "F", "f", "Kh", "kh", "H", "h", "G", "g", "CH", "ch", "Ti", "ti", "k", "r", "c", "j", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const MY = Object.freeze(QY);
const GY = ["Jo", "Yo", "Dj", "Gj", "Ye", "Dz", "I", "Yi", "J", "Lj", "Nj", "Tsh", "Kj", "I", "U", "Dzh", "A", "B", "V", "G", "D", "E", "Zh", "Z", "I", "Y", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "F", "H", "C", "Ch", "Sh", "Shch", void 0, "Y", void 0, "E", "Yu", "Ya", "a", "b", "v", "g", "d", "e", "zh", "z", "i", "y", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "f", "h", "c", "ch", "sh", "shch", void 0, "y", void 0, "e", "yu", "ya", "je", "yo", "dj", "gj", "ie", "dz", "i", "yi", "j", "lj", "nj", "tsh", "kj", "i", "u", "dz", "O", "o", "E", "e", "Ie", "ie", "E", "e", "Ie", "ie", "O", "o", "Io", "io", "Ks", "ks", "Ps", "ps", "F", "f", "Y", "y", "Y", "y", "u", "u", "O", "o", "O", "o", "Ot", "ot", "Q", "q", "*1000*", void 0, void 0, void 0, void 0, void 0, "*100.000*", "*1.000.000*", void 0, void 0, '"', '"', "R'", "r'", "G", "g'", "G'", "g'", "G'", "g'", "Zh'", "zh'", "Z'", "z'", "K'", "k'", "K'", "k'", "K'", "k'", "K'", "k'", "N'", "n'", "Ng", "ng", "P'", "p'", "Kh", "kh", "S'", "s'", "T'", "t'", "U", "u", "U'", "u'", "Kh'", "kh'", "Tts", "tts", "Ch'", "ch'", "Ch'", "ch'", "H", "h", "Ch", "ch", "Ch'", "ch'", "`", "Zh", "zh", "K'", "k'", void 0, void 0, "N'", "n'", void 0, void 0, "Ch", "ch", void 0, void 0, void 0, "a", "a", "A", "a", "Ae", "ae", "Ie", "ie", "@", "@", "@", "@", "Zh", "zh", "Z", "z", "Dz", "dz", "I", "i", "I", "i", "O", "o", "O", "o", "O", "o", "E", "e", "U", "u", "U", "u", "U", "u", "Ch", "ch", void 0, void 0, "Y", "y", void 0, void 0, void 0, void 0, void 0, void 0];
const NY = Object.freeze(GY);
const xY = [void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "A", "B", "G", "D", "Ye", "Z", "E", "E", "T`", "Zh", "I", "L", "Kh", "Ts", "K", "H", "Dz", "Gh", "Ch", "M", "Y", "N", "Sh", "O", "Ch`", "P", "J", "Rh", "S", "V", "T", "R", "Ts`", "W", "P`", "K`", "O", "F", void 0, void 0, "<", "'", "/", "!", ",", "?", ".", void 0, "a", "b", "g", "d", "e", "z", "e", "e", "t`", "zh", "i", "l", "kh", "ts", "k", "h", "dz", "gh", "ch", "m", "y", "n", "sh", "o", "ch`", "p", "j", "rh", "s", "v", "t", "r", "ts`", "w", "p`", "k`", "o", "f", "yev", void 0, ".", "-", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "@", "e", "a", "o", "i", "e", "e", "a", "a", "o", void 0, "u", "'", void 0, void 0, void 0, void 0, void 0, void 0, ":", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "b", "g", "d", "h", "v", "z", "kh", "t", "y", "k", "k", "l", "m", "m", "n", "n", "s", "`", "p", "p", "ts", "ts", "q", "r", "sh", "t", void 0, void 0, void 0, void 0, void 0, "V", "oy", "i", "'", '"', void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const WY = Object.freeze(xY);
const PY = [void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, ",", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, ";", void 0, void 0, void 0, "?", void 0, void 0, "a", "'", "w'", void 0, "y'", void 0, "b", "@", "t", "th", "j", "H", "kh", "d", "dh", "r", "z", "s", "sh", "S", "D", "T", "Z", "aa", "G", void 0, void 0, void 0, void 0, void 0, void 0, "f", "q", "k", "l", "m", "n", "h", "w", "~", "y", "an", "un", "in", "a", "u", "i", "W", void 0, void 0, "'", "'", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "%", ".", ",", "*", void 0, void 0, void 0, "'", "'", "'", void 0, "'", "'w", "'u", "'y", "t", "tth", "b", "t", "T", "p", "th", "bh", "'h", "H", "ny", "dy", "c", "ch", "cch", "d", "D", "D", "Dt", "dh", "ddh", "d", "D", "D", "rr", "R", "r", "R", "R", "R", "R", "j", "R", "S", "S", "S", "S", "S", "T", "GH", "F", "F", "F", "v", "f", "ph", "Q", "Q", "kh", "k", "g", "K", "ng", "K", "g", "G", "N", "G", "G", "G", "L", "L", "L", "L", "N", "N", "N", "N", "N", "h", "Ch", "hy", "h", "H", "@", "W", "oe", "oe", "u", "yu", "yu", "W", "v", "y", "Y", "Y", "W", void 0, void 0, "y", "y'", ".", "ae", void 0, void 0, void 0, void 0, void 0, void 0, void 0, "@", "#", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "^", void 0, void 0, void 0, void 0, void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Sh", "D", "Gh", "&", "+m", void 0];
const FY = Object.freeze(PY);
const KY = ["//", "/", ",", "!", "!", "-", ",", ",", ";", "?", "~", "{", "}", "*", void 0, void 0, "'", void 0, "b", "g", "g", "d", "d", "h", "w", "z", "H", "t", "t", "y", "yh", "k", "l", "m", "n", "s", "s", "`", "p", "p", "S", "q", "r", "sh", "t", void 0, void 0, void 0, "a", "a", "a", "A", "A", "A", "e", "e", "e", "E", "i", "i", "u", "u", "u", "o", void 0, "`", "'", void 0, void 0, "X", "Q", "@", "@", "|", "+", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "h", "sh", "n", "r", "b", "L", "k", "'", "v", "m", "f", "dh", "th", "l", "g", "ny", "s", "d", "z", "t", "y", "p", "j", "ch", "tt", "hh", "kh", "th", "z", "sh", "s", "d", "t", "z", "`", "gh", "q", "w", "a", "aa", "i", "ee", "u", "oo", "e", "ey", "o", "oa", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const RY = Object.freeze(KY);
const AY = [void 0, "N", "N", "H", void 0, "a", "aa", "i", "ii", "u", "uu", "R", "L", "eN", "e", "e", "ai", "oN", "o", "o", "au", "k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", "nnn", "p", "ph", "b", "bh", "m", "y", "r", "rr", "l", "l", "lll", "v", "sh", "ss", "s", "h", void 0, void 0, "'", "'", "aa", "i", "ii", "u", "uu", "R", "RR", "eN", "e", "e", "ai", "oN", "o", "o", "au", void 0, void 0, void 0, "AUM", "'", "'", "`", "'", void 0, void 0, void 0, "q", "khh", "ghh", "z", "dddh", "rh", "f", "yy", "RR", "LL", "L", "LL", " / ", " // ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "N", "N", "H", void 0, "a", "aa", "i", "ii", "u", "uu", "R", "RR", void 0, void 0, "e", "ai", void 0, void 0, "o", "au", "k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", void 0, "p", "ph", "b", "bh", "m", "y", "r", void 0, "l", void 0, void 0, void 0, "sh", "ss", "s", "h", void 0, void 0, "'", void 0, "aa", "i", "ii", "u", "uu", "R", "RR", void 0, void 0, "e", "ai", void 0, void 0, "o", "au", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "+", void 0, void 0, void 0, void 0, "rr", "rh", void 0, "yy", "RR", "LL", "L", "LL", void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "r'", "r`", "Rs", "Rs", "1/", "2/", "3/", "4/", " 1 - 1/", "/16", void 0, void 0, void 0, void 0, void 0, void 0];
const _Y = Object.freeze(AY);
const OY = [void 0, void 0, "N", void 0, void 0, "a", "aa", "i", "ii", "u", "uu", void 0, void 0, void 0, void 0, "ee", "ai", void 0, void 0, "oo", "au", "k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", void 0, "p", "ph", "b", "bb", "m", "y", "r", void 0, "l", "ll", void 0, "v", "sh", void 0, "s", "h", void 0, void 0, "'", void 0, "aa", "i", "ii", "u", "uu", void 0, void 0, void 0, void 0, "ee", "ai", void 0, void 0, "oo", "au", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "khh", "ghh", "z", "rr", void 0, "f", void 0, void 0, void 0, void 0, void 0, void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "N", "H", void 0, void 0, "G.E.O.", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "N", "N", "H", void 0, "a", "aa", "i", "ii", "u", "uu", "R", void 0, "eN", void 0, "e", "ai", "oN", void 0, "o", "au", "k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", void 0, "p", "ph", "b", "bh", "m", "ya", "r", void 0, "l", "ll", void 0, "v", "sh", "ss", "s", "h", void 0, void 0, "'", "'", "aa", "i", "ii", "u", "uu", "R", "RR", "eN", void 0, "e", "ai", "oN", void 0, "o", "au", void 0, void 0, void 0, "AUM", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "RR", void 0, void 0, void 0, void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const zY = Object.freeze(OY);
const EY = [void 0, "N", "N", "H", void 0, "a", "aa", "i", "ii", "u", "uu", "R", "L", void 0, void 0, "e", "ai", void 0, void 0, "o", "au", "k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", void 0, "p", "ph", "b", "bh", "m", "y", "r", void 0, "l", "ll", void 0, void 0, "sh", "ss", "s", "h", void 0, void 0, "'", "'", "aa", "i", "ii", "u", "uu", "R", void 0, void 0, void 0, "e", "ai", void 0, void 0, "o", "au", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "+", "+", void 0, void 0, void 0, void 0, "rr", "rh", void 0, "yy", "RR", "LL", void 0, void 0, void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "N", "H", void 0, "a", "aa", "i", "ii", "u", "uu", void 0, void 0, void 0, "e", "ee", "ai", void 0, "o", "oo", "au", "ka", void 0, void 0, void 0, "ng", "c", void 0, "j", void 0, "ny", "tt", void 0, void 0, void 0, "nn", "t", void 0, void 0, void 0, "n", "nn", "p", void 0, void 0, void 0, "m", "y", "r", "rr", "l", "ll", "lll", "v", void 0, "ss", "s", "h", void 0, void 0, void 0, void 0, "aa", "i", "ii", "u", "uu", void 0, void 0, void 0, "e", "ee", "ai", void 0, "o", "oo", "au", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "+", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+10+", "+100+", "+1000+", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const $Y = Object.freeze(EY);
const qY = [void 0, "N", "N", "H", void 0, "a", "aa", "i", "ii", "u", "uu", "R", "L", void 0, "e", "ee", "ai", void 0, "o", "oo", "au", "k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", void 0, "p", "ph", "b", "bh", "m", "y", "r", "rr", "l", "ll", void 0, "v", "sh", "ss", "s", "h", void 0, void 0, void 0, void 0, "aa", "i", "ii", "u", "uu", "R", "RR", void 0, "e", "ee", "ai", void 0, "o", "oo", "au", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "+", "+", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "RR", "LL", void 0, void 0, void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "N", "H", void 0, "a", "aa", "i", "ii", "u", "uu", "R", "L", void 0, "e", "ee", "ai", void 0, "o", "oo", "au", "k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", void 0, "p", "ph", "b", "bh", "m", "y", "r", "rr", "l", "ll", void 0, "v", "sh", "ss", "s", "h", void 0, void 0, void 0, void 0, "aa", "i", "ii", "u", "uu", "R", "RR", void 0, "e", "ee", "ai", void 0, "o", "oo", "au", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "+", "+", void 0, void 0, void 0, void 0, void 0, void 0, void 0, "lll", void 0, "RR", "LL", void 0, void 0, void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const IY = Object.freeze(qY);
const UY = [void 0, void 0, "N", "H", void 0, "a", "aa", "i", "ii", "u", "uu", "R", "L", void 0, "e", "ee", "ai", void 0, "o", "oo", "au", "k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", void 0, "p", "ph", "b", "bh", "m", "y", "r", "rr", "l", "ll", "lll", "v", "sh", "ss", "s", "h", void 0, void 0, void 0, void 0, "aa", "i", "ii", "u", "uu", "R", void 0, void 0, "e", "ee", "ai", void 0, "o", "oo", "au", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "+", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "RR", "LL", void 0, void 0, void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "N", "H", void 0, "a", "aa", "ae", "aae", "i", "ii", "u", "uu", "R", "RR", "L", "LL", "e", "ee", "ai", "o", "oo", "au", void 0, void 0, void 0, "k", "kh", "g", "gh", "ng", "nng", "c", "ch", "j", "jh", "ny", "jny", "nyj", "tt", "tth", "dd", "ddh", "nn", "nndd", "t", "th", "d", "dh", "n", void 0, "nd", "p", "ph", "b", "bh", "m", "mb", "y", "r", void 0, "l", void 0, void 0, "v", "sh", "ss", "s", "h", "ll", "f", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "aa", "ae", "aae", "i", "ii", "u", void 0, "uu", void 0, "R", "e", "ee", "ai", "o", "oo", "au", "L", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "RR", "LL", " . ", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const VY = Object.freeze(UY);
const ik = [void 0, "k", "kh", "kh", "kh", "kh", "kh", "ng", "cch", "ch", "ch", "ch", "ch", "y", "d", "t", "th", "th", "th", "n", "d", "t", "th", "th", "th", "n", "b", "p", "ph", "f", "ph", "f", "ph", void 0, void 0, "r", "R", "l", "L", "w", "s", "s", "s", void 0, "l", "`", "h", "~", "a", "a", "aa", "am", "i", "ia", "ue", "uue", "u", "uu", "'", void 0, void 0, void 0, void 0, "Bh.", void 0, "ae", "o", "mai", "ai", "ao", "+", void 0, void 0, void 0, void 0, void 0, void 0, "M", void 0, " * ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " // ", " /// ", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "k", "kh", void 0, "kh", void 0, void 0, "ng", "ch", void 0, "s", void 0, void 0, "ny", void 0, void 0, void 0, void 0, void 0, void 0, "d", "h", "th", "th", void 0, "n", "b", "p", "ph", "f", "ph", "f", void 0, "m", "y", "r", void 0, "l", void 0, "w", void 0, void 0, "s", "h", void 0, "`", void 0, "~", "a", void 0, "aa", "am", "i", "ii", "y", "yy", "u", "uu", void 0, "o", "l", "ny", void 0, void 0, "e", "ei", "o", "ay", "ai", void 0, "+", void 0, void 0, void 0, void 0, void 0, void 0, "M", void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", void 0, void 0, "hn", "hm", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const ok = Object.freeze(ik);
const ek = ["AUM", void 0, void 0, void 0, void 0, void 0, void 0, void 0, " // ", " * ", void 0, "-", " / ", " / ", " // ", " -/ ", " +/ ", " X/ ", " /XX/ ", " /X/ ", ",", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".5", "1.5", "2.5", "3.5", "4.5", "5.5", "6.5", "7.5", "8.5", "-.5", "+", "*", "^", "_", void 0, "~", void 0, "]", "[[", "]]", void 0, void 0, "k", "kh", "g", "gh", "ng", "c", "ch", "j", void 0, "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", "p", "ph", "b", "bh", "m", "ts", "tsh", "dz", "dzh", "w", "zh", "z", "'", "y", "r", "l", "sh", "ssh", "s", "h", "a", "kss", "r", void 0, void 0, void 0, void 0, void 0, void 0, "aa", "i", "ii", "u", "uu", "R", "RR", "L", "LL", "e", "ee", "o", "oo", "M", "H", "i", "ii", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "k", "kh", "g", "gh", "ng", "c", "ch", "j", void 0, "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", "p", "ph", "b", "bh", "m", "ts", "tsh", "dz", "dzh", "w", "zh", "z", "'", "y", "r", "l", "sh", "ss", "s", "h", "a", "kss", "w", "y", "r", void 0, "X", " :X: ", " /O/ ", " /o/ ", " \\o\\ ", " (O) ", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const nk = Object.freeze(ek);
const ak = ["k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "nny", "tt", "tth", "dd", "ddh", "nn", "tt", "th", "d", "dh", "n", "p", "ph", "b", "bh", "m", "y", "r", "l", "w", "s", "h", "ll", "a", void 0, "i", "ii", "u", "uu", "e", void 0, "o", "au", void 0, "aa", "i", "ii", "u", "uu", "e", "ai", void 0, void 0, void 0, "N", "'", ":", void 0, void 0, void 0, void 0, void 0, void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " / ", " // ", "n*", "r*", "l*", "e*", "sh", "ss", "R", "RR", "L", "LL", "R", "RR", "L", "LL", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "A", "B", "G", "D", "E", "V", "Z", "T`", "I", "K", "L", "M", "N", "O", "P", "Zh", "R", "S", "T", "U", "P`", "K`", "G'", "Q", "Sh", "Ch`", "C`", "Z'", "C", "Ch", "X", "J", "H", "E", "Y", "W", "Xh", "OE", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "a", "b", "g", "d", "e", "v", "z", "t", "i", "k", "l", "m", "n", "o", "p", "zh", "r", "s", "t", "u", "p`", "k`", "gh", "q", "sh", "ch`", "c`", "z'", "c", "ch", "x", "j", "h", "e", "y", "w", "xh", "oe", "f", void 0, void 0, void 0, void 0, " // ", void 0, void 0, void 0, void 0];
const uk = Object.freeze(ak);
const gk = ["g", "gg", "n", "d", "dd", "r", "m", "b", "bb", "s", "ss", void 0, "j", "jj", "c", "k", "t", "p", "h", "ng", "nn", "nd", "nb", "dg", "rn", "rr", "rh", "rN", "mb", "mN", "bg", "bn", void 0, "bs", "bsg", "bst", "bsb", "bss", "bsj", "bj", "bc", "bt", "bp", "bN", "bbN", "sg", "sn", "sd", "sr", "sm", "sb", "sbg", "sss", "s", "sj", "sc", "sk", "st", "sp", "sh", void 0, void 0, void 0, void 0, "Z", "g", "d", "m", "b", "s", "Z", void 0, "j", "c", "t", "p", "N", "j", void 0, void 0, void 0, void 0, "ck", "ch", void 0, void 0, "pb", "pN", "hh", "Q", void 0, void 0, void 0, void 0, void 0, void 0, void 0, "a", "ae", "ya", "yae", "eo", "e", "yeo", "ye", "o", "wa", "wae", "oe", "yo", "u", "weo", "we", "wi", "yu", "eu", "yi", "i", "a-o", "a-u", "ya-o", "ya-yo", "eo-o", "eo-u", "eo-eu", "yeo-o", "yeo-u", "o-eo", "o-e", "o-ye", "o-o", "o-u", "yo-ya", "yo-yae", "yo-yeo", "yo-o", "yo-i", "u-a", "u-ae", "u-eo-eu", "u-ye", "u-u", "yu-a", "yu-eo", "yu-e", "yu-yeo", "yu-ye", "yu-u", "yu-i", "eu-u", "eu-eu", "yi-u", "i-a", "i-ya", "i-o", "i-u", "i-eu", "i-U", "U", "U-eo", "U-u", "U-i", "UU", void 0, void 0, void 0, void 0, void 0, "g", "gg", "gs", "n", "nj", "nh", "d", "l", "lg", "lm", "lb", "ls", "lt", "lp", "lh", "m", "b", "bs", "s", "ss", "ng", "j", "c", "k", "t", "p", "h", "gl", "gsg", "ng", "nd", "ns", "nZ", "nt", "dg", "tl", "lgs", "ln", "ld", "lth", "ll", "lmg", "lms", "lbs", "lbh", "rNp", "lss", "lZ", "lk", "lQ", "mg", "ml", "mb", "ms", "mss", "mZ", "mc", "mh", "mN", "bl", "bp", "ph", "pN", "sg", "sd", "sl", "sb", "Z", "g", "ss", void 0, "kh", "N", "Ns", "NZ", "pb", "pN", "hn", "hl", "hm", "hb", "Q", void 0, void 0, void 0, void 0, void 0, void 0];
const dk = Object.freeze(gk);
const tk = ["ha", "hu", "hi", "haa", "hee", "he", "ho", void 0, "la", "lu", "li", "laa", "lee", "le", "lo", "lwa", "hha", "hhu", "hhi", "hhaa", "hhee", "hhe", "hho", "hhwa", "ma", "mu", "mi", "maa", "mee", "me", "mo", "mwa", "sza", "szu", "szi", "szaa", "szee", "sze", "szo", "szwa", "ra", "ru", "ri", "raa", "ree", "re", "ro", "rwa", "sa", "su", "si", "saa", "see", "se", "so", "swa", "sha", "shu", "shi", "shaa", "shee", "she", "sho", "shwa", "qa", "qu", "qi", "qaa", "qee", "qe", "qo", void 0, "qwa", void 0, "qwi", "qwaa", "qwee", "qwe", void 0, void 0, "qha", "qhu", "qhi", "qhaa", "qhee", "qhe", "qho", void 0, "qhwa", void 0, "qhwi", "qhwaa", "qhwee", "qhwe", void 0, void 0, "ba", "bu", "bi", "baa", "bee", "be", "bo", "bwa", "va", "vu", "vi", "vaa", "vee", "ve", "vo", "vwa", "ta", "tu", "ti", "taa", "tee", "te", "to", "twa", "ca", "cu", "ci", "caa", "cee", "ce", "co", "cwa", "xa", "xu", "xi", "xaa", "xee", "xe", "xo", void 0, "xwa", void 0, "xwi", "xwaa", "xwee", "xwe", void 0, void 0, "na", "nu", "ni", "naa", "nee", "ne", "no", "nwa", "nya", "nyu", "nyi", "nyaa", "nyee", "nye", "nyo", "nywa", "'a", "'u", void 0, "'aa", "'ee", "'e", "'o", "'wa", "ka", "ku", "ki", "kaa", "kee", "ke", "ko", void 0, "kwa", void 0, "kwi", "kwaa", "kwee", "kwe", void 0, void 0, "kxa", "kxu", "kxi", "kxaa", "kxee", "kxe", "kxo", void 0, "kxwa", void 0, "kxwi", "kxwaa", "kxwee", "kxwe", void 0, void 0, "wa", "wu", "wi", "waa", "wee", "we", "wo", void 0, "`a", "`u", "`i", "`aa", "`ee", "`e", "`o", void 0, "za", "zu", "zi", "zaa", "zee", "ze", "zo", "zwa", "zha", "zhu", "zhi", "zhaa", "zhee", "zhe", "zho", "zhwa", "ya", "yu", "yi", "yaa", "yee", "ye", "yo", void 0, "da", "du", "di", "daa", "dee", "de", "do", "dwa", "dda", "ddu", "ddi", "ddaa", "ddee", "dde", "ddo", "ddwa"];
const sk = Object.freeze(tk);
const hk = ["ja", "ju", "ji", "jaa", "jee", "je", "jo", "jwa", "ga", "gu", "gi", "gaa", "gee", "ge", "go", void 0, "gwa", void 0, "gwi", "gwaa", "gwee", "gwe", void 0, void 0, "gga", "ggu", "ggi", "ggaa", "ggee", "gge", "ggo", void 0, "tha", "thu", "thi", "thaa", "thee", "the", "tho", "thwa", "cha", "chu", "chi", "chaa", "chee", "che", "cho", "chwa", "pha", "phu", "phi", "phaa", "phee", "phe", "pho", "phwa", "tsa", "tsu", "tsi", "tsaa", "tsee", "tse", "tso", "tswa", "tza", "tzu", "tzi", "tzaa", "tzee", "tze", "tzo", void 0, "fa", "fu", "fi", "faa", "fee", "fe", "fo", "fwa", "pa", "pu", "pi", "paa", "pee", "pe", "po", "pwa", "rya", "mya", "fya", void 0, void 0, void 0, void 0, void 0, void 0, " ", ".", ",", ";", ":", ":: ", "?", "//", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10+", "20+", "30+", "40+", "50+", "60+", "70+", "80+", "90+", "100+", "10,000+", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "a", "e", "i", "o", "u", "v", "ga", "ka", "ge", "gi", "go", "gu", "gv", "ha", "he", "hi", "ho", "hu", "hv", "la", "le", "li", "lo", "lu", "lv", "ma", "me", "mi", "mo", "mu", "na", "hna", "nah", "ne", "ni", "no", "nu", "nv", "qua", "que", "qui", "quo", "quu", "quv", "sa", "s", "se", "si", "so", "su", "sv", "da", "ta", "de", "te", "di", "ti", "do", "du", "dv", "dla", "tla", "tle", "tli", "tlo", "tlu", "tlv", "tsa", "tse", "tsi", "tso", "tsu", "tsv", "wa", "we", "wi", "wo", "wu", "wv", "ya", "ye", "yi", "yo", "yu", "yv", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const rk = Object.freeze(hk);
const lk = [void 0, "ai", "aai", "i", "ii", "u", "uu", "oo", "ee", "i", "a", "aa", "we", "we", "wi", "wi", "wii", "wii", "wo", "wo", "woo", "woo", "woo", "wa", "wa", "waa", "waa", "waa", "ai", "w", "'", "t", "k", "sh", "s", "n", "w", "n", void 0, "w", "c", "?", "l", "en", "in", "on", "an", "pai", "paai", "pi", "pii", "pu", "puu", "poo", "hee", "hi", "pa", "paa", "pwe", "pwe", "pwi", "pwi", "pwii", "pwii", "pwo", "pwo", "pwoo", "pwoo", "pwa", "pwa", "pwaa", "pwaa", "pwaa", "p", "p", "h", "tai", "taai", "ti", "tii", "tu", "tuu", "too", "dee", "di", "ta", "taa", "twe", "twe", "twi", "twi", "twii", "twii", "two", "two", "twoo", "twoo", "twa", "twa", "twaa", "twaa", "twaa", "t", "tte", "tti", "tto", "tta", "kai", "kaai", "ki", "kii", "ku", "kuu", "koo", "ka", "kaa", "kwe", "kwe", "kwi", "kwi", "kwii", "kwii", "kwo", "kwo", "kwoo", "kwoo", "kwa", "kwa", "kwaa", "kwaa", "kwaa", "k", "kw", "keh", "kih", "koh", "kah", "gai", "caai", "gi", "gii", "gu", "guu", "coo", "ga", "gaa", "cwe", "cwe", "cwi", "cwi", "cwii", "cwii", "cwo", "cwo", "cwoo", "cwoo", "cwa", "cwa", "cwaa", "cwaa", "cwaa", "g", "th", "mai", "maai", "mi", "mii", "mu", "muu", "moo", "ma", "maa", "mwe", "mwe", "mwi", "mwi", "mwii", "mwii", "mwo", "mwo", "mwoo", "mwoo", "mwa", "mwa", "mwaa", "mwaa", "mwaa", "m", "m", "mh", "m", "m", "nai", "naai", "ni", "nii", "nu", "nuu", "noo", "na", "naa", "nwe", "nwe", "nwa", "nwa", "nwaa", "nwaa", "nwaa", "n", "ng", "nh", "lai", "laai", "li", "lii", "lu", "luu", "loo", "la", "laa", "lwe", "lwe", "lwi", "lwi", "lwii", "lwii", "lwo", "lwo", "lwoo", "lwoo", "lwa", "lwa", "lwaa", "lwaa", "l", "l", "l", "sai", "saai", "si", "sii", "su", "suu", "soo", "sa", "saa", "swe", "swe", "swi", "swi", "swii", "swii", "swo", "swo", "swoo", "swoo"];
const vk = Object.freeze(lk);
const yk = ["swa", "swa", "swaa", "swaa", "swaa", "s", "s", "sw", "s", "sk", "skw", "sW", "spwa", "stwa", "skwa", "scwa", "she", "shi", "shii", "sho", "shoo", "sha", "shaa", "shwe", "shwe", "shwi", "shwi", "shwii", "shwii", "shwo", "shwo", "shwoo", "shwoo", "shwa", "shwa", "shwaa", "shwaa", "sh", "jai", "yaai", "ji", "jii", "ju", "juu", "yoo", "ja", "jaa", "ywe", "ywe", "ywi", "ywi", "ywii", "ywii", "ywo", "ywo", "ywoo", "ywoo", "ywa", "ywa", "ywaa", "ywaa", "ywaa", "j", "y", "y", "yi", "re", "rai", "le", "raai", "ri", "rii", "ru", "ruu", "lo", "ra", "raa", "la", "rwaa", "rwaa", "r", "r", "r", "vai", "faai", "vi", "vii", "vu", "vuu", "va", "vaa", "fwaa", "fwaa", "v", "the", "the", "thi", "thi", "thii", "thii", "tho", "thoo", "tha", "thaa", "thwaa", "thwaa", "th", "tthe", "tthi", "ttho", "ttha", "tth", "tye", "tyi", "tyo", "tya", "he", "hi", "hii", "ho", "hoo", "ha", "haa", "h", "h", "hk", "qaai", "qi", "qii", "qu", "quu", "qa", "qaa", "q", "tlhe", "tlhi", "tlho", "tlha", "re", "ri", "ro", "ra", "ngaai", "ngi", "ngii", "ngu", "nguu", "nga", "ngaa", "ng", "nng", "she", "shi", "sho", "sha", "the", "thi", "tho", "tha", "th", "lhi", "lhii", "lho", "lhoo", "lha", "lhaa", "lh", "the", "thi", "thii", "tho", "thoo", "tha", "thaa", "th", "b", "e", "i", "o", "a", "we", "wi", "wo", "wa", "ne", "ni", "no", "na", "ke", "ki", "ko", "ka", "he", "hi", "ho", "ha", "ghu", "gho", "ghe", "ghee", "ghi", "gha", "ru", "ro", "re", "ree", "ri", "ra", "wu", "wo", "we", "wee", "wi", "wa", "hwu", "hwo", "hwe", "hwee", "hwi", "hwa", "thu", "tho", "the", "thee", "thi", "tha", "ttu", "tto", "tte", "ttee", "tti", "tta", "pu", "po", "pe", "pee", "pi", "pa", "p", "gu", "go", "ge", "gee", "gi", "ga", "khu", "kho", "khe", "khee", "khi", "kha", "kku", "kko", "kke", "kkee", "kki"];
const ck = Object.freeze(yk);
const bk = ["kka", "kk", "nu", "no", "ne", "nee", "ni", "na", "mu", "mo", "me", "mee", "mi", "ma", "yu", "yo", "ye", "yee", "yi", "ya", "ju", "ju", "jo", "je", "jee", "ji", "ji", "ja", "jju", "jjo", "jje", "jjee", "jji", "jja", "lu", "lo", "le", "lee", "li", "la", "dlu", "dlo", "dle", "dlee", "dli", "dla", "lhu", "lho", "lhe", "lhee", "lhi", "lha", "tlhu", "tlho", "tlhe", "tlhee", "tlhi", "tlha", "tlu", "tlo", "tle", "tlee", "tli", "tla", "zu", "zo", "ze", "zee", "zi", "za", "z", "z", "dzu", "dzo", "dze", "dzee", "dzi", "dza", "su", "so", "se", "see", "si", "sa", "shu", "sho", "she", "shee", "shi", "sha", "sh", "tsu", "tso", "tse", "tsee", "tsi", "tsa", "chu", "cho", "che", "chee", "chi", "cha", "ttsu", "ttso", "ttse", "ttsee", "ttsi", "ttsa", "X", ".", "qai", "ngai", "nngi", "nngii", "nngo", "nngoo", "nnga", "nngaa", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, " ", "b", "l", "f", "s", "n", "h", "d", "t", "c", "q", "m", "g", "ng", "z", "r", "a", "o", "u", "e", "i", "ch", "th", "ph", "p", "x", "p", "<", ">", void 0, void 0, void 0, "f", "v", "u", "yr", "y", "w", "th", "th", "a", "o", "ac", "ae", "o", "o", "o", "oe", "on", "r", "k", "c", "k", "g", "ng", "g", "g", "w", "h", "h", "h", "h", "n", "n", "n", "i", "e", "j", "g", "ae", "a", "eo", "p", "z", "s", "s", "s", "c", "z", "t", "t", "d", "b", "b", "p", "p", "e", "m", "m", "m", "l", "l", "ng", "ng", "d", "o", "ear", "ior", "qu", "qu", "qu", "s", "yr", "yr", "yr", "q", "x", ".", ":", "+", "17", "18", "19", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const pk = Object.freeze(bk);
const wk = [void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "t", "tth", "d", "ddh", "nn", "t", "th", "d", "dh", "n", "p", "ph", "b", "bh", "m", "y", "r", "l", "v", "sh", "ss", "s", "h", "l", "q", "a", "aa", "i", "ii", "u", "uk", "uu", "uuv", "ry", "ryy", "ly", "lyy", "e", "ai", "oo", "oo", "au", "a", "aa", "aa", "i", "ii", "y", "yy", "u", "uu", "ua", "oe", "ya", "ie", "e", "ae", "ai", "oo", "au", "M", "H", "a`", void 0, void 0, void 0, "r", void 0, "!", void 0, void 0, void 0, void 0, void 0, ".", " // ", ":", "+", "++", " * ", " /// ", "KR", "'", void 0, void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const jk = Object.freeze(wk);
const mk = [" @ ", " ... ", ",", ". ", ": ", " // ", void 0, "-", ",", ". ", void 0, void 0, void 0, void 0, void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", void 0, void 0, void 0, void 0, void 0, void 0, "a", "e", "i", "o", "u", "O", "U", "ee", "n", "ng", "b", "p", "q", "g", "m", "l", "s", "sh", "t", "d", "ch", "j", "y", "r", "w", "f", "k", "kha", "ts", "z", "h", "zr", "lh", "zh", "ch", "-", "e", "i", "o", "u", "O", "U", "ng", "b", "p", "q", "g", "m", "t", "d", "ch", "j", "ts", "y", "w", "k", "g", "h", "jy", "ny", "dz", "e", "i", "iy", "U", "u", "ng", "k", "g", "h", "p", "sh", "t", "d", "j", "f", "g", "h", "ts", "z", "r", "ch", "zh", "i", "k", "r", "f", "zh", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "H", "X", "W", "M", " 3 ", " 333 ", "a", "i", "k", "ng", "c", "tt", "tth", "dd", "nn", "t", "d", "p", "ph", "ss", "zh", "z", "a", "t", "zh", "gh", "ng", "c", "jh", "tta", "ddh", "t", "dh", "ss", "cy", "zh", "z", "u", "y", "bh", "'", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const fk = Object.freeze(mk);
const Yk = ["A", "a", "B", "b", "B", "b", "B", "b", "C", "c", "D", "d", "D", "d", "D", "d", "D", "d", "D", "d", "E", "e", "E", "e", "E", "e", "E", "e", "E", "e", "F", "f", "G", "g", "H", "h", "H", "h", "H", "h", "H", "h", "H", "h", "I", "i", "I", "i", "K", "k", "K", "k", "K", "k", "L", "l", "L", "l", "L", "l", "L", "l", "M", "m", "M", "m", "M", "m", "N", "n", "N", "n", "N", "n", "N", "n", "O", "o", "O", "o", "O", "o", "O", "o", "P", "p", "P", "p", "R", "r", "R", "r", "R", "r", "R", "r", "S", "s", "S", "s", "S", "s", "S", "s", "S", "s", "T", "t", "T", "t", "T", "t", "T", "t", "U", "u", "U", "u", "U", "u", "U", "u", "U", "u", "V", "v", "V", "v", "W", "w", "W", "w", "W", "w", "W", "w", "W", "w", "X", "x", "X", "x", "Y", "y", "Z", "z", "Z", "z", "Z", "z", "h", "t", "w", "y", "a", "S", void 0, void 0, void 0, void 0, "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "E", "e", "E", "e", "E", "e", "E", "e", "E", "e", "E", "e", "E", "e", "E", "e", "I", "i", "I", "i", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "U", "u", "U", "u", "U", "u", "U", "u", "U", "u", "U", "u", "U", "u", "Y", "y", "Y", "y", "Y", "y", "Y", "y", void 0, void 0, void 0, void 0, void 0, void 0];
const kk = Object.freeze(Yk);
const Lk = ["a", "a", "a", "a", "a", "a", "a", "a", "A", "A", "A", "A", "A", "A", "A", "A", "e", "e", "e", "e", "e", "e", void 0, void 0, "E", "E", "E", "E", "E", "E", void 0, void 0, "e", "e", "e", "e", "e", "e", "e", "e", "E", "E", "E", "E", "E", "E", "E", "E", "i", "i", "i", "i", "i", "i", "i", "i", "I", "I", "I", "I", "I", "I", "I", "I", "o", "o", "o", "o", "o", "o", void 0, void 0, "O", "O", "O", "O", "O", "O", void 0, void 0, "u", "u", "u", "u", "u", "u", "u", "u", void 0, "U", void 0, "U", void 0, "U", void 0, "U", "o", "o", "o", "o", "o", "o", "o", "o", "O", "O", "O", "O", "O", "O", "O", "O", "a", "a", "e", "e", "e", "e", "i", "i", "o", "o", "u", "u", "o", "o", void 0, void 0, "a", "a", "a", "a", "a", "a", "a", "a", "A", "A", "A", "A", "A", "A", "A", "A", "e", "e", "e", "e", "e", "e", "e", "e", "E", "E", "E", "E", "E", "E", "E", "E", "o", "o", "o", "o", "o", "o", "o", "o", "O", "O", "O", "O", "O", "O", "O", "O", "a", "a", "a", "a", "a", void 0, "a", "a", "A", "A", "A", "A", "A", "'", "i", "'", "~", '"~', "e", "e", "e", void 0, "e", "e", "E", "E", "E", "E", "E", "'`", "''", "'~", "i", "i", "i", "i", void 0, void 0, "i", "i", "I", "I", "I", "I", void 0, "`'", "`'", "`~", "u", "u", "u", "u", "R", "R", "u", "u", "U", "U", "U", "U", "R", '"`', `"'`, "`", void 0, void 0, "o", "o", "o", void 0, "o", "o", "O", "O", "O", "O", "O", "'", "`", void 0];
const Zk = Object.freeze(Lk);
const Sk = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", void 0, void 0, void 0, void 0, "-", "-", "-", "-", "--", "--", "||", "_", "'", "'", ",", "'", '"', '"', ",,", '"', "+", "++", "*", "*>", ".", "..", "...", ".", `
`, `

`, void 0, void 0, void 0, void 0, void 0, " ", "%0", "%00", "'", "''", "'''", "`", "``", "```", "^", "<", ">", "*", "!!", "!?", "-", "_", "-", "^", "***", "--", "/", "-[", "]-", void 0, "?!", "!?", "7", "PP", "(]", "[)", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "0", void 0, void 0, void 0, "4", "5", "6", "7", "8", "9", "+", "-", "=", "(", ")", "n", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "=", "(", ")", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "ECU", "CL", "Cr", "FF", "L", "mil", "N", "Pts", "Rs", "W", "NS", "D", "EU", "K", "T", "Dr", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const Jk = Object.freeze(Sk);
const Ck = [void 0, void 0, "C", void 0, void 0, void 0, void 0, void 0, void 0, void 0, "g", "H", "H", "H", "h", void 0, "I", "I", "L", "l", "lb", "N", "no", "(p)", "P", "P", "Q", "R", "R", "R", void 0, void 0, "(sm)", "(tel)", "(tm)", void 0, "Z", void 0, void 0, "mho", "Z", void 0, void 0, void 0, "B", "C", "e", "e", void 0, "F", void 0, "M", "o", void 0, void 0, void 0, void 0, "i", "Q", "(fax)", "pi", void 0, void 0, "Pi", void 0, "G", "L", "L", "Y", "D", "d", "e", "i", "j", void 0, void 0, "per", void 0, void 0, void 0, void 0, void 0, void 0, " 1/3 ", " 2/3 ", " 1/5 ", " 2/5 ", " 3/5 ", " 4/5 ", " 1/6 ", " 5/6 ", " 1/8 ", " 3/8 ", " 5/8 ", " 7/8 ", " 1/", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "L", "C", "D", "M", "i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "l", "c", "d", "m", "(D", "D)", "((|))", ")", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "-", "|", "-", "|", "-", "|", "\\", "/", "\\", "/", "-", "-", "~", "~", "-", "|", "-", "|", "-", "-", "-", "|", "-", "|", "|", "-", "-", "-", "-", "-", "-", "|", "|", "|", "|", "|", "|", "|", "^", "V", "\\", "=", "V", "^", "-", "-", "|", "|", "-", "-", "|", "|", "=", "|", "=", "=", "|", "=", "|", "=", "=", "=", "=", "=", "=", "|", "=", "|", "=", "|", "\\", "/", "\\", "/", "=", "=", "~", "~", "|", "|", "-", "|", "-", "|", "-", "-", "-", "|", "-", "|", "|", "|", "|", "|", "|", "|", "-", "\\", "\\", "|", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const Xk = Object.freeze(Ck);
const Hk = [void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const Dk = Object.freeze(Hk);
const Tk = ["-", "-", "|", "|", "-", "-", "|", "|", "-", "-", "|", "|", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "-", "-", "|", "|", "-", "|", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "/", "\\", "X", "-", "|", "-", "|", "-", "|", "-", "|", "-", "|", "-", "|", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "-", "|", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "^", "^", "^", "^", ">", ">", ">", ">", ">", ">", "V", "V", "V", "V", "<", "<", "<", "<", "<", "<", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "#", "#", "#", "#", "#", "^", "^", "^", "O", "#", "#", "#", "#", "#", "#", "#", "#", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const Bk = Object.freeze(Tk);
const Qk = [void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const Mk = Object.freeze(Qk);
const Gk = [void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const Nk = Object.freeze(Gk);
const xk = [" ", "a", "1", "b", "'", "k", "2", "l", "@", "c", "i", "f", "/", "m", "s", "p", '"', "e", "3", "h", "9", "o", "6", "r", "^", "d", "j", "g", ">", "n", "t", "q", ",", "*", "5", "<", "-", "u", "8", "v", ".", "%", "[", "$", "+", "x", "!", "&", ";", ":", "4", "\\", "0", "z", "7", "(", "_", "?", "w", "]", "#", "y", ")", "=", "[d7]", "[d17]", "[d27]", "[d127]", "[d37]", "[d137]", "[d237]", "[d1237]", "[d47]", "[d147]", "[d247]", "[d1247]", "[d347]", "[d1347]", "[d2347]", "[d12347]", "[d57]", "[d157]", "[d257]", "[d1257]", "[d357]", "[d1357]", "[d2357]", "[d12357]", "[d457]", "[d1457]", "[d2457]", "[d12457]", "[d3457]", "[d13457]", "[d23457]", "[d123457]", "[d67]", "[d167]", "[d267]", "[d1267]", "[d367]", "[d1367]", "[d2367]", "[d12367]", "[d467]", "[d1467]", "[d2467]", "[d12467]", "[d3467]", "[d13467]", "[d23467]", "[d123467]", "[d567]", "[d1567]", "[d2567]", "[d12567]", "[d3567]", "[d13567]", "[d23567]", "[d123567]", "[d4567]", "[d14567]", "[d24567]", "[d124567]", "[d34567]", "[d134567]", "[d234567]", "[d1234567]", "[d8]", "[d18]", "[d28]", "[d128]", "[d38]", "[d138]", "[d238]", "[d1238]", "[d48]", "[d148]", "[d248]", "[d1248]", "[d348]", "[d1348]", "[d2348]", "[d12348]", "[d58]", "[d158]", "[d258]", "[d1258]", "[d358]", "[d1358]", "[d2358]", "[d12358]", "[d458]", "[d1458]", "[d2458]", "[d12458]", "[d3458]", "[d13458]", "[d23458]", "[d123458]", "[d68]", "[d168]", "[d268]", "[d1268]", "[d368]", "[d1368]", "[d2368]", "[d12368]", "[d468]", "[d1468]", "[d2468]", "[d12468]", "[d3468]", "[d13468]", "[d23468]", "[d123468]", "[d568]", "[d1568]", "[d2568]", "[d12568]", "[d3568]", "[d13568]", "[d23568]", "[d123568]", "[d4568]", "[d14568]", "[d24568]", "[d124568]", "[d34568]", "[d134568]", "[d234568]", "[d1234568]", "[d78]", "[d178]", "[d278]", "[d1278]", "[d378]", "[d1378]", "[d2378]", "[d12378]", "[d478]", "[d1478]", "[d2478]", "[d12478]", "[d3478]", "[d13478]", "[d23478]", "[d123478]", "[d578]", "[d1578]", "[d2578]", "[d12578]", "[d3578]", "[d13578]", "[d23578]", "[d123578]", "[d4578]", "[d14578]", "[d24578]", "[d124578]", "[d34578]", "[d134578]", "[d234578]", "[d1234578]", "[d678]", "[d1678]", "[d2678]", "[d12678]", "[d3678]", "[d13678]", "[d23678]", "[d123678]", "[d4678]", "[d14678]", "[d24678]", "[d124678]", "[d34678]", "[d134678]", "[d234678]", "[d1234678]", "[d5678]", "[d15678]", "[d25678]", "[d125678]", "[d35678]", "[d135678]", "[d235678]", "[d1235678]", "[d45678]", "[d145678]", "[d245678]", "[d1245678]", "[d345678]", "[d1345678]", "[d2345678]", "[d12345678]"];
const Wk = Object.freeze(xk);
const Pk = [" ", ",", ". ", '"', "[JIS]", '"', "/", "0", "<", "> ", "<<", ">> ", "[", "] ", "{", "} ", "[(", ")] ", "@", "X ", "[", "] ", "[[", "]] ", "((", ")) ", "[[", "]] ", "~ ", "``", "''", ",,", "@", "1", "2", "3", "4", "5", "6", "7", "8", "9", void 0, void 0, void 0, void 0, void 0, void 0, "~", "+", "+", "+", "+", void 0, "@", " // ", "+10+", "+20+", "+30+", void 0, void 0, void 0, void 0, void 0, void 0, "a", "a", "i", "i", "u", "u", "e", "e", "o", "o", "ka", "ga", "ki", "gi", "ku", "gu", "ke", "ge", "ko", "go", "sa", "za", "si", "zi", "su", "zu", "se", "ze", "so", "zo", "ta", "da", "ti", "di", "tu", "tu", "du", "te", "de", "to", "do", "na", "ni", "nu", "ne", "no", "ha", "ba", "pa", "hi", "bi", "pi", "hu", "bu", "pu", "he", "be", "pe", "ho", "bo", "po", "ma", "mi", "mu", "me", "mo", "ya", "ya", "yu", "yu", "yo", "yo", "ra", "ri", "ru", "re", "ro", "wa", "wa", "wi", "we", "wo", "n", "vu", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, '"', '"', void 0, void 0, "a", "a", "i", "i", "u", "u", "e", "e", "o", "o", "ka", "ga", "ki", "gi", "ku", "gu", "ke", "ge", "ko", "go", "sa", "za", "si", "zi", "su", "zu", "se", "ze", "so", "zo", "ta", "da", "ti", "di", "tu", "tu", "du", "te", "de", "to", "do", "na", "ni", "nu", "ne", "no", "ha", "ba", "pa", "hi", "bi", "pi", "hu", "bu", "pu", "he", "be", "pe", "ho", "bo", "po", "ma", "mi", "mu", "me", "mo", "ya", "ya", "yu", "yu", "yo", "yo", "ra", "ri", "ru", "re", "ro", "wa", "wa", "wi", "we", "wo", "n", "vu", "ka", "ke", "va", "vi", "ve", "vo", void 0, void 0, '"', '"', void 0];
const Fk = Object.freeze(Pk);
const Kk = [void 0, void 0, void 0, void 0, void 0, "B", "P", "M", "F", "D", "T", "N", "L", "G", "K", "H", "J", "Q", "X", "ZH", "CH", "SH", "R", "Z", "C", "S", "A", "O", "E", "EH", "AI", "EI", "AU", "OU", "AN", "EN", "ANG", "ENG", "ER", "I", "U", "IU", "V", "NG", "GN", void 0, void 0, void 0, void 0, "g", "gg", "gs", "n", "nj", "nh", "d", "dd", "r", "lg", "lm", "lb", "ls", "lt", "lp", "rh", "m", "b", "bb", "bs", "s", "ss", void 0, "j", "jj", "c", "k", "t", "p", "h", "a", "ae", "ya", "yae", "eo", "e", "yeo", "ye", "o", "wa", "wae", "oe", "yo", "u", "weo", "we", "wi", "yu", "eu", "yi", "i", void 0, "nn", "nd", "ns", "nZ", "lgs", "ld", "lbs", "lZ", "lQ", "mb", "ms", "mZ", "mN", "bg", void 0, "bsg", "bst", "bj", "bt", "bN", "bbN", "sg", "sn", "sd", "sb", "sj", "Z", void 0, "N", "Ns", "NZ", "pN", "hh", "Q", "yo-ya", "yo-yae", "yo-i", "yu-yeo", "yu-ye", "yu-i", "U", "U-i", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "BU", "ZI", "JI", "GU", "EE", "ENN", "OO", "ONN", "IR", "ANN", "INN", "UNN", "IM", "NGG", "AINN", "AUNN", "AM", "OM", "ONG", "INNN", "P", "T", "K", "H", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const Rk = Object.freeze(Kk);
const Ak = ["(g)", "(n)", "(d)", "(r)", "(m)", "(b)", "(s)", "()", "(j)", "(c)", "(k)", "(t)", "(p)", "(h)", "(ga)", "(na)", "(da)", "(ra)", "(ma)", "(ba)", "(sa)", "(a)", "(ja)", "(ca)", "(ka)", "(ta)", "(pa)", "(ha)", "(ju)", void 0, void 0, void 0, "(1) ", "(2) ", "(3) ", "(4) ", "(5) ", "(6) ", "(7) ", "(8) ", "(9) ", "(10) ", "(Yue) ", "(Huo) ", "(Shui) ", "(Mu) ", "(Jin) ", "(Tu) ", "(Ri) ", "(Zhu) ", "(You) ", "(She) ", "(Ming) ", "(Te) ", "(Cai) ", "(Zhu) ", "(Lao) ", "(Dai) ", "(Hu) ", "(Xue) ", "(Jian) ", "(Qi) ", "(Zi) ", "(Xie) ", "(Ji) ", "(Xiu) ", "<<", ">>", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "(g)", "(n)", "(d)", "(r)", "(m)", "(b)", "(s)", "()", "(j)", "(c)", "(k)", "(t)", "(p)", "(h)", "(ga)", "(na)", "(da)", "(ra)", "(ma)", "(ba)", "(sa)", "(a)", "(ja)", "(ca)", "(ka)", "(ta)", "(pa)", "(ha)", void 0, void 0, void 0, "KIS ", "(1) ", "(2) ", "(3) ", "(4) ", "(5) ", "(6) ", "(7) ", "(8) ", "(9) ", "(10) ", "(Yue) ", "(Huo) ", "(Shui) ", "(Mu) ", "(Jin) ", "(Tu) ", "(Ri) ", "(Zhu) ", "(You) ", "(She) ", "(Ming) ", "(Te) ", "(Cai) ", "(Zhu) ", "(Lao) ", "(Mi) ", "(Nan) ", "(Nu) ", "(Shi) ", "(You) ", "(Yin) ", "(Zhu) ", "(Xiang) ", "(Xiu) ", "(Xie) ", "(Zheng) ", "(Shang) ", "(Zhong) ", "(Xia) ", "(Zuo) ", "(You) ", "(Yi) ", "(Zong) ", "(Xue) ", "(Jian) ", "(Qi) ", "(Zi) ", "(Xie) ", "(Ye) ", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "1M", "2M", "3M", "4M", "5M", "6M", "7M", "8M", "9M", "10M", "11M", "12M", void 0, void 0, void 0, void 0, "a", "i", "u", "u", "o", "ka", "ki", "ku", "ke", "ko", "sa", "si", "su", "se", "so", "ta", "ti", "tu", "te", "to", "na", "ni", "nu", "ne", "no", "ha", "hi", "hu", "he", "ho", "ma", "mi", "mu", "me", "mo", "ya", "yu", "yo", "ra", "ri", "ru", "re", "ro", "wa", "wi", "we", "wo", void 0];
const _k = Object.freeze(Ak);
const Ok = ["apartment", "alpha", "ampere", "are", "inning", "inch", "won", "escudo", "acre", "ounce", "ohm", "kai-ri", "carat", "calorie", "gallon", "gamma", "giga", "guinea", "curie", "guilder", "kilo", "kilogram", "kilometer", "kilowatt", "gram", "gram ton", "cruzeiro", "krone", "case", "koruna", "co-op", "cycle", "centime", "shilling", "centi", "cent", "dozen", "desi", "dollar", "ton", "nano", "knot", "heights", "percent", "parts", "barrel", "piaster", "picul", "pico", "building", "farad", "feet", "bushel", "franc", "hectare", "peso", "pfennig", "hertz", "pence", "page", "beta", "point", "volt", "hon", "pound", "hall", "horn", "micro", "mile", "mach", "mark", "mansion", "micron", "milli", "millibar", "mega", "megaton", "meter", "yard", "yard", "yuan", "liter", "lira", "rupee", "ruble", "rem", "roentgen", "watt", "0h", "1h", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h", "19h", "20h", "21h", "22h", "23h", "24h", "HPA", "da", "AU", "bar", "oV", "pc", void 0, void 0, void 0, void 0, "Heisei", "Syouwa", "Taisyou", "Meiji", "Inc.", "pA", "nA", "microamp", "mA", "kA", "kB", "MB", "GB", "cal", "kcal", "pF", "nF", "microFarad", "microgram", "mg", "kg", "Hz", "kHz", "MHz", "GHz", "THz", "microliter", "ml", "dl", "kl", "fm", "nm", "micrometer", "mm", "cm", "km", "mm^2", "cm^2", "m^2", "km^2", "mm^4", "cm^3", "m^3", "km^3", "m/s", "m/s^2", "Pa", "kPa", "MPa", "GPa", "rad", "rad/s", "rad/s^2", "ps", "ns", "microsecond", "ms", "pV", "nV", "microvolt", "mV", "kV", "MV", "pW", "nW", "microwatt", "mW", "kW", "MW", "kOhm", "MOhm", "a.m.", "Bq", "cc", "cd", "C/kg", "Co.", "dB", "Gy", "ha", "HP", "in", "K.K.", "KM", "kt", "lm", "ln", "log", "lx", "mb", "mil", "mol", "pH", "p.m.", "PPM", "PR", "sr", "Sv", "Wb", void 0, void 0, "1d", "2d", "3d", "4d", "5d", "6d", "7d", "8d", "9d", "10d", "11d", "12d", "13d", "14d", "15d", "16d", "17d", "18d", "19d", "20d", "21d", "22d", "23d", "24d", "25d", "26d", "27d", "28d", "29d", "30d", "31d", void 0];
const zk = Object.freeze(Ok);
const Ek = ["Yi", "Ding", "Kao", "Qi", "Shang", "Xia", void 0, "Wan", "Zhang", "San", "Shang", "Xia", "Ji", "Bu", "Yu", "Mian", "Gai", "Chou", "Chou", "Zhuan", "Qie", "Pi", "Shi", "Shi", "Qiu", "Bing", "Ye", "Cong", "Dong", "Si", "Cheng", "Diu", "Qiu", "Liang", "Diu", "You", "Liang", "Yan", "Bing", "Sang", "Gun", "Jiu", "Ge", "Ya", "Qiang", "Zhong", "Ji", "Jie", "Feng", "Guan", "Chuan", "Chan", "Lin", "Zhuo", "Zhu", "Ha", "Wan", "Dan", "Wei", "Zhu", "Jing", "Li", "Ju", "Pie", "Fu", "Yi", "Yi", "Nai", "Shime", "Jiu", "Jiu", "Zhe", "Me", "Yi", void 0, "Zhi", "Wu", "Zha", "Hu", "Fa", "Le", "Zhong", "Ping", "Pang", "Qiao", "Hu", "Guai", "Cheng", "Cheng", "Yi", "Yin", void 0, "Mie", "Jiu", "Qi", "Ye", "Xi", "Xiang", "Gai", "Diu", "Hal", void 0, "Shu", "Twul", "Shi", "Ji", "Nang", "Jia", "Kel", "Shi", void 0, "Ol", "Mai", "Luan", "Cal", "Ru", "Xue", "Yan", "Fu", "Sha", "Na", "Gan", "Sol", "El", "Cwul", void 0, "Gan", "Chi", "Gui", "Gan", "Luan", "Lin", "Yi", "Jue", "Liao", "Ma", "Yu", "Zheng", "Shi", "Shi", "Er", "Chu", "Yu", "Yu", "Yu", "Yun", "Hu", "Qi", "Wu", "Jing", "Si", "Sui", "Gen", "Gen", "Ya", "Xie", "Ya", "Qi", "Ya", "Ji", "Tou", "Wang", "Kang", "Ta", "Jiao", "Hai", "Yi", "Chan", "Heng", "Mu", void 0, "Xiang", "Jing", "Ting", "Liang", "Xiang", "Jing", "Ye", "Qin", "Bo", "You", "Xie", "Dan", "Lian", "Duo", "Wei", "Ren", "Ren", "Ji", "La", "Wang", "Yi", "Shi", "Ren", "Le", "Ding", "Ze", "Jin", "Pu", "Chou", "Ba", "Zhang", "Jin", "Jie", "Bing", "Reng", "Cong", "Fo", "San", "Lun", "Sya", "Cang", "Zi", "Shi", "Ta", "Zhang", "Fu", "Xian", "Xian", "Tuo", "Hong", "Tong", "Ren", "Qian", "Gan", "Yi", "Di", "Dai", "Ling", "Yi", "Chao", "Chang", "Sa", void 0, "Yi", "Mu", "Men", "Ren", "Jia", "Chao", "Yang", "Qian", "Zhong", "Pi", "Wan", "Wu", "Jian", "Jie", "Yao", "Feng", "Cang", "Ren", "Wang", "Fen", "Di", "Fang"];
const $k = Object.freeze(Ek);
const qk = ["Zhong", "Qi", "Pei", "Yu", "Diao", "Dun", "Wen", "Yi", "Xin", "Kang", "Yi", "Ji", "Ai", "Wu", "Ji", "Fu", "Fa", "Xiu", "Jin", "Bei", "Dan", "Fu", "Tang", "Zhong", "You", "Huo", "Hui", "Yu", "Cui", "Chuan", "San", "Wei", "Chuan", "Che", "Ya", "Xian", "Shang", "Chang", "Lun", "Cang", "Xun", "Xin", "Wei", "Zhu", void 0, "Xuan", "Nu", "Bo", "Gu", "Ni", "Ni", "Xie", "Ban", "Xu", "Ling", "Zhou", "Shen", "Qu", "Si", "Beng", "Si", "Jia", "Pi", "Yi", "Si", "Ai", "Zheng", "Dian", "Han", "Mai", "Dan", "Zhu", "Bu", "Qu", "Bi", "Shao", "Ci", "Wei", "Di", "Zhu", "Zuo", "You", "Yang", "Ti", "Zhan", "He", "Bi", "Tuo", "She", "Yu", "Yi", "Fo", "Zuo", "Kou", "Ning", "Tong", "Ni", "Xuan", "Qu", "Yong", "Wa", "Qian", void 0, "Ka", void 0, "Pei", "Huai", "He", "Lao", "Xiang", "Ge", "Yang", "Bai", "Fa", "Ming", "Jia", "Er", "Bing", "Ji", "Hen", "Huo", "Gui", "Quan", "Tiao", "Jiao", "Ci", "Yi", "Shi", "Xing", "Shen", "Tuo", "Kan", "Zhi", "Gai", "Lai", "Yi", "Chi", "Kua", "Guang", "Li", "Yin", "Shi", "Mi", "Zhu", "Xu", "You", "An", "Lu", "Mou", "Er", "Lun", "Tong", "Cha", "Chi", "Xun", "Gong", "Zhou", "Yi", "Ru", "Jian", "Xia", "Jia", "Zai", "Lu", "Ko", "Jiao", "Zhen", "Ce", "Qiao", "Kuai", "Chai", "Ning", "Nong", "Jin", "Wu", "Hou", "Jiong", "Cheng", "Zhen", "Zuo", "Chou", "Qin", "Lu", "Ju", "Shu", "Ting", "Shen", "Tuo", "Bo", "Nan", "Hao", "Bian", "Tui", "Yu", "Xi", "Cu", "E", "Qiu", "Xu", "Kuang", "Ku", "Wu", "Jun", "Yi", "Fu", "Lang", "Zu", "Qiao", "Li", "Yong", "Hun", "Jing", "Xian", "San", "Pai", "Su", "Fu", "Xi", "Li", "Fu", "Ping", "Bao", "Yu", "Si", "Xia", "Xin", "Xiu", "Yu", "Ti", "Che", "Chou", void 0, "Yan", "Lia", "Li", "Lai", void 0, "Jian", "Xiu", "Fu", "He", "Ju", "Xiao", "Pai", "Jian", "Biao", "Chu", "Fei", "Feng", "Ya", "An", "Bei", "Yu", "Xin", "Bi", "Jian"];
const Ik = Object.freeze(qk);
const Uk = ["Chang", "Chi", "Bing", "Zan", "Yao", "Cui", "Lia", "Wan", "Lai", "Cang", "Zong", "Ge", "Guan", "Bei", "Tian", "Shu", "Shu", "Men", "Dao", "Tan", "Jue", "Chui", "Xing", "Peng", "Tang", "Hou", "Yi", "Qi", "Ti", "Gan", "Jing", "Jie", "Sui", "Chang", "Jie", "Fang", "Zhi", "Kong", "Juan", "Zong", "Ju", "Qian", "Ni", "Lun", "Zhuo", "Wei", "Luo", "Song", "Leng", "Hun", "Dong", "Zi", "Ben", "Wu", "Ju", "Nai", "Cai", "Jian", "Zhai", "Ye", "Zhi", "Sha", "Qing", void 0, "Ying", "Cheng", "Jian", "Yan", "Nuan", "Zhong", "Chun", "Jia", "Jie", "Wei", "Yu", "Bing", "Ruo", "Ti", "Wei", "Pian", "Yan", "Feng", "Tang", "Wo", "E", "Xie", "Che", "Sheng", "Kan", "Di", "Zuo", "Cha", "Ting", "Bei", "Ye", "Huang", "Yao", "Zhan", "Chou", "Yan", "You", "Jian", "Xu", "Zha", "Ci", "Fu", "Bi", "Zhi", "Zong", "Mian", "Ji", "Yi", "Xie", "Xun", "Si", "Duan", "Ce", "Zhen", "Ou", "Tou", "Tou", "Bei", "Za", "Lu", "Jie", "Wei", "Fen", "Chang", "Gui", "Sou", "Zhi", "Su", "Xia", "Fu", "Yuan", "Rong", "Li", "Ru", "Yun", "Gou", "Ma", "Bang", "Dian", "Tang", "Hao", "Jie", "Xi", "Shan", "Qian", "Jue", "Cang", "Chu", "San", "Bei", "Xiao", "Yong", "Yao", "Tan", "Suo", "Yang", "Fa", "Bing", "Jia", "Dai", "Zai", "Tang", void 0, "Bin", "Chu", "Nuo", "Can", "Lei", "Cui", "Yong", "Zao", "Zong", "Peng", "Song", "Ao", "Chuan", "Yu", "Zhai", "Cou", "Shang", "Qiang", "Jing", "Chi", "Sha", "Han", "Zhang", "Qing", "Yan", "Di", "Xi", "Lu", "Bei", "Piao", "Jin", "Lian", "Lu", "Man", "Qian", "Xian", "Tan", "Ying", "Dong", "Zhuan", "Xiang", "Shan", "Qiao", "Jiong", "Tui", "Zun", "Pu", "Xi", "Lao", "Chang", "Guang", "Liao", "Qi", "Deng", "Chan", "Wei", "Ji", "Fan", "Hui", "Chuan", "Jian", "Dan", "Jiao", "Jiu", "Seng", "Fen", "Xian", "Jue", "E", "Jiao", "Jian", "Tong", "Lin", "Bo", "Gu", void 0, "Su", "Xian", "Jiang", "Min", "Ye", "Jin", "Jia", "Qiao", "Pi", "Feng", "Zhou", "Ai", "Sai"];
const Vk = Object.freeze(Uk);
const iL = ["Yi", "Jun", "Nong", "Chan", "Yi", "Dang", "Jing", "Xuan", "Kuai", "Jian", "Chu", "Dan", "Jiao", "Sha", "Zai", void 0, "Bin", "An", "Ru", "Tai", "Chou", "Chai", "Lan", "Ni", "Jin", "Qian", "Meng", "Wu", "Ning", "Qiong", "Ni", "Chang", "Lie", "Lei", "Lu", "Kuang", "Bao", "Du", "Biao", "Zan", "Zhi", "Si", "You", "Hao", "Chen", "Chen", "Li", "Teng", "Wei", "Long", "Chu", "Chan", "Rang", "Shu", "Hui", "Li", "Luo", "Zan", "Nuo", "Tang", "Yan", "Lei", "Nang", "Er", "Wu", "Yun", "Zan", "Yuan", "Xiong", "Chong", "Zhao", "Xiong", "Xian", "Guang", "Dui", "Ke", "Dui", "Mian", "Tu", "Chang", "Er", "Dui", "Er", "Xin", "Tu", "Si", "Yan", "Yan", "Shi", "Shi", "Dang", "Qian", "Dou", "Fen", "Mao", "Shen", "Dou", "Bai", "Jing", "Li", "Huang", "Ru", "Wang", "Nei", "Quan", "Liang", "Yu", "Ba", "Gong", "Liu", "Xi", void 0, "Lan", "Gong", "Tian", "Guan", "Xing", "Bing", "Qi", "Ju", "Dian", "Zi", "Ppwun", "Yang", "Jian", "Shou", "Ji", "Yi", "Ji", "Chan", "Jiong", "Mao", "Ran", "Nei", "Yuan", "Mao", "Gang", "Ran", "Ce", "Jiong", "Ce", "Zai", "Gua", "Jiong", "Mao", "Zhou", "Mou", "Gou", "Xu", "Mian", "Mi", "Rong", "Yin", "Xie", "Kan", "Jun", "Nong", "Yi", "Mi", "Shi", "Guan", "Meng", "Zhong", "Ju", "Yuan", "Ming", "Kou", "Lam", "Fu", "Xie", "Mi", "Bing", "Dong", "Tai", "Gang", "Feng", "Bing", "Hu", "Chong", "Jue", "Hu", "Kuang", "Ye", "Leng", "Pan", "Fu", "Min", "Dong", "Xian", "Lie", "Xia", "Jian", "Jing", "Shu", "Mei", "Tu", "Qi", "Gu", "Zhun", "Song", "Jing", "Liang", "Qing", "Diao", "Ling", "Dong", "Gan", "Jian", "Yin", "Cou", "Yi", "Li", "Cang", "Ming", "Zhuen", "Cui", "Si", "Duo", "Jin", "Lin", "Lin", "Ning", "Xi", "Du", "Ji", "Fan", "Fan", "Fan", "Feng", "Ju", "Chu", "Tako", "Feng", "Mok", "Ci", "Fu", "Feng", "Ping", "Feng", "Kai", "Huang", "Kai", "Gan", "Deng", "Ping", "Qu", "Xiong", "Kuai", "Tu", "Ao", "Chu", "Ji", "Dang", "Han", "Han", "Zao"];
const oL = Object.freeze(iL);
const eL = ["Dao", "Diao", "Dao", "Ren", "Ren", "Chuang", "Fen", "Qie", "Yi", "Ji", "Kan", "Qian", "Cun", "Chu", "Wen", "Ji", "Dan", "Xing", "Hua", "Wan", "Jue", "Li", "Yue", "Lie", "Liu", "Ze", "Gang", "Chuang", "Fu", "Chu", "Qu", "Ju", "Shan", "Min", "Ling", "Zhong", "Pan", "Bie", "Jie", "Jie", "Bao", "Li", "Shan", "Bie", "Chan", "Jing", "Gua", "Gen", "Dao", "Chuang", "Kui", "Ku", "Duo", "Er", "Zhi", "Shua", "Quan", "Cha", "Ci", "Ke", "Jie", "Gui", "Ci", "Gui", "Kai", "Duo", "Ji", "Ti", "Jing", "Lou", "Gen", "Ze", "Yuan", "Cuo", "Xue", "Ke", "La", "Qian", "Cha", "Chuang", "Gua", "Jian", "Cuo", "Li", "Ti", "Fei", "Pou", "Chan", "Qi", "Chuang", "Zi", "Gang", "Wan", "Bo", "Ji", "Duo", "Qing", "Yan", "Zhuo", "Jian", "Ji", "Bo", "Yan", "Ju", "Huo", "Sheng", "Jian", "Duo", "Duan", "Wu", "Gua", "Fu", "Sheng", "Jian", "Ge", "Zha", "Kai", "Chuang", "Juan", "Chan", "Tuan", "Lu", "Li", "Fou", "Shan", "Piao", "Kou", "Jiao", "Gua", "Qiao", "Jue", "Hua", "Zha", "Zhuo", "Lian", "Ju", "Pi", "Liu", "Gui", "Jiao", "Gui", "Jian", "Jian", "Tang", "Huo", "Ji", "Jian", "Yi", "Jian", "Zhi", "Chan", "Cuan", "Mo", "Li", "Zhu", "Li", "Ya", "Quan", "Ban", "Gong", "Jia", "Wu", "Mai", "Lie", "Jin", "Keng", "Xie", "Zhi", "Dong", "Zhu", "Nu", "Jie", "Qu", "Shao", "Yi", "Zhu", "Miao", "Li", "Jing", "Lao", "Lao", "Juan", "Kou", "Yang", "Wa", "Xiao", "Mou", "Kuang", "Jie", "Lie", "He", "Shi", "Ke", "Jing", "Hao", "Bo", "Min", "Chi", "Lang", "Yong", "Yong", "Mian", "Ke", "Xun", "Juan", "Qing", "Lu", "Pou", "Meng", "Lai", "Le", "Kai", "Mian", "Dong", "Xu", "Xu", "Kan", "Wu", "Yi", "Xun", "Weng", "Sheng", "Lao", "Mu", "Lu", "Piao", "Shi", "Ji", "Qin", "Qiang", "Jiao", "Quan", "Yang", "Yi", "Jue", "Fan", "Juan", "Tong", "Ju", "Dan", "Xie", "Mai", "Xun", "Xun", "Lu", "Li", "Che", "Rang", "Quan", "Bao", "Shao", "Yun", "Jiu", "Bao", "Gou", "Wu"];
const nL = Object.freeze(eL);
const aL = ["Yun", "Mwun", "Nay", "Gai", "Gai", "Bao", "Cong", void 0, "Xiong", "Peng", "Ju", "Tao", "Ge", "Pu", "An", "Pao", "Fu", "Gong", "Da", "Jiu", "Qiong", "Bi", "Hua", "Bei", "Nao", "Chi", "Fang", "Jiu", "Yi", "Za", "Jiang", "Kang", "Jiang", "Kuang", "Hu", "Xia", "Qu", "Bian", "Gui", "Qie", "Zang", "Kuang", "Fei", "Hu", "Tou", "Gui", "Gui", "Hui", "Dan", "Gui", "Lian", "Lian", "Suan", "Du", "Jiu", "Qu", "Xi", "Pi", "Qu", "Yi", "Qia", "Yan", "Bian", "Ni", "Qu", "Shi", "Xin", "Qian", "Nian", "Sa", "Zu", "Sheng", "Wu", "Hui", "Ban", "Shi", "Xi", "Wan", "Hua", "Xie", "Wan", "Bei", "Zu", "Zhuo", "Xie", "Dan", "Mai", "Nan", "Dan", "Ji", "Bo", "Shuai", "Bu", "Kuang", "Bian", "Bu", "Zhan", "Qia", "Lu", "You", "Lu", "Xi", "Gua", "Wo", "Xie", "Jie", "Jie", "Wei", "Ang", "Qiong", "Zhi", "Mao", "Yin", "Wei", "Shao", "Ji", "Que", "Luan", "Shi", "Juan", "Xie", "Xu", "Jin", "Que", "Wu", "Ji", "E", "Qing", "Xi", void 0, "Han", "Zhan", "E", "Ting", "Li", "Zhe", "Han", "Li", "Ya", "Ya", "Yan", "She", "Zhi", "Zha", "Pang", void 0, "He", "Ya", "Zhi", "Ce", "Pang", "Ti", "Li", "She", "Hou", "Ting", "Zui", "Cuo", "Fei", "Yuan", "Ce", "Yuan", "Xiang", "Yan", "Li", "Jue", "Sha", "Dian", "Chu", "Jiu", "Qin", "Ao", "Gui", "Yan", "Si", "Li", "Chang", "Lan", "Li", "Yan", "Yan", "Yuan", "Si", "Gong", "Lin", "Qiu", "Qu", "Qu", "Uk", "Lei", "Du", "Xian", "Zhuan", "San", "Can", "Can", "Can", "Can", "Ai", "Dai", "You", "Cha", "Ji", "You", "Shuang", "Fan", "Shou", "Guai", "Ba", "Fa", "Ruo", "Shi", "Shu", "Zhuo", "Qu", "Shou", "Bian", "Xu", "Jia", "Pan", "Sou", "Gao", "Wei", "Sou", "Die", "Rui", "Cong", "Kou", "Gu", "Ju", "Ling", "Gua", "Tao", "Kou", "Zhi", "Jiao", "Zhao", "Ba", "Ding", "Ke", "Tai", "Chi", "Shi", "You", "Qiu", "Po", "Ye", "Hao", "Si", "Tan", "Chi", "Le", "Diao", "Ji", void 0, "Hong"];
const uL = Object.freeze(aL);
const gL = ["Mie", "Xu", "Mang", "Chi", "Ge", "Xuan", "Yao", "Zi", "He", "Ji", "Diao", "Cun", "Tong", "Ming", "Hou", "Li", "Tu", "Xiang", "Zha", "Xia", "Ye", "Lu", "A", "Ma", "Ou", "Xue", "Yi", "Jun", "Chou", "Lin", "Tun", "Yin", "Fei", "Bi", "Qin", "Qin", "Jie", "Bu", "Fou", "Ba", "Dun", "Fen", "E", "Han", "Ting", "Hang", "Shun", "Qi", "Hong", "Zhi", "Shen", "Wu", "Wu", "Chao", "Ne", "Xue", "Xi", "Chui", "Dou", "Wen", "Hou", "Ou", "Wu", "Gao", "Ya", "Jun", "Lu", "E", "Ge", "Mei", "Ai", "Qi", "Cheng", "Wu", "Gao", "Fu", "Jiao", "Hong", "Chi", "Sheng", "Ne", "Tun", "Fu", "Yi", "Dai", "Ou", "Li", "Bai", "Yuan", "Kuai", void 0, "Qiang", "Wu", "E", "Shi", "Quan", "Pen", "Wen", "Ni", "M", "Ling", "Ran", "You", "Di", "Zhou", "Shi", "Zhou", "Tie", "Xi", "Yi", "Qi", "Ping", "Zi", "Gu", "Zi", "Wei", "Xu", "He", "Nao", "Xia", "Pei", "Yi", "Xiao", "Shen", "Hu", "Ming", "Da", "Qu", "Ju", "Gem", "Za", "Tuo", "Duo", "Pou", "Pao", "Bi", "Fu", "Yang", "He", "Zha", "He", "Hai", "Jiu", "Yong", "Fu", "Que", "Zhou", "Wa", "Ka", "Gu", "Ka", "Zuo", "Bu", "Long", "Dong", "Ning", "Tha", "Si", "Xian", "Huo", "Qi", "Er", "E", "Guang", "Zha", "Xi", "Yi", "Lie", "Zi", "Mie", "Mi", "Zhi", "Yao", "Ji", "Zhou", "Ge", "Shuai", "Zan", "Xiao", "Ke", "Hui", "Kua", "Huai", "Tao", "Xian", "E", "Xuan", "Xiu", "Wai", "Yan", "Lao", "Yi", "Ai", "Pin", "Shen", "Tong", "Hong", "Xiong", "Chi", "Wa", "Ha", "Zai", "Yu", "Di", "Pai", "Xiang", "Ai", "Hen", "Kuang", "Ya", "Da", "Xiao", "Bi", "Yue", void 0, "Hua", "Sasou", "Kuai", "Duo", void 0, "Ji", "Nong", "Mou", "Yo", "Hao", "Yuan", "Long", "Pou", "Mang", "Ge", "E", "Chi", "Shao", "Li", "Na", "Zu", "He", "Ku", "Xiao", "Xian", "Lao", "Bo", "Zhe", "Zha", "Liang", "Ba", "Mie", "Le", "Sui", "Fou", "Bu", "Han", "Heng", "Geng", "Shuo", "Ge"];
const dL = Object.freeze(gL);
const tL = ["You", "Yan", "Gu", "Gu", "Bai", "Han", "Suo", "Chun", "Yi", "Ai", "Jia", "Tu", "Xian", "Huan", "Li", "Xi", "Tang", "Zuo", "Qiu", "Che", "Wu", "Zao", "Ya", "Dou", "Qi", "Di", "Qin", "Ma", "Mal", "Hong", "Dou", "Kes", "Lao", "Liang", "Suo", "Zao", "Huan", "Lang", "Sha", "Ji", "Zuo", "Wo", "Feng", "Yin", "Hu", "Qi", "Shou", "Wei", "Shua", "Chang", "Er", "Li", "Qiang", "An", "Jie", "Yo", "Nian", "Yu", "Tian", "Lai", "Sha", "Xi", "Tuo", "Hu", "Ai", "Zhou", "Nou", "Ken", "Zhuo", "Zhuo", "Shang", "Di", "Heng", "Lan", "A", "Xiao", "Xiang", "Tun", "Wu", "Wen", "Cui", "Sha", "Hu", "Qi", "Qi", "Tao", "Dan", "Dan", "Ye", "Zi", "Bi", "Cui", "Chuo", "He", "Ya", "Qi", "Zhe", "Pei", "Liang", "Xian", "Pi", "Sha", "La", "Ze", "Qing", "Gua", "Pa", "Zhe", "Se", "Zhuan", "Nie", "Guo", "Luo", "Yan", "Di", "Quan", "Tan", "Bo", "Ding", "Lang", "Xiao", void 0, "Tang", "Chi", "Ti", "An", "Jiu", "Dan", "Ke", "Yong", "Wei", "Nan", "Shan", "Yu", "Zhe", "La", "Jie", "Hou", "Han", "Die", "Zhou", "Chai", "Wai", "Re", "Yu", "Yin", "Zan", "Yao", "Wo", "Mian", "Hu", "Yun", "Chuan", "Hui", "Huan", "Huan", "Xi", "He", "Ji", "Kui", "Zhong", "Wei", "Sha", "Xu", "Huang", "Du", "Nie", "Xuan", "Liang", "Yu", "Sang", "Chi", "Qiao", "Yan", "Dan", "Pen", "Can", "Li", "Yo", "Zha", "Wei", "Miao", "Ying", "Pen", "Phos", "Kui", "Xi", "Yu", "Jie", "Lou", "Ku", "Sao", "Huo", "Ti", "Yao", "He", "A", "Xiu", "Qiang", "Se", "Yong", "Su", "Hong", "Xie", "Yi", "Suo", "Ma", "Cha", "Hai", "Ke", "Ta", "Sang", "Tian", "Ru", "Sou", "Wa", "Ji", "Pang", "Wu", "Xian", "Shi", "Ge", "Zi", "Jie", "Luo", "Weng", "Wa", "Si", "Chi", "Hao", "Suo", "Jia", "Hai", "Suo", "Qin", "Nie", "He", "Cis", "Sai", "Ng", "Ge", "Na", "Dia", "Ai", void 0, "Tong", "Bi", "Ao", "Ao", "Lian", "Cui", "Zhe", "Mo", "Sou", "Sou", "Tan"];
const sL = Object.freeze(tL);
const hL = ["Di", "Qi", "Jiao", "Chong", "Jiao", "Kai", "Tan", "San", "Cao", "Jia", "Ai", "Xiao", "Piao", "Lou", "Ga", "Gu", "Xiao", "Hu", "Hui", "Guo", "Ou", "Xian", "Ze", "Chang", "Xu", "Po", "De", "Ma", "Ma", "Hu", "Lei", "Du", "Ga", "Tang", "Ye", "Beng", "Ying", "Saai", "Jiao", "Mi", "Xiao", "Hua", "Mai", "Ran", "Zuo", "Peng", "Lao", "Xiao", "Ji", "Zhu", "Chao", "Kui", "Zui", "Xiao", "Si", "Hao", "Fu", "Liao", "Qiao", "Xi", "Xiu", "Tan", "Tan", "Mo", "Xun", "E", "Zun", "Fan", "Chi", "Hui", "Zan", "Chuang", "Cu", "Dan", "Yu", "Tun", "Cheng", "Jiao", "Ye", "Xi", "Qi", "Hao", "Lian", "Xu", "Deng", "Hui", "Yin", "Pu", "Jue", "Qin", "Xun", "Nie", "Lu", "Si", "Yan", "Ying", "Da", "Dan", "Yu", "Zhou", "Jin", "Nong", "Yue", "Hui", "Qi", "E", "Zao", "Yi", "Shi", "Jiao", "Yuan", "Ai", "Yong", "Jue", "Kuai", "Yu", "Pen", "Dao", "Ge", "Xin", "Dun", "Dang", "Sin", "Sai", "Pi", "Pi", "Yin", "Zui", "Ning", "Di", "Lan", "Ta", "Huo", "Ru", "Hao", "Xia", "Ya", "Duo", "Xi", "Chou", "Ji", "Jin", "Hao", "Ti", "Chang", void 0, void 0, "Ca", "Ti", "Lu", "Hui", "Bo", "You", "Nie", "Yin", "Hu", "Mo", "Huang", "Zhe", "Li", "Liu", "Haai", "Nang", "Xiao", "Mo", "Yan", "Li", "Lu", "Long", "Fu", "Dan", "Chen", "Pin", "Pi", "Xiang", "Huo", "Mo", "Xi", "Duo", "Ku", "Yan", "Chan", "Ying", "Rang", "Dian", "La", "Ta", "Xiao", "Jiao", "Chuo", "Huan", "Huo", "Zhuan", "Nie", "Xiao", "Ca", "Li", "Chan", "Chai", "Li", "Yi", "Luo", "Nang", "Zan", "Su", "Xi", "So", "Jian", "Za", "Zhu", "Lan", "Nie", "Nang", void 0, void 0, "Wei", "Hui", "Yin", "Qiu", "Si", "Nin", "Jian", "Hui", "Xin", "Yin", "Nan", "Tuan", "Tuan", "Dun", "Kang", "Yuan", "Jiong", "Pian", "Yun", "Cong", "Hu", "Hui", "Yuan", "You", "Guo", "Kun", "Cong", "Wei", "Tu", "Wei", "Lun", "Guo", "Qun", "Ri", "Ling", "Gu", "Guo", "Tai", "Guo", "Tu", "You"];
const rL = Object.freeze(hL);
const lL = ["Guo", "Yin", "Hun", "Pu", "Yu", "Han", "Yuan", "Lun", "Quan", "Yu", "Qing", "Guo", "Chuan", "Wei", "Yuan", "Quan", "Ku", "Fu", "Yuan", "Yuan", "E", "Tu", "Tu", "Tu", "Tuan", "Lue", "Hui", "Yi", "Yuan", "Luan", "Luan", "Tu", "Ya", "Tu", "Ting", "Sheng", "Pu", "Lu", "Iri", "Ya", "Zai", "Wei", "Ge", "Yu", "Wu", "Gui", "Pi", "Yi", "Di", "Qian", "Qian", "Zhen", "Zhuo", "Dang", "Qia", "Akutsu", "Yama", "Kuang", "Chang", "Qi", "Nie", "Mo", "Ji", "Jia", "Zhi", "Zhi", "Ban", "Xun", "Tou", "Qin", "Fen", "Jun", "Keng", "Tun", "Fang", "Fen", "Ben", "Tan", "Kan", "Pi", "Zuo", "Keng", "Bi", "Xing", "Di", "Jing", "Ji", "Kuai", "Di", "Jing", "Jian", "Tan", "Li", "Ba", "Wu", "Fen", "Zhui", "Po", "Pan", "Tang", "Kun", "Qu", "Tan", "Zhi", "Tuo", "Gan", "Ping", "Dian", "Gua", "Ni", "Tai", "Pi", "Jiong", "Yang", "Fo", "Ao", "Liu", "Qiu", "Mu", "Ke", "Gou", "Xue", "Ba", "Chi", "Che", "Ling", "Zhu", "Fu", "Hu", "Zhi", "Chui", "La", "Long", "Long", "Lu", "Ao", "Tay", "Pao", void 0, "Xing", "Dong", "Ji", "Ke", "Lu", "Ci", "Chi", "Lei", "Gai", "Yin", "Hou", "Dui", "Zhao", "Fu", "Guang", "Yao", "Duo", "Duo", "Gui", "Cha", "Yang", "Yin", "Fa", "Gou", "Yuan", "Die", "Xie", "Ken", "Jiong", "Shou", "E", "Ha", "Dian", "Hong", "Wu", "Kua", void 0, "Tao", "Dang", "Kai", "Gake", "Nao", "An", "Xing", "Xian", "Huan", "Bang", "Pei", "Ba", "Yi", "Yin", "Han", "Xu", "Chui", "Cen", "Geng", "Ai", "Peng", "Fang", "Que", "Yong", "Xun", "Jia", "Di", "Mai", "Lang", "Xuan", "Cheng", "Yan", "Jin", "Zhe", "Lei", "Lie", "Bu", "Cheng", "Gomi", "Bu", "Shi", "Xun", "Guo", "Jiong", "Ye", "Nian", "Di", "Yu", "Bu", "Ya", "Juan", "Sui", "Pi", "Cheng", "Wan", "Ju", "Lun", "Zheng", "Kong", "Chong", "Dong", "Dai", "Tan", "An", "Cai", "Shu", "Beng", "Kan", "Zhi", "Duo", "Yi", "Zhi", "Yi", "Pei", "Ji", "Zhun", "Qi", "Sao", "Ju", "Ni"];
const vL = Object.freeze(lL);
const yL = ["Ku", "Ke", "Tang", "Kun", "Ni", "Jian", "Dui", "Jin", "Gang", "Yu", "E", "Peng", "Gu", "Tu", "Leng", void 0, "Ya", "Qian", void 0, "An", void 0, "Duo", "Nao", "Tu", "Cheng", "Yin", "Hun", "Bi", "Lian", "Guo", "Die", "Zhuan", "Hou", "Bao", "Bao", "Yu", "Di", "Mao", "Jie", "Ruan", "E", "Geng", "Kan", "Zong", "Yu", "Huang", "E", "Yao", "Yan", "Bao", "Ji", "Mei", "Chang", "Du", "Tuo", "Yin", "Feng", "Zhong", "Jie", "Zhen", "Feng", "Gang", "Chuan", "Jian", "Pyeng", "Toride", "Xiang", "Huang", "Leng", "Duan", void 0, "Xuan", "Ji", "Ji", "Kuai", "Ying", "Ta", "Cheng", "Yong", "Kai", "Su", "Su", "Shi", "Mi", "Ta", "Weng", "Cheng", "Tu", "Tang", "Que", "Zhong", "Li", "Peng", "Bang", "Sai", "Zang", "Dui", "Tian", "Wu", "Cheng", "Xun", "Ge", "Zhen", "Ai", "Gong", "Yan", "Kan", "Tian", "Yuan", "Wen", "Xie", "Liu", "Ama", "Lang", "Chang", "Peng", "Beng", "Chen", "Cu", "Lu", "Ou", "Qian", "Mei", "Mo", "Zhuan", "Shuang", "Shu", "Lou", "Chi", "Man", "Biao", "Jing", "Qi", "Shu", "Di", "Zhang", "Kan", "Yong", "Dian", "Chen", "Zhi", "Xi", "Guo", "Qiang", "Jin", "Di", "Shang", "Mu", "Cui", "Yan", "Ta", "Zeng", "Qi", "Qiang", "Liang", void 0, "Zhui", "Qiao", "Zeng", "Xu", "Shan", "Shan", "Ba", "Pu", "Kuai", "Dong", "Fan", "Que", "Mo", "Dun", "Dun", "Dun", "Di", "Sheng", "Duo", "Duo", "Tan", "Deng", "Wu", "Fen", "Huang", "Tan", "Da", "Ye", "Sho", "Mama", "Yu", "Qiang", "Ji", "Qiao", "Ken", "Yi", "Pi", "Bi", "Dian", "Jiang", "Ye", "Yong", "Bo", "Tan", "Lan", "Ju", "Huai", "Dang", "Rang", "Qian", "Xun", "Lan", "Xi", "He", "Ai", "Ya", "Dao", "Hao", "Ruan", "Mama", "Lei", "Kuang", "Lu", "Yan", "Tan", "Wei", "Huai", "Long", "Long", "Rui", "Li", "Lin", "Rang", "Ten", "Xun", "Yan", "Lei", "Ba", void 0, "Shi", "Ren", void 0, "Zhuang", "Zhuang", "Sheng", "Yi", "Mai", "Ke", "Zhu", "Zhuang", "Hu", "Hu", "Kun", "Yi", "Hu", "Xu", "Kun", "Shou", "Mang", "Zun"];
const cL = Object.freeze(yL);
const bL = ["Shou", "Yi", "Zhi", "Gu", "Chu", "Jiang", "Feng", "Bei", "Cay", "Bian", "Sui", "Qun", "Ling", "Fu", "Zuo", "Xia", "Xiong", void 0, "Nao", "Xia", "Kui", "Xi", "Wai", "Yuan", "Mao", "Su", "Duo", "Duo", "Ye", "Qing", "Uys", "Gou", "Gou", "Qi", "Meng", "Meng", "Yin", "Huo", "Chen", "Da", "Ze", "Tian", "Tai", "Fu", "Guai", "Yao", "Yang", "Hang", "Gao", "Shi", "Ben", "Tai", "Tou", "Yan", "Bi", "Yi", "Kua", "Jia", "Duo", "Kwu", "Kuang", "Yun", "Jia", "Pa", "En", "Lian", "Huan", "Di", "Yan", "Pao", "Quan", "Qi", "Nai", "Feng", "Xie", "Fen", "Dian", void 0, "Kui", "Zou", "Huan", "Qi", "Kai", "Zha", "Ben", "Yi", "Jiang", "Tao", "Zang", "Ben", "Xi", "Xiang", "Fei", "Diao", "Xun", "Keng", "Dian", "Ao", "She", "Weng", "Pan", "Ao", "Wu", "Ao", "Jiang", "Lian", "Duo", "Yun", "Jiang", "Shi", "Fen", "Huo", "Bi", "Lian", "Duo", "Nu", "Nu", "Ding", "Nai", "Qian", "Jian", "Ta", "Jiu", "Nan", "Cha", "Hao", "Xian", "Fan", "Ji", "Shuo", "Ru", "Fei", "Wang", "Hong", "Zhuang", "Fu", "Ma", "Dan", "Ren", "Fu", "Jing", "Yan", "Xie", "Wen", "Zhong", "Pa", "Du", "Ji", "Keng", "Zhong", "Yao", "Jin", "Yun", "Miao", "Pei", "Shi", "Yue", "Zhuang", "Niu", "Yan", "Na", "Xin", "Fen", "Bi", "Yu", "Tuo", "Feng", "Yuan", "Fang", "Wu", "Yu", "Gui", "Du", "Ba", "Ni", "Zhou", "Zhuo", "Zhao", "Da", "Nai", "Yuan", "Tou", "Xuan", "Zhi", "E", "Mei", "Mo", "Qi", "Bi", "Shen", "Qie", "E", "He", "Xu", "Fa", "Zheng", "Min", "Ban", "Mu", "Fu", "Ling", "Zi", "Zi", "Shi", "Ran", "Shan", "Yang", "Man", "Jie", "Gu", "Si", "Xing", "Wei", "Zi", "Ju", "Shan", "Pin", "Ren", "Yao", "Tong", "Jiang", "Shu", "Ji", "Gai", "Shang", "Kuo", "Juan", "Jiao", "Gou", "Mu", "Jian", "Jian", "Yi", "Nian", "Zhi", "Ji", "Ji", "Xian", "Heng", "Guang", "Jun", "Kua", "Yan", "Ming", "Lie", "Pei", "Yan", "You", "Yan", "Cha", "Shen", "Yin", "Chi", "Gui", "Quan", "Zi"];
const pL = Object.freeze(bL);
const wL = ["Song", "Wei", "Hong", "Wa", "Lou", "Ya", "Rao", "Jiao", "Luan", "Ping", "Xian", "Shao", "Li", "Cheng", "Xiao", "Mang", "Fu", "Suo", "Wu", "Wei", "Ke", "Lai", "Chuo", "Ding", "Niang", "Xing", "Nan", "Yu", "Nuo", "Pei", "Nei", "Juan", "Shen", "Zhi", "Han", "Di", "Zhuang", "E", "Pin", "Tui", "Han", "Mian", "Wu", "Yan", "Wu", "Xi", "Yan", "Yu", "Si", "Yu", "Wa", void 0, "Xian", "Ju", "Qu", "Shui", "Qi", "Xian", "Zhui", "Dong", "Chang", "Lu", "Ai", "E", "E", "Lou", "Mian", "Cong", "Pou", "Ju", "Po", "Cai", "Ding", "Wan", "Biao", "Xiao", "Shu", "Qi", "Hui", "Fu", "E", "Wo", "Tan", "Fei", "Wei", "Jie", "Tian", "Ni", "Quan", "Jing", "Hun", "Jing", "Qian", "Dian", "Xing", "Hu", "Wa", "Lai", "Bi", "Yin", "Chou", "Chuo", "Fu", "Jing", "Lun", "Yan", "Lan", "Kun", "Yin", "Ya", "Ju", "Li", "Dian", "Xian", "Hwa", "Hua", "Ying", "Chan", "Shen", "Ting", "Dang", "Yao", "Wu", "Nan", "Ruo", "Jia", "Tou", "Xu", "Yu", "Wei", "Ti", "Rou", "Mei", "Dan", "Ruan", "Qin", "Hui", "Wu", "Qian", "Chun", "Mao", "Fu", "Jie", "Duan", "Xi", "Zhong", "Mei", "Huang", "Mian", "An", "Ying", "Xuan", "Jie", "Wei", "Mei", "Yuan", "Zhen", "Qiu", "Ti", "Xie", "Tuo", "Lian", "Mao", "Ran", "Si", "Pian", "Wei", "Wa", "Jiu", "Hu", "Ao", void 0, "Bou", "Xu", "Tou", "Gui", "Zou", "Yao", "Pi", "Xi", "Yuan", "Ying", "Rong", "Ru", "Chi", "Liu", "Mei", "Pan", "Ao", "Ma", "Gou", "Kui", "Qin", "Jia", "Sao", "Zhen", "Yuan", "Cha", "Yong", "Ming", "Ying", "Ji", "Su", "Niao", "Xian", "Tao", "Pang", "Lang", "Nao", "Bao", "Ai", "Pi", "Pin", "Yi", "Piao", "Yu", "Lei", "Xuan", "Man", "Yi", "Zhang", "Kang", "Yong", "Ni", "Li", "Di", "Gui", "Yan", "Jin", "Zhuan", "Chang", "Ce", "Han", "Nen", "Lao", "Mo", "Zhe", "Hu", "Hu", "Ao", "Nen", "Qiang", "Ma", "Pie", "Gu", "Wu", "Jiao", "Tuo", "Zhan", "Mao", "Xian", "Xian", "Mo", "Liao", "Lian", "Hua"];
const jL = Object.freeze(wL);
const mL = ["Gui", "Deng", "Zhi", "Xu", "Yi", "Hua", "Xi", "Hui", "Rao", "Xi", "Yan", "Chan", "Jiao", "Mei", "Fan", "Fan", "Xian", "Yi", "Wei", "Jiao", "Fu", "Shi", "Bi", "Shan", "Sui", "Qiang", "Lian", "Huan", "Xin", "Niao", "Dong", "Yi", "Can", "Ai", "Niang", "Neng", "Ma", "Tiao", "Chou", "Jin", "Ci", "Yu", "Pin", "Yong", "Xu", "Nai", "Yan", "Tai", "Ying", "Can", "Niao", "Wo", "Ying", "Mian", "Kaka", "Ma", "Shen", "Xing", "Ni", "Du", "Liu", "Yuan", "Lan", "Yan", "Shuang", "Ling", "Jiao", "Niang", "Lan", "Xian", "Ying", "Shuang", "Shuai", "Quan", "Mi", "Li", "Luan", "Yan", "Zhu", "Lan", "Zi", "Jie", "Jue", "Jue", "Kong", "Yun", "Zi", "Zi", "Cun", "Sun", "Fu", "Bei", "Zi", "Xiao", "Xin", "Meng", "Si", "Tai", "Bao", "Ji", "Gu", "Nu", "Xue", void 0, "Zhuan", "Hai", "Luan", "Sun", "Huai", "Mie", "Cong", "Qian", "Shu", "Chan", "Ya", "Zi", "Ni", "Fu", "Zi", "Li", "Xue", "Bo", "Ru", "Lai", "Nie", "Nie", "Ying", "Luan", "Mian", "Ning", "Rong", "Ta", "Gui", "Zhai", "Qiong", "Yu", "Shou", "An", "Tu", "Song", "Wan", "Rou", "Yao", "Hong", "Yi", "Jing", "Zhun", "Mi", "Zhu", "Dang", "Hong", "Zong", "Guan", "Zhou", "Ding", "Wan", "Yi", "Bao", "Shi", "Shi", "Chong", "Shen", "Ke", "Xuan", "Shi", "You", "Huan", "Yi", "Tiao", "Shi", "Xian", "Gong", "Cheng", "Qun", "Gong", "Xiao", "Zai", "Zha", "Bao", "Hai", "Yan", "Xiao", "Jia", "Shen", "Chen", "Rong", "Huang", "Mi", "Kou", "Kuan", "Bin", "Su", "Cai", "Zan", "Ji", "Yuan", "Ji", "Yin", "Mi", "Kou", "Qing", "Que", "Zhen", "Jian", "Fu", "Ning", "Bing", "Huan", "Mei", "Qin", "Han", "Yu", "Shi", "Ning", "Qin", "Ning", "Zhi", "Yu", "Bao", "Kuan", "Ning", "Qin", "Mo", "Cha", "Ju", "Gua", "Qin", "Hu", "Wu", "Liao", "Shi", "Zhu", "Zhai", "Shen", "Wei", "Xie", "Kuan", "Hui", "Liao", "Jun", "Huan", "Yi", "Yi", "Bao", "Qin", "Chong", "Bao", "Feng", "Cun", "Dui", "Si", "Xun", "Dao", "Lu", "Dui", "Shou"];
const fL = Object.freeze(mL);
const YL = ["Po", "Feng", "Zhuan", "Fu", "She", "Ke", "Jiang", "Jiang", "Zhuan", "Wei", "Zun", "Xun", "Shu", "Dui", "Dao", "Xiao", "Ji", "Shao", "Er", "Er", "Er", "Ga", "Jian", "Shu", "Chen", "Shang", "Shang", "Mo", "Ga", "Chang", "Liao", "Xian", "Xian", void 0, "Wang", "Wang", "You", "Liao", "Liao", "Yao", "Mang", "Wang", "Wang", "Wang", "Ga", "Yao", "Duo", "Kui", "Zhong", "Jiu", "Gan", "Gu", "Gan", "Tui", "Gan", "Gan", "Shi", "Yin", "Chi", "Kao", "Ni", "Jin", "Wei", "Niao", "Ju", "Pi", "Ceng", "Xi", "Bi", "Ju", "Jie", "Tian", "Qu", "Ti", "Jie", "Wu", "Diao", "Shi", "Shi", "Ping", "Ji", "Xie", "Chen", "Xi", "Ni", "Zhan", "Xi", void 0, "Man", "E", "Lou", "Ping", "Ti", "Fei", "Shu", "Xie", "Tu", "Lu", "Lu", "Xi", "Ceng", "Lu", "Ju", "Xie", "Ju", "Jue", "Liao", "Jue", "Shu", "Xi", "Che", "Tun", "Ni", "Shan", void 0, "Xian", "Li", "Xue", "Nata", void 0, "Long", "Yi", "Qi", "Ren", "Wu", "Han", "Shen", "Yu", "Chu", "Sui", "Qi", void 0, "Yue", "Ban", "Yao", "Ang", "Ya", "Wu", "Jie", "E", "Ji", "Qian", "Fen", "Yuan", "Qi", "Cen", "Qian", "Qi", "Cha", "Jie", "Qu", "Gang", "Xian", "Ao", "Lan", "Dao", "Ba", "Zuo", "Zuo", "Yang", "Ju", "Gang", "Ke", "Gou", "Xue", "Bei", "Li", "Tiao", "Ju", "Yan", "Fu", "Xiu", "Jia", "Ling", "Tuo", "Pei", "You", "Dai", "Kuang", "Yue", "Qu", "Hu", "Po", "Min", "An", "Tiao", "Ling", "Chi", "Yuri", "Dong", "Cem", "Kui", "Xiu", "Mao", "Tong", "Xue", "Yi", "Kura", "He", "Ke", "Luo", "E", "Fu", "Xun", "Die", "Lu", "An", "Er", "Gai", "Quan", "Tong", "Yi", "Mu", "Shi", "An", "Wei", "Hu", "Zhi", "Mi", "Li", "Ji", "Tong", "Wei", "You", "Sang", "Xia", "Li", "Yao", "Jiao", "Zheng", "Luan", "Jiao", "E", "E", "Yu", "Ye", "Bu", "Qiao", "Qun", "Feng", "Feng", "Nao", "Li", "You", "Xian", "Hong", "Dao", "Shen", "Cheng", "Tu", "Geng", "Jun", "Hao", "Xia", "Yin", "Yu"];
const kL = Object.freeze(YL);
const LL = ["Lang", "Kan", "Lao", "Lai", "Xian", "Que", "Kong", "Chong", "Chong", "Ta", "Lin", "Hua", "Ju", "Lai", "Qi", "Min", "Kun", "Kun", "Zu", "Gu", "Cui", "Ya", "Ya", "Gang", "Lun", "Lun", "Leng", "Jue", "Duo", "Zheng", "Guo", "Yin", "Dong", "Han", "Zheng", "Wei", "Yao", "Pi", "Yan", "Song", "Jie", "Beng", "Zu", "Jue", "Dong", "Zhan", "Gu", "Yin", void 0, "Ze", "Huang", "Yu", "Wei", "Yang", "Feng", "Qiu", "Dun", "Ti", "Yi", "Zhi", "Shi", "Zai", "Yao", "E", "Zhu", "Kan", "Lu", "Yan", "Mei", "Gan", "Ji", "Ji", "Huan", "Ting", "Sheng", "Mei", "Qian", "Wu", "Yu", "Zong", "Lan", "Jue", "Yan", "Yan", "Wei", "Zong", "Cha", "Sui", "Rong", "Yamashina", "Qin", "Yu", "Kewashii", "Lou", "Tu", "Dui", "Xi", "Weng", "Cang", "Dang", "Hong", "Jie", "Ai", "Liu", "Wu", "Song", "Qiao", "Zi", "Wei", "Beng", "Dian", "Cuo", "Qian", "Yong", "Nie", "Cuo", "Ji", void 0, "Tao", "Song", "Zong", "Jiang", "Liao", "Kang", "Chan", "Die", "Cen", "Ding", "Tu", "Lou", "Zhang", "Zhan", "Zhan", "Ao", "Cao", "Qu", "Qiang", "Zui", "Zui", "Dao", "Dao", "Xi", "Yu", "Bo", "Long", "Xiang", "Ceng", "Bo", "Qin", "Jiao", "Yan", "Lao", "Zhan", "Lin", "Liao", "Liao", "Jin", "Deng", "Duo", "Zun", "Jiao", "Gui", "Yao", "Qiao", "Yao", "Jue", "Zhan", "Yi", "Xue", "Nao", "Ye", "Ye", "Yi", "E", "Xian", "Ji", "Xie", "Ke", "Xi", "Di", "Ao", "Zui", void 0, "Ni", "Rong", "Dao", "Ling", "Za", "Yu", "Yue", "Yin", void 0, "Jie", "Li", "Sui", "Long", "Long", "Dian", "Ying", "Xi", "Ju", "Chan", "Ying", "Kui", "Yan", "Wei", "Nao", "Quan", "Chao", "Cuan", "Luan", "Dian", "Dian", void 0, "Yan", "Yan", "Yan", "Nao", "Yan", "Chuan", "Gui", "Chuan", "Zhou", "Huang", "Jing", "Xun", "Chao", "Chao", "Lie", "Gong", "Zuo", "Qiao", "Ju", "Gong", "Kek", "Wu", "Pwu", "Pwu", "Chai", "Qiu", "Qiu", "Ji", "Yi", "Si", "Ba", "Zhi", "Zhao", "Xiang", "Yi", "Jin", "Xun", "Juan", "Phas", "Xun", "Jin", "Fu"];
const ZL = Object.freeze(LL);
const SL = ["Za", "Bi", "Shi", "Bu", "Ding", "Shuai", "Fan", "Nie", "Shi", "Fen", "Pa", "Zhi", "Xi", "Hu", "Dan", "Wei", "Zhang", "Tang", "Dai", "Ma", "Pei", "Pa", "Tie", "Fu", "Lian", "Zhi", "Zhou", "Bo", "Zhi", "Di", "Mo", "Yi", "Yi", "Ping", "Qia", "Juan", "Ru", "Shuai", "Dai", "Zheng", "Shui", "Qiao", "Zhen", "Shi", "Qun", "Xi", "Bang", "Dai", "Gui", "Chou", "Ping", "Zhang", "Sha", "Wan", "Dai", "Wei", "Chang", "Sha", "Qi", "Ze", "Guo", "Mao", "Du", "Hou", "Zheng", "Xu", "Mi", "Wei", "Wo", "Fu", "Yi", "Bang", "Ping", "Tazuna", "Gong", "Pan", "Huang", "Dao", "Mi", "Jia", "Teng", "Hui", "Zhong", "Shan", "Man", "Mu", "Biao", "Guo", "Ze", "Mu", "Bang", "Zhang", "Jiong", "Chan", "Fu", "Zhi", "Hu", "Fan", "Chuang", "Bi", "Hei", void 0, "Mi", "Qiao", "Chan", "Fen", "Meng", "Bang", "Chou", "Mie", "Chu", "Jie", "Xian", "Lan", "Gan", "Ping", "Nian", "Qian", "Bing", "Bing", "Xing", "Gan", "Yao", "Huan", "You", "You", "Ji", "Guang", "Pi", "Ting", "Ze", "Guang", "Zhuang", "Mo", "Qing", "Bi", "Qin", "Dun", "Chuang", "Gui", "Ya", "Bai", "Jie", "Xu", "Lu", "Wu", void 0, "Ku", "Ying", "Di", "Pao", "Dian", "Ya", "Miao", "Geng", "Ci", "Fu", "Tong", "Pang", "Fei", "Xiang", "Yi", "Zhi", "Tiao", "Zhi", "Xiu", "Du", "Zuo", "Xiao", "Tu", "Gui", "Ku", "Pang", "Ting", "You", "Bu", "Ding", "Cheng", "Lai", "Bei", "Ji", "An", "Shu", "Kang", "Yong", "Tuo", "Song", "Shu", "Qing", "Yu", "Yu", "Miao", "Sou", "Ce", "Xiang", "Fei", "Jiu", "He", "Hui", "Liu", "Sha", "Lian", "Lang", "Sou", "Jian", "Pou", "Qing", "Jiu", "Jiu", "Qin", "Ao", "Kuo", "Lou", "Yin", "Liao", "Dai", "Lu", "Yi", "Chu", "Chan", "Tu", "Si", "Xin", "Miao", "Chang", "Wu", "Fei", "Guang", "Koc", "Kuai", "Bi", "Qiang", "Xie", "Lin", "Lin", "Liao", "Lu", void 0, "Ying", "Xian", "Ting", "Yong", "Li", "Ting", "Yin", "Xun", "Yan", "Ting", "Di", "Po", "Jian", "Hui", "Nai", "Hui", "Gong", "Nian"];
const JL = Object.freeze(SL);
const CL = ["Kai", "Bian", "Yi", "Qi", "Nong", "Fen", "Ju", "Yan", "Yi", "Zang", "Bi", "Yi", "Yi", "Er", "San", "Shi", "Er", "Shi", "Shi", "Gong", "Diao", "Yin", "Hu", "Fu", "Hong", "Wu", "Tui", "Chi", "Jiang", "Ba", "Shen", "Di", "Zhang", "Jue", "Tao", "Fu", "Di", "Mi", "Xian", "Hu", "Chao", "Nu", "Jing", "Zhen", "Yi", "Mi", "Quan", "Wan", "Shao", "Ruo", "Xuan", "Jing", "Dun", "Zhang", "Jiang", "Qiang", "Peng", "Dan", "Qiang", "Bi", "Bi", "She", "Dan", "Jian", "Gou", "Sei", "Fa", "Bi", "Kou", "Nagi", "Bie", "Xiao", "Dan", "Kuo", "Qiang", "Hong", "Mi", "Kuo", "Wan", "Jue", "Ji", "Ji", "Gui", "Dang", "Lu", "Lu", "Tuan", "Hui", "Zhi", "Hui", "Hui", "Yi", "Yi", "Yi", "Yi", "Huo", "Huo", "Shan", "Xing", "Wen", "Tong", "Yan", "Yan", "Yu", "Chi", "Cai", "Biao", "Diao", "Bin", "Peng", "Yong", "Piao", "Zhang", "Ying", "Chi", "Chi", "Zhuo", "Tuo", "Ji", "Pang", "Zhong", "Yi", "Wang", "Che", "Bi", "Chi", "Ling", "Fu", "Wang", "Zheng", "Cu", "Wang", "Jing", "Dai", "Xi", "Xun", "Hen", "Yang", "Huai", "Lu", "Hou", "Wa", "Cheng", "Zhi", "Xu", "Jing", "Tu", "Cong", void 0, "Lai", "Cong", "De", "Pai", "Xi", void 0, "Qi", "Chang", "Zhi", "Cong", "Zhou", "Lai", "Yu", "Xie", "Jie", "Jian", "Chi", "Jia", "Bian", "Huang", "Fu", "Xun", "Wei", "Pang", "Yao", "Wei", "Xi", "Zheng", "Piao", "Chi", "De", "Zheng", "Zheng", "Bie", "De", "Chong", "Che", "Jiao", "Wei", "Jiao", "Hui", "Mei", "Long", "Xiang", "Bao", "Qu", "Xin", "Shu", "Bi", "Yi", "Le", "Ren", "Dao", "Ding", "Gai", "Ji", "Ren", "Ren", "Chan", "Tan", "Te", "Te", "Gan", "Qi", "Shi", "Cun", "Zhi", "Wang", "Mang", "Xi", "Fan", "Ying", "Tian", "Min", "Min", "Zhong", "Chong", "Wu", "Ji", "Wu", "Xi", "Ye", "You", "Wan", "Cong", "Zhong", "Kuai", "Yu", "Bian", "Zhi", "Qi", "Cui", "Chen", "Tai", "Tun", "Qian", "Nian", "Hun", "Xiong", "Niu", "Wang", "Xian", "Xin", "Kang", "Hu", "Kai", "Fen"];
const XL = Object.freeze(CL);
const HL = ["Huai", "Tai", "Song", "Wu", "Ou", "Chang", "Chuang", "Ju", "Yi", "Bao", "Chao", "Min", "Pei", "Zuo", "Zen", "Yang", "Kou", "Ban", "Nu", "Nao", "Zheng", "Pa", "Bu", "Tie", "Gu", "Hu", "Ju", "Da", "Lian", "Si", "Chou", "Di", "Dai", "Yi", "Tu", "You", "Fu", "Ji", "Peng", "Xing", "Yuan", "Ni", "Guai", "Fu", "Xi", "Bi", "You", "Qie", "Xuan", "Cong", "Bing", "Huang", "Xu", "Chu", "Pi", "Xi", "Xi", "Tan", "Koraeru", "Zong", "Dui", void 0, "Ki", "Yi", "Chi", "Ren", "Xun", "Shi", "Xi", "Lao", "Heng", "Kuang", "Mu", "Zhi", "Xie", "Lian", "Tiao", "Huang", "Die", "Hao", "Kong", "Gui", "Heng", "Xi", "Xiao", "Shu", "S", "Kua", "Qiu", "Yang", "Hui", "Hui", "Chi", "Jia", "Yi", "Xiong", "Guai", "Lin", "Hui", "Zi", "Xu", "Chi", "Xiang", "Nu", "Hen", "En", "Ke", "Tong", "Tian", "Gong", "Quan", "Xi", "Qia", "Yue", "Peng", "Ken", "De", "Hui", "E", "Kyuu", "Tong", "Yan", "Kai", "Ce", "Nao", "Yun", "Mang", "Yong", "Yong", "Yuan", "Pi", "Kun", "Qiao", "Yue", "Yu", "Yu", "Jie", "Xi", "Zhe", "Lin", "Ti", "Han", "Hao", "Qie", "Ti", "Bu", "Yi", "Qian", "Hui", "Xi", "Bei", "Man", "Yi", "Heng", "Song", "Quan", "Cheng", "Hui", "Wu", "Wu", "You", "Li", "Liang", "Huan", "Cong", "Yi", "Yue", "Li", "Nin", "Nao", "E", "Que", "Xuan", "Qian", "Wu", "Min", "Cong", "Fei", "Bei", "Duo", "Cui", "Chang", "Men", "Li", "Ji", "Guan", "Guan", "Xing", "Dao", "Qi", "Kong", "Tian", "Lun", "Xi", "Kan", "Kun", "Ni", "Qing", "Chou", "Dun", "Guo", "Chan", "Liang", "Wan", "Yuan", "Jin", "Ji", "Lin", "Yu", "Huo", "He", "Quan", "Tan", "Ti", "Ti", "Nie", "Wang", "Chuo", "Bu", "Hun", "Xi", "Tang", "Xin", "Wei", "Hui", "E", "Rui", "Zong", "Jian", "Yong", "Dian", "Ju", "Can", "Cheng", "De", "Bei", "Qie", "Can", "Dan", "Guan", "Duo", "Nao", "Yun", "Xiang", "Zhui", "Die", "Huang", "Chun", "Qiong", "Re", "Xing", "Ce", "Bian", "Hun", "Zong", "Ti"];
const DL = Object.freeze(HL);
const TL = ["Qiao", "Chou", "Bei", "Xuan", "Wei", "Ge", "Qian", "Wei", "Yu", "Yu", "Bi", "Xuan", "Huan", "Min", "Bi", "Yi", "Mian", "Yong", "Kai", "Dang", "Yin", "E", "Chen", "Mou", "Ke", "Ke", "Yu", "Ai", "Qie", "Yan", "Nuo", "Gan", "Yun", "Zong", "Sai", "Leng", "Fen", void 0, "Kui", "Kui", "Que", "Gong", "Yun", "Su", "Su", "Qi", "Yao", "Song", "Huang", "Ji", "Gu", "Ju", "Chuang", "Ni", "Xie", "Kai", "Zheng", "Yong", "Cao", "Sun", "Shen", "Bo", "Kai", "Yuan", "Xie", "Hun", "Yong", "Yang", "Li", "Sao", "Tao", "Yin", "Ci", "Xu", "Qian", "Tai", "Huang", "Yun", "Shen", "Ming", void 0, "She", "Cong", "Piao", "Mo", "Mu", "Guo", "Chi", "Can", "Can", "Can", "Cui", "Min", "Te", "Zhang", "Tong", "Ao", "Shuang", "Man", "Guan", "Que", "Zao", "Jiu", "Hui", "Kai", "Lian", "Ou", "Song", "Jin", "Yin", "Lu", "Shang", "Wei", "Tuan", "Man", "Qian", "She", "Yong", "Qing", "Kang", "Di", "Zhi", "Lou", "Juan", "Qi", "Qi", "Yu", "Ping", "Liao", "Cong", "You", "Chong", "Zhi", "Tong", "Cheng", "Qi", "Qu", "Peng", "Bei", "Bie", "Chun", "Jiao", "Zeng", "Chi", "Lian", "Ping", "Kui", "Hui", "Qiao", "Cheng", "Yin", "Yin", "Xi", "Xi", "Dan", "Tan", "Duo", "Dui", "Dui", "Su", "Jue", "Ce", "Xiao", "Fan", "Fen", "Lao", "Lao", "Chong", "Han", "Qi", "Xian", "Min", "Jing", "Liao", "Wu", "Can", "Jue", "Cu", "Xian", "Tan", "Sheng", "Pi", "Yi", "Chu", "Xian", "Nao", "Dan", "Tan", "Jing", "Song", "Han", "Jiao", "Wai", "Huan", "Dong", "Qin", "Qin", "Qu", "Cao", "Ken", "Xie", "Ying", "Ao", "Mao", "Yi", "Lin", "Se", "Jun", "Huai", "Men", "Lan", "Ai", "Lin", "Yan", "Gua", "Xia", "Chi", "Yu", "Yin", "Dai", "Meng", "Ai", "Meng", "Dui", "Qi", "Mo", "Lan", "Men", "Chou", "Zhi", "Nuo", "Nuo", "Yan", "Yang", "Bo", "Zhi", "Kuang", "Kuang", "You", "Fu", "Liu", "Mie", "Cheng", void 0, "Chan", "Meng", "Lan", "Huai", "Xuan", "Rang", "Chan", "Ji", "Ju", "Huan", "She", "Yi"];
const BL = Object.freeze(TL);
const QL = ["Lian", "Nan", "Mi", "Tang", "Jue", "Gang", "Gang", "Gang", "Ge", "Yue", "Wu", "Jian", "Xu", "Shu", "Rong", "Xi", "Cheng", "Wo", "Jie", "Ge", "Jian", "Qiang", "Huo", "Qiang", "Zhan", "Dong", "Qi", "Jia", "Die", "Zei", "Jia", "Ji", "Shi", "Kan", "Ji", "Kui", "Gai", "Deng", "Zhan", "Chuang", "Ge", "Jian", "Jie", "Yu", "Jian", "Yan", "Lu", "Xi", "Zhan", "Xi", "Xi", "Chuo", "Dai", "Qu", "Hu", "Hu", "Hu", "E", "Shi", "Li", "Mao", "Hu", "Li", "Fang", "Suo", "Bian", "Dian", "Jiong", "Shang", "Yi", "Yi", "Shan", "Hu", "Fei", "Yan", "Shou", "T", "Cai", "Zha", "Qiu", "Le", "Bu", "Ba", "Da", "Reng", "Fu", "Hameru", "Zai", "Tuo", "Zhang", "Diao", "Kang", "Yu", "Ku", "Han", "Shen", "Cha", "Yi", "Gu", "Kou", "Wu", "Tuo", "Qian", "Zhi", "Ren", "Kuo", "Men", "Sao", "Yang", "Niu", "Ban", "Che", "Rao", "Xi", "Qian", "Ban", "Jia", "Yu", "Fu", "Ao", "Xi", "Pi", "Zhi", "Zi", "E", "Dun", "Zhao", "Cheng", "Ji", "Yan", "Kuang", "Bian", "Chao", "Ju", "Wen", "Hu", "Yue", "Jue", "Ba", "Qin", "Zhen", "Zheng", "Yun", "Wan", "Nu", "Yi", "Shu", "Zhua", "Pou", "Tou", "Dou", "Kang", "Zhe", "Pou", "Fu", "Pao", "Ba", "Ao", "Ze", "Tuan", "Kou", "Lun", "Qiang", void 0, "Hu", "Bao", "Bing", "Zhi", "Peng", "Tan", "Pu", "Pi", "Tai", "Yao", "Zhen", "Zha", "Yang", "Bao", "He", "Ni", "Yi", "Di", "Chi", "Pi", "Za", "Mo", "Mo", "Shen", "Ya", "Chou", "Qu", "Min", "Chu", "Jia", "Fu", "Zhan", "Zhu", "Dan", "Chai", "Mu", "Nian", "La", "Fu", "Pao", "Ban", "Pai", "Ling", "Na", "Guai", "Qian", "Ju", "Tuo", "Ba", "Tuo", "Tuo", "Ao", "Ju", "Zhuo", "Pan", "Zhao", "Bai", "Bai", "Di", "Ni", "Ju", "Kuo", "Long", "Jian", void 0, "Yong", "Lan", "Ning", "Bo", "Ze", "Qian", "Hen", "Gua", "Shi", "Jie", "Zheng", "Nin", "Gong", "Gong", "Quan", "Shuan", "Cun", "Zan", "Kao", "Chi", "Xie", "Ce", "Hui", "Pin", "Zhuai", "Shi", "Na"];
const ML = Object.freeze(QL);
const GL = ["Bo", "Chi", "Gua", "Zhi", "Kuo", "Duo", "Duo", "Zhi", "Qie", "An", "Nong", "Zhen", "Ge", "Jiao", "Ku", "Dong", "Ru", "Tiao", "Lie", "Zha", "Lu", "Die", "Wa", "Jue", "Mushiru", "Ju", "Zhi", "Luan", "Ya", "Zhua", "Ta", "Xie", "Nao", "Dang", "Jiao", "Zheng", "Ji", "Hui", "Xun", "Ku", "Ai", "Tuo", "Nuo", "Cuo", "Bo", "Geng", "Ti", "Zhen", "Cheng", "Suo", "Suo", "Keng", "Mei", "Long", "Ju", "Peng", "Jian", "Yi", "Ting", "Shan", "Nuo", "Wan", "Xie", "Cha", "Feng", "Jiao", "Wu", "Jun", "Jiu", "Tong", "Kun", "Huo", "Tu", "Zhuo", "Pou", "Le", "Ba", "Han", "Shao", "Nie", "Juan", "Ze", "Song", "Ye", "Jue", "Bu", "Huan", "Bu", "Zun", "Yi", "Zhai", "Lu", "Sou", "Tuo", "Lao", "Sun", "Bang", "Jian", "Huan", "Dao", void 0, "Wan", "Qin", "Peng", "She", "Lie", "Min", "Men", "Fu", "Bai", "Ju", "Dao", "Wo", "Ai", "Juan", "Yue", "Zong", "Chen", "Chui", "Jie", "Tu", "Ben", "Na", "Nian", "Nuo", "Zu", "Wo", "Xi", "Xian", "Cheng", "Dian", "Sao", "Lun", "Qing", "Gang", "Duo", "Shou", "Diao", "Pou", "Di", "Zhang", "Gun", "Ji", "Tao", "Qia", "Qi", "Pai", "Shu", "Qian", "Ling", "Yi", "Ya", "Jue", "Zheng", "Liang", "Gua", "Yi", "Huo", "Shan", "Zheng", "Lue", "Cai", "Tan", "Che", "Bing", "Jie", "Ti", "Kong", "Tui", "Yan", "Cuo", "Zou", "Ju", "Tian", "Qian", "Ken", "Bai", "Shou", "Jie", "Lu", "Guo", "Haba", void 0, "Zhi", "Dan", "Mang", "Xian", "Sao", "Guan", "Peng", "Yuan", "Nuo", "Jian", "Zhen", "Jiu", "Jian", "Yu", "Yan", "Kui", "Nan", "Hong", "Rou", "Pi", "Wei", "Sai", "Zou", "Xuan", "Miao", "Ti", "Nie", "Cha", "Shi", "Zong", "Zhen", "Yi", "Shun", "Heng", "Bian", "Yang", "Huan", "Yan", "Zuan", "An", "Xu", "Ya", "Wo", "Ke", "Chuai", "Ji", "Ti", "La", "La", "Cheng", "Kai", "Jiu", "Jiu", "Tu", "Jie", "Hui", "Geng", "Chong", "Shuo", "She", "Xie", "Yuan", "Qian", "Ye", "Cha", "Zha", "Bei", "Yao", void 0, void 0, "Lan", "Wen", "Qin"];
const NL = Object.freeze(GL);
const xL = ["Chan", "Ge", "Lou", "Zong", "Geng", "Jiao", "Gou", "Qin", "Yong", "Que", "Chou", "Chi", "Zhan", "Sun", "Sun", "Bo", "Chu", "Rong", "Beng", "Cuo", "Sao", "Ke", "Yao", "Dao", "Zhi", "Nu", "Xie", "Jian", "Sou", "Qiu", "Gao", "Xian", "Shuo", "Sang", "Jin", "Mie", "E", "Chui", "Nuo", "Shan", "Ta", "Jie", "Tang", "Pan", "Ban", "Da", "Li", "Tao", "Hu", "Zhi", "Wa", "Xia", "Qian", "Wen", "Qiang", "Tian", "Zhen", "E", "Xi", "Nuo", "Quan", "Cha", "Zha", "Ge", "Wu", "En", "She", "Kang", "She", "Shu", "Bai", "Yao", "Bin", "Sou", "Tan", "Sa", "Chan", "Suo", "Liao", "Chong", "Chuang", "Guo", "Bing", "Feng", "Shuai", "Di", "Qi", "Sou", "Zhai", "Lian", "Tang", "Chi", "Guan", "Lu", "Luo", "Lou", "Zong", "Gai", "Hu", "Zha", "Chuang", "Tang", "Hua", "Cui", "Nai", "Mo", "Jiang", "Gui", "Ying", "Zhi", "Ao", "Zhi", "Nie", "Man", "Shan", "Kou", "Shu", "Suo", "Tuan", "Jiao", "Mo", "Mo", "Zhe", "Xian", "Keng", "Piao", "Jiang", "Yin", "Gou", "Qian", "Lue", "Ji", "Ying", "Jue", "Pie", "Pie", "Lao", "Dun", "Xian", "Ruan", "Kui", "Zan", "Yi", "Xun", "Cheng", "Cheng", "Sa", "Nao", "Heng", "Si", "Qian", "Huang", "Da", "Zun", "Nian", "Lin", "Zheng", "Hui", "Zhuang", "Jiao", "Ji", "Cao", "Dan", "Dan", "Che", "Bo", "Che", "Jue", "Xiao", "Liao", "Ben", "Fu", "Qiao", "Bo", "Cuo", "Zhuo", "Zhuan", "Tuo", "Pu", "Qin", "Dun", "Nian", void 0, "Xie", "Lu", "Jiao", "Cuan", "Ta", "Han", "Qiao", "Zhua", "Jian", "Gan", "Yong", "Lei", "Kuo", "Lu", "Shan", "Zhuo", "Ze", "Pu", "Chuo", "Ji", "Dang", "Suo", "Cao", "Qing", "Jing", "Huan", "Jie", "Qin", "Kuai", "Dan", "Xi", "Ge", "Pi", "Bo", "Ao", "Ju", "Ye", void 0, "Mang", "Sou", "Mi", "Ji", "Tai", "Zhuo", "Dao", "Xing", "Lan", "Ca", "Ju", "Ye", "Ru", "Ye", "Ye", "Ni", "Hu", "Ji", "Bin", "Ning", "Ge", "Zhi", "Jie", "Kuo", "Mo", "Jian", "Xie", "Lie", "Tan", "Bai", "Sou", "Lu", "Lue", "Rao", "Zhi"];
const WL = Object.freeze(xL);
const PL = ["Pan", "Yang", "Lei", "Sa", "Shu", "Zan", "Nian", "Xian", "Jun", "Huo", "Li", "La", "Han", "Ying", "Lu", "Long", "Qian", "Qian", "Zan", "Qian", "Lan", "San", "Ying", "Mei", "Rang", "Chan", void 0, "Cuan", "Xi", "She", "Luo", "Jun", "Mi", "Li", "Zan", "Luan", "Tan", "Zuan", "Li", "Dian", "Wa", "Dang", "Jiao", "Jue", "Lan", "Li", "Nang", "Zhi", "Gui", "Gui", "Qi", "Xin", "Pu", "Sui", "Shou", "Kao", "You", "Gai", "Yi", "Gong", "Gan", "Ban", "Fang", "Zheng", "Bo", "Dian", "Kou", "Min", "Wu", "Gu", "He", "Ce", "Xiao", "Mi", "Chu", "Ge", "Di", "Xu", "Jiao", "Min", "Chen", "Jiu", "Zhen", "Duo", "Yu", "Chi", "Ao", "Bai", "Xu", "Jiao", "Duo", "Lian", "Nie", "Bi", "Chang", "Dian", "Duo", "Yi", "Gan", "San", "Ke", "Yan", "Dun", "Qi", "Dou", "Xiao", "Duo", "Jiao", "Jing", "Yang", "Xia", "Min", "Shu", "Ai", "Qiao", "Ai", "Zheng", "Di", "Zhen", "Fu", "Shu", "Liao", "Qu", "Xiong", "Xi", "Jiao", "Sen", "Jiao", "Zhuo", "Yi", "Lian", "Bi", "Li", "Xiao", "Xiao", "Wen", "Xue", "Qi", "Qi", "Zhai", "Bin", "Jue", "Zhai", void 0, "Fei", "Ban", "Ban", "Lan", "Yu", "Lan", "Wei", "Dou", "Sheng", "Liao", "Jia", "Hu", "Xie", "Jia", "Yu", "Zhen", "Jiao", "Wo", "Tou", "Chu", "Jin", "Chi", "Yin", "Fu", "Qiang", "Zhan", "Qu", "Zhuo", "Zhan", "Duan", "Zhuo", "Si", "Xin", "Zhuo", "Zhuo", "Qin", "Lin", "Zhuo", "Chu", "Duan", "Zhu", "Fang", "Xie", "Hang", "Yu", "Shi", "Pei", "You", "Mye", "Pang", "Qi", "Zhan", "Mao", "Lu", "Pei", "Pi", "Liu", "Fu", "Fang", "Xuan", "Jing", "Jing", "Ni", "Zu", "Zhao", "Yi", "Liu", "Shao", "Jian", "Es", "Yi", "Qi", "Zhi", "Fan", "Piao", "Fan", "Zhan", "Guai", "Sui", "Yu", "Wu", "Ji", "Ji", "Ji", "Huo", "Ri", "Dan", "Jiu", "Zhi", "Zao", "Xie", "Tiao", "Xun", "Xu", "Xu", "Xu", "Gan", "Han", "Tai", "Di", "Xu", "Chan", "Shi", "Kuang", "Yang", "Shi", "Wang", "Min", "Min", "Tun", "Chun", "Wu"];
const FL = Object.freeze(PL);
const KL = ["Yun", "Bei", "Ang", "Ze", "Ban", "Jie", "Kun", "Sheng", "Hu", "Fang", "Hao", "Gui", "Chang", "Xuan", "Ming", "Hun", "Fen", "Qin", "Hu", "Yi", "Xi", "Xin", "Yan", "Ze", "Fang", "Tan", "Shen", "Ju", "Yang", "Zan", "Bing", "Xing", "Ying", "Xuan", "Pei", "Zhen", "Ling", "Chun", "Hao", "Mei", "Zuo", "Mo", "Bian", "Xu", "Hun", "Zhao", "Zong", "Shi", "Shi", "Yu", "Fei", "Die", "Mao", "Ni", "Chang", "Wen", "Dong", "Ai", "Bing", "Ang", "Zhou", "Long", "Xian", "Kuang", "Tiao", "Chao", "Shi", "Huang", "Huang", "Xuan", "Kui", "Xu", "Jiao", "Jin", "Zhi", "Jin", "Shang", "Tong", "Hong", "Yan", "Gai", "Xiang", "Shai", "Xiao", "Ye", "Yun", "Hui", "Han", "Han", "Jun", "Wan", "Xian", "Kun", "Zhou", "Xi", "Cheng", "Sheng", "Bu", "Zhe", "Zhe", "Wu", "Han", "Hui", "Hao", "Chen", "Wan", "Tian", "Zhuo", "Zui", "Zhou", "Pu", "Jing", "Xi", "Shan", "Yi", "Xi", "Qing", "Qi", "Jing", "Gui", "Zhen", "Yi", "Zhi", "An", "Wan", "Lin", "Liang", "Chang", "Wang", "Xiao", "Zan", "Hi", "Xuan", "Xuan", "Yi", "Xia", "Yun", "Hui", "Fu", "Min", "Kui", "He", "Ying", "Du", "Wei", "Shu", "Qing", "Mao", "Nan", "Jian", "Nuan", "An", "Yang", "Chun", "Yao", "Suo", "Jin", "Ming", "Jiao", "Kai", "Gao", "Weng", "Chang", "Qi", "Hao", "Yan", "Li", "Ai", "Ji", "Gui", "Men", "Zan", "Xie", "Hao", "Mu", "Mo", "Cong", "Ni", "Zhang", "Hui", "Bao", "Han", "Xuan", "Chuan", "Liao", "Xian", "Dan", "Jing", "Pie", "Lin", "Tun", "Xi", "Yi", "Ji", "Huang", "Tai", "Ye", "Ye", "Li", "Tan", "Tong", "Xiao", "Fei", "Qin", "Zhao", "Hao", "Yi", "Xiang", "Xing", "Sen", "Jiao", "Bao", "Jing", "Yian", "Ai", "Ye", "Ru", "Shu", "Meng", "Xun", "Yao", "Pu", "Li", "Chen", "Kuang", "Die", void 0, "Yan", "Huo", "Lu", "Xi", "Rong", "Long", "Nang", "Luo", "Luan", "Shai", "Tang", "Yan", "Chu", "Yue", "Yue", "Qu", "Yi", "Geng", "Ye", "Hu", "He", "Shu", "Cao", "Cao", "Noboru", "Man", "Ceng", "Ceng", "Ti"];
const RL = Object.freeze(KL);
const AL = ["Zui", "Can", "Xu", "Hui", "Yin", "Qie", "Fen", "Pi", "Yue", "You", "Ruan", "Peng", "Ban", "Fu", "Ling", "Fei", "Qu", void 0, "Nu", "Tiao", "Shuo", "Zhen", "Lang", "Lang", "Juan", "Ming", "Huang", "Wang", "Tun", "Zhao", "Ji", "Qi", "Ying", "Zong", "Wang", "Tong", "Lang", void 0, "Meng", "Long", "Mu", "Deng", "Wei", "Mo", "Ben", "Zha", "Zhu", "Shu", void 0, "Zhu", "Ren", "Ba", "Po", "Duo", "Duo", "Dao", "Li", "Qiu", "Ji", "Jiu", "Bi", "Xiu", "Ting", "Ci", "Sha", "Eburi", "Za", "Quan", "Qian", "Yu", "Gan", "Wu", "Cha", "Shan", "Xun", "Fan", "Wu", "Zi", "Li", "Xing", "Cai", "Cun", "Ren", "Shao", "Tuo", "Di", "Zhang", "Mang", "Chi", "Yi", "Gu", "Gong", "Du", "Yi", "Qi", "Shu", "Gang", "Tiao", "Moku", "Soma", "Tochi", "Lai", "Sugi", "Mang", "Yang", "Ma", "Miao", "Si", "Yuan", "Hang", "Fei", "Bei", "Jie", "Dong", "Gao", "Yao", "Xian", "Chu", "Qun", "Pa", "Shu", "Hua", "Xin", "Chou", "Zhu", "Chou", "Song", "Ban", "Song", "Ji", "Yue", "Jin", "Gou", "Ji", "Mao", "Pi", "Bi", "Wang", "Ang", "Fang", "Fen", "Yi", "Fu", "Nan", "Xi", "Hu", "Ya", "Dou", "Xun", "Zhen", "Yao", "Lin", "Rui", "E", "Mei", "Zhao", "Guo", "Zhi", "Cong", "Yun", "Waku", "Dou", "Shu", "Zao", void 0, "Li", "Haze", "Jian", "Cheng", "Matsu", "Qiang", "Feng", "Nan", "Xiao", "Xian", "Ku", "Ping", "Yi", "Xi", "Zhi", "Guai", "Xiao", "Jia", "Jia", "Gou", "Fu", "Mo", "Yi", "Ye", "Ye", "Shi", "Nie", "Bi", "Duo", "Yi", "Ling", "Bing", "Ni", "La", "He", "Pan", "Fan", "Zhong", "Dai", "Ci", "Yang", "Fu", "Bo", "Mou", "Gan", "Qi", "Ran", "Rou", "Mao", "Zhao", "Song", "Zhe", "Xia", "You", "Shen", "Ju", "Tuo", "Zuo", "Nan", "Ning", "Yong", "Di", "Zhi", "Zha", "Cha", "Dan", "Gu", "Pu", "Jiu", "Ao", "Fu", "Jian", "Bo", "Duo", "Ke", "Nai", "Zhu", "Bi", "Liu", "Chai", "Zha", "Si", "Zhu", "Pei", "Shi", "Guai", "Cha", "Yao", "Jue", "Jiu", "Shi"];
const _L = Object.freeze(AL);
const OL = ["Zhi", "Liu", "Mei", "Hoy", "Rong", "Zha", void 0, "Biao", "Zhan", "Jie", "Long", "Dong", "Lu", "Sayng", "Li", "Lan", "Yong", "Shu", "Xun", "Shuan", "Qi", "Zhen", "Qi", "Li", "Yi", "Xiang", "Zhen", "Li", "Su", "Gua", "Kan", "Bing", "Ren", "Xiao", "Bo", "Ren", "Bing", "Zi", "Chou", "Yi", "Jie", "Xu", "Zhu", "Jian", "Zui", "Er", "Er", "You", "Fa", "Gong", "Kao", "Lao", "Zhan", "Li", "Yin", "Yang", "He", "Gen", "Zhi", "Chi", "Ge", "Zai", "Luan", "Fu", "Jie", "Hang", "Gui", "Tao", "Guang", "Wei", "Kuang", "Ru", "An", "An", "Juan", "Yi", "Zhuo", "Ku", "Zhi", "Qiong", "Tong", "Sang", "Sang", "Huan", "Jie", "Jiu", "Xue", "Duo", "Zhui", "Yu", "Zan", "Kasei", "Ying", "Masu", void 0, "Zhan", "Ya", "Nao", "Zhen", "Dang", "Qi", "Qiao", "Hua", "Kuai", "Jiang", "Zhuang", "Xun", "Suo", "Sha", "Zhen", "Bei", "Ting", "Gua", "Jing", "Bo", "Ben", "Fu", "Rui", "Tong", "Jue", "Xi", "Lang", "Liu", "Feng", "Qi", "Wen", "Jun", "Gan", "Cu", "Liang", "Qiu", "Ting", "You", "Mei", "Bang", "Long", "Peng", "Zhuang", "Di", "Xuan", "Tu", "Zao", "Ao", "Gu", "Bi", "Di", "Han", "Zi", "Zhi", "Ren", "Bei", "Geng", "Jian", "Huan", "Wan", "Nuo", "Jia", "Tiao", "Ji", "Xiao", "Lu", "Huan", "Shao", "Cen", "Fen", "Song", "Meng", "Wu", "Li", "Li", "Dou", "Cen", "Ying", "Suo", "Ju", "Ti", "Jie", "Kun", "Zhuo", "Shu", "Chan", "Fan", "Wei", "Jing", "Li", "Bing", "Fumoto", "Shikimi", "Tao", "Zhi", "Lai", "Lian", "Jian", "Zhuo", "Ling", "Li", "Qi", "Bing", "Zhun", "Cong", "Qian", "Mian", "Qi", "Qi", "Cai", "Gun", "Chan", "Te", "Fei", "Pai", "Bang", "Pou", "Hun", "Zong", "Cheng", "Zao", "Ji", "Li", "Peng", "Yu", "Yu", "Gu", "Hun", "Dong", "Tang", "Gang", "Wang", "Di", "Xi", "Fan", "Cheng", "Zhan", "Qi", "Yuan", "Yan", "Yu", "Quan", "Yi", "Sen", "Ren", "Chui", "Leng", "Qi", "Zhuo", "Fu", "Ke", "Lai", "Zou", "Zou", "Zhuo", "Guan", "Fen", "Fen", "Chen", "Qiong", "Nie"];
const zL = Object.freeze(OL);
const EL = ["Wan", "Guo", "Lu", "Hao", "Jie", "Yi", "Chou", "Ju", "Ju", "Cheng", "Zuo", "Liang", "Qiang", "Zhi", "Zhui", "Ya", "Ju", "Bei", "Jiao", "Zhuo", "Zi", "Bin", "Peng", "Ding", "Chu", "Chang", "Kunugi", "Momiji", "Jian", "Gui", "Xi", "Du", "Qian", "Kunugi", "Soko", "Shide", "Luo", "Zhi", "Ken", "Myeng", "Tafu", void 0, "Peng", "Zhan", void 0, "Tuo", "Sen", "Duo", "Ye", "Fou", "Wei", "Wei", "Duan", "Jia", "Zong", "Jian", "Yi", "Shen", "Xi", "Yan", "Yan", "Chuan", "Zhan", "Chun", "Yu", "He", "Zha", "Wo", "Pian", "Bi", "Yao", "Huo", "Xu", "Ruo", "Yang", "La", "Yan", "Ben", "Hun", "Kui", "Jie", "Kui", "Si", "Feng", "Xie", "Tuo", "Zhi", "Jian", "Mu", "Mao", "Chu", "Hu", "Hu", "Lian", "Leng", "Ting", "Nan", "Yu", "You", "Mei", "Song", "Xuan", "Xuan", "Ying", "Zhen", "Pian", "Ye", "Ji", "Jie", "Ye", "Chu", "Shun", "Yu", "Cou", "Wei", "Mei", "Di", "Ji", "Jie", "Kai", "Qiu", "Ying", "Rou", "Heng", "Lou", "Le", "Hazou", "Katsura", "Pin", "Muro", "Gai", "Tan", "Lan", "Yun", "Yu", "Chen", "Lu", "Ju", "Sakaki", void 0, "Pi", "Xie", "Jia", "Yi", "Zhan", "Fu", "Nai", "Mi", "Lang", "Rong", "Gu", "Jian", "Ju", "Ta", "Yao", "Zhen", "Bang", "Sha", "Yuan", "Zi", "Ming", "Su", "Jia", "Yao", "Jie", "Huang", "Gan", "Fei", "Zha", "Qian", "Ma", "Sun", "Yuan", "Xie", "Rong", "Shi", "Zhi", "Cui", "Yun", "Ting", "Liu", "Rong", "Tang", "Que", "Zhai", "Si", "Sheng", "Ta", "Ke", "Xi", "Gu", "Qi", "Kao", "Gao", "Sun", "Pan", "Tao", "Ge", "Xun", "Dian", "Nou", "Ji", "Shuo", "Gou", "Chui", "Qiang", "Cha", "Qian", "Huai", "Mei", "Xu", "Gang", "Gao", "Zhuo", "Tuo", "Hashi", "Yang", "Dian", "Jia", "Jian", "Zui", "Kashi", "Ori", "Bin", "Zhu", void 0, "Xi", "Qi", "Lian", "Hui", "Yong", "Qian", "Guo", "Gai", "Gai", "Tuan", "Hua", "Cu", "Sen", "Cui", "Beng", "You", "Hu", "Jiang", "Hu", "Huan", "Kui", "Yi", "Nie", "Gao", "Kang", "Gui", "Gui", "Cao", "Man", "Jin"];
const $L = Object.freeze(EL);
const qL = ["Di", "Zhuang", "Le", "Lang", "Chen", "Cong", "Li", "Xiu", "Qing", "Shuang", "Fan", "Tong", "Guan", "Ji", "Suo", "Lei", "Lu", "Liang", "Mi", "Lou", "Chao", "Su", "Ke", "Shu", "Tang", "Biao", "Lu", "Jiu", "Shu", "Zha", "Shu", "Zhang", "Men", "Mo", "Niao", "Yang", "Tiao", "Peng", "Zhu", "Sha", "Xi", "Quan", "Heng", "Jian", "Cong", void 0, "Hokuso", "Qiang", "Tara", "Ying", "Er", "Xin", "Zhi", "Qiao", "Zui", "Cong", "Pu", "Shu", "Hua", "Kui", "Zhen", "Zun", "Yue", "Zhan", "Xi", "Xun", "Dian", "Fa", "Gan", "Mo", "Wu", "Qiao", "Nao", "Lin", "Liu", "Qiao", "Xian", "Run", "Fan", "Zhan", "Tuo", "Lao", "Yun", "Shun", "Tui", "Cheng", "Tang", "Meng", "Ju", "Cheng", "Su", "Jue", "Jue", "Tan", "Hui", "Ji", "Nuo", "Xiang", "Tuo", "Ning", "Rui", "Zhu", "Chuang", "Zeng", "Fen", "Qiong", "Ran", "Heng", "Cen", "Gu", "Liu", "Lao", "Gao", "Chu", "Zusa", "Nude", "Ca", "San", "Ji", "Dou", "Shou", "Lu", void 0, void 0, "Yuan", "Ta", "Shu", "Jiang", "Tan", "Lin", "Nong", "Yin", "Xi", "Sui", "Shan", "Zui", "Xuan", "Cheng", "Gan", "Ju", "Zui", "Yi", "Qin", "Pu", "Yan", "Lei", "Feng", "Hui", "Dang", "Ji", "Sui", "Bo", "Bi", "Ding", "Chu", "Zhua", "Kuai", "Ji", "Jie", "Jia", "Qing", "Zhe", "Jian", "Qiang", "Dao", "Yi", "Biao", "Song", "She", "Lin", "Kunugi", "Cha", "Meng", "Yin", "Tao", "Tai", "Mian", "Qi", "Toan", "Bin", "Huo", "Ji", "Qian", "Mi", "Ning", "Yi", "Gao", "Jian", "Yin", "Er", "Qing", "Yan", "Qi", "Mi", "Zhao", "Gui", "Chun", "Ji", "Kui", "Po", "Deng", "Chu", void 0, "Mian", "You", "Zhi", "Guang", "Qian", "Lei", "Lei", "Sa", "Lu", "Li", "Cuan", "Lu", "Mie", "Hui", "Ou", "Lu", "Jie", "Gao", "Du", "Yuan", "Li", "Fei", "Zhuo", "Sou", "Lian", "Tamo", "Chu", void 0, "Zhu", "Lu", "Yan", "Li", "Zhu", "Chen", "Jie", "E", "Su", "Huai", "Nie", "Yu", "Long", "Lai", void 0, "Xian", "Kwi", "Ju", "Xiao", "Ling", "Ying", "Jian", "Yin", "You", "Ying"];
const IL = Object.freeze(qL);
const UL = ["Xiang", "Nong", "Bo", "Chan", "Lan", "Ju", "Shuang", "She", "Wei", "Cong", "Quan", "Qu", "Cang", void 0, "Yu", "Luo", "Li", "Zan", "Luan", "Dang", "Jue", "Em", "Lan", "Lan", "Zhu", "Lei", "Li", "Ba", "Nang", "Yu", "Ling", "Tsuki", "Qian", "Ci", "Huan", "Xin", "Yu", "Yu", "Qian", "Ou", "Xu", "Chao", "Chu", "Chi", "Kai", "Yi", "Jue", "Xi", "Xu", "Xia", "Yu", "Kuai", "Lang", "Kuan", "Shuo", "Xi", "Ai", "Yi", "Qi", "Hu", "Chi", "Qin", "Kuan", "Kan", "Kuan", "Kan", "Chuan", "Sha", "Gua", "Yin", "Xin", "Xie", "Yu", "Qian", "Xiao", "Yi", "Ge", "Wu", "Tan", "Jin", "Ou", "Hu", "Ti", "Huan", "Xu", "Pen", "Xi", "Xiao", "Xu", "Xi", "Sen", "Lian", "Chu", "Yi", "Kan", "Yu", "Chuo", "Huan", "Zhi", "Zheng", "Ci", "Bu", "Wu", "Qi", "Bu", "Bu", "Wai", "Ju", "Qian", "Chi", "Se", "Chi", "Se", "Zhong", "Sui", "Sui", "Li", "Cuo", "Yu", "Li", "Gui", "Dai", "Dai", "Si", "Jian", "Zhe", "Mo", "Mo", "Yao", "Mo", "Cu", "Yang", "Tian", "Sheng", "Dai", "Shang", "Xu", "Xun", "Shu", "Can", "Jue", "Piao", "Qia", "Qiu", "Su", "Qing", "Yun", "Lian", "Yi", "Fou", "Zhi", "Ye", "Can", "Hun", "Dan", "Ji", "Ye", "Zhen", "Yun", "Wen", "Chou", "Bin", "Ti", "Jin", "Shang", "Yin", "Diao", "Cu", "Hui", "Cuan", "Yi", "Dan", "Du", "Jiang", "Lian", "Bin", "Du", "Tsukusu", "Jian", "Shu", "Ou", "Duan", "Zhu", "Yin", "Qing", "Yi", "Sha", "Que", "Ke", "Yao", "Jun", "Dian", "Hui", "Hui", "Gu", "Que", "Ji", "Yi", "Ou", "Hui", "Duan", "Yi", "Xiao", "Wu", "Guan", "Mu", "Mei", "Mei", "Ai", "Zuo", "Du", "Yu", "Bi", "Bi", "Bi", "Pi", "Pi", "Bi", "Chan", "Mao", void 0, void 0, "Pu", "Mushiru", "Jia", "Zhan", "Sai", "Mu", "Tuo", "Xun", "Er", "Rong", "Xian", "Ju", "Mu", "Hao", "Qiu", "Dou", "Mushiru", "Tan", "Pei", "Ju", "Duo", "Cui", "Bi", "San", void 0, "Mao", "Sui", "Yu", "Yu", "Tuo", "He", "Jian", "Ta", "San"];
const VL = Object.freeze(UL);
const iZ = ["Lu", "Mu", "Li", "Tong", "Rong", "Chang", "Pu", "Luo", "Zhan", "Sao", "Zhan", "Meng", "Luo", "Qu", "Die", "Shi", "Di", "Min", "Jue", "Mang", "Qi", "Pie", "Nai", "Qi", "Dao", "Xian", "Chuan", "Fen", "Ri", "Nei", void 0, "Fu", "Shen", "Dong", "Qing", "Qi", "Yin", "Xi", "Hai", "Yang", "An", "Ya", "Ke", "Qing", "Ya", "Dong", "Dan", "Lu", "Qing", "Yang", "Yun", "Yun", "Shui", "San", "Zheng", "Bing", "Yong", "Dang", "Shitamizu", "Le", "Ni", "Tun", "Fan", "Gui", "Ting", "Zhi", "Qiu", "Bin", "Ze", "Mian", "Cuan", "Hui", "Diao", "Han", "Cha", "Zhuo", "Chuan", "Wan", "Fan", "Dai", "Xi", "Tuo", "Mang", "Qiu", "Qi", "Shan", "Pai", "Han", "Qian", "Wu", "Wu", "Xun", "Si", "Ru", "Gong", "Jiang", "Chi", "Wu", "Tsuchi", void 0, "Tang", "Zhi", "Chi", "Qian", "Mi", "Yu", "Wang", "Qing", "Jing", "Rui", "Jun", "Hong", "Tai", "Quan", "Ji", "Bian", "Bian", "Gan", "Wen", "Zhong", "Fang", "Xiong", "Jue", "Hang", "Niou", "Qi", "Fen", "Xu", "Xu", "Qin", "Yi", "Wo", "Yun", "Yuan", "Hang", "Yan", "Shen", "Chen", "Dan", "You", "Dun", "Hu", "Huo", "Qie", "Mu", "Rou", "Mei", "Ta", "Mian", "Wu", "Chong", "Tian", "Bi", "Sha", "Zhi", "Pei", "Pan", "Zhui", "Za", "Gou", "Liu", "Mei", "Ze", "Feng", "Ou", "Li", "Lun", "Cang", "Feng", "Wei", "Hu", "Mo", "Mei", "Shu", "Ju", "Zan", "Tuo", "Tuo", "Tuo", "He", "Li", "Mi", "Yi", "Fa", "Fei", "You", "Tian", "Zhi", "Zhao", "Gu", "Zhan", "Yan", "Si", "Kuang", "Jiong", "Ju", "Xie", "Qiu", "Yi", "Jia", "Zhong", "Quan", "Bo", "Hui", "Mi", "Ben", "Zhuo", "Chu", "Le", "You", "Gu", "Hong", "Gan", "Fa", "Mao", "Si", "Hu", "Ping", "Ci", "Fan", "Chi", "Su", "Ning", "Cheng", "Ling", "Pao", "Bo", "Qi", "Si", "Ni", "Ju", "Yue", "Zhu", "Sheng", "Lei", "Xuan", "Xue", "Fu", "Pan", "Min", "Tai", "Yang", "Ji", "Yong", "Guan", "Beng", "Xue", "Long", "Lu", void 0, "Bo", "Xie", "Po", "Ze", "Jing", "Yin"];
const oZ = Object.freeze(iZ);
const eZ = ["Zhou", "Ji", "Yi", "Hui", "Hui", "Zui", "Cheng", "Yin", "Wei", "Hou", "Jian", "Yang", "Lie", "Si", "Ji", "Er", "Xing", "Fu", "Sa", "Suo", "Zhi", "Yin", "Wu", "Xi", "Kao", "Zhu", "Jiang", "Luo", void 0, "An", "Dong", "Yi", "Mou", "Lei", "Yi", "Mi", "Quan", "Jin", "Mo", "Wei", "Xiao", "Xie", "Hong", "Xu", "Shuo", "Kuang", "Tao", "Qie", "Ju", "Er", "Zhou", "Ru", "Ping", "Xun", "Xiong", "Zhi", "Guang", "Huan", "Ming", "Huo", "Wa", "Qia", "Pai", "Wu", "Qu", "Liu", "Yi", "Jia", "Jing", "Qian", "Jiang", "Jiao", "Cheng", "Shi", "Zhuo", "Ce", "Pal", "Kuai", "Ji", "Liu", "Chan", "Hun", "Hu", "Nong", "Xun", "Jin", "Lie", "Qiu", "Wei", "Zhe", "Jun", "Han", "Bang", "Mang", "Zhuo", "You", "Xi", "Bo", "Dou", "Wan", "Hong", "Yi", "Pu", "Ying", "Lan", "Hao", "Lang", "Han", "Li", "Geng", "Fu", "Wu", "Lian", "Chun", "Feng", "Yi", "Yu", "Tong", "Lao", "Hai", "Jin", "Jia", "Chong", "Weng", "Mei", "Sui", "Cheng", "Pei", "Xian", "Shen", "Tu", "Kun", "Pin", "Nie", "Han", "Jing", "Xiao", "She", "Nian", "Tu", "Yong", "Xiao", "Xian", "Ting", "E", "Su", "Tun", "Juan", "Cen", "Ti", "Li", "Shui", "Si", "Lei", "Shui", "Tao", "Du", "Lao", "Lai", "Lian", "Wei", "Wo", "Yun", "Huan", "Di", void 0, "Run", "Jian", "Zhang", "Se", "Fu", "Guan", "Xing", "Shou", "Shuan", "Ya", "Chuo", "Zhang", "Ye", "Kong", "Wo", "Han", "Tuo", "Dong", "He", "Wo", "Ju", "Gan", "Liang", "Hun", "Ta", "Zhuo", "Dian", "Qie", "De", "Juan", "Zi", "Xi", "Yao", "Qi", "Gu", "Guo", "Han", "Lin", "Tang", "Zhou", "Peng", "Hao", "Chang", "Shu", "Qi", "Fang", "Chi", "Lu", "Nao", "Ju", "Tao", "Cong", "Lei", "Zhi", "Peng", "Fei", "Song", "Tian", "Pi", "Dan", "Yu", "Ni", "Yu", "Lu", "Gan", "Mi", "Jing", "Ling", "Lun", "Yin", "Cui", "Qu", "Huai", "Yu", "Nian", "Shen", "Piao", "Chun", "Wa", "Yuan", "Lai", "Hun", "Qing", "Yan", "Qian", "Tian", "Miao", "Zhi", "Yin", "Mi"];
const nZ = Object.freeze(eZ);
const aZ = ["Ben", "Yuan", "Wen", "Re", "Fei", "Qing", "Yuan", "Ke", "Ji", "She", "Yuan", "Shibui", "Lu", "Zi", "Du", void 0, "Jian", "Min", "Pi", "Tani", "Yu", "Yuan", "Shen", "Shen", "Rou", "Huan", "Zhu", "Jian", "Nuan", "Yu", "Qiu", "Ting", "Qu", "Du", "Feng", "Zha", "Bo", "Wo", "Wo", "Di", "Wei", "Wen", "Ru", "Xie", "Ce", "Wei", "Ge", "Gang", "Yan", "Hong", "Xuan", "Mi", "Ke", "Mao", "Ying", "Yan", "You", "Hong", "Miao", "Xing", "Mei", "Zai", "Hun", "Nai", "Kui", "Shi", "E", "Pai", "Mei", "Lian", "Qi", "Qi", "Mei", "Tian", "Cou", "Wei", "Can", "Tuan", "Mian", "Hui", "Mo", "Xu", "Ji", "Pen", "Jian", "Jian", "Hu", "Feng", "Xiang", "Yi", "Yin", "Zhan", "Shi", "Jie", "Cheng", "Huang", "Tan", "Yu", "Bi", "Min", "Shi", "Tu", "Sheng", "Yong", "Qu", "Zhong", "Suei", "Jiu", "Jiao", "Qiou", "Yin", "Tang", "Long", "Huo", "Yuan", "Nan", "Ban", "You", "Quan", "Chui", "Liang", "Chan", "Yan", "Chun", "Nie", "Zi", "Wan", "Shi", "Man", "Ying", "Ratsu", "Kui", void 0, "Jian", "Xu", "Lu", "Gui", "Gai", void 0, void 0, "Po", "Jin", "Gui", "Tang", "Yuan", "Suo", "Yuan", "Lian", "Yao", "Meng", "Zhun", "Sheng", "Ke", "Tai", "Da", "Wa", "Liu", "Gou", "Sao", "Ming", "Zha", "Shi", "Yi", "Lun", "Ma", "Pu", "Wei", "Li", "Cai", "Wu", "Xi", "Wen", "Qiang", "Ze", "Shi", "Su", "Yi", "Zhen", "Sou", "Yun", "Xiu", "Yin", "Rong", "Hun", "Su", "Su", "Ni", "Ta", "Shi", "Ru", "Wei", "Pan", "Chu", "Chu", "Pang", "Weng", "Cang", "Mie", "He", "Dian", "Hao", "Huang", "Xi", "Zi", "Di", "Zhi", "Ying", "Fu", "Jie", "Hua", "Ge", "Zi", "Tao", "Teng", "Sui", "Bi", "Jiao", "Hui", "Gun", "Yin", "Gao", "Long", "Zhi", "Yan", "She", "Man", "Ying", "Chun", "Lu", "Lan", "Luan", void 0, "Bin", "Tan", "Yu", "Sou", "Hu", "Bi", "Biao", "Zhi", "Jiang", "Kou", "Shen", "Shang", "Di", "Mi", "Ao", "Lu", "Hu", "Hu", "You", "Chan", "Fan", "Yong", "Gun", "Man"];
const uZ = Object.freeze(aZ);
const gZ = ["Qing", "Yu", "Piao", "Ji", "Ya", "Jiao", "Qi", "Xi", "Ji", "Lu", "Lu", "Long", "Jin", "Guo", "Cong", "Lou", "Zhi", "Gai", "Qiang", "Li", "Yan", "Cao", "Jiao", "Cong", "Qun", "Tuan", "Ou", "Teng", "Ye", "Xi", "Mi", "Tang", "Mo", "Shang", "Han", "Lian", "Lan", "Wa", "Li", "Qian", "Feng", "Xuan", "Yi", "Man", "Zi", "Mang", "Kang", "Lei", "Peng", "Shu", "Zhang", "Zhang", "Chong", "Xu", "Huan", "Kuo", "Jian", "Yan", "Chuang", "Liao", "Cui", "Ti", "Yang", "Jiang", "Cong", "Ying", "Hong", "Xun", "Shu", "Guan", "Ying", "Xiao", void 0, void 0, "Xu", "Lian", "Zhi", "Wei", "Pi", "Jue", "Jiao", "Po", "Dang", "Hui", "Jie", "Wu", "Pa", "Ji", "Pan", "Gui", "Xiao", "Qian", "Qian", "Xi", "Lu", "Xi", "Xuan", "Dun", "Huang", "Min", "Run", "Su", "Liao", "Zhen", "Zhong", "Yi", "Di", "Wan", "Dan", "Tan", "Chao", "Xun", "Kui", "Yie", "Shao", "Tu", "Zhu", "San", "Hei", "Bi", "Shan", "Chan", "Chan", "Shu", "Tong", "Pu", "Lin", "Wei", "Se", "Se", "Cheng", "Jiong", "Cheng", "Hua", "Jiao", "Lao", "Che", "Gan", "Cun", "Heng", "Si", "Shu", "Peng", "Han", "Yun", "Liu", "Hong", "Fu", "Hao", "He", "Xian", "Jian", "Shan", "Xi", "Oki", void 0, "Lan", void 0, "Yu", "Lin", "Min", "Zao", "Dang", "Wan", "Ze", "Xie", "Yu", "Li", "Shi", "Xue", "Ling", "Man", "Zi", "Yong", "Kuai", "Can", "Lian", "Dian", "Ye", "Ao", "Huan", "Zhen", "Chan", "Man", "Dan", "Dan", "Yi", "Sui", "Pi", "Ju", "Ta", "Qin", "Ji", "Zhuo", "Lian", "Nong", "Guo", "Jin", "Fen", "Se", "Ji", "Sui", "Hui", "Chu", "Ta", "Song", "Ding", void 0, "Zhu", "Lai", "Bin", "Lian", "Mi", "Shi", "Shu", "Mi", "Ning", "Ying", "Ying", "Meng", "Jin", "Qi", "Pi", "Ji", "Hao", "Ru", "Zui", "Wo", "Tao", "Yin", "Yin", "Dui", "Ci", "Huo", "Jing", "Lan", "Jun", "Ai", "Pu", "Zhuo", "Wei", "Bin", "Gu", "Qian", "Xing", "Hama", "Kuo", "Fei", void 0, "Boku", "Jian", "Wei", "Luo", "Zan", "Lu", "Li"];
const dZ = Object.freeze(gZ);
const tZ = ["You", "Yang", "Lu", "Si", "Jie", "Ying", "Du", "Wang", "Hui", "Xie", "Pan", "Shen", "Biao", "Chan", "Mo", "Liu", "Jian", "Pu", "Se", "Cheng", "Gu", "Bin", "Huo", "Xian", "Lu", "Qin", "Han", "Ying", "Yong", "Li", "Jing", "Xiao", "Ying", "Sui", "Wei", "Xie", "Huai", "Hao", "Zhu", "Long", "Lai", "Dui", "Fan", "Hu", "Lai", void 0, void 0, "Ying", "Mi", "Ji", "Lian", "Jian", "Ying", "Fen", "Lin", "Yi", "Jian", "Yue", "Chan", "Dai", "Rang", "Jian", "Lan", "Fan", "Shuang", "Yuan", "Zhuo", "Feng", "She", "Lei", "Lan", "Cong", "Qu", "Yong", "Qian", "Fa", "Guan", "Que", "Yan", "Hao", "Hyeng", "Sa", "Zan", "Luan", "Yan", "Li", "Mi", "Shan", "Tan", "Dang", "Jiao", "Chan", void 0, "Hao", "Ba", "Zhu", "Lan", "Lan", "Nang", "Wan", "Luan", "Xun", "Xian", "Yan", "Gan", "Yan", "Yu", "Huo", "Si", "Mie", "Guang", "Deng", "Hui", "Xiao", "Xiao", "Hu", "Hong", "Ling", "Zao", "Zhuan", "Jiu", "Zha", "Xie", "Chi", "Zhuo", "Zai", "Zai", "Can", "Yang", "Qi", "Zhong", "Fen", "Niu", "Jiong", "Wen", "Po", "Yi", "Lu", "Chui", "Pi", "Kai", "Pan", "Yan", "Kai", "Pang", "Mu", "Chao", "Liao", "Gui", "Kang", "Tun", "Guang", "Xin", "Zhi", "Guang", "Guang", "Wei", "Qiang", void 0, "Da", "Xia", "Zheng", "Zhu", "Ke", "Zhao", "Fu", "Ba", "Duo", "Duo", "Ling", "Zhuo", "Xuan", "Ju", "Tan", "Pao", "Jiong", "Pao", "Tai", "Tai", "Bing", "Yang", "Tong", "Han", "Zhu", "Zha", "Dian", "Wei", "Shi", "Lian", "Chi", "Huang", void 0, "Hu", "Shuo", "Lan", "Jing", "Jiao", "Xu", "Xing", "Quan", "Lie", "Huan", "Yang", "Xiao", "Xiu", "Xian", "Yin", "Wu", "Zhou", "Yao", "Shi", "Wei", "Tong", "Xue", "Zai", "Kai", "Hong", "Luo", "Xia", "Zhu", "Xuan", "Zheng", "Po", "Yan", "Hui", "Guang", "Zhe", "Hui", "Kao", void 0, "Fan", "Shao", "Ye", "Hui", void 0, "Tang", "Jin", "Re", void 0, "Xi", "Fu", "Jiong", "Che", "Pu", "Jing", "Zhuo", "Ting", "Wan", "Hai", "Peng", "Lang", "Shan", "Hu", "Feng", "Chi", "Rong"];
const sZ = Object.freeze(tZ);
const hZ = ["Hu", "Xi", "Shu", "He", "Xun", "Ku", "Jue", "Xiao", "Xi", "Yan", "Han", "Zhuang", "Jun", "Di", "Xie", "Ji", "Wu", void 0, void 0, "Han", "Yan", "Huan", "Men", "Ju", "Chou", "Bei", "Fen", "Lin", "Kun", "Hun", "Tun", "Xi", "Cui", "Wu", "Hong", "Ju", "Fu", "Wo", "Jiao", "Cong", "Feng", "Ping", "Qiong", "Ruo", "Xi", "Qiong", "Xin", "Zhuo", "Yan", "Yan", "Yi", "Jue", "Yu", "Gang", "Ran", "Pi", "Gu", void 0, "Sheng", "Chang", "Shao", void 0, void 0, void 0, void 0, "Chen", "He", "Kui", "Zhong", "Duan", "Xia", "Hui", "Feng", "Lian", "Xuan", "Xing", "Huang", "Jiao", "Jian", "Bi", "Ying", "Zhu", "Wei", "Tuan", "Tian", "Xi", "Nuan", "Nuan", "Chan", "Yan", "Jiong", "Jiong", "Yu", "Mei", "Sha", "Wei", "Ye", "Xin", "Qiong", "Rou", "Mei", "Huan", "Xu", "Zhao", "Wei", "Fan", "Qiu", "Sui", "Yang", "Lie", "Zhu", "Jie", "Gao", "Gua", "Bao", "Hu", "Yun", "Xia", void 0, void 0, "Bian", "Gou", "Tui", "Tang", "Chao", "Shan", "N", "Bo", "Huang", "Xie", "Xi", "Wu", "Xi", "Yun", "He", "He", "Xi", "Yun", "Xiong", "Nai", "Shan", "Qiong", "Yao", "Xun", "Mi", "Lian", "Ying", "Wen", "Rong", "Oozutsu", void 0, "Qiang", "Liu", "Xi", "Bi", "Biao", "Zong", "Lu", "Jian", "Shou", "Yi", "Lou", "Feng", "Sui", "Yi", "Tong", "Jue", "Zong", "Yun", "Hu", "Yi", "Zhi", "Ao", "Wei", "Liao", "Han", "Ou", "Re", "Jiong", "Man", void 0, "Shang", "Cuan", "Zeng", "Jian", "Xi", "Xi", "Xi", "Yi", "Xiao", "Chi", "Huang", "Chan", "Ye", "Qian", "Ran", "Yan", "Xian", "Qiao", "Zun", "Deng", "Dun", "Shen", "Jiao", "Fen", "Si", "Liao", "Yu", "Lin", "Tong", "Shao", "Fen", "Fan", "Yan", "Xun", "Lan", "Mei", "Tang", "Yi", "Jing", "Men", void 0, void 0, "Ying", "Yu", "Yi", "Xue", "Lan", "Tai", "Zao", "Can", "Sui", "Xi", "Que", "Cong", "Lian", "Hui", "Zhu", "Xie", "Ling", "Wei", "Yi", "Xie", "Zhao", "Hui", "Tatsu", "Nung", "Lan", "Ru", "Xian", "Kao", "Xun", "Jin", "Chou", "Chou", "Yao"];
const rZ = Object.freeze(hZ);
const lZ = ["He", "Lan", "Biao", "Rong", "Li", "Mo", "Bao", "Ruo", "Lu", "La", "Ao", "Xun", "Kuang", "Shuo", void 0, "Li", "Lu", "Jue", "Liao", "Yan", "Xi", "Xie", "Long", "Ye", void 0, "Rang", "Yue", "Lan", "Cong", "Jue", "Tong", "Guan", void 0, "Che", "Mi", "Tang", "Lan", "Zhu", void 0, "Ling", "Cuan", "Yu", "Zhua", "Tsumekanmuri", "Pa", "Zheng", "Pao", "Cheng", "Yuan", "Ai", "Wei", void 0, "Jue", "Jue", "Fu", "Ye", "Ba", "Die", "Ye", "Yao", "Zu", "Shuang", "Er", "Qiang", "Chuang", "Ge", "Zang", "Die", "Qiang", "Yong", "Qiang", "Pian", "Ban", "Pan", "Shao", "Jian", "Pai", "Du", "Chuang", "Tou", "Zha", "Bian", "Die", "Bang", "Bo", "Chuang", "You", void 0, "Du", "Ya", "Cheng", "Niu", "Ushihen", "Pin", "Jiu", "Mou", "Tuo", "Mu", "Lao", "Ren", "Mang", "Fang", "Mao", "Mu", "Gang", "Wu", "Yan", "Ge", "Bei", "Si", "Jian", "Gu", "You", "Ge", "Sheng", "Mu", "Di", "Qian", "Quan", "Quan", "Zi", "Te", "Xi", "Mang", "Keng", "Qian", "Wu", "Gu", "Xi", "Li", "Li", "Pou", "Ji", "Gang", "Zhi", "Ben", "Quan", "Run", "Du", "Ju", "Jia", "Jian", "Feng", "Pian", "Ke", "Ju", "Kao", "Chu", "Xi", "Bei", "Luo", "Jie", "Ma", "San", "Wei", "Li", "Dun", "Tong", void 0, "Jiang", "Ikenie", "Li", "Du", "Lie", "Pi", "Piao", "Bao", "Xi", "Chou", "Wei", "Kui", "Chou", "Quan", "Fan", "Ba", "Fan", "Qiu", "Ji", "Cai", "Chuo", "An", "Jie", "Zhuang", "Guang", "Ma", "You", "Kang", "Bo", "Hou", "Ya", "Yin", "Huan", "Zhuang", "Yun", "Kuang", "Niu", "Di", "Qing", "Zhong", "Mu", "Bei", "Pi", "Ju", "Ni", "Sheng", "Pao", "Xia", "Tuo", "Hu", "Ling", "Fei", "Pi", "Ni", "Ao", "You", "Gou", "Yue", "Ju", "Dan", "Po", "Gu", "Xian", "Ning", "Huan", "Hen", "Jiao", "He", "Zhao", "Ji", "Xun", "Shan", "Ta", "Rong", "Shou", "Tong", "Lao", "Du", "Xia", "Shi", "Hua", "Zheng", "Yu", "Sun", "Yu", "Bi", "Mang", "Xi", "Juan", "Li", "Xia", "Yin", "Suan", "Lang", "Bei", "Zhi", "Yan"];
const vZ = Object.freeze(lZ);
const yZ = ["Sha", "Li", "Han", "Xian", "Jing", "Pai", "Fei", "Yao", "Ba", "Qi", "Ni", "Biao", "Yin", "Lai", "Xi", "Jian", "Qiang", "Kun", "Yan", "Guo", "Zong", "Mi", "Chang", "Yi", "Zhi", "Zheng", "Ya", "Meng", "Cai", "Cu", "She", "Kari", "Cen", "Luo", "Hu", "Zong", "Ji", "Wei", "Feng", "Wo", "Yuan", "Xing", "Zhu", "Mao", "Wei", "Yuan", "Xian", "Tuan", "Ya", "Nao", "Xie", "Jia", "Hou", "Bian", "You", "You", "Mei", "Zha", "Yao", "Sun", "Bo", "Ming", "Hua", "Yuan", "Sou", "Ma", "Yuan", "Dai", "Yu", "Shi", "Hao", void 0, "Yi", "Zhen", "Chuang", "Hao", "Man", "Jing", "Jiang", "Mu", "Zhang", "Chan", "Ao", "Ao", "Hao", "Cui", "Fen", "Jue", "Bi", "Bi", "Huang", "Pu", "Lin", "Yu", "Tong", "Yao", "Liao", "Shuo", "Xiao", "Swu", "Ton", "Xi", "Ge", "Juan", "Du", "Hui", "Kuai", "Xian", "Xie", "Ta", "Xian", "Xun", "Ning", "Pin", "Huo", "Nou", "Meng", "Lie", "Nao", "Guang", "Shou", "Lu", "Ta", "Xian", "Mi", "Rang", "Huan", "Nao", "Luo", "Xian", "Qi", "Jue", "Xuan", "Miao", "Zi", "Lu", "Lu", "Yu", "Su", "Wang", "Qiu", "Ga", "Ding", "Le", "Ba", "Ji", "Hong", "Di", "Quan", "Gan", "Jiu", "Yu", "Ji", "Yu", "Yang", "Ma", "Gong", "Wu", "Fu", "Wen", "Jie", "Ya", "Fen", "Bian", "Beng", "Yue", "Jue", "Yun", "Jue", "Wan", "Jian", "Mei", "Dan", "Pi", "Wei", "Huan", "Xian", "Qiang", "Ling", "Dai", "Yi", "An", "Ping", "Dian", "Fu", "Xuan", "Xi", "Bo", "Ci", "Gou", "Jia", "Shao", "Po", "Ci", "Ke", "Ran", "Sheng", "Shen", "Yi", "Zu", "Jia", "Min", "Shan", "Liu", "Bi", "Zhen", "Zhen", "Jue", "Fa", "Long", "Jin", "Jiao", "Jian", "Li", "Guang", "Xian", "Zhou", "Gong", "Yan", "Xiu", "Yang", "Xu", "Luo", "Su", "Zhu", "Qin", "Ken", "Xun", "Bao", "Er", "Xiang", "Yao", "Xia", "Heng", "Gui", "Chong", "Xu", "Ban", "Pei", void 0, "Dang", "Ei", "Hun", "Wen", "E", "Cheng", "Ti", "Wu", "Wu", "Cheng", "Jun", "Mei", "Bei", "Ting", "Xian", "Chuo"];
const cZ = Object.freeze(yZ);
const bZ = ["Han", "Xuan", "Yan", "Qiu", "Quan", "Lang", "Li", "Xiu", "Fu", "Liu", "Ye", "Xi", "Ling", "Li", "Jin", "Lian", "Suo", "Chiisai", void 0, "Wan", "Dian", "Pin", "Zhan", "Cui", "Min", "Yu", "Ju", "Chen", "Lai", "Wen", "Sheng", "Wei", "Dian", "Chu", "Zhuo", "Pei", "Cheng", "Hu", "Qi", "E", "Kun", "Chang", "Qi", "Beng", "Wan", "Lu", "Cong", "Guan", "Yan", "Diao", "Bei", "Lin", "Qin", "Pi", "Pa", "Que", "Zhuo", "Qin", "Fa", void 0, "Qiong", "Du", "Jie", "Hun", "Yu", "Mao", "Mei", "Chun", "Xuan", "Ti", "Xing", "Dai", "Rou", "Min", "Zhen", "Wei", "Ruan", "Huan", "Jie", "Chuan", "Jian", "Zhuan", "Yang", "Lian", "Quan", "Xia", "Duan", "Yuan", "Ye", "Nao", "Hu", "Ying", "Yu", "Huang", "Rui", "Se", "Liu", "Shi", "Rong", "Suo", "Yao", "Wen", "Wu", "Jin", "Jin", "Ying", "Ma", "Tao", "Liu", "Tang", "Li", "Lang", "Gui", "Zhen", "Qiang", "Cuo", "Jue", "Zhao", "Yao", "Ai", "Bin", "Tu", "Chang", "Kun", "Zhuan", "Cong", "Jin", "Yi", "Cui", "Cong", "Qi", "Li", "Ying", "Suo", "Qiu", "Xuan", "Ao", "Lian", "Man", "Zhang", "Yin", void 0, "Ying", "Zhi", "Lu", "Wu", "Deng", "Xiou", "Zeng", "Xun", "Qu", "Dang", "Lin", "Liao", "Qiong", "Su", "Huang", "Gui", "Pu", "Jing", "Fan", "Jin", "Liu", "Ji", void 0, "Jing", "Ai", "Bi", "Can", "Qu", "Zao", "Dang", "Jiao", "Gun", "Tan", "Hui", "Huan", "Se", "Sui", "Tian", void 0, "Yu", "Jin", "Lu", "Bin", "Shou", "Wen", "Zui", "Lan", "Xi", "Ji", "Xuan", "Ruan", "Huo", "Gai", "Lei", "Du", "Li", "Zhi", "Rou", "Li", "Zan", "Qiong", "Zhe", "Gui", "Sui", "La", "Long", "Lu", "Li", "Zan", "Lan", "Ying", "Mi", "Xiang", "Xi", "Guan", "Dao", "Zan", "Huan", "Gua", "Bo", "Die", "Bao", "Hu", "Zhi", "Piao", "Ban", "Rang", "Li", "Wa", "Dekaguramu", "Jiang", "Qian", "Fan", "Pen", "Fang", "Dan", "Weng", "Ou", "Deshiguramu", "Miriguramu", "Thon", "Hu", "Ling", "Yi", "Ping", "Ci", "Hekutogura", "Juan", "Chang", "Chi", "Sarake", "Dang", "Meng", "Pou"];
const pZ = Object.freeze(bZ);
const wZ = ["Zhui", "Ping", "Bian", "Zhou", "Zhen", "Senchigura", "Ci", "Ying", "Qi", "Xian", "Lou", "Di", "Ou", "Meng", "Zhuan", "Peng", "Lin", "Zeng", "Wu", "Pi", "Dan", "Weng", "Ying", "Yan", "Gan", "Dai", "Shen", "Tian", "Tian", "Han", "Chang", "Sheng", "Qing", "Sheng", "Chan", "Chan", "Rui", "Sheng", "Su", "Sen", "Yong", "Shuai", "Lu", "Fu", "Yong", "Beng", "Feng", "Ning", "Tian", "You", "Jia", "Shen", "Zha", "Dian", "Fu", "Nan", "Dian", "Ping", "Ting", "Hua", "Ting", "Quan", "Zi", "Meng", "Bi", "Qi", "Liu", "Xun", "Liu", "Chang", "Mu", "Yun", "Fan", "Fu", "Geng", "Tian", "Jie", "Jie", "Quan", "Wei", "Fu", "Tian", "Mu", "Tap", "Pan", "Jiang", "Wa", "Da", "Nan", "Liu", "Ben", "Zhen", "Chu", "Mu", "Mu", "Ce", "Cen", "Gai", "Bi", "Da", "Zhi", "Lue", "Qi", "Lue", "Pan", "Kesa", "Fan", "Hua", "Yu", "Yu", "Mu", "Jun", "Yi", "Liu", "Yu", "Die", "Chou", "Hua", "Dang", "Chuo", "Ji", "Wan", "Jiang", "Sheng", "Chang", "Tuan", "Lei", "Ji", "Cha", "Liu", "Tatamu", "Tuan", "Lin", "Jiang", "Jiang", "Chou", "Bo", "Die", "Die", "Pi", "Nie", "Dan", "Shu", "Shu", "Zhi", "Yi", "Chuang", "Nai", "Ding", "Bi", "Jie", "Liao", "Gong", "Ge", "Jiu", "Zhou", "Xia", "Shan", "Xu", "Nue", "Li", "Yang", "Chen", "You", "Ba", "Jie", "Jue", "Zhi", "Xia", "Cui", "Bi", "Yi", "Li", "Zong", "Chuang", "Feng", "Zhu", "Pao", "Pi", "Gan", "Ke", "Ci", "Xie", "Qi", "Dan", "Zhen", "Fa", "Zhi", "Teng", "Ju", "Ji", "Fei", "Qu", "Dian", "Jia", "Xian", "Cha", "Bing", "Ni", "Zheng", "Yong", "Jing", "Quan", "Chong", "Tong", "Yi", "Kai", "Wei", "Hui", "Duo", "Yang", "Chi", "Zhi", "Hen", "Ya", "Mei", "Dou", "Jing", "Xiao", "Tong", "Tu", "Mang", "Pi", "Xiao", "Suan", "Pu", "Li", "Zhi", "Cuo", "Duo", "Wu", "Sha", "Lao", "Shou", "Huan", "Xian", "Yi", "Peng", "Zhang", "Guan", "Tan", "Fei", "Ma", "Lin", "Chi", "Ji", "Dian", "An", "Chi", "Bi", "Bei", "Min", "Gu", "Dui", "E", "Wei"];
const jZ = Object.freeze(wZ);
const mZ = ["Yu", "Cui", "Ya", "Zhu", "Cu", "Dan", "Shen", "Zhung", "Ji", "Yu", "Hou", "Feng", "La", "Yang", "Shen", "Tu", "Yu", "Gua", "Wen", "Huan", "Ku", "Jia", "Yin", "Yi", "Lu", "Sao", "Jue", "Chi", "Xi", "Guan", "Yi", "Wen", "Ji", "Chuang", "Ban", "Lei", "Liu", "Chai", "Shou", "Nue", "Dian", "Da", "Pie", "Tan", "Zhang", "Biao", "Shen", "Cu", "Luo", "Yi", "Zong", "Chou", "Zhang", "Zhai", "Sou", "Suo", "Que", "Diao", "Lou", "Lu", "Mo", "Jin", "Yin", "Ying", "Huang", "Fu", "Liao", "Long", "Qiao", "Liu", "Lao", "Xian", "Fei", "Dan", "Yin", "He", "Ai", "Ban", "Xian", "Guan", "Guai", "Nong", "Yu", "Wei", "Yi", "Yong", "Pi", "Lei", "Li", "Shu", "Dan", "Lin", "Dian", "Lin", "Lai", "Pie", "Ji", "Chi", "Yang", "Xian", "Jie", "Zheng", void 0, "Li", "Huo", "Lai", "Shaku", "Dian", "Xian", "Ying", "Yin", "Qu", "Yong", "Tan", "Dian", "Luo", "Luan", "Luan", "Bo", void 0, "Gui", "Po", "Fa", "Deng", "Fa", "Bai", "Bai", "Qie", "Bi", "Zao", "Zao", "Mao", "De", "Pa", "Jie", "Huang", "Gui", "Ci", "Ling", "Gao", "Mo", "Ji", "Jiao", "Peng", "Gao", "Ai", "E", "Hao", "Han", "Bi", "Wan", "Chou", "Qian", "Xi", "Ai", "Jiong", "Hao", "Huang", "Hao", "Ze", "Cui", "Hao", "Xiao", "Ye", "Po", "Hao", "Jiao", "Ai", "Xing", "Huang", "Li", "Piao", "He", "Jiao", "Pi", "Gan", "Pao", "Zhou", "Jun", "Qiu", "Cun", "Que", "Zha", "Gu", "Jun", "Jun", "Zhou", "Zha", "Gu", "Zhan", "Du", "Min", "Qi", "Ying", "Yu", "Bei", "Zhao", "Zhong", "Pen", "He", "Ying", "He", "Yi", "Bo", "Wan", "He", "Ang", "Zhan", "Yan", "Jian", "He", "Yu", "Kui", "Fan", "Gai", "Dao", "Pan", "Fu", "Qiu", "Sheng", "Dao", "Lu", "Zhan", "Meng", "Li", "Jin", "Xu", "Jian", "Pan", "Guan", "An", "Lu", "Shu", "Zhou", "Dang", "An", "Gu", "Li", "Mu", "Cheng", "Gan", "Xu", "Mang", "Mang", "Zhi", "Qi", "Ruan", "Tian", "Xiang", "Dun", "Xin", "Xi", "Pan", "Feng", "Dun", "Min"];
const fZ = Object.freeze(mZ);
const YZ = ["Ming", "Sheng", "Shi", "Yun", "Mian", "Pan", "Fang", "Miao", "Dan", "Mei", "Mao", "Kan", "Xian", "Ou", "Shi", "Yang", "Zheng", "Yao", "Shen", "Huo", "Da", "Zhen", "Kuang", "Ju", "Shen", "Chi", "Sheng", "Mei", "Mo", "Zhu", "Zhen", "Zhen", "Mian", "Di", "Yuan", "Die", "Yi", "Zi", "Zi", "Chao", "Zha", "Xuan", "Bing", "Mi", "Long", "Sui", "Dong", "Mi", "Die", "Yi", "Er", "Ming", "Xuan", "Chi", "Kuang", "Juan", "Mou", "Zhen", "Tiao", "Yang", "Yan", "Mo", "Zhong", "Mai", "Zhao", "Zheng", "Mei", "Jun", "Shao", "Han", "Huan", "Di", "Cheng", "Cuo", "Juan", "E", "Wan", "Xian", "Xi", "Kun", "Lai", "Jian", "Shan", "Tian", "Hun", "Wan", "Ling", "Shi", "Qiong", "Lie", "Yai", "Jing", "Zheng", "Li", "Lai", "Sui", "Juan", "Shui", "Sui", "Du", "Bi", "Bi", "Mu", "Hun", "Ni", "Lu", "Yi", "Jie", "Cai", "Zhou", "Yu", "Hun", "Ma", "Xia", "Xing", "Xi", "Gun", "Cai", "Chun", "Jian", "Mei", "Du", "Hou", "Xuan", "Ti", "Kui", "Gao", "Rui", "Mou", "Xu", "Fa", "Wen", "Miao", "Chou", "Kui", "Mi", "Weng", "Kou", "Dang", "Chen", "Ke", "Sou", "Xia", "Qiong", "Mao", "Ming", "Man", "Shui", "Ze", "Zhang", "Yi", "Diao", "Ou", "Mo", "Shun", "Cong", "Lou", "Chi", "Man", "Piao", "Cheng", "Ji", "Meng", void 0, "Run", "Pie", "Xi", "Qiao", "Pu", "Zhu", "Deng", "Shen", "Shun", "Liao", "Che", "Xian", "Kan", "Ye", "Xu", "Tong", "Mou", "Lin", "Kui", "Xian", "Ye", "Ai", "Hui", "Zhan", "Jian", "Gu", "Zhao", "Qu", "Wei", "Chou", "Sao", "Ning", "Xun", "Yao", "Huo", "Meng", "Mian", "Bin", "Mian", "Li", "Kuang", "Jue", "Xuan", "Mian", "Huo", "Lu", "Meng", "Long", "Guan", "Man", "Xi", "Chu", "Tang", "Kan", "Zhu", "Mao", "Jin", "Lin", "Yu", "Shuo", "Ce", "Jue", "Shi", "Yi", "Shen", "Zhi", "Hou", "Shen", "Ying", "Ju", "Zhou", "Jiao", "Cuo", "Duan", "Ai", "Jiao", "Zeng", "Huo", "Bai", "Shi", "Ding", "Qi", "Ji", "Zi", "Gan", "Wu", "Tuo", "Ku", "Qiang", "Xi", "Fan", "Kuang"];
const kZ = Object.freeze(YZ);
const LZ = ["Dang", "Ma", "Sha", "Dan", "Jue", "Li", "Fu", "Min", "Nuo", "Huo", "Kang", "Zhi", "Qi", "Kan", "Jie", "Fen", "E", "Ya", "Pi", "Zhe", "Yan", "Sui", "Zhuan", "Che", "Dun", "Pan", "Yan", void 0, "Feng", "Fa", "Mo", "Zha", "Qu", "Yu", "Luo", "Tuo", "Tuo", "Di", "Zhai", "Zhen", "Ai", "Fei", "Mu", "Zhu", "Li", "Bian", "Nu", "Ping", "Peng", "Ling", "Pao", "Le", "Po", "Bo", "Po", "Shen", "Za", "Nuo", "Li", "Long", "Tong", void 0, "Li", "Aragane", "Chu", "Keng", "Quan", "Zhu", "Kuang", "Huo", "E", "Nao", "Jia", "Lu", "Wei", "Ai", "Luo", "Ken", "Xing", "Yan", "Tong", "Peng", "Xi", void 0, "Hong", "Shuo", "Xia", "Qiao", void 0, "Wei", "Qiao", void 0, "Keng", "Xiao", "Que", "Chan", "Lang", "Hong", "Yu", "Xiao", "Xia", "Mang", "Long", "Iong", "Che", "Che", "E", "Liu", "Ying", "Mang", "Que", "Yan", "Sha", "Kun", "Yu", void 0, "Kaki", "Lu", "Chen", "Jian", "Nue", "Song", "Zhuo", "Keng", "Peng", "Yan", "Zhui", "Kong", "Ceng", "Qi", "Zong", "Qing", "Lin", "Jun", "Bo", "Ding", "Min", "Diao", "Jian", "He", "Lu", "Ai", "Sui", "Que", "Ling", "Bei", "Yin", "Dui", "Wu", "Qi", "Lun", "Wan", "Dian", "Gang", "Pei", "Qi", "Chen", "Ruan", "Yan", "Die", "Ding", "Du", "Tuo", "Jie", "Ying", "Bian", "Ke", "Bi", "Wei", "Shuo", "Zhen", "Duan", "Xia", "Dang", "Ti", "Nao", "Peng", "Jian", "Di", "Tan", "Cha", "Seki", "Qi", void 0, "Feng", "Xuan", "Que", "Que", "Ma", "Gong", "Nian", "Su", "E", "Ci", "Liu", "Si", "Tang", "Bang", "Hua", "Pi", "Wei", "Sang", "Lei", "Cuo", "Zhen", "Xia", "Qi", "Lian", "Pan", "Wei", "Yun", "Dui", "Zhe", "Ke", "La", void 0, "Qing", "Gun", "Zhuan", "Chan", "Qi", "Ao", "Peng", "Lu", "Lu", "Kan", "Qiang", "Chen", "Yin", "Lei", "Biao", "Qi", "Mo", "Qi", "Cui", "Zong", "Qing", "Chuo", void 0, "Ji", "Shan", "Lao", "Qu", "Zeng", "Deng", "Jian", "Xi", "Lin", "Ding", "Dian", "Huang", "Pan", "Za", "Qiao", "Di", "Li"];
const ZZ = Object.freeze(LZ);
const SZ = ["Tani", "Jiao", void 0, "Zhang", "Qiao", "Dun", "Xian", "Yu", "Zhui", "He", "Huo", "Zhai", "Lei", "Ke", "Chu", "Ji", "Que", "Dang", "Yi", "Jiang", "Pi", "Pi", "Yu", "Pin", "Qi", "Ai", "Kai", "Jian", "Yu", "Ruan", "Meng", "Pao", "Ci", void 0, void 0, "Mie", "Ca", "Xian", "Kuang", "Lei", "Lei", "Zhi", "Li", "Li", "Fan", "Que", "Pao", "Ying", "Li", "Long", "Long", "Mo", "Bo", "Shuang", "Guan", "Lan", "Zan", "Yan", "Shi", "Shi", "Li", "Reng", "She", "Yue", "Si", "Qi", "Ta", "Ma", "Xie", "Xian", "Xian", "Zhi", "Qi", "Zhi", "Beng", "Dui", "Zhong", void 0, "Yi", "Shi", "You", "Zhi", "Tiao", "Fu", "Fu", "Mi", "Zu", "Zhi", "Suan", "Mei", "Zuo", "Qu", "Hu", "Zhu", "Shen", "Sui", "Ci", "Chai", "Mi", "Lu", "Yu", "Xiang", "Wu", "Tiao", "Piao", "Zhu", "Gui", "Xia", "Zhi", "Ji", "Gao", "Zhen", "Gao", "Shui", "Jin", "Chen", "Gai", "Kun", "Di", "Dao", "Huo", "Tao", "Qi", "Gu", "Guan", "Zui", "Ling", "Lu", "Bing", "Jin", "Dao", "Zhi", "Lu", "Shan", "Bei", "Zhe", "Hui", "You", "Xi", "Yin", "Zi", "Huo", "Zhen", "Fu", "Yuan", "Wu", "Xian", "Yang", "Ti", "Yi", "Mei", "Si", "Di", void 0, "Zhuo", "Zhen", "Yong", "Ji", "Gao", "Tang", "Si", "Ma", "Ta", void 0, "Xuan", "Qi", "Yu", "Xi", "Ji", "Si", "Chan", "Tan", "Kuai", "Sui", "Li", "Nong", "Ni", "Dao", "Li", "Rang", "Yue", "Ti", "Zan", "Lei", "Rou", "Yu", "Yu", "Chi", "Xie", "Qin", "He", "Tu", "Xiu", "Si", "Ren", "Tu", "Zi", "Cha", "Gan", "Yi", "Xian", "Bing", "Nian", "Qiu", "Qiu", "Zhong", "Fen", "Hao", "Yun", "Ke", "Miao", "Zhi", "Geng", "Bi", "Zhi", "Yu", "Mi", "Ku", "Ban", "Pi", "Ni", "Li", "You", "Zu", "Pi", "Ba", "Ling", "Mo", "Cheng", "Nian", "Qin", "Yang", "Zuo", "Zhi", "Zhi", "Shu", "Ju", "Zi", "Huo", "Ji", "Cheng", "Tong", "Zhi", "Huo", "He", "Yin", "Zi", "Zhi", "Jie", "Ren", "Du", "Yi", "Zhu", "Hui", "Nong", "Fu"];
const JZ = Object.freeze(SZ);
const CZ = ["Xi", "Kao", "Lang", "Fu", "Ze", "Shui", "Lu", "Kun", "Gan", "Geng", "Ti", "Cheng", "Tu", "Shao", "Shui", "Ya", "Lun", "Lu", "Gu", "Zuo", "Ren", "Zhun", "Bang", "Bai", "Ji", "Zhi", "Zhi", "Kun", "Leng", "Peng", "Ke", "Bing", "Chou", "Zu", "Yu", "Su", "Lue", void 0, "Yi", "Xi", "Bian", "Ji", "Fu", "Bi", "Nuo", "Jie", "Zhong", "Zong", "Xu", "Cheng", "Dao", "Wen", "Lian", "Zi", "Yu", "Ji", "Xu", "Zhen", "Zhi", "Dao", "Jia", "Ji", "Gao", "Gao", "Gu", "Rong", "Sui", "You", "Ji", "Kang", "Mu", "Shan", "Men", "Zhi", "Ji", "Lu", "Su", "Ji", "Ying", "Wen", "Qiu", "Se", void 0, "Yi", "Huang", "Qie", "Ji", "Sui", "Xiao", "Pu", "Jiao", "Zhuo", "Tong", "Sai", "Lu", "Sui", "Nong", "Se", "Hui", "Rang", "Nuo", "Yu", "Bin", "Ji", "Tui", "Wen", "Cheng", "Huo", "Gong", "Lu", "Biao", void 0, "Rang", "Zhuo", "Li", "Zan", "Xue", "Wa", "Jiu", "Qiong", "Xi", "Qiong", "Kong", "Yu", "Sen", "Jing", "Yao", "Chuan", "Zhun", "Tu", "Lao", "Qie", "Zhai", "Yao", "Bian", "Bao", "Yao", "Bing", "Wa", "Zhu", "Jiao", "Qiao", "Diao", "Wu", "Gui", "Yao", "Zhi", "Chuang", "Yao", "Tiao", "Jiao", "Chuang", "Jiong", "Xiao", "Cheng", "Kou", "Cuan", "Wo", "Dan", "Ku", "Ke", "Zhui", "Xu", "Su", "Guan", "Kui", "Dou", void 0, "Yin", "Wo", "Wa", "Ya", "Yu", "Ju", "Qiong", "Yao", "Yao", "Tiao", "Chao", "Yu", "Tian", "Diao", "Ju", "Liao", "Xi", "Wu", "Kui", "Chuang", "Zhao", void 0, "Kuan", "Long", "Cheng", "Cui", "Piao", "Zao", "Cuan", "Qiao", "Qiong", "Dou", "Zao", "Long", "Qie", "Li", "Chu", "Shi", "Fou", "Qian", "Chu", "Hong", "Qi", "Qian", "Gong", "Shi", "Shu", "Miao", "Ju", "Zhan", "Zhu", "Ling", "Long", "Bing", "Jing", "Jing", "Zhang", "Yi", "Si", "Jun", "Hong", "Tong", "Song", "Jing", "Diao", "Yi", "Shu", "Jing", "Qu", "Jie", "Ping", "Duan", "Shao", "Zhuan", "Ceng", "Deng", "Cui", "Huai", "Jing", "Kan", "Jing", "Zhu", "Zhu", "Le", "Peng", "Yu", "Chi", "Gan"];
const XZ = Object.freeze(CZ);
const HZ = ["Mang", "Zhu", "Utsubo", "Du", "Ji", "Xiao", "Ba", "Suan", "Ji", "Zhen", "Zhao", "Sun", "Ya", "Zhui", "Yuan", "Hu", "Gang", "Xiao", "Cen", "Pi", "Bi", "Jian", "Yi", "Dong", "Shan", "Sheng", "Xia", "Di", "Zhu", "Na", "Chi", "Gu", "Li", "Qie", "Min", "Bao", "Tiao", "Si", "Fu", "Ce", "Ben", "Pei", "Da", "Zi", "Di", "Ling", "Ze", "Nu", "Fu", "Gou", "Fan", "Jia", "Ge", "Fan", "Shi", "Mao", "Po", "Sey", "Jian", "Qiong", "Long", "Souke", "Bian", "Luo", "Gui", "Qu", "Chi", "Yin", "Yao", "Xian", "Bi", "Qiong", "Gua", "Deng", "Jiao", "Jin", "Quan", "Sun", "Ru", "Fa", "Kuang", "Zhu", "Tong", "Ji", "Da", "Xing", "Ce", "Zhong", "Kou", "Lai", "Bi", "Shai", "Dang", "Zheng", "Ce", "Fu", "Yun", "Tu", "Pa", "Li", "Lang", "Ju", "Guan", "Jian", "Han", "Tong", "Xia", "Zhi", "Cheng", "Suan", "Shi", "Zhu", "Zuo", "Xiao", "Shao", "Ting", "Ce", "Yan", "Gao", "Kuai", "Gan", "Chou", "Kago", "Gang", "Yun", "O", "Qian", "Xiao", "Jian", "Pu", "Lai", "Zou", "Bi", "Bi", "Bi", "Ge", "Chi", "Guai", "Yu", "Jian", "Zhao", "Gu", "Chi", "Zheng", "Jing", "Sha", "Zhou", "Lu", "Bo", "Ji", "Lin", "Suan", "Jun", "Fu", "Zha", "Gu", "Kong", "Qian", "Quan", "Jun", "Chui", "Guan", "Yuan", "Ce", "Ju", "Bo", "Ze", "Qie", "Tuo", "Luo", "Dan", "Xiao", "Ruo", "Jian", "Xuan", "Bian", "Sun", "Xiang", "Xian", "Ping", "Zhen", "Sheng", "Hu", "Shi", "Zhu", "Yue", "Chun", "Lu", "Wu", "Dong", "Xiao", "Ji", "Jie", "Huang", "Xing", "Mei", "Fan", "Chui", "Zhuan", "Pian", "Feng", "Zhu", "Hong", "Qie", "Hou", "Qiu", "Miao", "Qian", void 0, "Kui", "Sik", "Lou", "Yun", "He", "Tang", "Yue", "Chou", "Gao", "Fei", "Ruo", "Zheng", "Gou", "Nie", "Qian", "Xiao", "Cuan", "Gong", "Pang", "Du", "Li", "Bi", "Zhuo", "Chu", "Shai", "Chi", "Zhu", "Qiang", "Long", "Lan", "Jian", "Bu", "Li", "Hui", "Bi", "Di", "Cong", "Yan", "Peng", "Sen", "Zhuan", "Pai", "Piao", "Dou", "Yu", "Mie", "Zhuan"];
const DZ = Object.freeze(HZ);
const TZ = ["Ze", "Xi", "Guo", "Yi", "Hu", "Chan", "Kou", "Cu", "Ping", "Chou", "Ji", "Gui", "Su", "Lou", "Zha", "Lu", "Nian", "Suo", "Cuan", "Sasara", "Suo", "Le", "Duan", "Yana", "Xiao", "Bo", "Mi", "Si", "Dang", "Liao", "Dan", "Dian", "Fu", "Jian", "Min", "Kui", "Dai", "Qiao", "Deng", "Huang", "Sun", "Lao", "Zan", "Xiao", "Du", "Shi", "Zan", void 0, "Pai", "Hata", "Pai", "Gan", "Ju", "Du", "Lu", "Yan", "Bo", "Dang", "Sai", "Ke", "Long", "Qian", "Lian", "Bo", "Zhou", "Lai", void 0, "Lan", "Kui", "Yu", "Yue", "Hao", "Zhen", "Tai", "Ti", "Mi", "Chou", "Ji", void 0, "Hata", "Teng", "Zhuan", "Zhou", "Fan", "Sou", "Zhou", "Kuji", "Zhuo", "Teng", "Lu", "Lu", "Jian", "Tuo", "Ying", "Yu", "Lai", "Long", "Shinshi", "Lian", "Lan", "Qian", "Yue", "Zhong", "Qu", "Lian", "Bian", "Duan", "Zuan", "Li", "Si", "Luo", "Ying", "Yue", "Zhuo", "Xu", "Mi", "Di", "Fan", "Shen", "Zhe", "Shen", "Nu", "Xie", "Lei", "Xian", "Zi", "Ni", "Cun", void 0, "Qian", "Kume", "Bi", "Ban", "Wu", "Sha", "Kang", "Rou", "Fen", "Bi", "Cui", void 0, "Li", "Chi", "Nukamiso", "Ro", "Ba", "Li", "Gan", "Ju", "Po", "Mo", "Cu", "Nian", "Zhou", "Li", "Su", "Tiao", "Li", "Qi", "Su", "Hong", "Tong", "Zi", "Ce", "Yue", "Zhou", "Lin", "Zhuang", "Bai", void 0, "Fen", "Ji", void 0, "Sukumo", "Liang", "Xian", "Fu", "Liang", "Can", "Geng", "Li", "Yue", "Lu", "Ju", "Qi", "Cui", "Bai", "Zhang", "Lin", "Zong", "Jing", "Guo", "Kouji", "San", "San", "Tang", "Bian", "Rou", "Mian", "Hou", "Xu", "Zong", "Hu", "Jian", "Zan", "Ci", "Li", "Xie", "Fu", "Ni", "Bei", "Gu", "Xiu", "Gao", "Tang", "Qiu", "Sukumo", "Cao", "Zhuang", "Tang", "Mi", "San", "Fen", "Zao", "Kang", "Jiang", "Mo", "San", "San", "Nuo", "Xi", "Liang", "Jiang", "Kuai", "Bo", "Huan", void 0, "Zong", "Xian", "Nuo", "Tuan", "Nie", "Li", "Zuo", "Di", "Nie", "Tiao", "Lan", "Mi", "Jiao", "Jiu", "Xi", "Gong", "Zheng", "Jiu", "You"];
const BZ = Object.freeze(TZ);
const QZ = ["Ji", "Cha", "Zhou", "Xun", "Yue", "Hong", "Yu", "He", "Wan", "Ren", "Wen", "Wen", "Qiu", "Na", "Zi", "Tou", "Niu", "Fou", "Jie", "Shu", "Chun", "Pi", "Yin", "Sha", "Hong", "Zhi", "Ji", "Fen", "Yun", "Ren", "Dan", "Jin", "Su", "Fang", "Suo", "Cui", "Jiu", "Zha", "Kinu", "Jin", "Fu", "Zhi", "Ci", "Zi", "Chou", "Hong", "Zha", "Lei", "Xi", "Fu", "Xie", "Shen", "Bei", "Zhu", "Qu", "Ling", "Zhu", "Shao", "Gan", "Yang", "Fu", "Tuo", "Zhen", "Dai", "Zhuo", "Shi", "Zhong", "Xian", "Zu", "Jiong", "Ban", "Ju", "Mo", "Shu", "Zui", "Wata", "Jing", "Ren", "Heng", "Xie", "Jie", "Zhu", "Chou", "Gua", "Bai", "Jue", "Kuang", "Hu", "Ci", "Geng", "Geng", "Tao", "Xie", "Ku", "Jiao", "Quan", "Gai", "Luo", "Xuan", "Bing", "Xian", "Fu", "Gei", "Tong", "Rong", "Tiao", "Yin", "Lei", "Xie", "Quan", "Xu", "Lun", "Die", "Tong", "Si", "Jiang", "Xiang", "Hui", "Jue", "Zhi", "Jian", "Juan", "Chi", "Mian", "Zhen", "Lu", "Cheng", "Qiu", "Shu", "Bang", "Tong", "Xiao", "Wan", "Qin", "Geng", "Xiu", "Ti", "Xiu", "Xie", "Hong", "Xi", "Fu", "Ting", "Sui", "Dui", "Kun", "Fu", "Jing", "Hu", "Zhi", "Yan", "Jiong", "Feng", "Ji", "Sok", "Kase", "Zong", "Lin", "Duo", "Li", "Lu", "Liang", "Chou", "Quan", "Shao", "Qi", "Qi", "Zhun", "Qi", "Wan", "Qian", "Xian", "Shou", "Wei", "Qi", "Tao", "Wan", "Gang", "Wang", "Beng", "Zhui", "Cai", "Guo", "Cui", "Lun", "Liu", "Qi", "Zhan", "Bei", "Chuo", "Ling", "Mian", "Qi", "Qie", "Tan", "Zong", "Gun", "Zou", "Yi", "Zi", "Xing", "Liang", "Jin", "Fei", "Rui", "Min", "Yu", "Zong", "Fan", "Lu", "Xu", "Yingl", "Zhang", "Kasuri", "Xu", "Xiang", "Jian", "Ke", "Xian", "Ruan", "Mian", "Qi", "Duan", "Zhong", "Di", "Min", "Miao", "Yuan", "Xie", "Bao", "Si", "Qiu", "Bian", "Huan", "Geng", "Cong", "Mian", "Wei", "Fu", "Wei", "Yu", "Gou", "Miao", "Xie", "Lian", "Zong", "Bian", "Yun", "Yin", "Ti", "Gua", "Zhi", "Yun", "Cheng", "Chan", "Dai"];
const MZ = Object.freeze(QZ);
const GZ = ["Xia", "Yuan", "Zong", "Xu", "Nawa", "Odoshi", "Geng", "Sen", "Ying", "Jin", "Yi", "Zhui", "Ni", "Bang", "Gu", "Pan", "Zhou", "Jian", "Cuo", "Quan", "Shuang", "Yun", "Xia", "Shuai", "Xi", "Rong", "Tao", "Fu", "Yun", "Zhen", "Gao", "Ru", "Hu", "Zai", "Teng", "Xian", "Su", "Zhen", "Zong", "Tao", "Horo", "Cai", "Bi", "Feng", "Cu", "Li", "Suo", "Yin", "Xi", "Zong", "Lei", "Zhuan", "Qian", "Man", "Zhi", "Lu", "Mo", "Piao", "Lian", "Mi", "Xuan", "Zong", "Ji", "Shan", "Sui", "Fan", "Shuai", "Beng", "Yi", "Sao", "Mou", "Zhou", "Qiang", "Hun", "Sem", "Xi", "Jung", "Xiu", "Ran", "Xuan", "Hui", "Qiao", "Zeng", "Zuo", "Zhi", "Shan", "San", "Lin", "Yu", "Fan", "Liao", "Chuo", "Zun", "Jian", "Rao", "Chan", "Rui", "Xiu", "Hui", "Hua", "Zuan", "Xi", "Qiang", "Un", "Da", "Sheng", "Hui", "Xi", "Se", "Jian", "Jiang", "Huan", "Zao", "Cong", "Jie", "Jiao", "Bo", "Chan", "Yi", "Nao", "Sui", "Yi", "Shai", "Xu", "Ji", "Bin", "Qian", "Lan", "Pu", "Xun", "Zuan", "Qi", "Peng", "Li", "Mo", "Lei", "Xie", "Zuan", "Kuang", "You", "Xu", "Lei", "Xian", "Chan", "Kou", "Lu", "Chan", "Ying", "Cai", "Xiang", "Xian", "Zui", "Zuan", "Luo", "Xi", "Dao", "Lan", "Lei", "Lian", "Si", "Jiu", "Yu", "Hong", "Zhou", "Xian", "He", "Yue", "Ji", "Wan", "Kuang", "Ji", "Ren", "Wei", "Yun", "Hong", "Chun", "Pi", "Sha", "Gang", "Na", "Ren", "Zong", "Lun", "Fen", "Zhi", "Wen", "Fang", "Zhu", "Yin", "Niu", "Shu", "Xian", "Gan", "Xie", "Fu", "Lian", "Zu", "Shen", "Xi", "Zhi", "Zhong", "Zhou", "Ban", "Fu", "Zhuo", "Shao", "Yi", "Jing", "Dai", "Bang", "Rong", "Jie", "Ku", "Rao", "Die", "Heng", "Hui", "Gei", "Xuan", "Jiang", "Luo", "Jue", "Jiao", "Tong", "Geng", "Xiao", "Juan", "Xiu", "Xi", "Sui", "Tao", "Ji", "Ti", "Ji", "Xu", "Ling", void 0, "Xu", "Qi", "Fei", "Chuo", "Zhang", "Gun", "Sheng", "Wei", "Mian", "Shou", "Beng", "Chou", "Tao", "Liu", "Quan", "Zong", "Zhan", "Wan", "Lu"];
const NZ = Object.freeze(GZ);
const xZ = ["Zhui", "Zi", "Ke", "Xiang", "Jian", "Mian", "Lan", "Ti", "Miao", "Qi", "Yun", "Hui", "Si", "Duo", "Duan", "Bian", "Xian", "Gou", "Zhui", "Huan", "Di", "Lu", "Bian", "Min", "Yuan", "Jin", "Fu", "Ru", "Zhen", "Feng", "Shuai", "Gao", "Chan", "Li", "Yi", "Jian", "Bin", "Piao", "Man", "Lei", "Ying", "Suo", "Mou", "Sao", "Xie", "Liao", "Shan", "Zeng", "Jiang", "Qian", "Zao", "Huan", "Jiao", "Zuan", "Fou", "Xie", "Gang", "Fou", "Que", "Fou", "Kaakeru", "Bo", "Ping", "Hou", void 0, "Gang", "Ying", "Ying", "Qing", "Xia", "Guan", "Zun", "Tan", "Chang", "Qi", "Weng", "Ying", "Lei", "Tan", "Lu", "Guan", "Wang", "Wang", "Gang", "Wang", "Han", void 0, "Luo", "Fu", "Mi", "Fa", "Gu", "Zhu", "Ju", "Mao", "Gu", "Min", "Gang", "Ba", "Gua", "Ti", "Juan", "Fu", "Lin", "Yan", "Zhao", "Zui", "Gua", "Zhuo", "Yu", "Zhi", "An", "Fa", "Nan", "Shu", "Si", "Pi", "Ma", "Liu", "Ba", "Fa", "Li", "Chao", "Wei", "Bi", "Ji", "Zeng", "Tong", "Liu", "Ji", "Juan", "Mi", "Zhao", "Luo", "Pi", "Ji", "Ji", "Luan", "Yang", "Mie", "Qiang", "Ta", "Mei", "Yang", "You", "You", "Fen", "Ba", "Gao", "Yang", "Gu", "Qiang", "Zang", "Gao", "Ling", "Yi", "Zhu", "Di", "Xiu", "Qian", "Yi", "Xian", "Rong", "Qun", "Qun", "Qian", "Huan", "Zui", "Xian", "Yi", "Yashinau", "Qiang", "Xian", "Yu", "Geng", "Jie", "Tang", "Yuan", "Xi", "Fan", "Shan", "Fen", "Shan", "Lian", "Lei", "Geng", "Nou", "Qiang", "Chan", "Yu", "Gong", "Yi", "Chong", "Weng", "Fen", "Hong", "Chi", "Chi", "Cui", "Fu", "Xia", "Pen", "Yi", "La", "Yi", "Pi", "Ling", "Liu", "Zhi", "Qu", "Xi", "Xie", "Xiang", "Xi", "Xi", "Qi", "Qiao", "Hui", "Hui", "Xiao", "Se", "Hong", "Jiang", "Di", "Cui", "Fei", "Tao", "Sha", "Chi", "Zhu", "Jian", "Xuan", "Shi", "Pian", "Zong", "Wan", "Hui", "Hou", "He", "He", "Han", "Ao", "Piao", "Yi", "Lian", "Qu", void 0, "Lin", "Pen", "Qiao", "Ao", "Fan", "Yi", "Hui", "Xuan", "Dao"];
const WZ = Object.freeze(xZ);
const PZ = ["Yao", "Lao", void 0, "Kao", "Mao", "Zhe", "Qi", "Gou", "Gou", "Gou", "Die", "Die", "Er", "Shua", "Ruan", "Er", "Nai", "Zhuan", "Lei", "Ting", "Zi", "Geng", "Chao", "Hao", "Yun", "Pa", "Pi", "Chi", "Si", "Chu", "Jia", "Ju", "He", "Chu", "Lao", "Lun", "Ji", "Tang", "Ou", "Lou", "Nou", "Gou", "Pang", "Ze", "Lou", "Ji", "Lao", "Huo", "You", "Mo", "Huai", "Er", "Zhe", "Ting", "Ye", "Da", "Song", "Qin", "Yun", "Chi", "Dan", "Dan", "Hong", "Geng", "Zhi", void 0, "Nie", "Dan", "Zhen", "Che", "Ling", "Zheng", "You", "Wa", "Liao", "Long", "Zhi", "Ning", "Tiao", "Er", "Ya", "Die", "Gua", void 0, "Lian", "Hao", "Sheng", "Lie", "Pin", "Jing", "Ju", "Bi", "Di", "Guo", "Wen", "Xu", "Ping", "Cong", "Shikato", void 0, "Ting", "Yu", "Cong", "Kui", "Tsuraneru", "Kui", "Cong", "Lian", "Weng", "Kui", "Lian", "Lian", "Cong", "Ao", "Sheng", "Song", "Ting", "Kui", "Nie", "Zhi", "Dan", "Ning", "Qie", "Ji", "Ting", "Ting", "Long", "Yu", "Yu", "Zhao", "Si", "Su", "Yi", "Su", "Si", "Zhao", "Zhao", "Rou", "Yi", "Le", "Ji", "Qiu", "Ken", "Cao", "Ge", "Di", "Huan", "Huang", "Yi", "Ren", "Xiao", "Ru", "Zhou", "Yuan", "Du", "Gang", "Rong", "Gan", "Cha", "Wo", "Chang", "Gu", "Zhi", "Han", "Fu", "Fei", "Fen", "Pei", "Pang", "Jian", "Fang", "Zhun", "You", "Na", "Hang", "Ken", "Ran", "Gong", "Yu", "Wen", "Yao", "Jin", "Pi", "Qian", "Xi", "Xi", "Fei", "Ken", "Jing", "Tai", "Shen", "Zhong", "Zhang", "Xie", "Shen", "Wei", "Zhou", "Die", "Dan", "Fei", "Ba", "Bo", "Qu", "Tian", "Bei", "Gua", "Tai", "Zi", "Ku", "Zhi", "Ni", "Ping", "Zi", "Fu", "Pang", "Zhen", "Xian", "Zuo", "Pei", "Jia", "Sheng", "Zhi", "Bao", "Mu", "Qu", "Hu", "Ke", "Yi", "Yin", "Xu", "Yang", "Long", "Dong", "Ka", "Lu", "Jing", "Nu", "Yan", "Pang", "Kua", "Yi", "Guang", "Gai", "Ge", "Dong", "Zhi", "Xiao", "Xiong", "Xiong", "Er", "E", "Xing", "Pian", "Neng", "Zi", "Gui"];
const FZ = Object.freeze(PZ);
const KZ = ["Cheng", "Tiao", "Zhi", "Cui", "Mei", "Xie", "Cui", "Xie", "Mo", "Mai", "Ji", "Obiyaakasu", void 0, "Kuai", "Sa", "Zang", "Qi", "Nao", "Mi", "Nong", "Luan", "Wan", "Bo", "Wen", "Guan", "Qiu", "Jiao", "Jing", "Rou", "Heng", "Cuo", "Lie", "Shan", "Ting", "Mei", "Chun", "Shen", "Xie", "De", "Zui", "Cu", "Xiu", "Xin", "Tuo", "Pao", "Cheng", "Nei", "Fu", "Dou", "Tuo", "Niao", "Noy", "Pi", "Gu", "Gua", "Li", "Lian", "Zhang", "Cui", "Jie", "Liang", "Zhou", "Pi", "Biao", "Lun", "Pian", "Guo", "Kui", "Chui", "Dan", "Tian", "Nei", "Jing", "Jie", "La", "Yi", "An", "Ren", "Shen", "Chuo", "Fu", "Fu", "Ju", "Fei", "Qiang", "Wan", "Dong", "Pi", "Guo", "Zong", "Ding", "Wu", "Mei", "Ruan", "Zhuan", "Zhi", "Cou", "Gua", "Ou", "Di", "An", "Xing", "Nao", "Yu", "Chuan", "Nan", "Yun", "Zhong", "Rou", "E", "Sai", "Tu", "Yao", "Jian", "Wei", "Jiao", "Yu", "Jia", "Duan", "Bi", "Chang", "Fu", "Xian", "Ni", "Mian", "Wa", "Teng", "Tui", "Bang", "Qian", "Lu", "Wa", "Sou", "Tang", "Su", "Zhui", "Ge", "Yi", "Bo", "Liao", "Ji", "Pi", "Xie", "Gao", "Lu", "Bin", "Ou", "Chang", "Lu", "Guo", "Pang", "Chuai", "Piao", "Jiang", "Fu", "Tang", "Mo", "Xi", "Zhuan", "Lu", "Jiao", "Ying", "Lu", "Zhi", "Tara", "Chun", "Lian", "Tong", "Peng", "Ni", "Zha", "Liao", "Cui", "Gui", "Xiao", "Teng", "Fan", "Zhi", "Jiao", "Shan", "Wu", "Cui", "Run", "Xiang", "Sui", "Fen", "Ying", "Tan", "Zhua", "Dan", "Kuai", "Nong", "Tun", "Lian", "Bi", "Yong", "Jue", "Chu", "Yi", "Juan", "La", "Lian", "Sao", "Tun", "Gu", "Qi", "Cui", "Bin", "Xun", "Ru", "Huo", "Zang", "Xian", "Biao", "Xing", "Kuan", "La", "Yan", "Lu", "Huo", "Zang", "Luo", "Qu", "Zang", "Luan", "Ni", "Zang", "Chen", "Qian", "Wo", "Guang", "Zang", "Lin", "Guang", "Zi", "Jiao", "Nie", "Chou", "Ji", "Gao", "Chou", "Mian", "Nie", "Zhi", "Zhi", "Ge", "Jian", "Die", "Zhi", "Xiu", "Tai", "Zhen", "Jiu", "Xian", "Yu", "Cha"];
const RZ = Object.freeze(KZ);
const AZ = ["Yao", "Yu", "Chong", "Xi", "Xi", "Jiu", "Yu", "Yu", "Xing", "Ju", "Jiu", "Xin", "She", "She", "Yadoru", "Jiu", "Shi", "Tan", "Shu", "Shi", "Tian", "Dan", "Pu", "Pu", "Guan", "Hua", "Tan", "Chuan", "Shun", "Xia", "Wu", "Zhou", "Dao", "Gang", "Shan", "Yi", void 0, "Pa", "Tai", "Fan", "Ban", "Chuan", "Hang", "Fang", "Ban", "Que", "Hesaki", "Zhong", "Jian", "Cang", "Ling", "Zhu", "Ze", "Duo", "Bo", "Xian", "Ge", "Chuan", "Jia", "Lu", "Hong", "Pang", "Xi", void 0, "Fu", "Zao", "Feng", "Li", "Shao", "Yu", "Lang", "Ting", void 0, "Wei", "Bo", "Meng", "Nian", "Ju", "Huang", "Shou", "Zong", "Bian", "Mao", "Die", void 0, "Bang", "Cha", "Yi", "Sao", "Cang", "Cao", "Lou", "Dai", "Sori", "Yao", "Tong", "Yofune", "Dang", "Tan", "Lu", "Yi", "Jie", "Jian", "Huo", "Meng", "Qi", "Lu", "Lu", "Chan", "Shuang", "Gen", "Liang", "Jian", "Jian", "Se", "Yan", "Fu", "Ping", "Yan", "Yan", "Cao", "Cao", "Yi", "Le", "Ting", "Qiu", "Ai", "Nai", "Tiao", "Jiao", "Jie", "Peng", "Wan", "Yi", "Chai", "Mian", "Mie", "Gan", "Qian", "Yu", "Yu", "Shuo", "Qiong", "Tu", "Xia", "Qi", "Mang", "Zi", "Hui", "Sui", "Zhi", "Xiang", "Bi", "Fu", "Tun", "Wei", "Wu", "Zhi", "Qi", "Shan", "Wen", "Qian", "Ren", "Fou", "Kou", "Jie", "Lu", "Xu", "Ji", "Qin", "Qi", "Yuan", "Fen", "Ba", "Rui", "Xin", "Ji", "Hua", "Hua", "Fang", "Wu", "Jue", "Gou", "Zhi", "Yun", "Qin", "Ao", "Chu", "Mao", "Ya", "Fei", "Reng", "Hang", "Cong", "Yin", "You", "Bian", "Yi", "Susa", "Wei", "Li", "Pi", "E", "Xian", "Chang", "Cang", "Meng", "Su", "Yi", "Yuan", "Ran", "Ling", "Tai", "Tiao", "Di", "Miao", "Qiong", "Li", "Yong", "Ke", "Mu", "Pei", "Bao", "Gou", "Min", "Yi", "Yi", "Ju", "Pi", "Ruo", "Ku", "Zhu", "Ni", "Bo", "Bing", "Shan", "Qiu", "Yao", "Xian", "Ben", "Hong", "Ying", "Zha", "Dong", "Ju", "Die", "Nie", "Gan", "Hu", "Ping", "Mei", "Fu", "Sheng", "Gu", "Bi", "Wei"];
const _Z = Object.freeze(AZ);
const OZ = ["Fu", "Zhuo", "Mao", "Fan", "Qie", "Mao", "Mao", "Ba", "Zi", "Mo", "Zi", "Di", "Chi", "Ji", "Jing", "Long", void 0, "Niao", void 0, "Xue", "Ying", "Qiong", "Ge", "Ming", "Li", "Rong", "Yin", "Gen", "Qian", "Chai", "Chen", "Yu", "Xiu", "Zi", "Lie", "Wu", "Ji", "Kui", "Ce", "Chong", "Ci", "Gou", "Guang", "Mang", "Chi", "Jiao", "Jiao", "Fu", "Yu", "Zhu", "Zi", "Jiang", "Hui", "Yin", "Cha", "Fa", "Rong", "Ru", "Chong", "Mang", "Tong", "Zhong", void 0, "Zhu", "Xun", "Huan", "Kua", "Quan", "Gai", "Da", "Jing", "Xing", "Quan", "Cao", "Jing", "Er", "An", "Shou", "Chi", "Ren", "Jian", "Ti", "Huang", "Ping", "Li", "Jin", "Lao", "Shu", "Zhuang", "Da", "Jia", "Rao", "Bi", "Ze", "Qiao", "Hui", "Qi", "Dang", void 0, "Rong", "Hun", "Ying", "Luo", "Ying", "Xun", "Jin", "Sun", "Yin", "Mai", "Hong", "Zhou", "Yao", "Du", "Wei", "Chu", "Dou", "Fu", "Ren", "Yin", "He", "Bi", "Bu", "Yun", "Di", "Tu", "Sui", "Sui", "Cheng", "Chen", "Wu", "Bie", "Xi", "Geng", "Li", "Fu", "Zhu", "Mo", "Li", "Zhuang", "Ji", "Duo", "Qiu", "Sha", "Suo", "Chen", "Feng", "Ju", "Mei", "Meng", "Xing", "Jing", "Che", "Xin", "Jun", "Yan", "Ting", "Diao", "Cuo", "Wan", "Han", "You", "Cuo", "Jia", "Wang", "You", "Niu", "Shao", "Xian", "Lang", "Fu", "E", "Mo", "Wen", "Jie", "Nan", "Mu", "Kan", "Lai", "Lian", "Shi", "Wo", "Usagi", "Lian", "Huo", "You", "Ying", "Ying", "Nuc", "Chun", "Mang", "Mang", "Ci", "Wan", "Jing", "Di", "Qu", "Dong", "Jian", "Zou", "Gu", "La", "Lu", "Ju", "Wei", "Jun", "Nie", "Kun", "He", "Pu", "Zi", "Gao", "Guo", "Fu", "Lun", "Chang", "Chou", "Song", "Chui", "Zhan", "Men", "Cai", "Ba", "Li", "Tu", "Bo", "Han", "Bao", "Qin", "Juan", "Xi", "Qin", "Di", "Jie", "Pu", "Dang", "Jin", "Zhao", "Tai", "Geng", "Hua", "Gu", "Ling", "Fei", "Jin", "An", "Wang", "Beng", "Zhou", "Yan", "Ju", "Jian", "Lin", "Tan", "Shu", "Tian", "Dao"];
const zZ = Object.freeze(OZ);
const EZ = ["Hu", "Qi", "He", "Cui", "Tao", "Chun", "Bei", "Chang", "Huan", "Fei", "Lai", "Qi", "Meng", "Ping", "Wei", "Dan", "Sha", "Huan", "Yan", "Yi", "Tiao", "Qi", "Wan", "Ce", "Nai", "Kutabireru", "Tuo", "Jiu", "Tie", "Luo", void 0, void 0, "Meng", void 0, "Yaji", void 0, "Ying", "Ying", "Ying", "Xiao", "Sa", "Qiu", "Ke", "Xiang", "Wan", "Yu", "Yu", "Fu", "Lian", "Xuan", "Yuan", "Nan", "Ze", "Wo", "Chun", "Xiao", "Yu", "Pian", "Mao", "An", "E", "Luo", "Ying", "Huo", "Gua", "Jiang", "Mian", "Zuo", "Zuo", "Ju", "Bao", "Rou", "Xi", "Xie", "An", "Qu", "Jian", "Fu", "Lu", "Jing", "Pen", "Feng", "Hong", "Hong", "Hou", "Yan", "Tu", "Zhu", "Zi", "Xiang", "Shen", "Ge", "Jie", "Jing", "Mi", "Huang", "Shen", "Pu", "Gai", "Dong", "Zhou", "Qian", "Wei", "Bo", "Wei", "Pa", "Ji", "Hu", "Zang", "Jia", "Duan", "Yao", "Jun", "Cong", "Quan", "Wei", "Xian", "Kui", "Ting", "Hun", "Xi", "Shi", "Qi", "Lan", "Zong", "Yao", "Yuan", "Mei", "Yun", "Shu", "Di", "Zhuan", "Guan", "Sukumo", "Xue", "Chan", "Kai", "Kui", void 0, "Jiang", "Lou", "Wei", "Pai", void 0, "Sou", "Yin", "Shi", "Chun", "Shi", "Yun", "Zhen", "Lang", "Nu", "Meng", "He", "Que", "Suan", "Yuan", "Li", "Ju", "Xi", "Pang", "Chu", "Xu", "Tu", "Liu", "Wo", "Zhen", "Qian", "Zu", "Po", "Cuo", "Yuan", "Chu", "Yu", "Kuai", "Pan", "Pu", "Pu", "Na", "Shuo", "Xi", "Fen", "Yun", "Zheng", "Jian", "Ji", "Ruo", "Cang", "En", "Mi", "Hao", "Sun", "Zhen", "Ming", "Sou", "Xu", "Liu", "Xi", "Gu", "Lang", "Rong", "Weng", "Gai", "Cuo", "Shi", "Tang", "Luo", "Ru", "Suo", "Xian", "Bei", "Yao", "Gui", "Bi", "Zong", "Gun", "Za", "Xiu", "Ce", "Hai", "Lan", void 0, "Ji", "Li", "Can", "Lang", "Yu", void 0, "Ying", "Mo", "Diao", "Tiao", "Mao", "Tong", "Zhu", "Peng", "An", "Lian", "Cong", "Xi", "Ping", "Qiu", "Jin", "Chun", "Jie", "Wei", "Tui", "Cao", "Yu", "Yi", "Ji", "Liao", "Bi", "Lu", "Su"];
const $Z = Object.freeze(EZ);
const qZ = ["Bu", "Zhang", "Luo", "Jiang", "Man", "Yan", "Ling", "Ji", "Piao", "Gun", "Han", "Di", "Su", "Lu", "She", "Shang", "Di", "Mie", "Xun", "Man", "Bo", "Di", "Cuo", "Zhe", "Sen", "Xuan", "Wei", "Hu", "Ao", "Mi", "Lou", "Cu", "Zhong", "Cai", "Po", "Jiang", "Mi", "Cong", "Niao", "Hui", "Jun", "Yin", "Jian", "Yan", "Shu", "Yin", "Kui", "Chen", "Hu", "Sha", "Kou", "Qian", "Ma", "Zang", "Sonoko", "Qiang", "Dou", "Lian", "Lin", "Kou", "Ai", "Bi", "Li", "Wei", "Ji", "Xun", "Sheng", "Fan", "Meng", "Ou", "Chan", "Dian", "Xun", "Jiao", "Rui", "Rui", "Lei", "Yu", "Qiao", "Chu", "Hua", "Jian", "Mai", "Yun", "Bao", "You", "Qu", "Lu", "Rao", "Hui", "E", "Teng", "Fei", "Jue", "Zui", "Fa", "Ru", "Fen", "Kui", "Shun", "Rui", "Ya", "Xu", "Fu", "Jue", "Dang", "Wu", "Tong", "Si", "Xiao", "Xi", "Long", "Yun", void 0, "Qi", "Jian", "Yun", "Sun", "Ling", "Yu", "Xia", "Yong", "Ji", "Hong", "Si", "Nong", "Lei", "Xuan", "Yun", "Yu", "Xi", "Hao", "Bo", "Hao", "Ai", "Wei", "Hui", "Wei", "Ji", "Ci", "Xiang", "Luan", "Mie", "Yi", "Leng", "Jiang", "Can", "Shen", "Qiang", "Lian", "Ke", "Yuan", "Da", "Ti", "Tang", "Xie", "Bi", "Zhan", "Sun", "Lian", "Fan", "Ding", "Jie", "Gu", "Xie", "Shu", "Jian", "Kao", "Hong", "Sa", "Xin", "Xun", "Yao", "Hie", "Sou", "Shu", "Xun", "Dui", "Pin", "Wei", "Neng", "Chou", "Mai", "Ru", "Piao", "Tai", "Qi", "Zao", "Chen", "Zhen", "Er", "Ni", "Ying", "Gao", "Cong", "Xiao", "Qi", "Fa", "Jian", "Xu", "Kui", "Jie", "Bian", "Diao", "Mi", "Lan", "Jin", "Cang", "Miao", "Qiong", "Qie", "Xian", void 0, "Ou", "Xian", "Su", "Lu", "Yi", "Xu", "Xie", "Li", "Yi", "La", "Lei", "Xiao", "Di", "Zhi", "Bei", "Teng", "Yao", "Mo", "Huan", "Piao", "Fan", "Sou", "Tan", "Tui", "Qiong", "Qiao", "Wei", "Liu", "Hui", void 0, "Gao", "Yun", void 0, "Li", "Shu", "Chu", "Ai", "Lin", "Zao", "Xuan", "Chen", "Lai", "Huo"];
const IZ = Object.freeze(qZ);
const UZ = ["Tuo", "Wu", "Rui", "Rui", "Qi", "Heng", "Lu", "Su", "Tui", "Mang", "Yun", "Pin", "Yu", "Xun", "Ji", "Jiong", "Xian", "Mo", "Hagi", "Su", "Jiong", void 0, "Nie", "Bo", "Rang", "Yi", "Xian", "Yu", "Ju", "Lian", "Lian", "Yin", "Qiang", "Ying", "Long", "Tong", "Wei", "Yue", "Ling", "Qu", "Yao", "Fan", "Mi", "Lan", "Kui", "Lan", "Ji", "Dang", "Katsura", "Lei", "Lei", "Hua", "Feng", "Zhi", "Wei", "Kui", "Zhan", "Huai", "Li", "Ji", "Mi", "Lei", "Huai", "Luo", "Ji", "Kui", "Lu", "Jian", "San", void 0, "Lei", "Quan", "Xiao", "Yi", "Luan", "Men", "Bie", "Hu", "Hu", "Lu", "Nue", "Lu", "Si", "Xiao", "Qian", "Chu", "Hu", "Xu", "Cuo", "Fu", "Xu", "Xu", "Lu", "Hu", "Yu", "Hao", "Jiao", "Ju", "Guo", "Bao", "Yan", "Zhan", "Zhan", "Kui", "Ban", "Xi", "Shu", "Chong", "Qiu", "Diao", "Ji", "Qiu", "Cheng", "Shi", void 0, "Di", "Zhe", "She", "Yu", "Gan", "Zi", "Hong", "Hui", "Meng", "Ge", "Sui", "Xia", "Chai", "Shi", "Yi", "Ma", "Xiang", "Fang", "E", "Pa", "Chi", "Qian", "Wen", "Wen", "Rui", "Bang", "Bi", "Yue", "Yue", "Jun", "Qi", "Ran", "Yin", "Qi", "Tian", "Yuan", "Jue", "Hui", "Qin", "Qi", "Zhong", "Ya", "Ci", "Mu", "Wang", "Fen", "Fen", "Hang", "Gong", "Zao", "Fu", "Ran", "Jie", "Fu", "Chi", "Dou", "Piao", "Xian", "Ni", "Te", "Qiu", "You", "Zha", "Ping", "Chi", "You", "He", "Han", "Ju", "Li", "Fu", "Ran", "Zha", "Gou", "Pi", "Bo", "Xian", "Zhu", "Diao", "Bie", "Bing", "Gu", "Ran", "Qu", "She", "Tie", "Ling", "Gu", "Dan", "Gu", "Ying", "Li", "Cheng", "Qu", "Mou", "Ge", "Ci", "Hui", "Hui", "Mang", "Fu", "Yang", "Wa", "Lie", "Zhu", "Yi", "Xian", "Kuo", "Jiao", "Li", "Yi", "Ping", "Ji", "Ha", "She", "Yi", "Wang", "Mo", "Qiong", "Qie", "Gui", "Gong", "Zhi", "Man", "Ebi", "Zhi", "Jia", "Rao", "Si", "Qi", "Xing", "Lie", "Qiu", "Shao", "Yong", "Jia", "Shui", "Che", "Bai", "E", "Han"];
const VZ = Object.freeze(UZ);
const i1 = ["Shu", "Xuan", "Feng", "Shen", "Zhen", "Fu", "Xian", "Zhe", "Wu", "Fu", "Li", "Lang", "Bi", "Chu", "Yuan", "You", "Jie", "Dan", "Yan", "Ting", "Dian", "Shui", "Hui", "Gua", "Zhi", "Song", "Fei", "Ju", "Mi", "Qi", "Qi", "Yu", "Jun", "Zha", "Meng", "Qiang", "Si", "Xi", "Lun", "Li", "Die", "Tiao", "Tao", "Kun", "Gan", "Han", "Yu", "Bang", "Fei", "Pi", "Wei", "Dun", "Yi", "Yuan", "Su", "Quan", "Qian", "Rui", "Ni", "Qing", "Wei", "Liang", "Guo", "Wan", "Dong", "E", "Ban", "Di", "Wang", "Can", "Yang", "Ying", "Guo", "Chan", void 0, "La", "Ke", "Ji", "He", "Ting", "Mai", "Xu", "Mian", "Yu", "Jie", "Shi", "Xuan", "Huang", "Yan", "Bian", "Rou", "Wei", "Fu", "Yuan", "Mei", "Wei", "Fu", "Ruan", "Xie", "You", "Qiu", "Mao", "Xia", "Ying", "Shi", "Chong", "Tang", "Zhu", "Zong", "Ti", "Fu", "Yuan", "Hui", "Meng", "La", "Du", "Hu", "Qiu", "Die", "Li", "Gua", "Yun", "Ju", "Nan", "Lou", "Qun", "Rong", "Ying", "Jiang", void 0, "Lang", "Pang", "Si", "Xi", "Ci", "Xi", "Yuan", "Weng", "Lian", "Sou", "Ban", "Rong", "Rong", "Ji", "Wu", "Qiu", "Han", "Qin", "Yi", "Bi", "Hua", "Tang", "Yi", "Du", "Nai", "He", "Hu", "Hui", "Ma", "Ming", "Yi", "Wen", "Ying", "Teng", "Yu", "Cang", "So", "Ebi", "Man", void 0, "Shang", "Zhe", "Cao", "Chi", "Di", "Ao", "Lu", "Wei", "Zhi", "Tang", "Chen", "Piao", "Qu", "Pi", "Yu", "Jian", "Luo", "Lou", "Qin", "Zhong", "Yin", "Jiang", "Shuai", "Wen", "Jiao", "Wan", "Zhi", "Zhe", "Ma", "Ma", "Guo", "Liu", "Mao", "Xi", "Cong", "Li", "Man", "Xiao", "Kamakiri", "Zhang", "Mang", "Xiang", "Mo", "Zui", "Si", "Qiu", "Te", "Zhi", "Peng", "Peng", "Jiao", "Qu", "Bie", "Liao", "Pan", "Gui", "Xi", "Ji", "Zhuan", "Huang", "Fei", "Lao", "Jue", "Jue", "Hui", "Yin", "Chan", "Jiao", "Shan", "Rao", "Xiao", "Mou", "Chong", "Xun", "Si", void 0, "Cheng", "Dang", "Li", "Xie", "Shan", "Yi", "Jing", "Da", "Chan", "Qi"];
const o1 = Object.freeze(i1);
const e1 = ["Ci", "Xiang", "She", "Luo", "Qin", "Ying", "Chai", "Li", "Ze", "Xuan", "Lian", "Zhu", "Ze", "Xie", "Mang", "Xie", "Qi", "Rong", "Jian", "Meng", "Hao", "Ruan", "Huo", "Zhuo", "Jie", "Bin", "He", "Mie", "Fan", "Lei", "Jie", "La", "Mi", "Li", "Chun", "Li", "Qiu", "Nie", "Lu", "Du", "Xiao", "Zhu", "Long", "Li", "Long", "Feng", "Ye", "Beng", "Shang", "Gu", "Juan", "Ying", void 0, "Xi", "Can", "Qu", "Quan", "Du", "Can", "Man", "Jue", "Jie", "Zhu", "Zha", "Xie", "Huang", "Niu", "Pei", "Nu", "Xin", "Zhong", "Mo", "Er", "Ke", "Mie", "Xi", "Xing", "Yan", "Kan", "Yuan", void 0, "Ling", "Xuan", "Shu", "Xian", "Tong", "Long", "Jie", "Xian", "Ya", "Hu", "Wei", "Dao", "Chong", "Wei", "Dao", "Zhun", "Heng", "Qu", "Yi", "Yi", "Bu", "Gan", "Yu", "Biao", "Cha", "Yi", "Shan", "Chen", "Fu", "Gun", "Fen", "Shuai", "Jie", "Na", "Zhong", "Dan", "Ri", "Zhong", "Zhong", "Xie", "Qi", "Xie", "Ran", "Zhi", "Ren", "Qin", "Jin", "Jun", "Yuan", "Mei", "Chai", "Ao", "Niao", "Hui", "Ran", "Jia", "Tuo", "Ling", "Dai", "Bao", "Pao", "Yao", "Zuo", "Bi", "Shao", "Tan", "Ju", "He", "Shu", "Xiu", "Zhen", "Yi", "Pa", "Bo", "Di", "Wa", "Fu", "Gun", "Zhi", "Zhi", "Ran", "Pan", "Yi", "Mao", "Tuo", "Na", "Kou", "Xian", "Chan", "Qu", "Bei", "Gun", "Xi", "Ne", "Bo", "Horo", "Fu", "Yi", "Chi", "Ku", "Ren", "Jiang", "Jia", "Cun", "Mo", "Jie", "Er", "Luo", "Ru", "Zhu", "Gui", "Yin", "Cai", "Lie", "Kamishimo", "Yuki", "Zhuang", "Dang", void 0, "Kun", "Ken", "Niao", "Shu", "Jia", "Kun", "Cheng", "Li", "Juan", "Shen", "Pou", "Ge", "Yi", "Yu", "Zhen", "Liu", "Qiu", "Qun", "Ji", "Yi", "Bu", "Zhuang", "Shui", "Sha", "Qun", "Li", "Lian", "Lian", "Ku", "Jian", "Fou", "Chan", "Bi", "Gun", "Tao", "Yuan", "Ling", "Chi", "Chang", "Chou", "Duo", "Biao", "Liang", "Chang", "Pei", "Pei", "Fei", "Yuan", "Luo", "Guo", "Yan", "Du", "Xi", "Zhi", "Ju", "Qi"];
const n1 = Object.freeze(e1);
const a1 = ["Ji", "Zhi", "Gua", "Ken", "Che", "Ti", "Ti", "Fu", "Chong", "Xie", "Bian", "Die", "Kun", "Duan", "Xiu", "Xiu", "He", "Yuan", "Bao", "Bao", "Fu", "Yu", "Tuan", "Yan", "Hui", "Bei", "Chu", "Lu", "Ena", "Hitoe", "Yun", "Da", "Gou", "Da", "Huai", "Rong", "Yuan", "Ru", "Nai", "Jiong", "Suo", "Ban", "Tun", "Chi", "Sang", "Niao", "Ying", "Jie", "Qian", "Huai", "Ku", "Lian", "Bao", "Li", "Zhe", "Shi", "Lu", "Yi", "Die", "Xie", "Xian", "Wei", "Biao", "Cao", "Ji", "Jiang", "Sen", "Bao", "Xiang", "Chihaya", "Pu", "Jian", "Zhuan", "Jian", "Zui", "Ji", "Dan", "Za", "Fan", "Bo", "Xiang", "Xin", "Bie", "Rao", "Man", "Lan", "Ao", "Duo", "Gui", "Cao", "Sui", "Nong", "Chan", "Lian", "Bi", "Jin", "Dang", "Shu", "Tan", "Bi", "Lan", "Pu", "Ru", "Zhi", void 0, "Shu", "Wa", "Shi", "Bai", "Xie", "Bo", "Chen", "Lai", "Long", "Xi", "Xian", "Lan", "Zhe", "Dai", "Tasuki", "Zan", "Shi", "Jian", "Pan", "Yi", "Ran", "Ya", "Xi", "Xi", "Yao", "Feng", "Tan", void 0, "Biao", "Fu", "Ba", "He", "Ji", "Ji", "Jian", "Guan", "Bian", "Yan", "Gui", "Jue", "Pian", "Mao", "Mi", "Mi", "Mie", "Shi", "Si", "Zhan", "Luo", "Jue", "Mi", "Tiao", "Lian", "Yao", "Zhi", "Jun", "Xi", "Shan", "Wei", "Xi", "Tian", "Yu", "Lan", "E", "Du", "Qin", "Pang", "Ji", "Ming", "Ying", "Gou", "Qu", "Zhan", "Jin", "Guan", "Deng", "Jian", "Luo", "Qu", "Jian", "Wei", "Jue", "Qu", "Luo", "Lan", "Shen", "Di", "Guan", "Jian", "Guan", "Yan", "Gui", "Mi", "Shi", "Zhan", "Lan", "Jue", "Ji", "Xi", "Di", "Tian", "Yu", "Gou", "Jin", "Qu", "Jiao", "Jiu", "Jin", "Cu", "Jue", "Zhi", "Chao", "Ji", "Gu", "Dan", "Zui", "Di", "Shang", "Hua", "Quan", "Ge", "Chi", "Jie", "Gui", "Gong", "Chu", "Jie", "Hun", "Qiu", "Xing", "Su", "Ni", "Ji", "Lu", "Zhi", "Zha", "Bi", "Xing", "Hu", "Shang", "Gong", "Zhi", "Xue", "Chu", "Xi", "Yi", "Lu", "Jue", "Xi", "Yan", "Xi"];
const u1 = Object.freeze(a1);
const g1 = ["Yan", "Yan", "Ding", "Fu", "Qiu", "Qiu", "Jiao", "Hong", "Ji", "Fan", "Xun", "Diao", "Hong", "Cha", "Tao", "Xu", "Jie", "Yi", "Ren", "Xun", "Yin", "Shan", "Qi", "Tuo", "Ji", "Xun", "Yin", "E", "Fen", "Ya", "Yao", "Song", "Shen", "Yin", "Xin", "Jue", "Xiao", "Ne", "Chen", "You", "Zhi", "Xiong", "Fang", "Xin", "Chao", "She", "Xian", "Sha", "Tun", "Xu", "Yi", "Yi", "Su", "Chi", "He", "Shen", "He", "Xu", "Zhen", "Zhu", "Zheng", "Gou", "Zi", "Zi", "Zhan", "Gu", "Fu", "Quan", "Die", "Ling", "Di", "Yang", "Li", "Nao", "Pan", "Zhou", "Gan", "Yi", "Ju", "Ao", "Zha", "Tuo", "Yi", "Qu", "Zhao", "Ping", "Bi", "Xiong", "Qu", "Ba", "Da", "Zu", "Tao", "Zhu", "Ci", "Zhe", "Yong", "Xu", "Xun", "Yi", "Huang", "He", "Shi", "Cha", "Jiao", "Shi", "Hen", "Cha", "Gou", "Gui", "Quan", "Hui", "Jie", "Hua", "Gai", "Xiang", "Wei", "Shen", "Chou", "Tong", "Mi", "Zhan", "Ming", "E", "Hui", "Yan", "Xiong", "Gua", "Er", "Beng", "Tiao", "Chi", "Lei", "Zhu", "Kuang", "Kua", "Wu", "Yu", "Teng", "Ji", "Zhi", "Ren", "Su", "Lang", "E", "Kuang", "E", "Shi", "Ting", "Dan", "Bo", "Chan", "You", "Heng", "Qiao", "Qin", "Shua", "An", "Yu", "Xiao", "Cheng", "Jie", "Xian", "Wu", "Wu", "Gao", "Song", "Pu", "Hui", "Jing", "Shuo", "Zhen", "Shuo", "Du", "Yasashi", "Chang", "Shui", "Jie", "Ke", "Qu", "Cong", "Xiao", "Sui", "Wang", "Xuan", "Fei", "Chi", "Ta", "Yi", "Na", "Yin", "Diao", "Pi", "Chuo", "Chan", "Chen", "Zhun", "Ji", "Qi", "Tan", "Zhui", "Wei", "Ju", "Qing", "Jian", "Zheng", "Ze", "Zou", "Qian", "Zhuo", "Liang", "Jian", "Zhu", "Hao", "Lun", "Shen", "Biao", "Huai", "Pian", "Yu", "Die", "Xu", "Pian", "Shi", "Xuan", "Shi", "Hun", "Hua", "E", "Zhong", "Di", "Xie", "Fu", "Pu", "Ting", "Jian", "Qi", "Yu", "Zi", "Chuan", "Xi", "Hui", "Yin", "An", "Xian", "Nan", "Chen", "Feng", "Zhu", "Yang", "Yan", "Heng", "Xuan", "Ge", "Nuo", "Qi"];
const d1 = Object.freeze(g1);
const t1 = ["Mou", "Ye", "Wei", void 0, "Teng", "Zou", "Shan", "Jian", "Bo", "Ku", "Huang", "Huo", "Ge", "Ying", "Mi", "Xiao", "Mi", "Xi", "Qiang", "Chen", "Nue", "Ti", "Su", "Bang", "Chi", "Qian", "Shi", "Jiang", "Yuan", "Xie", "Xue", "Tao", "Yao", "Yao", void 0, "Yu", "Biao", "Cong", "Qing", "Li", "Mo", "Mo", "Shang", "Zhe", "Miu", "Jian", "Ze", "Jie", "Lian", "Lou", "Can", "Ou", "Guan", "Xi", "Zhuo", "Ao", "Ao", "Jin", "Zhe", "Yi", "Hu", "Jiang", "Man", "Chao", "Han", "Hua", "Chan", "Xu", "Zeng", "Se", "Xi", "She", "Dui", "Zheng", "Nao", "Lan", "E", "Ying", "Jue", "Ji", "Zun", "Jiao", "Bo", "Hui", "Zhuan", "Mu", "Zen", "Zha", "Shi", "Qiao", "Tan", "Zen", "Pu", "Sheng", "Xuan", "Zao", "Tan", "Dang", "Sui", "Qian", "Ji", "Jiao", "Jing", "Lian", "Nou", "Yi", "Ai", "Zhan", "Pi", "Hui", "Hua", "Yi", "Yi", "Shan", "Rang", "Nou", "Qian", "Zhui", "Ta", "Hu", "Zhou", "Hao", "Ye", "Ying", "Jian", "Yu", "Jian", "Hui", "Du", "Zhe", "Xuan", "Zan", "Lei", "Shen", "Wei", "Chan", "Li", "Yi", "Bian", "Zhe", "Yan", "E", "Chou", "Wei", "Chou", "Yao", "Chan", "Rang", "Yin", "Lan", "Chen", "Huo", "Zhe", "Huan", "Zan", "Yi", "Dang", "Zhan", "Yan", "Du", "Yan", "Ji", "Ding", "Fu", "Ren", "Ji", "Jie", "Hong", "Tao", "Rang", "Shan", "Qi", "Tuo", "Xun", "Yi", "Xun", "Ji", "Ren", "Jiang", "Hui", "Ou", "Ju", "Ya", "Ne", "Xu", "E", "Lun", "Xiong", "Song", "Feng", "She", "Fang", "Jue", "Zheng", "Gu", "He", "Ping", "Zu", "Shi", "Xiong", "Zha", "Su", "Zhen", "Di", "Zou", "Ci", "Qu", "Zhao", "Bi", "Yi", "Yi", "Kuang", "Lei", "Shi", "Gua", "Shi", "Jie", "Hui", "Cheng", "Zhu", "Shen", "Hua", "Dan", "Gou", "Quan", "Gui", "Xun", "Yi", "Zheng", "Gai", "Xiang", "Cha", "Hun", "Xu", "Zhou", "Jie", "Wu", "Yu", "Qiao", "Wu", "Gao", "You", "Hui", "Kuang", "Shuo", "Song", "Ai", "Qing", "Zhu", "Zou", "Nuo", "Du", "Zhuo", "Fei", "Ke", "Wei"];
const s1 = Object.freeze(t1);
const h1 = ["Yu", "Shui", "Shen", "Diao", "Chan", "Liang", "Zhun", "Sui", "Tan", "Shen", "Yi", "Mou", "Chen", "Die", "Huang", "Jian", "Xie", "Nue", "Ye", "Wei", "E", "Yu", "Xuan", "Chan", "Zi", "An", "Yan", "Di", "Mi", "Pian", "Xu", "Mo", "Dang", "Su", "Xie", "Yao", "Bang", "Shi", "Qian", "Mi", "Jin", "Man", "Zhe", "Jian", "Miu", "Tan", "Zen", "Qiao", "Lan", "Pu", "Jue", "Yan", "Qian", "Zhan", "Chen", "Gu", "Qian", "Hong", "Xia", "Jue", "Hong", "Han", "Hong", "Xi", "Xi", "Huo", "Liao", "Han", "Du", "Long", "Dou", "Jiang", "Qi", "Shi", "Li", "Deng", "Wan", "Bi", "Shu", "Xian", "Feng", "Zhi", "Zhi", "Yan", "Yan", "Shi", "Chu", "Hui", "Tun", "Yi", "Tun", "Yi", "Jian", "Ba", "Hou", "E", "Cu", "Xiang", "Huan", "Jian", "Ken", "Gai", "Qu", "Fu", "Xi", "Bin", "Hao", "Yu", "Zhu", "Jia", void 0, "Xi", "Bo", "Wen", "Huan", "Bin", "Di", "Zong", "Fen", "Yi", "Zhi", "Bao", "Chai", "Han", "Pi", "Na", "Pi", "Gou", "Na", "You", "Diao", "Mo", "Si", "Xiu", "Huan", "Kun", "He", "He", "Mo", "Han", "Mao", "Li", "Ni", "Bi", "Yu", "Jia", "Tuan", "Mao", "Pi", "Xi", "E", "Ju", "Mo", "Chu", "Tan", "Huan", "Jue", "Bei", "Zhen", "Yuan", "Fu", "Cai", "Gong", "Te", "Yi", "Hang", "Wan", "Pin", "Huo", "Fan", "Tan", "Guan", "Ze", "Zhi", "Er", "Zhu", "Shi", "Bi", "Zi", "Er", "Gui", "Pian", "Bian", "Mai", "Dai", "Sheng", "Kuang", "Fei", "Tie", "Yi", "Chi", "Mao", "He", "Bi", "Lu", "Ren", "Hui", "Gai", "Pian", "Zi", "Jia", "Xu", "Zei", "Jiao", "Gai", "Zang", "Jian", "Ying", "Xun", "Zhen", "She", "Bin", "Bin", "Qiu", "She", "Chuan", "Zang", "Zhou", "Lai", "Zan", "Si", "Chen", "Shang", "Tian", "Pei", "Geng", "Xian", "Mai", "Jian", "Sui", "Fu", "Tan", "Cong", "Cong", "Zhi", "Ji", "Zhang", "Du", "Jin", "Xiong", "Shun", "Yun", "Bao", "Zai", "Lai", "Feng", "Cang", "Ji", "Sheng", "Ai", "Zhuan", "Fu", "Gou", "Sai", "Ze", "Liao"];
const r1 = Object.freeze(h1);
const l1 = ["Wei", "Bai", "Chen", "Zhuan", "Zhi", "Zhui", "Biao", "Yun", "Zeng", "Tan", "Zan", "Yan", void 0, "Shan", "Wan", "Ying", "Jin", "Gan", "Xian", "Zang", "Bi", "Du", "Shu", "Yan", void 0, "Xuan", "Long", "Gan", "Zang", "Bei", "Zhen", "Fu", "Yuan", "Gong", "Cai", "Ze", "Xian", "Bai", "Zhang", "Huo", "Zhi", "Fan", "Tan", "Pin", "Bian", "Gou", "Zhu", "Guan", "Er", "Jian", "Bi", "Shi", "Tie", "Gui", "Kuang", "Dai", "Mao", "Fei", "He", "Yi", "Zei", "Zhi", "Jia", "Hui", "Zi", "Ren", "Lu", "Zang", "Zi", "Gai", "Jin", "Qiu", "Zhen", "Lai", "She", "Fu", "Du", "Ji", "Shu", "Shang", "Si", "Bi", "Zhou", "Geng", "Pei", "Tan", "Lai", "Feng", "Zhui", "Fu", "Zhuan", "Sai", "Ze", "Yan", "Zan", "Yun", "Zeng", "Shan", "Ying", "Gan", "Chi", "Xi", "She", "Nan", "Xiong", "Xi", "Cheng", "He", "Cheng", "Zhe", "Xia", "Tang", "Zou", "Zou", "Li", "Jiu", "Fu", "Zhao", "Gan", "Qi", "Shan", "Qiong", "Qin", "Xian", "Ci", "Jue", "Qin", "Chi", "Ci", "Chen", "Chen", "Die", "Ju", "Chao", "Di", "Se", "Zhan", "Zhu", "Yue", "Qu", "Jie", "Chi", "Chu", "Gua", "Xue", "Ci", "Tiao", "Duo", "Lie", "Gan", "Suo", "Cu", "Xi", "Zhao", "Su", "Yin", "Ju", "Jian", "Que", "Tang", "Chuo", "Cui", "Lu", "Qu", "Dang", "Qiu", "Zi", "Ti", "Qu", "Chi", "Huang", "Qiao", "Qiao", "Yao", "Zao", "Ti", void 0, "Zan", "Zan", "Zu", "Pa", "Bao", "Ku", "Ke", "Dun", "Jue", "Fu", "Chen", "Jian", "Fang", "Zhi", "Sa", "Yue", "Pa", "Qi", "Yue", "Qiang", "Tuo", "Tai", "Yi", "Nian", "Ling", "Mei", "Ba", "Die", "Ku", "Tuo", "Jia", "Ci", "Pao", "Qia", "Zhu", "Ju", "Die", "Zhi", "Fu", "Pan", "Ju", "Shan", "Bo", "Ni", "Ju", "Li", "Gen", "Yi", "Ji", "Dai", "Xian", "Jiao", "Duo", "Zhu", "Zhuan", "Kua", "Zhuai", "Gui", "Qiong", "Kui", "Xiang", "Chi", "Lu", "Beng", "Zhi", "Jia", "Tiao", "Cai", "Jian", "Ta", "Qiao", "Bi", "Xian", "Duo", "Ji", "Ju", "Ji", "Shu", "Tu"];
const v1 = Object.freeze(l1);
const y1 = ["Chu", "Jing", "Nie", "Xiao", "Bo", "Chi", "Qun", "Mou", "Shu", "Lang", "Yong", "Jiao", "Chou", "Qiao", void 0, "Ta", "Jian", "Qi", "Wo", "Wei", "Zhuo", "Jie", "Ji", "Nie", "Ju", "Ju", "Lun", "Lu", "Leng", "Huai", "Ju", "Chi", "Wan", "Quan", "Ti", "Bo", "Zu", "Qie", "Ji", "Cu", "Zong", "Cai", "Zong", "Peng", "Zhi", "Zheng", "Dian", "Zhi", "Yu", "Duo", "Dun", "Chun", "Yong", "Zhong", "Di", "Zhe", "Chen", "Chuai", "Jian", "Gua", "Tang", "Ju", "Fu", "Zu", "Die", "Pian", "Rou", "Nuo", "Ti", "Cha", "Tui", "Jian", "Dao", "Cuo", "Xi", "Ta", "Qiang", "Zhan", "Dian", "Ti", "Ji", "Nie", "Man", "Liu", "Zhan", "Bi", "Chong", "Lu", "Liao", "Cu", "Tang", "Dai", "Suo", "Xi", "Kui", "Ji", "Zhi", "Qiang", "Di", "Man", "Zong", "Lian", "Beng", "Zao", "Nian", "Bie", "Tui", "Ju", "Deng", "Ceng", "Xian", "Fan", "Chu", "Zhong", "Dun", "Bo", "Cu", "Zu", "Jue", "Jue", "Lin", "Ta", "Qiao", "Qiao", "Pu", "Liao", "Dun", "Cuan", "Kuang", "Zao", "Ta", "Bi", "Bi", "Zhu", "Ju", "Chu", "Qiao", "Dun", "Chou", "Ji", "Wu", "Yue", "Nian", "Lin", "Lie", "Zhi", "Li", "Zhi", "Chan", "Chu", "Duan", "Wei", "Long", "Lin", "Xian", "Wei", "Zuan", "Lan", "Xie", "Rang", "Xie", "Nie", "Ta", "Qu", "Jie", "Cuan", "Zuan", "Xi", "Kui", "Jue", "Lin", "Shen", "Gong", "Dan", "Segare", "Qu", "Ti", "Duo", "Duo", "Gong", "Lang", "Nerau", "Luo", "Ai", "Ji", "Ju", "Tang", "Utsuke", void 0, "Yan", "Shitsuke", "Kang", "Qu", "Lou", "Lao", "Tuo", "Zhi", "Yagate", "Ti", "Dao", "Yagate", "Yu", "Che", "Ya", "Gui", "Jun", "Wei", "Yue", "Xin", "Di", "Xuan", "Fan", "Ren", "Shan", "Qiang", "Shu", "Tun", "Chen", "Dai", "E", "Na", "Qi", "Mao", "Ruan", "Ren", "Fan", "Zhuan", "Hong", "Hu", "Qu", "Huang", "Di", "Ling", "Dai", "Ao", "Zhen", "Fan", "Kuang", "Ang", "Peng", "Bei", "Gu", "Ku", "Pao", "Zhu", "Rong", "E", "Ba", "Zhou", "Zhi", "Yao", "Ke", "Yi", "Qing", "Shi", "Ping"];
const c1 = Object.freeze(y1);
const b1 = ["Er", "Qiong", "Ju", "Jiao", "Guang", "Lu", "Kai", "Quan", "Zhou", "Zai", "Zhi", "She", "Liang", "Yu", "Shao", "You", "Huan", "Yun", "Zhe", "Wan", "Fu", "Qing", "Zhou", "Ni", "Ling", "Zhe", "Zhan", "Liang", "Zi", "Hui", "Wang", "Chuo", "Guo", "Kan", "Yi", "Peng", "Qian", "Gun", "Nian", "Pian", "Guan", "Bei", "Lun", "Pai", "Liang", "Ruan", "Rou", "Ji", "Yang", "Xian", "Chuan", "Cou", "Qun", "Ge", "You", "Hong", "Shu", "Fu", "Zi", "Fu", "Wen", "Ben", "Zhan", "Yu", "Wen", "Tao", "Gu", "Zhen", "Xia", "Yuan", "Lu", "Jiu", "Chao", "Zhuan", "Wei", "Hun", "Sori", "Che", "Jiao", "Zhan", "Pu", "Lao", "Fen", "Fan", "Lin", "Ge", "Se", "Kan", "Huan", "Yi", "Ji", "Dui", "Er", "Yu", "Xian", "Hong", "Lei", "Pei", "Li", "Li", "Lu", "Lin", "Che", "Ya", "Gui", "Xuan", "Di", "Ren", "Zhuan", "E", "Lun", "Ruan", "Hong", "Ku", "Ke", "Lu", "Zhou", "Zhi", "Yi", "Hu", "Zhen", "Li", "Yao", "Qing", "Shi", "Zai", "Zhi", "Jiao", "Zhou", "Quan", "Lu", "Jiao", "Zhe", "Fu", "Liang", "Nian", "Bei", "Hui", "Gun", "Wang", "Liang", "Chuo", "Zi", "Cou", "Fu", "Ji", "Wen", "Shu", "Pei", "Yuan", "Xia", "Zhan", "Lu", "Che", "Lin", "Xin", "Gu", "Ci", "Ci", "Pi", "Zui", "Bian", "La", "La", "Ci", "Xue", "Ban", "Bian", "Bian", "Bian", void 0, "Bian", "Ban", "Ci", "Bian", "Bian", "Chen", "Ru", "Nong", "Nong", "Zhen", "Chuo", "Chuo", "Suberu", "Reng", "Bian", "Bian", "Sip", "Ip", "Liao", "Da", "Chan", "Gan", "Qian", "Yu", "Yu", "Qi", "Xun", "Yi", "Guo", "Mai", "Qi", "Za", "Wang", "Jia", "Zhun", "Ying", "Ti", "Yun", "Jin", "Hang", "Ya", "Fan", "Wu", "Da", "E", "Huan", "Zhe", "Totemo", "Jin", "Yuan", "Wei", "Lian", "Chi", "Che", "Ni", "Tiao", "Zhi", "Yi", "Jiong", "Jia", "Chen", "Dai", "Er", "Di", "Po", "Wang", "Die", "Ze", "Tao", "Shu", "Tuo", "Kep", "Jing", "Hui", "Tong", "You", "Mi", "Beng", "Ji", "Nai", "Yi", "Jie", "Zhui", "Lie", "Xun"];
const p1 = Object.freeze(b1);
const w1 = ["Tui", "Song", "Gua", "Tao", "Pang", "Hou", "Ni", "Dun", "Jiong", "Xuan", "Xun", "Bu", "You", "Xiao", "Qiu", "Tou", "Zhu", "Qiu", "Di", "Di", "Tu", "Jing", "Ti", "Dou", "Yi", "Zhe", "Tong", "Guang", "Wu", "Shi", "Cheng", "Su", "Zao", "Qun", "Feng", "Lian", "Suo", "Hui", "Li", "Sako", "Lai", "Ben", "Cuo", "Jue", "Beng", "Huan", "Dai", "Lu", "You", "Zhou", "Jin", "Yu", "Chuo", "Kui", "Wei", "Ti", "Yi", "Da", "Yuan", "Luo", "Bi", "Nuo", "Yu", "Dang", "Sui", "Dun", "Sui", "Yan", "Chuan", "Chi", "Ti", "Yu", "Shi", "Zhen", "You", "Yun", "E", "Bian", "Guo", "E", "Xia", "Huang", "Qiu", "Dao", "Da", "Wei", "Appare", "Yi", "Gou", "Yao", "Chu", "Liu", "Xun", "Ta", "Di", "Chi", "Yuan", "Su", "Ta", "Qian", void 0, "Yao", "Guan", "Zhang", "Ao", "Shi", "Ce", "Chi", "Su", "Zao", "Zhe", "Dun", "Di", "Lou", "Chi", "Cuo", "Lin", "Zun", "Rao", "Qian", "Xuan", "Yu", "Yi", "Wu", "Liao", "Ju", "Shi", "Bi", "Yao", "Mai", "Xie", "Sui", "Huan", "Zhan", "Teng", "Er", "Miao", "Bian", "Bian", "La", "Li", "Yuan", "Yao", "Luo", "Li", "Yi", "Ting", "Deng", "Qi", "Yong", "Shan", "Han", "Yu", "Mang", "Ru", "Qiong", void 0, "Kuang", "Fu", "Kang", "Bin", "Fang", "Xing", "Na", "Xin", "Shen", "Bang", "Yuan", "Cun", "Huo", "Xie", "Bang", "Wu", "Ju", "You", "Han", "Tai", "Qiu", "Bi", "Pei", "Bing", "Shao", "Bei", "Wa", "Di", "Zou", "Ye", "Lin", "Kuang", "Gui", "Zhu", "Shi", "Ku", "Yu", "Gai", "Ge", "Xi", "Zhi", "Ji", "Xun", "Hou", "Xing", "Jiao", "Xi", "Gui", "Nuo", "Lang", "Jia", "Kuai", "Zheng", "Otoko", "Yun", "Yan", "Cheng", "Dou", "Chi", "Lu", "Fu", "Wu", "Fu", "Gao", "Hao", "Lang", "Jia", "Geng", "Jun", "Ying", "Bo", "Xi", "Bei", "Li", "Yun", "Bu", "Xiao", "Qi", "Pi", "Qing", "Guo", "Zhou", "Tan", "Zou", "Ping", "Lai", "Ni", "Chen", "You", "Bu", "Xiang", "Dan", "Ju", "Yong", "Qiao", "Yi", "Du", "Yan", "Mei"];
const j1 = Object.freeze(w1);
const m1 = ["Ruo", "Bei", "E", "Yu", "Juan", "Yu", "Yun", "Hou", "Kui", "Xiang", "Xiang", "Sou", "Tang", "Ming", "Xi", "Ru", "Chu", "Zi", "Zou", "Ju", "Wu", "Xiang", "Yun", "Hao", "Yong", "Bi", "Mo", "Chao", "Fu", "Liao", "Yin", "Zhuan", "Hu", "Qiao", "Yan", "Zhang", "Fan", "Qiao", "Xu", "Deng", "Bi", "Xin", "Bi", "Ceng", "Wei", "Zheng", "Mao", "Shan", "Lin", "Po", "Dan", "Meng", "Ye", "Cao", "Kuai", "Feng", "Meng", "Zou", "Kuang", "Lian", "Zan", "Chan", "You", "Qi", "Yan", "Chan", "Zan", "Ling", "Huan", "Xi", "Feng", "Zan", "Li", "You", "Ding", "Qiu", "Zhuo", "Pei", "Zhou", "Yi", "Hang", "Yu", "Jiu", "Yan", "Zui", "Mao", "Dan", "Xu", "Tou", "Zhen", "Fen", "Sakenomoto", void 0, "Yun", "Tai", "Tian", "Qia", "Tuo", "Zuo", "Han", "Gu", "Su", "Po", "Chou", "Zai", "Ming", "Luo", "Chuo", "Chou", "You", "Tong", "Zhi", "Xian", "Jiang", "Cheng", "Yin", "Tu", "Xiao", "Mei", "Ku", "Suan", "Lei", "Pu", "Zui", "Hai", "Yan", "Xi", "Niang", "Wei", "Lu", "Lan", "Yan", "Tao", "Pei", "Zhan", "Chun", "Tan", "Zui", "Chuo", "Cu", "Kun", "Ti", "Mian", "Du", "Hu", "Xu", "Xing", "Tan", "Jiu", "Chun", "Yun", "Po", "Ke", "Sou", "Mi", "Quan", "Chou", "Cuo", "Yun", "Yong", "Ang", "Zha", "Hai", "Tang", "Jiang", "Piao", "Shan", "Yu", "Li", "Zao", "Lao", "Yi", "Jiang", "Pu", "Jiao", "Xi", "Tan", "Po", "Nong", "Yi", "Li", "Ju", "Jiao", "Yi", "Niang", "Ru", "Xun", "Chou", "Yan", "Ling", "Mi", "Mi", "Niang", "Xin", "Jiao", "Xi", "Mi", "Yan", "Bian", "Cai", "Shi", "You", "Shi", "Shi", "Li", "Chong", "Ye", "Liang", "Li", "Jin", "Jin", "Qiu", "Yi", "Diao", "Dao", "Zhao", "Ding", "Po", "Qiu", "He", "Fu", "Zhen", "Zhi", "Ba", "Luan", "Fu", "Nai", "Diao", "Shan", "Qiao", "Kou", "Chuan", "Zi", "Fan", "Yu", "Hua", "Han", "Gong", "Qi", "Mang", "Ri", "Di", "Si", "Xi", "Yi", "Chai", "Shi", "Tu", "Xi", "Nu", "Qian", "Ishiyumi", "Jian", "Pi", "Ye", "Yin"];
const f1 = Object.freeze(m1);
const Y1 = ["Ba", "Fang", "Chen", "Xing", "Tou", "Yue", "Yan", "Fu", "Pi", "Na", "Xin", "E", "Jue", "Dun", "Gou", "Yin", "Qian", "Ban", "Ji", "Ren", "Chao", "Niu", "Fen", "Yun", "Ji", "Qin", "Pi", "Guo", "Hong", "Yin", "Jun", "Shi", "Yi", "Zhong", "Nie", "Gai", "Ri", "Huo", "Tai", "Kang", "Habaki", "Irori", "Ngaak", void 0, "Duo", "Zi", "Ni", "Tu", "Shi", "Min", "Gu", "E", "Ling", "Bing", "Yi", "Gu", "Ba", "Pi", "Yu", "Si", "Zuo", "Bu", "You", "Dian", "Jia", "Zhen", "Shi", "Shi", "Tie", "Ju", "Zhan", "Shi", "She", "Xuan", "Zhao", "Bao", "He", "Bi", "Sheng", "Chu", "Shi", "Bo", "Zhu", "Chi", "Za", "Po", "Tong", "Qian", "Fu", "Zhai", "Liu", "Qian", "Fu", "Li", "Yue", "Pi", "Yang", "Ban", "Bo", "Jie", "Gou", "Shu", "Zheng", "Mu", "Ni", "Nie", "Di", "Jia", "Mu", "Dan", "Shen", "Yi", "Si", "Kuang", "Ka", "Bei", "Jian", "Tong", "Xing", "Hong", "Jiao", "Chi", "Er", "Ge", "Bing", "Shi", "Mou", "Jia", "Yin", "Jun", "Zhou", "Chong", "Shang", "Tong", "Mo", "Lei", "Ji", "Yu", "Xu", "Ren", "Zun", "Zhi", "Qiong", "Shan", "Chi", "Xian", "Xing", "Quan", "Pi", "Tie", "Zhu", "Hou", "Ming", "Kua", "Yao", "Xian", "Xian", "Xiu", "Jun", "Cha", "Lao", "Ji", "Pi", "Ru", "Mi", "Yi", "Yin", "Guang", "An", "Diou", "You", "Se", "Kao", "Qian", "Luan", "Kasugai", "Ai", "Diao", "Han", "Rui", "Shi", "Keng", "Qiu", "Xiao", "Zhe", "Xiu", "Zang", "Ti", "Cuo", "Gua", "Gong", "Zhong", "Dou", "Lu", "Mei", "Lang", "Wan", "Xin", "Yun", "Bei", "Wu", "Su", "Yu", "Chan", "Ting", "Bo", "Han", "Jia", "Hong", "Cuan", "Feng", "Chan", "Wan", "Zhi", "Si", "Xuan", "Wu", "Wu", "Tiao", "Gong", "Zhuo", "Lue", "Xing", "Qian", "Shen", "Han", "Lue", "Xie", "Chu", "Zheng", "Ju", "Xian", "Tie", "Mang", "Pu", "Li", "Pan", "Rui", "Cheng", "Gao", "Li", "Te", "Pyeng", "Zhu", void 0, "Tu", "Liu", "Zui", "Ju", "Chang", "Yuan", "Jian", "Gang", "Diao", "Tao", "Chang"];
const k1 = Object.freeze(Y1);
const L1 = ["Lun", "Kua", "Ling", "Bei", "Lu", "Li", "Qiang", "Pou", "Juan", "Min", "Zui", "Peng", "An", "Pi", "Xian", "Ya", "Zhui", "Lei", "A", "Kong", "Ta", "Kun", "Du", "Wei", "Chui", "Zi", "Zheng", "Ben", "Nie", "Cong", "Qun", "Tan", "Ding", "Qi", "Qian", "Zhuo", "Qi", "Yu", "Jin", "Guan", "Mao", "Chang", "Tian", "Xi", "Lian", "Tao", "Gu", "Cuo", "Shu", "Zhen", "Lu", "Meng", "Lu", "Hua", "Biao", "Ga", "Lai", "Ken", "Kazari", "Bu", "Nai", "Wan", "Zan", void 0, "De", "Xian", void 0, "Huo", "Liang", void 0, "Men", "Kai", "Ying", "Di", "Lian", "Guo", "Xian", "Du", "Tu", "Wei", "Cong", "Fu", "Rou", "Ji", "E", "Rou", "Chen", "Ti", "Zha", "Hong", "Yang", "Duan", "Xia", "Yu", "Keng", "Xing", "Huang", "Wei", "Fu", "Zhao", "Cha", "Qie", "She", "Hong", "Kui", "Tian", "Mou", "Qiao", "Qiao", "Hou", "Tou", "Cong", "Huan", "Ye", "Min", "Jian", "Duan", "Jian", "Song", "Kui", "Hu", "Xuan", "Duo", "Jie", "Zhen", "Bian", "Zhong", "Zi", "Xiu", "Ye", "Mei", "Pai", "Ai", "Jie", void 0, "Mei", "Chuo", "Ta", "Bang", "Xia", "Lian", "Suo", "Xi", "Liu", "Zu", "Ye", "Nou", "Weng", "Rong", "Tang", "Suo", "Qiang", "Ge", "Shuo", "Chui", "Bo", "Pan", "Sa", "Bi", "Sang", "Gang", "Zi", "Wu", "Ying", "Huang", "Tiao", "Liu", "Kai", "Sun", "Sha", "Sou", "Wan", "Hao", "Zhen", "Zhen", "Luo", "Yi", "Yuan", "Tang", "Nie", "Xi", "Jia", "Ge", "Ma", "Juan", "Kasugai", "Habaki", "Suo", void 0, void 0, void 0, "Na", "Lu", "Suo", "Ou", "Zu", "Tuan", "Xiu", "Guan", "Xuan", "Lian", "Shou", "Ao", "Man", "Mo", "Luo", "Bi", "Wei", "Liu", "Di", "Qiao", "Cong", "Yi", "Lu", "Ao", "Keng", "Qiang", "Cui", "Qi", "Chang", "Tang", "Man", "Yong", "Chan", "Feng", "Jing", "Biao", "Shu", "Lou", "Xiu", "Cong", "Long", "Zan", "Jian", "Cao", "Li", "Xia", "Xi", "Kang", void 0, "Beng", void 0, void 0, "Zheng", "Lu", "Hua", "Ji", "Pu", "Hui", "Qiang", "Po", "Lin", "Suo", "Xiu", "San", "Cheng"];
const Z1 = Object.freeze(L1);
const S1 = ["Kui", "Si", "Liu", "Nao", "Heng", "Pie", "Sui", "Fan", "Qiao", "Quan", "Yang", "Tang", "Xiang", "Jue", "Jiao", "Zun", "Liao", "Jie", "Lao", "Dui", "Tan", "Zan", "Ji", "Jian", "Zhong", "Deng", "Ya", "Ying", "Dui", "Jue", "Nou", "Ti", "Pu", "Tie", void 0, void 0, "Ding", "Shan", "Kai", "Jian", "Fei", "Sui", "Lu", "Juan", "Hui", "Yu", "Lian", "Zhuo", "Qiao", "Qian", "Zhuo", "Lei", "Bi", "Tie", "Huan", "Ye", "Duo", "Guo", "Dang", "Ju", "Fen", "Da", "Bei", "Yi", "Ai", "Zong", "Xun", "Diao", "Zhu", "Heng", "Zhui", "Ji", "Nie", "Ta", "Huo", "Qing", "Bin", "Ying", "Kui", "Ning", "Xu", "Jian", "Jian", "Yari", "Cha", "Zhi", "Mie", "Li", "Lei", "Ji", "Zuan", "Kuang", "Shang", "Peng", "La", "Du", "Shuo", "Chuo", "Lu", "Biao", "Bao", "Lu", void 0, void 0, "Long", "E", "Lu", "Xin", "Jian", "Lan", "Bo", "Jian", "Yao", "Chan", "Xiang", "Jian", "Xi", "Guan", "Cang", "Nie", "Lei", "Cuan", "Qu", "Pan", "Luo", "Zuan", "Luan", "Zao", "Nie", "Jue", "Tang", "Shu", "Lan", "Jin", "Qiu", "Yi", "Zhen", "Ding", "Zhao", "Po", "Diao", "Tu", "Qian", "Chuan", "Shan", "Ji", "Fan", "Diao", "Men", "Nu", "Xi", "Chai", "Xing", "Gai", "Bu", "Tai", "Ju", "Dun", "Chao", "Zhong", "Na", "Bei", "Gang", "Ban", "Qian", "Yao", "Qin", "Jun", "Wu", "Gou", "Kang", "Fang", "Huo", "Tou", "Niu", "Ba", "Yu", "Qian", "Zheng", "Qian", "Gu", "Bo", "E", "Po", "Bu", "Ba", "Yue", "Zuan", "Mu", "Dan", "Jia", "Dian", "You", "Tie", "Bo", "Ling", "Shuo", "Qian", "Liu", "Bao", "Shi", "Xuan", "She", "Bi", "Ni", "Pi", "Duo", "Xing", "Kao", "Lao", "Er", "Mang", "Ya", "You", "Cheng", "Jia", "Ye", "Nao", "Zhi", "Dang", "Tong", "Lu", "Diao", "Yin", "Kai", "Zha", "Zhu", "Xian", "Ting", "Diu", "Xian", "Hua", "Quan", "Sha", "Jia", "Yao", "Ge", "Ming", "Zheng", "Se", "Jiao", "Yi", "Chan", "Chong", "Tang", "An", "Yin", "Ru", "Zhu", "Lao", "Pu", "Wu", "Lai", "Te", "Lian", "Keng"];
const J1 = Object.freeze(S1);
const C1 = ["Xiao", "Suo", "Li", "Zheng", "Chu", "Guo", "Gao", "Tie", "Xiu", "Cuo", "Lue", "Feng", "Xin", "Liu", "Kai", "Jian", "Rui", "Ti", "Lang", "Qian", "Ju", "A", "Qiang", "Duo", "Tian", "Cuo", "Mao", "Ben", "Qi", "De", "Kua", "Kun", "Chang", "Xi", "Gu", "Luo", "Chui", "Zhui", "Jin", "Zhi", "Xian", "Juan", "Huo", "Pou", "Tan", "Ding", "Jian", "Ju", "Meng", "Zi", "Qie", "Ying", "Kai", "Qiang", "Song", "E", "Cha", "Qiao", "Zhong", "Duan", "Sou", "Huang", "Huan", "Ai", "Du", "Mei", "Lou", "Zi", "Fei", "Mei", "Mo", "Zhen", "Bo", "Ge", "Nie", "Tang", "Juan", "Nie", "Na", "Liu", "Hao", "Bang", "Yi", "Jia", "Bin", "Rong", "Biao", "Tang", "Man", "Luo", "Beng", "Yong", "Jing", "Di", "Zu", "Xuan", "Liu", "Tan", "Jue", "Liao", "Pu", "Lu", "Dui", "Lan", "Pu", "Cuan", "Qiang", "Deng", "Huo", "Lei", "Huan", "Zhuo", "Lian", "Yi", "Cha", "Biao", "La", "Chan", "Xiang", "Chang", "Chang", "Jiu", "Ao", "Die", "Qu", "Liao", "Mi", "Chang", "Men", "Ma", "Shuan", "Shan", "Huo", "Men", "Yan", "Bi", "Han", "Bi", "San", "Kai", "Kang", "Beng", "Hong", "Run", "San", "Xian", "Xian", "Jian", "Min", "Xia", "Yuru", "Dou", "Zha", "Nao", "Jian", "Peng", "Xia", "Ling", "Bian", "Bi", "Run", "He", "Guan", "Ge", "Ge", "Fa", "Chu", "Hong", "Gui", "Min", "Se", "Kun", "Lang", "Lu", "Ting", "Sha", "Ju", "Yue", "Yue", "Chan", "Qu", "Lin", "Chang", "Shai", "Kun", "Yan", "Min", "Yan", "E", "Hun", "Yu", "Wen", "Xiang", "Bao", "Xiang", "Qu", "Yao", "Wen", "Ban", "An", "Wei", "Yin", "Kuo", "Que", "Lan", "Du", void 0, "Phwung", "Tian", "Nie", "Ta", "Kai", "He", "Que", "Chuang", "Guan", "Dou", "Qi", "Kui", "Tang", "Guan", "Piao", "Kan", "Xi", "Hui", "Chan", "Pi", "Dang", "Huan", "Ta", "Wen", void 0, "Men", "Shuan", "Shan", "Yan", "Han", "Bi", "Wen", "Chuang", "Run", "Wei", "Xian", "Hong", "Jian", "Min", "Kang", "Men", "Zha", "Nao", "Gui", "Wen", "Ta", "Min", "Lu", "Kai"];
const X1 = Object.freeze(C1);
const H1 = ["Fa", "Ge", "He", "Kun", "Jiu", "Yue", "Lang", "Du", "Yu", "Yan", "Chang", "Xi", "Wen", "Hun", "Yan", "E", "Chan", "Lan", "Qu", "Hui", "Kuo", "Que", "Ge", "Tian", "Ta", "Que", "Kan", "Huan", "Fu", "Fu", "Le", "Dui", "Xin", "Qian", "Wu", "Yi", "Tuo", "Yin", "Yang", "Dou", "E", "Sheng", "Ban", "Pei", "Keng", "Yun", "Ruan", "Zhi", "Pi", "Jing", "Fang", "Yang", "Yin", "Zhen", "Jie", "Cheng", "E", "Qu", "Di", "Zu", "Zuo", "Dian", "Ling", "A", "Tuo", "Tuo", "Po", "Bing", "Fu", "Ji", "Lu", "Long", "Chen", "Xing", "Duo", "Lou", "Mo", "Jiang", "Shu", "Duo", "Xian", "Er", "Gui", "Yu", "Gai", "Shan", "Xun", "Qiao", "Xing", "Chun", "Fu", "Bi", "Xia", "Shan", "Sheng", "Zhi", "Pu", "Dou", "Yuan", "Zhen", "Chu", "Xian", "Tou", "Nie", "Yun", "Xian", "Pei", "Pei", "Zou", "Yi", "Dui", "Lun", "Yin", "Ju", "Chui", "Chen", "Pi", "Ling", "Tao", "Xian", "Lu", "Sheng", "Xian", "Yin", "Zhu", "Yang", "Reng", "Shan", "Chong", "Yan", "Yin", "Yu", "Ti", "Yu", "Long", "Wei", "Wei", "Nie", "Dui", "Sui", "An", "Huang", "Jie", "Sui", "Yin", "Gai", "Yan", "Hui", "Ge", "Yun", "Wu", "Wei", "Ai", "Xi", "Tang", "Ji", "Zhang", "Dao", "Ao", "Xi", "Yin", void 0, "Rao", "Lin", "Tui", "Deng", "Pi", "Sui", "Sui", "Yu", "Xian", "Fen", "Ni", "Er", "Ji", "Dao", "Xi", "Yin", "E", "Hui", "Long", "Xi", "Li", "Li", "Li", "Zhui", "He", "Zhi", "Zhun", "Jun", "Nan", "Yi", "Que", "Yan", "Qian", "Ya", "Xiong", "Ya", "Ji", "Gu", "Huan", "Zhi", "Gou", "Jun", "Ci", "Yong", "Ju", "Chu", "Hu", "Za", "Luo", "Yu", "Chou", "Diao", "Sui", "Han", "Huo", "Shuang", "Guan", "Chu", "Za", "Yong", "Ji", "Xi", "Chou", "Liu", "Li", "Nan", "Xue", "Za", "Ji", "Ji", "Yu", "Yu", "Xue", "Na", "Fou", "Se", "Mu", "Wen", "Fen", "Pang", "Yun", "Li", "Li", "Ang", "Ling", "Lei", "An", "Bao", "Meng", "Dian", "Dang", "Xing", "Wu", "Zhao"];
const D1 = Object.freeze(H1);
const T1 = ["Xu", "Ji", "Mu", "Chen", "Xiao", "Zha", "Ting", "Zhen", "Pei", "Mei", "Ling", "Qi", "Chou", "Huo", "Sha", "Fei", "Weng", "Zhan", "Yin", "Ni", "Chou", "Tun", "Lin", void 0, "Dong", "Ying", "Wu", "Ling", "Shuang", "Ling", "Xia", "Hong", "Yin", "Mo", "Mai", "Yun", "Liu", "Meng", "Bin", "Wu", "Wei", "Huo", "Yin", "Xi", "Yi", "Ai", "Dan", "Deng", "Xian", "Yu", "Lu", "Long", "Dai", "Ji", "Pang", "Yang", "Ba", "Pi", "Wei", void 0, "Xi", "Ji", "Mai", "Meng", "Meng", "Lei", "Li", "Huo", "Ai", "Fei", "Dai", "Long", "Ling", "Ai", "Feng", "Li", "Bao", void 0, "He", "He", "Bing", "Qing", "Qing", "Jing", "Tian", "Zhen", "Jing", "Cheng", "Qing", "Jing", "Jing", "Dian", "Jing", "Tian", "Fei", "Fei", "Kao", "Mi", "Mian", "Mian", "Pao", "Ye", "Tian", "Hui", "Ye", "Ge", "Ding", "Cha", "Jian", "Ren", "Di", "Du", "Wu", "Ren", "Qin", "Jin", "Xue", "Niu", "Ba", "Yin", "Sa", "Na", "Mo", "Zu", "Da", "Ban", "Yi", "Yao", "Tao", "Tuo", "Jia", "Hong", "Pao", "Yang", "Tomo", "Yin", "Jia", "Tao", "Ji", "Xie", "An", "An", "Hen", "Gong", "Kohaze", "Da", "Qiao", "Ting", "Wan", "Ying", "Sui", "Tiao", "Qiao", "Xuan", "Kong", "Beng", "Ta", "Zhang", "Bing", "Kuo", "Ju", "La", "Xie", "Rou", "Bang", "Yi", "Qiu", "Qiu", "He", "Xiao", "Mu", "Ju", "Jian", "Bian", "Di", "Jian", "On", "Tao", "Gou", "Ta", "Bei", "Xie", "Pan", "Ge", "Bi", "Kuo", "Tang", "Lou", "Gui", "Qiao", "Xue", "Ji", "Jian", "Jiang", "Chan", "Da", "Huo", "Xian", "Qian", "Du", "Wa", "Jian", "Lan", "Wei", "Ren", "Fu", "Mei", "Juan", "Ge", "Wei", "Qiao", "Han", "Chang", void 0, "Rou", "Xun", "She", "Wei", "Ge", "Bei", "Tao", "Gou", "Yun", void 0, "Bi", "Wei", "Hui", "Du", "Wa", "Du", "Wei", "Ren", "Fu", "Han", "Wei", "Yun", "Tao", "Jiu", "Jiu", "Xian", "Xie", "Xian", "Ji", "Yin", "Za", "Yun", "Shao", "Le", "Peng", "Heng", "Ying", "Yun", "Peng", "Yin", "Yin", "Xiang"];
const B1 = Object.freeze(T1);
const Q1 = ["Hu", "Ye", "Ding", "Qing", "Pan", "Xiang", "Shun", "Han", "Xu", "Yi", "Xu", "Gu", "Song", "Kui", "Qi", "Hang", "Yu", "Wan", "Ban", "Dun", "Di", "Dan", "Pan", "Po", "Ling", "Ce", "Jing", "Lei", "He", "Qiao", "E", "E", "Wei", "Jie", "Gua", "Shen", "Yi", "Shen", "Hai", "Dui", "Pian", "Ping", "Lei", "Fu", "Jia", "Tou", "Hui", "Kui", "Jia", "Le", "Tian", "Cheng", "Ying", "Jun", "Hu", "Han", "Jing", "Tui", "Tui", "Pin", "Lai", "Tui", "Zi", "Zi", "Chui", "Ding", "Lai", "Yan", "Han", "Jian", "Ke", "Cui", "Jiong", "Qin", "Yi", "Sai", "Ti", "E", "E", "Yan", "Hun", "Kan", "Yong", "Zhuan", "Yan", "Xian", "Xin", "Yi", "Yuan", "Sang", "Dian", "Dian", "Jiang", "Ku", "Lei", "Liao", "Piao", "Yi", "Man", "Qi", "Rao", "Hao", "Qiao", "Gu", "Xun", "Qian", "Hui", "Zhan", "Ru", "Hong", "Bin", "Xian", "Pin", "Lu", "Lan", "Nie", "Quan", "Ye", "Ding", "Qing", "Han", "Xiang", "Shun", "Xu", "Xu", "Wan", "Gu", "Dun", "Qi", "Ban", "Song", "Hang", "Yu", "Lu", "Ling", "Po", "Jing", "Jie", "Jia", "Tian", "Han", "Ying", "Jiong", "Hai", "Yi", "Pin", "Hui", "Tui", "Han", "Ying", "Ying", "Ke", "Ti", "Yong", "E", "Zhuan", "Yan", "E", "Nie", "Man", "Dian", "Sang", "Hao", "Lei", "Zhan", "Ru", "Pin", "Quan", "Feng", "Biao", "Oroshi", "Fu", "Xia", "Zhan", "Biao", "Sa", "Ba", "Tai", "Lie", "Gua", "Xuan", "Shao", "Ju", "Bi", "Si", "Wei", "Yang", "Yao", "Sou", "Kai", "Sao", "Fan", "Liu", "Xi", "Liao", "Piao", "Piao", "Liu", "Biao", "Biao", "Biao", "Liao", void 0, "Se", "Feng", "Biao", "Feng", "Yang", "Zhan", "Biao", "Sa", "Ju", "Si", "Sou", "Yao", "Liu", "Piao", "Biao", "Biao", "Fei", "Fan", "Fei", "Fei", "Shi", "Shi", "Can", "Ji", "Ding", "Si", "Tuo", "Zhan", "Sun", "Xiang", "Tun", "Ren", "Yu", "Juan", "Chi", "Yin", "Fan", "Fan", "Sun", "Yin", "Zhu", "Yi", "Zhai", "Bi", "Jie", "Tao", "Liu", "Ci", "Tie", "Si", "Bao", "Shi", "Duo"];
const M1 = Object.freeze(Q1);
const G1 = ["Hai", "Ren", "Tian", "Jiao", "Jia", "Bing", "Yao", "Tong", "Ci", "Xiang", "Yang", "Yang", "Er", "Yan", "Le", "Yi", "Can", "Bo", "Nei", "E", "Bu", "Jun", "Dou", "Su", "Yu", "Shi", "Yao", "Hun", "Guo", "Shi", "Jian", "Zhui", "Bing", "Xian", "Bu", "Ye", "Tan", "Fei", "Zhang", "Wei", "Guan", "E", "Nuan", "Hun", "Hu", "Huang", "Tie", "Hui", "Jian", "Hou", "He", "Xing", "Fen", "Wei", "Gu", "Cha", "Song", "Tang", "Bo", "Gao", "Xi", "Kui", "Liu", "Sou", "Tao", "Ye", "Yun", "Mo", "Tang", "Man", "Bi", "Yu", "Xiu", "Jin", "San", "Kui", "Zhuan", "Shan", "Chi", "Dan", "Yi", "Ji", "Rao", "Cheng", "Yong", "Tao", "Hui", "Xiang", "Zhan", "Fen", "Hai", "Meng", "Yan", "Mo", "Chan", "Xiang", "Luo", "Zuan", "Nang", "Shi", "Ding", "Ji", "Tuo", "Xing", "Tun", "Xi", "Ren", "Yu", "Chi", "Fan", "Yin", "Jian", "Shi", "Bao", "Si", "Duo", "Yi", "Er", "Rao", "Xiang", "Jia", "Le", "Jiao", "Yi", "Bing", "Bo", "Dou", "E", "Yu", "Nei", "Jun", "Guo", "Hun", "Xian", "Guan", "Cha", "Kui", "Gu", "Sou", "Chan", "Ye", "Mo", "Bo", "Liu", "Xiu", "Jin", "Man", "San", "Zhuan", "Nang", "Shou", "Kui", "Guo", "Xiang", "Fen", "Ba", "Ni", "Bi", "Bo", "Tu", "Han", "Fei", "Jian", "An", "Ai", "Fu", "Xian", "Wen", "Xin", "Fen", "Bin", "Xing", "Ma", "Yu", "Feng", "Han", "Di", "Tuo", "Tuo", "Chi", "Xun", "Zhu", "Zhi", "Pei", "Xin", "Ri", "Sa", "Yin", "Wen", "Zhi", "Dan", "Lu", "You", "Bo", "Bao", "Kuai", "Tuo", "Yi", "Qu", void 0, "Qu", "Jiong", "Bo", "Zhao", "Yuan", "Peng", "Zhou", "Ju", "Zhu", "Nu", "Ju", "Pi", "Zang", "Jia", "Ling", "Zhen", "Tai", "Fu", "Yang", "Shi", "Bi", "Tuo", "Tuo", "Si", "Liu", "Ma", "Pian", "Tao", "Zhi", "Rong", "Teng", "Dong", "Xun", "Quan", "Shen", "Jiong", "Er", "Hai", "Bo", "Zhu", "Yin", "Luo", "Shuu", "Dan", "Xie", "Liu", "Ju", "Song", "Qin", "Mang", "Liang", "Han", "Tu", "Xuan", "Tui", "Jun"];
const N1 = Object.freeze(G1);
const x1 = ["E", "Cheng", "Xin", "Ai", "Lu", "Zhui", "Zhou", "She", "Pian", "Kun", "Tao", "Lai", "Zong", "Ke", "Qi", "Qi", "Yan", "Fei", "Sao", "Yan", "Jie", "Yao", "Wu", "Pian", "Cong", "Pian", "Qian", "Fei", "Huang", "Jian", "Huo", "Yu", "Ti", "Quan", "Xia", "Zong", "Kui", "Rou", "Si", "Gua", "Tuo", "Kui", "Sou", "Qian", "Cheng", "Zhi", "Liu", "Pang", "Teng", "Xi", "Cao", "Du", "Yan", "Yuan", "Zou", "Sao", "Shan", "Li", "Zhi", "Shuang", "Lu", "Xi", "Luo", "Zhang", "Mo", "Ao", "Can", "Piao", "Cong", "Qu", "Bi", "Zhi", "Yu", "Xu", "Hua", "Bo", "Su", "Xiao", "Lin", "Chan", "Dun", "Liu", "Tuo", "Zeng", "Tan", "Jiao", "Tie", "Yan", "Luo", "Zhan", "Jing", "Yi", "Ye", "Tuo", "Bin", "Zou", "Yan", "Peng", "Lu", "Teng", "Xiang", "Ji", "Shuang", "Ju", "Xi", "Huan", "Li", "Biao", "Ma", "Yu", "Tuo", "Xun", "Chi", "Qu", "Ri", "Bo", "Lu", "Zang", "Shi", "Si", "Fu", "Ju", "Zou", "Zhu", "Tuo", "Nu", "Jia", "Yi", "Tai", "Xiao", "Ma", "Yin", "Jiao", "Hua", "Luo", "Hai", "Pian", "Biao", "Li", "Cheng", "Yan", "Xin", "Qin", "Jun", "Qi", "Qi", "Ke", "Zhui", "Zong", "Su", "Can", "Pian", "Zhi", "Kui", "Sao", "Wu", "Ao", "Liu", "Qian", "Shan", "Piao", "Luo", "Cong", "Chan", "Zou", "Ji", "Shuang", "Xiang", "Gu", "Wei", "Wei", "Wei", "Yu", "Gan", "Yi", "Ang", "Tou", "Xie", "Bao", "Bi", "Chi", "Ti", "Di", "Ku", "Hai", "Qiao", "Gou", "Kua", "Ge", "Tui", "Geng", "Pian", "Bi", "Ke", "Ka", "Yu", "Sui", "Lou", "Bo", "Xiao", "Pang", "Bo", "Ci", "Kuan", "Bin", "Mo", "Liao", "Lou", "Nao", "Du", "Zang", "Sui", "Ti", "Bin", "Kuan", "Lu", "Gao", "Gao", "Qiao", "Kao", "Qiao", "Lao", "Zao", "Biao", "Kun", "Kun", "Ti", "Fang", "Xiu", "Ran", "Mao", "Dan", "Kun", "Bin", "Fa", "Tiao", "Peng", "Zi", "Fa", "Ran", "Ti", "Pao", "Pi", "Mao", "Fu", "Er", "Rong", "Qu", "Gong", "Xiu", "Gua", "Ji", "Peng", "Zhua", "Shao", "Sha"];
const W1 = Object.freeze(x1);
const P1 = ["Ti", "Li", "Bin", "Zong", "Ti", "Peng", "Song", "Zheng", "Quan", "Zong", "Shun", "Jian", "Duo", "Hu", "La", "Jiu", "Qi", "Lian", "Zhen", "Bin", "Peng", "Mo", "San", "Man", "Man", "Seng", "Xu", "Lie", "Qian", "Qian", "Nong", "Huan", "Kuai", "Ning", "Bin", "Lie", "Rang", "Dou", "Dou", "Nao", "Hong", "Xi", "Dou", "Han", "Dou", "Dou", "Jiu", "Chang", "Yu", "Yu", "Li", "Juan", "Fu", "Qian", "Gui", "Zong", "Liu", "Gui", "Shang", "Yu", "Gui", "Mei", "Ji", "Qi", "Jie", "Kui", "Hun", "Ba", "Po", "Mei", "Xu", "Yan", "Xiao", "Liang", "Yu", "Tui", "Qi", "Wang", "Liang", "Wei", "Jian", "Chi", "Piao", "Bi", "Mo", "Ji", "Xu", "Chou", "Yan", "Zhan", "Yu", "Dao", "Ren", "Ji", "Eri", "Gong", "Tuo", "Diao", "Ji", "Xu", "E", "E", "Sha", "Hang", "Tun", "Mo", "Jie", "Shen", "Fan", "Yuan", "Bi", "Lu", "Wen", "Hu", "Lu", "Za", "Fang", "Fen", "Na", "You", "Namazu", "Todo", "He", "Xia", "Qu", "Han", "Pi", "Ling", "Tuo", "Bo", "Qiu", "Ping", "Fu", "Bi", "Ji", "Wei", "Ju", "Diao", "Bo", "You", "Gun", "Pi", "Nian", "Xing", "Tai", "Bao", "Fu", "Zha", "Ju", "Gu", "Kajika", "Tong", void 0, "Ta", "Jie", "Shu", "Hou", "Xiang", "Er", "An", "Wei", "Tiao", "Zhu", "Yin", "Lie", "Luo", "Tong", "Yi", "Qi", "Bing", "Wei", "Jiao", "Bu", "Gui", "Xian", "Ge", "Hui", "Bora", "Mate", "Kao", "Gori", "Duo", "Jun", "Ti", "Man", "Xiao", "Za", "Sha", "Qin", "Yu", "Nei", "Zhe", "Gun", "Geng", "Su", "Wu", "Qiu", "Ting", "Fu", "Wan", "You", "Li", "Sha", "Sha", "Gao", "Meng", "Ugui", "Asari", "Subashiri", "Kazunoko", "Yong", "Ni", "Zi", "Qi", "Qing", "Xiang", "Nei", "Chun", "Ji", "Diao", "Qie", "Gu", "Zhou", "Dong", "Lai", "Fei", "Ni", "Yi", "Kun", "Lu", "Jiu", "Chang", "Jing", "Lun", "Ling", "Zou", "Li", "Meng", "Zong", "Zhi", "Nian", "Shachi", "Dojou", "Sukesou", "Shi", "Shen", "Hun", "Shi", "Hou", "Xing", "Zhu", "La", "Zong", "Ji", "Bian", "Bian"];
const F1 = Object.freeze(P1);
const K1 = ["Huan", "Quan", "Ze", "Wei", "Wei", "Yu", "Qun", "Rou", "Die", "Huang", "Lian", "Yan", "Qiu", "Qiu", "Jian", "Bi", "E", "Yang", "Fu", "Sai", "Jian", "Xia", "Tuo", "Hu", "Muroaji", "Ruo", "Haraka", "Wen", "Jian", "Hao", "Wu", "Fang", "Sao", "Liu", "Ma", "Shi", "Shi", "Yin", "Z", "Teng", "Ta", "Yao", "Ge", "Rong", "Qian", "Qi", "Wen", "Ruo", "Hatahata", "Lian", "Ao", "Le", "Hui", "Min", "Ji", "Tiao", "Qu", "Jian", "Sao", "Man", "Xi", "Qiu", "Biao", "Ji", "Ji", "Zhu", "Jiang", "Qiu", "Zhuan", "Yong", "Zhang", "Kang", "Xue", "Bie", "Jue", "Qu", "Xiang", "Bo", "Jiao", "Xun", "Su", "Huang", "Zun", "Shan", "Shan", "Fan", "Jue", "Lin", "Xun", "Miao", "Xi", "Eso", "Kyou", "Fen", "Guan", "Hou", "Kuai", "Zei", "Sao", "Zhan", "Gan", "Gui", "Sheng", "Li", "Chang", "Hatahata", "Shiira", "Mutsu", "Ru", "Ji", "Xu", "Huo", "Shiira", "Li", "Lie", "Li", "Mie", "Zhen", "Xiang", "E", "Lu", "Guan", "Li", "Xian", "Yu", "Dao", "Ji", "You", "Tun", "Lu", "Fang", "Ba", "He", "Bo", "Ping", "Nian", "Lu", "You", "Zha", "Fu", "Bo", "Bao", "Hou", "Pi", "Tai", "Gui", "Jie", "Kao", "Wei", "Er", "Tong", "Ze", "Hou", "Kuai", "Ji", "Jiao", "Xian", "Za", "Xiang", "Xun", "Geng", "Li", "Lian", "Jian", "Li", "Shi", "Tiao", "Gun", "Sha", "Wan", "Jun", "Ji", "Yong", "Qing", "Ling", "Qi", "Zou", "Fei", "Kun", "Chang", "Gu", "Ni", "Nian", "Diao", "Jing", "Shen", "Shi", "Zi", "Fen", "Die", "Bi", "Chang", "Shi", "Wen", "Wei", "Sai", "E", "Qiu", "Fu", "Huang", "Quan", "Jiang", "Bian", "Sao", "Ao", "Qi", "Ta", "Yin", "Yao", "Fang", "Jian", "Le", "Biao", "Xue", "Bie", "Man", "Min", "Yong", "Wei", "Xi", "Jue", "Shan", "Lin", "Zun", "Huo", "Gan", "Li", "Zhan", "Guan", "Niao", "Yi", "Fu", "Li", "Jiu", "Bu", "Yan", "Fu", "Diao", "Ji", "Feng", "Nio", "Gan", "Shi", "Feng", "Ming", "Bao", "Yuan", "Zhi", "Hu", "Qin", "Fu", "Fen", "Wen", "Jian", "Shi", "Yu"];
const R1 = Object.freeze(K1);
const A1 = ["Fou", "Yiao", "Jue", "Jue", "Pi", "Huan", "Zhen", "Bao", "Yan", "Ya", "Zheng", "Fang", "Feng", "Wen", "Ou", "Te", "Jia", "Nu", "Ling", "Mie", "Fu", "Tuo", "Wen", "Li", "Bian", "Zhi", "Ge", "Yuan", "Zi", "Qu", "Xiao", "Zhi", "Dan", "Ju", "You", "Gu", "Zhong", "Yu", "Yang", "Rong", "Ya", "Tie", "Yu", "Shigi", "Ying", "Zhui", "Wu", "Er", "Gua", "Ai", "Zhi", "Yan", "Heng", "Jiao", "Ji", "Lie", "Zhu", "Ren", "Yi", "Hong", "Luo", "Ru", "Mou", "Ge", "Ren", "Jiao", "Xiu", "Zhou", "Zhi", "Luo", "Chidori", "Toki", "Ten", "Luan", "Jia", "Ji", "Yu", "Huan", "Tuo", "Bu", "Wu", "Juan", "Yu", "Bo", "Xun", "Xun", "Bi", "Xi", "Jun", "Ju", "Tu", "Jing", "Ti", "E", "E", "Kuang", "Hu", "Wu", "Shen", "Lai", "Ikaruga", "Kakesu", "Lu", "Ping", "Shu", "Fu", "An", "Zhao", "Peng", "Qin", "Qian", "Bei", "Diao", "Lu", "Que", "Jian", "Ju", "Tu", "Ya", "Yuan", "Qi", "Li", "Ye", "Zhui", "Kong", "Zhui", "Kun", "Sheng", "Qi", "Jing", "Yi", "Yi", "Jing", "Zi", "Lai", "Dong", "Qi", "Chun", "Geng", "Ju", "Qu", "Isuka", "Kikuitadaki", "Ji", "Shu", void 0, "Chi", "Miao", "Rou", "An", "Qiu", "Ti", "Hu", "Ti", "E", "Jie", "Mao", "Fu", "Chun", "Tu", "Yan", "He", "Yuan", "Pian", "Yun", "Mei", "Hu", "Ying", "Dun", "Mu", "Ju", "Tsugumi", "Cang", "Fang", "Gu", "Ying", "Yuan", "Xuan", "Weng", "Shi", "He", "Chu", "Tang", "Xia", "Ruo", "Liu", "Ji", "Gu", "Jian", "Zhun", "Han", "Zi", "Zi", "Ni", "Yao", "Yan", "Ji", "Li", "Tian", "Kou", "Ti", "Ti", "Ni", "Tu", "Ma", "Jiao", "Gao", "Tian", "Chen", "Li", "Zhuan", "Zhe", "Ao", "Yao", "Yi", "Ou", "Chi", "Zhi", "Liao", "Rong", "Lou", "Bi", "Shuang", "Zhuo", "Yu", "Wu", "Jue", "Yin", "Quan", "Si", "Jiao", "Yi", "Hua", "Bi", "Ying", "Su", "Huang", "Fan", "Jiao", "Liao", "Yan", "Kao", "Jiu", "Xian", "Xian", "Tu", "Mai", "Zun", "Yu", "Ying", "Lu", "Tuan", "Xian", "Xue", "Yi", "Pi"];
const _1 = Object.freeze(A1);
const O1 = ["Shu", "Luo", "Qi", "Yi", "Ji", "Zhe", "Yu", "Zhan", "Ye", "Yang", "Pi", "Ning", "Huo", "Mi", "Ying", "Meng", "Di", "Yue", "Yu", "Lei", "Bao", "Lu", "He", "Long", "Shuang", "Yue", "Ying", "Guan", "Qu", "Li", "Luan", "Niao", "Jiu", "Ji", "Yuan", "Ming", "Shi", "Ou", "Ya", "Cang", "Bao", "Zhen", "Gu", "Dong", "Lu", "Ya", "Xiao", "Yang", "Ling", "Zhi", "Qu", "Yuan", "Xue", "Tuo", "Si", "Zhi", "Er", "Gua", "Xiu", "Heng", "Zhou", "Ge", "Luan", "Hong", "Wu", "Bo", "Li", "Juan", "Hu", "E", "Yu", "Xian", "Ti", "Wu", "Que", "Miao", "An", "Kun", "Bei", "Peng", "Qian", "Chun", "Geng", "Yuan", "Su", "Hu", "He", "E", "Gu", "Qiu", "Zi", "Mei", "Mu", "Ni", "Yao", "Weng", "Liu", "Ji", "Ni", "Jian", "He", "Yi", "Ying", "Zhe", "Liao", "Liao", "Jiao", "Jiu", "Yu", "Lu", "Xuan", "Zhan", "Ying", "Huo", "Meng", "Guan", "Shuang", "Lu", "Jin", "Ling", "Jian", "Xian", "Cuo", "Jian", "Jian", "Yan", "Cuo", "Lu", "You", "Cu", "Ji", "Biao", "Cu", "Biao", "Zhu", "Jun", "Zhu", "Jian", "Mi", "Mi", "Wu", "Liu", "Chen", "Jun", "Lin", "Ni", "Qi", "Lu", "Jiu", "Jun", "Jing", "Li", "Xiang", "Yan", "Jia", "Mi", "Li", "She", "Zhang", "Lin", "Jing", "Ji", "Ling", "Yan", "Cu", "Mai", "Mai", "Ge", "Chao", "Fu", "Mian", "Mian", "Fu", "Pao", "Qu", "Qu", "Mou", "Fu", "Xian", "Lai", "Qu", "Mian", void 0, "Feng", "Fu", "Qu", "Mian", "Ma", "Mo", "Mo", "Hui", "Ma", "Zou", "Nen", "Fen", "Huang", "Huang", "Jin", "Guang", "Tian", "Tou", "Heng", "Xi", "Kuang", "Heng", "Shu", "Li", "Nian", "Chi", "Hei", "Hei", "Yi", "Qian", "Dan", "Xi", "Tuan", "Mo", "Mo", "Qian", "Dai", "Chu", "You", "Dian", "Yi", "Xia", "Yan", "Qu", "Mei", "Yan", "Jing", "Yu", "Li", "Dang", "Du", "Can", "Yin", "An", "Yan", "Tan", "An", "Zhen", "Dai", "Can", "Yi", "Mei", "Dan", "Yan", "Du", "Lu", "Zhi", "Fen", "Fu", "Fu", "Min", "Min", "Yuan"];
const z1 = Object.freeze(O1);
const E1 = ["Cu", "Qu", "Chao", "Wa", "Zhu", "Zhi", "Mang", "Ao", "Bie", "Tuo", "Bi", "Yuan", "Chao", "Tuo", "Ding", "Mi", "Nai", "Ding", "Zi", "Gu", "Gu", "Dong", "Fen", "Tao", "Yuan", "Pi", "Chang", "Gao", "Qi", "Yuan", "Tang", "Teng", "Shu", "Shu", "Fen", "Fei", "Wen", "Ba", "Diao", "Tuo", "Tong", "Qu", "Sheng", "Shi", "You", "Shi", "Ting", "Wu", "Nian", "Jing", "Hun", "Ju", "Yan", "Tu", "Ti", "Xi", "Xian", "Yan", "Lei", "Bi", "Yao", "Qiu", "Han", "Wu", "Wu", "Hou", "Xi", "Ge", "Zha", "Xiu", "Weng", "Zha", "Nong", "Nang", "Qi", "Zhai", "Ji", "Zi", "Ji", "Ji", "Qi", "Ji", "Chi", "Chen", "Chen", "He", "Ya", "Ken", "Xie", "Pao", "Cuo", "Shi", "Zi", "Chi", "Nian", "Ju", "Tiao", "Ling", "Ling", "Chu", "Quan", "Xie", "Ken", "Nie", "Jiu", "Yao", "Chuo", "Kun", "Yu", "Chu", "Yi", "Ni", "Cuo", "Zou", "Qu", "Nen", "Xian", "Ou", "E", "Wo", "Yi", "Chuo", "Zou", "Dian", "Chu", "Jin", "Ya", "Chi", "Chen", "He", "Ken", "Ju", "Ling", "Pao", "Tiao", "Zi", "Ken", "Yu", "Chuo", "Qu", "Wo", "Long", "Pang", "Gong", "Pang", "Yan", "Long", "Long", "Gong", "Kan", "Ta", "Ling", "Ta", "Long", "Gong", "Kan", "Gui", "Qiu", "Bie", "Gui", "Yue", "Chui", "He", "Jue", "Xie", "Yu", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const $1 = Object.freeze(E1);
const q1 = ["it", "ix", "i", "ip", "iet", "iex", "ie", "iep", "at", "ax", "a", "ap", "uox", "uo", "uop", "ot", "ox", "o", "op", "ex", "e", "wu", "bit", "bix", "bi", "bip", "biet", "biex", "bie", "biep", "bat", "bax", "ba", "bap", "buox", "buo", "buop", "bot", "box", "bo", "bop", "bex", "be", "bep", "but", "bux", "bu", "bup", "burx", "bur", "byt", "byx", "by", "byp", "byrx", "byr", "pit", "pix", "pi", "pip", "piex", "pie", "piep", "pat", "pax", "pa", "pap", "puox", "puo", "puop", "pot", "pox", "po", "pop", "put", "pux", "pu", "pup", "purx", "pur", "pyt", "pyx", "py", "pyp", "pyrx", "pyr", "bbit", "bbix", "bbi", "bbip", "bbiet", "bbiex", "bbie", "bbiep", "bbat", "bbax", "bba", "bbap", "bbuox", "bbuo", "bbuop", "bbot", "bbox", "bbo", "bbop", "bbex", "bbe", "bbep", "bbut", "bbux", "bbu", "bbup", "bburx", "bbur", "bbyt", "bbyx", "bby", "bbyp", "nbit", "nbix", "nbi", "nbip", "nbiex", "nbie", "nbiep", "nbat", "nbax", "nba", "nbap", "nbot", "nbox", "nbo", "nbop", "nbut", "nbux", "nbu", "nbup", "nburx", "nbur", "nbyt", "nbyx", "nby", "nbyp", "nbyrx", "nbyr", "hmit", "hmix", "hmi", "hmip", "hmiex", "hmie", "hmiep", "hmat", "hmax", "hma", "hmap", "hmuox", "hmuo", "hmuop", "hmot", "hmox", "hmo", "hmop", "hmut", "hmux", "hmu", "hmup", "hmurx", "hmur", "hmyx", "hmy", "hmyp", "hmyrx", "hmyr", "mit", "mix", "mi", "mip", "miex", "mie", "miep", "mat", "max", "ma", "map", "muot", "muox", "muo", "muop", "mot", "mox", "mo", "mop", "mex", "me", "mut", "mux", "mu", "mup", "murx", "mur", "myt", "myx", "my", "myp", "fit", "fix", "fi", "fip", "fat", "fax", "fa", "fap", "fox", "fo", "fop", "fut", "fux", "fu", "fup", "furx", "fur", "fyt", "fyx", "fy", "fyp", "vit", "vix", "vi", "vip", "viet", "viex", "vie", "viep", "vat", "vax", "va", "vap", "vot", "vox", "vo", "vop", "vex", "vep", "vut", "vux", "vu", "vup", "vurx", "vur", "vyt", "vyx", "vy", "vyp", "vyrx", "vyr"];
const I1 = Object.freeze(q1);
const U1 = ["dit", "dix", "di", "dip", "diex", "die", "diep", "dat", "dax", "da", "dap", "duox", "duo", "dot", "dox", "do", "dop", "dex", "de", "dep", "dut", "dux", "du", "dup", "durx", "dur", "tit", "tix", "ti", "tip", "tiex", "tie", "tiep", "tat", "tax", "ta", "tap", "tuot", "tuox", "tuo", "tuop", "tot", "tox", "to", "top", "tex", "te", "tep", "tut", "tux", "tu", "tup", "turx", "tur", "ddit", "ddix", "ddi", "ddip", "ddiex", "ddie", "ddiep", "ddat", "ddax", "dda", "ddap", "dduox", "dduo", "dduop", "ddot", "ddox", "ddo", "ddop", "ddex", "dde", "ddep", "ddut", "ddux", "ddu", "ddup", "ddurx", "ddur", "ndit", "ndix", "ndi", "ndip", "ndiex", "ndie", "ndat", "ndax", "nda", "ndap", "ndot", "ndox", "ndo", "ndop", "ndex", "nde", "ndep", "ndut", "ndux", "ndu", "ndup", "ndurx", "ndur", "hnit", "hnix", "hni", "hnip", "hniet", "hniex", "hnie", "hniep", "hnat", "hnax", "hna", "hnap", "hnuox", "hnuo", "hnot", "hnox", "hnop", "hnex", "hne", "hnep", "hnut", "nit", "nix", "ni", "nip", "niex", "nie", "niep", "nax", "na", "nap", "nuox", "nuo", "nuop", "not", "nox", "no", "nop", "nex", "ne", "nep", "nut", "nux", "nu", "nup", "nurx", "nur", "hlit", "hlix", "hli", "hlip", "hliex", "hlie", "hliep", "hlat", "hlax", "hla", "hlap", "hluox", "hluo", "hluop", "hlox", "hlo", "hlop", "hlex", "hle", "hlep", "hlut", "hlux", "hlu", "hlup", "hlurx", "hlur", "hlyt", "hlyx", "hly", "hlyp", "hlyrx", "hlyr", "lit", "lix", "li", "lip", "liet", "liex", "lie", "liep", "lat", "lax", "la", "lap", "luot", "luox", "luo", "luop", "lot", "lox", "lo", "lop", "lex", "le", "lep", "lut", "lux", "lu", "lup", "lurx", "lur", "lyt", "lyx", "ly", "lyp", "lyrx", "lyr", "git", "gix", "gi", "gip", "giet", "giex", "gie", "giep", "gat", "gax", "ga", "gap", "guot", "guox", "guo", "guop", "got", "gox", "go", "gop", "get", "gex", "ge", "gep", "gut", "gux", "gu", "gup", "gurx", "gur", "kit", "kix", "ki", "kip", "kiex", "kie", "kiep", "kat"];
const V1 = Object.freeze(U1);
const iS = ["kax", "ka", "kap", "kuox", "kuo", "kuop", "kot", "kox", "ko", "kop", "ket", "kex", "ke", "kep", "kut", "kux", "ku", "kup", "kurx", "kur", "ggit", "ggix", "ggi", "ggiex", "ggie", "ggiep", "ggat", "ggax", "gga", "ggap", "gguot", "gguox", "gguo", "gguop", "ggot", "ggox", "ggo", "ggop", "gget", "ggex", "gge", "ggep", "ggut", "ggux", "ggu", "ggup", "ggurx", "ggur", "mgiex", "mgie", "mgat", "mgax", "mga", "mgap", "mguox", "mguo", "mguop", "mgot", "mgox", "mgo", "mgop", "mgex", "mge", "mgep", "mgut", "mgux", "mgu", "mgup", "mgurx", "mgur", "hxit", "hxix", "hxi", "hxip", "hxiet", "hxiex", "hxie", "hxiep", "hxat", "hxax", "hxa", "hxap", "hxuot", "hxuox", "hxuo", "hxuop", "hxot", "hxox", "hxo", "hxop", "hxex", "hxe", "hxep", "ngiex", "ngie", "ngiep", "ngat", "ngax", "nga", "ngap", "nguot", "nguox", "nguo", "ngot", "ngox", "ngo", "ngop", "ngex", "nge", "ngep", "hit", "hiex", "hie", "hat", "hax", "ha", "hap", "huot", "huox", "huo", "huop", "hot", "hox", "ho", "hop", "hex", "he", "hep", "wat", "wax", "wa", "wap", "wuox", "wuo", "wuop", "wox", "wo", "wop", "wex", "we", "wep", "zit", "zix", "zi", "zip", "ziex", "zie", "ziep", "zat", "zax", "za", "zap", "zuox", "zuo", "zuop", "zot", "zox", "zo", "zop", "zex", "ze", "zep", "zut", "zux", "zu", "zup", "zurx", "zur", "zyt", "zyx", "zy", "zyp", "zyrx", "zyr", "cit", "cix", "ci", "cip", "ciet", "ciex", "cie", "ciep", "cat", "cax", "ca", "cap", "cuox", "cuo", "cuop", "cot", "cox", "co", "cop", "cex", "ce", "cep", "cut", "cux", "cu", "cup", "curx", "cur", "cyt", "cyx", "cy", "cyp", "cyrx", "cyr", "zzit", "zzix", "zzi", "zzip", "zziet", "zziex", "zzie", "zziep", "zzat", "zzax", "zza", "zzap", "zzox", "zzo", "zzop", "zzex", "zze", "zzep", "zzux", "zzu", "zzup", "zzurx", "zzur", "zzyt", "zzyx", "zzy", "zzyp", "zzyrx", "zzyr", "nzit", "nzix", "nzi", "nzip", "nziex", "nzie", "nziep", "nzat", "nzax", "nza", "nzap", "nzuox", "nzuo", "nzox", "nzop", "nzex", "nze", "nzux", "nzu"];
const oS = Object.freeze(iS);
const eS = ["nzup", "nzurx", "nzur", "nzyt", "nzyx", "nzy", "nzyp", "nzyrx", "nzyr", "sit", "six", "si", "sip", "siex", "sie", "siep", "sat", "sax", "sa", "sap", "suox", "suo", "suop", "sot", "sox", "so", "sop", "sex", "se", "sep", "sut", "sux", "su", "sup", "surx", "sur", "syt", "syx", "sy", "syp", "syrx", "syr", "ssit", "ssix", "ssi", "ssip", "ssiex", "ssie", "ssiep", "ssat", "ssax", "ssa", "ssap", "ssot", "ssox", "sso", "ssop", "ssex", "sse", "ssep", "ssut", "ssux", "ssu", "ssup", "ssyt", "ssyx", "ssy", "ssyp", "ssyrx", "ssyr", "zhat", "zhax", "zha", "zhap", "zhuox", "zhuo", "zhuop", "zhot", "zhox", "zho", "zhop", "zhet", "zhex", "zhe", "zhep", "zhut", "zhux", "zhu", "zhup", "zhurx", "zhur", "zhyt", "zhyx", "zhy", "zhyp", "zhyrx", "zhyr", "chat", "chax", "cha", "chap", "chuot", "chuox", "chuo", "chuop", "chot", "chox", "cho", "chop", "chet", "chex", "che", "chep", "chux", "chu", "chup", "churx", "chur", "chyt", "chyx", "chy", "chyp", "chyrx", "chyr", "rrax", "rra", "rruox", "rruo", "rrot", "rrox", "rro", "rrop", "rret", "rrex", "rre", "rrep", "rrut", "rrux", "rru", "rrup", "rrurx", "rrur", "rryt", "rryx", "rry", "rryp", "rryrx", "rryr", "nrat", "nrax", "nra", "nrap", "nrox", "nro", "nrop", "nret", "nrex", "nre", "nrep", "nrut", "nrux", "nru", "nrup", "nrurx", "nrur", "nryt", "nryx", "nry", "nryp", "nryrx", "nryr", "shat", "shax", "sha", "shap", "shuox", "shuo", "shuop", "shot", "shox", "sho", "shop", "shet", "shex", "she", "shep", "shut", "shux", "shu", "shup", "shurx", "shur", "shyt", "shyx", "shy", "shyp", "shyrx", "shyr", "rat", "rax", "ra", "rap", "ruox", "ruo", "ruop", "rot", "rox", "ro", "rop", "rex", "re", "rep", "rut", "rux", "ru", "rup", "rurx", "rur", "ryt", "ryx", "ry", "ryp", "ryrx", "ryr", "jit", "jix", "ji", "jip", "jiet", "jiex", "jie", "jiep", "juot", "juox", "juo", "juop", "jot", "jox", "jo", "jop", "jut", "jux", "ju", "jup", "jurx", "jur", "jyt", "jyx", "jy", "jyp", "jyrx", "jyr", "qit", "qix", "qi", "qip"];
const nS = Object.freeze(eS);
const aS = ["qiet", "qiex", "qie", "qiep", "quot", "quox", "quo", "quop", "qot", "qox", "qo", "qop", "qut", "qux", "qu", "qup", "qurx", "qur", "qyt", "qyx", "qy", "qyp", "qyrx", "qyr", "jjit", "jjix", "jji", "jjip", "jjiet", "jjiex", "jjie", "jjiep", "jjuox", "jjuo", "jjuop", "jjot", "jjox", "jjo", "jjop", "jjut", "jjux", "jju", "jjup", "jjurx", "jjur", "jjyt", "jjyx", "jjy", "jjyp", "njit", "njix", "nji", "njip", "njiet", "njiex", "njie", "njiep", "njuox", "njuo", "njot", "njox", "njo", "njop", "njux", "nju", "njup", "njurx", "njur", "njyt", "njyx", "njy", "njyp", "njyrx", "njyr", "nyit", "nyix", "nyi", "nyip", "nyiet", "nyiex", "nyie", "nyiep", "nyuox", "nyuo", "nyuop", "nyot", "nyox", "nyo", "nyop", "nyut", "nyux", "nyu", "nyup", "xit", "xix", "xi", "xip", "xiet", "xiex", "xie", "xiep", "xuox", "xuo", "xot", "xox", "xo", "xop", "xyt", "xyx", "xy", "xyp", "xyrx", "xyr", "yit", "yix", "yi", "yip", "yiet", "yiex", "yie", "yiep", "yuot", "yuox", "yuo", "yuop", "yot", "yox", "yo", "yop", "yut", "yux", "yu", "yup", "yurx", "yur", "yyt", "yyx", "yy", "yyp", "yyrx", "yyr", void 0, void 0, void 0, "Qot", "Li", "Kit", "Nyip", "Cyp", "Ssi", "Ggop", "Gep", "Mi", "Hxit", "Lyr", "Bbut", "Mop", "Yo", "Put", "Hxuo", "Tat", "Ga", void 0, void 0, "Ddur", "Bur", "Gguo", "Nyop", "Tu", "Op", "Jjut", "Zot", "Pyt", "Hmo", "Yit", "Vur", "Shy", "Vep", "Za", "Jo", void 0, "Jjy", "Got", "Jjie", "Wo", "Du", "Shur", "Lie", "Cy", "Cuop", "Cip", "Hxop", "Shat", void 0, "Shop", "Che", "Zziet", void 0, "Ke", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const uS = Object.freeze(aS);
const gS = [void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "A", "a", "A", "a", "HENG", "heng", "TZ", "tz", "3", "3", "4", "4", "4", "4", "F", "S", "AA", "aa", "AO", "ao", "AU", "au", "AV", "av", "AV-", "av-", "AY", "ay", "C", "c", "K", "k", "K", "k", "K", "k", "L", "l", "L", "l", "O", "o", "O", "o", "OO", "oo", "P", "p", "P", "p", "P", "p", "Q", "q", "Q", "q", "R", "r", "R", "r", "V", "v", "VY", "vy", "Z", "z", "TH", "th", "TH", "th", "Y", "y", "ET", "et", "IS", "is", "CON", "con", "US", "us", "dum", "lum", "num", "rum", "RUM", "tum", "um", "D", "d", "F", "f", "G", "G", "g", "L", "l", "R", "r", "S", "s", "T", "t", "^", ":", "=", "'", "'", "H", "l", ".", "N", "n", "C", "c", "c", "h", "B", "b", "F", "f", "AE", "ae", "OE", "oe", "UE", "ue", "G", "g", "K", "k", "N", "n", "R", "r", "S", "s", "H", "E", "G", "L", "I", "Q", "K", "T", "J", "CHI", "B", "b", "O", "o", "U", "u", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "I", "H", "oe", "M", "F", "P", "M", "I", "M1"];
const dS = Object.freeze(gS);
const tS = ["ga", "gag", "gagg", "gags", "gan", "ganj", "ganh", "gad", "gal", "galg", "galm", "galb", "gals", "galt", "galp", "galh", "gam", "gab", "gabs", "gas", "gass", "gang", "gaj", "gac", "gak", "gat", "gap", "gah", "gae", "gaeg", "gaegg", "gaegs", "gaen", "gaenj", "gaenh", "gaed", "gael", "gaelg", "gaelm", "gaelb", "gaels", "gaelt", "gaelp", "gaelh", "gaem", "gaeb", "gaebs", "gaes", "gaess", "gaeng", "gaej", "gaec", "gaek", "gaet", "gaep", "gaeh", "gya", "gyag", "gyagg", "gyags", "gyan", "gyanj", "gyanh", "gyad", "gyal", "gyalg", "gyalm", "gyalb", "gyals", "gyalt", "gyalp", "gyalh", "gyam", "gyab", "gyabs", "gyas", "gyass", "gyang", "gyaj", "gyac", "gyak", "gyat", "gyap", "gyah", "gyae", "gyaeg", "gyaegg", "gyaegs", "gyaen", "gyaenj", "gyaenh", "gyaed", "gyael", "gyaelg", "gyaelm", "gyaelb", "gyaels", "gyaelt", "gyaelp", "gyaelh", "gyaem", "gyaeb", "gyaebs", "gyaes", "gyaess", "gyaeng", "gyaej", "gyaec", "gyaek", "gyaet", "gyaep", "gyaeh", "geo", "geog", "geogg", "geogs", "geon", "geonj", "geonh", "geod", "geol", "geolg", "geolm", "geolb", "geols", "geolt", "geolp", "geolh", "geom", "geob", "geobs", "geos", "geoss", "geong", "geoj", "geoc", "geok", "geot", "geop", "geoh", "ge", "geg", "gegg", "gegs", "gen", "genj", "genh", "ged", "gel", "gelg", "gelm", "gelb", "gels", "gelt", "gelp", "gelh", "gem", "geb", "gebs", "ges", "gess", "geng", "gej", "gec", "gek", "get", "gep", "geh", "gyeo", "gyeog", "gyeogg", "gyeogs", "gyeon", "gyeonj", "gyeonh", "gyeod", "gyeol", "gyeolg", "gyeolm", "gyeolb", "gyeols", "gyeolt", "gyeolp", "gyeolh", "gyeom", "gyeob", "gyeobs", "gyeos", "gyeoss", "gyeong", "gyeoj", "gyeoc", "gyeok", "gyeot", "gyeop", "gyeoh", "gye", "gyeg", "gyegg", "gyegs", "gyen", "gyenj", "gyenh", "gyed", "gyel", "gyelg", "gyelm", "gyelb", "gyels", "gyelt", "gyelp", "gyelh", "gyem", "gyeb", "gyebs", "gyes", "gyess", "gyeng", "gyej", "gyec", "gyek", "gyet", "gyep", "gyeh", "go", "gog", "gogg", "gogs", "gon", "gonj", "gonh", "god", "gol", "golg", "golm", "golb", "gols", "golt", "golp", "golh", "gom", "gob", "gobs", "gos", "goss", "gong", "goj", "goc", "gok", "got", "gop", "goh", "gwa", "gwag", "gwagg", "gwags"];
const sS = Object.freeze(tS);
const hS = ["gwan", "gwanj", "gwanh", "gwad", "gwal", "gwalg", "gwalm", "gwalb", "gwals", "gwalt", "gwalp", "gwalh", "gwam", "gwab", "gwabs", "gwas", "gwass", "gwang", "gwaj", "gwac", "gwak", "gwat", "gwap", "gwah", "gwae", "gwaeg", "gwaegg", "gwaegs", "gwaen", "gwaenj", "gwaenh", "gwaed", "gwael", "gwaelg", "gwaelm", "gwaelb", "gwaels", "gwaelt", "gwaelp", "gwaelh", "gwaem", "gwaeb", "gwaebs", "gwaes", "gwaess", "gwaeng", "gwaej", "gwaec", "gwaek", "gwaet", "gwaep", "gwaeh", "goe", "goeg", "goegg", "goegs", "goen", "goenj", "goenh", "goed", "goel", "goelg", "goelm", "goelb", "goels", "goelt", "goelp", "goelh", "goem", "goeb", "goebs", "goes", "goess", "goeng", "goej", "goec", "goek", "goet", "goep", "goeh", "gyo", "gyog", "gyogg", "gyogs", "gyon", "gyonj", "gyonh", "gyod", "gyol", "gyolg", "gyolm", "gyolb", "gyols", "gyolt", "gyolp", "gyolh", "gyom", "gyob", "gyobs", "gyos", "gyoss", "gyong", "gyoj", "gyoc", "gyok", "gyot", "gyop", "gyoh", "gu", "gug", "gugg", "gugs", "gun", "gunj", "gunh", "gud", "gul", "gulg", "gulm", "gulb", "guls", "gult", "gulp", "gulh", "gum", "gub", "gubs", "gus", "guss", "gung", "guj", "guc", "guk", "gut", "gup", "guh", "gweo", "gweog", "gweogg", "gweogs", "gweon", "gweonj", "gweonh", "gweod", "gweol", "gweolg", "gweolm", "gweolb", "gweols", "gweolt", "gweolp", "gweolh", "gweom", "gweob", "gweobs", "gweos", "gweoss", "gweong", "gweoj", "gweoc", "gweok", "gweot", "gweop", "gweoh", "gwe", "gweg", "gwegg", "gwegs", "gwen", "gwenj", "gwenh", "gwed", "gwel", "gwelg", "gwelm", "gwelb", "gwels", "gwelt", "gwelp", "gwelh", "gwem", "gweb", "gwebs", "gwes", "gwess", "gweng", "gwej", "gwec", "gwek", "gwet", "gwep", "gweh", "gwi", "gwig", "gwigg", "gwigs", "gwin", "gwinj", "gwinh", "gwid", "gwil", "gwilg", "gwilm", "gwilb", "gwils", "gwilt", "gwilp", "gwilh", "gwim", "gwib", "gwibs", "gwis", "gwiss", "gwing", "gwij", "gwic", "gwik", "gwit", "gwip", "gwih", "gyu", "gyug", "gyugg", "gyugs", "gyun", "gyunj", "gyunh", "gyud", "gyul", "gyulg", "gyulm", "gyulb", "gyuls", "gyult", "gyulp", "gyulh", "gyum", "gyub", "gyubs", "gyus", "gyuss", "gyung", "gyuj", "gyuc", "gyuk", "gyut", "gyup", "gyuh", "geu", "geug", "geugg", "geugs", "geun", "geunj", "geunh", "geud"];
const rS = Object.freeze(hS);
const lS = ["geul", "geulg", "geulm", "geulb", "geuls", "geult", "geulp", "geulh", "geum", "geub", "geubs", "geus", "geuss", "geung", "geuj", "geuc", "geuk", "geut", "geup", "geuh", "gyi", "gyig", "gyigg", "gyigs", "gyin", "gyinj", "gyinh", "gyid", "gyil", "gyilg", "gyilm", "gyilb", "gyils", "gyilt", "gyilp", "gyilh", "gyim", "gyib", "gyibs", "gyis", "gyiss", "gying", "gyij", "gyic", "gyik", "gyit", "gyip", "gyih", "gi", "gig", "gigg", "gigs", "gin", "ginj", "ginh", "gid", "gil", "gilg", "gilm", "gilb", "gils", "gilt", "gilp", "gilh", "gim", "gib", "gibs", "gis", "giss", "ging", "gij", "gic", "gik", "git", "gip", "gih", "gga", "ggag", "ggagg", "ggags", "ggan", "gganj", "gganh", "ggad", "ggal", "ggalg", "ggalm", "ggalb", "ggals", "ggalt", "ggalp", "ggalh", "ggam", "ggab", "ggabs", "ggas", "ggass", "ggang", "ggaj", "ggac", "ggak", "ggat", "ggap", "ggah", "ggae", "ggaeg", "ggaegg", "ggaegs", "ggaen", "ggaenj", "ggaenh", "ggaed", "ggael", "ggaelg", "ggaelm", "ggaelb", "ggaels", "ggaelt", "ggaelp", "ggaelh", "ggaem", "ggaeb", "ggaebs", "ggaes", "ggaess", "ggaeng", "ggaej", "ggaec", "ggaek", "ggaet", "ggaep", "ggaeh", "ggya", "ggyag", "ggyagg", "ggyags", "ggyan", "ggyanj", "ggyanh", "ggyad", "ggyal", "ggyalg", "ggyalm", "ggyalb", "ggyals", "ggyalt", "ggyalp", "ggyalh", "ggyam", "ggyab", "ggyabs", "ggyas", "ggyass", "ggyang", "ggyaj", "ggyac", "ggyak", "ggyat", "ggyap", "ggyah", "ggyae", "ggyaeg", "ggyaegg", "ggyaegs", "ggyaen", "ggyaenj", "ggyaenh", "ggyaed", "ggyael", "ggyaelg", "ggyaelm", "ggyaelb", "ggyaels", "ggyaelt", "ggyaelp", "ggyaelh", "ggyaem", "ggyaeb", "ggyaebs", "ggyaes", "ggyaess", "ggyaeng", "ggyaej", "ggyaec", "ggyaek", "ggyaet", "ggyaep", "ggyaeh", "ggeo", "ggeog", "ggeogg", "ggeogs", "ggeon", "ggeonj", "ggeonh", "ggeod", "ggeol", "ggeolg", "ggeolm", "ggeolb", "ggeols", "ggeolt", "ggeolp", "ggeolh", "ggeom", "ggeob", "ggeobs", "ggeos", "ggeoss", "ggeong", "ggeoj", "ggeoc", "ggeok", "ggeot", "ggeop", "ggeoh", "gge", "ggeg", "ggegg", "ggegs", "ggen", "ggenj", "ggenh", "gged", "ggel", "ggelg", "ggelm", "ggelb", "ggels", "ggelt", "ggelp", "ggelh", "ggem", "ggeb", "ggebs", "gges", "ggess", "ggeng", "ggej", "ggec", "ggek", "gget", "ggep", "ggeh", "ggyeo", "ggyeog", "ggyeogg", "ggyeogs", "ggyeon", "ggyeonj", "ggyeonh", "ggyeod", "ggyeol", "ggyeolg", "ggyeolm", "ggyeolb"];
const vS = Object.freeze(lS);
const yS = ["ggyeols", "ggyeolt", "ggyeolp", "ggyeolh", "ggyeom", "ggyeob", "ggyeobs", "ggyeos", "ggyeoss", "ggyeong", "ggyeoj", "ggyeoc", "ggyeok", "ggyeot", "ggyeop", "ggyeoh", "ggye", "ggyeg", "ggyegg", "ggyegs", "ggyen", "ggyenj", "ggyenh", "ggyed", "ggyel", "ggyelg", "ggyelm", "ggyelb", "ggyels", "ggyelt", "ggyelp", "ggyelh", "ggyem", "ggyeb", "ggyebs", "ggyes", "ggyess", "ggyeng", "ggyej", "ggyec", "ggyek", "ggyet", "ggyep", "ggyeh", "ggo", "ggog", "ggogg", "ggogs", "ggon", "ggonj", "ggonh", "ggod", "ggol", "ggolg", "ggolm", "ggolb", "ggols", "ggolt", "ggolp", "ggolh", "ggom", "ggob", "ggobs", "ggos", "ggoss", "ggong", "ggoj", "ggoc", "ggok", "ggot", "ggop", "ggoh", "ggwa", "ggwag", "ggwagg", "ggwags", "ggwan", "ggwanj", "ggwanh", "ggwad", "ggwal", "ggwalg", "ggwalm", "ggwalb", "ggwals", "ggwalt", "ggwalp", "ggwalh", "ggwam", "ggwab", "ggwabs", "ggwas", "ggwass", "ggwang", "ggwaj", "ggwac", "ggwak", "ggwat", "ggwap", "ggwah", "ggwae", "ggwaeg", "ggwaegg", "ggwaegs", "ggwaen", "ggwaenj", "ggwaenh", "ggwaed", "ggwael", "ggwaelg", "ggwaelm", "ggwaelb", "ggwaels", "ggwaelt", "ggwaelp", "ggwaelh", "ggwaem", "ggwaeb", "ggwaebs", "ggwaes", "ggwaess", "ggwaeng", "ggwaej", "ggwaec", "ggwaek", "ggwaet", "ggwaep", "ggwaeh", "ggoe", "ggoeg", "ggoegg", "ggoegs", "ggoen", "ggoenj", "ggoenh", "ggoed", "ggoel", "ggoelg", "ggoelm", "ggoelb", "ggoels", "ggoelt", "ggoelp", "ggoelh", "ggoem", "ggoeb", "ggoebs", "ggoes", "ggoess", "ggoeng", "ggoej", "ggoec", "ggoek", "ggoet", "ggoep", "ggoeh", "ggyo", "ggyog", "ggyogg", "ggyogs", "ggyon", "ggyonj", "ggyonh", "ggyod", "ggyol", "ggyolg", "ggyolm", "ggyolb", "ggyols", "ggyolt", "ggyolp", "ggyolh", "ggyom", "ggyob", "ggyobs", "ggyos", "ggyoss", "ggyong", "ggyoj", "ggyoc", "ggyok", "ggyot", "ggyop", "ggyoh", "ggu", "ggug", "ggugg", "ggugs", "ggun", "ggunj", "ggunh", "ggud", "ggul", "ggulg", "ggulm", "ggulb", "gguls", "ggult", "ggulp", "ggulh", "ggum", "ggub", "ggubs", "ggus", "gguss", "ggung", "gguj", "gguc", "gguk", "ggut", "ggup", "gguh", "ggweo", "ggweog", "ggweogg", "ggweogs", "ggweon", "ggweonj", "ggweonh", "ggweod", "ggweol", "ggweolg", "ggweolm", "ggweolb", "ggweols", "ggweolt", "ggweolp", "ggweolh", "ggweom", "ggweob", "ggweobs", "ggweos", "ggweoss", "ggweong", "ggweoj", "ggweoc", "ggweok", "ggweot", "ggweop", "ggweoh", "ggwe", "ggweg", "ggwegg", "ggwegs", "ggwen", "ggwenj", "ggwenh", "ggwed", "ggwel", "ggwelg", "ggwelm", "ggwelb", "ggwels", "ggwelt", "ggwelp", "ggwelh"];
const cS = Object.freeze(yS);
const bS = ["ggwem", "ggweb", "ggwebs", "ggwes", "ggwess", "ggweng", "ggwej", "ggwec", "ggwek", "ggwet", "ggwep", "ggweh", "ggwi", "ggwig", "ggwigg", "ggwigs", "ggwin", "ggwinj", "ggwinh", "ggwid", "ggwil", "ggwilg", "ggwilm", "ggwilb", "ggwils", "ggwilt", "ggwilp", "ggwilh", "ggwim", "ggwib", "ggwibs", "ggwis", "ggwiss", "ggwing", "ggwij", "ggwic", "ggwik", "ggwit", "ggwip", "ggwih", "ggyu", "ggyug", "ggyugg", "ggyugs", "ggyun", "ggyunj", "ggyunh", "ggyud", "ggyul", "ggyulg", "ggyulm", "ggyulb", "ggyuls", "ggyult", "ggyulp", "ggyulh", "ggyum", "ggyub", "ggyubs", "ggyus", "ggyuss", "ggyung", "ggyuj", "ggyuc", "ggyuk", "ggyut", "ggyup", "ggyuh", "ggeu", "ggeug", "ggeugg", "ggeugs", "ggeun", "ggeunj", "ggeunh", "ggeud", "ggeul", "ggeulg", "ggeulm", "ggeulb", "ggeuls", "ggeult", "ggeulp", "ggeulh", "ggeum", "ggeub", "ggeubs", "ggeus", "ggeuss", "ggeung", "ggeuj", "ggeuc", "ggeuk", "ggeut", "ggeup", "ggeuh", "ggyi", "ggyig", "ggyigg", "ggyigs", "ggyin", "ggyinj", "ggyinh", "ggyid", "ggyil", "ggyilg", "ggyilm", "ggyilb", "ggyils", "ggyilt", "ggyilp", "ggyilh", "ggyim", "ggyib", "ggyibs", "ggyis", "ggyiss", "ggying", "ggyij", "ggyic", "ggyik", "ggyit", "ggyip", "ggyih", "ggi", "ggig", "ggigg", "ggigs", "ggin", "gginj", "gginh", "ggid", "ggil", "ggilg", "ggilm", "ggilb", "ggils", "ggilt", "ggilp", "ggilh", "ggim", "ggib", "ggibs", "ggis", "ggiss", "gging", "ggij", "ggic", "ggik", "ggit", "ggip", "ggih", "na", "nag", "nagg", "nags", "nan", "nanj", "nanh", "nad", "nal", "nalg", "nalm", "nalb", "nals", "nalt", "nalp", "nalh", "nam", "nab", "nabs", "nas", "nass", "nang", "naj", "nac", "nak", "nat", "nap", "nah", "nae", "naeg", "naegg", "naegs", "naen", "naenj", "naenh", "naed", "nael", "naelg", "naelm", "naelb", "naels", "naelt", "naelp", "naelh", "naem", "naeb", "naebs", "naes", "naess", "naeng", "naej", "naec", "naek", "naet", "naep", "naeh", "nya", "nyag", "nyagg", "nyags", "nyan", "nyanj", "nyanh", "nyad", "nyal", "nyalg", "nyalm", "nyalb", "nyals", "nyalt", "nyalp", "nyalh", "nyam", "nyab", "nyabs", "nyas", "nyass", "nyang", "nyaj", "nyac", "nyak", "nyat", "nyap", "nyah", "nyae", "nyaeg", "nyaegg", "nyaegs", "nyaen", "nyaenj", "nyaenh", "nyaed", "nyael", "nyaelg", "nyaelm", "nyaelb", "nyaels", "nyaelt", "nyaelp", "nyaelh", "nyaem", "nyaeb", "nyaebs", "nyaes"];
const pS = Object.freeze(bS);
const wS = ["nyaess", "nyaeng", "nyaej", "nyaec", "nyaek", "nyaet", "nyaep", "nyaeh", "neo", "neog", "neogg", "neogs", "neon", "neonj", "neonh", "neod", "neol", "neolg", "neolm", "neolb", "neols", "neolt", "neolp", "neolh", "neom", "neob", "neobs", "neos", "neoss", "neong", "neoj", "neoc", "neok", "neot", "neop", "neoh", "ne", "neg", "negg", "negs", "nen", "nenj", "nenh", "ned", "nel", "nelg", "nelm", "nelb", "nels", "nelt", "nelp", "nelh", "nem", "neb", "nebs", "nes", "ness", "neng", "nej", "nec", "nek", "net", "nep", "neh", "nyeo", "nyeog", "nyeogg", "nyeogs", "nyeon", "nyeonj", "nyeonh", "nyeod", "nyeol", "nyeolg", "nyeolm", "nyeolb", "nyeols", "nyeolt", "nyeolp", "nyeolh", "nyeom", "nyeob", "nyeobs", "nyeos", "nyeoss", "nyeong", "nyeoj", "nyeoc", "nyeok", "nyeot", "nyeop", "nyeoh", "nye", "nyeg", "nyegg", "nyegs", "nyen", "nyenj", "nyenh", "nyed", "nyel", "nyelg", "nyelm", "nyelb", "nyels", "nyelt", "nyelp", "nyelh", "nyem", "nyeb", "nyebs", "nyes", "nyess", "nyeng", "nyej", "nyec", "nyek", "nyet", "nyep", "nyeh", "no", "nog", "nogg", "nogs", "non", "nonj", "nonh", "nod", "nol", "nolg", "nolm", "nolb", "nols", "nolt", "nolp", "nolh", "nom", "nob", "nobs", "nos", "noss", "nong", "noj", "noc", "nok", "not", "nop", "noh", "nwa", "nwag", "nwagg", "nwags", "nwan", "nwanj", "nwanh", "nwad", "nwal", "nwalg", "nwalm", "nwalb", "nwals", "nwalt", "nwalp", "nwalh", "nwam", "nwab", "nwabs", "nwas", "nwass", "nwang", "nwaj", "nwac", "nwak", "nwat", "nwap", "nwah", "nwae", "nwaeg", "nwaegg", "nwaegs", "nwaen", "nwaenj", "nwaenh", "nwaed", "nwael", "nwaelg", "nwaelm", "nwaelb", "nwaels", "nwaelt", "nwaelp", "nwaelh", "nwaem", "nwaeb", "nwaebs", "nwaes", "nwaess", "nwaeng", "nwaej", "nwaec", "nwaek", "nwaet", "nwaep", "nwaeh", "noe", "noeg", "noegg", "noegs", "noen", "noenj", "noenh", "noed", "noel", "noelg", "noelm", "noelb", "noels", "noelt", "noelp", "noelh", "noem", "noeb", "noebs", "noes", "noess", "noeng", "noej", "noec", "noek", "noet", "noep", "noeh", "nyo", "nyog", "nyogg", "nyogs", "nyon", "nyonj", "nyonh", "nyod", "nyol", "nyolg", "nyolm", "nyolb", "nyols", "nyolt", "nyolp", "nyolh", "nyom", "nyob", "nyobs", "nyos", "nyoss", "nyong", "nyoj", "nyoc"];
const jS = Object.freeze(wS);
const mS = ["nyok", "nyot", "nyop", "nyoh", "nu", "nug", "nugg", "nugs", "nun", "nunj", "nunh", "nud", "nul", "nulg", "nulm", "nulb", "nuls", "nult", "nulp", "nulh", "num", "nub", "nubs", "nus", "nuss", "nung", "nuj", "nuc", "nuk", "nut", "nup", "nuh", "nweo", "nweog", "nweogg", "nweogs", "nweon", "nweonj", "nweonh", "nweod", "nweol", "nweolg", "nweolm", "nweolb", "nweols", "nweolt", "nweolp", "nweolh", "nweom", "nweob", "nweobs", "nweos", "nweoss", "nweong", "nweoj", "nweoc", "nweok", "nweot", "nweop", "nweoh", "nwe", "nweg", "nwegg", "nwegs", "nwen", "nwenj", "nwenh", "nwed", "nwel", "nwelg", "nwelm", "nwelb", "nwels", "nwelt", "nwelp", "nwelh", "nwem", "nweb", "nwebs", "nwes", "nwess", "nweng", "nwej", "nwec", "nwek", "nwet", "nwep", "nweh", "nwi", "nwig", "nwigg", "nwigs", "nwin", "nwinj", "nwinh", "nwid", "nwil", "nwilg", "nwilm", "nwilb", "nwils", "nwilt", "nwilp", "nwilh", "nwim", "nwib", "nwibs", "nwis", "nwiss", "nwing", "nwij", "nwic", "nwik", "nwit", "nwip", "nwih", "nyu", "nyug", "nyugg", "nyugs", "nyun", "nyunj", "nyunh", "nyud", "nyul", "nyulg", "nyulm", "nyulb", "nyuls", "nyult", "nyulp", "nyulh", "nyum", "nyub", "nyubs", "nyus", "nyuss", "nyung", "nyuj", "nyuc", "nyuk", "nyut", "nyup", "nyuh", "neu", "neug", "neugg", "neugs", "neun", "neunj", "neunh", "neud", "neul", "neulg", "neulm", "neulb", "neuls", "neult", "neulp", "neulh", "neum", "neub", "neubs", "neus", "neuss", "neung", "neuj", "neuc", "neuk", "neut", "neup", "neuh", "nyi", "nyig", "nyigg", "nyigs", "nyin", "nyinj", "nyinh", "nyid", "nyil", "nyilg", "nyilm", "nyilb", "nyils", "nyilt", "nyilp", "nyilh", "nyim", "nyib", "nyibs", "nyis", "nyiss", "nying", "nyij", "nyic", "nyik", "nyit", "nyip", "nyih", "ni", "nig", "nigg", "nigs", "nin", "ninj", "ninh", "nid", "nil", "nilg", "nilm", "nilb", "nils", "nilt", "nilp", "nilh", "nim", "nib", "nibs", "nis", "niss", "ning", "nij", "nic", "nik", "nit", "nip", "nih", "da", "dag", "dagg", "dags", "dan", "danj", "danh", "dad", "dal", "dalg", "dalm", "dalb", "dals", "dalt", "dalp", "dalh", "dam", "dab", "dabs", "das", "dass", "dang", "daj", "dac", "dak", "dat", "dap", "dah"];
const fS = Object.freeze(mS);
const YS = ["dae", "daeg", "daegg", "daegs", "daen", "daenj", "daenh", "daed", "dael", "daelg", "daelm", "daelb", "daels", "daelt", "daelp", "daelh", "daem", "daeb", "daebs", "daes", "daess", "daeng", "daej", "daec", "daek", "daet", "daep", "daeh", "dya", "dyag", "dyagg", "dyags", "dyan", "dyanj", "dyanh", "dyad", "dyal", "dyalg", "dyalm", "dyalb", "dyals", "dyalt", "dyalp", "dyalh", "dyam", "dyab", "dyabs", "dyas", "dyass", "dyang", "dyaj", "dyac", "dyak", "dyat", "dyap", "dyah", "dyae", "dyaeg", "dyaegg", "dyaegs", "dyaen", "dyaenj", "dyaenh", "dyaed", "dyael", "dyaelg", "dyaelm", "dyaelb", "dyaels", "dyaelt", "dyaelp", "dyaelh", "dyaem", "dyaeb", "dyaebs", "dyaes", "dyaess", "dyaeng", "dyaej", "dyaec", "dyaek", "dyaet", "dyaep", "dyaeh", "deo", "deog", "deogg", "deogs", "deon", "deonj", "deonh", "deod", "deol", "deolg", "deolm", "deolb", "deols", "deolt", "deolp", "deolh", "deom", "deob", "deobs", "deos", "deoss", "deong", "deoj", "deoc", "deok", "deot", "deop", "deoh", "de", "deg", "degg", "degs", "den", "denj", "denh", "ded", "del", "delg", "delm", "delb", "dels", "delt", "delp", "delh", "dem", "deb", "debs", "des", "dess", "deng", "dej", "dec", "dek", "det", "dep", "deh", "dyeo", "dyeog", "dyeogg", "dyeogs", "dyeon", "dyeonj", "dyeonh", "dyeod", "dyeol", "dyeolg", "dyeolm", "dyeolb", "dyeols", "dyeolt", "dyeolp", "dyeolh", "dyeom", "dyeob", "dyeobs", "dyeos", "dyeoss", "dyeong", "dyeoj", "dyeoc", "dyeok", "dyeot", "dyeop", "dyeoh", "dye", "dyeg", "dyegg", "dyegs", "dyen", "dyenj", "dyenh", "dyed", "dyel", "dyelg", "dyelm", "dyelb", "dyels", "dyelt", "dyelp", "dyelh", "dyem", "dyeb", "dyebs", "dyes", "dyess", "dyeng", "dyej", "dyec", "dyek", "dyet", "dyep", "dyeh", "do", "dog", "dogg", "dogs", "don", "donj", "donh", "dod", "dol", "dolg", "dolm", "dolb", "dols", "dolt", "dolp", "dolh", "dom", "dob", "dobs", "dos", "doss", "dong", "doj", "doc", "dok", "dot", "dop", "doh", "dwa", "dwag", "dwagg", "dwags", "dwan", "dwanj", "dwanh", "dwad", "dwal", "dwalg", "dwalm", "dwalb", "dwals", "dwalt", "dwalp", "dwalh", "dwam", "dwab", "dwabs", "dwas", "dwass", "dwang", "dwaj", "dwac", "dwak", "dwat", "dwap", "dwah", "dwae", "dwaeg", "dwaegg", "dwaegs"];
const kS = Object.freeze(YS);
const LS = ["dwaen", "dwaenj", "dwaenh", "dwaed", "dwael", "dwaelg", "dwaelm", "dwaelb", "dwaels", "dwaelt", "dwaelp", "dwaelh", "dwaem", "dwaeb", "dwaebs", "dwaes", "dwaess", "dwaeng", "dwaej", "dwaec", "dwaek", "dwaet", "dwaep", "dwaeh", "doe", "doeg", "doegg", "doegs", "doen", "doenj", "doenh", "doed", "doel", "doelg", "doelm", "doelb", "doels", "doelt", "doelp", "doelh", "doem", "doeb", "doebs", "does", "doess", "doeng", "doej", "doec", "doek", "doet", "doep", "doeh", "dyo", "dyog", "dyogg", "dyogs", "dyon", "dyonj", "dyonh", "dyod", "dyol", "dyolg", "dyolm", "dyolb", "dyols", "dyolt", "dyolp", "dyolh", "dyom", "dyob", "dyobs", "dyos", "dyoss", "dyong", "dyoj", "dyoc", "dyok", "dyot", "dyop", "dyoh", "du", "dug", "dugg", "dugs", "dun", "dunj", "dunh", "dud", "dul", "dulg", "dulm", "dulb", "duls", "dult", "dulp", "dulh", "dum", "dub", "dubs", "dus", "duss", "dung", "duj", "duc", "duk", "dut", "dup", "duh", "dweo", "dweog", "dweogg", "dweogs", "dweon", "dweonj", "dweonh", "dweod", "dweol", "dweolg", "dweolm", "dweolb", "dweols", "dweolt", "dweolp", "dweolh", "dweom", "dweob", "dweobs", "dweos", "dweoss", "dweong", "dweoj", "dweoc", "dweok", "dweot", "dweop", "dweoh", "dwe", "dweg", "dwegg", "dwegs", "dwen", "dwenj", "dwenh", "dwed", "dwel", "dwelg", "dwelm", "dwelb", "dwels", "dwelt", "dwelp", "dwelh", "dwem", "dweb", "dwebs", "dwes", "dwess", "dweng", "dwej", "dwec", "dwek", "dwet", "dwep", "dweh", "dwi", "dwig", "dwigg", "dwigs", "dwin", "dwinj", "dwinh", "dwid", "dwil", "dwilg", "dwilm", "dwilb", "dwils", "dwilt", "dwilp", "dwilh", "dwim", "dwib", "dwibs", "dwis", "dwiss", "dwing", "dwij", "dwic", "dwik", "dwit", "dwip", "dwih", "dyu", "dyug", "dyugg", "dyugs", "dyun", "dyunj", "dyunh", "dyud", "dyul", "dyulg", "dyulm", "dyulb", "dyuls", "dyult", "dyulp", "dyulh", "dyum", "dyub", "dyubs", "dyus", "dyuss", "dyung", "dyuj", "dyuc", "dyuk", "dyut", "dyup", "dyuh", "deu", "deug", "deugg", "deugs", "deun", "deunj", "deunh", "deud", "deul", "deulg", "deulm", "deulb", "deuls", "deult", "deulp", "deulh", "deum", "deub", "deubs", "deus", "deuss", "deung", "deuj", "deuc", "deuk", "deut", "deup", "deuh", "dyi", "dyig", "dyigg", "dyigs", "dyin", "dyinj", "dyinh", "dyid"];
const ZS = Object.freeze(LS);
const SS = ["dyil", "dyilg", "dyilm", "dyilb", "dyils", "dyilt", "dyilp", "dyilh", "dyim", "dyib", "dyibs", "dyis", "dyiss", "dying", "dyij", "dyic", "dyik", "dyit", "dyip", "dyih", "di", "dig", "digg", "digs", "din", "dinj", "dinh", "did", "dil", "dilg", "dilm", "dilb", "dils", "dilt", "dilp", "dilh", "dim", "dib", "dibs", "dis", "diss", "ding", "dij", "dic", "dik", "dit", "dip", "dih", "dda", "ddag", "ddagg", "ddags", "ddan", "ddanj", "ddanh", "ddad", "ddal", "ddalg", "ddalm", "ddalb", "ddals", "ddalt", "ddalp", "ddalh", "ddam", "ddab", "ddabs", "ddas", "ddass", "ddang", "ddaj", "ddac", "ddak", "ddat", "ddap", "ddah", "ddae", "ddaeg", "ddaegg", "ddaegs", "ddaen", "ddaenj", "ddaenh", "ddaed", "ddael", "ddaelg", "ddaelm", "ddaelb", "ddaels", "ddaelt", "ddaelp", "ddaelh", "ddaem", "ddaeb", "ddaebs", "ddaes", "ddaess", "ddaeng", "ddaej", "ddaec", "ddaek", "ddaet", "ddaep", "ddaeh", "ddya", "ddyag", "ddyagg", "ddyags", "ddyan", "ddyanj", "ddyanh", "ddyad", "ddyal", "ddyalg", "ddyalm", "ddyalb", "ddyals", "ddyalt", "ddyalp", "ddyalh", "ddyam", "ddyab", "ddyabs", "ddyas", "ddyass", "ddyang", "ddyaj", "ddyac", "ddyak", "ddyat", "ddyap", "ddyah", "ddyae", "ddyaeg", "ddyaegg", "ddyaegs", "ddyaen", "ddyaenj", "ddyaenh", "ddyaed", "ddyael", "ddyaelg", "ddyaelm", "ddyaelb", "ddyaels", "ddyaelt", "ddyaelp", "ddyaelh", "ddyaem", "ddyaeb", "ddyaebs", "ddyaes", "ddyaess", "ddyaeng", "ddyaej", "ddyaec", "ddyaek", "ddyaet", "ddyaep", "ddyaeh", "ddeo", "ddeog", "ddeogg", "ddeogs", "ddeon", "ddeonj", "ddeonh", "ddeod", "ddeol", "ddeolg", "ddeolm", "ddeolb", "ddeols", "ddeolt", "ddeolp", "ddeolh", "ddeom", "ddeob", "ddeobs", "ddeos", "ddeoss", "ddeong", "ddeoj", "ddeoc", "ddeok", "ddeot", "ddeop", "ddeoh", "dde", "ddeg", "ddegg", "ddegs", "dden", "ddenj", "ddenh", "dded", "ddel", "ddelg", "ddelm", "ddelb", "ddels", "ddelt", "ddelp", "ddelh", "ddem", "ddeb", "ddebs", "ddes", "ddess", "ddeng", "ddej", "ddec", "ddek", "ddet", "ddep", "ddeh", "ddyeo", "ddyeog", "ddyeogg", "ddyeogs", "ddyeon", "ddyeonj", "ddyeonh", "ddyeod", "ddyeol", "ddyeolg", "ddyeolm", "ddyeolb", "ddyeols", "ddyeolt", "ddyeolp", "ddyeolh", "ddyeom", "ddyeob", "ddyeobs", "ddyeos", "ddyeoss", "ddyeong", "ddyeoj", "ddyeoc", "ddyeok", "ddyeot", "ddyeop", "ddyeoh", "ddye", "ddyeg", "ddyegg", "ddyegs", "ddyen", "ddyenj", "ddyenh", "ddyed", "ddyel", "ddyelg", "ddyelm", "ddyelb"];
const JS = Object.freeze(SS);
const CS = ["ddyels", "ddyelt", "ddyelp", "ddyelh", "ddyem", "ddyeb", "ddyebs", "ddyes", "ddyess", "ddyeng", "ddyej", "ddyec", "ddyek", "ddyet", "ddyep", "ddyeh", "ddo", "ddog", "ddogg", "ddogs", "ddon", "ddonj", "ddonh", "ddod", "ddol", "ddolg", "ddolm", "ddolb", "ddols", "ddolt", "ddolp", "ddolh", "ddom", "ddob", "ddobs", "ddos", "ddoss", "ddong", "ddoj", "ddoc", "ddok", "ddot", "ddop", "ddoh", "ddwa", "ddwag", "ddwagg", "ddwags", "ddwan", "ddwanj", "ddwanh", "ddwad", "ddwal", "ddwalg", "ddwalm", "ddwalb", "ddwals", "ddwalt", "ddwalp", "ddwalh", "ddwam", "ddwab", "ddwabs", "ddwas", "ddwass", "ddwang", "ddwaj", "ddwac", "ddwak", "ddwat", "ddwap", "ddwah", "ddwae", "ddwaeg", "ddwaegg", "ddwaegs", "ddwaen", "ddwaenj", "ddwaenh", "ddwaed", "ddwael", "ddwaelg", "ddwaelm", "ddwaelb", "ddwaels", "ddwaelt", "ddwaelp", "ddwaelh", "ddwaem", "ddwaeb", "ddwaebs", "ddwaes", "ddwaess", "ddwaeng", "ddwaej", "ddwaec", "ddwaek", "ddwaet", "ddwaep", "ddwaeh", "ddoe", "ddoeg", "ddoegg", "ddoegs", "ddoen", "ddoenj", "ddoenh", "ddoed", "ddoel", "ddoelg", "ddoelm", "ddoelb", "ddoels", "ddoelt", "ddoelp", "ddoelh", "ddoem", "ddoeb", "ddoebs", "ddoes", "ddoess", "ddoeng", "ddoej", "ddoec", "ddoek", "ddoet", "ddoep", "ddoeh", "ddyo", "ddyog", "ddyogg", "ddyogs", "ddyon", "ddyonj", "ddyonh", "ddyod", "ddyol", "ddyolg", "ddyolm", "ddyolb", "ddyols", "ddyolt", "ddyolp", "ddyolh", "ddyom", "ddyob", "ddyobs", "ddyos", "ddyoss", "ddyong", "ddyoj", "ddyoc", "ddyok", "ddyot", "ddyop", "ddyoh", "ddu", "ddug", "ddugg", "ddugs", "ddun", "ddunj", "ddunh", "ddud", "ddul", "ddulg", "ddulm", "ddulb", "dduls", "ddult", "ddulp", "ddulh", "ddum", "ddub", "ddubs", "ddus", "dduss", "ddung", "dduj", "dduc", "dduk", "ddut", "ddup", "dduh", "ddweo", "ddweog", "ddweogg", "ddweogs", "ddweon", "ddweonj", "ddweonh", "ddweod", "ddweol", "ddweolg", "ddweolm", "ddweolb", "ddweols", "ddweolt", "ddweolp", "ddweolh", "ddweom", "ddweob", "ddweobs", "ddweos", "ddweoss", "ddweong", "ddweoj", "ddweoc", "ddweok", "ddweot", "ddweop", "ddweoh", "ddwe", "ddweg", "ddwegg", "ddwegs", "ddwen", "ddwenj", "ddwenh", "ddwed", "ddwel", "ddwelg", "ddwelm", "ddwelb", "ddwels", "ddwelt", "ddwelp", "ddwelh", "ddwem", "ddweb", "ddwebs", "ddwes", "ddwess", "ddweng", "ddwej", "ddwec", "ddwek", "ddwet", "ddwep", "ddweh", "ddwi", "ddwig", "ddwigg", "ddwigs", "ddwin", "ddwinj", "ddwinh", "ddwid", "ddwil", "ddwilg", "ddwilm", "ddwilb", "ddwils", "ddwilt", "ddwilp", "ddwilh"];
const XS = Object.freeze(CS);
const HS = ["ddwim", "ddwib", "ddwibs", "ddwis", "ddwiss", "ddwing", "ddwij", "ddwic", "ddwik", "ddwit", "ddwip", "ddwih", "ddyu", "ddyug", "ddyugg", "ddyugs", "ddyun", "ddyunj", "ddyunh", "ddyud", "ddyul", "ddyulg", "ddyulm", "ddyulb", "ddyuls", "ddyult", "ddyulp", "ddyulh", "ddyum", "ddyub", "ddyubs", "ddyus", "ddyuss", "ddyung", "ddyuj", "ddyuc", "ddyuk", "ddyut", "ddyup", "ddyuh", "ddeu", "ddeug", "ddeugg", "ddeugs", "ddeun", "ddeunj", "ddeunh", "ddeud", "ddeul", "ddeulg", "ddeulm", "ddeulb", "ddeuls", "ddeult", "ddeulp", "ddeulh", "ddeum", "ddeub", "ddeubs", "ddeus", "ddeuss", "ddeung", "ddeuj", "ddeuc", "ddeuk", "ddeut", "ddeup", "ddeuh", "ddyi", "ddyig", "ddyigg", "ddyigs", "ddyin", "ddyinj", "ddyinh", "ddyid", "ddyil", "ddyilg", "ddyilm", "ddyilb", "ddyils", "ddyilt", "ddyilp", "ddyilh", "ddyim", "ddyib", "ddyibs", "ddyis", "ddyiss", "ddying", "ddyij", "ddyic", "ddyik", "ddyit", "ddyip", "ddyih", "ddi", "ddig", "ddigg", "ddigs", "ddin", "ddinj", "ddinh", "ddid", "ddil", "ddilg", "ddilm", "ddilb", "ddils", "ddilt", "ddilp", "ddilh", "ddim", "ddib", "ddibs", "ddis", "ddiss", "dding", "ddij", "ddic", "ddik", "ddit", "ddip", "ddih", "ra", "rag", "ragg", "rags", "ran", "ranj", "ranh", "rad", "ral", "ralg", "ralm", "ralb", "rals", "ralt", "ralp", "ralh", "ram", "rab", "rabs", "ras", "rass", "rang", "raj", "rac", "rak", "rat", "rap", "rah", "rae", "raeg", "raegg", "raegs", "raen", "raenj", "raenh", "raed", "rael", "raelg", "raelm", "raelb", "raels", "raelt", "raelp", "raelh", "raem", "raeb", "raebs", "raes", "raess", "raeng", "raej", "raec", "raek", "raet", "raep", "raeh", "rya", "ryag", "ryagg", "ryags", "ryan", "ryanj", "ryanh", "ryad", "ryal", "ryalg", "ryalm", "ryalb", "ryals", "ryalt", "ryalp", "ryalh", "ryam", "ryab", "ryabs", "ryas", "ryass", "ryang", "ryaj", "ryac", "ryak", "ryat", "ryap", "ryah", "ryae", "ryaeg", "ryaegg", "ryaegs", "ryaen", "ryaenj", "ryaenh", "ryaed", "ryael", "ryaelg", "ryaelm", "ryaelb", "ryaels", "ryaelt", "ryaelp", "ryaelh", "ryaem", "ryaeb", "ryaebs", "ryaes", "ryaess", "ryaeng", "ryaej", "ryaec", "ryaek", "ryaet", "ryaep", "ryaeh", "reo", "reog", "reogg", "reogs", "reon", "reonj", "reonh", "reod", "reol", "reolg", "reolm", "reolb", "reols", "reolt", "reolp", "reolh", "reom", "reob", "reobs", "reos"];
const DS = Object.freeze(HS);
const TS = ["reoss", "reong", "reoj", "reoc", "reok", "reot", "reop", "reoh", "re", "reg", "regg", "regs", "ren", "renj", "renh", "red", "rel", "relg", "relm", "relb", "rels", "relt", "relp", "relh", "rem", "reb", "rebs", "res", "ress", "reng", "rej", "rec", "rek", "ret", "rep", "reh", "ryeo", "ryeog", "ryeogg", "ryeogs", "ryeon", "ryeonj", "ryeonh", "ryeod", "ryeol", "ryeolg", "ryeolm", "ryeolb", "ryeols", "ryeolt", "ryeolp", "ryeolh", "ryeom", "ryeob", "ryeobs", "ryeos", "ryeoss", "ryeong", "ryeoj", "ryeoc", "ryeok", "ryeot", "ryeop", "ryeoh", "rye", "ryeg", "ryegg", "ryegs", "ryen", "ryenj", "ryenh", "ryed", "ryel", "ryelg", "ryelm", "ryelb", "ryels", "ryelt", "ryelp", "ryelh", "ryem", "ryeb", "ryebs", "ryes", "ryess", "ryeng", "ryej", "ryec", "ryek", "ryet", "ryep", "ryeh", "ro", "rog", "rogg", "rogs", "ron", "ronj", "ronh", "rod", "rol", "rolg", "rolm", "rolb", "rols", "rolt", "rolp", "rolh", "rom", "rob", "robs", "ros", "ross", "rong", "roj", "roc", "rok", "rot", "rop", "roh", "rwa", "rwag", "rwagg", "rwags", "rwan", "rwanj", "rwanh", "rwad", "rwal", "rwalg", "rwalm", "rwalb", "rwals", "rwalt", "rwalp", "rwalh", "rwam", "rwab", "rwabs", "rwas", "rwass", "rwang", "rwaj", "rwac", "rwak", "rwat", "rwap", "rwah", "rwae", "rwaeg", "rwaegg", "rwaegs", "rwaen", "rwaenj", "rwaenh", "rwaed", "rwael", "rwaelg", "rwaelm", "rwaelb", "rwaels", "rwaelt", "rwaelp", "rwaelh", "rwaem", "rwaeb", "rwaebs", "rwaes", "rwaess", "rwaeng", "rwaej", "rwaec", "rwaek", "rwaet", "rwaep", "rwaeh", "roe", "roeg", "roegg", "roegs", "roen", "roenj", "roenh", "roed", "roel", "roelg", "roelm", "roelb", "roels", "roelt", "roelp", "roelh", "roem", "roeb", "roebs", "roes", "roess", "roeng", "roej", "roec", "roek", "roet", "roep", "roeh", "ryo", "ryog", "ryogg", "ryogs", "ryon", "ryonj", "ryonh", "ryod", "ryol", "ryolg", "ryolm", "ryolb", "ryols", "ryolt", "ryolp", "ryolh", "ryom", "ryob", "ryobs", "ryos", "ryoss", "ryong", "ryoj", "ryoc", "ryok", "ryot", "ryop", "ryoh", "ru", "rug", "rugg", "rugs", "run", "runj", "runh", "rud", "rul", "rulg", "rulm", "rulb", "ruls", "rult", "rulp", "rulh", "rum", "rub", "rubs", "rus", "russ", "rung", "ruj", "ruc"];
const BS = Object.freeze(TS);
const QS = ["ruk", "rut", "rup", "ruh", "rweo", "rweog", "rweogg", "rweogs", "rweon", "rweonj", "rweonh", "rweod", "rweol", "rweolg", "rweolm", "rweolb", "rweols", "rweolt", "rweolp", "rweolh", "rweom", "rweob", "rweobs", "rweos", "rweoss", "rweong", "rweoj", "rweoc", "rweok", "rweot", "rweop", "rweoh", "rwe", "rweg", "rwegg", "rwegs", "rwen", "rwenj", "rwenh", "rwed", "rwel", "rwelg", "rwelm", "rwelb", "rwels", "rwelt", "rwelp", "rwelh", "rwem", "rweb", "rwebs", "rwes", "rwess", "rweng", "rwej", "rwec", "rwek", "rwet", "rwep", "rweh", "rwi", "rwig", "rwigg", "rwigs", "rwin", "rwinj", "rwinh", "rwid", "rwil", "rwilg", "rwilm", "rwilb", "rwils", "rwilt", "rwilp", "rwilh", "rwim", "rwib", "rwibs", "rwis", "rwiss", "rwing", "rwij", "rwic", "rwik", "rwit", "rwip", "rwih", "ryu", "ryug", "ryugg", "ryugs", "ryun", "ryunj", "ryunh", "ryud", "ryul", "ryulg", "ryulm", "ryulb", "ryuls", "ryult", "ryulp", "ryulh", "ryum", "ryub", "ryubs", "ryus", "ryuss", "ryung", "ryuj", "ryuc", "ryuk", "ryut", "ryup", "ryuh", "reu", "reug", "reugg", "reugs", "reun", "reunj", "reunh", "reud", "reul", "reulg", "reulm", "reulb", "reuls", "reult", "reulp", "reulh", "reum", "reub", "reubs", "reus", "reuss", "reung", "reuj", "reuc", "reuk", "reut", "reup", "reuh", "ryi", "ryig", "ryigg", "ryigs", "ryin", "ryinj", "ryinh", "ryid", "ryil", "ryilg", "ryilm", "ryilb", "ryils", "ryilt", "ryilp", "ryilh", "ryim", "ryib", "ryibs", "ryis", "ryiss", "rying", "ryij", "ryic", "ryik", "ryit", "ryip", "ryih", "ri", "rig", "rigg", "rigs", "rin", "rinj", "rinh", "rid", "ril", "rilg", "rilm", "rilb", "rils", "rilt", "rilp", "rilh", "rim", "rib", "ribs", "ris", "riss", "ring", "rij", "ric", "rik", "rit", "rip", "rih", "ma", "mag", "magg", "mags", "man", "manj", "manh", "mad", "mal", "malg", "malm", "malb", "mals", "malt", "malp", "malh", "mam", "mab", "mabs", "mas", "mass", "mang", "maj", "mac", "mak", "mat", "map", "mah", "mae", "maeg", "maegg", "maegs", "maen", "maenj", "maenh", "maed", "mael", "maelg", "maelm", "maelb", "maels", "maelt", "maelp", "maelh", "maem", "maeb", "maebs", "maes", "maess", "maeng", "maej", "maec", "maek", "maet", "maep", "maeh"];
const MS = Object.freeze(QS);
const GS = ["mya", "myag", "myagg", "myags", "myan", "myanj", "myanh", "myad", "myal", "myalg", "myalm", "myalb", "myals", "myalt", "myalp", "myalh", "myam", "myab", "myabs", "myas", "myass", "myang", "myaj", "myac", "myak", "myat", "myap", "myah", "myae", "myaeg", "myaegg", "myaegs", "myaen", "myaenj", "myaenh", "myaed", "myael", "myaelg", "myaelm", "myaelb", "myaels", "myaelt", "myaelp", "myaelh", "myaem", "myaeb", "myaebs", "myaes", "myaess", "myaeng", "myaej", "myaec", "myaek", "myaet", "myaep", "myaeh", "meo", "meog", "meogg", "meogs", "meon", "meonj", "meonh", "meod", "meol", "meolg", "meolm", "meolb", "meols", "meolt", "meolp", "meolh", "meom", "meob", "meobs", "meos", "meoss", "meong", "meoj", "meoc", "meok", "meot", "meop", "meoh", "me", "meg", "megg", "megs", "men", "menj", "menh", "med", "mel", "melg", "melm", "melb", "mels", "melt", "melp", "melh", "mem", "meb", "mebs", "mes", "mess", "meng", "mej", "mec", "mek", "met", "mep", "meh", "myeo", "myeog", "myeogg", "myeogs", "myeon", "myeonj", "myeonh", "myeod", "myeol", "myeolg", "myeolm", "myeolb", "myeols", "myeolt", "myeolp", "myeolh", "myeom", "myeob", "myeobs", "myeos", "myeoss", "myeong", "myeoj", "myeoc", "myeok", "myeot", "myeop", "myeoh", "mye", "myeg", "myegg", "myegs", "myen", "myenj", "myenh", "myed", "myel", "myelg", "myelm", "myelb", "myels", "myelt", "myelp", "myelh", "myem", "myeb", "myebs", "myes", "myess", "myeng", "myej", "myec", "myek", "myet", "myep", "myeh", "mo", "mog", "mogg", "mogs", "mon", "monj", "monh", "mod", "mol", "molg", "molm", "molb", "mols", "molt", "molp", "molh", "mom", "mob", "mobs", "mos", "moss", "mong", "moj", "moc", "mok", "mot", "mop", "moh", "mwa", "mwag", "mwagg", "mwags", "mwan", "mwanj", "mwanh", "mwad", "mwal", "mwalg", "mwalm", "mwalb", "mwals", "mwalt", "mwalp", "mwalh", "mwam", "mwab", "mwabs", "mwas", "mwass", "mwang", "mwaj", "mwac", "mwak", "mwat", "mwap", "mwah", "mwae", "mwaeg", "mwaegg", "mwaegs", "mwaen", "mwaenj", "mwaenh", "mwaed", "mwael", "mwaelg", "mwaelm", "mwaelb", "mwaels", "mwaelt", "mwaelp", "mwaelh", "mwaem", "mwaeb", "mwaebs", "mwaes", "mwaess", "mwaeng", "mwaej", "mwaec", "mwaek", "mwaet", "mwaep", "mwaeh", "moe", "moeg", "moegg", "moegs"];
const NS = Object.freeze(GS);
const xS = ["moen", "moenj", "moenh", "moed", "moel", "moelg", "moelm", "moelb", "moels", "moelt", "moelp", "moelh", "moem", "moeb", "moebs", "moes", "moess", "moeng", "moej", "moec", "moek", "moet", "moep", "moeh", "myo", "myog", "myogg", "myogs", "myon", "myonj", "myonh", "myod", "myol", "myolg", "myolm", "myolb", "myols", "myolt", "myolp", "myolh", "myom", "myob", "myobs", "myos", "myoss", "myong", "myoj", "myoc", "myok", "myot", "myop", "myoh", "mu", "mug", "mugg", "mugs", "mun", "munj", "munh", "mud", "mul", "mulg", "mulm", "mulb", "muls", "mult", "mulp", "mulh", "mum", "mub", "mubs", "mus", "muss", "mung", "muj", "muc", "muk", "mut", "mup", "muh", "mweo", "mweog", "mweogg", "mweogs", "mweon", "mweonj", "mweonh", "mweod", "mweol", "mweolg", "mweolm", "mweolb", "mweols", "mweolt", "mweolp", "mweolh", "mweom", "mweob", "mweobs", "mweos", "mweoss", "mweong", "mweoj", "mweoc", "mweok", "mweot", "mweop", "mweoh", "mwe", "mweg", "mwegg", "mwegs", "mwen", "mwenj", "mwenh", "mwed", "mwel", "mwelg", "mwelm", "mwelb", "mwels", "mwelt", "mwelp", "mwelh", "mwem", "mweb", "mwebs", "mwes", "mwess", "mweng", "mwej", "mwec", "mwek", "mwet", "mwep", "mweh", "mwi", "mwig", "mwigg", "mwigs", "mwin", "mwinj", "mwinh", "mwid", "mwil", "mwilg", "mwilm", "mwilb", "mwils", "mwilt", "mwilp", "mwilh", "mwim", "mwib", "mwibs", "mwis", "mwiss", "mwing", "mwij", "mwic", "mwik", "mwit", "mwip", "mwih", "myu", "myug", "myugg", "myugs", "myun", "myunj", "myunh", "myud", "myul", "myulg", "myulm", "myulb", "myuls", "myult", "myulp", "myulh", "myum", "myub", "myubs", "myus", "myuss", "myung", "myuj", "myuc", "myuk", "myut", "myup", "myuh", "meu", "meug", "meugg", "meugs", "meun", "meunj", "meunh", "meud", "meul", "meulg", "meulm", "meulb", "meuls", "meult", "meulp", "meulh", "meum", "meub", "meubs", "meus", "meuss", "meung", "meuj", "meuc", "meuk", "meut", "meup", "meuh", "myi", "myig", "myigg", "myigs", "myin", "myinj", "myinh", "myid", "myil", "myilg", "myilm", "myilb", "myils", "myilt", "myilp", "myilh", "myim", "myib", "myibs", "myis", "myiss", "mying", "myij", "myic", "myik", "myit", "myip", "myih", "mi", "mig", "migg", "migs", "min", "minj", "minh", "mid"];
const WS = Object.freeze(xS);
const PS = ["mil", "milg", "milm", "milb", "mils", "milt", "milp", "milh", "mim", "mib", "mibs", "mis", "miss", "ming", "mij", "mic", "mik", "mit", "mip", "mih", "ba", "bag", "bagg", "bags", "ban", "banj", "banh", "bad", "bal", "balg", "balm", "balb", "bals", "balt", "balp", "balh", "bam", "bab", "babs", "bas", "bass", "bang", "baj", "bac", "bak", "bat", "bap", "bah", "bae", "baeg", "baegg", "baegs", "baen", "baenj", "baenh", "baed", "bael", "baelg", "baelm", "baelb", "baels", "baelt", "baelp", "baelh", "baem", "baeb", "baebs", "baes", "baess", "baeng", "baej", "baec", "baek", "baet", "baep", "baeh", "bya", "byag", "byagg", "byags", "byan", "byanj", "byanh", "byad", "byal", "byalg", "byalm", "byalb", "byals", "byalt", "byalp", "byalh", "byam", "byab", "byabs", "byas", "byass", "byang", "byaj", "byac", "byak", "byat", "byap", "byah", "byae", "byaeg", "byaegg", "byaegs", "byaen", "byaenj", "byaenh", "byaed", "byael", "byaelg", "byaelm", "byaelb", "byaels", "byaelt", "byaelp", "byaelh", "byaem", "byaeb", "byaebs", "byaes", "byaess", "byaeng", "byaej", "byaec", "byaek", "byaet", "byaep", "byaeh", "beo", "beog", "beogg", "beogs", "beon", "beonj", "beonh", "beod", "beol", "beolg", "beolm", "beolb", "beols", "beolt", "beolp", "beolh", "beom", "beob", "beobs", "beos", "beoss", "beong", "beoj", "beoc", "beok", "beot", "beop", "beoh", "be", "beg", "begg", "begs", "ben", "benj", "benh", "bed", "bel", "belg", "belm", "belb", "bels", "belt", "belp", "belh", "bem", "beb", "bebs", "bes", "bess", "beng", "bej", "bec", "bek", "bet", "bep", "beh", "byeo", "byeog", "byeogg", "byeogs", "byeon", "byeonj", "byeonh", "byeod", "byeol", "byeolg", "byeolm", "byeolb", "byeols", "byeolt", "byeolp", "byeolh", "byeom", "byeob", "byeobs", "byeos", "byeoss", "byeong", "byeoj", "byeoc", "byeok", "byeot", "byeop", "byeoh", "bye", "byeg", "byegg", "byegs", "byen", "byenj", "byenh", "byed", "byel", "byelg", "byelm", "byelb", "byels", "byelt", "byelp", "byelh", "byem", "byeb", "byebs", "byes", "byess", "byeng", "byej", "byec", "byek", "byet", "byep", "byeh", "bo", "bog", "bogg", "bogs", "bon", "bonj", "bonh", "bod", "bol", "bolg", "bolm", "bolb"];
const FS = Object.freeze(PS);
const KS = ["bols", "bolt", "bolp", "bolh", "bom", "bob", "bobs", "bos", "boss", "bong", "boj", "boc", "bok", "bot", "bop", "boh", "bwa", "bwag", "bwagg", "bwags", "bwan", "bwanj", "bwanh", "bwad", "bwal", "bwalg", "bwalm", "bwalb", "bwals", "bwalt", "bwalp", "bwalh", "bwam", "bwab", "bwabs", "bwas", "bwass", "bwang", "bwaj", "bwac", "bwak", "bwat", "bwap", "bwah", "bwae", "bwaeg", "bwaegg", "bwaegs", "bwaen", "bwaenj", "bwaenh", "bwaed", "bwael", "bwaelg", "bwaelm", "bwaelb", "bwaels", "bwaelt", "bwaelp", "bwaelh", "bwaem", "bwaeb", "bwaebs", "bwaes", "bwaess", "bwaeng", "bwaej", "bwaec", "bwaek", "bwaet", "bwaep", "bwaeh", "boe", "boeg", "boegg", "boegs", "boen", "boenj", "boenh", "boed", "boel", "boelg", "boelm", "boelb", "boels", "boelt", "boelp", "boelh", "boem", "boeb", "boebs", "boes", "boess", "boeng", "boej", "boec", "boek", "boet", "boep", "boeh", "byo", "byog", "byogg", "byogs", "byon", "byonj", "byonh", "byod", "byol", "byolg", "byolm", "byolb", "byols", "byolt", "byolp", "byolh", "byom", "byob", "byobs", "byos", "byoss", "byong", "byoj", "byoc", "byok", "byot", "byop", "byoh", "bu", "bug", "bugg", "bugs", "bun", "bunj", "bunh", "bud", "bul", "bulg", "bulm", "bulb", "buls", "bult", "bulp", "bulh", "bum", "bub", "bubs", "bus", "buss", "bung", "buj", "buc", "buk", "but", "bup", "buh", "bweo", "bweog", "bweogg", "bweogs", "bweon", "bweonj", "bweonh", "bweod", "bweol", "bweolg", "bweolm", "bweolb", "bweols", "bweolt", "bweolp", "bweolh", "bweom", "bweob", "bweobs", "bweos", "bweoss", "bweong", "bweoj", "bweoc", "bweok", "bweot", "bweop", "bweoh", "bwe", "bweg", "bwegg", "bwegs", "bwen", "bwenj", "bwenh", "bwed", "bwel", "bwelg", "bwelm", "bwelb", "bwels", "bwelt", "bwelp", "bwelh", "bwem", "bweb", "bwebs", "bwes", "bwess", "bweng", "bwej", "bwec", "bwek", "bwet", "bwep", "bweh", "bwi", "bwig", "bwigg", "bwigs", "bwin", "bwinj", "bwinh", "bwid", "bwil", "bwilg", "bwilm", "bwilb", "bwils", "bwilt", "bwilp", "bwilh", "bwim", "bwib", "bwibs", "bwis", "bwiss", "bwing", "bwij", "bwic", "bwik", "bwit", "bwip", "bwih", "byu", "byug", "byugg", "byugs", "byun", "byunj", "byunh", "byud", "byul", "byulg", "byulm", "byulb", "byuls", "byult", "byulp", "byulh"];
const RS = Object.freeze(KS);
const AS = ["byum", "byub", "byubs", "byus", "byuss", "byung", "byuj", "byuc", "byuk", "byut", "byup", "byuh", "beu", "beug", "beugg", "beugs", "beun", "beunj", "beunh", "beud", "beul", "beulg", "beulm", "beulb", "beuls", "beult", "beulp", "beulh", "beum", "beub", "beubs", "beus", "beuss", "beung", "beuj", "beuc", "beuk", "beut", "beup", "beuh", "byi", "byig", "byigg", "byigs", "byin", "byinj", "byinh", "byid", "byil", "byilg", "byilm", "byilb", "byils", "byilt", "byilp", "byilh", "byim", "byib", "byibs", "byis", "byiss", "bying", "byij", "byic", "byik", "byit", "byip", "byih", "bi", "big", "bigg", "bigs", "bin", "binj", "binh", "bid", "bil", "bilg", "bilm", "bilb", "bils", "bilt", "bilp", "bilh", "bim", "bib", "bibs", "bis", "biss", "bing", "bij", "bic", "bik", "bit", "bip", "bih", "bba", "bbag", "bbagg", "bbags", "bban", "bbanj", "bbanh", "bbad", "bbal", "bbalg", "bbalm", "bbalb", "bbals", "bbalt", "bbalp", "bbalh", "bbam", "bbab", "bbabs", "bbas", "bbass", "bbang", "bbaj", "bbac", "bbak", "bbat", "bbap", "bbah", "bbae", "bbaeg", "bbaegg", "bbaegs", "bbaen", "bbaenj", "bbaenh", "bbaed", "bbael", "bbaelg", "bbaelm", "bbaelb", "bbaels", "bbaelt", "bbaelp", "bbaelh", "bbaem", "bbaeb", "bbaebs", "bbaes", "bbaess", "bbaeng", "bbaej", "bbaec", "bbaek", "bbaet", "bbaep", "bbaeh", "bbya", "bbyag", "bbyagg", "bbyags", "bbyan", "bbyanj", "bbyanh", "bbyad", "bbyal", "bbyalg", "bbyalm", "bbyalb", "bbyals", "bbyalt", "bbyalp", "bbyalh", "bbyam", "bbyab", "bbyabs", "bbyas", "bbyass", "bbyang", "bbyaj", "bbyac", "bbyak", "bbyat", "bbyap", "bbyah", "bbyae", "bbyaeg", "bbyaegg", "bbyaegs", "bbyaen", "bbyaenj", "bbyaenh", "bbyaed", "bbyael", "bbyaelg", "bbyaelm", "bbyaelb", "bbyaels", "bbyaelt", "bbyaelp", "bbyaelh", "bbyaem", "bbyaeb", "bbyaebs", "bbyaes", "bbyaess", "bbyaeng", "bbyaej", "bbyaec", "bbyaek", "bbyaet", "bbyaep", "bbyaeh", "bbeo", "bbeog", "bbeogg", "bbeogs", "bbeon", "bbeonj", "bbeonh", "bbeod", "bbeol", "bbeolg", "bbeolm", "bbeolb", "bbeols", "bbeolt", "bbeolp", "bbeolh", "bbeom", "bbeob", "bbeobs", "bbeos", "bbeoss", "bbeong", "bbeoj", "bbeoc", "bbeok", "bbeot", "bbeop", "bbeoh", "bbe", "bbeg", "bbegg", "bbegs", "bben", "bbenj", "bbenh", "bbed", "bbel", "bbelg", "bbelm", "bbelb", "bbels", "bbelt", "bbelp", "bbelh", "bbem", "bbeb", "bbebs", "bbes"];
const _S = Object.freeze(AS);
const OS = ["bbess", "bbeng", "bbej", "bbec", "bbek", "bbet", "bbep", "bbeh", "bbyeo", "bbyeog", "bbyeogg", "bbyeogs", "bbyeon", "bbyeonj", "bbyeonh", "bbyeod", "bbyeol", "bbyeolg", "bbyeolm", "bbyeolb", "bbyeols", "bbyeolt", "bbyeolp", "bbyeolh", "bbyeom", "bbyeob", "bbyeobs", "bbyeos", "bbyeoss", "bbyeong", "bbyeoj", "bbyeoc", "bbyeok", "bbyeot", "bbyeop", "bbyeoh", "bbye", "bbyeg", "bbyegg", "bbyegs", "bbyen", "bbyenj", "bbyenh", "bbyed", "bbyel", "bbyelg", "bbyelm", "bbyelb", "bbyels", "bbyelt", "bbyelp", "bbyelh", "bbyem", "bbyeb", "bbyebs", "bbyes", "bbyess", "bbyeng", "bbyej", "bbyec", "bbyek", "bbyet", "bbyep", "bbyeh", "bbo", "bbog", "bbogg", "bbogs", "bbon", "bbonj", "bbonh", "bbod", "bbol", "bbolg", "bbolm", "bbolb", "bbols", "bbolt", "bbolp", "bbolh", "bbom", "bbob", "bbobs", "bbos", "bboss", "bbong", "bboj", "bboc", "bbok", "bbot", "bbop", "bboh", "bbwa", "bbwag", "bbwagg", "bbwags", "bbwan", "bbwanj", "bbwanh", "bbwad", "bbwal", "bbwalg", "bbwalm", "bbwalb", "bbwals", "bbwalt", "bbwalp", "bbwalh", "bbwam", "bbwab", "bbwabs", "bbwas", "bbwass", "bbwang", "bbwaj", "bbwac", "bbwak", "bbwat", "bbwap", "bbwah", "bbwae", "bbwaeg", "bbwaegg", "bbwaegs", "bbwaen", "bbwaenj", "bbwaenh", "bbwaed", "bbwael", "bbwaelg", "bbwaelm", "bbwaelb", "bbwaels", "bbwaelt", "bbwaelp", "bbwaelh", "bbwaem", "bbwaeb", "bbwaebs", "bbwaes", "bbwaess", "bbwaeng", "bbwaej", "bbwaec", "bbwaek", "bbwaet", "bbwaep", "bbwaeh", "bboe", "bboeg", "bboegg", "bboegs", "bboen", "bboenj", "bboenh", "bboed", "bboel", "bboelg", "bboelm", "bboelb", "bboels", "bboelt", "bboelp", "bboelh", "bboem", "bboeb", "bboebs", "bboes", "bboess", "bboeng", "bboej", "bboec", "bboek", "bboet", "bboep", "bboeh", "bbyo", "bbyog", "bbyogg", "bbyogs", "bbyon", "bbyonj", "bbyonh", "bbyod", "bbyol", "bbyolg", "bbyolm", "bbyolb", "bbyols", "bbyolt", "bbyolp", "bbyolh", "bbyom", "bbyob", "bbyobs", "bbyos", "bbyoss", "bbyong", "bbyoj", "bbyoc", "bbyok", "bbyot", "bbyop", "bbyoh", "bbu", "bbug", "bbugg", "bbugs", "bbun", "bbunj", "bbunh", "bbud", "bbul", "bbulg", "bbulm", "bbulb", "bbuls", "bbult", "bbulp", "bbulh", "bbum", "bbub", "bbubs", "bbus", "bbuss", "bbung", "bbuj", "bbuc", "bbuk", "bbut", "bbup", "bbuh", "bbweo", "bbweog", "bbweogg", "bbweogs", "bbweon", "bbweonj", "bbweonh", "bbweod", "bbweol", "bbweolg", "bbweolm", "bbweolb", "bbweols", "bbweolt", "bbweolp", "bbweolh", "bbweom", "bbweob", "bbweobs", "bbweos", "bbweoss", "bbweong", "bbweoj", "bbweoc"];
const zS = Object.freeze(OS);
const ES = ["bbweok", "bbweot", "bbweop", "bbweoh", "bbwe", "bbweg", "bbwegg", "bbwegs", "bbwen", "bbwenj", "bbwenh", "bbwed", "bbwel", "bbwelg", "bbwelm", "bbwelb", "bbwels", "bbwelt", "bbwelp", "bbwelh", "bbwem", "bbweb", "bbwebs", "bbwes", "bbwess", "bbweng", "bbwej", "bbwec", "bbwek", "bbwet", "bbwep", "bbweh", "bbwi", "bbwig", "bbwigg", "bbwigs", "bbwin", "bbwinj", "bbwinh", "bbwid", "bbwil", "bbwilg", "bbwilm", "bbwilb", "bbwils", "bbwilt", "bbwilp", "bbwilh", "bbwim", "bbwib", "bbwibs", "bbwis", "bbwiss", "bbwing", "bbwij", "bbwic", "bbwik", "bbwit", "bbwip", "bbwih", "bbyu", "bbyug", "bbyugg", "bbyugs", "bbyun", "bbyunj", "bbyunh", "bbyud", "bbyul", "bbyulg", "bbyulm", "bbyulb", "bbyuls", "bbyult", "bbyulp", "bbyulh", "bbyum", "bbyub", "bbyubs", "bbyus", "bbyuss", "bbyung", "bbyuj", "bbyuc", "bbyuk", "bbyut", "bbyup", "bbyuh", "bbeu", "bbeug", "bbeugg", "bbeugs", "bbeun", "bbeunj", "bbeunh", "bbeud", "bbeul", "bbeulg", "bbeulm", "bbeulb", "bbeuls", "bbeult", "bbeulp", "bbeulh", "bbeum", "bbeub", "bbeubs", "bbeus", "bbeuss", "bbeung", "bbeuj", "bbeuc", "bbeuk", "bbeut", "bbeup", "bbeuh", "bbyi", "bbyig", "bbyigg", "bbyigs", "bbyin", "bbyinj", "bbyinh", "bbyid", "bbyil", "bbyilg", "bbyilm", "bbyilb", "bbyils", "bbyilt", "bbyilp", "bbyilh", "bbyim", "bbyib", "bbyibs", "bbyis", "bbyiss", "bbying", "bbyij", "bbyic", "bbyik", "bbyit", "bbyip", "bbyih", "bbi", "bbig", "bbigg", "bbigs", "bbin", "bbinj", "bbinh", "bbid", "bbil", "bbilg", "bbilm", "bbilb", "bbils", "bbilt", "bbilp", "bbilh", "bbim", "bbib", "bbibs", "bbis", "bbiss", "bbing", "bbij", "bbic", "bbik", "bbit", "bbip", "bbih", "sa", "sag", "sagg", "sags", "san", "sanj", "sanh", "sad", "sal", "salg", "salm", "salb", "sals", "salt", "salp", "salh", "sam", "sab", "sabs", "sas", "sass", "sang", "saj", "sac", "sak", "sat", "sap", "sah", "sae", "saeg", "saegg", "saegs", "saen", "saenj", "saenh", "saed", "sael", "saelg", "saelm", "saelb", "saels", "saelt", "saelp", "saelh", "saem", "saeb", "saebs", "saes", "saess", "saeng", "saej", "saec", "saek", "saet", "saep", "saeh", "sya", "syag", "syagg", "syags", "syan", "syanj", "syanh", "syad", "syal", "syalg", "syalm", "syalb", "syals", "syalt", "syalp", "syalh", "syam", "syab", "syabs", "syas", "syass", "syang", "syaj", "syac", "syak", "syat", "syap", "syah"];
const $S = Object.freeze(ES);
const qS = ["syae", "syaeg", "syaegg", "syaegs", "syaen", "syaenj", "syaenh", "syaed", "syael", "syaelg", "syaelm", "syaelb", "syaels", "syaelt", "syaelp", "syaelh", "syaem", "syaeb", "syaebs", "syaes", "syaess", "syaeng", "syaej", "syaec", "syaek", "syaet", "syaep", "syaeh", "seo", "seog", "seogg", "seogs", "seon", "seonj", "seonh", "seod", "seol", "seolg", "seolm", "seolb", "seols", "seolt", "seolp", "seolh", "seom", "seob", "seobs", "seos", "seoss", "seong", "seoj", "seoc", "seok", "seot", "seop", "seoh", "se", "seg", "segg", "segs", "sen", "senj", "senh", "sed", "sel", "selg", "selm", "selb", "sels", "selt", "selp", "selh", "sem", "seb", "sebs", "ses", "sess", "seng", "sej", "sec", "sek", "set", "sep", "seh", "syeo", "syeog", "syeogg", "syeogs", "syeon", "syeonj", "syeonh", "syeod", "syeol", "syeolg", "syeolm", "syeolb", "syeols", "syeolt", "syeolp", "syeolh", "syeom", "syeob", "syeobs", "syeos", "syeoss", "syeong", "syeoj", "syeoc", "syeok", "syeot", "syeop", "syeoh", "sye", "syeg", "syegg", "syegs", "syen", "syenj", "syenh", "syed", "syel", "syelg", "syelm", "syelb", "syels", "syelt", "syelp", "syelh", "syem", "syeb", "syebs", "syes", "syess", "syeng", "syej", "syec", "syek", "syet", "syep", "syeh", "so", "sog", "sogg", "sogs", "son", "sonj", "sonh", "sod", "sol", "solg", "solm", "solb", "sols", "solt", "solp", "solh", "som", "sob", "sobs", "sos", "soss", "song", "soj", "soc", "sok", "sot", "sop", "soh", "swa", "swag", "swagg", "swags", "swan", "swanj", "swanh", "swad", "swal", "swalg", "swalm", "swalb", "swals", "swalt", "swalp", "swalh", "swam", "swab", "swabs", "swas", "swass", "swang", "swaj", "swac", "swak", "swat", "swap", "swah", "swae", "swaeg", "swaegg", "swaegs", "swaen", "swaenj", "swaenh", "swaed", "swael", "swaelg", "swaelm", "swaelb", "swaels", "swaelt", "swaelp", "swaelh", "swaem", "swaeb", "swaebs", "swaes", "swaess", "swaeng", "swaej", "swaec", "swaek", "swaet", "swaep", "swaeh", "soe", "soeg", "soegg", "soegs", "soen", "soenj", "soenh", "soed", "soel", "soelg", "soelm", "soelb", "soels", "soelt", "soelp", "soelh", "soem", "soeb", "soebs", "soes", "soess", "soeng", "soej", "soec", "soek", "soet", "soep", "soeh", "syo", "syog", "syogg", "syogs"];
const IS = Object.freeze(qS);
const US = ["syon", "syonj", "syonh", "syod", "syol", "syolg", "syolm", "syolb", "syols", "syolt", "syolp", "syolh", "syom", "syob", "syobs", "syos", "syoss", "syong", "syoj", "syoc", "syok", "syot", "syop", "syoh", "su", "sug", "sugg", "sugs", "sun", "sunj", "sunh", "sud", "sul", "sulg", "sulm", "sulb", "suls", "sult", "sulp", "sulh", "sum", "sub", "subs", "sus", "suss", "sung", "suj", "suc", "suk", "sut", "sup", "suh", "sweo", "sweog", "sweogg", "sweogs", "sweon", "sweonj", "sweonh", "sweod", "sweol", "sweolg", "sweolm", "sweolb", "sweols", "sweolt", "sweolp", "sweolh", "sweom", "sweob", "sweobs", "sweos", "sweoss", "sweong", "sweoj", "sweoc", "sweok", "sweot", "sweop", "sweoh", "swe", "sweg", "swegg", "swegs", "swen", "swenj", "swenh", "swed", "swel", "swelg", "swelm", "swelb", "swels", "swelt", "swelp", "swelh", "swem", "sweb", "swebs", "swes", "swess", "sweng", "swej", "swec", "swek", "swet", "swep", "sweh", "swi", "swig", "swigg", "swigs", "swin", "swinj", "swinh", "swid", "swil", "swilg", "swilm", "swilb", "swils", "swilt", "swilp", "swilh", "swim", "swib", "swibs", "swis", "swiss", "swing", "swij", "swic", "swik", "swit", "swip", "swih", "syu", "syug", "syugg", "syugs", "syun", "syunj", "syunh", "syud", "syul", "syulg", "syulm", "syulb", "syuls", "syult", "syulp", "syulh", "syum", "syub", "syubs", "syus", "syuss", "syung", "syuj", "syuc", "syuk", "syut", "syup", "syuh", "seu", "seug", "seugg", "seugs", "seun", "seunj", "seunh", "seud", "seul", "seulg", "seulm", "seulb", "seuls", "seult", "seulp", "seulh", "seum", "seub", "seubs", "seus", "seuss", "seung", "seuj", "seuc", "seuk", "seut", "seup", "seuh", "syi", "syig", "syigg", "syigs", "syin", "syinj", "syinh", "syid", "syil", "syilg", "syilm", "syilb", "syils", "syilt", "syilp", "syilh", "syim", "syib", "syibs", "syis", "syiss", "sying", "syij", "syic", "syik", "syit", "syip", "syih", "si", "sig", "sigg", "sigs", "sin", "sinj", "sinh", "sid", "sil", "silg", "silm", "silb", "sils", "silt", "silp", "silh", "sim", "sib", "sibs", "sis", "siss", "sing", "sij", "sic", "sik", "sit", "sip", "sih", "ssa", "ssag", "ssagg", "ssags", "ssan", "ssanj", "ssanh", "ssad"];
const VS = Object.freeze(US);
const iJ = ["ssal", "ssalg", "ssalm", "ssalb", "ssals", "ssalt", "ssalp", "ssalh", "ssam", "ssab", "ssabs", "ssas", "ssass", "ssang", "ssaj", "ssac", "ssak", "ssat", "ssap", "ssah", "ssae", "ssaeg", "ssaegg", "ssaegs", "ssaen", "ssaenj", "ssaenh", "ssaed", "ssael", "ssaelg", "ssaelm", "ssaelb", "ssaels", "ssaelt", "ssaelp", "ssaelh", "ssaem", "ssaeb", "ssaebs", "ssaes", "ssaess", "ssaeng", "ssaej", "ssaec", "ssaek", "ssaet", "ssaep", "ssaeh", "ssya", "ssyag", "ssyagg", "ssyags", "ssyan", "ssyanj", "ssyanh", "ssyad", "ssyal", "ssyalg", "ssyalm", "ssyalb", "ssyals", "ssyalt", "ssyalp", "ssyalh", "ssyam", "ssyab", "ssyabs", "ssyas", "ssyass", "ssyang", "ssyaj", "ssyac", "ssyak", "ssyat", "ssyap", "ssyah", "ssyae", "ssyaeg", "ssyaegg", "ssyaegs", "ssyaen", "ssyaenj", "ssyaenh", "ssyaed", "ssyael", "ssyaelg", "ssyaelm", "ssyaelb", "ssyaels", "ssyaelt", "ssyaelp", "ssyaelh", "ssyaem", "ssyaeb", "ssyaebs", "ssyaes", "ssyaess", "ssyaeng", "ssyaej", "ssyaec", "ssyaek", "ssyaet", "ssyaep", "ssyaeh", "sseo", "sseog", "sseogg", "sseogs", "sseon", "sseonj", "sseonh", "sseod", "sseol", "sseolg", "sseolm", "sseolb", "sseols", "sseolt", "sseolp", "sseolh", "sseom", "sseob", "sseobs", "sseos", "sseoss", "sseong", "sseoj", "sseoc", "sseok", "sseot", "sseop", "sseoh", "sse", "sseg", "ssegg", "ssegs", "ssen", "ssenj", "ssenh", "ssed", "ssel", "sselg", "sselm", "sselb", "ssels", "sselt", "sselp", "sselh", "ssem", "sseb", "ssebs", "sses", "ssess", "sseng", "ssej", "ssec", "ssek", "sset", "ssep", "sseh", "ssyeo", "ssyeog", "ssyeogg", "ssyeogs", "ssyeon", "ssyeonj", "ssyeonh", "ssyeod", "ssyeol", "ssyeolg", "ssyeolm", "ssyeolb", "ssyeols", "ssyeolt", "ssyeolp", "ssyeolh", "ssyeom", "ssyeob", "ssyeobs", "ssyeos", "ssyeoss", "ssyeong", "ssyeoj", "ssyeoc", "ssyeok", "ssyeot", "ssyeop", "ssyeoh", "ssye", "ssyeg", "ssyegg", "ssyegs", "ssyen", "ssyenj", "ssyenh", "ssyed", "ssyel", "ssyelg", "ssyelm", "ssyelb", "ssyels", "ssyelt", "ssyelp", "ssyelh", "ssyem", "ssyeb", "ssyebs", "ssyes", "ssyess", "ssyeng", "ssyej", "ssyec", "ssyek", "ssyet", "ssyep", "ssyeh", "sso", "ssog", "ssogg", "ssogs", "sson", "ssonj", "ssonh", "ssod", "ssol", "ssolg", "ssolm", "ssolb", "ssols", "ssolt", "ssolp", "ssolh", "ssom", "ssob", "ssobs", "ssos", "ssoss", "ssong", "ssoj", "ssoc", "ssok", "ssot", "ssop", "ssoh", "sswa", "sswag", "sswagg", "sswags", "sswan", "sswanj", "sswanh", "sswad", "sswal", "sswalg", "sswalm", "sswalb"];
const oJ = Object.freeze(iJ);
const eJ = ["sswals", "sswalt", "sswalp", "sswalh", "sswam", "sswab", "sswabs", "sswas", "sswass", "sswang", "sswaj", "sswac", "sswak", "sswat", "sswap", "sswah", "sswae", "sswaeg", "sswaegg", "sswaegs", "sswaen", "sswaenj", "sswaenh", "sswaed", "sswael", "sswaelg", "sswaelm", "sswaelb", "sswaels", "sswaelt", "sswaelp", "sswaelh", "sswaem", "sswaeb", "sswaebs", "sswaes", "sswaess", "sswaeng", "sswaej", "sswaec", "sswaek", "sswaet", "sswaep", "sswaeh", "ssoe", "ssoeg", "ssoegg", "ssoegs", "ssoen", "ssoenj", "ssoenh", "ssoed", "ssoel", "ssoelg", "ssoelm", "ssoelb", "ssoels", "ssoelt", "ssoelp", "ssoelh", "ssoem", "ssoeb", "ssoebs", "ssoes", "ssoess", "ssoeng", "ssoej", "ssoec", "ssoek", "ssoet", "ssoep", "ssoeh", "ssyo", "ssyog", "ssyogg", "ssyogs", "ssyon", "ssyonj", "ssyonh", "ssyod", "ssyol", "ssyolg", "ssyolm", "ssyolb", "ssyols", "ssyolt", "ssyolp", "ssyolh", "ssyom", "ssyob", "ssyobs", "ssyos", "ssyoss", "ssyong", "ssyoj", "ssyoc", "ssyok", "ssyot", "ssyop", "ssyoh", "ssu", "ssug", "ssugg", "ssugs", "ssun", "ssunj", "ssunh", "ssud", "ssul", "ssulg", "ssulm", "ssulb", "ssuls", "ssult", "ssulp", "ssulh", "ssum", "ssub", "ssubs", "ssus", "ssuss", "ssung", "ssuj", "ssuc", "ssuk", "ssut", "ssup", "ssuh", "ssweo", "ssweog", "ssweogg", "ssweogs", "ssweon", "ssweonj", "ssweonh", "ssweod", "ssweol", "ssweolg", "ssweolm", "ssweolb", "ssweols", "ssweolt", "ssweolp", "ssweolh", "ssweom", "ssweob", "ssweobs", "ssweos", "ssweoss", "ssweong", "ssweoj", "ssweoc", "ssweok", "ssweot", "ssweop", "ssweoh", "sswe", "ssweg", "sswegg", "sswegs", "sswen", "sswenj", "sswenh", "sswed", "sswel", "sswelg", "sswelm", "sswelb", "sswels", "sswelt", "sswelp", "sswelh", "sswem", "ssweb", "sswebs", "sswes", "sswess", "ssweng", "sswej", "sswec", "sswek", "sswet", "sswep", "ssweh", "sswi", "sswig", "sswigg", "sswigs", "sswin", "sswinj", "sswinh", "sswid", "sswil", "sswilg", "sswilm", "sswilb", "sswils", "sswilt", "sswilp", "sswilh", "sswim", "sswib", "sswibs", "sswis", "sswiss", "sswing", "sswij", "sswic", "sswik", "sswit", "sswip", "sswih", "ssyu", "ssyug", "ssyugg", "ssyugs", "ssyun", "ssyunj", "ssyunh", "ssyud", "ssyul", "ssyulg", "ssyulm", "ssyulb", "ssyuls", "ssyult", "ssyulp", "ssyulh", "ssyum", "ssyub", "ssyubs", "ssyus", "ssyuss", "ssyung", "ssyuj", "ssyuc", "ssyuk", "ssyut", "ssyup", "ssyuh", "sseu", "sseug", "sseugg", "sseugs", "sseun", "sseunj", "sseunh", "sseud", "sseul", "sseulg", "sseulm", "sseulb", "sseuls", "sseult", "sseulp", "sseulh"];
const nJ = Object.freeze(eJ);
const aJ = ["sseum", "sseub", "sseubs", "sseus", "sseuss", "sseung", "sseuj", "sseuc", "sseuk", "sseut", "sseup", "sseuh", "ssyi", "ssyig", "ssyigg", "ssyigs", "ssyin", "ssyinj", "ssyinh", "ssyid", "ssyil", "ssyilg", "ssyilm", "ssyilb", "ssyils", "ssyilt", "ssyilp", "ssyilh", "ssyim", "ssyib", "ssyibs", "ssyis", "ssyiss", "ssying", "ssyij", "ssyic", "ssyik", "ssyit", "ssyip", "ssyih", "ssi", "ssig", "ssigg", "ssigs", "ssin", "ssinj", "ssinh", "ssid", "ssil", "ssilg", "ssilm", "ssilb", "ssils", "ssilt", "ssilp", "ssilh", "ssim", "ssib", "ssibs", "ssis", "ssiss", "ssing", "ssij", "ssic", "ssik", "ssit", "ssip", "ssih", "a", "ag", "agg", "ags", "an", "anj", "anh", "ad", "al", "alg", "alm", "alb", "als", "alt", "alp", "alh", "am", "ab", "abs", "as", "ass", "ang", "aj", "ac", "ak", "at", "ap", "ah", "ae", "aeg", "aegg", "aegs", "aen", "aenj", "aenh", "aed", "ael", "aelg", "aelm", "aelb", "aels", "aelt", "aelp", "aelh", "aem", "aeb", "aebs", "aes", "aess", "aeng", "aej", "aec", "aek", "aet", "aep", "aeh", "ya", "yag", "yagg", "yags", "yan", "yanj", "yanh", "yad", "yal", "yalg", "yalm", "yalb", "yals", "yalt", "yalp", "yalh", "yam", "yab", "yabs", "yas", "yass", "yang", "yaj", "yac", "yak", "yat", "yap", "yah", "yae", "yaeg", "yaegg", "yaegs", "yaen", "yaenj", "yaenh", "yaed", "yael", "yaelg", "yaelm", "yaelb", "yaels", "yaelt", "yaelp", "yaelh", "yaem", "yaeb", "yaebs", "yaes", "yaess", "yaeng", "yaej", "yaec", "yaek", "yaet", "yaep", "yaeh", "eo", "eog", "eogg", "eogs", "eon", "eonj", "eonh", "eod", "eol", "eolg", "eolm", "eolb", "eols", "eolt", "eolp", "eolh", "eom", "eob", "eobs", "eos", "eoss", "eong", "eoj", "eoc", "eok", "eot", "eop", "eoh", "e", "eg", "egg", "egs", "en", "enj", "enh", "ed", "el", "elg", "elm", "elb", "els", "elt", "elp", "elh", "em", "eb", "ebs", "es", "ess", "eng", "ej", "ec", "ek", "et", "ep", "eh", "yeo", "yeog", "yeogg", "yeogs", "yeon", "yeonj", "yeonh", "yeod", "yeol", "yeolg", "yeolm", "yeolb", "yeols", "yeolt", "yeolp", "yeolh", "yeom", "yeob", "yeobs", "yeos"];
const uJ = Object.freeze(aJ);
const gJ = ["yeoss", "yeong", "yeoj", "yeoc", "yeok", "yeot", "yeop", "yeoh", "ye", "yeg", "yegg", "yegs", "yen", "yenj", "yenh", "yed", "yel", "yelg", "yelm", "yelb", "yels", "yelt", "yelp", "yelh", "yem", "yeb", "yebs", "yes", "yess", "yeng", "yej", "yec", "yek", "yet", "yep", "yeh", "o", "og", "ogg", "ogs", "on", "onj", "onh", "od", "ol", "olg", "olm", "olb", "ols", "olt", "olp", "olh", "om", "ob", "obs", "os", "oss", "ong", "oj", "oc", "ok", "ot", "op", "oh", "wa", "wag", "wagg", "wags", "wan", "wanj", "wanh", "wad", "wal", "walg", "walm", "walb", "wals", "walt", "walp", "walh", "wam", "wab", "wabs", "was", "wass", "wang", "waj", "wac", "wak", "wat", "wap", "wah", "wae", "waeg", "waegg", "waegs", "waen", "waenj", "waenh", "waed", "wael", "waelg", "waelm", "waelb", "waels", "waelt", "waelp", "waelh", "waem", "waeb", "waebs", "waes", "waess", "waeng", "waej", "waec", "waek", "waet", "waep", "waeh", "oe", "oeg", "oegg", "oegs", "oen", "oenj", "oenh", "oed", "oel", "oelg", "oelm", "oelb", "oels", "oelt", "oelp", "oelh", "oem", "oeb", "oebs", "oes", "oess", "oeng", "oej", "oec", "oek", "oet", "oep", "oeh", "yo", "yog", "yogg", "yogs", "yon", "yonj", "yonh", "yod", "yol", "yolg", "yolm", "yolb", "yols", "yolt", "yolp", "yolh", "yom", "yob", "yobs", "yos", "yoss", "yong", "yoj", "yoc", "yok", "yot", "yop", "yoh", "u", "ug", "ugg", "ugs", "un", "unj", "unh", "ud", "ul", "ulg", "ulm", "ulb", "uls", "ult", "ulp", "ulh", "um", "ub", "ubs", "us", "uss", "ung", "uj", "uc", "uk", "ut", "up", "uh", "weo", "weog", "weogg", "weogs", "weon", "weonj", "weonh", "weod", "weol", "weolg", "weolm", "weolb", "weols", "weolt", "weolp", "weolh", "weom", "weob", "weobs", "weos", "weoss", "weong", "weoj", "weoc", "weok", "weot", "weop", "weoh", "we", "weg", "wegg", "wegs", "wen", "wenj", "wenh", "wed", "wel", "welg", "welm", "welb", "wels", "welt", "welp", "welh", "wem", "web", "webs", "wes", "wess", "weng", "wej", "wec"];
const dJ = Object.freeze(gJ);
const tJ = ["wek", "wet", "wep", "weh", "wi", "wig", "wigg", "wigs", "win", "winj", "winh", "wid", "wil", "wilg", "wilm", "wilb", "wils", "wilt", "wilp", "wilh", "wim", "wib", "wibs", "wis", "wiss", "wing", "wij", "wic", "wik", "wit", "wip", "wih", "yu", "yug", "yugg", "yugs", "yun", "yunj", "yunh", "yud", "yul", "yulg", "yulm", "yulb", "yuls", "yult", "yulp", "yulh", "yum", "yub", "yubs", "yus", "yuss", "yung", "yuj", "yuc", "yuk", "yut", "yup", "yuh", "eu", "eug", "eugg", "eugs", "eun", "eunj", "eunh", "eud", "eul", "eulg", "eulm", "eulb", "euls", "eult", "eulp", "eulh", "eum", "eub", "eubs", "eus", "euss", "eung", "euj", "euc", "euk", "eut", "eup", "euh", "yi", "yig", "yigg", "yigs", "yin", "yinj", "yinh", "yid", "yil", "yilg", "yilm", "yilb", "yils", "yilt", "yilp", "yilh", "yim", "yib", "yibs", "yis", "yiss", "ying", "yij", "yic", "yik", "yit", "yip", "yih", "i", "ig", "igg", "igs", "in", "inj", "inh", "id", "il", "ilg", "ilm", "ilb", "ils", "ilt", "ilp", "ilh", "im", "ib", "ibs", "is", "iss", "ing", "ij", "ic", "ik", "it", "ip", "ih", "ja", "jag", "jagg", "jags", "jan", "janj", "janh", "jad", "jal", "jalg", "jalm", "jalb", "jals", "jalt", "jalp", "jalh", "jam", "jab", "jabs", "jas", "jass", "jang", "jaj", "jac", "jak", "jat", "jap", "jah", "jae", "jaeg", "jaegg", "jaegs", "jaen", "jaenj", "jaenh", "jaed", "jael", "jaelg", "jaelm", "jaelb", "jaels", "jaelt", "jaelp", "jaelh", "jaem", "jaeb", "jaebs", "jaes", "jaess", "jaeng", "jaej", "jaec", "jaek", "jaet", "jaep", "jaeh", "jya", "jyag", "jyagg", "jyags", "jyan", "jyanj", "jyanh", "jyad", "jyal", "jyalg", "jyalm", "jyalb", "jyals", "jyalt", "jyalp", "jyalh", "jyam", "jyab", "jyabs", "jyas", "jyass", "jyang", "jyaj", "jyac", "jyak", "jyat", "jyap", "jyah", "jyae", "jyaeg", "jyaegg", "jyaegs", "jyaen", "jyaenj", "jyaenh", "jyaed", "jyael", "jyaelg", "jyaelm", "jyaelb", "jyaels", "jyaelt", "jyaelp", "jyaelh", "jyaem", "jyaeb", "jyaebs", "jyaes", "jyaess", "jyaeng", "jyaej", "jyaec", "jyaek", "jyaet", "jyaep", "jyaeh"];
const sJ = Object.freeze(tJ);
const hJ = ["jeo", "jeog", "jeogg", "jeogs", "jeon", "jeonj", "jeonh", "jeod", "jeol", "jeolg", "jeolm", "jeolb", "jeols", "jeolt", "jeolp", "jeolh", "jeom", "jeob", "jeobs", "jeos", "jeoss", "jeong", "jeoj", "jeoc", "jeok", "jeot", "jeop", "jeoh", "je", "jeg", "jegg", "jegs", "jen", "jenj", "jenh", "jed", "jel", "jelg", "jelm", "jelb", "jels", "jelt", "jelp", "jelh", "jem", "jeb", "jebs", "jes", "jess", "jeng", "jej", "jec", "jek", "jet", "jep", "jeh", "jyeo", "jyeog", "jyeogg", "jyeogs", "jyeon", "jyeonj", "jyeonh", "jyeod", "jyeol", "jyeolg", "jyeolm", "jyeolb", "jyeols", "jyeolt", "jyeolp", "jyeolh", "jyeom", "jyeob", "jyeobs", "jyeos", "jyeoss", "jyeong", "jyeoj", "jyeoc", "jyeok", "jyeot", "jyeop", "jyeoh", "jye", "jyeg", "jyegg", "jyegs", "jyen", "jyenj", "jyenh", "jyed", "jyel", "jyelg", "jyelm", "jyelb", "jyels", "jyelt", "jyelp", "jyelh", "jyem", "jyeb", "jyebs", "jyes", "jyess", "jyeng", "jyej", "jyec", "jyek", "jyet", "jyep", "jyeh", "jo", "jog", "jogg", "jogs", "jon", "jonj", "jonh", "jod", "jol", "jolg", "jolm", "jolb", "jols", "jolt", "jolp", "jolh", "jom", "job", "jobs", "jos", "joss", "jong", "joj", "joc", "jok", "jot", "jop", "joh", "jwa", "jwag", "jwagg", "jwags", "jwan", "jwanj", "jwanh", "jwad", "jwal", "jwalg", "jwalm", "jwalb", "jwals", "jwalt", "jwalp", "jwalh", "jwam", "jwab", "jwabs", "jwas", "jwass", "jwang", "jwaj", "jwac", "jwak", "jwat", "jwap", "jwah", "jwae", "jwaeg", "jwaegg", "jwaegs", "jwaen", "jwaenj", "jwaenh", "jwaed", "jwael", "jwaelg", "jwaelm", "jwaelb", "jwaels", "jwaelt", "jwaelp", "jwaelh", "jwaem", "jwaeb", "jwaebs", "jwaes", "jwaess", "jwaeng", "jwaej", "jwaec", "jwaek", "jwaet", "jwaep", "jwaeh", "joe", "joeg", "joegg", "joegs", "joen", "joenj", "joenh", "joed", "joel", "joelg", "joelm", "joelb", "joels", "joelt", "joelp", "joelh", "joem", "joeb", "joebs", "joes", "joess", "joeng", "joej", "joec", "joek", "joet", "joep", "joeh", "jyo", "jyog", "jyogg", "jyogs", "jyon", "jyonj", "jyonh", "jyod", "jyol", "jyolg", "jyolm", "jyolb", "jyols", "jyolt", "jyolp", "jyolh", "jyom", "jyob", "jyobs", "jyos", "jyoss", "jyong", "jyoj", "jyoc", "jyok", "jyot", "jyop", "jyoh", "ju", "jug", "jugg", "jugs"];
const rJ = Object.freeze(hJ);
const lJ = ["jun", "junj", "junh", "jud", "jul", "julg", "julm", "julb", "juls", "jult", "julp", "julh", "jum", "jub", "jubs", "jus", "juss", "jung", "juj", "juc", "juk", "jut", "jup", "juh", "jweo", "jweog", "jweogg", "jweogs", "jweon", "jweonj", "jweonh", "jweod", "jweol", "jweolg", "jweolm", "jweolb", "jweols", "jweolt", "jweolp", "jweolh", "jweom", "jweob", "jweobs", "jweos", "jweoss", "jweong", "jweoj", "jweoc", "jweok", "jweot", "jweop", "jweoh", "jwe", "jweg", "jwegg", "jwegs", "jwen", "jwenj", "jwenh", "jwed", "jwel", "jwelg", "jwelm", "jwelb", "jwels", "jwelt", "jwelp", "jwelh", "jwem", "jweb", "jwebs", "jwes", "jwess", "jweng", "jwej", "jwec", "jwek", "jwet", "jwep", "jweh", "jwi", "jwig", "jwigg", "jwigs", "jwin", "jwinj", "jwinh", "jwid", "jwil", "jwilg", "jwilm", "jwilb", "jwils", "jwilt", "jwilp", "jwilh", "jwim", "jwib", "jwibs", "jwis", "jwiss", "jwing", "jwij", "jwic", "jwik", "jwit", "jwip", "jwih", "jyu", "jyug", "jyugg", "jyugs", "jyun", "jyunj", "jyunh", "jyud", "jyul", "jyulg", "jyulm", "jyulb", "jyuls", "jyult", "jyulp", "jyulh", "jyum", "jyub", "jyubs", "jyus", "jyuss", "jyung", "jyuj", "jyuc", "jyuk", "jyut", "jyup", "jyuh", "jeu", "jeug", "jeugg", "jeugs", "jeun", "jeunj", "jeunh", "jeud", "jeul", "jeulg", "jeulm", "jeulb", "jeuls", "jeult", "jeulp", "jeulh", "jeum", "jeub", "jeubs", "jeus", "jeuss", "jeung", "jeuj", "jeuc", "jeuk", "jeut", "jeup", "jeuh", "jyi", "jyig", "jyigg", "jyigs", "jyin", "jyinj", "jyinh", "jyid", "jyil", "jyilg", "jyilm", "jyilb", "jyils", "jyilt", "jyilp", "jyilh", "jyim", "jyib", "jyibs", "jyis", "jyiss", "jying", "jyij", "jyic", "jyik", "jyit", "jyip", "jyih", "ji", "jig", "jigg", "jigs", "jin", "jinj", "jinh", "jid", "jil", "jilg", "jilm", "jilb", "jils", "jilt", "jilp", "jilh", "jim", "jib", "jibs", "jis", "jiss", "jing", "jij", "jic", "jik", "jit", "jip", "jih", "jja", "jjag", "jjagg", "jjags", "jjan", "jjanj", "jjanh", "jjad", "jjal", "jjalg", "jjalm", "jjalb", "jjals", "jjalt", "jjalp", "jjalh", "jjam", "jjab", "jjabs", "jjas", "jjass", "jjang", "jjaj", "jjac", "jjak", "jjat", "jjap", "jjah", "jjae", "jjaeg", "jjaegg", "jjaegs", "jjaen", "jjaenj", "jjaenh", "jjaed"];
const vJ = Object.freeze(lJ);
const yJ = ["jjael", "jjaelg", "jjaelm", "jjaelb", "jjaels", "jjaelt", "jjaelp", "jjaelh", "jjaem", "jjaeb", "jjaebs", "jjaes", "jjaess", "jjaeng", "jjaej", "jjaec", "jjaek", "jjaet", "jjaep", "jjaeh", "jjya", "jjyag", "jjyagg", "jjyags", "jjyan", "jjyanj", "jjyanh", "jjyad", "jjyal", "jjyalg", "jjyalm", "jjyalb", "jjyals", "jjyalt", "jjyalp", "jjyalh", "jjyam", "jjyab", "jjyabs", "jjyas", "jjyass", "jjyang", "jjyaj", "jjyac", "jjyak", "jjyat", "jjyap", "jjyah", "jjyae", "jjyaeg", "jjyaegg", "jjyaegs", "jjyaen", "jjyaenj", "jjyaenh", "jjyaed", "jjyael", "jjyaelg", "jjyaelm", "jjyaelb", "jjyaels", "jjyaelt", "jjyaelp", "jjyaelh", "jjyaem", "jjyaeb", "jjyaebs", "jjyaes", "jjyaess", "jjyaeng", "jjyaej", "jjyaec", "jjyaek", "jjyaet", "jjyaep", "jjyaeh", "jjeo", "jjeog", "jjeogg", "jjeogs", "jjeon", "jjeonj", "jjeonh", "jjeod", "jjeol", "jjeolg", "jjeolm", "jjeolb", "jjeols", "jjeolt", "jjeolp", "jjeolh", "jjeom", "jjeob", "jjeobs", "jjeos", "jjeoss", "jjeong", "jjeoj", "jjeoc", "jjeok", "jjeot", "jjeop", "jjeoh", "jje", "jjeg", "jjegg", "jjegs", "jjen", "jjenj", "jjenh", "jjed", "jjel", "jjelg", "jjelm", "jjelb", "jjels", "jjelt", "jjelp", "jjelh", "jjem", "jjeb", "jjebs", "jjes", "jjess", "jjeng", "jjej", "jjec", "jjek", "jjet", "jjep", "jjeh", "jjyeo", "jjyeog", "jjyeogg", "jjyeogs", "jjyeon", "jjyeonj", "jjyeonh", "jjyeod", "jjyeol", "jjyeolg", "jjyeolm", "jjyeolb", "jjyeols", "jjyeolt", "jjyeolp", "jjyeolh", "jjyeom", "jjyeob", "jjyeobs", "jjyeos", "jjyeoss", "jjyeong", "jjyeoj", "jjyeoc", "jjyeok", "jjyeot", "jjyeop", "jjyeoh", "jjye", "jjyeg", "jjyegg", "jjyegs", "jjyen", "jjyenj", "jjyenh", "jjyed", "jjyel", "jjyelg", "jjyelm", "jjyelb", "jjyels", "jjyelt", "jjyelp", "jjyelh", "jjyem", "jjyeb", "jjyebs", "jjyes", "jjyess", "jjyeng", "jjyej", "jjyec", "jjyek", "jjyet", "jjyep", "jjyeh", "jjo", "jjog", "jjogg", "jjogs", "jjon", "jjonj", "jjonh", "jjod", "jjol", "jjolg", "jjolm", "jjolb", "jjols", "jjolt", "jjolp", "jjolh", "jjom", "jjob", "jjobs", "jjos", "jjoss", "jjong", "jjoj", "jjoc", "jjok", "jjot", "jjop", "jjoh", "jjwa", "jjwag", "jjwagg", "jjwags", "jjwan", "jjwanj", "jjwanh", "jjwad", "jjwal", "jjwalg", "jjwalm", "jjwalb", "jjwals", "jjwalt", "jjwalp", "jjwalh", "jjwam", "jjwab", "jjwabs", "jjwas", "jjwass", "jjwang", "jjwaj", "jjwac", "jjwak", "jjwat", "jjwap", "jjwah", "jjwae", "jjwaeg", "jjwaegg", "jjwaegs", "jjwaen", "jjwaenj", "jjwaenh", "jjwaed", "jjwael", "jjwaelg", "jjwaelm", "jjwaelb"];
const cJ = Object.freeze(yJ);
const bJ = ["jjwaels", "jjwaelt", "jjwaelp", "jjwaelh", "jjwaem", "jjwaeb", "jjwaebs", "jjwaes", "jjwaess", "jjwaeng", "jjwaej", "jjwaec", "jjwaek", "jjwaet", "jjwaep", "jjwaeh", "jjoe", "jjoeg", "jjoegg", "jjoegs", "jjoen", "jjoenj", "jjoenh", "jjoed", "jjoel", "jjoelg", "jjoelm", "jjoelb", "jjoels", "jjoelt", "jjoelp", "jjoelh", "jjoem", "jjoeb", "jjoebs", "jjoes", "jjoess", "jjoeng", "jjoej", "jjoec", "jjoek", "jjoet", "jjoep", "jjoeh", "jjyo", "jjyog", "jjyogg", "jjyogs", "jjyon", "jjyonj", "jjyonh", "jjyod", "jjyol", "jjyolg", "jjyolm", "jjyolb", "jjyols", "jjyolt", "jjyolp", "jjyolh", "jjyom", "jjyob", "jjyobs", "jjyos", "jjyoss", "jjyong", "jjyoj", "jjyoc", "jjyok", "jjyot", "jjyop", "jjyoh", "jju", "jjug", "jjugg", "jjugs", "jjun", "jjunj", "jjunh", "jjud", "jjul", "jjulg", "jjulm", "jjulb", "jjuls", "jjult", "jjulp", "jjulh", "jjum", "jjub", "jjubs", "jjus", "jjuss", "jjung", "jjuj", "jjuc", "jjuk", "jjut", "jjup", "jjuh", "jjweo", "jjweog", "jjweogg", "jjweogs", "jjweon", "jjweonj", "jjweonh", "jjweod", "jjweol", "jjweolg", "jjweolm", "jjweolb", "jjweols", "jjweolt", "jjweolp", "jjweolh", "jjweom", "jjweob", "jjweobs", "jjweos", "jjweoss", "jjweong", "jjweoj", "jjweoc", "jjweok", "jjweot", "jjweop", "jjweoh", "jjwe", "jjweg", "jjwegg", "jjwegs", "jjwen", "jjwenj", "jjwenh", "jjwed", "jjwel", "jjwelg", "jjwelm", "jjwelb", "jjwels", "jjwelt", "jjwelp", "jjwelh", "jjwem", "jjweb", "jjwebs", "jjwes", "jjwess", "jjweng", "jjwej", "jjwec", "jjwek", "jjwet", "jjwep", "jjweh", "jjwi", "jjwig", "jjwigg", "jjwigs", "jjwin", "jjwinj", "jjwinh", "jjwid", "jjwil", "jjwilg", "jjwilm", "jjwilb", "jjwils", "jjwilt", "jjwilp", "jjwilh", "jjwim", "jjwib", "jjwibs", "jjwis", "jjwiss", "jjwing", "jjwij", "jjwic", "jjwik", "jjwit", "jjwip", "jjwih", "jjyu", "jjyug", "jjyugg", "jjyugs", "jjyun", "jjyunj", "jjyunh", "jjyud", "jjyul", "jjyulg", "jjyulm", "jjyulb", "jjyuls", "jjyult", "jjyulp", "jjyulh", "jjyum", "jjyub", "jjyubs", "jjyus", "jjyuss", "jjyung", "jjyuj", "jjyuc", "jjyuk", "jjyut", "jjyup", "jjyuh", "jjeu", "jjeug", "jjeugg", "jjeugs", "jjeun", "jjeunj", "jjeunh", "jjeud", "jjeul", "jjeulg", "jjeulm", "jjeulb", "jjeuls", "jjeult", "jjeulp", "jjeulh", "jjeum", "jjeub", "jjeubs", "jjeus", "jjeuss", "jjeung", "jjeuj", "jjeuc", "jjeuk", "jjeut", "jjeup", "jjeuh", "jjyi", "jjyig", "jjyigg", "jjyigs", "jjyin", "jjyinj", "jjyinh", "jjyid", "jjyil", "jjyilg", "jjyilm", "jjyilb", "jjyils", "jjyilt", "jjyilp", "jjyilh"];
const pJ = Object.freeze(bJ);
const wJ = ["jjyim", "jjyib", "jjyibs", "jjyis", "jjyiss", "jjying", "jjyij", "jjyic", "jjyik", "jjyit", "jjyip", "jjyih", "jji", "jjig", "jjigg", "jjigs", "jjin", "jjinj", "jjinh", "jjid", "jjil", "jjilg", "jjilm", "jjilb", "jjils", "jjilt", "jjilp", "jjilh", "jjim", "jjib", "jjibs", "jjis", "jjiss", "jjing", "jjij", "jjic", "jjik", "jjit", "jjip", "jjih", "ca", "cag", "cagg", "cags", "can", "canj", "canh", "cad", "cal", "calg", "calm", "calb", "cals", "calt", "calp", "calh", "cam", "cab", "cabs", "cas", "cass", "cang", "caj", "cac", "cak", "cat", "cap", "cah", "cae", "caeg", "caegg", "caegs", "caen", "caenj", "caenh", "caed", "cael", "caelg", "caelm", "caelb", "caels", "caelt", "caelp", "caelh", "caem", "caeb", "caebs", "caes", "caess", "caeng", "caej", "caec", "caek", "caet", "caep", "caeh", "cya", "cyag", "cyagg", "cyags", "cyan", "cyanj", "cyanh", "cyad", "cyal", "cyalg", "cyalm", "cyalb", "cyals", "cyalt", "cyalp", "cyalh", "cyam", "cyab", "cyabs", "cyas", "cyass", "cyang", "cyaj", "cyac", "cyak", "cyat", "cyap", "cyah", "cyae", "cyaeg", "cyaegg", "cyaegs", "cyaen", "cyaenj", "cyaenh", "cyaed", "cyael", "cyaelg", "cyaelm", "cyaelb", "cyaels", "cyaelt", "cyaelp", "cyaelh", "cyaem", "cyaeb", "cyaebs", "cyaes", "cyaess", "cyaeng", "cyaej", "cyaec", "cyaek", "cyaet", "cyaep", "cyaeh", "ceo", "ceog", "ceogg", "ceogs", "ceon", "ceonj", "ceonh", "ceod", "ceol", "ceolg", "ceolm", "ceolb", "ceols", "ceolt", "ceolp", "ceolh", "ceom", "ceob", "ceobs", "ceos", "ceoss", "ceong", "ceoj", "ceoc", "ceok", "ceot", "ceop", "ceoh", "ce", "ceg", "cegg", "cegs", "cen", "cenj", "cenh", "ced", "cel", "celg", "celm", "celb", "cels", "celt", "celp", "celh", "cem", "ceb", "cebs", "ces", "cess", "ceng", "cej", "cec", "cek", "cet", "cep", "ceh", "cyeo", "cyeog", "cyeogg", "cyeogs", "cyeon", "cyeonj", "cyeonh", "cyeod", "cyeol", "cyeolg", "cyeolm", "cyeolb", "cyeols", "cyeolt", "cyeolp", "cyeolh", "cyeom", "cyeob", "cyeobs", "cyeos", "cyeoss", "cyeong", "cyeoj", "cyeoc", "cyeok", "cyeot", "cyeop", "cyeoh", "cye", "cyeg", "cyegg", "cyegs", "cyen", "cyenj", "cyenh", "cyed", "cyel", "cyelg", "cyelm", "cyelb", "cyels", "cyelt", "cyelp", "cyelh", "cyem", "cyeb", "cyebs", "cyes"];
const jJ = Object.freeze(wJ);
const mJ = ["cyess", "cyeng", "cyej", "cyec", "cyek", "cyet", "cyep", "cyeh", "co", "cog", "cogg", "cogs", "con", "conj", "conh", "cod", "col", "colg", "colm", "colb", "cols", "colt", "colp", "colh", "com", "cob", "cobs", "cos", "coss", "cong", "coj", "coc", "cok", "cot", "cop", "coh", "cwa", "cwag", "cwagg", "cwags", "cwan", "cwanj", "cwanh", "cwad", "cwal", "cwalg", "cwalm", "cwalb", "cwals", "cwalt", "cwalp", "cwalh", "cwam", "cwab", "cwabs", "cwas", "cwass", "cwang", "cwaj", "cwac", "cwak", "cwat", "cwap", "cwah", "cwae", "cwaeg", "cwaegg", "cwaegs", "cwaen", "cwaenj", "cwaenh", "cwaed", "cwael", "cwaelg", "cwaelm", "cwaelb", "cwaels", "cwaelt", "cwaelp", "cwaelh", "cwaem", "cwaeb", "cwaebs", "cwaes", "cwaess", "cwaeng", "cwaej", "cwaec", "cwaek", "cwaet", "cwaep", "cwaeh", "coe", "coeg", "coegg", "coegs", "coen", "coenj", "coenh", "coed", "coel", "coelg", "coelm", "coelb", "coels", "coelt", "coelp", "coelh", "coem", "coeb", "coebs", "coes", "coess", "coeng", "coej", "coec", "coek", "coet", "coep", "coeh", "cyo", "cyog", "cyogg", "cyogs", "cyon", "cyonj", "cyonh", "cyod", "cyol", "cyolg", "cyolm", "cyolb", "cyols", "cyolt", "cyolp", "cyolh", "cyom", "cyob", "cyobs", "cyos", "cyoss", "cyong", "cyoj", "cyoc", "cyok", "cyot", "cyop", "cyoh", "cu", "cug", "cugg", "cugs", "cun", "cunj", "cunh", "cud", "cul", "culg", "culm", "culb", "culs", "cult", "culp", "culh", "cum", "cub", "cubs", "cus", "cuss", "cung", "cuj", "cuc", "cuk", "cut", "cup", "cuh", "cweo", "cweog", "cweogg", "cweogs", "cweon", "cweonj", "cweonh", "cweod", "cweol", "cweolg", "cweolm", "cweolb", "cweols", "cweolt", "cweolp", "cweolh", "cweom", "cweob", "cweobs", "cweos", "cweoss", "cweong", "cweoj", "cweoc", "cweok", "cweot", "cweop", "cweoh", "cwe", "cweg", "cwegg", "cwegs", "cwen", "cwenj", "cwenh", "cwed", "cwel", "cwelg", "cwelm", "cwelb", "cwels", "cwelt", "cwelp", "cwelh", "cwem", "cweb", "cwebs", "cwes", "cwess", "cweng", "cwej", "cwec", "cwek", "cwet", "cwep", "cweh", "cwi", "cwig", "cwigg", "cwigs", "cwin", "cwinj", "cwinh", "cwid", "cwil", "cwilg", "cwilm", "cwilb", "cwils", "cwilt", "cwilp", "cwilh", "cwim", "cwib", "cwibs", "cwis", "cwiss", "cwing", "cwij", "cwic"];
const fJ = Object.freeze(mJ);
const YJ = ["cwik", "cwit", "cwip", "cwih", "cyu", "cyug", "cyugg", "cyugs", "cyun", "cyunj", "cyunh", "cyud", "cyul", "cyulg", "cyulm", "cyulb", "cyuls", "cyult", "cyulp", "cyulh", "cyum", "cyub", "cyubs", "cyus", "cyuss", "cyung", "cyuj", "cyuc", "cyuk", "cyut", "cyup", "cyuh", "ceu", "ceug", "ceugg", "ceugs", "ceun", "ceunj", "ceunh", "ceud", "ceul", "ceulg", "ceulm", "ceulb", "ceuls", "ceult", "ceulp", "ceulh", "ceum", "ceub", "ceubs", "ceus", "ceuss", "ceung", "ceuj", "ceuc", "ceuk", "ceut", "ceup", "ceuh", "cyi", "cyig", "cyigg", "cyigs", "cyin", "cyinj", "cyinh", "cyid", "cyil", "cyilg", "cyilm", "cyilb", "cyils", "cyilt", "cyilp", "cyilh", "cyim", "cyib", "cyibs", "cyis", "cyiss", "cying", "cyij", "cyic", "cyik", "cyit", "cyip", "cyih", "ci", "cig", "cigg", "cigs", "cin", "cinj", "cinh", "cid", "cil", "cilg", "cilm", "cilb", "cils", "cilt", "cilp", "cilh", "cim", "cib", "cibs", "cis", "ciss", "cing", "cij", "cic", "cik", "cit", "cip", "cih", "ka", "kag", "kagg", "kags", "kan", "kanj", "kanh", "kad", "kal", "kalg", "kalm", "kalb", "kals", "kalt", "kalp", "kalh", "kam", "kab", "kabs", "kas", "kass", "kang", "kaj", "kac", "kak", "kat", "kap", "kah", "kae", "kaeg", "kaegg", "kaegs", "kaen", "kaenj", "kaenh", "kaed", "kael", "kaelg", "kaelm", "kaelb", "kaels", "kaelt", "kaelp", "kaelh", "kaem", "kaeb", "kaebs", "kaes", "kaess", "kaeng", "kaej", "kaec", "kaek", "kaet", "kaep", "kaeh", "kya", "kyag", "kyagg", "kyags", "kyan", "kyanj", "kyanh", "kyad", "kyal", "kyalg", "kyalm", "kyalb", "kyals", "kyalt", "kyalp", "kyalh", "kyam", "kyab", "kyabs", "kyas", "kyass", "kyang", "kyaj", "kyac", "kyak", "kyat", "kyap", "kyah", "kyae", "kyaeg", "kyaegg", "kyaegs", "kyaen", "kyaenj", "kyaenh", "kyaed", "kyael", "kyaelg", "kyaelm", "kyaelb", "kyaels", "kyaelt", "kyaelp", "kyaelh", "kyaem", "kyaeb", "kyaebs", "kyaes", "kyaess", "kyaeng", "kyaej", "kyaec", "kyaek", "kyaet", "kyaep", "kyaeh", "keo", "keog", "keogg", "keogs", "keon", "keonj", "keonh", "keod", "keol", "keolg", "keolm", "keolb", "keols", "keolt", "keolp", "keolh", "keom", "keob", "keobs", "keos", "keoss", "keong", "keoj", "keoc", "keok", "keot", "keop", "keoh"];
const kJ = Object.freeze(YJ);
const LJ = ["ke", "keg", "kegg", "kegs", "ken", "kenj", "kenh", "ked", "kel", "kelg", "kelm", "kelb", "kels", "kelt", "kelp", "kelh", "kem", "keb", "kebs", "kes", "kess", "keng", "kej", "kec", "kek", "ket", "kep", "keh", "kyeo", "kyeog", "kyeogg", "kyeogs", "kyeon", "kyeonj", "kyeonh", "kyeod", "kyeol", "kyeolg", "kyeolm", "kyeolb", "kyeols", "kyeolt", "kyeolp", "kyeolh", "kyeom", "kyeob", "kyeobs", "kyeos", "kyeoss", "kyeong", "kyeoj", "kyeoc", "kyeok", "kyeot", "kyeop", "kyeoh", "kye", "kyeg", "kyegg", "kyegs", "kyen", "kyenj", "kyenh", "kyed", "kyel", "kyelg", "kyelm", "kyelb", "kyels", "kyelt", "kyelp", "kyelh", "kyem", "kyeb", "kyebs", "kyes", "kyess", "kyeng", "kyej", "kyec", "kyek", "kyet", "kyep", "kyeh", "ko", "kog", "kogg", "kogs", "kon", "konj", "konh", "kod", "kol", "kolg", "kolm", "kolb", "kols", "kolt", "kolp", "kolh", "kom", "kob", "kobs", "kos", "koss", "kong", "koj", "koc", "kok", "kot", "kop", "koh", "kwa", "kwag", "kwagg", "kwags", "kwan", "kwanj", "kwanh", "kwad", "kwal", "kwalg", "kwalm", "kwalb", "kwals", "kwalt", "kwalp", "kwalh", "kwam", "kwab", "kwabs", "kwas", "kwass", "kwang", "kwaj", "kwac", "kwak", "kwat", "kwap", "kwah", "kwae", "kwaeg", "kwaegg", "kwaegs", "kwaen", "kwaenj", "kwaenh", "kwaed", "kwael", "kwaelg", "kwaelm", "kwaelb", "kwaels", "kwaelt", "kwaelp", "kwaelh", "kwaem", "kwaeb", "kwaebs", "kwaes", "kwaess", "kwaeng", "kwaej", "kwaec", "kwaek", "kwaet", "kwaep", "kwaeh", "koe", "koeg", "koegg", "koegs", "koen", "koenj", "koenh", "koed", "koel", "koelg", "koelm", "koelb", "koels", "koelt", "koelp", "koelh", "koem", "koeb", "koebs", "koes", "koess", "koeng", "koej", "koec", "koek", "koet", "koep", "koeh", "kyo", "kyog", "kyogg", "kyogs", "kyon", "kyonj", "kyonh", "kyod", "kyol", "kyolg", "kyolm", "kyolb", "kyols", "kyolt", "kyolp", "kyolh", "kyom", "kyob", "kyobs", "kyos", "kyoss", "kyong", "kyoj", "kyoc", "kyok", "kyot", "kyop", "kyoh", "ku", "kug", "kugg", "kugs", "kun", "kunj", "kunh", "kud", "kul", "kulg", "kulm", "kulb", "kuls", "kult", "kulp", "kulh", "kum", "kub", "kubs", "kus", "kuss", "kung", "kuj", "kuc", "kuk", "kut", "kup", "kuh", "kweo", "kweog", "kweogg", "kweogs"];
const ZJ = Object.freeze(LJ);
const SJ = ["kweon", "kweonj", "kweonh", "kweod", "kweol", "kweolg", "kweolm", "kweolb", "kweols", "kweolt", "kweolp", "kweolh", "kweom", "kweob", "kweobs", "kweos", "kweoss", "kweong", "kweoj", "kweoc", "kweok", "kweot", "kweop", "kweoh", "kwe", "kweg", "kwegg", "kwegs", "kwen", "kwenj", "kwenh", "kwed", "kwel", "kwelg", "kwelm", "kwelb", "kwels", "kwelt", "kwelp", "kwelh", "kwem", "kweb", "kwebs", "kwes", "kwess", "kweng", "kwej", "kwec", "kwek", "kwet", "kwep", "kweh", "kwi", "kwig", "kwigg", "kwigs", "kwin", "kwinj", "kwinh", "kwid", "kwil", "kwilg", "kwilm", "kwilb", "kwils", "kwilt", "kwilp", "kwilh", "kwim", "kwib", "kwibs", "kwis", "kwiss", "kwing", "kwij", "kwic", "kwik", "kwit", "kwip", "kwih", "kyu", "kyug", "kyugg", "kyugs", "kyun", "kyunj", "kyunh", "kyud", "kyul", "kyulg", "kyulm", "kyulb", "kyuls", "kyult", "kyulp", "kyulh", "kyum", "kyub", "kyubs", "kyus", "kyuss", "kyung", "kyuj", "kyuc", "kyuk", "kyut", "kyup", "kyuh", "keu", "keug", "keugg", "keugs", "keun", "keunj", "keunh", "keud", "keul", "keulg", "keulm", "keulb", "keuls", "keult", "keulp", "keulh", "keum", "keub", "keubs", "keus", "keuss", "keung", "keuj", "keuc", "keuk", "keut", "keup", "keuh", "kyi", "kyig", "kyigg", "kyigs", "kyin", "kyinj", "kyinh", "kyid", "kyil", "kyilg", "kyilm", "kyilb", "kyils", "kyilt", "kyilp", "kyilh", "kyim", "kyib", "kyibs", "kyis", "kyiss", "kying", "kyij", "kyic", "kyik", "kyit", "kyip", "kyih", "ki", "kig", "kigg", "kigs", "kin", "kinj", "kinh", "kid", "kil", "kilg", "kilm", "kilb", "kils", "kilt", "kilp", "kilh", "kim", "kib", "kibs", "kis", "kiss", "king", "kij", "kic", "kik", "kit", "kip", "kih", "ta", "tag", "tagg", "tags", "tan", "tanj", "tanh", "tad", "tal", "talg", "talm", "talb", "tals", "talt", "talp", "talh", "tam", "tab", "tabs", "tas", "tass", "tang", "taj", "tac", "tak", "tat", "tap", "tah", "tae", "taeg", "taegg", "taegs", "taen", "taenj", "taenh", "taed", "tael", "taelg", "taelm", "taelb", "taels", "taelt", "taelp", "taelh", "taem", "taeb", "taebs", "taes", "taess", "taeng", "taej", "taec", "taek", "taet", "taep", "taeh", "tya", "tyag", "tyagg", "tyags", "tyan", "tyanj", "tyanh", "tyad"];
const JJ = Object.freeze(SJ);
const CJ = ["tyal", "tyalg", "tyalm", "tyalb", "tyals", "tyalt", "tyalp", "tyalh", "tyam", "tyab", "tyabs", "tyas", "tyass", "tyang", "tyaj", "tyac", "tyak", "tyat", "tyap", "tyah", "tyae", "tyaeg", "tyaegg", "tyaegs", "tyaen", "tyaenj", "tyaenh", "tyaed", "tyael", "tyaelg", "tyaelm", "tyaelb", "tyaels", "tyaelt", "tyaelp", "tyaelh", "tyaem", "tyaeb", "tyaebs", "tyaes", "tyaess", "tyaeng", "tyaej", "tyaec", "tyaek", "tyaet", "tyaep", "tyaeh", "teo", "teog", "teogg", "teogs", "teon", "teonj", "teonh", "teod", "teol", "teolg", "teolm", "teolb", "teols", "teolt", "teolp", "teolh", "teom", "teob", "teobs", "teos", "teoss", "teong", "teoj", "teoc", "teok", "teot", "teop", "teoh", "te", "teg", "tegg", "tegs", "ten", "tenj", "tenh", "ted", "tel", "telg", "telm", "telb", "tels", "telt", "telp", "telh", "tem", "teb", "tebs", "tes", "tess", "teng", "tej", "tec", "tek", "tet", "tep", "teh", "tyeo", "tyeog", "tyeogg", "tyeogs", "tyeon", "tyeonj", "tyeonh", "tyeod", "tyeol", "tyeolg", "tyeolm", "tyeolb", "tyeols", "tyeolt", "tyeolp", "tyeolh", "tyeom", "tyeob", "tyeobs", "tyeos", "tyeoss", "tyeong", "tyeoj", "tyeoc", "tyeok", "tyeot", "tyeop", "tyeoh", "tye", "tyeg", "tyegg", "tyegs", "tyen", "tyenj", "tyenh", "tyed", "tyel", "tyelg", "tyelm", "tyelb", "tyels", "tyelt", "tyelp", "tyelh", "tyem", "tyeb", "tyebs", "tyes", "tyess", "tyeng", "tyej", "tyec", "tyek", "tyet", "tyep", "tyeh", "to", "tog", "togg", "togs", "ton", "tonj", "tonh", "tod", "tol", "tolg", "tolm", "tolb", "tols", "tolt", "tolp", "tolh", "tom", "tob", "tobs", "tos", "toss", "tong", "toj", "toc", "tok", "tot", "top", "toh", "twa", "twag", "twagg", "twags", "twan", "twanj", "twanh", "twad", "twal", "twalg", "twalm", "twalb", "twals", "twalt", "twalp", "twalh", "twam", "twab", "twabs", "twas", "twass", "twang", "twaj", "twac", "twak", "twat", "twap", "twah", "twae", "twaeg", "twaegg", "twaegs", "twaen", "twaenj", "twaenh", "twaed", "twael", "twaelg", "twaelm", "twaelb", "twaels", "twaelt", "twaelp", "twaelh", "twaem", "twaeb", "twaebs", "twaes", "twaess", "twaeng", "twaej", "twaec", "twaek", "twaet", "twaep", "twaeh", "toe", "toeg", "toegg", "toegs", "toen", "toenj", "toenh", "toed", "toel", "toelg", "toelm", "toelb"];
const XJ = Object.freeze(CJ);
const HJ = ["toels", "toelt", "toelp", "toelh", "toem", "toeb", "toebs", "toes", "toess", "toeng", "toej", "toec", "toek", "toet", "toep", "toeh", "tyo", "tyog", "tyogg", "tyogs", "tyon", "tyonj", "tyonh", "tyod", "tyol", "tyolg", "tyolm", "tyolb", "tyols", "tyolt", "tyolp", "tyolh", "tyom", "tyob", "tyobs", "tyos", "tyoss", "tyong", "tyoj", "tyoc", "tyok", "tyot", "tyop", "tyoh", "tu", "tug", "tugg", "tugs", "tun", "tunj", "tunh", "tud", "tul", "tulg", "tulm", "tulb", "tuls", "tult", "tulp", "tulh", "tum", "tub", "tubs", "tus", "tuss", "tung", "tuj", "tuc", "tuk", "tut", "tup", "tuh", "tweo", "tweog", "tweogg", "tweogs", "tweon", "tweonj", "tweonh", "tweod", "tweol", "tweolg", "tweolm", "tweolb", "tweols", "tweolt", "tweolp", "tweolh", "tweom", "tweob", "tweobs", "tweos", "tweoss", "tweong", "tweoj", "tweoc", "tweok", "tweot", "tweop", "tweoh", "twe", "tweg", "twegg", "twegs", "twen", "twenj", "twenh", "twed", "twel", "twelg", "twelm", "twelb", "twels", "twelt", "twelp", "twelh", "twem", "tweb", "twebs", "twes", "twess", "tweng", "twej", "twec", "twek", "twet", "twep", "tweh", "twi", "twig", "twigg", "twigs", "twin", "twinj", "twinh", "twid", "twil", "twilg", "twilm", "twilb", "twils", "twilt", "twilp", "twilh", "twim", "twib", "twibs", "twis", "twiss", "twing", "twij", "twic", "twik", "twit", "twip", "twih", "tyu", "tyug", "tyugg", "tyugs", "tyun", "tyunj", "tyunh", "tyud", "tyul", "tyulg", "tyulm", "tyulb", "tyuls", "tyult", "tyulp", "tyulh", "tyum", "tyub", "tyubs", "tyus", "tyuss", "tyung", "tyuj", "tyuc", "tyuk", "tyut", "tyup", "tyuh", "teu", "teug", "teugg", "teugs", "teun", "teunj", "teunh", "teud", "teul", "teulg", "teulm", "teulb", "teuls", "teult", "teulp", "teulh", "teum", "teub", "teubs", "teus", "teuss", "teung", "teuj", "teuc", "teuk", "teut", "teup", "teuh", "tyi", "tyig", "tyigg", "tyigs", "tyin", "tyinj", "tyinh", "tyid", "tyil", "tyilg", "tyilm", "tyilb", "tyils", "tyilt", "tyilp", "tyilh", "tyim", "tyib", "tyibs", "tyis", "tyiss", "tying", "tyij", "tyic", "tyik", "tyit", "tyip", "tyih", "ti", "tig", "tigg", "tigs", "tin", "tinj", "tinh", "tid", "til", "tilg", "tilm", "tilb", "tils", "tilt", "tilp", "tilh"];
const DJ = Object.freeze(HJ);
const TJ = ["tim", "tib", "tibs", "tis", "tiss", "ting", "tij", "tic", "tik", "tit", "tip", "tih", "pa", "pag", "pagg", "pags", "pan", "panj", "panh", "pad", "pal", "palg", "palm", "palb", "pals", "palt", "palp", "palh", "pam", "pab", "pabs", "pas", "pass", "pang", "paj", "pac", "pak", "pat", "pap", "pah", "pae", "paeg", "paegg", "paegs", "paen", "paenj", "paenh", "paed", "pael", "paelg", "paelm", "paelb", "paels", "paelt", "paelp", "paelh", "paem", "paeb", "paebs", "paes", "paess", "paeng", "paej", "paec", "paek", "paet", "paep", "paeh", "pya", "pyag", "pyagg", "pyags", "pyan", "pyanj", "pyanh", "pyad", "pyal", "pyalg", "pyalm", "pyalb", "pyals", "pyalt", "pyalp", "pyalh", "pyam", "pyab", "pyabs", "pyas", "pyass", "pyang", "pyaj", "pyac", "pyak", "pyat", "pyap", "pyah", "pyae", "pyaeg", "pyaegg", "pyaegs", "pyaen", "pyaenj", "pyaenh", "pyaed", "pyael", "pyaelg", "pyaelm", "pyaelb", "pyaels", "pyaelt", "pyaelp", "pyaelh", "pyaem", "pyaeb", "pyaebs", "pyaes", "pyaess", "pyaeng", "pyaej", "pyaec", "pyaek", "pyaet", "pyaep", "pyaeh", "peo", "peog", "peogg", "peogs", "peon", "peonj", "peonh", "peod", "peol", "peolg", "peolm", "peolb", "peols", "peolt", "peolp", "peolh", "peom", "peob", "peobs", "peos", "peoss", "peong", "peoj", "peoc", "peok", "peot", "peop", "peoh", "pe", "peg", "pegg", "pegs", "pen", "penj", "penh", "ped", "pel", "pelg", "pelm", "pelb", "pels", "pelt", "pelp", "pelh", "pem", "peb", "pebs", "pes", "pess", "peng", "pej", "pec", "pek", "pet", "pep", "peh", "pyeo", "pyeog", "pyeogg", "pyeogs", "pyeon", "pyeonj", "pyeonh", "pyeod", "pyeol", "pyeolg", "pyeolm", "pyeolb", "pyeols", "pyeolt", "pyeolp", "pyeolh", "pyeom", "pyeob", "pyeobs", "pyeos", "pyeoss", "pyeong", "pyeoj", "pyeoc", "pyeok", "pyeot", "pyeop", "pyeoh", "pye", "pyeg", "pyegg", "pyegs", "pyen", "pyenj", "pyenh", "pyed", "pyel", "pyelg", "pyelm", "pyelb", "pyels", "pyelt", "pyelp", "pyelh", "pyem", "pyeb", "pyebs", "pyes", "pyess", "pyeng", "pyej", "pyec", "pyek", "pyet", "pyep", "pyeh", "po", "pog", "pogg", "pogs", "pon", "ponj", "ponh", "pod", "pol", "polg", "polm", "polb", "pols", "polt", "polp", "polh", "pom", "pob", "pobs", "pos"];
const BJ = Object.freeze(TJ);
const QJ = ["poss", "pong", "poj", "poc", "pok", "pot", "pop", "poh", "pwa", "pwag", "pwagg", "pwags", "pwan", "pwanj", "pwanh", "pwad", "pwal", "pwalg", "pwalm", "pwalb", "pwals", "pwalt", "pwalp", "pwalh", "pwam", "pwab", "pwabs", "pwas", "pwass", "pwang", "pwaj", "pwac", "pwak", "pwat", "pwap", "pwah", "pwae", "pwaeg", "pwaegg", "pwaegs", "pwaen", "pwaenj", "pwaenh", "pwaed", "pwael", "pwaelg", "pwaelm", "pwaelb", "pwaels", "pwaelt", "pwaelp", "pwaelh", "pwaem", "pwaeb", "pwaebs", "pwaes", "pwaess", "pwaeng", "pwaej", "pwaec", "pwaek", "pwaet", "pwaep", "pwaeh", "poe", "poeg", "poegg", "poegs", "poen", "poenj", "poenh", "poed", "poel", "poelg", "poelm", "poelb", "poels", "poelt", "poelp", "poelh", "poem", "poeb", "poebs", "poes", "poess", "poeng", "poej", "poec", "poek", "poet", "poep", "poeh", "pyo", "pyog", "pyogg", "pyogs", "pyon", "pyonj", "pyonh", "pyod", "pyol", "pyolg", "pyolm", "pyolb", "pyols", "pyolt", "pyolp", "pyolh", "pyom", "pyob", "pyobs", "pyos", "pyoss", "pyong", "pyoj", "pyoc", "pyok", "pyot", "pyop", "pyoh", "pu", "pug", "pugg", "pugs", "pun", "punj", "punh", "pud", "pul", "pulg", "pulm", "pulb", "puls", "pult", "pulp", "pulh", "pum", "pub", "pubs", "pus", "puss", "pung", "puj", "puc", "puk", "put", "pup", "puh", "pweo", "pweog", "pweogg", "pweogs", "pweon", "pweonj", "pweonh", "pweod", "pweol", "pweolg", "pweolm", "pweolb", "pweols", "pweolt", "pweolp", "pweolh", "pweom", "pweob", "pweobs", "pweos", "pweoss", "pweong", "pweoj", "pweoc", "pweok", "pweot", "pweop", "pweoh", "pwe", "pweg", "pwegg", "pwegs", "pwen", "pwenj", "pwenh", "pwed", "pwel", "pwelg", "pwelm", "pwelb", "pwels", "pwelt", "pwelp", "pwelh", "pwem", "pweb", "pwebs", "pwes", "pwess", "pweng", "pwej", "pwec", "pwek", "pwet", "pwep", "pweh", "pwi", "pwig", "pwigg", "pwigs", "pwin", "pwinj", "pwinh", "pwid", "pwil", "pwilg", "pwilm", "pwilb", "pwils", "pwilt", "pwilp", "pwilh", "pwim", "pwib", "pwibs", "pwis", "pwiss", "pwing", "pwij", "pwic", "pwik", "pwit", "pwip", "pwih", "pyu", "pyug", "pyugg", "pyugs", "pyun", "pyunj", "pyunh", "pyud", "pyul", "pyulg", "pyulm", "pyulb", "pyuls", "pyult", "pyulp", "pyulh", "pyum", "pyub", "pyubs", "pyus", "pyuss", "pyung", "pyuj", "pyuc"];
const MJ = Object.freeze(QJ);
const GJ = ["pyuk", "pyut", "pyup", "pyuh", "peu", "peug", "peugg", "peugs", "peun", "peunj", "peunh", "peud", "peul", "peulg", "peulm", "peulb", "peuls", "peult", "peulp", "peulh", "peum", "peub", "peubs", "peus", "peuss", "peung", "peuj", "peuc", "peuk", "peut", "peup", "peuh", "pyi", "pyig", "pyigg", "pyigs", "pyin", "pyinj", "pyinh", "pyid", "pyil", "pyilg", "pyilm", "pyilb", "pyils", "pyilt", "pyilp", "pyilh", "pyim", "pyib", "pyibs", "pyis", "pyiss", "pying", "pyij", "pyic", "pyik", "pyit", "pyip", "pyih", "pi", "pig", "pigg", "pigs", "pin", "pinj", "pinh", "pid", "pil", "pilg", "pilm", "pilb", "pils", "pilt", "pilp", "pilh", "pim", "pib", "pibs", "pis", "piss", "ping", "pij", "pic", "pik", "pit", "pip", "pih", "ha", "hag", "hagg", "hags", "han", "hanj", "hanh", "had", "hal", "halg", "halm", "halb", "hals", "halt", "halp", "halh", "ham", "hab", "habs", "has", "hass", "hang", "haj", "hac", "hak", "hat", "hap", "hah", "hae", "haeg", "haegg", "haegs", "haen", "haenj", "haenh", "haed", "hael", "haelg", "haelm", "haelb", "haels", "haelt", "haelp", "haelh", "haem", "haeb", "haebs", "haes", "haess", "haeng", "haej", "haec", "haek", "haet", "haep", "haeh", "hya", "hyag", "hyagg", "hyags", "hyan", "hyanj", "hyanh", "hyad", "hyal", "hyalg", "hyalm", "hyalb", "hyals", "hyalt", "hyalp", "hyalh", "hyam", "hyab", "hyabs", "hyas", "hyass", "hyang", "hyaj", "hyac", "hyak", "hyat", "hyap", "hyah", "hyae", "hyaeg", "hyaegg", "hyaegs", "hyaen", "hyaenj", "hyaenh", "hyaed", "hyael", "hyaelg", "hyaelm", "hyaelb", "hyaels", "hyaelt", "hyaelp", "hyaelh", "hyaem", "hyaeb", "hyaebs", "hyaes", "hyaess", "hyaeng", "hyaej", "hyaec", "hyaek", "hyaet", "hyaep", "hyaeh", "heo", "heog", "heogg", "heogs", "heon", "heonj", "heonh", "heod", "heol", "heolg", "heolm", "heolb", "heols", "heolt", "heolp", "heolh", "heom", "heob", "heobs", "heos", "heoss", "heong", "heoj", "heoc", "heok", "heot", "heop", "heoh", "he", "heg", "hegg", "hegs", "hen", "henj", "henh", "hed", "hel", "helg", "helm", "helb", "hels", "helt", "help", "helh", "hem", "heb", "hebs", "hes", "hess", "heng", "hej", "hec", "hek", "het", "hep", "heh"];
const NJ = Object.freeze(GJ);
const xJ = ["hyeo", "hyeog", "hyeogg", "hyeogs", "hyeon", "hyeonj", "hyeonh", "hyeod", "hyeol", "hyeolg", "hyeolm", "hyeolb", "hyeols", "hyeolt", "hyeolp", "hyeolh", "hyeom", "hyeob", "hyeobs", "hyeos", "hyeoss", "hyeong", "hyeoj", "hyeoc", "hyeok", "hyeot", "hyeop", "hyeoh", "hye", "hyeg", "hyegg", "hyegs", "hyen", "hyenj", "hyenh", "hyed", "hyel", "hyelg", "hyelm", "hyelb", "hyels", "hyelt", "hyelp", "hyelh", "hyem", "hyeb", "hyebs", "hyes", "hyess", "hyeng", "hyej", "hyec", "hyek", "hyet", "hyep", "hyeh", "ho", "hog", "hogg", "hogs", "hon", "honj", "honh", "hod", "hol", "holg", "holm", "holb", "hols", "holt", "holp", "holh", "hom", "hob", "hobs", "hos", "hoss", "hong", "hoj", "hoc", "hok", "hot", "hop", "hoh", "hwa", "hwag", "hwagg", "hwags", "hwan", "hwanj", "hwanh", "hwad", "hwal", "hwalg", "hwalm", "hwalb", "hwals", "hwalt", "hwalp", "hwalh", "hwam", "hwab", "hwabs", "hwas", "hwass", "hwang", "hwaj", "hwac", "hwak", "hwat", "hwap", "hwah", "hwae", "hwaeg", "hwaegg", "hwaegs", "hwaen", "hwaenj", "hwaenh", "hwaed", "hwael", "hwaelg", "hwaelm", "hwaelb", "hwaels", "hwaelt", "hwaelp", "hwaelh", "hwaem", "hwaeb", "hwaebs", "hwaes", "hwaess", "hwaeng", "hwaej", "hwaec", "hwaek", "hwaet", "hwaep", "hwaeh", "hoe", "hoeg", "hoegg", "hoegs", "hoen", "hoenj", "hoenh", "hoed", "hoel", "hoelg", "hoelm", "hoelb", "hoels", "hoelt", "hoelp", "hoelh", "hoem", "hoeb", "hoebs", "hoes", "hoess", "hoeng", "hoej", "hoec", "hoek", "hoet", "hoep", "hoeh", "hyo", "hyog", "hyogg", "hyogs", "hyon", "hyonj", "hyonh", "hyod", "hyol", "hyolg", "hyolm", "hyolb", "hyols", "hyolt", "hyolp", "hyolh", "hyom", "hyob", "hyobs", "hyos", "hyoss", "hyong", "hyoj", "hyoc", "hyok", "hyot", "hyop", "hyoh", "hu", "hug", "hugg", "hugs", "hun", "hunj", "hunh", "hud", "hul", "hulg", "hulm", "hulb", "huls", "hult", "hulp", "hulh", "hum", "hub", "hubs", "hus", "huss", "hung", "huj", "huc", "huk", "hut", "hup", "huh", "hweo", "hweog", "hweogg", "hweogs", "hweon", "hweonj", "hweonh", "hweod", "hweol", "hweolg", "hweolm", "hweolb", "hweols", "hweolt", "hweolp", "hweolh", "hweom", "hweob", "hweobs", "hweos", "hweoss", "hweong", "hweoj", "hweoc", "hweok", "hweot", "hweop", "hweoh", "hwe", "hweg", "hwegg", "hwegs"];
const WJ = Object.freeze(xJ);
const PJ = ["hwen", "hwenj", "hwenh", "hwed", "hwel", "hwelg", "hwelm", "hwelb", "hwels", "hwelt", "hwelp", "hwelh", "hwem", "hweb", "hwebs", "hwes", "hwess", "hweng", "hwej", "hwec", "hwek", "hwet", "hwep", "hweh", "hwi", "hwig", "hwigg", "hwigs", "hwin", "hwinj", "hwinh", "hwid", "hwil", "hwilg", "hwilm", "hwilb", "hwils", "hwilt", "hwilp", "hwilh", "hwim", "hwib", "hwibs", "hwis", "hwiss", "hwing", "hwij", "hwic", "hwik", "hwit", "hwip", "hwih", "hyu", "hyug", "hyugg", "hyugs", "hyun", "hyunj", "hyunh", "hyud", "hyul", "hyulg", "hyulm", "hyulb", "hyuls", "hyult", "hyulp", "hyulh", "hyum", "hyub", "hyubs", "hyus", "hyuss", "hyung", "hyuj", "hyuc", "hyuk", "hyut", "hyup", "hyuh", "heu", "heug", "heugg", "heugs", "heun", "heunj", "heunh", "heud", "heul", "heulg", "heulm", "heulb", "heuls", "heult", "heulp", "heulh", "heum", "heub", "heubs", "heus", "heuss", "heung", "heuj", "heuc", "heuk", "heut", "heup", "heuh", "hyi", "hyig", "hyigg", "hyigs", "hyin", "hyinj", "hyinh", "hyid", "hyil", "hyilg", "hyilm", "hyilb", "hyils", "hyilt", "hyilp", "hyilh", "hyim", "hyib", "hyibs", "hyis", "hyiss", "hying", "hyij", "hyic", "hyik", "hyit", "hyip", "hyih", "hi", "hig", "higg", "higs", "hin", "hinj", "hinh", "hid", "hil", "hilg", "hilm", "hilb", "hils", "hilt", "hilp", "hilh", "him", "hib", "hibs", "his", "hiss", "hing", "hij", "hic", "hik", "hit", "hip", "hih", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const FJ = Object.freeze(PJ);
const KJ = ["Kay", "Kayng", "Ke", "Ko", "Kol", "Koc", "Kwi", "Kwi", "Kyun", "Kul", "Kum", "Na", "Na", "Na", "La", "Na", "Na", "Na", "Na", "Na", "Nak", "Nak", "Nak", "Nak", "Nak", "Nak", "Nak", "Nan", "Nan", "Nan", "Nan", "Nan", "Nan", "Nam", "Nam", "Nam", "Nam", "Nap", "Nap", "Nap", "Nang", "Nang", "Nang", "Nang", "Nang", "Nay", "Nayng", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "Nok", "Nok", "Nok", "Nok", "Nok", "Nok", "Non", "Nong", "Nong", "Nong", "Nong", "Noy", "Noy", "Noy", "Noy", "Nwu", "Nwu", "Nwu", "Nwu", "Nwu", "Nwu", "Nwu", "Nwu", "Nuk", "Nuk", "Num", "Nung", "Nung", "Nung", "Nung", "Nung", "Twu", "La", "Lak", "Lak", "Lan", "Lyeng", "Lo", "Lyul", "Li", "Pey", "Pen", "Pyen", "Pwu", "Pwul", "Pi", "Sak", "Sak", "Sam", "Sayk", "Sayng", "Sep", "Sey", "Sway", "Sin", "Sim", "Sip", "Ya", "Yak", "Yak", "Yang", "Yang", "Yang", "Yang", "Yang", "Yang", "Yang", "Yang", "Ye", "Ye", "Ye", "Ye", "Ye", "Ye", "Ye", "Ye", "Ye", "Ye", "Ye", "Yek", "Yek", "Yek", "Yek", "Yen", "Yen", "Yen", "Yen", "Yen", "Yen", "Yen", "Yen", "Yen", "Yen", "Yen", "Yen", "Yen", "Yen", "Yel", "Yel", "Yel", "Yel", "Yel", "Yel", "Yem", "Yem", "Yem", "Yem", "Yem", "Yep", "Yeng", "Yeng", "Yeng", "Yeng", "Yeng", "Yeng", "Yeng", "Yeng", "Yeng", "Yeng", "Yeng", "Yeng", "Yeng", "Yey", "Yey", "Yey", "Yey", "O", "Yo", "Yo", "Yo", "Yo", "Yo", "Yo", "Yo", "Yo", "Yo", "Yo", "Yong", "Wun", "Wen", "Yu", "Yu", "Yu", "Yu", "Yu", "Yu", "Yu", "Yu", "Yu", "Yu", "Yuk", "Yuk", "Yuk", "Yun", "Yun", "Yun", "Yun", "Yul", "Yul", "Yul", "Yul", "Yung", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "Ik", "Ik", "In", "In", "In", "In", "In", "In", "In", "Im", "Im", "Im", "Ip", "Ip", "Ip", "Cang", "Cek", "Ci", "Cip", "Cha", "Chek"];
const RJ = Object.freeze(KJ);
const AJ = ["Chey", "Thak", "Thak", "Thang", "Thayk", "Thong", "Pho", "Phok", "Hang", "Hang", "Hyen", "Hwak", "Wu", "Huo", void 0, void 0, "Zhong", void 0, "Qing", void 0, void 0, "Xi", "Zhu", "Yi", "Li", "Shen", "Xiang", "Fu", "Jing", "Jing", "Yu", void 0, "Hagi", void 0, "Zhu", void 0, void 0, "Yi", "Du", void 0, void 0, void 0, "Fan", "Si", "Guan", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const _J = Object.freeze(AJ);
const OJ = ["ff", "fi", "fl", "ffi", "ffl", "st", "st", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "mn", "me", "mi", "vn", "mkh", void 0, void 0, void 0, void 0, void 0, "yi", void 0, "ay", "`", void 0, "d", "h", "k", "l", "m", "m", "t", "+", "sh", "s", "sh", "s", "a", "a", void 0, "b", "g", "d", "h", "v", "z", void 0, "t", "y", "k", "k", "l", void 0, "l", void 0, "n", "n", void 0, "p", "p", void 0, "ts", "ts", "r", "sh", "t", "vo", "b", "k", "p", "l", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const zJ = Object.freeze(OJ);
const EJ = [void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const $J = Object.freeze(EJ);
const qJ = [void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const IJ = Object.freeze(qJ);
const UJ = [void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "~", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "..", "--", "-", "_", "_", "(", ") ", "{", "} ", "[", "] ", "[(", ")] ", "<<", ">> ", "<", "> ", "[", "] ", "{", "}", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, ",", ",", ".", void 0, ";", ":", "?", "!", "-", "(", ")", "{", "}", "{", "}", "#", "&", "*", "+", "-", "<", ">", "=", void 0, "\\", "$", "%", "@", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
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
const Jn = [161, 161, 164, 164, 167, 168, 170, 170, 173, 174, 176, 180, 182, 186, 188, 191, 198, 198, 208, 208, 215, 216, 222, 225, 230, 230, 232, 234, 236, 237, 240, 240, 242, 243, 247, 250, 252, 252, 254, 254, 257, 257, 273, 273, 275, 275, 283, 283, 294, 295, 299, 299, 305, 307, 312, 312, 319, 322, 324, 324, 328, 331, 333, 333, 338, 339, 358, 359, 363, 363, 462, 462, 464, 464, 466, 466, 468, 468, 470, 470, 472, 472, 474, 474, 476, 476, 593, 593, 609, 609, 708, 708, 711, 711, 713, 715, 717, 717, 720, 720, 728, 731, 733, 733, 735, 735, 768, 879, 913, 929, 931, 937, 945, 961, 963, 969, 1025, 1025, 1040, 1103, 1105, 1105, 8208, 8208, 8211, 8214, 8216, 8217, 8220, 8221, 8224, 8226, 8228, 8231, 8240, 8240, 8242, 8243, 8245, 8245, 8251, 8251, 8254, 8254, 8308, 8308, 8319, 8319, 8321, 8324, 8364, 8364, 8451, 8451, 8453, 8453, 8457, 8457, 8467, 8467, 8470, 8470, 8481, 8482, 8486, 8486, 8491, 8491, 8531, 8532, 8539, 8542, 8544, 8555, 8560, 8569, 8585, 8585, 8592, 8601, 8632, 8633, 8658, 8658, 8660, 8660, 8679, 8679, 8704, 8704, 8706, 8707, 8711, 8712, 8715, 8715, 8719, 8719, 8721, 8721, 8725, 8725, 8730, 8730, 8733, 8736, 8739, 8739, 8741, 8741, 8743, 8748, 8750, 8750, 8756, 8759, 8764, 8765, 8776, 8776, 8780, 8780, 8786, 8786, 8800, 8801, 8804, 8807, 8810, 8811, 8814, 8815, 8834, 8835, 8838, 8839, 8853, 8853, 8857, 8857, 8869, 8869, 8895, 8895, 8978, 8978, 9312, 9449, 9451, 9547, 9552, 9587, 9600, 9615, 9618, 9621, 9632, 9633, 9635, 9641, 9650, 9651, 9654, 9655, 9660, 9661, 9664, 9665, 9670, 9672, 9675, 9675, 9678, 9681, 9698, 9701, 9711, 9711, 9733, 9734, 9737, 9737, 9742, 9743, 9756, 9756, 9758, 9758, 9792, 9792, 9794, 9794, 9824, 9825, 9827, 9829, 9831, 9834, 9836, 9837, 9839, 9839, 9886, 9887, 9919, 9919, 9926, 9933, 9935, 9939, 9941, 9953, 9955, 9955, 9960, 9961, 9963, 9969, 9972, 9972, 9974, 9977, 9979, 9980, 9982, 9983, 10045, 10045, 10102, 10111, 11094, 11097, 12872, 12879, 57344, 63743, 65024, 65039, 65533, 65533, 127232, 127242, 127248, 127277, 127280, 127337, 127344, 127373, 127375, 127376, 127387, 127404, 917760, 917999, 983040, 1048573, 1048576, 1114109];
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

const HOME$4 = homedir();
const paths = {
  /** 本机配置目录(信任文件、scope、plugins-skip 都在这,永不上传) */
  configDir: join(HOME$4, ".config", "omarsync"),
  configFile: join(HOME$4, ".config", "omarsync", "config"),
  /** 状态目录(镜像、备份、applied 印章、last.log) */
  stateDir: join(HOME$4, ".local", "state", "omarsync"),
  mirrorDir: join(HOME$4, ".local", "state", "omarsync", "repo"),
  backupDir: join(HOME$4, ".local", "state", "omarsync", "backup"),
  scopeFile: join(HOME$4, ".config", "omarsync", "scope"),
  pluginsSkipFile: join(HOME$4, ".config", "omarsync", "plugins-skip"),
  trustedKeysFile: join(HOME$4, ".config", "omarsync", "trusted-keys"),
  appliedStamp: join(HOME$4, ".local", "state", "omarsync", "applied"),
  lastLog: join(HOME$4, ".local", "state", "omarsync", "last.log"),
  lockFile: join(HOME$4, ".local", "state", "omarsync", "omarsync.lock"),
  statusJson: join(HOME$4, ".local", "state", "omarsync", "status.json")
};
function configGet(key, readFile) {
  const data = readFile(paths.configFile);
  if (data === void 0) {
    return void 0;
  }
  let value;
  for (const line of data.split("\n")) {
    const match = /^([A-Z_]+)=(.*)$/.exec(line);
    if (match && match[1] === key) {
      value = match[2];
    }
  }
  return value;
}

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
function readTextFile(path) {
  try {
    return readFileSync(path, "utf8");
  } catch {
    return void 0;
  }
}

function gitBin() {
  const bin = resolveTool("git");
  if (!bin) {
    die("git 不可用");
  }
  return bin;
}
function baseArgs() {
  const keygen = resolveTool("ssh-keygen");
  if (!keygen) {
    die("ssh-keygen 不可用");
  }
  return ["-c", "core.hooksPath=/dev/null", "-c", `gpg.ssh.program=${keygen}`];
}
function git(args) {
  return run(gitBin(), [...baseArgs(), ...args]);
}
function gitCapture(args) {
  const result = capture(gitBin(), [...baseArgs(), ...args]);
  return { ok: result.code === 0, code: result.code, out: result.stdout };
}
function gitOut(args) {
  const { ok, out } = gitCapture(args);
  if (!ok) {
    return void 0;
  }
  return out.trimEnd();
}

function available() {
  return resolveTool("mise") !== void 0;
}
function miseBin() {
  const bin = resolveTool("mise");
  if (!bin) {
    die("mise 未安装。运行: omarchy pkg add mise");
  }
  return bin;
}
function mise(args) {
  return run(miseBin(), ["dot", ...args]);
}
function miseCapture(args, mergeStderr = false) {
  const result = capture(miseBin(), ["dot", ...args]);
  return { ok: result.code === 0, out: mergeStderr ? result.stdout + result.stderr : result.stdout };
}
function featureOk() {
  return miseCapture(["status", "-J"]).ok;
}
function pathsJson() {
  const { ok, out } = miseCapture(["paths", "-J"]);
  if (!ok) {
    return void 0;
  }
  try {
    return JSON.parse(out);
  } catch {
    return void 0;
  }
}
function trackedRels() {
  const result = /* @__PURE__ */ new Set();
  const data = pathsJson();
  for (const entry of data?.entries ?? []) {
    if (typeof entry.path === "string") {
      result.add(entry.path.replace(/^~\//, ""));
    }
  }
  return result;
}
function currentExcludes() {
  return [...pathsJson()?.exclude ?? []];
}
function track(rel) {
  return miseCapture(["track", "-y", `~/${rel}`]).ok;
}
function untrack(rel) {
  return miseCapture(["untrack", `~/${rel}`]).ok;
}
function excludeAdd(glob) {
  return miseCapture(["exclude", glob]).ok;
}
function excludeDel(glob) {
  return miseCapture(["include", glob]).ok;
}
function save() {
  const { ok, out } = miseCapture(["save"], true);
  if (!ok) {
    return void 0;
  }
  return !out.includes("nothing changed");
}
function headSnapshot() {
  const { ok, out } = miseCapture(["history", "ls", "-J"]);
  if (!ok) {
    return void 0;
  }
  try {
    const data = JSON.parse(out);
    const snapshot = data[0]?.tree?.snapshot;
    return typeof snapshot === "string" ? snapshot : void 0;
  } catch {
    return void 0;
  }
}
function originConnected() {
  const { out } = miseCapture(["status"]);
  const line = /Setup repository: ([^\n]+)/.exec(out)?.[1];
  return line !== void 0 && !line.startsWith("none");
}
function originSet(url, branch = "main") {
  return mise(["origin", "set", url, "--branch", branch, "--sync", "sync", "-y"]);
}
function sync(fetchOnly) {
  const args = ["sync"];
  if (fetchOnly) {
    args.push("--fetch-only");
  }
  return miseCapture(args, true);
}
function pull(options = {}) {
  const args = ["pull", "-y"];
  if (options.takeRemoteAll) {
    args.push("--take-remote-all");
  }
  if (options.dryRun) {
    args.push("--dry-run");
  }
  return miseCapture(args, true);
}
function conflicts() {
  return miseCapture(["conflicts"], true);
}
function diff() {
  return miseCapture(["diff"], true);
}
function incomingPending() {
  if (!available()) {
    return false;
  }
  const { out } = miseCapture(["status"]);
  return /incoming change\(s\) pending/.test(out);
}

const BANNED_PATHS = [
  ".ssh",
  ".config/gh",
  ".config/git",
  ".config/omarsync",
  ".gnupg",
  ".aws",
  ".kube",
  ".docker",
  ".netrc",
  ".npmrc",
  ".config/npm",
  ".password-store",
  ".local/share/keyrings",
  ".local/state/omarsync",
  ".config/doubao-murmur",
  ".var",
  // mise 自身的配置与状态:同步它们会循环
  ".config/mise",
  ".local/share/mise",
  ".local/state/mise"
];
const PLUGINS_REL = ".config/omarchy/plugins";
function bannedBasename(base) {
  return base.startsWith("id_rsa") || base.startsWith("id_ecdsa") || base.startsWith("id_ed25519") || base === "credentials" || base === "credentials.json" || base.endsWith(".pem") || base.endsWith(".key");
}
function assertSafeRel(rel) {
  if (rel === "" || rel === "." || rel === "..") {
    die(`非法 scope 路径: '${rel}'`);
  }
  if (rel.startsWith("/")) {
    die(`scope 路径必须相对于 $HOME: '${rel}'`);
  }
  if (rel.includes("..")) {
    die(`scope 路径不允许包含 '..': '${rel}'`);
  }
  if (rel.includes("\n")) {
    die("scope 路径不允许包含换行");
  }
  if (rel.includes("*") || rel.includes("?")) {
    die(`scope 路径不允许包含通配符: '${rel}'`);
  }
  if (rel === PLUGINS_REL || rel.startsWith(`${PLUGINS_REL}/`)) {
    die(`scope 路径 '${rel}' 指向插件目录;插件只通过签名快照同步`);
  }
  for (const banned of BANNED_PATHS) {
    if (rel === banned || rel.startsWith(`${banned}/`) || banned.startsWith(`${rel}/`)) {
      die(`scope 路径 '${rel}' 涉及秘密位置 ${banned}`);
    }
  }
  const base = rel.split("/").pop() ?? "";
  if (bannedBasename(base)) {
    die(`scope 路径 '${rel}' 指向凭证文件`);
  }
}
function ensureLocalScope(root) {
  if (isFile(paths.scopeFile)) {
    return;
  }
  mkdirSync(dirname(paths.scopeFile), { recursive: true });
  copyFileSync(`${root}/omarsync.scope.example`, paths.scopeFile);
  chmodSync(paths.scopeFile, 420);
}
function readScope(file) {
  const data = readTextFile(file);
  if (data === void 0) {
    return [];
  }
  const entries = [];
  for (const raw of data.split("\n")) {
    const line = raw.trim();
    if (line === "" || line.startsWith("#")) {
      continue;
    }
    const pipe = line.indexOf("|");
    const rel = (pipe === -1 ? line : line.slice(0, pipe)).trim();
    const csv = pipe === -1 ? "" : line.slice(pipe + 1);
    assertSafeRel(rel);
    const excludes = csv.split(",").map((part) => part.trim()).filter((part) => part !== "");
    entries.push({ rel, excludes });
  }
  return entries;
}
const CONST_EXCLUDES = [
  "**/.git/**",
  "**/.git",
  "**/node_modules/**",
  "**/node_modules",
  "~/.config/omarsync/**",
  "~/.config/omarsync",
  "~/.config/omarchy/plugins/**",
  "~/.config/omarchy/plugins"
];
function patternToGlobs(root, pattern) {
  const globs = [];
  const base = `~/${root}`;
  if (pattern.endsWith("/")) {
    const dir = pattern.slice(0, -1);
    globs.push(`${base}/${dir}/**`, `${base}/${dir}`);
    if (!dir.includes("/")) {
      globs.push(`${base}/**/${dir}/**`, `${base}/**/${dir}`);
    }
  } else if (pattern.includes("/")) {
    globs.push(`${base}/${pattern}`);
  } else {
    globs.push(`${base}/${pattern}`, `${base}/**/${pattern}`);
  }
  return globs;
}
function desiredExcludes(entries) {
  const set = new Set(CONST_EXCLUDES);
  for (const entry of entries) {
    for (const pattern of entry.excludes) {
      for (const glob of patternToGlobs(entry.rel, pattern)) {
        set.add(glob);
      }
    }
  }
  return set;
}
function reconcile(entries) {
  if (!available()) {
    die("mise 未安装。运行: omarchy pkg add mise");
  }
  if (!featureOk()) {
    die("mise dot 在这台机器上不工作;检查 `mise dot status`");
  }
  const wanted = new Set(entries.map((entry) => entry.rel));
  for (const rel of wanted) {
    if (!trackedRels().has(rel)) {
      if (track(rel)) {
        log.info(`tracking ${rel}`);
      } else {
        log.warn(`track 失败 ${rel}`);
      }
    }
  }
  for (const rel of trackedRels()) {
    if (!wanted.has(rel)) {
      if (untrack(rel)) {
        log.info(`untracked ${rel}(不在 scope 里)`);
      } else {
        log.warn(`untrack 失败 ${rel}`);
      }
    }
  }
  const desired = desiredExcludes(entries);
  const current = currentExcludes();
  for (const glob of current) {
    if (!desired.has(glob) && !excludeDel(glob)) {
      log.warn(`移除排除规则失败 ${glob}`);
    }
  }
  for (const glob of desired) {
    if (!current.includes(glob) && !excludeAdd(glob)) {
      log.warn(`添加排除规则失败 ${glob}`);
    }
  }
}

const HOME$3 = homedir();
function hooksSourceDir() {
  return `${HOME$3}/.config/omarsync-hooks/post-apply.d`;
}
function hookNames(dir) {
  if (!isDir(dir)) {
    return [];
  }
  const names = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isFile()) {
      names.push(entry.name);
    }
  }
  return names.sort();
}
function exportHooks(dest) {
  rmrf(`${dest}/hooks`);
  const src = hooksSourceDir();
  if (!isDir(src)) {
    return;
  }
  mkdirSync(`${dest}/hooks/post-apply.d`, { recursive: true });
  for (const name of hookNames(src)) {
    if (/^[A-Za-z0-9._-]+$/.test(name)) {
      copyFileSync(`${src}/${name}`, `${dest}/hooks/post-apply.d/${name}`);
      chmodSync(`${dest}/hooks/post-apply.d/${name}`, statSync(`${src}/${name}`).mode);
    }
  }
}
function listHooks(mirror) {
  return hookNames(`${mirror}/hooks/post-apply.d`);
}
function isExec(path) {
  try {
    accessSync(path, constants.X_OK);
    return true;
  } catch {
    return false;
  }
}
function runHooks(mirror, allowExec) {
  const dir = `${mirror}/hooks/post-apply.d`;
  if (!allowExec) {
    if (isDir(dir)) {
      log.warn("跳过 post-apply hooks;可执行内容恢复需要可信签名");
    }
    return true;
  }
  if (!isDir(dir)) {
    return true;
  }
  let failed = false;
  for (const name of hookNames(dir)) {
    const path = `${dir}/${name}`;
    if (!isExec(path)) {
      chmodSync(path, 493);
    }
    log.info(`运行 hook ${name}`);
    if (!run("/usr/bin/bash", [path])) {
      log.warn(`hook ${name} 失败`);
      failed = true;
    }
  }
  return !failed;
}
function refreshUserServices() {
  const systemctl = resolveTool("systemctl");
  if (!systemctl) {
    return true;
  }
  const wanted = readScope(paths.scopeFile).some(
    (entry) => entry.rel === ".config/systemd/user" || entry.rel.startsWith(".config/systemd/user/") || entry.rel === ".config/systemd"
  );
  if (!wanted || !isDir(`${HOME$3}/.config/systemd/user`)) {
    return true;
  }
  const runtime = process.env["XDG_RUNTIME_DIR"];
  if (!runtime || runtime === "" || !exists(`${runtime}/systemd/private`)) {
    return true;
  }
  let okAll = true;
  if (!run(systemctl, ["--user", "daemon-reload"])) {
    log.warn("systemctl --user daemon-reload 失败");
    okAll = false;
  }
  const find = resolveTool("find");
  const out = find ? capture(find, [`${HOME$3}/.config/systemd/user`, "-type", "l", "-path", "*.target.wants/*", "-printf", "%f\n"]).stdout : "";
  for (const unit of out.split("\n")) {
    if (unit.endsWith(".service")) {
      if (!run(systemctl, ["--user", "start", unit])) {
        log.warn(`无法启动 ${unit}`);
        okAll = false;
      }
    }
  }
  return okAll;
}

function ghInstalled() {
  return resolveTool("gh") !== void 0;
}
function ghBin() {
  const bin = resolveTool("gh");
  if (!bin) {
    die("GitHub CLI 未安装。运行: omarchy pkg add github-cli");
  }
  return bin;
}
function gh(args) {
  return run(ghBin(), args);
}
function ghCapture(args) {
  const result = capture(ghBin(), args);
  return { ok: result.code === 0, out: result.stdout };
}
function ghLoggedIn() {
  return ghInstalled() && ghCapture(["auth", "status"]).ok;
}
function githubUser() {
  if (!ghLoggedIn()) {
    return void 0;
  }
  const { ok, out } = ghCapture(["api", "user", "--jq", ".login"]);
  const user = out.trim();
  return ok && user !== "" ? user : void 0;
}

const PLUGIN_ID = "io.github.eastgold15.omarsync";
const MAX_FILE_SIZE = "50m";
const BACKUP_KEEP = 5;
function omarchy(args) {
  const bin = resolveTool("omarchy");
  if (!bin) {
    die("omarchy 不在可信目录里");
  }
  return run(bin, args);
}
function omarchyShell(args) {
  const bin = resolveTool("omarchy-shell");
  if (!bin) {
    die("omarchy-shell 不在可信目录里");
  }
  return run(bin, args);
}
function rsync(args) {
  const bin = resolveTool("rsync");
  if (!bin) {
    die("rsync 不可用");
  }
  return run(bin, args);
}
function notify(headline, body) {
  if (process.env["OMARSYNC_NOTIFY"] !== "1") {
    return;
  }
  const bin = resolveTool("omarchy-notification-send");
  if (!bin) {
    return;
  }
  const args = ["--app-name", "omarsync", headline];
  if (body !== "") {
    args.push(body);
  }
  run(bin, args);
}
function dotRepoName() {
  const repo = configGet("REPO", readTextFile) ?? "";
  if (repo === "") {
    return "";
  }
  const owner = /^(.+)\/[^/]+$/.exec(repo)?.[1] ?? repo;
  return `${owner}/omarchy-dotfiles`;
}
function dotOriginUrl() {
  const override = process.env["OMARSYNC_DOT_ORIGIN"];
  if (override && override !== "") {
    return override;
  }
  return `https://github.com/${dotRepoName()}.git`;
}
function discardRemoteScope(mirror) {
  if (!isDir(mirror)) {
    return;
  }
  const file = `${mirror}/omarsync.scope`;
  if (exists(file) || isLink(file)) {
    try {
      unlinkSync(file);
    } catch {
    }
  }
  if (isDir(`${mirror}/.git`) && gitOut(["-C", mirror, "ls-files", "--error-unmatch", "--", "omarsync.scope"])) {
    git(["-C", mirror, "rm", "-q", "--ignore-unmatch", "--", "omarsync.scope"]);
  }
}
function ensureIdentity(mirror) {
  let email = configGet("SIGNING_EMAIL", readTextFile);
  let name = configGet("SIGNING_NAME", readTextFile);
  if (!email) {
    if (ghLoggedIn()) {
      if (!name) {
        const { ok, out } = ghCapture(["api", "user", "--jq", ".name // .login"]);
        if (ok) {
          name = out.trimEnd();
        }
      }
      const login = ghCapture(["api", "user", "--jq", ".login"]).out.trim();
      const id = ghCapture(["api", "user", "--jq", ".id"]).out.trim();
      if (login !== "" && id !== "") {
        email = `${id}+${login}@users.noreply.github.com`;
      }
    }
    email ??= "omarsync@localhost";
  }
  git(["-C", mirror, "config", "user.name", name && name !== "" ? name : "Omarsync"]);
  git(["-C", mirror, "config", "user.email", email]);
  const signingKey = configGet("SIGNING_KEY", readTextFile);
  if (signingKey && isFile(signingKey)) {
    git(["-C", mirror, "config", "gpg.format", "ssh"]);
    git(["-C", mirror, "config", "user.signingkey", signingKey]);
    git(["-C", mirror, "config", "commit.gpgsign", "true"]);
  }
}

function pacmanBin() {
  return resolveTool("pacman");
}
function flatpakBin() {
  return resolveTool("flatpak");
}
function flatpak(args) {
  const bin = flatpakBin();
  if (!bin) {
    die("flatpak 不在可信目录里");
  }
  return run(bin, args);
}
function flatpakCapture(args) {
  const bin = flatpakBin();
  if (!bin) {
    die("flatpak 不在可信目录里");
  }
  const result = capture(bin, args);
  return { ok: result.code === 0, out: result.stdout };
}
function exportPackages(dest) {
  mkdirSync(`${dest}/packages`, { recursive: true });
  const pacman = pacmanBin();
  if (pacman) {
    writeFileSync(`${dest}/packages/pacman.txt`, capture(pacman, ["-Qqen"]).stdout);
    writeFileSync(`${dest}/packages/aur.txt`, capture(pacman, ["-Qqem"]).stdout);
  } else {
    writeFileSync(`${dest}/packages/pacman.txt`, "");
    writeFileSync(`${dest}/packages/aur.txt`, "");
  }
  exportFlatpaks(dest);
}
function flatpakRemoteUrlOk(url) {
  return url.length <= 300 && /^https:\/\/[A-Za-z0-9._~:/?#&=%+-]+$/.test(url) && !url.includes("..");
}
function exportFlatpaks(dest) {
  const outPath = `${dest}/packages/flatpak.txt`;
  if (!flatpakBin()) {
    writeFileSync(outPath, "");
    return;
  }
  const remoteUrls = /* @__PURE__ */ new Map();
  for (const line of flatpakCapture(["remotes", "--user", "--columns=name,url"]).out.split("\n")) {
    const match = /^(\S+)\s+(\S+)/.exec(line);
    if (match && /^[A-Za-z0-9._-]+$/.test(match[1])) {
      remoteUrls.set(match[1], flatpakRemoteUrlOk(match[2]) ? match[2] : "");
    }
  }
  const lines = [];
  for (const line of flatpakCapture(["list", "--user", "--app", "--columns=application,origin,branch,active"]).out.split("\n")) {
    const match = /^(\S+)\s+(\S+)\s+(\S+)/.exec(line);
    if (!match) {
      continue;
    }
    const [, app, origin, branch] = match;
    if (!/^[A-Za-z0-9._-]+$/.test(app) || !/^[A-Za-z0-9._-]+$/.test(origin) || !/^[A-Za-z0-9._-]+$/.test(branch)) {
      continue;
    }
    let commit = flatpakCapture(["info", "--user", "--show-commit", app]).out.trimEnd();
    if (!/^[0-9a-f]{64}$/.test(commit)) {
      commit = "";
    }
    lines.push([app, origin, branch, commit, remoteUrls.get(origin) ?? ""].join("	"));
  }
  writeFileSync(outPath, lines.length > 0 ? `${lines.join("\n")}
` : "");
}
function userFlatpakRemoteExists(name) {
  return flatpakCapture(["remotes", "--user", "--columns=name"]).out.split("\n").some((line) => line.trim() === name);
}
function ensureUserFlatpakRemote(name, url) {
  if (userFlatpakRemoteExists(name)) {
    return true;
  }
  if (name === "flathub") {
    url = "https://dl.flathub.org/repo/flathub.flatpakrepo";
  }
  if (!flatpakRemoteUrlOk(url)) {
    return false;
  }
  return flatpak(["remote-add", "--user", "--if-not-exists", name, url]);
}
function validPkgName(name) {
  return /^[A-Za-z0-9@._+%-]+$/.test(name);
}
function pkgInstalled(pkg) {
  const pacman = pacmanBin();
  return pacman !== void 0 && capture(pacman, ["-Q", pkg]).code === 0;
}
function readPkgList(path) {
  const data = readTextFile(path);
  const pkgs = [];
  if (!data) {
    return pkgs;
  }
  for (const line of data.split("\n")) {
    const pkg = line.trim();
    if (pkg === "" || pkg.startsWith("#")) {
      continue;
    }
    if (!validPkgName(pkg)) {
      die(`拒绝异常的包名: ${pkg}`);
    }
    if (!pkgInstalled(pkg)) {
      pkgs.push(pkg);
    }
  }
  return pkgs;
}
function installMissingPackages(mirror) {
  let failed = false;
  const official = readPkgList(`${mirror}/packages/pacman.txt`);
  if (official.length > 0) {
    log.info(`安装 ${official.length} 个官方包`);
    if (!omarchy(["pkg", "add", ...official])) {
      log.warn("官方包安装失败");
      failed = true;
    }
  } else {
    log.info("官方包已全部安装");
  }
  const aur = readPkgList(`${mirror}/packages/aur.txt`);
  if (aur.length > 0) {
    log.warn(`不安装 AUR 包(未钉住的构建配方): ${aur.join(" ")}`);
    log.warn("如需安装,请自己找钉住 commit 的 PKGBUILD");
  }
  if (!installMissingFlatpaks(mirror)) {
    failed = true;
  }
  return !failed;
}
function installMissingFlatpaks(mirror) {
  const listPath = `${mirror}/packages/flatpak.txt`;
  if (!flatpakBin() || !isFile(listPath)) {
    return true;
  }
  let failed = false;
  for (const line of (readTextFile(listPath) ?? "").split("\n")) {
    const match = /^([^\t]*)\t([^\t]*)\t([^\t]*)\t([^\t]*)\t?([^\t]*)/.exec(line);
    if (!match || match[1] === "") {
      continue;
    }
    const [, app, origin, branch, commit, url] = match;
    if (!/^[A-Za-z0-9._-]+$/.test(app)) {
      die(`拒绝异常的 flatpak id: ${app}`);
    }
    if (!/^[A-Za-z0-9._-]+$/.test(origin)) {
      die(`拒绝异常的 flatpak origin: ${origin}`);
    }
    if (!/^[A-Za-z0-9._-]+$/.test(branch)) {
      die(`拒绝异常的 flatpak branch: ${branch}`);
    }
    if (commit !== "" && !/^[0-9a-f]{64}$/.test(commit)) {
      die(`拒绝异常的 flatpak commit: ${commit}`);
    }
    if (url !== "" && !flatpakRemoteUrlOk(url)) {
      die(`拒绝异常的 flatpak remote URL(origin ${origin})`);
    }
    if (!flatpakCapture(["info", "--user", app]).ok) {
      if (!ensureUserFlatpakRemote(origin, url)) {
        log.warn(`跳过 flatpak ${app};这台机器没有 remote ${origin} 且没有下载 URL`);
        continue;
      }
      log.info(`安装 flatpak ${app}(来自 ${origin})`);
      if (!flatpak(["install", "--user", "--noninteractive", "--app", origin, app])) {
        log.warn(`安装 flatpak ${app} 失败`);
        failed = true;
        continue;
      }
    }
    if (commit !== "") {
      log.info(`钉住 flatpak ${app} 到 ${commit}`);
      if (!flatpak(["update", "--user", "--noninteractive", `--commit=${commit}`, app])) {
        log.warn(`钉住 flatpak ${app} 到 ${commit} 失败`);
        failed = true;
      }
    }
  }
  return !failed;
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
function configSet(key, value) {
  let lines = [];
  try {
    lines = readFileSync(paths.configFile, "utf8").split("\n").filter((line) => line !== "" && !line.startsWith(`${key}=`));
  } catch {
  }
  lines.push(`${key}=${value}`);
  writeFileSync(paths.configFile, `${lines.join("\n")}
`);
}

function isFullSha(value) {
  return typeof value === "string" && /^[0-9a-f]{40}$/.test(value);
}
function realpath(path) {
  try {
    return realpathSync(path);
  } catch {
    return void 0;
  }
}
function pathWithin(a, b) {
  return a === b || a.startsWith(`${b}/`);
}
function refuseInsideMirror(path) {
  if (!isDir(paths.mirrorDir)) {
    return;
  }
  const realPath = realpath(path);
  const realMirror = realpath(paths.mirrorDir);
  if (realPath && realMirror && pathWithin(realPath, realMirror)) {
    die(`拒绝使用同步镜像内的信任文件: ${path}`);
  }
}
function resolveRemoteSha(mirror, branch) {
  git(["-C", mirror, "fetch", "--quiet", "origin", branch]);
  const sha = gitOut(["-C", mirror, "rev-parse", "--verify", `refs/remotes/origin/${branch}^{commit}`]);
  if (!isFullSha(sha)) {
    die(`origin/${branch} 没有解析出完整提交: ${sha ?? "<空>"}`);
  }
  return sha;
}
function checkoutPinnedCommit(mirror, sha) {
  if (!isFullSha(sha)) {
    die(`拒绝检出非提交: ${sha}`);
  }
  git(["-C", mirror, "checkout", "--quiet", "--force", "--detach", sha]);
  const head = gitOut(["-C", mirror, "rev-parse", "--verify", "HEAD"]);
  if (head !== sha) {
    die(`镜像 HEAD ${head ?? "?"} 不是钉住的提交 ${sha}`);
  }
  if (gitCapture(["-C", mirror, "symbolic-ref", "-q", "HEAD"]).ok) {
    die(`钉住 ${sha} 后镜像仍挂在分支上`);
  }
}
function commitIsTrusted(mirror, sha) {
  const keys = paths.trustedKeysFile;
  if (!isFile(keys)) {
    return false;
  }
  const data = readTextFile(keys) ?? "";
  if (!/\S/.test(data)) {
    return false;
  }
  refuseInsideMirror(keys);
  return gitCapture(["-C", mirror, "-c", `gpg.ssh.allowedSignersFile=${keys}`, "verify-commit", sha]).ok;
}
function trustedKeysPresent() {
  if (!isFile(paths.trustedKeysFile)) {
    return false;
  }
  return /\S/.test(readTextFile(paths.trustedKeysFile) ?? "");
}
function extractArmor(commitText) {
  const lines = [];
  let on = false;
  for (const line of commitText.split("\n")) {
    if (!on) {
      const rest = /^gpgsig (.*)$/.exec(line)?.[1];
      if (rest !== void 0) {
        on = true;
        lines.push(rest);
        if (rest.includes("END SSH SIGNATURE")) {
          break;
        }
      }
    } else {
      const rest = /^ (.*)$/.exec(line)?.[1];
      if (rest === void 0) {
        break;
      }
      lines.push(rest);
      if (rest.includes("END SSH SIGNATURE")) {
        break;
      }
    }
  }
  const armor = lines.join("\n");
  if (!armor.includes("BEGIN SSH SIGNATURE") || !armor.includes("END SSH SIGNATURE")) {
    return void 0;
  }
  return armor;
}
function signaturePubkeyLine(mirror, sha) {
  const commit = gitOut(["-C", mirror, "cat-file", "commit", sha]);
  if (!commit) {
    return void 0;
  }
  const armor = extractArmor(commit);
  if (!armor) {
    return void 0;
  }
  const body = armor.replace("-----BEGIN SSH SIGNATURE-----", "").replace("-----END SSH SIGNATURE-----", "");
  const sig = Buffer.from(body.replaceAll(/\s/g, ""), "base64");
  if (sig.length < 14 || sig.subarray(0, 6).toString("ascii") !== "SSHSIG") {
    return void 0;
  }
  if (sig.readUInt32BE(6) !== 1) {
    return void 0;
  }
  const keyLength = sig.readUInt32BE(10);
  if (keyLength < 16 || keyLength > 4096 || sig.length < 14 + keyLength) {
    return void 0;
  }
  const key = sig.subarray(14, 14 + keyLength);
  const typeLength = key.readUInt32BE(0);
  if (typeLength < 4 || typeLength > 64 || key.length < 4 + typeLength) {
    return void 0;
  }
  const keyType = key.subarray(4, 4 + typeLength).toString("ascii");
  if (!/^ssh-[a-z0-9-]+$/.test(keyType)) {
    return void 0;
  }
  return `${keyType} ${key.toString("base64")}`;
}
function fingerprintOfPubkeyLine(pub) {
  const mktemp = resolveTool("mktemp");
  if (!mktemp) {
    return void 0;
  }
  const tmp = capture(mktemp, []).stdout.trim();
  if (tmp === "") {
    return void 0;
  }
  writeFileSync(tmp, `${pub}
`);
  const keygen = resolveTool("ssh-keygen");
  const out = keygen ? capture(keygen, ["-lf", tmp]).stdout : "";
  try {
    unlinkSync(tmp);
  } catch {
  }
  return /\S+\s+(SHA256:[A-Za-z0-9+/]+=*)/.exec(out)?.[1];
}
function pubkeyVerifiesCommit(mirror, sha, pub) {
  const mktemp = resolveTool("mktemp");
  if (!mktemp) {
    return false;
  }
  const tmp = capture(mktemp, []).stdout.trim();
  if (tmp === "") {
    return false;
  }
  writeFileSync(tmp, `* namespaces="git" ${pub}
`);
  const ok = gitCapture(["-C", mirror, "-c", `gpg.ssh.allowedSignersFile=${tmp}`, "verify-commit", sha]).ok;
  try {
    unlinkSync(tmp);
  } catch {
  }
  return ok;
}
function appliedStampFile() {
  return paths.appliedStamp;
}
function firstApplyAvailable() {
  if (trustedKeysPresent()) {
    return false;
  }
  return !isFile(appliedStampFile());
}
function markApplied(sha) {
  mkdirSync(dirname(appliedStampFile()), { recursive: true });
  writeFileSync(appliedStampFile(), `${sha}
`);
}
function rememberSigner(pub) {
  const keys = paths.trustedKeysFile;
  refuseInsideMirror(keys);
  mkdirSync(dirname(keys), { recursive: true });
  if (!isFile(keys)) {
    writeFileSync(keys, "");
  }
  chmodSync(keys, 420);
  const entry = `* namespaces="git" ${pub}`;
  const data = readTextFile(keys) ?? "";
  if (!data.split("\n").includes(entry)) {
    appendFileSync(keys, `${entry}
`);
  }
}
function acceptFirstApply(mirror, sha) {
  const pub = signaturePubkeyLine(mirror, sha);
  const fp = pub ? fingerprintOfPubkeyLine(pub) : void 0;
  if (pub && fp && pubkeyVerifiesCommit(mirror, sha, pub)) {
    rememberSigner(pub);
    log.info(`已信任签名者 ${fp}`);
    return;
  }
  log.info(`本机首次应用;提交 ${sha} 未签名`);
  log.info("之后的 apply 需要可信签名");
}
async function trustSignerOfCommit(mirror, sha, allowPrompt) {
  const pub = signaturePubkeyLine(mirror, sha);
  const fp = pub ? fingerprintOfPubkeyLine(pub) : void 0;
  if (trustedKeysPresent()) {
    if (fp) {
      die(`提交 ${sha} 由 ${fp} 签名,不在 ${paths.trustedKeysFile} 里。拒绝应用。`);
    }
    die(`提交 ${sha} 不是由 ${paths.trustedKeysFile} 里的密钥签名的。拒绝应用。`);
  }
  if (!pub || !fp || !pubkeyVerifiesCommit(mirror, sha, pub)) {
    die(`提交 ${sha} 未签名。拒绝应用。`);
  }
  if (!allowPrompt) {
    if (stdinIsTty()) {
      log.info("这台机器还没有信任过签名密钥");
      log.info(`提交 ${sha} 由 ${fp} 签名`);
      if (!await confirm("信任这把密钥并应用?")) {
        die("未信任该签名密钥");
      }
    } else {
      die(`提交 ${sha} 由 ${fp} 签名,而本机还没信任过签名密钥。在终端里运行 apply 并确认,或加 --trust-signer。`);
    }
  }
  rememberSigner(pub);
  log.info(`已信任签名者 ${fp}`);
}
function requireTrustedCommit(mirror, sha) {
  if (!isFullSha(sha)) {
    die(`拒绝未钉住的版本: ${sha}`);
  }
  if (!commitIsTrusted(mirror, sha)) {
    die(`提交 ${sha} 不是由 ${paths.trustedKeysFile} 里的密钥签名的。拒绝应用。`);
  }
}
function commitSignatureState(mirror, sha) {
  let state = "none";
  if (commitIsTrusted(mirror, sha)) {
    state = "trusted";
  }
  const pub = signaturePubkeyLine(mirror, sha);
  const fp = (pub ? fingerprintOfPubkeyLine(pub) : void 0) ?? "";
  if (state === "none" && pub && fp !== "" && pubkeyVerifiesCommit(mirror, sha, pub)) {
    state = "untrusted";
  }
  return { state, fingerprint: fp };
}
function preparePushBranch(mirror, branch) {
  git(["-C", mirror, "checkout", "-q", "-B", branch]);
}
function recordTrustedSigner(keyType, keyData, priv) {
  if (!keyType.startsWith("ssh-")) {
    die("不是 ssh 公钥");
  }
  if (!/^[A-Za-z0-9+/=]+$/.test(keyData)) {
    die("ssh 公钥格式不对");
  }
  if (priv) {
    if (!isFile(priv)) {
      die(`私钥不存在: ${priv}`);
    }
    refuseInsideMirror(priv);
  }
  let email = configGet("SIGNING_EMAIL", readTextFile);
  if (!email) {
    email = "omarsync@localhost";
    configSet("SIGNING_EMAIL", email);
  }
  const keys = paths.trustedKeysFile;
  refuseInsideMirror(keys);
  mkdirSync(dirname(keys), { recursive: true });
  if (!isFile(keys)) {
    writeFileSync(keys, "");
  }
  chmodSync(keys, 420);
  const entry = `${email} namespaces="git" ${keyType} ${keyData}`;
  const data = readTextFile(keys) ?? "";
  if (!data.split("\n").includes(entry)) {
    appendFileSync(keys, `${entry}
`);
  }
  if (priv) {
    configSet("SIGNING_KEY", priv);
  }
  log.info(`已为 ${email} 信任 ${keyType} 密钥`);
}
function privateKeyPub(priv) {
  if (!priv || !isFile(priv)) {
    return void 0;
  }
  if (isDir(paths.mirrorDir)) {
    const realPath = realpath(priv);
    const realMirror = realpath(paths.mirrorDir);
    if (!realPath || !realMirror || pathWithin(realPath, realMirror)) {
      return void 0;
    }
  }
  if ((statSync(priv).mode & 18) !== 0) {
    return void 0;
  }
  const keygen = resolveTool("ssh-keygen");
  if (!keygen) {
    return void 0;
  }
  const { code, stdout } = capture(keygen, ["-y", "-f", priv, "-P", ""]);
  if (code !== 0) {
    return void 0;
  }
  const pub = stdout.trim();
  return /^ssh-[a-z0-9-]+\s+[A-Za-z0-9+/=]+/.test(pub) ? pub : void 0;
}
function dedicatedSigningKey() {
  return `${dirname(paths.trustedKeysFile)}/signing_key`;
}
function createDedicatedSigningKey(priv) {
  if (exists(priv) || exists(`${priv}.pub`)) {
    die(`无法在 ${priv} 创建签名密钥`);
  }
  refuseInsideMirror(priv);
  mkdirSync(dirname(priv), { recursive: true });
  const keygen = resolveTool("ssh-keygen");
  if (!keygen) {
    die("ssh-keygen 不可用");
  }
  if (!run(keygen, ["-q", "-t", "ed25519", "-f", priv, "-N", "", "-C", `omarsync@${hostnameSafe()}`])) {
    die("创建签名密钥失败");
  }
  chmodSync(priv, 384);
}
function ensurePushSigner() {
  const home = dirname(dirname(paths.trustedKeysFile));
  let priv;
  let pub;
  const configured = configGet("SIGNING_KEY", readTextFile);
  if (configured) {
    pub = privateKeyPub(configured);
    if (!pub) {
      die(`SIGNING_KEY 无法免密签名: ${configured}`);
    }
    priv = configured;
  } else {
    const defaultKey = `${home}/.ssh/id_ed25519`;
    pub = privateKeyPub(defaultKey);
    if (pub) {
      priv = defaultKey;
      log.info("使用 ~/.ssh/id_ed25519 签名");
    } else {
      priv = dedicatedSigningKey();
      pub = privateKeyPub(priv);
      if (!pub) {
        createDedicatedSigningKey(priv);
        pub = privateKeyPub(priv);
        if (!pub) {
          die("创建签名密钥失败");
        }
      }
      log.info(`使用 ${priv} 签名`);
    }
  }
  const [keyType, keyData] = pub.split(/\s+/);
  recordTrustedSigner(keyType, keyData, priv);
}
function signUntrustedTip(mirror) {
  const sha = gitOut(["-C", mirror, "rev-parse", "--verify", "--quiet", "HEAD"]);
  if (sha) {
    if (commitIsTrusted(mirror, sha)) {
      return;
    }
    log.info("为快照补签名");
  }
  git(["-C", mirror, "commit", "-S", "--allow-empty", "-m", `sign snapshot from ${hostnameSafe()} @ ${iso8601()}`]);
}
function cmdTrustKey(pubFile, priv) {
  if (!pubFile || !isFile(pubFile)) {
    die("用法: omarsync trust-key <ssh公钥> [私钥]");
  }
  refuseInsideMirror(pubFile);
  if (priv && !isFile(priv)) {
    die(`私钥不存在: ${priv}`);
  }
  if (priv) {
    refuseInsideMirror(priv);
  }
  const [keyType, keyData] = (readTextFile(pubFile) ?? "").trim().split(/\s+/);
  if (!keyType) {
    die("不是 ssh 公钥");
  }
  recordTrustedSigner(keyType, keyData ?? "", priv);
}

const HOME$2 = homedir();
function pluginDir(id) {
  return `${HOME$2}/.config/omarchy/plugins/${id}`;
}
function validPluginId(id) {
  return /^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(id) && !id.includes("..") && !id.startsWith("omarchy.");
}
function httpsPluginUrl(url) {
  return !url.includes("..") && /^https:\/\/[A-Za-z0-9._~:/?#%+-]+$/.test(url);
}
function localPluginUrl(url) {
  return url.startsWith("file:///") && !url.includes("..") && !url.includes("\n");
}
function skipSet() {
  const set = /* @__PURE__ */ new Set();
  for (const line of (readTextFile(paths.pluginsSkipFile) ?? "").split("\n")) {
    const id = line.trim();
    if (id !== "" && !id.startsWith("#")) {
      set.add(id);
    }
  }
  return set;
}
function listPlugins() {
  const bin = resolveTool("omarchy");
  if (!bin) {
    return void 0;
  }
  const result = capture(bin, ["plugin", "list", "--json"]);
  if (result.code !== 0) {
    return void 0;
  }
  try {
    const data = JSON.parse(result.stdout);
    return Array.isArray(data) ? data : void 0;
  } catch {
    return void 0;
  }
}
function exportPlugins(dest, mode) {
  const listing = listPlugins();
  if (!listing) {
    if (mode === "check") {
      return false;
    }
    if (isFile(`${dest}/plugins.json`)) {
      log.warn("插件清单不可用;保留现有 plugins.json");
      return true;
    }
    writeFileSync(`${dest}/plugins.json`, "[]\n");
    log.warn("插件清单不可用;写入了空的 plugins.json");
    return true;
  }
  if (mode === "apply") {
    rmrf(`${dest}/plugins-local`);
  }
  const skip = skipSet();
  const records = [];
  for (const row of listing) {
    if (row.firstParty === true || typeof row.id !== "string") {
      continue;
    }
    const id = row.id;
    if (skip.has(id)) {
      log.info(`插件 ${id} 在 plugins-skip 里;不导出`);
      continue;
    }
    if (!validPluginId(id) || id === PLUGIN_ID) {
      continue;
    }
    const enabled = row.enabled === true;
    const dir = pluginDir(id);
    let url;
    let rev;
    if (isDir(`${dir}/.git`)) {
      url = gitOut(["-C", dir, "remote", "get-url", "origin"]);
      rev = gitOut(["-C", dir, "rev-parse", "--verify", "HEAD"]);
      if (!isFullSha(rev)) {
        rev = void 0;
      }
    }
    if (url && httpsPluginUrl(url) && rev) {
      records.push({ id, url, commit: rev, enabled, local: false });
    } else if (isDir(dir) && mode === "apply") {
      copyLocalPlugin(dir, `${dest}/plugins-local/${id}`);
      records.push({ id, url: "", commit: "", enabled, local: true });
    }
  }
  records.sort((a, b) => a.id < b.id ? -1 : 1);
  writeFileSync(`${dest}/plugins.json`, `${JSON.stringify(records, void 0, 2)}
`);
  return true;
}
function copyLocalPlugin(src, dest) {
  mkdirSync(dest, { recursive: true });
  rsync(["-a", "--delete", `--max-size=${MAX_FILE_SIZE}`, "--exclude", ".git/", "--exclude", "node_modules/", `${src}/`, `${dest}/`]);
  const find = resolveTool("find");
  const out = find ? capture(find, [dest, "-type", "l", "-print"]).stdout : "";
  for (const line of out.split("\n")) {
    if (line !== "") {
      try {
        unlinkSync(line);
        log.warn(`从插件快照移除符号链接: ${line.slice(dest.length + 1)}`);
      } catch {
      }
    }
  }
}
function installMissingPlugins(mirror, allowExec) {
  const file = `${mirror}/plugins.json`;
  if (!isFile(file)) {
    return true;
  }
  if (!allowExec) {
    log.warn("跳过插件安装;可执行内容恢复需要可信签名");
    return true;
  }
  let data;
  try {
    data = JSON.parse(readTextFile(file) ?? "[]");
  } catch {
    die("plugins.json 不是合法 JSON");
  }
  if (!Array.isArray(data)) {
    die("plugins.json 必须是数组");
  }
  const skip = skipSet();
  let failed = false;
  let installedAny = false;
  for (const row of data) {
    const id = typeof row["id"] === "string" ? row["id"] : "";
    const url = typeof row["url"] === "string" ? row["url"] : "";
    const rev = typeof row["commit"] === "string" ? row["commit"] : "";
    const enabled = row["enabled"] === true;
    if (!validPluginId(id)) {
      log.warn("跳过 id 非法的插件");
      continue;
    }
    if (id === PLUGIN_ID) {
      continue;
    }
    if (skip.has(id)) {
      log.info(`插件 ${id} 在 plugins-skip 里;不安装`);
      continue;
    }
    const dest = pluginDir(id);
    if (isDir(dest)) {
      if (rev !== "" && isDir(`${dest}/.git`)) {
        const head = gitOut(["-C", dest, "rev-parse", "--verify", "HEAD"]);
        if (head !== rev) {
          log.warn(`插件 ${id} 当前在 ${head ?? "unknown"},快照记录 ${rev};保持不动`);
        }
      }
      continue;
    }
    const tmp = `${mktempDir()}`;
    let okToInstall = false;
    if ((httpsPluginUrl(url) || localPluginUrl(url)) && isFullSha(rev)) {
      if (!git(["clone", "--quiet", "--no-checkout", url, `${tmp}/plugin`])) {
        log.warn(`克隆插件 ${id} 失败(${url})`);
        rmrf(tmp);
        failed = true;
        continue;
      }
      if (!git(["-C", `${tmp}/plugin`, "checkout", "--quiet", "--detach", rev])) {
        log.warn(`插件 ${id} 不含 commit ${rev}`);
        rmrf(tmp);
        failed = true;
        continue;
      }
      if (gitOut(["-C", `${tmp}/plugin`, "rev-parse", "--verify", "HEAD"]) !== rev) {
        log.warn(`插件 ${id} 检出的不是 ${rev}`);
        rmrf(tmp);
        failed = true;
        continue;
      }
      okToInstall = true;
    } else if (row["local"] === true && isDir(`${mirror}/plugins-local/${id}`)) {
      mkdirSync(`${tmp}/plugin`, { recursive: true });
      rsync(["-a", `${mirror}/plugins-local/${id}/`, `${tmp}/plugin/`]);
      okToInstall = true;
    } else {
      log.warn(`不安装插件 ${id};既没有钉住的 https commit 也没有本地快照`);
      rmrf(tmp);
      continue;
    }
    if (okToInstall) {
      if (!omarchy(["plugin", "validate", `${tmp}/plugin`])) {
        log.warn(`插件 ${id} 校验失败;不安装`);
        rmrf(tmp);
        failed = true;
        continue;
      }
      mkdirSync(`${HOME$2}/.config/omarchy/plugins`, { recursive: true });
      rmrf(dest);
      const mv = resolveTool("mv");
      if (!mv || capture(mv, [`${tmp}/plugin`, dest]).code !== 0) {
        log.warn(`移动插件 ${id} 到 ${dest} 失败`);
        rmrf(tmp);
        failed = true;
        continue;
      }
      rmrf(tmp);
      log.info(`已安装插件 ${id}`);
      installedAny = true;
      if (enabled && process.env["OMARSYNC_SKIP_LIVE"] !== "1" && !omarchy(["plugin", "enable", id])) {
        log.warn(`启用插件 ${id} 失败`);
      }
    }
  }
  if (installedAny && process.env["OMARSYNC_SKIP_LIVE"] !== "1" && resolveTool("omarchy-shell")) {
    if (!omarchyShell(["shell", "rescanPlugins"])) {
      log.warn("shell 插件重扫失败");
    }
  }
  return !failed;
}

const HOME$1 = homedir();
function pruneBackups() {
  const root = paths.backupDir;
  if (!isDir(root)) {
    return;
  }
  const names = readdirSync(root).sort();
  for (const name of names.slice(0, Math.max(0, names.length - BACKUP_KEEP))) {
    rmrf(`${root}/${name}`);
  }
}
function backupTree() {
  const date = resolveTool("date");
  const stamp = (date ? capture(date, ["+%Y%m%d-%H%M%S"]).stdout.trim() : "") || "unknown";
  const dest = `${paths.backupDir}/${stamp}`;
  for (const entry of readScope(paths.scopeFile)) {
    const src = `${HOME$1}/${entry.rel}`;
    if (exists(src) || isLink(src)) {
      const parent = `${dest}/home/${dirname(entry.rel)}`;
      mkdirSync(parent, { recursive: true });
      rsync(["-a", src, `${parent}/`]);
    }
  }
  const state = `${HOME$1}/.local/state/omarchy/current`;
  if (isDir(state)) {
    mkdirSync(`${dest}/current`, { recursive: true });
    const theme = readTextFile(`${state}/theme.name`);
    if (theme) {
      writeFileSync(`${dest}/current/theme.name`, theme);
    }
    const bg = `${state}/background`;
    if (isLink(bg) || exists(bg)) {
      const target = realpath$1(bg);
      if (target) {
        writeFileSync(`${dest}/current/background.path`, `${target}
`);
      }
    }
  }
  return dest;
}
function applyCurrent(mirror) {
  const theme = (readTextFile(`${mirror}/current/theme.name`) ?? "").replaceAll(/\s+/g, "");
  const background = (readTextFile(`${mirror}/current/background`) ?? "").replaceAll(/\s+/g, "");
  const state = `${HOME$1}/.local/state/omarchy/current`;
  let target = "";
  if (background.startsWith("rel:")) {
    target = `${HOME$1}/.config/omarchy/backgrounds/${background.slice(4)}`;
  } else if (background.startsWith("abs:")) {
    target = background.slice(4);
  }
  if (process.env["OMARSYNC_SKIP_LIVE"] === "1") {
    mkdirSync(state, { recursive: true });
    if (theme !== "") {
      writeFileSync(`${state}/theme.name`, `${theme}
`);
    }
    if (target !== "" && exists(target)) {
      rmrf(`${state}/background`);
      symlinkSync(target, `${state}/background`);
    }
    return true;
  }
  let failed = false;
  if (theme !== "") {
    log.info(`设置主题 ${theme}`);
    if (!omarchy(["theme", "set", theme])) {
      log.warn(`设置主题 ${theme} 失败`);
      failed = true;
    }
  }
  if (target !== "") {
    if (exists(target)) {
      log.info(`设置壁纸 ${target}`);
      if (!omarchy(["theme", "bg", "set", target])) {
        log.warn("设置壁纸失败");
        failed = true;
      }
    } else {
      log.warn(`壁纸文件不存在: ${target}`);
      failed = true;
    }
  }
  return !failed;
}
function hyprInstanceSignature() {
  const runtime = process.env["XDG_RUNTIME_DIR"] ?? "";
  if (!/^\/run\/user\/\d+/.test(runtime) || !isDir(`${runtime}/hypr`)) {
    return void 0;
  }
  const found = [];
  for (const name of readdirSync(`${runtime}/hypr`)) {
    if (/^[0-9a-f]+_[0-9]+_[0-9]+$/.test(name) && isDir(`${runtime}/hypr/${name}`) && isFile(`${runtime}/hypr/${name}/hyprland.lock`)) {
      found.push(name);
    }
  }
  return found.length === 1 ? found[0] : void 0;
}
function reloadDesktop() {
  if (process.env["OMARSYNC_SKIP_LIVE"] === "1") {
    return;
  }
  if (resolveTool("omarchy-shell")) {
    if (!omarchyShell(["shell", "reloadConfig"])) {
      log.warn("shell reload 失败");
    }
  }
  const hyprctl = resolveTool("hyprctl");
  if (!hyprctl) {
    return;
  }
  const sig = hyprInstanceSignature();
  if (!sig) {
    log.warn("跳过 hyprctl reload;这个用户没有唯一的 Hyprland 会话");
    return;
  }
  const result = capture(hyprctl, ["reload"], [
    `XDG_RUNTIME_DIR=${process.env["XDG_RUNTIME_DIR"] ?? ""}`,
    `HYPRLAND_INSTANCE_SIGNATURE=${sig}`
  ]);
  if (result.code !== 0) {
    log.warn("hyprctl reload 失败");
  }
}
function assertPinned(mirror, sha) {
  if (!isFullSha(sha)) {
    die("拒绝激活未钉住的版本");
  }
  const head = gitOut(["-C", mirror, "rev-parse", "--verify", "HEAD"]);
  if (head !== sha) {
    die(`镜像 HEAD ${head ?? "?"} 不是审阅过的 commit ${sha}`);
  }
  if (gitCapture(["-C", mirror, "symbolic-ref", "-q", "HEAD"]).ok) {
    die("镜像挂在分支上,拒绝应用");
  }
}
function syncDotfiles() {
  if (!available()) {
    log.warn("mise 未安装;跳过 dotfiles。运行: omarchy pkg add mise");
    return false;
  }
  const fetch = sync(true);
  if (!fetch.ok) {
    log.warn(`mise fetch 失败: ${fetch.out}`);
    return false;
  }
  const pull$1 = pull({ takeRemoteAll: true });
  if (!pull$1.ok) {
    log.warn(`mise pull 失败: ${pull$1.out}`);
    log.warn("解决冲突: mise dot conflicts / mise dot pull --take-remote-all");
    return false;
  }
  return true;
}
function applyMirror(mirror, withPackages, sha, withExec) {
  assertPinned(mirror, sha);
  log.info(`激活 commit ${sha}`);
  const backup = backupTree();
  log.info(`已备份现有文件到 ${backup}`);
  let failed = false;
  if (!syncDotfiles()) {
    failed = true;
  }
  if (!applyCurrent(mirror)) {
    failed = true;
  }
  reloadDesktop();
  if (withPackages) {
    if (!installMissingPackages(mirror)) {
      failed = true;
    }
  } else {
    log.info("跳过官方包安装");
  }
  if (!installMissingPlugins(mirror, withExec)) {
    failed = true;
  }
  if (!refreshUserServices()) {
    failed = true;
  }
  if (!runHooks(mirror, withExec)) {
    failed = true;
  }
  assertPinned(mirror, sha);
  pruneBackups();
  return !failed;
}
function showChanges(mirror, sha) {
  const applied = (readTextFile(appliedStampFile()) ?? "").trim();
  if (!isFullSha(applied)) {
    log.info("没有应用过的 commit;这份快照将整体应用");
    return;
  }
  if (applied === sha) {
    log.info("这台机器已经应用过这个 commit");
    return;
  }
  if (!gitCapture(["-C", mirror, "cat-file", "-e", `${applied}^{commit}`]).ok) {
    log.info(`上次应用的 commit ${applied} 不在镜像里;无法 diff`);
    return;
  }
  log.info(`自上次应用的 commit ${applied.slice(0, 12)} 以来的更改:`);
  const logOut = gitOut(["-C", mirror, "log", "--oneline", "--no-decorate", `${applied}..${sha}`]);
  if (logOut && /\S/.test(logOut)) {
    for (const line of logOut.split("\n")) {
      log.info(`  commit ${line}`);
    }
  }
  const stat = gitOut(["-C", mirror, "diff", "--stat", applied, sha]);
  if (stat && /\S/.test(stat)) {
    for (const line of stat.split("\n")) {
      log.info(`  ${line}`);
    }
  } else {
    log.info("  (元数据无变化)");
  }
  for (const file of ["plugins.json", "packages/pacman.txt", "packages/flatpak.txt", "current/theme.name", "current/background"]) {
    const d = gitOut(["-C", mirror, "diff", "--color=never", applied, sha, "--", file]);
    if (d && /\S/.test(d)) {
      process.stdout.write(`${d}
`);
    }
  }
}
function previewApply(mirror, sha, withExec) {
  log.info(`commit ${sha}`);
  log.info("文件(mise dot 跟踪):");
  for (const entry of readScope(paths.scopeFile)) {
    log.info(`  ${entry.rel}`);
  }
  if (available()) {
    const { out } = pull({ dryRun: true, takeRemoteAll: true });
    if (/\S/.test(out)) {
      for (const line of out.split("\n")) {
        log.info(`  ${line}`);
      }
    }
  }
  const pac = readTextFile(`${mirror}/packages/pacman.txt`);
  if (pac) {
    const n = pac.split("\n").filter((line) => line.trim() !== "").length;
    log.info(`官方包清单: ${n} 个`);
  }
  const fp = readTextFile(`${mirror}/packages/flatpak.txt`);
  if (fp) {
    log.info("flatpak:");
    for (const line of fp.split("\n")) {
      const app = /^([^\t]+)/.exec(line)?.[1];
      if (app && app !== "") {
        log.info(`  ${app}`);
      }
    }
  }
  const pj = readTextFile(`${mirror}/plugins.json`);
  if (pj) {
    try {
      const data = JSON.parse(pj);
      if (Array.isArray(data)) {
        log.info("插件:");
        for (const row of data) {
          const note = row["local"] === true ? "(本地快照)" : typeof row["commit"] === "string" ? row["commit"] : "";
          log.info(`  ${String(row["id"])} ${note}`);
        }
      }
    } catch {
    }
  }
  for (const name of listHooks(mirror)) {
    log.info(`hook ${name}`);
  }
  if (!withExec) {
    log.info("插件与 hooks 不会执行");
  }
}

function requireMirror$2() {
  if (!isDir(`${paths.mirrorDir}/.git`)) {
    die("未初始化。运行: omarsync init");
  }
  return paths.mirrorDir;
}
async function executeApply(options) {
  const expected = options.commit ?? "";
  if (!isFullSha(expected)) {
    die("apply 需要 --commit <40位sha>(你审阅过的那个 commit)");
  }
  const mirror = requireMirror$2();
  const branch = configGet("BRANCH", readTextFile) ?? "main";
  const sha = resolveRemoteSha(mirror, branch);
  if (sha !== expected) {
    die(`origin/${branch} 现在是 ${sha},不是你审阅的 ${expected}`);
  }
  let force = options.force === true;
  if (force) {
    log.warn(`强制应用 ${sha};跳过了签名检查`);
  } else {
    const first = firstApplyAvailable();
    if (!commitIsTrusted(mirror, sha)) {
      if (first) {
        acceptFirstApply(mirror, sha);
      } else if (await confirm(`commit ${sha} 不可信。仍要应用吗?只应用配置;插件与 hooks 保持关闭。`)) {
        force = true;
        log.warn(`强制应用 ${sha};跳过了签名检查`);
      } else {
        await trustSignerOfCommit(mirror, sha, options.trustSigner === true);
      }
    }
    if (!commitIsTrusted(mirror, sha) && !first && !force) {
      requireTrustedCommit(mirror, sha);
    }
  }
  checkoutPinnedCommit(mirror, sha);
  let withExec = false;
  if (force || options.noExec === true) {
    log.info("插件与 hooks 将被跳过");
  } else if (commitIsTrusted(mirror, sha)) {
    withExec = true;
    log.info(`已审阅签名 commit ${sha}`);
  } else {
    log.info(`已审阅首个 commit ${sha};签名之前插件与 hooks 保持关闭`);
  }
  if (available()) {
    sync(true);
  }
  showChanges(mirror, sha);
  previewApply(mirror, sha, withExec);
  if (!await confirm("应用这份快照?")) {
    die("快照未应用");
  }
  if (applyMirror(mirror, options.noPackages !== true, sha, withExec)) {
    markApplied(sha);
    log.info(`已应用 ${sha}`);
    return;
  }
  log.warn(`应用 ${sha} 完成但有错误;配置已写入,备份已保留`);
  process.exitCode = 1;
}

function executeConflicts() {
  if (!available()) {
    die("mise 未安装。运行: omarchy pkg add mise");
  }
  const { out } = conflicts();
  if (!/\S/.test(out)) {
    log.info("没有同步冲突");
    return;
  }
  for (const line of out.split("\n")) {
    log.info(`  ${line}`);
  }
  log.info("解决方式:编辑对应文件后运行 mise dot save;或整体采用远程: mise dot pull --take-remote-all");
  const editor = process.env["VISUAL"] ?? process.env["EDITOR"];
  if (!editor || !stdinIsTty()) {
    return;
  }
  const home = process.env["HOME"] ?? "";
  const files = out.split("\n").map((line) => line.trim()).filter((line) => line.startsWith("~/") || line.startsWith(`${home}/`));
  if (files.length === 0) {
    return;
  }
  log.info(`用 ${editor} 打开 ${files.length} 个冲突文件`);
  const quoted = files.map((f) => `'${(f.startsWith("~/") ? `${home}/${f.slice(2)}` : f).replaceAll("'", "'\\''")}'`).join(" ");
  spawnSync(`${editor} ${quoted}`, { shell: true, stdio: "inherit" });
}

function executeDoctor() {
  let missing = false;
  for (const tool of ["git", "rsync", "node", "mise"]) {
    if (resolveTool(tool)) {
      log.info(`ok  ${tool}`);
    } else {
      log.warn(`missing ${tool}${tool === "mise" ? "。运行: omarchy pkg add mise" : ""}`);
      missing = true;
    }
  }
  if (ghInstalled()) {
    if (ghLoggedIn()) {
      log.info(`ok  gh (${githubUser() ?? "?"})`);
    } else {
      log.warn("gh 已安装但未登录。运行: omarsync login");
    }
  } else {
    log.warn("missing gh。运行: omarchy pkg add github-cli");
    missing = true;
  }
  if (available()) {
    if (featureOk()) {
      log.info("ok  mise dot");
    } else {
      log.warn("mise dot 不工作;检查 `mise dot status`");
      missing = true;
    }
    if (originConnected()) {
      log.info("ok  mise dot origin 已连接");
    } else {
      log.warn("mise dot origin 未连接。运行: omarsync init");
    }
  }
  if (isDir(`${paths.mirrorDir}/.git`)) {
    const repo = configGet("REPO", readTextFile) ?? "";
    const branch = configGet("BRANCH", readTextFile) ?? "main";
    log.info(`ok  镜像 ${paths.mirrorDir}(${repo} ${branch})`);
  } else {
    log.warn("镜像未初始化。运行: omarsync init");
  }
  return missing ? 1 : 0;
}

function validRepoName(name) {
  return /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(name);
}
function ensureDotfilesRepo() {
  if (!available()) {
    log.warn("mise 未安装;跳过 dotfiles 仓库。运行: omarchy pkg add mise");
    return;
  }
  if (originConnected()) {
    return;
  }
  const url = dotOriginUrl();
  if (!process.env["OMARSYNC_DOT_ORIGIN"] && !process.env["OMARSYNC_ORIGIN"]) {
    const dotRepo = dotRepoName();
    const name = dotRepo.split("/").pop() ?? dotRepo;
    if (!ghCapture(["repo", "view", dotRepo]).ok) {
      log.info(`创建私有仓库 ${dotRepo}`);
      gh(["repo", "create", name, "--private", "--description", "Omarchy dotfiles synced by omarsync via mise"]);
    }
  }
  if (!originSet(url, "main")) {
    log.warn(`无法连接 mise dot origin ${url}`);
    return;
  }
  log.info(`已连接 mise dot origin ${url}`);
  if (incomingPending()) {
    const pull$1 = pull({ takeRemoteAll: true });
    if (!pull$1.ok) {
      log.warn(`mise adopt pull 失败: ${pull$1.out}`);
    }
  } else {
    reconcile(readScope(paths.scopeFile));
  }
}
function executeInit(repoArg) {
  let repo = repoArg ?? "";
  const user = githubUser();
  if (!process.env["OMARSYNC_ORIGIN"]) {
    if (!ghInstalled()) {
      die("GitHub CLI 未安装。运行: omarchy pkg add github-cli");
    }
    if (!ghLoggedIn()) {
      die("未登录 GitHub。运行: omarsync login");
    }
    if (!user) {
      die("读取不到 GitHub 用户");
    }
    if (repo === "") {
      repo = `${user}/omarchy-config`;
    }
    if (!validRepoName(repo)) {
      die(`仓库名必须形如 owner/name: ${repo}`);
    }
    if (!ghCapture(["repo", "view", repo]).ok) {
      const [owner, name] = repo.split("/");
      if (owner !== user) {
        die(`仓库 ${repo} 不存在,也不属于 ${user}`);
      }
      log.info(`创建私有仓库 ${repo}`);
      gh(["repo", "create", name, "--private", "--description", "Omarchy configuration synced by omarsync"]);
    }
  } else {
    if (repo === "") {
      repo = "local/omarchy-config";
    }
    if (!validRepoName(repo)) {
      die(`仓库名必须形如 owner/name: ${repo}`);
    }
  }
  const branch = "main";
  const url = process.env["OMARSYNC_ORIGIN"] || `https://github.com/${repo}.git`;
  const mirror = paths.mirrorDir;
  mkdirSync(paths.stateDir, { recursive: true });
  if (isDir(`${mirror}/.git`)) {
    if (gitOut(["-C", mirror, "remote", "get-url", "origin"])) {
      git(["-C", mirror, "remote", "set-url", "origin", url]);
    } else {
      git(["-C", mirror, "remote", "add", "origin", url]);
    }
  } else {
    mkdirSync(mirror, { recursive: true });
    git(["-C", mirror, "init", "-b", branch]);
    git(["-C", mirror, "remote", "add", "origin", url]);
    if (git(["-C", mirror, "fetch", "--quiet", "origin", branch]) && gitOut(["-C", mirror, "rev-parse", "--verify", "--quiet", `refs/remotes/origin/${branch}^{commit}`])) {
      const sha = gitOut(["-C", mirror, "rev-parse", "--verify", `refs/remotes/origin/${branch}^{commit}`]);
      checkoutPinnedCommit(mirror, sha);
      log.info(`已钉住 ${sha}`);
    } else {
      log.info(`远程分支 ${branch} 是空的`);
    }
  }
  ensureLocalScope(new URL("../..", import.meta.url).pathname);
  ensureIdentity(mirror);
  configSet("REPO", repo);
  configSet("BRANCH", branch);
  log.info(`已初始化 ${repo} 于 ${mirror}`);
  ensureDotfilesRepo();
}

function executeLogin() {
  if (!ghInstalled()) {
    die("GitHub CLI 未安装。运行: omarchy pkg add github-cli");
  }
  if (ghLoggedIn()) {
    log.info(`已登录 ${githubUser() ?? "?"}`);
    gh(["auth", "setup-git"]);
    return;
  }
  if (!stdinIsTty()) {
    die("GitHub 登录需要终端。运行: omarsync login");
  }
  gh(["auth", "login", "-h", "github.com", "-p", "https", "-w"]);
  gh(["auth", "setup-git"]);
  log.info(`已登录 ${githubUser() ?? "?"}`);
}

function executeMigrate() {
  if (!isDir(`${paths.mirrorDir}/.git`)) {
    die("未初始化。运行: omarsync init");
  }
  const mirror = paths.mirrorDir;
  const branch = configGet("BRANCH", readTextFile) ?? "main";
  log.info("迁移到 mise dot 布局");
  ensureDotfilesRepo();
  if (available() && originConnected()) {
    reconcile(readScope(paths.scopeFile));
    if (save() === void 0) {
      die("迁移过程中 mise dot save 失败");
    }
    const { ok, out } = sync(false);
    if (!ok) {
      die(`迁移过程中 mise dot sync 失败: ${out}`);
    }
  } else {
    log.warn("mise dot origin 未连接;dotfiles 未迁移");
  }
  if (isDir(`${mirror}/home`)) {
    git(["-C", mirror, "rm", "-rq", "home"]);
    git(["-C", mirror, "commit", "-S", "-m", "drop file mirror; dotfiles moved to mise history"]);
    git(["-C", mirror, "push", "--quiet", "-u", "origin", `HEAD:${branch}`]);
    log.info("已移除旧文件镜像(仍可从 git 历史找回)");
  }
  log.info(`迁移完成;旧备份在 ${paths.backupDir},可手动删除`);
}

function requireMirror$1() {
  if (!isDir(`${paths.mirrorDir}/.git`)) {
    die("未初始化。运行: omarsync init");
  }
  return paths.mirrorDir;
}
function executePull() {
  const mirror = requireMirror$1();
  const branch = configGet("BRANCH", readTextFile) ?? "main";
  const sha = resolveRemoteSha(mirror, branch);
  checkoutPinnedCommit(mirror, sha);
  if (available()) {
    sync(true);
  }
  log.info(`已钉住 ${sha}`);
  log.info("下一步: omarsync apply --commit " + sha + "(会先展示更改再请你确认)");
}

const HOME = homedir();
function exportCurrent(dest) {
  const state = `${HOME}/.local/state/omarchy/current`;
  mkdirSync(`${dest}/current`, { recursive: true });
  writeFileSync(`${dest}/current/theme.name`, readTextFile(`${state}/theme.name`) ?? "");
  let record = "";
  const bg = `${state}/background`;
  const target = isLink(bg) || exists(bg) ? realpath$1(bg) : void 0;
  const base = `${HOME}/.config/omarchy/backgrounds`;
  if (target?.startsWith(`${base}/`)) {
    record = `rel:${target.slice(base.length + 1)}`;
  } else if (target) {
    record = `abs:${target}`;
  }
  writeFileSync(`${dest}/current/background`, `${record}
`);
}
function writeMeta(dest, miseHead) {
  let version = "unknown";
  const vf = `${process.env["OMARCHY_PATH"] ?? "/usr/share/omarchy"}/version`;
  const v = readTextFile(vf);
  if (v) {
    version = v.replaceAll(/\s+/g, "");
  }
  const data = {
    schemaVersion: 2,
    host: hostnameSafe(),
    omarchyVersion: version,
    pushedAt: iso8601(),
    miseHead: miseHead ?? null
  };
  writeFileSync(`${dest}/omarsync.json`, `${JSON.stringify(data)}
`);
}
function collectInto(dest, miseHead) {
  discardRemoteScope(dest);
  exportCurrent(dest);
  exportPackages(dest);
  exportPlugins(dest, "apply");
  exportHooks(dest);
  writeMeta(dest, miseHead);
}
function treesDiffer(left, right) {
  if (isDir(left) || isDir(right)) {
    const diff = resolveTool("diff");
    if (!diff) {
      return true;
    }
    return capture(diff, ["-rq", left, right]).code !== 0;
  }
  if (!isFile(left) && !isFile(right)) {
    return false;
  }
  const cmp = resolveTool("cmp");
  if (!cmp) {
    return true;
  }
  return capture(cmp, ["-s", left, right]).code !== 0;
}
function mirrorDirty(mirror) {
  const tmp = mktempDir();
  try {
    exportCurrent(tmp);
    exportPackages(tmp);
    const pluginsKnown = exportPlugins(tmp, "check");
    let dirty = treesDiffer(`${mirror}/current`, `${tmp}/current`);
    if (!dirty && treesDiffer(`${mirror}/packages`, `${tmp}/packages`)) {
      dirty = true;
    }
    if (!dirty && pluginsKnown) {
      if (treesDiffer(`${mirror}/plugins.json`, `${tmp}/plugins.json`)) {
        dirty = true;
      }
      if (!dirty && (isDir(`${mirror}/plugins-local`) || isDir(`${tmp}/plugins-local`))) {
        if (treesDiffer(`${mirror}/plugins-local`, `${tmp}/plugins-local`)) {
          dirty = true;
        }
      }
    }
    if (!dirty) {
      const out = gitOut(["-C", mirror, "status", "--porcelain"]);
      if (out && /\S/.test(out)) {
        dirty = true;
      }
    }
    return dirty;
  } finally {
    rmrf(tmp);
  }
}

function requireMirror() {
  if (!isDir(`${paths.mirrorDir}/.git`)) {
    die("未初始化。运行: omarsync init");
  }
  return paths.mirrorDir;
}
function remoteHasBranch(mirror, branch) {
  return gitCapture(["-C", mirror, "ls-remote", "--exit-code", "--heads", "origin", branch]).ok;
}
async function executePush(skipConfirm = false) {
  const mirror = requireMirror();
  const branch = configGet("BRANCH", readTextFile) ?? "main";
  ensurePushSigner();
  ensureIdentity(mirror);
  preparePushBranch(mirror, branch);
  let miseHead;
  if (available()) {
    reconcile(readScope(paths.scopeFile));
    const saved = save();
    if (saved === void 0) {
      die("mise dot save 失败");
    }
    if (saved) {
      log.info("mise dot 检查点已保存");
    }
    miseHead = headSnapshot();
  } else {
    log.warn("mise 未安装;只推元数据。运行: omarchy pkg add mise");
  }
  collectInto(mirror, miseHead);
  git(["-C", mirror, "add", "-A"]);
  const metaDiff = gitCapture(["-C", mirror, "diff", "--cached", "--stat"]);
  if (/\S/.test(metaDiff.out)) {
    log.info("元数据变化:");
    for (const line of metaDiff.out.split("\n")) {
      log.info(`  ${line}`);
    }
  } else {
    log.info("元数据无变化");
  }
  if (available()) {
    const { out } = diff();
    if (/\S/.test(out)) {
      log.info("文件差异(mise dot diff):");
      for (const line of out.split("\n")) {
        log.info(`  ${line}`);
      }
    }
  }
  if (!skipConfirm && !await confirm("发布这份快照到远程仓库?")) {
    die("已取消,未推送");
  }
  if (gitCapture(["-C", mirror, "diff", "--cached", "--quiet"]).ok) {
    log.info("没有要提交的本地变化");
  } else {
    git(["-C", mirror, "commit", "-S", "-m", `sync from ${hostnameSafe()} @ ${iso8601()}`]);
    log.info("已提交本地变化");
  }
  if (remoteHasBranch(mirror, branch)) {
    if (!git(["-C", mirror, "pull", "--quiet", "--rebase", "-X", "theirs", "origin", branch])) {
      git(["-C", mirror, "rebase", "--abort"]);
      die(`rebase 到 origin/${branch} 失败`);
    }
  }
  discardRemoteScope(mirror);
  if (!gitCapture(["-C", mirror, "diff", "--cached", "--quiet"]).ok) {
    git(["-C", mirror, "commit", "-S", "-m", "drop untrusted remote scope file"]);
  }
  signUntrustedTip(mirror);
  if (!git(["-C", mirror, "push", "--quiet", "-u", "origin", `HEAD:${branch}`])) {
    die("git push 失败");
  }
  log.info(`已推送 ${branch}`);
  if (available()) {
    const { ok, out } = sync(false);
    if (!ok) {
      log.warn(`mise dot sync 失败: ${out}`);
      log.warn("解决冲突: mise dot conflicts / mise dot pull --take-remote <path>");
      process.exitCode = 1;
      return;
    }
    log.info("mise dot 历史已发布");
  }
  notify("Omarsync", `已推送 ${configGet("REPO", readTextFile) ?? ""}`);
}

function executeSetup() {
  if (!stdinIsTty()) {
    die("setup 需要终端。运行: omarsync setup");
  }
  if (!available()) {
    log.info("安装 mise");
    if (!omarchy(["pkg", "add", "mise"])) {
      die("安装 mise 失败");
    }
  }
  if (!ghInstalled()) {
    log.info("安装 GitHub CLI");
    if (!omarchy(["pkg", "add", "github-cli"])) {
      die("安装 github-cli 失败");
    }
  }
  if (!ghLoggedIn()) {
    executeLogin();
  }
  if (!isDir(`${paths.mirrorDir}/.git`)) {
    executeInit(void 0);
  } else {
    ensureDotfilesRepo();
  }
  const sha = gitOut(["-C", paths.mirrorDir, "rev-parse", "--verify", "--quiet", "refs/remotes/origin/main^{commit}"]);
  if (sha) {
    log.info(`仓库已有 commit ${sha}`);
    log.info("打开面板选择 apply(先审阅再应用)");
  } else {
    log.info("仓库是空的");
    log.info("打开面板选择 push");
  }
}

function readCounts(mirror, branch) {
  const ls = gitCapture(["-C", mirror, "ls-remote", "--exit-code", "--heads", "origin", branch]);
  if (ls.code === 2) {
    return [0, 0, ""];
  }
  if (!ls.ok || !gitCapture(["-C", mirror, "fetch", "--quiet", "origin", branch]).ok) {
    return void 0;
  }
  let sha = gitOut(["-C", mirror, "rev-parse", "--verify", `refs/remotes/origin/${branch}^{commit}`]);
  if (!isFullSha(sha)) {
    sha = void 0;
  }
  const head = gitOut(["-C", mirror, "rev-parse", "--verify", "--quiet", "HEAD"]);
  if (!head) {
    const remoteCount = sha ? Number(gitOut(["-C", mirror, "rev-list", "--count", sha]) ?? 0) : 0;
    return [remoteCount, 0, sha ?? ""];
  }
  if (!sha) {
    return [0, 0, ""];
  }
  const behind = Number(gitOut(["-C", mirror, "rev-list", "--count", `HEAD..${sha}`]) ?? 0);
  const ahead = Number(gitOut(["-C", mirror, "rev-list", "--count", `${sha}..HEAD`]) ?? 0);
  return [behind, ahead, sha];
}
function isRunning() {
  const flock = resolveTool("flock");
  if (!flock) {
    return false;
  }
  mkdirSync(dirname(paths.lockFile), { recursive: true });
  return !run(flock, ["-n", paths.lockFile, "-c", "true"]);
}
function miseDirty() {
  if (!available() || !featureOk()) {
    return false;
  }
  return save() === true;
}
function changedFiles() {
  const repo = join(homedir(), ".local", "state", "mise", "history", "repo.git");
  if (!isDir(repo)) {
    return [];
  }
  const out = gitOut([`--git-dir=${repo}`, "show", "--name-only", "--format=", "HEAD"]) ?? "";
  const files = [];
  const seen = /* @__PURE__ */ new Set();
  for (const line of out.split("\n")) {
    const rel = line.replace(/^home\//, "");
    if (rel !== "" && !seen.has(rel)) {
      seen.add(rel);
      files.push(rel);
      if (files.length >= 30) {
        break;
      }
    }
  }
  return files;
}
function collect() {
  const st = {
    ghInstalled: false,
    loggedIn: false,
    user: "",
    repo: configGet("REPO", readTextFile) ?? "",
    branch: configGet("BRANCH", readTextFile) ?? "main",
    initialized: false,
    dirty: false,
    behind: null,
    ahead: null,
    remoteCommit: "",
    pinnedCommit: "",
    remoteSigned: false,
    remoteSignature: "none",
    signerFingerprint: "",
    hasTrustedKeys: false,
    firstApply: false,
    lastPush: { host: "", time: "", omarchyVersion: "" },
    running: false,
    error: "",
    miseConnected: false,
    changedFiles: []
  };
  if (ghInstalled()) {
    st.ghInstalled = true;
    if (ghLoggedIn()) {
      st.loggedIn = true;
      st.user = githubUser() ?? "";
    }
  }
  if (isRunning()) {
    st.running = true;
  }
  if (available()) {
    st.miseConnected = originConnected();
  }
  if (isDir(`${paths.mirrorDir}/.git`)) {
    st.initialized = true;
    const mirror = paths.mirrorDir;
    if (!st.running) {
      let dirty = mirrorDirty(mirror);
      if (!dirty) {
        dirty = miseDirty();
        if (dirty) {
          st.changedFiles = changedFiles();
        }
      }
      st.dirty = dirty;
      const counts = readCounts(mirror, st.branch);
      if (counts) {
        const [behind, ahead, tip] = counts;
        st.behind = behind;
        st.ahead = ahead;
        if (isFullSha(tip)) {
          st.remoteCommit = tip;
          st.hasTrustedKeys = trustedKeysPresent();
          const { state, fingerprint } = commitSignatureState(mirror, tip);
          st.remoteSignature = state;
          st.signerFingerprint = fingerprint;
          st.remoteSigned = state === "trusted";
          st.firstApply = firstApplyAvailable();
        }
      } else {
        st.error = "could not fetch origin";
      }
      if (!gitCapture(["-C", mirror, "symbolic-ref", "-q", "HEAD"]).ok) {
        const head = gitOut(["-C", mirror, "rev-parse", "--verify", "HEAD"]);
        if (isFullSha(head)) {
          st.pinnedCommit = head;
        }
      }
    }
    const metaRaw = readTextFile(join(mirror, "omarsync.json"));
    if (metaRaw) {
      try {
        const data = JSON.parse(metaRaw);
        st.lastPush.host = typeof data.host === "string" ? data.host : "";
        st.lastPush.time = typeof data.pushedAt === "string" ? data.pushedAt : "";
        st.lastPush.omarchyVersion = typeof data.omarchyVersion === "string" ? data.omarchyVersion : "";
      } catch {
      }
    }
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
  log.info(`mirror: ${st.initialized ? "ready" : "not initialized"}`);
  log.info(`mise dot: ${st.miseConnected ? "connected" : "not connected"}`);
  log.info(`local changes: ${st.dirty ? "yes" : "no"}`);
  log.info(`behind: ${String(st.behind)}  ahead: ${String(st.ahead)}`);
  if (st.remoteCommit !== "") {
    log.info(`signature: ${st.remoteSignature}${st.signerFingerprint === "" ? "" : ` ${st.signerFingerprint}`}`);
  }
  if (st.lastPush.time !== "") {
    log.info(`last push: ${st.lastPush.time} from ${st.lastPush.host}`);
  }
  if (st.error !== "") {
    log.warn(st.error);
  }
}

const cli = a$2("omarsync", {
  packageName: "omarsync",
  packageVersion: "2.0.0"
});
cli.addCommand({
  name: "status",
  description: "显示同步状态(仓库、镜像、本机策略)",
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
  name: "doctor",
  description: "依赖体检(git/rsync/node/mise/gh、镜像与 dotfiles 仓库)",
  execute: () => {
    process.exitCode = executeDoctor();
  }
});
cli.addCommand({
  name: "pull",
  description: "只抓取远程快照并钉住 commit,不写任何活文件(下一步用 apply 审阅)",
  execute: () => {
    executePull();
  }
});
cli.addCommand({
  name: "push",
  description: "手动存检查点,展示元数据与文件 diff,确认后签名并发布",
  options: [
    {
      name: "yes",
      type: Boolean,
      description: "跳过发布确认(供面板自动推送使用)"
    }
  ],
  execute: async ({ options }) => {
    await executePush(options["yes"] === true);
  }
});
cli.addCommand({
  name: "login",
  description: "登录 GitHub(浏览器流程)",
  execute: () => {
    executeLogin();
  }
});
cli.addCommand({
  name: "init",
  description: "初始化:创建/连接元数据仓库与 dotfiles 仓库",
  options: [
    {
      name: "repo",
      type: String,
      description: "仓库名,形如 owner/name(默认 <你>/omarchy-config)"
    }
  ],
  execute: ({ options }) => {
    executeInit(typeof options["repo"] === "string" ? options["repo"] : void 0);
  }
});
cli.addCommand({
  name: "setup",
  description: "一键装机引导:装依赖、登录 GitHub、初始化仓库",
  execute: () => {
    executeSetup();
  }
});
cli.addCommand({
  name: "migrate",
  description: "老格式迁移:home/ 镜像目录搬到 mise dot 历史",
  execute: () => {
    executeMigrate();
  }
});
cli.addCommand({
  name: "apply",
  description: "审阅自上次应用以来的全部更改,确认后才写入(需要 --commit)",
  options: [
    {
      name: "commit",
      type: String,
      description: "你审阅过的 40 位 commit sha(必填)"
    },
    {
      name: "no-packages",
      type: Boolean,
      description: "跳过官方包安装"
    },
    {
      name: "no-exec",
      type: Boolean,
      description: "跳过插件与 hooks"
    },
    {
      name: "trust-signer",
      type: Boolean,
      description: "信任这个 commit 的签名者(免确认)"
    },
    {
      name: "force",
      type: Boolean,
      description: "跳过签名检查,只应用配置(插件与 hooks 关闭)"
    }
  ],
  execute: async ({ options }) => {
    await executeApply({
      commit: typeof options["commit"] === "string" ? options["commit"] : void 0,
      noPackages: options["no-packages"] === true,
      noExec: options["no-exec"] === true,
      trustSigner: options["trust-signer"] === true,
      force: options["force"] === true
    });
  }
});
cli.addCommand({
  name: "conflicts",
  description: "列出 mise dot 同步冲突,用本机编辑器打开审阅",
  execute: () => {
    executeConflicts();
  }
});
cli.addCommand({
  name: "trust-key",
  description: "把一把 ssh 公钥加入信任名单(可附私钥作为签名密钥)",
  options: [
    {
      name: "pubkey",
      type: String,
      description: "ssh 公钥文件路径(必填)"
    },
    {
      name: "privkey",
      type: String,
      description: "对应私钥路径(可选)"
    }
  ],
  execute: ({ options }) => {
    cmdTrustKey(
      typeof options["pubkey"] === "string" ? options["pubkey"] : void 0,
      typeof options["privkey"] === "string" ? options["privkey"] : void 0
    );
  }
});
cli.addCommand({
  name: "scope-path",
  description: "打印本机 scope 文件路径(不存在则从示例复制一份)",
  execute: () => {
    const root = new URL("../..", import.meta.url).pathname;
    try {
      ensureLocalScope(root);
    } catch {
      die(`scope 示例不存在: ${root}/omarsync.scope.example`);
    }
    process.stdout.write(`${paths.scopeFile}
`);
  }
});
await cli.run();
