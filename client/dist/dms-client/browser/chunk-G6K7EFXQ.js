import { a as b, d as x, f as y } from "./chunk-E5QSSROS.js";
import "./chunk-6GCQ5O75.js";
import "./chunk-6FEKEJIW.js";
import {
  $a as n,
  Db as o,
  Eb as r,
  Ec as u,
  Fc as h,
  Jc as f,
  Mb as d,
  Wb as i,
  Xb as c,
  fb as l,
  mb as g,
  rb as p,
  yb as m,
} from "./chunk-4KGF3EVT.js";
function _(t, a) {
  if ((t & 1 && (o(0, "p"), i(1), r()), t & 2)) {
    let e = d(2);
    n(), c(e.error.description);
  }
}
function C(t, a) {
  if ((t & 1 && (o(0, "li"), i(1), r()), t & 2)) {
    let e = a.$implicit;
    n(), c(e);
  }
}
function k(t, a) {
  if (
    (t & 1 &&
      (o(0, "div", 1)(1, "h1"),
      i(2),
      r(),
      o(3, "h2"),
      i(4),
      r(),
      p(5, _, 2, 1, "p", 2),
      o(6, "p"),
      i(7, "What you can do:"),
      r(),
      o(8, "ul"),
      p(9, C, 2, 1, "li", 3),
      r(),
      o(10, "div", 4)(11, "a", 5),
      i(12, "Go to Homepage"),
      r()()()),
    t & 2)
  ) {
    let e = d();
    n(2),
      c(e.error.code),
      n(2),
      c(e.error.message),
      n(),
      m("ngIf", e.error.description),
      n(4),
      m("ngForOf", e.error.steps);
  }
}
var v = class t {
  constructor(a) {
    this.route = a;
    this.route.params.subscribe((e) => {
      let s = this.route.snapshot.paramMap.get("id");
      s && this.errorData[s]
        ? (this.error = this.errorData[s])
        : (this.error = {
            code: 500,
            message: "Unknown Error",
            description: "An unexpected error occurred.",
            steps: ["Try again later", "Return to the homepage"],
          });
    });
  }
  error = { code: 500, message: "", description: "", steps: [] };
  errorData = {
    404: {
      code: 404,
      message: "Oops! This Page Isn't Here.",
      description:
        "The page you're looking for might have been moved or renamed.",
      steps: [
        "Double-check the web address for typos.",
        "Navigate back to our homepage to explore more.",
        "Use our site search to find what you're looking for.",
      ],
    },
    408: {
      code: 408,
      message: "Our Server is taking a bit longer to respond.",
      description:
        "Your request has taken too long to process, but we're still here to help.",
      steps: [
        "Refresh the page to see if your request goes through this time.",
        "Check your internet connection to ensure it's stable.",
        "Try again later, as the issue might be temporary.",
      ],
    },
    415: {
      code: 415,
      message:
        "Oops! The media type of your request isn't supported by our server.",
      steps: [
        "Double-check the format of your request and ensure it is compatible.",
      ],
    },
    429: {
      code: 429,
      message: "You've hit your request limit.",
      description:
        "To ensure a smooth experience, we need to slow things down a bit.",
      steps: [
        "Wait for a little while and then try your request again.",
        "Explore other parts of our website in the meantime.",
      ],
    },
    500: {
      code: 500,
      message: "Oops! Something Went Wrong.",
      description: "It's not you... It's us.",
      steps: [
        "Refresh the page in a few moments to see if it's resolved.",
        "Try again later, when things are back on track.",
        "Visit our homepage to see if other parts of the site are accessible.",
      ],
    },
    503: {
      code: 503,
      message: "Hold on! Our servers are taking a breather.",
      description:
        "We're currently experiencing high traffic or undergoing maintenance, but we'll be back in action shortly.",
      steps: [
        "Give us a few moments and hit that refresh button.",
        "Check out our homepage while you wait.",
      ],
    },
  };
  static ɵfac = function (e) {
    return new (e || t)(l(b));
  };
  static ɵcmp = g({
    type: t,
    selectors: [["app-error"]],
    decls: 1,
    vars: 1,
    consts: [
      ["class", "error-container", 4, "ngIf"],
      [1, "error-container"],
      [4, "ngIf"],
      [4, "ngFor", "ngForOf"],
      [1, "button-container"],
      ["routerLink", "/", 1, "button"],
    ],
    template: function (e, s) {
      e & 1 && p(0, k, 13, 4, "div", 0), e & 2 && m("ngIf", s.error);
    },
    dependencies: [f, u, h, y, x],
    styles: [
      "body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;margin:0;display:flex;justify-content:center;align-items:center;min-height:100vh;background-color:#524e4e}.error-container[_ngcontent-%COMP%]{text-align:left;padding:20px;background-color:#fff;border-radius:5px;box-shadow:0 0 10px #0000001a;max-width:500px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#ae1f0f;font-size:72px;margin-bottom:5px}h2[_ngcontent-%COMP%]{color:#333;font-size:24px;margin-bottom:15px}p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{color:#473c3c;font-size:20px;margin-bottom:10px}.button-container[_ngcontent-%COMP%]{margin-top:20px}.button[_ngcontent-%COMP%]{display:inline-block;padding:10px 20px;background-color:#3498db;color:#fff;text-decoration:none;border-radius:3px;font-weight:700;transition:background-color .3s}.button[_ngcontent-%COMP%]:hover{background-color:#2980b9}",
    ],
  });
};
export { v as ErrorComponent };
