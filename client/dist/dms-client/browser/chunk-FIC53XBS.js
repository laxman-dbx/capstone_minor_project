import { a as bt, b as Mn } from "./chunk-7VLUVWKX.js";
import { a as Qt } from "./chunk-NTFNQ3FE.js";
import { a as wn } from "./chunk-SW7ACCD2.js";
import {
  b as pn,
  c as gn,
  d as _n,
  e as vn,
  g as bn,
  h as yn,
  j as xn,
  q as Cn,
} from "./chunk-ZOHBZ4HP.js";
import { h as vt } from "./chunk-GTDEETYW.js";
import "./chunk-2PQBQFV5.js";
import { a as fn } from "./chunk-UD6YS3BW.js";
import { a as hn, c as mn, d as un, f as _t } from "./chunk-E5QSSROS.js";
import { c as cn } from "./chunk-6GCQ5O75.js";
import { c as dn } from "./chunk-OMR3M7LI.js";
import {
  $a as c,
  $b as qi,
  Ab as A,
  Ba as ht,
  Bb as $i,
  Bc as rn,
  C as Bi,
  Cb as Z,
  D as lt,
  Db as s,
  Ea as Hi,
  Eb as l,
  Ec as gt,
  F as zi,
  Fb as u,
  Fc as ye,
  Ga as Wi,
  Gc as an,
  H as Ne,
  Ha as Ee,
  Hc as sn,
  I as $,
  Ia as Ui,
  Ib as Y,
  J as jt,
  Jb as ve,
  Jc as se,
  K as Vi,
  Ka as mt,
  La as De,
  Lb as _,
  Lc as ln,
  M as Ht,
  Mb as f,
  Nb as et,
  O as Me,
  Ob as q,
  P as Wt,
  Pb as ze,
  Qb as X,
  Rb as B,
  Sb as z,
  Tb as Xi,
  U as Ut,
  Ub as Ki,
  Vb as $t,
  W as Yt,
  Wb as m,
  X as dt,
  Xb as F,
  Y as le,
  Ya as Yi,
  Yb as H,
  Z as Gt,
  Zb as Ve,
  _ as ee,
  a as W,
  ac as Qi,
  b as Qe,
  bb as Je,
  bc as Ji,
  ca as v,
  cc as be,
  da as D,
  db as te,
  e as Re,
  eb as de,
  ec as en,
  fa as O,
  fb as j,
  gc as tn,
  ha as ji,
  hb as ut,
  hc as nn,
  ia as a,
  ib as Gi,
  ic as Xt,
  j as we,
  jb as Zt,
  l as Fe,
  la as ct,
  lc as je,
  mb as S,
  na as Be,
  nb as k,
  nc as Oe,
  o as x,
  oa as M,
  ob as I,
  oc as Kt,
  p as Ri,
  pa as E,
  pb as ce,
  pc as on,
  q as Fi,
  qa as _e,
  qb as Zi,
  qc as qt,
  rb as b,
  rc as pt,
  s as ge,
  sa as U,
  va as ae,
  w as Li,
  wa as w,
  wb as ft,
  wc as V,
  xb as ne,
  y as Le,
  yb as p,
  z as Ni,
  za as T,
} from "./chunk-4KGF3EVT.js";
function He(i) {
  return i != null && `${i}` != "false";
}
function tt(i, n = 0) {
  return Oo(i) ? Number(i) : arguments.length === 2 ? n : 0;
}
function Oo(i) {
  return !isNaN(parseFloat(i)) && !isNaN(Number(i));
}
function We(i) {
  return Array.isArray(i) ? i : [i];
}
function L(i) {
  return i == null ? "" : typeof i == "string" ? i : `${i}px`;
}
function he(i) {
  return i instanceof T ? i.nativeElement : i;
}
var ei;
try {
  ei = typeof Intl < "u" && Intl.v8BreakIterator;
} catch {
  ei = !1;
}
var R = (() => {
  class i {
    _platformId = a(Wi);
    isBrowser = this._platformId
      ? ln(this._platformId)
      : typeof document == "object" && !!document;
    EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    BLINK =
      this.isBrowser &&
      !!(window.chrome || ei) &&
      typeof CSS < "u" &&
      !this.EDGE &&
      !this.TRIDENT;
    WEBKIT =
      this.isBrowser &&
      /AppleWebKit/i.test(navigator.userAgent) &&
      !this.BLINK &&
      !this.EDGE &&
      !this.TRIDENT;
    IOS =
      this.isBrowser &&
      /iPad|iPhone|iPod/.test(navigator.userAgent) &&
      !("MSStream" in window);
    FIREFOX =
      this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    ANDROID =
      this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
    SAFARI =
      this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    constructor() {}
    static ɵfac = function (t) {
      return new (t || i)();
    };
    static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
  }
  return i;
})();
var Ue,
  En = [
    "color",
    "button",
    "checkbox",
    "date",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "text",
    "time",
    "url",
    "week",
  ];
function ti() {
  if (Ue) return Ue;
  if (typeof document != "object" || !document) return (Ue = new Set(En)), Ue;
  let i = document.createElement("input");
  return (
    (Ue = new Set(En.filter((n) => (i.setAttribute("type", n), i.type === n)))),
    Ue
  );
}
var it;
function ko() {
  if (it == null && typeof window < "u")
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", { get: () => (it = !0) }),
      );
    } finally {
      it = it || !1;
    }
  return it;
}
function Dn(i) {
  return ko() ? i : !!i.capture;
}
var oe = (function (i) {
    return (
      (i[(i.NORMAL = 0)] = "NORMAL"),
      (i[(i.NEGATED = 1)] = "NEGATED"),
      (i[(i.INVERTED = 2)] = "INVERTED"),
      i
    );
  })(oe || {}),
  yt,
  ke;
function xt() {
  if (ke == null) {
    if (
      typeof document != "object" ||
      !document ||
      typeof Element != "function" ||
      !Element
    )
      return (ke = !1), ke;
    if ("scrollBehavior" in document.documentElement.style) ke = !0;
    else {
      let i = Element.prototype.scrollTo;
      i ? (ke = !/\{\s*\[native code\]\s*\}/.test(i.toString())) : (ke = !1);
    }
  }
  return ke;
}
function Ye() {
  if (typeof document != "object" || !document) return oe.NORMAL;
  if (yt == null) {
    let i = document.createElement("div"),
      n = i.style;
    (i.dir = "rtl"),
      (n.width = "1px"),
      (n.overflow = "auto"),
      (n.visibility = "hidden"),
      (n.pointerEvents = "none"),
      (n.position = "absolute");
    let e = document.createElement("div"),
      t = e.style;
    (t.width = "2px"),
      (t.height = "1px"),
      i.appendChild(e),
      document.body.appendChild(i),
      (yt = oe.NORMAL),
      i.scrollLeft === 0 &&
        ((i.scrollLeft = 1),
        (yt = i.scrollLeft === 0 ? oe.NEGATED : oe.INVERTED)),
      i.remove();
  }
  return yt;
}
var Jt;
function So() {
  if (Jt == null) {
    let i = typeof document < "u" ? document.head : null;
    Jt = !!(i && (i.createShadowRoot || i.attachShadow));
  }
  return Jt;
}
function On(i) {
  if (So()) {
    let n = i.getRootNode ? i.getRootNode() : null;
    if (typeof ShadowRoot < "u" && ShadowRoot && n instanceof ShadowRoot)
      return n;
  }
  return null;
}
function nt() {
  let i = typeof document < "u" && document ? document.activeElement : null;
  for (; i && i.shadowRoot; ) {
    let n = i.shadowRoot.activeElement;
    if (n === i) break;
    i = n;
  }
  return i;
}
function me(i) {
  return i.composedPath ? i.composedPath()[0] : i.target;
}
function ii() {
  return (
    (typeof __karma__ < "u" && !!__karma__) ||
    (typeof jasmine < "u" && !!jasmine) ||
    (typeof jest < "u" && !!jest) ||
    (typeof Mocha < "u" && !!Mocha)
  );
}
function re(i, n, e, t, o) {
  let r = parseInt(Xt.major),
    d = parseInt(Xt.minor);
  return r > 19 || (r === 19 && d > 0) || (r === 0 && d === 0)
    ? i.listen(n, e, t, o)
    : (n.addEventListener(e, t, o),
      () => {
        n.removeEventListener(e, t, o);
      });
}
var Io = new O("cdk-dir-doc", { providedIn: "root", factory: Po });
function Po() {
  return a(V);
}
var To =
  /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function Ao(i) {
  let n = i?.toLowerCase() || "";
  return n === "auto" && typeof navigator < "u" && navigator?.language
    ? To.test(navigator.language)
      ? "rtl"
      : "ltr"
    : n === "rtl"
      ? "rtl"
      : "ltr";
}
var ue = (() => {
  class i {
    value = "ltr";
    change = new ae();
    constructor() {
      let e = a(Io, { optional: !0 });
      if (e) {
        let t = e.body ? e.body.dir : null,
          o = e.documentElement ? e.documentElement.dir : null;
        this.value = Ao(t || o || "ltr");
      }
    }
    ngOnDestroy() {
      this.change.complete();
    }
    static ɵfac = function (t) {
      return new (t || i)();
    };
    static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
  }
  return i;
})();
var xe = (() => {
  class i {
    static ɵfac = function (t) {
      return new (t || i)();
    };
    static ɵmod = k({ type: i });
    static ɵinj = D({});
  }
  return i;
})();
var Fo = 20,
  ni = (() => {
    class i {
      _ngZone = a(w);
      _platform = a(R);
      _renderer = a(te).createRenderer(null, null);
      _cleanupGlobalListener;
      constructor() {}
      _scrolled = new x();
      _scrolledCount = 0;
      scrollContainers = new Map();
      register(e) {
        this.scrollContainers.has(e) ||
          this.scrollContainers.set(
            e,
            e.elementScrolled().subscribe(() => this._scrolled.next(e)),
          );
      }
      deregister(e) {
        let t = this.scrollContainers.get(e);
        t && (t.unsubscribe(), this.scrollContainers.delete(e));
      }
      scrolled(e = Fo) {
        return this._platform.isBrowser
          ? new Fe((t) => {
              this._cleanupGlobalListener ||
                (this._cleanupGlobalListener = this._ngZone.runOutsideAngular(
                  () =>
                    this._renderer.listen("document", "scroll", () =>
                      this._scrolled.next(),
                    ),
                ));
              let o =
                e > 0
                  ? this._scrolled.pipe(jt(e)).subscribe(t)
                  : this._scrolled.subscribe(t);
              return (
                this._scrolledCount++,
                () => {
                  o.unsubscribe(),
                    this._scrolledCount--,
                    this._scrolledCount ||
                      (this._cleanupGlobalListener?.(),
                      (this._cleanupGlobalListener = void 0));
                }
              );
            })
          : ge();
      }
      ngOnDestroy() {
        this._cleanupGlobalListener?.(),
          (this._cleanupGlobalListener = void 0),
          this.scrollContainers.forEach((e, t) => this.deregister(t)),
          this._scrolled.complete();
      }
      ancestorScrolled(e, t) {
        let o = this.getAncestorScrollContainers(e);
        return this.scrolled(t).pipe($((r) => !r || o.indexOf(r) > -1));
      }
      getAncestorScrollContainers(e) {
        let t = [];
        return (
          this.scrollContainers.forEach((o, r) => {
            this._scrollableContainsElement(r, e) && t.push(r);
          }),
          t
        );
      }
      _scrollableContainsElement(e, t) {
        let o = he(t),
          r = e.getElementRef().nativeElement;
        do if (o == r) return !0;
        while ((o = o.parentElement));
        return !1;
      }
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
    }
    return i;
  })(),
  Sn = (() => {
    class i {
      elementRef = a(T);
      scrollDispatcher = a(ni);
      ngZone = a(w);
      dir = a(ue, { optional: !0 });
      _scrollElement = this.elementRef.nativeElement;
      _destroyed = new x();
      _renderer = a(de);
      _cleanupScroll;
      _elementScrolled = new x();
      constructor() {}
      ngOnInit() {
        (this._cleanupScroll = this.ngZone.runOutsideAngular(() =>
          this._renderer.listen(this._scrollElement, "scroll", (e) =>
            this._elementScrolled.next(e),
          ),
        )),
          this.scrollDispatcher.register(this);
      }
      ngOnDestroy() {
        this._cleanupScroll?.(),
          this._elementScrolled.complete(),
          this.scrollDispatcher.deregister(this),
          this._destroyed.next(),
          this._destroyed.complete();
      }
      elementScrolled() {
        return this._elementScrolled;
      }
      getElementRef() {
        return this.elementRef;
      }
      scrollTo(e) {
        let t = this.elementRef.nativeElement,
          o = this.dir && this.dir.value == "rtl";
        e.left == null && (e.left = o ? e.end : e.start),
          e.right == null && (e.right = o ? e.start : e.end),
          e.bottom != null &&
            (e.top = t.scrollHeight - t.clientHeight - e.bottom),
          o && Ye() != oe.NORMAL
            ? (e.left != null &&
                (e.right = t.scrollWidth - t.clientWidth - e.left),
              Ye() == oe.INVERTED
                ? (e.left = e.right)
                : Ye() == oe.NEGATED && (e.left = e.right ? -e.right : e.right))
            : e.right != null &&
              (e.left = t.scrollWidth - t.clientWidth - e.right),
          this._applyScrollToOptions(e);
      }
      _applyScrollToOptions(e) {
        let t = this.elementRef.nativeElement;
        xt()
          ? t.scrollTo(e)
          : (e.top != null && (t.scrollTop = e.top),
            e.left != null && (t.scrollLeft = e.left));
      }
      measureScrollOffset(e) {
        let t = "left",
          o = "right",
          r = this.elementRef.nativeElement;
        if (e == "top") return r.scrollTop;
        if (e == "bottom") return r.scrollHeight - r.clientHeight - r.scrollTop;
        let d = this.dir && this.dir.value == "rtl";
        return (
          e == "start" ? (e = d ? o : t) : e == "end" && (e = d ? t : o),
          d && Ye() == oe.INVERTED
            ? e == t
              ? r.scrollWidth - r.clientWidth - r.scrollLeft
              : r.scrollLeft
            : d && Ye() == oe.NEGATED
              ? e == t
                ? r.scrollLeft + r.scrollWidth - r.clientWidth
                : -r.scrollLeft
              : e == t
                ? r.scrollLeft
                : r.scrollWidth - r.clientWidth - r.scrollLeft
        );
      }
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵdir = I({
        type: i,
        selectors: [
          ["", "cdk-scrollable", ""],
          ["", "cdkScrollable", ""],
        ],
      });
    }
    return i;
  })(),
  Lo = 20,
  oi = (() => {
    class i {
      _platform = a(R);
      _listeners;
      _viewportSize;
      _change = new x();
      _document = a(V, { optional: !0 });
      constructor() {
        let e = a(w),
          t = a(te).createRenderer(null, null);
        e.runOutsideAngular(() => {
          if (this._platform.isBrowser) {
            let o = (r) => this._change.next(r);
            this._listeners = [
              t.listen("window", "resize", o),
              t.listen("window", "orientationchange", o),
            ];
          }
          this.change().subscribe(() => (this._viewportSize = null));
        });
      }
      ngOnDestroy() {
        this._listeners?.forEach((e) => e()), this._change.complete();
      }
      getViewportSize() {
        this._viewportSize || this._updateViewportSize();
        let e = {
          width: this._viewportSize.width,
          height: this._viewportSize.height,
        };
        return this._platform.isBrowser || (this._viewportSize = null), e;
      }
      getViewportRect() {
        let e = this.getViewportScrollPosition(),
          { width: t, height: o } = this.getViewportSize();
        return {
          top: e.top,
          left: e.left,
          bottom: e.top + o,
          right: e.left + t,
          height: o,
          width: t,
        };
      }
      getViewportScrollPosition() {
        if (!this._platform.isBrowser) return { top: 0, left: 0 };
        let e = this._document,
          t = this._getWindow(),
          o = e.documentElement,
          r = o.getBoundingClientRect(),
          d = -r.top || e.body.scrollTop || t.scrollY || o.scrollTop || 0,
          h = -r.left || e.body.scrollLeft || t.scrollX || o.scrollLeft || 0;
        return { top: d, left: h };
      }
      change(e = Lo) {
        return e > 0 ? this._change.pipe(jt(e)) : this._change;
      }
      _getWindow() {
        return this._document.defaultView || window;
      }
      _updateViewportSize() {
        let e = this._getWindow();
        this._viewportSize = this._platform.isBrowser
          ? { width: e.innerWidth, height: e.innerHeight }
          : { width: 0, height: 0 };
      }
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
    }
    return i;
  })();
var kn = (() => {
    class i {
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵmod = k({ type: i });
      static ɵinj = D({});
    }
    return i;
  })(),
  ri = (() => {
    class i {
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵmod = k({ type: i });
      static ɵinj = D({ imports: [xe, kn, xe, kn] });
    }
    return i;
  })();
var ot = class {
    _attachedHost;
    attach(n) {
      return (this._attachedHost = n), n.attach(this);
    }
    detach() {
      let n = this._attachedHost;
      n != null && ((this._attachedHost = null), n.detach());
    }
    get isAttached() {
      return this._attachedHost != null;
    }
    setAttachedHost(n) {
      this._attachedHost = n;
    }
  },
  Ge = class extends ot {
    component;
    viewContainerRef;
    injector;
    componentFactoryResolver;
    projectableNodes;
    constructor(n, e, t, o, r) {
      super(),
        (this.component = n),
        (this.viewContainerRef = e),
        (this.injector = t),
        (this.projectableNodes = r);
    }
  },
  Ze = class extends ot {
    templateRef;
    viewContainerRef;
    context;
    injector;
    constructor(n, e, t, o) {
      super(),
        (this.templateRef = n),
        (this.viewContainerRef = e),
        (this.context = t),
        (this.injector = o);
    }
    get origin() {
      return this.templateRef.elementRef;
    }
    attach(n, e = this.context) {
      return (this.context = e), super.attach(n);
    }
    detach() {
      return (this.context = void 0), super.detach();
    }
  },
  ai = class extends ot {
    element;
    constructor(n) {
      super(), (this.element = n instanceof T ? n.nativeElement : n);
    }
  },
  $e = class {
    _attachedPortal;
    _disposeFn;
    _isDisposed = !1;
    hasAttached() {
      return !!this._attachedPortal;
    }
    attach(n) {
      if (n instanceof Ge)
        return (this._attachedPortal = n), this.attachComponentPortal(n);
      if (n instanceof Ze)
        return (this._attachedPortal = n), this.attachTemplatePortal(n);
      if (this.attachDomPortal && n instanceof ai)
        return (this._attachedPortal = n), this.attachDomPortal(n);
    }
    attachDomPortal = null;
    detach() {
      this._attachedPortal &&
        (this._attachedPortal.setAttachedHost(null),
        (this._attachedPortal = null)),
        this._invokeDisposeFn();
    }
    dispose() {
      this.hasAttached() && this.detach(),
        this._invokeDisposeFn(),
        (this._isDisposed = !0);
    }
    setDisposeFn(n) {
      this._disposeFn = n;
    }
    _invokeDisposeFn() {
      this._disposeFn && (this._disposeFn(), (this._disposeFn = null));
    }
  };
var Ct = class extends $e {
  outletElement;
  _appRef;
  _defaultInjector;
  _document;
  constructor(n, e, t, o, r) {
    super(),
      (this.outletElement = n),
      (this._appRef = t),
      (this._defaultInjector = o),
      (this._document = r);
  }
  attachComponentPortal(n) {
    let e;
    if (n.viewContainerRef) {
      let t = n.injector || n.viewContainerRef.injector,
        o = t.get(Zt, null, { optional: !0 }) || void 0;
      (e = n.viewContainerRef.createComponent(n.component, {
        index: n.viewContainerRef.length,
        injector: t,
        ngModuleRef: o,
        projectableNodes: n.projectableNodes || void 0,
      })),
        this.setDisposeFn(() => e.destroy());
    } else
      (e = pt(n.component, {
        elementInjector: n.injector || this._defaultInjector || U.NULL,
        environmentInjector: this._appRef.injector,
        projectableNodes: n.projectableNodes || void 0,
      })),
        this._appRef.attachView(e.hostView),
        this.setDisposeFn(() => {
          this._appRef.viewCount > 0 && this._appRef.detachView(e.hostView),
            e.destroy();
        });
    return (
      this.outletElement.appendChild(this._getComponentRootNode(e)),
      (this._attachedPortal = n),
      e
    );
  }
  attachTemplatePortal(n) {
    let e = n.viewContainerRef,
      t = e.createEmbeddedView(n.templateRef, n.context, {
        injector: n.injector,
      });
    return (
      t.rootNodes.forEach((o) => this.outletElement.appendChild(o)),
      t.detectChanges(),
      this.setDisposeFn(() => {
        let o = e.indexOf(t);
        o !== -1 && e.remove(o);
      }),
      (this._attachedPortal = n),
      t
    );
  }
  attachDomPortal = (n) => {
    let e = n.element;
    e.parentNode;
    let t = this._document.createComment("dom-portal");
    e.parentNode.insertBefore(t, e),
      this.outletElement.appendChild(e),
      (this._attachedPortal = n),
      super.setDisposeFn(() => {
        t.parentNode && t.parentNode.replaceChild(e, t);
      });
  };
  dispose() {
    super.dispose(), this.outletElement.remove();
  }
  _getComponentRootNode(n) {
    return n.hostView.rootNodes[0];
  }
};
var rt = (() => {
  class i extends $e {
    _moduleRef = a(Zt, { optional: !0 });
    _document = a(V);
    _viewContainerRef = a(ut);
    _isInitialized = !1;
    _attachedRef;
    constructor() {
      super();
    }
    get portal() {
      return this._attachedPortal;
    }
    set portal(e) {
      (this.hasAttached() && !e && !this._isInitialized) ||
        (this.hasAttached() && super.detach(),
        e && super.attach(e),
        (this._attachedPortal = e || null));
    }
    attached = new ae();
    get attachedRef() {
      return this._attachedRef;
    }
    ngOnInit() {
      this._isInitialized = !0;
    }
    ngOnDestroy() {
      super.dispose(), (this._attachedRef = this._attachedPortal = null);
    }
    attachComponentPortal(e) {
      e.setAttachedHost(this);
      let t =
          e.viewContainerRef != null
            ? e.viewContainerRef
            : this._viewContainerRef,
        o = t.createComponent(e.component, {
          index: t.length,
          injector: e.injector || t.injector,
          projectableNodes: e.projectableNodes || void 0,
          ngModuleRef: this._moduleRef || void 0,
        });
      return (
        t !== this._viewContainerRef &&
          this._getRootNode().appendChild(o.hostView.rootNodes[0]),
        super.setDisposeFn(() => o.destroy()),
        (this._attachedPortal = e),
        (this._attachedRef = o),
        this.attached.emit(o),
        o
      );
    }
    attachTemplatePortal(e) {
      e.setAttachedHost(this);
      let t = this._viewContainerRef.createEmbeddedView(
        e.templateRef,
        e.context,
        { injector: e.injector },
      );
      return (
        super.setDisposeFn(() => this._viewContainerRef.clear()),
        (this._attachedPortal = e),
        (this._attachedRef = t),
        this.attached.emit(t),
        t
      );
    }
    attachDomPortal = (e) => {
      let t = e.element;
      t.parentNode;
      let o = this._document.createComment("dom-portal");
      e.setAttachedHost(this),
        t.parentNode.insertBefore(o, t),
        this._getRootNode().appendChild(t),
        (this._attachedPortal = e),
        super.setDisposeFn(() => {
          o.parentNode && o.parentNode.replaceChild(t, o);
        });
    };
    _getRootNode() {
      let e = this._viewContainerRef.element.nativeElement;
      return e.nodeType === e.ELEMENT_NODE ? e : e.parentNode;
    }
    static ɵfac = function (t) {
      return new (t || i)();
    };
    static ɵdir = I({
      type: i,
      selectors: [["", "cdkPortalOutlet", ""]],
      inputs: { portal: [0, "cdkPortalOutlet", "portal"] },
      outputs: { attached: "attached" },
      exportAs: ["cdkPortalOutlet"],
      features: [ce],
    });
  }
  return i;
})();
var Se = (() => {
  class i {
    static ɵfac = function (t) {
      return new (t || i)();
    };
    static ɵmod = k({ type: i });
    static ɵinj = D({});
  }
  return i;
})();
var wt = new WeakMap(),
  Ie = (() => {
    class i {
      _appRef;
      _injector = a(U);
      _environmentInjector = a(ct);
      load(e) {
        let t = (this._appRef = this._appRef || this._injector.get(ft)),
          o = wt.get(t);
        o ||
          ((o = { loaders: new Set(), refs: [] }),
          wt.set(t, o),
          t.onDestroy(() => {
            wt.get(t)?.refs.forEach((r) => r.destroy()), wt.delete(t);
          })),
          o.loaders.has(e) ||
            (o.loaders.add(e),
            o.refs.push(
              pt(e, { environmentInjector: this._environmentInjector }),
            ));
      }
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
    }
    return i;
  })(),
  In = (() => {
    class i {
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵcmp = S({
        type: i,
        selectors: [["ng-component"]],
        exportAs: ["cdkVisuallyHidden"],
        decls: 0,
        vars: 0,
        template: function (t, o) {},
        styles: [
          ".cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      });
    }
    return i;
  })();
function Mt(i, ...n) {
  return n.length
    ? n.some((e) => i[e])
    : i.altKey || i.shiftKey || i.ctrlKey || i.metaKey;
}
var Bo = (() => {
  class i {
    create(e) {
      return typeof MutationObserver > "u" ? null : new MutationObserver(e);
    }
    static ɵfac = function (t) {
      return new (t || i)();
    };
    static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
  }
  return i;
})();
var Et = (() => {
  class i {
    static ɵfac = function (t) {
      return new (t || i)();
    };
    static ɵmod = k({ type: i });
    static ɵinj = D({ providers: [Bo] });
  }
  return i;
})();
var Pn = new Set(),
  Pe,
  zo = (() => {
    class i {
      _platform = a(R);
      _nonce = a(Ui, { optional: !0 });
      _matchMedia;
      constructor() {
        this._matchMedia =
          this._platform.isBrowser && window.matchMedia
            ? window.matchMedia.bind(window)
            : jo;
      }
      matchMedia(e) {
        return (
          (this._platform.WEBKIT || this._platform.BLINK) && Vo(e, this._nonce),
          this._matchMedia(e)
        );
      }
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
    }
    return i;
  })();
function Vo(i, n) {
  if (!Pn.has(i))
    try {
      Pe ||
        ((Pe = document.createElement("style")),
        n && Pe.setAttribute("nonce", n),
        Pe.setAttribute("type", "text/css"),
        document.head.appendChild(Pe)),
        Pe.sheet &&
          (Pe.sheet.insertRule(`@media ${i} {body{ }}`, 0), Pn.add(i));
    } catch (e) {
      console.error(e);
    }
}
function jo(i) {
  return {
    matches: i === "all" || i === "",
    media: i,
    addListener: () => {},
    removeListener: () => {},
  };
}
var An = (() => {
  class i {
    _mediaMatcher = a(zo);
    _zone = a(w);
    _queries = new Map();
    _destroySubject = new x();
    constructor() {}
    ngOnDestroy() {
      this._destroySubject.next(), this._destroySubject.complete();
    }
    isMatched(e) {
      return Tn(We(e)).some((o) => this._registerQuery(o).mql.matches);
    }
    observe(e) {
      let o = Tn(We(e)).map((d) => this._registerQuery(d).observable),
        r = Ni(o);
      return (
        (r = Bi(r.pipe(Me(1)), r.pipe(dt(1), Ht(0)))),
        r.pipe(
          Le((d) => {
            let h = { matches: !1, breakpoints: {} };
            return (
              d.forEach(({ matches: g, query: C }) => {
                (h.matches = h.matches || g), (h.breakpoints[C] = g);
              }),
              h
            );
          }),
        )
      );
    }
    _registerQuery(e) {
      if (this._queries.has(e)) return this._queries.get(e);
      let t = this._mediaMatcher.matchMedia(e),
        r = {
          observable: new Fe((d) => {
            let h = (g) => this._zone.run(() => d.next(g));
            return (
              t.addListener(h),
              () => {
                t.removeListener(h);
              }
            );
          }).pipe(
            le(t),
            Le(({ matches: d }) => ({ query: e, matches: d })),
            ee(this._destroySubject),
          ),
          mql: t,
        };
      return this._queries.set(e, r), r;
    }
    static ɵfac = function (t) {
      return new (t || i)();
    };
    static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
  }
  return i;
})();
function Tn(i) {
  return i
    .map((n) => n.split(","))
    .reduce((n, e) => n.concat(e))
    .map((n) => n.trim());
}
var hi = (() => {
  class i {
    _platform = a(R);
    constructor() {}
    isDisabled(e) {
      return e.hasAttribute("disabled");
    }
    isVisible(e) {
      return Wo(e) && getComputedStyle(e).visibility === "visible";
    }
    isTabbable(e) {
      if (!this._platform.isBrowser) return !1;
      let t = Ho(qo(e));
      if (t && (Rn(t) === -1 || !this.isVisible(t))) return !1;
      let o = e.nodeName.toLowerCase(),
        r = Rn(e);
      return e.hasAttribute("contenteditable")
        ? r !== -1
        : o === "iframe" ||
            o === "object" ||
            (this._platform.WEBKIT && this._platform.IOS && !Xo(e))
          ? !1
          : o === "audio"
            ? e.hasAttribute("controls")
              ? r !== -1
              : !1
            : o === "video"
              ? r === -1
                ? !1
                : r !== null
                  ? !0
                  : this._platform.FIREFOX || e.hasAttribute("controls")
              : e.tabIndex >= 0;
    }
    isFocusable(e, t) {
      return (
        Ko(e) &&
        !this.isDisabled(e) &&
        (t?.ignoreVisibility || this.isVisible(e))
      );
    }
    static ɵfac = function (t) {
      return new (t || i)();
    };
    static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
  }
  return i;
})();
function Ho(i) {
  try {
    return i.frameElement;
  } catch {
    return null;
  }
}
function Wo(i) {
  return !!(
    i.offsetWidth ||
    i.offsetHeight ||
    (typeof i.getClientRects == "function" && i.getClientRects().length)
  );
}
function Uo(i) {
  let n = i.nodeName.toLowerCase();
  return n === "input" || n === "select" || n === "button" || n === "textarea";
}
function Yo(i) {
  return Zo(i) && i.type == "hidden";
}
function Go(i) {
  return $o(i) && i.hasAttribute("href");
}
function Zo(i) {
  return i.nodeName.toLowerCase() == "input";
}
function $o(i) {
  return i.nodeName.toLowerCase() == "a";
}
function Nn(i) {
  if (!i.hasAttribute("tabindex") || i.tabIndex === void 0) return !1;
  let n = i.getAttribute("tabindex");
  return !!(n && !isNaN(parseInt(n, 10)));
}
function Rn(i) {
  if (!Nn(i)) return null;
  let n = parseInt(i.getAttribute("tabindex") || "", 10);
  return isNaN(n) ? -1 : n;
}
function Xo(i) {
  let n = i.nodeName.toLowerCase(),
    e = n === "input" && i.type;
  return e === "text" || e === "password" || n === "select" || n === "textarea";
}
function Ko(i) {
  return Yo(i)
    ? !1
    : Uo(i) || Go(i) || i.hasAttribute("contenteditable") || Nn(i);
}
function qo(i) {
  return (i.ownerDocument && i.ownerDocument.defaultView) || window;
}
var ci = class {
    _element;
    _checker;
    _ngZone;
    _document;
    _injector;
    _startAnchor;
    _endAnchor;
    _hasAttached = !1;
    startAnchorListener = () => this.focusLastTabbableElement();
    endAnchorListener = () => this.focusFirstTabbableElement();
    get enabled() {
      return this._enabled;
    }
    set enabled(n) {
      (this._enabled = n),
        this._startAnchor &&
          this._endAnchor &&
          (this._toggleAnchorTabIndex(n, this._startAnchor),
          this._toggleAnchorTabIndex(n, this._endAnchor));
    }
    _enabled = !0;
    constructor(n, e, t, o, r = !1, d) {
      (this._element = n),
        (this._checker = e),
        (this._ngZone = t),
        (this._document = o),
        (this._injector = d),
        r || this.attachAnchors();
    }
    destroy() {
      let n = this._startAnchor,
        e = this._endAnchor;
      n &&
        (n.removeEventListener("focus", this.startAnchorListener), n.remove()),
        e &&
          (e.removeEventListener("focus", this.endAnchorListener), e.remove()),
        (this._startAnchor = this._endAnchor = null),
        (this._hasAttached = !1);
    }
    attachAnchors() {
      return this._hasAttached
        ? !0
        : (this._ngZone.runOutsideAngular(() => {
            this._startAnchor ||
              ((this._startAnchor = this._createAnchor()),
              this._startAnchor.addEventListener(
                "focus",
                this.startAnchorListener,
              )),
              this._endAnchor ||
                ((this._endAnchor = this._createAnchor()),
                this._endAnchor.addEventListener(
                  "focus",
                  this.endAnchorListener,
                ));
          }),
          this._element.parentNode &&
            (this._element.parentNode.insertBefore(
              this._startAnchor,
              this._element,
            ),
            this._element.parentNode.insertBefore(
              this._endAnchor,
              this._element.nextSibling,
            ),
            (this._hasAttached = !0)),
          this._hasAttached);
    }
    focusInitialElementWhenReady(n) {
      return new Promise((e) => {
        this._executeOnStable(() => e(this.focusInitialElement(n)));
      });
    }
    focusFirstTabbableElementWhenReady(n) {
      return new Promise((e) => {
        this._executeOnStable(() => e(this.focusFirstTabbableElement(n)));
      });
    }
    focusLastTabbableElementWhenReady(n) {
      return new Promise((e) => {
        this._executeOnStable(() => e(this.focusLastTabbableElement(n)));
      });
    }
    _getRegionBoundary(n) {
      let e = this._element.querySelectorAll(
        `[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`,
      );
      return n == "start"
        ? e.length
          ? e[0]
          : this._getFirstTabbableElement(this._element)
        : e.length
          ? e[e.length - 1]
          : this._getLastTabbableElement(this._element);
    }
    focusInitialElement(n) {
      let e = this._element.querySelector(
        "[cdk-focus-initial], [cdkFocusInitial]",
      );
      if (e) {
        if (!this._checker.isFocusable(e)) {
          let t = this._getFirstTabbableElement(e);
          return t?.focus(n), !!t;
        }
        return e.focus(n), !0;
      }
      return this.focusFirstTabbableElement(n);
    }
    focusFirstTabbableElement(n) {
      let e = this._getRegionBoundary("start");
      return e && e.focus(n), !!e;
    }
    focusLastTabbableElement(n) {
      let e = this._getRegionBoundary("end");
      return e && e.focus(n), !!e;
    }
    hasAttached() {
      return this._hasAttached;
    }
    _getFirstTabbableElement(n) {
      if (this._checker.isFocusable(n) && this._checker.isTabbable(n)) return n;
      let e = n.children;
      for (let t = 0; t < e.length; t++) {
        let o =
          e[t].nodeType === this._document.ELEMENT_NODE
            ? this._getFirstTabbableElement(e[t])
            : null;
        if (o) return o;
      }
      return null;
    }
    _getLastTabbableElement(n) {
      if (this._checker.isFocusable(n) && this._checker.isTabbable(n)) return n;
      let e = n.children;
      for (let t = e.length - 1; t >= 0; t--) {
        let o =
          e[t].nodeType === this._document.ELEMENT_NODE
            ? this._getLastTabbableElement(e[t])
            : null;
        if (o) return o;
      }
      return null;
    }
    _createAnchor() {
      let n = this._document.createElement("div");
      return (
        this._toggleAnchorTabIndex(this._enabled, n),
        n.classList.add("cdk-visually-hidden"),
        n.classList.add("cdk-focus-trap-anchor"),
        n.setAttribute("aria-hidden", "true"),
        n
      );
    }
    _toggleAnchorTabIndex(n, e) {
      n ? e.setAttribute("tabindex", "0") : e.removeAttribute("tabindex");
    }
    toggleAnchors(n) {
      this._startAnchor &&
        this._endAnchor &&
        (this._toggleAnchorTabIndex(n, this._startAnchor),
        this._toggleAnchorTabIndex(n, this._endAnchor));
    }
    _executeOnStable(n) {
      this._injector ? De(n, { injector: this._injector }) : setTimeout(n);
    }
  },
  Bn = (() => {
    class i {
      _checker = a(hi);
      _ngZone = a(w);
      _document = a(V);
      _injector = a(U);
      constructor() {
        a(Ie).load(In);
      }
      create(e, t = !1) {
        return new ci(
          e,
          this._checker,
          this._ngZone,
          this._document,
          t,
          this._injector,
        );
      }
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
    }
    return i;
  })();
function zn(i) {
  return i.buttons === 0 || i.detail === 0;
}
function Vn(i) {
  let n =
    (i.touches && i.touches[0]) || (i.changedTouches && i.changedTouches[0]);
  return (
    !!n &&
    n.identifier === -1 &&
    (n.radiusX == null || n.radiusX === 1) &&
    (n.radiusY == null || n.radiusY === 1)
  );
}
var Qo = new O("cdk-input-modality-detector-options"),
  Jo = { ignoreKeys: [18, 17, 224, 91, 16] },
  jn = 650,
  si = { passive: !0, capture: !0 },
  er = (() => {
    class i {
      _platform = a(R);
      _listenerCleanups;
      modalityDetected;
      modalityChanged;
      get mostRecentModality() {
        return this._modality.value;
      }
      _mostRecentTarget = null;
      _modality = new Ri(null);
      _options;
      _lastTouchMs = 0;
      _onKeydown = (e) => {
        this._options?.ignoreKeys?.some((t) => t === e.keyCode) ||
          (this._modality.next("keyboard"), (this._mostRecentTarget = me(e)));
      };
      _onMousedown = (e) => {
        Date.now() - this._lastTouchMs < jn ||
          (this._modality.next(zn(e) ? "keyboard" : "mouse"),
          (this._mostRecentTarget = me(e)));
      };
      _onTouchstart = (e) => {
        if (Vn(e)) {
          this._modality.next("keyboard");
          return;
        }
        (this._lastTouchMs = Date.now()),
          this._modality.next("touch"),
          (this._mostRecentTarget = me(e));
      };
      constructor() {
        let e = a(w),
          t = a(V),
          o = a(Qo, { optional: !0 });
        if (
          ((this._options = W(W({}, Jo), o)),
          (this.modalityDetected = this._modality.pipe(dt(1))),
          (this.modalityChanged = this.modalityDetected.pipe(Wt())),
          this._platform.isBrowser)
        ) {
          let r = a(te).createRenderer(null, null);
          this._listenerCleanups = e.runOutsideAngular(() => [
            re(r, t, "keydown", this._onKeydown, si),
            re(r, t, "mousedown", this._onMousedown, si),
            re(r, t, "touchstart", this._onTouchstart, si),
          ]);
        }
      }
      ngOnDestroy() {
        this._modality.complete(), this._listenerCleanups?.forEach((e) => e());
      }
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
    }
    return i;
  })();
var Ot = (function (i) {
    return (
      (i[(i.IMMEDIATE = 0)] = "IMMEDIATE"),
      (i[(i.EVENTUAL = 1)] = "EVENTUAL"),
      i
    );
  })(Ot || {}),
  tr = new O("cdk-focus-monitor-default-options"),
  Dt = Dn({ passive: !0, capture: !0 }),
  Hn = (() => {
    class i {
      _ngZone = a(w);
      _platform = a(R);
      _inputModalityDetector = a(er);
      _origin = null;
      _lastFocusOrigin;
      _windowFocused = !1;
      _windowFocusTimeoutId;
      _originTimeoutId;
      _originFromTouchInteraction = !1;
      _elementInfo = new Map();
      _monitoredElementCount = 0;
      _rootNodeFocusListenerCount = new Map();
      _detectionMode;
      _windowFocusListener = () => {
        (this._windowFocused = !0),
          (this._windowFocusTimeoutId = setTimeout(
            () => (this._windowFocused = !1),
          ));
      };
      _document = a(V, { optional: !0 });
      _stopInputModalityDetector = new x();
      constructor() {
        let e = a(tr, { optional: !0 });
        this._detectionMode = e?.detectionMode || Ot.IMMEDIATE;
      }
      _rootNodeFocusAndBlurListener = (e) => {
        let t = me(e);
        for (let o = t; o; o = o.parentElement)
          e.type === "focus" ? this._onFocus(e, o) : this._onBlur(e, o);
      };
      monitor(e, t = !1) {
        let o = he(e);
        if (!this._platform.isBrowser || o.nodeType !== 1) return ge();
        let r = On(o) || this._getDocument(),
          d = this._elementInfo.get(o);
        if (d) return t && (d.checkChildren = !0), d.subject;
        let h = { checkChildren: t, subject: new x(), rootNode: r };
        return (
          this._elementInfo.set(o, h),
          this._registerGlobalListeners(h),
          h.subject
        );
      }
      stopMonitoring(e) {
        let t = he(e),
          o = this._elementInfo.get(t);
        o &&
          (o.subject.complete(),
          this._setClasses(t),
          this._elementInfo.delete(t),
          this._removeGlobalListeners(o));
      }
      focusVia(e, t, o) {
        let r = he(e),
          d = this._getDocument().activeElement;
        r === d
          ? this._getClosestElementsInfo(r).forEach(([h, g]) =>
              this._originChanged(h, t, g),
            )
          : (this._setOrigin(t), typeof r.focus == "function" && r.focus(o));
      }
      ngOnDestroy() {
        this._elementInfo.forEach((e, t) => this.stopMonitoring(t));
      }
      _getDocument() {
        return this._document || document;
      }
      _getWindow() {
        return this._getDocument().defaultView || window;
      }
      _getFocusOrigin(e) {
        return this._origin
          ? this._originFromTouchInteraction
            ? this._shouldBeAttributedToTouch(e)
              ? "touch"
              : "program"
            : this._origin
          : this._windowFocused && this._lastFocusOrigin
            ? this._lastFocusOrigin
            : e && this._isLastInteractionFromInputLabel(e)
              ? "mouse"
              : "program";
      }
      _shouldBeAttributedToTouch(e) {
        return (
          this._detectionMode === Ot.EVENTUAL ||
          !!e?.contains(this._inputModalityDetector._mostRecentTarget)
        );
      }
      _setClasses(e, t) {
        e.classList.toggle("cdk-focused", !!t),
          e.classList.toggle("cdk-touch-focused", t === "touch"),
          e.classList.toggle("cdk-keyboard-focused", t === "keyboard"),
          e.classList.toggle("cdk-mouse-focused", t === "mouse"),
          e.classList.toggle("cdk-program-focused", t === "program");
      }
      _setOrigin(e, t = !1) {
        this._ngZone.runOutsideAngular(() => {
          if (
            ((this._origin = e),
            (this._originFromTouchInteraction = e === "touch" && t),
            this._detectionMode === Ot.IMMEDIATE)
          ) {
            clearTimeout(this._originTimeoutId);
            let o = this._originFromTouchInteraction ? jn : 1;
            this._originTimeoutId = setTimeout(() => (this._origin = null), o);
          }
        });
      }
      _onFocus(e, t) {
        let o = this._elementInfo.get(t),
          r = me(e);
        !o ||
          (!o.checkChildren && t !== r) ||
          this._originChanged(t, this._getFocusOrigin(r), o);
      }
      _onBlur(e, t) {
        let o = this._elementInfo.get(t);
        !o ||
          (o.checkChildren &&
            e.relatedTarget instanceof Node &&
            t.contains(e.relatedTarget)) ||
          (this._setClasses(t), this._emitOrigin(o, null));
      }
      _emitOrigin(e, t) {
        e.subject.observers.length && this._ngZone.run(() => e.subject.next(t));
      }
      _registerGlobalListeners(e) {
        if (!this._platform.isBrowser) return;
        let t = e.rootNode,
          o = this._rootNodeFocusListenerCount.get(t) || 0;
        o ||
          this._ngZone.runOutsideAngular(() => {
            t.addEventListener("focus", this._rootNodeFocusAndBlurListener, Dt),
              t.addEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                Dt,
              );
          }),
          this._rootNodeFocusListenerCount.set(t, o + 1),
          ++this._monitoredElementCount === 1 &&
            (this._ngZone.runOutsideAngular(() => {
              this._getWindow().addEventListener(
                "focus",
                this._windowFocusListener,
              );
            }),
            this._inputModalityDetector.modalityDetected
              .pipe(ee(this._stopInputModalityDetector))
              .subscribe((r) => {
                this._setOrigin(r, !0);
              }));
      }
      _removeGlobalListeners(e) {
        let t = e.rootNode;
        if (this._rootNodeFocusListenerCount.has(t)) {
          let o = this._rootNodeFocusListenerCount.get(t);
          o > 1
            ? this._rootNodeFocusListenerCount.set(t, o - 1)
            : (t.removeEventListener(
                "focus",
                this._rootNodeFocusAndBlurListener,
                Dt,
              ),
              t.removeEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                Dt,
              ),
              this._rootNodeFocusListenerCount.delete(t));
        }
        --this._monitoredElementCount ||
          (this._getWindow().removeEventListener(
            "focus",
            this._windowFocusListener,
          ),
          this._stopInputModalityDetector.next(),
          clearTimeout(this._windowFocusTimeoutId),
          clearTimeout(this._originTimeoutId));
      }
      _originChanged(e, t, o) {
        this._setClasses(e, t),
          this._emitOrigin(o, t),
          (this._lastFocusOrigin = t);
      }
      _getClosestElementsInfo(e) {
        let t = [];
        return (
          this._elementInfo.forEach((o, r) => {
            (r === e || (o.checkChildren && r.contains(e))) && t.push([r, o]);
          }),
          t
        );
      }
      _isLastInteractionFromInputLabel(e) {
        let { _mostRecentTarget: t, mostRecentModality: o } =
          this._inputModalityDetector;
        if (
          o !== "mouse" ||
          !t ||
          t === e ||
          (e.nodeName !== "INPUT" && e.nodeName !== "TEXTAREA") ||
          e.disabled
        )
          return !1;
        let r = e.labels;
        if (r) {
          for (let d = 0; d < r.length; d++) if (r[d].contains(t)) return !0;
        }
        return !1;
      }
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
    }
    return i;
  })();
var Te = (function (i) {
    return (
      (i[(i.NONE = 0)] = "NONE"),
      (i[(i.BLACK_ON_WHITE = 1)] = "BLACK_ON_WHITE"),
      (i[(i.WHITE_ON_BLACK = 2)] = "WHITE_ON_BLACK"),
      i
    );
  })(Te || {}),
  Fn = "cdk-high-contrast-black-on-white",
  Ln = "cdk-high-contrast-white-on-black",
  li = "cdk-high-contrast-active",
  mi = (() => {
    class i {
      _platform = a(R);
      _hasCheckedHighContrastMode;
      _document = a(V);
      _breakpointSubscription;
      constructor() {
        this._breakpointSubscription = a(An)
          .observe("(forced-colors: active)")
          .subscribe(() => {
            this._hasCheckedHighContrastMode &&
              ((this._hasCheckedHighContrastMode = !1),
              this._applyBodyHighContrastModeCssClasses());
          });
      }
      getHighContrastMode() {
        if (!this._platform.isBrowser) return Te.NONE;
        let e = this._document.createElement("div");
        (e.style.backgroundColor = "rgb(1,2,3)"),
          (e.style.position = "absolute"),
          this._document.body.appendChild(e);
        let t = this._document.defaultView || window,
          o = t && t.getComputedStyle ? t.getComputedStyle(e) : null,
          r = ((o && o.backgroundColor) || "").replace(/ /g, "");
        switch ((e.remove(), r)) {
          case "rgb(0,0,0)":
          case "rgb(45,50,54)":
          case "rgb(32,32,32)":
            return Te.WHITE_ON_BLACK;
          case "rgb(255,255,255)":
          case "rgb(255,250,239)":
            return Te.BLACK_ON_WHITE;
        }
        return Te.NONE;
      }
      ngOnDestroy() {
        this._breakpointSubscription.unsubscribe();
      }
      _applyBodyHighContrastModeCssClasses() {
        if (
          !this._hasCheckedHighContrastMode &&
          this._platform.isBrowser &&
          this._document.body
        ) {
          let e = this._document.body.classList;
          e.remove(li, Fn, Ln), (this._hasCheckedHighContrastMode = !0);
          let t = this.getHighContrastMode();
          t === Te.BLACK_ON_WHITE
            ? e.add(li, Fn)
            : t === Te.WHITE_ON_BLACK && e.add(li, Ln);
        }
      }
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
    }
    return i;
  })(),
  Wn = (() => {
    class i {
      constructor() {
        a(mi)._applyBodyHighContrastModeCssClasses();
      }
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵmod = k({ type: i });
      static ɵinj = D({ imports: [Et] });
    }
    return i;
  })(),
  di = {},
  Q = (() => {
    class i {
      _appId = a(Hi);
      getId(e) {
        return (
          this._appId !== "ng" && (e += this._appId),
          di.hasOwnProperty(e) || (di[e] = 0),
          `${e}${di[e]++}`
        );
      }
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
    }
    return i;
  })();
var Un = xt(),
  ui = class {
    _viewportRuler;
    _previousHTMLStyles = { top: "", left: "" };
    _previousScrollPosition;
    _isEnabled = !1;
    _document;
    constructor(n, e) {
      (this._viewportRuler = n), (this._document = e);
    }
    attach() {}
    enable() {
      if (this._canBeEnabled()) {
        let n = this._document.documentElement;
        (this._previousScrollPosition =
          this._viewportRuler.getViewportScrollPosition()),
          (this._previousHTMLStyles.left = n.style.left || ""),
          (this._previousHTMLStyles.top = n.style.top || ""),
          (n.style.left = L(-this._previousScrollPosition.left)),
          (n.style.top = L(-this._previousScrollPosition.top)),
          n.classList.add("cdk-global-scrollblock"),
          (this._isEnabled = !0);
      }
    }
    disable() {
      if (this._isEnabled) {
        let n = this._document.documentElement,
          e = this._document.body,
          t = n.style,
          o = e.style,
          r = t.scrollBehavior || "",
          d = o.scrollBehavior || "";
        (this._isEnabled = !1),
          (t.left = this._previousHTMLStyles.left),
          (t.top = this._previousHTMLStyles.top),
          n.classList.remove("cdk-global-scrollblock"),
          Un && (t.scrollBehavior = o.scrollBehavior = "auto"),
          window.scroll(
            this._previousScrollPosition.left,
            this._previousScrollPosition.top,
          ),
          Un && ((t.scrollBehavior = r), (o.scrollBehavior = d));
      }
    }
    _canBeEnabled() {
      if (
        this._document.documentElement.classList.contains(
          "cdk-global-scrollblock",
        ) ||
        this._isEnabled
      )
        return !1;
      let e = this._document.body,
        t = this._viewportRuler.getViewportSize();
      return e.scrollHeight > t.height || e.scrollWidth > t.width;
    }
  };
var fi = class {
    _scrollDispatcher;
    _ngZone;
    _viewportRuler;
    _config;
    _scrollSubscription = null;
    _overlayRef;
    _initialScrollPosition;
    constructor(n, e, t, o) {
      (this._scrollDispatcher = n),
        (this._ngZone = e),
        (this._viewportRuler = t),
        (this._config = o);
    }
    attach(n) {
      this._overlayRef, (this._overlayRef = n);
    }
    enable() {
      if (this._scrollSubscription) return;
      let n = this._scrollDispatcher
        .scrolled(0)
        .pipe(
          $(
            (e) =>
              !e ||
              !this._overlayRef.overlayElement.contains(
                e.getElementRef().nativeElement,
              ),
          ),
        );
      this._config && this._config.threshold && this._config.threshold > 1
        ? ((this._initialScrollPosition =
            this._viewportRuler.getViewportScrollPosition().top),
          (this._scrollSubscription = n.subscribe(() => {
            let e = this._viewportRuler.getViewportScrollPosition().top;
            Math.abs(e - this._initialScrollPosition) > this._config.threshold
              ? this._detach()
              : this._overlayRef.updatePosition();
          })))
        : (this._scrollSubscription = n.subscribe(this._detach));
    }
    disable() {
      this._scrollSubscription &&
        (this._scrollSubscription.unsubscribe(),
        (this._scrollSubscription = null));
    }
    detach() {
      this.disable(), (this._overlayRef = null);
    }
    _detach = () => {
      this.disable(),
        this._overlayRef.hasAttached() &&
          this._ngZone.run(() => this._overlayRef.detach());
    };
  },
  kt = class {
    enable() {}
    disable() {}
    attach() {}
  };
function pi(i, n) {
  return n.some((e) => {
    let t = i.bottom < e.top,
      o = i.top > e.bottom,
      r = i.right < e.left,
      d = i.left > e.right;
    return t || o || r || d;
  });
}
function Yn(i, n) {
  return n.some((e) => {
    let t = i.top < e.top,
      o = i.bottom > e.bottom,
      r = i.left < e.left,
      d = i.right > e.right;
    return t || o || r || d;
  });
}
var gi = class {
    _scrollDispatcher;
    _viewportRuler;
    _ngZone;
    _config;
    _scrollSubscription = null;
    _overlayRef;
    constructor(n, e, t, o) {
      (this._scrollDispatcher = n),
        (this._viewportRuler = e),
        (this._ngZone = t),
        (this._config = o);
    }
    attach(n) {
      this._overlayRef, (this._overlayRef = n);
    }
    enable() {
      if (!this._scrollSubscription) {
        let n = this._config ? this._config.scrollThrottle : 0;
        this._scrollSubscription = this._scrollDispatcher
          .scrolled(n)
          .subscribe(() => {
            if (
              (this._overlayRef.updatePosition(),
              this._config && this._config.autoClose)
            ) {
              let e = this._overlayRef.overlayElement.getBoundingClientRect(),
                { width: t, height: o } = this._viewportRuler.getViewportSize();
              pi(e, [
                { width: t, height: o, bottom: o, right: t, top: 0, left: 0 },
              ]) &&
                (this.disable(),
                this._ngZone.run(() => this._overlayRef.detach()));
            }
          });
      }
    }
    disable() {
      this._scrollSubscription &&
        (this._scrollSubscription.unsubscribe(),
        (this._scrollSubscription = null));
    }
    detach() {
      this.disable(), (this._overlayRef = null);
    }
  },
  ir = (() => {
    class i {
      _scrollDispatcher = a(ni);
      _viewportRuler = a(oi);
      _ngZone = a(w);
      _document = a(V);
      constructor() {}
      noop = () => new kt();
      close = (e) =>
        new fi(this._scrollDispatcher, this._ngZone, this._viewportRuler, e);
      block = () => new ui(this._viewportRuler, this._document);
      reposition = (e) =>
        new gi(this._scrollDispatcher, this._viewportRuler, this._ngZone, e);
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
    }
    return i;
  })(),
  at = class {
    positionStrategy;
    scrollStrategy = new kt();
    panelClass = "";
    hasBackdrop = !1;
    backdropClass = "cdk-overlay-dark-backdrop";
    width;
    height;
    minWidth;
    minHeight;
    maxWidth;
    maxHeight;
    direction;
    disposeOnNavigation = !1;
    constructor(n) {
      if (n) {
        let e = Object.keys(n);
        for (let t of e) n[t] !== void 0 && (this[t] = n[t]);
      }
    }
  };
var _i = class {
  connectionPair;
  scrollableViewProperties;
  constructor(n, e) {
    (this.connectionPair = n), (this.scrollableViewProperties = e);
  }
};
var qn = (() => {
    class i {
      _attachedOverlays = [];
      _document = a(V);
      _isAttached;
      constructor() {}
      ngOnDestroy() {
        this.detach();
      }
      add(e) {
        this.remove(e), this._attachedOverlays.push(e);
      }
      remove(e) {
        let t = this._attachedOverlays.indexOf(e);
        t > -1 && this._attachedOverlays.splice(t, 1),
          this._attachedOverlays.length === 0 && this.detach();
      }
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
    }
    return i;
  })(),
  nr = (() => {
    class i extends qn {
      _ngZone = a(w);
      _renderer = a(te).createRenderer(null, null);
      _cleanupKeydown;
      add(e) {
        super.add(e),
          this._isAttached ||
            (this._ngZone.runOutsideAngular(() => {
              this._cleanupKeydown = this._renderer.listen(
                "body",
                "keydown",
                this._keydownListener,
              );
            }),
            (this._isAttached = !0));
      }
      detach() {
        this._isAttached && (this._cleanupKeydown?.(), (this._isAttached = !1));
      }
      _keydownListener = (e) => {
        let t = this._attachedOverlays;
        for (let o = t.length - 1; o > -1; o--)
          if (t[o]._keydownEvents.observers.length > 0) {
            this._ngZone.run(() => t[o]._keydownEvents.next(e));
            break;
          }
      };
      static ɵfac = (() => {
        let e;
        return function (o) {
          return (e || (e = _e(i)))(o || i);
        };
      })();
      static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
    }
    return i;
  })(),
  or = (() => {
    class i extends qn {
      _platform = a(R);
      _ngZone = a(w);
      _renderer = a(te).createRenderer(null, null);
      _cursorOriginalValue;
      _cursorStyleIsSet = !1;
      _pointerDownEventTarget;
      _cleanups;
      add(e) {
        if ((super.add(e), !this._isAttached)) {
          let t = this._document.body,
            o = { capture: !0 };
          (this._cleanups = this._ngZone.runOutsideAngular(() => [
            re(this._renderer, t, "pointerdown", this._pointerDownListener, o),
            re(this._renderer, t, "click", this._clickListener, o),
            re(this._renderer, t, "auxclick", this._clickListener, o),
            re(this._renderer, t, "contextmenu", this._clickListener, o),
          ])),
            this._platform.IOS &&
              !this._cursorStyleIsSet &&
              ((this._cursorOriginalValue = t.style.cursor),
              (t.style.cursor = "pointer"),
              (this._cursorStyleIsSet = !0)),
            (this._isAttached = !0);
        }
      }
      detach() {
        this._isAttached &&
          (this._cleanups?.forEach((e) => e()),
          (this._cleanups = void 0),
          this._platform.IOS &&
            this._cursorStyleIsSet &&
            ((this._document.body.style.cursor = this._cursorOriginalValue),
            (this._cursorStyleIsSet = !1)),
          (this._isAttached = !1));
      }
      _pointerDownListener = (e) => {
        this._pointerDownEventTarget = me(e);
      };
      _clickListener = (e) => {
        let t = me(e),
          o =
            e.type === "click" && this._pointerDownEventTarget
              ? this._pointerDownEventTarget
              : t;
        this._pointerDownEventTarget = null;
        let r = this._attachedOverlays.slice();
        for (let d = r.length - 1; d > -1; d--) {
          let h = r[d];
          if (h._outsidePointerEvents.observers.length < 1 || !h.hasAttached())
            continue;
          if (Gn(h.overlayElement, t) || Gn(h.overlayElement, o)) break;
          let g = h._outsidePointerEvents;
          this._ngZone ? this._ngZone.run(() => g.next(e)) : g.next(e);
        }
      };
      static ɵfac = (() => {
        let e;
        return function (o) {
          return (e || (e = _e(i)))(o || i);
        };
      })();
      static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
    }
    return i;
  })();
function Gn(i, n) {
  let e = typeof ShadowRoot < "u" && ShadowRoot,
    t = n;
  for (; t; ) {
    if (t === i) return !0;
    t = e && t instanceof ShadowRoot ? t.host : t.parentNode;
  }
  return !1;
}
var Qn = (() => {
    class i {
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵcmp = S({
        type: i,
        selectors: [["ng-component"]],
        hostAttrs: ["cdk-overlay-style-loader", ""],
        decls: 0,
        vars: 0,
        template: function (t, o) {},
        styles: [
          ".cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed}@layer cdk-overlay{.cdk-overlay-container{z-index:1000}}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute}@layer cdk-overlay{.cdk-global-overlay-wrapper{z-index:1000}}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;display:flex;max-width:100%;max-height:100%}@layer cdk-overlay{.cdk-overlay-pane{z-index:1000}}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);opacity:0}@layer cdk-overlay{.cdk-overlay-backdrop{z-index:1000;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}}.cdk-overlay-backdrop-showing{opacity:1}@media(forced-colors: active){.cdk-overlay-backdrop-showing{opacity:.6}}@layer cdk-overlay{.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing,.cdk-high-contrast-active .cdk-overlay-transparent-backdrop{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;display:flex;flex-direction:column;min-width:1px;min-height:1px}@layer cdk-overlay{.cdk-overlay-connected-position-bounding-box{z-index:1000}}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      });
    }
    return i;
  })(),
  St = (() => {
    class i {
      _platform = a(R);
      _containerElement;
      _document = a(V);
      _styleLoader = a(Ie);
      constructor() {}
      ngOnDestroy() {
        this._containerElement?.remove();
      }
      getContainerElement() {
        return (
          this._loadStyles(),
          this._containerElement || this._createContainer(),
          this._containerElement
        );
      }
      _createContainer() {
        let e = "cdk-overlay-container";
        if (this._platform.isBrowser || ii()) {
          let o = this._document.querySelectorAll(
            `.${e}[platform="server"], .${e}[platform="test"]`,
          );
          for (let r = 0; r < o.length; r++) o[r].remove();
        }
        let t = this._document.createElement("div");
        t.classList.add(e),
          ii()
            ? t.setAttribute("platform", "test")
            : this._platform.isBrowser || t.setAttribute("platform", "server"),
          this._document.body.appendChild(t),
          (this._containerElement = t);
      }
      _loadStyles() {
        this._styleLoader.load(Qn);
      }
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
    }
    return i;
  })(),
  vi = class {
    _renderer;
    _ngZone;
    element;
    _cleanupClick;
    _cleanupTransitionEnd;
    _fallbackTimeout;
    constructor(n, e, t, o) {
      (this._renderer = e),
        (this._ngZone = t),
        (this.element = n.createElement("div")),
        this.element.classList.add("cdk-overlay-backdrop"),
        (this._cleanupClick = e.listen(this.element, "click", o));
    }
    detach() {
      this._ngZone.runOutsideAngular(() => {
        let n = this.element;
        clearTimeout(this._fallbackTimeout),
          this._cleanupTransitionEnd?.(),
          (this._cleanupTransitionEnd = this._renderer.listen(
            n,
            "transitionend",
            this.dispose,
          )),
          (this._fallbackTimeout = setTimeout(this.dispose, 500)),
          (n.style.pointerEvents = "none"),
          n.classList.remove("cdk-overlay-backdrop-showing");
      });
    }
    dispose = () => {
      clearTimeout(this._fallbackTimeout),
        this._cleanupClick?.(),
        this._cleanupTransitionEnd?.(),
        (this._cleanupClick =
          this._cleanupTransitionEnd =
          this._fallbackTimeout =
            void 0),
        this.element.remove();
    };
  },
  Xe = class {
    _portalOutlet;
    _host;
    _pane;
    _config;
    _ngZone;
    _keyboardDispatcher;
    _document;
    _location;
    _outsideClickDispatcher;
    _animationsDisabled;
    _injector;
    _renderer;
    _backdropClick = new x();
    _attachments = new x();
    _detachments = new x();
    _positionStrategy;
    _scrollStrategy;
    _locationChanges = we.EMPTY;
    _backdropRef = null;
    _previousHostParent;
    _keydownEvents = new x();
    _outsidePointerEvents = new x();
    _renders = new x();
    _afterRenderRef;
    _afterNextRenderRef;
    constructor(n, e, t, o, r, d, h, g, C, y = !1, P, ie) {
      (this._portalOutlet = n),
        (this._host = e),
        (this._pane = t),
        (this._config = o),
        (this._ngZone = r),
        (this._keyboardDispatcher = d),
        (this._document = h),
        (this._location = g),
        (this._outsideClickDispatcher = C),
        (this._animationsDisabled = y),
        (this._injector = P),
        (this._renderer = ie),
        o.scrollStrategy &&
          ((this._scrollStrategy = o.scrollStrategy),
          this._scrollStrategy.attach(this)),
        (this._positionStrategy = o.positionStrategy),
        (this._afterRenderRef = on(() =>
          mt(
            () => {
              this._renders.next();
            },
            { injector: this._injector },
          ),
        ));
    }
    get overlayElement() {
      return this._pane;
    }
    get backdropElement() {
      return this._backdropRef?.element || null;
    }
    get hostElement() {
      return this._host;
    }
    attach(n) {
      !this._host.parentElement &&
        this._previousHostParent &&
        this._previousHostParent.appendChild(this._host);
      let e = this._portalOutlet.attach(n);
      return (
        this._positionStrategy && this._positionStrategy.attach(this),
        this._updateStackingOrder(),
        this._updateElementSize(),
        this._updateElementDirection(),
        this._scrollStrategy && this._scrollStrategy.enable(),
        this._afterNextRenderRef?.destroy(),
        (this._afterNextRenderRef = De(
          () => {
            this.hasAttached() && this.updatePosition();
          },
          { injector: this._injector },
        )),
        this._togglePointerEvents(!0),
        this._config.hasBackdrop && this._attachBackdrop(),
        this._config.panelClass &&
          this._toggleClasses(this._pane, this._config.panelClass, !0),
        this._attachments.next(),
        this._keyboardDispatcher.add(this),
        this._config.disposeOnNavigation &&
          (this._locationChanges = this._location.subscribe(() =>
            this.dispose(),
          )),
        this._outsideClickDispatcher.add(this),
        typeof e?.onDestroy == "function" &&
          e.onDestroy(() => {
            this.hasAttached() &&
              this._ngZone.runOutsideAngular(() =>
                Promise.resolve().then(() => this.detach()),
              );
          }),
        e
      );
    }
    detach() {
      if (!this.hasAttached()) return;
      this.detachBackdrop(),
        this._togglePointerEvents(!1),
        this._positionStrategy &&
          this._positionStrategy.detach &&
          this._positionStrategy.detach(),
        this._scrollStrategy && this._scrollStrategy.disable();
      let n = this._portalOutlet.detach();
      return (
        this._detachments.next(),
        this._keyboardDispatcher.remove(this),
        this._detachContentWhenEmpty(),
        this._locationChanges.unsubscribe(),
        this._outsideClickDispatcher.remove(this),
        n
      );
    }
    dispose() {
      let n = this.hasAttached();
      this._positionStrategy && this._positionStrategy.dispose(),
        this._disposeScrollStrategy(),
        this._backdropRef?.dispose(),
        this._locationChanges.unsubscribe(),
        this._keyboardDispatcher.remove(this),
        this._portalOutlet.dispose(),
        this._attachments.complete(),
        this._backdropClick.complete(),
        this._keydownEvents.complete(),
        this._outsidePointerEvents.complete(),
        this._outsideClickDispatcher.remove(this),
        this._host?.remove(),
        this._afterNextRenderRef?.destroy(),
        (this._previousHostParent =
          this._pane =
          this._host =
          this._backdropRef =
            null),
        n && this._detachments.next(),
        this._detachments.complete(),
        this._afterRenderRef.destroy(),
        this._renders.complete();
    }
    hasAttached() {
      return this._portalOutlet.hasAttached();
    }
    backdropClick() {
      return this._backdropClick;
    }
    attachments() {
      return this._attachments;
    }
    detachments() {
      return this._detachments;
    }
    keydownEvents() {
      return this._keydownEvents;
    }
    outsidePointerEvents() {
      return this._outsidePointerEvents;
    }
    getConfig() {
      return this._config;
    }
    updatePosition() {
      this._positionStrategy && this._positionStrategy.apply();
    }
    updatePositionStrategy(n) {
      n !== this._positionStrategy &&
        (this._positionStrategy && this._positionStrategy.dispose(),
        (this._positionStrategy = n),
        this.hasAttached() && (n.attach(this), this.updatePosition()));
    }
    updateSize(n) {
      (this._config = W(W({}, this._config), n)), this._updateElementSize();
    }
    setDirection(n) {
      (this._config = Qe(W({}, this._config), { direction: n })),
        this._updateElementDirection();
    }
    addPanelClass(n) {
      this._pane && this._toggleClasses(this._pane, n, !0);
    }
    removePanelClass(n) {
      this._pane && this._toggleClasses(this._pane, n, !1);
    }
    getDirection() {
      let n = this._config.direction;
      return n ? (typeof n == "string" ? n : n.value) : "ltr";
    }
    updateScrollStrategy(n) {
      n !== this._scrollStrategy &&
        (this._disposeScrollStrategy(),
        (this._scrollStrategy = n),
        this.hasAttached() && (n.attach(this), n.enable()));
    }
    _updateElementDirection() {
      this._host.setAttribute("dir", this.getDirection());
    }
    _updateElementSize() {
      if (!this._pane) return;
      let n = this._pane.style;
      (n.width = L(this._config.width)),
        (n.height = L(this._config.height)),
        (n.minWidth = L(this._config.minWidth)),
        (n.minHeight = L(this._config.minHeight)),
        (n.maxWidth = L(this._config.maxWidth)),
        (n.maxHeight = L(this._config.maxHeight));
    }
    _togglePointerEvents(n) {
      this._pane.style.pointerEvents = n ? "" : "none";
    }
    _attachBackdrop() {
      let n = "cdk-overlay-backdrop-showing";
      this._backdropRef?.dispose(),
        (this._backdropRef = new vi(
          this._document,
          this._renderer,
          this._ngZone,
          (e) => {
            this._backdropClick.next(e);
          },
        )),
        this._animationsDisabled &&
          this._backdropRef.element.classList.add(
            "cdk-overlay-backdrop-noop-animation",
          ),
        this._config.backdropClass &&
          this._toggleClasses(
            this._backdropRef.element,
            this._config.backdropClass,
            !0,
          ),
        this._host.parentElement.insertBefore(
          this._backdropRef.element,
          this._host,
        ),
        !this._animationsDisabled && typeof requestAnimationFrame < "u"
          ? this._ngZone.runOutsideAngular(() => {
              requestAnimationFrame(() =>
                this._backdropRef?.element.classList.add(n),
              );
            })
          : this._backdropRef.element.classList.add(n);
    }
    _updateStackingOrder() {
      this._host.nextSibling && this._host.parentNode.appendChild(this._host);
    }
    detachBackdrop() {
      this._animationsDisabled
        ? (this._backdropRef?.dispose(), (this._backdropRef = null))
        : this._backdropRef?.detach();
    }
    _toggleClasses(n, e, t) {
      let o = We(e || []).filter((r) => !!r);
      o.length && (t ? n.classList.add(...o) : n.classList.remove(...o));
    }
    _detachContentWhenEmpty() {
      this._ngZone.runOutsideAngular(() => {
        let n = this._renders
          .pipe(ee(Ne(this._attachments, this._detachments)))
          .subscribe(() => {
            (!this._pane || !this._host || this._pane.children.length === 0) &&
              (this._pane &&
                this._config.panelClass &&
                this._toggleClasses(this._pane, this._config.panelClass, !1),
              this._host &&
                this._host.parentElement &&
                ((this._previousHostParent = this._host.parentElement),
                this._host.remove()),
              n.unsubscribe());
          });
      });
    }
    _disposeScrollStrategy() {
      let n = this._scrollStrategy;
      n?.disable(), n?.detach?.();
    }
  },
  Zn = "cdk-overlay-connected-position-bounding-box",
  rr = /([A-Za-z%]+)$/,
  bi = class {
    _viewportRuler;
    _document;
    _platform;
    _overlayContainer;
    _overlayRef;
    _isInitialRender;
    _lastBoundingBoxSize = { width: 0, height: 0 };
    _isPushed = !1;
    _canPush = !0;
    _growAfterOpen = !1;
    _hasFlexibleDimensions = !0;
    _positionLocked = !1;
    _originRect;
    _overlayRect;
    _viewportRect;
    _containerRect;
    _viewportMargin = 0;
    _scrollables = [];
    _preferredPositions = [];
    _origin;
    _pane;
    _isDisposed;
    _boundingBox;
    _lastPosition;
    _lastScrollVisibility;
    _positionChanges = new x();
    _resizeSubscription = we.EMPTY;
    _offsetX = 0;
    _offsetY = 0;
    _transformOriginSelector;
    _appliedPanelClasses = [];
    _previousPushAmount;
    positionChanges = this._positionChanges;
    get positions() {
      return this._preferredPositions;
    }
    constructor(n, e, t, o, r) {
      (this._viewportRuler = e),
        (this._document = t),
        (this._platform = o),
        (this._overlayContainer = r),
        this.setOrigin(n);
    }
    attach(n) {
      this._overlayRef && this._overlayRef,
        this._validatePositions(),
        n.hostElement.classList.add(Zn),
        (this._overlayRef = n),
        (this._boundingBox = n.hostElement),
        (this._pane = n.overlayElement),
        (this._isDisposed = !1),
        (this._isInitialRender = !0),
        (this._lastPosition = null),
        this._resizeSubscription.unsubscribe(),
        (this._resizeSubscription = this._viewportRuler
          .change()
          .subscribe(() => {
            (this._isInitialRender = !0), this.apply();
          }));
    }
    apply() {
      if (this._isDisposed || !this._platform.isBrowser) return;
      if (
        !this._isInitialRender &&
        this._positionLocked &&
        this._lastPosition
      ) {
        this.reapplyLastPosition();
        return;
      }
      this._clearPanelClasses(),
        this._resetOverlayElementStyles(),
        this._resetBoundingBoxStyles(),
        (this._viewportRect = this._getNarrowedViewportRect()),
        (this._originRect = this._getOriginRect()),
        (this._overlayRect = this._pane.getBoundingClientRect()),
        (this._containerRect = this._overlayContainer
          .getContainerElement()
          .getBoundingClientRect());
      let n = this._originRect,
        e = this._overlayRect,
        t = this._viewportRect,
        o = this._containerRect,
        r = [],
        d;
      for (let h of this._preferredPositions) {
        let g = this._getOriginPoint(n, o, h),
          C = this._getOverlayPoint(g, e, h),
          y = this._getOverlayFit(C, e, t, h);
        if (y.isCompletelyWithinViewport) {
          (this._isPushed = !1), this._applyPosition(h, g);
          return;
        }
        if (this._canFitWithFlexibleDimensions(y, C, t)) {
          r.push({
            position: h,
            origin: g,
            overlayRect: e,
            boundingBoxRect: this._calculateBoundingBoxRect(g, h),
          });
          continue;
        }
        (!d || d.overlayFit.visibleArea < y.visibleArea) &&
          (d = {
            overlayFit: y,
            overlayPoint: C,
            originPoint: g,
            position: h,
            overlayRect: e,
          });
      }
      if (r.length) {
        let h = null,
          g = -1;
        for (let C of r) {
          let y =
            C.boundingBoxRect.width *
            C.boundingBoxRect.height *
            (C.position.weight || 1);
          y > g && ((g = y), (h = C));
        }
        (this._isPushed = !1), this._applyPosition(h.position, h.origin);
        return;
      }
      if (this._canPush) {
        (this._isPushed = !0), this._applyPosition(d.position, d.originPoint);
        return;
      }
      this._applyPosition(d.position, d.originPoint);
    }
    detach() {
      this._clearPanelClasses(),
        (this._lastPosition = null),
        (this._previousPushAmount = null),
        this._resizeSubscription.unsubscribe();
    }
    dispose() {
      this._isDisposed ||
        (this._boundingBox &&
          Ae(this._boundingBox.style, {
            top: "",
            left: "",
            right: "",
            bottom: "",
            height: "",
            width: "",
            alignItems: "",
            justifyContent: "",
          }),
        this._pane && this._resetOverlayElementStyles(),
        this._overlayRef && this._overlayRef.hostElement.classList.remove(Zn),
        this.detach(),
        this._positionChanges.complete(),
        (this._overlayRef = this._boundingBox = null),
        (this._isDisposed = !0));
    }
    reapplyLastPosition() {
      if (this._isDisposed || !this._platform.isBrowser) return;
      let n = this._lastPosition;
      if (n) {
        (this._originRect = this._getOriginRect()),
          (this._overlayRect = this._pane.getBoundingClientRect()),
          (this._viewportRect = this._getNarrowedViewportRect()),
          (this._containerRect = this._overlayContainer
            .getContainerElement()
            .getBoundingClientRect());
        let e = this._getOriginPoint(this._originRect, this._containerRect, n);
        this._applyPosition(n, e);
      } else this.apply();
    }
    withScrollableContainers(n) {
      return (this._scrollables = n), this;
    }
    withPositions(n) {
      return (
        (this._preferredPositions = n),
        n.indexOf(this._lastPosition) === -1 && (this._lastPosition = null),
        this._validatePositions(),
        this
      );
    }
    withViewportMargin(n) {
      return (this._viewportMargin = n), this;
    }
    withFlexibleDimensions(n = !0) {
      return (this._hasFlexibleDimensions = n), this;
    }
    withGrowAfterOpen(n = !0) {
      return (this._growAfterOpen = n), this;
    }
    withPush(n = !0) {
      return (this._canPush = n), this;
    }
    withLockedPosition(n = !0) {
      return (this._positionLocked = n), this;
    }
    setOrigin(n) {
      return (this._origin = n), this;
    }
    withDefaultOffsetX(n) {
      return (this._offsetX = n), this;
    }
    withDefaultOffsetY(n) {
      return (this._offsetY = n), this;
    }
    withTransformOriginOn(n) {
      return (this._transformOriginSelector = n), this;
    }
    _getOriginPoint(n, e, t) {
      let o;
      if (t.originX == "center") o = n.left + n.width / 2;
      else {
        let d = this._isRtl() ? n.right : n.left,
          h = this._isRtl() ? n.left : n.right;
        o = t.originX == "start" ? d : h;
      }
      e.left < 0 && (o -= e.left);
      let r;
      return (
        t.originY == "center"
          ? (r = n.top + n.height / 2)
          : (r = t.originY == "top" ? n.top : n.bottom),
        e.top < 0 && (r -= e.top),
        { x: o, y: r }
      );
    }
    _getOverlayPoint(n, e, t) {
      let o;
      t.overlayX == "center"
        ? (o = -e.width / 2)
        : t.overlayX === "start"
          ? (o = this._isRtl() ? -e.width : 0)
          : (o = this._isRtl() ? 0 : -e.width);
      let r;
      return (
        t.overlayY == "center"
          ? (r = -e.height / 2)
          : (r = t.overlayY == "top" ? 0 : -e.height),
        { x: n.x + o, y: n.y + r }
      );
    }
    _getOverlayFit(n, e, t, o) {
      let r = Xn(e),
        { x: d, y: h } = n,
        g = this._getOffset(o, "x"),
        C = this._getOffset(o, "y");
      g && (d += g), C && (h += C);
      let y = 0 - d,
        P = d + r.width - t.width,
        ie = 0 - h,
        K = h + r.height - t.height,
        G = this._subtractOverflows(r.width, y, P),
        J = this._subtractOverflows(r.height, ie, K),
        Ai = G * J;
      return {
        visibleArea: Ai,
        isCompletelyWithinViewport: r.width * r.height === Ai,
        fitsInViewportVertically: J === r.height,
        fitsInViewportHorizontally: G == r.width,
      };
    }
    _canFitWithFlexibleDimensions(n, e, t) {
      if (this._hasFlexibleDimensions) {
        let o = t.bottom - e.y,
          r = t.right - e.x,
          d = $n(this._overlayRef.getConfig().minHeight),
          h = $n(this._overlayRef.getConfig().minWidth),
          g = n.fitsInViewportVertically || (d != null && d <= o),
          C = n.fitsInViewportHorizontally || (h != null && h <= r);
        return g && C;
      }
      return !1;
    }
    _pushOverlayOnScreen(n, e, t) {
      if (this._previousPushAmount && this._positionLocked)
        return {
          x: n.x + this._previousPushAmount.x,
          y: n.y + this._previousPushAmount.y,
        };
      let o = Xn(e),
        r = this._viewportRect,
        d = Math.max(n.x + o.width - r.width, 0),
        h = Math.max(n.y + o.height - r.height, 0),
        g = Math.max(r.top - t.top - n.y, 0),
        C = Math.max(r.left - t.left - n.x, 0),
        y = 0,
        P = 0;
      return (
        o.width <= r.width
          ? (y = C || -d)
          : (y = n.x < this._viewportMargin ? r.left - t.left - n.x : 0),
        o.height <= r.height
          ? (P = g || -h)
          : (P = n.y < this._viewportMargin ? r.top - t.top - n.y : 0),
        (this._previousPushAmount = { x: y, y: P }),
        { x: n.x + y, y: n.y + P }
      );
    }
    _applyPosition(n, e) {
      if (
        (this._setTransformOrigin(n),
        this._setOverlayElementStyles(e, n),
        this._setBoundingBoxStyles(e, n),
        n.panelClass && this._addPanelClasses(n.panelClass),
        this._positionChanges.observers.length)
      ) {
        let t = this._getScrollVisibility();
        if (
          n !== this._lastPosition ||
          !this._lastScrollVisibility ||
          !ar(this._lastScrollVisibility, t)
        ) {
          let o = new _i(n, t);
          this._positionChanges.next(o);
        }
        this._lastScrollVisibility = t;
      }
      (this._lastPosition = n), (this._isInitialRender = !1);
    }
    _setTransformOrigin(n) {
      if (!this._transformOriginSelector) return;
      let e = this._boundingBox.querySelectorAll(this._transformOriginSelector),
        t,
        o = n.overlayY;
      n.overlayX === "center"
        ? (t = "center")
        : this._isRtl()
          ? (t = n.overlayX === "start" ? "right" : "left")
          : (t = n.overlayX === "start" ? "left" : "right");
      for (let r = 0; r < e.length; r++)
        e[r].style.transformOrigin = `${t} ${o}`;
    }
    _calculateBoundingBoxRect(n, e) {
      let t = this._viewportRect,
        o = this._isRtl(),
        r,
        d,
        h;
      if (e.overlayY === "top")
        (d = n.y), (r = t.height - d + this._viewportMargin);
      else if (e.overlayY === "bottom")
        (h = t.height - n.y + this._viewportMargin * 2),
          (r = t.height - h + this._viewportMargin);
      else {
        let K = Math.min(t.bottom - n.y + t.top, n.y),
          G = this._lastBoundingBoxSize.height;
        (r = K * 2),
          (d = n.y - K),
          r > G &&
            !this._isInitialRender &&
            !this._growAfterOpen &&
            (d = n.y - G / 2);
      }
      let g = (e.overlayX === "start" && !o) || (e.overlayX === "end" && o),
        C = (e.overlayX === "end" && !o) || (e.overlayX === "start" && o),
        y,
        P,
        ie;
      if (C)
        (ie = t.width - n.x + this._viewportMargin * 2),
          (y = n.x - this._viewportMargin);
      else if (g) (P = n.x), (y = t.right - n.x);
      else {
        let K = Math.min(t.right - n.x + t.left, n.x),
          G = this._lastBoundingBoxSize.width;
        (y = K * 2),
          (P = n.x - K),
          y > G &&
            !this._isInitialRender &&
            !this._growAfterOpen &&
            (P = n.x - G / 2);
      }
      return { top: d, left: P, bottom: h, right: ie, width: y, height: r };
    }
    _setBoundingBoxStyles(n, e) {
      let t = this._calculateBoundingBoxRect(n, e);
      !this._isInitialRender &&
        !this._growAfterOpen &&
        ((t.height = Math.min(t.height, this._lastBoundingBoxSize.height)),
        (t.width = Math.min(t.width, this._lastBoundingBoxSize.width)));
      let o = {};
      if (this._hasExactPosition())
        (o.top = o.left = "0"),
          (o.bottom = o.right = o.maxHeight = o.maxWidth = ""),
          (o.width = o.height = "100%");
      else {
        let r = this._overlayRef.getConfig().maxHeight,
          d = this._overlayRef.getConfig().maxWidth;
        (o.height = L(t.height)),
          (o.top = L(t.top)),
          (o.bottom = L(t.bottom)),
          (o.width = L(t.width)),
          (o.left = L(t.left)),
          (o.right = L(t.right)),
          e.overlayX === "center"
            ? (o.alignItems = "center")
            : (o.alignItems = e.overlayX === "end" ? "flex-end" : "flex-start"),
          e.overlayY === "center"
            ? (o.justifyContent = "center")
            : (o.justifyContent =
                e.overlayY === "bottom" ? "flex-end" : "flex-start"),
          r && (o.maxHeight = L(r)),
          d && (o.maxWidth = L(d));
      }
      (this._lastBoundingBoxSize = t), Ae(this._boundingBox.style, o);
    }
    _resetBoundingBoxStyles() {
      Ae(this._boundingBox.style, {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        height: "",
        width: "",
        alignItems: "",
        justifyContent: "",
      });
    }
    _resetOverlayElementStyles() {
      Ae(this._pane.style, {
        top: "",
        left: "",
        bottom: "",
        right: "",
        position: "",
        transform: "",
      });
    }
    _setOverlayElementStyles(n, e) {
      let t = {},
        o = this._hasExactPosition(),
        r = this._hasFlexibleDimensions,
        d = this._overlayRef.getConfig();
      if (o) {
        let y = this._viewportRuler.getViewportScrollPosition();
        Ae(t, this._getExactOverlayY(e, n, y)),
          Ae(t, this._getExactOverlayX(e, n, y));
      } else t.position = "static";
      let h = "",
        g = this._getOffset(e, "x"),
        C = this._getOffset(e, "y");
      g && (h += `translateX(${g}px) `),
        C && (h += `translateY(${C}px)`),
        (t.transform = h.trim()),
        d.maxHeight &&
          (o ? (t.maxHeight = L(d.maxHeight)) : r && (t.maxHeight = "")),
        d.maxWidth &&
          (o ? (t.maxWidth = L(d.maxWidth)) : r && (t.maxWidth = "")),
        Ae(this._pane.style, t);
    }
    _getExactOverlayY(n, e, t) {
      let o = { top: "", bottom: "" },
        r = this._getOverlayPoint(e, this._overlayRect, n);
      if (
        (this._isPushed &&
          (r = this._pushOverlayOnScreen(r, this._overlayRect, t)),
        n.overlayY === "bottom")
      ) {
        let d = this._document.documentElement.clientHeight;
        o.bottom = `${d - (r.y + this._overlayRect.height)}px`;
      } else o.top = L(r.y);
      return o;
    }
    _getExactOverlayX(n, e, t) {
      let o = { left: "", right: "" },
        r = this._getOverlayPoint(e, this._overlayRect, n);
      this._isPushed &&
        (r = this._pushOverlayOnScreen(r, this._overlayRect, t));
      let d;
      if (
        (this._isRtl()
          ? (d = n.overlayX === "end" ? "left" : "right")
          : (d = n.overlayX === "end" ? "right" : "left"),
        d === "right")
      ) {
        let h = this._document.documentElement.clientWidth;
        o.right = `${h - (r.x + this._overlayRect.width)}px`;
      } else o.left = L(r.x);
      return o;
    }
    _getScrollVisibility() {
      let n = this._getOriginRect(),
        e = this._pane.getBoundingClientRect(),
        t = this._scrollables.map((o) =>
          o.getElementRef().nativeElement.getBoundingClientRect(),
        );
      return {
        isOriginClipped: Yn(n, t),
        isOriginOutsideView: pi(n, t),
        isOverlayClipped: Yn(e, t),
        isOverlayOutsideView: pi(e, t),
      };
    }
    _subtractOverflows(n, ...e) {
      return e.reduce((t, o) => t - Math.max(o, 0), n);
    }
    _getNarrowedViewportRect() {
      let n = this._document.documentElement.clientWidth,
        e = this._document.documentElement.clientHeight,
        t = this._viewportRuler.getViewportScrollPosition();
      return {
        top: t.top + this._viewportMargin,
        left: t.left + this._viewportMargin,
        right: t.left + n - this._viewportMargin,
        bottom: t.top + e - this._viewportMargin,
        width: n - 2 * this._viewportMargin,
        height: e - 2 * this._viewportMargin,
      };
    }
    _isRtl() {
      return this._overlayRef.getDirection() === "rtl";
    }
    _hasExactPosition() {
      return !this._hasFlexibleDimensions || this._isPushed;
    }
    _getOffset(n, e) {
      return e === "x"
        ? n.offsetX == null
          ? this._offsetX
          : n.offsetX
        : n.offsetY == null
          ? this._offsetY
          : n.offsetY;
    }
    _validatePositions() {}
    _addPanelClasses(n) {
      this._pane &&
        We(n).forEach((e) => {
          e !== "" &&
            this._appliedPanelClasses.indexOf(e) === -1 &&
            (this._appliedPanelClasses.push(e), this._pane.classList.add(e));
        });
    }
    _clearPanelClasses() {
      this._pane &&
        (this._appliedPanelClasses.forEach((n) => {
          this._pane.classList.remove(n);
        }),
        (this._appliedPanelClasses = []));
    }
    _getOriginRect() {
      let n = this._origin;
      if (n instanceof T) return n.nativeElement.getBoundingClientRect();
      if (n instanceof Element) return n.getBoundingClientRect();
      let e = n.width || 0,
        t = n.height || 0;
      return {
        top: n.y,
        bottom: n.y + t,
        left: n.x,
        right: n.x + e,
        height: t,
        width: e,
      };
    }
  };
function Ae(i, n) {
  for (let e in n) n.hasOwnProperty(e) && (i[e] = n[e]);
  return i;
}
function $n(i) {
  if (typeof i != "number" && i != null) {
    let [n, e] = i.split(rr);
    return !e || e === "px" ? parseFloat(n) : null;
  }
  return i || null;
}
function Xn(i) {
  return {
    top: Math.floor(i.top),
    right: Math.floor(i.right),
    bottom: Math.floor(i.bottom),
    left: Math.floor(i.left),
    width: Math.floor(i.width),
    height: Math.floor(i.height),
  };
}
function ar(i, n) {
  return i === n
    ? !0
    : i.isOriginClipped === n.isOriginClipped &&
        i.isOriginOutsideView === n.isOriginOutsideView &&
        i.isOverlayClipped === n.isOverlayClipped &&
        i.isOverlayOutsideView === n.isOverlayOutsideView;
}
var Kn = "cdk-global-overlay-wrapper",
  yi = class {
    _overlayRef;
    _cssPosition = "static";
    _topOffset = "";
    _bottomOffset = "";
    _alignItems = "";
    _xPosition = "";
    _xOffset = "";
    _width = "";
    _height = "";
    _isDisposed = !1;
    attach(n) {
      let e = n.getConfig();
      (this._overlayRef = n),
        this._width && !e.width && n.updateSize({ width: this._width }),
        this._height && !e.height && n.updateSize({ height: this._height }),
        n.hostElement.classList.add(Kn),
        (this._isDisposed = !1);
    }
    top(n = "") {
      return (
        (this._bottomOffset = ""),
        (this._topOffset = n),
        (this._alignItems = "flex-start"),
        this
      );
    }
    left(n = "") {
      return (this._xOffset = n), (this._xPosition = "left"), this;
    }
    bottom(n = "") {
      return (
        (this._topOffset = ""),
        (this._bottomOffset = n),
        (this._alignItems = "flex-end"),
        this
      );
    }
    right(n = "") {
      return (this._xOffset = n), (this._xPosition = "right"), this;
    }
    start(n = "") {
      return (this._xOffset = n), (this._xPosition = "start"), this;
    }
    end(n = "") {
      return (this._xOffset = n), (this._xPosition = "end"), this;
    }
    width(n = "") {
      return (
        this._overlayRef
          ? this._overlayRef.updateSize({ width: n })
          : (this._width = n),
        this
      );
    }
    height(n = "") {
      return (
        this._overlayRef
          ? this._overlayRef.updateSize({ height: n })
          : (this._height = n),
        this
      );
    }
    centerHorizontally(n = "") {
      return this.left(n), (this._xPosition = "center"), this;
    }
    centerVertically(n = "") {
      return this.top(n), (this._alignItems = "center"), this;
    }
    apply() {
      if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
      let n = this._overlayRef.overlayElement.style,
        e = this._overlayRef.hostElement.style,
        t = this._overlayRef.getConfig(),
        { width: o, height: r, maxWidth: d, maxHeight: h } = t,
        g =
          (o === "100%" || o === "100vw") &&
          (!d || d === "100%" || d === "100vw"),
        C =
          (r === "100%" || r === "100vh") &&
          (!h || h === "100%" || h === "100vh"),
        y = this._xPosition,
        P = this._xOffset,
        ie = this._overlayRef.getConfig().direction === "rtl",
        K = "",
        G = "",
        J = "";
      g
        ? (J = "flex-start")
        : y === "center"
          ? ((J = "center"), ie ? (G = P) : (K = P))
          : ie
            ? y === "left" || y === "end"
              ? ((J = "flex-end"), (K = P))
              : (y === "right" || y === "start") &&
                ((J = "flex-start"), (G = P))
            : y === "left" || y === "start"
              ? ((J = "flex-start"), (K = P))
              : (y === "right" || y === "end") && ((J = "flex-end"), (G = P)),
        (n.position = this._cssPosition),
        (n.marginLeft = g ? "0" : K),
        (n.marginTop = C ? "0" : this._topOffset),
        (n.marginBottom = this._bottomOffset),
        (n.marginRight = g ? "0" : G),
        (e.justifyContent = J),
        (e.alignItems = C ? "flex-start" : this._alignItems);
    }
    dispose() {
      if (this._isDisposed || !this._overlayRef) return;
      let n = this._overlayRef.overlayElement.style,
        e = this._overlayRef.hostElement,
        t = e.style;
      e.classList.remove(Kn),
        (t.justifyContent =
          t.alignItems =
          n.marginTop =
          n.marginBottom =
          n.marginLeft =
          n.marginRight =
          n.position =
            ""),
        (this._overlayRef = null),
        (this._isDisposed = !0);
    }
  },
  sr = (() => {
    class i {
      _viewportRuler = a(oi);
      _document = a(V);
      _platform = a(R);
      _overlayContainer = a(St);
      constructor() {}
      global() {
        return new yi();
      }
      flexibleConnectedTo(e) {
        return new bi(
          e,
          this._viewportRuler,
          this._document,
          this._platform,
          this._overlayContainer,
        );
      }
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
    }
    return i;
  })(),
  fe = (() => {
    class i {
      scrollStrategies = a(ir);
      _overlayContainer = a(St);
      _positionBuilder = a(sr);
      _keyboardDispatcher = a(nr);
      _injector = a(U);
      _ngZone = a(w);
      _document = a(V);
      _directionality = a(ue);
      _location = a(rn);
      _outsideClickDispatcher = a(or);
      _animationsModuleType = a(Ee, { optional: !0 });
      _idGenerator = a(Q);
      _renderer = a(te).createRenderer(null, null);
      _appRef;
      _styleLoader = a(Ie);
      constructor() {}
      create(e) {
        this._styleLoader.load(Qn);
        let t = this._createHostElement(),
          o = this._createPaneElement(t),
          r = this._createPortalOutlet(o),
          d = new at(e);
        return (
          (d.direction = d.direction || this._directionality.value),
          new Xe(
            r,
            t,
            o,
            d,
            this._ngZone,
            this._keyboardDispatcher,
            this._document,
            this._location,
            this._outsideClickDispatcher,
            this._animationsModuleType === "NoopAnimations",
            this._injector.get(ct),
            this._renderer,
          )
        );
      }
      position() {
        return this._positionBuilder;
      }
      _createPaneElement(e) {
        let t = this._document.createElement("div");
        return (
          (t.id = this._idGenerator.getId("cdk-overlay-")),
          t.classList.add("cdk-overlay-pane"),
          e.appendChild(t),
          t
        );
      }
      _createHostElement() {
        let e = this._document.createElement("div");
        return this._overlayContainer.getContainerElement().appendChild(e), e;
      }
      _createPortalOutlet(e) {
        return (
          this._appRef || (this._appRef = this._injector.get(ft)),
          new Ct(e, null, this._appRef, this._injector, this._document)
        );
      }
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
    }
    return i;
  })();
var lr = new O("cdk-connected-overlay-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    let i = a(fe);
    return () => i.scrollStrategies.reposition();
  },
});
function dr(i) {
  return () => i.scrollStrategies.reposition();
}
var cr = { provide: lr, deps: [fe], useFactory: dr },
  It = (() => {
    class i {
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵmod = k({ type: i });
      static ɵinj = D({ providers: [fe, cr], imports: [xe, Se, ri, ri] });
    }
    return i;
  })();
function hr(i, n) {}
var Ce = class {
  viewContainerRef;
  injector;
  id;
  role = "dialog";
  panelClass = "";
  hasBackdrop = !0;
  backdropClass = "";
  disableClose = !1;
  width = "";
  height = "";
  minWidth;
  minHeight;
  maxWidth;
  maxHeight;
  positionStrategy;
  data = null;
  direction;
  ariaDescribedBy = null;
  ariaLabelledBy = null;
  ariaLabel = null;
  ariaModal = !1;
  autoFocus = "first-tabbable";
  restoreFocus = !0;
  scrollStrategy;
  closeOnNavigation = !0;
  closeOnDestroy = !0;
  closeOnOverlayDetachments = !0;
  componentFactoryResolver;
  providers;
  container;
  templateContext;
};
var wi = (() => {
    class i extends $e {
      _elementRef = a(T);
      _focusTrapFactory = a(Bn);
      _config;
      _interactivityChecker = a(hi);
      _ngZone = a(w);
      _overlayRef = a(Xe);
      _focusMonitor = a(Hn);
      _renderer = a(de);
      _platform = a(R);
      _document = a(V, { optional: !0 });
      _portalOutlet;
      _focusTrap = null;
      _elementFocusedBeforeDialogWasOpened = null;
      _closeInteractionType = null;
      _ariaLabelledByQueue = [];
      _changeDetectorRef = a(je);
      _injector = a(U);
      _isDestroyed = !1;
      constructor() {
        super(),
          (this._config = a(Ce, { optional: !0 }) || new Ce()),
          this._config.ariaLabelledBy &&
            this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
      }
      _addAriaLabelledBy(e) {
        this._ariaLabelledByQueue.push(e),
          this._changeDetectorRef.markForCheck();
      }
      _removeAriaLabelledBy(e) {
        let t = this._ariaLabelledByQueue.indexOf(e);
        t > -1 &&
          (this._ariaLabelledByQueue.splice(t, 1),
          this._changeDetectorRef.markForCheck());
      }
      _contentAttached() {
        this._initializeFocusTrap(),
          this._handleBackdropClicks(),
          this._captureInitialFocus();
      }
      _captureInitialFocus() {
        this._trapFocus();
      }
      ngOnDestroy() {
        (this._isDestroyed = !0), this._restoreFocus();
      }
      attachComponentPortal(e) {
        this._portalOutlet.hasAttached();
        let t = this._portalOutlet.attachComponentPortal(e);
        return this._contentAttached(), t;
      }
      attachTemplatePortal(e) {
        this._portalOutlet.hasAttached();
        let t = this._portalOutlet.attachTemplatePortal(e);
        return this._contentAttached(), t;
      }
      attachDomPortal = (e) => {
        this._portalOutlet.hasAttached();
        let t = this._portalOutlet.attachDomPortal(e);
        return this._contentAttached(), t;
      };
      _recaptureFocus() {
        this._containsFocus() || this._trapFocus();
      }
      _forceFocus(e, t) {
        this._interactivityChecker.isFocusable(e) ||
          ((e.tabIndex = -1),
          this._ngZone.runOutsideAngular(() => {
            let o = () => {
                r(), d(), e.removeAttribute("tabindex");
              },
              r = this._renderer.listen(e, "blur", o),
              d = this._renderer.listen(e, "mousedown", o);
          })),
          e.focus(t);
      }
      _focusByCssSelector(e, t) {
        let o = this._elementRef.nativeElement.querySelector(e);
        o && this._forceFocus(o, t);
      }
      _trapFocus() {
        this._isDestroyed ||
          De(
            () => {
              let e = this._elementRef.nativeElement;
              switch (this._config.autoFocus) {
                case !1:
                case "dialog":
                  this._containsFocus() || e.focus();
                  break;
                case !0:
                case "first-tabbable":
                  this._focusTrap?.focusInitialElement() ||
                    this._focusDialogContainer();
                  break;
                case "first-heading":
                  this._focusByCssSelector(
                    'h1, h2, h3, h4, h5, h6, [role="heading"]',
                  );
                  break;
                default:
                  this._focusByCssSelector(this._config.autoFocus);
                  break;
              }
            },
            { injector: this._injector },
          );
      }
      _restoreFocus() {
        let e = this._config.restoreFocus,
          t = null;
        if (
          (typeof e == "string"
            ? (t = this._document.querySelector(e))
            : typeof e == "boolean"
              ? (t = e ? this._elementFocusedBeforeDialogWasOpened : null)
              : e && (t = e),
          this._config.restoreFocus && t && typeof t.focus == "function")
        ) {
          let o = nt(),
            r = this._elementRef.nativeElement;
          (!o || o === this._document.body || o === r || r.contains(o)) &&
            (this._focusMonitor
              ? (this._focusMonitor.focusVia(t, this._closeInteractionType),
                (this._closeInteractionType = null))
              : t.focus());
        }
        this._focusTrap && this._focusTrap.destroy();
      }
      _focusDialogContainer() {
        this._elementRef.nativeElement.focus &&
          this._elementRef.nativeElement.focus();
      }
      _containsFocus() {
        let e = this._elementRef.nativeElement,
          t = nt();
        return e === t || e.contains(t);
      }
      _initializeFocusTrap() {
        this._platform.isBrowser &&
          ((this._focusTrap = this._focusTrapFactory.create(
            this._elementRef.nativeElement,
          )),
          this._document && (this._elementFocusedBeforeDialogWasOpened = nt()));
      }
      _handleBackdropClicks() {
        this._overlayRef.backdropClick().subscribe(() => {
          this._config.disableClose && this._recaptureFocus();
        });
      }
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵcmp = S({
        type: i,
        selectors: [["cdk-dialog-container"]],
        viewQuery: function (t, o) {
          if ((t & 1 && X(rt, 7), t & 2)) {
            let r;
            B((r = z())) && (o._portalOutlet = r.first);
          }
        },
        hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"],
        hostVars: 6,
        hostBindings: function (t, o) {
          t & 2 &&
            ne("id", o._config.id || null)("role", o._config.role)(
              "aria-modal",
              o._config.ariaModal,
            )(
              "aria-labelledby",
              o._config.ariaLabel ? null : o._ariaLabelledByQueue[0],
            )("aria-label", o._config.ariaLabel)(
              "aria-describedby",
              o._config.ariaDescribedBy || null,
            );
        },
        features: [ce],
        decls: 1,
        vars: 0,
        consts: [["cdkPortalOutlet", ""]],
        template: function (t, o) {
          t & 1 && b(0, hr, 0, 0, "ng-template", 0);
        },
        dependencies: [rt],
        styles: [
          ".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}",
        ],
        encapsulation: 2,
      });
    }
    return i;
  })(),
  st = class {
    overlayRef;
    config;
    componentInstance;
    componentRef;
    containerInstance;
    disableClose;
    closed = new x();
    backdropClick;
    keydownEvents;
    outsidePointerEvents;
    id;
    _detachSubscription;
    constructor(n, e) {
      (this.overlayRef = n),
        (this.config = e),
        (this.disableClose = e.disableClose),
        (this.backdropClick = n.backdropClick()),
        (this.keydownEvents = n.keydownEvents()),
        (this.outsidePointerEvents = n.outsidePointerEvents()),
        (this.id = e.id),
        this.keydownEvents.subscribe((t) => {
          t.keyCode === 27 &&
            !this.disableClose &&
            !Mt(t) &&
            (t.preventDefault(),
            this.close(void 0, { focusOrigin: "keyboard" }));
        }),
        this.backdropClick.subscribe(() => {
          this.disableClose || this.close(void 0, { focusOrigin: "mouse" });
        }),
        (this._detachSubscription = n.detachments().subscribe(() => {
          e.closeOnOverlayDetachments !== !1 && this.close();
        }));
    }
    close(n, e) {
      if (this.containerInstance) {
        let t = this.closed;
        (this.containerInstance._closeInteractionType =
          e?.focusOrigin || "program"),
          this._detachSubscription.unsubscribe(),
          this.overlayRef.dispose(),
          t.next(n),
          t.complete(),
          (this.componentInstance = this.containerInstance = null);
      }
    }
    updatePosition() {
      return this.overlayRef.updatePosition(), this;
    }
    updateSize(n = "", e = "") {
      return this.overlayRef.updateSize({ width: n, height: e }), this;
    }
    addPanelClass(n) {
      return this.overlayRef.addPanelClass(n), this;
    }
    removePanelClass(n) {
      return this.overlayRef.removePanelClass(n), this;
    }
  },
  mr = new O("DialogScrollStrategy", {
    providedIn: "root",
    factory: () => {
      let i = a(fe);
      return () => i.scrollStrategies.block();
    },
  }),
  ur = new O("DialogData"),
  fr = new O("DefaultDialogConfig");
var Mi = (() => {
  class i {
    _overlay = a(fe);
    _injector = a(U);
    _defaultOptions = a(fr, { optional: !0 });
    _parentDialog = a(i, { optional: !0, skipSelf: !0 });
    _overlayContainer = a(St);
    _idGenerator = a(Q);
    _openDialogsAtThisLevel = [];
    _afterAllClosedAtThisLevel = new x();
    _afterOpenedAtThisLevel = new x();
    _ariaHiddenElements = new Map();
    _scrollStrategy = a(mr);
    get openDialogs() {
      return this._parentDialog
        ? this._parentDialog.openDialogs
        : this._openDialogsAtThisLevel;
    }
    get afterOpened() {
      return this._parentDialog
        ? this._parentDialog.afterOpened
        : this._afterOpenedAtThisLevel;
    }
    afterAllClosed = lt(() =>
      this.openDialogs.length
        ? this._getAfterAllClosed()
        : this._getAfterAllClosed().pipe(le(void 0)),
    );
    constructor() {}
    open(e, t) {
      let o = this._defaultOptions || new Ce();
      (t = W(W({}, o), t)),
        (t.id = t.id || this._idGenerator.getId("cdk-dialog-")),
        t.id && this.getDialogById(t.id);
      let r = this._getOverlayConfig(t),
        d = this._overlay.create(r),
        h = new st(d, t),
        g = this._attachContainer(d, h, t);
      return (
        (h.containerInstance = g),
        this._attachDialogContent(e, h, g, t),
        this.openDialogs.length ||
          this._hideNonDialogContentFromAssistiveTechnology(),
        this.openDialogs.push(h),
        h.closed.subscribe(() => this._removeOpenDialog(h, !0)),
        this.afterOpened.next(h),
        h
      );
    }
    closeAll() {
      xi(this.openDialogs, (e) => e.close());
    }
    getDialogById(e) {
      return this.openDialogs.find((t) => t.id === e);
    }
    ngOnDestroy() {
      xi(this._openDialogsAtThisLevel, (e) => {
        e.config.closeOnDestroy === !1 && this._removeOpenDialog(e, !1);
      }),
        xi(this._openDialogsAtThisLevel, (e) => e.close()),
        this._afterAllClosedAtThisLevel.complete(),
        this._afterOpenedAtThisLevel.complete(),
        (this._openDialogsAtThisLevel = []);
    }
    _getOverlayConfig(e) {
      let t = new at({
        positionStrategy:
          e.positionStrategy ||
          this._overlay
            .position()
            .global()
            .centerHorizontally()
            .centerVertically(),
        scrollStrategy: e.scrollStrategy || this._scrollStrategy(),
        panelClass: e.panelClass,
        hasBackdrop: e.hasBackdrop,
        direction: e.direction,
        minWidth: e.minWidth,
        minHeight: e.minHeight,
        maxWidth: e.maxWidth,
        maxHeight: e.maxHeight,
        width: e.width,
        height: e.height,
        disposeOnNavigation: e.closeOnNavigation,
      });
      return e.backdropClass && (t.backdropClass = e.backdropClass), t;
    }
    _attachContainer(e, t, o) {
      let r = o.injector || o.viewContainerRef?.injector,
        d = [
          { provide: Ce, useValue: o },
          { provide: st, useValue: t },
          { provide: Xe, useValue: e },
        ],
        h;
      o.container
        ? typeof o.container == "function"
          ? (h = o.container)
          : ((h = o.container.type), d.push(...o.container.providers(o)))
        : (h = wi);
      let g = new Ge(
        h,
        o.viewContainerRef,
        U.create({ parent: r || this._injector, providers: d }),
      );
      return e.attach(g).instance;
    }
    _attachDialogContent(e, t, o, r) {
      if (e instanceof Je) {
        let d = this._createInjector(r, t, o, void 0),
          h = { $implicit: r.data, dialogRef: t };
        r.templateContext &&
          (h = W(
            W({}, h),
            typeof r.templateContext == "function"
              ? r.templateContext()
              : r.templateContext,
          )),
          o.attachTemplatePortal(new Ze(e, null, h, d));
      } else {
        let d = this._createInjector(r, t, o, this._injector),
          h = o.attachComponentPortal(new Ge(e, r.viewContainerRef, d));
        (t.componentRef = h), (t.componentInstance = h.instance);
      }
    }
    _createInjector(e, t, o, r) {
      let d = e.injector || e.viewContainerRef?.injector,
        h = [
          { provide: ur, useValue: e.data },
          { provide: st, useValue: t },
        ];
      return (
        e.providers &&
          (typeof e.providers == "function"
            ? h.push(...e.providers(t, e, o))
            : h.push(...e.providers)),
        e.direction &&
          (!d || !d.get(ue, null, { optional: !0 })) &&
          h.push({
            provide: ue,
            useValue: { value: e.direction, change: ge() },
          }),
        U.create({ parent: d || r, providers: h })
      );
    }
    _removeOpenDialog(e, t) {
      let o = this.openDialogs.indexOf(e);
      o > -1 &&
        (this.openDialogs.splice(o, 1),
        this.openDialogs.length ||
          (this._ariaHiddenElements.forEach((r, d) => {
            r
              ? d.setAttribute("aria-hidden", r)
              : d.removeAttribute("aria-hidden");
          }),
          this._ariaHiddenElements.clear(),
          t && this._getAfterAllClosed().next()));
    }
    _hideNonDialogContentFromAssistiveTechnology() {
      let e = this._overlayContainer.getContainerElement();
      if (e.parentElement) {
        let t = e.parentElement.children;
        for (let o = t.length - 1; o > -1; o--) {
          let r = t[o];
          r !== e &&
            r.nodeName !== "SCRIPT" &&
            r.nodeName !== "STYLE" &&
            !r.hasAttribute("aria-live") &&
            (this._ariaHiddenElements.set(r, r.getAttribute("aria-hidden")),
            r.setAttribute("aria-hidden", "true"));
        }
      }
    }
    _getAfterAllClosed() {
      let e = this._parentDialog;
      return e ? e._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
    }
    static ɵfac = function (t) {
      return new (t || i)();
    };
    static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
  }
  return i;
})();
function xi(i, n) {
  let e = i.length;
  for (; e--; ) n(i[e]);
}
var Jn = (() => {
  class i {
    static ɵfac = function (t) {
      return new (t || i)();
    };
    static ɵmod = k({ type: i });
    static ɵinj = D({ providers: [Mi], imports: [It, Se, Wn, Se] });
  }
  return i;
})();
var pe = (() => {
    class i {
      constructor() {
        a(mi)._applyBodyHighContrastModeCssClasses();
      }
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵmod = k({ type: i });
      static ɵinj = D({ imports: [xe, xe] });
    }
    return i;
  })(),
  Pt = class {
    _defaultMatcher;
    ngControl;
    _parentFormGroup;
    _parentForm;
    _stateChanges;
    errorState = !1;
    matcher;
    constructor(n, e, t, o, r) {
      (this._defaultMatcher = n),
        (this.ngControl = e),
        (this._parentFormGroup = t),
        (this._parentForm = o),
        (this._stateChanges = r);
    }
    updateErrorState() {
      let n = this.errorState,
        e = this._parentFormGroup || this._parentForm,
        t = this.matcher || this._defaultMatcher,
        o = this.ngControl ? this.ngControl.control : null,
        r = t?.isErrorState(o, e) ?? !1;
      r !== n && ((this.errorState = r), this._stateChanges.next());
    }
  };
var eo = (() => {
  class i {
    isErrorState(e, t) {
      return !!(e && e.invalid && (e.touched || (t && t.submitted)));
    }
    static ɵfac = function (t) {
      return new (t || i)();
    };
    static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
  }
  return i;
})();
function pr(i, n) {}
var At = class {
    viewContainerRef;
    injector;
    id;
    role = "dialog";
    panelClass = "";
    hasBackdrop = !0;
    backdropClass = "";
    disableClose = !1;
    width = "";
    height = "";
    minWidth;
    minHeight;
    maxWidth;
    maxHeight;
    position;
    data = null;
    direction;
    ariaDescribedBy = null;
    ariaLabelledBy = null;
    ariaLabel = null;
    ariaModal = !1;
    autoFocus = "first-tabbable";
    restoreFocus = !0;
    delayFocusTrap = !0;
    scrollStrategy;
    closeOnNavigation = !0;
    componentFactoryResolver;
    enterAnimationDuration;
    exitAnimationDuration;
  },
  Ei = "mdc-dialog--open",
  to = "mdc-dialog--opening",
  io = "mdc-dialog--closing",
  gr = 150,
  _r = 75,
  vr = (() => {
    class i extends wi {
      _animationMode = a(Ee, { optional: !0 });
      _animationStateChanged = new ae();
      _animationsEnabled = this._animationMode !== "NoopAnimations";
      _actionSectionCount = 0;
      _hostElement = this._elementRef.nativeElement;
      _enterAnimationDuration = this._animationsEnabled
        ? (oo(this._config.enterAnimationDuration) ?? gr)
        : 0;
      _exitAnimationDuration = this._animationsEnabled
        ? (oo(this._config.exitAnimationDuration) ?? _r)
        : 0;
      _animationTimer = null;
      _contentAttached() {
        super._contentAttached(), this._startOpenAnimation();
      }
      _startOpenAnimation() {
        this._animationStateChanged.emit({
          state: "opening",
          totalTime: this._enterAnimationDuration,
        }),
          this._animationsEnabled
            ? (this._hostElement.style.setProperty(
                no,
                `${this._enterAnimationDuration}ms`,
              ),
              this._requestAnimationFrame(() =>
                this._hostElement.classList.add(to, Ei),
              ),
              this._waitForAnimationToComplete(
                this._enterAnimationDuration,
                this._finishDialogOpen,
              ))
            : (this._hostElement.classList.add(Ei),
              Promise.resolve().then(() => this._finishDialogOpen()));
      }
      _startExitAnimation() {
        this._animationStateChanged.emit({
          state: "closing",
          totalTime: this._exitAnimationDuration,
        }),
          this._hostElement.classList.remove(Ei),
          this._animationsEnabled
            ? (this._hostElement.style.setProperty(
                no,
                `${this._exitAnimationDuration}ms`,
              ),
              this._requestAnimationFrame(() =>
                this._hostElement.classList.add(io),
              ),
              this._waitForAnimationToComplete(
                this._exitAnimationDuration,
                this._finishDialogClose,
              ))
            : Promise.resolve().then(() => this._finishDialogClose());
      }
      _updateActionSectionCount(e) {
        (this._actionSectionCount += e), this._changeDetectorRef.markForCheck();
      }
      _finishDialogOpen = () => {
        this._clearAnimationClasses(),
          this._openAnimationDone(this._enterAnimationDuration);
      };
      _finishDialogClose = () => {
        this._clearAnimationClasses(),
          this._animationStateChanged.emit({
            state: "closed",
            totalTime: this._exitAnimationDuration,
          });
      };
      _clearAnimationClasses() {
        this._hostElement.classList.remove(to, io);
      }
      _waitForAnimationToComplete(e, t) {
        this._animationTimer !== null && clearTimeout(this._animationTimer),
          (this._animationTimer = setTimeout(t, e));
      }
      _requestAnimationFrame(e) {
        this._ngZone.runOutsideAngular(() => {
          typeof requestAnimationFrame == "function"
            ? requestAnimationFrame(e)
            : e();
        });
      }
      _captureInitialFocus() {
        this._config.delayFocusTrap || this._trapFocus();
      }
      _openAnimationDone(e) {
        this._config.delayFocusTrap && this._trapFocus(),
          this._animationStateChanged.next({ state: "opened", totalTime: e });
      }
      ngOnDestroy() {
        super.ngOnDestroy(),
          this._animationTimer !== null && clearTimeout(this._animationTimer);
      }
      attachComponentPortal(e) {
        let t = super.attachComponentPortal(e);
        return (
          t.location.nativeElement.classList.add(
            "mat-mdc-dialog-component-host",
          ),
          t
        );
      }
      static ɵfac = (() => {
        let e;
        return function (o) {
          return (e || (e = _e(i)))(o || i);
        };
      })();
      static ɵcmp = S({
        type: i,
        selectors: [["mat-dialog-container"]],
        hostAttrs: [
          "tabindex",
          "-1",
          1,
          "mat-mdc-dialog-container",
          "mdc-dialog",
        ],
        hostVars: 10,
        hostBindings: function (t, o) {
          t & 2 &&
            (ve("id", o._config.id),
            ne("aria-modal", o._config.ariaModal)("role", o._config.role)(
              "aria-labelledby",
              o._config.ariaLabel ? null : o._ariaLabelledByQueue[0],
            )("aria-label", o._config.ariaLabel)(
              "aria-describedby",
              o._config.ariaDescribedBy || null,
            ),
            A("_mat-animation-noopable", !o._animationsEnabled)(
              "mat-mdc-dialog-container-with-actions",
              o._actionSectionCount > 0,
            ));
        },
        features: [ce],
        decls: 3,
        vars: 0,
        consts: [
          [1, "mat-mdc-dialog-inner-container", "mdc-dialog__container"],
          [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"],
          ["cdkPortalOutlet", ""],
        ],
        template: function (t, o) {
          t & 1 &&
            (s(0, "div", 0)(1, "div", 1),
            b(2, pr, 0, 0, "ng-template", 2),
            l()());
        },
        dependencies: [rt],
        styles: [
          '.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 560px);min-width:var(--mat-dialog-container-min-width, 280px)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, calc(100vw - 32px))}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, none);border-radius:var(--mdc-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));background-color:var(--mdc-dialog-container-color, var(--mat-sys-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 6px 24px 13px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mdc-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));line-height:var(--mdc-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));font-size:var(--mdc-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));font-weight:var(--mdc-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));letter-spacing:var(--mdc-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mdc-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));line-height:var(--mdc-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));font-size:var(--mdc-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));font-weight:var(--mdc-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));letter-spacing:var(--mdc-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px 0)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 16px 24px);justify-content:var(--mat-dialog-actions-alignment, flex-end)}@media(forced-colors: active){.mat-mdc-dialog-actions{border-top-color:CanvasText}}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}',
        ],
        encapsulation: 2,
      });
    }
    return i;
  })(),
  no = "--mat-dialog-transition-duration";
function oo(i) {
  return i == null
    ? null
    : typeof i == "number"
      ? i
      : i.endsWith("ms")
        ? tt(i.substring(0, i.length - 2))
        : i.endsWith("s")
          ? tt(i.substring(0, i.length - 1)) * 1e3
          : i === "0"
            ? 0
            : null;
}
var Tt = (function (i) {
    return (
      (i[(i.OPEN = 0)] = "OPEN"),
      (i[(i.CLOSING = 1)] = "CLOSING"),
      (i[(i.CLOSED = 2)] = "CLOSED"),
      i
    );
  })(Tt || {}),
  Ke = class {
    _ref;
    _containerInstance;
    componentInstance;
    componentRef;
    disableClose;
    id;
    _afterOpened = new x();
    _beforeClosed = new x();
    _result;
    _closeFallbackTimeout;
    _state = Tt.OPEN;
    _closeInteractionType;
    constructor(n, e, t) {
      (this._ref = n),
        (this._containerInstance = t),
        (this.disableClose = e.disableClose),
        (this.id = n.id),
        n.addPanelClass("mat-mdc-dialog-panel"),
        t._animationStateChanged
          .pipe(
            $((o) => o.state === "opened"),
            Me(1),
          )
          .subscribe(() => {
            this._afterOpened.next(), this._afterOpened.complete();
          }),
        t._animationStateChanged
          .pipe(
            $((o) => o.state === "closed"),
            Me(1),
          )
          .subscribe(() => {
            clearTimeout(this._closeFallbackTimeout), this._finishDialogClose();
          }),
        n.overlayRef.detachments().subscribe(() => {
          this._beforeClosed.next(this._result),
            this._beforeClosed.complete(),
            this._finishDialogClose();
        }),
        Ne(
          this.backdropClick(),
          this.keydownEvents().pipe(
            $((o) => o.keyCode === 27 && !this.disableClose && !Mt(o)),
          ),
        ).subscribe((o) => {
          this.disableClose ||
            (o.preventDefault(),
            br(this, o.type === "keydown" ? "keyboard" : "mouse"));
        });
    }
    close(n) {
      (this._result = n),
        this._containerInstance._animationStateChanged
          .pipe(
            $((e) => e.state === "closing"),
            Me(1),
          )
          .subscribe((e) => {
            this._beforeClosed.next(n),
              this._beforeClosed.complete(),
              this._ref.overlayRef.detachBackdrop(),
              (this._closeFallbackTimeout = setTimeout(
                () => this._finishDialogClose(),
                e.totalTime + 100,
              ));
          }),
        (this._state = Tt.CLOSING),
        this._containerInstance._startExitAnimation();
    }
    afterOpened() {
      return this._afterOpened;
    }
    afterClosed() {
      return this._ref.closed;
    }
    beforeClosed() {
      return this._beforeClosed;
    }
    backdropClick() {
      return this._ref.backdropClick;
    }
    keydownEvents() {
      return this._ref.keydownEvents;
    }
    updatePosition(n) {
      let e = this._ref.config.positionStrategy;
      return (
        n && (n.left || n.right)
          ? n.left
            ? e.left(n.left)
            : e.right(n.right)
          : e.centerHorizontally(),
        n && (n.top || n.bottom)
          ? n.top
            ? e.top(n.top)
            : e.bottom(n.bottom)
          : e.centerVertically(),
        this._ref.updatePosition(),
        this
      );
    }
    updateSize(n = "", e = "") {
      return this._ref.updateSize(n, e), this;
    }
    addPanelClass(n) {
      return this._ref.addPanelClass(n), this;
    }
    removePanelClass(n) {
      return this._ref.removePanelClass(n), this;
    }
    getState() {
      return this._state;
    }
    _finishDialogClose() {
      (this._state = Tt.CLOSED),
        this._ref.close(this._result, {
          focusOrigin: this._closeInteractionType,
        }),
        (this.componentInstance = null);
    }
  };
function br(i, n, e) {
  return (i._closeInteractionType = n), i.close(e);
}
var Di = new O("MatMdcDialogData"),
  yr = new O("mat-mdc-dialog-default-options"),
  xr = new O("mat-mdc-dialog-scroll-strategy", {
    providedIn: "root",
    factory: () => {
      let i = a(fe);
      return () => i.scrollStrategies.block();
    },
  });
var qe = (() => {
  class i {
    _overlay = a(fe);
    _defaultOptions = a(yr, { optional: !0 });
    _scrollStrategy = a(xr);
    _parentDialog = a(i, { optional: !0, skipSelf: !0 });
    _idGenerator = a(Q);
    _dialog = a(Mi);
    _openDialogsAtThisLevel = [];
    _afterAllClosedAtThisLevel = new x();
    _afterOpenedAtThisLevel = new x();
    dialogConfigClass = At;
    _dialogRefConstructor;
    _dialogContainerType;
    _dialogDataToken;
    get openDialogs() {
      return this._parentDialog
        ? this._parentDialog.openDialogs
        : this._openDialogsAtThisLevel;
    }
    get afterOpened() {
      return this._parentDialog
        ? this._parentDialog.afterOpened
        : this._afterOpenedAtThisLevel;
    }
    _getAfterAllClosed() {
      let e = this._parentDialog;
      return e ? e._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
    }
    afterAllClosed = lt(() =>
      this.openDialogs.length
        ? this._getAfterAllClosed()
        : this._getAfterAllClosed().pipe(le(void 0)),
    );
    constructor() {
      (this._dialogRefConstructor = Ke),
        (this._dialogContainerType = vr),
        (this._dialogDataToken = Di);
    }
    open(e, t) {
      let o;
      (t = W(W({}, this._defaultOptions || new At()), t)),
        (t.id = t.id || this._idGenerator.getId("mat-mdc-dialog-")),
        (t.scrollStrategy = t.scrollStrategy || this._scrollStrategy());
      let r = this._dialog.open(
        e,
        Qe(W({}, t), {
          positionStrategy: this._overlay
            .position()
            .global()
            .centerHorizontally()
            .centerVertically(),
          disableClose: !0,
          closeOnDestroy: !1,
          closeOnOverlayDetachments: !1,
          container: {
            type: this._dialogContainerType,
            providers: () => [
              { provide: this.dialogConfigClass, useValue: t },
              { provide: Ce, useValue: t },
            ],
          },
          templateContext: () => ({ dialogRef: o }),
          providers: (d, h, g) => (
            (o = new this._dialogRefConstructor(d, t, g)),
            o.updatePosition(t?.position),
            [
              { provide: this._dialogContainerType, useValue: g },
              { provide: this._dialogDataToken, useValue: h.data },
              { provide: this._dialogRefConstructor, useValue: o },
            ]
          ),
        }),
      );
      return (
        (o.componentRef = r.componentRef),
        (o.componentInstance = r.componentInstance),
        this.openDialogs.push(o),
        this.afterOpened.next(o),
        o.afterClosed().subscribe(() => {
          let d = this.openDialogs.indexOf(o);
          d > -1 &&
            (this.openDialogs.splice(d, 1),
            this.openDialogs.length || this._getAfterAllClosed().next());
        }),
        o
      );
    }
    closeAll() {
      this._closeDialogs(this.openDialogs);
    }
    getDialogById(e) {
      return this.openDialogs.find((t) => t.id === e);
    }
    ngOnDestroy() {
      this._closeDialogs(this._openDialogsAtThisLevel),
        this._afterAllClosedAtThisLevel.complete(),
        this._afterOpenedAtThisLevel.complete();
    }
    _closeDialogs(e) {
      let t = e.length;
      for (; t--; ) e[t].close();
    }
    static ɵfac = function (t) {
      return new (t || i)();
    };
    static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
  }
  return i;
})();
var ro = (() => {
    class i {
      _dialogRef = a(Ke, { optional: !0 });
      _elementRef = a(T);
      _dialog = a(qe);
      constructor() {}
      ngOnInit() {
        this._dialogRef ||
          (this._dialogRef = Cr(this._elementRef, this._dialog.openDialogs)),
          this._dialogRef &&
            Promise.resolve().then(() => {
              this._onAdd();
            });
      }
      ngOnDestroy() {
        this._dialogRef?._containerInstance &&
          Promise.resolve().then(() => {
            this._onRemove();
          });
      }
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵdir = I({ type: i });
    }
    return i;
  })(),
  ao = (() => {
    class i extends ro {
      id = a(Q).getId("mat-mdc-dialog-title-");
      _onAdd() {
        this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id);
      }
      _onRemove() {
        this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id);
      }
      static ɵfac = (() => {
        let e;
        return function (o) {
          return (e || (e = _e(i)))(o || i);
        };
      })();
      static ɵdir = I({
        type: i,
        selectors: [
          ["", "mat-dialog-title", ""],
          ["", "matDialogTitle", ""],
        ],
        hostAttrs: [1, "mat-mdc-dialog-title", "mdc-dialog__title"],
        hostVars: 1,
        hostBindings: function (t, o) {
          t & 2 && ve("id", o.id);
        },
        inputs: { id: "id" },
        exportAs: ["matDialogTitle"],
        features: [ce],
      });
    }
    return i;
  })(),
  so = (() => {
    class i {
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵdir = I({
        type: i,
        selectors: [
          ["", "mat-dialog-content", ""],
          ["mat-dialog-content"],
          ["", "matDialogContent", ""],
        ],
        hostAttrs: [1, "mat-mdc-dialog-content", "mdc-dialog__content"],
        features: [Zi([Sn])],
      });
    }
    return i;
  })(),
  lo = (() => {
    class i extends ro {
      align;
      _onAdd() {
        this._dialogRef._containerInstance?._updateActionSectionCount?.(1);
      }
      _onRemove() {
        this._dialogRef._containerInstance?._updateActionSectionCount?.(-1);
      }
      static ɵfac = (() => {
        let e;
        return function (o) {
          return (e || (e = _e(i)))(o || i);
        };
      })();
      static ɵdir = I({
        type: i,
        selectors: [
          ["", "mat-dialog-actions", ""],
          ["mat-dialog-actions"],
          ["", "matDialogActions", ""],
        ],
        hostAttrs: [1, "mat-mdc-dialog-actions", "mdc-dialog__actions"],
        hostVars: 6,
        hostBindings: function (t, o) {
          t & 2 &&
            A("mat-mdc-dialog-actions-align-start", o.align === "start")(
              "mat-mdc-dialog-actions-align-center",
              o.align === "center",
            )("mat-mdc-dialog-actions-align-end", o.align === "end");
        },
        inputs: { align: "align" },
        features: [ce],
      });
    }
    return i;
  })();
function Cr(i, n) {
  let e = i.nativeElement.parentElement;
  for (; e && !e.classList.contains("mat-mdc-dialog-container"); )
    e = e.parentElement;
  return e ? n.find((t) => t.id === e.id) : null;
}
var co = (() => {
  class i {
    static ɵfac = function (t) {
      return new (t || i)();
    };
    static ɵmod = k({ type: i });
    static ɵinj = D({ providers: [qe], imports: [Jn, It, Se, pe, pe] });
  }
  return i;
})();
var wr = (() => {
    class i {
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵcmp = S({
        type: i,
        selectors: [["ng-component"]],
        hostAttrs: ["cdk-text-field-style-loader", ""],
        decls: 0,
        vars: 0,
        template: function (t, o) {},
        styles: [
          "textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}@keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      });
    }
    return i;
  })(),
  Mr = { passive: !0 },
  ho = (() => {
    class i {
      _platform = a(R);
      _ngZone = a(w);
      _renderer = a(te).createRenderer(null, null);
      _styleLoader = a(Ie);
      _monitoredElements = new Map();
      constructor() {}
      monitor(e) {
        if (!this._platform.isBrowser) return Fi;
        this._styleLoader.load(wr);
        let t = he(e),
          o = this._monitoredElements.get(t);
        if (o) return o.subject;
        let r = new x(),
          d = "cdk-text-field-autofilled",
          h = (C) => {
            C.animationName === "cdk-text-field-autofill-start" &&
            !t.classList.contains(d)
              ? (t.classList.add(d),
                this._ngZone.run(() =>
                  r.next({ target: C.target, isAutofilled: !0 }),
                ))
              : C.animationName === "cdk-text-field-autofill-end" &&
                t.classList.contains(d) &&
                (t.classList.remove(d),
                this._ngZone.run(() =>
                  r.next({ target: C.target, isAutofilled: !1 }),
                ));
          },
          g = this._ngZone.runOutsideAngular(
            () => (
              t.classList.add("cdk-text-field-autofill-monitored"),
              re(this._renderer, t, "animationstart", h, Mr)
            ),
          );
        return this._monitoredElements.set(t, { subject: r, unlisten: g }), r;
      }
      stopMonitoring(e) {
        let t = he(e),
          o = this._monitoredElements.get(t);
        o &&
          (o.unlisten(),
          o.subject.complete(),
          t.classList.remove("cdk-text-field-autofill-monitored"),
          t.classList.remove("cdk-text-field-autofilled"),
          this._monitoredElements.delete(t));
      }
      ngOnDestroy() {
        this._monitoredElements.forEach((e, t) => this.stopMonitoring(t));
      }
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
    }
    return i;
  })();
var mo = (() => {
  class i {
    static ɵfac = function (t) {
      return new (t || i)();
    };
    static ɵmod = k({ type: i });
    static ɵinj = D({});
  }
  return i;
})();
var ki = class {
    _box;
    _destroyed = new x();
    _resizeSubject = new x();
    _resizeObserver;
    _elementObservables = new Map();
    constructor(n) {
      (this._box = n),
        typeof ResizeObserver < "u" &&
          (this._resizeObserver = new ResizeObserver((e) =>
            this._resizeSubject.next(e),
          ));
    }
    observe(n) {
      return (
        this._elementObservables.has(n) ||
          this._elementObservables.set(
            n,
            new Fe((e) => {
              let t = this._resizeSubject.subscribe(e);
              return (
                this._resizeObserver?.observe(n, { box: this._box }),
                () => {
                  this._resizeObserver?.unobserve(n),
                    t.unsubscribe(),
                    this._elementObservables.delete(n);
                }
              );
            }).pipe(
              $((e) => e.some((t) => t.target === n)),
              Yt({ bufferSize: 1, refCount: !0 }),
              ee(this._destroyed),
            ),
          ),
        this._elementObservables.get(n)
      );
    }
    destroy() {
      this._destroyed.next(),
        this._destroyed.complete(),
        this._resizeSubject.complete(),
        this._elementObservables.clear();
    }
  },
  uo = (() => {
    class i {
      _cleanupErrorListener;
      _observers = new Map();
      _ngZone = a(w);
      constructor() {
        typeof ResizeObserver < "u";
      }
      ngOnDestroy() {
        for (let [, e] of this._observers) e.destroy();
        this._observers.clear(), this._cleanupErrorListener?.();
      }
      observe(e, t) {
        let o = t?.box || "content-box";
        return (
          this._observers.has(o) || this._observers.set(o, new ki(o)),
          this._observers.get(o).observe(e)
        );
      }
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
    }
    return i;
  })();
var Er = ["notch"],
  Dr = ["matFormFieldNotchedOutline", ""],
  Or = ["*"],
  kr = ["textField"],
  Sr = ["iconPrefixContainer"],
  Ir = ["textPrefixContainer"],
  Pr = ["iconSuffixContainer"],
  Tr = ["textSuffixContainer"],
  Ar = [
    "*",
    [["mat-label"]],
    [
      ["", "matPrefix", ""],
      ["", "matIconPrefix", ""],
    ],
    [["", "matTextPrefix", ""]],
    [["", "matTextSuffix", ""]],
    [
      ["", "matSuffix", ""],
      ["", "matIconSuffix", ""],
    ],
    [["mat-error"], ["", "matError", ""]],
    [["mat-hint", 3, "align", "end"]],
    [["mat-hint", "align", "end"]],
  ],
  Rr = [
    "*",
    "mat-label",
    "[matPrefix], [matIconPrefix]",
    "[matTextPrefix]",
    "[matTextSuffix]",
    "[matSuffix], [matIconSuffix]",
    "mat-error, [matError]",
    "mat-hint:not([align='end'])",
    "mat-hint[align='end']",
  ];
function Fr(i, n) {
  i & 1 && u(0, "span", 21);
}
function Lr(i, n) {
  if (
    (i & 1 && (s(0, "label", 20), q(1, 1), b(2, Fr, 1, 0, "span", 21), l()),
    i & 2)
  ) {
    let e = f(2);
    p("floating", e._shouldLabelFloat())("monitorResize", e._hasOutline())(
      "id",
      e._labelId,
    ),
      ne("for", e._control.disableAutomaticLabeling ? null : e._control.id),
      c(2),
      Z(!e.hideRequiredMarker && e._control.required ? 2 : -1);
  }
}
function Nr(i, n) {
  if ((i & 1 && b(0, Lr, 3, 5, "label", 20), i & 2)) {
    let e = f();
    Z(e._hasFloatingLabel() ? 0 : -1);
  }
}
function Br(i, n) {
  i & 1 && u(0, "div", 7);
}
function zr(i, n) {}
function Vr(i, n) {
  if ((i & 1 && b(0, zr, 0, 0, "ng-template", 13), i & 2)) {
    f(2);
    let e = $t(1);
    p("ngTemplateOutlet", e);
  }
}
function jr(i, n) {
  if ((i & 1 && (s(0, "div", 9), b(1, Vr, 1, 1, null, 13), l()), i & 2)) {
    let e = f();
    p("matFormFieldNotchedOutlineOpen", e._shouldLabelFloat()),
      c(),
      Z(e._forceDisplayInfixLabel() ? -1 : 1);
  }
}
function Hr(i, n) {
  i & 1 && (s(0, "div", 10, 2), q(2, 2), l());
}
function Wr(i, n) {
  i & 1 && (s(0, "div", 11, 3), q(2, 3), l());
}
function Ur(i, n) {}
function Yr(i, n) {
  if ((i & 1 && b(0, Ur, 0, 0, "ng-template", 13), i & 2)) {
    f();
    let e = $t(1);
    p("ngTemplateOutlet", e);
  }
}
function Gr(i, n) {
  i & 1 && (s(0, "div", 14, 4), q(2, 4), l());
}
function Zr(i, n) {
  i & 1 && (s(0, "div", 15, 5), q(2, 5), l());
}
function $r(i, n) {
  i & 1 && u(0, "div", 16);
}
function Xr(i, n) {
  i & 1 && (s(0, "div", 18), q(1, 6), l());
}
function Kr(i, n) {
  if ((i & 1 && (s(0, "mat-hint", 22), m(1), l()), i & 2)) {
    let e = f(2);
    p("id", e._hintLabelId), c(), F(e.hintLabel);
  }
}
function qr(i, n) {
  if (
    (i & 1 &&
      (s(0, "div", 19),
      b(1, Kr, 2, 2, "mat-hint", 22),
      q(2, 7),
      u(3, "div", 23),
      q(4, 8),
      l()),
    i & 2)
  ) {
    let e = f();
    c(), Z(e.hintLabel ? 1 : -1);
  }
}
var fo = (() => {
    class i {
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵdir = I({ type: i, selectors: [["mat-label"]] });
    }
    return i;
  })(),
  Qr = new O("MatError");
var po = (() => {
    class i {
      align = "start";
      id = a(Q).getId("mat-mdc-hint-");
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵdir = I({
        type: i,
        selectors: [["mat-hint"]],
        hostAttrs: [
          1,
          "mat-mdc-form-field-hint",
          "mat-mdc-form-field-bottom-align",
        ],
        hostVars: 4,
        hostBindings: function (t, o) {
          t & 2 &&
            (ve("id", o.id),
            ne("align", null),
            A("mat-mdc-form-field-hint-end", o.align === "end"));
        },
        inputs: { align: "align", id: "id" },
      });
    }
    return i;
  })(),
  Jr = new O("MatPrefix");
var ea = new O("MatSuffix");
var Co = new O("FloatingLabelParent"),
  go = (() => {
    class i {
      _elementRef = a(T);
      get floating() {
        return this._floating;
      }
      set floating(e) {
        (this._floating = e), this.monitorResize && this._handleResize();
      }
      _floating = !1;
      get monitorResize() {
        return this._monitorResize;
      }
      set monitorResize(e) {
        (this._monitorResize = e),
          this._monitorResize
            ? this._subscribeToResize()
            : this._resizeSubscription.unsubscribe();
      }
      _monitorResize = !1;
      _resizeObserver = a(uo);
      _ngZone = a(w);
      _parent = a(Co);
      _resizeSubscription = new we();
      constructor() {}
      ngOnDestroy() {
        this._resizeSubscription.unsubscribe();
      }
      getWidth() {
        return ta(this._elementRef.nativeElement);
      }
      get element() {
        return this._elementRef.nativeElement;
      }
      _handleResize() {
        setTimeout(() => this._parent._handleLabelResized());
      }
      _subscribeToResize() {
        this._resizeSubscription.unsubscribe(),
          this._ngZone.runOutsideAngular(() => {
            this._resizeSubscription = this._resizeObserver
              .observe(this._elementRef.nativeElement, { box: "border-box" })
              .subscribe(() => this._handleResize());
          });
      }
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵdir = I({
        type: i,
        selectors: [["label", "matFormFieldFloatingLabel", ""]],
        hostAttrs: [1, "mdc-floating-label", "mat-mdc-floating-label"],
        hostVars: 2,
        hostBindings: function (t, o) {
          t & 2 && A("mdc-floating-label--float-above", o.floating);
        },
        inputs: { floating: "floating", monitorResize: "monitorResize" },
      });
    }
    return i;
  })();
function ta(i) {
  let n = i;
  if (n.offsetParent !== null) return n.scrollWidth;
  let e = n.cloneNode(!0);
  e.style.setProperty("position", "absolute"),
    e.style.setProperty("transform", "translate(-9999px, -9999px)"),
    document.documentElement.appendChild(e);
  let t = e.scrollWidth;
  return e.remove(), t;
}
var _o = "mdc-line-ripple--active",
  Rt = "mdc-line-ripple--deactivating",
  vo = (() => {
    class i {
      _elementRef = a(T);
      _cleanupTransitionEnd;
      constructor() {
        let e = a(w),
          t = a(de);
        e.runOutsideAngular(() => {
          this._cleanupTransitionEnd = t.listen(
            this._elementRef.nativeElement,
            "transitionend",
            this._handleTransitionEnd,
          );
        });
      }
      activate() {
        let e = this._elementRef.nativeElement.classList;
        e.remove(Rt), e.add(_o);
      }
      deactivate() {
        this._elementRef.nativeElement.classList.add(Rt);
      }
      _handleTransitionEnd = (e) => {
        let t = this._elementRef.nativeElement.classList,
          o = t.contains(Rt);
        e.propertyName === "opacity" && o && t.remove(_o, Rt);
      };
      ngOnDestroy() {
        this._cleanupTransitionEnd();
      }
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵdir = I({
        type: i,
        selectors: [["div", "matFormFieldLineRipple", ""]],
        hostAttrs: [1, "mdc-line-ripple"],
      });
    }
    return i;
  })(),
  bo = (() => {
    class i {
      _elementRef = a(T);
      _ngZone = a(w);
      open = !1;
      _notch;
      constructor() {}
      ngAfterViewInit() {
        let e = this._elementRef.nativeElement.querySelector(
          ".mdc-floating-label",
        );
        e
          ? (this._elementRef.nativeElement.classList.add(
              "mdc-notched-outline--upgraded",
            ),
            typeof requestAnimationFrame == "function" &&
              ((e.style.transitionDuration = "0s"),
              this._ngZone.runOutsideAngular(() => {
                requestAnimationFrame(() => (e.style.transitionDuration = ""));
              })))
          : this._elementRef.nativeElement.classList.add(
              "mdc-notched-outline--no-label",
            );
      }
      _setNotchWidth(e) {
        !this.open || !e
          ? (this._notch.nativeElement.style.width = "")
          : (this._notch.nativeElement.style.width = `calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`);
      }
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵcmp = S({
        type: i,
        selectors: [["div", "matFormFieldNotchedOutline", ""]],
        viewQuery: function (t, o) {
          if ((t & 1 && X(Er, 5), t & 2)) {
            let r;
            B((r = z())) && (o._notch = r.first);
          }
        },
        hostAttrs: [1, "mdc-notched-outline"],
        hostVars: 2,
        hostBindings: function (t, o) {
          t & 2 && A("mdc-notched-outline--notched", o.open);
        },
        inputs: { open: [0, "matFormFieldNotchedOutlineOpen", "open"] },
        attrs: Dr,
        ngContentSelectors: Or,
        decls: 5,
        vars: 0,
        consts: [
          ["notch", ""],
          [1, "mat-mdc-notch-piece", "mdc-notched-outline__leading"],
          [1, "mat-mdc-notch-piece", "mdc-notched-outline__notch"],
          [1, "mat-mdc-notch-piece", "mdc-notched-outline__trailing"],
        ],
        template: function (t, o) {
          t & 1 &&
            (et(),
            u(0, "div", 1),
            s(1, "div", 2, 0),
            q(3),
            l(),
            u(4, "div", 3));
        },
        encapsulation: 2,
        changeDetection: 0,
      });
    }
    return i;
  })(),
  Si = (() => {
    class i {
      value;
      stateChanges;
      id;
      placeholder;
      ngControl;
      focused;
      empty;
      shouldLabelFloat;
      required;
      disabled;
      errorState;
      controlType;
      autofilled;
      userAriaDescribedBy;
      disableAutomaticLabeling;
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵdir = I({ type: i });
    }
    return i;
  })();
var Ii = new O("MatFormField"),
  ia = new O("MAT_FORM_FIELD_DEFAULT_OPTIONS"),
  yo = "fill",
  na = "auto",
  xo = "fixed",
  oa = "translateY(-50%)",
  wo = (() => {
    class i {
      _elementRef = a(T);
      _changeDetectorRef = a(je);
      _dir = a(ue);
      _platform = a(R);
      _idGenerator = a(Q);
      _ngZone = a(w);
      _injector = a(U);
      _defaults = a(ia, { optional: !0 });
      _textField;
      _iconPrefixContainer;
      _textPrefixContainer;
      _iconSuffixContainer;
      _textSuffixContainer;
      _floatingLabel;
      _notchedOutline;
      _lineRipple;
      _formFieldControl;
      _prefixChildren;
      _suffixChildren;
      _errorChildren;
      _hintChildren;
      _labelChild = Gi(fo);
      get hideRequiredMarker() {
        return this._hideRequiredMarker;
      }
      set hideRequiredMarker(e) {
        this._hideRequiredMarker = He(e);
      }
      _hideRequiredMarker = !1;
      color = "primary";
      get floatLabel() {
        return this._floatLabel || this._defaults?.floatLabel || na;
      }
      set floatLabel(e) {
        e !== this._floatLabel &&
          ((this._floatLabel = e), this._changeDetectorRef.markForCheck());
      }
      _floatLabel;
      get appearance() {
        return this._appearance;
      }
      set appearance(e) {
        let t = this._appearance,
          o = e || this._defaults?.appearance || yo;
        (this._appearance = o),
          this._appearance === "outline" &&
            this._appearance !== t &&
            (this._needsOutlineLabelOffsetUpdate = !0);
      }
      _appearance = yo;
      get subscriptSizing() {
        return this._subscriptSizing || this._defaults?.subscriptSizing || xo;
      }
      set subscriptSizing(e) {
        this._subscriptSizing = e || this._defaults?.subscriptSizing || xo;
      }
      _subscriptSizing = null;
      get hintLabel() {
        return this._hintLabel;
      }
      set hintLabel(e) {
        (this._hintLabel = e), this._processHints();
      }
      _hintLabel = "";
      _hasIconPrefix = !1;
      _hasTextPrefix = !1;
      _hasIconSuffix = !1;
      _hasTextSuffix = !1;
      _labelId = this._idGenerator.getId("mat-mdc-form-field-label-");
      _hintLabelId = this._idGenerator.getId("mat-mdc-hint-");
      get _control() {
        return this._explicitFormFieldControl || this._formFieldControl;
      }
      set _control(e) {
        this._explicitFormFieldControl = e;
      }
      _destroyed = new x();
      _isFocused = null;
      _explicitFormFieldControl;
      _needsOutlineLabelOffsetUpdate = !1;
      _previousControl = null;
      _previousControlValidatorFn = null;
      _stateChanges;
      _valueChanges;
      _describedByChanges;
      _animationsDisabled;
      constructor() {
        let e = this._defaults;
        e &&
          (e.appearance && (this.appearance = e.appearance),
          (this._hideRequiredMarker = !!e?.hideRequiredMarker),
          e.color && (this.color = e.color)),
          (this._animationsDisabled =
            a(Ee, { optional: !0 }) === "NoopAnimations");
      }
      ngAfterViewInit() {
        this._updateFocusState(),
          this._animationsDisabled ||
            this._ngZone.runOutsideAngular(() => {
              setTimeout(() => {
                this._elementRef.nativeElement.classList.add(
                  "mat-form-field-animations-enabled",
                );
              }, 300);
            }),
          this._changeDetectorRef.detectChanges();
      }
      ngAfterContentInit() {
        this._assertFormFieldControl(),
          this._initializeSubscript(),
          this._initializePrefixAndSuffix(),
          this._initializeOutlineLabelOffsetSubscriptions();
      }
      ngAfterContentChecked() {
        this._assertFormFieldControl(),
          this._control !== this._previousControl &&
            (this._initializeControl(this._previousControl),
            this._control.ngControl &&
              this._control.ngControl.control &&
              (this._previousControlValidatorFn =
                this._control.ngControl.control.validator),
            (this._previousControl = this._control)),
          this._control.ngControl &&
            this._control.ngControl.control &&
            this._control.ngControl.control.validator !==
              this._previousControlValidatorFn &&
            this._changeDetectorRef.markForCheck();
      }
      ngOnDestroy() {
        this._stateChanges?.unsubscribe(),
          this._valueChanges?.unsubscribe(),
          this._describedByChanges?.unsubscribe(),
          this._destroyed.next(),
          this._destroyed.complete();
      }
      getLabelId = Kt(() => (this._hasFloatingLabel() ? this._labelId : null));
      getConnectedOverlayOrigin() {
        return this._textField || this._elementRef;
      }
      _animateAndLockLabel() {
        this._hasFloatingLabel() && (this.floatLabel = "always");
      }
      _initializeControl(e) {
        let t = this._control,
          o = "mat-mdc-form-field-type-";
        e && this._elementRef.nativeElement.classList.remove(o + e.controlType),
          t.controlType &&
            this._elementRef.nativeElement.classList.add(o + t.controlType),
          this._stateChanges?.unsubscribe(),
          (this._stateChanges = t.stateChanges.subscribe(() => {
            this._updateFocusState(), this._changeDetectorRef.markForCheck();
          })),
          this._describedByChanges?.unsubscribe(),
          (this._describedByChanges = t.stateChanges
            .pipe(
              le([void 0, void 0]),
              Le(() => [t.errorState, t.userAriaDescribedBy]),
              Ut(),
              $(([[r, d], [h, g]]) => r !== h || d !== g),
            )
            .subscribe(() => this._syncDescribedByIds())),
          this._valueChanges?.unsubscribe(),
          t.ngControl &&
            t.ngControl.valueChanges &&
            (this._valueChanges = t.ngControl.valueChanges
              .pipe(ee(this._destroyed))
              .subscribe(() => this._changeDetectorRef.markForCheck()));
      }
      _checkPrefixAndSuffixTypes() {
        (this._hasIconPrefix = !!this._prefixChildren.find((e) => !e._isText)),
          (this._hasTextPrefix = !!this._prefixChildren.find((e) => e._isText)),
          (this._hasIconSuffix = !!this._suffixChildren.find(
            (e) => !e._isText,
          )),
          (this._hasTextSuffix = !!this._suffixChildren.find((e) => e._isText));
      }
      _initializePrefixAndSuffix() {
        this._checkPrefixAndSuffixTypes(),
          Ne(
            this._prefixChildren.changes,
            this._suffixChildren.changes,
          ).subscribe(() => {
            this._checkPrefixAndSuffixTypes(),
              this._changeDetectorRef.markForCheck();
          });
      }
      _initializeSubscript() {
        this._hintChildren.changes.subscribe(() => {
          this._processHints(), this._changeDetectorRef.markForCheck();
        }),
          this._errorChildren.changes.subscribe(() => {
            this._syncDescribedByIds(), this._changeDetectorRef.markForCheck();
          }),
          this._validateHints(),
          this._syncDescribedByIds();
      }
      _assertFormFieldControl() {
        this._control;
      }
      _updateFocusState() {
        this._control.focused && !this._isFocused
          ? ((this._isFocused = !0), this._lineRipple?.activate())
          : !this._control.focused &&
            (this._isFocused || this._isFocused === null) &&
            ((this._isFocused = !1), this._lineRipple?.deactivate()),
          this._textField?.nativeElement.classList.toggle(
            "mdc-text-field--focused",
            this._control.focused,
          );
      }
      _initializeOutlineLabelOffsetSubscriptions() {
        this._prefixChildren.changes.subscribe(
          () => (this._needsOutlineLabelOffsetUpdate = !0),
        ),
          mt(
            () => {
              this._needsOutlineLabelOffsetUpdate &&
                ((this._needsOutlineLabelOffsetUpdate = !1),
                this._updateOutlineLabelOffset());
            },
            { injector: this._injector },
          ),
          this._dir.change
            .pipe(ee(this._destroyed))
            .subscribe(() => (this._needsOutlineLabelOffsetUpdate = !0));
      }
      _shouldAlwaysFloat() {
        return this.floatLabel === "always";
      }
      _hasOutline() {
        return this.appearance === "outline";
      }
      _forceDisplayInfixLabel() {
        return (
          !this._platform.isBrowser &&
          this._prefixChildren.length &&
          !this._shouldLabelFloat()
        );
      }
      _hasFloatingLabel = Kt(() => !!this._labelChild());
      _shouldLabelFloat() {
        return this._hasFloatingLabel()
          ? this._control.shouldLabelFloat || this._shouldAlwaysFloat()
          : !1;
      }
      _shouldForward(e) {
        let t = this._control ? this._control.ngControl : null;
        return t && t[e];
      }
      _getDisplayedMessages() {
        return this._errorChildren &&
          this._errorChildren.length > 0 &&
          this._control.errorState
          ? "error"
          : "hint";
      }
      _handleLabelResized() {
        this._refreshOutlineNotchWidth();
      }
      _refreshOutlineNotchWidth() {
        !this._hasOutline() || !this._floatingLabel || !this._shouldLabelFloat()
          ? this._notchedOutline?._setNotchWidth(0)
          : this._notchedOutline?._setNotchWidth(
              this._floatingLabel.getWidth(),
            );
      }
      _processHints() {
        this._validateHints(), this._syncDescribedByIds();
      }
      _validateHints() {
        this._hintChildren;
      }
      _syncDescribedByIds() {
        if (this._control) {
          let e = [];
          if (
            (this._control.userAriaDescribedBy &&
              typeof this._control.userAriaDescribedBy == "string" &&
              e.push(...this._control.userAriaDescribedBy.split(" ")),
            this._getDisplayedMessages() === "hint")
          ) {
            let t = this._hintChildren
                ? this._hintChildren.find((r) => r.align === "start")
                : null,
              o = this._hintChildren
                ? this._hintChildren.find((r) => r.align === "end")
                : null;
            t ? e.push(t.id) : this._hintLabel && e.push(this._hintLabelId),
              o && e.push(o.id);
          } else
            this._errorChildren &&
              e.push(...this._errorChildren.map((t) => t.id));
          this._control.setDescribedByIds(e);
        }
      }
      _updateOutlineLabelOffset() {
        if (!this._hasOutline() || !this._floatingLabel) return;
        let e = this._floatingLabel.element;
        if (!(this._iconPrefixContainer || this._textPrefixContainer)) {
          e.style.transform = "";
          return;
        }
        if (!this._isAttachedToDom()) {
          this._needsOutlineLabelOffsetUpdate = !0;
          return;
        }
        let t = this._iconPrefixContainer?.nativeElement,
          o = this._textPrefixContainer?.nativeElement,
          r = this._iconSuffixContainer?.nativeElement,
          d = this._textSuffixContainer?.nativeElement,
          h = t?.getBoundingClientRect().width ?? 0,
          g = o?.getBoundingClientRect().width ?? 0,
          C = r?.getBoundingClientRect().width ?? 0,
          y = d?.getBoundingClientRect().width ?? 0,
          P = this._dir.value === "rtl" ? "-1" : "1",
          ie = `${h + g}px`,
          G = `calc(${P} * (${ie} + var(--mat-mdc-form-field-label-offset-x, 0px)))`;
        e.style.transform = `var(
        --mat-mdc-form-field-label-transform,
        ${oa} translateX(${G})
    )`;
        let J = h + g + C + y;
        this._elementRef.nativeElement.style.setProperty(
          "--mat-form-field-notch-max-width",
          `calc(100% - ${J}px)`,
        );
      }
      _isAttachedToDom() {
        let e = this._elementRef.nativeElement;
        if (e.getRootNode) {
          let t = e.getRootNode();
          return t && t !== e;
        }
        return document.documentElement.contains(e);
      }
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵcmp = S({
        type: i,
        selectors: [["mat-form-field"]],
        contentQueries: function (t, o, r) {
          if (
            (t & 1 &&
              (Xi(r, o._labelChild, fo, 5),
              ze(r, Si, 5),
              ze(r, Jr, 5),
              ze(r, ea, 5),
              ze(r, Qr, 5),
              ze(r, po, 5)),
            t & 2)
          ) {
            Ki();
            let d;
            B((d = z())) && (o._formFieldControl = d.first),
              B((d = z())) && (o._prefixChildren = d),
              B((d = z())) && (o._suffixChildren = d),
              B((d = z())) && (o._errorChildren = d),
              B((d = z())) && (o._hintChildren = d);
          }
        },
        viewQuery: function (t, o) {
          if (
            (t & 1 &&
              (X(kr, 5),
              X(Sr, 5),
              X(Ir, 5),
              X(Pr, 5),
              X(Tr, 5),
              X(go, 5),
              X(bo, 5),
              X(vo, 5)),
            t & 2)
          ) {
            let r;
            B((r = z())) && (o._textField = r.first),
              B((r = z())) && (o._iconPrefixContainer = r.first),
              B((r = z())) && (o._textPrefixContainer = r.first),
              B((r = z())) && (o._iconSuffixContainer = r.first),
              B((r = z())) && (o._textSuffixContainer = r.first),
              B((r = z())) && (o._floatingLabel = r.first),
              B((r = z())) && (o._notchedOutline = r.first),
              B((r = z())) && (o._lineRipple = r.first);
          }
        },
        hostAttrs: [1, "mat-mdc-form-field"],
        hostVars: 40,
        hostBindings: function (t, o) {
          t & 2 &&
            A("mat-mdc-form-field-label-always-float", o._shouldAlwaysFloat())(
              "mat-mdc-form-field-has-icon-prefix",
              o._hasIconPrefix,
            )("mat-mdc-form-field-has-icon-suffix", o._hasIconSuffix)(
              "mat-form-field-invalid",
              o._control.errorState,
            )("mat-form-field-disabled", o._control.disabled)(
              "mat-form-field-autofilled",
              o._control.autofilled,
            )("mat-form-field-appearance-fill", o.appearance == "fill")(
              "mat-form-field-appearance-outline",
              o.appearance == "outline",
            )(
              "mat-form-field-hide-placeholder",
              o._hasFloatingLabel() && !o._shouldLabelFloat(),
            )("mat-focused", o._control.focused)(
              "mat-primary",
              o.color !== "accent" && o.color !== "warn",
            )("mat-accent", o.color === "accent")(
              "mat-warn",
              o.color === "warn",
            )("ng-untouched", o._shouldForward("untouched"))(
              "ng-touched",
              o._shouldForward("touched"),
            )("ng-pristine", o._shouldForward("pristine"))(
              "ng-dirty",
              o._shouldForward("dirty"),
            )("ng-valid", o._shouldForward("valid"))(
              "ng-invalid",
              o._shouldForward("invalid"),
            )("ng-pending", o._shouldForward("pending"));
        },
        inputs: {
          hideRequiredMarker: "hideRequiredMarker",
          color: "color",
          floatLabel: "floatLabel",
          appearance: "appearance",
          subscriptSizing: "subscriptSizing",
          hintLabel: "hintLabel",
        },
        exportAs: ["matFormField"],
        features: [
          be([
            { provide: Ii, useExisting: i },
            { provide: Co, useExisting: i },
          ]),
        ],
        ngContentSelectors: Rr,
        decls: 18,
        vars: 21,
        consts: [
          ["labelTemplate", ""],
          ["textField", ""],
          ["iconPrefixContainer", ""],
          ["textPrefixContainer", ""],
          ["textSuffixContainer", ""],
          ["iconSuffixContainer", ""],
          [1, "mat-mdc-text-field-wrapper", "mdc-text-field", 3, "click"],
          [1, "mat-mdc-form-field-focus-overlay"],
          [1, "mat-mdc-form-field-flex"],
          [
            "matFormFieldNotchedOutline",
            "",
            3,
            "matFormFieldNotchedOutlineOpen",
          ],
          [1, "mat-mdc-form-field-icon-prefix"],
          [1, "mat-mdc-form-field-text-prefix"],
          [1, "mat-mdc-form-field-infix"],
          [3, "ngTemplateOutlet"],
          [1, "mat-mdc-form-field-text-suffix"],
          [1, "mat-mdc-form-field-icon-suffix"],
          ["matFormFieldLineRipple", ""],
          [
            1,
            "mat-mdc-form-field-subscript-wrapper",
            "mat-mdc-form-field-bottom-align",
          ],
          [1, "mat-mdc-form-field-error-wrapper"],
          [1, "mat-mdc-form-field-hint-wrapper"],
          [
            "matFormFieldFloatingLabel",
            "",
            3,
            "floating",
            "monitorResize",
            "id",
          ],
          [
            "aria-hidden",
            "true",
            1,
            "mat-mdc-form-field-required-marker",
            "mdc-floating-label--required",
          ],
          [3, "id"],
          [1, "mat-mdc-form-field-hint-spacer"],
        ],
        template: function (t, o) {
          if (t & 1) {
            let r = Y();
            et(Ar),
              b(0, Nr, 1, 1, "ng-template", null, 0, nn),
              s(2, "div", 6, 1),
              _("click", function (h) {
                return M(r), E(o._control.onContainerClick(h));
              }),
              b(4, Br, 1, 0, "div", 7),
              s(5, "div", 8),
              b(6, jr, 2, 2, "div", 9)(7, Hr, 3, 0, "div", 10)(
                8,
                Wr,
                3,
                0,
                "div",
                11,
              ),
              s(9, "div", 12),
              b(10, Yr, 1, 1, null, 13),
              q(11),
              l(),
              b(12, Gr, 3, 0, "div", 14)(13, Zr, 3, 0, "div", 15),
              l(),
              b(14, $r, 1, 0, "div", 16),
              l(),
              s(15, "div", 17),
              b(16, Xr, 2, 0, "div", 18)(17, qr, 5, 1, "div", 19),
              l();
          }
          if (t & 2) {
            let r;
            c(2),
              A("mdc-text-field--filled", !o._hasOutline())(
                "mdc-text-field--outlined",
                o._hasOutline(),
              )("mdc-text-field--no-label", !o._hasFloatingLabel())(
                "mdc-text-field--disabled",
                o._control.disabled,
              )("mdc-text-field--invalid", o._control.errorState),
              c(2),
              Z(!o._hasOutline() && !o._control.disabled ? 4 : -1),
              c(2),
              Z(o._hasOutline() ? 6 : -1),
              c(),
              Z(o._hasIconPrefix ? 7 : -1),
              c(),
              Z(o._hasTextPrefix ? 8 : -1),
              c(2),
              Z(!o._hasOutline() || o._forceDisplayInfixLabel() ? 10 : -1),
              c(2),
              Z(o._hasTextSuffix ? 12 : -1),
              c(),
              Z(o._hasIconSuffix ? 13 : -1),
              c(),
              Z(o._hasOutline() ? -1 : 14),
              c(),
              A(
                "mat-mdc-form-field-subscript-dynamic-size",
                o.subscriptSizing === "dynamic",
              ),
              c(),
              Z(
                (r = o._getDisplayedMessages()) === "error"
                  ? 16
                  : r === "hint"
                    ? 17
                    : -1,
              );
          }
        },
        dependencies: [go, bo, an, vo, po],
        styles: [
          '.mdc-text-field{display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-text-field__input{width:100%;min-width:0;border:none;border-radius:0;background:none;padding:0;-moz-appearance:none;-webkit-appearance:none;height:28px}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}.mdc-text-field__input::placeholder{opacity:0}.mdc-text-field__input::-moz-placeholder{opacity:0}.mdc-text-field__input::-webkit-input-placeholder{opacity:0}.mdc-text-field__input:-ms-input-placeholder{opacity:0}.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{opacity:1}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder{opacity:0}.mdc-text-field--outlined .mdc-text-field__input,.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:rgba(0,0,0,0)}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mdc-filled-text-field-input-text-color, var(--mat-sys-on-surface));caret-color:var(--mdc-filled-text-field-caret-color, var(--mat-sys-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-filled-text-field-error-caret-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input{color:var(--mdc-filled-text-field-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mdc-outlined-text-field-input-text-color, var(--mat-sys-on-surface));caret-color:var(--mdc-outlined-text-field-caret-color, var(--mat-sys-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-outlined-text-field-error-caret-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{color:var(--mdc-outlined-text-field-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}}.mdc-text-field--filled{height:56px;border-bottom-right-radius:0;border-bottom-left-radius:0;border-top-left-radius:var(--mdc-filled-text-field-container-shape, var(--mat-sys-corner-extra-small));border-top-right-radius:var(--mdc-filled-text-field-container-shape, var(--mat-sys-corner-extra-small))}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--mdc-filled-text-field-container-color, var(--mat-sys-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled{background-color:var(--mdc-filled-text-field-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent))}.mdc-text-field--outlined{height:56px;overflow:visible;padding-right:max(16px,var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small)));padding-left:max(16px,var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small)) + 4px)}[dir=rtl] .mdc-text-field--outlined{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small)) + 4px);padding-left:max(16px,var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small)))}.mdc-floating-label{position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:auto}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label{left:auto;right:4px}.mdc-text-field--filled .mdc-floating-label{left:16px;right:auto}[dir=rtl] .mdc-text-field--filled .mdc-floating-label{left:auto;right:16px}.mdc-text-field--disabled .mdc-floating-label{cursor:default}@media(forced-colors: active){.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mdc-filled-text-field-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mdc-filled-text-field-focus-label-text-color, var(--mat-sys-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mdc-filled-text-field-hover-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label{color:var(--mdc-filled-text-field-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mdc-filled-text-field-error-label-text-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mdc-filled-text-field-error-focus-label-text-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mdc-filled-text-field-error-hover-label-text-color, var(--mat-sys-on-error-container))}.mdc-text-field--filled .mdc-floating-label{font-family:var(--mdc-filled-text-field-label-text-font, var(--mat-sys-body-large-font));font-size:var(--mdc-filled-text-field-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mdc-filled-text-field-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mdc-filled-text-field-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mdc-outlined-text-field-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mdc-outlined-text-field-focus-label-text-color, var(--mat-sys-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mdc-outlined-text-field-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label{color:var(--mdc-outlined-text-field-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mdc-outlined-text-field-error-label-text-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mdc-outlined-text-field-error-focus-label-text-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mdc-outlined-text-field-error-hover-label-text-color, var(--mat-sys-on-error-container))}.mdc-text-field--outlined .mdc-floating-label{font-family:var(--mdc-outlined-text-field-label-text-font, var(--mat-sys-body-large-font));font-size:var(--mdc-outlined-text-field-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mdc-outlined-text-field-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mdc-outlined-text-field-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-floating-label--float-above{cursor:auto;transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1);font-size:.75rem}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:1px;margin-right:0;content:"*"}[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:0;margin-right:1px}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline{text-align:right}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mat-mdc-notch-piece{box-sizing:border-box;height:100%;pointer-events:none;border-top:1px solid;border-bottom:1px solid}.mdc-text-field--focused .mat-mdc-notch-piece{border-width:2px}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-outline-color, var(--mat-sys-outline));border-width:var(--mdc-outlined-text-field-outline-width, 1px)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-hover-outline-color, var(--mat-sys-on-surface))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-focus-outline-color, var(--mat-sys-primary))}.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-error-outline-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-error-hover-outline-color, var(--mat-sys-on-error-container))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-error-focus-outline-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece{border-width:var(--mdc-outlined-text-field-focus-outline-width, 2px)}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small));border-bottom-left-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small))}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small)))}[dir=rtl] .mdc-notched-outline__leading{border-left:none;border-right:1px solid;border-bottom-left-radius:0;border-top-left-radius:0;border-top-right-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small))}.mdc-notched-outline__trailing{flex-grow:1;border-left:none;border-right:1px solid;border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small))}[dir=rtl] .mdc-notched-outline__trailing{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small));border-bottom-left-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small))}.mdc-notched-outline__notch{flex:0 0 auto;width:auto}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:min(var(--mat-form-field-notch-max-width, 100%),100% - max(12px,var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small)))*2)}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none;--mat-form-field-notch-max-width: 100%}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{z-index:1;border-bottom-width:var(--mdc-filled-text-field-active-indicator-height, 1px)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-active-indicator-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-hover-active-indicator-color, var(--mat-sys-on-surface))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-error-active-indicator-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-error-hover-active-indicator-color, var(--mat-sys-on-error-container))}.mdc-line-ripple::after{transform:scaleX(0);opacity:0;z-index:2}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-width:var(--mdc-filled-text-field-focus-active-indicator-height, 2px)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mdc-filled-text-field-focus-active-indicator-color, var(--mat-sys-primary))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mdc-filled-text-field-error-focus-active-indicator-color, var(--mat-sys-error))}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-text-field--disabled{pointer-events:none}.mat-mdc-form-field-textarea-control{vertical-align:middle;resize:vertical;box-sizing:border-box;height:auto;margin:0;padding:0;border:none;overflow:auto}.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font:inherit;letter-spacing:inherit;text-decoration:inherit;text-transform:inherit;border:none}.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:normal;pointer-events:all;will-change:auto}.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label{cursor:inherit}.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:auto}.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color]{height:23px}.mat-mdc-text-field-wrapper{height:auto;flex:auto;will-change:auto}.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-left:0;--mat-mdc-form-field-label-offset-x: -16px}.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-right:0}[dir=rtl] .mat-mdc-text-field-wrapper{padding-left:16px;padding-right:16px}[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-left:0}[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-right:0}.mat-form-field-disabled .mdc-text-field__input::placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label{left:auto;right:auto}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input{display:inline-block}.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch{padding-top:0}.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:1px solid rgba(0,0,0,0)}[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:none;border-right:1px solid rgba(0,0,0,0)}.mat-mdc-form-field-infix{min-height:var(--mat-form-field-container-height, 56px);padding-top:var(--mat-form-field-filled-with-label-container-padding-top, 24px);padding-bottom:var(--mat-form-field-filled-with-label-container-padding-bottom, 8px)}.mdc-text-field--outlined .mat-mdc-form-field-infix,.mdc-text-field--no-label .mat-mdc-form-field-infix{padding-top:var(--mat-form-field-container-vertical-padding, 16px);padding-bottom:var(--mat-form-field-container-vertical-padding, 16px)}.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:calc(var(--mat-form-field-container-height, 56px)/2)}.mdc-text-field--filled .mat-mdc-floating-label{display:var(--mat-form-field-filled-label-display, block)}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1)) scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));transform:var(--mat-mdc-form-field-label-transform)}@keyframes _mat-form-field-subscript-animation{from{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}.mat-mdc-form-field-subscript-wrapper{box-sizing:border-box;width:100%;position:relative}.mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-error-wrapper{position:absolute;top:0;left:0;right:0;padding:0 16px;opacity:1;transform:translateY(0);animation:_mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper{position:static}.mat-mdc-form-field-bottom-align::before{content:"";display:inline-block;height:16px}.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before{content:unset}.mat-mdc-form-field-hint-end{order:1}.mat-mdc-form-field-hint-wrapper{display:flex}.mat-mdc-form-field-hint-spacer{flex:1 0 1em}.mat-mdc-form-field-error{display:block;color:var(--mat-form-field-error-text-color, var(--mat-sys-error))}.mat-mdc-form-field-subscript-wrapper,.mat-mdc-form-field-bottom-align::before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));letter-spacing:var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));font-weight:var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight))}.mat-mdc-form-field-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;opacity:0;pointer-events:none;background-color:var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface))}.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-focus-state-layer-opacity, 0)}select.mat-mdc-form-field-input-control{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box}select.mat-mdc-form-field-input-control:not(:disabled){cursor:pointer}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option{color:var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10))}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled{color:var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent))}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;right:0;top:50%;margin-top:-2.5px;pointer-events:none;color:var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant))}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{right:auto;left:0}.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after{color:var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary))}.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after{color:var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:15px}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:0;padding-left:15px}@media(forced-colors: active){.mat-form-field-appearance-fill .mat-mdc-text-field-wrapper{outline:solid 1px}}@media(forced-colors: active){.mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper{outline-color:GrayText}}@media(forced-colors: active){.mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper{outline:dashed 3px}}@media(forced-colors: active){.mat-mdc-form-field.mat-focused .mdc-notched-outline{border:dashed 3px}}.mat-mdc-form-field-input-control[type=date],.mat-mdc-form-field-input-control[type=datetime],.mat-mdc-form-field-input-control[type=datetime-local],.mat-mdc-form-field-input-control[type=month],.mat-mdc-form-field-input-control[type=week],.mat-mdc-form-field-input-control[type=time]{line-height:1}.mat-mdc-form-field-input-control::-webkit-datetime-edit{line-height:1;padding:0;margin-bottom:-2px}.mat-mdc-form-field{--mat-mdc-form-field-floating-label-scale: 0.75;display:inline-flex;flex-direction:column;min-width:0;text-align:left;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));font-weight:var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(var(--mat-form-field-outlined-label-text-populated-size)*var(--mat-mdc-form-field-floating-label-scale))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mat-form-field-outlined-label-text-populated-size)}[dir=rtl] .mat-mdc-form-field{text-align:right}.mat-mdc-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-mdc-text-field-wrapper{width:100%;z-index:0}.mat-mdc-form-field-icon-prefix,.mat-mdc-form-field-icon-suffix{align-self:center;line-height:0;pointer-events:auto;position:relative;z-index:1}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{padding:0 12px;box-sizing:content-box}.mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-invalid .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error))}.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container))}.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error))}.mat-mdc-form-field-icon-prefix,[dir=rtl] .mat-mdc-form-field-icon-suffix{padding:0 4px 0 0}.mat-mdc-form-field-icon-suffix,[dir=rtl] .mat-mdc-form-field-icon-prefix{padding:0 0 0 4px}.mat-mdc-form-field-subscript-wrapper .mat-icon,.mat-mdc-form-field label .mat-icon{width:1em;height:1em;font-size:inherit}.mat-mdc-form-field-infix{flex:auto;min-width:0;width:180px;position:relative;box-sizing:border-box}.mat-mdc-form-field-infix:has(textarea[cols]){width:auto}.mat-mdc-form-field .mdc-notched-outline__notch{margin-left:-1px;-webkit-clip-path:inset(-9em -999em -9em 1px);clip-path:inset(-9em -999em -9em 1px)}[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch{margin-left:0;margin-right:-1px;-webkit-clip-path:inset(-9em 1px -9em -999em);clip-path:inset(-9em 1px -9em -999em)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label{transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input{transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper{animation-duration:300ms}.mdc-notched-outline .mdc-floating-label{max-width:calc(100% + 1px)}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(133.3333333333% + 1px)}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      });
    }
    return i;
  })(),
  Pi = (() => {
    class i {
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵmod = k({ type: i });
      static ɵinj = D({ imports: [pe, Et, pe] });
    }
    return i;
  })();
var aa = new O("MAT_INPUT_VALUE_ACCESSOR"),
  sa = [
    "button",
    "checkbox",
    "file",
    "hidden",
    "image",
    "radio",
    "range",
    "reset",
    "submit",
  ],
  la = new O("MAT_INPUT_CONFIG"),
  Mo = (() => {
    class i {
      _elementRef = a(T);
      _platform = a(R);
      ngControl = a(_n, { optional: !0, self: !0 });
      _autofillMonitor = a(ho);
      _ngZone = a(w);
      _formField = a(Ii, { optional: !0 });
      _renderer = a(de);
      _uid = a(Q).getId("mat-input-");
      _previousNativeValue;
      _inputValueAccessor;
      _signalBasedValueAccessor;
      _previousPlaceholder;
      _errorStateTracker;
      _config = a(la, { optional: !0 });
      _cleanupIosKeyup;
      _cleanupWebkitWheel;
      _formFieldDescribedBy;
      _isServer;
      _isNativeSelect;
      _isTextarea;
      _isInFormField;
      focused = !1;
      stateChanges = new x();
      controlType = "mat-input";
      autofilled = !1;
      get disabled() {
        return this._disabled;
      }
      set disabled(e) {
        (this._disabled = He(e)),
          this.focused && ((this.focused = !1), this.stateChanges.next());
      }
      _disabled = !1;
      get id() {
        return this._id;
      }
      set id(e) {
        this._id = e || this._uid;
      }
      _id;
      placeholder;
      name;
      get required() {
        return (
          this._required ??
          this.ngControl?.control?.hasValidator(gn.required) ??
          !1
        );
      }
      set required(e) {
        this._required = He(e);
      }
      _required;
      get type() {
        return this._type;
      }
      set type(e) {
        let t = this._type;
        (this._type = e || "text"),
          this._validateType(),
          !this._isTextarea &&
            ti().has(this._type) &&
            (this._elementRef.nativeElement.type = this._type),
          this._type !== t && this._ensureWheelDefaultBehavior();
      }
      _type = "text";
      get errorStateMatcher() {
        return this._errorStateTracker.matcher;
      }
      set errorStateMatcher(e) {
        this._errorStateTracker.matcher = e;
      }
      userAriaDescribedBy;
      get value() {
        return this._signalBasedValueAccessor
          ? this._signalBasedValueAccessor.value()
          : this._inputValueAccessor.value;
      }
      set value(e) {
        e !== this.value &&
          (this._signalBasedValueAccessor
            ? this._signalBasedValueAccessor.value.set(e)
            : (this._inputValueAccessor.value = e),
          this.stateChanges.next());
      }
      get readonly() {
        return this._readonly;
      }
      set readonly(e) {
        this._readonly = He(e);
      }
      _readonly = !1;
      disabledInteractive;
      get errorState() {
        return this._errorStateTracker.errorState;
      }
      set errorState(e) {
        this._errorStateTracker.errorState = e;
      }
      _neverEmptyInputTypes = [
        "date",
        "datetime",
        "datetime-local",
        "month",
        "time",
        "week",
      ].filter((e) => ti().has(e));
      constructor() {
        let e = a(bn, { optional: !0 }),
          t = a(xn, { optional: !0 }),
          o = a(eo),
          r = a(aa, { optional: !0, self: !0 }),
          d = this._elementRef.nativeElement,
          h = d.nodeName.toLowerCase();
        r
          ? ht(r.value)
            ? (this._signalBasedValueAccessor = r)
            : (this._inputValueAccessor = r)
          : (this._inputValueAccessor = d),
          (this._previousNativeValue = this.value),
          (this.id = this.id),
          this._platform.IOS &&
            this._ngZone.runOutsideAngular(() => {
              this._cleanupIosKeyup = this._renderer.listen(
                d,
                "keyup",
                this._iOSKeyupListener,
              );
            }),
          (this._errorStateTracker = new Pt(
            o,
            this.ngControl,
            t,
            e,
            this.stateChanges,
          )),
          (this._isServer = !this._platform.isBrowser),
          (this._isNativeSelect = h === "select"),
          (this._isTextarea = h === "textarea"),
          (this._isInFormField = !!this._formField),
          (this.disabledInteractive = this._config?.disabledInteractive || !1),
          this._isNativeSelect &&
            (this.controlType = d.multiple
              ? "mat-native-select-multiple"
              : "mat-native-select"),
          this._signalBasedValueAccessor &&
            qt(() => {
              this._signalBasedValueAccessor.value(), this.stateChanges.next();
            });
      }
      ngAfterViewInit() {
        this._platform.isBrowser &&
          this._autofillMonitor
            .monitor(this._elementRef.nativeElement)
            .subscribe((e) => {
              (this.autofilled = e.isAutofilled), this.stateChanges.next();
            });
      }
      ngOnChanges() {
        this.stateChanges.next();
      }
      ngOnDestroy() {
        this.stateChanges.complete(),
          this._platform.isBrowser &&
            this._autofillMonitor.stopMonitoring(
              this._elementRef.nativeElement,
            ),
          this._cleanupIosKeyup?.(),
          this._cleanupWebkitWheel?.();
      }
      ngDoCheck() {
        this.ngControl &&
          (this.updateErrorState(),
          this.ngControl.disabled !== null &&
            this.ngControl.disabled !== this.disabled &&
            ((this.disabled = this.ngControl.disabled),
            this.stateChanges.next())),
          this._dirtyCheckNativeValue(),
          this._dirtyCheckPlaceholder();
      }
      focus(e) {
        this._elementRef.nativeElement.focus(e);
      }
      updateErrorState() {
        this._errorStateTracker.updateErrorState();
      }
      _focusChanged(e) {
        if (e !== this.focused) {
          if (
            !this._isNativeSelect &&
            e &&
            this.disabled &&
            this.disabledInteractive
          ) {
            let t = this._elementRef.nativeElement;
            t.type === "number"
              ? ((t.type = "text"),
                t.setSelectionRange(0, 0),
                (t.type = "number"))
              : t.setSelectionRange(0, 0);
          }
          (this.focused = e), this.stateChanges.next();
        }
      }
      _onInput() {}
      _dirtyCheckNativeValue() {
        let e = this._elementRef.nativeElement.value;
        this._previousNativeValue !== e &&
          ((this._previousNativeValue = e), this.stateChanges.next());
      }
      _dirtyCheckPlaceholder() {
        let e = this._getPlaceholder();
        if (e !== this._previousPlaceholder) {
          let t = this._elementRef.nativeElement;
          (this._previousPlaceholder = e),
            e
              ? t.setAttribute("placeholder", e)
              : t.removeAttribute("placeholder");
        }
      }
      _getPlaceholder() {
        return this.placeholder || null;
      }
      _validateType() {
        sa.indexOf(this._type) > -1;
      }
      _isNeverEmpty() {
        return this._neverEmptyInputTypes.indexOf(this._type) > -1;
      }
      _isBadInput() {
        let e = this._elementRef.nativeElement.validity;
        return e && e.badInput;
      }
      get empty() {
        return (
          !this._isNeverEmpty() &&
          !this._elementRef.nativeElement.value &&
          !this._isBadInput() &&
          !this.autofilled
        );
      }
      get shouldLabelFloat() {
        if (this._isNativeSelect) {
          let e = this._elementRef.nativeElement,
            t = e.options[0];
          return (
            this.focused ||
            e.multiple ||
            !this.empty ||
            !!(e.selectedIndex > -1 && t && t.label)
          );
        } else return (this.focused && !this.disabled) || !this.empty;
      }
      setDescribedByIds(e) {
        let t = this._elementRef.nativeElement,
          o = t.getAttribute("aria-describedby"),
          r;
        if (o) {
          let d = this._formFieldDescribedBy || e;
          r = e.concat(o.split(" ").filter((h) => h && !d.includes(h)));
        } else r = e;
        (this._formFieldDescribedBy = e),
          r.length
            ? t.setAttribute("aria-describedby", r.join(" "))
            : t.removeAttribute("aria-describedby");
      }
      onContainerClick() {
        this.focused || this.focus();
      }
      _isInlineSelect() {
        let e = this._elementRef.nativeElement;
        return this._isNativeSelect && (e.multiple || e.size > 1);
      }
      _iOSKeyupListener = (e) => {
        let t = e.target;
        !t.value &&
          t.selectionStart === 0 &&
          t.selectionEnd === 0 &&
          (t.setSelectionRange(1, 1), t.setSelectionRange(0, 0));
      };
      _webkitBlinkWheelListener = () => {};
      _ensureWheelDefaultBehavior() {
        this._cleanupWebkitWheel?.(),
          this._type === "number" &&
            (this._platform.BLINK || this._platform.WEBKIT) &&
            (this._cleanupWebkitWheel = this._renderer.listen(
              this._elementRef.nativeElement,
              "wheel",
              this._webkitBlinkWheelListener,
            ));
      }
      _getReadonlyAttribute() {
        return this._isNativeSelect
          ? null
          : this.readonly || (this.disabled && this.disabledInteractive)
            ? "true"
            : null;
      }
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵdir = I({
        type: i,
        selectors: [
          ["input", "matInput", ""],
          ["textarea", "matInput", ""],
          ["select", "matNativeControl", ""],
          ["input", "matNativeControl", ""],
          ["textarea", "matNativeControl", ""],
        ],
        hostAttrs: [1, "mat-mdc-input-element"],
        hostVars: 21,
        hostBindings: function (t, o) {
          t & 1 &&
            _("focus", function () {
              return o._focusChanged(!0);
            })("blur", function () {
              return o._focusChanged(!1);
            })("input", function () {
              return o._onInput();
            }),
            t & 2 &&
              (ve("id", o.id)("disabled", o.disabled && !o.disabledInteractive)(
                "required",
                o.required,
              ),
              ne("name", o.name || null)("readonly", o._getReadonlyAttribute())(
                "aria-disabled",
                o.disabled && o.disabledInteractive ? "true" : null,
              )("aria-invalid", o.empty && o.required ? null : o.errorState)(
                "aria-required",
                o.required,
              )("id", o.id),
              A("mat-input-server", o._isServer)(
                "mat-mdc-form-field-textarea-control",
                o._isInFormField && o._isTextarea,
              )("mat-mdc-form-field-input-control", o._isInFormField)(
                "mat-mdc-input-disabled-interactive",
                o.disabledInteractive,
              )("mdc-text-field__input", o._isInFormField)(
                "mat-mdc-native-select-inline",
                o._isInlineSelect(),
              ));
        },
        inputs: {
          disabled: "disabled",
          id: "id",
          placeholder: "placeholder",
          name: "name",
          required: "required",
          type: "type",
          errorStateMatcher: "errorStateMatcher",
          userAriaDescribedBy: [0, "aria-describedby", "userAriaDescribedBy"],
          value: "value",
          readonly: "readonly",
          disabledInteractive: [
            2,
            "disabledInteractive",
            "disabledInteractive",
            Oe,
          ],
        },
        exportAs: ["matInput"],
        features: [be([{ provide: Si, useExisting: i }]), Be],
      });
    }
    return i;
  })(),
  Eo = (() => {
    class i {
      static ɵfac = function (t) {
        return new (t || i)();
      };
      static ɵmod = k({ type: i });
      static ɵinj = D({ imports: [pe, Pi, Pi, mo, pe] });
    }
    return i;
  })();
var Ft = class i {
  constructor(n, e) {
    this.dialogRef = n;
    this.data = e;
  }
  userInput = "";
  isValidInput = !1;
  checkInput() {
    this.isValidInput = this.userInput.trim().toUpperCase() === "DELETE";
  }
  confirmDelete() {
    this.isValidInput && this.dialogRef.close(!0);
  }
  closeDialog() {
    this.dialogRef.close(!1);
  }
  static ɵfac = function (e) {
    return new (e || i)(j(Ke), j(Di));
  };
  static ɵcmp = S({
    type: i,
    selectors: [["app-confirm-delete"]],
    decls: 18,
    vars: 3,
    consts: [
      ["mat-dialog-title", ""],
      ["appearance", "outline"],
      [
        "matInput",
        "",
        "placeholder",
        "Type DELETE to confirm",
        3,
        "ngModelChange",
        "ngModel",
      ],
      ["align", "end"],
      [1, "cancel-button", 3, "click"],
      [1, "delete-button", 3, "click", "disabled"],
    ],
    template: function (e, t) {
      e & 1 &&
        (s(0, "h2", 0),
        m(1, "Confirm Deletion"),
        l(),
        s(2, "mat-dialog-content")(3, "p"),
        m(4, " To delete "),
        s(5, "strong"),
        m(6),
        l(),
        m(7, ", please type "),
        s(8, "strong"),
        m(9, '"DELETE"'),
        l(),
        m(10, " below: "),
        l(),
        s(11, "mat-form-field", 1)(12, "input", 2),
        Ji("ngModelChange", function (r) {
          return Qi(t.userInput, r) || (t.userInput = r), r;
        }),
        _("ngModelChange", function () {
          return t.checkInput();
        }),
        l()()(),
        s(13, "mat-dialog-actions", 3)(14, "button", 4),
        _("click", function () {
          return t.closeDialog();
        }),
        m(15, "Cancel"),
        l(),
        s(16, "button", 5),
        _("click", function () {
          return t.confirmDelete();
        }),
        m(17, " Delete "),
        l()()),
        e & 2 &&
          (c(6),
          F(t.data.fileName),
          c(6),
          qi("ngModel", t.userInput),
          c(4),
          p("disabled", !t.isValidInput));
    },
    dependencies: [Cn, pn, vn, yn, co, ao, lo, so, Eo, Mo, wo, se],
    styles: [
      ".mat-dialog-container[_ngcontent-%COMP%]{padding:20px;border-radius:8px}h2.mat-dialog-title[_ngcontent-%COMP%]{margin:0 0 16px;font-size:18px;font-weight:500;color:#333}.mat-dialog-content[_ngcontent-%COMP%]{margin-bottom:20px}.mat-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:12px;line-height:1.5}.mat-dialog-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:500}.mat-form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:8px}.mat-input-element[_ngcontent-%COMP%]{padding:8px;border:1px solid #ddd;border-radius:4px}.mat-dialog-actions[_ngcontent-%COMP%]{justify-content:flex-end;padding:0;margin:0;gap:8px}button[_ngcontent-%COMP%]{padding:8px 16px;border-radius:4px;font-weight:400;cursor:pointer}.cancel-button[_ngcontent-%COMP%]{background:#f5f5f5;border:1px solid #ddd;color:#333}.delete-button[_ngcontent-%COMP%]{background:#d32f2f;border:1px solid #d32f2f;color:#fff}.delete-button[_ngcontent-%COMP%]:disabled{background:#8a3535;border:1px solid #ddd;color:#999;cursor:not-allowed}",
    ],
  });
};
function ma(i, n) {
  if (
    (i & 1 &&
      (s(0, "div", 10)(1, "div", 11),
      u(2, "div", 12),
      s(3, "h3"),
      m(4, "Loading ..."),
      l(),
      s(5, "p"),
      m(6),
      l()()()),
    i & 2)
  ) {
    let e = f();
    c(6), F(e.loadingMessage);
  }
}
function ua(i, n) {
  i & 1 &&
    (s(0, "div", 13)(1, "div", 14),
    u(2, "i", 15),
    l(),
    s(3, "h3"),
    m(4, "No documents yet"),
    l(),
    s(5, "p"),
    m(
      6,
      " Upload your first document to get started with secure document management. ",
    ),
    l(),
    s(7, "button", 16),
    u(8, "i", 5),
    m(9, " Upload Now "),
    l()());
}
function fa(i, n) {
  if (i & 1) {
    let e = Y();
    s(0, "div", 47)(1, "button", 48),
      _("click", function () {
        M(e);
        let o = f().$implicit,
          r = f(2);
        return E(r.openPreviewDialog(o.maskedFileName));
      }),
      u(2, "i", 44),
      m(3, " Preview "),
      l(),
      s(4, "button", 49),
      _("click", function () {
        M(e);
        let o = f().$implicit,
          r = f(2);
        return E(r.downloadFile(o.maskedFileName));
      }),
      u(5, "i", 46),
      m(6, " Download "),
      l(),
      s(7, "button", 50),
      _("click", function () {
        M(e);
        let o = f().$implicit,
          r = f(2);
        return E(r.deleteFile(o.maskedFileName));
      }),
      u(8, "i", 51),
      m(9, " Delete "),
      l()();
  }
}
function pa(i, n) {
  if (i & 1) {
    let e = Y();
    s(0, "div", 28)(1, "div", 29)(2, "div", 30),
      m(3),
      l(),
      s(4, "div", 31)(5, "button", 32),
      _("click", function () {
        let o = M(e).$implicit,
          r = f(2);
        return E(r.showDocumentActions(o));
      }),
      u(6, "i", 33),
      l(),
      b(7, fa, 10, 0, "div", 34),
      l()(),
      s(8, "div", 35),
      _("click", function () {
        let o = M(e).$implicit,
          r = f(2);
        return E(r.openPreviewDialog(o.maskedFileName));
      }),
      s(9, "div", 36),
      u(10, "i", 37),
      l(),
      s(11, "div", 38)(12, "h3", 39),
      m(13),
      l(),
      s(14, "p", 40),
      u(15, "i", 41),
      m(16),
      en(17, "date"),
      l()()(),
      s(18, "div", 42)(19, "button", 43),
      _("click", function () {
        let o = M(e).$implicit,
          r = f(2);
        return E(r.openPreviewDialog(o.maskedFileName));
      }),
      u(20, "i", 44),
      m(21, " View "),
      l(),
      s(22, "button", 45),
      _("click", function () {
        let o = M(e).$implicit,
          r = f(2);
        return E(r.downloadFile(o.maskedFileName));
      }),
      u(23, "i", 46),
      m(24, " Download "),
      l()()();
  }
  if (i & 2) {
    let e = n.$implicit;
    c(2),
      $i(e.documentType),
      c(),
      H(" ", e.documentType, " "),
      c(4),
      p("ngIf", e.showActions),
      c(6),
      F(e.originalName),
      c(3),
      H(" ", tn(17, 6, e.uploadedAt, "medium"), " ");
  }
}
function ga(i, n) {
  if (i & 1) {
    let e = Y();
    s(0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "span"),
      m(4),
      l()(),
      s(5, "div", 20)(6, "button", 21),
      _("click", function () {
        M(e);
        let o = f();
        return E(o.prevPage());
      }),
      u(7, "i", 22),
      l(),
      s(8, "span", 23),
      m(9),
      l(),
      s(10, "button", 24),
      _("click", function () {
        M(e);
        let o = f();
        return E(o.nextPage());
      }),
      u(11, "i", 25),
      l()()(),
      s(12, "div", 26),
      b(13, pa, 25, 9, "div", 27),
      l()();
  }
  if (i & 2) {
    let e = f();
    c(4),
      Ve(
        "",
        e.documents.length,
        " ",
        e.documents.length === 1 ? "document" : "documents",
        "",
      ),
      c(2),
      p("disabled", e.currentPage === 1),
      c(3),
      Ve("Page ", e.currentPage, " of ", e.totalPages, ""),
      c(),
      p("disabled", e.currentPage === e.totalPages),
      c(3),
      p("ngForOf", e.paginatedDocuments);
  }
}
function _a(i, n) {
  if ((i & 1 && (s(0, "div", 63), u(1, "img", 64), l()), i & 2)) {
    let e = f(2);
    c(), p("src", e.filePreviewURL, Yi);
  }
}
function va(i, n) {
  i & 1 &&
    (s(0, "div", 65),
    u(1, "div", 12),
    s(2, "p"),
    m(3, "Loading preview..."),
    l()());
}
function ba(i, n) {
  if (i & 1) {
    let e = Y();
    s(0, "button", 66),
      _("click", function () {
        M(e);
        let o = f(2);
        return E(o.downloadFile(o.selectedFile));
      }),
      u(1, "i", 46),
      m(2, " Download "),
      l();
  }
}
function ya(i, n) {
  if (i & 1) {
    let e = Y();
    s(0, "div", 52),
      _("click", function (o) {
        M(e);
        let r = f();
        return E(r.closePreviewDialog(o));
      }),
      s(1, "div", 53),
      _("click", function (o) {
        return M(e), E(o.stopPropagation());
      }),
      s(2, "div", 54)(3, "h3"),
      m(4),
      l(),
      s(5, "button", 55),
      _("click", function (o) {
        M(e);
        let r = f();
        return E(r.closePreviewDialog(o));
      }),
      u(6, "i", 56),
      l()(),
      s(7, "div", 57),
      b(8, _a, 2, 1, "div", 58)(9, va, 4, 0, "div", 59),
      l(),
      s(10, "div", 60),
      b(11, ba, 3, 0, "button", 61),
      s(12, "button", 62),
      _("click", function (o) {
        M(e);
        let r = f();
        return E(r.closePreviewDialog(o));
      }),
      u(13, "i", 56),
      m(14, " Close "),
      l()()()();
  }
  if (i & 2) {
    let e = f();
    c(4),
      F(e.previewTitle),
      c(4),
      p("ngIf", e.filePreviewURL),
      c(),
      p("ngIf", !e.filePreviewURL),
      c(2),
      p("ngIf", e.selectedFile);
  }
}
var Nt = class i {
  constructor(n, e, t) {
    this.documentService = n;
    this.toastrService = e;
    this.dialog = t;
  }
  documents = [];
  showPreview = !1;
  filePreviewURL = null;
  selectedFile = null;
  isLoading = !1;
  loadingMessage = "";
  previewTitle = "Document Preview";
  currentPage = 1;
  itemsPerPage = 9;
  loadingMessages = [
    "Retrieving your document...",
    "Preparing for viewing...",
    "Almost there...",
    "Getting everything ready...",
    "Optimizing display...",
  ];
  loadingInterval;
  ngOnInit() {
    return Re(this, null, function* () {
      yield this.getFiles();
    });
  }
  getFiles() {
    return Re(this, null, function* () {
      try {
        let n = yield this.documentService.getUserDocuments();
        this.documents = n.documents ? n.documents.reverse() : [];
      } catch (n) {
        console.error("Error fetching documents:", n),
          this.toastrService.error("Failed to fetch documents");
      }
    });
  }
  get paginatedDocuments() {
    let n = (this.currentPage - 1) * this.itemsPerPage;
    return this.documents.slice(n, n + this.itemsPerPage);
  }
  get totalPages() {
    return Math.ceil(this.documents.length / this.itemsPerPage);
  }
  nextPage() {
    this.currentPage < this.totalPages && this.currentPage++;
  }
  prevPage() {
    this.currentPage > 1 && this.currentPage--;
  }
  downloadFile(n) {
    return Re(this, null, function* () {
      if (n)
        try {
          this.setLoading(!0, "Preparing download...");
          let e = yield this.documentService.downloadDocument(n),
            t = window.URL.createObjectURL(e),
            o = document.createElement("a");
          (o.href = t),
            (o.download = n),
            document.body.appendChild(o),
            o.click(),
            document.body.removeChild(o),
            window.URL.revokeObjectURL(t);
        } catch (e) {
          console.error("Error downloading file:", e),
            this.toastrService.error("Failed to download file");
        } finally {
          this.setLoading(!1);
        }
    });
  }
  deleteFile(n) {
    return Re(this, null, function* () {
      try {
        let e = this.dialog.open(Ft, { width: "800px", data: { fileName: n } });
        if (!(yield Li(e.afterClosed()))) return;
        this.setLoading(!0, "Deleting document..."),
          yield this.documentService.deleteDocument(n),
          this.toastrService.success("Deleted Successfully!", "", {
            positionClass: "toast-top-left",
            timeOut: 2e3,
          }),
          yield this.getFiles();
      } catch (e) {
        console.error("Error deleting file:", e),
          this.toastrService.error("Failed to delete file");
      } finally {
        this.setLoading(!1);
      }
    });
  }
  openPreviewDialog(n) {
    return Re(this, null, function* () {
      try {
        (this.selectedFile = n),
          this.setLoading(!0),
          this.startLoadingAnimation();
        let e = this.documents.find((r) => r.maskedFileName === n);
        (this.previewTitle = e?.originalName || "Document Preview"),
          yield new Promise((r) => setTimeout(r, 1500));
        let t = yield this.documentService.downloadDocument(n),
          o = window.URL.createObjectURL(t);
        (this.filePreviewURL = o), this.setLoading(!1), (this.showPreview = !0);
      } catch (e) {
        console.error("Error opening preview:", e),
          this.toastrService.error("Failed to preview file"),
          this.setLoading(!1);
      }
    });
  }
  closePreviewDialog(n) {
    (this.showPreview = !1),
      this.filePreviewURL &&
        (window.URL.revokeObjectURL(this.filePreviewURL),
        (this.filePreviewURL = null)),
      (this.selectedFile = null);
  }
  setLoading(n, e) {
    (this.isLoading = n),
      !n && this.loadingInterval
        ? (clearInterval(this.loadingInterval), (this.loadingInterval = null))
        : e && (this.loadingMessage = e);
  }
  startLoadingAnimation() {
    let n = 0;
    (this.loadingMessage = this.loadingMessages[n]),
      (this.loadingInterval = setInterval(() => {
        (n = (n + 1) % this.loadingMessages.length),
          (this.loadingMessage = this.loadingMessages[n]);
      }, 1500));
  }
  ngOnDestroy() {
    this.loadingInterval && clearInterval(this.loadingInterval),
      this.filePreviewURL && window.URL.revokeObjectURL(this.filePreviewURL);
  }
  showDocumentActions(n) {
    n.showActions = !n.showActions;
  }
  static ɵfac = function (e) {
    return new (e || i)(j(wn), j(vt), j(qe));
  };
  static ɵcmp = S({
    type: i,
    selectors: [["app-documents"]],
    decls: 13,
    vars: 4,
    consts: [
      [1, "documents-container"],
      [1, "section-header"],
      [1, "section-title"],
      [1, "fas", "fa-file-alt"],
      ["routerLink", "/upload", 1, "btn", "btn-primary", "upload-btn"],
      [1, "fas", "fa-upload"],
      ["class", "loading-overlay", 4, "ngIf"],
      ["class", "empty-state", 4, "ngIf"],
      ["class", "document-list", 4, "ngIf"],
      ["class", "dialog-overlay", 3, "click", 4, "ngIf"],
      [1, "loading-overlay"],
      [1, "loading-content"],
      [1, "spinner"],
      [1, "empty-state"],
      [1, "empty-icon"],
      [1, "fas", "fa-folder-open"],
      ["routerLink", "/upload", 1, "btn", "btn-primary"],
      [1, "document-list"],
      [1, "document-list-header"],
      [1, "document-count"],
      [1, "pagination-controls"],
      ["title", "Previous page", 1, "btn", "btn-icon", 3, "click", "disabled"],
      [1, "fas", "fa-chevron-left"],
      [1, "page-info"],
      ["title", "Next page", 1, "btn", "btn-icon", 3, "click", "disabled"],
      [1, "fas", "fa-chevron-right"],
      [1, "document-cards"],
      ["class", "document-card", 4, "ngFor", "ngForOf"],
      [1, "document-card"],
      [1, "document-card-header"],
      [1, "document-type-badge"],
      [1, "document-menu"],
      [1, "btn-icon", 3, "click"],
      [1, "fas", "fa-ellipsis-v"],
      ["class", "document-actions", 4, "ngIf"],
      [1, "document-card-body", 3, "click"],
      [1, "document-icon"],
      [1, "fas", "fa-file-image"],
      [1, "document-info"],
      [1, "document-name"],
      [1, "document-date"],
      [1, "fas", "fa-calendar-alt"],
      [1, "document-card-footer"],
      [1, "btn", "btn-sm", "preview-btn", 3, "click"],
      [1, "fas", "fa-eye"],
      [1, "btn", "btn-sm", "download-btn", 3, "click"],
      [1, "fas", "fa-download"],
      [1, "document-actions"],
      [1, "action-btn", "preview-btn", 3, "click"],
      [1, "action-btn", "download-btn", 3, "click"],
      [1, "action-btn", "delete-btn", 3, "click"],
      [1, "fas", "fa-trash-alt"],
      [1, "dialog-overlay", 3, "click"],
      [1, "dialog-content", 3, "click"],
      [1, "dialog-header"],
      [1, "btn-icon", "close-btn", 3, "click"],
      [1, "fas", "fa-times"],
      [1, "dialog-body"],
      ["class", "file-preview", 4, "ngIf"],
      ["class", "loading-preview", 4, "ngIf"],
      [1, "dialog-footer"],
      ["class", "btn btn-primary", 3, "click", 4, "ngIf"],
      [1, "btn", "btn-outline", 3, "click"],
      [1, "file-preview"],
      ["alt", "Document Preview", 1, "preview-image", 3, "src"],
      [1, "loading-preview"],
      [1, "btn", "btn-primary", 3, "click"],
    ],
    template: function (e, t) {
      e & 1 &&
        (s(0, "div", 0)(1, "div", 1)(2, "div", 2),
        u(3, "i", 3),
        s(4, "h2"),
        m(5, "Your Documents"),
        l()(),
        s(6, "button", 4),
        u(7, "i", 5),
        m(8, " Upload Document "),
        l()(),
        b(9, ma, 7, 1, "div", 6)(10, ua, 10, 0, "div", 7)(
          11,
          ga,
          14,
          7,
          "div",
          8,
        ),
        l(),
        b(12, ya, 15, 4, "div", 9)),
        e & 2 &&
          (c(9),
          p("ngIf", t.isLoading),
          c(),
          p("ngIf", !t.isLoading && t.documents.length === 0),
          c(),
          p("ngIf", t.documents.length > 0),
          c(),
          p("ngIf", t.showPreview));
    },
    dependencies: [se, gt, ye, sn, _t, un],
    styles: [
      ".documents-container[_ngcontent-%COMP%]{padding:var(--spacing-6);height:100%;display:flex;flex-direction:column}.section-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--spacing-6)}.section-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--spacing-2)}.section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:var(--font-2xl);color:var(--primary-600)}.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:var(--font-2xl);color:var(--gray-900);margin:0}.upload-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--spacing-2)}.empty-state[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:var(--spacing-10);text-align:center}.empty-icon[_ngcontent-%COMP%]{font-size:var(--font-4xl);color:var(--gray-400);margin-bottom:var(--spacing-4)}.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:var(--font-xl);color:var(--gray-800);margin-bottom:var(--spacing-2)}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray-600);max-width:300px;margin-bottom:var(--spacing-6)}.loading-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background-color:#00000080;display:flex;justify-content:center;align-items:center;z-index:1000;animation:fadeIn .3s}.loading-content[_ngcontent-%COMP%]{background-color:#fff;padding:30px 40px;border-radius:12px;text-align:center;box-shadow:0 4px 20px #0000004d;max-width:400px;width:90%}.loading-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:15px 0 10px;color:#2c3e50}.loading-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#6c757d;margin-bottom:5px}.spinner[_ngcontent-%COMP%]{margin:0 auto;width:50px;height:50px;border:5px solid rgba(33,150,243,.2);border-radius:50%;border-top-color:#2196f3;animation:_ngcontent-%COMP%_spin 1s ease-in-out infinite}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}.document-list[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.document-list-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--spacing-4);padding-bottom:var(--spacing-3);border-bottom:1px solid var(--gray-200)}.document-count[_ngcontent-%COMP%]{color:var(--gray-600);font-size:var(--font-sm)}.pagination-controls[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--spacing-2)}.page-info[_ngcontent-%COMP%]{font-size:var(--font-sm);color:var(--gray-600)}.btn-icon[_ngcontent-%COMP%]{width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:var(--radius-md);background-color:transparent;color:var(--gray-700);border:1px solid var(--gray-300);cursor:pointer;transition:all var(--transition-normal)}.btn-icon[_ngcontent-%COMP%]:hover:not(:disabled){background-color:var(--gray-100);color:var(--gray-900)}.btn-icon[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.document-cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:var(--spacing-4);margin-top:var(--spacing-4)}.document-card[_ngcontent-%COMP%]{grid-template-columns:1fr;background-color:#fff;border-radius:var(--radius-lg);box-shadow:var(--shadow-sm);overflow:hidden;border:1px solid var(--gray-200);transition:all var(--transition-normal)}.document-card[_ngcontent-%COMP%]:hover{box-shadow:var(--shadow-md);transform:translateY(-2px)}.document-card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:var(--spacing-3) var(--spacing-4);background-color:var(--gray-50);border-bottom:1px solid var(--gray-200)}.document-type-badge[_ngcontent-%COMP%]{background-color:var(--gray-200);color:var(--gray-800);padding:var(--spacing-1) var(--spacing-2);border-radius:var(--radius-md);font-size:var(--font-xs);text-transform:capitalize;font-weight:500}.document-type-badge.adhaar[_ngcontent-%COMP%], .document-type-badge.pan[_ngcontent-%COMP%], .document-type-badge.driving_license[_ngcontent-%COMP%]{background-color:var(--primary-100);color:var(--primary-800)}.document-menu[_ngcontent-%COMP%]{position:relative}.document-actions[_ngcontent-%COMP%]{position:absolute;top:100%;right:0;width:180px;background-color:#fff;border-radius:var(--radius-md);box-shadow:var(--shadow-lg);z-index:10;overflow:hidden;border:1px solid var(--gray-200)}.action-btn[_ngcontent-%COMP%]{width:100%;text-align:left;padding:var(--spacing-2) var(--spacing-3);background:none;border:none;font-size:var(--font-sm);cursor:pointer;display:flex;align-items:center;gap:var(--spacing-2)}.action-btn[_ngcontent-%COMP%]:hover{background-color:var(--gray-100)}.preview-btn[_ngcontent-%COMP%]{color:var(--primary-700)}.download-btn[_ngcontent-%COMP%]{color:var(--secondary-700)}.delete-btn[_ngcontent-%COMP%]{color:var(--error)}.document-card-body[_ngcontent-%COMP%]{padding:var(--spacing-4);display:flex;align-items:center;gap:var(--spacing-3);cursor:pointer}.document-icon[_ngcontent-%COMP%]{width:48px;height:48px;background-color:var(--primary-50);color:var(--primary-700);border-radius:var(--radius-lg);display:flex;align-items:center;justify-content:center;font-size:var(--font-xl)}.document-info[_ngcontent-%COMP%]{flex:1;min-width:0}.document-name[_ngcontent-%COMP%]{font-size:var(--font-base);font-weight:500;color:var(--gray-900);margin:0 0 var(--spacing-1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.document-date[_ngcontent-%COMP%]{font-size:var(--font-xs);color:var(--gray-500);margin:0;display:flex;align-items:center;gap:var(--spacing-1)}.document-card-footer[_ngcontent-%COMP%]{display:flex;gap:var(--spacing-2);padding:var(--spacing-3) var(--spacing-4);border-top:1px solid var(--gray-200);background-color:var(--gray-50)}.btn-sm[_ngcontent-%COMP%]{padding:var(--spacing-1) var(--spacing-3);font-size:var(--font-xs);display:flex;align-items:center;gap:var(--spacing-1)}.dialog-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background-color:#0009;display:flex;align-items:center;justify-content:center;z-index:1000;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.dialog-content[_ngcontent-%COMP%]{background-color:#fff;border-radius:var(--radius-lg);width:90%;max-width:800px;max-height:90vh;display:flex;flex-direction:column;box-shadow:var(--shadow-xl);overflow:hidden}.dialog-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:var(--spacing-4) var(--spacing-6);border-bottom:1px solid var(--gray-200)}.dialog-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:var(--font-lg);color:var(--gray-900)}.close-btn[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:var(--radius-full)}.dialog-body[_ngcontent-%COMP%]{flex:1;padding:var(--spacing-6);overflow-y:auto;display:flex;align-items:center;justify-content:center;background-color:var(--gray-100);min-height:300px}.file-preview[_ngcontent-%COMP%]{max-width:100%;max-height:60vh;overflow:hidden}.preview-image[_ngcontent-%COMP%]{max-width:100%;max-height:60vh;object-fit:contain;border-radius:var(--radius-md);box-shadow:var(--shadow-md)}.loading-preview[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--gray-600)}.dialog-footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:var(--spacing-3);padding:var(--spacing-4) var(--spacing-6);border-top:1px solid var(--gray-200);background-color:var(--gray-50)}@media (max-width: 768px){.section-header[_ngcontent-%COMP%], .document-list-header[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;gap:var(--spacing-3)}.dialog-content[_ngcontent-%COMP%]{width:95%;max-width:none}.dialog-body[_ngcontent-%COMP%]{padding:var(--spacing-3)}.document-cards[_ngcontent-%COMP%]{grid-template-columns:1fr}}",
    ],
  });
};
function xa(i, n) {
  if ((i & 1 && (s(0, "span", 16), m(1), l()), i & 2)) {
    let e = f();
    c(), F(e.sharedWithMe.length);
  }
}
function Ca(i, n) {
  if (i & 1) {
    let e = Y();
    s(0, "div", 17)(1, "button", 18),
      _("click", function () {
        M(e);
        let o = f();
        return E(o.updateSharedWithMePage(-1));
      }),
      u(2, "i", 19),
      l(),
      s(3, "span", 20),
      m(4),
      l(),
      s(5, "button", 21),
      _("click", function () {
        M(e);
        let o = f();
        return E(o.updateSharedWithMePage(1));
      }),
      u(6, "i", 22),
      l()();
  }
  if (i & 2) {
    let e = f();
    c(),
      p("disabled", e.sharedWithMeCurrentPage === 1),
      c(3),
      Ve(
        "",
        e.sharedWithMeCurrentPage,
        " / ",
        e.Math.ceil(e.sharedWithMe.length / e.itemsPerPage),
        "",
      ),
      c(),
      p(
        "disabled",
        e.sharedWithMeCurrentPage * e.itemsPerPage >= e.sharedWithMe.length,
      );
  }
}
function wa(i, n) {
  i & 1 &&
    (s(0, "div", 23)(1, "div", 24),
    u(2, "i", 9),
    l(),
    s(3, "h4"),
    m(4, "No messages yet"),
    l(),
    s(5, "p"),
    m(
      6,
      " When others share encrypted messages with you, they will appear here. ",
    ),
    l()());
}
function Ma(i, n) {
  i & 1 &&
    (s(0, "div", 25),
    u(1, "div", 26),
    s(2, "p"),
    m(3, "Loading messages..."),
    l()());
}
function Ea(i, n) {
  if (
    (i & 1 &&
      (s(0, "div", 50)(1, "p")(2, "strong"),
      m(3, "Decrypted Text:"),
      l(),
      m(4),
      l()()),
    i & 2)
  ) {
    let e = f().$implicit,
      t = f(2);
    c(4), H(" ", t.decryptedMessages[e._id], " ");
  }
}
function Da(i, n) {
  if (i & 1) {
    let e = Y();
    s(0, "li", 29)(1, "div", 30)(2, "div", 31)(3, "div", 32)(4, "div", 33),
      m(5),
      l(),
      s(6, "div", 34)(7, "h4", 35),
      m(8),
      l(),
      s(9, "p", 36),
      u(10, "i", 37),
      m(11),
      l()()(),
      s(12, "div", 38)(13, "span", 39),
      m(14),
      l()()(),
      s(15, "div", 40)(16, "div", 41),
      u(17, "i", 42),
      s(18, "p", 43),
      m(
        19,
        " This message is encrypted. Click to decrypt and view the contents. ",
      ),
      l()()(),
      s(20, "div", 44)(21, "button", 45),
      _("click", function () {
        let o = M(e).$implicit,
          r = f(2);
        return E(r.decrypt(o._id));
      }),
      u(22, "i", 46),
      m(23, " Decrypt Message "),
      l(),
      s(24, "button", 47),
      _("click", function () {
        let o = M(e).$implicit,
          r = f(2);
        return E(r.deleteText(o._id, "received"));
      }),
      u(25, "i", 48),
      l()(),
      b(26, Ea, 5, 1, "div", 49),
      l()();
  }
  if (i & 2) {
    let e = n.$implicit,
      t = f(2);
    c(5),
      H(" ", t.getUserInitials(e.userId.name), " "),
      c(3),
      H(" ", e.userId.name || "Unknown User", " "),
      c(3),
      H(" ", t.formatDate(e.createdAt), " "),
      c(2),
      A("unread", !e.read),
      c(),
      H(" ", e.read ? "Read" : "New", " "),
      c(7),
      p("disabled", t.loadingSharedWithMe),
      c(3),
      p("disabled", t.loadingSharedWithMe),
      c(2),
      p("ngIf", t.decryptedMessages[e._id]);
  }
}
function Oa(i, n) {
  if ((i & 1 && (s(0, "ul", 27), b(1, Da, 27, 9, "li", 28), l()), i & 2)) {
    let e = f();
    c(), p("ngForOf", e.getPaginatedSharedWithMe());
  }
}
function ka(i, n) {
  if ((i & 1 && (s(0, "span", 16), m(1), l()), i & 2)) {
    let e = f();
    c(), F(e.sharedByMe.length);
  }
}
function Sa(i, n) {
  if (i & 1) {
    let e = Y();
    s(0, "div", 17)(1, "button", 18),
      _("click", function () {
        M(e);
        let o = f();
        return E(o.updateSharedByMePage(-1));
      }),
      u(2, "i", 19),
      l(),
      s(3, "span", 20),
      m(4),
      l(),
      s(5, "button", 21),
      _("click", function () {
        M(e);
        let o = f();
        return E(o.updateSharedByMePage(1));
      }),
      u(6, "i", 22),
      l()();
  }
  if (i & 2) {
    let e = f();
    c(),
      p("disabled", e.sharedByMeCurrentPage === 1),
      c(3),
      Ve(
        "",
        e.sharedByMeCurrentPage,
        " / ",
        e.Math.ceil(e.sharedByMe.length / e.itemsPerPage),
        "",
      ),
      c(),
      p(
        "disabled",
        e.sharedByMeCurrentPage * e.itemsPerPage >= e.sharedByMe.length,
      );
  }
}
function Ia(i, n) {
  if (i & 1) {
    let e = Y();
    s(0, "div", 23)(1, "div", 24),
      u(2, "i", 15),
      l(),
      s(3, "h4"),
      m(4, "No sent messages"),
      l(),
      s(5, "p"),
      m(
        6,
        " Messages you have encrypted and shared with others will appear here. ",
      ),
      l(),
      s(7, "button", 4),
      _("click", function () {
        M(e);
        let o = f();
        return E(o.openEncryption());
      }),
      u(8, "i", 5),
      m(9, " Encrypt New Message "),
      l()();
  }
}
function Pa(i, n) {
  i & 1 &&
    (s(0, "div", 25),
    u(1, "div", 26),
    s(2, "p"),
    m(3, "Loading messages..."),
    l()());
}
function Ta(i, n) {
  if (
    (i & 1 &&
      (s(0, "li", 58)(1, "div", 33), m(2), l(), s(3, "span"), m(4), l()()),
    i & 2)
  ) {
    let e = n.$implicit,
      t = f(3);
    c(2),
      H(" ", t.getUserInitials(e.receiverId.name), " "),
      c(2),
      F(e.receiverId.name || e.receiverId.email || "Unknown User");
  }
}
function Aa(i, n) {
  if (i & 1) {
    let e = Y();
    s(0, "li", 29)(1, "div", 30)(2, "div", 31)(3, "div", 51),
      u(4, "i", 52),
      s(5, "div", 53)(6, "p"),
      m(7),
      l()()()(),
      s(8, "div", 40)(9, "div", 41),
      u(10, "i", 42),
      s(11, "p", 54),
      m(12),
      l()(),
      s(13, "div", 55)(14, "h4"),
      m(15, "Shared with:"),
      l(),
      s(16, "ul", 56),
      b(17, Ta, 5, 2, "li", 57),
      l()()(),
      s(18, "div", 44)(19, "button", 47),
      _("click", function () {
        let o = M(e).$implicit,
          r = f(2);
        return E(r.deleteText(o._id, "sent"));
      }),
      u(20, "i", 48),
      m(21, " Delete "),
      l()()()();
  }
  if (i & 2) {
    let e = n.$implicit,
      t = f(2);
    c(7),
      H("Shared on ", t.formatDate(e.createdAt), ""),
      c(5),
      H(
        " Encrypted message shared with ",
        (e.receivers == null ? null : e.receivers.length) || 0,
        " recipient(s) ",
      ),
      c(5),
      p("ngForOf", e.receivers),
      c(2),
      p("disabled", t.loadingSharedByMe);
  }
}
function Ra(i, n) {
  if ((i & 1 && (s(0, "ul", 27), b(1, Aa, 22, 4, "li", 28), l()), i & 2)) {
    let e = f();
    c(), p("ngForOf", e.getPaginatedSharedByMe());
  }
}
var Bt = class i {
  constructor(n, e, t, o) {
    this.textService = n;
    this.dialog = e;
    this.encryptService = t;
    this.toastr = o;
  }
  Math = Math;
  loadingSharedWithMe = !0;
  loadingSharedByMe = !0;
  sharedWithMe = [];
  sharedByMe = [];
  sharedWithMeCurrentPage = 1;
  sharedByMeCurrentPage = 1;
  itemsPerPage = 2;
  decryptedMessages = {};
  errorMessages = {};
  error = "";
  loading = !1;
  subscriptions = [];
  ngOnInit() {
    this.loadSharedWithMe(), this.loadSharedByMe();
  }
  ngOnDestroy() {
    this.subscriptions.forEach((n) => n.unsubscribe());
  }
  loadSharedWithMe() {
    this.loadingSharedWithMe = !0;
    let n = this.textService.getSharedWithMe().subscribe({
      next: (e) => {
        (this.sharedWithMe = (e.sharedFiles || []).sort(
          (t, o) =>
            new Date(o.createdAt).getTime() - new Date(t.createdAt).getTime(),
        )),
          (this.loadingSharedWithMe = !1),
          console.log(this.sharedWithMe);
      },
      error: (e) => {
        console.error("Error loading shared messages:", e),
          this.toastr.error("Could not load messages shared with you."),
          (this.loadingSharedWithMe = !1);
      },
    });
    this.subscriptions.push(n);
  }
  loadSharedByMe() {
    this.loadingSharedByMe = !0;
    let n = this.textService.getSharedByMe().subscribe({
      next: (e) => {
        (this.sharedByMe = (e.data || []).sort(
          (t, o) =>
            new Date(o.createdAt).getTime() - new Date(t.createdAt).getTime(),
        )),
          (this.loadingSharedByMe = !1);
      },
      error: (e) => {
        console.error("Error loading your shared messages:", e),
          this.toastr.error("Could not load messages you have shared."),
          (this.loadingSharedByMe = !1);
      },
    });
    this.subscriptions.push(n);
  }
  refreshMessages() {
    this.loadSharedWithMe(), this.loadSharedByMe();
  }
  deleteText(n, e) {
    let t = this.textService.deleteSharedMessage(n).subscribe({
      next: () => {
        this.toastr.success("Message deleted successfully."),
          e === "received"
            ? (this.sharedWithMe = this.sharedWithMe.filter((o) => o._id !== n))
            : (this.sharedByMe = this.sharedByMe.filter((o) => o._id !== n));
      },
      error: (o) => {
        console.error("Error deleting message:", o),
          this.toastr.error("Could not delete message. Please try again.");
      },
    });
  }
  openEncryption() {
    window.location.href = "/encrypt-text";
  }
  decrypt(n) {
    (this.decryptedMessages = {}),
      (this.loading = !0),
      this.encryptService.decryptText(n).subscribe({
        next: (e) => {
          (this.decryptedMessages[n] = e.text),
            (this.loading = !1),
            this.toastr.success("Message decrypted successfully");
        },
        error: (e) => {
          (this.errorMessages[n] =
            "Decryption failed: " + (e.error?.message || e.message)),
            (this.loading = !1),
            this.toastr.error(this.error);
        },
      });
  }
  updateSharedWithMePage(n) {
    let e = this.sharedWithMeCurrentPage + n,
      t = Math.ceil(this.sharedWithMe.length / this.itemsPerPage);
    e >= 1 && e <= t && (this.sharedWithMeCurrentPage = e);
  }
  updateSharedByMePage(n) {
    let e = this.sharedByMeCurrentPage + n,
      t = Math.ceil(this.sharedByMe.length / this.itemsPerPage);
    e >= 1 && e <= t && (this.sharedByMeCurrentPage = e);
  }
  getPaginatedSharedWithMe() {
    let n = (this.sharedWithMeCurrentPage - 1) * this.itemsPerPage;
    return this.sharedWithMe.slice(n, n + this.itemsPerPage);
  }
  getPaginatedSharedByMe() {
    let n = (this.sharedByMeCurrentPage - 1) * this.itemsPerPage;
    return this.sharedByMe.slice(n, n + this.itemsPerPage);
  }
  formatDate(n) {
    return new Date(n).toLocaleString();
  }
  getUserInitials(n) {
    if (!n) return "?";
    let e = n.split(" ");
    return e.length >= 2
      ? (e[0][0] + e[1][0]).toUpperCase()
      : n.substring(0, 2).toUpperCase();
  }
  static ɵfac = function (e) {
    return new (e || i)(j(Qt), j(qe), j(Qt), j(vt));
  };
  static ɵcmp = S({
    type: i,
    selectors: [["app-text"]],
    decls: 30,
    vars: 10,
    consts: [
      [1, "text-dashboard"],
      [1, "section-header"],
      [1, "section-title"],
      [1, "fas", "fa-envelope-open-text"],
      [1, "btn", "btn-primary", 3, "click"],
      [1, "fas", "fa-lock"],
      [1, "panel"],
      [1, "panel-header"],
      [1, "panel-title"],
      [1, "fas", "fa-inbox"],
      ["class", "badge", 4, "ngIf"],
      ["class", "pagination", 4, "ngIf"],
      ["class", "empty-state", 4, "ngIf"],
      ["class", "loading-state", 4, "ngIf"],
      ["class", "message-list", 4, "ngIf"],
      [1, "fas", "fa-paper-plane"],
      [1, "badge"],
      [1, "pagination"],
      ["title", "Previous page", 1, "btn", "btn-icon", 3, "click", "disabled"],
      [1, "fas", "fa-chevron-left"],
      [1, "page-info"],
      ["title", "Next page", 1, "btn", "btn-icon", 3, "click", "disabled"],
      [1, "fas", "fa-chevron-right"],
      [1, "empty-state"],
      [1, "empty-icon"],
      [1, "loading-state"],
      [1, "spinner"],
      [1, "message-list"],
      ["class", "message-item", 4, "ngFor", "ngForOf"],
      [1, "message-item"],
      [1, "message-card"],
      [1, "message-header"],
      [1, "sender-info"],
      [1, "avatar"],
      [1, "sender-details"],
      [1, "sender-name"],
      [1, "message-date"],
      [1, "fas", "fa-clock"],
      [1, "message-status"],
      [1, "status-badge"],
      [1, "message-body"],
      [1, "encrypted-content"],
      [1, "encrypted-icon"],
      [1, "encrypted-text"],
      [1, "message-footer"],
      [1, "btn", "btn-primary", "decrypt-btn", 3, "click", "disabled"],
      [1, "fas", "fa-unlock"],
      [1, "btn", "btn-outline", "delete-btn", 3, "click", "disabled"],
      [1, "fas", "fa-trash-alt"],
      ["class", "result-box", 4, "ngIf"],
      [1, "result-box"],
      [1, "sent-info"],
      [1, "fas", "fa-share-alt", "sent-icon"],
      [1, "sent-date"],
      [1, "encrypted-preview"],
      [1, "receivers-list"],
      [1, "receivers"],
      ["class", "receiver", 4, "ngFor", "ngForOf"],
      [1, "receiver"],
    ],
    template: function (e, t) {
      e & 1 &&
        (s(0, "div", 0)(1, "div", 1)(2, "h2", 2),
        u(3, "i", 3),
        m(4, " Encrypted Messages "),
        l(),
        s(5, "button", 4),
        _("click", function () {
          return t.openEncryption();
        }),
        u(6, "i", 5),
        m(7, " Encrypt New Message "),
        l()(),
        s(8, "div", 6)(9, "div", 7)(10, "div", 8),
        u(11, "i", 9),
        s(12, "h3"),
        m(13, "Shared With Me"),
        l(),
        b(14, xa, 2, 1, "span", 10),
        l(),
        b(15, Ca, 7, 4, "div", 11),
        l(),
        b(16, wa, 7, 0, "div", 12)(17, Ma, 4, 0, "div", 13)(
          18,
          Oa,
          2,
          1,
          "ul",
          14,
        ),
        l(),
        s(19, "div", 6)(20, "div", 7)(21, "div", 8),
        u(22, "i", 15),
        s(23, "h3"),
        m(24, "Shared By Me"),
        l(),
        b(25, ka, 2, 1, "span", 10),
        l(),
        b(26, Sa, 7, 4, "div", 11),
        l(),
        b(27, Ia, 10, 0, "div", 12)(28, Pa, 4, 0, "div", 13)(
          29,
          Ra,
          2,
          1,
          "ul",
          14,
        ),
        l()()),
        e & 2 &&
          (c(14),
          p("ngIf", t.sharedWithMe.length > 0),
          c(),
          p("ngIf", t.sharedWithMe.length > 0),
          c(),
          p("ngIf", t.sharedWithMe.length === 0 && !t.loadingSharedWithMe),
          c(),
          p("ngIf", t.loadingSharedWithMe),
          c(),
          p("ngIf", t.sharedWithMe.length > 0 && !t.loadingSharedWithMe),
          c(7),
          p("ngIf", t.sharedByMe.length > 0),
          c(),
          p("ngIf", t.sharedByMe.length > 0),
          c(),
          p("ngIf", t.sharedByMe.length === 0 && !t.loadingSharedByMe),
          c(),
          p("ngIf", t.loadingSharedByMe),
          c(),
          p("ngIf", t.sharedByMe.length > 0 && !t.loadingSharedByMe));
    },
    dependencies: [se, gt, ye, _t],
    styles: [
      ".container[_ngcontent-%COMP%]{width:95%;padding:1rem;background-color:#f8f9fa;border-radius:8px}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem}.section[_ngcontent-%COMP%]{background:#fff;border-radius:8px;box-shadow:0 2px 4px #0000001a;padding:1rem;position:relative}.section-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--spacing-6)}.section-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--spacing-2);font-size:var(--font-2xl);color:var(--gray-900);margin:0}.section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--primary-600)}.share-list[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.share-item[_ngcontent-%COMP%]{padding:1rem;border:1px solid #e9ecef;border-radius:6px;margin-bottom:1rem;background:#fff}.share-item[_ngcontent-%COMP%]:last-child{margin-bottom:0}.share-details[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;gap:1rem}.share-info[_ngcontent-%COMP%]{flex:1}.share-actions[_ngcontent-%COMP%]{display:flex;gap:.5rem}.btn[_ngcontent-%COMP%]{padding:.5rem 1rem;border-radius:4px;border:none;font-weight:500;cursor:pointer;transition:all .2s}.btn[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:not-allowed}.btn-primary[_ngcontent-%COMP%]{background-color:#3498db;color:#fff}.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled){background-color:#2980b9}.pagination[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--spacing-2)}.page-info[_ngcontent-%COMP%]{font-size:var(--font-sm);color:var(--gray-600)}.btn-icon[_ngcontent-%COMP%]{width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:var(--radius-md);background-color:transparent;color:var(--gray-700);border:1px solid var(--gray-300);cursor:pointer;transition:all var(--transition-normal)}.btn-icon[_ngcontent-%COMP%]:hover:not(:disabled){background-color:var(--gray-100);color:var(--gray-900)}.btn-icon[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.result-box[_ngcontent-%COMP%]{margin-top:1rem;padding:1rem;background-color:#f8f9fa;border-radius:4px;border-left:4px solid #3498db}.receivers-list[_ngcontent-%COMP%]{margin-top:var(--spacing-4)}.receivers-list[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:var(--font-sm);color:var(--gray-700);margin:0 0 var(--spacing-2)}.receivers[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0;display:flex;flex-wrap:wrap;gap:var(--spacing-2)}.receiver[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--spacing-2);padding:var(--spacing-1) var(--spacing-2);background-color:var(--gray-100);border-radius:var(--radius-md);font-size:var(--font-sm);color:var(--gray-700)}.receiver[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:24px;height:24px;font-size:var(--font-xs)}.message-footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:var(--spacing-2);padding:var(--spacing-3) var(--spacing-4);border-top:1px solid var(--gray-200);background-color:var(--gray-50)}.decrypt-btn[_ngcontent-%COMP%], .delete-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--spacing-2)}.sent-icon[_ngcontent-%COMP%]{width:36px;height:36px;display:flex;align-items:center;justify-content:center;background-color:var(--secondary-100);color:var(--secondary-700);border-radius:var(--radius-full)}.sent-date[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:var(--font-sm);color:var(--gray-600);margin:0}.panel[_ngcontent-%COMP%]{background-color:#fff;border-radius:var(--radius-lg);box-shadow:var(--shadow-md);margin-bottom:var(--spacing-6);overflow:hidden;border:1px solid var(--gray-200);flex:1;display:flex;flex-direction:column}.panel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:var(--spacing-4) var(--spacing-6);border-bottom:1px solid var(--gray-200);background-color:var(--gray-50)}.panel-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--spacing-2)}.panel-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:var(--font-lg);color:var(--gray-900);margin:0}.panel-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--primary-600);font-size:var(--font-lg)}.badge[_ngcontent-%COMP%]{background-color:var(--primary-600);color:#fff;font-size:var(--font-xs);padding:var(--spacing-1) var(--spacing-2);border-radius:var(--radius-full);margin-left:var(--spacing-2)}.empty-state[_ngcontent-%COMP%]{padding:var(--spacing-8);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;color:var(--gray-500)}.empty-icon[_ngcontent-%COMP%]{font-size:var(--font-3xl);color:var(--gray-400);margin-bottom:var(--spacing-4)}.empty-state[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:var(--font-lg);color:var(--gray-700);margin:0 0 var(--spacing-2)}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:var(--spacing-6);max-width:300px}.loading-state[_ngcontent-%COMP%]{padding:var(--spacing-8);display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--gray-500)}.spinner[_ngcontent-%COMP%]{width:40px;height:40px;border:3px solid var(--gray-200);border-radius:50%;border-top-color:var(--primary-600);animation:_ngcontent-%COMP%_spin 1s linear infinite;margin-bottom:var(--spacing-4)}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}.message-list[_ngcontent-%COMP%]{list-style:none;padding:var(--spacing-4) var(--spacing-6);margin:0;flex:1;overflow-y:auto}.message-item[_ngcontent-%COMP%]{margin-bottom:var(--spacing-4)}.message-card[_ngcontent-%COMP%]{background-color:#fff;border-radius:var(--radius-lg);border:1px solid var(--gray-200);overflow:hidden;transition:all var(--transition-normal)}.message-card[_ngcontent-%COMP%]:hover{box-shadow:var(--shadow-md);transform:translateY(-2px)}.message-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:var(--spacing-3) var(--spacing-4);border-bottom:1px solid var(--gray-200);background-color:var(--gray-50)}.sender-info[_ngcontent-%COMP%], .sent-info[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--spacing-3)}.avatar[_ngcontent-%COMP%]{width:36px;height:36px;border-radius:var(--radius-full);background-color:var(--primary-100);color:var(--primary-700);display:flex;align-items:center;justify-content:center}.sender-details[_ngcontent-%COMP%]{display:flex;flex-direction:column}.sender-name[_ngcontent-%COMP%]{font-size:var(--font-base);font-weight:500;color:var(--gray-900);margin:0 0 var(--spacing-1)}.message-date[_ngcontent-%COMP%]{font-size:var(--font-xs);color:var(--gray-500);margin:0;display:flex;align-items:center;gap:var(--spacing-1)}.status-badge[_ngcontent-%COMP%]{background-color:var(--gray-300);color:var(--gray-700);padding:var(--spacing-1) var(--spacing-2);border-radius:var(--radius-md);font-size:var(--font-xs);font-weight:500}.status-badge.unread[_ngcontent-%COMP%]{background-color:var(--primary-100);color:var(--primary-800)}.message-body[_ngcontent-%COMP%]{padding:var(--spacing-4)}.encrypted-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--spacing-3);margin-bottom:var(--spacing-4)}.encrypted-icon[_ngcontent-%COMP%]{font-size:var(--font-xl);color:var(--primary-600)}.encrypted-text[_ngcontent-%COMP%]{color:var(--gray-700);margin:0;font-style:italic}.encrypted-preview[_ngcontent-%COMP%]{color:var(--gray-600);margin:0;font-family:monospace;background-color:var(--gray-100);padding:var(--spacing-2) var(--spacing-3);border-radius:var(--radius-md);font-size:var(--font-sm);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}@media (max-width: 768px){.text-dashboard[_ngcontent-%COMP%]{padding:var(--spacing-4)}.section-header[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;gap:var(--spacing-3)}.panel-header[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;gap:var(--spacing-3);padding:var(--spacing-4)}.message-list[_ngcontent-%COMP%]{padding:var(--spacing-3)}.message-header[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;gap:var(--spacing-2)}.message-status[_ngcontent-%COMP%]{align-self:flex-start}.message-footer[_ngcontent-%COMP%]{flex-direction:column}.btn[_ngcontent-%COMP%]{width:100%}}",
    ],
  });
};
var zt = class i {
  constructor(n) {
    this.http = n;
  }
  apiUrl = `${fn.apiUrl}/api/analytics`;
  token = localStorage.getItem("authToken");
  getUserMetrics() {
    return this.http
      .get(`${this.apiUrl}/user-metrics`, {
        headers: { Authorization: `Bearer ${this.token}` },
      })
      .pipe(
        Vi(
          (n) => (
            console.error("Error fetching user metrics:", n),
            ge({
              totalDocuments: 0,
              documentsThisMonth: 0,
              documentDate: Array(12).fill(0),
              documentsProcessed: {
                adhaar: 0,
                pan: 0,
                driving_license: 0,
                other: 0,
              },
              savedVsDirectDownloads: { saved: 0, directDownloads: 0 },
              totalStorageUsed: 0,
            })
          ),
        ),
      );
  }
  static ɵfac = function (e) {
    return new (e || i)(ji(dn));
  };
  static ɵprov = v({ token: i, factory: i.ɵfac, providedIn: "root" });
};
function La(i, n) {
  i & 1 &&
    (s(0, "div", 8)(1, "div", 9),
    u(2, "i", 10),
    l(),
    s(3, "p"),
    m(4, "Loading analytics data..."),
    l()());
}
function Na(i, n) {
  if (i & 1) {
    let e = Y();
    s(0, "div", 11),
      u(1, "i", 12),
      s(2, "p"),
      m(3),
      l(),
      s(4, "button", 13),
      _("click", function () {
        M(e);
        let o = f();
        return E(o.refreshData());
      }),
      m(5, "Try Again"),
      l()();
  }
  if (i & 2) {
    let e = f();
    c(3), F(e.error);
  }
}
function Ba(i, n) {
  if (
    (i & 1 &&
      (s(0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "div", 17),
      u(4, "i", 18),
      l(),
      s(5, "div", 19)(6, "h3"),
      m(7, "Total Documents"),
      l(),
      s(8, "p", 20),
      m(9),
      l()()(),
      s(10, "div", 16)(11, "div", 17),
      u(12, "i", 21),
      l(),
      s(13, "div", 19)(14, "h3"),
      m(15, "This Month"),
      l(),
      s(16, "p", 20),
      m(17),
      l()()()(),
      s(18, "div", 22)(19, "div", 23)(20, "h3"),
      m(21, "Document Types"),
      l(),
      s(22, "div", 24),
      u(23, "canvas", 25),
      l()(),
      s(24, "div", 23)(25, "h3"),
      m(26, "Processing Trend"),
      l(),
      s(27, "div", 24),
      u(28, "canvas", 26),
      l()()(),
      s(29, "div", 27)(30, "h2"),
      m(31, "Usage Details"),
      l(),
      s(32, "div", 28)(33, "table", 29)(34, "thead")(35, "tr")(36, "th"),
      m(37, "Document Type"),
      l(),
      s(38, "th"),
      m(39, "Count"),
      l(),
      s(40, "th"),
      m(41, "Percentage"),
      l()()(),
      s(42, "tbody")(43, "tr")(44, "td"),
      u(45, "i", 30),
      m(46, " Adhaar"),
      l(),
      s(47, "td"),
      m(48),
      l(),
      s(49, "td"),
      m(50),
      l()(),
      s(51, "tr")(52, "td"),
      u(53, "i", 31),
      m(54, " PAN"),
      l(),
      s(55, "td"),
      m(56),
      l(),
      s(57, "td"),
      m(58),
      l()(),
      s(59, "tr")(60, "td"),
      u(61, "i", 32),
      m(62, " Driving License"),
      l(),
      s(63, "td"),
      m(64),
      l(),
      s(65, "td"),
      m(66),
      l()(),
      s(67, "tr")(68, "td"),
      u(69, "i", 33),
      m(70, " Other"),
      l(),
      s(71, "td"),
      m(72),
      l(),
      s(73, "td"),
      m(74),
      l()()(),
      s(75, "tfoot")(76, "tr")(77, "td")(78, "strong"),
      m(79, "Total"),
      l()(),
      s(80, "td")(81, "strong"),
      m(82),
      l()(),
      s(83, "td")(84, "strong"),
      m(85, "100%"),
      l()()()()()()()()),
    i & 2)
  ) {
    let e = f();
    c(9),
      F(e.metrics.totalDocuments),
      c(8),
      F(e.metrics.documentsThisMonth),
      c(31),
      F(e.metrics.documentsProcessed.adhaar),
      c(2),
      H(
        " ",
        e.metrics.totalDocuments
          ? (
              (e.metrics.documentsProcessed.adhaar / e.metrics.totalDocuments) *
              100
            ).toFixed(1)
          : 0,
        "% ",
      ),
      c(6),
      F(e.metrics.documentsProcessed.pan),
      c(2),
      H(
        " ",
        e.metrics.totalDocuments
          ? (
              (e.metrics.documentsProcessed.pan / e.metrics.totalDocuments) *
              100
            ).toFixed(1)
          : 0,
        "% ",
      ),
      c(6),
      F(e.metrics.documentsProcessed.driving_license),
      c(2),
      H(
        " ",
        e.metrics.totalDocuments
          ? (
              (e.metrics.documentsProcessed.driving_license /
                e.metrics.totalDocuments) *
              100
            ).toFixed(1)
          : 0,
        "% ",
      ),
      c(6),
      F(e.metrics.documentsProcessed.other),
      c(2),
      H(
        " ",
        e.metrics.totalDocuments
          ? (
              (e.metrics.documentsProcessed.other / e.metrics.totalDocuments) *
              100
            ).toFixed(1)
          : 0,
        "% ",
      ),
      c(8),
      F(e.metrics.totalDocuments);
  }
}
bt.register(...Mn);
var Vt = class i {
  constructor(n) {
    this.analyticsService = n;
  }
  metrics = null;
  loading = !0;
  error = null;
  documentTypeChart = null;
  documentTrendChart = null;
  refreshSubscription = null;
  REFRESH_INTERVAL = 6e4;
  ngOnInit() {
    this.loadMetrics(),
      (this.refreshSubscription = zi(
        this.REFRESH_INTERVAL,
        this.REFRESH_INTERVAL,
      )
        .pipe(
          Gt(() =>
            document.visibilityState === "visible"
              ? this.analyticsService.getUserMetrics()
              : [],
          ),
        )
        .subscribe({
          next: (n) => {
            n && ((this.metrics = n), this.updateCharts());
          },
          error: (n) => {
            console.error("Error refreshing metrics:", n);
          },
        }));
  }
  loadMetrics() {
    (this.loading = !0),
      (this.error = null),
      this.analyticsService.getUserMetrics().subscribe({
        next: (n) => {
          (this.metrics = n),
            (this.loading = !1),
            setTimeout(() => this.initCharts(), 100);
        },
        error: (n) => {
          console.error("Error loading metrics:", n),
            (this.error =
              "Failed to load analytics data. Please try again later."),
            (this.loading = !1);
        },
      });
  }
  initCharts() {
    this.metrics &&
      (this.initDocumentTypeChart(), this.initDocumentTrendChart());
  }
  updateCharts() {
    this.metrics &&
      this.documentTypeChart &&
      ((this.documentTypeChart.data.datasets[0].data = [
        this.metrics.documentsProcessed.adhaar,
        this.metrics.documentsProcessed.pan,
        this.metrics.documentsProcessed.driving_license,
        this.metrics.documentsProcessed.other,
      ]),
      this.documentTypeChart.update());
  }
  initDocumentTypeChart() {
    let n = document.getElementById("documentTypeChart");
    n &&
      (this.documentTypeChart = new bt(n, {
        type: "doughnut",
        data: {
          labels: ["Adhaar", "PAN", "Driving License", "Other"],
          datasets: [
            {
              data: [
                this.metrics.documentsProcessed.adhaar,
                this.metrics.documentsProcessed.pan,
                this.metrics.documentsProcessed.driving_license,
                this.metrics.documentsProcessed.other,
              ],
              backgroundColor: [
                "rgba(54, 162, 235, 0.7)",
                "rgba(255, 99, 132, 0.7)",
                "rgba(255, 206, 86, 0.7)",
                "rgba(75, 192, 192, 0.7)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          plugins: {
            legend: { position: "bottom" },
            title: { display: !0, text: "Documents by Type" },
          },
        },
      }));
  }
  initDocumentTrendChart() {
    let n = document.getElementById("documentTrendChart");
    if (!n) return;
    let e = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      t = this.metrics.documentDate;
    console.log(t),
      (this.documentTrendChart = new bt(n, {
        type: "line",
        data: {
          labels: e,
          datasets: [
            {
              label: "Documents Processed",
              data: t,
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              tension: 0.3,
              fill: !0,
            },
          ],
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          scales: { y: { beginAtZero: !0 } },
          plugins: {
            title: { display: !0, text: "Monthly Document Processing Trend" },
          },
        },
      }));
  }
  refreshData() {
    this.loadMetrics();
  }
  ngOnDestroy() {
    this.documentTypeChart && this.documentTypeChart.destroy(),
      this.documentTrendChart && this.documentTrendChart.destroy();
  }
  static ɵfac = function (e) {
    return new (e || i)(j(zt));
  };
  static ɵcmp = S({
    type: i,
    selectors: [["app-analytics"]],
    decls: 11,
    vars: 6,
    consts: [
      [1, "analytics-container", "animate-fade-in"],
      [1, "section-header"],
      [1, "fas", "fa-chart-line"],
      [1, "btn", "refresh-btn", 3, "click", "disabled"],
      [1, "fas", "fa-sync-alt"],
      ["class", "loading-container", 4, "ngIf"],
      ["class", "error-container", 4, "ngIf"],
      ["class", "analytics-content", 4, "ngIf"],
      [1, "loading-container"],
      [1, "spinner"],
      [1, "fas", "fa-spinner", "fa-spin"],
      [1, "error-container"],
      [1, "fas", "fa-exclamation-triangle"],
      [1, "btn", "btn-primary", 3, "click"],
      [1, "analytics-content"],
      [1, "summary-cards"],
      [1, "summary-card"],
      [1, "card-icon"],
      [1, "fas", "fa-file-alt"],
      [1, "card-content"],
      [1, "card-value"],
      [1, "fas", "fa-calendar-alt"],
      [1, "charts-container"],
      [1, "chart-card"],
      [1, "chart-container"],
      ["id", "documentTypeChart"],
      ["id", "documentTrendChart"],
      [1, "metrics-details"],
      [1, "metrics-table-container"],
      [1, "metrics-table"],
      [1, "fas", "fa-id-card", "text-primary"],
      [1, "fas", "fa-address-card", "text-danger"],
      [1, "fas", "fa-car", "text-warning"],
      [1, "fas", "fa-file", "text-info"],
    ],
    template: function (e, t) {
      e & 1 &&
        (s(0, "div", 0)(1, "div", 1)(2, "h1"),
        u(3, "i", 2),
        m(4, " Analytics Dashboard"),
        l(),
        s(5, "button", 3),
        _("click", function () {
          return t.refreshData();
        }),
        u(6, "i", 4),
        m(7, " Refresh Data "),
        l()(),
        b(8, La, 5, 0, "div", 5)(9, Na, 6, 1, "div", 6)(
          10,
          Ba,
          86,
          11,
          "div",
          7,
        ),
        l()),
        e & 2 &&
          (c(5),
          p("disabled", t.loading),
          c(),
          A("fa-spin", t.loading),
          c(2),
          p("ngIf", t.loading),
          c(),
          p("ngIf", t.error && !t.loading),
          c(),
          p("ngIf", t.metrics && !t.loading));
    },
    dependencies: [se, ye],
    styles: [
      ".analytics-container[_ngcontent-%COMP%]{padding:1.5rem;background-color:#f8f9fa;border-radius:8px;box-shadow:0 2px 10px #0000000d;overflow:auto;height:100%}.section-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;padding-bottom:1rem;border-bottom:1px solid #e9ecef}.section-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.8rem;font-weight:700;color:#343a40;margin:0;display:flex;align-items:center}.section-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:.75rem;color:#4a6fdc}.refresh-btn[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.5rem 1rem;background-color:#fff;color:#495057;border:1px solid #dee2e6;border-radius:4px;font-weight:500;transition:all .2s ease}.refresh-btn[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#e9ecef;color:#212529;border-color:#ced4da}.refresh-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:.5rem}.loading-container[_ngcontent-%COMP%], .error-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:3rem;text-align:center}.spinner[_ngcontent-%COMP%]{font-size:2.5rem;color:#4a6fdc;margin-bottom:1rem}.error-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:2.5rem;color:#dc3545;margin-bottom:1rem}.summary-cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:1.5rem;margin-bottom:2rem}.summary-card[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;padding:1.5rem;display:flex;align-items:center;box-shadow:0 2px 8px #0000000f;transition:transform .2s,box-shadow .2s}.summary-card[_ngcontent-%COMP%]:hover{transform:translateY(-3px);box-shadow:0 4px 12px #0000001a}.card-icon[_ngcontent-%COMP%]{width:60px;height:60px;border-radius:50%;background-color:#4a6fdc1a;display:flex;align-items:center;justify-content:center;margin-right:1rem}.card-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.8rem;color:#4a6fdc}.summary-card[_ngcontent-%COMP%]:nth-child(2)   .card-icon[_ngcontent-%COMP%]{background-color:#28a7451a}.summary-card[_ngcontent-%COMP%]:nth-child(2)   .card-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#28a745}.summary-card[_ngcontent-%COMP%]:nth-child(3)   .card-icon[_ngcontent-%COMP%]{background-color:#dc35451a}.summary-card[_ngcontent-%COMP%]:nth-child(3)   .card-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#dc3545}.summary-card[_ngcontent-%COMP%]:nth-child(4)   .card-icon[_ngcontent-%COMP%]{background-color:#ffc1071a}.summary-card[_ngcontent-%COMP%]:nth-child(4)   .card-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#ffc107}.card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:.9rem;font-weight:500;color:#6c757d;margin:0 0 .25rem}.card-value[_ngcontent-%COMP%]{font-size:1.8rem;font-weight:700;color:#343a40;margin:0}.charts-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;margin-bottom:2rem}.chart-card[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;padding:1.5rem;box-shadow:0 2px 8px #0000000f}.chart-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:600;color:#343a40;margin-top:0;margin-bottom:1rem;text-align:center}.chart-container[_ngcontent-%COMP%]{height:250px;position:relative}.metrics-details[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;padding:1.5rem;box-shadow:0 2px 8px #0000000f}.metrics-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:600;color:#343a40;margin-top:0;margin-bottom:1.5rem;padding-bottom:.75rem;border-bottom:1px solid #e9ecef}.metrics-table-container[_ngcontent-%COMP%]{margin-bottom:2rem;overflow-x:auto}.metrics-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.metrics-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .metrics-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.75rem 1rem;text-align:left}.metrics-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#f8f9fa;font-weight:600;color:#495057}.metrics-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid #e9ecef}.metrics-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#00000005}.metrics-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:.5rem}.metrics-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]{background-color:#f8f9fa}.text-primary[_ngcontent-%COMP%]{color:#4a6fdc}.text-danger[_ngcontent-%COMP%]{color:#dc3545}.text-warning[_ngcontent-%COMP%]{color:#ffc107}.text-info[_ngcontent-%COMP%]{color:#17a2b8}.downloads-breakdown[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:600;color:#343a40;margin-top:0;margin-bottom:1rem}.downloads-cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.5rem}.download-card[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:#f8f9fa;padding:1rem;border-radius:8px}.download-icon[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:1rem}.download-icon.saved[_ngcontent-%COMP%]{background-color:#28a7451a}.download-icon.saved[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#28a745}.download-icon.direct[_ngcontent-%COMP%]{background-color:#17a2b81a}.download-icon.direct[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#17a2b8}.download-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:.9rem;font-weight:500;color:#6c757d;margin:0 0 .25rem}.download-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:700;color:#343a40;margin:0}.animate-fade-in[_ngcontent-%COMP%]{opacity:0;animation:_ngcontent-%COMP%_fadeIn .6s ease forwards}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@media (max-width: 992px){.section-header[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.section-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:1rem}.summary-cards[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}.charts-container[_ngcontent-%COMP%]{grid-template-columns:1fr}}@media (max-width: 768px){.analytics-container[_ngcontent-%COMP%]{padding:1rem}.summary-cards[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}@media (max-width: 576px){.summary-cards[_ngcontent-%COMP%], .downloads-cards[_ngcontent-%COMP%]{grid-template-columns:1fr}.card-value[_ngcontent-%COMP%]{font-size:1.5rem}}",
    ],
  });
};
function za(i, n) {
  i & 1 && (s(0, "div", 16)(1, "div", 17), u(2, "app-documents"), l()());
}
function Va(i, n) {
  i & 1 && (s(0, "div", 18)(1, "div", 19), u(2, "app-text"), l()());
}
function ja(i, n) {
  i & 1 && (s(0, "div", 20), u(1, "app-analytics"), l());
}
var Do = class i {
  constructor(n, e, t) {
    this.titleService = n;
    this.route = e;
    this.router = t;
  }
  refreshTrigger = !1;
  userName = null;
  animationObserver = null;
  activeTab = "main";
  ngOnInit() {
    (this.refreshTrigger = !this.refreshTrigger),
      this.titleService.setTitle("Dashboard - Secure Document Management"),
      (this.userName = localStorage.getItem("userName")),
      this.route.queryParams.subscribe((n) => {
        n.tab &&
          ["main", "analytics", "text"].includes(n.tab) &&
          (this.activeTab = n.tab);
      });
  }
  ngAfterViewInit() {
    this.setupScrollAnimations();
  }
  ngOnDestroy() {
    this.animationObserver && this.animationObserver.disconnect();
  }
  setActiveTab(n) {
    (this.activeTab = n),
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { tab: n },
        queryParamsHandling: "merge",
      }),
      n === "analytics"
        ? this.titleService.setTitle("Analytics - Secure Document Management")
        : this.titleService.setTitle("Dashboard - Secure Document Management");
  }
  setupScrollAnimations() {
    (this.animationObserver = new IntersectionObserver(
      (n) => {
        n.forEach((e) => {
          e.isIntersecting &&
            (e.target.classList.add("visible"),
            this.animationObserver?.unobserve(e.target));
        });
      },
      { root: null, threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )),
      document.querySelectorAll(".animate-on-scroll").forEach((n) => {
        this.animationObserver?.observe(n);
      });
  }
  static ɵfac = function (e) {
    return new (e || i)(j(cn), j(hn), j(mn));
  };
  static ɵcmp = S({
    type: i,
    selectors: [["app-dashboard"]],
    decls: 26,
    vars: 9,
    consts: [
      [1, "dashboard-container"],
      [1, "dashboard-header"],
      [1, "container"],
      [1, "dashboard-title"],
      [1, "dashboard-subtitle"],
      [1, "dashboard-nav"],
      [1, "nav-tabs"],
      [1, "nav-item"],
      [1, "nav-link", 3, "click"],
      [1, "fas", "fa-file-alt"],
      [1, "fas", "fa-font"],
      [1, "fas", "fa-chart-line"],
      [1, "dashboard-content"],
      ["class", "dashboard-main-content", 4, "ngIf"],
      ["class", "text-dashboard", 4, "ngIf"],
      ["class", "analytics-wrapper", 4, "ngIf"],
      [1, "dashboard-main-content"],
      [1, "dashboard-main"],
      [1, "text-dashboard"],
      [1, "dashboard-text"],
      [1, "analytics-wrapper"],
    ],
    template: function (e, t) {
      e & 1 &&
        (s(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "h1", 3),
        m(4, "Dashboard"),
        l(),
        s(5, "p", 4),
        m(6, " Manage your documents and encryption tools "),
        l()()(),
        s(7, "div", 2)(8, "nav", 5)(9, "ul", 6)(10, "li", 7)(11, "a", 8),
        _("click", function () {
          return t.setActiveTab("main");
        }),
        u(12, "i", 9),
        m(13, " Documents "),
        l()(),
        s(14, "li", 7)(15, "a", 8),
        _("click", function () {
          return t.setActiveTab("text");
        }),
        u(16, "i", 10),
        m(17, " Text "),
        l()(),
        s(18, "li", 7)(19, "a", 8),
        _("click", function () {
          return t.setActiveTab("analytics");
        }),
        u(20, "i", 11),
        m(21, " Analytics "),
        l()()()(),
        s(22, "div", 12),
        b(23, za, 3, 0, "div", 13)(24, Va, 3, 0, "div", 14)(
          25,
          ja,
          2,
          0,
          "div",
          15,
        ),
        l()()()),
        e & 2 &&
          (c(10),
          A("active", t.activeTab === "main"),
          c(4),
          A("active", t.activeTab === "text"),
          c(4),
          A("active", t.activeTab === "analytics"),
          c(5),
          p("ngIf", t.activeTab === "main"),
          c(),
          p("ngIf", t.activeTab === "text"),
          c(),
          p("ngIf", t.activeTab === "analytics"));
    },
    dependencies: [se, ye, Nt, Bt, Vt],
    styles: [
      '.dashboard-container[_ngcontent-%COMP%]{min-height:calc(100vh - 364px)}.dashboard-header[_ngcontent-%COMP%]{background-color:var(--primary-800);color:#fff;padding:var(--spacing-8) 0 var(--spacing-10);margin-bottom:var(--spacing-8);position:relative;overflow:hidden}.dashboard-header[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background-image:linear-gradient(135deg,rgba(0,0,0,.1) 25%,transparent 25%,transparent 50%,rgba(0,0,0,.1) 50%,rgba(0,0,0,.1) 75%,transparent 75%,transparent);background-size:20px 20px;opacity:.2}.dashboard-title[_ngcontent-%COMP%]{font-size:var(--font-3xl);font-weight:700;margin:0 0 var(--spacing-2);position:relative}.dashboard-subtitle[_ngcontent-%COMP%]{font-size:var(--font-lg);opacity:.9;margin:0;max-width:600px}.dashboard-nav[_ngcontent-%COMP%]{margin-bottom:var(--spacing-6)}.nav-tabs[_ngcontent-%COMP%]{display:flex;list-style:none;padding:0;margin:0;border-bottom:2px solid var(--gray-200)}.nav-item[_ngcontent-%COMP%]{margin-right:var(--spacing-4)}.nav-link[_ngcontent-%COMP%]{display:flex;align-items:center;padding:var(--spacing-4) var(--spacing-2);color:var(--gray-600);font-weight:500;position:relative;transition:color .2s ease;cursor:pointer}.nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:var(--spacing-2);font-size:var(--font-lg)}.nav-item.active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{color:var(--primary-600)}.nav-item.active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-2px;left:0;right:0;height:2px;background-color:var(--primary-600)}.nav-link[_ngcontent-%COMP%]:hover{color:var(--primary-500)}.dashboard-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:3fr;gap:var(--spacing-6);margin-bottom:var(--spacing-8)}.dashboard-main-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:3fr;gap:var(--spacing-6)}.dashboard-main[_ngcontent-%COMP%]{border-radius:var(--radius-lg);box-shadow:var(--shadow-md);overflow:hidden}.text-dashboard[_ngcontent-%COMP%]{overflow:hidden}.dashboard-sidebar[_ngcontent-%COMP%]{border-radius:var(--radius-lg);box-shadow:var(--shadow-md);overflow:hidden}.analytics-wrapper[_ngcontent-%COMP%]{grid-column:1 / -1;border-radius:var(--radius-lg);box-shadow:var(--shadow-md);overflow:hidden}@media (max-width: 992px){.dashboard-content[_ngcontent-%COMP%], .dashboard-main-content[_ngcontent-%COMP%]   .text-dashboard[_ngcontent-%COMP%]{grid-template-columns:1fr}.dashboard-sidebar[_ngcontent-%COMP%]{margin-top:var(--spacing-6)}.dashboard-header[_ngcontent-%COMP%]{padding:var(--spacing-6) 0 var(--spacing-8)}.dashboard-title[_ngcontent-%COMP%]{font-size:var(--font-2xl)}.dashboard-subtitle[_ngcontent-%COMP%]{font-size:var(--font-base)}.nav-item[_ngcontent-%COMP%]{margin-right:var(--spacing-2)}.nav-link[_ngcontent-%COMP%]{padding:var(--spacing-3) var(--spacing-1);font-size:var(--font-sm)}}',
    ],
  });
};
export { Do as DashboardComponent };
