import { c as Wr } from "./chunk-6GCQ5O75.js";
import {
  $ as C,
  A as D,
  Ac as Vr,
  B as ft,
  Bc as Se,
  C as fr,
  D as pt,
  Fb as kr,
  I as Z,
  K as ee,
  L as te,
  La as Dr,
  Lb as _r,
  N as gt,
  Nc as Hr,
  O as re,
  Q as Be,
  R as V,
  S as vt,
  T as pr,
  V as gr,
  Y as vr,
  Z as P,
  Za as Mr,
  _ as mr,
  a as l,
  aa as b,
  b as I,
  ca as S,
  da as yr,
  ea as Rr,
  eb as Or,
  fa as M,
  fb as ne,
  ga as mt,
  gb as Tr,
  ha as H,
  hb as Ur,
  ia as f,
  j as cr,
  ja as Sr,
  jc as Ve,
  k as lr,
  kb as Er,
  la as me,
  lb as wt,
  lc as Dt,
  m as ht,
  ma as $,
  mb as xr,
  n as dt,
  na as yt,
  nb as Pr,
  nc as He,
  o as B,
  ob as bt,
  p as U,
  q as _,
  qa as Rt,
  r as A,
  ra as Cr,
  s as d,
  sa as St,
  sb as jr,
  sc as zr,
  t as ve,
  ta as wr,
  tb as Nr,
  u as hr,
  ua as br,
  ub as It,
  v as dr,
  va as ye,
  vb as At,
  wa as Ct,
  wb as $r,
  wc as Fr,
  xb as Lr,
  xc as qr,
  y as m,
  ya as Ir,
  yc as Re,
  z as qe,
  za as Ar,
  zc as Br,
} from "./chunk-4KGF3EVT.js";
var g = "primary",
  je = Symbol("RouteTitle"),
  Et = class {
    params;
    constructor(r) {
      this.params = r || {};
    }
    has(r) {
      return Object.prototype.hasOwnProperty.call(this.params, r);
    }
    get(r) {
      if (this.has(r)) {
        let e = this.params[r];
        return Array.isArray(e) ? e[0] : e;
      }
      return null;
    }
    getAll(r) {
      if (this.has(r)) {
        let e = this.params[r];
        return Array.isArray(e) ? e : [e];
      }
      return [];
    }
    get keys() {
      return Object.keys(this.params);
    }
  };
function ce(t) {
  return new Et(t);
}
function Fn(t, r, e) {
  let n = e.path.split("/");
  if (
    n.length > t.length ||
    (e.pathMatch === "full" && (r.hasChildren() || n.length < t.length))
  )
    return null;
  let i = {};
  for (let o = 0; o < n.length; o++) {
    let s = n[o],
      u = t[o];
    if (s[0] === ":") i[s.substring(1)] = u;
    else if (s !== u.path) return null;
  }
  return { consumed: t.slice(0, n.length), posParams: i };
}
function qn(t, r) {
  if (t.length !== r.length) return !1;
  for (let e = 0; e < t.length; ++e) if (!L(t[e], r[e])) return !1;
  return !0;
}
function L(t, r) {
  let e = t ? xt(t) : void 0,
    n = r ? xt(r) : void 0;
  if (!e || !n || e.length != n.length) return !1;
  let i;
  for (let o = 0; o < e.length; o++)
    if (((i = e[o]), !rn(t[i], r[i]))) return !1;
  return !0;
}
function xt(t) {
  return [...Object.keys(t), ...Object.getOwnPropertySymbols(t)];
}
function rn(t, r) {
  if (Array.isArray(t) && Array.isArray(r)) {
    if (t.length !== r.length) return !1;
    let e = [...t].sort(),
      n = [...r].sort();
    return e.every((i, o) => n[o] === i);
  } else return t === r;
}
function nn(t) {
  return t.length > 0 ? t[t.length - 1] : null;
}
function K(t) {
  return hr(t) ? t : Nr(t) ? A(Promise.resolve(t)) : d(t);
}
var Bn = { exact: sn, subset: an },
  on = { exact: Vn, subset: Hn, ignored: () => !0 };
function Gr(t, r, e) {
  return (
    Bn[e.paths](t.root, r.root, e.matrixParams) &&
    on[e.queryParams](t.queryParams, r.queryParams) &&
    !(e.fragment === "exact" && t.fragment !== r.fragment)
  );
}
function Vn(t, r) {
  return L(t, r);
}
function sn(t, r, e) {
  if (
    !X(t.segments, r.segments) ||
    !Qe(t.segments, r.segments, e) ||
    t.numberOfChildren !== r.numberOfChildren
  )
    return !1;
  for (let n in r.children)
    if (!t.children[n] || !sn(t.children[n], r.children[n], e)) return !1;
  return !0;
}
function Hn(t, r) {
  return (
    Object.keys(r).length <= Object.keys(t).length &&
    Object.keys(r).every((e) => rn(t[e], r[e]))
  );
}
function an(t, r, e) {
  return un(t, r, r.segments, e);
}
function un(t, r, e, n) {
  if (t.segments.length > e.length) {
    let i = t.segments.slice(0, e.length);
    return !(!X(i, e) || r.hasChildren() || !Qe(i, e, n));
  } else if (t.segments.length === e.length) {
    if (!X(t.segments, e) || !Qe(t.segments, e, n)) return !1;
    for (let i in r.children)
      if (!t.children[i] || !an(t.children[i], r.children[i], n)) return !1;
    return !0;
  } else {
    let i = e.slice(0, t.segments.length),
      o = e.slice(t.segments.length);
    return !X(t.segments, i) || !Qe(t.segments, i, n) || !t.children[g]
      ? !1
      : un(t.children[g], r, o, n);
  }
}
function Qe(t, r, e) {
  return r.every((n, i) => on[e](t[i].parameters, n.parameters));
}
var F = class {
    root;
    queryParams;
    fragment;
    _queryParamMap;
    constructor(r = new v([], {}), e = {}, n = null) {
      (this.root = r), (this.queryParams = e), (this.fragment = n);
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= ce(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      return Qn.serialize(this);
    }
  },
  v = class {
    segments;
    children;
    parent = null;
    constructor(r, e) {
      (this.segments = r),
        (this.children = e),
        Object.values(e).forEach((n) => (n.parent = this));
    }
    hasChildren() {
      return this.numberOfChildren > 0;
    }
    get numberOfChildren() {
      return Object.keys(this.children).length;
    }
    toString() {
      return Ke(this);
    }
  },
  Y = class {
    path;
    parameters;
    _parameterMap;
    constructor(r, e) {
      (this.path = r), (this.parameters = e);
    }
    get parameterMap() {
      return (this._parameterMap ??= ce(this.parameters)), this._parameterMap;
    }
    toString() {
      return ln(this);
    }
  };
function Wn(t, r) {
  return X(t, r) && t.every((e, n) => L(e.parameters, r[n].parameters));
}
function X(t, r) {
  return t.length !== r.length ? !1 : t.every((e, n) => e.path === r[n].path);
}
function Gn(t, r) {
  let e = [];
  return (
    Object.entries(t.children).forEach(([n, i]) => {
      n === g && (e = e.concat(r(i, n)));
    }),
    Object.entries(t.children).forEach(([n, i]) => {
      n !== g && (e = e.concat(r(i, n)));
    }),
    e
  );
}
var Ne = (() => {
    class t {
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = S({
        token: t,
        factory: () => new le(),
        providedIn: "root",
      });
    }
    return t;
  })(),
  le = class {
    parse(r) {
      let e = new jt(r);
      return new F(
        e.parseRootSegment(),
        e.parseQueryParams(),
        e.parseFragment(),
      );
    }
    serialize(r) {
      let e = `/${Ce(r.root, !0)}`,
        n = Yn(r.queryParams),
        i = typeof r.fragment == "string" ? `#${Kn(r.fragment)}` : "";
      return `${e}${n}${i}`;
    }
  },
  Qn = new le();
function Ke(t) {
  return t.segments.map((r) => ln(r)).join("/");
}
function Ce(t, r) {
  if (!t.hasChildren()) return Ke(t);
  if (r) {
    let e = t.children[g] ? Ce(t.children[g], !1) : "",
      n = [];
    return (
      Object.entries(t.children).forEach(([i, o]) => {
        i !== g && n.push(`${i}:${Ce(o, !1)}`);
      }),
      n.length > 0 ? `${e}(${n.join("//")})` : e
    );
  } else {
    let e = Gn(t, (n, i) =>
      i === g ? [Ce(t.children[g], !1)] : [`${i}:${Ce(n, !1)}`],
    );
    return Object.keys(t.children).length === 1 && t.children[g] != null
      ? `${Ke(t)}/${e[0]}`
      : `${Ke(t)}/(${e.join("//")})`;
  }
}
function cn(t) {
  return encodeURIComponent(t)
    .replace(/%40/g, "@")
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",");
}
function We(t) {
  return cn(t).replace(/%3B/gi, ";");
}
function Kn(t) {
  return encodeURI(t);
}
function Pt(t) {
  return cn(t)
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/%26/gi, "&");
}
function Ze(t) {
  return decodeURIComponent(t);
}
function Qr(t) {
  return Ze(t.replace(/\+/g, "%20"));
}
function ln(t) {
  return `${Pt(t.path)}${Zn(t.parameters)}`;
}
function Zn(t) {
  return Object.entries(t)
    .map(([r, e]) => `;${Pt(r)}=${Pt(e)}`)
    .join("");
}
function Yn(t) {
  let r = Object.entries(t)
    .map(([e, n]) =>
      Array.isArray(n)
        ? n.map((i) => `${We(e)}=${We(i)}`).join("&")
        : `${We(e)}=${We(n)}`,
    )
    .filter((e) => e);
  return r.length ? `?${r.join("&")}` : "";
}
var Xn = /^[^\/()?;#]+/;
function Mt(t) {
  let r = t.match(Xn);
  return r ? r[0] : "";
}
var Jn = /^[^\/()?;=#]+/;
function ei(t) {
  let r = t.match(Jn);
  return r ? r[0] : "";
}
var ti = /^[^=?&#]+/;
function ri(t) {
  let r = t.match(ti);
  return r ? r[0] : "";
}
var ni = /^[^&#]+/;
function ii(t) {
  let r = t.match(ni);
  return r ? r[0] : "";
}
var jt = class {
  url;
  remaining;
  constructor(r) {
    (this.url = r), (this.remaining = r);
  }
  parseRootSegment() {
    return (
      this.consumeOptional("/"),
      this.remaining === "" ||
      this.peekStartsWith("?") ||
      this.peekStartsWith("#")
        ? new v([], {})
        : new v([], this.parseChildren())
    );
  }
  parseQueryParams() {
    let r = {};
    if (this.consumeOptional("?"))
      do this.parseQueryParam(r);
      while (this.consumeOptional("&"));
    return r;
  }
  parseFragment() {
    return this.consumeOptional("#")
      ? decodeURIComponent(this.remaining)
      : null;
  }
  parseChildren() {
    if (this.remaining === "") return {};
    this.consumeOptional("/");
    let r = [];
    for (
      this.peekStartsWith("(") || r.push(this.parseSegment());
      this.peekStartsWith("/") &&
      !this.peekStartsWith("//") &&
      !this.peekStartsWith("/(");

    )
      this.capture("/"), r.push(this.parseSegment());
    let e = {};
    this.peekStartsWith("/(") &&
      (this.capture("/"), (e = this.parseParens(!0)));
    let n = {};
    return (
      this.peekStartsWith("(") && (n = this.parseParens(!1)),
      (r.length > 0 || Object.keys(e).length > 0) && (n[g] = new v(r, e)),
      n
    );
  }
  parseSegment() {
    let r = Mt(this.remaining);
    if (r === "" && this.peekStartsWith(";")) throw new b(4009, !1);
    return this.capture(r), new Y(Ze(r), this.parseMatrixParams());
  }
  parseMatrixParams() {
    let r = {};
    for (; this.consumeOptional(";"); ) this.parseParam(r);
    return r;
  }
  parseParam(r) {
    let e = ei(this.remaining);
    if (!e) return;
    this.capture(e);
    let n = "";
    if (this.consumeOptional("=")) {
      let i = Mt(this.remaining);
      i && ((n = i), this.capture(n));
    }
    r[Ze(e)] = Ze(n);
  }
  parseQueryParam(r) {
    let e = ri(this.remaining);
    if (!e) return;
    this.capture(e);
    let n = "";
    if (this.consumeOptional("=")) {
      let s = ii(this.remaining);
      s && ((n = s), this.capture(n));
    }
    let i = Qr(e),
      o = Qr(n);
    if (r.hasOwnProperty(i)) {
      let s = r[i];
      Array.isArray(s) || ((s = [s]), (r[i] = s)), s.push(o);
    } else r[i] = o;
  }
  parseParens(r) {
    let e = {};
    for (
      this.capture("(");
      !this.consumeOptional(")") && this.remaining.length > 0;

    ) {
      let n = Mt(this.remaining),
        i = this.remaining[n.length];
      if (i !== "/" && i !== ")" && i !== ";") throw new b(4010, !1);
      let o;
      n.indexOf(":") > -1
        ? ((o = n.slice(0, n.indexOf(":"))), this.capture(o), this.capture(":"))
        : r && (o = g);
      let s = this.parseChildren();
      (e[o] = Object.keys(s).length === 1 ? s[g] : new v([], s)),
        this.consumeOptional("//");
    }
    return e;
  }
  peekStartsWith(r) {
    return this.remaining.startsWith(r);
  }
  consumeOptional(r) {
    return this.peekStartsWith(r)
      ? ((this.remaining = this.remaining.substring(r.length)), !0)
      : !1;
  }
  capture(r) {
    if (!this.consumeOptional(r)) throw new b(4011, !1);
  }
};
function hn(t) {
  return t.segments.length > 0 ? new v([], { [g]: t }) : t;
}
function dn(t) {
  let r = {};
  for (let [n, i] of Object.entries(t.children)) {
    let o = dn(i);
    if (n === g && o.segments.length === 0 && o.hasChildren())
      for (let [s, u] of Object.entries(o.children)) r[s] = u;
    else (o.segments.length > 0 || o.hasChildren()) && (r[n] = o);
  }
  let e = new v(t.segments, r);
  return oi(e);
}
function oi(t) {
  if (t.numberOfChildren === 1 && t.children[g]) {
    let r = t.children[g];
    return new v(t.segments.concat(r.segments), r.children);
  }
  return t;
}
function J(t) {
  return t instanceof F;
}
function si(t, r, e = null, n = null) {
  let i = fn(t);
  return pn(i, r, e, n);
}
function fn(t) {
  let r;
  function e(o) {
    let s = {};
    for (let a of o.children) {
      let c = e(a);
      s[a.outlet] = c;
    }
    let u = new v(o.url, s);
    return o === t && (r = u), u;
  }
  let n = e(t.root),
    i = hn(n);
  return r ?? i;
}
function pn(t, r, e, n) {
  let i = t;
  for (; i.parent; ) i = i.parent;
  if (r.length === 0) return Ot(i, i, i, e, n);
  let o = ai(r);
  if (o.toRoot()) return Ot(i, i, new v([], {}), e, n);
  let s = ui(o, i, t),
    u = s.processChildren
      ? be(s.segmentGroup, s.index, o.commands)
      : vn(s.segmentGroup, s.index, o.commands);
  return Ot(i, s.segmentGroup, u, e, n);
}
function Ye(t) {
  return typeof t == "object" && t != null && !t.outlets && !t.segmentPath;
}
function De(t) {
  return typeof t == "object" && t != null && t.outlets;
}
function Ot(t, r, e, n, i) {
  let o = {};
  n &&
    Object.entries(n).forEach(([a, c]) => {
      o[a] = Array.isArray(c) ? c.map((h) => `${h}`) : `${c}`;
    });
  let s;
  t === r ? (s = e) : (s = gn(t, r, e));
  let u = hn(dn(s));
  return new F(u, o, i);
}
function gn(t, r, e) {
  let n = {};
  return (
    Object.entries(t.children).forEach(([i, o]) => {
      o === r ? (n[i] = e) : (n[i] = gn(o, r, e));
    }),
    new v(t.segments, n)
  );
}
var Xe = class {
  isAbsolute;
  numberOfDoubleDots;
  commands;
  constructor(r, e, n) {
    if (
      ((this.isAbsolute = r),
      (this.numberOfDoubleDots = e),
      (this.commands = n),
      r && n.length > 0 && Ye(n[0]))
    )
      throw new b(4003, !1);
    let i = n.find(De);
    if (i && i !== nn(n)) throw new b(4004, !1);
  }
  toRoot() {
    return (
      this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    );
  }
};
function ai(t) {
  if (typeof t[0] == "string" && t.length === 1 && t[0] === "/")
    return new Xe(!0, 0, t);
  let r = 0,
    e = !1,
    n = t.reduce((i, o, s) => {
      if (typeof o == "object" && o != null) {
        if (o.outlets) {
          let u = {};
          return (
            Object.entries(o.outlets).forEach(([a, c]) => {
              u[a] = typeof c == "string" ? c.split("/") : c;
            }),
            [...i, { outlets: u }]
          );
        }
        if (o.segmentPath) return [...i, o.segmentPath];
      }
      return typeof o != "string"
        ? [...i, o]
        : s === 0
          ? (o.split("/").forEach((u, a) => {
              (a == 0 && u === ".") ||
                (a == 0 && u === ""
                  ? (e = !0)
                  : u === ".."
                    ? r++
                    : u != "" && i.push(u));
            }),
            i)
          : [...i, o];
    }, []);
  return new Xe(e, r, n);
}
var se = class {
  segmentGroup;
  processChildren;
  index;
  constructor(r, e, n) {
    (this.segmentGroup = r), (this.processChildren = e), (this.index = n);
  }
};
function ui(t, r, e) {
  if (t.isAbsolute) return new se(r, !0, 0);
  if (!e) return new se(r, !1, NaN);
  if (e.parent === null) return new se(e, !0, 0);
  let n = Ye(t.commands[0]) ? 0 : 1,
    i = e.segments.length - 1 + n;
  return ci(e, i, t.numberOfDoubleDots);
}
function ci(t, r, e) {
  let n = t,
    i = r,
    o = e;
  for (; o > i; ) {
    if (((o -= i), (n = n.parent), !n)) throw new b(4005, !1);
    i = n.segments.length;
  }
  return new se(n, !1, i - o);
}
function li(t) {
  return De(t[0]) ? t[0].outlets : { [g]: t };
}
function vn(t, r, e) {
  if (((t ??= new v([], {})), t.segments.length === 0 && t.hasChildren()))
    return be(t, r, e);
  let n = hi(t, r, e),
    i = e.slice(n.commandIndex);
  if (n.match && n.pathIndex < t.segments.length) {
    let o = new v(t.segments.slice(0, n.pathIndex), {});
    return (
      (o.children[g] = new v(t.segments.slice(n.pathIndex), t.children)),
      be(o, 0, i)
    );
  } else
    return n.match && i.length === 0
      ? new v(t.segments, {})
      : n.match && !t.hasChildren()
        ? Nt(t, r, e)
        : n.match
          ? be(t, 0, i)
          : Nt(t, r, e);
}
function be(t, r, e) {
  if (e.length === 0) return new v(t.segments, {});
  {
    let n = li(e),
      i = {};
    if (
      Object.keys(n).some((o) => o !== g) &&
      t.children[g] &&
      t.numberOfChildren === 1 &&
      t.children[g].segments.length === 0
    ) {
      let o = be(t.children[g], r, e);
      return new v(t.segments, o.children);
    }
    return (
      Object.entries(n).forEach(([o, s]) => {
        typeof s == "string" && (s = [s]),
          s !== null && (i[o] = vn(t.children[o], r, s));
      }),
      Object.entries(t.children).forEach(([o, s]) => {
        n[o] === void 0 && (i[o] = s);
      }),
      new v(t.segments, i)
    );
  }
}
function hi(t, r, e) {
  let n = 0,
    i = r,
    o = { match: !1, pathIndex: 0, commandIndex: 0 };
  for (; i < t.segments.length; ) {
    if (n >= e.length) return o;
    let s = t.segments[i],
      u = e[n];
    if (De(u)) break;
    let a = `${u}`,
      c = n < e.length - 1 ? e[n + 1] : null;
    if (i > 0 && a === void 0) break;
    if (a && c && typeof c == "object" && c.outlets === void 0) {
      if (!Zr(a, c, s)) return o;
      n += 2;
    } else {
      if (!Zr(a, {}, s)) return o;
      n++;
    }
    i++;
  }
  return { match: !0, pathIndex: i, commandIndex: n };
}
function Nt(t, r, e) {
  let n = t.segments.slice(0, r),
    i = 0;
  for (; i < e.length; ) {
    let o = e[i];
    if (De(o)) {
      let a = di(o.outlets);
      return new v(n, a);
    }
    if (i === 0 && Ye(e[0])) {
      let a = t.segments[r];
      n.push(new Y(a.path, Kr(e[0]))), i++;
      continue;
    }
    let s = De(o) ? o.outlets[g] : `${o}`,
      u = i < e.length - 1 ? e[i + 1] : null;
    s && u && Ye(u)
      ? (n.push(new Y(s, Kr(u))), (i += 2))
      : (n.push(new Y(s, {})), i++);
  }
  return new v(n, {});
}
function di(t) {
  let r = {};
  return (
    Object.entries(t).forEach(([e, n]) => {
      typeof n == "string" && (n = [n]),
        n !== null && (r[e] = Nt(new v([], {}), 0, n));
    }),
    r
  );
}
function Kr(t) {
  let r = {};
  return Object.entries(t).forEach(([e, n]) => (r[e] = `${n}`)), r;
}
function Zr(t, r, e) {
  return t == e.path && L(r, e.parameters);
}
var Ie = "imperative",
  R = (function (t) {
    return (
      (t[(t.NavigationStart = 0)] = "NavigationStart"),
      (t[(t.NavigationEnd = 1)] = "NavigationEnd"),
      (t[(t.NavigationCancel = 2)] = "NavigationCancel"),
      (t[(t.NavigationError = 3)] = "NavigationError"),
      (t[(t.RoutesRecognized = 4)] = "RoutesRecognized"),
      (t[(t.ResolveStart = 5)] = "ResolveStart"),
      (t[(t.ResolveEnd = 6)] = "ResolveEnd"),
      (t[(t.GuardsCheckStart = 7)] = "GuardsCheckStart"),
      (t[(t.GuardsCheckEnd = 8)] = "GuardsCheckEnd"),
      (t[(t.RouteConfigLoadStart = 9)] = "RouteConfigLoadStart"),
      (t[(t.RouteConfigLoadEnd = 10)] = "RouteConfigLoadEnd"),
      (t[(t.ChildActivationStart = 11)] = "ChildActivationStart"),
      (t[(t.ChildActivationEnd = 12)] = "ChildActivationEnd"),
      (t[(t.ActivationStart = 13)] = "ActivationStart"),
      (t[(t.ActivationEnd = 14)] = "ActivationEnd"),
      (t[(t.Scroll = 15)] = "Scroll"),
      (t[(t.NavigationSkipped = 16)] = "NavigationSkipped"),
      t
    );
  })(R || {}),
  E = class {
    id;
    url;
    constructor(r, e) {
      (this.id = r), (this.url = e);
    }
  },
  he = class extends E {
    type = R.NavigationStart;
    navigationTrigger;
    restoredState;
    constructor(r, e, n = "imperative", i = null) {
      super(r, e), (this.navigationTrigger = n), (this.restoredState = i);
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  k = class extends E {
    urlAfterRedirects;
    type = R.NavigationEnd;
    constructor(r, e, n) {
      super(r, e), (this.urlAfterRedirects = n);
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  T = (function (t) {
    return (
      (t[(t.Redirect = 0)] = "Redirect"),
      (t[(t.SupersededByNewNavigation = 1)] = "SupersededByNewNavigation"),
      (t[(t.NoDataFromResolver = 2)] = "NoDataFromResolver"),
      (t[(t.GuardRejected = 3)] = "GuardRejected"),
      t
    );
  })(T || {}),
  Je = (function (t) {
    return (
      (t[(t.IgnoredSameUrlNavigation = 0)] = "IgnoredSameUrlNavigation"),
      (t[(t.IgnoredByUrlHandlingStrategy = 1)] =
        "IgnoredByUrlHandlingStrategy"),
      t
    );
  })(Je || {}),
  z = class extends E {
    reason;
    code;
    type = R.NavigationCancel;
    constructor(r, e, n, i) {
      super(r, e), (this.reason = n), (this.code = i);
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  W = class extends E {
    reason;
    code;
    type = R.NavigationSkipped;
    constructor(r, e, n, i) {
      super(r, e), (this.reason = n), (this.code = i);
    }
  },
  Me = class extends E {
    error;
    target;
    type = R.NavigationError;
    constructor(r, e, n, i) {
      super(r, e), (this.error = n), (this.target = i);
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  et = class extends E {
    urlAfterRedirects;
    state;
    type = R.RoutesRecognized;
    constructor(r, e, n, i) {
      super(r, e), (this.urlAfterRedirects = n), (this.state = i);
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  $t = class extends E {
    urlAfterRedirects;
    state;
    type = R.GuardsCheckStart;
    constructor(r, e, n, i) {
      super(r, e), (this.urlAfterRedirects = n), (this.state = i);
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Lt = class extends E {
    urlAfterRedirects;
    state;
    shouldActivate;
    type = R.GuardsCheckEnd;
    constructor(r, e, n, i, o) {
      super(r, e),
        (this.urlAfterRedirects = n),
        (this.state = i),
        (this.shouldActivate = o);
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  kt = class extends E {
    urlAfterRedirects;
    state;
    type = R.ResolveStart;
    constructor(r, e, n, i) {
      super(r, e), (this.urlAfterRedirects = n), (this.state = i);
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  _t = class extends E {
    urlAfterRedirects;
    state;
    type = R.ResolveEnd;
    constructor(r, e, n, i) {
      super(r, e), (this.urlAfterRedirects = n), (this.state = i);
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  zt = class {
    route;
    type = R.RouteConfigLoadStart;
    constructor(r) {
      this.route = r;
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  Ft = class {
    route;
    type = R.RouteConfigLoadEnd;
    constructor(r) {
      this.route = r;
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  qt = class {
    snapshot;
    type = R.ChildActivationStart;
    constructor(r) {
      this.snapshot = r;
    }
    toString() {
      return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  Bt = class {
    snapshot;
    type = R.ChildActivationEnd;
    constructor(r) {
      this.snapshot = r;
    }
    toString() {
      return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  Vt = class {
    snapshot;
    type = R.ActivationStart;
    constructor(r) {
      this.snapshot = r;
    }
    toString() {
      return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  Ht = class {
    snapshot;
    type = R.ActivationEnd;
    constructor(r) {
      this.snapshot = r;
    }
    toString() {
      return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  tt = class {
    routerEvent;
    position;
    anchor;
    type = R.Scroll;
    constructor(r, e, n) {
      (this.routerEvent = r), (this.position = e), (this.anchor = n);
    }
    toString() {
      let r = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
      return `Scroll(anchor: '${this.anchor}', position: '${r}')`;
    }
  },
  Oe = class {},
  de = class {
    url;
    navigationBehaviorOptions;
    constructor(r, e) {
      (this.url = r), (this.navigationBehaviorOptions = e);
    }
  };
function fi(t, r) {
  return (
    t.providers &&
      !t._injector &&
      (t._injector = wt(t.providers, r, `Route: ${t.path}`)),
    t._injector ?? r
  );
}
function j(t) {
  return t.outlet || g;
}
function pi(t, r) {
  let e = t.filter((n) => j(n) === r);
  return e.push(...t.filter((n) => j(n) !== r)), e;
}
function $e(t) {
  if (!t) return null;
  if (t.routeConfig?._injector) return t.routeConfig._injector;
  for (let r = t.parent; r; r = r.parent) {
    let e = r.routeConfig;
    if (e?._loadedInjector) return e._loadedInjector;
    if (e?._injector) return e._injector;
  }
  return null;
}
var Wt = class {
    rootInjector;
    outlet = null;
    route = null;
    children;
    attachRef = null;
    get injector() {
      return $e(this.route?.snapshot) ?? this.rootInjector;
    }
    constructor(r) {
      (this.rootInjector = r), (this.children = new Le(this.rootInjector));
    }
  },
  Le = (() => {
    class t {
      rootInjector;
      contexts = new Map();
      constructor(e) {
        this.rootInjector = e;
      }
      onChildOutletCreated(e, n) {
        let i = this.getOrCreateContext(e);
        (i.outlet = n), this.contexts.set(e, i);
      }
      onChildOutletDestroyed(e) {
        let n = this.getContext(e);
        n && ((n.outlet = null), (n.attachRef = null));
      }
      onOutletDeactivated() {
        let e = this.contexts;
        return (this.contexts = new Map()), e;
      }
      onOutletReAttached(e) {
        this.contexts = e;
      }
      getOrCreateContext(e) {
        let n = this.getContext(e);
        return (
          n || ((n = new Wt(this.rootInjector)), this.contexts.set(e, n)), n
        );
      }
      getContext(e) {
        return this.contexts.get(e) || null;
      }
      static ɵfac = function (n) {
        return new (n || t)(H(me));
      };
      static ɵprov = S({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })(),
  rt = class {
    _root;
    constructor(r) {
      this._root = r;
    }
    get root() {
      return this._root.value;
    }
    parent(r) {
      let e = this.pathFromRoot(r);
      return e.length > 1 ? e[e.length - 2] : null;
    }
    children(r) {
      let e = Gt(r, this._root);
      return e ? e.children.map((n) => n.value) : [];
    }
    firstChild(r) {
      let e = Gt(r, this._root);
      return e && e.children.length > 0 ? e.children[0].value : null;
    }
    siblings(r) {
      let e = Qt(r, this._root);
      return e.length < 2
        ? []
        : e[e.length - 2].children.map((i) => i.value).filter((i) => i !== r);
    }
    pathFromRoot(r) {
      return Qt(r, this._root).map((e) => e.value);
    }
  };
function Gt(t, r) {
  if (t === r.value) return r;
  for (let e of r.children) {
    let n = Gt(t, e);
    if (n) return n;
  }
  return null;
}
function Qt(t, r) {
  if (t === r.value) return [r];
  for (let e of r.children) {
    let n = Qt(t, e);
    if (n.length) return n.unshift(r), n;
  }
  return [];
}
var O = class {
  value;
  children;
  constructor(r, e) {
    (this.value = r), (this.children = e);
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function oe(t) {
  let r = {};
  return t && t.children.forEach((e) => (r[e.value.outlet] = e)), r;
}
var nt = class extends rt {
  snapshot;
  constructor(r, e) {
    super(r), (this.snapshot = e), nr(this, r);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function mn(t) {
  let r = gi(t),
    e = new U([new Y("", {})]),
    n = new U({}),
    i = new U({}),
    o = new U({}),
    s = new U(""),
    u = new G(e, n, o, s, i, g, t, r.root);
  return (u.snapshot = r.root), new nt(new O(u, []), r);
}
function gi(t) {
  let r = {},
    e = {},
    n = {},
    i = "",
    o = new ae([], r, n, i, e, g, t, null, {});
  return new ot("", new O(o, []));
}
var G = class {
  urlSubject;
  paramsSubject;
  queryParamsSubject;
  fragmentSubject;
  dataSubject;
  outlet;
  component;
  snapshot;
  _futureSnapshot;
  _routerState;
  _paramMap;
  _queryParamMap;
  title;
  url;
  params;
  queryParams;
  fragment;
  data;
  constructor(r, e, n, i, o, s, u, a) {
    (this.urlSubject = r),
      (this.paramsSubject = e),
      (this.queryParamsSubject = n),
      (this.fragmentSubject = i),
      (this.dataSubject = o),
      (this.outlet = s),
      (this.component = u),
      (this._futureSnapshot = a),
      (this.title = this.dataSubject?.pipe(m((c) => c[je])) ?? d(void 0)),
      (this.url = r),
      (this.params = e),
      (this.queryParams = n),
      (this.fragment = i),
      (this.data = o);
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    return (
      (this._paramMap ??= this.params.pipe(m((r) => ce(r)))), this._paramMap
    );
  }
  get queryParamMap() {
    return (
      (this._queryParamMap ??= this.queryParams.pipe(m((r) => ce(r)))),
      this._queryParamMap
    );
  }
  toString() {
    return this.snapshot
      ? this.snapshot.toString()
      : `Future(${this._futureSnapshot})`;
  }
};
function it(t, r, e = "emptyOnly") {
  let n,
    { routeConfig: i } = t;
  return (
    r !== null &&
    (e === "always" ||
      i?.path === "" ||
      (!r.component && !r.routeConfig?.loadComponent))
      ? (n = {
          params: l(l({}, r.params), t.params),
          data: l(l({}, r.data), t.data),
          resolve: l(l(l(l({}, t.data), r.data), i?.data), t._resolvedData),
        })
      : (n = {
          params: l({}, t.params),
          data: l({}, t.data),
          resolve: l(l({}, t.data), t._resolvedData ?? {}),
        }),
    i && Rn(i) && (n.resolve[je] = i.title),
    n
  );
}
var ae = class {
    url;
    params;
    queryParams;
    fragment;
    data;
    outlet;
    component;
    routeConfig;
    _resolve;
    _resolvedData;
    _routerState;
    _paramMap;
    _queryParamMap;
    get title() {
      return this.data?.[je];
    }
    constructor(r, e, n, i, o, s, u, a, c) {
      (this.url = r),
        (this.params = e),
        (this.queryParams = n),
        (this.fragment = i),
        (this.data = o),
        (this.outlet = s),
        (this.component = u),
        (this.routeConfig = a),
        (this._resolve = c);
    }
    get root() {
      return this._routerState.root;
    }
    get parent() {
      return this._routerState.parent(this);
    }
    get firstChild() {
      return this._routerState.firstChild(this);
    }
    get children() {
      return this._routerState.children(this);
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
      return (this._paramMap ??= ce(this.params)), this._paramMap;
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= ce(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      let r = this.url.map((n) => n.toString()).join("/"),
        e = this.routeConfig ? this.routeConfig.path : "";
      return `Route(url:'${r}', path:'${e}')`;
    }
  },
  ot = class extends rt {
    url;
    constructor(r, e) {
      super(e), (this.url = r), nr(this, e);
    }
    toString() {
      return yn(this._root);
    }
  };
function nr(t, r) {
  (r.value._routerState = t), r.children.forEach((e) => nr(t, e));
}
function yn(t) {
  let r = t.children.length > 0 ? ` { ${t.children.map(yn).join(", ")} } ` : "";
  return `${t.value}${r}`;
}
function Tt(t) {
  if (t.snapshot) {
    let r = t.snapshot,
      e = t._futureSnapshot;
    (t.snapshot = e),
      L(r.queryParams, e.queryParams) ||
        t.queryParamsSubject.next(e.queryParams),
      r.fragment !== e.fragment && t.fragmentSubject.next(e.fragment),
      L(r.params, e.params) || t.paramsSubject.next(e.params),
      qn(r.url, e.url) || t.urlSubject.next(e.url),
      L(r.data, e.data) || t.dataSubject.next(e.data);
  } else
    (t.snapshot = t._futureSnapshot),
      t.dataSubject.next(t._futureSnapshot.data);
}
function Kt(t, r) {
  let e = L(t.params, r.params) && Wn(t.url, r.url),
    n = !t.parent != !r.parent;
  return e && !n && (!t.parent || Kt(t.parent, r.parent));
}
function Rn(t) {
  return typeof t.title == "string" || t.title === null;
}
var vi = new M(""),
  mi = (() => {
    class t {
      activated = null;
      get activatedComponentRef() {
        return this.activated;
      }
      _activatedRoute = null;
      name = g;
      activateEvents = new ye();
      deactivateEvents = new ye();
      attachEvents = new ye();
      detachEvents = new ye();
      routerOutletData = Ir(void 0);
      parentContexts = f(Le);
      location = f(Ur);
      changeDetector = f(Dt);
      inputBinder = f(ct, { optional: !0 });
      supportsBindingToComponentInputs = !0;
      ngOnChanges(e) {
        if (e.name) {
          let { firstChange: n, previousValue: i } = e.name;
          if (n) return;
          this.isTrackedInParentContexts(i) &&
            (this.deactivate(), this.parentContexts.onChildOutletDestroyed(i)),
            this.initializeOutletWithName();
        }
      }
      ngOnDestroy() {
        this.isTrackedInParentContexts(this.name) &&
          this.parentContexts.onChildOutletDestroyed(this.name),
          this.inputBinder?.unsubscribeFromRouteData(this);
      }
      isTrackedInParentContexts(e) {
        return this.parentContexts.getContext(e)?.outlet === this;
      }
      ngOnInit() {
        this.initializeOutletWithName();
      }
      initializeOutletWithName() {
        if (
          (this.parentContexts.onChildOutletCreated(this.name, this),
          this.activated)
        )
          return;
        let e = this.parentContexts.getContext(this.name);
        e?.route &&
          (e.attachRef
            ? this.attach(e.attachRef, e.route)
            : this.activateWith(e.route, e.injector));
      }
      get isActivated() {
        return !!this.activated;
      }
      get component() {
        if (!this.activated) throw new b(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new b(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new b(4012, !1);
        this.location.detach();
        let e = this.activated;
        return (
          (this.activated = null),
          (this._activatedRoute = null),
          this.detachEvents.emit(e.instance),
          e
        );
      }
      attach(e, n) {
        (this.activated = e),
          (this._activatedRoute = n),
          this.location.insert(e.hostView),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.attachEvents.emit(e.instance);
      }
      deactivate() {
        if (this.activated) {
          let e = this.component;
          this.activated.destroy(),
            (this.activated = null),
            (this._activatedRoute = null),
            this.deactivateEvents.emit(e);
        }
      }
      activateWith(e, n) {
        if (this.isActivated) throw new b(4013, !1);
        this._activatedRoute = e;
        let i = this.location,
          s = e.snapshot.component,
          u = this.parentContexts.getOrCreateContext(this.name).children,
          a = new Zt(e, u, i.injector, this.routerOutletData);
        (this.activated = i.createComponent(s, {
          index: i.length,
          injector: a,
          environmentInjector: n,
        })),
          this.changeDetector.markForCheck(),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.activateEvents.emit(this.activated.instance);
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵdir = bt({
        type: t,
        selectors: [["router-outlet"]],
        inputs: { name: "name", routerOutletData: [1, "routerOutletData"] },
        outputs: {
          activateEvents: "activate",
          deactivateEvents: "deactivate",
          attachEvents: "attach",
          detachEvents: "detach",
        },
        exportAs: ["outlet"],
        features: [yt],
      });
    }
    return t;
  })(),
  Zt = class t {
    route;
    childContexts;
    parent;
    outletData;
    __ngOutletInjector(r) {
      return new t(this.route, this.childContexts, r, this.outletData);
    }
    constructor(r, e, n, i) {
      (this.route = r),
        (this.childContexts = e),
        (this.parent = n),
        (this.outletData = i);
    }
    get(r, e) {
      return r === G
        ? this.route
        : r === Le
          ? this.childContexts
          : r === vi
            ? this.outletData
            : this.parent.get(r, e);
    }
  },
  ct = new M(""),
  Yr = (() => {
    class t {
      outletDataSubscriptions = new Map();
      bindActivatedRouteToOutletComponent(e) {
        this.unsubscribeFromRouteData(e), this.subscribeToRouteData(e);
      }
      unsubscribeFromRouteData(e) {
        this.outletDataSubscriptions.get(e)?.unsubscribe(),
          this.outletDataSubscriptions.delete(e);
      }
      subscribeToRouteData(e) {
        let { activatedRoute: n } = e,
          i = qe([n.queryParams, n.params, n.data])
            .pipe(
              P(
                ([o, s, u], a) => (
                  (u = l(l(l({}, o), s), u)),
                  a === 0 ? d(u) : Promise.resolve(u)
                ),
              ),
            )
            .subscribe((o) => {
              if (
                !e.isActivated ||
                !e.activatedComponentRef ||
                e.activatedRoute !== n ||
                n.component === null
              ) {
                this.unsubscribeFromRouteData(e);
                return;
              }
              let s = zr(n.component);
              if (!s) {
                this.unsubscribeFromRouteData(e);
                return;
              }
              for (let { templateName: u } of s.inputs)
                e.activatedComponentRef.setInput(u, o[u]);
            });
        this.outletDataSubscriptions.set(e, i);
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = S({ token: t, factory: t.ɵfac });
    }
    return t;
  })();
function yi(t, r, e) {
  let n = Te(t, r._root, e ? e._root : void 0);
  return new nt(n, r);
}
function Te(t, r, e) {
  if (e && t.shouldReuseRoute(r.value, e.value.snapshot)) {
    let n = e.value;
    n._futureSnapshot = r.value;
    let i = Ri(t, r, e);
    return new O(n, i);
  } else {
    if (t.shouldAttach(r.value)) {
      let o = t.retrieve(r.value);
      if (o !== null) {
        let s = o.route;
        return (
          (s.value._futureSnapshot = r.value),
          (s.children = r.children.map((u) => Te(t, u))),
          s
        );
      }
    }
    let n = Si(r.value),
      i = r.children.map((o) => Te(t, o));
    return new O(n, i);
  }
}
function Ri(t, r, e) {
  return r.children.map((n) => {
    for (let i of e.children)
      if (t.shouldReuseRoute(n.value, i.value.snapshot)) return Te(t, n, i);
    return Te(t, n);
  });
}
function Si(t) {
  return new G(
    new U(t.url),
    new U(t.params),
    new U(t.queryParams),
    new U(t.fragment),
    new U(t.data),
    t.outlet,
    t.component,
    t,
  );
}
var Ue = class {
    redirectTo;
    navigationBehaviorOptions;
    constructor(r, e) {
      (this.redirectTo = r), (this.navigationBehaviorOptions = e);
    }
  },
  Sn = "ngNavigationCancelingError";
function st(t, r) {
  let { redirectTo: e, navigationBehaviorOptions: n } = J(r)
      ? { redirectTo: r, navigationBehaviorOptions: void 0 }
      : r,
    i = Cn(!1, T.Redirect);
  return (i.url = e), (i.navigationBehaviorOptions = n), i;
}
function Cn(t, r) {
  let e = new Error(`NavigationCancelingError: ${t || ""}`);
  return (e[Sn] = !0), (e.cancellationCode = r), e;
}
function Ci(t) {
  return wn(t) && J(t.url);
}
function wn(t) {
  return !!t && t[Sn];
}
var wi = (t, r, e, n) =>
    m(
      (i) => (
        new Yt(r, i.targetRouterState, i.currentRouterState, e, n).activate(t),
        i
      ),
    ),
  Yt = class {
    routeReuseStrategy;
    futureState;
    currState;
    forwardEvent;
    inputBindingEnabled;
    constructor(r, e, n, i, o) {
      (this.routeReuseStrategy = r),
        (this.futureState = e),
        (this.currState = n),
        (this.forwardEvent = i),
        (this.inputBindingEnabled = o);
    }
    activate(r) {
      let e = this.futureState._root,
        n = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(e, n, r),
        Tt(this.futureState.root),
        this.activateChildRoutes(e, n, r);
    }
    deactivateChildRoutes(r, e, n) {
      let i = oe(e);
      r.children.forEach((o) => {
        let s = o.value.outlet;
        this.deactivateRoutes(o, i[s], n), delete i[s];
      }),
        Object.values(i).forEach((o) => {
          this.deactivateRouteAndItsChildren(o, n);
        });
    }
    deactivateRoutes(r, e, n) {
      let i = r.value,
        o = e ? e.value : null;
      if (i === o)
        if (i.component) {
          let s = n.getContext(i.outlet);
          s && this.deactivateChildRoutes(r, e, s.children);
        } else this.deactivateChildRoutes(r, e, n);
      else o && this.deactivateRouteAndItsChildren(e, n);
    }
    deactivateRouteAndItsChildren(r, e) {
      r.value.component &&
      this.routeReuseStrategy.shouldDetach(r.value.snapshot)
        ? this.detachAndStoreRouteSubtree(r, e)
        : this.deactivateRouteAndOutlet(r, e);
    }
    detachAndStoreRouteSubtree(r, e) {
      let n = e.getContext(r.value.outlet),
        i = n && r.value.component ? n.children : e,
        o = oe(r);
      for (let s of Object.values(o)) this.deactivateRouteAndItsChildren(s, i);
      if (n && n.outlet) {
        let s = n.outlet.detach(),
          u = n.children.onOutletDeactivated();
        this.routeReuseStrategy.store(r.value.snapshot, {
          componentRef: s,
          route: r,
          contexts: u,
        });
      }
    }
    deactivateRouteAndOutlet(r, e) {
      let n = e.getContext(r.value.outlet),
        i = n && r.value.component ? n.children : e,
        o = oe(r);
      for (let s of Object.values(o)) this.deactivateRouteAndItsChildren(s, i);
      n &&
        (n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated()),
        (n.attachRef = null),
        (n.route = null));
    }
    activateChildRoutes(r, e, n) {
      let i = oe(e);
      r.children.forEach((o) => {
        this.activateRoutes(o, i[o.value.outlet], n),
          this.forwardEvent(new Ht(o.value.snapshot));
      }),
        r.children.length && this.forwardEvent(new Bt(r.value.snapshot));
    }
    activateRoutes(r, e, n) {
      let i = r.value,
        o = e ? e.value : null;
      if ((Tt(i), i === o))
        if (i.component) {
          let s = n.getOrCreateContext(i.outlet);
          this.activateChildRoutes(r, e, s.children);
        } else this.activateChildRoutes(r, e, n);
      else if (i.component) {
        let s = n.getOrCreateContext(i.outlet);
        if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
          let u = this.routeReuseStrategy.retrieve(i.snapshot);
          this.routeReuseStrategy.store(i.snapshot, null),
            s.children.onOutletReAttached(u.contexts),
            (s.attachRef = u.componentRef),
            (s.route = u.route.value),
            s.outlet && s.outlet.attach(u.componentRef, u.route.value),
            Tt(u.route.value),
            this.activateChildRoutes(r, null, s.children);
        } else
          (s.attachRef = null),
            (s.route = i),
            s.outlet && s.outlet.activateWith(i, s.injector),
            this.activateChildRoutes(r, null, s.children);
      } else this.activateChildRoutes(r, null, n);
    }
  },
  at = class {
    path;
    route;
    constructor(r) {
      (this.path = r), (this.route = this.path[this.path.length - 1]);
    }
  },
  ue = class {
    component;
    route;
    constructor(r, e) {
      (this.component = r), (this.route = e);
    }
  };
function bi(t, r, e) {
  let n = t._root,
    i = r ? r._root : null;
  return we(n, i, e, [n.value]);
}
function Ii(t) {
  let r = t.routeConfig ? t.routeConfig.canActivateChild : null;
  return !r || r.length === 0 ? null : { node: t, guards: r };
}
function pe(t, r) {
  let e = Symbol(),
    n = r.get(t, e);
  return n === e ? (typeof t == "function" && !Rr(t) ? t : r.get(t)) : n;
}
function we(
  t,
  r,
  e,
  n,
  i = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let o = oe(r);
  return (
    t.children.forEach((s) => {
      Ai(s, o[s.value.outlet], e, n.concat([s.value]), i),
        delete o[s.value.outlet];
    }),
    Object.entries(o).forEach(([s, u]) => Ae(u, e.getContext(s), i)),
    i
  );
}
function Ai(
  t,
  r,
  e,
  n,
  i = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let o = t.value,
    s = r ? r.value : null,
    u = e ? e.getContext(t.value.outlet) : null;
  if (s && o.routeConfig === s.routeConfig) {
    let a = Di(s, o, o.routeConfig.runGuardsAndResolvers);
    a
      ? i.canActivateChecks.push(new at(n))
      : ((o.data = s.data), (o._resolvedData = s._resolvedData)),
      o.component ? we(t, r, u ? u.children : null, n, i) : we(t, r, e, n, i),
      a &&
        u &&
        u.outlet &&
        u.outlet.isActivated &&
        i.canDeactivateChecks.push(new ue(u.outlet.component, s));
  } else
    s && Ae(r, u, i),
      i.canActivateChecks.push(new at(n)),
      o.component
        ? we(t, null, u ? u.children : null, n, i)
        : we(t, null, e, n, i);
  return i;
}
function Di(t, r, e) {
  if (typeof e == "function") return e(t, r);
  switch (e) {
    case "pathParamsChange":
      return !X(t.url, r.url);
    case "pathParamsOrQueryParamsChange":
      return !X(t.url, r.url) || !L(t.queryParams, r.queryParams);
    case "always":
      return !0;
    case "paramsOrQueryParamsChange":
      return !Kt(t, r) || !L(t.queryParams, r.queryParams);
    case "paramsChange":
    default:
      return !Kt(t, r);
  }
}
function Ae(t, r, e) {
  let n = oe(t),
    i = t.value;
  Object.entries(n).forEach(([o, s]) => {
    i.component
      ? r
        ? Ae(s, r.children.getContext(o), e)
        : Ae(s, null, e)
      : Ae(s, r, e);
  }),
    i.component
      ? r && r.outlet && r.outlet.isActivated
        ? e.canDeactivateChecks.push(new ue(r.outlet.component, i))
        : e.canDeactivateChecks.push(new ue(null, i))
      : e.canDeactivateChecks.push(new ue(null, i));
}
function ke(t) {
  return typeof t == "function";
}
function Mi(t) {
  return typeof t == "boolean";
}
function Oi(t) {
  return t && ke(t.canLoad);
}
function Ti(t) {
  return t && ke(t.canActivate);
}
function Ui(t) {
  return t && ke(t.canActivateChild);
}
function Ei(t) {
  return t && ke(t.canDeactivate);
}
function xi(t) {
  return t && ke(t.canMatch);
}
function bn(t) {
  return t instanceof dr || t?.name === "EmptyError";
}
var Ge = Symbol("INITIAL_VALUE");
function fe() {
  return P((t) =>
    qe(t.map((r) => r.pipe(re(1), vr(Ge)))).pipe(
      m((r) => {
        for (let e of r)
          if (e !== !0) {
            if (e === Ge) return Ge;
            if (e === !1 || Pi(e)) return e;
          }
        return !0;
      }),
      Z((r) => r !== Ge),
      re(1),
    ),
  );
}
function Pi(t) {
  return J(t) || t instanceof Ue;
}
function ji(t, r) {
  return D((e) => {
    let {
      targetSnapshot: n,
      currentSnapshot: i,
      guards: { canActivateChecks: o, canDeactivateChecks: s },
    } = e;
    return s.length === 0 && o.length === 0
      ? d(I(l({}, e), { guardsResult: !0 }))
      : Ni(s, n, i, t).pipe(
          D((u) => (u && Mi(u) ? $i(n, o, t, r) : d(u))),
          m((u) => I(l({}, e), { guardsResult: u })),
        );
  });
}
function Ni(t, r, e, n) {
  return A(t).pipe(
    D((i) => Fi(i.component, i.route, e, r, n)),
    V((i) => i !== !0, !0),
  );
}
function $i(t, r, e, n) {
  return A(r).pipe(
    te((i) =>
      fr(
        ki(i.route.parent, n),
        Li(i.route, n),
        zi(t, i.path, e),
        _i(t, i.route, e),
      ),
    ),
    V((i) => i !== !0, !0),
  );
}
function Li(t, r) {
  return t !== null && r && r(new Vt(t)), d(!0);
}
function ki(t, r) {
  return t !== null && r && r(new qt(t)), d(!0);
}
function _i(t, r, e) {
  let n = r.routeConfig ? r.routeConfig.canActivate : null;
  if (!n || n.length === 0) return d(!0);
  let i = n.map((o) =>
    pt(() => {
      let s = $e(r) ?? e,
        u = pe(o, s),
        a = Ti(u) ? u.canActivate(r, t) : $(s, () => u(r, t));
      return K(a).pipe(V());
    }),
  );
  return d(i).pipe(fe());
}
function zi(t, r, e) {
  let n = r[r.length - 1],
    o = r
      .slice(0, r.length - 1)
      .reverse()
      .map((s) => Ii(s))
      .filter((s) => s !== null)
      .map((s) =>
        pt(() => {
          let u = s.guards.map((a) => {
            let c = $e(s.node) ?? e,
              h = pe(a, c),
              p = Ui(h) ? h.canActivateChild(n, t) : $(c, () => h(n, t));
            return K(p).pipe(V());
          });
          return d(u).pipe(fe());
        }),
      );
  return d(o).pipe(fe());
}
function Fi(t, r, e, n, i) {
  let o = r && r.routeConfig ? r.routeConfig.canDeactivate : null;
  if (!o || o.length === 0) return d(!0);
  let s = o.map((u) => {
    let a = $e(r) ?? i,
      c = pe(u, a),
      h = Ei(c) ? c.canDeactivate(t, r, e, n) : $(a, () => c(t, r, e, n));
    return K(h).pipe(V());
  });
  return d(s).pipe(fe());
}
function qi(t, r, e, n) {
  let i = r.canLoad;
  if (i === void 0 || i.length === 0) return d(!0);
  let o = i.map((s) => {
    let u = pe(s, t),
      a = Oi(u) ? u.canLoad(r, e) : $(t, () => u(r, e));
    return K(a);
  });
  return d(o).pipe(fe(), In(n));
}
function In(t) {
  return lr(
    C((r) => {
      if (typeof r != "boolean") throw st(t, r);
    }),
    m((r) => r === !0),
  );
}
function Bi(t, r, e, n) {
  let i = r.canMatch;
  if (!i || i.length === 0) return d(!0);
  let o = i.map((s) => {
    let u = pe(s, t),
      a = xi(u) ? u.canMatch(r, e) : $(t, () => u(r, e));
    return K(a);
  });
  return d(o).pipe(fe(), In(n));
}
var Ee = class {
    segmentGroup;
    constructor(r) {
      this.segmentGroup = r || null;
    }
  },
  xe = class extends Error {
    urlTree;
    constructor(r) {
      super(), (this.urlTree = r);
    }
  };
function ie(t) {
  return ve(new Ee(t));
}
function Vi(t) {
  return ve(new b(4e3, !1));
}
function Hi(t) {
  return ve(Cn(!1, T.GuardRejected));
}
var Xt = class {
    urlSerializer;
    urlTree;
    constructor(r, e) {
      (this.urlSerializer = r), (this.urlTree = e);
    }
    lineralizeSegments(r, e) {
      let n = [],
        i = e.root;
      for (;;) {
        if (((n = n.concat(i.segments)), i.numberOfChildren === 0)) return d(n);
        if (i.numberOfChildren > 1 || !i.children[g])
          return Vi(`${r.redirectTo}`);
        i = i.children[g];
      }
    }
    applyRedirectCommands(r, e, n, i, o) {
      if (typeof e != "string") {
        let u = e,
          {
            queryParams: a,
            fragment: c,
            routeConfig: h,
            url: p,
            outlet: y,
            params: N,
            data: w,
            title: q,
          } = i,
          x = $(o, () =>
            u({
              params: N,
              data: w,
              queryParams: a,
              fragment: c,
              routeConfig: h,
              url: p,
              outlet: y,
              title: q,
            }),
          );
        if (x instanceof F) throw new xe(x);
        e = x;
      }
      let s = this.applyRedirectCreateUrlTree(
        e,
        this.urlSerializer.parse(e),
        r,
        n,
      );
      if (e[0] === "/") throw new xe(s);
      return s;
    }
    applyRedirectCreateUrlTree(r, e, n, i) {
      let o = this.createSegmentGroup(r, e.root, n, i);
      return new F(
        o,
        this.createQueryParams(e.queryParams, this.urlTree.queryParams),
        e.fragment,
      );
    }
    createQueryParams(r, e) {
      let n = {};
      return (
        Object.entries(r).forEach(([i, o]) => {
          if (typeof o == "string" && o[0] === ":") {
            let u = o.substring(1);
            n[i] = e[u];
          } else n[i] = o;
        }),
        n
      );
    }
    createSegmentGroup(r, e, n, i) {
      let o = this.createSegments(r, e.segments, n, i),
        s = {};
      return (
        Object.entries(e.children).forEach(([u, a]) => {
          s[u] = this.createSegmentGroup(r, a, n, i);
        }),
        new v(o, s)
      );
    }
    createSegments(r, e, n, i) {
      return e.map((o) =>
        o.path[0] === ":"
          ? this.findPosParam(r, o, i)
          : this.findOrReturn(o, n),
      );
    }
    findPosParam(r, e, n) {
      let i = n[e.path.substring(1)];
      if (!i) throw new b(4001, !1);
      return i;
    }
    findOrReturn(r, e) {
      let n = 0;
      for (let i of e) {
        if (i.path === r.path) return e.splice(n), i;
        n++;
      }
      return r;
    }
  },
  Jt = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {},
  };
function Wi(t, r, e, n, i) {
  let o = An(t, r, e);
  return o.matched
    ? ((n = fi(r, n)),
      Bi(n, r, e, i).pipe(m((s) => (s === !0 ? o : l({}, Jt)))))
    : d(o);
}
function An(t, r, e) {
  if (r.path === "**") return Gi(e);
  if (r.path === "")
    return r.pathMatch === "full" && (t.hasChildren() || e.length > 0)
      ? l({}, Jt)
      : {
          matched: !0,
          consumedSegments: [],
          remainingSegments: e,
          parameters: {},
          positionalParamSegments: {},
        };
  let i = (r.matcher || Fn)(e, t, r);
  if (!i) return l({}, Jt);
  let o = {};
  Object.entries(i.posParams ?? {}).forEach(([u, a]) => {
    o[u] = a.path;
  });
  let s =
    i.consumed.length > 0
      ? l(l({}, o), i.consumed[i.consumed.length - 1].parameters)
      : o;
  return {
    matched: !0,
    consumedSegments: i.consumed,
    remainingSegments: e.slice(i.consumed.length),
    parameters: s,
    positionalParamSegments: i.posParams ?? {},
  };
}
function Gi(t) {
  return {
    matched: !0,
    parameters: t.length > 0 ? nn(t).parameters : {},
    consumedSegments: t,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function Xr(t, r, e, n) {
  return e.length > 0 && Zi(t, e, n)
    ? {
        segmentGroup: new v(r, Ki(n, new v(e, t.children))),
        slicedSegments: [],
      }
    : e.length === 0 && Yi(t, e, n)
      ? {
          segmentGroup: new v(t.segments, Qi(t, e, n, t.children)),
          slicedSegments: e,
        }
      : { segmentGroup: new v(t.segments, t.children), slicedSegments: e };
}
function Qi(t, r, e, n) {
  let i = {};
  for (let o of e)
    if (lt(t, r, o) && !n[j(o)]) {
      let s = new v([], {});
      i[j(o)] = s;
    }
  return l(l({}, n), i);
}
function Ki(t, r) {
  let e = {};
  e[g] = r;
  for (let n of t)
    if (n.path === "" && j(n) !== g) {
      let i = new v([], {});
      e[j(n)] = i;
    }
  return e;
}
function Zi(t, r, e) {
  return e.some((n) => lt(t, r, n) && j(n) !== g);
}
function Yi(t, r, e) {
  return e.some((n) => lt(t, r, n));
}
function lt(t, r, e) {
  return (t.hasChildren() || r.length > 0) && e.pathMatch === "full"
    ? !1
    : e.path === "";
}
function Xi(t, r, e) {
  return r.length === 0 && !t.children[e];
}
var er = class {};
function Ji(t, r, e, n, i, o, s = "emptyOnly") {
  return new tr(t, r, e, n, i, s, o).recognize();
}
var eo = 31,
  tr = class {
    injector;
    configLoader;
    rootComponentType;
    config;
    urlTree;
    paramsInheritanceStrategy;
    urlSerializer;
    applyRedirects;
    absoluteRedirectCount = 0;
    allowRedirects = !0;
    constructor(r, e, n, i, o, s, u) {
      (this.injector = r),
        (this.configLoader = e),
        (this.rootComponentType = n),
        (this.config = i),
        (this.urlTree = o),
        (this.paramsInheritanceStrategy = s),
        (this.urlSerializer = u),
        (this.applyRedirects = new Xt(this.urlSerializer, this.urlTree));
    }
    noMatchError(r) {
      return new b(4002, `'${r.segmentGroup}'`);
    }
    recognize() {
      let r = Xr(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(r).pipe(
        m(({ children: e, rootSnapshot: n }) => {
          let i = new O(n, e),
            o = new ot("", i),
            s = si(n, [], this.urlTree.queryParams, this.urlTree.fragment);
          return (
            (s.queryParams = this.urlTree.queryParams),
            (o.url = this.urlSerializer.serialize(s)),
            { state: o, tree: s }
          );
        }),
      );
    }
    match(r) {
      let e = new ae(
        [],
        Object.freeze({}),
        Object.freeze(l({}, this.urlTree.queryParams)),
        this.urlTree.fragment,
        Object.freeze({}),
        g,
        this.rootComponentType,
        null,
        {},
      );
      return this.processSegmentGroup(this.injector, this.config, r, g, e).pipe(
        m((n) => ({ children: n, rootSnapshot: e })),
        ee((n) => {
          if (n instanceof xe)
            return (this.urlTree = n.urlTree), this.match(n.urlTree.root);
          throw n instanceof Ee ? this.noMatchError(n) : n;
        }),
      );
    }
    processSegmentGroup(r, e, n, i, o) {
      return n.segments.length === 0 && n.hasChildren()
        ? this.processChildren(r, e, n, o)
        : this.processSegment(r, e, n, n.segments, i, !0, o).pipe(
            m((s) => (s instanceof O ? [s] : [])),
          );
    }
    processChildren(r, e, n, i) {
      let o = [];
      for (let s of Object.keys(n.children))
        s === "primary" ? o.unshift(s) : o.push(s);
      return A(o).pipe(
        te((s) => {
          let u = n.children[s],
            a = pi(e, s);
          return this.processSegmentGroup(r, a, u, s, i);
        }),
        gr((s, u) => (s.push(...u), s)),
        gt(null),
        pr(),
        D((s) => {
          if (s === null) return ie(n);
          let u = Dn(s);
          return to(u), d(u);
        }),
      );
    }
    processSegment(r, e, n, i, o, s, u) {
      return A(e).pipe(
        te((a) =>
          this.processSegmentAgainstRoute(
            a._injector ?? r,
            e,
            a,
            n,
            i,
            o,
            s,
            u,
          ).pipe(
            ee((c) => {
              if (c instanceof Ee) return d(null);
              throw c;
            }),
          ),
        ),
        V((a) => !!a),
        ee((a) => {
          if (bn(a)) return Xi(n, i, o) ? d(new er()) : ie(n);
          throw a;
        }),
      );
    }
    processSegmentAgainstRoute(r, e, n, i, o, s, u, a) {
      return j(n) !== s && (s === g || !lt(i, o, n))
        ? ie(i)
        : n.redirectTo === void 0
          ? this.matchSegmentAgainstRoute(r, i, n, o, s, a)
          : this.allowRedirects && u
            ? this.expandSegmentAgainstRouteUsingRedirect(r, i, e, n, o, s, a)
            : ie(i);
    }
    expandSegmentAgainstRouteUsingRedirect(r, e, n, i, o, s, u) {
      let {
        matched: a,
        parameters: c,
        consumedSegments: h,
        positionalParamSegments: p,
        remainingSegments: y,
      } = An(e, i, o);
      if (!a) return ie(e);
      typeof i.redirectTo == "string" &&
        i.redirectTo[0] === "/" &&
        (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > eo && (this.allowRedirects = !1));
      let N = new ae(
          o,
          c,
          Object.freeze(l({}, this.urlTree.queryParams)),
          this.urlTree.fragment,
          Jr(i),
          j(i),
          i.component ?? i._loadedComponent ?? null,
          i,
          en(i),
        ),
        w = it(N, u, this.paramsInheritanceStrategy);
      (N.params = Object.freeze(w.params)), (N.data = Object.freeze(w.data));
      let q = this.applyRedirects.applyRedirectCommands(
        h,
        i.redirectTo,
        p,
        N,
        r,
      );
      return this.applyRedirects
        .lineralizeSegments(i, q)
        .pipe(D((x) => this.processSegment(r, n, e, x.concat(y), s, !1, u)));
    }
    matchSegmentAgainstRoute(r, e, n, i, o, s) {
      let u = Wi(e, n, i, r, this.urlSerializer);
      return (
        n.path === "**" && (e.children = {}),
        u.pipe(
          P((a) =>
            a.matched
              ? ((r = n._injector ?? r),
                this.getChildConfig(r, n, i).pipe(
                  P(({ routes: c }) => {
                    let h = n._loadedInjector ?? r,
                      {
                        parameters: p,
                        consumedSegments: y,
                        remainingSegments: N,
                      } = a,
                      w = new ae(
                        y,
                        p,
                        Object.freeze(l({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        Jr(n),
                        j(n),
                        n.component ?? n._loadedComponent ?? null,
                        n,
                        en(n),
                      ),
                      q = it(w, s, this.paramsInheritanceStrategy);
                    (w.params = Object.freeze(q.params)),
                      (w.data = Object.freeze(q.data));
                    let { segmentGroup: x, slicedSegments: ge } = Xr(
                      e,
                      y,
                      N,
                      c,
                    );
                    if (ge.length === 0 && x.hasChildren())
                      return this.processChildren(h, c, x, w).pipe(
                        m((Fe) => new O(w, Fe)),
                      );
                    if (c.length === 0 && ge.length === 0)
                      return d(new O(w, []));
                    let zn = j(n) === o;
                    return this.processSegment(
                      h,
                      c,
                      x,
                      ge,
                      zn ? g : o,
                      !0,
                      w,
                    ).pipe(m((Fe) => new O(w, Fe instanceof O ? [Fe] : [])));
                  }),
                ))
              : ie(e),
          ),
        )
      );
    }
    getChildConfig(r, e, n) {
      return e.children
        ? d({ routes: e.children, injector: r })
        : e.loadChildren
          ? e._loadedRoutes !== void 0
            ? d({ routes: e._loadedRoutes, injector: e._loadedInjector })
            : qi(r, e, n, this.urlSerializer).pipe(
                D((i) =>
                  i
                    ? this.configLoader.loadChildren(r, e).pipe(
                        C((o) => {
                          (e._loadedRoutes = o.routes),
                            (e._loadedInjector = o.injector);
                        }),
                      )
                    : Hi(e),
                ),
              )
          : d({ routes: [], injector: r });
    }
  };
function to(t) {
  t.sort((r, e) =>
    r.value.outlet === g
      ? -1
      : e.value.outlet === g
        ? 1
        : r.value.outlet.localeCompare(e.value.outlet),
  );
}
function ro(t) {
  let r = t.value.routeConfig;
  return r && r.path === "";
}
function Dn(t) {
  let r = [],
    e = new Set();
  for (let n of t) {
    if (!ro(n)) {
      r.push(n);
      continue;
    }
    let i = r.find((o) => n.value.routeConfig === o.value.routeConfig);
    i !== void 0 ? (i.children.push(...n.children), e.add(i)) : r.push(n);
  }
  for (let n of e) {
    let i = Dn(n.children);
    r.push(new O(n.value, i));
  }
  return r.filter((n) => !e.has(n));
}
function Jr(t) {
  return t.data || {};
}
function en(t) {
  return t.resolve || {};
}
function no(t, r, e, n, i, o) {
  return D((s) =>
    Ji(t, r, e, n, s.extractedUrl, i, o).pipe(
      m(({ state: u, tree: a }) =>
        I(l({}, s), { targetSnapshot: u, urlAfterRedirects: a }),
      ),
    ),
  );
}
function io(t, r) {
  return D((e) => {
    let {
      targetSnapshot: n,
      guards: { canActivateChecks: i },
    } = e;
    if (!i.length) return d(e);
    let o = new Set(i.map((a) => a.route)),
      s = new Set();
    for (let a of o) if (!s.has(a)) for (let c of Mn(a)) s.add(c);
    let u = 0;
    return A(s).pipe(
      te((a) =>
        o.has(a)
          ? oo(a, n, t, r)
          : ((a.data = it(a, a.parent, t).resolve), d(void 0)),
      ),
      C(() => u++),
      vt(1),
      D((a) => (u === s.size ? d(e) : _)),
    );
  });
}
function Mn(t) {
  let r = t.children.map((e) => Mn(e)).flat();
  return [t, ...r];
}
function oo(t, r, e, n) {
  let i = t.routeConfig,
    o = t._resolve;
  return (
    i?.title !== void 0 && !Rn(i) && (o[je] = i.title),
    so(o, t, r, n).pipe(
      m(
        (s) => (
          (t._resolvedData = s), (t.data = it(t, t.parent, e).resolve), null
        ),
      ),
    )
  );
}
function so(t, r, e, n) {
  let i = xt(t);
  if (i.length === 0) return d({});
  let o = {};
  return A(i).pipe(
    D((s) =>
      ao(t[s], r, e, n).pipe(
        V(),
        C((u) => {
          if (u instanceof Ue) throw st(new le(), u);
          o[s] = u;
        }),
      ),
    ),
    vt(1),
    m(() => o),
    ee((s) => (bn(s) ? _ : ve(s))),
  );
}
function ao(t, r, e, n) {
  let i = $e(r) ?? n,
    o = pe(t, i),
    s = o.resolve ? o.resolve(r, e) : $(i, () => o(r, e));
  return K(s);
}
function Ut(t) {
  return P((r) => {
    let e = t(r);
    return e ? A(e).pipe(m(() => r)) : d(r);
  });
}
var On = (() => {
    class t {
      buildTitle(e) {
        let n,
          i = e.root;
        for (; i !== void 0; )
          (n = this.getResolvedTitleForRoute(i) ?? n),
            (i = i.children.find((o) => o.outlet === g));
        return n;
      }
      getResolvedTitleForRoute(e) {
        return e.data[je];
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = S({ token: t, factory: () => f(uo), providedIn: "root" });
    }
    return t;
  })(),
  uo = (() => {
    class t extends On {
      title;
      constructor(e) {
        super(), (this.title = e);
      }
      updateTitle(e) {
        let n = this.buildTitle(e);
        n !== void 0 && this.title.setTitle(n);
      }
      static ɵfac = function (n) {
        return new (n || t)(H(Wr));
      };
      static ɵprov = S({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })(),
  _e = new M("", { providedIn: "root", factory: () => ({}) }),
  co = (() => {
    class t {
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵcmp = xr({
        type: t,
        selectors: [["ng-component"]],
        exportAs: ["emptyRouterOutlet"],
        decls: 1,
        vars: 0,
        template: function (n, i) {
          n & 1 && kr(0, "router-outlet");
        },
        dependencies: [mi],
        encapsulation: 2,
      });
    }
    return t;
  })();
function ir(t) {
  let r = t.children && t.children.map(ir),
    e = r ? I(l({}, t), { children: r }) : l({}, t);
  return (
    !e.component &&
      !e.loadComponent &&
      (r || e.loadChildren) &&
      e.outlet &&
      e.outlet !== g &&
      (e.component = co),
    e
  );
}
var Pe = new M(""),
  or = (() => {
    class t {
      componentLoaders = new WeakMap();
      childrenLoaders = new WeakMap();
      onLoadStartListener;
      onLoadEndListener;
      compiler = f(Ve);
      loadComponent(e) {
        if (this.componentLoaders.get(e)) return this.componentLoaders.get(e);
        if (e._loadedComponent) return d(e._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(e);
        let n = K(e.loadComponent()).pipe(
            m(Tn),
            C((o) => {
              this.onLoadEndListener && this.onLoadEndListener(e),
                (e._loadedComponent = o);
            }),
            Be(() => {
              this.componentLoaders.delete(e);
            }),
          ),
          i = new dt(n, () => new B()).pipe(ht());
        return this.componentLoaders.set(e, i), i;
      }
      loadChildren(e, n) {
        if (this.childrenLoaders.get(n)) return this.childrenLoaders.get(n);
        if (n._loadedRoutes)
          return d({ routes: n._loadedRoutes, injector: n._loadedInjector });
        this.onLoadStartListener && this.onLoadStartListener(n);
        let o = lo(n, this.compiler, e, this.onLoadEndListener).pipe(
            Be(() => {
              this.childrenLoaders.delete(n);
            }),
          ),
          s = new dt(o, () => new B()).pipe(ht());
        return this.childrenLoaders.set(n, s), s;
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = S({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })();
function lo(t, r, e, n) {
  return K(t.loadChildren()).pipe(
    m(Tn),
    D((i) =>
      i instanceof Er || Array.isArray(i) ? d(i) : A(r.compileModuleAsync(i)),
    ),
    m((i) => {
      n && n(t);
      let o,
        s,
        u = !1;
      return (
        Array.isArray(i)
          ? ((s = i), (u = !0))
          : ((o = i.create(e).injector),
            (s = o.get(Pe, [], { optional: !0, self: !0 }).flat())),
        { routes: s.map(ir), injector: o }
      );
    }),
  );
}
function ho(t) {
  return t && typeof t == "object" && "default" in t;
}
function Tn(t) {
  return ho(t) ? t.default : t;
}
var sr = (() => {
    class t {
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = S({ token: t, factory: () => f(fo), providedIn: "root" });
    }
    return t;
  })(),
  fo = (() => {
    class t {
      shouldProcessUrl(e) {
        return !0;
      }
      extract(e) {
        return e;
      }
      merge(e, n) {
        return e;
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = S({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })(),
  Un = new M(""),
  En = new M("");
function po(t, r, e) {
  let n = t.get(En),
    i = t.get(Fr);
  return t.get(Ct).runOutsideAngular(() => {
    if (!i.startViewTransition || n.skipNextTransition)
      return (n.skipNextTransition = !1), new Promise((c) => setTimeout(c));
    let o,
      s = new Promise((c) => {
        o = c;
      }),
      u = i.startViewTransition(() => (o(), go(t))),
      { onViewTransitionCreated: a } = n;
    return a && $(t, () => a({ transition: u, from: r, to: e })), s;
  });
}
function go(t) {
  return new Promise((r) => {
    Dr({ read: () => setTimeout(r) }, { injector: t });
  });
}
var xn = new M(""),
  ar = (() => {
    class t {
      currentNavigation = null;
      currentTransition = null;
      lastSuccessfulNavigation = null;
      events = new B();
      transitionAbortSubject = new B();
      configLoader = f(or);
      environmentInjector = f(me);
      destroyRef = f(wr);
      urlSerializer = f(Ne);
      rootContexts = f(Le);
      location = f(Se);
      inputBindingEnabled = f(ct, { optional: !0 }) !== null;
      titleStrategy = f(On);
      options = f(_e, { optional: !0 }) || {};
      paramsInheritanceStrategy =
        this.options.paramsInheritanceStrategy || "emptyOnly";
      urlHandlingStrategy = f(sr);
      createViewTransition = f(Un, { optional: !0 });
      navigationErrorHandler = f(xn, { optional: !0 });
      navigationId = 0;
      get hasRequestedNavigation() {
        return this.navigationId !== 0;
      }
      transitions;
      afterPreactivation = () => d(void 0);
      rootComponentType = null;
      destroyed = !1;
      constructor() {
        let e = (i) => this.events.next(new zt(i)),
          n = (i) => this.events.next(new Ft(i));
        (this.configLoader.onLoadEndListener = n),
          (this.configLoader.onLoadStartListener = e),
          this.destroyRef.onDestroy(() => {
            this.destroyed = !0;
          });
      }
      complete() {
        this.transitions?.complete();
      }
      handleNavigationRequest(e) {
        let n = ++this.navigationId;
        this.transitions?.next(
          I(l(l({}, this.transitions.value), e), { id: n }),
        );
      }
      setupNavigations(e, n, i) {
        return (
          (this.transitions = new U({
            id: 0,
            currentUrlTree: n,
            currentRawUrl: n,
            extractedUrl: this.urlHandlingStrategy.extract(n),
            urlAfterRedirects: this.urlHandlingStrategy.extract(n),
            rawUrl: n,
            extras: {},
            resolve: () => {},
            reject: () => {},
            promise: Promise.resolve(!0),
            source: Ie,
            restoredState: null,
            currentSnapshot: i.snapshot,
            targetSnapshot: null,
            currentRouterState: i,
            targetRouterState: null,
            guards: { canActivateChecks: [], canDeactivateChecks: [] },
            guardsResult: null,
          })),
          this.transitions.pipe(
            Z((o) => o.id !== 0),
            m((o) =>
              I(l({}, o), {
                extractedUrl: this.urlHandlingStrategy.extract(o.rawUrl),
              }),
            ),
            P((o) => {
              let s = !1,
                u = !1;
              return d(o).pipe(
                P((a) => {
                  if (this.navigationId > o.id)
                    return (
                      this.cancelNavigationTransition(
                        o,
                        "",
                        T.SupersededByNewNavigation,
                      ),
                      _
                    );
                  (this.currentTransition = o),
                    (this.currentNavigation = {
                      id: a.id,
                      initialUrl: a.rawUrl,
                      extractedUrl: a.extractedUrl,
                      targetBrowserUrl:
                        typeof a.extras.browserUrl == "string"
                          ? this.urlSerializer.parse(a.extras.browserUrl)
                          : a.extras.browserUrl,
                      trigger: a.source,
                      extras: a.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? I(l({}, this.lastSuccessfulNavigation), {
                            previousNavigation: null,
                          })
                        : null,
                    });
                  let c =
                      !e.navigated ||
                      this.isUpdatingInternalState() ||
                      this.isUpdatedBrowserUrl(),
                    h = a.extras.onSameUrlNavigation ?? e.onSameUrlNavigation;
                  if (!c && h !== "reload") {
                    let p = "";
                    return (
                      this.events.next(
                        new W(
                          a.id,
                          this.urlSerializer.serialize(a.rawUrl),
                          p,
                          Je.IgnoredSameUrlNavigation,
                        ),
                      ),
                      a.resolve(!1),
                      _
                    );
                  }
                  if (this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))
                    return d(a).pipe(
                      P((p) => {
                        let y = this.transitions?.getValue();
                        return (
                          this.events.next(
                            new he(
                              p.id,
                              this.urlSerializer.serialize(p.extractedUrl),
                              p.source,
                              p.restoredState,
                            ),
                          ),
                          y !== this.transitions?.getValue()
                            ? _
                            : Promise.resolve(p)
                        );
                      }),
                      no(
                        this.environmentInjector,
                        this.configLoader,
                        this.rootComponentType,
                        e.config,
                        this.urlSerializer,
                        this.paramsInheritanceStrategy,
                      ),
                      C((p) => {
                        (o.targetSnapshot = p.targetSnapshot),
                          (o.urlAfterRedirects = p.urlAfterRedirects),
                          (this.currentNavigation = I(
                            l({}, this.currentNavigation),
                            { finalUrl: p.urlAfterRedirects },
                          ));
                        let y = new et(
                          p.id,
                          this.urlSerializer.serialize(p.extractedUrl),
                          this.urlSerializer.serialize(p.urlAfterRedirects),
                          p.targetSnapshot,
                        );
                        this.events.next(y);
                      }),
                    );
                  if (
                    c &&
                    this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)
                  ) {
                    let {
                        id: p,
                        extractedUrl: y,
                        source: N,
                        restoredState: w,
                        extras: q,
                      } = a,
                      x = new he(p, this.urlSerializer.serialize(y), N, w);
                    this.events.next(x);
                    let ge = mn(this.rootComponentType).snapshot;
                    return (
                      (this.currentTransition = o =
                        I(l({}, a), {
                          targetSnapshot: ge,
                          urlAfterRedirects: y,
                          extras: I(l({}, q), {
                            skipLocationChange: !1,
                            replaceUrl: !1,
                          }),
                        })),
                      (this.currentNavigation.finalUrl = y),
                      d(o)
                    );
                  } else {
                    let p = "";
                    return (
                      this.events.next(
                        new W(
                          a.id,
                          this.urlSerializer.serialize(a.extractedUrl),
                          p,
                          Je.IgnoredByUrlHandlingStrategy,
                        ),
                      ),
                      a.resolve(!1),
                      _
                    );
                  }
                }),
                C((a) => {
                  let c = new $t(
                    a.id,
                    this.urlSerializer.serialize(a.extractedUrl),
                    this.urlSerializer.serialize(a.urlAfterRedirects),
                    a.targetSnapshot,
                  );
                  this.events.next(c);
                }),
                m(
                  (a) => (
                    (this.currentTransition = o =
                      I(l({}, a), {
                        guards: bi(
                          a.targetSnapshot,
                          a.currentSnapshot,
                          this.rootContexts,
                        ),
                      })),
                    o
                  ),
                ),
                ji(this.environmentInjector, (a) => this.events.next(a)),
                C((a) => {
                  if (
                    ((o.guardsResult = a.guardsResult),
                    a.guardsResult && typeof a.guardsResult != "boolean")
                  )
                    throw st(this.urlSerializer, a.guardsResult);
                  let c = new Lt(
                    a.id,
                    this.urlSerializer.serialize(a.extractedUrl),
                    this.urlSerializer.serialize(a.urlAfterRedirects),
                    a.targetSnapshot,
                    !!a.guardsResult,
                  );
                  this.events.next(c);
                }),
                Z((a) =>
                  a.guardsResult
                    ? !0
                    : (this.cancelNavigationTransition(a, "", T.GuardRejected),
                      !1),
                ),
                Ut((a) => {
                  if (a.guards.canActivateChecks.length)
                    return d(a).pipe(
                      C((c) => {
                        let h = new kt(
                          c.id,
                          this.urlSerializer.serialize(c.extractedUrl),
                          this.urlSerializer.serialize(c.urlAfterRedirects),
                          c.targetSnapshot,
                        );
                        this.events.next(h);
                      }),
                      P((c) => {
                        let h = !1;
                        return d(c).pipe(
                          io(
                            this.paramsInheritanceStrategy,
                            this.environmentInjector,
                          ),
                          C({
                            next: () => (h = !0),
                            complete: () => {
                              h ||
                                this.cancelNavigationTransition(
                                  c,
                                  "",
                                  T.NoDataFromResolver,
                                );
                            },
                          }),
                        );
                      }),
                      C((c) => {
                        let h = new _t(
                          c.id,
                          this.urlSerializer.serialize(c.extractedUrl),
                          this.urlSerializer.serialize(c.urlAfterRedirects),
                          c.targetSnapshot,
                        );
                        this.events.next(h);
                      }),
                    );
                }),
                Ut((a) => {
                  let c = (h) => {
                    let p = [];
                    h.routeConfig?.loadComponent &&
                      !h.routeConfig._loadedComponent &&
                      p.push(
                        this.configLoader.loadComponent(h.routeConfig).pipe(
                          C((y) => {
                            h.component = y;
                          }),
                          m(() => {}),
                        ),
                      );
                    for (let y of h.children) p.push(...c(y));
                    return p;
                  };
                  return qe(c(a.targetSnapshot.root)).pipe(gt(null), re(1));
                }),
                Ut(() => this.afterPreactivation()),
                P(() => {
                  let { currentSnapshot: a, targetSnapshot: c } = o,
                    h = this.createViewTransition?.(
                      this.environmentInjector,
                      a.root,
                      c.root,
                    );
                  return h ? A(h).pipe(m(() => o)) : d(o);
                }),
                m((a) => {
                  let c = yi(
                    e.routeReuseStrategy,
                    a.targetSnapshot,
                    a.currentRouterState,
                  );
                  return (
                    (this.currentTransition = o =
                      I(l({}, a), { targetRouterState: c })),
                    (this.currentNavigation.targetRouterState = c),
                    o
                  );
                }),
                C(() => {
                  this.events.next(new Oe());
                }),
                wi(
                  this.rootContexts,
                  e.routeReuseStrategy,
                  (a) => this.events.next(a),
                  this.inputBindingEnabled,
                ),
                re(1),
                C({
                  next: (a) => {
                    (s = !0),
                      (this.lastSuccessfulNavigation = this.currentNavigation),
                      this.events.next(
                        new k(
                          a.id,
                          this.urlSerializer.serialize(a.extractedUrl),
                          this.urlSerializer.serialize(a.urlAfterRedirects),
                        ),
                      ),
                      this.titleStrategy?.updateTitle(
                        a.targetRouterState.snapshot,
                      ),
                      a.resolve(!0);
                  },
                  complete: () => {
                    s = !0;
                  },
                }),
                mr(
                  this.transitionAbortSubject.pipe(
                    C((a) => {
                      throw a;
                    }),
                  ),
                ),
                Be(() => {
                  !s &&
                    !u &&
                    this.cancelNavigationTransition(
                      o,
                      "",
                      T.SupersededByNewNavigation,
                    ),
                    this.currentTransition?.id === o.id &&
                      ((this.currentNavigation = null),
                      (this.currentTransition = null));
                }),
                ee((a) => {
                  if (this.destroyed) return o.resolve(!1), _;
                  if (((u = !0), wn(a)))
                    this.events.next(
                      new z(
                        o.id,
                        this.urlSerializer.serialize(o.extractedUrl),
                        a.message,
                        a.cancellationCode,
                      ),
                    ),
                      Ci(a)
                        ? this.events.next(
                            new de(a.url, a.navigationBehaviorOptions),
                          )
                        : o.resolve(!1);
                  else {
                    let c = new Me(
                      o.id,
                      this.urlSerializer.serialize(o.extractedUrl),
                      a,
                      o.targetSnapshot ?? void 0,
                    );
                    try {
                      let h = $(this.environmentInjector, () =>
                        this.navigationErrorHandler?.(c),
                      );
                      if (h instanceof Ue) {
                        let { message: p, cancellationCode: y } = st(
                          this.urlSerializer,
                          h,
                        );
                        this.events.next(
                          new z(
                            o.id,
                            this.urlSerializer.serialize(o.extractedUrl),
                            p,
                            y,
                          ),
                        ),
                          this.events.next(
                            new de(h.redirectTo, h.navigationBehaviorOptions),
                          );
                      } else throw (this.events.next(c), a);
                    } catch (h) {
                      this.options.resolveNavigationPromiseOnError
                        ? o.resolve(!1)
                        : o.reject(h);
                    }
                  }
                  return _;
                }),
              );
            }),
          )
        );
      }
      cancelNavigationTransition(e, n, i) {
        let o = new z(e.id, this.urlSerializer.serialize(e.extractedUrl), n, i);
        this.events.next(o), e.resolve(!1);
      }
      isUpdatingInternalState() {
        return (
          this.currentTransition?.extractedUrl.toString() !==
          this.currentTransition?.currentUrlTree.toString()
        );
      }
      isUpdatedBrowserUrl() {
        let e = this.urlHandlingStrategy.extract(
            this.urlSerializer.parse(this.location.path(!0)),
          ),
          n =
            this.currentNavigation?.targetBrowserUrl ??
            this.currentNavigation?.extractedUrl;
        return (
          e.toString() !== n?.toString() &&
          !this.currentNavigation?.extras.skipLocationChange
        );
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = S({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })();
function vo(t) {
  return t !== Ie;
}
var mo = (() => {
    class t {
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = S({ token: t, factory: () => f(yo), providedIn: "root" });
    }
    return t;
  })(),
  rr = class {
    shouldDetach(r) {
      return !1;
    }
    store(r, e) {}
    shouldAttach(r) {
      return !1;
    }
    retrieve(r) {
      return null;
    }
    shouldReuseRoute(r, e) {
      return r.routeConfig === e.routeConfig;
    }
  },
  yo = (() => {
    class t extends rr {
      static ɵfac = (() => {
        let e;
        return function (i) {
          return (e || (e = Rt(t)))(i || t);
        };
      })();
      static ɵprov = S({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })(),
  Pn = (() => {
    class t {
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = S({ token: t, factory: () => f(Ro), providedIn: "root" });
    }
    return t;
  })(),
  Ro = (() => {
    class t extends Pn {
      location = f(Se);
      urlSerializer = f(Ne);
      options = f(_e, { optional: !0 }) || {};
      canceledNavigationResolution =
        this.options.canceledNavigationResolution || "replace";
      urlHandlingStrategy = f(sr);
      urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
      currentUrlTree = new F();
      getCurrentUrlTree() {
        return this.currentUrlTree;
      }
      rawUrlTree = this.currentUrlTree;
      getRawUrlTree() {
        return this.rawUrlTree;
      }
      currentPageId = 0;
      lastSuccessfulId = -1;
      restoredState() {
        return this.location.getState();
      }
      get browserPageId() {
        return this.canceledNavigationResolution !== "computed"
          ? this.currentPageId
          : (this.restoredState()?.ɵrouterPageId ?? this.currentPageId);
      }
      routerState = mn(null);
      getRouterState() {
        return this.routerState;
      }
      stateMemento = this.createStateMemento();
      createStateMemento() {
        return {
          rawUrlTree: this.rawUrlTree,
          currentUrlTree: this.currentUrlTree,
          routerState: this.routerState,
        };
      }
      registerNonRouterCurrentEntryChangeListener(e) {
        return this.location.subscribe((n) => {
          n.type === "popstate" && e(n.url, n.state);
        });
      }
      handleRouterEvent(e, n) {
        if (e instanceof he) this.stateMemento = this.createStateMemento();
        else if (e instanceof W) this.rawUrlTree = n.initialUrl;
        else if (e instanceof et) {
          if (
            this.urlUpdateStrategy === "eager" &&
            !n.extras.skipLocationChange
          ) {
            let i = this.urlHandlingStrategy.merge(n.finalUrl, n.initialUrl);
            this.setBrowserUrl(n.targetBrowserUrl ?? i, n);
          }
        } else
          e instanceof Oe
            ? ((this.currentUrlTree = n.finalUrl),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                n.finalUrl,
                n.initialUrl,
              )),
              (this.routerState = n.targetRouterState),
              this.urlUpdateStrategy === "deferred" &&
                !n.extras.skipLocationChange &&
                this.setBrowserUrl(n.targetBrowserUrl ?? this.rawUrlTree, n))
            : e instanceof z &&
                (e.code === T.GuardRejected || e.code === T.NoDataFromResolver)
              ? this.restoreHistory(n)
              : e instanceof Me
                ? this.restoreHistory(n, !0)
                : e instanceof k &&
                  ((this.lastSuccessfulId = e.id),
                  (this.currentPageId = this.browserPageId));
      }
      setBrowserUrl(e, n) {
        let i = e instanceof F ? this.urlSerializer.serialize(e) : e;
        if (this.location.isCurrentPathEqualTo(i) || n.extras.replaceUrl) {
          let o = this.browserPageId,
            s = l(l({}, n.extras.state), this.generateNgRouterState(n.id, o));
          this.location.replaceState(i, "", s);
        } else {
          let o = l(
            l({}, n.extras.state),
            this.generateNgRouterState(n.id, this.browserPageId + 1),
          );
          this.location.go(i, "", o);
        }
      }
      restoreHistory(e, n = !1) {
        if (this.canceledNavigationResolution === "computed") {
          let i = this.browserPageId,
            o = this.currentPageId - i;
          o !== 0
            ? this.location.historyGo(o)
            : this.currentUrlTree === e.finalUrl &&
              o === 0 &&
              (this.resetState(e), this.resetUrlToCurrentUrlTree());
        } else
          this.canceledNavigationResolution === "replace" &&
            (n && this.resetState(e), this.resetUrlToCurrentUrlTree());
      }
      resetState(e) {
        (this.routerState = this.stateMemento.routerState),
          (this.currentUrlTree = this.stateMemento.currentUrlTree),
          (this.rawUrlTree = this.urlHandlingStrategy.merge(
            this.currentUrlTree,
            e.finalUrl ?? this.rawUrlTree,
          ));
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(
          this.urlSerializer.serialize(this.rawUrlTree),
          "",
          this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId),
        );
      }
      generateNgRouterState(e, n) {
        return this.canceledNavigationResolution === "computed"
          ? { navigationId: e, ɵrouterPageId: n }
          : { navigationId: e };
      }
      static ɵfac = (() => {
        let e;
        return function (i) {
          return (e || (e = Rt(t)))(i || t);
        };
      })();
      static ɵprov = S({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })();
function jn(t, r) {
  t.events
    .pipe(
      Z(
        (e) =>
          e instanceof k || e instanceof z || e instanceof Me || e instanceof W,
      ),
      m((e) =>
        e instanceof k || e instanceof W
          ? 0
          : (
                e instanceof z
                  ? e.code === T.Redirect ||
                    e.code === T.SupersededByNewNavigation
                  : !1
              )
            ? 2
            : 1,
      ),
      Z((e) => e !== 2),
      re(1),
    )
    .subscribe(() => {
      r();
    });
}
var So = {
    paths: "exact",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "exact",
  },
  Co = {
    paths: "subset",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "subset",
  },
  Q = (() => {
    class t {
      get currentUrlTree() {
        return this.stateManager.getCurrentUrlTree();
      }
      get rawUrlTree() {
        return this.stateManager.getRawUrlTree();
      }
      disposed = !1;
      nonRouterCurrentEntryChangeSubscription;
      console = f(jr);
      stateManager = f(Pn);
      options = f(_e, { optional: !0 }) || {};
      pendingTasks = f(br);
      urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
      navigationTransitions = f(ar);
      urlSerializer = f(Ne);
      location = f(Se);
      urlHandlingStrategy = f(sr);
      _events = new B();
      get events() {
        return this._events;
      }
      get routerState() {
        return this.stateManager.getRouterState();
      }
      navigated = !1;
      routeReuseStrategy = f(mo);
      onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
      config = f(Pe, { optional: !0 })?.flat() ?? [];
      componentInputBindingEnabled = !!f(ct, { optional: !0 });
      constructor() {
        this.resetConfig(this.config),
          this.navigationTransitions
            .setupNavigations(this, this.currentUrlTree, this.routerState)
            .subscribe({
              error: (e) => {
                this.console.warn(e);
              },
            }),
          this.subscribeToNavigationEvents();
      }
      eventsSubscription = new cr();
      subscribeToNavigationEvents() {
        let e = this.navigationTransitions.events.subscribe((n) => {
          try {
            let i = this.navigationTransitions.currentTransition,
              o = this.navigationTransitions.currentNavigation;
            if (i !== null && o !== null) {
              if (
                (this.stateManager.handleRouterEvent(n, o),
                n instanceof z &&
                  n.code !== T.Redirect &&
                  n.code !== T.SupersededByNewNavigation)
              )
                this.navigated = !0;
              else if (n instanceof k) this.navigated = !0;
              else if (n instanceof de) {
                let s = n.navigationBehaviorOptions,
                  u = this.urlHandlingStrategy.merge(n.url, i.currentRawUrl),
                  a = l(
                    {
                      browserUrl: i.extras.browserUrl,
                      info: i.extras.info,
                      skipLocationChange: i.extras.skipLocationChange,
                      replaceUrl:
                        i.extras.replaceUrl ||
                        this.urlUpdateStrategy === "eager" ||
                        vo(i.source),
                    },
                    s,
                  );
                this.scheduleNavigation(u, Ie, null, a, {
                  resolve: i.resolve,
                  reject: i.reject,
                  promise: i.promise,
                });
              }
            }
            bo(n) && this._events.next(n);
          } catch (i) {
            this.navigationTransitions.transitionAbortSubject.next(i);
          }
        });
        this.eventsSubscription.add(e);
      }
      resetRootComponentType(e) {
        (this.routerState.root.component = e),
          (this.navigationTransitions.rootComponentType = e);
      }
      initialNavigation() {
        this.setUpLocationChangeListener(),
          this.navigationTransitions.hasRequestedNavigation ||
            this.navigateToSyncWithBrowser(
              this.location.path(!0),
              Ie,
              this.stateManager.restoredState(),
            );
      }
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??=
          this.stateManager.registerNonRouterCurrentEntryChangeListener(
            (e, n) => {
              setTimeout(() => {
                this.navigateToSyncWithBrowser(e, "popstate", n);
              }, 0);
            },
          );
      }
      navigateToSyncWithBrowser(e, n, i) {
        let o = { replaceUrl: !0 },
          s = i?.navigationId ? i : null;
        if (i) {
          let a = l({}, i);
          delete a.navigationId,
            delete a.ɵrouterPageId,
            Object.keys(a).length !== 0 && (o.state = a);
        }
        let u = this.parseUrl(e);
        this.scheduleNavigation(u, n, s, o);
      }
      get url() {
        return this.serializeUrl(this.currentUrlTree);
      }
      getCurrentNavigation() {
        return this.navigationTransitions.currentNavigation;
      }
      get lastSuccessfulNavigation() {
        return this.navigationTransitions.lastSuccessfulNavigation;
      }
      resetConfig(e) {
        (this.config = e.map(ir)), (this.navigated = !1);
      }
      ngOnDestroy() {
        this.dispose();
      }
      dispose() {
        this._events.unsubscribe(),
          this.navigationTransitions.complete(),
          this.nonRouterCurrentEntryChangeSubscription &&
            (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
            (this.nonRouterCurrentEntryChangeSubscription = void 0)),
          (this.disposed = !0),
          this.eventsSubscription.unsubscribe();
      }
      createUrlTree(e, n = {}) {
        let {
            relativeTo: i,
            queryParams: o,
            fragment: s,
            queryParamsHandling: u,
            preserveFragment: a,
          } = n,
          c = a ? this.currentUrlTree.fragment : s,
          h = null;
        switch (u ?? this.options.defaultQueryParamsHandling) {
          case "merge":
            h = l(l({}, this.currentUrlTree.queryParams), o);
            break;
          case "preserve":
            h = this.currentUrlTree.queryParams;
            break;
          default:
            h = o || null;
        }
        h !== null && (h = this.removeEmptyProps(h));
        let p;
        try {
          let y = i ? i.snapshot : this.routerState.snapshot.root;
          p = fn(y);
        } catch {
          (typeof e[0] != "string" || e[0][0] !== "/") && (e = []),
            (p = this.currentUrlTree.root);
        }
        return pn(p, e, h, c ?? null);
      }
      navigateByUrl(e, n = { skipLocationChange: !1 }) {
        let i = J(e) ? e : this.parseUrl(e),
          o = this.urlHandlingStrategy.merge(i, this.rawUrlTree);
        return this.scheduleNavigation(o, Ie, null, n);
      }
      navigate(e, n = { skipLocationChange: !1 }) {
        return wo(e), this.navigateByUrl(this.createUrlTree(e, n), n);
      }
      serializeUrl(e) {
        return this.urlSerializer.serialize(e);
      }
      parseUrl(e) {
        try {
          return this.urlSerializer.parse(e);
        } catch {
          return this.urlSerializer.parse("/");
        }
      }
      isActive(e, n) {
        let i;
        if (
          (n === !0 ? (i = l({}, So)) : n === !1 ? (i = l({}, Co)) : (i = n),
          J(e))
        )
          return Gr(this.currentUrlTree, e, i);
        let o = this.parseUrl(e);
        return Gr(this.currentUrlTree, o, i);
      }
      removeEmptyProps(e) {
        return Object.entries(e).reduce(
          (n, [i, o]) => (o != null && (n[i] = o), n),
          {},
        );
      }
      scheduleNavigation(e, n, i, o, s) {
        if (this.disposed) return Promise.resolve(!1);
        let u, a, c;
        s
          ? ((u = s.resolve), (a = s.reject), (c = s.promise))
          : (c = new Promise((p, y) => {
              (u = p), (a = y);
            }));
        let h = this.pendingTasks.add();
        return (
          jn(this, () => {
            queueMicrotask(() => this.pendingTasks.remove(h));
          }),
          this.navigationTransitions.handleNavigationRequest({
            source: n,
            restoredState: i,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: e,
            extras: o,
            resolve: u,
            reject: a,
            promise: c,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          }),
          c.catch((p) => Promise.reject(p))
        );
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = S({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })();
function wo(t) {
  for (let r = 0; r < t.length; r++) if (t[r] == null) throw new b(4008, !1);
}
function bo(t) {
  return !(t instanceof Oe) && !(t instanceof de);
}
var ls = (() => {
  class t {
    router;
    route;
    tabIndexAttribute;
    renderer;
    el;
    locationStrategy;
    href = null;
    target;
    queryParams;
    fragment;
    queryParamsHandling;
    state;
    info;
    relativeTo;
    isAnchorElement;
    subscription;
    onChanges = new B();
    constructor(e, n, i, o, s, u) {
      (this.router = e),
        (this.route = n),
        (this.tabIndexAttribute = i),
        (this.renderer = o),
        (this.el = s),
        (this.locationStrategy = u);
      let a = s.nativeElement.tagName?.toLowerCase();
      (this.isAnchorElement = a === "a" || a === "area"),
        this.isAnchorElement
          ? (this.subscription = e.events.subscribe((c) => {
              c instanceof k && this.updateHref();
            }))
          : this.setTabIndexIfNotOnNativeEl("0");
    }
    preserveFragment = !1;
    skipLocationChange = !1;
    replaceUrl = !1;
    setTabIndexIfNotOnNativeEl(e) {
      this.tabIndexAttribute != null ||
        this.isAnchorElement ||
        this.applyAttributeValue("tabindex", e);
    }
    ngOnChanges(e) {
      this.isAnchorElement && this.updateHref(), this.onChanges.next(this);
    }
    routerLinkInput = null;
    set routerLink(e) {
      e == null
        ? ((this.routerLinkInput = null), this.setTabIndexIfNotOnNativeEl(null))
        : (J(e)
            ? (this.routerLinkInput = e)
            : (this.routerLinkInput = Array.isArray(e) ? e : [e]),
          this.setTabIndexIfNotOnNativeEl("0"));
    }
    onClick(e, n, i, o, s) {
      let u = this.urlTree;
      if (
        u === null ||
        (this.isAnchorElement &&
          (e !== 0 ||
            n ||
            i ||
            o ||
            s ||
            (typeof this.target == "string" && this.target != "_self")))
      )
        return !0;
      let a = {
        skipLocationChange: this.skipLocationChange,
        replaceUrl: this.replaceUrl,
        state: this.state,
        info: this.info,
      };
      return this.router.navigateByUrl(u, a), !this.isAnchorElement;
    }
    ngOnDestroy() {
      this.subscription?.unsubscribe();
    }
    updateHref() {
      let e = this.urlTree;
      this.href =
        e !== null && this.locationStrategy
          ? this.locationStrategy?.prepareExternalUrl(
              this.router.serializeUrl(e),
            )
          : null;
      let n =
        this.href === null
          ? null
          : Mr(this.href, this.el.nativeElement.tagName.toLowerCase(), "href");
      this.applyAttributeValue("href", n);
    }
    applyAttributeValue(e, n) {
      let i = this.renderer,
        o = this.el.nativeElement;
      n !== null ? i.setAttribute(o, e, n) : i.removeAttribute(o, e);
    }
    get urlTree() {
      return this.routerLinkInput === null
        ? null
        : J(this.routerLinkInput)
          ? this.routerLinkInput
          : this.router.createUrlTree(this.routerLinkInput, {
              relativeTo:
                this.relativeTo !== void 0 ? this.relativeTo : this.route,
              queryParams: this.queryParams,
              fragment: this.fragment,
              queryParamsHandling: this.queryParamsHandling,
              preserveFragment: this.preserveFragment,
            });
    }
    static ɵfac = function (n) {
      return new (n || t)(ne(Q), ne(G), Cr("tabindex"), ne(Or), ne(Ar), ne(Re));
    };
    static ɵdir = bt({
      type: t,
      selectors: [["", "routerLink", ""]],
      hostVars: 1,
      hostBindings: function (n, i) {
        n & 1 &&
          _r("click", function (s) {
            return i.onClick(
              s.button,
              s.ctrlKey,
              s.shiftKey,
              s.altKey,
              s.metaKey,
            );
          }),
          n & 2 && Lr("target", i.target);
      },
      inputs: {
        target: "target",
        queryParams: "queryParams",
        fragment: "fragment",
        queryParamsHandling: "queryParamsHandling",
        state: "state",
        info: "info",
        relativeTo: "relativeTo",
        preserveFragment: [2, "preserveFragment", "preserveFragment", He],
        skipLocationChange: [2, "skipLocationChange", "skipLocationChange", He],
        replaceUrl: [2, "replaceUrl", "replaceUrl", He],
        routerLink: "routerLink",
      },
      features: [yt],
    });
  }
  return t;
})();
var ut = class {};
var Io = (() => {
    class t {
      router;
      injector;
      preloadingStrategy;
      loader;
      subscription;
      constructor(e, n, i, o, s) {
        (this.router = e),
          (this.injector = i),
          (this.preloadingStrategy = o),
          (this.loader = s);
      }
      setUpPreloading() {
        this.subscription = this.router.events
          .pipe(
            Z((e) => e instanceof k),
            te(() => this.preload()),
          )
          .subscribe(() => {});
      }
      preload() {
        return this.processRoutes(this.injector, this.router.config);
      }
      ngOnDestroy() {
        this.subscription && this.subscription.unsubscribe();
      }
      processRoutes(e, n) {
        let i = [];
        for (let o of n) {
          o.providers &&
            !o._injector &&
            (o._injector = wt(o.providers, e, `Route: ${o.path}`));
          let s = o._injector ?? e,
            u = o._loadedInjector ?? s;
          ((o.loadChildren && !o._loadedRoutes && o.canLoad === void 0) ||
            (o.loadComponent && !o._loadedComponent)) &&
            i.push(this.preloadConfig(s, o)),
            (o.children || o._loadedRoutes) &&
              i.push(this.processRoutes(u, o.children ?? o._loadedRoutes));
        }
        return A(i).pipe(ft());
      }
      preloadConfig(e, n) {
        return this.preloadingStrategy.preload(n, () => {
          let i;
          n.loadChildren && n.canLoad === void 0
            ? (i = this.loader.loadChildren(e, n))
            : (i = d(null));
          let o = i.pipe(
            D((s) =>
              s === null
                ? d(void 0)
                : ((n._loadedRoutes = s.routes),
                  (n._loadedInjector = s.injector),
                  this.processRoutes(s.injector ?? e, s.routes)),
            ),
          );
          if (n.loadComponent && !n._loadedComponent) {
            let s = this.loader.loadComponent(n);
            return A([o, s]).pipe(ft());
          } else return o;
        });
      }
      static ɵfac = function (n) {
        return new (n || t)(H(Q), H(Ve), H(me), H(ut), H(or));
      };
      static ɵprov = S({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })(),
  Nn = new M(""),
  Ao = (() => {
    class t {
      urlSerializer;
      transitions;
      viewportScroller;
      zone;
      options;
      routerEventsSubscription;
      scrollEventsSubscription;
      lastId = 0;
      lastSource = "imperative";
      restoredId = 0;
      store = {};
      constructor(e, n, i, o, s = {}) {
        (this.urlSerializer = e),
          (this.transitions = n),
          (this.viewportScroller = i),
          (this.zone = o),
          (this.options = s),
          (s.scrollPositionRestoration ||= "disabled"),
          (s.anchorScrolling ||= "disabled");
      }
      init() {
        this.options.scrollPositionRestoration !== "disabled" &&
          this.viewportScroller.setHistoryScrollRestoration("manual"),
          (this.routerEventsSubscription = this.createScrollEvents()),
          (this.scrollEventsSubscription = this.consumeScrollEvents());
      }
      createScrollEvents() {
        return this.transitions.events.subscribe((e) => {
          e instanceof he
            ? ((this.store[this.lastId] =
                this.viewportScroller.getScrollPosition()),
              (this.lastSource = e.navigationTrigger),
              (this.restoredId = e.restoredState
                ? e.restoredState.navigationId
                : 0))
            : e instanceof k
              ? ((this.lastId = e.id),
                this.scheduleScrollEvent(
                  e,
                  this.urlSerializer.parse(e.urlAfterRedirects).fragment,
                ))
              : e instanceof W &&
                e.code === Je.IgnoredSameUrlNavigation &&
                ((this.lastSource = void 0),
                (this.restoredId = 0),
                this.scheduleScrollEvent(
                  e,
                  this.urlSerializer.parse(e.url).fragment,
                ));
        });
      }
      consumeScrollEvents() {
        return this.transitions.events.subscribe((e) => {
          e instanceof tt &&
            (e.position
              ? this.options.scrollPositionRestoration === "top"
                ? this.viewportScroller.scrollToPosition([0, 0])
                : this.options.scrollPositionRestoration === "enabled" &&
                  this.viewportScroller.scrollToPosition(e.position)
              : e.anchor && this.options.anchorScrolling === "enabled"
                ? this.viewportScroller.scrollToAnchor(e.anchor)
                : this.options.scrollPositionRestoration !== "disabled" &&
                  this.viewportScroller.scrollToPosition([0, 0]));
        });
      }
      scheduleScrollEvent(e, n) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => {
            this.zone.run(() => {
              this.transitions.events.next(
                new tt(
                  e,
                  this.lastSource === "popstate"
                    ? this.store[this.restoredId]
                    : null,
                  n,
                ),
              );
            });
          }, 0);
        });
      }
      ngOnDestroy() {
        this.routerEventsSubscription?.unsubscribe(),
          this.scrollEventsSubscription?.unsubscribe();
      }
      static ɵfac = function (n) {
        Tr();
      };
      static ɵprov = S({ token: t, factory: t.ɵfac });
    }
    return t;
  })();
function hs(t, ...r) {
  return Sr([
    { provide: Pe, multi: !0, useValue: t },
    [],
    { provide: G, useFactory: $n, deps: [Q] },
    { provide: At, multi: !0, useFactory: Ln },
    r.map((e) => e.ɵproviders),
  ]);
}
function $n(t) {
  return t.routerState.root;
}
function ze(t, r) {
  return { ɵkind: t, ɵproviders: r };
}
function Ln() {
  let t = f(St);
  return (r) => {
    let e = t.get($r);
    if (r !== e.components[0]) return;
    let n = t.get(Q),
      i = t.get(kn);
    t.get(ur) === 1 && n.initialNavigation(),
      t.get(_n, null, mt.Optional)?.setUpPreloading(),
      t.get(Nn, null, mt.Optional)?.init(),
      n.resetRootComponentType(e.componentTypes[0]),
      i.closed || (i.next(), i.complete(), i.unsubscribe());
  };
}
var kn = new M("", { factory: () => new B() }),
  ur = new M("", { providedIn: "root", factory: () => 1 });
function Do() {
  return ze(2, [
    { provide: ur, useValue: 0 },
    {
      provide: It,
      multi: !0,
      deps: [St],
      useFactory: (r) => {
        let e = r.get(qr, Promise.resolve());
        return () =>
          e.then(
            () =>
              new Promise((n) => {
                let i = r.get(Q),
                  o = r.get(kn);
                jn(i, () => {
                  n(!0);
                }),
                  (r.get(ar).afterPreactivation = () => (
                    n(!0), o.closed ? d(void 0) : o
                  )),
                  i.initialNavigation();
              }),
          );
      },
    },
  ]);
}
function Mo() {
  return ze(3, [
    {
      provide: It,
      multi: !0,
      useFactory: () => {
        let r = f(Q);
        return () => {
          r.setUpLocationChangeListener();
        };
      },
    },
    { provide: ur, useValue: 2 },
  ]);
}
var _n = new M("");
function Oo(t) {
  return ze(0, [
    { provide: _n, useExisting: Io },
    { provide: ut, useExisting: t },
  ]);
}
function To() {
  return ze(8, [Yr, { provide: ct, useExisting: Yr }]);
}
function Uo(t) {
  let r = [
    { provide: Un, useValue: po },
    {
      provide: En,
      useValue: l({ skipNextTransition: !!t?.skipInitialTransition }, t),
    },
  ];
  return ze(9, r);
}
var Eo = [
    Se,
    { provide: Ne, useClass: le },
    Q,
    Le,
    { provide: G, useFactory: $n, deps: [Q] },
    or,
    [],
  ],
  ds = (() => {
    class t {
      constructor() {}
      static forRoot(e, n) {
        return {
          ngModule: t,
          providers: [
            Eo,
            [],
            { provide: Pe, multi: !0, useValue: e },
            [],
            n?.errorHandler ? { provide: xn, useValue: n.errorHandler } : [],
            { provide: _e, useValue: n || {} },
            n?.useHash ? Po() : jo(),
            xo(),
            n?.preloadingStrategy ? Oo(n.preloadingStrategy).ɵproviders : [],
            n?.initialNavigation ? No(n) : [],
            n?.bindToComponentInputs ? To().ɵproviders : [],
            n?.enableViewTransitions ? Uo().ɵproviders : [],
            $o(),
          ],
        };
      }
      static forChild(e) {
        return {
          ngModule: t,
          providers: [{ provide: Pe, multi: !0, useValue: e }],
        };
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵmod = Pr({ type: t });
      static ɵinj = yr({});
    }
    return t;
  })();
function xo() {
  return {
    provide: Nn,
    useFactory: () => {
      let t = f(Hr),
        r = f(Ct),
        e = f(_e),
        n = f(ar),
        i = f(Ne);
      return (
        e.scrollOffset && t.setOffset(e.scrollOffset), new Ao(i, n, t, r, e)
      );
    },
  };
}
function Po() {
  return { provide: Re, useClass: Vr };
}
function jo() {
  return { provide: Re, useClass: Br };
}
function No(t) {
  return [
    t.initialNavigation === "disabled" ? Mo().ɵproviders : [],
    t.initialNavigation === "enabledBlocking" ? Do().ɵproviders : [],
  ];
}
var tn = new M("");
function $o() {
  return [
    { provide: tn, useFactory: Ln },
    { provide: At, multi: !0, useExisting: tn },
  ];
}
export { G as a, mi as b, Q as c, ls as d, hs as e, ds as f };
