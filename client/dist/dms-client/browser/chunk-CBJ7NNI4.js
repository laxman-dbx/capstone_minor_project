import { a as W } from "./chunk-NTFNQ3FE.js";
import { q as w } from "./chunk-ZOHBZ4HP.js";
import { h as k } from "./chunk-GTDEETYW.js";
import "./chunk-UD6YS3BW.js";
import { c as O } from "./chunk-E5QSSROS.js";
import "./chunk-6GCQ5O75.js";
import "./chunk-OMR3M7LI.js";
import {
  $a as s,
  Ab as M,
  Db as o,
  Eb as i,
  Ec as I,
  Fc as S,
  Hc as D,
  Ib as x,
  Jc as E,
  Lb as f,
  Mb as l,
  Vb as v,
  Wb as a,
  Xb as y,
  Yb as p,
  ec as C,
  fb as u,
  gc as P,
  hc as T,
  mb as b,
  oa as g,
  pa as m,
  rb as h,
  yb as d,
} from "./chunk-4KGF3EVT.js";
function F(n, e) {
  if (n & 1) {
    let t = x();
    o(0, "li", 10),
      f("click", function () {
        let c = g(t).$implicit,
          _ = l(2);
        return m(_.selectMessage(c._id));
      }),
      o(1, "div")(2, "p")(3, "strong"),
      a(4, "Encrypted Text:"),
      i(),
      a(5),
      i(),
      o(6, "p")(7, "strong"),
      a(8, "Shared By:"),
      i(),
      a(9),
      i(),
      o(10, "p")(11, "strong"),
      a(12, "Created At:"),
      i(),
      a(13),
      C(14, "date"),
      i()()();
  }
  if (n & 2) {
    let t = e.$implicit,
      r = l(2);
    M("selected", t._id === r.selectedMessageId),
      s(5),
      p(" ", t.encryptedText, ""),
      s(4),
      p(" ", t.userId.name, ""),
      s(4),
      p(" ", P(14, 5, t.createdAt, "short"), " ");
  }
}
function N(n, e) {
  if ((n & 1 && (o(0, "ul"), h(1, F, 15, 8, "li", 9), i()), n & 2)) {
    let t = l();
    s(), d("ngForOf", t.getPaginatedSharedWithMe());
  }
}
function A(n, e) {
  n & 1 && (o(0, "p"), a(1, "No shared messages."), i());
}
function j(n, e) {
  if ((n & 1 && (o(0, "div", 11), a(1), i()), n & 2)) {
    let t = l();
    s(), p(" ", t.error, " ");
  }
}
function R(n, e) {
  if (n & 1) {
    let t = x();
    o(0, "div", 12)(1, "h3"),
      a(2, "Encrypted Message:"),
      i(),
      o(3, "p", 13),
      a(4),
      i(),
      o(5, "button", 14),
      f("click", function () {
        g(t);
        let c = l();
        return m(c.decrypt());
      }),
      a(6),
      i()();
  }
  if (n & 2) {
    let t = l();
    s(4),
      y(t.selectedMessageData.encryptedText),
      s(),
      d("disabled", t.loading),
      s(),
      p(" ", t.loading ? "Decrypting..." : "Decrypt", " ");
  }
}
function B(n, e) {
  if (n & 1) {
    let t = x();
    o(0, "button", 17),
      f("click", function () {
        g(t);
        let c = l(2);
        return m(c.copyToClipboard());
      }),
      o(1, "span", 18),
      a(2, "\u{1F4CB}"),
      i(),
      a(3, " Copy "),
      i();
  }
}
function z(n, e) {
  if (
    (n & 1 &&
      (o(0, "div", 12)(1, "h3"),
      a(2, "Decrypted Message:"),
      i(),
      o(3, "p", 15),
      a(4),
      i(),
      h(5, B, 4, 0, "button", 16),
      i()),
    n & 2)
  ) {
    let t = l();
    s(4), y(t.decryptedMessage), s(), d("ngIf", t.decryptedMessage);
  }
}
var V = class n {
  constructor(e, t, r) {
    this.encryptService = e;
    this.toastr = t;
    this.router = r;
    let c = this.router.getCurrentNavigation();
    c?.extras.state && (this.messageId = c.extras.state.messageId);
  }
  sharedWithMe = [];
  selectedMessage = null;
  decryptedMessage = "";
  error = "";
  loading = !1;
  isLoading = !1;
  copySuccess = !1;
  sharedWithMePage = 1;
  itemsPerPage = 4;
  messageId = null;
  selectedMessageId = null;
  selectedMessageData = null;
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.encryptService.getSharedWithMe().subscribe({
      next: (e) => {
        e?.success &&
          ((this.sharedWithMe = (e.sharedFiles || []).sort(
            (t, r) =>
              new Date(r.createdAt).getTime() - new Date(t.createdAt).getTime(),
          )),
          this.messageId
            ? (console.log(this.messageId, this.sharedWithMe),
              this.selectMessage(this.messageId))
            : this.sharedWithMe.length > 0 &&
              this.selectMessage(this.sharedWithMe[0]._id));
      },
      error: (e) => {
        console.error("Error fetching shared files:", e),
          this.toastr.error("Failed to load shared messages");
      },
    });
  }
  selectMessage(e) {
    let t = this.sharedWithMe.find((r) => r._id === e);
    if (!t) {
      this.toastr.error("Message not found");
      return;
    }
    (this.selectedMessageId = e),
      (this.selectedMessageData = t),
      (this.decryptedMessage = ""),
      (this.error = "");
  }
  decrypt() {
    this.selectedMessageId &&
      ((this.loading = !0),
      this.encryptService.decryptText(this.selectedMessageId).subscribe({
        next: (e) => {
          (this.decryptedMessage = e.text),
            (this.loading = !1),
            this.toastr.success("Message decrypted successfully");
        },
        error: (e) => {
          (this.error =
            "Decryption failed: " + (e.error?.message || e.message)),
            (this.loading = !1),
            this.toastr.error(this.error);
        },
      }));
  }
  getPaginatedSharedWithMe() {
    let e = (this.sharedWithMePage - 1) * this.itemsPerPage;
    return this.sharedWithMe.slice(e, e + this.itemsPerPage);
  }
  nextPage() {
    if (this.sharedWithMePage * this.itemsPerPage < this.sharedWithMe.length) {
      this.sharedWithMePage++;
      let e = this.getPaginatedSharedWithMe();
      e.length > 0 && this.selectMessage(e[0]._id);
    }
  }
  prevPage() {
    if (this.sharedWithMePage > 1) {
      this.sharedWithMePage--;
      let e = this.getPaginatedSharedWithMe();
      e.length > 0 && this.selectMessage(e[0]._id);
    }
  }
  copyToClipboard() {
    this.decryptedMessage &&
      navigator.clipboard
        .writeText(this.decryptedMessage)
        .then(() => {
          (this.copySuccess = !0),
            this.toastr.success("Text copied to clipboard"),
            setTimeout(() => {
              this.copySuccess = !1;
            }, 3e3);
        })
        .catch((e) => {
          console.error("Could not copy text: ", e),
            (this.error = "Failed to copy to clipboard");
        });
  }
  static ɵfac = function (t) {
    return new (t || n)(u(W), u(k), u(O));
  };
  static ɵcmp = b({
    type: n,
    selectors: [["app-decrypt-text"]],
    decls: 18,
    vars: 8,
    consts: [
      ["noData", ""],
      [1, "container"],
      [1, "left-panel"],
      [4, "ngIf", "ngIfElse"],
      [1, "pagination"],
      [3, "click", "disabled"],
      [1, "right-panel"],
      ["class", "error-message", 4, "ngIf"],
      ["class", "result-box", 4, "ngIf"],
      [3, "selected", "click", 4, "ngFor", "ngForOf"],
      [3, "click"],
      [1, "error-message"],
      [1, "result-box"],
      [1, "encrypted-text"],
      [1, "decrypt-btn", 3, "click", "disabled"],
      [1, "decrypted-text"],
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
      ["title", "Copy to clipboard", 1, "copy-button", 3, "click"],
      [1, "copy-icon"],
    ],
    template: function (t, r) {
      if (t & 1) {
        let c = x();
        o(0, "div", 1)(1, "div", 2)(2, "h3"),
          a(3, "Shared With Me"),
          i(),
          h(4, N, 2, 1, "ul", 3)(5, A, 2, 0, "ng-template", null, 0, T),
          o(7, "div", 4)(8, "button", 5),
          f("click", function () {
            return g(c), m(r.prevPage());
          }),
          a(9, " Previous "),
          i(),
          o(10, "span"),
          a(11),
          i(),
          o(12, "button", 5),
          f("click", function () {
            return g(c), m(r.nextPage());
          }),
          a(13, " Next "),
          i()()(),
          o(14, "div", 6),
          h(15, j, 2, 1, "div", 7)(16, R, 7, 3, "div", 8)(
            17,
            z,
            6,
            2,
            "div",
            8,
          ),
          i()();
      }
      if (t & 2) {
        let c = v(6);
        s(4),
          d("ngIf", r.getPaginatedSharedWithMe().length > 0)("ngIfElse", c),
          s(4),
          d("disabled", r.sharedWithMePage === 1),
          s(3),
          p("Page ", r.sharedWithMePage, ""),
          s(),
          d(
            "disabled",
            r.sharedWithMePage * r.itemsPerPage >= r.sharedWithMe.length,
          ),
          s(3),
          d("ngIf", r.error),
          s(),
          d("ngIf", r.selectedMessageData),
          s(),
          d("ngIf", r.decryptedMessage);
      }
    },
    dependencies: [w, E, I, S, D],
    styles: [
      ".container[_ngcontent-%COMP%]{display:flex;gap:2rem;padding:2rem;height:calc(100vh - 4rem);background-color:#f8f9fa}.left-panel[_ngcontent-%COMP%]{flex:1;background:#fff;border-radius:12px;box-shadow:0 2px 12px #00000014;padding:1.5rem;display:flex;flex-direction:column;max-width:500px}.right-panel[_ngcontent-%COMP%]{flex:2;background:#fff;border-radius:12px;box-shadow:0 2px 12px #00000014;padding:1.5rem;display:flex;flex-direction:column;gap:1.5rem}h3[_ngcontent-%COMP%]{color:#2c3e50;margin:0 0 1.5rem;font-size:1.25rem;font-weight:600;padding-bottom:1rem;border-bottom:2px solid #f0f0f0}ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0;overflow-y:auto;flex:1}li[_ngcontent-%COMP%]{padding:1rem;border:1px solid #e9ecef;border-radius:8px;margin-bottom:1rem;cursor:pointer;transition:all .2s ease}li[_ngcontent-%COMP%]:hover{background-color:#f8f9fa;transform:translateY(-2px);box-shadow:0 4px 8px #0000000d}li.selected[_ngcontent-%COMP%]{border-color:var(--primary-600);background-color:#ebf5ff}li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.5rem 0;color:#495057}li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#2c3e50}.pagination[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:1rem;margin-top:1.5rem;padding-top:1rem;border-top:1px solid #e9ecef}button[_ngcontent-%COMP%]{padding:.5rem 1rem;border-radius:6px;border:none;font-weight:500;cursor:pointer;transition:all .2s;background-color:var(--primary-800);color:#fff}button[_ngcontent-%COMP%]:hover:not(:disabled){background-color:var(--primary-700)}button[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:not-allowed}.decrypt-btn[_ngcontent-%COMP%]{align-self:flex-start;padding:.75rem 1.5rem;font-size:1rem}.error-message[_ngcontent-%COMP%]{padding:1rem;background-color:#fee2e2;border-left:4px solid #ef4444;border-radius:6px;color:#991b1b}.result-box[_ngcontent-%COMP%]{background-color:#f8f9fa;border-radius:8px;padding:1.5rem}.result-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#2c3e50;margin:0 0 1rem;padding-bottom:.5rem;border-bottom:1px solid #e9ecef}.encrypted-text[_ngcontent-%COMP%]{font-family:monospace;background-color:#e9ecef;padding:1rem;border-radius:6px;margin:1rem 0;word-break:break-all}.decrypted-text[_ngcontent-%COMP%]{background-color:#ebf5ff;padding:1rem;border-radius:6px;margin:1rem 0;border-left:4px solid var(--primary-600)}span[_ngcontent-%COMP%]{color:#6c757d}",
    ],
  });
};
export { V as DecryptTextComponent };
