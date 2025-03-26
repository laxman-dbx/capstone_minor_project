import {
  $a as o,
  Ab as q,
  Db as i,
  Eb as a,
  Ec as w,
  Fb as l,
  Fc as _,
  Ib as h,
  Jc as b,
  Lb as v,
  Mb as m,
  Wb as d,
  Xb as c,
  mb as g,
  oa as f,
  pa as u,
  rb as s,
  yb as r,
} from "./chunk-4KGF3EVT.js";
function F(t, n) {
  if ((t & 1 && (i(0, "div", 9)(1, "p"), d(2), a()()), t & 2)) {
    let e = m().$implicit;
    o(2), c(e.answer);
  }
}
function O(t, n) {
  if (t & 1) {
    let e = h();
    i(0, "div", 5)(1, "div", 6),
      v("click", function () {
        let C = f(e).index,
          x = m();
        return u(x.toggleFaq(C));
      }),
      i(2, "h3"),
      d(3),
      a(),
      i(4, "span"),
      l(5, "img", 7),
      a()(),
      s(6, F, 3, 1, "div", 8),
      a();
  }
  if (t & 2) {
    let e = n.$implicit;
    o(3), c(e.question), o(), q("open", e.isOpen), o(2), r("ngIf", e.isOpen);
  }
}
var y = class t {
  faqs = [
    {
      question: "How does this work?",
      answer:
        "This is a web application that allows you to blur sensitive information in images. It uses a machine learning model to detect and blur them.",
      isOpen: !1,
    },
    {
      question: "How do I use this?",
      answer:
        "You can upload an image and select the type of information you want to blur. The model will detect the information and blur it. You can then download the blurred image.",
      isOpen: !1,
    },
    {
      question: "What types of information can I blur?",
      answer:
        "You can blur  phone numbers, email addresses, credit card numbers, and bank account numbers.",
      isOpen: !1,
    },
    {
      question: "How accurate is this?",
      answer:
        "The model is trained on a large dataset and can detect sensitive information with high accuracy.",
      isOpen: !1,
    },
    {
      question: "What happens to my images?",
      answer:
        "Your images are not stored on our servers until unless you mention to save. They are processed by the model and the blurred image is returned to you.",
      isOpen: !1,
    },
  ];
  toggleFaq(n) {
    this.faqs[n].isOpen = !this.faqs[n].isOpen;
  }
  static ɵfac = function (e) {
    return new (e || t)();
  };
  static ɵcmp = g({
    type: t,
    selectors: [["app-faq"]],
    decls: 5,
    vars: 1,
    consts: [
      [1, "faq-container"],
      [1, "faq-left"],
      ["src", "assets/faqImg.png", "alt", "FAQ Image"],
      [1, "faq-right"],
      ["class", "faq-box", 4, "ngFor", "ngForOf"],
      [1, "faq-box"],
      [1, "faq-header", 3, "click"],
      ["src", "assets/down-arrow.png", "alt", ">", "width", "30px"],
      ["class", "faq-body", 4, "ngIf"],
      [1, "faq-body"],
    ],
    template: function (e, p) {
      e & 1 &&
        (i(0, "div", 0)(1, "div", 1),
        l(2, "img", 2),
        a(),
        i(3, "div", 3),
        s(4, O, 7, 4, "div", 4),
        a()()),
        e & 2 && (o(4), r("ngForOf", p.faqs));
    },
    dependencies: [b, w, _],
    styles: [
      ".faq-container[_ngcontent-%COMP%]{display:flex;padding:5%}.faq-right[_ngcontent-%COMP%]{padding-left:5%}.faq-header[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center}",
    ],
  });
};
export { y as FaqComponent };
