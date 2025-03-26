import { a as fn } from "./chunk-22AXCRX7.js";
import { a as dn } from "./chunk-5QNQV3N7.js";
import "./chunk-2PQBQFV5.js";
import {
  a as E,
  b as G,
  c as cn,
  d as rt,
  e as ye,
  f as st,
  g as xe,
  i as un,
} from "./chunk-GTDEETYW.js";
import "./chunk-UD6YS3BW.js";
import {
  b as sn,
  c as ge,
  d as on,
  e as an,
  f as ln,
} from "./chunk-E5QSSROS.js";
import { a as nn, b as rn } from "./chunk-6GCQ5O75.js";
import { d as tn } from "./chunk-6FEKEJIW.js";
import {
  $a as M,
  Aa as Vt,
  Ab as Oe,
  Bb as $t,
  Db as m,
  Dc as Zt,
  Eb as g,
  Ec as Jt,
  Fb as A,
  Fc as Ie,
  G as Kt,
  Ha as it,
  Hc as en,
  Ib as pe,
  Jc as he,
  Lb as ie,
  Mb as Q,
  Vb as jt,
  Wb as S,
  Xb as Se,
  Yb as De,
  a as Ae,
  aa as T,
  c as zt,
  ca as Ne,
  db as Qt,
  dc as Ut,
  e as qt,
  ec as Wt,
  fb as Z,
  gc as Gt,
  ha as ke,
  hc as Ht,
  kc as Yt,
  mb as me,
  oa as de,
  pa as fe,
  rb as V,
  wa as Bt,
  wc as Xt,
  yb as L,
} from "./chunk-4KGF3EVT.js";
function mn(r) {
  return new T(3e3, !1);
}
function Wn() {
  return new T(3100, !1);
}
function Gn() {
  return new T(3101, !1);
}
function Hn(r) {
  return new T(3001, !1);
}
function Yn(r) {
  return new T(3003, !1);
}
function Xn(r) {
  return new T(3004, !1);
}
function Zn(r, e) {
  return new T(3005, !1);
}
function Jn() {
  return new T(3006, !1);
}
function ei() {
  return new T(3007, !1);
}
function ti(r, e) {
  return new T(3008, !1);
}
function ni(r) {
  return new T(3002, !1);
}
function ii(r, e, t, n, i) {
  return new T(3010, !1);
}
function ri() {
  return new T(3011, !1);
}
function si() {
  return new T(3012, !1);
}
function oi() {
  return new T(3200, !1);
}
function ai() {
  return new T(3202, !1);
}
function li() {
  return new T(3013, !1);
}
function ci(r) {
  return new T(3014, !1);
}
function ui(r) {
  return new T(3015, !1);
}
function di(r) {
  return new T(3016, !1);
}
function fi(r, e) {
  return new T(3404, !1);
}
function mi(r) {
  return new T(3502, !1);
}
function pi(r) {
  return new T(3503, !1);
}
function hi() {
  return new T(3300, !1);
}
function gi(r) {
  return new T(3504, !1);
}
function yi(r) {
  return new T(3301, !1);
}
function _i(r, e) {
  return new T(3302, !1);
}
function vi(r) {
  return new T(3303, !1);
}
function Si(r, e) {
  return new T(3400, !1);
}
function bi(r) {
  return new T(3401, !1);
}
function Ei(r) {
  return new T(3402, !1);
}
function wi(r, e) {
  return new T(3505, !1);
}
function J(r) {
  switch (r.length) {
    case 0:
      return new ye();
    case 1:
      return r[0];
    default:
      return new st(r);
  }
}
function Mn(r, e, t = new Map(), n = new Map()) {
  let i = [],
    s = [],
    o = -1,
    a = null;
  if (
    (e.forEach((l) => {
      let c = l.get("offset"),
        d = c == o,
        u = (d && a) || new Map();
      l.forEach((b, v) => {
        let p = v,
          _ = b;
        if (v !== "offset")
          switch (((p = r.normalizePropertyName(p, i)), _)) {
            case xe:
              _ = t.get(v);
              break;
            case G:
              _ = n.get(v);
              break;
            default:
              _ = r.normalizeStyleValue(v, p, _, i);
              break;
          }
        u.set(p, _);
      }),
        d || s.push(u),
        (a = u),
        (o = c);
    }),
    i.length)
  )
    throw mi(i);
  return s;
}
function Mt(r, e, t, n) {
  switch (e) {
    case "start":
      r.onStart(() => n(t && ot(t, "start", r)));
      break;
    case "done":
      r.onDone(() => n(t && ot(t, "done", r)));
      break;
    case "destroy":
      r.onDestroy(() => n(t && ot(t, "destroy", r)));
      break;
  }
}
function ot(r, e, t) {
  let n = t.totalTime,
    i = !!t.disabled,
    s = At(
      r.element,
      r.triggerName,
      r.fromState,
      r.toState,
      e || r.phaseName,
      n ?? r.totalTime,
      i,
    ),
    o = r._data;
  return o != null && (s._data = o), s;
}
function At(r, e, t, n, i = "", s = 0, o) {
  return {
    element: r,
    triggerName: e,
    fromState: t,
    toState: n,
    phaseName: i,
    totalTime: s,
    disabled: !!o,
  };
}
function K(r, e, t) {
  let n = r.get(e);
  return n || r.set(e, (n = t)), n;
}
function pn(r) {
  let e = r.indexOf(":"),
    t = r.substring(1, e),
    n = r.slice(e + 1);
  return [t, n];
}
var Ti = typeof document > "u" ? null : document.documentElement;
function Nt(r) {
  let e = r.parentNode || r.host || null;
  return e === Ti ? null : e;
}
function Ci(r) {
  return r.substring(1, 6) == "ebkit";
}
var re = null,
  hn = !1;
function Pi(r) {
  re ||
    ((re = Mi() || {}), (hn = re.style ? "WebkitAppearance" in re.style : !1));
  let e = !0;
  return (
    re.style &&
      !Ci(r) &&
      ((e = r in re.style),
      !e &&
        hn &&
        (e = "Webkit" + r.charAt(0).toUpperCase() + r.slice(1) in re.style)),
    e
  );
}
function Mi() {
  return typeof document < "u" ? document.body : null;
}
function An(r, e) {
  for (; e; ) {
    if (e === r) return !0;
    e = Nt(e);
  }
  return !1;
}
function Nn(r, e, t) {
  if (t) return Array.from(r.querySelectorAll(e));
  let n = r.querySelector(e);
  return n ? [n] : [];
}
var kt = (() => {
    class r {
      validateStyleProperty(t) {
        return Pi(t);
      }
      containsElement(t, n) {
        return An(t, n);
      }
      getParentElement(t) {
        return Nt(t);
      }
      query(t, n, i) {
        return Nn(t, n, i);
      }
      computeStyle(t, n, i) {
        return i || "";
      }
      animate(t, n, i, s, o, a = [], l) {
        return new ye(i, s);
      }
      static ɵfac = function (n) {
        return new (n || r)();
      };
      static ɵprov = Ne({ token: r, factory: r.ɵfac });
    }
    return r;
  })(),
  ae = class {
    static NOOP = new kt();
  },
  le = class {};
var Ai = 1e3,
  kn = "{{",
  Ni = "}}",
  On = "ng-enter",
  ft = "ng-leave",
  Re = "ng-trigger",
  Ke = ".ng-trigger",
  gn = "ng-animating",
  mt = ".ng-animating";
function Y(r) {
  if (typeof r == "number") return r;
  let e = r.match(/^(-?[\.\d]+)(m?s)/);
  return !e || e.length < 2 ? 0 : pt(parseFloat(e[1]), e[2]);
}
function pt(r, e) {
  switch (e) {
    case "s":
      return r * Ai;
    default:
      return r;
  }
}
function Be(r, e, t) {
  return r.hasOwnProperty("duration") ? r : ki(r, e, t);
}
function ki(r, e, t) {
  let n =
      /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i,
    i,
    s = 0,
    o = "";
  if (typeof r == "string") {
    let a = r.match(n);
    if (a === null) return e.push(mn(r)), { duration: 0, delay: 0, easing: "" };
    i = pt(parseFloat(a[1]), a[2]);
    let l = a[3];
    l != null && (s = pt(parseFloat(l), a[4]));
    let c = a[5];
    c && (o = c);
  } else i = r;
  if (!t) {
    let a = !1,
      l = e.length;
    i < 0 && (e.push(Wn()), (a = !0)),
      s < 0 && (e.push(Gn()), (a = !0)),
      a && e.splice(l, 0, mn(r));
  }
  return { duration: i, delay: s, easing: o };
}
function Oi(r) {
  return r.length
    ? r[0] instanceof Map
      ? r
      : r.map((e) => new Map(Object.entries(e)))
    : [];
}
function H(r, e, t) {
  e.forEach((n, i) => {
    let s = Ot(i);
    t && !t.has(i) && t.set(i, r.style[s]), (r.style[s] = n);
  });
}
function oe(r, e) {
  e.forEach((t, n) => {
    let i = Ot(n);
    r.style[i] = "";
  });
}
function be(r) {
  return Array.isArray(r) ? (r.length == 1 ? r[0] : cn(r)) : r;
}
function Di(r, e, t) {
  let n = e.params || {},
    i = Dn(r);
  i.length &&
    i.forEach((s) => {
      n.hasOwnProperty(s) || t.push(Hn(s));
    });
}
var ht = new RegExp(`${kn}\\s*(.+?)\\s*${Ni}`, "g");
function Dn(r) {
  let e = [];
  if (typeof r == "string") {
    let t;
    for (; (t = ht.exec(r)); ) e.push(t[1]);
    ht.lastIndex = 0;
  }
  return e;
}
function we(r, e, t) {
  let n = `${r}`,
    i = n.replace(ht, (s, o) => {
      let a = e[o];
      return a == null && (t.push(Yn(o)), (a = "")), a.toString();
    });
  return i == n ? r : i;
}
var Ii = /-+([a-z0-9])/g;
function Ot(r) {
  return r.replace(Ii, (...e) => e[1].toUpperCase());
}
function xi(r, e) {
  return r === 0 || e === 0;
}
function Ri(r, e, t) {
  if (t.size && e.length) {
    let n = e[0],
      i = [];
    if (
      (t.forEach((s, o) => {
        n.has(o) || i.push(o), n.set(o, s);
      }),
      i.length)
    )
      for (let s = 1; s < e.length; s++) {
        let o = e[s];
        i.forEach((a) => o.set(a, Dt(r, a)));
      }
  }
  return e;
}
function q(r, e, t) {
  switch (e.type) {
    case E.Trigger:
      return r.visitTrigger(e, t);
    case E.State:
      return r.visitState(e, t);
    case E.Transition:
      return r.visitTransition(e, t);
    case E.Sequence:
      return r.visitSequence(e, t);
    case E.Group:
      return r.visitGroup(e, t);
    case E.Animate:
      return r.visitAnimate(e, t);
    case E.Keyframes:
      return r.visitKeyframes(e, t);
    case E.Style:
      return r.visitStyle(e, t);
    case E.Reference:
      return r.visitReference(e, t);
    case E.AnimateChild:
      return r.visitAnimateChild(e, t);
    case E.AnimateRef:
      return r.visitAnimateRef(e, t);
    case E.Query:
      return r.visitQuery(e, t);
    case E.Stagger:
      return r.visitStagger(e, t);
    default:
      throw Xn(e.type);
  }
}
function Dt(r, e) {
  return window.getComputedStyle(r)[e];
}
var Li = new Set([
    "width",
    "height",
    "minWidth",
    "minHeight",
    "maxWidth",
    "maxHeight",
    "left",
    "top",
    "bottom",
    "right",
    "fontSize",
    "outlineWidth",
    "outlineOffset",
    "paddingTop",
    "paddingLeft",
    "paddingBottom",
    "paddingRight",
    "marginTop",
    "marginLeft",
    "marginBottom",
    "marginRight",
    "borderRadius",
    "borderWidth",
    "borderTopWidth",
    "borderLeftWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "textIndent",
    "perspective",
  ]),
  Ve = class extends le {
    normalizePropertyName(e, t) {
      return Ot(e);
    }
    normalizeStyleValue(e, t, n, i) {
      let s = "",
        o = n.toString().trim();
      if (Li.has(t) && n !== 0 && n !== "0")
        if (typeof n == "number") s = "px";
        else {
          let a = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
          a && a[1].length == 0 && i.push(Zn(e, n));
        }
      return o + s;
    }
  };
var Qe = "*";
function Fi(r, e) {
  let t = [];
  return (
    typeof r == "string"
      ? r.split(/\s*,\s*/).forEach((n) => zi(n, t, e))
      : t.push(r),
    t
  );
}
function zi(r, e, t) {
  if (r[0] == ":") {
    let l = qi(r, t);
    if (typeof l == "function") {
      e.push(l);
      return;
    }
    r = l;
  }
  let n = r.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (n == null || n.length < 4) return t.push(ui(r)), e;
  let i = n[1],
    s = n[2],
    o = n[3];
  e.push(yn(i, o));
  let a = i == Qe && o == Qe;
  s[0] == "<" && !a && e.push(yn(o, i));
}
function qi(r, e) {
  switch (r) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (t, n) => parseFloat(n) > parseFloat(t);
    case ":decrement":
      return (t, n) => parseFloat(n) < parseFloat(t);
    default:
      return e.push(di(r)), "* => *";
  }
}
var Le = new Set(["true", "1"]),
  Fe = new Set(["false", "0"]);
function yn(r, e) {
  let t = Le.has(r) || Fe.has(r),
    n = Le.has(e) || Fe.has(e);
  return (i, s) => {
    let o = r == Qe || r == i,
      a = e == Qe || e == s;
    return (
      !o && t && typeof i == "boolean" && (o = i ? Le.has(r) : Fe.has(r)),
      !a && n && typeof s == "boolean" && (a = s ? Le.has(e) : Fe.has(e)),
      o && a
    );
  };
}
var In = ":self",
  Ki = new RegExp(`s*${In}s*,?`, "g");
function xn(r, e, t, n) {
  return new gt(r).build(e, t, n);
}
var _n = "",
  gt = class {
    _driver;
    constructor(e) {
      this._driver = e;
    }
    build(e, t, n) {
      let i = new yt(t);
      return this._resetContextStyleTimingState(i), q(this, be(e), i);
    }
    _resetContextStyleTimingState(e) {
      (e.currentQuerySelector = _n),
        (e.collectedStyles = new Map()),
        e.collectedStyles.set(_n, new Map()),
        (e.currentTime = 0);
    }
    visitTrigger(e, t) {
      let n = (t.queryCount = 0),
        i = (t.depCount = 0),
        s = [],
        o = [];
      return (
        e.name.charAt(0) == "@" && t.errors.push(Jn()),
        e.definitions.forEach((a) => {
          if ((this._resetContextStyleTimingState(t), a.type == E.State)) {
            let l = a,
              c = l.name;
            c
              .toString()
              .split(/\s*,\s*/)
              .forEach((d) => {
                (l.name = d), s.push(this.visitState(l, t));
              }),
              (l.name = c);
          } else if (a.type == E.Transition) {
            let l = this.visitTransition(a, t);
            (n += l.queryCount), (i += l.depCount), o.push(l);
          } else t.errors.push(ei());
        }),
        {
          type: E.Trigger,
          name: e.name,
          states: s,
          transitions: o,
          queryCount: n,
          depCount: i,
          options: null,
        }
      );
    }
    visitState(e, t) {
      let n = this.visitStyle(e.styles, t),
        i = (e.options && e.options.params) || null;
      if (n.containsDynamicStyles) {
        let s = new Set(),
          o = i || {};
        n.styles.forEach((a) => {
          a instanceof Map &&
            a.forEach((l) => {
              Dn(l).forEach((c) => {
                o.hasOwnProperty(c) || s.add(c);
              });
            });
        }),
          s.size && t.errors.push(ti(e.name, [...s.values()]));
      }
      return {
        type: E.State,
        name: e.name,
        style: n,
        options: i ? { params: i } : null,
      };
    }
    visitTransition(e, t) {
      (t.queryCount = 0), (t.depCount = 0);
      let n = q(this, be(e.animation), t),
        i = Fi(e.expr, t.errors);
      return {
        type: E.Transition,
        matchers: i,
        animation: n,
        queryCount: t.queryCount,
        depCount: t.depCount,
        options: se(e.options),
      };
    }
    visitSequence(e, t) {
      return {
        type: E.Sequence,
        steps: e.steps.map((n) => q(this, n, t)),
        options: se(e.options),
      };
    }
    visitGroup(e, t) {
      let n = t.currentTime,
        i = 0,
        s = e.steps.map((o) => {
          t.currentTime = n;
          let a = q(this, o, t);
          return (i = Math.max(i, t.currentTime)), a;
        });
      return (
        (t.currentTime = i), { type: E.Group, steps: s, options: se(e.options) }
      );
    }
    visitAnimate(e, t) {
      let n = $i(e.timings, t.errors);
      t.currentAnimateTimings = n;
      let i,
        s = e.styles ? e.styles : rt({});
      if (s.type == E.Keyframes) i = this.visitKeyframes(s, t);
      else {
        let o = e.styles,
          a = !1;
        if (!o) {
          a = !0;
          let c = {};
          n.easing && (c.easing = n.easing), (o = rt(c));
        }
        t.currentTime += n.duration + n.delay;
        let l = this.visitStyle(o, t);
        (l.isEmptyStep = a), (i = l);
      }
      return (
        (t.currentAnimateTimings = null),
        { type: E.Animate, timings: n, style: i, options: null }
      );
    }
    visitStyle(e, t) {
      let n = this._makeStyleAst(e, t);
      return this._validateStyleAst(n, t), n;
    }
    _makeStyleAst(e, t) {
      let n = [],
        i = Array.isArray(e.styles) ? e.styles : [e.styles];
      for (let a of i)
        typeof a == "string"
          ? a === G
            ? n.push(a)
            : t.errors.push(ni(a))
          : n.push(new Map(Object.entries(a)));
      let s = !1,
        o = null;
      return (
        n.forEach((a) => {
          if (
            a instanceof Map &&
            (a.has("easing") && ((o = a.get("easing")), a.delete("easing")), !s)
          ) {
            for (let l of a.values())
              if (l.toString().indexOf(kn) >= 0) {
                s = !0;
                break;
              }
          }
        }),
        {
          type: E.Style,
          styles: n,
          easing: o,
          offset: e.offset,
          containsDynamicStyles: s,
          options: null,
        }
      );
    }
    _validateStyleAst(e, t) {
      let n = t.currentAnimateTimings,
        i = t.currentTime,
        s = t.currentTime;
      n && s > 0 && (s -= n.duration + n.delay),
        e.styles.forEach((o) => {
          typeof o != "string" &&
            o.forEach((a, l) => {
              let c = t.collectedStyles.get(t.currentQuerySelector),
                d = c.get(l),
                u = !0;
              d &&
                (s != i &&
                  s >= d.startTime &&
                  i <= d.endTime &&
                  (t.errors.push(ii(l, d.startTime, d.endTime, s, i)),
                  (u = !1)),
                (s = d.startTime)),
                u && c.set(l, { startTime: s, endTime: i }),
                t.options && Di(a, t.options, t.errors);
            });
        });
    }
    visitKeyframes(e, t) {
      let n = { type: E.Keyframes, styles: [], options: null };
      if (!t.currentAnimateTimings) return t.errors.push(ri()), n;
      let i = 1,
        s = 0,
        o = [],
        a = !1,
        l = !1,
        c = 0,
        d = e.steps.map((N) => {
          let k = this._makeStyleAst(N, t),
            x = k.offset != null ? k.offset : Qi(k.styles),
            D = 0;
          return (
            x != null && (s++, (D = k.offset = x)),
            (l = l || D < 0 || D > 1),
            (a = a || D < c),
            (c = D),
            o.push(D),
            k
          );
        });
      l && t.errors.push(si()), a && t.errors.push(oi());
      let u = e.steps.length,
        b = 0;
      s > 0 && s < u ? t.errors.push(ai()) : s == 0 && (b = i / (u - 1));
      let v = u - 1,
        p = t.currentTime,
        _ = t.currentAnimateTimings,
        C = _.duration;
      return (
        d.forEach((N, k) => {
          let x = b > 0 ? (k == v ? 1 : b * k) : o[k],
            D = x * C;
          (t.currentTime = p + _.delay + D),
            (_.duration = D),
            this._validateStyleAst(N, t),
            (N.offset = x),
            n.styles.push(N);
        }),
        n
      );
    }
    visitReference(e, t) {
      return {
        type: E.Reference,
        animation: q(this, be(e.animation), t),
        options: se(e.options),
      };
    }
    visitAnimateChild(e, t) {
      return t.depCount++, { type: E.AnimateChild, options: se(e.options) };
    }
    visitAnimateRef(e, t) {
      return {
        type: E.AnimateRef,
        animation: this.visitReference(e.animation, t),
        options: se(e.options),
      };
    }
    visitQuery(e, t) {
      let n = t.currentQuerySelector,
        i = e.options || {};
      t.queryCount++, (t.currentQuery = e);
      let [s, o] = Bi(e.selector);
      (t.currentQuerySelector = n.length ? n + " " + s : s),
        K(t.collectedStyles, t.currentQuerySelector, new Map());
      let a = q(this, be(e.animation), t);
      return (
        (t.currentQuery = null),
        (t.currentQuerySelector = n),
        {
          type: E.Query,
          selector: s,
          limit: i.limit || 0,
          optional: !!i.optional,
          includeSelf: o,
          animation: a,
          originalSelector: e.selector,
          options: se(e.options),
        }
      );
    }
    visitStagger(e, t) {
      t.currentQuery || t.errors.push(li());
      let n =
        e.timings === "full"
          ? { duration: 0, delay: 0, easing: "full" }
          : Be(e.timings, t.errors, !0);
      return {
        type: E.Stagger,
        animation: q(this, be(e.animation), t),
        timings: n,
        options: null,
      };
    }
  };
function Bi(r) {
  let e = !!r.split(/\s*,\s*/).find((t) => t == In);
  return (
    e && (r = r.replace(Ki, "")),
    (r = r
      .replace(/@\*/g, Ke)
      .replace(/@\w+/g, (t) => Ke + "-" + t.slice(1))
      .replace(/:animating/g, mt)),
    [r, e]
  );
}
function Vi(r) {
  return r ? Ae({}, r) : null;
}
var yt = class {
  errors;
  queryCount = 0;
  depCount = 0;
  currentTransition = null;
  currentQuery = null;
  currentQuerySelector = null;
  currentAnimateTimings = null;
  currentTime = 0;
  collectedStyles = new Map();
  options = null;
  unsupportedCSSPropertiesFound = new Set();
  constructor(e) {
    this.errors = e;
  }
};
function Qi(r) {
  if (typeof r == "string") return null;
  let e = null;
  if (Array.isArray(r))
    r.forEach((t) => {
      if (t instanceof Map && t.has("offset")) {
        let n = t;
        (e = parseFloat(n.get("offset"))), n.delete("offset");
      }
    });
  else if (r instanceof Map && r.has("offset")) {
    let t = r;
    (e = parseFloat(t.get("offset"))), t.delete("offset");
  }
  return e;
}
function $i(r, e) {
  if (r.hasOwnProperty("duration")) return r;
  if (typeof r == "number") {
    let s = Be(r, e).duration;
    return at(s, 0, "");
  }
  let t = r;
  if (t.split(/\s+/).some((s) => s.charAt(0) == "{" && s.charAt(1) == "{")) {
    let s = at(0, 0, "");
    return (s.dynamic = !0), (s.strValue = t), s;
  }
  let i = Be(t, e);
  return at(i.duration, i.delay, i.easing);
}
function se(r) {
  return (
    r ? ((r = Ae({}, r)), r.params && (r.params = Vi(r.params))) : (r = {}), r
  );
}
function at(r, e, t) {
  return { duration: r, delay: e, easing: t };
}
function It(r, e, t, n, i, s, o = null, a = !1) {
  return {
    type: 1,
    element: r,
    keyframes: e,
    preStyleProps: t,
    postStyleProps: n,
    duration: i,
    delay: s,
    totalTime: i + s,
    easing: o,
    subTimeline: a,
  };
}
var Te = class {
    _map = new Map();
    get(e) {
      return this._map.get(e) || [];
    }
    append(e, t) {
      let n = this._map.get(e);
      n || this._map.set(e, (n = [])), n.push(...t);
    }
    has(e) {
      return this._map.has(e);
    }
    clear() {
      this._map.clear();
    }
  },
  ji = 1,
  Ui = ":enter",
  Wi = new RegExp(Ui, "g"),
  Gi = ":leave",
  Hi = new RegExp(Gi, "g");
function Rn(r, e, t, n, i, s = new Map(), o = new Map(), a, l, c = []) {
  return new _t().buildKeyframes(r, e, t, n, i, s, o, a, l, c);
}
var _t = class {
    buildKeyframes(e, t, n, i, s, o, a, l, c, d = []) {
      c = c || new Te();
      let u = new vt(e, t, c, i, s, d, []);
      u.options = l;
      let b = l.delay ? Y(l.delay) : 0;
      u.currentTimeline.delayNextStep(b),
        u.currentTimeline.setStyles([o], null, u.errors, l),
        q(this, n, u);
      let v = u.timelines.filter((p) => p.containsAnimation());
      if (v.length && a.size) {
        let p;
        for (let _ = v.length - 1; _ >= 0; _--) {
          let C = v[_];
          if (C.element === t) {
            p = C;
            break;
          }
        }
        p &&
          !p.allowOnlyTimelineStyles() &&
          p.setStyles([a], null, u.errors, l);
      }
      return v.length
        ? v.map((p) => p.buildKeyframes())
        : [It(t, [], [], [], 0, b, "", !1)];
    }
    visitTrigger(e, t) {}
    visitState(e, t) {}
    visitTransition(e, t) {}
    visitAnimateChild(e, t) {
      let n = t.subInstructions.get(t.element);
      if (n) {
        let i = t.createSubContext(e.options),
          s = t.currentTimeline.currentTime,
          o = this._visitSubInstructions(n, i, i.options);
        s != o && t.transformIntoNewTimeline(o);
      }
      t.previousNode = e;
    }
    visitAnimateRef(e, t) {
      let n = t.createSubContext(e.options);
      n.transformIntoNewTimeline(),
        this._applyAnimationRefDelays([e.options, e.animation.options], t, n),
        this.visitReference(e.animation, n),
        t.transformIntoNewTimeline(n.currentTimeline.currentTime),
        (t.previousNode = e);
    }
    _applyAnimationRefDelays(e, t, n) {
      for (let i of e) {
        let s = i?.delay;
        if (s) {
          let o =
            typeof s == "number" ? s : Y(we(s, i?.params ?? {}, t.errors));
          n.delayNextStep(o);
        }
      }
    }
    _visitSubInstructions(e, t, n) {
      let s = t.currentTimeline.currentTime,
        o = n.duration != null ? Y(n.duration) : null,
        a = n.delay != null ? Y(n.delay) : null;
      return (
        o !== 0 &&
          e.forEach((l) => {
            let c = t.appendInstructionToTimeline(l, o, a);
            s = Math.max(s, c.duration + c.delay);
          }),
        s
      );
    }
    visitReference(e, t) {
      t.updateOptions(e.options, !0),
        q(this, e.animation, t),
        (t.previousNode = e);
    }
    visitSequence(e, t) {
      let n = t.subContextCount,
        i = t,
        s = e.options;
      if (
        s &&
        (s.params || s.delay) &&
        ((i = t.createSubContext(s)),
        i.transformIntoNewTimeline(),
        s.delay != null)
      ) {
        i.previousNode.type == E.Style &&
          (i.currentTimeline.snapshotCurrentStyles(), (i.previousNode = $e));
        let o = Y(s.delay);
        i.delayNextStep(o);
      }
      e.steps.length &&
        (e.steps.forEach((o) => q(this, o, i)),
        i.currentTimeline.applyStylesToKeyframe(),
        i.subContextCount > n && i.transformIntoNewTimeline()),
        (t.previousNode = e);
    }
    visitGroup(e, t) {
      let n = [],
        i = t.currentTimeline.currentTime,
        s = e.options && e.options.delay ? Y(e.options.delay) : 0;
      e.steps.forEach((o) => {
        let a = t.createSubContext(e.options);
        s && a.delayNextStep(s),
          q(this, o, a),
          (i = Math.max(i, a.currentTimeline.currentTime)),
          n.push(a.currentTimeline);
      }),
        n.forEach((o) => t.currentTimeline.mergeTimelineCollectedStyles(o)),
        t.transformIntoNewTimeline(i),
        (t.previousNode = e);
    }
    _visitTiming(e, t) {
      if (e.dynamic) {
        let n = e.strValue,
          i = t.params ? we(n, t.params, t.errors) : n;
        return Be(i, t.errors);
      } else return { duration: e.duration, delay: e.delay, easing: e.easing };
    }
    visitAnimate(e, t) {
      let n = (t.currentAnimateTimings = this._visitTiming(e.timings, t)),
        i = t.currentTimeline;
      n.delay && (t.incrementTime(n.delay), i.snapshotCurrentStyles());
      let s = e.style;
      s.type == E.Keyframes
        ? this.visitKeyframes(s, t)
        : (t.incrementTime(n.duration),
          this.visitStyle(s, t),
          i.applyStylesToKeyframe()),
        (t.currentAnimateTimings = null),
        (t.previousNode = e);
    }
    visitStyle(e, t) {
      let n = t.currentTimeline,
        i = t.currentAnimateTimings;
      !i && n.hasCurrentStyleProperties() && n.forwardFrame();
      let s = (i && i.easing) || e.easing;
      e.isEmptyStep
        ? n.applyEmptyStep(s)
        : n.setStyles(e.styles, s, t.errors, t.options),
        (t.previousNode = e);
    }
    visitKeyframes(e, t) {
      let n = t.currentAnimateTimings,
        i = t.currentTimeline.duration,
        s = n.duration,
        a = t.createSubContext().currentTimeline;
      (a.easing = n.easing),
        e.styles.forEach((l) => {
          let c = l.offset || 0;
          a.forwardTime(c * s),
            a.setStyles(l.styles, l.easing, t.errors, t.options),
            a.applyStylesToKeyframe();
        }),
        t.currentTimeline.mergeTimelineCollectedStyles(a),
        t.transformIntoNewTimeline(i + s),
        (t.previousNode = e);
    }
    visitQuery(e, t) {
      let n = t.currentTimeline.currentTime,
        i = e.options || {},
        s = i.delay ? Y(i.delay) : 0;
      s &&
        (t.previousNode.type === E.Style ||
          (n == 0 && t.currentTimeline.hasCurrentStyleProperties())) &&
        (t.currentTimeline.snapshotCurrentStyles(), (t.previousNode = $e));
      let o = n,
        a = t.invokeQuery(
          e.selector,
          e.originalSelector,
          e.limit,
          e.includeSelf,
          !!i.optional,
          t.errors,
        );
      t.currentQueryTotal = a.length;
      let l = null;
      a.forEach((c, d) => {
        t.currentQueryIndex = d;
        let u = t.createSubContext(e.options, c);
        s && u.delayNextStep(s),
          c === t.element && (l = u.currentTimeline),
          q(this, e.animation, u),
          u.currentTimeline.applyStylesToKeyframe();
        let b = u.currentTimeline.currentTime;
        o = Math.max(o, b);
      }),
        (t.currentQueryIndex = 0),
        (t.currentQueryTotal = 0),
        t.transformIntoNewTimeline(o),
        l &&
          (t.currentTimeline.mergeTimelineCollectedStyles(l),
          t.currentTimeline.snapshotCurrentStyles()),
        (t.previousNode = e);
    }
    visitStagger(e, t) {
      let n = t.parentContext,
        i = t.currentTimeline,
        s = e.timings,
        o = Math.abs(s.duration),
        a = o * (t.currentQueryTotal - 1),
        l = o * t.currentQueryIndex;
      switch (s.duration < 0 ? "reverse" : s.easing) {
        case "reverse":
          l = a - l;
          break;
        case "full":
          l = n.currentStaggerTime;
          break;
      }
      let d = t.currentTimeline;
      l && d.delayNextStep(l);
      let u = d.currentTime;
      q(this, e.animation, t),
        (t.previousNode = e),
        (n.currentStaggerTime =
          i.currentTime - u + (i.startTime - n.currentTimeline.startTime));
    }
  },
  $e = {},
  vt = class r {
    _driver;
    element;
    subInstructions;
    _enterClassName;
    _leaveClassName;
    errors;
    timelines;
    parentContext = null;
    currentTimeline;
    currentAnimateTimings = null;
    previousNode = $e;
    subContextCount = 0;
    options = {};
    currentQueryIndex = 0;
    currentQueryTotal = 0;
    currentStaggerTime = 0;
    constructor(e, t, n, i, s, o, a, l) {
      (this._driver = e),
        (this.element = t),
        (this.subInstructions = n),
        (this._enterClassName = i),
        (this._leaveClassName = s),
        (this.errors = o),
        (this.timelines = a),
        (this.currentTimeline = l || new je(this._driver, t, 0)),
        a.push(this.currentTimeline);
    }
    get params() {
      return this.options.params;
    }
    updateOptions(e, t) {
      if (!e) return;
      let n = e,
        i = this.options;
      n.duration != null && (i.duration = Y(n.duration)),
        n.delay != null && (i.delay = Y(n.delay));
      let s = n.params;
      if (s) {
        let o = i.params;
        o || (o = this.options.params = {}),
          Object.keys(s).forEach((a) => {
            (!t || !o.hasOwnProperty(a)) && (o[a] = we(s[a], o, this.errors));
          });
      }
    }
    _copyOptions() {
      let e = {};
      if (this.options) {
        let t = this.options.params;
        if (t) {
          let n = (e.params = {});
          Object.keys(t).forEach((i) => {
            n[i] = t[i];
          });
        }
      }
      return e;
    }
    createSubContext(e = null, t, n) {
      let i = t || this.element,
        s = new r(
          this._driver,
          i,
          this.subInstructions,
          this._enterClassName,
          this._leaveClassName,
          this.errors,
          this.timelines,
          this.currentTimeline.fork(i, n || 0),
        );
      return (
        (s.previousNode = this.previousNode),
        (s.currentAnimateTimings = this.currentAnimateTimings),
        (s.options = this._copyOptions()),
        s.updateOptions(e),
        (s.currentQueryIndex = this.currentQueryIndex),
        (s.currentQueryTotal = this.currentQueryTotal),
        (s.parentContext = this),
        this.subContextCount++,
        s
      );
    }
    transformIntoNewTimeline(e) {
      return (
        (this.previousNode = $e),
        (this.currentTimeline = this.currentTimeline.fork(this.element, e)),
        this.timelines.push(this.currentTimeline),
        this.currentTimeline
      );
    }
    appendInstructionToTimeline(e, t, n) {
      let i = {
          duration: t ?? e.duration,
          delay: this.currentTimeline.currentTime + (n ?? 0) + e.delay,
          easing: "",
        },
        s = new St(
          this._driver,
          e.element,
          e.keyframes,
          e.preStyleProps,
          e.postStyleProps,
          i,
          e.stretchStartingKeyframe,
        );
      return this.timelines.push(s), i;
    }
    incrementTime(e) {
      this.currentTimeline.forwardTime(this.currentTimeline.duration + e);
    }
    delayNextStep(e) {
      e > 0 && this.currentTimeline.delayNextStep(e);
    }
    invokeQuery(e, t, n, i, s, o) {
      let a = [];
      if ((i && a.push(this.element), e.length > 0)) {
        (e = e.replace(Wi, "." + this._enterClassName)),
          (e = e.replace(Hi, "." + this._leaveClassName));
        let l = n != 1,
          c = this._driver.query(this.element, e, l);
        n !== 0 &&
          (c = n < 0 ? c.slice(c.length + n, c.length) : c.slice(0, n)),
          a.push(...c);
      }
      return !s && a.length == 0 && o.push(ci(t)), a;
    }
  },
  je = class r {
    _driver;
    element;
    startTime;
    _elementTimelineStylesLookup;
    duration = 0;
    easing = null;
    _previousKeyframe = new Map();
    _currentKeyframe = new Map();
    _keyframes = new Map();
    _styleSummary = new Map();
    _localTimelineStyles = new Map();
    _globalTimelineStyles;
    _pendingStyles = new Map();
    _backFill = new Map();
    _currentEmptyStepKeyframe = null;
    constructor(e, t, n, i) {
      (this._driver = e),
        (this.element = t),
        (this.startTime = n),
        (this._elementTimelineStylesLookup = i),
        this._elementTimelineStylesLookup ||
          (this._elementTimelineStylesLookup = new Map()),
        (this._globalTimelineStyles = this._elementTimelineStylesLookup.get(t)),
        this._globalTimelineStyles ||
          ((this._globalTimelineStyles = this._localTimelineStyles),
          this._elementTimelineStylesLookup.set(t, this._localTimelineStyles)),
        this._loadKeyframe();
    }
    containsAnimation() {
      switch (this._keyframes.size) {
        case 0:
          return !1;
        case 1:
          return this.hasCurrentStyleProperties();
        default:
          return !0;
      }
    }
    hasCurrentStyleProperties() {
      return this._currentKeyframe.size > 0;
    }
    get currentTime() {
      return this.startTime + this.duration;
    }
    delayNextStep(e) {
      let t = this._keyframes.size === 1 && this._pendingStyles.size;
      this.duration || t
        ? (this.forwardTime(this.currentTime + e),
          t && this.snapshotCurrentStyles())
        : (this.startTime += e);
    }
    fork(e, t) {
      return (
        this.applyStylesToKeyframe(),
        new r(
          this._driver,
          e,
          t || this.currentTime,
          this._elementTimelineStylesLookup,
        )
      );
    }
    _loadKeyframe() {
      this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe),
        (this._currentKeyframe = this._keyframes.get(this.duration)),
        this._currentKeyframe ||
          ((this._currentKeyframe = new Map()),
          this._keyframes.set(this.duration, this._currentKeyframe));
    }
    forwardFrame() {
      (this.duration += ji), this._loadKeyframe();
    }
    forwardTime(e) {
      this.applyStylesToKeyframe(), (this.duration = e), this._loadKeyframe();
    }
    _updateStyle(e, t) {
      this._localTimelineStyles.set(e, t),
        this._globalTimelineStyles.set(e, t),
        this._styleSummary.set(e, { time: this.currentTime, value: t });
    }
    allowOnlyTimelineStyles() {
      return this._currentEmptyStepKeyframe !== this._currentKeyframe;
    }
    applyEmptyStep(e) {
      e && this._previousKeyframe.set("easing", e);
      for (let [t, n] of this._globalTimelineStyles)
        this._backFill.set(t, n || G), this._currentKeyframe.set(t, G);
      this._currentEmptyStepKeyframe = this._currentKeyframe;
    }
    setStyles(e, t, n, i) {
      t && this._previousKeyframe.set("easing", t);
      let s = (i && i.params) || {},
        o = Yi(e, this._globalTimelineStyles);
      for (let [a, l] of o) {
        let c = we(l, s, n);
        this._pendingStyles.set(a, c),
          this._localTimelineStyles.has(a) ||
            this._backFill.set(a, this._globalTimelineStyles.get(a) ?? G),
          this._updateStyle(a, c);
      }
    }
    applyStylesToKeyframe() {
      this._pendingStyles.size != 0 &&
        (this._pendingStyles.forEach((e, t) => {
          this._currentKeyframe.set(t, e);
        }),
        this._pendingStyles.clear(),
        this._localTimelineStyles.forEach((e, t) => {
          this._currentKeyframe.has(t) || this._currentKeyframe.set(t, e);
        }));
    }
    snapshotCurrentStyles() {
      for (let [e, t] of this._localTimelineStyles)
        this._pendingStyles.set(e, t), this._updateStyle(e, t);
    }
    getFinalKeyframe() {
      return this._keyframes.get(this.duration);
    }
    get properties() {
      let e = [];
      for (let t in this._currentKeyframe) e.push(t);
      return e;
    }
    mergeTimelineCollectedStyles(e) {
      e._styleSummary.forEach((t, n) => {
        let i = this._styleSummary.get(n);
        (!i || t.time > i.time) && this._updateStyle(n, t.value);
      });
    }
    buildKeyframes() {
      this.applyStylesToKeyframe();
      let e = new Set(),
        t = new Set(),
        n = this._keyframes.size === 1 && this.duration === 0,
        i = [];
      this._keyframes.forEach((a, l) => {
        let c = new Map([...this._backFill, ...a]);
        c.forEach((d, u) => {
          d === xe ? e.add(u) : d === G && t.add(u);
        }),
          n || c.set("offset", l / this.duration),
          i.push(c);
      });
      let s = [...e.values()],
        o = [...t.values()];
      if (n) {
        let a = i[0],
          l = new Map(a);
        a.set("offset", 0), l.set("offset", 1), (i = [a, l]);
      }
      return It(
        this.element,
        i,
        s,
        o,
        this.duration,
        this.startTime,
        this.easing,
        !1,
      );
    }
  },
  St = class extends je {
    keyframes;
    preStyleProps;
    postStyleProps;
    _stretchStartingKeyframe;
    timings;
    constructor(e, t, n, i, s, o, a = !1) {
      super(e, t, o.delay),
        (this.keyframes = n),
        (this.preStyleProps = i),
        (this.postStyleProps = s),
        (this._stretchStartingKeyframe = a),
        (this.timings = {
          duration: o.duration,
          delay: o.delay,
          easing: o.easing,
        });
    }
    containsAnimation() {
      return this.keyframes.length > 1;
    }
    buildKeyframes() {
      let e = this.keyframes,
        { delay: t, duration: n, easing: i } = this.timings;
      if (this._stretchStartingKeyframe && t) {
        let s = [],
          o = n + t,
          a = t / o,
          l = new Map(e[0]);
        l.set("offset", 0), s.push(l);
        let c = new Map(e[0]);
        c.set("offset", vn(a)), s.push(c);
        let d = e.length - 1;
        for (let u = 1; u <= d; u++) {
          let b = new Map(e[u]),
            v = b.get("offset"),
            p = t + v * n;
          b.set("offset", vn(p / o)), s.push(b);
        }
        (n = o), (t = 0), (i = ""), (e = s);
      }
      return It(
        this.element,
        e,
        this.preStyleProps,
        this.postStyleProps,
        n,
        t,
        i,
        !0,
      );
    }
  };
function vn(r, e = 3) {
  let t = Math.pow(10, e - 1);
  return Math.round(r * t) / t;
}
function Yi(r, e) {
  let t = new Map(),
    n;
  return (
    r.forEach((i) => {
      if (i === "*") {
        n ??= e.keys();
        for (let s of n) t.set(s, G);
      } else for (let [s, o] of i) t.set(s, o);
    }),
    t
  );
}
function Sn(r, e, t, n, i, s, o, a, l, c, d, u, b) {
  return {
    type: 0,
    element: r,
    triggerName: e,
    isRemovalTransition: i,
    fromState: t,
    fromStyles: s,
    toState: n,
    toStyles: o,
    timelines: a,
    queriedElements: l,
    preStyleProps: c,
    postStyleProps: d,
    totalTime: u,
    errors: b,
  };
}
var lt = {},
  Ue = class {
    _triggerName;
    ast;
    _stateStyles;
    constructor(e, t, n) {
      (this._triggerName = e), (this.ast = t), (this._stateStyles = n);
    }
    match(e, t, n, i) {
      return Xi(this.ast.matchers, e, t, n, i);
    }
    buildStyles(e, t, n) {
      let i = this._stateStyles.get("*");
      return (
        e !== void 0 && (i = this._stateStyles.get(e?.toString()) || i),
        i ? i.buildStyles(t, n) : new Map()
      );
    }
    build(e, t, n, i, s, o, a, l, c, d) {
      let u = [],
        b = (this.ast.options && this.ast.options.params) || lt,
        v = (a && a.params) || lt,
        p = this.buildStyles(n, v, u),
        _ = (l && l.params) || lt,
        C = this.buildStyles(i, _, u),
        N = new Set(),
        k = new Map(),
        x = new Map(),
        D = i === "void",
        ce = { params: Ln(_, b), delay: this.ast.options?.delay },
        U = d ? [] : Rn(e, t, this.ast.animation, s, o, p, C, ce, c, u),
        R = 0;
      return (
        U.forEach((F) => {
          R = Math.max(F.duration + F.delay, R);
        }),
        u.length
          ? Sn(t, this._triggerName, n, i, D, p, C, [], [], k, x, R, u)
          : (U.forEach((F) => {
              let ee = F.element,
                ue = K(k, ee, new Set());
              F.preStyleProps.forEach((te) => ue.add(te));
              let xt = K(x, ee, new Set());
              F.postStyleProps.forEach((te) => xt.add(te)),
                ee !== t && N.add(ee);
            }),
            Sn(
              t,
              this._triggerName,
              n,
              i,
              D,
              p,
              C,
              U,
              [...N.values()],
              k,
              x,
              R,
            ))
      );
    }
  };
function Xi(r, e, t, n, i) {
  return r.some((s) => s(e, t, n, i));
}
function Ln(r, e) {
  let t = Ae({}, e);
  return (
    Object.entries(r).forEach(([n, i]) => {
      i != null && (t[n] = i);
    }),
    t
  );
}
var bt = class {
  styles;
  defaultParams;
  normalizer;
  constructor(e, t, n) {
    (this.styles = e), (this.defaultParams = t), (this.normalizer = n);
  }
  buildStyles(e, t) {
    let n = new Map(),
      i = Ln(e, this.defaultParams);
    return (
      this.styles.styles.forEach((s) => {
        typeof s != "string" &&
          s.forEach((o, a) => {
            o && (o = we(o, i, t));
            let l = this.normalizer.normalizePropertyName(a, t);
            (o = this.normalizer.normalizeStyleValue(a, l, o, t)), n.set(a, o);
          });
      }),
      n
    );
  }
};
function Zi(r, e, t) {
  return new Et(r, e, t);
}
var Et = class {
  name;
  ast;
  _normalizer;
  transitionFactories = [];
  fallbackTransition;
  states = new Map();
  constructor(e, t, n) {
    (this.name = e),
      (this.ast = t),
      (this._normalizer = n),
      t.states.forEach((i) => {
        let s = (i.options && i.options.params) || {};
        this.states.set(i.name, new bt(i.style, s, n));
      }),
      bn(this.states, "true", "1"),
      bn(this.states, "false", "0"),
      t.transitions.forEach((i) => {
        this.transitionFactories.push(new Ue(e, i, this.states));
      }),
      (this.fallbackTransition = Ji(e, this.states, this._normalizer));
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(e, t, n, i) {
    return this.transitionFactories.find((o) => o.match(e, t, n, i)) || null;
  }
  matchStyles(e, t, n) {
    return this.fallbackTransition.buildStyles(e, t, n);
  }
};
function Ji(r, e, t) {
  let n = [(o, a) => !0],
    i = { type: E.Sequence, steps: [], options: null },
    s = {
      type: E.Transition,
      animation: i,
      matchers: n,
      options: null,
      queryCount: 0,
      depCount: 0,
    };
  return new Ue(r, s, e);
}
function bn(r, e, t) {
  r.has(e) ? r.has(t) || r.set(t, r.get(e)) : r.has(t) && r.set(e, r.get(t));
}
var er = new Te(),
  wt = class {
    bodyNode;
    _driver;
    _normalizer;
    _animations = new Map();
    _playersById = new Map();
    players = [];
    constructor(e, t, n) {
      (this.bodyNode = e), (this._driver = t), (this._normalizer = n);
    }
    register(e, t) {
      let n = [],
        i = [],
        s = xn(this._driver, t, n, i);
      if (n.length) throw pi(n);
      this._animations.set(e, s);
    }
    _buildPlayer(e, t, n) {
      let i = e.element,
        s = Mn(this._normalizer, e.keyframes, t, n);
      return this._driver.animate(i, s, e.duration, e.delay, e.easing, [], !0);
    }
    create(e, t, n = {}) {
      let i = [],
        s = this._animations.get(e),
        o,
        a = new Map();
      if (
        (s
          ? ((o = Rn(
              this._driver,
              t,
              s,
              On,
              ft,
              new Map(),
              new Map(),
              n,
              er,
              i,
            )),
            o.forEach((d) => {
              let u = K(a, d.element, new Map());
              d.postStyleProps.forEach((b) => u.set(b, null));
            }))
          : (i.push(hi()), (o = [])),
        i.length)
      )
        throw gi(i);
      a.forEach((d, u) => {
        d.forEach((b, v) => {
          d.set(v, this._driver.computeStyle(u, v, G));
        });
      });
      let l = o.map((d) => {
          let u = a.get(d.element);
          return this._buildPlayer(d, new Map(), u);
        }),
        c = J(l);
      return (
        this._playersById.set(e, c),
        c.onDestroy(() => this.destroy(e)),
        this.players.push(c),
        c
      );
    }
    destroy(e) {
      let t = this._getPlayer(e);
      t.destroy(), this._playersById.delete(e);
      let n = this.players.indexOf(t);
      n >= 0 && this.players.splice(n, 1);
    }
    _getPlayer(e) {
      let t = this._playersById.get(e);
      if (!t) throw yi(e);
      return t;
    }
    listen(e, t, n, i) {
      let s = At(t, "", "", "");
      return Mt(this._getPlayer(e), n, s, i), () => {};
    }
    command(e, t, n, i) {
      if (n == "register") {
        this.register(e, i[0]);
        return;
      }
      if (n == "create") {
        let o = i[0] || {};
        this.create(e, t, o);
        return;
      }
      let s = this._getPlayer(e);
      switch (n) {
        case "play":
          s.play();
          break;
        case "pause":
          s.pause();
          break;
        case "reset":
          s.reset();
          break;
        case "restart":
          s.restart();
          break;
        case "finish":
          s.finish();
          break;
        case "init":
          s.init();
          break;
        case "setPosition":
          s.setPosition(parseFloat(i[0]));
          break;
        case "destroy":
          this.destroy(e);
          break;
      }
    }
  },
  En = "ng-animate-queued",
  tr = ".ng-animate-queued",
  ct = "ng-animate-disabled",
  nr = ".ng-animate-disabled",
  ir = "ng-star-inserted",
  rr = ".ng-star-inserted",
  sr = [],
  Fn = {
    namespaceId: "",
    setForRemoval: !1,
    setForMove: !1,
    hasAnimation: !1,
    removedBeforeQueried: !1,
  },
  or = {
    namespaceId: "",
    setForMove: !1,
    setForRemoval: !1,
    hasAnimation: !1,
    removedBeforeQueried: !0,
  },
  j = "__ng_removed",
  Ce = class {
    namespaceId;
    value;
    options;
    get params() {
      return this.options.params;
    }
    constructor(e, t = "") {
      this.namespaceId = t;
      let n = e && e.hasOwnProperty("value"),
        i = n ? e.value : e;
      if (((this.value = lr(i)), n)) {
        let s = e,
          { value: o } = s,
          a = zt(s, ["value"]);
        this.options = a;
      } else this.options = {};
      this.options.params || (this.options.params = {});
    }
    absorbOptions(e) {
      let t = e.params;
      if (t) {
        let n = this.options.params;
        Object.keys(t).forEach((i) => {
          n[i] == null && (n[i] = t[i]);
        });
      }
    }
  },
  Ee = "void",
  ut = new Ce(Ee),
  Tt = class {
    id;
    hostElement;
    _engine;
    players = [];
    _triggers = new Map();
    _queue = [];
    _elementListeners = new Map();
    _hostClassName;
    constructor(e, t, n) {
      (this.id = e),
        (this.hostElement = t),
        (this._engine = n),
        (this._hostClassName = "ng-tns-" + e),
        $(t, this._hostClassName);
    }
    listen(e, t, n, i) {
      if (!this._triggers.has(t)) throw _i(n, t);
      if (n == null || n.length == 0) throw vi(t);
      if (!cr(n)) throw Si(n, t);
      let s = K(this._elementListeners, e, []),
        o = { name: t, phase: n, callback: i };
      s.push(o);
      let a = K(this._engine.statesByElement, e, new Map());
      return (
        a.has(t) || ($(e, Re), $(e, Re + "-" + t), a.set(t, ut)),
        () => {
          this._engine.afterFlush(() => {
            let l = s.indexOf(o);
            l >= 0 && s.splice(l, 1), this._triggers.has(t) || a.delete(t);
          });
        }
      );
    }
    register(e, t) {
      return this._triggers.has(e) ? !1 : (this._triggers.set(e, t), !0);
    }
    _getTrigger(e) {
      let t = this._triggers.get(e);
      if (!t) throw bi(e);
      return t;
    }
    trigger(e, t, n, i = !0) {
      let s = this._getTrigger(t),
        o = new Pe(this.id, t, e),
        a = this._engine.statesByElement.get(e);
      a ||
        ($(e, Re),
        $(e, Re + "-" + t),
        this._engine.statesByElement.set(e, (a = new Map())));
      let l = a.get(t),
        c = new Ce(n, this.id);
      if (
        (!(n && n.hasOwnProperty("value")) && l && c.absorbOptions(l.options),
        a.set(t, c),
        l || (l = ut),
        !(c.value === Ee) && l.value === c.value)
      ) {
        if (!fr(l.params, c.params)) {
          let _ = [],
            C = s.matchStyles(l.value, l.params, _),
            N = s.matchStyles(c.value, c.params, _);
          _.length
            ? this._engine.reportError(_)
            : this._engine.afterFlush(() => {
                oe(e, C), H(e, N);
              });
        }
        return;
      }
      let b = K(this._engine.playersByElement, e, []);
      b.forEach((_) => {
        _.namespaceId == this.id &&
          _.triggerName == t &&
          _.queued &&
          _.destroy();
      });
      let v = s.matchTransition(l.value, c.value, e, c.params),
        p = !1;
      if (!v) {
        if (!i) return;
        (v = s.fallbackTransition), (p = !0);
      }
      return (
        this._engine.totalQueuedPlayers++,
        this._queue.push({
          element: e,
          triggerName: t,
          transition: v,
          fromState: l,
          toState: c,
          player: o,
          isFallbackTransition: p,
        }),
        p ||
          ($(e, En),
          o.onStart(() => {
            _e(e, En);
          })),
        o.onDone(() => {
          let _ = this.players.indexOf(o);
          _ >= 0 && this.players.splice(_, 1);
          let C = this._engine.playersByElement.get(e);
          if (C) {
            let N = C.indexOf(o);
            N >= 0 && C.splice(N, 1);
          }
        }),
        this.players.push(o),
        b.push(o),
        o
      );
    }
    deregister(e) {
      this._triggers.delete(e),
        this._engine.statesByElement.forEach((t) => t.delete(e)),
        this._elementListeners.forEach((t, n) => {
          this._elementListeners.set(
            n,
            t.filter((i) => i.name != e),
          );
        });
    }
    clearElementCache(e) {
      this._engine.statesByElement.delete(e), this._elementListeners.delete(e);
      let t = this._engine.playersByElement.get(e);
      t &&
        (t.forEach((n) => n.destroy()),
        this._engine.playersByElement.delete(e));
    }
    _signalRemovalForInnerTriggers(e, t) {
      let n = this._engine.driver.query(e, Ke, !0);
      n.forEach((i) => {
        if (i[j]) return;
        let s = this._engine.fetchNamespacesByElement(i);
        s.size
          ? s.forEach((o) => o.triggerLeaveAnimation(i, t, !1, !0))
          : this.clearElementCache(i);
      }),
        this._engine.afterFlushAnimationsDone(() =>
          n.forEach((i) => this.clearElementCache(i)),
        );
    }
    triggerLeaveAnimation(e, t, n, i) {
      let s = this._engine.statesByElement.get(e),
        o = new Map();
      if (s) {
        let a = [];
        if (
          (s.forEach((l, c) => {
            if ((o.set(c, l.value), this._triggers.has(c))) {
              let d = this.trigger(e, c, Ee, i);
              d && a.push(d);
            }
          }),
          a.length)
        )
          return (
            this._engine.markElementAsRemoved(this.id, e, !0, t, o),
            n && J(a).onDone(() => this._engine.processLeaveNode(e)),
            !0
          );
      }
      return !1;
    }
    prepareLeaveAnimationListeners(e) {
      let t = this._elementListeners.get(e),
        n = this._engine.statesByElement.get(e);
      if (t && n) {
        let i = new Set();
        t.forEach((s) => {
          let o = s.name;
          if (i.has(o)) return;
          i.add(o);
          let l = this._triggers.get(o).fallbackTransition,
            c = n.get(o) || ut,
            d = new Ce(Ee),
            u = new Pe(this.id, o, e);
          this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: e,
              triggerName: o,
              transition: l,
              fromState: c,
              toState: d,
              player: u,
              isFallbackTransition: !0,
            });
        });
      }
    }
    removeNode(e, t) {
      let n = this._engine;
      if (
        (e.childElementCount && this._signalRemovalForInnerTriggers(e, t),
        this.triggerLeaveAnimation(e, t, !0))
      )
        return;
      let i = !1;
      if (n.totalAnimations) {
        let s = n.players.length ? n.playersByQueriedElement.get(e) : [];
        if (s && s.length) i = !0;
        else {
          let o = e;
          for (; (o = o.parentNode); )
            if (n.statesByElement.get(o)) {
              i = !0;
              break;
            }
        }
      }
      if ((this.prepareLeaveAnimationListeners(e), i))
        n.markElementAsRemoved(this.id, e, !1, t);
      else {
        let s = e[j];
        (!s || s === Fn) &&
          (n.afterFlush(() => this.clearElementCache(e)),
          n.destroyInnerAnimations(e),
          n._onRemovalComplete(e, t));
      }
    }
    insertNode(e, t) {
      $(e, this._hostClassName);
    }
    drainQueuedTransitions(e) {
      let t = [];
      return (
        this._queue.forEach((n) => {
          let i = n.player;
          if (i.destroyed) return;
          let s = n.element,
            o = this._elementListeners.get(s);
          o &&
            o.forEach((a) => {
              if (a.name == n.triggerName) {
                let l = At(
                  s,
                  n.triggerName,
                  n.fromState.value,
                  n.toState.value,
                );
                (l._data = e), Mt(n.player, a.phase, l, a.callback);
              }
            }),
            i.markedForDestroy
              ? this._engine.afterFlush(() => {
                  i.destroy();
                })
              : t.push(n);
        }),
        (this._queue = []),
        t.sort((n, i) => {
          let s = n.transition.ast.depCount,
            o = i.transition.ast.depCount;
          return s == 0 || o == 0
            ? s - o
            : this._engine.driver.containsElement(n.element, i.element)
              ? 1
              : -1;
        })
      );
    }
    destroy(e) {
      this.players.forEach((t) => t.destroy()),
        this._signalRemovalForInnerTriggers(this.hostElement, e);
    }
  },
  Ct = class {
    bodyNode;
    driver;
    _normalizer;
    players = [];
    newHostElements = new Map();
    playersByElement = new Map();
    playersByQueriedElement = new Map();
    statesByElement = new Map();
    disabledNodes = new Set();
    totalAnimations = 0;
    totalQueuedPlayers = 0;
    _namespaceLookup = {};
    _namespaceList = [];
    _flushFns = [];
    _whenQuietFns = [];
    namespacesByHostElement = new Map();
    collectedEnterElements = [];
    collectedLeaveElements = [];
    onRemovalComplete = (e, t) => {};
    _onRemovalComplete(e, t) {
      this.onRemovalComplete(e, t);
    }
    constructor(e, t, n) {
      (this.bodyNode = e), (this.driver = t), (this._normalizer = n);
    }
    get queuedPlayers() {
      let e = [];
      return (
        this._namespaceList.forEach((t) => {
          t.players.forEach((n) => {
            n.queued && e.push(n);
          });
        }),
        e
      );
    }
    createNamespace(e, t) {
      let n = new Tt(e, t, this);
      return (
        this.bodyNode && this.driver.containsElement(this.bodyNode, t)
          ? this._balanceNamespaceList(n, t)
          : (this.newHostElements.set(t, n), this.collectEnterElement(t)),
        (this._namespaceLookup[e] = n)
      );
    }
    _balanceNamespaceList(e, t) {
      let n = this._namespaceList,
        i = this.namespacesByHostElement;
      if (n.length - 1 >= 0) {
        let o = !1,
          a = this.driver.getParentElement(t);
        for (; a; ) {
          let l = i.get(a);
          if (l) {
            let c = n.indexOf(l);
            n.splice(c + 1, 0, e), (o = !0);
            break;
          }
          a = this.driver.getParentElement(a);
        }
        o || n.unshift(e);
      } else n.push(e);
      return i.set(t, e), e;
    }
    register(e, t) {
      let n = this._namespaceLookup[e];
      return n || (n = this.createNamespace(e, t)), n;
    }
    registerTrigger(e, t, n) {
      let i = this._namespaceLookup[e];
      i && i.register(t, n) && this.totalAnimations++;
    }
    destroy(e, t) {
      e &&
        (this.afterFlush(() => {}),
        this.afterFlushAnimationsDone(() => {
          let n = this._fetchNamespace(e);
          this.namespacesByHostElement.delete(n.hostElement);
          let i = this._namespaceList.indexOf(n);
          i >= 0 && this._namespaceList.splice(i, 1),
            n.destroy(t),
            delete this._namespaceLookup[e];
        }));
    }
    _fetchNamespace(e) {
      return this._namespaceLookup[e];
    }
    fetchNamespacesByElement(e) {
      let t = new Set(),
        n = this.statesByElement.get(e);
      if (n) {
        for (let i of n.values())
          if (i.namespaceId) {
            let s = this._fetchNamespace(i.namespaceId);
            s && t.add(s);
          }
      }
      return t;
    }
    trigger(e, t, n, i) {
      if (ze(t)) {
        let s = this._fetchNamespace(e);
        if (s) return s.trigger(t, n, i), !0;
      }
      return !1;
    }
    insertNode(e, t, n, i) {
      if (!ze(t)) return;
      let s = t[j];
      if (s && s.setForRemoval) {
        (s.setForRemoval = !1), (s.setForMove = !0);
        let o = this.collectedLeaveElements.indexOf(t);
        o >= 0 && this.collectedLeaveElements.splice(o, 1);
      }
      if (e) {
        let o = this._fetchNamespace(e);
        o && o.insertNode(t, n);
      }
      i && this.collectEnterElement(t);
    }
    collectEnterElement(e) {
      this.collectedEnterElements.push(e);
    }
    markElementAsDisabled(e, t) {
      t
        ? this.disabledNodes.has(e) || (this.disabledNodes.add(e), $(e, ct))
        : this.disabledNodes.has(e) &&
          (this.disabledNodes.delete(e), _e(e, ct));
    }
    removeNode(e, t, n) {
      if (ze(t)) {
        let i = e ? this._fetchNamespace(e) : null;
        i ? i.removeNode(t, n) : this.markElementAsRemoved(e, t, !1, n);
        let s = this.namespacesByHostElement.get(t);
        s && s.id !== e && s.removeNode(t, n);
      } else this._onRemovalComplete(t, n);
    }
    markElementAsRemoved(e, t, n, i, s) {
      this.collectedLeaveElements.push(t),
        (t[j] = {
          namespaceId: e,
          setForRemoval: i,
          hasAnimation: n,
          removedBeforeQueried: !1,
          previousTriggersValues: s,
        });
    }
    listen(e, t, n, i, s) {
      return ze(t) ? this._fetchNamespace(e).listen(t, n, i, s) : () => {};
    }
    _buildInstruction(e, t, n, i, s) {
      return e.transition.build(
        this.driver,
        e.element,
        e.fromState.value,
        e.toState.value,
        n,
        i,
        e.fromState.options,
        e.toState.options,
        t,
        s,
      );
    }
    destroyInnerAnimations(e) {
      let t = this.driver.query(e, Ke, !0);
      t.forEach((n) => this.destroyActiveAnimationsForElement(n)),
        this.playersByQueriedElement.size != 0 &&
          ((t = this.driver.query(e, mt, !0)),
          t.forEach((n) => this.finishActiveQueriedAnimationOnElement(n)));
    }
    destroyActiveAnimationsForElement(e) {
      let t = this.playersByElement.get(e);
      t &&
        t.forEach((n) => {
          n.queued ? (n.markedForDestroy = !0) : n.destroy();
        });
    }
    finishActiveQueriedAnimationOnElement(e) {
      let t = this.playersByQueriedElement.get(e);
      t && t.forEach((n) => n.finish());
    }
    whenRenderingDone() {
      return new Promise((e) => {
        if (this.players.length) return J(this.players).onDone(() => e());
        e();
      });
    }
    processLeaveNode(e) {
      let t = e[j];
      if (t && t.setForRemoval) {
        if (((e[j] = Fn), t.namespaceId)) {
          this.destroyInnerAnimations(e);
          let n = this._fetchNamespace(t.namespaceId);
          n && n.clearElementCache(e);
        }
        this._onRemovalComplete(e, t.setForRemoval);
      }
      e.classList?.contains(ct) && this.markElementAsDisabled(e, !1),
        this.driver.query(e, nr, !0).forEach((n) => {
          this.markElementAsDisabled(n, !1);
        });
    }
    flush(e = -1) {
      let t = [];
      if (
        (this.newHostElements.size &&
          (this.newHostElements.forEach((n, i) =>
            this._balanceNamespaceList(n, i),
          ),
          this.newHostElements.clear()),
        this.totalAnimations && this.collectedEnterElements.length)
      )
        for (let n = 0; n < this.collectedEnterElements.length; n++) {
          let i = this.collectedEnterElements[n];
          $(i, ir);
        }
      if (
        this._namespaceList.length &&
        (this.totalQueuedPlayers || this.collectedLeaveElements.length)
      ) {
        let n = [];
        try {
          t = this._flushAnimations(n, e);
        } finally {
          for (let i = 0; i < n.length; i++) n[i]();
        }
      } else
        for (let n = 0; n < this.collectedLeaveElements.length; n++) {
          let i = this.collectedLeaveElements[n];
          this.processLeaveNode(i);
        }
      if (
        ((this.totalQueuedPlayers = 0),
        (this.collectedEnterElements.length = 0),
        (this.collectedLeaveElements.length = 0),
        this._flushFns.forEach((n) => n()),
        (this._flushFns = []),
        this._whenQuietFns.length)
      ) {
        let n = this._whenQuietFns;
        (this._whenQuietFns = []),
          t.length
            ? J(t).onDone(() => {
                n.forEach((i) => i());
              })
            : n.forEach((i) => i());
      }
    }
    reportError(e) {
      throw Ei(e);
    }
    _flushAnimations(e, t) {
      let n = new Te(),
        i = [],
        s = new Map(),
        o = [],
        a = new Map(),
        l = new Map(),
        c = new Map(),
        d = new Set();
      this.disabledNodes.forEach((f) => {
        d.add(f);
        let h = this.driver.query(f, tr, !0);
        for (let y = 0; y < h.length; y++) d.add(h[y]);
      });
      let u = this.bodyNode,
        b = Array.from(this.statesByElement.keys()),
        v = Cn(b, this.collectedEnterElements),
        p = new Map(),
        _ = 0;
      v.forEach((f, h) => {
        let y = On + _++;
        p.set(h, y), f.forEach((w) => $(w, y));
      });
      let C = [],
        N = new Set(),
        k = new Set();
      for (let f = 0; f < this.collectedLeaveElements.length; f++) {
        let h = this.collectedLeaveElements[f],
          y = h[j];
        y &&
          y.setForRemoval &&
          (C.push(h),
          N.add(h),
          y.hasAnimation
            ? this.driver.query(h, rr, !0).forEach((w) => N.add(w))
            : k.add(h));
      }
      let x = new Map(),
        D = Cn(b, Array.from(N));
      D.forEach((f, h) => {
        let y = ft + _++;
        x.set(h, y), f.forEach((w) => $(w, y));
      }),
        e.push(() => {
          v.forEach((f, h) => {
            let y = p.get(h);
            f.forEach((w) => _e(w, y));
          }),
            D.forEach((f, h) => {
              let y = x.get(h);
              f.forEach((w) => _e(w, y));
            }),
            C.forEach((f) => {
              this.processLeaveNode(f);
            });
        });
      let ce = [],
        U = [];
      for (let f = this._namespaceList.length - 1; f >= 0; f--)
        this._namespaceList[f].drainQueuedTransitions(t).forEach((y) => {
          let w = y.player,
            O = y.element;
          if ((ce.push(w), this.collectedEnterElements.length)) {
            let I = O[j];
            if (I && I.setForMove) {
              if (
                I.previousTriggersValues &&
                I.previousTriggersValues.has(y.triggerName)
              ) {
                let ne = I.previousTriggersValues.get(y.triggerName),
                  B = this.statesByElement.get(y.element);
                if (B && B.has(y.triggerName)) {
                  let Me = B.get(y.triggerName);
                  (Me.value = ne), B.set(y.triggerName, Me);
                }
              }
              w.destroy();
              return;
            }
          }
          let W = !u || !this.driver.containsElement(u, O),
            z = x.get(O),
            X = p.get(O),
            P = this._buildInstruction(y, n, X, z, W);
          if (P.errors && P.errors.length) {
            U.push(P);
            return;
          }
          if (W) {
            w.onStart(() => oe(O, P.fromStyles)),
              w.onDestroy(() => H(O, P.toStyles)),
              i.push(w);
            return;
          }
          if (y.isFallbackTransition) {
            w.onStart(() => oe(O, P.fromStyles)),
              w.onDestroy(() => H(O, P.toStyles)),
              i.push(w);
            return;
          }
          let Ft = [];
          P.timelines.forEach((I) => {
            (I.stretchStartingKeyframe = !0),
              this.disabledNodes.has(I.element) || Ft.push(I);
          }),
            (P.timelines = Ft),
            n.append(O, P.timelines);
          let Un = { instruction: P, player: w, element: O };
          o.push(Un),
            P.queriedElements.forEach((I) => K(a, I, []).push(w)),
            P.preStyleProps.forEach((I, ne) => {
              if (I.size) {
                let B = l.get(ne);
                B || l.set(ne, (B = new Set())),
                  I.forEach((Me, nt) => B.add(nt));
              }
            }),
            P.postStyleProps.forEach((I, ne) => {
              let B = c.get(ne);
              B || c.set(ne, (B = new Set())), I.forEach((Me, nt) => B.add(nt));
            });
        });
      if (U.length) {
        let f = [];
        U.forEach((h) => {
          f.push(wi(h.triggerName, h.errors));
        }),
          ce.forEach((h) => h.destroy()),
          this.reportError(f);
      }
      let R = new Map(),
        F = new Map();
      o.forEach((f) => {
        let h = f.element;
        n.has(h) &&
          (F.set(h, h),
          this._beforeAnimationBuild(f.player.namespaceId, f.instruction, R));
      }),
        i.forEach((f) => {
          let h = f.element;
          this._getPreviousPlayers(
            h,
            !1,
            f.namespaceId,
            f.triggerName,
            null,
          ).forEach((w) => {
            K(R, h, []).push(w), w.destroy();
          });
        });
      let ee = C.filter((f) => Pn(f, l, c)),
        ue = new Map();
      Tn(ue, this.driver, k, c, G).forEach((f) => {
        Pn(f, l, c) && ee.push(f);
      });
      let te = new Map();
      v.forEach((f, h) => {
        Tn(te, this.driver, new Set(f), l, xe);
      }),
        ee.forEach((f) => {
          let h = ue.get(f),
            y = te.get(f);
          ue.set(
            f,
            new Map([...(h?.entries() ?? []), ...(y?.entries() ?? [])]),
          );
        });
      let tt = [],
        Rt = [],
        Lt = {};
      o.forEach((f) => {
        let { element: h, player: y, instruction: w } = f;
        if (n.has(h)) {
          if (d.has(h)) {
            y.onDestroy(() => H(h, w.toStyles)),
              (y.disabled = !0),
              y.overrideTotalTime(w.totalTime),
              i.push(y);
            return;
          }
          let O = Lt;
          if (F.size > 1) {
            let z = h,
              X = [];
            for (; (z = z.parentNode); ) {
              let P = F.get(z);
              if (P) {
                O = P;
                break;
              }
              X.push(z);
            }
            X.forEach((P) => F.set(P, O));
          }
          let W = this._buildAnimation(y.namespaceId, w, R, s, te, ue);
          if ((y.setRealPlayer(W), O === Lt)) tt.push(y);
          else {
            let z = this.playersByElement.get(O);
            z && z.length && (y.parentPlayer = J(z)), i.push(y);
          }
        } else
          oe(h, w.fromStyles),
            y.onDestroy(() => H(h, w.toStyles)),
            Rt.push(y),
            d.has(h) && i.push(y);
      }),
        Rt.forEach((f) => {
          let h = s.get(f.element);
          if (h && h.length) {
            let y = J(h);
            f.setRealPlayer(y);
          }
        }),
        i.forEach((f) => {
          f.parentPlayer ? f.syncPlayerEvents(f.parentPlayer) : f.destroy();
        });
      for (let f = 0; f < C.length; f++) {
        let h = C[f],
          y = h[j];
        if ((_e(h, ft), y && y.hasAnimation)) continue;
        let w = [];
        if (a.size) {
          let W = a.get(h);
          W && W.length && w.push(...W);
          let z = this.driver.query(h, mt, !0);
          for (let X = 0; X < z.length; X++) {
            let P = a.get(z[X]);
            P && P.length && w.push(...P);
          }
        }
        let O = w.filter((W) => !W.destroyed);
        O.length ? ur(this, h, O) : this.processLeaveNode(h);
      }
      return (
        (C.length = 0),
        tt.forEach((f) => {
          this.players.push(f),
            f.onDone(() => {
              f.destroy();
              let h = this.players.indexOf(f);
              this.players.splice(h, 1);
            }),
            f.play();
        }),
        tt
      );
    }
    afterFlush(e) {
      this._flushFns.push(e);
    }
    afterFlushAnimationsDone(e) {
      this._whenQuietFns.push(e);
    }
    _getPreviousPlayers(e, t, n, i, s) {
      let o = [];
      if (t) {
        let a = this.playersByQueriedElement.get(e);
        a && (o = a);
      } else {
        let a = this.playersByElement.get(e);
        if (a) {
          let l = !s || s == Ee;
          a.forEach((c) => {
            c.queued || (!l && c.triggerName != i) || o.push(c);
          });
        }
      }
      return (
        (n || i) &&
          (o = o.filter(
            (a) => !((n && n != a.namespaceId) || (i && i != a.triggerName)),
          )),
        o
      );
    }
    _beforeAnimationBuild(e, t, n) {
      let i = t.triggerName,
        s = t.element,
        o = t.isRemovalTransition ? void 0 : e,
        a = t.isRemovalTransition ? void 0 : i;
      for (let l of t.timelines) {
        let c = l.element,
          d = c !== s,
          u = K(n, c, []);
        this._getPreviousPlayers(c, d, o, a, t.toState).forEach((v) => {
          let p = v.getRealPlayer();
          p.beforeDestroy && p.beforeDestroy(), v.destroy(), u.push(v);
        });
      }
      oe(s, t.fromStyles);
    }
    _buildAnimation(e, t, n, i, s, o) {
      let a = t.triggerName,
        l = t.element,
        c = [],
        d = new Set(),
        u = new Set(),
        b = t.timelines.map((p) => {
          let _ = p.element;
          d.add(_);
          let C = _[j];
          if (C && C.removedBeforeQueried) return new ye(p.duration, p.delay);
          let N = _ !== l,
            k = dr((n.get(_) || sr).map((R) => R.getRealPlayer())).filter(
              (R) => {
                let F = R;
                return F.element ? F.element === _ : !1;
              },
            ),
            x = s.get(_),
            D = o.get(_),
            ce = Mn(this._normalizer, p.keyframes, x, D),
            U = this._buildPlayer(p, ce, k);
          if ((p.subTimeline && i && u.add(_), N)) {
            let R = new Pe(e, a, _);
            R.setRealPlayer(U), c.push(R);
          }
          return U;
        });
      c.forEach((p) => {
        K(this.playersByQueriedElement, p.element, []).push(p),
          p.onDone(() => ar(this.playersByQueriedElement, p.element, p));
      }),
        d.forEach((p) => $(p, gn));
      let v = J(b);
      return (
        v.onDestroy(() => {
          d.forEach((p) => _e(p, gn)), H(l, t.toStyles);
        }),
        u.forEach((p) => {
          K(i, p, []).push(v);
        }),
        v
      );
    }
    _buildPlayer(e, t, n) {
      return t.length > 0
        ? this.driver.animate(e.element, t, e.duration, e.delay, e.easing, n)
        : new ye(e.duration, e.delay);
    }
  },
  Pe = class {
    namespaceId;
    triggerName;
    element;
    _player = new ye();
    _containsRealPlayer = !1;
    _queuedCallbacks = new Map();
    destroyed = !1;
    parentPlayer = null;
    markedForDestroy = !1;
    disabled = !1;
    queued = !0;
    totalTime = 0;
    constructor(e, t, n) {
      (this.namespaceId = e), (this.triggerName = t), (this.element = n);
    }
    setRealPlayer(e) {
      this._containsRealPlayer ||
        ((this._player = e),
        this._queuedCallbacks.forEach((t, n) => {
          t.forEach((i) => Mt(e, n, void 0, i));
        }),
        this._queuedCallbacks.clear(),
        (this._containsRealPlayer = !0),
        this.overrideTotalTime(e.totalTime),
        (this.queued = !1));
    }
    getRealPlayer() {
      return this._player;
    }
    overrideTotalTime(e) {
      this.totalTime = e;
    }
    syncPlayerEvents(e) {
      let t = this._player;
      t.triggerCallback && e.onStart(() => t.triggerCallback("start")),
        e.onDone(() => this.finish()),
        e.onDestroy(() => this.destroy());
    }
    _queueEvent(e, t) {
      K(this._queuedCallbacks, e, []).push(t);
    }
    onDone(e) {
      this.queued && this._queueEvent("done", e), this._player.onDone(e);
    }
    onStart(e) {
      this.queued && this._queueEvent("start", e), this._player.onStart(e);
    }
    onDestroy(e) {
      this.queued && this._queueEvent("destroy", e), this._player.onDestroy(e);
    }
    init() {
      this._player.init();
    }
    hasStarted() {
      return this.queued ? !1 : this._player.hasStarted();
    }
    play() {
      !this.queued && this._player.play();
    }
    pause() {
      !this.queued && this._player.pause();
    }
    restart() {
      !this.queued && this._player.restart();
    }
    finish() {
      this._player.finish();
    }
    destroy() {
      (this.destroyed = !0), this._player.destroy();
    }
    reset() {
      !this.queued && this._player.reset();
    }
    setPosition(e) {
      this.queued || this._player.setPosition(e);
    }
    getPosition() {
      return this.queued ? 0 : this._player.getPosition();
    }
    triggerCallback(e) {
      let t = this._player;
      t.triggerCallback && t.triggerCallback(e);
    }
  };
function ar(r, e, t) {
  let n = r.get(e);
  if (n) {
    if (n.length) {
      let i = n.indexOf(t);
      n.splice(i, 1);
    }
    n.length == 0 && r.delete(e);
  }
  return n;
}
function lr(r) {
  return r ?? null;
}
function ze(r) {
  return r && r.nodeType === 1;
}
function cr(r) {
  return r == "start" || r == "done";
}
function wn(r, e) {
  let t = r.style.display;
  return (r.style.display = e ?? "none"), t;
}
function Tn(r, e, t, n, i) {
  let s = [];
  t.forEach((l) => s.push(wn(l)));
  let o = [];
  n.forEach((l, c) => {
    let d = new Map();
    l.forEach((u) => {
      let b = e.computeStyle(c, u, i);
      d.set(u, b), (!b || b.length == 0) && ((c[j] = or), o.push(c));
    }),
      r.set(c, d);
  });
  let a = 0;
  return t.forEach((l) => wn(l, s[a++])), o;
}
function Cn(r, e) {
  let t = new Map();
  if ((r.forEach((a) => t.set(a, [])), e.length == 0)) return t;
  let n = 1,
    i = new Set(e),
    s = new Map();
  function o(a) {
    if (!a) return n;
    let l = s.get(a);
    if (l) return l;
    let c = a.parentNode;
    return t.has(c) ? (l = c) : i.has(c) ? (l = n) : (l = o(c)), s.set(a, l), l;
  }
  return (
    e.forEach((a) => {
      let l = o(a);
      l !== n && t.get(l).push(a);
    }),
    t
  );
}
function $(r, e) {
  r.classList?.add(e);
}
function _e(r, e) {
  r.classList?.remove(e);
}
function ur(r, e, t) {
  J(t).onDone(() => r.processLeaveNode(e));
}
function dr(r) {
  let e = [];
  return zn(r, e), e;
}
function zn(r, e) {
  for (let t = 0; t < r.length; t++) {
    let n = r[t];
    n instanceof st ? zn(n.players, e) : e.push(n);
  }
}
function fr(r, e) {
  let t = Object.keys(r),
    n = Object.keys(e);
  if (t.length != n.length) return !1;
  for (let i = 0; i < t.length; i++) {
    let s = t[i];
    if (!e.hasOwnProperty(s) || r[s] !== e[s]) return !1;
  }
  return !0;
}
function Pn(r, e, t) {
  let n = t.get(r);
  if (!n) return !1;
  let i = e.get(r);
  return i ? n.forEach((s) => i.add(s)) : e.set(r, n), t.delete(r), !0;
}
var ve = class {
  _driver;
  _normalizer;
  _transitionEngine;
  _timelineEngine;
  _triggerCache = {};
  onRemovalComplete = (e, t) => {};
  constructor(e, t, n) {
    (this._driver = t),
      (this._normalizer = n),
      (this._transitionEngine = new Ct(e.body, t, n)),
      (this._timelineEngine = new wt(e.body, t, n)),
      (this._transitionEngine.onRemovalComplete = (i, s) =>
        this.onRemovalComplete(i, s));
  }
  registerTrigger(e, t, n, i, s) {
    let o = e + "-" + i,
      a = this._triggerCache[o];
    if (!a) {
      let l = [],
        c = [],
        d = xn(this._driver, s, l, c);
      if (l.length) throw fi(i, l);
      (a = Zi(i, d, this._normalizer)), (this._triggerCache[o] = a);
    }
    this._transitionEngine.registerTrigger(t, i, a);
  }
  register(e, t) {
    this._transitionEngine.register(e, t);
  }
  destroy(e, t) {
    this._transitionEngine.destroy(e, t);
  }
  onInsert(e, t, n, i) {
    this._transitionEngine.insertNode(e, t, n, i);
  }
  onRemove(e, t, n) {
    this._transitionEngine.removeNode(e, t, n);
  }
  disableAnimations(e, t) {
    this._transitionEngine.markElementAsDisabled(e, t);
  }
  process(e, t, n, i) {
    if (n.charAt(0) == "@") {
      let [s, o] = pn(n),
        a = i;
      this._timelineEngine.command(s, t, o, a);
    } else this._transitionEngine.trigger(e, t, n, i);
  }
  listen(e, t, n, i, s) {
    if (n.charAt(0) == "@") {
      let [o, a] = pn(n);
      return this._timelineEngine.listen(o, t, a, s);
    }
    return this._transitionEngine.listen(e, t, n, i, s);
  }
  flush(e = -1) {
    this._transitionEngine.flush(e);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(e) {
    this._transitionEngine.afterFlushAnimationsDone(e);
  }
};
function mr(r, e) {
  let t = null,
    n = null;
  return (
    Array.isArray(e) && e.length
      ? ((t = dt(e[0])), e.length > 1 && (n = dt(e[e.length - 1])))
      : e instanceof Map && (t = dt(e)),
    t || n ? new pr(r, t, n) : null
  );
}
var pr = (() => {
  class r {
    _element;
    _startStyles;
    _endStyles;
    static initialStylesByElement = new WeakMap();
    _state = 0;
    _initialStyles;
    constructor(t, n, i) {
      (this._element = t), (this._startStyles = n), (this._endStyles = i);
      let s = r.initialStylesByElement.get(t);
      s || r.initialStylesByElement.set(t, (s = new Map())),
        (this._initialStyles = s);
    }
    start() {
      this._state < 1 &&
        (this._startStyles &&
          H(this._element, this._startStyles, this._initialStyles),
        (this._state = 1));
    }
    finish() {
      this.start(),
        this._state < 2 &&
          (H(this._element, this._initialStyles),
          this._endStyles &&
            (H(this._element, this._endStyles), (this._endStyles = null)),
          (this._state = 1));
    }
    destroy() {
      this.finish(),
        this._state < 3 &&
          (r.initialStylesByElement.delete(this._element),
          this._startStyles &&
            (oe(this._element, this._startStyles), (this._endStyles = null)),
          this._endStyles &&
            (oe(this._element, this._endStyles), (this._endStyles = null)),
          H(this._element, this._initialStyles),
          (this._state = 3));
    }
  }
  return r;
})();
function dt(r) {
  let e = null;
  return (
    r.forEach((t, n) => {
      hr(n) && ((e = e || new Map()), e.set(n, t));
    }),
    e
  );
}
function hr(r) {
  return r === "display" || r === "position";
}
var We = class {
    element;
    keyframes;
    options;
    _specialStyles;
    _onDoneFns = [];
    _onStartFns = [];
    _onDestroyFns = [];
    _duration;
    _delay;
    _initialized = !1;
    _finished = !1;
    _started = !1;
    _destroyed = !1;
    _finalKeyframe;
    _originalOnDoneFns = [];
    _originalOnStartFns = [];
    domPlayer;
    time = 0;
    parentPlayer = null;
    currentSnapshot = new Map();
    constructor(e, t, n, i) {
      (this.element = e),
        (this.keyframes = t),
        (this.options = n),
        (this._specialStyles = i),
        (this._duration = n.duration),
        (this._delay = n.delay || 0),
        (this.time = this._duration + this._delay);
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((e) => e()),
        (this._onDoneFns = []));
    }
    init() {
      this._buildPlayer(), this._preparePlayerBeforeStart();
    }
    _buildPlayer() {
      if (this._initialized) return;
      this._initialized = !0;
      let e = this.keyframes;
      (this.domPlayer = this._triggerWebAnimation(
        this.element,
        e,
        this.options,
      )),
        (this._finalKeyframe = e.length ? e[e.length - 1] : new Map());
      let t = () => this._onFinish();
      this.domPlayer.addEventListener("finish", t),
        this.onDestroy(() => {
          this.domPlayer.removeEventListener("finish", t);
        });
    }
    _preparePlayerBeforeStart() {
      this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
    }
    _convertKeyframesToObject(e) {
      let t = [];
      return (
        e.forEach((n) => {
          t.push(Object.fromEntries(n));
        }),
        t
      );
    }
    _triggerWebAnimation(e, t, n) {
      return e.animate(this._convertKeyframesToObject(t), n);
    }
    onStart(e) {
      this._originalOnStartFns.push(e), this._onStartFns.push(e);
    }
    onDone(e) {
      this._originalOnDoneFns.push(e), this._onDoneFns.push(e);
    }
    onDestroy(e) {
      this._onDestroyFns.push(e);
    }
    play() {
      this._buildPlayer(),
        this.hasStarted() ||
          (this._onStartFns.forEach((e) => e()),
          (this._onStartFns = []),
          (this._started = !0),
          this._specialStyles && this._specialStyles.start()),
        this.domPlayer.play();
    }
    pause() {
      this.init(), this.domPlayer.pause();
    }
    finish() {
      this.init(),
        this._specialStyles && this._specialStyles.finish(),
        this._onFinish(),
        this.domPlayer.finish();
    }
    reset() {
      this._resetDomPlayerState(),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._started = !1),
        (this._onStartFns = this._originalOnStartFns),
        (this._onDoneFns = this._originalOnDoneFns);
    }
    _resetDomPlayerState() {
      this.domPlayer && this.domPlayer.cancel();
    }
    restart() {
      this.reset(), this.play();
    }
    hasStarted() {
      return this._started;
    }
    destroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this._resetDomPlayerState(),
        this._onFinish(),
        this._specialStyles && this._specialStyles.destroy(),
        this._onDestroyFns.forEach((e) => e()),
        (this._onDestroyFns = []));
    }
    setPosition(e) {
      this.domPlayer === void 0 && this.init(),
        (this.domPlayer.currentTime = e * this.time);
    }
    getPosition() {
      return +(this.domPlayer.currentTime ?? 0) / this.time;
    }
    get totalTime() {
      return this._delay + this._duration;
    }
    beforeDestroy() {
      let e = new Map();
      this.hasStarted() &&
        this._finalKeyframe.forEach((n, i) => {
          i !== "offset" && e.set(i, this._finished ? n : Dt(this.element, i));
        }),
        (this.currentSnapshot = e);
    }
    triggerCallback(e) {
      let t = e === "start" ? this._onStartFns : this._onDoneFns;
      t.forEach((n) => n()), (t.length = 0);
    }
  },
  Ge = class {
    validateStyleProperty(e) {
      return !0;
    }
    validateAnimatableStyleProperty(e) {
      return !0;
    }
    containsElement(e, t) {
      return An(e, t);
    }
    getParentElement(e) {
      return Nt(e);
    }
    query(e, t, n) {
      return Nn(e, t, n);
    }
    computeStyle(e, t, n) {
      return Dt(e, t);
    }
    animate(e, t, n, i, s, o = []) {
      let a = i == 0 ? "both" : "forwards",
        l = { duration: n, delay: i, fill: a };
      s && (l.easing = s);
      let c = new Map(),
        d = o.filter((v) => v instanceof We);
      xi(n, i) &&
        d.forEach((v) => {
          v.currentSnapshot.forEach((p, _) => c.set(_, p));
        });
      let u = Oi(t).map((v) => new Map(v));
      u = Ri(e, u, c);
      let b = mr(e, u);
      return new We(e, u, l, b);
    }
  };
var qe = "@",
  qn = "@.disabled",
  He = class {
    namespaceId;
    delegate;
    engine;
    _onDestroy;
    ɵtype = 0;
    constructor(e, t, n, i) {
      (this.namespaceId = e),
        (this.delegate = t),
        (this.engine = n),
        (this._onDestroy = i);
    }
    get data() {
      return this.delegate.data;
    }
    destroyNode(e) {
      this.delegate.destroyNode?.(e);
    }
    destroy() {
      this.engine.destroy(this.namespaceId, this.delegate),
        this.engine.afterFlushAnimationsDone(() => {
          queueMicrotask(() => {
            this.delegate.destroy();
          });
        }),
        this._onDestroy?.();
    }
    createElement(e, t) {
      return this.delegate.createElement(e, t);
    }
    createComment(e) {
      return this.delegate.createComment(e);
    }
    createText(e) {
      return this.delegate.createText(e);
    }
    appendChild(e, t) {
      this.delegate.appendChild(e, t),
        this.engine.onInsert(this.namespaceId, t, e, !1);
    }
    insertBefore(e, t, n, i = !0) {
      this.delegate.insertBefore(e, t, n),
        this.engine.onInsert(this.namespaceId, t, e, i);
    }
    removeChild(e, t, n) {
      this.parentNode(t) &&
        this.engine.onRemove(this.namespaceId, t, this.delegate);
    }
    selectRootElement(e, t) {
      return this.delegate.selectRootElement(e, t);
    }
    parentNode(e) {
      return this.delegate.parentNode(e);
    }
    nextSibling(e) {
      return this.delegate.nextSibling(e);
    }
    setAttribute(e, t, n, i) {
      this.delegate.setAttribute(e, t, n, i);
    }
    removeAttribute(e, t, n) {
      this.delegate.removeAttribute(e, t, n);
    }
    addClass(e, t) {
      this.delegate.addClass(e, t);
    }
    removeClass(e, t) {
      this.delegate.removeClass(e, t);
    }
    setStyle(e, t, n, i) {
      this.delegate.setStyle(e, t, n, i);
    }
    removeStyle(e, t, n) {
      this.delegate.removeStyle(e, t, n);
    }
    setProperty(e, t, n) {
      t.charAt(0) == qe && t == qn
        ? this.disableAnimations(e, !!n)
        : this.delegate.setProperty(e, t, n);
    }
    setValue(e, t) {
      this.delegate.setValue(e, t);
    }
    listen(e, t, n, i) {
      return this.delegate.listen(e, t, n, i);
    }
    disableAnimations(e, t) {
      this.engine.disableAnimations(e, t);
    }
  },
  Pt = class extends He {
    factory;
    constructor(e, t, n, i, s) {
      super(t, n, i, s), (this.factory = e), (this.namespaceId = t);
    }
    setProperty(e, t, n) {
      t.charAt(0) == qe
        ? t.charAt(1) == "." && t == qn
          ? ((n = n === void 0 ? !0 : !!n), this.disableAnimations(e, n))
          : this.engine.process(this.namespaceId, e, t.slice(1), n)
        : this.delegate.setProperty(e, t, n);
    }
    listen(e, t, n, i) {
      if (t.charAt(0) == qe) {
        let s = gr(e),
          o = t.slice(1),
          a = "";
        return (
          o.charAt(0) != qe && ([o, a] = yr(o)),
          this.engine.listen(this.namespaceId, s, o, a, (l) => {
            let c = l._data || -1;
            this.factory.scheduleListenerCallback(c, n, l);
          })
        );
      }
      return this.delegate.listen(e, t, n, i);
    }
  };
function gr(r) {
  switch (r) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return r;
  }
}
function yr(r) {
  let e = r.indexOf("."),
    t = r.substring(0, e),
    n = r.slice(e + 1);
  return [t, n];
}
var Ye = class {
  delegate;
  engine;
  _zone;
  _currentId = 0;
  _microtaskId = 1;
  _animationCallbacksBuffer = [];
  _rendererCache = new Map();
  _cdRecurDepth = 0;
  constructor(e, t, n) {
    (this.delegate = e),
      (this.engine = t),
      (this._zone = n),
      (t.onRemovalComplete = (i, s) => {
        s?.removeChild(null, i);
      });
  }
  createRenderer(e, t) {
    let n = "",
      i = this.delegate.createRenderer(e, t);
    if (!e || !t?.data?.animation) {
      let c = this._rendererCache,
        d = c.get(i);
      if (!d) {
        let u = () => c.delete(i);
        (d = new He(n, i, this.engine, u)), c.set(i, d);
      }
      return d;
    }
    let s = t.id,
      o = t.id + "-" + this._currentId;
    this._currentId++, this.engine.register(o, e);
    let a = (c) => {
      Array.isArray(c)
        ? c.forEach(a)
        : this.engine.registerTrigger(s, o, e, c.name, c);
    };
    return t.data.animation.forEach(a), new Pt(this, o, i, this.engine);
  }
  begin() {
    this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  scheduleListenerCallback(e, t, n) {
    if (e >= 0 && e < this._microtaskId) {
      this._zone.run(() => t(n));
      return;
    }
    let i = this._animationCallbacksBuffer;
    i.length == 0 &&
      queueMicrotask(() => {
        this._zone.run(() => {
          i.forEach((s) => {
            let [o, a] = s;
            o(a);
          }),
            (this._animationCallbacksBuffer = []);
        });
      }),
      i.push([t, n]);
  }
  end() {
    this._cdRecurDepth--,
      this._cdRecurDepth == 0 &&
        this._zone.runOutsideAngular(() => {
          this._scheduleCountTask(), this.engine.flush(this._microtaskId);
        }),
      this.delegate.end && this.delegate.end();
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
  componentReplaced(e) {
    this.engine.flush(), this.delegate.componentReplaced?.(e);
  }
};
var vr = (() => {
  class r extends ve {
    constructor(t, n, i) {
      super(t, n, i);
    }
    ngOnDestroy() {
      this.flush();
    }
    static ɵfac = function (n) {
      return new (n || r)(ke(Xt), ke(ae), ke(le));
    };
    static ɵprov = Ne({ token: r, factory: r.ɵfac });
  }
  return r;
})();
function Sr() {
  return new Ve();
}
function br(r, e, t) {
  return new Ye(r, e, t);
}
var Kn = [
    { provide: le, useFactory: Sr },
    { provide: ve, useClass: vr },
    { provide: Qt, useFactory: br, deps: [nn, ve, Bt] },
  ],
  Er = [
    { provide: ae, useFactory: () => new Ge() },
    { provide: it, useValue: "BrowserAnimations" },
    ...Kn,
  ],
  Zr = [
    { provide: ae, useClass: kt },
    { provide: it, useValue: "NoopAnimations" },
    ...Kn,
  ];
function Bn() {
  return Vt("NgEagerAnimations"), [...Er];
}
var Vn = [
  {
    path: "",
    loadComponent: () =>
      import("./chunk-2IRSTMXG.js").then((r) => r.HomeComponent),
  },
  {
    path: "sign-in",
    loadComponent: () =>
      import("./chunk-5MRXD4S7.js").then((r) => r.SignInComponent),
  },
  {
    path: "sign-up",
    loadComponent: () =>
      import("./chunk-LUR4XYW6.js").then((r) => r.SignUpComponent),
  },
  {
    path: "dashboard",
    loadComponent: () =>
      import("./chunk-RQ7HECCT.js").then((r) => r.DashboardComponent),
  },
  {
    path: "upload",
    loadComponent: () =>
      import("./chunk-7IG4YF46.js").then((r) => r.UploadComponent),
  },
  {
    path: "faq",
    loadComponent: () =>
      import("./chunk-WXSDWS3U.js").then((r) => r.FaqComponent),
  },
  {
    path: "error/:id",
    loadComponent: () =>
      import("./chunk-G6K7EFXQ.js").then((r) => r.ErrorComponent),
  },
  {
    path: "profile",
    loadComponent: () =>
      import("./chunk-CAMK4HG3.js").then((r) => r.ProfileComponent),
  },
  {
    path: "mask-text",
    loadComponent: () =>
      import("./chunk-MQP2PTPS.js").then((r) => r.MaskTextComponent),
  },
  {
    path: "admin",
    loadComponent: () =>
      import("./chunk-MF2Z6TWH.js").then((r) => r.AdminDashboardComponent),
  },
  {
    path: "admin/login",
    loadComponent: () =>
      import("./chunk-K24B7ZT6.js").then((r) => r.AdminLoginComponent),
  },
  {
    path: "support",
    loadComponent: () =>
      import("./chunk-BV3YEI6E.js").then((r) => r.SupportTicketComponent),
  },
  {
    path: "encrypt-text",
    loadComponent: () =>
      import("./chunk-LEQP6EIY.js").then((r) => r.EncryptTextComponent),
  },
  {
    path: "decrypt-text",
    loadComponent: () =>
      import("./chunk-73IT3YNS.js").then((r) => r.DecryptTextComponent),
  },
  {
    path: "guide",
    loadComponent: () =>
      import("./chunk-CGJHWV4M.js").then((r) => r.GuideComponent),
  },
];
var Qn = { providers: [Yt({ eventCoalescing: !0 }), an(Vn), Bn(), un(), tn()] };
var Tr = (r) => ({ active: r });
function Cr(r, e) {
  if (r & 1) {
    let t = pe();
    m(0, "a", 21),
      ie("click", function () {
        de(t);
        let i = Q(2);
        return fe(i.toggleMobileMenu());
      }),
      A(1, "i", 22),
      m(2, "span"),
      S(3),
      g(),
      m(4, "span", 6),
      S(5),
      g()();
  }
  if (r & 2) {
    let t = Q().$implicit,
      n = Q();
    L("routerLink", t.href)("ngClass", Ut(7, Tr, n.isCurrentRoute(t.href))),
      M(),
      $t(t.icon),
      M(2),
      Se(t.name),
      M(2),
      Se(t.description);
  }
}
function Pr(r, e) {
  if ((r & 1 && (m(0, "li", 14), V(1, Cr, 6, 9, "a", 20), g()), r & 2)) {
    let t = e.$implicit;
    M(), L("ngIf", t.isDisplay);
  }
}
function Mr(r, e) {
  if ((r & 1 && (m(0, "span", 28), S(1), g()), r & 2)) {
    let t = Q(2);
    M(), Se(t.notificationCount);
  }
}
function Ar(r, e) {
  if (r & 1) {
    let t = pe();
    m(0, "button", 33),
      ie("click", function () {
        de(t);
        let i = Q(3);
        return fe(i.markAllAsRead());
      }),
      S(1, " Mark all as read "),
      g();
  }
}
function Nr(r, e) {
  if (r & 1) {
    let t = pe();
    m(0, "div", 36)(1, "div", 37),
      ie("click", function () {
        let i = de(t).$implicit,
          s = Q(4);
        return fe(s.handleNotificationClick(i));
      }),
      m(2, "p", 38),
      S(3),
      g(),
      m(4, "p", 39),
      S(5),
      Wt(6, "date"),
      g()()();
  }
  if (r & 2) {
    let t = e.$implicit;
    Oe("unread", !t.isRead),
      M(3),
      Se(t.title),
      M(2),
      De(" ", Gt(6, 4, t.createdAt, "short"), " ");
  }
}
function kr(r, e) {
  if ((r & 1 && (m(0, "div", 34), V(1, Nr, 7, 7, "div", 35), g()), r & 2)) {
    let t = Q(3);
    M(), L("ngForOf", t.notifications);
  }
}
function Or(r, e) {
  r & 1 &&
    (m(0, "div", 40),
    A(1, "i", 41),
    m(2, "p"),
    S(3, "No new notifications"),
    g()());
}
function Dr(r, e) {
  if (
    (r & 1 &&
      (m(0, "div", 29)(1, "div", 30)(2, "h3"),
      S(3, "Notifications"),
      g(),
      V(4, Ar, 2, 0, "button", 31),
      g(),
      V(5, kr, 2, 1, "div", 32)(6, Or, 4, 0, "ng-template", null, 0, Ht),
      g()),
    r & 2)
  ) {
    let t = jt(7),
      n = Q(2);
    Oe("show", n.showNotifications),
      M(4),
      L("ngIf", n.notifications.length > 0),
      M(),
      L("ngIf", n.notifications.length > 0)("ngIfElse", t);
  }
}
function Ir(r, e) {
  if (r & 1) {
    let t = pe();
    m(0, "div", 23)(1, "button", 24),
      ie("click", function () {
        de(t);
        let i = Q();
        return fe(i.toggleNotifications());
      }),
      A(2, "i", 25),
      V(3, Mr, 2, 1, "span", 26),
      g(),
      m(4, "span", 6),
      S(5, "Notifications"),
      g(),
      V(6, Dr, 8, 5, "div", 27),
      g();
  }
  if (r & 2) {
    let t = Q();
    M(3), L("ngIf", t.notificationCount > 0), M(3), L("ngIf", t.isLogin);
  }
}
function xr(r, e) {
  if (r & 1) {
    let t = pe();
    m(0, "div", 42)(1, "div", 43),
      A(2, "img", 44),
      m(3, "span", 6),
      S(4, "My Profile"),
      g()(),
      m(5, "button", 45),
      ie("click", function () {
        de(t);
        let i = Q();
        return fe(i.signOut());
      }),
      A(6, "i", 46),
      m(7, "span"),
      S(8, "Sign out"),
      g()()();
  }
}
function Rr(r, e) {
  r & 1 && (m(0, "a", 47), A(1, "i", 48), m(2, "span"), S(3, "Sign in"), g()());
}
var Ze = class r {
  constructor(e, t) {
    this.router = e;
    this.userService = t;
  }
  isLogin = !1;
  showMobileMenu = !1;
  showNotifications = !1;
  notificationCount = 0;
  notifications = [];
  pollingSubscription;
  navigation = [];
  ngOnInit() {
    (this.isLogin = !!localStorage.getItem("authToken")),
      this.startNotificationPolling(),
      (this.navigation = [
        {
          name: "Home",
          href: "/",
          icon: "fas fa-home",
          description: "Go to home page",
          isDisplay: !0,
        },
        {
          name: "Dashboard",
          href: "/dashboard",
          icon: "fas fa-tachometer-alt",
          description: "View your dashboard",
          isDisplay: this.isLogin,
        },
        {
          name: "Upload",
          href: "/upload",
          icon: "fas fa-upload",
          description: "Upload and Secure",
          isDisplay: !0,
        },
        {
          name: "Mask Text",
          href: "/mask-text",
          icon: "fas fa-book",
          description: "Mask you Pii",
          isDisplay: !0,
        },
        {
          name: "Encrypt",
          href: "/encrypt-text",
          icon: "fas fa-lock",
          description: "Encrypt your data",
          isDisplay: this.isLogin,
        },
        {
          name: "Decrypt",
          href: "/decrypt-text",
          icon: "fas fa-unlock",
          description: "Decrypt your data",
          isDisplay: this.isLogin,
        },
      ]),
      document.addEventListener("click", this.handleOutsideClick.bind(this));
  }
  startNotificationPolling() {
    this.loadNotifications(),
      (this.pollingSubscription = Kt(1e4).subscribe(() => {
        this.loadNotifications();
      }));
  }
  loadNotifications() {
    return qt(this, null, function* () {
      try {
        let e = yield this.userService.getUserNotifications();
        (this.notifications = e.sort(
          (t, n) =>
            new Date(n.createdAt).getTime() - new Date(t.createdAt).getTime(),
        )),
          (this.notificationCount = e.length);
      } catch (e) {
        console.error("Error loading notifications:", e);
      }
    });
  }
  ngOnDestroy() {
    this.pollingSubscription && this.pollingSubscription.unsubscribe(),
      document.removeEventListener("click", this.handleOutsideClick.bind(this));
  }
  toggleMobileMenu() {
    (this.showMobileMenu = !this.showMobileMenu),
      this.showMobileMenu &&
        this.showNotifications &&
        (this.showNotifications = !1);
  }
  toggleNotifications(e) {
    e && e.stopPropagation(),
      (this.showNotifications = !this.showNotifications);
  }
  handleOutsideClick(e) {
    let t = e.target,
      n = document.querySelector(".notification-bell"),
      i = document.querySelector(".notifications-dropdown");
    this.showNotifications &&
      n &&
      i &&
      !n.contains(t) &&
      !i.contains(t) &&
      (this.showNotifications = !1);
  }
  addNotification(e) {
    this.notifications.unshift(e), this.updateNotificationCount();
  }
  markAllAsRead() {
    this.notifications.forEach((e) => {
      this.userService.markNotificationAsRead(e._id);
    }),
      this.updateNotificationCount();
  }
  handleNotificationClick(e) {
    switch ((this.userService.markNotificationAsRead(e._id), e.type)) {
      case "message_encrypted":
        e.metadata.messageId &&
          this.router.navigate(["/decrypt-text"], {
            state: { messageId: e.metadata.messageId },
          });
        break;
      case "support_response":
        e.metadata.ticketId &&
          this.router.navigate(["/support"], {
            state: { ticketId: e.metadata.ticketId },
          });
        break;
    }
    (e.isRead = !0),
      this.updateNotificationCount(),
      (this.showNotifications = !1);
  }
  updateNotificationCount() {
    this.notificationCount = this.notifications.filter((e) => !e.isRead).length;
  }
  isCurrentRoute(e) {
    return e === "/" && this.router.url === "/"
      ? !0
      : this.router.url.startsWith(e) && e !== "/";
  }
  signOut() {
    localStorage.removeItem("authToken"),
      localStorage.removeItem("userId"),
      localStorage.removeItem("userName"),
      (this.isLogin = !1),
      (window.location.href = "/sign-in");
  }
  static ɵfac = function (t) {
    return new (t || r)(Z(ge), Z(fn));
  };
  static ɵcmp = me({
    type: r,
    selectors: [["app-navbar"]],
    decls: 24,
    vars: 6,
    consts: [
      ["noNotifications", ""],
      ["role", "navigation", "aria-label", "Main navigation", 1, "navbar"],
      [1, "container"],
      [1, "logo"],
      ["routerLink", "/", 1, "tooltip"],
      ["src", "assets/logo.png", "alt", "DMS Logo", 1, "logo-image"],
      [1, "tooltip-text"],
      [
        "aria-label",
        "Toggle navigation menu",
        1,
        "mobile-menu-toggle",
        "hide-desktop",
        3,
        "click",
      ],
      [1, "fas", "fa-bars"],
      [1, "nav-container"],
      ["role", "menubar", 1, "nav-links"],
      ["role", "none", 4, "ngFor", "ngForOf"],
      [1, "profile-section"],
      [1, "nav-links"],
      ["role", "none"],
      ["routerLink", "/faq", "role", "menuitem", 1, "tooltip"],
      ["aria-hidden", "true", 1, "fas", "fa-question-circle"],
      ["class", "tooltip notification-bell", 4, "ngIf"],
      ["class", "user-profile", 4, "ngIf"],
      ["routerLink", "/sign-in", "class", "btn btn-primary sign-in", 4, "ngIf"],
      [
        "class",
        "tooltip",
        "role",
        "menuitem",
        3,
        "routerLink",
        "ngClass",
        "click",
        4,
        "ngIf",
      ],
      ["role", "menuitem", 1, "tooltip", 3, "click", "routerLink", "ngClass"],
      ["aria-hidden", "true"],
      [1, "tooltip", "notification-bell"],
      ["aria-label", "Notifications", 1, "btn-icon", 3, "click"],
      [1, "fas", "fa-bell"],
      ["class", "notification-badge", 4, "ngIf"],
      ["class", "notifications-dropdown", 3, "show", 4, "ngIf"],
      [1, "notification-badge"],
      [1, "notifications-dropdown"],
      [1, "notifications-header"],
      ["class", "btn-text", 3, "click", 4, "ngIf"],
      ["class", "notifications-body", 4, "ngIf", "ngIfElse"],
      [1, "btn-text", 3, "click"],
      [1, "notifications-body"],
      ["class", "notification-item", 3, "unread", 4, "ngFor", "ngForOf"],
      [1, "notification-item"],
      [1, "notification-content", 3, "click"],
      [1, "notification-text"],
      [1, "notification-time"],
      [1, "no-notifications"],
      [1, "fas", "fa-bell-slash"],
      [1, "user-profile"],
      [1, "tooltip"],
      [
        "src",
        "assets/profile.png",
        "alt",
        "User profile",
        "routerLink",
        "/profile",
        1,
        "profile-image",
      ],
      [1, "btn", "btn-outline", "sign-out", 3, "click"],
      ["aria-hidden", "true", 1, "fas", "fa-sign-out-alt"],
      ["routerLink", "/sign-in", 1, "btn", "btn-primary", "sign-in"],
      ["aria-hidden", "true", 1, "fas", "fa-sign-in-alt"],
    ],
    template: function (t, n) {
      t & 1 &&
        (m(0, "nav", 1)(1, "div", 2)(2, "div", 3)(3, "a", 4),
        A(4, "img", 5),
        m(5, "span", 6),
        S(6, "Home"),
        g()()(),
        m(7, "button", 7),
        ie("click", function () {
          return n.toggleMobileMenu();
        }),
        A(8, "i", 8),
        g(),
        m(9, "div", 9)(10, "ul", 10),
        V(11, Pr, 2, 1, "li", 11),
        g(),
        m(12, "div", 12)(13, "ul", 13)(14, "li", 14)(15, "a", 15),
        A(16, "i", 16),
        m(17, "span"),
        S(18, "FAQ"),
        g(),
        m(19, "span", 6),
        S(20, "Frequently Asked Questions"),
        g()()()(),
        V(21, Ir, 7, 2, "div", 17)(22, xr, 9, 0, "div", 18)(
          23,
          Rr,
          4,
          0,
          "a",
          19,
        ),
        g()()()()),
        t & 2 &&
          (M(9),
          Oe("show-mobile-menu", n.showMobileMenu),
          M(2),
          L("ngForOf", n.navigation),
          M(10),
          L("ngIf", n.isLogin),
          M(),
          L("ngIf", n.isLogin),
          M(),
          L("ngIf", !n.isLogin));
    },
    dependencies: [he, Zt, Jt, Ie, en, ln, on],
    styles: [
      ".navbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:var(--spacing-3) var(--spacing-4);background-color:var(--gray-800);color:#fff;margin:0;box-shadow:var(--shadow-md);position:sticky;top:0;z-index:100}.container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%}.logo[_ngcontent-%COMP%]{display:flex;align-items:center}.tooltip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{align-items:center}.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;text-decoration:none}.logo-image[_ngcontent-%COMP%]{height:40px;border-radius:var(--radius-md);transition:transform var(--transition-fast)}.logo-image[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.nav-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;flex:1;margin-left:var(--spacing-6)}.nav-links[_ngcontent-%COMP%]{display:flex;list-style:none;padding:0;margin:0;gap:var(--spacing-1)}.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;text-decoration:none;color:var(--gray-300);padding:var(--spacing-2) var(--spacing-3);border-radius:var(--radius-md);transition:all var(--transition-normal);font-size:var(--font-sm);font-weight:500}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:var(--spacing-2);font-size:var(--font-lg)}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .nav-links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color:var(--gray-700);color:#fff}.profile-section[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--spacing-4)}.notification-bell[_ngcontent-%COMP%]{position:relative}.btn-icon[_ngcontent-%COMP%]{background:none;border:none;color:var(--gray-300);font-size:var(--font-xl);padding:var(--spacing-2);border-radius:var(--radius-full);cursor:pointer;transition:all var(--transition-normal);display:flex;align-items:center;justify-content:center}.btn-icon[_ngcontent-%COMP%]:hover{background-color:var(--gray-700);color:#fff}.notification-badge[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-5px;background-color:var(--error);color:#fff;font-size:var(--font-xs);width:18px;height:18px;border-radius:var(--radius-full);display:flex;align-items:center;justify-content:center;font-weight:700}.notifications-dropdown[_ngcontent-%COMP%]{position:absolute;top:calc(100% + var(--spacing-2));right:0;width:320px;background-color:#fff;border-radius:var(--radius-lg);box-shadow:var(--shadow-lg);display:none;z-index:150;overflow:hidden}.notifications-dropdown.show[_ngcontent-%COMP%]{display:block}.notifications-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:var(--spacing-3) var(--spacing-4);border-bottom:1px solid var(--gray-200)}.notifications-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:var(--font-lg);color:var(--gray-900)}.btn-text[_ngcontent-%COMP%]{background:none;border:none;color:var(--primary-600);font-size:var(--font-sm);cursor:pointer;padding:0}.btn-text[_ngcontent-%COMP%]:hover{text-decoration:underline}.notifications-body[_ngcontent-%COMP%]{max-height:300px;overflow-y:auto}.notification-item[_ngcontent-%COMP%]{display:flex;align-items:flex-start;padding:var(--spacing-3) var(--spacing-4);border-bottom:1px solid var(--gray-200);transition:background-color var(--transition-fast)}.notification-item[_ngcontent-%COMP%]:hover{background-color:var(--gray-100)}.notification-item.unread[_ngcontent-%COMP%]{background-color:var(--primary-50)}.notification-icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:32px;height:32px;background-color:var(--primary-100);color:var(--primary-700);border-radius:var(--radius-full);margin-right:var(--spacing-3);flex-shrink:0}.notification-content[_ngcontent-%COMP%]{cursor:pointer;flex:1}.notification-text[_ngcontent-%COMP%]{margin:0;font-size:var(--font-sm);color:var(--gray-900)}.notification-time[_ngcontent-%COMP%]{margin:var(--spacing-1) 0 0 0;font-size:var(--font-xs);color:var(--gray-500)}.no-notifications[_ngcontent-%COMP%]{padding:var(--spacing-6);text-align:center;color:var(--gray-500)}.no-notifications[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:var(--font-3xl);margin-bottom:var(--spacing-3)}.no-notifications[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:var(--font-sm)}.user-profile[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--spacing-3)}.profile-image[_ngcontent-%COMP%]{height:38px;width:38px;border-radius:var(--radius-full);object-fit:cover;cursor:pointer;border:2px solid var(--gray-300);transition:border-color var(--transition-normal),transform var(--transition-fast)}.profile-image[_ngcontent-%COMP%]:hover{border-color:var(--primary-400);transform:scale(1.05)}.sign-out[_ngcontent-%COMP%]{background-color:var(--primary-800);color:#fff;padding:var(--spacing-1) var(--spacing-3);font-size:var(--font-sm)}.sign-out[_ngcontent-%COMP%]:hover{background-color:#fff;color:var(--gray-800)}.sign-in[_ngcontent-%COMP%]{background-color:var(--primary-800);padding:var(--spacing-1) var(--spacing-3);font-size:var(--font-sm)}.mobile-menu-toggle[_ngcontent-%COMP%]{display:none;background:none;border:none;color:#fff;font-size:var(--font-xl);padding:var(--spacing-2);cursor:pointer}@media (max-width: 768px){.navbar[_ngcontent-%COMP%]{padding:var(--spacing-2) var(--spacing-3)}.mobile-menu-toggle[_ngcontent-%COMP%]{display:block}.nav-container[_ngcontent-%COMP%]{position:fixed;inset:64px 0 0;background-color:var(--gray-800);flex-direction:column;align-items:stretch;justify-content:flex-start;padding:var(--spacing-4);margin-left:0;transform:translate(-100%);transition:transform var(--transition-normal);z-index:99;overflow-y:auto}.nav-container.show-mobile-menu[_ngcontent-%COMP%]{transform:translate(0)}.nav-links[_ngcontent-%COMP%]{flex-direction:column;width:100%;gap:var(--spacing-2)}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:var(--spacing-3) var(--spacing-4);width:100%}.profile-section[_ngcontent-%COMP%]{flex-direction:column;margin-top:var(--spacing-6);width:100%}.profile-section[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]{margin-bottom:var(--spacing-4)}.user-profile[_ngcontent-%COMP%]{justify-content:center;padding:var(--spacing-4) 0;border-top:1px solid var(--gray-700);width:100%}.notifications-dropdown[_ngcontent-%COMP%]{position:fixed;top:64px;left:0;right:0;width:100%;border-radius:0}}",
    ],
  });
};
var Je = class r {
  constructor(e, t) {
    this.router = e;
    this.authService = t;
  }
  currentYear = new Date().getFullYear();
  isLoggedIn = !1;
  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((e) => {
      this.isLoggedIn = e;
    });
  }
  navigateTo(e) {
    this.router.navigate([e]);
  }
  navigateToExternal(e) {
    window.open(e, "_blank");
  }
  static ɵfac = function (t) {
    return new (t || r)(Z(ge), Z(dn));
  };
  static ɵcmp = me({
    type: r,
    selectors: [["app-footer"]],
    decls: 76,
    vars: 1,
    consts: [
      [1, "footer"],
      [1, "container"],
      [1, "footer-content"],
      [1, "footer-logo"],
      ["src", "assets/logo.png", "alt", "DMS Logo", 1, "footer-logo-img"],
      [1, "footer-tagline"],
      [1, "footer-links"],
      [1, "footer-column"],
      ["href", "/"],
      ["href", "/dashboard"],
      ["href", "/support"],
      ["href", "/guide"],
      ["href", "/encrypt-text-pii"],
      ["href", "/decrypt-text-pii"],
      ["href", "/mask-text-pii"],
      ["href", "/upload"],
      ["href", "/faq"],
      [
        "href",
        "https://github.com",
        "target",
        "_blank",
        "rel",
        "noopener noreferrer",
      ],
      [1, "fas", "fa-external-link-alt"],
      [1, "footer-bottom"],
      [1, "social-links"],
      ["href", "#", "aria-label", "Twitter", 1, "social-link", "tooltip"],
      [1, "fab", "fa-twitter"],
      [1, "tooltip-text"],
      ["href", "#", "aria-label", "LinkedIn", 1, "social-link", "tooltip"],
      [1, "fab", "fa-linkedin"],
      ["href", "#", "aria-label", "GitHub", 1, "social-link", "tooltip"],
      [1, "fab", "fa-github"],
      [1, "copyright"],
    ],
    template: function (t, n) {
      t & 1 &&
        (m(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3),
        A(4, "img", 4),
        m(5, "div", 5)(6, "h3"),
        S(7, "Secure Document Management System"),
        g(),
        m(8, "p"),
        S(9, "Protecting your data with advanced encryption"),
        g()()(),
        m(10, "div", 6)(11, "div", 7)(12, "h4"),
        S(13, "Quick Links"),
        g(),
        m(14, "ul")(15, "li")(16, "a", 8),
        S(17, "Home"),
        g()(),
        m(18, "li")(19, "a", 9),
        S(20, "Dashboard"),
        g()(),
        m(21, "li")(22, "a", 10),
        S(23, "Support"),
        g()(),
        m(24, "li")(25, "a", 11),
        S(26, "Guide"),
        g()()()(),
        m(27, "div", 7)(28, "h4"),
        S(29, "Tools"),
        g(),
        m(30, "ul")(31, "li")(32, "a", 12),
        S(33, "Encrypt Text"),
        g()(),
        m(34, "li")(35, "a", 13),
        S(36, "Decrypt Text"),
        g()(),
        m(37, "li")(38, "a", 14),
        S(39, "Mask Text"),
        g()(),
        m(40, "li")(41, "a", 15),
        S(42, "Upload Documents"),
        g()()()(),
        m(43, "div", 7)(44, "h4"),
        S(45, "Resources"),
        g(),
        m(46, "ul")(47, "li")(48, "a", 16),
        S(49, "FAQ"),
        g()(),
        m(50, "li")(51, "a", 11),
        S(52, "User Guide"),
        g()(),
        m(53, "li")(54, "a", 10),
        S(55, "Get Support"),
        g()(),
        m(56, "li")(57, "a", 17),
        S(58, "GitHub "),
        A(59, "i", 18),
        g()()()()()(),
        m(60, "div", 19)(61, "div", 20)(62, "a", 21),
        A(63, "i", 22),
        m(64, "span", 23),
        S(65, "Twitter"),
        g()(),
        m(66, "a", 24),
        A(67, "i", 25),
        m(68, "span", 23),
        S(69, "LinkedIn"),
        g()(),
        m(70, "a", 26),
        A(71, "i", 27),
        m(72, "span", 23),
        S(73, "GitHub"),
        g()()(),
        m(74, "div", 28),
        S(75),
        g()()()()),
        t & 2 &&
          (M(75),
          De(
            " \xA9 ",
            n.currentYear,
            " Document Management System. All rights reserved. ",
          ));
    },
    dependencies: [he],
    styles: [
      '.footer[_ngcontent-%COMP%]{background-color:var(--gray-800);color:var(--gray-300);padding:var(--spacing-12) 0 var(--spacing-6)}.footer-content[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--spacing-10);margin-bottom:var(--spacing-10)}.footer-logo[_ngcontent-%COMP%]{flex:1;min-width:250px;display:flex;align-items:flex-start;gap:var(--spacing-4)}.footer-logo-img[_ngcontent-%COMP%]{width:60px;height:auto;border-radius:var(--radius-md)}.footer-tagline[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff;font-size:var(--font-lg);margin:0 0 var(--spacing-2)}.footer-tagline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray-400);font-size:var(--font-sm);margin:0}.footer-links[_ngcontent-%COMP%]{flex:2;display:flex;justify-content:space-between;gap:var(--spacing-6)}.footer-column[_ngcontent-%COMP%]{min-width:160px}.footer-column[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#fff;font-size:var(--font-lg);margin:0 0 var(--spacing-4);position:relative;padding-bottom:var(--spacing-2)}.footer-column[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:0;width:40px;height:2px;background-color:var(--primary-500)}.footer-column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.footer-column[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:var(--spacing-2)}.footer-column[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--gray-400);text-decoration:none;transition:color var(--transition-fast);display:inline-flex;align-items:center;gap:var(--spacing-1);font-size:var(--font-sm)}.footer-column[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer;color:#fff}.footer-column[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:.8em}.footer-bottom[_ngcontent-%COMP%]{border-top:1px solid var(--gray-700);padding-top:var(--spacing-6);display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:var(--spacing-4)}.social-links[_ngcontent-%COMP%]{display:flex;gap:var(--spacing-3)}.social-link[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:var(--radius-full);background-color:var(--gray-700);color:#fff;text-decoration:none;transition:background-color var(--transition-normal)}.social-link[_ngcontent-%COMP%]:hover{background-color:var(--primary-600)}.social-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:var(--font-lg)}.copyright[_ngcontent-%COMP%]{color:var(--gray-500);font-size:var(--font-sm)}@media (max-width: 768px){.footer-content[_ngcontent-%COMP%]{flex-direction:column;gap:var(--spacing-8)}.footer-links[_ngcontent-%COMP%]{flex-direction:column;gap:var(--spacing-6)}.footer-bottom[_ngcontent-%COMP%]{flex-direction:column;gap:var(--spacing-4);text-align:center}.copyright[_ngcontent-%COMP%]{order:2}}',
    ],
  });
};
function Lr(r, e) {
  r & 1 && (m(0, "div"), A(1, "app-navbar"), g());
}
function Fr(r, e) {
  r & 1 && (m(0, "div"), A(1, "app-footer"), g());
}
var et = class r {
  constructor(e) {
    this.router = e;
    this.router.events.subscribe(() => {
      (this.isErrorPage = this.router.url.startsWith("/error")),
        (this.isAdmin = this.router.url.startsWith("/admin"));
    });
  }
  title = "DMS";
  isErrorPage = !1;
  isAdmin = !1;
  static ɵfac = function (t) {
    return new (t || r)(Z(ge));
  };
  static ɵcmp = me({
    type: r,
    selectors: [["app-root"]],
    decls: 4,
    vars: 2,
    consts: [
      [1, "root"],
      [4, "ngIf"],
    ],
    template: function (t, n) {
      t & 1 &&
        (m(0, "div", 0),
        V(1, Lr, 2, 0, "div", 1),
        A(2, "router-outlet"),
        V(3, Fr, 2, 0, "div", 1),
        g()),
        t & 2 &&
          (M(),
          L("ngIf", !n.isErrorPage && !n.isAdmin),
          M(2),
          L("ngIf", !n.isErrorPage && !n.isAdmin));
    },
    dependencies: [sn, Ze, Je, he, Ie],
    styles: [
      ".root[_ngcontent-%COMP%]{margin:0;padding:0}app-footer[_ngcontent-%COMP%]{position:relative;bottom:0;width:100%}",
    ],
  });
};
rn(et, Qn).catch((r) => console.error(r));
