import { Ud, ru, Ql, QY, GY, xY, PY, KY, AY, OY, EY, qY, UY, ik, ek, ak, gk, tk, hk, lk, yk, bk, wk, mk, Ck, Hk, Qk, Gk, xk, Pk, Kk, Ak, Ok, Ek, qk, Uk, iL, eL, aL, gL, tL, hL, lL, yL, bL, wL, mL, YL, LL, SL, CL, HL, TL, QL, GL, xL, PL, KL, AL, OL, EL, qL, UL, iZ, eZ, aZ, gZ, tZ, hZ, lZ, yZ, bZ, wZ, mZ, YZ, LZ, SZ, CZ, HZ, TZ, QZ, GZ, xZ, PZ, KZ, AZ, OZ, EZ, qZ, UZ, i1, e1, a1, g1, t1, h1, l1, y1, b1, w1, m1, Y1, L1, S1, C1, H1, T1, Q1, G1, x1, P1, K1, A1, O1, E1, q1, U1, iS, eS, aS, gS, tS, hS, lS, yS, bS, wS, mS, YS, LS, SS, CS, HS, TS, QS, GS, xS, PS, KS, AS, OS, ES, qS, US, iJ, eJ, aJ, gJ, tJ, hJ, lJ, yJ, bJ, wJ, mJ, YJ, LJ, SJ, CJ, HJ, TJ, QJ, GJ, xJ, PJ, KJ, AJ, OJ, EJ, qJ, UJ } from "./interact-Bvij7loV.parts.js";
import { createRequire } from 'node:module';

let Ed;
const $d = (i) => (Ed ??= createRequire(import.meta.url))(i);
const $i = typeof globalThis < "u" && typeof globalThis.process < "u" ? globalThis.process : process;
const qe = (i) => {
  if (typeof $i < "u" && $i.versions && $i.versions.node) {
    const [o, e] = $i.versions.node.split(".").map(Number);
    if (o > 22 || o === 22 && e >= 3 || o === 20 && e >= 16) return $i.getBuiltinModule(i);
  }
  return $d(i);
};
const Pi = $i;
const { execFileSync: qd } = qe("node:child_process");
const co = qe("node:fs");
const Id = qe("node:tty");
const Vd = 12288;
const it$1 = 65510;
const ot$1 = [12288, 12288, 65281, 65376, 65504, 65510];
const et$1 = 8361;
const nt$1 = 65518;
const at$1 = [8361, 8361, 65377, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500, 65512, 65518];
const ut = 32;
const gt = 10630;
const dt = [32, 126, 162, 163, 165, 166, 172, 172, 175, 175, 10214, 10221, 10629, 10630];
const tt$1 = 4352;
const st$1 = 262141;
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
const $n = 19968;
const [ht, rt$1] = lt$1(ru);
function lt$1(i) {
  let o = i[0], e = i[1];
  for (let n = 0; n < i.length; n += 2) {
    const a = i[n], u = i[n + 1];
    if ($n >= a && $n <= u) return [a, u];
    u - a > e - o && (o = a, e = u);
  }
  return [o, e];
}
const vt = (i) => i < 161 || i > 1114109 ? false : Lo(Ud, i);
const yt = (i) => i < Vd || i > it$1 ? false : Lo(ot$1, i);
const ct$1 = (i) => i < et$1 || i > nt$1 ? false : Lo(at$1, i);
const bt = (i) => i < ut || i > gt ? false : Lo(dt, i);
const pt = (i) => i >= ht && i <= rt$1 ? true : i < tt$1 || i > st$1 ? false : Lo(ru, i);
function wt(i) {
  return vt(i) ? "ambiguous" : yt(i) ? "fullwidth" : ct$1(i) ? "halfwidth" : bt(i) ? "narrow" : pt(i) ? "wide" : "neutral";
}
function jt(i) {
  if (!Number.isSafeInteger(i)) throw new TypeError(`Expected a code point, got \`${typeof i}\`.`);
}
function lu(i) {
  return jt(i), wt(i);
}
const vu = String.raw;
const qn = vu`\p{Emoji}(?:\p{EMod}|[\u{E0020}-\u{E007E}]+\u{E007F}|\uFE0F?\u20E3?)`;
const mt = () => new RegExp(vu`\p{RI}{2}|(?![#*\d](?!\uFE0F?\u20E3))${qn}(?:\u200D${qn})*`, "gu");
const eo = /* @__PURE__ */ new Set(["\x1B", ""]);
const Oo = "\x07";
const yu = "[";
const Ie = "m";
const wo = "]8;;";
const ft = 39;
const Yt = /[\u200B\uFEFF\u2060-\u2064]/g;
const kt = new RegExp(`(?:\\${yu}(?<code>\\d+)m|\\${wo}(?<uri>.*)${Oo})`);
const Lt = Object.freeze(/* @__PURE__ */ new Map([[0, 0], [1, 22], [2, 22], [3, 23], [4, 24], [7, 27], [8, 28], [9, 29], [30, 39], [31, 39], [32, 39], [33, 39], [34, 39], [35, 39], [36, 39], [37, 39], [40, 49], [41, 49], [42, 49], [43, 49], [44, 49], [45, 49], [46, 49], [47, 49], [90, 39]]));
const Zt = /^[ \t]*(?:\r\n|\r|\n)/;
const St = /(?:\r\n|\r|\n)[ \t]*$/;
const Jt = /^(?:[\r\n]|$)/;
const Ct = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/;
const Xt = /^[ \t]*[\r\n][ \t\r\n]*$/;
const Ht = /\r\n|\n|\r/g;
const cu = /[\u001B\u009B](?:[[()#;?]{0,10}(?:\d{1,4}(?:;\d{0,4})*)?[0-9A-ORZcf-nqry=><]|\]8;;[^\u0007\u001B]{0,100}(?:\u0007|\u001B\\))/g;
const To = /[\u0000-\u0008\n-\u001F\u007F-\u009F]{1,1000}/y;
const Dt = mt();
const In = /* @__PURE__ */ new Map();
const Tt = (i) => [i.ambiguousIsNarrow ? 1 : 0, i.control, i.fullWidth, i.regular, i.wide].join("|");
const Bt = (i) => {
  const o = Tt(i.width);
  let e = In.get(o);
  return e || (e = /* @__PURE__ */ new Map(), In.set(o, e)), e;
};
const Bo = new RegExp(cu.source, "y");
const we = new RegExp(Dt.source, "uy");
const Qo = /(?:[\u0020-\u007E\u00A0-\u00FF](?!\uFE0F)){1,1000}/y;
const bu = (i) => i >= 32 && i <= 126 ? "latin" : i === 8203 || i === 8204 || i === 8205 || i === 8288 ? "zero" : i <= 31 || i >= 127 && i <= 159 ? "control" : i >= 160 && i <= 255 || i >= 9472 && i <= 9599 ? "latin" : i >= 4352 && i <= 4607 || i >= 11904 && i <= 40959 || i >= 44032 && i <= 55215 || i >= 63744 && i <= 64255 || i >= 65280 && i <= 65519 && !(i >= 65377 && i <= 65439) || i >= 12352 && i <= 12543 ? "wide" : i === 8230 ? "latin" : "other";
const Qt = (i, o) => {
  const e = Bt(o), n = Math.floor(i / 65536), a = i % 65536;
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
const Mt = (i) => i >= 768 && i <= 879 || i >= 6832 && i <= 6911 || i >= 7616 && i <= 7679 || i >= 8400 && i <= 8447 || i >= 65056 && i <= 65071 || i >= 917760 && i <= 917999 || i >= 65024 && i <= 65039 || i >= 3633 && i <= 3642 || i >= 3655 && i <= 3662 || i >= 3761 && i <= 3769 || i >= 3771 && i <= 3772 || i >= 3784 && i <= 3789 || i >= 2304 && i <= 2307 || i >= 2362 && i <= 2383 || i >= 2385 && i <= 2391 || i >= 2402 && i <= 2403 || i >= 2433 && i <= 2435 || i >= 2492 && i <= 2500 || i >= 2509 && i <= 2509 || i >= 2561 && i <= 2563 || i >= 2620 && i <= 2637 || i >= 1611 && i <= 1631 || i >= 1648 && i <= 1648 || i >= 1750 && i <= 1773 || i >= 2276 && i <= 2302 || i >= 1425 && i <= 1469 || i >= 1471 && i <= 1471 || i >= 1473 && i <= 1474 || i >= 1476 && i <= 1477 || i >= 1479 && i <= 1479 || i >= 3893 && i <= 3893 || i >= 3895 && i <= 3895 || i >= 3897 && i <= 3897 || i >= 3953 && i <= 3966 || i >= 3968 && i <= 3972 || i >= 3974 && i <= 3975 ? true : i >= 768 && i <= 777 || i >= 803 && i <= 803;
const Qe = (i, o = {}) => {
  if (!i || i.length === 0) return { ellipsed: false, index: 0, truncated: false, width: 0 };
  const e = { truncation: { countAnsiEscapeCodes: o.countAnsiEscapeCodes ?? false, ellipsis: o.ellipsis ?? "", ellipsisWidth: o.ellipsisWidth ?? (o.ellipsis ? Qe(o.ellipsis, { ...o, ellipsis: "", ellipsisWidth: 0, limit: Number.POSITIVE_INFINITY }).width : 0), limit: o.limit ?? Number.POSITIVE_INFINITY }, width: { ambiguousIsNarrow: o.ambiguousIsNarrow ?? false, ansi: o.ansiWidth ?? 0, control: o.controlWidth ?? 0, emoji: o.emojiWidth ?? 2, fullWidth: o.fullWidth ?? 2, halfWidth: o.halfWidth ?? 1, regular: o.regularWidth ?? 1, tab: o.tabWidth ?? 8, wide: o.wideWidth ?? 2 } }, n = Math.max(0, e.truncation.limit - e.truncation.ellipsisWidth), { length: a } = i, u = a > 1e4;
  let g = 0, t = 0, s = a, h = false;
  const r = i.includes("\x1B") || i.includes("");
  for (; g < a; ) {
    if (r && (i[g] === "\x1B" || i[g] === "")) {
      if (i.startsWith("\x1B]8;;", g)) {
        const p = "\x1B]8;;\x07", j = p.length, L = i.indexOf("\x07", g + 5);
        if (L !== -1) {
          const K = i.indexOf(p, L + 1);
          if (K !== -1) {
            const R = K + j, O = i.slice(L + 1, K).replace(cu, ""), Q = Qe(O, { ambiguousIsNarrow: e.width.ambiguousIsNarrow, ansiWidth: e.width.ansi, controlWidth: e.width.control, countAnsiEscapeCodes: false, ellipsis: e.truncation.ellipsis, ellipsisWidth: e.truncation.ellipsisWidth, emojiWidth: e.width.emoji, fullWidth: e.width.fullWidth, halfWidth: e.width.halfWidth, limit: Math.max(0, n - t), regularWidth: e.width.regular, tabWidth: e.width.tab, wideWidth: e.width.wide }), z = Q.width;
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
    if (we.lastIndex = g, we.test(i)) {
      if (t + e.width.emoji > n && (s = Math.min(s, g), t + e.width.emoji > e.truncation.limit)) {
        h = true;
        break;
      }
      t += e.width.emoji, g = we.lastIndex;
      continue;
    }
    const c = i.codePointAt(g) ?? 0;
    if (Mt(c)) {
      g += c > 65535 ? 2 : 1;
      continue;
    }
    let b;
    if (u) b = Qt(c, e);
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
const Hi = (i, o = {}) => Qe(i, { ...o, ellipsis: "", ellipsisWidth: 0, limit: Number.POSITIVE_INFINITY }).width;
const Gt = new Uint8Array(128);
const Nt = new Uint8Array(128);
const xt = new Uint8Array(128);
for (let i = 0; i < 128; i++) Gt[i] = i >= 65 && i <= 90 ? 1 : 0, Nt[i] = i >= 97 && i <= 122 ? 1 : 0, xt[i] = i >= 48 && i <= 57 ? 1 : 0;
function Wt(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var je;
var Un;
function Pt() {
  if (Un) return je;
  Un = 1, je = o;
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
  return je;
}
var Ft = Pt();
const pu = Wt(Ft);
pu();
var wu = typeof global == "object" && global && global.Object === Object && global;
var Kt = typeof self == "object" && self && self.Object === Object && self;
var P$1 = wu || Kt || Function("return this")();
var _$1 = P$1.Symbol;
var ju = Object.prototype;
var Rt = ju.hasOwnProperty;
var At = ju.toString;
var vo = _$1 ? _$1.toStringTag : void 0;
function _t(i) {
  var o = Rt.call(i, vo), e = i[vo];
  try {
    i[vo] = void 0;
    var n = true;
  } catch {
  }
  var a = At.call(i);
  return n && (o ? i[vo] = e : delete i[vo]), a;
}
var Ot = Object.prototype;
var zt = Ot.toString;
function Et(i) {
  return zt.call(i);
}
var $t = "[object Null]";
var qt = "[object Undefined]";
var Vn = _$1 ? _$1.toStringTag : void 0;
function $$1(i) {
  return i == null ? i === void 0 ? qt : $t : Vn && Vn in Object(i) ? _t(i) : Et(i);
}
function N$1(i) {
  return i != null && typeof i == "object";
}
var It = "[object Symbol]";
function oi(i) {
  return typeof i == "symbol" || N$1(i) && $$1(i) == It;
}
var Ut = NaN;
function ia(i) {
  return typeof i == "number" ? i : oi(i) ? Ut : +i;
}
function M$1(i, o) {
  for (var e = -1, n = i == null ? 0 : i.length, a = Array(n); ++e < n; ) a[e] = o(i[e], e, i);
  return a;
}
var k$1 = Array.isArray;
var oa = _$1 ? _$1.prototype : void 0;
var ea = oa ? oa.toString : void 0;
function ei(i) {
  if (typeof i == "string") return i;
  if (k$1(i)) return M$1(i, ei) + "";
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
var Vt = zo(function(i, o) {
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
function G$1(i) {
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
  if (G$1(i)) {
    var o = typeof i.valueOf == "function" ? i.valueOf() : i;
    i = G$1(o) ? o + "" : o;
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
function Z$1(i) {
  var o = ki(i), e = o % 1;
  return o === o ? e ? o - e : o : 0;
}
var ds = "Expected a function";
function ts(i, o) {
  if (typeof o != "function") throw new TypeError(ds);
  return i = Z$1(i), function() {
    if (--i < 1) return o.apply(this, arguments);
  };
}
function U$1(i) {
  return i;
}
var ss = "[object AsyncFunction]";
var hs = "[object Function]";
var rs = "[object GeneratorFunction]";
var ls = "[object Proxy]";
function Li(i) {
  if (!G$1(i)) return false;
  var o = $$1(i);
  return o == hs || o == rs || o == ss || o == ls;
}
var No = P$1["__core-js_shared__"];
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
  if (!G$1(i) || vs(i)) return false;
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
var jo = Oi(P$1, "WeakMap");
var Ko = jo && new jo();
var ku = Ko ? function(i, o) {
  return Ko.set(i, o), i;
} : U$1;
var ga = Object.create;
var no = /* @__PURE__ */ (function() {
  function i() {
  }
  return function(o) {
    if (!G$1(o)) return {};
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
    var e = no(i.prototype), n = i.apply(e, o);
    return G$1(n) ? n : e;
  };
}
var Ls = 1;
function Zs(i, o, e) {
  var n = o & Ls, a = mo(i);
  function u() {
    var g = this && this !== P$1 && this instanceof u ? a : i;
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
function J$1(i) {
  this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = Xs, this.__views__ = [];
}
J$1.prototype = no(Eo.prototype);
J$1.prototype.constructor = J$1;
function Ue() {
}
var Ve = Ko ? function(i) {
  return Ko.get(i);
} : Ue;
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
ti.prototype = no(Eo.prototype);
ti.prototype.constructor = ti;
function I$1(i, o) {
  var e = -1, n = i.length;
  for (o || (o = Array(n)); ++e < n; ) o[e] = i[e];
  return o;
}
function Su(i) {
  if (i instanceof J$1) return i.clone();
  var o = new ti(i.__wrapped__, i.__chain__);
  return o.__actions__ = I$1(i.__actions__), o.__index__ = i.__index__, o.__values__ = i.__values__, o;
}
var Ts = Object.prototype;
var Bs = Ts.hasOwnProperty;
function d$1(i) {
  if (N$1(i) && !k$1(i) && !(i instanceof J$1)) {
    if (i instanceof ti) return i;
    if (Bs.call(i, "__wrapped__")) return Su(i);
  }
  return new ti(i);
}
d$1.prototype = Eo.prototype;
d$1.prototype.constructor = d$1;
function Me(i) {
  var o = xo(i), e = d$1[o];
  if (typeof e != "function" || !(o in J$1.prototype)) return false;
  if (i === e) return true;
  var n = Ve(e);
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
function on(i) {
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
  return Ro(i, "toString", { configurable: true, enumerable: false, value: on(o), writable: true });
} : U$1;
var en = Ju(Ks);
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
  return en(i, Fs(n, ih(Ws(n), e)));
}
var oh = 4;
var eh = 8;
var da = 32;
var ta = 64;
function Du(i, o, e, n, a, u, g, t, s, h) {
  var r = o & eh, l = r ? g : void 0, v = r ? void 0 : g, y = r ? u : void 0, c = r ? void 0 : u;
  o |= r ? da : ta, o &= ~(r ? ta : da), o & oh || (o &= -4);
  var b = [i, o, a, y, l, c, v, t, s, h], p = e.apply(void 0, b);
  return Me(i) && Cu(p, b), p.placeholder = n, Hu(p, i, o);
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
  for (var e = i.length, n = uh(o.length, e), a = I$1(i); n--; ) {
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
    return j = L.length, t ? L = gh(L, t) : c && j > 1 && L.reverse(), r && s < j && (L.length = s), this && this !== P$1 && this instanceof p && (Yi = b || mo(Yi)), Yi.apply(z, L);
  }
  return p;
}
function vh(i, o, e) {
  var n = mo(i);
  function a() {
    for (var u = arguments.length, g = Array(u), t = u, s = uo(a); t--; ) g[t] = arguments[t];
    var h = u < 3 && g[0] !== s && g[u - 1] !== s ? [] : Di(g, s);
    if (u -= h.length, u < e) return Du(i, o, Io, a.placeholder, void 0, g, h, void 0, void 0, e - u);
    var r = this && this !== P$1 && this instanceof a ? n : i;
    return ni(r, this, g);
  }
  return a;
}
var yh = 1;
function ch(i, o, e, n) {
  var a = o & yh, u = mo(i);
  function g() {
    for (var t = -1, s = arguments.length, h = -1, r = n.length, l = Array(r + s), v = this && this !== P$1 && this instanceof g ? u : i; ++h < r; ) l[h] = n[h];
    for (; s--; ) l[h++] = arguments[++t];
    return ni(v, a ? e : this, l);
  }
  return g;
}
var ha = "__lodash_placeholder__";
var me = 1;
var bh = 2;
var ph = 4;
var ra = 8;
var yo = 128;
var la = 256;
var wh = Math.min;
function jh(i, o) {
  var e = i[1], n = o[1], a = e | n, u = a < (me | bh | yo), g = n == yo && e == ra || n == yo && e == la && i[7].length <= o[8] || n == (yo | la) && o[7].length <= o[8] && e == ra;
  if (!(u || g)) return i;
  n & me && (i[2] = o[2], a |= e & me ? 0 : ph);
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
  if (h || (o &= -97, n = a = void 0), g = g === void 0 ? g : pa(Z$1(g), 0), t = t === void 0 ? t : Z$1(t), h -= a ? a.length : 0, o & Yh) {
    var r = n, l = a;
    n = a = void 0;
  }
  var v = s ? void 0 : Ve(i), y = [i, o, e, n, a, r, l, u, g, t];
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
function S$1(i, o) {
  return en(Bu(i, o, U$1), i + "");
}
var Sh = 9007199254740991;
function Uo(i) {
  return typeof i == "number" && i > -1 && i % 1 == 0 && i <= Sh;
}
function V$1(i) {
  return i != null && Uo(i.length) && !Li(i);
}
function E$1(i, o, e) {
  if (!G$1(e)) return false;
  var n = typeof o;
  return (n == "number" ? V$1(e) && Zi(o, e.length) : n == "string" && o in e) ? ci(e[o], i) : false;
}
function go(i) {
  return S$1(function(o, e) {
    var n = -1, a = e.length, u = a > 1 ? e[a - 1] : void 0, g = a > 2 ? e[2] : void 0;
    for (u = i.length > 3 && typeof u == "function" ? (a--, u) : void 0, g && E$1(e[0], e[1], g) && (u = a < 3 ? void 0 : u, a = 1), o = Object(o); ++n < a; ) {
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
function nn(i, o) {
  for (var e = -1, n = Array(i); ++e < i; ) n[e] = o(e);
  return n;
}
var Ch = "[object Arguments]";
function ja(i) {
  return N$1(i) && $$1(i) == Ch;
}
var Qu = Object.prototype;
var Xh = Qu.hasOwnProperty;
var Hh = Qu.propertyIsEnumerable;
var Ki = ja(/* @__PURE__ */ (function() {
  return arguments;
})()) ? ja : function(i) {
  return N$1(i) && Xh.call(i, "callee") && !Hh.call(i, "callee");
};
function an() {
  return false;
}
var Mu = typeof exports == "object" && exports && !exports.nodeType && exports;
var ma = Mu && typeof module == "object" && module && !module.nodeType && module;
var Dh = ma && ma.exports === Mu;
var fa = Dh ? P$1.Buffer : void 0;
var Th = fa ? fa.isBuffer : void 0;
var Ti = Th || an;
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
var ir = "[object Uint8ClampedArray]";
var or = "[object Uint16Array]";
var er = "[object Uint32Array]";
var B$1 = {};
B$1[Eh] = B$1[$h] = B$1[qh] = B$1[Ih] = B$1[Uh] = B$1[Vh] = B$1[ir] = B$1[or] = B$1[er] = true;
B$1[Bh] = B$1[Qh] = B$1[Oh] = B$1[Mh] = B$1[zh] = B$1[Gh] = B$1[Nh] = B$1[xh] = B$1[Wh] = B$1[Ph] = B$1[Fh] = B$1[Kh] = B$1[Rh] = B$1[Ah] = B$1[_h] = false;
function nr(i) {
  return N$1(i) && Uo(i.length) && !!B$1[$$1(i)];
}
function ai(i) {
  return function(o) {
    return i(o);
  };
}
var Gu = typeof exports == "object" && exports && !exports.nodeType && exports;
var po = Gu && typeof module == "object" && module && !module.nodeType && module;
var ar = po && po.exports === Gu;
var fe = ar && wu.process;
var si = (function() {
  try {
    var i = po && po.require && po.require("util").types;
    return i || fe && fe.binding && fe.binding("util");
  } catch {
  }
})();
var Ya = si && si.isTypedArray;
var to = Ya ? ai(Ya) : nr;
var ur = Object.prototype;
var gr = ur.hasOwnProperty;
function Nu(i, o) {
  var e = k$1(i), n = !e && Ki(i), a = !e && !n && Ti(i), u = !e && !n && !a && to(i), g = e || n || a || u, t = g ? nn(i.length, String) : [], s = t.length;
  for (var h in i) (o || gr.call(i, h)) && !(g && (h == "length" || a && (h == "offset" || h == "parent") || u && (h == "buffer" || h == "byteLength" || h == "byteOffset") || Zi(h, s))) && t.push(h);
  return t;
}
function xu(i, o) {
  return function(e) {
    return i(o(e));
  };
}
var dr = xu(Object.keys, Object);
var tr = Object.prototype;
var sr = tr.hasOwnProperty;
function un(i) {
  if (!So(i)) return dr(i);
  var o = [];
  for (var e in Object(i)) sr.call(i, e) && e != "constructor" && o.push(e);
  return o;
}
function F$1(i) {
  return V$1(i) ? Nu(i) : un(i);
}
var hr = Object.prototype;
var rr = hr.hasOwnProperty;
var lr = go(function(i, o) {
  if (So(o) || V$1(o)) {
    wi(o, F$1(o), i);
    return;
  }
  for (var e in o) rr.call(o, e) && Zo(i, e, o[e]);
});
function vr(i) {
  var o = [];
  if (i != null) for (var e in Object(i)) o.push(e);
  return o;
}
var yr = Object.prototype;
var cr = yr.hasOwnProperty;
function br(i) {
  if (!G$1(i)) return vr(i);
  var o = So(i), e = [];
  for (var n in i) n == "constructor" && (o || !cr.call(i, n)) || e.push(n);
  return e;
}
function ii(i) {
  return V$1(i) ? Nu(i, true) : br(i);
}
var pr = go(function(i, o) {
  wi(o, ii(o), i);
});
var wr = go(function(i, o, e, n) {
  wi(o, ii(o), i, n);
});
var Ge = go(function(i, o, e, n) {
  wi(o, F$1(o), i, n);
});
var jr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var mr = /^\w*$/;
function gn(i, o) {
  if (k$1(i)) return false;
  var e = typeof i;
  return e == "number" || e == "symbol" || e == "boolean" || i == null || oi(i) ? true : mr.test(i) || !jr.test(i) || o != null && i in Object(o);
}
var fo = Oi(Object, "create");
function fr() {
  this.__data__ = fo ? fo(null) : {}, this.size = 0;
}
function Yr(i) {
  var o = this.has(i) && delete this.__data__[i];
  return this.size -= o ? 1 : 0, o;
}
var kr = "__lodash_hash_undefined__";
var Lr = Object.prototype;
var Zr = Lr.hasOwnProperty;
function Sr(i) {
  var o = this.__data__;
  if (fo) {
    var e = o[i];
    return e === kr ? void 0 : e;
  }
  return Zr.call(o, i) ? o[i] : void 0;
}
var Jr = Object.prototype;
var Cr = Jr.hasOwnProperty;
function Xr(i) {
  var o = this.__data__;
  return fo ? o[i] !== void 0 : Cr.call(o, i);
}
var Hr = "__lodash_hash_undefined__";
function Dr(i, o) {
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
Ri.prototype.clear = fr;
Ri.prototype.delete = Yr;
Ri.prototype.get = Sr;
Ri.prototype.has = Xr;
Ri.prototype.set = Dr;
function Tr() {
  this.__data__ = [], this.size = 0;
}
function Vo(i, o) {
  for (var e = i.length; e--; ) if (ci(i[e][0], o)) return e;
  return -1;
}
var Br = Array.prototype;
var Qr = Br.splice;
function Mr(i) {
  var o = this.__data__, e = Vo(o, i);
  if (e < 0) return false;
  var n = o.length - 1;
  return e == n ? o.pop() : Qr.call(o, e, 1), --this.size, true;
}
function Gr(i) {
  var o = this.__data__, e = Vo(o, i);
  return e < 0 ? void 0 : o[e][1];
}
function Nr(i) {
  return Vo(this.__data__, i) > -1;
}
function xr(i, o) {
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
Ji.prototype.clear = Tr;
Ji.prototype.delete = Mr;
Ji.prototype.get = Gr;
Ji.prototype.has = Nr;
Ji.prototype.set = xr;
var Yo = Oi(P$1, "Map");
function Wr() {
  this.size = 0, this.__data__ = { hash: new Ri(), map: new (Yo || Ji)(), string: new Ri() };
}
function Pr(i) {
  var o = typeof i;
  return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? i !== "__proto__" : i === null;
}
function ie(i, o) {
  var e = i.__data__;
  return Pr(o) ? e[typeof o == "string" ? "string" : "hash"] : e.map;
}
function Fr(i) {
  var o = ie(this, i).delete(i);
  return this.size -= o ? 1 : 0, o;
}
function Kr(i) {
  return ie(this, i).get(i);
}
function Rr(i) {
  return ie(this, i).has(i);
}
function Ar(i, o) {
  var e = ie(this, i), n = e.size;
  return e.set(i, o), this.size += e.size == n ? 0 : 1, this;
}
function Ci(i) {
  var o = -1, e = i == null ? 0 : i.length;
  for (this.clear(); ++o < e; ) {
    var n = i[o];
    this.set(n[0], n[1]);
  }
}
Ci.prototype.clear = Wr;
Ci.prototype.delete = Fr;
Ci.prototype.get = Kr;
Ci.prototype.has = Rr;
Ci.prototype.set = Ar;
var _r = "Expected a function";
function oe(i, o) {
  if (typeof i != "function" || o != null && typeof o != "function") throw new TypeError(_r);
  var e = function() {
    var n = arguments, a = o ? o.apply(this, n) : n[0], u = e.cache;
    if (u.has(a)) return u.get(a);
    var g = i.apply(this, n);
    return e.cache = u.set(a, g) || u, g;
  };
  return e.cache = new (oe.Cache || Ci)(), e;
}
oe.Cache = Ci;
var Or = 500;
function zr(i) {
  var o = oe(i, function(n) {
    return e.size === Or && e.clear(), n;
  }), e = o.cache;
  return o;
}
var Er = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var $r = /\\(\\)?/g;
var Wu = zr(function(i) {
  var o = [];
  return i.charCodeAt(0) === 46 && o.push(""), i.replace(Er, function(e, n, a, u) {
    o.push(a ? u.replace($r, "$1") : n || e);
  }), o;
});
function X$1(i) {
  return i == null ? "" : ei(i);
}
function Qi(i, o) {
  return k$1(i) ? i : gn(i, o) ? [i] : Wu(X$1(i));
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
function dn(i, o, e) {
  var n = i == null ? void 0 : zi(i, o);
  return n === void 0 ? e : n;
}
function tn(i, o) {
  for (var e = -1, n = o.length, a = Array(n), u = i == null; ++e < n; ) a[e] = u ? void 0 : dn(i, o[e]);
  return a;
}
function Mi(i, o) {
  for (var e = -1, n = o.length, a = i.length; ++e < n; ) i[a + e] = o[e];
  return i;
}
var ka = _$1 ? _$1.isConcatSpreadable : void 0;
function qr(i) {
  return k$1(i) || Ki(i) || !!(ka && i && i[ka]);
}
function A$1(i, o, e, n, a) {
  var u = -1, g = i.length;
  for (e || (e = qr), a || (a = []); ++u < g; ) {
    var t = i[u];
    o > 0 && e(t) ? o > 1 ? A$1(t, o - 1, e, n, a) : Mi(a, t) : n || (a[a.length] = t);
  }
  return a;
}
function Pu(i) {
  var o = i == null ? 0 : i.length;
  return o ? A$1(i, 1) : [];
}
function Xi(i) {
  return en(Bu(i, void 0, Pu), i + "");
}
var Ir = Xi(tn);
var ee = xu(Object.getPrototypeOf, Object);
var Ur = "[object Object]";
var Vr = Function.prototype;
var il = Object.prototype;
var Fu = Vr.toString;
var ol = il.hasOwnProperty;
var el = Fu.call(Object);
function Jo(i) {
  if (!N$1(i) || $$1(i) != Ur) return false;
  var o = ee(i);
  if (o === null) return true;
  var e = ol.call(o, "constructor") && o.constructor;
  return typeof e == "function" && e instanceof e && Fu.call(e) == el;
}
var nl = "[object DOMException]";
var al = "[object Error]";
function sn(i) {
  if (!N$1(i)) return false;
  var o = $$1(i);
  return o == al || o == nl || typeof i.message == "string" && typeof i.name == "string" && !Jo(i);
}
var Ku = S$1(function(i, o) {
  try {
    return ni(i, void 0, o);
  } catch (e) {
    return sn(e) ? e : new Error(e);
  }
});
var ul = "Expected a function";
function Ru(i, o) {
  var e;
  if (typeof o != "function") throw new TypeError(ul);
  return i = Z$1(i), function() {
    return --i > 0 && (e = o.apply(this, arguments)), i <= 1 && (o = void 0), e;
  };
}
var gl = 1;
var dl = 32;
var ne = S$1(function(i, o, e) {
  var n = gl;
  if (e.length) {
    var a = Di(e, uo(ne));
    n |= dl;
  }
  return Si(i, n, o, e, a);
});
ne.placeholder = {};
var tl = Xi(function(i, o) {
  return ui(o, function(e) {
    e = vi(e), pi(i, e, ne(i[e], i));
  }), i;
});
var sl = 1;
var hl = 2;
var rl = 32;
var hn = S$1(function(i, o, e) {
  var n = sl | hl;
  if (e.length) {
    var a = Di(e, uo(hn));
    n |= rl;
  }
  return Si(o, n, i, e, a);
});
hn.placeholder = {};
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
function so(i) {
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
var Ne = "[" + Ll + "]";
var xe = "\\ud83c[\\udffb-\\udfff]";
var Jl = "(?:" + Ne + "|" + xe + ")";
var _u = "[^" + Au + "]";
var Ou = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var zu = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var Cl = "\\u200d";
var Eu = Jl + "?";
var $u = "[" + Zl + "]?";
var Xl = "(?:" + Cl + "(?:" + [_u, Ou, zu].join("|") + ")" + $u + Eu + ")*";
var Hl = $u + Eu + Xl;
var Dl = "(?:" + [_u + Ne + "?", Ne, Ou, zu, Sl].join("|") + ")";
var Tl = RegExp(xe + "(?=" + xe + ")|" + Dl + Hl, "g");
function Bl(i) {
  return i.match(Tl) || [];
}
function yi(i) {
  return so(i) ? Bl(i) : ml(i);
}
function qu(i) {
  return function(o) {
    o = X$1(o);
    var e = so(o) ? yi(o) : void 0, n = e ? e[0] : o.charAt(0), a = e ? Gi(e, 1).join("") : o.slice(1);
    return n[i]() + a;
  };
}
var rn = qu("toUpperCase");
function Iu(i) {
  return rn(X$1(i).toLowerCase());
}
function ln(i, o, e, n) {
  var a = -1, u = i == null ? 0 : i.length;
  for (n && u && (e = i[++a]); ++a < u; ) e = o(e, i[a], a, i);
  return e;
}
function vn(i) {
  return function(o) {
    return i?.[o];
  };
}
var Ml = vn(Ql);
var Gl = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
var Nl = "\\u0300-\\u036f";
var xl = "\\ufe20-\\ufe2f";
var Wl = "\\u20d0-\\u20ff";
var Pl = Nl + xl + Wl;
var Fl = "[" + Pl + "]";
var Kl = RegExp(Fl, "g");
function Uu(i) {
  return i = X$1(i), i && i.replace(Gl, Ml).replace(Kl, "");
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
  return i = X$1(i), o = e ? void 0 : o, o === void 0 ? Ol(i) ? cv(i) : Al(i) : i.match(o) || [];
}
var bv = "['’]";
var pv = RegExp(bv, "g");
function ho(i) {
  return function(o) {
    return ln(lg(Uu(o).replace(pv, "")), i, "");
  };
}
var wv = ho(function(i, o, e) {
  return o = o.toLowerCase(), i + (e ? Iu(o) : o);
});
function jv() {
  if (!arguments.length) return [];
  var i = arguments[0];
  return k$1(i) ? i : [i];
}
var mv = P$1.isFinite;
var fv = Math.min;
function yn(i) {
  var o = Math[i];
  return function(e, n) {
    if (e = gi(e), n = n == null ? 0 : fv(Z$1(n), 292), n && mv(e)) {
      var a = (X$1(e) + "e").split("e"), u = o(a[0] + "e" + (+a[1] + n));
      return a = (X$1(u) + "e").split("e"), +(a[0] + "e" + (+a[1] - n));
    }
    return o(e);
  };
}
var Yv = yn("ceil");
function vg(i) {
  var o = d$1(i);
  return o.__chain__ = true, o;
}
var kv = Math.ceil;
var Lv = Math.max;
function Zv(i, o, e) {
  (e ? E$1(i, o, e) : o === void 0) ? o = 1 : o = Lv(Z$1(o), 0);
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
  return i && wi(o, F$1(o), i);
}
function Bv(i, o) {
  return i && wi(o, ii(o), i);
}
var cg = typeof exports == "object" && exports && !exports.nodeType && exports;
var Ca = cg && typeof module == "object" && module && !module.nodeType && module;
var Qv = Ca && Ca.exports === cg;
var Xa = Qv ? P$1.Buffer : void 0;
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
function cn() {
  return [];
}
var Mv = Object.prototype;
var Gv = Mv.propertyIsEnumerable;
var Da = Object.getOwnPropertySymbols;
var bn = Da ? function(i) {
  return i == null ? [] : (i = Object(i), Ni(Da(i), function(o) {
    return Gv.call(i, o);
  }));
} : cn;
function Nv(i, o) {
  return wi(i, bn(i), o);
}
var xv = Object.getOwnPropertySymbols;
var pg = xv ? function(i) {
  for (var o = []; i; ) Mi(o, bn(i)), i = ee(i);
  return o;
} : cn;
function Wv(i, o) {
  return wi(i, pg(i), o);
}
function wg(i, o, e) {
  var n = o(i);
  return k$1(i) ? n : Mi(n, e(i));
}
function We(i) {
  return wg(i, F$1, bn);
}
function pn(i) {
  return wg(i, ii, pg);
}
var Pe = Oi(P$1, "DataView");
var Fe = Oi(P$1, "Promise");
var Vi = Oi(P$1, "Set");
var Ta = "[object Map]";
var Pv = "[object Object]";
var Ba = "[object Promise]";
var Qa = "[object Set]";
var Ma = "[object WeakMap]";
var Ga = "[object DataView]";
var Fv = _i(Pe);
var Kv = _i(Yo);
var Rv = _i(Fe);
var Av = _i(Vi);
var _v = _i(jo);
var Wi = $$1;
(Pe && Wi(new Pe(new ArrayBuffer(1))) != Ga || Yo && Wi(new Yo()) != Ta || Fe && Wi(Fe.resolve()) != Ba || Vi && Wi(new Vi()) != Qa || jo && Wi(new jo()) != Ma) && (Wi = function(i) {
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
var Ao = P$1.Uint8Array;
function wn(i) {
  var o = new i.constructor(i.byteLength);
  return new Ao(o).set(new Ao(i)), o;
}
function $v(i, o) {
  var e = o ? wn(i.buffer) : i.buffer;
  return new i.constructor(e, i.byteOffset, i.byteLength);
}
var qv = /\w*$/;
function Iv(i) {
  var o = new i.constructor(i.source, qv.exec(i));
  return o.lastIndex = i.lastIndex, o;
}
var Na = _$1 ? _$1.prototype : void 0;
var xa = Na ? Na.valueOf : void 0;
function Uv(i) {
  return xa ? Object(xa.call(i)) : {};
}
function jg(i, o) {
  var e = o ? wn(i.buffer) : i.buffer;
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
      return wn(i);
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
  return typeof i.constructor == "function" && !So(i) ? no(ee(i)) : {};
}
var j0 = "[object Map]";
function m0(i) {
  return N$1(i) && bi(i) == j0;
}
var Wa = si && si.isMap;
var fg = Wa ? ai(Wa) : m0;
var f0 = "[object Set]";
function Y0(i) {
  return N$1(i) && bi(i) == f0;
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
  if (!G$1(i)) return i;
  var r = k$1(i);
  if (r) {
    if (g = Ev(i), !t) return I$1(i, g);
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
  var c = h ? s ? pn : We : s ? ii : F$1, b = r ? void 0 : c(i);
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
  return Mi(k$1(e) ? I$1(e) : [e], A$1(o, 1));
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
function jn(i, o) {
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
      if (!jn(o, function(j, L) {
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
function mn(i) {
  var o = -1, e = Array(i.size);
  return i.forEach(function(n, a) {
    e[++o] = [a, n];
  }), e;
}
function ae(i) {
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
var Fa = _$1 ? _$1.prototype : void 0;
var Ye = Fa ? Fa.valueOf : void 0;
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
      var t = mn;
    case fy:
      var s = n & vy;
      if (t || (t = ae), i.size != o.size && !s) return false;
      var h = g.get(i);
      if (h) return h == o;
      n |= yy, g.set(i, o);
      var r = Sg(t(i), t(o), n, a, u, g);
      return g.delete(i), r;
    case ky:
      if (Ye) return Ye.call(i) == Ye.call(o);
  }
  return false;
}
var Jy = 1;
var Cy = Object.prototype;
var Xy = Cy.hasOwnProperty;
function Hy(i, o, e, n, a, u) {
  var g = e & Jy, t = We(i), s = t.length, h = We(o), r = h.length;
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
  var g = k$1(i), t = k$1(o), s = g ? Ra : bi(i), h = t ? Ra : bi(o);
  s = s == Ka ? Mo : s, h = h == Ka ? Mo : h;
  var r = s == Mo, l = h == Mo, v = s == h;
  if (v && Ti(i)) {
    if (!Ti(o)) return false;
    g = true, r = false;
  }
  if (v && !r) return u || (u = new li()), g || to(i) ? Sg(i, o, e, n, a, u) : Sy(i, o, s, e, n, a, u);
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
  return i === o ? true : i == null || o == null || !N$1(i) && !N$1(o) ? i !== i && o !== o : By(i, o, e, n, Co, a);
}
var Qy = 1;
var My = 2;
function fn(i, o, e, n) {
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
  return i === i && !G$1(i);
}
function Yn(i) {
  for (var o = F$1(i), e = o.length; e--; ) {
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
  var o = Yn(i);
  return o.length == 1 && o[0][2] ? Cg(o[0][0], o[0][1]) : function(e) {
    return e === i || fn(e, i, o);
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
  return u || ++n != a ? u : (a = i == null ? 0 : i.length, !!a && Uo(a) && Zi(g, a) && (k$1(i) || Ki(i)));
}
function kn(i, o) {
  return i != null && Hg(i, o, Gy);
}
var Ny = 1;
var xy = 2;
function Dg(i, o) {
  return gn(i) && Jg(o) ? Cg(vi(i), o) : function(e) {
    var n = dn(e, i);
    return n === void 0 && n === o ? kn(e, i) : Co(o, n, Ny | xy);
  };
}
function Ln(i) {
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
  return gn(i) ? Ln(vi(i)) : Wy(i);
}
function Y$1(i) {
  return typeof i == "function" ? i : i == null ? U$1 : typeof i == "object" ? k$1(i) ? Dg(i[0], i[1]) : Xg(i) : Tg(i);
}
var Py = "Expected a function";
function Fy(i) {
  var o = i == null ? 0 : i.length, e = Y$1;
  return i = o ? M$1(i, function(n) {
    if (typeof n[1] != "function") throw new TypeError(Py);
    return [e(n[0]), n[1]];
  }) : [], S$1(function(n) {
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
  var o = F$1(i);
  return function(e) {
    return Bg(e, i, o);
  };
}
var Ry = 1;
function Ay(i) {
  return Ky(di(i, Ry));
}
function _y(i, o) {
  return o == null || Bg(i, o, F$1(o));
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
var Zn = Qg();
function ji(i, o) {
  return i && Zn(i, o, F$1);
}
function Mg(i, o) {
  return function(e, n) {
    if (e == null) return e;
    if (!V$1(e)) return i(e, n);
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
function ue(i, o) {
  return function(e, n) {
    var a = k$1(e) ? Oy : zy, u = o ? o() : {};
    return a(e, i, Y$1(n), u);
  };
}
var Ey = Object.prototype;
var $y = Ey.hasOwnProperty;
var qy = ue(function(i, o, e) {
  $y.call(i, e) ? ++i[e] : pi(i, e, 1);
});
function Iy(i, o) {
  var e = no(i);
  return o == null ? e : yg(e, o);
}
var Uy = 8;
function Sn(i, o, e) {
  o = e ? void 0 : o;
  var n = Si(i, Uy, void 0, void 0, void 0, void 0, void 0, o);
  return n.placeholder = Sn.placeholder, n;
}
Sn.placeholder = {};
var Vy = 16;
function Jn(i, o, e) {
  o = e ? void 0 : o;
  var n = Si(i, Vy, void 0, void 0, void 0, void 0, void 0, o);
  return n.placeholder = Jn.placeholder, n;
}
Jn.placeholder = {};
var Wo = function() {
  return P$1.Date.now();
};
var ic = "Expected a function";
var oc = Math.max;
var ec = Math.min;
function Gg(i, o, e) {
  var n, a, u, g, t, s, h = 0, r = false, l = false, v = true;
  if (typeof i != "function") throw new TypeError(ic);
  o = gi(o) || 0, G$1(e) && (r = !!e.leading, l = "maxWait" in e, u = l ? oc(gi(e.maxWait) || 0, o) : u, v = "trailing" in e ? !!e.trailing : v);
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
var uc = S$1(function(i, o) {
  i = Object(i);
  var e = -1, n = o.length, a = n > 2 ? o[2] : void 0;
  for (a && E$1(o[0], o[1], a) && (n = 1); ++e < n; ) for (var u = o[e], g = ii(u), t = -1, s = g.length; ++t < s; ) {
    var h = g[t], r = i[h];
    (r === void 0 || ci(r, Ng[h]) && !ac.call(i, h)) && (i[h] = u[h]);
  }
  return i;
});
function Ke(i, o, e) {
  (e !== void 0 && !ci(i[o], e) || e === void 0 && !(o in i)) && pi(i, o, e);
}
function W$1(i) {
  return N$1(i) && V$1(i);
}
function Re(i, o) {
  if (!(o === "constructor" && typeof i[o] == "function") && o != "__proto__") return i[o];
}
function xg(i) {
  return wi(i, ii(i));
}
function gc(i, o, e, n, a, u, g) {
  var t = Re(i, e), s = Re(o, e), h = g.get(s);
  if (h) {
    Ke(i, e, h);
    return;
  }
  var r = u ? u(t, s, e + "", i, o, g) : void 0, l = r === void 0;
  if (l) {
    var v = k$1(s), y = !v && Ti(s), c = !v && !y && to(s);
    r = s, v || y || c ? k$1(t) ? r = t : W$1(t) ? r = I$1(t) : y ? (l = false, r = bg(s, true)) : c ? (l = false, r = jg(s, true)) : r = [] : Jo(s) || Ki(s) ? (r = t, Ki(t) ? r = xg(t) : (!G$1(t) || Li(t)) && (r = mg(s))) : l = false;
  }
  l && (g.set(s, r), a(r, s, n, u, g), g.delete(s)), Ke(i, e, r);
}
function ge(i, o, e, n, a) {
  i !== o && Zn(o, function(u, g) {
    if (a || (a = new li()), G$1(u)) gc(i, o, g, e, ge, n, a);
    else {
      var t = n ? n(Re(i, g), u, g + "", i, o, a) : void 0;
      t === void 0 && (t = u), Ke(i, g, t);
    }
  }, ii);
}
function Wg(i, o, e, n, a, u) {
  return G$1(i) && G$1(o) && (u.set(o, i), ge(i, o, void 0, Wg, u), u.delete(o)), i;
}
var Pg = go(function(i, o, e, n) {
  ge(i, o, e, n);
});
var dc = S$1(function(i) {
  return i.push(void 0, Wg), ni(Pg, void 0, i);
});
var tc = "Expected a function";
function Fg(i, o, e) {
  if (typeof i != "function") throw new TypeError(tc);
  return setTimeout(function() {
    i.apply(void 0, e);
  }, o);
}
var sc = S$1(function(i, o) {
  return Fg(i, 1, o);
});
var hc = S$1(function(i, o, e) {
  return Fg(i, gi(o) || 0, e);
});
function Cn(i, o, e) {
  for (var n = -1, a = i == null ? 0 : i.length; ++n < a; ) if (e(o, i[n])) return true;
  return false;
}
var rc = 200;
function Xo(i, o, e, n) {
  var a = -1, u = qo, g = true, t = i.length, s = [], h = o.length;
  if (!t) return s;
  e && (o = M$1(o, ai(e))), n ? (u = Cn, g = false) : o.length >= rc && (u = ko, g = false, o = new Ai(o));
  i: for (; ++a < t; ) {
    var r = i[a], l = e == null ? r : e(r);
    if (r = n || r !== 0 ? r : 0, g && l === l) {
      for (var v = h; v--; ) if (o[v] === l) continue i;
      s.push(r);
    } else u(o, l, n) || s.push(r);
  }
  return s;
}
var lc = S$1(function(i, o) {
  return W$1(i) ? Xo(i, A$1(o, 1, W$1, true)) : [];
});
function ri(i) {
  var o = i == null ? 0 : i.length;
  return o ? i[o - 1] : void 0;
}
var vc = S$1(function(i, o) {
  var e = ri(o);
  return W$1(e) && (e = void 0), W$1(i) ? Xo(i, A$1(o, 1, W$1, true), Y$1(e)) : [];
});
var yc = S$1(function(i, o) {
  var e = ri(o);
  return W$1(e) && (e = void 0), W$1(i) ? Xo(i, A$1(o, 1, W$1, true), void 0, e) : [];
});
var cc = zo(function(i, o) {
  return i / o;
}, 1);
function bc(i, o, e) {
  var n = i == null ? 0 : i.length;
  return n ? (o = e || o === void 0 ? 1 : Z$1(o), hi(i, o < 0 ? 0 : o, n)) : [];
}
function pc(i, o, e) {
  var n = i == null ? 0 : i.length;
  return n ? (o = e || o === void 0 ? 1 : Z$1(o), o = n - o, hi(i, 0, o < 0 ? 0 : o)) : [];
}
function de(i, o, e, n) {
  for (var a = i.length, u = n ? a : -1; (n ? u-- : ++u < a) && o(i[u], u, i); ) ;
  return e ? hi(i, n ? 0 : u, n ? u + 1 : a) : hi(i, n ? u + 1 : 0, n ? a : u);
}
function wc(i, o) {
  return i && i.length ? de(i, Y$1(o), true, true) : [];
}
function jc(i, o) {
  return i && i.length ? de(i, Y$1(o), true) : [];
}
function mi(i) {
  return typeof i == "function" ? i : U$1;
}
function mc(i, o) {
  var e = k$1(i) ? ui : xi;
  return e(i, mi(o));
}
function fc(i, o) {
  for (var e = i == null ? 0 : i.length; e-- && o(i[e], e, i) !== false; ) ;
  return i;
}
var Kg = Qg(true);
function Xn(i, o) {
  return i && Kg(i, o, F$1);
}
var Rg = Mg(Xn, true);
function Yc(i, o) {
  var e = k$1(i) ? fc : Rg;
  return e(i, mi(o));
}
function kc(i, o, e) {
  i = X$1(i), o = ei(o);
  var n = i.length;
  e = e === void 0 ? n : Ei(Z$1(e), 0, n);
  var a = e;
  return e -= o.length, e >= 0 && i.slice(e, a) == o;
}
function Lc(i, o) {
  return M$1(o, function(e) {
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
    return e == Sc ? mn(o) : e == Jc ? Zc(o) : Lc(o, i(o));
  };
}
var Cc = Ag(F$1);
var Xc = Ag(ii);
var Hc = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
var Dc = vn(Hc);
var _g = /[&<>"']/g;
var Tc = RegExp(_g.source);
function Og(i) {
  return i = X$1(i), i && Tc.test(i) ? i.replace(_g, Dc) : i;
}
var zg = /[\\^$.*+?()[\]{}|]/g;
var Bc = RegExp(zg.source);
function Qc(i) {
  return i = X$1(i), i && Bc.test(i) ? i.replace(zg, "\\$&") : i;
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
  var n = k$1(i) ? Eg : Mc;
  return e && E$1(i, o, e) && (o = void 0), n(i, Y$1(o));
}
var Nc = 4294967295;
function $g(i) {
  return i ? Ei(Z$1(i), 0, Nc) : 0;
}
function xc(i, o, e, n) {
  var a = i.length;
  for (e = Z$1(e), e < 0 && (e = -e > a ? 0 : a + e), n = n === void 0 || n > a ? a : Z$1(n), n < 0 && (n += a), n = e > n ? 0 : $g(n); e < n; ) i[e++] = o;
  return i;
}
function Wc(i, o, e, n) {
  var a = i == null ? 0 : i.length;
  return a ? (e && typeof e != "number" && E$1(i, o, e) && (e = 0, n = a), xc(i, o, e, n)) : [];
}
function qg(i, o) {
  var e = [];
  return xi(i, function(n, a, u) {
    o(n, a, u) && e.push(n);
  }), e;
}
function Pc(i, o) {
  var e = k$1(i) ? Ni : qg;
  return e(i, Y$1(o));
}
function Ig(i) {
  return function(o, e, n) {
    var a = Object(o);
    if (!V$1(o)) {
      var u = Y$1(e);
      o = F$1(o), e = function(t) {
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
  var a = e == null ? 0 : Z$1(e);
  return a < 0 && (a = Fc(n + a, 0)), $o(i, Y$1(o), a);
}
var Kc = Ig(Ug);
function Vg(i, o, e) {
  var n;
  return e(i, function(a, u, g) {
    if (o(a, u, g)) return n = u, false;
  }), n;
}
function Rc(i, o) {
  return Vg(i, Y$1(o), ji);
}
var Ac = Math.max;
var _c = Math.min;
function id(i, o, e) {
  var n = i == null ? 0 : i.length;
  if (!n) return -1;
  var a = n - 1;
  return e !== void 0 && (a = Z$1(e), a = e < 0 ? Ac(n + a, 0) : _c(a, n - 1)), $o(i, Y$1(o), a, true);
}
var Oc = Ig(id);
function zc(i, o) {
  return Vg(i, Y$1(o), Xn);
}
function Ec(i) {
  return i && i.length ? i[0] : void 0;
}
function od(i, o) {
  var e = -1, n = V$1(i) ? Array(i.length) : [];
  return xi(i, function(a, u, g) {
    n[++e] = o(a, u, g);
  }), n;
}
function te(i, o) {
  var e = k$1(i) ? M$1 : od;
  return e(i, Y$1(o));
}
function $c(i, o) {
  return A$1(te(i, o), 1);
}
var qc = 1 / 0;
function Ic(i, o) {
  return A$1(te(i, o), qc);
}
function Uc(i, o, e) {
  return e = e === void 0 ? 1 : Z$1(e), A$1(te(i, o), e);
}
var Vc = 1 / 0;
function ib(i) {
  var o = i == null ? 0 : i.length;
  return o ? A$1(i, Vc) : [];
}
function ob(i, o) {
  var e = i == null ? 0 : i.length;
  return e ? (o = o === void 0 ? 1 : Z$1(o), A$1(i, o)) : [];
}
var eb = 512;
function nb(i) {
  return Si(i, eb);
}
var ab = yn("floor");
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
      var t = xo(u), s = t == "wrapper" ? Ve(u) : void 0;
      s && Me(s[0]) && s[1] == (tb | gb | db | sb) && !s[4].length && s[9] == 1 ? g = g[xo(s[0])].apply(g, s[3]) : g = u.length == 1 && Me(u) ? g[t]() : g.thru(u);
    }
    return function() {
      var h = arguments, r = h[0];
      if (g && h.length == 1 && k$1(r)) return g.plant(r).value();
      for (var l = 0, v = e ? o[l].apply(this, h) : r; ++l < e; ) v = o[l].call(this, v);
      return v;
    };
  });
}
var hb = ed();
var rb = ed(true);
function lb(i, o) {
  return i == null ? i : Zn(i, mi(o), ii);
}
function vb(i, o) {
  return i == null ? i : Kg(i, mi(o), ii);
}
function yb(i, o) {
  return i && ji(i, mi(o));
}
function cb(i, o) {
  return i && Xn(i, mi(o));
}
function bb(i) {
  for (var o = -1, e = i == null ? 0 : i.length, n = {}; ++o < e; ) {
    var a = i[o];
    pi(n, a[0], a[1]);
  }
  return n;
}
function se(i, o) {
  return Ni(o, function(e) {
    return Li(i[e]);
  });
}
function pb(i) {
  return i == null ? [] : se(i, F$1(i));
}
function wb(i) {
  return i == null ? [] : se(i, ii(i));
}
var jb = Object.prototype;
var mb = jb.hasOwnProperty;
var fb = ue(function(i, o, e) {
  mb.call(i, e) ? i[e].push(o) : pi(i, e, [o]);
});
function Hn(i, o) {
  return i > o;
}
function he(i) {
  return function(o, e) {
    return typeof o == "string" && typeof e == "string" || (o = gi(o), e = gi(e)), i(o, e);
  };
}
var Yb = he(Hn);
var kb = he(function(i, o) {
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
function re(i) {
  return typeof i == "string" || !k$1(i) && N$1(i) && $$1(i) == Tb;
}
function Dn(i, o) {
  return M$1(o, function(e) {
    return i[e];
  });
}
function ro(i) {
  return i == null ? [] : Dn(i, F$1(i));
}
var Bb = Math.max;
function Qb(i, o, e, n) {
  i = V$1(i) ? i : ro(i), e = e && !n ? Z$1(e) : 0;
  var a = i.length;
  return e < 0 && (e = Bb(a + e, 0)), re(i) ? e <= a && i.indexOf(o, e) > -1 : !!a && ao(i, o, e) > -1;
}
var Mb = Math.max;
function Gb(i, o, e) {
  var n = i == null ? 0 : i.length;
  if (!n) return -1;
  var a = e == null ? 0 : Z$1(e);
  return a < 0 && (a = Mb(n + a, 0)), ao(i, o, a);
}
function Nb(i) {
  var o = i == null ? 0 : i.length;
  return o ? hi(i, 0, -1) : [];
}
var xb = Math.min;
function Tn(i, o, e) {
  for (var n = e ? Cn : qo, a = i[0].length, u = i.length, g = u, t = Array(u), s = 1 / 0, h = []; g--; ) {
    var r = i[g];
    g && o && (r = M$1(r, ai(o))), s = xb(r.length, s), t[g] = !e && (o || a >= 120 && r.length >= 120) ? new Ai(g && r) : void 0;
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
function Bn(i) {
  return W$1(i) ? i : [];
}
var Wb = S$1(function(i) {
  var o = M$1(i, Bn);
  return o.length && o[0] === i[0] ? Tn(o) : [];
});
var Pb = S$1(function(i) {
  var o = ri(i), e = M$1(i, Bn);
  return o === ri(e) ? o = void 0 : e.pop(), e.length && e[0] === i[0] ? Tn(e, Y$1(o)) : [];
});
var Fb = S$1(function(i) {
  var o = ri(i), e = M$1(i, Bn);
  return o = typeof o == "function" ? o : void 0, o && e.pop(), e.length && e[0] === i[0] ? Tn(e, void 0, o) : [];
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
}, on(U$1));
var ad = Object.prototype;
var Ob = ad.hasOwnProperty;
var zb = ad.toString;
var Eb = nd(function(i, o, e) {
  o != null && typeof o.toString != "function" && (o = zb.call(o)), Ob.call(i, o) ? i[o].push(e) : i[o] = [e];
}, Y$1);
function ud(i, o) {
  return o.length < 2 ? i : zi(i, hi(o, 0, -1));
}
function Ho(i, o, e) {
  o = Qi(o, i), i = ud(i, o);
  var n = i == null ? i : i[vi(ri(o))];
  return n == null ? void 0 : ni(n, i, e);
}
var $b = S$1(Ho);
var qb = S$1(function(i, o, e) {
  var n = -1, a = typeof o == "function", u = V$1(i) ? Array(i.length) : [];
  return xi(i, function(g) {
    u[++n] = a ? ni(o, g, e) : Ho(g, o, e);
  }), u;
});
var Ib = "[object ArrayBuffer]";
function Ub(i) {
  return N$1(i) && $$1(i) == Ib;
}
var _a = si && si.isArrayBuffer;
var Vb = _a ? ai(_a) : Ub;
var ip = "[object Boolean]";
function op(i) {
  return i === true || i === false || N$1(i) && $$1(i) == ip;
}
var ep = "[object Date]";
function np(i) {
  return N$1(i) && $$1(i) == ep;
}
var Oa = si && si.isDate;
var ap = Oa ? ai(Oa) : np;
function up(i) {
  return N$1(i) && i.nodeType === 1 && !Jo(i);
}
var gp = "[object Map]";
var dp = "[object Set]";
var tp = Object.prototype;
var sp = tp.hasOwnProperty;
function hp(i) {
  if (i == null) return true;
  if (V$1(i) && (k$1(i) || typeof i == "string" || typeof i.splice == "function" || Ti(i) || to(i) || Ki(i))) return !i.length;
  var o = bi(i);
  if (o == gp || o == dp) return !i.size;
  if (So(i)) return !un(i).length;
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
var vp = P$1.isFinite;
function yp(i) {
  return typeof i == "number" && vp(i);
}
function gd(i) {
  return typeof i == "number" && i == Z$1(i);
}
function cp(i, o) {
  return i === o || fn(i, o, Yn(o));
}
function bp(i, o, e) {
  return e = typeof e == "function" ? e : void 0, fn(i, o, Yn(o), e);
}
var pp = "[object Number]";
function dd(i) {
  return typeof i == "number" || N$1(i) && $$1(i) == pp;
}
function wp(i) {
  return dd(i) && i != +i;
}
var jp = No ? Li : an;
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
  return N$1(i) && $$1(i) == Lp;
}
var za = si && si.isRegExp;
var Qn = za ? ai(za) : Zp;
var Ea = 9007199254740991;
function Sp(i) {
  return gd(i) && i >= -Ea && i <= Ea;
}
function Jp(i) {
  return i === void 0;
}
var Cp = "[object WeakMap]";
function Xp(i) {
  return N$1(i) && bi(i) == Cp;
}
var Hp = "[object WeakSet]";
function Dp(i) {
  return N$1(i) && $$1(i) == Hp;
}
var Tp = 1;
function Bp(i) {
  return Y$1(typeof i == "function" ? i : di(i, Tp));
}
var Qp = Array.prototype;
var Mp = Qp.join;
function Gp(i, o) {
  return i == null ? "" : Mp.call(i, o);
}
var Np = ho(function(i, o, e) {
  return i + (e ? "-" : "") + o.toLowerCase();
});
var xp = ue(function(i, o, e) {
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
  return e !== void 0 && (a = Z$1(e), a = a < 0 ? Pp(n + a, 0) : Fp(a, n - 1)), o === o ? Wp(i, o, a) : $o(i, Xu, a, true);
}
var Rp = ho(function(i, o, e) {
  return i + (e ? " " : "") + o.toLowerCase();
});
var Ap = qu("toLowerCase");
function Mn(i, o) {
  return i < o;
}
var _p = he(Mn);
var Op = he(function(i, o) {
  return i <= o;
});
function zp(i, o) {
  var e = {};
  return o = Y$1(o), ji(i, function(n, a, u) {
    pi(e, o(n, a, u), n);
  }), e;
}
function Ep(i, o) {
  var e = {};
  return o = Y$1(o), ji(i, function(n, a, u) {
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
function le(i, o, e) {
  for (var n = -1, a = i.length; ++n < a; ) {
    var u = i[n], g = o(u);
    if (g != null && (t === void 0 ? g === g && !oi(g) : e(g, t))) var t = g, s = u;
  }
  return s;
}
function Vp(i) {
  return i && i.length ? le(i, U$1, Hn) : void 0;
}
function iw(i, o) {
  return i && i.length ? le(i, Y$1(o), Hn) : void 0;
}
function Gn(i, o) {
  for (var e, n = -1, a = i.length; ++n < a; ) {
    var u = o(i[n]);
    u !== void 0 && (e = e === void 0 ? u : e + u);
  }
  return e;
}
var ow = NaN;
function td(i, o) {
  var e = i == null ? 0 : i.length;
  return e ? Gn(i, o) / e : ow;
}
function ew(i) {
  return td(i, U$1);
}
function nw(i, o) {
  return td(i, Y$1(o));
}
var aw = go(function(i, o, e) {
  ge(i, o, e);
});
var uw = S$1(function(i, o) {
  return function(e) {
    return Ho(e, i, o);
  };
});
var gw = S$1(function(i, o) {
  return function(e) {
    return Ho(i, e, o);
  };
});
function dw(i) {
  return i && i.length ? le(i, U$1, Mn) : void 0;
}
function tw(i, o) {
  return i && i.length ? le(i, Y$1(o), Mn) : void 0;
}
function sw(i, o, e) {
  var n = F$1(o), a = se(o, n), u = !(G$1(e) && "chain" in e) || !!e.chain, g = Li(i);
  return ui(a, function(t) {
    var s = o[t];
    i[t] = s, g && (i.prototype[t] = function() {
      var h = this.__chain__;
      if (u || h) {
        var r = i(this.__wrapped__), l = r.__actions__ = I$1(this.__actions__);
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
function ve(i) {
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
var ke = _$1 ? _$1.iterator : void 0;
function sd(i) {
  if (!i) return [];
  if (V$1(i)) return re(i) ? yi(i) : I$1(i);
  if (ke && i[ke]) return lw(i[ke]());
  var o = bi(i), e = o == vw ? mn : o == yw ? ae : ro;
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
  return i && i.length ? hd(i, Z$1(o)) : void 0;
}
function pw(i) {
  return i = Z$1(i), S$1(function(o) {
    return hd(o, i);
  });
}
var ww = Object.prototype;
var jw = ww.hasOwnProperty;
function Nn(i, o) {
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
  o = M$1(o, function(u) {
    return u = Qi(u, i), n || (n = u.length > 1), u;
  }), wi(i, pn(i), e), n && (e = di(e, fw | Yw | kw, mw));
  for (var a = o.length; a--; ) Nn(e, o[a]);
  return e;
});
function Do(i, o, e, n) {
  if (!G$1(i)) return i;
  o = Qi(o, i);
  for (var a = -1, u = o.length, g = u - 1, t = i; t != null && ++a < u; ) {
    var s = vi(o[a]), h = e;
    if (s === "__proto__" || s === "constructor" || s === "prototype") return i;
    if (a != g) {
      var r = t[s];
      h = n ? n(r, s, t) : void 0, h === void 0 && (h = G$1(r) ? r : Zi(o[a + 1]) ? [] : {});
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
  var e = M$1(pn(i), function(n) {
    return [n];
  });
  return o = Y$1(o), rd(i, e, function(n, a) {
    return o(n, a[0]);
  });
}
function Zw(i, o) {
  return ld(i, ve(Y$1(o)));
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
  o.length ? o = M$1(o, function(u) {
    return k$1(u) ? function(g) {
      return zi(g, u.length === 1 ? u[0] : u);
    } : u;
  }) : o = [U$1];
  var n = -1;
  o = M$1(o, ai(Y$1));
  var a = od(i, function(u, g, t) {
    var s = M$1(o, function(h) {
      return h(u);
    });
    return { criteria: s, index: ++n, value: u };
  });
  return Jw(a, function(u, g) {
    return Cw(u, g, e);
  });
}
function Xw(i, o, e, n) {
  return i == null ? [] : (k$1(o) || (o = o == null ? [] : [o]), e = n ? void 0 : e, k$1(e) || (e = e == null ? [] : [e]), yd(i, o, e));
}
function xn(i) {
  return Xi(function(o) {
    return o = M$1(o, ai(Y$1)), S$1(function(e) {
      var n = this;
      return i(o, function(a) {
        return ni(a, n, e);
      });
    });
  });
}
var Hw = xn(M$1);
var Dw = S$1;
var Tw = Math.min;
var Bw = Dw(function(i, o) {
  o = o.length == 1 && k$1(o[0]) ? M$1(o[0], ai(Y$1)) : M$1(A$1(o, 1), ai(Y$1));
  var e = o.length;
  return S$1(function(n) {
    for (var a = -1, u = Tw(n.length, e); ++a < u; ) n[a] = o[a].call(this, n[a]);
    return ni(i, this, n);
  });
});
var Qw = xn(Eg);
var Mw = xn(jn);
var Gw = 9007199254740991;
var Nw = Math.floor;
function Ae(i, o) {
  var e = "";
  if (!i || o < 1 || o > Gw) return e;
  do
    o % 2 && (e += i), o = Nw(o / 2), o && (i += i);
  while (o);
  return e;
}
var xw = Ln("length");
var cd = "\\ud800-\\udfff";
var Ww = "\\u0300-\\u036f";
var Pw = "\\ufe20-\\ufe2f";
var Fw = "\\u20d0-\\u20ff";
var Kw = Ww + Pw + Fw;
var Rw = "\\ufe0e\\ufe0f";
var Aw = "[" + cd + "]";
var _e = "[" + Kw + "]";
var Oe = "\\ud83c[\\udffb-\\udfff]";
var _w = "(?:" + _e + "|" + Oe + ")";
var bd = "[^" + cd + "]";
var pd = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var wd = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var Ow = "\\u200d";
var jd = _w + "?";
var md = "[" + Rw + "]?";
var zw = "(?:" + Ow + "(?:" + [bd, pd, wd].join("|") + ")" + md + jd + ")*";
var Ew = md + jd + zw;
var $w = "(?:" + [bd + _e + "?", _e, pd, wd, Aw].join("|") + ")";
var $a = RegExp(Oe + "(?=" + Oe + ")|" + $w + Ew, "g");
function qw(i) {
  for (var o = $a.lastIndex = 0; $a.test(i); ) ++o;
  return o;
}
function lo(i) {
  return so(i) ? qw(i) : xw(i);
}
var Iw = Math.ceil;
function _o(i, o) {
  o = o === void 0 ? " " : ei(o);
  var e = o.length;
  if (e < 2) return e ? Ae(o, i) : o;
  var n = Ae(o, Iw(i / lo(o)));
  return so(o) ? Gi(yi(n), 0, i).join("") : n.slice(0, i);
}
var Uw = Math.ceil;
var Vw = Math.floor;
function ij(i, o, e) {
  i = X$1(i), o = Z$1(o);
  var n = o ? lo(i) : 0;
  if (!o || n >= o) return i;
  var a = (o - n) / 2;
  return _o(Vw(a), e) + i + _o(Uw(a), e);
}
function oj(i, o, e) {
  i = X$1(i), o = Z$1(o);
  var n = o ? lo(i) : 0;
  return o && n < o ? i + _o(o - n, e) : i;
}
function ej(i, o, e) {
  i = X$1(i), o = Z$1(o);
  var n = o ? lo(i) : 0;
  return o && n < o ? _o(o - n, e) + i : i;
}
var nj = /^\s+/;
var aj = P$1.parseInt;
function uj(i, o, e) {
  return e || o == null ? o = 0 : o && (o = +o), aj(X$1(i).replace(nj, ""), o || 0);
}
var gj = 32;
var ye = S$1(function(i, o) {
  var e = Di(o, uo(ye));
  return Si(i, gj, void 0, o, e);
});
ye.placeholder = {};
var dj = 64;
var Wn = S$1(function(i, o) {
  var e = Di(o, uo(Wn));
  return Si(i, dj, void 0, o, e);
});
Wn.placeholder = {};
var tj = ue(function(i, o, e) {
  i[e ? 0 : 1].push(o);
}, function() {
  return [[], []];
});
function sj(i, o) {
  return rd(i, o, function(e, n) {
    return kn(i, n);
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
function Pn(i, o, e, n) {
  var a = n ? vj : ao, u = -1, g = o.length, t = i;
  for (i === o && (o = I$1(o)), e && (t = M$1(i, ai(e))); ++u < g; ) for (var s = 0, h = o[u], r = e ? e(h) : h; (s = a(t, r, s, n)) > -1; ) t !== i && qa.call(t, s, 1), qa.call(i, s, 1);
  return i;
}
function fd(i, o) {
  return i && i.length && o && o.length ? Pn(i, o) : i;
}
var cj = S$1(fd);
function bj(i, o, e) {
  return i && i.length && o && o.length ? Pn(i, o, Y$1(e)) : i;
}
function pj(i, o, e) {
  return i && i.length && o && o.length ? Pn(i, o, void 0, e) : i;
}
var wj = Array.prototype;
var jj = wj.splice;
function Yd(i, o) {
  for (var e = i ? o.length : 0, n = e - 1; e--; ) {
    var a = o[e];
    if (e == n || a !== u) {
      var u = a;
      Zi(a) ? jj.call(i, a, 1) : Nn(i, a);
    }
  }
  return i;
}
var mj = Xi(function(i, o) {
  var e = i == null ? 0 : i.length, n = tn(i, o);
  return Yd(i, M$1(o, function(a) {
    return Zi(a, e) ? +a : a;
  }).sort(vd)), n;
});
var fj = Math.floor;
var Yj = Math.random;
function Fn(i, o) {
  return i + fj(Yj() * (o - i + 1));
}
var kj = parseFloat;
var Lj = Math.min;
var Zj = Math.random;
function Sj(i, o, e) {
  if (e && typeof e != "boolean" && E$1(i, o, e) && (o = e = void 0), e === void 0 && (typeof o == "boolean" ? (e = o, o = void 0) : typeof i == "boolean" && (e = i, i = void 0)), i === void 0 && o === void 0 ? (i = 0, o = 1) : (i = ki(i), o === void 0 ? (o = i, i = 0) : o = ki(o)), i > o) {
    var n = i;
    i = o, o = n;
  }
  if (e || i % 1 || o % 1) {
    var a = Zj();
    return Lj(i + a * (o - i + kj("1e-" + ((a + "").length - 1))), o);
  }
  return Fn(i, o);
}
var Jj = Math.ceil;
var Cj = Math.max;
function Xj(i, o, e, n) {
  for (var a = -1, u = Cj(Jj((o - i) / (e || 1)), 0), g = Array(u); u--; ) g[n ? u : ++a] = i, i += e;
  return g;
}
function kd(i) {
  return function(o, e, n) {
    return n && typeof n != "number" && E$1(o, e, n) && (e = n = void 0), o = ki(o), e === void 0 ? (e = o, o = 0) : e = ki(e), n = n === void 0 ? o < e ? 1 : -1 : ki(n), Xj(o, e, n, i);
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
  var n = k$1(i) ? ln : Ld, a = arguments.length < 3;
  return n(i, Y$1(o), e, a, xi);
}
function Mj(i, o, e, n) {
  var a = i == null ? 0 : i.length;
  for (n && a && (e = i[--a]); a--; ) e = o(e, i[a], a, i);
  return e;
}
function Gj(i, o, e) {
  var n = k$1(i) ? Mj : Ld, a = arguments.length < 3;
  return n(i, Y$1(o), e, a, Rg);
}
function Nj(i, o) {
  var e = k$1(i) ? Ni : qg;
  return e(i, ve(Y$1(o)));
}
function xj(i, o) {
  var e = [];
  if (!(i && i.length)) return e;
  var n = -1, a = [], u = i.length;
  for (o = Y$1(o); ++n < u; ) {
    var g = i[n];
    o(g, n, i) && (e.push(g), a.push(n));
  }
  return Yd(i, a), e;
}
function Wj(i, o, e) {
  return (e ? E$1(i, o, e) : o === void 0) ? o = 1 : o = Z$1(o), Ae(X$1(i), o);
}
function Pj() {
  var i = arguments, o = X$1(i[0]);
  return i.length < 3 ? o : o.replace(i[1], i[2]);
}
var Fj = "Expected a function";
function Kj(i, o) {
  if (typeof i != "function") throw new TypeError(Fj);
  return o = o === void 0 ? o : Z$1(o), S$1(i, o);
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
function ze(i) {
  return i == null ? i : _j.call(i);
}
var Oj = yn("round");
function Zd(i) {
  var o = i.length;
  return o ? i[Fn(0, o - 1)] : void 0;
}
function zj(i) {
  return Zd(ro(i));
}
function Ej(i) {
  var o = k$1(i) ? Zd : zj;
  return o(i);
}
function ce(i, o) {
  var e = -1, n = i.length, a = n - 1;
  for (o = o === void 0 ? n : o; ++e < o; ) {
    var u = Fn(e, a), g = i[u];
    i[u] = i[e], i[e] = g;
  }
  return i.length = o, i;
}
function $j(i, o) {
  return ce(I$1(i), Ei(o, 0, i.length));
}
function qj(i, o) {
  var e = ro(i);
  return ce(e, Ei(o, 0, e.length));
}
function Ij(i, o, e) {
  (e ? E$1(i, o, e) : o === void 0) ? o = 1 : o = Z$1(o);
  var n = k$1(i) ? $j : qj;
  return n(i, o);
}
function Uj(i, o, e) {
  return i == null ? i : Do(i, o, e);
}
function Vj(i, o, e, n) {
  return n = typeof n == "function" ? n : void 0, i == null ? i : Do(i, o, e, n);
}
function im(i) {
  return ce(I$1(i));
}
function om(i) {
  return ce(ro(i));
}
function em(i) {
  var o = k$1(i) ? im : om;
  return o(i);
}
var nm = "[object Map]";
var am = "[object Set]";
function um(i) {
  if (i == null) return 0;
  if (V$1(i)) return re(i) ? lo(i) : i.length;
  var o = bi(i);
  return o == nm || o == am ? i.size : un(i).length;
}
function gm(i, o, e) {
  var n = i == null ? 0 : i.length;
  return n ? (e && typeof e != "number" && E$1(i, o, e) ? (o = 0, e = n) : (o = o == null ? 0 : Z$1(o), e = e === void 0 ? n : Z$1(e)), hi(i, o, e)) : [];
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
  var n = k$1(i) ? jn : tm;
  return e && E$1(i, o, e) && (o = void 0), n(i, Y$1(o));
}
var hm = S$1(function(i, o) {
  if (i == null) return [];
  var e = o.length;
  return e > 1 && E$1(i, o[0], o[1]) ? o = [] : e > 2 && E$1(o[0], o[1], o[2]) && (o = [o[0]]), yd(i, A$1(o, 1), []);
});
var rm = 4294967295;
var lm = rm - 1;
var vm = Math.floor;
var ym = Math.min;
function Kn(i, o, e, n) {
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
function be(i, o, e) {
  var n = 0, a = i == null ? n : i.length;
  if (typeof o == "number" && o === o && a <= bm) {
    for (; n < a; ) {
      var u = n + a >>> 1, g = i[u];
      g !== null && !oi(g) && (e ? g <= o : g < o) ? n = u + 1 : a = u;
    }
    return a;
  }
  return Kn(i, o, U$1, e);
}
function pm(i, o) {
  return be(i, o);
}
function wm(i, o, e) {
  return Kn(i, o, Y$1(e));
}
function jm(i, o) {
  var e = i == null ? 0 : i.length;
  if (e) {
    var n = be(i, o);
    if (n < e && ci(i[n], o)) return n;
  }
  return -1;
}
function mm(i, o) {
  return be(i, o, true);
}
function fm(i, o, e) {
  return Kn(i, o, Y$1(e), true);
}
function Ym(i, o) {
  var e = i == null ? 0 : i.length;
  if (e) {
    var n = be(i, o, true) - 1;
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
  return i && i.length ? Sd(i, Y$1(o)) : [];
}
var Zm = 4294967295;
function Sm(i, o, e) {
  return e && typeof e != "number" && E$1(i, o, e) && (o = e = void 0), e = e === void 0 ? Zm : e >>> 0, e ? (i = X$1(i), i && (typeof o == "string" || o != null && !Qn(o)) && (o = ei(o), !o && so(i)) ? Gi(yi(i), 0, e) : i.split(o, e)) : [];
}
var Jm = "Expected a function";
var Cm = Math.max;
function Xm(i, o) {
  if (typeof i != "function") throw new TypeError(Jm);
  return o = o == null ? 0 : Cm(Z$1(o), 0), S$1(function(e) {
    var n = e[o], a = Gi(e, 0, o);
    return n && Mi(a, n), ni(i, this, a);
  });
}
var Hm = ho(function(i, o, e) {
  return i + (e ? " " : "") + rn(o);
});
function Dm(i, o, e) {
  return i = X$1(i), e = e == null ? 0 : Ei(Z$1(e), 0, i.length), o = ei(o), i.slice(e, e + o.length) == o;
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
  return i && i.length ? Gn(i, U$1) : 0;
}
function Nm(i, o) {
  return i && i.length ? Gn(i, Y$1(o)) : 0;
}
function xm(i) {
  var o = i == null ? 0 : i.length;
  return o ? hi(i, 1, o) : [];
}
function Wm(i, o, e) {
  return i && i.length ? (o = e || o === void 0 ? 1 : Z$1(o), hi(i, 0, o < 0 ? 0 : o)) : [];
}
function Pm(i, o, e) {
  var n = i == null ? 0 : i.length;
  return n ? (o = e || o === void 0 ? 1 : Z$1(o), o = n - o, hi(i, o < 0 ? 0 : o, n)) : [];
}
function Fm(i, o) {
  return i && i.length ? de(i, Y$1(o), false, true) : [];
}
function Km(i, o) {
  return i && i.length ? de(i, Y$1(o)) : [];
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
var Ee = { escape: zm, evaluate: Em, interpolate: Cd, variable: "", imports: { _: { escape: Og } } };
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
  var n = Ee.imports._.templateSettings || Ee;
  e && E$1(i, o, e) && (o = void 0), i = X$1(i), o = Ge({}, o, n, Ia);
  var a = Ge({}, o.imports, n.imports, Ia), u = F$1(a), g = Dn(a, u);
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
  if (b.source = l, sn(b)) throw b;
  return b;
}
var uf = "Expected a function";
function gf(i, o, e) {
  var n = true, a = true;
  if (typeof i != "function") throw new TypeError(uf);
  return G$1(e) && (n = "leading" in e ? !!e.leading : n, a = "trailing" in e ? !!e.trailing : a), Gg(i, o, { leading: n, maxWait: o, trailing: a });
}
function pe(i, o) {
  return o(i);
}
var df = 9007199254740991;
var Le = 4294967295;
var tf = Math.min;
function sf(i, o) {
  if (i = Z$1(i), i < 1 || i > df) return [];
  var e = Le, n = tf(i, Le);
  o = mi(o), i -= Le;
  for (var a = nn(n, o); ++e < i; ) o(e);
  return a;
}
function hf() {
  return this;
}
function Xd(i, o) {
  var e = i;
  return e instanceof J$1 && (e = e.value()), ln(o, function(n, a) {
    return a.func.apply(a.thisArg, Mi([n], a.args));
  }, e);
}
function rf() {
  return Xd(this.__wrapped__, this.__actions__);
}
function lf(i) {
  return X$1(i).toLowerCase();
}
function vf(i) {
  return k$1(i) ? M$1(i, vi) : oi(i) ? [i] : I$1(Wu(X$1(i)));
}
var iu = 9007199254740991;
function yf(i) {
  return i ? Ei(Z$1(i), -iu, iu) : i === 0 ? i : 0;
}
function cf(i) {
  return X$1(i).toUpperCase();
}
function bf(i, o, e) {
  var n = k$1(i), a = n || Ti(i) || to(i);
  if (o = Y$1(o), e == null) {
    var u = i && i.constructor;
    a ? e = n ? new u() : [] : G$1(i) ? e = Li(u) ? no(ee(i)) : {} : e = {};
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
  if (i = X$1(i), i && (e || o === void 0)) return fu(i);
  if (!i || !(o = ei(o))) return i;
  var n = yi(i), a = yi(o), u = Dd(n, a), g = Hd(n, a) + 1;
  return Gi(n, u, g).join("");
}
function wf(i, o, e) {
  if (i = X$1(i), i && (e || o === void 0)) return i.slice(0, mu(i) + 1);
  if (!i || !(o = ei(o))) return i;
  var n = yi(i), a = Hd(n, yi(o)) + 1;
  return Gi(n, 0, a).join("");
}
var jf = /^\s+/;
function mf(i, o, e) {
  if (i = X$1(i), i && (e || o === void 0)) return i.replace(jf, "");
  if (!i || !(o = ei(o))) return i;
  var n = yi(i), a = Dd(n, yi(o));
  return Gi(n, a).join("");
}
var ff = 30;
var Yf = "...";
var kf = /\w*$/;
function Lf(i, o) {
  var e = ff, n = Yf;
  if (G$1(o)) {
    var a = "separator" in o ? o.separator : a;
    e = "length" in o ? Z$1(o.length) : e, n = "omission" in o ? ei(o.omission) : n;
  }
  i = X$1(i);
  var u = i.length;
  if (so(i)) {
    var g = yi(i);
    u = g.length;
  }
  if (e >= u) return i;
  var t = e - lo(n);
  if (t < 1) return n;
  var s = g ? Gi(g, 0, t).join("") : i.slice(0, t);
  if (a === void 0) return s + n;
  if (g && (t += s.length - t), Qn(a)) {
    if (i.slice(t).search(a)) {
      var h, r = s;
      for (a.global || (a = RegExp(a.source, X$1(kf.exec(a)) + "g")), a.lastIndex = 0; h = a.exec(r); ) var l = h.index;
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
var Jf = vn(Sf);
var Td = /&(?:amp|lt|gt|quot|#39);/g;
var Cf = RegExp(Td.source);
function Xf(i) {
  return i = X$1(i), i && Cf.test(i) ? i.replace(Td, Jf) : i;
}
var Hf = 1 / 0;
var Df = Vi && 1 / ae(new Vi([, -0]))[1] == Hf ? function(i) {
  return new Vi(i);
} : Ue;
var Tf = 200;
function Bi(i, o, e) {
  var n = -1, a = qo, u = i.length, g = true, t = [], s = t;
  if (e) g = false, a = Cn;
  else if (u >= Tf) {
    var h = o ? null : Df(i);
    if (h) return ae(h);
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
var Bf = S$1(function(i) {
  return Bi(A$1(i, 1, W$1, true));
});
var Qf = S$1(function(i) {
  var o = ri(i);
  return W$1(o) && (o = void 0), Bi(A$1(i, 1, W$1, true), Y$1(o));
});
var Mf = S$1(function(i) {
  var o = ri(i);
  return o = typeof o == "function" ? o : void 0, Bi(A$1(i, 1, W$1, true), void 0, o);
});
function Gf(i) {
  return i && i.length ? Bi(i) : [];
}
function Nf(i, o) {
  return i && i.length ? Bi(i, Y$1(o)) : [];
}
function xf(i, o) {
  return o = typeof o == "function" ? o : void 0, i && i.length ? Bi(i, void 0, o) : [];
}
var Wf = 0;
function Pf(i) {
  var o = ++Wf;
  return X$1(i) + o;
}
function Ff(i, o) {
  return i == null ? true : Nn(i, o);
}
var Kf = Math.max;
function Rn(i) {
  if (!(i && i.length)) return [];
  var o = 0;
  return i = Ni(i, function(e) {
    if (W$1(e)) return o = Kf(e.length, o), true;
  }), nn(o, function(e) {
    return M$1(i, Ln(e));
  });
}
function Bd(i, o) {
  if (!(i && i.length)) return [];
  var e = Rn(i);
  return o == null ? e : M$1(e, function(n) {
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
  return i == null ? [] : Dn(i, ii(i));
}
var zf = S$1(function(i, o) {
  return W$1(i) ? Xo(i, o) : [];
});
function Ef(i, o) {
  return ye(mi(o), i);
}
var $f = Xi(function(i) {
  var o = i.length, e = o ? i[0] : 0, n = this.__wrapped__, a = function(u) {
    return tn(u, i);
  };
  return o > 1 || this.__actions__.length || !(n instanceof J$1) || !Zi(e) ? this.thru(a) : (n = n.slice(e, +e + (o ? 1 : 0)), n.__actions__.push({ func: pe, args: [a], thisArg: void 0 }), new ti(n, this.__chain__).thru(function(u) {
    return o && !u.length && u.push(void 0), u;
  }));
});
function qf() {
  return vg(this);
}
function If() {
  var i = this.__wrapped__;
  if (i instanceof J$1) {
    var o = i;
    return this.__actions__.length && (o = new J$1(this)), o = o.reverse(), o.__actions__.push({ func: pe, args: [ze], thisArg: void 0 }), new ti(o, this.__chain__);
  }
  return this.thru(ze);
}
function An(i, o, e) {
  var n = i.length;
  if (n < 2) return n ? Bi(i[0]) : [];
  for (var a = -1, u = Array(n); ++a < n; ) for (var g = i[a], t = -1; ++t < n; ) t != a && (u[a] = Xo(u[a] || g, i[t], o, e));
  return Bi(A$1(u, 1), o, e);
}
var Uf = S$1(function(i) {
  return An(Ni(i, W$1));
});
var Vf = S$1(function(i) {
  var o = ri(i);
  return W$1(o) && (o = void 0), An(Ni(i, W$1), Y$1(o));
});
var iY = S$1(function(i) {
  var o = ri(i);
  return o = typeof o == "function" ? o : void 0, An(Ni(i, W$1), void 0, o);
});
var oY = S$1(Rn);
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
var aY = S$1(function(i) {
  var o = i.length, e = o > 1 ? i[o - 1] : void 0;
  return e = typeof e == "function" ? (i.pop(), e) : void 0, Bd(i, e);
});
const w$1 = { chunk: Zv, compact: gy, concat: dy, difference: lc, differenceBy: vc, differenceWith: yc, drop: bc, dropRight: pc, dropRightWhile: wc, dropWhile: jc, fill: Wc, findIndex: Ug, findLastIndex: id, flatten: Pu, flattenDeep: ib, flattenDepth: ob, fromPairs: bb, head: Ec, indexOf: Gb, initial: Nb, intersection: Wb, intersectionBy: Pb, intersectionWith: Fb, join: Gp, lastIndexOf: Kp, nth: bw, pull: cj, pullAll: fd, pullAllBy: bj, pullAllWith: pj, pullAt: mj, remove: xj, reverse: ze, slice: gm, sortedIndex: pm, sortedIndexBy: wm, sortedIndexOf: jm, sortedLastIndex: mm, sortedLastIndexBy: fm, sortedLastIndexOf: Ym, sortedUniq: km, sortedUniqBy: Lm, tail: xm, take: Wm, takeRight: Pm, takeRightWhile: Fm, takeWhile: Km, union: Bf, unionBy: Qf, unionWith: Mf, uniq: Gf, uniqBy: Nf, uniqWith: xf, unzip: Rn, unzipWith: Bd, without: zf, xor: Uf, xorBy: Vf, xorWith: iY, zip: oY, zipObject: eY, zipObjectDeep: nY, zipWith: aY };
const D$1 = { countBy: qy, every: Gc, filter: Pc, find: Kc, findLast: Oc, flatMap: $c, flatMapDeep: Ic, flatMapDepth: Uc, forEach: mc, forEachRight: Yc, groupBy: fb, includes: Qb, invokeMap: qb, keyBy: xp, map: te, orderBy: Xw, partition: tj, reduce: Qj, reduceRight: Gj, reject: Nj, sample: Ej, sampleSize: Ij, shuffle: em, size: um, some: sm, sortBy: hm };
const uY = { now: Wo };
const x$1 = { after: ts, ary: Tu, before: Ru, bind: ne, bindKey: hn, curry: Sn, curryRight: Jn, debounce: Gg, defer: sc, delay: hc, flip: nb, memoize: oe, once: Sw, overArgs: Bw, partial: ye, partialRight: Wn, rearg: Bj, rest: Kj, spread: Xm, throttle: gf, unary: Zf, wrap: Ef };
const m$1 = { castArray: jv, clone: q0, cloneDeep: V0, cloneDeepWith: ey, cloneWith: ay, conformsTo: _y, eq: ci, gt: Yb, gte: kb, isArguments: Ki, isArrayBuffer: Vb, isArrayLike: V$1, isArrayLikeObject: W$1, isBoolean: op, isBuffer: Ti, isDate: ap, isElement: up, isEmpty: hp, isEqual: rp, isEqualWith: lp, isError: sn, isFinite: yp, isFunction: Li, isInteger: gd, isLength: Uo, isMap: fg, isMatch: cp, isMatchWith: bp, isNaN: wp, isNative: fp, isNil: Yp, isNull: kp, isNumber: dd, isObjectLike: N$1, isPlainObject: Jo, isRegExp: Qn, isSafeInteger: Sp, isSet: Yg, isString: re, isSymbol: oi, isTypedArray: to, isUndefined: Jp, isWeakMap: Xp, isWeakSet: Dp, lt: _p, lte: Op, toArray: sd, toFinite: ki, toLength: $g, toNumber: gi, toPlainObject: xg, toSafeInteger: yf, toString: X$1 };
const q$1 = { add: Vt, ceil: Yv, divide: cc, floor: ab, max: Vp, maxBy: iw, mean: ew, meanBy: nw, min: dw, minBy: tw, multiply: hw, round: Oj, subtract: Mm, sum: Gm, sumBy: Nm };
const _n = { clamp: Sv, inRange: Db, random: Sj };
const f = { assign: lr, assignIn: pr, assignInWith: wr, assignWith: Ge, at: Ir, create: Iy, defaults: uc, defaultsDeep: dc, findKey: Rc, findLastKey: zc, forIn: lb, forInRight: vb, forOwn: yb, forOwnRight: cb, functions: pb, functionsIn: wb, get: dn, has: Jb, hasIn: kn, invert: _b, invertBy: Eb, invoke: $b, keysIn: ii, mapKeys: zp, mapValues: Ep, merge: aw, mergeWith: Pg, omit: Lw, omitBy: Zw, pick: hj, pickBy: ld, result: Rj, set: Uj, setWith: Vj, toPairs: Cc, toPairsIn: Xc, transform: bf, unset: Ff, update: Rf, updateWith: Af, values: ro, valuesIn: Of };
const fi = { at: $f, chain: vg, commit: uy, next: cw, plant: rj, reverse: If, tap: Rm, toIterator: hf, value: rf, wrapperChain: qf };
const C$1 = { camelCase: wv, capitalize: Iu, deburr: Uu, endsWith: kc, escape: Og, escapeRegExp: Qc, kebabCase: Np, lowerCase: Rp, lowerFirst: Ap, pad: ij, padEnd: oj, padStart: ej, parseInt: uj, repeat: Wj, replace: Pj, snakeCase: dm, split: Sm, startCase: Hm, startsWith: Dm, template: af, templateSettings: Ee, toLower: lf, toUpper: cf, trim: pf, trimEnd: wf, trimStart: mf, truncate: Lf, unescape: Xf, upperCase: _f, upperFirst: rn, words: lg };
const H$1 = { attempt: Ku, bindAll: tl, cond: Fy, conforms: Ay, constant: on, defaultTo: nc, flow: hb, flowRight: rb, iteratee: Bp, matches: qp, matchesProperty: Up, method: uw, methodOf: gw, noop: Ue, nthArg: pw, over: Hw, overEvery: Qw, overSome: Mw, property: Tg, propertyOf: lj, range: Hj, rangeRight: Dj, stubArray: cn, stubFalse: an, stubObject: Tm, stubString: Bm, stubTrue: Qm, times: sf, toPath: vf, uniqueId: Pf };
function gY() {
  var i = new J$1(this.__wrapped__);
  return i.__actions__ = I$1(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = I$1(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = I$1(this.__views__), i;
}
function dY() {
  if (this.__filtered__) {
    var i = new J$1(this);
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
  var i = this.__wrapped__.value(), o = this.__dir__, e = k$1(i), n = o < 0, a = e ? i.length : 0, u = hY(0, a, this.__views__), g = u.start, t = u.end, s = t - g, h = n ? t : g - 1, r = this.__iteratees__, l = r.length, v = 0, y = vY(s, this.__takeCount__);
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
var ou = _$1 ? _$1.iterator : void 0;
var fY = Math.max;
var eu = Math.min;
var On = /* @__PURE__ */ (function(i) {
  return function(o, e, n) {
    if (n == null) {
      var a = G$1(e), u = a && F$1(e), g = u && u.length && se(e, u);
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
d$1.bindAll = H$1.bindAll;
d$1.bindKey = x$1.bindKey;
d$1.castArray = m$1.castArray;
d$1.chain = fi.chain;
d$1.chunk = w$1.chunk;
d$1.compact = w$1.compact;
d$1.concat = w$1.concat;
d$1.cond = H$1.cond;
d$1.conforms = H$1.conforms;
d$1.constant = H$1.constant;
d$1.countBy = D$1.countBy;
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
d$1.filter = D$1.filter;
d$1.flatMap = D$1.flatMap;
d$1.flatMapDeep = D$1.flatMapDeep;
d$1.flatMapDepth = D$1.flatMapDepth;
d$1.flatten = w$1.flatten;
d$1.flattenDeep = w$1.flattenDeep;
d$1.flattenDepth = w$1.flattenDepth;
d$1.flip = x$1.flip;
d$1.flow = H$1.flow;
d$1.flowRight = H$1.flowRight;
d$1.fromPairs = w$1.fromPairs;
d$1.functions = f.functions;
d$1.functionsIn = f.functionsIn;
d$1.groupBy = D$1.groupBy;
d$1.initial = w$1.initial;
d$1.intersection = w$1.intersection;
d$1.intersectionBy = w$1.intersectionBy;
d$1.intersectionWith = w$1.intersectionWith;
d$1.invert = f.invert;
d$1.invertBy = f.invertBy;
d$1.invokeMap = D$1.invokeMap;
d$1.iteratee = H$1.iteratee;
d$1.keyBy = D$1.keyBy;
d$1.keys = F$1;
d$1.keysIn = f.keysIn;
d$1.map = D$1.map;
d$1.mapKeys = f.mapKeys;
d$1.mapValues = f.mapValues;
d$1.matches = H$1.matches;
d$1.matchesProperty = H$1.matchesProperty;
d$1.memoize = x$1.memoize;
d$1.merge = f.merge;
d$1.mergeWith = f.mergeWith;
d$1.method = H$1.method;
d$1.methodOf = H$1.methodOf;
d$1.mixin = On;
d$1.negate = ve;
d$1.nthArg = H$1.nthArg;
d$1.omit = f.omit;
d$1.omitBy = f.omitBy;
d$1.once = x$1.once;
d$1.orderBy = D$1.orderBy;
d$1.over = H$1.over;
d$1.overArgs = x$1.overArgs;
d$1.overEvery = H$1.overEvery;
d$1.overSome = H$1.overSome;
d$1.partial = x$1.partial;
d$1.partialRight = x$1.partialRight;
d$1.partition = D$1.partition;
d$1.pick = f.pick;
d$1.pickBy = f.pickBy;
d$1.property = H$1.property;
d$1.propertyOf = H$1.propertyOf;
d$1.pull = w$1.pull;
d$1.pullAll = w$1.pullAll;
d$1.pullAllBy = w$1.pullAllBy;
d$1.pullAllWith = w$1.pullAllWith;
d$1.pullAt = w$1.pullAt;
d$1.range = H$1.range;
d$1.rangeRight = H$1.rangeRight;
d$1.rearg = x$1.rearg;
d$1.reject = D$1.reject;
d$1.remove = w$1.remove;
d$1.rest = x$1.rest;
d$1.reverse = w$1.reverse;
d$1.sampleSize = D$1.sampleSize;
d$1.set = f.set;
d$1.setWith = f.setWith;
d$1.shuffle = D$1.shuffle;
d$1.slice = w$1.slice;
d$1.sortBy = D$1.sortBy;
d$1.sortedUniq = w$1.sortedUniq;
d$1.sortedUniqBy = w$1.sortedUniqBy;
d$1.split = C$1.split;
d$1.spread = x$1.spread;
d$1.tail = w$1.tail;
d$1.take = w$1.take;
d$1.takeRight = w$1.takeRight;
d$1.takeRightWhile = w$1.takeRightWhile;
d$1.takeWhile = w$1.takeWhile;
d$1.tap = fi.tap;
d$1.throttle = x$1.throttle;
d$1.thru = pe;
d$1.toArray = m$1.toArray;
d$1.toPairs = f.toPairs;
d$1.toPairsIn = f.toPairsIn;
d$1.toPath = H$1.toPath;
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
d$1.words = C$1.words;
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
On(d$1, d$1);
d$1.add = q$1.add;
d$1.attempt = H$1.attempt;
d$1.camelCase = C$1.camelCase;
d$1.capitalize = C$1.capitalize;
d$1.ceil = q$1.ceil;
d$1.clamp = _n.clamp;
d$1.clone = m$1.clone;
d$1.cloneDeep = m$1.cloneDeep;
d$1.cloneDeepWith = m$1.cloneDeepWith;
d$1.cloneWith = m$1.cloneWith;
d$1.conformsTo = m$1.conformsTo;
d$1.deburr = C$1.deburr;
d$1.defaultTo = H$1.defaultTo;
d$1.divide = q$1.divide;
d$1.endsWith = C$1.endsWith;
d$1.eq = m$1.eq;
d$1.escape = C$1.escape;
d$1.escapeRegExp = C$1.escapeRegExp;
d$1.every = D$1.every;
d$1.find = D$1.find;
d$1.findIndex = w$1.findIndex;
d$1.findKey = f.findKey;
d$1.findLast = D$1.findLast;
d$1.findLastIndex = w$1.findLastIndex;
d$1.findLastKey = f.findLastKey;
d$1.floor = q$1.floor;
d$1.forEach = D$1.forEach;
d$1.forEachRight = D$1.forEachRight;
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
d$1.identity = U$1;
d$1.includes = D$1.includes;
d$1.indexOf = w$1.indexOf;
d$1.inRange = _n.inRange;
d$1.invoke = f.invoke;
d$1.isArguments = m$1.isArguments;
d$1.isArray = k$1;
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
d$1.isObject = G$1;
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
d$1.kebabCase = C$1.kebabCase;
d$1.last = ri;
d$1.lastIndexOf = w$1.lastIndexOf;
d$1.lowerCase = C$1.lowerCase;
d$1.lowerFirst = C$1.lowerFirst;
d$1.lt = m$1.lt;
d$1.lte = m$1.lte;
d$1.max = q$1.max;
d$1.maxBy = q$1.maxBy;
d$1.mean = q$1.mean;
d$1.meanBy = q$1.meanBy;
d$1.min = q$1.min;
d$1.minBy = q$1.minBy;
d$1.stubArray = H$1.stubArray;
d$1.stubFalse = H$1.stubFalse;
d$1.stubObject = H$1.stubObject;
d$1.stubString = H$1.stubString;
d$1.stubTrue = H$1.stubTrue;
d$1.multiply = q$1.multiply;
d$1.nth = w$1.nth;
d$1.noop = H$1.noop;
d$1.now = uY.now;
d$1.pad = C$1.pad;
d$1.padEnd = C$1.padEnd;
d$1.padStart = C$1.padStart;
d$1.parseInt = C$1.parseInt;
d$1.random = _n.random;
d$1.reduce = D$1.reduce;
d$1.reduceRight = D$1.reduceRight;
d$1.repeat = C$1.repeat;
d$1.replace = C$1.replace;
d$1.result = f.result;
d$1.round = q$1.round;
d$1.sample = D$1.sample;
d$1.size = D$1.size;
d$1.snakeCase = C$1.snakeCase;
d$1.some = D$1.some;
d$1.sortedIndex = w$1.sortedIndex;
d$1.sortedIndexBy = w$1.sortedIndexBy;
d$1.sortedIndexOf = w$1.sortedIndexOf;
d$1.sortedLastIndex = w$1.sortedLastIndex;
d$1.sortedLastIndexBy = w$1.sortedLastIndexBy;
d$1.sortedLastIndexOf = w$1.sortedLastIndexOf;
d$1.startCase = C$1.startCase;
d$1.startsWith = C$1.startsWith;
d$1.subtract = q$1.subtract;
d$1.sum = q$1.sum;
d$1.sumBy = q$1.sumBy;
d$1.template = C$1.template;
d$1.times = H$1.times;
d$1.toFinite = m$1.toFinite;
d$1.toInteger = Z$1;
d$1.toLength = m$1.toLength;
d$1.toLower = C$1.toLower;
d$1.toNumber = m$1.toNumber;
d$1.toSafeInteger = m$1.toSafeInteger;
d$1.toString = m$1.toString;
d$1.toUpper = C$1.toUpper;
d$1.trim = C$1.trim;
d$1.trimEnd = C$1.trimEnd;
d$1.trimStart = C$1.trimStart;
d$1.truncate = C$1.truncate;
d$1.unescape = C$1.unescape;
d$1.uniqueId = H$1.uniqueId;
d$1.upperCase = C$1.upperCase;
d$1.upperFirst = C$1.upperFirst;
d$1.each = D$1.forEach;
d$1.eachRight = D$1.forEachRight;
d$1.first = w$1.head;
On(d$1, (function() {
  var i = {};
  return ji(d$1, function(o, e) {
    Nd.call(d$1.prototype, e) || (i[e] = o);
  }), i;
})(), { chain: false });
d$1.VERSION = cY;
(d$1.templateSettings = C$1.templateSettings).imports._ = d$1;
ui(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
  d$1[i].placeholder = d$1;
});
ui(["drop", "take"], function(i, o) {
  J$1.prototype[i] = function(e) {
    e = e === void 0 ? 1 : fY(Z$1(e), 0);
    var n = this.__filtered__ && !o ? new J$1(this) : this.clone();
    return n.__filtered__ ? n.__takeCount__ = eu(e, n.__takeCount__) : n.__views__.push({ size: eu(e, Gd), type: i + (n.__dir__ < 0 ? "Right" : "") }), n;
  }, J$1.prototype[i + "Right"] = function(e) {
    return this.reverse()[i](e).reverse();
  };
});
ui(["filter", "map", "takeWhile"], function(i, o) {
  var e = o + 1, n = e == pY || e == wY;
  J$1.prototype[i] = function(a) {
    var u = this.clone();
    return u.__iteratees__.push({ iteratee: Y$1(a), type: e }), u.__filtered__ = u.__filtered__ || n, u;
  };
});
ui(["head", "last"], function(i, o) {
  var e = "take" + (o ? "Right" : "");
  J$1.prototype[i] = function() {
    return this[e](1).value()[0];
  };
});
ui(["initial", "tail"], function(i, o) {
  var e = "drop" + (o ? "" : "Right");
  J$1.prototype[i] = function() {
    return this.__filtered__ ? new J$1(this) : this[e](1);
  };
});
J$1.prototype.compact = function() {
  return this.filter(U$1);
};
J$1.prototype.find = function(i) {
  return this.filter(i).head();
};
J$1.prototype.findLast = function(i) {
  return this.reverse().find(i);
};
J$1.prototype.invokeMap = S$1(function(i, o) {
  return typeof i == "function" ? new J$1(this) : this.map(function(e) {
    return Ho(e, i, o);
  });
});
J$1.prototype.reject = function(i) {
  return this.filter(ve(Y$1(i)));
};
J$1.prototype.slice = function(i, o) {
  i = Z$1(i);
  var e = this;
  return e.__filtered__ && (i > 0 || o < 0) ? new J$1(e) : (i < 0 ? e = e.takeRight(-i) : i && (e = e.drop(i)), o !== void 0 && (o = Z$1(o), e = o < 0 ? e.dropRight(-o) : e.take(o - i)), e);
};
J$1.prototype.takeRightWhile = function(i) {
  return this.reverse().takeWhile(i).reverse();
};
J$1.prototype.toArray = function() {
  return this.take(Gd);
};
ji(J$1.prototype, function(i, o) {
  var e = /^(?:filter|find|map|reject)|While$/.test(o), n = /^(?:head|last)$/.test(o), a = d$1[n ? "take" + (o == "last" ? "Right" : "") : o], u = n || /^find/.test(o);
  a && (d$1.prototype[o] = function() {
    var g = this.__wrapped__, t = n ? [1] : arguments, s = g instanceof J$1, h = t[0], r = s || k$1(g), l = function(j) {
      var L = a.apply(d$1, Mi([j], t));
      return n && v ? L[0] : L;
    };
    r && e && typeof h == "function" && h.length != 1 && (s = r = false);
    var v = this.__chain__, y = !!this.__actions__.length, c = u && !v, b = s && !y;
    if (!u && r) {
      g = b ? g : new J$1(this);
      var p = i.apply(g, t);
      return p.__actions__.push({ func: pe, args: [l], thisArg: void 0 }), new ti(p, v);
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
      return o.apply(k$1(u) ? u : [], a);
    }
    return this[e](function(g) {
      return o.apply(k$1(g) ? g : [], a);
    });
  };
});
ji(J$1.prototype, function(i, o) {
  var e = d$1[o];
  if (e) {
    var n = e.name + "";
    Nd.call(Ui, n) || (Ui[n] = []), Ui[n].push({ name: o, func: e });
  }
});
Ui[Io(void 0, bY).name] = [{ name: "wrapper", func: void 0 }];
J$1.prototype.clone = gY;
J$1.prototype.reverse = dY;
J$1.prototype.value = yY;
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
function zn(i, o) {
  for (var e = {}, n = {}, a = i.split(kY), u = false, g = 0; a.length > g; g++) {
    for (var t = a[g].split(YY), s = 0; s < t.length; s += 2) {
      var h = t[s], r = t[s + 1], l = "&" + h + ";";
      e[l] = r, u && (e["&" + h] = r), n[r] = l;
    }
    u = true;
  }
  return o ? { entities: Ii(Ii({}, e), o.entities), characters: Ii(Ii({}, n), o.characters) } : { entities: e, characters: n };
}
var Ze = { xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g, html4: /&notin;|&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g, html5: /&centerdot;|&copysr;|&divideontimes;|&gtcc;|&gtcir;|&gtdot;|&gtlPar;|&gtquest;|&gtrapprox;|&gtrarr;|&gtrdot;|&gtreqless;|&gtreqqless;|&gtrless;|&gtrsim;|&ltcc;|&ltcir;|&ltdot;|&lthree;|&ltimes;|&ltlarr;|&ltquest;|&ltrPar;|&ltri;|&ltrie;|&ltrif;|&notin;|&notinE;|&notindot;|&notinva;|&notinvb;|&notinvc;|&notni;|&notniva;|&notnivb;|&notnivc;|&parallel;|&timesb;|&timesbar;|&timesd;|&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g };
var io = {};
io.xml = zn(`lt~<~gt~>~quot~"~apos~'~amp~&`);
io.html4 = zn(`apos~'~OElig~Œ~oelig~œ~Scaron~Š~scaron~š~Yuml~Ÿ~circ~ˆ~tilde~˜~ensp~ ~emsp~ ~thinsp~ ~zwnj~‌~zwj~‍~lrm~‎~rlm~‏~ndash~–~mdash~—~lsquo~‘~rsquo~’~sbquo~‚~ldquo~“~rdquo~”~bdquo~„~dagger~†~Dagger~‡~permil~‰~lsaquo~‹~rsaquo~›~euro~€~fnof~ƒ~Alpha~Α~Beta~Β~Gamma~Γ~Delta~Δ~Epsilon~Ε~Zeta~Ζ~Eta~Η~Theta~Θ~Iota~Ι~Kappa~Κ~Lambda~Λ~Mu~Μ~Nu~Ν~Xi~Ξ~Omicron~Ο~Pi~Π~Rho~Ρ~Sigma~Σ~Tau~Τ~Upsilon~Υ~Phi~Φ~Chi~Χ~Psi~Ψ~Omega~Ω~alpha~α~beta~β~gamma~γ~delta~δ~epsilon~ε~zeta~ζ~eta~η~theta~θ~iota~ι~kappa~κ~lambda~λ~mu~μ~nu~ν~xi~ξ~omicron~ο~pi~π~rho~ρ~sigmaf~ς~sigma~σ~tau~τ~upsilon~υ~phi~φ~chi~χ~psi~ψ~omega~ω~thetasym~ϑ~upsih~ϒ~piv~ϖ~bull~•~hellip~…~prime~′~Prime~″~oline~‾~frasl~⁄~weierp~℘~image~ℑ~real~ℜ~trade~™~alefsym~ℵ~larr~←~uarr~↑~rarr~→~darr~↓~harr~↔~crarr~↵~lArr~⇐~uArr~⇑~rArr~⇒~dArr~⇓~hArr~⇔~forall~∀~part~∂~exist~∃~empty~∅~nabla~∇~isin~∈~notin~∉~ni~∋~prod~∏~sum~∑~minus~−~lowast~∗~radic~√~prop~∝~infin~∞~ang~∠~and~∧~or~∨~cap~∩~cup~∪~int~∫~there4~∴~sim~∼~cong~≅~asymp~≈~ne~≠~equiv~≡~le~≤~ge~≥~sub~⊂~sup~⊃~nsub~⊄~sube~⊆~supe~⊇~oplus~⊕~otimes~⊗~perp~⊥~sdot~⋅~lceil~⌈~rceil~⌉~lfloor~⌊~rfloor~⌋~lang~〈~rang~〉~loz~◊~spades~♠~clubs~♣~hearts~♥~diams~♦~~nbsp~ ~iexcl~¡~cent~¢~pound~£~curren~¤~yen~¥~brvbar~¦~sect~§~uml~¨~copy~©~ordf~ª~laquo~«~not~¬~shy~­~reg~®~macr~¯~deg~°~plusmn~±~sup2~²~sup3~³~acute~´~micro~µ~para~¶~middot~·~cedil~¸~sup1~¹~ordm~º~raquo~»~frac14~¼~frac12~½~frac34~¾~iquest~¿~Agrave~À~Aacute~Á~Acirc~Â~Atilde~Ã~Auml~Ä~Aring~Å~AElig~Æ~Ccedil~Ç~Egrave~È~Eacute~É~Ecirc~Ê~Euml~Ë~Igrave~Ì~Iacute~Í~Icirc~Î~Iuml~Ï~ETH~Ð~Ntilde~Ñ~Ograve~Ò~Oacute~Ó~Ocirc~Ô~Otilde~Õ~Ouml~Ö~times~×~Oslash~Ø~Ugrave~Ù~Uacute~Ú~Ucirc~Û~Uuml~Ü~Yacute~Ý~THORN~Þ~szlig~ß~agrave~à~aacute~á~acirc~â~atilde~ã~auml~ä~aring~å~aelig~æ~ccedil~ç~egrave~è~eacute~é~ecirc~ê~euml~ë~igrave~ì~iacute~í~icirc~î~iuml~ï~eth~ð~ntilde~ñ~ograve~ò~oacute~ó~ocirc~ô~otilde~õ~ouml~ö~divide~÷~oslash~ø~ugrave~ù~uacute~ú~ucirc~û~uuml~ü~yacute~ý~thorn~þ~yuml~ÿ~quot~"~amp~&~lt~<~gt~>`);
io.html5 = zn('Abreve~Ă~Acy~А~Afr~𝔄~Amacr~Ā~And~⩓~Aogon~Ą~Aopf~𝔸~ApplyFunction~⁡~Ascr~𝒜~Assign~≔~Backslash~∖~Barv~⫧~Barwed~⌆~Bcy~Б~Because~∵~Bernoullis~ℬ~Bfr~𝔅~Bopf~𝔹~Breve~˘~Bscr~ℬ~Bumpeq~≎~CHcy~Ч~Cacute~Ć~Cap~⋒~CapitalDifferentialD~ⅅ~Cayleys~ℭ~Ccaron~Č~Ccirc~Ĉ~Cconint~∰~Cdot~Ċ~Cedilla~¸~CenterDot~·~Cfr~ℭ~CircleDot~⊙~CircleMinus~⊖~CirclePlus~⊕~CircleTimes~⊗~ClockwiseContourIntegral~∲~CloseCurlyDoubleQuote~”~CloseCurlyQuote~’~Colon~∷~Colone~⩴~Congruent~≡~Conint~∯~ContourIntegral~∮~Copf~ℂ~Coproduct~∐~CounterClockwiseContourIntegral~∳~Cross~⨯~Cscr~𝒞~Cup~⋓~CupCap~≍~DD~ⅅ~DDotrahd~⤑~DJcy~Ђ~DScy~Ѕ~DZcy~Џ~Darr~↡~Dashv~⫤~Dcaron~Ď~Dcy~Д~Del~∇~Dfr~𝔇~DiacriticalAcute~´~DiacriticalDot~˙~DiacriticalDoubleAcute~˝~DiacriticalGrave~`~DiacriticalTilde~˜~Diamond~⋄~DifferentialD~ⅆ~Dopf~𝔻~Dot~¨~DotDot~⃜~DotEqual~≐~DoubleContourIntegral~∯~DoubleDot~¨~DoubleDownArrow~⇓~DoubleLeftArrow~⇐~DoubleLeftRightArrow~⇔~DoubleLeftTee~⫤~DoubleLongLeftArrow~⟸~DoubleLongLeftRightArrow~⟺~DoubleLongRightArrow~⟹~DoubleRightArrow~⇒~DoubleRightTee~⊨~DoubleUpArrow~⇑~DoubleUpDownArrow~⇕~DoubleVerticalBar~∥~DownArrow~↓~DownArrowBar~⤓~DownArrowUpArrow~⇵~DownBreve~̑~DownLeftRightVector~⥐~DownLeftTeeVector~⥞~DownLeftVector~↽~DownLeftVectorBar~⥖~DownRightTeeVector~⥟~DownRightVector~⇁~DownRightVectorBar~⥗~DownTee~⊤~DownTeeArrow~↧~Downarrow~⇓~Dscr~𝒟~Dstrok~Đ~ENG~Ŋ~Ecaron~Ě~Ecy~Э~Edot~Ė~Efr~𝔈~Element~∈~Emacr~Ē~EmptySmallSquare~◻~EmptyVerySmallSquare~▫~Eogon~Ę~Eopf~𝔼~Equal~⩵~EqualTilde~≂~Equilibrium~⇌~Escr~ℰ~Esim~⩳~Exists~∃~ExponentialE~ⅇ~Fcy~Ф~Ffr~𝔉~FilledSmallSquare~◼~FilledVerySmallSquare~▪~Fopf~𝔽~ForAll~∀~Fouriertrf~ℱ~Fscr~ℱ~GJcy~Ѓ~Gammad~Ϝ~Gbreve~Ğ~Gcedil~Ģ~Gcirc~Ĝ~Gcy~Г~Gdot~Ġ~Gfr~𝔊~Gg~⋙~Gopf~𝔾~GreaterEqual~≥~GreaterEqualLess~⋛~GreaterFullEqual~≧~GreaterGreater~⪢~GreaterLess~≷~GreaterSlantEqual~⩾~GreaterTilde~≳~Gscr~𝒢~Gt~≫~HARDcy~Ъ~Hacek~ˇ~Hat~^~Hcirc~Ĥ~Hfr~ℌ~HilbertSpace~ℋ~Hopf~ℍ~HorizontalLine~─~Hscr~ℋ~Hstrok~Ħ~HumpDownHump~≎~HumpEqual~≏~IEcy~Е~IJlig~Ĳ~IOcy~Ё~Icy~И~Idot~İ~Ifr~ℑ~Im~ℑ~Imacr~Ī~ImaginaryI~ⅈ~Implies~⇒~Int~∬~Integral~∫~Intersection~⋂~InvisibleComma~⁣~InvisibleTimes~⁢~Iogon~Į~Iopf~𝕀~Iscr~ℐ~Itilde~Ĩ~Iukcy~І~Jcirc~Ĵ~Jcy~Й~Jfr~𝔍~Jopf~𝕁~Jscr~𝒥~Jsercy~Ј~Jukcy~Є~KHcy~Х~KJcy~Ќ~Kcedil~Ķ~Kcy~К~Kfr~𝔎~Kopf~𝕂~Kscr~𝒦~LJcy~Љ~Lacute~Ĺ~Lang~⟪~Laplacetrf~ℒ~Larr~↞~Lcaron~Ľ~Lcedil~Ļ~Lcy~Л~LeftAngleBracket~⟨~LeftArrow~←~LeftArrowBar~⇤~LeftArrowRightArrow~⇆~LeftCeiling~⌈~LeftDoubleBracket~⟦~LeftDownTeeVector~⥡~LeftDownVector~⇃~LeftDownVectorBar~⥙~LeftFloor~⌊~LeftRightArrow~↔~LeftRightVector~⥎~LeftTee~⊣~LeftTeeArrow~↤~LeftTeeVector~⥚~LeftTriangle~⊲~LeftTriangleBar~⧏~LeftTriangleEqual~⊴~LeftUpDownVector~⥑~LeftUpTeeVector~⥠~LeftUpVector~↿~LeftUpVectorBar~⥘~LeftVector~↼~LeftVectorBar~⥒~Leftarrow~⇐~Leftrightarrow~⇔~LessEqualGreater~⋚~LessFullEqual~≦~LessGreater~≶~LessLess~⪡~LessSlantEqual~⩽~LessTilde~≲~Lfr~𝔏~Ll~⋘~Lleftarrow~⇚~Lmidot~Ŀ~LongLeftArrow~⟵~LongLeftRightArrow~⟷~LongRightArrow~⟶~Longleftarrow~⟸~Longleftrightarrow~⟺~Longrightarrow~⟹~Lopf~𝕃~LowerLeftArrow~↙~LowerRightArrow~↘~Lscr~ℒ~Lsh~↰~Lstrok~Ł~Lt~≪~Map~⤅~Mcy~М~MediumSpace~ ~Mellintrf~ℳ~Mfr~𝔐~MinusPlus~∓~Mopf~𝕄~Mscr~ℳ~NJcy~Њ~Nacute~Ń~Ncaron~Ň~Ncedil~Ņ~Ncy~Н~NegativeMediumSpace~​~NegativeThickSpace~​~NegativeThinSpace~​~NegativeVeryThinSpace~​~NestedGreaterGreater~≫~NestedLessLess~≪~NewLine~\n~Nfr~𝔑~NoBreak~⁠~NonBreakingSpace~ ~Nopf~ℕ~Not~⫬~NotCongruent~≢~NotCupCap~≭~NotDoubleVerticalBar~∦~NotElement~∉~NotEqual~≠~NotEqualTilde~≂̸~NotExists~∄~NotGreater~≯~NotGreaterEqual~≱~NotGreaterFullEqual~≧̸~NotGreaterGreater~≫̸~NotGreaterLess~≹~NotGreaterSlantEqual~⩾̸~NotGreaterTilde~≵~NotHumpDownHump~≎̸~NotHumpEqual~≏̸~NotLeftTriangle~⋪~NotLeftTriangleBar~⧏̸~NotLeftTriangleEqual~⋬~NotLess~≮~NotLessEqual~≰~NotLessGreater~≸~NotLessLess~≪̸~NotLessSlantEqual~⩽̸~NotLessTilde~≴~NotNestedGreaterGreater~⪢̸~NotNestedLessLess~⪡̸~NotPrecedes~⊀~NotPrecedesEqual~⪯̸~NotPrecedesSlantEqual~⋠~NotReverseElement~∌~NotRightTriangle~⋫~NotRightTriangleBar~⧐̸~NotRightTriangleEqual~⋭~NotSquareSubset~⊏̸~NotSquareSubsetEqual~⋢~NotSquareSuperset~⊐̸~NotSquareSupersetEqual~⋣~NotSubset~⊂⃒~NotSubsetEqual~⊈~NotSucceeds~⊁~NotSucceedsEqual~⪰̸~NotSucceedsSlantEqual~⋡~NotSucceedsTilde~≿̸~NotSuperset~⊃⃒~NotSupersetEqual~⊉~NotTilde~≁~NotTildeEqual~≄~NotTildeFullEqual~≇~NotTildeTilde~≉~NotVerticalBar~∤~Nscr~𝒩~Ocy~О~Odblac~Ő~Ofr~𝔒~Omacr~Ō~Oopf~𝕆~OpenCurlyDoubleQuote~“~OpenCurlyQuote~‘~Or~⩔~Oscr~𝒪~Otimes~⨷~OverBar~‾~OverBrace~⏞~OverBracket~⎴~OverParenthesis~⏜~PartialD~∂~Pcy~П~Pfr~𝔓~PlusMinus~±~Poincareplane~ℌ~Popf~ℙ~Pr~⪻~Precedes~≺~PrecedesEqual~⪯~PrecedesSlantEqual~≼~PrecedesTilde~≾~Product~∏~Proportion~∷~Proportional~∝~Pscr~𝒫~Qfr~𝔔~Qopf~ℚ~Qscr~𝒬~RBarr~⤐~Racute~Ŕ~Rang~⟫~Rarr~↠~Rarrtl~⤖~Rcaron~Ř~Rcedil~Ŗ~Rcy~Р~Re~ℜ~ReverseElement~∋~ReverseEquilibrium~⇋~ReverseUpEquilibrium~⥯~Rfr~ℜ~RightAngleBracket~⟩~RightArrow~→~RightArrowBar~⇥~RightArrowLeftArrow~⇄~RightCeiling~⌉~RightDoubleBracket~⟧~RightDownTeeVector~⥝~RightDownVector~⇂~RightDownVectorBar~⥕~RightFloor~⌋~RightTee~⊢~RightTeeArrow~↦~RightTeeVector~⥛~RightTriangle~⊳~RightTriangleBar~⧐~RightTriangleEqual~⊵~RightUpDownVector~⥏~RightUpTeeVector~⥜~RightUpVector~↾~RightUpVectorBar~⥔~RightVector~⇀~RightVectorBar~⥓~Rightarrow~⇒~Ropf~ℝ~RoundImplies~⥰~Rrightarrow~⇛~Rscr~ℛ~Rsh~↱~RuleDelayed~⧴~SHCHcy~Щ~SHcy~Ш~SOFTcy~Ь~Sacute~Ś~Sc~⪼~Scedil~Ş~Scirc~Ŝ~Scy~С~Sfr~𝔖~ShortDownArrow~↓~ShortLeftArrow~←~ShortRightArrow~→~ShortUpArrow~↑~SmallCircle~∘~Sopf~𝕊~Sqrt~√~Square~□~SquareIntersection~⊓~SquareSubset~⊏~SquareSubsetEqual~⊑~SquareSuperset~⊐~SquareSupersetEqual~⊒~SquareUnion~⊔~Sscr~𝒮~Star~⋆~Sub~⋐~Subset~⋐~SubsetEqual~⊆~Succeeds~≻~SucceedsEqual~⪰~SucceedsSlantEqual~≽~SucceedsTilde~≿~SuchThat~∋~Sum~∑~Sup~⋑~Superset~⊃~SupersetEqual~⊇~Supset~⋑~TRADE~™~TSHcy~Ћ~TScy~Ц~Tab~	~Tcaron~Ť~Tcedil~Ţ~Tcy~Т~Tfr~𝔗~Therefore~∴~ThickSpace~  ~ThinSpace~ ~Tilde~∼~TildeEqual~≃~TildeFullEqual~≅~TildeTilde~≈~Topf~𝕋~TripleDot~⃛~Tscr~𝒯~Tstrok~Ŧ~Uarr~↟~Uarrocir~⥉~Ubrcy~Ў~Ubreve~Ŭ~Ucy~У~Udblac~Ű~Ufr~𝔘~Umacr~Ū~UnderBar~_~UnderBrace~⏟~UnderBracket~⎵~UnderParenthesis~⏝~Union~⋃~UnionPlus~⊎~Uogon~Ų~Uopf~𝕌~UpArrow~↑~UpArrowBar~⤒~UpArrowDownArrow~⇅~UpDownArrow~↕~UpEquilibrium~⥮~UpTee~⊥~UpTeeArrow~↥~Uparrow~⇑~Updownarrow~⇕~UpperLeftArrow~↖~UpperRightArrow~↗~Upsi~ϒ~Uring~Ů~Uscr~𝒰~Utilde~Ũ~VDash~⊫~Vbar~⫫~Vcy~В~Vdash~⊩~Vdashl~⫦~Vee~⋁~Verbar~‖~Vert~‖~VerticalBar~∣~VerticalLine~|~VerticalSeparator~❘~VerticalTilde~≀~VeryThinSpace~ ~Vfr~𝔙~Vopf~𝕍~Vscr~𝒱~Vvdash~⊪~Wcirc~Ŵ~Wedge~⋀~Wfr~𝔚~Wopf~𝕎~Wscr~𝒲~Xfr~𝔛~Xopf~𝕏~Xscr~𝒳~YAcy~Я~YIcy~Ї~YUcy~Ю~Ycirc~Ŷ~Ycy~Ы~Yfr~𝔜~Yopf~𝕐~Yscr~𝒴~ZHcy~Ж~Zacute~Ź~Zcaron~Ž~Zcy~З~Zdot~Ż~ZeroWidthSpace~​~Zfr~ℨ~Zopf~ℤ~Zscr~𝒵~abreve~ă~ac~∾~acE~∾̳~acd~∿~acy~а~af~⁡~afr~𝔞~aleph~ℵ~amacr~ā~amalg~⨿~andand~⩕~andd~⩜~andslope~⩘~andv~⩚~ange~⦤~angle~∠~angmsd~∡~angmsdaa~⦨~angmsdab~⦩~angmsdac~⦪~angmsdad~⦫~angmsdae~⦬~angmsdaf~⦭~angmsdag~⦮~angmsdah~⦯~angrt~∟~angrtvb~⊾~angrtvbd~⦝~angsph~∢~angst~Å~angzarr~⍼~aogon~ą~aopf~𝕒~ap~≈~apE~⩰~apacir~⩯~ape~≊~apid~≋~approx~≈~approxeq~≊~ascr~𝒶~ast~*~asympeq~≍~awconint~∳~awint~⨑~bNot~⫭~backcong~≌~backepsilon~϶~backprime~‵~backsim~∽~backsimeq~⋍~barvee~⊽~barwed~⌅~barwedge~⌅~bbrk~⎵~bbrktbrk~⎶~bcong~≌~bcy~б~becaus~∵~because~∵~bemptyv~⦰~bepsi~϶~bernou~ℬ~beth~ℶ~between~≬~bfr~𝔟~bigcap~⋂~bigcirc~◯~bigcup~⋃~bigodot~⨀~bigoplus~⨁~bigotimes~⨂~bigsqcup~⨆~bigstar~★~bigtriangledown~▽~bigtriangleup~△~biguplus~⨄~bigvee~⋁~bigwedge~⋀~bkarow~⤍~blacklozenge~⧫~blacksquare~▪~blacktriangle~▴~blacktriangledown~▾~blacktriangleleft~◂~blacktriangleright~▸~blank~␣~blk12~▒~blk14~░~blk34~▓~block~█~bne~=⃥~bnequiv~≡⃥~bnot~⌐~bopf~𝕓~bot~⊥~bottom~⊥~bowtie~⋈~boxDL~╗~boxDR~╔~boxDl~╖~boxDr~╓~boxH~═~boxHD~╦~boxHU~╩~boxHd~╤~boxHu~╧~boxUL~╝~boxUR~╚~boxUl~╜~boxUr~╙~boxV~║~boxVH~╬~boxVL~╣~boxVR~╠~boxVh~╫~boxVl~╢~boxVr~╟~boxbox~⧉~boxdL~╕~boxdR~╒~boxdl~┐~boxdr~┌~boxh~─~boxhD~╥~boxhU~╨~boxhd~┬~boxhu~┴~boxminus~⊟~boxplus~⊞~boxtimes~⊠~boxuL~╛~boxuR~╘~boxul~┘~boxur~└~boxv~│~boxvH~╪~boxvL~╡~boxvR~╞~boxvh~┼~boxvl~┤~boxvr~├~bprime~‵~breve~˘~bscr~𝒷~bsemi~⁏~bsim~∽~bsime~⋍~bsol~\\~bsolb~⧅~bsolhsub~⟈~bullet~•~bump~≎~bumpE~⪮~bumpe~≏~bumpeq~≏~cacute~ć~capand~⩄~capbrcup~⩉~capcap~⩋~capcup~⩇~capdot~⩀~caps~∩︀~caret~⁁~caron~ˇ~ccaps~⩍~ccaron~č~ccirc~ĉ~ccups~⩌~ccupssm~⩐~cdot~ċ~cemptyv~⦲~centerdot~·~cfr~𝔠~chcy~ч~check~✓~checkmark~✓~cir~○~cirE~⧃~circeq~≗~circlearrowleft~↺~circlearrowright~↻~circledR~®~circledS~Ⓢ~circledast~⊛~circledcirc~⊚~circleddash~⊝~cire~≗~cirfnint~⨐~cirmid~⫯~cirscir~⧂~clubsuit~♣~colon~:~colone~≔~coloneq~≔~comma~,~commat~@~comp~∁~compfn~∘~complement~∁~complexes~ℂ~congdot~⩭~conint~∮~copf~𝕔~coprod~∐~copysr~℗~cross~✗~cscr~𝒸~csub~⫏~csube~⫑~csup~⫐~csupe~⫒~ctdot~⋯~cudarrl~⤸~cudarrr~⤵~cuepr~⋞~cuesc~⋟~cularr~↶~cularrp~⤽~cupbrcap~⩈~cupcap~⩆~cupcup~⩊~cupdot~⊍~cupor~⩅~cups~∪︀~curarr~↷~curarrm~⤼~curlyeqprec~⋞~curlyeqsucc~⋟~curlyvee~⋎~curlywedge~⋏~curvearrowleft~↶~curvearrowright~↷~cuvee~⋎~cuwed~⋏~cwconint~∲~cwint~∱~cylcty~⌭~dHar~⥥~daleth~ℸ~dash~‐~dashv~⊣~dbkarow~⤏~dblac~˝~dcaron~ď~dcy~д~dd~ⅆ~ddagger~‡~ddarr~⇊~ddotseq~⩷~demptyv~⦱~dfisht~⥿~dfr~𝔡~dharl~⇃~dharr~⇂~diam~⋄~diamond~⋄~diamondsuit~♦~die~¨~digamma~ϝ~disin~⋲~div~÷~divideontimes~⋇~divonx~⋇~djcy~ђ~dlcorn~⌞~dlcrop~⌍~dollar~$~dopf~𝕕~dot~˙~doteq~≐~doteqdot~≑~dotminus~∸~dotplus~∔~dotsquare~⊡~doublebarwedge~⌆~downarrow~↓~downdownarrows~⇊~downharpoonleft~⇃~downharpoonright~⇂~drbkarow~⤐~drcorn~⌟~drcrop~⌌~dscr~𝒹~dscy~ѕ~dsol~⧶~dstrok~đ~dtdot~⋱~dtri~▿~dtrif~▾~duarr~⇵~duhar~⥯~dwangle~⦦~dzcy~џ~dzigrarr~⟿~eDDot~⩷~eDot~≑~easter~⩮~ecaron~ě~ecir~≖~ecolon~≕~ecy~э~edot~ė~ee~ⅇ~efDot~≒~efr~𝔢~eg~⪚~egs~⪖~egsdot~⪘~el~⪙~elinters~⏧~ell~ℓ~els~⪕~elsdot~⪗~emacr~ē~emptyset~∅~emptyv~∅~emsp13~ ~emsp14~ ~eng~ŋ~eogon~ę~eopf~𝕖~epar~⋕~eparsl~⧣~eplus~⩱~epsi~ε~epsiv~ϵ~eqcirc~≖~eqcolon~≕~eqsim~≂~eqslantgtr~⪖~eqslantless~⪕~equals~=~equest~≟~equivDD~⩸~eqvparsl~⧥~erDot~≓~erarr~⥱~escr~ℯ~esdot~≐~esim~≂~excl~!~expectation~ℰ~exponentiale~ⅇ~fallingdotseq~≒~fcy~ф~female~♀~ffilig~ﬃ~fflig~ﬀ~ffllig~ﬄ~ffr~𝔣~filig~ﬁ~fjlig~fj~flat~♭~fllig~ﬂ~fltns~▱~fopf~𝕗~fork~⋔~forkv~⫙~fpartint~⨍~frac13~⅓~frac15~⅕~frac16~⅙~frac18~⅛~frac23~⅔~frac25~⅖~frac35~⅗~frac38~⅜~frac45~⅘~frac56~⅚~frac58~⅝~frac78~⅞~frown~⌢~fscr~𝒻~gE~≧~gEl~⪌~gacute~ǵ~gammad~ϝ~gap~⪆~gbreve~ğ~gcirc~ĝ~gcy~г~gdot~ġ~gel~⋛~geq~≥~geqq~≧~geqslant~⩾~ges~⩾~gescc~⪩~gesdot~⪀~gesdoto~⪂~gesdotol~⪄~gesl~⋛︀~gesles~⪔~gfr~𝔤~gg~≫~ggg~⋙~gimel~ℷ~gjcy~ѓ~gl~≷~glE~⪒~gla~⪥~glj~⪤~gnE~≩~gnap~⪊~gnapprox~⪊~gne~⪈~gneq~⪈~gneqq~≩~gnsim~⋧~gopf~𝕘~grave~`~gscr~ℊ~gsim~≳~gsime~⪎~gsiml~⪐~gtcc~⪧~gtcir~⩺~gtdot~⋗~gtlPar~⦕~gtquest~⩼~gtrapprox~⪆~gtrarr~⥸~gtrdot~⋗~gtreqless~⋛~gtreqqless~⪌~gtrless~≷~gtrsim~≳~gvertneqq~≩︀~gvnE~≩︀~hairsp~ ~half~½~hamilt~ℋ~hardcy~ъ~harrcir~⥈~harrw~↭~hbar~ℏ~hcirc~ĥ~heartsuit~♥~hercon~⊹~hfr~𝔥~hksearow~⤥~hkswarow~⤦~hoarr~⇿~homtht~∻~hookleftarrow~↩~hookrightarrow~↪~hopf~𝕙~horbar~―~hscr~𝒽~hslash~ℏ~hstrok~ħ~hybull~⁃~hyphen~‐~ic~⁣~icy~и~iecy~е~iff~⇔~ifr~𝔦~ii~ⅈ~iiiint~⨌~iiint~∭~iinfin~⧜~iiota~℩~ijlig~ĳ~imacr~ī~imagline~ℐ~imagpart~ℑ~imath~ı~imof~⊷~imped~Ƶ~in~∈~incare~℅~infintie~⧝~inodot~ı~intcal~⊺~integers~ℤ~intercal~⊺~intlarhk~⨗~intprod~⨼~iocy~ё~iogon~į~iopf~𝕚~iprod~⨼~iscr~𝒾~isinE~⋹~isindot~⋵~isins~⋴~isinsv~⋳~isinv~∈~it~⁢~itilde~ĩ~iukcy~і~jcirc~ĵ~jcy~й~jfr~𝔧~jmath~ȷ~jopf~𝕛~jscr~𝒿~jsercy~ј~jukcy~є~kappav~ϰ~kcedil~ķ~kcy~к~kfr~𝔨~kgreen~ĸ~khcy~х~kjcy~ќ~kopf~𝕜~kscr~𝓀~lAarr~⇚~lAtail~⤛~lBarr~⤎~lE~≦~lEg~⪋~lHar~⥢~lacute~ĺ~laemptyv~⦴~lagran~ℒ~langd~⦑~langle~⟨~lap~⪅~larrb~⇤~larrbfs~⤟~larrfs~⤝~larrhk~↩~larrlp~↫~larrpl~⤹~larrsim~⥳~larrtl~↢~lat~⪫~latail~⤙~late~⪭~lates~⪭︀~lbarr~⤌~lbbrk~❲~lbrace~{~lbrack~[~lbrke~⦋~lbrksld~⦏~lbrkslu~⦍~lcaron~ľ~lcedil~ļ~lcub~{~lcy~л~ldca~⤶~ldquor~„~ldrdhar~⥧~ldrushar~⥋~ldsh~↲~leftarrow~←~leftarrowtail~↢~leftharpoondown~↽~leftharpoonup~↼~leftleftarrows~⇇~leftrightarrow~↔~leftrightarrows~⇆~leftrightharpoons~⇋~leftrightsquigarrow~↭~leftthreetimes~⋋~leg~⋚~leq~≤~leqq~≦~leqslant~⩽~les~⩽~lescc~⪨~lesdot~⩿~lesdoto~⪁~lesdotor~⪃~lesg~⋚︀~lesges~⪓~lessapprox~⪅~lessdot~⋖~lesseqgtr~⋚~lesseqqgtr~⪋~lessgtr~≶~lesssim~≲~lfisht~⥼~lfr~𝔩~lg~≶~lgE~⪑~lhard~↽~lharu~↼~lharul~⥪~lhblk~▄~ljcy~љ~ll~≪~llarr~⇇~llcorner~⌞~llhard~⥫~lltri~◺~lmidot~ŀ~lmoust~⎰~lmoustache~⎰~lnE~≨~lnap~⪉~lnapprox~⪉~lne~⪇~lneq~⪇~lneqq~≨~lnsim~⋦~loang~⟬~loarr~⇽~lobrk~⟦~longleftarrow~⟵~longleftrightarrow~⟷~longmapsto~⟼~longrightarrow~⟶~looparrowleft~↫~looparrowright~↬~lopar~⦅~lopf~𝕝~loplus~⨭~lotimes~⨴~lowbar~_~lozenge~◊~lozf~⧫~lpar~(~lparlt~⦓~lrarr~⇆~lrcorner~⌟~lrhar~⇋~lrhard~⥭~lrtri~⊿~lscr~𝓁~lsh~↰~lsim~≲~lsime~⪍~lsimg~⪏~lsqb~[~lsquor~‚~lstrok~ł~ltcc~⪦~ltcir~⩹~ltdot~⋖~lthree~⋋~ltimes~⋉~ltlarr~⥶~ltquest~⩻~ltrPar~⦖~ltri~◃~ltrie~⊴~ltrif~◂~lurdshar~⥊~luruhar~⥦~lvertneqq~≨︀~lvnE~≨︀~mDDot~∺~male~♂~malt~✠~maltese~✠~map~↦~mapsto~↦~mapstodown~↧~mapstoleft~↤~mapstoup~↥~marker~▮~mcomma~⨩~mcy~м~measuredangle~∡~mfr~𝔪~mho~℧~mid~∣~midast~*~midcir~⫰~minusb~⊟~minusd~∸~minusdu~⨪~mlcp~⫛~mldr~…~mnplus~∓~models~⊧~mopf~𝕞~mp~∓~mscr~𝓂~mstpos~∾~multimap~⊸~mumap~⊸~nGg~⋙̸~nGt~≫⃒~nGtv~≫̸~nLeftarrow~⇍~nLeftrightarrow~⇎~nLl~⋘̸~nLt~≪⃒~nLtv~≪̸~nRightarrow~⇏~nVDash~⊯~nVdash~⊮~nacute~ń~nang~∠⃒~nap~≉~napE~⩰̸~napid~≋̸~napos~ŉ~napprox~≉~natur~♮~natural~♮~naturals~ℕ~nbump~≎̸~nbumpe~≏̸~ncap~⩃~ncaron~ň~ncedil~ņ~ncong~≇~ncongdot~⩭̸~ncup~⩂~ncy~н~neArr~⇗~nearhk~⤤~nearr~↗~nearrow~↗~nedot~≐̸~nequiv~≢~nesear~⤨~nesim~≂̸~nexist~∄~nexists~∄~nfr~𝔫~ngE~≧̸~nge~≱~ngeq~≱~ngeqq~≧̸~ngeqslant~⩾̸~nges~⩾̸~ngsim~≵~ngt~≯~ngtr~≯~nhArr~⇎~nharr~↮~nhpar~⫲~nis~⋼~nisd~⋺~niv~∋~njcy~њ~nlArr~⇍~nlE~≦̸~nlarr~↚~nldr~‥~nle~≰~nleftarrow~↚~nleftrightarrow~↮~nleq~≰~nleqq~≦̸~nleqslant~⩽̸~nles~⩽̸~nless~≮~nlsim~≴~nlt~≮~nltri~⋪~nltrie~⋬~nmid~∤~nopf~𝕟~notinE~⋹̸~notindot~⋵̸~notinva~∉~notinvb~⋷~notinvc~⋶~notni~∌~notniva~∌~notnivb~⋾~notnivc~⋽~npar~∦~nparallel~∦~nparsl~⫽⃥~npart~∂̸~npolint~⨔~npr~⊀~nprcue~⋠~npre~⪯̸~nprec~⊀~npreceq~⪯̸~nrArr~⇏~nrarr~↛~nrarrc~⤳̸~nrarrw~↝̸~nrightarrow~↛~nrtri~⋫~nrtrie~⋭~nsc~⊁~nsccue~⋡~nsce~⪰̸~nscr~𝓃~nshortmid~∤~nshortparallel~∦~nsim~≁~nsime~≄~nsimeq~≄~nsmid~∤~nspar~∦~nsqsube~⋢~nsqsupe~⋣~nsubE~⫅̸~nsube~⊈~nsubset~⊂⃒~nsubseteq~⊈~nsubseteqq~⫅̸~nsucc~⊁~nsucceq~⪰̸~nsup~⊅~nsupE~⫆̸~nsupe~⊉~nsupset~⊃⃒~nsupseteq~⊉~nsupseteqq~⫆̸~ntgl~≹~ntlg~≸~ntriangleleft~⋪~ntrianglelefteq~⋬~ntriangleright~⋫~ntrianglerighteq~⋭~num~#~numero~№~numsp~ ~nvDash~⊭~nvHarr~⤄~nvap~≍⃒~nvdash~⊬~nvge~≥⃒~nvgt~>⃒~nvinfin~⧞~nvlArr~⤂~nvle~≤⃒~nvlt~<⃒~nvltrie~⊴⃒~nvrArr~⤃~nvrtrie~⊵⃒~nvsim~∼⃒~nwArr~⇖~nwarhk~⤣~nwarr~↖~nwarrow~↖~nwnear~⤧~oS~Ⓢ~oast~⊛~ocir~⊚~ocy~о~odash~⊝~odblac~ő~odiv~⨸~odot~⊙~odsold~⦼~ofcir~⦿~ofr~𝔬~ogon~˛~ogt~⧁~ohbar~⦵~ohm~Ω~oint~∮~olarr~↺~olcir~⦾~olcross~⦻~olt~⧀~omacr~ō~omid~⦶~ominus~⊖~oopf~𝕠~opar~⦷~operp~⦹~orarr~↻~ord~⩝~order~ℴ~orderof~ℴ~origof~⊶~oror~⩖~orslope~⩗~orv~⩛~oscr~ℴ~osol~⊘~otimesas~⨶~ovbar~⌽~par~∥~parallel~∥~parsim~⫳~parsl~⫽~pcy~п~percnt~%~period~.~pertenk~‱~pfr~𝔭~phiv~ϕ~phmmat~ℳ~phone~☎~pitchfork~⋔~planck~ℏ~planckh~ℎ~plankv~ℏ~plus~+~plusacir~⨣~plusb~⊞~pluscir~⨢~plusdo~∔~plusdu~⨥~pluse~⩲~plussim~⨦~plustwo~⨧~pm~±~pointint~⨕~popf~𝕡~pr~≺~prE~⪳~prap~⪷~prcue~≼~pre~⪯~prec~≺~precapprox~⪷~preccurlyeq~≼~preceq~⪯~precnapprox~⪹~precneqq~⪵~precnsim~⋨~precsim~≾~primes~ℙ~prnE~⪵~prnap~⪹~prnsim~⋨~profalar~⌮~profline~⌒~profsurf~⌓~propto~∝~prsim~≾~prurel~⊰~pscr~𝓅~puncsp~ ~qfr~𝔮~qint~⨌~qopf~𝕢~qprime~⁗~qscr~𝓆~quaternions~ℍ~quatint~⨖~quest~?~questeq~≟~rAarr~⇛~rAtail~⤜~rBarr~⤏~rHar~⥤~race~∽̱~racute~ŕ~raemptyv~⦳~rangd~⦒~range~⦥~rangle~⟩~rarrap~⥵~rarrb~⇥~rarrbfs~⤠~rarrc~⤳~rarrfs~⤞~rarrhk~↪~rarrlp~↬~rarrpl~⥅~rarrsim~⥴~rarrtl~↣~rarrw~↝~ratail~⤚~ratio~∶~rationals~ℚ~rbarr~⤍~rbbrk~❳~rbrace~}~rbrack~]~rbrke~⦌~rbrksld~⦎~rbrkslu~⦐~rcaron~ř~rcedil~ŗ~rcub~}~rcy~р~rdca~⤷~rdldhar~⥩~rdquor~”~rdsh~↳~realine~ℛ~realpart~ℜ~reals~ℝ~rect~▭~rfisht~⥽~rfr~𝔯~rhard~⇁~rharu~⇀~rharul~⥬~rhov~ϱ~rightarrow~→~rightarrowtail~↣~rightharpoondown~⇁~rightharpoonup~⇀~rightleftarrows~⇄~rightleftharpoons~⇌~rightrightarrows~⇉~rightsquigarrow~↝~rightthreetimes~⋌~ring~˚~risingdotseq~≓~rlarr~⇄~rlhar~⇌~rmoust~⎱~rmoustache~⎱~rnmid~⫮~roang~⟭~roarr~⇾~robrk~⟧~ropar~⦆~ropf~𝕣~roplus~⨮~rotimes~⨵~rpar~)~rpargt~⦔~rppolint~⨒~rrarr~⇉~rscr~𝓇~rsh~↱~rsqb~]~rsquor~’~rthree~⋌~rtimes~⋊~rtri~▹~rtrie~⊵~rtrif~▸~rtriltri~⧎~ruluhar~⥨~rx~℞~sacute~ś~sc~≻~scE~⪴~scap~⪸~sccue~≽~sce~⪰~scedil~ş~scirc~ŝ~scnE~⪶~scnap~⪺~scnsim~⋩~scpolint~⨓~scsim~≿~scy~с~sdotb~⊡~sdote~⩦~seArr~⇘~searhk~⤥~searr~↘~searrow~↘~semi~;~seswar~⤩~setminus~∖~setmn~∖~sext~✶~sfr~𝔰~sfrown~⌢~sharp~♯~shchcy~щ~shcy~ш~shortmid~∣~shortparallel~∥~sigmav~ς~simdot~⩪~sime~≃~simeq~≃~simg~⪞~simgE~⪠~siml~⪝~simlE~⪟~simne~≆~simplus~⨤~simrarr~⥲~slarr~←~smallsetminus~∖~smashp~⨳~smeparsl~⧤~smid~∣~smile~⌣~smt~⪪~smte~⪬~smtes~⪬︀~softcy~ь~sol~/~solb~⧄~solbar~⌿~sopf~𝕤~spadesuit~♠~spar~∥~sqcap~⊓~sqcaps~⊓︀~sqcup~⊔~sqcups~⊔︀~sqsub~⊏~sqsube~⊑~sqsubset~⊏~sqsubseteq~⊑~sqsup~⊐~sqsupe~⊒~sqsupset~⊐~sqsupseteq~⊒~squ~□~square~□~squarf~▪~squf~▪~srarr~→~sscr~𝓈~ssetmn~∖~ssmile~⌣~sstarf~⋆~star~☆~starf~★~straightepsilon~ϵ~straightphi~ϕ~strns~¯~subE~⫅~subdot~⪽~subedot~⫃~submult~⫁~subnE~⫋~subne~⊊~subplus~⪿~subrarr~⥹~subset~⊂~subseteq~⊆~subseteqq~⫅~subsetneq~⊊~subsetneqq~⫋~subsim~⫇~subsub~⫕~subsup~⫓~succ~≻~succapprox~⪸~succcurlyeq~≽~succeq~⪰~succnapprox~⪺~succneqq~⪶~succnsim~⋩~succsim~≿~sung~♪~supE~⫆~supdot~⪾~supdsub~⫘~supedot~⫄~suphsol~⟉~suphsub~⫗~suplarr~⥻~supmult~⫂~supnE~⫌~supne~⊋~supplus~⫀~supset~⊃~supseteq~⊇~supseteqq~⫆~supsetneq~⊋~supsetneqq~⫌~supsim~⫈~supsub~⫔~supsup~⫖~swArr~⇙~swarhk~⤦~swarr~↙~swarrow~↙~swnwar~⤪~target~⌖~tbrk~⎴~tcaron~ť~tcedil~ţ~tcy~т~tdot~⃛~telrec~⌕~tfr~𝔱~therefore~∴~thetav~ϑ~thickapprox~≈~thicksim~∼~thkap~≈~thksim~∼~timesb~⊠~timesbar~⨱~timesd~⨰~tint~∭~toea~⤨~top~⊤~topbot~⌶~topcir~⫱~topf~𝕥~topfork~⫚~tosa~⤩~tprime~‴~triangle~▵~triangledown~▿~triangleleft~◃~trianglelefteq~⊴~triangleq~≜~triangleright~▹~trianglerighteq~⊵~tridot~◬~trie~≜~triminus~⨺~triplus~⨹~trisb~⧍~tritime~⨻~trpezium~⏢~tscr~𝓉~tscy~ц~tshcy~ћ~tstrok~ŧ~twixt~≬~twoheadleftarrow~↞~twoheadrightarrow~↠~uHar~⥣~ubrcy~ў~ubreve~ŭ~ucy~у~udarr~⇅~udblac~ű~udhar~⥮~ufisht~⥾~ufr~𝔲~uharl~↿~uharr~↾~uhblk~▀~ulcorn~⌜~ulcorner~⌜~ulcrop~⌏~ultri~◸~umacr~ū~uogon~ų~uopf~𝕦~uparrow~↑~updownarrow~↕~upharpoonleft~↿~upharpoonright~↾~uplus~⊎~upsi~υ~upuparrows~⇈~urcorn~⌝~urcorner~⌝~urcrop~⌎~uring~ů~urtri~◹~uscr~𝓊~utdot~⋰~utilde~ũ~utri~▵~utrif~▴~uuarr~⇈~uwangle~⦧~vArr~⇕~vBar~⫨~vBarv~⫩~vDash~⊨~vangrt~⦜~varepsilon~ϵ~varkappa~ϰ~varnothing~∅~varphi~ϕ~varpi~ϖ~varpropto~∝~varr~↕~varrho~ϱ~varsigma~ς~varsubsetneq~⊊︀~varsubsetneqq~⫋︀~varsupsetneq~⊋︀~varsupsetneqq~⫌︀~vartheta~ϑ~vartriangleleft~⊲~vartriangleright~⊳~vcy~в~vdash~⊢~vee~∨~veebar~⊻~veeeq~≚~vellip~⋮~verbar~|~vert~|~vfr~𝔳~vltri~⊲~vnsub~⊂⃒~vnsup~⊃⃒~vopf~𝕧~vprop~∝~vrtri~⊳~vscr~𝓋~vsubnE~⫋︀~vsubne~⊊︀~vsupnE~⫌︀~vsupne~⊋︀~vzigzag~⦚~wcirc~ŵ~wedbar~⩟~wedge~∧~wedgeq~≙~wfr~𝔴~wopf~𝕨~wp~℘~wr~≀~wreath~≀~wscr~𝓌~xcap~⋂~xcirc~◯~xcup~⋃~xdtri~▽~xfr~𝔵~xhArr~⟺~xharr~⟷~xlArr~⟸~xlarr~⟵~xmap~⟼~xnis~⋻~xodot~⨀~xopf~𝕩~xoplus~⨁~xotime~⨂~xrArr~⟹~xrarr~⟶~xscr~𝓍~xsqcup~⨆~xuplus~⨄~xutri~△~xvee~⋁~xwedge~⋀~yacy~я~ycirc~ŷ~ycy~ы~yfr~𝔶~yicy~ї~yopf~𝕪~yscr~𝓎~yucy~ю~zacute~ź~zcaron~ž~zcy~з~zdot~ż~zeetrf~ℨ~zfr~𝔷~zhcy~ж~zigrarr~⇝~zopf~𝕫~zscr~𝓏~~AMP~&~COPY~©~GT~>~LT~<~QUOT~"~REG~®', io.html4);
var oo = function() {
  return oo = Object.assign || function(i) {
    for (var o, e = 1, n = arguments.length; e < n; e++) {
      o = arguments[e];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (i[a] = o[a]);
    }
    return i;
  }, oo.apply(this, arguments);
};
oo(oo({}, io), { all: io.html5 });
var Se = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
var Je = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
var nu = { xml: { strict: Se, attribute: Je, body: Ze.xml }, html4: { strict: Se, attribute: Je, body: Ze.html4 }, html5: { strict: Se, attribute: Je, body: Ze.html5 } };
oo(oo({}, nu), { all: nu.html5 });
pu();
const au = (i, o) => Object.hasOwn(i, o);
const Ce = (i, o) => Object.assign(i, o);
const Xe = (i, o, e) => {
  if (i.length === 0) return [];
  let n = 0;
  const a = Ct.exec(i[0]);
  a && (n = a[1].length);
  const u = String.raw`(\r\n|\r|\n).{0,${n}}`, g = new RegExp(u, "g"), t = o ? i.slice(1) : i, { newline: s, trimLeadingNewline: h, trimTrailingNewline: r } = e, l = typeof s == "string", v = t.length, y = Array.from({ length: v });
  for (let c = 0; c < v; c++) {
    let b = t[c];
    b = b.replace(g, "$1"), c === 0 && h && (b = b.replace(Zt, "")), c === v - 1 && r && (b = b.replace(St, "")), l && (b = b.replaceAll(Ht, s)), y[c] = b;
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
        const l = Xe(t, false, i);
        return o && e && e.set(t, l), l[0];
      }
      const h = (g[0] === a || g[0] === JY) && Xt.test(t[0]) && Jt.test(t[1]);
      let r;
      return o && e && !n && (r = e.get(t)), r || (r = Xe(t, h, i), o && e && e.set(t, r)), LY(r, h ? g.slice(1) : g);
    }
    return xd(Ce(Ce({}, i), u));
  }
  return Ce(a, { string(u) {
    return u === "" || !u ? "" : Xe([u], false, i)[0];
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
const He = Object.freeze({ 0: XY, 1: DY, 2: BY, 3: MY, 4: NY, 5: WY, 6: FY, 7: RY, 9: _Y, 10: zY, 11: $Y, 12: IY, 13: VY, 14: ok, 15: nk, 16: uk, 17: dk, 18: sk, 19: rk, 20: vk, 21: ck, 22: pk, 23: jk, 24: fk, 30: kk, 31: Zk, 32: Jk, 33: Xk, 36: Dk, 37: Bk, 38: Mk, 39: Nk, 40: Wk, 48: Fk, 49: Rk, 50: _k, 51: zk, 78: $k, 79: Ik, 80: Vk, 81: oL, 82: nL, 83: uL, 84: dL, 85: sL, 86: rL, 87: vL, 88: cL, 89: pL, 90: jL, 91: fL, 92: kL, 93: ZL, 94: JL, 95: XL, 96: DL, 97: BL, 98: ML, 99: NL, 100: WL, 101: FL, 102: RL, 103: _L, 104: zL, 105: $L, 106: IL, 107: VL, 108: oZ, 109: nZ, 110: uZ, 111: dZ, 112: sZ, 113: rZ, 114: vZ, 115: cZ, 116: pZ, 117: jZ, 118: fZ, 119: kZ, 120: ZZ, 121: JZ, 122: XZ, 123: DZ, 124: BZ, 125: MZ, 126: NZ, 127: WZ, 128: FZ, 129: RZ, 130: _Z, 131: zZ, 132: $Z, 133: IZ, 134: VZ, 135: o1, 136: n1, 137: u1, 138: d1, 139: s1, 140: r1, 141: v1, 142: c1, 143: p1, 144: j1, 145: f1, 146: k1, 147: Z1, 148: J1, 149: X1, 150: D1, 151: B1, 152: M1, 153: N1, 154: W1, 155: F1, 156: R1, 157: _1, 158: z1, 159: $1, 160: I1, 161: V1, 162: oS, 163: nS, 164: uS, 167: dS, 172: sS, 173: rS, 174: vS, 175: cS, 176: pS, 177: jS, 178: fS, 179: kS, 180: ZS, 181: JS, 182: XS, 183: DS, 184: BS, 185: MS, 186: NS, 187: WS, 188: FS, 189: RS, 190: _S, 191: zS, 192: $S, 193: IS, 194: VS, 195: oJ, 196: nJ, 197: uJ, 198: dJ, 199: sJ, 200: rJ, 201: vJ, 202: cJ, 203: pJ, 204: jJ, 205: fJ, 206: kJ, 207: ZJ, 208: JJ, 209: XJ, 210: DJ, 211: BJ, 212: MJ, 213: NJ, 214: WJ, 215: FJ, 249: RJ, 250: _J, 251: zJ, 252: $J, 253: IJ, 254: VJ, 255: oC });
const Po = {};
for (const i in He) if (Object.prototype.hasOwnProperty.call(He, i)) {
  const o = He[i];
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
  if (!eo.has(i[o])) return { isInsideEscape: false, isInsideLinkEscape: false };
  const e = true, n = i.slice(o + 1, o + 1 + wo.length).join("") === wo;
  return { isInsideEscape: e, isInsideLinkEscape: n };
};
const aC = (i, o = {}) => {
  const e = new Pd();
  let n = "", a = false, u = "", g = "", t = false;
  const s = [...i];
  for (let h = 0; h < s.length; h++) {
    const r = s[h];
    if (r && eo.has(r)) {
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
      if (u !== r && (u += r), r === Ie) {
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
const du = (i) => `${eo.values().next().value}${yu}${String(i)}${Ie}`;
const tu = (i) => `${eo.values().next().value}${wo}${i}${Oo}`;
const uC = (i) => {
  if (i.length === 0) return "";
  if (i.length === 1) return i[0];
  let o = "", e, n;
  const a = i.join(`
`), u = [...a];
  let g = 0;
  for (const [t, s] of u.entries()) {
    if (o += s, eo.has(s)) {
      const r = kt.exec(a.slice(g))?.groups ?? {};
      if (r.code !== void 0) {
        const l = Number.parseFloat(r.code);
        e = l === ft ? void 0 : l;
      } else r.uri !== void 0 && (n = r.uri.length === 0 ? void 0 : r.uri);
    }
    const h = Lt.get(Number(e));
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
const De = (i) => {
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
    if (eo.has(v)) {
      t = true, h = v, u += v, s = i.startsWith(wo, r + 1), r += 1;
      continue;
    }
    if (t) {
      h += v, u += v, s ? v === Oo && (t = s = false) : v === Ie && (t = false, a.processEscape(h)), r += 1;
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
      g && u.push(De(e ? Fi(g) : g));
      const v = Rd(h, o, e);
      if (v.length > 0) {
        for (let y = 0; y < v.length - 1; y += 1) u.push(v[y]);
        g = v.at(-1), t = Hi(g);
      } else g = "", t = 0;
      s += 1;
      continue;
    }
    if (t + l > o && t > 0 && (u.push(De(e ? Fi(g) : g)), g = "", t = 0, e && r)) {
      s += 1;
      continue;
    }
    g += h, t += l, s += 1;
  }
  return g && u.push(De(e ? Fi(g) : g)), u;
};
const bo = { BREAK_AT_CHARACTERS: "BREAK_AT_CHARACTERS", BREAK_WORDS: "BREAK_WORDS", PRESERVE_WORDS: "PRESERVE_WORDS", STRICT_WIDTH: "STRICT_WIDTH" };
const hC = (i, o = {}) => {
  const { removeZeroWidthCharacters: e = true, trim: n = true, width: a = 80, wrapMode: u = bo.PRESERVE_WORDS } = o;
  if (n && i.trim() === "") return "";
  let g = i.normalize("NFC").replaceAll(`\r
`, `
`);
  return e && (g = g.replaceAll(Yt, "")), g.split(`
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
const $e = (i, o, { shell: e, env: n } = {}) => qd(i, o, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"], timeout: 500, shell: e, env: n }).trim();
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
function Te() {
  const { env: i, stdout: o, stderr: e } = Pi;
  if (o?.columns && o?.rows) return Fo(o.columns, o.rows);
  if (e?.columns && e?.rows) return Fo(e.columns, e.rows);
  if (i.COLUMNS && i.LINES) return Fo(i.COLUMNS, i.LINES);
  const n = { columns: Ad, rows: _d };
  return Pi.platform === "win32" ? Be() ?? n : Pi.platform === "darwin" ? hu() ?? Be() ?? n : hu() ?? Be() ?? lC() ?? n;
}
const hu = () => {
  try {
    const i = Pi.platform === "darwin" ? co.constants.O_EVTONLY | co.constants.O_NONBLOCK : co.constants.O_NONBLOCK, { columns: o, rows: e } = Id.WriteStream(co.openSync("/dev/tty", i));
    return { columns: o, rows: e };
  } catch {
  }
};
const Be = () => {
  try {
    const i = $e("tput", ["cols"], { env: { TERM: "dumb", ...Pi.env } }), o = $e("tput", ["lines"], { env: { TERM: "dumb", ...Pi.env } });
    if (i && o) return Od(i, o);
  } catch {
  }
};
const lC = () => {
  try {
    if (!rC()) return;
    const i = $e("resize", ["-u"]).match(/\d+/g);
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
    this.#i = { stderr: e, stdout: o }, this.#u = Te(), this.#g = () => {
      this.#u = Te();
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
    return this.#u = Te(), process.stdout.isTTY && typeof process.stdout.on == "function" && process.stdout.on("resize", this.#g), this.#d(true), true;
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
const N = (t) => (m ??= createRequire(import.meta.url))(t);
const a = typeof globalThis < "u" && typeof globalThis.process < "u" ? globalThis.process : process;
const P = (t) => {
  if (typeof a < "u" && a.versions && a.versions.node) {
    const [e, i] = a.versions.node.split(".").map(Number);
    if (e > 22 || e === 22 && i >= 3 || e === 20 && i >= 16) return a.getBuiltinModule(t);
  }
  return N(t);
};
const { StringDecoder: A } = P("node:string_decoder");
const s = "\x1B[";
const p = ";";
const D = typeof globalThis < "u" && typeof globalThis.process < "u" ? globalThis.process : process;
const h = D;
const b = (t, e, i, n) => {
  if (i === "length" || i === "prototype" || i === "arguments" || i === "caller") return;
  const r = Object.getOwnPropertyDescriptor(t, i), o = Object.getOwnPropertyDescriptor(e, i);
  !w(r, o) && n || Object.defineProperty(t, i, o);
};
const w = function(t, e) {
  return t === void 0 || t.configurable || t.writable === e.writable && t.enumerable === e.enumerable && t.configurable === e.configurable && (t.writable || t.value === e.value);
};
const L = (t, e) => {
  const i = Object.getPrototypeOf(e);
  i !== Object.getPrototypeOf(t) && Object.setPrototypeOf(t, i);
};
const x = (t, e) => `/* Wrapped ${t}*/
${e}`;
const C = Object.getOwnPropertyDescriptor(Function.prototype, "toString");
const v = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name");
const M = (t, e, i) => {
  const n = i === "" ? "" : `with ${i.trim()}() `, r = x.bind(null, n, e.toString());
  Object.defineProperty(r, "name", v);
  const { writable: o, enumerable: c, configurable: f } = C;
  Object.defineProperty(t, "toString", { value: r, writable: o, enumerable: c, configurable: f });
};
function B(t, e, { ignoreNonConfigurable: i = false } = {}) {
  const { name: n } = t;
  for (const r of Reflect.ownKeys(e)) b(t, e, r, i);
  return L(t, e), M(t, e, n), t;
}
const u = /* @__PURE__ */ new WeakMap();
const S = (t, e = {}) => {
  if (typeof t != "function") throw new TypeError("Expected a function");
  let i, n = 0;
  const r = t.displayName || t.name || "<anonymous>", o = function(...c) {
    if (u.set(o, ++n), n === 1) i = t.apply(this, c), t = void 0;
    else if (e.throw === true) throw new Error(`Function \`${r}\` can only be called once`);
    return i;
  };
  return B(o, t), u.set(o, n), o;
};
S.callCount = (t) => {
  if (!u.has(t)) throw new Error(`The given function \`${t.name}\` is not wrapped by the \`onetime\` package`);
  return u.get(t);
};
const l = [];
l.push("SIGHUP", "SIGINT", "SIGTERM");
process.platform !== "win32" && l.push("SIGALRM", "SIGABRT", "SIGVTALRM", "SIGXCPU", "SIGXFSZ", "SIGUSR2", "SIGTRAP", "SIGSYS", "SIGQUIT", "SIGIOT");
process.platform === "linux" && l.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT");
const _ = (t) => !!t && true && typeof t.removeListener == "function" && typeof t.emit == "function" && typeof t.reallyExit == "function" && typeof t.listeners == "function" && typeof t.kill == "function" && typeof t.pid == "number" && typeof t.on == "function";
const T = /* @__PURE__ */ Symbol.for("signal-exit emitter");
const O = globalThis;
const X = Object.defineProperty.bind(Object);
class Z {
  emitted = { afterExit: false, exit: false };
  listeners = { afterExit: [], exit: [] };
  count = 0;
  id = Math.random();
  constructor() {
    if (O[T]) return O[T];
    X(O, T, { value: this, writable: false, enumerable: false, configurable: false });
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
}
let g = class {
};
const G = (t) => ({ onExit(e, i) {
  return t.onExit(e, i);
}, load() {
  return t.load();
}, unload() {
  return t.unload();
} });
class j extends g {
  onExit() {
    return () => {
    };
  }
  load() {
  }
  unload() {
  }
}
let $ = class extends g {
  #s = E.platform === "win32" ? "SIGINT" : "SIGHUP";
  #e = new Z();
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
    if (!_(this.#t)) return () => {
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
    return _(this.#t) ? (this.#t.exitCode = e || 0, this.#e.emit("exit", this.#t.exitCode, null), this.#o.call(this.#t, this.#t.exitCode)) : 0;
  }
  #c(e, ...i) {
    const n = this.#n;
    if (e === "exit" && _(this.#t)) {
      typeof i[0] == "number" && (this.#t.exitCode = i[0]);
      const r = n.call(this.#t, e, ...i);
      return this.#e.emit("exit", this.#t.exitCode, null), r;
    } else return n.call(this.#t, e, ...i);
  }
};
const E = globalThis.process;
const { onExit: U } = G(_(E) ? new $(E) : new j());
const R = h.stderr.isTTY ? h.stderr : h.stdout.isTTY ? h.stdout : void 0;
R && S(() => {
  U(() => {
    R.write("\x1B[?25h");
  }, { alwaysLast: true });
});
const Y = `${s}?25l`;
const k = `${s}G`;
const F = `${s}?25h`;
const H = (t = 1) => `${s}${String(t)}A`;
var q = ((t) => (t[t.Default = 0] = "Default", t[t.BlinkingBlock = 1] = "BlinkingBlock", t[t.SteadyBlock = 2] = "SteadyBlock", t[t.BlinkingUnderline = 3] = "BlinkingUnderline", t[t.SteadyUnderline = 4] = "SteadyUnderline", t[t.BlinkingBar = 5] = "BlinkingBar", t[t.SteadyBar = 6] = "SteadyBar", t))(q || {});
var V = ((t) => (t[t.ToEnd = 0] = "ToEnd", t[t.ToBeginning = 1] = "ToBeginning", t[t.EntireScreen = 2] = "EntireScreen", t[t.EntireScreenAndScrollback = 3] = "EntireScreenAndScrollback", t))(V || {});
var K = ((t) => (t[t.ToEnd = 0] = "ToEnd", t[t.ToBeginning = 1] = "ToBeginning", t[t.EntireLine = 2] = "EntireLine", t))(K || {});
const Q = (t) => {
  const e = t ;
  return `${s}${String(e)}K`;
};
const z = Q(2);
const J = (t) => {
  if (t <= 0) return "";
  let e = "";
  for (let i = 0; i < t; i += 1) e += z, i < t - 1 && (e += H());
  return e += k, e;
};
var tt = ((t) => (t[t.NotRecognized = 0] = "NotRecognized", t[t.Set = 1] = "Set", t[t.Reset = 2] = "Reset", t[t.PermanentlySet = 3] = "PermanentlySet", t[t.PermanentlyReset = 4] = "PermanentlyReset", t))(tt || {});
class et {
  constructor(e) {
    this.reportCode = e;
  }
  reportCode;
  isDecReport = false;
}
class it {
  constructor(e) {
    this.reportCode = e;
  }
  reportCode;
  isDecReport = true;
}
const rt = (t) => new et(t);
const d = (t) => new it(t);
const I = (...t) => {
  if (t.length === 0) return "";
  const e = t.filter((r) => !r.isDecReport).map((r) => r.reportCode.toString()), i = t.filter((r) => r.isDecReport).map((r) => r.reportCode.toString());
  let n = "";
  return e.length > 0 && (n += `${s}${e.join(p)}n`), i.length > 0 && (n += `${s}?${i.join(p)}n`), n;
};
const nt = rt(5);
I(nt);
const ot = d(15);
I(ot);
const st = d(25);
I(st);
const lt = d(26);
I(lt);
var ct = ((t) => (t[t.DEICONIFY_WINDOW = 1] = "DEICONIFY_WINDOW", t[t.ICONIFY_WINDOW = 2] = "ICONIFY_WINDOW", t[t.MOVE_WINDOW = 3] = "MOVE_WINDOW", t[t.RESIZE_TEXT_AREA_CHARS = 4] = "RESIZE_TEXT_AREA_CHARS", t[t.RAISE_WINDOW = 5] = "RAISE_WINDOW", t[t.LOWER_WINDOW = 6] = "LOWER_WINDOW", t[t.REFRESH_WINDOW = 7] = "REFRESH_WINDOW", t[t.RESIZE_TEXT_AREA_PIXELS = 8] = "RESIZE_TEXT_AREA_PIXELS", t[t.RESTORE_MAXIMIZED_WINDOW = 9] = "RESTORE_MAXIMIZED_WINDOW", t[t.MAXIMIZE_WINDOW = 10] = "MAXIMIZE_WINDOW", t[t.MAXIMIZE_WINDOW_VERTICALLY = 10.1] = "MAXIMIZE_WINDOW_VERTICALLY", t[t.MAXIMIZE_WINDOW_HORIZONTALLY = 10.2] = "MAXIMIZE_WINDOW_HORIZONTALLY", t[t.UNDO_FULL_SCREEN_MODE = 10.3] = "UNDO_FULL_SCREEN_MODE", t[t.REPORT_WINDOW_STATE = 11] = "REPORT_WINDOW_STATE", t[t.REPORT_WINDOW_POSITION = 13] = "REPORT_WINDOW_POSITION", t[t.REPORT_TEXT_AREA_SIZE_CHARS = 14] = "REPORT_TEXT_AREA_SIZE_CHARS", t[t.REQUEST_WINDOW_SIZE_WIN_OP_COMPAT = 14] = "REQUEST_WINDOW_SIZE_WIN_OP_COMPAT", t[t.REPORT_CELL_SIZE_PIXELS = 16] = "REPORT_CELL_SIZE_PIXELS", t[t.REPORT_TEXT_AREA_SIZE_PIXELS = 18] = "REPORT_TEXT_AREA_SIZE_PIXELS", t[t.REPORT_ICON_LABEL = 19] = "REPORT_ICON_LABEL", t[t.REPORT_WINDOW_TITLE = 21] = "REPORT_WINDOW_TITLE", t[t.PUSH_WINDOW_TITLE = 22] = "PUSH_WINDOW_TITLE", t[t.POP_WINDOW_TITLE = 23] = "POP_WINDOW_TITLE", t[t.RESIZE_SCREEN_AND_TEXT_AREA = 24] = "RESIZE_SCREEN_AND_TEXT_AREA", t))(ct || {});
const at = 1e4;
class W {
  static DRAIN = true;
  #s = new A();
  #e = [];
  #t;
  #n;
  #o;
  #r;
  #i;
  isTTY;
  constructor(e, i = {}) {
    this.#r = e.write.bind(e), this.#i = e, this.#o = i.maxHistory ?? at, this.isTTY = e.isTTY;
  }
  active() {
    this.isTTY && this.write(Y);
    const e = (i, ...n) => {
      const r = n.at(-1);
      return this.#e.push(typeof i == "string" ? i : this.#s.write(Buffer.from(i))), this.#e.length > this.#o && (this.isTTY && this.#n !== void 0 && this.#n(), this.#l(this.#e.length - Math.floor(this.#o / 2))), typeof r == "function" && r(), W.DRAIN;
    };
    this.#t = e, this.#i.write = this.#t;
  }
  erase(e) {
    e > 0 && this.isTTY && this.write(J(e + 1));
  }
  inactive(e = false) {
    this.#e.length > 0 && (e && this.write(`
`), this.#l(this.#e.length));
    const i = this.#s.end();
    i && this.write(i), this.renew();
  }
  renew() {
    this.#t === void 0 || this.#i.write === this.#t ? this.#i.write = this.#r : console.warn("[@visulima/interactive-manager] stream.write was replaced by a third party while the hook was active; leaving it untouched to avoid stomping the other patch."), this.#t = void 0, this.isTTY && this.write(F);
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
}

export { W, yC as y };
