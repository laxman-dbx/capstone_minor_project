import { a as W } from "./chunk-YJGY2TV4.js";
import {
  b as I,
  e as A,
  f as O,
  g as L,
  h as T,
  i as V,
  n as N,
  o as q,
  p as F,
  q as k,
} from "./chunk-ZOHBZ4HP.js";
import { h as E } from "./chunk-GTDEETYW.js";
import "./chunk-2PQBQFV5.js";
import "./chunk-UD6YS3BW.js";
import "./chunk-6GCQ5O75.js";
import "./chunk-OMR3M7LI.js";
import {
  $a as a,
  $b as x,
  Db as i,
  Eb as t,
  Fc as y,
  Ib as S,
  Jc as P,
  Lb as h,
  Mb as C,
  Vb as m,
  Wb as d,
  ac as v,
  bc as w,
  e as b,
  fb as _,
  mb as M,
  oa as u,
  pa as f,
  rb as g,
  yb as s,
} from "./chunk-4KGF3EVT.js";
function j(e, r) {
  e & 1 && (i(0, "span"), d(1, "Email is required."), t());
}
function z(e, r) {
  e & 1 && (i(0, "span"), d(1, "Enter a valid email."), t());
}
function B(e, r) {
  if (
    (e & 1 &&
      (i(0, "div", 14), g(1, j, 2, 0, "span", 15)(2, z, 2, 0, "span", 15), t()),
    e & 2)
  ) {
    C();
    let n = m(10);
    a(),
      s("ngIf", n.errors == null ? null : n.errors.required),
      a(),
      s("ngIf", n.errors == null ? null : n.errors.email);
  }
}
function G(e, r) {
  e & 1 && (i(0, "span"), d(1, "Password is required."), t());
}
function R(e, r) {
  e & 1 && (i(0, "span"), d(1, "Password must be at least 8 characters."), t());
}
function H(e, r) {
  if (
    (e & 1 &&
      (i(0, "div", 14), g(1, G, 2, 0, "span", 15)(2, R, 2, 0, "span", 15), t()),
    e & 2)
  ) {
    C();
    let n = m(16);
    a(),
      s("ngIf", n.errors == null ? null : n.errors.required),
      a(),
      s("ngIf", n.errors == null ? null : n.errors.minlength);
  }
}
var D = class e {
  constructor(r, n) {
    this.adminService = r;
    this.toastr = n;
  }
  enteredEmail = "";
  enteredPassword = "";
  errorMessage = "";
  onSubmit() {
    return b(this, null, function* () {
      try {
        let r = { email: this.enteredEmail, password: this.enteredPassword },
          n = yield this.adminService.signIn(r);
        this.toastr.success("SignIn SuccessFul", "", {
          positionClass: "toast-top-center",
        }),
          (window.location.href = "/admin");
      } catch (r) {
        (this.errorMessage = r.message || "Invalid credentials!"),
          this.toastr.error(r.message, "", {
            positionClass: "toast-top-center",
          });
      }
    });
  }
  static ɵfac = function (n) {
    return new (n || e)(_(W), _(E));
  };
  static ɵcmp = M({
    type: e,
    selectors: [["app-admin-login"]],
    decls: 20,
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
      [1, "error-text"],
      [4, "ngIf"],
    ],
    template: function (n, l) {
      if (n & 1) {
        let p = S();
        i(0, "div", 3)(1, "div", 4)(2, "h2", 5),
          d(3, "Sign In"),
          t(),
          i(4, "form", 6, 0),
          h("ngSubmit", function () {
            return u(p), f(l.onSubmit());
          }),
          i(6, "div", 7)(7, "label", 8),
          d(8, "Email:"),
          t(),
          i(9, "input", 9, 1),
          w("ngModelChange", function (o) {
            return u(p), v(l.enteredEmail, o) || (l.enteredEmail = o), f(o);
          }),
          t(),
          g(11, B, 3, 2, "div", 10),
          t(),
          i(12, "div", 7)(13, "label", 11),
          d(14, "Password:"),
          t(),
          i(15, "input", 12, 2),
          w("ngModelChange", function (o) {
            return (
              u(p), v(l.enteredPassword, o) || (l.enteredPassword = o), f(o)
            );
          }),
          t(),
          g(17, H, 3, 2, "div", 10),
          t(),
          i(18, "button", 13),
          d(19, " Sign In "),
          t()()()();
      }
      if (n & 2) {
        let p = m(5),
          c = m(10),
          o = m(16);
        a(9),
          x("ngModel", l.enteredEmail),
          a(2),
          s("ngIf", c.invalid && c.touched),
          a(4),
          x("ngModel", l.enteredPassword),
          a(2),
          s("ngIf", o.invalid && o.touched),
          a(),
          s("disabled", p.invalid);
      }
    },
    dependencies: [k, V, I, A, O, N, F, q, T, L, P, y],
    styles: [
      "body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f4f4f4;margin:0;padding:0}.container[_ngcontent-%COMP%]{width:100%;max-width:400px;margin:50px auto;padding:20px}.sign-in[_ngcontent-%COMP%]{background:#fff;padding:20px;border-radius:10px;box-shadow:0 0 10px #0000001a}.text-center[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.form-group[_ngcontent-%COMP%]{margin-bottom:15px}label[_ngcontent-%COMP%]{display:block;font-weight:700;margin-bottom:5px}input[_ngcontent-%COMP%]{width:100%;padding:8px;border:1px solid #ccc;border-radius:5px}.error-text[_ngcontent-%COMP%]{color:red;font-size:12px;margin-top:5px}.btn[_ngcontent-%COMP%]{width:100%;padding:10px;background-color:#3b82f6;border:none;color:#fff;font-size:16px;border-radius:5px;cursor:pointer;transition:.3s}.btn[_ngcontent-%COMP%]:disabled{background-color:#6c757d;cursor:not-allowed}.btn[_ngcontent-%COMP%]:hover{background-color:#2b5dad}.redirect[_ngcontent-%COMP%]{text-align:center;margin-top:10px}.redirect[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3b82f6;text-decoration:none}.redirect[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}",
    ],
  });
};
export { D as AdminLoginComponent };
