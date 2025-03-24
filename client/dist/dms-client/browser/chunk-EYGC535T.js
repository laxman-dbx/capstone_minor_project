import { a as y, c as M, d as G, f as V } from "./chunk-E5QSSROS.js";
import "./chunk-6GCQ5O75.js";
import "./chunk-OMR3M7LI.js";
import {
  $a as a,
  Ab as x,
  Db as t,
  Eb as n,
  Ec as k,
  Fb as v,
  Fc as w,
  Ib as g,
  Jc as O,
  Lb as m,
  Mb as s,
  Wb as c,
  Xb as f,
  Ya as b,
  Zb as P,
  fb as C,
  mb as S,
  oa as p,
  pa as d,
  rb as _,
  va as h,
  yb as u,
} from "./chunk-4KGF3EVT.js";
function T(i, l) {
  if (i & 1) {
    let e = g();
    t(0, "span", 18),
      m("click", function () {
        let o = p(e).index,
          I = s(2);
        return d((I.currentStep = o + 1));
      }),
      n();
  }
  if (i & 2) {
    let e = l.index,
      r = s(2);
    x("active", r.currentStep === e + 1);
  }
}
function D(i, l) {
  if (i & 1) {
    let e = g();
    t(0, "button", 13),
      m("click", function () {
        p(e);
        let o = s(2);
        return d(o.nextStep());
      }),
      c(1, " Next "),
      n();
  }
}
function z(i, l) {
  if (i & 1) {
    let e = g();
    t(0, "button", 19),
      m("click", function () {
        p(e);
        let o = s(2);
        return d(o.completeGuide());
      }),
      c(1, " Complete "),
      n();
  }
}
function F(i, l) {
  if (i & 1) {
    let e = g();
    t(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "a", 5),
      c(4, "\u2190 Back to Home"),
      n(),
      t(5, "h1", 6),
      c(6, "Document Upload Guide"),
      n(),
      t(7, "p", 7),
      c(
        8,
        " Follow these steps to ensure your documents are properly uploaded and processed in our secure Document Management System. ",
      ),
      n()(),
      t(9, "div", 8)(10, "div", 9)(11, "h3"),
      c(12),
      n(),
      t(13, "p"),
      c(14),
      n(),
      t(15, "div", 10),
      v(16, "img", 11),
      n()(),
      t(17, "div", 12)(18, "button", 13),
      m("click", function () {
        p(e);
        let o = s();
        return d(o.prevStep());
      }),
      c(19, " Previous "),
      n(),
      t(20, "div", 14),
      _(21, T, 1, 2, "span", 15),
      n(),
      _(22, D, 2, 0, "button", 16)(23, z, 2, 0, "button", 17),
      n()()()();
  }
  if (i & 2) {
    let e = s();
    a(12),
      f(e.steps[e.currentStep - 1].title),
      a(2),
      f(e.steps[e.currentStep - 1].content),
      a(2),
      u(
        "src",
        e.steps[e.currentStep - 1].image,
        b,
      )("alt", e.steps[e.currentStep - 1].title),
      a(2),
      x("disabled", e.currentStep === 1),
      a(3),
      u("ngForOf", e.steps),
      a(),
      u("ngIf", e.currentStep < e.totalSteps),
      a(),
      u("ngIf", e.currentStep === e.totalSteps);
  }
}
function R(i, l) {
  if ((i & 1 && v(0, "span", 28), i & 2)) {
    let e = l.index,
      r = s(2);
    x("active", r.currentStep === e + 1);
  }
}
function U(i, l) {
  if (i & 1) {
    let e = g();
    t(0, "button", 13),
      m("click", function () {
        p(e);
        let o = s(2);
        return d(o.nextStep());
      }),
      c(1, " Next "),
      n();
  }
}
function N(i, l) {
  if (i & 1) {
    let e = g();
    t(0, "button", 19),
      m("click", function () {
        p(e);
        let o = s(2);
        return d(o.completeGuide());
      }),
      c(1, " Got it! "),
      n();
  }
}
function j(i, l) {
  if (i & 1) {
    let e = g();
    t(0, "div", 20),
      m("click", function () {
        p(e);
        let o = s();
        return d(o.closeDialog());
      }),
      t(1, "div", 21),
      m("click", function (o) {
        return p(e), d(o.stopPropagation());
      }),
      t(2, "button", 22),
      m("click", function () {
        p(e);
        let o = s();
        return d(o.closeDialog());
      }),
      c(3, "\xD7"),
      n(),
      t(4, "div", 23)(5, "h2"),
      c(6, "Document Upload Guide"),
      n(),
      t(7, "div", 24),
      c(8),
      n()(),
      t(9, "div", 25)(10, "div", 9)(11, "h3"),
      c(12),
      n(),
      t(13, "p"),
      c(14),
      n(),
      t(15, "div", 10),
      v(16, "img", 11),
      n()()(),
      t(17, "div", 26)(18, "button", 13),
      m("click", function () {
        p(e);
        let o = s();
        return d(o.prevStep());
      }),
      c(19, " Previous "),
      n(),
      t(20, "div", 14),
      _(21, R, 1, 2, "span", 27),
      n(),
      _(22, U, 2, 0, "button", 16)(23, N, 2, 0, "button", 17),
      n()()();
  }
  if (i & 2) {
    let e = s();
    a(8),
      P(" Step ", e.currentStep, " of ", e.totalSteps, " "),
      a(4),
      f(e.steps[e.currentStep - 1].title),
      a(2),
      f(e.steps[e.currentStep - 1].content),
      a(2),
      u(
        "src",
        e.steps[e.currentStep - 1].image,
        b,
      )("alt", e.steps[e.currentStep - 1].title),
      a(2),
      x("disabled", e.currentStep === 1),
      a(3),
      u("ngForOf", e.steps),
      a(),
      u("ngIf", e.currentStep < e.totalSteps),
      a(),
      u("ngIf", e.currentStep === e.totalSteps);
  }
}
var E = class i {
  constructor(l, e) {
    this.route = l;
    this.router = e;
  }
  show = !1;
  close = new h();
  isStandalonePage = !1;
  currentStep = 1;
  totalSteps = 5;
  steps = [
    {
      title: "Document Selection",
      content:
        "Choose the correct document type from the dropdown menu. This helps us accurately detect and mask sensitive information.",
      image: "assets/doc-type.png",
    },
    {
      title: "File Requirements",
      content:
        "Upload JPG, PNG, or PDF files under 10MB. Ensure documents are clear, well-lit, and properly oriented.",
      image: "assets/file-requirements.png",
    },
    {
      title: "Document Quality",
      content:
        "Make sure your document is complete, readable, and free from glare or shadows. All corners should be visible.",
      image: "assets/doc-quality.png",
    },
    {
      title: "Storage Options",
      content:
        "Choose whether to save your masked document securely in our encrypted storage or download it directly.",
      image: "assets/storage-options.png",
    },
    {
      title: "Ready to Upload",
      content: `Click "Upload" or drag and drop your file. We'll process and mask the sensitive information automatically.`,
      image: "assets/doc-upload.png",
    },
  ];
  ngOnInit() {
    (this.isStandalonePage = this.route.snapshot.url.length > 0),
      this.isStandalonePage && (this.show = !0),
      console.log(
        "Guide component initialized. Standalone mode:",
        this.isStandalonePage,
      );
  }
  nextStep() {
    this.currentStep < this.totalSteps && this.currentStep++;
  }
  prevStep() {
    this.currentStep > 1 && this.currentStep--;
  }
  closeDialog() {
    this.isStandalonePage || (this.close.emit(), (this.currentStep = 1));
  }
  navigateToHome() {
    this.router.navigate(["/"]);
  }
  completeGuide() {
    this.isStandalonePage ? this.navigateToHome() : this.closeDialog();
  }
  static ɵfac = function (e) {
    return new (e || i)(C(y), C(M));
  };
  static ɵcmp = S({
    type: i,
    selectors: [["app-guide"]],
    inputs: { show: "show" },
    outputs: { close: "close" },
    decls: 2,
    vars: 2,
    consts: [
      ["class", "guide-page-container", 4, "ngIf"],
      ["class", "dialog-overlay", 3, "click", 4, "ngIf"],
      [1, "guide-page-container"],
      [1, "guide-page-content"],
      [1, "page-header"],
      ["routerLink", "/", 1, "back-link"],
      [1, "page-title"],
      [1, "page-description"],
      [1, "guide-content"],
      [1, "step-content"],
      [1, "step-image"],
      [3, "src", "alt"],
      [1, "navigation-controls"],
      [1, "nav-button", 3, "click"],
      [1, "step-dots"],
      ["class", "dot", 3, "active", "click", 4, "ngFor", "ngForOf"],
      ["class", "nav-button", 3, "click", 4, "ngIf"],
      ["class", "nav-button complete", 3, "click", 4, "ngIf"],
      [1, "dot", 3, "click"],
      [1, "nav-button", "complete", 3, "click"],
      [1, "dialog-overlay", 3, "click"],
      [1, "dialog-content", 3, "click"],
      [1, "close-button", 3, "click"],
      [1, "dialog-header"],
      [1, "step-indicator"],
      [1, "dialog-body"],
      [1, "dialog-footer"],
      ["class", "dot", 3, "active", 4, "ngFor", "ngForOf"],
      [1, "dot"],
    ],
    template: function (e, r) {
      e & 1 && _(0, F, 24, 9, "div", 0)(1, j, 24, 11, "div", 1),
        e & 2 &&
          (u("ngIf", r.isStandalonePage),
          a(),
          u("ngIf", r.show && !r.isStandalonePage));
    },
    dependencies: [O, k, w, V, G],
    styles: [
      ".guide-page-container[_ngcontent-%COMP%]{max-width:800px;margin:40px auto;padding:20px}.guide-page-content[_ngcontent-%COMP%]{background:#fff;border-radius:12px;padding:30px;box-shadow:0 4px 20px #0000001a}.page-title[_ngcontent-%COMP%]{color:#2d3748;text-align:center;margin-bottom:10px;font-size:32px}.page-description[_ngcontent-%COMP%]{color:#4a5568;text-align:center;margin-bottom:30px;font-size:16px;line-height:1.6}.guide-content[_ngcontent-%COMP%]{margin:20px 0}.navigation-controls[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding-top:20px;margin-top:20px;border-top:1px solid #e2e8f0}.dialog-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background-color:#00000080;display:flex;align-items:center;justify-content:center;z-index:1000;animation:_ngcontent-%COMP%_fadeIn .3s ease}.dialog-content[_ngcontent-%COMP%]{background:#fff;border-radius:12px;width:90%;max-width:600px;position:relative;padding:24px;box-shadow:0 4px 20px #0003;animation:_ngcontent-%COMP%_slideUp .3s ease}.close-button[_ngcontent-%COMP%]{position:absolute;top:16px;right:16px;background:none;border:none;font-size:24px;color:#666;cursor:pointer;padding:4px;line-height:1}.close-button[_ngcontent-%COMP%]:hover{color:#333}.dialog-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:24px}.dialog-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#2d3748;margin:0 0 8px;font-size:24px}.step-indicator[_ngcontent-%COMP%]{color:#718096;font-size:14px}.dialog-body[_ngcontent-%COMP%]{margin-bottom:24px}.step-content[_ngcontent-%COMP%]{text-align:center}.step-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#2d3748;margin:0 0 16px;font-size:20px}.step-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#4a5568;margin:0 0 24px;line-height:1.6}.step-image[_ngcontent-%COMP%]{margin:20px auto;max-width:400px}.step-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;border-radius:8px;box-shadow:0 2px 8px #0000001a}.dialog-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding-top:16px;border-top:1px solid #e2e8f0}.nav-button[_ngcontent-%COMP%]{background-color:#3b82f6;color:#fff;border:none;padding:8px 16px;border-radius:6px;cursor:pointer;font-size:14px;transition:background-color .2s}.nav-button[_ngcontent-%COMP%]:hover{background-color:#2563eb}.nav-button.disabled[_ngcontent-%COMP%]{background-color:#cbd5e0;cursor:not-allowed}.nav-button.complete[_ngcontent-%COMP%]{background-color:#10b981;font-weight:700;padding:10px 20px;transition:all .3s ease}.nav-button.complete[_ngcontent-%COMP%]:hover{background-color:#059669;transform:translateY(-2px);box-shadow:0 4px 8px #0000001a}.step-dots[_ngcontent-%COMP%]{display:flex;gap:8px;justify-content:center}.dot[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background-color:#e2e8f0;transition:background-color .2s}.dot.active[_ngcontent-%COMP%]{background-color:#3b82f6}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_slideUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@media (max-width: 640px){.dialog-content[_ngcontent-%COMP%]{width:95%;padding:16px}.step-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}.step-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}}.page-header[_ngcontent-%COMP%]{margin-bottom:30px}.back-link[_ngcontent-%COMP%]{display:inline-block;color:#3b82f6;text-decoration:none;margin-bottom:20px;font-weight:500;transition:color .2s}.back-link[_ngcontent-%COMP%]:hover{color:#2563eb;text-decoration:underline}",
    ],
  });
};
export { E as GuideComponent };
