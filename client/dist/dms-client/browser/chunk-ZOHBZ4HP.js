import {
  Ab as oe,
  Ca as b,
  E as ye,
  Lb as C,
  a as d,
  aa as T,
  b as f,
  ba as c,
  cc as h,
  da as ne,
  eb as I,
  fa as V,
  fb as a,
  lc as Ve,
  na as j,
  nb as ie,
  nc as B,
  o as me,
  ob as l,
  oc as M,
  pb as u,
  pc as g,
  qa as m,
  r as _e,
  tb as Ce,
  tc as se,
  va as D,
  xb as re,
  y as ve,
  za as w,
} from "./chunk-4KGF3EVT.js";
var Ne = (() => {
    class n {
      _renderer;
      _elementRef;
      onChange = (e) => {};
      onTouched = () => {};
      constructor(e, i) {
        (this._renderer = e), (this._elementRef = i);
      }
      setProperty(e, i) {
        this._renderer.setProperty(this._elementRef.nativeElement, e, i);
      }
      registerOnTouched(e) {
        this.onTouched = e;
      }
      registerOnChange(e) {
        this.onChange = e;
      }
      setDisabledState(e) {
        this.setProperty("disabled", e);
      }
      static ɵfac = function (i) {
        return new (i || n)(a(I), a(w));
      };
      static ɵdir = l({ type: n });
    }
    return n;
  })(),
  J = (() => {
    class n extends Ne {
      static ɵfac = (() => {
        let e;
        return function (r) {
          return (e || (e = m(n)))(r || n);
        };
      })();
      static ɵdir = l({ type: n, features: [u] });
    }
    return n;
  })(),
  G = new V(""),
  tt = { provide: G, useExisting: c(() => nt), multi: !0 },
  nt = (() => {
    class n extends J {
      writeValue(e) {
        this.setProperty("checked", e);
      }
      static ɵfac = (() => {
        let e;
        return function (r) {
          return (e || (e = m(n)))(r || n);
        };
      })();
      static ɵdir = l({
        type: n,
        selectors: [
          ["input", "type", "checkbox", "formControlName", ""],
          ["input", "type", "checkbox", "formControl", ""],
          ["input", "type", "checkbox", "ngModel", ""],
        ],
        hostBindings: function (i, r) {
          i & 1 &&
            C("change", function (s) {
              return r.onChange(s.target.checked);
            })("blur", function () {
              return r.onTouched();
            });
        },
        standalone: !1,
        features: [h([tt]), u],
      });
    }
    return n;
  })(),
  it = { provide: G, useExisting: c(() => Oe), multi: !0 };
function rt() {
  let n = se() ? se().getUserAgent() : "";
  return /android (\d+)/.test(n.toLowerCase());
}
var ot = new V(""),
  Oe = (() => {
    class n extends Ne {
      _compositionMode;
      _composing = !1;
      constructor(e, i, r) {
        super(e, i),
          (this._compositionMode = r),
          this._compositionMode == null && (this._compositionMode = !rt());
      }
      writeValue(e) {
        let i = e ?? "";
        this.setProperty("value", i);
      }
      _handleInput(e) {
        (!this._compositionMode ||
          (this._compositionMode && !this._composing)) &&
          this.onChange(e);
      }
      _compositionStart() {
        this._composing = !0;
      }
      _compositionEnd(e) {
        (this._composing = !1), this._compositionMode && this.onChange(e);
      }
      static ɵfac = function (i) {
        return new (i || n)(a(I), a(w), a(ot, 8));
      };
      static ɵdir = l({
        type: n,
        selectors: [
          ["input", "formControlName", "", 3, "type", "checkbox"],
          ["textarea", "formControlName", ""],
          ["input", "formControl", "", 3, "type", "checkbox"],
          ["textarea", "formControl", ""],
          ["input", "ngModel", "", 3, "type", "checkbox"],
          ["textarea", "ngModel", ""],
          ["", "ngDefaultControl", ""],
        ],
        hostBindings: function (i, r) {
          i & 1 &&
            C("input", function (s) {
              return r._handleInput(s.target.value);
            })("blur", function () {
              return r.onTouched();
            })("compositionstart", function () {
              return r._compositionStart();
            })("compositionend", function (s) {
              return r._compositionEnd(s.target.value);
            });
        },
        standalone: !1,
        features: [h([it]), u],
      });
    }
    return n;
  })();
function _(n) {
  return (
    n == null || ((typeof n == "string" || Array.isArray(n)) && n.length === 0)
  );
}
function xe(n) {
  return n != null && typeof n.length == "number";
}
var F = new V(""),
  de = new V(""),
  st =
    /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  De = class {
    static min(t) {
      return at(t);
    }
    static max(t) {
      return lt(t);
    }
    static required(t) {
      return Pe(t);
    }
    static requiredTrue(t) {
      return ut(t);
    }
    static email(t) {
      return ke(t);
    }
    static minLength(t) {
      return Ge(t);
    }
    static maxLength(t) {
      return dt(t);
    }
    static pattern(t) {
      return ct(t);
    }
    static nullValidator(t) {
      return H(t);
    }
    static compose(t) {
      return He(t);
    }
    static composeAsync(t) {
      return Le(t);
    }
  };
function at(n) {
  return (t) => {
    if (_(t.value) || _(n)) return null;
    let e = parseFloat(t.value);
    return !isNaN(e) && e < n ? { min: { min: n, actual: t.value } } : null;
  };
}
function lt(n) {
  return (t) => {
    if (_(t.value) || _(n)) return null;
    let e = parseFloat(t.value);
    return !isNaN(e) && e > n ? { max: { max: n, actual: t.value } } : null;
  };
}
function Pe(n) {
  return _(n.value) ? { required: !0 } : null;
}
function ut(n) {
  return n.value === !0 ? null : { required: !0 };
}
function ke(n) {
  return _(n.value) || st.test(n.value) ? null : { email: !0 };
}
function Ge(n) {
  return (t) =>
    _(t.value) || !xe(t.value)
      ? null
      : t.value.length < n
        ? { minlength: { requiredLength: n, actualLength: t.value.length } }
        : null;
}
function dt(n) {
  return (t) =>
    xe(t.value) && t.value.length > n
      ? { maxlength: { requiredLength: n, actualLength: t.value.length } }
      : null;
}
function ct(n) {
  if (!n) return H;
  let t, e;
  return (
    typeof n == "string"
      ? ((e = ""),
        n.charAt(0) !== "^" && (e += "^"),
        (e += n),
        n.charAt(n.length - 1) !== "$" && (e += "$"),
        (t = new RegExp(e)))
      : ((e = n.toString()), (t = n)),
    (i) => {
      if (_(i.value)) return null;
      let r = i.value;
      return t.test(r)
        ? null
        : { pattern: { requiredPattern: e, actualValue: r } };
    }
  );
}
function H(n) {
  return null;
}
function Re(n) {
  return n != null;
}
function Te(n) {
  return Ce(n) ? _e(n) : n;
}
function je(n) {
  let t = {};
  return (
    n.forEach((e) => {
      t = e != null ? d(d({}, t), e) : t;
    }),
    Object.keys(t).length === 0 ? null : t
  );
}
function Be(n, t) {
  return t.map((e) => e(n));
}
function ht(n) {
  return !n.validate;
}
function Ue(n) {
  return n.map((t) => (ht(t) ? t : (e) => t.validate(e)));
}
function He(n) {
  if (!n) return null;
  let t = n.filter(Re);
  return t.length == 0
    ? null
    : function (e) {
        return je(Be(e, t));
      };
}
function ce(n) {
  return n != null ? He(Ue(n)) : null;
}
function Le(n) {
  if (!n) return null;
  let t = n.filter(Re);
  return t.length == 0
    ? null
    : function (e) {
        let i = Be(e, t).map(Te);
        return ye(i).pipe(ve(je));
      };
}
function he(n) {
  return n != null ? Le(Ue(n)) : null;
}
function be(n, t) {
  return n === null ? [t] : Array.isArray(n) ? [...n, t] : [n, t];
}
function $e(n) {
  return n._rawValidators;
}
function We(n) {
  return n._rawAsyncValidators;
}
function ae(n) {
  return n ? (Array.isArray(n) ? n : [n]) : [];
}
function L(n, t) {
  return Array.isArray(n) ? n.includes(t) : n === t;
}
function Me(n, t) {
  let e = ae(t);
  return (
    ae(n).forEach((r) => {
      L(e, r) || e.push(r);
    }),
    e
  );
}
function Ae(n, t) {
  return ae(t).filter((e) => !L(n, e));
}
var $ = class {
    get value() {
      return this.control ? this.control.value : null;
    }
    get valid() {
      return this.control ? this.control.valid : null;
    }
    get invalid() {
      return this.control ? this.control.invalid : null;
    }
    get pending() {
      return this.control ? this.control.pending : null;
    }
    get disabled() {
      return this.control ? this.control.disabled : null;
    }
    get enabled() {
      return this.control ? this.control.enabled : null;
    }
    get errors() {
      return this.control ? this.control.errors : null;
    }
    get pristine() {
      return this.control ? this.control.pristine : null;
    }
    get dirty() {
      return this.control ? this.control.dirty : null;
    }
    get touched() {
      return this.control ? this.control.touched : null;
    }
    get status() {
      return this.control ? this.control.status : null;
    }
    get untouched() {
      return this.control ? this.control.untouched : null;
    }
    get statusChanges() {
      return this.control ? this.control.statusChanges : null;
    }
    get valueChanges() {
      return this.control ? this.control.valueChanges : null;
    }
    get path() {
      return null;
    }
    _composedValidatorFn;
    _composedAsyncValidatorFn;
    _rawValidators = [];
    _rawAsyncValidators = [];
    _setValidators(t) {
      (this._rawValidators = t || []),
        (this._composedValidatorFn = ce(this._rawValidators));
    }
    _setAsyncValidators(t) {
      (this._rawAsyncValidators = t || []),
        (this._composedAsyncValidatorFn = he(this._rawAsyncValidators));
    }
    get validator() {
      return this._composedValidatorFn || null;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn || null;
    }
    _onDestroyCallbacks = [];
    _registerOnDestroy(t) {
      this._onDestroyCallbacks.push(t);
    }
    _invokeOnDestroyCallbacks() {
      this._onDestroyCallbacks.forEach((t) => t()),
        (this._onDestroyCallbacks = []);
    }
    reset(t = void 0) {
      this.control && this.control.reset(t);
    }
    hasError(t, e) {
      return this.control ? this.control.hasError(t, e) : !1;
    }
    getError(t, e) {
      return this.control ? this.control.getError(t, e) : null;
    }
  },
  v = class extends $ {
    name;
    get formDirective() {
      return null;
    }
    get path() {
      return null;
    }
  },
  k = class extends $ {
    _parent = null;
    name = null;
    valueAccessor = null;
  },
  W = class {
    _cd;
    constructor(t) {
      this._cd = t;
    }
    get isTouched() {
      return this._cd?.control?._touched?.(), !!this._cd?.control?.touched;
    }
    get isUntouched() {
      return !!this._cd?.control?.untouched;
    }
    get isPristine() {
      return this._cd?.control?._pristine?.(), !!this._cd?.control?.pristine;
    }
    get isDirty() {
      return !!this._cd?.control?.dirty;
    }
    get isValid() {
      return this._cd?.control?._status?.(), !!this._cd?.control?.valid;
    }
    get isInvalid() {
      return !!this._cd?.control?.invalid;
    }
    get isPending() {
      return !!this._cd?.control?.pending;
    }
    get isSubmitted() {
      return this._cd?._submitted?.(), !!this._cd?.submitted;
    }
  },
  ft = {
    "[class.ng-untouched]": "isUntouched",
    "[class.ng-touched]": "isTouched",
    "[class.ng-pristine]": "isPristine",
    "[class.ng-dirty]": "isDirty",
    "[class.ng-valid]": "isValid",
    "[class.ng-invalid]": "isInvalid",
    "[class.ng-pending]": "isPending",
  },
  pn = f(d({}, ft), { "[class.ng-submitted]": "isSubmitted" }),
  gn = (() => {
    class n extends W {
      constructor(e) {
        super(e);
      }
      static ɵfac = function (i) {
        return new (i || n)(a(k, 2));
      };
      static ɵdir = l({
        type: n,
        selectors: [
          ["", "formControlName", ""],
          ["", "ngModel", ""],
          ["", "formControl", ""],
        ],
        hostVars: 14,
        hostBindings: function (i, r) {
          i & 2 &&
            oe("ng-untouched", r.isUntouched)("ng-touched", r.isTouched)(
              "ng-pristine",
              r.isPristine,
            )("ng-dirty", r.isDirty)("ng-valid", r.isValid)(
              "ng-invalid",
              r.isInvalid,
            )("ng-pending", r.isPending);
        },
        standalone: !1,
        features: [u],
      });
    }
    return n;
  })(),
  mn = (() => {
    class n extends W {
      constructor(e) {
        super(e);
      }
      static ɵfac = function (i) {
        return new (i || n)(a(v, 10));
      };
      static ɵdir = l({
        type: n,
        selectors: [
          ["", "formGroupName", ""],
          ["", "formArrayName", ""],
          ["", "ngModelGroup", ""],
          ["", "formGroup", ""],
          ["form", 3, "ngNoForm", ""],
          ["", "ngForm", ""],
        ],
        hostVars: 16,
        hostBindings: function (i, r) {
          i & 2 &&
            oe("ng-untouched", r.isUntouched)("ng-touched", r.isTouched)(
              "ng-pristine",
              r.isPristine,
            )("ng-dirty", r.isDirty)("ng-valid", r.isValid)(
              "ng-invalid",
              r.isInvalid,
            )("ng-pending", r.isPending)("ng-submitted", r.isSubmitted);
        },
        standalone: !1,
        features: [u],
      });
    }
    return n;
  })();
var S = "VALID",
  U = "INVALID",
  A = "PENDING",
  N = "DISABLED",
  y = class {},
  q = class extends y {
    value;
    source;
    constructor(t, e) {
      super(), (this.value = t), (this.source = e);
    }
  },
  x = class extends y {
    pristine;
    source;
    constructor(t, e) {
      super(), (this.pristine = t), (this.source = e);
    }
  },
  P = class extends y {
    touched;
    source;
    constructor(t, e) {
      super(), (this.touched = t), (this.source = e);
    }
  },
  E = class extends y {
    status;
    source;
    constructor(t, e) {
      super(), (this.status = t), (this.source = e);
    }
  },
  le = class extends y {
    source;
    constructor(t) {
      super(), (this.source = t);
    }
  },
  ue = class extends y {
    source;
    constructor(t) {
      super(), (this.source = t);
    }
  };
function qe(n) {
  return (Q(n) ? n.validators : n) || null;
}
function pt(n) {
  return Array.isArray(n) ? ce(n) : n || null;
}
function ze(n, t) {
  return (Q(t) ? t.asyncValidators : n) || null;
}
function gt(n) {
  return Array.isArray(n) ? he(n) : n || null;
}
function Q(n) {
  return n != null && !Array.isArray(n) && typeof n == "object";
}
function mt(n, t, e) {
  let i = n.controls;
  if (!(t ? Object.keys(i) : i).length) throw new T(1e3, "");
  if (!i[e]) throw new T(1001, "");
}
function _t(n, t, e) {
  n._forEachChild((i, r) => {
    if (e[r] === void 0) throw new T(1002, "");
  });
}
var z = class {
    _pendingDirty = !1;
    _hasOwnPendingAsyncValidator = null;
    _pendingTouched = !1;
    _onCollectionChange = () => {};
    _updateOn;
    _parent = null;
    _asyncValidationSubscription;
    _composedValidatorFn;
    _composedAsyncValidatorFn;
    _rawValidators;
    _rawAsyncValidators;
    value;
    constructor(t, e) {
      this._assignValidators(t), this._assignAsyncValidators(e);
    }
    get validator() {
      return this._composedValidatorFn;
    }
    set validator(t) {
      this._rawValidators = this._composedValidatorFn = t;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn;
    }
    set asyncValidator(t) {
      this._rawAsyncValidators = this._composedAsyncValidatorFn = t;
    }
    get parent() {
      return this._parent;
    }
    get status() {
      return g(this.statusReactive);
    }
    set status(t) {
      g(() => this.statusReactive.set(t));
    }
    _status = M(() => this.statusReactive());
    statusReactive = b(void 0);
    get valid() {
      return this.status === S;
    }
    get invalid() {
      return this.status === U;
    }
    get pending() {
      return this.status == A;
    }
    get disabled() {
      return this.status === N;
    }
    get enabled() {
      return this.status !== N;
    }
    errors;
    get pristine() {
      return g(this.pristineReactive);
    }
    set pristine(t) {
      g(() => this.pristineReactive.set(t));
    }
    _pristine = M(() => this.pristineReactive());
    pristineReactive = b(!0);
    get dirty() {
      return !this.pristine;
    }
    get touched() {
      return g(this.touchedReactive);
    }
    set touched(t) {
      g(() => this.touchedReactive.set(t));
    }
    _touched = M(() => this.touchedReactive());
    touchedReactive = b(!1);
    get untouched() {
      return !this.touched;
    }
    _events = new me();
    events = this._events.asObservable();
    valueChanges;
    statusChanges;
    get updateOn() {
      return this._updateOn
        ? this._updateOn
        : this.parent
          ? this.parent.updateOn
          : "change";
    }
    setValidators(t) {
      this._assignValidators(t);
    }
    setAsyncValidators(t) {
      this._assignAsyncValidators(t);
    }
    addValidators(t) {
      this.setValidators(Me(t, this._rawValidators));
    }
    addAsyncValidators(t) {
      this.setAsyncValidators(Me(t, this._rawAsyncValidators));
    }
    removeValidators(t) {
      this.setValidators(Ae(t, this._rawValidators));
    }
    removeAsyncValidators(t) {
      this.setAsyncValidators(Ae(t, this._rawAsyncValidators));
    }
    hasValidator(t) {
      return L(this._rawValidators, t);
    }
    hasAsyncValidator(t) {
      return L(this._rawAsyncValidators, t);
    }
    clearValidators() {
      this.validator = null;
    }
    clearAsyncValidators() {
      this.asyncValidator = null;
    }
    markAsTouched(t = {}) {
      let e = this.touched === !1;
      this.touched = !0;
      let i = t.sourceControl ?? this;
      this._parent &&
        !t.onlySelf &&
        this._parent.markAsTouched(f(d({}, t), { sourceControl: i })),
        e && t.emitEvent !== !1 && this._events.next(new P(!0, i));
    }
    markAllAsTouched(t = {}) {
      this.markAsTouched({
        onlySelf: !0,
        emitEvent: t.emitEvent,
        sourceControl: this,
      }),
        this._forEachChild((e) => e.markAllAsTouched(t));
    }
    markAsUntouched(t = {}) {
      let e = this.touched === !0;
      (this.touched = !1), (this._pendingTouched = !1);
      let i = t.sourceControl ?? this;
      this._forEachChild((r) => {
        r.markAsUntouched({
          onlySelf: !0,
          emitEvent: t.emitEvent,
          sourceControl: i,
        });
      }),
        this._parent && !t.onlySelf && this._parent._updateTouched(t, i),
        e && t.emitEvent !== !1 && this._events.next(new P(!1, i));
    }
    markAsDirty(t = {}) {
      let e = this.pristine === !0;
      this.pristine = !1;
      let i = t.sourceControl ?? this;
      this._parent &&
        !t.onlySelf &&
        this._parent.markAsDirty(f(d({}, t), { sourceControl: i })),
        e && t.emitEvent !== !1 && this._events.next(new x(!1, i));
    }
    markAsPristine(t = {}) {
      let e = this.pristine === !1;
      (this.pristine = !0), (this._pendingDirty = !1);
      let i = t.sourceControl ?? this;
      this._forEachChild((r) => {
        r.markAsPristine({ onlySelf: !0, emitEvent: t.emitEvent });
      }),
        this._parent && !t.onlySelf && this._parent._updatePristine(t, i),
        e && t.emitEvent !== !1 && this._events.next(new x(!0, i));
    }
    markAsPending(t = {}) {
      this.status = A;
      let e = t.sourceControl ?? this;
      t.emitEvent !== !1 &&
        (this._events.next(new E(this.status, e)),
        this.statusChanges.emit(this.status)),
        this._parent &&
          !t.onlySelf &&
          this._parent.markAsPending(f(d({}, t), { sourceControl: e }));
    }
    disable(t = {}) {
      let e = this._parentMarkedDirty(t.onlySelf);
      (this.status = N),
        (this.errors = null),
        this._forEachChild((r) => {
          r.disable(f(d({}, t), { onlySelf: !0 }));
        }),
        this._updateValue();
      let i = t.sourceControl ?? this;
      t.emitEvent !== !1 &&
        (this._events.next(new q(this.value, i)),
        this._events.next(new E(this.status, i)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._updateAncestors(f(d({}, t), { skipPristineCheck: e }), this),
        this._onDisabledChange.forEach((r) => r(!0));
    }
    enable(t = {}) {
      let e = this._parentMarkedDirty(t.onlySelf);
      (this.status = S),
        this._forEachChild((i) => {
          i.enable(f(d({}, t), { onlySelf: !0 }));
        }),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }),
        this._updateAncestors(f(d({}, t), { skipPristineCheck: e }), this),
        this._onDisabledChange.forEach((i) => i(!1));
    }
    _updateAncestors(t, e) {
      this._parent &&
        !t.onlySelf &&
        (this._parent.updateValueAndValidity(t),
        t.skipPristineCheck || this._parent._updatePristine({}, e),
        this._parent._updateTouched({}, e));
    }
    setParent(t) {
      this._parent = t;
    }
    getRawValue() {
      return this.value;
    }
    updateValueAndValidity(t = {}) {
      if ((this._setInitialStatus(), this._updateValue(), this.enabled)) {
        let i = this._cancelExistingSubscription();
        (this.errors = this._runValidator()),
          (this.status = this._calculateStatus()),
          (this.status === S || this.status === A) &&
            this._runAsyncValidator(i, t.emitEvent);
      }
      let e = t.sourceControl ?? this;
      t.emitEvent !== !1 &&
        (this._events.next(new q(this.value, e)),
        this._events.next(new E(this.status, e)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._parent &&
          !t.onlySelf &&
          this._parent.updateValueAndValidity(
            f(d({}, t), { sourceControl: e }),
          );
    }
    _updateTreeValidity(t = { emitEvent: !0 }) {
      this._forEachChild((e) => e._updateTreeValidity(t)),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent });
    }
    _setInitialStatus() {
      this.status = this._allControlsDisabled() ? N : S;
    }
    _runValidator() {
      return this.validator ? this.validator(this) : null;
    }
    _runAsyncValidator(t, e) {
      if (this.asyncValidator) {
        (this.status = A),
          (this._hasOwnPendingAsyncValidator = { emitEvent: e !== !1 });
        let i = Te(this.asyncValidator(this));
        this._asyncValidationSubscription = i.subscribe((r) => {
          (this._hasOwnPendingAsyncValidator = null),
            this.setErrors(r, { emitEvent: e, shouldHaveEmitted: t });
        });
      }
    }
    _cancelExistingSubscription() {
      if (this._asyncValidationSubscription) {
        this._asyncValidationSubscription.unsubscribe();
        let t = this._hasOwnPendingAsyncValidator?.emitEvent ?? !1;
        return (this._hasOwnPendingAsyncValidator = null), t;
      }
      return !1;
    }
    setErrors(t, e = {}) {
      (this.errors = t),
        this._updateControlsErrors(
          e.emitEvent !== !1,
          this,
          e.shouldHaveEmitted,
        );
    }
    get(t) {
      let e = t;
      return e == null ||
        (Array.isArray(e) || (e = e.split(".")), e.length === 0)
        ? null
        : e.reduce((i, r) => i && i._find(r), this);
    }
    getError(t, e) {
      let i = e ? this.get(e) : this;
      return i && i.errors ? i.errors[t] : null;
    }
    hasError(t, e) {
      return !!this.getError(t, e);
    }
    get root() {
      let t = this;
      for (; t._parent; ) t = t._parent;
      return t;
    }
    _updateControlsErrors(t, e, i) {
      (this.status = this._calculateStatus()),
        t && this.statusChanges.emit(this.status),
        (t || i) && this._events.next(new E(this.status, e)),
        this._parent && this._parent._updateControlsErrors(t, e, i);
    }
    _initObservables() {
      (this.valueChanges = new D()), (this.statusChanges = new D());
    }
    _calculateStatus() {
      return this._allControlsDisabled()
        ? N
        : this.errors
          ? U
          : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(A)
            ? A
            : this._anyControlsHaveStatus(U)
              ? U
              : S;
    }
    _anyControlsHaveStatus(t) {
      return this._anyControls((e) => e.status === t);
    }
    _anyControlsDirty() {
      return this._anyControls((t) => t.dirty);
    }
    _anyControlsTouched() {
      return this._anyControls((t) => t.touched);
    }
    _updatePristine(t, e) {
      let i = !this._anyControlsDirty(),
        r = this.pristine !== i;
      (this.pristine = i),
        this._parent && !t.onlySelf && this._parent._updatePristine(t, e),
        r && this._events.next(new x(this.pristine, e));
    }
    _updateTouched(t = {}, e) {
      (this.touched = this._anyControlsTouched()),
        this._events.next(new P(this.touched, e)),
        this._parent && !t.onlySelf && this._parent._updateTouched(t, e);
    }
    _onDisabledChange = [];
    _registerOnCollectionChange(t) {
      this._onCollectionChange = t;
    }
    _setUpdateStrategy(t) {
      Q(t) && t.updateOn != null && (this._updateOn = t.updateOn);
    }
    _parentMarkedDirty(t) {
      let e = this._parent && this._parent.dirty;
      return !t && !!e && !this._parent._anyControlsDirty();
    }
    _find(t) {
      return null;
    }
    _assignValidators(t) {
      (this._rawValidators = Array.isArray(t) ? t.slice() : t),
        (this._composedValidatorFn = pt(this._rawValidators));
    }
    _assignAsyncValidators(t) {
      (this._rawAsyncValidators = Array.isArray(t) ? t.slice() : t),
        (this._composedAsyncValidatorFn = gt(this._rawAsyncValidators));
    }
  },
  Z = class extends z {
    constructor(t, e, i) {
      super(qe(e), ze(i, e)),
        (this.controls = t),
        this._initObservables(),
        this._setUpdateStrategy(e),
        this._setUpControls(),
        this.updateValueAndValidity({
          onlySelf: !0,
          emitEvent: !!this.asyncValidator,
        });
    }
    controls;
    registerControl(t, e) {
      return this.controls[t]
        ? this.controls[t]
        : ((this.controls[t] = e),
          e.setParent(this),
          e._registerOnCollectionChange(this._onCollectionChange),
          e);
    }
    addControl(t, e, i = {}) {
      this.registerControl(t, e),
        this.updateValueAndValidity({ emitEvent: i.emitEvent }),
        this._onCollectionChange();
    }
    removeControl(t, e = {}) {
      this.controls[t] &&
        this.controls[t]._registerOnCollectionChange(() => {}),
        delete this.controls[t],
        this.updateValueAndValidity({ emitEvent: e.emitEvent }),
        this._onCollectionChange();
    }
    setControl(t, e, i = {}) {
      this.controls[t] &&
        this.controls[t]._registerOnCollectionChange(() => {}),
        delete this.controls[t],
        e && this.registerControl(t, e),
        this.updateValueAndValidity({ emitEvent: i.emitEvent }),
        this._onCollectionChange();
    }
    contains(t) {
      return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
    }
    setValue(t, e = {}) {
      _t(this, !0, t),
        Object.keys(t).forEach((i) => {
          mt(this, !0, i),
            this.controls[i].setValue(t[i], {
              onlySelf: !0,
              emitEvent: e.emitEvent,
            });
        }),
        this.updateValueAndValidity(e);
    }
    patchValue(t, e = {}) {
      t != null &&
        (Object.keys(t).forEach((i) => {
          let r = this.controls[i];
          r && r.patchValue(t[i], { onlySelf: !0, emitEvent: e.emitEvent });
        }),
        this.updateValueAndValidity(e));
    }
    reset(t = {}, e = {}) {
      this._forEachChild((i, r) => {
        i.reset(t ? t[r] : null, { onlySelf: !0, emitEvent: e.emitEvent });
      }),
        this._updatePristine(e, this),
        this._updateTouched(e, this),
        this.updateValueAndValidity(e);
    }
    getRawValue() {
      return this._reduceChildren(
        {},
        (t, e, i) => ((t[i] = e.getRawValue()), t),
      );
    }
    _syncPendingControls() {
      let t = this._reduceChildren(!1, (e, i) =>
        i._syncPendingControls() ? !0 : e,
      );
      return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
    }
    _forEachChild(t) {
      Object.keys(this.controls).forEach((e) => {
        let i = this.controls[e];
        i && t(i, e);
      });
    }
    _setUpControls() {
      this._forEachChild((t) => {
        t.setParent(this),
          t._registerOnCollectionChange(this._onCollectionChange);
      });
    }
    _updateValue() {
      this.value = this._reduceValue();
    }
    _anyControls(t) {
      for (let [e, i] of Object.entries(this.controls))
        if (this.contains(e) && t(i)) return !0;
      return !1;
    }
    _reduceValue() {
      let t = {};
      return this._reduceChildren(
        t,
        (e, i, r) => ((i.enabled || this.disabled) && (e[r] = i.value), e),
      );
    }
    _reduceChildren(t, e) {
      let i = t;
      return (
        this._forEachChild((r, o) => {
          i = e(i, r, o);
        }),
        i
      );
    }
    _allControlsDisabled() {
      for (let t of Object.keys(this.controls))
        if (this.controls[t].enabled) return !1;
      return Object.keys(this.controls).length > 0 || this.disabled;
    }
    _find(t) {
      return this.controls.hasOwnProperty(t) ? this.controls[t] : null;
    }
  };
var ee = new V("", { providedIn: "root", factory: () => fe }),
  fe = "always";
function vt(n, t) {
  return [...t.path, n];
}
function X(n, t, e = fe) {
  pe(n, t),
    t.valueAccessor.writeValue(n.value),
    (n.disabled || e === "always") &&
      t.valueAccessor.setDisabledState?.(n.disabled),
    Ct(n, t),
    Dt(n, t),
    Vt(n, t),
    yt(n, t);
}
function Ee(n, t, e = !0) {
  let i = () => {};
  t.valueAccessor &&
    (t.valueAccessor.registerOnChange(i), t.valueAccessor.registerOnTouched(i)),
    K(n, t),
    n &&
      (t._invokeOnDestroyCallbacks(), n._registerOnCollectionChange(() => {}));
}
function Y(n, t) {
  n.forEach((e) => {
    e.registerOnValidatorChange && e.registerOnValidatorChange(t);
  });
}
function yt(n, t) {
  if (t.valueAccessor.setDisabledState) {
    let e = (i) => {
      t.valueAccessor.setDisabledState(i);
    };
    n.registerOnDisabledChange(e),
      t._registerOnDestroy(() => {
        n._unregisterOnDisabledChange(e);
      });
  }
}
function pe(n, t) {
  let e = $e(n);
  t.validator !== null
    ? n.setValidators(be(e, t.validator))
    : typeof e == "function" && n.setValidators([e]);
  let i = We(n);
  t.asyncValidator !== null
    ? n.setAsyncValidators(be(i, t.asyncValidator))
    : typeof i == "function" && n.setAsyncValidators([i]);
  let r = () => n.updateValueAndValidity();
  Y(t._rawValidators, r), Y(t._rawAsyncValidators, r);
}
function K(n, t) {
  let e = !1;
  if (n !== null) {
    if (t.validator !== null) {
      let r = $e(n);
      if (Array.isArray(r) && r.length > 0) {
        let o = r.filter((s) => s !== t.validator);
        o.length !== r.length && ((e = !0), n.setValidators(o));
      }
    }
    if (t.asyncValidator !== null) {
      let r = We(n);
      if (Array.isArray(r) && r.length > 0) {
        let o = r.filter((s) => s !== t.asyncValidator);
        o.length !== r.length && ((e = !0), n.setAsyncValidators(o));
      }
    }
  }
  let i = () => {};
  return Y(t._rawValidators, i), Y(t._rawAsyncValidators, i), e;
}
function Ct(n, t) {
  t.valueAccessor.registerOnChange((e) => {
    (n._pendingValue = e),
      (n._pendingChange = !0),
      (n._pendingDirty = !0),
      n.updateOn === "change" && Ze(n, t);
  });
}
function Vt(n, t) {
  t.valueAccessor.registerOnTouched(() => {
    (n._pendingTouched = !0),
      n.updateOn === "blur" && n._pendingChange && Ze(n, t),
      n.updateOn !== "submit" && n.markAsTouched();
  });
}
function Ze(n, t) {
  n._pendingDirty && n.markAsDirty(),
    n.setValue(n._pendingValue, { emitModelToViewChange: !1 }),
    t.viewToModelUpdate(n._pendingValue),
    (n._pendingChange = !1);
}
function Dt(n, t) {
  let e = (i, r) => {
    t.valueAccessor.writeValue(i), r && t.viewToModelUpdate(i);
  };
  n.registerOnChange(e),
    t._registerOnDestroy(() => {
      n._unregisterOnChange(e);
    });
}
function Xe(n, t) {
  n == null, pe(n, t);
}
function bt(n, t) {
  return K(n, t);
}
function Mt(n, t) {
  if (!n.hasOwnProperty("model")) return !1;
  let e = n.model;
  return e.isFirstChange() ? !0 : !Object.is(t, e.currentValue);
}
function At(n) {
  return Object.getPrototypeOf(n.constructor) === J;
}
function Ye(n, t) {
  n._syncPendingControls(),
    t.forEach((e) => {
      let i = e.control;
      i.updateOn === "submit" &&
        i._pendingChange &&
        (e.viewToModelUpdate(i._pendingValue), (i._pendingChange = !1));
    });
}
function Et(n, t) {
  if (!t) return null;
  Array.isArray(t);
  let e, i, r;
  return (
    t.forEach((o) => {
      o.constructor === Oe ? (e = o) : At(o) ? (i = o) : (r = o);
    }),
    r || i || e || null
  );
}
function Ft(n, t) {
  let e = n.indexOf(t);
  e > -1 && n.splice(e, 1);
}
var wt = { provide: v, useExisting: c(() => It) },
  O = Promise.resolve(),
  It = (() => {
    class n extends v {
      callSetDisabledState;
      get submitted() {
        return g(this.submittedReactive);
      }
      _submitted = M(() => this.submittedReactive());
      submittedReactive = b(!1);
      _directives = new Set();
      form;
      ngSubmit = new D();
      options;
      constructor(e, i, r) {
        super(),
          (this.callSetDisabledState = r),
          (this.form = new Z({}, ce(e), he(i)));
      }
      ngAfterViewInit() {
        this._setUpdateStrategy();
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      get controls() {
        return this.form.controls;
      }
      addControl(e) {
        O.then(() => {
          let i = this._findContainer(e.path);
          (e.control = i.registerControl(e.name, e.control)),
            X(e.control, e, this.callSetDisabledState),
            e.control.updateValueAndValidity({ emitEvent: !1 }),
            this._directives.add(e);
        });
      }
      getControl(e) {
        return this.form.get(e.path);
      }
      removeControl(e) {
        O.then(() => {
          let i = this._findContainer(e.path);
          i && i.removeControl(e.name), this._directives.delete(e);
        });
      }
      addFormGroup(e) {
        O.then(() => {
          let i = this._findContainer(e.path),
            r = new Z({});
          Xe(r, e),
            i.registerControl(e.name, r),
            r.updateValueAndValidity({ emitEvent: !1 });
        });
      }
      removeFormGroup(e) {
        O.then(() => {
          let i = this._findContainer(e.path);
          i && i.removeControl(e.name);
        });
      }
      getFormGroup(e) {
        return this.form.get(e.path);
      }
      updateModel(e, i) {
        O.then(() => {
          this.form.get(e.path).setValue(i);
        });
      }
      setValue(e) {
        this.control.setValue(e);
      }
      onSubmit(e) {
        return (
          this.submittedReactive.set(!0),
          Ye(this.form, this._directives),
          this.ngSubmit.emit(e),
          e?.target?.method === "dialog"
        );
      }
      onReset() {
        this.resetForm();
      }
      resetForm(e = void 0) {
        this.form.reset(e), this.submittedReactive.set(!1);
      }
      _setUpdateStrategy() {
        this.options &&
          this.options.updateOn != null &&
          (this.form._updateOn = this.options.updateOn);
      }
      _findContainer(e) {
        return e.pop(), e.length ? this.form.get(e) : this.form;
      }
      static ɵfac = function (i) {
        return new (i || n)(a(F, 10), a(de, 10), a(ee, 8));
      };
      static ɵdir = l({
        type: n,
        selectors: [
          ["form", 3, "ngNoForm", "", 3, "formGroup", ""],
          ["ng-form"],
          ["", "ngForm", ""],
        ],
        hostBindings: function (i, r) {
          i & 1 &&
            C("submit", function (s) {
              return r.onSubmit(s);
            })("reset", function () {
              return r.onReset();
            });
        },
        inputs: { options: [0, "ngFormOptions", "options"] },
        outputs: { ngSubmit: "ngSubmit" },
        exportAs: ["ngForm"],
        standalone: !1,
        features: [h([wt]), u],
      });
    }
    return n;
  })();
function Fe(n, t) {
  let e = n.indexOf(t);
  e > -1 && n.splice(e, 1);
}
function we(n) {
  return (
    typeof n == "object" &&
    n !== null &&
    Object.keys(n).length === 2 &&
    "value" in n &&
    "disabled" in n
  );
}
var Ke = class extends z {
  defaultValue = null;
  _onChange = [];
  _pendingValue;
  _pendingChange = !1;
  constructor(t = null, e, i) {
    super(qe(e), ze(i, e)),
      this._applyFormState(t),
      this._setUpdateStrategy(e),
      this._initObservables(),
      this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !!this.asyncValidator,
      }),
      Q(e) &&
        (e.nonNullable || e.initialValueIsDefault) &&
        (we(t) ? (this.defaultValue = t.value) : (this.defaultValue = t));
  }
  setValue(t, e = {}) {
    (this.value = this._pendingValue = t),
      this._onChange.length &&
        e.emitModelToViewChange !== !1 &&
        this._onChange.forEach((i) =>
          i(this.value, e.emitViewToModelChange !== !1),
        ),
      this.updateValueAndValidity(e);
  }
  patchValue(t, e = {}) {
    this.setValue(t, e);
  }
  reset(t = this.defaultValue, e = {}) {
    this._applyFormState(t),
      this.markAsPristine(e),
      this.markAsUntouched(e),
      this.setValue(this.value, e),
      (this._pendingChange = !1);
  }
  _updateValue() {}
  _anyControls(t) {
    return !1;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(t) {
    this._onChange.push(t);
  }
  _unregisterOnChange(t) {
    Fe(this._onChange, t);
  }
  registerOnDisabledChange(t) {
    this._onDisabledChange.push(t);
  }
  _unregisterOnDisabledChange(t) {
    Fe(this._onDisabledChange, t);
  }
  _forEachChild(t) {}
  _syncPendingControls() {
    return this.updateOn === "submit" &&
      (this._pendingDirty && this.markAsDirty(),
      this._pendingTouched && this.markAsTouched(),
      this._pendingChange)
      ? (this.setValue(this._pendingValue, {
          onlySelf: !0,
          emitModelToViewChange: !1,
        }),
        !0)
      : !1;
  }
  _applyFormState(t) {
    we(t)
      ? ((this.value = this._pendingValue = t.value),
        t.disabled
          ? this.disable({ onlySelf: !0, emitEvent: !1 })
          : this.enable({ onlySelf: !0, emitEvent: !1 }))
      : (this.value = this._pendingValue = t);
  }
};
var St = (n) => n instanceof Ke;
var Nt = { provide: k, useExisting: c(() => Ot) },
  Ie = Promise.resolve(),
  Ot = (() => {
    class n extends k {
      _changeDetectorRef;
      callSetDisabledState;
      control = new Ke();
      static ngAcceptInputType_isDisabled;
      _registered = !1;
      viewModel;
      name = "";
      isDisabled;
      model;
      options;
      update = new D();
      constructor(e, i, r, o, s, p) {
        super(),
          (this._changeDetectorRef = s),
          (this.callSetDisabledState = p),
          (this._parent = e),
          this._setValidators(i),
          this._setAsyncValidators(r),
          (this.valueAccessor = Et(this, o));
      }
      ngOnChanges(e) {
        if ((this._checkForErrors(), !this._registered || "name" in e)) {
          if (this._registered && (this._checkName(), this.formDirective)) {
            let i = e.name.previousValue;
            this.formDirective.removeControl({
              name: i,
              path: this._getPath(i),
            });
          }
          this._setUpControl();
        }
        "isDisabled" in e && this._updateDisabled(e),
          Mt(e, this.viewModel) &&
            (this._updateValue(this.model), (this.viewModel = this.model));
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeControl(this);
      }
      get path() {
        return this._getPath(this.name);
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      viewToModelUpdate(e) {
        (this.viewModel = e), this.update.emit(e);
      }
      _setUpControl() {
        this._setUpdateStrategy(),
          this._isStandalone()
            ? this._setUpStandalone()
            : this.formDirective.addControl(this),
          (this._registered = !0);
      }
      _setUpdateStrategy() {
        this.options &&
          this.options.updateOn != null &&
          (this.control._updateOn = this.options.updateOn);
      }
      _isStandalone() {
        return !this._parent || !!(this.options && this.options.standalone);
      }
      _setUpStandalone() {
        X(this.control, this, this.callSetDisabledState),
          this.control.updateValueAndValidity({ emitEvent: !1 });
      }
      _checkForErrors() {
        this._checkName();
      }
      _checkParentType() {}
      _checkName() {
        this.options && this.options.name && (this.name = this.options.name),
          !this._isStandalone() && this.name;
      }
      _updateValue(e) {
        Ie.then(() => {
          this.control.setValue(e, { emitViewToModelChange: !1 }),
            this._changeDetectorRef?.markForCheck();
        });
      }
      _updateDisabled(e) {
        let i = e.isDisabled.currentValue,
          r = i !== 0 && B(i);
        Ie.then(() => {
          r && !this.control.disabled
            ? this.control.disable()
            : !r && this.control.disabled && this.control.enable(),
            this._changeDetectorRef?.markForCheck();
        });
      }
      _getPath(e) {
        return this._parent ? vt(e, this._parent) : [e];
      }
      static ɵfac = function (i) {
        return new (i || n)(
          a(v, 9),
          a(F, 10),
          a(de, 10),
          a(G, 10),
          a(Ve, 8),
          a(ee, 8),
        );
      };
      static ɵdir = l({
        type: n,
        selectors: [
          ["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""],
        ],
        inputs: {
          name: "name",
          isDisabled: [0, "disabled", "isDisabled"],
          model: [0, "ngModel", "model"],
          options: [0, "ngModelOptions", "options"],
        },
        outputs: { update: "ngModelChange" },
        exportAs: ["ngModel"],
        standalone: !1,
        features: [h([Nt]), u, j],
      });
    }
    return n;
  })(),
  vn = (() => {
    class n {
      static ɵfac = function (i) {
        return new (i || n)();
      };
      static ɵdir = l({
        type: n,
        selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
        hostAttrs: ["novalidate", ""],
        standalone: !1,
      });
    }
    return n;
  })();
var xt = { provide: v, useExisting: c(() => Pt) },
  Pt = (() => {
    class n extends v {
      callSetDisabledState;
      get submitted() {
        return g(this._submittedReactive);
      }
      set submitted(e) {
        this._submittedReactive.set(e);
      }
      _submitted = M(() => this._submittedReactive());
      _submittedReactive = b(!1);
      _oldForm;
      _onCollectionChange = () => this._updateDomValue();
      directives = [];
      form = null;
      ngSubmit = new D();
      constructor(e, i, r) {
        super(),
          (this.callSetDisabledState = r),
          this._setValidators(e),
          this._setAsyncValidators(i);
      }
      ngOnChanges(e) {
        e.hasOwnProperty("form") &&
          (this._updateValidators(),
          this._updateDomValue(),
          this._updateRegistrations(),
          (this._oldForm = this.form));
      }
      ngOnDestroy() {
        this.form &&
          (K(this.form, this),
          this.form._onCollectionChange === this._onCollectionChange &&
            this.form._registerOnCollectionChange(() => {}));
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      addControl(e) {
        let i = this.form.get(e.path);
        return (
          X(i, e, this.callSetDisabledState),
          i.updateValueAndValidity({ emitEvent: !1 }),
          this.directives.push(e),
          i
        );
      }
      getControl(e) {
        return this.form.get(e.path);
      }
      removeControl(e) {
        Ee(e.control || null, e, !1), Ft(this.directives, e);
      }
      addFormGroup(e) {
        this._setUpFormContainer(e);
      }
      removeFormGroup(e) {
        this._cleanUpFormContainer(e);
      }
      getFormGroup(e) {
        return this.form.get(e.path);
      }
      addFormArray(e) {
        this._setUpFormContainer(e);
      }
      removeFormArray(e) {
        this._cleanUpFormContainer(e);
      }
      getFormArray(e) {
        return this.form.get(e.path);
      }
      updateModel(e, i) {
        this.form.get(e.path).setValue(i);
      }
      onSubmit(e) {
        return (
          this._submittedReactive.set(!0),
          Ye(this.form, this.directives),
          this.ngSubmit.emit(e),
          this.form._events.next(new le(this.control)),
          e?.target?.method === "dialog"
        );
      }
      onReset() {
        this.resetForm();
      }
      resetForm(e = void 0) {
        this.form.reset(e),
          this._submittedReactive.set(!1),
          this.form._events.next(new ue(this.form));
      }
      _updateDomValue() {
        this.directives.forEach((e) => {
          let i = e.control,
            r = this.form.get(e.path);
          i !== r &&
            (Ee(i || null, e),
            St(r) && (X(r, e, this.callSetDisabledState), (e.control = r)));
        }),
          this.form._updateTreeValidity({ emitEvent: !1 });
      }
      _setUpFormContainer(e) {
        let i = this.form.get(e.path);
        Xe(i, e), i.updateValueAndValidity({ emitEvent: !1 });
      }
      _cleanUpFormContainer(e) {
        if (this.form) {
          let i = this.form.get(e.path);
          i && bt(i, e) && i.updateValueAndValidity({ emitEvent: !1 });
        }
      }
      _updateRegistrations() {
        this.form._registerOnCollectionChange(this._onCollectionChange),
          this._oldForm && this._oldForm._registerOnCollectionChange(() => {});
      }
      _updateValidators() {
        pe(this.form, this), this._oldForm && K(this._oldForm, this);
      }
      static ɵfac = function (i) {
        return new (i || n)(a(F, 10), a(de, 10), a(ee, 8));
      };
      static ɵdir = l({
        type: n,
        selectors: [["", "formGroup", ""]],
        hostBindings: function (i, r) {
          i & 1 &&
            C("submit", function (s) {
              return r.onSubmit(s);
            })("reset", function () {
              return r.onReset();
            });
        },
        inputs: { form: [0, "formGroup", "form"] },
        outputs: { ngSubmit: "ngSubmit" },
        exportAs: ["ngForm"],
        standalone: !1,
        features: [h([xt]), u, j],
      });
    }
    return n;
  })();
var kt = { provide: G, useExisting: c(() => Qe), multi: !0 };
function Je(n, t) {
  return n == null
    ? `${t}`
    : (t && typeof t == "object" && (t = "Object"), `${n}: ${t}`.slice(0, 50));
}
function Gt(n) {
  return n.split(":")[0];
}
var Qe = (() => {
    class n extends J {
      value;
      _optionMap = new Map();
      _idCounter = 0;
      set compareWith(e) {
        this._compareWith = e;
      }
      _compareWith = Object.is;
      writeValue(e) {
        this.value = e;
        let i = this._getOptionId(e),
          r = Je(i, e);
        this.setProperty("value", r);
      }
      registerOnChange(e) {
        this.onChange = (i) => {
          (this.value = this._getOptionValue(i)), e(this.value);
        };
      }
      _registerOption() {
        return (this._idCounter++).toString();
      }
      _getOptionId(e) {
        for (let i of this._optionMap.keys())
          if (this._compareWith(this._optionMap.get(i), e)) return i;
        return null;
      }
      _getOptionValue(e) {
        let i = Gt(e);
        return this._optionMap.has(i) ? this._optionMap.get(i) : e;
      }
      static ɵfac = (() => {
        let e;
        return function (r) {
          return (e || (e = m(n)))(r || n);
        };
      })();
      static ɵdir = l({
        type: n,
        selectors: [
          ["select", "formControlName", "", 3, "multiple", ""],
          ["select", "formControl", "", 3, "multiple", ""],
          ["select", "ngModel", "", 3, "multiple", ""],
        ],
        hostBindings: function (i, r) {
          i & 1 &&
            C("change", function (s) {
              return r.onChange(s.target.value);
            })("blur", function () {
              return r.onTouched();
            });
        },
        inputs: { compareWith: "compareWith" },
        standalone: !1,
        features: [h([kt]), u],
      });
    }
    return n;
  })(),
  yn = (() => {
    class n {
      _element;
      _renderer;
      _select;
      id;
      constructor(e, i, r) {
        (this._element = e),
          (this._renderer = i),
          (this._select = r),
          this._select && (this.id = this._select._registerOption());
      }
      set ngValue(e) {
        this._select != null &&
          (this._select._optionMap.set(this.id, e),
          this._setElementValue(Je(this.id, e)),
          this._select.writeValue(this._select.value));
      }
      set value(e) {
        this._setElementValue(e),
          this._select && this._select.writeValue(this._select.value);
      }
      _setElementValue(e) {
        this._renderer.setProperty(this._element.nativeElement, "value", e);
      }
      ngOnDestroy() {
        this._select &&
          (this._select._optionMap.delete(this.id),
          this._select.writeValue(this._select.value));
      }
      static ɵfac = function (i) {
        return new (i || n)(a(w), a(I), a(Qe, 9));
      };
      static ɵdir = l({
        type: n,
        selectors: [["option"]],
        inputs: { ngValue: "ngValue", value: "value" },
        standalone: !1,
      });
    }
    return n;
  })(),
  Rt = { provide: G, useExisting: c(() => et), multi: !0 };
function Se(n, t) {
  return n == null
    ? `${t}`
    : (typeof t == "string" && (t = `'${t}'`),
      t && typeof t == "object" && (t = "Object"),
      `${n}: ${t}`.slice(0, 50));
}
function Tt(n) {
  return n.split(":")[0];
}
var et = (() => {
    class n extends J {
      value;
      _optionMap = new Map();
      _idCounter = 0;
      set compareWith(e) {
        this._compareWith = e;
      }
      _compareWith = Object.is;
      writeValue(e) {
        this.value = e;
        let i;
        if (Array.isArray(e)) {
          let r = e.map((o) => this._getOptionId(o));
          i = (o, s) => {
            o._setSelected(r.indexOf(s.toString()) > -1);
          };
        } else
          i = (r, o) => {
            r._setSelected(!1);
          };
        this._optionMap.forEach(i);
      }
      registerOnChange(e) {
        this.onChange = (i) => {
          let r = [],
            o = i.selectedOptions;
          if (o !== void 0) {
            let s = o;
            for (let p = 0; p < s.length; p++) {
              let R = s[p],
                te = this._getOptionValue(R.value);
              r.push(te);
            }
          } else {
            let s = i.options;
            for (let p = 0; p < s.length; p++) {
              let R = s[p];
              if (R.selected) {
                let te = this._getOptionValue(R.value);
                r.push(te);
              }
            }
          }
          (this.value = r), e(r);
        };
      }
      _registerOption(e) {
        let i = (this._idCounter++).toString();
        return this._optionMap.set(i, e), i;
      }
      _getOptionId(e) {
        for (let i of this._optionMap.keys())
          if (this._compareWith(this._optionMap.get(i)._value, e)) return i;
        return null;
      }
      _getOptionValue(e) {
        let i = Tt(e);
        return this._optionMap.has(i) ? this._optionMap.get(i)._value : e;
      }
      static ɵfac = (() => {
        let e;
        return function (r) {
          return (e || (e = m(n)))(r || n);
        };
      })();
      static ɵdir = l({
        type: n,
        selectors: [
          ["select", "multiple", "", "formControlName", ""],
          ["select", "multiple", "", "formControl", ""],
          ["select", "multiple", "", "ngModel", ""],
        ],
        hostBindings: function (i, r) {
          i & 1 &&
            C("change", function (s) {
              return r.onChange(s.target);
            })("blur", function () {
              return r.onTouched();
            });
        },
        inputs: { compareWith: "compareWith" },
        standalone: !1,
        features: [h([Rt]), u],
      });
    }
    return n;
  })(),
  Cn = (() => {
    class n {
      _element;
      _renderer;
      _select;
      id;
      _value;
      constructor(e, i, r) {
        (this._element = e),
          (this._renderer = i),
          (this._select = r),
          this._select && (this.id = this._select._registerOption(this));
      }
      set ngValue(e) {
        this._select != null &&
          ((this._value = e),
          this._setElementValue(Se(this.id, e)),
          this._select.writeValue(this._select.value));
      }
      set value(e) {
        this._select
          ? ((this._value = e),
            this._setElementValue(Se(this.id, e)),
            this._select.writeValue(this._select.value))
          : this._setElementValue(e);
      }
      _setElementValue(e) {
        this._renderer.setProperty(this._element.nativeElement, "value", e);
      }
      _setSelected(e) {
        this._renderer.setProperty(this._element.nativeElement, "selected", e);
      }
      ngOnDestroy() {
        this._select &&
          (this._select._optionMap.delete(this.id),
          this._select.writeValue(this._select.value));
      }
      static ɵfac = function (i) {
        return new (i || n)(a(w), a(I), a(et, 9));
      };
      static ɵdir = l({
        type: n,
        selectors: [["option"]],
        inputs: { ngValue: "ngValue", value: "value" },
        standalone: !1,
      });
    }
    return n;
  })();
function jt(n) {
  return typeof n == "number" ? n : parseInt(n, 10);
}
var ge = (() => {
  class n {
    _validator = H;
    _onChange;
    _enabled;
    ngOnChanges(e) {
      if (this.inputName in e) {
        let i = this.normalizeInput(e[this.inputName].currentValue);
        (this._enabled = this.enabled(i)),
          (this._validator = this._enabled ? this.createValidator(i) : H),
          this._onChange && this._onChange();
      }
    }
    validate(e) {
      return this._validator(e);
    }
    registerOnValidatorChange(e) {
      this._onChange = e;
    }
    enabled(e) {
      return e != null;
    }
    static ɵfac = function (i) {
      return new (i || n)();
    };
    static ɵdir = l({ type: n, features: [j] });
  }
  return n;
})();
var Bt = { provide: F, useExisting: c(() => Ut), multi: !0 };
var Ut = (() => {
  class n extends ge {
    required;
    inputName = "required";
    normalizeInput = B;
    createValidator = (e) => Pe;
    enabled(e) {
      return e;
    }
    static ɵfac = (() => {
      let e;
      return function (r) {
        return (e || (e = m(n)))(r || n);
      };
    })();
    static ɵdir = l({
      type: n,
      selectors: [
        ["", "required", "", "formControlName", "", 3, "type", "checkbox"],
        ["", "required", "", "formControl", "", 3, "type", "checkbox"],
        ["", "required", "", "ngModel", "", 3, "type", "checkbox"],
      ],
      hostVars: 1,
      hostBindings: function (i, r) {
        i & 2 && re("required", r._enabled ? "" : null);
      },
      inputs: { required: "required" },
      standalone: !1,
      features: [h([Bt]), u],
    });
  }
  return n;
})();
var Ht = { provide: F, useExisting: c(() => Lt), multi: !0 },
  Lt = (() => {
    class n extends ge {
      email;
      inputName = "email";
      normalizeInput = B;
      createValidator = (e) => ke;
      enabled(e) {
        return e;
      }
      static ɵfac = (() => {
        let e;
        return function (r) {
          return (e || (e = m(n)))(r || n);
        };
      })();
      static ɵdir = l({
        type: n,
        selectors: [
          ["", "email", "", "formControlName", ""],
          ["", "email", "", "formControl", ""],
          ["", "email", "", "ngModel", ""],
        ],
        inputs: { email: "email" },
        standalone: !1,
        features: [h([Ht]), u],
      });
    }
    return n;
  })(),
  $t = { provide: F, useExisting: c(() => Wt), multi: !0 },
  Wt = (() => {
    class n extends ge {
      minlength;
      inputName = "minlength";
      normalizeInput = (e) => jt(e);
      createValidator = (e) => Ge(e);
      static ɵfac = (() => {
        let e;
        return function (r) {
          return (e || (e = m(n)))(r || n);
        };
      })();
      static ɵdir = l({
        type: n,
        selectors: [
          ["", "minlength", "", "formControlName", ""],
          ["", "minlength", "", "formControl", ""],
          ["", "minlength", "", "ngModel", ""],
        ],
        hostVars: 1,
        hostBindings: function (i, r) {
          i & 2 && re("minlength", r._enabled ? r.minlength : null);
        },
        inputs: { minlength: "minlength" },
        standalone: !1,
        features: [h([$t]), u],
      });
    }
    return n;
  })();
var qt = (() => {
  class n {
    static ɵfac = function (i) {
      return new (i || n)();
    };
    static ɵmod = ie({ type: n });
    static ɵinj = ne({});
  }
  return n;
})();
var Vn = (() => {
  class n {
    static withConfig(e) {
      return {
        ngModule: n,
        providers: [{ provide: ee, useValue: e.callSetDisabledState ?? fe }],
      };
    }
    static ɵfac = function (i) {
      return new (i || n)();
    };
    static ɵmod = ie({ type: n });
    static ɵinj = ne({ imports: [qt] });
  }
  return n;
})();
export {
  nt as a,
  Oe as b,
  De as c,
  k as d,
  gn as e,
  mn as f,
  It as g,
  Ot as h,
  vn as i,
  Pt as j,
  Qe as k,
  yn as l,
  Cn as m,
  Ut as n,
  Lt as o,
  Wt as p,
  Vn as q,
};
