var Ba = Object.defineProperty,
  Of = Object.defineProperties;
var Ff = Object.getOwnPropertyDescriptors;
var Ln = Object.getOwnPropertySymbols;
var Ha = Object.prototype.hasOwnProperty,
  $a = Object.prototype.propertyIsEnumerable;
var Rt = (e, t) => ((t = Symbol[e]) ? t : Symbol.for("Symbol." + e)),
  kf = (e) => {
    throw TypeError(e);
  };
var ja = (e, t, n) =>
    t in e
      ? Ba(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  X = (e, t) => {
    for (var n in (t ||= {})) Ha.call(t, n) && ja(e, n, t[n]);
    if (Ln) for (var n of Ln(t)) $a.call(t, n) && ja(e, n, t[n]);
    return e;
  },
  ee = (e, t) => Of(e, Ff(t));
var tI = (e, t) => {
  var n = {};
  for (var r in e) Ha.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Ln)
    for (var r of Ln(e)) t.indexOf(r) < 0 && $a.call(e, r) && (n[r] = e[r]);
  return n;
};
var nI = (e, t) => {
  for (var n in t) Ba(e, n, { get: t[n], enumerable: !0 });
};
var Ua = (e, t, n) =>
    new Promise((r, o) => {
      var i = (u) => {
          try {
            a(n.next(u));
          } catch (c) {
            o(c);
          }
        },
        s = (u) => {
          try {
            a(n.throw(u));
          } catch (c) {
            o(c);
          }
        },
        a = (u) => (u.done ? r(u.value) : Promise.resolve(u.value).then(i, s));
      a((n = n.apply(e, t)).next());
    }),
  za = function (e, t) {
    (this[0] = e), (this[1] = t);
  },
  rI = (e, t, n) => {
    var r = (s, a, u, c) => {
        try {
          var l = n[s](a),
            d = (a = l.value) instanceof za,
            p = l.done;
          Promise.resolve(d ? a[0] : a)
            .then((f) =>
              d
                ? r(
                    s === "return" ? s : "next",
                    a[1] ? { done: f.done, value: f.value } : f,
                    u,
                    c,
                  )
                : u({ value: f, done: p }),
            )
            .catch((f) => r("throw", f, u, c));
        } catch (f) {
          c(f);
        }
      },
      o = (s) => (i[s] = (a) => new Promise((u, c) => r(s, a, u, c))),
      i = {};
    return (
      (n = n.apply(e, t)),
      (i[Rt("asyncIterator")] = () => i),
      o("next"),
      o("throw"),
      o("return"),
      i
    );
  },
  oI = (e) => {
    var t = e[Rt("asyncIterator")],
      n = !1,
      r,
      o = {};
    return (
      t == null
        ? ((t = e[Rt("iterator")]()), (r = (i) => (o[i] = (s) => t[i](s))))
        : ((t = t.call(e)),
          (r = (i) =>
            (o[i] = (s) => {
              if (n) {
                if (((n = !1), i === "throw")) throw s;
                return s;
              }
              return (
                (n = !0),
                {
                  done: !1,
                  value: new za(
                    new Promise((a) => {
                      var u = t[i](s);
                      u instanceof Object || kf("Object expected"), a(u);
                    }),
                    1,
                  ),
                }
              );
            }))),
      (o[Rt("iterator")] = () => o),
      r("next"),
      "throw" in t
        ? r("throw")
        : (o.throw = (i) => {
            throw i;
          }),
      "return" in t && r("return"),
      o
    );
  },
  iI = (e, t, n) =>
    (t = e[Rt("asyncIterator")])
      ? t.call(e)
      : ((e = e[Rt("iterator")]()),
        (t = {}),
        (n = (r, o) =>
          (o = e[r]) &&
          (t[r] = (i) =>
            new Promise(
              (s, a, u) => (
                (i = o.call(e, i)),
                (u = i.done),
                Promise.resolve(i.value).then(
                  (c) => s({ value: c, done: u }),
                  a,
                )
              ),
            ))),
        n("next"),
        n("return"),
        t);
function Wa(e, t) {
  return Object.is(e, t);
}
var H = null,
  tn = !1,
  Uo = 1,
  G = Symbol("SIGNAL");
function _(e) {
  let t = H;
  return (H = e), t;
}
function qa() {
  return H;
}
function Pf() {
  return tn;
}
var Xe = {
  version: 0,
  lastCleanEpoch: 0,
  dirty: !1,
  producerNode: void 0,
  producerLastReadVersion: void 0,
  producerIndexOfThis: void 0,
  nextProducerIndex: 0,
  liveConsumerNode: void 0,
  liveConsumerIndexOfThis: void 0,
  consumerAllowSignalWrites: !1,
  consumerIsAlwaysLive: !1,
  kind: "unknown",
  producerMustRecompute: () => !1,
  producerRecomputeValue: () => {},
  consumerMarkedDirty: () => {},
  consumerOnSignalRead: () => {},
};
function jn(e) {
  if (tn) throw new Error("");
  if (H === null) return;
  H.consumerOnSignalRead(e);
  let t = H.nextProducerIndex++;
  if ((Hn(H), t < H.producerNode.length && H.producerNode[t] !== e && nn(H))) {
    let n = H.producerNode[t];
    Bn(n, H.producerIndexOfThis[t]);
  }
  H.producerNode[t] !== e &&
    ((H.producerNode[t] = e),
    (H.producerIndexOfThis[t] = nn(H) ? Ja(e, H, t) : 0)),
    (H.producerLastReadVersion[t] = e.version);
}
function Lf() {
  Uo++;
}
function Za(e) {
  if (!(nn(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === Uo)) {
    if (!e.producerMustRecompute(e) && !on(e)) {
      Ga(e);
      return;
    }
    e.producerRecomputeValue(e), Ga(e);
  }
}
function Qa(e) {
  if (e.liveConsumerNode === void 0) return;
  let t = tn;
  tn = !0;
  try {
    for (let n of e.liveConsumerNode) n.dirty || Ka(n);
  } finally {
    tn = t;
  }
}
function Ya() {
  return H?.consumerAllowSignalWrites !== !1;
}
function Ka(e) {
  (e.dirty = !0), Qa(e), e.consumerMarkedDirty?.(e);
}
function Ga(e) {
  (e.dirty = !1), (e.lastCleanEpoch = Uo);
}
function Ot(e) {
  return e && (e.nextProducerIndex = 0), _(e);
}
function rn(e, t) {
  if (
    (_(t),
    !(
      !e ||
      e.producerNode === void 0 ||
      e.producerIndexOfThis === void 0 ||
      e.producerLastReadVersion === void 0
    ))
  ) {
    if (nn(e))
      for (let n = e.nextProducerIndex; n < e.producerNode.length; n++)
        Bn(e.producerNode[n], e.producerIndexOfThis[n]);
    for (; e.producerNode.length > e.nextProducerIndex; )
      e.producerNode.pop(),
        e.producerLastReadVersion.pop(),
        e.producerIndexOfThis.pop();
  }
}
function on(e) {
  Hn(e);
  for (let t = 0; t < e.producerNode.length; t++) {
    let n = e.producerNode[t],
      r = e.producerLastReadVersion[t];
    if (r !== n.version || (Za(n), r !== n.version)) return !0;
  }
  return !1;
}
function Ft(e) {
  if ((Hn(e), nn(e)))
    for (let t = 0; t < e.producerNode.length; t++)
      Bn(e.producerNode[t], e.producerIndexOfThis[t]);
  (e.producerNode.length =
    e.producerLastReadVersion.length =
    e.producerIndexOfThis.length =
      0),
    e.liveConsumerNode &&
      (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0);
}
function Ja(e, t, n) {
  if ((Xa(e), e.liveConsumerNode.length === 0 && eu(e)))
    for (let r = 0; r < e.producerNode.length; r++)
      e.producerIndexOfThis[r] = Ja(e.producerNode[r], e, r);
  return e.liveConsumerIndexOfThis.push(n), e.liveConsumerNode.push(t) - 1;
}
function Bn(e, t) {
  if ((Xa(e), e.liveConsumerNode.length === 1 && eu(e)))
    for (let r = 0; r < e.producerNode.length; r++)
      Bn(e.producerNode[r], e.producerIndexOfThis[r]);
  let n = e.liveConsumerNode.length - 1;
  if (
    ((e.liveConsumerNode[t] = e.liveConsumerNode[n]),
    (e.liveConsumerIndexOfThis[t] = e.liveConsumerIndexOfThis[n]),
    e.liveConsumerNode.length--,
    e.liveConsumerIndexOfThis.length--,
    t < e.liveConsumerNode.length)
  ) {
    let r = e.liveConsumerIndexOfThis[t],
      o = e.liveConsumerNode[t];
    Hn(o), (o.producerIndexOfThis[r] = t);
  }
}
function nn(e) {
  return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
}
function Hn(e) {
  (e.producerNode ??= []),
    (e.producerIndexOfThis ??= []),
    (e.producerLastReadVersion ??= []);
}
function Xa(e) {
  (e.liveConsumerNode ??= []), (e.liveConsumerIndexOfThis ??= []);
}
function eu(e) {
  return e.producerNode !== void 0;
}
function zo(e) {
  let t = Object.create(Vf);
  t.computation = e;
  let n = () => {
    if ((Za(t), jn(t), t.value === Vn)) throw t.error;
    return t.value;
  };
  return (n[G] = t), n;
}
var Bo = Symbol("UNSET"),
  Ho = Symbol("COMPUTING"),
  Vn = Symbol("ERRORED"),
  Vf = ee(X({}, Xe), {
    value: Bo,
    dirty: !0,
    error: null,
    equal: Wa,
    kind: "computed",
    producerMustRecompute(e) {
      return e.value === Bo || e.value === Ho;
    },
    producerRecomputeValue(e) {
      if (e.value === Ho) throw new Error("Detected cycle in computations.");
      let t = e.value;
      e.value = Ho;
      let n = Ot(e),
        r,
        o = !1;
      try {
        (r = e.computation()),
          _(null),
          (o = t !== Bo && t !== Vn && r !== Vn && e.equal(t, r));
      } catch (i) {
        (r = Vn), (e.error = i);
      } finally {
        rn(e, n);
      }
      if (o) {
        e.value = t;
        return;
      }
      (e.value = r), e.version++;
    },
  });
function jf() {
  throw new Error();
}
var tu = jf;
function nu() {
  tu();
}
function ru(e) {
  tu = e;
}
var Bf = null;
function ou(e) {
  let t = Object.create(Go);
  t.value = e;
  let n = () => (jn(t), t.value);
  return (n[G] = t), n;
}
function $n(e, t) {
  Ya() || nu(), e.equal(e.value, t) || ((e.value = t), Hf(e));
}
function iu(e, t) {
  Ya() || nu(), $n(e, t(e.value));
}
var Go = ee(X({}, Xe), { equal: Wa, value: void 0, kind: "signal" });
function Hf(e) {
  e.version++, Lf(), Qa(e), Bf?.();
}
function su(e, t, n) {
  let r = Object.create($f);
  n && (r.consumerAllowSignalWrites = !0), (r.fn = e), (r.schedule = t);
  let o = (u) => {
    r.cleanupFn = u;
  };
  function i(u) {
    return u.fn === null && u.schedule === null;
  }
  function s(u) {
    i(u) ||
      (Ft(u),
      u.cleanupFn(),
      (u.fn = null),
      (u.schedule = null),
      (u.cleanupFn = $o));
  }
  let a = () => {
    if (r.fn === null) return;
    if (Pf())
      throw new Error(
        "Schedulers cannot synchronously execute watches while scheduling.",
      );
    if (((r.dirty = !1), r.hasRun && !on(r))) return;
    r.hasRun = !0;
    let u = Ot(r);
    try {
      r.cleanupFn(), (r.cleanupFn = $o), r.fn(o);
    } finally {
      rn(r, u);
    }
  };
  return (
    (r.ref = {
      notify: () => Ka(r),
      run: a,
      cleanup: () => r.cleanupFn(),
      destroy: () => s(r),
      [G]: r,
    }),
    r.ref
  );
}
var $o = () => {},
  $f = ee(X({}, Xe), {
    consumerIsAlwaysLive: !0,
    consumerAllowSignalWrites: !1,
    consumerMarkedDirty: (e) => {
      e.schedule !== null && e.schedule(e.ref);
    },
    hasRun: !1,
    cleanupFn: $o,
  });
function D(e) {
  return typeof e == "function";
}
function kt(e) {
  let n = e((r) => {
    Error.call(r), (r.stack = new Error().stack);
  });
  return (
    (n.prototype = Object.create(Error.prototype)),
    (n.prototype.constructor = n),
    n
  );
}
var Un = kt(
  (e) =>
    function (n) {
      e(this),
        (this.message = n
          ? `${n.length} errors occurred during unsubscription:
${n.map((r, o) => `${o + 1}) ${r.toString()}`).join(`
  `)}`
          : ""),
        (this.name = "UnsubscriptionError"),
        (this.errors = n);
    },
);
function et(e, t) {
  if (e) {
    let n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var j = class e {
  constructor(t) {
    (this.initialTeardown = t),
      (this.closed = !1),
      (this._parentage = null),
      (this._finalizers = null);
  }
  unsubscribe() {
    let t;
    if (!this.closed) {
      this.closed = !0;
      let { _parentage: n } = this;
      if (n)
        if (((this._parentage = null), Array.isArray(n)))
          for (let i of n) i.remove(this);
        else n.remove(this);
      let { initialTeardown: r } = this;
      if (D(r))
        try {
          r();
        } catch (i) {
          t = i instanceof Un ? i.errors : [i];
        }
      let { _finalizers: o } = this;
      if (o) {
        this._finalizers = null;
        for (let i of o)
          try {
            au(i);
          } catch (s) {
            (t = t ?? []),
              s instanceof Un ? (t = [...t, ...s.errors]) : t.push(s);
          }
      }
      if (t) throw new Un(t);
    }
  }
  add(t) {
    var n;
    if (t && t !== this)
      if (this.closed) au(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this)) return;
          t._addParent(this);
        }
        (this._finalizers =
          (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t);
      }
  }
  _hasParent(t) {
    let { _parentage: n } = this;
    return n === t || (Array.isArray(n) && n.includes(t));
  }
  _addParent(t) {
    let { _parentage: n } = this;
    this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
  }
  _removeParent(t) {
    let { _parentage: n } = this;
    n === t ? (this._parentage = null) : Array.isArray(n) && et(n, t);
  }
  remove(t) {
    let { _finalizers: n } = this;
    n && et(n, t), t instanceof e && t._removeParent(this);
  }
};
j.EMPTY = (() => {
  let e = new j();
  return (e.closed = !0), e;
})();
var Wo = j.EMPTY;
function zn(e) {
  return (
    e instanceof j ||
    (e && "closed" in e && D(e.remove) && D(e.add) && D(e.unsubscribe))
  );
}
function au(e) {
  D(e) ? e() : e.unsubscribe();
}
var me = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1,
};
var Pt = {
  setTimeout(e, t, ...n) {
    let { delegate: r } = Pt;
    return r?.setTimeout ? r.setTimeout(e, t, ...n) : setTimeout(e, t, ...n);
  },
  clearTimeout(e) {
    let { delegate: t } = Pt;
    return (t?.clearTimeout || clearTimeout)(e);
  },
  delegate: void 0,
};
function Gn(e) {
  Pt.setTimeout(() => {
    let { onUnhandledError: t } = me;
    if (t) t(e);
    else throw e;
  });
}
function sn() {}
var uu = qo("C", void 0, void 0);
function cu(e) {
  return qo("E", void 0, e);
}
function lu(e) {
  return qo("N", e, void 0);
}
function qo(e, t, n) {
  return { kind: e, value: t, error: n };
}
var tt = null;
function Lt(e) {
  if (me.useDeprecatedSynchronousErrorHandling) {
    let t = !tt;
    if ((t && (tt = { errorThrown: !1, error: null }), e(), t)) {
      let { errorThrown: n, error: r } = tt;
      if (((tt = null), n)) throw r;
    }
  } else e();
}
function du(e) {
  me.useDeprecatedSynchronousErrorHandling &&
    tt &&
    ((tt.errorThrown = !0), (tt.error = e));
}
var nt = class extends j {
    constructor(t) {
      super(),
        (this.isStopped = !1),
        t
          ? ((this.destination = t), zn(t) && t.add(this))
          : (this.destination = Gf);
    }
    static create(t, n, r) {
      return new ye(t, n, r);
    }
    next(t) {
      this.isStopped ? Qo(lu(t), this) : this._next(t);
    }
    error(t) {
      this.isStopped
        ? Qo(cu(t), this)
        : ((this.isStopped = !0), this._error(t));
    }
    complete() {
      this.isStopped ? Qo(uu, this) : ((this.isStopped = !0), this._complete());
    }
    unsubscribe() {
      this.closed ||
        ((this.isStopped = !0), super.unsubscribe(), (this.destination = null));
    }
    _next(t) {
      this.destination.next(t);
    }
    _error(t) {
      try {
        this.destination.error(t);
      } finally {
        this.unsubscribe();
      }
    }
    _complete() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }
  },
  Uf = Function.prototype.bind;
function Zo(e, t) {
  return Uf.call(e, t);
}
var Yo = class {
    constructor(t) {
      this.partialObserver = t;
    }
    next(t) {
      let { partialObserver: n } = this;
      if (n.next)
        try {
          n.next(t);
        } catch (r) {
          Wn(r);
        }
    }
    error(t) {
      let { partialObserver: n } = this;
      if (n.error)
        try {
          n.error(t);
        } catch (r) {
          Wn(r);
        }
      else Wn(t);
    }
    complete() {
      let { partialObserver: t } = this;
      if (t.complete)
        try {
          t.complete();
        } catch (n) {
          Wn(n);
        }
    }
  },
  ye = class extends nt {
    constructor(t, n, r) {
      super();
      let o;
      if (D(t) || !t)
        o = { next: t ?? void 0, error: n ?? void 0, complete: r ?? void 0 };
      else {
        let i;
        this && me.useDeprecatedNextContext
          ? ((i = Object.create(t)),
            (i.unsubscribe = () => this.unsubscribe()),
            (o = {
              next: t.next && Zo(t.next, i),
              error: t.error && Zo(t.error, i),
              complete: t.complete && Zo(t.complete, i),
            }))
          : (o = t);
      }
      this.destination = new Yo(o);
    }
  };
function Wn(e) {
  me.useDeprecatedSynchronousErrorHandling ? du(e) : Gn(e);
}
function zf(e) {
  throw e;
}
function Qo(e, t) {
  let { onStoppedNotification: n } = me;
  n && Pt.setTimeout(() => n(e, t));
}
var Gf = { closed: !0, next: sn, error: zf, complete: sn };
var Vt = (typeof Symbol == "function" && Symbol.observable) || "@@observable";
function Q(e) {
  return e;
}
function Wf(...e) {
  return Ko(e);
}
function Ko(e) {
  return e.length === 0
    ? Q
    : e.length === 1
      ? e[0]
      : function (n) {
          return e.reduce((r, o) => o(r), n);
        };
}
var T = (() => {
  class e {
    constructor(n) {
      n && (this._subscribe = n);
    }
    lift(n) {
      let r = new e();
      return (r.source = this), (r.operator = n), r;
    }
    subscribe(n, r, o) {
      let i = Zf(n) ? n : new ye(n, r, o);
      return (
        Lt(() => {
          let { operator: s, source: a } = this;
          i.add(
            s ? s.call(i, a) : a ? this._subscribe(i) : this._trySubscribe(i),
          );
        }),
        i
      );
    }
    _trySubscribe(n) {
      try {
        return this._subscribe(n);
      } catch (r) {
        n.error(r);
      }
    }
    forEach(n, r) {
      return (
        (r = fu(r)),
        new r((o, i) => {
          let s = new ye({
            next: (a) => {
              try {
                n(a);
              } catch (u) {
                i(u), s.unsubscribe();
              }
            },
            error: i,
            complete: o,
          });
          this.subscribe(s);
        })
      );
    }
    _subscribe(n) {
      var r;
      return (r = this.source) === null || r === void 0
        ? void 0
        : r.subscribe(n);
    }
    [Vt]() {
      return this;
    }
    pipe(...n) {
      return Ko(n)(this);
    }
    toPromise(n) {
      return (
        (n = fu(n)),
        new n((r, o) => {
          let i;
          this.subscribe(
            (s) => (i = s),
            (s) => o(s),
            () => r(i),
          );
        })
      );
    }
  }
  return (e.create = (t) => new e(t)), e;
})();
function fu(e) {
  var t;
  return (t = e ?? me.Promise) !== null && t !== void 0 ? t : Promise;
}
function qf(e) {
  return e && D(e.next) && D(e.error) && D(e.complete);
}
function Zf(e) {
  return (e && e instanceof nt) || (qf(e) && zn(e));
}
function Jo(e) {
  return D(e?.lift);
}
function v(e) {
  return (t) => {
    if (Jo(t))
      return t.lift(function (n) {
        try {
          return e(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function y(e, t, n, r, o) {
  return new Xo(e, t, n, r, o);
}
var Xo = class extends nt {
  constructor(t, n, r, o, i, s) {
    super(t),
      (this.onFinalize = i),
      (this.shouldUnsubscribe = s),
      (this._next = n
        ? function (a) {
            try {
              n(a);
            } catch (u) {
              t.error(u);
            }
          }
        : super._next),
      (this._error = o
        ? function (a) {
            try {
              o(a);
            } catch (u) {
              t.error(u);
            } finally {
              this.unsubscribe();
            }
          }
        : super._error),
      (this._complete = r
        ? function () {
            try {
              r();
            } catch (a) {
              t.error(a);
            } finally {
              this.unsubscribe();
            }
          }
        : super._complete);
  }
  unsubscribe() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      let { closed: n } = this;
      super.unsubscribe(),
        !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }
};
function ei() {
  return v((e, t) => {
    let n = null;
    e._refCount++;
    let r = y(t, void 0, void 0, void 0, () => {
      if (!e || e._refCount <= 0 || 0 < --e._refCount) {
        n = null;
        return;
      }
      let o = e._connection,
        i = n;
      (n = null), o && (!i || o === i) && o.unsubscribe(), t.unsubscribe();
    });
    e.subscribe(r), r.closed || (n = e.connect());
  });
}
var ti = class extends T {
  constructor(t, n) {
    super(),
      (this.source = t),
      (this.subjectFactory = n),
      (this._subject = null),
      (this._refCount = 0),
      (this._connection = null),
      Jo(t) && (this.lift = t.lift);
  }
  _subscribe(t) {
    return this.getSubject().subscribe(t);
  }
  getSubject() {
    let t = this._subject;
    return (
      (!t || t.isStopped) && (this._subject = this.subjectFactory()),
      this._subject
    );
  }
  _teardown() {
    this._refCount = 0;
    let { _connection: t } = this;
    (this._subject = this._connection = null), t?.unsubscribe();
  }
  connect() {
    let t = this._connection;
    if (!t) {
      t = this._connection = new j();
      let n = this.getSubject();
      t.add(
        this.source.subscribe(
          y(
            n,
            void 0,
            () => {
              this._teardown(), n.complete();
            },
            (r) => {
              this._teardown(), n.error(r);
            },
            () => this._teardown(),
          ),
        ),
      ),
        t.closed && ((this._connection = null), (t = j.EMPTY));
    }
    return t;
  }
  refCount() {
    return ei()(this);
  }
};
var pu = kt(
  (e) =>
    function () {
      e(this),
        (this.name = "ObjectUnsubscribedError"),
        (this.message = "object unsubscribed");
    },
);
var te = (() => {
    class e extends T {
      constructor() {
        super(),
          (this.closed = !1),
          (this.currentObservers = null),
          (this.observers = []),
          (this.isStopped = !1),
          (this.hasError = !1),
          (this.thrownError = null);
      }
      lift(n) {
        let r = new qn(this, this);
        return (r.operator = n), r;
      }
      _throwIfClosed() {
        if (this.closed) throw new pu();
      }
      next(n) {
        Lt(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.currentObservers ||
              (this.currentObservers = Array.from(this.observers));
            for (let r of this.currentObservers) r.next(n);
          }
        });
      }
      error(n) {
        Lt(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            (this.hasError = this.isStopped = !0), (this.thrownError = n);
            let { observers: r } = this;
            for (; r.length; ) r.shift().error(n);
          }
        });
      }
      complete() {
        Lt(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.isStopped = !0;
            let { observers: n } = this;
            for (; n.length; ) n.shift().complete();
          }
        });
      }
      unsubscribe() {
        (this.isStopped = this.closed = !0),
          (this.observers = this.currentObservers = null);
      }
      get observed() {
        var n;
        return (
          ((n = this.observers) === null || n === void 0 ? void 0 : n.length) >
          0
        );
      }
      _trySubscribe(n) {
        return this._throwIfClosed(), super._trySubscribe(n);
      }
      _subscribe(n) {
        return (
          this._throwIfClosed(),
          this._checkFinalizedStatuses(n),
          this._innerSubscribe(n)
        );
      }
      _innerSubscribe(n) {
        let { hasError: r, isStopped: o, observers: i } = this;
        return r || o
          ? Wo
          : ((this.currentObservers = null),
            i.push(n),
            new j(() => {
              (this.currentObservers = null), et(i, n);
            }));
      }
      _checkFinalizedStatuses(n) {
        let { hasError: r, thrownError: o, isStopped: i } = this;
        r ? n.error(o) : i && n.complete();
      }
      asObservable() {
        let n = new T();
        return (n.source = this), n;
      }
    }
    return (e.create = (t, n) => new qn(t, n)), e;
  })(),
  qn = class extends te {
    constructor(t, n) {
      super(), (this.destination = t), (this.source = n);
    }
    next(t) {
      var n, r;
      (r =
        (n = this.destination) === null || n === void 0 ? void 0 : n.next) ===
        null ||
        r === void 0 ||
        r.call(n, t);
    }
    error(t) {
      var n, r;
      (r =
        (n = this.destination) === null || n === void 0 ? void 0 : n.error) ===
        null ||
        r === void 0 ||
        r.call(n, t);
    }
    complete() {
      var t, n;
      (n =
        (t = this.destination) === null || t === void 0
          ? void 0
          : t.complete) === null ||
        n === void 0 ||
        n.call(t);
    }
    _subscribe(t) {
      var n, r;
      return (r =
        (n = this.source) === null || n === void 0
          ? void 0
          : n.subscribe(t)) !== null && r !== void 0
        ? r
        : Wo;
    }
  };
var an = class extends te {
  constructor(t) {
    super(), (this._value = t);
  }
  get value() {
    return this.getValue();
  }
  _subscribe(t) {
    let n = super._subscribe(t);
    return !n.closed && t.next(this._value), n;
  }
  getValue() {
    let { hasError: t, thrownError: n, _value: r } = this;
    if (t) throw n;
    return this._throwIfClosed(), r;
  }
  next(t) {
    super.next((this._value = t));
  }
};
var un = {
  now() {
    return (un.delegate || Date).now();
  },
  delegate: void 0,
};
var Zn = class extends te {
  constructor(t = 1 / 0, n = 1 / 0, r = un) {
    super(),
      (this._bufferSize = t),
      (this._windowTime = n),
      (this._timestampProvider = r),
      (this._buffer = []),
      (this._infiniteTimeWindow = !0),
      (this._infiniteTimeWindow = n === 1 / 0),
      (this._bufferSize = Math.max(1, t)),
      (this._windowTime = Math.max(1, n));
  }
  next(t) {
    let {
      isStopped: n,
      _buffer: r,
      _infiniteTimeWindow: o,
      _timestampProvider: i,
      _windowTime: s,
    } = this;
    n || (r.push(t), !o && r.push(i.now() + s)),
      this._trimBuffer(),
      super.next(t);
  }
  _subscribe(t) {
    this._throwIfClosed(), this._trimBuffer();
    let n = this._innerSubscribe(t),
      { _infiniteTimeWindow: r, _buffer: o } = this,
      i = o.slice();
    for (let s = 0; s < i.length && !t.closed; s += r ? 1 : 2) t.next(i[s]);
    return this._checkFinalizedStatuses(t), n;
  }
  _trimBuffer() {
    let {
        _bufferSize: t,
        _timestampProvider: n,
        _buffer: r,
        _infiniteTimeWindow: o,
      } = this,
      i = (o ? 1 : 2) * t;
    if ((t < 1 / 0 && i < r.length && r.splice(0, r.length - i), !o)) {
      let s = n.now(),
        a = 0;
      for (let u = 1; u < r.length && r[u] <= s; u += 2) a = u;
      a && r.splice(0, a + 1);
    }
  }
};
var Qn = class extends j {
  constructor(t, n) {
    super();
  }
  schedule(t, n = 0) {
    return this;
  }
};
var cn = {
  setInterval(e, t, ...n) {
    let { delegate: r } = cn;
    return r?.setInterval ? r.setInterval(e, t, ...n) : setInterval(e, t, ...n);
  },
  clearInterval(e) {
    let { delegate: t } = cn;
    return (t?.clearInterval || clearInterval)(e);
  },
  delegate: void 0,
};
var Yn = class extends Qn {
  constructor(t, n) {
    super(t, n), (this.scheduler = t), (this.work = n), (this.pending = !1);
  }
  schedule(t, n = 0) {
    var r;
    if (this.closed) return this;
    this.state = t;
    let o = this.id,
      i = this.scheduler;
    return (
      o != null && (this.id = this.recycleAsyncId(i, o, n)),
      (this.pending = !0),
      (this.delay = n),
      (this.id =
        (r = this.id) !== null && r !== void 0
          ? r
          : this.requestAsyncId(i, this.id, n)),
      this
    );
  }
  requestAsyncId(t, n, r = 0) {
    return cn.setInterval(t.flush.bind(t, this), r);
  }
  recycleAsyncId(t, n, r = 0) {
    if (r != null && this.delay === r && this.pending === !1) return n;
    n != null && cn.clearInterval(n);
  }
  execute(t, n) {
    if (this.closed) return new Error("executing a cancelled action");
    this.pending = !1;
    let r = this._execute(t, n);
    if (r) return r;
    this.pending === !1 &&
      this.id != null &&
      (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }
  _execute(t, n) {
    let r = !1,
      o;
    try {
      this.work(t);
    } catch (i) {
      (r = !0), (o = i || new Error("Scheduled action threw falsy error"));
    }
    if (r) return this.unsubscribe(), o;
  }
  unsubscribe() {
    if (!this.closed) {
      let { id: t, scheduler: n } = this,
        { actions: r } = n;
      (this.work = this.state = this.scheduler = null),
        (this.pending = !1),
        et(r, this),
        t != null && (this.id = this.recycleAsyncId(n, t, null)),
        (this.delay = null),
        super.unsubscribe();
    }
  }
};
var jt = class e {
  constructor(t, n = e.now) {
    (this.schedulerActionCtor = t), (this.now = n);
  }
  schedule(t, n = 0, r) {
    return new this.schedulerActionCtor(this, t).schedule(r, n);
  }
};
jt.now = un.now;
var Kn = class extends jt {
  constructor(t, n = jt.now) {
    super(t, n), (this.actions = []), (this._active = !1);
  }
  flush(t) {
    let { actions: n } = this;
    if (this._active) {
      n.push(t);
      return;
    }
    let r;
    this._active = !0;
    do if ((r = t.execute(t.state, t.delay))) break;
    while ((t = n.shift()));
    if (((this._active = !1), r)) {
      for (; (t = n.shift()); ) t.unsubscribe();
      throw r;
    }
  }
};
var rt = new Kn(Yn),
  hu = rt;
var ot = new T((e) => e.complete());
function Jn(e) {
  return e && D(e.schedule);
}
function ni(e) {
  return e[e.length - 1];
}
function Xn(e) {
  return D(ni(e)) ? e.pop() : void 0;
}
function _e(e) {
  return Jn(ni(e)) ? e.pop() : void 0;
}
function gu(e, t) {
  return typeof ni(e) == "number" ? e.pop() : t;
}
function yu(e, t, n, r) {
  function o(i) {
    return i instanceof n
      ? i
      : new n(function (s) {
          s(i);
        });
  }
  return new (n || (n = Promise))(function (i, s) {
    function a(l) {
      try {
        c(r.next(l));
      } catch (d) {
        s(d);
      }
    }
    function u(l) {
      try {
        c(r.throw(l));
      } catch (d) {
        s(d);
      }
    }
    function c(l) {
      l.done ? i(l.value) : o(l.value).then(a, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function mu(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (
          e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined.",
  );
}
function it(e) {
  return this instanceof it ? ((this.v = e), this) : new it(e);
}
function vu(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []),
    o,
    i = [];
  return (
    (o = Object.create(
      (typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype,
    )),
    a("next"),
    a("throw"),
    a("return", s),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function s(f) {
    return function (h) {
      return Promise.resolve(h).then(f, d);
    };
  }
  function a(f, h) {
    r[f] &&
      ((o[f] = function (g) {
        return new Promise(function (L, O) {
          i.push([f, g, L, O]) > 1 || u(f, g);
        });
      }),
      h && (o[f] = h(o[f])));
  }
  function u(f, h) {
    try {
      c(r[f](h));
    } catch (g) {
      p(i[0][3], g);
    }
  }
  function c(f) {
    f.value instanceof it
      ? Promise.resolve(f.value.v).then(l, d)
      : p(i[0][2], f);
  }
  function l(f) {
    u("next", f);
  }
  function d(f) {
    u("throw", f);
  }
  function p(f, h) {
    f(h), i.shift(), i.length && u(i[0][0], i[0][1]);
  }
}
function Du(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof mu == "function" ? mu(e) : e[Symbol.iterator]()),
      (n = {}),
      r("next"),
      r("throw"),
      r("return"),
      (n[Symbol.asyncIterator] = function () {
        return this;
      }),
      n);
  function r(i) {
    n[i] =
      e[i] &&
      function (s) {
        return new Promise(function (a, u) {
          (s = e[i](s)), o(a, u, s.done, s.value);
        });
      };
  }
  function o(i, s, a, u) {
    Promise.resolve(u).then(function (c) {
      i({ value: c, done: a });
    }, s);
  }
}
var er = (e) => e && typeof e.length == "number" && typeof e != "function";
function tr(e) {
  return D(e?.then);
}
function nr(e) {
  return D(e[Vt]);
}
function rr(e) {
  return Symbol.asyncIterator && D(e?.[Symbol.asyncIterator]);
}
function or(e) {
  return new TypeError(
    `You provided ${e !== null && typeof e == "object" ? "an invalid object" : `'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
  );
}
function Qf() {
  return typeof Symbol != "function" || !Symbol.iterator
    ? "@@iterator"
    : Symbol.iterator;
}
var ir = Qf();
function sr(e) {
  return D(e?.[ir]);
}
function ar(e) {
  return vu(this, arguments, function* () {
    let n = e.getReader();
    try {
      for (;;) {
        let { value: r, done: o } = yield it(n.read());
        if (o) return yield it(void 0);
        yield yield it(r);
      }
    } finally {
      n.releaseLock();
    }
  });
}
function ur(e) {
  return D(e?.getReader);
}
function N(e) {
  if (e instanceof T) return e;
  if (e != null) {
    if (nr(e)) return Yf(e);
    if (er(e)) return Kf(e);
    if (tr(e)) return Jf(e);
    if (rr(e)) return Eu(e);
    if (sr(e)) return Xf(e);
    if (ur(e)) return ep(e);
  }
  throw or(e);
}
function Yf(e) {
  return new T((t) => {
    let n = e[Vt]();
    if (D(n.subscribe)) return n.subscribe(t);
    throw new TypeError(
      "Provided object does not correctly implement Symbol.observable",
    );
  });
}
function Kf(e) {
  return new T((t) => {
    for (let n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
    t.complete();
  });
}
function Jf(e) {
  return new T((t) => {
    e.then(
      (n) => {
        t.closed || (t.next(n), t.complete());
      },
      (n) => t.error(n),
    ).then(null, Gn);
  });
}
function Xf(e) {
  return new T((t) => {
    for (let n of e) if ((t.next(n), t.closed)) return;
    t.complete();
  });
}
function Eu(e) {
  return new T((t) => {
    tp(e, t).catch((n) => t.error(n));
  });
}
function ep(e) {
  return Eu(ar(e));
}
function tp(e, t) {
  var n, r, o, i;
  return yu(this, void 0, void 0, function* () {
    try {
      for (n = Du(e); (r = yield n.next()), !r.done; ) {
        let s = r.value;
        if ((t.next(s), t.closed)) return;
      }
    } catch (s) {
      o = { error: s };
    } finally {
      try {
        r && !r.done && (i = n.return) && (yield i.call(n));
      } finally {
        if (o) throw o.error;
      }
    }
    t.complete();
  });
}
function ne(e, t, n, r = 0, o = !1) {
  let i = t.schedule(function () {
    n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if ((e.add(i), !o)) return i;
}
function cr(e, t = 0) {
  return v((n, r) => {
    n.subscribe(
      y(
        r,
        (o) => ne(r, e, () => r.next(o), t),
        () => ne(r, e, () => r.complete(), t),
        (o) => ne(r, e, () => r.error(o), t),
      ),
    );
  });
}
function lr(e, t = 0) {
  return v((n, r) => {
    r.add(e.schedule(() => n.subscribe(r), t));
  });
}
function Iu(e, t) {
  return N(e).pipe(lr(t), cr(t));
}
function wu(e, t) {
  return N(e).pipe(lr(t), cr(t));
}
function Cu(e, t) {
  return new T((n) => {
    let r = 0;
    return t.schedule(function () {
      r === e.length
        ? n.complete()
        : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function bu(e, t) {
  return new T((n) => {
    let r;
    return (
      ne(n, t, () => {
        (r = e[ir]()),
          ne(
            n,
            t,
            () => {
              let o, i;
              try {
                ({ value: o, done: i } = r.next());
              } catch (s) {
                n.error(s);
                return;
              }
              i ? n.complete() : n.next(o);
            },
            0,
            !0,
          );
      }),
      () => D(r?.return) && r.return()
    );
  });
}
function dr(e, t) {
  if (!e) throw new Error("Iterable cannot be null");
  return new T((n) => {
    ne(n, t, () => {
      let r = e[Symbol.asyncIterator]();
      ne(
        n,
        t,
        () => {
          r.next().then((o) => {
            o.done ? n.complete() : n.next(o.value);
          });
        },
        0,
        !0,
      );
    });
  });
}
function _u(e, t) {
  return dr(ar(e), t);
}
function Mu(e, t) {
  if (e != null) {
    if (nr(e)) return Iu(e, t);
    if (er(e)) return Cu(e, t);
    if (tr(e)) return wu(e, t);
    if (rr(e)) return dr(e, t);
    if (sr(e)) return bu(e, t);
    if (ur(e)) return _u(e, t);
  }
  throw or(e);
}
function Me(e, t) {
  return t ? Mu(e, t) : N(e);
}
function np(...e) {
  let t = _e(e);
  return Me(e, t);
}
function rp(e, t) {
  let n = D(e) ? e : () => e,
    r = (o) => o.error(n());
  return new T(t ? (o) => t.schedule(r, 0, o) : r);
}
function op(e) {
  return !!e && (e instanceof T || (D(e.lift) && D(e.subscribe)));
}
var ve = kt(
  (e) =>
    function () {
      e(this),
        (this.name = "EmptyError"),
        (this.message = "no elements in sequence");
    },
);
function ip(e, t) {
  let n = typeof t == "object";
  return new Promise((r, o) => {
    let i = !1,
      s;
    e.subscribe({
      next: (a) => {
        (s = a), (i = !0);
      },
      error: o,
      complete: () => {
        i ? r(s) : n ? r(t.defaultValue) : o(new ve());
      },
    });
  });
}
function sp(e, t) {
  let n = typeof t == "object";
  return new Promise((r, o) => {
    let i = new ye({
      next: (s) => {
        r(s), i.unsubscribe();
      },
      error: o,
      complete: () => {
        n ? r(t.defaultValue) : o(new ve());
      },
    });
    e.subscribe(i);
  });
}
function Tu(e) {
  return e instanceof Date && !isNaN(e);
}
function st(e, t) {
  return v((n, r) => {
    let o = 0;
    n.subscribe(
      y(r, (i) => {
        r.next(e.call(t, i, o++));
      }),
    );
  });
}
var { isArray: ap } = Array;
function up(e, t) {
  return ap(t) ? e(...t) : e(t);
}
function fr(e) {
  return st((t) => up(e, t));
}
var { isArray: cp } = Array,
  { getPrototypeOf: lp, prototype: dp, keys: fp } = Object;
function pr(e) {
  if (e.length === 1) {
    let t = e[0];
    if (cp(t)) return { args: t, keys: null };
    if (pp(t)) {
      let n = fp(t);
      return { args: n.map((r) => t[r]), keys: n };
    }
  }
  return { args: e, keys: null };
}
function pp(e) {
  return e && typeof e == "object" && lp(e) === dp;
}
function hr(e, t) {
  return e.reduce((n, r, o) => ((n[r] = t[o]), n), {});
}
function hp(...e) {
  let t = _e(e),
    n = Xn(e),
    { args: r, keys: o } = pr(e);
  if (r.length === 0) return Me([], t);
  let i = new T(gp(r, t, o ? (s) => hr(o, s) : Q));
  return n ? i.pipe(fr(n)) : i;
}
function gp(e, t, n = Q) {
  return (r) => {
    Su(
      t,
      () => {
        let { length: o } = e,
          i = new Array(o),
          s = o,
          a = o;
        for (let u = 0; u < o; u++)
          Su(
            t,
            () => {
              let c = Me(e[u], t),
                l = !1;
              c.subscribe(
                y(
                  r,
                  (d) => {
                    (i[u] = d), l || ((l = !0), a--), a || r.next(n(i.slice()));
                  },
                  () => {
                    --s || r.complete();
                  },
                ),
              );
            },
            r,
          );
      },
      r,
    );
  };
}
function Su(e, t, n) {
  e ? ne(n, e, t) : t();
}
function Nu(e, t, n, r, o, i, s, a) {
  let u = [],
    c = 0,
    l = 0,
    d = !1,
    p = () => {
      d && !u.length && !c && t.complete();
    },
    f = (g) => (c < r ? h(g) : u.push(g)),
    h = (g) => {
      i && t.next(g), c++;
      let L = !1;
      N(n(g, l++)).subscribe(
        y(
          t,
          (O) => {
            o?.(O), i ? f(O) : t.next(O);
          },
          () => {
            L = !0;
          },
          void 0,
          () => {
            if (L)
              try {
                for (c--; u.length && c < r; ) {
                  let O = u.shift();
                  s ? ne(t, s, () => h(O)) : h(O);
                }
                p();
              } catch (O) {
                t.error(O);
              }
          },
        ),
      );
    };
  return (
    e.subscribe(
      y(t, f, () => {
        (d = !0), p();
      }),
    ),
    () => {
      a?.();
    }
  );
}
function at(e, t, n = 1 / 0) {
  return D(t)
    ? at((r, o) => st((i, s) => t(r, i, o, s))(N(e(r, o))), n)
    : (typeof t == "number" && (n = t), v((r, o) => Nu(r, o, e, n)));
}
function ln(e = 1 / 0) {
  return at(Q, e);
}
function xu() {
  return ln(1);
}
function gr(...e) {
  return xu()(Me(e, _e(e)));
}
function mp(e) {
  return new T((t) => {
    N(e()).subscribe(t);
  });
}
function yp(...e) {
  let t = Xn(e),
    { args: n, keys: r } = pr(e),
    o = new T((i) => {
      let { length: s } = n;
      if (!s) {
        i.complete();
        return;
      }
      let a = new Array(s),
        u = s,
        c = s;
      for (let l = 0; l < s; l++) {
        let d = !1;
        N(n[l]).subscribe(
          y(
            i,
            (p) => {
              d || ((d = !0), c--), (a[l] = p);
            },
            () => u--,
            void 0,
            () => {
              (!u || !d) && (c || i.next(r ? hr(r, a) : a), i.complete());
            },
          ),
        );
      }
    });
  return t ? o.pipe(fr(t)) : o;
}
function dn(e = 0, t, n = hu) {
  let r = -1;
  return (
    t != null && (Jn(t) ? (n = t) : (r = t)),
    new T((o) => {
      let i = Tu(e) ? +e - n.now() : e;
      i < 0 && (i = 0);
      let s = 0;
      return n.schedule(function () {
        o.closed ||
          (o.next(s++), 0 <= r ? this.schedule(void 0, r) : o.complete());
      }, i);
    })
  );
}
function vp(e = 0, t = rt) {
  return e < 0 && (e = 0), dn(e, e, t);
}
function Dp(...e) {
  let t = _e(e),
    n = gu(e, 1 / 0),
    r = e;
  return r.length ? (r.length === 1 ? N(r[0]) : ln(n)(Me(r, t))) : ot;
}
function ut(e, t) {
  return v((n, r) => {
    let o = 0;
    n.subscribe(y(r, (i) => e.call(t, i, o++) && r.next(i)));
  });
}
function Au(e) {
  return v((t, n) => {
    let r = !1,
      o = null,
      i = null,
      s = !1,
      a = () => {
        if ((i?.unsubscribe(), (i = null), r)) {
          r = !1;
          let c = o;
          (o = null), n.next(c);
        }
        s && n.complete();
      },
      u = () => {
        (i = null), s && n.complete();
      };
    t.subscribe(
      y(
        n,
        (c) => {
          (r = !0), (o = c), i || N(e(c)).subscribe((i = y(n, a, u)));
        },
        () => {
          (s = !0), (!r || !i || i.closed) && n.complete();
        },
      ),
    );
  });
}
function Ep(e, t = rt) {
  return Au(() => dn(e, t));
}
function Ru(e) {
  return v((t, n) => {
    let r = null,
      o = !1,
      i;
    (r = t.subscribe(
      y(n, void 0, void 0, (s) => {
        (i = N(e(s, Ru(e)(t)))),
          r ? (r.unsubscribe(), (r = null), i.subscribe(n)) : (o = !0);
      }),
    )),
      o && (r.unsubscribe(), (r = null), i.subscribe(n));
  });
}
function Ou(e, t, n, r, o) {
  return (i, s) => {
    let a = n,
      u = t,
      c = 0;
    i.subscribe(
      y(
        s,
        (l) => {
          let d = c++;
          (u = a ? e(u, l, d) : ((a = !0), l)), r && s.next(u);
        },
        o &&
          (() => {
            a && s.next(u), s.complete();
          }),
      ),
    );
  };
}
function Ip(e, t) {
  return D(t) ? at(e, t, 1) : at(e, 1);
}
function wp(e, t = rt) {
  return v((n, r) => {
    let o = null,
      i = null,
      s = null,
      a = () => {
        if (o) {
          o.unsubscribe(), (o = null);
          let c = i;
          (i = null), r.next(c);
        }
      };
    function u() {
      let c = s + e,
        l = t.now();
      if (l < c) {
        (o = this.schedule(void 0, c - l)), r.add(o);
        return;
      }
      a();
    }
    n.subscribe(
      y(
        r,
        (c) => {
          (i = c), (s = t.now()), o || ((o = t.schedule(u, e)), r.add(o));
        },
        () => {
          a(), r.complete();
        },
        void 0,
        () => {
          i = o = null;
        },
      ),
    );
  });
}
function fn(e) {
  return v((t, n) => {
    let r = !1;
    t.subscribe(
      y(
        n,
        (o) => {
          (r = !0), n.next(o);
        },
        () => {
          r || n.next(e), n.complete();
        },
      ),
    );
  });
}
function ri(e) {
  return e <= 0
    ? () => ot
    : v((t, n) => {
        let r = 0;
        t.subscribe(
          y(n, (o) => {
            ++r <= e && (n.next(o), e <= r && n.complete());
          }),
        );
      });
}
function Cp(e, t = Q) {
  return (
    (e = e ?? bp),
    v((n, r) => {
      let o,
        i = !0;
      n.subscribe(
        y(r, (s) => {
          let a = t(s);
          (i || !e(o, a)) && ((i = !1), (o = a), r.next(s));
        }),
      );
    })
  );
}
function bp(e, t) {
  return e === t;
}
function mr(e = _p) {
  return v((t, n) => {
    let r = !1;
    t.subscribe(
      y(
        n,
        (o) => {
          (r = !0), n.next(o);
        },
        () => (r ? n.complete() : n.error(e())),
      ),
    );
  });
}
function _p() {
  return new ve();
}
function Mp(e) {
  return v((t, n) => {
    try {
      t.subscribe(n);
    } finally {
      n.add(e);
    }
  });
}
function Tp(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? ut((o, i) => e(o, i, r)) : Q,
      ri(1),
      n ? fn(t) : mr(() => new ve()),
    );
}
function oi(e) {
  return e <= 0
    ? () => ot
    : v((t, n) => {
        let r = [];
        t.subscribe(
          y(
            n,
            (o) => {
              r.push(o), e < r.length && r.shift();
            },
            () => {
              for (let o of r) n.next(o);
              n.complete();
            },
            void 0,
            () => {
              r = null;
            },
          ),
        );
      });
}
function Sp(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? ut((o, i) => e(o, i, r)) : Q,
      oi(1),
      n ? fn(t) : mr(() => new ve()),
    );
}
function Np() {
  return v((e, t) => {
    let n,
      r = !1;
    e.subscribe(
      y(t, (o) => {
        let i = n;
        (n = o), r && t.next([i, o]), (r = !0);
      }),
    );
  });
}
function xp(e, t) {
  return v(Ou(e, t, arguments.length >= 2, !0));
}
function Fu(e = {}) {
  let {
    connector: t = () => new te(),
    resetOnError: n = !0,
    resetOnComplete: r = !0,
    resetOnRefCountZero: o = !0,
  } = e;
  return (i) => {
    let s,
      a,
      u,
      c = 0,
      l = !1,
      d = !1,
      p = () => {
        a?.unsubscribe(), (a = void 0);
      },
      f = () => {
        p(), (s = u = void 0), (l = d = !1);
      },
      h = () => {
        let g = s;
        f(), g?.unsubscribe();
      };
    return v((g, L) => {
      c++, !d && !l && p();
      let O = (u = u ?? t());
      L.add(() => {
        c--, c === 0 && !d && !l && (a = ii(h, o));
      }),
        O.subscribe(L),
        !s &&
          c > 0 &&
          ((s = new ye({
            next: (ze) => O.next(ze),
            error: (ze) => {
              (d = !0), p(), (a = ii(f, n, ze)), O.error(ze);
            },
            complete: () => {
              (l = !0), p(), (a = ii(f, r)), O.complete();
            },
          })),
          N(g).subscribe(s));
    })(i);
  };
}
function ii(e, t, ...n) {
  if (t === !0) {
    e();
    return;
  }
  if (t === !1) return;
  let r = new ye({
    next: () => {
      r.unsubscribe(), e();
    },
  });
  return N(t(...n)).subscribe(r);
}
function Ap(e, t, n) {
  let r,
    o = !1;
  return (
    e && typeof e == "object"
      ? ({
          bufferSize: r = 1 / 0,
          windowTime: t = 1 / 0,
          refCount: o = !1,
          scheduler: n,
        } = e)
      : (r = e ?? 1 / 0),
    Fu({
      connector: () => new Zn(r, t, n),
      resetOnError: !0,
      resetOnComplete: !1,
      resetOnRefCountZero: o,
    })
  );
}
function Rp(e) {
  return ut((t, n) => e <= n);
}
function Op(...e) {
  let t = _e(e);
  return v((n, r) => {
    (t ? gr(e, n, t) : gr(e, n)).subscribe(r);
  });
}
function Fp(e, t) {
  return v((n, r) => {
    let o = null,
      i = 0,
      s = !1,
      a = () => s && !o && r.complete();
    n.subscribe(
      y(
        r,
        (u) => {
          o?.unsubscribe();
          let c = 0,
            l = i++;
          N(e(u, l)).subscribe(
            (o = y(
              r,
              (d) => r.next(t ? t(u, d, l, c++) : d),
              () => {
                (o = null), a();
              },
            )),
          );
        },
        () => {
          (s = !0), a();
        },
      ),
    );
  });
}
function kp(e) {
  return v((t, n) => {
    N(e).subscribe(y(n, () => n.complete(), sn)), !n.closed && t.subscribe(n);
  });
}
function Pp(e, t, n) {
  let r = D(e) || t || n ? { next: e, error: t, complete: n } : e;
  return r
    ? v((o, i) => {
        var s;
        (s = r.subscribe) === null || s === void 0 || s.call(r);
        let a = !0;
        o.subscribe(
          y(
            i,
            (u) => {
              var c;
              (c = r.next) === null || c === void 0 || c.call(r, u), i.next(u);
            },
            () => {
              var u;
              (a = !1),
                (u = r.complete) === null || u === void 0 || u.call(r),
                i.complete();
            },
            (u) => {
              var c;
              (a = !1),
                (c = r.error) === null || c === void 0 || c.call(r, u),
                i.error(u);
            },
            () => {
              var u, c;
              a && ((u = r.unsubscribe) === null || u === void 0 || u.call(r)),
                (c = r.finalize) === null || c === void 0 || c.call(r);
            },
          ),
        );
      })
    : Q;
}
var bc = "https://g.co/ng/security#xss",
  b = class extends Error {
    code;
    constructor(t, n) {
      super(_c(t, n)), (this.code = t);
    }
  };
function _c(e, t) {
  return `${`NG0${Math.abs(e)}`}${t ? ": " + t : ""}`;
}
var Mc = Symbol("InputSignalNode#UNSET"),
  Lp = ee(X({}, Go), {
    transformFn: void 0,
    applyValueToInputSignal(e, t) {
      $n(e, t);
    },
  });
function Tc(e, t) {
  let n = Object.create(Lp);
  (n.value = e), (n.transformFn = t?.transform);
  function r() {
    if ((jn(n), n.value === Mc)) throw new b(-950, !1);
    return n.value;
  }
  return (r[G] = n), r;
}
function Tn(e) {
  return { toString: e }.toString();
}
var yr = "__parameters__";
function Vp(e) {
  return function (...n) {
    if (e) {
      let r = e(...n);
      for (let o in r) this[o] = r[o];
    }
  };
}
function Sc(e, t, n) {
  return Tn(() => {
    let r = Vp(t);
    function o(...i) {
      if (this instanceof o) return r.apply(this, i), this;
      let s = new o(...i);
      return (a.annotation = s), a;
      function a(u, c, l) {
        let d = u.hasOwnProperty(yr)
          ? u[yr]
          : Object.defineProperty(u, yr, { value: [] })[yr];
        for (; d.length <= l; ) d.push(null);
        return (d[l] = d[l] || []).push(s), u;
      }
    }
    return (
      n && (o.prototype = Object.create(n.prototype)),
      (o.prototype.ngMetadataName = e),
      (o.annotationCls = o),
      o
    );
  });
}
var We = globalThis;
function x(e) {
  for (let t in e) if (e[t] === x) return t;
  throw Error("Could not find renamed property on target object.");
}
function jp(e, t) {
  for (let n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
}
function K(e) {
  if (typeof e == "string") return e;
  if (Array.isArray(e)) return `[${e.map(K).join(", ")}]`;
  if (e == null) return "" + e;
  let t = e.overriddenName || e.name;
  if (t) return `${t}`;
  let n = e.toString();
  if (n == null) return "" + n;
  let r = n.indexOf(`
`);
  return r >= 0 ? n.slice(0, r) : n;
}
function Di(e, t) {
  return e ? (t ? `${e} ${t}` : e) : t || "";
}
var Bp = x({ __forward_ref__: x });
function Nc(e) {
  return (
    (e.__forward_ref__ = Nc),
    (e.toString = function () {
      return K(this());
    }),
    e
  );
}
function U(e) {
  return xc(e) ? e() : e;
}
function xc(e) {
  return (
    typeof e == "function" && e.hasOwnProperty(Bp) && e.__forward_ref__ === Nc
  );
}
function A(e) {
  return {
    token: e.token,
    providedIn: e.providedIn || null,
    factory: e.factory,
    value: void 0,
  };
}
function Ac(e) {
  return { providers: e.providers || [], imports: e.imports || [] };
}
function ao(e) {
  return ku(e, Rc) || ku(e, Oc);
}
function DS(e) {
  return ao(e) !== null;
}
function ku(e, t) {
  return e.hasOwnProperty(t) ? e[t] : null;
}
function Hp(e) {
  let t = e && (e[Rc] || e[Oc]);
  return t || null;
}
function Pu(e) {
  return e && (e.hasOwnProperty(Lu) || e.hasOwnProperty($p)) ? e[Lu] : null;
}
var Rc = x({ ɵprov: x }),
  Lu = x({ ɵinj: x }),
  Oc = x({ ngInjectableDef: x }),
  $p = x({ ngInjectorDef: x }),
  S = class {
    _desc;
    ngMetadataName = "InjectionToken";
    ɵprov;
    constructor(t, n) {
      (this._desc = t),
        (this.ɵprov = void 0),
        typeof n == "number"
          ? (this.__NG_ELEMENT_ID__ = n)
          : n !== void 0 &&
            (this.ɵprov = A({
              token: this,
              providedIn: n.providedIn || "root",
              factory: n.factory,
            }));
    }
    get multi() {
      return this;
    }
    toString() {
      return `InjectionToken ${this._desc}`;
    }
  };
function Fc(e) {
  return e && !!e.ɵproviders;
}
var Up = x({ ɵcmp: x }),
  zp = x({ ɵdir: x }),
  Gp = x({ ɵpipe: x }),
  Wp = x({ ɵmod: x }),
  Nr = x({ ɵfac: x }),
  mn = x({ __NG_ELEMENT_ID__: x }),
  Vu = x({ __NG_ENV_ID__: x });
function Ie(e) {
  return typeof e == "string" ? e : e == null ? "" : String(e);
}
function qp(e) {
  return typeof e == "function"
    ? e.name || e.toString()
    : typeof e == "object" && e != null && typeof e.type == "function"
      ? e.type.name || e.type.toString()
      : Ie(e);
}
function Zp(e, t) {
  let n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
  throw new b(-200, e);
}
function Ts(e, t) {
  throw new b(-201, !1);
}
var M = (function (e) {
    return (
      (e[(e.Default = 0)] = "Default"),
      (e[(e.Host = 1)] = "Host"),
      (e[(e.Self = 2)] = "Self"),
      (e[(e.SkipSelf = 4)] = "SkipSelf"),
      (e[(e.Optional = 8)] = "Optional"),
      e
    );
  })(M || {}),
  Ei;
function kc() {
  return Ei;
}
function re(e) {
  let t = Ei;
  return (Ei = e), t;
}
function Pc(e, t, n) {
  let r = ao(e);
  if (r && r.providedIn == "root")
    return r.value === void 0 ? (r.value = r.factory()) : r.value;
  if (n & M.Optional) return null;
  if (t !== void 0) return t;
  Ts(e, "Injector");
}
var Qp = {},
  yn = Qp,
  Ii = "__NG_DI_FLAG__",
  xr = "ngTempTokenPath",
  Yp = "ngTokenPath",
  Kp = /\n/gm,
  Jp = "\u0275",
  ju = "__source",
  zt;
function Xp() {
  return zt;
}
function Ge(e) {
  let t = zt;
  return (zt = e), t;
}
function eh(e, t = M.Default) {
  if (zt === void 0) throw new b(-203, !1);
  return zt === null
    ? Pc(e, void 0, t)
    : zt.get(e, t & M.Optional ? null : void 0, t);
}
function W(e, t = M.Default) {
  return (kc() || eh)(U(e), t);
}
function E(e, t = M.Default) {
  return W(e, uo(t));
}
function uo(e) {
  return typeof e > "u" || typeof e == "number"
    ? e
    : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4);
}
function wi(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = U(e[n]);
    if (Array.isArray(r)) {
      if (r.length === 0) throw new b(900, !1);
      let o,
        i = M.Default;
      for (let s = 0; s < r.length; s++) {
        let a = r[s],
          u = th(a);
        typeof u == "number" ? (u === -1 ? (o = a.token) : (i |= u)) : (o = a);
      }
      t.push(W(o, i));
    } else t.push(W(r));
  }
  return t;
}
function Lc(e, t) {
  return (e[Ii] = t), (e.prototype[Ii] = t), e;
}
function th(e) {
  return e[Ii];
}
function nh(e, t, n, r) {
  let o = e[xr];
  throw (
    (t[ju] && o.unshift(t[ju]),
    (e.message = rh(
      `
` + e.message,
      o,
      n,
      r,
    )),
    (e[Yp] = o),
    (e[xr] = null),
    e)
  );
}
function rh(e, t, n, r = null) {
  e =
    e &&
    e.charAt(0) ===
      `
` &&
    e.charAt(1) == Jp
      ? e.slice(2)
      : e;
  let o = K(t);
  if (Array.isArray(t)) o = t.map(K).join(" -> ");
  else if (typeof t == "object") {
    let i = [];
    for (let s in t)
      if (t.hasOwnProperty(s)) {
        let a = t[s];
        i.push(s + ":" + (typeof a == "string" ? JSON.stringify(a) : K(a)));
      }
    o = `{${i.join(", ")}}`;
  }
  return `${n}${r ? "(" + r + ")" : ""}[${o}]: ${e.replace(
    Kp,
    `
  `,
  )}`;
}
var Vc = Lc(Sc("Optional"), 8);
var jc = Lc(Sc("SkipSelf"), 4);
function dt(e, t) {
  let n = e.hasOwnProperty(Nr);
  return n ? e[Nr] : null;
}
function oh(e, t, n) {
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) {
    let o = e[r],
      i = t[r];
    if ((n && ((o = n(o)), (i = n(i))), i !== o)) return !1;
  }
  return !0;
}
function ih(e) {
  return e.flat(Number.POSITIVE_INFINITY);
}
function Ss(e, t) {
  e.forEach((n) => (Array.isArray(n) ? Ss(n, t) : t(n)));
}
function Bc(e, t, n) {
  t >= e.length ? e.push(n) : e.splice(t, 0, n);
}
function Ar(e, t) {
  return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
}
function sh(e, t) {
  let n = [];
  for (let r = 0; r < e; r++) n.push(t);
  return n;
}
function ah(e, t, n, r) {
  let o = e.length;
  if (o == t) e.push(n, r);
  else if (o === 1) e.push(r, e[0]), (e[0] = n);
  else {
    for (o--, e.push(e[o - 1], e[o]); o > t; ) {
      let i = o - 2;
      (e[o] = e[i]), o--;
    }
    (e[t] = n), (e[t + 1] = r);
  }
}
function Ns(e, t, n) {
  let r = Sn(e, t);
  return r >= 0 ? (e[r | 1] = n) : ((r = ~r), ah(e, r, t, n)), r;
}
function si(e, t) {
  let n = Sn(e, t);
  if (n >= 0) return e[n | 1];
}
function Sn(e, t) {
  return uh(e, t, 1);
}
function uh(e, t, n) {
  let r = 0,
    o = e.length >> n;
  for (; o !== r; ) {
    let i = r + ((o - r) >> 1),
      s = e[i << n];
    if (t === s) return i << n;
    s > t ? (o = i) : (r = i + 1);
  }
  return ~(o << n);
}
var Se = {},
  Y = [],
  Rr = new S(""),
  Hc = new S("", -1),
  $c = new S(""),
  Or = class {
    get(t, n = yn) {
      if (n === yn) {
        let r = new Error(`NullInjectorError: No provider for ${K(t)}!`);
        throw ((r.name = "NullInjectorError"), r);
      }
      return n;
    }
  };
function Uc(e, t) {
  let n = e[Wp] || null;
  if (!n && t === !0)
    throw new Error(`Type ${K(e)} does not have '\u0275mod' property.`);
  return n;
}
function ke(e) {
  return e[Up] || null;
}
function xs(e) {
  return e[zp] || null;
}
function zc(e) {
  return e[Gp] || null;
}
function ch(e) {
  let t = ke(e) || xs(e) || zc(e);
  return t !== null && t.standalone;
}
function lh(e) {
  return { ɵproviders: e };
}
function dh(...e) {
  return { ɵproviders: Gc(!0, e), ɵfromNgModule: !0 };
}
function Gc(e, ...t) {
  let n = [],
    r = new Set(),
    o,
    i = (s) => {
      n.push(s);
    };
  return (
    Ss(t, (s) => {
      let a = s;
      Ci(a, i, [], r) && ((o ||= []), o.push(a));
    }),
    o !== void 0 && Wc(o, i),
    n
  );
}
function Wc(e, t) {
  for (let n = 0; n < e.length; n++) {
    let { ngModule: r, providers: o } = e[n];
    As(o, (i) => {
      t(i, r);
    });
  }
}
function Ci(e, t, n, r) {
  if (((e = U(e)), !e)) return !1;
  let o = null,
    i = Pu(e),
    s = !i && ke(e);
  if (!i && !s) {
    let u = e.ngModule;
    if (((i = Pu(u)), i)) o = u;
    else return !1;
  } else {
    if (s && !s.standalone) return !1;
    o = e;
  }
  let a = r.has(o);
  if (s) {
    if (a) return !1;
    if ((r.add(o), s.dependencies)) {
      let u =
        typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
      for (let c of u) Ci(c, t, n, r);
    }
  } else if (i) {
    if (i.imports != null && !a) {
      r.add(o);
      let c;
      try {
        Ss(i.imports, (l) => {
          Ci(l, t, n, r) && ((c ||= []), c.push(l));
        });
      } finally {
      }
      c !== void 0 && Wc(c, t);
    }
    if (!a) {
      let c = dt(o) || (() => new o());
      t({ provide: o, useFactory: c, deps: Y }, o),
        t({ provide: $c, useValue: o, multi: !0 }, o),
        t({ provide: Rr, useValue: () => W(o), multi: !0 }, o);
    }
    let u = i.providers;
    if (u != null && !a) {
      let c = e;
      As(u, (l) => {
        t(l, c);
      });
    }
  } else return !1;
  return o !== e && e.providers !== void 0;
}
function As(e, t) {
  for (let n of e)
    Fc(n) && (n = n.ɵproviders), Array.isArray(n) ? As(n, t) : t(n);
}
var fh = x({ provide: String, useValue: x });
function qc(e) {
  return e !== null && typeof e == "object" && fh in e;
}
function ph(e) {
  return !!(e && e.useExisting);
}
function hh(e) {
  return !!(e && e.useFactory);
}
function Wt(e) {
  return typeof e == "function";
}
function gh(e) {
  return !!e.useClass;
}
var Zc = new S(""),
  wr = {},
  mh = {},
  ai;
function co() {
  return ai === void 0 && (ai = new Or()), ai;
}
var Ye = class {},
  vn = class extends Ye {
    parent;
    source;
    scopes;
    records = new Map();
    _ngOnDestroyHooks = new Set();
    _onDestroyHooks = [];
    get destroyed() {
      return this._destroyed;
    }
    _destroyed = !1;
    injectorDefTypes;
    constructor(t, n, r, o) {
      super(),
        (this.parent = n),
        (this.source = r),
        (this.scopes = o),
        _i(t, (s) => this.processProvider(s)),
        this.records.set(Hc, Bt(void 0, this)),
        o.has("environment") && this.records.set(Ye, Bt(void 0, this));
      let i = this.records.get(Zc);
      i != null && typeof i.value == "string" && this.scopes.add(i.value),
        (this.injectorDefTypes = new Set(this.get($c, Y, M.Self)));
    }
    destroy() {
      hn(this), (this._destroyed = !0);
      let t = _(null);
      try {
        for (let r of this._ngOnDestroyHooks) r.ngOnDestroy();
        let n = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let r of n) r();
      } finally {
        this.records.clear(),
          this._ngOnDestroyHooks.clear(),
          this.injectorDefTypes.clear(),
          _(t);
      }
    }
    onDestroy(t) {
      return (
        hn(this), this._onDestroyHooks.push(t), () => this.removeOnDestroy(t)
      );
    }
    runInContext(t) {
      hn(this);
      let n = Ge(this),
        r = re(void 0),
        o;
      try {
        return t();
      } finally {
        Ge(n), re(r);
      }
    }
    get(t, n = yn, r = M.Default) {
      if ((hn(this), t.hasOwnProperty(Vu))) return t[Vu](this);
      r = uo(r);
      let o,
        i = Ge(this),
        s = re(void 0);
      try {
        if (!(r & M.SkipSelf)) {
          let u = this.records.get(t);
          if (u === void 0) {
            let c = Ih(t) && ao(t);
            c && this.injectableDefInScope(c)
              ? (u = Bt(bi(t), wr))
              : (u = null),
              this.records.set(t, u);
          }
          if (u != null) return this.hydrate(t, u);
        }
        let a = r & M.Self ? co() : this.parent;
        return (n = r & M.Optional && n === yn ? null : n), a.get(t, n);
      } catch (a) {
        if (a.name === "NullInjectorError") {
          if (((a[xr] = a[xr] || []).unshift(K(t)), i)) throw a;
          return nh(a, t, "R3InjectorError", this.source);
        } else throw a;
      } finally {
        re(s), Ge(i);
      }
    }
    resolveInjectorInitializers() {
      let t = _(null),
        n = Ge(this),
        r = re(void 0),
        o;
      try {
        let i = this.get(Rr, Y, M.Self);
        for (let s of i) s();
      } finally {
        Ge(n), re(r), _(t);
      }
    }
    toString() {
      let t = [],
        n = this.records;
      for (let r of n.keys()) t.push(K(r));
      return `R3Injector[${t.join(", ")}]`;
    }
    processProvider(t) {
      t = U(t);
      let n = Wt(t) ? t : U(t && t.provide),
        r = vh(t);
      if (!Wt(t) && t.multi === !0) {
        let o = this.records.get(n);
        o ||
          ((o = Bt(void 0, wr, !0)),
          (o.factory = () => wi(o.multi)),
          this.records.set(n, o)),
          (n = t),
          o.multi.push(t);
      }
      this.records.set(n, r);
    }
    hydrate(t, n) {
      let r = _(null);
      try {
        return (
          n.value === wr && ((n.value = mh), (n.value = n.factory())),
          typeof n.value == "object" &&
            n.value &&
            Eh(n.value) &&
            this._ngOnDestroyHooks.add(n.value),
          n.value
        );
      } finally {
        _(r);
      }
    }
    injectableDefInScope(t) {
      if (!t.providedIn) return !1;
      let n = U(t.providedIn);
      return typeof n == "string"
        ? n === "any" || this.scopes.has(n)
        : this.injectorDefTypes.has(n);
    }
    removeOnDestroy(t) {
      let n = this._onDestroyHooks.indexOf(t);
      n !== -1 && this._onDestroyHooks.splice(n, 1);
    }
  };
function bi(e) {
  let t = ao(e),
    n = t !== null ? t.factory : dt(e);
  if (n !== null) return n;
  if (e instanceof S) throw new b(204, !1);
  if (e instanceof Function) return yh(e);
  throw new b(204, !1);
}
function yh(e) {
  if (e.length > 0) throw new b(204, !1);
  let n = Hp(e);
  return n !== null ? () => n.factory(e) : () => new e();
}
function vh(e) {
  if (qc(e)) return Bt(void 0, e.useValue);
  {
    let t = Qc(e);
    return Bt(t, wr);
  }
}
function Qc(e, t, n) {
  let r;
  if (Wt(e)) {
    let o = U(e);
    return dt(o) || bi(o);
  } else if (qc(e)) r = () => U(e.useValue);
  else if (hh(e)) r = () => e.useFactory(...wi(e.deps || []));
  else if (ph(e)) r = () => W(U(e.useExisting));
  else {
    let o = U(e && (e.useClass || e.provide));
    if (Dh(e)) r = () => new o(...wi(e.deps));
    else return dt(o) || bi(o);
  }
  return r;
}
function hn(e) {
  if (e.destroyed) throw new b(205, !1);
}
function Bt(e, t, n = !1) {
  return { factory: e, value: t, multi: n ? [] : void 0 };
}
function Dh(e) {
  return !!e.deps;
}
function Eh(e) {
  return (
    e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"
  );
}
function Ih(e) {
  return typeof e == "function" || (typeof e == "object" && e instanceof S);
}
function _i(e, t) {
  for (let n of e)
    Array.isArray(n) ? _i(n, t) : n && Fc(n) ? _i(n.ɵproviders, t) : t(n);
}
function Yc(e, t) {
  e instanceof vn && hn(e);
  let n,
    r = Ge(e),
    o = re(void 0);
  try {
    return t();
  } finally {
    Ge(r), re(o);
  }
}
function Kc() {
  return kc() !== void 0 || Xp() != null;
}
function lo(e) {
  if (!Kc()) throw new b(-203, !1);
}
function wh(e) {
  return typeof e == "function";
}
var Oe = 0,
  w = 1,
  m = 2,
  q = 3,
  we = 4,
  ie = 5,
  Dn = 6,
  Fr = 7,
  ce = 8,
  En = 9,
  Pe = 10,
  k = 11,
  In = 12,
  Bu = 13,
  Jt = 14,
  fe = 15,
  ft = 16,
  Ht = 17,
  Le = 18,
  fo = 19,
  Jc = 20,
  Ze = 21,
  Cr = 22,
  pt = 23,
  ae = 24,
  $ = 25,
  Rs = 1;
var ht = 7,
  kr = 8,
  qt = 9,
  oe = 10;
function Qe(e) {
  return Array.isArray(e) && typeof e[Rs] == "object";
}
function je(e) {
  return Array.isArray(e) && e[Rs] === !0;
}
function Os(e) {
  return (e.flags & 4) !== 0;
}
function bt(e) {
  return e.componentOffset > -1;
}
function po(e) {
  return (e.flags & 1) === 1;
}
function Ne(e) {
  return !!e.template;
}
function Pr(e) {
  return (e[m] & 512) !== 0;
}
function Nn(e) {
  return (e[m] & 256) === 256;
}
var Mi = class {
  previousValue;
  currentValue;
  firstChange;
  constructor(t, n, r) {
    (this.previousValue = t), (this.currentValue = n), (this.firstChange = r);
  }
  isFirstChange() {
    return this.firstChange;
  }
};
function Xc(e, t, n, r) {
  t !== null ? t.applyValueToInputSignal(t, r) : (e[n] = r);
}
var el = (() => {
  let e = () => tl;
  return (e.ngInherit = !0), e;
})();
function tl(e) {
  return e.type.prototype.ngOnChanges && (e.setInput = bh), Ch;
}
function Ch() {
  let e = rl(this),
    t = e?.current;
  if (t) {
    let n = e.previous;
    if (n === Se) e.previous = t;
    else for (let r in t) n[r] = t[r];
    (e.current = null), this.ngOnChanges(t);
  }
}
function bh(e, t, n, r, o) {
  let i = this.declaredInputs[r],
    s = rl(e) || _h(e, { previous: Se, current: null }),
    a = s.current || (s.current = {}),
    u = s.previous,
    c = u[i];
  (a[i] = new Mi(c && c.currentValue, n, u === Se)), Xc(e, t, o, n);
}
var nl = "__ngSimpleChanges__";
function rl(e) {
  return e[nl] || null;
}
function _h(e, t) {
  return (e[nl] = t);
}
var Hu = null;
var de = function (e, t, n) {
    Hu?.(e, t, n);
  },
  Mh = "svg",
  Th = "math";
function xe(e) {
  for (; Array.isArray(e); ) e = e[Oe];
  return e;
}
function Sh(e) {
  for (; Array.isArray(e); ) {
    if (typeof e[Rs] == "object") return e;
    e = e[Oe];
  }
  return null;
}
function ol(e, t) {
  return xe(t[e]);
}
function Ce(e, t) {
  return xe(t[e.index]);
}
function Fs(e, t) {
  return e.data[t];
}
function ks(e, t) {
  return e[t];
}
function Ae(e, t) {
  let n = t[e];
  return Qe(n) ? n : n[Oe];
}
function Nh(e) {
  return (e[m] & 4) === 4;
}
function Ps(e) {
  return (e[m] & 128) === 128;
}
function xh(e) {
  return je(e[q]);
}
function Zt(e, t) {
  return t == null ? null : e[t];
}
function il(e) {
  e[Ht] = 0;
}
function Ls(e) {
  e[m] & 1024 || ((e[m] |= 1024), Ps(e) && xn(e));
}
function Ah(e, t) {
  for (; e > 0; ) (t = t[Jt]), e--;
  return t;
}
function ho(e) {
  return !!(e[m] & 9216 || e[ae]?.dirty);
}
function Ti(e) {
  e[Pe].changeDetectionScheduler?.notify(9),
    e[m] & 64 && (e[m] |= 1024),
    ho(e) && xn(e);
}
function xn(e) {
  e[Pe].changeDetectionScheduler?.notify(0);
  let t = gt(e);
  for (; t !== null && !(t[m] & 8192 || ((t[m] |= 8192), !Ps(t))); ) t = gt(t);
}
function sl(e, t) {
  if (Nn(e)) throw new b(911, !1);
  e[Ze] === null && (e[Ze] = []), e[Ze].push(t);
}
function Rh(e, t) {
  if (e[Ze] === null) return;
  let n = e[Ze].indexOf(t);
  n !== -1 && e[Ze].splice(n, 1);
}
function gt(e) {
  let t = e[q];
  return je(t) ? t[q] : t;
}
function al(e) {
  return (e[Fr] ??= []);
}
function ul(e) {
  return (e.cleanup ??= []);
}
function Oh(e, t, n, r) {
  let o = al(t);
  o.push(n), e.firstCreatePass && ul(e).push(r, o.length - 1);
}
var C = { lFrame: ml(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var Si = !1;
function Fh() {
  return C.lFrame.elementDepthCount;
}
function kh() {
  C.lFrame.elementDepthCount++;
}
function Ph() {
  C.lFrame.elementDepthCount--;
}
function go() {
  return C.bindingsEnabled;
}
function cl() {
  return C.skipHydrationRootTNode !== null;
}
function Lh(e) {
  return C.skipHydrationRootTNode === e;
}
function Vh() {
  C.skipHydrationRootTNode = null;
}
function I() {
  return C.lFrame.lView;
}
function P() {
  return C.lFrame.tView;
}
function ES(e) {
  return (C.lFrame.contextLView = e), e[ce];
}
function IS(e) {
  return (C.lFrame.contextLView = null), e;
}
function Z() {
  let e = ll();
  for (; e !== null && e.type === 64; ) e = e.parent;
  return e;
}
function ll() {
  return C.lFrame.currentTNode;
}
function jh() {
  let e = C.lFrame,
    t = e.currentTNode;
  return e.isParent ? t : t.parent;
}
function _t(e, t) {
  let n = C.lFrame;
  (n.currentTNode = e), (n.isParent = t);
}
function Vs() {
  return C.lFrame.isParent;
}
function js() {
  C.lFrame.isParent = !1;
}
function Bh() {
  return C.lFrame.contextLView;
}
function dl() {
  return Si;
}
function Lr(e) {
  let t = Si;
  return (Si = e), t;
}
function Bs() {
  let e = C.lFrame,
    t = e.bindingRootIndex;
  return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t;
}
function fl() {
  return C.lFrame.bindingIndex;
}
function Hh(e) {
  return (C.lFrame.bindingIndex = e);
}
function Mt() {
  return C.lFrame.bindingIndex++;
}
function mo(e) {
  let t = C.lFrame,
    n = t.bindingIndex;
  return (t.bindingIndex = t.bindingIndex + e), n;
}
function $h() {
  return C.lFrame.inI18n;
}
function Uh(e, t) {
  let n = C.lFrame;
  (n.bindingIndex = n.bindingRootIndex = e), Ni(t);
}
function zh() {
  return C.lFrame.currentDirectiveIndex;
}
function Ni(e) {
  C.lFrame.currentDirectiveIndex = e;
}
function pl(e) {
  let t = C.lFrame.currentDirectiveIndex;
  return t === -1 ? null : e[t];
}
function Hs() {
  return C.lFrame.currentQueryIndex;
}
function yo(e) {
  C.lFrame.currentQueryIndex = e;
}
function Gh(e) {
  let t = e[w];
  return t.type === 2 ? t.declTNode : t.type === 1 ? e[ie] : null;
}
function hl(e, t, n) {
  if (n & M.SkipSelf) {
    let o = t,
      i = e;
    for (; (o = o.parent), o === null && !(n & M.Host); )
      if (((o = Gh(i)), o === null || ((i = i[Jt]), o.type & 10))) break;
    if (o === null) return !1;
    (t = o), (e = i);
  }
  let r = (C.lFrame = gl());
  return (r.currentTNode = t), (r.lView = e), !0;
}
function $s(e) {
  let t = gl(),
    n = e[w];
  (C.lFrame = t),
    (t.currentTNode = n.firstChild),
    (t.lView = e),
    (t.tView = n),
    (t.contextLView = e),
    (t.bindingIndex = n.bindingStartIndex),
    (t.inI18n = !1);
}
function gl() {
  let e = C.lFrame,
    t = e === null ? null : e.child;
  return t === null ? ml(e) : t;
}
function ml(e) {
  let t = {
    currentTNode: null,
    isParent: !0,
    lView: null,
    tView: null,
    selectedIndex: -1,
    contextLView: null,
    elementDepthCount: 0,
    currentNamespace: null,
    currentDirectiveIndex: -1,
    bindingRootIndex: -1,
    bindingIndex: -1,
    currentQueryIndex: 0,
    parent: e,
    child: null,
    inI18n: !1,
  };
  return e !== null && (e.child = t), t;
}
function yl() {
  let e = C.lFrame;
  return (C.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e;
}
var vl = yl;
function Us() {
  let e = yl();
  (e.isParent = !0),
    (e.tView = null),
    (e.selectedIndex = -1),
    (e.contextLView = null),
    (e.elementDepthCount = 0),
    (e.currentDirectiveIndex = -1),
    (e.currentNamespace = null),
    (e.bindingRootIndex = -1),
    (e.bindingIndex = -1),
    (e.currentQueryIndex = 0);
}
function Wh(e) {
  return (C.lFrame.contextLView = Ah(e, C.lFrame.contextLView))[ce];
}
function Be() {
  return C.lFrame.selectedIndex;
}
function mt(e) {
  C.lFrame.selectedIndex = e;
}
function An() {
  let e = C.lFrame;
  return Fs(e.tView, e.selectedIndex);
}
function qh() {
  return C.lFrame.currentNamespace;
}
var Dl = !0;
function vo() {
  return Dl;
}
function Do(e) {
  Dl = e;
}
function Zh(e, t, n) {
  let { ngOnChanges: r, ngOnInit: o, ngDoCheck: i } = t.type.prototype;
  if (r) {
    let s = tl(t);
    (n.preOrderHooks ??= []).push(e, s),
      (n.preOrderCheckHooks ??= []).push(e, s);
  }
  o && (n.preOrderHooks ??= []).push(0 - e, o),
    i &&
      ((n.preOrderHooks ??= []).push(e, i),
      (n.preOrderCheckHooks ??= []).push(e, i));
}
function zs(e, t) {
  for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
    let i = e.data[n].type.prototype,
      {
        ngAfterContentInit: s,
        ngAfterContentChecked: a,
        ngAfterViewInit: u,
        ngAfterViewChecked: c,
        ngOnDestroy: l,
      } = i;
    s && (e.contentHooks ??= []).push(-n, s),
      a &&
        ((e.contentHooks ??= []).push(n, a),
        (e.contentCheckHooks ??= []).push(n, a)),
      u && (e.viewHooks ??= []).push(-n, u),
      c &&
        ((e.viewHooks ??= []).push(n, c), (e.viewCheckHooks ??= []).push(n, c)),
      l != null && (e.destroyHooks ??= []).push(n, l);
  }
}
function br(e, t, n) {
  El(e, t, 3, n);
}
function _r(e, t, n, r) {
  (e[m] & 3) === n && El(e, t, n, r);
}
function ui(e, t) {
  let n = e[m];
  (n & 3) === t && ((n &= 16383), (n += 1), (e[m] = n));
}
function El(e, t, n, r) {
  let o = r !== void 0 ? e[Ht] & 65535 : 0,
    i = r ?? -1,
    s = t.length - 1,
    a = 0;
  for (let u = o; u < s; u++)
    if (typeof t[u + 1] == "number") {
      if (((a = t[u]), r != null && a >= r)) break;
    } else
      t[u] < 0 && (e[Ht] += 65536),
        (a < i || i == -1) &&
          (Qh(e, n, t, u), (e[Ht] = (e[Ht] & 4294901760) + u + 2)),
        u++;
}
function $u(e, t) {
  de(4, e, t);
  let n = _(null);
  try {
    t.call(e);
  } finally {
    _(n), de(5, e, t);
  }
}
function Qh(e, t, n, r) {
  let o = n[r] < 0,
    i = n[r + 1],
    s = o ? -n[r] : n[r],
    a = e[s];
  o
    ? e[m] >> 14 < e[Ht] >> 16 &&
      (e[m] & 3) === t &&
      ((e[m] += 16384), $u(a, i))
    : $u(a, i);
}
var Gt = -1,
  yt = class {
    factory;
    injectImpl;
    resolving = !1;
    canSeeViewProviders;
    multi;
    componentProviders;
    index;
    providerFactory;
    constructor(t, n, r) {
      (this.factory = t), (this.canSeeViewProviders = n), (this.injectImpl = r);
    }
  };
function Yh(e) {
  return e instanceof yt;
}
function Kh(e) {
  return (e.flags & 8) !== 0;
}
function Jh(e) {
  return (e.flags & 16) !== 0;
}
function Xh(e, t, n) {
  let r = 0;
  for (; r < n.length; ) {
    let o = n[r];
    if (typeof o == "number") {
      if (o !== 0) break;
      r++;
      let i = n[r++],
        s = n[r++],
        a = n[r++];
      e.setAttribute(t, s, a, i);
    } else {
      let i = o,
        s = n[++r];
      eg(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), r++;
    }
  }
  return r;
}
function Il(e) {
  return e === 3 || e === 4 || e === 6;
}
function eg(e) {
  return e.charCodeAt(0) === 64;
}
function Qt(e, t) {
  if (!(t === null || t.length === 0))
    if (e === null || e.length === 0) e = t.slice();
    else {
      let n = -1;
      for (let r = 0; r < t.length; r++) {
        let o = t[r];
        typeof o == "number"
          ? (n = o)
          : n === 0 ||
            (n === -1 || n === 2
              ? Uu(e, n, o, null, t[++r])
              : Uu(e, n, o, null, null));
      }
    }
  return e;
}
function Uu(e, t, n, r, o) {
  let i = 0,
    s = e.length;
  if (t === -1) s = -1;
  else
    for (; i < e.length; ) {
      let a = e[i++];
      if (typeof a == "number") {
        if (a === t) {
          s = -1;
          break;
        } else if (a > t) {
          s = i - 1;
          break;
        }
      }
    }
  for (; i < e.length; ) {
    let a = e[i];
    if (typeof a == "number") break;
    if (a === n) {
      if (r === null) {
        o !== null && (e[i + 1] = o);
        return;
      } else if (r === e[i + 1]) {
        e[i + 2] = o;
        return;
      }
    }
    i++, r !== null && i++, o !== null && i++;
  }
  s !== -1 && (e.splice(s, 0, t), (i = s + 1)),
    e.splice(i++, 0, n),
    r !== null && e.splice(i++, 0, r),
    o !== null && e.splice(i++, 0, o);
}
var ci = {},
  xi = class {
    injector;
    parentInjector;
    constructor(t, n) {
      (this.injector = t), (this.parentInjector = n);
    }
    get(t, n, r) {
      r = uo(r);
      let o = this.injector.get(t, ci, r);
      return o !== ci || n === ci ? o : this.parentInjector.get(t, n, r);
    }
  };
function wl(e) {
  return e !== Gt;
}
function Vr(e) {
  return e & 32767;
}
function tg(e) {
  return e >> 16;
}
function jr(e, t) {
  let n = tg(e),
    r = t;
  for (; n > 0; ) (r = r[Jt]), n--;
  return r;
}
var Ai = !0;
function Br(e) {
  let t = Ai;
  return (Ai = e), t;
}
var ng = 256,
  Cl = ng - 1,
  bl = 5,
  rg = 0,
  Te = {};
function og(e, t, n) {
  let r;
  typeof n == "string"
    ? (r = n.charCodeAt(0) || 0)
    : n.hasOwnProperty(mn) && (r = n[mn]),
    r == null && (r = n[mn] = rg++);
  let o = r & Cl,
    i = 1 << o;
  t.data[e + (o >> bl)] |= i;
}
function Hr(e, t) {
  let n = _l(e, t);
  if (n !== -1) return n;
  let r = t[w];
  r.firstCreatePass &&
    ((e.injectorIndex = t.length),
    li(r.data, e),
    li(t, null),
    li(r.blueprint, null));
  let o = Gs(e, t),
    i = e.injectorIndex;
  if (wl(o)) {
    let s = Vr(o),
      a = jr(o, t),
      u = a[w].data;
    for (let c = 0; c < 8; c++) t[i + c] = a[s + c] | u[s + c];
  }
  return (t[i + 8] = o), i;
}
function li(e, t) {
  e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
}
function _l(e, t) {
  return e.injectorIndex === -1 ||
    (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
    t[e.injectorIndex + 8] === null
    ? -1
    : e.injectorIndex;
}
function Gs(e, t) {
  if (e.parent && e.parent.injectorIndex !== -1) return e.parent.injectorIndex;
  let n = 0,
    r = null,
    o = t;
  for (; o !== null; ) {
    if (((r = xl(o)), r === null)) return Gt;
    if ((n++, (o = o[Jt]), r.injectorIndex !== -1))
      return r.injectorIndex | (n << 16);
  }
  return Gt;
}
function Ri(e, t, n) {
  og(e, t, n);
}
function ig(e, t) {
  if (t === "class") return e.classes;
  if (t === "style") return e.styles;
  let n = e.attrs;
  if (n) {
    let r = n.length,
      o = 0;
    for (; o < r; ) {
      let i = n[o];
      if (Il(i)) break;
      if (i === 0) o = o + 2;
      else if (typeof i == "number")
        for (o++; o < r && typeof n[o] == "string"; ) o++;
      else {
        if (i === t) return n[o + 1];
        o = o + 2;
      }
    }
  }
  return null;
}
function Ml(e, t, n) {
  if (n & M.Optional || e !== void 0) return e;
  Ts(t, "NodeInjector");
}
function Tl(e, t, n, r) {
  if (
    (n & M.Optional && r === void 0 && (r = null), !(n & (M.Self | M.Host)))
  ) {
    let o = e[En],
      i = re(void 0);
    try {
      return o ? o.get(t, r, n & M.Optional) : Pc(t, r, n & M.Optional);
    } finally {
      re(i);
    }
  }
  return Ml(r, t, n);
}
function Sl(e, t, n, r = M.Default, o) {
  if (e !== null) {
    if (t[m] & 2048 && !(r & M.Self)) {
      let s = cg(e, t, n, r, Te);
      if (s !== Te) return s;
    }
    let i = Nl(e, t, n, r, Te);
    if (i !== Te) return i;
  }
  return Tl(t, n, r, o);
}
function Nl(e, t, n, r, o) {
  let i = ag(n);
  if (typeof i == "function") {
    if (!hl(t, e, r)) return r & M.Host ? Ml(o, n, r) : Tl(t, n, r, o);
    try {
      let s;
      if (((s = i(r)), s == null && !(r & M.Optional))) Ts(n);
      else return s;
    } finally {
      vl();
    }
  } else if (typeof i == "number") {
    let s = null,
      a = _l(e, t),
      u = Gt,
      c = r & M.Host ? t[fe][ie] : null;
    for (
      (a === -1 || r & M.SkipSelf) &&
      ((u = a === -1 ? Gs(e, t) : t[a + 8]),
      u === Gt || !Gu(r, !1)
        ? (a = -1)
        : ((s = t[w]), (a = Vr(u)), (t = jr(u, t))));
      a !== -1;

    ) {
      let l = t[w];
      if (zu(i, a, l.data)) {
        let d = sg(a, t, n, s, r, c);
        if (d !== Te) return d;
      }
      (u = t[a + 8]),
        u !== Gt && Gu(r, t[w].data[a + 8] === c) && zu(i, a, t)
          ? ((s = l), (a = Vr(u)), (t = jr(u, t)))
          : (a = -1);
    }
  }
  return o;
}
function sg(e, t, n, r, o, i) {
  let s = t[w],
    a = s.data[e + 8],
    u = r == null ? bt(a) && Ai : r != s && (a.type & 3) !== 0,
    c = o & M.Host && i === a,
    l = Mr(a, s, n, u, c);
  return l !== null ? wn(t, s, l, a) : Te;
}
function Mr(e, t, n, r, o) {
  let i = e.providerIndexes,
    s = t.data,
    a = i & 1048575,
    u = e.directiveStart,
    c = e.directiveEnd,
    l = i >> 20,
    d = r ? a : a + l,
    p = o ? a + l : c;
  for (let f = d; f < p; f++) {
    let h = s[f];
    if ((f < u && n === h) || (f >= u && h.type === n)) return f;
  }
  if (o) {
    let f = s[u];
    if (f && Ne(f) && f.type === n) return u;
  }
  return null;
}
function wn(e, t, n, r) {
  let o = e[n],
    i = t.data;
  if (Yh(o)) {
    let s = o;
    s.resolving && Zp(qp(i[n]));
    let a = Br(s.canSeeViewProviders);
    s.resolving = !0;
    let u,
      c = s.injectImpl ? re(s.injectImpl) : null,
      l = hl(e, r, M.Default);
    try {
      (o = e[n] = s.factory(void 0, i, e, r)),
        t.firstCreatePass && n >= r.directiveStart && Zh(n, i[n], t);
    } finally {
      c !== null && re(c), Br(a), (s.resolving = !1), vl();
    }
  }
  return o;
}
function ag(e) {
  if (typeof e == "string") return e.charCodeAt(0) || 0;
  let t = e.hasOwnProperty(mn) ? e[mn] : void 0;
  return typeof t == "number" ? (t >= 0 ? t & Cl : ug) : t;
}
function zu(e, t, n) {
  let r = 1 << e;
  return !!(n[t + (e >> bl)] & r);
}
function Gu(e, t) {
  return !(e & M.Self) && !(e & M.Host && t);
}
var lt = class {
  _tNode;
  _lView;
  constructor(t, n) {
    (this._tNode = t), (this._lView = n);
  }
  get(t, n, r) {
    return Sl(this._tNode, this._lView, t, uo(r), n);
  }
};
function ug() {
  return new lt(Z(), I());
}
function wS(e) {
  return Tn(() => {
    let t = e.prototype.constructor,
      n = t[Nr] || Oi(t),
      r = Object.prototype,
      o = Object.getPrototypeOf(e.prototype).constructor;
    for (; o && o !== r; ) {
      let i = o[Nr] || Oi(o);
      if (i && i !== n) return i;
      o = Object.getPrototypeOf(o);
    }
    return (i) => new i();
  });
}
function Oi(e) {
  return xc(e)
    ? () => {
        let t = Oi(U(e));
        return t && t();
      }
    : dt(e);
}
function cg(e, t, n, r, o) {
  let i = e,
    s = t;
  for (; i !== null && s !== null && s[m] & 2048 && !Pr(s); ) {
    let a = Nl(i, s, n, r | M.Self, Te);
    if (a !== Te) return a;
    let u = i.parent;
    if (!u) {
      let c = s[Jc];
      if (c) {
        let l = c.get(n, Te, r);
        if (l !== Te) return l;
      }
      (u = xl(s)), (s = s[Jt]);
    }
    i = u;
  }
  return o;
}
function xl(e) {
  let t = e[w],
    n = t.type;
  return n === 2 ? t.declTNode : n === 1 ? e[ie] : null;
}
function lg(e) {
  return ig(Z(), e);
}
function Wu(e, t = null, n = null, r) {
  let o = Al(e, t, n, r);
  return o.resolveInjectorInitializers(), o;
}
function Al(e, t = null, n = null, r, o = new Set()) {
  let i = [n || Y, dh(e)];
  return (
    (r = r || (typeof e == "object" ? void 0 : K(e))),
    new vn(i, t || co(), r || null, o)
  );
}
var Re = class e {
  static THROW_IF_NOT_FOUND = yn;
  static NULL = new Or();
  static create(t, n) {
    if (Array.isArray(t)) return Wu({ name: "" }, n, t, "");
    {
      let r = t.name ?? "";
      return Wu({ name: r }, t.parent, t.providers, r);
    }
  }
  static ɵprov = A({ token: e, providedIn: "any", factory: () => W(Hc) });
  static __NG_ELEMENT_ID__ = -1;
};
var dg = new S("");
dg.__NG_ELEMENT_ID__ = (e) => {
  let t = Z();
  if (t === null) throw new b(204, !1);
  if (t.type & 2) return t.value;
  if (e & M.Optional) return null;
  throw new b(204, !1);
};
var Rl = !1,
  Rn = (() => {
    class e {
      static __NG_ELEMENT_ID__ = fg;
      static __NG_ENV_ID__ = (n) => n;
    }
    return e;
  })(),
  $r = class extends Rn {
    _lView;
    constructor(t) {
      super(), (this._lView = t);
    }
    onDestroy(t) {
      return sl(this._lView, t), () => Rh(this._lView, t);
    }
  };
function fg() {
  return new $r(I());
}
var vt = class {},
  Ws = new S("", { providedIn: "root", factory: () => !1 });
var Ol = new S(""),
  Fl = new S(""),
  On = (() => {
    class e {
      taskId = 0;
      pendingTasks = new Set();
      get _hasPendingTasks() {
        return this.hasPendingTasks.value;
      }
      hasPendingTasks = new an(!1);
      add() {
        this._hasPendingTasks || this.hasPendingTasks.next(!0);
        let n = this.taskId++;
        return this.pendingTasks.add(n), n;
      }
      has(n) {
        return this.pendingTasks.has(n);
      }
      remove(n) {
        this.pendingTasks.delete(n),
          this.pendingTasks.size === 0 &&
            this._hasPendingTasks &&
            this.hasPendingTasks.next(!1);
      }
      ngOnDestroy() {
        this.pendingTasks.clear(),
          this._hasPendingTasks && this.hasPendingTasks.next(!1);
      }
      static ɵprov = A({
        token: e,
        providedIn: "root",
        factory: () => new e(),
      });
    }
    return e;
  })();
var Fi = class extends te {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(t = !1) {
      super(),
        (this.__isAsync = t),
        Kc() &&
          ((this.destroyRef = E(Rn, { optional: !0 }) ?? void 0),
          (this.pendingTasks = E(On, { optional: !0 }) ?? void 0));
    }
    emit(t) {
      let n = _(null);
      try {
        super.next(t);
      } finally {
        _(n);
      }
    }
    subscribe(t, n, r) {
      let o = t,
        i = n || (() => null),
        s = r;
      if (t && typeof t == "object") {
        let u = t;
        (o = u.next?.bind(u)),
          (i = u.error?.bind(u)),
          (s = u.complete?.bind(u));
      }
      this.__isAsync &&
        ((i = this.wrapInTimeout(i)),
        o && (o = this.wrapInTimeout(o)),
        s && (s = this.wrapInTimeout(s)));
      let a = super.subscribe({ next: o, error: i, complete: s });
      return t instanceof j && t.add(a), a;
    }
    wrapInTimeout(t) {
      return (n) => {
        let r = this.pendingTasks?.add();
        setTimeout(() => {
          t(n), r !== void 0 && this.pendingTasks?.remove(r);
        });
      };
    }
  },
  qe = Fi;
function Cn(...e) {}
function kl(e) {
  let t, n;
  function r() {
    e = Cn;
    try {
      n !== void 0 &&
        typeof cancelAnimationFrame == "function" &&
        cancelAnimationFrame(n),
        t !== void 0 && clearTimeout(t);
    } catch {}
  }
  return (
    (t = setTimeout(() => {
      e(), r();
    })),
    typeof requestAnimationFrame == "function" &&
      (n = requestAnimationFrame(() => {
        e(), r();
      })),
    () => r()
  );
}
function qu(e) {
  return (
    queueMicrotask(() => e()),
    () => {
      e = Cn;
    }
  );
}
var qs = "isAngularZone",
  Ur = qs + "_ID",
  pg = 0,
  ue = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new qe(!1);
    onMicrotaskEmpty = new qe(!1);
    onStable = new qe(!1);
    onError = new qe(!1);
    constructor(t) {
      let {
        enableLongStackTrace: n = !1,
        shouldCoalesceEventChangeDetection: r = !1,
        shouldCoalesceRunChangeDetection: o = !1,
        scheduleInRootZone: i = Rl,
      } = t;
      if (typeof Zone > "u") throw new b(908, !1);
      Zone.assertZonePatched();
      let s = this;
      (s._nesting = 0),
        (s._outer = s._inner = Zone.current),
        Zone.TaskTrackingZoneSpec &&
          (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec())),
        n &&
          Zone.longStackTraceZoneSpec &&
          (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)),
        (s.shouldCoalesceEventChangeDetection = !o && r),
        (s.shouldCoalesceRunChangeDetection = o),
        (s.callbackScheduled = !1),
        (s.scheduleInRootZone = i),
        mg(s);
    }
    static isInAngularZone() {
      return typeof Zone < "u" && Zone.current.get(qs) === !0;
    }
    static assertInAngularZone() {
      if (!e.isInAngularZone()) throw new b(909, !1);
    }
    static assertNotInAngularZone() {
      if (e.isInAngularZone()) throw new b(909, !1);
    }
    run(t, n, r) {
      return this._inner.run(t, n, r);
    }
    runTask(t, n, r, o) {
      let i = this._inner,
        s = i.scheduleEventTask("NgZoneEvent: " + o, t, hg, Cn, Cn);
      try {
        return i.runTask(s, n, r);
      } finally {
        i.cancelTask(s);
      }
    }
    runGuarded(t, n, r) {
      return this._inner.runGuarded(t, n, r);
    }
    runOutsideAngular(t) {
      return this._outer.run(t);
    }
  },
  hg = {};
function Zs(e) {
  if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
      e._nesting++, e.onMicrotaskEmpty.emit(null);
    } finally {
      if ((e._nesting--, !e.hasPendingMicrotasks))
        try {
          e.runOutsideAngular(() => e.onStable.emit(null));
        } finally {
          e.isStable = !0;
        }
    }
}
function gg(e) {
  if (e.isCheckStableRunning || e.callbackScheduled) return;
  e.callbackScheduled = !0;
  function t() {
    kl(() => {
      (e.callbackScheduled = !1),
        ki(e),
        (e.isCheckStableRunning = !0),
        Zs(e),
        (e.isCheckStableRunning = !1);
    });
  }
  e.scheduleInRootZone
    ? Zone.root.run(() => {
        t();
      })
    : e._outer.run(() => {
        t();
      }),
    ki(e);
}
function mg(e) {
  let t = () => {
      gg(e);
    },
    n = pg++;
  e._inner = e._inner.fork({
    name: "angular",
    properties: { [qs]: !0, [Ur]: n, [Ur + n]: !0 },
    onInvokeTask: (r, o, i, s, a, u) => {
      if (yg(u)) return r.invokeTask(i, s, a, u);
      try {
        return Zu(e), r.invokeTask(i, s, a, u);
      } finally {
        ((e.shouldCoalesceEventChangeDetection && s.type === "eventTask") ||
          e.shouldCoalesceRunChangeDetection) &&
          t(),
          Qu(e);
      }
    },
    onInvoke: (r, o, i, s, a, u, c) => {
      try {
        return Zu(e), r.invoke(i, s, a, u, c);
      } finally {
        e.shouldCoalesceRunChangeDetection &&
          !e.callbackScheduled &&
          !vg(u) &&
          t(),
          Qu(e);
      }
    },
    onHasTask: (r, o, i, s) => {
      r.hasTask(i, s),
        o === i &&
          (s.change == "microTask"
            ? ((e._hasPendingMicrotasks = s.microTask), ki(e), Zs(e))
            : s.change == "macroTask" &&
              (e.hasPendingMacrotasks = s.macroTask));
    },
    onHandleError: (r, o, i, s) => (
      r.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1
    ),
  });
}
function ki(e) {
  e._hasPendingMicrotasks ||
  ((e.shouldCoalesceEventChangeDetection ||
    e.shouldCoalesceRunChangeDetection) &&
    e.callbackScheduled === !0)
    ? (e.hasPendingMicrotasks = !0)
    : (e.hasPendingMicrotasks = !1);
}
function Zu(e) {
  e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
}
function Qu(e) {
  e._nesting--, Zs(e);
}
var Pi = class {
  hasPendingMicrotasks = !1;
  hasPendingMacrotasks = !1;
  isStable = !0;
  onUnstable = new qe();
  onMicrotaskEmpty = new qe();
  onStable = new qe();
  onError = new qe();
  run(t, n, r) {
    return t.apply(n, r);
  }
  runGuarded(t, n, r) {
    return t.apply(n, r);
  }
  runOutsideAngular(t) {
    return t();
  }
  runTask(t, n, r, o) {
    return t.apply(n, r);
  }
};
function yg(e) {
  return Pl(e, "__ignore_ng_zone__");
}
function vg(e) {
  return Pl(e, "__scheduler_tick__");
}
function Pl(e, t) {
  return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0;
}
var Dt = class {
    _console = console;
    handleError(t) {
      this._console.error("ERROR", t);
    }
  },
  Dg = new S("", {
    providedIn: "root",
    factory: () => {
      let e = E(ue),
        t = E(Dt);
      return (n) => e.runOutsideAngular(() => t.handleError(n));
    },
  });
function Yu(e, t) {
  return Tc(e, t);
}
function Eg(e) {
  return Tc(Mc, e);
}
var CS = ((Yu.required = Eg), Yu);
function Ig() {
  return Xt(Z(), I());
}
function Xt(e, t) {
  return new Tt(Ce(e, t));
}
var Tt = (() => {
  class e {
    nativeElement;
    constructor(n) {
      this.nativeElement = n;
    }
    static __NG_ELEMENT_ID__ = Ig;
  }
  return e;
})();
function Ll(e) {
  return e instanceof Tt ? e.nativeElement : e;
}
var Ku = new Set();
function Fe(e) {
  Ku.has(e) ||
    (Ku.add(e),
    performance?.mark?.("mark_feature_usage", { detail: { feature: e } }));
}
function wg(e) {
  return typeof e == "function" && e[G] !== void 0;
}
function Cg(e, t) {
  Fe("NgSignals");
  let n = ou(e),
    r = n[G];
  return (
    t?.equal && (r.equal = t.equal),
    (n.set = (o) => $n(r, o)),
    (n.update = (o) => iu(r, o)),
    (n.asReadonly = bg.bind(n)),
    n
  );
}
function bg() {
  let e = this[G];
  if (e.readonlyFn === void 0) {
    let t = () => this();
    (t[G] = e), (e.readonlyFn = t);
  }
  return e.readonlyFn;
}
function Vl(e) {
  return wg(e) && typeof e.set == "function";
}
function _g() {
  return this._results[Symbol.iterator]();
}
var Li = class {
  _emitDistinctChangesOnly;
  dirty = !0;
  _onDirty = void 0;
  _results = [];
  _changesDetected = !1;
  _changes = void 0;
  length = 0;
  first = void 0;
  last = void 0;
  get changes() {
    return (this._changes ??= new te());
  }
  constructor(t = !1) {
    this._emitDistinctChangesOnly = t;
  }
  get(t) {
    return this._results[t];
  }
  map(t) {
    return this._results.map(t);
  }
  filter(t) {
    return this._results.filter(t);
  }
  find(t) {
    return this._results.find(t);
  }
  reduce(t, n) {
    return this._results.reduce(t, n);
  }
  forEach(t) {
    this._results.forEach(t);
  }
  some(t) {
    return this._results.some(t);
  }
  toArray() {
    return this._results.slice();
  }
  toString() {
    return this._results.toString();
  }
  reset(t, n) {
    this.dirty = !1;
    let r = ih(t);
    (this._changesDetected = !oh(this._results, r, n)) &&
      ((this._results = r),
      (this.length = r.length),
      (this.last = r[this.length - 1]),
      (this.first = r[0]));
  }
  notifyOnChanges() {
    this._changes !== void 0 &&
      (this._changesDetected || !this._emitDistinctChangesOnly) &&
      this._changes.next(this);
  }
  onDirty(t) {
    this._onDirty = t;
  }
  setDirty() {
    (this.dirty = !0), this._onDirty?.();
  }
  destroy() {
    this._changes !== void 0 &&
      (this._changes.complete(), this._changes.unsubscribe());
  }
  [Symbol.iterator] = _g;
};
function jl(e) {
  return (e.flags & 128) === 128;
}
var Bl = (function (e) {
    return (e[(e.OnPush = 0)] = "OnPush"), (e[(e.Default = 1)] = "Default"), e;
  })(Bl || {}),
  Hl = new Map(),
  Mg = 0;
function Tg() {
  return Mg++;
}
function Sg(e) {
  Hl.set(e[fo], e);
}
function Vi(e) {
  Hl.delete(e[fo]);
}
var Ju = "__ngContext__";
function St(e, t) {
  Qe(t) ? ((e[Ju] = t[fo]), Sg(t)) : (e[Ju] = t);
}
function $l(e) {
  return zl(e[In]);
}
function Ul(e) {
  return zl(e[we]);
}
function zl(e) {
  for (; e !== null && !je(e); ) e = e[we];
  return e;
}
var ji;
function bS(e) {
  ji = e;
}
function Gl() {
  if (ji !== void 0) return ji;
  if (typeof document < "u") return document;
  throw new b(210, !1);
}
var _S = new S("", { providedIn: "root", factory: () => Ng }),
  Ng = "ng",
  xg = new S(""),
  Ag = new S("", { providedIn: "platform", factory: () => "unknown" });
var MS = new S(""),
  TS = new S("", {
    providedIn: "root",
    factory: () =>
      Gl().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") ||
      null,
  });
var Rg = "h",
  Og = "b";
var Wl = !1,
  Fg = new S("", { providedIn: "root", factory: () => Wl });
var Qs = (function (e) {
    return (
      (e[(e.CHANGE_DETECTION = 0)] = "CHANGE_DETECTION"),
      (e[(e.AFTER_NEXT_RENDER = 1)] = "AFTER_NEXT_RENDER"),
      e
    );
  })(Qs || {}),
  Eo = new S("");
var $t = (function (e) {
    return (
      (e[(e.EarlyRead = 0)] = "EarlyRead"),
      (e[(e.Write = 1)] = "Write"),
      (e[(e.MixedReadWrite = 2)] = "MixedReadWrite"),
      (e[(e.Read = 3)] = "Read"),
      e
    );
  })($t || {}),
  ql = (() => {
    class e {
      impl = null;
      execute() {
        this.impl?.execute();
      }
      static ɵprov = A({
        token: e,
        providedIn: "root",
        factory: () => new e(),
      });
    }
    return e;
  })(),
  kg = [$t.EarlyRead, $t.Write, $t.MixedReadWrite, $t.Read],
  Pg = (() => {
    class e {
      ngZone = E(ue);
      scheduler = E(vt);
      errorHandler = E(Dt, { optional: !0 });
      sequences = new Set();
      deferredRegistrations = new Set();
      executing = !1;
      constructor() {
        E(Eo, { optional: !0 });
      }
      execute() {
        this.executing = !0;
        for (let n of kg)
          for (let r of this.sequences)
            if (!(r.erroredOrDestroyed || !r.hooks[n]))
              try {
                r.pipelinedValue = this.ngZone.runOutsideAngular(() =>
                  this.maybeTrace(
                    () => r.hooks[n](r.pipelinedValue),
                    r.snapshot,
                  ),
                );
              } catch (o) {
                (r.erroredOrDestroyed = !0), this.errorHandler?.handleError(o);
              }
        this.executing = !1;
        for (let n of this.sequences)
          n.afterRun(), n.once && (this.sequences.delete(n), n.destroy());
        for (let n of this.deferredRegistrations) this.sequences.add(n);
        this.deferredRegistrations.size > 0 && this.scheduler.notify(8),
          this.deferredRegistrations.clear();
      }
      register(n) {
        this.executing
          ? this.deferredRegistrations.add(n)
          : (this.sequences.add(n), this.scheduler.notify(7));
      }
      unregister(n) {
        this.executing && this.sequences.has(n)
          ? ((n.erroredOrDestroyed = !0),
            (n.pipelinedValue = void 0),
            (n.once = !0))
          : (this.sequences.delete(n), this.deferredRegistrations.delete(n));
      }
      maybeTrace(n, r) {
        return r ? r.run(Qs.AFTER_NEXT_RENDER, n) : n();
      }
      static ɵprov = A({
        token: e,
        providedIn: "root",
        factory: () => new e(),
      });
    }
    return e;
  })(),
  Bi = class {
    impl;
    hooks;
    once;
    snapshot;
    erroredOrDestroyed = !1;
    pipelinedValue = void 0;
    unregisterOnDestroy;
    constructor(t, n, r, o, i = null) {
      (this.impl = t),
        (this.hooks = n),
        (this.once = r),
        (this.snapshot = i),
        (this.unregisterOnDestroy = o?.onDestroy(() => this.destroy()));
    }
    afterRun() {
      (this.erroredOrDestroyed = !1),
        (this.pipelinedValue = void 0),
        this.snapshot?.dispose(),
        (this.snapshot = null);
    }
    destroy() {
      this.impl.unregister(this), this.unregisterOnDestroy?.();
    }
  };
function Lg(e, t) {
  !t?.injector && lo(Lg);
  let n = t?.injector ?? E(Re);
  return Fe("NgAfterRender"), Zl(e, n, t, !1);
}
function Vg(e, t) {
  !t?.injector && lo(Vg);
  let n = t?.injector ?? E(Re);
  return Fe("NgAfterNextRender"), Zl(e, n, t, !0);
}
function jg(e, t) {
  if (e instanceof Function) {
    let n = [void 0, void 0, void 0, void 0];
    return (n[t] = e), n;
  } else return [e.earlyRead, e.write, e.mixedReadWrite, e.read];
}
function Zl(e, t, n, r) {
  let o = t.get(ql);
  o.impl ??= t.get(Pg);
  let i = t.get(Eo, null, { optional: !0 }),
    s = n?.phase ?? $t.MixedReadWrite,
    a = n?.manualCleanup !== !0 ? t.get(Rn) : null,
    u = new Bi(o.impl, jg(e, s), r, a, i?.snapshot(null));
  return o.impl.register(u), u;
}
var Bg = () => null;
function Ql(e, t, n = !1) {
  return Bg(e, t, n);
}
function Yl(e, t) {
  let n = e.contentQueries;
  if (n !== null) {
    let r = _(null);
    try {
      for (let o = 0; o < n.length; o += 2) {
        let i = n[o],
          s = n[o + 1];
        if (s !== -1) {
          let a = e.data[s];
          yo(i), a.contentQueries(2, t[s], s);
        }
      }
    } finally {
      _(r);
    }
  }
}
function Hi(e, t, n) {
  yo(0);
  let r = _(null);
  try {
    t(e, n);
  } finally {
    _(r);
  }
}
function Ys(e, t, n) {
  if (Os(t)) {
    let r = _(null);
    try {
      let o = t.directiveStart,
        i = t.directiveEnd;
      for (let s = o; s < i; s++) {
        let a = e.data[s];
        if (a.contentQueries) {
          let u = n[s];
          a.contentQueries(1, u, s);
        }
      }
    } finally {
      _(r);
    }
  }
}
var bn = (function (e) {
    return (
      (e[(e.Emulated = 0)] = "Emulated"),
      (e[(e.None = 2)] = "None"),
      (e[(e.ShadowDom = 3)] = "ShadowDom"),
      e
    );
  })(bn || {}),
  vr;
function Hg() {
  if (vr === void 0 && ((vr = null), We.trustedTypes))
    try {
      vr = We.trustedTypes.createPolicy("angular", {
        createHTML: (e) => e,
        createScript: (e) => e,
        createScriptURL: (e) => e,
      });
    } catch {}
  return vr;
}
function Io(e) {
  return Hg()?.createHTML(e) || e;
}
var Dr;
function Kl() {
  if (Dr === void 0 && ((Dr = null), We.trustedTypes))
    try {
      Dr = We.trustedTypes.createPolicy("angular#unsafe-bypass", {
        createHTML: (e) => e,
        createScript: (e) => e,
        createScriptURL: (e) => e,
      });
    } catch {}
  return Dr;
}
function Xu(e) {
  return Kl()?.createHTML(e) || e;
}
function ec(e) {
  return Kl()?.createScriptURL(e) || e;
}
var Ve = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) {
      this.changingThisBreaksApplicationSecurity = t;
    }
    toString() {
      return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${bc})`;
    }
  },
  $i = class extends Ve {
    getTypeName() {
      return "HTML";
    }
  },
  Ui = class extends Ve {
    getTypeName() {
      return "Style";
    }
  },
  zi = class extends Ve {
    getTypeName() {
      return "Script";
    }
  },
  Gi = class extends Ve {
    getTypeName() {
      return "URL";
    }
  },
  Wi = class extends Ve {
    getTypeName() {
      return "ResourceURL";
    }
  };
function en(e) {
  return e instanceof Ve ? e.changingThisBreaksApplicationSecurity : e;
}
function Ks(e, t) {
  let n = $g(e);
  if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL") return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${bc})`);
  }
  return n === t;
}
function $g(e) {
  return (e instanceof Ve && e.getTypeName()) || null;
}
function SS(e) {
  return new $i(e);
}
function NS(e) {
  return new Ui(e);
}
function xS(e) {
  return new zi(e);
}
function AS(e) {
  return new Gi(e);
}
function RS(e) {
  return new Wi(e);
}
function Ug(e) {
  let t = new Zi(e);
  return zg() ? new qi(t) : t;
}
var qi = class {
    inertDocumentHelper;
    constructor(t) {
      this.inertDocumentHelper = t;
    }
    getInertBodyElement(t) {
      t = "<body><remove></remove>" + t;
      try {
        let n = new window.DOMParser().parseFromString(Io(t), "text/html").body;
        return n === null
          ? this.inertDocumentHelper.getInertBodyElement(t)
          : (n.firstChild?.remove(), n);
      } catch {
        return null;
      }
    }
  },
  Zi = class {
    defaultDoc;
    inertDocument;
    constructor(t) {
      (this.defaultDoc = t),
        (this.inertDocument =
          this.defaultDoc.implementation.createHTMLDocument(
            "sanitization-inert",
          ));
    }
    getInertBodyElement(t) {
      let n = this.inertDocument.createElement("template");
      return (n.innerHTML = Io(t)), n;
    }
  };
function zg() {
  try {
    return !!new window.DOMParser().parseFromString(Io(""), "text/html");
  } catch {
    return !1;
  }
}
var Gg = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function Jl(e) {
  return (e = String(e)), e.match(Gg) ? e : "unsafe:" + e;
}
function He(e) {
  let t = {};
  for (let n of e.split(",")) t[n] = !0;
  return t;
}
function Fn(...e) {
  let t = {};
  for (let n of e) for (let r in n) n.hasOwnProperty(r) && (t[r] = !0);
  return t;
}
var Xl = He("area,br,col,hr,img,wbr"),
  ed = He("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
  td = He("rp,rt"),
  Wg = Fn(td, ed),
  qg = Fn(
    ed,
    He(
      "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul",
    ),
  ),
  Zg = Fn(
    td,
    He(
      "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video",
    ),
  ),
  tc = Fn(Xl, qg, Zg, Wg),
  nd = He("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
  Qg = He(
    "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width",
  ),
  Yg = He(
    "aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext",
  ),
  Kg = Fn(nd, Qg, Yg),
  Jg = He("script,style,template"),
  Qi = class {
    sanitizedSomething = !1;
    buf = [];
    sanitizeChildren(t) {
      let n = t.firstChild,
        r = !0,
        o = [];
      for (; n; ) {
        if (
          (n.nodeType === Node.ELEMENT_NODE
            ? (r = this.startElement(n))
            : n.nodeType === Node.TEXT_NODE
              ? this.chars(n.nodeValue)
              : (this.sanitizedSomething = !0),
          r && n.firstChild)
        ) {
          o.push(n), (n = tm(n));
          continue;
        }
        for (; n; ) {
          n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
          let i = em(n);
          if (i) {
            n = i;
            break;
          }
          n = o.pop();
        }
      }
      return this.buf.join("");
    }
    startElement(t) {
      let n = nc(t).toLowerCase();
      if (!tc.hasOwnProperty(n))
        return (this.sanitizedSomething = !0), !Jg.hasOwnProperty(n);
      this.buf.push("<"), this.buf.push(n);
      let r = t.attributes;
      for (let o = 0; o < r.length; o++) {
        let i = r.item(o),
          s = i.name,
          a = s.toLowerCase();
        if (!Kg.hasOwnProperty(a)) {
          this.sanitizedSomething = !0;
          continue;
        }
        let u = i.value;
        nd[a] && (u = Jl(u)), this.buf.push(" ", s, '="', rc(u), '"');
      }
      return this.buf.push(">"), !0;
    }
    endElement(t) {
      let n = nc(t).toLowerCase();
      tc.hasOwnProperty(n) &&
        !Xl.hasOwnProperty(n) &&
        (this.buf.push("</"), this.buf.push(n), this.buf.push(">"));
    }
    chars(t) {
      this.buf.push(rc(t));
    }
  };
function Xg(e, t) {
  return (
    (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !==
    Node.DOCUMENT_POSITION_CONTAINED_BY
  );
}
function em(e) {
  let t = e.nextSibling;
  if (t && e !== t.previousSibling) throw rd(t);
  return t;
}
function tm(e) {
  let t = e.firstChild;
  if (t && Xg(e, t)) throw rd(t);
  return t;
}
function nc(e) {
  let t = e.nodeName;
  return typeof t == "string" ? t : "FORM";
}
function rd(e) {
  return new Error(
    `Failed to sanitize html because the element is clobbered: ${e.outerHTML}`,
  );
}
var nm = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  rm = /([^\#-~ |!])/g;
function rc(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(nm, function (t) {
      let n = t.charCodeAt(0),
        r = t.charCodeAt(1);
      return "&#" + ((n - 55296) * 1024 + (r - 56320) + 65536) + ";";
    })
    .replace(rm, function (t) {
      return "&#" + t.charCodeAt(0) + ";";
    })
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
var Er;
function om(e, t) {
  let n = null;
  try {
    Er = Er || Ug(e);
    let r = t ? String(t) : "";
    n = Er.getInertBodyElement(r);
    let o = 5,
      i = r;
    do {
      if (o === 0)
        throw new Error(
          "Failed to sanitize html because the input is unstable",
        );
      o--, (r = i), (i = n.innerHTML), (n = Er.getInertBodyElement(r));
    } while (r !== i);
    let a = new Qi().sanitizeChildren(oc(n) || n);
    return Io(a);
  } finally {
    if (n) {
      let r = oc(n) || n;
      for (; r.firstChild; ) r.firstChild.remove();
    }
  }
}
function oc(e) {
  return "content" in e && im(e) ? e.content : null;
}
function im(e) {
  return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE";
}
var wo = (function (e) {
  return (
    (e[(e.NONE = 0)] = "NONE"),
    (e[(e.HTML = 1)] = "HTML"),
    (e[(e.STYLE = 2)] = "STYLE"),
    (e[(e.SCRIPT = 3)] = "SCRIPT"),
    (e[(e.URL = 4)] = "URL"),
    (e[(e.RESOURCE_URL = 5)] = "RESOURCE_URL"),
    e
  );
})(wo || {});
function OS(e) {
  let t = Js();
  return t
    ? Xu(t.sanitize(wo.HTML, e) || "")
    : Ks(e, "HTML")
      ? Xu(en(e))
      : om(Gl(), Ie(e));
}
function sm(e) {
  let t = Js();
  return t ? t.sanitize(wo.URL, e) || "" : Ks(e, "URL") ? en(e) : Jl(Ie(e));
}
function am(e) {
  let t = Js();
  if (t) return ec(t.sanitize(wo.RESOURCE_URL, e) || "");
  if (Ks(e, "ResourceURL")) return ec(en(e));
  throw new b(904, !1);
}
function um(e, t) {
  return (t === "src" &&
    (e === "embed" ||
      e === "frame" ||
      e === "iframe" ||
      e === "media" ||
      e === "script")) ||
    (t === "href" && (e === "base" || e === "link"))
    ? am
    : sm;
}
function FS(e, t, n) {
  return um(t, n)(e);
}
function Js() {
  let e = I();
  return e && e[Pe].sanitizer;
}
var cm = /^>|^->|<!--|-->|--!>|<!-$/g,
  lm = /(<|>)/g,
  dm = "\u200B$1\u200B";
function fm(e) {
  return e.replace(cm, (t) => t.replace(lm, dm));
}
function kS(e) {
  return e.ownerDocument.defaultView;
}
function od(e) {
  return e instanceof Function ? e() : e;
}
function pm(e, t, n) {
  let r = e.length;
  for (;;) {
    let o = e.indexOf(t, n);
    if (o === -1) return o;
    if (o === 0 || e.charCodeAt(o - 1) <= 32) {
      let i = t.length;
      if (o + i === r || e.charCodeAt(o + i) <= 32) return o;
    }
    n = o + 1;
  }
}
var id = "ng-template";
function hm(e, t, n, r) {
  let o = 0;
  if (r) {
    for (; o < t.length && typeof t[o] == "string"; o += 2)
      if (t[o] === "class" && pm(t[o + 1].toLowerCase(), n, 0) !== -1)
        return !0;
  } else if (Xs(e)) return !1;
  if (((o = t.indexOf(1, o)), o > -1)) {
    let i;
    for (; ++o < t.length && typeof (i = t[o]) == "string"; )
      if (i.toLowerCase() === n) return !0;
  }
  return !1;
}
function Xs(e) {
  return e.type === 4 && e.value !== id;
}
function gm(e, t, n) {
  let r = e.type === 4 && !n ? id : e.value;
  return t === r;
}
function mm(e, t, n) {
  let r = 4,
    o = e.attrs,
    i = o !== null ? Dm(o) : 0,
    s = !1;
  for (let a = 0; a < t.length; a++) {
    let u = t[a];
    if (typeof u == "number") {
      if (!s && !De(r) && !De(u)) return !1;
      if (s && De(u)) continue;
      (s = !1), (r = u | (r & 1));
      continue;
    }
    if (!s)
      if (r & 4) {
        if (
          ((r = 2 | (r & 1)),
          (u !== "" && !gm(e, u, n)) || (u === "" && t.length === 1))
        ) {
          if (De(r)) return !1;
          s = !0;
        }
      } else if (r & 8) {
        if (o === null || !hm(e, o, u, n)) {
          if (De(r)) return !1;
          s = !0;
        }
      } else {
        let c = t[++a],
          l = ym(u, o, Xs(e), n);
        if (l === -1) {
          if (De(r)) return !1;
          s = !0;
          continue;
        }
        if (c !== "") {
          let d;
          if (
            (l > i ? (d = "") : (d = o[l + 1].toLowerCase()), r & 2 && c !== d)
          ) {
            if (De(r)) return !1;
            s = !0;
          }
        }
      }
  }
  return De(r) || s;
}
function De(e) {
  return (e & 1) === 0;
}
function ym(e, t, n, r) {
  if (t === null) return -1;
  let o = 0;
  if (r || !n) {
    let i = !1;
    for (; o < t.length; ) {
      let s = t[o];
      if (s === e) return o;
      if (s === 3 || s === 6) i = !0;
      else if (s === 1 || s === 2) {
        let a = t[++o];
        for (; typeof a == "string"; ) a = t[++o];
        continue;
      } else {
        if (s === 4) break;
        if (s === 0) {
          o += 4;
          continue;
        }
      }
      o += i ? 1 : 2;
    }
    return -1;
  } else return Em(t, e);
}
function sd(e, t, n = !1) {
  for (let r = 0; r < t.length; r++) if (mm(e, t[r], n)) return !0;
  return !1;
}
function vm(e) {
  let t = e.attrs;
  if (t != null) {
    let n = t.indexOf(5);
    if (!(n & 1)) return t[n + 1];
  }
  return null;
}
function Dm(e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (Il(n)) return t;
  }
  return e.length;
}
function Em(e, t) {
  let n = e.indexOf(4);
  if (n > -1)
    for (n++; n < e.length; ) {
      let r = e[n];
      if (typeof r == "number") return -1;
      if (r === t) return n;
      n++;
    }
  return -1;
}
function Im(e, t) {
  e: for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (e.length === r.length) {
      for (let o = 0; o < e.length; o++) if (e[o] !== r[o]) continue e;
      return !0;
    }
  }
  return !1;
}
function ic(e, t) {
  return e ? ":not(" + t.trim() + ")" : t;
}
function wm(e) {
  let t = e[0],
    n = 1,
    r = 2,
    o = "",
    i = !1;
  for (; n < e.length; ) {
    let s = e[n];
    if (typeof s == "string")
      if (r & 2) {
        let a = e[++n];
        o += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
      } else r & 8 ? (o += "." + s) : r & 4 && (o += " " + s);
    else
      o !== "" && !De(s) && ((t += ic(i, o)), (o = "")),
        (r = s),
        (i = i || !De(r));
    n++;
  }
  return o !== "" && (t += ic(i, o)), t;
}
function Cm(e) {
  return e.map(wm).join(",");
}
function bm(e) {
  let t = [],
    n = [],
    r = 1,
    o = 2;
  for (; r < e.length; ) {
    let i = e[r];
    if (typeof i == "string")
      o === 2 ? i !== "" && t.push(i, e[++r]) : o === 8 && n.push(i);
    else {
      if (!De(o)) break;
      o = i;
    }
    r++;
  }
  return n.length && t.push(1, ...n), t;
}
var se = {};
function _m(e, t) {
  return e.createText(t);
}
function Mm(e, t, n) {
  e.setValue(t, n);
}
function Tm(e, t) {
  return e.createComment(fm(t));
}
function ad(e, t, n) {
  return e.createElement(t, n);
}
function zr(e, t, n, r, o) {
  e.insertBefore(t, n, r, o);
}
function ud(e, t, n) {
  e.appendChild(t, n);
}
function sc(e, t, n, r, o) {
  r !== null ? zr(e, t, n, r, o) : ud(e, t, n);
}
function Sm(e, t, n) {
  e.removeChild(null, t, n);
}
function Nm(e, t, n) {
  e.setAttribute(t, "style", n);
}
function xm(e, t, n) {
  n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n);
}
function cd(e, t, n) {
  let { mergedAttrs: r, classes: o, styles: i } = n;
  r !== null && Xh(e, t, r),
    o !== null && xm(e, t, o),
    i !== null && Nm(e, t, i);
}
function ea(e, t, n, r, o, i, s, a, u, c, l) {
  let d = $ + r,
    p = d + o,
    f = Am(d, p),
    h = typeof c == "function" ? c() : c;
  return (f[w] = {
    type: e,
    blueprint: f,
    template: n,
    queries: null,
    viewQuery: a,
    declTNode: t,
    data: f.slice().fill(null, d),
    bindingStartIndex: d,
    expandoStartIndex: p,
    hostBindingOpCodes: null,
    firstCreatePass: !0,
    firstUpdatePass: !0,
    staticViewQueries: !1,
    staticContentQueries: !1,
    preOrderHooks: null,
    preOrderCheckHooks: null,
    contentHooks: null,
    contentCheckHooks: null,
    viewHooks: null,
    viewCheckHooks: null,
    destroyHooks: null,
    cleanup: null,
    contentQueries: null,
    components: null,
    directiveRegistry: typeof i == "function" ? i() : i,
    pipeRegistry: typeof s == "function" ? s() : s,
    firstChild: null,
    schemas: u,
    consts: h,
    incompleteFirstPass: !1,
    ssrId: l,
  });
}
function Am(e, t) {
  let n = [];
  for (let r = 0; r < t; r++) n.push(r < e ? null : se);
  return n;
}
function Rm(e) {
  let t = e.tView;
  return t === null || t.incompleteFirstPass
    ? (e.tView = ea(
        1,
        null,
        e.template,
        e.decls,
        e.vars,
        e.directiveDefs,
        e.pipeDefs,
        e.viewQuery,
        e.schemas,
        e.consts,
        e.id,
      ))
    : t;
}
function ta(e, t, n, r, o, i, s, a, u, c, l) {
  let d = t.blueprint.slice();
  return (
    (d[Oe] = o),
    (d[m] = r | 4 | 128 | 8 | 64 | 1024),
    (c !== null || (e && e[m] & 2048)) && (d[m] |= 2048),
    il(d),
    (d[q] = d[Jt] = e),
    (d[ce] = n),
    (d[Pe] = s || (e && e[Pe])),
    (d[k] = a || (e && e[k])),
    (d[En] = u || (e && e[En]) || null),
    (d[ie] = i),
    (d[fo] = Tg()),
    (d[Dn] = l),
    (d[Jc] = c),
    (d[fe] = t.type == 2 ? e[fe] : d),
    d
  );
}
function Om(e, t, n) {
  let r = Ce(t, e),
    o = Rm(n),
    i = e[Pe].rendererFactory,
    s = na(
      e,
      ta(
        e,
        o,
        null,
        ld(n),
        r,
        t,
        null,
        i.createRenderer(r, n),
        null,
        null,
        null,
      ),
    );
  return (e[t.index] = s);
}
function ld(e) {
  let t = 16;
  return e.signals ? (t = 4096) : e.onPush && (t = 64), t;
}
function dd(e, t, n, r) {
  if (n === 0) return -1;
  let o = t.length;
  for (let i = 0; i < n; i++) t.push(r), e.blueprint.push(r), e.data.push(null);
  return o;
}
function na(e, t) {
  return e[In] ? (e[Bu][we] = t) : (e[In] = t), (e[Bu] = t), t;
}
function PS(e = 1) {
  fd(P(), I(), Be() + e, !1);
}
function fd(e, t, n, r) {
  if (!r)
    if ((t[m] & 3) === 3) {
      let i = e.preOrderCheckHooks;
      i !== null && br(t, i, n);
    } else {
      let i = e.preOrderHooks;
      i !== null && _r(t, i, 0, n);
    }
  mt(n);
}
var Co = (function (e) {
  return (
    (e[(e.None = 0)] = "None"),
    (e[(e.SignalBased = 1)] = "SignalBased"),
    (e[(e.HasDecoratorInputTransform = 2)] = "HasDecoratorInputTransform"),
    e
  );
})(Co || {});
function pd(e, t, n, r) {
  let o = _(null);
  try {
    let [i, s, a] = e.inputs[n],
      u = null;
    s & Co.SignalBased && (u = t[i][G]),
      u !== null && u.transformFn !== void 0
        ? (r = u.transformFn(r))
        : a !== null && (r = a.call(t, r)),
      e.setInput !== null ? e.setInput(t, u, r, n, i) : Xc(t, u, i, r);
  } finally {
    _(o);
  }
}
function hd(e, t, n, r, o) {
  let i = Be(),
    s = r & 2;
  try {
    mt(-1), s && t.length > $ && fd(e, t, $, !1), de(s ? 2 : 0, o), n(r, o);
  } finally {
    mt(i), de(s ? 3 : 1, o);
  }
}
function ra(e, t, n) {
  go() && (St(Ce(n, t), t), gd(e, t, n));
}
function gd(e, t, n) {
  jm(e, t, n), (n.flags & 64) === 64 && Bm(e, t, n);
}
function oa(e, t, n = Ce) {
  let r = t.localNames;
  if (r !== null) {
    let o = t.index + 1;
    for (let i = 0; i < r.length; i += 2) {
      let s = r[i + 1],
        a = s === -1 ? n(t, e) : e[s];
      e[o++] = a;
    }
  }
}
function Fm(e, t, n, r) {
  let i = r.get(Fg, Wl) || n === bn.ShadowDom,
    s = e.selectRootElement(t, i);
  return km(s), s;
}
function km(e) {
  Pm(e);
}
var Pm = () => null;
function Lm(e) {
  return e === "class"
    ? "className"
    : e === "for"
      ? "htmlFor"
      : e === "formaction"
        ? "formAction"
        : e === "innerHtml"
          ? "innerHTML"
          : e === "readonly"
            ? "readOnly"
            : e === "tabindex"
              ? "tabIndex"
              : e;
}
function bo(e, t, n, r, o, i, s, a) {
  let u = t.inputs,
    c;
  if (!a && u != null && (c = u[r])) sa(e, n, c, r, o), bt(t) && Vm(n, t.index);
  else if (t.type & 3) {
    let l = Ce(t, n);
    (r = Lm(r)),
      (o = s != null ? s(o, t.value || "", r) : o),
      i.setProperty(l, r, o);
  } else t.type & 12;
}
function Vm(e, t) {
  let n = Ae(t, e);
  n[m] & 16 || (n[m] |= 64);
}
function jm(e, t, n) {
  let r = n.directiveStart,
    o = n.directiveEnd;
  bt(n) && Om(t, n, e.data[r + n.componentOffset]),
    e.firstCreatePass || Hr(n, t);
  let i = n.initialInputs;
  for (let s = r; s < o; s++) {
    let a = e.data[s],
      u = wn(t, e, s, n);
    if ((St(u, t), i !== null && zm(t, s - r, u, a, n, i), Ne(a))) {
      let c = Ae(n.index, t);
      c[ce] = wn(t, e, s, n);
    }
  }
}
function Bm(e, t, n) {
  let r = n.directiveStart,
    o = n.directiveEnd,
    i = n.index,
    s = zh();
  try {
    mt(i);
    for (let a = r; a < o; a++) {
      let u = e.data[a],
        c = t[a];
      Ni(a),
        (u.hostBindings !== null || u.hostVars !== 0 || u.hostAttrs !== null) &&
          Hm(u, c);
    }
  } finally {
    mt(-1), Ni(s);
  }
}
function Hm(e, t) {
  e.hostBindings !== null && e.hostBindings(1, t);
}
function ia(e, t) {
  let n = e.directiveRegistry,
    r = null;
  if (n)
    for (let o = 0; o < n.length; o++) {
      let i = n[o];
      sd(t, i.selectors, !1) && ((r ??= []), Ne(i) ? r.unshift(i) : r.push(i));
    }
  return r;
}
function $m(e, t, n, r, o, i) {
  let s = Ce(e, t);
  Um(t[k], s, i, e.value, n, r, o);
}
function Um(e, t, n, r, o, i, s) {
  if (i == null) e.removeAttribute(t, o, n);
  else {
    let a = s == null ? Ie(i) : s(i, r || "", o);
    e.setAttribute(t, o, a, n);
  }
}
function zm(e, t, n, r, o, i) {
  let s = i[t];
  if (s !== null)
    for (let a = 0; a < s.length; a += 2) {
      let u = s[a],
        c = s[a + 1];
      pd(r, n, u, c);
    }
}
function Gm(e, t, n) {
  return (e === null || Ne(e)) && (n = Sh(n[t.index])), n[k];
}
function md(e, t) {
  let n = e[En],
    r = n ? n.get(Dt, null) : null;
  r && r.handleError(t);
}
function sa(e, t, n, r, o) {
  for (let i = 0; i < n.length; i += 2) {
    let s = n[i],
      a = n[i + 1],
      u = t[s],
      c = e.data[s];
    pd(c, u, a, o);
  }
}
function Wm(e, t) {
  let n = Ae(t, e),
    r = n[w];
  qm(r, n);
  let o = n[Oe];
  o !== null && n[Dn] === null && (n[Dn] = Ql(o, n[En])), aa(r, n, n[ce]);
}
function qm(e, t) {
  for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n]);
}
function aa(e, t, n) {
  $s(t);
  try {
    let r = e.viewQuery;
    r !== null && Hi(1, r, n);
    let o = e.template;
    o !== null && hd(e, t, o, 1, n),
      e.firstCreatePass && (e.firstCreatePass = !1),
      t[Le]?.finishViewCreation(e),
      e.staticContentQueries && Yl(e, t),
      e.staticViewQueries && Hi(2, e.viewQuery, n);
    let i = e.components;
    i !== null && Zm(t, i);
  } catch (r) {
    throw (
      (e.firstCreatePass &&
        ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
      r)
    );
  } finally {
    (t[m] &= -5), Us();
  }
}
function Zm(e, t) {
  for (let n = 0; n < t.length; n++) Wm(e, t[n]);
}
function ua(e, t, n, r) {
  let o = _(null);
  try {
    let i = t.tView,
      a = e[m] & 4096 ? 4096 : 16,
      u = ta(
        e,
        i,
        n,
        a,
        null,
        t,
        null,
        null,
        r?.injector ?? null,
        r?.embeddedViewInjector ?? null,
        r?.dehydratedView ?? null,
      ),
      c = e[t.index];
    u[ft] = c;
    let l = e[Le];
    return l !== null && (u[Le] = l.createEmbeddedView(i)), aa(i, u, n), u;
  } finally {
    _(o);
  }
}
function Gr(e, t) {
  return !t || t.firstChild === null || jl(e);
}
var Qm;
function ca(e, t) {
  return Qm(e, t);
}
var Wr = (function (e) {
  return (
    (e[(e.Important = 1)] = "Important"), (e[(e.DashCase = 2)] = "DashCase"), e
  );
})(Wr || {});
function la(e) {
  return (e.flags & 32) === 32;
}
function Ut(e, t, n, r, o) {
  if (r != null) {
    let i,
      s = !1;
    je(r) ? (i = r) : Qe(r) && ((s = !0), (r = r[Oe]));
    let a = xe(r);
    e === 0 && n !== null
      ? o == null
        ? ud(t, n, a)
        : zr(t, n, a, o || null, !0)
      : e === 1 && n !== null
        ? zr(t, n, a, o || null, !0)
        : e === 2
          ? Sm(t, a, s)
          : e === 3 && t.destroyNode(a),
      i != null && iy(t, e, i, n, o);
  }
}
function Ym(e, t) {
  yd(e, t), (t[Oe] = null), (t[ie] = null);
}
function Km(e, t, n, r, o, i) {
  (r[Oe] = o), (r[ie] = t), Mo(e, r, n, 1, o, i);
}
function yd(e, t) {
  t[Pe].changeDetectionScheduler?.notify(10), Mo(e, t, t[k], 2, null, null);
}
function Jm(e) {
  let t = e[In];
  if (!t) return di(e[w], e);
  for (; t; ) {
    let n = null;
    if (Qe(t)) n = t[In];
    else {
      let r = t[oe];
      r && (n = r);
    }
    if (!n) {
      for (; t && !t[we] && t !== e; ) Qe(t) && di(t[w], t), (t = t[q]);
      t === null && (t = e), Qe(t) && di(t[w], t), (n = t && t[we]);
    }
    t = n;
  }
}
function da(e, t) {
  let n = e[qt],
    r = n.indexOf(t);
  n.splice(r, 1);
}
function fa(e, t) {
  if (Nn(t)) return;
  let n = t[k];
  n.destroyNode && Mo(e, t, n, 3, null, null), Jm(t);
}
function di(e, t) {
  if (Nn(t)) return;
  let n = _(null);
  try {
    (t[m] &= -129),
      (t[m] |= 256),
      t[ae] && Ft(t[ae]),
      ey(e, t),
      Xm(e, t),
      t[w].type === 1 && t[k].destroy();
    let r = t[ft];
    if (r !== null && je(t[q])) {
      r !== t[q] && da(r, t);
      let o = t[Le];
      o !== null && o.detachView(e);
    }
    Vi(t);
  } finally {
    _(n);
  }
}
function Xm(e, t) {
  let n = e.cleanup,
    r = t[Fr];
  if (n !== null)
    for (let s = 0; s < n.length - 1; s += 2)
      if (typeof n[s] == "string") {
        let a = n[s + 3];
        a >= 0 ? r[a]() : r[-a].unsubscribe(), (s += 2);
      } else {
        let a = r[n[s + 1]];
        n[s].call(a);
      }
  r !== null && (t[Fr] = null);
  let o = t[Ze];
  if (o !== null) {
    t[Ze] = null;
    for (let s = 0; s < o.length; s++) {
      let a = o[s];
      a();
    }
  }
  let i = t[pt];
  if (i !== null) {
    t[pt] = null;
    for (let s of i) s.destroy();
  }
}
function ey(e, t) {
  let n;
  if (e != null && (n = e.destroyHooks) != null)
    for (let r = 0; r < n.length; r += 2) {
      let o = t[n[r]];
      if (!(o instanceof yt)) {
        let i = n[r + 1];
        if (Array.isArray(i))
          for (let s = 0; s < i.length; s += 2) {
            let a = o[i[s]],
              u = i[s + 1];
            de(4, a, u);
            try {
              u.call(a);
            } finally {
              de(5, a, u);
            }
          }
        else {
          de(4, o, i);
          try {
            i.call(o);
          } finally {
            de(5, o, i);
          }
        }
      }
    }
}
function vd(e, t, n) {
  return ty(e, t.parent, n);
}
function ty(e, t, n) {
  let r = t;
  for (; r !== null && r.type & 168; ) (t = r), (r = t.parent);
  if (r === null) return n[Oe];
  if (bt(r)) {
    let { encapsulation: o } = e.data[r.directiveStart + r.componentOffset];
    if (o === bn.None || o === bn.Emulated) return null;
  }
  return Ce(r, n);
}
function Dd(e, t, n) {
  return ry(e, t, n);
}
function ny(e, t, n) {
  return e.type & 40 ? Ce(e, n) : null;
}
var ry = ny,
  ac;
function _o(e, t, n, r) {
  let o = vd(e, r, t),
    i = t[k],
    s = r.parent || t[ie],
    a = Dd(s, r, t);
  if (o != null)
    if (Array.isArray(n))
      for (let u = 0; u < n.length; u++) sc(i, o, n[u], a, !1);
    else sc(i, o, n, a, !1);
  ac !== void 0 && ac(i, r, t, n, o);
}
function gn(e, t) {
  if (t !== null) {
    let n = t.type;
    if (n & 3) return Ce(t, e);
    if (n & 4) return Yi(-1, e[t.index]);
    if (n & 8) {
      let r = t.child;
      if (r !== null) return gn(e, r);
      {
        let o = e[t.index];
        return je(o) ? Yi(-1, o) : xe(o);
      }
    } else {
      if (n & 128) return gn(e, t.next);
      if (n & 32) return ca(t, e)() || xe(e[t.index]);
      {
        let r = Ed(e, t);
        if (r !== null) {
          if (Array.isArray(r)) return r[0];
          let o = gt(e[fe]);
          return gn(o, r);
        } else return gn(e, t.next);
      }
    }
  }
  return null;
}
function Ed(e, t) {
  if (t !== null) {
    let r = e[fe][ie],
      o = t.projection;
    return r.projection[o];
  }
  return null;
}
function Yi(e, t) {
  let n = oe + e + 1;
  if (n < t.length) {
    let r = t[n],
      o = r[w].firstChild;
    if (o !== null) return gn(r, o);
  }
  return t[ht];
}
function pa(e, t, n, r, o, i, s) {
  for (; n != null; ) {
    if (n.type === 128) {
      n = n.next;
      continue;
    }
    let a = r[n.index],
      u = n.type;
    if ((s && t === 0 && (a && St(xe(a), r), (n.flags |= 2)), !la(n)))
      if (u & 8) pa(e, t, n.child, r, o, i, !1), Ut(t, e, o, a, i);
      else if (u & 32) {
        let c = ca(n, r),
          l;
        for (; (l = c()); ) Ut(t, e, o, l, i);
        Ut(t, e, o, a, i);
      } else u & 16 ? Id(e, t, r, n, o, i) : Ut(t, e, o, a, i);
    n = s ? n.projectionNext : n.next;
  }
}
function Mo(e, t, n, r, o, i) {
  pa(n, r, e.firstChild, t, o, i, !1);
}
function oy(e, t, n) {
  let r = t[k],
    o = vd(e, n, t),
    i = n.parent || t[ie],
    s = Dd(i, n, t);
  Id(r, 0, t, n, o, s);
}
function Id(e, t, n, r, o, i) {
  let s = n[fe],
    u = s[ie].projection[r.projection];
  if (Array.isArray(u))
    for (let c = 0; c < u.length; c++) {
      let l = u[c];
      Ut(t, e, o, l, i);
    }
  else {
    let c = u,
      l = s[q];
    jl(r) && (c.flags |= 128), pa(e, t, c, l, o, i, !0);
  }
}
function iy(e, t, n, r, o) {
  let i = n[ht],
    s = xe(n);
  i !== s && Ut(t, e, r, i, o);
  for (let a = oe; a < n.length; a++) {
    let u = n[a];
    Mo(u[w], u, e, t, r, i);
  }
}
function sy(e, t, n, r, o) {
  if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
  else {
    let i = r.indexOf("-") === -1 ? void 0 : Wr.DashCase;
    o == null
      ? e.removeStyle(n, r, i)
      : (typeof o == "string" &&
          o.endsWith("!important") &&
          ((o = o.slice(0, -10)), (i |= Wr.Important)),
        e.setStyle(n, r, o, i));
  }
}
function qr(e, t, n, r, o = !1) {
  for (; n !== null; ) {
    if (n.type === 128) {
      n = o ? n.projectionNext : n.next;
      continue;
    }
    let i = t[n.index];
    i !== null && r.push(xe(i)), je(i) && ay(i, r);
    let s = n.type;
    if (s & 8) qr(e, t, n.child, r);
    else if (s & 32) {
      let a = ca(n, t),
        u;
      for (; (u = a()); ) r.push(u);
    } else if (s & 16) {
      let a = Ed(t, n);
      if (Array.isArray(a)) r.push(...a);
      else {
        let u = gt(t[fe]);
        qr(u[w], u, a, r, !0);
      }
    }
    n = o ? n.projectionNext : n.next;
  }
  return r;
}
function ay(e, t) {
  for (let n = oe; n < e.length; n++) {
    let r = e[n],
      o = r[w].firstChild;
    o !== null && qr(r[w], r, o, t);
  }
  e[ht] !== e[Oe] && t.push(e[ht]);
}
var wd = [];
function uy(e) {
  return e[ae] ?? cy(e);
}
function cy(e) {
  let t = wd.pop() ?? Object.create(dy);
  return (t.lView = e), t;
}
function ly(e) {
  e.lView[ae] !== e && ((e.lView = null), wd.push(e));
}
var dy = ee(X({}, Xe), {
  consumerIsAlwaysLive: !0,
  kind: "template",
  consumerMarkedDirty: (e) => {
    xn(e.lView);
  },
  consumerOnSignalRead() {
    this.lView[ae] = this;
  },
});
function fy(e) {
  let t = e[ae] ?? Object.create(py);
  return (t.lView = e), t;
}
var py = ee(X({}, Xe), {
  consumerIsAlwaysLive: !0,
  kind: "template",
  consumerMarkedDirty: (e) => {
    let t = gt(e.lView);
    for (; t && !Cd(t[w]); ) t = gt(t);
    t && Ls(t);
  },
  consumerOnSignalRead() {
    this.lView[ae] = this;
  },
});
function Cd(e) {
  return e.type !== 2;
}
function bd(e) {
  if (e[pt] === null) return;
  let t = !0;
  for (; t; ) {
    let n = !1;
    for (let r of e[pt])
      r.dirty &&
        ((n = !0),
        r.zone === null || Zone.current === r.zone
          ? r.run()
          : r.zone.run(() => r.run()));
    t = n && !!(e[m] & 8192);
  }
}
var hy = 100;
function _d(e, t = !0, n = 0) {
  let o = e[Pe].rendererFactory,
    i = !1;
  i || o.begin?.();
  try {
    gy(e, n);
  } catch (s) {
    throw (t && md(e, s), s);
  } finally {
    i || o.end?.();
  }
}
function gy(e, t) {
  let n = dl();
  try {
    Lr(!0), Ki(e, t);
    let r = 0;
    for (; ho(e); ) {
      if (r === hy) throw new b(103, !1);
      r++, Ki(e, 1);
    }
  } finally {
    Lr(n);
  }
}
function my(e, t, n, r) {
  if (Nn(t)) return;
  let o = t[m],
    i = !1,
    s = !1;
  $s(t);
  let a = !0,
    u = null,
    c = null;
  i ||
    (Cd(e)
      ? ((c = uy(t)), (u = Ot(c)))
      : qa() === null
        ? ((a = !1), (c = fy(t)), (u = Ot(c)))
        : t[ae] && (Ft(t[ae]), (t[ae] = null)));
  try {
    il(t), Hh(e.bindingStartIndex), n !== null && hd(e, t, n, 2, r);
    let l = (o & 3) === 3;
    if (!i)
      if (l) {
        let f = e.preOrderCheckHooks;
        f !== null && br(t, f, null);
      } else {
        let f = e.preOrderHooks;
        f !== null && _r(t, f, 0, null), ui(t, 0);
      }
    if (
      (s || yy(t), bd(t), Md(t, 0), e.contentQueries !== null && Yl(e, t), !i)
    )
      if (l) {
        let f = e.contentCheckHooks;
        f !== null && br(t, f);
      } else {
        let f = e.contentHooks;
        f !== null && _r(t, f, 1), ui(t, 1);
      }
    Dy(e, t);
    let d = e.components;
    d !== null && Sd(t, d, 0);
    let p = e.viewQuery;
    if ((p !== null && Hi(2, p, r), !i))
      if (l) {
        let f = e.viewCheckHooks;
        f !== null && br(t, f);
      } else {
        let f = e.viewHooks;
        f !== null && _r(t, f, 2), ui(t, 2);
      }
    if ((e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[Cr])) {
      for (let f of t[Cr]) f();
      t[Cr] = null;
    }
    i || (t[m] &= -73);
  } catch (l) {
    throw (i || xn(t), l);
  } finally {
    c !== null && (rn(c, u), a && ly(c)), Us();
  }
}
function Md(e, t) {
  for (let n = $l(e); n !== null; n = Ul(n))
    for (let r = oe; r < n.length; r++) {
      let o = n[r];
      Td(o, t);
    }
}
function yy(e) {
  for (let t = $l(e); t !== null; t = Ul(t)) {
    if (!(t[m] & 2)) continue;
    let n = t[qt];
    for (let r = 0; r < n.length; r++) {
      let o = n[r];
      Ls(o);
    }
  }
}
function vy(e, t, n) {
  let r = Ae(t, e);
  Td(r, n);
}
function Td(e, t) {
  Ps(e) && Ki(e, t);
}
function Ki(e, t) {
  let r = e[w],
    o = e[m],
    i = e[ae],
    s = !!(t === 0 && o & 16);
  if (
    ((s ||= !!(o & 64 && t === 0)),
    (s ||= !!(o & 1024)),
    (s ||= !!(i?.dirty && on(i))),
    (s ||= !1),
    i && (i.dirty = !1),
    (e[m] &= -9217),
    s)
  )
    my(r, e, r.template, e[ce]);
  else if (o & 8192) {
    bd(e), Md(e, 1);
    let a = r.components;
    a !== null && Sd(e, a, 1);
  }
}
function Sd(e, t, n) {
  for (let r = 0; r < t.length; r++) vy(e, t[r], n);
}
function Dy(e, t) {
  let n = e.hostBindingOpCodes;
  if (n !== null)
    try {
      for (let r = 0; r < n.length; r++) {
        let o = n[r];
        if (o < 0) mt(~o);
        else {
          let i = o,
            s = n[++r],
            a = n[++r];
          Uh(s, i);
          let u = t[i];
          de(24, u), a(2, u), de(25, u);
        }
      }
    } finally {
      mt(-1);
    }
}
function ha(e, t) {
  let n = dl() ? 64 : 1088;
  for (e[Pe].changeDetectionScheduler?.notify(t); e; ) {
    e[m] |= n;
    let r = gt(e);
    if (Pr(e) && !r) return e;
    e = r;
  }
  return null;
}
function Nd(e, t, n, r) {
  return [e, !0, 0, t, null, r, null, n, null, null];
}
function Ey(e, t) {
  let n = oe + t;
  if (n < e.length) return e[n];
}
function ga(e, t, n, r = !0) {
  let o = t[w];
  if ((wy(o, t, e, n), r)) {
    let s = Yi(n, e),
      a = t[k],
      u = a.parentNode(e[ht]);
    u !== null && Km(o, e[ie], a, t, u, s);
  }
  let i = t[Dn];
  i !== null && i.firstChild !== null && (i.firstChild = null);
}
function Iy(e, t) {
  let n = Zr(e, t);
  return n !== void 0 && fa(n[w], n), n;
}
function Zr(e, t) {
  if (e.length <= oe) return;
  let n = oe + t,
    r = e[n];
  if (r) {
    let o = r[ft];
    o !== null && o !== e && da(o, r), t > 0 && (e[n - 1][we] = r[we]);
    let i = Ar(e, oe + t);
    Ym(r[w], r);
    let s = i[Le];
    s !== null && s.detachView(i[w]),
      (r[q] = null),
      (r[we] = null),
      (r[m] &= -129);
  }
  return r;
}
function wy(e, t, n, r) {
  let o = oe + r,
    i = n.length;
  r > 0 && (n[o - 1][we] = t),
    r < i - oe
      ? ((t[we] = n[o]), Bc(n, oe + r, t))
      : (n.push(t), (t[we] = null)),
    (t[q] = n);
  let s = t[ft];
  s !== null && n !== s && xd(s, t);
  let a = t[Le];
  a !== null && a.insertView(e), Ti(t), (t[m] |= 128);
}
function xd(e, t) {
  let n = e[qt],
    r = t[q];
  if (Qe(r)) e[m] |= 2;
  else {
    let o = r[q][fe];
    t[fe] !== o && (e[m] |= 2);
  }
  n === null ? (e[qt] = [t]) : n.push(t);
}
var Et = class {
    _lView;
    _cdRefInjectingView;
    notifyErrorHandler;
    _appRef = null;
    _attachedToViewContainer = !1;
    get rootNodes() {
      let t = this._lView,
        n = t[w];
      return qr(n, t, n.firstChild, []);
    }
    constructor(t, n, r = !0) {
      (this._lView = t),
        (this._cdRefInjectingView = n),
        (this.notifyErrorHandler = r);
    }
    get context() {
      return this._lView[ce];
    }
    get dirty() {
      return !!(this._lView[m] & 9280) || !!this._lView[ae]?.dirty;
    }
    set context(t) {
      this._lView[ce] = t;
    }
    get destroyed() {
      return Nn(this._lView);
    }
    destroy() {
      if (this._appRef) this._appRef.detachView(this);
      else if (this._attachedToViewContainer) {
        let t = this._lView[q];
        if (je(t)) {
          let n = t[kr],
            r = n ? n.indexOf(this) : -1;
          r > -1 && (Zr(t, r), Ar(n, r));
        }
        this._attachedToViewContainer = !1;
      }
      fa(this._lView[w], this._lView);
    }
    onDestroy(t) {
      sl(this._lView, t);
    }
    markForCheck() {
      ha(this._cdRefInjectingView || this._lView, 4);
    }
    markForRefresh() {
      Ls(this._cdRefInjectingView || this._lView);
    }
    detach() {
      this._lView[m] &= -129;
    }
    reattach() {
      Ti(this._lView), (this._lView[m] |= 128);
    }
    detectChanges() {
      (this._lView[m] |= 1024), _d(this._lView, this.notifyErrorHandler);
    }
    checkNoChanges() {}
    attachToViewContainerRef() {
      if (this._appRef) throw new b(902, !1);
      this._attachedToViewContainer = !0;
    }
    detachFromAppRef() {
      this._appRef = null;
      let t = Pr(this._lView),
        n = this._lView[ft];
      n !== null && !t && da(n, this._lView), yd(this._lView[w], this._lView);
    }
    attachToAppRef(t) {
      if (this._attachedToViewContainer) throw new b(902, !1);
      this._appRef = t;
      let n = Pr(this._lView),
        r = this._lView[ft];
      r !== null && !n && xd(r, this._lView), Ti(this._lView);
    }
  },
  It = (() => {
    class e {
      static __NG_ELEMENT_ID__ = _y;
    }
    return e;
  })(),
  Cy = It,
  by = class extends Cy {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    constructor(t, n, r) {
      super(),
        (this._declarationLView = t),
        (this._declarationTContainer = n),
        (this.elementRef = r);
    }
    get ssrId() {
      return this._declarationTContainer.tView?.ssrId || null;
    }
    createEmbeddedView(t, n) {
      return this.createEmbeddedViewImpl(t, n);
    }
    createEmbeddedViewImpl(t, n, r) {
      let o = ua(this._declarationLView, this._declarationTContainer, t, {
        embeddedViewInjector: n,
        dehydratedView: r,
      });
      return new Et(o);
    }
  };
function _y() {
  return To(Z(), I());
}
function To(e, t) {
  return e.type & 4 ? new by(t, e, Xt(e, t)) : null;
}
function kn(e, t, n, r, o) {
  let i = e.data[t];
  if (i === null) (i = My(e, t, n, r, o)), $h() && (i.flags |= 32);
  else if (i.type & 64) {
    (i.type = n), (i.value = r), (i.attrs = o);
    let s = jh();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
  }
  return _t(i, !0), i;
}
function My(e, t, n, r, o) {
  let i = ll(),
    s = Vs(),
    a = s ? i : i && i.parent,
    u = (e.data[t] = Sy(e, a, n, t, r, o));
  return Ty(e, u, i, s), u;
}
function Ty(e, t, n, r) {
  e.firstChild === null && (e.firstChild = t),
    n !== null &&
      (r
        ? n.child == null && t.parent !== null && (n.child = t)
        : n.next === null && ((n.next = t), (t.prev = n)));
}
function Sy(e, t, n, r, o, i) {
  let s = t ? t.injectorIndex : -1,
    a = 0;
  return (
    cl() && (a |= 128),
    {
      type: n,
      index: r,
      insertBeforeIndex: null,
      injectorIndex: s,
      directiveStart: -1,
      directiveEnd: -1,
      directiveStylingLast: -1,
      componentOffset: -1,
      propertyBindings: null,
      flags: a,
      providerIndexes: 0,
      value: o,
      attrs: i,
      mergedAttrs: null,
      localNames: null,
      initialInputs: void 0,
      inputs: null,
      outputs: null,
      tView: null,
      next: null,
      prev: null,
      projectionNext: null,
      child: null,
      parent: t,
      projection: null,
      styles: null,
      stylesWithoutHost: null,
      residualStyles: void 0,
      classes: null,
      classesWithoutHost: null,
      residualClasses: void 0,
      classBindings: 0,
      styleBindings: 0,
    }
  );
}
var VS = new RegExp(`^(\\d+)*(${Og}|${Rg})*(.*)`);
var Ny = () => null;
function Qr(e, t) {
  return Ny(e, t);
}
var Ji = class {},
  Yr = class {},
  Xi = class {
    resolveComponentFactory(t) {
      throw Error(`No component factory found for ${K(t)}.`);
    }
  },
  Yt = class {
    static NULL = new Xi();
  },
  Kr = class {},
  ma = (() => {
    class e {
      destroyNode = null;
      static __NG_ELEMENT_ID__ = () => xy();
    }
    return e;
  })();
function xy() {
  let e = I(),
    t = Z(),
    n = Ae(t.index, e);
  return (Qe(n) ? n : e)[k];
}
var Ay = (() => {
  class e {
    static ɵprov = A({ token: e, providedIn: "root", factory: () => null });
  }
  return e;
})();
function es(e, t, n) {
  let r = n ? e.styles : null,
    o = n ? e.classes : null,
    i = 0;
  if (t !== null)
    for (let s = 0; s < t.length; s++) {
      let a = t[s];
      if (typeof a == "number") i = a;
      else if (i == 1) o = Di(o, a);
      else if (i == 2) {
        let u = a,
          c = t[++s];
        r = Di(r, u + ": " + c + ";");
      }
    }
  n ? (e.styles = r) : (e.stylesWithoutHost = r),
    n ? (e.classes = o) : (e.classesWithoutHost = o);
}
function z(e, t = M.Default) {
  let n = I();
  if (n === null) return W(e, t);
  let r = Z();
  return Sl(r, n, U(e), t);
}
function jS() {
  let e = "invalid";
  throw new Error(e);
}
function ya(e, t, n, r, o) {
  let i = r === null ? null : { "": -1 },
    s = o(e, n);
  if (s !== null) {
    let [a, u] = Oy(e, n, s);
    ky(e, t, n, a, i, u);
  }
  i !== null && r !== null && Ry(n, r, i);
}
function Ry(e, t, n) {
  let r = (e.localNames = []);
  for (let o = 0; o < t.length; o += 2) {
    let i = n[t[o + 1]];
    if (i == null) throw new b(-301, !1);
    r.push(t[o], i);
  }
}
function Oy(e, t, n) {
  let r = [],
    o = null;
  for (let i of n)
    i.findHostDirectiveDefs !== null &&
      ((o ??= new Map()), i.findHostDirectiveDefs(i, r, o)),
      Ne(i) && (r.push(i), Fy(e, t, r.length - 1));
  return bt(t) ? r.push(...n.slice(1)) : r.push(...n), [r, o];
}
function Fy(e, t, n) {
  (t.componentOffset = n), (e.components ??= []).push(t.index);
}
function ky(e, t, n, r, o, i) {
  for (let c = 0; c < r.length; c++) Ri(Hr(n, t), e, r[c].type);
  $y(n, e.data.length, r.length);
  for (let c = 0; c < r.length; c++) {
    let l = r[c];
    l.providersResolver && l.providersResolver(l);
  }
  let s = !1,
    a = !1,
    u = dd(e, t, r.length, null);
  for (let c = 0; c < r.length; c++) {
    let l = r[c];
    (n.mergedAttrs = Qt(n.mergedAttrs, l.hostAttrs)),
      Vy(e, n, t, u, l),
      Hy(u, l, o),
      l.contentQueries !== null && (n.flags |= 4),
      (l.hostBindings !== null || l.hostAttrs !== null || l.hostVars !== 0) &&
        (n.flags |= 64);
    let d = l.type.prototype;
    !s &&
      (d.ngOnChanges || d.ngOnInit || d.ngDoCheck) &&
      ((e.preOrderHooks ??= []).push(n.index), (s = !0)),
      !a &&
        (d.ngOnChanges || d.ngDoCheck) &&
        ((e.preOrderCheckHooks ??= []).push(n.index), (a = !0)),
      u++;
  }
  Py(e, n, i);
}
function Py(e, t, n) {
  let r = t.directiveStart,
    o = t.directiveEnd,
    i = e.data,
    s = t.attrs,
    a = [],
    u = null,
    c = null;
  for (let l = r; l < o; l++) {
    let d = i[l],
      p = n ? n.get(d) : null,
      f = p ? p.inputs : null,
      h = p ? p.outputs : null;
    (u = uc(0, d.inputs, l, u, f)), (c = uc(1, d.outputs, l, c, h));
    let g = u !== null && s !== null && !Xs(t) ? Ly(u, l, s) : null;
    a.push(g);
  }
  u !== null &&
    (u.hasOwnProperty("class") && (t.flags |= 8),
    u.hasOwnProperty("style") && (t.flags |= 16)),
    (t.initialInputs = a),
    (t.inputs = u),
    (t.outputs = c);
}
function uc(e, t, n, r, o) {
  for (let i in t) {
    if (!t.hasOwnProperty(i)) continue;
    let s = t[i];
    if (s === void 0) continue;
    r ??= {};
    let a = i;
    if (o !== null) {
      if (!o.hasOwnProperty(i)) continue;
      a = o[i];
    }
    e === 0 ? cc(r, n, a, i) : cc(r, n, a, s);
  }
  return r;
}
function cc(e, t, n, r) {
  e.hasOwnProperty(n) ? e[n].push(t, r) : (e[n] = [t, r]);
}
function Ly(e, t, n) {
  let r = null,
    o = 0;
  for (; o < n.length; ) {
    let i = n[o];
    if (i === 0) {
      o += 4;
      continue;
    } else if (i === 5) {
      o += 2;
      continue;
    }
    if (typeof i == "number") break;
    if (e.hasOwnProperty(i)) {
      let s = e[i];
      for (let a = 0; a < s.length; a += 2)
        if (s[a] === t) {
          (r ??= []), r.push(s[a + 1], n[o + 1]);
          break;
        }
    }
    o += 2;
  }
  return r;
}
function Vy(e, t, n, r, o) {
  e.data[r] = o;
  let i = o.factory || (o.factory = dt(o.type, !0)),
    s = new yt(i, Ne(o), z);
  (e.blueprint[r] = s), (n[r] = s), jy(e, t, r, dd(e, n, o.hostVars, se), o);
}
function jy(e, t, n, r, o) {
  let i = o.hostBindings;
  if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    By(s) != a && s.push(a), s.push(n, r, i);
  }
}
function By(e) {
  let t = e.length;
  for (; t > 0; ) {
    let n = e[--t];
    if (typeof n == "number" && n < 0) return n;
  }
  return 0;
}
function Hy(e, t, n) {
  if (n) {
    if (t.exportAs)
      for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
    Ne(t) && (n[""] = e);
  }
}
function $y(e, t, n) {
  (e.flags |= 1),
    (e.directiveStart = t),
    (e.directiveEnd = t + n),
    (e.providerIndexes = t);
}
function Ad(e, t, n, r, o, i, s, a) {
  let u = t.consts,
    c = Zt(u, s),
    l = kn(t, e, 2, r, c);
  return (
    i && ya(t, n, l, Zt(u, a), o),
    (l.mergedAttrs = Qt(l.mergedAttrs, l.attrs)),
    l.attrs !== null && es(l, l.attrs, !1),
    l.mergedAttrs !== null && es(l, l.mergedAttrs, !0),
    t.queries !== null && t.queries.elementStart(t, l),
    l
  );
}
function Rd(e, t) {
  zs(e, t), Os(t) && e.queries.elementEnd(t);
}
var Jr = class extends Yt {
  ngModule;
  constructor(t) {
    super(), (this.ngModule = t);
  }
  resolveComponentFactory(t) {
    let n = ke(t);
    return new wt(n, this.ngModule);
  }
};
function Uy(e) {
  return Object.keys(e).map((t) => {
    let [n, r, o] = e[t],
      i = {
        propName: n,
        templateName: t,
        isSignal: (r & Co.SignalBased) !== 0,
      };
    return o && (i.transform = o), i;
  });
}
function zy(e) {
  return Object.keys(e).map((t) => ({ propName: e[t], templateName: t }));
}
function Gy(e, t, n) {
  let r = t instanceof Ye ? t : t?.injector;
  return (
    r &&
      e.getStandaloneInjector !== null &&
      (r = e.getStandaloneInjector(r) || r),
    r ? new xi(n, r) : n
  );
}
function Wy(e) {
  let t = e.get(Kr, null);
  if (t === null) throw new b(407, !1);
  let n = e.get(Ay, null),
    r = e.get(vt, null);
  return { rendererFactory: t, sanitizer: n, changeDetectionScheduler: r };
}
function qy(e, t) {
  let n = (e.selectors[0][0] || "div").toLowerCase();
  return ad(t, n, n === "svg" ? Mh : n === "math" ? Th : null);
}
var wt = class extends Yr {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    get inputs() {
      return Uy(this.componentDef.inputs);
    }
    get outputs() {
      return zy(this.componentDef.outputs);
    }
    constructor(t, n) {
      super(),
        (this.componentDef = t),
        (this.ngModule = n),
        (this.componentType = t.type),
        (this.selector = Cm(t.selectors)),
        (this.ngContentSelectors = t.ngContentSelectors ?? []),
        (this.isBoundToModule = !!n);
    }
    create(t, n, r, o) {
      let i = _(null);
      try {
        let s = this.componentDef,
          a = r ? ["ng-version", "19.1.7"] : bm(this.componentDef.selectors[0]),
          u = ea(0, null, null, 1, 0, null, null, null, null, [a], null),
          c = Gy(s, o || this.ngModule, t),
          l = Wy(c),
          d = l.rendererFactory.createRenderer(null, s),
          p = r ? Fm(d, r, s.encapsulation, c) : qy(s, d),
          f = ta(
            null,
            u,
            null,
            512 | ld(s),
            null,
            null,
            l,
            d,
            c,
            null,
            Ql(p, c, !0),
          );
        (f[$] = p), $s(f);
        let h = null;
        try {
          let g = Ad($, u, f, "#host", () => [this.componentDef], !0, 0);
          p && (cd(d, p, g), St(p, f)),
            gd(u, f, g),
            Ys(u, g, f),
            Rd(u, g),
            n !== void 0 && Zy(g, this.ngContentSelectors, n),
            (h = Ae(g.index, f)),
            (f[ce] = h[ce]),
            aa(u, f, null);
        } catch (g) {
          throw (h !== null && Vi(h), Vi(f), g);
        } finally {
          Us();
        }
        return new ts(this.componentType, f);
      } finally {
        _(i);
      }
    }
  },
  ts = class extends Ji {
    _rootLView;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n) {
      super(),
        (this._rootLView = n),
        (this._tNode = Fs(n[w], $)),
        (this.location = Xt(this._tNode, n)),
        (this.instance = Ae(this._tNode.index, n)[ce]),
        (this.hostView = this.changeDetectorRef = new Et(n, void 0, !1)),
        (this.componentType = t);
    }
    setInput(t, n) {
      let r = this._tNode.inputs,
        o;
      if (r !== null && (o = r[t])) {
        if (
          ((this.previousInputValues ??= new Map()),
          this.previousInputValues.has(t) &&
            Object.is(this.previousInputValues.get(t), n))
        )
          return;
        let i = this._rootLView;
        sa(i[w], i, o, t, n), this.previousInputValues.set(t, n);
        let s = Ae(this._tNode.index, i);
        ha(s, 1);
      }
    }
    get injector() {
      return new lt(this._tNode, this._rootLView);
    }
    destroy() {
      this.hostView.destroy();
    }
    onDestroy(t) {
      this.hostView.onDestroy(t);
    }
  };
function Zy(e, t, n) {
  let r = (e.projection = []);
  for (let o = 0; o < t.length; o++) {
    let i = n[o];
    r.push(i != null && i.length ? Array.from(i) : null);
  }
}
var Nt = (() => {
  class e {
    static __NG_ELEMENT_ID__ = Qy;
  }
  return e;
})();
function Qy() {
  let e = Z();
  return Fd(e, I());
}
var Yy = Nt,
  Od = class extends Yy {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, r) {
      super(),
        (this._lContainer = t),
        (this._hostTNode = n),
        (this._hostLView = r);
    }
    get element() {
      return Xt(this._hostTNode, this._hostLView);
    }
    get injector() {
      return new lt(this._hostTNode, this._hostLView);
    }
    get parentInjector() {
      let t = Gs(this._hostTNode, this._hostLView);
      if (wl(t)) {
        let n = jr(t, this._hostLView),
          r = Vr(t),
          o = n[w].data[r + 8];
        return new lt(o, n);
      } else return new lt(null, this._hostLView);
    }
    clear() {
      for (; this.length > 0; ) this.remove(this.length - 1);
    }
    get(t) {
      let n = lc(this._lContainer);
      return (n !== null && n[t]) || null;
    }
    get length() {
      return this._lContainer.length - oe;
    }
    createEmbeddedView(t, n, r) {
      let o, i;
      typeof r == "number"
        ? (o = r)
        : r != null && ((o = r.index), (i = r.injector));
      let s = Qr(this._lContainer, t.ssrId),
        a = t.createEmbeddedViewImpl(n || {}, i, s);
      return this.insertImpl(a, o, Gr(this._hostTNode, s)), a;
    }
    createComponent(t, n, r, o, i) {
      let s = t && !wh(t),
        a;
      if (s) a = n;
      else {
        let h = n || {};
        (a = h.index),
          (r = h.injector),
          (o = h.projectableNodes),
          (i = h.environmentInjector || h.ngModuleRef);
      }
      let u = s ? t : new wt(ke(t)),
        c = r || this.parentInjector;
      if (!i && u.ngModule == null) {
        let g = (s ? c : this.parentInjector).get(Ye, null);
        g && (i = g);
      }
      let l = ke(u.componentType ?? {}),
        d = Qr(this._lContainer, l?.id ?? null),
        p = d?.firstChild ?? null,
        f = u.create(c, o, p, i);
      return this.insertImpl(f.hostView, a, Gr(this._hostTNode, d)), f;
    }
    insert(t, n) {
      return this.insertImpl(t, n, !0);
    }
    insertImpl(t, n, r) {
      let o = t._lView;
      if (xh(o)) {
        let a = this.indexOf(t);
        if (a !== -1) this.detach(a);
        else {
          let u = o[q],
            c = new Od(u, u[ie], u[q]);
          c.detach(c.indexOf(t));
        }
      }
      let i = this._adjustIndex(n),
        s = this._lContainer;
      return ga(s, o, i, r), t.attachToViewContainerRef(), Bc(fi(s), i, t), t;
    }
    move(t, n) {
      return this.insert(t, n);
    }
    indexOf(t) {
      let n = lc(this._lContainer);
      return n !== null ? n.indexOf(t) : -1;
    }
    remove(t) {
      let n = this._adjustIndex(t, -1),
        r = Zr(this._lContainer, n);
      r && (Ar(fi(this._lContainer), n), fa(r[w], r));
    }
    detach(t) {
      let n = this._adjustIndex(t, -1),
        r = Zr(this._lContainer, n);
      return r && Ar(fi(this._lContainer), n) != null ? new Et(r) : null;
    }
    _adjustIndex(t, n = 0) {
      return t ?? this.length + n;
    }
  };
function lc(e) {
  return e[kr];
}
function fi(e) {
  return e[kr] || (e[kr] = []);
}
function Fd(e, t) {
  let n,
    r = t[e.index];
  return (
    je(r) ? (n = r) : ((n = Nd(r, t, null, e)), (t[e.index] = n), na(t, n)),
    Jy(n, t, e, r),
    new Od(n, e, t)
  );
}
function Ky(e, t) {
  let n = e[k],
    r = n.createComment(""),
    o = Ce(t, e),
    i = n.parentNode(o);
  return zr(n, i, r, n.nextSibling(o), !1), r;
}
var Jy = tv,
  Xy = () => !1;
function ev(e, t, n) {
  return Xy(e, t, n);
}
function tv(e, t, n, r) {
  if (e[ht]) return;
  let o;
  n.type & 8 ? (o = xe(r)) : (o = Ky(t, n)), (e[ht] = o);
}
var ns = class e {
    queryList;
    matches = null;
    constructor(t) {
      this.queryList = t;
    }
    clone() {
      return new e(this.queryList);
    }
    setDirty() {
      this.queryList.setDirty();
    }
  },
  rs = class e {
    queries;
    constructor(t = []) {
      this.queries = t;
    }
    createEmbeddedView(t) {
      let n = t.queries;
      if (n !== null) {
        let r = t.contentQueries !== null ? t.contentQueries[0] : n.length,
          o = [];
        for (let i = 0; i < r; i++) {
          let s = n.getByIndex(i),
            a = this.queries[s.indexInDeclarationView];
          o.push(a.clone());
        }
        return new e(o);
      }
      return null;
    }
    insertView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    detachView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    finishViewCreation(t) {
      this.dirtyQueriesWithMatches(t);
    }
    dirtyQueriesWithMatches(t) {
      for (let n = 0; n < this.queries.length; n++)
        Da(t, n).matches !== null && this.queries[n].setDirty();
    }
  },
  Xr = class {
    flags;
    read;
    predicate;
    constructor(t, n, r = null) {
      (this.flags = n),
        (this.read = r),
        typeof t == "string" ? (this.predicate = av(t)) : (this.predicate = t);
    }
  },
  os = class e {
    queries;
    constructor(t = []) {
      this.queries = t;
    }
    elementStart(t, n) {
      for (let r = 0; r < this.queries.length; r++)
        this.queries[r].elementStart(t, n);
    }
    elementEnd(t) {
      for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t);
    }
    embeddedTView(t) {
      let n = null;
      for (let r = 0; r < this.length; r++) {
        let o = n !== null ? n.length : 0,
          i = this.getByIndex(r).embeddedTView(t, o);
        i &&
          ((i.indexInDeclarationView = r), n !== null ? n.push(i) : (n = [i]));
      }
      return n !== null ? new e(n) : null;
    }
    template(t, n) {
      for (let r = 0; r < this.queries.length; r++)
        this.queries[r].template(t, n);
    }
    getByIndex(t) {
      return this.queries[t];
    }
    get length() {
      return this.queries.length;
    }
    track(t) {
      this.queries.push(t);
    }
  },
  is = class e {
    metadata;
    matches = null;
    indexInDeclarationView = -1;
    crossesNgTemplate = !1;
    _declarationNodeIndex;
    _appliesToNextNode = !0;
    constructor(t, n = -1) {
      (this.metadata = t), (this._declarationNodeIndex = n);
    }
    elementStart(t, n) {
      this.isApplyingToNode(n) && this.matchTNode(t, n);
    }
    elementEnd(t) {
      this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1);
    }
    template(t, n) {
      this.elementStart(t, n);
    }
    embeddedTView(t, n) {
      return this.isApplyingToNode(t)
        ? ((this.crossesNgTemplate = !0),
          this.addMatch(-t.index, n),
          new e(this.metadata))
        : null;
    }
    isApplyingToNode(t) {
      if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex,
          r = t.parent;
        for (; r !== null && r.type & 8 && r.index !== n; ) r = r.parent;
        return n === (r !== null ? r.index : -1);
      }
      return this._appliesToNextNode;
    }
    matchTNode(t, n) {
      let r = this.metadata.predicate;
      if (Array.isArray(r))
        for (let o = 0; o < r.length; o++) {
          let i = r[o];
          this.matchTNodeWithReadOption(t, n, nv(n, i)),
            this.matchTNodeWithReadOption(t, n, Mr(n, t, i, !1, !1));
        }
      else
        r === It
          ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1)
          : this.matchTNodeWithReadOption(t, n, Mr(n, t, r, !1, !1));
    }
    matchTNodeWithReadOption(t, n, r) {
      if (r !== null) {
        let o = this.metadata.read;
        if (o !== null)
          if (o === Tt || o === Nt || (o === It && n.type & 4))
            this.addMatch(n.index, -2);
          else {
            let i = Mr(n, t, o, !1, !1);
            i !== null && this.addMatch(n.index, i);
          }
        else this.addMatch(n.index, r);
      }
    }
    addMatch(t, n) {
      this.matches === null ? (this.matches = [t, n]) : this.matches.push(t, n);
    }
  };
function nv(e, t) {
  let n = e.localNames;
  if (n !== null) {
    for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
  }
  return null;
}
function rv(e, t) {
  return e.type & 11 ? Xt(e, t) : e.type & 4 ? To(e, t) : null;
}
function ov(e, t, n, r) {
  return n === -1 ? rv(t, e) : n === -2 ? iv(e, t, r) : wn(e, e[w], n, t);
}
function iv(e, t, n) {
  if (n === Tt) return Xt(t, e);
  if (n === It) return To(t, e);
  if (n === Nt) return Fd(t, e);
}
function kd(e, t, n, r) {
  let o = t[Le].queries[r];
  if (o.matches === null) {
    let i = e.data,
      s = n.matches,
      a = [];
    for (let u = 0; s !== null && u < s.length; u += 2) {
      let c = s[u];
      if (c < 0) a.push(null);
      else {
        let l = i[c];
        a.push(ov(t, l, s[u + 1], n.metadata.read));
      }
    }
    o.matches = a;
  }
  return o.matches;
}
function ss(e, t, n, r) {
  let o = e.queries.getByIndex(n),
    i = o.matches;
  if (i !== null) {
    let s = kd(e, t, o, n);
    for (let a = 0; a < i.length; a += 2) {
      let u = i[a];
      if (u > 0) r.push(s[a / 2]);
      else {
        let c = i[a + 1],
          l = t[-u];
        for (let d = oe; d < l.length; d++) {
          let p = l[d];
          p[ft] === p[q] && ss(p[w], p, c, r);
        }
        if (l[qt] !== null) {
          let d = l[qt];
          for (let p = 0; p < d.length; p++) {
            let f = d[p];
            ss(f[w], f, c, r);
          }
        }
      }
    }
  }
  return r;
}
function va(e, t) {
  return e[Le].queries[t].queryList;
}
function Pd(e, t, n) {
  let r = new Li((n & 4) === 4);
  return (
    Oh(e, t, r, r.destroy), (t[Le] ??= new rs()).queries.push(new ns(r)) - 1
  );
}
function sv(e, t, n) {
  let r = P();
  return (
    r.firstCreatePass &&
      (Vd(r, new Xr(e, t, n), -1), (t & 2) === 2 && (r.staticViewQueries = !0)),
    Pd(r, I(), t)
  );
}
function Ld(e, t, n, r) {
  let o = P();
  if (o.firstCreatePass) {
    let i = Z();
    Vd(o, new Xr(t, n, r), i.index),
      uv(o, e),
      (n & 2) === 2 && (o.staticContentQueries = !0);
  }
  return Pd(o, I(), n);
}
function av(e) {
  return e.split(",").map((t) => t.trim());
}
function Vd(e, t, n) {
  e.queries === null && (e.queries = new os()), e.queries.track(new is(t, n));
}
function uv(e, t) {
  let n = e.contentQueries || (e.contentQueries = []),
    r = n.length ? n[n.length - 1] : -1;
  t !== r && n.push(e.queries.length - 1, t);
}
function Da(e, t) {
  return e.queries.getByIndex(t);
}
function jd(e, t) {
  let n = e[w],
    r = Da(n, t);
  return r.crossesNgTemplate ? ss(n, e, t, []) : kd(n, e, r, t);
}
function Bd(e, t, n) {
  let r,
    o = zo(() => {
      r._dirtyCounter();
      let i = fv(r, e);
      if (t && i === void 0) throw new b(-951, !1);
      return i;
    });
  return (r = o[G]), (r._dirtyCounter = Cg(0)), (r._flatValue = void 0), o;
}
function cv(e) {
  return Bd(!0, !1, e);
}
function lv(e) {
  return Bd(!0, !0, e);
}
function dv(e, t) {
  let n = e[G];
  (n._lView = I()),
    (n._queryIndex = t),
    (n._queryList = va(n._lView, t)),
    n._queryList.onDirty(() => n._dirtyCounter.update((r) => r + 1));
}
function fv(e, t) {
  let n = e._lView,
    r = e._queryIndex;
  if (n === void 0 || r === void 0 || n[m] & 4) return t ? void 0 : Y;
  let o = va(n, r),
    i = jd(n, r);
  return (
    o.reset(i, Ll),
    t
      ? o.first
      : o._changesDetected || e._flatValue === void 0
        ? (e._flatValue = o.toArray())
        : e._flatValue
  );
}
function dc(e, t) {
  return cv(t);
}
function pv(e, t) {
  return lv(t);
}
var HS = ((dc.required = pv), dc);
var Ke = class {},
  as = class {};
var us = class extends Ke {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new Jr(this);
    constructor(t, n, r, o = !0) {
      super(), (this.ngModuleType = t), (this._parent = n);
      let i = Uc(t);
      (this._bootstrapComponents = od(i.bootstrap)),
        (this._r3Injector = Al(
          t,
          n,
          [
            { provide: Ke, useValue: this },
            { provide: Yt, useValue: this.componentFactoryResolver },
            ...r,
          ],
          K(t),
          new Set(["environment"]),
        )),
        o && this.resolveInjectorInitializers();
    }
    resolveInjectorInitializers() {
      this._r3Injector.resolveInjectorInitializers(),
        (this.instance = this._r3Injector.get(this.ngModuleType));
    }
    get injector() {
      return this._r3Injector;
    }
    destroy() {
      let t = this._r3Injector;
      !t.destroyed && t.destroy(),
        this.destroyCbs.forEach((n) => n()),
        (this.destroyCbs = null);
    }
    onDestroy(t) {
      this.destroyCbs.push(t);
    }
  },
  cs = class extends as {
    moduleType;
    constructor(t) {
      super(), (this.moduleType = t);
    }
    create(t) {
      return new us(this.moduleType, t, []);
    }
  };
var eo = class extends Ke {
  injector;
  componentFactoryResolver = new Jr(this);
  instance = null;
  constructor(t) {
    super();
    let n = new vn(
      [
        ...t.providers,
        { provide: Ke, useValue: this },
        { provide: Yt, useValue: this.componentFactoryResolver },
      ],
      t.parent || co(),
      t.debugName,
      new Set(["environment"]),
    );
    (this.injector = n),
      t.runEnvironmentInitializers && n.resolveInjectorInitializers();
  }
  destroy() {
    this.injector.destroy();
  }
  onDestroy(t) {
    this.injector.onDestroy(t);
  }
};
function hv(e, t, n = null) {
  return new eo({
    providers: e,
    parent: t,
    debugName: n,
    runEnvironmentInitializers: !0,
  }).injector;
}
var gv = (() => {
  class e {
    _injector;
    cachedInjectors = new Map();
    constructor(n) {
      this._injector = n;
    }
    getOrCreateStandaloneInjector(n) {
      if (!n.standalone) return null;
      if (!this.cachedInjectors.has(n)) {
        let r = Gc(!1, n.type),
          o =
            r.length > 0
              ? hv([r], this._injector, `Standalone[${n.type.name}]`)
              : null;
        this.cachedInjectors.set(n, o);
      }
      return this.cachedInjectors.get(n);
    }
    ngOnDestroy() {
      try {
        for (let n of this.cachedInjectors.values()) n !== null && n.destroy();
      } finally {
        this.cachedInjectors.clear();
      }
    }
    static ɵprov = A({
      token: e,
      providedIn: "environment",
      factory: () => new e(W(Ye)),
    });
  }
  return e;
})();
function $S(e) {
  return Tn(() => {
    let t = $d(e),
      n = ee(X({}, t), {
        decls: e.decls,
        vars: e.vars,
        template: e.template,
        consts: e.consts || null,
        ngContentSelectors: e.ngContentSelectors,
        onPush: e.changeDetection === Bl.OnPush,
        directiveDefs: null,
        pipeDefs: null,
        dependencies: (t.standalone && e.dependencies) || null,
        getStandaloneInjector: t.standalone
          ? (o) => o.get(gv).getOrCreateStandaloneInjector(n)
          : null,
        getExternalStyles: null,
        signals: e.signals ?? !1,
        data: e.data || {},
        encapsulation: e.encapsulation || bn.Emulated,
        styles: e.styles || Y,
        _: null,
        schemas: e.schemas || null,
        tView: null,
        id: "",
      });
    t.standalone && Fe("NgStandalone"), Ud(n);
    let r = e.dependencies;
    return (
      (n.directiveDefs = fc(r, !1)), (n.pipeDefs = fc(r, !0)), (n.id = Ev(n)), n
    );
  });
}
function mv(e) {
  return ke(e) || xs(e);
}
function yv(e) {
  return e !== null;
}
function Hd(e) {
  return Tn(() => ({
    type: e.type,
    bootstrap: e.bootstrap || Y,
    declarations: e.declarations || Y,
    imports: e.imports || Y,
    exports: e.exports || Y,
    transitiveCompileScopes: null,
    schemas: e.schemas || null,
    id: e.id || null,
  }));
}
function vv(e, t) {
  if (e == null) return Se;
  let n = {};
  for (let r in e)
    if (e.hasOwnProperty(r)) {
      let o = e[r],
        i,
        s,
        a,
        u;
      Array.isArray(o)
        ? ((a = o[0]), (i = o[1]), (s = o[2] ?? i), (u = o[3] || null))
        : ((i = o), (s = o), (a = Co.None), (u = null)),
        (n[i] = [r, a, u]),
        (t[i] = s);
    }
  return n;
}
function Dv(e) {
  if (e == null) return Se;
  let t = {};
  for (let n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
  return t;
}
function Pn(e) {
  return Tn(() => {
    let t = $d(e);
    return Ud(t), t;
  });
}
function Ea(e) {
  return {
    type: e.type,
    name: e.name,
    factory: null,
    pure: e.pure !== !1,
    standalone: e.standalone ?? !0,
    onDestroy: e.type.prototype.ngOnDestroy || null,
  };
}
function $d(e) {
  let t = {};
  return {
    type: e.type,
    providersResolver: null,
    factory: null,
    hostBindings: e.hostBindings || null,
    hostVars: e.hostVars || 0,
    hostAttrs: e.hostAttrs || null,
    contentQueries: e.contentQueries || null,
    declaredInputs: t,
    inputConfig: e.inputs || Se,
    exportAs: e.exportAs || null,
    standalone: e.standalone ?? !0,
    signals: e.signals === !0,
    selectors: e.selectors || Y,
    viewQuery: e.viewQuery || null,
    features: e.features || null,
    setInput: null,
    findHostDirectiveDefs: null,
    hostDirectives: null,
    inputs: vv(e.inputs, t),
    outputs: Dv(e.outputs),
    debugInfo: null,
  };
}
function Ud(e) {
  e.features?.forEach((t) => t(e));
}
function fc(e, t) {
  if (!e) return null;
  let n = t ? zc : mv;
  return () => (typeof e == "function" ? e() : e).map((r) => n(r)).filter(yv);
}
function Ev(e) {
  let t = 0,
    n = typeof e.consts == "function" ? "" : e.consts,
    r = [
      e.selectors,
      e.ngContentSelectors,
      e.hostVars,
      e.hostAttrs,
      n,
      e.vars,
      e.decls,
      e.encapsulation,
      e.standalone,
      e.signals,
      e.exportAs,
      JSON.stringify(e.inputs),
      JSON.stringify(e.outputs),
      Object.getOwnPropertyNames(e.type.prototype),
      !!e.contentQueries,
      !!e.viewQuery,
    ];
  for (let i of r.join("|")) t = (Math.imul(31, t) + i.charCodeAt(0)) << 0;
  return (t += 2147483648), "c" + t;
}
function Iv(e) {
  return Object.getPrototypeOf(e.prototype).constructor;
}
function wv(e) {
  let t = Iv(e.type),
    n = !0,
    r = [e];
  for (; t; ) {
    let o;
    if (Ne(e)) o = t.ɵcmp || t.ɵdir;
    else {
      if (t.ɵcmp) throw new b(903, !1);
      o = t.ɵdir;
    }
    if (o) {
      if (n) {
        r.push(o);
        let s = e;
        (s.inputs = pi(e.inputs)),
          (s.declaredInputs = pi(e.declaredInputs)),
          (s.outputs = pi(e.outputs));
        let a = o.hostBindings;
        a && Tv(e, a);
        let u = o.viewQuery,
          c = o.contentQueries;
        if (
          (u && _v(e, u),
          c && Mv(e, c),
          Cv(e, o),
          jp(e.outputs, o.outputs),
          Ne(o) && o.data.animation)
        ) {
          let l = e.data;
          l.animation = (l.animation || []).concat(o.data.animation);
        }
      }
      let i = o.features;
      if (i)
        for (let s = 0; s < i.length; s++) {
          let a = i[s];
          a && a.ngInherit && a(e), a === wv && (n = !1);
        }
    }
    t = Object.getPrototypeOf(t);
  }
  bv(r);
}
function Cv(e, t) {
  for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n)) continue;
    let r = t.inputs[n];
    r !== void 0 &&
      ((e.inputs[n] = r), (e.declaredInputs[n] = t.declaredInputs[n]));
  }
}
function bv(e) {
  let t = 0,
    n = null;
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    (o.hostVars = t += o.hostVars),
      (o.hostAttrs = Qt(o.hostAttrs, (n = Qt(n, o.hostAttrs))));
  }
}
function pi(e) {
  return e === Se ? {} : e === Y ? [] : e;
}
function _v(e, t) {
  let n = e.viewQuery;
  n
    ? (e.viewQuery = (r, o) => {
        t(r, o), n(r, o);
      })
    : (e.viewQuery = t);
}
function Mv(e, t) {
  let n = e.contentQueries;
  n
    ? (e.contentQueries = (r, o, i) => {
        t(r, o, i), n(r, o, i);
      })
    : (e.contentQueries = t);
}
function Tv(e, t) {
  let n = e.hostBindings;
  n
    ? (e.hostBindings = (r, o) => {
        t(r, o), n(r, o);
      })
    : (e.hostBindings = t);
}
function US(e) {
  let t = (n) => {
    let r = Array.isArray(e);
    n.hostDirectives === null
      ? ((n.findHostDirectiveDefs = zd),
        (n.hostDirectives = r ? e.map(ls) : [e]))
      : r
        ? n.hostDirectives.unshift(...e.map(ls))
        : n.hostDirectives.unshift(e);
  };
  return (t.ngInherit = !0), t;
}
function zd(e, t, n) {
  if (e.hostDirectives !== null)
    for (let r of e.hostDirectives)
      if (typeof r == "function") {
        let o = r();
        for (let i of o) pc(ls(i), t, n);
      } else pc(r, t, n);
}
function pc(e, t, n) {
  let r = xs(e.directive);
  Sv(r.declaredInputs, e.inputs), zd(r, t, n), n.set(r, e), t.push(r);
}
function ls(e) {
  return typeof e == "function"
    ? { directive: U(e), inputs: Se, outputs: Se }
    : {
        directive: U(e.directive),
        inputs: hc(e.inputs),
        outputs: hc(e.outputs),
      };
}
function hc(e) {
  if (e === void 0 || e.length === 0) return Se;
  let t = {};
  for (let n = 0; n < e.length; n += 2) t[e[n]] = e[n + 1];
  return t;
}
function Sv(e, t) {
  for (let n in t)
    if (t.hasOwnProperty(n)) {
      let r = t[n],
        o = e[n];
      e[r] = o;
    }
}
function Gd(e) {
  return Ia(e)
    ? Array.isArray(e) || (!(e instanceof Map) && Symbol.iterator in e)
    : !1;
}
function Nv(e, t) {
  if (Array.isArray(e)) for (let n = 0; n < e.length; n++) t(e[n]);
  else {
    let n = e[Symbol.iterator](),
      r;
    for (; !(r = n.next()).done; ) t(r.value);
  }
}
function Ia(e) {
  return e !== null && (typeof e == "function" || typeof e == "object");
}
function Wd(e, t, n) {
  return (e[t] = n);
}
function pe(e, t, n) {
  let r = e[t];
  return Object.is(r, n) ? !1 : ((e[t] = n), !0);
}
function to(e, t, n, r) {
  let o = pe(e, t, n);
  return pe(e, t + 1, r) || o;
}
function xv(e, t, n, r, o, i) {
  let s = to(e, t, n, r);
  return to(e, t + 2, o, i) || s;
}
function Av(e, t, n, r, o, i, s, a, u) {
  let c = t.consts,
    l = kn(t, e, 4, s || null, a || null);
  go() && ya(t, n, l, Zt(c, u), ia),
    (l.mergedAttrs = Qt(l.mergedAttrs, l.attrs)),
    zs(t, l);
  let d = (l.tView = ea(
    2,
    l,
    r,
    o,
    i,
    t.directiveRegistry,
    t.pipeRegistry,
    null,
    t.schemas,
    c,
    null,
  ));
  return (
    t.queries !== null &&
      (t.queries.template(t, l), (d.queries = t.queries.embeddedTView(l))),
    l
  );
}
function qd(e, t, n, r, o, i, s, a, u, c) {
  let l = n + $,
    d = t.firstCreatePass ? Av(l, t, e, r, o, i, s, a, u) : t.data[l];
  _t(d, !1);
  let p = Ov(t, e, d, n);
  vo() && _o(t, e, p, d), St(p, e);
  let f = Nd(p, e, p, d);
  return (
    (e[l] = f),
    na(e, f),
    ev(f, d, e),
    po(d) && ra(t, e, d),
    u != null && oa(e, d, c),
    d
  );
}
function Rv(e, t, n, r, o, i, s, a) {
  let u = I(),
    c = P(),
    l = Zt(c.consts, i);
  return qd(u, c, e, t, n, r, o, l, s, a), Rv;
}
var Ov = Fv;
function Fv(e, t, n, r) {
  return Do(!0), t[k].createComment("");
}
var zS = (() => {
  class e {
    log(n) {
      console.log(n);
    }
    warn(n) {
      console.warn(n);
    }
    static ɵfac = function (r) {
      return new (r || e)();
    };
    static ɵprov = A({ token: e, factory: e.ɵfac, providedIn: "platform" });
  }
  return e;
})();
var kv = new S("");
function wa(e) {
  return !!e && typeof e.then == "function";
}
function Zd(e) {
  return !!e && typeof e.subscribe == "function";
}
var Pv = new S("");
var Qd = (() => {
    class e {
      resolve;
      reject;
      initialized = !1;
      done = !1;
      donePromise = new Promise((n, r) => {
        (this.resolve = n), (this.reject = r);
      });
      appInits = E(Pv, { optional: !0 }) ?? [];
      injector = E(Re);
      constructor() {}
      runInitializers() {
        if (this.initialized) return;
        let n = [];
        for (let o of this.appInits) {
          let i = Yc(this.injector, o);
          if (wa(i)) n.push(i);
          else if (Zd(i)) {
            let s = new Promise((a, u) => {
              i.subscribe({ complete: a, error: u });
            });
            n.push(s);
          }
        }
        let r = () => {
          (this.done = !0), this.resolve();
        };
        Promise.all(n)
          .then(() => {
            r();
          })
          .catch((o) => {
            this.reject(o);
          }),
          n.length === 0 && r(),
          (this.initialized = !0);
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = A({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })(),
  Yd = (() => {
    class e {
      static ɵprov = A({
        token: e,
        providedIn: "root",
        factory: () => new no(),
      });
    }
    return e;
  })(),
  no = class {
    queuedEffectCount = 0;
    queues = new Map();
    schedule(t) {
      this.enqueue(t);
    }
    remove(t) {
      let n = t.zone,
        r = this.queues.get(n);
      r.has(t) && (r.delete(t), this.queuedEffectCount--);
    }
    enqueue(t) {
      let n = t.zone;
      this.queues.has(n) || this.queues.set(n, new Set());
      let r = this.queues.get(n);
      r.has(t) || (this.queuedEffectCount++, r.add(t));
    }
    flush() {
      for (; this.queuedEffectCount > 0; )
        for (let [t, n] of this.queues)
          t === null ? this.flushQueue(n) : t.run(() => this.flushQueue(n));
    }
    flushQueue(t) {
      for (let n of t) t.delete(n), this.queuedEffectCount--, n.run();
    }
  },
  Lv = new S("");
function Vv() {
  ru(() => {
    throw new b(600, !1);
  });
}
function jv(e) {
  return e.isBoundToModule;
}
var Bv = 10;
var _n = (() => {
  class e {
    _runningTick = !1;
    _destroyed = !1;
    _destroyListeners = [];
    _views = [];
    internalErrorHandler = E(Dg);
    afterRenderManager = E(ql);
    zonelessEnabled = E(Ws);
    rootEffectScheduler = E(Yd);
    dirtyFlags = 0;
    deferredDirtyFlags = 0;
    tracingSnapshot = null;
    externalTestViews = new Set();
    afterTick = new te();
    get allViews() {
      return [...this.externalTestViews.keys(), ...this._views];
    }
    get destroyed() {
      return this._destroyed;
    }
    componentTypes = [];
    components = [];
    isStable = E(On).hasPendingTasks.pipe(st((n) => !n));
    constructor() {
      E(Eo, { optional: !0 });
    }
    whenStable() {
      let n;
      return new Promise((r) => {
        n = this.isStable.subscribe({
          next: (o) => {
            o && r();
          },
        });
      }).finally(() => {
        n.unsubscribe();
      });
    }
    _injector = E(Ye);
    _rendererFactory = null;
    get injector() {
      return this._injector;
    }
    bootstrap(n, r) {
      let o = n instanceof Yr;
      if (!this._injector.get(Qd).done) {
        let p = !o && ch(n),
          f = !1;
        throw new b(405, f);
      }
      let s;
      o ? (s = n) : (s = this._injector.get(Yt).resolveComponentFactory(n)),
        this.componentTypes.push(s.componentType);
      let a = jv(s) ? void 0 : this._injector.get(Ke),
        u = r || s.selector,
        c = s.create(Re.NULL, [], u, a),
        l = c.location.nativeElement,
        d = c.injector.get(kv, null);
      return (
        d?.registerApplication(l),
        c.onDestroy(() => {
          this.detachView(c.hostView),
            Tr(this.components, c),
            d?.unregisterApplication(l);
        }),
        this._loadComponent(c),
        c
      );
    }
    tick() {
      this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick();
    }
    _tick = () => {
      if (this.tracingSnapshot !== null) {
        let r = this.tracingSnapshot;
        (this.tracingSnapshot = null),
          r.run(Qs.CHANGE_DETECTION, this._tick),
          r.dispose();
        return;
      }
      if (this._runningTick) throw new b(101, !1);
      let n = _(null);
      try {
        (this._runningTick = !0), this.synchronize();
      } catch (r) {
        this.internalErrorHandler(r);
      } finally {
        (this._runningTick = !1), _(n), this.afterTick.next();
      }
    };
    synchronize() {
      this._rendererFactory === null &&
        !this._injector.destroyed &&
        (this._rendererFactory = this._injector.get(Kr, null, {
          optional: !0,
        })),
        (this.dirtyFlags |= this.deferredDirtyFlags),
        (this.deferredDirtyFlags = 0);
      let n = 0;
      for (; this.dirtyFlags !== 0 && n++ < Bv; ) this.synchronizeOnce();
    }
    synchronizeOnce() {
      if (
        ((this.dirtyFlags |= this.deferredDirtyFlags),
        (this.deferredDirtyFlags = 0),
        this.dirtyFlags & 16 &&
          ((this.dirtyFlags &= -17), this.rootEffectScheduler.flush()),
        this.dirtyFlags & 7)
      ) {
        let n = !!(this.dirtyFlags & 1);
        (this.dirtyFlags &= -8), (this.dirtyFlags |= 8);
        for (let { _lView: r, notifyErrorHandler: o } of this.allViews)
          Hv(r, o, n, this.zonelessEnabled);
        if (
          ((this.dirtyFlags &= -5),
          this.syncDirtyFlagsWithViews(),
          this.dirtyFlags & 23)
        )
          return;
      } else this._rendererFactory?.begin?.(), this._rendererFactory?.end?.();
      this.dirtyFlags & 8 &&
        ((this.dirtyFlags &= -9), this.afterRenderManager.execute()),
        this.syncDirtyFlagsWithViews();
    }
    syncDirtyFlagsWithViews() {
      if (this.allViews.some(({ _lView: n }) => ho(n))) {
        this.dirtyFlags |= 2;
        return;
      } else this.dirtyFlags &= -8;
    }
    attachView(n) {
      let r = n;
      this._views.push(r), r.attachToAppRef(this);
    }
    detachView(n) {
      let r = n;
      Tr(this._views, r), r.detachFromAppRef();
    }
    _loadComponent(n) {
      this.attachView(n.hostView),
        this.tick(),
        this.components.push(n),
        this._injector.get(Lv, []).forEach((o) => o(n));
    }
    ngOnDestroy() {
      if (!this._destroyed)
        try {
          this._destroyListeners.forEach((n) => n()),
            this._views.slice().forEach((n) => n.destroy());
        } finally {
          (this._destroyed = !0),
            (this._views = []),
            (this._destroyListeners = []);
        }
    }
    onDestroy(n) {
      return (
        this._destroyListeners.push(n), () => Tr(this._destroyListeners, n)
      );
    }
    destroy() {
      if (this._destroyed) throw new b(406, !1);
      let n = this._injector;
      n.destroy && !n.destroyed && n.destroy();
    }
    get viewCount() {
      return this._views.length;
    }
    static ɵfac = function (r) {
      return new (r || e)();
    };
    static ɵprov = A({ token: e, factory: e.ɵfac, providedIn: "root" });
  }
  return e;
})();
function Tr(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function Hv(e, t, n, r) {
  if (!n && !ho(e)) return;
  _d(e, t, n && !r ? 0 : 1);
}
function $v(e, t, n, r) {
  let o = I(),
    i = Mt();
  if (pe(o, i, t)) {
    let s = P(),
      a = An();
    $m(a, o, e, t, n, r);
  }
  return $v;
}
function Uv(e, t, n, r) {
  return pe(e, Mt(), n) ? t + Ie(n) + r : se;
}
function zv(e, t, n, r, o, i) {
  let s = fl(),
    a = to(e, s, n, o);
  return mo(2), a ? t + Ie(n) + r + Ie(o) + i : se;
}
function Gv(e, t, n, r, o, i, s, a, u, c) {
  let l = fl(),
    d = xv(e, l, n, o, s, u);
  return mo(4), d ? t + Ie(n) + r + Ie(o) + i + Ie(s) + a + Ie(u) + c : se;
}
function Ir(e, t) {
  return (e << 17) | (t << 2);
}
function Ct(e) {
  return (e >> 17) & 32767;
}
function Wv(e) {
  return (e & 2) == 2;
}
function qv(e, t) {
  return (e & 131071) | (t << 17);
}
function ds(e) {
  return e | 2;
}
function Kt(e) {
  return (e & 131068) >> 2;
}
function hi(e, t) {
  return (e & -131069) | (t << 2);
}
function Zv(e) {
  return (e & 1) === 1;
}
function fs(e) {
  return e | 1;
}
function Qv(e, t, n, r, o, i) {
  let s = i ? t.classBindings : t.styleBindings,
    a = Ct(s),
    u = Kt(s);
  e[r] = n;
  let c = !1,
    l;
  if (Array.isArray(n)) {
    let d = n;
    (l = d[1]), (l === null || Sn(d, l) > 0) && (c = !0);
  } else l = n;
  if (o)
    if (u !== 0) {
      let p = Ct(e[a + 1]);
      (e[r + 1] = Ir(p, a)),
        p !== 0 && (e[p + 1] = hi(e[p + 1], r)),
        (e[a + 1] = qv(e[a + 1], r));
    } else
      (e[r + 1] = Ir(a, 0)), a !== 0 && (e[a + 1] = hi(e[a + 1], r)), (a = r);
  else
    (e[r + 1] = Ir(u, 0)),
      a === 0 ? (a = r) : (e[u + 1] = hi(e[u + 1], r)),
      (u = r);
  c && (e[r + 1] = ds(e[r + 1])),
    gc(e, l, r, !0),
    gc(e, l, r, !1),
    Yv(t, l, e, r, i),
    (s = Ir(a, u)),
    i ? (t.classBindings = s) : (t.styleBindings = s);
}
function Yv(e, t, n, r, o) {
  let i = o ? e.residualClasses : e.residualStyles;
  i != null &&
    typeof t == "string" &&
    Sn(i, t) >= 0 &&
    (n[r + 1] = fs(n[r + 1]));
}
function gc(e, t, n, r) {
  let o = e[n + 1],
    i = t === null,
    s = r ? Ct(o) : Kt(o),
    a = !1;
  for (; s !== 0 && (a === !1 || i); ) {
    let u = e[s],
      c = e[s + 1];
    Kv(u, t) && ((a = !0), (e[s + 1] = r ? fs(c) : ds(c))),
      (s = r ? Ct(c) : Kt(c));
  }
  a && (e[n + 1] = r ? ds(o) : fs(o));
}
function Kv(e, t) {
  return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t
    ? !0
    : Array.isArray(e) && typeof t == "string"
      ? Sn(e, t) >= 0
      : !1;
}
var Ee = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function Jv(e) {
  return e.substring(Ee.key, Ee.keyEnd);
}
function Xv(e) {
  return eD(e), Kd(e, Jd(e, 0, Ee.textEnd));
}
function Kd(e, t) {
  let n = Ee.textEnd;
  return n === t ? -1 : ((t = Ee.keyEnd = tD(e, (Ee.key = t), n)), Jd(e, t, n));
}
function eD(e) {
  (Ee.key = 0),
    (Ee.keyEnd = 0),
    (Ee.value = 0),
    (Ee.valueEnd = 0),
    (Ee.textEnd = e.length);
}
function Jd(e, t, n) {
  for (; t < n && e.charCodeAt(t) <= 32; ) t++;
  return t;
}
function tD(e, t, n) {
  for (; t < n && e.charCodeAt(t) > 32; ) t++;
  return t;
}
function nD(e, t, n) {
  let r = I(),
    o = Mt();
  if (pe(r, o, t)) {
    let i = P(),
      s = An();
    bo(i, s, r, e, t, r[k], n, !1);
  }
  return nD;
}
function ps(e, t, n, r, o) {
  let i = t.inputs,
    s = o ? "class" : "style";
  sa(e, n, i[s], s, r);
}
function Xd(e, t, n) {
  return ef(e, t, n, !1), Xd;
}
function rD(e, t) {
  return ef(e, t, null, !0), rD;
}
function GS(e) {
  iD(dD, oD, e, !0);
}
function oD(e, t) {
  for (let n = Xv(t); n >= 0; n = Kd(t, n)) Ns(e, Jv(t), !0);
}
function ef(e, t, n, r) {
  let o = I(),
    i = P(),
    s = mo(2);
  if ((i.firstUpdatePass && nf(i, e, s, r), t !== se && pe(o, s, t))) {
    let a = i.data[Be()];
    rf(i, a, o, o[k], e, (o[s + 1] = pD(t, n)), r, s);
  }
}
function iD(e, t, n, r) {
  let o = P(),
    i = mo(2);
  o.firstUpdatePass && nf(o, null, i, r);
  let s = I();
  if (n !== se && pe(s, i, n)) {
    let a = o.data[Be()];
    if (of(a, r) && !tf(o, i)) {
      let u = r ? a.classesWithoutHost : a.stylesWithoutHost;
      u !== null && (n = Di(u, n || "")), ps(o, a, s, n, r);
    } else fD(o, a, s, s[k], s[i + 1], (s[i + 1] = lD(e, t, n)), r, i);
  }
}
function tf(e, t) {
  return t >= e.expandoStartIndex;
}
function nf(e, t, n, r) {
  let o = e.data;
  if (o[n + 1] === null) {
    let i = o[Be()],
      s = tf(e, n);
    of(i, r) && t === null && !s && (t = !1),
      (t = sD(o, i, t, r)),
      Qv(o, i, t, n, s, r);
  }
}
function sD(e, t, n, r) {
  let o = pl(e),
    i = r ? t.residualClasses : t.residualStyles;
  if (o === null)
    (r ? t.classBindings : t.styleBindings) === 0 &&
      ((n = gi(null, e, t, n, r)), (n = Mn(n, t.attrs, r)), (i = null));
  else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== o)
      if (((n = gi(o, e, t, n, r)), i === null)) {
        let u = aD(e, t, r);
        u !== void 0 &&
          Array.isArray(u) &&
          ((u = gi(null, e, t, u[1], r)),
          (u = Mn(u, t.attrs, r)),
          uD(e, t, r, u));
      } else i = cD(e, t, r);
  }
  return (
    i !== void 0 && (r ? (t.residualClasses = i) : (t.residualStyles = i)), n
  );
}
function aD(e, t, n) {
  let r = n ? t.classBindings : t.styleBindings;
  if (Kt(r) !== 0) return e[Ct(r)];
}
function uD(e, t, n, r) {
  let o = n ? t.classBindings : t.styleBindings;
  e[Ct(o)] = r;
}
function cD(e, t, n) {
  let r,
    o = t.directiveEnd;
  for (let i = 1 + t.directiveStylingLast; i < o; i++) {
    let s = e[i].hostAttrs;
    r = Mn(r, s, n);
  }
  return Mn(r, t.attrs, n);
}
function gi(e, t, n, r, o) {
  let i = null,
    s = n.directiveEnd,
    a = n.directiveStylingLast;
  for (
    a === -1 ? (a = n.directiveStart) : a++;
    a < s && ((i = t[a]), (r = Mn(r, i.hostAttrs, o)), i !== e);

  )
    a++;
  return e !== null && (n.directiveStylingLast = a), r;
}
function Mn(e, t, n) {
  let r = n ? 1 : 2,
    o = -1;
  if (t !== null)
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      typeof s == "number"
        ? (o = s)
        : o === r &&
          (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]),
          Ns(e, s, n ? !0 : t[++i]));
    }
  return e === void 0 ? null : e;
}
function lD(e, t, n) {
  if (n == null || n === "") return Y;
  let r = [],
    o = en(n);
  if (Array.isArray(o)) for (let i = 0; i < o.length; i++) e(r, o[i], !0);
  else if (typeof o == "object")
    for (let i in o) o.hasOwnProperty(i) && e(r, i, o[i]);
  else typeof o == "string" && t(r, o);
  return r;
}
function dD(e, t, n) {
  let r = String(t);
  r !== "" && !r.includes(" ") && Ns(e, r, n);
}
function fD(e, t, n, r, o, i, s, a) {
  o === se && (o = Y);
  let u = 0,
    c = 0,
    l = 0 < o.length ? o[0] : null,
    d = 0 < i.length ? i[0] : null;
  for (; l !== null || d !== null; ) {
    let p = u < o.length ? o[u + 1] : void 0,
      f = c < i.length ? i[c + 1] : void 0,
      h = null,
      g;
    l === d
      ? ((u += 2), (c += 2), p !== f && ((h = d), (g = f)))
      : d === null || (l !== null && l < d)
        ? ((u += 2), (h = l))
        : ((c += 2), (h = d), (g = f)),
      h !== null && rf(e, t, n, r, h, g, s, a),
      (l = u < o.length ? o[u] : null),
      (d = c < i.length ? i[c] : null);
  }
}
function rf(e, t, n, r, o, i, s, a) {
  if (!(t.type & 3)) return;
  let u = e.data,
    c = u[a + 1],
    l = Zv(c) ? mc(u, t, n, o, Kt(c), s) : void 0;
  if (!ro(l)) {
    ro(i) || (Wv(c) && (i = mc(u, null, n, o, a, s)));
    let d = ol(Be(), n);
    sy(r, s, d, o, i);
  }
}
function mc(e, t, n, r, o, i) {
  let s = t === null,
    a;
  for (; o > 0; ) {
    let u = e[o],
      c = Array.isArray(u),
      l = c ? u[1] : u,
      d = l === null,
      p = n[o + 1];
    p === se && (p = d ? Y : void 0);
    let f = d ? si(p, r) : l === r ? p : void 0;
    if ((c && !ro(f) && (f = si(u, r)), ro(f) && ((a = f), s))) return a;
    let h = e[o + 1];
    o = s ? Ct(h) : Kt(h);
  }
  if (t !== null) {
    let u = i ? t.residualClasses : t.residualStyles;
    u != null && (a = si(u, r));
  }
  return a;
}
function ro(e) {
  return e !== void 0;
}
function pD(e, t) {
  return (
    e == null ||
      e === "" ||
      (typeof t == "string"
        ? (e = e + t)
        : typeof e == "object" && (e = K(en(e)))),
    e
  );
}
function of(e, t) {
  return (e.flags & (t ? 8 : 16)) !== 0;
}
function WS(e, t) {
  Fe("NgControlFlow");
  let n = I(),
    r = Mt(),
    o = n[r] !== se ? n[r] : -1,
    i = o !== -1 ? yc(n, $ + o) : void 0,
    s = 0;
  if (pe(n, r, e)) {
    let a = _(null);
    try {
      if ((i !== void 0 && Iy(i, s), e !== -1)) {
        let u = $ + e,
          c = yc(n, u),
          l = hD(n[w], u),
          d = Qr(c, l.tView.ssrId),
          p = ua(n, l, t, { dehydratedView: d });
        ga(c, p, s, Gr(l, d));
      }
    } finally {
      _(a);
    }
  } else if (i !== void 0) {
    let a = Ey(i, s);
    a !== void 0 && (a[ce] = t);
  }
}
function yc(e, t) {
  return e[t];
}
function hD(e, t) {
  return Fs(e, t);
}
function sf(e, t, n, r) {
  let o = I(),
    i = P(),
    s = $ + e,
    a = o[k],
    u = i.firstCreatePass ? Ad(s, i, o, t, ia, go(), n, r) : i.data[s],
    c = mD(i, o, u, a, t, e);
  o[s] = c;
  let l = po(u);
  return (
    _t(u, !0),
    cd(a, c, u),
    !la(u) && vo() && _o(i, o, c, u),
    Fh() === 0 && St(c, o),
    kh(),
    l && (ra(i, o, u), Ys(i, u, o)),
    r !== null && oa(o, u),
    sf
  );
}
function af() {
  let e = Z();
  Vs() ? js() : ((e = e.parent), _t(e, !1));
  let t = e;
  Lh(t) && Vh(), Ph();
  let n = P();
  return (
    n.firstCreatePass && Rd(n, t),
    t.classesWithoutHost != null &&
      Kh(t) &&
      ps(n, t, I(), t.classesWithoutHost, !0),
    t.stylesWithoutHost != null &&
      Jh(t) &&
      ps(n, t, I(), t.stylesWithoutHost, !1),
    af
  );
}
function gD(e, t, n, r) {
  return sf(e, t, n, r), af(), gD;
}
var mD = (e, t, n, r, o, i) => (Do(!0), ad(r, o, qh()));
function yD(e, t, n, r, o) {
  let i = t.consts,
    s = Zt(i, r),
    a = kn(t, e, 8, "ng-container", s);
  s !== null && es(a, s, !0);
  let u = Zt(i, o);
  return (
    go() && ya(t, n, a, u, ia),
    (a.mergedAttrs = Qt(a.mergedAttrs, a.attrs)),
    t.queries !== null && t.queries.elementStart(t, a),
    a
  );
}
function vD(e, t, n) {
  let r = I(),
    o = P(),
    i = e + $,
    s = o.firstCreatePass ? yD(i, o, r, t, n) : o.data[i];
  _t(s, !0);
  let a = ED(o, r, s, e);
  return (
    (r[i] = a),
    vo() && _o(o, r, a, s),
    St(a, r),
    po(s) && (ra(o, r, s), Ys(o, s, r)),
    n != null && oa(r, s),
    vD
  );
}
function DD() {
  let e = Z(),
    t = P();
  return (
    Vs() ? js() : ((e = e.parent), _t(e, !1)),
    t.firstCreatePass && (zs(t, e), Os(e) && t.queries.elementEnd(e)),
    DD
  );
}
var ED = (e, t, n, r) => (Do(!0), Tm(t[k], ""));
function qS() {
  return I();
}
function ID(e, t, n) {
  let r = I(),
    o = Mt();
  if (pe(r, o, t)) {
    let i = P(),
      s = An();
    bo(i, s, r, e, t, r[k], n, !0);
  }
  return ID;
}
function wD(e, t, n) {
  let r = I(),
    o = Mt();
  if (pe(r, o, t)) {
    let i = P(),
      s = An(),
      a = pl(i.data),
      u = Gm(a, s, r);
    bo(i, s, r, e, t, u, n, !0);
  }
  return wD;
}
var ct = void 0;
function CD(e) {
  let t = e,
    n = Math.floor(Math.abs(e)),
    r = e.toString().replace(/^[^.]*\.?/, "").length;
  return n === 1 && r === 0 ? 1 : 5;
}
var bD = [
    "en",
    [["a", "p"], ["AM", "PM"], ct],
    [["AM", "PM"], ct, ct],
    [
      ["S", "M", "T", "W", "T", "F", "S"],
      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    ],
    ct,
    [
      ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
      [
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
      [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    ],
    ct,
    [
      ["B", "A"],
      ["BC", "AD"],
      ["Before Christ", "Anno Domini"],
    ],
    0,
    [6, 0],
    ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
    ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
    ["{1}, {0}", ct, "{1} 'at' {0}", ct],
    [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"],
    ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"],
    "USD",
    "$",
    "US Dollar",
    {},
    "ltr",
    CD,
  ],
  mi = {};
function he(e) {
  let t = _D(e),
    n = vc(t);
  if (n) return n;
  let r = t.split("-")[0];
  if (((n = vc(r)), n)) return n;
  if (r === "en") return bD;
  throw new b(701, !1);
}
function vc(e) {
  return (
    e in mi ||
      (mi[e] =
        We.ng &&
        We.ng.common &&
        We.ng.common.locales &&
        We.ng.common.locales[e]),
    mi[e]
  );
}
var V = (function (e) {
  return (
    (e[(e.LocaleId = 0)] = "LocaleId"),
    (e[(e.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
    (e[(e.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
    (e[(e.DaysFormat = 3)] = "DaysFormat"),
    (e[(e.DaysStandalone = 4)] = "DaysStandalone"),
    (e[(e.MonthsFormat = 5)] = "MonthsFormat"),
    (e[(e.MonthsStandalone = 6)] = "MonthsStandalone"),
    (e[(e.Eras = 7)] = "Eras"),
    (e[(e.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
    (e[(e.WeekendRange = 9)] = "WeekendRange"),
    (e[(e.DateFormat = 10)] = "DateFormat"),
    (e[(e.TimeFormat = 11)] = "TimeFormat"),
    (e[(e.DateTimeFormat = 12)] = "DateTimeFormat"),
    (e[(e.NumberSymbols = 13)] = "NumberSymbols"),
    (e[(e.NumberFormats = 14)] = "NumberFormats"),
    (e[(e.CurrencyCode = 15)] = "CurrencyCode"),
    (e[(e.CurrencySymbol = 16)] = "CurrencySymbol"),
    (e[(e.CurrencyName = 17)] = "CurrencyName"),
    (e[(e.Currencies = 18)] = "Currencies"),
    (e[(e.Directionality = 19)] = "Directionality"),
    (e[(e.PluralCase = 20)] = "PluralCase"),
    (e[(e.ExtraData = 21)] = "ExtraData"),
    e
  );
})(V || {});
function _D(e) {
  return e.toLowerCase().replace(/_/g, "-");
}
var oo = "en-US";
var MD = oo;
function TD(e) {
  typeof e == "string" && (MD = e.toLowerCase().replace(/_/g, "-"));
}
var SD = (e, t, n) => {};
function ND(e, t, n, r) {
  let o = I(),
    i = P(),
    s = Z();
  return uf(i, o, o[k], s, e, t, r), ND;
}
function xD(e, t, n, r) {
  let o = e.cleanup;
  if (o != null)
    for (let i = 0; i < o.length - 1; i += 2) {
      let s = o[i];
      if (s === n && o[i + 1] === r) {
        let a = t[Fr],
          u = o[i + 2];
        return a.length > u ? a[u] : null;
      }
      typeof s == "string" && (i += 2);
    }
  return null;
}
function uf(e, t, n, r, o, i, s) {
  let a = po(r),
    c = e.firstCreatePass && ul(e),
    l = t[ce],
    d = al(t),
    p = !0;
  if (r.type & 3 || s) {
    let g = Ce(r, t),
      L = s ? s(g) : g,
      O = d.length,
      ze = s ? (At) => s(xe(At[r.index])) : r.index,
      xt = null;
    if ((!s && a && (xt = xD(e, t, o, r.index)), xt !== null)) {
      let At = xt.__ngLastListenerFn__ || xt;
      (At.__ngNextListenerFn__ = i), (xt.__ngLastListenerFn__ = i), (p = !1);
    } else {
      (i = Ec(r, t, l, i)), SD(g, o, i);
      let At = n.listen(L, o, i);
      d.push(i, At), c && c.push(o, ze, O, O + 1);
    }
  } else i = Ec(r, t, l, i);
  let f = r.outputs,
    h;
  if (p && f !== null && (h = f[o])) {
    let g = h.length;
    if (g)
      for (let L = 0; L < g; L += 2) {
        let O = h[L],
          ze = h[L + 1],
          Rf = t[O][ze].subscribe(i),
          Va = d.length;
        d.push(i, Rf), c && c.push(o, r.index, Va, -(Va + 1));
      }
  }
}
function Dc(e, t, n, r) {
  let o = _(null);
  try {
    return de(6, t, n), n(r) !== !1;
  } catch (i) {
    return md(e, i), !1;
  } finally {
    de(7, t, n), _(o);
  }
}
function Ec(e, t, n, r) {
  return function o(i) {
    if (i === Function) return r;
    let s = bt(e) ? Ae(e.index, t) : t;
    ha(s, 5);
    let a = Dc(t, n, r, i),
      u = o.__ngNextListenerFn__;
    for (; u; ) (a = Dc(t, n, u, i) && a), (u = u.__ngNextListenerFn__);
    return a;
  };
}
function ZS(e = 1) {
  return Wh(e);
}
function AD(e, t) {
  let n = null,
    r = vm(e);
  for (let o = 0; o < t.length; o++) {
    let i = t[o];
    if (i === "*") {
      n = o;
      continue;
    }
    if (r === null ? sd(e, i, !0) : Im(r, i)) return o;
  }
  return n;
}
function QS(e) {
  let t = I()[fe][ie];
  if (!t.projection) {
    let n = e ? e.length : 1,
      r = (t.projection = sh(n, null)),
      o = r.slice(),
      i = t.child;
    for (; i !== null; ) {
      if (i.type !== 128) {
        let s = e ? AD(i, e) : 0;
        s !== null &&
          (o[s] ? (o[s].projectionNext = i) : (r[s] = i), (o[s] = i));
      }
      i = i.next;
    }
  }
}
function YS(e, t = 0, n, r, o, i) {
  let s = I(),
    a = P(),
    u = r ? e + 1 : null;
  u !== null && qd(s, a, u, r, o, i, null, n);
  let c = kn(a, $ + e, 16, null, n || null);
  c.projection === null && (c.projection = t), js();
  let d = !s[Dn] || cl();
  s[fe][ie].projection[c.projection] === null && u !== null
    ? RD(s, a, u)
    : d && !la(c) && oy(a, s, c);
}
function RD(e, t, n) {
  let r = $ + n,
    o = t.data[r],
    i = e[r],
    s = Qr(i, o.tView.ssrId),
    a = ua(e, o, void 0, { dehydratedView: s });
  ga(i, a, 0, Gr(o, s));
}
function KS(e, t, n, r) {
  Ld(e, t, n, r);
}
function JS(e, t, n) {
  sv(e, t, n);
}
function XS(e) {
  let t = I(),
    n = P(),
    r = Hs();
  yo(r + 1);
  let o = Da(n, r);
  if (e.dirty && Nh(t) === ((o.metadata.flags & 2) === 2)) {
    if (o.matches === null) e.reset([]);
    else {
      let i = jd(t, r);
      e.reset(i, Ll), e.notifyOnChanges();
    }
    return !0;
  }
  return !1;
}
function e0() {
  return va(I(), Hs());
}
function t0(e, t, n, r, o) {
  dv(t, Ld(e, n, r, o));
}
function n0(e = 1) {
  yo(Hs() + e);
}
function OD(e, t, n, r) {
  n >= e.data.length && ((e.data[n] = null), (e.blueprint[n] = null)),
    (t[n] = r);
}
function r0(e) {
  let t = Bh();
  return ks(t, $ + e);
}
function o0(e, t = "") {
  let n = I(),
    r = P(),
    o = e + $,
    i = r.firstCreatePass ? kn(r, o, 1, t, null) : r.data[o],
    s = FD(r, n, i, t, e);
  (n[o] = s), vo() && _o(r, n, s, i), _t(i, !1);
}
var FD = (e, t, n, r, o) => (Do(!0), _m(t[k], r));
function kD(e) {
  return cf("", e, ""), kD;
}
function cf(e, t, n) {
  let r = I(),
    o = Uv(r, e, t, n);
  return o !== se && Ca(r, Be(), o), cf;
}
function PD(e, t, n, r, o) {
  let i = I(),
    s = zv(i, e, t, n, r, o);
  return s !== se && Ca(i, Be(), s), PD;
}
function LD(e, t, n, r, o, i, s, a, u) {
  let c = I(),
    l = Gv(c, e, t, n, r, o, i, s, a, u);
  return l !== se && Ca(c, Be(), l), LD;
}
function Ca(e, t, n) {
  let r = ol(t, e);
  Mm(e[k], r, n);
}
function VD(e, t, n) {
  Vl(t) && (t = t());
  let r = I(),
    o = Mt();
  if (pe(r, o, t)) {
    let i = P(),
      s = An();
    bo(i, s, r, e, t, r[k], n, !1);
  }
  return VD;
}
function i0(e, t) {
  let n = Vl(e);
  return n && e.set(t), n;
}
function jD(e, t) {
  let n = I(),
    r = P(),
    o = Z();
  return uf(r, n, n[k], o, e, t), jD;
}
function BD(e, t, n) {
  let r = P();
  if (r.firstCreatePass) {
    let o = Ne(e);
    hs(n, r.data, r.blueprint, o, !0), hs(t, r.data, r.blueprint, o, !1);
  }
}
function hs(e, t, n, r, o) {
  if (((e = U(e)), Array.isArray(e)))
    for (let i = 0; i < e.length; i++) hs(e[i], t, n, r, o);
  else {
    let i = P(),
      s = I(),
      a = Z(),
      u = Wt(e) ? e : U(e.provide),
      c = Qc(e),
      l = a.providerIndexes & 1048575,
      d = a.directiveStart,
      p = a.providerIndexes >> 20;
    if (Wt(e) || !e.multi) {
      let f = new yt(c, o, z),
        h = vi(u, t, o ? l : l + p, d);
      h === -1
        ? (Ri(Hr(a, s), i, u),
          yi(i, e, t.length),
          t.push(u),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(f),
          s.push(f))
        : ((n[h] = f), (s[h] = f));
    } else {
      let f = vi(u, t, l + p, d),
        h = vi(u, t, l, l + p),
        g = f >= 0 && n[f],
        L = h >= 0 && n[h];
      if ((o && !L) || (!o && !g)) {
        Ri(Hr(a, s), i, u);
        let O = UD(o ? $D : HD, n.length, o, r, c);
        !o && L && (n[h].providerFactory = O),
          yi(i, e, t.length, 0),
          t.push(u),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(O),
          s.push(O);
      } else {
        let O = lf(n[o ? h : f], c, !o && r);
        yi(i, e, f > -1 ? f : h, O);
      }
      !o && r && L && n[h].componentProviders++;
    }
  }
}
function yi(e, t, n, r) {
  let o = Wt(t),
    i = gh(t);
  if (o || i) {
    let u = (i ? U(t.useClass) : t).prototype.ngOnDestroy;
    if (u) {
      let c = e.destroyHooks || (e.destroyHooks = []);
      if (!o && t.multi) {
        let l = c.indexOf(n);
        l === -1 ? c.push(n, [r, u]) : c[l + 1].push(r, u);
      } else c.push(n, u);
    }
  }
}
function lf(e, t, n) {
  return n && e.componentProviders++, e.multi.push(t) - 1;
}
function vi(e, t, n, r) {
  for (let o = n; o < r; o++) if (t[o] === e) return o;
  return -1;
}
function HD(e, t, n, r) {
  return gs(this.multi, []);
}
function $D(e, t, n, r) {
  let o = this.multi,
    i;
  if (this.providerFactory) {
    let s = this.providerFactory.componentProviders,
      a = wn(n, n[w], this.providerFactory.index, r);
    (i = a.slice(0, s)), gs(o, i);
    for (let u = s; u < a.length; u++) i.push(a[u]);
  } else (i = []), gs(o, i);
  return i;
}
function gs(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    t.push(r());
  }
  return t;
}
function UD(e, t, n, r, o) {
  let i = new yt(e, n, z);
  return (
    (i.multi = []),
    (i.index = t),
    (i.componentProviders = 0),
    lf(i, o, r && !n),
    i
  );
}
function s0(e, t = []) {
  return (n) => {
    n.providersResolver = (r, o) => BD(r, o ? o(e) : e, t);
  };
}
function a0(e, t, n, r) {
  return ff(I(), Bs(), e, t, n, r);
}
function df(e, t) {
  let n = e[t];
  return n === se ? void 0 : n;
}
function ff(e, t, n, r, o, i) {
  let s = t + n;
  return pe(e, s, o) ? Wd(e, s + 1, i ? r.call(i, o) : r(o)) : df(e, s + 1);
}
function zD(e, t, n, r, o, i, s) {
  let a = t + n;
  return to(e, a, o, i)
    ? Wd(e, a + 2, s ? r.call(s, o, i) : r(o, i))
    : df(e, a + 2);
}
function u0(e, t) {
  let n = P(),
    r,
    o = e + $;
  n.firstCreatePass
    ? ((r = GD(t, n.pipeRegistry)),
      (n.data[o] = r),
      r.onDestroy && (n.destroyHooks ??= []).push(o, r.onDestroy))
    : (r = n.data[o]);
  let i = r.factory || (r.factory = dt(r.type, !0)),
    s,
    a = re(z);
  try {
    let u = Br(!1),
      c = i();
    return Br(u), OD(n, I(), o, c), c;
  } finally {
    re(a);
  }
}
function GD(e, t) {
  if (t)
    for (let n = t.length - 1; n >= 0; n--) {
      let r = t[n];
      if (e === r.name) return r;
    }
}
function c0(e, t, n) {
  let r = e + $,
    o = I(),
    i = ks(o, r);
  return pf(o, r) ? ff(o, Bs(), t, i.transform, n, i) : i.transform(n);
}
function l0(e, t, n, r) {
  let o = e + $,
    i = I(),
    s = ks(i, o);
  return pf(i, o) ? zD(i, Bs(), t, s.transform, n, r, s) : s.transform(n, r);
}
function pf(e, t) {
  return e[w].data[t].pure;
}
function d0(e, t) {
  return To(e, t);
}
var io = class {
    full;
    major;
    minor;
    patch;
    constructor(t) {
      this.full = t;
      let n = t.split(".");
      (this.major = n[0]),
        (this.minor = n[1]),
        (this.patch = n.slice(2).join("."));
    }
  },
  f0 = new io("19.1.7"),
  ms = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) {
      (this.ngModuleFactory = t), (this.componentFactories = n);
    }
  },
  p0 = (() => {
    class e {
      compileModuleSync(n) {
        return new cs(n);
      }
      compileModuleAsync(n) {
        return Promise.resolve(this.compileModuleSync(n));
      }
      compileModuleAndAllComponentsSync(n) {
        let r = this.compileModuleSync(n),
          o = Uc(n),
          i = od(o.declarations).reduce((s, a) => {
            let u = ke(a);
            return u && s.push(new wt(u)), s;
          }, []);
        return new ms(r, i);
      }
      compileModuleAndAllComponentsAsync(n) {
        return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
      }
      clearCache() {}
      clearCacheFor(n) {}
      getModuleId(n) {}
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = A({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })();
var WD = (() => {
    class e {
      zone = E(ue);
      changeDetectionScheduler = E(vt);
      applicationRef = E(_n);
      _onMicrotaskEmptySubscription;
      initialize() {
        this._onMicrotaskEmptySubscription ||
          (this._onMicrotaskEmptySubscription =
            this.zone.onMicrotaskEmpty.subscribe({
              next: () => {
                this.changeDetectionScheduler.runningTick ||
                  this.zone.run(() => {
                    this.applicationRef.tick();
                  });
              },
            }));
      }
      ngOnDestroy() {
        this._onMicrotaskEmptySubscription?.unsubscribe();
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = A({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })(),
  qD = new S("", { factory: () => !1 });
function hf({
  ngZoneFactory: e,
  ignoreChangesOutsideZone: t,
  scheduleInRootZone: n,
}) {
  return (
    (e ??= () => new ue(ee(X({}, gf()), { scheduleInRootZone: n }))),
    [
      { provide: ue, useFactory: e },
      {
        provide: Rr,
        multi: !0,
        useFactory: () => {
          let r = E(WD, { optional: !0 });
          return () => r.initialize();
        },
      },
      {
        provide: Rr,
        multi: !0,
        useFactory: () => {
          let r = E(ZD);
          return () => {
            r.initialize();
          };
        },
      },
      t === !0 ? { provide: Ol, useValue: !0 } : [],
      { provide: Fl, useValue: n ?? Rl },
    ]
  );
}
function h0(e) {
  let t = e?.ignoreChangesOutsideZone,
    n = e?.scheduleInRootZone,
    r = hf({
      ngZoneFactory: () => {
        let o = gf(e);
        return (
          (o.scheduleInRootZone = n),
          o.shouldCoalesceEventChangeDetection && Fe("NgZone_CoalesceEvent"),
          new ue(o)
        );
      },
      ignoreChangesOutsideZone: t,
      scheduleInRootZone: n,
    });
  return lh([{ provide: qD, useValue: !0 }, { provide: Ws, useValue: !1 }, r]);
}
function gf(e) {
  return {
    enableLongStackTrace: !1,
    shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
    shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1,
  };
}
var ZD = (() => {
  class e {
    subscription = new j();
    initialized = !1;
    zone = E(ue);
    pendingTasks = E(On);
    initialize() {
      if (this.initialized) return;
      this.initialized = !0;
      let n = null;
      !this.zone.isStable &&
        !this.zone.hasPendingMacrotasks &&
        !this.zone.hasPendingMicrotasks &&
        (n = this.pendingTasks.add()),
        this.zone.runOutsideAngular(() => {
          this.subscription.add(
            this.zone.onStable.subscribe(() => {
              ue.assertNotInAngularZone(),
                queueMicrotask(() => {
                  n !== null &&
                    !this.zone.hasPendingMacrotasks &&
                    !this.zone.hasPendingMicrotasks &&
                    (this.pendingTasks.remove(n), (n = null));
                });
            }),
          );
        }),
        this.subscription.add(
          this.zone.onUnstable.subscribe(() => {
            ue.assertInAngularZone(), (n ??= this.pendingTasks.add());
          }),
        );
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
    static ɵfac = function (r) {
      return new (r || e)();
    };
    static ɵprov = A({ token: e, factory: e.ɵfac, providedIn: "root" });
  }
  return e;
})();
var QD = (() => {
  class e {
    appRef = E(_n);
    taskService = E(On);
    ngZone = E(ue);
    zonelessEnabled = E(Ws);
    tracing = E(Eo, { optional: !0 });
    disableScheduling = E(Ol, { optional: !0 }) ?? !1;
    zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
    schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
    subscriptions = new j();
    angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(Ur) : null;
    scheduleInRootZone =
      !this.zonelessEnabled &&
      this.zoneIsDefined &&
      (E(Fl, { optional: !0 }) ?? !1);
    cancelScheduledCallback = null;
    useMicrotaskScheduler = !1;
    runningTick = !1;
    pendingRenderTaskId = null;
    constructor() {
      this.subscriptions.add(
        this.appRef.afterTick.subscribe(() => {
          this.runningTick || this.cleanup();
        }),
      ),
        this.subscriptions.add(
          this.ngZone.onUnstable.subscribe(() => {
            this.runningTick || this.cleanup();
          }),
        ),
        (this.disableScheduling ||=
          !this.zonelessEnabled &&
          (this.ngZone instanceof Pi || !this.zoneIsDefined));
    }
    notify(n) {
      if (!this.zonelessEnabled && n === 5) return;
      let r = !1;
      switch (n) {
        case 0: {
          this.appRef.dirtyFlags |= 2;
          break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
          this.appRef.dirtyFlags |= 4;
          break;
        }
        case 8: {
          this.appRef.deferredDirtyFlags |= 8;
          break;
        }
        case 6: {
          (this.appRef.dirtyFlags |= 2), (r = !0);
          break;
        }
        case 13: {
          (this.appRef.dirtyFlags |= 16), (r = !0);
          break;
        }
        case 14: {
          (this.appRef.dirtyFlags |= 2), (r = !0);
          break;
        }
        case 12: {
          r = !0;
          break;
        }
        case 10:
        case 9:
        case 7:
        case 11:
        default:
          this.appRef.dirtyFlags |= 8;
      }
      if (
        ((this.appRef.tracingSnapshot =
          this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null),
        !this.shouldScheduleTick(r))
      )
        return;
      let o = this.useMicrotaskScheduler ? qu : kl;
      (this.pendingRenderTaskId = this.taskService.add()),
        this.scheduleInRootZone
          ? (this.cancelScheduledCallback = Zone.root.run(() =>
              o(() => this.tick()),
            ))
          : (this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() =>
              o(() => this.tick()),
            ));
    }
    shouldScheduleTick(n) {
      return !(
        (this.disableScheduling && !n) ||
        this.appRef.destroyed ||
        this.pendingRenderTaskId !== null ||
        this.runningTick ||
        this.appRef._runningTick ||
        (!this.zonelessEnabled &&
          this.zoneIsDefined &&
          Zone.current.get(Ur + this.angularZoneId))
      );
    }
    tick() {
      if (this.runningTick || this.appRef.destroyed) return;
      if (this.appRef.dirtyFlags === 0) {
        this.cleanup();
        return;
      }
      !this.zonelessEnabled &&
        this.appRef.dirtyFlags & 7 &&
        (this.appRef.dirtyFlags |= 1);
      let n = this.taskService.add();
      try {
        this.ngZone.run(
          () => {
            (this.runningTick = !0), this.appRef._tick();
          },
          void 0,
          this.schedulerTickApplyArgs,
        );
      } catch (r) {
        throw (this.taskService.remove(n), r);
      } finally {
        this.cleanup();
      }
      (this.useMicrotaskScheduler = !0),
        qu(() => {
          (this.useMicrotaskScheduler = !1), this.taskService.remove(n);
        });
    }
    ngOnDestroy() {
      this.subscriptions.unsubscribe(), this.cleanup();
    }
    cleanup() {
      if (
        ((this.runningTick = !1),
        this.cancelScheduledCallback?.(),
        (this.cancelScheduledCallback = null),
        this.pendingRenderTaskId !== null)
      ) {
        let n = this.pendingRenderTaskId;
        (this.pendingRenderTaskId = null), this.taskService.remove(n);
      }
    }
    static ɵfac = function (r) {
      return new (r || e)();
    };
    static ɵprov = A({ token: e, factory: e.ɵfac, providedIn: "root" });
  }
  return e;
})();
function YD() {
  return (typeof $localize < "u" && $localize.locale) || oo;
}
var So = new S("", {
  providedIn: "root",
  factory: () => E(So, M.Optional | M.SkipSelf) || YD(),
});
var ys = new S(""),
  KD = new S("");
function pn(e) {
  return !e.moduleRef;
}
function JD(e) {
  let t = pn(e) ? e.r3Injector : e.moduleRef.injector,
    n = t.get(ue);
  return n.run(() => {
    pn(e)
      ? e.r3Injector.resolveInjectorInitializers()
      : e.moduleRef.resolveInjectorInitializers();
    let r = t.get(Dt, null),
      o;
    if (
      (n.runOutsideAngular(() => {
        o = n.onError.subscribe({
          next: (i) => {
            r.handleError(i);
          },
        });
      }),
      pn(e))
    ) {
      let i = () => t.destroy(),
        s = e.platformInjector.get(ys);
      s.add(i),
        t.onDestroy(() => {
          o.unsubscribe(), s.delete(i);
        });
    } else {
      let i = () => e.moduleRef.destroy(),
        s = e.platformInjector.get(ys);
      s.add(i),
        e.moduleRef.onDestroy(() => {
          Tr(e.allPlatformModules, e.moduleRef), o.unsubscribe(), s.delete(i);
        });
    }
    return eE(r, n, () => {
      let i = t.get(Qd);
      return (
        i.runInitializers(),
        i.donePromise.then(() => {
          let s = t.get(So, oo);
          if ((TD(s || oo), !t.get(KD, !0)))
            return pn(e)
              ? t.get(_n)
              : (e.allPlatformModules.push(e.moduleRef), e.moduleRef);
          if (pn(e)) {
            let u = t.get(_n);
            return (
              e.rootComponent !== void 0 && u.bootstrap(e.rootComponent), u
            );
          } else return XD(e.moduleRef, e.allPlatformModules), e.moduleRef;
        })
      );
    });
  });
}
function XD(e, t) {
  let n = e.injector.get(_n);
  if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach((r) => n.bootstrap(r));
  else if (e.instance.ngDoBootstrap) e.instance.ngDoBootstrap(n);
  else throw new b(-403, !1);
  t.push(e);
}
function eE(e, t, n) {
  try {
    let r = n();
    return wa(r)
      ? r.catch((o) => {
          throw (t.runOutsideAngular(() => e.handleError(o)), o);
        })
      : r;
  } catch (r) {
    throw (t.runOutsideAngular(() => e.handleError(r)), r);
  }
}
var Sr = null;
function tE(e = [], t) {
  return Re.create({
    name: t,
    providers: [
      { provide: Zc, useValue: "platform" },
      { provide: ys, useValue: new Set([() => (Sr = null)]) },
      ...e,
    ],
  });
}
function nE(e = []) {
  if (Sr) return Sr;
  let t = tE(e);
  return (Sr = t), Vv(), rE(t), t;
}
function rE(e) {
  let t = e.get(xg, null);
  Yc(e, () => {
    t?.forEach((n) => n());
  });
}
var ba = (() => {
  class e {
    static __NG_ELEMENT_ID__ = oE;
  }
  return e;
})();
function oE(e) {
  return iE(Z(), I(), (e & 16) === 16);
}
function iE(e, t, n) {
  if (bt(e) && !n) {
    let r = Ae(e.index, t);
    return new Et(r, r);
  } else if (e.type & 175) {
    let r = t[fe];
    return new Et(r, t);
  }
  return null;
}
var vs = class {
    constructor() {}
    supports(t) {
      return Gd(t);
    }
    create(t) {
      return new Ds(t);
    }
  },
  sE = (e, t) => t,
  Ds = class {
    length = 0;
    collection;
    _linkedRecords = null;
    _unlinkedRecords = null;
    _previousItHead = null;
    _itHead = null;
    _itTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _movesHead = null;
    _movesTail = null;
    _removalsHead = null;
    _removalsTail = null;
    _identityChangesHead = null;
    _identityChangesTail = null;
    _trackByFn;
    constructor(t) {
      this._trackByFn = t || sE;
    }
    forEachItem(t) {
      let n;
      for (n = this._itHead; n !== null; n = n._next) t(n);
    }
    forEachOperation(t) {
      let n = this._itHead,
        r = this._removalsHead,
        o = 0,
        i = null;
      for (; n || r; ) {
        let s = !r || (n && n.currentIndex < Ic(r, o, i)) ? n : r,
          a = Ic(s, o, i),
          u = s.currentIndex;
        if (s === r) o--, (r = r._nextRemoved);
        else if (((n = n._next), s.previousIndex == null)) o++;
        else {
          i || (i = []);
          let c = a - o,
            l = u - o;
          if (c != l) {
            for (let p = 0; p < c; p++) {
              let f = p < i.length ? i[p] : (i[p] = 0),
                h = f + p;
              l <= h && h < c && (i[p] = f + 1);
            }
            let d = s.previousIndex;
            i[d] = l - c;
          }
        }
        a !== u && t(s, a, u);
      }
    }
    forEachPreviousItem(t) {
      let n;
      for (n = this._previousItHead; n !== null; n = n._nextPrevious) t(n);
    }
    forEachAddedItem(t) {
      let n;
      for (n = this._additionsHead; n !== null; n = n._nextAdded) t(n);
    }
    forEachMovedItem(t) {
      let n;
      for (n = this._movesHead; n !== null; n = n._nextMoved) t(n);
    }
    forEachRemovedItem(t) {
      let n;
      for (n = this._removalsHead; n !== null; n = n._nextRemoved) t(n);
    }
    forEachIdentityChange(t) {
      let n;
      for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
        t(n);
    }
    diff(t) {
      if ((t == null && (t = []), !Gd(t))) throw new b(900, !1);
      return this.check(t) ? this : null;
    }
    onDestroy() {}
    check(t) {
      this._reset();
      let n = this._itHead,
        r = !1,
        o,
        i,
        s;
      if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
          (i = t[a]),
            (s = this._trackByFn(a, i)),
            n === null || !Object.is(n.trackById, s)
              ? ((n = this._mismatch(n, i, s, a)), (r = !0))
              : (r && (n = this._verifyReinsertion(n, i, s, a)),
                Object.is(n.item, i) || this._addIdentityChange(n, i)),
            (n = n._next);
      } else
        (o = 0),
          Nv(t, (a) => {
            (s = this._trackByFn(o, a)),
              n === null || !Object.is(n.trackById, s)
                ? ((n = this._mismatch(n, a, s, o)), (r = !0))
                : (r && (n = this._verifyReinsertion(n, a, s, o)),
                  Object.is(n.item, a) || this._addIdentityChange(n, a)),
              (n = n._next),
              o++;
          }),
          (this.length = o);
      return this._truncate(n), (this.collection = t), this.isDirty;
    }
    get isDirty() {
      return (
        this._additionsHead !== null ||
        this._movesHead !== null ||
        this._removalsHead !== null ||
        this._identityChangesHead !== null
      );
    }
    _reset() {
      if (this.isDirty) {
        let t;
        for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
          t._nextPrevious = t._next;
        for (t = this._additionsHead; t !== null; t = t._nextAdded)
          t.previousIndex = t.currentIndex;
        for (
          this._additionsHead = this._additionsTail = null, t = this._movesHead;
          t !== null;
          t = t._nextMoved
        )
          t.previousIndex = t.currentIndex;
        (this._movesHead = this._movesTail = null),
          (this._removalsHead = this._removalsTail = null),
          (this._identityChangesHead = this._identityChangesTail = null);
      }
    }
    _mismatch(t, n, r, o) {
      let i;
      return (
        t === null ? (i = this._itTail) : ((i = t._prev), this._remove(t)),
        (t =
          this._unlinkedRecords === null
            ? null
            : this._unlinkedRecords.get(r, null)),
        t !== null
          ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
            this._reinsertAfter(t, i, o))
          : ((t =
              this._linkedRecords === null
                ? null
                : this._linkedRecords.get(r, o)),
            t !== null
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, i, o))
              : (t = this._addAfter(new Es(n, r), i, o))),
        t
      );
    }
    _verifyReinsertion(t, n, r, o) {
      let i =
        this._unlinkedRecords === null
          ? null
          : this._unlinkedRecords.get(r, null);
      return (
        i !== null
          ? (t = this._reinsertAfter(i, t._prev, o))
          : t.currentIndex != o &&
            ((t.currentIndex = o), this._addToMoves(t, o)),
        t
      );
    }
    _truncate(t) {
      for (; t !== null; ) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), (t = n);
      }
      this._unlinkedRecords !== null && this._unlinkedRecords.clear(),
        this._additionsTail !== null && (this._additionsTail._nextAdded = null),
        this._movesTail !== null && (this._movesTail._nextMoved = null),
        this._itTail !== null && (this._itTail._next = null),
        this._removalsTail !== null && (this._removalsTail._nextRemoved = null),
        this._identityChangesTail !== null &&
          (this._identityChangesTail._nextIdentityChange = null);
    }
    _reinsertAfter(t, n, r) {
      this._unlinkedRecords !== null && this._unlinkedRecords.remove(t);
      let o = t._prevRemoved,
        i = t._nextRemoved;
      return (
        o === null ? (this._removalsHead = i) : (o._nextRemoved = i),
        i === null ? (this._removalsTail = o) : (i._prevRemoved = o),
        this._insertAfter(t, n, r),
        this._addToMoves(t, r),
        t
      );
    }
    _moveAfter(t, n, r) {
      return (
        this._unlink(t), this._insertAfter(t, n, r), this._addToMoves(t, r), t
      );
    }
    _addAfter(t, n, r) {
      return (
        this._insertAfter(t, n, r),
        this._additionsTail === null
          ? (this._additionsTail = this._additionsHead = t)
          : (this._additionsTail = this._additionsTail._nextAdded = t),
        t
      );
    }
    _insertAfter(t, n, r) {
      let o = n === null ? this._itHead : n._next;
      return (
        (t._next = o),
        (t._prev = n),
        o === null ? (this._itTail = t) : (o._prev = t),
        n === null ? (this._itHead = t) : (n._next = t),
        this._linkedRecords === null && (this._linkedRecords = new so()),
        this._linkedRecords.put(t),
        (t.currentIndex = r),
        t
      );
    }
    _remove(t) {
      return this._addToRemovals(this._unlink(t));
    }
    _unlink(t) {
      this._linkedRecords !== null && this._linkedRecords.remove(t);
      let n = t._prev,
        r = t._next;
      return (
        n === null ? (this._itHead = r) : (n._next = r),
        r === null ? (this._itTail = n) : (r._prev = n),
        t
      );
    }
    _addToMoves(t, n) {
      return (
        t.previousIndex === n ||
          (this._movesTail === null
            ? (this._movesTail = this._movesHead = t)
            : (this._movesTail = this._movesTail._nextMoved = t)),
        t
      );
    }
    _addToRemovals(t) {
      return (
        this._unlinkedRecords === null && (this._unlinkedRecords = new so()),
        this._unlinkedRecords.put(t),
        (t.currentIndex = null),
        (t._nextRemoved = null),
        this._removalsTail === null
          ? ((this._removalsTail = this._removalsHead = t),
            (t._prevRemoved = null))
          : ((t._prevRemoved = this._removalsTail),
            (this._removalsTail = this._removalsTail._nextRemoved = t)),
        t
      );
    }
    _addIdentityChange(t, n) {
      return (
        (t.item = n),
        this._identityChangesTail === null
          ? (this._identityChangesTail = this._identityChangesHead = t)
          : (this._identityChangesTail =
              this._identityChangesTail._nextIdentityChange =
                t),
        t
      );
    }
  },
  Es = class {
    item;
    trackById;
    currentIndex = null;
    previousIndex = null;
    _nextPrevious = null;
    _prev = null;
    _next = null;
    _prevDup = null;
    _nextDup = null;
    _prevRemoved = null;
    _nextRemoved = null;
    _nextAdded = null;
    _nextMoved = null;
    _nextIdentityChange = null;
    constructor(t, n) {
      (this.item = t), (this.trackById = n);
    }
  },
  Is = class {
    _head = null;
    _tail = null;
    add(t) {
      this._head === null
        ? ((this._head = this._tail = t),
          (t._nextDup = null),
          (t._prevDup = null))
        : ((this._tail._nextDup = t),
          (t._prevDup = this._tail),
          (t._nextDup = null),
          (this._tail = t));
    }
    get(t, n) {
      let r;
      for (r = this._head; r !== null; r = r._nextDup)
        if ((n === null || n <= r.currentIndex) && Object.is(r.trackById, t))
          return r;
      return null;
    }
    remove(t) {
      let n = t._prevDup,
        r = t._nextDup;
      return (
        n === null ? (this._head = r) : (n._nextDup = r),
        r === null ? (this._tail = n) : (r._prevDup = n),
        this._head === null
      );
    }
  },
  so = class {
    map = new Map();
    put(t) {
      let n = t.trackById,
        r = this.map.get(n);
      r || ((r = new Is()), this.map.set(n, r)), r.add(t);
    }
    get(t, n) {
      let r = t,
        o = this.map.get(r);
      return o ? o.get(t, n) : null;
    }
    remove(t) {
      let n = t.trackById;
      return this.map.get(n).remove(t) && this.map.delete(n), t;
    }
    get isEmpty() {
      return this.map.size === 0;
    }
    clear() {
      this.map.clear();
    }
  };
function Ic(e, t, n) {
  let r = e.previousIndex;
  if (r === null) return r;
  let o = 0;
  return n && r < n.length && (o = n[r]), r + t + o;
}
var ws = class {
    constructor() {}
    supports(t) {
      return t instanceof Map || Ia(t);
    }
    create() {
      return new Cs();
    }
  },
  Cs = class {
    _records = new Map();
    _mapHead = null;
    _appendAfter = null;
    _previousMapHead = null;
    _changesHead = null;
    _changesTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _removalsHead = null;
    _removalsTail = null;
    get isDirty() {
      return (
        this._additionsHead !== null ||
        this._changesHead !== null ||
        this._removalsHead !== null
      );
    }
    forEachItem(t) {
      let n;
      for (n = this._mapHead; n !== null; n = n._next) t(n);
    }
    forEachPreviousItem(t) {
      let n;
      for (n = this._previousMapHead; n !== null; n = n._nextPrevious) t(n);
    }
    forEachChangedItem(t) {
      let n;
      for (n = this._changesHead; n !== null; n = n._nextChanged) t(n);
    }
    forEachAddedItem(t) {
      let n;
      for (n = this._additionsHead; n !== null; n = n._nextAdded) t(n);
    }
    forEachRemovedItem(t) {
      let n;
      for (n = this._removalsHead; n !== null; n = n._nextRemoved) t(n);
    }
    diff(t) {
      if (!t) t = new Map();
      else if (!(t instanceof Map || Ia(t))) throw new b(900, !1);
      return this.check(t) ? this : null;
    }
    onDestroy() {}
    check(t) {
      this._reset();
      let n = this._mapHead;
      if (
        ((this._appendAfter = null),
        this._forEach(t, (r, o) => {
          if (n && n.key === o)
            this._maybeAddToChanges(n, r),
              (this._appendAfter = n),
              (n = n._next);
          else {
            let i = this._getOrCreateRecordForKey(o, r);
            n = this._insertBeforeOrAppend(n, i);
          }
        }),
        n)
      ) {
        n._prev && (n._prev._next = null), (this._removalsHead = n);
        for (let r = n; r !== null; r = r._nextRemoved)
          r === this._mapHead && (this._mapHead = null),
            this._records.delete(r.key),
            (r._nextRemoved = r._next),
            (r.previousValue = r.currentValue),
            (r.currentValue = null),
            (r._prev = null),
            (r._next = null);
      }
      return (
        this._changesTail && (this._changesTail._nextChanged = null),
        this._additionsTail && (this._additionsTail._nextAdded = null),
        this.isDirty
      );
    }
    _insertBeforeOrAppend(t, n) {
      if (t) {
        let r = t._prev;
        return (
          (n._next = t),
          (n._prev = r),
          (t._prev = n),
          r && (r._next = n),
          t === this._mapHead && (this._mapHead = n),
          (this._appendAfter = t),
          t
        );
      }
      return (
        this._appendAfter
          ? ((this._appendAfter._next = n), (n._prev = this._appendAfter))
          : (this._mapHead = n),
        (this._appendAfter = n),
        null
      );
    }
    _getOrCreateRecordForKey(t, n) {
      if (this._records.has(t)) {
        let o = this._records.get(t);
        this._maybeAddToChanges(o, n);
        let i = o._prev,
          s = o._next;
        return (
          i && (i._next = s),
          s && (s._prev = i),
          (o._next = null),
          (o._prev = null),
          o
        );
      }
      let r = new bs(t);
      return (
        this._records.set(t, r),
        (r.currentValue = n),
        this._addToAdditions(r),
        r
      );
    }
    _reset() {
      if (this.isDirty) {
        let t;
        for (
          this._previousMapHead = this._mapHead, t = this._previousMapHead;
          t !== null;
          t = t._next
        )
          t._nextPrevious = t._next;
        for (t = this._changesHead; t !== null; t = t._nextChanged)
          t.previousValue = t.currentValue;
        for (t = this._additionsHead; t != null; t = t._nextAdded)
          t.previousValue = t.currentValue;
        (this._changesHead = this._changesTail = null),
          (this._additionsHead = this._additionsTail = null),
          (this._removalsHead = null);
      }
    }
    _maybeAddToChanges(t, n) {
      Object.is(n, t.currentValue) ||
        ((t.previousValue = t.currentValue),
        (t.currentValue = n),
        this._addToChanges(t));
    }
    _addToAdditions(t) {
      this._additionsHead === null
        ? (this._additionsHead = this._additionsTail = t)
        : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
    }
    _addToChanges(t) {
      this._changesHead === null
        ? (this._changesHead = this._changesTail = t)
        : ((this._changesTail._nextChanged = t), (this._changesTail = t));
    }
    _forEach(t, n) {
      t instanceof Map
        ? t.forEach(n)
        : Object.keys(t).forEach((r) => n(t[r], r));
    }
  },
  bs = class {
    key;
    previousValue = null;
    currentValue = null;
    _nextPrevious = null;
    _next = null;
    _prev = null;
    _nextAdded = null;
    _nextRemoved = null;
    _nextChanged = null;
    constructor(t) {
      this.key = t;
    }
  };
function wc() {
  return new _a([new vs()]);
}
var _a = (() => {
  class e {
    factories;
    static ɵprov = A({ token: e, providedIn: "root", factory: wc });
    constructor(n) {
      this.factories = n;
    }
    static create(n, r) {
      if (r != null) {
        let o = r.factories.slice();
        n = n.concat(o);
      }
      return new e(n);
    }
    static extend(n) {
      return {
        provide: e,
        useFactory: (r) => e.create(n, r || wc()),
        deps: [[e, new jc(), new Vc()]],
      };
    }
    find(n) {
      let r = this.factories.find((o) => o.supports(n));
      if (r != null) return r;
      throw new b(901, !1);
    }
  }
  return e;
})();
function Cc() {
  return new Ma([new ws()]);
}
var Ma = (() => {
  class e {
    static ɵprov = A({ token: e, providedIn: "root", factory: Cc });
    factories;
    constructor(n) {
      this.factories = n;
    }
    static create(n, r) {
      if (r) {
        let o = r.factories.slice();
        n = n.concat(o);
      }
      return new e(n);
    }
    static extend(n) {
      return {
        provide: e,
        useFactory: (r) => e.create(n, r || Cc()),
        deps: [[e, new jc(), new Vc()]],
      };
    }
    find(n) {
      let r = this.factories.find((o) => o.supports(n));
      if (r) return r;
      throw new b(901, !1);
    }
  }
  return e;
})();
function g0(e) {
  try {
    let { rootComponent: t, appProviders: n, platformProviders: r } = e,
      o = nE(r),
      i = [hf({}), { provide: vt, useExisting: QD }, ...(n || [])],
      s = new eo({
        providers: i,
        parent: o,
        debugName: "",
        runEnvironmentInitializers: !1,
      });
    return JD({
      r3Injector: s.injector,
      platformInjector: o,
      rootComponent: t,
    });
  } catch (t) {
    return Promise.reject(t);
  }
}
function aE(e) {
  return typeof e == "boolean" ? e : e != null && e !== "false";
}
function m0(e, t) {
  Fe("NgSignals");
  let n = zo(e);
  return t?.equal && (n[G].equal = t.equal), n;
}
function uE(e) {
  let t = _(null);
  try {
    return e();
  } finally {
    _(t);
  }
}
var mf = (() => {
  class e {
    view;
    node;
    constructor(n, r) {
      (this.view = n), (this.node = r);
    }
    static __NG_ELEMENT_ID__ = cE;
  }
  return e;
})();
function cE() {
  return new mf(I(), Z());
}
var lE = !1,
  dE = (() => {
    class e extends no {
      pendingTasks = E(On);
      taskId = null;
      schedule(n) {
        super.schedule(n),
          this.taskId === null &&
            ((this.taskId = this.pendingTasks.add()),
            queueMicrotask(() => this.flush()));
      }
      flush() {
        try {
          super.flush();
        } finally {
          this.taskId !== null &&
            (this.pendingTasks.remove(this.taskId), (this.taskId = null));
        }
      }
      static ɵprov = A({
        token: e,
        providedIn: "root",
        factory: () => new e(),
      });
    }
    return e;
  })(),
  _s = class {
    scheduler;
    effectFn;
    zone;
    injector;
    unregisterOnDestroy;
    watcher;
    constructor(t, n, r, o, i, s) {
      (this.scheduler = t),
        (this.effectFn = n),
        (this.zone = r),
        (this.injector = i),
        (this.watcher = su(
          (a) => this.runEffect(a),
          () => this.schedule(),
          s,
        )),
        (this.unregisterOnDestroy = o?.onDestroy(() => this.destroy()));
    }
    runEffect(t) {
      try {
        this.effectFn(t);
      } catch (n) {
        this.injector.get(Dt, null, { optional: !0 })?.handleError(n);
      }
    }
    run() {
      this.watcher.run();
    }
    schedule() {
      this.scheduler.schedule(this);
    }
    destroy() {
      this.watcher.destroy(), this.unregisterOnDestroy?.();
    }
  };
function fE() {}
function pE(e, t) {
  Fe("NgSignals"), !t?.injector && lo(fE);
  let n = t?.injector ?? E(Re),
    r = t?.manualCleanup !== !0 ? n.get(Rn) : null,
    o = new _s(
      n.get(dE),
      e,
      typeof Zone > "u" ? null : Zone.current,
      r,
      n,
      t?.allowSignalWrites ?? !1,
    ),
    i = n.get(ba, null, { optional: !0 });
  return (
    !i || !(i._lView[m] & 8)
      ? o.watcher.notify()
      : (i._lView[Cr] ??= []).push(o.watcher.notify),
    o
  );
}
var hE = lE;
var Ms = class {
  [G];
  constructor(t) {
    this[G] = t;
  }
  destroy() {
    this[G].destroy();
  }
};
function gE(e, t) {
  if (hE) return pE(e, t);
  Fe("NgSignals"), !t?.injector && lo(gE);
  let n = t?.injector ?? E(Re),
    r = t?.manualCleanup !== !0 ? n.get(Rn) : null,
    o,
    i = n.get(mf, null, { optional: !0 }),
    s = n.get(vt);
  return (
    i !== null && !t?.forceRoot
      ? ((o = vE(i.view, s, e)),
        r instanceof $r && r._lView === i.view && (r = null))
      : (o = DE(e, n.get(Yd), s)),
    (o.injector = n),
    r !== null && (o.onDestroyFn = r.onDestroy(() => o.destroy())),
    new Ms(o)
  );
}
var yf = ee(X({}, Xe), {
    consumerIsAlwaysLive: !0,
    consumerAllowSignalWrites: !0,
    dirty: !0,
    hasRun: !1,
    cleanupFns: void 0,
    zone: null,
    kind: "effect",
    onDestroyFn: Cn,
    run() {
      if (((this.dirty = !1), this.hasRun && !on(this))) return;
      this.hasRun = !0;
      let e = (r) => (this.cleanupFns ??= []).push(r),
        t = Ot(this),
        n = Lr(!1);
      try {
        this.maybeCleanup(), this.fn(e);
      } finally {
        Lr(n), rn(this, t);
      }
    },
    maybeCleanup() {
      if (this.cleanupFns?.length)
        try {
          for (; this.cleanupFns.length; ) this.cleanupFns.pop()();
        } finally {
          this.cleanupFns = [];
        }
    },
  }),
  mE = ee(X({}, yf), {
    consumerMarkedDirty() {
      this.scheduler.schedule(this), this.notifier.notify(13);
    },
    destroy() {
      Ft(this),
        this.onDestroyFn(),
        this.maybeCleanup(),
        this.scheduler.remove(this);
    },
  }),
  yE = ee(X({}, yf), {
    consumerMarkedDirty() {
      (this.view[m] |= 8192), xn(this.view), this.notifier.notify(14);
    },
    destroy() {
      Ft(this),
        this.onDestroyFn(),
        this.maybeCleanup(),
        this.view[pt]?.delete(this);
    },
  });
function vE(e, t, n) {
  let r = Object.create(yE);
  return (
    (r.view = e),
    (r.zone = typeof Zone < "u" ? Zone.current : null),
    (r.notifier = t),
    (r.fn = n),
    (e[pt] ??= new Set()),
    e[pt].add(r),
    r.consumerMarkedDirty(r),
    r
  );
}
function DE(e, t, n) {
  let r = Object.create(mE);
  return (
    (r.fn = e),
    (r.scheduler = t),
    (r.notifier = n),
    (r.zone = typeof Zone < "u" ? Zone.current : null),
    r.scheduler.schedule(r),
    r.notifier.notify(13),
    r
  );
}
function y0(e, t) {
  let n = ke(e),
    r = t.elementInjector || co();
  return new wt(n).create(
    r,
    t.projectableNodes,
    t.hostElement,
    t.environmentInjector,
  );
}
function v0(e) {
  let t = ke(e);
  if (!t) return null;
  let n = new wt(t);
  return {
    get selector() {
      return n.selector;
    },
    get type() {
      return n.componentType;
    },
    get inputs() {
      return n.inputs;
    },
    get outputs() {
      return n.outputs;
    },
    get ngContentSelectors() {
      return n.ngContentSelectors;
    },
    get isStandalone() {
      return t.standalone;
    },
    get isSignal() {
      return t.signals;
    },
  };
}
var Tf = null;
function Ta() {
  return Tf;
}
function $0(e) {
  Tf ??= e;
}
var vf = class {};
var ka = new S(""),
  Pa = (() => {
    class e {
      historyGo(n) {
        throw new Error("");
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = A({
        token: e,
        factory: () => E(IE),
        providedIn: "platform",
      });
    }
    return e;
  })(),
  U0 = new S(""),
  IE = (() => {
    class e extends Pa {
      _location;
      _history;
      _doc = E(ka);
      constructor() {
        super(),
          (this._location = window.location),
          (this._history = window.history);
      }
      getBaseHrefFromDOM() {
        return Ta().getBaseHref(this._doc);
      }
      onPopState(n) {
        let r = Ta().getGlobalEventTarget(this._doc, "window");
        return (
          r.addEventListener("popstate", n, !1),
          () => r.removeEventListener("popstate", n)
        );
      }
      onHashChange(n) {
        let r = Ta().getGlobalEventTarget(this._doc, "window");
        return (
          r.addEventListener("hashchange", n, !1),
          () => r.removeEventListener("hashchange", n)
        );
      }
      get href() {
        return this._location.href;
      }
      get protocol() {
        return this._location.protocol;
      }
      get hostname() {
        return this._location.hostname;
      }
      get port() {
        return this._location.port;
      }
      get pathname() {
        return this._location.pathname;
      }
      get search() {
        return this._location.search;
      }
      get hash() {
        return this._location.hash;
      }
      set pathname(n) {
        this._location.pathname = n;
      }
      pushState(n, r, o) {
        this._history.pushState(n, r, o);
      }
      replaceState(n, r, o) {
        this._history.replaceState(n, r, o);
      }
      forward() {
        this._history.forward();
      }
      back() {
        this._history.back();
      }
      historyGo(n = 0) {
        this._history.go(n);
      }
      getState() {
        return this._history.state;
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = A({
        token: e,
        factory: () => new e(),
        providedIn: "platform",
      });
    }
    return e;
  })();
function La(e, t) {
  return e
    ? t
      ? e.endsWith("/")
        ? t.startsWith("/")
          ? e + t.slice(1)
          : e + t
        : t.startsWith("/")
          ? e + t
          : `${e}/${t}`
      : e
    : t;
}
function Df(e) {
  let t = e.search(/#|\?|$/);
  return e[t - 1] === "/" ? e.slice(0, t - 1) + e.slice(t) : e;
}
function Ue(e) {
  return e && e[0] !== "?" ? `?${e}` : e;
}
var Vo = (() => {
    class e {
      historyGo(n) {
        throw new Error("");
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = A({ token: e, factory: () => E(wE), providedIn: "root" });
    }
    return e;
  })(),
  Sf = new S(""),
  wE = (() => {
    class e extends Vo {
      _platformLocation;
      _baseHref;
      _removeListenerFns = [];
      constructor(n, r) {
        super(),
          (this._platformLocation = n),
          (this._baseHref =
            r ??
            this._platformLocation.getBaseHrefFromDOM() ??
            E(ka).location?.origin ??
            "");
      }
      ngOnDestroy() {
        for (; this._removeListenerFns.length; )
          this._removeListenerFns.pop()();
      }
      onPopState(n) {
        this._removeListenerFns.push(
          this._platformLocation.onPopState(n),
          this._platformLocation.onHashChange(n),
        );
      }
      getBaseHref() {
        return this._baseHref;
      }
      prepareExternalUrl(n) {
        return La(this._baseHref, n);
      }
      path(n = !1) {
        let r =
            this._platformLocation.pathname + Ue(this._platformLocation.search),
          o = this._platformLocation.hash;
        return o && n ? `${r}${o}` : r;
      }
      pushState(n, r, o, i) {
        let s = this.prepareExternalUrl(o + Ue(i));
        this._platformLocation.pushState(n, r, s);
      }
      replaceState(n, r, o, i) {
        let s = this.prepareExternalUrl(o + Ue(i));
        this._platformLocation.replaceState(n, r, s);
      }
      forward() {
        this._platformLocation.forward();
      }
      back() {
        this._platformLocation.back();
      }
      getState() {
        return this._platformLocation.getState();
      }
      historyGo(n = 0) {
        this._platformLocation.historyGo?.(n);
      }
      static ɵfac = function (r) {
        return new (r || e)(W(Pa), W(Sf, 8));
      };
      static ɵprov = A({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })(),
  z0 = (() => {
    class e extends Vo {
      _platformLocation;
      _baseHref = "";
      _removeListenerFns = [];
      constructor(n, r) {
        super(),
          (this._platformLocation = n),
          r != null && (this._baseHref = r);
      }
      ngOnDestroy() {
        for (; this._removeListenerFns.length; )
          this._removeListenerFns.pop()();
      }
      onPopState(n) {
        this._removeListenerFns.push(
          this._platformLocation.onPopState(n),
          this._platformLocation.onHashChange(n),
        );
      }
      getBaseHref() {
        return this._baseHref;
      }
      path(n = !1) {
        let r = this._platformLocation.hash ?? "#";
        return r.length > 0 ? r.substring(1) : r;
      }
      prepareExternalUrl(n) {
        let r = La(this._baseHref, n);
        return r.length > 0 ? "#" + r : r;
      }
      pushState(n, r, o, i) {
        let s =
          this.prepareExternalUrl(o + Ue(i)) || this._platformLocation.pathname;
        this._platformLocation.pushState(n, r, s);
      }
      replaceState(n, r, o, i) {
        let s =
          this.prepareExternalUrl(o + Ue(i)) || this._platformLocation.pathname;
        this._platformLocation.replaceState(n, r, s);
      }
      forward() {
        this._platformLocation.forward();
      }
      back() {
        this._platformLocation.back();
      }
      getState() {
        return this._platformLocation.getState();
      }
      historyGo(n = 0) {
        this._platformLocation.historyGo?.(n);
      }
      static ɵfac = function (r) {
        return new (r || e)(W(Pa), W(Sf, 8));
      };
      static ɵprov = A({ token: e, factory: e.ɵfac });
    }
    return e;
  })(),
  CE = (() => {
    class e {
      _subject = new te();
      _basePath;
      _locationStrategy;
      _urlChangeListeners = [];
      _urlChangeSubscription = null;
      constructor(n) {
        this._locationStrategy = n;
        let r = this._locationStrategy.getBaseHref();
        (this._basePath = ME(Df(Ef(r)))),
          this._locationStrategy.onPopState((o) => {
            this._subject.next({
              url: this.path(!0),
              pop: !0,
              state: o.state,
              type: o.type,
            });
          });
      }
      ngOnDestroy() {
        this._urlChangeSubscription?.unsubscribe(),
          (this._urlChangeListeners = []);
      }
      path(n = !1) {
        return this.normalize(this._locationStrategy.path(n));
      }
      getState() {
        return this._locationStrategy.getState();
      }
      isCurrentPathEqualTo(n, r = "") {
        return this.path() == this.normalize(n + Ue(r));
      }
      normalize(n) {
        return e.stripTrailingSlash(_E(this._basePath, Ef(n)));
      }
      prepareExternalUrl(n) {
        return (
          n && n[0] !== "/" && (n = "/" + n),
          this._locationStrategy.prepareExternalUrl(n)
        );
      }
      go(n, r = "", o = null) {
        this._locationStrategy.pushState(o, "", n, r),
          this._notifyUrlChangeListeners(this.prepareExternalUrl(n + Ue(r)), o);
      }
      replaceState(n, r = "", o = null) {
        this._locationStrategy.replaceState(o, "", n, r),
          this._notifyUrlChangeListeners(this.prepareExternalUrl(n + Ue(r)), o);
      }
      forward() {
        this._locationStrategy.forward();
      }
      back() {
        this._locationStrategy.back();
      }
      historyGo(n = 0) {
        this._locationStrategy.historyGo?.(n);
      }
      onUrlChange(n) {
        return (
          this._urlChangeListeners.push(n),
          (this._urlChangeSubscription ??= this.subscribe((r) => {
            this._notifyUrlChangeListeners(r.url, r.state);
          })),
          () => {
            let r = this._urlChangeListeners.indexOf(n);
            this._urlChangeListeners.splice(r, 1),
              this._urlChangeListeners.length === 0 &&
                (this._urlChangeSubscription?.unsubscribe(),
                (this._urlChangeSubscription = null));
          }
        );
      }
      _notifyUrlChangeListeners(n = "", r) {
        this._urlChangeListeners.forEach((o) => o(n, r));
      }
      subscribe(n, r, o) {
        return this._subject.subscribe({
          next: n,
          error: r ?? void 0,
          complete: o ?? void 0,
        });
      }
      static normalizeQueryParams = Ue;
      static joinWithSlash = La;
      static stripTrailingSlash = Df;
      static ɵfac = function (r) {
        return new (r || e)(W(Vo));
      };
      static ɵprov = A({ token: e, factory: () => bE(), providedIn: "root" });
    }
    return e;
  })();
function bE() {
  return new CE(W(Vo));
}
function _E(e, t) {
  if (!e || !t.startsWith(e)) return t;
  let n = t.substring(e.length);
  return n === "" || ["/", ";", "?", "#"].includes(n[0]) ? n : t;
}
function Ef(e) {
  return e.replace(/\/index.html$/, "");
}
function ME(e) {
  if (new RegExp("^(https?:)?//").test(e)) {
    let [, n] = e.split(/\/\/[^\/]+/);
    return n;
  }
  return e;
}
var J = (function (e) {
    return (
      (e[(e.Format = 0)] = "Format"), (e[(e.Standalone = 1)] = "Standalone"), e
    );
  })(J || {}),
  R = (function (e) {
    return (
      (e[(e.Narrow = 0)] = "Narrow"),
      (e[(e.Abbreviated = 1)] = "Abbreviated"),
      (e[(e.Wide = 2)] = "Wide"),
      (e[(e.Short = 3)] = "Short"),
      e
    );
  })(R || {}),
  le = (function (e) {
    return (
      (e[(e.Short = 0)] = "Short"),
      (e[(e.Medium = 1)] = "Medium"),
      (e[(e.Long = 2)] = "Long"),
      (e[(e.Full = 3)] = "Full"),
      e
    );
  })(le || {}),
  Je = {
    Decimal: 0,
    Group: 1,
    List: 2,
    PercentSign: 3,
    PlusSign: 4,
    MinusSign: 5,
    Exponential: 6,
    SuperscriptingExponent: 7,
    PerMille: 8,
    Infinity: 9,
    NaN: 10,
    TimeSeparator: 11,
    CurrencyDecimal: 12,
    CurrencyGroup: 13,
  };
function TE(e) {
  return he(e)[V.LocaleId];
}
function SE(e, t, n) {
  let r = he(e),
    o = [r[V.DayPeriodsFormat], r[V.DayPeriodsStandalone]],
    i = ge(o, t);
  return ge(i, n);
}
function NE(e, t, n) {
  let r = he(e),
    o = [r[V.DaysFormat], r[V.DaysStandalone]],
    i = ge(o, t);
  return ge(i, n);
}
function xE(e, t, n) {
  let r = he(e),
    o = [r[V.MonthsFormat], r[V.MonthsStandalone]],
    i = ge(o, t);
  return ge(i, n);
}
function AE(e, t) {
  let r = he(e)[V.Eras];
  return ge(r, t);
}
function No(e, t) {
  let n = he(e);
  return ge(n[V.DateFormat], t);
}
function xo(e, t) {
  let n = he(e);
  return ge(n[V.TimeFormat], t);
}
function Ao(e, t) {
  let r = he(e)[V.DateTimeFormat];
  return ge(r, t);
}
function jo(e, t) {
  let n = he(e),
    r = n[V.NumberSymbols][t];
  if (typeof r > "u") {
    if (t === Je.CurrencyDecimal) return n[V.NumberSymbols][Je.Decimal];
    if (t === Je.CurrencyGroup) return n[V.NumberSymbols][Je.Group];
  }
  return r;
}
function Nf(e) {
  if (!e[V.ExtraData])
    throw new Error(
      `Missing extra locale data for the locale "${e[V.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`,
    );
}
function RE(e) {
  let t = he(e);
  return (
    Nf(t),
    (t[V.ExtraData][2] || []).map((r) =>
      typeof r == "string" ? Sa(r) : [Sa(r[0]), Sa(r[1])],
    )
  );
}
function OE(e, t, n) {
  let r = he(e);
  Nf(r);
  let o = [r[V.ExtraData][0], r[V.ExtraData][1]],
    i = ge(o, t) || [];
  return ge(i, n) || [];
}
function ge(e, t) {
  for (let n = t; n > -1; n--) if (typeof e[n] < "u") return e[n];
  throw new Error("Locale data API: locale data undefined");
}
function Sa(e) {
  let [t, n] = e.split(":");
  return { hours: +t, minutes: +n };
}
var FE =
    /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
  Ro = {},
  kE =
    /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
function PE(e, t, n, r) {
  let o = GE(e);
  t = $e(n, t) || t;
  let s = [],
    a;
  for (; t; )
    if (((a = kE.exec(t)), a)) {
      s = s.concat(a.slice(1));
      let l = s.pop();
      if (!l) break;
      t = l;
    } else {
      s.push(t);
      break;
    }
  let u = o.getTimezoneOffset();
  r && ((u = Af(r, u)), (o = zE(o, r, !0)));
  let c = "";
  return (
    s.forEach((l) => {
      let d = $E(l);
      c += d
        ? d(o, n, u)
        : l === "''"
          ? "'"
          : l.replace(/(^'|'$)/g, "").replace(/''/g, "'");
    }),
    c
  );
}
function Lo(e, t, n) {
  let r = new Date(0);
  return r.setFullYear(e, t, n), r.setHours(0, 0, 0), r;
}
function $e(e, t) {
  let n = TE(e);
  if (((Ro[n] ??= {}), Ro[n][t])) return Ro[n][t];
  let r = "";
  switch (t) {
    case "shortDate":
      r = No(e, le.Short);
      break;
    case "mediumDate":
      r = No(e, le.Medium);
      break;
    case "longDate":
      r = No(e, le.Long);
      break;
    case "fullDate":
      r = No(e, le.Full);
      break;
    case "shortTime":
      r = xo(e, le.Short);
      break;
    case "mediumTime":
      r = xo(e, le.Medium);
      break;
    case "longTime":
      r = xo(e, le.Long);
      break;
    case "fullTime":
      r = xo(e, le.Full);
      break;
    case "short":
      let o = $e(e, "shortTime"),
        i = $e(e, "shortDate");
      r = Oo(Ao(e, le.Short), [o, i]);
      break;
    case "medium":
      let s = $e(e, "mediumTime"),
        a = $e(e, "mediumDate");
      r = Oo(Ao(e, le.Medium), [s, a]);
      break;
    case "long":
      let u = $e(e, "longTime"),
        c = $e(e, "longDate");
      r = Oo(Ao(e, le.Long), [u, c]);
      break;
    case "full":
      let l = $e(e, "fullTime"),
        d = $e(e, "fullDate");
      r = Oo(Ao(e, le.Full), [l, d]);
      break;
  }
  return r && (Ro[n][t] = r), r;
}
function Oo(e, t) {
  return (
    t &&
      (e = e.replace(/\{([^}]+)}/g, function (n, r) {
        return t != null && r in t ? t[r] : n;
      })),
    e
  );
}
function be(e, t, n = "-", r, o) {
  let i = "";
  (e < 0 || (o && e <= 0)) && (o ? (e = -e + 1) : ((e = -e), (i = n)));
  let s = String(e);
  for (; s.length < t; ) s = "0" + s;
  return r && (s = s.slice(s.length - t)), i + s;
}
function LE(e, t) {
  return be(e, 3).substring(0, t);
}
function B(e, t, n = 0, r = !1, o = !1) {
  return function (i, s) {
    let a = VE(e, i);
    if (((n > 0 || a > -n) && (a += n), e === 3))
      a === 0 && n === -12 && (a = 12);
    else if (e === 6) return LE(a, t);
    let u = jo(s, Je.MinusSign);
    return be(a, t, u, r, o);
  };
}
function VE(e, t) {
  switch (e) {
    case 0:
      return t.getFullYear();
    case 1:
      return t.getMonth();
    case 2:
      return t.getDate();
    case 3:
      return t.getHours();
    case 4:
      return t.getMinutes();
    case 5:
      return t.getSeconds();
    case 6:
      return t.getMilliseconds();
    case 7:
      return t.getDay();
    default:
      throw new Error(`Unknown DateType value "${e}".`);
  }
}
function F(e, t, n = J.Format, r = !1) {
  return function (o, i) {
    return jE(o, i, e, t, n, r);
  };
}
function jE(e, t, n, r, o, i) {
  switch (n) {
    case 2:
      return xE(t, o, r)[e.getMonth()];
    case 1:
      return NE(t, o, r)[e.getDay()];
    case 0:
      let s = e.getHours(),
        a = e.getMinutes();
      if (i) {
        let c = RE(t),
          l = OE(t, o, r),
          d = c.findIndex((p) => {
            if (Array.isArray(p)) {
              let [f, h] = p,
                g = s >= f.hours && a >= f.minutes,
                L = s < h.hours || (s === h.hours && a < h.minutes);
              if (f.hours < h.hours) {
                if (g && L) return !0;
              } else if (g || L) return !0;
            } else if (p.hours === s && p.minutes === a) return !0;
            return !1;
          });
        if (d !== -1) return l[d];
      }
      return SE(t, o, r)[s < 12 ? 0 : 1];
    case 3:
      return AE(t, r)[e.getFullYear() <= 0 ? 0 : 1];
    default:
      let u = n;
      throw new Error(`unexpected translation type ${u}`);
  }
}
function Fo(e) {
  return function (t, n, r) {
    let o = -1 * r,
      i = jo(n, Je.MinusSign),
      s = o > 0 ? Math.floor(o / 60) : Math.ceil(o / 60);
    switch (e) {
      case 0:
        return (o >= 0 ? "+" : "") + be(s, 2, i) + be(Math.abs(o % 60), 2, i);
      case 1:
        return "GMT" + (o >= 0 ? "+" : "") + be(s, 1, i);
      case 2:
        return (
          "GMT" +
          (o >= 0 ? "+" : "") +
          be(s, 2, i) +
          ":" +
          be(Math.abs(o % 60), 2, i)
        );
      case 3:
        return r === 0
          ? "Z"
          : (o >= 0 ? "+" : "") +
              be(s, 2, i) +
              ":" +
              be(Math.abs(o % 60), 2, i);
      default:
        throw new Error(`Unknown zone width "${e}"`);
    }
  };
}
var BE = 0,
  Po = 4;
function HE(e) {
  let t = Lo(e, BE, 1).getDay();
  return Lo(e, 0, 1 + (t <= Po ? Po : Po + 7) - t);
}
function xf(e) {
  let t = e.getDay(),
    n = t === 0 ? -3 : Po - t;
  return Lo(e.getFullYear(), e.getMonth(), e.getDate() + n);
}
function Na(e, t = !1) {
  return function (n, r) {
    let o;
    if (t) {
      let i = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
        s = n.getDate();
      o = 1 + Math.floor((s + i) / 7);
    } else {
      let i = xf(n),
        s = HE(i.getFullYear()),
        a = i.getTime() - s.getTime();
      o = 1 + Math.round(a / 6048e5);
    }
    return be(o, e, jo(r, Je.MinusSign));
  };
}
function ko(e, t = !1) {
  return function (n, r) {
    let i = xf(n).getFullYear();
    return be(i, e, jo(r, Je.MinusSign), t);
  };
}
var xa = {};
function $E(e) {
  if (xa[e]) return xa[e];
  let t;
  switch (e) {
    case "G":
    case "GG":
    case "GGG":
      t = F(3, R.Abbreviated);
      break;
    case "GGGG":
      t = F(3, R.Wide);
      break;
    case "GGGGG":
      t = F(3, R.Narrow);
      break;
    case "y":
      t = B(0, 1, 0, !1, !0);
      break;
    case "yy":
      t = B(0, 2, 0, !0, !0);
      break;
    case "yyy":
      t = B(0, 3, 0, !1, !0);
      break;
    case "yyyy":
      t = B(0, 4, 0, !1, !0);
      break;
    case "Y":
      t = ko(1);
      break;
    case "YY":
      t = ko(2, !0);
      break;
    case "YYY":
      t = ko(3);
      break;
    case "YYYY":
      t = ko(4);
      break;
    case "M":
    case "L":
      t = B(1, 1, 1);
      break;
    case "MM":
    case "LL":
      t = B(1, 2, 1);
      break;
    case "MMM":
      t = F(2, R.Abbreviated);
      break;
    case "MMMM":
      t = F(2, R.Wide);
      break;
    case "MMMMM":
      t = F(2, R.Narrow);
      break;
    case "LLL":
      t = F(2, R.Abbreviated, J.Standalone);
      break;
    case "LLLL":
      t = F(2, R.Wide, J.Standalone);
      break;
    case "LLLLL":
      t = F(2, R.Narrow, J.Standalone);
      break;
    case "w":
      t = Na(1);
      break;
    case "ww":
      t = Na(2);
      break;
    case "W":
      t = Na(1, !0);
      break;
    case "d":
      t = B(2, 1);
      break;
    case "dd":
      t = B(2, 2);
      break;
    case "c":
    case "cc":
      t = B(7, 1);
      break;
    case "ccc":
      t = F(1, R.Abbreviated, J.Standalone);
      break;
    case "cccc":
      t = F(1, R.Wide, J.Standalone);
      break;
    case "ccccc":
      t = F(1, R.Narrow, J.Standalone);
      break;
    case "cccccc":
      t = F(1, R.Short, J.Standalone);
      break;
    case "E":
    case "EE":
    case "EEE":
      t = F(1, R.Abbreviated);
      break;
    case "EEEE":
      t = F(1, R.Wide);
      break;
    case "EEEEE":
      t = F(1, R.Narrow);
      break;
    case "EEEEEE":
      t = F(1, R.Short);
      break;
    case "a":
    case "aa":
    case "aaa":
      t = F(0, R.Abbreviated);
      break;
    case "aaaa":
      t = F(0, R.Wide);
      break;
    case "aaaaa":
      t = F(0, R.Narrow);
      break;
    case "b":
    case "bb":
    case "bbb":
      t = F(0, R.Abbreviated, J.Standalone, !0);
      break;
    case "bbbb":
      t = F(0, R.Wide, J.Standalone, !0);
      break;
    case "bbbbb":
      t = F(0, R.Narrow, J.Standalone, !0);
      break;
    case "B":
    case "BB":
    case "BBB":
      t = F(0, R.Abbreviated, J.Format, !0);
      break;
    case "BBBB":
      t = F(0, R.Wide, J.Format, !0);
      break;
    case "BBBBB":
      t = F(0, R.Narrow, J.Format, !0);
      break;
    case "h":
      t = B(3, 1, -12);
      break;
    case "hh":
      t = B(3, 2, -12);
      break;
    case "H":
      t = B(3, 1);
      break;
    case "HH":
      t = B(3, 2);
      break;
    case "m":
      t = B(4, 1);
      break;
    case "mm":
      t = B(4, 2);
      break;
    case "s":
      t = B(5, 1);
      break;
    case "ss":
      t = B(5, 2);
      break;
    case "S":
      t = B(6, 1);
      break;
    case "SS":
      t = B(6, 2);
      break;
    case "SSS":
      t = B(6, 3);
      break;
    case "Z":
    case "ZZ":
    case "ZZZ":
      t = Fo(0);
      break;
    case "ZZZZZ":
      t = Fo(3);
      break;
    case "O":
    case "OO":
    case "OOO":
    case "z":
    case "zz":
    case "zzz":
      t = Fo(1);
      break;
    case "OOOO":
    case "ZZZZ":
    case "zzzz":
      t = Fo(2);
      break;
    default:
      return null;
  }
  return (xa[e] = t), t;
}
function Af(e, t) {
  e = e.replace(/:/g, "");
  let n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
  return isNaN(n) ? t : n;
}
function UE(e, t) {
  return (e = new Date(e.getTime())), e.setMinutes(e.getMinutes() + t), e;
}
function zE(e, t, n) {
  let r = n ? -1 : 1,
    o = e.getTimezoneOffset(),
    i = Af(t, o);
  return UE(e, r * (i - o));
}
function GE(e) {
  if (If(e)) return e;
  if (typeof e == "number" && !isNaN(e)) return new Date(e);
  if (typeof e == "string") {
    if (((e = e.trim()), /^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e))) {
      let [o, i = 1, s = 1] = e.split("-").map((a) => +a);
      return Lo(o, i - 1, s);
    }
    let n = parseFloat(e);
    if (!isNaN(e - n)) return new Date(n);
    let r;
    if ((r = e.match(FE))) return WE(r);
  }
  let t = new Date(e);
  if (!If(t)) throw new Error(`Unable to convert "${e}" into a date`);
  return t;
}
function WE(e) {
  let t = new Date(0),
    n = 0,
    r = 0,
    o = e[8] ? t.setUTCFullYear : t.setFullYear,
    i = e[8] ? t.setUTCHours : t.setHours;
  e[9] && ((n = Number(e[9] + e[10])), (r = Number(e[9] + e[11]))),
    o.call(t, Number(e[1]), Number(e[2]) - 1, Number(e[3]));
  let s = Number(e[4] || 0) - n,
    a = Number(e[5] || 0) - r,
    u = Number(e[6] || 0),
    c = Math.floor(parseFloat("0." + (e[7] || 0)) * 1e3);
  return i.call(t, s, a, u, c), t;
}
function If(e) {
  return e instanceof Date && !isNaN(e.valueOf());
}
function G0(e, t) {
  t = encodeURIComponent(t);
  for (let n of e.split(";")) {
    let r = n.indexOf("="),
      [o, i] = r == -1 ? [n, ""] : [n.slice(0, r), n.slice(r + 1)];
    if (o.trim() === t) return decodeURIComponent(i);
  }
  return null;
}
var Aa = /\s+/,
  wf = [],
  W0 = (() => {
    class e {
      _ngEl;
      _renderer;
      initialClasses = wf;
      rawClass;
      stateMap = new Map();
      constructor(n, r) {
        (this._ngEl = n), (this._renderer = r);
      }
      set klass(n) {
        this.initialClasses = n != null ? n.trim().split(Aa) : wf;
      }
      set ngClass(n) {
        this.rawClass = typeof n == "string" ? n.trim().split(Aa) : n;
      }
      ngDoCheck() {
        for (let r of this.initialClasses) this._updateState(r, !0);
        let n = this.rawClass;
        if (Array.isArray(n) || n instanceof Set)
          for (let r of n) this._updateState(r, !0);
        else if (n != null)
          for (let r of Object.keys(n)) this._updateState(r, !!n[r]);
        this._applyStateDiff();
      }
      _updateState(n, r) {
        let o = this.stateMap.get(n);
        o !== void 0
          ? (o.enabled !== r && ((o.changed = !0), (o.enabled = r)),
            (o.touched = !0))
          : this.stateMap.set(n, { enabled: r, changed: !0, touched: !0 });
      }
      _applyStateDiff() {
        for (let n of this.stateMap) {
          let r = n[0],
            o = n[1];
          o.changed
            ? (this._toggleClass(r, o.enabled), (o.changed = !1))
            : o.touched ||
              (o.enabled && this._toggleClass(r, !1), this.stateMap.delete(r)),
            (o.touched = !1);
        }
      }
      _toggleClass(n, r) {
        (n = n.trim()),
          n.length > 0 &&
            n.split(Aa).forEach((o) => {
              r
                ? this._renderer.addClass(this._ngEl.nativeElement, o)
                : this._renderer.removeClass(this._ngEl.nativeElement, o);
            });
      }
      static ɵfac = function (r) {
        return new (r || e)(z(Tt), z(ma));
      };
      static ɵdir = Pn({
        type: e,
        selectors: [["", "ngClass", ""]],
        inputs: { klass: [0, "class", "klass"], ngClass: "ngClass" },
      });
    }
    return e;
  })();
var Ra = class {
    $implicit;
    ngForOf;
    index;
    count;
    constructor(t, n, r, o) {
      (this.$implicit = t),
        (this.ngForOf = n),
        (this.index = r),
        (this.count = o);
    }
    get first() {
      return this.index === 0;
    }
    get last() {
      return this.index === this.count - 1;
    }
    get even() {
      return this.index % 2 === 0;
    }
    get odd() {
      return !this.even;
    }
  },
  q0 = (() => {
    class e {
      _viewContainer;
      _template;
      _differs;
      set ngForOf(n) {
        (this._ngForOf = n), (this._ngForOfDirty = !0);
      }
      set ngForTrackBy(n) {
        this._trackByFn = n;
      }
      get ngForTrackBy() {
        return this._trackByFn;
      }
      _ngForOf = null;
      _ngForOfDirty = !0;
      _differ = null;
      _trackByFn;
      constructor(n, r, o) {
        (this._viewContainer = n), (this._template = r), (this._differs = o);
      }
      set ngForTemplate(n) {
        n && (this._template = n);
      }
      ngDoCheck() {
        if (this._ngForOfDirty) {
          this._ngForOfDirty = !1;
          let n = this._ngForOf;
          !this._differ &&
            n &&
            (this._differ = this._differs.find(n).create(this.ngForTrackBy));
        }
        if (this._differ) {
          let n = this._differ.diff(this._ngForOf);
          n && this._applyChanges(n);
        }
      }
      _applyChanges(n) {
        let r = this._viewContainer;
        n.forEachOperation((o, i, s) => {
          if (o.previousIndex == null)
            r.createEmbeddedView(
              this._template,
              new Ra(o.item, this._ngForOf, -1, -1),
              s === null ? void 0 : s,
            );
          else if (s == null) r.remove(i === null ? void 0 : i);
          else if (i !== null) {
            let a = r.get(i);
            r.move(a, s), Cf(a, o);
          }
        });
        for (let o = 0, i = r.length; o < i; o++) {
          let a = r.get(o).context;
          (a.index = o), (a.count = i), (a.ngForOf = this._ngForOf);
        }
        n.forEachIdentityChange((o) => {
          let i = r.get(o.currentIndex);
          Cf(i, o);
        });
      }
      static ngTemplateContextGuard(n, r) {
        return !0;
      }
      static ɵfac = function (r) {
        return new (r || e)(z(Nt), z(It), z(_a));
      };
      static ɵdir = Pn({
        type: e,
        selectors: [["", "ngFor", "", "ngForOf", ""]],
        inputs: {
          ngForOf: "ngForOf",
          ngForTrackBy: "ngForTrackBy",
          ngForTemplate: "ngForTemplate",
        },
      });
    }
    return e;
  })();
function Cf(e, t) {
  e.context.$implicit = t.item;
}
var Z0 = (() => {
    class e {
      _viewContainer;
      _context = new Oa();
      _thenTemplateRef = null;
      _elseTemplateRef = null;
      _thenViewRef = null;
      _elseViewRef = null;
      constructor(n, r) {
        (this._viewContainer = n), (this._thenTemplateRef = r);
      }
      set ngIf(n) {
        (this._context.$implicit = this._context.ngIf = n), this._updateView();
      }
      set ngIfThen(n) {
        bf("ngIfThen", n),
          (this._thenTemplateRef = n),
          (this._thenViewRef = null),
          this._updateView();
      }
      set ngIfElse(n) {
        bf("ngIfElse", n),
          (this._elseTemplateRef = n),
          (this._elseViewRef = null),
          this._updateView();
      }
      _updateView() {
        this._context.$implicit
          ? this._thenViewRef ||
            (this._viewContainer.clear(),
            (this._elseViewRef = null),
            this._thenTemplateRef &&
              (this._thenViewRef = this._viewContainer.createEmbeddedView(
                this._thenTemplateRef,
                this._context,
              )))
          : this._elseViewRef ||
            (this._viewContainer.clear(),
            (this._thenViewRef = null),
            this._elseTemplateRef &&
              (this._elseViewRef = this._viewContainer.createEmbeddedView(
                this._elseTemplateRef,
                this._context,
              )));
      }
      static ngIfUseIfTypeGuard;
      static ngTemplateGuard_ngIf;
      static ngTemplateContextGuard(n, r) {
        return !0;
      }
      static ɵfac = function (r) {
        return new (r || e)(z(Nt), z(It));
      };
      static ɵdir = Pn({
        type: e,
        selectors: [["", "ngIf", ""]],
        inputs: { ngIf: "ngIf", ngIfThen: "ngIfThen", ngIfElse: "ngIfElse" },
      });
    }
    return e;
  })(),
  Oa = class {
    $implicit = null;
    ngIf = null;
  };
function bf(e, t) {
  if (!!!(!t || t.createEmbeddedView))
    throw new Error(`${e} must be a TemplateRef, but received '${K(t)}'.`);
}
var Q0 = (() => {
  class e {
    _viewContainerRef;
    _viewRef = null;
    ngTemplateOutletContext = null;
    ngTemplateOutlet = null;
    ngTemplateOutletInjector = null;
    constructor(n) {
      this._viewContainerRef = n;
    }
    ngOnChanges(n) {
      if (this._shouldRecreateView(n)) {
        let r = this._viewContainerRef;
        if (
          (this._viewRef && r.remove(r.indexOf(this._viewRef)),
          !this.ngTemplateOutlet)
        ) {
          this._viewRef = null;
          return;
        }
        let o = this._createContextForwardProxy();
        this._viewRef = r.createEmbeddedView(this.ngTemplateOutlet, o, {
          injector: this.ngTemplateOutletInjector ?? void 0,
        });
      }
    }
    _shouldRecreateView(n) {
      return !!n.ngTemplateOutlet || !!n.ngTemplateOutletInjector;
    }
    _createContextForwardProxy() {
      return new Proxy(
        {},
        {
          set: (n, r, o) =>
            this.ngTemplateOutletContext
              ? Reflect.set(this.ngTemplateOutletContext, r, o)
              : !1,
          get: (n, r, o) => {
            if (this.ngTemplateOutletContext)
              return Reflect.get(this.ngTemplateOutletContext, r, o);
          },
        },
      );
    }
    static ɵfac = function (r) {
      return new (r || e)(z(Nt));
    };
    static ɵdir = Pn({
      type: e,
      selectors: [["", "ngTemplateOutlet", ""]],
      inputs: {
        ngTemplateOutletContext: "ngTemplateOutletContext",
        ngTemplateOutlet: "ngTemplateOutlet",
        ngTemplateOutletInjector: "ngTemplateOutletInjector",
      },
      features: [el],
    });
  }
  return e;
})();
function qE(e, t) {
  return new b(2100, !1);
}
var ZE = "mediumDate",
  QE = new S(""),
  YE = new S(""),
  Y0 = (() => {
    class e {
      locale;
      defaultTimezone;
      defaultOptions;
      constructor(n, r, o) {
        (this.locale = n),
          (this.defaultTimezone = r),
          (this.defaultOptions = o);
      }
      transform(n, r, o, i) {
        if (n == null || n === "" || n !== n) return null;
        try {
          let s = r ?? this.defaultOptions?.dateFormat ?? ZE,
            a =
              o ??
              this.defaultOptions?.timezone ??
              this.defaultTimezone ??
              void 0;
          return PE(n, s, i || this.locale, a);
        } catch (s) {
          throw qE(e, s.message);
        }
      }
      static ɵfac = function (r) {
        return new (r || e)(z(So, 16), z(QE, 24), z(YE, 24));
      };
      static ɵpipe = Ea({ name: "date", type: e, pure: !0 });
    }
    return e;
  })();
function KE(e, t) {
  return { key: e, value: t };
}
var K0 = (() => {
  class e {
    differs;
    constructor(n) {
      this.differs = n;
    }
    differ;
    keyValues = [];
    compareFn = _f;
    transform(n, r = _f) {
      if (!n || (!(n instanceof Map) && typeof n != "object")) return null;
      this.differ ??= this.differs.find(n).create();
      let o = this.differ.diff(n),
        i = r !== this.compareFn;
      return (
        o &&
          ((this.keyValues = []),
          o.forEachItem((s) => {
            this.keyValues.push(KE(s.key, s.currentValue));
          })),
        (o || i) && (r && this.keyValues.sort(r), (this.compareFn = r)),
        this.keyValues
      );
    }
    static ɵfac = function (r) {
      return new (r || e)(z(Ma, 16));
    };
    static ɵpipe = Ea({ name: "keyvalue", type: e, pure: !1 });
  }
  return e;
})();
function _f(e, t) {
  let n = e.key,
    r = t.key;
  if (n === r) return 0;
  if (n == null) return 1;
  if (r == null) return -1;
  if (typeof n == "string" && typeof r == "string") return n < r ? -1 : 1;
  if (typeof n == "number" && typeof r == "number") return n - r;
  if (typeof n == "boolean" && typeof r == "boolean") return n < r ? -1 : 1;
  let o = String(n),
    i = String(r);
  return o == i ? 0 : o < i ? -1 : 1;
}
var J0 = (() => {
    class e {
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵmod = Hd({ type: e });
      static ɵinj = Ac({});
    }
    return e;
  })(),
  JE = "browser",
  XE = "server";
function X0(e) {
  return e === JE;
}
function eN(e) {
  return e === XE;
}
var tN = (() => {
    class e {
      static ɵprov = A({
        token: e,
        providedIn: "root",
        factory: () => new Fa(E(ka), window),
      });
    }
    return e;
  })(),
  Fa = class {
    document;
    window;
    offset = () => [0, 0];
    constructor(t, n) {
      (this.document = t), (this.window = n);
    }
    setOffset(t) {
      Array.isArray(t) ? (this.offset = () => t) : (this.offset = t);
    }
    getScrollPosition() {
      return [this.window.scrollX, this.window.scrollY];
    }
    scrollToPosition(t) {
      this.window.scrollTo(t[0], t[1]);
    }
    scrollToAnchor(t) {
      let n = eI(this.document, t);
      n && (this.scrollToElement(n), n.focus());
    }
    setHistoryScrollRestoration(t) {
      this.window.history.scrollRestoration = t;
    }
    scrollToElement(t) {
      let n = t.getBoundingClientRect(),
        r = n.left + this.window.pageXOffset,
        o = n.top + this.window.pageYOffset,
        i = this.offset();
      this.window.scrollTo(r - i[0], o - i[1]);
    }
  };
function eI(e, t) {
  let n = e.getElementById(t) || e.getElementsByName(t)[0];
  if (n) return n;
  if (
    typeof e.createTreeWalker == "function" &&
    e.body &&
    typeof e.body.attachShadow == "function"
  ) {
    let r = e.createTreeWalker(e.body, NodeFilter.SHOW_ELEMENT),
      o = r.currentNode;
    for (; o; ) {
      let i = o.shadowRoot;
      if (i) {
        let s = i.getElementById(t) || i.querySelector(`[name="${t}"]`);
        if (s) return s;
      }
      o = r.nextNode();
    }
  }
  return null;
}
var Mf = class {};
export {
  X as a,
  ee as b,
  tI as c,
  nI as d,
  Ua as e,
  za as f,
  rI as g,
  oI as h,
  iI as i,
  j,
  Wf as k,
  T as l,
  ei as m,
  ti as n,
  te as o,
  an as p,
  ot as q,
  Me as r,
  np as s,
  rp as t,
  op as u,
  ve as v,
  ip as w,
  sp as x,
  st as y,
  hp as z,
  at as A,
  ln as B,
  gr as C,
  mp as D,
  yp as E,
  dn as F,
  vp as G,
  Dp as H,
  ut as I,
  Ep as J,
  Ru as K,
  Ip as L,
  wp as M,
  fn as N,
  ri as O,
  Cp as P,
  Mp as Q,
  Tp as R,
  oi as S,
  Sp as T,
  Np as U,
  xp as V,
  Ap as W,
  Rp as X,
  Op as Y,
  Fp as Z,
  kp as _,
  Pp as $,
  b as aa,
  Nc as ba,
  A as ca,
  Ac as da,
  DS as ea,
  S as fa,
  M as ga,
  W as ha,
  E as ia,
  lh as ja,
  Zc as ka,
  Ye as la,
  Yc as ma,
  el as na,
  ES as oa,
  IS as pa,
  wS as qa,
  lg as ra,
  Re as sa,
  Rn as ta,
  On as ua,
  qe as va,
  ue as wa,
  Dt as xa,
  CS as ya,
  Tt as za,
  Fe as Aa,
  wg as Ba,
  Cg as Ca,
  bS as Da,
  _S as Ea,
  xg as Fa,
  Ag as Ga,
  MS as Ha,
  TS as Ia,
  Eo as Ja,
  Lg as Ka,
  Vg as La,
  bn as Ma,
  en as Na,
  Ks as Oa,
  SS as Pa,
  NS as Qa,
  xS as Ra,
  AS as Sa,
  RS as Ta,
  Jl as Ua,
  om as Va,
  wo as Wa,
  OS as Xa,
  sm as Ya,
  FS as Za,
  kS as _a,
  PS as $a,
  Wr as ab,
  It as bb,
  Yt as cb,
  Kr as db,
  ma as eb,
  z as fb,
  jS as gb,
  Nt as hb,
  HS as ib,
  Ke as jb,
  as as kb,
  hv as lb,
  $S as mb,
  Hd as nb,
  Pn as ob,
  wv as pb,
  US as qb,
  Rv as rb,
  zS as sb,
  wa as tb,
  Pv as ub,
  Lv as vb,
  _n as wb,
  $v as xb,
  nD as yb,
  Xd as zb,
  rD as Ab,
  GS as Bb,
  WS as Cb,
  sf as Db,
  af as Eb,
  gD as Fb,
  vD as Gb,
  DD as Hb,
  qS as Ib,
  ID as Jb,
  wD as Kb,
  ND as Lb,
  ZS as Mb,
  QS as Nb,
  YS as Ob,
  KS as Pb,
  JS as Qb,
  XS as Rb,
  e0 as Sb,
  t0 as Tb,
  n0 as Ub,
  r0 as Vb,
  o0 as Wb,
  kD as Xb,
  cf as Yb,
  PD as Zb,
  LD as _b,
  VD as $b,
  i0 as ac,
  jD as bc,
  s0 as cc,
  a0 as dc,
  u0 as ec,
  c0 as fc,
  l0 as gc,
  d0 as hc,
  f0 as ic,
  p0 as jc,
  h0 as kc,
  ba as lc,
  g0 as mc,
  aE as nc,
  m0 as oc,
  uE as pc,
  gE as qc,
  y0 as rc,
  v0 as sc,
  Ta as tc,
  $0 as uc,
  vf as vc,
  ka as wc,
  U0 as xc,
  Vo as yc,
  wE as zc,
  z0 as Ac,
  CE as Bc,
  G0 as Cc,
  W0 as Dc,
  q0 as Ec,
  Z0 as Fc,
  Q0 as Gc,
  Y0 as Hc,
  K0 as Ic,
  J0 as Jc,
  JE as Kc,
  X0 as Lc,
  eN as Mc,
  tN as Nc,
  Mf as Oc,
};
