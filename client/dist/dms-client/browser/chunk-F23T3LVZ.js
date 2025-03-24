import { a as W } from "./chunk-5QNQV3N7.js";
import {
  b as L,
  e as k,
  f as A,
  g as R,
  h as D,
  i as B,
  n as j,
  o as z,
  p as G,
  q as H,
} from "./chunk-ZOHBZ4HP.js";
import { h as q } from "./chunk-GTDEETYW.js";
import "./chunk-2PQBQFV5.js";
import "./chunk-UD6YS3BW.js";
import { c as F, d as O, f as N } from "./chunk-E5QSSROS.js";
import "./chunk-6GCQ5O75.js";
import "./chunk-OMR3M7LI.js";
import {
  $a as l,
  $b as h,
  Db as i,
  Eb as n,
  Fb as b,
  Fc as T,
  Ib as I,
  Jc as V,
  Lb as w,
  Mb as _,
  Vb as g,
  Wb as d,
  Xb as U,
  Ya as P,
  ac as C,
  bc as S,
  e as y,
  fb as v,
  mb as E,
  oa as u,
  pa as f,
  rb as m,
  yb as s,
} from "./chunk-4KGF3EVT.js";
function K(e, o) {
  e & 1 && (i(0, "span"), d(1, "Email is required."), n());
}
function Q(e, o) {
  e & 1 && (i(0, "span"), d(1, "Enter a valid email."), n());
}
function X(e, o) {
  if (
    (e & 1 &&
      (i(0, "div", 25), m(1, K, 2, 0, "span", 26)(2, Q, 2, 0, "span", 26), n()),
    e & 2)
  ) {
    _();
    let t = g(10);
    l(),
      s("ngIf", t.errors == null ? null : t.errors.required),
      l(),
      s("ngIf", t.errors == null ? null : t.errors.email);
  }
}
function Y(e, o) {
  e & 1 && (i(0, "span"), d(1, "Name is required."), n());
}
function Z(e, o) {
  if ((e & 1 && (i(0, "div", 25), m(1, Y, 2, 0, "span", 26), n()), e & 2)) {
    _();
    let t = g(16);
    l(), s("ngIf", t.errors == null ? null : t.errors.required);
  }
}
function $(e, o) {
  e & 1 && (i(0, "span"), d(1, "Phone is required."), n());
}
function ee(e, o) {
  if ((e & 1 && (i(0, "div", 25), m(1, $, 2, 0, "span", 26), n()), e & 2)) {
    _();
    let t = g(22);
    l(), s("ngIf", t.errors == null ? null : t.errors.required);
  }
}
function te(e, o) {
  e & 1 && (i(0, "span"), d(1, "Password is required."), n());
}
function ne(e, o) {
  e & 1 && (i(0, "span"), d(1, "Password must be at least 6 characters."), n());
}
function ie(e, o) {
  if (
    (e & 1 &&
      (i(0, "div", 25),
      m(1, te, 2, 0, "span", 26)(2, ne, 2, 0, "span", 26),
      n()),
    e & 2)
  ) {
    _();
    let t = g(28);
    l(),
      s("ngIf", t.errors == null ? null : t.errors.required),
      l(),
      s("ngIf", t.errors == null ? null : t.errors.minlength);
  }
}
function re(e, o) {
  if ((e & 1 && (i(0, "div", 25), d(1), n()), e & 2)) {
    let t = _();
    l(), U(t.fileError);
  }
}
function oe(e, o) {
  if ((e & 1 && b(0, "img", 27), e & 2)) {
    let t = _();
    s("src", t.imagePreview, P);
  }
}
var J = class e {
  constructor(o, t, r) {
    this.authService = o;
    this.router = t;
    this.toastr = r;
  }
  enteredEmail = "";
  enteredName = "";
  enteredPhone = "";
  enteredPassword = "";
  selectedFile = null;
  imagePreview = null;
  fileError = "";
  errorMessage = "";
  onFileSelected(o) {
    let t = o.target;
    if (t.files && t.files.length > 0) {
      let r = t.files[0];
      if (!r.type.startsWith("image/")) {
        (this.fileError = "Only image files are allowed!"),
          (this.selectedFile = null),
          (this.imagePreview = null);
        return;
      }
      (this.selectedFile = r), (this.fileError = "");
      let p = new FileReader();
      (p.onload = () => {
        this.imagePreview = p.result;
      }),
        p.readAsDataURL(r);
    }
  }
  onSubmit() {
    return y(this, null, function* () {
      try {
        if (!this.selectedFile) {
          this.errorMessage = "Profile image is required!";
          return;
        }
        let o = {
            email: this.enteredEmail,
            password: this.enteredPassword,
            name: this.enteredName,
            phone: this.enteredPhone,
            profileImage: this.selectedFile,
          },
          t = yield this.authService.signUp(o);
        this.toastr.success("SignUp SuccessFul", "", {
          positionClass: "toast-top-center",
        }),
          (window.location.href = "/dashboard");
      } catch (o) {
        (this.errorMessage = o.message || "Signup failed!"),
          this.toastr.error(this.errorMessage, "", {
            positionClass: "toast-top-center",
          });
      }
    });
  }
  static ɵfac = function (t) {
    return new (t || e)(v(W), v(F), v(q));
  };
  static ɵcmp = E({
    type: e,
    selectors: [["app-sign-up"]],
    decls: 43,
    vars: 11,
    consts: [
      ["signInForm", "ngForm"],
      ["emailCtrl", "ngModel"],
      ["fnameCtrl", "ngModel"],
      ["phoneCtrl", "ngModel"],
      ["passwordCtrl", "ngModel"],
      [1, "container"],
      [1, "sign-up"],
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
      ["for", "fname"],
      [
        "type",
        "text",
        "name",
        "fname",
        "id",
        "fname",
        "required",
        "",
        3,
        "ngModelChange",
        "ngModel",
      ],
      ["for", "phone"],
      [
        "type",
        "text",
        "name",
        "phone",
        "id",
        "phone",
        "required",
        "",
        3,
        "ngModelChange",
        "ngModel",
      ],
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
      ["for", "profileImage"],
      [
        "type",
        "file",
        "id",
        "profileImage",
        "accept",
        "image/*",
        "required",
        "",
        3,
        "change",
      ],
      [
        "alt",
        "Profile Image",
        "width",
        "100",
        "height",
        "100",
        3,
        "src",
        4,
        "ngIf",
      ],
      ["type", "submit", 1, "btn", 3, "disabled"],
      [1, "redirect"],
      ["routerLink", "/sign-in"],
      [1, "error-text"],
      [4, "ngIf"],
      ["alt", "Profile Image", "width", "100", "height", "100", 3, "src"],
    ],
    template: function (t, r) {
      if (t & 1) {
        let p = I();
        i(0, "div", 5)(1, "div", 6)(2, "h2", 7),
          d(3, "Sign Up"),
          n(),
          i(4, "form", 8, 0),
          w("ngSubmit", function () {
            return u(p), f(r.onSubmit());
          }),
          i(6, "div", 9)(7, "label", 10),
          d(8, "Email:"),
          n(),
          i(9, "input", 11, 1),
          S("ngModelChange", function (a) {
            return u(p), C(r.enteredEmail, a) || (r.enteredEmail = a), f(a);
          }),
          n(),
          m(11, X, 3, 2, "div", 12),
          n(),
          i(12, "div", 9)(13, "label", 13),
          d(14, "Full Name:"),
          n(),
          i(15, "input", 14, 2),
          S("ngModelChange", function (a) {
            return u(p), C(r.enteredName, a) || (r.enteredName = a), f(a);
          }),
          n(),
          m(17, Z, 2, 1, "div", 12),
          n(),
          i(18, "div", 9)(19, "label", 15),
          d(20, "Phone:"),
          n(),
          i(21, "input", 16, 3),
          S("ngModelChange", function (a) {
            return u(p), C(r.enteredPhone, a) || (r.enteredPhone = a), f(a);
          }),
          n(),
          m(23, ee, 2, 1, "div", 12),
          n(),
          i(24, "div", 9)(25, "label", 17),
          d(26, "Password:"),
          n(),
          i(27, "input", 18, 4),
          S("ngModelChange", function (a) {
            return (
              u(p), C(r.enteredPassword, a) || (r.enteredPassword = a), f(a)
            );
          }),
          n(),
          m(29, ie, 3, 2, "div", 12),
          n(),
          i(30, "div", 9)(31, "label", 19),
          d(32, "Profile Picture:"),
          n(),
          i(33, "input", 20),
          w("change", function (a) {
            return u(p), f(r.onFileSelected(a));
          }),
          n(),
          m(34, re, 2, 1, "div", 12)(35, oe, 1, 1, "img", 21),
          n(),
          i(36, "button", 22),
          d(37, " Sign Up "),
          n()(),
          i(38, "div", 23)(39, "span"),
          d(40, "Already have an account? "),
          i(41, "a", 24),
          d(42, "Sign In"),
          n()()()()();
      }
      if (t & 2) {
        let p = g(5),
          c = g(10),
          a = g(16),
          x = g(22),
          M = g(28);
        l(9),
          h("ngModel", r.enteredEmail),
          l(2),
          s("ngIf", c.invalid && c.touched),
          l(4),
          h("ngModel", r.enteredName),
          l(2),
          s("ngIf", a.invalid && a.touched),
          l(4),
          h("ngModel", r.enteredPhone),
          l(2),
          s("ngIf", x.invalid && x.touched),
          l(4),
          h("ngModel", r.enteredPassword),
          l(2),
          s("ngIf", M.invalid && M.touched),
          l(5),
          s("ngIf", r.fileError),
          l(),
          s("ngIf", r.imagePreview),
          l(),
          s("disabled", p.invalid);
      }
    },
    dependencies: [H, B, L, k, A, j, G, z, D, R, V, T, N, O],
    styles: [
      "body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f8f9fa;margin:0;padding:0}.container[_ngcontent-%COMP%]{width:100%;max-width:400px;margin:50px auto;padding:20px}.sign-up[_ngcontent-%COMP%]{background:#fff;padding:20px;border-radius:10px;box-shadow:0 0 10px #0000001a}.text-center[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.form-group[_ngcontent-%COMP%]{margin-bottom:15px}label[_ngcontent-%COMP%]{display:block;font-weight:700;margin-bottom:5px}input[_ngcontent-%COMP%]{width:100%;padding:8px;border:1px solid #ccc;border-radius:5px}.error-text[_ngcontent-%COMP%]{color:red;font-size:12px;margin-top:5px}.btn[_ngcontent-%COMP%]{width:100%;padding:10px;background-color:#3b82f6;border:none;color:#fff;font-size:16px;border-radius:5px;cursor:pointer;transition:.3s}.btn[_ngcontent-%COMP%]:disabled{background-color:#6c757d;cursor:not-allowed}.btn[_ngcontent-%COMP%]:hover{background-color:#2b5dad}.redirect[_ngcontent-%COMP%]{text-align:center;margin-top:10px}.redirect[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3b82f6;text-decoration:none}.redirect[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}",
    ],
  });
};
export { J as SignUpComponent };
