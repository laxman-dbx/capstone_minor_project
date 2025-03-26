import { a as H } from "./chunk-5QNQV3N7.js";
import { a as X } from "./chunk-EUCFV5B3.js";
import {
  a as G,
  e as Y,
  h as W,
  k as Q,
  l as K,
  m as q,
  q as J,
} from "./chunk-ZOHBZ4HP.js";
import "./chunk-2PQBQFV5.js";
import { h as A } from "./chunk-GTDEETYW.js";
import "./chunk-UD6YS3BW.js";
import { a as Z } from "./chunk-CUN7J34L.js";
import { c as B, f as N } from "./chunk-E5QSSROS.js";
import { d as R } from "./chunk-6GCQ5O75.js";
import "./chunk-6FEKEJIW.js";
import {
  $a as s,
  $b as S,
  Db as n,
  Dc as j,
  Eb as o,
  Fb as g,
  Fc as L,
  Ib as h,
  Jc as y,
  Lb as u,
  Mb as c,
  Qb as V,
  Rb as I,
  Sb as z,
  Wb as l,
  Xb as k,
  Ya as O,
  Yb as w,
  ac as T,
  bc as D,
  dc as E,
  e as U,
  fb as b,
  mb as C,
  oa as d,
  pa as p,
  rb as v,
  va as F,
  yb as m,
} from "./chunk-4KGF3EVT.js";
var oe = ["fileDropRef"],
  M = class a {
    fileChange = new F();
    fileDropRef;
    file = null;
    showModal = !1;
    onDragOver(i) {
      i.preventDefault(),
        i.stopPropagation(),
        this.fileDropRef.nativeElement.classList.add("dragover");
    }
    onDragLeave(i) {
      i.preventDefault(),
        i.stopPropagation(),
        this.fileDropRef.nativeElement.classList.remove("dragover");
    }
    onDrop(i) {
      i.preventDefault(),
        i.stopPropagation(),
        this.fileDropRef.nativeElement.classList.remove("dragover");
      let e = i.dataTransfer?.files;
      e?.length && this.handleFile(e[0]);
    }
    onFileSelect(i) {
      let e = i.target.files[0];
      e && this.handleFile(e);
    }
    handleFile(i) {
      (this.file = i), this.fileChange.emit({ files: [i] });
    }
    removeFile() {
      (this.file = null), this.fileChange.emit({ files: [] });
    }
    static ɵfac = function (e) {
      return new (e || a)();
    };
    static ɵcmp = C({
      type: a,
      selectors: [["app-dropfileinput"]],
      viewQuery: function (e, r) {
        if ((e & 1 && V(oe, 5), e & 2)) {
          let t;
          I((t = z())) && (r.fileDropRef = t.first);
        }
      },
      outputs: { fileChange: "fileChange" },
      decls: 16,
      vars: 0,
      consts: [
        ["fileDropRef", ""],
        [1, "container"],
        [1, "drop-container", 3, "dragover", "dragleave", "drop"],
        [1, "icon-container"],
        [1, "upload-label"],
        ["src", "assets/browse.png", "alt", "browse", 1, "upload-icon"],
        ["type", "file", "hidden", "", 3, "change"],
        ["src", "assets/drive.png", "alt", "drive", 1, "upload-icon"],
        ["src", "assets/dropbox.png", "alt", "dropbox", 1, "upload-icon"],
        [1, "drop-text"],
      ],
      template: function (e, r) {
        if (e & 1) {
          let t = h();
          l(0, "`\n"),
            n(1, "div", 1)(2, "div", 2, 0),
            u("dragover", function (_) {
              return d(t), p(r.onDragOver(_));
            })("dragleave", function (_) {
              return d(t), p(r.onDragLeave(_));
            })("drop", function (_) {
              return d(t), p(r.onDrop(_));
            }),
            n(4, "div", 3)(5, "label", 4),
            g(6, "img", 5),
            n(7, "input", 6),
            u("change", function (_) {
              return d(t), p(r.onFileSelect(_));
            }),
            o()()(),
            n(8, "div", 3)(9, "label", 4),
            g(10, "img", 7),
            o()(),
            n(11, "div", 3)(12, "label", 4),
            g(13, "img", 8),
            o()(),
            n(14, "p", 9),
            l(15, "Or Drag & Drop your files here"),
            o()()();
        }
      },
      dependencies: [y],
      styles: [
        ".container[_ngcontent-%COMP%]{padding:24px;max-width:800px;margin:0 auto}.drop-container[_ngcontent-%COMP%]{border:2px dashed #ccc;border-radius:8px;padding:16px;text-align:center;margin:auto;max-width:400px}.drop-container.dragover[_ngcontent-%COMP%]{border-color:#666;background-color:#f7f7f7}.icon-container[_ngcontent-%COMP%]{margin-bottom:16px}.upload-icon[_ngcontent-%COMP%]{width:64px;height:64px;cursor:pointer}.drop-text[_ngcontent-%COMP%]{color:#666;font-size:14px}.modal[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;display:flex;align-items:center;justify-content:center}.modal-content[_ngcontent-%COMP%]{background-color:#fff;padding:24px;border-radius:8px;max-width:400px;width:90%}.modal-actions[_ngcontent-%COMP%]{margin-top:16px;display:flex;gap:8px}.confirm-button[_ngcontent-%COMP%]{background-color:#1976d2;color:#fff;border:none;padding:8px 16px;border-radius:4px;cursor:pointer}.cancel-button[_ngcontent-%COMP%]{background-color:#f44336;color:#fff;border:none;padding:8px 16px;border-radius:4px;cursor:pointer}",
      ],
    });
  };
var ee = (a) => ({ show: a });
function re(a, i) {
  a & 1 && (n(0, "h4", 13), l(1, "SELECT YOUR FILES"), o());
}
function ae(a, i) {
  if (a & 1) {
    let e = h();
    n(0, "button", 14),
      u("click", function () {
        d(e);
        let t = c();
        return p((t.showGuide = !0));
      }),
      g(1, "i", 15),
      l(2, " View Upload Guide "),
      o();
  }
}
function le(a, i) {
  a & 1 && (n(0, "h4", 13), l(1, "MASKED IMAGE"), o());
}
function se(a, i) {
  if (a & 1) {
    let e = h();
    n(0, "div", 36)(1, "div", 37)(2, "label", 38),
      l(3, "Save Masked Document?"),
      o(),
      n(4, "div", 19),
      u("mouseenter", function () {
        d(e);
        let t = c(2);
        return p((t.showTooltip2 = !0));
      })("mouseleave", function () {
        d(e);
        let t = c(2);
        return p((t.showTooltip2 = !1));
      }),
      n(5, "span", 20),
      u("click", function () {
        d(e);
        let t = c(2);
        return p((t.showTooltip2 = !t.showTooltip2));
      }),
      g(6, "i", 21),
      o(),
      n(7, "div", 22)(8, "pre"),
      l(9, "We securely store the masked document with encryption."),
      o()()()(),
      n(10, "label", 39)(11, "input", 40),
      D("ngModelChange", function (t) {
        d(e);
        let f = c(2);
        return T(f.saveMaskedDocument, t) || (f.saveMaskedDocument = t), p(t);
      }),
      o(),
      g(12, "span", 41),
      o()();
  }
  if (a & 2) {
    let e = c(2);
    s(7),
      m("ngClass", E(2, ee, e.showTooltip2)),
      s(4),
      S("ngModel", e.saveMaskedDocument);
  }
}
function ce(a, i) {
  if (
    (a & 1 && (n(0, "div", 51)(1, "div", 52), g(2, "img", 53), o()()), a & 2)
  ) {
    let e = c(3);
    s(2), m("src", e.fileUrl, O);
  }
}
function de(a, i) {
  if (a & 1) {
    let e = h();
    n(0, "div", 42)(1, "div", 43)(2, "div", 44),
      g(3, "i", 45),
      n(4, "div", 46)(5, "strong"),
      l(6),
      o(),
      n(7, "span", 47),
      l(8),
      o()()(),
      n(9, "button", 48),
      u("click", function () {
        d(e);
        let t = c(2);
        return p(t.removeFile());
      }),
      g(10, "i", 49),
      o(),
      v(11, ce, 3, 1, "div", 50),
      o()();
  }
  if (a & 2) {
    let e = c(2);
    s(6),
      k(e.file.name),
      s(2),
      w("", (e.file.size / 1024).toFixed(2), " KB"),
      s(3),
      m("ngIf", e.fileUrl);
  }
}
function pe(a, i) {
  a & 1 && g(0, "i", 54);
}
function me(a, i) {
  a & 1 && (n(0, "span"), l(1, "Mask Document"), o());
}
function ge(a, i) {
  a & 1 && (n(0, "span", 55), g(1, "span", 56), o());
}
function ue(a, i) {
  if (a & 1) {
    let e = h();
    n(0, "div", 16)(1, "div", 17)(2, "label", 18),
      u("mouseenter", function () {
        d(e);
        let t = c();
        return p((t.showTooltip = !0));
      })("mouseleave", function () {
        d(e);
        let t = c();
        return p((t.showTooltip = !1));
      }),
      l(3, " Select Document Type: "),
      n(4, "div", 19),
      u("mouseenter", function () {
        d(e);
        let t = c();
        return p((t.showTooltip = !0));
      })("mouseleave", function () {
        d(e);
        let t = c();
        return p((t.showTooltip = !1));
      }),
      n(5, "span", 20),
      u("click", function () {
        d(e);
        let t = c();
        return p((t.showTooltip = !t.showTooltip));
      }),
      g(6, "i", 21),
      o(),
      n(7, "div", 22)(8, "pre"),
      l(9, "Choose the document type you want to upload."),
      o(),
      n(10, "pre"),
      l(11, "This can enhance the level of masking the data."),
      o()()()(),
      n(12, "select", 23),
      D("ngModelChange", function (t) {
        d(e);
        let f = c();
        return (
          T(f.selectedDocumentType, t) || (f.selectedDocumentType = t), p(t)
        );
      }),
      n(13, "option", 24),
      l(14, "Select Document Type"),
      o(),
      n(15, "option", 25),
      l(16, "Aadhaar Card"),
      o(),
      n(17, "option", 26),
      l(18, "PAN Card"),
      o(),
      n(19, "option", 27),
      l(20, "Driving License"),
      o(),
      n(21, "option", 28),
      l(22, "Other"),
      o()()(),
      n(23, "app-dropfileinput", 29),
      u("fileChange", function (t) {
        d(e);
        let f = c();
        return p(f.onFileChange(t));
      }),
      o(),
      v(24, se, 13, 4, "div", 30)(25, de, 12, 3, "div", 31),
      n(26, "button", 32),
      u("click", function () {
        d(e);
        let t = c();
        return p(t.uploadAndFetchMaskedFile());
      }),
      v(27, pe, 1, 0, "i", 33)(28, me, 2, 0, "span", 34)(
        29,
        ge,
        2,
        0,
        "span",
        35,
      ),
      o()();
  }
  if (a & 2) {
    let e = c();
    s(7),
      m("ngClass", E(8, ee, e.showTooltip)),
      s(5),
      S("ngModel", e.selectedDocumentType),
      s(12),
      m("ngIf", e.isLogin),
      s(),
      m("ngIf", e.file),
      s(),
      m("disabled", !e.file || e.isUploading),
      s(),
      m("ngIf", !e.isUploading),
      s(),
      m("ngIf", !e.isUploading),
      s(),
      m("ngIf", e.isUploading);
  }
}
function fe(a, i) {
  if (
    (a & 1 && (n(0, "div", 51)(1, "div", 52), g(2, "img", 53), o()()), a & 2)
  ) {
    let e = c(3);
    s(2), m("src", e.fileUrl, O);
  }
}
function _e(a, i) {
  if (a & 1) {
    let e = h();
    n(0, "div", 42)(1, "div", 43)(2, "div", 44),
      g(3, "i", 45),
      n(4, "div", 46)(5, "strong"),
      l(6),
      o(),
      n(7, "span", 47),
      l(8),
      o()()(),
      n(9, "button", 48),
      u("click", function () {
        d(e);
        let t = c(2);
        return p(t.removeFile());
      }),
      g(10, "i", 49),
      o(),
      v(11, fe, 3, 1, "div", 50),
      o()();
  }
  if (a & 2) {
    let e = c(2);
    s(6),
      k(e.file.name),
      s(2),
      w("", (e.file.size / 1024).toFixed(2), " KB"),
      s(3),
      m("ngIf", e.fileUrl);
  }
}
function he(a, i) {
  if (a & 1) {
    let e = h();
    n(0, "div", 57),
      v(1, _e, 12, 3, "div", 31),
      n(2, "div", 58),
      g(3, "i", 59),
      o(),
      n(4, "h3"),
      l(5, "File Masked Successfully!"),
      o(),
      n(6, "p"),
      l(7, "Your file has been processed and is ready for download."),
      o(),
      n(8, "button", 60),
      u("click", function () {
        d(e);
        let t = c();
        return p(t.downloadMaskedFile());
      }),
      g(9, "i", 61),
      l(10, " Download Masked File "),
      o(),
      n(11, "button", 62),
      u("click", function () {
        d(e);
        let t = c();
        return p(t.removeFile());
      }),
      g(12, "i", 63),
      l(13, " Upload Another File "),
      o()();
  }
  if (a & 2) {
    let e = c();
    s(), m("ngIf", e.file);
  }
}
function ve(a, i) {
  if ((a & 1 && (n(0, "div", 64), g(1, "i", 65), l(2), o()), a & 2)) {
    let e = c();
    s(2), w(" ", e.errorMessage, " ");
  }
}
var $ = class a {
  constructor(i, e, r, t, f) {
    this.authService = i;
    this.router = e;
    this.sanitizer = r;
    this.documentService = t;
    this.toastr = f;
  }
  file = null;
  isUploading = !1;
  isSuccess = !1;
  isDownloading = !1;
  errorMessage = "";
  fileUrl = null;
  maskedBlob = null;
  selectedDocumentType = "adhaar";
  saveMaskedDocument = !1;
  responseFileType = null;
  showTooltip = !1;
  showTooltip2 = !1;
  uploadProgress = 0;
  originalFileName = null;
  showGuide = !1;
  isLogin = !1;
  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((i) => {
      this.isLogin = i;
    });
  }
  validateFile(i) {
    return ["image/jpeg", "image/png", "application/pdf"].includes(i.type)
      ? i.size > 10485760
        ? "File size must be less than 10MB"
        : null
      : "Only JPEG, PNG and PDF files are allowed";
  }
  onFileChange(i) {
    if (!i.files.length) return;
    let e = i.files[0],
      r = this.validateFile(e);
    if (r) {
      (this.errorMessage = r),
        this.toastr.error(r, "", { positionClass: "toast-top-center" });
      return;
    }
    (this.file = e),
      (this.errorMessage = ""),
      (this.isSuccess = !1),
      (this.maskedBlob = null),
      (this.fileUrl = null),
      (this.uploadProgress = 0);
    let t = new FileReader();
    (t.onload = () => {
      this.fileUrl = this.sanitizer.bypassSecurityTrustUrl(t.result);
    }),
      t.readAsDataURL(this.file);
  }
  removeFile() {
    (this.file = null),
      (this.isSuccess = !1),
      (this.errorMessage = ""),
      (this.maskedBlob = null),
      (this.fileUrl = null),
      (this.responseFileType = null),
      (this.uploadProgress = 0);
  }
  uploadAndFetchMaskedFile() {
    return U(this, null, function* () {
      if (!this.file) {
        (this.errorMessage = "Please select a file first."),
          this.toastr.error(this.errorMessage, "", {
            positionClass: "toast-top-center",
          });
        return;
      }
      if (!this.selectedDocumentType) {
        (this.errorMessage = "Please select a document type."),
          this.toastr.error(this.errorMessage, "", {
            positionClass: "toast-top-center",
          });
        return;
      }
      (this.isUploading = !0), (this.errorMessage = "");
      let i = {
        documentType: this.selectedDocumentType,
        file: this.file,
        isSave: this.saveMaskedDocument,
      };
      try {
        let e;
        if (
          (this.isLogin
            ? (e = yield this.documentService.uploadDocument(i))
            : (e = yield this.documentService.publicUploadDocument(i)),
          e.isNoPII)
        ) {
          (this.errorMessage = e.message),
            this.toastr.warning(e.message, "", {
              positionClass: "toast-top-center",
            });
          return;
        }
        if (
          (i.isSave === !1
            ? ((this.maskedBlob = new Blob([e.directBlob], {
                type: e.fileType || this.file.type,
              })),
              (this.responseFileType = e.fileType || null),
              (this.originalFileName = this.file.name))
            : ((this.maskedBlob = yield this.documentService.downloadDocument(
                e.fileUrl,
              )),
              (this.originalFileName = this.file.name),
              (this.responseFileType = e.fileType || null)),
          !(this.maskedBlob instanceof Blob))
        )
          throw new Error("Invalid file received. Expected a Blob.");
        let r = URL.createObjectURL(this.maskedBlob);
        (this.fileUrl = this.sanitizer.bypassSecurityTrustUrl(r)),
          (this.isSuccess = !0),
          this.toastr.success("File processed successfully!", "", {
            positionClass: "toast-top-center",
          });
      } catch (e) {
        (this.errorMessage = e.message || "An error occurred during upload."),
          this.toastr.error(this.errorMessage, "", {
            positionClass: "toast-top-center",
          }),
          console.error("Upload error:", e);
      } finally {
        this.isUploading = !1;
      }
    });
  }
  downloadMaskedFile() {
    if (!this.maskedBlob) {
      (this.errorMessage = "No file available for download."),
        this.toastr.error(this.errorMessage, "", {
          positionClass: "toast-top-center",
        });
      return;
    }
    if (!this.isDownloading) {
      (this.isDownloading = !0), (this.errorMessage = "");
      try {
        let i = window.URL.createObjectURL(this.maskedBlob),
          e = document.createElement("a"),
          r = new Date(),
          t =
            r.getFullYear() +
            String(r.getMonth() + 1).padStart(2, "0") +
            String(r.getDate()).padStart(2, "0"),
          f = this.originalFileName || this.file?.name || "file",
          _ = f.split(".")[0],
          P = f.split(".").pop() || "",
          x;
        this.responseFileType
          ? this.responseFileType.includes("jpeg") ||
            this.responseFileType.includes("jpg")
            ? (x = "jpg")
            : this.responseFileType.includes("png")
              ? (x = "png")
              : (x = this.responseFileType.split("/").pop() || P)
          : P.toLowerCase() === "pdf"
            ? (x = "jpg")
            : (x = P);
        let te = `${t}_masked_${_}.${x}`;
        (e.href = i),
          (e.download = te),
          document.body.appendChild(e),
          e.click(),
          setTimeout(() => {
            window.URL.revokeObjectURL(i), document.body.removeChild(e);
          }, 100),
          this.toastr.success("File downloaded successfully!", "", {
            positionClass: "toast-top-center",
          });
      } catch (i) {
        console.error("Download error:", i),
          (this.errorMessage = "Download failed. Please try again."),
          this.toastr.error(this.errorMessage, "", {
            positionClass: "toast-top-center",
          });
      } finally {
        this.isDownloading = !1;
      }
    }
  }
  closeGuide() {
    this.showGuide = !1;
  }
  static ɵfac = function (e) {
    return new (e || a)(b(H), b(B), b(R), b(X), b(A));
  };
  static ɵcmp = C({
    type: a,
    selectors: [["app-upload"]],
    decls: 16,
    vars: 7,
    consts: [
      [1, "upload-wrapper"],
      [1, "page-header"],
      [1, "page-title"],
      [1, "page-description"],
      [1, "upload-box"],
      [1, "upload"],
      [1, "header-box"],
      ["class", "header-content", 4, "ngIf"],
      ["class", "guide-link", 3, "click", 4, "ngIf"],
      ["class", "upload-content", 4, "ngIf"],
      ["class", "success-screen", 4, "ngIf"],
      ["class", "error-message", 4, "ngIf"],
      [3, "close", "show"],
      [1, "header-content"],
      [1, "guide-link", 3, "click"],
      [1, "fas", "fa-book"],
      [1, "upload-content"],
      [1, "document-type-wrapper"],
      [
        "for",
        "documentType",
        1,
        "label-dropdown",
        "flex",
        "items-center",
        3,
        "mouseenter",
        "mouseleave",
      ],
      [1, "info-container", 3, "mouseenter", "mouseleave"],
      [1, "info-button", 3, "click"],
      [1, "fas", "fa-info-circle"],
      [1, "tooltip", 3, "ngClass"],
      [
        "id",
        "documentType",
        1,
        "document-type-dropdown",
        3,
        "ngModelChange",
        "ngModel",
      ],
      ["value", "", "disabled", "", "selected", ""],
      ["value", "adhaar"],
      ["value", "pan"],
      ["value", "driving_license"],
      ["value", "other"],
      [3, "fileChange"],
      ["class", "toggle-container", 4, "ngIf"],
      ["class", "file-list", 4, "ngIf"],
      [1, "upload-button", 3, "click", "disabled"],
      ["class", "fas fa-mask", 4, "ngIf"],
      [4, "ngIf"],
      ["class", "spinner", 4, "ngIf"],
      [1, "toggle-container"],
      [1, "labelForSwitch"],
      [1, "toggle-label"],
      [1, "switch"],
      ["type", "checkbox", 3, "ngModelChange", "ngModel"],
      [1, "slider"],
      [1, "file-list"],
      [1, "file-item"],
      [1, "file-info"],
      [1, "fas", "fa-file-alt", "file-icon"],
      [1, "file-details"],
      [1, "file-size"],
      [1, "remove-button", 3, "click"],
      [1, "fas", "fa-times"],
      ["class", "preview-container", 4, "ngIf"],
      [1, "preview-container"],
      [1, "preview-box"],
      ["alt", "Masked Preview", 1, "preview-image", 3, "src"],
      [1, "fas", "fa-mask"],
      [1, "spinner"],
      [1, "spinner-inner"],
      [1, "success-screen"],
      [1, "success-icon"],
      [1, "fas", "fa-check-circle"],
      [1, "download-button", 3, "click"],
      [1, "fas", "fa-download"],
      [1, "back-button", 3, "click"],
      [1, "fas", "fa-arrow-left"],
      [1, "error-message"],
      [1, "fas", "fa-exclamation-circle"],
    ],
    template: function (e, r) {
      e & 1 &&
        (n(0, "div", 0)(1, "div", 1)(2, "h1", 2),
        l(3, "Document Masking"),
        o(),
        n(4, "p", 3),
        l(
          5,
          " Upload and mask sensitive information in your documents securely ",
        ),
        o()(),
        n(6, "div", 4)(7, "div", 5)(8, "div", 6),
        v(9, re, 2, 0, "h4", 7)(10, ae, 3, 0, "button", 8)(
          11,
          le,
          2,
          0,
          "h4",
          7,
        ),
        o(),
        v(12, ue, 30, 10, "div", 9)(13, he, 14, 1, "div", 10)(
          14,
          ve,
          3,
          1,
          "div",
          11,
        ),
        o()(),
        n(15, "app-guide", 12),
        u("close", function () {
          return r.closeGuide();
        }),
        o()()),
        e & 2 &&
          (s(9),
          m("ngIf", !r.isSuccess),
          s(),
          m("ngIf", !r.isSuccess),
          s(),
          m("ngIf", r.isSuccess),
          s(),
          m("ngIf", !r.isSuccess),
          s(),
          m("ngIf", r.isSuccess),
          s(),
          m("ngIf", r.errorMessage),
          s(),
          m("show", r.showGuide));
    },
    dependencies: [y, j, L, M, J, K, q, G, Q, Y, W, N, Z],
    styles: [
      `.upload-wrapper[_ngcontent-%COMP%]{max-width:100%}.page-header[_ngcontent-%COMP%]{background-color:var(--primary-800);color:#fff;padding:var(--spacing-8) 0 var(--spacing-10);margin-bottom:var(--spacing-8);position:relative;overflow:hidden}.page-header[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background-image:linear-gradient(135deg,rgba(0,0,0,.1) 25%,transparent 25%,transparent 50%,rgba(0,0,0,.1) 50%,rgba(0,0,0,.1) 75%,transparent 75%,transparent);background-size:20px 20px;opacity:.2}.page-title[_ngcontent-%COMP%]{font-size:var(--font-3xl);font-weight:700;margin:0 0 var(--spacing-2);position:relative;align-items:center;justify-content:center;text-align:center}.page-description[_ngcontent-%COMP%]{font-size:1.25rem;opacity:.95;max-width:700px;margin:0 auto;line-height:1.6}.upload-box[_ngcontent-%COMP%]{max-width:1168px;margin:0 auto;padding:2rem;min-height:calc(100vh - 100px);display:flex;flex-direction:column;justify-content:center}.upload-box[_ngcontent-%COMP%]{background-color:#fff;border-radius:16px;box-shadow:0 20px 50px #0000001a;overflow:hidden;border:1px solid var(--gray-200);position:relative}.upload-box[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(to right,var(--primary-600),var(--primary-800));z-index:1}.upload[_ngcontent-%COMP%]{padding:2.5rem}.header-box[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:2rem;padding-bottom:1.25rem;border-bottom:2px solid var(--gray-200)}.header-content[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;color:var(--gray-800);margin:0;position:relative}.header-content[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-1.25rem;left:0;width:50px;height:3px;background-color:var(--primary-800);border-radius:3px}.guide-link[_ngcontent-%COMP%]{display:inline-flex;align-items:center;color:var(--primary-800);font-weight:600;text-decoration:none;padding:.75rem 1.25rem;border-radius:8px;transition:all .3s ease;background-color:var(--primary-50);border:1px solid var(--primary-200)}.guide-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:.75rem;font-size:1.1rem}.guide-link[_ngcontent-%COMP%]:hover{background-color:var(--primary-100);color:var(--primary-800);transform:translateY(-2px);box-shadow:0 4px 12px #6d28d926}.document-type-wrapper[_ngcontent-%COMP%]{margin-bottom:2rem;position:relative}.label-dropdown[_ngcontent-%COMP%]{display:flex;align-items:center;font-weight:600;color:var(--gray-700);margin-bottom:.75rem;font-size:1.1rem}.info-container[_ngcontent-%COMP%]{position:relative;display:inline-block}.info-button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background-color:var(--gray-100);color:var(--gray-500);cursor:pointer;transition:all .2s ease}.info-button[_ngcontent-%COMP%]:hover{color:var(--primary-800);background-color:var(--primary-100);transform:scale(1.1)}.tooltip[_ngcontent-%COMP%]{position:absolute;left:50%;top:35px;transform:translate(-50%);background-color:var(--gray-800);color:#fff;padding:1rem;border-radius:8px;font-size:.9rem;z-index:10;box-shadow:0 15px 30px -5px #00000040;display:block;width:auto;min-width:200px;opacity:0;visibility:hidden;transition:opacity .3s ease-in-out,transform .3s ease-in-out}.tooltip[_ngcontent-%COMP%]:before{content:"";position:absolute;top:-6px;left:50%;transform:translate(-50%) rotate(45deg);width:12px;height:12px;background-color:var(--gray-800)}.tooltip.show[_ngcontent-%COMP%]{opacity:1;visibility:visible;max-width:100px;transform:translate(-50%) translateY(0)}.tooltip[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:0;font-family:inherit;white-space:pre-wrap;line-height:1.5}.document-type-dropdown[_ngcontent-%COMP%]{width:100%;padding:1rem 3rem 1rem 1.25rem;border:2px solid var(--gray-300);border-radius:10px;background-color:var(--gray-50);font-size:1.1rem;color:var(--gray-800);transition:all .3s ease;cursor:pointer;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 1rem center;background-size:1.5rem}.document-type-dropdown[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--primary-800);box-shadow:0 0 0 4px var(--primary-100);background-color:#fff}.document-type-dropdown[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{padding:1rem;font-size:1rem}.toggle-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:2rem 0;padding:1.25rem;background-color:var(--gray-50);border-radius:12px;border:2px solid var(--gray-200);transition:all .3s ease}.toggle-container[_ngcontent-%COMP%]:hover{border-color:var(--gray-300);box-shadow:0 4px 12px #0000000d}.labelForSwitch[_ngcontent-%COMP%]{display:flex;align-items:center}.toggle-label[_ngcontent-%COMP%]{font-weight:600;color:var(--gray-700);font-size:1.1rem}.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:56px;height:28px}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;inset:0;background-color:var(--gray-300);transition:.4s;border-radius:28px}.slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:20px;width:20px;left:4px;bottom:4px;background-color:#fff;transition:.4s;border-radius:50%;box-shadow:0 2px 4px #0000001a}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:var(--primary-800)}input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{box-shadow:0 0 1px var(--primary-600)}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translate(28px)}.file-list[_ngcontent-%COMP%]{margin:2rem 0}.file-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:1.5rem;background-color:var(--gray-50);border-radius:12px;border:2px solid var(--gray-200);transition:all .3s ease}.file-item[_ngcontent-%COMP%]:hover{border-color:var(--gray-300);box-shadow:0 8px 20px #0000000d;transform:translateY(-2px)}.file-info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem}.file-icon[_ngcontent-%COMP%]{font-size:2rem;color:var(--primary-800);margin-right:1.25rem}.file-details[_ngcontent-%COMP%]{flex:1}.file-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:1.1rem;color:var(--gray-800);display:block;margin-bottom:.25rem}.file-size[_ngcontent-%COMP%]{display:block;font-size:.95rem;color:var(--gray-500);margin-top:.25rem}.remove-button[_ngcontent-%COMP%]{background:none;border:none;color:var(--red-500);cursor:pointer;font-size:1.1rem;padding:.5rem;border-radius:8px;transition:all .3s ease;display:flex;align-items:center;justify-content:center;width:36px;height:36px}.remove-button[_ngcontent-%COMP%]:hover{background-color:var(--red-100);transform:scale(1.1)}.preview-container[_ngcontent-%COMP%]{margin-top:1.25rem;width:100%}.preview-box[_ngcontent-%COMP%]{width:100%;height:250px;overflow:hidden;border-radius:12px;border:2px solid var(--gray-200);display:flex;align-items:center;justify-content:center;background-color:var(--gray-100);transition:all .3s ease}.preview-box[_ngcontent-%COMP%]:hover{border-color:var(--gray-300);box-shadow:0 8px 20px #0000000d}.preview-image[_ngcontent-%COMP%]{max-width:100%;max-height:100%;object-fit:contain;transition:transform .3s ease}.preview-box[_ngcontent-%COMP%]:hover   .preview-image[_ngcontent-%COMP%]{transform:scale(1.02)}.upload-button[_ngcontent-%COMP%], .download-button[_ngcontent-%COMP%], .back-button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;padding:1.25rem;border:none;border-radius:12px;font-size:1.1rem;font-weight:600;cursor:pointer;transition:all .3s ease;position:relative;overflow:hidden}.upload-button[_ngcontent-%COMP%]:after, .download-button[_ngcontent-%COMP%]:after, .back-button[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(#ffffff1a,#fff0);pointer-events:none}.upload-button[_ngcontent-%COMP%]{background:var(--primary-800);color:#fff;margin-top:2rem}.upload-button[_ngcontent-%COMP%]:hover:not(:disabled){background:var(--primary-700);transform:translateY(-3px);box-shadow:0 10px 25px #6d28d94d}.upload-button[_ngcontent-%COMP%]:disabled{background:var(--gray-300);cursor:not-allowed;opacity:.7}.upload-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .download-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .back-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:.75rem;font-size:1.2rem}.spinner[_ngcontent-%COMP%]{display:inline-block;width:24px;height:24px;border-radius:50%;border:3px solid rgba(255,255,255,.3);border-top-color:#fff;animation:_ngcontent-%COMP%_spin 1s linear infinite}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}.success-screen[_ngcontent-%COMP%]{text-align:center;padding:2rem;animation:fadeIn .5s ease}.success-icon[_ngcontent-%COMP%]{font-size:4rem;color:var(--green-500);margin:1.5rem 0;animation:_ngcontent-%COMP%_scaleIn .5s ease}@keyframes _ngcontent-%COMP%_scaleIn{0%{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}.success-screen[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.75rem;color:var(--gray-800);margin-bottom:.75rem;font-weight:700}.success-screen[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray-500);margin-bottom:2rem;font-size:1.1rem;line-height:1.6}.download-button[_ngcontent-%COMP%]{background:var(--primary-800);color:#fff;margin-bottom:1.25rem}.download-button[_ngcontent-%COMP%]:hover{background:var(--primary-700);transform:translateY(-3px);box-shadow:0 10px 25px var(--primary-100)}.back-button[_ngcontent-%COMP%]{background:var(--gray-100);color:var(--gray-600);font-weight:600;border:1px solid var(--gray-200)}.back-button[_ngcontent-%COMP%]:hover{background:var(--gray-200);transform:translateY(-3px);box-shadow:0 10px 25px #0000001a}.error-message[_ngcontent-%COMP%]{margin-top:1.5rem;padding:1rem;background-color:var(--red-100);color:var(--red-600);border-radius:10px;font-size:1rem;display:flex;align-items:center;border-left:4px solid var(--red-500);animation:_ngcontent-%COMP%_slideIn .3s ease}@keyframes _ngcontent-%COMP%_slideIn{0%{transform:translate(-10px);opacity:0}to{transform:translate(0);opacity:1}}.error-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:.75rem;font-size:1.25rem}@media (max-width: 768px){.page-title[_ngcontent-%COMP%]{font-size:2.25rem}.page-description[_ngcontent-%COMP%]{font-size:1.1rem}.upload[_ngcontent-%COMP%]{padding:1.75rem}.upload-wrapper[_ngcontent-%COMP%]{padding:1rem}}@media (max-width: 480px){.page-title[_ngcontent-%COMP%]{font-size:2rem}.page-header[_ngcontent-%COMP%]{padding:1.5rem}.toggle-container[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.switch[_ngcontent-%COMP%]{margin-top:1rem}.header-box[_ngcontent-%COMP%]{flex-direction:column;gap:1rem;text-align:center}.header-content[_ngcontent-%COMP%]:after{left:50%;transform:translate(-50%)}.upload-button[_ngcontent-%COMP%], .download-button[_ngcontent-%COMP%], .back-button[_ngcontent-%COMP%]{padding:1rem}}`,
    ],
  });
};
export { $ as UploadComponent };
