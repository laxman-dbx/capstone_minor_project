import { a as j } from "./chunk-G4I7KY6Q.js";
import { b as T, e as U, h as F, q as W } from "./chunk-ZOHBZ4HP.js";
import { h as V } from "./chunk-GTDEETYW.js";
import "./chunk-UD6YS3BW.js";
import "./chunk-6GCQ5O75.js";
import "./chunk-OMR3M7LI.js";
import {
  $a as l,
  $b as P,
  Db as o,
  Eb as i,
  Fb as m,
  Fc as k,
  Ib as h,
  Jc as I,
  Lb as f,
  Mb as p,
  Vb as E,
  Wb as s,
  Xb as C,
  Ya as O,
  Yb as y,
  ac as w,
  bc as x,
  e as u,
  fb as b,
  mb as S,
  oa as c,
  pa as d,
  rb as M,
  yb as _,
} from "./chunk-4KGF3EVT.js";
function z(g, r) {
  if (g & 1) {
    let n = h();
    o(0, "div", 20)(1, "p", 21),
      s(2, "Preview of new profile image"),
      i(),
      o(3, "div", 22)(4, "button", 23),
      f("click", function () {
        c(n);
        let t = p();
        return d(t.uploadProfileImage());
      }),
      m(5, "i", 24),
      s(6, " Save Image "),
      i(),
      o(7, "button", 25),
      f("click", function () {
        c(n);
        let t = p();
        return d(t.cancelImageUpload());
      }),
      m(8, "i", 26),
      s(9, " Cancel "),
      i()()();
  }
}
function L(g, r) {
  if (g & 1) {
    let n = h();
    o(0, "div", 27)(1, "div", 28)(2, "label", 29),
      s(3, "Full Name"),
      i(),
      o(4, "input", 30),
      x("ngModelChange", function (t) {
        c(n);
        let a = p();
        return w(a.user.name, t) || (a.user.name = t), d(t);
      }),
      i()(),
      o(5, "div", 28)(6, "label", 31),
      s(7, "Phone Number"),
      i(),
      o(8, "input", 32),
      x("ngModelChange", function (t) {
        c(n);
        let a = p();
        return w(a.user.phone, t) || (a.user.phone = t), d(t);
      }),
      i()(),
      o(9, "button", 33),
      f("click", function () {
        c(n);
        let t = p();
        return d(t.updateProfile());
      }),
      m(10, "i", 24),
      s(11, " Save Changes "),
      i()();
  }
  if (g & 2) {
    let n = p();
    l(4), P("ngModel", n.user.name), l(4), P("ngModel", n.user.phone);
  }
}
function D(g, r) {
  if (g & 1) {
    let n = h();
    o(0, "div", 27)(1, "div", 28)(2, "label", 34),
      s(3, "Password"),
      i(),
      o(4, "input", 35),
      x("ngModelChange", function (t) {
        c(n);
        let a = p();
        return w(a.enteredPassword, t) || (a.enteredPassword = t), d(t);
      }),
      i()(),
      o(5, "div", 28)(6, "label", 34),
      s(7, "Retype Password"),
      i(),
      o(8, "input", 36),
      x("ngModelChange", function (t) {
        c(n);
        let a = p();
        return w(a.reEnteredPassword, t) || (a.reEnteredPassword = t), d(t);
      }),
      i()(),
      o(9, "button", 33),
      f("click", function () {
        c(n);
        let t = p();
        return d(t.changePassword());
      }),
      m(10, "i", 24),
      s(11, " Save Changes "),
      i()();
  }
  if (g & 2) {
    let n = p();
    l(4),
      P("ngModel", n.enteredPassword),
      l(4),
      P("ngModel", n.reEnteredPassword);
  }
}
var N = class g {
  constructor(r, n) {
    this.userService = r;
    this.toastr = n;
  }
  user = {};
  editMode = !1;
  peditMode = !1;
  selectedFile = null;
  imagePreview = null;
  enteredPassword = "";
  reEnteredPassword = "";
  ngOnInit() {
    return u(this, null, function* () {
      yield this.getUserProfile();
    });
  }
  getUserProfile() {
    return u(this, null, function* () {
      try {
        this.user = yield this.userService.getUserProfile();
      } catch (r) {
        console.error("Error fetching user profile:", r);
      }
    });
  }
  onFileSelected(r) {
    let n = r.target;
    if (n.files && n.files.length > 0) {
      this.selectedFile = n.files[0];
      let e = new FileReader();
      (e.onload = () => {
        this.imagePreview = e.result;
      }),
        e.readAsDataURL(this.selectedFile);
    }
  }
  uploadProfileImage() {
    return u(this, null, function* () {
      if (this.selectedFile)
        try {
          yield this.userService.updateProfileImage(this.selectedFile),
            this.toastr.success("Updated Successfully!", "", {
              positionClass: "toast-top-center",
            }),
            yield this.getUserProfile(),
            this.resetImageState();
        } catch (r) {
          console.error("Error updating profile image:", r),
            this.toastr.error("Error while updating please try again", "", {
              positionClass: "toast-top-center",
            });
        }
    });
  }
  cancelImageUpload() {
    this.resetImageState();
  }
  resetImageState() {
    (this.imagePreview = null), (this.selectedFile = null);
  }
  updateProfile() {
    return u(this, null, function* () {
      try {
        let r = yield this.userService.updateUserProfile({
          name: this.user.name,
          phone: this.user.phone,
        });
        (this.editMode = !1),
          this.toastr.success("Updated Successfully!", "", {
            positionClass: "toast-top-center",
          }),
          yield this.getUserProfile();
      } catch (r) {
        console.error("Error updating profile:", r),
          this.toastr.error("Error while updating please try again", "", {
            positionClass: "toast-top-center",
          });
      }
    });
  }
  changePassword() {
    return u(this, null, function* () {
      try {
        this.enteredPassword === this.reEnteredPassword
          ? (yield this.userService.changePassword(
              this.enteredPassword.toString(),
            ),
            (this.peditMode = !1),
            this.toastr.success("Updated Successfully!", "", {
              positionClass: "toast-top-center",
            }),
            (this.enteredPassword = ""),
            (this.reEnteredPassword = ""))
          : this.toastr.error("Password Mismatched!", "", {
              positionClass: "toast-top-center",
            });
      } catch (r) {
        console.error("Error changing password:", r),
          this.toastr.error("Error while updating please try again", "", {
            positionClass: "toast-top-center",
          });
      }
    });
  }
  static ɵfac = function (n) {
    return new (n || g)(b(j), b(V));
  };
  static ɵcmp = S({
    type: g,
    selectors: [["app-profile"]],
    decls: 26,
    vars: 9,
    consts: [
      ["fileInput", ""],
      [1, "profile-container"],
      [1, "profile-card"],
      [1, "image-wrapper"],
      [1, "image-container"],
      ["type", "file", "hidden", "", "accept", "image/*", 3, "change"],
      ["alt", "Profile Picture", 1, "profile-pic", 3, "src"],
      [1, "edit-icon", 3, "click"],
      [1, "fa", "fa-pencil"],
      ["class", "image-preview-controls", 4, "ngIf"],
      [1, "user-info"],
      [1, "user-name"],
      [1, "user-email"],
      [1, "user-phone"],
      [1, "action-buttons"],
      [1, "btn-edit", 3, "click"],
      [1, "fa", "fa-user-edit"],
      [1, "btn-password", 3, "click"],
      [1, "fa", "fa-key"],
      ["class", "edit-form", 4, "ngIf"],
      [1, "image-preview-controls"],
      [1, "preview-text"],
      [1, "image-actions"],
      [1, "btn-save-image", 3, "click"],
      [1, "fa", "fa-check"],
      [1, "btn-cancel-image", 3, "click"],
      [1, "fa", "fa-times"],
      [1, "edit-form"],
      [1, "form-group"],
      ["for", "name"],
      [
        "type",
        "text",
        "id",
        "name",
        "placeholder",
        "Enter name",
        3,
        "ngModelChange",
        "ngModel",
      ],
      ["for", "phone"],
      [
        "type",
        "text",
        "id",
        "phone",
        "placeholder",
        "Enter phone",
        3,
        "ngModelChange",
        "ngModel",
      ],
      [1, "btn-save", 3, "click"],
      ["for", "password"],
      [
        "type",
        "password",
        "id",
        "password",
        "placeholder",
        "Enter Password",
        3,
        "ngModelChange",
        "ngModel",
      ],
      [
        "type",
        "password",
        "id",
        "password",
        "placeholder",
        "ReEnter Password",
        3,
        "ngModelChange",
        "ngModel",
      ],
    ],
    template: function (n, e) {
      if (n & 1) {
        let t = h();
        o(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "input", 5, 0),
          f("change", function (v) {
            return c(t), d(e.onFileSelected(v));
          }),
          i(),
          m(6, "img", 6),
          i(),
          o(7, "div", 7),
          f("click", function () {
            c(t);
            let v = E(5);
            return d(v.click());
          }),
          m(8, "i", 8),
          i()(),
          M(9, z, 10, 0, "div", 9),
          o(10, "div", 10)(11, "h2", 11),
          s(12),
          i(),
          o(13, "p", 12),
          s(14),
          i(),
          o(15, "p", 13),
          s(16),
          i()(),
          o(17, "div", 14)(18, "button", 15),
          f("click", function () {
            return c(t), d((e.editMode = !e.editMode));
          }),
          m(19, "i", 16),
          s(20),
          i(),
          o(21, "button", 17),
          f("click", function () {
            return c(t), d((e.peditMode = !e.peditMode));
          }),
          m(22, "i", 18),
          s(23),
          i()(),
          M(24, L, 12, 2, "div", 19)(25, D, 12, 2, "div", 19),
          i()();
      }
      n & 2 &&
        (l(6),
        _(
          "src",
          e.imagePreview || e.user.profileImage || "assets/profile.png",
          O,
        ),
        l(3),
        _(
          "ngIf",
          e.imagePreview && !e.user.profileImage.includes(e.imagePreview),
        ),
        l(3),
        C(e.user.name),
        l(2),
        C(e.user.email),
        l(2),
        C(e.user.phone),
        l(4),
        y(" ", e.editMode ? "Cancel" : "Edit Profile", " "),
        l(3),
        y(" ", e.peditMode ? "Cancel" : "Change Password", " "),
        l(),
        _("ngIf", e.editMode),
        l(),
        _("ngIf", e.peditMode));
    },
    dependencies: [I, k, W, T, U, F],
    styles: [
      ".profile-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:60vh;padding:20px}.profile-card[_ngcontent-%COMP%]{width:100%;max-width:480px;background-color:#fff;border-radius:12px;box-shadow:0 8px 24px #00000014;padding:32px;transition:all .3s ease;position:relative}.image-wrapper[_ngcontent-%COMP%]{position:relative;width:120px;height:120px;margin:0 auto 24px}.image-container[_ngcontent-%COMP%]{position:relative;width:120px;height:120px;margin:0 auto 24px;border-radius:50%;overflow:hidden}.profile-pic[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-radius:50%;transition:all .3s ease}.edit-icon[_ngcontent-%COMP%]{position:absolute;top:0;right:0;background-color:#3b82f6;color:#fff;width:32px;height:32px;border-radius:50%;display:flex;justify-content:center;align-items:center;cursor:pointer;box-shadow:0 2px 5px #0003;border:2px solid white;transition:opacity .3s ease}.edit-icon[_ngcontent-%COMP%]:hover{transform:scale(1.1);background-color:#3a5cf7}.image-container[_ngcontent-%COMP%]:hover   .edit-icon[_ngcontent-%COMP%]{opacity:1}.user-info[_ngcontent-%COMP%]{text-align:center;margin-bottom:24px}.user-name[_ngcontent-%COMP%]{font-size:24px;font-weight:600;margin-bottom:8px;color:#1f2937}.user-email[_ngcontent-%COMP%], .user-phone[_ngcontent-%COMP%]{color:#6c757d;margin-bottom:4px}.action-buttons[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:16px;margin-bottom:24px}.btn-edit[_ngcontent-%COMP%], .btn-password[_ngcontent-%COMP%], .btn-save[_ngcontent-%COMP%]{padding:10px 20px;border-radius:8px;font-weight:500;transition:all .2s ease;display:flex;align-items:center;gap:8px;border:none;cursor:pointer;font-size:14px}.btn-edit[_ngcontent-%COMP%]{background-color:#f8f9fa;color:#3b82f6;border:1px solid #e9ecef}.btn-password[_ngcontent-%COMP%]{background-color:#f8f9fa;color:#1f2937;border:1px solid #e9ecef}.btn-save[_ngcontent-%COMP%]{background-color:#3b82f6;color:#fff;border:none}.btn-edit[_ngcontent-%COMP%]:hover, .btn-password[_ngcontent-%COMP%]:hover{background-color:#e9ecef}.btn-save[_ngcontent-%COMP%]:hover{background-color:#3a5cf7}.edit-form[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:20px;border-radius:8px;margin-top:16px;animation:_ngcontent-%COMP%_fadeIn .3s ease}.form-group[_ngcontent-%COMP%]{margin-bottom:16px}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin-bottom:8px;font-weight:500;color:#495057}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:12px;border:1px solid #ced4da;border-radius:8px;font-size:14px;transition:border-color .2s ease}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:#3b82f6;outline:none}.image-preview-controls[_ngcontent-%COMP%]{text-align:center;margin:0 auto 24px;padding:12px;background-color:#f1f5ff;border-radius:8px;animation:_ngcontent-%COMP%_fadeIn .3s ease}.preview-text[_ngcontent-%COMP%]{color:#4a6cf7;font-size:14px;margin-bottom:12px;font-weight:500}.image-actions[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:12px}.btn-save-image[_ngcontent-%COMP%], .btn-cancel-image[_ngcontent-%COMP%]{padding:8px 16px;border-radius:6px;font-size:14px;font-weight:500;cursor:pointer;display:flex;align-items:center;gap:6px;transition:all .2s ease;border:none}.btn-save-image[_ngcontent-%COMP%]{background-color:#4a6cf7;color:#fff}.btn-save-image[_ngcontent-%COMP%]:hover{background-color:#3a5cf7}.btn-cancel-image[_ngcontent-%COMP%]{background-color:#fff;color:#6c757d;border:1px solid #e9ecef}.btn-cancel-image[_ngcontent-%COMP%]:hover{background-color:#f8f9fa}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}@media (max-width: 576px){.profile-card[_ngcontent-%COMP%]{padding:24px 16px}.action-buttons[_ngcontent-%COMP%]{flex-direction:column;gap:12px}.btn-edit[_ngcontent-%COMP%], .btn-password[_ngcontent-%COMP%], .btn-save[_ngcontent-%COMP%]{width:100%;justify-content:center}}",
    ],
  });
};
export { N as ProfileComponent };
