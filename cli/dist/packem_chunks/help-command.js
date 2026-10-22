import { U as U$1, $ as $$3, I as et$1, J as j$2, a as a$1, N as u, P as i, e as c, Q as P$3, V as q$2, W as J$2, X as bt$2 } from '../packem_shared/index.server-iAND-ZxX.js';
import { createRequire } from 'node:module';

let Hg;
const Bg = (i) => (Hg ??= createRequire(import.meta.url))(i);
const so = typeof globalThis < "u" && typeof globalThis.process < "u" ? globalThis.process : process;
const Yn = (i) => {
  if (typeof so < "u" && so.versions && so.versions.node) {
    const [o, e] = so.versions.node.split(".").map(Number);
    if (o > 22 || o === 22 && e >= 3 || o === 20 && e >= 16) return so.getBuiltinModule(i);
  }
  return Bg(i);
};
const Ii = so;
const { execFileSync: Tg } = Yn("node:child_process");
const Ho = Yn("node:fs");
const Dg = Yn("node:tty");
const Mg = [161, 161, 164, 164, 167, 168, 170, 170, 173, 174, 176, 180, 182, 186, 188, 191, 198, 198, 208, 208, 215, 216, 222, 225, 230, 230, 232, 234, 236, 237, 240, 240, 242, 243, 247, 250, 252, 252, 254, 254, 257, 257, 273, 273, 275, 275, 283, 283, 294, 295, 299, 299, 305, 307, 312, 312, 319, 322, 324, 324, 328, 331, 333, 333, 338, 339, 358, 359, 363, 363, 462, 462, 464, 464, 466, 466, 468, 468, 470, 470, 472, 472, 474, 474, 476, 476, 593, 593, 609, 609, 708, 708, 711, 711, 713, 715, 717, 717, 720, 720, 728, 731, 733, 733, 735, 735, 768, 879, 913, 929, 931, 937, 945, 961, 963, 969, 1025, 1025, 1040, 1103, 1105, 1105, 8208, 8208, 8211, 8214, 8216, 8217, 8220, 8221, 8224, 8226, 8228, 8231, 8240, 8240, 8242, 8243, 8245, 8245, 8251, 8251, 8254, 8254, 8308, 8308, 8319, 8319, 8321, 8324, 8364, 8364, 8451, 8451, 8453, 8453, 8457, 8457, 8467, 8467, 8470, 8470, 8481, 8482, 8486, 8486, 8491, 8491, 8531, 8532, 8539, 8542, 8544, 8555, 8560, 8569, 8585, 8585, 8592, 8601, 8632, 8633, 8658, 8658, 8660, 8660, 8679, 8679, 8704, 8704, 8706, 8707, 8711, 8712, 8715, 8715, 8719, 8719, 8721, 8721, 8725, 8725, 8730, 8730, 8733, 8736, 8739, 8739, 8741, 8741, 8743, 8748, 8750, 8750, 8756, 8759, 8764, 8765, 8776, 8776, 8780, 8780, 8786, 8786, 8800, 8801, 8804, 8807, 8810, 8811, 8814, 8815, 8834, 8835, 8838, 8839, 8853, 8853, 8857, 8857, 8869, 8869, 8895, 8895, 8978, 8978, 9312, 9449, 9451, 9547, 9552, 9587, 9600, 9615, 9618, 9621, 9632, 9633, 9635, 9641, 9650, 9651, 9654, 9655, 9660, 9661, 9664, 9665, 9670, 9672, 9675, 9675, 9678, 9681, 9698, 9701, 9711, 9711, 9733, 9734, 9737, 9737, 9742, 9743, 9756, 9756, 9758, 9758, 9792, 9792, 9794, 9794, 9824, 9825, 9827, 9829, 9831, 9834, 9836, 9837, 9839, 9839, 9886, 9887, 9919, 9919, 9926, 9933, 9935, 9939, 9941, 9953, 9955, 9955, 9960, 9961, 9963, 9969, 9972, 9972, 9974, 9977, 9979, 9980, 9982, 9983, 10045, 10045, 10102, 10111, 11094, 11097, 12872, 12879, 57344, 63743, 65024, 65039, 65533, 65533, 127232, 127242, 127248, 127277, 127280, 127337, 127344, 127373, 127375, 127376, 127387, 127404, 917760, 917999, 983040, 1048573, 1048576, 1114109];
const Qg = 12288;
const xg = 65510;
const Gg = [12288, 12288, 65281, 65376, 65504, 65510];
const Wg = 8361;
const Ng = 65518;
const Pg = [8361, 8361, 65377, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500, 65512, 65518];
const Fg = 32;
const Rg = 10630;
const Kg = [32, 126, 162, 163, 165, 166, 172, 172, 175, 175, 10214, 10221, 10629, 10630];
const Ag = 4352;
const Og = 262141;
const _u = [4352, 4447, 8986, 8987, 9001, 9002, 9193, 9196, 9200, 9200, 9203, 9203, 9725, 9726, 9748, 9749, 9776, 9783, 9800, 9811, 9855, 9855, 9866, 9871, 9875, 9875, 9889, 9889, 9898, 9899, 9917, 9918, 9924, 9925, 9934, 9934, 9940, 9940, 9962, 9962, 9970, 9971, 9973, 9973, 9978, 9978, 9981, 9981, 9989, 9989, 9994, 9995, 10024, 10024, 10060, 10060, 10062, 10062, 10067, 10069, 10071, 10071, 10133, 10135, 10160, 10160, 10175, 10175, 11035, 11036, 11088, 11088, 11093, 11093, 11904, 11929, 11931, 12019, 12032, 12245, 12272, 12287, 12289, 12350, 12353, 12438, 12441, 12543, 12549, 12591, 12593, 12686, 12688, 12773, 12783, 12830, 12832, 12871, 12880, 42124, 42128, 42182, 43360, 43388, 44032, 55203, 63744, 64255, 65040, 65049, 65072, 65106, 65108, 65126, 65128, 65131, 94176, 94180, 94192, 94198, 94208, 101589, 101631, 101662, 101760, 101874, 110576, 110579, 110581, 110587, 110589, 110590, 110592, 110882, 110898, 110898, 110928, 110930, 110933, 110933, 110948, 110951, 110960, 111355, 119552, 119638, 119648, 119670, 126980, 126980, 127183, 127183, 127374, 127374, 127377, 127386, 127488, 127490, 127504, 127547, 127552, 127560, 127568, 127569, 127584, 127589, 127744, 127776, 127789, 127797, 127799, 127868, 127870, 127891, 127904, 127946, 127951, 127955, 127968, 127984, 127988, 127988, 127992, 128062, 128064, 128064, 128066, 128252, 128255, 128317, 128331, 128334, 128336, 128359, 128378, 128378, 128405, 128406, 128420, 128420, 128507, 128591, 128640, 128709, 128716, 128716, 128720, 128722, 128725, 128728, 128732, 128735, 128747, 128748, 128756, 128764, 128992, 129003, 129008, 129008, 129292, 129338, 129340, 129349, 129351, 129535, 129648, 129660, 129664, 129674, 129678, 129734, 129736, 129736, 129741, 129756, 129759, 129770, 129775, 129784, 131072, 196605, 196608, 262141];
const Wo = (i, o) => {
  let e = 0, n = Math.floor(i.length / 2) - 1;
  for (; e <= n; ) {
    const a = Math.floor((e + n) / 2), u = a * 2;
    if (o < i[u]) n = a - 1;
    else if (o > i[u + 1]) e = a + 1;
    else return true;
  }
  return false;
};
const ja = 19968;
const [_g, Eg] = zg(_u);
function zg(i) {
  let o = i[0], e = i[1];
  for (let n = 0; n < i.length; n += 2) {
    const a = i[n], u = i[n + 1];
    if (ja >= a && ja <= u) return [a, u];
    u - a > e - o && (o = a, e = u);
  }
  return [o, e];
}
const $g = (i) => i < 161 || i > 1114109 ? false : Wo(Mg, i);
const Ig = (i) => i < Qg || i > xg ? false : Wo(Gg, i);
const qg = (i) => i < Wg || i > Ng ? false : Wo(Pg, i);
const Ug = (i) => i < Fg || i > Rg ? false : Wo(Kg, i);
const Vg = (i) => i >= _g && i <= Eg ? true : i < Ag || i > Og ? false : Wo(_u, i);
function is(i) {
  return $g(i) ? "ambiguous" : Ig(i) ? "fullwidth" : qg(i) ? "halfwidth" : Ug(i) ? "narrow" : Vg(i) ? "wide" : "neutral";
}
function os(i) {
  if (!Number.isSafeInteger(i)) throw new TypeError(`Expected a code point, got \`${typeof i}\`.`);
}
function Eu(i) {
  return os(i), is(i);
}
const zu = String.raw;
const fa = zu`\p{Emoji}(?:\p{EMod}|[\u{E0020}-\u{E007E}]+\u{E007F}|\uFE0F?\u20E3?)`;
const es = () => new RegExp(zu`\p{RI}{2}|(?![#*\d](?!\uFE0F?\u20E3))${fa}(?:\u200D${fa})*`, "gu");
const po = /* @__PURE__ */ new Set(["\x1B", ""]);
const be = "\x07";
const $u = "[";
const kn = "m";
const To = "]8;;";
const ns = 39;
const as = /[\u200B\uFEFF\u2060-\u2064]/g;
const us = new RegExp(`(?:\\${$u}(?<code>\\d+)m|\\${To}(?<uri>.*)${be})`);
const ts = Object.freeze(/* @__PURE__ */ new Map([[0, 0], [1, 22], [2, 22], [3, 23], [4, 24], [7, 27], [8, 28], [9, 29], [30, 39], [31, 39], [32, 39], [33, 39], [34, 39], [35, 39], [36, 39], [37, 39], [40, 49], [41, 49], [42, 49], [43, 49], [44, 49], [45, 49], [46, 49], [47, 49], [90, 39]]));
const ds = /^[ \t]*(?:\r\n|\r|\n)/;
const gs = /(?:\r\n|\r|\n)[ \t]*$/;
const ss = /^(?:[\r\n]|$)/;
const hs = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/;
const rs = /^[ \t]*[\r\n][ \t\r\n]*$/;
const ls = /\r\n|\n|\r/g;
const se = /[\u001B\u009B](?:[[()#;?]{0,10}(?:\d{1,4}(?:;\d{0,4})*)?[0-9A-ORZcf-nqry=><]|\]8;;[^\u0007\u001B]{0,100}(?:\u0007|\u001B\\))/g;
const ma = /\u001B\[[\d;]*m[^\u001B]*(?:\u001B\[[\d;]*m|$)/g;
const Ya = /\u001B\]8;[^\u0007\u001B]*(?:\u0007|\u001B\\)[^\u001B]*\u001B\]8;;(?:\u0007|\u001B\\)/g;
const Eo = /[\u0000-\u0008\n-\u001F\u007F-\u009F]{1,1000}/y;
const vs = es();
const ka = /* @__PURE__ */ new Map();
const ys = (i) => [i.ambiguousIsNarrow ? 1 : 0, i.control, i.fullWidth, i.regular, i.wide].join("|");
const cs = (i) => {
  const o = ys(i.width);
  let e = ka.get(o);
  return e || (e = /* @__PURE__ */ new Map(), ka.set(o, e)), e;
};
const zo = new RegExp(se.source, "y");
const Ke = new RegExp(vs.source, "uy");
const $o = /(?:[\u0020-\u007E\u00A0-\u00FF](?!\uFE0F)){1,1000}/y;
const Iu = (i) => i >= 32 && i <= 126 ? "latin" : i === 8203 || i === 8204 || i === 8205 || i === 8288 ? "zero" : i <= 31 || i >= 127 && i <= 159 ? "control" : i >= 160 && i <= 255 || i >= 9472 && i <= 9599 ? "latin" : i >= 4352 && i <= 4607 || i >= 11904 && i <= 40959 || i >= 44032 && i <= 55215 || i >= 63744 && i <= 64255 || i >= 65280 && i <= 65519 && !(i >= 65377 && i <= 65439) || i >= 12352 && i <= 12543 ? "wide" : i === 8230 ? "latin" : "other";
const bs = (i, o) => {
  const e = cs(o), n = Math.floor(i / 65536), a = i % 65536;
  let u = e.get(n);
  if (u || (u = /* @__PURE__ */ new Map(), e.set(n, u)), u.has(a)) return u.get(a);
  let t;
  switch (Iu(i)) {
    case "control": {
      t = o.width.control;
      break;
    }
    case "latin": {
      t = o.width.regular;
      break;
    }
    case "wide": {
      t = o.width.wide;
      break;
    }
    case "zero": {
      t = 0;
      break;
    }
    default:
      switch (Eu(i)) {
        case "ambiguous": {
          t = o.width.ambiguousIsNarrow ? o.width.regular : o.width.wide;
          break;
        }
        case "fullwidth": {
          t = o.width.fullWidth;
          break;
        }
        case "wide": {
          t = o.width.wide;
          break;
        }
        default:
          t = o.width.regular;
      }
  }
  return u.set(a, t), t;
};
const ps = (i) => i >= 768 && i <= 879 || i >= 6832 && i <= 6911 || i >= 7616 && i <= 7679 || i >= 8400 && i <= 8447 || i >= 65056 && i <= 65071 || i >= 917760 && i <= 917999 || i >= 65024 && i <= 65039 || i >= 3633 && i <= 3642 || i >= 3655 && i <= 3662 || i >= 3761 && i <= 3769 || i >= 3771 && i <= 3772 || i >= 3784 && i <= 3789 || i >= 2304 && i <= 2307 || i >= 2362 && i <= 2383 || i >= 2385 && i <= 2391 || i >= 2402 && i <= 2403 || i >= 2433 && i <= 2435 || i >= 2492 && i <= 2500 || i >= 2509 && i <= 2509 || i >= 2561 && i <= 2563 || i >= 2620 && i <= 2637 || i >= 1611 && i <= 1631 || i >= 1648 && i <= 1648 || i >= 1750 && i <= 1773 || i >= 2276 && i <= 2302 || i >= 1425 && i <= 1469 || i >= 1471 && i <= 1471 || i >= 1473 && i <= 1474 || i >= 1476 && i <= 1477 || i >= 1479 && i <= 1479 || i >= 3893 && i <= 3893 || i >= 3895 && i <= 3895 || i >= 3897 && i <= 3897 || i >= 3953 && i <= 3966 || i >= 3968 && i <= 3972 || i >= 3974 && i <= 3975 ? true : i >= 768 && i <= 777 || i >= 803 && i <= 803;
const yo = (i, o = {}) => {
  if (!i || i.length === 0) return { ellipsed: false, index: 0, truncated: false, width: 0 };
  const e = { truncation: { countAnsiEscapeCodes: o.countAnsiEscapeCodes ?? false, ellipsis: o.ellipsis ?? "", ellipsisWidth: o.ellipsisWidth ?? (o.ellipsis ? yo(o.ellipsis, { ...o, ellipsis: "", ellipsisWidth: 0, limit: Number.POSITIVE_INFINITY }).width : 0), limit: o.limit ?? Number.POSITIVE_INFINITY }, width: { ambiguousIsNarrow: o.ambiguousIsNarrow ?? false, ansi: o.ansiWidth ?? 0, control: o.controlWidth ?? 0, emoji: o.emojiWidth ?? 2, fullWidth: o.fullWidth ?? 2, halfWidth: o.halfWidth ?? 1, regular: o.regularWidth ?? 1, tab: o.tabWidth ?? 8, wide: o.wideWidth ?? 2 } }, n = Math.max(0, e.truncation.limit - e.truncation.ellipsisWidth), { length: a } = i, u = a > 1e4;
  let t = 0, d = 0, g = a, h = false;
  const l = i.includes("\x1B") || i.includes("");
  for (; t < a; ) {
    if (l && (i[t] === "\x1B" || i[t] === "")) {
      if (i.startsWith("\x1B]8;;", t)) {
        const w = "\x1B]8;;\x07", p = w.length, j = i.indexOf("\x07", t + 5);
        if (j !== -1) {
          const k = i.indexOf(w, j + 1);
          if (k !== -1) {
            const f = k + p, Y = i.slice(j + 1, k).replace(se, ""), L = yo(Y, { ambiguousIsNarrow: e.width.ambiguousIsNarrow, ansiWidth: e.width.ansi, controlWidth: e.width.control, countAnsiEscapeCodes: false, ellipsis: e.truncation.ellipsis, ellipsisWidth: e.truncation.ellipsisWidth, emojiWidth: e.width.emoji, fullWidth: e.width.fullWidth, halfWidth: e.width.halfWidth, limit: Math.max(0, n - d), regularWidth: e.width.regular, tabWidth: e.width.tab, wideWidth: e.width.wide }), D = L.width;
            if (L.truncated) h = true, g = Math.min(g, t);
            else if (d + D > n && (g = Math.min(g, t), h = true, d + D > e.truncation.limit)) break;
            if (d += D, t = f, h && d >= e.truncation.limit) break;
            continue;
          }
        }
      }
      if (zo.lastIndex = t, zo.test(i)) {
        const w = zo.lastIndex - t, p = e.truncation.countAnsiEscapeCodes ? w : e.width.ansi;
        if (d + p > n && (g = Math.min(g, t), d + p > e.truncation.limit)) {
          h = true;
          break;
        }
        d += p, t = zo.lastIndex;
        continue;
      }
    }
    const y = i.codePointAt(t);
    if (y === 8203 || y === 65279 || y >= 8288 && y <= 8292) {
      t += 1;
      continue;
    }
    if (y === 9) {
      if (d + e.width.tab > n && (g = Math.min(g, t), d + e.width.tab > e.truncation.limit)) {
        h = true;
        break;
      }
      d += e.width.tab, t += 1;
      continue;
    }
    if ($o.lastIndex = t, $o.test(i)) {
      const w = ($o.lastIndex - t) * e.width.regular;
      if (d + w > n) {
        const p = e.width.regular > 0 ? Math.floor((n - d) / e.width.regular) : 0;
        if (g = Math.min(g, t + p), d + w > e.truncation.limit) {
          h = true;
          break;
        }
      }
      d += w, t = $o.lastIndex;
      continue;
    }
    if ((y <= 31 || y >= 127 && y <= 159) && (Eo.lastIndex = t, Eo.test(i))) {
      const w = (Eo.lastIndex - t) * e.width.control;
      if (d + w > n) {
        const p = e.width.control > 0 ? Math.floor((n - d) / e.width.control) : 0;
        if (g = Math.min(g, t + p), d + w > e.truncation.limit) {
          h = true;
          break;
        }
      }
      d += w, t = Eo.lastIndex;
      continue;
    }
    if (Ke.lastIndex = t, Ke.test(i)) {
      if (d + e.width.emoji > n && (g = Math.min(g, t), d + e.width.emoji > e.truncation.limit)) {
        h = true;
        break;
      }
      d += e.width.emoji, t = Ke.lastIndex;
      continue;
    }
    const c = i.codePointAt(t) ?? 0;
    if (ps(c)) {
      t += c > 65535 ? 2 : 1;
      continue;
    }
    let b;
    if (u) b = bs(c, e);
    else switch (Iu(c)) {
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
        switch (Eu(c)) {
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
    if (d + b > n && (g = Math.min(g, t), d + b > e.truncation.limit)) {
      h = true;
      break;
    }
    d += b, t += c > 65535 ? 2 : 1;
  }
  let r = d, v = false;
  return h && e.truncation.limit >= e.truncation.ellipsisWidth && (r = e.truncation.limit, v = true), { ellipsed: v, index: h ? g : a, truncated: h, width: r };
};
const z$1 = (i, o = {}) => yo(i, { ...o, ellipsis: "", ellipsisWidth: 0, limit: Number.POSITIVE_INFINITY }).width;
let ws = class {
  capacity;
  cache;
  constructor(o) {
    this.capacity = o, this.cache = /* @__PURE__ */ new Map();
  }
  get(o) {
    if (!this.cache.has(o)) return;
    const e = this.cache.get(o);
    return this.cache.delete(o), this.cache.set(o, e), e;
  }
  has(o) {
    return this.cache.has(o);
  }
  set(o, e) {
    if (this.cache.has(o)) this.cache.delete(o);
    else if (this.cache.size >= this.capacity) {
      const n = this.cache.keys().next().value;
      n !== void 0 && this.cache.delete(n);
    }
    this.cache.set(o, e);
  }
  delete(o) {
    this.cache.delete(o);
  }
  clear() {
    this.cache.clear();
  }
  size() {
    return this.cache.size;
  }
};
const js = new Uint8Array(128);
const fs = new Uint8Array(128);
const ms = new Uint8Array(128);
for (let i = 0; i < 128; i++) js[i] = i >= 65 && i <= 90 ? 1 : 0, fs[i] = i >= 97 && i <= 122 ? 1 : 0, ms[i] = i >= 48 && i <= 57 ? 1 : 0;
const La = new ws(100);
const Ys = new Intl.Segmenter("en", { granularity: "grapheme" });
const ks = /^[\u0000-\u007F]*$/;
const Ls = /* @__PURE__ */ new Set(["0", "22", "23", "24", "27", "28", "29", "39", "49"]);
const Zs = /* @__PURE__ */ new Set(["1", "3", "4", "7", "8", "9"]);
const Za = /* @__PURE__ */ new Map([["22", "1"], ["23", "3"], ["24", "4"], ["27", "7"], ["28", "8"], ["29", "9"]]);
const Io = (i) => i >= "30" && i <= "37" || i >= "90" && i <= "97" || i.startsWith("38;");
const qo = (i) => i >= "40" && i <= "47" || i >= "100" && i <= "107" || i.startsWith("48;");
const Ss = [{ close: "\x1B[22m", open: "\x1B[1m" }, { close: "\x1B[23m", open: "\x1B[3m" }, { close: "\x1B[24m", open: "\x1B[4m" }, { close: "\x1B[27m", open: "\x1B[7m" }, { close: "\x1B[28m", open: "\x1B[8m" }, { close: "\x1B[29m", open: "\x1B[9m" }];
const Sa = (i, o) => {
  let e = -1;
  for (const n of o) {
    const a = i.indexOf(n);
    a !== -1 && (e === -1 || a < e) && (e = a);
  }
  return e;
};
const Js = (i, o) => {
  if (!i.includes("\x1B")) return [{ after: "", before: "", content: i, visibleLength: z$1(i, o.width) }];
  const e = `${JSON.stringify(o.width ?? void 0)}\0${i}`, n = La.get(e);
  if (n) return n;
  const a = [], u = [];
  let t = 0, d;
  for (se.lastIndex = 0; (d = se.exec(i)) !== null; ) {
    const r = d[0];
    a.push(i.slice(t, d.index)), u.push(r), t = d.index + r.length;
  }
  t < i.length && a.push(i.slice(t));
  const g = [];
  for (const r of u) {
    if (r === "\x1B[0m" || r === "\x1B]8;;\x07") {
      g.push(r);
      continue;
    }
    if (r.startsWith("\x1B[") && r.endsWith("m")) {
      const v = r.slice(2, -1);
      if (Ls.has(v)) {
        g.push(r);
        continue;
      }
    }
  }
  const h = /* @__PURE__ */ new Set(), l = [];
  for (const [r, v] of a.entries()) {
    if (r > 0 && u[r - 1]) {
      const b = u[r - 1];
      if (b === "\x1B[0m") h.clear();
      else if (b === "\x1B]8;;\x07") {
        for (const w of h) if (w.startsWith("\x1B]8;;") && !w.endsWith("\x1B]8;;\x07")) {
          h.delete(w);
          break;
        }
      } else if (b.startsWith("\x1B[") && b.endsWith("m")) {
        const w = b.slice(2, -1);
        if (w === "39") {
          for (const p of h) if (p.startsWith("\x1B[") && p.endsWith("m")) {
            const j = p.slice(2, -1);
            if (Io(j)) {
              h.delete(p);
              break;
            }
          }
        } else if (w === "49") {
          for (const p of h) if (p.startsWith("\x1B[") && p.endsWith("m")) {
            const j = p.slice(2, -1);
            if (qo(j)) {
              h.delete(p);
              break;
            }
          }
        } else if (Za.has(w)) {
          const p = Za.get(w);
          for (const j of h) if (j === `\x1B[${p}m`) {
            h.delete(j);
            break;
          }
        } else {
          if (Io(w)) {
            for (const p of h) if (p.startsWith("\x1B[") && p.endsWith("m")) {
              const j = p.slice(2, -1);
              if (Io(j)) {
                h.delete(p);
                break;
              }
            }
          } else if (qo(w)) {
            for (const p of h) if (p.startsWith("\x1B[") && p.endsWith("m")) {
              const j = p.slice(2, -1);
              if (qo(j)) {
                h.delete(p);
                break;
              }
            }
          } else if (Zs.has(w)) {
            const p = `\x1B[${w}m`;
            h.has(p) && h.delete(p);
          }
          h.add(b);
        }
      } else if (b.startsWith("\x1B]8;;") && !b.endsWith("\x1B]8;;\x07")) {
        for (const w of h) if (w.startsWith("\x1B]8;;") && !w.endsWith("\x1B]8;;\x07")) {
          h.delete(w);
          break;
        }
        h.add(b);
      }
    }
    if (v === "") continue;
    let y = "";
    if (h.size > 0) if (g.includes("\x1B[0m")) y = "\x1B[0m";
    else {
      const b = [];
      let w = false;
      for (const f of h) if (f.startsWith("\x1B]8;;") && !f.endsWith("\x1B]8;;\x07")) {
        w = true;
        break;
      }
      w && g.includes("\x1B]8;;\x07") && b.push("\x1B]8;;\x07");
      let p = false, j = false;
      for (const f of h) if (f.startsWith("\x1B[") && f.endsWith("m")) {
        const Y = f.slice(2, -1);
        Io(Y) ? p = true : qo(Y) && (j = true);
      }
      if (p && j) {
        const f = Sa(i, ["\x1B[3", "\x1B[9", "\x1B[38;"]), Y = Sa(i, ["\x1B[4", "\x1B[10", "\x1B[48;"]);
        f >= 0 && Y >= 0 ? f > Y ? b.push("\x1B[39m", "\x1B[49m") : b.push("\x1B[49m", "\x1B[39m") : b.push("\x1B[39m", "\x1B[49m");
      } else p && b.push("\x1B[39m"), j && b.push("\x1B[49m");
      p && j && i.includes("\x1B[39m") && i.includes("\x1B[49m") && (i.indexOf("\x1B[39m") < i.indexOf("\x1B[49m") ? (b.length -= 2, b.push("\x1B[39m", "\x1B[49m")) : i.indexOf("\x1B[49m") < i.indexOf("\x1B[39m") && (b.length -= 2, b.push("\x1B[49m", "\x1B[39m")));
      const k = Ss.filter((f) => h.has(f.open)).map((f) => ({ position: i.indexOf(f.open), style: f })).filter((f) => f.position >= 0).toSorted((f, Y) => Y.position - f.position);
      for (const f of k) {
        const Y = f;
        g.includes(Y.style.close) && b.push(Y.style.close);
      }
      y = b.join("");
    }
    const c = [...h].join("");
    l.push({ after: y, before: c, content: v, visibleLength: z$1(v, o.width) });
  }
  return La.set(e, l), l;
};
const Ja = (i, o, e, n) => {
  const a = [...n.segmenter.segment(i)], u = [];
  let t = 0, d = false;
  for (const g of a) {
    const h = z$1(g.segment, n.width), l = t, r = t + h;
    if (!d) if (l < o) {
      t = r;
      continue;
    } else d = true;
    if (l >= e || r > e) break;
    u.push(g.segment), t = r;
  }
  return u.join("");
};
const Ni = (i, o = 0, e = Number.MAX_SAFE_INTEGER, n = {}) => {
  const a = { segmenter: Ys, ...n };
  if (o >= e || i === "") return "";
  const u = z$1(i, a.width);
  if (o === 0 && e >= u) return i;
  if (o < 0 || e < 0) throw new RangeError("Negative indices aren't supported");
  if (!i.includes("\x1B")) return ks.test(i) ? i.slice(o, e) : Ja(i, o, e, a);
  if (ma.lastIndex = 0, Ya.lastIndex = 0, !ma.test(i) && !Ya.test(i)) return i;
  const t = Js(i, a);
  if (t.length === 0) return "";
  let d = 0;
  const g = [];
  for (const [r, v] of t.entries()) {
    const y = d, c = d + v.visibleLength;
    if (c > o && y < e) {
      const b = Math.max(0, o - y), w = Math.min(v.visibleLength, e - y);
      g.push({ end: w, index: r, segment: v, start: b });
    }
    d = c;
  }
  if (g.length === 0) return "";
  const h = [], l = g[0].segment;
  h.push(l.before);
  for (let r = 0; r < g.length; r++) {
    const { end: v, segment: y, start: c } = g[r];
    if (c === 0 && v === y.visibleLength ? h.push(y.content) : h.push(Ja(y.content, c, v, a)), r < g.length - 1) {
      const b = g[r + 1].segment, w = y.after, p = b.before;
      w !== p && (w || p) && h.push(w, p);
    }
  }
  return h.push(g.at(-1).segment.after), h.join("");
};
const Ca = "…";
const Cs = 3;
const Uo = (i, o, e = false) => {
  if (i.charAt(o) === " ") return o;
  const n = e ? 1 : -1, a = Math.min(Cs, e ? i.length - o : o);
  for (let u = 1; u <= a; u++) {
    const t = o + u * n;
    if (i.charAt(t) === " ") return t;
  }
  return o;
};
const Vo = (i, o, e) => yo(i, { ...e, ellipsis: "", ellipsisWidth: 0, limit: o }).index;
const ie = (i, o, e) => z$1(i.slice(0, o), e);
const Xa = (i, o, e = {}) => {
  if (typeof i != "string") throw new TypeError(`Expected \`input\` to be a string, got ${typeof i}`);
  if (typeof o != "number") throw new TypeError(`Expected \`limit\` to be a number, got ${typeof o}`);
  if (i === "" || o <= 0) return "";
  const n = i.normalize("NFC"), { ellipsis: a = Ca, position: u = "end", preferTruncationOnSpace: t = false } = e;
  let d = e.ellipsisWidth ?? (a === Ca ? 1 : void 0);
  d ??= yo(a, { ...e.width, ellipsis: "", ellipsisWidth: 0, limit: Number.POSITIVE_INFINITY }).width;
  const { width: g } = yo(n, { ...e.width, ellipsis: a, ellipsisWidth: d });
  if (g <= o) return n;
  switch (u) {
    case "end": {
      if (t) {
        const h = o - d, l = Vo(n, h, e.width), r = Uo(n, l), v = ie(n, r, e.width);
        return Ni(n, 0, v, { width: e.width }) + a;
      }
      return Ni(n, 0, o - d, { width: e.width }) + a;
    }
    case "middle": {
      const h = Math.floor(o / 2), l = Math.max(0, o - d), r = Math.min(h, l), v = Math.max(0, l - r);
      if (t) {
        const y = Vo(n, r, e.width), c = Uo(n, y), b = ie(n, c, e.width), w = g - v, p = Vo(n, w, e.width), j = Uo(n, p, true), k = ie(n, j, e.width);
        return Ni(n, 0, b, { width: e.width }) + a + Ni(n, k, g, { width: e.width }).trim();
      }
      return Ni(n, 0, r, { width: e.width }) + a + Ni(n, g - v, g, { width: e.width });
    }
    case "start": {
      if (t) {
        const h = g - o + d, l = Vo(n, h, e.width), r = Uo(n, l, true), v = ie(n, r, e.width);
        return a + Ni(n, v, g, { width: e.width }).trim();
      }
      return a + Ni(n, g - o + d, g, { width: e.width });
    }
    default:
      throw new Error(`Invalid position: expected 'start', 'middle' or 'end', got '${u}'`);
  }
};
function Xs(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Ae;
var Ha;
function Hs() {
  if (Ha) return Ae;
  Ha = 1, Ae = o;
  function i(n) {
    return n instanceof Buffer ? Buffer.from(n) : new n.constructor(n.buffer.slice(), n.byteOffset, n.length);
  }
  function o(n) {
    if (n = n || {}, n.circles) return e(n);
    const a = /* @__PURE__ */ new Map();
    if (a.set(Date, (h) => new Date(h)), a.set(Map, (h, l) => new Map(t(Array.from(h), l))), a.set(Set, (h, l) => new Set(t(Array.from(h), l))), n.constructorHandlers) for (const h of n.constructorHandlers) a.set(h[0], h[1]);
    let u = null;
    return n.proto ? g : d;
    function t(h, l) {
      const r = Object.keys(h), v = new Array(r.length);
      for (let y = 0; y < r.length; y++) {
        const c = r[y], b = h[c];
        typeof b != "object" || b === null ? v[c] = b : b.constructor !== Object && (u = a.get(b.constructor)) ? v[c] = u(b, l) : ArrayBuffer.isView(b) ? v[c] = i(b) : v[c] = l(b);
      }
      return v;
    }
    function d(h) {
      if (typeof h != "object" || h === null) return h;
      if (Array.isArray(h)) return t(h, d);
      if (h.constructor !== Object && (u = a.get(h.constructor))) return u(h, d);
      const l = {};
      for (const r in h) {
        if (Object.hasOwnProperty.call(h, r) === false) continue;
        const v = h[r];
        typeof v != "object" || v === null ? l[r] = v : v.constructor !== Object && (u = a.get(v.constructor)) ? l[r] = u(v, d) : ArrayBuffer.isView(v) ? l[r] = i(v) : l[r] = d(v);
      }
      return l;
    }
    function g(h) {
      if (typeof h != "object" || h === null) return h;
      if (Array.isArray(h)) return t(h, g);
      if (h.constructor !== Object && (u = a.get(h.constructor))) return u(h, g);
      const l = {};
      for (const r in h) {
        const v = h[r];
        typeof v != "object" || v === null ? l[r] = v : v.constructor !== Object && (u = a.get(v.constructor)) ? l[r] = u(v, g) : ArrayBuffer.isView(v) ? l[r] = i(v) : l[r] = g(v);
      }
      return l;
    }
  }
  function e(n) {
    const a = [], u = [], t = /* @__PURE__ */ new Map();
    if (t.set(Date, (r) => new Date(r)), t.set(Map, (r, v) => new Map(g(Array.from(r), v))), t.set(Set, (r, v) => new Set(g(Array.from(r), v))), n.constructorHandlers) for (const r of n.constructorHandlers) t.set(r[0], r[1]);
    let d = null;
    return n.proto ? l : h;
    function g(r, v) {
      const y = Object.keys(r), c = new Array(y.length);
      for (let b = 0; b < y.length; b++) {
        const w = y[b], p = r[w];
        if (typeof p != "object" || p === null) c[w] = p;
        else if (p.constructor !== Object && (d = t.get(p.constructor))) c[w] = d(p, v);
        else if (ArrayBuffer.isView(p)) c[w] = i(p);
        else {
          const j = a.indexOf(p);
          j !== -1 ? c[w] = u[j] : c[w] = v(p);
        }
      }
      return c;
    }
    function h(r) {
      if (typeof r != "object" || r === null) return r;
      if (Array.isArray(r)) return g(r, h);
      if (r.constructor !== Object && (d = t.get(r.constructor))) return d(r, h);
      const v = {};
      a.push(r), u.push(v);
      for (const y in r) {
        if (Object.hasOwnProperty.call(r, y) === false) continue;
        const c = r[y];
        if (typeof c != "object" || c === null) v[y] = c;
        else if (c.constructor !== Object && (d = t.get(c.constructor))) v[y] = d(c, h);
        else if (ArrayBuffer.isView(c)) v[y] = i(c);
        else {
          const b = a.indexOf(c);
          b !== -1 ? v[y] = u[b] : v[y] = h(c);
        }
      }
      return a.pop(), u.pop(), v;
    }
    function l(r) {
      if (typeof r != "object" || r === null) return r;
      if (Array.isArray(r)) return g(r, l);
      if (r.constructor !== Object && (d = t.get(r.constructor))) return d(r, l);
      const v = {};
      a.push(r), u.push(v);
      for (const y in r) {
        const c = r[y];
        if (typeof c != "object" || c === null) v[y] = c;
        else if (c.constructor !== Object && (d = t.get(c.constructor))) v[y] = d(c, l);
        else if (ArrayBuffer.isView(c)) v[y] = i(c);
        else {
          const b = a.indexOf(c);
          b !== -1 ? v[y] = u[b] : v[y] = l(c);
        }
      }
      return a.pop(), u.pop(), v;
    }
  }
  return Ae;
}
var Bs = Hs();
const qu = Xs(Bs);
qu();
var Uu = typeof global == "object" && global && global.Object === Object && global;
var Ts = typeof self == "object" && self && self.Object === Object && self;
var $$2 = Uu || Ts || Function("return this")();
var U = $$2.Symbol;
var Vu = Object.prototype;
var Ds = Vu.hasOwnProperty;
var Ms = Vu.toString;
var Co = U ? U.toStringTag : void 0;
function Qs(i) {
  var o = Ds.call(i, Co), e = i[Co];
  try {
    i[Co] = void 0;
    var n = true;
  } catch {
  }
  var a = Ms.call(i);
  return n && (o ? i[Co] = e : delete i[Co]), a;
}
var xs = Object.prototype;
var Gs = xs.toString;
function Ws(i) {
  return Gs.call(i);
}
var Ns = "[object Null]";
var Ps = "[object Undefined]";
var Ba = U ? U.toStringTag : void 0;
function oi(i) {
  return i == null ? i === void 0 ? Ps : Ns : Ba && Ba in Object(i) ? Qs(i) : Ws(i);
}
function A$3(i) {
  return i != null && typeof i == "object";
}
var Fs = "[object Symbol]";
function si(i) {
  return typeof i == "symbol" || A$3(i) && oi(i) == Fs;
}
var Rs = NaN;
function Ta(i) {
  return typeof i == "number" ? i : si(i) ? Rs : +i;
}
function R$1(i, o) {
  for (var e = -1, n = i == null ? 0 : i.length, a = Array(n); ++e < n; ) a[e] = o(i[e], e, i);
  return a;
}
var C$4 = Array.isArray;
var Da = U ? U.prototype : void 0;
var Ma = Da ? Da.toString : void 0;
function hi(i) {
  if (typeof i == "string") return i;
  if (C$4(i)) return R$1(i, hi) + "";
  if (si(i)) return Ma ? Ma.call(i) : "";
  var o = i + "";
  return o == "0" && 1 / i == -1 / 0 ? "-0" : o;
}
function pe(i, o) {
  return function(e, n) {
    var a;
    if (e === void 0 && n === void 0) return o;
    if (e !== void 0 && (a = e), n !== void 0) {
      if (a === void 0) return n;
      typeof e == "string" || typeof n == "string" ? (e = hi(e), n = hi(n)) : (e = Ta(e), n = Ta(n)), a = i(e, n);
    }
    return a;
  };
}
var Ks = pe(function(i, o) {
  return i + o;
}, 0);
var As = /\s/;
function it$1(i) {
  for (var o = i.length; o-- && As.test(i.charAt(o)); ) ;
  return o;
}
var Os = /^\s+/;
function ot$1(i) {
  return i && i.slice(0, it$1(i) + 1).replace(Os, "");
}
function K$1(i) {
  var o = typeof i;
  return i != null && (o == "object" || o == "function");
}
var Qa = NaN;
var _s = /^[-+]0x[0-9a-f]+$/i;
var Es = /^0b[01]+$/i;
var zs = /^0o[0-7]+$/i;
var $s = parseInt;
function yi(i) {
  if (typeof i == "number") return i;
  if (si(i)) return Qa;
  if (K$1(i)) {
    var o = typeof i.valueOf == "function" ? i.valueOf() : i;
    i = K$1(o) ? o + "" : o;
  }
  if (typeof i != "string") return i === 0 ? i : +i;
  i = ot$1(i);
  var e = Es.test(i);
  return e || zs.test(i) ? $s(i.slice(2), e ? 2 : 8) : _s.test(i) ? Qa : +i;
}
var xa = 1 / 0;
var Is = 17976931348623157e292;
function Ti(i) {
  if (!i) return i === 0 ? i : 0;
  if (i = yi(i), i === xa || i === -xa) {
    var o = i < 0 ? -1 : 1;
    return o * Is;
  }
  return i === i ? i : 0;
}
function H$1(i) {
  var o = Ti(i), e = o % 1;
  return o === o ? e ? o - e : o : 0;
}
var qs = "Expected a function";
function Us(i, o) {
  if (typeof o != "function") throw new TypeError(qs);
  return i = H$1(i), function() {
    if (--i < 1) return o.apply(this, arguments);
  };
}
function ui(i) {
  return i;
}
var Vs = "[object AsyncFunction]";
var ih = "[object Function]";
var oh = "[object GeneratorFunction]";
var eh = "[object Proxy]";
function Di(i) {
  if (!K$1(i)) return false;
  var o = oi(i);
  return o == ih || o == oh || o == Vs || o == eh;
}
var ae = $$2["__core-js_shared__"];
var Ga = (function() {
  var i = /[^.]+$/.exec(ae && ae.keys && ae.keys.IE_PROTO || "");
  return i ? "Symbol(src)_1." + i : "";
})();
function nh(i) {
  return !!Ga && Ga in i;
}
var ah = Function.prototype;
var uh = ah.toString;
function oo(i) {
  if (i != null) {
    try {
      return uh.call(i);
    } catch {
    }
    try {
      return i + "";
    } catch {
    }
  }
  return "";
}
var th = /[\\^$.*+?()[\]{}|]/g;
var dh = /^\[object .+?Constructor\]$/;
var gh = Function.prototype;
var sh = Object.prototype;
var hh = gh.toString;
var rh = sh.hasOwnProperty;
var lh = RegExp("^" + hh.call(rh).replace(th, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function et(i) {
  if (!K$1(i) || nh(i)) return false;
  var o = Di(i) ? lh : dh;
  return o.test(oo(i));
}
function vh(i, o) {
  return i?.[o];
}
function eo(i, o) {
  var e = vh(i, o);
  return et(e) ? e : void 0;
}
var Do = eo($$2, "WeakMap");
var he = Do && new Do();
var nt$1 = he ? function(i, o) {
  return he.set(i, o), i;
} : ui;
var Wa = Object.create;
var wo = /* @__PURE__ */ (function() {
  function i() {
  }
  return function(o) {
    if (!K$1(o)) return {};
    if (Wa) return Wa(o);
    i.prototype = o;
    var e = new i();
    return i.prototype = void 0, e;
  };
})();
function Mo(i) {
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
    var e = wo(i.prototype), n = i.apply(e, o);
    return K$1(n) ? n : e;
  };
}
var yh = 1;
function ch(i, o, e) {
  var n = o & yh, a = Mo(i);
  function u() {
    var t = this && this !== $$2 && this instanceof u ? a : i;
    return t.apply(n ? e : this, arguments);
  }
  return u;
}
function ri(i, o, e) {
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
var bh = Math.max;
function at(i, o, e, n) {
  for (var a = -1, u = i.length, t = e.length, d = -1, g = o.length, h = bh(u - t, 0), l = Array(g + h), r = !n; ++d < g; ) l[d] = o[d];
  for (; ++a < t; ) (r || a < u) && (l[e[a]] = i[a]);
  for (; h--; ) l[d++] = i[a++];
  return l;
}
var ph = Math.max;
function ut(i, o, e, n) {
  for (var a = -1, u = i.length, t = -1, d = e.length, g = -1, h = o.length, l = ph(u - d, 0), r = Array(l + h), v = !n; ++a < l; ) r[a] = i[a];
  for (var y = a; ++g < h; ) r[y + g] = o[g];
  for (; ++t < d; ) (v || a < u) && (r[y + e[t]] = i[a++]);
  return r;
}
function wh(i, o) {
  for (var e = i.length, n = 0; e--; ) i[e] === o && ++n;
  return n;
}
function we() {
}
var jh = 4294967295;
function T$2(i) {
  this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = jh, this.__views__ = [];
}
T$2.prototype = wo(we.prototype);
T$2.prototype.constructor = T$2;
function Ln() {
}
var Zn = he ? function(i) {
  return he.get(i);
} : Ln;
var lo = {};
var fh = Object.prototype;
var mh = fh.hasOwnProperty;
function ue(i) {
  for (var o = i.name + "", e = lo[o], n = mh.call(lo, o) ? e.length : 0; n--; ) {
    var a = e[n], u = a.func;
    if (u == null || u == i) return a.name;
  }
  return o;
}
function bi(i, o) {
  this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = void 0;
}
bi.prototype = wo(we.prototype);
bi.prototype.constructor = bi;
function ai(i, o) {
  var e = -1, n = i.length;
  for (o || (o = Array(n)); ++e < n; ) o[e] = i[e];
  return o;
}
function tt(i) {
  if (i instanceof T$2) return i.clone();
  var o = new bi(i.__wrapped__, i.__chain__);
  return o.__actions__ = ai(i.__actions__), o.__index__ = i.__index__, o.__values__ = i.__values__, o;
}
var Yh = Object.prototype;
var kh = Yh.hasOwnProperty;
function s$3(i) {
  if (A$3(i) && !C$4(i) && !(i instanceof T$2)) {
    if (i instanceof bi) return i;
    if (kh.call(i, "__wrapped__")) return tt(i);
  }
  return new bi(i);
}
s$3.prototype = we.prototype;
s$3.prototype.constructor = s$3;
function un(i) {
  var o = ue(i), e = s$3[o];
  if (typeof e != "function" || !(o in T$2.prototype)) return false;
  if (i === e) return true;
  var n = Zn(e);
  return !!n && i === n[0];
}
var Lh = 800;
var Zh = 16;
var Sh = Date.now;
function dt$1(i) {
  var o = 0, e = 0;
  return function() {
    var n = Sh(), a = Zh - (n - e);
    if (e = n, a > 0) {
      if (++o >= Lh) return arguments[0];
    } else o = 0;
    return i.apply(void 0, arguments);
  };
}
var gt$1 = dt$1(nt$1);
var Jh = /\{\n\/\* \[wrapped with (.+)\] \*/;
var Ch = /,? & /;
function Xh(i) {
  var o = i.match(Jh);
  return o ? o[1].split(Ch) : [];
}
var Hh = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
function Bh(i, o) {
  var e = o.length;
  if (!e) return i;
  var n = e - 1;
  return o[n] = (e > 1 ? "& " : "") + o[n], o = o.join(e > 2 ? ", " : " "), i.replace(Hh, `{
/* [wrapped with ` + o + `] */
`);
}
function Sn(i) {
  return function() {
    return i;
  };
}
var re = (function() {
  try {
    var i = eo(Object, "defineProperty");
    return i({}, "", {}), i;
  } catch {
  }
})();
var Th = re ? function(i, o) {
  return re(i, "toString", { configurable: true, enumerable: false, value: Sn(o), writable: true });
} : ui;
var Jn = dt$1(Th);
function vi(i, o) {
  for (var e = -1, n = i == null ? 0 : i.length; ++e < n && o(i[e], e, i) !== false; ) ;
  return i;
}
function je(i, o, e, n) {
  for (var a = i.length, u = e + (n ? 1 : -1); n ? u-- : ++u < a; ) if (o(i[u], u, i)) return u;
  return -1;
}
function st(i) {
  return i !== i;
}
function Dh(i, o, e) {
  for (var n = e - 1, a = i.length; ++n < a; ) if (i[n] === o) return n;
  return -1;
}
function jo(i, o, e) {
  return o === o ? Dh(i, o, e) : je(i, st, e);
}
function fe(i, o) {
  var e = i == null ? 0 : i.length;
  return !!e && jo(i, o, 0) > -1;
}
var Mh = 1;
var Qh = 2;
var xh = 8;
var Gh = 16;
var Wh = 32;
var Nh = 64;
var Ph = 128;
var Fh = 256;
var Rh = 512;
var Kh = [["ary", Ph], ["bind", Mh], ["bindKey", Qh], ["curry", xh], ["curryRight", Gh], ["flip", Rh], ["partial", Wh], ["partialRight", Nh], ["rearg", Fh]];
function Ah(i, o) {
  return vi(Kh, function(e) {
    var n = "_." + e[0];
    o & e[1] && !fe(i, n) && i.push(n);
  }), i.sort();
}
function ht$1(i, o, e) {
  var n = o + "";
  return Jn(i, Bh(n, Ah(Xh(n), e)));
}
var Oh = 4;
var _h = 8;
var Na = 32;
var Pa = 64;
function rt$1(i, o, e, n, a, u, t, d, g, h) {
  var l = o & _h, r = l ? t : void 0, v = l ? void 0 : t, y = l ? u : void 0, c = l ? void 0 : u;
  o |= l ? Na : Pa, o &= ~(l ? Pa : Na), o & Oh || (o &= -4);
  var b = [i, o, a, y, r, c, v, d, g, h], w = e.apply(void 0, b);
  return un(i) && gt$1(w, b), w.placeholder = n, ht$1(w, i, o);
}
function fo(i) {
  var o = i;
  return o.placeholder;
}
var Eh = 9007199254740991;
var zh = /^(?:0|[1-9]\d*)$/;
function Mi(i, o) {
  var e = typeof i;
  return o = o ?? Eh, !!o && (e == "number" || e != "symbol" && zh.test(i)) && i > -1 && i % 1 == 0 && i < o;
}
var $h = Math.min;
function Ih(i, o) {
  for (var e = i.length, n = $h(o.length, e), a = ai(i); n--; ) {
    var u = o[n];
    i[n] = Mi(u, e) ? a[u] : void 0;
  }
  return i;
}
var Fa = "__lodash_placeholder__";
function Pi(i, o) {
  for (var e = -1, n = i.length, a = 0, u = []; ++e < n; ) {
    var t = i[e];
    (t === o || t === Fa) && (i[e] = Fa, u[a++] = e);
  }
  return u;
}
var qh = 1;
var Uh = 2;
var Vh = 8;
var ir = 16;
var or = 128;
var er = 512;
function me(i, o, e, n, a, u, t, d, g, h) {
  var l = o & or, r = o & qh, v = o & Uh, y = o & (Vh | ir), c = o & er, b = v ? void 0 : Mo(i);
  function w() {
    for (var p = arguments.length, j = Array(p), k = p; k--; ) j[k] = arguments[k];
    if (y) var f = fo(w), Y = wh(j, f);
    if (n && (j = at(j, n, a, y)), u && (j = ut(j, u, t, y)), p -= Y, y && p < h) {
      var L = Pi(j, f);
      return rt$1(i, o, me, w.placeholder, e, j, L, d, g, h - p);
    }
    var D = r ? e : this, X = v ? D[i] : i;
    return p = j.length, d ? j = Ih(j, d) : c && p > 1 && j.reverse(), l && g < p && (j.length = g), this && this !== $$2 && this instanceof w && (X = b || Mo(X)), X.apply(D, j);
  }
  return w;
}
function nr(i, o, e) {
  var n = Mo(i);
  function a() {
    for (var u = arguments.length, t = Array(u), d = u, g = fo(a); d--; ) t[d] = arguments[d];
    var h = u < 3 && t[0] !== g && t[u - 1] !== g ? [] : Pi(t, g);
    if (u -= h.length, u < e) return rt$1(i, o, me, a.placeholder, void 0, t, h, void 0, void 0, e - u);
    var l = this && this !== $$2 && this instanceof a ? n : i;
    return ri(l, this, t);
  }
  return a;
}
var ar = 1;
function ur(i, o, e, n) {
  var a = o & ar, u = Mo(i);
  function t() {
    for (var d = -1, g = arguments.length, h = -1, l = n.length, r = Array(l + g), v = this && this !== $$2 && this instanceof t ? u : i; ++h < l; ) r[h] = n[h];
    for (; g--; ) r[h++] = arguments[++d];
    return ri(v, a ? e : this, r);
  }
  return t;
}
var Ra = "__lodash_placeholder__";
var Oe = 1;
var tr = 2;
var dr = 4;
var Ka = 8;
var Xo = 128;
var Aa = 256;
var gr = Math.min;
function sr(i, o) {
  var e = i[1], n = o[1], a = e | n, u = a < (Oe | tr | Xo), t = n == Xo && e == Ka || n == Xo && e == Aa && i[7].length <= o[8] || n == (Xo | Aa) && o[7].length <= o[8] && e == Ka;
  if (!(u || t)) return i;
  n & Oe && (i[2] = o[2], a |= e & Oe ? 0 : dr);
  var d = o[3];
  if (d) {
    var g = i[3];
    i[3] = g ? at(g, d, o[4]) : d, i[4] = g ? Pi(i[3], Ra) : o[4];
  }
  return d = o[5], d && (g = i[5], i[5] = g ? ut(g, d, o[6]) : d, i[6] = g ? Pi(i[5], Ra) : o[6]), d = o[7], d && (i[7] = d), n & Xo && (i[8] = i[8] == null ? o[8] : gr(i[8], o[8])), i[9] == null && (i[9] = o[9]), i[0] = o[0], i[1] = a, i;
}
var hr = "Expected a function";
var Oa = 1;
var rr = 2;
var _a = 8;
var Ea = 16;
var za = 32;
var lr = 64;
var $a = Math.max;
function Qi(i, o, e, n, a, u, t, d) {
  var g = o & rr;
  if (!g && typeof i != "function") throw new TypeError(hr);
  var h = n ? n.length : 0;
  if (h || (o &= -97, n = a = void 0), t = t === void 0 ? t : $a(H$1(t), 0), d = d === void 0 ? d : H$1(d), h -= a ? a.length : 0, o & lr) {
    var l = n, r = a;
    n = a = void 0;
  }
  var v = g ? void 0 : Zn(i), y = [i, o, e, n, a, l, r, u, t, d];
  if (v && sr(y, v), i = y[0], o = y[1], e = y[2], n = y[3], a = y[4], d = y[9] = y[9] === void 0 ? g ? 0 : i.length : $a(y[9] - h, 0), !d && o & (_a | Ea) && (o &= -25), !o || o == Oa) var c = ch(i, o, e);
  else o == _a || o == Ea ? c = nr(i, o, d) : (o == za || o == (Oa | za)) && !a.length ? c = ur(i, o, e, n) : c = me.apply(void 0, y);
  var b = v ? nt$1 : gt$1;
  return ht$1(b(c, y), i, o);
}
var vr = 128;
function lt(i, o, e) {
  return o = e ? void 0 : o, o = i && o == null ? i.length : o, Qi(i, vr, void 0, void 0, void 0, void 0, o);
}
function Ji(i, o, e) {
  o == "__proto__" && re ? re(i, o, { configurable: true, enumerable: true, value: e, writable: true }) : i[o] = e;
}
function Li(i, o) {
  return i === o || i !== i && o !== o;
}
var yr = Object.prototype;
var cr = yr.hasOwnProperty;
function No(i, o, e) {
  var n = i[o];
  (!(cr.call(i, o) && Li(n, e)) || e === void 0 && !(o in i)) && Ji(i, o, e);
}
function Ci(i, o, e, n) {
  var a = !e;
  e || (e = {});
  for (var u = -1, t = o.length; ++u < t; ) {
    var d = o[u], g = n ? n(e[d], i[d], d, e, i) : void 0;
    g === void 0 && (g = i[d]), a ? Ji(e, d, g) : No(e, d, g);
  }
  return e;
}
var Ia = Math.max;
function vt$1(i, o, e) {
  return o = Ia(o === void 0 ? i.length - 1 : o, 0), function() {
    for (var n = arguments, a = -1, u = Ia(n.length - o, 0), t = Array(u); ++a < u; ) t[a] = n[o + a];
    a = -1;
    for (var d = Array(o + 1); ++a < o; ) d[a] = n[a];
    return d[o] = e(t), ri(i, this, d);
  };
}
function B(i, o) {
  return Jn(vt$1(i, o, ui), i + "");
}
var br = 9007199254740991;
function Ye(i) {
  return typeof i == "number" && i > -1 && i % 1 == 0 && i <= br;
}
function ti(i) {
  return i != null && Ye(i.length) && !Di(i);
}
function ii(i, o, e) {
  if (!K$1(e)) return false;
  var n = typeof o;
  return (n == "number" ? ti(e) && Mi(o, e.length) : n == "string" && o in e) ? Li(e[o], i) : false;
}
function mo(i) {
  return B(function(o, e) {
    var n = -1, a = e.length, u = a > 1 ? e[a - 1] : void 0, t = a > 2 ? e[2] : void 0;
    for (u = i.length > 3 && typeof u == "function" ? (a--, u) : void 0, t && ii(e[0], e[1], t) && (u = a < 3 ? void 0 : u, a = 1), o = Object(o); ++n < a; ) {
      var d = e[n];
      d && i(o, d, n, u);
    }
    return o;
  });
}
var pr = Object.prototype;
function Po(i) {
  var o = i && i.constructor, e = typeof o == "function" && o.prototype || pr;
  return i === e;
}
function Cn(i, o) {
  for (var e = -1, n = Array(i); ++e < i; ) n[e] = o(e);
  return n;
}
var wr = "[object Arguments]";
function qa(i) {
  return A$3(i) && oi(i) == wr;
}
var yt$1 = Object.prototype;
var jr = yt$1.hasOwnProperty;
var fr = yt$1.propertyIsEnumerable;
var Ui = qa(/* @__PURE__ */ (function() {
  return arguments;
})()) ? qa : function(i) {
  return A$3(i) && jr.call(i, "callee") && !fr.call(i, "callee");
};
function Xn() {
  return false;
}
var ct$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var Ua = ct$1 && typeof module == "object" && module && !module.nodeType && module;
var mr = Ua && Ua.exports === ct$1;
var Va = mr ? $$2.Buffer : void 0;
var Yr = Va ? Va.isBuffer : void 0;
var Fi = Yr || Xn;
var kr = "[object Arguments]";
var Lr = "[object Array]";
var Zr = "[object Boolean]";
var Sr = "[object Date]";
var Jr = "[object Error]";
var Cr = "[object Function]";
var Xr = "[object Map]";
var Hr = "[object Number]";
var Br = "[object Object]";
var Tr = "[object RegExp]";
var Dr = "[object Set]";
var Mr = "[object String]";
var Qr = "[object WeakMap]";
var xr = "[object ArrayBuffer]";
var Gr = "[object DataView]";
var Wr = "[object Float32Array]";
var Nr = "[object Float64Array]";
var Pr = "[object Int8Array]";
var Fr = "[object Int16Array]";
var Rr = "[object Int32Array]";
var Kr = "[object Uint8Array]";
var Ar = "[object Uint8ClampedArray]";
var Or = "[object Uint16Array]";
var _r = "[object Uint32Array]";
var F$1 = {};
F$1[Wr] = F$1[Nr] = F$1[Pr] = F$1[Fr] = F$1[Rr] = F$1[Kr] = F$1[Ar] = F$1[Or] = F$1[_r] = true;
F$1[kr] = F$1[Lr] = F$1[xr] = F$1[Zr] = F$1[Gr] = F$1[Sr] = F$1[Jr] = F$1[Cr] = F$1[Xr] = F$1[Hr] = F$1[Br] = F$1[Tr] = F$1[Dr] = F$1[Mr] = F$1[Qr] = false;
function Er(i) {
  return A$3(i) && Ye(i.length) && !!F$1[oi(i)];
}
function li(i) {
  return function(o) {
    return i(o);
  };
}
var bt$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var Bo = bt$1 && typeof module == "object" && module && !module.nodeType && module;
var zr = Bo && Bo.exports === bt$1;
var _e = zr && Uu.process;
var pi = (function() {
  try {
    var i = Bo && Bo.require && Bo.require("util").types;
    return i || _e && _e.binding && _e.binding("util");
  } catch {
  }
})();
var iu = pi && pi.isTypedArray;
var Yo = iu ? li(iu) : Er;
var $r = Object.prototype;
var Ir = $r.hasOwnProperty;
function pt$1(i, o) {
  var e = C$4(i), n = !e && Ui(i), a = !e && !n && Fi(i), u = !e && !n && !a && Yo(i), t = e || n || a || u, d = t ? Cn(i.length, String) : [], g = d.length;
  for (var h in i) (o || Ir.call(i, h)) && !(t && (h == "length" || a && (h == "offset" || h == "parent") || u && (h == "buffer" || h == "byteLength" || h == "byteOffset") || Mi(h, g))) && d.push(h);
  return d;
}
function wt$1(i, o) {
  return function(e) {
    return i(o(e));
  };
}
var qr = wt$1(Object.keys, Object);
var Ur = Object.prototype;
var Vr = Ur.hasOwnProperty;
function Hn(i) {
  if (!Po(i)) return qr(i);
  var o = [];
  for (var e in Object(i)) Vr.call(i, e) && e != "constructor" && o.push(e);
  return o;
}
function I$2(i) {
  return ti(i) ? pt$1(i) : Hn(i);
}
var il = Object.prototype;
var ol = il.hasOwnProperty;
var el = mo(function(i, o) {
  if (Po(o) || ti(o)) {
    Ci(o, I$2(o), i);
    return;
  }
  for (var e in o) ol.call(o, e) && No(i, e, o[e]);
});
function nl(i) {
  var o = [];
  if (i != null) for (var e in Object(i)) o.push(e);
  return o;
}
var al = Object.prototype;
var ul = al.hasOwnProperty;
function tl(i) {
  if (!K$1(i)) return nl(i);
  var o = Po(i), e = [];
  for (var n in i) n == "constructor" && (o || !ul.call(i, n)) || e.push(n);
  return e;
}
function di(i) {
  return ti(i) ? pt$1(i, true) : tl(i);
}
var dl = mo(function(i, o) {
  Ci(o, di(o), i);
});
var gl = mo(function(i, o, e, n) {
  Ci(o, di(o), i, n);
});
var tn = mo(function(i, o, e, n) {
  Ci(o, I$2(o), i, n);
});
var sl = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var hl = /^\w*$/;
function Bn(i, o) {
  if (C$4(i)) return false;
  var e = typeof i;
  return e == "number" || e == "symbol" || e == "boolean" || i == null || si(i) ? true : hl.test(i) || !sl.test(i) || o != null && i in Object(o);
}
var Qo = eo(Object, "create");
function rl() {
  this.__data__ = Qo ? Qo(null) : {}, this.size = 0;
}
function ll(i) {
  var o = this.has(i) && delete this.__data__[i];
  return this.size -= o ? 1 : 0, o;
}
var vl = "__lodash_hash_undefined__";
var yl = Object.prototype;
var cl = yl.hasOwnProperty;
function bl(i) {
  var o = this.__data__;
  if (Qo) {
    var e = o[i];
    return e === vl ? void 0 : e;
  }
  return cl.call(o, i) ? o[i] : void 0;
}
var pl = Object.prototype;
var wl = pl.hasOwnProperty;
function jl(i) {
  var o = this.__data__;
  return Qo ? o[i] !== void 0 : wl.call(o, i);
}
var fl = "__lodash_hash_undefined__";
function ml(i, o) {
  var e = this.__data__;
  return this.size += this.has(i) ? 0 : 1, e[i] = Qo && o === void 0 ? fl : o, this;
}
function Vi(i) {
  var o = -1, e = i == null ? 0 : i.length;
  for (this.clear(); ++o < e; ) {
    var n = i[o];
    this.set(n[0], n[1]);
  }
}
Vi.prototype.clear = rl;
Vi.prototype.delete = ll;
Vi.prototype.get = bl;
Vi.prototype.has = jl;
Vi.prototype.set = ml;
function Yl() {
  this.__data__ = [], this.size = 0;
}
function ke(i, o) {
  for (var e = i.length; e--; ) if (Li(i[e][0], o)) return e;
  return -1;
}
var kl = Array.prototype;
var Ll = kl.splice;
function Zl(i) {
  var o = this.__data__, e = ke(o, i);
  if (e < 0) return false;
  var n = o.length - 1;
  return e == n ? o.pop() : Ll.call(o, e, 1), --this.size, true;
}
function Sl(i) {
  var o = this.__data__, e = ke(o, i);
  return e < 0 ? void 0 : o[e][1];
}
function Jl(i) {
  return ke(this.__data__, i) > -1;
}
function Cl(i, o) {
  var e = this.__data__, n = ke(e, i);
  return n < 0 ? (++this.size, e.push([i, o])) : e[n][1] = o, this;
}
function xi(i) {
  var o = -1, e = i == null ? 0 : i.length;
  for (this.clear(); ++o < e; ) {
    var n = i[o];
    this.set(n[0], n[1]);
  }
}
xi.prototype.clear = Yl;
xi.prototype.delete = Zl;
xi.prototype.get = Sl;
xi.prototype.has = Jl;
xi.prototype.set = Cl;
var xo = eo($$2, "Map");
function Xl() {
  this.size = 0, this.__data__ = { hash: new Vi(), map: new (xo || xi)(), string: new Vi() };
}
function Hl(i) {
  var o = typeof i;
  return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? i !== "__proto__" : i === null;
}
function Le(i, o) {
  var e = i.__data__;
  return Hl(o) ? e[typeof o == "string" ? "string" : "hash"] : e.map;
}
function Bl(i) {
  var o = Le(this, i).delete(i);
  return this.size -= o ? 1 : 0, o;
}
function Tl(i) {
  return Le(this, i).get(i);
}
function Dl(i) {
  return Le(this, i).has(i);
}
function Ml(i, o) {
  var e = Le(this, i), n = e.size;
  return e.set(i, o), this.size += e.size == n ? 0 : 1, this;
}
function Gi(i) {
  var o = -1, e = i == null ? 0 : i.length;
  for (this.clear(); ++o < e; ) {
    var n = i[o];
    this.set(n[0], n[1]);
  }
}
Gi.prototype.clear = Xl;
Gi.prototype.delete = Bl;
Gi.prototype.get = Tl;
Gi.prototype.has = Dl;
Gi.prototype.set = Ml;
var Ql = "Expected a function";
function Ze(i, o) {
  if (typeof i != "function" || o != null && typeof o != "function") throw new TypeError(Ql);
  var e = function() {
    var n = arguments, a = o ? o.apply(this, n) : n[0], u = e.cache;
    if (u.has(a)) return u.get(a);
    var t = i.apply(this, n);
    return e.cache = u.set(a, t) || u, t;
  };
  return e.cache = new (Ze.Cache || Gi)(), e;
}
Ze.Cache = Gi;
var xl = 500;
function Gl(i) {
  var o = Ze(i, function(n) {
    return e.size === xl && e.clear(), n;
  }), e = o.cache;
  return o;
}
var Wl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var Nl = /\\(\\)?/g;
var jt$1 = Gl(function(i) {
  var o = [];
  return i.charCodeAt(0) === 46 && o.push(""), i.replace(Wl, function(e, n, a, u) {
    o.push(a ? u.replace(Nl, "$1") : n || e);
  }), o;
});
function Q(i) {
  return i == null ? "" : hi(i);
}
function Ki(i, o) {
  return C$4(i) ? i : Bn(i, o) ? [i] : jt$1(Q(i));
}
function Yi(i) {
  if (typeof i == "string" || si(i)) return i;
  var o = i + "";
  return o == "0" && 1 / i == -1 / 0 ? "-0" : o;
}
function no(i, o) {
  o = Ki(o, i);
  for (var e = 0, n = o.length; i != null && e < n; ) i = i[Yi(o[e++])];
  return e && e == n ? i : void 0;
}
function Tn(i, o, e) {
  var n = i == null ? void 0 : no(i, o);
  return n === void 0 ? e : n;
}
function Dn(i, o) {
  for (var e = -1, n = o.length, a = Array(n), u = i == null; ++e < n; ) a[e] = u ? void 0 : Tn(i, o[e]);
  return a;
}
function Ai(i, o) {
  for (var e = -1, n = o.length, a = i.length; ++e < n; ) i[a + e] = o[e];
  return i;
}
var ou = U ? U.isConcatSpreadable : void 0;
function Pl(i) {
  return C$4(i) || Ui(i) || !!(ou && i && i[ou]);
}
function q$1(i, o, e, n, a) {
  var u = -1, t = i.length;
  for (e || (e = Pl), a || (a = []); ++u < t; ) {
    var d = i[u];
    o > 0 && e(d) ? o > 1 ? q$1(d, o - 1, e, n, a) : Ai(a, d) : n || (a[a.length] = d);
  }
  return a;
}
function ft$1(i) {
  var o = i == null ? 0 : i.length;
  return o ? q$1(i, 1) : [];
}
function Wi(i) {
  return Jn(vt$1(i, void 0, ft$1), i + "");
}
var Fl = Wi(Dn);
var Se = wt$1(Object.getPrototypeOf, Object);
var Rl = "[object Object]";
var Kl = Function.prototype;
var Al = Object.prototype;
var mt$1 = Kl.toString;
var Ol = Al.hasOwnProperty;
var _l = mt$1.call(Object);
function Fo(i) {
  if (!A$3(i) || oi(i) != Rl) return false;
  var o = Se(i);
  if (o === null) return true;
  var e = Ol.call(o, "constructor") && o.constructor;
  return typeof e == "function" && e instanceof e && mt$1.call(e) == _l;
}
var El = "[object DOMException]";
var zl = "[object Error]";
function Mn(i) {
  if (!A$3(i)) return false;
  var o = oi(i);
  return o == zl || o == El || typeof i.message == "string" && typeof i.name == "string" && !Fo(i);
}
var Yt = B(function(i, o) {
  try {
    return ri(i, void 0, o);
  } catch (e) {
    return Mn(e) ? e : new Error(e);
  }
});
var $l = "Expected a function";
function kt$1(i, o) {
  var e;
  if (typeof o != "function") throw new TypeError($l);
  return i = H$1(i), function() {
    return --i > 0 && (e = o.apply(this, arguments)), i <= 1 && (o = void 0), e;
  };
}
var Il = 1;
var ql = 32;
var Je = B(function(i, o, e) {
  var n = Il;
  if (e.length) {
    var a = Pi(e, fo(Je));
    n |= ql;
  }
  return Qi(i, n, o, e, a);
});
Je.placeholder = {};
var Ul = Wi(function(i, o) {
  return vi(o, function(e) {
    e = Yi(e), Ji(i, e, Je(i[e], i));
  }), i;
});
var Vl = 1;
var i0 = 2;
var o0 = 32;
var Qn = B(function(i, o, e) {
  var n = Vl | i0;
  if (e.length) {
    var a = Pi(e, fo(Qn));
    n |= o0;
  }
  return Qi(o, n, i, e, a);
});
Qn.placeholder = {};
function wi(i, o, e) {
  var n = -1, a = i.length;
  o < 0 && (o = -o > a ? 0 : a + o), e = e > a ? a : e, e < 0 && (e += a), a = o > e ? 0 : e - o >>> 0, o >>>= 0;
  for (var u = Array(a); ++n < a; ) u[n] = i[n + o];
  return u;
}
function Oi(i, o, e) {
  var n = i.length;
  return e = e === void 0 ? n : e, !o && e >= n ? i : wi(i, o, e);
}
var e0 = "\\ud800-\\udfff";
var n0 = "\\u0300-\\u036f";
var a0 = "\\ufe20-\\ufe2f";
var u0 = "\\u20d0-\\u20ff";
var t0 = n0 + a0 + u0;
var d0 = "\\ufe0e\\ufe0f";
var g0 = "\\u200d";
var s0 = RegExp("[" + g0 + e0 + t0 + d0 + "]");
function ko(i) {
  return s0.test(i);
}
function h0(i) {
  return i.split("");
}
var Lt$1 = "\\ud800-\\udfff";
var r0 = "\\u0300-\\u036f";
var l0 = "\\ufe20-\\ufe2f";
var v0 = "\\u20d0-\\u20ff";
var y0 = r0 + l0 + v0;
var c0 = "\\ufe0e\\ufe0f";
var b0 = "[" + Lt$1 + "]";
var dn = "[" + y0 + "]";
var gn = "\\ud83c[\\udffb-\\udfff]";
var p0 = "(?:" + dn + "|" + gn + ")";
var Zt = "[^" + Lt$1 + "]";
var St$1 = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var Jt = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var w0 = "\\u200d";
var Ct$1 = p0 + "?";
var Xt = "[" + c0 + "]?";
var j0 = "(?:" + w0 + "(?:" + [Zt, St$1, Jt].join("|") + ")" + Xt + Ct$1 + ")*";
var f0 = Xt + Ct$1 + j0;
var m0 = "(?:" + [Zt + dn + "?", dn, St$1, Jt, b0].join("|") + ")";
var Y0 = RegExp(gn + "(?=" + gn + ")|" + m0 + f0, "g");
function k0(i) {
  return i.match(Y0) || [];
}
function ki(i) {
  return ko(i) ? k0(i) : h0(i);
}
function Ht$1(i) {
  return function(o) {
    o = Q(o);
    var e = ko(o) ? ki(o) : void 0, n = e ? e[0] : o.charAt(0), a = e ? Oi(e, 1).join("") : o.slice(1);
    return n[i]() + a;
  };
}
var xn = Ht$1("toUpperCase");
function Bt$1(i) {
  return xn(Q(i).toLowerCase());
}
function Gn(i, o, e, n) {
  var a = -1, u = i == null ? 0 : i.length;
  for (n && u && (e = i[++a]); ++a < u; ) e = o(e, i[a], a, i);
  return e;
}
function Wn(i) {
  return function(o) {
    return i?.[o];
  };
}
var L0 = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" };
var Z0 = Wn(L0);
var S0 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
var J0 = "\\u0300-\\u036f";
var C0 = "\\ufe20-\\ufe2f";
var X0 = "\\u20d0-\\u20ff";
var H0 = J0 + C0 + X0;
var B0 = "[" + H0 + "]";
var T0 = RegExp(B0, "g");
function Tt$1(i) {
  return i = Q(i), i && i.replace(S0, Z0).replace(T0, "");
}
var D0 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function M0(i) {
  return i.match(D0) || [];
}
var Q0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function x0(i) {
  return Q0.test(i);
}
var Dt$1 = "\\ud800-\\udfff";
var G0 = "\\u0300-\\u036f";
var W0 = "\\ufe20-\\ufe2f";
var N0 = "\\u20d0-\\u20ff";
var P0 = G0 + W0 + N0;
var Mt$1 = "\\u2700-\\u27bf";
var Qt$1 = "a-z\\xdf-\\xf6\\xf8-\\xff";
var F0 = "\\xac\\xb1\\xd7\\xf7";
var R0 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
var K0 = "\\u2000-\\u206f";
var A0 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
var xt$1 = "A-Z\\xc0-\\xd6\\xd8-\\xde";
var O0 = "\\ufe0e\\ufe0f";
var Gt = F0 + R0 + K0 + A0;
var Wt$1 = "['’]";
var eu = "[" + Gt + "]";
var _0 = "[" + P0 + "]";
var Nt$1 = "\\d+";
var E0 = "[" + Mt$1 + "]";
var Pt$1 = "[" + Qt$1 + "]";
var Ft$1 = "[^" + Dt$1 + Gt + Nt$1 + Mt$1 + Qt$1 + xt$1 + "]";
var z0 = "\\ud83c[\\udffb-\\udfff]";
var $0 = "(?:" + _0 + "|" + z0 + ")";
var I0 = "[^" + Dt$1 + "]";
var Rt$1 = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var Kt = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var ho = "[" + xt$1 + "]";
var q0 = "\\u200d";
var nu = "(?:" + Pt$1 + "|" + Ft$1 + ")";
var U0 = "(?:" + ho + "|" + Ft$1 + ")";
var au = "(?:" + Wt$1 + "(?:d|ll|m|re|s|t|ve))?";
var uu = "(?:" + Wt$1 + "(?:D|LL|M|RE|S|T|VE))?";
var At$1 = $0 + "?";
var Ot$1 = "[" + O0 + "]?";
var V0 = "(?:" + q0 + "(?:" + [I0, Rt$1, Kt].join("|") + ")" + Ot$1 + At$1 + ")*";
var iv = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])";
var ov = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])";
var ev = Ot$1 + At$1 + V0;
var nv = "(?:" + [E0, Rt$1, Kt].join("|") + ")" + ev;
var av = RegExp([ho + "?" + Pt$1 + "+" + au + "(?=" + [eu, ho, "$"].join("|") + ")", U0 + "+" + uu + "(?=" + [eu, ho + nu, "$"].join("|") + ")", ho + "?" + nu + "+" + au, ho + "+" + uu, ov, iv, Nt$1, nv].join("|"), "g");
function uv(i) {
  return i.match(av) || [];
}
function _t$1(i, o, e) {
  return i = Q(i), o = e ? void 0 : o, o === void 0 ? x0(i) ? uv(i) : M0(i) : i.match(o) || [];
}
var tv = "['’]";
var dv = RegExp(tv, "g");
function Lo(i) {
  return function(o) {
    return Gn(_t$1(Tt$1(o).replace(dv, "")), i, "");
  };
}
var gv = Lo(function(i, o, e) {
  return o = o.toLowerCase(), i + (e ? Bt$1(o) : o);
});
function sv() {
  if (!arguments.length) return [];
  var i = arguments[0];
  return C$4(i) ? i : [i];
}
var hv = $$2.isFinite;
var rv = Math.min;
function Nn(i) {
  var o = Math[i];
  return function(e, n) {
    if (e = yi(e), n = n == null ? 0 : rv(H$1(n), 292), n && hv(e)) {
      var a = (Q(e) + "e").split("e"), u = o(a[0] + "e" + (+a[1] + n));
      return a = (Q(u) + "e").split("e"), +(a[0] + "e" + (+a[1] - n));
    }
    return o(e);
  };
}
var lv = Nn("ceil");
function Et$1(i) {
  var o = s$3(i);
  return o.__chain__ = true, o;
}
var vv = Math.ceil;
var yv = Math.max;
function cv(i, o, e) {
  (e ? ii(i, o, e) : o === void 0) ? o = 1 : o = yv(H$1(o), 0);
  var n = i == null ? 0 : i.length;
  if (!n || o < 1) return [];
  for (var a = 0, u = 0, t = Array(vv(n / o)); a < n; ) t[u++] = wi(i, a, a += o);
  return t;
}
function ao(i, o, e) {
  return i === i && (e !== void 0 && (i = i <= e ? i : e), o !== void 0 && (i = i >= o ? i : o)), i;
}
function bv(i, o, e) {
  return e === void 0 && (e = o, o = void 0), e !== void 0 && (e = yi(e), e = e === e ? e : 0), o !== void 0 && (o = yi(o), o = o === o ? o : 0), ao(yi(i), o, e);
}
function pv() {
  this.__data__ = new xi(), this.size = 0;
}
function wv(i) {
  var o = this.__data__, e = o.delete(i);
  return this.size = o.size, e;
}
function jv(i) {
  return this.__data__.get(i);
}
function fv(i) {
  return this.__data__.has(i);
}
var mv = 200;
function Yv(i, o) {
  var e = this.__data__;
  if (e instanceof xi) {
    var n = e.__data__;
    if (!xo || n.length < mv - 1) return n.push([i, o]), this.size = ++e.size, this;
    e = this.__data__ = new Gi(n);
  }
  return e.set(i, o), this.size = e.size, this;
}
function mi(i) {
  var o = this.__data__ = new xi(i);
  this.size = o.size;
}
mi.prototype.clear = pv;
mi.prototype.delete = wv;
mi.prototype.get = jv;
mi.prototype.has = fv;
mi.prototype.set = Yv;
function zt$1(i, o) {
  return i && Ci(o, I$2(o), i);
}
function kv(i, o) {
  return i && Ci(o, di(o), i);
}
var $t$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var tu = $t$1 && typeof module == "object" && module && !module.nodeType && module;
var Lv = tu && tu.exports === $t$1;
var du = Lv ? $$2.Buffer : void 0;
var gu = du ? du.allocUnsafe : void 0;
function It$1(i, o) {
  if (o) return i.slice();
  var e = i.length, n = gu ? gu(e) : new i.constructor(e);
  return i.copy(n), n;
}
function _i(i, o) {
  for (var e = -1, n = i == null ? 0 : i.length, a = 0, u = []; ++e < n; ) {
    var t = i[e];
    o(t, e, i) && (u[a++] = t);
  }
  return u;
}
function Pn() {
  return [];
}
var Zv = Object.prototype;
var Sv = Zv.propertyIsEnumerable;
var su = Object.getOwnPropertySymbols;
var Fn = su ? function(i) {
  return i == null ? [] : (i = Object(i), _i(su(i), function(o) {
    return Sv.call(i, o);
  }));
} : Pn;
function Jv(i, o) {
  return Ci(i, Fn(i), o);
}
var Cv = Object.getOwnPropertySymbols;
var qt$1 = Cv ? function(i) {
  for (var o = []; i; ) Ai(o, Fn(i)), i = Se(i);
  return o;
} : Pn;
function Xv(i, o) {
  return Ci(i, qt$1(i), o);
}
function Ut$1(i, o, e) {
  var n = o(i);
  return C$4(i) ? n : Ai(n, e(i));
}
function sn(i) {
  return Ut$1(i, I$2, Fn);
}
function Rn(i) {
  return Ut$1(i, di, qt$1);
}
var hn = eo($$2, "DataView");
var rn = eo($$2, "Promise");
var vo = eo($$2, "Set");
var hu = "[object Map]";
var Hv = "[object Object]";
var ru = "[object Promise]";
var lu = "[object Set]";
var vu = "[object WeakMap]";
var yu = "[object DataView]";
var Bv = oo(hn);
var Tv = oo(xo);
var Dv = oo(rn);
var Mv = oo(vo);
var Qv = oo(Do);
var $i = oi;
(hn && $i(new hn(new ArrayBuffer(1))) != yu || xo && $i(new xo()) != hu || rn && $i(rn.resolve()) != ru || vo && $i(new vo()) != lu || Do && $i(new Do()) != vu) && ($i = function(i) {
  var o = oi(i), e = o == Hv ? i.constructor : void 0, n = e ? oo(e) : "";
  if (n) switch (n) {
    case Bv:
      return yu;
    case Tv:
      return hu;
    case Dv:
      return ru;
    case Mv:
      return lu;
    case Qv:
      return vu;
  }
  return o;
});
const Si = $i;
var xv = Object.prototype;
var Gv = xv.hasOwnProperty;
function Wv(i) {
  var o = i.length, e = new i.constructor(o);
  return o && typeof i[0] == "string" && Gv.call(i, "index") && (e.index = i.index, e.input = i.input), e;
}
var le = $$2.Uint8Array;
function Kn(i) {
  var o = new i.constructor(i.byteLength);
  return new le(o).set(new le(i)), o;
}
function Nv(i, o) {
  var e = o ? Kn(i.buffer) : i.buffer;
  return new i.constructor(e, i.byteOffset, i.byteLength);
}
var Pv = /\w*$/;
function Fv(i) {
  var o = new i.constructor(i.source, Pv.exec(i));
  return o.lastIndex = i.lastIndex, o;
}
var cu = U ? U.prototype : void 0;
var bu = cu ? cu.valueOf : void 0;
function Rv(i) {
  return bu ? Object(bu.call(i)) : {};
}
function Vt(i, o) {
  var e = o ? Kn(i.buffer) : i.buffer;
  return new i.constructor(e, i.byteOffset, i.length);
}
var Kv = "[object Boolean]";
var Av = "[object Date]";
var Ov = "[object Map]";
var _v = "[object Number]";
var Ev = "[object RegExp]";
var zv = "[object Set]";
var $v = "[object String]";
var Iv = "[object Symbol]";
var qv = "[object ArrayBuffer]";
var Uv = "[object DataView]";
var Vv = "[object Float32Array]";
var iy = "[object Float64Array]";
var oy = "[object Int8Array]";
var ey = "[object Int16Array]";
var ny = "[object Int32Array]";
var ay = "[object Uint8Array]";
var uy = "[object Uint8ClampedArray]";
var ty = "[object Uint16Array]";
var dy = "[object Uint32Array]";
function gy(i, o, e) {
  var n = i.constructor;
  switch (o) {
    case qv:
      return Kn(i);
    case Kv:
    case Av:
      return new n(+i);
    case Uv:
      return Nv(i, e);
    case Vv:
    case iy:
    case oy:
    case ey:
    case ny:
    case ay:
    case uy:
    case ty:
    case dy:
      return Vt(i, e);
    case Ov:
      return new n();
    case _v:
    case $v:
      return new n(i);
    case Ev:
      return Fv(i);
    case zv:
      return new n();
    case Iv:
      return Rv(i);
  }
}
function id(i) {
  return typeof i.constructor == "function" && !Po(i) ? wo(Se(i)) : {};
}
var sy = "[object Map]";
function hy(i) {
  return A$3(i) && Si(i) == sy;
}
var pu = pi && pi.isMap;
var od = pu ? li(pu) : hy;
var ry = "[object Set]";
function ly(i) {
  return A$3(i) && Si(i) == ry;
}
var wu = pi && pi.isSet;
var ed = wu ? li(wu) : ly;
var vy = 1;
var yy = 2;
var cy = 4;
var nd = "[object Arguments]";
var by = "[object Array]";
var py = "[object Boolean]";
var wy = "[object Date]";
var jy = "[object Error]";
var ad = "[object Function]";
var fy = "[object GeneratorFunction]";
var my = "[object Map]";
var Yy = "[object Number]";
var ud = "[object Object]";
var ky = "[object RegExp]";
var Ly = "[object Set]";
var Zy = "[object String]";
var Sy = "[object Symbol]";
var Jy = "[object WeakMap]";
var Cy = "[object ArrayBuffer]";
var Xy = "[object DataView]";
var Hy = "[object Float32Array]";
var By = "[object Float64Array]";
var Ty = "[object Int8Array]";
var Dy = "[object Int16Array]";
var My = "[object Int32Array]";
var Qy = "[object Uint8Array]";
var xy = "[object Uint8ClampedArray]";
var Gy = "[object Uint16Array]";
var Wy = "[object Uint32Array]";
var N$3 = {};
N$3[nd] = N$3[by] = N$3[Cy] = N$3[Xy] = N$3[py] = N$3[wy] = N$3[Hy] = N$3[By] = N$3[Ty] = N$3[Dy] = N$3[My] = N$3[my] = N$3[Yy] = N$3[ud] = N$3[ky] = N$3[Ly] = N$3[Zy] = N$3[Sy] = N$3[Qy] = N$3[xy] = N$3[Gy] = N$3[Wy] = true;
N$3[jy] = N$3[ad] = N$3[Jy] = false;
function ci(i, o, e, n, a, u) {
  var t, d = o & vy, g = o & yy, h = o & cy;
  if (e && (t = a ? e(i, n, a, u) : e(i)), t !== void 0) return t;
  if (!K$1(i)) return i;
  var l = C$4(i);
  if (l) {
    if (t = Wv(i), !d) return ai(i, t);
  } else {
    var r = Si(i), v = r == ad || r == fy;
    if (Fi(i)) return It$1(i, d);
    if (r == ud || r == nd || v && !a) {
      if (t = g || v ? {} : id(i), !d) return g ? Xv(i, kv(t, i)) : Jv(i, zt$1(t, i));
    } else {
      if (!N$3[r]) return a ? i : {};
      t = gy(i, r, d);
    }
  }
  u || (u = new mi());
  var y = u.get(i);
  if (y) return y;
  u.set(i, t), ed(i) ? i.forEach(function(w) {
    t.add(ci(w, o, e, w, i, u));
  }) : od(i) && i.forEach(function(w, p) {
    t.set(p, ci(w, o, e, p, i, u));
  });
  var c = h ? g ? Rn : sn : g ? di : I$2, b = l ? void 0 : c(i);
  return vi(b || i, function(w, p) {
    b && (p = w, w = i[p]), No(t, p, ci(w, o, e, p, i, u));
  }), t;
}
var Ny = 4;
function Py(i) {
  return ci(i, Ny);
}
var Fy = 1;
var Ry = 4;
function Ky(i) {
  return ci(i, Fy | Ry);
}
var Ay = 1;
var Oy = 4;
function _y(i, o) {
  return o = typeof o == "function" ? o : void 0, ci(i, Ay | Oy, o);
}
var Ey = 4;
function zy(i, o) {
  return o = typeof o == "function" ? o : void 0, ci(i, Ey, o);
}
function $y() {
  return new bi(this.value(), this.__chain__);
}
function Iy(i) {
  for (var o = -1, e = i == null ? 0 : i.length, n = 0, a = []; ++o < e; ) {
    var u = i[o];
    u && (a[n++] = u);
  }
  return a;
}
function qy() {
  var i = arguments.length;
  if (!i) return [];
  for (var o = Array(i - 1), e = arguments[0], n = i; n--; ) o[n - 1] = arguments[n];
  return Ai(C$4(e) ? ai(e) : [e], q$1(o, 1));
}
var Uy = "__lodash_hash_undefined__";
function Vy(i) {
  return this.__data__.set(i, Uy), this;
}
function ic(i) {
  return this.__data__.has(i);
}
function io(i) {
  var o = -1, e = i == null ? 0 : i.length;
  for (this.__data__ = new Gi(); ++o < e; ) this.add(i[o]);
}
io.prototype.add = io.prototype.push = Vy;
io.prototype.has = ic;
function An(i, o) {
  for (var e = -1, n = i == null ? 0 : i.length; ++e < n; ) if (o(i[e], e, i)) return true;
  return false;
}
function Go(i, o) {
  return i.has(o);
}
var oc = 1;
var ec = 2;
function td(i, o, e, n, a, u) {
  var t = e & oc, d = i.length, g = o.length;
  if (d != g && !(t && g > d)) return false;
  var h = u.get(i), l = u.get(o);
  if (h && l) return h == o && l == i;
  var r = -1, v = true, y = e & ec ? new io() : void 0;
  for (u.set(i, o), u.set(o, i); ++r < d; ) {
    var c = i[r], b = o[r];
    if (n) var w = t ? n(b, c, r, o, i, u) : n(c, b, r, i, o, u);
    if (w !== void 0) {
      if (w) continue;
      v = false;
      break;
    }
    if (y) {
      if (!An(o, function(p, j) {
        if (!Go(y, j) && (c === p || a(c, p, e, n, u))) return y.push(j);
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
function On(i) {
  var o = -1, e = Array(i.size);
  return i.forEach(function(n, a) {
    e[++o] = [a, n];
  }), e;
}
function Ce(i) {
  var o = -1, e = Array(i.size);
  return i.forEach(function(n) {
    e[++o] = n;
  }), e;
}
var nc = 1;
var ac = 2;
var uc = "[object Boolean]";
var tc = "[object Date]";
var dc = "[object Error]";
var gc = "[object Map]";
var sc = "[object Number]";
var hc = "[object RegExp]";
var rc = "[object Set]";
var lc = "[object String]";
var vc = "[object Symbol]";
var yc = "[object ArrayBuffer]";
var cc = "[object DataView]";
var ju = U ? U.prototype : void 0;
var Ee = ju ? ju.valueOf : void 0;
function bc(i, o, e, n, a, u, t) {
  switch (e) {
    case cc:
      if (i.byteLength != o.byteLength || i.byteOffset != o.byteOffset) return false;
      i = i.buffer, o = o.buffer;
    case yc:
      return !(i.byteLength != o.byteLength || !u(new le(i), new le(o)));
    case uc:
    case tc:
    case sc:
      return Li(+i, +o);
    case dc:
      return i.name == o.name && i.message == o.message;
    case hc:
    case lc:
      return i == o + "";
    case gc:
      var d = On;
    case rc:
      var g = n & nc;
      if (d || (d = Ce), i.size != o.size && !g) return false;
      var h = t.get(i);
      if (h) return h == o;
      n |= ac, t.set(i, o);
      var l = td(d(i), d(o), n, a, u, t);
      return t.delete(i), l;
    case vc:
      if (Ee) return Ee.call(i) == Ee.call(o);
  }
  return false;
}
var pc = 1;
var wc = Object.prototype;
var jc = wc.hasOwnProperty;
function fc(i, o, e, n, a, u) {
  var t = e & pc, d = sn(i), g = d.length, h = sn(o), l = h.length;
  if (g != l && !t) return false;
  for (var r = g; r--; ) {
    var v = d[r];
    if (!(t ? v in o : jc.call(o, v))) return false;
  }
  var y = u.get(i), c = u.get(o);
  if (y && c) return y == o && c == i;
  var b = true;
  u.set(i, o), u.set(o, i);
  for (var w = t; ++r < g; ) {
    v = d[r];
    var p = i[v], j = o[v];
    if (n) var k = t ? n(j, p, v, o, i, u) : n(p, j, v, i, o, u);
    if (!(k === void 0 ? p === j || a(p, j, e, n, u) : k)) {
      b = false;
      break;
    }
    w || (w = v == "constructor");
  }
  if (b && !w) {
    var f = i.constructor, Y = o.constructor;
    f != Y && "constructor" in i && "constructor" in o && !(typeof f == "function" && f instanceof f && typeof Y == "function" && Y instanceof Y) && (b = false);
  }
  return u.delete(i), u.delete(o), b;
}
var mc = 1;
var fu = "[object Arguments]";
var mu = "[object Array]";
var oe = "[object Object]";
var Yc = Object.prototype;
var Yu = Yc.hasOwnProperty;
function kc(i, o, e, n, a, u) {
  var t = C$4(i), d = C$4(o), g = t ? mu : Si(i), h = d ? mu : Si(o);
  g = g == fu ? oe : g, h = h == fu ? oe : h;
  var l = g == oe, r = h == oe, v = g == h;
  if (v && Fi(i)) {
    if (!Fi(o)) return false;
    t = true, l = false;
  }
  if (v && !l) return u || (u = new mi()), t || Yo(i) ? td(i, o, e, n, a, u) : bc(i, o, g, e, n, a, u);
  if (!(e & mc)) {
    var y = l && Yu.call(i, "__wrapped__"), c = r && Yu.call(o, "__wrapped__");
    if (y || c) {
      var b = y ? i.value() : i, w = c ? o.value() : o;
      return u || (u = new mi()), a(b, w, e, n, u);
    }
  }
  return v ? (u || (u = new mi()), fc(i, o, e, n, a, u)) : false;
}
function Ro(i, o, e, n, a) {
  return i === o ? true : i == null || o == null || !A$3(i) && !A$3(o) ? i !== i && o !== o : kc(i, o, e, n, Ro, a);
}
var Lc = 1;
var Zc = 2;
function _n(i, o, e, n) {
  var a = e.length, u = a, t = !n;
  if (i == null) return !u;
  for (i = Object(i); a--; ) {
    var d = e[a];
    if (t && d[2] ? d[1] !== i[d[0]] : !(d[0] in i)) return false;
  }
  for (; ++a < u; ) {
    d = e[a];
    var g = d[0], h = i[g], l = d[1];
    if (t && d[2]) {
      if (h === void 0 && !(g in i)) return false;
    } else {
      var r = new mi();
      if (n) var v = n(h, l, g, i, o, r);
      if (!(v === void 0 ? Ro(l, h, Lc | Zc, n, r) : v)) return false;
    }
  }
  return true;
}
function dd(i) {
  return i === i && !K$1(i);
}
function En(i) {
  for (var o = I$2(i), e = o.length; e--; ) {
    var n = o[e], a = i[n];
    o[e] = [n, a, dd(a)];
  }
  return o;
}
function gd(i, o) {
  return function(e) {
    return e == null ? false : e[i] === o && (o !== void 0 || i in Object(e));
  };
}
function sd(i) {
  var o = En(i);
  return o.length == 1 && o[0][2] ? gd(o[0][0], o[0][1]) : function(e) {
    return e === i || _n(e, i, o);
  };
}
function Sc(i, o) {
  return i != null && o in Object(i);
}
function hd(i, o, e) {
  o = Ki(o, i);
  for (var n = -1, a = o.length, u = false; ++n < a; ) {
    var t = Yi(o[n]);
    if (!(u = i != null && e(i, t))) break;
    i = i[t];
  }
  return u || ++n != a ? u : (a = i == null ? 0 : i.length, !!a && Ye(a) && Mi(t, a) && (C$4(i) || Ui(i)));
}
function zn(i, o) {
  return i != null && hd(i, o, Sc);
}
var Jc = 1;
var Cc = 2;
function rd(i, o) {
  return Bn(i) && dd(o) ? gd(Yi(i), o) : function(e) {
    var n = Tn(e, i);
    return n === void 0 && n === o ? zn(e, i) : Ro(o, n, Jc | Cc);
  };
}
function $n(i) {
  return function(o) {
    return o?.[i];
  };
}
function Xc(i) {
  return function(o) {
    return no(o, i);
  };
}
function ld(i) {
  return Bn(i) ? $n(Yi(i)) : Xc(i);
}
function J$1(i) {
  return typeof i == "function" ? i : i == null ? ui : typeof i == "object" ? C$4(i) ? rd(i[0], i[1]) : sd(i) : ld(i);
}
var Hc = "Expected a function";
function Bc(i) {
  var o = i == null ? 0 : i.length, e = J$1;
  return i = o ? R$1(i, function(n) {
    if (typeof n[1] != "function") throw new TypeError(Hc);
    return [e(n[0]), n[1]];
  }) : [], B(function(n) {
    for (var a = -1; ++a < o; ) {
      var u = i[a];
      if (ri(u[0], this, n)) return ri(u[1], this, n);
    }
  });
}
function vd(i, o, e) {
  var n = e.length;
  if (i == null) return !n;
  for (i = Object(i); n--; ) {
    var a = e[n], u = o[a], t = i[a];
    if (t === void 0 && !(a in i) || !u(t)) return false;
  }
  return true;
}
function Tc(i) {
  var o = I$2(i);
  return function(e) {
    return vd(e, i, o);
  };
}
var Dc = 1;
function Mc(i) {
  return Tc(ci(i, Dc));
}
function Qc(i, o) {
  return o == null || vd(i, o, I$2(o));
}
function xc(i, o, e, n) {
  for (var a = -1, u = i == null ? 0 : i.length; ++a < u; ) {
    var t = i[a];
    o(n, t, e(t), i);
  }
  return n;
}
function yd(i) {
  return function(o, e, n) {
    for (var a = -1, u = Object(o), t = n(o), d = t.length; d--; ) {
      var g = t[i ? d : ++a];
      if (e(u[g], g, u) === false) break;
    }
    return o;
  };
}
var In = yd();
function Xi(i, o) {
  return i && In(i, o, I$2);
}
function cd(i, o) {
  return function(e, n) {
    if (e == null) return e;
    if (!ti(e)) return i(e, n);
    for (var a = e.length, u = o ? a : -1, t = Object(e); (o ? u-- : ++u < a) && n(t[u], u, t) !== false; ) ;
    return e;
  };
}
var Ei = cd(Xi);
function Gc(i, o, e, n) {
  return Ei(i, function(a, u, t) {
    o(n, a, e(a), t);
  }), n;
}
function Xe(i, o) {
  return function(e, n) {
    var a = C$4(e) ? xc : Gc, u = o ? o() : {};
    return a(e, i, J$1(n), u);
  };
}
var Wc = Object.prototype;
var Nc = Wc.hasOwnProperty;
var Pc = Xe(function(i, o, e) {
  Nc.call(i, e) ? ++i[e] : Ji(i, e, 1);
});
function Fc(i, o) {
  var e = wo(i);
  return o == null ? e : zt$1(e, o);
}
var Rc = 8;
function qn(i, o, e) {
  o = e ? void 0 : o;
  var n = Qi(i, Rc, void 0, void 0, void 0, void 0, void 0, o);
  return n.placeholder = qn.placeholder, n;
}
qn.placeholder = {};
var Kc = 16;
function Un(i, o, e) {
  o = e ? void 0 : o;
  var n = Qi(i, Kc, void 0, void 0, void 0, void 0, void 0, o);
  return n.placeholder = Un.placeholder, n;
}
Un.placeholder = {};
var te$1 = function() {
  return $$2.Date.now();
};
var Ac = "Expected a function";
var Oc = Math.max;
var _c = Math.min;
function bd(i, o, e) {
  var n, a, u, t, d, g, h = 0, l = false, r = false, v = true;
  if (typeof i != "function") throw new TypeError(Ac);
  o = yi(o) || 0, K$1(e) && (l = !!e.leading, r = "maxWait" in e, u = r ? Oc(yi(e.maxWait) || 0, o) : u, v = "trailing" in e ? !!e.trailing : v);
  function y(L) {
    var D = n, X = a;
    return n = a = void 0, h = L, t = i.apply(X, D), t;
  }
  function c(L) {
    return h = L, d = setTimeout(p, o), l ? y(L) : t;
  }
  function b(L) {
    var D = L - g, X = L - h, P = o - D;
    return r ? _c(P, u - X) : P;
  }
  function w(L) {
    var D = L - g, X = L - h;
    return g === void 0 || D >= o || D < 0 || r && X >= u;
  }
  function p() {
    var L = te$1();
    if (w(L)) return j(L);
    d = setTimeout(p, b(L));
  }
  function j(L) {
    return d = void 0, v && n ? y(L) : (n = a = void 0, t);
  }
  function k() {
    d !== void 0 && clearTimeout(d), h = 0, n = g = a = d = void 0;
  }
  function f() {
    return d === void 0 ? t : j(te$1());
  }
  function Y() {
    var L = te$1(), D = w(L);
    if (n = arguments, a = this, g = L, D) {
      if (d === void 0) return c(g);
      if (r) return clearTimeout(d), d = setTimeout(p, o), y(g);
    }
    return d === void 0 && (d = setTimeout(p, o)), t;
  }
  return Y.cancel = k, Y.flush = f, Y;
}
function Ec(i, o) {
  return i == null || i !== i ? o : i;
}
var pd = Object.prototype;
var zc = pd.hasOwnProperty;
var $c = B(function(i, o) {
  i = Object(i);
  var e = -1, n = o.length, a = n > 2 ? o[2] : void 0;
  for (a && ii(o[0], o[1], a) && (n = 1); ++e < n; ) for (var u = o[e], t = di(u), d = -1, g = t.length; ++d < g; ) {
    var h = t[d], l = i[h];
    (l === void 0 || Li(l, pd[h]) && !zc.call(i, h)) && (i[h] = u[h]);
  }
  return i;
});
function ln(i, o, e) {
  (e !== void 0 && !Li(i[o], e) || e === void 0 && !(o in i)) && Ji(i, o, e);
}
function _$1(i) {
  return A$3(i) && ti(i);
}
function vn(i, o) {
  if (!(o === "constructor" && typeof i[o] == "function") && o != "__proto__") return i[o];
}
function wd(i) {
  return Ci(i, di(i));
}
function Ic(i, o, e, n, a, u, t) {
  var d = vn(i, e), g = vn(o, e), h = t.get(g);
  if (h) {
    ln(i, e, h);
    return;
  }
  var l = u ? u(d, g, e + "", i, o, t) : void 0, r = l === void 0;
  if (r) {
    var v = C$4(g), y = !v && Fi(g), c = !v && !y && Yo(g);
    l = g, v || y || c ? C$4(d) ? l = d : _$1(d) ? l = ai(d) : y ? (r = false, l = It$1(g, true)) : c ? (r = false, l = Vt(g, true)) : l = [] : Fo(g) || Ui(g) ? (l = d, Ui(d) ? l = wd(d) : (!K$1(d) || Di(d)) && (l = id(g))) : r = false;
  }
  r && (t.set(g, l), a(l, g, n, u, t), t.delete(g)), ln(i, e, l);
}
function He(i, o, e, n, a) {
  i !== o && In(o, function(u, t) {
    if (a || (a = new mi()), K$1(u)) Ic(i, o, t, e, He, n, a);
    else {
      var d = n ? n(vn(i, t), u, t + "", i, o, a) : void 0;
      d === void 0 && (d = u), ln(i, t, d);
    }
  }, di);
}
function jd(i, o, e, n, a, u) {
  return K$1(i) && K$1(o) && (u.set(o, i), He(i, o, void 0, jd, u), u.delete(o)), i;
}
var fd = mo(function(i, o, e, n) {
  He(i, o, e, n);
});
var qc = B(function(i) {
  return i.push(void 0, jd), ri(fd, void 0, i);
});
var Uc = "Expected a function";
function md(i, o, e) {
  if (typeof i != "function") throw new TypeError(Uc);
  return setTimeout(function() {
    i.apply(void 0, e);
  }, o);
}
var Vc = B(function(i, o) {
  return md(i, 1, o);
});
var ib = B(function(i, o, e) {
  return md(i, yi(o) || 0, e);
});
function Vn(i, o, e) {
  for (var n = -1, a = i == null ? 0 : i.length; ++n < a; ) if (e(o, i[n])) return true;
  return false;
}
var ob = 200;
function Ko(i, o, e, n) {
  var a = -1, u = fe, t = true, d = i.length, g = [], h = o.length;
  if (!d) return g;
  e && (o = R$1(o, li(e))), n ? (u = Vn, t = false) : o.length >= ob && (u = Go, t = false, o = new io(o));
  i: for (; ++a < d; ) {
    var l = i[a], r = e == null ? l : e(l);
    if (l = n || l !== 0 ? l : 0, t && r === r) {
      for (var v = h; v--; ) if (o[v] === r) continue i;
      g.push(l);
    } else u(o, r, n) || g.push(l);
  }
  return g;
}
var eb = B(function(i, o) {
  return _$1(i) ? Ko(i, q$1(o, 1, _$1, true)) : [];
});
function ji(i) {
  var o = i == null ? 0 : i.length;
  return o ? i[o - 1] : void 0;
}
var nb = B(function(i, o) {
  var e = ji(o);
  return _$1(e) && (e = void 0), _$1(i) ? Ko(i, q$1(o, 1, _$1, true), J$1(e)) : [];
});
var ab = B(function(i, o) {
  var e = ji(o);
  return _$1(e) && (e = void 0), _$1(i) ? Ko(i, q$1(o, 1, _$1, true), void 0, e) : [];
});
var ub = pe(function(i, o) {
  return i / o;
}, 1);
function tb(i, o, e) {
  var n = i == null ? 0 : i.length;
  return n ? (o = e || o === void 0 ? 1 : H$1(o), wi(i, o < 0 ? 0 : o, n)) : [];
}
function db(i, o, e) {
  var n = i == null ? 0 : i.length;
  return n ? (o = e || o === void 0 ? 1 : H$1(o), o = n - o, wi(i, 0, o < 0 ? 0 : o)) : [];
}
function Be(i, o, e, n) {
  for (var a = i.length, u = n ? a : -1; (n ? u-- : ++u < a) && o(i[u], u, i); ) ;
  return e ? wi(i, n ? 0 : u, n ? u + 1 : a) : wi(i, n ? u + 1 : 0, n ? a : u);
}
function gb(i, o) {
  return i && i.length ? Be(i, J$1(o), true, true) : [];
}
function sb(i, o) {
  return i && i.length ? Be(i, J$1(o), true) : [];
}
function Hi(i) {
  return typeof i == "function" ? i : ui;
}
function hb(i, o) {
  var e = C$4(i) ? vi : Ei;
  return e(i, Hi(o));
}
function rb(i, o) {
  for (var e = i == null ? 0 : i.length; e-- && o(i[e], e, i) !== false; ) ;
  return i;
}
var Yd = yd(true);
function ia(i, o) {
  return i && Yd(i, o, I$2);
}
var kd = cd(ia, true);
function lb(i, o) {
  var e = C$4(i) ? rb : kd;
  return e(i, Hi(o));
}
function vb(i, o, e) {
  i = Q(i), o = hi(o);
  var n = i.length;
  e = e === void 0 ? n : ao(H$1(e), 0, n);
  var a = e;
  return e -= o.length, e >= 0 && i.slice(e, a) == o;
}
function yb(i, o) {
  return R$1(o, function(e) {
    return [e, i[e]];
  });
}
function cb(i) {
  var o = -1, e = Array(i.size);
  return i.forEach(function(n) {
    e[++o] = [n, n];
  }), e;
}
var bb = "[object Map]";
var pb = "[object Set]";
function Ld(i) {
  return function(o) {
    var e = Si(o);
    return e == bb ? On(o) : e == pb ? cb(o) : yb(o, i(o));
  };
}
var wb = Ld(I$2);
var jb = Ld(di);
var fb = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
var mb = Wn(fb);
var Zd = /[&<>"']/g;
var Yb = RegExp(Zd.source);
function Sd(i) {
  return i = Q(i), i && Yb.test(i) ? i.replace(Zd, mb) : i;
}
var Jd = /[\\^$.*+?()[\]{}|]/g;
var kb = RegExp(Jd.source);
function Lb(i) {
  return i = Q(i), i && kb.test(i) ? i.replace(Jd, "\\$&") : i;
}
function Cd(i, o) {
  for (var e = -1, n = i == null ? 0 : i.length; ++e < n; ) if (!o(i[e], e, i)) return false;
  return true;
}
function Zb(i, o) {
  var e = true;
  return Ei(i, function(n, a, u) {
    return e = !!o(n, a, u), e;
  }), e;
}
function Sb(i, o, e) {
  var n = C$4(i) ? Cd : Zb;
  return e && ii(i, o, e) && (o = void 0), n(i, J$1(o));
}
var Jb = 4294967295;
function Xd(i) {
  return i ? ao(H$1(i), 0, Jb) : 0;
}
function Cb(i, o, e, n) {
  var a = i.length;
  for (e = H$1(e), e < 0 && (e = -e > a ? 0 : a + e), n = n === void 0 || n > a ? a : H$1(n), n < 0 && (n += a), n = e > n ? 0 : Xd(n); e < n; ) i[e++] = o;
  return i;
}
function Xb(i, o, e, n) {
  var a = i == null ? 0 : i.length;
  return a ? (e && typeof e != "number" && ii(i, o, e) && (e = 0, n = a), Cb(i, o, e, n)) : [];
}
function Hd(i, o) {
  var e = [];
  return Ei(i, function(n, a, u) {
    o(n, a, u) && e.push(n);
  }), e;
}
function Hb(i, o) {
  var e = C$4(i) ? _i : Hd;
  return e(i, J$1(o));
}
function Bd(i) {
  return function(o, e, n) {
    var a = Object(o);
    if (!ti(o)) {
      var u = J$1(e);
      o = I$2(o), e = function(d) {
        return u(a[d], d, a);
      };
    }
    var t = i(o, e, n);
    return t > -1 ? a[u ? o[t] : t] : void 0;
  };
}
var Bb = Math.max;
function Td(i, o, e) {
  var n = i == null ? 0 : i.length;
  if (!n) return -1;
  var a = e == null ? 0 : H$1(e);
  return a < 0 && (a = Bb(n + a, 0)), je(i, J$1(o), a);
}
var Tb = Bd(Td);
function Dd(i, o, e) {
  var n;
  return e(i, function(a, u, t) {
    if (o(a, u, t)) return n = u, false;
  }), n;
}
function Db(i, o) {
  return Dd(i, J$1(o), Xi);
}
var Mb = Math.max;
var Qb = Math.min;
function Md(i, o, e) {
  var n = i == null ? 0 : i.length;
  if (!n) return -1;
  var a = n - 1;
  return e !== void 0 && (a = H$1(e), a = e < 0 ? Mb(n + a, 0) : Qb(a, n - 1)), je(i, J$1(o), a, true);
}
var xb = Bd(Md);
function Gb(i, o) {
  return Dd(i, J$1(o), ia);
}
function Wb(i) {
  return i && i.length ? i[0] : void 0;
}
function Qd(i, o) {
  var e = -1, n = ti(i) ? Array(i.length) : [];
  return Ei(i, function(a, u, t) {
    n[++e] = o(a, u, t);
  }), n;
}
function Te(i, o) {
  var e = C$4(i) ? R$1 : Qd;
  return e(i, J$1(o));
}
function Nb(i, o) {
  return q$1(Te(i, o), 1);
}
var Pb = 1 / 0;
function Fb(i, o) {
  return q$1(Te(i, o), Pb);
}
function Rb(i, o, e) {
  return e = e === void 0 ? 1 : H$1(e), q$1(Te(i, o), e);
}
var Kb = 1 / 0;
function Ab(i) {
  var o = i == null ? 0 : i.length;
  return o ? q$1(i, Kb) : [];
}
function Ob(i, o) {
  var e = i == null ? 0 : i.length;
  return e ? (o = o === void 0 ? 1 : H$1(o), q$1(i, o)) : [];
}
var _b = 512;
function Eb(i) {
  return Qi(i, _b);
}
var zb = Nn("floor");
var $b = "Expected a function";
var Ib = 8;
var qb = 32;
var Ub = 128;
var Vb = 256;
function xd(i) {
  return Wi(function(o) {
    var e = o.length, n = e, a = bi.prototype.thru;
    for (i && o.reverse(); n--; ) {
      var u = o[n];
      if (typeof u != "function") throw new TypeError($b);
      if (a && !t && ue(u) == "wrapper") var t = new bi([], true);
    }
    for (n = t ? n : e; ++n < e; ) {
      u = o[n];
      var d = ue(u), g = d == "wrapper" ? Zn(u) : void 0;
      g && un(g[0]) && g[1] == (Ub | Ib | qb | Vb) && !g[4].length && g[9] == 1 ? t = t[ue(g[0])].apply(t, g[3]) : t = u.length == 1 && un(u) ? t[d]() : t.thru(u);
    }
    return function() {
      var h = arguments, l = h[0];
      if (t && h.length == 1 && C$4(l)) return t.plant(l).value();
      for (var r = 0, v = e ? o[r].apply(this, h) : l; ++r < e; ) v = o[r].call(this, v);
      return v;
    };
  });
}
var ip = xd();
var op = xd(true);
function ep(i, o) {
  return i == null ? i : In(i, Hi(o), di);
}
function np(i, o) {
  return i == null ? i : Yd(i, Hi(o), di);
}
function ap(i, o) {
  return i && Xi(i, Hi(o));
}
function up(i, o) {
  return i && ia(i, Hi(o));
}
function tp(i) {
  for (var o = -1, e = i == null ? 0 : i.length, n = {}; ++o < e; ) {
    var a = i[o];
    Ji(n, a[0], a[1]);
  }
  return n;
}
function De(i, o) {
  return _i(o, function(e) {
    return Di(i[e]);
  });
}
function dp(i) {
  return i == null ? [] : De(i, I$2(i));
}
function gp(i) {
  return i == null ? [] : De(i, di(i));
}
var sp = Object.prototype;
var hp = sp.hasOwnProperty;
var rp = Xe(function(i, o, e) {
  hp.call(i, e) ? i[e].push(o) : Ji(i, e, [o]);
});
function oa(i, o) {
  return i > o;
}
function Me(i) {
  return function(o, e) {
    return typeof o == "string" && typeof e == "string" || (o = yi(o), e = yi(e)), i(o, e);
  };
}
var lp = Me(oa);
var vp = Me(function(i, o) {
  return i >= o;
});
var yp = Object.prototype;
var cp = yp.hasOwnProperty;
function bp(i, o) {
  return i != null && cp.call(i, o);
}
function pp(i, o) {
  return i != null && hd(i, o, bp);
}
var wp = Math.max;
var jp = Math.min;
function fp(i, o, e) {
  return i >= jp(o, e) && i < wp(o, e);
}
function mp(i, o, e) {
  return o = Ti(o), e === void 0 ? (e = o, o = 0) : e = Ti(e), i = yi(i), fp(i, o, e);
}
var Yp = "[object String]";
function Qe(i) {
  return typeof i == "string" || !C$4(i) && A$3(i) && oi(i) == Yp;
}
function ea(i, o) {
  return R$1(o, function(e) {
    return i[e];
  });
}
function Zo(i) {
  return i == null ? [] : ea(i, I$2(i));
}
var kp = Math.max;
function Lp(i, o, e, n) {
  i = ti(i) ? i : Zo(i), e = e && !n ? H$1(e) : 0;
  var a = i.length;
  return e < 0 && (e = kp(a + e, 0)), Qe(i) ? e <= a && i.indexOf(o, e) > -1 : !!a && jo(i, o, e) > -1;
}
var Zp = Math.max;
function Sp(i, o, e) {
  var n = i == null ? 0 : i.length;
  if (!n) return -1;
  var a = e == null ? 0 : H$1(e);
  return a < 0 && (a = Zp(n + a, 0)), jo(i, o, a);
}
function Jp(i) {
  var o = i == null ? 0 : i.length;
  return o ? wi(i, 0, -1) : [];
}
var Cp = Math.min;
function na(i, o, e) {
  for (var n = e ? Vn : fe, a = i[0].length, u = i.length, t = u, d = Array(u), g = 1 / 0, h = []; t--; ) {
    var l = i[t];
    t && o && (l = R$1(l, li(o))), g = Cp(l.length, g), d[t] = !e && (o || a >= 120 && l.length >= 120) ? new io(t && l) : void 0;
  }
  l = i[0];
  var r = -1, v = d[0];
  i: for (; ++r < a && h.length < g; ) {
    var y = l[r], c = o ? o(y) : y;
    if (y = e || y !== 0 ? y : 0, !(v ? Go(v, c) : n(h, c, e))) {
      for (t = u; --t; ) {
        var b = d[t];
        if (!(b ? Go(b, c) : n(i[t], c, e))) continue i;
      }
      v && v.push(c), h.push(y);
    }
  }
  return h;
}
function aa(i) {
  return _$1(i) ? i : [];
}
var Xp = B(function(i) {
  var o = R$1(i, aa);
  return o.length && o[0] === i[0] ? na(o) : [];
});
var Hp = B(function(i) {
  var o = ji(i), e = R$1(i, aa);
  return o === ji(e) ? o = void 0 : e.pop(), e.length && e[0] === i[0] ? na(e, J$1(o)) : [];
});
var Bp = B(function(i) {
  var o = ji(i), e = R$1(i, aa);
  return o = typeof o == "function" ? o : void 0, o && e.pop(), e.length && e[0] === i[0] ? na(e, void 0, o) : [];
});
function Tp(i, o, e, n) {
  return Xi(i, function(a, u, t) {
    o(n, e(a), u, t);
  }), n;
}
function Gd(i, o) {
  return function(e, n) {
    return Tp(e, i, o(n), {});
  };
}
var Dp = Object.prototype;
var Mp = Dp.toString;
var Qp = Gd(function(i, o, e) {
  o != null && typeof o.toString != "function" && (o = Mp.call(o)), i[o] = e;
}, Sn(ui));
var Wd = Object.prototype;
var xp = Wd.hasOwnProperty;
var Gp = Wd.toString;
var Wp = Gd(function(i, o, e) {
  o != null && typeof o.toString != "function" && (o = Gp.call(o)), xp.call(i, o) ? i[o].push(e) : i[o] = [e];
}, J$1);
function Nd(i, o) {
  return o.length < 2 ? i : no(i, wi(o, 0, -1));
}
function Ao(i, o, e) {
  o = Ki(o, i), i = Nd(i, o);
  var n = i == null ? i : i[Yi(ji(o))];
  return n == null ? void 0 : ri(n, i, e);
}
var Np = B(Ao);
var Pp = B(function(i, o, e) {
  var n = -1, a = typeof o == "function", u = ti(i) ? Array(i.length) : [];
  return Ei(i, function(t) {
    u[++n] = a ? ri(o, t, e) : Ao(t, o, e);
  }), u;
});
var Fp = "[object ArrayBuffer]";
function Rp(i) {
  return A$3(i) && oi(i) == Fp;
}
var ku = pi && pi.isArrayBuffer;
var Kp = ku ? li(ku) : Rp;
var Ap = "[object Boolean]";
function Op(i) {
  return i === true || i === false || A$3(i) && oi(i) == Ap;
}
var _p = "[object Date]";
function Ep(i) {
  return A$3(i) && oi(i) == _p;
}
var Lu = pi && pi.isDate;
var zp = Lu ? li(Lu) : Ep;
function $p(i) {
  return A$3(i) && i.nodeType === 1 && !Fo(i);
}
var Ip = "[object Map]";
var qp = "[object Set]";
var Up = Object.prototype;
var Vp = Up.hasOwnProperty;
function iw(i) {
  if (i == null) return true;
  if (ti(i) && (C$4(i) || typeof i == "string" || typeof i.splice == "function" || Fi(i) || Yo(i) || Ui(i))) return !i.length;
  var o = Si(i);
  if (o == Ip || o == qp) return !i.size;
  if (Po(i)) return !Hn(i).length;
  for (var e in i) if (Vp.call(i, e)) return false;
  return true;
}
function ow(i, o) {
  return Ro(i, o);
}
function ew(i, o, e) {
  e = typeof e == "function" ? e : void 0;
  var n = e ? e(i, o) : void 0;
  return n === void 0 ? Ro(i, o, void 0, e) : !!n;
}
var nw = $$2.isFinite;
function aw(i) {
  return typeof i == "number" && nw(i);
}
function Pd(i) {
  return typeof i == "number" && i == H$1(i);
}
function uw(i, o) {
  return i === o || _n(i, o, En(o));
}
function tw(i, o, e) {
  return e = typeof e == "function" ? e : void 0, _n(i, o, En(o), e);
}
var dw = "[object Number]";
function Fd(i) {
  return typeof i == "number" || A$3(i) && oi(i) == dw;
}
function gw(i) {
  return Fd(i) && i != +i;
}
var sw = ae ? Di : Xn;
var hw = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.";
function rw(i) {
  if (sw(i)) throw new Error(hw);
  return et(i);
}
function lw(i) {
  return i == null;
}
function vw(i) {
  return i === null;
}
var yw = "[object RegExp]";
function cw(i) {
  return A$3(i) && oi(i) == yw;
}
var Zu = pi && pi.isRegExp;
var ua = Zu ? li(Zu) : cw;
var Su = 9007199254740991;
function bw(i) {
  return Pd(i) && i >= -Su && i <= Su;
}
function pw(i) {
  return i === void 0;
}
var ww = "[object WeakMap]";
function jw(i) {
  return A$3(i) && Si(i) == ww;
}
var fw = "[object WeakSet]";
function mw(i) {
  return A$3(i) && oi(i) == fw;
}
var Yw = 1;
function kw(i) {
  return J$1(typeof i == "function" ? i : ci(i, Yw));
}
var Lw = Array.prototype;
var Zw = Lw.join;
function Sw(i, o) {
  return i == null ? "" : Zw.call(i, o);
}
var Jw = Lo(function(i, o, e) {
  return i + (e ? "-" : "") + o.toLowerCase();
});
var Cw = Xe(function(i, o, e) {
  Ji(i, e, o);
});
function Xw(i, o, e) {
  for (var n = e + 1; n--; ) if (i[n] === o) return n;
  return n;
}
var Hw = Math.max;
var Bw = Math.min;
function Tw(i, o, e) {
  var n = i == null ? 0 : i.length;
  if (!n) return -1;
  var a = n;
  return e !== void 0 && (a = H$1(e), a = a < 0 ? Hw(n + a, 0) : Bw(a, n - 1)), o === o ? Xw(i, o, a) : je(i, st, a, true);
}
var Dw = Lo(function(i, o, e) {
  return i + (e ? " " : "") + o.toLowerCase();
});
var Mw = Ht$1("toLowerCase");
function ta(i, o) {
  return i < o;
}
var Qw = Me(ta);
var xw = Me(function(i, o) {
  return i <= o;
});
function Gw(i, o) {
  var e = {};
  return o = J$1(o), Xi(i, function(n, a, u) {
    Ji(e, o(n, a, u), n);
  }), e;
}
function Ww(i, o) {
  var e = {};
  return o = J$1(o), Xi(i, function(n, a, u) {
    Ji(e, a, o(n, a, u));
  }), e;
}
var Nw = 1;
function Pw(i) {
  return sd(ci(i, Nw));
}
var Fw = 1;
function Rw(i, o) {
  return rd(i, ci(o, Fw));
}
function xe(i, o, e) {
  for (var n = -1, a = i.length; ++n < a; ) {
    var u = i[n], t = o(u);
    if (t != null && (d === void 0 ? t === t && !si(t) : e(t, d))) var d = t, g = u;
  }
  return g;
}
function Kw(i) {
  return i && i.length ? xe(i, ui, oa) : void 0;
}
function Aw(i, o) {
  return i && i.length ? xe(i, J$1(o), oa) : void 0;
}
function da(i, o) {
  for (var e, n = -1, a = i.length; ++n < a; ) {
    var u = o(i[n]);
    u !== void 0 && (e = e === void 0 ? u : e + u);
  }
  return e;
}
var Ow = NaN;
function Rd(i, o) {
  var e = i == null ? 0 : i.length;
  return e ? da(i, o) / e : Ow;
}
function _w(i) {
  return Rd(i, ui);
}
function Ew(i, o) {
  return Rd(i, J$1(o));
}
var zw = mo(function(i, o, e) {
  He(i, o, e);
});
var $w = B(function(i, o) {
  return function(e) {
    return Ao(e, i, o);
  };
});
var Iw = B(function(i, o) {
  return function(e) {
    return Ao(i, e, o);
  };
});
function qw(i) {
  return i && i.length ? xe(i, ui, ta) : void 0;
}
function Uw(i, o) {
  return i && i.length ? xe(i, J$1(o), ta) : void 0;
}
function Vw(i, o, e) {
  var n = I$2(o), a = De(o, n), u = !(K$1(e) && "chain" in e) || !!e.chain, t = Di(i);
  return vi(a, function(d) {
    var g = o[d];
    i[d] = g, t && (i.prototype[d] = function() {
      var h = this.__chain__;
      if (u || h) {
        var l = i(this.__wrapped__), r = l.__actions__ = ai(this.__actions__);
        return r.push({ func: g, args: arguments, thisArg: i }), l.__chain__ = h, l;
      }
      return g.apply(i, Ai([this.value()], arguments));
    });
  }), i;
}
var ij = pe(function(i, o) {
  return i * o;
}, 1);
var oj = "Expected a function";
function Ge(i) {
  if (typeof i != "function") throw new TypeError(oj);
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
function ej(i) {
  for (var o, e = []; !(o = i.next()).done; ) e.push(o.value);
  return e;
}
var nj = "[object Map]";
var aj = "[object Set]";
var ze = U ? U.iterator : void 0;
function Kd(i) {
  if (!i) return [];
  if (ti(i)) return Qe(i) ? ki(i) : ai(i);
  if (ze && i[ze]) return ej(i[ze]());
  var o = Si(i), e = o == nj ? On : o == aj ? Ce : Zo;
  return e(i);
}
function uj() {
  this.__values__ === void 0 && (this.__values__ = Kd(this.value()));
  var i = this.__index__ >= this.__values__.length, o = i ? void 0 : this.__values__[this.__index__++];
  return { done: i, value: o };
}
function Ad(i, o) {
  var e = i.length;
  if (e) return o += o < 0 ? e : 0, Mi(o, e) ? i[o] : void 0;
}
function tj(i, o) {
  return i && i.length ? Ad(i, H$1(o)) : void 0;
}
function dj(i) {
  return i = H$1(i), B(function(o) {
    return Ad(o, i);
  });
}
var gj = Object.prototype;
var sj = gj.hasOwnProperty;
function ga(i, o) {
  o = Ki(o, i);
  var e = -1, n = o.length;
  if (!n) return true;
  for (; ++e < n; ) {
    var a = Yi(o[e]);
    if (a === "__proto__" && !sj.call(i, "__proto__") || (a === "constructor" || a === "prototype") && e < n - 1) return false;
  }
  var u = Nd(i, o);
  return u == null || delete u[Yi(ji(o))];
}
function hj(i) {
  return Fo(i) ? void 0 : i;
}
var rj = 1;
var lj = 2;
var vj = 4;
var yj = Wi(function(i, o) {
  var e = {};
  if (i == null) return e;
  var n = false;
  o = R$1(o, function(u) {
    return u = Ki(u, i), n || (n = u.length > 1), u;
  }), Ci(i, Rn(i), e), n && (e = ci(e, rj | lj | vj, hj));
  for (var a = o.length; a--; ) ga(e, o[a]);
  return e;
});
function Oo(i, o, e, n) {
  if (!K$1(i)) return i;
  o = Ki(o, i);
  for (var a = -1, u = o.length, t = u - 1, d = i; d != null && ++a < u; ) {
    var g = Yi(o[a]), h = e;
    if (g === "__proto__" || g === "constructor" || g === "prototype") return i;
    if (a != t) {
      var l = d[g];
      h = n ? n(l, g, d) : void 0, h === void 0 && (h = K$1(l) ? l : Mi(o[a + 1]) ? [] : {});
    }
    No(d, g, h), d = d[g];
  }
  return i;
}
function Od(i, o, e) {
  for (var n = -1, a = o.length, u = {}; ++n < a; ) {
    var t = o[n], d = no(i, t);
    e(d, t) && Oo(u, Ki(t, i), d);
  }
  return u;
}
function _d(i, o) {
  if (i == null) return {};
  var e = R$1(Rn(i), function(n) {
    return [n];
  });
  return o = J$1(o), Od(i, e, function(n, a) {
    return o(n, a[0]);
  });
}
function cj(i, o) {
  return _d(i, Ge(J$1(o)));
}
function bj(i) {
  return kt$1(2, i);
}
function pj(i, o) {
  var e = i.length;
  for (i.sort(o); e--; ) i[e] = i[e].value;
  return i;
}
function Ed(i, o) {
  if (i !== o) {
    var e = i !== void 0, n = i === null, a = i === i, u = si(i), t = o !== void 0, d = o === null, g = o === o, h = si(o);
    if (!d && !h && !u && i > o || u && t && g && !d && !h || n && t && g || !e && g || !a) return 1;
    if (!n && !u && !h && i < o || h && e && a && !n && !u || d && e && a || !t && a || !g) return -1;
  }
  return 0;
}
function wj(i, o, e) {
  for (var n = -1, a = i.criteria, u = o.criteria, t = a.length, d = e.length; ++n < t; ) {
    var g = Ed(a[n], u[n]);
    if (g) {
      if (n >= d) return g;
      var h = e[n];
      return g * (h == "desc" ? -1 : 1);
    }
  }
  return i.index - o.index;
}
function zd(i, o, e) {
  o.length ? o = R$1(o, function(u) {
    return C$4(u) ? function(t) {
      return no(t, u.length === 1 ? u[0] : u);
    } : u;
  }) : o = [ui];
  var n = -1;
  o = R$1(o, li(J$1));
  var a = Qd(i, function(u, t, d) {
    var g = R$1(o, function(h) {
      return h(u);
    });
    return { criteria: g, index: ++n, value: u };
  });
  return pj(a, function(u, t) {
    return wj(u, t, e);
  });
}
function jj(i, o, e, n) {
  return i == null ? [] : (C$4(o) || (o = o == null ? [] : [o]), e = n ? void 0 : e, C$4(e) || (e = e == null ? [] : [e]), zd(i, o, e));
}
function sa(i) {
  return Wi(function(o) {
    return o = R$1(o, li(J$1)), B(function(e) {
      var n = this;
      return i(o, function(a) {
        return ri(a, n, e);
      });
    });
  });
}
var fj = sa(R$1);
var mj = B;
var Yj = Math.min;
var kj = mj(function(i, o) {
  o = o.length == 1 && C$4(o[0]) ? R$1(o[0], li(J$1)) : R$1(q$1(o, 1), li(J$1));
  var e = o.length;
  return B(function(n) {
    for (var a = -1, u = Yj(n.length, e); ++a < u; ) n[a] = o[a].call(this, n[a]);
    return ri(i, this, n);
  });
});
var Lj = sa(Cd);
var Zj = sa(An);
var Sj = 9007199254740991;
var Jj = Math.floor;
function yn(i, o) {
  var e = "";
  if (!i || o < 1 || o > Sj) return e;
  do
    o % 2 && (e += i), o = Jj(o / 2), o && (i += i);
  while (o);
  return e;
}
var Cj = $n("length");
var $d = "\\ud800-\\udfff";
var Xj = "\\u0300-\\u036f";
var Hj = "\\ufe20-\\ufe2f";
var Bj = "\\u20d0-\\u20ff";
var Tj = Xj + Hj + Bj;
var Dj = "\\ufe0e\\ufe0f";
var Mj = "[" + $d + "]";
var cn = "[" + Tj + "]";
var bn = "\\ud83c[\\udffb-\\udfff]";
var Qj = "(?:" + cn + "|" + bn + ")";
var Id = "[^" + $d + "]";
var qd = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var Ud = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var xj = "\\u200d";
var Vd = Qj + "?";
var ig = "[" + Dj + "]?";
var Gj = "(?:" + xj + "(?:" + [Id, qd, Ud].join("|") + ")" + ig + Vd + ")*";
var Wj = ig + Vd + Gj;
var Nj = "(?:" + [Id + cn + "?", cn, qd, Ud, Mj].join("|") + ")";
var Ju = RegExp(bn + "(?=" + bn + ")|" + Nj + Wj, "g");
function Pj(i) {
  for (var o = Ju.lastIndex = 0; Ju.test(i); ) ++o;
  return o;
}
function So(i) {
  return ko(i) ? Pj(i) : Cj(i);
}
var Fj = Math.ceil;
function ve(i, o) {
  o = o === void 0 ? " " : hi(o);
  var e = o.length;
  if (e < 2) return e ? yn(o, i) : o;
  var n = yn(o, Fj(i / So(o)));
  return ko(o) ? Oi(ki(n), 0, i).join("") : n.slice(0, i);
}
var Rj = Math.ceil;
var Kj = Math.floor;
function Aj(i, o, e) {
  i = Q(i), o = H$1(o);
  var n = o ? So(i) : 0;
  if (!o || n >= o) return i;
  var a = (o - n) / 2;
  return ve(Kj(a), e) + i + ve(Rj(a), e);
}
function Oj(i, o, e) {
  i = Q(i), o = H$1(o);
  var n = o ? So(i) : 0;
  return o && n < o ? i + ve(o - n, e) : i;
}
function _j(i, o, e) {
  i = Q(i), o = H$1(o);
  var n = o ? So(i) : 0;
  return o && n < o ? ve(o - n, e) + i : i;
}
var Ej = /^\s+/;
var zj = $$2.parseInt;
function $j(i, o, e) {
  return e || o == null ? o = 0 : o && (o = +o), zj(Q(i).replace(Ej, ""), o || 0);
}
var Ij = 32;
var We = B(function(i, o) {
  var e = Pi(o, fo(We));
  return Qi(i, Ij, void 0, o, e);
});
We.placeholder = {};
var qj = 64;
var ha = B(function(i, o) {
  var e = Pi(o, fo(ha));
  return Qi(i, qj, void 0, o, e);
});
ha.placeholder = {};
var Uj = Xe(function(i, o, e) {
  i[e ? 0 : 1].push(o);
}, function() {
  return [[], []];
});
function Vj(i, o) {
  return Od(i, o, function(e, n) {
    return zn(i, n);
  });
}
var of = Wi(function(i, o) {
  return i == null ? {} : Vj(i, o);
});
function ef(i) {
  for (var o, e = this; e instanceof we; ) {
    var n = tt(e);
    n.__index__ = 0, n.__values__ = void 0, o ? a.__wrapped__ = n : o = n;
    var a = n;
    e = e.__wrapped__;
  }
  return a.__wrapped__ = i, o;
}
function nf(i) {
  return function(o) {
    return i == null ? void 0 : no(i, o);
  };
}
function af(i, o, e, n) {
  for (var a = e - 1, u = i.length; ++a < u; ) if (n(i[a], o)) return a;
  return -1;
}
var uf = Array.prototype;
var Cu = uf.splice;
function ra(i, o, e, n) {
  var a = n ? af : jo, u = -1, t = o.length, d = i;
  for (i === o && (o = ai(o)), e && (d = R$1(i, li(e))); ++u < t; ) for (var g = 0, h = o[u], l = e ? e(h) : h; (g = a(d, l, g, n)) > -1; ) d !== i && Cu.call(d, g, 1), Cu.call(i, g, 1);
  return i;
}
function og(i, o) {
  return i && i.length && o && o.length ? ra(i, o) : i;
}
var tf = B(og);
function df(i, o, e) {
  return i && i.length && o && o.length ? ra(i, o, J$1(e)) : i;
}
function gf(i, o, e) {
  return i && i.length && o && o.length ? ra(i, o, void 0, e) : i;
}
var sf = Array.prototype;
var hf = sf.splice;
function eg(i, o) {
  for (var e = i ? o.length : 0, n = e - 1; e--; ) {
    var a = o[e];
    if (e == n || a !== u) {
      var u = a;
      Mi(a) ? hf.call(i, a, 1) : ga(i, a);
    }
  }
  return i;
}
var rf = Wi(function(i, o) {
  var e = i == null ? 0 : i.length, n = Dn(i, o);
  return eg(i, R$1(o, function(a) {
    return Mi(a, e) ? +a : a;
  }).sort(Ed)), n;
});
var lf = Math.floor;
var vf = Math.random;
function la(i, o) {
  return i + lf(vf() * (o - i + 1));
}
var yf = parseFloat;
var cf = Math.min;
var bf = Math.random;
function pf(i, o, e) {
  if (e && typeof e != "boolean" && ii(i, o, e) && (o = e = void 0), e === void 0 && (typeof o == "boolean" ? (e = o, o = void 0) : typeof i == "boolean" && (e = i, i = void 0)), i === void 0 && o === void 0 ? (i = 0, o = 1) : (i = Ti(i), o === void 0 ? (o = i, i = 0) : o = Ti(o)), i > o) {
    var n = i;
    i = o, o = n;
  }
  if (e || i % 1 || o % 1) {
    var a = bf();
    return cf(i + a * (o - i + yf("1e-" + ((a + "").length - 1))), o);
  }
  return la(i, o);
}
var wf = Math.ceil;
var jf = Math.max;
function ff(i, o, e, n) {
  for (var a = -1, u = jf(wf((o - i) / (e || 1)), 0), t = Array(u); u--; ) t[n ? u : ++a] = i, i += e;
  return t;
}
function ng(i) {
  return function(o, e, n) {
    return n && typeof n != "number" && ii(o, e, n) && (e = n = void 0), o = Ti(o), e === void 0 ? (e = o, o = 0) : e = Ti(e), n = n === void 0 ? o < e ? 1 : -1 : Ti(n), ff(o, e, n, i);
  };
}
var mf = ng();
var Yf = ng(true);
var kf = 256;
var Lf = Wi(function(i, o) {
  return Qi(i, kf, void 0, void 0, void 0, o);
});
function ag(i, o, e, n, a) {
  return a(i, function(u, t, d) {
    e = n ? (n = false, u) : o(e, u, t, d);
  }), e;
}
function Zf(i, o, e) {
  var n = C$4(i) ? Gn : ag, a = arguments.length < 3;
  return n(i, J$1(o), e, a, Ei);
}
function Sf(i, o, e, n) {
  var a = i == null ? 0 : i.length;
  for (n && a && (e = i[--a]); a--; ) e = o(e, i[a], a, i);
  return e;
}
function Jf(i, o, e) {
  var n = C$4(i) ? Sf : ag, a = arguments.length < 3;
  return n(i, J$1(o), e, a, kd);
}
function Cf(i, o) {
  var e = C$4(i) ? _i : Hd;
  return e(i, Ge(J$1(o)));
}
function Xf(i, o) {
  var e = [];
  if (!(i && i.length)) return e;
  var n = -1, a = [], u = i.length;
  for (o = J$1(o); ++n < u; ) {
    var t = i[n];
    o(t, n, i) && (e.push(t), a.push(n));
  }
  return eg(i, a), e;
}
function Hf(i, o, e) {
  return (e ? ii(i, o, e) : o === void 0) ? o = 1 : o = H$1(o), yn(Q(i), o);
}
function Bf() {
  var i = arguments, o = Q(i[0]);
  return i.length < 3 ? o : o.replace(i[1], i[2]);
}
var Tf = "Expected a function";
function Df(i, o) {
  if (typeof i != "function") throw new TypeError(Tf);
  return o = o === void 0 ? o : H$1(o), B(i, o);
}
function Mf(i, o, e) {
  o = Ki(o, i);
  var n = -1, a = o.length;
  for (a || (a = 1, i = void 0); ++n < a; ) {
    var u = i?.[Yi(o[n])];
    u === void 0 && (n = a, u = e), i = Di(u) ? u.call(i) : u;
  }
  return i;
}
var Qf = Array.prototype;
var xf = Qf.reverse;
function pn(i) {
  return i == null ? i : xf.call(i);
}
var Gf = Nn("round");
function ug(i) {
  var o = i.length;
  return o ? i[la(0, o - 1)] : void 0;
}
function Wf(i) {
  return ug(Zo(i));
}
function Nf(i) {
  var o = C$4(i) ? ug : Wf;
  return o(i);
}
function Ne(i, o) {
  var e = -1, n = i.length, a = n - 1;
  for (o = o === void 0 ? n : o; ++e < o; ) {
    var u = la(e, a), t = i[u];
    i[u] = i[e], i[e] = t;
  }
  return i.length = o, i;
}
function Pf(i, o) {
  return Ne(ai(i), ao(o, 0, i.length));
}
function Ff(i, o) {
  var e = Zo(i);
  return Ne(e, ao(o, 0, e.length));
}
function Rf(i, o, e) {
  (e ? ii(i, o, e) : o === void 0) ? o = 1 : o = H$1(o);
  var n = C$4(i) ? Pf : Ff;
  return n(i, o);
}
function Kf(i, o, e) {
  return i == null ? i : Oo(i, o, e);
}
function Af(i, o, e, n) {
  return n = typeof n == "function" ? n : void 0, i == null ? i : Oo(i, o, e, n);
}
function Of(i) {
  return Ne(ai(i));
}
function _f(i) {
  return Ne(Zo(i));
}
function Ef(i) {
  var o = C$4(i) ? Of : _f;
  return o(i);
}
var zf = "[object Map]";
var $f = "[object Set]";
function If(i) {
  if (i == null) return 0;
  if (ti(i)) return Qe(i) ? So(i) : i.length;
  var o = Si(i);
  return o == zf || o == $f ? i.size : Hn(i).length;
}
function qf(i, o, e) {
  var n = i == null ? 0 : i.length;
  return n ? (e && typeof e != "number" && ii(i, o, e) ? (o = 0, e = n) : (o = o == null ? 0 : H$1(o), e = e === void 0 ? n : H$1(e)), wi(i, o, e)) : [];
}
var Uf = Lo(function(i, o, e) {
  return i + (e ? "_" : "") + o.toLowerCase();
});
function Vf(i, o) {
  var e;
  return Ei(i, function(n, a, u) {
    return e = o(n, a, u), !e;
  }), !!e;
}
function im(i, o, e) {
  var n = C$4(i) ? An : Vf;
  return e && ii(i, o, e) && (o = void 0), n(i, J$1(o));
}
var om = B(function(i, o) {
  if (i == null) return [];
  var e = o.length;
  return e > 1 && ii(i, o[0], o[1]) ? o = [] : e > 2 && ii(o[0], o[1], o[2]) && (o = [o[0]]), zd(i, q$1(o, 1), []);
});
var em = 4294967295;
var nm = em - 1;
var am = Math.floor;
var um = Math.min;
function va(i, o, e, n) {
  var a = 0, u = i == null ? 0 : i.length;
  if (u === 0) return 0;
  o = e(o);
  for (var t = o !== o, d = o === null, g = si(o), h = o === void 0; a < u; ) {
    var l = am((a + u) / 2), r = e(i[l]), v = r !== void 0, y = r === null, c = r === r, b = si(r);
    if (t) var w = n || c;
    else h ? w = c && (n || v) : d ? w = c && v && (n || !y) : g ? w = c && v && !y && (n || !b) : y || b ? w = false : w = n ? r <= o : r < o;
    w ? a = l + 1 : u = l;
  }
  return um(u, nm);
}
var tm = 4294967295;
var dm = tm >>> 1;
function Pe(i, o, e) {
  var n = 0, a = i == null ? n : i.length;
  if (typeof o == "number" && o === o && a <= dm) {
    for (; n < a; ) {
      var u = n + a >>> 1, t = i[u];
      t !== null && !si(t) && (e ? t <= o : t < o) ? n = u + 1 : a = u;
    }
    return a;
  }
  return va(i, o, ui, e);
}
function gm(i, o) {
  return Pe(i, o);
}
function sm(i, o, e) {
  return va(i, o, J$1(e));
}
function hm(i, o) {
  var e = i == null ? 0 : i.length;
  if (e) {
    var n = Pe(i, o);
    if (n < e && Li(i[n], o)) return n;
  }
  return -1;
}
function rm(i, o) {
  return Pe(i, o, true);
}
function lm(i, o, e) {
  return va(i, o, J$1(e), true);
}
function vm(i, o) {
  var e = i == null ? 0 : i.length;
  if (e) {
    var n = Pe(i, o, true) - 1;
    if (Li(i[n], o)) return n;
  }
  return -1;
}
function tg(i, o) {
  for (var e = -1, n = i.length, a = 0, u = []; ++e < n; ) {
    var t = i[e], d = o ? o(t) : t;
    if (!e || !Li(d, g)) {
      var g = d;
      u[a++] = t === 0 ? 0 : t;
    }
  }
  return u;
}
function ym(i) {
  return i && i.length ? tg(i) : [];
}
function cm(i, o) {
  return i && i.length ? tg(i, J$1(o)) : [];
}
var bm = 4294967295;
function pm(i, o, e) {
  return e && typeof e != "number" && ii(i, o, e) && (o = e = void 0), e = e === void 0 ? bm : e >>> 0, e ? (i = Q(i), i && (typeof o == "string" || o != null && !ua(o)) && (o = hi(o), !o && ko(i)) ? Oi(ki(i), 0, e) : i.split(o, e)) : [];
}
var wm = "Expected a function";
var jm = Math.max;
function fm(i, o) {
  if (typeof i != "function") throw new TypeError(wm);
  return o = o == null ? 0 : jm(H$1(o), 0), B(function(e) {
    var n = e[o], a = Oi(e, 0, o);
    return n && Ai(a, n), ri(i, this, a);
  });
}
var mm = Lo(function(i, o, e) {
  return i + (e ? " " : "") + xn(o);
});
function Ym(i, o, e) {
  return i = Q(i), e = e == null ? 0 : ao(H$1(e), 0, i.length), o = hi(o), i.slice(e, e + o.length) == o;
}
function km() {
  return {};
}
function Lm() {
  return "";
}
function Zm() {
  return true;
}
var Sm = pe(function(i, o) {
  return i - o;
}, 0);
function Jm(i) {
  return i && i.length ? da(i, ui) : 0;
}
function Cm(i, o) {
  return i && i.length ? da(i, J$1(o)) : 0;
}
function Xm(i) {
  var o = i == null ? 0 : i.length;
  return o ? wi(i, 1, o) : [];
}
function Hm(i, o, e) {
  return i && i.length ? (o = e || o === void 0 ? 1 : H$1(o), wi(i, 0, o < 0 ? 0 : o)) : [];
}
function Bm(i, o, e) {
  var n = i == null ? 0 : i.length;
  return n ? (o = e || o === void 0 ? 1 : H$1(o), o = n - o, wi(i, o < 0 ? 0 : o, n)) : [];
}
function Tm(i, o) {
  return i && i.length ? Be(i, J$1(o), false, true) : [];
}
function Dm(i, o) {
  return i && i.length ? Be(i, J$1(o)) : [];
}
function Mm(i, o) {
  return o(i), i;
}
var dg = Object.prototype;
var Qm = dg.hasOwnProperty;
function Xu(i, o, e, n) {
  return i === void 0 || Li(i, dg[e]) && !Qm.call(n, e) ? o : i;
}
var xm = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" };
function Gm(i) {
  return "\\" + xm[i];
}
var gg = /<%=([\s\S]+?)%>/g;
var Wm = /<%-([\s\S]+?)%>/g;
var Nm = /<%([\s\S]+?)%>/g;
var wn = { escape: Wm, evaluate: Nm, interpolate: gg, variable: "", imports: { _: { escape: Sd } } };
var Pm = "Invalid `variable` option passed into `_.template`";
var Fm = "Invalid `imports` option passed into `_.template`";
var Rm = /\b__p \+= '';/g;
var Km = /\b(__p \+=) '' \+/g;
var Am = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
var Hu = /[()=,{}\[\]\/\s]/;
var Om = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
var ee = /($^)/;
var _m = /['\n\r\u2028\u2029\\]/g;
var Em = Object.prototype;
var Bu = Em.hasOwnProperty;
function zm(i, o, e) {
  var n = wn.imports._.templateSettings || wn;
  e && ii(i, o, e) && (o = void 0), i = Q(i), o = tn({}, o, n, Xu);
  var a = tn({}, o.imports, n.imports, Xu), u = I$2(a), t = ea(a, u);
  vi(u, function(w) {
    if (Hu.test(w)) throw new Error(Fm);
  });
  var d, g, h = 0, l = o.interpolate || ee, r = "__p += '", v = RegExp((o.escape || ee).source + "|" + l.source + "|" + (l === gg ? Om : ee).source + "|" + (o.evaluate || ee).source + "|$", "g"), y = Bu.call(o, "sourceURL") ? "//# sourceURL=" + (o.sourceURL + "").replace(/\s/g, " ") + `
` : "";
  i.replace(v, function(w, p, j, k, f, Y) {
    return j || (j = k), r += i.slice(h, Y).replace(_m, Gm), p && (d = true, r += `' +
__e(` + p + `) +
'`), f && (g = true, r += `';
` + f + `;
__p += '`), j && (r += `' +
((__t = (` + j + `)) == null ? '' : __t) +
'`), h = Y + w.length, w;
  }), r += `';
`;
  var c = Bu.call(o, "variable") && o.variable;
  if (!c) r = `with (obj) {
` + r + `
}
`;
  else if (Hu.test(c)) throw new Error(Pm);
  r = (g ? r.replace(Rm, "") : r).replace(Km, "$1").replace(Am, "$1;"), r = "function(" + (c || "obj") + `) {
` + (c ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (d ? ", __e = _.escape" : "") + (g ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + r + `return __p
}`;
  var b = Yt(function() {
    return Function(u, y + "return " + r).apply(void 0, t);
  });
  if (b.source = r, Mn(b)) throw b;
  return b;
}
var $m = "Expected a function";
function Im(i, o, e) {
  var n = true, a = true;
  if (typeof i != "function") throw new TypeError($m);
  return K$1(e) && (n = "leading" in e ? !!e.leading : n, a = "trailing" in e ? !!e.trailing : a), bd(i, o, { leading: n, maxWait: o, trailing: a });
}
function Fe(i, o) {
  return o(i);
}
var qm = 9007199254740991;
var $e = 4294967295;
var Um = Math.min;
function Vm(i, o) {
  if (i = H$1(i), i < 1 || i > qm) return [];
  var e = $e, n = Um(i, $e);
  o = Hi(o), i -= $e;
  for (var a = Cn(n, o); ++e < i; ) o(e);
  return a;
}
function iY() {
  return this;
}
function sg(i, o) {
  var e = i;
  return e instanceof T$2 && (e = e.value()), Gn(o, function(n, a) {
    return a.func.apply(a.thisArg, Ai([n], a.args));
  }, e);
}
function oY() {
  return sg(this.__wrapped__, this.__actions__);
}
function eY(i) {
  return Q(i).toLowerCase();
}
function nY(i) {
  return C$4(i) ? R$1(i, Yi) : si(i) ? [i] : ai(jt$1(Q(i)));
}
var Tu = 9007199254740991;
function aY(i) {
  return i ? ao(H$1(i), -Tu, Tu) : i === 0 ? i : 0;
}
function uY(i) {
  return Q(i).toUpperCase();
}
function tY(i, o, e) {
  var n = C$4(i), a = n || Fi(i) || Yo(i);
  if (o = J$1(o), e == null) {
    var u = i && i.constructor;
    a ? e = n ? new u() : [] : K$1(i) ? e = Di(u) ? wo(Se(i)) : {} : e = {};
  }
  return (a ? vi : Xi)(i, function(t, d, g) {
    return o(e, t, d, g);
  }), e;
}
function hg(i, o) {
  for (var e = i.length; e-- && jo(o, i[e], 0) > -1; ) ;
  return e;
}
function rg(i, o) {
  for (var e = -1, n = i.length; ++e < n && jo(o, i[e], 0) > -1; ) ;
  return e;
}
function dY(i, o, e) {
  if (i = Q(i), i && (e || o === void 0)) return ot$1(i);
  if (!i || !(o = hi(o))) return i;
  var n = ki(i), a = ki(o), u = rg(n, a), t = hg(n, a) + 1;
  return Oi(n, u, t).join("");
}
function gY(i, o, e) {
  if (i = Q(i), i && (e || o === void 0)) return i.slice(0, it$1(i) + 1);
  if (!i || !(o = hi(o))) return i;
  var n = ki(i), a = hg(n, ki(o)) + 1;
  return Oi(n, 0, a).join("");
}
var sY = /^\s+/;
function hY(i, o, e) {
  if (i = Q(i), i && (e || o === void 0)) return i.replace(sY, "");
  if (!i || !(o = hi(o))) return i;
  var n = ki(i), a = rg(n, ki(o));
  return Oi(n, a).join("");
}
var rY = 30;
var lY = "...";
var vY = /\w*$/;
function yY(i, o) {
  var e = rY, n = lY;
  if (K$1(o)) {
    var a = "separator" in o ? o.separator : a;
    e = "length" in o ? H$1(o.length) : e, n = "omission" in o ? hi(o.omission) : n;
  }
  i = Q(i);
  var u = i.length;
  if (ko(i)) {
    var t = ki(i);
    u = t.length;
  }
  if (e >= u) return i;
  var d = e - So(n);
  if (d < 1) return n;
  var g = t ? Oi(t, 0, d).join("") : i.slice(0, d);
  if (a === void 0) return g + n;
  if (t && (d += g.length - d), ua(a)) {
    if (i.slice(d).search(a)) {
      var h, l = g;
      for (a.global || (a = RegExp(a.source, Q(vY.exec(a)) + "g")), a.lastIndex = 0; h = a.exec(l); ) var r = h.index;
      g = g.slice(0, r === void 0 ? d : r);
    }
  } else if (i.indexOf(hi(a), d) != d) {
    var v = g.lastIndexOf(a);
    v > -1 && (g = g.slice(0, v));
  }
  return g + n;
}
function cY(i) {
  return lt(i, 1);
}
var bY = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" };
var pY = Wn(bY);
var lg = /&(?:amp|lt|gt|quot|#39);/g;
var wY = RegExp(lg.source);
function jY(i) {
  return i = Q(i), i && wY.test(i) ? i.replace(lg, pY) : i;
}
var fY = 1 / 0;
var mY = vo && 1 / Ce(new vo([, -0]))[1] == fY ? function(i) {
  return new vo(i);
} : Ln;
var YY = 200;
function Ri(i, o, e) {
  var n = -1, a = fe, u = i.length, t = true, d = [], g = d;
  if (e) t = false, a = Vn;
  else if (u >= YY) {
    var h = o ? null : mY(i);
    if (h) return Ce(h);
    t = false, a = Go, g = new io();
  } else g = o ? [] : d;
  i: for (; ++n < u; ) {
    var l = i[n], r = o ? o(l) : l;
    if (l = e || l !== 0 ? l : 0, t && r === r) {
      for (var v = g.length; v--; ) if (g[v] === r) continue i;
      o && g.push(r), d.push(l);
    } else a(g, r, e) || (g !== d && g.push(r), d.push(l));
  }
  return d;
}
var kY = B(function(i) {
  return Ri(q$1(i, 1, _$1, true));
});
var LY = B(function(i) {
  var o = ji(i);
  return _$1(o) && (o = void 0), Ri(q$1(i, 1, _$1, true), J$1(o));
});
var ZY = B(function(i) {
  var o = ji(i);
  return o = typeof o == "function" ? o : void 0, Ri(q$1(i, 1, _$1, true), void 0, o);
});
function SY(i) {
  return i && i.length ? Ri(i) : [];
}
function JY(i, o) {
  return i && i.length ? Ri(i, J$1(o)) : [];
}
function CY(i, o) {
  return o = typeof o == "function" ? o : void 0, i && i.length ? Ri(i, void 0, o) : [];
}
var XY = 0;
function HY(i) {
  var o = ++XY;
  return Q(i) + o;
}
function BY(i, o) {
  return i == null ? true : ga(i, o);
}
var TY = Math.max;
function ya(i) {
  if (!(i && i.length)) return [];
  var o = 0;
  return i = _i(i, function(e) {
    if (_$1(e)) return o = TY(e.length, o), true;
  }), Cn(o, function(e) {
    return R$1(i, $n(e));
  });
}
function vg(i, o) {
  if (!(i && i.length)) return [];
  var e = ya(i);
  return o == null ? e : R$1(e, function(n) {
    return ri(o, void 0, n);
  });
}
function yg(i, o, e, n) {
  return Oo(i, o, e(no(i, o)), n);
}
function DY(i, o, e) {
  return i == null ? i : yg(i, o, Hi(e));
}
function MY(i, o, e, n) {
  return n = typeof n == "function" ? n : void 0, i == null ? i : yg(i, o, Hi(e), n);
}
var QY = Lo(function(i, o, e) {
  return i + (e ? " " : "") + o.toUpperCase();
});
function xY(i) {
  return i == null ? [] : ea(i, di(i));
}
var GY = B(function(i, o) {
  return _$1(i) ? Ko(i, o) : [];
});
function WY(i, o) {
  return We(Hi(o), i);
}
var NY = Wi(function(i) {
  var o = i.length, e = o ? i[0] : 0, n = this.__wrapped__, a = function(u) {
    return Dn(u, i);
  };
  return o > 1 || this.__actions__.length || !(n instanceof T$2) || !Mi(e) ? this.thru(a) : (n = n.slice(e, +e + (o ? 1 : 0)), n.__actions__.push({ func: Fe, args: [a], thisArg: void 0 }), new bi(n, this.__chain__).thru(function(u) {
    return o && !u.length && u.push(void 0), u;
  }));
});
function PY() {
  return Et$1(this);
}
function FY() {
  var i = this.__wrapped__;
  if (i instanceof T$2) {
    var o = i;
    return this.__actions__.length && (o = new T$2(this)), o = o.reverse(), o.__actions__.push({ func: Fe, args: [pn], thisArg: void 0 }), new bi(o, this.__chain__);
  }
  return this.thru(pn);
}
function ca(i, o, e) {
  var n = i.length;
  if (n < 2) return n ? Ri(i[0]) : [];
  for (var a = -1, u = Array(n); ++a < n; ) for (var t = i[a], d = -1; ++d < n; ) d != a && (u[a] = Ko(u[a] || t, i[d], o, e));
  return Ri(q$1(u, 1), o, e);
}
var RY = B(function(i) {
  return ca(_i(i, _$1));
});
var KY = B(function(i) {
  var o = ji(i);
  return _$1(o) && (o = void 0), ca(_i(i, _$1), J$1(o));
});
var AY = B(function(i) {
  var o = ji(i);
  return o = typeof o == "function" ? o : void 0, ca(_i(i, _$1), void 0, o);
});
var OY = B(ya);
function cg(i, o, e) {
  for (var n = -1, a = i.length, u = o.length, t = {}; ++n < a; ) {
    var d = n < u ? o[n] : void 0;
    e(t, i[n], d);
  }
  return t;
}
function _Y(i, o) {
  return cg(i || [], o || [], No);
}
function EY(i, o) {
  return cg(i || [], o || [], Oo);
}
var zY = B(function(i) {
  var o = i.length, e = o > 1 ? i[o - 1] : void 0;
  return e = typeof e == "function" ? (i.pop(), e) : void 0, vg(i, e);
});
const m$1 = { chunk: cv, compact: Iy, concat: qy, difference: eb, differenceBy: nb, differenceWith: ab, drop: tb, dropRight: db, dropRightWhile: gb, dropWhile: sb, fill: Xb, findIndex: Td, findLastIndex: Md, flatten: ft$1, flattenDeep: Ab, flattenDepth: Ob, fromPairs: tp, head: Wb, indexOf: Sp, initial: Jp, intersection: Xp, intersectionBy: Hp, intersectionWith: Bp, join: Sw, lastIndexOf: Tw, nth: tj, pull: tf, pullAll: og, pullAllBy: df, pullAllWith: gf, pullAt: rf, remove: Xf, reverse: pn, slice: qf, sortedIndex: gm, sortedIndexBy: sm, sortedIndexOf: hm, sortedLastIndex: rm, sortedLastIndexBy: lm, sortedLastIndexOf: vm, sortedUniq: ym, sortedUniqBy: cm, tail: Xm, take: Hm, takeRight: Bm, takeRightWhile: Tm, takeWhile: Dm, union: kY, unionBy: LY, unionWith: ZY, uniq: SY, uniqBy: JY, uniqWith: CY, unzip: ya, unzipWith: vg, without: GY, xor: RY, xorBy: KY, xorWith: AY, zip: OY, zipObject: _Y, zipObjectDeep: EY, zipWith: zY };
const W$1 = { countBy: Pc, every: Sb, filter: Hb, find: Tb, findLast: xb, flatMap: Nb, flatMapDeep: Fb, flatMapDepth: Rb, forEach: hb, forEachRight: lb, groupBy: rp, includes: Lp, invokeMap: Pp, keyBy: Cw, map: Te, orderBy: jj, partition: Uj, reduce: Zf, reduceRight: Jf, reject: Cf, sample: Nf, sampleSize: Rf, shuffle: Ef, size: If, some: im, sortBy: om };
const $Y = { now: te$1 };
const O$2 = { after: Us, ary: lt, before: kt$1, bind: Je, bindKey: Qn, curry: qn, curryRight: Un, debounce: bd, defer: Vc, delay: ib, flip: Eb, memoize: Ze, once: bj, overArgs: kj, partial: We, partialRight: ha, rearg: Lf, rest: Df, spread: fm, throttle: Im, unary: cY, wrap: WY };
const Z$1 = { castArray: sv, clone: Py, cloneDeep: Ky, cloneDeepWith: _y, cloneWith: zy, conformsTo: Qc, eq: Li, gt: lp, gte: vp, isArguments: Ui, isArrayBuffer: Kp, isArrayLike: ti, isArrayLikeObject: _$1, isBoolean: Op, isBuffer: Fi, isDate: zp, isElement: $p, isEmpty: iw, isEqual: ow, isEqualWith: ew, isError: Mn, isFinite: aw, isFunction: Di, isInteger: Pd, isLength: Ye, isMap: od, isMatch: uw, isMatchWith: tw, isNaN: gw, isNative: rw, isNil: lw, isNull: vw, isNumber: Fd, isObjectLike: A$3, isPlainObject: Fo, isRegExp: ua, isSafeInteger: bw, isSet: ed, isString: Qe, isSymbol: si, isTypedArray: Yo, isUndefined: pw, isWeakMap: jw, isWeakSet: mw, lt: Qw, lte: xw, toArray: Kd, toFinite: Ti, toLength: Xd, toNumber: yi, toPlainObject: wd, toSafeInteger: aY, toString: Q };
const ei = { add: Ks, ceil: lv, divide: ub, floor: zb, max: Kw, maxBy: Aw, mean: _w, meanBy: Ew, min: qw, minBy: Uw, multiply: ij, round: Gf, subtract: Sm, sum: Jm, sumBy: Cm };
const ba = { clamp: bv, inRange: mp, random: pf };
const S$4 = { assign: el, assignIn: dl, assignInWith: gl, assignWith: tn, at: Fl, create: Fc, defaults: $c, defaultsDeep: qc, findKey: Db, findLastKey: Gb, forIn: ep, forInRight: np, forOwn: ap, forOwnRight: up, functions: dp, functionsIn: gp, get: Tn, has: pp, hasIn: zn, invert: Qp, invertBy: Wp, invoke: Np, keysIn: di, mapKeys: Gw, mapValues: Ww, merge: zw, mergeWith: fd, omit: yj, omitBy: cj, pick: of, pickBy: _d, result: Mf, set: Kf, setWith: Af, toPairs: wb, toPairsIn: jb, transform: tY, unset: BY, update: DY, updateWith: MY, values: Zo, valuesIn: xY };
const Bi = { at: NY, chain: Et$1, commit: $y, next: uj, plant: ef, reverse: FY, tap: Mm, toIterator: iY, value: oY, wrapperChain: PY };
const M = { camelCase: gv, capitalize: Bt$1, deburr: Tt$1, endsWith: vb, escape: Sd, escapeRegExp: Lb, kebabCase: Jw, lowerCase: Dw, lowerFirst: Mw, pad: Aj, padEnd: Oj, padStart: _j, parseInt: $j, repeat: Hf, replace: Bf, snakeCase: Uf, split: pm, startCase: mm, startsWith: Ym, template: zm, templateSettings: wn, toLower: eY, toUpper: uY, trim: dY, trimEnd: gY, trimStart: hY, truncate: yY, unescape: jY, upperCase: QY, upperFirst: xn, words: _t$1 };
const x$3 = { attempt: Yt, bindAll: Ul, cond: Bc, conforms: Mc, constant: Sn, defaultTo: Ec, flow: ip, flowRight: op, iteratee: kw, matches: Pw, matchesProperty: Rw, method: $w, methodOf: Iw, noop: Ln, nthArg: dj, over: fj, overEvery: Lj, overSome: Zj, property: ld, propertyOf: nf, range: mf, rangeRight: Yf, stubArray: Pn, stubFalse: Xn, stubObject: km, stubString: Lm, stubTrue: Zm, times: Vm, toPath: nY, uniqueId: HY };
function IY() {
  var i = new T$2(this.__wrapped__);
  return i.__actions__ = ai(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = ai(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = ai(this.__views__), i;
}
function qY() {
  if (this.__filtered__) {
    var i = new T$2(this);
    i.__dir__ = -1, i.__filtered__ = true;
  } else i = this.clone(), i.__dir__ *= -1;
  return i;
}
var UY = Math.max;
var VY = Math.min;
function i1(i, o, e) {
  for (var n = -1, a = e.length; ++n < a; ) {
    var u = e[n], t = u.size;
    switch (u.type) {
      case "drop":
        i += t;
        break;
      case "dropRight":
        o -= t;
        break;
      case "take":
        o = VY(o, i + t);
        break;
      case "takeRight":
        i = UY(i, o - t);
        break;
    }
  }
  return { start: i, end: o };
}
var o1 = 1;
var e1 = 2;
var n1 = Math.min;
function a1() {
  var i = this.__wrapped__.value(), o = this.__dir__, e = C$4(i), n = o < 0, a = e ? i.length : 0, u = i1(0, a, this.__views__), t = u.start, d = u.end, g = d - t, h = n ? d : t - 1, l = this.__iteratees__, r = l.length, v = 0, y = n1(g, this.__takeCount__);
  if (!e || !n && a == g && y == g) return sg(i, this.__actions__);
  var c = [];
  i: for (; g-- && v < y; ) {
    h += o;
    for (var b = -1, w = i[h]; ++b < r; ) {
      var p = l[b], j = p.iteratee, k = p.type, f = j(w);
      if (k == e1) w = f;
      else if (!f) {
        if (k == o1) continue i;
        break i;
      }
    }
    c[v++] = w;
  }
  return c;
}
var u1 = "4.18.1";
var t1 = 2;
var d1 = 1;
var g1 = 3;
var bg = 4294967295;
var s1 = Array.prototype;
var h1 = Object.prototype;
var pg = h1.hasOwnProperty;
var Du = U ? U.iterator : void 0;
var r1 = Math.max;
var Mu = Math.min;
var pa = /* @__PURE__ */ (function(i) {
  return function(o, e, n) {
    if (n == null) {
      var a = K$1(e), u = a && I$2(e), t = u && u.length && De(e, u);
      (t ? t.length : a) || (n = e, e = o, o = this);
    }
    return i(o, e, n);
  };
})(Vw);
s$3.after = O$2.after;
s$3.ary = O$2.ary;
s$3.assign = S$4.assign;
s$3.assignIn = S$4.assignIn;
s$3.assignInWith = S$4.assignInWith;
s$3.assignWith = S$4.assignWith;
s$3.at = S$4.at;
s$3.before = O$2.before;
s$3.bind = O$2.bind;
s$3.bindAll = x$3.bindAll;
s$3.bindKey = O$2.bindKey;
s$3.castArray = Z$1.castArray;
s$3.chain = Bi.chain;
s$3.chunk = m$1.chunk;
s$3.compact = m$1.compact;
s$3.concat = m$1.concat;
s$3.cond = x$3.cond;
s$3.conforms = x$3.conforms;
s$3.constant = x$3.constant;
s$3.countBy = W$1.countBy;
s$3.create = S$4.create;
s$3.curry = O$2.curry;
s$3.curryRight = O$2.curryRight;
s$3.debounce = O$2.debounce;
s$3.defaults = S$4.defaults;
s$3.defaultsDeep = S$4.defaultsDeep;
s$3.defer = O$2.defer;
s$3.delay = O$2.delay;
s$3.difference = m$1.difference;
s$3.differenceBy = m$1.differenceBy;
s$3.differenceWith = m$1.differenceWith;
s$3.drop = m$1.drop;
s$3.dropRight = m$1.dropRight;
s$3.dropRightWhile = m$1.dropRightWhile;
s$3.dropWhile = m$1.dropWhile;
s$3.fill = m$1.fill;
s$3.filter = W$1.filter;
s$3.flatMap = W$1.flatMap;
s$3.flatMapDeep = W$1.flatMapDeep;
s$3.flatMapDepth = W$1.flatMapDepth;
s$3.flatten = m$1.flatten;
s$3.flattenDeep = m$1.flattenDeep;
s$3.flattenDepth = m$1.flattenDepth;
s$3.flip = O$2.flip;
s$3.flow = x$3.flow;
s$3.flowRight = x$3.flowRight;
s$3.fromPairs = m$1.fromPairs;
s$3.functions = S$4.functions;
s$3.functionsIn = S$4.functionsIn;
s$3.groupBy = W$1.groupBy;
s$3.initial = m$1.initial;
s$3.intersection = m$1.intersection;
s$3.intersectionBy = m$1.intersectionBy;
s$3.intersectionWith = m$1.intersectionWith;
s$3.invert = S$4.invert;
s$3.invertBy = S$4.invertBy;
s$3.invokeMap = W$1.invokeMap;
s$3.iteratee = x$3.iteratee;
s$3.keyBy = W$1.keyBy;
s$3.keys = I$2;
s$3.keysIn = S$4.keysIn;
s$3.map = W$1.map;
s$3.mapKeys = S$4.mapKeys;
s$3.mapValues = S$4.mapValues;
s$3.matches = x$3.matches;
s$3.matchesProperty = x$3.matchesProperty;
s$3.memoize = O$2.memoize;
s$3.merge = S$4.merge;
s$3.mergeWith = S$4.mergeWith;
s$3.method = x$3.method;
s$3.methodOf = x$3.methodOf;
s$3.mixin = pa;
s$3.negate = Ge;
s$3.nthArg = x$3.nthArg;
s$3.omit = S$4.omit;
s$3.omitBy = S$4.omitBy;
s$3.once = O$2.once;
s$3.orderBy = W$1.orderBy;
s$3.over = x$3.over;
s$3.overArgs = O$2.overArgs;
s$3.overEvery = x$3.overEvery;
s$3.overSome = x$3.overSome;
s$3.partial = O$2.partial;
s$3.partialRight = O$2.partialRight;
s$3.partition = W$1.partition;
s$3.pick = S$4.pick;
s$3.pickBy = S$4.pickBy;
s$3.property = x$3.property;
s$3.propertyOf = x$3.propertyOf;
s$3.pull = m$1.pull;
s$3.pullAll = m$1.pullAll;
s$3.pullAllBy = m$1.pullAllBy;
s$3.pullAllWith = m$1.pullAllWith;
s$3.pullAt = m$1.pullAt;
s$3.range = x$3.range;
s$3.rangeRight = x$3.rangeRight;
s$3.rearg = O$2.rearg;
s$3.reject = W$1.reject;
s$3.remove = m$1.remove;
s$3.rest = O$2.rest;
s$3.reverse = m$1.reverse;
s$3.sampleSize = W$1.sampleSize;
s$3.set = S$4.set;
s$3.setWith = S$4.setWith;
s$3.shuffle = W$1.shuffle;
s$3.slice = m$1.slice;
s$3.sortBy = W$1.sortBy;
s$3.sortedUniq = m$1.sortedUniq;
s$3.sortedUniqBy = m$1.sortedUniqBy;
s$3.split = M.split;
s$3.spread = O$2.spread;
s$3.tail = m$1.tail;
s$3.take = m$1.take;
s$3.takeRight = m$1.takeRight;
s$3.takeRightWhile = m$1.takeRightWhile;
s$3.takeWhile = m$1.takeWhile;
s$3.tap = Bi.tap;
s$3.throttle = O$2.throttle;
s$3.thru = Fe;
s$3.toArray = Z$1.toArray;
s$3.toPairs = S$4.toPairs;
s$3.toPairsIn = S$4.toPairsIn;
s$3.toPath = x$3.toPath;
s$3.toPlainObject = Z$1.toPlainObject;
s$3.transform = S$4.transform;
s$3.unary = O$2.unary;
s$3.union = m$1.union;
s$3.unionBy = m$1.unionBy;
s$3.unionWith = m$1.unionWith;
s$3.uniq = m$1.uniq;
s$3.uniqBy = m$1.uniqBy;
s$3.uniqWith = m$1.uniqWith;
s$3.unset = S$4.unset;
s$3.unzip = m$1.unzip;
s$3.unzipWith = m$1.unzipWith;
s$3.update = S$4.update;
s$3.updateWith = S$4.updateWith;
s$3.values = S$4.values;
s$3.valuesIn = S$4.valuesIn;
s$3.without = m$1.without;
s$3.words = M.words;
s$3.wrap = O$2.wrap;
s$3.xor = m$1.xor;
s$3.xorBy = m$1.xorBy;
s$3.xorWith = m$1.xorWith;
s$3.zip = m$1.zip;
s$3.zipObject = m$1.zipObject;
s$3.zipObjectDeep = m$1.zipObjectDeep;
s$3.zipWith = m$1.zipWith;
s$3.entries = S$4.toPairs;
s$3.entriesIn = S$4.toPairsIn;
s$3.extend = S$4.assignIn;
s$3.extendWith = S$4.assignInWith;
pa(s$3, s$3);
s$3.add = ei.add;
s$3.attempt = x$3.attempt;
s$3.camelCase = M.camelCase;
s$3.capitalize = M.capitalize;
s$3.ceil = ei.ceil;
s$3.clamp = ba.clamp;
s$3.clone = Z$1.clone;
s$3.cloneDeep = Z$1.cloneDeep;
s$3.cloneDeepWith = Z$1.cloneDeepWith;
s$3.cloneWith = Z$1.cloneWith;
s$3.conformsTo = Z$1.conformsTo;
s$3.deburr = M.deburr;
s$3.defaultTo = x$3.defaultTo;
s$3.divide = ei.divide;
s$3.endsWith = M.endsWith;
s$3.eq = Z$1.eq;
s$3.escape = M.escape;
s$3.escapeRegExp = M.escapeRegExp;
s$3.every = W$1.every;
s$3.find = W$1.find;
s$3.findIndex = m$1.findIndex;
s$3.findKey = S$4.findKey;
s$3.findLast = W$1.findLast;
s$3.findLastIndex = m$1.findLastIndex;
s$3.findLastKey = S$4.findLastKey;
s$3.floor = ei.floor;
s$3.forEach = W$1.forEach;
s$3.forEachRight = W$1.forEachRight;
s$3.forIn = S$4.forIn;
s$3.forInRight = S$4.forInRight;
s$3.forOwn = S$4.forOwn;
s$3.forOwnRight = S$4.forOwnRight;
s$3.get = S$4.get;
s$3.gt = Z$1.gt;
s$3.gte = Z$1.gte;
s$3.has = S$4.has;
s$3.hasIn = S$4.hasIn;
s$3.head = m$1.head;
s$3.identity = ui;
s$3.includes = W$1.includes;
s$3.indexOf = m$1.indexOf;
s$3.inRange = ba.inRange;
s$3.invoke = S$4.invoke;
s$3.isArguments = Z$1.isArguments;
s$3.isArray = C$4;
s$3.isArrayBuffer = Z$1.isArrayBuffer;
s$3.isArrayLike = Z$1.isArrayLike;
s$3.isArrayLikeObject = Z$1.isArrayLikeObject;
s$3.isBoolean = Z$1.isBoolean;
s$3.isBuffer = Z$1.isBuffer;
s$3.isDate = Z$1.isDate;
s$3.isElement = Z$1.isElement;
s$3.isEmpty = Z$1.isEmpty;
s$3.isEqual = Z$1.isEqual;
s$3.isEqualWith = Z$1.isEqualWith;
s$3.isError = Z$1.isError;
s$3.isFinite = Z$1.isFinite;
s$3.isFunction = Z$1.isFunction;
s$3.isInteger = Z$1.isInteger;
s$3.isLength = Z$1.isLength;
s$3.isMap = Z$1.isMap;
s$3.isMatch = Z$1.isMatch;
s$3.isMatchWith = Z$1.isMatchWith;
s$3.isNaN = Z$1.isNaN;
s$3.isNative = Z$1.isNative;
s$3.isNil = Z$1.isNil;
s$3.isNull = Z$1.isNull;
s$3.isNumber = Z$1.isNumber;
s$3.isObject = K$1;
s$3.isObjectLike = Z$1.isObjectLike;
s$3.isPlainObject = Z$1.isPlainObject;
s$3.isRegExp = Z$1.isRegExp;
s$3.isSafeInteger = Z$1.isSafeInteger;
s$3.isSet = Z$1.isSet;
s$3.isString = Z$1.isString;
s$3.isSymbol = Z$1.isSymbol;
s$3.isTypedArray = Z$1.isTypedArray;
s$3.isUndefined = Z$1.isUndefined;
s$3.isWeakMap = Z$1.isWeakMap;
s$3.isWeakSet = Z$1.isWeakSet;
s$3.join = m$1.join;
s$3.kebabCase = M.kebabCase;
s$3.last = ji;
s$3.lastIndexOf = m$1.lastIndexOf;
s$3.lowerCase = M.lowerCase;
s$3.lowerFirst = M.lowerFirst;
s$3.lt = Z$1.lt;
s$3.lte = Z$1.lte;
s$3.max = ei.max;
s$3.maxBy = ei.maxBy;
s$3.mean = ei.mean;
s$3.meanBy = ei.meanBy;
s$3.min = ei.min;
s$3.minBy = ei.minBy;
s$3.stubArray = x$3.stubArray;
s$3.stubFalse = x$3.stubFalse;
s$3.stubObject = x$3.stubObject;
s$3.stubString = x$3.stubString;
s$3.stubTrue = x$3.stubTrue;
s$3.multiply = ei.multiply;
s$3.nth = m$1.nth;
s$3.noop = x$3.noop;
s$3.now = $Y.now;
s$3.pad = M.pad;
s$3.padEnd = M.padEnd;
s$3.padStart = M.padStart;
s$3.parseInt = M.parseInt;
s$3.random = ba.random;
s$3.reduce = W$1.reduce;
s$3.reduceRight = W$1.reduceRight;
s$3.repeat = M.repeat;
s$3.replace = M.replace;
s$3.result = S$4.result;
s$3.round = ei.round;
s$3.sample = W$1.sample;
s$3.size = W$1.size;
s$3.snakeCase = M.snakeCase;
s$3.some = W$1.some;
s$3.sortedIndex = m$1.sortedIndex;
s$3.sortedIndexBy = m$1.sortedIndexBy;
s$3.sortedIndexOf = m$1.sortedIndexOf;
s$3.sortedLastIndex = m$1.sortedLastIndex;
s$3.sortedLastIndexBy = m$1.sortedLastIndexBy;
s$3.sortedLastIndexOf = m$1.sortedLastIndexOf;
s$3.startCase = M.startCase;
s$3.startsWith = M.startsWith;
s$3.subtract = ei.subtract;
s$3.sum = ei.sum;
s$3.sumBy = ei.sumBy;
s$3.template = M.template;
s$3.times = x$3.times;
s$3.toFinite = Z$1.toFinite;
s$3.toInteger = H$1;
s$3.toLength = Z$1.toLength;
s$3.toLower = M.toLower;
s$3.toNumber = Z$1.toNumber;
s$3.toSafeInteger = Z$1.toSafeInteger;
s$3.toString = Z$1.toString;
s$3.toUpper = M.toUpper;
s$3.trim = M.trim;
s$3.trimEnd = M.trimEnd;
s$3.trimStart = M.trimStart;
s$3.truncate = M.truncate;
s$3.unescape = M.unescape;
s$3.uniqueId = x$3.uniqueId;
s$3.upperCase = M.upperCase;
s$3.upperFirst = M.upperFirst;
s$3.each = W$1.forEach;
s$3.eachRight = W$1.forEachRight;
s$3.first = m$1.head;
pa(s$3, (function() {
  var i = {};
  return Xi(s$3, function(o, e) {
    pg.call(s$3.prototype, e) || (i[e] = o);
  }), i;
})(), { chain: false });
s$3.VERSION = u1;
(s$3.templateSettings = M.templateSettings).imports._ = s$3;
vi(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
  s$3[i].placeholder = s$3;
});
vi(["drop", "take"], function(i, o) {
  T$2.prototype[i] = function(e) {
    e = e === void 0 ? 1 : r1(H$1(e), 0);
    var n = this.__filtered__ && !o ? new T$2(this) : this.clone();
    return n.__filtered__ ? n.__takeCount__ = Mu(e, n.__takeCount__) : n.__views__.push({ size: Mu(e, bg), type: i + (n.__dir__ < 0 ? "Right" : "") }), n;
  }, T$2.prototype[i + "Right"] = function(e) {
    return this.reverse()[i](e).reverse();
  };
});
vi(["filter", "map", "takeWhile"], function(i, o) {
  var e = o + 1, n = e == d1 || e == g1;
  T$2.prototype[i] = function(a) {
    var u = this.clone();
    return u.__iteratees__.push({ iteratee: J$1(a), type: e }), u.__filtered__ = u.__filtered__ || n, u;
  };
});
vi(["head", "last"], function(i, o) {
  var e = "take" + (o ? "Right" : "");
  T$2.prototype[i] = function() {
    return this[e](1).value()[0];
  };
});
vi(["initial", "tail"], function(i, o) {
  var e = "drop" + (o ? "" : "Right");
  T$2.prototype[i] = function() {
    return this.__filtered__ ? new T$2(this) : this[e](1);
  };
});
T$2.prototype.compact = function() {
  return this.filter(ui);
};
T$2.prototype.find = function(i) {
  return this.filter(i).head();
};
T$2.prototype.findLast = function(i) {
  return this.reverse().find(i);
};
T$2.prototype.invokeMap = B(function(i, o) {
  return typeof i == "function" ? new T$2(this) : this.map(function(e) {
    return Ao(e, i, o);
  });
});
T$2.prototype.reject = function(i) {
  return this.filter(Ge(J$1(i)));
};
T$2.prototype.slice = function(i, o) {
  i = H$1(i);
  var e = this;
  return e.__filtered__ && (i > 0 || o < 0) ? new T$2(e) : (i < 0 ? e = e.takeRight(-i) : i && (e = e.drop(i)), o !== void 0 && (o = H$1(o), e = o < 0 ? e.dropRight(-o) : e.take(o - i)), e);
};
T$2.prototype.takeRightWhile = function(i) {
  return this.reverse().takeWhile(i).reverse();
};
T$2.prototype.toArray = function() {
  return this.take(bg);
};
Xi(T$2.prototype, function(i, o) {
  var e = /^(?:filter|find|map|reject)|While$/.test(o), n = /^(?:head|last)$/.test(o), a = s$3[n ? "take" + (o == "last" ? "Right" : "") : o], u = n || /^find/.test(o);
  a && (s$3.prototype[o] = function() {
    var t = this.__wrapped__, d = n ? [1] : arguments, g = t instanceof T$2, h = d[0], l = g || C$4(t), r = function(p) {
      var j = a.apply(s$3, Ai([p], d));
      return n && v ? j[0] : j;
    };
    l && e && typeof h == "function" && h.length != 1 && (g = l = false);
    var v = this.__chain__, y = !!this.__actions__.length, c = u && !v, b = g && !y;
    if (!u && l) {
      t = b ? t : new T$2(this);
      var w = i.apply(t, d);
      return w.__actions__.push({ func: Fe, args: [r], thisArg: void 0 }), new bi(w, v);
    }
    return c && b ? i.apply(this, d) : (w = this.thru(r), c ? n ? w.value()[0] : w.value() : w);
  });
});
vi(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
  var o = s1[i], e = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru", n = /^(?:pop|shift)$/.test(i);
  s$3.prototype[i] = function() {
    var a = arguments;
    if (n && !this.__chain__) {
      var u = this.value();
      return o.apply(C$4(u) ? u : [], a);
    }
    return this[e](function(t) {
      return o.apply(C$4(t) ? t : [], a);
    });
  };
});
Xi(T$2.prototype, function(i, o) {
  var e = s$3[o];
  if (e) {
    var n = e.name + "";
    pg.call(lo, n) || (lo[n] = []), lo[n].push({ name: o, func: e });
  }
});
lo[me(void 0, t1).name] = [{ name: "wrapper", func: void 0 }];
T$2.prototype.clone = IY;
T$2.prototype.reverse = qY;
T$2.prototype.value = a1;
s$3.prototype.at = Bi.at;
s$3.prototype.chain = Bi.wrapperChain;
s$3.prototype.commit = Bi.commit;
s$3.prototype.next = Bi.next;
s$3.prototype.plant = Bi.plant;
s$3.prototype.reverse = Bi.reverse;
s$3.prototype.toJSON = s$3.prototype.valueOf = s$3.prototype.value = Bi.value;
s$3.prototype.first = s$3.prototype.head;
Du && (s$3.prototype[Du] = Bi.toIterator);
var ro = function() {
  return ro = Object.assign || function(i) {
    for (var o, e = 1, n = arguments.length; e < n; e++) {
      o = arguments[e];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (i[a] = o[a]);
    }
    return i;
  }, ro.apply(this, arguments);
};
var l1 = "~";
var v1 = "~~";
function wa(i, o) {
  for (var e = {}, n = {}, a = i.split(v1), u = false, t = 0; a.length > t; t++) {
    for (var d = a[t].split(l1), g = 0; g < d.length; g += 2) {
      var h = d[g], l = d[g + 1], r = "&" + h + ";";
      e[r] = l, u && (e["&" + h] = l), n[l] = r;
    }
    u = true;
  }
  return o ? { entities: ro(ro({}, e), o.entities), characters: ro(ro({}, n), o.characters) } : { entities: e, characters: n };
}
var Ie = { xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g, html4: /&notin;|&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g, html5: /&centerdot;|&copysr;|&divideontimes;|&gtcc;|&gtcir;|&gtdot;|&gtlPar;|&gtquest;|&gtrapprox;|&gtrarr;|&gtrdot;|&gtreqless;|&gtreqqless;|&gtrless;|&gtrsim;|&ltcc;|&ltcir;|&ltdot;|&lthree;|&ltimes;|&ltlarr;|&ltquest;|&ltrPar;|&ltri;|&ltrie;|&ltrif;|&notin;|&notinE;|&notindot;|&notinva;|&notinvb;|&notinvc;|&notni;|&notniva;|&notnivb;|&notnivc;|&parallel;|&timesb;|&timesbar;|&timesd;|&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g };
var co = {};
co.xml = wa(`lt~<~gt~>~quot~"~apos~'~amp~&`);
co.html4 = wa(`apos~'~OElig~Œ~oelig~œ~Scaron~Š~scaron~š~Yuml~Ÿ~circ~ˆ~tilde~˜~ensp~ ~emsp~ ~thinsp~ ~zwnj~‌~zwj~‍~lrm~‎~rlm~‏~ndash~–~mdash~—~lsquo~‘~rsquo~’~sbquo~‚~ldquo~“~rdquo~”~bdquo~„~dagger~†~Dagger~‡~permil~‰~lsaquo~‹~rsaquo~›~euro~€~fnof~ƒ~Alpha~Α~Beta~Β~Gamma~Γ~Delta~Δ~Epsilon~Ε~Zeta~Ζ~Eta~Η~Theta~Θ~Iota~Ι~Kappa~Κ~Lambda~Λ~Mu~Μ~Nu~Ν~Xi~Ξ~Omicron~Ο~Pi~Π~Rho~Ρ~Sigma~Σ~Tau~Τ~Upsilon~Υ~Phi~Φ~Chi~Χ~Psi~Ψ~Omega~Ω~alpha~α~beta~β~gamma~γ~delta~δ~epsilon~ε~zeta~ζ~eta~η~theta~θ~iota~ι~kappa~κ~lambda~λ~mu~μ~nu~ν~xi~ξ~omicron~ο~pi~π~rho~ρ~sigmaf~ς~sigma~σ~tau~τ~upsilon~υ~phi~φ~chi~χ~psi~ψ~omega~ω~thetasym~ϑ~upsih~ϒ~piv~ϖ~bull~•~hellip~…~prime~′~Prime~″~oline~‾~frasl~⁄~weierp~℘~image~ℑ~real~ℜ~trade~™~alefsym~ℵ~larr~←~uarr~↑~rarr~→~darr~↓~harr~↔~crarr~↵~lArr~⇐~uArr~⇑~rArr~⇒~dArr~⇓~hArr~⇔~forall~∀~part~∂~exist~∃~empty~∅~nabla~∇~isin~∈~notin~∉~ni~∋~prod~∏~sum~∑~minus~−~lowast~∗~radic~√~prop~∝~infin~∞~ang~∠~and~∧~or~∨~cap~∩~cup~∪~int~∫~there4~∴~sim~∼~cong~≅~asymp~≈~ne~≠~equiv~≡~le~≤~ge~≥~sub~⊂~sup~⊃~nsub~⊄~sube~⊆~supe~⊇~oplus~⊕~otimes~⊗~perp~⊥~sdot~⋅~lceil~⌈~rceil~⌉~lfloor~⌊~rfloor~⌋~lang~〈~rang~〉~loz~◊~spades~♠~clubs~♣~hearts~♥~diams~♦~~nbsp~ ~iexcl~¡~cent~¢~pound~£~curren~¤~yen~¥~brvbar~¦~sect~§~uml~¨~copy~©~ordf~ª~laquo~«~not~¬~shy~­~reg~®~macr~¯~deg~°~plusmn~±~sup2~²~sup3~³~acute~´~micro~µ~para~¶~middot~·~cedil~¸~sup1~¹~ordm~º~raquo~»~frac14~¼~frac12~½~frac34~¾~iquest~¿~Agrave~À~Aacute~Á~Acirc~Â~Atilde~Ã~Auml~Ä~Aring~Å~AElig~Æ~Ccedil~Ç~Egrave~È~Eacute~É~Ecirc~Ê~Euml~Ë~Igrave~Ì~Iacute~Í~Icirc~Î~Iuml~Ï~ETH~Ð~Ntilde~Ñ~Ograve~Ò~Oacute~Ó~Ocirc~Ô~Otilde~Õ~Ouml~Ö~times~×~Oslash~Ø~Ugrave~Ù~Uacute~Ú~Ucirc~Û~Uuml~Ü~Yacute~Ý~THORN~Þ~szlig~ß~agrave~à~aacute~á~acirc~â~atilde~ã~auml~ä~aring~å~aelig~æ~ccedil~ç~egrave~è~eacute~é~ecirc~ê~euml~ë~igrave~ì~iacute~í~icirc~î~iuml~ï~eth~ð~ntilde~ñ~ograve~ò~oacute~ó~ocirc~ô~otilde~õ~ouml~ö~divide~÷~oslash~ø~ugrave~ù~uacute~ú~ucirc~û~uuml~ü~yacute~ý~thorn~þ~yuml~ÿ~quot~"~amp~&~lt~<~gt~>`);
co.html5 = wa('Abreve~Ă~Acy~А~Afr~𝔄~Amacr~Ā~And~⩓~Aogon~Ą~Aopf~𝔸~ApplyFunction~⁡~Ascr~𝒜~Assign~≔~Backslash~∖~Barv~⫧~Barwed~⌆~Bcy~Б~Because~∵~Bernoullis~ℬ~Bfr~𝔅~Bopf~𝔹~Breve~˘~Bscr~ℬ~Bumpeq~≎~CHcy~Ч~Cacute~Ć~Cap~⋒~CapitalDifferentialD~ⅅ~Cayleys~ℭ~Ccaron~Č~Ccirc~Ĉ~Cconint~∰~Cdot~Ċ~Cedilla~¸~CenterDot~·~Cfr~ℭ~CircleDot~⊙~CircleMinus~⊖~CirclePlus~⊕~CircleTimes~⊗~ClockwiseContourIntegral~∲~CloseCurlyDoubleQuote~”~CloseCurlyQuote~’~Colon~∷~Colone~⩴~Congruent~≡~Conint~∯~ContourIntegral~∮~Copf~ℂ~Coproduct~∐~CounterClockwiseContourIntegral~∳~Cross~⨯~Cscr~𝒞~Cup~⋓~CupCap~≍~DD~ⅅ~DDotrahd~⤑~DJcy~Ђ~DScy~Ѕ~DZcy~Џ~Darr~↡~Dashv~⫤~Dcaron~Ď~Dcy~Д~Del~∇~Dfr~𝔇~DiacriticalAcute~´~DiacriticalDot~˙~DiacriticalDoubleAcute~˝~DiacriticalGrave~`~DiacriticalTilde~˜~Diamond~⋄~DifferentialD~ⅆ~Dopf~𝔻~Dot~¨~DotDot~⃜~DotEqual~≐~DoubleContourIntegral~∯~DoubleDot~¨~DoubleDownArrow~⇓~DoubleLeftArrow~⇐~DoubleLeftRightArrow~⇔~DoubleLeftTee~⫤~DoubleLongLeftArrow~⟸~DoubleLongLeftRightArrow~⟺~DoubleLongRightArrow~⟹~DoubleRightArrow~⇒~DoubleRightTee~⊨~DoubleUpArrow~⇑~DoubleUpDownArrow~⇕~DoubleVerticalBar~∥~DownArrow~↓~DownArrowBar~⤓~DownArrowUpArrow~⇵~DownBreve~̑~DownLeftRightVector~⥐~DownLeftTeeVector~⥞~DownLeftVector~↽~DownLeftVectorBar~⥖~DownRightTeeVector~⥟~DownRightVector~⇁~DownRightVectorBar~⥗~DownTee~⊤~DownTeeArrow~↧~Downarrow~⇓~Dscr~𝒟~Dstrok~Đ~ENG~Ŋ~Ecaron~Ě~Ecy~Э~Edot~Ė~Efr~𝔈~Element~∈~Emacr~Ē~EmptySmallSquare~◻~EmptyVerySmallSquare~▫~Eogon~Ę~Eopf~𝔼~Equal~⩵~EqualTilde~≂~Equilibrium~⇌~Escr~ℰ~Esim~⩳~Exists~∃~ExponentialE~ⅇ~Fcy~Ф~Ffr~𝔉~FilledSmallSquare~◼~FilledVerySmallSquare~▪~Fopf~𝔽~ForAll~∀~Fouriertrf~ℱ~Fscr~ℱ~GJcy~Ѓ~Gammad~Ϝ~Gbreve~Ğ~Gcedil~Ģ~Gcirc~Ĝ~Gcy~Г~Gdot~Ġ~Gfr~𝔊~Gg~⋙~Gopf~𝔾~GreaterEqual~≥~GreaterEqualLess~⋛~GreaterFullEqual~≧~GreaterGreater~⪢~GreaterLess~≷~GreaterSlantEqual~⩾~GreaterTilde~≳~Gscr~𝒢~Gt~≫~HARDcy~Ъ~Hacek~ˇ~Hat~^~Hcirc~Ĥ~Hfr~ℌ~HilbertSpace~ℋ~Hopf~ℍ~HorizontalLine~─~Hscr~ℋ~Hstrok~Ħ~HumpDownHump~≎~HumpEqual~≏~IEcy~Е~IJlig~Ĳ~IOcy~Ё~Icy~И~Idot~İ~Ifr~ℑ~Im~ℑ~Imacr~Ī~ImaginaryI~ⅈ~Implies~⇒~Int~∬~Integral~∫~Intersection~⋂~InvisibleComma~⁣~InvisibleTimes~⁢~Iogon~Į~Iopf~𝕀~Iscr~ℐ~Itilde~Ĩ~Iukcy~І~Jcirc~Ĵ~Jcy~Й~Jfr~𝔍~Jopf~𝕁~Jscr~𝒥~Jsercy~Ј~Jukcy~Є~KHcy~Х~KJcy~Ќ~Kcedil~Ķ~Kcy~К~Kfr~𝔎~Kopf~𝕂~Kscr~𝒦~LJcy~Љ~Lacute~Ĺ~Lang~⟪~Laplacetrf~ℒ~Larr~↞~Lcaron~Ľ~Lcedil~Ļ~Lcy~Л~LeftAngleBracket~⟨~LeftArrow~←~LeftArrowBar~⇤~LeftArrowRightArrow~⇆~LeftCeiling~⌈~LeftDoubleBracket~⟦~LeftDownTeeVector~⥡~LeftDownVector~⇃~LeftDownVectorBar~⥙~LeftFloor~⌊~LeftRightArrow~↔~LeftRightVector~⥎~LeftTee~⊣~LeftTeeArrow~↤~LeftTeeVector~⥚~LeftTriangle~⊲~LeftTriangleBar~⧏~LeftTriangleEqual~⊴~LeftUpDownVector~⥑~LeftUpTeeVector~⥠~LeftUpVector~↿~LeftUpVectorBar~⥘~LeftVector~↼~LeftVectorBar~⥒~Leftarrow~⇐~Leftrightarrow~⇔~LessEqualGreater~⋚~LessFullEqual~≦~LessGreater~≶~LessLess~⪡~LessSlantEqual~⩽~LessTilde~≲~Lfr~𝔏~Ll~⋘~Lleftarrow~⇚~Lmidot~Ŀ~LongLeftArrow~⟵~LongLeftRightArrow~⟷~LongRightArrow~⟶~Longleftarrow~⟸~Longleftrightarrow~⟺~Longrightarrow~⟹~Lopf~𝕃~LowerLeftArrow~↙~LowerRightArrow~↘~Lscr~ℒ~Lsh~↰~Lstrok~Ł~Lt~≪~Map~⤅~Mcy~М~MediumSpace~ ~Mellintrf~ℳ~Mfr~𝔐~MinusPlus~∓~Mopf~𝕄~Mscr~ℳ~NJcy~Њ~Nacute~Ń~Ncaron~Ň~Ncedil~Ņ~Ncy~Н~NegativeMediumSpace~​~NegativeThickSpace~​~NegativeThinSpace~​~NegativeVeryThinSpace~​~NestedGreaterGreater~≫~NestedLessLess~≪~NewLine~\n~Nfr~𝔑~NoBreak~⁠~NonBreakingSpace~ ~Nopf~ℕ~Not~⫬~NotCongruent~≢~NotCupCap~≭~NotDoubleVerticalBar~∦~NotElement~∉~NotEqual~≠~NotEqualTilde~≂̸~NotExists~∄~NotGreater~≯~NotGreaterEqual~≱~NotGreaterFullEqual~≧̸~NotGreaterGreater~≫̸~NotGreaterLess~≹~NotGreaterSlantEqual~⩾̸~NotGreaterTilde~≵~NotHumpDownHump~≎̸~NotHumpEqual~≏̸~NotLeftTriangle~⋪~NotLeftTriangleBar~⧏̸~NotLeftTriangleEqual~⋬~NotLess~≮~NotLessEqual~≰~NotLessGreater~≸~NotLessLess~≪̸~NotLessSlantEqual~⩽̸~NotLessTilde~≴~NotNestedGreaterGreater~⪢̸~NotNestedLessLess~⪡̸~NotPrecedes~⊀~NotPrecedesEqual~⪯̸~NotPrecedesSlantEqual~⋠~NotReverseElement~∌~NotRightTriangle~⋫~NotRightTriangleBar~⧐̸~NotRightTriangleEqual~⋭~NotSquareSubset~⊏̸~NotSquareSubsetEqual~⋢~NotSquareSuperset~⊐̸~NotSquareSupersetEqual~⋣~NotSubset~⊂⃒~NotSubsetEqual~⊈~NotSucceeds~⊁~NotSucceedsEqual~⪰̸~NotSucceedsSlantEqual~⋡~NotSucceedsTilde~≿̸~NotSuperset~⊃⃒~NotSupersetEqual~⊉~NotTilde~≁~NotTildeEqual~≄~NotTildeFullEqual~≇~NotTildeTilde~≉~NotVerticalBar~∤~Nscr~𝒩~Ocy~О~Odblac~Ő~Ofr~𝔒~Omacr~Ō~Oopf~𝕆~OpenCurlyDoubleQuote~“~OpenCurlyQuote~‘~Or~⩔~Oscr~𝒪~Otimes~⨷~OverBar~‾~OverBrace~⏞~OverBracket~⎴~OverParenthesis~⏜~PartialD~∂~Pcy~П~Pfr~𝔓~PlusMinus~±~Poincareplane~ℌ~Popf~ℙ~Pr~⪻~Precedes~≺~PrecedesEqual~⪯~PrecedesSlantEqual~≼~PrecedesTilde~≾~Product~∏~Proportion~∷~Proportional~∝~Pscr~𝒫~Qfr~𝔔~Qopf~ℚ~Qscr~𝒬~RBarr~⤐~Racute~Ŕ~Rang~⟫~Rarr~↠~Rarrtl~⤖~Rcaron~Ř~Rcedil~Ŗ~Rcy~Р~Re~ℜ~ReverseElement~∋~ReverseEquilibrium~⇋~ReverseUpEquilibrium~⥯~Rfr~ℜ~RightAngleBracket~⟩~RightArrow~→~RightArrowBar~⇥~RightArrowLeftArrow~⇄~RightCeiling~⌉~RightDoubleBracket~⟧~RightDownTeeVector~⥝~RightDownVector~⇂~RightDownVectorBar~⥕~RightFloor~⌋~RightTee~⊢~RightTeeArrow~↦~RightTeeVector~⥛~RightTriangle~⊳~RightTriangleBar~⧐~RightTriangleEqual~⊵~RightUpDownVector~⥏~RightUpTeeVector~⥜~RightUpVector~↾~RightUpVectorBar~⥔~RightVector~⇀~RightVectorBar~⥓~Rightarrow~⇒~Ropf~ℝ~RoundImplies~⥰~Rrightarrow~⇛~Rscr~ℛ~Rsh~↱~RuleDelayed~⧴~SHCHcy~Щ~SHcy~Ш~SOFTcy~Ь~Sacute~Ś~Sc~⪼~Scedil~Ş~Scirc~Ŝ~Scy~С~Sfr~𝔖~ShortDownArrow~↓~ShortLeftArrow~←~ShortRightArrow~→~ShortUpArrow~↑~SmallCircle~∘~Sopf~𝕊~Sqrt~√~Square~□~SquareIntersection~⊓~SquareSubset~⊏~SquareSubsetEqual~⊑~SquareSuperset~⊐~SquareSupersetEqual~⊒~SquareUnion~⊔~Sscr~𝒮~Star~⋆~Sub~⋐~Subset~⋐~SubsetEqual~⊆~Succeeds~≻~SucceedsEqual~⪰~SucceedsSlantEqual~≽~SucceedsTilde~≿~SuchThat~∋~Sum~∑~Sup~⋑~Superset~⊃~SupersetEqual~⊇~Supset~⋑~TRADE~™~TSHcy~Ћ~TScy~Ц~Tab~	~Tcaron~Ť~Tcedil~Ţ~Tcy~Т~Tfr~𝔗~Therefore~∴~ThickSpace~  ~ThinSpace~ ~Tilde~∼~TildeEqual~≃~TildeFullEqual~≅~TildeTilde~≈~Topf~𝕋~TripleDot~⃛~Tscr~𝒯~Tstrok~Ŧ~Uarr~↟~Uarrocir~⥉~Ubrcy~Ў~Ubreve~Ŭ~Ucy~У~Udblac~Ű~Ufr~𝔘~Umacr~Ū~UnderBar~_~UnderBrace~⏟~UnderBracket~⎵~UnderParenthesis~⏝~Union~⋃~UnionPlus~⊎~Uogon~Ų~Uopf~𝕌~UpArrow~↑~UpArrowBar~⤒~UpArrowDownArrow~⇅~UpDownArrow~↕~UpEquilibrium~⥮~UpTee~⊥~UpTeeArrow~↥~Uparrow~⇑~Updownarrow~⇕~UpperLeftArrow~↖~UpperRightArrow~↗~Upsi~ϒ~Uring~Ů~Uscr~𝒰~Utilde~Ũ~VDash~⊫~Vbar~⫫~Vcy~В~Vdash~⊩~Vdashl~⫦~Vee~⋁~Verbar~‖~Vert~‖~VerticalBar~∣~VerticalLine~|~VerticalSeparator~❘~VerticalTilde~≀~VeryThinSpace~ ~Vfr~𝔙~Vopf~𝕍~Vscr~𝒱~Vvdash~⊪~Wcirc~Ŵ~Wedge~⋀~Wfr~𝔚~Wopf~𝕎~Wscr~𝒲~Xfr~𝔛~Xopf~𝕏~Xscr~𝒳~YAcy~Я~YIcy~Ї~YUcy~Ю~Ycirc~Ŷ~Ycy~Ы~Yfr~𝔜~Yopf~𝕐~Yscr~𝒴~ZHcy~Ж~Zacute~Ź~Zcaron~Ž~Zcy~З~Zdot~Ż~ZeroWidthSpace~​~Zfr~ℨ~Zopf~ℤ~Zscr~𝒵~abreve~ă~ac~∾~acE~∾̳~acd~∿~acy~а~af~⁡~afr~𝔞~aleph~ℵ~amacr~ā~amalg~⨿~andand~⩕~andd~⩜~andslope~⩘~andv~⩚~ange~⦤~angle~∠~angmsd~∡~angmsdaa~⦨~angmsdab~⦩~angmsdac~⦪~angmsdad~⦫~angmsdae~⦬~angmsdaf~⦭~angmsdag~⦮~angmsdah~⦯~angrt~∟~angrtvb~⊾~angrtvbd~⦝~angsph~∢~angst~Å~angzarr~⍼~aogon~ą~aopf~𝕒~ap~≈~apE~⩰~apacir~⩯~ape~≊~apid~≋~approx~≈~approxeq~≊~ascr~𝒶~ast~*~asympeq~≍~awconint~∳~awint~⨑~bNot~⫭~backcong~≌~backepsilon~϶~backprime~‵~backsim~∽~backsimeq~⋍~barvee~⊽~barwed~⌅~barwedge~⌅~bbrk~⎵~bbrktbrk~⎶~bcong~≌~bcy~б~becaus~∵~because~∵~bemptyv~⦰~bepsi~϶~bernou~ℬ~beth~ℶ~between~≬~bfr~𝔟~bigcap~⋂~bigcirc~◯~bigcup~⋃~bigodot~⨀~bigoplus~⨁~bigotimes~⨂~bigsqcup~⨆~bigstar~★~bigtriangledown~▽~bigtriangleup~△~biguplus~⨄~bigvee~⋁~bigwedge~⋀~bkarow~⤍~blacklozenge~⧫~blacksquare~▪~blacktriangle~▴~blacktriangledown~▾~blacktriangleleft~◂~blacktriangleright~▸~blank~␣~blk12~▒~blk14~░~blk34~▓~block~█~bne~=⃥~bnequiv~≡⃥~bnot~⌐~bopf~𝕓~bot~⊥~bottom~⊥~bowtie~⋈~boxDL~╗~boxDR~╔~boxDl~╖~boxDr~╓~boxH~═~boxHD~╦~boxHU~╩~boxHd~╤~boxHu~╧~boxUL~╝~boxUR~╚~boxUl~╜~boxUr~╙~boxV~║~boxVH~╬~boxVL~╣~boxVR~╠~boxVh~╫~boxVl~╢~boxVr~╟~boxbox~⧉~boxdL~╕~boxdR~╒~boxdl~┐~boxdr~┌~boxh~─~boxhD~╥~boxhU~╨~boxhd~┬~boxhu~┴~boxminus~⊟~boxplus~⊞~boxtimes~⊠~boxuL~╛~boxuR~╘~boxul~┘~boxur~└~boxv~│~boxvH~╪~boxvL~╡~boxvR~╞~boxvh~┼~boxvl~┤~boxvr~├~bprime~‵~breve~˘~bscr~𝒷~bsemi~⁏~bsim~∽~bsime~⋍~bsol~\\~bsolb~⧅~bsolhsub~⟈~bullet~•~bump~≎~bumpE~⪮~bumpe~≏~bumpeq~≏~cacute~ć~capand~⩄~capbrcup~⩉~capcap~⩋~capcup~⩇~capdot~⩀~caps~∩︀~caret~⁁~caron~ˇ~ccaps~⩍~ccaron~č~ccirc~ĉ~ccups~⩌~ccupssm~⩐~cdot~ċ~cemptyv~⦲~centerdot~·~cfr~𝔠~chcy~ч~check~✓~checkmark~✓~cir~○~cirE~⧃~circeq~≗~circlearrowleft~↺~circlearrowright~↻~circledR~®~circledS~Ⓢ~circledast~⊛~circledcirc~⊚~circleddash~⊝~cire~≗~cirfnint~⨐~cirmid~⫯~cirscir~⧂~clubsuit~♣~colon~:~colone~≔~coloneq~≔~comma~,~commat~@~comp~∁~compfn~∘~complement~∁~complexes~ℂ~congdot~⩭~conint~∮~copf~𝕔~coprod~∐~copysr~℗~cross~✗~cscr~𝒸~csub~⫏~csube~⫑~csup~⫐~csupe~⫒~ctdot~⋯~cudarrl~⤸~cudarrr~⤵~cuepr~⋞~cuesc~⋟~cularr~↶~cularrp~⤽~cupbrcap~⩈~cupcap~⩆~cupcup~⩊~cupdot~⊍~cupor~⩅~cups~∪︀~curarr~↷~curarrm~⤼~curlyeqprec~⋞~curlyeqsucc~⋟~curlyvee~⋎~curlywedge~⋏~curvearrowleft~↶~curvearrowright~↷~cuvee~⋎~cuwed~⋏~cwconint~∲~cwint~∱~cylcty~⌭~dHar~⥥~daleth~ℸ~dash~‐~dashv~⊣~dbkarow~⤏~dblac~˝~dcaron~ď~dcy~д~dd~ⅆ~ddagger~‡~ddarr~⇊~ddotseq~⩷~demptyv~⦱~dfisht~⥿~dfr~𝔡~dharl~⇃~dharr~⇂~diam~⋄~diamond~⋄~diamondsuit~♦~die~¨~digamma~ϝ~disin~⋲~div~÷~divideontimes~⋇~divonx~⋇~djcy~ђ~dlcorn~⌞~dlcrop~⌍~dollar~$~dopf~𝕕~dot~˙~doteq~≐~doteqdot~≑~dotminus~∸~dotplus~∔~dotsquare~⊡~doublebarwedge~⌆~downarrow~↓~downdownarrows~⇊~downharpoonleft~⇃~downharpoonright~⇂~drbkarow~⤐~drcorn~⌟~drcrop~⌌~dscr~𝒹~dscy~ѕ~dsol~⧶~dstrok~đ~dtdot~⋱~dtri~▿~dtrif~▾~duarr~⇵~duhar~⥯~dwangle~⦦~dzcy~џ~dzigrarr~⟿~eDDot~⩷~eDot~≑~easter~⩮~ecaron~ě~ecir~≖~ecolon~≕~ecy~э~edot~ė~ee~ⅇ~efDot~≒~efr~𝔢~eg~⪚~egs~⪖~egsdot~⪘~el~⪙~elinters~⏧~ell~ℓ~els~⪕~elsdot~⪗~emacr~ē~emptyset~∅~emptyv~∅~emsp13~ ~emsp14~ ~eng~ŋ~eogon~ę~eopf~𝕖~epar~⋕~eparsl~⧣~eplus~⩱~epsi~ε~epsiv~ϵ~eqcirc~≖~eqcolon~≕~eqsim~≂~eqslantgtr~⪖~eqslantless~⪕~equals~=~equest~≟~equivDD~⩸~eqvparsl~⧥~erDot~≓~erarr~⥱~escr~ℯ~esdot~≐~esim~≂~excl~!~expectation~ℰ~exponentiale~ⅇ~fallingdotseq~≒~fcy~ф~female~♀~ffilig~ﬃ~fflig~ﬀ~ffllig~ﬄ~ffr~𝔣~filig~ﬁ~fjlig~fj~flat~♭~fllig~ﬂ~fltns~▱~fopf~𝕗~fork~⋔~forkv~⫙~fpartint~⨍~frac13~⅓~frac15~⅕~frac16~⅙~frac18~⅛~frac23~⅔~frac25~⅖~frac35~⅗~frac38~⅜~frac45~⅘~frac56~⅚~frac58~⅝~frac78~⅞~frown~⌢~fscr~𝒻~gE~≧~gEl~⪌~gacute~ǵ~gammad~ϝ~gap~⪆~gbreve~ğ~gcirc~ĝ~gcy~г~gdot~ġ~gel~⋛~geq~≥~geqq~≧~geqslant~⩾~ges~⩾~gescc~⪩~gesdot~⪀~gesdoto~⪂~gesdotol~⪄~gesl~⋛︀~gesles~⪔~gfr~𝔤~gg~≫~ggg~⋙~gimel~ℷ~gjcy~ѓ~gl~≷~glE~⪒~gla~⪥~glj~⪤~gnE~≩~gnap~⪊~gnapprox~⪊~gne~⪈~gneq~⪈~gneqq~≩~gnsim~⋧~gopf~𝕘~grave~`~gscr~ℊ~gsim~≳~gsime~⪎~gsiml~⪐~gtcc~⪧~gtcir~⩺~gtdot~⋗~gtlPar~⦕~gtquest~⩼~gtrapprox~⪆~gtrarr~⥸~gtrdot~⋗~gtreqless~⋛~gtreqqless~⪌~gtrless~≷~gtrsim~≳~gvertneqq~≩︀~gvnE~≩︀~hairsp~ ~half~½~hamilt~ℋ~hardcy~ъ~harrcir~⥈~harrw~↭~hbar~ℏ~hcirc~ĥ~heartsuit~♥~hercon~⊹~hfr~𝔥~hksearow~⤥~hkswarow~⤦~hoarr~⇿~homtht~∻~hookleftarrow~↩~hookrightarrow~↪~hopf~𝕙~horbar~―~hscr~𝒽~hslash~ℏ~hstrok~ħ~hybull~⁃~hyphen~‐~ic~⁣~icy~и~iecy~е~iff~⇔~ifr~𝔦~ii~ⅈ~iiiint~⨌~iiint~∭~iinfin~⧜~iiota~℩~ijlig~ĳ~imacr~ī~imagline~ℐ~imagpart~ℑ~imath~ı~imof~⊷~imped~Ƶ~in~∈~incare~℅~infintie~⧝~inodot~ı~intcal~⊺~integers~ℤ~intercal~⊺~intlarhk~⨗~intprod~⨼~iocy~ё~iogon~į~iopf~𝕚~iprod~⨼~iscr~𝒾~isinE~⋹~isindot~⋵~isins~⋴~isinsv~⋳~isinv~∈~it~⁢~itilde~ĩ~iukcy~і~jcirc~ĵ~jcy~й~jfr~𝔧~jmath~ȷ~jopf~𝕛~jscr~𝒿~jsercy~ј~jukcy~є~kappav~ϰ~kcedil~ķ~kcy~к~kfr~𝔨~kgreen~ĸ~khcy~х~kjcy~ќ~kopf~𝕜~kscr~𝓀~lAarr~⇚~lAtail~⤛~lBarr~⤎~lE~≦~lEg~⪋~lHar~⥢~lacute~ĺ~laemptyv~⦴~lagran~ℒ~langd~⦑~langle~⟨~lap~⪅~larrb~⇤~larrbfs~⤟~larrfs~⤝~larrhk~↩~larrlp~↫~larrpl~⤹~larrsim~⥳~larrtl~↢~lat~⪫~latail~⤙~late~⪭~lates~⪭︀~lbarr~⤌~lbbrk~❲~lbrace~{~lbrack~[~lbrke~⦋~lbrksld~⦏~lbrkslu~⦍~lcaron~ľ~lcedil~ļ~lcub~{~lcy~л~ldca~⤶~ldquor~„~ldrdhar~⥧~ldrushar~⥋~ldsh~↲~leftarrow~←~leftarrowtail~↢~leftharpoondown~↽~leftharpoonup~↼~leftleftarrows~⇇~leftrightarrow~↔~leftrightarrows~⇆~leftrightharpoons~⇋~leftrightsquigarrow~↭~leftthreetimes~⋋~leg~⋚~leq~≤~leqq~≦~leqslant~⩽~les~⩽~lescc~⪨~lesdot~⩿~lesdoto~⪁~lesdotor~⪃~lesg~⋚︀~lesges~⪓~lessapprox~⪅~lessdot~⋖~lesseqgtr~⋚~lesseqqgtr~⪋~lessgtr~≶~lesssim~≲~lfisht~⥼~lfr~𝔩~lg~≶~lgE~⪑~lhard~↽~lharu~↼~lharul~⥪~lhblk~▄~ljcy~љ~ll~≪~llarr~⇇~llcorner~⌞~llhard~⥫~lltri~◺~lmidot~ŀ~lmoust~⎰~lmoustache~⎰~lnE~≨~lnap~⪉~lnapprox~⪉~lne~⪇~lneq~⪇~lneqq~≨~lnsim~⋦~loang~⟬~loarr~⇽~lobrk~⟦~longleftarrow~⟵~longleftrightarrow~⟷~longmapsto~⟼~longrightarrow~⟶~looparrowleft~↫~looparrowright~↬~lopar~⦅~lopf~𝕝~loplus~⨭~lotimes~⨴~lowbar~_~lozenge~◊~lozf~⧫~lpar~(~lparlt~⦓~lrarr~⇆~lrcorner~⌟~lrhar~⇋~lrhard~⥭~lrtri~⊿~lscr~𝓁~lsh~↰~lsim~≲~lsime~⪍~lsimg~⪏~lsqb~[~lsquor~‚~lstrok~ł~ltcc~⪦~ltcir~⩹~ltdot~⋖~lthree~⋋~ltimes~⋉~ltlarr~⥶~ltquest~⩻~ltrPar~⦖~ltri~◃~ltrie~⊴~ltrif~◂~lurdshar~⥊~luruhar~⥦~lvertneqq~≨︀~lvnE~≨︀~mDDot~∺~male~♂~malt~✠~maltese~✠~map~↦~mapsto~↦~mapstodown~↧~mapstoleft~↤~mapstoup~↥~marker~▮~mcomma~⨩~mcy~м~measuredangle~∡~mfr~𝔪~mho~℧~mid~∣~midast~*~midcir~⫰~minusb~⊟~minusd~∸~minusdu~⨪~mlcp~⫛~mldr~…~mnplus~∓~models~⊧~mopf~𝕞~mp~∓~mscr~𝓂~mstpos~∾~multimap~⊸~mumap~⊸~nGg~⋙̸~nGt~≫⃒~nGtv~≫̸~nLeftarrow~⇍~nLeftrightarrow~⇎~nLl~⋘̸~nLt~≪⃒~nLtv~≪̸~nRightarrow~⇏~nVDash~⊯~nVdash~⊮~nacute~ń~nang~∠⃒~nap~≉~napE~⩰̸~napid~≋̸~napos~ŉ~napprox~≉~natur~♮~natural~♮~naturals~ℕ~nbump~≎̸~nbumpe~≏̸~ncap~⩃~ncaron~ň~ncedil~ņ~ncong~≇~ncongdot~⩭̸~ncup~⩂~ncy~н~neArr~⇗~nearhk~⤤~nearr~↗~nearrow~↗~nedot~≐̸~nequiv~≢~nesear~⤨~nesim~≂̸~nexist~∄~nexists~∄~nfr~𝔫~ngE~≧̸~nge~≱~ngeq~≱~ngeqq~≧̸~ngeqslant~⩾̸~nges~⩾̸~ngsim~≵~ngt~≯~ngtr~≯~nhArr~⇎~nharr~↮~nhpar~⫲~nis~⋼~nisd~⋺~niv~∋~njcy~њ~nlArr~⇍~nlE~≦̸~nlarr~↚~nldr~‥~nle~≰~nleftarrow~↚~nleftrightarrow~↮~nleq~≰~nleqq~≦̸~nleqslant~⩽̸~nles~⩽̸~nless~≮~nlsim~≴~nlt~≮~nltri~⋪~nltrie~⋬~nmid~∤~nopf~𝕟~notinE~⋹̸~notindot~⋵̸~notinva~∉~notinvb~⋷~notinvc~⋶~notni~∌~notniva~∌~notnivb~⋾~notnivc~⋽~npar~∦~nparallel~∦~nparsl~⫽⃥~npart~∂̸~npolint~⨔~npr~⊀~nprcue~⋠~npre~⪯̸~nprec~⊀~npreceq~⪯̸~nrArr~⇏~nrarr~↛~nrarrc~⤳̸~nrarrw~↝̸~nrightarrow~↛~nrtri~⋫~nrtrie~⋭~nsc~⊁~nsccue~⋡~nsce~⪰̸~nscr~𝓃~nshortmid~∤~nshortparallel~∦~nsim~≁~nsime~≄~nsimeq~≄~nsmid~∤~nspar~∦~nsqsube~⋢~nsqsupe~⋣~nsubE~⫅̸~nsube~⊈~nsubset~⊂⃒~nsubseteq~⊈~nsubseteqq~⫅̸~nsucc~⊁~nsucceq~⪰̸~nsup~⊅~nsupE~⫆̸~nsupe~⊉~nsupset~⊃⃒~nsupseteq~⊉~nsupseteqq~⫆̸~ntgl~≹~ntlg~≸~ntriangleleft~⋪~ntrianglelefteq~⋬~ntriangleright~⋫~ntrianglerighteq~⋭~num~#~numero~№~numsp~ ~nvDash~⊭~nvHarr~⤄~nvap~≍⃒~nvdash~⊬~nvge~≥⃒~nvgt~>⃒~nvinfin~⧞~nvlArr~⤂~nvle~≤⃒~nvlt~<⃒~nvltrie~⊴⃒~nvrArr~⤃~nvrtrie~⊵⃒~nvsim~∼⃒~nwArr~⇖~nwarhk~⤣~nwarr~↖~nwarrow~↖~nwnear~⤧~oS~Ⓢ~oast~⊛~ocir~⊚~ocy~о~odash~⊝~odblac~ő~odiv~⨸~odot~⊙~odsold~⦼~ofcir~⦿~ofr~𝔬~ogon~˛~ogt~⧁~ohbar~⦵~ohm~Ω~oint~∮~olarr~↺~olcir~⦾~olcross~⦻~olt~⧀~omacr~ō~omid~⦶~ominus~⊖~oopf~𝕠~opar~⦷~operp~⦹~orarr~↻~ord~⩝~order~ℴ~orderof~ℴ~origof~⊶~oror~⩖~orslope~⩗~orv~⩛~oscr~ℴ~osol~⊘~otimesas~⨶~ovbar~⌽~par~∥~parallel~∥~parsim~⫳~parsl~⫽~pcy~п~percnt~%~period~.~pertenk~‱~pfr~𝔭~phiv~ϕ~phmmat~ℳ~phone~☎~pitchfork~⋔~planck~ℏ~planckh~ℎ~plankv~ℏ~plus~+~plusacir~⨣~plusb~⊞~pluscir~⨢~plusdo~∔~plusdu~⨥~pluse~⩲~plussim~⨦~plustwo~⨧~pm~±~pointint~⨕~popf~𝕡~pr~≺~prE~⪳~prap~⪷~prcue~≼~pre~⪯~prec~≺~precapprox~⪷~preccurlyeq~≼~preceq~⪯~precnapprox~⪹~precneqq~⪵~precnsim~⋨~precsim~≾~primes~ℙ~prnE~⪵~prnap~⪹~prnsim~⋨~profalar~⌮~profline~⌒~profsurf~⌓~propto~∝~prsim~≾~prurel~⊰~pscr~𝓅~puncsp~ ~qfr~𝔮~qint~⨌~qopf~𝕢~qprime~⁗~qscr~𝓆~quaternions~ℍ~quatint~⨖~quest~?~questeq~≟~rAarr~⇛~rAtail~⤜~rBarr~⤏~rHar~⥤~race~∽̱~racute~ŕ~raemptyv~⦳~rangd~⦒~range~⦥~rangle~⟩~rarrap~⥵~rarrb~⇥~rarrbfs~⤠~rarrc~⤳~rarrfs~⤞~rarrhk~↪~rarrlp~↬~rarrpl~⥅~rarrsim~⥴~rarrtl~↣~rarrw~↝~ratail~⤚~ratio~∶~rationals~ℚ~rbarr~⤍~rbbrk~❳~rbrace~}~rbrack~]~rbrke~⦌~rbrksld~⦎~rbrkslu~⦐~rcaron~ř~rcedil~ŗ~rcub~}~rcy~р~rdca~⤷~rdldhar~⥩~rdquor~”~rdsh~↳~realine~ℛ~realpart~ℜ~reals~ℝ~rect~▭~rfisht~⥽~rfr~𝔯~rhard~⇁~rharu~⇀~rharul~⥬~rhov~ϱ~rightarrow~→~rightarrowtail~↣~rightharpoondown~⇁~rightharpoonup~⇀~rightleftarrows~⇄~rightleftharpoons~⇌~rightrightarrows~⇉~rightsquigarrow~↝~rightthreetimes~⋌~ring~˚~risingdotseq~≓~rlarr~⇄~rlhar~⇌~rmoust~⎱~rmoustache~⎱~rnmid~⫮~roang~⟭~roarr~⇾~robrk~⟧~ropar~⦆~ropf~𝕣~roplus~⨮~rotimes~⨵~rpar~)~rpargt~⦔~rppolint~⨒~rrarr~⇉~rscr~𝓇~rsh~↱~rsqb~]~rsquor~’~rthree~⋌~rtimes~⋊~rtri~▹~rtrie~⊵~rtrif~▸~rtriltri~⧎~ruluhar~⥨~rx~℞~sacute~ś~sc~≻~scE~⪴~scap~⪸~sccue~≽~sce~⪰~scedil~ş~scirc~ŝ~scnE~⪶~scnap~⪺~scnsim~⋩~scpolint~⨓~scsim~≿~scy~с~sdotb~⊡~sdote~⩦~seArr~⇘~searhk~⤥~searr~↘~searrow~↘~semi~;~seswar~⤩~setminus~∖~setmn~∖~sext~✶~sfr~𝔰~sfrown~⌢~sharp~♯~shchcy~щ~shcy~ш~shortmid~∣~shortparallel~∥~sigmav~ς~simdot~⩪~sime~≃~simeq~≃~simg~⪞~simgE~⪠~siml~⪝~simlE~⪟~simne~≆~simplus~⨤~simrarr~⥲~slarr~←~smallsetminus~∖~smashp~⨳~smeparsl~⧤~smid~∣~smile~⌣~smt~⪪~smte~⪬~smtes~⪬︀~softcy~ь~sol~/~solb~⧄~solbar~⌿~sopf~𝕤~spadesuit~♠~spar~∥~sqcap~⊓~sqcaps~⊓︀~sqcup~⊔~sqcups~⊔︀~sqsub~⊏~sqsube~⊑~sqsubset~⊏~sqsubseteq~⊑~sqsup~⊐~sqsupe~⊒~sqsupset~⊐~sqsupseteq~⊒~squ~□~square~□~squarf~▪~squf~▪~srarr~→~sscr~𝓈~ssetmn~∖~ssmile~⌣~sstarf~⋆~star~☆~starf~★~straightepsilon~ϵ~straightphi~ϕ~strns~¯~subE~⫅~subdot~⪽~subedot~⫃~submult~⫁~subnE~⫋~subne~⊊~subplus~⪿~subrarr~⥹~subset~⊂~subseteq~⊆~subseteqq~⫅~subsetneq~⊊~subsetneqq~⫋~subsim~⫇~subsub~⫕~subsup~⫓~succ~≻~succapprox~⪸~succcurlyeq~≽~succeq~⪰~succnapprox~⪺~succneqq~⪶~succnsim~⋩~succsim~≿~sung~♪~supE~⫆~supdot~⪾~supdsub~⫘~supedot~⫄~suphsol~⟉~suphsub~⫗~suplarr~⥻~supmult~⫂~supnE~⫌~supne~⊋~supplus~⫀~supset~⊃~supseteq~⊇~supseteqq~⫆~supsetneq~⊋~supsetneqq~⫌~supsim~⫈~supsub~⫔~supsup~⫖~swArr~⇙~swarhk~⤦~swarr~↙~swarrow~↙~swnwar~⤪~target~⌖~tbrk~⎴~tcaron~ť~tcedil~ţ~tcy~т~tdot~⃛~telrec~⌕~tfr~𝔱~therefore~∴~thetav~ϑ~thickapprox~≈~thicksim~∼~thkap~≈~thksim~∼~timesb~⊠~timesbar~⨱~timesd~⨰~tint~∭~toea~⤨~top~⊤~topbot~⌶~topcir~⫱~topf~𝕥~topfork~⫚~tosa~⤩~tprime~‴~triangle~▵~triangledown~▿~triangleleft~◃~trianglelefteq~⊴~triangleq~≜~triangleright~▹~trianglerighteq~⊵~tridot~◬~trie~≜~triminus~⨺~triplus~⨹~trisb~⧍~tritime~⨻~trpezium~⏢~tscr~𝓉~tscy~ц~tshcy~ћ~tstrok~ŧ~twixt~≬~twoheadleftarrow~↞~twoheadrightarrow~↠~uHar~⥣~ubrcy~ў~ubreve~ŭ~ucy~у~udarr~⇅~udblac~ű~udhar~⥮~ufisht~⥾~ufr~𝔲~uharl~↿~uharr~↾~uhblk~▀~ulcorn~⌜~ulcorner~⌜~ulcrop~⌏~ultri~◸~umacr~ū~uogon~ų~uopf~𝕦~uparrow~↑~updownarrow~↕~upharpoonleft~↿~upharpoonright~↾~uplus~⊎~upsi~υ~upuparrows~⇈~urcorn~⌝~urcorner~⌝~urcrop~⌎~uring~ů~urtri~◹~uscr~𝓊~utdot~⋰~utilde~ũ~utri~▵~utrif~▴~uuarr~⇈~uwangle~⦧~vArr~⇕~vBar~⫨~vBarv~⫩~vDash~⊨~vangrt~⦜~varepsilon~ϵ~varkappa~ϰ~varnothing~∅~varphi~ϕ~varpi~ϖ~varpropto~∝~varr~↕~varrho~ϱ~varsigma~ς~varsubsetneq~⊊︀~varsubsetneqq~⫋︀~varsupsetneq~⊋︀~varsupsetneqq~⫌︀~vartheta~ϑ~vartriangleleft~⊲~vartriangleright~⊳~vcy~в~vdash~⊢~vee~∨~veebar~⊻~veeeq~≚~vellip~⋮~verbar~|~vert~|~vfr~𝔳~vltri~⊲~vnsub~⊂⃒~vnsup~⊃⃒~vopf~𝕧~vprop~∝~vrtri~⊳~vscr~𝓋~vsubnE~⫋︀~vsubne~⊊︀~vsupnE~⫌︀~vsupne~⊋︀~vzigzag~⦚~wcirc~ŵ~wedbar~⩟~wedge~∧~wedgeq~≙~wfr~𝔴~wopf~𝕨~wp~℘~wr~≀~wreath~≀~wscr~𝓌~xcap~⋂~xcirc~◯~xcup~⋃~xdtri~▽~xfr~𝔵~xhArr~⟺~xharr~⟷~xlArr~⟸~xlarr~⟵~xmap~⟼~xnis~⋻~xodot~⨀~xopf~𝕩~xoplus~⨁~xotime~⨂~xrArr~⟹~xrarr~⟶~xscr~𝓍~xsqcup~⨆~xuplus~⨄~xutri~△~xvee~⋁~xwedge~⋀~yacy~я~ycirc~ŷ~ycy~ы~yfr~𝔶~yicy~ї~yopf~𝕪~yscr~𝓎~yucy~ю~zacute~ź~zcaron~ž~zcy~з~zdot~ż~zeetrf~ℨ~zfr~𝔷~zhcy~ж~zigrarr~⇝~zopf~𝕫~zscr~𝓏~~AMP~&~COPY~©~GT~>~LT~<~QUOT~"~REG~®', co.html4);
var bo = function() {
  return bo = Object.assign || function(i) {
    for (var o, e = 1, n = arguments.length; e < n; e++) {
      o = arguments[e];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (i[a] = o[a]);
    }
    return i;
  }, bo.apply(this, arguments);
};
bo(bo({}, co), { all: co.html5 });
var qe = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
var Ue = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
var Qu = { xml: { strict: qe, attribute: Ue, body: Ie.xml }, html4: { strict: qe, attribute: Ue, body: Ie.html4 }, html5: { strict: qe, attribute: Ue, body: Ie.html5 } };
bo(bo({}, Qu), { all: Qu.html5 });
qu();
const xu = (i, o) => Object.hasOwn(i, o);
const Ve = (i, o) => Object.assign(i, o);
const on = (i, o, e) => {
  if (i.length === 0) return [];
  let n = 0;
  const a = hs.exec(i[0]);
  a && (n = a[1].length);
  const u = String.raw`(\r\n|\r|\n).{0,${n}}`, t = new RegExp(u, "g"), d = o ? i.slice(1) : i, { newline: g, trimLeadingNewline: h, trimTrailingNewline: l } = e, r = typeof g == "string", v = d.length, y = Array.from({ length: v });
  for (let c = 0; c < v; c++) {
    let b = d[c];
    b = b.replace(t, "$1"), c === 0 && h && (b = b.replace(ds, "")), c === v - 1 && l && (b = b.replace(gs, "")), r && (b = b.replaceAll(ls, g)), y[c] = b;
  }
  return y;
};
const y1 = (i, o) => {
  const e = Array.from({ length: i.length + o.length });
  let n = 0;
  const a = i.length;
  for (; n < a - 1; n++) e[n * 2] = i[n], e[n * 2 + 1] = String(o[n]);
  return e[n * 2] = i[n], e.join("");
};
const c1 = (i) => xu(i, "raw") && xu(i, "length");
const b1 = /* @__PURE__ */ new WeakMap();
const wg = (i) => {
  const o = i.cache !== false, e = o ? i.cacheStore ?? b1 : void 0, n = i.newline !== void 0;
  function a(u, ...t) {
    if (c1(u)) {
      const d = u, g = t.length;
      if (d.length === 1 && d[0] === "") return "";
      if (g === 0) {
        if (o && e && !n) {
          const v = e.get(d);
          if (v) return v[0];
        }
        const r = on(d, false, i);
        return o && e && e.set(d, r), r[0];
      }
      const h = (t[0] === a || t[0] === p1) && rs.test(d[0]) && ss.test(d[1]);
      let l;
      return o && e && !n && (l = e.get(d)), l || (l = on(d, h, i), o && e && e.set(d, l)), y1(l, h ? t.slice(1) : t);
    }
    return wg(Ve(Ve({}, i), u));
  }
  return Ve(a, { string(u) {
    return u === "" || !u ? "" : on([u], false, i)[0];
  } });
};
const p1 = wg({ cache: true, newline: null, trimLeadingNewline: true, trimTrailingNewline: true });
const w1 = ["\0", "", "", "", "", "", "", "\x07", "\b", "	", `
`, "\v", "\f", "\r", "", "", "", "", "", "", "", "", "", "", "", "", "", "\x1B", "", "", "", "", " ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, " ", "!", "C/", "PS", "$?", "Y=", "|", "SS", '"', "(c)", "a", "<<", "!", void 0, "(r)", "-", "deg", "+-", "2", "3", "'", "u", "P", "*", ",", "1", "o", ">>", "1/4", "1/2", "3/4", "?", "A", "A", "A", "A", "Ae", "Aa", "AE", "C", "E", "E", "E", "E", "I", "I", "I", "I", "D", "N", "O", "O", "O", "O", "Oe", "x", "Oe", "U", "U", "U", "Ue", "U", "Th", "ss", "a", "a", "a", "a", "ae", "aa", "ae", "c", "e", "e", "e", "e", "i", "i", "i", "i", "d", "n", "o", "o", "o", "o", "oe", "/", "oe", "u", "u", "u", "ue", "y", "th", "y"];
const j1 = Object.freeze(w1);
const f1 = ["A", "a", "A", "a", "A", "a", "C", "c", "C", "c", "C", "c", "C", "c", "D", "d", "D", "d", "E", "e", "E", "e", "E", "e", "E", "e", "E", "e", "G", "g", "G", "g", "G", "g", "G", "g", "H", "h", "H", "h", "I", "i", "I", "i", "I", "i", "I", "i", "I", "i", "IJ", "ij", "J", "j", "K", "k", "k", "L", "l", "L", "l", "L", "l", "L", "l", "L", "l", "N", "n", "N", "n", "N", "n", "'n", "NG", "ng", "O", "o", "O", "o", "O", "o", "OE", "oe", "R", "r", "R", "r", "R", "r", "S", "s", "S", "s", "S", "s", "S", "s", "T", "t", "T", "t", "T", "t", "U", "u", "U", "u", "U", "u", "U", "u", "U", "u", "U", "u", "W", "w", "Y", "y", "Y", "Z", "z", "Z", "z", "Z", "z", "s", "b", "B", "B", "b", "6", "6", "O", "C", "c", "D", "D", "D", "d", "d", "3", "@", "E", "F", "f", "G", "G", "hv", "I", "I", "K", "k", "l", "l", "W", "N", "n", "O", "O", "o", "OI", "oi", "P", "p", "YR", "2", "2", "SH", "sh", "t", "T", "t", "T", "U", "u", "Y", "V", "Y", "y", "Z", "z", "ZH", "ZH", "zh", "zh", "2", "5", "5", "ts", "w", "|", "||", "|=", "!", "DZ", "Dz", "dz", "LJ", "Lj", "lj", "NJ", "Nj", "nj", "A", "a", "I", "i", "O", "o", "U", "u", "U", "u", "U", "u", "U", "u", "U", "u", "@", "A", "a", "A", "a", "AE", "ae", "G", "g", "G", "g", "K", "k", "O", "o", "O", "o", "ZH", "zh", "j", "DZ", "D", "dz", "G", "g", "HV", "W", "N", "n", "A", "a", "AE", "ae", "O", "o"];
const m1 = Object.freeze(f1);
const Y1 = ["A", "a", "A", "a", "E", "e", "E", "e", "I", "i", "I", "i", "O", "o", "O", "o", "R", "r", "R", "r", "U", "u", "U", "u", "S", "s", "T", "t", "Y", "y", "H", "h", "N", "d", "OU", "ou", "Z", "z", "A", "a", "E", "e", "O", "o", "O", "o", "O", "o", "O", "o", "Y", "y", "l", "n", "t", "j", "db", "qp", "A", "C", "c", "L", "T", "s", "z", "?", "?", "B", "U", "V", "E", "e", "J", "j", "Q", "q", "R", "r", "Y", "y", "a", "a", "a", "b", "o", "c", "d", "d", "e", "@", "@", "e", "e", "e", "e", "j", "g", "g", "g", "g", "u", "Y", "h", "h", "i", "i", "I", "l", "l", "l", "lZ", "W", "W", "m", "n", "n", "n", "o", "OE", "O", "F", "R", "R", "R", "R", "r", "r", "R", "R", "R", "s", "S", "j", "S", "S", "t", "t", "U", "U", "v", "^", "W", "Y", "Y", "z", "z", "Z", "Z", "?", "?", "?", "C", "@", "B", "E", "G", "H", "j", "k", "L", "q", "?", "?", "dz", "dZ", "dz", "ts", "tS", "tC", "fN", "ls", "lz", "WW", "]]", "h", "h", "k", "h", "j", "r", "r", "r", "r", "w", "y", "'", '"', "`", "'", "`", "`", "'", "?", "?", "<", ">", "^", "V", "^", "V", "'", "-", "/", "\\", ",", "_", "\\", "/", ":", ".", "`", "'", "^", "V", "+", "-", "V", ".", "@", ",", "~", '"', "R", "X", "G", "l", "s", "x", "?", void 0, void 0, void 0, void 0, void 0, void 0, void 0, "V", "=", '"', void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const k1 = Object.freeze(Y1);
const L1 = [void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "'", ",", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "?", void 0, void 0, void 0, void 0, void 0, void 0, void 0, "A", ";", "E", "I", "I", void 0, "O", void 0, "U", "O", "I", "A", "V", "G", "D", "E", "Z", "I", "Th", "I", "K", "L", "M", "N", "KS", "O", "P", "R", void 0, "S", "T", "Y", "F", "H", "Ps", "O", "I", "Y", "a", "e", "i", "i", "y", "a", "v", "g", "d", "e", "z", "i", "th", "i", "k", "l", "m", "n", "x", "o", "p", "r", "s", "s", "t", "y", "f", "h", "ps", "o", "i", "y", "o", "y", "o", void 0, "b", "th", "U", "U", "U", "ph", "p", "&", void 0, void 0, "St", "st", "W", "w", "Q", "q", "Sp", "sp", "Sh", "sh", "F", "f", "Kh", "kh", "H", "h", "G", "g", "CH", "ch", "Ti", "ti", "k", "r", "c", "j", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const Z1 = Object.freeze(L1);
const S1 = ["Jo", "Yo", "Dj", "Gj", "Ye", "Dz", "I", "Yi", "J", "Lj", "Nj", "Tsh", "Kj", "I", "U", "Dzh", "A", "B", "V", "G", "D", "E", "Zh", "Z", "I", "Y", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "F", "H", "C", "Ch", "Sh", "Shch", void 0, "Y", void 0, "E", "Yu", "Ya", "a", "b", "v", "g", "d", "e", "zh", "z", "i", "y", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "f", "h", "c", "ch", "sh", "shch", void 0, "y", void 0, "e", "yu", "ya", "je", "yo", "dj", "gj", "ie", "dz", "i", "yi", "j", "lj", "nj", "tsh", "kj", "i", "u", "dz", "O", "o", "E", "e", "Ie", "ie", "E", "e", "Ie", "ie", "O", "o", "Io", "io", "Ks", "ks", "Ps", "ps", "F", "f", "Y", "y", "Y", "y", "u", "u", "O", "o", "O", "o", "Ot", "ot", "Q", "q", "*1000*", void 0, void 0, void 0, void 0, void 0, "*100.000*", "*1.000.000*", void 0, void 0, '"', '"', "R'", "r'", "G", "g'", "G'", "g'", "G'", "g'", "Zh'", "zh'", "Z'", "z'", "K'", "k'", "K'", "k'", "K'", "k'", "K'", "k'", "N'", "n'", "Ng", "ng", "P'", "p'", "Kh", "kh", "S'", "s'", "T'", "t'", "U", "u", "U'", "u'", "Kh'", "kh'", "Tts", "tts", "Ch'", "ch'", "Ch'", "ch'", "H", "h", "Ch", "ch", "Ch'", "ch'", "`", "Zh", "zh", "K'", "k'", void 0, void 0, "N'", "n'", void 0, void 0, "Ch", "ch", void 0, void 0, void 0, "a", "a", "A", "a", "Ae", "ae", "Ie", "ie", "@", "@", "@", "@", "Zh", "zh", "Z", "z", "Dz", "dz", "I", "i", "I", "i", "O", "o", "O", "o", "O", "o", "E", "e", "U", "u", "U", "u", "U", "u", "Ch", "ch", void 0, void 0, "Y", "y", void 0, void 0, void 0, void 0, void 0, void 0];
const J1 = Object.freeze(S1);
const C1 = [void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "A", "B", "G", "D", "Ye", "Z", "E", "E", "T`", "Zh", "I", "L", "Kh", "Ts", "K", "H", "Dz", "Gh", "Ch", "M", "Y", "N", "Sh", "O", "Ch`", "P", "J", "Rh", "S", "V", "T", "R", "Ts`", "W", "P`", "K`", "O", "F", void 0, void 0, "<", "'", "/", "!", ",", "?", ".", void 0, "a", "b", "g", "d", "e", "z", "e", "e", "t`", "zh", "i", "l", "kh", "ts", "k", "h", "dz", "gh", "ch", "m", "y", "n", "sh", "o", "ch`", "p", "j", "rh", "s", "v", "t", "r", "ts`", "w", "p`", "k`", "o", "f", "yev", void 0, ".", "-", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "@", "e", "a", "o", "i", "e", "e", "a", "a", "o", void 0, "u", "'", void 0, void 0, void 0, void 0, void 0, void 0, ":", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "b", "g", "d", "h", "v", "z", "kh", "t", "y", "k", "k", "l", "m", "m", "n", "n", "s", "`", "p", "p", "ts", "ts", "q", "r", "sh", "t", void 0, void 0, void 0, void 0, void 0, "V", "oy", "i", "'", '"', void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const X1 = Object.freeze(C1);
const H1 = [void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, ",", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, ";", void 0, void 0, void 0, "?", void 0, void 0, "a", "'", "w'", void 0, "y'", void 0, "b", "@", "t", "th", "j", "H", "kh", "d", "dh", "r", "z", "s", "sh", "S", "D", "T", "Z", "aa", "G", void 0, void 0, void 0, void 0, void 0, void 0, "f", "q", "k", "l", "m", "n", "h", "w", "~", "y", "an", "un", "in", "a", "u", "i", "W", void 0, void 0, "'", "'", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "%", ".", ",", "*", void 0, void 0, void 0, "'", "'", "'", void 0, "'", "'w", "'u", "'y", "t", "tth", "b", "t", "T", "p", "th", "bh", "'h", "H", "ny", "dy", "c", "ch", "cch", "d", "D", "D", "Dt", "dh", "ddh", "d", "D", "D", "rr", "R", "r", "R", "R", "R", "R", "j", "R", "S", "S", "S", "S", "S", "T", "GH", "F", "F", "F", "v", "f", "ph", "Q", "Q", "kh", "k", "g", "K", "ng", "K", "g", "G", "N", "G", "G", "G", "L", "L", "L", "L", "N", "N", "N", "N", "N", "h", "Ch", "hy", "h", "H", "@", "W", "oe", "oe", "u", "yu", "yu", "W", "v", "y", "Y", "Y", "W", void 0, void 0, "y", "y'", ".", "ae", void 0, void 0, void 0, void 0, void 0, void 0, void 0, "@", "#", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "^", void 0, void 0, void 0, void 0, void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Sh", "D", "Gh", "&", "+m", void 0];
const B1 = Object.freeze(H1);
const T1 = ["//", "/", ",", "!", "!", "-", ",", ",", ";", "?", "~", "{", "}", "*", void 0, void 0, "'", void 0, "b", "g", "g", "d", "d", "h", "w", "z", "H", "t", "t", "y", "yh", "k", "l", "m", "n", "s", "s", "`", "p", "p", "S", "q", "r", "sh", "t", void 0, void 0, void 0, "a", "a", "a", "A", "A", "A", "e", "e", "e", "E", "i", "i", "u", "u", "u", "o", void 0, "`", "'", void 0, void 0, "X", "Q", "@", "@", "|", "+", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "h", "sh", "n", "r", "b", "L", "k", "'", "v", "m", "f", "dh", "th", "l", "g", "ny", "s", "d", "z", "t", "y", "p", "j", "ch", "tt", "hh", "kh", "th", "z", "sh", "s", "d", "t", "z", "`", "gh", "q", "w", "a", "aa", "i", "ee", "u", "oo", "e", "ey", "o", "oa", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const D1 = Object.freeze(T1);
const M1 = [void 0, "N", "N", "H", void 0, "a", "aa", "i", "ii", "u", "uu", "R", "L", "eN", "e", "e", "ai", "oN", "o", "o", "au", "k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", "nnn", "p", "ph", "b", "bh", "m", "y", "r", "rr", "l", "l", "lll", "v", "sh", "ss", "s", "h", void 0, void 0, "'", "'", "aa", "i", "ii", "u", "uu", "R", "RR", "eN", "e", "e", "ai", "oN", "o", "o", "au", void 0, void 0, void 0, "AUM", "'", "'", "`", "'", void 0, void 0, void 0, "q", "khh", "ghh", "z", "dddh", "rh", "f", "yy", "RR", "LL", "L", "LL", " / ", " // ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "N", "N", "H", void 0, "a", "aa", "i", "ii", "u", "uu", "R", "RR", void 0, void 0, "e", "ai", void 0, void 0, "o", "au", "k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", void 0, "p", "ph", "b", "bh", "m", "y", "r", void 0, "l", void 0, void 0, void 0, "sh", "ss", "s", "h", void 0, void 0, "'", void 0, "aa", "i", "ii", "u", "uu", "R", "RR", void 0, void 0, "e", "ai", void 0, void 0, "o", "au", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "+", void 0, void 0, void 0, void 0, "rr", "rh", void 0, "yy", "RR", "LL", "L", "LL", void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "r'", "r`", "Rs", "Rs", "1/", "2/", "3/", "4/", " 1 - 1/", "/16", void 0, void 0, void 0, void 0, void 0, void 0];
const Q1 = Object.freeze(M1);
const x1 = [void 0, void 0, "N", void 0, void 0, "a", "aa", "i", "ii", "u", "uu", void 0, void 0, void 0, void 0, "ee", "ai", void 0, void 0, "oo", "au", "k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", void 0, "p", "ph", "b", "bb", "m", "y", "r", void 0, "l", "ll", void 0, "v", "sh", void 0, "s", "h", void 0, void 0, "'", void 0, "aa", "i", "ii", "u", "uu", void 0, void 0, void 0, void 0, "ee", "ai", void 0, void 0, "oo", "au", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "khh", "ghh", "z", "rr", void 0, "f", void 0, void 0, void 0, void 0, void 0, void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "N", "H", void 0, void 0, "G.E.O.", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "N", "N", "H", void 0, "a", "aa", "i", "ii", "u", "uu", "R", void 0, "eN", void 0, "e", "ai", "oN", void 0, "o", "au", "k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", void 0, "p", "ph", "b", "bh", "m", "ya", "r", void 0, "l", "ll", void 0, "v", "sh", "ss", "s", "h", void 0, void 0, "'", "'", "aa", "i", "ii", "u", "uu", "R", "RR", "eN", void 0, "e", "ai", "oN", void 0, "o", "au", void 0, void 0, void 0, "AUM", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "RR", void 0, void 0, void 0, void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const G1 = Object.freeze(x1);
const W1 = [void 0, "N", "N", "H", void 0, "a", "aa", "i", "ii", "u", "uu", "R", "L", void 0, void 0, "e", "ai", void 0, void 0, "o", "au", "k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", void 0, "p", "ph", "b", "bh", "m", "y", "r", void 0, "l", "ll", void 0, void 0, "sh", "ss", "s", "h", void 0, void 0, "'", "'", "aa", "i", "ii", "u", "uu", "R", void 0, void 0, void 0, "e", "ai", void 0, void 0, "o", "au", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "+", "+", void 0, void 0, void 0, void 0, "rr", "rh", void 0, "yy", "RR", "LL", void 0, void 0, void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "N", "H", void 0, "a", "aa", "i", "ii", "u", "uu", void 0, void 0, void 0, "e", "ee", "ai", void 0, "o", "oo", "au", "ka", void 0, void 0, void 0, "ng", "c", void 0, "j", void 0, "ny", "tt", void 0, void 0, void 0, "nn", "t", void 0, void 0, void 0, "n", "nn", "p", void 0, void 0, void 0, "m", "y", "r", "rr", "l", "ll", "lll", "v", void 0, "ss", "s", "h", void 0, void 0, void 0, void 0, "aa", "i", "ii", "u", "uu", void 0, void 0, void 0, "e", "ee", "ai", void 0, "o", "oo", "au", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "+", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+10+", "+100+", "+1000+", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const N1 = Object.freeze(W1);
const P1 = [void 0, "N", "N", "H", void 0, "a", "aa", "i", "ii", "u", "uu", "R", "L", void 0, "e", "ee", "ai", void 0, "o", "oo", "au", "k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", void 0, "p", "ph", "b", "bh", "m", "y", "r", "rr", "l", "ll", void 0, "v", "sh", "ss", "s", "h", void 0, void 0, void 0, void 0, "aa", "i", "ii", "u", "uu", "R", "RR", void 0, "e", "ee", "ai", void 0, "o", "oo", "au", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "+", "+", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "RR", "LL", void 0, void 0, void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "N", "H", void 0, "a", "aa", "i", "ii", "u", "uu", "R", "L", void 0, "e", "ee", "ai", void 0, "o", "oo", "au", "k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", void 0, "p", "ph", "b", "bh", "m", "y", "r", "rr", "l", "ll", void 0, "v", "sh", "ss", "s", "h", void 0, void 0, void 0, void 0, "aa", "i", "ii", "u", "uu", "R", "RR", void 0, "e", "ee", "ai", void 0, "o", "oo", "au", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "+", "+", void 0, void 0, void 0, void 0, void 0, void 0, void 0, "lll", void 0, "RR", "LL", void 0, void 0, void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const F1 = Object.freeze(P1);
const R1 = [void 0, void 0, "N", "H", void 0, "a", "aa", "i", "ii", "u", "uu", "R", "L", void 0, "e", "ee", "ai", void 0, "o", "oo", "au", "k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", void 0, "p", "ph", "b", "bh", "m", "y", "r", "rr", "l", "ll", "lll", "v", "sh", "ss", "s", "h", void 0, void 0, void 0, void 0, "aa", "i", "ii", "u", "uu", "R", void 0, void 0, "e", "ee", "ai", void 0, "o", "oo", "au", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "+", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "RR", "LL", void 0, void 0, void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "N", "H", void 0, "a", "aa", "ae", "aae", "i", "ii", "u", "uu", "R", "RR", "L", "LL", "e", "ee", "ai", "o", "oo", "au", void 0, void 0, void 0, "k", "kh", "g", "gh", "ng", "nng", "c", "ch", "j", "jh", "ny", "jny", "nyj", "tt", "tth", "dd", "ddh", "nn", "nndd", "t", "th", "d", "dh", "n", void 0, "nd", "p", "ph", "b", "bh", "m", "mb", "y", "r", void 0, "l", void 0, void 0, "v", "sh", "ss", "s", "h", "ll", "f", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "aa", "ae", "aae", "i", "ii", "u", void 0, "uu", void 0, "R", "e", "ee", "ai", "o", "oo", "au", "L", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "RR", "LL", " . ", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const K1 = Object.freeze(R1);
const A1 = [void 0, "k", "kh", "kh", "kh", "kh", "kh", "ng", "cch", "ch", "ch", "ch", "ch", "y", "d", "t", "th", "th", "th", "n", "d", "t", "th", "th", "th", "n", "b", "p", "ph", "f", "ph", "f", "ph", void 0, void 0, "r", "R", "l", "L", "w", "s", "s", "s", void 0, "l", "`", "h", "~", "a", "a", "aa", "am", "i", "ia", "ue", "uue", "u", "uu", "'", void 0, void 0, void 0, void 0, "Bh.", void 0, "ae", "o", "mai", "ai", "ao", "+", void 0, void 0, void 0, void 0, void 0, void 0, "M", void 0, " * ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " // ", " /// ", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "k", "kh", void 0, "kh", void 0, void 0, "ng", "ch", void 0, "s", void 0, void 0, "ny", void 0, void 0, void 0, void 0, void 0, void 0, "d", "h", "th", "th", void 0, "n", "b", "p", "ph", "f", "ph", "f", void 0, "m", "y", "r", void 0, "l", void 0, "w", void 0, void 0, "s", "h", void 0, "`", void 0, "~", "a", void 0, "aa", "am", "i", "ii", "y", "yy", "u", "uu", void 0, "o", "l", "ny", void 0, void 0, "e", "ei", "o", "ay", "ai", void 0, "+", void 0, void 0, void 0, void 0, void 0, void 0, "M", void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", void 0, void 0, "hn", "hm", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const O1 = Object.freeze(A1);
const _1 = ["AUM", void 0, void 0, void 0, void 0, void 0, void 0, void 0, " // ", " * ", void 0, "-", " / ", " / ", " // ", " -/ ", " +/ ", " X/ ", " /XX/ ", " /X/ ", ",", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".5", "1.5", "2.5", "3.5", "4.5", "5.5", "6.5", "7.5", "8.5", "-.5", "+", "*", "^", "_", void 0, "~", void 0, "]", "[[", "]]", void 0, void 0, "k", "kh", "g", "gh", "ng", "c", "ch", "j", void 0, "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", "p", "ph", "b", "bh", "m", "ts", "tsh", "dz", "dzh", "w", "zh", "z", "'", "y", "r", "l", "sh", "ssh", "s", "h", "a", "kss", "r", void 0, void 0, void 0, void 0, void 0, void 0, "aa", "i", "ii", "u", "uu", "R", "RR", "L", "LL", "e", "ee", "o", "oo", "M", "H", "i", "ii", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "k", "kh", "g", "gh", "ng", "c", "ch", "j", void 0, "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", "p", "ph", "b", "bh", "m", "ts", "tsh", "dz", "dzh", "w", "zh", "z", "'", "y", "r", "l", "sh", "ss", "s", "h", "a", "kss", "w", "y", "r", void 0, "X", " :X: ", " /O/ ", " /o/ ", " \\o\\ ", " (O) ", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const E1 = Object.freeze(_1);
const z1 = ["k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "nny", "tt", "tth", "dd", "ddh", "nn", "tt", "th", "d", "dh", "n", "p", "ph", "b", "bh", "m", "y", "r", "l", "w", "s", "h", "ll", "a", void 0, "i", "ii", "u", "uu", "e", void 0, "o", "au", void 0, "aa", "i", "ii", "u", "uu", "e", "ai", void 0, void 0, void 0, "N", "'", ":", void 0, void 0, void 0, void 0, void 0, void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " / ", " // ", "n*", "r*", "l*", "e*", "sh", "ss", "R", "RR", "L", "LL", "R", "RR", "L", "LL", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "A", "B", "G", "D", "E", "V", "Z", "T`", "I", "K", "L", "M", "N", "O", "P", "Zh", "R", "S", "T", "U", "P`", "K`", "G'", "Q", "Sh", "Ch`", "C`", "Z'", "C", "Ch", "X", "J", "H", "E", "Y", "W", "Xh", "OE", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "a", "b", "g", "d", "e", "v", "z", "t", "i", "k", "l", "m", "n", "o", "p", "zh", "r", "s", "t", "u", "p`", "k`", "gh", "q", "sh", "ch`", "c`", "z'", "c", "ch", "x", "j", "h", "e", "y", "w", "xh", "oe", "f", void 0, void 0, void 0, void 0, " // ", void 0, void 0, void 0, void 0];
const $1 = Object.freeze(z1);
const I1 = ["g", "gg", "n", "d", "dd", "r", "m", "b", "bb", "s", "ss", void 0, "j", "jj", "c", "k", "t", "p", "h", "ng", "nn", "nd", "nb", "dg", "rn", "rr", "rh", "rN", "mb", "mN", "bg", "bn", void 0, "bs", "bsg", "bst", "bsb", "bss", "bsj", "bj", "bc", "bt", "bp", "bN", "bbN", "sg", "sn", "sd", "sr", "sm", "sb", "sbg", "sss", "s", "sj", "sc", "sk", "st", "sp", "sh", void 0, void 0, void 0, void 0, "Z", "g", "d", "m", "b", "s", "Z", void 0, "j", "c", "t", "p", "N", "j", void 0, void 0, void 0, void 0, "ck", "ch", void 0, void 0, "pb", "pN", "hh", "Q", void 0, void 0, void 0, void 0, void 0, void 0, void 0, "a", "ae", "ya", "yae", "eo", "e", "yeo", "ye", "o", "wa", "wae", "oe", "yo", "u", "weo", "we", "wi", "yu", "eu", "yi", "i", "a-o", "a-u", "ya-o", "ya-yo", "eo-o", "eo-u", "eo-eu", "yeo-o", "yeo-u", "o-eo", "o-e", "o-ye", "o-o", "o-u", "yo-ya", "yo-yae", "yo-yeo", "yo-o", "yo-i", "u-a", "u-ae", "u-eo-eu", "u-ye", "u-u", "yu-a", "yu-eo", "yu-e", "yu-yeo", "yu-ye", "yu-u", "yu-i", "eu-u", "eu-eu", "yi-u", "i-a", "i-ya", "i-o", "i-u", "i-eu", "i-U", "U", "U-eo", "U-u", "U-i", "UU", void 0, void 0, void 0, void 0, void 0, "g", "gg", "gs", "n", "nj", "nh", "d", "l", "lg", "lm", "lb", "ls", "lt", "lp", "lh", "m", "b", "bs", "s", "ss", "ng", "j", "c", "k", "t", "p", "h", "gl", "gsg", "ng", "nd", "ns", "nZ", "nt", "dg", "tl", "lgs", "ln", "ld", "lth", "ll", "lmg", "lms", "lbs", "lbh", "rNp", "lss", "lZ", "lk", "lQ", "mg", "ml", "mb", "ms", "mss", "mZ", "mc", "mh", "mN", "bl", "bp", "ph", "pN", "sg", "sd", "sl", "sb", "Z", "g", "ss", void 0, "kh", "N", "Ns", "NZ", "pb", "pN", "hn", "hl", "hm", "hb", "Q", void 0, void 0, void 0, void 0, void 0, void 0];
const q1 = Object.freeze(I1);
const U1 = ["ha", "hu", "hi", "haa", "hee", "he", "ho", void 0, "la", "lu", "li", "laa", "lee", "le", "lo", "lwa", "hha", "hhu", "hhi", "hhaa", "hhee", "hhe", "hho", "hhwa", "ma", "mu", "mi", "maa", "mee", "me", "mo", "mwa", "sza", "szu", "szi", "szaa", "szee", "sze", "szo", "szwa", "ra", "ru", "ri", "raa", "ree", "re", "ro", "rwa", "sa", "su", "si", "saa", "see", "se", "so", "swa", "sha", "shu", "shi", "shaa", "shee", "she", "sho", "shwa", "qa", "qu", "qi", "qaa", "qee", "qe", "qo", void 0, "qwa", void 0, "qwi", "qwaa", "qwee", "qwe", void 0, void 0, "qha", "qhu", "qhi", "qhaa", "qhee", "qhe", "qho", void 0, "qhwa", void 0, "qhwi", "qhwaa", "qhwee", "qhwe", void 0, void 0, "ba", "bu", "bi", "baa", "bee", "be", "bo", "bwa", "va", "vu", "vi", "vaa", "vee", "ve", "vo", "vwa", "ta", "tu", "ti", "taa", "tee", "te", "to", "twa", "ca", "cu", "ci", "caa", "cee", "ce", "co", "cwa", "xa", "xu", "xi", "xaa", "xee", "xe", "xo", void 0, "xwa", void 0, "xwi", "xwaa", "xwee", "xwe", void 0, void 0, "na", "nu", "ni", "naa", "nee", "ne", "no", "nwa", "nya", "nyu", "nyi", "nyaa", "nyee", "nye", "nyo", "nywa", "'a", "'u", void 0, "'aa", "'ee", "'e", "'o", "'wa", "ka", "ku", "ki", "kaa", "kee", "ke", "ko", void 0, "kwa", void 0, "kwi", "kwaa", "kwee", "kwe", void 0, void 0, "kxa", "kxu", "kxi", "kxaa", "kxee", "kxe", "kxo", void 0, "kxwa", void 0, "kxwi", "kxwaa", "kxwee", "kxwe", void 0, void 0, "wa", "wu", "wi", "waa", "wee", "we", "wo", void 0, "`a", "`u", "`i", "`aa", "`ee", "`e", "`o", void 0, "za", "zu", "zi", "zaa", "zee", "ze", "zo", "zwa", "zha", "zhu", "zhi", "zhaa", "zhee", "zhe", "zho", "zhwa", "ya", "yu", "yi", "yaa", "yee", "ye", "yo", void 0, "da", "du", "di", "daa", "dee", "de", "do", "dwa", "dda", "ddu", "ddi", "ddaa", "ddee", "dde", "ddo", "ddwa"];
const V1 = Object.freeze(U1);
const ik = ["ja", "ju", "ji", "jaa", "jee", "je", "jo", "jwa", "ga", "gu", "gi", "gaa", "gee", "ge", "go", void 0, "gwa", void 0, "gwi", "gwaa", "gwee", "gwe", void 0, void 0, "gga", "ggu", "ggi", "ggaa", "ggee", "gge", "ggo", void 0, "tha", "thu", "thi", "thaa", "thee", "the", "tho", "thwa", "cha", "chu", "chi", "chaa", "chee", "che", "cho", "chwa", "pha", "phu", "phi", "phaa", "phee", "phe", "pho", "phwa", "tsa", "tsu", "tsi", "tsaa", "tsee", "tse", "tso", "tswa", "tza", "tzu", "tzi", "tzaa", "tzee", "tze", "tzo", void 0, "fa", "fu", "fi", "faa", "fee", "fe", "fo", "fwa", "pa", "pu", "pi", "paa", "pee", "pe", "po", "pwa", "rya", "mya", "fya", void 0, void 0, void 0, void 0, void 0, void 0, " ", ".", ",", ";", ":", ":: ", "?", "//", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10+", "20+", "30+", "40+", "50+", "60+", "70+", "80+", "90+", "100+", "10,000+", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "a", "e", "i", "o", "u", "v", "ga", "ka", "ge", "gi", "go", "gu", "gv", "ha", "he", "hi", "ho", "hu", "hv", "la", "le", "li", "lo", "lu", "lv", "ma", "me", "mi", "mo", "mu", "na", "hna", "nah", "ne", "ni", "no", "nu", "nv", "qua", "que", "qui", "quo", "quu", "quv", "sa", "s", "se", "si", "so", "su", "sv", "da", "ta", "de", "te", "di", "ti", "do", "du", "dv", "dla", "tla", "tle", "tli", "tlo", "tlu", "tlv", "tsa", "tse", "tsi", "tso", "tsu", "tsv", "wa", "we", "wi", "wo", "wu", "wv", "ya", "ye", "yi", "yo", "yu", "yv", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const ok = Object.freeze(ik);
const ek = [void 0, "ai", "aai", "i", "ii", "u", "uu", "oo", "ee", "i", "a", "aa", "we", "we", "wi", "wi", "wii", "wii", "wo", "wo", "woo", "woo", "woo", "wa", "wa", "waa", "waa", "waa", "ai", "w", "'", "t", "k", "sh", "s", "n", "w", "n", void 0, "w", "c", "?", "l", "en", "in", "on", "an", "pai", "paai", "pi", "pii", "pu", "puu", "poo", "hee", "hi", "pa", "paa", "pwe", "pwe", "pwi", "pwi", "pwii", "pwii", "pwo", "pwo", "pwoo", "pwoo", "pwa", "pwa", "pwaa", "pwaa", "pwaa", "p", "p", "h", "tai", "taai", "ti", "tii", "tu", "tuu", "too", "dee", "di", "ta", "taa", "twe", "twe", "twi", "twi", "twii", "twii", "two", "two", "twoo", "twoo", "twa", "twa", "twaa", "twaa", "twaa", "t", "tte", "tti", "tto", "tta", "kai", "kaai", "ki", "kii", "ku", "kuu", "koo", "ka", "kaa", "kwe", "kwe", "kwi", "kwi", "kwii", "kwii", "kwo", "kwo", "kwoo", "kwoo", "kwa", "kwa", "kwaa", "kwaa", "kwaa", "k", "kw", "keh", "kih", "koh", "kah", "gai", "caai", "gi", "gii", "gu", "guu", "coo", "ga", "gaa", "cwe", "cwe", "cwi", "cwi", "cwii", "cwii", "cwo", "cwo", "cwoo", "cwoo", "cwa", "cwa", "cwaa", "cwaa", "cwaa", "g", "th", "mai", "maai", "mi", "mii", "mu", "muu", "moo", "ma", "maa", "mwe", "mwe", "mwi", "mwi", "mwii", "mwii", "mwo", "mwo", "mwoo", "mwoo", "mwa", "mwa", "mwaa", "mwaa", "mwaa", "m", "m", "mh", "m", "m", "nai", "naai", "ni", "nii", "nu", "nuu", "noo", "na", "naa", "nwe", "nwe", "nwa", "nwa", "nwaa", "nwaa", "nwaa", "n", "ng", "nh", "lai", "laai", "li", "lii", "lu", "luu", "loo", "la", "laa", "lwe", "lwe", "lwi", "lwi", "lwii", "lwii", "lwo", "lwo", "lwoo", "lwoo", "lwa", "lwa", "lwaa", "lwaa", "l", "l", "l", "sai", "saai", "si", "sii", "su", "suu", "soo", "sa", "saa", "swe", "swe", "swi", "swi", "swii", "swii", "swo", "swo", "swoo", "swoo"];
const nk = Object.freeze(ek);
const ak = ["swa", "swa", "swaa", "swaa", "swaa", "s", "s", "sw", "s", "sk", "skw", "sW", "spwa", "stwa", "skwa", "scwa", "she", "shi", "shii", "sho", "shoo", "sha", "shaa", "shwe", "shwe", "shwi", "shwi", "shwii", "shwii", "shwo", "shwo", "shwoo", "shwoo", "shwa", "shwa", "shwaa", "shwaa", "sh", "jai", "yaai", "ji", "jii", "ju", "juu", "yoo", "ja", "jaa", "ywe", "ywe", "ywi", "ywi", "ywii", "ywii", "ywo", "ywo", "ywoo", "ywoo", "ywa", "ywa", "ywaa", "ywaa", "ywaa", "j", "y", "y", "yi", "re", "rai", "le", "raai", "ri", "rii", "ru", "ruu", "lo", "ra", "raa", "la", "rwaa", "rwaa", "r", "r", "r", "vai", "faai", "vi", "vii", "vu", "vuu", "va", "vaa", "fwaa", "fwaa", "v", "the", "the", "thi", "thi", "thii", "thii", "tho", "thoo", "tha", "thaa", "thwaa", "thwaa", "th", "tthe", "tthi", "ttho", "ttha", "tth", "tye", "tyi", "tyo", "tya", "he", "hi", "hii", "ho", "hoo", "ha", "haa", "h", "h", "hk", "qaai", "qi", "qii", "qu", "quu", "qa", "qaa", "q", "tlhe", "tlhi", "tlho", "tlha", "re", "ri", "ro", "ra", "ngaai", "ngi", "ngii", "ngu", "nguu", "nga", "ngaa", "ng", "nng", "she", "shi", "sho", "sha", "the", "thi", "tho", "tha", "th", "lhi", "lhii", "lho", "lhoo", "lha", "lhaa", "lh", "the", "thi", "thii", "tho", "thoo", "tha", "thaa", "th", "b", "e", "i", "o", "a", "we", "wi", "wo", "wa", "ne", "ni", "no", "na", "ke", "ki", "ko", "ka", "he", "hi", "ho", "ha", "ghu", "gho", "ghe", "ghee", "ghi", "gha", "ru", "ro", "re", "ree", "ri", "ra", "wu", "wo", "we", "wee", "wi", "wa", "hwu", "hwo", "hwe", "hwee", "hwi", "hwa", "thu", "tho", "the", "thee", "thi", "tha", "ttu", "tto", "tte", "ttee", "tti", "tta", "pu", "po", "pe", "pee", "pi", "pa", "p", "gu", "go", "ge", "gee", "gi", "ga", "khu", "kho", "khe", "khee", "khi", "kha", "kku", "kko", "kke", "kkee", "kki"];
const uk = Object.freeze(ak);
const tk = ["kka", "kk", "nu", "no", "ne", "nee", "ni", "na", "mu", "mo", "me", "mee", "mi", "ma", "yu", "yo", "ye", "yee", "yi", "ya", "ju", "ju", "jo", "je", "jee", "ji", "ji", "ja", "jju", "jjo", "jje", "jjee", "jji", "jja", "lu", "lo", "le", "lee", "li", "la", "dlu", "dlo", "dle", "dlee", "dli", "dla", "lhu", "lho", "lhe", "lhee", "lhi", "lha", "tlhu", "tlho", "tlhe", "tlhee", "tlhi", "tlha", "tlu", "tlo", "tle", "tlee", "tli", "tla", "zu", "zo", "ze", "zee", "zi", "za", "z", "z", "dzu", "dzo", "dze", "dzee", "dzi", "dza", "su", "so", "se", "see", "si", "sa", "shu", "sho", "she", "shee", "shi", "sha", "sh", "tsu", "tso", "tse", "tsee", "tsi", "tsa", "chu", "cho", "che", "chee", "chi", "cha", "ttsu", "ttso", "ttse", "ttsee", "ttsi", "ttsa", "X", ".", "qai", "ngai", "nngi", "nngii", "nngo", "nngoo", "nnga", "nngaa", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, " ", "b", "l", "f", "s", "n", "h", "d", "t", "c", "q", "m", "g", "ng", "z", "r", "a", "o", "u", "e", "i", "ch", "th", "ph", "p", "x", "p", "<", ">", void 0, void 0, void 0, "f", "v", "u", "yr", "y", "w", "th", "th", "a", "o", "ac", "ae", "o", "o", "o", "oe", "on", "r", "k", "c", "k", "g", "ng", "g", "g", "w", "h", "h", "h", "h", "n", "n", "n", "i", "e", "j", "g", "ae", "a", "eo", "p", "z", "s", "s", "s", "c", "z", "t", "t", "d", "b", "b", "p", "p", "e", "m", "m", "m", "l", "l", "ng", "ng", "d", "o", "ear", "ior", "qu", "qu", "qu", "s", "yr", "yr", "yr", "q", "x", ".", ":", "+", "17", "18", "19", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const dk = Object.freeze(tk);
const gk = [void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "t", "tth", "d", "ddh", "nn", "t", "th", "d", "dh", "n", "p", "ph", "b", "bh", "m", "y", "r", "l", "v", "sh", "ss", "s", "h", "l", "q", "a", "aa", "i", "ii", "u", "uk", "uu", "uuv", "ry", "ryy", "ly", "lyy", "e", "ai", "oo", "oo", "au", "a", "aa", "aa", "i", "ii", "y", "yy", "u", "uu", "ua", "oe", "ya", "ie", "e", "ae", "ai", "oo", "au", "M", "H", "a`", void 0, void 0, void 0, "r", void 0, "!", void 0, void 0, void 0, void 0, void 0, ".", " // ", ":", "+", "++", " * ", " /// ", "KR", "'", void 0, void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const sk = Object.freeze(gk);
const hk = [" @ ", " ... ", ",", ". ", ": ", " // ", void 0, "-", ",", ". ", void 0, void 0, void 0, void 0, void 0, void 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", void 0, void 0, void 0, void 0, void 0, void 0, "a", "e", "i", "o", "u", "O", "U", "ee", "n", "ng", "b", "p", "q", "g", "m", "l", "s", "sh", "t", "d", "ch", "j", "y", "r", "w", "f", "k", "kha", "ts", "z", "h", "zr", "lh", "zh", "ch", "-", "e", "i", "o", "u", "O", "U", "ng", "b", "p", "q", "g", "m", "t", "d", "ch", "j", "ts", "y", "w", "k", "g", "h", "jy", "ny", "dz", "e", "i", "iy", "U", "u", "ng", "k", "g", "h", "p", "sh", "t", "d", "j", "f", "g", "h", "ts", "z", "r", "ch", "zh", "i", "k", "r", "f", "zh", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "H", "X", "W", "M", " 3 ", " 333 ", "a", "i", "k", "ng", "c", "tt", "tth", "dd", "nn", "t", "d", "p", "ph", "ss", "zh", "z", "a", "t", "zh", "gh", "ng", "c", "jh", "tta", "ddh", "t", "dh", "ss", "cy", "zh", "z", "u", "y", "bh", "'", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const rk = Object.freeze(hk);
const lk = ["A", "a", "B", "b", "B", "b", "B", "b", "C", "c", "D", "d", "D", "d", "D", "d", "D", "d", "D", "d", "E", "e", "E", "e", "E", "e", "E", "e", "E", "e", "F", "f", "G", "g", "H", "h", "H", "h", "H", "h", "H", "h", "H", "h", "I", "i", "I", "i", "K", "k", "K", "k", "K", "k", "L", "l", "L", "l", "L", "l", "L", "l", "M", "m", "M", "m", "M", "m", "N", "n", "N", "n", "N", "n", "N", "n", "O", "o", "O", "o", "O", "o", "O", "o", "P", "p", "P", "p", "R", "r", "R", "r", "R", "r", "R", "r", "S", "s", "S", "s", "S", "s", "S", "s", "S", "s", "T", "t", "T", "t", "T", "t", "T", "t", "U", "u", "U", "u", "U", "u", "U", "u", "U", "u", "V", "v", "V", "v", "W", "w", "W", "w", "W", "w", "W", "w", "W", "w", "X", "x", "X", "x", "Y", "y", "Z", "z", "Z", "z", "Z", "z", "h", "t", "w", "y", "a", "S", void 0, void 0, void 0, void 0, "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "A", "a", "E", "e", "E", "e", "E", "e", "E", "e", "E", "e", "E", "e", "E", "e", "E", "e", "I", "i", "I", "i", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "O", "o", "U", "u", "U", "u", "U", "u", "U", "u", "U", "u", "U", "u", "U", "u", "Y", "y", "Y", "y", "Y", "y", "Y", "y", void 0, void 0, void 0, void 0, void 0, void 0];
const vk = Object.freeze(lk);
const yk = ["a", "a", "a", "a", "a", "a", "a", "a", "A", "A", "A", "A", "A", "A", "A", "A", "e", "e", "e", "e", "e", "e", void 0, void 0, "E", "E", "E", "E", "E", "E", void 0, void 0, "e", "e", "e", "e", "e", "e", "e", "e", "E", "E", "E", "E", "E", "E", "E", "E", "i", "i", "i", "i", "i", "i", "i", "i", "I", "I", "I", "I", "I", "I", "I", "I", "o", "o", "o", "o", "o", "o", void 0, void 0, "O", "O", "O", "O", "O", "O", void 0, void 0, "u", "u", "u", "u", "u", "u", "u", "u", void 0, "U", void 0, "U", void 0, "U", void 0, "U", "o", "o", "o", "o", "o", "o", "o", "o", "O", "O", "O", "O", "O", "O", "O", "O", "a", "a", "e", "e", "e", "e", "i", "i", "o", "o", "u", "u", "o", "o", void 0, void 0, "a", "a", "a", "a", "a", "a", "a", "a", "A", "A", "A", "A", "A", "A", "A", "A", "e", "e", "e", "e", "e", "e", "e", "e", "E", "E", "E", "E", "E", "E", "E", "E", "o", "o", "o", "o", "o", "o", "o", "o", "O", "O", "O", "O", "O", "O", "O", "O", "a", "a", "a", "a", "a", void 0, "a", "a", "A", "A", "A", "A", "A", "'", "i", "'", "~", '"~', "e", "e", "e", void 0, "e", "e", "E", "E", "E", "E", "E", "'`", "''", "'~", "i", "i", "i", "i", void 0, void 0, "i", "i", "I", "I", "I", "I", void 0, "`'", "`'", "`~", "u", "u", "u", "u", "R", "R", "u", "u", "U", "U", "U", "U", "R", '"`', `"'`, "`", void 0, void 0, "o", "o", "o", void 0, "o", "o", "O", "O", "O", "O", "O", "'", "`", void 0];
const ck = Object.freeze(yk);
const bk = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", void 0, void 0, void 0, void 0, "-", "-", "-", "-", "--", "--", "||", "_", "'", "'", ",", "'", '"', '"', ",,", '"', "+", "++", "*", "*>", ".", "..", "...", ".", `
`, `

`, void 0, void 0, void 0, void 0, void 0, " ", "%0", "%00", "'", "''", "'''", "`", "``", "```", "^", "<", ">", "*", "!!", "!?", "-", "_", "-", "^", "***", "--", "/", "-[", "]-", void 0, "?!", "!?", "7", "PP", "(]", "[)", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "0", void 0, void 0, void 0, "4", "5", "6", "7", "8", "9", "+", "-", "=", "(", ")", "n", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "=", "(", ")", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "ECU", "CL", "Cr", "FF", "L", "mil", "N", "Pts", "Rs", "W", "NS", "D", "EU", "K", "T", "Dr", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const pk = Object.freeze(bk);
const wk = [void 0, void 0, "C", void 0, void 0, void 0, void 0, void 0, void 0, void 0, "g", "H", "H", "H", "h", void 0, "I", "I", "L", "l", "lb", "N", "no", "(p)", "P", "P", "Q", "R", "R", "R", void 0, void 0, "(sm)", "(tel)", "(tm)", void 0, "Z", void 0, void 0, "mho", "Z", void 0, void 0, void 0, "B", "C", "e", "e", void 0, "F", void 0, "M", "o", void 0, void 0, void 0, void 0, "i", "Q", "(fax)", "pi", void 0, void 0, "Pi", void 0, "G", "L", "L", "Y", "D", "d", "e", "i", "j", void 0, void 0, "per", void 0, void 0, void 0, void 0, void 0, void 0, " 1/3 ", " 2/3 ", " 1/5 ", " 2/5 ", " 3/5 ", " 4/5 ", " 1/6 ", " 5/6 ", " 1/8 ", " 3/8 ", " 5/8 ", " 7/8 ", " 1/", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "L", "C", "D", "M", "i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "l", "c", "d", "m", "(D", "D)", "((|))", ")", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "-", "|", "-", "|", "-", "|", "\\", "/", "\\", "/", "-", "-", "~", "~", "-", "|", "-", "|", "-", "-", "-", "|", "-", "|", "|", "-", "-", "-", "-", "-", "-", "|", "|", "|", "|", "|", "|", "|", "^", "V", "\\", "=", "V", "^", "-", "-", "|", "|", "-", "-", "|", "|", "=", "|", "=", "=", "|", "=", "|", "=", "=", "=", "=", "=", "=", "|", "=", "|", "=", "|", "\\", "/", "\\", "/", "=", "=", "~", "~", "|", "|", "-", "|", "-", "|", "-", "-", "-", "|", "-", "|", "|", "|", "|", "|", "|", "|", "-", "\\", "\\", "|", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const jk = Object.freeze(wk);
const fk = [void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const mk = Object.freeze(fk);
const Yk = ["-", "-", "|", "|", "-", "-", "|", "|", "-", "-", "|", "|", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "-", "-", "|", "|", "-", "|", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "/", "\\", "X", "-", "|", "-", "|", "-", "|", "-", "|", "-", "|", "-", "|", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "-", "|", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "^", "^", "^", "^", ">", ">", ">", ">", ">", ">", "V", "V", "V", "V", "<", "<", "<", "<", "<", "<", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "#", "#", "#", "#", "#", "^", "^", "^", "O", "#", "#", "#", "#", "#", "#", "#", "#", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const kk = Object.freeze(Yk);
const Lk = [void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const Zk = Object.freeze(Lk);
const Sk = [void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const Jk = Object.freeze(Sk);
const Ck = [" ", "a", "1", "b", "'", "k", "2", "l", "@", "c", "i", "f", "/", "m", "s", "p", '"', "e", "3", "h", "9", "o", "6", "r", "^", "d", "j", "g", ">", "n", "t", "q", ",", "*", "5", "<", "-", "u", "8", "v", ".", "%", "[", "$", "+", "x", "!", "&", ";", ":", "4", "\\", "0", "z", "7", "(", "_", "?", "w", "]", "#", "y", ")", "=", "[d7]", "[d17]", "[d27]", "[d127]", "[d37]", "[d137]", "[d237]", "[d1237]", "[d47]", "[d147]", "[d247]", "[d1247]", "[d347]", "[d1347]", "[d2347]", "[d12347]", "[d57]", "[d157]", "[d257]", "[d1257]", "[d357]", "[d1357]", "[d2357]", "[d12357]", "[d457]", "[d1457]", "[d2457]", "[d12457]", "[d3457]", "[d13457]", "[d23457]", "[d123457]", "[d67]", "[d167]", "[d267]", "[d1267]", "[d367]", "[d1367]", "[d2367]", "[d12367]", "[d467]", "[d1467]", "[d2467]", "[d12467]", "[d3467]", "[d13467]", "[d23467]", "[d123467]", "[d567]", "[d1567]", "[d2567]", "[d12567]", "[d3567]", "[d13567]", "[d23567]", "[d123567]", "[d4567]", "[d14567]", "[d24567]", "[d124567]", "[d34567]", "[d134567]", "[d234567]", "[d1234567]", "[d8]", "[d18]", "[d28]", "[d128]", "[d38]", "[d138]", "[d238]", "[d1238]", "[d48]", "[d148]", "[d248]", "[d1248]", "[d348]", "[d1348]", "[d2348]", "[d12348]", "[d58]", "[d158]", "[d258]", "[d1258]", "[d358]", "[d1358]", "[d2358]", "[d12358]", "[d458]", "[d1458]", "[d2458]", "[d12458]", "[d3458]", "[d13458]", "[d23458]", "[d123458]", "[d68]", "[d168]", "[d268]", "[d1268]", "[d368]", "[d1368]", "[d2368]", "[d12368]", "[d468]", "[d1468]", "[d2468]", "[d12468]", "[d3468]", "[d13468]", "[d23468]", "[d123468]", "[d568]", "[d1568]", "[d2568]", "[d12568]", "[d3568]", "[d13568]", "[d23568]", "[d123568]", "[d4568]", "[d14568]", "[d24568]", "[d124568]", "[d34568]", "[d134568]", "[d234568]", "[d1234568]", "[d78]", "[d178]", "[d278]", "[d1278]", "[d378]", "[d1378]", "[d2378]", "[d12378]", "[d478]", "[d1478]", "[d2478]", "[d12478]", "[d3478]", "[d13478]", "[d23478]", "[d123478]", "[d578]", "[d1578]", "[d2578]", "[d12578]", "[d3578]", "[d13578]", "[d23578]", "[d123578]", "[d4578]", "[d14578]", "[d24578]", "[d124578]", "[d34578]", "[d134578]", "[d234578]", "[d1234578]", "[d678]", "[d1678]", "[d2678]", "[d12678]", "[d3678]", "[d13678]", "[d23678]", "[d123678]", "[d4678]", "[d14678]", "[d24678]", "[d124678]", "[d34678]", "[d134678]", "[d234678]", "[d1234678]", "[d5678]", "[d15678]", "[d25678]", "[d125678]", "[d35678]", "[d135678]", "[d235678]", "[d1235678]", "[d45678]", "[d145678]", "[d245678]", "[d1245678]", "[d345678]", "[d1345678]", "[d2345678]", "[d12345678]"];
const Xk = Object.freeze(Ck);
const Hk = [" ", ",", ". ", '"', "[JIS]", '"', "/", "0", "<", "> ", "<<", ">> ", "[", "] ", "{", "} ", "[(", ")] ", "@", "X ", "[", "] ", "[[", "]] ", "((", ")) ", "[[", "]] ", "~ ", "``", "''", ",,", "@", "1", "2", "3", "4", "5", "6", "7", "8", "9", void 0, void 0, void 0, void 0, void 0, void 0, "~", "+", "+", "+", "+", void 0, "@", " // ", "+10+", "+20+", "+30+", void 0, void 0, void 0, void 0, void 0, void 0, "a", "a", "i", "i", "u", "u", "e", "e", "o", "o", "ka", "ga", "ki", "gi", "ku", "gu", "ke", "ge", "ko", "go", "sa", "za", "si", "zi", "su", "zu", "se", "ze", "so", "zo", "ta", "da", "ti", "di", "tu", "tu", "du", "te", "de", "to", "do", "na", "ni", "nu", "ne", "no", "ha", "ba", "pa", "hi", "bi", "pi", "hu", "bu", "pu", "he", "be", "pe", "ho", "bo", "po", "ma", "mi", "mu", "me", "mo", "ya", "ya", "yu", "yu", "yo", "yo", "ra", "ri", "ru", "re", "ro", "wa", "wa", "wi", "we", "wo", "n", "vu", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, '"', '"', void 0, void 0, "a", "a", "i", "i", "u", "u", "e", "e", "o", "o", "ka", "ga", "ki", "gi", "ku", "gu", "ke", "ge", "ko", "go", "sa", "za", "si", "zi", "su", "zu", "se", "ze", "so", "zo", "ta", "da", "ti", "di", "tu", "tu", "du", "te", "de", "to", "do", "na", "ni", "nu", "ne", "no", "ha", "ba", "pa", "hi", "bi", "pi", "hu", "bu", "pu", "he", "be", "pe", "ho", "bo", "po", "ma", "mi", "mu", "me", "mo", "ya", "ya", "yu", "yu", "yo", "yo", "ra", "ri", "ru", "re", "ro", "wa", "wa", "wi", "we", "wo", "n", "vu", "ka", "ke", "va", "vi", "ve", "vo", void 0, void 0, '"', '"', void 0];
const Bk = Object.freeze(Hk);
const Tk = [void 0, void 0, void 0, void 0, void 0, "B", "P", "M", "F", "D", "T", "N", "L", "G", "K", "H", "J", "Q", "X", "ZH", "CH", "SH", "R", "Z", "C", "S", "A", "O", "E", "EH", "AI", "EI", "AU", "OU", "AN", "EN", "ANG", "ENG", "ER", "I", "U", "IU", "V", "NG", "GN", void 0, void 0, void 0, void 0, "g", "gg", "gs", "n", "nj", "nh", "d", "dd", "r", "lg", "lm", "lb", "ls", "lt", "lp", "rh", "m", "b", "bb", "bs", "s", "ss", void 0, "j", "jj", "c", "k", "t", "p", "h", "a", "ae", "ya", "yae", "eo", "e", "yeo", "ye", "o", "wa", "wae", "oe", "yo", "u", "weo", "we", "wi", "yu", "eu", "yi", "i", void 0, "nn", "nd", "ns", "nZ", "lgs", "ld", "lbs", "lZ", "lQ", "mb", "ms", "mZ", "mN", "bg", void 0, "bsg", "bst", "bj", "bt", "bN", "bbN", "sg", "sn", "sd", "sb", "sj", "Z", void 0, "N", "Ns", "NZ", "pN", "hh", "Q", "yo-ya", "yo-yae", "yo-i", "yu-yeo", "yu-ye", "yu-i", "U", "U-i", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "BU", "ZI", "JI", "GU", "EE", "ENN", "OO", "ONN", "IR", "ANN", "INN", "UNN", "IM", "NGG", "AINN", "AUNN", "AM", "OM", "ONG", "INNN", "P", "T", "K", "H", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const Dk = Object.freeze(Tk);
const Mk = ["(g)", "(n)", "(d)", "(r)", "(m)", "(b)", "(s)", "()", "(j)", "(c)", "(k)", "(t)", "(p)", "(h)", "(ga)", "(na)", "(da)", "(ra)", "(ma)", "(ba)", "(sa)", "(a)", "(ja)", "(ca)", "(ka)", "(ta)", "(pa)", "(ha)", "(ju)", void 0, void 0, void 0, "(1) ", "(2) ", "(3) ", "(4) ", "(5) ", "(6) ", "(7) ", "(8) ", "(9) ", "(10) ", "(Yue) ", "(Huo) ", "(Shui) ", "(Mu) ", "(Jin) ", "(Tu) ", "(Ri) ", "(Zhu) ", "(You) ", "(She) ", "(Ming) ", "(Te) ", "(Cai) ", "(Zhu) ", "(Lao) ", "(Dai) ", "(Hu) ", "(Xue) ", "(Jian) ", "(Qi) ", "(Zi) ", "(Xie) ", "(Ji) ", "(Xiu) ", "<<", ">>", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "(g)", "(n)", "(d)", "(r)", "(m)", "(b)", "(s)", "()", "(j)", "(c)", "(k)", "(t)", "(p)", "(h)", "(ga)", "(na)", "(da)", "(ra)", "(ma)", "(ba)", "(sa)", "(a)", "(ja)", "(ca)", "(ka)", "(ta)", "(pa)", "(ha)", void 0, void 0, void 0, "KIS ", "(1) ", "(2) ", "(3) ", "(4) ", "(5) ", "(6) ", "(7) ", "(8) ", "(9) ", "(10) ", "(Yue) ", "(Huo) ", "(Shui) ", "(Mu) ", "(Jin) ", "(Tu) ", "(Ri) ", "(Zhu) ", "(You) ", "(She) ", "(Ming) ", "(Te) ", "(Cai) ", "(Zhu) ", "(Lao) ", "(Mi) ", "(Nan) ", "(Nu) ", "(Shi) ", "(You) ", "(Yin) ", "(Zhu) ", "(Xiang) ", "(Xiu) ", "(Xie) ", "(Zheng) ", "(Shang) ", "(Zhong) ", "(Xia) ", "(Zuo) ", "(You) ", "(Yi) ", "(Zong) ", "(Xue) ", "(Jian) ", "(Qi) ", "(Zi) ", "(Xie) ", "(Ye) ", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "1M", "2M", "3M", "4M", "5M", "6M", "7M", "8M", "9M", "10M", "11M", "12M", void 0, void 0, void 0, void 0, "a", "i", "u", "u", "o", "ka", "ki", "ku", "ke", "ko", "sa", "si", "su", "se", "so", "ta", "ti", "tu", "te", "to", "na", "ni", "nu", "ne", "no", "ha", "hi", "hu", "he", "ho", "ma", "mi", "mu", "me", "mo", "ya", "yu", "yo", "ra", "ri", "ru", "re", "ro", "wa", "wi", "we", "wo", void 0];
const Qk = Object.freeze(Mk);
const xk = ["apartment", "alpha", "ampere", "are", "inning", "inch", "won", "escudo", "acre", "ounce", "ohm", "kai-ri", "carat", "calorie", "gallon", "gamma", "giga", "guinea", "curie", "guilder", "kilo", "kilogram", "kilometer", "kilowatt", "gram", "gram ton", "cruzeiro", "krone", "case", "koruna", "co-op", "cycle", "centime", "shilling", "centi", "cent", "dozen", "desi", "dollar", "ton", "nano", "knot", "heights", "percent", "parts", "barrel", "piaster", "picul", "pico", "building", "farad", "feet", "bushel", "franc", "hectare", "peso", "pfennig", "hertz", "pence", "page", "beta", "point", "volt", "hon", "pound", "hall", "horn", "micro", "mile", "mach", "mark", "mansion", "micron", "milli", "millibar", "mega", "megaton", "meter", "yard", "yard", "yuan", "liter", "lira", "rupee", "ruble", "rem", "roentgen", "watt", "0h", "1h", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h", "19h", "20h", "21h", "22h", "23h", "24h", "HPA", "da", "AU", "bar", "oV", "pc", void 0, void 0, void 0, void 0, "Heisei", "Syouwa", "Taisyou", "Meiji", "Inc.", "pA", "nA", "microamp", "mA", "kA", "kB", "MB", "GB", "cal", "kcal", "pF", "nF", "microFarad", "microgram", "mg", "kg", "Hz", "kHz", "MHz", "GHz", "THz", "microliter", "ml", "dl", "kl", "fm", "nm", "micrometer", "mm", "cm", "km", "mm^2", "cm^2", "m^2", "km^2", "mm^4", "cm^3", "m^3", "km^3", "m/s", "m/s^2", "Pa", "kPa", "MPa", "GPa", "rad", "rad/s", "rad/s^2", "ps", "ns", "microsecond", "ms", "pV", "nV", "microvolt", "mV", "kV", "MV", "pW", "nW", "microwatt", "mW", "kW", "MW", "kOhm", "MOhm", "a.m.", "Bq", "cc", "cd", "C/kg", "Co.", "dB", "Gy", "ha", "HP", "in", "K.K.", "KM", "kt", "lm", "ln", "log", "lx", "mb", "mil", "mol", "pH", "p.m.", "PPM", "PR", "sr", "Sv", "Wb", void 0, void 0, "1d", "2d", "3d", "4d", "5d", "6d", "7d", "8d", "9d", "10d", "11d", "12d", "13d", "14d", "15d", "16d", "17d", "18d", "19d", "20d", "21d", "22d", "23d", "24d", "25d", "26d", "27d", "28d", "29d", "30d", "31d", void 0];
const Gk = Object.freeze(xk);
const Wk = ["Yi", "Ding", "Kao", "Qi", "Shang", "Xia", void 0, "Wan", "Zhang", "San", "Shang", "Xia", "Ji", "Bu", "Yu", "Mian", "Gai", "Chou", "Chou", "Zhuan", "Qie", "Pi", "Shi", "Shi", "Qiu", "Bing", "Ye", "Cong", "Dong", "Si", "Cheng", "Diu", "Qiu", "Liang", "Diu", "You", "Liang", "Yan", "Bing", "Sang", "Gun", "Jiu", "Ge", "Ya", "Qiang", "Zhong", "Ji", "Jie", "Feng", "Guan", "Chuan", "Chan", "Lin", "Zhuo", "Zhu", "Ha", "Wan", "Dan", "Wei", "Zhu", "Jing", "Li", "Ju", "Pie", "Fu", "Yi", "Yi", "Nai", "Shime", "Jiu", "Jiu", "Zhe", "Me", "Yi", void 0, "Zhi", "Wu", "Zha", "Hu", "Fa", "Le", "Zhong", "Ping", "Pang", "Qiao", "Hu", "Guai", "Cheng", "Cheng", "Yi", "Yin", void 0, "Mie", "Jiu", "Qi", "Ye", "Xi", "Xiang", "Gai", "Diu", "Hal", void 0, "Shu", "Twul", "Shi", "Ji", "Nang", "Jia", "Kel", "Shi", void 0, "Ol", "Mai", "Luan", "Cal", "Ru", "Xue", "Yan", "Fu", "Sha", "Na", "Gan", "Sol", "El", "Cwul", void 0, "Gan", "Chi", "Gui", "Gan", "Luan", "Lin", "Yi", "Jue", "Liao", "Ma", "Yu", "Zheng", "Shi", "Shi", "Er", "Chu", "Yu", "Yu", "Yu", "Yun", "Hu", "Qi", "Wu", "Jing", "Si", "Sui", "Gen", "Gen", "Ya", "Xie", "Ya", "Qi", "Ya", "Ji", "Tou", "Wang", "Kang", "Ta", "Jiao", "Hai", "Yi", "Chan", "Heng", "Mu", void 0, "Xiang", "Jing", "Ting", "Liang", "Xiang", "Jing", "Ye", "Qin", "Bo", "You", "Xie", "Dan", "Lian", "Duo", "Wei", "Ren", "Ren", "Ji", "La", "Wang", "Yi", "Shi", "Ren", "Le", "Ding", "Ze", "Jin", "Pu", "Chou", "Ba", "Zhang", "Jin", "Jie", "Bing", "Reng", "Cong", "Fo", "San", "Lun", "Sya", "Cang", "Zi", "Shi", "Ta", "Zhang", "Fu", "Xian", "Xian", "Tuo", "Hong", "Tong", "Ren", "Qian", "Gan", "Yi", "Di", "Dai", "Ling", "Yi", "Chao", "Chang", "Sa", void 0, "Yi", "Mu", "Men", "Ren", "Jia", "Chao", "Yang", "Qian", "Zhong", "Pi", "Wan", "Wu", "Jian", "Jie", "Yao", "Feng", "Cang", "Ren", "Wang", "Fen", "Di", "Fang"];
const Nk = Object.freeze(Wk);
const Pk = ["Zhong", "Qi", "Pei", "Yu", "Diao", "Dun", "Wen", "Yi", "Xin", "Kang", "Yi", "Ji", "Ai", "Wu", "Ji", "Fu", "Fa", "Xiu", "Jin", "Bei", "Dan", "Fu", "Tang", "Zhong", "You", "Huo", "Hui", "Yu", "Cui", "Chuan", "San", "Wei", "Chuan", "Che", "Ya", "Xian", "Shang", "Chang", "Lun", "Cang", "Xun", "Xin", "Wei", "Zhu", void 0, "Xuan", "Nu", "Bo", "Gu", "Ni", "Ni", "Xie", "Ban", "Xu", "Ling", "Zhou", "Shen", "Qu", "Si", "Beng", "Si", "Jia", "Pi", "Yi", "Si", "Ai", "Zheng", "Dian", "Han", "Mai", "Dan", "Zhu", "Bu", "Qu", "Bi", "Shao", "Ci", "Wei", "Di", "Zhu", "Zuo", "You", "Yang", "Ti", "Zhan", "He", "Bi", "Tuo", "She", "Yu", "Yi", "Fo", "Zuo", "Kou", "Ning", "Tong", "Ni", "Xuan", "Qu", "Yong", "Wa", "Qian", void 0, "Ka", void 0, "Pei", "Huai", "He", "Lao", "Xiang", "Ge", "Yang", "Bai", "Fa", "Ming", "Jia", "Er", "Bing", "Ji", "Hen", "Huo", "Gui", "Quan", "Tiao", "Jiao", "Ci", "Yi", "Shi", "Xing", "Shen", "Tuo", "Kan", "Zhi", "Gai", "Lai", "Yi", "Chi", "Kua", "Guang", "Li", "Yin", "Shi", "Mi", "Zhu", "Xu", "You", "An", "Lu", "Mou", "Er", "Lun", "Tong", "Cha", "Chi", "Xun", "Gong", "Zhou", "Yi", "Ru", "Jian", "Xia", "Jia", "Zai", "Lu", "Ko", "Jiao", "Zhen", "Ce", "Qiao", "Kuai", "Chai", "Ning", "Nong", "Jin", "Wu", "Hou", "Jiong", "Cheng", "Zhen", "Zuo", "Chou", "Qin", "Lu", "Ju", "Shu", "Ting", "Shen", "Tuo", "Bo", "Nan", "Hao", "Bian", "Tui", "Yu", "Xi", "Cu", "E", "Qiu", "Xu", "Kuang", "Ku", "Wu", "Jun", "Yi", "Fu", "Lang", "Zu", "Qiao", "Li", "Yong", "Hun", "Jing", "Xian", "San", "Pai", "Su", "Fu", "Xi", "Li", "Fu", "Ping", "Bao", "Yu", "Si", "Xia", "Xin", "Xiu", "Yu", "Ti", "Che", "Chou", void 0, "Yan", "Lia", "Li", "Lai", void 0, "Jian", "Xiu", "Fu", "He", "Ju", "Xiao", "Pai", "Jian", "Biao", "Chu", "Fei", "Feng", "Ya", "An", "Bei", "Yu", "Xin", "Bi", "Jian"];
const Fk = Object.freeze(Pk);
const Rk = ["Chang", "Chi", "Bing", "Zan", "Yao", "Cui", "Lia", "Wan", "Lai", "Cang", "Zong", "Ge", "Guan", "Bei", "Tian", "Shu", "Shu", "Men", "Dao", "Tan", "Jue", "Chui", "Xing", "Peng", "Tang", "Hou", "Yi", "Qi", "Ti", "Gan", "Jing", "Jie", "Sui", "Chang", "Jie", "Fang", "Zhi", "Kong", "Juan", "Zong", "Ju", "Qian", "Ni", "Lun", "Zhuo", "Wei", "Luo", "Song", "Leng", "Hun", "Dong", "Zi", "Ben", "Wu", "Ju", "Nai", "Cai", "Jian", "Zhai", "Ye", "Zhi", "Sha", "Qing", void 0, "Ying", "Cheng", "Jian", "Yan", "Nuan", "Zhong", "Chun", "Jia", "Jie", "Wei", "Yu", "Bing", "Ruo", "Ti", "Wei", "Pian", "Yan", "Feng", "Tang", "Wo", "E", "Xie", "Che", "Sheng", "Kan", "Di", "Zuo", "Cha", "Ting", "Bei", "Ye", "Huang", "Yao", "Zhan", "Chou", "Yan", "You", "Jian", "Xu", "Zha", "Ci", "Fu", "Bi", "Zhi", "Zong", "Mian", "Ji", "Yi", "Xie", "Xun", "Si", "Duan", "Ce", "Zhen", "Ou", "Tou", "Tou", "Bei", "Za", "Lu", "Jie", "Wei", "Fen", "Chang", "Gui", "Sou", "Zhi", "Su", "Xia", "Fu", "Yuan", "Rong", "Li", "Ru", "Yun", "Gou", "Ma", "Bang", "Dian", "Tang", "Hao", "Jie", "Xi", "Shan", "Qian", "Jue", "Cang", "Chu", "San", "Bei", "Xiao", "Yong", "Yao", "Tan", "Suo", "Yang", "Fa", "Bing", "Jia", "Dai", "Zai", "Tang", void 0, "Bin", "Chu", "Nuo", "Can", "Lei", "Cui", "Yong", "Zao", "Zong", "Peng", "Song", "Ao", "Chuan", "Yu", "Zhai", "Cou", "Shang", "Qiang", "Jing", "Chi", "Sha", "Han", "Zhang", "Qing", "Yan", "Di", "Xi", "Lu", "Bei", "Piao", "Jin", "Lian", "Lu", "Man", "Qian", "Xian", "Tan", "Ying", "Dong", "Zhuan", "Xiang", "Shan", "Qiao", "Jiong", "Tui", "Zun", "Pu", "Xi", "Lao", "Chang", "Guang", "Liao", "Qi", "Deng", "Chan", "Wei", "Ji", "Fan", "Hui", "Chuan", "Jian", "Dan", "Jiao", "Jiu", "Seng", "Fen", "Xian", "Jue", "E", "Jiao", "Jian", "Tong", "Lin", "Bo", "Gu", void 0, "Su", "Xian", "Jiang", "Min", "Ye", "Jin", "Jia", "Qiao", "Pi", "Feng", "Zhou", "Ai", "Sai"];
const Kk = Object.freeze(Rk);
const Ak = ["Yi", "Jun", "Nong", "Chan", "Yi", "Dang", "Jing", "Xuan", "Kuai", "Jian", "Chu", "Dan", "Jiao", "Sha", "Zai", void 0, "Bin", "An", "Ru", "Tai", "Chou", "Chai", "Lan", "Ni", "Jin", "Qian", "Meng", "Wu", "Ning", "Qiong", "Ni", "Chang", "Lie", "Lei", "Lu", "Kuang", "Bao", "Du", "Biao", "Zan", "Zhi", "Si", "You", "Hao", "Chen", "Chen", "Li", "Teng", "Wei", "Long", "Chu", "Chan", "Rang", "Shu", "Hui", "Li", "Luo", "Zan", "Nuo", "Tang", "Yan", "Lei", "Nang", "Er", "Wu", "Yun", "Zan", "Yuan", "Xiong", "Chong", "Zhao", "Xiong", "Xian", "Guang", "Dui", "Ke", "Dui", "Mian", "Tu", "Chang", "Er", "Dui", "Er", "Xin", "Tu", "Si", "Yan", "Yan", "Shi", "Shi", "Dang", "Qian", "Dou", "Fen", "Mao", "Shen", "Dou", "Bai", "Jing", "Li", "Huang", "Ru", "Wang", "Nei", "Quan", "Liang", "Yu", "Ba", "Gong", "Liu", "Xi", void 0, "Lan", "Gong", "Tian", "Guan", "Xing", "Bing", "Qi", "Ju", "Dian", "Zi", "Ppwun", "Yang", "Jian", "Shou", "Ji", "Yi", "Ji", "Chan", "Jiong", "Mao", "Ran", "Nei", "Yuan", "Mao", "Gang", "Ran", "Ce", "Jiong", "Ce", "Zai", "Gua", "Jiong", "Mao", "Zhou", "Mou", "Gou", "Xu", "Mian", "Mi", "Rong", "Yin", "Xie", "Kan", "Jun", "Nong", "Yi", "Mi", "Shi", "Guan", "Meng", "Zhong", "Ju", "Yuan", "Ming", "Kou", "Lam", "Fu", "Xie", "Mi", "Bing", "Dong", "Tai", "Gang", "Feng", "Bing", "Hu", "Chong", "Jue", "Hu", "Kuang", "Ye", "Leng", "Pan", "Fu", "Min", "Dong", "Xian", "Lie", "Xia", "Jian", "Jing", "Shu", "Mei", "Tu", "Qi", "Gu", "Zhun", "Song", "Jing", "Liang", "Qing", "Diao", "Ling", "Dong", "Gan", "Jian", "Yin", "Cou", "Yi", "Li", "Cang", "Ming", "Zhuen", "Cui", "Si", "Duo", "Jin", "Lin", "Lin", "Ning", "Xi", "Du", "Ji", "Fan", "Fan", "Fan", "Feng", "Ju", "Chu", "Tako", "Feng", "Mok", "Ci", "Fu", "Feng", "Ping", "Feng", "Kai", "Huang", "Kai", "Gan", "Deng", "Ping", "Qu", "Xiong", "Kuai", "Tu", "Ao", "Chu", "Ji", "Dang", "Han", "Han", "Zao"];
const Ok = Object.freeze(Ak);
const _k = ["Dao", "Diao", "Dao", "Ren", "Ren", "Chuang", "Fen", "Qie", "Yi", "Ji", "Kan", "Qian", "Cun", "Chu", "Wen", "Ji", "Dan", "Xing", "Hua", "Wan", "Jue", "Li", "Yue", "Lie", "Liu", "Ze", "Gang", "Chuang", "Fu", "Chu", "Qu", "Ju", "Shan", "Min", "Ling", "Zhong", "Pan", "Bie", "Jie", "Jie", "Bao", "Li", "Shan", "Bie", "Chan", "Jing", "Gua", "Gen", "Dao", "Chuang", "Kui", "Ku", "Duo", "Er", "Zhi", "Shua", "Quan", "Cha", "Ci", "Ke", "Jie", "Gui", "Ci", "Gui", "Kai", "Duo", "Ji", "Ti", "Jing", "Lou", "Gen", "Ze", "Yuan", "Cuo", "Xue", "Ke", "La", "Qian", "Cha", "Chuang", "Gua", "Jian", "Cuo", "Li", "Ti", "Fei", "Pou", "Chan", "Qi", "Chuang", "Zi", "Gang", "Wan", "Bo", "Ji", "Duo", "Qing", "Yan", "Zhuo", "Jian", "Ji", "Bo", "Yan", "Ju", "Huo", "Sheng", "Jian", "Duo", "Duan", "Wu", "Gua", "Fu", "Sheng", "Jian", "Ge", "Zha", "Kai", "Chuang", "Juan", "Chan", "Tuan", "Lu", "Li", "Fou", "Shan", "Piao", "Kou", "Jiao", "Gua", "Qiao", "Jue", "Hua", "Zha", "Zhuo", "Lian", "Ju", "Pi", "Liu", "Gui", "Jiao", "Gui", "Jian", "Jian", "Tang", "Huo", "Ji", "Jian", "Yi", "Jian", "Zhi", "Chan", "Cuan", "Mo", "Li", "Zhu", "Li", "Ya", "Quan", "Ban", "Gong", "Jia", "Wu", "Mai", "Lie", "Jin", "Keng", "Xie", "Zhi", "Dong", "Zhu", "Nu", "Jie", "Qu", "Shao", "Yi", "Zhu", "Miao", "Li", "Jing", "Lao", "Lao", "Juan", "Kou", "Yang", "Wa", "Xiao", "Mou", "Kuang", "Jie", "Lie", "He", "Shi", "Ke", "Jing", "Hao", "Bo", "Min", "Chi", "Lang", "Yong", "Yong", "Mian", "Ke", "Xun", "Juan", "Qing", "Lu", "Pou", "Meng", "Lai", "Le", "Kai", "Mian", "Dong", "Xu", "Xu", "Kan", "Wu", "Yi", "Xun", "Weng", "Sheng", "Lao", "Mu", "Lu", "Piao", "Shi", "Ji", "Qin", "Qiang", "Jiao", "Quan", "Yang", "Yi", "Jue", "Fan", "Juan", "Tong", "Ju", "Dan", "Xie", "Mai", "Xun", "Xun", "Lu", "Li", "Che", "Rang", "Quan", "Bao", "Shao", "Yun", "Jiu", "Bao", "Gou", "Wu"];
const Ek = Object.freeze(_k);
const zk = ["Yun", "Mwun", "Nay", "Gai", "Gai", "Bao", "Cong", void 0, "Xiong", "Peng", "Ju", "Tao", "Ge", "Pu", "An", "Pao", "Fu", "Gong", "Da", "Jiu", "Qiong", "Bi", "Hua", "Bei", "Nao", "Chi", "Fang", "Jiu", "Yi", "Za", "Jiang", "Kang", "Jiang", "Kuang", "Hu", "Xia", "Qu", "Bian", "Gui", "Qie", "Zang", "Kuang", "Fei", "Hu", "Tou", "Gui", "Gui", "Hui", "Dan", "Gui", "Lian", "Lian", "Suan", "Du", "Jiu", "Qu", "Xi", "Pi", "Qu", "Yi", "Qia", "Yan", "Bian", "Ni", "Qu", "Shi", "Xin", "Qian", "Nian", "Sa", "Zu", "Sheng", "Wu", "Hui", "Ban", "Shi", "Xi", "Wan", "Hua", "Xie", "Wan", "Bei", "Zu", "Zhuo", "Xie", "Dan", "Mai", "Nan", "Dan", "Ji", "Bo", "Shuai", "Bu", "Kuang", "Bian", "Bu", "Zhan", "Qia", "Lu", "You", "Lu", "Xi", "Gua", "Wo", "Xie", "Jie", "Jie", "Wei", "Ang", "Qiong", "Zhi", "Mao", "Yin", "Wei", "Shao", "Ji", "Que", "Luan", "Shi", "Juan", "Xie", "Xu", "Jin", "Que", "Wu", "Ji", "E", "Qing", "Xi", void 0, "Han", "Zhan", "E", "Ting", "Li", "Zhe", "Han", "Li", "Ya", "Ya", "Yan", "She", "Zhi", "Zha", "Pang", void 0, "He", "Ya", "Zhi", "Ce", "Pang", "Ti", "Li", "She", "Hou", "Ting", "Zui", "Cuo", "Fei", "Yuan", "Ce", "Yuan", "Xiang", "Yan", "Li", "Jue", "Sha", "Dian", "Chu", "Jiu", "Qin", "Ao", "Gui", "Yan", "Si", "Li", "Chang", "Lan", "Li", "Yan", "Yan", "Yuan", "Si", "Gong", "Lin", "Qiu", "Qu", "Qu", "Uk", "Lei", "Du", "Xian", "Zhuan", "San", "Can", "Can", "Can", "Can", "Ai", "Dai", "You", "Cha", "Ji", "You", "Shuang", "Fan", "Shou", "Guai", "Ba", "Fa", "Ruo", "Shi", "Shu", "Zhuo", "Qu", "Shou", "Bian", "Xu", "Jia", "Pan", "Sou", "Gao", "Wei", "Sou", "Die", "Rui", "Cong", "Kou", "Gu", "Ju", "Ling", "Gua", "Tao", "Kou", "Zhi", "Jiao", "Zhao", "Ba", "Ding", "Ke", "Tai", "Chi", "Shi", "You", "Qiu", "Po", "Ye", "Hao", "Si", "Tan", "Chi", "Le", "Diao", "Ji", void 0, "Hong"];
const $k = Object.freeze(zk);
const Ik = ["Mie", "Xu", "Mang", "Chi", "Ge", "Xuan", "Yao", "Zi", "He", "Ji", "Diao", "Cun", "Tong", "Ming", "Hou", "Li", "Tu", "Xiang", "Zha", "Xia", "Ye", "Lu", "A", "Ma", "Ou", "Xue", "Yi", "Jun", "Chou", "Lin", "Tun", "Yin", "Fei", "Bi", "Qin", "Qin", "Jie", "Bu", "Fou", "Ba", "Dun", "Fen", "E", "Han", "Ting", "Hang", "Shun", "Qi", "Hong", "Zhi", "Shen", "Wu", "Wu", "Chao", "Ne", "Xue", "Xi", "Chui", "Dou", "Wen", "Hou", "Ou", "Wu", "Gao", "Ya", "Jun", "Lu", "E", "Ge", "Mei", "Ai", "Qi", "Cheng", "Wu", "Gao", "Fu", "Jiao", "Hong", "Chi", "Sheng", "Ne", "Tun", "Fu", "Yi", "Dai", "Ou", "Li", "Bai", "Yuan", "Kuai", void 0, "Qiang", "Wu", "E", "Shi", "Quan", "Pen", "Wen", "Ni", "M", "Ling", "Ran", "You", "Di", "Zhou", "Shi", "Zhou", "Tie", "Xi", "Yi", "Qi", "Ping", "Zi", "Gu", "Zi", "Wei", "Xu", "He", "Nao", "Xia", "Pei", "Yi", "Xiao", "Shen", "Hu", "Ming", "Da", "Qu", "Ju", "Gem", "Za", "Tuo", "Duo", "Pou", "Pao", "Bi", "Fu", "Yang", "He", "Zha", "He", "Hai", "Jiu", "Yong", "Fu", "Que", "Zhou", "Wa", "Ka", "Gu", "Ka", "Zuo", "Bu", "Long", "Dong", "Ning", "Tha", "Si", "Xian", "Huo", "Qi", "Er", "E", "Guang", "Zha", "Xi", "Yi", "Lie", "Zi", "Mie", "Mi", "Zhi", "Yao", "Ji", "Zhou", "Ge", "Shuai", "Zan", "Xiao", "Ke", "Hui", "Kua", "Huai", "Tao", "Xian", "E", "Xuan", "Xiu", "Wai", "Yan", "Lao", "Yi", "Ai", "Pin", "Shen", "Tong", "Hong", "Xiong", "Chi", "Wa", "Ha", "Zai", "Yu", "Di", "Pai", "Xiang", "Ai", "Hen", "Kuang", "Ya", "Da", "Xiao", "Bi", "Yue", void 0, "Hua", "Sasou", "Kuai", "Duo", void 0, "Ji", "Nong", "Mou", "Yo", "Hao", "Yuan", "Long", "Pou", "Mang", "Ge", "E", "Chi", "Shao", "Li", "Na", "Zu", "He", "Ku", "Xiao", "Xian", "Lao", "Bo", "Zhe", "Zha", "Liang", "Ba", "Mie", "Le", "Sui", "Fou", "Bu", "Han", "Heng", "Geng", "Shuo", "Ge"];
const qk = Object.freeze(Ik);
const Uk = ["You", "Yan", "Gu", "Gu", "Bai", "Han", "Suo", "Chun", "Yi", "Ai", "Jia", "Tu", "Xian", "Huan", "Li", "Xi", "Tang", "Zuo", "Qiu", "Che", "Wu", "Zao", "Ya", "Dou", "Qi", "Di", "Qin", "Ma", "Mal", "Hong", "Dou", "Kes", "Lao", "Liang", "Suo", "Zao", "Huan", "Lang", "Sha", "Ji", "Zuo", "Wo", "Feng", "Yin", "Hu", "Qi", "Shou", "Wei", "Shua", "Chang", "Er", "Li", "Qiang", "An", "Jie", "Yo", "Nian", "Yu", "Tian", "Lai", "Sha", "Xi", "Tuo", "Hu", "Ai", "Zhou", "Nou", "Ken", "Zhuo", "Zhuo", "Shang", "Di", "Heng", "Lan", "A", "Xiao", "Xiang", "Tun", "Wu", "Wen", "Cui", "Sha", "Hu", "Qi", "Qi", "Tao", "Dan", "Dan", "Ye", "Zi", "Bi", "Cui", "Chuo", "He", "Ya", "Qi", "Zhe", "Pei", "Liang", "Xian", "Pi", "Sha", "La", "Ze", "Qing", "Gua", "Pa", "Zhe", "Se", "Zhuan", "Nie", "Guo", "Luo", "Yan", "Di", "Quan", "Tan", "Bo", "Ding", "Lang", "Xiao", void 0, "Tang", "Chi", "Ti", "An", "Jiu", "Dan", "Ke", "Yong", "Wei", "Nan", "Shan", "Yu", "Zhe", "La", "Jie", "Hou", "Han", "Die", "Zhou", "Chai", "Wai", "Re", "Yu", "Yin", "Zan", "Yao", "Wo", "Mian", "Hu", "Yun", "Chuan", "Hui", "Huan", "Huan", "Xi", "He", "Ji", "Kui", "Zhong", "Wei", "Sha", "Xu", "Huang", "Du", "Nie", "Xuan", "Liang", "Yu", "Sang", "Chi", "Qiao", "Yan", "Dan", "Pen", "Can", "Li", "Yo", "Zha", "Wei", "Miao", "Ying", "Pen", "Phos", "Kui", "Xi", "Yu", "Jie", "Lou", "Ku", "Sao", "Huo", "Ti", "Yao", "He", "A", "Xiu", "Qiang", "Se", "Yong", "Su", "Hong", "Xie", "Yi", "Suo", "Ma", "Cha", "Hai", "Ke", "Ta", "Sang", "Tian", "Ru", "Sou", "Wa", "Ji", "Pang", "Wu", "Xian", "Shi", "Ge", "Zi", "Jie", "Luo", "Weng", "Wa", "Si", "Chi", "Hao", "Suo", "Jia", "Hai", "Suo", "Qin", "Nie", "He", "Cis", "Sai", "Ng", "Ge", "Na", "Dia", "Ai", void 0, "Tong", "Bi", "Ao", "Ao", "Lian", "Cui", "Zhe", "Mo", "Sou", "Sou", "Tan"];
const Vk = Object.freeze(Uk);
const iL = ["Di", "Qi", "Jiao", "Chong", "Jiao", "Kai", "Tan", "San", "Cao", "Jia", "Ai", "Xiao", "Piao", "Lou", "Ga", "Gu", "Xiao", "Hu", "Hui", "Guo", "Ou", "Xian", "Ze", "Chang", "Xu", "Po", "De", "Ma", "Ma", "Hu", "Lei", "Du", "Ga", "Tang", "Ye", "Beng", "Ying", "Saai", "Jiao", "Mi", "Xiao", "Hua", "Mai", "Ran", "Zuo", "Peng", "Lao", "Xiao", "Ji", "Zhu", "Chao", "Kui", "Zui", "Xiao", "Si", "Hao", "Fu", "Liao", "Qiao", "Xi", "Xiu", "Tan", "Tan", "Mo", "Xun", "E", "Zun", "Fan", "Chi", "Hui", "Zan", "Chuang", "Cu", "Dan", "Yu", "Tun", "Cheng", "Jiao", "Ye", "Xi", "Qi", "Hao", "Lian", "Xu", "Deng", "Hui", "Yin", "Pu", "Jue", "Qin", "Xun", "Nie", "Lu", "Si", "Yan", "Ying", "Da", "Dan", "Yu", "Zhou", "Jin", "Nong", "Yue", "Hui", "Qi", "E", "Zao", "Yi", "Shi", "Jiao", "Yuan", "Ai", "Yong", "Jue", "Kuai", "Yu", "Pen", "Dao", "Ge", "Xin", "Dun", "Dang", "Sin", "Sai", "Pi", "Pi", "Yin", "Zui", "Ning", "Di", "Lan", "Ta", "Huo", "Ru", "Hao", "Xia", "Ya", "Duo", "Xi", "Chou", "Ji", "Jin", "Hao", "Ti", "Chang", void 0, void 0, "Ca", "Ti", "Lu", "Hui", "Bo", "You", "Nie", "Yin", "Hu", "Mo", "Huang", "Zhe", "Li", "Liu", "Haai", "Nang", "Xiao", "Mo", "Yan", "Li", "Lu", "Long", "Fu", "Dan", "Chen", "Pin", "Pi", "Xiang", "Huo", "Mo", "Xi", "Duo", "Ku", "Yan", "Chan", "Ying", "Rang", "Dian", "La", "Ta", "Xiao", "Jiao", "Chuo", "Huan", "Huo", "Zhuan", "Nie", "Xiao", "Ca", "Li", "Chan", "Chai", "Li", "Yi", "Luo", "Nang", "Zan", "Su", "Xi", "So", "Jian", "Za", "Zhu", "Lan", "Nie", "Nang", void 0, void 0, "Wei", "Hui", "Yin", "Qiu", "Si", "Nin", "Jian", "Hui", "Xin", "Yin", "Nan", "Tuan", "Tuan", "Dun", "Kang", "Yuan", "Jiong", "Pian", "Yun", "Cong", "Hu", "Hui", "Yuan", "You", "Guo", "Kun", "Cong", "Wei", "Tu", "Wei", "Lun", "Guo", "Qun", "Ri", "Ling", "Gu", "Guo", "Tai", "Guo", "Tu", "You"];
const oL = Object.freeze(iL);
const eL = ["Guo", "Yin", "Hun", "Pu", "Yu", "Han", "Yuan", "Lun", "Quan", "Yu", "Qing", "Guo", "Chuan", "Wei", "Yuan", "Quan", "Ku", "Fu", "Yuan", "Yuan", "E", "Tu", "Tu", "Tu", "Tuan", "Lue", "Hui", "Yi", "Yuan", "Luan", "Luan", "Tu", "Ya", "Tu", "Ting", "Sheng", "Pu", "Lu", "Iri", "Ya", "Zai", "Wei", "Ge", "Yu", "Wu", "Gui", "Pi", "Yi", "Di", "Qian", "Qian", "Zhen", "Zhuo", "Dang", "Qia", "Akutsu", "Yama", "Kuang", "Chang", "Qi", "Nie", "Mo", "Ji", "Jia", "Zhi", "Zhi", "Ban", "Xun", "Tou", "Qin", "Fen", "Jun", "Keng", "Tun", "Fang", "Fen", "Ben", "Tan", "Kan", "Pi", "Zuo", "Keng", "Bi", "Xing", "Di", "Jing", "Ji", "Kuai", "Di", "Jing", "Jian", "Tan", "Li", "Ba", "Wu", "Fen", "Zhui", "Po", "Pan", "Tang", "Kun", "Qu", "Tan", "Zhi", "Tuo", "Gan", "Ping", "Dian", "Gua", "Ni", "Tai", "Pi", "Jiong", "Yang", "Fo", "Ao", "Liu", "Qiu", "Mu", "Ke", "Gou", "Xue", "Ba", "Chi", "Che", "Ling", "Zhu", "Fu", "Hu", "Zhi", "Chui", "La", "Long", "Long", "Lu", "Ao", "Tay", "Pao", void 0, "Xing", "Dong", "Ji", "Ke", "Lu", "Ci", "Chi", "Lei", "Gai", "Yin", "Hou", "Dui", "Zhao", "Fu", "Guang", "Yao", "Duo", "Duo", "Gui", "Cha", "Yang", "Yin", "Fa", "Gou", "Yuan", "Die", "Xie", "Ken", "Jiong", "Shou", "E", "Ha", "Dian", "Hong", "Wu", "Kua", void 0, "Tao", "Dang", "Kai", "Gake", "Nao", "An", "Xing", "Xian", "Huan", "Bang", "Pei", "Ba", "Yi", "Yin", "Han", "Xu", "Chui", "Cen", "Geng", "Ai", "Peng", "Fang", "Que", "Yong", "Xun", "Jia", "Di", "Mai", "Lang", "Xuan", "Cheng", "Yan", "Jin", "Zhe", "Lei", "Lie", "Bu", "Cheng", "Gomi", "Bu", "Shi", "Xun", "Guo", "Jiong", "Ye", "Nian", "Di", "Yu", "Bu", "Ya", "Juan", "Sui", "Pi", "Cheng", "Wan", "Ju", "Lun", "Zheng", "Kong", "Chong", "Dong", "Dai", "Tan", "An", "Cai", "Shu", "Beng", "Kan", "Zhi", "Duo", "Yi", "Zhi", "Yi", "Pei", "Ji", "Zhun", "Qi", "Sao", "Ju", "Ni"];
const nL = Object.freeze(eL);
const aL = ["Ku", "Ke", "Tang", "Kun", "Ni", "Jian", "Dui", "Jin", "Gang", "Yu", "E", "Peng", "Gu", "Tu", "Leng", void 0, "Ya", "Qian", void 0, "An", void 0, "Duo", "Nao", "Tu", "Cheng", "Yin", "Hun", "Bi", "Lian", "Guo", "Die", "Zhuan", "Hou", "Bao", "Bao", "Yu", "Di", "Mao", "Jie", "Ruan", "E", "Geng", "Kan", "Zong", "Yu", "Huang", "E", "Yao", "Yan", "Bao", "Ji", "Mei", "Chang", "Du", "Tuo", "Yin", "Feng", "Zhong", "Jie", "Zhen", "Feng", "Gang", "Chuan", "Jian", "Pyeng", "Toride", "Xiang", "Huang", "Leng", "Duan", void 0, "Xuan", "Ji", "Ji", "Kuai", "Ying", "Ta", "Cheng", "Yong", "Kai", "Su", "Su", "Shi", "Mi", "Ta", "Weng", "Cheng", "Tu", "Tang", "Que", "Zhong", "Li", "Peng", "Bang", "Sai", "Zang", "Dui", "Tian", "Wu", "Cheng", "Xun", "Ge", "Zhen", "Ai", "Gong", "Yan", "Kan", "Tian", "Yuan", "Wen", "Xie", "Liu", "Ama", "Lang", "Chang", "Peng", "Beng", "Chen", "Cu", "Lu", "Ou", "Qian", "Mei", "Mo", "Zhuan", "Shuang", "Shu", "Lou", "Chi", "Man", "Biao", "Jing", "Qi", "Shu", "Di", "Zhang", "Kan", "Yong", "Dian", "Chen", "Zhi", "Xi", "Guo", "Qiang", "Jin", "Di", "Shang", "Mu", "Cui", "Yan", "Ta", "Zeng", "Qi", "Qiang", "Liang", void 0, "Zhui", "Qiao", "Zeng", "Xu", "Shan", "Shan", "Ba", "Pu", "Kuai", "Dong", "Fan", "Que", "Mo", "Dun", "Dun", "Dun", "Di", "Sheng", "Duo", "Duo", "Tan", "Deng", "Wu", "Fen", "Huang", "Tan", "Da", "Ye", "Sho", "Mama", "Yu", "Qiang", "Ji", "Qiao", "Ken", "Yi", "Pi", "Bi", "Dian", "Jiang", "Ye", "Yong", "Bo", "Tan", "Lan", "Ju", "Huai", "Dang", "Rang", "Qian", "Xun", "Lan", "Xi", "He", "Ai", "Ya", "Dao", "Hao", "Ruan", "Mama", "Lei", "Kuang", "Lu", "Yan", "Tan", "Wei", "Huai", "Long", "Long", "Rui", "Li", "Lin", "Rang", "Ten", "Xun", "Yan", "Lei", "Ba", void 0, "Shi", "Ren", void 0, "Zhuang", "Zhuang", "Sheng", "Yi", "Mai", "Ke", "Zhu", "Zhuang", "Hu", "Hu", "Kun", "Yi", "Hu", "Xu", "Kun", "Shou", "Mang", "Zun"];
const uL = Object.freeze(aL);
const tL = ["Shou", "Yi", "Zhi", "Gu", "Chu", "Jiang", "Feng", "Bei", "Cay", "Bian", "Sui", "Qun", "Ling", "Fu", "Zuo", "Xia", "Xiong", void 0, "Nao", "Xia", "Kui", "Xi", "Wai", "Yuan", "Mao", "Su", "Duo", "Duo", "Ye", "Qing", "Uys", "Gou", "Gou", "Qi", "Meng", "Meng", "Yin", "Huo", "Chen", "Da", "Ze", "Tian", "Tai", "Fu", "Guai", "Yao", "Yang", "Hang", "Gao", "Shi", "Ben", "Tai", "Tou", "Yan", "Bi", "Yi", "Kua", "Jia", "Duo", "Kwu", "Kuang", "Yun", "Jia", "Pa", "En", "Lian", "Huan", "Di", "Yan", "Pao", "Quan", "Qi", "Nai", "Feng", "Xie", "Fen", "Dian", void 0, "Kui", "Zou", "Huan", "Qi", "Kai", "Zha", "Ben", "Yi", "Jiang", "Tao", "Zang", "Ben", "Xi", "Xiang", "Fei", "Diao", "Xun", "Keng", "Dian", "Ao", "She", "Weng", "Pan", "Ao", "Wu", "Ao", "Jiang", "Lian", "Duo", "Yun", "Jiang", "Shi", "Fen", "Huo", "Bi", "Lian", "Duo", "Nu", "Nu", "Ding", "Nai", "Qian", "Jian", "Ta", "Jiu", "Nan", "Cha", "Hao", "Xian", "Fan", "Ji", "Shuo", "Ru", "Fei", "Wang", "Hong", "Zhuang", "Fu", "Ma", "Dan", "Ren", "Fu", "Jing", "Yan", "Xie", "Wen", "Zhong", "Pa", "Du", "Ji", "Keng", "Zhong", "Yao", "Jin", "Yun", "Miao", "Pei", "Shi", "Yue", "Zhuang", "Niu", "Yan", "Na", "Xin", "Fen", "Bi", "Yu", "Tuo", "Feng", "Yuan", "Fang", "Wu", "Yu", "Gui", "Du", "Ba", "Ni", "Zhou", "Zhuo", "Zhao", "Da", "Nai", "Yuan", "Tou", "Xuan", "Zhi", "E", "Mei", "Mo", "Qi", "Bi", "Shen", "Qie", "E", "He", "Xu", "Fa", "Zheng", "Min", "Ban", "Mu", "Fu", "Ling", "Zi", "Zi", "Shi", "Ran", "Shan", "Yang", "Man", "Jie", "Gu", "Si", "Xing", "Wei", "Zi", "Ju", "Shan", "Pin", "Ren", "Yao", "Tong", "Jiang", "Shu", "Ji", "Gai", "Shang", "Kuo", "Juan", "Jiao", "Gou", "Mu", "Jian", "Jian", "Yi", "Nian", "Zhi", "Ji", "Ji", "Xian", "Heng", "Guang", "Jun", "Kua", "Yan", "Ming", "Lie", "Pei", "Yan", "You", "Yan", "Cha", "Shen", "Yin", "Chi", "Gui", "Quan", "Zi"];
const dL = Object.freeze(tL);
const gL = ["Song", "Wei", "Hong", "Wa", "Lou", "Ya", "Rao", "Jiao", "Luan", "Ping", "Xian", "Shao", "Li", "Cheng", "Xiao", "Mang", "Fu", "Suo", "Wu", "Wei", "Ke", "Lai", "Chuo", "Ding", "Niang", "Xing", "Nan", "Yu", "Nuo", "Pei", "Nei", "Juan", "Shen", "Zhi", "Han", "Di", "Zhuang", "E", "Pin", "Tui", "Han", "Mian", "Wu", "Yan", "Wu", "Xi", "Yan", "Yu", "Si", "Yu", "Wa", void 0, "Xian", "Ju", "Qu", "Shui", "Qi", "Xian", "Zhui", "Dong", "Chang", "Lu", "Ai", "E", "E", "Lou", "Mian", "Cong", "Pou", "Ju", "Po", "Cai", "Ding", "Wan", "Biao", "Xiao", "Shu", "Qi", "Hui", "Fu", "E", "Wo", "Tan", "Fei", "Wei", "Jie", "Tian", "Ni", "Quan", "Jing", "Hun", "Jing", "Qian", "Dian", "Xing", "Hu", "Wa", "Lai", "Bi", "Yin", "Chou", "Chuo", "Fu", "Jing", "Lun", "Yan", "Lan", "Kun", "Yin", "Ya", "Ju", "Li", "Dian", "Xian", "Hwa", "Hua", "Ying", "Chan", "Shen", "Ting", "Dang", "Yao", "Wu", "Nan", "Ruo", "Jia", "Tou", "Xu", "Yu", "Wei", "Ti", "Rou", "Mei", "Dan", "Ruan", "Qin", "Hui", "Wu", "Qian", "Chun", "Mao", "Fu", "Jie", "Duan", "Xi", "Zhong", "Mei", "Huang", "Mian", "An", "Ying", "Xuan", "Jie", "Wei", "Mei", "Yuan", "Zhen", "Qiu", "Ti", "Xie", "Tuo", "Lian", "Mao", "Ran", "Si", "Pian", "Wei", "Wa", "Jiu", "Hu", "Ao", void 0, "Bou", "Xu", "Tou", "Gui", "Zou", "Yao", "Pi", "Xi", "Yuan", "Ying", "Rong", "Ru", "Chi", "Liu", "Mei", "Pan", "Ao", "Ma", "Gou", "Kui", "Qin", "Jia", "Sao", "Zhen", "Yuan", "Cha", "Yong", "Ming", "Ying", "Ji", "Su", "Niao", "Xian", "Tao", "Pang", "Lang", "Nao", "Bao", "Ai", "Pi", "Pin", "Yi", "Piao", "Yu", "Lei", "Xuan", "Man", "Yi", "Zhang", "Kang", "Yong", "Ni", "Li", "Di", "Gui", "Yan", "Jin", "Zhuan", "Chang", "Ce", "Han", "Nen", "Lao", "Mo", "Zhe", "Hu", "Hu", "Ao", "Nen", "Qiang", "Ma", "Pie", "Gu", "Wu", "Jiao", "Tuo", "Zhan", "Mao", "Xian", "Xian", "Mo", "Liao", "Lian", "Hua"];
const sL = Object.freeze(gL);
const hL = ["Gui", "Deng", "Zhi", "Xu", "Yi", "Hua", "Xi", "Hui", "Rao", "Xi", "Yan", "Chan", "Jiao", "Mei", "Fan", "Fan", "Xian", "Yi", "Wei", "Jiao", "Fu", "Shi", "Bi", "Shan", "Sui", "Qiang", "Lian", "Huan", "Xin", "Niao", "Dong", "Yi", "Can", "Ai", "Niang", "Neng", "Ma", "Tiao", "Chou", "Jin", "Ci", "Yu", "Pin", "Yong", "Xu", "Nai", "Yan", "Tai", "Ying", "Can", "Niao", "Wo", "Ying", "Mian", "Kaka", "Ma", "Shen", "Xing", "Ni", "Du", "Liu", "Yuan", "Lan", "Yan", "Shuang", "Ling", "Jiao", "Niang", "Lan", "Xian", "Ying", "Shuang", "Shuai", "Quan", "Mi", "Li", "Luan", "Yan", "Zhu", "Lan", "Zi", "Jie", "Jue", "Jue", "Kong", "Yun", "Zi", "Zi", "Cun", "Sun", "Fu", "Bei", "Zi", "Xiao", "Xin", "Meng", "Si", "Tai", "Bao", "Ji", "Gu", "Nu", "Xue", void 0, "Zhuan", "Hai", "Luan", "Sun", "Huai", "Mie", "Cong", "Qian", "Shu", "Chan", "Ya", "Zi", "Ni", "Fu", "Zi", "Li", "Xue", "Bo", "Ru", "Lai", "Nie", "Nie", "Ying", "Luan", "Mian", "Ning", "Rong", "Ta", "Gui", "Zhai", "Qiong", "Yu", "Shou", "An", "Tu", "Song", "Wan", "Rou", "Yao", "Hong", "Yi", "Jing", "Zhun", "Mi", "Zhu", "Dang", "Hong", "Zong", "Guan", "Zhou", "Ding", "Wan", "Yi", "Bao", "Shi", "Shi", "Chong", "Shen", "Ke", "Xuan", "Shi", "You", "Huan", "Yi", "Tiao", "Shi", "Xian", "Gong", "Cheng", "Qun", "Gong", "Xiao", "Zai", "Zha", "Bao", "Hai", "Yan", "Xiao", "Jia", "Shen", "Chen", "Rong", "Huang", "Mi", "Kou", "Kuan", "Bin", "Su", "Cai", "Zan", "Ji", "Yuan", "Ji", "Yin", "Mi", "Kou", "Qing", "Que", "Zhen", "Jian", "Fu", "Ning", "Bing", "Huan", "Mei", "Qin", "Han", "Yu", "Shi", "Ning", "Qin", "Ning", "Zhi", "Yu", "Bao", "Kuan", "Ning", "Qin", "Mo", "Cha", "Ju", "Gua", "Qin", "Hu", "Wu", "Liao", "Shi", "Zhu", "Zhai", "Shen", "Wei", "Xie", "Kuan", "Hui", "Liao", "Jun", "Huan", "Yi", "Yi", "Bao", "Qin", "Chong", "Bao", "Feng", "Cun", "Dui", "Si", "Xun", "Dao", "Lu", "Dui", "Shou"];
const rL = Object.freeze(hL);
const lL = ["Po", "Feng", "Zhuan", "Fu", "She", "Ke", "Jiang", "Jiang", "Zhuan", "Wei", "Zun", "Xun", "Shu", "Dui", "Dao", "Xiao", "Ji", "Shao", "Er", "Er", "Er", "Ga", "Jian", "Shu", "Chen", "Shang", "Shang", "Mo", "Ga", "Chang", "Liao", "Xian", "Xian", void 0, "Wang", "Wang", "You", "Liao", "Liao", "Yao", "Mang", "Wang", "Wang", "Wang", "Ga", "Yao", "Duo", "Kui", "Zhong", "Jiu", "Gan", "Gu", "Gan", "Tui", "Gan", "Gan", "Shi", "Yin", "Chi", "Kao", "Ni", "Jin", "Wei", "Niao", "Ju", "Pi", "Ceng", "Xi", "Bi", "Ju", "Jie", "Tian", "Qu", "Ti", "Jie", "Wu", "Diao", "Shi", "Shi", "Ping", "Ji", "Xie", "Chen", "Xi", "Ni", "Zhan", "Xi", void 0, "Man", "E", "Lou", "Ping", "Ti", "Fei", "Shu", "Xie", "Tu", "Lu", "Lu", "Xi", "Ceng", "Lu", "Ju", "Xie", "Ju", "Jue", "Liao", "Jue", "Shu", "Xi", "Che", "Tun", "Ni", "Shan", void 0, "Xian", "Li", "Xue", "Nata", void 0, "Long", "Yi", "Qi", "Ren", "Wu", "Han", "Shen", "Yu", "Chu", "Sui", "Qi", void 0, "Yue", "Ban", "Yao", "Ang", "Ya", "Wu", "Jie", "E", "Ji", "Qian", "Fen", "Yuan", "Qi", "Cen", "Qian", "Qi", "Cha", "Jie", "Qu", "Gang", "Xian", "Ao", "Lan", "Dao", "Ba", "Zuo", "Zuo", "Yang", "Ju", "Gang", "Ke", "Gou", "Xue", "Bei", "Li", "Tiao", "Ju", "Yan", "Fu", "Xiu", "Jia", "Ling", "Tuo", "Pei", "You", "Dai", "Kuang", "Yue", "Qu", "Hu", "Po", "Min", "An", "Tiao", "Ling", "Chi", "Yuri", "Dong", "Cem", "Kui", "Xiu", "Mao", "Tong", "Xue", "Yi", "Kura", "He", "Ke", "Luo", "E", "Fu", "Xun", "Die", "Lu", "An", "Er", "Gai", "Quan", "Tong", "Yi", "Mu", "Shi", "An", "Wei", "Hu", "Zhi", "Mi", "Li", "Ji", "Tong", "Wei", "You", "Sang", "Xia", "Li", "Yao", "Jiao", "Zheng", "Luan", "Jiao", "E", "E", "Yu", "Ye", "Bu", "Qiao", "Qun", "Feng", "Feng", "Nao", "Li", "You", "Xian", "Hong", "Dao", "Shen", "Cheng", "Tu", "Geng", "Jun", "Hao", "Xia", "Yin", "Yu"];
const vL = Object.freeze(lL);
const yL = ["Lang", "Kan", "Lao", "Lai", "Xian", "Que", "Kong", "Chong", "Chong", "Ta", "Lin", "Hua", "Ju", "Lai", "Qi", "Min", "Kun", "Kun", "Zu", "Gu", "Cui", "Ya", "Ya", "Gang", "Lun", "Lun", "Leng", "Jue", "Duo", "Zheng", "Guo", "Yin", "Dong", "Han", "Zheng", "Wei", "Yao", "Pi", "Yan", "Song", "Jie", "Beng", "Zu", "Jue", "Dong", "Zhan", "Gu", "Yin", void 0, "Ze", "Huang", "Yu", "Wei", "Yang", "Feng", "Qiu", "Dun", "Ti", "Yi", "Zhi", "Shi", "Zai", "Yao", "E", "Zhu", "Kan", "Lu", "Yan", "Mei", "Gan", "Ji", "Ji", "Huan", "Ting", "Sheng", "Mei", "Qian", "Wu", "Yu", "Zong", "Lan", "Jue", "Yan", "Yan", "Wei", "Zong", "Cha", "Sui", "Rong", "Yamashina", "Qin", "Yu", "Kewashii", "Lou", "Tu", "Dui", "Xi", "Weng", "Cang", "Dang", "Hong", "Jie", "Ai", "Liu", "Wu", "Song", "Qiao", "Zi", "Wei", "Beng", "Dian", "Cuo", "Qian", "Yong", "Nie", "Cuo", "Ji", void 0, "Tao", "Song", "Zong", "Jiang", "Liao", "Kang", "Chan", "Die", "Cen", "Ding", "Tu", "Lou", "Zhang", "Zhan", "Zhan", "Ao", "Cao", "Qu", "Qiang", "Zui", "Zui", "Dao", "Dao", "Xi", "Yu", "Bo", "Long", "Xiang", "Ceng", "Bo", "Qin", "Jiao", "Yan", "Lao", "Zhan", "Lin", "Liao", "Liao", "Jin", "Deng", "Duo", "Zun", "Jiao", "Gui", "Yao", "Qiao", "Yao", "Jue", "Zhan", "Yi", "Xue", "Nao", "Ye", "Ye", "Yi", "E", "Xian", "Ji", "Xie", "Ke", "Xi", "Di", "Ao", "Zui", void 0, "Ni", "Rong", "Dao", "Ling", "Za", "Yu", "Yue", "Yin", void 0, "Jie", "Li", "Sui", "Long", "Long", "Dian", "Ying", "Xi", "Ju", "Chan", "Ying", "Kui", "Yan", "Wei", "Nao", "Quan", "Chao", "Cuan", "Luan", "Dian", "Dian", void 0, "Yan", "Yan", "Yan", "Nao", "Yan", "Chuan", "Gui", "Chuan", "Zhou", "Huang", "Jing", "Xun", "Chao", "Chao", "Lie", "Gong", "Zuo", "Qiao", "Ju", "Gong", "Kek", "Wu", "Pwu", "Pwu", "Chai", "Qiu", "Qiu", "Ji", "Yi", "Si", "Ba", "Zhi", "Zhao", "Xiang", "Yi", "Jin", "Xun", "Juan", "Phas", "Xun", "Jin", "Fu"];
const cL = Object.freeze(yL);
const bL = ["Za", "Bi", "Shi", "Bu", "Ding", "Shuai", "Fan", "Nie", "Shi", "Fen", "Pa", "Zhi", "Xi", "Hu", "Dan", "Wei", "Zhang", "Tang", "Dai", "Ma", "Pei", "Pa", "Tie", "Fu", "Lian", "Zhi", "Zhou", "Bo", "Zhi", "Di", "Mo", "Yi", "Yi", "Ping", "Qia", "Juan", "Ru", "Shuai", "Dai", "Zheng", "Shui", "Qiao", "Zhen", "Shi", "Qun", "Xi", "Bang", "Dai", "Gui", "Chou", "Ping", "Zhang", "Sha", "Wan", "Dai", "Wei", "Chang", "Sha", "Qi", "Ze", "Guo", "Mao", "Du", "Hou", "Zheng", "Xu", "Mi", "Wei", "Wo", "Fu", "Yi", "Bang", "Ping", "Tazuna", "Gong", "Pan", "Huang", "Dao", "Mi", "Jia", "Teng", "Hui", "Zhong", "Shan", "Man", "Mu", "Biao", "Guo", "Ze", "Mu", "Bang", "Zhang", "Jiong", "Chan", "Fu", "Zhi", "Hu", "Fan", "Chuang", "Bi", "Hei", void 0, "Mi", "Qiao", "Chan", "Fen", "Meng", "Bang", "Chou", "Mie", "Chu", "Jie", "Xian", "Lan", "Gan", "Ping", "Nian", "Qian", "Bing", "Bing", "Xing", "Gan", "Yao", "Huan", "You", "You", "Ji", "Guang", "Pi", "Ting", "Ze", "Guang", "Zhuang", "Mo", "Qing", "Bi", "Qin", "Dun", "Chuang", "Gui", "Ya", "Bai", "Jie", "Xu", "Lu", "Wu", void 0, "Ku", "Ying", "Di", "Pao", "Dian", "Ya", "Miao", "Geng", "Ci", "Fu", "Tong", "Pang", "Fei", "Xiang", "Yi", "Zhi", "Tiao", "Zhi", "Xiu", "Du", "Zuo", "Xiao", "Tu", "Gui", "Ku", "Pang", "Ting", "You", "Bu", "Ding", "Cheng", "Lai", "Bei", "Ji", "An", "Shu", "Kang", "Yong", "Tuo", "Song", "Shu", "Qing", "Yu", "Yu", "Miao", "Sou", "Ce", "Xiang", "Fei", "Jiu", "He", "Hui", "Liu", "Sha", "Lian", "Lang", "Sou", "Jian", "Pou", "Qing", "Jiu", "Jiu", "Qin", "Ao", "Kuo", "Lou", "Yin", "Liao", "Dai", "Lu", "Yi", "Chu", "Chan", "Tu", "Si", "Xin", "Miao", "Chang", "Wu", "Fei", "Guang", "Koc", "Kuai", "Bi", "Qiang", "Xie", "Lin", "Lin", "Liao", "Lu", void 0, "Ying", "Xian", "Ting", "Yong", "Li", "Ting", "Yin", "Xun", "Yan", "Ting", "Di", "Po", "Jian", "Hui", "Nai", "Hui", "Gong", "Nian"];
const pL = Object.freeze(bL);
const wL = ["Kai", "Bian", "Yi", "Qi", "Nong", "Fen", "Ju", "Yan", "Yi", "Zang", "Bi", "Yi", "Yi", "Er", "San", "Shi", "Er", "Shi", "Shi", "Gong", "Diao", "Yin", "Hu", "Fu", "Hong", "Wu", "Tui", "Chi", "Jiang", "Ba", "Shen", "Di", "Zhang", "Jue", "Tao", "Fu", "Di", "Mi", "Xian", "Hu", "Chao", "Nu", "Jing", "Zhen", "Yi", "Mi", "Quan", "Wan", "Shao", "Ruo", "Xuan", "Jing", "Dun", "Zhang", "Jiang", "Qiang", "Peng", "Dan", "Qiang", "Bi", "Bi", "She", "Dan", "Jian", "Gou", "Sei", "Fa", "Bi", "Kou", "Nagi", "Bie", "Xiao", "Dan", "Kuo", "Qiang", "Hong", "Mi", "Kuo", "Wan", "Jue", "Ji", "Ji", "Gui", "Dang", "Lu", "Lu", "Tuan", "Hui", "Zhi", "Hui", "Hui", "Yi", "Yi", "Yi", "Yi", "Huo", "Huo", "Shan", "Xing", "Wen", "Tong", "Yan", "Yan", "Yu", "Chi", "Cai", "Biao", "Diao", "Bin", "Peng", "Yong", "Piao", "Zhang", "Ying", "Chi", "Chi", "Zhuo", "Tuo", "Ji", "Pang", "Zhong", "Yi", "Wang", "Che", "Bi", "Chi", "Ling", "Fu", "Wang", "Zheng", "Cu", "Wang", "Jing", "Dai", "Xi", "Xun", "Hen", "Yang", "Huai", "Lu", "Hou", "Wa", "Cheng", "Zhi", "Xu", "Jing", "Tu", "Cong", void 0, "Lai", "Cong", "De", "Pai", "Xi", void 0, "Qi", "Chang", "Zhi", "Cong", "Zhou", "Lai", "Yu", "Xie", "Jie", "Jian", "Chi", "Jia", "Bian", "Huang", "Fu", "Xun", "Wei", "Pang", "Yao", "Wei", "Xi", "Zheng", "Piao", "Chi", "De", "Zheng", "Zheng", "Bie", "De", "Chong", "Che", "Jiao", "Wei", "Jiao", "Hui", "Mei", "Long", "Xiang", "Bao", "Qu", "Xin", "Shu", "Bi", "Yi", "Le", "Ren", "Dao", "Ding", "Gai", "Ji", "Ren", "Ren", "Chan", "Tan", "Te", "Te", "Gan", "Qi", "Shi", "Cun", "Zhi", "Wang", "Mang", "Xi", "Fan", "Ying", "Tian", "Min", "Min", "Zhong", "Chong", "Wu", "Ji", "Wu", "Xi", "Ye", "You", "Wan", "Cong", "Zhong", "Kuai", "Yu", "Bian", "Zhi", "Qi", "Cui", "Chen", "Tai", "Tun", "Qian", "Nian", "Hun", "Xiong", "Niu", "Wang", "Xian", "Xin", "Kang", "Hu", "Kai", "Fen"];
const jL = Object.freeze(wL);
const fL = ["Huai", "Tai", "Song", "Wu", "Ou", "Chang", "Chuang", "Ju", "Yi", "Bao", "Chao", "Min", "Pei", "Zuo", "Zen", "Yang", "Kou", "Ban", "Nu", "Nao", "Zheng", "Pa", "Bu", "Tie", "Gu", "Hu", "Ju", "Da", "Lian", "Si", "Chou", "Di", "Dai", "Yi", "Tu", "You", "Fu", "Ji", "Peng", "Xing", "Yuan", "Ni", "Guai", "Fu", "Xi", "Bi", "You", "Qie", "Xuan", "Cong", "Bing", "Huang", "Xu", "Chu", "Pi", "Xi", "Xi", "Tan", "Koraeru", "Zong", "Dui", void 0, "Ki", "Yi", "Chi", "Ren", "Xun", "Shi", "Xi", "Lao", "Heng", "Kuang", "Mu", "Zhi", "Xie", "Lian", "Tiao", "Huang", "Die", "Hao", "Kong", "Gui", "Heng", "Xi", "Xiao", "Shu", "S", "Kua", "Qiu", "Yang", "Hui", "Hui", "Chi", "Jia", "Yi", "Xiong", "Guai", "Lin", "Hui", "Zi", "Xu", "Chi", "Xiang", "Nu", "Hen", "En", "Ke", "Tong", "Tian", "Gong", "Quan", "Xi", "Qia", "Yue", "Peng", "Ken", "De", "Hui", "E", "Kyuu", "Tong", "Yan", "Kai", "Ce", "Nao", "Yun", "Mang", "Yong", "Yong", "Yuan", "Pi", "Kun", "Qiao", "Yue", "Yu", "Yu", "Jie", "Xi", "Zhe", "Lin", "Ti", "Han", "Hao", "Qie", "Ti", "Bu", "Yi", "Qian", "Hui", "Xi", "Bei", "Man", "Yi", "Heng", "Song", "Quan", "Cheng", "Hui", "Wu", "Wu", "You", "Li", "Liang", "Huan", "Cong", "Yi", "Yue", "Li", "Nin", "Nao", "E", "Que", "Xuan", "Qian", "Wu", "Min", "Cong", "Fei", "Bei", "Duo", "Cui", "Chang", "Men", "Li", "Ji", "Guan", "Guan", "Xing", "Dao", "Qi", "Kong", "Tian", "Lun", "Xi", "Kan", "Kun", "Ni", "Qing", "Chou", "Dun", "Guo", "Chan", "Liang", "Wan", "Yuan", "Jin", "Ji", "Lin", "Yu", "Huo", "He", "Quan", "Tan", "Ti", "Ti", "Nie", "Wang", "Chuo", "Bu", "Hun", "Xi", "Tang", "Xin", "Wei", "Hui", "E", "Rui", "Zong", "Jian", "Yong", "Dian", "Ju", "Can", "Cheng", "De", "Bei", "Qie", "Can", "Dan", "Guan", "Duo", "Nao", "Yun", "Xiang", "Zhui", "Die", "Huang", "Chun", "Qiong", "Re", "Xing", "Ce", "Bian", "Hun", "Zong", "Ti"];
const mL = Object.freeze(fL);
const YL = ["Qiao", "Chou", "Bei", "Xuan", "Wei", "Ge", "Qian", "Wei", "Yu", "Yu", "Bi", "Xuan", "Huan", "Min", "Bi", "Yi", "Mian", "Yong", "Kai", "Dang", "Yin", "E", "Chen", "Mou", "Ke", "Ke", "Yu", "Ai", "Qie", "Yan", "Nuo", "Gan", "Yun", "Zong", "Sai", "Leng", "Fen", void 0, "Kui", "Kui", "Que", "Gong", "Yun", "Su", "Su", "Qi", "Yao", "Song", "Huang", "Ji", "Gu", "Ju", "Chuang", "Ni", "Xie", "Kai", "Zheng", "Yong", "Cao", "Sun", "Shen", "Bo", "Kai", "Yuan", "Xie", "Hun", "Yong", "Yang", "Li", "Sao", "Tao", "Yin", "Ci", "Xu", "Qian", "Tai", "Huang", "Yun", "Shen", "Ming", void 0, "She", "Cong", "Piao", "Mo", "Mu", "Guo", "Chi", "Can", "Can", "Can", "Cui", "Min", "Te", "Zhang", "Tong", "Ao", "Shuang", "Man", "Guan", "Que", "Zao", "Jiu", "Hui", "Kai", "Lian", "Ou", "Song", "Jin", "Yin", "Lu", "Shang", "Wei", "Tuan", "Man", "Qian", "She", "Yong", "Qing", "Kang", "Di", "Zhi", "Lou", "Juan", "Qi", "Qi", "Yu", "Ping", "Liao", "Cong", "You", "Chong", "Zhi", "Tong", "Cheng", "Qi", "Qu", "Peng", "Bei", "Bie", "Chun", "Jiao", "Zeng", "Chi", "Lian", "Ping", "Kui", "Hui", "Qiao", "Cheng", "Yin", "Yin", "Xi", "Xi", "Dan", "Tan", "Duo", "Dui", "Dui", "Su", "Jue", "Ce", "Xiao", "Fan", "Fen", "Lao", "Lao", "Chong", "Han", "Qi", "Xian", "Min", "Jing", "Liao", "Wu", "Can", "Jue", "Cu", "Xian", "Tan", "Sheng", "Pi", "Yi", "Chu", "Xian", "Nao", "Dan", "Tan", "Jing", "Song", "Han", "Jiao", "Wai", "Huan", "Dong", "Qin", "Qin", "Qu", "Cao", "Ken", "Xie", "Ying", "Ao", "Mao", "Yi", "Lin", "Se", "Jun", "Huai", "Men", "Lan", "Ai", "Lin", "Yan", "Gua", "Xia", "Chi", "Yu", "Yin", "Dai", "Meng", "Ai", "Meng", "Dui", "Qi", "Mo", "Lan", "Men", "Chou", "Zhi", "Nuo", "Nuo", "Yan", "Yang", "Bo", "Zhi", "Kuang", "Kuang", "You", "Fu", "Liu", "Mie", "Cheng", void 0, "Chan", "Meng", "Lan", "Huai", "Xuan", "Rang", "Chan", "Ji", "Ju", "Huan", "She", "Yi"];
const kL = Object.freeze(YL);
const LL = ["Lian", "Nan", "Mi", "Tang", "Jue", "Gang", "Gang", "Gang", "Ge", "Yue", "Wu", "Jian", "Xu", "Shu", "Rong", "Xi", "Cheng", "Wo", "Jie", "Ge", "Jian", "Qiang", "Huo", "Qiang", "Zhan", "Dong", "Qi", "Jia", "Die", "Zei", "Jia", "Ji", "Shi", "Kan", "Ji", "Kui", "Gai", "Deng", "Zhan", "Chuang", "Ge", "Jian", "Jie", "Yu", "Jian", "Yan", "Lu", "Xi", "Zhan", "Xi", "Xi", "Chuo", "Dai", "Qu", "Hu", "Hu", "Hu", "E", "Shi", "Li", "Mao", "Hu", "Li", "Fang", "Suo", "Bian", "Dian", "Jiong", "Shang", "Yi", "Yi", "Shan", "Hu", "Fei", "Yan", "Shou", "T", "Cai", "Zha", "Qiu", "Le", "Bu", "Ba", "Da", "Reng", "Fu", "Hameru", "Zai", "Tuo", "Zhang", "Diao", "Kang", "Yu", "Ku", "Han", "Shen", "Cha", "Yi", "Gu", "Kou", "Wu", "Tuo", "Qian", "Zhi", "Ren", "Kuo", "Men", "Sao", "Yang", "Niu", "Ban", "Che", "Rao", "Xi", "Qian", "Ban", "Jia", "Yu", "Fu", "Ao", "Xi", "Pi", "Zhi", "Zi", "E", "Dun", "Zhao", "Cheng", "Ji", "Yan", "Kuang", "Bian", "Chao", "Ju", "Wen", "Hu", "Yue", "Jue", "Ba", "Qin", "Zhen", "Zheng", "Yun", "Wan", "Nu", "Yi", "Shu", "Zhua", "Pou", "Tou", "Dou", "Kang", "Zhe", "Pou", "Fu", "Pao", "Ba", "Ao", "Ze", "Tuan", "Kou", "Lun", "Qiang", void 0, "Hu", "Bao", "Bing", "Zhi", "Peng", "Tan", "Pu", "Pi", "Tai", "Yao", "Zhen", "Zha", "Yang", "Bao", "He", "Ni", "Yi", "Di", "Chi", "Pi", "Za", "Mo", "Mo", "Shen", "Ya", "Chou", "Qu", "Min", "Chu", "Jia", "Fu", "Zhan", "Zhu", "Dan", "Chai", "Mu", "Nian", "La", "Fu", "Pao", "Ban", "Pai", "Ling", "Na", "Guai", "Qian", "Ju", "Tuo", "Ba", "Tuo", "Tuo", "Ao", "Ju", "Zhuo", "Pan", "Zhao", "Bai", "Bai", "Di", "Ni", "Ju", "Kuo", "Long", "Jian", void 0, "Yong", "Lan", "Ning", "Bo", "Ze", "Qian", "Hen", "Gua", "Shi", "Jie", "Zheng", "Nin", "Gong", "Gong", "Quan", "Shuan", "Cun", "Zan", "Kao", "Chi", "Xie", "Ce", "Hui", "Pin", "Zhuai", "Shi", "Na"];
const ZL = Object.freeze(LL);
const SL = ["Bo", "Chi", "Gua", "Zhi", "Kuo", "Duo", "Duo", "Zhi", "Qie", "An", "Nong", "Zhen", "Ge", "Jiao", "Ku", "Dong", "Ru", "Tiao", "Lie", "Zha", "Lu", "Die", "Wa", "Jue", "Mushiru", "Ju", "Zhi", "Luan", "Ya", "Zhua", "Ta", "Xie", "Nao", "Dang", "Jiao", "Zheng", "Ji", "Hui", "Xun", "Ku", "Ai", "Tuo", "Nuo", "Cuo", "Bo", "Geng", "Ti", "Zhen", "Cheng", "Suo", "Suo", "Keng", "Mei", "Long", "Ju", "Peng", "Jian", "Yi", "Ting", "Shan", "Nuo", "Wan", "Xie", "Cha", "Feng", "Jiao", "Wu", "Jun", "Jiu", "Tong", "Kun", "Huo", "Tu", "Zhuo", "Pou", "Le", "Ba", "Han", "Shao", "Nie", "Juan", "Ze", "Song", "Ye", "Jue", "Bu", "Huan", "Bu", "Zun", "Yi", "Zhai", "Lu", "Sou", "Tuo", "Lao", "Sun", "Bang", "Jian", "Huan", "Dao", void 0, "Wan", "Qin", "Peng", "She", "Lie", "Min", "Men", "Fu", "Bai", "Ju", "Dao", "Wo", "Ai", "Juan", "Yue", "Zong", "Chen", "Chui", "Jie", "Tu", "Ben", "Na", "Nian", "Nuo", "Zu", "Wo", "Xi", "Xian", "Cheng", "Dian", "Sao", "Lun", "Qing", "Gang", "Duo", "Shou", "Diao", "Pou", "Di", "Zhang", "Gun", "Ji", "Tao", "Qia", "Qi", "Pai", "Shu", "Qian", "Ling", "Yi", "Ya", "Jue", "Zheng", "Liang", "Gua", "Yi", "Huo", "Shan", "Zheng", "Lue", "Cai", "Tan", "Che", "Bing", "Jie", "Ti", "Kong", "Tui", "Yan", "Cuo", "Zou", "Ju", "Tian", "Qian", "Ken", "Bai", "Shou", "Jie", "Lu", "Guo", "Haba", void 0, "Zhi", "Dan", "Mang", "Xian", "Sao", "Guan", "Peng", "Yuan", "Nuo", "Jian", "Zhen", "Jiu", "Jian", "Yu", "Yan", "Kui", "Nan", "Hong", "Rou", "Pi", "Wei", "Sai", "Zou", "Xuan", "Miao", "Ti", "Nie", "Cha", "Shi", "Zong", "Zhen", "Yi", "Shun", "Heng", "Bian", "Yang", "Huan", "Yan", "Zuan", "An", "Xu", "Ya", "Wo", "Ke", "Chuai", "Ji", "Ti", "La", "La", "Cheng", "Kai", "Jiu", "Jiu", "Tu", "Jie", "Hui", "Geng", "Chong", "Shuo", "She", "Xie", "Yuan", "Qian", "Ye", "Cha", "Zha", "Bei", "Yao", void 0, void 0, "Lan", "Wen", "Qin"];
const JL = Object.freeze(SL);
const CL = ["Chan", "Ge", "Lou", "Zong", "Geng", "Jiao", "Gou", "Qin", "Yong", "Que", "Chou", "Chi", "Zhan", "Sun", "Sun", "Bo", "Chu", "Rong", "Beng", "Cuo", "Sao", "Ke", "Yao", "Dao", "Zhi", "Nu", "Xie", "Jian", "Sou", "Qiu", "Gao", "Xian", "Shuo", "Sang", "Jin", "Mie", "E", "Chui", "Nuo", "Shan", "Ta", "Jie", "Tang", "Pan", "Ban", "Da", "Li", "Tao", "Hu", "Zhi", "Wa", "Xia", "Qian", "Wen", "Qiang", "Tian", "Zhen", "E", "Xi", "Nuo", "Quan", "Cha", "Zha", "Ge", "Wu", "En", "She", "Kang", "She", "Shu", "Bai", "Yao", "Bin", "Sou", "Tan", "Sa", "Chan", "Suo", "Liao", "Chong", "Chuang", "Guo", "Bing", "Feng", "Shuai", "Di", "Qi", "Sou", "Zhai", "Lian", "Tang", "Chi", "Guan", "Lu", "Luo", "Lou", "Zong", "Gai", "Hu", "Zha", "Chuang", "Tang", "Hua", "Cui", "Nai", "Mo", "Jiang", "Gui", "Ying", "Zhi", "Ao", "Zhi", "Nie", "Man", "Shan", "Kou", "Shu", "Suo", "Tuan", "Jiao", "Mo", "Mo", "Zhe", "Xian", "Keng", "Piao", "Jiang", "Yin", "Gou", "Qian", "Lue", "Ji", "Ying", "Jue", "Pie", "Pie", "Lao", "Dun", "Xian", "Ruan", "Kui", "Zan", "Yi", "Xun", "Cheng", "Cheng", "Sa", "Nao", "Heng", "Si", "Qian", "Huang", "Da", "Zun", "Nian", "Lin", "Zheng", "Hui", "Zhuang", "Jiao", "Ji", "Cao", "Dan", "Dan", "Che", "Bo", "Che", "Jue", "Xiao", "Liao", "Ben", "Fu", "Qiao", "Bo", "Cuo", "Zhuo", "Zhuan", "Tuo", "Pu", "Qin", "Dun", "Nian", void 0, "Xie", "Lu", "Jiao", "Cuan", "Ta", "Han", "Qiao", "Zhua", "Jian", "Gan", "Yong", "Lei", "Kuo", "Lu", "Shan", "Zhuo", "Ze", "Pu", "Chuo", "Ji", "Dang", "Suo", "Cao", "Qing", "Jing", "Huan", "Jie", "Qin", "Kuai", "Dan", "Xi", "Ge", "Pi", "Bo", "Ao", "Ju", "Ye", void 0, "Mang", "Sou", "Mi", "Ji", "Tai", "Zhuo", "Dao", "Xing", "Lan", "Ca", "Ju", "Ye", "Ru", "Ye", "Ye", "Ni", "Hu", "Ji", "Bin", "Ning", "Ge", "Zhi", "Jie", "Kuo", "Mo", "Jian", "Xie", "Lie", "Tan", "Bai", "Sou", "Lu", "Lue", "Rao", "Zhi"];
const XL = Object.freeze(CL);
const HL = ["Pan", "Yang", "Lei", "Sa", "Shu", "Zan", "Nian", "Xian", "Jun", "Huo", "Li", "La", "Han", "Ying", "Lu", "Long", "Qian", "Qian", "Zan", "Qian", "Lan", "San", "Ying", "Mei", "Rang", "Chan", void 0, "Cuan", "Xi", "She", "Luo", "Jun", "Mi", "Li", "Zan", "Luan", "Tan", "Zuan", "Li", "Dian", "Wa", "Dang", "Jiao", "Jue", "Lan", "Li", "Nang", "Zhi", "Gui", "Gui", "Qi", "Xin", "Pu", "Sui", "Shou", "Kao", "You", "Gai", "Yi", "Gong", "Gan", "Ban", "Fang", "Zheng", "Bo", "Dian", "Kou", "Min", "Wu", "Gu", "He", "Ce", "Xiao", "Mi", "Chu", "Ge", "Di", "Xu", "Jiao", "Min", "Chen", "Jiu", "Zhen", "Duo", "Yu", "Chi", "Ao", "Bai", "Xu", "Jiao", "Duo", "Lian", "Nie", "Bi", "Chang", "Dian", "Duo", "Yi", "Gan", "San", "Ke", "Yan", "Dun", "Qi", "Dou", "Xiao", "Duo", "Jiao", "Jing", "Yang", "Xia", "Min", "Shu", "Ai", "Qiao", "Ai", "Zheng", "Di", "Zhen", "Fu", "Shu", "Liao", "Qu", "Xiong", "Xi", "Jiao", "Sen", "Jiao", "Zhuo", "Yi", "Lian", "Bi", "Li", "Xiao", "Xiao", "Wen", "Xue", "Qi", "Qi", "Zhai", "Bin", "Jue", "Zhai", void 0, "Fei", "Ban", "Ban", "Lan", "Yu", "Lan", "Wei", "Dou", "Sheng", "Liao", "Jia", "Hu", "Xie", "Jia", "Yu", "Zhen", "Jiao", "Wo", "Tou", "Chu", "Jin", "Chi", "Yin", "Fu", "Qiang", "Zhan", "Qu", "Zhuo", "Zhan", "Duan", "Zhuo", "Si", "Xin", "Zhuo", "Zhuo", "Qin", "Lin", "Zhuo", "Chu", "Duan", "Zhu", "Fang", "Xie", "Hang", "Yu", "Shi", "Pei", "You", "Mye", "Pang", "Qi", "Zhan", "Mao", "Lu", "Pei", "Pi", "Liu", "Fu", "Fang", "Xuan", "Jing", "Jing", "Ni", "Zu", "Zhao", "Yi", "Liu", "Shao", "Jian", "Es", "Yi", "Qi", "Zhi", "Fan", "Piao", "Fan", "Zhan", "Guai", "Sui", "Yu", "Wu", "Ji", "Ji", "Ji", "Huo", "Ri", "Dan", "Jiu", "Zhi", "Zao", "Xie", "Tiao", "Xun", "Xu", "Xu", "Xu", "Gan", "Han", "Tai", "Di", "Xu", "Chan", "Shi", "Kuang", "Yang", "Shi", "Wang", "Min", "Min", "Tun", "Chun", "Wu"];
const BL = Object.freeze(HL);
const TL = ["Yun", "Bei", "Ang", "Ze", "Ban", "Jie", "Kun", "Sheng", "Hu", "Fang", "Hao", "Gui", "Chang", "Xuan", "Ming", "Hun", "Fen", "Qin", "Hu", "Yi", "Xi", "Xin", "Yan", "Ze", "Fang", "Tan", "Shen", "Ju", "Yang", "Zan", "Bing", "Xing", "Ying", "Xuan", "Pei", "Zhen", "Ling", "Chun", "Hao", "Mei", "Zuo", "Mo", "Bian", "Xu", "Hun", "Zhao", "Zong", "Shi", "Shi", "Yu", "Fei", "Die", "Mao", "Ni", "Chang", "Wen", "Dong", "Ai", "Bing", "Ang", "Zhou", "Long", "Xian", "Kuang", "Tiao", "Chao", "Shi", "Huang", "Huang", "Xuan", "Kui", "Xu", "Jiao", "Jin", "Zhi", "Jin", "Shang", "Tong", "Hong", "Yan", "Gai", "Xiang", "Shai", "Xiao", "Ye", "Yun", "Hui", "Han", "Han", "Jun", "Wan", "Xian", "Kun", "Zhou", "Xi", "Cheng", "Sheng", "Bu", "Zhe", "Zhe", "Wu", "Han", "Hui", "Hao", "Chen", "Wan", "Tian", "Zhuo", "Zui", "Zhou", "Pu", "Jing", "Xi", "Shan", "Yi", "Xi", "Qing", "Qi", "Jing", "Gui", "Zhen", "Yi", "Zhi", "An", "Wan", "Lin", "Liang", "Chang", "Wang", "Xiao", "Zan", "Hi", "Xuan", "Xuan", "Yi", "Xia", "Yun", "Hui", "Fu", "Min", "Kui", "He", "Ying", "Du", "Wei", "Shu", "Qing", "Mao", "Nan", "Jian", "Nuan", "An", "Yang", "Chun", "Yao", "Suo", "Jin", "Ming", "Jiao", "Kai", "Gao", "Weng", "Chang", "Qi", "Hao", "Yan", "Li", "Ai", "Ji", "Gui", "Men", "Zan", "Xie", "Hao", "Mu", "Mo", "Cong", "Ni", "Zhang", "Hui", "Bao", "Han", "Xuan", "Chuan", "Liao", "Xian", "Dan", "Jing", "Pie", "Lin", "Tun", "Xi", "Yi", "Ji", "Huang", "Tai", "Ye", "Ye", "Li", "Tan", "Tong", "Xiao", "Fei", "Qin", "Zhao", "Hao", "Yi", "Xiang", "Xing", "Sen", "Jiao", "Bao", "Jing", "Yian", "Ai", "Ye", "Ru", "Shu", "Meng", "Xun", "Yao", "Pu", "Li", "Chen", "Kuang", "Die", void 0, "Yan", "Huo", "Lu", "Xi", "Rong", "Long", "Nang", "Luo", "Luan", "Shai", "Tang", "Yan", "Chu", "Yue", "Yue", "Qu", "Yi", "Geng", "Ye", "Hu", "He", "Shu", "Cao", "Cao", "Noboru", "Man", "Ceng", "Ceng", "Ti"];
const DL = Object.freeze(TL);
const ML = ["Zui", "Can", "Xu", "Hui", "Yin", "Qie", "Fen", "Pi", "Yue", "You", "Ruan", "Peng", "Ban", "Fu", "Ling", "Fei", "Qu", void 0, "Nu", "Tiao", "Shuo", "Zhen", "Lang", "Lang", "Juan", "Ming", "Huang", "Wang", "Tun", "Zhao", "Ji", "Qi", "Ying", "Zong", "Wang", "Tong", "Lang", void 0, "Meng", "Long", "Mu", "Deng", "Wei", "Mo", "Ben", "Zha", "Zhu", "Shu", void 0, "Zhu", "Ren", "Ba", "Po", "Duo", "Duo", "Dao", "Li", "Qiu", "Ji", "Jiu", "Bi", "Xiu", "Ting", "Ci", "Sha", "Eburi", "Za", "Quan", "Qian", "Yu", "Gan", "Wu", "Cha", "Shan", "Xun", "Fan", "Wu", "Zi", "Li", "Xing", "Cai", "Cun", "Ren", "Shao", "Tuo", "Di", "Zhang", "Mang", "Chi", "Yi", "Gu", "Gong", "Du", "Yi", "Qi", "Shu", "Gang", "Tiao", "Moku", "Soma", "Tochi", "Lai", "Sugi", "Mang", "Yang", "Ma", "Miao", "Si", "Yuan", "Hang", "Fei", "Bei", "Jie", "Dong", "Gao", "Yao", "Xian", "Chu", "Qun", "Pa", "Shu", "Hua", "Xin", "Chou", "Zhu", "Chou", "Song", "Ban", "Song", "Ji", "Yue", "Jin", "Gou", "Ji", "Mao", "Pi", "Bi", "Wang", "Ang", "Fang", "Fen", "Yi", "Fu", "Nan", "Xi", "Hu", "Ya", "Dou", "Xun", "Zhen", "Yao", "Lin", "Rui", "E", "Mei", "Zhao", "Guo", "Zhi", "Cong", "Yun", "Waku", "Dou", "Shu", "Zao", void 0, "Li", "Haze", "Jian", "Cheng", "Matsu", "Qiang", "Feng", "Nan", "Xiao", "Xian", "Ku", "Ping", "Yi", "Xi", "Zhi", "Guai", "Xiao", "Jia", "Jia", "Gou", "Fu", "Mo", "Yi", "Ye", "Ye", "Shi", "Nie", "Bi", "Duo", "Yi", "Ling", "Bing", "Ni", "La", "He", "Pan", "Fan", "Zhong", "Dai", "Ci", "Yang", "Fu", "Bo", "Mou", "Gan", "Qi", "Ran", "Rou", "Mao", "Zhao", "Song", "Zhe", "Xia", "You", "Shen", "Ju", "Tuo", "Zuo", "Nan", "Ning", "Yong", "Di", "Zhi", "Zha", "Cha", "Dan", "Gu", "Pu", "Jiu", "Ao", "Fu", "Jian", "Bo", "Duo", "Ke", "Nai", "Zhu", "Bi", "Liu", "Chai", "Zha", "Si", "Zhu", "Pei", "Shi", "Guai", "Cha", "Yao", "Jue", "Jiu", "Shi"];
const QL = Object.freeze(ML);
const xL = ["Zhi", "Liu", "Mei", "Hoy", "Rong", "Zha", void 0, "Biao", "Zhan", "Jie", "Long", "Dong", "Lu", "Sayng", "Li", "Lan", "Yong", "Shu", "Xun", "Shuan", "Qi", "Zhen", "Qi", "Li", "Yi", "Xiang", "Zhen", "Li", "Su", "Gua", "Kan", "Bing", "Ren", "Xiao", "Bo", "Ren", "Bing", "Zi", "Chou", "Yi", "Jie", "Xu", "Zhu", "Jian", "Zui", "Er", "Er", "You", "Fa", "Gong", "Kao", "Lao", "Zhan", "Li", "Yin", "Yang", "He", "Gen", "Zhi", "Chi", "Ge", "Zai", "Luan", "Fu", "Jie", "Hang", "Gui", "Tao", "Guang", "Wei", "Kuang", "Ru", "An", "An", "Juan", "Yi", "Zhuo", "Ku", "Zhi", "Qiong", "Tong", "Sang", "Sang", "Huan", "Jie", "Jiu", "Xue", "Duo", "Zhui", "Yu", "Zan", "Kasei", "Ying", "Masu", void 0, "Zhan", "Ya", "Nao", "Zhen", "Dang", "Qi", "Qiao", "Hua", "Kuai", "Jiang", "Zhuang", "Xun", "Suo", "Sha", "Zhen", "Bei", "Ting", "Gua", "Jing", "Bo", "Ben", "Fu", "Rui", "Tong", "Jue", "Xi", "Lang", "Liu", "Feng", "Qi", "Wen", "Jun", "Gan", "Cu", "Liang", "Qiu", "Ting", "You", "Mei", "Bang", "Long", "Peng", "Zhuang", "Di", "Xuan", "Tu", "Zao", "Ao", "Gu", "Bi", "Di", "Han", "Zi", "Zhi", "Ren", "Bei", "Geng", "Jian", "Huan", "Wan", "Nuo", "Jia", "Tiao", "Ji", "Xiao", "Lu", "Huan", "Shao", "Cen", "Fen", "Song", "Meng", "Wu", "Li", "Li", "Dou", "Cen", "Ying", "Suo", "Ju", "Ti", "Jie", "Kun", "Zhuo", "Shu", "Chan", "Fan", "Wei", "Jing", "Li", "Bing", "Fumoto", "Shikimi", "Tao", "Zhi", "Lai", "Lian", "Jian", "Zhuo", "Ling", "Li", "Qi", "Bing", "Zhun", "Cong", "Qian", "Mian", "Qi", "Qi", "Cai", "Gun", "Chan", "Te", "Fei", "Pai", "Bang", "Pou", "Hun", "Zong", "Cheng", "Zao", "Ji", "Li", "Peng", "Yu", "Yu", "Gu", "Hun", "Dong", "Tang", "Gang", "Wang", "Di", "Xi", "Fan", "Cheng", "Zhan", "Qi", "Yuan", "Yan", "Yu", "Quan", "Yi", "Sen", "Ren", "Chui", "Leng", "Qi", "Zhuo", "Fu", "Ke", "Lai", "Zou", "Zou", "Zhuo", "Guan", "Fen", "Fen", "Chen", "Qiong", "Nie"];
const GL = Object.freeze(xL);
const WL = ["Wan", "Guo", "Lu", "Hao", "Jie", "Yi", "Chou", "Ju", "Ju", "Cheng", "Zuo", "Liang", "Qiang", "Zhi", "Zhui", "Ya", "Ju", "Bei", "Jiao", "Zhuo", "Zi", "Bin", "Peng", "Ding", "Chu", "Chang", "Kunugi", "Momiji", "Jian", "Gui", "Xi", "Du", "Qian", "Kunugi", "Soko", "Shide", "Luo", "Zhi", "Ken", "Myeng", "Tafu", void 0, "Peng", "Zhan", void 0, "Tuo", "Sen", "Duo", "Ye", "Fou", "Wei", "Wei", "Duan", "Jia", "Zong", "Jian", "Yi", "Shen", "Xi", "Yan", "Yan", "Chuan", "Zhan", "Chun", "Yu", "He", "Zha", "Wo", "Pian", "Bi", "Yao", "Huo", "Xu", "Ruo", "Yang", "La", "Yan", "Ben", "Hun", "Kui", "Jie", "Kui", "Si", "Feng", "Xie", "Tuo", "Zhi", "Jian", "Mu", "Mao", "Chu", "Hu", "Hu", "Lian", "Leng", "Ting", "Nan", "Yu", "You", "Mei", "Song", "Xuan", "Xuan", "Ying", "Zhen", "Pian", "Ye", "Ji", "Jie", "Ye", "Chu", "Shun", "Yu", "Cou", "Wei", "Mei", "Di", "Ji", "Jie", "Kai", "Qiu", "Ying", "Rou", "Heng", "Lou", "Le", "Hazou", "Katsura", "Pin", "Muro", "Gai", "Tan", "Lan", "Yun", "Yu", "Chen", "Lu", "Ju", "Sakaki", void 0, "Pi", "Xie", "Jia", "Yi", "Zhan", "Fu", "Nai", "Mi", "Lang", "Rong", "Gu", "Jian", "Ju", "Ta", "Yao", "Zhen", "Bang", "Sha", "Yuan", "Zi", "Ming", "Su", "Jia", "Yao", "Jie", "Huang", "Gan", "Fei", "Zha", "Qian", "Ma", "Sun", "Yuan", "Xie", "Rong", "Shi", "Zhi", "Cui", "Yun", "Ting", "Liu", "Rong", "Tang", "Que", "Zhai", "Si", "Sheng", "Ta", "Ke", "Xi", "Gu", "Qi", "Kao", "Gao", "Sun", "Pan", "Tao", "Ge", "Xun", "Dian", "Nou", "Ji", "Shuo", "Gou", "Chui", "Qiang", "Cha", "Qian", "Huai", "Mei", "Xu", "Gang", "Gao", "Zhuo", "Tuo", "Hashi", "Yang", "Dian", "Jia", "Jian", "Zui", "Kashi", "Ori", "Bin", "Zhu", void 0, "Xi", "Qi", "Lian", "Hui", "Yong", "Qian", "Guo", "Gai", "Gai", "Tuan", "Hua", "Cu", "Sen", "Cui", "Beng", "You", "Hu", "Jiang", "Hu", "Huan", "Kui", "Yi", "Nie", "Gao", "Kang", "Gui", "Gui", "Cao", "Man", "Jin"];
const NL = Object.freeze(WL);
const PL = ["Di", "Zhuang", "Le", "Lang", "Chen", "Cong", "Li", "Xiu", "Qing", "Shuang", "Fan", "Tong", "Guan", "Ji", "Suo", "Lei", "Lu", "Liang", "Mi", "Lou", "Chao", "Su", "Ke", "Shu", "Tang", "Biao", "Lu", "Jiu", "Shu", "Zha", "Shu", "Zhang", "Men", "Mo", "Niao", "Yang", "Tiao", "Peng", "Zhu", "Sha", "Xi", "Quan", "Heng", "Jian", "Cong", void 0, "Hokuso", "Qiang", "Tara", "Ying", "Er", "Xin", "Zhi", "Qiao", "Zui", "Cong", "Pu", "Shu", "Hua", "Kui", "Zhen", "Zun", "Yue", "Zhan", "Xi", "Xun", "Dian", "Fa", "Gan", "Mo", "Wu", "Qiao", "Nao", "Lin", "Liu", "Qiao", "Xian", "Run", "Fan", "Zhan", "Tuo", "Lao", "Yun", "Shun", "Tui", "Cheng", "Tang", "Meng", "Ju", "Cheng", "Su", "Jue", "Jue", "Tan", "Hui", "Ji", "Nuo", "Xiang", "Tuo", "Ning", "Rui", "Zhu", "Chuang", "Zeng", "Fen", "Qiong", "Ran", "Heng", "Cen", "Gu", "Liu", "Lao", "Gao", "Chu", "Zusa", "Nude", "Ca", "San", "Ji", "Dou", "Shou", "Lu", void 0, void 0, "Yuan", "Ta", "Shu", "Jiang", "Tan", "Lin", "Nong", "Yin", "Xi", "Sui", "Shan", "Zui", "Xuan", "Cheng", "Gan", "Ju", "Zui", "Yi", "Qin", "Pu", "Yan", "Lei", "Feng", "Hui", "Dang", "Ji", "Sui", "Bo", "Bi", "Ding", "Chu", "Zhua", "Kuai", "Ji", "Jie", "Jia", "Qing", "Zhe", "Jian", "Qiang", "Dao", "Yi", "Biao", "Song", "She", "Lin", "Kunugi", "Cha", "Meng", "Yin", "Tao", "Tai", "Mian", "Qi", "Toan", "Bin", "Huo", "Ji", "Qian", "Mi", "Ning", "Yi", "Gao", "Jian", "Yin", "Er", "Qing", "Yan", "Qi", "Mi", "Zhao", "Gui", "Chun", "Ji", "Kui", "Po", "Deng", "Chu", void 0, "Mian", "You", "Zhi", "Guang", "Qian", "Lei", "Lei", "Sa", "Lu", "Li", "Cuan", "Lu", "Mie", "Hui", "Ou", "Lu", "Jie", "Gao", "Du", "Yuan", "Li", "Fei", "Zhuo", "Sou", "Lian", "Tamo", "Chu", void 0, "Zhu", "Lu", "Yan", "Li", "Zhu", "Chen", "Jie", "E", "Su", "Huai", "Nie", "Yu", "Long", "Lai", void 0, "Xian", "Kwi", "Ju", "Xiao", "Ling", "Ying", "Jian", "Yin", "You", "Ying"];
const FL = Object.freeze(PL);
const RL = ["Xiang", "Nong", "Bo", "Chan", "Lan", "Ju", "Shuang", "She", "Wei", "Cong", "Quan", "Qu", "Cang", void 0, "Yu", "Luo", "Li", "Zan", "Luan", "Dang", "Jue", "Em", "Lan", "Lan", "Zhu", "Lei", "Li", "Ba", "Nang", "Yu", "Ling", "Tsuki", "Qian", "Ci", "Huan", "Xin", "Yu", "Yu", "Qian", "Ou", "Xu", "Chao", "Chu", "Chi", "Kai", "Yi", "Jue", "Xi", "Xu", "Xia", "Yu", "Kuai", "Lang", "Kuan", "Shuo", "Xi", "Ai", "Yi", "Qi", "Hu", "Chi", "Qin", "Kuan", "Kan", "Kuan", "Kan", "Chuan", "Sha", "Gua", "Yin", "Xin", "Xie", "Yu", "Qian", "Xiao", "Yi", "Ge", "Wu", "Tan", "Jin", "Ou", "Hu", "Ti", "Huan", "Xu", "Pen", "Xi", "Xiao", "Xu", "Xi", "Sen", "Lian", "Chu", "Yi", "Kan", "Yu", "Chuo", "Huan", "Zhi", "Zheng", "Ci", "Bu", "Wu", "Qi", "Bu", "Bu", "Wai", "Ju", "Qian", "Chi", "Se", "Chi", "Se", "Zhong", "Sui", "Sui", "Li", "Cuo", "Yu", "Li", "Gui", "Dai", "Dai", "Si", "Jian", "Zhe", "Mo", "Mo", "Yao", "Mo", "Cu", "Yang", "Tian", "Sheng", "Dai", "Shang", "Xu", "Xun", "Shu", "Can", "Jue", "Piao", "Qia", "Qiu", "Su", "Qing", "Yun", "Lian", "Yi", "Fou", "Zhi", "Ye", "Can", "Hun", "Dan", "Ji", "Ye", "Zhen", "Yun", "Wen", "Chou", "Bin", "Ti", "Jin", "Shang", "Yin", "Diao", "Cu", "Hui", "Cuan", "Yi", "Dan", "Du", "Jiang", "Lian", "Bin", "Du", "Tsukusu", "Jian", "Shu", "Ou", "Duan", "Zhu", "Yin", "Qing", "Yi", "Sha", "Que", "Ke", "Yao", "Jun", "Dian", "Hui", "Hui", "Gu", "Que", "Ji", "Yi", "Ou", "Hui", "Duan", "Yi", "Xiao", "Wu", "Guan", "Mu", "Mei", "Mei", "Ai", "Zuo", "Du", "Yu", "Bi", "Bi", "Bi", "Pi", "Pi", "Bi", "Chan", "Mao", void 0, void 0, "Pu", "Mushiru", "Jia", "Zhan", "Sai", "Mu", "Tuo", "Xun", "Er", "Rong", "Xian", "Ju", "Mu", "Hao", "Qiu", "Dou", "Mushiru", "Tan", "Pei", "Ju", "Duo", "Cui", "Bi", "San", void 0, "Mao", "Sui", "Yu", "Yu", "Tuo", "He", "Jian", "Ta", "San"];
const KL = Object.freeze(RL);
const AL = ["Lu", "Mu", "Li", "Tong", "Rong", "Chang", "Pu", "Luo", "Zhan", "Sao", "Zhan", "Meng", "Luo", "Qu", "Die", "Shi", "Di", "Min", "Jue", "Mang", "Qi", "Pie", "Nai", "Qi", "Dao", "Xian", "Chuan", "Fen", "Ri", "Nei", void 0, "Fu", "Shen", "Dong", "Qing", "Qi", "Yin", "Xi", "Hai", "Yang", "An", "Ya", "Ke", "Qing", "Ya", "Dong", "Dan", "Lu", "Qing", "Yang", "Yun", "Yun", "Shui", "San", "Zheng", "Bing", "Yong", "Dang", "Shitamizu", "Le", "Ni", "Tun", "Fan", "Gui", "Ting", "Zhi", "Qiu", "Bin", "Ze", "Mian", "Cuan", "Hui", "Diao", "Han", "Cha", "Zhuo", "Chuan", "Wan", "Fan", "Dai", "Xi", "Tuo", "Mang", "Qiu", "Qi", "Shan", "Pai", "Han", "Qian", "Wu", "Wu", "Xun", "Si", "Ru", "Gong", "Jiang", "Chi", "Wu", "Tsuchi", void 0, "Tang", "Zhi", "Chi", "Qian", "Mi", "Yu", "Wang", "Qing", "Jing", "Rui", "Jun", "Hong", "Tai", "Quan", "Ji", "Bian", "Bian", "Gan", "Wen", "Zhong", "Fang", "Xiong", "Jue", "Hang", "Niou", "Qi", "Fen", "Xu", "Xu", "Qin", "Yi", "Wo", "Yun", "Yuan", "Hang", "Yan", "Shen", "Chen", "Dan", "You", "Dun", "Hu", "Huo", "Qie", "Mu", "Rou", "Mei", "Ta", "Mian", "Wu", "Chong", "Tian", "Bi", "Sha", "Zhi", "Pei", "Pan", "Zhui", "Za", "Gou", "Liu", "Mei", "Ze", "Feng", "Ou", "Li", "Lun", "Cang", "Feng", "Wei", "Hu", "Mo", "Mei", "Shu", "Ju", "Zan", "Tuo", "Tuo", "Tuo", "He", "Li", "Mi", "Yi", "Fa", "Fei", "You", "Tian", "Zhi", "Zhao", "Gu", "Zhan", "Yan", "Si", "Kuang", "Jiong", "Ju", "Xie", "Qiu", "Yi", "Jia", "Zhong", "Quan", "Bo", "Hui", "Mi", "Ben", "Zhuo", "Chu", "Le", "You", "Gu", "Hong", "Gan", "Fa", "Mao", "Si", "Hu", "Ping", "Ci", "Fan", "Chi", "Su", "Ning", "Cheng", "Ling", "Pao", "Bo", "Qi", "Si", "Ni", "Ju", "Yue", "Zhu", "Sheng", "Lei", "Xuan", "Xue", "Fu", "Pan", "Min", "Tai", "Yang", "Ji", "Yong", "Guan", "Beng", "Xue", "Long", "Lu", void 0, "Bo", "Xie", "Po", "Ze", "Jing", "Yin"];
const OL = Object.freeze(AL);
const _L = ["Zhou", "Ji", "Yi", "Hui", "Hui", "Zui", "Cheng", "Yin", "Wei", "Hou", "Jian", "Yang", "Lie", "Si", "Ji", "Er", "Xing", "Fu", "Sa", "Suo", "Zhi", "Yin", "Wu", "Xi", "Kao", "Zhu", "Jiang", "Luo", void 0, "An", "Dong", "Yi", "Mou", "Lei", "Yi", "Mi", "Quan", "Jin", "Mo", "Wei", "Xiao", "Xie", "Hong", "Xu", "Shuo", "Kuang", "Tao", "Qie", "Ju", "Er", "Zhou", "Ru", "Ping", "Xun", "Xiong", "Zhi", "Guang", "Huan", "Ming", "Huo", "Wa", "Qia", "Pai", "Wu", "Qu", "Liu", "Yi", "Jia", "Jing", "Qian", "Jiang", "Jiao", "Cheng", "Shi", "Zhuo", "Ce", "Pal", "Kuai", "Ji", "Liu", "Chan", "Hun", "Hu", "Nong", "Xun", "Jin", "Lie", "Qiu", "Wei", "Zhe", "Jun", "Han", "Bang", "Mang", "Zhuo", "You", "Xi", "Bo", "Dou", "Wan", "Hong", "Yi", "Pu", "Ying", "Lan", "Hao", "Lang", "Han", "Li", "Geng", "Fu", "Wu", "Lian", "Chun", "Feng", "Yi", "Yu", "Tong", "Lao", "Hai", "Jin", "Jia", "Chong", "Weng", "Mei", "Sui", "Cheng", "Pei", "Xian", "Shen", "Tu", "Kun", "Pin", "Nie", "Han", "Jing", "Xiao", "She", "Nian", "Tu", "Yong", "Xiao", "Xian", "Ting", "E", "Su", "Tun", "Juan", "Cen", "Ti", "Li", "Shui", "Si", "Lei", "Shui", "Tao", "Du", "Lao", "Lai", "Lian", "Wei", "Wo", "Yun", "Huan", "Di", void 0, "Run", "Jian", "Zhang", "Se", "Fu", "Guan", "Xing", "Shou", "Shuan", "Ya", "Chuo", "Zhang", "Ye", "Kong", "Wo", "Han", "Tuo", "Dong", "He", "Wo", "Ju", "Gan", "Liang", "Hun", "Ta", "Zhuo", "Dian", "Qie", "De", "Juan", "Zi", "Xi", "Yao", "Qi", "Gu", "Guo", "Han", "Lin", "Tang", "Zhou", "Peng", "Hao", "Chang", "Shu", "Qi", "Fang", "Chi", "Lu", "Nao", "Ju", "Tao", "Cong", "Lei", "Zhi", "Peng", "Fei", "Song", "Tian", "Pi", "Dan", "Yu", "Ni", "Yu", "Lu", "Gan", "Mi", "Jing", "Ling", "Lun", "Yin", "Cui", "Qu", "Huai", "Yu", "Nian", "Shen", "Piao", "Chun", "Wa", "Yuan", "Lai", "Hun", "Qing", "Yan", "Qian", "Tian", "Miao", "Zhi", "Yin", "Mi"];
const EL = Object.freeze(_L);
const zL = ["Ben", "Yuan", "Wen", "Re", "Fei", "Qing", "Yuan", "Ke", "Ji", "She", "Yuan", "Shibui", "Lu", "Zi", "Du", void 0, "Jian", "Min", "Pi", "Tani", "Yu", "Yuan", "Shen", "Shen", "Rou", "Huan", "Zhu", "Jian", "Nuan", "Yu", "Qiu", "Ting", "Qu", "Du", "Feng", "Zha", "Bo", "Wo", "Wo", "Di", "Wei", "Wen", "Ru", "Xie", "Ce", "Wei", "Ge", "Gang", "Yan", "Hong", "Xuan", "Mi", "Ke", "Mao", "Ying", "Yan", "You", "Hong", "Miao", "Xing", "Mei", "Zai", "Hun", "Nai", "Kui", "Shi", "E", "Pai", "Mei", "Lian", "Qi", "Qi", "Mei", "Tian", "Cou", "Wei", "Can", "Tuan", "Mian", "Hui", "Mo", "Xu", "Ji", "Pen", "Jian", "Jian", "Hu", "Feng", "Xiang", "Yi", "Yin", "Zhan", "Shi", "Jie", "Cheng", "Huang", "Tan", "Yu", "Bi", "Min", "Shi", "Tu", "Sheng", "Yong", "Qu", "Zhong", "Suei", "Jiu", "Jiao", "Qiou", "Yin", "Tang", "Long", "Huo", "Yuan", "Nan", "Ban", "You", "Quan", "Chui", "Liang", "Chan", "Yan", "Chun", "Nie", "Zi", "Wan", "Shi", "Man", "Ying", "Ratsu", "Kui", void 0, "Jian", "Xu", "Lu", "Gui", "Gai", void 0, void 0, "Po", "Jin", "Gui", "Tang", "Yuan", "Suo", "Yuan", "Lian", "Yao", "Meng", "Zhun", "Sheng", "Ke", "Tai", "Da", "Wa", "Liu", "Gou", "Sao", "Ming", "Zha", "Shi", "Yi", "Lun", "Ma", "Pu", "Wei", "Li", "Cai", "Wu", "Xi", "Wen", "Qiang", "Ze", "Shi", "Su", "Yi", "Zhen", "Sou", "Yun", "Xiu", "Yin", "Rong", "Hun", "Su", "Su", "Ni", "Ta", "Shi", "Ru", "Wei", "Pan", "Chu", "Chu", "Pang", "Weng", "Cang", "Mie", "He", "Dian", "Hao", "Huang", "Xi", "Zi", "Di", "Zhi", "Ying", "Fu", "Jie", "Hua", "Ge", "Zi", "Tao", "Teng", "Sui", "Bi", "Jiao", "Hui", "Gun", "Yin", "Gao", "Long", "Zhi", "Yan", "She", "Man", "Ying", "Chun", "Lu", "Lan", "Luan", void 0, "Bin", "Tan", "Yu", "Sou", "Hu", "Bi", "Biao", "Zhi", "Jiang", "Kou", "Shen", "Shang", "Di", "Mi", "Ao", "Lu", "Hu", "Hu", "You", "Chan", "Fan", "Yong", "Gun", "Man"];
const $L = Object.freeze(zL);
const IL = ["Qing", "Yu", "Piao", "Ji", "Ya", "Jiao", "Qi", "Xi", "Ji", "Lu", "Lu", "Long", "Jin", "Guo", "Cong", "Lou", "Zhi", "Gai", "Qiang", "Li", "Yan", "Cao", "Jiao", "Cong", "Qun", "Tuan", "Ou", "Teng", "Ye", "Xi", "Mi", "Tang", "Mo", "Shang", "Han", "Lian", "Lan", "Wa", "Li", "Qian", "Feng", "Xuan", "Yi", "Man", "Zi", "Mang", "Kang", "Lei", "Peng", "Shu", "Zhang", "Zhang", "Chong", "Xu", "Huan", "Kuo", "Jian", "Yan", "Chuang", "Liao", "Cui", "Ti", "Yang", "Jiang", "Cong", "Ying", "Hong", "Xun", "Shu", "Guan", "Ying", "Xiao", void 0, void 0, "Xu", "Lian", "Zhi", "Wei", "Pi", "Jue", "Jiao", "Po", "Dang", "Hui", "Jie", "Wu", "Pa", "Ji", "Pan", "Gui", "Xiao", "Qian", "Qian", "Xi", "Lu", "Xi", "Xuan", "Dun", "Huang", "Min", "Run", "Su", "Liao", "Zhen", "Zhong", "Yi", "Di", "Wan", "Dan", "Tan", "Chao", "Xun", "Kui", "Yie", "Shao", "Tu", "Zhu", "San", "Hei", "Bi", "Shan", "Chan", "Chan", "Shu", "Tong", "Pu", "Lin", "Wei", "Se", "Se", "Cheng", "Jiong", "Cheng", "Hua", "Jiao", "Lao", "Che", "Gan", "Cun", "Heng", "Si", "Shu", "Peng", "Han", "Yun", "Liu", "Hong", "Fu", "Hao", "He", "Xian", "Jian", "Shan", "Xi", "Oki", void 0, "Lan", void 0, "Yu", "Lin", "Min", "Zao", "Dang", "Wan", "Ze", "Xie", "Yu", "Li", "Shi", "Xue", "Ling", "Man", "Zi", "Yong", "Kuai", "Can", "Lian", "Dian", "Ye", "Ao", "Huan", "Zhen", "Chan", "Man", "Dan", "Dan", "Yi", "Sui", "Pi", "Ju", "Ta", "Qin", "Ji", "Zhuo", "Lian", "Nong", "Guo", "Jin", "Fen", "Se", "Ji", "Sui", "Hui", "Chu", "Ta", "Song", "Ding", void 0, "Zhu", "Lai", "Bin", "Lian", "Mi", "Shi", "Shu", "Mi", "Ning", "Ying", "Ying", "Meng", "Jin", "Qi", "Pi", "Ji", "Hao", "Ru", "Zui", "Wo", "Tao", "Yin", "Yin", "Dui", "Ci", "Huo", "Jing", "Lan", "Jun", "Ai", "Pu", "Zhuo", "Wei", "Bin", "Gu", "Qian", "Xing", "Hama", "Kuo", "Fei", void 0, "Boku", "Jian", "Wei", "Luo", "Zan", "Lu", "Li"];
const qL = Object.freeze(IL);
const UL = ["You", "Yang", "Lu", "Si", "Jie", "Ying", "Du", "Wang", "Hui", "Xie", "Pan", "Shen", "Biao", "Chan", "Mo", "Liu", "Jian", "Pu", "Se", "Cheng", "Gu", "Bin", "Huo", "Xian", "Lu", "Qin", "Han", "Ying", "Yong", "Li", "Jing", "Xiao", "Ying", "Sui", "Wei", "Xie", "Huai", "Hao", "Zhu", "Long", "Lai", "Dui", "Fan", "Hu", "Lai", void 0, void 0, "Ying", "Mi", "Ji", "Lian", "Jian", "Ying", "Fen", "Lin", "Yi", "Jian", "Yue", "Chan", "Dai", "Rang", "Jian", "Lan", "Fan", "Shuang", "Yuan", "Zhuo", "Feng", "She", "Lei", "Lan", "Cong", "Qu", "Yong", "Qian", "Fa", "Guan", "Que", "Yan", "Hao", "Hyeng", "Sa", "Zan", "Luan", "Yan", "Li", "Mi", "Shan", "Tan", "Dang", "Jiao", "Chan", void 0, "Hao", "Ba", "Zhu", "Lan", "Lan", "Nang", "Wan", "Luan", "Xun", "Xian", "Yan", "Gan", "Yan", "Yu", "Huo", "Si", "Mie", "Guang", "Deng", "Hui", "Xiao", "Xiao", "Hu", "Hong", "Ling", "Zao", "Zhuan", "Jiu", "Zha", "Xie", "Chi", "Zhuo", "Zai", "Zai", "Can", "Yang", "Qi", "Zhong", "Fen", "Niu", "Jiong", "Wen", "Po", "Yi", "Lu", "Chui", "Pi", "Kai", "Pan", "Yan", "Kai", "Pang", "Mu", "Chao", "Liao", "Gui", "Kang", "Tun", "Guang", "Xin", "Zhi", "Guang", "Guang", "Wei", "Qiang", void 0, "Da", "Xia", "Zheng", "Zhu", "Ke", "Zhao", "Fu", "Ba", "Duo", "Duo", "Ling", "Zhuo", "Xuan", "Ju", "Tan", "Pao", "Jiong", "Pao", "Tai", "Tai", "Bing", "Yang", "Tong", "Han", "Zhu", "Zha", "Dian", "Wei", "Shi", "Lian", "Chi", "Huang", void 0, "Hu", "Shuo", "Lan", "Jing", "Jiao", "Xu", "Xing", "Quan", "Lie", "Huan", "Yang", "Xiao", "Xiu", "Xian", "Yin", "Wu", "Zhou", "Yao", "Shi", "Wei", "Tong", "Xue", "Zai", "Kai", "Hong", "Luo", "Xia", "Zhu", "Xuan", "Zheng", "Po", "Yan", "Hui", "Guang", "Zhe", "Hui", "Kao", void 0, "Fan", "Shao", "Ye", "Hui", void 0, "Tang", "Jin", "Re", void 0, "Xi", "Fu", "Jiong", "Che", "Pu", "Jing", "Zhuo", "Ting", "Wan", "Hai", "Peng", "Lang", "Shan", "Hu", "Feng", "Chi", "Rong"];
const VL = Object.freeze(UL);
const iZ = ["Hu", "Xi", "Shu", "He", "Xun", "Ku", "Jue", "Xiao", "Xi", "Yan", "Han", "Zhuang", "Jun", "Di", "Xie", "Ji", "Wu", void 0, void 0, "Han", "Yan", "Huan", "Men", "Ju", "Chou", "Bei", "Fen", "Lin", "Kun", "Hun", "Tun", "Xi", "Cui", "Wu", "Hong", "Ju", "Fu", "Wo", "Jiao", "Cong", "Feng", "Ping", "Qiong", "Ruo", "Xi", "Qiong", "Xin", "Zhuo", "Yan", "Yan", "Yi", "Jue", "Yu", "Gang", "Ran", "Pi", "Gu", void 0, "Sheng", "Chang", "Shao", void 0, void 0, void 0, void 0, "Chen", "He", "Kui", "Zhong", "Duan", "Xia", "Hui", "Feng", "Lian", "Xuan", "Xing", "Huang", "Jiao", "Jian", "Bi", "Ying", "Zhu", "Wei", "Tuan", "Tian", "Xi", "Nuan", "Nuan", "Chan", "Yan", "Jiong", "Jiong", "Yu", "Mei", "Sha", "Wei", "Ye", "Xin", "Qiong", "Rou", "Mei", "Huan", "Xu", "Zhao", "Wei", "Fan", "Qiu", "Sui", "Yang", "Lie", "Zhu", "Jie", "Gao", "Gua", "Bao", "Hu", "Yun", "Xia", void 0, void 0, "Bian", "Gou", "Tui", "Tang", "Chao", "Shan", "N", "Bo", "Huang", "Xie", "Xi", "Wu", "Xi", "Yun", "He", "He", "Xi", "Yun", "Xiong", "Nai", "Shan", "Qiong", "Yao", "Xun", "Mi", "Lian", "Ying", "Wen", "Rong", "Oozutsu", void 0, "Qiang", "Liu", "Xi", "Bi", "Biao", "Zong", "Lu", "Jian", "Shou", "Yi", "Lou", "Feng", "Sui", "Yi", "Tong", "Jue", "Zong", "Yun", "Hu", "Yi", "Zhi", "Ao", "Wei", "Liao", "Han", "Ou", "Re", "Jiong", "Man", void 0, "Shang", "Cuan", "Zeng", "Jian", "Xi", "Xi", "Xi", "Yi", "Xiao", "Chi", "Huang", "Chan", "Ye", "Qian", "Ran", "Yan", "Xian", "Qiao", "Zun", "Deng", "Dun", "Shen", "Jiao", "Fen", "Si", "Liao", "Yu", "Lin", "Tong", "Shao", "Fen", "Fan", "Yan", "Xun", "Lan", "Mei", "Tang", "Yi", "Jing", "Men", void 0, void 0, "Ying", "Yu", "Yi", "Xue", "Lan", "Tai", "Zao", "Can", "Sui", "Xi", "Que", "Cong", "Lian", "Hui", "Zhu", "Xie", "Ling", "Wei", "Yi", "Xie", "Zhao", "Hui", "Tatsu", "Nung", "Lan", "Ru", "Xian", "Kao", "Xun", "Jin", "Chou", "Chou", "Yao"];
const oZ = Object.freeze(iZ);
const eZ = ["He", "Lan", "Biao", "Rong", "Li", "Mo", "Bao", "Ruo", "Lu", "La", "Ao", "Xun", "Kuang", "Shuo", void 0, "Li", "Lu", "Jue", "Liao", "Yan", "Xi", "Xie", "Long", "Ye", void 0, "Rang", "Yue", "Lan", "Cong", "Jue", "Tong", "Guan", void 0, "Che", "Mi", "Tang", "Lan", "Zhu", void 0, "Ling", "Cuan", "Yu", "Zhua", "Tsumekanmuri", "Pa", "Zheng", "Pao", "Cheng", "Yuan", "Ai", "Wei", void 0, "Jue", "Jue", "Fu", "Ye", "Ba", "Die", "Ye", "Yao", "Zu", "Shuang", "Er", "Qiang", "Chuang", "Ge", "Zang", "Die", "Qiang", "Yong", "Qiang", "Pian", "Ban", "Pan", "Shao", "Jian", "Pai", "Du", "Chuang", "Tou", "Zha", "Bian", "Die", "Bang", "Bo", "Chuang", "You", void 0, "Du", "Ya", "Cheng", "Niu", "Ushihen", "Pin", "Jiu", "Mou", "Tuo", "Mu", "Lao", "Ren", "Mang", "Fang", "Mao", "Mu", "Gang", "Wu", "Yan", "Ge", "Bei", "Si", "Jian", "Gu", "You", "Ge", "Sheng", "Mu", "Di", "Qian", "Quan", "Quan", "Zi", "Te", "Xi", "Mang", "Keng", "Qian", "Wu", "Gu", "Xi", "Li", "Li", "Pou", "Ji", "Gang", "Zhi", "Ben", "Quan", "Run", "Du", "Ju", "Jia", "Jian", "Feng", "Pian", "Ke", "Ju", "Kao", "Chu", "Xi", "Bei", "Luo", "Jie", "Ma", "San", "Wei", "Li", "Dun", "Tong", void 0, "Jiang", "Ikenie", "Li", "Du", "Lie", "Pi", "Piao", "Bao", "Xi", "Chou", "Wei", "Kui", "Chou", "Quan", "Fan", "Ba", "Fan", "Qiu", "Ji", "Cai", "Chuo", "An", "Jie", "Zhuang", "Guang", "Ma", "You", "Kang", "Bo", "Hou", "Ya", "Yin", "Huan", "Zhuang", "Yun", "Kuang", "Niu", "Di", "Qing", "Zhong", "Mu", "Bei", "Pi", "Ju", "Ni", "Sheng", "Pao", "Xia", "Tuo", "Hu", "Ling", "Fei", "Pi", "Ni", "Ao", "You", "Gou", "Yue", "Ju", "Dan", "Po", "Gu", "Xian", "Ning", "Huan", "Hen", "Jiao", "He", "Zhao", "Ji", "Xun", "Shan", "Ta", "Rong", "Shou", "Tong", "Lao", "Du", "Xia", "Shi", "Hua", "Zheng", "Yu", "Sun", "Yu", "Bi", "Mang", "Xi", "Juan", "Li", "Xia", "Yin", "Suan", "Lang", "Bei", "Zhi", "Yan"];
const nZ = Object.freeze(eZ);
const aZ = ["Sha", "Li", "Han", "Xian", "Jing", "Pai", "Fei", "Yao", "Ba", "Qi", "Ni", "Biao", "Yin", "Lai", "Xi", "Jian", "Qiang", "Kun", "Yan", "Guo", "Zong", "Mi", "Chang", "Yi", "Zhi", "Zheng", "Ya", "Meng", "Cai", "Cu", "She", "Kari", "Cen", "Luo", "Hu", "Zong", "Ji", "Wei", "Feng", "Wo", "Yuan", "Xing", "Zhu", "Mao", "Wei", "Yuan", "Xian", "Tuan", "Ya", "Nao", "Xie", "Jia", "Hou", "Bian", "You", "You", "Mei", "Zha", "Yao", "Sun", "Bo", "Ming", "Hua", "Yuan", "Sou", "Ma", "Yuan", "Dai", "Yu", "Shi", "Hao", void 0, "Yi", "Zhen", "Chuang", "Hao", "Man", "Jing", "Jiang", "Mu", "Zhang", "Chan", "Ao", "Ao", "Hao", "Cui", "Fen", "Jue", "Bi", "Bi", "Huang", "Pu", "Lin", "Yu", "Tong", "Yao", "Liao", "Shuo", "Xiao", "Swu", "Ton", "Xi", "Ge", "Juan", "Du", "Hui", "Kuai", "Xian", "Xie", "Ta", "Xian", "Xun", "Ning", "Pin", "Huo", "Nou", "Meng", "Lie", "Nao", "Guang", "Shou", "Lu", "Ta", "Xian", "Mi", "Rang", "Huan", "Nao", "Luo", "Xian", "Qi", "Jue", "Xuan", "Miao", "Zi", "Lu", "Lu", "Yu", "Su", "Wang", "Qiu", "Ga", "Ding", "Le", "Ba", "Ji", "Hong", "Di", "Quan", "Gan", "Jiu", "Yu", "Ji", "Yu", "Yang", "Ma", "Gong", "Wu", "Fu", "Wen", "Jie", "Ya", "Fen", "Bian", "Beng", "Yue", "Jue", "Yun", "Jue", "Wan", "Jian", "Mei", "Dan", "Pi", "Wei", "Huan", "Xian", "Qiang", "Ling", "Dai", "Yi", "An", "Ping", "Dian", "Fu", "Xuan", "Xi", "Bo", "Ci", "Gou", "Jia", "Shao", "Po", "Ci", "Ke", "Ran", "Sheng", "Shen", "Yi", "Zu", "Jia", "Min", "Shan", "Liu", "Bi", "Zhen", "Zhen", "Jue", "Fa", "Long", "Jin", "Jiao", "Jian", "Li", "Guang", "Xian", "Zhou", "Gong", "Yan", "Xiu", "Yang", "Xu", "Luo", "Su", "Zhu", "Qin", "Ken", "Xun", "Bao", "Er", "Xiang", "Yao", "Xia", "Heng", "Gui", "Chong", "Xu", "Ban", "Pei", void 0, "Dang", "Ei", "Hun", "Wen", "E", "Cheng", "Ti", "Wu", "Wu", "Cheng", "Jun", "Mei", "Bei", "Ting", "Xian", "Chuo"];
const uZ = Object.freeze(aZ);
const tZ = ["Han", "Xuan", "Yan", "Qiu", "Quan", "Lang", "Li", "Xiu", "Fu", "Liu", "Ye", "Xi", "Ling", "Li", "Jin", "Lian", "Suo", "Chiisai", void 0, "Wan", "Dian", "Pin", "Zhan", "Cui", "Min", "Yu", "Ju", "Chen", "Lai", "Wen", "Sheng", "Wei", "Dian", "Chu", "Zhuo", "Pei", "Cheng", "Hu", "Qi", "E", "Kun", "Chang", "Qi", "Beng", "Wan", "Lu", "Cong", "Guan", "Yan", "Diao", "Bei", "Lin", "Qin", "Pi", "Pa", "Que", "Zhuo", "Qin", "Fa", void 0, "Qiong", "Du", "Jie", "Hun", "Yu", "Mao", "Mei", "Chun", "Xuan", "Ti", "Xing", "Dai", "Rou", "Min", "Zhen", "Wei", "Ruan", "Huan", "Jie", "Chuan", "Jian", "Zhuan", "Yang", "Lian", "Quan", "Xia", "Duan", "Yuan", "Ye", "Nao", "Hu", "Ying", "Yu", "Huang", "Rui", "Se", "Liu", "Shi", "Rong", "Suo", "Yao", "Wen", "Wu", "Jin", "Jin", "Ying", "Ma", "Tao", "Liu", "Tang", "Li", "Lang", "Gui", "Zhen", "Qiang", "Cuo", "Jue", "Zhao", "Yao", "Ai", "Bin", "Tu", "Chang", "Kun", "Zhuan", "Cong", "Jin", "Yi", "Cui", "Cong", "Qi", "Li", "Ying", "Suo", "Qiu", "Xuan", "Ao", "Lian", "Man", "Zhang", "Yin", void 0, "Ying", "Zhi", "Lu", "Wu", "Deng", "Xiou", "Zeng", "Xun", "Qu", "Dang", "Lin", "Liao", "Qiong", "Su", "Huang", "Gui", "Pu", "Jing", "Fan", "Jin", "Liu", "Ji", void 0, "Jing", "Ai", "Bi", "Can", "Qu", "Zao", "Dang", "Jiao", "Gun", "Tan", "Hui", "Huan", "Se", "Sui", "Tian", void 0, "Yu", "Jin", "Lu", "Bin", "Shou", "Wen", "Zui", "Lan", "Xi", "Ji", "Xuan", "Ruan", "Huo", "Gai", "Lei", "Du", "Li", "Zhi", "Rou", "Li", "Zan", "Qiong", "Zhe", "Gui", "Sui", "La", "Long", "Lu", "Li", "Zan", "Lan", "Ying", "Mi", "Xiang", "Xi", "Guan", "Dao", "Zan", "Huan", "Gua", "Bo", "Die", "Bao", "Hu", "Zhi", "Piao", "Ban", "Rang", "Li", "Wa", "Dekaguramu", "Jiang", "Qian", "Fan", "Pen", "Fang", "Dan", "Weng", "Ou", "Deshiguramu", "Miriguramu", "Thon", "Hu", "Ling", "Yi", "Ping", "Ci", "Hekutogura", "Juan", "Chang", "Chi", "Sarake", "Dang", "Meng", "Pou"];
const dZ = Object.freeze(tZ);
const gZ = ["Zhui", "Ping", "Bian", "Zhou", "Zhen", "Senchigura", "Ci", "Ying", "Qi", "Xian", "Lou", "Di", "Ou", "Meng", "Zhuan", "Peng", "Lin", "Zeng", "Wu", "Pi", "Dan", "Weng", "Ying", "Yan", "Gan", "Dai", "Shen", "Tian", "Tian", "Han", "Chang", "Sheng", "Qing", "Sheng", "Chan", "Chan", "Rui", "Sheng", "Su", "Sen", "Yong", "Shuai", "Lu", "Fu", "Yong", "Beng", "Feng", "Ning", "Tian", "You", "Jia", "Shen", "Zha", "Dian", "Fu", "Nan", "Dian", "Ping", "Ting", "Hua", "Ting", "Quan", "Zi", "Meng", "Bi", "Qi", "Liu", "Xun", "Liu", "Chang", "Mu", "Yun", "Fan", "Fu", "Geng", "Tian", "Jie", "Jie", "Quan", "Wei", "Fu", "Tian", "Mu", "Tap", "Pan", "Jiang", "Wa", "Da", "Nan", "Liu", "Ben", "Zhen", "Chu", "Mu", "Mu", "Ce", "Cen", "Gai", "Bi", "Da", "Zhi", "Lue", "Qi", "Lue", "Pan", "Kesa", "Fan", "Hua", "Yu", "Yu", "Mu", "Jun", "Yi", "Liu", "Yu", "Die", "Chou", "Hua", "Dang", "Chuo", "Ji", "Wan", "Jiang", "Sheng", "Chang", "Tuan", "Lei", "Ji", "Cha", "Liu", "Tatamu", "Tuan", "Lin", "Jiang", "Jiang", "Chou", "Bo", "Die", "Die", "Pi", "Nie", "Dan", "Shu", "Shu", "Zhi", "Yi", "Chuang", "Nai", "Ding", "Bi", "Jie", "Liao", "Gong", "Ge", "Jiu", "Zhou", "Xia", "Shan", "Xu", "Nue", "Li", "Yang", "Chen", "You", "Ba", "Jie", "Jue", "Zhi", "Xia", "Cui", "Bi", "Yi", "Li", "Zong", "Chuang", "Feng", "Zhu", "Pao", "Pi", "Gan", "Ke", "Ci", "Xie", "Qi", "Dan", "Zhen", "Fa", "Zhi", "Teng", "Ju", "Ji", "Fei", "Qu", "Dian", "Jia", "Xian", "Cha", "Bing", "Ni", "Zheng", "Yong", "Jing", "Quan", "Chong", "Tong", "Yi", "Kai", "Wei", "Hui", "Duo", "Yang", "Chi", "Zhi", "Hen", "Ya", "Mei", "Dou", "Jing", "Xiao", "Tong", "Tu", "Mang", "Pi", "Xiao", "Suan", "Pu", "Li", "Zhi", "Cuo", "Duo", "Wu", "Sha", "Lao", "Shou", "Huan", "Xian", "Yi", "Peng", "Zhang", "Guan", "Tan", "Fei", "Ma", "Lin", "Chi", "Ji", "Dian", "An", "Chi", "Bi", "Bei", "Min", "Gu", "Dui", "E", "Wei"];
const sZ = Object.freeze(gZ);
const hZ = ["Yu", "Cui", "Ya", "Zhu", "Cu", "Dan", "Shen", "Zhung", "Ji", "Yu", "Hou", "Feng", "La", "Yang", "Shen", "Tu", "Yu", "Gua", "Wen", "Huan", "Ku", "Jia", "Yin", "Yi", "Lu", "Sao", "Jue", "Chi", "Xi", "Guan", "Yi", "Wen", "Ji", "Chuang", "Ban", "Lei", "Liu", "Chai", "Shou", "Nue", "Dian", "Da", "Pie", "Tan", "Zhang", "Biao", "Shen", "Cu", "Luo", "Yi", "Zong", "Chou", "Zhang", "Zhai", "Sou", "Suo", "Que", "Diao", "Lou", "Lu", "Mo", "Jin", "Yin", "Ying", "Huang", "Fu", "Liao", "Long", "Qiao", "Liu", "Lao", "Xian", "Fei", "Dan", "Yin", "He", "Ai", "Ban", "Xian", "Guan", "Guai", "Nong", "Yu", "Wei", "Yi", "Yong", "Pi", "Lei", "Li", "Shu", "Dan", "Lin", "Dian", "Lin", "Lai", "Pie", "Ji", "Chi", "Yang", "Xian", "Jie", "Zheng", void 0, "Li", "Huo", "Lai", "Shaku", "Dian", "Xian", "Ying", "Yin", "Qu", "Yong", "Tan", "Dian", "Luo", "Luan", "Luan", "Bo", void 0, "Gui", "Po", "Fa", "Deng", "Fa", "Bai", "Bai", "Qie", "Bi", "Zao", "Zao", "Mao", "De", "Pa", "Jie", "Huang", "Gui", "Ci", "Ling", "Gao", "Mo", "Ji", "Jiao", "Peng", "Gao", "Ai", "E", "Hao", "Han", "Bi", "Wan", "Chou", "Qian", "Xi", "Ai", "Jiong", "Hao", "Huang", "Hao", "Ze", "Cui", "Hao", "Xiao", "Ye", "Po", "Hao", "Jiao", "Ai", "Xing", "Huang", "Li", "Piao", "He", "Jiao", "Pi", "Gan", "Pao", "Zhou", "Jun", "Qiu", "Cun", "Que", "Zha", "Gu", "Jun", "Jun", "Zhou", "Zha", "Gu", "Zhan", "Du", "Min", "Qi", "Ying", "Yu", "Bei", "Zhao", "Zhong", "Pen", "He", "Ying", "He", "Yi", "Bo", "Wan", "He", "Ang", "Zhan", "Yan", "Jian", "He", "Yu", "Kui", "Fan", "Gai", "Dao", "Pan", "Fu", "Qiu", "Sheng", "Dao", "Lu", "Zhan", "Meng", "Li", "Jin", "Xu", "Jian", "Pan", "Guan", "An", "Lu", "Shu", "Zhou", "Dang", "An", "Gu", "Li", "Mu", "Cheng", "Gan", "Xu", "Mang", "Mang", "Zhi", "Qi", "Ruan", "Tian", "Xiang", "Dun", "Xin", "Xi", "Pan", "Feng", "Dun", "Min"];
const rZ = Object.freeze(hZ);
const lZ = ["Ming", "Sheng", "Shi", "Yun", "Mian", "Pan", "Fang", "Miao", "Dan", "Mei", "Mao", "Kan", "Xian", "Ou", "Shi", "Yang", "Zheng", "Yao", "Shen", "Huo", "Da", "Zhen", "Kuang", "Ju", "Shen", "Chi", "Sheng", "Mei", "Mo", "Zhu", "Zhen", "Zhen", "Mian", "Di", "Yuan", "Die", "Yi", "Zi", "Zi", "Chao", "Zha", "Xuan", "Bing", "Mi", "Long", "Sui", "Dong", "Mi", "Die", "Yi", "Er", "Ming", "Xuan", "Chi", "Kuang", "Juan", "Mou", "Zhen", "Tiao", "Yang", "Yan", "Mo", "Zhong", "Mai", "Zhao", "Zheng", "Mei", "Jun", "Shao", "Han", "Huan", "Di", "Cheng", "Cuo", "Juan", "E", "Wan", "Xian", "Xi", "Kun", "Lai", "Jian", "Shan", "Tian", "Hun", "Wan", "Ling", "Shi", "Qiong", "Lie", "Yai", "Jing", "Zheng", "Li", "Lai", "Sui", "Juan", "Shui", "Sui", "Du", "Bi", "Bi", "Mu", "Hun", "Ni", "Lu", "Yi", "Jie", "Cai", "Zhou", "Yu", "Hun", "Ma", "Xia", "Xing", "Xi", "Gun", "Cai", "Chun", "Jian", "Mei", "Du", "Hou", "Xuan", "Ti", "Kui", "Gao", "Rui", "Mou", "Xu", "Fa", "Wen", "Miao", "Chou", "Kui", "Mi", "Weng", "Kou", "Dang", "Chen", "Ke", "Sou", "Xia", "Qiong", "Mao", "Ming", "Man", "Shui", "Ze", "Zhang", "Yi", "Diao", "Ou", "Mo", "Shun", "Cong", "Lou", "Chi", "Man", "Piao", "Cheng", "Ji", "Meng", void 0, "Run", "Pie", "Xi", "Qiao", "Pu", "Zhu", "Deng", "Shen", "Shun", "Liao", "Che", "Xian", "Kan", "Ye", "Xu", "Tong", "Mou", "Lin", "Kui", "Xian", "Ye", "Ai", "Hui", "Zhan", "Jian", "Gu", "Zhao", "Qu", "Wei", "Chou", "Sao", "Ning", "Xun", "Yao", "Huo", "Meng", "Mian", "Bin", "Mian", "Li", "Kuang", "Jue", "Xuan", "Mian", "Huo", "Lu", "Meng", "Long", "Guan", "Man", "Xi", "Chu", "Tang", "Kan", "Zhu", "Mao", "Jin", "Lin", "Yu", "Shuo", "Ce", "Jue", "Shi", "Yi", "Shen", "Zhi", "Hou", "Shen", "Ying", "Ju", "Zhou", "Jiao", "Cuo", "Duan", "Ai", "Jiao", "Zeng", "Huo", "Bai", "Shi", "Ding", "Qi", "Ji", "Zi", "Gan", "Wu", "Tuo", "Ku", "Qiang", "Xi", "Fan", "Kuang"];
const vZ = Object.freeze(lZ);
const yZ = ["Dang", "Ma", "Sha", "Dan", "Jue", "Li", "Fu", "Min", "Nuo", "Huo", "Kang", "Zhi", "Qi", "Kan", "Jie", "Fen", "E", "Ya", "Pi", "Zhe", "Yan", "Sui", "Zhuan", "Che", "Dun", "Pan", "Yan", void 0, "Feng", "Fa", "Mo", "Zha", "Qu", "Yu", "Luo", "Tuo", "Tuo", "Di", "Zhai", "Zhen", "Ai", "Fei", "Mu", "Zhu", "Li", "Bian", "Nu", "Ping", "Peng", "Ling", "Pao", "Le", "Po", "Bo", "Po", "Shen", "Za", "Nuo", "Li", "Long", "Tong", void 0, "Li", "Aragane", "Chu", "Keng", "Quan", "Zhu", "Kuang", "Huo", "E", "Nao", "Jia", "Lu", "Wei", "Ai", "Luo", "Ken", "Xing", "Yan", "Tong", "Peng", "Xi", void 0, "Hong", "Shuo", "Xia", "Qiao", void 0, "Wei", "Qiao", void 0, "Keng", "Xiao", "Que", "Chan", "Lang", "Hong", "Yu", "Xiao", "Xia", "Mang", "Long", "Iong", "Che", "Che", "E", "Liu", "Ying", "Mang", "Que", "Yan", "Sha", "Kun", "Yu", void 0, "Kaki", "Lu", "Chen", "Jian", "Nue", "Song", "Zhuo", "Keng", "Peng", "Yan", "Zhui", "Kong", "Ceng", "Qi", "Zong", "Qing", "Lin", "Jun", "Bo", "Ding", "Min", "Diao", "Jian", "He", "Lu", "Ai", "Sui", "Que", "Ling", "Bei", "Yin", "Dui", "Wu", "Qi", "Lun", "Wan", "Dian", "Gang", "Pei", "Qi", "Chen", "Ruan", "Yan", "Die", "Ding", "Du", "Tuo", "Jie", "Ying", "Bian", "Ke", "Bi", "Wei", "Shuo", "Zhen", "Duan", "Xia", "Dang", "Ti", "Nao", "Peng", "Jian", "Di", "Tan", "Cha", "Seki", "Qi", void 0, "Feng", "Xuan", "Que", "Que", "Ma", "Gong", "Nian", "Su", "E", "Ci", "Liu", "Si", "Tang", "Bang", "Hua", "Pi", "Wei", "Sang", "Lei", "Cuo", "Zhen", "Xia", "Qi", "Lian", "Pan", "Wei", "Yun", "Dui", "Zhe", "Ke", "La", void 0, "Qing", "Gun", "Zhuan", "Chan", "Qi", "Ao", "Peng", "Lu", "Lu", "Kan", "Qiang", "Chen", "Yin", "Lei", "Biao", "Qi", "Mo", "Qi", "Cui", "Zong", "Qing", "Chuo", void 0, "Ji", "Shan", "Lao", "Qu", "Zeng", "Deng", "Jian", "Xi", "Lin", "Ding", "Dian", "Huang", "Pan", "Za", "Qiao", "Di", "Li"];
const cZ = Object.freeze(yZ);
const bZ = ["Tani", "Jiao", void 0, "Zhang", "Qiao", "Dun", "Xian", "Yu", "Zhui", "He", "Huo", "Zhai", "Lei", "Ke", "Chu", "Ji", "Que", "Dang", "Yi", "Jiang", "Pi", "Pi", "Yu", "Pin", "Qi", "Ai", "Kai", "Jian", "Yu", "Ruan", "Meng", "Pao", "Ci", void 0, void 0, "Mie", "Ca", "Xian", "Kuang", "Lei", "Lei", "Zhi", "Li", "Li", "Fan", "Que", "Pao", "Ying", "Li", "Long", "Long", "Mo", "Bo", "Shuang", "Guan", "Lan", "Zan", "Yan", "Shi", "Shi", "Li", "Reng", "She", "Yue", "Si", "Qi", "Ta", "Ma", "Xie", "Xian", "Xian", "Zhi", "Qi", "Zhi", "Beng", "Dui", "Zhong", void 0, "Yi", "Shi", "You", "Zhi", "Tiao", "Fu", "Fu", "Mi", "Zu", "Zhi", "Suan", "Mei", "Zuo", "Qu", "Hu", "Zhu", "Shen", "Sui", "Ci", "Chai", "Mi", "Lu", "Yu", "Xiang", "Wu", "Tiao", "Piao", "Zhu", "Gui", "Xia", "Zhi", "Ji", "Gao", "Zhen", "Gao", "Shui", "Jin", "Chen", "Gai", "Kun", "Di", "Dao", "Huo", "Tao", "Qi", "Gu", "Guan", "Zui", "Ling", "Lu", "Bing", "Jin", "Dao", "Zhi", "Lu", "Shan", "Bei", "Zhe", "Hui", "You", "Xi", "Yin", "Zi", "Huo", "Zhen", "Fu", "Yuan", "Wu", "Xian", "Yang", "Ti", "Yi", "Mei", "Si", "Di", void 0, "Zhuo", "Zhen", "Yong", "Ji", "Gao", "Tang", "Si", "Ma", "Ta", void 0, "Xuan", "Qi", "Yu", "Xi", "Ji", "Si", "Chan", "Tan", "Kuai", "Sui", "Li", "Nong", "Ni", "Dao", "Li", "Rang", "Yue", "Ti", "Zan", "Lei", "Rou", "Yu", "Yu", "Chi", "Xie", "Qin", "He", "Tu", "Xiu", "Si", "Ren", "Tu", "Zi", "Cha", "Gan", "Yi", "Xian", "Bing", "Nian", "Qiu", "Qiu", "Zhong", "Fen", "Hao", "Yun", "Ke", "Miao", "Zhi", "Geng", "Bi", "Zhi", "Yu", "Mi", "Ku", "Ban", "Pi", "Ni", "Li", "You", "Zu", "Pi", "Ba", "Ling", "Mo", "Cheng", "Nian", "Qin", "Yang", "Zuo", "Zhi", "Zhi", "Shu", "Ju", "Zi", "Huo", "Ji", "Cheng", "Tong", "Zhi", "Huo", "He", "Yin", "Zi", "Zhi", "Jie", "Ren", "Du", "Yi", "Zhu", "Hui", "Nong", "Fu"];
const pZ = Object.freeze(bZ);
const wZ = ["Xi", "Kao", "Lang", "Fu", "Ze", "Shui", "Lu", "Kun", "Gan", "Geng", "Ti", "Cheng", "Tu", "Shao", "Shui", "Ya", "Lun", "Lu", "Gu", "Zuo", "Ren", "Zhun", "Bang", "Bai", "Ji", "Zhi", "Zhi", "Kun", "Leng", "Peng", "Ke", "Bing", "Chou", "Zu", "Yu", "Su", "Lue", void 0, "Yi", "Xi", "Bian", "Ji", "Fu", "Bi", "Nuo", "Jie", "Zhong", "Zong", "Xu", "Cheng", "Dao", "Wen", "Lian", "Zi", "Yu", "Ji", "Xu", "Zhen", "Zhi", "Dao", "Jia", "Ji", "Gao", "Gao", "Gu", "Rong", "Sui", "You", "Ji", "Kang", "Mu", "Shan", "Men", "Zhi", "Ji", "Lu", "Su", "Ji", "Ying", "Wen", "Qiu", "Se", void 0, "Yi", "Huang", "Qie", "Ji", "Sui", "Xiao", "Pu", "Jiao", "Zhuo", "Tong", "Sai", "Lu", "Sui", "Nong", "Se", "Hui", "Rang", "Nuo", "Yu", "Bin", "Ji", "Tui", "Wen", "Cheng", "Huo", "Gong", "Lu", "Biao", void 0, "Rang", "Zhuo", "Li", "Zan", "Xue", "Wa", "Jiu", "Qiong", "Xi", "Qiong", "Kong", "Yu", "Sen", "Jing", "Yao", "Chuan", "Zhun", "Tu", "Lao", "Qie", "Zhai", "Yao", "Bian", "Bao", "Yao", "Bing", "Wa", "Zhu", "Jiao", "Qiao", "Diao", "Wu", "Gui", "Yao", "Zhi", "Chuang", "Yao", "Tiao", "Jiao", "Chuang", "Jiong", "Xiao", "Cheng", "Kou", "Cuan", "Wo", "Dan", "Ku", "Ke", "Zhui", "Xu", "Su", "Guan", "Kui", "Dou", void 0, "Yin", "Wo", "Wa", "Ya", "Yu", "Ju", "Qiong", "Yao", "Yao", "Tiao", "Chao", "Yu", "Tian", "Diao", "Ju", "Liao", "Xi", "Wu", "Kui", "Chuang", "Zhao", void 0, "Kuan", "Long", "Cheng", "Cui", "Piao", "Zao", "Cuan", "Qiao", "Qiong", "Dou", "Zao", "Long", "Qie", "Li", "Chu", "Shi", "Fou", "Qian", "Chu", "Hong", "Qi", "Qian", "Gong", "Shi", "Shu", "Miao", "Ju", "Zhan", "Zhu", "Ling", "Long", "Bing", "Jing", "Jing", "Zhang", "Yi", "Si", "Jun", "Hong", "Tong", "Song", "Jing", "Diao", "Yi", "Shu", "Jing", "Qu", "Jie", "Ping", "Duan", "Shao", "Zhuan", "Ceng", "Deng", "Cui", "Huai", "Jing", "Kan", "Jing", "Zhu", "Zhu", "Le", "Peng", "Yu", "Chi", "Gan"];
const jZ = Object.freeze(wZ);
const fZ = ["Mang", "Zhu", "Utsubo", "Du", "Ji", "Xiao", "Ba", "Suan", "Ji", "Zhen", "Zhao", "Sun", "Ya", "Zhui", "Yuan", "Hu", "Gang", "Xiao", "Cen", "Pi", "Bi", "Jian", "Yi", "Dong", "Shan", "Sheng", "Xia", "Di", "Zhu", "Na", "Chi", "Gu", "Li", "Qie", "Min", "Bao", "Tiao", "Si", "Fu", "Ce", "Ben", "Pei", "Da", "Zi", "Di", "Ling", "Ze", "Nu", "Fu", "Gou", "Fan", "Jia", "Ge", "Fan", "Shi", "Mao", "Po", "Sey", "Jian", "Qiong", "Long", "Souke", "Bian", "Luo", "Gui", "Qu", "Chi", "Yin", "Yao", "Xian", "Bi", "Qiong", "Gua", "Deng", "Jiao", "Jin", "Quan", "Sun", "Ru", "Fa", "Kuang", "Zhu", "Tong", "Ji", "Da", "Xing", "Ce", "Zhong", "Kou", "Lai", "Bi", "Shai", "Dang", "Zheng", "Ce", "Fu", "Yun", "Tu", "Pa", "Li", "Lang", "Ju", "Guan", "Jian", "Han", "Tong", "Xia", "Zhi", "Cheng", "Suan", "Shi", "Zhu", "Zuo", "Xiao", "Shao", "Ting", "Ce", "Yan", "Gao", "Kuai", "Gan", "Chou", "Kago", "Gang", "Yun", "O", "Qian", "Xiao", "Jian", "Pu", "Lai", "Zou", "Bi", "Bi", "Bi", "Ge", "Chi", "Guai", "Yu", "Jian", "Zhao", "Gu", "Chi", "Zheng", "Jing", "Sha", "Zhou", "Lu", "Bo", "Ji", "Lin", "Suan", "Jun", "Fu", "Zha", "Gu", "Kong", "Qian", "Quan", "Jun", "Chui", "Guan", "Yuan", "Ce", "Ju", "Bo", "Ze", "Qie", "Tuo", "Luo", "Dan", "Xiao", "Ruo", "Jian", "Xuan", "Bian", "Sun", "Xiang", "Xian", "Ping", "Zhen", "Sheng", "Hu", "Shi", "Zhu", "Yue", "Chun", "Lu", "Wu", "Dong", "Xiao", "Ji", "Jie", "Huang", "Xing", "Mei", "Fan", "Chui", "Zhuan", "Pian", "Feng", "Zhu", "Hong", "Qie", "Hou", "Qiu", "Miao", "Qian", void 0, "Kui", "Sik", "Lou", "Yun", "He", "Tang", "Yue", "Chou", "Gao", "Fei", "Ruo", "Zheng", "Gou", "Nie", "Qian", "Xiao", "Cuan", "Gong", "Pang", "Du", "Li", "Bi", "Zhuo", "Chu", "Shai", "Chi", "Zhu", "Qiang", "Long", "Lan", "Jian", "Bu", "Li", "Hui", "Bi", "Di", "Cong", "Yan", "Peng", "Sen", "Zhuan", "Pai", "Piao", "Dou", "Yu", "Mie", "Zhuan"];
const mZ = Object.freeze(fZ);
const YZ = ["Ze", "Xi", "Guo", "Yi", "Hu", "Chan", "Kou", "Cu", "Ping", "Chou", "Ji", "Gui", "Su", "Lou", "Zha", "Lu", "Nian", "Suo", "Cuan", "Sasara", "Suo", "Le", "Duan", "Yana", "Xiao", "Bo", "Mi", "Si", "Dang", "Liao", "Dan", "Dian", "Fu", "Jian", "Min", "Kui", "Dai", "Qiao", "Deng", "Huang", "Sun", "Lao", "Zan", "Xiao", "Du", "Shi", "Zan", void 0, "Pai", "Hata", "Pai", "Gan", "Ju", "Du", "Lu", "Yan", "Bo", "Dang", "Sai", "Ke", "Long", "Qian", "Lian", "Bo", "Zhou", "Lai", void 0, "Lan", "Kui", "Yu", "Yue", "Hao", "Zhen", "Tai", "Ti", "Mi", "Chou", "Ji", void 0, "Hata", "Teng", "Zhuan", "Zhou", "Fan", "Sou", "Zhou", "Kuji", "Zhuo", "Teng", "Lu", "Lu", "Jian", "Tuo", "Ying", "Yu", "Lai", "Long", "Shinshi", "Lian", "Lan", "Qian", "Yue", "Zhong", "Qu", "Lian", "Bian", "Duan", "Zuan", "Li", "Si", "Luo", "Ying", "Yue", "Zhuo", "Xu", "Mi", "Di", "Fan", "Shen", "Zhe", "Shen", "Nu", "Xie", "Lei", "Xian", "Zi", "Ni", "Cun", void 0, "Qian", "Kume", "Bi", "Ban", "Wu", "Sha", "Kang", "Rou", "Fen", "Bi", "Cui", void 0, "Li", "Chi", "Nukamiso", "Ro", "Ba", "Li", "Gan", "Ju", "Po", "Mo", "Cu", "Nian", "Zhou", "Li", "Su", "Tiao", "Li", "Qi", "Su", "Hong", "Tong", "Zi", "Ce", "Yue", "Zhou", "Lin", "Zhuang", "Bai", void 0, "Fen", "Ji", void 0, "Sukumo", "Liang", "Xian", "Fu", "Liang", "Can", "Geng", "Li", "Yue", "Lu", "Ju", "Qi", "Cui", "Bai", "Zhang", "Lin", "Zong", "Jing", "Guo", "Kouji", "San", "San", "Tang", "Bian", "Rou", "Mian", "Hou", "Xu", "Zong", "Hu", "Jian", "Zan", "Ci", "Li", "Xie", "Fu", "Ni", "Bei", "Gu", "Xiu", "Gao", "Tang", "Qiu", "Sukumo", "Cao", "Zhuang", "Tang", "Mi", "San", "Fen", "Zao", "Kang", "Jiang", "Mo", "San", "San", "Nuo", "Xi", "Liang", "Jiang", "Kuai", "Bo", "Huan", void 0, "Zong", "Xian", "Nuo", "Tuan", "Nie", "Li", "Zuo", "Di", "Nie", "Tiao", "Lan", "Mi", "Jiao", "Jiu", "Xi", "Gong", "Zheng", "Jiu", "You"];
const kZ = Object.freeze(YZ);
const LZ = ["Ji", "Cha", "Zhou", "Xun", "Yue", "Hong", "Yu", "He", "Wan", "Ren", "Wen", "Wen", "Qiu", "Na", "Zi", "Tou", "Niu", "Fou", "Jie", "Shu", "Chun", "Pi", "Yin", "Sha", "Hong", "Zhi", "Ji", "Fen", "Yun", "Ren", "Dan", "Jin", "Su", "Fang", "Suo", "Cui", "Jiu", "Zha", "Kinu", "Jin", "Fu", "Zhi", "Ci", "Zi", "Chou", "Hong", "Zha", "Lei", "Xi", "Fu", "Xie", "Shen", "Bei", "Zhu", "Qu", "Ling", "Zhu", "Shao", "Gan", "Yang", "Fu", "Tuo", "Zhen", "Dai", "Zhuo", "Shi", "Zhong", "Xian", "Zu", "Jiong", "Ban", "Ju", "Mo", "Shu", "Zui", "Wata", "Jing", "Ren", "Heng", "Xie", "Jie", "Zhu", "Chou", "Gua", "Bai", "Jue", "Kuang", "Hu", "Ci", "Geng", "Geng", "Tao", "Xie", "Ku", "Jiao", "Quan", "Gai", "Luo", "Xuan", "Bing", "Xian", "Fu", "Gei", "Tong", "Rong", "Tiao", "Yin", "Lei", "Xie", "Quan", "Xu", "Lun", "Die", "Tong", "Si", "Jiang", "Xiang", "Hui", "Jue", "Zhi", "Jian", "Juan", "Chi", "Mian", "Zhen", "Lu", "Cheng", "Qiu", "Shu", "Bang", "Tong", "Xiao", "Wan", "Qin", "Geng", "Xiu", "Ti", "Xiu", "Xie", "Hong", "Xi", "Fu", "Ting", "Sui", "Dui", "Kun", "Fu", "Jing", "Hu", "Zhi", "Yan", "Jiong", "Feng", "Ji", "Sok", "Kase", "Zong", "Lin", "Duo", "Li", "Lu", "Liang", "Chou", "Quan", "Shao", "Qi", "Qi", "Zhun", "Qi", "Wan", "Qian", "Xian", "Shou", "Wei", "Qi", "Tao", "Wan", "Gang", "Wang", "Beng", "Zhui", "Cai", "Guo", "Cui", "Lun", "Liu", "Qi", "Zhan", "Bei", "Chuo", "Ling", "Mian", "Qi", "Qie", "Tan", "Zong", "Gun", "Zou", "Yi", "Zi", "Xing", "Liang", "Jin", "Fei", "Rui", "Min", "Yu", "Zong", "Fan", "Lu", "Xu", "Yingl", "Zhang", "Kasuri", "Xu", "Xiang", "Jian", "Ke", "Xian", "Ruan", "Mian", "Qi", "Duan", "Zhong", "Di", "Min", "Miao", "Yuan", "Xie", "Bao", "Si", "Qiu", "Bian", "Huan", "Geng", "Cong", "Mian", "Wei", "Fu", "Wei", "Yu", "Gou", "Miao", "Xie", "Lian", "Zong", "Bian", "Yun", "Yin", "Ti", "Gua", "Zhi", "Yun", "Cheng", "Chan", "Dai"];
const ZZ = Object.freeze(LZ);
const SZ = ["Xia", "Yuan", "Zong", "Xu", "Nawa", "Odoshi", "Geng", "Sen", "Ying", "Jin", "Yi", "Zhui", "Ni", "Bang", "Gu", "Pan", "Zhou", "Jian", "Cuo", "Quan", "Shuang", "Yun", "Xia", "Shuai", "Xi", "Rong", "Tao", "Fu", "Yun", "Zhen", "Gao", "Ru", "Hu", "Zai", "Teng", "Xian", "Su", "Zhen", "Zong", "Tao", "Horo", "Cai", "Bi", "Feng", "Cu", "Li", "Suo", "Yin", "Xi", "Zong", "Lei", "Zhuan", "Qian", "Man", "Zhi", "Lu", "Mo", "Piao", "Lian", "Mi", "Xuan", "Zong", "Ji", "Shan", "Sui", "Fan", "Shuai", "Beng", "Yi", "Sao", "Mou", "Zhou", "Qiang", "Hun", "Sem", "Xi", "Jung", "Xiu", "Ran", "Xuan", "Hui", "Qiao", "Zeng", "Zuo", "Zhi", "Shan", "San", "Lin", "Yu", "Fan", "Liao", "Chuo", "Zun", "Jian", "Rao", "Chan", "Rui", "Xiu", "Hui", "Hua", "Zuan", "Xi", "Qiang", "Un", "Da", "Sheng", "Hui", "Xi", "Se", "Jian", "Jiang", "Huan", "Zao", "Cong", "Jie", "Jiao", "Bo", "Chan", "Yi", "Nao", "Sui", "Yi", "Shai", "Xu", "Ji", "Bin", "Qian", "Lan", "Pu", "Xun", "Zuan", "Qi", "Peng", "Li", "Mo", "Lei", "Xie", "Zuan", "Kuang", "You", "Xu", "Lei", "Xian", "Chan", "Kou", "Lu", "Chan", "Ying", "Cai", "Xiang", "Xian", "Zui", "Zuan", "Luo", "Xi", "Dao", "Lan", "Lei", "Lian", "Si", "Jiu", "Yu", "Hong", "Zhou", "Xian", "He", "Yue", "Ji", "Wan", "Kuang", "Ji", "Ren", "Wei", "Yun", "Hong", "Chun", "Pi", "Sha", "Gang", "Na", "Ren", "Zong", "Lun", "Fen", "Zhi", "Wen", "Fang", "Zhu", "Yin", "Niu", "Shu", "Xian", "Gan", "Xie", "Fu", "Lian", "Zu", "Shen", "Xi", "Zhi", "Zhong", "Zhou", "Ban", "Fu", "Zhuo", "Shao", "Yi", "Jing", "Dai", "Bang", "Rong", "Jie", "Ku", "Rao", "Die", "Heng", "Hui", "Gei", "Xuan", "Jiang", "Luo", "Jue", "Jiao", "Tong", "Geng", "Xiao", "Juan", "Xiu", "Xi", "Sui", "Tao", "Ji", "Ti", "Ji", "Xu", "Ling", void 0, "Xu", "Qi", "Fei", "Chuo", "Zhang", "Gun", "Sheng", "Wei", "Mian", "Shou", "Beng", "Chou", "Tao", "Liu", "Quan", "Zong", "Zhan", "Wan", "Lu"];
const JZ = Object.freeze(SZ);
const CZ = ["Zhui", "Zi", "Ke", "Xiang", "Jian", "Mian", "Lan", "Ti", "Miao", "Qi", "Yun", "Hui", "Si", "Duo", "Duan", "Bian", "Xian", "Gou", "Zhui", "Huan", "Di", "Lu", "Bian", "Min", "Yuan", "Jin", "Fu", "Ru", "Zhen", "Feng", "Shuai", "Gao", "Chan", "Li", "Yi", "Jian", "Bin", "Piao", "Man", "Lei", "Ying", "Suo", "Mou", "Sao", "Xie", "Liao", "Shan", "Zeng", "Jiang", "Qian", "Zao", "Huan", "Jiao", "Zuan", "Fou", "Xie", "Gang", "Fou", "Que", "Fou", "Kaakeru", "Bo", "Ping", "Hou", void 0, "Gang", "Ying", "Ying", "Qing", "Xia", "Guan", "Zun", "Tan", "Chang", "Qi", "Weng", "Ying", "Lei", "Tan", "Lu", "Guan", "Wang", "Wang", "Gang", "Wang", "Han", void 0, "Luo", "Fu", "Mi", "Fa", "Gu", "Zhu", "Ju", "Mao", "Gu", "Min", "Gang", "Ba", "Gua", "Ti", "Juan", "Fu", "Lin", "Yan", "Zhao", "Zui", "Gua", "Zhuo", "Yu", "Zhi", "An", "Fa", "Nan", "Shu", "Si", "Pi", "Ma", "Liu", "Ba", "Fa", "Li", "Chao", "Wei", "Bi", "Ji", "Zeng", "Tong", "Liu", "Ji", "Juan", "Mi", "Zhao", "Luo", "Pi", "Ji", "Ji", "Luan", "Yang", "Mie", "Qiang", "Ta", "Mei", "Yang", "You", "You", "Fen", "Ba", "Gao", "Yang", "Gu", "Qiang", "Zang", "Gao", "Ling", "Yi", "Zhu", "Di", "Xiu", "Qian", "Yi", "Xian", "Rong", "Qun", "Qun", "Qian", "Huan", "Zui", "Xian", "Yi", "Yashinau", "Qiang", "Xian", "Yu", "Geng", "Jie", "Tang", "Yuan", "Xi", "Fan", "Shan", "Fen", "Shan", "Lian", "Lei", "Geng", "Nou", "Qiang", "Chan", "Yu", "Gong", "Yi", "Chong", "Weng", "Fen", "Hong", "Chi", "Chi", "Cui", "Fu", "Xia", "Pen", "Yi", "La", "Yi", "Pi", "Ling", "Liu", "Zhi", "Qu", "Xi", "Xie", "Xiang", "Xi", "Xi", "Qi", "Qiao", "Hui", "Hui", "Xiao", "Se", "Hong", "Jiang", "Di", "Cui", "Fei", "Tao", "Sha", "Chi", "Zhu", "Jian", "Xuan", "Shi", "Pian", "Zong", "Wan", "Hui", "Hou", "He", "He", "Han", "Ao", "Piao", "Yi", "Lian", "Qu", void 0, "Lin", "Pen", "Qiao", "Ao", "Fan", "Yi", "Hui", "Xuan", "Dao"];
const XZ = Object.freeze(CZ);
const HZ = ["Yao", "Lao", void 0, "Kao", "Mao", "Zhe", "Qi", "Gou", "Gou", "Gou", "Die", "Die", "Er", "Shua", "Ruan", "Er", "Nai", "Zhuan", "Lei", "Ting", "Zi", "Geng", "Chao", "Hao", "Yun", "Pa", "Pi", "Chi", "Si", "Chu", "Jia", "Ju", "He", "Chu", "Lao", "Lun", "Ji", "Tang", "Ou", "Lou", "Nou", "Gou", "Pang", "Ze", "Lou", "Ji", "Lao", "Huo", "You", "Mo", "Huai", "Er", "Zhe", "Ting", "Ye", "Da", "Song", "Qin", "Yun", "Chi", "Dan", "Dan", "Hong", "Geng", "Zhi", void 0, "Nie", "Dan", "Zhen", "Che", "Ling", "Zheng", "You", "Wa", "Liao", "Long", "Zhi", "Ning", "Tiao", "Er", "Ya", "Die", "Gua", void 0, "Lian", "Hao", "Sheng", "Lie", "Pin", "Jing", "Ju", "Bi", "Di", "Guo", "Wen", "Xu", "Ping", "Cong", "Shikato", void 0, "Ting", "Yu", "Cong", "Kui", "Tsuraneru", "Kui", "Cong", "Lian", "Weng", "Kui", "Lian", "Lian", "Cong", "Ao", "Sheng", "Song", "Ting", "Kui", "Nie", "Zhi", "Dan", "Ning", "Qie", "Ji", "Ting", "Ting", "Long", "Yu", "Yu", "Zhao", "Si", "Su", "Yi", "Su", "Si", "Zhao", "Zhao", "Rou", "Yi", "Le", "Ji", "Qiu", "Ken", "Cao", "Ge", "Di", "Huan", "Huang", "Yi", "Ren", "Xiao", "Ru", "Zhou", "Yuan", "Du", "Gang", "Rong", "Gan", "Cha", "Wo", "Chang", "Gu", "Zhi", "Han", "Fu", "Fei", "Fen", "Pei", "Pang", "Jian", "Fang", "Zhun", "You", "Na", "Hang", "Ken", "Ran", "Gong", "Yu", "Wen", "Yao", "Jin", "Pi", "Qian", "Xi", "Xi", "Fei", "Ken", "Jing", "Tai", "Shen", "Zhong", "Zhang", "Xie", "Shen", "Wei", "Zhou", "Die", "Dan", "Fei", "Ba", "Bo", "Qu", "Tian", "Bei", "Gua", "Tai", "Zi", "Ku", "Zhi", "Ni", "Ping", "Zi", "Fu", "Pang", "Zhen", "Xian", "Zuo", "Pei", "Jia", "Sheng", "Zhi", "Bao", "Mu", "Qu", "Hu", "Ke", "Yi", "Yin", "Xu", "Yang", "Long", "Dong", "Ka", "Lu", "Jing", "Nu", "Yan", "Pang", "Kua", "Yi", "Guang", "Gai", "Ge", "Dong", "Zhi", "Xiao", "Xiong", "Xiong", "Er", "E", "Xing", "Pian", "Neng", "Zi", "Gui"];
const BZ = Object.freeze(HZ);
const TZ = ["Cheng", "Tiao", "Zhi", "Cui", "Mei", "Xie", "Cui", "Xie", "Mo", "Mai", "Ji", "Obiyaakasu", void 0, "Kuai", "Sa", "Zang", "Qi", "Nao", "Mi", "Nong", "Luan", "Wan", "Bo", "Wen", "Guan", "Qiu", "Jiao", "Jing", "Rou", "Heng", "Cuo", "Lie", "Shan", "Ting", "Mei", "Chun", "Shen", "Xie", "De", "Zui", "Cu", "Xiu", "Xin", "Tuo", "Pao", "Cheng", "Nei", "Fu", "Dou", "Tuo", "Niao", "Noy", "Pi", "Gu", "Gua", "Li", "Lian", "Zhang", "Cui", "Jie", "Liang", "Zhou", "Pi", "Biao", "Lun", "Pian", "Guo", "Kui", "Chui", "Dan", "Tian", "Nei", "Jing", "Jie", "La", "Yi", "An", "Ren", "Shen", "Chuo", "Fu", "Fu", "Ju", "Fei", "Qiang", "Wan", "Dong", "Pi", "Guo", "Zong", "Ding", "Wu", "Mei", "Ruan", "Zhuan", "Zhi", "Cou", "Gua", "Ou", "Di", "An", "Xing", "Nao", "Yu", "Chuan", "Nan", "Yun", "Zhong", "Rou", "E", "Sai", "Tu", "Yao", "Jian", "Wei", "Jiao", "Yu", "Jia", "Duan", "Bi", "Chang", "Fu", "Xian", "Ni", "Mian", "Wa", "Teng", "Tui", "Bang", "Qian", "Lu", "Wa", "Sou", "Tang", "Su", "Zhui", "Ge", "Yi", "Bo", "Liao", "Ji", "Pi", "Xie", "Gao", "Lu", "Bin", "Ou", "Chang", "Lu", "Guo", "Pang", "Chuai", "Piao", "Jiang", "Fu", "Tang", "Mo", "Xi", "Zhuan", "Lu", "Jiao", "Ying", "Lu", "Zhi", "Tara", "Chun", "Lian", "Tong", "Peng", "Ni", "Zha", "Liao", "Cui", "Gui", "Xiao", "Teng", "Fan", "Zhi", "Jiao", "Shan", "Wu", "Cui", "Run", "Xiang", "Sui", "Fen", "Ying", "Tan", "Zhua", "Dan", "Kuai", "Nong", "Tun", "Lian", "Bi", "Yong", "Jue", "Chu", "Yi", "Juan", "La", "Lian", "Sao", "Tun", "Gu", "Qi", "Cui", "Bin", "Xun", "Ru", "Huo", "Zang", "Xian", "Biao", "Xing", "Kuan", "La", "Yan", "Lu", "Huo", "Zang", "Luo", "Qu", "Zang", "Luan", "Ni", "Zang", "Chen", "Qian", "Wo", "Guang", "Zang", "Lin", "Guang", "Zi", "Jiao", "Nie", "Chou", "Ji", "Gao", "Chou", "Mian", "Nie", "Zhi", "Zhi", "Ge", "Jian", "Die", "Zhi", "Xiu", "Tai", "Zhen", "Jiu", "Xian", "Yu", "Cha"];
const DZ = Object.freeze(TZ);
const MZ = ["Yao", "Yu", "Chong", "Xi", "Xi", "Jiu", "Yu", "Yu", "Xing", "Ju", "Jiu", "Xin", "She", "She", "Yadoru", "Jiu", "Shi", "Tan", "Shu", "Shi", "Tian", "Dan", "Pu", "Pu", "Guan", "Hua", "Tan", "Chuan", "Shun", "Xia", "Wu", "Zhou", "Dao", "Gang", "Shan", "Yi", void 0, "Pa", "Tai", "Fan", "Ban", "Chuan", "Hang", "Fang", "Ban", "Que", "Hesaki", "Zhong", "Jian", "Cang", "Ling", "Zhu", "Ze", "Duo", "Bo", "Xian", "Ge", "Chuan", "Jia", "Lu", "Hong", "Pang", "Xi", void 0, "Fu", "Zao", "Feng", "Li", "Shao", "Yu", "Lang", "Ting", void 0, "Wei", "Bo", "Meng", "Nian", "Ju", "Huang", "Shou", "Zong", "Bian", "Mao", "Die", void 0, "Bang", "Cha", "Yi", "Sao", "Cang", "Cao", "Lou", "Dai", "Sori", "Yao", "Tong", "Yofune", "Dang", "Tan", "Lu", "Yi", "Jie", "Jian", "Huo", "Meng", "Qi", "Lu", "Lu", "Chan", "Shuang", "Gen", "Liang", "Jian", "Jian", "Se", "Yan", "Fu", "Ping", "Yan", "Yan", "Cao", "Cao", "Yi", "Le", "Ting", "Qiu", "Ai", "Nai", "Tiao", "Jiao", "Jie", "Peng", "Wan", "Yi", "Chai", "Mian", "Mie", "Gan", "Qian", "Yu", "Yu", "Shuo", "Qiong", "Tu", "Xia", "Qi", "Mang", "Zi", "Hui", "Sui", "Zhi", "Xiang", "Bi", "Fu", "Tun", "Wei", "Wu", "Zhi", "Qi", "Shan", "Wen", "Qian", "Ren", "Fou", "Kou", "Jie", "Lu", "Xu", "Ji", "Qin", "Qi", "Yuan", "Fen", "Ba", "Rui", "Xin", "Ji", "Hua", "Hua", "Fang", "Wu", "Jue", "Gou", "Zhi", "Yun", "Qin", "Ao", "Chu", "Mao", "Ya", "Fei", "Reng", "Hang", "Cong", "Yin", "You", "Bian", "Yi", "Susa", "Wei", "Li", "Pi", "E", "Xian", "Chang", "Cang", "Meng", "Su", "Yi", "Yuan", "Ran", "Ling", "Tai", "Tiao", "Di", "Miao", "Qiong", "Li", "Yong", "Ke", "Mu", "Pei", "Bao", "Gou", "Min", "Yi", "Yi", "Ju", "Pi", "Ruo", "Ku", "Zhu", "Ni", "Bo", "Bing", "Shan", "Qiu", "Yao", "Xian", "Ben", "Hong", "Ying", "Zha", "Dong", "Ju", "Die", "Nie", "Gan", "Hu", "Ping", "Mei", "Fu", "Sheng", "Gu", "Bi", "Wei"];
const QZ = Object.freeze(MZ);
const xZ = ["Fu", "Zhuo", "Mao", "Fan", "Qie", "Mao", "Mao", "Ba", "Zi", "Mo", "Zi", "Di", "Chi", "Ji", "Jing", "Long", void 0, "Niao", void 0, "Xue", "Ying", "Qiong", "Ge", "Ming", "Li", "Rong", "Yin", "Gen", "Qian", "Chai", "Chen", "Yu", "Xiu", "Zi", "Lie", "Wu", "Ji", "Kui", "Ce", "Chong", "Ci", "Gou", "Guang", "Mang", "Chi", "Jiao", "Jiao", "Fu", "Yu", "Zhu", "Zi", "Jiang", "Hui", "Yin", "Cha", "Fa", "Rong", "Ru", "Chong", "Mang", "Tong", "Zhong", void 0, "Zhu", "Xun", "Huan", "Kua", "Quan", "Gai", "Da", "Jing", "Xing", "Quan", "Cao", "Jing", "Er", "An", "Shou", "Chi", "Ren", "Jian", "Ti", "Huang", "Ping", "Li", "Jin", "Lao", "Shu", "Zhuang", "Da", "Jia", "Rao", "Bi", "Ze", "Qiao", "Hui", "Qi", "Dang", void 0, "Rong", "Hun", "Ying", "Luo", "Ying", "Xun", "Jin", "Sun", "Yin", "Mai", "Hong", "Zhou", "Yao", "Du", "Wei", "Chu", "Dou", "Fu", "Ren", "Yin", "He", "Bi", "Bu", "Yun", "Di", "Tu", "Sui", "Sui", "Cheng", "Chen", "Wu", "Bie", "Xi", "Geng", "Li", "Fu", "Zhu", "Mo", "Li", "Zhuang", "Ji", "Duo", "Qiu", "Sha", "Suo", "Chen", "Feng", "Ju", "Mei", "Meng", "Xing", "Jing", "Che", "Xin", "Jun", "Yan", "Ting", "Diao", "Cuo", "Wan", "Han", "You", "Cuo", "Jia", "Wang", "You", "Niu", "Shao", "Xian", "Lang", "Fu", "E", "Mo", "Wen", "Jie", "Nan", "Mu", "Kan", "Lai", "Lian", "Shi", "Wo", "Usagi", "Lian", "Huo", "You", "Ying", "Ying", "Nuc", "Chun", "Mang", "Mang", "Ci", "Wan", "Jing", "Di", "Qu", "Dong", "Jian", "Zou", "Gu", "La", "Lu", "Ju", "Wei", "Jun", "Nie", "Kun", "He", "Pu", "Zi", "Gao", "Guo", "Fu", "Lun", "Chang", "Chou", "Song", "Chui", "Zhan", "Men", "Cai", "Ba", "Li", "Tu", "Bo", "Han", "Bao", "Qin", "Juan", "Xi", "Qin", "Di", "Jie", "Pu", "Dang", "Jin", "Zhao", "Tai", "Geng", "Hua", "Gu", "Ling", "Fei", "Jin", "An", "Wang", "Beng", "Zhou", "Yan", "Ju", "Jian", "Lin", "Tan", "Shu", "Tian", "Dao"];
const GZ = Object.freeze(xZ);
const WZ = ["Hu", "Qi", "He", "Cui", "Tao", "Chun", "Bei", "Chang", "Huan", "Fei", "Lai", "Qi", "Meng", "Ping", "Wei", "Dan", "Sha", "Huan", "Yan", "Yi", "Tiao", "Qi", "Wan", "Ce", "Nai", "Kutabireru", "Tuo", "Jiu", "Tie", "Luo", void 0, void 0, "Meng", void 0, "Yaji", void 0, "Ying", "Ying", "Ying", "Xiao", "Sa", "Qiu", "Ke", "Xiang", "Wan", "Yu", "Yu", "Fu", "Lian", "Xuan", "Yuan", "Nan", "Ze", "Wo", "Chun", "Xiao", "Yu", "Pian", "Mao", "An", "E", "Luo", "Ying", "Huo", "Gua", "Jiang", "Mian", "Zuo", "Zuo", "Ju", "Bao", "Rou", "Xi", "Xie", "An", "Qu", "Jian", "Fu", "Lu", "Jing", "Pen", "Feng", "Hong", "Hong", "Hou", "Yan", "Tu", "Zhu", "Zi", "Xiang", "Shen", "Ge", "Jie", "Jing", "Mi", "Huang", "Shen", "Pu", "Gai", "Dong", "Zhou", "Qian", "Wei", "Bo", "Wei", "Pa", "Ji", "Hu", "Zang", "Jia", "Duan", "Yao", "Jun", "Cong", "Quan", "Wei", "Xian", "Kui", "Ting", "Hun", "Xi", "Shi", "Qi", "Lan", "Zong", "Yao", "Yuan", "Mei", "Yun", "Shu", "Di", "Zhuan", "Guan", "Sukumo", "Xue", "Chan", "Kai", "Kui", void 0, "Jiang", "Lou", "Wei", "Pai", void 0, "Sou", "Yin", "Shi", "Chun", "Shi", "Yun", "Zhen", "Lang", "Nu", "Meng", "He", "Que", "Suan", "Yuan", "Li", "Ju", "Xi", "Pang", "Chu", "Xu", "Tu", "Liu", "Wo", "Zhen", "Qian", "Zu", "Po", "Cuo", "Yuan", "Chu", "Yu", "Kuai", "Pan", "Pu", "Pu", "Na", "Shuo", "Xi", "Fen", "Yun", "Zheng", "Jian", "Ji", "Ruo", "Cang", "En", "Mi", "Hao", "Sun", "Zhen", "Ming", "Sou", "Xu", "Liu", "Xi", "Gu", "Lang", "Rong", "Weng", "Gai", "Cuo", "Shi", "Tang", "Luo", "Ru", "Suo", "Xian", "Bei", "Yao", "Gui", "Bi", "Zong", "Gun", "Za", "Xiu", "Ce", "Hai", "Lan", void 0, "Ji", "Li", "Can", "Lang", "Yu", void 0, "Ying", "Mo", "Diao", "Tiao", "Mao", "Tong", "Zhu", "Peng", "An", "Lian", "Cong", "Xi", "Ping", "Qiu", "Jin", "Chun", "Jie", "Wei", "Tui", "Cao", "Yu", "Yi", "Ji", "Liao", "Bi", "Lu", "Su"];
const NZ = Object.freeze(WZ);
const PZ = ["Bu", "Zhang", "Luo", "Jiang", "Man", "Yan", "Ling", "Ji", "Piao", "Gun", "Han", "Di", "Su", "Lu", "She", "Shang", "Di", "Mie", "Xun", "Man", "Bo", "Di", "Cuo", "Zhe", "Sen", "Xuan", "Wei", "Hu", "Ao", "Mi", "Lou", "Cu", "Zhong", "Cai", "Po", "Jiang", "Mi", "Cong", "Niao", "Hui", "Jun", "Yin", "Jian", "Yan", "Shu", "Yin", "Kui", "Chen", "Hu", "Sha", "Kou", "Qian", "Ma", "Zang", "Sonoko", "Qiang", "Dou", "Lian", "Lin", "Kou", "Ai", "Bi", "Li", "Wei", "Ji", "Xun", "Sheng", "Fan", "Meng", "Ou", "Chan", "Dian", "Xun", "Jiao", "Rui", "Rui", "Lei", "Yu", "Qiao", "Chu", "Hua", "Jian", "Mai", "Yun", "Bao", "You", "Qu", "Lu", "Rao", "Hui", "E", "Teng", "Fei", "Jue", "Zui", "Fa", "Ru", "Fen", "Kui", "Shun", "Rui", "Ya", "Xu", "Fu", "Jue", "Dang", "Wu", "Tong", "Si", "Xiao", "Xi", "Long", "Yun", void 0, "Qi", "Jian", "Yun", "Sun", "Ling", "Yu", "Xia", "Yong", "Ji", "Hong", "Si", "Nong", "Lei", "Xuan", "Yun", "Yu", "Xi", "Hao", "Bo", "Hao", "Ai", "Wei", "Hui", "Wei", "Ji", "Ci", "Xiang", "Luan", "Mie", "Yi", "Leng", "Jiang", "Can", "Shen", "Qiang", "Lian", "Ke", "Yuan", "Da", "Ti", "Tang", "Xie", "Bi", "Zhan", "Sun", "Lian", "Fan", "Ding", "Jie", "Gu", "Xie", "Shu", "Jian", "Kao", "Hong", "Sa", "Xin", "Xun", "Yao", "Hie", "Sou", "Shu", "Xun", "Dui", "Pin", "Wei", "Neng", "Chou", "Mai", "Ru", "Piao", "Tai", "Qi", "Zao", "Chen", "Zhen", "Er", "Ni", "Ying", "Gao", "Cong", "Xiao", "Qi", "Fa", "Jian", "Xu", "Kui", "Jie", "Bian", "Diao", "Mi", "Lan", "Jin", "Cang", "Miao", "Qiong", "Qie", "Xian", void 0, "Ou", "Xian", "Su", "Lu", "Yi", "Xu", "Xie", "Li", "Yi", "La", "Lei", "Xiao", "Di", "Zhi", "Bei", "Teng", "Yao", "Mo", "Huan", "Piao", "Fan", "Sou", "Tan", "Tui", "Qiong", "Qiao", "Wei", "Liu", "Hui", void 0, "Gao", "Yun", void 0, "Li", "Shu", "Chu", "Ai", "Lin", "Zao", "Xuan", "Chen", "Lai", "Huo"];
const FZ = Object.freeze(PZ);
const RZ = ["Tuo", "Wu", "Rui", "Rui", "Qi", "Heng", "Lu", "Su", "Tui", "Mang", "Yun", "Pin", "Yu", "Xun", "Ji", "Jiong", "Xian", "Mo", "Hagi", "Su", "Jiong", void 0, "Nie", "Bo", "Rang", "Yi", "Xian", "Yu", "Ju", "Lian", "Lian", "Yin", "Qiang", "Ying", "Long", "Tong", "Wei", "Yue", "Ling", "Qu", "Yao", "Fan", "Mi", "Lan", "Kui", "Lan", "Ji", "Dang", "Katsura", "Lei", "Lei", "Hua", "Feng", "Zhi", "Wei", "Kui", "Zhan", "Huai", "Li", "Ji", "Mi", "Lei", "Huai", "Luo", "Ji", "Kui", "Lu", "Jian", "San", void 0, "Lei", "Quan", "Xiao", "Yi", "Luan", "Men", "Bie", "Hu", "Hu", "Lu", "Nue", "Lu", "Si", "Xiao", "Qian", "Chu", "Hu", "Xu", "Cuo", "Fu", "Xu", "Xu", "Lu", "Hu", "Yu", "Hao", "Jiao", "Ju", "Guo", "Bao", "Yan", "Zhan", "Zhan", "Kui", "Ban", "Xi", "Shu", "Chong", "Qiu", "Diao", "Ji", "Qiu", "Cheng", "Shi", void 0, "Di", "Zhe", "She", "Yu", "Gan", "Zi", "Hong", "Hui", "Meng", "Ge", "Sui", "Xia", "Chai", "Shi", "Yi", "Ma", "Xiang", "Fang", "E", "Pa", "Chi", "Qian", "Wen", "Wen", "Rui", "Bang", "Bi", "Yue", "Yue", "Jun", "Qi", "Ran", "Yin", "Qi", "Tian", "Yuan", "Jue", "Hui", "Qin", "Qi", "Zhong", "Ya", "Ci", "Mu", "Wang", "Fen", "Fen", "Hang", "Gong", "Zao", "Fu", "Ran", "Jie", "Fu", "Chi", "Dou", "Piao", "Xian", "Ni", "Te", "Qiu", "You", "Zha", "Ping", "Chi", "You", "He", "Han", "Ju", "Li", "Fu", "Ran", "Zha", "Gou", "Pi", "Bo", "Xian", "Zhu", "Diao", "Bie", "Bing", "Gu", "Ran", "Qu", "She", "Tie", "Ling", "Gu", "Dan", "Gu", "Ying", "Li", "Cheng", "Qu", "Mou", "Ge", "Ci", "Hui", "Hui", "Mang", "Fu", "Yang", "Wa", "Lie", "Zhu", "Yi", "Xian", "Kuo", "Jiao", "Li", "Yi", "Ping", "Ji", "Ha", "She", "Yi", "Wang", "Mo", "Qiong", "Qie", "Gui", "Gong", "Zhi", "Man", "Ebi", "Zhi", "Jia", "Rao", "Si", "Qi", "Xing", "Lie", "Qiu", "Shao", "Yong", "Jia", "Shui", "Che", "Bai", "E", "Han"];
const KZ = Object.freeze(RZ);
const AZ = ["Shu", "Xuan", "Feng", "Shen", "Zhen", "Fu", "Xian", "Zhe", "Wu", "Fu", "Li", "Lang", "Bi", "Chu", "Yuan", "You", "Jie", "Dan", "Yan", "Ting", "Dian", "Shui", "Hui", "Gua", "Zhi", "Song", "Fei", "Ju", "Mi", "Qi", "Qi", "Yu", "Jun", "Zha", "Meng", "Qiang", "Si", "Xi", "Lun", "Li", "Die", "Tiao", "Tao", "Kun", "Gan", "Han", "Yu", "Bang", "Fei", "Pi", "Wei", "Dun", "Yi", "Yuan", "Su", "Quan", "Qian", "Rui", "Ni", "Qing", "Wei", "Liang", "Guo", "Wan", "Dong", "E", "Ban", "Di", "Wang", "Can", "Yang", "Ying", "Guo", "Chan", void 0, "La", "Ke", "Ji", "He", "Ting", "Mai", "Xu", "Mian", "Yu", "Jie", "Shi", "Xuan", "Huang", "Yan", "Bian", "Rou", "Wei", "Fu", "Yuan", "Mei", "Wei", "Fu", "Ruan", "Xie", "You", "Qiu", "Mao", "Xia", "Ying", "Shi", "Chong", "Tang", "Zhu", "Zong", "Ti", "Fu", "Yuan", "Hui", "Meng", "La", "Du", "Hu", "Qiu", "Die", "Li", "Gua", "Yun", "Ju", "Nan", "Lou", "Qun", "Rong", "Ying", "Jiang", void 0, "Lang", "Pang", "Si", "Xi", "Ci", "Xi", "Yuan", "Weng", "Lian", "Sou", "Ban", "Rong", "Rong", "Ji", "Wu", "Qiu", "Han", "Qin", "Yi", "Bi", "Hua", "Tang", "Yi", "Du", "Nai", "He", "Hu", "Hui", "Ma", "Ming", "Yi", "Wen", "Ying", "Teng", "Yu", "Cang", "So", "Ebi", "Man", void 0, "Shang", "Zhe", "Cao", "Chi", "Di", "Ao", "Lu", "Wei", "Zhi", "Tang", "Chen", "Piao", "Qu", "Pi", "Yu", "Jian", "Luo", "Lou", "Qin", "Zhong", "Yin", "Jiang", "Shuai", "Wen", "Jiao", "Wan", "Zhi", "Zhe", "Ma", "Ma", "Guo", "Liu", "Mao", "Xi", "Cong", "Li", "Man", "Xiao", "Kamakiri", "Zhang", "Mang", "Xiang", "Mo", "Zui", "Si", "Qiu", "Te", "Zhi", "Peng", "Peng", "Jiao", "Qu", "Bie", "Liao", "Pan", "Gui", "Xi", "Ji", "Zhuan", "Huang", "Fei", "Lao", "Jue", "Jue", "Hui", "Yin", "Chan", "Jiao", "Shan", "Rao", "Xiao", "Mou", "Chong", "Xun", "Si", void 0, "Cheng", "Dang", "Li", "Xie", "Shan", "Yi", "Jing", "Da", "Chan", "Qi"];
const OZ = Object.freeze(AZ);
const _Z = ["Ci", "Xiang", "She", "Luo", "Qin", "Ying", "Chai", "Li", "Ze", "Xuan", "Lian", "Zhu", "Ze", "Xie", "Mang", "Xie", "Qi", "Rong", "Jian", "Meng", "Hao", "Ruan", "Huo", "Zhuo", "Jie", "Bin", "He", "Mie", "Fan", "Lei", "Jie", "La", "Mi", "Li", "Chun", "Li", "Qiu", "Nie", "Lu", "Du", "Xiao", "Zhu", "Long", "Li", "Long", "Feng", "Ye", "Beng", "Shang", "Gu", "Juan", "Ying", void 0, "Xi", "Can", "Qu", "Quan", "Du", "Can", "Man", "Jue", "Jie", "Zhu", "Zha", "Xie", "Huang", "Niu", "Pei", "Nu", "Xin", "Zhong", "Mo", "Er", "Ke", "Mie", "Xi", "Xing", "Yan", "Kan", "Yuan", void 0, "Ling", "Xuan", "Shu", "Xian", "Tong", "Long", "Jie", "Xian", "Ya", "Hu", "Wei", "Dao", "Chong", "Wei", "Dao", "Zhun", "Heng", "Qu", "Yi", "Yi", "Bu", "Gan", "Yu", "Biao", "Cha", "Yi", "Shan", "Chen", "Fu", "Gun", "Fen", "Shuai", "Jie", "Na", "Zhong", "Dan", "Ri", "Zhong", "Zhong", "Xie", "Qi", "Xie", "Ran", "Zhi", "Ren", "Qin", "Jin", "Jun", "Yuan", "Mei", "Chai", "Ao", "Niao", "Hui", "Ran", "Jia", "Tuo", "Ling", "Dai", "Bao", "Pao", "Yao", "Zuo", "Bi", "Shao", "Tan", "Ju", "He", "Shu", "Xiu", "Zhen", "Yi", "Pa", "Bo", "Di", "Wa", "Fu", "Gun", "Zhi", "Zhi", "Ran", "Pan", "Yi", "Mao", "Tuo", "Na", "Kou", "Xian", "Chan", "Qu", "Bei", "Gun", "Xi", "Ne", "Bo", "Horo", "Fu", "Yi", "Chi", "Ku", "Ren", "Jiang", "Jia", "Cun", "Mo", "Jie", "Er", "Luo", "Ru", "Zhu", "Gui", "Yin", "Cai", "Lie", "Kamishimo", "Yuki", "Zhuang", "Dang", void 0, "Kun", "Ken", "Niao", "Shu", "Jia", "Kun", "Cheng", "Li", "Juan", "Shen", "Pou", "Ge", "Yi", "Yu", "Zhen", "Liu", "Qiu", "Qun", "Ji", "Yi", "Bu", "Zhuang", "Shui", "Sha", "Qun", "Li", "Lian", "Lian", "Ku", "Jian", "Fou", "Chan", "Bi", "Gun", "Tao", "Yuan", "Ling", "Chi", "Chang", "Chou", "Duo", "Biao", "Liang", "Chang", "Pei", "Pei", "Fei", "Yuan", "Luo", "Guo", "Yan", "Du", "Xi", "Zhi", "Ju", "Qi"];
const EZ = Object.freeze(_Z);
const zZ = ["Ji", "Zhi", "Gua", "Ken", "Che", "Ti", "Ti", "Fu", "Chong", "Xie", "Bian", "Die", "Kun", "Duan", "Xiu", "Xiu", "He", "Yuan", "Bao", "Bao", "Fu", "Yu", "Tuan", "Yan", "Hui", "Bei", "Chu", "Lu", "Ena", "Hitoe", "Yun", "Da", "Gou", "Da", "Huai", "Rong", "Yuan", "Ru", "Nai", "Jiong", "Suo", "Ban", "Tun", "Chi", "Sang", "Niao", "Ying", "Jie", "Qian", "Huai", "Ku", "Lian", "Bao", "Li", "Zhe", "Shi", "Lu", "Yi", "Die", "Xie", "Xian", "Wei", "Biao", "Cao", "Ji", "Jiang", "Sen", "Bao", "Xiang", "Chihaya", "Pu", "Jian", "Zhuan", "Jian", "Zui", "Ji", "Dan", "Za", "Fan", "Bo", "Xiang", "Xin", "Bie", "Rao", "Man", "Lan", "Ao", "Duo", "Gui", "Cao", "Sui", "Nong", "Chan", "Lian", "Bi", "Jin", "Dang", "Shu", "Tan", "Bi", "Lan", "Pu", "Ru", "Zhi", void 0, "Shu", "Wa", "Shi", "Bai", "Xie", "Bo", "Chen", "Lai", "Long", "Xi", "Xian", "Lan", "Zhe", "Dai", "Tasuki", "Zan", "Shi", "Jian", "Pan", "Yi", "Ran", "Ya", "Xi", "Xi", "Yao", "Feng", "Tan", void 0, "Biao", "Fu", "Ba", "He", "Ji", "Ji", "Jian", "Guan", "Bian", "Yan", "Gui", "Jue", "Pian", "Mao", "Mi", "Mi", "Mie", "Shi", "Si", "Zhan", "Luo", "Jue", "Mi", "Tiao", "Lian", "Yao", "Zhi", "Jun", "Xi", "Shan", "Wei", "Xi", "Tian", "Yu", "Lan", "E", "Du", "Qin", "Pang", "Ji", "Ming", "Ying", "Gou", "Qu", "Zhan", "Jin", "Guan", "Deng", "Jian", "Luo", "Qu", "Jian", "Wei", "Jue", "Qu", "Luo", "Lan", "Shen", "Di", "Guan", "Jian", "Guan", "Yan", "Gui", "Mi", "Shi", "Zhan", "Lan", "Jue", "Ji", "Xi", "Di", "Tian", "Yu", "Gou", "Jin", "Qu", "Jiao", "Jiu", "Jin", "Cu", "Jue", "Zhi", "Chao", "Ji", "Gu", "Dan", "Zui", "Di", "Shang", "Hua", "Quan", "Ge", "Chi", "Jie", "Gui", "Gong", "Chu", "Jie", "Hun", "Qiu", "Xing", "Su", "Ni", "Ji", "Lu", "Zhi", "Zha", "Bi", "Xing", "Hu", "Shang", "Gong", "Zhi", "Xue", "Chu", "Xi", "Yi", "Lu", "Jue", "Xi", "Yan", "Xi"];
const $Z = Object.freeze(zZ);
const IZ = ["Yan", "Yan", "Ding", "Fu", "Qiu", "Qiu", "Jiao", "Hong", "Ji", "Fan", "Xun", "Diao", "Hong", "Cha", "Tao", "Xu", "Jie", "Yi", "Ren", "Xun", "Yin", "Shan", "Qi", "Tuo", "Ji", "Xun", "Yin", "E", "Fen", "Ya", "Yao", "Song", "Shen", "Yin", "Xin", "Jue", "Xiao", "Ne", "Chen", "You", "Zhi", "Xiong", "Fang", "Xin", "Chao", "She", "Xian", "Sha", "Tun", "Xu", "Yi", "Yi", "Su", "Chi", "He", "Shen", "He", "Xu", "Zhen", "Zhu", "Zheng", "Gou", "Zi", "Zi", "Zhan", "Gu", "Fu", "Quan", "Die", "Ling", "Di", "Yang", "Li", "Nao", "Pan", "Zhou", "Gan", "Yi", "Ju", "Ao", "Zha", "Tuo", "Yi", "Qu", "Zhao", "Ping", "Bi", "Xiong", "Qu", "Ba", "Da", "Zu", "Tao", "Zhu", "Ci", "Zhe", "Yong", "Xu", "Xun", "Yi", "Huang", "He", "Shi", "Cha", "Jiao", "Shi", "Hen", "Cha", "Gou", "Gui", "Quan", "Hui", "Jie", "Hua", "Gai", "Xiang", "Wei", "Shen", "Chou", "Tong", "Mi", "Zhan", "Ming", "E", "Hui", "Yan", "Xiong", "Gua", "Er", "Beng", "Tiao", "Chi", "Lei", "Zhu", "Kuang", "Kua", "Wu", "Yu", "Teng", "Ji", "Zhi", "Ren", "Su", "Lang", "E", "Kuang", "E", "Shi", "Ting", "Dan", "Bo", "Chan", "You", "Heng", "Qiao", "Qin", "Shua", "An", "Yu", "Xiao", "Cheng", "Jie", "Xian", "Wu", "Wu", "Gao", "Song", "Pu", "Hui", "Jing", "Shuo", "Zhen", "Shuo", "Du", "Yasashi", "Chang", "Shui", "Jie", "Ke", "Qu", "Cong", "Xiao", "Sui", "Wang", "Xuan", "Fei", "Chi", "Ta", "Yi", "Na", "Yin", "Diao", "Pi", "Chuo", "Chan", "Chen", "Zhun", "Ji", "Qi", "Tan", "Zhui", "Wei", "Ju", "Qing", "Jian", "Zheng", "Ze", "Zou", "Qian", "Zhuo", "Liang", "Jian", "Zhu", "Hao", "Lun", "Shen", "Biao", "Huai", "Pian", "Yu", "Die", "Xu", "Pian", "Shi", "Xuan", "Shi", "Hun", "Hua", "E", "Zhong", "Di", "Xie", "Fu", "Pu", "Ting", "Jian", "Qi", "Yu", "Zi", "Chuan", "Xi", "Hui", "Yin", "An", "Xian", "Nan", "Chen", "Feng", "Zhu", "Yang", "Yan", "Heng", "Xuan", "Ge", "Nuo", "Qi"];
const qZ = Object.freeze(IZ);
const UZ = ["Mou", "Ye", "Wei", void 0, "Teng", "Zou", "Shan", "Jian", "Bo", "Ku", "Huang", "Huo", "Ge", "Ying", "Mi", "Xiao", "Mi", "Xi", "Qiang", "Chen", "Nue", "Ti", "Su", "Bang", "Chi", "Qian", "Shi", "Jiang", "Yuan", "Xie", "Xue", "Tao", "Yao", "Yao", void 0, "Yu", "Biao", "Cong", "Qing", "Li", "Mo", "Mo", "Shang", "Zhe", "Miu", "Jian", "Ze", "Jie", "Lian", "Lou", "Can", "Ou", "Guan", "Xi", "Zhuo", "Ao", "Ao", "Jin", "Zhe", "Yi", "Hu", "Jiang", "Man", "Chao", "Han", "Hua", "Chan", "Xu", "Zeng", "Se", "Xi", "She", "Dui", "Zheng", "Nao", "Lan", "E", "Ying", "Jue", "Ji", "Zun", "Jiao", "Bo", "Hui", "Zhuan", "Mu", "Zen", "Zha", "Shi", "Qiao", "Tan", "Zen", "Pu", "Sheng", "Xuan", "Zao", "Tan", "Dang", "Sui", "Qian", "Ji", "Jiao", "Jing", "Lian", "Nou", "Yi", "Ai", "Zhan", "Pi", "Hui", "Hua", "Yi", "Yi", "Shan", "Rang", "Nou", "Qian", "Zhui", "Ta", "Hu", "Zhou", "Hao", "Ye", "Ying", "Jian", "Yu", "Jian", "Hui", "Du", "Zhe", "Xuan", "Zan", "Lei", "Shen", "Wei", "Chan", "Li", "Yi", "Bian", "Zhe", "Yan", "E", "Chou", "Wei", "Chou", "Yao", "Chan", "Rang", "Yin", "Lan", "Chen", "Huo", "Zhe", "Huan", "Zan", "Yi", "Dang", "Zhan", "Yan", "Du", "Yan", "Ji", "Ding", "Fu", "Ren", "Ji", "Jie", "Hong", "Tao", "Rang", "Shan", "Qi", "Tuo", "Xun", "Yi", "Xun", "Ji", "Ren", "Jiang", "Hui", "Ou", "Ju", "Ya", "Ne", "Xu", "E", "Lun", "Xiong", "Song", "Feng", "She", "Fang", "Jue", "Zheng", "Gu", "He", "Ping", "Zu", "Shi", "Xiong", "Zha", "Su", "Zhen", "Di", "Zou", "Ci", "Qu", "Zhao", "Bi", "Yi", "Yi", "Kuang", "Lei", "Shi", "Gua", "Shi", "Jie", "Hui", "Cheng", "Zhu", "Shen", "Hua", "Dan", "Gou", "Quan", "Gui", "Xun", "Yi", "Zheng", "Gai", "Xiang", "Cha", "Hun", "Xu", "Zhou", "Jie", "Wu", "Yu", "Qiao", "Wu", "Gao", "You", "Hui", "Kuang", "Shuo", "Song", "Ai", "Qing", "Zhu", "Zou", "Nuo", "Du", "Zhuo", "Fei", "Ke", "Wei"];
const VZ = Object.freeze(UZ);
const iS = ["Yu", "Shui", "Shen", "Diao", "Chan", "Liang", "Zhun", "Sui", "Tan", "Shen", "Yi", "Mou", "Chen", "Die", "Huang", "Jian", "Xie", "Nue", "Ye", "Wei", "E", "Yu", "Xuan", "Chan", "Zi", "An", "Yan", "Di", "Mi", "Pian", "Xu", "Mo", "Dang", "Su", "Xie", "Yao", "Bang", "Shi", "Qian", "Mi", "Jin", "Man", "Zhe", "Jian", "Miu", "Tan", "Zen", "Qiao", "Lan", "Pu", "Jue", "Yan", "Qian", "Zhan", "Chen", "Gu", "Qian", "Hong", "Xia", "Jue", "Hong", "Han", "Hong", "Xi", "Xi", "Huo", "Liao", "Han", "Du", "Long", "Dou", "Jiang", "Qi", "Shi", "Li", "Deng", "Wan", "Bi", "Shu", "Xian", "Feng", "Zhi", "Zhi", "Yan", "Yan", "Shi", "Chu", "Hui", "Tun", "Yi", "Tun", "Yi", "Jian", "Ba", "Hou", "E", "Cu", "Xiang", "Huan", "Jian", "Ken", "Gai", "Qu", "Fu", "Xi", "Bin", "Hao", "Yu", "Zhu", "Jia", void 0, "Xi", "Bo", "Wen", "Huan", "Bin", "Di", "Zong", "Fen", "Yi", "Zhi", "Bao", "Chai", "Han", "Pi", "Na", "Pi", "Gou", "Na", "You", "Diao", "Mo", "Si", "Xiu", "Huan", "Kun", "He", "He", "Mo", "Han", "Mao", "Li", "Ni", "Bi", "Yu", "Jia", "Tuan", "Mao", "Pi", "Xi", "E", "Ju", "Mo", "Chu", "Tan", "Huan", "Jue", "Bei", "Zhen", "Yuan", "Fu", "Cai", "Gong", "Te", "Yi", "Hang", "Wan", "Pin", "Huo", "Fan", "Tan", "Guan", "Ze", "Zhi", "Er", "Zhu", "Shi", "Bi", "Zi", "Er", "Gui", "Pian", "Bian", "Mai", "Dai", "Sheng", "Kuang", "Fei", "Tie", "Yi", "Chi", "Mao", "He", "Bi", "Lu", "Ren", "Hui", "Gai", "Pian", "Zi", "Jia", "Xu", "Zei", "Jiao", "Gai", "Zang", "Jian", "Ying", "Xun", "Zhen", "She", "Bin", "Bin", "Qiu", "She", "Chuan", "Zang", "Zhou", "Lai", "Zan", "Si", "Chen", "Shang", "Tian", "Pei", "Geng", "Xian", "Mai", "Jian", "Sui", "Fu", "Tan", "Cong", "Cong", "Zhi", "Ji", "Zhang", "Du", "Jin", "Xiong", "Shun", "Yun", "Bao", "Zai", "Lai", "Feng", "Cang", "Ji", "Sheng", "Ai", "Zhuan", "Fu", "Gou", "Sai", "Ze", "Liao"];
const oS = Object.freeze(iS);
const eS = ["Wei", "Bai", "Chen", "Zhuan", "Zhi", "Zhui", "Biao", "Yun", "Zeng", "Tan", "Zan", "Yan", void 0, "Shan", "Wan", "Ying", "Jin", "Gan", "Xian", "Zang", "Bi", "Du", "Shu", "Yan", void 0, "Xuan", "Long", "Gan", "Zang", "Bei", "Zhen", "Fu", "Yuan", "Gong", "Cai", "Ze", "Xian", "Bai", "Zhang", "Huo", "Zhi", "Fan", "Tan", "Pin", "Bian", "Gou", "Zhu", "Guan", "Er", "Jian", "Bi", "Shi", "Tie", "Gui", "Kuang", "Dai", "Mao", "Fei", "He", "Yi", "Zei", "Zhi", "Jia", "Hui", "Zi", "Ren", "Lu", "Zang", "Zi", "Gai", "Jin", "Qiu", "Zhen", "Lai", "She", "Fu", "Du", "Ji", "Shu", "Shang", "Si", "Bi", "Zhou", "Geng", "Pei", "Tan", "Lai", "Feng", "Zhui", "Fu", "Zhuan", "Sai", "Ze", "Yan", "Zan", "Yun", "Zeng", "Shan", "Ying", "Gan", "Chi", "Xi", "She", "Nan", "Xiong", "Xi", "Cheng", "He", "Cheng", "Zhe", "Xia", "Tang", "Zou", "Zou", "Li", "Jiu", "Fu", "Zhao", "Gan", "Qi", "Shan", "Qiong", "Qin", "Xian", "Ci", "Jue", "Qin", "Chi", "Ci", "Chen", "Chen", "Die", "Ju", "Chao", "Di", "Se", "Zhan", "Zhu", "Yue", "Qu", "Jie", "Chi", "Chu", "Gua", "Xue", "Ci", "Tiao", "Duo", "Lie", "Gan", "Suo", "Cu", "Xi", "Zhao", "Su", "Yin", "Ju", "Jian", "Que", "Tang", "Chuo", "Cui", "Lu", "Qu", "Dang", "Qiu", "Zi", "Ti", "Qu", "Chi", "Huang", "Qiao", "Qiao", "Yao", "Zao", "Ti", void 0, "Zan", "Zan", "Zu", "Pa", "Bao", "Ku", "Ke", "Dun", "Jue", "Fu", "Chen", "Jian", "Fang", "Zhi", "Sa", "Yue", "Pa", "Qi", "Yue", "Qiang", "Tuo", "Tai", "Yi", "Nian", "Ling", "Mei", "Ba", "Die", "Ku", "Tuo", "Jia", "Ci", "Pao", "Qia", "Zhu", "Ju", "Die", "Zhi", "Fu", "Pan", "Ju", "Shan", "Bo", "Ni", "Ju", "Li", "Gen", "Yi", "Ji", "Dai", "Xian", "Jiao", "Duo", "Zhu", "Zhuan", "Kua", "Zhuai", "Gui", "Qiong", "Kui", "Xiang", "Chi", "Lu", "Beng", "Zhi", "Jia", "Tiao", "Cai", "Jian", "Ta", "Qiao", "Bi", "Xian", "Duo", "Ji", "Ju", "Ji", "Shu", "Tu"];
const nS = Object.freeze(eS);
const aS = ["Chu", "Jing", "Nie", "Xiao", "Bo", "Chi", "Qun", "Mou", "Shu", "Lang", "Yong", "Jiao", "Chou", "Qiao", void 0, "Ta", "Jian", "Qi", "Wo", "Wei", "Zhuo", "Jie", "Ji", "Nie", "Ju", "Ju", "Lun", "Lu", "Leng", "Huai", "Ju", "Chi", "Wan", "Quan", "Ti", "Bo", "Zu", "Qie", "Ji", "Cu", "Zong", "Cai", "Zong", "Peng", "Zhi", "Zheng", "Dian", "Zhi", "Yu", "Duo", "Dun", "Chun", "Yong", "Zhong", "Di", "Zhe", "Chen", "Chuai", "Jian", "Gua", "Tang", "Ju", "Fu", "Zu", "Die", "Pian", "Rou", "Nuo", "Ti", "Cha", "Tui", "Jian", "Dao", "Cuo", "Xi", "Ta", "Qiang", "Zhan", "Dian", "Ti", "Ji", "Nie", "Man", "Liu", "Zhan", "Bi", "Chong", "Lu", "Liao", "Cu", "Tang", "Dai", "Suo", "Xi", "Kui", "Ji", "Zhi", "Qiang", "Di", "Man", "Zong", "Lian", "Beng", "Zao", "Nian", "Bie", "Tui", "Ju", "Deng", "Ceng", "Xian", "Fan", "Chu", "Zhong", "Dun", "Bo", "Cu", "Zu", "Jue", "Jue", "Lin", "Ta", "Qiao", "Qiao", "Pu", "Liao", "Dun", "Cuan", "Kuang", "Zao", "Ta", "Bi", "Bi", "Zhu", "Ju", "Chu", "Qiao", "Dun", "Chou", "Ji", "Wu", "Yue", "Nian", "Lin", "Lie", "Zhi", "Li", "Zhi", "Chan", "Chu", "Duan", "Wei", "Long", "Lin", "Xian", "Wei", "Zuan", "Lan", "Xie", "Rang", "Xie", "Nie", "Ta", "Qu", "Jie", "Cuan", "Zuan", "Xi", "Kui", "Jue", "Lin", "Shen", "Gong", "Dan", "Segare", "Qu", "Ti", "Duo", "Duo", "Gong", "Lang", "Nerau", "Luo", "Ai", "Ji", "Ju", "Tang", "Utsuke", void 0, "Yan", "Shitsuke", "Kang", "Qu", "Lou", "Lao", "Tuo", "Zhi", "Yagate", "Ti", "Dao", "Yagate", "Yu", "Che", "Ya", "Gui", "Jun", "Wei", "Yue", "Xin", "Di", "Xuan", "Fan", "Ren", "Shan", "Qiang", "Shu", "Tun", "Chen", "Dai", "E", "Na", "Qi", "Mao", "Ruan", "Ren", "Fan", "Zhuan", "Hong", "Hu", "Qu", "Huang", "Di", "Ling", "Dai", "Ao", "Zhen", "Fan", "Kuang", "Ang", "Peng", "Bei", "Gu", "Ku", "Pao", "Zhu", "Rong", "E", "Ba", "Zhou", "Zhi", "Yao", "Ke", "Yi", "Qing", "Shi", "Ping"];
const uS = Object.freeze(aS);
const tS = ["Er", "Qiong", "Ju", "Jiao", "Guang", "Lu", "Kai", "Quan", "Zhou", "Zai", "Zhi", "She", "Liang", "Yu", "Shao", "You", "Huan", "Yun", "Zhe", "Wan", "Fu", "Qing", "Zhou", "Ni", "Ling", "Zhe", "Zhan", "Liang", "Zi", "Hui", "Wang", "Chuo", "Guo", "Kan", "Yi", "Peng", "Qian", "Gun", "Nian", "Pian", "Guan", "Bei", "Lun", "Pai", "Liang", "Ruan", "Rou", "Ji", "Yang", "Xian", "Chuan", "Cou", "Qun", "Ge", "You", "Hong", "Shu", "Fu", "Zi", "Fu", "Wen", "Ben", "Zhan", "Yu", "Wen", "Tao", "Gu", "Zhen", "Xia", "Yuan", "Lu", "Jiu", "Chao", "Zhuan", "Wei", "Hun", "Sori", "Che", "Jiao", "Zhan", "Pu", "Lao", "Fen", "Fan", "Lin", "Ge", "Se", "Kan", "Huan", "Yi", "Ji", "Dui", "Er", "Yu", "Xian", "Hong", "Lei", "Pei", "Li", "Li", "Lu", "Lin", "Che", "Ya", "Gui", "Xuan", "Di", "Ren", "Zhuan", "E", "Lun", "Ruan", "Hong", "Ku", "Ke", "Lu", "Zhou", "Zhi", "Yi", "Hu", "Zhen", "Li", "Yao", "Qing", "Shi", "Zai", "Zhi", "Jiao", "Zhou", "Quan", "Lu", "Jiao", "Zhe", "Fu", "Liang", "Nian", "Bei", "Hui", "Gun", "Wang", "Liang", "Chuo", "Zi", "Cou", "Fu", "Ji", "Wen", "Shu", "Pei", "Yuan", "Xia", "Zhan", "Lu", "Che", "Lin", "Xin", "Gu", "Ci", "Ci", "Pi", "Zui", "Bian", "La", "La", "Ci", "Xue", "Ban", "Bian", "Bian", "Bian", void 0, "Bian", "Ban", "Ci", "Bian", "Bian", "Chen", "Ru", "Nong", "Nong", "Zhen", "Chuo", "Chuo", "Suberu", "Reng", "Bian", "Bian", "Sip", "Ip", "Liao", "Da", "Chan", "Gan", "Qian", "Yu", "Yu", "Qi", "Xun", "Yi", "Guo", "Mai", "Qi", "Za", "Wang", "Jia", "Zhun", "Ying", "Ti", "Yun", "Jin", "Hang", "Ya", "Fan", "Wu", "Da", "E", "Huan", "Zhe", "Totemo", "Jin", "Yuan", "Wei", "Lian", "Chi", "Che", "Ni", "Tiao", "Zhi", "Yi", "Jiong", "Jia", "Chen", "Dai", "Er", "Di", "Po", "Wang", "Die", "Ze", "Tao", "Shu", "Tuo", "Kep", "Jing", "Hui", "Tong", "You", "Mi", "Beng", "Ji", "Nai", "Yi", "Jie", "Zhui", "Lie", "Xun"];
const dS = Object.freeze(tS);
const gS = ["Tui", "Song", "Gua", "Tao", "Pang", "Hou", "Ni", "Dun", "Jiong", "Xuan", "Xun", "Bu", "You", "Xiao", "Qiu", "Tou", "Zhu", "Qiu", "Di", "Di", "Tu", "Jing", "Ti", "Dou", "Yi", "Zhe", "Tong", "Guang", "Wu", "Shi", "Cheng", "Su", "Zao", "Qun", "Feng", "Lian", "Suo", "Hui", "Li", "Sako", "Lai", "Ben", "Cuo", "Jue", "Beng", "Huan", "Dai", "Lu", "You", "Zhou", "Jin", "Yu", "Chuo", "Kui", "Wei", "Ti", "Yi", "Da", "Yuan", "Luo", "Bi", "Nuo", "Yu", "Dang", "Sui", "Dun", "Sui", "Yan", "Chuan", "Chi", "Ti", "Yu", "Shi", "Zhen", "You", "Yun", "E", "Bian", "Guo", "E", "Xia", "Huang", "Qiu", "Dao", "Da", "Wei", "Appare", "Yi", "Gou", "Yao", "Chu", "Liu", "Xun", "Ta", "Di", "Chi", "Yuan", "Su", "Ta", "Qian", void 0, "Yao", "Guan", "Zhang", "Ao", "Shi", "Ce", "Chi", "Su", "Zao", "Zhe", "Dun", "Di", "Lou", "Chi", "Cuo", "Lin", "Zun", "Rao", "Qian", "Xuan", "Yu", "Yi", "Wu", "Liao", "Ju", "Shi", "Bi", "Yao", "Mai", "Xie", "Sui", "Huan", "Zhan", "Teng", "Er", "Miao", "Bian", "Bian", "La", "Li", "Yuan", "Yao", "Luo", "Li", "Yi", "Ting", "Deng", "Qi", "Yong", "Shan", "Han", "Yu", "Mang", "Ru", "Qiong", void 0, "Kuang", "Fu", "Kang", "Bin", "Fang", "Xing", "Na", "Xin", "Shen", "Bang", "Yuan", "Cun", "Huo", "Xie", "Bang", "Wu", "Ju", "You", "Han", "Tai", "Qiu", "Bi", "Pei", "Bing", "Shao", "Bei", "Wa", "Di", "Zou", "Ye", "Lin", "Kuang", "Gui", "Zhu", "Shi", "Ku", "Yu", "Gai", "Ge", "Xi", "Zhi", "Ji", "Xun", "Hou", "Xing", "Jiao", "Xi", "Gui", "Nuo", "Lang", "Jia", "Kuai", "Zheng", "Otoko", "Yun", "Yan", "Cheng", "Dou", "Chi", "Lu", "Fu", "Wu", "Fu", "Gao", "Hao", "Lang", "Jia", "Geng", "Jun", "Ying", "Bo", "Xi", "Bei", "Li", "Yun", "Bu", "Xiao", "Qi", "Pi", "Qing", "Guo", "Zhou", "Tan", "Zou", "Ping", "Lai", "Ni", "Chen", "You", "Bu", "Xiang", "Dan", "Ju", "Yong", "Qiao", "Yi", "Du", "Yan", "Mei"];
const sS = Object.freeze(gS);
const hS = ["Ruo", "Bei", "E", "Yu", "Juan", "Yu", "Yun", "Hou", "Kui", "Xiang", "Xiang", "Sou", "Tang", "Ming", "Xi", "Ru", "Chu", "Zi", "Zou", "Ju", "Wu", "Xiang", "Yun", "Hao", "Yong", "Bi", "Mo", "Chao", "Fu", "Liao", "Yin", "Zhuan", "Hu", "Qiao", "Yan", "Zhang", "Fan", "Qiao", "Xu", "Deng", "Bi", "Xin", "Bi", "Ceng", "Wei", "Zheng", "Mao", "Shan", "Lin", "Po", "Dan", "Meng", "Ye", "Cao", "Kuai", "Feng", "Meng", "Zou", "Kuang", "Lian", "Zan", "Chan", "You", "Qi", "Yan", "Chan", "Zan", "Ling", "Huan", "Xi", "Feng", "Zan", "Li", "You", "Ding", "Qiu", "Zhuo", "Pei", "Zhou", "Yi", "Hang", "Yu", "Jiu", "Yan", "Zui", "Mao", "Dan", "Xu", "Tou", "Zhen", "Fen", "Sakenomoto", void 0, "Yun", "Tai", "Tian", "Qia", "Tuo", "Zuo", "Han", "Gu", "Su", "Po", "Chou", "Zai", "Ming", "Luo", "Chuo", "Chou", "You", "Tong", "Zhi", "Xian", "Jiang", "Cheng", "Yin", "Tu", "Xiao", "Mei", "Ku", "Suan", "Lei", "Pu", "Zui", "Hai", "Yan", "Xi", "Niang", "Wei", "Lu", "Lan", "Yan", "Tao", "Pei", "Zhan", "Chun", "Tan", "Zui", "Chuo", "Cu", "Kun", "Ti", "Mian", "Du", "Hu", "Xu", "Xing", "Tan", "Jiu", "Chun", "Yun", "Po", "Ke", "Sou", "Mi", "Quan", "Chou", "Cuo", "Yun", "Yong", "Ang", "Zha", "Hai", "Tang", "Jiang", "Piao", "Shan", "Yu", "Li", "Zao", "Lao", "Yi", "Jiang", "Pu", "Jiao", "Xi", "Tan", "Po", "Nong", "Yi", "Li", "Ju", "Jiao", "Yi", "Niang", "Ru", "Xun", "Chou", "Yan", "Ling", "Mi", "Mi", "Niang", "Xin", "Jiao", "Xi", "Mi", "Yan", "Bian", "Cai", "Shi", "You", "Shi", "Shi", "Li", "Chong", "Ye", "Liang", "Li", "Jin", "Jin", "Qiu", "Yi", "Diao", "Dao", "Zhao", "Ding", "Po", "Qiu", "He", "Fu", "Zhen", "Zhi", "Ba", "Luan", "Fu", "Nai", "Diao", "Shan", "Qiao", "Kou", "Chuan", "Zi", "Fan", "Yu", "Hua", "Han", "Gong", "Qi", "Mang", "Ri", "Di", "Si", "Xi", "Yi", "Chai", "Shi", "Tu", "Xi", "Nu", "Qian", "Ishiyumi", "Jian", "Pi", "Ye", "Yin"];
const rS = Object.freeze(hS);
const lS = ["Ba", "Fang", "Chen", "Xing", "Tou", "Yue", "Yan", "Fu", "Pi", "Na", "Xin", "E", "Jue", "Dun", "Gou", "Yin", "Qian", "Ban", "Ji", "Ren", "Chao", "Niu", "Fen", "Yun", "Ji", "Qin", "Pi", "Guo", "Hong", "Yin", "Jun", "Shi", "Yi", "Zhong", "Nie", "Gai", "Ri", "Huo", "Tai", "Kang", "Habaki", "Irori", "Ngaak", void 0, "Duo", "Zi", "Ni", "Tu", "Shi", "Min", "Gu", "E", "Ling", "Bing", "Yi", "Gu", "Ba", "Pi", "Yu", "Si", "Zuo", "Bu", "You", "Dian", "Jia", "Zhen", "Shi", "Shi", "Tie", "Ju", "Zhan", "Shi", "She", "Xuan", "Zhao", "Bao", "He", "Bi", "Sheng", "Chu", "Shi", "Bo", "Zhu", "Chi", "Za", "Po", "Tong", "Qian", "Fu", "Zhai", "Liu", "Qian", "Fu", "Li", "Yue", "Pi", "Yang", "Ban", "Bo", "Jie", "Gou", "Shu", "Zheng", "Mu", "Ni", "Nie", "Di", "Jia", "Mu", "Dan", "Shen", "Yi", "Si", "Kuang", "Ka", "Bei", "Jian", "Tong", "Xing", "Hong", "Jiao", "Chi", "Er", "Ge", "Bing", "Shi", "Mou", "Jia", "Yin", "Jun", "Zhou", "Chong", "Shang", "Tong", "Mo", "Lei", "Ji", "Yu", "Xu", "Ren", "Zun", "Zhi", "Qiong", "Shan", "Chi", "Xian", "Xing", "Quan", "Pi", "Tie", "Zhu", "Hou", "Ming", "Kua", "Yao", "Xian", "Xian", "Xiu", "Jun", "Cha", "Lao", "Ji", "Pi", "Ru", "Mi", "Yi", "Yin", "Guang", "An", "Diou", "You", "Se", "Kao", "Qian", "Luan", "Kasugai", "Ai", "Diao", "Han", "Rui", "Shi", "Keng", "Qiu", "Xiao", "Zhe", "Xiu", "Zang", "Ti", "Cuo", "Gua", "Gong", "Zhong", "Dou", "Lu", "Mei", "Lang", "Wan", "Xin", "Yun", "Bei", "Wu", "Su", "Yu", "Chan", "Ting", "Bo", "Han", "Jia", "Hong", "Cuan", "Feng", "Chan", "Wan", "Zhi", "Si", "Xuan", "Wu", "Wu", "Tiao", "Gong", "Zhuo", "Lue", "Xing", "Qian", "Shen", "Han", "Lue", "Xie", "Chu", "Zheng", "Ju", "Xian", "Tie", "Mang", "Pu", "Li", "Pan", "Rui", "Cheng", "Gao", "Li", "Te", "Pyeng", "Zhu", void 0, "Tu", "Liu", "Zui", "Ju", "Chang", "Yuan", "Jian", "Gang", "Diao", "Tao", "Chang"];
const vS = Object.freeze(lS);
const yS = ["Lun", "Kua", "Ling", "Bei", "Lu", "Li", "Qiang", "Pou", "Juan", "Min", "Zui", "Peng", "An", "Pi", "Xian", "Ya", "Zhui", "Lei", "A", "Kong", "Ta", "Kun", "Du", "Wei", "Chui", "Zi", "Zheng", "Ben", "Nie", "Cong", "Qun", "Tan", "Ding", "Qi", "Qian", "Zhuo", "Qi", "Yu", "Jin", "Guan", "Mao", "Chang", "Tian", "Xi", "Lian", "Tao", "Gu", "Cuo", "Shu", "Zhen", "Lu", "Meng", "Lu", "Hua", "Biao", "Ga", "Lai", "Ken", "Kazari", "Bu", "Nai", "Wan", "Zan", void 0, "De", "Xian", void 0, "Huo", "Liang", void 0, "Men", "Kai", "Ying", "Di", "Lian", "Guo", "Xian", "Du", "Tu", "Wei", "Cong", "Fu", "Rou", "Ji", "E", "Rou", "Chen", "Ti", "Zha", "Hong", "Yang", "Duan", "Xia", "Yu", "Keng", "Xing", "Huang", "Wei", "Fu", "Zhao", "Cha", "Qie", "She", "Hong", "Kui", "Tian", "Mou", "Qiao", "Qiao", "Hou", "Tou", "Cong", "Huan", "Ye", "Min", "Jian", "Duan", "Jian", "Song", "Kui", "Hu", "Xuan", "Duo", "Jie", "Zhen", "Bian", "Zhong", "Zi", "Xiu", "Ye", "Mei", "Pai", "Ai", "Jie", void 0, "Mei", "Chuo", "Ta", "Bang", "Xia", "Lian", "Suo", "Xi", "Liu", "Zu", "Ye", "Nou", "Weng", "Rong", "Tang", "Suo", "Qiang", "Ge", "Shuo", "Chui", "Bo", "Pan", "Sa", "Bi", "Sang", "Gang", "Zi", "Wu", "Ying", "Huang", "Tiao", "Liu", "Kai", "Sun", "Sha", "Sou", "Wan", "Hao", "Zhen", "Zhen", "Luo", "Yi", "Yuan", "Tang", "Nie", "Xi", "Jia", "Ge", "Ma", "Juan", "Kasugai", "Habaki", "Suo", void 0, void 0, void 0, "Na", "Lu", "Suo", "Ou", "Zu", "Tuan", "Xiu", "Guan", "Xuan", "Lian", "Shou", "Ao", "Man", "Mo", "Luo", "Bi", "Wei", "Liu", "Di", "Qiao", "Cong", "Yi", "Lu", "Ao", "Keng", "Qiang", "Cui", "Qi", "Chang", "Tang", "Man", "Yong", "Chan", "Feng", "Jing", "Biao", "Shu", "Lou", "Xiu", "Cong", "Long", "Zan", "Jian", "Cao", "Li", "Xia", "Xi", "Kang", void 0, "Beng", void 0, void 0, "Zheng", "Lu", "Hua", "Ji", "Pu", "Hui", "Qiang", "Po", "Lin", "Suo", "Xiu", "San", "Cheng"];
const cS = Object.freeze(yS);
const bS = ["Kui", "Si", "Liu", "Nao", "Heng", "Pie", "Sui", "Fan", "Qiao", "Quan", "Yang", "Tang", "Xiang", "Jue", "Jiao", "Zun", "Liao", "Jie", "Lao", "Dui", "Tan", "Zan", "Ji", "Jian", "Zhong", "Deng", "Ya", "Ying", "Dui", "Jue", "Nou", "Ti", "Pu", "Tie", void 0, void 0, "Ding", "Shan", "Kai", "Jian", "Fei", "Sui", "Lu", "Juan", "Hui", "Yu", "Lian", "Zhuo", "Qiao", "Qian", "Zhuo", "Lei", "Bi", "Tie", "Huan", "Ye", "Duo", "Guo", "Dang", "Ju", "Fen", "Da", "Bei", "Yi", "Ai", "Zong", "Xun", "Diao", "Zhu", "Heng", "Zhui", "Ji", "Nie", "Ta", "Huo", "Qing", "Bin", "Ying", "Kui", "Ning", "Xu", "Jian", "Jian", "Yari", "Cha", "Zhi", "Mie", "Li", "Lei", "Ji", "Zuan", "Kuang", "Shang", "Peng", "La", "Du", "Shuo", "Chuo", "Lu", "Biao", "Bao", "Lu", void 0, void 0, "Long", "E", "Lu", "Xin", "Jian", "Lan", "Bo", "Jian", "Yao", "Chan", "Xiang", "Jian", "Xi", "Guan", "Cang", "Nie", "Lei", "Cuan", "Qu", "Pan", "Luo", "Zuan", "Luan", "Zao", "Nie", "Jue", "Tang", "Shu", "Lan", "Jin", "Qiu", "Yi", "Zhen", "Ding", "Zhao", "Po", "Diao", "Tu", "Qian", "Chuan", "Shan", "Ji", "Fan", "Diao", "Men", "Nu", "Xi", "Chai", "Xing", "Gai", "Bu", "Tai", "Ju", "Dun", "Chao", "Zhong", "Na", "Bei", "Gang", "Ban", "Qian", "Yao", "Qin", "Jun", "Wu", "Gou", "Kang", "Fang", "Huo", "Tou", "Niu", "Ba", "Yu", "Qian", "Zheng", "Qian", "Gu", "Bo", "E", "Po", "Bu", "Ba", "Yue", "Zuan", "Mu", "Dan", "Jia", "Dian", "You", "Tie", "Bo", "Ling", "Shuo", "Qian", "Liu", "Bao", "Shi", "Xuan", "She", "Bi", "Ni", "Pi", "Duo", "Xing", "Kao", "Lao", "Er", "Mang", "Ya", "You", "Cheng", "Jia", "Ye", "Nao", "Zhi", "Dang", "Tong", "Lu", "Diao", "Yin", "Kai", "Zha", "Zhu", "Xian", "Ting", "Diu", "Xian", "Hua", "Quan", "Sha", "Jia", "Yao", "Ge", "Ming", "Zheng", "Se", "Jiao", "Yi", "Chan", "Chong", "Tang", "An", "Yin", "Ru", "Zhu", "Lao", "Pu", "Wu", "Lai", "Te", "Lian", "Keng"];
const pS = Object.freeze(bS);
const wS = ["Xiao", "Suo", "Li", "Zheng", "Chu", "Guo", "Gao", "Tie", "Xiu", "Cuo", "Lue", "Feng", "Xin", "Liu", "Kai", "Jian", "Rui", "Ti", "Lang", "Qian", "Ju", "A", "Qiang", "Duo", "Tian", "Cuo", "Mao", "Ben", "Qi", "De", "Kua", "Kun", "Chang", "Xi", "Gu", "Luo", "Chui", "Zhui", "Jin", "Zhi", "Xian", "Juan", "Huo", "Pou", "Tan", "Ding", "Jian", "Ju", "Meng", "Zi", "Qie", "Ying", "Kai", "Qiang", "Song", "E", "Cha", "Qiao", "Zhong", "Duan", "Sou", "Huang", "Huan", "Ai", "Du", "Mei", "Lou", "Zi", "Fei", "Mei", "Mo", "Zhen", "Bo", "Ge", "Nie", "Tang", "Juan", "Nie", "Na", "Liu", "Hao", "Bang", "Yi", "Jia", "Bin", "Rong", "Biao", "Tang", "Man", "Luo", "Beng", "Yong", "Jing", "Di", "Zu", "Xuan", "Liu", "Tan", "Jue", "Liao", "Pu", "Lu", "Dui", "Lan", "Pu", "Cuan", "Qiang", "Deng", "Huo", "Lei", "Huan", "Zhuo", "Lian", "Yi", "Cha", "Biao", "La", "Chan", "Xiang", "Chang", "Chang", "Jiu", "Ao", "Die", "Qu", "Liao", "Mi", "Chang", "Men", "Ma", "Shuan", "Shan", "Huo", "Men", "Yan", "Bi", "Han", "Bi", "San", "Kai", "Kang", "Beng", "Hong", "Run", "San", "Xian", "Xian", "Jian", "Min", "Xia", "Yuru", "Dou", "Zha", "Nao", "Jian", "Peng", "Xia", "Ling", "Bian", "Bi", "Run", "He", "Guan", "Ge", "Ge", "Fa", "Chu", "Hong", "Gui", "Min", "Se", "Kun", "Lang", "Lu", "Ting", "Sha", "Ju", "Yue", "Yue", "Chan", "Qu", "Lin", "Chang", "Shai", "Kun", "Yan", "Min", "Yan", "E", "Hun", "Yu", "Wen", "Xiang", "Bao", "Xiang", "Qu", "Yao", "Wen", "Ban", "An", "Wei", "Yin", "Kuo", "Que", "Lan", "Du", void 0, "Phwung", "Tian", "Nie", "Ta", "Kai", "He", "Que", "Chuang", "Guan", "Dou", "Qi", "Kui", "Tang", "Guan", "Piao", "Kan", "Xi", "Hui", "Chan", "Pi", "Dang", "Huan", "Ta", "Wen", void 0, "Men", "Shuan", "Shan", "Yan", "Han", "Bi", "Wen", "Chuang", "Run", "Wei", "Xian", "Hong", "Jian", "Min", "Kang", "Men", "Zha", "Nao", "Gui", "Wen", "Ta", "Min", "Lu", "Kai"];
const jS = Object.freeze(wS);
const fS = ["Fa", "Ge", "He", "Kun", "Jiu", "Yue", "Lang", "Du", "Yu", "Yan", "Chang", "Xi", "Wen", "Hun", "Yan", "E", "Chan", "Lan", "Qu", "Hui", "Kuo", "Que", "Ge", "Tian", "Ta", "Que", "Kan", "Huan", "Fu", "Fu", "Le", "Dui", "Xin", "Qian", "Wu", "Yi", "Tuo", "Yin", "Yang", "Dou", "E", "Sheng", "Ban", "Pei", "Keng", "Yun", "Ruan", "Zhi", "Pi", "Jing", "Fang", "Yang", "Yin", "Zhen", "Jie", "Cheng", "E", "Qu", "Di", "Zu", "Zuo", "Dian", "Ling", "A", "Tuo", "Tuo", "Po", "Bing", "Fu", "Ji", "Lu", "Long", "Chen", "Xing", "Duo", "Lou", "Mo", "Jiang", "Shu", "Duo", "Xian", "Er", "Gui", "Yu", "Gai", "Shan", "Xun", "Qiao", "Xing", "Chun", "Fu", "Bi", "Xia", "Shan", "Sheng", "Zhi", "Pu", "Dou", "Yuan", "Zhen", "Chu", "Xian", "Tou", "Nie", "Yun", "Xian", "Pei", "Pei", "Zou", "Yi", "Dui", "Lun", "Yin", "Ju", "Chui", "Chen", "Pi", "Ling", "Tao", "Xian", "Lu", "Sheng", "Xian", "Yin", "Zhu", "Yang", "Reng", "Shan", "Chong", "Yan", "Yin", "Yu", "Ti", "Yu", "Long", "Wei", "Wei", "Nie", "Dui", "Sui", "An", "Huang", "Jie", "Sui", "Yin", "Gai", "Yan", "Hui", "Ge", "Yun", "Wu", "Wei", "Ai", "Xi", "Tang", "Ji", "Zhang", "Dao", "Ao", "Xi", "Yin", void 0, "Rao", "Lin", "Tui", "Deng", "Pi", "Sui", "Sui", "Yu", "Xian", "Fen", "Ni", "Er", "Ji", "Dao", "Xi", "Yin", "E", "Hui", "Long", "Xi", "Li", "Li", "Li", "Zhui", "He", "Zhi", "Zhun", "Jun", "Nan", "Yi", "Que", "Yan", "Qian", "Ya", "Xiong", "Ya", "Ji", "Gu", "Huan", "Zhi", "Gou", "Jun", "Ci", "Yong", "Ju", "Chu", "Hu", "Za", "Luo", "Yu", "Chou", "Diao", "Sui", "Han", "Huo", "Shuang", "Guan", "Chu", "Za", "Yong", "Ji", "Xi", "Chou", "Liu", "Li", "Nan", "Xue", "Za", "Ji", "Ji", "Yu", "Yu", "Xue", "Na", "Fou", "Se", "Mu", "Wen", "Fen", "Pang", "Yun", "Li", "Li", "Ang", "Ling", "Lei", "An", "Bao", "Meng", "Dian", "Dang", "Xing", "Wu", "Zhao"];
const mS = Object.freeze(fS);
const YS = ["Xu", "Ji", "Mu", "Chen", "Xiao", "Zha", "Ting", "Zhen", "Pei", "Mei", "Ling", "Qi", "Chou", "Huo", "Sha", "Fei", "Weng", "Zhan", "Yin", "Ni", "Chou", "Tun", "Lin", void 0, "Dong", "Ying", "Wu", "Ling", "Shuang", "Ling", "Xia", "Hong", "Yin", "Mo", "Mai", "Yun", "Liu", "Meng", "Bin", "Wu", "Wei", "Huo", "Yin", "Xi", "Yi", "Ai", "Dan", "Deng", "Xian", "Yu", "Lu", "Long", "Dai", "Ji", "Pang", "Yang", "Ba", "Pi", "Wei", void 0, "Xi", "Ji", "Mai", "Meng", "Meng", "Lei", "Li", "Huo", "Ai", "Fei", "Dai", "Long", "Ling", "Ai", "Feng", "Li", "Bao", void 0, "He", "He", "Bing", "Qing", "Qing", "Jing", "Tian", "Zhen", "Jing", "Cheng", "Qing", "Jing", "Jing", "Dian", "Jing", "Tian", "Fei", "Fei", "Kao", "Mi", "Mian", "Mian", "Pao", "Ye", "Tian", "Hui", "Ye", "Ge", "Ding", "Cha", "Jian", "Ren", "Di", "Du", "Wu", "Ren", "Qin", "Jin", "Xue", "Niu", "Ba", "Yin", "Sa", "Na", "Mo", "Zu", "Da", "Ban", "Yi", "Yao", "Tao", "Tuo", "Jia", "Hong", "Pao", "Yang", "Tomo", "Yin", "Jia", "Tao", "Ji", "Xie", "An", "An", "Hen", "Gong", "Kohaze", "Da", "Qiao", "Ting", "Wan", "Ying", "Sui", "Tiao", "Qiao", "Xuan", "Kong", "Beng", "Ta", "Zhang", "Bing", "Kuo", "Ju", "La", "Xie", "Rou", "Bang", "Yi", "Qiu", "Qiu", "He", "Xiao", "Mu", "Ju", "Jian", "Bian", "Di", "Jian", "On", "Tao", "Gou", "Ta", "Bei", "Xie", "Pan", "Ge", "Bi", "Kuo", "Tang", "Lou", "Gui", "Qiao", "Xue", "Ji", "Jian", "Jiang", "Chan", "Da", "Huo", "Xian", "Qian", "Du", "Wa", "Jian", "Lan", "Wei", "Ren", "Fu", "Mei", "Juan", "Ge", "Wei", "Qiao", "Han", "Chang", void 0, "Rou", "Xun", "She", "Wei", "Ge", "Bei", "Tao", "Gou", "Yun", void 0, "Bi", "Wei", "Hui", "Du", "Wa", "Du", "Wei", "Ren", "Fu", "Han", "Wei", "Yun", "Tao", "Jiu", "Jiu", "Xian", "Xie", "Xian", "Ji", "Yin", "Za", "Yun", "Shao", "Le", "Peng", "Heng", "Ying", "Yun", "Peng", "Yin", "Yin", "Xiang"];
const kS = Object.freeze(YS);
const LS = ["Hu", "Ye", "Ding", "Qing", "Pan", "Xiang", "Shun", "Han", "Xu", "Yi", "Xu", "Gu", "Song", "Kui", "Qi", "Hang", "Yu", "Wan", "Ban", "Dun", "Di", "Dan", "Pan", "Po", "Ling", "Ce", "Jing", "Lei", "He", "Qiao", "E", "E", "Wei", "Jie", "Gua", "Shen", "Yi", "Shen", "Hai", "Dui", "Pian", "Ping", "Lei", "Fu", "Jia", "Tou", "Hui", "Kui", "Jia", "Le", "Tian", "Cheng", "Ying", "Jun", "Hu", "Han", "Jing", "Tui", "Tui", "Pin", "Lai", "Tui", "Zi", "Zi", "Chui", "Ding", "Lai", "Yan", "Han", "Jian", "Ke", "Cui", "Jiong", "Qin", "Yi", "Sai", "Ti", "E", "E", "Yan", "Hun", "Kan", "Yong", "Zhuan", "Yan", "Xian", "Xin", "Yi", "Yuan", "Sang", "Dian", "Dian", "Jiang", "Ku", "Lei", "Liao", "Piao", "Yi", "Man", "Qi", "Rao", "Hao", "Qiao", "Gu", "Xun", "Qian", "Hui", "Zhan", "Ru", "Hong", "Bin", "Xian", "Pin", "Lu", "Lan", "Nie", "Quan", "Ye", "Ding", "Qing", "Han", "Xiang", "Shun", "Xu", "Xu", "Wan", "Gu", "Dun", "Qi", "Ban", "Song", "Hang", "Yu", "Lu", "Ling", "Po", "Jing", "Jie", "Jia", "Tian", "Han", "Ying", "Jiong", "Hai", "Yi", "Pin", "Hui", "Tui", "Han", "Ying", "Ying", "Ke", "Ti", "Yong", "E", "Zhuan", "Yan", "E", "Nie", "Man", "Dian", "Sang", "Hao", "Lei", "Zhan", "Ru", "Pin", "Quan", "Feng", "Biao", "Oroshi", "Fu", "Xia", "Zhan", "Biao", "Sa", "Ba", "Tai", "Lie", "Gua", "Xuan", "Shao", "Ju", "Bi", "Si", "Wei", "Yang", "Yao", "Sou", "Kai", "Sao", "Fan", "Liu", "Xi", "Liao", "Piao", "Piao", "Liu", "Biao", "Biao", "Biao", "Liao", void 0, "Se", "Feng", "Biao", "Feng", "Yang", "Zhan", "Biao", "Sa", "Ju", "Si", "Sou", "Yao", "Liu", "Piao", "Biao", "Biao", "Fei", "Fan", "Fei", "Fei", "Shi", "Shi", "Can", "Ji", "Ding", "Si", "Tuo", "Zhan", "Sun", "Xiang", "Tun", "Ren", "Yu", "Juan", "Chi", "Yin", "Fan", "Fan", "Sun", "Yin", "Zhu", "Yi", "Zhai", "Bi", "Jie", "Tao", "Liu", "Ci", "Tie", "Si", "Bao", "Shi", "Duo"];
const ZS = Object.freeze(LS);
const SS = ["Hai", "Ren", "Tian", "Jiao", "Jia", "Bing", "Yao", "Tong", "Ci", "Xiang", "Yang", "Yang", "Er", "Yan", "Le", "Yi", "Can", "Bo", "Nei", "E", "Bu", "Jun", "Dou", "Su", "Yu", "Shi", "Yao", "Hun", "Guo", "Shi", "Jian", "Zhui", "Bing", "Xian", "Bu", "Ye", "Tan", "Fei", "Zhang", "Wei", "Guan", "E", "Nuan", "Hun", "Hu", "Huang", "Tie", "Hui", "Jian", "Hou", "He", "Xing", "Fen", "Wei", "Gu", "Cha", "Song", "Tang", "Bo", "Gao", "Xi", "Kui", "Liu", "Sou", "Tao", "Ye", "Yun", "Mo", "Tang", "Man", "Bi", "Yu", "Xiu", "Jin", "San", "Kui", "Zhuan", "Shan", "Chi", "Dan", "Yi", "Ji", "Rao", "Cheng", "Yong", "Tao", "Hui", "Xiang", "Zhan", "Fen", "Hai", "Meng", "Yan", "Mo", "Chan", "Xiang", "Luo", "Zuan", "Nang", "Shi", "Ding", "Ji", "Tuo", "Xing", "Tun", "Xi", "Ren", "Yu", "Chi", "Fan", "Yin", "Jian", "Shi", "Bao", "Si", "Duo", "Yi", "Er", "Rao", "Xiang", "Jia", "Le", "Jiao", "Yi", "Bing", "Bo", "Dou", "E", "Yu", "Nei", "Jun", "Guo", "Hun", "Xian", "Guan", "Cha", "Kui", "Gu", "Sou", "Chan", "Ye", "Mo", "Bo", "Liu", "Xiu", "Jin", "Man", "San", "Zhuan", "Nang", "Shou", "Kui", "Guo", "Xiang", "Fen", "Ba", "Ni", "Bi", "Bo", "Tu", "Han", "Fei", "Jian", "An", "Ai", "Fu", "Xian", "Wen", "Xin", "Fen", "Bin", "Xing", "Ma", "Yu", "Feng", "Han", "Di", "Tuo", "Tuo", "Chi", "Xun", "Zhu", "Zhi", "Pei", "Xin", "Ri", "Sa", "Yin", "Wen", "Zhi", "Dan", "Lu", "You", "Bo", "Bao", "Kuai", "Tuo", "Yi", "Qu", void 0, "Qu", "Jiong", "Bo", "Zhao", "Yuan", "Peng", "Zhou", "Ju", "Zhu", "Nu", "Ju", "Pi", "Zang", "Jia", "Ling", "Zhen", "Tai", "Fu", "Yang", "Shi", "Bi", "Tuo", "Tuo", "Si", "Liu", "Ma", "Pian", "Tao", "Zhi", "Rong", "Teng", "Dong", "Xun", "Quan", "Shen", "Jiong", "Er", "Hai", "Bo", "Zhu", "Yin", "Luo", "Shuu", "Dan", "Xie", "Liu", "Ju", "Song", "Qin", "Mang", "Liang", "Han", "Tu", "Xuan", "Tui", "Jun"];
const JS = Object.freeze(SS);
const CS = ["E", "Cheng", "Xin", "Ai", "Lu", "Zhui", "Zhou", "She", "Pian", "Kun", "Tao", "Lai", "Zong", "Ke", "Qi", "Qi", "Yan", "Fei", "Sao", "Yan", "Jie", "Yao", "Wu", "Pian", "Cong", "Pian", "Qian", "Fei", "Huang", "Jian", "Huo", "Yu", "Ti", "Quan", "Xia", "Zong", "Kui", "Rou", "Si", "Gua", "Tuo", "Kui", "Sou", "Qian", "Cheng", "Zhi", "Liu", "Pang", "Teng", "Xi", "Cao", "Du", "Yan", "Yuan", "Zou", "Sao", "Shan", "Li", "Zhi", "Shuang", "Lu", "Xi", "Luo", "Zhang", "Mo", "Ao", "Can", "Piao", "Cong", "Qu", "Bi", "Zhi", "Yu", "Xu", "Hua", "Bo", "Su", "Xiao", "Lin", "Chan", "Dun", "Liu", "Tuo", "Zeng", "Tan", "Jiao", "Tie", "Yan", "Luo", "Zhan", "Jing", "Yi", "Ye", "Tuo", "Bin", "Zou", "Yan", "Peng", "Lu", "Teng", "Xiang", "Ji", "Shuang", "Ju", "Xi", "Huan", "Li", "Biao", "Ma", "Yu", "Tuo", "Xun", "Chi", "Qu", "Ri", "Bo", "Lu", "Zang", "Shi", "Si", "Fu", "Ju", "Zou", "Zhu", "Tuo", "Nu", "Jia", "Yi", "Tai", "Xiao", "Ma", "Yin", "Jiao", "Hua", "Luo", "Hai", "Pian", "Biao", "Li", "Cheng", "Yan", "Xin", "Qin", "Jun", "Qi", "Qi", "Ke", "Zhui", "Zong", "Su", "Can", "Pian", "Zhi", "Kui", "Sao", "Wu", "Ao", "Liu", "Qian", "Shan", "Piao", "Luo", "Cong", "Chan", "Zou", "Ji", "Shuang", "Xiang", "Gu", "Wei", "Wei", "Wei", "Yu", "Gan", "Yi", "Ang", "Tou", "Xie", "Bao", "Bi", "Chi", "Ti", "Di", "Ku", "Hai", "Qiao", "Gou", "Kua", "Ge", "Tui", "Geng", "Pian", "Bi", "Ke", "Ka", "Yu", "Sui", "Lou", "Bo", "Xiao", "Pang", "Bo", "Ci", "Kuan", "Bin", "Mo", "Liao", "Lou", "Nao", "Du", "Zang", "Sui", "Ti", "Bin", "Kuan", "Lu", "Gao", "Gao", "Qiao", "Kao", "Qiao", "Lao", "Zao", "Biao", "Kun", "Kun", "Ti", "Fang", "Xiu", "Ran", "Mao", "Dan", "Kun", "Bin", "Fa", "Tiao", "Peng", "Zi", "Fa", "Ran", "Ti", "Pao", "Pi", "Mao", "Fu", "Er", "Rong", "Qu", "Gong", "Xiu", "Gua", "Ji", "Peng", "Zhua", "Shao", "Sha"];
const XS = Object.freeze(CS);
const HS = ["Ti", "Li", "Bin", "Zong", "Ti", "Peng", "Song", "Zheng", "Quan", "Zong", "Shun", "Jian", "Duo", "Hu", "La", "Jiu", "Qi", "Lian", "Zhen", "Bin", "Peng", "Mo", "San", "Man", "Man", "Seng", "Xu", "Lie", "Qian", "Qian", "Nong", "Huan", "Kuai", "Ning", "Bin", "Lie", "Rang", "Dou", "Dou", "Nao", "Hong", "Xi", "Dou", "Han", "Dou", "Dou", "Jiu", "Chang", "Yu", "Yu", "Li", "Juan", "Fu", "Qian", "Gui", "Zong", "Liu", "Gui", "Shang", "Yu", "Gui", "Mei", "Ji", "Qi", "Jie", "Kui", "Hun", "Ba", "Po", "Mei", "Xu", "Yan", "Xiao", "Liang", "Yu", "Tui", "Qi", "Wang", "Liang", "Wei", "Jian", "Chi", "Piao", "Bi", "Mo", "Ji", "Xu", "Chou", "Yan", "Zhan", "Yu", "Dao", "Ren", "Ji", "Eri", "Gong", "Tuo", "Diao", "Ji", "Xu", "E", "E", "Sha", "Hang", "Tun", "Mo", "Jie", "Shen", "Fan", "Yuan", "Bi", "Lu", "Wen", "Hu", "Lu", "Za", "Fang", "Fen", "Na", "You", "Namazu", "Todo", "He", "Xia", "Qu", "Han", "Pi", "Ling", "Tuo", "Bo", "Qiu", "Ping", "Fu", "Bi", "Ji", "Wei", "Ju", "Diao", "Bo", "You", "Gun", "Pi", "Nian", "Xing", "Tai", "Bao", "Fu", "Zha", "Ju", "Gu", "Kajika", "Tong", void 0, "Ta", "Jie", "Shu", "Hou", "Xiang", "Er", "An", "Wei", "Tiao", "Zhu", "Yin", "Lie", "Luo", "Tong", "Yi", "Qi", "Bing", "Wei", "Jiao", "Bu", "Gui", "Xian", "Ge", "Hui", "Bora", "Mate", "Kao", "Gori", "Duo", "Jun", "Ti", "Man", "Xiao", "Za", "Sha", "Qin", "Yu", "Nei", "Zhe", "Gun", "Geng", "Su", "Wu", "Qiu", "Ting", "Fu", "Wan", "You", "Li", "Sha", "Sha", "Gao", "Meng", "Ugui", "Asari", "Subashiri", "Kazunoko", "Yong", "Ni", "Zi", "Qi", "Qing", "Xiang", "Nei", "Chun", "Ji", "Diao", "Qie", "Gu", "Zhou", "Dong", "Lai", "Fei", "Ni", "Yi", "Kun", "Lu", "Jiu", "Chang", "Jing", "Lun", "Ling", "Zou", "Li", "Meng", "Zong", "Zhi", "Nian", "Shachi", "Dojou", "Sukesou", "Shi", "Shen", "Hun", "Shi", "Hou", "Xing", "Zhu", "La", "Zong", "Ji", "Bian", "Bian"];
const BS = Object.freeze(HS);
const TS = ["Huan", "Quan", "Ze", "Wei", "Wei", "Yu", "Qun", "Rou", "Die", "Huang", "Lian", "Yan", "Qiu", "Qiu", "Jian", "Bi", "E", "Yang", "Fu", "Sai", "Jian", "Xia", "Tuo", "Hu", "Muroaji", "Ruo", "Haraka", "Wen", "Jian", "Hao", "Wu", "Fang", "Sao", "Liu", "Ma", "Shi", "Shi", "Yin", "Z", "Teng", "Ta", "Yao", "Ge", "Rong", "Qian", "Qi", "Wen", "Ruo", "Hatahata", "Lian", "Ao", "Le", "Hui", "Min", "Ji", "Tiao", "Qu", "Jian", "Sao", "Man", "Xi", "Qiu", "Biao", "Ji", "Ji", "Zhu", "Jiang", "Qiu", "Zhuan", "Yong", "Zhang", "Kang", "Xue", "Bie", "Jue", "Qu", "Xiang", "Bo", "Jiao", "Xun", "Su", "Huang", "Zun", "Shan", "Shan", "Fan", "Jue", "Lin", "Xun", "Miao", "Xi", "Eso", "Kyou", "Fen", "Guan", "Hou", "Kuai", "Zei", "Sao", "Zhan", "Gan", "Gui", "Sheng", "Li", "Chang", "Hatahata", "Shiira", "Mutsu", "Ru", "Ji", "Xu", "Huo", "Shiira", "Li", "Lie", "Li", "Mie", "Zhen", "Xiang", "E", "Lu", "Guan", "Li", "Xian", "Yu", "Dao", "Ji", "You", "Tun", "Lu", "Fang", "Ba", "He", "Bo", "Ping", "Nian", "Lu", "You", "Zha", "Fu", "Bo", "Bao", "Hou", "Pi", "Tai", "Gui", "Jie", "Kao", "Wei", "Er", "Tong", "Ze", "Hou", "Kuai", "Ji", "Jiao", "Xian", "Za", "Xiang", "Xun", "Geng", "Li", "Lian", "Jian", "Li", "Shi", "Tiao", "Gun", "Sha", "Wan", "Jun", "Ji", "Yong", "Qing", "Ling", "Qi", "Zou", "Fei", "Kun", "Chang", "Gu", "Ni", "Nian", "Diao", "Jing", "Shen", "Shi", "Zi", "Fen", "Die", "Bi", "Chang", "Shi", "Wen", "Wei", "Sai", "E", "Qiu", "Fu", "Huang", "Quan", "Jiang", "Bian", "Sao", "Ao", "Qi", "Ta", "Yin", "Yao", "Fang", "Jian", "Le", "Biao", "Xue", "Bie", "Man", "Min", "Yong", "Wei", "Xi", "Jue", "Shan", "Lin", "Zun", "Huo", "Gan", "Li", "Zhan", "Guan", "Niao", "Yi", "Fu", "Li", "Jiu", "Bu", "Yan", "Fu", "Diao", "Ji", "Feng", "Nio", "Gan", "Shi", "Feng", "Ming", "Bao", "Yuan", "Zhi", "Hu", "Qin", "Fu", "Fen", "Wen", "Jian", "Shi", "Yu"];
const DS = Object.freeze(TS);
const MS = ["Fou", "Yiao", "Jue", "Jue", "Pi", "Huan", "Zhen", "Bao", "Yan", "Ya", "Zheng", "Fang", "Feng", "Wen", "Ou", "Te", "Jia", "Nu", "Ling", "Mie", "Fu", "Tuo", "Wen", "Li", "Bian", "Zhi", "Ge", "Yuan", "Zi", "Qu", "Xiao", "Zhi", "Dan", "Ju", "You", "Gu", "Zhong", "Yu", "Yang", "Rong", "Ya", "Tie", "Yu", "Shigi", "Ying", "Zhui", "Wu", "Er", "Gua", "Ai", "Zhi", "Yan", "Heng", "Jiao", "Ji", "Lie", "Zhu", "Ren", "Yi", "Hong", "Luo", "Ru", "Mou", "Ge", "Ren", "Jiao", "Xiu", "Zhou", "Zhi", "Luo", "Chidori", "Toki", "Ten", "Luan", "Jia", "Ji", "Yu", "Huan", "Tuo", "Bu", "Wu", "Juan", "Yu", "Bo", "Xun", "Xun", "Bi", "Xi", "Jun", "Ju", "Tu", "Jing", "Ti", "E", "E", "Kuang", "Hu", "Wu", "Shen", "Lai", "Ikaruga", "Kakesu", "Lu", "Ping", "Shu", "Fu", "An", "Zhao", "Peng", "Qin", "Qian", "Bei", "Diao", "Lu", "Que", "Jian", "Ju", "Tu", "Ya", "Yuan", "Qi", "Li", "Ye", "Zhui", "Kong", "Zhui", "Kun", "Sheng", "Qi", "Jing", "Yi", "Yi", "Jing", "Zi", "Lai", "Dong", "Qi", "Chun", "Geng", "Ju", "Qu", "Isuka", "Kikuitadaki", "Ji", "Shu", void 0, "Chi", "Miao", "Rou", "An", "Qiu", "Ti", "Hu", "Ti", "E", "Jie", "Mao", "Fu", "Chun", "Tu", "Yan", "He", "Yuan", "Pian", "Yun", "Mei", "Hu", "Ying", "Dun", "Mu", "Ju", "Tsugumi", "Cang", "Fang", "Gu", "Ying", "Yuan", "Xuan", "Weng", "Shi", "He", "Chu", "Tang", "Xia", "Ruo", "Liu", "Ji", "Gu", "Jian", "Zhun", "Han", "Zi", "Zi", "Ni", "Yao", "Yan", "Ji", "Li", "Tian", "Kou", "Ti", "Ti", "Ni", "Tu", "Ma", "Jiao", "Gao", "Tian", "Chen", "Li", "Zhuan", "Zhe", "Ao", "Yao", "Yi", "Ou", "Chi", "Zhi", "Liao", "Rong", "Lou", "Bi", "Shuang", "Zhuo", "Yu", "Wu", "Jue", "Yin", "Quan", "Si", "Jiao", "Yi", "Hua", "Bi", "Ying", "Su", "Huang", "Fan", "Jiao", "Liao", "Yan", "Kao", "Jiu", "Xian", "Xian", "Tu", "Mai", "Zun", "Yu", "Ying", "Lu", "Tuan", "Xian", "Xue", "Yi", "Pi"];
const QS = Object.freeze(MS);
const xS = ["Shu", "Luo", "Qi", "Yi", "Ji", "Zhe", "Yu", "Zhan", "Ye", "Yang", "Pi", "Ning", "Huo", "Mi", "Ying", "Meng", "Di", "Yue", "Yu", "Lei", "Bao", "Lu", "He", "Long", "Shuang", "Yue", "Ying", "Guan", "Qu", "Li", "Luan", "Niao", "Jiu", "Ji", "Yuan", "Ming", "Shi", "Ou", "Ya", "Cang", "Bao", "Zhen", "Gu", "Dong", "Lu", "Ya", "Xiao", "Yang", "Ling", "Zhi", "Qu", "Yuan", "Xue", "Tuo", "Si", "Zhi", "Er", "Gua", "Xiu", "Heng", "Zhou", "Ge", "Luan", "Hong", "Wu", "Bo", "Li", "Juan", "Hu", "E", "Yu", "Xian", "Ti", "Wu", "Que", "Miao", "An", "Kun", "Bei", "Peng", "Qian", "Chun", "Geng", "Yuan", "Su", "Hu", "He", "E", "Gu", "Qiu", "Zi", "Mei", "Mu", "Ni", "Yao", "Weng", "Liu", "Ji", "Ni", "Jian", "He", "Yi", "Ying", "Zhe", "Liao", "Liao", "Jiao", "Jiu", "Yu", "Lu", "Xuan", "Zhan", "Ying", "Huo", "Meng", "Guan", "Shuang", "Lu", "Jin", "Ling", "Jian", "Xian", "Cuo", "Jian", "Jian", "Yan", "Cuo", "Lu", "You", "Cu", "Ji", "Biao", "Cu", "Biao", "Zhu", "Jun", "Zhu", "Jian", "Mi", "Mi", "Wu", "Liu", "Chen", "Jun", "Lin", "Ni", "Qi", "Lu", "Jiu", "Jun", "Jing", "Li", "Xiang", "Yan", "Jia", "Mi", "Li", "She", "Zhang", "Lin", "Jing", "Ji", "Ling", "Yan", "Cu", "Mai", "Mai", "Ge", "Chao", "Fu", "Mian", "Mian", "Fu", "Pao", "Qu", "Qu", "Mou", "Fu", "Xian", "Lai", "Qu", "Mian", void 0, "Feng", "Fu", "Qu", "Mian", "Ma", "Mo", "Mo", "Hui", "Ma", "Zou", "Nen", "Fen", "Huang", "Huang", "Jin", "Guang", "Tian", "Tou", "Heng", "Xi", "Kuang", "Heng", "Shu", "Li", "Nian", "Chi", "Hei", "Hei", "Yi", "Qian", "Dan", "Xi", "Tuan", "Mo", "Mo", "Qian", "Dai", "Chu", "You", "Dian", "Yi", "Xia", "Yan", "Qu", "Mei", "Yan", "Jing", "Yu", "Li", "Dang", "Du", "Can", "Yin", "An", "Yan", "Tan", "An", "Zhen", "Dai", "Can", "Yi", "Mei", "Dan", "Yan", "Du", "Lu", "Zhi", "Fen", "Fu", "Fu", "Min", "Min", "Yuan"];
const GS = Object.freeze(xS);
const WS = ["Cu", "Qu", "Chao", "Wa", "Zhu", "Zhi", "Mang", "Ao", "Bie", "Tuo", "Bi", "Yuan", "Chao", "Tuo", "Ding", "Mi", "Nai", "Ding", "Zi", "Gu", "Gu", "Dong", "Fen", "Tao", "Yuan", "Pi", "Chang", "Gao", "Qi", "Yuan", "Tang", "Teng", "Shu", "Shu", "Fen", "Fei", "Wen", "Ba", "Diao", "Tuo", "Tong", "Qu", "Sheng", "Shi", "You", "Shi", "Ting", "Wu", "Nian", "Jing", "Hun", "Ju", "Yan", "Tu", "Ti", "Xi", "Xian", "Yan", "Lei", "Bi", "Yao", "Qiu", "Han", "Wu", "Wu", "Hou", "Xi", "Ge", "Zha", "Xiu", "Weng", "Zha", "Nong", "Nang", "Qi", "Zhai", "Ji", "Zi", "Ji", "Ji", "Qi", "Ji", "Chi", "Chen", "Chen", "He", "Ya", "Ken", "Xie", "Pao", "Cuo", "Shi", "Zi", "Chi", "Nian", "Ju", "Tiao", "Ling", "Ling", "Chu", "Quan", "Xie", "Ken", "Nie", "Jiu", "Yao", "Chuo", "Kun", "Yu", "Chu", "Yi", "Ni", "Cuo", "Zou", "Qu", "Nen", "Xian", "Ou", "E", "Wo", "Yi", "Chuo", "Zou", "Dian", "Chu", "Jin", "Ya", "Chi", "Chen", "He", "Ken", "Ju", "Ling", "Pao", "Tiao", "Zi", "Ken", "Yu", "Chuo", "Qu", "Wo", "Long", "Pang", "Gong", "Pang", "Yan", "Long", "Long", "Gong", "Kan", "Ta", "Ling", "Ta", "Long", "Gong", "Kan", "Gui", "Qiu", "Bie", "Gui", "Yue", "Chui", "He", "Jue", "Xie", "Yu", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const NS = Object.freeze(WS);
const PS = ["it", "ix", "i", "ip", "iet", "iex", "ie", "iep", "at", "ax", "a", "ap", "uox", "uo", "uop", "ot", "ox", "o", "op", "ex", "e", "wu", "bit", "bix", "bi", "bip", "biet", "biex", "bie", "biep", "bat", "bax", "ba", "bap", "buox", "buo", "buop", "bot", "box", "bo", "bop", "bex", "be", "bep", "but", "bux", "bu", "bup", "burx", "bur", "byt", "byx", "by", "byp", "byrx", "byr", "pit", "pix", "pi", "pip", "piex", "pie", "piep", "pat", "pax", "pa", "pap", "puox", "puo", "puop", "pot", "pox", "po", "pop", "put", "pux", "pu", "pup", "purx", "pur", "pyt", "pyx", "py", "pyp", "pyrx", "pyr", "bbit", "bbix", "bbi", "bbip", "bbiet", "bbiex", "bbie", "bbiep", "bbat", "bbax", "bba", "bbap", "bbuox", "bbuo", "bbuop", "bbot", "bbox", "bbo", "bbop", "bbex", "bbe", "bbep", "bbut", "bbux", "bbu", "bbup", "bburx", "bbur", "bbyt", "bbyx", "bby", "bbyp", "nbit", "nbix", "nbi", "nbip", "nbiex", "nbie", "nbiep", "nbat", "nbax", "nba", "nbap", "nbot", "nbox", "nbo", "nbop", "nbut", "nbux", "nbu", "nbup", "nburx", "nbur", "nbyt", "nbyx", "nby", "nbyp", "nbyrx", "nbyr", "hmit", "hmix", "hmi", "hmip", "hmiex", "hmie", "hmiep", "hmat", "hmax", "hma", "hmap", "hmuox", "hmuo", "hmuop", "hmot", "hmox", "hmo", "hmop", "hmut", "hmux", "hmu", "hmup", "hmurx", "hmur", "hmyx", "hmy", "hmyp", "hmyrx", "hmyr", "mit", "mix", "mi", "mip", "miex", "mie", "miep", "mat", "max", "ma", "map", "muot", "muox", "muo", "muop", "mot", "mox", "mo", "mop", "mex", "me", "mut", "mux", "mu", "mup", "murx", "mur", "myt", "myx", "my", "myp", "fit", "fix", "fi", "fip", "fat", "fax", "fa", "fap", "fox", "fo", "fop", "fut", "fux", "fu", "fup", "furx", "fur", "fyt", "fyx", "fy", "fyp", "vit", "vix", "vi", "vip", "viet", "viex", "vie", "viep", "vat", "vax", "va", "vap", "vot", "vox", "vo", "vop", "vex", "vep", "vut", "vux", "vu", "vup", "vurx", "vur", "vyt", "vyx", "vy", "vyp", "vyrx", "vyr"];
const FS = Object.freeze(PS);
const RS = ["dit", "dix", "di", "dip", "diex", "die", "diep", "dat", "dax", "da", "dap", "duox", "duo", "dot", "dox", "do", "dop", "dex", "de", "dep", "dut", "dux", "du", "dup", "durx", "dur", "tit", "tix", "ti", "tip", "tiex", "tie", "tiep", "tat", "tax", "ta", "tap", "tuot", "tuox", "tuo", "tuop", "tot", "tox", "to", "top", "tex", "te", "tep", "tut", "tux", "tu", "tup", "turx", "tur", "ddit", "ddix", "ddi", "ddip", "ddiex", "ddie", "ddiep", "ddat", "ddax", "dda", "ddap", "dduox", "dduo", "dduop", "ddot", "ddox", "ddo", "ddop", "ddex", "dde", "ddep", "ddut", "ddux", "ddu", "ddup", "ddurx", "ddur", "ndit", "ndix", "ndi", "ndip", "ndiex", "ndie", "ndat", "ndax", "nda", "ndap", "ndot", "ndox", "ndo", "ndop", "ndex", "nde", "ndep", "ndut", "ndux", "ndu", "ndup", "ndurx", "ndur", "hnit", "hnix", "hni", "hnip", "hniet", "hniex", "hnie", "hniep", "hnat", "hnax", "hna", "hnap", "hnuox", "hnuo", "hnot", "hnox", "hnop", "hnex", "hne", "hnep", "hnut", "nit", "nix", "ni", "nip", "niex", "nie", "niep", "nax", "na", "nap", "nuox", "nuo", "nuop", "not", "nox", "no", "nop", "nex", "ne", "nep", "nut", "nux", "nu", "nup", "nurx", "nur", "hlit", "hlix", "hli", "hlip", "hliex", "hlie", "hliep", "hlat", "hlax", "hla", "hlap", "hluox", "hluo", "hluop", "hlox", "hlo", "hlop", "hlex", "hle", "hlep", "hlut", "hlux", "hlu", "hlup", "hlurx", "hlur", "hlyt", "hlyx", "hly", "hlyp", "hlyrx", "hlyr", "lit", "lix", "li", "lip", "liet", "liex", "lie", "liep", "lat", "lax", "la", "lap", "luot", "luox", "luo", "luop", "lot", "lox", "lo", "lop", "lex", "le", "lep", "lut", "lux", "lu", "lup", "lurx", "lur", "lyt", "lyx", "ly", "lyp", "lyrx", "lyr", "git", "gix", "gi", "gip", "giet", "giex", "gie", "giep", "gat", "gax", "ga", "gap", "guot", "guox", "guo", "guop", "got", "gox", "go", "gop", "get", "gex", "ge", "gep", "gut", "gux", "gu", "gup", "gurx", "gur", "kit", "kix", "ki", "kip", "kiex", "kie", "kiep", "kat"];
const KS = Object.freeze(RS);
const AS = ["kax", "ka", "kap", "kuox", "kuo", "kuop", "kot", "kox", "ko", "kop", "ket", "kex", "ke", "kep", "kut", "kux", "ku", "kup", "kurx", "kur", "ggit", "ggix", "ggi", "ggiex", "ggie", "ggiep", "ggat", "ggax", "gga", "ggap", "gguot", "gguox", "gguo", "gguop", "ggot", "ggox", "ggo", "ggop", "gget", "ggex", "gge", "ggep", "ggut", "ggux", "ggu", "ggup", "ggurx", "ggur", "mgiex", "mgie", "mgat", "mgax", "mga", "mgap", "mguox", "mguo", "mguop", "mgot", "mgox", "mgo", "mgop", "mgex", "mge", "mgep", "mgut", "mgux", "mgu", "mgup", "mgurx", "mgur", "hxit", "hxix", "hxi", "hxip", "hxiet", "hxiex", "hxie", "hxiep", "hxat", "hxax", "hxa", "hxap", "hxuot", "hxuox", "hxuo", "hxuop", "hxot", "hxox", "hxo", "hxop", "hxex", "hxe", "hxep", "ngiex", "ngie", "ngiep", "ngat", "ngax", "nga", "ngap", "nguot", "nguox", "nguo", "ngot", "ngox", "ngo", "ngop", "ngex", "nge", "ngep", "hit", "hiex", "hie", "hat", "hax", "ha", "hap", "huot", "huox", "huo", "huop", "hot", "hox", "ho", "hop", "hex", "he", "hep", "wat", "wax", "wa", "wap", "wuox", "wuo", "wuop", "wox", "wo", "wop", "wex", "we", "wep", "zit", "zix", "zi", "zip", "ziex", "zie", "ziep", "zat", "zax", "za", "zap", "zuox", "zuo", "zuop", "zot", "zox", "zo", "zop", "zex", "ze", "zep", "zut", "zux", "zu", "zup", "zurx", "zur", "zyt", "zyx", "zy", "zyp", "zyrx", "zyr", "cit", "cix", "ci", "cip", "ciet", "ciex", "cie", "ciep", "cat", "cax", "ca", "cap", "cuox", "cuo", "cuop", "cot", "cox", "co", "cop", "cex", "ce", "cep", "cut", "cux", "cu", "cup", "curx", "cur", "cyt", "cyx", "cy", "cyp", "cyrx", "cyr", "zzit", "zzix", "zzi", "zzip", "zziet", "zziex", "zzie", "zziep", "zzat", "zzax", "zza", "zzap", "zzox", "zzo", "zzop", "zzex", "zze", "zzep", "zzux", "zzu", "zzup", "zzurx", "zzur", "zzyt", "zzyx", "zzy", "zzyp", "zzyrx", "zzyr", "nzit", "nzix", "nzi", "nzip", "nziex", "nzie", "nziep", "nzat", "nzax", "nza", "nzap", "nzuox", "nzuo", "nzox", "nzop", "nzex", "nze", "nzux", "nzu"];
const OS = Object.freeze(AS);
const _S = ["nzup", "nzurx", "nzur", "nzyt", "nzyx", "nzy", "nzyp", "nzyrx", "nzyr", "sit", "six", "si", "sip", "siex", "sie", "siep", "sat", "sax", "sa", "sap", "suox", "suo", "suop", "sot", "sox", "so", "sop", "sex", "se", "sep", "sut", "sux", "su", "sup", "surx", "sur", "syt", "syx", "sy", "syp", "syrx", "syr", "ssit", "ssix", "ssi", "ssip", "ssiex", "ssie", "ssiep", "ssat", "ssax", "ssa", "ssap", "ssot", "ssox", "sso", "ssop", "ssex", "sse", "ssep", "ssut", "ssux", "ssu", "ssup", "ssyt", "ssyx", "ssy", "ssyp", "ssyrx", "ssyr", "zhat", "zhax", "zha", "zhap", "zhuox", "zhuo", "zhuop", "zhot", "zhox", "zho", "zhop", "zhet", "zhex", "zhe", "zhep", "zhut", "zhux", "zhu", "zhup", "zhurx", "zhur", "zhyt", "zhyx", "zhy", "zhyp", "zhyrx", "zhyr", "chat", "chax", "cha", "chap", "chuot", "chuox", "chuo", "chuop", "chot", "chox", "cho", "chop", "chet", "chex", "che", "chep", "chux", "chu", "chup", "churx", "chur", "chyt", "chyx", "chy", "chyp", "chyrx", "chyr", "rrax", "rra", "rruox", "rruo", "rrot", "rrox", "rro", "rrop", "rret", "rrex", "rre", "rrep", "rrut", "rrux", "rru", "rrup", "rrurx", "rrur", "rryt", "rryx", "rry", "rryp", "rryrx", "rryr", "nrat", "nrax", "nra", "nrap", "nrox", "nro", "nrop", "nret", "nrex", "nre", "nrep", "nrut", "nrux", "nru", "nrup", "nrurx", "nrur", "nryt", "nryx", "nry", "nryp", "nryrx", "nryr", "shat", "shax", "sha", "shap", "shuox", "shuo", "shuop", "shot", "shox", "sho", "shop", "shet", "shex", "she", "shep", "shut", "shux", "shu", "shup", "shurx", "shur", "shyt", "shyx", "shy", "shyp", "shyrx", "shyr", "rat", "rax", "ra", "rap", "ruox", "ruo", "ruop", "rot", "rox", "ro", "rop", "rex", "re", "rep", "rut", "rux", "ru", "rup", "rurx", "rur", "ryt", "ryx", "ry", "ryp", "ryrx", "ryr", "jit", "jix", "ji", "jip", "jiet", "jiex", "jie", "jiep", "juot", "juox", "juo", "juop", "jot", "jox", "jo", "jop", "jut", "jux", "ju", "jup", "jurx", "jur", "jyt", "jyx", "jy", "jyp", "jyrx", "jyr", "qit", "qix", "qi", "qip"];
const ES = Object.freeze(_S);
const zS = ["qiet", "qiex", "qie", "qiep", "quot", "quox", "quo", "quop", "qot", "qox", "qo", "qop", "qut", "qux", "qu", "qup", "qurx", "qur", "qyt", "qyx", "qy", "qyp", "qyrx", "qyr", "jjit", "jjix", "jji", "jjip", "jjiet", "jjiex", "jjie", "jjiep", "jjuox", "jjuo", "jjuop", "jjot", "jjox", "jjo", "jjop", "jjut", "jjux", "jju", "jjup", "jjurx", "jjur", "jjyt", "jjyx", "jjy", "jjyp", "njit", "njix", "nji", "njip", "njiet", "njiex", "njie", "njiep", "njuox", "njuo", "njot", "njox", "njo", "njop", "njux", "nju", "njup", "njurx", "njur", "njyt", "njyx", "njy", "njyp", "njyrx", "njyr", "nyit", "nyix", "nyi", "nyip", "nyiet", "nyiex", "nyie", "nyiep", "nyuox", "nyuo", "nyuop", "nyot", "nyox", "nyo", "nyop", "nyut", "nyux", "nyu", "nyup", "xit", "xix", "xi", "xip", "xiet", "xiex", "xie", "xiep", "xuox", "xuo", "xot", "xox", "xo", "xop", "xyt", "xyx", "xy", "xyp", "xyrx", "xyr", "yit", "yix", "yi", "yip", "yiet", "yiex", "yie", "yiep", "yuot", "yuox", "yuo", "yuop", "yot", "yox", "yo", "yop", "yut", "yux", "yu", "yup", "yurx", "yur", "yyt", "yyx", "yy", "yyp", "yyrx", "yyr", void 0, void 0, void 0, "Qot", "Li", "Kit", "Nyip", "Cyp", "Ssi", "Ggop", "Gep", "Mi", "Hxit", "Lyr", "Bbut", "Mop", "Yo", "Put", "Hxuo", "Tat", "Ga", void 0, void 0, "Ddur", "Bur", "Gguo", "Nyop", "Tu", "Op", "Jjut", "Zot", "Pyt", "Hmo", "Yit", "Vur", "Shy", "Vep", "Za", "Jo", void 0, "Jjy", "Got", "Jjie", "Wo", "Du", "Shur", "Lie", "Cy", "Cuop", "Cip", "Hxop", "Shat", void 0, "Shop", "Che", "Zziet", void 0, "Ke", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const $S = Object.freeze(zS);
const IS = [void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "A", "a", "A", "a", "HENG", "heng", "TZ", "tz", "3", "3", "4", "4", "4", "4", "F", "S", "AA", "aa", "AO", "ao", "AU", "au", "AV", "av", "AV-", "av-", "AY", "ay", "C", "c", "K", "k", "K", "k", "K", "k", "L", "l", "L", "l", "O", "o", "O", "o", "OO", "oo", "P", "p", "P", "p", "P", "p", "Q", "q", "Q", "q", "R", "r", "R", "r", "V", "v", "VY", "vy", "Z", "z", "TH", "th", "TH", "th", "Y", "y", "ET", "et", "IS", "is", "CON", "con", "US", "us", "dum", "lum", "num", "rum", "RUM", "tum", "um", "D", "d", "F", "f", "G", "G", "g", "L", "l", "R", "r", "S", "s", "T", "t", "^", ":", "=", "'", "'", "H", "l", ".", "N", "n", "C", "c", "c", "h", "B", "b", "F", "f", "AE", "ae", "OE", "oe", "UE", "ue", "G", "g", "K", "k", "N", "n", "R", "r", "S", "s", "H", "E", "G", "L", "I", "Q", "K", "T", "J", "CHI", "B", "b", "O", "o", "U", "u", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "I", "H", "oe", "M", "F", "P", "M", "I", "M1"];
const qS = Object.freeze(IS);
const US = ["ga", "gag", "gagg", "gags", "gan", "ganj", "ganh", "gad", "gal", "galg", "galm", "galb", "gals", "galt", "galp", "galh", "gam", "gab", "gabs", "gas", "gass", "gang", "gaj", "gac", "gak", "gat", "gap", "gah", "gae", "gaeg", "gaegg", "gaegs", "gaen", "gaenj", "gaenh", "gaed", "gael", "gaelg", "gaelm", "gaelb", "gaels", "gaelt", "gaelp", "gaelh", "gaem", "gaeb", "gaebs", "gaes", "gaess", "gaeng", "gaej", "gaec", "gaek", "gaet", "gaep", "gaeh", "gya", "gyag", "gyagg", "gyags", "gyan", "gyanj", "gyanh", "gyad", "gyal", "gyalg", "gyalm", "gyalb", "gyals", "gyalt", "gyalp", "gyalh", "gyam", "gyab", "gyabs", "gyas", "gyass", "gyang", "gyaj", "gyac", "gyak", "gyat", "gyap", "gyah", "gyae", "gyaeg", "gyaegg", "gyaegs", "gyaen", "gyaenj", "gyaenh", "gyaed", "gyael", "gyaelg", "gyaelm", "gyaelb", "gyaels", "gyaelt", "gyaelp", "gyaelh", "gyaem", "gyaeb", "gyaebs", "gyaes", "gyaess", "gyaeng", "gyaej", "gyaec", "gyaek", "gyaet", "gyaep", "gyaeh", "geo", "geog", "geogg", "geogs", "geon", "geonj", "geonh", "geod", "geol", "geolg", "geolm", "geolb", "geols", "geolt", "geolp", "geolh", "geom", "geob", "geobs", "geos", "geoss", "geong", "geoj", "geoc", "geok", "geot", "geop", "geoh", "ge", "geg", "gegg", "gegs", "gen", "genj", "genh", "ged", "gel", "gelg", "gelm", "gelb", "gels", "gelt", "gelp", "gelh", "gem", "geb", "gebs", "ges", "gess", "geng", "gej", "gec", "gek", "get", "gep", "geh", "gyeo", "gyeog", "gyeogg", "gyeogs", "gyeon", "gyeonj", "gyeonh", "gyeod", "gyeol", "gyeolg", "gyeolm", "gyeolb", "gyeols", "gyeolt", "gyeolp", "gyeolh", "gyeom", "gyeob", "gyeobs", "gyeos", "gyeoss", "gyeong", "gyeoj", "gyeoc", "gyeok", "gyeot", "gyeop", "gyeoh", "gye", "gyeg", "gyegg", "gyegs", "gyen", "gyenj", "gyenh", "gyed", "gyel", "gyelg", "gyelm", "gyelb", "gyels", "gyelt", "gyelp", "gyelh", "gyem", "gyeb", "gyebs", "gyes", "gyess", "gyeng", "gyej", "gyec", "gyek", "gyet", "gyep", "gyeh", "go", "gog", "gogg", "gogs", "gon", "gonj", "gonh", "god", "gol", "golg", "golm", "golb", "gols", "golt", "golp", "golh", "gom", "gob", "gobs", "gos", "goss", "gong", "goj", "goc", "gok", "got", "gop", "goh", "gwa", "gwag", "gwagg", "gwags"];
const VS = Object.freeze(US);
const iJ = ["gwan", "gwanj", "gwanh", "gwad", "gwal", "gwalg", "gwalm", "gwalb", "gwals", "gwalt", "gwalp", "gwalh", "gwam", "gwab", "gwabs", "gwas", "gwass", "gwang", "gwaj", "gwac", "gwak", "gwat", "gwap", "gwah", "gwae", "gwaeg", "gwaegg", "gwaegs", "gwaen", "gwaenj", "gwaenh", "gwaed", "gwael", "gwaelg", "gwaelm", "gwaelb", "gwaels", "gwaelt", "gwaelp", "gwaelh", "gwaem", "gwaeb", "gwaebs", "gwaes", "gwaess", "gwaeng", "gwaej", "gwaec", "gwaek", "gwaet", "gwaep", "gwaeh", "goe", "goeg", "goegg", "goegs", "goen", "goenj", "goenh", "goed", "goel", "goelg", "goelm", "goelb", "goels", "goelt", "goelp", "goelh", "goem", "goeb", "goebs", "goes", "goess", "goeng", "goej", "goec", "goek", "goet", "goep", "goeh", "gyo", "gyog", "gyogg", "gyogs", "gyon", "gyonj", "gyonh", "gyod", "gyol", "gyolg", "gyolm", "gyolb", "gyols", "gyolt", "gyolp", "gyolh", "gyom", "gyob", "gyobs", "gyos", "gyoss", "gyong", "gyoj", "gyoc", "gyok", "gyot", "gyop", "gyoh", "gu", "gug", "gugg", "gugs", "gun", "gunj", "gunh", "gud", "gul", "gulg", "gulm", "gulb", "guls", "gult", "gulp", "gulh", "gum", "gub", "gubs", "gus", "guss", "gung", "guj", "guc", "guk", "gut", "gup", "guh", "gweo", "gweog", "gweogg", "gweogs", "gweon", "gweonj", "gweonh", "gweod", "gweol", "gweolg", "gweolm", "gweolb", "gweols", "gweolt", "gweolp", "gweolh", "gweom", "gweob", "gweobs", "gweos", "gweoss", "gweong", "gweoj", "gweoc", "gweok", "gweot", "gweop", "gweoh", "gwe", "gweg", "gwegg", "gwegs", "gwen", "gwenj", "gwenh", "gwed", "gwel", "gwelg", "gwelm", "gwelb", "gwels", "gwelt", "gwelp", "gwelh", "gwem", "gweb", "gwebs", "gwes", "gwess", "gweng", "gwej", "gwec", "gwek", "gwet", "gwep", "gweh", "gwi", "gwig", "gwigg", "gwigs", "gwin", "gwinj", "gwinh", "gwid", "gwil", "gwilg", "gwilm", "gwilb", "gwils", "gwilt", "gwilp", "gwilh", "gwim", "gwib", "gwibs", "gwis", "gwiss", "gwing", "gwij", "gwic", "gwik", "gwit", "gwip", "gwih", "gyu", "gyug", "gyugg", "gyugs", "gyun", "gyunj", "gyunh", "gyud", "gyul", "gyulg", "gyulm", "gyulb", "gyuls", "gyult", "gyulp", "gyulh", "gyum", "gyub", "gyubs", "gyus", "gyuss", "gyung", "gyuj", "gyuc", "gyuk", "gyut", "gyup", "gyuh", "geu", "geug", "geugg", "geugs", "geun", "geunj", "geunh", "geud"];
const oJ = Object.freeze(iJ);
const eJ = ["geul", "geulg", "geulm", "geulb", "geuls", "geult", "geulp", "geulh", "geum", "geub", "geubs", "geus", "geuss", "geung", "geuj", "geuc", "geuk", "geut", "geup", "geuh", "gyi", "gyig", "gyigg", "gyigs", "gyin", "gyinj", "gyinh", "gyid", "gyil", "gyilg", "gyilm", "gyilb", "gyils", "gyilt", "gyilp", "gyilh", "gyim", "gyib", "gyibs", "gyis", "gyiss", "gying", "gyij", "gyic", "gyik", "gyit", "gyip", "gyih", "gi", "gig", "gigg", "gigs", "gin", "ginj", "ginh", "gid", "gil", "gilg", "gilm", "gilb", "gils", "gilt", "gilp", "gilh", "gim", "gib", "gibs", "gis", "giss", "ging", "gij", "gic", "gik", "git", "gip", "gih", "gga", "ggag", "ggagg", "ggags", "ggan", "gganj", "gganh", "ggad", "ggal", "ggalg", "ggalm", "ggalb", "ggals", "ggalt", "ggalp", "ggalh", "ggam", "ggab", "ggabs", "ggas", "ggass", "ggang", "ggaj", "ggac", "ggak", "ggat", "ggap", "ggah", "ggae", "ggaeg", "ggaegg", "ggaegs", "ggaen", "ggaenj", "ggaenh", "ggaed", "ggael", "ggaelg", "ggaelm", "ggaelb", "ggaels", "ggaelt", "ggaelp", "ggaelh", "ggaem", "ggaeb", "ggaebs", "ggaes", "ggaess", "ggaeng", "ggaej", "ggaec", "ggaek", "ggaet", "ggaep", "ggaeh", "ggya", "ggyag", "ggyagg", "ggyags", "ggyan", "ggyanj", "ggyanh", "ggyad", "ggyal", "ggyalg", "ggyalm", "ggyalb", "ggyals", "ggyalt", "ggyalp", "ggyalh", "ggyam", "ggyab", "ggyabs", "ggyas", "ggyass", "ggyang", "ggyaj", "ggyac", "ggyak", "ggyat", "ggyap", "ggyah", "ggyae", "ggyaeg", "ggyaegg", "ggyaegs", "ggyaen", "ggyaenj", "ggyaenh", "ggyaed", "ggyael", "ggyaelg", "ggyaelm", "ggyaelb", "ggyaels", "ggyaelt", "ggyaelp", "ggyaelh", "ggyaem", "ggyaeb", "ggyaebs", "ggyaes", "ggyaess", "ggyaeng", "ggyaej", "ggyaec", "ggyaek", "ggyaet", "ggyaep", "ggyaeh", "ggeo", "ggeog", "ggeogg", "ggeogs", "ggeon", "ggeonj", "ggeonh", "ggeod", "ggeol", "ggeolg", "ggeolm", "ggeolb", "ggeols", "ggeolt", "ggeolp", "ggeolh", "ggeom", "ggeob", "ggeobs", "ggeos", "ggeoss", "ggeong", "ggeoj", "ggeoc", "ggeok", "ggeot", "ggeop", "ggeoh", "gge", "ggeg", "ggegg", "ggegs", "ggen", "ggenj", "ggenh", "gged", "ggel", "ggelg", "ggelm", "ggelb", "ggels", "ggelt", "ggelp", "ggelh", "ggem", "ggeb", "ggebs", "gges", "ggess", "ggeng", "ggej", "ggec", "ggek", "gget", "ggep", "ggeh", "ggyeo", "ggyeog", "ggyeogg", "ggyeogs", "ggyeon", "ggyeonj", "ggyeonh", "ggyeod", "ggyeol", "ggyeolg", "ggyeolm", "ggyeolb"];
const nJ = Object.freeze(eJ);
const aJ = ["ggyeols", "ggyeolt", "ggyeolp", "ggyeolh", "ggyeom", "ggyeob", "ggyeobs", "ggyeos", "ggyeoss", "ggyeong", "ggyeoj", "ggyeoc", "ggyeok", "ggyeot", "ggyeop", "ggyeoh", "ggye", "ggyeg", "ggyegg", "ggyegs", "ggyen", "ggyenj", "ggyenh", "ggyed", "ggyel", "ggyelg", "ggyelm", "ggyelb", "ggyels", "ggyelt", "ggyelp", "ggyelh", "ggyem", "ggyeb", "ggyebs", "ggyes", "ggyess", "ggyeng", "ggyej", "ggyec", "ggyek", "ggyet", "ggyep", "ggyeh", "ggo", "ggog", "ggogg", "ggogs", "ggon", "ggonj", "ggonh", "ggod", "ggol", "ggolg", "ggolm", "ggolb", "ggols", "ggolt", "ggolp", "ggolh", "ggom", "ggob", "ggobs", "ggos", "ggoss", "ggong", "ggoj", "ggoc", "ggok", "ggot", "ggop", "ggoh", "ggwa", "ggwag", "ggwagg", "ggwags", "ggwan", "ggwanj", "ggwanh", "ggwad", "ggwal", "ggwalg", "ggwalm", "ggwalb", "ggwals", "ggwalt", "ggwalp", "ggwalh", "ggwam", "ggwab", "ggwabs", "ggwas", "ggwass", "ggwang", "ggwaj", "ggwac", "ggwak", "ggwat", "ggwap", "ggwah", "ggwae", "ggwaeg", "ggwaegg", "ggwaegs", "ggwaen", "ggwaenj", "ggwaenh", "ggwaed", "ggwael", "ggwaelg", "ggwaelm", "ggwaelb", "ggwaels", "ggwaelt", "ggwaelp", "ggwaelh", "ggwaem", "ggwaeb", "ggwaebs", "ggwaes", "ggwaess", "ggwaeng", "ggwaej", "ggwaec", "ggwaek", "ggwaet", "ggwaep", "ggwaeh", "ggoe", "ggoeg", "ggoegg", "ggoegs", "ggoen", "ggoenj", "ggoenh", "ggoed", "ggoel", "ggoelg", "ggoelm", "ggoelb", "ggoels", "ggoelt", "ggoelp", "ggoelh", "ggoem", "ggoeb", "ggoebs", "ggoes", "ggoess", "ggoeng", "ggoej", "ggoec", "ggoek", "ggoet", "ggoep", "ggoeh", "ggyo", "ggyog", "ggyogg", "ggyogs", "ggyon", "ggyonj", "ggyonh", "ggyod", "ggyol", "ggyolg", "ggyolm", "ggyolb", "ggyols", "ggyolt", "ggyolp", "ggyolh", "ggyom", "ggyob", "ggyobs", "ggyos", "ggyoss", "ggyong", "ggyoj", "ggyoc", "ggyok", "ggyot", "ggyop", "ggyoh", "ggu", "ggug", "ggugg", "ggugs", "ggun", "ggunj", "ggunh", "ggud", "ggul", "ggulg", "ggulm", "ggulb", "gguls", "ggult", "ggulp", "ggulh", "ggum", "ggub", "ggubs", "ggus", "gguss", "ggung", "gguj", "gguc", "gguk", "ggut", "ggup", "gguh", "ggweo", "ggweog", "ggweogg", "ggweogs", "ggweon", "ggweonj", "ggweonh", "ggweod", "ggweol", "ggweolg", "ggweolm", "ggweolb", "ggweols", "ggweolt", "ggweolp", "ggweolh", "ggweom", "ggweob", "ggweobs", "ggweos", "ggweoss", "ggweong", "ggweoj", "ggweoc", "ggweok", "ggweot", "ggweop", "ggweoh", "ggwe", "ggweg", "ggwegg", "ggwegs", "ggwen", "ggwenj", "ggwenh", "ggwed", "ggwel", "ggwelg", "ggwelm", "ggwelb", "ggwels", "ggwelt", "ggwelp", "ggwelh"];
const uJ = Object.freeze(aJ);
const tJ = ["ggwem", "ggweb", "ggwebs", "ggwes", "ggwess", "ggweng", "ggwej", "ggwec", "ggwek", "ggwet", "ggwep", "ggweh", "ggwi", "ggwig", "ggwigg", "ggwigs", "ggwin", "ggwinj", "ggwinh", "ggwid", "ggwil", "ggwilg", "ggwilm", "ggwilb", "ggwils", "ggwilt", "ggwilp", "ggwilh", "ggwim", "ggwib", "ggwibs", "ggwis", "ggwiss", "ggwing", "ggwij", "ggwic", "ggwik", "ggwit", "ggwip", "ggwih", "ggyu", "ggyug", "ggyugg", "ggyugs", "ggyun", "ggyunj", "ggyunh", "ggyud", "ggyul", "ggyulg", "ggyulm", "ggyulb", "ggyuls", "ggyult", "ggyulp", "ggyulh", "ggyum", "ggyub", "ggyubs", "ggyus", "ggyuss", "ggyung", "ggyuj", "ggyuc", "ggyuk", "ggyut", "ggyup", "ggyuh", "ggeu", "ggeug", "ggeugg", "ggeugs", "ggeun", "ggeunj", "ggeunh", "ggeud", "ggeul", "ggeulg", "ggeulm", "ggeulb", "ggeuls", "ggeult", "ggeulp", "ggeulh", "ggeum", "ggeub", "ggeubs", "ggeus", "ggeuss", "ggeung", "ggeuj", "ggeuc", "ggeuk", "ggeut", "ggeup", "ggeuh", "ggyi", "ggyig", "ggyigg", "ggyigs", "ggyin", "ggyinj", "ggyinh", "ggyid", "ggyil", "ggyilg", "ggyilm", "ggyilb", "ggyils", "ggyilt", "ggyilp", "ggyilh", "ggyim", "ggyib", "ggyibs", "ggyis", "ggyiss", "ggying", "ggyij", "ggyic", "ggyik", "ggyit", "ggyip", "ggyih", "ggi", "ggig", "ggigg", "ggigs", "ggin", "gginj", "gginh", "ggid", "ggil", "ggilg", "ggilm", "ggilb", "ggils", "ggilt", "ggilp", "ggilh", "ggim", "ggib", "ggibs", "ggis", "ggiss", "gging", "ggij", "ggic", "ggik", "ggit", "ggip", "ggih", "na", "nag", "nagg", "nags", "nan", "nanj", "nanh", "nad", "nal", "nalg", "nalm", "nalb", "nals", "nalt", "nalp", "nalh", "nam", "nab", "nabs", "nas", "nass", "nang", "naj", "nac", "nak", "nat", "nap", "nah", "nae", "naeg", "naegg", "naegs", "naen", "naenj", "naenh", "naed", "nael", "naelg", "naelm", "naelb", "naels", "naelt", "naelp", "naelh", "naem", "naeb", "naebs", "naes", "naess", "naeng", "naej", "naec", "naek", "naet", "naep", "naeh", "nya", "nyag", "nyagg", "nyags", "nyan", "nyanj", "nyanh", "nyad", "nyal", "nyalg", "nyalm", "nyalb", "nyals", "nyalt", "nyalp", "nyalh", "nyam", "nyab", "nyabs", "nyas", "nyass", "nyang", "nyaj", "nyac", "nyak", "nyat", "nyap", "nyah", "nyae", "nyaeg", "nyaegg", "nyaegs", "nyaen", "nyaenj", "nyaenh", "nyaed", "nyael", "nyaelg", "nyaelm", "nyaelb", "nyaels", "nyaelt", "nyaelp", "nyaelh", "nyaem", "nyaeb", "nyaebs", "nyaes"];
const dJ = Object.freeze(tJ);
const gJ = ["nyaess", "nyaeng", "nyaej", "nyaec", "nyaek", "nyaet", "nyaep", "nyaeh", "neo", "neog", "neogg", "neogs", "neon", "neonj", "neonh", "neod", "neol", "neolg", "neolm", "neolb", "neols", "neolt", "neolp", "neolh", "neom", "neob", "neobs", "neos", "neoss", "neong", "neoj", "neoc", "neok", "neot", "neop", "neoh", "ne", "neg", "negg", "negs", "nen", "nenj", "nenh", "ned", "nel", "nelg", "nelm", "nelb", "nels", "nelt", "nelp", "nelh", "nem", "neb", "nebs", "nes", "ness", "neng", "nej", "nec", "nek", "net", "nep", "neh", "nyeo", "nyeog", "nyeogg", "nyeogs", "nyeon", "nyeonj", "nyeonh", "nyeod", "nyeol", "nyeolg", "nyeolm", "nyeolb", "nyeols", "nyeolt", "nyeolp", "nyeolh", "nyeom", "nyeob", "nyeobs", "nyeos", "nyeoss", "nyeong", "nyeoj", "nyeoc", "nyeok", "nyeot", "nyeop", "nyeoh", "nye", "nyeg", "nyegg", "nyegs", "nyen", "nyenj", "nyenh", "nyed", "nyel", "nyelg", "nyelm", "nyelb", "nyels", "nyelt", "nyelp", "nyelh", "nyem", "nyeb", "nyebs", "nyes", "nyess", "nyeng", "nyej", "nyec", "nyek", "nyet", "nyep", "nyeh", "no", "nog", "nogg", "nogs", "non", "nonj", "nonh", "nod", "nol", "nolg", "nolm", "nolb", "nols", "nolt", "nolp", "nolh", "nom", "nob", "nobs", "nos", "noss", "nong", "noj", "noc", "nok", "not", "nop", "noh", "nwa", "nwag", "nwagg", "nwags", "nwan", "nwanj", "nwanh", "nwad", "nwal", "nwalg", "nwalm", "nwalb", "nwals", "nwalt", "nwalp", "nwalh", "nwam", "nwab", "nwabs", "nwas", "nwass", "nwang", "nwaj", "nwac", "nwak", "nwat", "nwap", "nwah", "nwae", "nwaeg", "nwaegg", "nwaegs", "nwaen", "nwaenj", "nwaenh", "nwaed", "nwael", "nwaelg", "nwaelm", "nwaelb", "nwaels", "nwaelt", "nwaelp", "nwaelh", "nwaem", "nwaeb", "nwaebs", "nwaes", "nwaess", "nwaeng", "nwaej", "nwaec", "nwaek", "nwaet", "nwaep", "nwaeh", "noe", "noeg", "noegg", "noegs", "noen", "noenj", "noenh", "noed", "noel", "noelg", "noelm", "noelb", "noels", "noelt", "noelp", "noelh", "noem", "noeb", "noebs", "noes", "noess", "noeng", "noej", "noec", "noek", "noet", "noep", "noeh", "nyo", "nyog", "nyogg", "nyogs", "nyon", "nyonj", "nyonh", "nyod", "nyol", "nyolg", "nyolm", "nyolb", "nyols", "nyolt", "nyolp", "nyolh", "nyom", "nyob", "nyobs", "nyos", "nyoss", "nyong", "nyoj", "nyoc"];
const sJ = Object.freeze(gJ);
const hJ = ["nyok", "nyot", "nyop", "nyoh", "nu", "nug", "nugg", "nugs", "nun", "nunj", "nunh", "nud", "nul", "nulg", "nulm", "nulb", "nuls", "nult", "nulp", "nulh", "num", "nub", "nubs", "nus", "nuss", "nung", "nuj", "nuc", "nuk", "nut", "nup", "nuh", "nweo", "nweog", "nweogg", "nweogs", "nweon", "nweonj", "nweonh", "nweod", "nweol", "nweolg", "nweolm", "nweolb", "nweols", "nweolt", "nweolp", "nweolh", "nweom", "nweob", "nweobs", "nweos", "nweoss", "nweong", "nweoj", "nweoc", "nweok", "nweot", "nweop", "nweoh", "nwe", "nweg", "nwegg", "nwegs", "nwen", "nwenj", "nwenh", "nwed", "nwel", "nwelg", "nwelm", "nwelb", "nwels", "nwelt", "nwelp", "nwelh", "nwem", "nweb", "nwebs", "nwes", "nwess", "nweng", "nwej", "nwec", "nwek", "nwet", "nwep", "nweh", "nwi", "nwig", "nwigg", "nwigs", "nwin", "nwinj", "nwinh", "nwid", "nwil", "nwilg", "nwilm", "nwilb", "nwils", "nwilt", "nwilp", "nwilh", "nwim", "nwib", "nwibs", "nwis", "nwiss", "nwing", "nwij", "nwic", "nwik", "nwit", "nwip", "nwih", "nyu", "nyug", "nyugg", "nyugs", "nyun", "nyunj", "nyunh", "nyud", "nyul", "nyulg", "nyulm", "nyulb", "nyuls", "nyult", "nyulp", "nyulh", "nyum", "nyub", "nyubs", "nyus", "nyuss", "nyung", "nyuj", "nyuc", "nyuk", "nyut", "nyup", "nyuh", "neu", "neug", "neugg", "neugs", "neun", "neunj", "neunh", "neud", "neul", "neulg", "neulm", "neulb", "neuls", "neult", "neulp", "neulh", "neum", "neub", "neubs", "neus", "neuss", "neung", "neuj", "neuc", "neuk", "neut", "neup", "neuh", "nyi", "nyig", "nyigg", "nyigs", "nyin", "nyinj", "nyinh", "nyid", "nyil", "nyilg", "nyilm", "nyilb", "nyils", "nyilt", "nyilp", "nyilh", "nyim", "nyib", "nyibs", "nyis", "nyiss", "nying", "nyij", "nyic", "nyik", "nyit", "nyip", "nyih", "ni", "nig", "nigg", "nigs", "nin", "ninj", "ninh", "nid", "nil", "nilg", "nilm", "nilb", "nils", "nilt", "nilp", "nilh", "nim", "nib", "nibs", "nis", "niss", "ning", "nij", "nic", "nik", "nit", "nip", "nih", "da", "dag", "dagg", "dags", "dan", "danj", "danh", "dad", "dal", "dalg", "dalm", "dalb", "dals", "dalt", "dalp", "dalh", "dam", "dab", "dabs", "das", "dass", "dang", "daj", "dac", "dak", "dat", "dap", "dah"];
const rJ = Object.freeze(hJ);
const lJ = ["dae", "daeg", "daegg", "daegs", "daen", "daenj", "daenh", "daed", "dael", "daelg", "daelm", "daelb", "daels", "daelt", "daelp", "daelh", "daem", "daeb", "daebs", "daes", "daess", "daeng", "daej", "daec", "daek", "daet", "daep", "daeh", "dya", "dyag", "dyagg", "dyags", "dyan", "dyanj", "dyanh", "dyad", "dyal", "dyalg", "dyalm", "dyalb", "dyals", "dyalt", "dyalp", "dyalh", "dyam", "dyab", "dyabs", "dyas", "dyass", "dyang", "dyaj", "dyac", "dyak", "dyat", "dyap", "dyah", "dyae", "dyaeg", "dyaegg", "dyaegs", "dyaen", "dyaenj", "dyaenh", "dyaed", "dyael", "dyaelg", "dyaelm", "dyaelb", "dyaels", "dyaelt", "dyaelp", "dyaelh", "dyaem", "dyaeb", "dyaebs", "dyaes", "dyaess", "dyaeng", "dyaej", "dyaec", "dyaek", "dyaet", "dyaep", "dyaeh", "deo", "deog", "deogg", "deogs", "deon", "deonj", "deonh", "deod", "deol", "deolg", "deolm", "deolb", "deols", "deolt", "deolp", "deolh", "deom", "deob", "deobs", "deos", "deoss", "deong", "deoj", "deoc", "deok", "deot", "deop", "deoh", "de", "deg", "degg", "degs", "den", "denj", "denh", "ded", "del", "delg", "delm", "delb", "dels", "delt", "delp", "delh", "dem", "deb", "debs", "des", "dess", "deng", "dej", "dec", "dek", "det", "dep", "deh", "dyeo", "dyeog", "dyeogg", "dyeogs", "dyeon", "dyeonj", "dyeonh", "dyeod", "dyeol", "dyeolg", "dyeolm", "dyeolb", "dyeols", "dyeolt", "dyeolp", "dyeolh", "dyeom", "dyeob", "dyeobs", "dyeos", "dyeoss", "dyeong", "dyeoj", "dyeoc", "dyeok", "dyeot", "dyeop", "dyeoh", "dye", "dyeg", "dyegg", "dyegs", "dyen", "dyenj", "dyenh", "dyed", "dyel", "dyelg", "dyelm", "dyelb", "dyels", "dyelt", "dyelp", "dyelh", "dyem", "dyeb", "dyebs", "dyes", "dyess", "dyeng", "dyej", "dyec", "dyek", "dyet", "dyep", "dyeh", "do", "dog", "dogg", "dogs", "don", "donj", "donh", "dod", "dol", "dolg", "dolm", "dolb", "dols", "dolt", "dolp", "dolh", "dom", "dob", "dobs", "dos", "doss", "dong", "doj", "doc", "dok", "dot", "dop", "doh", "dwa", "dwag", "dwagg", "dwags", "dwan", "dwanj", "dwanh", "dwad", "dwal", "dwalg", "dwalm", "dwalb", "dwals", "dwalt", "dwalp", "dwalh", "dwam", "dwab", "dwabs", "dwas", "dwass", "dwang", "dwaj", "dwac", "dwak", "dwat", "dwap", "dwah", "dwae", "dwaeg", "dwaegg", "dwaegs"];
const vJ = Object.freeze(lJ);
const yJ = ["dwaen", "dwaenj", "dwaenh", "dwaed", "dwael", "dwaelg", "dwaelm", "dwaelb", "dwaels", "dwaelt", "dwaelp", "dwaelh", "dwaem", "dwaeb", "dwaebs", "dwaes", "dwaess", "dwaeng", "dwaej", "dwaec", "dwaek", "dwaet", "dwaep", "dwaeh", "doe", "doeg", "doegg", "doegs", "doen", "doenj", "doenh", "doed", "doel", "doelg", "doelm", "doelb", "doels", "doelt", "doelp", "doelh", "doem", "doeb", "doebs", "does", "doess", "doeng", "doej", "doec", "doek", "doet", "doep", "doeh", "dyo", "dyog", "dyogg", "dyogs", "dyon", "dyonj", "dyonh", "dyod", "dyol", "dyolg", "dyolm", "dyolb", "dyols", "dyolt", "dyolp", "dyolh", "dyom", "dyob", "dyobs", "dyos", "dyoss", "dyong", "dyoj", "dyoc", "dyok", "dyot", "dyop", "dyoh", "du", "dug", "dugg", "dugs", "dun", "dunj", "dunh", "dud", "dul", "dulg", "dulm", "dulb", "duls", "dult", "dulp", "dulh", "dum", "dub", "dubs", "dus", "duss", "dung", "duj", "duc", "duk", "dut", "dup", "duh", "dweo", "dweog", "dweogg", "dweogs", "dweon", "dweonj", "dweonh", "dweod", "dweol", "dweolg", "dweolm", "dweolb", "dweols", "dweolt", "dweolp", "dweolh", "dweom", "dweob", "dweobs", "dweos", "dweoss", "dweong", "dweoj", "dweoc", "dweok", "dweot", "dweop", "dweoh", "dwe", "dweg", "dwegg", "dwegs", "dwen", "dwenj", "dwenh", "dwed", "dwel", "dwelg", "dwelm", "dwelb", "dwels", "dwelt", "dwelp", "dwelh", "dwem", "dweb", "dwebs", "dwes", "dwess", "dweng", "dwej", "dwec", "dwek", "dwet", "dwep", "dweh", "dwi", "dwig", "dwigg", "dwigs", "dwin", "dwinj", "dwinh", "dwid", "dwil", "dwilg", "dwilm", "dwilb", "dwils", "dwilt", "dwilp", "dwilh", "dwim", "dwib", "dwibs", "dwis", "dwiss", "dwing", "dwij", "dwic", "dwik", "dwit", "dwip", "dwih", "dyu", "dyug", "dyugg", "dyugs", "dyun", "dyunj", "dyunh", "dyud", "dyul", "dyulg", "dyulm", "dyulb", "dyuls", "dyult", "dyulp", "dyulh", "dyum", "dyub", "dyubs", "dyus", "dyuss", "dyung", "dyuj", "dyuc", "dyuk", "dyut", "dyup", "dyuh", "deu", "deug", "deugg", "deugs", "deun", "deunj", "deunh", "deud", "deul", "deulg", "deulm", "deulb", "deuls", "deult", "deulp", "deulh", "deum", "deub", "deubs", "deus", "deuss", "deung", "deuj", "deuc", "deuk", "deut", "deup", "deuh", "dyi", "dyig", "dyigg", "dyigs", "dyin", "dyinj", "dyinh", "dyid"];
const cJ = Object.freeze(yJ);
const bJ = ["dyil", "dyilg", "dyilm", "dyilb", "dyils", "dyilt", "dyilp", "dyilh", "dyim", "dyib", "dyibs", "dyis", "dyiss", "dying", "dyij", "dyic", "dyik", "dyit", "dyip", "dyih", "di", "dig", "digg", "digs", "din", "dinj", "dinh", "did", "dil", "dilg", "dilm", "dilb", "dils", "dilt", "dilp", "dilh", "dim", "dib", "dibs", "dis", "diss", "ding", "dij", "dic", "dik", "dit", "dip", "dih", "dda", "ddag", "ddagg", "ddags", "ddan", "ddanj", "ddanh", "ddad", "ddal", "ddalg", "ddalm", "ddalb", "ddals", "ddalt", "ddalp", "ddalh", "ddam", "ddab", "ddabs", "ddas", "ddass", "ddang", "ddaj", "ddac", "ddak", "ddat", "ddap", "ddah", "ddae", "ddaeg", "ddaegg", "ddaegs", "ddaen", "ddaenj", "ddaenh", "ddaed", "ddael", "ddaelg", "ddaelm", "ddaelb", "ddaels", "ddaelt", "ddaelp", "ddaelh", "ddaem", "ddaeb", "ddaebs", "ddaes", "ddaess", "ddaeng", "ddaej", "ddaec", "ddaek", "ddaet", "ddaep", "ddaeh", "ddya", "ddyag", "ddyagg", "ddyags", "ddyan", "ddyanj", "ddyanh", "ddyad", "ddyal", "ddyalg", "ddyalm", "ddyalb", "ddyals", "ddyalt", "ddyalp", "ddyalh", "ddyam", "ddyab", "ddyabs", "ddyas", "ddyass", "ddyang", "ddyaj", "ddyac", "ddyak", "ddyat", "ddyap", "ddyah", "ddyae", "ddyaeg", "ddyaegg", "ddyaegs", "ddyaen", "ddyaenj", "ddyaenh", "ddyaed", "ddyael", "ddyaelg", "ddyaelm", "ddyaelb", "ddyaels", "ddyaelt", "ddyaelp", "ddyaelh", "ddyaem", "ddyaeb", "ddyaebs", "ddyaes", "ddyaess", "ddyaeng", "ddyaej", "ddyaec", "ddyaek", "ddyaet", "ddyaep", "ddyaeh", "ddeo", "ddeog", "ddeogg", "ddeogs", "ddeon", "ddeonj", "ddeonh", "ddeod", "ddeol", "ddeolg", "ddeolm", "ddeolb", "ddeols", "ddeolt", "ddeolp", "ddeolh", "ddeom", "ddeob", "ddeobs", "ddeos", "ddeoss", "ddeong", "ddeoj", "ddeoc", "ddeok", "ddeot", "ddeop", "ddeoh", "dde", "ddeg", "ddegg", "ddegs", "dden", "ddenj", "ddenh", "dded", "ddel", "ddelg", "ddelm", "ddelb", "ddels", "ddelt", "ddelp", "ddelh", "ddem", "ddeb", "ddebs", "ddes", "ddess", "ddeng", "ddej", "ddec", "ddek", "ddet", "ddep", "ddeh", "ddyeo", "ddyeog", "ddyeogg", "ddyeogs", "ddyeon", "ddyeonj", "ddyeonh", "ddyeod", "ddyeol", "ddyeolg", "ddyeolm", "ddyeolb", "ddyeols", "ddyeolt", "ddyeolp", "ddyeolh", "ddyeom", "ddyeob", "ddyeobs", "ddyeos", "ddyeoss", "ddyeong", "ddyeoj", "ddyeoc", "ddyeok", "ddyeot", "ddyeop", "ddyeoh", "ddye", "ddyeg", "ddyegg", "ddyegs", "ddyen", "ddyenj", "ddyenh", "ddyed", "ddyel", "ddyelg", "ddyelm", "ddyelb"];
const pJ = Object.freeze(bJ);
const wJ = ["ddyels", "ddyelt", "ddyelp", "ddyelh", "ddyem", "ddyeb", "ddyebs", "ddyes", "ddyess", "ddyeng", "ddyej", "ddyec", "ddyek", "ddyet", "ddyep", "ddyeh", "ddo", "ddog", "ddogg", "ddogs", "ddon", "ddonj", "ddonh", "ddod", "ddol", "ddolg", "ddolm", "ddolb", "ddols", "ddolt", "ddolp", "ddolh", "ddom", "ddob", "ddobs", "ddos", "ddoss", "ddong", "ddoj", "ddoc", "ddok", "ddot", "ddop", "ddoh", "ddwa", "ddwag", "ddwagg", "ddwags", "ddwan", "ddwanj", "ddwanh", "ddwad", "ddwal", "ddwalg", "ddwalm", "ddwalb", "ddwals", "ddwalt", "ddwalp", "ddwalh", "ddwam", "ddwab", "ddwabs", "ddwas", "ddwass", "ddwang", "ddwaj", "ddwac", "ddwak", "ddwat", "ddwap", "ddwah", "ddwae", "ddwaeg", "ddwaegg", "ddwaegs", "ddwaen", "ddwaenj", "ddwaenh", "ddwaed", "ddwael", "ddwaelg", "ddwaelm", "ddwaelb", "ddwaels", "ddwaelt", "ddwaelp", "ddwaelh", "ddwaem", "ddwaeb", "ddwaebs", "ddwaes", "ddwaess", "ddwaeng", "ddwaej", "ddwaec", "ddwaek", "ddwaet", "ddwaep", "ddwaeh", "ddoe", "ddoeg", "ddoegg", "ddoegs", "ddoen", "ddoenj", "ddoenh", "ddoed", "ddoel", "ddoelg", "ddoelm", "ddoelb", "ddoels", "ddoelt", "ddoelp", "ddoelh", "ddoem", "ddoeb", "ddoebs", "ddoes", "ddoess", "ddoeng", "ddoej", "ddoec", "ddoek", "ddoet", "ddoep", "ddoeh", "ddyo", "ddyog", "ddyogg", "ddyogs", "ddyon", "ddyonj", "ddyonh", "ddyod", "ddyol", "ddyolg", "ddyolm", "ddyolb", "ddyols", "ddyolt", "ddyolp", "ddyolh", "ddyom", "ddyob", "ddyobs", "ddyos", "ddyoss", "ddyong", "ddyoj", "ddyoc", "ddyok", "ddyot", "ddyop", "ddyoh", "ddu", "ddug", "ddugg", "ddugs", "ddun", "ddunj", "ddunh", "ddud", "ddul", "ddulg", "ddulm", "ddulb", "dduls", "ddult", "ddulp", "ddulh", "ddum", "ddub", "ddubs", "ddus", "dduss", "ddung", "dduj", "dduc", "dduk", "ddut", "ddup", "dduh", "ddweo", "ddweog", "ddweogg", "ddweogs", "ddweon", "ddweonj", "ddweonh", "ddweod", "ddweol", "ddweolg", "ddweolm", "ddweolb", "ddweols", "ddweolt", "ddweolp", "ddweolh", "ddweom", "ddweob", "ddweobs", "ddweos", "ddweoss", "ddweong", "ddweoj", "ddweoc", "ddweok", "ddweot", "ddweop", "ddweoh", "ddwe", "ddweg", "ddwegg", "ddwegs", "ddwen", "ddwenj", "ddwenh", "ddwed", "ddwel", "ddwelg", "ddwelm", "ddwelb", "ddwels", "ddwelt", "ddwelp", "ddwelh", "ddwem", "ddweb", "ddwebs", "ddwes", "ddwess", "ddweng", "ddwej", "ddwec", "ddwek", "ddwet", "ddwep", "ddweh", "ddwi", "ddwig", "ddwigg", "ddwigs", "ddwin", "ddwinj", "ddwinh", "ddwid", "ddwil", "ddwilg", "ddwilm", "ddwilb", "ddwils", "ddwilt", "ddwilp", "ddwilh"];
const jJ = Object.freeze(wJ);
const fJ = ["ddwim", "ddwib", "ddwibs", "ddwis", "ddwiss", "ddwing", "ddwij", "ddwic", "ddwik", "ddwit", "ddwip", "ddwih", "ddyu", "ddyug", "ddyugg", "ddyugs", "ddyun", "ddyunj", "ddyunh", "ddyud", "ddyul", "ddyulg", "ddyulm", "ddyulb", "ddyuls", "ddyult", "ddyulp", "ddyulh", "ddyum", "ddyub", "ddyubs", "ddyus", "ddyuss", "ddyung", "ddyuj", "ddyuc", "ddyuk", "ddyut", "ddyup", "ddyuh", "ddeu", "ddeug", "ddeugg", "ddeugs", "ddeun", "ddeunj", "ddeunh", "ddeud", "ddeul", "ddeulg", "ddeulm", "ddeulb", "ddeuls", "ddeult", "ddeulp", "ddeulh", "ddeum", "ddeub", "ddeubs", "ddeus", "ddeuss", "ddeung", "ddeuj", "ddeuc", "ddeuk", "ddeut", "ddeup", "ddeuh", "ddyi", "ddyig", "ddyigg", "ddyigs", "ddyin", "ddyinj", "ddyinh", "ddyid", "ddyil", "ddyilg", "ddyilm", "ddyilb", "ddyils", "ddyilt", "ddyilp", "ddyilh", "ddyim", "ddyib", "ddyibs", "ddyis", "ddyiss", "ddying", "ddyij", "ddyic", "ddyik", "ddyit", "ddyip", "ddyih", "ddi", "ddig", "ddigg", "ddigs", "ddin", "ddinj", "ddinh", "ddid", "ddil", "ddilg", "ddilm", "ddilb", "ddils", "ddilt", "ddilp", "ddilh", "ddim", "ddib", "ddibs", "ddis", "ddiss", "dding", "ddij", "ddic", "ddik", "ddit", "ddip", "ddih", "ra", "rag", "ragg", "rags", "ran", "ranj", "ranh", "rad", "ral", "ralg", "ralm", "ralb", "rals", "ralt", "ralp", "ralh", "ram", "rab", "rabs", "ras", "rass", "rang", "raj", "rac", "rak", "rat", "rap", "rah", "rae", "raeg", "raegg", "raegs", "raen", "raenj", "raenh", "raed", "rael", "raelg", "raelm", "raelb", "raels", "raelt", "raelp", "raelh", "raem", "raeb", "raebs", "raes", "raess", "raeng", "raej", "raec", "raek", "raet", "raep", "raeh", "rya", "ryag", "ryagg", "ryags", "ryan", "ryanj", "ryanh", "ryad", "ryal", "ryalg", "ryalm", "ryalb", "ryals", "ryalt", "ryalp", "ryalh", "ryam", "ryab", "ryabs", "ryas", "ryass", "ryang", "ryaj", "ryac", "ryak", "ryat", "ryap", "ryah", "ryae", "ryaeg", "ryaegg", "ryaegs", "ryaen", "ryaenj", "ryaenh", "ryaed", "ryael", "ryaelg", "ryaelm", "ryaelb", "ryaels", "ryaelt", "ryaelp", "ryaelh", "ryaem", "ryaeb", "ryaebs", "ryaes", "ryaess", "ryaeng", "ryaej", "ryaec", "ryaek", "ryaet", "ryaep", "ryaeh", "reo", "reog", "reogg", "reogs", "reon", "reonj", "reonh", "reod", "reol", "reolg", "reolm", "reolb", "reols", "reolt", "reolp", "reolh", "reom", "reob", "reobs", "reos"];
const mJ = Object.freeze(fJ);
const YJ = ["reoss", "reong", "reoj", "reoc", "reok", "reot", "reop", "reoh", "re", "reg", "regg", "regs", "ren", "renj", "renh", "red", "rel", "relg", "relm", "relb", "rels", "relt", "relp", "relh", "rem", "reb", "rebs", "res", "ress", "reng", "rej", "rec", "rek", "ret", "rep", "reh", "ryeo", "ryeog", "ryeogg", "ryeogs", "ryeon", "ryeonj", "ryeonh", "ryeod", "ryeol", "ryeolg", "ryeolm", "ryeolb", "ryeols", "ryeolt", "ryeolp", "ryeolh", "ryeom", "ryeob", "ryeobs", "ryeos", "ryeoss", "ryeong", "ryeoj", "ryeoc", "ryeok", "ryeot", "ryeop", "ryeoh", "rye", "ryeg", "ryegg", "ryegs", "ryen", "ryenj", "ryenh", "ryed", "ryel", "ryelg", "ryelm", "ryelb", "ryels", "ryelt", "ryelp", "ryelh", "ryem", "ryeb", "ryebs", "ryes", "ryess", "ryeng", "ryej", "ryec", "ryek", "ryet", "ryep", "ryeh", "ro", "rog", "rogg", "rogs", "ron", "ronj", "ronh", "rod", "rol", "rolg", "rolm", "rolb", "rols", "rolt", "rolp", "rolh", "rom", "rob", "robs", "ros", "ross", "rong", "roj", "roc", "rok", "rot", "rop", "roh", "rwa", "rwag", "rwagg", "rwags", "rwan", "rwanj", "rwanh", "rwad", "rwal", "rwalg", "rwalm", "rwalb", "rwals", "rwalt", "rwalp", "rwalh", "rwam", "rwab", "rwabs", "rwas", "rwass", "rwang", "rwaj", "rwac", "rwak", "rwat", "rwap", "rwah", "rwae", "rwaeg", "rwaegg", "rwaegs", "rwaen", "rwaenj", "rwaenh", "rwaed", "rwael", "rwaelg", "rwaelm", "rwaelb", "rwaels", "rwaelt", "rwaelp", "rwaelh", "rwaem", "rwaeb", "rwaebs", "rwaes", "rwaess", "rwaeng", "rwaej", "rwaec", "rwaek", "rwaet", "rwaep", "rwaeh", "roe", "roeg", "roegg", "roegs", "roen", "roenj", "roenh", "roed", "roel", "roelg", "roelm", "roelb", "roels", "roelt", "roelp", "roelh", "roem", "roeb", "roebs", "roes", "roess", "roeng", "roej", "roec", "roek", "roet", "roep", "roeh", "ryo", "ryog", "ryogg", "ryogs", "ryon", "ryonj", "ryonh", "ryod", "ryol", "ryolg", "ryolm", "ryolb", "ryols", "ryolt", "ryolp", "ryolh", "ryom", "ryob", "ryobs", "ryos", "ryoss", "ryong", "ryoj", "ryoc", "ryok", "ryot", "ryop", "ryoh", "ru", "rug", "rugg", "rugs", "run", "runj", "runh", "rud", "rul", "rulg", "rulm", "rulb", "ruls", "rult", "rulp", "rulh", "rum", "rub", "rubs", "rus", "russ", "rung", "ruj", "ruc"];
const kJ = Object.freeze(YJ);
const LJ = ["ruk", "rut", "rup", "ruh", "rweo", "rweog", "rweogg", "rweogs", "rweon", "rweonj", "rweonh", "rweod", "rweol", "rweolg", "rweolm", "rweolb", "rweols", "rweolt", "rweolp", "rweolh", "rweom", "rweob", "rweobs", "rweos", "rweoss", "rweong", "rweoj", "rweoc", "rweok", "rweot", "rweop", "rweoh", "rwe", "rweg", "rwegg", "rwegs", "rwen", "rwenj", "rwenh", "rwed", "rwel", "rwelg", "rwelm", "rwelb", "rwels", "rwelt", "rwelp", "rwelh", "rwem", "rweb", "rwebs", "rwes", "rwess", "rweng", "rwej", "rwec", "rwek", "rwet", "rwep", "rweh", "rwi", "rwig", "rwigg", "rwigs", "rwin", "rwinj", "rwinh", "rwid", "rwil", "rwilg", "rwilm", "rwilb", "rwils", "rwilt", "rwilp", "rwilh", "rwim", "rwib", "rwibs", "rwis", "rwiss", "rwing", "rwij", "rwic", "rwik", "rwit", "rwip", "rwih", "ryu", "ryug", "ryugg", "ryugs", "ryun", "ryunj", "ryunh", "ryud", "ryul", "ryulg", "ryulm", "ryulb", "ryuls", "ryult", "ryulp", "ryulh", "ryum", "ryub", "ryubs", "ryus", "ryuss", "ryung", "ryuj", "ryuc", "ryuk", "ryut", "ryup", "ryuh", "reu", "reug", "reugg", "reugs", "reun", "reunj", "reunh", "reud", "reul", "reulg", "reulm", "reulb", "reuls", "reult", "reulp", "reulh", "reum", "reub", "reubs", "reus", "reuss", "reung", "reuj", "reuc", "reuk", "reut", "reup", "reuh", "ryi", "ryig", "ryigg", "ryigs", "ryin", "ryinj", "ryinh", "ryid", "ryil", "ryilg", "ryilm", "ryilb", "ryils", "ryilt", "ryilp", "ryilh", "ryim", "ryib", "ryibs", "ryis", "ryiss", "rying", "ryij", "ryic", "ryik", "ryit", "ryip", "ryih", "ri", "rig", "rigg", "rigs", "rin", "rinj", "rinh", "rid", "ril", "rilg", "rilm", "rilb", "rils", "rilt", "rilp", "rilh", "rim", "rib", "ribs", "ris", "riss", "ring", "rij", "ric", "rik", "rit", "rip", "rih", "ma", "mag", "magg", "mags", "man", "manj", "manh", "mad", "mal", "malg", "malm", "malb", "mals", "malt", "malp", "malh", "mam", "mab", "mabs", "mas", "mass", "mang", "maj", "mac", "mak", "mat", "map", "mah", "mae", "maeg", "maegg", "maegs", "maen", "maenj", "maenh", "maed", "mael", "maelg", "maelm", "maelb", "maels", "maelt", "maelp", "maelh", "maem", "maeb", "maebs", "maes", "maess", "maeng", "maej", "maec", "maek", "maet", "maep", "maeh"];
const ZJ = Object.freeze(LJ);
const SJ = ["mya", "myag", "myagg", "myags", "myan", "myanj", "myanh", "myad", "myal", "myalg", "myalm", "myalb", "myals", "myalt", "myalp", "myalh", "myam", "myab", "myabs", "myas", "myass", "myang", "myaj", "myac", "myak", "myat", "myap", "myah", "myae", "myaeg", "myaegg", "myaegs", "myaen", "myaenj", "myaenh", "myaed", "myael", "myaelg", "myaelm", "myaelb", "myaels", "myaelt", "myaelp", "myaelh", "myaem", "myaeb", "myaebs", "myaes", "myaess", "myaeng", "myaej", "myaec", "myaek", "myaet", "myaep", "myaeh", "meo", "meog", "meogg", "meogs", "meon", "meonj", "meonh", "meod", "meol", "meolg", "meolm", "meolb", "meols", "meolt", "meolp", "meolh", "meom", "meob", "meobs", "meos", "meoss", "meong", "meoj", "meoc", "meok", "meot", "meop", "meoh", "me", "meg", "megg", "megs", "men", "menj", "menh", "med", "mel", "melg", "melm", "melb", "mels", "melt", "melp", "melh", "mem", "meb", "mebs", "mes", "mess", "meng", "mej", "mec", "mek", "met", "mep", "meh", "myeo", "myeog", "myeogg", "myeogs", "myeon", "myeonj", "myeonh", "myeod", "myeol", "myeolg", "myeolm", "myeolb", "myeols", "myeolt", "myeolp", "myeolh", "myeom", "myeob", "myeobs", "myeos", "myeoss", "myeong", "myeoj", "myeoc", "myeok", "myeot", "myeop", "myeoh", "mye", "myeg", "myegg", "myegs", "myen", "myenj", "myenh", "myed", "myel", "myelg", "myelm", "myelb", "myels", "myelt", "myelp", "myelh", "myem", "myeb", "myebs", "myes", "myess", "myeng", "myej", "myec", "myek", "myet", "myep", "myeh", "mo", "mog", "mogg", "mogs", "mon", "monj", "monh", "mod", "mol", "molg", "molm", "molb", "mols", "molt", "molp", "molh", "mom", "mob", "mobs", "mos", "moss", "mong", "moj", "moc", "mok", "mot", "mop", "moh", "mwa", "mwag", "mwagg", "mwags", "mwan", "mwanj", "mwanh", "mwad", "mwal", "mwalg", "mwalm", "mwalb", "mwals", "mwalt", "mwalp", "mwalh", "mwam", "mwab", "mwabs", "mwas", "mwass", "mwang", "mwaj", "mwac", "mwak", "mwat", "mwap", "mwah", "mwae", "mwaeg", "mwaegg", "mwaegs", "mwaen", "mwaenj", "mwaenh", "mwaed", "mwael", "mwaelg", "mwaelm", "mwaelb", "mwaels", "mwaelt", "mwaelp", "mwaelh", "mwaem", "mwaeb", "mwaebs", "mwaes", "mwaess", "mwaeng", "mwaej", "mwaec", "mwaek", "mwaet", "mwaep", "mwaeh", "moe", "moeg", "moegg", "moegs"];
const JJ = Object.freeze(SJ);
const CJ = ["moen", "moenj", "moenh", "moed", "moel", "moelg", "moelm", "moelb", "moels", "moelt", "moelp", "moelh", "moem", "moeb", "moebs", "moes", "moess", "moeng", "moej", "moec", "moek", "moet", "moep", "moeh", "myo", "myog", "myogg", "myogs", "myon", "myonj", "myonh", "myod", "myol", "myolg", "myolm", "myolb", "myols", "myolt", "myolp", "myolh", "myom", "myob", "myobs", "myos", "myoss", "myong", "myoj", "myoc", "myok", "myot", "myop", "myoh", "mu", "mug", "mugg", "mugs", "mun", "munj", "munh", "mud", "mul", "mulg", "mulm", "mulb", "muls", "mult", "mulp", "mulh", "mum", "mub", "mubs", "mus", "muss", "mung", "muj", "muc", "muk", "mut", "mup", "muh", "mweo", "mweog", "mweogg", "mweogs", "mweon", "mweonj", "mweonh", "mweod", "mweol", "mweolg", "mweolm", "mweolb", "mweols", "mweolt", "mweolp", "mweolh", "mweom", "mweob", "mweobs", "mweos", "mweoss", "mweong", "mweoj", "mweoc", "mweok", "mweot", "mweop", "mweoh", "mwe", "mweg", "mwegg", "mwegs", "mwen", "mwenj", "mwenh", "mwed", "mwel", "mwelg", "mwelm", "mwelb", "mwels", "mwelt", "mwelp", "mwelh", "mwem", "mweb", "mwebs", "mwes", "mwess", "mweng", "mwej", "mwec", "mwek", "mwet", "mwep", "mweh", "mwi", "mwig", "mwigg", "mwigs", "mwin", "mwinj", "mwinh", "mwid", "mwil", "mwilg", "mwilm", "mwilb", "mwils", "mwilt", "mwilp", "mwilh", "mwim", "mwib", "mwibs", "mwis", "mwiss", "mwing", "mwij", "mwic", "mwik", "mwit", "mwip", "mwih", "myu", "myug", "myugg", "myugs", "myun", "myunj", "myunh", "myud", "myul", "myulg", "myulm", "myulb", "myuls", "myult", "myulp", "myulh", "myum", "myub", "myubs", "myus", "myuss", "myung", "myuj", "myuc", "myuk", "myut", "myup", "myuh", "meu", "meug", "meugg", "meugs", "meun", "meunj", "meunh", "meud", "meul", "meulg", "meulm", "meulb", "meuls", "meult", "meulp", "meulh", "meum", "meub", "meubs", "meus", "meuss", "meung", "meuj", "meuc", "meuk", "meut", "meup", "meuh", "myi", "myig", "myigg", "myigs", "myin", "myinj", "myinh", "myid", "myil", "myilg", "myilm", "myilb", "myils", "myilt", "myilp", "myilh", "myim", "myib", "myibs", "myis", "myiss", "mying", "myij", "myic", "myik", "myit", "myip", "myih", "mi", "mig", "migg", "migs", "min", "minj", "minh", "mid"];
const XJ = Object.freeze(CJ);
const HJ = ["mil", "milg", "milm", "milb", "mils", "milt", "milp", "milh", "mim", "mib", "mibs", "mis", "miss", "ming", "mij", "mic", "mik", "mit", "mip", "mih", "ba", "bag", "bagg", "bags", "ban", "banj", "banh", "bad", "bal", "balg", "balm", "balb", "bals", "balt", "balp", "balh", "bam", "bab", "babs", "bas", "bass", "bang", "baj", "bac", "bak", "bat", "bap", "bah", "bae", "baeg", "baegg", "baegs", "baen", "baenj", "baenh", "baed", "bael", "baelg", "baelm", "baelb", "baels", "baelt", "baelp", "baelh", "baem", "baeb", "baebs", "baes", "baess", "baeng", "baej", "baec", "baek", "baet", "baep", "baeh", "bya", "byag", "byagg", "byags", "byan", "byanj", "byanh", "byad", "byal", "byalg", "byalm", "byalb", "byals", "byalt", "byalp", "byalh", "byam", "byab", "byabs", "byas", "byass", "byang", "byaj", "byac", "byak", "byat", "byap", "byah", "byae", "byaeg", "byaegg", "byaegs", "byaen", "byaenj", "byaenh", "byaed", "byael", "byaelg", "byaelm", "byaelb", "byaels", "byaelt", "byaelp", "byaelh", "byaem", "byaeb", "byaebs", "byaes", "byaess", "byaeng", "byaej", "byaec", "byaek", "byaet", "byaep", "byaeh", "beo", "beog", "beogg", "beogs", "beon", "beonj", "beonh", "beod", "beol", "beolg", "beolm", "beolb", "beols", "beolt", "beolp", "beolh", "beom", "beob", "beobs", "beos", "beoss", "beong", "beoj", "beoc", "beok", "beot", "beop", "beoh", "be", "beg", "begg", "begs", "ben", "benj", "benh", "bed", "bel", "belg", "belm", "belb", "bels", "belt", "belp", "belh", "bem", "beb", "bebs", "bes", "bess", "beng", "bej", "bec", "bek", "bet", "bep", "beh", "byeo", "byeog", "byeogg", "byeogs", "byeon", "byeonj", "byeonh", "byeod", "byeol", "byeolg", "byeolm", "byeolb", "byeols", "byeolt", "byeolp", "byeolh", "byeom", "byeob", "byeobs", "byeos", "byeoss", "byeong", "byeoj", "byeoc", "byeok", "byeot", "byeop", "byeoh", "bye", "byeg", "byegg", "byegs", "byen", "byenj", "byenh", "byed", "byel", "byelg", "byelm", "byelb", "byels", "byelt", "byelp", "byelh", "byem", "byeb", "byebs", "byes", "byess", "byeng", "byej", "byec", "byek", "byet", "byep", "byeh", "bo", "bog", "bogg", "bogs", "bon", "bonj", "bonh", "bod", "bol", "bolg", "bolm", "bolb"];
const BJ = Object.freeze(HJ);
const TJ = ["bols", "bolt", "bolp", "bolh", "bom", "bob", "bobs", "bos", "boss", "bong", "boj", "boc", "bok", "bot", "bop", "boh", "bwa", "bwag", "bwagg", "bwags", "bwan", "bwanj", "bwanh", "bwad", "bwal", "bwalg", "bwalm", "bwalb", "bwals", "bwalt", "bwalp", "bwalh", "bwam", "bwab", "bwabs", "bwas", "bwass", "bwang", "bwaj", "bwac", "bwak", "bwat", "bwap", "bwah", "bwae", "bwaeg", "bwaegg", "bwaegs", "bwaen", "bwaenj", "bwaenh", "bwaed", "bwael", "bwaelg", "bwaelm", "bwaelb", "bwaels", "bwaelt", "bwaelp", "bwaelh", "bwaem", "bwaeb", "bwaebs", "bwaes", "bwaess", "bwaeng", "bwaej", "bwaec", "bwaek", "bwaet", "bwaep", "bwaeh", "boe", "boeg", "boegg", "boegs", "boen", "boenj", "boenh", "boed", "boel", "boelg", "boelm", "boelb", "boels", "boelt", "boelp", "boelh", "boem", "boeb", "boebs", "boes", "boess", "boeng", "boej", "boec", "boek", "boet", "boep", "boeh", "byo", "byog", "byogg", "byogs", "byon", "byonj", "byonh", "byod", "byol", "byolg", "byolm", "byolb", "byols", "byolt", "byolp", "byolh", "byom", "byob", "byobs", "byos", "byoss", "byong", "byoj", "byoc", "byok", "byot", "byop", "byoh", "bu", "bug", "bugg", "bugs", "bun", "bunj", "bunh", "bud", "bul", "bulg", "bulm", "bulb", "buls", "bult", "bulp", "bulh", "bum", "bub", "bubs", "bus", "buss", "bung", "buj", "buc", "buk", "but", "bup", "buh", "bweo", "bweog", "bweogg", "bweogs", "bweon", "bweonj", "bweonh", "bweod", "bweol", "bweolg", "bweolm", "bweolb", "bweols", "bweolt", "bweolp", "bweolh", "bweom", "bweob", "bweobs", "bweos", "bweoss", "bweong", "bweoj", "bweoc", "bweok", "bweot", "bweop", "bweoh", "bwe", "bweg", "bwegg", "bwegs", "bwen", "bwenj", "bwenh", "bwed", "bwel", "bwelg", "bwelm", "bwelb", "bwels", "bwelt", "bwelp", "bwelh", "bwem", "bweb", "bwebs", "bwes", "bwess", "bweng", "bwej", "bwec", "bwek", "bwet", "bwep", "bweh", "bwi", "bwig", "bwigg", "bwigs", "bwin", "bwinj", "bwinh", "bwid", "bwil", "bwilg", "bwilm", "bwilb", "bwils", "bwilt", "bwilp", "bwilh", "bwim", "bwib", "bwibs", "bwis", "bwiss", "bwing", "bwij", "bwic", "bwik", "bwit", "bwip", "bwih", "byu", "byug", "byugg", "byugs", "byun", "byunj", "byunh", "byud", "byul", "byulg", "byulm", "byulb", "byuls", "byult", "byulp", "byulh"];
const DJ = Object.freeze(TJ);
const MJ = ["byum", "byub", "byubs", "byus", "byuss", "byung", "byuj", "byuc", "byuk", "byut", "byup", "byuh", "beu", "beug", "beugg", "beugs", "beun", "beunj", "beunh", "beud", "beul", "beulg", "beulm", "beulb", "beuls", "beult", "beulp", "beulh", "beum", "beub", "beubs", "beus", "beuss", "beung", "beuj", "beuc", "beuk", "beut", "beup", "beuh", "byi", "byig", "byigg", "byigs", "byin", "byinj", "byinh", "byid", "byil", "byilg", "byilm", "byilb", "byils", "byilt", "byilp", "byilh", "byim", "byib", "byibs", "byis", "byiss", "bying", "byij", "byic", "byik", "byit", "byip", "byih", "bi", "big", "bigg", "bigs", "bin", "binj", "binh", "bid", "bil", "bilg", "bilm", "bilb", "bils", "bilt", "bilp", "bilh", "bim", "bib", "bibs", "bis", "biss", "bing", "bij", "bic", "bik", "bit", "bip", "bih", "bba", "bbag", "bbagg", "bbags", "bban", "bbanj", "bbanh", "bbad", "bbal", "bbalg", "bbalm", "bbalb", "bbals", "bbalt", "bbalp", "bbalh", "bbam", "bbab", "bbabs", "bbas", "bbass", "bbang", "bbaj", "bbac", "bbak", "bbat", "bbap", "bbah", "bbae", "bbaeg", "bbaegg", "bbaegs", "bbaen", "bbaenj", "bbaenh", "bbaed", "bbael", "bbaelg", "bbaelm", "bbaelb", "bbaels", "bbaelt", "bbaelp", "bbaelh", "bbaem", "bbaeb", "bbaebs", "bbaes", "bbaess", "bbaeng", "bbaej", "bbaec", "bbaek", "bbaet", "bbaep", "bbaeh", "bbya", "bbyag", "bbyagg", "bbyags", "bbyan", "bbyanj", "bbyanh", "bbyad", "bbyal", "bbyalg", "bbyalm", "bbyalb", "bbyals", "bbyalt", "bbyalp", "bbyalh", "bbyam", "bbyab", "bbyabs", "bbyas", "bbyass", "bbyang", "bbyaj", "bbyac", "bbyak", "bbyat", "bbyap", "bbyah", "bbyae", "bbyaeg", "bbyaegg", "bbyaegs", "bbyaen", "bbyaenj", "bbyaenh", "bbyaed", "bbyael", "bbyaelg", "bbyaelm", "bbyaelb", "bbyaels", "bbyaelt", "bbyaelp", "bbyaelh", "bbyaem", "bbyaeb", "bbyaebs", "bbyaes", "bbyaess", "bbyaeng", "bbyaej", "bbyaec", "bbyaek", "bbyaet", "bbyaep", "bbyaeh", "bbeo", "bbeog", "bbeogg", "bbeogs", "bbeon", "bbeonj", "bbeonh", "bbeod", "bbeol", "bbeolg", "bbeolm", "bbeolb", "bbeols", "bbeolt", "bbeolp", "bbeolh", "bbeom", "bbeob", "bbeobs", "bbeos", "bbeoss", "bbeong", "bbeoj", "bbeoc", "bbeok", "bbeot", "bbeop", "bbeoh", "bbe", "bbeg", "bbegg", "bbegs", "bben", "bbenj", "bbenh", "bbed", "bbel", "bbelg", "bbelm", "bbelb", "bbels", "bbelt", "bbelp", "bbelh", "bbem", "bbeb", "bbebs", "bbes"];
const QJ = Object.freeze(MJ);
const xJ = ["bbess", "bbeng", "bbej", "bbec", "bbek", "bbet", "bbep", "bbeh", "bbyeo", "bbyeog", "bbyeogg", "bbyeogs", "bbyeon", "bbyeonj", "bbyeonh", "bbyeod", "bbyeol", "bbyeolg", "bbyeolm", "bbyeolb", "bbyeols", "bbyeolt", "bbyeolp", "bbyeolh", "bbyeom", "bbyeob", "bbyeobs", "bbyeos", "bbyeoss", "bbyeong", "bbyeoj", "bbyeoc", "bbyeok", "bbyeot", "bbyeop", "bbyeoh", "bbye", "bbyeg", "bbyegg", "bbyegs", "bbyen", "bbyenj", "bbyenh", "bbyed", "bbyel", "bbyelg", "bbyelm", "bbyelb", "bbyels", "bbyelt", "bbyelp", "bbyelh", "bbyem", "bbyeb", "bbyebs", "bbyes", "bbyess", "bbyeng", "bbyej", "bbyec", "bbyek", "bbyet", "bbyep", "bbyeh", "bbo", "bbog", "bbogg", "bbogs", "bbon", "bbonj", "bbonh", "bbod", "bbol", "bbolg", "bbolm", "bbolb", "bbols", "bbolt", "bbolp", "bbolh", "bbom", "bbob", "bbobs", "bbos", "bboss", "bbong", "bboj", "bboc", "bbok", "bbot", "bbop", "bboh", "bbwa", "bbwag", "bbwagg", "bbwags", "bbwan", "bbwanj", "bbwanh", "bbwad", "bbwal", "bbwalg", "bbwalm", "bbwalb", "bbwals", "bbwalt", "bbwalp", "bbwalh", "bbwam", "bbwab", "bbwabs", "bbwas", "bbwass", "bbwang", "bbwaj", "bbwac", "bbwak", "bbwat", "bbwap", "bbwah", "bbwae", "bbwaeg", "bbwaegg", "bbwaegs", "bbwaen", "bbwaenj", "bbwaenh", "bbwaed", "bbwael", "bbwaelg", "bbwaelm", "bbwaelb", "bbwaels", "bbwaelt", "bbwaelp", "bbwaelh", "bbwaem", "bbwaeb", "bbwaebs", "bbwaes", "bbwaess", "bbwaeng", "bbwaej", "bbwaec", "bbwaek", "bbwaet", "bbwaep", "bbwaeh", "bboe", "bboeg", "bboegg", "bboegs", "bboen", "bboenj", "bboenh", "bboed", "bboel", "bboelg", "bboelm", "bboelb", "bboels", "bboelt", "bboelp", "bboelh", "bboem", "bboeb", "bboebs", "bboes", "bboess", "bboeng", "bboej", "bboec", "bboek", "bboet", "bboep", "bboeh", "bbyo", "bbyog", "bbyogg", "bbyogs", "bbyon", "bbyonj", "bbyonh", "bbyod", "bbyol", "bbyolg", "bbyolm", "bbyolb", "bbyols", "bbyolt", "bbyolp", "bbyolh", "bbyom", "bbyob", "bbyobs", "bbyos", "bbyoss", "bbyong", "bbyoj", "bbyoc", "bbyok", "bbyot", "bbyop", "bbyoh", "bbu", "bbug", "bbugg", "bbugs", "bbun", "bbunj", "bbunh", "bbud", "bbul", "bbulg", "bbulm", "bbulb", "bbuls", "bbult", "bbulp", "bbulh", "bbum", "bbub", "bbubs", "bbus", "bbuss", "bbung", "bbuj", "bbuc", "bbuk", "bbut", "bbup", "bbuh", "bbweo", "bbweog", "bbweogg", "bbweogs", "bbweon", "bbweonj", "bbweonh", "bbweod", "bbweol", "bbweolg", "bbweolm", "bbweolb", "bbweols", "bbweolt", "bbweolp", "bbweolh", "bbweom", "bbweob", "bbweobs", "bbweos", "bbweoss", "bbweong", "bbweoj", "bbweoc"];
const GJ = Object.freeze(xJ);
const WJ = ["bbweok", "bbweot", "bbweop", "bbweoh", "bbwe", "bbweg", "bbwegg", "bbwegs", "bbwen", "bbwenj", "bbwenh", "bbwed", "bbwel", "bbwelg", "bbwelm", "bbwelb", "bbwels", "bbwelt", "bbwelp", "bbwelh", "bbwem", "bbweb", "bbwebs", "bbwes", "bbwess", "bbweng", "bbwej", "bbwec", "bbwek", "bbwet", "bbwep", "bbweh", "bbwi", "bbwig", "bbwigg", "bbwigs", "bbwin", "bbwinj", "bbwinh", "bbwid", "bbwil", "bbwilg", "bbwilm", "bbwilb", "bbwils", "bbwilt", "bbwilp", "bbwilh", "bbwim", "bbwib", "bbwibs", "bbwis", "bbwiss", "bbwing", "bbwij", "bbwic", "bbwik", "bbwit", "bbwip", "bbwih", "bbyu", "bbyug", "bbyugg", "bbyugs", "bbyun", "bbyunj", "bbyunh", "bbyud", "bbyul", "bbyulg", "bbyulm", "bbyulb", "bbyuls", "bbyult", "bbyulp", "bbyulh", "bbyum", "bbyub", "bbyubs", "bbyus", "bbyuss", "bbyung", "bbyuj", "bbyuc", "bbyuk", "bbyut", "bbyup", "bbyuh", "bbeu", "bbeug", "bbeugg", "bbeugs", "bbeun", "bbeunj", "bbeunh", "bbeud", "bbeul", "bbeulg", "bbeulm", "bbeulb", "bbeuls", "bbeult", "bbeulp", "bbeulh", "bbeum", "bbeub", "bbeubs", "bbeus", "bbeuss", "bbeung", "bbeuj", "bbeuc", "bbeuk", "bbeut", "bbeup", "bbeuh", "bbyi", "bbyig", "bbyigg", "bbyigs", "bbyin", "bbyinj", "bbyinh", "bbyid", "bbyil", "bbyilg", "bbyilm", "bbyilb", "bbyils", "bbyilt", "bbyilp", "bbyilh", "bbyim", "bbyib", "bbyibs", "bbyis", "bbyiss", "bbying", "bbyij", "bbyic", "bbyik", "bbyit", "bbyip", "bbyih", "bbi", "bbig", "bbigg", "bbigs", "bbin", "bbinj", "bbinh", "bbid", "bbil", "bbilg", "bbilm", "bbilb", "bbils", "bbilt", "bbilp", "bbilh", "bbim", "bbib", "bbibs", "bbis", "bbiss", "bbing", "bbij", "bbic", "bbik", "bbit", "bbip", "bbih", "sa", "sag", "sagg", "sags", "san", "sanj", "sanh", "sad", "sal", "salg", "salm", "salb", "sals", "salt", "salp", "salh", "sam", "sab", "sabs", "sas", "sass", "sang", "saj", "sac", "sak", "sat", "sap", "sah", "sae", "saeg", "saegg", "saegs", "saen", "saenj", "saenh", "saed", "sael", "saelg", "saelm", "saelb", "saels", "saelt", "saelp", "saelh", "saem", "saeb", "saebs", "saes", "saess", "saeng", "saej", "saec", "saek", "saet", "saep", "saeh", "sya", "syag", "syagg", "syags", "syan", "syanj", "syanh", "syad", "syal", "syalg", "syalm", "syalb", "syals", "syalt", "syalp", "syalh", "syam", "syab", "syabs", "syas", "syass", "syang", "syaj", "syac", "syak", "syat", "syap", "syah"];
const NJ = Object.freeze(WJ);
const PJ = ["syae", "syaeg", "syaegg", "syaegs", "syaen", "syaenj", "syaenh", "syaed", "syael", "syaelg", "syaelm", "syaelb", "syaels", "syaelt", "syaelp", "syaelh", "syaem", "syaeb", "syaebs", "syaes", "syaess", "syaeng", "syaej", "syaec", "syaek", "syaet", "syaep", "syaeh", "seo", "seog", "seogg", "seogs", "seon", "seonj", "seonh", "seod", "seol", "seolg", "seolm", "seolb", "seols", "seolt", "seolp", "seolh", "seom", "seob", "seobs", "seos", "seoss", "seong", "seoj", "seoc", "seok", "seot", "seop", "seoh", "se", "seg", "segg", "segs", "sen", "senj", "senh", "sed", "sel", "selg", "selm", "selb", "sels", "selt", "selp", "selh", "sem", "seb", "sebs", "ses", "sess", "seng", "sej", "sec", "sek", "set", "sep", "seh", "syeo", "syeog", "syeogg", "syeogs", "syeon", "syeonj", "syeonh", "syeod", "syeol", "syeolg", "syeolm", "syeolb", "syeols", "syeolt", "syeolp", "syeolh", "syeom", "syeob", "syeobs", "syeos", "syeoss", "syeong", "syeoj", "syeoc", "syeok", "syeot", "syeop", "syeoh", "sye", "syeg", "syegg", "syegs", "syen", "syenj", "syenh", "syed", "syel", "syelg", "syelm", "syelb", "syels", "syelt", "syelp", "syelh", "syem", "syeb", "syebs", "syes", "syess", "syeng", "syej", "syec", "syek", "syet", "syep", "syeh", "so", "sog", "sogg", "sogs", "son", "sonj", "sonh", "sod", "sol", "solg", "solm", "solb", "sols", "solt", "solp", "solh", "som", "sob", "sobs", "sos", "soss", "song", "soj", "soc", "sok", "sot", "sop", "soh", "swa", "swag", "swagg", "swags", "swan", "swanj", "swanh", "swad", "swal", "swalg", "swalm", "swalb", "swals", "swalt", "swalp", "swalh", "swam", "swab", "swabs", "swas", "swass", "swang", "swaj", "swac", "swak", "swat", "swap", "swah", "swae", "swaeg", "swaegg", "swaegs", "swaen", "swaenj", "swaenh", "swaed", "swael", "swaelg", "swaelm", "swaelb", "swaels", "swaelt", "swaelp", "swaelh", "swaem", "swaeb", "swaebs", "swaes", "swaess", "swaeng", "swaej", "swaec", "swaek", "swaet", "swaep", "swaeh", "soe", "soeg", "soegg", "soegs", "soen", "soenj", "soenh", "soed", "soel", "soelg", "soelm", "soelb", "soels", "soelt", "soelp", "soelh", "soem", "soeb", "soebs", "soes", "soess", "soeng", "soej", "soec", "soek", "soet", "soep", "soeh", "syo", "syog", "syogg", "syogs"];
const FJ = Object.freeze(PJ);
const RJ = ["syon", "syonj", "syonh", "syod", "syol", "syolg", "syolm", "syolb", "syols", "syolt", "syolp", "syolh", "syom", "syob", "syobs", "syos", "syoss", "syong", "syoj", "syoc", "syok", "syot", "syop", "syoh", "su", "sug", "sugg", "sugs", "sun", "sunj", "sunh", "sud", "sul", "sulg", "sulm", "sulb", "suls", "sult", "sulp", "sulh", "sum", "sub", "subs", "sus", "suss", "sung", "suj", "suc", "suk", "sut", "sup", "suh", "sweo", "sweog", "sweogg", "sweogs", "sweon", "sweonj", "sweonh", "sweod", "sweol", "sweolg", "sweolm", "sweolb", "sweols", "sweolt", "sweolp", "sweolh", "sweom", "sweob", "sweobs", "sweos", "sweoss", "sweong", "sweoj", "sweoc", "sweok", "sweot", "sweop", "sweoh", "swe", "sweg", "swegg", "swegs", "swen", "swenj", "swenh", "swed", "swel", "swelg", "swelm", "swelb", "swels", "swelt", "swelp", "swelh", "swem", "sweb", "swebs", "swes", "swess", "sweng", "swej", "swec", "swek", "swet", "swep", "sweh", "swi", "swig", "swigg", "swigs", "swin", "swinj", "swinh", "swid", "swil", "swilg", "swilm", "swilb", "swils", "swilt", "swilp", "swilh", "swim", "swib", "swibs", "swis", "swiss", "swing", "swij", "swic", "swik", "swit", "swip", "swih", "syu", "syug", "syugg", "syugs", "syun", "syunj", "syunh", "syud", "syul", "syulg", "syulm", "syulb", "syuls", "syult", "syulp", "syulh", "syum", "syub", "syubs", "syus", "syuss", "syung", "syuj", "syuc", "syuk", "syut", "syup", "syuh", "seu", "seug", "seugg", "seugs", "seun", "seunj", "seunh", "seud", "seul", "seulg", "seulm", "seulb", "seuls", "seult", "seulp", "seulh", "seum", "seub", "seubs", "seus", "seuss", "seung", "seuj", "seuc", "seuk", "seut", "seup", "seuh", "syi", "syig", "syigg", "syigs", "syin", "syinj", "syinh", "syid", "syil", "syilg", "syilm", "syilb", "syils", "syilt", "syilp", "syilh", "syim", "syib", "syibs", "syis", "syiss", "sying", "syij", "syic", "syik", "syit", "syip", "syih", "si", "sig", "sigg", "sigs", "sin", "sinj", "sinh", "sid", "sil", "silg", "silm", "silb", "sils", "silt", "silp", "silh", "sim", "sib", "sibs", "sis", "siss", "sing", "sij", "sic", "sik", "sit", "sip", "sih", "ssa", "ssag", "ssagg", "ssags", "ssan", "ssanj", "ssanh", "ssad"];
const KJ = Object.freeze(RJ);
const AJ = ["ssal", "ssalg", "ssalm", "ssalb", "ssals", "ssalt", "ssalp", "ssalh", "ssam", "ssab", "ssabs", "ssas", "ssass", "ssang", "ssaj", "ssac", "ssak", "ssat", "ssap", "ssah", "ssae", "ssaeg", "ssaegg", "ssaegs", "ssaen", "ssaenj", "ssaenh", "ssaed", "ssael", "ssaelg", "ssaelm", "ssaelb", "ssaels", "ssaelt", "ssaelp", "ssaelh", "ssaem", "ssaeb", "ssaebs", "ssaes", "ssaess", "ssaeng", "ssaej", "ssaec", "ssaek", "ssaet", "ssaep", "ssaeh", "ssya", "ssyag", "ssyagg", "ssyags", "ssyan", "ssyanj", "ssyanh", "ssyad", "ssyal", "ssyalg", "ssyalm", "ssyalb", "ssyals", "ssyalt", "ssyalp", "ssyalh", "ssyam", "ssyab", "ssyabs", "ssyas", "ssyass", "ssyang", "ssyaj", "ssyac", "ssyak", "ssyat", "ssyap", "ssyah", "ssyae", "ssyaeg", "ssyaegg", "ssyaegs", "ssyaen", "ssyaenj", "ssyaenh", "ssyaed", "ssyael", "ssyaelg", "ssyaelm", "ssyaelb", "ssyaels", "ssyaelt", "ssyaelp", "ssyaelh", "ssyaem", "ssyaeb", "ssyaebs", "ssyaes", "ssyaess", "ssyaeng", "ssyaej", "ssyaec", "ssyaek", "ssyaet", "ssyaep", "ssyaeh", "sseo", "sseog", "sseogg", "sseogs", "sseon", "sseonj", "sseonh", "sseod", "sseol", "sseolg", "sseolm", "sseolb", "sseols", "sseolt", "sseolp", "sseolh", "sseom", "sseob", "sseobs", "sseos", "sseoss", "sseong", "sseoj", "sseoc", "sseok", "sseot", "sseop", "sseoh", "sse", "sseg", "ssegg", "ssegs", "ssen", "ssenj", "ssenh", "ssed", "ssel", "sselg", "sselm", "sselb", "ssels", "sselt", "sselp", "sselh", "ssem", "sseb", "ssebs", "sses", "ssess", "sseng", "ssej", "ssec", "ssek", "sset", "ssep", "sseh", "ssyeo", "ssyeog", "ssyeogg", "ssyeogs", "ssyeon", "ssyeonj", "ssyeonh", "ssyeod", "ssyeol", "ssyeolg", "ssyeolm", "ssyeolb", "ssyeols", "ssyeolt", "ssyeolp", "ssyeolh", "ssyeom", "ssyeob", "ssyeobs", "ssyeos", "ssyeoss", "ssyeong", "ssyeoj", "ssyeoc", "ssyeok", "ssyeot", "ssyeop", "ssyeoh", "ssye", "ssyeg", "ssyegg", "ssyegs", "ssyen", "ssyenj", "ssyenh", "ssyed", "ssyel", "ssyelg", "ssyelm", "ssyelb", "ssyels", "ssyelt", "ssyelp", "ssyelh", "ssyem", "ssyeb", "ssyebs", "ssyes", "ssyess", "ssyeng", "ssyej", "ssyec", "ssyek", "ssyet", "ssyep", "ssyeh", "sso", "ssog", "ssogg", "ssogs", "sson", "ssonj", "ssonh", "ssod", "ssol", "ssolg", "ssolm", "ssolb", "ssols", "ssolt", "ssolp", "ssolh", "ssom", "ssob", "ssobs", "ssos", "ssoss", "ssong", "ssoj", "ssoc", "ssok", "ssot", "ssop", "ssoh", "sswa", "sswag", "sswagg", "sswags", "sswan", "sswanj", "sswanh", "sswad", "sswal", "sswalg", "sswalm", "sswalb"];
const OJ = Object.freeze(AJ);
const _J = ["sswals", "sswalt", "sswalp", "sswalh", "sswam", "sswab", "sswabs", "sswas", "sswass", "sswang", "sswaj", "sswac", "sswak", "sswat", "sswap", "sswah", "sswae", "sswaeg", "sswaegg", "sswaegs", "sswaen", "sswaenj", "sswaenh", "sswaed", "sswael", "sswaelg", "sswaelm", "sswaelb", "sswaels", "sswaelt", "sswaelp", "sswaelh", "sswaem", "sswaeb", "sswaebs", "sswaes", "sswaess", "sswaeng", "sswaej", "sswaec", "sswaek", "sswaet", "sswaep", "sswaeh", "ssoe", "ssoeg", "ssoegg", "ssoegs", "ssoen", "ssoenj", "ssoenh", "ssoed", "ssoel", "ssoelg", "ssoelm", "ssoelb", "ssoels", "ssoelt", "ssoelp", "ssoelh", "ssoem", "ssoeb", "ssoebs", "ssoes", "ssoess", "ssoeng", "ssoej", "ssoec", "ssoek", "ssoet", "ssoep", "ssoeh", "ssyo", "ssyog", "ssyogg", "ssyogs", "ssyon", "ssyonj", "ssyonh", "ssyod", "ssyol", "ssyolg", "ssyolm", "ssyolb", "ssyols", "ssyolt", "ssyolp", "ssyolh", "ssyom", "ssyob", "ssyobs", "ssyos", "ssyoss", "ssyong", "ssyoj", "ssyoc", "ssyok", "ssyot", "ssyop", "ssyoh", "ssu", "ssug", "ssugg", "ssugs", "ssun", "ssunj", "ssunh", "ssud", "ssul", "ssulg", "ssulm", "ssulb", "ssuls", "ssult", "ssulp", "ssulh", "ssum", "ssub", "ssubs", "ssus", "ssuss", "ssung", "ssuj", "ssuc", "ssuk", "ssut", "ssup", "ssuh", "ssweo", "ssweog", "ssweogg", "ssweogs", "ssweon", "ssweonj", "ssweonh", "ssweod", "ssweol", "ssweolg", "ssweolm", "ssweolb", "ssweols", "ssweolt", "ssweolp", "ssweolh", "ssweom", "ssweob", "ssweobs", "ssweos", "ssweoss", "ssweong", "ssweoj", "ssweoc", "ssweok", "ssweot", "ssweop", "ssweoh", "sswe", "ssweg", "sswegg", "sswegs", "sswen", "sswenj", "sswenh", "sswed", "sswel", "sswelg", "sswelm", "sswelb", "sswels", "sswelt", "sswelp", "sswelh", "sswem", "ssweb", "sswebs", "sswes", "sswess", "ssweng", "sswej", "sswec", "sswek", "sswet", "sswep", "ssweh", "sswi", "sswig", "sswigg", "sswigs", "sswin", "sswinj", "sswinh", "sswid", "sswil", "sswilg", "sswilm", "sswilb", "sswils", "sswilt", "sswilp", "sswilh", "sswim", "sswib", "sswibs", "sswis", "sswiss", "sswing", "sswij", "sswic", "sswik", "sswit", "sswip", "sswih", "ssyu", "ssyug", "ssyugg", "ssyugs", "ssyun", "ssyunj", "ssyunh", "ssyud", "ssyul", "ssyulg", "ssyulm", "ssyulb", "ssyuls", "ssyult", "ssyulp", "ssyulh", "ssyum", "ssyub", "ssyubs", "ssyus", "ssyuss", "ssyung", "ssyuj", "ssyuc", "ssyuk", "ssyut", "ssyup", "ssyuh", "sseu", "sseug", "sseugg", "sseugs", "sseun", "sseunj", "sseunh", "sseud", "sseul", "sseulg", "sseulm", "sseulb", "sseuls", "sseult", "sseulp", "sseulh"];
const EJ = Object.freeze(_J);
const zJ = ["sseum", "sseub", "sseubs", "sseus", "sseuss", "sseung", "sseuj", "sseuc", "sseuk", "sseut", "sseup", "sseuh", "ssyi", "ssyig", "ssyigg", "ssyigs", "ssyin", "ssyinj", "ssyinh", "ssyid", "ssyil", "ssyilg", "ssyilm", "ssyilb", "ssyils", "ssyilt", "ssyilp", "ssyilh", "ssyim", "ssyib", "ssyibs", "ssyis", "ssyiss", "ssying", "ssyij", "ssyic", "ssyik", "ssyit", "ssyip", "ssyih", "ssi", "ssig", "ssigg", "ssigs", "ssin", "ssinj", "ssinh", "ssid", "ssil", "ssilg", "ssilm", "ssilb", "ssils", "ssilt", "ssilp", "ssilh", "ssim", "ssib", "ssibs", "ssis", "ssiss", "ssing", "ssij", "ssic", "ssik", "ssit", "ssip", "ssih", "a", "ag", "agg", "ags", "an", "anj", "anh", "ad", "al", "alg", "alm", "alb", "als", "alt", "alp", "alh", "am", "ab", "abs", "as", "ass", "ang", "aj", "ac", "ak", "at", "ap", "ah", "ae", "aeg", "aegg", "aegs", "aen", "aenj", "aenh", "aed", "ael", "aelg", "aelm", "aelb", "aels", "aelt", "aelp", "aelh", "aem", "aeb", "aebs", "aes", "aess", "aeng", "aej", "aec", "aek", "aet", "aep", "aeh", "ya", "yag", "yagg", "yags", "yan", "yanj", "yanh", "yad", "yal", "yalg", "yalm", "yalb", "yals", "yalt", "yalp", "yalh", "yam", "yab", "yabs", "yas", "yass", "yang", "yaj", "yac", "yak", "yat", "yap", "yah", "yae", "yaeg", "yaegg", "yaegs", "yaen", "yaenj", "yaenh", "yaed", "yael", "yaelg", "yaelm", "yaelb", "yaels", "yaelt", "yaelp", "yaelh", "yaem", "yaeb", "yaebs", "yaes", "yaess", "yaeng", "yaej", "yaec", "yaek", "yaet", "yaep", "yaeh", "eo", "eog", "eogg", "eogs", "eon", "eonj", "eonh", "eod", "eol", "eolg", "eolm", "eolb", "eols", "eolt", "eolp", "eolh", "eom", "eob", "eobs", "eos", "eoss", "eong", "eoj", "eoc", "eok", "eot", "eop", "eoh", "e", "eg", "egg", "egs", "en", "enj", "enh", "ed", "el", "elg", "elm", "elb", "els", "elt", "elp", "elh", "em", "eb", "ebs", "es", "ess", "eng", "ej", "ec", "ek", "et", "ep", "eh", "yeo", "yeog", "yeogg", "yeogs", "yeon", "yeonj", "yeonh", "yeod", "yeol", "yeolg", "yeolm", "yeolb", "yeols", "yeolt", "yeolp", "yeolh", "yeom", "yeob", "yeobs", "yeos"];
const $J = Object.freeze(zJ);
const IJ = ["yeoss", "yeong", "yeoj", "yeoc", "yeok", "yeot", "yeop", "yeoh", "ye", "yeg", "yegg", "yegs", "yen", "yenj", "yenh", "yed", "yel", "yelg", "yelm", "yelb", "yels", "yelt", "yelp", "yelh", "yem", "yeb", "yebs", "yes", "yess", "yeng", "yej", "yec", "yek", "yet", "yep", "yeh", "o", "og", "ogg", "ogs", "on", "onj", "onh", "od", "ol", "olg", "olm", "olb", "ols", "olt", "olp", "olh", "om", "ob", "obs", "os", "oss", "ong", "oj", "oc", "ok", "ot", "op", "oh", "wa", "wag", "wagg", "wags", "wan", "wanj", "wanh", "wad", "wal", "walg", "walm", "walb", "wals", "walt", "walp", "walh", "wam", "wab", "wabs", "was", "wass", "wang", "waj", "wac", "wak", "wat", "wap", "wah", "wae", "waeg", "waegg", "waegs", "waen", "waenj", "waenh", "waed", "wael", "waelg", "waelm", "waelb", "waels", "waelt", "waelp", "waelh", "waem", "waeb", "waebs", "waes", "waess", "waeng", "waej", "waec", "waek", "waet", "waep", "waeh", "oe", "oeg", "oegg", "oegs", "oen", "oenj", "oenh", "oed", "oel", "oelg", "oelm", "oelb", "oels", "oelt", "oelp", "oelh", "oem", "oeb", "oebs", "oes", "oess", "oeng", "oej", "oec", "oek", "oet", "oep", "oeh", "yo", "yog", "yogg", "yogs", "yon", "yonj", "yonh", "yod", "yol", "yolg", "yolm", "yolb", "yols", "yolt", "yolp", "yolh", "yom", "yob", "yobs", "yos", "yoss", "yong", "yoj", "yoc", "yok", "yot", "yop", "yoh", "u", "ug", "ugg", "ugs", "un", "unj", "unh", "ud", "ul", "ulg", "ulm", "ulb", "uls", "ult", "ulp", "ulh", "um", "ub", "ubs", "us", "uss", "ung", "uj", "uc", "uk", "ut", "up", "uh", "weo", "weog", "weogg", "weogs", "weon", "weonj", "weonh", "weod", "weol", "weolg", "weolm", "weolb", "weols", "weolt", "weolp", "weolh", "weom", "weob", "weobs", "weos", "weoss", "weong", "weoj", "weoc", "weok", "weot", "weop", "weoh", "we", "weg", "wegg", "wegs", "wen", "wenj", "wenh", "wed", "wel", "welg", "welm", "welb", "wels", "welt", "welp", "welh", "wem", "web", "webs", "wes", "wess", "weng", "wej", "wec"];
const qJ = Object.freeze(IJ);
const UJ = ["wek", "wet", "wep", "weh", "wi", "wig", "wigg", "wigs", "win", "winj", "winh", "wid", "wil", "wilg", "wilm", "wilb", "wils", "wilt", "wilp", "wilh", "wim", "wib", "wibs", "wis", "wiss", "wing", "wij", "wic", "wik", "wit", "wip", "wih", "yu", "yug", "yugg", "yugs", "yun", "yunj", "yunh", "yud", "yul", "yulg", "yulm", "yulb", "yuls", "yult", "yulp", "yulh", "yum", "yub", "yubs", "yus", "yuss", "yung", "yuj", "yuc", "yuk", "yut", "yup", "yuh", "eu", "eug", "eugg", "eugs", "eun", "eunj", "eunh", "eud", "eul", "eulg", "eulm", "eulb", "euls", "eult", "eulp", "eulh", "eum", "eub", "eubs", "eus", "euss", "eung", "euj", "euc", "euk", "eut", "eup", "euh", "yi", "yig", "yigg", "yigs", "yin", "yinj", "yinh", "yid", "yil", "yilg", "yilm", "yilb", "yils", "yilt", "yilp", "yilh", "yim", "yib", "yibs", "yis", "yiss", "ying", "yij", "yic", "yik", "yit", "yip", "yih", "i", "ig", "igg", "igs", "in", "inj", "inh", "id", "il", "ilg", "ilm", "ilb", "ils", "ilt", "ilp", "ilh", "im", "ib", "ibs", "is", "iss", "ing", "ij", "ic", "ik", "it", "ip", "ih", "ja", "jag", "jagg", "jags", "jan", "janj", "janh", "jad", "jal", "jalg", "jalm", "jalb", "jals", "jalt", "jalp", "jalh", "jam", "jab", "jabs", "jas", "jass", "jang", "jaj", "jac", "jak", "jat", "jap", "jah", "jae", "jaeg", "jaegg", "jaegs", "jaen", "jaenj", "jaenh", "jaed", "jael", "jaelg", "jaelm", "jaelb", "jaels", "jaelt", "jaelp", "jaelh", "jaem", "jaeb", "jaebs", "jaes", "jaess", "jaeng", "jaej", "jaec", "jaek", "jaet", "jaep", "jaeh", "jya", "jyag", "jyagg", "jyags", "jyan", "jyanj", "jyanh", "jyad", "jyal", "jyalg", "jyalm", "jyalb", "jyals", "jyalt", "jyalp", "jyalh", "jyam", "jyab", "jyabs", "jyas", "jyass", "jyang", "jyaj", "jyac", "jyak", "jyat", "jyap", "jyah", "jyae", "jyaeg", "jyaegg", "jyaegs", "jyaen", "jyaenj", "jyaenh", "jyaed", "jyael", "jyaelg", "jyaelm", "jyaelb", "jyaels", "jyaelt", "jyaelp", "jyaelh", "jyaem", "jyaeb", "jyaebs", "jyaes", "jyaess", "jyaeng", "jyaej", "jyaec", "jyaek", "jyaet", "jyaep", "jyaeh"];
const VJ = Object.freeze(UJ);
const iC = ["jeo", "jeog", "jeogg", "jeogs", "jeon", "jeonj", "jeonh", "jeod", "jeol", "jeolg", "jeolm", "jeolb", "jeols", "jeolt", "jeolp", "jeolh", "jeom", "jeob", "jeobs", "jeos", "jeoss", "jeong", "jeoj", "jeoc", "jeok", "jeot", "jeop", "jeoh", "je", "jeg", "jegg", "jegs", "jen", "jenj", "jenh", "jed", "jel", "jelg", "jelm", "jelb", "jels", "jelt", "jelp", "jelh", "jem", "jeb", "jebs", "jes", "jess", "jeng", "jej", "jec", "jek", "jet", "jep", "jeh", "jyeo", "jyeog", "jyeogg", "jyeogs", "jyeon", "jyeonj", "jyeonh", "jyeod", "jyeol", "jyeolg", "jyeolm", "jyeolb", "jyeols", "jyeolt", "jyeolp", "jyeolh", "jyeom", "jyeob", "jyeobs", "jyeos", "jyeoss", "jyeong", "jyeoj", "jyeoc", "jyeok", "jyeot", "jyeop", "jyeoh", "jye", "jyeg", "jyegg", "jyegs", "jyen", "jyenj", "jyenh", "jyed", "jyel", "jyelg", "jyelm", "jyelb", "jyels", "jyelt", "jyelp", "jyelh", "jyem", "jyeb", "jyebs", "jyes", "jyess", "jyeng", "jyej", "jyec", "jyek", "jyet", "jyep", "jyeh", "jo", "jog", "jogg", "jogs", "jon", "jonj", "jonh", "jod", "jol", "jolg", "jolm", "jolb", "jols", "jolt", "jolp", "jolh", "jom", "job", "jobs", "jos", "joss", "jong", "joj", "joc", "jok", "jot", "jop", "joh", "jwa", "jwag", "jwagg", "jwags", "jwan", "jwanj", "jwanh", "jwad", "jwal", "jwalg", "jwalm", "jwalb", "jwals", "jwalt", "jwalp", "jwalh", "jwam", "jwab", "jwabs", "jwas", "jwass", "jwang", "jwaj", "jwac", "jwak", "jwat", "jwap", "jwah", "jwae", "jwaeg", "jwaegg", "jwaegs", "jwaen", "jwaenj", "jwaenh", "jwaed", "jwael", "jwaelg", "jwaelm", "jwaelb", "jwaels", "jwaelt", "jwaelp", "jwaelh", "jwaem", "jwaeb", "jwaebs", "jwaes", "jwaess", "jwaeng", "jwaej", "jwaec", "jwaek", "jwaet", "jwaep", "jwaeh", "joe", "joeg", "joegg", "joegs", "joen", "joenj", "joenh", "joed", "joel", "joelg", "joelm", "joelb", "joels", "joelt", "joelp", "joelh", "joem", "joeb", "joebs", "joes", "joess", "joeng", "joej", "joec", "joek", "joet", "joep", "joeh", "jyo", "jyog", "jyogg", "jyogs", "jyon", "jyonj", "jyonh", "jyod", "jyol", "jyolg", "jyolm", "jyolb", "jyols", "jyolt", "jyolp", "jyolh", "jyom", "jyob", "jyobs", "jyos", "jyoss", "jyong", "jyoj", "jyoc", "jyok", "jyot", "jyop", "jyoh", "ju", "jug", "jugg", "jugs"];
const oC = Object.freeze(iC);
const eC = ["jun", "junj", "junh", "jud", "jul", "julg", "julm", "julb", "juls", "jult", "julp", "julh", "jum", "jub", "jubs", "jus", "juss", "jung", "juj", "juc", "juk", "jut", "jup", "juh", "jweo", "jweog", "jweogg", "jweogs", "jweon", "jweonj", "jweonh", "jweod", "jweol", "jweolg", "jweolm", "jweolb", "jweols", "jweolt", "jweolp", "jweolh", "jweom", "jweob", "jweobs", "jweos", "jweoss", "jweong", "jweoj", "jweoc", "jweok", "jweot", "jweop", "jweoh", "jwe", "jweg", "jwegg", "jwegs", "jwen", "jwenj", "jwenh", "jwed", "jwel", "jwelg", "jwelm", "jwelb", "jwels", "jwelt", "jwelp", "jwelh", "jwem", "jweb", "jwebs", "jwes", "jwess", "jweng", "jwej", "jwec", "jwek", "jwet", "jwep", "jweh", "jwi", "jwig", "jwigg", "jwigs", "jwin", "jwinj", "jwinh", "jwid", "jwil", "jwilg", "jwilm", "jwilb", "jwils", "jwilt", "jwilp", "jwilh", "jwim", "jwib", "jwibs", "jwis", "jwiss", "jwing", "jwij", "jwic", "jwik", "jwit", "jwip", "jwih", "jyu", "jyug", "jyugg", "jyugs", "jyun", "jyunj", "jyunh", "jyud", "jyul", "jyulg", "jyulm", "jyulb", "jyuls", "jyult", "jyulp", "jyulh", "jyum", "jyub", "jyubs", "jyus", "jyuss", "jyung", "jyuj", "jyuc", "jyuk", "jyut", "jyup", "jyuh", "jeu", "jeug", "jeugg", "jeugs", "jeun", "jeunj", "jeunh", "jeud", "jeul", "jeulg", "jeulm", "jeulb", "jeuls", "jeult", "jeulp", "jeulh", "jeum", "jeub", "jeubs", "jeus", "jeuss", "jeung", "jeuj", "jeuc", "jeuk", "jeut", "jeup", "jeuh", "jyi", "jyig", "jyigg", "jyigs", "jyin", "jyinj", "jyinh", "jyid", "jyil", "jyilg", "jyilm", "jyilb", "jyils", "jyilt", "jyilp", "jyilh", "jyim", "jyib", "jyibs", "jyis", "jyiss", "jying", "jyij", "jyic", "jyik", "jyit", "jyip", "jyih", "ji", "jig", "jigg", "jigs", "jin", "jinj", "jinh", "jid", "jil", "jilg", "jilm", "jilb", "jils", "jilt", "jilp", "jilh", "jim", "jib", "jibs", "jis", "jiss", "jing", "jij", "jic", "jik", "jit", "jip", "jih", "jja", "jjag", "jjagg", "jjags", "jjan", "jjanj", "jjanh", "jjad", "jjal", "jjalg", "jjalm", "jjalb", "jjals", "jjalt", "jjalp", "jjalh", "jjam", "jjab", "jjabs", "jjas", "jjass", "jjang", "jjaj", "jjac", "jjak", "jjat", "jjap", "jjah", "jjae", "jjaeg", "jjaegg", "jjaegs", "jjaen", "jjaenj", "jjaenh", "jjaed"];
const nC = Object.freeze(eC);
const aC = ["jjael", "jjaelg", "jjaelm", "jjaelb", "jjaels", "jjaelt", "jjaelp", "jjaelh", "jjaem", "jjaeb", "jjaebs", "jjaes", "jjaess", "jjaeng", "jjaej", "jjaec", "jjaek", "jjaet", "jjaep", "jjaeh", "jjya", "jjyag", "jjyagg", "jjyags", "jjyan", "jjyanj", "jjyanh", "jjyad", "jjyal", "jjyalg", "jjyalm", "jjyalb", "jjyals", "jjyalt", "jjyalp", "jjyalh", "jjyam", "jjyab", "jjyabs", "jjyas", "jjyass", "jjyang", "jjyaj", "jjyac", "jjyak", "jjyat", "jjyap", "jjyah", "jjyae", "jjyaeg", "jjyaegg", "jjyaegs", "jjyaen", "jjyaenj", "jjyaenh", "jjyaed", "jjyael", "jjyaelg", "jjyaelm", "jjyaelb", "jjyaels", "jjyaelt", "jjyaelp", "jjyaelh", "jjyaem", "jjyaeb", "jjyaebs", "jjyaes", "jjyaess", "jjyaeng", "jjyaej", "jjyaec", "jjyaek", "jjyaet", "jjyaep", "jjyaeh", "jjeo", "jjeog", "jjeogg", "jjeogs", "jjeon", "jjeonj", "jjeonh", "jjeod", "jjeol", "jjeolg", "jjeolm", "jjeolb", "jjeols", "jjeolt", "jjeolp", "jjeolh", "jjeom", "jjeob", "jjeobs", "jjeos", "jjeoss", "jjeong", "jjeoj", "jjeoc", "jjeok", "jjeot", "jjeop", "jjeoh", "jje", "jjeg", "jjegg", "jjegs", "jjen", "jjenj", "jjenh", "jjed", "jjel", "jjelg", "jjelm", "jjelb", "jjels", "jjelt", "jjelp", "jjelh", "jjem", "jjeb", "jjebs", "jjes", "jjess", "jjeng", "jjej", "jjec", "jjek", "jjet", "jjep", "jjeh", "jjyeo", "jjyeog", "jjyeogg", "jjyeogs", "jjyeon", "jjyeonj", "jjyeonh", "jjyeod", "jjyeol", "jjyeolg", "jjyeolm", "jjyeolb", "jjyeols", "jjyeolt", "jjyeolp", "jjyeolh", "jjyeom", "jjyeob", "jjyeobs", "jjyeos", "jjyeoss", "jjyeong", "jjyeoj", "jjyeoc", "jjyeok", "jjyeot", "jjyeop", "jjyeoh", "jjye", "jjyeg", "jjyegg", "jjyegs", "jjyen", "jjyenj", "jjyenh", "jjyed", "jjyel", "jjyelg", "jjyelm", "jjyelb", "jjyels", "jjyelt", "jjyelp", "jjyelh", "jjyem", "jjyeb", "jjyebs", "jjyes", "jjyess", "jjyeng", "jjyej", "jjyec", "jjyek", "jjyet", "jjyep", "jjyeh", "jjo", "jjog", "jjogg", "jjogs", "jjon", "jjonj", "jjonh", "jjod", "jjol", "jjolg", "jjolm", "jjolb", "jjols", "jjolt", "jjolp", "jjolh", "jjom", "jjob", "jjobs", "jjos", "jjoss", "jjong", "jjoj", "jjoc", "jjok", "jjot", "jjop", "jjoh", "jjwa", "jjwag", "jjwagg", "jjwags", "jjwan", "jjwanj", "jjwanh", "jjwad", "jjwal", "jjwalg", "jjwalm", "jjwalb", "jjwals", "jjwalt", "jjwalp", "jjwalh", "jjwam", "jjwab", "jjwabs", "jjwas", "jjwass", "jjwang", "jjwaj", "jjwac", "jjwak", "jjwat", "jjwap", "jjwah", "jjwae", "jjwaeg", "jjwaegg", "jjwaegs", "jjwaen", "jjwaenj", "jjwaenh", "jjwaed", "jjwael", "jjwaelg", "jjwaelm", "jjwaelb"];
const uC = Object.freeze(aC);
const tC = ["jjwaels", "jjwaelt", "jjwaelp", "jjwaelh", "jjwaem", "jjwaeb", "jjwaebs", "jjwaes", "jjwaess", "jjwaeng", "jjwaej", "jjwaec", "jjwaek", "jjwaet", "jjwaep", "jjwaeh", "jjoe", "jjoeg", "jjoegg", "jjoegs", "jjoen", "jjoenj", "jjoenh", "jjoed", "jjoel", "jjoelg", "jjoelm", "jjoelb", "jjoels", "jjoelt", "jjoelp", "jjoelh", "jjoem", "jjoeb", "jjoebs", "jjoes", "jjoess", "jjoeng", "jjoej", "jjoec", "jjoek", "jjoet", "jjoep", "jjoeh", "jjyo", "jjyog", "jjyogg", "jjyogs", "jjyon", "jjyonj", "jjyonh", "jjyod", "jjyol", "jjyolg", "jjyolm", "jjyolb", "jjyols", "jjyolt", "jjyolp", "jjyolh", "jjyom", "jjyob", "jjyobs", "jjyos", "jjyoss", "jjyong", "jjyoj", "jjyoc", "jjyok", "jjyot", "jjyop", "jjyoh", "jju", "jjug", "jjugg", "jjugs", "jjun", "jjunj", "jjunh", "jjud", "jjul", "jjulg", "jjulm", "jjulb", "jjuls", "jjult", "jjulp", "jjulh", "jjum", "jjub", "jjubs", "jjus", "jjuss", "jjung", "jjuj", "jjuc", "jjuk", "jjut", "jjup", "jjuh", "jjweo", "jjweog", "jjweogg", "jjweogs", "jjweon", "jjweonj", "jjweonh", "jjweod", "jjweol", "jjweolg", "jjweolm", "jjweolb", "jjweols", "jjweolt", "jjweolp", "jjweolh", "jjweom", "jjweob", "jjweobs", "jjweos", "jjweoss", "jjweong", "jjweoj", "jjweoc", "jjweok", "jjweot", "jjweop", "jjweoh", "jjwe", "jjweg", "jjwegg", "jjwegs", "jjwen", "jjwenj", "jjwenh", "jjwed", "jjwel", "jjwelg", "jjwelm", "jjwelb", "jjwels", "jjwelt", "jjwelp", "jjwelh", "jjwem", "jjweb", "jjwebs", "jjwes", "jjwess", "jjweng", "jjwej", "jjwec", "jjwek", "jjwet", "jjwep", "jjweh", "jjwi", "jjwig", "jjwigg", "jjwigs", "jjwin", "jjwinj", "jjwinh", "jjwid", "jjwil", "jjwilg", "jjwilm", "jjwilb", "jjwils", "jjwilt", "jjwilp", "jjwilh", "jjwim", "jjwib", "jjwibs", "jjwis", "jjwiss", "jjwing", "jjwij", "jjwic", "jjwik", "jjwit", "jjwip", "jjwih", "jjyu", "jjyug", "jjyugg", "jjyugs", "jjyun", "jjyunj", "jjyunh", "jjyud", "jjyul", "jjyulg", "jjyulm", "jjyulb", "jjyuls", "jjyult", "jjyulp", "jjyulh", "jjyum", "jjyub", "jjyubs", "jjyus", "jjyuss", "jjyung", "jjyuj", "jjyuc", "jjyuk", "jjyut", "jjyup", "jjyuh", "jjeu", "jjeug", "jjeugg", "jjeugs", "jjeun", "jjeunj", "jjeunh", "jjeud", "jjeul", "jjeulg", "jjeulm", "jjeulb", "jjeuls", "jjeult", "jjeulp", "jjeulh", "jjeum", "jjeub", "jjeubs", "jjeus", "jjeuss", "jjeung", "jjeuj", "jjeuc", "jjeuk", "jjeut", "jjeup", "jjeuh", "jjyi", "jjyig", "jjyigg", "jjyigs", "jjyin", "jjyinj", "jjyinh", "jjyid", "jjyil", "jjyilg", "jjyilm", "jjyilb", "jjyils", "jjyilt", "jjyilp", "jjyilh"];
const dC = Object.freeze(tC);
const gC = ["jjyim", "jjyib", "jjyibs", "jjyis", "jjyiss", "jjying", "jjyij", "jjyic", "jjyik", "jjyit", "jjyip", "jjyih", "jji", "jjig", "jjigg", "jjigs", "jjin", "jjinj", "jjinh", "jjid", "jjil", "jjilg", "jjilm", "jjilb", "jjils", "jjilt", "jjilp", "jjilh", "jjim", "jjib", "jjibs", "jjis", "jjiss", "jjing", "jjij", "jjic", "jjik", "jjit", "jjip", "jjih", "ca", "cag", "cagg", "cags", "can", "canj", "canh", "cad", "cal", "calg", "calm", "calb", "cals", "calt", "calp", "calh", "cam", "cab", "cabs", "cas", "cass", "cang", "caj", "cac", "cak", "cat", "cap", "cah", "cae", "caeg", "caegg", "caegs", "caen", "caenj", "caenh", "caed", "cael", "caelg", "caelm", "caelb", "caels", "caelt", "caelp", "caelh", "caem", "caeb", "caebs", "caes", "caess", "caeng", "caej", "caec", "caek", "caet", "caep", "caeh", "cya", "cyag", "cyagg", "cyags", "cyan", "cyanj", "cyanh", "cyad", "cyal", "cyalg", "cyalm", "cyalb", "cyals", "cyalt", "cyalp", "cyalh", "cyam", "cyab", "cyabs", "cyas", "cyass", "cyang", "cyaj", "cyac", "cyak", "cyat", "cyap", "cyah", "cyae", "cyaeg", "cyaegg", "cyaegs", "cyaen", "cyaenj", "cyaenh", "cyaed", "cyael", "cyaelg", "cyaelm", "cyaelb", "cyaels", "cyaelt", "cyaelp", "cyaelh", "cyaem", "cyaeb", "cyaebs", "cyaes", "cyaess", "cyaeng", "cyaej", "cyaec", "cyaek", "cyaet", "cyaep", "cyaeh", "ceo", "ceog", "ceogg", "ceogs", "ceon", "ceonj", "ceonh", "ceod", "ceol", "ceolg", "ceolm", "ceolb", "ceols", "ceolt", "ceolp", "ceolh", "ceom", "ceob", "ceobs", "ceos", "ceoss", "ceong", "ceoj", "ceoc", "ceok", "ceot", "ceop", "ceoh", "ce", "ceg", "cegg", "cegs", "cen", "cenj", "cenh", "ced", "cel", "celg", "celm", "celb", "cels", "celt", "celp", "celh", "cem", "ceb", "cebs", "ces", "cess", "ceng", "cej", "cec", "cek", "cet", "cep", "ceh", "cyeo", "cyeog", "cyeogg", "cyeogs", "cyeon", "cyeonj", "cyeonh", "cyeod", "cyeol", "cyeolg", "cyeolm", "cyeolb", "cyeols", "cyeolt", "cyeolp", "cyeolh", "cyeom", "cyeob", "cyeobs", "cyeos", "cyeoss", "cyeong", "cyeoj", "cyeoc", "cyeok", "cyeot", "cyeop", "cyeoh", "cye", "cyeg", "cyegg", "cyegs", "cyen", "cyenj", "cyenh", "cyed", "cyel", "cyelg", "cyelm", "cyelb", "cyels", "cyelt", "cyelp", "cyelh", "cyem", "cyeb", "cyebs", "cyes"];
const sC = Object.freeze(gC);
const hC = ["cyess", "cyeng", "cyej", "cyec", "cyek", "cyet", "cyep", "cyeh", "co", "cog", "cogg", "cogs", "con", "conj", "conh", "cod", "col", "colg", "colm", "colb", "cols", "colt", "colp", "colh", "com", "cob", "cobs", "cos", "coss", "cong", "coj", "coc", "cok", "cot", "cop", "coh", "cwa", "cwag", "cwagg", "cwags", "cwan", "cwanj", "cwanh", "cwad", "cwal", "cwalg", "cwalm", "cwalb", "cwals", "cwalt", "cwalp", "cwalh", "cwam", "cwab", "cwabs", "cwas", "cwass", "cwang", "cwaj", "cwac", "cwak", "cwat", "cwap", "cwah", "cwae", "cwaeg", "cwaegg", "cwaegs", "cwaen", "cwaenj", "cwaenh", "cwaed", "cwael", "cwaelg", "cwaelm", "cwaelb", "cwaels", "cwaelt", "cwaelp", "cwaelh", "cwaem", "cwaeb", "cwaebs", "cwaes", "cwaess", "cwaeng", "cwaej", "cwaec", "cwaek", "cwaet", "cwaep", "cwaeh", "coe", "coeg", "coegg", "coegs", "coen", "coenj", "coenh", "coed", "coel", "coelg", "coelm", "coelb", "coels", "coelt", "coelp", "coelh", "coem", "coeb", "coebs", "coes", "coess", "coeng", "coej", "coec", "coek", "coet", "coep", "coeh", "cyo", "cyog", "cyogg", "cyogs", "cyon", "cyonj", "cyonh", "cyod", "cyol", "cyolg", "cyolm", "cyolb", "cyols", "cyolt", "cyolp", "cyolh", "cyom", "cyob", "cyobs", "cyos", "cyoss", "cyong", "cyoj", "cyoc", "cyok", "cyot", "cyop", "cyoh", "cu", "cug", "cugg", "cugs", "cun", "cunj", "cunh", "cud", "cul", "culg", "culm", "culb", "culs", "cult", "culp", "culh", "cum", "cub", "cubs", "cus", "cuss", "cung", "cuj", "cuc", "cuk", "cut", "cup", "cuh", "cweo", "cweog", "cweogg", "cweogs", "cweon", "cweonj", "cweonh", "cweod", "cweol", "cweolg", "cweolm", "cweolb", "cweols", "cweolt", "cweolp", "cweolh", "cweom", "cweob", "cweobs", "cweos", "cweoss", "cweong", "cweoj", "cweoc", "cweok", "cweot", "cweop", "cweoh", "cwe", "cweg", "cwegg", "cwegs", "cwen", "cwenj", "cwenh", "cwed", "cwel", "cwelg", "cwelm", "cwelb", "cwels", "cwelt", "cwelp", "cwelh", "cwem", "cweb", "cwebs", "cwes", "cwess", "cweng", "cwej", "cwec", "cwek", "cwet", "cwep", "cweh", "cwi", "cwig", "cwigg", "cwigs", "cwin", "cwinj", "cwinh", "cwid", "cwil", "cwilg", "cwilm", "cwilb", "cwils", "cwilt", "cwilp", "cwilh", "cwim", "cwib", "cwibs", "cwis", "cwiss", "cwing", "cwij", "cwic"];
const rC = Object.freeze(hC);
const lC = ["cwik", "cwit", "cwip", "cwih", "cyu", "cyug", "cyugg", "cyugs", "cyun", "cyunj", "cyunh", "cyud", "cyul", "cyulg", "cyulm", "cyulb", "cyuls", "cyult", "cyulp", "cyulh", "cyum", "cyub", "cyubs", "cyus", "cyuss", "cyung", "cyuj", "cyuc", "cyuk", "cyut", "cyup", "cyuh", "ceu", "ceug", "ceugg", "ceugs", "ceun", "ceunj", "ceunh", "ceud", "ceul", "ceulg", "ceulm", "ceulb", "ceuls", "ceult", "ceulp", "ceulh", "ceum", "ceub", "ceubs", "ceus", "ceuss", "ceung", "ceuj", "ceuc", "ceuk", "ceut", "ceup", "ceuh", "cyi", "cyig", "cyigg", "cyigs", "cyin", "cyinj", "cyinh", "cyid", "cyil", "cyilg", "cyilm", "cyilb", "cyils", "cyilt", "cyilp", "cyilh", "cyim", "cyib", "cyibs", "cyis", "cyiss", "cying", "cyij", "cyic", "cyik", "cyit", "cyip", "cyih", "ci", "cig", "cigg", "cigs", "cin", "cinj", "cinh", "cid", "cil", "cilg", "cilm", "cilb", "cils", "cilt", "cilp", "cilh", "cim", "cib", "cibs", "cis", "ciss", "cing", "cij", "cic", "cik", "cit", "cip", "cih", "ka", "kag", "kagg", "kags", "kan", "kanj", "kanh", "kad", "kal", "kalg", "kalm", "kalb", "kals", "kalt", "kalp", "kalh", "kam", "kab", "kabs", "kas", "kass", "kang", "kaj", "kac", "kak", "kat", "kap", "kah", "kae", "kaeg", "kaegg", "kaegs", "kaen", "kaenj", "kaenh", "kaed", "kael", "kaelg", "kaelm", "kaelb", "kaels", "kaelt", "kaelp", "kaelh", "kaem", "kaeb", "kaebs", "kaes", "kaess", "kaeng", "kaej", "kaec", "kaek", "kaet", "kaep", "kaeh", "kya", "kyag", "kyagg", "kyags", "kyan", "kyanj", "kyanh", "kyad", "kyal", "kyalg", "kyalm", "kyalb", "kyals", "kyalt", "kyalp", "kyalh", "kyam", "kyab", "kyabs", "kyas", "kyass", "kyang", "kyaj", "kyac", "kyak", "kyat", "kyap", "kyah", "kyae", "kyaeg", "kyaegg", "kyaegs", "kyaen", "kyaenj", "kyaenh", "kyaed", "kyael", "kyaelg", "kyaelm", "kyaelb", "kyaels", "kyaelt", "kyaelp", "kyaelh", "kyaem", "kyaeb", "kyaebs", "kyaes", "kyaess", "kyaeng", "kyaej", "kyaec", "kyaek", "kyaet", "kyaep", "kyaeh", "keo", "keog", "keogg", "keogs", "keon", "keonj", "keonh", "keod", "keol", "keolg", "keolm", "keolb", "keols", "keolt", "keolp", "keolh", "keom", "keob", "keobs", "keos", "keoss", "keong", "keoj", "keoc", "keok", "keot", "keop", "keoh"];
const vC = Object.freeze(lC);
const yC = ["ke", "keg", "kegg", "kegs", "ken", "kenj", "kenh", "ked", "kel", "kelg", "kelm", "kelb", "kels", "kelt", "kelp", "kelh", "kem", "keb", "kebs", "kes", "kess", "keng", "kej", "kec", "kek", "ket", "kep", "keh", "kyeo", "kyeog", "kyeogg", "kyeogs", "kyeon", "kyeonj", "kyeonh", "kyeod", "kyeol", "kyeolg", "kyeolm", "kyeolb", "kyeols", "kyeolt", "kyeolp", "kyeolh", "kyeom", "kyeob", "kyeobs", "kyeos", "kyeoss", "kyeong", "kyeoj", "kyeoc", "kyeok", "kyeot", "kyeop", "kyeoh", "kye", "kyeg", "kyegg", "kyegs", "kyen", "kyenj", "kyenh", "kyed", "kyel", "kyelg", "kyelm", "kyelb", "kyels", "kyelt", "kyelp", "kyelh", "kyem", "kyeb", "kyebs", "kyes", "kyess", "kyeng", "kyej", "kyec", "kyek", "kyet", "kyep", "kyeh", "ko", "kog", "kogg", "kogs", "kon", "konj", "konh", "kod", "kol", "kolg", "kolm", "kolb", "kols", "kolt", "kolp", "kolh", "kom", "kob", "kobs", "kos", "koss", "kong", "koj", "koc", "kok", "kot", "kop", "koh", "kwa", "kwag", "kwagg", "kwags", "kwan", "kwanj", "kwanh", "kwad", "kwal", "kwalg", "kwalm", "kwalb", "kwals", "kwalt", "kwalp", "kwalh", "kwam", "kwab", "kwabs", "kwas", "kwass", "kwang", "kwaj", "kwac", "kwak", "kwat", "kwap", "kwah", "kwae", "kwaeg", "kwaegg", "kwaegs", "kwaen", "kwaenj", "kwaenh", "kwaed", "kwael", "kwaelg", "kwaelm", "kwaelb", "kwaels", "kwaelt", "kwaelp", "kwaelh", "kwaem", "kwaeb", "kwaebs", "kwaes", "kwaess", "kwaeng", "kwaej", "kwaec", "kwaek", "kwaet", "kwaep", "kwaeh", "koe", "koeg", "koegg", "koegs", "koen", "koenj", "koenh", "koed", "koel", "koelg", "koelm", "koelb", "koels", "koelt", "koelp", "koelh", "koem", "koeb", "koebs", "koes", "koess", "koeng", "koej", "koec", "koek", "koet", "koep", "koeh", "kyo", "kyog", "kyogg", "kyogs", "kyon", "kyonj", "kyonh", "kyod", "kyol", "kyolg", "kyolm", "kyolb", "kyols", "kyolt", "kyolp", "kyolh", "kyom", "kyob", "kyobs", "kyos", "kyoss", "kyong", "kyoj", "kyoc", "kyok", "kyot", "kyop", "kyoh", "ku", "kug", "kugg", "kugs", "kun", "kunj", "kunh", "kud", "kul", "kulg", "kulm", "kulb", "kuls", "kult", "kulp", "kulh", "kum", "kub", "kubs", "kus", "kuss", "kung", "kuj", "kuc", "kuk", "kut", "kup", "kuh", "kweo", "kweog", "kweogg", "kweogs"];
const cC = Object.freeze(yC);
const bC = ["kweon", "kweonj", "kweonh", "kweod", "kweol", "kweolg", "kweolm", "kweolb", "kweols", "kweolt", "kweolp", "kweolh", "kweom", "kweob", "kweobs", "kweos", "kweoss", "kweong", "kweoj", "kweoc", "kweok", "kweot", "kweop", "kweoh", "kwe", "kweg", "kwegg", "kwegs", "kwen", "kwenj", "kwenh", "kwed", "kwel", "kwelg", "kwelm", "kwelb", "kwels", "kwelt", "kwelp", "kwelh", "kwem", "kweb", "kwebs", "kwes", "kwess", "kweng", "kwej", "kwec", "kwek", "kwet", "kwep", "kweh", "kwi", "kwig", "kwigg", "kwigs", "kwin", "kwinj", "kwinh", "kwid", "kwil", "kwilg", "kwilm", "kwilb", "kwils", "kwilt", "kwilp", "kwilh", "kwim", "kwib", "kwibs", "kwis", "kwiss", "kwing", "kwij", "kwic", "kwik", "kwit", "kwip", "kwih", "kyu", "kyug", "kyugg", "kyugs", "kyun", "kyunj", "kyunh", "kyud", "kyul", "kyulg", "kyulm", "kyulb", "kyuls", "kyult", "kyulp", "kyulh", "kyum", "kyub", "kyubs", "kyus", "kyuss", "kyung", "kyuj", "kyuc", "kyuk", "kyut", "kyup", "kyuh", "keu", "keug", "keugg", "keugs", "keun", "keunj", "keunh", "keud", "keul", "keulg", "keulm", "keulb", "keuls", "keult", "keulp", "keulh", "keum", "keub", "keubs", "keus", "keuss", "keung", "keuj", "keuc", "keuk", "keut", "keup", "keuh", "kyi", "kyig", "kyigg", "kyigs", "kyin", "kyinj", "kyinh", "kyid", "kyil", "kyilg", "kyilm", "kyilb", "kyils", "kyilt", "kyilp", "kyilh", "kyim", "kyib", "kyibs", "kyis", "kyiss", "kying", "kyij", "kyic", "kyik", "kyit", "kyip", "kyih", "ki", "kig", "kigg", "kigs", "kin", "kinj", "kinh", "kid", "kil", "kilg", "kilm", "kilb", "kils", "kilt", "kilp", "kilh", "kim", "kib", "kibs", "kis", "kiss", "king", "kij", "kic", "kik", "kit", "kip", "kih", "ta", "tag", "tagg", "tags", "tan", "tanj", "tanh", "tad", "tal", "talg", "talm", "talb", "tals", "talt", "talp", "talh", "tam", "tab", "tabs", "tas", "tass", "tang", "taj", "tac", "tak", "tat", "tap", "tah", "tae", "taeg", "taegg", "taegs", "taen", "taenj", "taenh", "taed", "tael", "taelg", "taelm", "taelb", "taels", "taelt", "taelp", "taelh", "taem", "taeb", "taebs", "taes", "taess", "taeng", "taej", "taec", "taek", "taet", "taep", "taeh", "tya", "tyag", "tyagg", "tyags", "tyan", "tyanj", "tyanh", "tyad"];
const pC = Object.freeze(bC);
const wC = ["tyal", "tyalg", "tyalm", "tyalb", "tyals", "tyalt", "tyalp", "tyalh", "tyam", "tyab", "tyabs", "tyas", "tyass", "tyang", "tyaj", "tyac", "tyak", "tyat", "tyap", "tyah", "tyae", "tyaeg", "tyaegg", "tyaegs", "tyaen", "tyaenj", "tyaenh", "tyaed", "tyael", "tyaelg", "tyaelm", "tyaelb", "tyaels", "tyaelt", "tyaelp", "tyaelh", "tyaem", "tyaeb", "tyaebs", "tyaes", "tyaess", "tyaeng", "tyaej", "tyaec", "tyaek", "tyaet", "tyaep", "tyaeh", "teo", "teog", "teogg", "teogs", "teon", "teonj", "teonh", "teod", "teol", "teolg", "teolm", "teolb", "teols", "teolt", "teolp", "teolh", "teom", "teob", "teobs", "teos", "teoss", "teong", "teoj", "teoc", "teok", "teot", "teop", "teoh", "te", "teg", "tegg", "tegs", "ten", "tenj", "tenh", "ted", "tel", "telg", "telm", "telb", "tels", "telt", "telp", "telh", "tem", "teb", "tebs", "tes", "tess", "teng", "tej", "tec", "tek", "tet", "tep", "teh", "tyeo", "tyeog", "tyeogg", "tyeogs", "tyeon", "tyeonj", "tyeonh", "tyeod", "tyeol", "tyeolg", "tyeolm", "tyeolb", "tyeols", "tyeolt", "tyeolp", "tyeolh", "tyeom", "tyeob", "tyeobs", "tyeos", "tyeoss", "tyeong", "tyeoj", "tyeoc", "tyeok", "tyeot", "tyeop", "tyeoh", "tye", "tyeg", "tyegg", "tyegs", "tyen", "tyenj", "tyenh", "tyed", "tyel", "tyelg", "tyelm", "tyelb", "tyels", "tyelt", "tyelp", "tyelh", "tyem", "tyeb", "tyebs", "tyes", "tyess", "tyeng", "tyej", "tyec", "tyek", "tyet", "tyep", "tyeh", "to", "tog", "togg", "togs", "ton", "tonj", "tonh", "tod", "tol", "tolg", "tolm", "tolb", "tols", "tolt", "tolp", "tolh", "tom", "tob", "tobs", "tos", "toss", "tong", "toj", "toc", "tok", "tot", "top", "toh", "twa", "twag", "twagg", "twags", "twan", "twanj", "twanh", "twad", "twal", "twalg", "twalm", "twalb", "twals", "twalt", "twalp", "twalh", "twam", "twab", "twabs", "twas", "twass", "twang", "twaj", "twac", "twak", "twat", "twap", "twah", "twae", "twaeg", "twaegg", "twaegs", "twaen", "twaenj", "twaenh", "twaed", "twael", "twaelg", "twaelm", "twaelb", "twaels", "twaelt", "twaelp", "twaelh", "twaem", "twaeb", "twaebs", "twaes", "twaess", "twaeng", "twaej", "twaec", "twaek", "twaet", "twaep", "twaeh", "toe", "toeg", "toegg", "toegs", "toen", "toenj", "toenh", "toed", "toel", "toelg", "toelm", "toelb"];
const jC = Object.freeze(wC);
const fC = ["toels", "toelt", "toelp", "toelh", "toem", "toeb", "toebs", "toes", "toess", "toeng", "toej", "toec", "toek", "toet", "toep", "toeh", "tyo", "tyog", "tyogg", "tyogs", "tyon", "tyonj", "tyonh", "tyod", "tyol", "tyolg", "tyolm", "tyolb", "tyols", "tyolt", "tyolp", "tyolh", "tyom", "tyob", "tyobs", "tyos", "tyoss", "tyong", "tyoj", "tyoc", "tyok", "tyot", "tyop", "tyoh", "tu", "tug", "tugg", "tugs", "tun", "tunj", "tunh", "tud", "tul", "tulg", "tulm", "tulb", "tuls", "tult", "tulp", "tulh", "tum", "tub", "tubs", "tus", "tuss", "tung", "tuj", "tuc", "tuk", "tut", "tup", "tuh", "tweo", "tweog", "tweogg", "tweogs", "tweon", "tweonj", "tweonh", "tweod", "tweol", "tweolg", "tweolm", "tweolb", "tweols", "tweolt", "tweolp", "tweolh", "tweom", "tweob", "tweobs", "tweos", "tweoss", "tweong", "tweoj", "tweoc", "tweok", "tweot", "tweop", "tweoh", "twe", "tweg", "twegg", "twegs", "twen", "twenj", "twenh", "twed", "twel", "twelg", "twelm", "twelb", "twels", "twelt", "twelp", "twelh", "twem", "tweb", "twebs", "twes", "twess", "tweng", "twej", "twec", "twek", "twet", "twep", "tweh", "twi", "twig", "twigg", "twigs", "twin", "twinj", "twinh", "twid", "twil", "twilg", "twilm", "twilb", "twils", "twilt", "twilp", "twilh", "twim", "twib", "twibs", "twis", "twiss", "twing", "twij", "twic", "twik", "twit", "twip", "twih", "tyu", "tyug", "tyugg", "tyugs", "tyun", "tyunj", "tyunh", "tyud", "tyul", "tyulg", "tyulm", "tyulb", "tyuls", "tyult", "tyulp", "tyulh", "tyum", "tyub", "tyubs", "tyus", "tyuss", "tyung", "tyuj", "tyuc", "tyuk", "tyut", "tyup", "tyuh", "teu", "teug", "teugg", "teugs", "teun", "teunj", "teunh", "teud", "teul", "teulg", "teulm", "teulb", "teuls", "teult", "teulp", "teulh", "teum", "teub", "teubs", "teus", "teuss", "teung", "teuj", "teuc", "teuk", "teut", "teup", "teuh", "tyi", "tyig", "tyigg", "tyigs", "tyin", "tyinj", "tyinh", "tyid", "tyil", "tyilg", "tyilm", "tyilb", "tyils", "tyilt", "tyilp", "tyilh", "tyim", "tyib", "tyibs", "tyis", "tyiss", "tying", "tyij", "tyic", "tyik", "tyit", "tyip", "tyih", "ti", "tig", "tigg", "tigs", "tin", "tinj", "tinh", "tid", "til", "tilg", "tilm", "tilb", "tils", "tilt", "tilp", "tilh"];
const mC = Object.freeze(fC);
const YC = ["tim", "tib", "tibs", "tis", "tiss", "ting", "tij", "tic", "tik", "tit", "tip", "tih", "pa", "pag", "pagg", "pags", "pan", "panj", "panh", "pad", "pal", "palg", "palm", "palb", "pals", "palt", "palp", "palh", "pam", "pab", "pabs", "pas", "pass", "pang", "paj", "pac", "pak", "pat", "pap", "pah", "pae", "paeg", "paegg", "paegs", "paen", "paenj", "paenh", "paed", "pael", "paelg", "paelm", "paelb", "paels", "paelt", "paelp", "paelh", "paem", "paeb", "paebs", "paes", "paess", "paeng", "paej", "paec", "paek", "paet", "paep", "paeh", "pya", "pyag", "pyagg", "pyags", "pyan", "pyanj", "pyanh", "pyad", "pyal", "pyalg", "pyalm", "pyalb", "pyals", "pyalt", "pyalp", "pyalh", "pyam", "pyab", "pyabs", "pyas", "pyass", "pyang", "pyaj", "pyac", "pyak", "pyat", "pyap", "pyah", "pyae", "pyaeg", "pyaegg", "pyaegs", "pyaen", "pyaenj", "pyaenh", "pyaed", "pyael", "pyaelg", "pyaelm", "pyaelb", "pyaels", "pyaelt", "pyaelp", "pyaelh", "pyaem", "pyaeb", "pyaebs", "pyaes", "pyaess", "pyaeng", "pyaej", "pyaec", "pyaek", "pyaet", "pyaep", "pyaeh", "peo", "peog", "peogg", "peogs", "peon", "peonj", "peonh", "peod", "peol", "peolg", "peolm", "peolb", "peols", "peolt", "peolp", "peolh", "peom", "peob", "peobs", "peos", "peoss", "peong", "peoj", "peoc", "peok", "peot", "peop", "peoh", "pe", "peg", "pegg", "pegs", "pen", "penj", "penh", "ped", "pel", "pelg", "pelm", "pelb", "pels", "pelt", "pelp", "pelh", "pem", "peb", "pebs", "pes", "pess", "peng", "pej", "pec", "pek", "pet", "pep", "peh", "pyeo", "pyeog", "pyeogg", "pyeogs", "pyeon", "pyeonj", "pyeonh", "pyeod", "pyeol", "pyeolg", "pyeolm", "pyeolb", "pyeols", "pyeolt", "pyeolp", "pyeolh", "pyeom", "pyeob", "pyeobs", "pyeos", "pyeoss", "pyeong", "pyeoj", "pyeoc", "pyeok", "pyeot", "pyeop", "pyeoh", "pye", "pyeg", "pyegg", "pyegs", "pyen", "pyenj", "pyenh", "pyed", "pyel", "pyelg", "pyelm", "pyelb", "pyels", "pyelt", "pyelp", "pyelh", "pyem", "pyeb", "pyebs", "pyes", "pyess", "pyeng", "pyej", "pyec", "pyek", "pyet", "pyep", "pyeh", "po", "pog", "pogg", "pogs", "pon", "ponj", "ponh", "pod", "pol", "polg", "polm", "polb", "pols", "polt", "polp", "polh", "pom", "pob", "pobs", "pos"];
const kC = Object.freeze(YC);
const LC = ["poss", "pong", "poj", "poc", "pok", "pot", "pop", "poh", "pwa", "pwag", "pwagg", "pwags", "pwan", "pwanj", "pwanh", "pwad", "pwal", "pwalg", "pwalm", "pwalb", "pwals", "pwalt", "pwalp", "pwalh", "pwam", "pwab", "pwabs", "pwas", "pwass", "pwang", "pwaj", "pwac", "pwak", "pwat", "pwap", "pwah", "pwae", "pwaeg", "pwaegg", "pwaegs", "pwaen", "pwaenj", "pwaenh", "pwaed", "pwael", "pwaelg", "pwaelm", "pwaelb", "pwaels", "pwaelt", "pwaelp", "pwaelh", "pwaem", "pwaeb", "pwaebs", "pwaes", "pwaess", "pwaeng", "pwaej", "pwaec", "pwaek", "pwaet", "pwaep", "pwaeh", "poe", "poeg", "poegg", "poegs", "poen", "poenj", "poenh", "poed", "poel", "poelg", "poelm", "poelb", "poels", "poelt", "poelp", "poelh", "poem", "poeb", "poebs", "poes", "poess", "poeng", "poej", "poec", "poek", "poet", "poep", "poeh", "pyo", "pyog", "pyogg", "pyogs", "pyon", "pyonj", "pyonh", "pyod", "pyol", "pyolg", "pyolm", "pyolb", "pyols", "pyolt", "pyolp", "pyolh", "pyom", "pyob", "pyobs", "pyos", "pyoss", "pyong", "pyoj", "pyoc", "pyok", "pyot", "pyop", "pyoh", "pu", "pug", "pugg", "pugs", "pun", "punj", "punh", "pud", "pul", "pulg", "pulm", "pulb", "puls", "pult", "pulp", "pulh", "pum", "pub", "pubs", "pus", "puss", "pung", "puj", "puc", "puk", "put", "pup", "puh", "pweo", "pweog", "pweogg", "pweogs", "pweon", "pweonj", "pweonh", "pweod", "pweol", "pweolg", "pweolm", "pweolb", "pweols", "pweolt", "pweolp", "pweolh", "pweom", "pweob", "pweobs", "pweos", "pweoss", "pweong", "pweoj", "pweoc", "pweok", "pweot", "pweop", "pweoh", "pwe", "pweg", "pwegg", "pwegs", "pwen", "pwenj", "pwenh", "pwed", "pwel", "pwelg", "pwelm", "pwelb", "pwels", "pwelt", "pwelp", "pwelh", "pwem", "pweb", "pwebs", "pwes", "pwess", "pweng", "pwej", "pwec", "pwek", "pwet", "pwep", "pweh", "pwi", "pwig", "pwigg", "pwigs", "pwin", "pwinj", "pwinh", "pwid", "pwil", "pwilg", "pwilm", "pwilb", "pwils", "pwilt", "pwilp", "pwilh", "pwim", "pwib", "pwibs", "pwis", "pwiss", "pwing", "pwij", "pwic", "pwik", "pwit", "pwip", "pwih", "pyu", "pyug", "pyugg", "pyugs", "pyun", "pyunj", "pyunh", "pyud", "pyul", "pyulg", "pyulm", "pyulb", "pyuls", "pyult", "pyulp", "pyulh", "pyum", "pyub", "pyubs", "pyus", "pyuss", "pyung", "pyuj", "pyuc"];
const ZC = Object.freeze(LC);
const SC = ["pyuk", "pyut", "pyup", "pyuh", "peu", "peug", "peugg", "peugs", "peun", "peunj", "peunh", "peud", "peul", "peulg", "peulm", "peulb", "peuls", "peult", "peulp", "peulh", "peum", "peub", "peubs", "peus", "peuss", "peung", "peuj", "peuc", "peuk", "peut", "peup", "peuh", "pyi", "pyig", "pyigg", "pyigs", "pyin", "pyinj", "pyinh", "pyid", "pyil", "pyilg", "pyilm", "pyilb", "pyils", "pyilt", "pyilp", "pyilh", "pyim", "pyib", "pyibs", "pyis", "pyiss", "pying", "pyij", "pyic", "pyik", "pyit", "pyip", "pyih", "pi", "pig", "pigg", "pigs", "pin", "pinj", "pinh", "pid", "pil", "pilg", "pilm", "pilb", "pils", "pilt", "pilp", "pilh", "pim", "pib", "pibs", "pis", "piss", "ping", "pij", "pic", "pik", "pit", "pip", "pih", "ha", "hag", "hagg", "hags", "han", "hanj", "hanh", "had", "hal", "halg", "halm", "halb", "hals", "halt", "halp", "halh", "ham", "hab", "habs", "has", "hass", "hang", "haj", "hac", "hak", "hat", "hap", "hah", "hae", "haeg", "haegg", "haegs", "haen", "haenj", "haenh", "haed", "hael", "haelg", "haelm", "haelb", "haels", "haelt", "haelp", "haelh", "haem", "haeb", "haebs", "haes", "haess", "haeng", "haej", "haec", "haek", "haet", "haep", "haeh", "hya", "hyag", "hyagg", "hyags", "hyan", "hyanj", "hyanh", "hyad", "hyal", "hyalg", "hyalm", "hyalb", "hyals", "hyalt", "hyalp", "hyalh", "hyam", "hyab", "hyabs", "hyas", "hyass", "hyang", "hyaj", "hyac", "hyak", "hyat", "hyap", "hyah", "hyae", "hyaeg", "hyaegg", "hyaegs", "hyaen", "hyaenj", "hyaenh", "hyaed", "hyael", "hyaelg", "hyaelm", "hyaelb", "hyaels", "hyaelt", "hyaelp", "hyaelh", "hyaem", "hyaeb", "hyaebs", "hyaes", "hyaess", "hyaeng", "hyaej", "hyaec", "hyaek", "hyaet", "hyaep", "hyaeh", "heo", "heog", "heogg", "heogs", "heon", "heonj", "heonh", "heod", "heol", "heolg", "heolm", "heolb", "heols", "heolt", "heolp", "heolh", "heom", "heob", "heobs", "heos", "heoss", "heong", "heoj", "heoc", "heok", "heot", "heop", "heoh", "he", "heg", "hegg", "hegs", "hen", "henj", "henh", "hed", "hel", "helg", "helm", "helb", "hels", "helt", "help", "helh", "hem", "heb", "hebs", "hes", "hess", "heng", "hej", "hec", "hek", "het", "hep", "heh"];
const JC = Object.freeze(SC);
const CC = ["hyeo", "hyeog", "hyeogg", "hyeogs", "hyeon", "hyeonj", "hyeonh", "hyeod", "hyeol", "hyeolg", "hyeolm", "hyeolb", "hyeols", "hyeolt", "hyeolp", "hyeolh", "hyeom", "hyeob", "hyeobs", "hyeos", "hyeoss", "hyeong", "hyeoj", "hyeoc", "hyeok", "hyeot", "hyeop", "hyeoh", "hye", "hyeg", "hyegg", "hyegs", "hyen", "hyenj", "hyenh", "hyed", "hyel", "hyelg", "hyelm", "hyelb", "hyels", "hyelt", "hyelp", "hyelh", "hyem", "hyeb", "hyebs", "hyes", "hyess", "hyeng", "hyej", "hyec", "hyek", "hyet", "hyep", "hyeh", "ho", "hog", "hogg", "hogs", "hon", "honj", "honh", "hod", "hol", "holg", "holm", "holb", "hols", "holt", "holp", "holh", "hom", "hob", "hobs", "hos", "hoss", "hong", "hoj", "hoc", "hok", "hot", "hop", "hoh", "hwa", "hwag", "hwagg", "hwags", "hwan", "hwanj", "hwanh", "hwad", "hwal", "hwalg", "hwalm", "hwalb", "hwals", "hwalt", "hwalp", "hwalh", "hwam", "hwab", "hwabs", "hwas", "hwass", "hwang", "hwaj", "hwac", "hwak", "hwat", "hwap", "hwah", "hwae", "hwaeg", "hwaegg", "hwaegs", "hwaen", "hwaenj", "hwaenh", "hwaed", "hwael", "hwaelg", "hwaelm", "hwaelb", "hwaels", "hwaelt", "hwaelp", "hwaelh", "hwaem", "hwaeb", "hwaebs", "hwaes", "hwaess", "hwaeng", "hwaej", "hwaec", "hwaek", "hwaet", "hwaep", "hwaeh", "hoe", "hoeg", "hoegg", "hoegs", "hoen", "hoenj", "hoenh", "hoed", "hoel", "hoelg", "hoelm", "hoelb", "hoels", "hoelt", "hoelp", "hoelh", "hoem", "hoeb", "hoebs", "hoes", "hoess", "hoeng", "hoej", "hoec", "hoek", "hoet", "hoep", "hoeh", "hyo", "hyog", "hyogg", "hyogs", "hyon", "hyonj", "hyonh", "hyod", "hyol", "hyolg", "hyolm", "hyolb", "hyols", "hyolt", "hyolp", "hyolh", "hyom", "hyob", "hyobs", "hyos", "hyoss", "hyong", "hyoj", "hyoc", "hyok", "hyot", "hyop", "hyoh", "hu", "hug", "hugg", "hugs", "hun", "hunj", "hunh", "hud", "hul", "hulg", "hulm", "hulb", "huls", "hult", "hulp", "hulh", "hum", "hub", "hubs", "hus", "huss", "hung", "huj", "huc", "huk", "hut", "hup", "huh", "hweo", "hweog", "hweogg", "hweogs", "hweon", "hweonj", "hweonh", "hweod", "hweol", "hweolg", "hweolm", "hweolb", "hweols", "hweolt", "hweolp", "hweolh", "hweom", "hweob", "hweobs", "hweos", "hweoss", "hweong", "hweoj", "hweoc", "hweok", "hweot", "hweop", "hweoh", "hwe", "hweg", "hwegg", "hwegs"];
const XC = Object.freeze(CC);
const HC = ["hwen", "hwenj", "hwenh", "hwed", "hwel", "hwelg", "hwelm", "hwelb", "hwels", "hwelt", "hwelp", "hwelh", "hwem", "hweb", "hwebs", "hwes", "hwess", "hweng", "hwej", "hwec", "hwek", "hwet", "hwep", "hweh", "hwi", "hwig", "hwigg", "hwigs", "hwin", "hwinj", "hwinh", "hwid", "hwil", "hwilg", "hwilm", "hwilb", "hwils", "hwilt", "hwilp", "hwilh", "hwim", "hwib", "hwibs", "hwis", "hwiss", "hwing", "hwij", "hwic", "hwik", "hwit", "hwip", "hwih", "hyu", "hyug", "hyugg", "hyugs", "hyun", "hyunj", "hyunh", "hyud", "hyul", "hyulg", "hyulm", "hyulb", "hyuls", "hyult", "hyulp", "hyulh", "hyum", "hyub", "hyubs", "hyus", "hyuss", "hyung", "hyuj", "hyuc", "hyuk", "hyut", "hyup", "hyuh", "heu", "heug", "heugg", "heugs", "heun", "heunj", "heunh", "heud", "heul", "heulg", "heulm", "heulb", "heuls", "heult", "heulp", "heulh", "heum", "heub", "heubs", "heus", "heuss", "heung", "heuj", "heuc", "heuk", "heut", "heup", "heuh", "hyi", "hyig", "hyigg", "hyigs", "hyin", "hyinj", "hyinh", "hyid", "hyil", "hyilg", "hyilm", "hyilb", "hyils", "hyilt", "hyilp", "hyilh", "hyim", "hyib", "hyibs", "hyis", "hyiss", "hying", "hyij", "hyic", "hyik", "hyit", "hyip", "hyih", "hi", "hig", "higg", "higs", "hin", "hinj", "hinh", "hid", "hil", "hilg", "hilm", "hilb", "hils", "hilt", "hilp", "hilh", "him", "hib", "hibs", "his", "hiss", "hing", "hij", "hic", "hik", "hit", "hip", "hih", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const BC = Object.freeze(HC);
const TC = ["Kay", "Kayng", "Ke", "Ko", "Kol", "Koc", "Kwi", "Kwi", "Kyun", "Kul", "Kum", "Na", "Na", "Na", "La", "Na", "Na", "Na", "Na", "Na", "Nak", "Nak", "Nak", "Nak", "Nak", "Nak", "Nak", "Nan", "Nan", "Nan", "Nan", "Nan", "Nan", "Nam", "Nam", "Nam", "Nam", "Nap", "Nap", "Nap", "Nang", "Nang", "Nang", "Nang", "Nang", "Nay", "Nayng", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "Nok", "Nok", "Nok", "Nok", "Nok", "Nok", "Non", "Nong", "Nong", "Nong", "Nong", "Noy", "Noy", "Noy", "Noy", "Nwu", "Nwu", "Nwu", "Nwu", "Nwu", "Nwu", "Nwu", "Nwu", "Nuk", "Nuk", "Num", "Nung", "Nung", "Nung", "Nung", "Nung", "Twu", "La", "Lak", "Lak", "Lan", "Lyeng", "Lo", "Lyul", "Li", "Pey", "Pen", "Pyen", "Pwu", "Pwul", "Pi", "Sak", "Sak", "Sam", "Sayk", "Sayng", "Sep", "Sey", "Sway", "Sin", "Sim", "Sip", "Ya", "Yak", "Yak", "Yang", "Yang", "Yang", "Yang", "Yang", "Yang", "Yang", "Yang", "Ye", "Ye", "Ye", "Ye", "Ye", "Ye", "Ye", "Ye", "Ye", "Ye", "Ye", "Yek", "Yek", "Yek", "Yek", "Yen", "Yen", "Yen", "Yen", "Yen", "Yen", "Yen", "Yen", "Yen", "Yen", "Yen", "Yen", "Yen", "Yen", "Yel", "Yel", "Yel", "Yel", "Yel", "Yel", "Yem", "Yem", "Yem", "Yem", "Yem", "Yep", "Yeng", "Yeng", "Yeng", "Yeng", "Yeng", "Yeng", "Yeng", "Yeng", "Yeng", "Yeng", "Yeng", "Yeng", "Yeng", "Yey", "Yey", "Yey", "Yey", "O", "Yo", "Yo", "Yo", "Yo", "Yo", "Yo", "Yo", "Yo", "Yo", "Yo", "Yong", "Wun", "Wen", "Yu", "Yu", "Yu", "Yu", "Yu", "Yu", "Yu", "Yu", "Yu", "Yu", "Yuk", "Yuk", "Yuk", "Yun", "Yun", "Yun", "Yun", "Yul", "Yul", "Yul", "Yul", "Yung", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "Ik", "Ik", "In", "In", "In", "In", "In", "In", "In", "Im", "Im", "Im", "Ip", "Ip", "Ip", "Cang", "Cek", "Ci", "Cip", "Cha", "Chek"];
const DC = Object.freeze(TC);
const MC = ["Chey", "Thak", "Thak", "Thang", "Thayk", "Thong", "Pho", "Phok", "Hang", "Hang", "Hyen", "Hwak", "Wu", "Huo", void 0, void 0, "Zhong", void 0, "Qing", void 0, void 0, "Xi", "Zhu", "Yi", "Li", "Shen", "Xiang", "Fu", "Jing", "Jing", "Yu", void 0, "Hagi", void 0, "Zhu", void 0, void 0, "Yi", "Du", void 0, void 0, void 0, "Fan", "Si", "Guan", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const QC = Object.freeze(MC);
const xC = ["ff", "fi", "fl", "ffi", "ffl", "st", "st", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "mn", "me", "mi", "vn", "mkh", void 0, void 0, void 0, void 0, void 0, "yi", void 0, "ay", "`", void 0, "d", "h", "k", "l", "m", "m", "t", "+", "sh", "s", "sh", "s", "a", "a", void 0, "b", "g", "d", "h", "v", "z", void 0, "t", "y", "k", "k", "l", void 0, "l", void 0, "n", "n", void 0, "p", "p", void 0, "ts", "ts", "r", "sh", "t", "vo", "b", "k", "p", "l", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const GC = Object.freeze(xC);
const WC = [void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const NC = Object.freeze(WC);
const PC = [void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const FC = Object.freeze(PC);
const RC = [void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "~", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "..", "--", "-", "_", "_", "(", ") ", "{", "} ", "[", "] ", "[(", ")] ", "<<", ">> ", "<", "> ", "[", "] ", "{", "}", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, ",", ",", ".", void 0, ";", ":", "?", "!", "-", "(", ")", "{", "}", "{", "}", "#", "&", "*", "+", "-", "<", ">", "=", void 0, "\\", "$", "%", "@", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0];
const KC = Object.freeze(RC);
const AC = [void 0, "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~", void 0, void 0, ".", "[", "]", ",", "*", "wo", "a", "i", "u", "e", "o", "ya", "yu", "yo", "tu", "+", "a", "i", "u", "e", "o", "ka", "ki", "ku", "ke", "ko", "sa", "si", "su", "se", "so", "ta", "ti", "tu", "te", "to", "na", "ni", "nu", "ne", "no", "ha", "hi", "hu", "he", "ho", "ma", "mi", "mu", "me", "mo", "ya", "yu", "yo", "ra", "ri", "ru", "re", "ro", "wa", "n", ":", ";", void 0, "g", "gg", "gs", "n", "nj", "nh", "d", "dd", "r", "lg", "lm", "lb", "ls", "lt", "lp", "rh", "m", "b", "bb", "bs", "s", "ss", void 0, "j", "jj", "c", "k", "t", "p", "h", void 0, void 0, void 0, "a", "ae", "ya", "yae", "eo", "e", void 0, void 0, "yeo", "ye", "o", "wa", "wae", "oe", void 0, void 0, "yo", "u", "weo", "we", "wi", "yu", void 0, void 0, "eu", "yi", "i", void 0, void 0, void 0, "/C", "PS", "!", "-", "|", "Y=", "W=", void 0, "|", "-", "|", "-", "|", "#", "O", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, "{", "|", "}", void 0, void 0, void 0, void 0];
const OC = Object.freeze(AC);
const en = Object.freeze({ 0: j1, 1: m1, 2: k1, 3: Z1, 4: J1, 5: X1, 6: B1, 7: D1, 9: Q1, 10: G1, 11: N1, 12: F1, 13: K1, 14: O1, 15: E1, 16: $1, 17: q1, 18: V1, 19: ok, 20: nk, 21: uk, 22: dk, 23: sk, 24: rk, 30: vk, 31: ck, 32: pk, 33: jk, 36: mk, 37: kk, 38: Zk, 39: Jk, 40: Xk, 48: Bk, 49: Dk, 50: Qk, 51: Gk, 78: Nk, 79: Fk, 80: Kk, 81: Ok, 82: Ek, 83: $k, 84: qk, 85: Vk, 86: oL, 87: nL, 88: uL, 89: dL, 90: sL, 91: rL, 92: vL, 93: cL, 94: pL, 95: jL, 96: mL, 97: kL, 98: ZL, 99: JL, 100: XL, 101: BL, 102: DL, 103: QL, 104: GL, 105: NL, 106: FL, 107: KL, 108: OL, 109: EL, 110: $L, 111: qL, 112: VL, 113: oZ, 114: nZ, 115: uZ, 116: dZ, 117: sZ, 118: rZ, 119: vZ, 120: cZ, 121: pZ, 122: jZ, 123: mZ, 124: kZ, 125: ZZ, 126: JZ, 127: XZ, 128: BZ, 129: DZ, 130: QZ, 131: GZ, 132: NZ, 133: FZ, 134: KZ, 135: OZ, 136: EZ, 137: $Z, 138: qZ, 139: VZ, 140: oS, 141: nS, 142: uS, 143: dS, 144: sS, 145: rS, 146: vS, 147: cS, 148: pS, 149: jS, 150: mS, 151: kS, 152: ZS, 153: JS, 154: XS, 155: BS, 156: DS, 157: QS, 158: GS, 159: NS, 160: FS, 161: KS, 162: OS, 163: ES, 164: $S, 167: qS, 172: VS, 173: oJ, 174: nJ, 175: uJ, 176: dJ, 177: sJ, 178: rJ, 179: vJ, 180: cJ, 181: pJ, 182: jJ, 183: mJ, 184: kJ, 185: ZJ, 186: JJ, 187: XJ, 188: BJ, 189: DJ, 190: QJ, 191: GJ, 192: NJ, 193: FJ, 194: KJ, 195: OJ, 196: EJ, 197: $J, 198: qJ, 199: VJ, 200: oC, 201: nC, 202: uC, 203: dC, 204: sC, 205: rC, 206: vC, 207: cC, 208: pC, 209: jC, 210: mC, 211: kC, 212: ZC, 213: JC, 214: XC, 215: BC, 249: DC, 250: QC, 251: GC, 252: NC, 253: FC, 254: KC, 255: OC });
const de = {};
for (const i in en) if (Object.prototype.hasOwnProperty.call(en, i)) {
  const o = en[i];
  if (o) {
    const e = Number(i) * 256, n = o.length;
    for (let a = 0; a < n; a++) {
      const u = o[a], t = e + a, d = String(t);
      Object.prototype.hasOwnProperty.call(de, d) || (typeof u == "string" ? de[d] = u : de[d] = void 0);
    }
  }
}
Object.freeze(de);
const jg = [["เฅียะ", "khia"], ["เฅืยะ", "khuea"], ["เฅือย", "khueai"], ["เฆียว", "khiao"], ["เฆียะ", "khia"], ["เฆืยะ", "khuea"], ["เฆือย", "khueai"], ["เงียว", "ngiao"], ["เงียะ", "ngia"], ["เงืยะ", "nguea"], ["เงือย", "ngueai"], ["เจียว", "chiao"], ["เจียะ", "chia"], ["เจืยะ", "chuea"], ["เจือย", "chueai"], ["เฉียว", "chiao"], ["เฉียะ", "chia"], ["เฉืยะ", "chuea"], ["เฉือย", "chueai"], ["เชียว", "chiao"], ["เชียะ", "chia"], ["เชืยะ", "chuea"], ["เชือย", "chueai"], ["เซียว", "siao"], ["เซียะ", "sia"], ["เซืยะ", "suea"], ["เซือย", "sueai"], ["เดียว", "diao"], ["เดียะ", "dia"], ["เดืยะ", "duea"], ["เดือย", "dueai"], ["เตียว", "tiao"], ["เตียะ", "tia"], ["เตืยะ", "tuea"], ["เตือย", "tueai"], ["เถียว", "tiao"], ["เถียะ", "thia"], ["เถืยะ", "thuea"], ["เถือย", "thueai"], ["น้อย", "noi"], ["หน้า", "na"], ["เหล่อ", "le"], ["หยก", "yok"], ["หล่อ", "lo"], ["หม่อง", "mong"], ["หน่อง", "nong"], ["หนอง", "nong"], ["ทหาร", "thahan"], ["เทียว", "thiao"], ["เทียะ", "thia"], ["เทืยะ", "thuea"], ["เทือย", "thueai"], ["เธียว", "thiao"], ["เธียะ", "thia"], ["เธืยะ", "thuea"], ["เธือย", "thueai"], ["เนียว", "niao"], ["เนียะ", "nia"], ["เนืยะ", "nuea"], ["เนือย", "nueai"], ["เบียว", "biao"], ["เบียะ", "bia"], ["เบืยะ", "buea"], ["เบือย", "bueai"], ["เปียว", "piao"], ["เปียะ", "pia"], ["เปืยะ", "puea"], ["เปือย", "pueai"], ["เผียว", "phiao"], ["เผียะ", "phia"], ["เผืยะ", "phuea"], ["เผือย", "phueai"], ["เฝียว", "fiao"], ["เฝียะ", "fia"], ["เฝืยะ", "fuea"], ["เฝือย", "fueai"], ["เพียว", "phiao"], ["เพียะ", "phia"], ["เพืยะ", "phuea"], ["เพือย", "phueai"], ["เฟียว", "fiao"], ["เฟียะ", "fia"], ["เฟืยะ", "fuea"], ["เฟือย", "fueai"], ["เมียว", "miao"], ["เมียะ", "mia"], ["เมืยะ", "muea"], ["เมือย", "mueai"], ["หมื่น", "meun"], ["่", ""], ["เยียว", "yiao"], ["เยึยะ", "yia"], ["เยึีย", "yia"], ["เยืยะ", "yuea"], ["เยือย", "yueai"], ["เรือ", "rua"], ["เรียว", "riao"], ["เรียะ", "ria"], ["เรืยะ", "ruea"], ["เรือย", "rueai"], ["เลียว", "liao"], ["เลียะ", "lia"], ["เลืยะ", "luea"], ["เลือย", "lueai"], ["เวียว", "wiao"], ["เวียะ", "wia"], ["เวืยะ", "wuea"], ["เวือย", "wueai"], ["เศียว", "siao"], ["เศียะ", "sia"], ["เศืยะ", "suea"], ["เศือย", "sueai"], ["เษียว", "siao"], ["เษียะ", "sia"], ["เษืยะ", "suea"], ["เษือย", "sueai"], ["เสียว", "siao"], ["เสียะ", "sia"], ["เสืยะ", "suea"], ["เสือย", "sueai"], ["เหียว", "hiao"], ["เหียะ", "hia"], ["เหืยะ", "huea"], ["เหือย", "hueai"], ["เฮียว", "hiao"], ["เฮียะ", "hia"], ["เฮืยะ", "huea"], ["เฮือย", "hueai"], ["เต็ม", "tem"], ["กัวะ", "kua"], ["ขัวะ", "khua"], ["ฃัวะ", "khua"], ["คัวะ", "khua"], ["ฅัวะ", "khua"], ["ฆัวะ", "khua"], ["งัวะ", "ngua"], ["จัวะ", "chua"], ["ฉัวะ", "chua"], ["ชัวะ", "chua"], ["ซัวะ", "sua"], ["ดัวะ", "dua"], ["ตัวะ", "tua"], ["ถัวะ", "thua"], ["ทัวะ", "thua"], ["ธัวะ", "thua"], ["นัวะ", "nua"], ["บัวะ", "bua"], ["ปัวะ", "pua"], ["ผัวะ", "phua"], ["ฝัวะ", "fua"], ["พัวะ", "phua"], ["ฟัวะ", "fua"], ["มัวะ", "mua"], ["ยัวะ", "yua"], ["รัวะ", "rua"], ["ลัวะ", "lua"], ["วัวะ", "wua"], ["ศัวะ", "sua"], ["ษัวะ", "sua"], ["สัวะ", "sua"], ["หัวะ", "hua"], ["ฮัวะ", "hua"], ["เกอะ", "koe"], ["เกีย", "kia"], ["เกืย", "kuea"], ["เขอะ", "khoe"], ["เขีย", "khia"], ["เขืย", "khuea"], ["เฃอะ", "khoe"], ["เฃีย", "khia"], ["เฃืย", "khuea"], ["เคอะ", "khoe"], ["เคีย", "khia"], ["เคืย", "khuea"], ["เฅอะ", "khoe"], ["เฅีย", "khia"], ["เฅืย", "khuea"], ["เฆอะ", "khoe"], ["เฆีย", "khia"], ["เฆืย", "khuea"], ["เงอะ", "ngoe"], ["เงีย", "ngia"], ["เงืย", "nguea"], ["เจอะ", "choe"], ["เจีย", "chia"], ["เจืย", "chuea"], ["เฉอะ", "choe"], ["เฉีย", "chia"], ["เฉืย", "chuea"], ["เชอะ", "choe"], ["เชีย", "chia"], ["เชืย", "chuea"], ["เซอะ", "soe"], ["เซีย", "sia"], ["เซืย", "suea"], ["เดอะ", "doe"], ["เดีย", "dia"], ["เดืย", "duea"], ["เตอะ", "toe"], ["เตีย", "tia"], ["เตืย", "tuea"], ["เถอะ", "thoe"], ["เถีย", "thia"], ["เถืย", "thuea"], ["เทอะ", "thoe"], ["เทีย", "thia"], ["เทืย", "thuea"], ["เธอะ", "thoe"], ["เธีย", "thia"], ["เธืย", "thuea"], ["เนอะ", "noe"], ["เนีย", "nia"], ["เนืย", "nuea"], ["เบอะ", "boe"], ["เบีย", "bia"], ["เบืย", "buea"], ["เปอะ", "poe"], ["เปีย", "pia"], ["เปืย", "puea"], ["เผอะ", "phoe"], ["เผีย", "phia"], ["เผืย", "phuea"], ["เฝอะ", "foe"], ["เฝีย", "fia"], ["เฝืย", "fuea"], ["เพอะ", "phoe"], ["เพีย", "phia"], ["เพืย", "phuea"], ["เฟอะ", "foe"], ["เฟีย", "fia"], ["เฟืย", "fuea"], ["เมอะ", "moe"], ["เมีย", "mia"], ["เมืย", "muea"], ["เยอะ", "yoe"], ["เยืย", "yuea"], ["เรอะ", "roe"], ["เรีย", "ria"], ["เรืย", "ruea"], ["เลอะ", "loe"], ["เลีย", "lia"], ["เลืย", "luea"], ["เวอะ", "woe"], ["เวีย", "wia"], ["เวืย", "wuea"], ["เศอะ", "soe"], ["เศีย", "sia"], ["เศืย", "suea"], ["เษอะ", "soe"], ["เษีย", "sia"], ["เษืย", "suea"], ["เสอะ", "soe"], ["เสีย", "sia"], ["เสืย", "suea"], ["เหอะ", "hoe"], ["เหีย", "hia"], ["เหืย", "huea"], ["เฮอะ", "hoe"], ["เฮีย", "hia"], ["เฮืย", "huea"], ["โหมด", "mode"], ["ไก", "kai"], ["ไข", "khai"], ["ไฃ", "khai"], ["ไค", "khai"], ["ไฅ", "khai"], ["ไฆ", "khai"], ["ไง", "ngai"], ["ไจ", "chai"], ["ไฉ", "chai"], ["ไช", "chai"], ["ไซ", "sai"], ["ได", "dai"], ["ไต", "tai"], ["ไถ", "thai"], ["ไธ", "thai"], ["ไน", "nai"], ["ไบ", "bai"], ["ไป", "pai"], ["ไผ", "phai"], ["ไฝ", "fai"], ["ไพ", "phai"], ["ไฟ", "fai"], ["ไม", "mai"], ["ไย", "yai"], ["ไร", "rai"], ["ไล", "lai"], ["ไว", "wai"], ["ไศ", "sai"], ["ไษ", "sai"], ["ไส", "sai"], ["ไฮ", "hai"], ["กนก", "kanok"], ["กรร", "ka"], ["กวย", "kuai"], ["กอย", "koi"], ["กัย", "kai"], ["กัว", "kua"], ["กาย", "kai"], ["กาว", "kao"], ["กิว", "kio"], ["กือ", "kue"], ["กุย", "kui"], ["ขรร", "kha"], ["ขวย", "khuai"], ["ขอย", "khoi"], ["ขัย", "khai"], ["ขัว", "khua"], ["ขาย", "khai"], ["ขาว", "khao"], ["ขิว", "khio"], ["ขือ", "khue"], ["ขุย", "khui"], ["ฃรร", "kha"], ["ฃวย", "khuai"], ["ฃอย", "khoi"], ["ฃัย", "khai"], ["ฃัว", "khua"], ["ฃาย", "khai"], ["ฃาว", "khao"], ["ฃิว", "khio"], ["ฃือ", "khue"], ["ฃุย", "khui"], ["ครร", "kha"], ["ควย", "khuai"], ["คอย", "khoi"], ["คัย", "khai"], ["คัว", "khua"], ["คาย", "khai"], ["คาว", "khao"], ["ความ", "khwam"], ["คิว", "khio"], ["คือ", "khue"], ["คุย", "khui"], ["ฅรร", "kha"], ["ฅวย", "khuai"], ["ฅอย", "khoi"], ["ฅัย", "khai"], ["ฅัว", "khua"], ["ฅาย", "khai"], ["ฅาว", "khao"], ["ฅิว", "khio"], ["ฅือ", "khue"], ["ฅุย", "khui"], ["ฆรร", "kha"], ["ฆวย", "khuai"], ["ฆอย", "khoi"], ["ฆัย", "khai"], ["ฆัว", "khua"], ["ฆาย", "khai"], ["ฆาว", "khao"], ["ฆิว", "khio"], ["ฆือ", "khue"], ["ฆุย", "khui"], ["ยุ่ง", "yung"], ["งรร", "nga"], ["งวย", "nguai"], ["งวง", "nguang"], ["งอย", "ngoi"], ["งัย", "ngai"], ["งัว", "ngua"], ["งาย", "ngai"], ["งาว", "ngao"], ["งิว", "ngio"], ["งือ", "ngue"], ["งุย", "ngui"], ["จรร", "cha"], ["จวย", "chuai"], ["จอย", "choi"], ["จัย", "chai"], ["จัว", "chua"], ["จาย", "chai"], ["จาว", "chao"], ["จิว", "chio"], ["จือ", "chue"], ["จุย", "chui"], ["ฉรร", "cha"], ["ฉวย", "chuai"], ["ฉอย", "choi"], ["ฉัย", "chai"], ["ฉัว", "chua"], ["ฉาย", "chai"], ["ฉาว", "chao"], ["ฉิว", "chio"], ["ฉือ", "chue"], ["ฉุย", "chui"], ["ชรร", "cha"], ["ชวย", "chuai"], ["ชอย", "choi"], ["ชัย", "chai"], ["ชัว", "chua"], ["ชาติ", "chat"], ["ชาย", "chai"], ["ชาว", "chao"], ["ชิว", "chio"], ["ชือ", "chue"], ["ชุย", "chui"], ["ซรร", "sa"], ["ซวย", "suai"], ["ซอย", "soi"], ["ซัย", "sai"], ["ซัว", "sua"], ["ซาย", "sai"], ["ซาว", "sao"], ["ซิว", "sio"], ["ซือ", "sue"], ["ซุย", "sui"], ["ดรร", "da"], ["ดวย", "duai"], ["ดอย", "doi"], ["ดัย", "dai"], ["ดัว", "dua"], ["ดาย", "dai"], ["ดาว", "dao"], ["ดิว", "diw"], ["ดือ", "due"], ["ดุย", "dui"], ["ตรร", "ta"], ["ตวย", "tuai"], ["ตอย", "toi"], ["ตัย", "tai"], ["ตัว", "tua"], ["ตาย", "tai"], ["ตาว", "tao"], ["ติว", "tio"], ["ตือ", "tue"], ["ตุย", "tui"], ["ถรร", "tha"], ["ถวย", "tuau"], ["ถอย", "thoi"], ["ถัย", "thai"], ["ถัว", "thua"], ["ถาย", "thai"], ["ถาว", "thao"], ["ถิว", "tio"], ["ถุย", "thui"], ["ทรร", "tha"], ["ทวย", "thuai"], ["ทอย", "thoi"], ["ทัย", "thai"], ["ทัว", "thua"], ["ทาย", "thai"], ["ทาว", "thao"], ["ทิว", "thio"], ["ทือ", "thue"], ["ทุย", "thui"], ["ธรร", "tha"], ["ธวย", "thuai"], ["ธอย", "thoi"], ["ธัย", "thai"], ["ธัว", "thua"], ["ธาย", "thai"], ["ธาว", "thao"], ["ธิว", "thio"], ["ธุย", "thui"], ["นรร", "na"], ["นวย", "nuai"], ["นอย", "noi"], ["น้อง", "nong"], ["นัย", "nai"], ["นัว", "nua"], ["นาย", "nai"], ["นาว", "nao"], ["นิว", "nio"], ["นือ", "nue"], ["นุย", "nui"], ["บรร", "ba"], ["บวย", "buai"], ["บอย", "boi"], ["บัย", "bai"], ["บัว", "bua"], ["บาย", "bai"], ["บาว", "bao"], ["บิว", "bio"], ["บือ", "bue"], ["บุย", "bui"], ["ปรร", "pa"], ["ปวย", "puai"], ["ปอย", "poi"], ["ปัย", "pai"], ["ปัว", "pua"], ["ปาย", "pai"], ["ปาว", "pao"], ["ภาร", "phan"], ["ปิว", "pio"], ["ปือ", "pue"], ["ปุย", "pui"], ["ผรร", "pha"], ["ผวย", "phuai"], ["ผอย", "phoi"], ["ผัย", "phai"], ["ผัว", "phua"], ["ผาย", "phai"], ["ผาว", "phao"], ["ผิว", "phio"], ["ผือ", "phue"], ["ผุย", "phui"], ["ฝรร", "fa"], ["ฝวย", "fuai"], ["ฝอย", "foi"], ["ฝัย", "fai"], ["ฝาย", "fai"], ["ฝาว", "fao"], ["ฝิว", "fio"], ["ฝือ", "fue"], ["ฝุย", "fui"], ["พรร", "pha"], ["พวย", "phuai"], ["พอย", "phoi"], ["พัย", "phai"], ["พัว", "phua"], ["พาย", "phai"], ["พาว", "phao"], ["พิว", "phio"], ["พือ", "phue"], ["พุย", "phui"], ["ฟรร", "fa"], ["ฟวย", "fuai"], ["ฟอย", "faoi"], ["ฟัย", "fai"], ["ฟัว", "fua"], ["ฟาย", "fai"], ["ฟาว", "fao"], ["ฟิว", "fuai"], ["ฟือ", "fue"], ["ฟุย", "fui"], ["มรร", "ma"], ["มวย", "muai"], ["มอย", "moi"], ["มัย", "mai"], ["มัว", "mua"], ["มาย", "mai"], ["มาว", "mao"], ["มิว", "mio"], ["มือ", "mue"], ["มุย", "mui"], ["ยรร", "ya"], ["ยวย", "yuai"], ["ยอย", "yoi"], ["ยัย", "yai"], ["ยัว", "yua"], ["ยาย", "yai"], ["ยาว", "yao"], ["ยิว", "yio"], ["ยือ", "yue"], ["ยุย", "yui"], ["รรร", "ra"], ["รอง", "rong"], ["รวย", "ruai"], ["รอย", "roi"], ["รัย", "rai"], ["รัว", "rua"], ["ราย", "rai"], ["ราว", "rao"], ["ริว", "rio"], ["รือ", "rue"], ["รุย", "rui"], ["ลรร", "la"], ["ลวย", "luai"], ["ลอย", "loi"], ["ลัย", "lai"], ["ลัว", "lua"], ["ลาย", "lai"], ["ลาว", "lao"], ["ลิว", "lio"], ["ลือ", "lue"], ["ลุย", "lui"], ["วรร", "wa"], ["ววย", "wuai"], ["วอย", "woi"], ["วัย", "wai"], ["วัว", "wua"], ["วาย", "wai"], ["วาว", "wao"], ["วิว", "wio"], ["วุย", "wui"], ["ศรร", "sa"], ["ศวย", "suai"], ["ศอย", "soi"], ["ศัย", "sai"], ["ศาย", "sai"], ["ศาว", "sao"], ["ศิว", "sio"], ["ศุย", "sui"], ["ษรร", "sa"], ["ษวย", "suai"], ["ษอย", "soi"], ["ษัย", "sai"], ["ษาย", "sai"], ["ษาว", "sao"], ["ษา", "sa"], ["ษิว", "sio"], ["ษุย", "sui"], ["สรร", "sa"], ["สวย", "suai"], ["สอย", "soi"], ["สัย", "sai"], ["สาย", "sai"], ["สาว", "sao"], ["สิว", "sio"], ["สือ", "sue"], ["สุย", "sui"], ["หรร", "ha"], ["หมด", "mod"], ["หวย", "huai"], ["หอย", "hoi"], ["หัย", "hai"], ["หัว", "hua"], ["หาย", "hai"], ["มหา", "maha"], ["หาว", "hao"], ["หิว", "hio"], ["หือ", "hue"], ["หุย", "hui"], ["ฮรร", "ha"], ["ฮวย", "huai"], ["ฮอย", "hoi"], ["ฮัย", "hai"], ["ฮาย", "hai"], ["ฮาว", "haw"], ["ฮิว", "hio"], ["ฮือ", "hue"], ["ฮุย", "hui"], ["เกย", "koei"], ["เกอ", "koe"], ["เกะ", "ku"], ["เกา", "kao"], ["เกิ", "koe"], ["เก็", "ke"], ["เขย", "khoei"], ["เขอ", "khoe"], ["เขะ", "khe"], ["เขา", "khao"], ["เขิ", "khoe"], ["เข็", "khu"], ["เฃย", "khoei"], ["เฃอ", "khoe"], ["เฃะ", "khe"], ["เฃา", "khao"], ["เฃิ", "khoe"], ["เฃ็", "khu"], ["เคย", "khoei"], ["เคอ", "khoe"], ["เคะ", "khe"], ["เคา", "khao"], ["เคิ", "khoe"], ["เค็", "khu"], ["เฅย", "khoei"], ["เฅอ", "khoe"], ["เฅะ", "khe"], ["เฅา", "khao"], ["เฅิ", "khoe"], ["เฅ็", "khu"], ["เฆย", "khoei"], ["เฆอ", "khoe"], ["เฆะ", "khe"], ["เฆา", "khao"], ["เฆิ", "khoe"], ["เฆ็", "khu"], ["เงย", "ngoei"], ["เงอ", "ngoe"], ["เงะ", "nge"], ["เงา", "ngao"], ["เงิ", "ngoe"], ["เง็", "ngu"], ["เจย", "choei"], ["เจอ", "choe"], ["เจะ", "che"], ["เจา", "chao"], ["เจิ", "choe"], ["เจ็", "chu"], ["เฉย", "choei"], ["เฉอ", "choe"], ["เฉะ", "che"], ["เฉา", "chao"], ["เฉิ", "choe"], ["เฉ็", "chu"], ["เชย", "choei"], ["เชอ", "choe"], ["เชะ", "che"], ["เชา", "chao"], ["เชิ", "choe"], ["เช็", "chu"], ["เซย", "soei"], ["เซอ", "soe"], ["เซะ", "se"], ["เซา", "sao"], ["เซิ", "soe"], ["เซ็", "su"], ["เดย", "doei"], ["เดอ", "doe"], ["เดะ", "de"], ["เดา", "dao"], ["เดิ", "doe"], ["เด็", "du"], ["เตย", "toei"], ["เตอ", "toe"], ["เตะ", "te"], ["เตา", "tao"], ["เติ", "toe"], ["เต็", "tu"], ["เถย", "thoei"], ["เถอ", "thoe"], ["เถา", "thao"], ["เถิ", "thoe"], ["เทย", "thoei"], ["เทอ", "thoe"], ["เทะ", "the"], ["เทา", "thao"], ["เทิ", "thoe"], ["เท็", "thu"], ["เธย", "thoei"], ["เธอ", "thoe"], ["เธา", "thao"], ["เธิ", "thoe"], ["เนย", "noei"], ["เนอ", "noe"], ["เนะ", "ne"], ["เนา", "nao"], ["เนิ", "noe"], ["เน็", "nu"], ["เบย", "boei"], ["เบอ", "boe"], ["เบะ", "be"], ["เบา", "bao"], ["เบิ", "boe"], ["เบ็", "bu"], ["เปย", "poei"], ["เปอ", "poe"], ["เปะ", "pe"], ["เปา", "pao"], ["เปิ", "poe"], ["เป็", "pu"], ["เผย", "phoei"], ["เผอ", "phoe"], ["เผะ", "phe"], ["เผา", "phao"], ["เผิ", "phoe"], ["เผ็", "phu"], ["เฝย", "foei"], ["เฝอ", "foe"], ["เฝา", "fao"], ["เฝิ", "foe"], ["เฝ็", "fu"], ["เพย", "phoei"], ["เพอ", "phoe"], ["เพะ", "phe"], ["เพา", "phao"], ["เพิ", "phoe"], ["เพ็", "phu"], ["เฟย", "faoei"], ["เฟอ", "foe"], ["เฟา", "fao"], ["เฟิ", "foe"], ["เฟ็", "fu"], ["เมย", "moei"], ["เมอ", "moe"], ["เมะ", "me"], ["เมา", "mao"], ["เมิ", "moe"], ["เม็", "mu"], ["เยย", "yoei"], ["เยอ", "yoe"], ["เยา", "yao"], ["เยิ", "yoe"], ["เย็", "yu"], ["เรย", "roei"], ["เรอ", "roe"], ["เรา", "rao"], ["เริ", "roe"], ["เร็", "ru"], ["เลย", "loei"], ["เลอ", "loe"], ["เละ", "le"], ["เลา", "lao"], ["เลิ", "loe"], ["เล็", "lu"], ["เวย", "woei"], ["เวอ", "woe"], ["เวะ", "we"], ["เวา", "wao"], ["เวิ", "woe"], ["เว็", "wu"], ["เศย", "soei"], ["เศร้า", "sao"], ["เศอ", "soe"], ["เศา", "sao"], ["เศิ", "soe"], ["เศ็", "su"], ["เษย", "soei"], ["เษอ", "soe"], ["เษา", "sao"], ["เษิ", "soe"], ["เษ็", "su"], ["เสย", "soei"], ["เสอ", "soe"], ["เสะ", "se"], ["เสา", "sao"], ["เสิ", "soe"], ["เส็", "su"], ["เหย", "hoei"], ["เหอ", "hoe"], ["เหะ", "he"], ["เหา", "hao"], ["เหิ", "hoe"], ["เห็", "he"], ["เฮย", "hoei"], ["เฮอ", "hoe"], ["เฮะ", "he"], ["เฮา", "hao"], ["เฮิ", "hoe"], ["เฮ็", "hu"], ["แต", "tae"], ["แกว", "kaeo"], ["แกะ", "kae"], ["แขะ", "khae"], ["แฃะ", "khae"], ["แคว", "khaeo"], ["แคะ", "khae"], ["แฅะ", "khae"], ["แฆะ", "khae"], ["แงะ", "ngae"], ["แจว", "chaeo"], ["แจะ", "chae"], ["แฉว", "chaeo"], ["แฉะ", "chae"], ["แชว", "chaeo"], ["แชะ", "chae"], ["แซว", "saeo"], ["แซะ", "sae"], ["แดว", "daeo"], ["แดะ", "dae"], ["แตว", "taeo"], ["แตะ", "tae"], ["แถว", "taeo"], ["แทว", "thaeo"], ["แทะ", "thae"], ["แธว", "thaeo"], ["แนว", "naew"], ["แนะ", "nae"], ["แบว", "baeo"], ["แบะ", "bae"], ["แปว", "paeo"], ["แปะ", "pae"], ["แผว", "phaeo"], ["แผะ", "phae"], ["แฝว", "faeo"], ["แฝะ", "fae"], ["แพว", "phaeo"], ["แพะ", "phae"], ["แฟว", "faeo"], ["แฟะ", "fae"], ["แมว", "maeo"], ["แมะ", "mae"], ["แยว", "yaeo"], ["แยะ", "yae"], ["แรว", "raeo"], ["แระ", "rae"], ["แลว", "laeo"], ["และ", "lae"], ["แวว", "waeo"], ["แวะ", "wae"], ["แศว", "saeo"], ["แศะ", "sae"], ["แษว", "saeo"], ["แษะ", "sae"], ["แสว", "saeo"], ["แสะ", "sae"], ["แหว", "haeo"], ["แหะ", "hae"], ["แฮว", "haeo"], ["แฮะ", "hae"], ["โกย", "koi"], ["โกะ", "ko"], ["โขย", "khoi"], ["โขะ", "kho"], ["โฃย", "khoi"], ["โฃะ", "kho"], ["โคย", "khoi"], ["โคะ", "kho"], ["โฅย", "khoi"], ["โฅะ", "kho"], ["โฆย", "khoi"], ["โฆะ", "kho"], ["โงย", "ngoi"], ["โงะ", "ngo"], ["โจร", "cho"], ["โจย", "choi"], ["โจะ", "cho"], ["โฉย", "choi"], ["โฉะ", "cho"], ["โชย", "choi"], ["โชะ", "cho"], ["โซย", "soi"], ["โซะ", "so"], ["โดย", "doi"], ["โดะ", "do"], ["โตย", "toi"], ["โตะ", "to"], ["โถย", "thoi"], ["โทย", "thoi"], ["โทะ", "tho"], ["โธย", "thoi"], ["โนย", "noi"], ["โนะ", "no"], ["โบย", "boi"], ["โบะ", "bo"], ["โปย", "poi"], ["โปะ", "po"], ["โผย", "phoi"], ["โผะ", "pho"], ["โฝย", "foi"], ["โฝะ", "fo"], ["โพย", "phoi"], ["โพะ", "pho"], ["โฟย", "faoi"], ["โฟะ", "fo"], ["โมย", "moi"], ["โมะ", "mo"], ["โยย", "yoi"], ["โยะ", "yo"], ["โรย", "roi"], ["โระ", "ro"], ["โลย", "loi"], ["โละ", "lo"], ["โวย", "woi"], ["โวะ", "wo"], ["โศย", "soi"], ["โศะ", "so"], ["โษย", "soi"], ["โษะ", "so"], ["โสย", "soi"], ["โสะ", "so"], ["โหย", "hoi"], ["โหะ", "ho"], ["โฮย", "hoi"], ["โฮะ", "ho"], ["ไกย", "kai"], ["ไขย", "khai"], ["ไฃย", "khai"], ["ไคย", "khai"], ["ไฅย", "khai"], ["ไฆย", "khai"], ["ไงย", "ngai"], ["ไจย", "chai"], ["ไฉย", "chai"], ["ไชย", "chai"], ["ไซย", "sai"], ["ไดย", "dai"], ["ไตย", "tai"], ["ไถย", "thai"], ["ไทย", "thai"], ["ไธย", "thai"], ["ไนย", "nai"], ["ไบย", "bai"], ["ไปย", "pai"], ["ไผย", "phai"], ["ไฝย", "fai"], ["ไพย", "phai"], ["ไฟย", "fai"], ["ไมย", "mai"], ["ไยย", "yai"], ["ไรย", "rai"], ["ไลย", "lai"], ["ไวย", "wai"], ["ไศย", "sai"], ["ไษย", "sai"], ["ไสย", "sai"], ["ไหย", "hai"], ["ไฮย", "hai"], ["อาน", "an"], ["กอ", "ko"], ["กะ", "ka"], ["กั", "ka"], ["การ", "kan"], ["กา", "ka"], ["กำ", "kam"], ["กิ", "ki"], ["กี", "ki"], ["กึ", "kue"], ["กุ", "ku"], ["กู", "ku"], ["ขว", "khua"], ["ขอ", "kho"], ["ขะ", "kha"], ["ขั", "kha"], ["ขา", "kha"], ["ขำ", "kham"], ["ขิ", "khi"], ["ขี", "khi"], ["ขึ", "khue"], ["ขุ", "khu"], ["ขู", "khu"], ["ฃว", "khua"], ["ฃอ", "kho"], ["ฃะ", "kha"], ["ฃั", "kha"], ["ฃา", "kha"], ["ฃำ", "kham"], ["ฃิ", "khi"], ["ฃี", "khi"], ["ฃึ", "khue"], ["ฃุ", "khu"], ["ฃู", "khu"], ["คว", "khua"], ["คอ", "kho"], ["คะ", "kha"], ["คั", "kha"], ["คา", "kha"], ["คำ", "kham"], ["คิ", "khi"], ["คี", "khi"], ["คึ", "khue"], ["คุ", "khu"], ["คู", "khu"], ["ฅว", "khua"], ["ฅอ", "kho"], ["ฅะ", "kha"], ["ฅั", "kha"], ["ฅา", "kha"], ["ฅำ", "kham"], ["ฅิ", "khi"], ["ฅี", "khi"], ["ฅึ", "khue"], ["ฅุ", "khu"], ["ฅู", "khu"], ["ฆว", "khua"], ["ฆอ", "kho"], ["ฆะ", "kha"], ["ฆั", "kha"], ["ฆา", "kha"], ["ฆำ", "kham"], ["ฆิ", "khi"], ["ฆี", "khi"], ["ฆึ", "khue"], ["ฆุ", "khu"], ["ฆู", "khu"], ["งว", "ngua"], ["งอ", "ngo"], ["งะ", "nga"], ["งั", "nga"], ["งา", "nga"], ["งำ", "ngam"], ["งิ", "ngi"], ["งี", "ngi"], ["งึ", "ngue"], ["งุ", "ngu"], ["งู", "ngu"], ["จว", "chua"], ["จอ", "cho"], ["จะ", "cha"], ["จั", "cha"], ["จา", "cha"], ["จำ", "cham"], ["จิ", "chi"], ["จี", "chi"], ["จึ", "chue"], ["จุ", "chu"], ["จู", "chu"], ["ฉว", "chua"], ["ฉอ", "cho"], ["ฉะ", "cha"], ["ฉั", "cha"], ["ฉา", "cha"], ["ฉำ", "cham"], ["ฉิ", "chi"], ["ฉี", "chi"], ["ฉึ", "chue"], ["ฉุ", "chu"], ["ฉู", "chu"], ["ชว", "chua"], ["ชอ", "cho"], ["ชะ", "cha"], ["ชั", "cha"], ["ชา", "cha"], ["ชำ", "cham"], ["ชิ", "chi"], ["ชี", "chi"], ["ชึ", "chue"], ["ชุ", "chu"], ["ชู", "chu"], ["ซว", "sua"], ["ซอ", "so"], ["ซะ", "sa"], ["ซั", "sa"], ["ซา", "sa"], ["ซำ", "sam"], ["ซิ", "si"], ["ซี", "si"], ["ซึ", "sue"], ["ซุ", "su"], ["ซู", "su"], ["ดว", "dua"], ["ดอ", "do"], ["ดะ", "da"], ["ดั", "da"], ["ดา", "da"], ["ดำ", "dam"], ["ดิ", "di"], ["ดี", "di"], ["ดึ", "due"], ["ดุ", "du"], ["ดู", "du"], ["ตว", "tua"], ["ตอ", "to"], ["ตะ", "ta"], ["ตั", "ta"], ["ตา", "ta"], ["ตำ", "tam"], ["ติ", "ti"], ["ตี", "ti"], ["ตึ", "tue"], ["ตุ", "tu"], ["ตู", "tu"], ["ถว", "thua"], ["ถะ", "tha"], ["ถั", "tha"], ["ถา", "tha"], ["ทว", "thua"], ["ทอ", "tho"], ["ทะ", "tha"], ["ทั", "tha"], ["ท่า", "tha"], ["ทา", "tha"], ["ทำ", "tham"], ["ทิ", "thi"], ["ที", "thi"], ["ทึ", "thue"], ["ทุ", "thu"], ["ทู", "thu"], ["ธว", "thua"], ["ธะ", "tha"], ["ธั", "tha"], ["ธา", "tha"], ["ธี", "thi"], ["ธุ", "thu"], ["นว", "nua"], ["นอ", "no"], ["นะ", "na"], ["นั", "na"], ["นา", "na"], ["นำ", "nam"], ["นิ", "ni"], ["นี", "ni"], ["นึ", "nue"], ["นุ", "nu"], ["นู", "nu"], ["บว", "bua"], ["บอ", "bo"], ["บะ", "ba"], ["บั", "ba"], ["บา", "ba"], ["บำ", "bam"], ["บิ", "bi"], ["บี", "bi"], ["บึ", "bue"], ["บุ", "bu"], ["บู", "bu"], ["ปว", "pua"], ["ปอ", "po"], ["ภา", "pha"], ["ปะ", "pa"], ["ปั", "pa"], ["ปา", "pa"], ["ปำ", "pam"], ["ปิ", "pi"], ["ปี", "pi"], ["ปึ", "pue"], ["ปุ", "pu"], ["ปู", "pu"], ["ผว", "phua"], ["ผอ", "pho"], ["ผะ", "pha"], ["ผั", "pha"], ["ผา", "pha"], ["ผำ", "pham"], ["ผิ", "phi"], ["ผี", "phi"], ["ผึ", "phue"], ["ผุ", "phu"], ["ผู", "phu"], ["ฝว", "fua"], ["ฝอ", "fo"], ["ฝะ", "fa"], ["ฝั", "fa"], ["ฝา", "fa"], ["ฝำ", "fam"], ["ฝิ", "fi"], ["ฝี", "fi"], ["ฝึ", "fue"], ["ฝุ", "fu"], ["ฝู", "fu"], ["พว", "phua"], ["พอ", "pho"], ["พะ", "pha"], ["พั", "pha"], ["พา", "pha"], ["พำ", "pham"], ["พิ", "phi"], ["พี", "phi"], ["พึ", "phue"], ["พุ", "phu"], ["พู", "phu"], ["ฟว", "fua"], ["ฟอ", "fo"], ["ฟะ", "fa"], ["ฟั", "fa"], ["ฟา", "fa"], ["ฟำ", "fam"], ["ฟิ", "fi"], ["ฟี", "fi"], ["ฟึ", "fue"], ["ฟุ", "fu"], ["ฟู", "fu"], ["มว", "mua"], ["มอ", "mo"], ["มะ", "ma"], ["มั", "ma"], ["มา", "ma"], ["มำ", "mam"], ["มิ", "mi"], ["มี", "mi"], ["มึ", "mue"], ["มุ", "mu"], ["มู", "mu"], ["ยว", "yua"], ["ยอ", "yo"], ["ยะ", "ya"], ["ยั", "ya"], ["ยา", "ya"], ["ยำ", "yam"], ["ยิ", "yi"], ["ยี", "yi"], ["ยึ", "yue"], ["ยุ", "yu"], ["ยู", "yu"], ["รว", "rua"], ["รอ", "ro"], ["ระ", "ra"], ["รั", "ra"], ["รา", "ra"], ["รำ", "ram"], ["ริ", "ri"], ["รี", "ri"], ["รึ", "rue"], ["รุ", "ru"], ["รู", "ru"], ["ฤๅ", "rue"], ["ลว", "lua"], ["ลอ", "lo"], ["ละ", "la"], ["ลั", "la"], ["ลา", "la"], ["ลำ", "lam"], ["ลิ", "li"], ["ลี", "li"], ["ลึ", "lue"], ["ลุ", "lu"], ["ลู", "lu"], ["ฦๅ", "lue"], ["วว", "wua"], ["วอ", "wo"], ["วะ", "wa"], ["วั", "wa"], ["วา", "wa"], ["วำ", "wam"], ["วิ", "wi"], ["วี", "wi"], ["วึ", "wue"], ["วุ", "wu"], ["วู", "wu"], ["ศว", "sua"], ["ศอ", "so"], ["ศะ", "sa"], ["ศั", "sa"], ["ศา", "sa"], ["ศำ", "sam"], ["ศิ", "si"], ["ศี", "si"], ["ศึ", "sue"], ["ศุ", "su"], ["ศู", "su"], ["ษว", "sua"], ["ษอ", "so"], ["ษะ", "sa"], ["ษั", "sa"], ["ษา", "sa"], ["ษำ", "sam"], ["ษิ", "si"], ["ษี", "si"], ["ษึ", "sue"], ["ษุ", "su"], ["ษู", "su"], ["สว", "sua"], ["สอ", "so"], ["สะ", "sa"], ["สั", "sa"], ["สา", "sa"], ["สำ", "sam"], ["สิ", "si"], ["สี", "si"], ["สึ", "sue"], ["สุ", "su"], ["สู", "su"], ["หว", "hua"], ["หอ", "ho"], ["หะ", "ha"], ["หั", "ha"], ["หา", "ha"], ["หำ", "ham"], ["หิ", "hi"], ["หี", "hi"], ["หึ", "hue"], ["หุ", "hu"], ["หู", "hu"], ["ฮว", "hua"], ["ฮอ", "ho"], ["ฮะ", "ha"], ["ฮั", "ha"], ["ฮา", "ha"], ["ฮำ", "ham"], ["ฮิ", "hi"], ["ฮี", "hi"], ["ฮึ", "hue"], ["ฮุ", "hu"], ["ฮู", "hu"], ["อา", "a"], ["อำ", "am"], ["อิ", "i"], ["อี", "i"], ["อึ", "ue"], ["อุ", "u"], ["อู", "u"], ["เอ", "e"], ["แอ", "ae"], ["โอ", "o"], ["ใอ", "ai"], ["ไอ", "ai"], ["อย", "oi"], ["ออ", "o"], ["อะ", "a"], ["อั", "a"], ["อำ", "am"], ["อิ", "i"], ["อี", "i"], ["อึ", "ue"], ["อุ", "u"], ["อู", "u"], ["เอ", "e"], ["แอ", "ae"], ["โอ", "o"], ["ใอ", "ai"], ["ไอ", "ai"], ["อย", "oi"], ["อว", "ua"], ["อ๋วง", "uang"], ["วอก", "wok"], ["อ้วน", "on"], ["ออ", "o"], ["อะ", "a"], ["อั", "a"], ["อำ", "am"], ["อิ", "i"], ["อี", "i"], ["อึ", "ue"], ["อุ", "u"], ["อู", "u"], ["เอ", "e"], ["แอ", "ae"], ["โอ", "o"], ["ใอ", "ai"], ["ไอ", "ai"], ["อย", "oi"], ["ออ", "o"], ["อะ", "a"], ["อั", "a"], ["อำ", "am"], ["อิ", "i"], ["อี", "i"], ["อึ", "ue"], ["อุ", "u"], ["อู", "u"], ["เอ", "e"], ["แอ", "ae"], ["โอ", "o"], ["ใอ", "ai"], ["ไอ", "ai"], ["อย", "oi"], ["อว", "ua"], ["ออ", "o"], ["อะ", "a"], ["เกรง", "kreng"], ["เก", "ke"], ["เข", "khe"], ["เฃ", "khe"], ["เค", "khe"], ["เฅ", "khe"], ["เฆ", "khe"], ["เง", "nge"], ["เจ", "che"], ["เฉ", "che"], ["เช", "che"], ["เซ", "se"], ["เด", "de"], ["เต", "te"], ["เท", "the"], ["เน", "ne"], ["เบ", "be"], ["เป", "pe"], ["เผ", "phe"], ["เฝ", "fe"], ["เพ", "phe"], ["เฟ", "fe"], ["เม", "me"], ["เย", "ye"], ["เร", "re"], ["เล", "le"], ["เว", "we"], ["เศ", "se"], ["เส", "se"], ["เห", "he"], ["เฮ", "he"], ["แก", "kae"], ["แข", "khae"], ["แฃ", "khae"], ["แค", "khae"], ["แฅ", "khae"], ["แฆ", "khae"], ["แง", "ngae"], ["แจ", "chae"], ["แฉ", "chae"], ["แช", "chae"], ["แซ", "sae"], ["แด", "dae"], ["แต", "tae"], ["แท", "thae"], ["แน", "nae"], ["แบ", "bae"], ["แปล", "plae"], ["แป", "pae"], ["แผ", "phae"], ["แฝ", "fae"], ["แพ", "phae"], ["แฟ", "fae"], ["แม", "mae"], ["แย", "yae"], ["แร", "rae"], ["แล", "lae"], ["แว", "wae"], ["แศ", "sae"], ["แษ", "sae"], ["แส", "sae"], ["แห", "hae"], ["แฮ", "hae"], ["โก", "ko"], ["โข", "kho"], ["โฃ", "kho"], ["โค", "kho"], ["โฅ", "kho"], ["โฆ", "kho"], ["โง", "ngo"], ["โจ", "cho"], ["โฉ", "cho"], ["โช", "cho"], ["โซ", "so"], ["โด", "do"], ["โต", "to"], ["โท", "tho"], ["โน", "no"], ["โบ", "bo"], ["โป", "po"], ["โผ", "pho"], ["โฝ", "fo"], ["โพ", "pho"], ["โฟ", "fo"], ["โม", "mo"], ["โย", "yo"], ["โร", "ro"], ["โล", "lo"], ["โว", "wo"], ["โศ", "so"], ["โษ", "so"], ["โส", "so"], ["โห", "ho"], ["โฮ", "ho"], ["โอ", "o"], ["ใก", "kai"], ["ใข", "khai"], ["ใฃ", "khai"], ["ใค", "khai"], ["ใฅ", "khai"], ["ใฆ", "khai"], ["ใง", "ngai"], ["ใจ", "chai"], ["ใฉ", "chai"], ["ใช", "chai"], ["ใซ", "sai"], ["ใด", "dai"], ["ใต", "tai"], ["ใถ", "thai"], ["ใท", "thai"], ["ใธ", "thai"], ["ใน", "nai"], ["ใบ", "bai"], ["ใป", "pai"], ["ใผ", "phai"], ["ใฝ", "fai"], ["ใพ", "phai"], ["ใฟ", "fai"], ["ใม", "mai"], ["ใย", "yai"], ["ใร", "rai"], ["ใล", "lai"], ["ใว", "wai"], ["ใศ", "sai"], ["ใษ", "sai"], ["ใส", "sai"], ["ให", "hai"], ["ใฮ", "hai"], ["ไก", "kai"], ["ไข", "khai"], ["ไฃ", "khai"], ["ไค", "khai"], ["ไฅ", "khai"], ["ไฆ", "khai"], ["ไง", "ngai"], ["ไจ", "chai"], ["ไฉ", "chai"], ["ไช", "chai"], ["ไซ", "sai"], ["ได", "dai"], ["ไต", "tai"], ["ไถ", "thai"], ["ไท", "thai"], ["ไธ", "thai"], ["ไน", "nai"], ["ไบ", "bai"], ["ไป", "pai"], ["ไผ", "phai"], ["ไฝ", "fai"], ["ไพ", "phai"], ["ไฟ", "fai"], ["ไม", "mai"], ["ไย", "yai"], ["ไร", "rai"], ["ไล", "lai"], ["ไว", "wai"], ["ไศ", "sai"], ["ไษ", "sai"], ["ไส", "sai"], ["ไห", "hai"], ["ไฮ", "hai"], ["้", ""], ["พลเ", "phonla"], ["กรม", "krom"], ["นม", "nom"], ["([ก-ฮ])า", "a", "r"], [String.raw`([ก-ฮ])(?!\1)ง(?!ง)`, "ong", "r"], [String.raw`([ก-ฮ])(?!\1)ก(?!ก)`, "ok", "r"], [String.raw`([ก-ฮ])(?!\1)ด(?!ด)`, "od", "r"], [String.raw`([ก-ฮ])(?!\1)น(?!น)`, "on", "r"], [String.raw`([ก-ฮ])(?!\1)บ(?!บ)`, "ob", "r"], [String.raw`([ก-ฮ])(?!\1)ม(?!ม)`, "om", "r"], ["ก", "k", "c"], ["ข", "kh", "c"], ["ฃ", "kh", "c"], ["ค", "kh", "c"], ["ฅ", "kh", "c"], ["ฆ", "kh", "c"], ["ง", "ng", "c"], ["จ", "ch", "c"], ["ฉ", "ch", "c"], ["ช", "ch", "c"], ["ซ", "s", "c"], ["ฌ", "ch", "c"], ["ญ", "y"], ["ฎ", "d"], ["ฏ", "t"], ["ฐ", "th"], ["ฑ", "th"], ["ฒ", "th"], ["ณ", "n"], ["ด", "d", "c"], ["ต", "t", "c"], ["ถ", "th", "c"], ["ท", "th", "c"], ["ธ", "th", "c"], ["น", "n", "c"], ["บ", "b", "c"], ["ป", "p", "c"], ["ผ", "ph", "c"], ["ฝ", "f", "c"], ["พ", "ph", "c"], ["ฟ", "f", "c"], ["ภ", "ph", "c"], ["ม", "m", "c"], ["ย", "y", "c"], ["ร", "r", "c"], ["ฤ", "rue"], ["ล", "l", "c"], ["ฦ", "lue"], ["ว", "w", "c"], ["ศ", "s", "c"], ["ษ", "s", "c"], ["ส", "s", "c"], ["ห", "h", "c"], ["ฬ", "l", "c"], ["ฮ", "h", "c"], ["อ", "", "c"], ["้", ""], ["๊", ""], ["๋", ""], ["เ", ""], ["แ", ""], ["์", ""], ["็", ""], ["ู", ""], ["ิ", ""], ["ื", ""], ["ี", ""], ["ึ", ""], ["", ""], ["ํ", ""], ["ั", ""], ["้", ""], ["ุ", ""], ["ุ", ""], ["ๅ", ""], ["ำ", ""], ["ไ", ""], ["ใ", ""], ["ะ", "a"], ["ๆ", ""], ["า", "a"], ["ฯ", ""], ["๐", "0"], ["๏", "0"], ["๑", "1"], ["๒", "2"], ["๓", "3"], ["๔", "4"], ["๕", "5"], ["๖", "6"], ["๗", "7"], ["๘", "8"], ["๙", "9"]];
const Gu = /* @__PURE__ */ new Map();
for (const [i, o, e] of jg) typeof i == "string" && typeof o == "string" && (!e || e === "c") && !Gu.has(i) && Gu.set(i, o);
const Wu = [];
for (const [i, o, e] of jg) typeof i != "string" || typeof o != "string" || (e === "r" ? Wu.push({ regex: new RegExp(i, "g"), replace: o, type: "r" }) : Wu.push({ replace: o, search: i, type: "s" }));
const _C = /\x1B\[(\d+)m/;
let fg = class {
  activeForeground = void 0;
  activeBackground = void 0;
  activeFormatting = [];
  processEscape(o) {
    const e = _C.exec(o);
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
};
const EC = (i, o) => {
  if (!po.has(i[o])) return { isInsideEscape: false, isInsideLinkEscape: false };
  const e = true, n = i.slice(o + 1, o + 1 + To.length).join("") === To;
  return { isInsideEscape: e, isInsideLinkEscape: n };
};
const zC = (i, o = {}) => {
  const e = new fg();
  let n = "", a = false, u = "", t = "", d = false;
  const g = [...i];
  for (let h = 0; h < g.length; h++) {
    const l = g[h];
    if (l && po.has(l)) {
      if (n) {
        const b = o.getWidth?.(n) ?? 0, w = { isEscapeSequence: false, isGrapheme: true, text: n, width: b };
        if (d && (w.isHyperlink = true, w.hyperlinkUrl = t), o.onSegment?.(w, e) === false) return;
        n = "";
      }
      a = true, u = l;
      const y = EC(g, h), { isInsideLinkEscape: c } = y;
      if (c) {
        let b = h + 1;
        for (t = ""; b < g.length; ) {
          const p = g[b];
          if (p === be) break;
          t += p, b += 1;
        }
        t = t.slice(4);
        const w = { hyperlinkUrl: t, isEscapeSequence: true, isGrapheme: false, isHyperlink: true, isHyperlinkStart: true, width: 0 };
        if (o.onSegment?.(w, e) === false) return;
        h = b, d = true, a = false, u = "";
        continue;
      }
      if (h + 1 < g.length && g[h + 1] === "\\" && d) {
        const b = { isEscapeSequence: true, isGrapheme: false, isHyperlink: true, isHyperlinkEnd: true, width: 0 };
        if (o.onSegment?.(b, e) === false) return;
        d = false, t = "", h += 1, a = false, u = "";
        continue;
      }
    }
    if (a) {
      if (u !== l && (u += l), l === kn) {
        a = false, e.processEscape(u);
        const y = { isEscapeSequence: true, isGrapheme: false, text: u, width: 0 };
        if (o.onSegment?.(y, e) === false) return;
        u = "";
      }
      continue;
    }
    n += l;
    const r = o.getWidth?.(n) ?? 0, v = { isEscapeSequence: false, isGrapheme: true, text: n, width: r };
    if (d && (v.isHyperlink = true, v.hyperlinkUrl = t), o.onSegment?.(v, e) === false) return;
    n = "";
  }
  if (n) {
    const h = o.getWidth?.(n) ?? 0, l = { isEscapeSequence: false, isGrapheme: true, text: n, width: h };
    d && (l.isHyperlink = true, l.hyperlinkUrl = t), o.onSegment?.(l, e);
  }
  if (u) {
    const h = { isEscapeSequence: true, isGrapheme: false, text: u, width: 0 };
    o.onSegment?.(h, e);
  }
};
const Nu = (i) => `${po.values().next().value}${$u}${String(i)}${kn}`;
const Pu = (i) => `${po.values().next().value}${To}${i}${be}`;
const $C = (i) => {
  if (i.length === 0) return "";
  if (i.length === 1) return i[0];
  let o = "", e, n;
  const a = i.join(`
`), u = [...a];
  let t = 0;
  for (const [d, g] of u.entries()) {
    if (o += g, po.has(g)) {
      const l = us.exec(a.slice(t))?.groups ?? {};
      if (l.code !== void 0) {
        const r = Number.parseFloat(l.code);
        e = r === ns ? void 0 : r;
      } else l.uri !== void 0 && (n = l.uri.length === 0 ? void 0 : l.uri);
    }
    const h = ts.get(Number(e));
    u[d + 1] === `
` ? (n && (o += Pu("")), e && h && (o += Nu(h))) : g === `
` && (e && h && (o += Nu(e)), n && (o += Pu(n))), t += g.length;
  }
  return o;
};
const mg = /(?=\s)|(?<=\s)/;
const Yg = /^\s+$/;
const Fu = /* @__PURE__ */ new Map();
const IC = (i) => {
  const o = Fu.get(i);
  if (o !== void 0) return o;
  const e = z$1(i);
  return Fu.set(i, e), e;
};
const nn = (i) => {
  if (!i.includes("\x1B")) return i;
  let o = i;
  return i.includes("\x1B[30m") && (o += "\x1B[39m"), i.includes("\x1B[42m") && (o += "\x1B[49m"), o;
};
const qi = (i) => {
  const o = i.split(" ");
  let e = o.length;
  for (; e > 0 && z$1(o[e - 1]) === 0; ) e--;
  return e === o.length ? i : o.slice(0, e).join(" ") + o.slice(e).join("");
};
const kg = (i, o, e) => {
  if (i.length === 0) return [""];
  if (o <= 0) return [i];
  const n = [], a = new fg();
  let u = "", t = 0, d = false, g = false, h = "", l = 0;
  for (; l < i.length; ) {
    const r = i.codePointAt(l), v = String.fromCodePoint(r), y = v.length;
    if (po.has(v)) {
      d = true, h = v, u += v, g = i.startsWith(To, l + 1), l += 1;
      continue;
    }
    if (d) {
      h += v, u += v, g ? v === be && (d = g = false) : v === kn && (d = false, a.processEscape(h)), l += 1;
      continue;
    }
    const c = IC(v), b = v === " ";
    if (c === 0) {
      u += v, l += y;
      continue;
    }
    if (t + c > o && (u && n.push(u + a.getEndEscapesForAllActiveAttributes()), u = a.getStartEscapesForAllActiveAttributes(), t = z$1(u), b && e)) {
      for (; l < i.length && i[l] === " "; ) l += 1;
      continue;
    }
    if (u += v, t += c, t === o && l + y < i.length && (n.push(u + a.getEndEscapesForAllActiveAttributes()), u = a.getStartEscapesForAllActiveAttributes(), t = z$1(u), l + y < i.length && i[l + y] === " " && e)) {
      for (l += y; l < i.length && i[l] === " "; ) l += 1;
      continue;
    }
    l += y;
  }
  return u && n.push(u + a.getEndEscapesForAllActiveAttributes()), e ? n.map((r) => qi(r)) : n;
};
const qC = (i, o, e) => {
  if (i.length === 0) return [];
  const n = e ? i.trim() : i;
  if (n.length === 0) return [];
  const a = [];
  let u = "", t = 0;
  return zC(n, { getWidth: z$1, onSegment: (d, g) => {
    const h = d.text ?? "";
    if (d.isEscapeSequence) u += h;
    else {
      const l = h === " ";
      if (d.width === 0) return u += h, true;
      if (t + d.width > o && (u && a.push(u), u = g.getStartEscapesForAllActiveAttributes(), t = 0, l)) return e || a.push(g.getStartEscapesForAllActiveAttributes() + h), true;
      u += h, t += d.width;
    }
    return true;
  } }), u && a.push(u), e ? a.map((d) => qi(d)) : a;
};
const UC = (i, o, e) => {
  if (i.length === 0) return [];
  const n = e ? i.trim() : i;
  if (n.length === 0) return [];
  const a = n.split(mg), u = [];
  let t = "", d = 0, g = 0;
  for (; g < a.length; ) {
    const h = a[g], l = Yg.test(h), r = z$1(h);
    if (h.length === 0) {
      g += 1;
      continue;
    }
    if (e && l && d === 0) {
      g += 1;
      continue;
    }
    if (d + r > o && d > 0) {
      e ? u.push(qi(t)) : u.push(t), t = "", d = 0;
      continue;
    }
    t += h, d += r, g += 1;
  }
  return t && (e ? u.push(qi(t)) : u.push(t)), u;
};
const VC = (i, o, e) => {
  if (i.length === 0) return [];
  const n = e ? i.trim() : i;
  if (n.length === 0) return [];
  const a = n.split(mg), u = [];
  let t = "", d = 0, g = 0;
  for (; g < a.length; ) {
    const h = a[g], l = Yg.test(h), r = z$1(h);
    if (h.length === 0) {
      g += 1;
      continue;
    }
    if (e && l && d === 0) {
      g += 1;
      continue;
    }
    if (r > o) {
      t && u.push(nn(e ? qi(t) : t));
      const v = kg(h, o, e);
      if (v.length > 0) {
        for (let y = 0; y < v.length - 1; y += 1) u.push(v[y]);
        t = v.at(-1), d = z$1(t);
      } else t = "", d = 0;
      g += 1;
      continue;
    }
    if (d + r > o && d > 0 && (u.push(nn(e ? qi(t) : t)), t = "", d = 0, e && l)) {
      g += 1;
      continue;
    }
    t += h, d += r, g += 1;
  }
  return t && u.push(nn(e ? qi(t) : t)), u;
};
const ne = { BREAK_AT_CHARACTERS: "BREAK_AT_CHARACTERS", BREAK_WORDS: "BREAK_WORDS", PRESERVE_WORDS: "PRESERVE_WORDS", STRICT_WIDTH: "STRICT_WIDTH" };
const iX = (i, o = {}) => {
  const { removeZeroWidthCharacters: e = true, trim: n = true, width: a = 80, wrapMode: u = ne.PRESERVE_WORDS } = o;
  if (n && i.trim() === "") return "";
  let t = i.normalize("NFC").replaceAll(`\r
`, `
`);
  return e && (t = t.replaceAll(as, "")), t.split(`
`).map((d) => {
    if (n && d.trim() === "") return "";
    let g;
    switch (u) {
      case ne.BREAK_AT_CHARACTERS: {
        g = qC(d, a, n);
        break;
      }
      case ne.BREAK_WORDS: {
        g = VC(d, a, n);
        break;
      }
      case ne.STRICT_WIDTH: {
        g = kg(d, a, n);
        break;
      }
      default:
        g = UC(d, a, n);
    }
    return $C(g);
  }).join(`
`);
};
const Lg = 80;
const Zg = 24;
const jn = (i, o, { shell: e, env: n } = {}) => Tg(i, o, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"], timeout: 500, shell: e, env: n }).trim();
const ge = (i, o) => ({ columns: Number.parseInt(i, 10), rows: Number.parseInt(o, 10) });
const Sg = (i, o) => {
  const { columns: e, rows: n } = ge(i, o);
  if (!(Number.isNaN(e) || Number.isNaN(n)) && !(e === Lg && n === Zg)) return { columns: e, rows: n };
};
const oX = () => {
  if (Ii.platform !== "linux") return true;
  try {
    const i = Ho.readFileSync("/proc/self/stat", "utf8"), o = i.lastIndexOf(") ");
    if (o === -1) return false;
    const e = i.slice(o + 2).trim().split(/\s+/), n = Number.parseInt(e[2], 10), a = Number.parseInt(e[5], 10);
    return Number.isNaN(n) || Number.isNaN(a) || a <= 0 ? false : n === a;
  } catch {
    return false;
  }
};
function eX() {
  const { env: i, stdout: o, stderr: e } = Ii;
  if (o?.columns && o?.rows) return ge(o.columns, o.rows);
  if (e?.columns && e?.rows) return ge(e.columns, e.rows);
  if (i.COLUMNS && i.LINES) return ge(i.COLUMNS, i.LINES);
  const n = { columns: Lg, rows: Zg };
  return Ii.platform === "win32" ? an() ?? n : Ii.platform === "darwin" ? Ru() ?? an() ?? n : Ru() ?? an() ?? nX() ?? n;
}
const Ru = () => {
  try {
    const i = Ii.platform === "darwin" ? Ho.constants.O_EVTONLY | Ho.constants.O_NONBLOCK : Ho.constants.O_NONBLOCK, { columns: o, rows: e } = Dg.WriteStream(Ho.openSync("/dev/tty", i));
    return { columns: o, rows: e };
  } catch {
  }
};
const an = () => {
  try {
    const i = jn("tput", ["cols"], { env: { TERM: "dumb", ...Ii.env } }), o = jn("tput", ["lines"], { env: { TERM: "dumb", ...Ii.env } });
    if (i && o) return Sg(i, o);
  } catch {
  }
};
const nX = () => {
  try {
    if (!oX()) return;
    const i = jn("resize", ["-u"]).match(/\d+/g);
    if (i.length === 2) return Sg(i[0], i[1]);
  } catch {
  }
};
const to = (i, o) => {
  switch (o) {
    case "bottom":
      return { body: i.bottomBody, join: i.bottomJoin, left: i.bottomLeft, right: i.bottomRight };
    case "middle":
      return { body: i.joinBody, join: i.joinJoin, left: i.joinLeft, right: i.joinRight };
    case "top":
      return { body: i.topBody, join: i.topJoin, left: i.topLeft, right: i.topRight };
    default:
      throw new Error(`Invalid borderType: ${String(o)}`);
  }
};
const aX = (i) => ({ join: i.bodyJoin, left: i.bodyLeft, right: i.bodyRight });
const ye = (i, o, e, n = 1) => {
  let a = 0;
  for (let u = 0; u < e; u += 1) a += i[o + u] ?? 0;
  return e > 1 && (a += (e - 1) * n), a;
};
const fn = (i, o, e, n) => {
  let a = o;
  for (; a > 0 && i[a - 1]?.[e] === n; ) a -= 1;
  let u = o;
  for (; u < i.length - 1 && i[u + 1]?.[e] === n; ) u += 1;
  let t;
  const d = u - a + 1;
  if (d === 1) t = true;
  else switch (n.vAlign) {
    case "bottom": {
      t = o === u;
      break;
    }
    case "middle": {
      const g = a + Math.floor(d / 2);
      t = o === g;
      break;
    }
    case "top": {
      t = o === a;
      break;
    }
    default:
      t = o === a;
  }
  return { firstRow: a, lastRow: u, showContent: t };
};
const uX = (i, o, e, n, a) => {
  if (i.length === 0) return [];
  const u = e.showBorders ? e.border?.bodyJoin.width ?? 0 : 0, t = e.showBorders && (e.border?.joinBody.width ?? 0) > 0;
  let d = i.length - 1;
  for (let l = 0; l < i.length; l += 1) {
    const r = i[l];
    if (r) {
      for (const [v, y] of r.entries()) if (y && a(i, l, v, y) === l) {
        const c = fn(i, l, v, y);
        d = Math.max(d, c.lastRow);
      }
    }
  }
  const g = Array.from({ length: d + 1 }).fill(1);
  for (let l = 0; l < i.length; l += 1) {
    const r = i[l];
    if (r) for (let v = 0; v < e.columns; v += 1) {
      const y = r[v];
      if (y && a(i, l, v, y) === l && (y.rowSpan ?? 1) === 1) {
        const c = y.colSpan ?? 1, b = ye(o, v, c, u), w = n(y, b).length;
        g[l] = Math.max(g[l] ?? 1, w);
      }
    }
  }
  const h = Array.from({ length: g.length }).fill(false);
  if (e.fixedRowHeights) for (let l = 0; l < g.length; l += 1) {
    let r;
    e.fixedRowHeights[l] !== void 0 ? r = e.fixedRowHeights[l] : e.fixedRowHeights.length === 1 && e.fixedRowHeights[0] !== void 0 && (r = e.fixedRowHeights[0]), r !== void 0 && (g[l] = Math.max(1, r), h[l] = true);
  }
  for (let l = 0; l < i.length; l += 1) {
    const r = i[l];
    if (r) for (let v = 0; v < e.columns; v += 1) {
      const y = r[v];
      if (y && a(i, l, v, y) === l && (y.rowSpan ?? 1) > 1) {
        const c = y.colSpan ?? 1, b = ye(o, v, c, u), w = n(y, b), p = t ? w.length - 1 : w.length, j = fn(i, l, v, y), { firstRow: k, lastRow: f } = j;
        let Y = 0, L = 0;
        for (let X = k; X <= f && X < g.length; X += 1) Y += g[X] ?? 1, h[X] || (L += 1);
        const D = p - Y;
        if (D > 0) if (L > 0) {
          const X = Math.ceil(D / L);
          let P = 0;
          for (let ni = k; ni <= f && ni < g.length; ni += 1) if (!h[ni]) {
            const V = Math.min(X, D - P);
            if (g[ni] = (g[ni] ?? 1) + V, P += V, P >= D) break;
          }
        } else (e.onWarn ?? ((X) => {
          console.warn(X);
        }))(`[calculateRowHeights] Content of spanning cell exceeds fixed height allocated. Cell: ${JSON.stringify(y.content)}, Required: ${String(p)}, Allocated: ${String(Y)} (fixed).`);
      }
    }
  }
  return g;
};
const go = (i, o, e, n) => {
  let a = o;
  for (; a > 0 && i[a - 1]?.[e] === n; ) a -= 1;
  return a;
};
const Ku = (i) => {
  if (typeof i == "string") return { content: i };
  if (typeof i == "number" || typeof i == "bigint" || typeof i == "boolean") return { content: String(i) };
  if (i == null) return { content: "", isEmpty: true };
  if (typeof i == "object" && "content" in i) {
    let { content: o } = i, e = false;
    if (typeof o == "number" || typeof o == "bigint" || typeof o == "boolean") o = String(o);
    else if (o == null) o = "", e = true;
    else if (typeof o != "string") throw new TypeError(`Invalid item type in grid cell: expected string, number, null, undefined, or GridItem object, but received ${JSON.stringify(i)} (type: ${typeof i})`);
    return e ? { ...i, content: o, isEmpty: true } : { ...i, content: o };
  }
  throw new TypeError(`Invalid item type in grid cell: expected string, number, null, undefined, or GridItem object, but received ${JSON.stringify(i)} (type: ${typeof i})`);
};
const tX = (i, o, e, n, a) => {
  const u = z$1(i), t = " ".repeat(Math.max(0, n)), d = " ".repeat(Math.max(0, a));
  if (u === 0) return t + " ".repeat(Math.max(0, o)) + d;
  const g = Math.max(0, o - u);
  switch (e) {
    case "center": {
      const h = Math.floor(g / 2), l = g - h;
      return t + " ".repeat(h) + i + " ".repeat(l) + d;
    }
    case "right":
      return t + " ".repeat(g) + i + d;
    default:
      return t + i + " ".repeat(g) + d;
  }
};
const Au = /\r?\n/;
const Ou = /\s+/;
let mn;
const dX = () => (mn ??= eX().columns, mn);
const G$1 = (i, o) => !i || !o ? i : typeof o == "function" ? o(i) : o.open + i + o.close;
class ce {
  #i;
  #e = [];
  #o;
  #a = /* @__PURE__ */ new WeakMap();
  #t = /* @__PURE__ */ new WeakMap();
  #d = /* @__PURE__ */ new WeakMap();
  #u(o) {
    const e = this.#d.get(o);
    if (e) return e;
    const n = String(o.content ?? "").split(Au);
    let a = 0;
    for (const t of n) a = Math.max(a, z$1(t));
    const u = { lines: n, maxLineWidth: a };
    return this.#d.set(o, u), u;
  }
  #n(o) {
    const e = this.#i.onWarn;
    if (e) {
      e(o);
      return;
    }
    console.warn(o);
  }
  static createGridLayout() {
    return [];
  }
  static calculateImplicitRowCount(o, e) {
    let n = 0;
    for (const a of o) n += (a.colSpan ?? 1) * (a.rowSpan ?? 1);
    return Math.max(1, Math.ceil(n / e));
  }
  constructor(o) {
    const e = { autoColumns: 1, autoFlow: "row", autoRows: 1, balancedWidths: false, gap: 0, paddingLeft: 1, paddingRight: 1, rows: 0, showBorders: o.border !== void 0, truncate: false, truncateOverflow: true, wordWrap: false };
    let n;
    Array.isArray(o.fixedRowHeights) ? n = o.fixedRowHeights : typeof o.fixedRowHeights == "number" && (n = [o.fixedRowHeights]), this.#i = { ...e, ...o, columns: o.columns, fixedRowHeights: n, showBorders: o.border !== void 0 || (o.showBorders ?? false) };
    const { terminalWidth: a } = this.#i;
    this.#o = a ?? dX(), this.#i.maxWidth && (this.#i.maxWidth = Math.min(this.#i.maxWidth, this.#o));
  }
  addItem(o) {
    const e = Ku(o);
    return this.#g(e), this.#e.push(e), this;
  }
  #g(o) {
    o.width !== void 0 && this.#n("@visulima/tabular: GridItem.width is ignored by Grid (it is only consumed by Table). Use fixedColumnWidths or maxWidth to constrain Grid column widths.");
  }
  addItems(o) {
    for (const e of o) {
      const n = Ku(e);
      this.#g(n), this.#e.push(n);
    }
    return this;
  }
  setColumns(o) {
    return this.#i.columns = o, this;
  }
  setRows(o) {
    return this.#i.rows = o, this;
  }
  setBorder(o) {
    return this.#i.border = o, this;
  }
  setShowBorders(o) {
    return this.#i.showBorders = o, this;
  }
  setMaxWidth(o) {
    return this.#i.maxWidth = o, this;
  }
  toString() {
    const o = ce.createGridLayout();
    if (this.#a = /* @__PURE__ */ new WeakMap(), this.#t = /* @__PURE__ */ new WeakMap(), this.#d = /* @__PURE__ */ new WeakMap(), this.placeItems(o), o.length === 0 || o[0]?.length === 0) return "";
    let e = this.calculateColumnWidths(o);
    const n = this.calculateTotalGridWidth(e), a = typeof this.#i.maxWidth == "number" && this.#i.maxWidth > 0 ? Math.min(this.#i.maxWidth, this.#o) : this.#o;
    return n > a && (e = this.adjustColumnWidthsForTerminal(e, n)), this.renderGrid(o, e);
  }
  placeItems(o) {
    let e = 0, n = 0;
    const a = this.#i.rows > 0 ? this.#i.rows : Number.POSITIVE_INFINITY, u = this.#i.rows > 0 ? this.#i.rows : ce.calculateImplicitRowCount(this.#e, Math.max(1, this.#i.columns));
    for (let t = 0; t < this.#e.length; t += 1) {
      const d = this.#e[t];
      if (d.isEmpty && !(d.rowSpan && d.rowSpan > 1) && !(d.colSpan && d.colSpan > 1)) {
        this.#i.autoFlow === "row" ? (n += 1, n >= this.#i.columns && (n = 0, e += 1)) : (e += 1, e >= u && (e = 0, n += 1));
        continue;
      }
      const g = d.colSpan ?? 1, h = d.rowSpan ?? 1;
      let l = false, r = e, v = n, y = 0;
      const c = ((this.#i.autoFlow === "column" ? Math.max(o.length, u) : o.length) + h + 5) * this.#i.columns, b = g <= this.#i.columns;
      for (; b && !l && r < a && y < c; ) {
        for (y += 1; r + h > o.length; ) o.push(Array.from({ length: this.#i.columns }).fill(void 0));
        if (this.canPlaceItem(o, r, v, g, h)) this.placeItem(o, r, v, d), l = true, this.#i.autoFlow === "row" ? (n = v + g, e = r, n >= this.#i.columns && (n = 0, e += 1)) : (e = r + h, n = v, e >= u && (e = 0, n += 1));
        else if (this.#i.autoFlow === "row") v += 1, v >= this.#i.columns && (v = 0, r += 1);
        else if (r += 1, r >= u && (r = 0, v += 1, v >= this.#i.columns)) break;
      }
      l || (this.#n(`@visulima/tabular: Could not find position for item: ${JSON.stringify(d)} after ${String(y)} attempts. Grid might be too small or layout impossible.`), this.#i.autoFlow === "row" ? (n += 1, n >= this.#i.columns && (n = 0, e += 1)) : (e += 1, e >= u && (e = 0, n += 1)));
    }
    if (this.#i.rows > 0) {
      if (o.length > 0) for (; o.length < this.#i.rows; ) o.push(Array.from({ length: this.#i.columns }).fill(void 0));
    } else for (; o.length > 0 && o.at(-1)?.every((t) => t === void 0); ) o.pop();
  }
  canPlaceItem(o, e, n, a, u, t = false) {
    if (n + a > this.#i.columns) return false;
    for (let d = e; d < e + u; d += 1) if (d < o.length) {
      if (!o[d]) return this.#n(`Grid layout unexpectedly missing row ${String(d)} during canPlaceItem check.`), false;
      for (let g = n; g < n + a; g += 1) if (o[d]?.[g] !== void 0) return false;
    } else if (!t) return false;
    return true;
  }
  computeWrappedContentWidth(o, e, n, a) {
    let u = o;
    if (a) {
      if (u > 20) {
        let t = 0;
        for (const d of e) {
          const g = d.split(Ou);
          for (const h of g) t = Math.max(t, Math.min(z$1(h), n));
        }
        u = Math.min(u, Math.max(t + 4, 12));
      }
    } else {
      let t = 0;
      for (const d of e) {
        const g = d.split(Ou);
        for (const h of g) t = Math.max(t, Math.min(z$1(h), n));
      }
      u = Math.min(u, Math.max(t + 12, 20));
    }
    return u;
  }
  placeItem(o, e, n, a) {
    const u = a.rowSpan ?? 1, t = a.colSpan ?? 1;
    for (let d = e; d < e + u; d += 1) {
      for (; d >= o.length; ) o.push(Array.from({ length: this.#i.columns }).fill(void 0));
      for (let g = n; g < n + t; g += 1) g < this.#i.columns && (o[d] || (this.#n(`Logic error: Row ${String(d)} not found in placeItem despite check.`), o[d] = Array.from({ length: this.#i.columns }).fill(void 0)), o[d][g] = a);
    }
  }
  calculateTotalGridWidth(o) {
    let e = 0;
    const n = this.#i.showBorders ? this.#i.border : void 0;
    n && (e += n.bodyLeft.width, e += n.bodyRight.width);
    const a = o.length, u = this.#i.showBorders ? n?.bodyJoin.width ?? 0 : 0, t = this.#i.gap;
    for (let d = 0; d < a; d += 1) e += o[d] ?? 0, d < a - 1 && (e += t, e += u);
    return e;
  }
  adjustColumnWidthsForTerminal(o, e) {
    const n = typeof this.#i.maxWidth == "number" && this.#i.maxWidth > 0 ? Math.min(this.#i.maxWidth ?? 0, this.#o) : this.#o;
    if (e <= n) return o;
    let a = 0;
    const u = o.length, t = this.#i.showBorders ? this.#i.border : void 0;
    if (t && (a += t.bodyLeft.width, a += t.bodyRight.width), u > 1) {
      a += (u - 1) * this.#i.gap;
      const v = t?.bodyJoin.width ?? 0;
      a += (u - 1) * v;
    }
    if (a >= n) return Array.from({ length: u }).fill(1);
    const d = n - a, g = o.reduce((v, y) => v + y, 0);
    if (g === 0) {
      const v = Math.floor(d / u);
      return Array.from({ length: u }).fill(v);
    }
    const h = o.map((v) => {
      const y = v / g;
      return Math.max(1, Math.floor(d * y));
    });
    let l = h.reduce((v, y) => v + y, 0) - d;
    for (; l > 0; ) {
      let v = -1;
      for (let y = 0; y < h.length; y += 1) (h[y] ?? 0) > 1 && (v === -1 || (h[y] ?? 0) > (h[v] ?? 0)) && (v = y);
      if (v === -1) break;
      h[v] -= 1, l -= 1;
    }
    let r = d - h.reduce((v, y) => v + y, 0);
    if (r > 0) {
      const v = h.map((y, c) => {
        const b = g > 0 ? (o[c] ?? 0) / g : 1 / u;
        return { index: c, remainder: d * b % 1 };
      }).toSorted((y, c) => c.remainder - y.remainder);
      for (const y of v) {
        if (r <= 0) break;
        const { index: c } = y;
        h[c] !== void 0 && (h[c] += 1, r -= 1);
      }
    }
    return h;
  }
  calculateBalancedColumnWidths(o) {
    const e = this.calculateMinimumColumnWidthsWithGrowableInfo(o), n = e.widths, { growableColumns: a } = e, u = typeof this.#i.maxWidth == "number" && this.#i.maxWidth > 0 ? Math.min(this.#i.maxWidth, this.#o) : this.#o, t = this.#i.showBorders ? this.#i.border : void 0;
    let d = 0;
    if (t && (d += t.bodyLeft.width, d += t.bodyRight.width), this.#i.columns > 1) {
      d += (this.#i.columns - 1) * this.#i.gap;
      const l = t?.bodyJoin.width ?? 0;
      d += (this.#i.columns - 1) * l;
    }
    const g = Math.max(0, u - d);
    if (n.reduce((l, r) => l + r, 0) > 0) {
      const l = Math.floor(g / this.#i.columns), r = Array.from({ length: this.#i.columns }).fill(l), v = l * this.#i.columns;
      let y = g - v;
      for (let p = 0; p < r.length && y > 0; p += 1) r[p] = (r[p] ?? 0) + 1, y -= 1;
      const c = [];
      let b = 0;
      for (let p = 0; p < this.#i.columns; p += 1) {
        const j = r[p] ?? 0, k = n[p] ?? 0, f = Math.max(j, k);
        c.push(f), b += f;
      }
      if (b > g) {
        const p = g / b, j = c.map((Y) => Math.max(3, Math.floor(Y * p))), k = j.reduce((Y, L) => Y + L, 0);
        let f = g - k;
        for (let Y = 0; Y < j.length && f > 0; Y += 1) j[Y] = (j[Y] ?? 0) + 1, f -= 1;
        return j;
      }
      let w = g - b;
      if (w > 0) {
        const p = a.length > 0 ? a : c.map((j, k) => k);
        for (; w > 0 && p.length > 0; ) for (const j of p) {
          if (w <= 0) break;
          c[j] = (c[j] ?? 0) + 1, w -= 1;
        }
      }
      return c;
    }
    const h = Math.floor(g / this.#i.columns);
    return Array.from({ length: this.#i.columns }).fill(h);
  }
  calculateMinimumColumnWidthsWithGrowableInfo(o) {
    const e = Array.from({ length: this.#i.columns }).fill(0), n = [], a = this.#i.paddingLeft + this.#i.paddingRight, u = this.#i.gap + (this.#i.showBorders ? this.#i.border?.bodyJoin.width ?? 0 : 0);
    for (let t = 0; t < this.#i.columns; t += 1) for (let d = 0; d < o.length; d += 1) {
      const g = o[d]?.[t];
      if (!g || go(o, d, t, g) !== d || t > 0 && o[d]?.[t - 1] === g) continue;
      const h = g.colSpan ?? 1, l = g.maxWidth ?? Number.POSITIVE_INFINITY, { lines: r, maxLineWidth: v } = this.#u(g), y = this.#i.wordWrap && g.wordWrap !== false;
      let c = Math.min(v, l);
      c = this.computeWrappedContentWidth(c, r, l, y), h === 1 && (e[t] = Math.max(e[t] ?? 0, c + a), y && !n.includes(t) && n.push(t));
    }
    for (let t = 0; t < o.length; t += 1) for (let d = 0; d < this.#i.columns; d += 1) {
      const g = o[t]?.[d];
      if (!g || go(o, t, d, g) !== t || d > 0 && o[t]?.[d - 1] === g) continue;
      const h = g.colSpan ?? 1;
      if (h > 1) {
        const l = g.maxWidth ?? Number.POSITIVE_INFINITY, { lines: r, maxLineWidth: v } = this.#u(g), y = this.#i.wordWrap && g.wordWrap !== false;
        let c = Math.min(v, l);
        c = this.computeWrappedContentWidth(c, r, l, y);
        const b = (h - 1) * u, w = c + a + b;
        let p = 0;
        for (let k = d; k < d + h; k += 1) p += e[k] ?? 0;
        const j = p + b;
        if (w > j) {
          const k = w - j, f = Math.floor(k / h);
          let Y = 0;
          for (let L = 0; L < h && d + L < this.#i.columns; L += 1) {
            const D = Math.min(f, k - Y);
            if (e[d + L] = (e[d + L] ?? 0) + D, Y += D, Y >= k) break;
          }
        }
      }
    }
    return { growableColumns: n, widths: e };
  }
  calculateColumnWidths(o) {
    if (this.#i.fixedColumnWidths && this.#i.fixedColumnWidths.length === this.#i.columns) {
      const u = this.#i.fixedColumnWidths;
      if (!u.some((t) => t === void 0 || !Number.isFinite(t))) return [...u];
      if (this.#i.balancedWidths) {
        const t = Array.from({ length: u.length }).fill(0), d = typeof this.#i.maxWidth == "number" && this.#i.maxWidth > 0 ? Math.min(this.#i.maxWidth, this.#o) : this.#o, g = this.calculateTotalGridWidth(Array.from({ length: t.length }).fill(0)), h = Math.max(0, d - g);
        let l = 0;
        const r = [];
        for (const [c, b] of u.entries()) typeof b == "number" && Number.isFinite(b) ? (t[c] = b, l += b) : r.push(c);
        let v = Math.max(0, h - l);
        const y = r.length > 0 ? Math.floor(v / r.length) : 0;
        for (const c of r) t[c] = y;
        v -= y * r.length;
        for (const c of r) {
          if (v <= 0) break;
          t[c] += 1, v -= 1;
        }
        return t;
      }
    }
    if (this.#i.balancedWidths) return this.calculateBalancedColumnWidths(o);
    const e = Array.from({ length: this.#i.columns }).fill(0), n = this.#i.paddingLeft + this.#i.paddingRight, a = this.#i.gap + (this.#i.showBorders ? this.#i.border?.bodyJoin.width ?? 0 : 0);
    for (let u = 0; u < this.#i.columns; u += 1) for (let t = 0; t < o.length; t += 1) {
      const d = o[t]?.[u];
      if (!d || go(o, t, u, d) !== t || u > 0 && o[t]?.[u - 1] === d) continue;
      const g = d.colSpan ?? 1, h = d.maxWidth ?? Number.POSITIVE_INFINITY, { maxLineWidth: l } = this.#u(d), r = Math.min(l, h);
      g === 1 && (e[u] = Math.max(e[u] ?? 0, r + n));
    }
    for (let u = 0; u < o.length; u += 1) for (let t = 0; t < this.#i.columns; t += 1) {
      const d = o[u]?.[t];
      if (!d || go(o, u, t, d) !== u || t > 0 && o[u]?.[t - 1] === d) continue;
      const g = d.colSpan ?? 1;
      if (g > 1) {
        const h = d.maxWidth ?? Number.POSITIVE_INFINITY, { lines: l, maxLineWidth: r } = this.#u(d), v = this.#i.wordWrap && d.wordWrap !== false;
        let y = Math.min(r, h);
        y = this.computeWrappedContentWidth(y, l, h, v);
        let c = 0;
        for (let j = t; j < t + g; j += 1) c += e[j] ?? 0;
        const b = g > 1 ? (g - 1) * a : 0, w = y + n + b, p = c + b;
        if (w > p) {
          const j = w - p, k = Math.floor(j / g);
          let f = 0;
          for (let Y = 0; Y < g && t + Y < this.#i.columns; Y += 1) {
            const L = Math.min(k, j - f);
            if (e[t + Y] = (e[t + Y] ?? 0) + L, f += L, f >= j) break;
          }
        }
      }
    }
    if (this.#i.fixedColumnWidths && this.#i.fixedColumnWidths.length === this.#i.columns) for (const [u, t] of this.#i.fixedColumnWidths.entries()) typeof t == "number" && Number.isFinite(t) && (e[u] = t);
    if (this.#i.maxWidth) {
      const u = this.calculateTotalGridWidth(e);
      if (u > this.#i.maxWidth) return this.adjustColumnWidthsForTerminal(e, u);
    }
    return e;
  }
  renderVisualRowContent(o, e, n, a, u) {
    const t = o[e];
    if (!t) return "";
    const d = this.#i.borderColor ?? this.#i.foregroundColor ?? void 0, g = [], h = this.#i.showBorders && this.#i.border ? aX(this.#i.border) : void 0, l = h && h.left.width > 0 ? h.left.char : "", r = h && h.right.width > 0 ? h.right.char : "", v = h && h.join.width > 0 ? h.join.char : "", y = " ".repeat(this.#i.gap);
    l && g.push(G$1(G$1(l, d), this.#i.backgroundColor));
    let c = 0;
    for (; c < this.#i.columns; ) {
      const b = t[c] ?? void 0;
      let w = 1, p;
      if (b) {
        const j = b.colSpan ?? 1;
        w = j;
        const k = go(o, e, c, b), f = this.#i.showBorders ? this.#i.border?.bodyJoin.width ?? 0 : 0, Y = ye(a, c, j, f), L = this.alignCellContent(b, Y), D = L.length, X = this.getCachedCellVerticalPosition(o, e, c, b);
        X.firstRow !== k && this.#n(`Mismatch between findFirstOccurrenceRow (${String(k)}) and determineCellVerticalPosition (${String(X.firstRow)})`);
        const P = u.slice(k, X.lastRow + 1).reduce((E, gi) => E + gi, 0), ni = X.lastRow - X.firstRow + 1;
        let V = n, zi = 0;
        const Re = this.#i.showBorders && (this.#i.border?.joinBody.width ?? 0) > 0;
        for (let E = k; E < e; E += 1) E < u.length && (V += u[E] ?? 1), Re && E < X.lastRow && (zi += 1);
        V += zi;
        const _o = b.vAlign ?? "top";
        let Zi;
        switch (_o) {
          case "bottom": {
            let E = n;
            for (let fi = k; fi < e; fi += 1) E += u[fi] ?? 1;
            const gi = P - D;
            Zi = E >= gi ? E - gi : -1;
            break;
          }
          case "middle": {
            const E = Math.round((P - D) / 2);
            let gi = n;
            for (let fi = k; fi < e; fi += 1) gi += u[fi] ?? 1;
            Zi = gi >= E && gi < E + D ? gi - E : -1;
            break;
          }
          case "top": {
            Zi = V;
            break;
          }
          default:
            Zi = V;
        }
        const Jo = Zi >= 0 && Zi < D;
        if (p = " ".repeat(Math.max(0, Y)), Jo) {
          let E = false;
          _o === "middle" && ni % 2 === 0 && Zi === 0 && (E = true), E || (p = L[Zi] ?? p);
        }
        b.colSpan && b.colSpan > 1 && (p += y.repeat(b.colSpan)), b.foregroundColor ? p = G$1(p, b.foregroundColor) : this.#i.foregroundColor && (p = G$1(p, this.#i.foregroundColor)), b.backgroundColor ? p = G$1(p, b.backgroundColor) : this.#i.backgroundColor && (p = G$1(p, this.#i.backgroundColor));
      } else {
        const j = this.#i.paddingLeft + this.#i.paddingRight, k = Math.max(0, (a[c] ?? 0) - j), f = " ".repeat(this.#i.paddingLeft + k + this.#i.paddingRight);
        p = G$1(G$1(n === 0 ? f : " ".repeat(f.length), this.#i.foregroundColor), this.#i.backgroundColor);
      }
      g.push(p), c + w < this.#i.columns && (g.push(y), this.#i.showBorders && v && g.push(G$1(G$1(v, d), this.#i.backgroundColor)), this.#i.gap > 0 && g.push(y)), c += w;
    }
    return r && g.push(G$1(G$1(r, d), this.#i.backgroundColor)), g.join("");
  }
  alignCellContent(o, e) {
    const n = this.#a.get(o);
    if (n?.has(e)) return n.get(e);
    const { paddingLeft: a, paddingRight: u } = this.#i, t = a + u, d = e - t;
    if (d <= 0) {
      const r = [" ".repeat(t + this.#i.gap)];
      return n ? n.set(e, r) : this.#a.set(o, /* @__PURE__ */ new Map([[e, r]])), r;
    }
    let g;
    const h = String(o.content ?? "");
    if (g = h.includes(`
`) || h.includes("\r") ? h.split(Au) : [h], this.#i.wordWrap && o.wordWrap !== false) {
      const r = typeof this.#i.wordWrap == "object" ? this.#i.wordWrap : {}, v = typeof o.wordWrap == "object" ? o.wordWrap : r;
      g = iX(h, { ...v, width: d }).split(`
`);
    }
    if (this.#i.truncate && o.truncate !== false) {
      const r = typeof this.#i.truncate == "object" ? this.#i.truncate : {}, v = typeof o.truncate == "object" ? o.truncate : r;
      g = g.map((y) => Xa(y, d, v));
    } else this.#i.truncateOverflow && (g = g.map((r) => z$1(r) > d ? Xa(r, d, {}) : r));
    const l = g.map((r) => tX(r, d, o.hAlign ?? "left", a, u));
    return n ? n.set(e, l) : this.#a.set(o, /* @__PURE__ */ new Map([[e, l]])), l;
  }
  renderHorizontalBorder(o, e, n, a, u, t = -1) {
    if (!this.#i.showBorders || !this.#i.border) return "";
    const d = this.#i.border, g = to(d, u), h = g.body.char, l = g.body.width, r = d.bodyJoin.char;
    if (u !== "middle" && l === 0) return "";
    let v = g.left.char, y = g.right.char;
    if (u === "middle" && t !== -1) {
      const p = o[n]?.[0] ?? void 0, j = o[t]?.[0] ?? void 0;
      p && j && p === j && (v = r);
      const k = this.#i.columns - 1, f = o[n]?.[k] ?? void 0, Y = o[t]?.[k] ?? void 0;
      f && Y && f === Y && (y = r);
    }
    const c = [], b = " ".repeat(this.#i.gap);
    v && c.push(G$1(G$1(v, this.#i.borderColor), this.#i.backgroundColor));
    let w;
    for (let p = 0; p < this.#i.columns; p += 1) {
      const j = o[n]?.[p] ?? void 0, k = u === "middle" && t !== -1 ? o[t]?.[p] ?? void 0 : void 0;
      let f, Y = false;
      if (j && (p === 0 || o[n]?.[p - 1] !== j) && (f = j, Y = true), j && !Y) continue;
      if (!j) {
        const X = a[p] ?? 0;
        if (w = l > 0 ? h.repeat(X) : " ".repeat(X), c.push(G$1(G$1(w, this.#i.borderColor), this.#i.backgroundColor)), p < this.#i.columns - 1) {
          const P = this.determineJoinChar(u, o, n, t, p, p + 1);
          c.push(b), P.width > 0 && c.push(G$1(G$1(P.char, this.#i.borderColor), this.#i.backgroundColor));
        }
        continue;
      }
      const L = f?.colSpan ?? 1;
      if (u === "middle" && u === "middle" && k && j === k && f) {
        const X = f.vAlign === "middle", { firstRow: P, lastRow: ni } = this.getCachedCellVerticalPosition(o, n, p, f), V = ni - P + 1, zi = V % 2 === 0, Re = P + Math.ceil(V / 2) - 1, _o = d.bodyJoin.width, Zi = ye(a, p, L, _o), Jo = this.alignCellContent(f, Zi), E = Jo.length;
        if (X && zi && n === Re) w = G$1(Jo[0] ?? "", this.#i.borderColor);
        else {
          let gi = 0;
          for (let uo = P; uo <= n; uo += 1) gi += e[uo] ?? 1, uo < n && (gi += 1);
          const fi = gi;
          if (fi >= 0 && fi < E) w = G$1(Jo[fi] ?? "", this.#i.foregroundColor);
          else {
            const uo = a.slice(p, p + L).reduce((Jg, Cg) => Jg + Cg, 0) + (L - 1) * (this.#i.gap + this.#i.border.bodyJoin.width);
            w = G$1(" ".repeat(uo), this.#i.borderColor);
          }
        }
        c.push(G$1(w, this.#i.backgroundColor));
      } else {
        const X = [];
        for (let P = p; P < p + L; P += 1) {
          const ni = a[P] ?? 0, V = l > 0 ? h : " ";
          if (X.push(V.repeat(ni + this.#i.gap)), P < p + L - 1) {
            const zi = this.determineJoinChar(u, o, n, t, P, P + 1);
            zi.width > 0 && X.push(zi.char);
          }
        }
        w = X.join(""), c.push(G$1(G$1(w, this.#i.borderColor), this.#i.backgroundColor));
      }
      const D = p + L - 1;
      if (D < this.#i.columns - 1) {
        const X = this.determineJoinChar(u, o, n, t, D, D + 1);
        X.width > 0 && c.push(G$1(G$1(X.char, this.#i.borderColor), this.#i.backgroundColor));
      }
      p += L - 1;
    }
    return y && c.push(G$1(G$1(y, this.#i.borderColor), this.#i.backgroundColor)), c.join("");
  }
  determineJoinChar(o, e, n, a, u, t = -1) {
    if (!this.#i.showBorders || !this.#i.border) return { char: " ", width: this.#i.gap };
    const d = this.#i.border;
    if (o !== "middle") {
      const Y = to(d, o), L = e[n]?.[u] ?? void 0, D = t === -1 ? u + 1 : t, X = e[n]?.[D] ?? void 0, P = L !== void 0 && X !== void 0 && L === X ? Y.body : Y.join, { char: ni, width: V } = P;
      return { char: ni, width: V > 0 ? V : this.#i.gap };
    }
    if (a === -1 || t === -1) return { char: " ", width: this.#i.gap };
    const g = d.bodyJoin, h = e[n]?.[u] ?? void 0, l = e[a]?.[u] ?? void 0, r = e[n]?.[t] ?? void 0, v = e[a]?.[t] ?? void 0, y = h !== void 0 && l !== void 0 && h === l, c = r !== void 0 && v !== void 0 && r === v, b = h !== void 0 && r !== void 0 && h === r, w = l !== void 0 && v !== void 0 && l === v;
    let p;
    const j = to(d, "middle");
    y && c ? p = b ? { char: " ", width: g.width } : g : y ? p = d.joinLeft : c ? p = d.joinRight : b && w ? p = j.body : b ? p = d.topJoin : w ? p = d.bottomJoin : p = d.joinJoin;
    const { char: k, width: f } = p;
    return { char: k, width: f > 0 ? f : this.#i.gap };
  }
  renderGrid(o, e) {
    if (o.length === 0) return "";
    const n = [], a = uX(o, e, this.#i, this.alignCellContent.bind(this), go), u = this.#i.showBorders && this.#i.border ? to(this.#i.border, "top") : void 0;
    u && u.body.width > 0 && n.push(this.renderHorizontalBorder(o, a, 0, e, "top"));
    for (let d = 0; d < o.length; d += 1) {
      const g = a[d] ?? 1;
      for (let l = 0; l < g; l += 1) n.push(this.renderVisualRowContent(o, d, l, e, a));
      const h = this.#i.showBorders && this.#i.border ? to(this.#i.border, "middle") : void 0;
      if (d < o.length - 1 && h && h.body.width > 0) {
        const l = o[d], r = o[d + 1];
        let v = false;
        if (l && r) for (let y = 0; y < this.#i.columns; y += 1) {
          const c = l[y], b = r[y];
          if (c !== b) {
            v = true;
            break;
          }
        }
        v && n.push(this.renderHorizontalBorder(o, a, d, e, "middle", d + 1));
      }
    }
    const t = this.#i.showBorders && this.#i.border ? to(this.#i.border, "bottom") : void 0;
    return t && t.body.width > 0 && n.push(this.renderHorizontalBorder(o, a, o.length - 1, e, "bottom")), n.join(`
`);
  }
  getCachedCellVerticalPosition(o, e, n, a) {
    const u = this.#t.get(a);
    if (u) return u;
    const t = fn(o, e, n, a);
    return this.#t.set(a, t), t;
  }
}

const t = { bodyJoin: { char: "│", width: 1 }, bodyLeft: { char: "│", width: 1 }, bodyRight: { char: "│", width: 1 }, bottomBody: { char: "─", width: 1 }, bottomJoin: { char: "┴", width: 1 }, bottomLeft: { char: "└", width: 1 }, bottomRight: { char: "┘", width: 1 }, joinBody: { char: "─", width: 1 }, joinJoin: { char: "┼", width: 1 }, joinLeft: { char: "├", width: 1 }, joinRight: { char: "┤", width: 1 }, topBody: { char: "─", width: 1 }, topJoin: { char: "┬", width: 1 }, topLeft: { char: "┌", width: 1 }, topRight: { char: "┐", width: 1 } };
const a = { bodyJoin: { char: "", width: 0 }, bodyLeft: { char: "", width: 0 }, bodyRight: { char: "", width: 0 }, bottomBody: { char: "", width: 0 }, bottomJoin: { char: "", width: 0 }, bottomLeft: { char: "", width: 0 }, bottomRight: { char: "", width: 0 }, joinBody: { char: "", width: 0 }, joinJoin: { char: "", width: 0 }, joinLeft: { char: "", width: 0 }, joinRight: { char: "", width: 0 }, topBody: { char: "", width: 0 }, topJoin: { char: "", width: 0 }, topLeft: { char: "", width: 0 }, topRight: { char: "", width: 0 } };

const j$1 = (u) => u.reduce((t, i) => {
  if (i === null) return t + 1;
  if (typeof i == "object" && !Array.isArray(i)) {
    const h = typeof i.colSpan == "number" ? i.colSpan : 1;
    return t + (h <= 0 ? 1 : h);
  }
  return t + 1;
}, 0);
const D$2 = /[\u0000-\u001F\u007F-\u009F]/gu;
const E$1 = (u) => u.replaceAll(D$2, "");
let I$1 = class I {
  #t;
  #o = [];
  #e = [];
  #s = [];
  #i = true;
  #r = void 0;
  #n(t) {
    const i = this.#t.onWarn;
    if (i) {
      i(t);
      return;
    }
    console.warn(t);
  }
  constructor(t$1 = {}) {
    this.#t = { ...t$1, showFooter: t$1.showFooter ?? true, showHeader: t$1.showHeader ?? true, style: { border: t, paddingLeft: 1, paddingRight: 1, ...t$1.style } };
  }
  setHeaders(t) {
    return t.length > 0 && !Array.isArray(t[0]) ? this.#e = [t] : this.#e = t.map((i) => Array.isArray(i) ? i : [i]), this.#i = true, this.#r = void 0, this;
  }
  setFooter(t) {
    return t.length > 0 && !Array.isArray(t[0]) ? this.#s = [t] : this.#s = t.map((i) => Array.isArray(i) ? i : [i]), this.#i = true, this.#r = void 0, this;
  }
  addRow(t) {
    if (!Array.isArray(t)) throw new TypeError("Row must be an array");
    return this.#o.push(t), this.#i = true, this.#r = void 0, this;
  }
  addRows(...t) {
    for (const i of t) this.addRow(i);
    return this.#i = true, this.#r = void 0, this;
  }
  getRows() {
    return this.#o.map((t) => [...t]);
  }
  get rowCount() {
    return this.#o.length;
  }
  removeRow(t) {
    if (!Number.isInteger(t) || t < 0 || t >= this.#o.length) throw new RangeError(`Row index ${String(t)} is out of bounds (0..${String(this.#o.length - 1)})`);
    return this.#o.splice(t, 1), this.#i = true, this.#r = void 0, this;
  }
  clear() {
    return this.#o.length = 0, this.#i = true, this.#r = void 0, this;
  }
  toString() {
    if (!this.#i && this.#r !== void 0) return this.#r;
    const t = this.#t.showHeader ? this.#e : [], i = this.#t.showFooter ? this.#s : [], h = [...t, ...this.#o, ...i];
    if (h.length === 0) return this.#r = "", this.#i = false, "";
    let s = 0;
    for (const r of h) {
      const e = r;
      Array.isArray(e) ? s = Math.max(s, j$1(e)) : this.#n(`Unexpected non-array element found while calculating columns: ${JSON.stringify(e)}`);
    }
    if (s === 0) return this.#r = "", this.#i = false, "";
    let n;
    Array.isArray(this.#t.columnWidths) ? n = this.#t.columnWidths.length >= s ? this.#t.columnWidths.slice(0, s) : [...this.#t.columnWidths, ...Array.from({ length: s - this.#t.columnWidths.length }).fill(void 0)] : typeof this.#t.columnWidths == "number" && (n = Array.from({ length: s }).fill(this.#t.columnWidths));
    let p;
    const C = h.length;
    if (Array.isArray(this.#t.rowHeights) ? p = this.#t.rowHeights : typeof this.#t.rowHeights == "number" && (p = Array.from({ length: C }).fill(this.#t.rowHeights)), n || h.some((r) => Array.isArray(r) && r.some((e) => typeof e == "object" && e !== null && !Array.isArray(e) && e.width !== void 0)) && (n = Array.from({ length: s }).fill(void 0)), n && Array.isArray(n)) {
      const r = [...n];
      for (const e of h) {
        const c = e;
        let a = 0;
        for (const g of c) {
          let l = {};
          if (typeof g == "object" && g !== null && !Array.isArray(g)) {
            const { content: W, href: v, ...A } = g;
            l = A;
          }
          l.width !== void 0 ? r[a] = l.width : l.maxWidth !== void 0 && r[a] !== void 0 && (r[a] = Math.min(r[a], l.maxWidth)), a += l.colSpan ?? 1;
        }
      }
      n = r;
    }
    const H = { autoFlow: "row", backgroundColor: this.#t.style?.backgroundColor, balancedWidths: this.#t.balancedWidths ?? false, border: this.#t.style?.border, borderColor: this.#t.style?.borderColor, columns: s, fixedColumnWidths: n, fixedRowHeights: p, foregroundColor: this.#t.style?.foregroundColor, gap: this.#t.gap ?? 0, maxWidth: this.#t.maxWidth, onWarn: this.#t.onWarn, paddingLeft: this.#t.style?.paddingLeft, paddingRight: this.#t.style?.paddingRight, terminalWidth: this.#t.terminalWidth, truncate: this.#t.truncate ?? (n?.every((r) => typeof r == "number") || this.#t.maxWidth !== void 0 && !this.#t.balancedWidths), truncateOverflow: this.#t.truncateOverflow ?? true, wordWrap: this.#t.wordWrap ?? false }, m = new ce(H), f = [];
    if (this.#t.columnDefaults) for (const [r, e] of this.#t.columnDefaults.entries()) e && (f[r] = { ...e });
    if (this.#t.colAligns) for (const [r, e] of this.#t.colAligns.entries()) e !== void 0 && (f[r] = { ...f[r], hAlign: f[r]?.hAlign ?? e });
    const F = f.length > 0, w = [];
    for (const [r, e] of h.entries()) {
      const c = e;
      if (!Array.isArray(c)) {
        this.#n(`Skipping non-array row while creating GridItems: ${JSON.stringify(c)}`);
        continue;
      }
      const a = this.#t.showHeader ? this.#e.length : 0, g = this.#o.length, l = this.#t.showHeader && r < a, W = this.#t.showFooter && r >= a + g, v = l && c.length === 1 && s > 1, A = W && c.length === 1 && s > 1;
      let b = 0;
      for (const T of c) {
        let d = T, o = {};
        if (typeof d == "object" && d !== null && !Array.isArray(d)) {
          const { content: S, href: R, ...O } = d;
          d = R ? `\x1B]8;;${E$1(R)}\x1B\\${String(S)}\x1B]8;;\x1B\\` : S, o = O;
        }
        const y = F ? f[b] : void 0;
        y && (o = { ...o, hAlign: o.hAlign ?? y.hAlign, maxWidth: o.maxWidth ?? y.maxWidth, truncate: o.truncate ?? y.truncate, vAlign: o.vAlign ?? y.vAlign, wordWrap: o.wordWrap ?? y.wordWrap }), b += o.colSpan ?? 1, v && (o.colSpan = s), A && (o.colSpan = s);
        const $ = this.#t.transformTabToSpace && typeof d == "string" ? d.replaceAll("	", " ".repeat(this.#t.transformTabToSpace)) : d, { maxWidth: x } = o;
        w.push({ backgroundColor: o.backgroundColor, colSpan: o.colSpan, content: $, foregroundColor: o.foregroundColor, hAlign: o.hAlign, maxWidth: x, rowSpan: o.rowSpan, truncate: o.truncate ?? (x === void 0 ? void 0 : true), vAlign: o.vAlign, wordWrap: o.wordWrap });
      }
    }
    return m.addItems(w), this.#r = m.toString(), this.#i = false, this.#r;
  }
};
const N$2 = (u) => new I$1(u);

const l = /^#?([a-f\d]{3}|[a-f\d]{6})$/i;
const s$2 = (n) => {
  let [, o] = l.exec(n) ?? [];
  const t = o ? o.length : 0;
  if (t === 3) {
    const c = o.charAt(0), r = o.charAt(1), i = o.charAt(2);
    o = c + c + r + r + i + i;
  } else if (t !== 6) return globalThis.process?.env?.NODE_ENV !== "production" && console.warn(`[@visulima/colorize] Invalid hex color "${n}"; expected a 3- or 6-digit hex string (e.g. "#96C" or "#E0115F"). Falling back to black.`), [0, 0, 0];
  const e = Number.parseInt(o, 16);
  return [e >> 16 & 255, e >> 8 & 255, e & 255];
};

const e = (t, r, n) => t === r && r === n ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 51) + 6 * Math.round(r / 51) + Math.round(n / 51);
const h$2 = (t) => {
  let r, n, u;
  if (t < 8) return 30 + t;
  if (t < 16) return 90 + (t - 8);
  if (t >= 232) r = n = u = ((t - 232) * 10 + 8) / 255;
  else {
    t -= 16;
    const i = t % 36;
    r = Math.floor(t / 36) / 5, n = Math.floor(i / 6) / 5, u = i % 6 / 5;
  }
  const a = Math.max(r, n, u) * 2;
  if (a === 0) return 30;
  const o = 30 + (Math.round(u) << 2 | Math.round(n) << 1 | Math.round(r));
  return a === 2 ? o + 60 : o;
};
const s$1 = (t, r, n) => h$2(e(t, r, n));

function A$2({ onlyFirst: n = false } = {}) {
  const u = "(?:\\u001B\\][^\\u0007\\u001B\\u009C]*(?:\\u0007|\\u001B\\u005C|\\u009C))|[\\u001B\\u009B][[\\]()#;?]*(?:\\d{1,4}(?:[;:]\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]";
  return new RegExp(u, n ? void 0 : "g");
}
const S$3 = (n, e, b) => e > n ? e : Math.min(n, b);
const o = 39;
const s = 49;
const C$3 = 10;
const $$1 = { close: "", open: "" };
const k$1 = (n) => {
  const e$1 = n > 0 ? (t, l) => ({ close: `\x1B[${String(l)}m`, open: `\x1B[${String(t)}m` }) : () => $$1, b = (t) => (l, c, h) => t(e(Number(l), Number(c), Number(h))), r = (t) => (l) => {
    const [c, h, y] = s$2(l);
    return t(c, h, y);
  };
  let u = (t) => e$1(`38;5;${String(t)}`, o), g = (t) => e$1(`48;5;${String(t)}`, s), d = (t, l, c) => e$1(`38;2;${String(t)};${String(l)};${String(c)}`, o), f = (t, l, c) => e$1(`48;2;${String(t)};${String(l)};${String(c)}`, s);
  n === 1 ? (u = (t) => e$1(h$2(Number(t)), o), g = (t) => e$1(h$2(Number(t)) + C$3, s), d = (t, l, c) => e$1(s$1(Number(t), Number(l), Number(c)), o), f = (t, l, c) => e$1(s$1(Number(t), Number(l), Number(c)) + C$3, s)) : n === 2 && (d = b(u), f = b(g));
  const B = { bold: e$1(1, 22), dim: e$1(2, 22), hidden: e$1(8, 28), inverse: e$1(7, 27), italic: e$1(3, 23), overline: e$1(53, 55), reset: e$1(0, 0), strike: e$1(9, 29), strikethrough: e$1(9, 29), underline: e$1(4, 24), underlineCurly: e$1("4:3", 24), underlineDashed: e$1("4:5", 24), underlineDotted: e$1("4:4", 24), underlineDouble: e$1("4:2", 24), visible: $$1 }, i = { bgBlack: e$1(40, s), bgBlackBright: e$1(100, s), bgBlue: e$1(44, s), bgBlueBright: e$1(104, s), bgCyan: e$1(46, s), bgCyanBright: e$1(106, s), bgGray: e$1(100, s), bgGreen: e$1(42, s), bgGreenBright: e$1(102, s), bgGrey: e$1(100, s), bgMagenta: e$1(45, s), bgMagentaBright: e$1(105, s), bgRed: e$1(41, s), bgRedBright: e$1(101, s), bgWhite: e$1(47, s), bgWhiteBright: e$1(107, s), bgYellow: e$1(43, s), bgYellowBright: e$1(103, s), black: e$1(30, o), blackBright: e$1(90, o), blue: e$1(34, o), blueBright: e$1(94, o), cyan: e$1(36, o), cyanBright: e$1(96, o), gray: e$1(90, o), green: e$1(32, o), greenBright: e$1(92, o), grey: e$1(90, o), magenta: e$1(35, o), magentaBright: e$1(95, o), red: e$1(31, o), redBright: e$1(91, o), white: e$1(37, o), whiteBright: e$1(97, o), yellow: e$1(33, o), yellowBright: e$1(93, o) }, a = { bg: (t) => g(S$3(t, 0, 255)), bgHex: r(f), bgRgb: (t, l, c) => f(S$3(t, 0, 255), S$3(l, 0, 255), S$3(c, 0, 255)), fg: (t) => u(S$3(t, 0, 255)), hex: r(d), rgb: (t, l, c) => d(S$3(t, 0, 255), S$3(l, 0, 255), S$3(c, 0, 255)) };
  return { baseColors: i, baseStyles: B, styleMethods: a };
};
const x$2 = U$1();
$$3();
k$1(x$2);
const P$2 = (n, e, b) => {
  if (e === "") return n;
  let r = n.indexOf(e);
  if (r < 0) return n;
  const u = e.length;
  let g = 0, d = "";
  for (; ~r; ) d += n.slice(g, r) + b, g = r + u, r = n.indexOf(e, g);
  return d + n.slice(g);
};
const T$1 = (n, e, b) => {
  if (n == null || n === "") return "";
  let r;
  if (n.raw === void 0 ? r = String(n) : r = String.raw(n, ...e), r.includes("\x1B")) for (let u = b; u; u = u.props) r = P$2(r, u.close, u.open);
  return r.includes(`
`) && (r = r.replace(/(\r*\n)/g, `${b.closeStack}$1${b.openStack}`)), b.openStack + r + b.closeStack;
};
const D$1 = function(n) {
  const e = n?.level ?? x$2, { baseColors: b, baseStyles: r, styleMethods: u } = k$1(e), g = {};
  let d = null;
  const f = ({ props: i }, { close: a, open: t }) => {
    const l = (i?.openStack ?? "") + t, c = a + (i?.closeStack ?? ""), h = (y, ...v) => T$1(y, v, h.props);
    return Object.setPrototypeOf(h, d), h.props = { close: a, closeStack: c, open: t, openStack: l, props: i }, h.open = l, h.close = c, h;
  }, B = (i) => String(i);
  B.strip = (i) => i.replaceAll(A$2(), "");
  for (const i in b) g[i] = { get() {
    const a = f(this, b[i]);
    return Object.defineProperty(this, i, { value: a }), a;
  } };
  for (const i in r) g[i] = { get() {
    const a = f(this, r[i]);
    return Object.defineProperty(this, i, { value: a }), a;
  } };
  for (const i in u) g[i] = { get() {
    return (...a) => f(this, u[i](...a));
  } };
  return g.ansi256 = g.fg, g.bgAnsi256 = g.bg, d = Object.defineProperties({}, g), Object.setPrototypeOf(B, d), B;
};

const m = (n) => (r, ...e) => {
  if (!Array.isArray(r) || !Array.isArray(r.raw)) throw new TypeError("A tagged template literal must be provided");
  const s = [r.raw[0]];
  for (let t = 1; t < r.raw.length; t += 1) s.push(String(e[t - 1]).replaceAll(/[{}\\]/g, String.raw`\$&`), String(r.raw[t]));
  return n(s.join(""));
};
const b$1 = /* @__PURE__ */ new Map([["0", "\0"], ["\\", "\\"], ["a", "\x07"], ["b", "\b"], ["e", "\x1B"], ["f", "\f"], ["n", `
`], ["r", "\r"], ["t", "	"], ["v", "\v"]]);
const g = (n) => {
  const r = n.startsWith("u"), e = n[1] === "{";
  return r && !e && n.length === 5 || n.startsWith("x") && n.length === 3 ? String.fromCodePoint(Number.parseInt(n.slice(1), 16)) : r && e ? String.fromCodePoint(Number.parseInt(n.slice(2, -1), 16)) : b$1.get(n) ?? n;
};
const y = /\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.)|\{(~)?(#?[\w:]+(?:\([^)]*\))?(?:\.#?[\w:]+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n))|(\})|((?:.|[\r\n\f])+?)/gi;
const p = /(?:^|\.)(?:(\w+)(?:\(([^)]*)\))?|#(?=[:a-f\d]{2,})([a-f\d]{6})?(?::([a-f\d]{6}))?)/gi;
const A$1 = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
const x$1 = /\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.)|([^\\])/gi;
const k = /\s*,\s*/;
const S$2 = (n, r) => {
  const e = [], s = r.trim().split(k);
  let t;
  for (const o of s) {
    const l = Number(o);
    if (!Number.isNaN(l)) e.push(l);
    else if (t = A$1.exec(o)) e.push(t[2].replaceAll(x$1, (u, a, i) => a ? g(a) : i));
    else throw new Error(`Invalid template style argument: ${o} (in style '${n}')`);
  }
  return e;
};
const T = (n) => {
  p.lastIndex = 0;
  const r = [];
  let e;
  for (; (e = p.exec(n)) !== null; ) {
    const s = e[1];
    e[2] ? r.push([s, ...S$2(s, e[2])]) : e[3] || e[4] ? (e[3] && r.push(["rgb", ...s$2(e[3])]), e[4] && r.push(["bgRgb", ...s$2(e[4])])) : r.push([s]);
  }
  return r;
};
const h$1 = (n, r) => {
  const e = {};
  for (const t of r) for (const o of t.styles) e[o[0]] = t.inverse ? void 0 : o.slice(1);
  let s = n;
  for (const [t, o] of Object.entries(e)) if (Array.isArray(o)) {
    if (!(t in s)) throw new Error(`Unknown style: ${t}`);
    s = o.length > 0 ? s[t](...o) : s[t];
  }
  return s;
};
const d = (n) => (r) => {
  const e = [], s = [];
  let t = [];
  if (r.replaceAll(y, (o, l, u, a, i, w) => {
    if (l) t.push(g(l));
    else if (a) {
      const c = t.join("");
      t = [], s.push(e.length === 0 ? c : h$1(n, e)(c)), e.push({ inverse: u, styles: T(a) });
    } else if (i) {
      if (e.length === 0) throw new Error("Found extraneous } in template literal");
      s.push(h$1(n, e)(t.join(""))), t = [], e.pop();
    } else t.push(w);
  }), s.push(t.join("")), e.length > 0) throw new Error(`template literal is missing ${String(e.length)} closing bracket${e.length === 1 ? "" : "s"} (\`}\`)`);
  return s.join("");
};
const N$1 = new D$1();
const C$2 = d(N$1);
const v = m(C$2);

let rt;
const nt = (t) => (rt ??= createRequire(import.meta.url))(t);
const b = typeof globalThis < "u" && typeof globalThis.process < "u" ? globalThis.process : w$1;
const S$1 = (t) => {
  if (typeof b < "u" && b.versions && b.versions.node) {
    const [e, r] = b.versions.node.split(".").map(Number);
    if (e > 22 || e === 22 && r >= 3 || e === 20 && r >= 16) return b.getBuiltinModule(t);
  }
  return nt(t);
};
const w$1 = b;
const { execFileSync: ot } = S$1("node:child_process");
const W = S$1("node:fs");
const it = S$1("node:tty");
const ct = S$1("node:os");
const dt = [161, 161, 164, 164, 167, 168, 170, 170, 173, 174, 176, 180, 182, 186, 188, 191, 198, 198, 208, 208, 215, 216, 222, 225, 230, 230, 232, 234, 236, 237, 240, 240, 242, 243, 247, 250, 252, 252, 254, 254, 257, 257, 273, 273, 275, 275, 283, 283, 294, 295, 299, 299, 305, 307, 312, 312, 319, 322, 324, 324, 328, 331, 333, 333, 338, 339, 358, 359, 363, 363, 462, 462, 464, 464, 466, 466, 468, 468, 470, 470, 472, 472, 474, 474, 476, 476, 593, 593, 609, 609, 708, 708, 711, 711, 713, 715, 717, 717, 720, 720, 728, 731, 733, 733, 735, 735, 768, 879, 913, 929, 931, 937, 945, 961, 963, 969, 1025, 1025, 1040, 1103, 1105, 1105, 8208, 8208, 8211, 8214, 8216, 8217, 8220, 8221, 8224, 8226, 8228, 8231, 8240, 8240, 8242, 8243, 8245, 8245, 8251, 8251, 8254, 8254, 8308, 8308, 8319, 8319, 8321, 8324, 8364, 8364, 8451, 8451, 8453, 8453, 8457, 8457, 8467, 8467, 8470, 8470, 8481, 8482, 8486, 8486, 8491, 8491, 8531, 8532, 8539, 8542, 8544, 8555, 8560, 8569, 8585, 8585, 8592, 8601, 8632, 8633, 8658, 8658, 8660, 8660, 8679, 8679, 8704, 8704, 8706, 8707, 8711, 8712, 8715, 8715, 8719, 8719, 8721, 8721, 8725, 8725, 8730, 8730, 8733, 8736, 8739, 8739, 8741, 8741, 8743, 8748, 8750, 8750, 8756, 8759, 8764, 8765, 8776, 8776, 8780, 8780, 8786, 8786, 8800, 8801, 8804, 8807, 8810, 8811, 8814, 8815, 8834, 8835, 8838, 8839, 8853, 8853, 8857, 8857, 8869, 8869, 8895, 8895, 8978, 8978, 9312, 9449, 9451, 9547, 9552, 9587, 9600, 9615, 9618, 9621, 9632, 9633, 9635, 9641, 9650, 9651, 9654, 9655, 9660, 9661, 9664, 9665, 9670, 9672, 9675, 9675, 9678, 9681, 9698, 9701, 9711, 9711, 9733, 9734, 9737, 9737, 9742, 9743, 9756, 9756, 9758, 9758, 9792, 9792, 9794, 9794, 9824, 9825, 9827, 9829, 9831, 9834, 9836, 9837, 9839, 9839, 9886, 9887, 9919, 9919, 9926, 9933, 9935, 9939, 9941, 9953, 9955, 9955, 9960, 9961, 9963, 9969, 9972, 9972, 9974, 9977, 9979, 9980, 9982, 9983, 10045, 10045, 10102, 10111, 11094, 11097, 12872, 12879, 57344, 63743, 65024, 65039, 65533, 65533, 127232, 127242, 127248, 127277, 127280, 127337, 127344, 127373, 127375, 127376, 127387, 127404, 917760, 917999, 983040, 1048573, 1048576, 1114109];
const ft = 12288;
const ht = 65510;
const pt = [12288, 12288, 65281, 65376, 65504, 65510];
const mt = 8361;
const wt = 65518;
const gt = [8361, 8361, 65377, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500, 65512, 65518];
const bt = 32;
const yt = 10630;
const Nt = [32, 126, 162, 163, 165, 166, 172, 172, 175, 175, 10214, 10221, 10629, 10630];
const It = 4352;
const Wt = 262141;
const G = [4352, 4447, 8986, 8987, 9001, 9002, 9193, 9196, 9200, 9200, 9203, 9203, 9725, 9726, 9748, 9749, 9776, 9783, 9800, 9811, 9855, 9855, 9866, 9871, 9875, 9875, 9889, 9889, 9898, 9899, 9917, 9918, 9924, 9925, 9934, 9934, 9940, 9940, 9962, 9962, 9970, 9971, 9973, 9973, 9978, 9978, 9981, 9981, 9989, 9989, 9994, 9995, 10024, 10024, 10060, 10060, 10062, 10062, 10067, 10069, 10071, 10071, 10133, 10135, 10160, 10160, 10175, 10175, 11035, 11036, 11088, 11088, 11093, 11093, 11904, 11929, 11931, 12019, 12032, 12245, 12272, 12287, 12289, 12350, 12353, 12438, 12441, 12543, 12549, 12591, 12593, 12686, 12688, 12773, 12783, 12830, 12832, 12871, 12880, 42124, 42128, 42182, 43360, 43388, 44032, 55203, 63744, 64255, 65040, 65049, 65072, 65106, 65108, 65126, 65128, 65131, 94176, 94180, 94192, 94198, 94208, 101589, 101631, 101662, 101760, 101874, 110576, 110579, 110581, 110587, 110589, 110590, 110592, 110882, 110898, 110898, 110928, 110930, 110933, 110933, 110948, 110951, 110960, 111355, 119552, 119638, 119648, 119670, 126980, 126980, 127183, 127183, 127374, 127374, 127377, 127386, 127488, 127490, 127504, 127547, 127552, 127560, 127568, 127569, 127584, 127589, 127744, 127776, 127789, 127797, 127799, 127868, 127870, 127891, 127904, 127946, 127951, 127955, 127968, 127984, 127988, 127988, 127992, 128062, 128064, 128064, 128066, 128252, 128255, 128317, 128331, 128334, 128336, 128359, 128378, 128378, 128405, 128406, 128420, 128420, 128507, 128591, 128640, 128709, 128716, 128716, 128720, 128722, 128725, 128728, 128732, 128735, 128747, 128748, 128756, 128764, 128992, 129003, 129008, 129008, 129292, 129338, 129340, 129349, 129351, 129535, 129648, 129660, 129664, 129674, 129678, 129734, 129736, 129736, 129741, 129756, 129759, 129770, 129775, 129784, 131072, 196605, 196608, 262141];
const O$1 = (t, e) => {
  let r = 0, s = Math.floor(t.length / 2) - 1;
  for (; r <= s; ) {
    const i = Math.floor((r + s) / 2), c = i * 2;
    if (e < t[c]) s = i - 1;
    else if (e > t[c + 1]) r = i + 1;
    else return true;
  }
  return false;
};
const z = 19968;
const [Ot, vt] = xt(G);
function xt(t) {
  let e = t[0], r = t[1];
  for (let s = 0; s < t.length; s += 2) {
    const i = t[s], c = t[s + 1];
    if (z >= i && z <= c) return [i, c];
    c - i > r - e && (e = i, r = c);
  }
  return [e, r];
}
const Et = (t) => t < 161 || t > 1114109 ? false : O$1(dt, t);
const At = (t) => t < ft || t > ht ? false : O$1(pt, t);
const $t = (t) => t < mt || t > wt ? false : O$1(gt, t);
const Mt = (t) => t < bt || t > yt ? false : O$1(Nt, t);
const Ct = (t) => t >= Ot && t <= vt ? true : t < It || t > Wt ? false : O$1(G, t);
function Rt(t) {
  return Et(t) ? "ambiguous" : At(t) ? "fullwidth" : $t(t) ? "halfwidth" : Mt(t) ? "narrow" : Ct(t) ? "wide" : "neutral";
}
function St(t) {
  if (!Number.isSafeInteger(t)) throw new TypeError(`Expected a code point, got \`${typeof t}\`.`);
}
function V(t) {
  return St(t), Rt(t);
}
const D = /* @__PURE__ */ new Map();
const Tt = (t) => [t.ambiguousIsNarrow ? 1 : 0, t.control, t.fullWidth, t.regular, t.wide].join("|");
const kt = (t) => {
  const e = Tt(t.width);
  let r = D.get(e);
  return r || (r = /* @__PURE__ */ new Map(), D.set(e, r)), r;
};
const x = new RegExp(u.source, "y");
const _ = new RegExp(c.source, "uy");
const E = /(?:[\u0020-\u007E\u00A0-\u00FF](?!\uFE0F)){1,1000}/y;
const Y = (t) => t >= 32 && t <= 126 ? "latin" : t === 8203 || t === 8204 || t === 8205 || t === 8288 ? "zero" : t <= 31 || t >= 127 && t <= 159 ? "control" : t >= 160 && t <= 255 || t >= 9472 && t <= 9599 ? "latin" : t >= 4352 && t <= 4607 || t >= 11904 && t <= 40959 || t >= 44032 && t <= 55215 || t >= 63744 && t <= 64255 || t >= 65280 && t <= 65519 && !(t >= 65377 && t <= 65439) || t >= 12352 && t <= 12543 ? "wide" : t === 8230 ? "latin" : "other";
const Lt = (t, e) => {
  const r = kt(e), s = Math.floor(t / 65536), i = t % 65536;
  let c = r.get(s);
  if (c || (c = /* @__PURE__ */ new Map(), r.set(s, c)), c.has(i)) return c.get(i);
  let n;
  switch (Y(t)) {
    case "control": {
      n = e.width.control;
      break;
    }
    case "latin": {
      n = e.width.regular;
      break;
    }
    case "wide": {
      n = e.width.wide;
      break;
    }
    case "zero": {
      n = 0;
      break;
    }
    default:
      switch (V(t)) {
        case "ambiguous": {
          n = e.width.ambiguousIsNarrow ? e.width.regular : e.width.wide;
          break;
        }
        case "fullwidth": {
          n = e.width.fullWidth;
          break;
        }
        case "wide": {
          n = e.width.wide;
          break;
        }
        default:
          n = e.width.regular;
      }
  }
  return c.set(i, n), n;
};
const _t = (t) => t >= 768 && t <= 879 || t >= 6832 && t <= 6911 || t >= 7616 && t <= 7679 || t >= 8400 && t <= 8447 || t >= 65056 && t <= 65071 || t >= 917760 && t <= 917999 || t >= 65024 && t <= 65039 || t >= 3633 && t <= 3642 || t >= 3655 && t <= 3662 || t >= 3761 && t <= 3769 || t >= 3771 && t <= 3772 || t >= 3784 && t <= 3789 || t >= 2304 && t <= 2307 || t >= 2362 && t <= 2383 || t >= 2385 && t <= 2391 || t >= 2402 && t <= 2403 || t >= 2433 && t <= 2435 || t >= 2492 && t <= 2500 || t >= 2509 && t <= 2509 || t >= 2561 && t <= 2563 || t >= 2620 && t <= 2637 || t >= 1611 && t <= 1631 || t >= 1648 && t <= 1648 || t >= 1750 && t <= 1773 || t >= 2276 && t <= 2302 || t >= 1425 && t <= 1469 || t >= 1471 && t <= 1471 || t >= 1473 && t <= 1474 || t >= 1476 && t <= 1477 || t >= 1479 && t <= 1479 || t >= 3893 && t <= 3893 || t >= 3895 && t <= 3895 || t >= 3897 && t <= 3897 || t >= 3953 && t <= 3966 || t >= 3968 && t <= 3972 || t >= 3974 && t <= 3975 ? true : t >= 768 && t <= 777 || t >= 803 && t <= 803;
const F = (t, e = {}) => {
  if (!t || t.length === 0) return { ellipsed: false, index: 0, truncated: false, width: 0 };
  const r = { truncation: { countAnsiEscapeCodes: e.countAnsiEscapeCodes ?? false, ellipsis: e.ellipsis ?? "", ellipsisWidth: e.ellipsisWidth ?? (e.ellipsis ? F(e.ellipsis, { ...e, ellipsis: "", ellipsisWidth: 0, limit: Number.POSITIVE_INFINITY }).width : 0), limit: e.limit ?? Number.POSITIVE_INFINITY }, width: { ambiguousIsNarrow: e.ambiguousIsNarrow ?? false, ansi: e.ansiWidth ?? 0, control: e.controlWidth ?? 0, emoji: e.emojiWidth ?? 2, fullWidth: e.fullWidth ?? 2, halfWidth: e.halfWidth ?? 1, regular: e.regularWidth ?? 1, tab: e.tabWidth ?? 8, wide: e.wideWidth ?? 2 } }, s = Math.max(0, r.truncation.limit - r.truncation.ellipsisWidth), { length: i$1 } = t, c = i$1 > 1e4;
  let n = 0, o = 0, l = i$1, a = false;
  const u$1 = t.includes("\x1B") || t.includes("");
  for (; n < i$1; ) {
    if (u$1 && (t[n] === "\x1B" || t[n] === "")) {
      if (t.startsWith("\x1B]8;;", n)) {
        const f = "\x1B]8;;\x07", p = f.length, T = t.indexOf("\x07", n + 5);
        if (T !== -1) {
          const k = t.indexOf(f, T + 1);
          if (k !== -1) {
            const Q = k + p, tt = t.slice(T + 1, k).replace(u, ""), B = F(tt, { ambiguousIsNarrow: r.width.ambiguousIsNarrow, ansiWidth: r.width.ansi, controlWidth: r.width.control, countAnsiEscapeCodes: false, ellipsis: r.truncation.ellipsis, ellipsisWidth: r.truncation.ellipsisWidth, emojiWidth: r.width.emoji, fullWidth: r.width.fullWidth, halfWidth: r.width.halfWidth, limit: Math.max(0, s - o), regularWidth: r.width.regular, tabWidth: r.width.tab, wideWidth: r.width.wide }), L = B.width;
            if (B.truncated) a = true, l = Math.min(l, n);
            else if (o + L > s && (l = Math.min(l, n), a = true, o + L > r.truncation.limit)) break;
            if (o += L, n = Q, a && o >= r.truncation.limit) break;
            continue;
          }
        }
      }
      if (x.lastIndex = n, x.test(t)) {
        const f = x.lastIndex - n, p = r.truncation.countAnsiEscapeCodes ? f : r.width.ansi;
        if (o + p > s && (l = Math.min(l, n), o + p > r.truncation.limit)) {
          a = true;
          break;
        }
        o += p, n = x.lastIndex;
        continue;
      }
    }
    const m = t.codePointAt(n);
    if (m === 8203 || m === 65279 || m >= 8288 && m <= 8292) {
      n += 1;
      continue;
    }
    if (m === 9) {
      if (o + r.width.tab > s && (l = Math.min(l, n), o + r.width.tab > r.truncation.limit)) {
        a = true;
        break;
      }
      o += r.width.tab, n += 1;
      continue;
    }
    if (E.lastIndex = n, E.test(t)) {
      const f = (E.lastIndex - n) * r.width.regular;
      if (o + f > s) {
        const p = r.width.regular > 0 ? Math.floor((s - o) / r.width.regular) : 0;
        if (l = Math.min(l, n + p), o + f > r.truncation.limit) {
          a = true;
          break;
        }
      }
      o += f, n = E.lastIndex;
      continue;
    }
    if ((m <= 31 || m >= 127 && m <= 159) && (i.lastIndex = n, i.test(t))) {
      const f = (i.lastIndex - n) * r.width.control;
      if (o + f > s) {
        const p = r.width.control > 0 ? Math.floor((s - o) / r.width.control) : 0;
        if (l = Math.min(l, n + p), o + f > r.truncation.limit) {
          a = true;
          break;
        }
      }
      o += f, n = i.lastIndex;
      continue;
    }
    if (_.lastIndex = n, _.test(t)) {
      if (o + r.width.emoji > s && (l = Math.min(l, n), o + r.width.emoji > r.truncation.limit)) {
        a = true;
        break;
      }
      o += r.width.emoji, n = _.lastIndex;
      continue;
    }
    const g = t.codePointAt(n) ?? 0;
    if (_t(g)) {
      n += g > 65535 ? 2 : 1;
      continue;
    }
    let d;
    if (c) d = Lt(g, r);
    else switch (Y(g)) {
      case "control": {
        d = r.width.control;
        break;
      }
      case "latin": {
        d = r.width.regular;
        break;
      }
      case "wide": {
        d = r.width.wide;
        break;
      }
      case "zero": {
        d = 0;
        break;
      }
      default:
        switch (V(g)) {
          case "ambiguous": {
            d = r.width.ambiguousIsNarrow ? r.width.regular : r.width.wide;
            break;
          }
          case "fullwidth": {
            d = r.width.fullWidth;
            break;
          }
          case "wide": {
            d = r.width.wide;
            break;
          }
          default:
            d = r.width.regular;
        }
    }
    if (o + d > s && (l = Math.min(l, n), o + d > r.truncation.limit)) {
      a = true;
      break;
    }
    o += d, n += g > 65535 ? 2 : 1;
  }
  let y = o, N = false;
  return a && r.truncation.limit >= r.truncation.ellipsisWidth && (y = r.truncation.limit, N = true), { ellipsed: N, index: a ? l : i$1, truncated: a, width: y };
};
const jt = (t, e = {}) => F(t, { ...e, ellipsis: "", ellipsisWidth: 0, limit: Number.POSITIVE_INFINITY }).width;
const K = 80;
const J = 24;
const P$1 = (t, e, { shell: r, env: s } = {}) => ot(t, e, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"], timeout: 500, shell: r, env: s }).trim();
const C$1 = (t, e) => ({ columns: Number.parseInt(t, 10), rows: Number.parseInt(e, 10) });
const X = (t, e) => {
  const { columns: r, rows: s } = C$1(t, e);
  if (!(Number.isNaN(r) || Number.isNaN(s)) && !(r === K && s === J)) return { columns: r, rows: s };
};
const Ft = () => {
  if (w$1.platform !== "linux") return true;
  try {
    const t = W.readFileSync("/proc/self/stat", "utf8"), e = t.lastIndexOf(") ");
    if (e === -1) return false;
    const r = t.slice(e + 2).trim().split(/\s+/), s = Number.parseInt(r[2], 10), i = Number.parseInt(r[5], 10);
    return Number.isNaN(s) || Number.isNaN(i) || i <= 0 ? false : s === i;
  } catch {
    return false;
  }
};
function Pt() {
  const { env: t, stdout: e, stderr: r } = w$1;
  if (e?.columns && e?.rows) return C$1(e.columns, e.rows);
  if (r?.columns && r?.rows) return C$1(r.columns, r.rows);
  if (t.COLUMNS && t.LINES) return C$1(t.COLUMNS, t.LINES);
  const s = { columns: K, rows: J };
  return w$1.platform === "win32" ? j() ?? s : w$1.platform === "darwin" ? q() ?? j() ?? s : q() ?? j() ?? Bt() ?? s;
}
const q = () => {
  try {
    const t = w$1.platform === "darwin" ? W.constants.O_EVTONLY | W.constants.O_NONBLOCK : W.constants.O_NONBLOCK, { columns: e, rows: r } = it.WriteStream(W.openSync("/dev/tty", t));
    return { columns: e, rows: r };
  } catch {
  }
};
const j = () => {
  try {
    const t = P$1("tput", ["cols"], { env: { TERM: "dumb", ...w$1.env } }), e = P$1("tput", ["lines"], { env: { TERM: "dumb", ...w$1.env } });
    if (t && e) return X(t, e);
  } catch {
  }
};
const Bt = () => {
  try {
    if (!Ft()) return;
    const t = P$1("resize", ["-u"]).match(/\d+/g);
    if (t.length === 2) return X(t[0], t[1]);
  } catch {
  }
};
const I = /* @__PURE__ */ new Map();
const zt = 500;
const h = (t) => {
  if (!t || t === "") return "";
  const e = I.get(t);
  if (e !== void 0) return e;
  let r;
  try {
    r = v(Object.assign([], { raw: [t] }));
  } catch {
    r = t;
  }
  if (I.size >= zt) {
    const s = I.keys().next().value;
    s !== void 0 && I.delete(s);
  }
  return I.set(t, r), r;
};
const R = () => {
  const e = a$1().CEREBRO_TERMINAL_WIDTH;
  if (e === void 0) return;
  const r = Number.parseInt(e, 10);
  if (!(Number.isNaN(r) || r <= 0)) return r;
};
class Z {
  lines;
  constructor() {
    this.lines = [];
  }
  add(e) {
    this.lines.push(e);
  }
  toString() {
    return this.lines.join(ct.EOL);
  }
  header(e) {
    this.add(j$2(e)), this.lines.push("");
  }
}
const Dt = (t) => t !== void 0 && t > 0 ? t : Pt().columns;
const qt = (t, e, r, s) => {
  if (t.length === 0 || t.some((u) => u.length !== 2)) return;
  let i = 0;
  for (const u of t) {
    const y = u[0];
    if (y === void 0) continue;
    const N = jt(y);
    N > i && (i = N);
  }
  if (i === 0) return;
  const c = r + s, n = i + c, l = 20 + c;
  if (n + l > e) return;
  const a = e - n;
  return [n, a];
};
class Ht extends Z {
  constructor(e) {
    if (super(), e.header && this.header(h(e.header)), e.content) {
      if (e.raw) if (Array.isArray(e.content) && e.content.every((r) => typeof r == "string")) e.content.forEach((r) => {
        Array.isArray(r) ? r.forEach((s) => {
          this.add(h(s));
        }) : this.add(h(r));
      });
      else if (typeof e.content == "string") this.add(h(e.content));
      else throw new TypeError("Invalid raw content, must be a string or array of strings.");
      else this.add(this.getContentLines(e.content));
      this.add("");
    }
  }
  getContentLines(e) {
    if (typeof e == "string") {
      const r = N$2({ showHeader: false, style: { border: a, paddingLeft: 4, paddingRight: 1 }, terminalWidth: R(), truncateOverflow: false, wordWrap: true });
      return r.addRow([h(e)]), r.toString();
    }
    if (Array.isArray(e) && e.every((r) => typeof r == "string" || Array.isArray(r) && r.every((s) => typeof s == "string"))) {
      const i = Dt(R()), c = (a) => Array.isArray(a) ? a.map((u) => h(u)) : [h(a)], n = e.map((a) => c(a)), o = qt(n, i, 4, 1), l = N$2({ columnWidths: o, showHeader: false, style: { border: a, paddingLeft: 4, paddingRight: 1 }, terminalWidth: i, truncateOverflow: false, wordWrap: true });
      return n.forEach((a) => {
        o !== void 0 && a.length === 2 ? l.addRow([{ content: a[0], wordWrap: false }, a[1]]) : l.addRow(a);
      }), l.toString();
    }
    if (typeof e == "object") {
      const r = e;
      if (!r.options || !r.data) throw new Error(`Must have an "options" or "data" property
${JSON.stringify(e)}`);
      const s = N$2({ showHeader: false, style: { border: a, paddingLeft: 4, paddingRight: 1 }, terminalWidth: R(), truncateOverflow: false, wordWrap: true });
      return r.data.forEach((i) => {
        Array.isArray(i) ? s.addRow(i.map((c) => h(c))) : s.addRow([h(i)]);
      }), s.toString();
    }
    throw new Error(`invalid input - 'content' must be a string, array of strings or a object:

${JSON.stringify(e)}`);
  }
}
class Ut extends Z {
  constructor(e) {
    super();
    let r = e.optionList ?? [];
    const s = Array.isArray(e.hide) ? e.hide : [e.hide].filter((n) => typeof n == "string"), i = Array.isArray(e.group) ? e.group : [e.group].filter((n) => typeof n == "string");
    s.length > 0 && (r = r.filter((n) => !s.includes(n.name))), e.header && this.header(h(e.header)), i.length > 0 && (r = r.filter((n) => {
      const o = n, l = i.includes("_none") && !o.group, a = o.group, u = this.intersect(Array.isArray(a) ? a : [a], i);
      return l || u ? n : void 0;
    }));
    const c = N$2({ showHeader: false, style: { border: a, paddingLeft: 2, paddingRight: 1, ...e.tableOptions?.style }, terminalWidth: R() ?? e.tableOptions?.terminalWidth, truncateOverflow: false, wordWrap: e.tableOptions?.wordWrap ?? true, ...e.tableOptions });
    r.forEach((n) => {
      const o = n;
      c.addRow([this.getOptionNames(o, e.reverseNameOrder ?? false, e.isArgument ?? false), h(o.description)]);
    }), this.add(c.toString()), this.lines.push("");
  }
  getOptionNames(e, r, s) {
    if (!e.name) throw new TypeError("Invalid option definition, name is required.");
    const i = e.type ? e.type.name.toLowerCase() : "string", { lazyMultiple: c } = e, n = e.multiple || c ? "[]" : "", o = e.typeLabel === void 0 ? et$1(`${i}${n}`) : h(e.typeLabel), l = s ? j$2(e.name) : j$2.yellow(`--${e.name}`), a = e.alias;
    if (a) {
      const u = j$2(`-${a}`);
      return r ? `${l}, ${u} ${o}` : `${u}, ${l} ${o}`;
    }
    return `${l} ${o}`;
  }
  intersect(e, r) {
    return e.some((s) => r.includes(s));
  }
}
const Qt = (t) => (Array.isArray(t) ? t : [t]).length === 0 ? "" : `
${t.map((r) => r.optionList ? new Ut(r).toString() : new Ht(r).toString()).join(`
`)}`;
const H = (t, e) => {
  const s = `${e === "readme" ? t.name.toUpperCase() : t.name}${t.multiple === true ? "..." : ""}`;
  return t.required === true ? e === "readme" ? s : `<${s}>` : `[${s}]`;
};
const te = (t, e = "help") => t.argument ? t.argument.hidden ? "" : e === "readme" ? ` ${H(t.argument, e)}` : " [positional arguments]" : !t.arguments || t.arguments.length === 0 ? "" : t.arguments.filter((r) => !r.hidden).map((r) => ` ${H(r, e)}`).join("");

const N = [{ defaultValue: "32", description: "Controls the verbosity level of output. Valid values: '16' (quiet), '32' (normal), '64' (verbose), '128' (debug)", name: "CEREBRO_OUTPUT_LEVEL", type: String }, { description: "Sets the minimum required Node.js version. Overrides the default minimum version check", name: "CEREBRO_MIN_NODE_VERSION", type: Number }, { defaultValue: false, description: "When set, disables the update notifier check", name: "NO_UPDATE_NOTIFIER", type: Boolean }, { description: "Standard Node.js environment variable. When set to 'test', disables update notifier", name: "NODE_ENV", type: String }, { defaultValue: false, description: "When set, enables debug output (same as --debug flag)", name: "DEBUG", type: Boolean }, { description: "Sets the terminal width for table rendering. Useful for testing and consistent output", name: "CEREBRO_TERMINAL_WIDTH", type: Number }];
const $ = "__Other";
const C = (r) => r.charAt(0).toUpperCase() + r.slice(1);
const w = (r, s, l, o) => {
  r.debug("no command given, printing general help...");
  let m = [...new Set(l.values())].filter((t) => !t.hidden);
  o && (m = m.filter((t) => t.group === o));
  const e = m.reduce((t, i) => {
    const p = i.group ?? $;
    return t[p] ??= [], t[p].push(i), t;
  }, {}), a = (t) => t.map((i) => {
    let p = "";
    typeof i.alias == "string" ? p = i.alias : Array.isArray(i.alias) && (p = i.alias.join(", ")), p !== "" && (p = ` [${p}]`);
    let u = i.name;
    return i.commandPath && i.commandPath.length > 0 && (u = `${i.commandPath.join(" ")} ${i.name}`), [`${J$2(u)}${p}`, i.description ?? ""];
  });
  (r.raw ?? r.log)(Qt([{ content: `${q$2(s.getCliName())} ${J$2("<command>")} [positional arguments] ${bt$2("[options]")}`, header: P$3.cyan(" Usage ") }, ...Object.keys(e).map((t) => {
    const i = o ? ` ${C(o)}` : "";
    return { content: a(e[t]), header: t === $ || o ? P$3.green(` Available${i} Commands `) : ` ${P$3.green(` ${C(t)} `)}` };
  }), l.has("help") ? { header: P$3.yellow(" Command Options "), optionList: l.get("help").options?.filter((t) => !t.hidden) } : void 0, { header: P$3.yellow(" Global Options "), optionList: s.getGlobalOptions() }, { content: N.filter((t) => !t.hidden).map((t) => [t.name, t.description ?? ""]), header: P$3.magenta(" Environment Variables ") }, { content: `Run "${q$2(s.getCliName())} ${J$2("help <command>")}" or "${q$2(s.getCliName())} ${J$2("<command>")} ${bt$2("--help")}" for help with a specific command.`, raw: true }].filter(Boolean)));
};
const P = (r, s) => {
  const l = [];
  for (const o of r.values()) {
    if (o.hidden) continue;
    const m = o.commandPath ?? [];
    if (m.length < s.length) continue;
    let e = true;
    for (const [a, t] of s.entries()) if (m[a] !== t) {
      e = false;
      break;
    }
    e && l.push(o);
  }
  return l;
};
const O = (r, s, l, o) => {
  const m = l.join(" "), e = [{ content: `${q$2(s.getCliName())} ${J$2(m)} ${J$2("<subcommand>")} [positional arguments] ${bt$2("[options]")}`, header: P$3.cyan(" Usage ") }, { content: o.map((a) => {
    const t = [...a.commandPath ?? [], a.name].join(" ");
    return [J$2(t), a.description ?? ""];
  }), header: P$3.green(" Subcommands ") }, { header: P$3.yellow(" Global Options "), optionList: s.getGlobalOptions() }, { content: `Run "${q$2(s.getCliName())} ${J$2(`${m} <subcommand>`)} ${bt$2("--help")}" for help with a specific subcommand.`, raw: true }];
  (r.raw ?? r.log)(Qt(e));
};
const A = (r, s, l, o, m) => {
  let e = m ?? l.get(o);
  if (!e) for (const n of l.values()) {
    const c = n.commandPath ? [...n.commandPath, n.name] : [n.name];
    if (c.at(-1) === o || c.join(" ") === o) {
      e = n;
      break;
    }
  }
  if (!e) {
    const n = o.split(" ").filter(Boolean), c = n.length > 0 ? P(l, n) : [];
    if (c.length > 0) {
      O(r, s, n, c);
      return;
    }
    r.error(`Command "${o}" not found`);
    return;
  }
  const a = [], i = (e.commandPath ? [...e.commandPath, e.name] : [e.name]).join(" ");
  a.push({ content: `${q$2(s.getCliName())} ${J$2(i)}${te(e)}${e.options ? " [options]" : ""}`, header: P$3.cyan(" Usage ") }), e.description && a.push({ content: e.description, header: P$3.green(" Description ") });
  const p = (e.argument ? [e.argument] : e.arguments ?? []).filter((n) => !n.hidden);
  if (p.length > 0 && a.push({ header: "Command Positional Arguments", isArgument: true, optionList: p }), Array.isArray(e.options) && e.options.length > 0 && a.push({ header: P$3.yellow(" Command Options "), optionList: e.options.filter((n) => !n.hidden) }), a.push({ header: P$3.yellow(" Global Options "), optionList: s.getGlobalOptions() }), Array.isArray(e.env) && e.env.length > 0) {
    const n = e.env.filter((c) => !c.hidden);
    n.length > 0 && a.push({ content: n.map((c) => [c.name, c.description ?? ""]), header: P$3.magenta(" Environment Variables ") });
  }
  if (e.alias !== void 0 && e.alias.length > 0) {
    let n = e.alias;
    typeof e.alias == "string" && (n = [e.alias]), a.splice(1, 0, { content: n, header: "Alias(es)" });
  }
  Array.isArray(e.examples) && e.examples.length > 0 && a.push({ content: e.examples, header: "Examples" });
  const u = [...e.commandPath ?? [], e.name], g = P(l, u);
  g.length > 0 && a.push({ content: g.map((n) => {
    const c = [...n.commandPath ?? [], n.name].join(" ");
    return [J$2(c), n.description ?? ""];
  }), header: P$3.green(" Subcommands ") }), (r.raw ?? r.log)(Qt(a));
};
class S {
  argument = { description: "Command to show help for (subcommand path supported, e.g. `cli help docker build`)", name: "command", type: String };
  name = "help";
  options = [{ description: "Display only the specified group", name: "group", type: String }];
  commands;
  constructor(s) {
    this.commands = s;
  }
  execute(s) {
    const { argument: l, command: o, commandName: m, logger: e, options: a, runtime: t } = s, { footer: i, header: p } = t.getCommandSection();
    p && (e.raw ?? e.log)(h(p));
    const u = m === "help" && Array.isArray(l) && l.length > 0 ? l.join(" ") : void 0;
    if (m === "help" && u === void 0) w(e, t, this.commands, typeof a?.group == "string" ? a.group : void 0);
    else {
      const g = u !== void 0 || o === void 0 || o.name === "help" ? void 0 : o;
      A(e, t, this.commands, u ?? m, g);
    }
    i && (e.raw ?? e.log)(h(i));
  }
}

export { S as default };
