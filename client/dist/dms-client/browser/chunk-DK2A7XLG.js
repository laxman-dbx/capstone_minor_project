import { b as I, e as S, h as E, q as L } from "./chunk-ZOHBZ4HP.js";
import { c as w, e as O } from "./chunk-OMR3M7LI.js";
import {
  $a as r,
  $b as f,
  Ab as C,
  Db as i,
  Eb as n,
  Fb as l,
  Fc as T,
  Ib as v,
  Jc as P,
  Lb as m,
  Mb as u,
  Wb as s,
  Yb as k,
  ac as x,
  bc as b,
  fb as y,
  mb as M,
  oa as _,
  pa as h,
  rb as g,
  yb as a,
} from "./chunk-4KGF3EVT.js";
function W(e, o) {
  e & 1 && l(0, "i", 21);
}
function j(e, o) {
  e & 1 && (i(0, "span"), s(1, "Mask"), n());
}
function N(e, o) {
  e & 1 && (i(0, "span", 22)(1, "span", 23), s(2, "Processing"), n()());
}
function D(e, o) {
  if (e & 1) {
    let d = v();
    i(0, "button", 24),
      m("click", function () {
        _(d);
        let p = u();
        return h(p.copyToClipboard());
      }),
      l(1, "i", 25),
      s(2, " Copy "),
      n();
  }
}
function F(e, o) {
  if ((e & 1 && (i(0, "div", 26), l(1, "i", 27), s(2), n()), e & 2)) {
    let d = u();
    r(2), k(" ", d.errorMessage, " ");
  }
}
function H(e, o) {
  e & 1 &&
    (i(0, "div", 28), l(1, "i", 29), s(2, " Copied to clipboard! "), n());
}
var z = class e {
  constructor(o) {
    this.http = o;
  }
  inputText = "";
  outputText = "";
  isLoading = !1;
  errorMessage = "";
  copySuccess = !1;
  maskText() {
    if (!this.inputText) {
      this.errorMessage = "Please enter some text to mask";
      return;
    }
    (this.isLoading = !0),
      (this.errorMessage = ""),
      this.http
        .post("http://localhost:5000/api/users/replace-chars", {
          text: this.inputText,
        })
        .subscribe({
          next: (o) => {
            (this.outputText = o.encryptedText), (this.isLoading = !1);
          },
          error: (o) => {
            console.error("Error masking text:", o),
              (this.errorMessage = "Failed to mask text. Please try again."),
              (this.isLoading = !1);
          },
        });
  }
  clearText() {
    (this.inputText = ""), (this.outputText = ""), (this.errorMessage = "");
  }
  copyToClipboard() {
    this.outputText &&
      navigator.clipboard
        .writeText(this.outputText)
        .then(() => {
          (this.copySuccess = !0),
            setTimeout(() => {
              this.copySuccess = !1;
            }, 3e3);
        })
        .catch((o) => {
          console.error("Could not copy text: ", o),
            (this.errorMessage = "Failed to copy to clipboard");
        });
  }
  static ɵfac = function (d) {
    return new (d || e)(y(w));
  };
  static ɵcmp = M({
    type: e,
    selectors: [["app-mask-text"]],
    decls: 29,
    vars: 13,
    consts: [
      [1, "container"],
      [1, "parent"],
      [1, "div1"],
      [1, "text-area-container"],
      [1, "fas", "fa-keyboard"],
      [
        "placeholder",
        "Enter text with PII to mask (e.g., emails, phone numbers, etc.)",
        3,
        "ngModelChange",
        "ngModel",
        "disabled",
      ],
      [1, "div11"],
      [1, "action-button", "mask-button", 3, "click", "disabled"],
      ["class", "fas fa-mask", 4, "ngIf"],
      [4, "ngIf"],
      ["class", "loading-text", 4, "ngIf"],
      [1, "div12"],
      [1, "action-button", "clear-button", 3, "click", "disabled"],
      [1, "fas", "fa-eraser"],
      [1, "div2"],
      [1, "output-header"],
      [1, "fas", "fa-shield-alt"],
      [
        "class",
        "copy-button",
        "title",
        "Copy to clipboard",
        3,
        "click",
        4,
        "ngIf",
      ],
      [
        "placeholder",
        "Masked output will appear here",
        "readonly",
        "",
        3,
        "ngModelChange",
        "ngModel",
      ],
      ["class", "error-message", 4, "ngIf"],
      ["class", "copy-success", 4, "ngIf"],
      [1, "fas", "fa-mask"],
      [1, "loading-text"],
      [1, "dot-animation"],
      ["title", "Copy to clipboard", 1, "copy-button", 3, "click"],
      [1, "fas", "fa-copy"],
      [1, "error-message"],
      [1, "fas", "fa-exclamation-circle"],
      [1, "copy-success"],
      [1, "fas", "fa-check-circle"],
    ],
    template: function (d, t) {
      d & 1 &&
        (i(0, "div", 0)(1, "h1"),
        s(2, "PII Text Masking Tool"),
        n(),
        i(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "h3"),
        l(7, "i", 4),
        s(8, " Input Text"),
        n(),
        i(9, "textarea", 5),
        b("ngModelChange", function (c) {
          return x(t.inputText, c) || (t.inputText = c), c;
        }),
        n()()(),
        i(10, "div", 6)(11, "button", 7),
        m("click", function () {
          return t.maskText();
        }),
        g(12, W, 1, 0, "i", 8)(13, j, 2, 0, "span", 9)(14, N, 3, 0, "span", 10),
        n()(),
        i(15, "div", 11)(16, "button", 12),
        m("click", function () {
          return t.clearText();
        }),
        l(17, "i", 13),
        s(18, " Clear "),
        n()(),
        i(19, "div", 14)(20, "div", 3)(21, "div", 15)(22, "h3"),
        l(23, "i", 16),
        s(24, " Masked Text"),
        n(),
        g(25, D, 3, 0, "button", 17),
        n(),
        i(26, "textarea", 18),
        b("ngModelChange", function (c) {
          return x(t.outputText, c) || (t.outputText = c), c;
        }),
        n()()()(),
        g(27, F, 3, 1, "div", 19)(28, H, 3, 0, "div", 20),
        n()),
        d & 2 &&
          (r(9),
          f("ngModel", t.inputText),
          a("disabled", t.isLoading),
          r(2),
          C("processing", t.isLoading),
          a("disabled", t.isLoading || !t.inputText),
          r(),
          a("ngIf", !t.isLoading),
          r(),
          a("ngIf", !t.isLoading),
          r(),
          a("ngIf", t.isLoading),
          r(2),
          a("disabled", t.isLoading || (!t.inputText && !t.outputText)),
          r(9),
          a("ngIf", t.outputText),
          r(),
          f("ngModel", t.outputText),
          r(),
          a("ngIf", t.errorMessage),
          r(),
          a("ngIf", t.copySuccess));
    },
    dependencies: [P, T, L, I, S, E, O],
    styles: [
      '.container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:2rem;font-family:Inter,Segoe UI,Roboto,sans-serif;min-height:calc(100vh - 100px);display:flex;flex-direction:column}h1[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem;color:var(--gray-900);font-size:2.5rem;font-weight:800;position:relative;padding-bottom:1rem}h1[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:50%;transform:translate(-50%);width:100px;height:4px;background:linear-gradient(to right,var(--primary-600),var(--primary-800));border-radius:2px}h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:.75rem;color:var(--gray-800);font-weight:600;font-size:1.25rem}.parent[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(8,1fr);gap:1rem;height:70vh;background-color:var(--gray-50);padding:1.5rem;border-radius:16px;box-shadow:0 10px 25px #0000000d;border:1px solid var(--gray-200);flex:1;position:relative}.div1[_ngcontent-%COMP%]{grid-column:span 3 / span 3;grid-row:span 4 / span 4;grid-column-start:2}.div2[_ngcontent-%COMP%]{padding-top:20px;grid-column:span 3 / span 3;grid-row:span 4 / span 4;grid-column-start:2;grid-row-start:6}.div11[_ngcontent-%COMP%]{grid-column-start:2;grid-row-start:5;display:flex;justify-content:center;align-items:center}.div12[_ngcontent-%COMP%]{grid-column-start:4;grid-row-start:5;display:flex;justify-content:center;align-items:center}.text-area-container[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;background-color:#fff;border-radius:12px;box-shadow:0 4px 12px #0000000d;padding:1.25rem;border:1px solid var(--gray-200);transition:all .3s ease}.text-area-container[_ngcontent-%COMP%]:hover{box-shadow:0 8px 20px #00000014;transform:translateY(-2px)}textarea[_ngcontent-%COMP%]{width:100%;height:100%;padding:1rem;border:1px solid var(--gray-300);border-radius:8px;resize:none;font-size:1rem;line-height:1.5;flex-grow:1;box-sizing:border-box;transition:all .3s ease;font-family:inherit}textarea[_ngcontent-%COMP%]:disabled{background-color:var(--gray-100);cursor:not-allowed}textarea[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--primary-600);box-shadow:0 0 0 3px var(--primary-100)}.action-button[_ngcontent-%COMP%]{padding:.75rem 1.5rem;border:none;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer;transition:all .3s ease;width:120px;height:48px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}.action-button[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(#ffffff1a,#fff0);pointer-events:none}.action-button[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-3px);box-shadow:0 8px 15px #0000001a}.action-button[_ngcontent-%COMP%]:active:not(:disabled){transform:translateY(1px)}.action-button[_ngcontent-%COMP%]:disabled{opacity:.7;cursor:not-allowed}.mask-button[_ngcontent-%COMP%]{background:var(--primary-700);color:#fff}.mask-button[_ngcontent-%COMP%]:hover:not(:disabled){background:var(--primary-800)}.mask-button.processing[_ngcontent-%COMP%]{background:var(--primary-800);position:relative;overflow:hidden}.loading-text[_ngcontent-%COMP%]{padding:10px;display:inline-block}.dot-animation[_ngcontent-%COMP%]:after{content:"";animation:_ngcontent-%COMP%_dots 1.5s infinite}@keyframes _ngcontent-%COMP%_dots{0%{content:""}25%{content:"."}50%{content:".."}75%{content:"..."}to{content:""}}.clear-button[_ngcontent-%COMP%]{background:var(--gray-600);color:#fff}.clear-button[_ngcontent-%COMP%]:hover:not(:disabled){background:var(--gray-700)}.output-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:.75rem}.copy-button[_ngcontent-%COMP%]{background:var(--primary-700);color:#fff;border:none;border-radius:6px;padding:.5rem .75rem;font-size:.875rem;font-weight:500;cursor:pointer;display:flex;align-items:center;gap:.5rem;transition:all .3s ease}.copy-button[_ngcontent-%COMP%]:hover{background:var(--primary-800);transform:translateY(-2px);box-shadow:0 4px 8px #05966933}.copy-icon[_ngcontent-%COMP%]{font-size:1rem}.error-message[_ngcontent-%COMP%]{color:var(--red-600);text-align:center;margin-top:1.25rem;font-weight:600;background-color:var(--red-100);padding:.75rem 1rem;border-radius:8px;border-left:4px solid var(--red-500);animation:_ngcontent-%COMP%_slideIn .3s ease}@keyframes _ngcontent-%COMP%_slideIn{0%{transform:translate(-10px);opacity:0}to{transform:translate(0);opacity:1}}.copy-success[_ngcontent-%COMP%]{color:green;text-align:center;margin-top:1.25rem;font-weight:600;background-color:var(--green-100);padding:.75rem 1rem;border-radius:8px;border-left:4px solid var(--green-600);animation:_ngcontent-%COMP%_fadeOut 3s forwards;animation-delay:1.5s}@keyframes _ngcontent-%COMP%_fadeOut{0%{opacity:1}to{opacity:0}}@media (max-width: 768px){.parent[_ngcontent-%COMP%]{grid-template-columns:1fr;grid-template-rows:auto;height:auto;gap:1.5rem}.div1[_ngcontent-%COMP%], .div2[_ngcontent-%COMP%]{grid-column:1;grid-row:auto;height:250px}.div11[_ngcontent-%COMP%], .div12[_ngcontent-%COMP%]{grid-column:1;grid-row:auto}.action-button[_ngcontent-%COMP%]{width:100%}h1[_ngcontent-%COMP%]{font-size:2rem}}',
    ],
  });
};
export { z as MaskTextComponent };
