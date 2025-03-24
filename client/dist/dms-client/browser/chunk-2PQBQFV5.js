import {
  a as k,
  b as Ke,
  d as Bt,
  e as D,
  f as V,
  g as we,
  h as Re,
  i as $e,
} from "./chunk-4KGF3EVT.js";
function W(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
var { toString: kt } = Object.prototype,
  { getPrototypeOf: Se } = Object,
  oe = ((e) => (t) => {
    let r = kt.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  C = (e) => ((e = e.toLowerCase()), (t) => oe(t) === e),
  se = (e) => (t) => typeof t === e,
  { isArray: q } = Array,
  v = se("undefined");
function jt(e) {
  return (
    e !== null &&
    !v(e) &&
    e.constructor !== null &&
    !v(e.constructor) &&
    T(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
var Qe = C("ArrayBuffer");
function qt(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Qe(e.buffer)),
    t
  );
}
var Ht = se("string"),
  T = se("function"),
  Ze = se("number"),
  ie = (e) => e !== null && typeof e == "object",
  It = (e) => e === !0 || e === !1,
  ne = (e) => {
    if (oe(e) !== "object") return !1;
    let t = Se(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Mt = C("Date"),
  zt = C("File"),
  Jt = C("Blob"),
  Vt = C("FileList"),
  Wt = (e) => ie(e) && T(e.pipe),
  vt = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (T(e.append) &&
          ((t = oe(e)) === "formdata" ||
            (t === "object" &&
              T(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Kt = C("URLSearchParams"),
  [$t, Xt, Gt, Qt] = ["ReadableStream", "Request", "Response", "Headers"].map(
    C,
  ),
  Zt = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function K(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let n, o;
  if ((typeof e != "object" && (e = [e]), q(e)))
    for (n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e);
  else {
    let s = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = s.length,
      c;
    for (n = 0; n < i; n++) (c = s[n]), t.call(null, e[c], c, e);
  }
}
function Ye(e, t) {
  t = t.toLowerCase();
  let r = Object.keys(e),
    n = r.length,
    o;
  for (; n-- > 0; ) if (((o = r[n]), t === o.toLowerCase())) return o;
  return null;
}
var j =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  et = (e) => !v(e) && e !== j;
function xe() {
  let { caseless: e } = (et(this) && this) || {},
    t = {},
    r = (n, o) => {
      let s = (e && Ye(t, o)) || o;
      ne(t[s]) && ne(n)
        ? (t[s] = xe(t[s], n))
        : ne(n)
          ? (t[s] = xe({}, n))
          : q(n)
            ? (t[s] = n.slice())
            : (t[s] = n);
    };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && K(arguments[n], r);
  return t;
}
var Yt = (e, t, r, { allOwnKeys: n } = {}) => (
    K(
      t,
      (o, s) => {
        r && T(o) ? (e[s] = W(o, r)) : (e[s] = o);
      },
      { allOwnKeys: n },
    ),
    e
  ),
  er = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  tr = (e, t, r, n) => {
    (e.prototype = Object.create(t.prototype, n)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      r && Object.assign(e.prototype, r);
  },
  rr = (e, t, r, n) => {
    let o,
      s,
      i,
      c = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
        (i = o[s]), (!n || n(i, e, t)) && !c[i] && ((t[i] = e[i]), (c[i] = !0));
      e = r !== !1 && Se(e);
    } while (e && (!r || r(e, t)) && e !== Object.prototype);
    return t;
  },
  nr = (e, t, r) => {
    (e = String(e)),
      (r === void 0 || r > e.length) && (r = e.length),
      (r -= t.length);
    let n = e.indexOf(t, r);
    return n !== -1 && n === r;
  },
  or = (e) => {
    if (!e) return null;
    if (q(e)) return e;
    let t = e.length;
    if (!Ze(t)) return null;
    let r = new Array(t);
    for (; t-- > 0; ) r[t] = e[t];
    return r;
  },
  sr = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Se(Uint8Array)),
  ir = (e, t) => {
    let n = (e && e[Symbol.iterator]).call(e),
      o;
    for (; (o = n.next()) && !o.done; ) {
      let s = o.value;
      t.call(e, s[0], s[1]);
    }
  },
  ar = (e, t) => {
    let r,
      n = [];
    for (; (r = e.exec(t)) !== null; ) n.push(r);
    return n;
  },
  cr = C("HTMLFormElement"),
  ur = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, n, o) {
      return n.toUpperCase() + o;
    }),
  Xe = (
    ({ hasOwnProperty: e }) =>
    (t, r) =>
      e.call(t, r)
  )(Object.prototype),
  lr = C("RegExp"),
  tt = (e, t) => {
    let r = Object.getOwnPropertyDescriptors(e),
      n = {};
    K(r, (o, s) => {
      let i;
      (i = t(o, s, e)) !== !1 && (n[s] = i || o);
    }),
      Object.defineProperties(e, n);
  },
  fr = (e) => {
    tt(e, (t, r) => {
      if (T(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
        return !1;
      let n = e[r];
      if (T(n)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + r + "'");
          });
      }
    });
  },
  dr = (e, t) => {
    let r = {},
      n = (o) => {
        o.forEach((s) => {
          r[s] = !0;
        });
      };
    return q(e) ? n(e) : n(String(e).split(t)), r;
  },
  pr = () => {},
  mr = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  ge = "abcdefghijklmnopqrstuvwxyz",
  Ge = "0123456789",
  rt = { DIGIT: Ge, ALPHA: ge, ALPHA_DIGIT: ge + ge.toUpperCase() + Ge },
  hr = (e = 16, t = rt.ALPHA_DIGIT) => {
    let r = "",
      { length: n } = t;
    for (; e--; ) r += t[(Math.random() * n) | 0];
    return r;
  };
function yr(e) {
  return !!(
    e &&
    T(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
var br = (e) => {
    let t = new Array(10),
      r = (n, o) => {
        if (ie(n)) {
          if (t.indexOf(n) >= 0) return;
          if (!("toJSON" in n)) {
            t[o] = n;
            let s = q(n) ? [] : {};
            return (
              K(n, (i, c) => {
                let m = r(i, o + 1);
                !v(m) && (s[c] = m);
              }),
              (t[o] = void 0),
              s
            );
          }
        }
        return n;
      };
    return r(e, 0);
  },
  Er = C("AsyncFunction"),
  wr = (e) => e && (ie(e) || T(e)) && T(e.then) && T(e.catch),
  nt = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((r, n) => (
            j.addEventListener(
              "message",
              ({ source: o, data: s }) => {
                o === j && s === r && n.length && n.shift()();
              },
              !1,
            ),
            (o) => {
              n.push(o), j.postMessage(r, "*");
            }
          ))(`axios@${Math.random()}`, [])
        : (r) => setTimeout(r))(
    typeof setImmediate == "function",
    T(j.postMessage),
  ),
  Rr =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(j)
      : (typeof process < "u" && process.nextTick) || nt,
  a = {
    isArray: q,
    isArrayBuffer: Qe,
    isBuffer: jt,
    isFormData: vt,
    isArrayBufferView: qt,
    isString: Ht,
    isNumber: Ze,
    isBoolean: It,
    isObject: ie,
    isPlainObject: ne,
    isReadableStream: $t,
    isRequest: Xt,
    isResponse: Gt,
    isHeaders: Qt,
    isUndefined: v,
    isDate: Mt,
    isFile: zt,
    isBlob: Jt,
    isRegExp: lr,
    isFunction: T,
    isStream: Wt,
    isURLSearchParams: Kt,
    isTypedArray: sr,
    isFileList: Vt,
    forEach: K,
    merge: xe,
    extend: Yt,
    trim: Zt,
    stripBOM: er,
    inherits: tr,
    toFlatObject: rr,
    kindOf: oe,
    kindOfTest: C,
    endsWith: nr,
    toArray: or,
    forEachEntry: ir,
    matchAll: ar,
    isHTMLForm: cr,
    hasOwnProperty: Xe,
    hasOwnProp: Xe,
    reduceDescriptors: tt,
    freezeMethods: fr,
    toObjectSet: dr,
    toCamelCase: ur,
    noop: pr,
    toFiniteNumber: mr,
    findKey: Ye,
    global: j,
    isContextDefined: et,
    ALPHABET: rt,
    generateString: hr,
    isSpecCompliantForm: yr,
    toJSONObject: br,
    isAsyncFn: Er,
    isThenable: wr,
    setImmediate: nt,
    asap: Rr,
  };
function H(e, t, r, n, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    r && (this.config = r),
    n && (this.request = n),
    o && ((this.response = o), (this.status = o.status ? o.status : null));
}
a.inherits(H, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
var ot = H.prototype,
  st = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  st[e] = { value: e };
});
Object.defineProperties(H, st);
Object.defineProperty(ot, "isAxiosError", { value: !0 });
H.from = (e, t, r, n, o, s) => {
  let i = Object.create(ot);
  return (
    a.toFlatObject(
      e,
      i,
      function (m) {
        return m !== Error.prototype;
      },
      (c) => c !== "isAxiosError",
    ),
    H.call(i, e.message, t, r, n, o),
    (i.cause = e),
    (i.name = e.name),
    s && Object.assign(i, s),
    i
  );
};
var h = H;
var ae = null;
function Ae(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function at(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function it(e, t, r) {
  return e
    ? e
        .concat(t)
        .map(function (o, s) {
          return (o = at(o)), !r && s ? "[" + o + "]" : o;
        })
        .join(r ? "." : "")
    : t;
}
function gr(e) {
  return a.isArray(e) && !e.some(Ae);
}
var xr = a.toFlatObject(a, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Sr(e, t, r) {
  if (!a.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new (ae || FormData)()),
    (r = a.toFlatObject(
      r,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (y, p) {
        return !a.isUndefined(p[y]);
      },
    ));
  let n = r.metaTokens,
    o = r.visitor || l,
    s = r.dots,
    i = r.indexes,
    m = (r.Blob || (typeof Blob < "u" && Blob)) && a.isSpecCompliantForm(t);
  if (!a.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(d) {
    if (d === null) return "";
    if (a.isDate(d)) return d.toISOString();
    if (!m && a.isBlob(d))
      throw new h("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(d) || a.isTypedArray(d)
      ? m && typeof Blob == "function"
        ? new Blob([d])
        : Buffer.from(d)
      : d;
  }
  function l(d, y, p) {
    let R = d;
    if (d && !p && typeof d == "object") {
      if (a.endsWith(y, "{}"))
        (y = n ? y : y.slice(0, -2)), (d = JSON.stringify(d));
      else if (
        (a.isArray(d) && gr(d)) ||
        ((a.isFileList(d) || a.endsWith(y, "[]")) && (R = a.toArray(d)))
      )
        return (
          (y = at(y)),
          R.forEach(function (A, L) {
            !(a.isUndefined(A) || A === null) &&
              t.append(
                i === !0 ? it([y], L, s) : i === null ? y : y + "[]",
                u(A),
              );
          }),
          !1
        );
    }
    return Ae(d) ? !0 : (t.append(it(p, y, s), u(d)), !1);
  }
  let f = [],
    b = Object.assign(xr, {
      defaultVisitor: l,
      convertValue: u,
      isVisitable: Ae,
    });
  function w(d, y) {
    if (!a.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      f.push(d),
        a.forEach(d, function (R, x) {
          (!(a.isUndefined(R) || R === null) &&
            o.call(t, R, a.isString(x) ? x.trim() : x, y, b)) === !0 &&
            w(R, y ? y.concat(x) : [x]);
        }),
        f.pop();
    }
  }
  if (!a.isObject(e)) throw new TypeError("data must be an object");
  return w(e), t;
}
var U = Sr;
function ct(e) {
  let t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (n) {
    return t[n];
  });
}
function ut(e, t) {
  (this._pairs = []), e && U(e, this, t);
}
var lt = ut.prototype;
lt.append = function (t, r) {
  this._pairs.push([t, r]);
};
lt.toString = function (t) {
  let r = t
    ? function (n) {
        return t.call(this, n, ct);
      }
    : ct;
  return this._pairs
    .map(function (o) {
      return r(o[0]) + "=" + r(o[1]);
    }, "")
    .join("&");
};
var ce = ut;
function Ar(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function $(e, t, r) {
  if (!t) return e;
  let n = (r && r.encode) || Ar;
  a.isFunction(r) && (r = { serialize: r });
  let o = r && r.serialize,
    s;
  if (
    (o
      ? (s = o(t, r))
      : (s = a.isURLSearchParams(t) ? t.toString() : new ce(t, r).toString(n)),
    s)
  ) {
    let i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
var Oe = class {
    constructor() {
      this.handlers = [];
    }
    use(t, r, n) {
      return (
        this.handlers.push({
          fulfilled: t,
          rejected: r,
          synchronous: n ? n.synchronous : !1,
          runWhen: n ? n.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }
    eject(t) {
      this.handlers[t] && (this.handlers[t] = null);
    }
    clear() {
      this.handlers && (this.handlers = []);
    }
    forEach(t) {
      a.forEach(this.handlers, function (n) {
        n !== null && t(n);
      });
    }
  },
  Te = Oe;
var ue = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
};
var ft = typeof URLSearchParams < "u" ? URLSearchParams : ce;
var dt = typeof FormData < "u" ? FormData : null;
var pt = typeof Blob < "u" ? Blob : null;
var mt = {
  isBrowser: !0,
  classes: { URLSearchParams: ft, FormData: dt, Blob: pt },
  protocols: ["http", "https", "file", "blob", "url", "data"],
};
var Pe = {};
Bt(Pe, {
  hasBrowserEnv: () => Ne,
  hasStandardBrowserEnv: () => Or,
  hasStandardBrowserWebWorkerEnv: () => Tr,
  navigator: () => Ce,
  origin: () => Cr,
});
var Ne = typeof window < "u" && typeof document < "u",
  Ce = (typeof navigator == "object" && navigator) || void 0,
  Or =
    Ne &&
    (!Ce || ["ReactNative", "NativeScript", "NS"].indexOf(Ce.product) < 0),
  Tr =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Cr = (Ne && window.location.href) || "http://localhost";
var E = k(k({}, Pe), mt);
function Fe(e, t) {
  return U(
    e,
    new E.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (r, n, o, s) {
          return E.isNode && a.isBuffer(r)
            ? (this.append(n, r.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function Nr(e) {
  return a
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function Pr(e) {
  let t = {},
    r = Object.keys(e),
    n,
    o = r.length,
    s;
  for (n = 0; n < o; n++) (s = r[n]), (t[s] = e[s]);
  return t;
}
function Fr(e) {
  function t(r, n, o, s) {
    let i = r[s++];
    if (i === "__proto__") return !0;
    let c = Number.isFinite(+i),
      m = s >= r.length;
    return (
      (i = !i && a.isArray(o) ? o.length : i),
      m
        ? (a.hasOwnProp(o, i) ? (o[i] = [o[i], n]) : (o[i] = n), !c)
        : ((!o[i] || !a.isObject(o[i])) && (o[i] = []),
          t(r, n, o[i], s) && a.isArray(o[i]) && (o[i] = Pr(o[i])),
          !c)
    );
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    let r = {};
    return (
      a.forEachEntry(e, (n, o) => {
        t(Nr(n), o, r, 0);
      }),
      r
    );
  }
  return null;
}
var le = Fr;
function Lr(e, t, r) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError") throw n;
    }
  return (r || JSON.stringify)(e);
}
var Le = {
  transitional: ue,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, r) {
      let n = r.getContentType() || "",
        o = n.indexOf("application/json") > -1,
        s = a.isObject(t);
      if ((s && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t)))
        return o ? JSON.stringify(le(t)) : t;
      if (
        a.isArrayBuffer(t) ||
        a.isBuffer(t) ||
        a.isStream(t) ||
        a.isFile(t) ||
        a.isBlob(t) ||
        a.isReadableStream(t)
      )
        return t;
      if (a.isArrayBufferView(t)) return t.buffer;
      if (a.isURLSearchParams(t))
        return (
          r.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let c;
      if (s) {
        if (n.indexOf("application/x-www-form-urlencoded") > -1)
          return Fe(t, this.formSerializer).toString();
        if ((c = a.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
          let m = this.env && this.env.FormData;
          return U(c ? { "files[]": t } : t, m && new m(), this.formSerializer);
        }
      }
      return s || o ? (r.setContentType("application/json", !1), Lr(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      let r = this.transitional || Le.transitional,
        n = r && r.forcedJSONParsing,
        o = this.responseType === "json";
      if (a.isResponse(t) || a.isReadableStream(t)) return t;
      if (t && a.isString(t) && ((n && !this.responseType) || o)) {
        let i = !(r && r.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (c) {
          if (i)
            throw c.name === "SyntaxError"
              ? h.from(c, h.ERR_BAD_RESPONSE, this, null, this.response)
              : c;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: E.classes.FormData, Blob: E.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Le.headers[e] = {};
});
var I = Le;
var Dr = a.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  ht = (e) => {
    let t = {},
      r,
      n,
      o;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (i) {
            (o = i.indexOf(":")),
              (r = i.substring(0, o).trim().toLowerCase()),
              (n = i.substring(o + 1).trim()),
              !(!r || (t[r] && Dr[r])) &&
                (r === "set-cookie"
                  ? t[r]
                    ? t[r].push(n)
                    : (t[r] = [n])
                  : (t[r] = t[r] ? t[r] + ", " + n : n));
          }),
      t
    );
  };
var yt = Symbol("internals");
function X(e) {
  return e && String(e).trim().toLowerCase();
}
function fe(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(fe) : String(e);
}
function _r(e) {
  let t = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,
    n;
  for (; (n = r.exec(e)); ) t[n[1]] = n[2];
  return t;
}
var Ur = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function De(e, t, r, n, o) {
  if (a.isFunction(n)) return n.call(this, t, r);
  if ((o && (t = r), !!a.isString(t))) {
    if (a.isString(n)) return t.indexOf(n) !== -1;
    if (a.isRegExp(n)) return n.test(t);
  }
}
function Br(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function kr(e, t) {
  let r = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function (o, s, i) {
        return this[n].call(this, t, o, s, i);
      },
      configurable: !0,
    });
  });
}
var M = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    let o = this;
    function s(c, m, u) {
      let l = X(m);
      if (!l) throw new Error("header name must be a non-empty string");
      let f = a.findKey(o, l);
      (!f || o[f] === void 0 || u === !0 || (u === void 0 && o[f] !== !1)) &&
        (o[f || m] = fe(c));
    }
    let i = (c, m) => a.forEach(c, (u, l) => s(u, l, m));
    if (a.isPlainObject(t) || t instanceof this.constructor) i(t, r);
    else if (a.isString(t) && (t = t.trim()) && !Ur(t)) i(ht(t), r);
    else if (a.isHeaders(t)) for (let [c, m] of t.entries()) s(m, c, n);
    else t != null && s(r, t, n);
    return this;
  }
  get(t, r) {
    if (((t = X(t)), t)) {
      let n = a.findKey(this, t);
      if (n) {
        let o = this[n];
        if (!r) return o;
        if (r === !0) return _r(o);
        if (a.isFunction(r)) return r.call(this, o, n);
        if (a.isRegExp(r)) return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (((t = X(t)), t)) {
      let n = a.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || De(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    let n = this,
      o = !1;
    function s(i) {
      if (((i = X(i)), i)) {
        let c = a.findKey(n, i);
        c && (!r || De(n, n[c], c, r)) && (delete n[c], (o = !0));
      }
    }
    return a.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    let r = Object.keys(this),
      n = r.length,
      o = !1;
    for (; n--; ) {
      let s = r[n];
      (!t || De(this, this[s], s, t, !0)) && (delete this[s], (o = !0));
    }
    return o;
  }
  normalize(t) {
    let r = this,
      n = {};
    return (
      a.forEach(this, (o, s) => {
        let i = a.findKey(n, s);
        if (i) {
          (r[i] = fe(o)), delete r[s];
          return;
        }
        let c = t ? Br(s) : String(s).trim();
        c !== s && delete r[s], (r[c] = fe(o)), (n[c] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    let r = Object.create(null);
    return (
      a.forEach(this, (n, o) => {
        n != null && n !== !1 && (r[o] = t && a.isArray(n) ? n.join(", ") : n);
      }),
      r
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    let n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    let n = (this[yt] = this[yt] = { accessors: {} }).accessors,
      o = this.prototype;
    function s(i) {
      let c = X(i);
      n[c] || (kr(o, i), (n[c] = !0));
    }
    return a.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
M.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
a.reduceDescriptors(M.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    },
  };
});
a.freezeMethods(M);
var S = M;
function G(e, t) {
  let r = this || I,
    n = t || r,
    o = S.from(n.headers),
    s = n.data;
  return (
    a.forEach(e, function (c) {
      s = c.call(r, s, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    s
  );
}
function Q(e) {
  return !!(e && e.__CANCEL__);
}
function bt(e, t, r) {
  h.call(this, e ?? "canceled", h.ERR_CANCELED, t, r),
    (this.name = "CanceledError");
}
a.inherits(bt, h, { __CANCEL__: !0 });
var P = bt;
function Z(e, t, r) {
  let n = r.config.validateStatus;
  !r.status || !n || n(r.status)
    ? e(r)
    : t(
        new h(
          "Request failed with status code " + r.status,
          [h.ERR_BAD_REQUEST, h.ERR_BAD_RESPONSE][
            Math.floor(r.status / 100) - 4
          ],
          r.config,
          r.request,
          r,
        ),
      );
}
function _e(e) {
  let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function jr(e, t) {
  e = e || 10;
  let r = new Array(e),
    n = new Array(e),
    o = 0,
    s = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (m) {
      let u = Date.now(),
        l = n[s];
      i || (i = u), (r[o] = m), (n[o] = u);
      let f = s,
        b = 0;
      for (; f !== o; ) (b += r[f++]), (f = f % e);
      if (((o = (o + 1) % e), o === s && (s = (s + 1) % e), u - i < t)) return;
      let w = l && u - l;
      return w ? Math.round((b * 1e3) / w) : void 0;
    }
  );
}
var Et = jr;
function qr(e, t) {
  let r = 0,
    n = 1e3 / t,
    o,
    s,
    i = (u, l = Date.now()) => {
      (r = l), (o = null), s && (clearTimeout(s), (s = null)), e.apply(null, u);
    };
  return [
    (...u) => {
      let l = Date.now(),
        f = l - r;
      f >= n
        ? i(u, l)
        : ((o = u),
          s ||
            (s = setTimeout(() => {
              (s = null), i(o);
            }, n - f)));
    },
    () => o && i(o),
  ];
}
var wt = qr;
var z = (e, t, r = 3) => {
    let n = 0,
      o = Et(50, 250);
    return wt((s) => {
      let i = s.loaded,
        c = s.lengthComputable ? s.total : void 0,
        m = i - n,
        u = o(m),
        l = i <= c;
      n = i;
      let f = {
        loaded: i,
        total: c,
        progress: c ? i / c : void 0,
        bytes: m,
        rate: u || void 0,
        estimated: u && c && l ? (c - i) / u : void 0,
        event: s,
        lengthComputable: c != null,
        [t ? "download" : "upload"]: !0,
      };
      e(f);
    }, r);
  },
  Ue = (e, t) => {
    let r = e != null;
    return [(n) => t[0]({ lengthComputable: r, total: e, loaded: n }), t[1]];
  },
  Be =
    (e) =>
    (...t) =>
      a.asap(() => e(...t));
var Rt = E.hasStandardBrowserEnv
  ? ((e, t) => (r) => (
      (r = new URL(r, E.origin)),
      e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)
    ))(
      new URL(E.origin),
      E.navigator && /(msie|trident)/i.test(E.navigator.userAgent),
    )
  : () => !0;
var gt = E.hasStandardBrowserEnv
  ? {
      write(e, t, r, n, o, s) {
        let i = [e + "=" + encodeURIComponent(t)];
        a.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()),
          a.isString(n) && i.push("path=" + n),
          a.isString(o) && i.push("domain=" + o),
          s === !0 && i.push("secure"),
          (document.cookie = i.join("; "));
      },
      read(e) {
        let t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function ke(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function je(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Y(e, t) {
  return e && !ke(t) ? je(e, t) : t;
}
var xt = (e) => (e instanceof S ? k({}, e) : e);
function N(e, t) {
  t = t || {};
  let r = {};
  function n(u, l, f, b) {
    return a.isPlainObject(u) && a.isPlainObject(l)
      ? a.merge.call({ caseless: b }, u, l)
      : a.isPlainObject(l)
        ? a.merge({}, l)
        : a.isArray(l)
          ? l.slice()
          : l;
  }
  function o(u, l, f, b) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u)) return n(void 0, u, f, b);
    } else return n(u, l, f, b);
  }
  function s(u, l) {
    if (!a.isUndefined(l)) return n(void 0, l);
  }
  function i(u, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u)) return n(void 0, u);
    } else return n(void 0, l);
  }
  function c(u, l, f) {
    if (f in t) return n(u, l);
    if (f in e) return n(void 0, u);
  }
  let m = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (u, l, f) => o(xt(u), xt(l), f, !0),
  };
  return (
    a.forEach(Object.keys(Object.assign({}, e, t)), function (l) {
      let f = m[l] || o,
        b = f(e[l], t[l], l);
      (a.isUndefined(b) && f !== c) || (r[l] = b);
    }),
    r
  );
}
var de = (e) => {
  let t = N({}, e),
    {
      data: r,
      withXSRFToken: n,
      xsrfHeaderName: o,
      xsrfCookieName: s,
      headers: i,
      auth: c,
    } = t;
  (t.headers = i = S.from(i)),
    (t.url = $(Y(t.baseURL, t.url), e.params, e.paramsSerializer)),
    c &&
      i.set(
        "Authorization",
        "Basic " +
          btoa(
            (c.username || "") +
              ":" +
              (c.password ? unescape(encodeURIComponent(c.password)) : ""),
          ),
      );
  let m;
  if (a.isFormData(r)) {
    if (E.hasStandardBrowserEnv || E.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((m = i.getContentType()) !== !1) {
      let [u, ...l] = m
        ? m
            .split(";")
            .map((f) => f.trim())
            .filter(Boolean)
        : [];
      i.setContentType([u || "multipart/form-data", ...l].join("; "));
    }
  }
  if (
    E.hasStandardBrowserEnv &&
    (n && a.isFunction(n) && (n = n(t)), n || (n !== !1 && Rt(t.url)))
  ) {
    let u = o && s && gt.read(s);
    u && i.set(o, u);
  }
  return t;
};
var Hr = typeof XMLHttpRequest < "u",
  St =
    Hr &&
    function (e) {
      return new Promise(function (r, n) {
        let o = de(e),
          s = o.data,
          i = S.from(o.headers).normalize(),
          { responseType: c, onUploadProgress: m, onDownloadProgress: u } = o,
          l,
          f,
          b,
          w,
          d;
        function y() {
          w && w(),
            d && d(),
            o.cancelToken && o.cancelToken.unsubscribe(l),
            o.signal && o.signal.removeEventListener("abort", l);
        }
        let p = new XMLHttpRequest();
        p.open(o.method.toUpperCase(), o.url, !0), (p.timeout = o.timeout);
        function R() {
          if (!p) return;
          let A = S.from(
              "getAllResponseHeaders" in p && p.getAllResponseHeaders(),
            ),
            O = {
              data:
                !c || c === "text" || c === "json"
                  ? p.responseText
                  : p.response,
              status: p.status,
              statusText: p.statusText,
              headers: A,
              config: e,
              request: p,
            };
          Z(
            function (B) {
              r(B), y();
            },
            function (B) {
              n(B), y();
            },
            O,
          ),
            (p = null);
        }
        "onloadend" in p
          ? (p.onloadend = R)
          : (p.onreadystatechange = function () {
              !p ||
                p.readyState !== 4 ||
                (p.status === 0 &&
                  !(p.responseURL && p.responseURL.indexOf("file:") === 0)) ||
                setTimeout(R);
            }),
          (p.onabort = function () {
            p &&
              (n(new h("Request aborted", h.ECONNABORTED, e, p)), (p = null));
          }),
          (p.onerror = function () {
            n(new h("Network Error", h.ERR_NETWORK, e, p)), (p = null);
          }),
          (p.ontimeout = function () {
            let L = o.timeout
                ? "timeout of " + o.timeout + "ms exceeded"
                : "timeout exceeded",
              O = o.transitional || ue;
            o.timeoutErrorMessage && (L = o.timeoutErrorMessage),
              n(
                new h(
                  L,
                  O.clarifyTimeoutError ? h.ETIMEDOUT : h.ECONNABORTED,
                  e,
                  p,
                ),
              ),
              (p = null);
          }),
          s === void 0 && i.setContentType(null),
          "setRequestHeader" in p &&
            a.forEach(i.toJSON(), function (L, O) {
              p.setRequestHeader(O, L);
            }),
          a.isUndefined(o.withCredentials) ||
            (p.withCredentials = !!o.withCredentials),
          c && c !== "json" && (p.responseType = o.responseType),
          u && (([b, d] = z(u, !0)), p.addEventListener("progress", b)),
          m &&
            p.upload &&
            (([f, w] = z(m)),
            p.upload.addEventListener("progress", f),
            p.upload.addEventListener("loadend", w)),
          (o.cancelToken || o.signal) &&
            ((l = (A) => {
              p &&
                (n(!A || A.type ? new P(null, e, p) : A),
                p.abort(),
                (p = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(l),
            o.signal &&
              (o.signal.aborted ? l() : o.signal.addEventListener("abort", l)));
        let x = _e(o.url);
        if (x && E.protocols.indexOf(x) === -1) {
          n(new h("Unsupported protocol " + x + ":", h.ERR_BAD_REQUEST, e));
          return;
        }
        p.send(s || null);
      });
    };
var Ir = (e, t) => {
    let { length: r } = (e = e ? e.filter(Boolean) : []);
    if (t || r) {
      let n = new AbortController(),
        o,
        s = function (u) {
          if (!o) {
            (o = !0), c();
            let l = u instanceof Error ? u : this.reason;
            n.abort(
              l instanceof h ? l : new P(l instanceof Error ? l.message : l),
            );
          }
        },
        i =
          t &&
          setTimeout(() => {
            (i = null), s(new h(`timeout ${t} of ms exceeded`, h.ETIMEDOUT));
          }, t),
        c = () => {
          e &&
            (i && clearTimeout(i),
            (i = null),
            e.forEach((u) => {
              u.unsubscribe
                ? u.unsubscribe(s)
                : u.removeEventListener("abort", s);
            }),
            (e = null));
        };
      e.forEach((u) => u.addEventListener("abort", s));
      let { signal: m } = n;
      return (m.unsubscribe = () => a.asap(c)), m;
    }
  },
  At = Ir;
var Mr = function* (e, t) {
    let r = e.byteLength;
    if (!t || r < t) {
      yield e;
      return;
    }
    let n = 0,
      o;
    for (; n < r; ) (o = n + t), yield e.slice(n, o), (n = o);
  },
  zr = function (e, t) {
    return we(this, null, function* () {
      try {
        for (
          var r = $e(Jr(e)), n, o, s;
          (n = !(o = yield new V(r.next())).done);
          n = !1
        ) {
          let i = o.value;
          yield* Re(Mr(i, t));
        }
      } catch {
        s = [o];
      } finally {
        try {
          n && (o = r.return) && (yield new V(o.call(r)));
        } finally {
          if (s) throw s[0];
        }
      }
    });
  },
  Jr = function (e) {
    return we(this, null, function* () {
      if (e[Symbol.asyncIterator]) {
        yield* Re(e);
        return;
      }
      let t = e.getReader();
      try {
        for (;;) {
          let { done: r, value: n } = yield new V(t.read());
          if (r) break;
          yield n;
        }
      } finally {
        yield new V(t.cancel());
      }
    });
  },
  qe = (e, t, r, n) => {
    let o = zr(e, t),
      s = 0,
      i,
      c = (u) => {
        i || ((i = !0), n && n(u));
      };
    return new ReadableStream(
      {
        pull(u) {
          return D(this, null, function* () {
            try {
              let { done: l, value: f } = yield o.next();
              if (l) {
                c(), u.close();
                return;
              }
              let b = f.byteLength;
              if (r) {
                let w = (s += b);
                r(w);
              }
              u.enqueue(new Uint8Array(f));
            } catch (l) {
              throw (c(l), l);
            }
          });
        },
        cancel(u) {
          return c(u), o.return();
        },
      },
      { highWaterMark: 2 },
    );
  };
var me =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Tt = me && typeof ReadableStream == "function",
  Vr =
    me &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : (e) =>
          D(void 0, null, function* () {
            return new Uint8Array(yield new Response(e).arrayBuffer());
          })),
  Ct = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  Wr =
    Tt &&
    Ct(() => {
      let e = !1,
        t = new Request(E.origin, {
          body: new ReadableStream(),
          method: "POST",
          get duplex() {
            return (e = !0), "half";
          },
        }).headers.has("Content-Type");
      return e && !t;
    }),
  Ot = 64 * 1024,
  He = Tt && Ct(() => a.isReadableStream(new Response("").body)),
  pe = { stream: He && ((e) => e.body) };
me &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !pe[t] &&
        (pe[t] = a.isFunction(e[t])
          ? (r) => r[t]()
          : (r, n) => {
              throw new h(
                `Response type '${t}' is not supported`,
                h.ERR_NOT_SUPPORT,
                n,
              );
            });
    });
  })(new Response());
var vr = (e) =>
    D(void 0, null, function* () {
      if (e == null) return 0;
      if (a.isBlob(e)) return e.size;
      if (a.isSpecCompliantForm(e))
        return (yield new Request(E.origin, {
          method: "POST",
          body: e,
        }).arrayBuffer()).byteLength;
      if (a.isArrayBufferView(e) || a.isArrayBuffer(e)) return e.byteLength;
      if ((a.isURLSearchParams(e) && (e = e + ""), a.isString(e)))
        return (yield Vr(e)).byteLength;
    }),
  Kr = (e, t) =>
    D(void 0, null, function* () {
      let r = a.toFiniteNumber(e.getContentLength());
      return r ?? vr(t);
    }),
  Nt =
    me &&
    ((e) =>
      D(void 0, null, function* () {
        let {
          url: t,
          method: r,
          data: n,
          signal: o,
          cancelToken: s,
          timeout: i,
          onDownloadProgress: c,
          onUploadProgress: m,
          responseType: u,
          headers: l,
          withCredentials: f = "same-origin",
          fetchOptions: b,
        } = de(e);
        u = u ? (u + "").toLowerCase() : "text";
        let w = At([o, s && s.toAbortSignal()], i),
          d,
          y =
            w &&
            w.unsubscribe &&
            (() => {
              w.unsubscribe();
            }),
          p;
        try {
          if (
            m &&
            Wr &&
            r !== "get" &&
            r !== "head" &&
            (p = yield Kr(l, n)) !== 0
          ) {
            let O = new Request(t, { method: "POST", body: n, duplex: "half" }),
              _;
            if (
              (a.isFormData(n) &&
                (_ = O.headers.get("content-type")) &&
                l.setContentType(_),
              O.body)
            ) {
              let [B, re] = Ue(p, z(Be(m)));
              n = qe(O.body, Ot, B, re);
            }
          }
          a.isString(f) || (f = f ? "include" : "omit");
          let R = "credentials" in Request.prototype;
          d = new Request(
            t,
            Ke(k({}, b), {
              signal: w,
              method: r.toUpperCase(),
              headers: l.normalize().toJSON(),
              body: n,
              duplex: "half",
              credentials: R ? f : void 0,
            }),
          );
          let x = yield fetch(d),
            A = He && (u === "stream" || u === "response");
          if (He && (c || (A && y))) {
            let O = {};
            ["status", "statusText", "headers"].forEach((ve) => {
              O[ve] = x[ve];
            });
            let _ = a.toFiniteNumber(x.headers.get("content-length")),
              [B, re] = (c && Ue(_, z(Be(c), !0))) || [];
            x = new Response(
              qe(x.body, Ot, B, () => {
                re && re(), y && y();
              }),
              O,
            );
          }
          u = u || "text";
          let L = yield pe[a.findKey(pe, u) || "text"](x, e);
          return (
            !A && y && y(),
            yield new Promise((O, _) => {
              Z(O, _, {
                data: L,
                headers: S.from(x.headers),
                status: x.status,
                statusText: x.statusText,
                config: e,
                request: d,
              });
            })
          );
        } catch (R) {
          throw (
            (y && y(),
            R && R.name === "TypeError" && /fetch/i.test(R.message)
              ? Object.assign(new h("Network Error", h.ERR_NETWORK, e, d), {
                  cause: R.cause || R,
                })
              : h.from(R, R && R.code, e, d))
          );
        }
      }));
var Ie = { http: ae, xhr: St, fetch: Nt };
a.forEach(Ie, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
var Pt = (e) => `- ${e}`,
  $r = (e) => a.isFunction(e) || e === null || e === !1,
  he = {
    getAdapter: (e) => {
      e = a.isArray(e) ? e : [e];
      let { length: t } = e,
        r,
        n,
        o = {};
      for (let s = 0; s < t; s++) {
        r = e[s];
        let i;
        if (
          ((n = r),
          !$r(r) && ((n = Ie[(i = String(r)).toLowerCase()]), n === void 0))
        )
          throw new h(`Unknown adapter '${i}'`);
        if (n) break;
        o[i || "#" + s] = n;
      }
      if (!n) {
        let s = Object.entries(o).map(
            ([c, m]) =>
              `adapter ${c} ` +
              (m === !1
                ? "is not supported by the environment"
                : "is not available in the build"),
          ),
          i = t
            ? s.length > 1
              ? `since :
` +
                s.map(Pt).join(`
`)
              : " " + Pt(s[0])
            : "as no adapter specified";
        throw new h(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT",
        );
      }
      return n;
    },
    adapters: Ie,
  };
function Me(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new P(null, e);
}
function ye(e) {
  return (
    Me(e),
    (e.headers = S.from(e.headers)),
    (e.data = G.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    he
      .getAdapter(e.adapter || I.adapter)(e)
      .then(
        function (n) {
          return (
            Me(e),
            (n.data = G.call(e, e.transformResponse, n)),
            (n.headers = S.from(n.headers)),
            n
          );
        },
        function (n) {
          return (
            Q(n) ||
              (Me(e),
              n &&
                n.response &&
                ((n.response.data = G.call(e, e.transformResponse, n.response)),
                (n.response.headers = S.from(n.response.headers)))),
            Promise.reject(n)
          );
        },
      )
  );
}
var be = "1.7.9";
var Ee = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Ee[e] = function (n) {
      return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
var Ft = {};
Ee.transitional = function (t, r, n) {
  function o(s, i) {
    return (
      "[Axios v" +
      be +
      "] Transitional option '" +
      s +
      "'" +
      i +
      (n ? ". " + n : "")
    );
  }
  return (s, i, c) => {
    if (t === !1)
      throw new h(
        o(i, " has been removed" + (r ? " in " + r : "")),
        h.ERR_DEPRECATED,
      );
    return (
      r &&
        !Ft[i] &&
        ((Ft[i] = !0),
        console.warn(
          o(
            i,
            " has been deprecated since v" +
              r +
              " and will be removed in the near future",
          ),
        )),
      t ? t(s, i, c) : !0
    );
  };
};
Ee.spelling = function (t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function Xr(e, t, r) {
  if (typeof e != "object")
    throw new h("options must be an object", h.ERR_BAD_OPTION_VALUE);
  let n = Object.keys(e),
    o = n.length;
  for (; o-- > 0; ) {
    let s = n[o],
      i = t[s];
    if (i) {
      let c = e[s],
        m = c === void 0 || i(c, s, e);
      if (m !== !0)
        throw new h("option " + s + " must be " + m, h.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new h("Unknown option " + s, h.ERR_BAD_OPTION);
  }
}
var ee = { assertOptions: Xr, validators: Ee };
var F = ee.validators,
  J = class {
    constructor(t) {
      (this.defaults = t),
        (this.interceptors = { request: new Te(), response: new Te() });
    }
    request(t, r) {
      return D(this, null, function* () {
        try {
          return yield this._request(t, r);
        } catch (n) {
          if (n instanceof Error) {
            let o = {};
            Error.captureStackTrace
              ? Error.captureStackTrace(o)
              : (o = new Error());
            let s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
            try {
              n.stack
                ? s &&
                  !String(n.stack).endsWith(s.replace(/^.+\n.+\n/, "")) &&
                  (n.stack +=
                    `
` + s)
                : (n.stack = s);
            } catch {}
          }
          throw n;
        }
      });
    }
    _request(t, r) {
      typeof t == "string" ? ((r = r || {}), (r.url = t)) : (r = t || {}),
        (r = N(this.defaults, r));
      let { transitional: n, paramsSerializer: o, headers: s } = r;
      n !== void 0 &&
        ee.assertOptions(
          n,
          {
            silentJSONParsing: F.transitional(F.boolean),
            forcedJSONParsing: F.transitional(F.boolean),
            clarifyTimeoutError: F.transitional(F.boolean),
          },
          !1,
        ),
        o != null &&
          (a.isFunction(o)
            ? (r.paramsSerializer = { serialize: o })
            : ee.assertOptions(
                o,
                { encode: F.function, serialize: F.function },
                !0,
              )),
        ee.assertOptions(
          r,
          {
            baseUrl: F.spelling("baseURL"),
            withXsrfToken: F.spelling("withXSRFToken"),
          },
          !0,
        ),
        (r.method = (r.method || this.defaults.method || "get").toLowerCase());
      let i = s && a.merge(s.common, s[r.method]);
      s &&
        a.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (d) => {
            delete s[d];
          },
        ),
        (r.headers = S.concat(i, s));
      let c = [],
        m = !0;
      this.interceptors.request.forEach(function (y) {
        (typeof y.runWhen == "function" && y.runWhen(r) === !1) ||
          ((m = m && y.synchronous), c.unshift(y.fulfilled, y.rejected));
      });
      let u = [];
      this.interceptors.response.forEach(function (y) {
        u.push(y.fulfilled, y.rejected);
      });
      let l,
        f = 0,
        b;
      if (!m) {
        let d = [ye.bind(this), void 0];
        for (
          d.unshift.apply(d, c),
            d.push.apply(d, u),
            b = d.length,
            l = Promise.resolve(r);
          f < b;

        )
          l = l.then(d[f++], d[f++]);
        return l;
      }
      b = c.length;
      let w = r;
      for (f = 0; f < b; ) {
        let d = c[f++],
          y = c[f++];
        try {
          w = d(w);
        } catch (p) {
          y.call(this, p);
          break;
        }
      }
      try {
        l = ye.call(this, w);
      } catch (d) {
        return Promise.reject(d);
      }
      for (f = 0, b = u.length; f < b; ) l = l.then(u[f++], u[f++]);
      return l;
    }
    getUri(t) {
      t = N(this.defaults, t);
      let r = Y(t.baseURL, t.url);
      return $(r, t.params, t.paramsSerializer);
    }
  };
a.forEach(["delete", "get", "head", "options"], function (t) {
  J.prototype[t] = function (r, n) {
    return this.request(
      N(n || {}, { method: t, url: r, data: (n || {}).data }),
    );
  };
});
a.forEach(["post", "put", "patch"], function (t) {
  function r(n) {
    return function (s, i, c) {
      return this.request(
        N(c || {}, {
          method: t,
          headers: n ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: i,
        }),
      );
    };
  }
  (J.prototype[t] = r()), (J.prototype[t + "Form"] = r(!0));
});
var te = J;
var ze = class e {
    constructor(t) {
      if (typeof t != "function")
        throw new TypeError("executor must be a function.");
      let r;
      this.promise = new Promise(function (s) {
        r = s;
      });
      let n = this;
      this.promise.then((o) => {
        if (!n._listeners) return;
        let s = n._listeners.length;
        for (; s-- > 0; ) n._listeners[s](o);
        n._listeners = null;
      }),
        (this.promise.then = (o) => {
          let s,
            i = new Promise((c) => {
              n.subscribe(c), (s = c);
            }).then(o);
          return (
            (i.cancel = function () {
              n.unsubscribe(s);
            }),
            i
          );
        }),
        t(function (s, i, c) {
          n.reason || ((n.reason = new P(s, i, c)), r(n.reason));
        });
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(t) {
      if (this.reason) {
        t(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
    }
    unsubscribe(t) {
      if (!this._listeners) return;
      let r = this._listeners.indexOf(t);
      r !== -1 && this._listeners.splice(r, 1);
    }
    toAbortSignal() {
      let t = new AbortController(),
        r = (n) => {
          t.abort(n);
        };
      return (
        this.subscribe(r),
        (t.signal.unsubscribe = () => this.unsubscribe(r)),
        t.signal
      );
    }
    static source() {
      let t;
      return {
        token: new e(function (o) {
          t = o;
        }),
        cancel: t,
      };
    }
  },
  Lt = ze;
function Je(e) {
  return function (r) {
    return e.apply(null, r);
  };
}
function Ve(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
var We = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(We).forEach(([e, t]) => {
  We[t] = e;
});
var Dt = We;
function _t(e) {
  let t = new te(e),
    r = W(te.prototype.request, t);
  return (
    a.extend(r, te.prototype, t, { allOwnKeys: !0 }),
    a.extend(r, t, null, { allOwnKeys: !0 }),
    (r.create = function (o) {
      return _t(N(e, o));
    }),
    r
  );
}
var g = _t(I);
g.Axios = te;
g.CanceledError = P;
g.CancelToken = Lt;
g.isCancel = Q;
g.VERSION = be;
g.toFormData = U;
g.AxiosError = h;
g.Cancel = g.CanceledError;
g.all = function (t) {
  return Promise.all(t);
};
g.spread = Je;
g.isAxiosError = Ve;
g.mergeConfig = N;
g.AxiosHeaders = S;
g.formToJSON = (e) => le(a.isHTMLForm(e) ? new FormData(e) : e);
g.getAdapter = he.getAdapter;
g.HttpStatusCode = Dt;
g.default = g;
var Ut = g;
var {
  Axios: oi,
  AxiosError: si,
  CanceledError: ii,
  isCancel: ai,
  CancelToken: ci,
  VERSION: ui,
  all: li,
  Cancel: fi,
  isAxiosError: di,
  spread: pi,
  toFormData: mi,
  AxiosHeaders: hi,
  HttpStatusCode: yi,
  formToJSON: bi,
  getAdapter: Ei,
  mergeConfig: wi,
} = Ut;
export { Ut as a };
