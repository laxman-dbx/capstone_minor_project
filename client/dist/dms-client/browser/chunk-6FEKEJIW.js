import {
  Cc as ne,
  Ga as H,
  I as $,
  L as G,
  Oc as re,
  Q as W,
  Z as q,
  aa as E,
  ca as A,
  fa as y,
  ha as m,
  ia as g,
  ja as K,
  l as J,
  la as Y,
  ma as Q,
  r as V,
  s as U,
  ua as Z,
  wc as ee,
  y as N,
} from "./chunk-4KGF3EVT.js";
var O = class {},
  k = class {},
  v = class r {
    headers;
    normalizedNames = new Map();
    lazyInit;
    lazyUpdate = null;
    constructor(e) {
      e
        ? typeof e == "string"
          ? (this.lazyInit = () => {
              (this.headers = new Map()),
                e
                  .split(
                    `
`,
                  )
                  .forEach((n) => {
                    let t = n.indexOf(":");
                    if (t > 0) {
                      let s = n.slice(0, t),
                        i = n.slice(t + 1).trim();
                      this.addHeaderEntry(s, i);
                    }
                  });
            })
          : typeof Headers < "u" && e instanceof Headers
            ? ((this.headers = new Map()),
              e.forEach((n, t) => {
                this.addHeaderEntry(t, n);
              }))
            : (this.lazyInit = () => {
                (this.headers = new Map()),
                  Object.entries(e).forEach(([n, t]) => {
                    this.setHeaderEntries(n, t);
                  });
              })
        : (this.headers = new Map());
    }
    has(e) {
      return this.init(), this.headers.has(e.toLowerCase());
    }
    get(e) {
      this.init();
      let n = this.headers.get(e.toLowerCase());
      return n && n.length > 0 ? n[0] : null;
    }
    keys() {
      return this.init(), Array.from(this.normalizedNames.values());
    }
    getAll(e) {
      return this.init(), this.headers.get(e.toLowerCase()) || null;
    }
    append(e, n) {
      return this.clone({ name: e, value: n, op: "a" });
    }
    set(e, n) {
      return this.clone({ name: e, value: n, op: "s" });
    }
    delete(e, n) {
      return this.clone({ name: e, value: n, op: "d" });
    }
    maybeSetNormalizedName(e, n) {
      this.normalizedNames.has(n) || this.normalizedNames.set(n, e);
    }
    init() {
      this.lazyInit &&
        (this.lazyInit instanceof r
          ? this.copyFrom(this.lazyInit)
          : this.lazyInit(),
        (this.lazyInit = null),
        this.lazyUpdate &&
          (this.lazyUpdate.forEach((e) => this.applyUpdate(e)),
          (this.lazyUpdate = null)));
    }
    copyFrom(e) {
      e.init(),
        Array.from(e.headers.keys()).forEach((n) => {
          this.headers.set(n, e.headers.get(n)),
            this.normalizedNames.set(n, e.normalizedNames.get(n));
        });
    }
    clone(e) {
      let n = new r();
      return (
        (n.lazyInit =
          this.lazyInit && this.lazyInit instanceof r ? this.lazyInit : this),
        (n.lazyUpdate = (this.lazyUpdate || []).concat([e])),
        n
      );
    }
    applyUpdate(e) {
      let n = e.name.toLowerCase();
      switch (e.op) {
        case "a":
        case "s":
          let t = e.value;
          if ((typeof t == "string" && (t = [t]), t.length === 0)) return;
          this.maybeSetNormalizedName(e.name, n);
          let s = (e.op === "a" ? this.headers.get(n) : void 0) || [];
          s.push(...t), this.headers.set(n, s);
          break;
        case "d":
          let i = e.value;
          if (!i) this.headers.delete(n), this.normalizedNames.delete(n);
          else {
            let o = this.headers.get(n);
            if (!o) return;
            (o = o.filter((d) => i.indexOf(d) === -1)),
              o.length === 0
                ? (this.headers.delete(n), this.normalizedNames.delete(n))
                : this.headers.set(n, o);
          }
          break;
      }
    }
    addHeaderEntry(e, n) {
      let t = e.toLowerCase();
      this.maybeSetNormalizedName(e, t),
        this.headers.has(t)
          ? this.headers.get(t).push(n)
          : this.headers.set(t, [n]);
    }
    setHeaderEntries(e, n) {
      let t = (Array.isArray(n) ? n : [n]).map((i) => i.toString()),
        s = e.toLowerCase();
      this.headers.set(s, t), this.maybeSetNormalizedName(e, s);
    }
    forEach(e) {
      this.init(),
        Array.from(this.normalizedNames.keys()).forEach((n) =>
          e(this.normalizedNames.get(n), this.headers.get(n)),
        );
    }
  };
var B = class {
  encodeKey(e) {
    return te(e);
  }
  encodeValue(e) {
    return te(e);
  }
  decodeKey(e) {
    return decodeURIComponent(e);
  }
  decodeValue(e) {
    return decodeURIComponent(e);
  }
};
function Te(r, e) {
  let n = new Map();
  return (
    r.length > 0 &&
      r
        .replace(/^\?/, "")
        .split("&")
        .forEach((s) => {
          let i = s.indexOf("="),
            [o, d] =
              i == -1
                ? [e.decodeKey(s), ""]
                : [e.decodeKey(s.slice(0, i)), e.decodeValue(s.slice(i + 1))],
            a = n.get(o) || [];
          a.push(d), n.set(o, a);
        }),
    n
  );
}
var Ee = /%(\d[a-f0-9])/gi,
  ve = {
    40: "@",
    "3A": ":",
    24: "$",
    "2C": ",",
    "3B": ";",
    "3D": "=",
    "3F": "?",
    "2F": "/",
  };
function te(r) {
  return encodeURIComponent(r).replace(Ee, (e, n) => ve[n] ?? e);
}
function D(r) {
  return `${r}`;
}
var T = class r {
  map;
  encoder;
  updates = null;
  cloneFrom = null;
  constructor(e = {}) {
    if (((this.encoder = e.encoder || new B()), e.fromString)) {
      if (e.fromObject) throw new E(2805, !1);
      this.map = Te(e.fromString, this.encoder);
    } else
      e.fromObject
        ? ((this.map = new Map()),
          Object.keys(e.fromObject).forEach((n) => {
            let t = e.fromObject[n],
              s = Array.isArray(t) ? t.map(D) : [D(t)];
            this.map.set(n, s);
          }))
        : (this.map = null);
  }
  has(e) {
    return this.init(), this.map.has(e);
  }
  get(e) {
    this.init();
    let n = this.map.get(e);
    return n ? n[0] : null;
  }
  getAll(e) {
    return this.init(), this.map.get(e) || null;
  }
  keys() {
    return this.init(), Array.from(this.map.keys());
  }
  append(e, n) {
    return this.clone({ param: e, value: n, op: "a" });
  }
  appendAll(e) {
    let n = [];
    return (
      Object.keys(e).forEach((t) => {
        let s = e[t];
        Array.isArray(s)
          ? s.forEach((i) => {
              n.push({ param: t, value: i, op: "a" });
            })
          : n.push({ param: t, value: s, op: "a" });
      }),
      this.clone(n)
    );
  }
  set(e, n) {
    return this.clone({ param: e, value: n, op: "s" });
  }
  delete(e, n) {
    return this.clone({ param: e, value: n, op: "d" });
  }
  toString() {
    return (
      this.init(),
      this.keys()
        .map((e) => {
          let n = this.encoder.encodeKey(e);
          return this.map
            .get(e)
            .map((t) => n + "=" + this.encoder.encodeValue(t))
            .join("&");
        })
        .filter((e) => e !== "")
        .join("&")
    );
  }
  clone(e) {
    let n = new r({ encoder: this.encoder });
    return (
      (n.cloneFrom = this.cloneFrom || this),
      (n.updates = (this.updates || []).concat(e)),
      n
    );
  }
  init() {
    this.map === null && (this.map = new Map()),
      this.cloneFrom !== null &&
        (this.cloneFrom.init(),
        this.cloneFrom
          .keys()
          .forEach((e) => this.map.set(e, this.cloneFrom.map.get(e))),
        this.updates.forEach((e) => {
          switch (e.op) {
            case "a":
            case "s":
              let n = (e.op === "a" ? this.map.get(e.param) : void 0) || [];
              n.push(D(e.value)), this.map.set(e.param, n);
              break;
            case "d":
              if (e.value !== void 0) {
                let t = this.map.get(e.param) || [],
                  s = t.indexOf(D(e.value));
                s !== -1 && t.splice(s, 1),
                  t.length > 0
                    ? this.map.set(e.param, t)
                    : this.map.delete(e.param);
              } else {
                this.map.delete(e.param);
                break;
              }
          }
        }),
        (this.cloneFrom = this.updates = null));
  }
};
var S = class {
  map = new Map();
  set(e, n) {
    return this.map.set(e, n), this;
  }
  get(e) {
    return (
      this.map.has(e) || this.map.set(e, e.defaultValue()), this.map.get(e)
    );
  }
  delete(e) {
    return this.map.delete(e), this;
  }
  has(e) {
    return this.map.has(e);
  }
  keys() {
    return this.map.keys();
  }
};
function we(r) {
  switch (r) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP":
      return !1;
    default:
      return !0;
  }
}
function se(r) {
  return typeof ArrayBuffer < "u" && r instanceof ArrayBuffer;
}
function oe(r) {
  return typeof Blob < "u" && r instanceof Blob;
}
function ie(r) {
  return typeof FormData < "u" && r instanceof FormData;
}
function Re(r) {
  return typeof URLSearchParams < "u" && r instanceof URLSearchParams;
}
var ae = "Content-Type",
  ce = "Accept",
  he = "X-Request-URL",
  ue = "text/plain",
  fe = "application/json",
  be = `${fe}, ${ue}, */*`,
  M = class r {
    url;
    body = null;
    headers;
    context;
    reportProgress = !1;
    withCredentials = !1;
    responseType = "json";
    method;
    params;
    urlWithParams;
    transferCache;
    constructor(e, n, t, s) {
      (this.url = n), (this.method = e.toUpperCase());
      let i;
      if (
        (we(this.method) || s
          ? ((this.body = t !== void 0 ? t : null), (i = s))
          : (i = t),
        i &&
          ((this.reportProgress = !!i.reportProgress),
          (this.withCredentials = !!i.withCredentials),
          i.responseType && (this.responseType = i.responseType),
          i.headers && (this.headers = i.headers),
          i.context && (this.context = i.context),
          i.params && (this.params = i.params),
          (this.transferCache = i.transferCache)),
        (this.headers ??= new v()),
        (this.context ??= new S()),
        !this.params)
      )
        (this.params = new T()), (this.urlWithParams = n);
      else {
        let o = this.params.toString();
        if (o.length === 0) this.urlWithParams = n;
        else {
          let d = n.indexOf("?"),
            a = d === -1 ? "?" : d < n.length - 1 ? "&" : "";
          this.urlWithParams = n + a + o;
        }
      }
    }
    serializeBody() {
      return this.body === null
        ? null
        : typeof this.body == "string" ||
            se(this.body) ||
            oe(this.body) ||
            ie(this.body) ||
            Re(this.body)
          ? this.body
          : this.body instanceof T
            ? this.body.toString()
            : typeof this.body == "object" ||
                typeof this.body == "boolean" ||
                Array.isArray(this.body)
              ? JSON.stringify(this.body)
              : this.body.toString();
    }
    detectContentTypeHeader() {
      return this.body === null || ie(this.body)
        ? null
        : oe(this.body)
          ? this.body.type || null
          : se(this.body)
            ? null
            : typeof this.body == "string"
              ? ue
              : this.body instanceof T
                ? "application/x-www-form-urlencoded;charset=UTF-8"
                : typeof this.body == "object" ||
                    typeof this.body == "number" ||
                    typeof this.body == "boolean"
                  ? fe
                  : null;
    }
    clone(e = {}) {
      let n = e.method || this.method,
        t = e.url || this.url,
        s = e.responseType || this.responseType,
        i = e.transferCache ?? this.transferCache,
        o = e.body !== void 0 ? e.body : this.body,
        d = e.withCredentials ?? this.withCredentials,
        a = e.reportProgress ?? this.reportProgress,
        u = e.headers || this.headers,
        w = e.params || this.params,
        f = e.context ?? this.context;
      return (
        e.setHeaders !== void 0 &&
          (u = Object.keys(e.setHeaders).reduce(
            (R, p) => R.set(p, e.setHeaders[p]),
            u,
          )),
        e.setParams &&
          (w = Object.keys(e.setParams).reduce(
            (R, p) => R.set(p, e.setParams[p]),
            w,
          )),
        new r(n, t, o, {
          params: w,
          headers: u,
          context: f,
          reportProgress: a,
          responseType: s,
          withCredentials: d,
          transferCache: i,
        })
      );
    }
  },
  P = (function (r) {
    return (
      (r[(r.Sent = 0)] = "Sent"),
      (r[(r.UploadProgress = 1)] = "UploadProgress"),
      (r[(r.ResponseHeader = 2)] = "ResponseHeader"),
      (r[(r.DownloadProgress = 3)] = "DownloadProgress"),
      (r[(r.Response = 4)] = "Response"),
      (r[(r.User = 5)] = "User"),
      r
    );
  })(P || {}),
  I = class {
    headers;
    status;
    statusText;
    url;
    ok;
    type;
    constructor(e, n = 200, t = "OK") {
      (this.headers = e.headers || new v()),
        (this.status = e.status !== void 0 ? e.status : n),
        (this.statusText = e.statusText || t),
        (this.url = e.url || null),
        (this.ok = this.status >= 200 && this.status < 300);
    }
  },
  z = class r extends I {
    constructor(e = {}) {
      super(e);
    }
    type = P.ResponseHeader;
    clone(e = {}) {
      return new r({
        headers: e.headers || this.headers,
        status: e.status !== void 0 ? e.status : this.status,
        statusText: e.statusText || this.statusText,
        url: e.url || this.url || void 0,
      });
    }
  },
  x = class r extends I {
    body;
    constructor(e = {}) {
      super(e), (this.body = e.body !== void 0 ? e.body : null);
    }
    type = P.Response;
    clone(e = {}) {
      return new r({
        body: e.body !== void 0 ? e.body : this.body,
        headers: e.headers || this.headers,
        status: e.status !== void 0 ? e.status : this.status,
        statusText: e.statusText || this.statusText,
        url: e.url || this.url || void 0,
      });
    }
  },
  _ = class extends I {
    name = "HttpErrorResponse";
    message;
    error;
    ok = !1;
    constructor(e) {
      super(e, 0, "Unknown Error"),
        this.status >= 200 && this.status < 300
          ? (this.message = `Http failure during parsing for ${e.url || "(unknown url)"}`)
          : (this.message = `Http failure response for ${e.url || "(unknown url)"}: ${e.status} ${e.statusText}`),
        (this.error = e.error || null);
    }
  },
  Pe = 200,
  Ne = 204;
function j(r, e) {
  return {
    body: e,
    headers: r.headers,
    context: r.context,
    observe: r.observe,
    params: r.params,
    reportProgress: r.reportProgress,
    responseType: r.responseType,
    withCredentials: r.withCredentials,
    transferCache: r.transferCache,
  };
}
var Ae = (() => {
  class r {
    handler;
    constructor(n) {
      this.handler = n;
    }
    request(n, t, s = {}) {
      let i;
      if (n instanceof M) i = n;
      else {
        let a;
        s.headers instanceof v ? (a = s.headers) : (a = new v(s.headers));
        let u;
        s.params &&
          (s.params instanceof T
            ? (u = s.params)
            : (u = new T({ fromObject: s.params }))),
          (i = new M(n, t, s.body !== void 0 ? s.body : null, {
            headers: a,
            context: s.context,
            params: u,
            reportProgress: s.reportProgress,
            responseType: s.responseType || "json",
            withCredentials: s.withCredentials,
            transferCache: s.transferCache,
          }));
      }
      let o = U(i).pipe(G((a) => this.handler.handle(a)));
      if (n instanceof M || s.observe === "events") return o;
      let d = o.pipe($((a) => a instanceof x));
      switch (s.observe || "body") {
        case "body":
          switch (i.responseType) {
            case "arraybuffer":
              return d.pipe(
                N((a) => {
                  if (a.body !== null && !(a.body instanceof ArrayBuffer))
                    throw new E(2806, !1);
                  return a.body;
                }),
              );
            case "blob":
              return d.pipe(
                N((a) => {
                  if (a.body !== null && !(a.body instanceof Blob))
                    throw new E(2807, !1);
                  return a.body;
                }),
              );
            case "text":
              return d.pipe(
                N((a) => {
                  if (a.body !== null && typeof a.body != "string")
                    throw new E(2808, !1);
                  return a.body;
                }),
              );
            case "json":
            default:
              return d.pipe(N((a) => a.body));
          }
        case "response":
          return d;
        default:
          throw new E(2809, !1);
      }
    }
    delete(n, t = {}) {
      return this.request("DELETE", n, t);
    }
    get(n, t = {}) {
      return this.request("GET", n, t);
    }
    head(n, t = {}) {
      return this.request("HEAD", n, t);
    }
    jsonp(n, t) {
      return this.request("JSONP", n, {
        params: new T().append(t, "JSONP_CALLBACK"),
        observe: "body",
        responseType: "json",
      });
    }
    options(n, t = {}) {
      return this.request("OPTIONS", n, t);
    }
    patch(n, t, s = {}) {
      return this.request("PATCH", n, j(s, t));
    }
    post(n, t, s = {}) {
      return this.request("POST", n, j(s, t));
    }
    put(n, t, s = {}) {
      return this.request("PUT", n, j(s, t));
    }
    static ɵfac = function (t) {
      return new (t || r)(m(O));
    };
    static ɵprov = A({ token: r, factory: r.ɵfac });
  }
  return r;
})();
var Me = new y("");
function Oe(r, e) {
  return e(r);
}
function Ie(r, e, n) {
  return (t, s) => Q(n, () => e(t, (i) => r(i, s)));
}
var pe = new y(""),
  De = new y(""),
  ke = new y("", { providedIn: "root", factory: () => !0 });
var le = (() => {
  class r extends O {
    backend;
    injector;
    chain = null;
    pendingTasks = g(Z);
    contributeToStability = g(ke);
    constructor(n, t) {
      super(), (this.backend = n), (this.injector = t);
    }
    handle(n) {
      if (this.chain === null) {
        let t = Array.from(
          new Set([...this.injector.get(pe), ...this.injector.get(De, [])]),
        );
        this.chain = t.reduceRight((s, i) => Ie(s, i, this.injector), Oe);
      }
      if (this.contributeToStability) {
        let t = this.pendingTasks.add();
        return this.chain(n, (s) => this.backend.handle(s)).pipe(
          W(() => this.pendingTasks.remove(t)),
        );
      } else return this.chain(n, (t) => this.backend.handle(t));
    }
    static ɵfac = function (t) {
      return new (t || r)(m(k), m(Y));
    };
    static ɵprov = A({ token: r, factory: r.ɵfac });
  }
  return r;
})();
var xe = /^\)\]\}',?\n/,
  _e = RegExp(`^${he}:`, "m");
function Fe(r) {
  return "responseURL" in r && r.responseURL
    ? r.responseURL
    : _e.test(r.getAllResponseHeaders())
      ? r.getResponseHeader(he)
      : null;
}
var de = (() => {
    class r {
      xhrFactory;
      constructor(n) {
        this.xhrFactory = n;
      }
      handle(n) {
        if (n.method === "JSONP") throw new E(-2800, !1);
        let t = this.xhrFactory;
        return (t.ɵloadImpl ? V(t.ɵloadImpl()) : U(null)).pipe(
          q(
            () =>
              new J((i) => {
                let o = t.build();
                if (
                  (o.open(n.method, n.urlWithParams),
                  n.withCredentials && (o.withCredentials = !0),
                  n.headers.forEach((c, l) =>
                    o.setRequestHeader(c, l.join(",")),
                  ),
                  n.headers.has(ce) || o.setRequestHeader(ce, be),
                  !n.headers.has(ae))
                ) {
                  let c = n.detectContentTypeHeader();
                  c !== null && o.setRequestHeader(ae, c);
                }
                if (n.responseType) {
                  let c = n.responseType.toLowerCase();
                  o.responseType = c !== "json" ? c : "text";
                }
                let d = n.serializeBody(),
                  a = null,
                  u = () => {
                    if (a !== null) return a;
                    let c = o.statusText || "OK",
                      l = new v(o.getAllResponseHeaders()),
                      b = Fe(o) || n.url;
                    return (
                      (a = new z({
                        headers: l,
                        status: o.status,
                        statusText: c,
                        url: b,
                      })),
                      a
                    );
                  },
                  w = () => {
                    let { headers: c, status: l, statusText: b, url: X } = u(),
                      h = null;
                    l !== Ne &&
                      (h =
                        typeof o.response > "u" ? o.responseText : o.response),
                      l === 0 && (l = h ? Pe : 0);
                    let L = l >= 200 && l < 300;
                    if (n.responseType === "json" && typeof h == "string") {
                      let me = h;
                      h = h.replace(xe, "");
                      try {
                        h = h !== "" ? JSON.parse(h) : null;
                      } catch (ge) {
                        (h = me), L && ((L = !1), (h = { error: ge, text: h }));
                      }
                    }
                    L
                      ? (i.next(
                          new x({
                            body: h,
                            headers: c,
                            status: l,
                            statusText: b,
                            url: X || void 0,
                          }),
                        ),
                        i.complete())
                      : i.error(
                          new _({
                            error: h,
                            headers: c,
                            status: l,
                            statusText: b,
                            url: X || void 0,
                          }),
                        );
                  },
                  f = (c) => {
                    let { url: l } = u(),
                      b = new _({
                        error: c,
                        status: o.status || 0,
                        statusText: o.statusText || "Unknown Error",
                        url: l || void 0,
                      });
                    i.error(b);
                  },
                  R = !1,
                  p = (c) => {
                    R || (i.next(u()), (R = !0));
                    let l = { type: P.DownloadProgress, loaded: c.loaded };
                    c.lengthComputable && (l.total = c.total),
                      n.responseType === "text" &&
                        o.responseText &&
                        (l.partialText = o.responseText),
                      i.next(l);
                  },
                  C = (c) => {
                    let l = { type: P.UploadProgress, loaded: c.loaded };
                    c.lengthComputable && (l.total = c.total), i.next(l);
                  };
                return (
                  o.addEventListener("load", w),
                  o.addEventListener("error", f),
                  o.addEventListener("timeout", f),
                  o.addEventListener("abort", f),
                  n.reportProgress &&
                    (o.addEventListener("progress", p),
                    d !== null &&
                      o.upload &&
                      o.upload.addEventListener("progress", C)),
                  o.send(d),
                  i.next({ type: P.Sent }),
                  () => {
                    o.removeEventListener("error", f),
                      o.removeEventListener("abort", f),
                      o.removeEventListener("load", w),
                      o.removeEventListener("timeout", f),
                      n.reportProgress &&
                        (o.removeEventListener("progress", p),
                        d !== null &&
                          o.upload &&
                          o.upload.removeEventListener("progress", C)),
                      o.readyState !== o.DONE && o.abort();
                  }
                );
              }),
          ),
        );
      }
      static ɵfac = function (t) {
        return new (t || r)(m(re));
      };
      static ɵprov = A({ token: r, factory: r.ɵfac });
    }
    return r;
  })(),
  ye = new y(""),
  Le = "XSRF-TOKEN",
  Ue = new y("", { providedIn: "root", factory: () => Le }),
  je = "X-XSRF-TOKEN",
  Be = new y("", { providedIn: "root", factory: () => je }),
  F = class {},
  Se = (() => {
    class r {
      doc;
      platform;
      cookieName;
      lastCookieString = "";
      lastToken = null;
      parseCount = 0;
      constructor(n, t, s) {
        (this.doc = n), (this.platform = t), (this.cookieName = s);
      }
      getToken() {
        if (this.platform === "server") return null;
        let n = this.doc.cookie || "";
        return (
          n !== this.lastCookieString &&
            (this.parseCount++,
            (this.lastToken = ne(n, this.cookieName)),
            (this.lastCookieString = n)),
          this.lastToken
        );
      }
      static ɵfac = function (t) {
        return new (t || r)(m(ee), m(H), m(Ue));
      };
      static ɵprov = A({ token: r, factory: r.ɵfac });
    }
    return r;
  })();
function ze(r, e) {
  let n = r.url.toLowerCase();
  if (
    !g(ye) ||
    r.method === "GET" ||
    r.method === "HEAD" ||
    n.startsWith("http://") ||
    n.startsWith("https://")
  )
    return e(r);
  let t = g(F).getToken(),
    s = g(Be);
  return (
    t != null &&
      !r.headers.has(s) &&
      (r = r.clone({ headers: r.headers.set(s, t) })),
    e(r)
  );
}
function fn(...r) {
  let e = [
    Ae,
    de,
    le,
    { provide: O, useExisting: le },
    { provide: k, useFactory: () => g(Me, { optional: !0 }) ?? g(de) },
    { provide: pe, useValue: ze, multi: !0 },
    { provide: ye, useValue: !0 },
    { provide: F, useClass: Se },
  ];
  for (let n of r) e.push(...n.ɵproviders);
  return K(e);
}
export { v as a, _ as b, Ae as c, fn as d };
