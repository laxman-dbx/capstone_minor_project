import { a as j } from "./chunk-5QNQV3N7.js";
import {
  b as V,
  e as N,
  f as k,
  g as q,
  h as F,
  i as R,
  n as W,
  o as A,
  p as D,
  q as L,
} from "./chunk-ZOHBZ4HP.js";
import "./chunk-2PQBQFV5.js";
import { h as T } from "./chunk-GTDEETYW.js";
import "./chunk-UD6YS3BW.js";
import { c as P, d as E, f as O } from "./chunk-E5QSSROS.js";
import "./chunk-6GCQ5O75.js";
import "./chunk-6FEKEJIW.js";
import {
  $a as s,
  $b as S,
  Db as n,
  Eb as i,
  Fc as I,
  Ib as h,
  Jc as y,
  Lb as M,
  Mb as C,
  Vb as m,
  Wb as o,
  ac as v,
  bc as x,
  e as b,
  fb as _,
  mb as w,
  oa as u,
  pa as f,
  rb as g,
  yb as l,
} from "./chunk-4KGF3EVT.js";
function B(e, r) {
  e & 1 && (n(0, "span"), o(1, "Email is required."), i());
}
function G(e, r) {
  e & 1 && (n(0, "span"), o(1, "Enter a valid email."), i());
}
function U(e, r) {
  if (
    (e & 1 &&
      (n(0, "div", 16), g(1, B, 2, 0, "span", 17)(2, G, 2, 0, "span", 17), i()),
    e & 2)
  ) {
    C();
    let t = m(10);
    s(),
      l("ngIf", t.errors == null ? null : t.errors.required),
      s(),
      l("ngIf", t.errors == null ? null : t.errors.email);
  }
}
function H(e, r) {
  e & 1 && (n(0, "span"), o(1, "Password is required."), i());
}
function J(e, r) {
  e & 1 && (n(0, "span"), o(1, "Password must be at least 6 characters."), i());
}
function K(e, r) {
  if (
    (e & 1 &&
      (n(0, "div", 16), g(1, H, 2, 0, "span", 17)(2, J, 2, 0, "span", 17), i()),
    e & 2)
  ) {
    C();
    let t = m(16);
    s(),
      l("ngIf", t.errors == null ? null : t.errors.required),
      s(),
      l("ngIf", t.errors == null ? null : t.errors.minlength);
  }
}
var z = class e {
  constructor(r, t, d) {
    this.authService = r;
    this.router = t;
    this.toastr = d;
  }
  enteredEmail = "";
  enteredPassword = "";
  errorMessage = "";
  onSubmit() {
    return b(this, null, function* () {
      try {
        let r = { email: this.enteredEmail, password: this.enteredPassword },
          t = yield this.authService.signIn(r);
        this.toastr.success("SignIn SuccessFul", "", {
          positionClass: "toast-top-center",
        }),
          (window.location.href = "/dashboard");
      } catch (r) {
        (this.errorMessage = r.message || "Invalid credentials!"),
          this.toastr.error(r.message, "", {
            positionClass: "toast-top-center",
          });
      }
    });
  }
  static ɵfac = function (t) {
    return new (t || e)(_(j), _(P), _(T));
  };
  static ɵcmp = w({
    type: e,
    selectors: [["app-sign-in"]],
    decls: 25,
    vars: 5,
    consts: [
      ["signInForm", "ngForm"],
      ["emailCtrl", "ngModel"],
      ["passwordCtrl", "ngModel"],
      [1, "container"],
      [1, "sign-in"],
      [1, "text-center"],
      [3, "ngSubmit"],
      [1, "form-group"],
      ["for", "email"],
      [
        "type",
        "email",
        "name",
        "email",
        "id",
        "email",
        "required",
        "",
        "email",
        "",
        3,
        "ngModelChange",
        "ngModel",
      ],
      ["class", "error-text", 4, "ngIf"],
      ["for", "password"],
      [
        "type",
        "password",
        "name",
        "password",
        "id",
        "password",
        "required",
        "",
        "minlength",
        "6",
        3,
        "ngModelChange",
        "ngModel",
      ],
      ["type", "submit", 1, "btn", 3, "disabled"],
      [1, "redirect"],
      ["routerLink", "/sign-up"],
      [1, "error-text"],
      [4, "ngIf"],
    ],
    template: function (t, d) {
      if (t & 1) {
        let p = h();
        n(0, "div", 3)(1, "div", 4)(2, "h2", 5),
          o(3, "Sign In"),
          i(),
          n(4, "form", 6, 0),
          M("ngSubmit", function () {
            return u(p), f(d.onSubmit());
          }),
          n(6, "div", 7)(7, "label", 8),
          o(8, "Email:"),
          i(),
          n(9, "input", 9, 1),
          x("ngModelChange", function (a) {
            return u(p), v(d.enteredEmail, a) || (d.enteredEmail = a), f(a);
          }),
          i(),
          g(11, U, 3, 2, "div", 10),
          i(),
          n(12, "div", 7)(13, "label", 11),
          o(14, "Password:"),
          i(),
          n(15, "input", 12, 2),
          x("ngModelChange", function (a) {
            return (
              u(p), v(d.enteredPassword, a) || (d.enteredPassword = a), f(a)
            );
          }),
          i(),
          g(17, K, 3, 2, "div", 10),
          i(),
          n(18, "button", 13),
          o(19, " Sign In "),
          i()(),
          n(20, "div", 14)(21, "span"),
          o(22, "Don't have an account? "),
          n(23, "a", 15),
          o(24, "Sign Up"),
          i()()()()();
      }
      if (t & 2) {
        let p = m(5),
          c = m(10),
          a = m(16);
        s(9),
          S("ngModel", d.enteredEmail),
          s(2),
          l("ngIf", c.invalid && c.touched),
          s(4),
          S("ngModel", d.enteredPassword),
          s(2),
          l("ngIf", a.invalid && a.touched),
          s(),
          l("disabled", p.invalid);
      }
    },
    dependencies: [L, R, V, N, k, W, D, A, F, q, y, I, O, E],
    styles: [
      "body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f4f4f4;margin:0;padding:0}.container[_ngcontent-%COMP%]{width:100%;max-width:400px;margin:50px auto;padding:20px}.sign-in[_ngcontent-%COMP%]{background:#fff;padding:20px;border-radius:10px;box-shadow:0 0 10px #0000001a}.text-center[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.form-group[_ngcontent-%COMP%]{margin-bottom:15px}label[_ngcontent-%COMP%]{display:block;font-weight:700;margin-bottom:5px}input[_ngcontent-%COMP%]{width:100%;padding:8px;border:1px solid #ccc;border-radius:5px}.error-text[_ngcontent-%COMP%]{color:red;font-size:12px;margin-top:5px}.btn[_ngcontent-%COMP%]{width:100%;padding:10px;background-color:#3b82f6;border:none;color:#fff;font-size:16px;border-radius:5px;cursor:pointer;transition:.3s}.btn[_ngcontent-%COMP%]:disabled{background-color:#6c757d;cursor:not-allowed}.btn[_ngcontent-%COMP%]:hover{background-color:#2b5dad}.redirect[_ngcontent-%COMP%]{text-align:center;margin-top:10px}.redirect[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3b82f6;text-decoration:none}.redirect[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}",
    ],
  });
};
export { z as SignInComponent };
