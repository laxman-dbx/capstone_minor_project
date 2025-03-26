import { a as F } from "./chunk-ZU2TEU5Q.js";
import { b as U, e as S, h as I, q as k } from "./chunk-ZOHBZ4HP.js";
import { h as w } from "./chunk-GTDEETYW.js";
import "./chunk-UD6YS3BW.js";
import "./chunk-6GCQ5O75.js";
import "./chunk-6FEKEJIW.js";
import {
  $a as s,
  $b as b,
  Ab as T,
  Db as o,
  Eb as i,
  Ec as E,
  Fc as O,
  Ib as _,
  Jc as P,
  Lb as g,
  Mb as p,
  Wb as c,
  Xb as x,
  Yb as y,
  ac as v,
  bc as C,
  fb as h,
  mb as M,
  oa as u,
  pa as f,
  rb as m,
  yb as d,
} from "./chunk-4KGF3EVT.js";
function z(r, n) {
  if (r & 1) {
    let e = _();
    o(0, "div", 13),
      g("click", function () {
        let l = u(e).$implicit,
          a = p(2);
        return f(a.selectUser(l));
      }),
      o(1, "span"),
      c(2),
      i(),
      o(3, "small"),
      c(4),
      i()();
  }
  if (r & 2) {
    let e = n.$implicit,
      t = p(2);
    T("disabled", t.selectedUsers.length >= t.maxRecipients),
      s(2),
      x(e.name),
      s(2),
      x(e.email);
  }
}
function D(r, n) {
  if ((r & 1 && (o(0, "div", 11), m(1, z, 5, 4, "div", 12), i()), r & 2)) {
    let e = p();
    s(), d("ngForOf", e.filteredUsers);
  }
}
function L(r, n) {
  if (r & 1) {
    let e = _();
    o(0, "div", 17)(1, "span"),
      c(2),
      i(),
      o(3, "button", 18),
      g("click", function () {
        let l = u(e).$implicit,
          a = p(2);
        return f(a.removeUser(l));
      }),
      c(4, "\xD7"),
      i()();
  }
  if (r & 2) {
    let e = n.$implicit;
    s(2), x(e.name);
  }
}
function N(r, n) {
  if (
    (r & 1 &&
      (o(0, "div", 14)(1, "h3"),
      c(2, "Selected Recipients:"),
      i(),
      o(3, "div", 15),
      m(4, L, 5, 1, "div", 16),
      i()()),
    r & 2)
  ) {
    let e = p();
    s(4), d("ngForOf", e.selectedUsers);
  }
}
function W(r, n) {
  if ((r & 1 && (o(0, "div", 19), c(1), i()), r & 2)) {
    let e = p();
    s(), y(" ", e.error, " ");
  }
}
function R(r, n) {
  if (r & 1) {
    let e = _();
    o(0, "div", 20)(1, "h3"),
      c(2, "Encrypted Message:"),
      i(),
      o(3, "p", 21),
      c(4),
      i(),
      o(5, "button", 22),
      g("click", function () {
        u(e);
        let l = p();
        return f(l.decrypt());
      }),
      c(6, " Decrypt "),
      i()();
  }
  if (r & 2) {
    let e = p();
    s(4), x(e.encryptedMessage), s(), d("disabled", e.loading);
  }
}
function j(r, n) {
  if (
    (r & 1 &&
      (o(0, "div", 20)(1, "h3"),
      c(2, "Decrypted Message:"),
      i(),
      o(3, "p", 23),
      c(4),
      i()()),
    r & 2)
  ) {
    let e = p();
    s(4), x(e.decryptedMessage);
  }
}
var V = class r {
  constructor(n, e) {
    this.encryptTextService = n;
    this.toastr = e;
  }
  text = "";
  searchTerm = "";
  users = [];
  selectedUser = { _id: "", name: "", email: "" };
  filteredUsers = [];
  selectedUsers = [];
  encryptedMessage = "";
  decryptedMessage = "";
  loading = !1;
  error = "";
  maxRecipients = 3;
  encryptedMessageId = "";
  ngOnInit() {
    this.fetchUsers();
  }
  fetchUsers() {
    (this.loading = !0),
      this.encryptTextService.getUsers().subscribe({
        next: (n) => {
          (this.users = n), this.filterUsers(), (this.loading = !1);
        },
        error: (n) => {
          (this.error =
            "Failed to fetch users: " + (n.error?.message || n.message)),
            (this.loading = !1);
        },
      });
  }
  filterUsers() {
    this.filteredUsers = this.searchTerm.trim()
      ? this.users.filter(
          (n) =>
            n.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            n.email.toLowerCase().includes(this.searchTerm.toLowerCase()),
        )
      : this.users;
  }
  selectUser(n) {
    if (this.selectedUsers.length >= this.maxRecipients) {
      this.toastr.warning(`Maximum ${this.maxRecipients} recipients allowed`);
      return;
    }
    this.selectedUsers.find((e) => e._id === n._id) ||
      this.selectedUsers.push(n),
      (this.searchTerm = ""),
      this.filterUsers();
  }
  removeUser(n) {
    this.selectedUsers = this.selectedUsers.filter((e) => e._id !== n._id);
  }
  handleEncrypt() {
    if (!this.text) {
      this.toastr.error("Please enter text to encrypt");
      return;
    }
    if (this.selectedUsers.length === 0) {
      this.toastr.error("Please select at least one recipient");
      return;
    }
    (this.loading = !0), (this.error = "");
    let n = localStorage.getItem("userId") || "",
      e = this.selectedUsers.map((t) => t._id);
    this.encryptTextService.encryptText(n, e, this.text).subscribe({
      next: (t) => {
        (this.encryptedMessage = t.encryptedText),
          (this.encryptedMessageId = t.encryptedMessageId),
          (this.loading = !1),
          (this.text = ""),
          this.toastr.success("Message encrypted successfully");
      },
      error: (t) => {
        (this.error = "Encryption failed: " + (t.error?.message || t.message)),
          (this.loading = !1),
          this.toastr.error(this.error);
      },
    });
  }
  decrypt() {
    (this.loading = !0),
      this.encryptTextService.decryptText(this.encryptedMessageId).subscribe({
        next: (n) => {
          (this.decryptedMessage = n.text),
            (this.loading = !1),
            this.toastr.success("Message decrypted successfully");
        },
        error: (n) => {
          (this.error =
            "Decryption failed: " + (n.error?.message || n.message)),
            (this.loading = !1),
            this.toastr.error(this.error);
        },
      });
  }
  static ɵfac = function (e) {
    return new (e || r)(h(F), h(w));
  };
  static ɵcmp = M({
    type: r,
    selectors: [["app-encrypt-text"]],
    decls: 15,
    vars: 9,
    consts: [
      [1, "container"],
      [1, "encrypt-section"],
      [1, "search-box"],
      [
        "type",
        "text",
        "placeholder",
        "Search users (max 3 recipients)...",
        1,
        "search-input",
        3,
        "ngModelChange",
        "input",
        "ngModel",
      ],
      ["class", "users-list", 4, "ngIf"],
      ["class", "selected-users", 4, "ngIf"],
      [1, "message-box"],
      [
        "placeholder",
        "Enter your message...",
        "rows",
        "4",
        3,
        "ngModelChange",
        "ngModel",
      ],
      [1, "encrypt-btn", 3, "click", "disabled"],
      ["class", "error-message", 4, "ngIf"],
      ["class", "result-box", 4, "ngIf"],
      [1, "users-list"],
      ["class", "user-item", 3, "disabled", "click", 4, "ngFor", "ngForOf"],
      [1, "user-item", 3, "click"],
      [1, "selected-users"],
      [1, "selected-user-chips"],
      ["class", "user-chip", 4, "ngFor", "ngForOf"],
      [1, "user-chip"],
      [1, "remove-user", 3, "click"],
      [1, "error-message"],
      [1, "result-box"],
      [1, "encrypted-text"],
      [1, "decrypt-btn", 3, "click", "disabled"],
      [1, "decrypted-text"],
    ],
    template: function (e, t) {
      e & 1 &&
        (o(0, "div", 0)(1, "div", 1)(2, "h2"),
        c(3, "Encrypt Message"),
        i(),
        o(4, "div", 2)(5, "input", 3),
        C("ngModelChange", function (a) {
          return v(t.searchTerm, a) || (t.searchTerm = a), a;
        }),
        g("input", function () {
          return t.filterUsers();
        }),
        i(),
        m(6, D, 2, 1, "div", 4),
        i(),
        m(7, N, 5, 1, "div", 5),
        o(8, "div", 6)(9, "textarea", 7),
        C("ngModelChange", function (a) {
          return v(t.text, a) || (t.text = a), a;
        }),
        i(),
        o(10, "button", 8),
        g("click", function () {
          return t.handleEncrypt();
        }),
        c(11),
        i()(),
        m(12, W, 2, 1, "div", 9)(13, R, 7, 2, "div", 10)(
          14,
          j,
          5,
          1,
          "div",
          10,
        ),
        i()()),
        e & 2 &&
          (s(5),
          b("ngModel", t.searchTerm),
          s(),
          d("ngIf", t.searchTerm && t.filteredUsers.length > 0),
          s(),
          d("ngIf", t.selectedUsers.length > 0),
          s(2),
          b("ngModel", t.text),
          s(),
          d("disabled", !t.text || t.selectedUsers.length === 0 || t.loading),
          s(),
          y(" ", t.loading ? "Encrypting..." : "Encrypt Message", " "),
          s(),
          d("ngIf", t.error),
          s(),
          d("ngIf", t.encryptedMessage),
          s(),
          d("ngIf", t.decryptedMessage));
    },
    dependencies: [P, E, O, k, U, S, I],
    styles: [
      ".container[_ngcontent-%COMP%]{max-width:1168px;margin:0 auto;padding:20px;height:80vh}.encrypt-section[_ngcontent-%COMP%]{background:#fff;max-width:1168px;border-radius:8px;padding:20px;box-shadow:0 2px 4px #0000001a}h2[_ngcontent-%COMP%]{color:#333;margin-bottom:20px;font-size:24px}h3[_ngcontent-%COMP%]{color:#555;margin-bottom:10px;font-size:18px}.search-box[_ngcontent-%COMP%]{position:relative;margin-bottom:20px}.search-input[_ngcontent-%COMP%]{width:100%;padding:12px;border:1px solid #ddd;border-radius:6px;font-size:16px;transition:border-color .3s}.search-input[_ngcontent-%COMP%]:focus{border-color:var(--primary-600);outline:none}.users-list[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #ddd;border-radius:6px;max-height:200px;overflow-y:auto;z-index:1000;box-shadow:0 4px 6px #0000001a}.user-item[_ngcontent-%COMP%]{padding:10px 15px;cursor:pointer;transition:background-color .2s;display:flex;flex-direction:column}.user-item[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}.user-item.disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.user-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500}.user-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#666;font-size:12px}.selected-users[_ngcontent-%COMP%]{margin-bottom:20px}.selected-user-chips[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.user-chip[_ngcontent-%COMP%]{background:#e3f2fd;padding:6px 12px;border-radius:16px;display:flex;align-items:center;gap:8px}.remove-user[_ngcontent-%COMP%]{background:none;border:none;color:#666;cursor:pointer;font-size:18px;padding:0;display:flex;align-items:center;justify-content:center}.remove-user[_ngcontent-%COMP%]:hover{color:#d32f2f}.message-box[_ngcontent-%COMP%]{margin-bottom:20px}textarea[_ngcontent-%COMP%]{width:100%;padding:12px;border:1px solid #ddd;border-radius:6px;resize:vertical;min-height:120px;font-size:16px;margin-bottom:10px}textarea[_ngcontent-%COMP%]:focus{border-color:#4a90e2;outline:none}.encrypt-btn[_ngcontent-%COMP%], .decrypt-btn[_ngcontent-%COMP%]{background:var(--primary-800);color:#fff;border:none;padding:12px 24px;border-radius:6px;cursor:pointer;font-size:16px;font-weight:500;transition:background-color .2s}.encrypt-btn[_ngcontent-%COMP%]:hover, .decrypt-btn[_ngcontent-%COMP%]:hover{background:var(--primary-700)}.encrypt-btn[_ngcontent-%COMP%]:disabled, .decrypt-btn[_ngcontent-%COMP%]:disabled{background:#ccc;cursor:not-allowed}.decrypt-btn[_ngcontent-%COMP%]{background:#66bb6a}.decrypt-btn[_ngcontent-%COMP%]:hover{background:#4caf50}.result-box[_ngcontent-%COMP%]{background:#f8f9fa;padding:15px;border-radius:6px;margin-top:20px}.encrypted-text[_ngcontent-%COMP%], .decrypted-text[_ngcontent-%COMP%]{font-family:monospace;word-break:break-all;margin:10px 0;padding:10px;background:#fff;border:1px solid #ddd;border-radius:4px}.error-message[_ngcontent-%COMP%]{color:#d32f2f;background:#ffebee;padding:12px;border-radius:6px;margin-bottom:20px}.loading[_ngcontent-%COMP%]{opacity:.7;pointer-events:none}",
    ],
  });
};
export { V as EncryptTextComponent };
