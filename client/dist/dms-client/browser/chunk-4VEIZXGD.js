import { a as A } from "./chunk-5QNQV3N7.js";
import { a as H } from "./chunk-SW7ACCD2.js";
import {
  a as Y,
  e as W,
  h as G,
  k as Q,
  l as K,
  m as q,
  q as J,
} from "./chunk-ZOHBZ4HP.js";
import { h as N } from "./chunk-GTDEETYW.js";
import "./chunk-2PQBQFV5.js";
import "./chunk-UD6YS3BW.js";
import { c as j, d as R, f as B } from "./chunk-E5QSSROS.js";
import { d as L } from "./chunk-6GCQ5O75.js";
import "./chunk-OMR3M7LI.js";
import {
  $a as s,
  $b as S,
  Db as n,
  Eb as o,
  Fb as p,
  Fc as z,
  Ib as v,
  Jc as y,
  Lb as u,
  Mb as c,
  Qb as F,
  Rb as I,
  Sb as V,
  Wb as l,
  Xb as k,
  Ya as O,
  Yb as w,
  ac as T,
  bc as D,
  e as E,
  fb as b,
  mb as C,
  oa as d,
  pa as m,
  rb as _,
  va as U,
  yb as g,
} from "./chunk-4KGF3EVT.js";
var te = ["fileDropRef"],
  M = class r {
    fileChange = new U();
    fileDropRef;
    file = null;
    showModal = !1;
    onDragOver(t) {
      t.preventDefault(),
        t.stopPropagation(),
        this.fileDropRef.nativeElement.classList.add("dragover");
    }
    onDragLeave(t) {
      t.preventDefault(),
        t.stopPropagation(),
        this.fileDropRef.nativeElement.classList.remove("dragover");
    }
    onDrop(t) {
      t.preventDefault(),
        t.stopPropagation(),
        this.fileDropRef.nativeElement.classList.remove("dragover");
      let e = t.dataTransfer?.files;
      e?.length && this.handleFile(e[0]);
    }
    onFileSelect(t) {
      let e = t.target.files[0];
      e && this.handleFile(e);
    }
    handleFile(t) {
      (this.file = t), this.fileChange.emit({ files: [t] });
    }
    removeFile() {
      (this.file = null), this.fileChange.emit({ files: [] });
    }
    static ɵfac = function (e) {
      return new (e || r)();
    };
    static ɵcmp = C({
      type: r,
      selectors: [["app-dropfileinput"]],
      viewQuery: function (e, a) {
        if ((e & 1 && F(te, 5), e & 2)) {
          let i;
          I((i = V())) && (a.fileDropRef = i.first);
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
      template: function (e, a) {
        if (e & 1) {
          let i = v();
          l(0, "`\n"),
            n(1, "div", 1)(2, "div", 2, 0),
            u("dragover", function (h) {
              return d(i), m(a.onDragOver(h));
            })("dragleave", function (h) {
              return d(i), m(a.onDragLeave(h));
            })("drop", function (h) {
              return d(i), m(a.onDrop(h));
            }),
            n(4, "div", 3)(5, "label", 4),
            p(6, "img", 5),
            n(7, "input", 6),
            u("change", function (h) {
              return d(i), m(a.onFileSelect(h));
            }),
            o()()(),
            n(8, "div", 3)(9, "label", 4),
            p(10, "img", 7),
            o()(),
            n(11, "div", 3)(12, "label", 4),
            p(13, "img", 8),
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
function ne(r, t) {
  r & 1 && (n(0, "h4", 12), l(1, "SELECT YOUR FILES"), o());
}
function ie(r, t) {
  r & 1 && (n(0, "a", 13), p(1, "i", 14), l(2, " View Upload Guide "), o());
}
function oe(r, t) {
  r & 1 && (n(0, "h4", 12), l(1, "MASKED IMAGE"), o());
}
function re(r, t) {
  r & 1 &&
    (n(0, "span", 34)(1, "pre"),
    l(
      2,
      `Choose the document type 
you want to upload.`,
    ),
    o(),
    n(3, "pre"),
    l(
      4,
      `This can enhance the level 
of masking the data.`,
    ),
    o()());
}
function ae(r, t) {
  r & 1 &&
    (n(0, "span", 34)(1, "pre"),
    l(2, "We securely store the masked document with AES-256 encryption."),
    o()());
}
function le(r, t) {
  if (r & 1) {
    let e = v();
    n(0, "div", 35)(1, "div", 36)(2, "label", 37),
      l(3, "Save Masked Document?"),
      o(),
      n(4, "span", 38),
      u("mouseenter", function () {
        d(e);
        let i = c(2);
        return m(i.showTooltip2);
      })("mouseleave", function () {
        d(e);
        let i = c(2);
        return m((i.showTooltip2 = !1));
      })("click", function () {
        d(e);
        let i = c(2);
        return m((i.showTooltip2 = !i.showTooltip2));
      }),
      p(5, "i", 19),
      o(),
      _(6, ae, 3, 0, "span", 20),
      o(),
      n(7, "label", 39)(8, "input", 40),
      D("ngModelChange", function (i) {
        d(e);
        let f = c(2);
        return T(f.saveMaskedDocument, i) || (f.saveMaskedDocument = i), m(i);
      }),
      o(),
      p(9, "span", 41),
      o()();
  }
  if (r & 2) {
    let e = c(2);
    s(6), g("ngIf", e.showTooltip2), s(2), S("ngModel", e.saveMaskedDocument);
  }
}
function se(r, t) {
  if (
    (r & 1 && (n(0, "div", 51)(1, "div", 52), p(2, "img", 53), o()()), r & 2)
  ) {
    let e = c(3);
    s(2), g("src", e.fileUrl, O);
  }
}
function ce(r, t) {
  if (r & 1) {
    let e = v();
    n(0, "div", 42)(1, "div", 43)(2, "div", 44),
      p(3, "i", 45),
      n(4, "div", 46)(5, "strong"),
      l(6),
      o(),
      n(7, "span", 47),
      l(8),
      o()()(),
      n(9, "button", 48),
      u("click", function () {
        d(e);
        let i = c(2);
        return m(i.removeFile());
      }),
      p(10, "i", 49),
      o(),
      _(11, se, 3, 1, "div", 50),
      o()();
  }
  if (r & 2) {
    let e = c(2);
    s(6),
      k(e.file.name),
      s(2),
      w("", (e.file.size / 1024).toFixed(2), " KB"),
      s(3),
      g("ngIf", e.fileUrl);
  }
}
function pe(r, t) {
  r & 1 && p(0, "i", 54);
}
function de(r, t) {
  r & 1 && (n(0, "span"), l(1, "Mask Document"), o());
}
function me(r, t) {
  r & 1 && (n(0, "span", 55), p(1, "span", 56), o());
}
function ge(r, t) {
  if (r & 1) {
    let e = v();
    n(0, "div", 15)(1, "div", 16)(2, "label", 17),
      l(3, " Select Document Type: "),
      n(4, "span", 18),
      u("mouseenter", function () {
        d(e);
        let i = c();
        return m((i.showTooltip = !0));
      })("mouseleave", function () {
        d(e);
        let i = c();
        return m((i.showTooltip = !1));
      })("click", function () {
        d(e);
        let i = c();
        return m((i.showTooltip = !i.showTooltip));
      }),
      p(5, "i", 19),
      o(),
      _(6, re, 5, 0, "span", 20),
      o(),
      n(7, "select", 21),
      D("ngModelChange", function (i) {
        d(e);
        let f = c();
        return (
          T(f.selectedDocumentType, i) || (f.selectedDocumentType = i), m(i)
        );
      }),
      n(8, "option", 22),
      l(9, "Select Document Type"),
      o(),
      n(10, "option", 23),
      l(11, "Aadhaar Card"),
      o(),
      n(12, "option", 24),
      l(13, "PAN Card"),
      o(),
      n(14, "option", 25),
      l(15, "Driving License"),
      o(),
      n(16, "option", 26),
      l(17, "Other"),
      o()()(),
      n(18, "app-dropfileinput", 27),
      u("fileChange", function (i) {
        d(e);
        let f = c();
        return m(f.onFileChange(i));
      }),
      o(),
      _(19, le, 10, 2, "div", 28)(20, ce, 12, 3, "div", 29),
      n(21, "button", 30),
      u("click", function () {
        d(e);
        let i = c();
        return m(i.uploadAndFetchMaskedFile());
      }),
      _(22, pe, 1, 0, "i", 31)(23, de, 2, 0, "span", 32)(
        24,
        me,
        2,
        0,
        "span",
        33,
      ),
      o()();
  }
  if (r & 2) {
    let e = c();
    s(6),
      g("ngIf", e.showTooltip),
      s(),
      S("ngModel", e.selectedDocumentType),
      s(12),
      g("ngIf", e.isLogin),
      s(),
      g("ngIf", e.file),
      s(),
      g("disabled", !e.file || e.isUploading),
      s(),
      g("ngIf", !e.isUploading),
      s(),
      g("ngIf", !e.isUploading),
      s(),
      g("ngIf", e.isUploading);
  }
}
function fe(r, t) {
  if (
    (r & 1 && (n(0, "div", 51)(1, "div", 52), p(2, "img", 53), o()()), r & 2)
  ) {
    let e = c(3);
    s(2), g("src", e.fileUrl, O);
  }
}
function ue(r, t) {
  if (r & 1) {
    let e = v();
    n(0, "div", 42)(1, "div", 43)(2, "div", 44),
      p(3, "i", 45),
      n(4, "div", 46)(5, "strong"),
      l(6),
      o(),
      n(7, "span", 47),
      l(8),
      o()()(),
      n(9, "button", 48),
      u("click", function () {
        d(e);
        let i = c(2);
        return m(i.removeFile());
      }),
      p(10, "i", 49),
      o(),
      _(11, fe, 3, 1, "div", 50),
      o()();
  }
  if (r & 2) {
    let e = c(2);
    s(6),
      k(e.file.name),
      s(2),
      w("", (e.file.size / 1024).toFixed(2), " KB"),
      s(3),
      g("ngIf", e.fileUrl);
  }
}
function _e(r, t) {
  if (r & 1) {
    let e = v();
    n(0, "div", 57),
      _(1, ue, 12, 3, "div", 29),
      n(2, "div", 58),
      p(3, "i", 59),
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
        let i = c();
        return m(i.downloadMaskedFile());
      }),
      p(9, "i", 61),
      l(10, " Download Masked File "),
      o(),
      n(11, "button", 62),
      u("click", function () {
        d(e);
        let i = c();
        return m(i.removeFile());
      }),
      p(12, "i", 63),
      l(13, " Upload Another File "),
      o()();
  }
  if (r & 2) {
    let e = c();
    s(), g("ngIf", e.file);
  }
}
function he(r, t) {
  if ((r & 1 && (n(0, "div", 64), p(1, "i", 65), l(2), o()), r & 2)) {
    let e = c();
    s(2), w(" ", e.errorMessage, " ");
  }
}
var X = class r {
  constructor(t, e, a, i, f) {
    this.authService = t;
    this.router = e;
    this.sanitizer = a;
    this.documentService = i;
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
  isLogin = !1;
  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((t) => {
      this.isLogin = t;
    });
  }
  validateFile(t) {
    return ["image/jpeg", "image/png", "application/pdf"].includes(t.type)
      ? t.size > 10485760
        ? "File size must be less than 10MB"
        : null
      : "Only JPEG, PNG and PDF files are allowed";
  }
  onFileChange(t) {
    if (!t.files.length) return;
    let e = t.files[0],
      a = this.validateFile(e);
    if (a) {
      (this.errorMessage = a),
        this.toastr.error(a, "", { positionClass: "toast-top-center" });
      return;
    }
    (this.file = e),
      (this.errorMessage = ""),
      (this.isSuccess = !1),
      (this.maskedBlob = null),
      (this.fileUrl = null),
      (this.uploadProgress = 0);
    let i = new FileReader();
    (i.onload = () => {
      this.fileUrl = this.sanitizer.bypassSecurityTrustUrl(i.result);
    }),
      i.readAsDataURL(this.file);
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
    return E(this, null, function* () {
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
      let t = {
        documentType: this.selectedDocumentType,
        file: this.file,
        isSave: this.saveMaskedDocument,
      };
      try {
        let e;
        if (
          (this.isLogin
            ? (e = yield this.documentService.uploadDocument(t))
            : (e = yield this.documentService.publicUploadDocument(t)),
          e.isNoPII)
        ) {
          (this.errorMessage = e.message),
            this.toastr.warning(e.message, "", {
              positionClass: "toast-top-center",
            });
          return;
        }
        if (
          (t.isSave === !1
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
        let a = URL.createObjectURL(this.maskedBlob);
        (this.fileUrl = this.sanitizer.bypassSecurityTrustUrl(a)),
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
        let t = window.URL.createObjectURL(this.maskedBlob),
          e = document.createElement("a"),
          a = new Date(),
          i =
            a.getFullYear() +
            String(a.getMonth() + 1).padStart(2, "0") +
            String(a.getDate()).padStart(2, "0"),
          f = this.originalFileName || this.file?.name || "file",
          h = f.split(".")[0],
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
        let Z = `${i}_masked_${h}.${x}`;
        (e.href = t),
          (e.download = Z),
          document.body.appendChild(e),
          e.click(),
          setTimeout(() => {
            window.URL.revokeObjectURL(t), document.body.removeChild(e);
          }, 100),
          this.toastr.success("File downloaded successfully!", "", {
            positionClass: "toast-top-center",
          });
      } catch (t) {
        console.error("Download error:", t),
          (this.errorMessage = "Download failed. Please try again."),
          this.toastr.error(this.errorMessage, "", {
            positionClass: "toast-top-center",
          });
      } finally {
        this.isDownloading = !1;
      }
    }
  }
  static ɵfac = function (e) {
    return new (e || r)(b(A), b(j), b(L), b(H), b(N));
  };
  static ɵcmp = C({
    type: r,
    selectors: [["app-upload"]],
    decls: 15,
    vars: 6,
    consts: [
      [1, "upload-wrapper"],
      [1, "page-header"],
      [1, "page-title"],
      [1, "page-description"],
      [1, "upload-box"],
      [1, "upload"],
      [1, "header-box"],
      ["class", "header-content", 4, "ngIf"],
      ["routerLink", "/guide", "class", "guide-link", 4, "ngIf"],
      ["class", "upload-content", 4, "ngIf"],
      ["class", "success-screen", 4, "ngIf"],
      ["class", "error-message", 4, "ngIf"],
      [1, "header-content"],
      ["routerLink", "/guide", 1, "guide-link"],
      [1, "fas", "fa-book"],
      [1, "upload-content"],
      [1, "document-type-wrapper"],
      ["for", "documentType", 1, "label-dropdown", "flex", "items-center"],
      [1, "info-button", 3, "mouseenter", "mouseleave", "click"],
      [1, "fas", "fa-info-circle"],
      ["class", "tooltip", 4, "ngIf"],
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
      [1, "tooltip"],
      [1, "toggle-container"],
      [1, "labelForSwitch"],
      [1, "toggle-label"],
      [1, "info-icon", 3, "mouseenter", "mouseleave", "click"],
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
    template: function (e, a) {
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
        _(9, ne, 2, 0, "h4", 7)(10, ie, 3, 0, "a", 8)(11, oe, 2, 0, "h4", 7),
        o(),
        _(12, ge, 25, 8, "div", 9)(13, _e, 14, 1, "div", 10)(
          14,
          he,
          3,
          1,
          "div",
          11,
        ),
        o()()()),
        e & 2 &&
          (s(9),
          g("ngIf", !a.isSuccess),
          s(),
          g("ngIf", !a.isSuccess),
          s(),
          g("ngIf", a.isSuccess),
          s(),
          g("ngIf", !a.isSuccess),
          s(),
          g("ngIf", a.isSuccess),
          s(),
          g("ngIf", a.errorMessage));
    },
    dependencies: [y, z, M, J, K, q, Y, Q, W, G, B, R],
    styles: [
      `.upload-wrapper[_ngcontent-%COMP%]{max-width:100%}.page-header[_ngcontent-%COMP%]{background-color:var(--primary-800);color:#fff;padding:var(--spacing-8) 0 var(--spacing-10);margin-bottom:var(--spacing-8);position:relative;overflow:hidden}.page-header[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background-image:linear-gradient(135deg,rgba(0,0,0,.1) 25%,transparent 25%,transparent 50%,rgba(0,0,0,.1) 50%,rgba(0,0,0,.1) 75%,transparent 75%,transparent);background-size:20px 20px;opacity:.2}.page-title[_ngcontent-%COMP%]{font-size:var(--font-3xl);font-weight:700;margin:0 0 var(--spacing-2);position:relative;align-items:center;justify-content:center;text-align:center}.page-description[_ngcontent-%COMP%]{font-size:1.25rem;opacity:.95;max-width:700px;margin:0 auto;line-height:1.6}.upload-box[_ngcontent-%COMP%]{max-width:1168px;margin:0 auto;padding:2rem;min-height:calc(100vh - 100px);display:flex;flex-direction:column;justify-content:center}.upload-box[_ngcontent-%COMP%]{background-color:#fff;border-radius:16px;box-shadow:0 20px 50px #0000001a;overflow:hidden;border:1px solid var(--gray-200);position:relative}.upload-box[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(to right,var(--primary-600),var(--primary-800));z-index:1}.upload[_ngcontent-%COMP%]{padding:2.5rem}.header-box[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:2rem;padding-bottom:1.25rem;border-bottom:2px solid var(--gray-200)}.header-content[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;color:var(--gray-800);margin:0;position:relative}.header-content[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-1.25rem;left:0;width:50px;height:3px;background-color:var(--primary-800);border-radius:3px}.guide-link[_ngcontent-%COMP%]{display:inline-flex;align-items:center;color:var(--primary-800);font-weight:600;text-decoration:none;padding:.75rem 1.25rem;border-radius:8px;transition:all .3s ease;background-color:var(--primary-50);border:1px solid var(--primary-200)}.guide-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:.75rem;font-size:1.1rem}.guide-link[_ngcontent-%COMP%]:hover{background-color:var(--primary-100);color:var(--primary-800);transform:translateY(-2px);box-shadow:0 4px 12px #6d28d926}.document-type-wrapper[_ngcontent-%COMP%]{margin-bottom:2rem;position:relative}.label-dropdown[_ngcontent-%COMP%]{display:flex;align-items:center;font-weight:600;color:var(--gray-700);margin-bottom:.75rem;font-size:1.1rem}.info-button[_ngcontent-%COMP%], .info-icon[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;margin-left:.75rem;color:var(--gray-500);cursor:pointer;transition:all .2s ease;width:24px;height:24px;border-radius:50%;background-color:var(--gray-100)}.info-button[_ngcontent-%COMP%]:hover, .info-icon[_ngcontent-%COMP%]:hover{color:var(--primary-800);background-color:var(--primary-100);transform:scale(1.1)}.tooltip[_ngcontent-%COMP%]{position:absolute;background-color:var(--gray-800);color:#fff;padding:1rem;border-radius:8px;font-size:.9rem;z-index:10;box-shadow:0 15px 30px -5px #00000040;max-width:300px;margin-top:.75rem;margin-left:1.5rem;animation:_ngcontent-%COMP%_fadeIn .3s ease}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.tooltip[_ngcontent-%COMP%]:before{content:"";position:absolute;top:-6px;left:20px;width:12px;height:12px;background-color:var(--gray-800);transform:rotate(45deg)}.tooltip[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:0;font-family:inherit;white-space:pre-wrap;line-height:1.5}.document-type-dropdown[_ngcontent-%COMP%]{width:100%;padding:1rem 3rem 1rem 1.25rem;border:2px solid var(--gray-300);border-radius:10px;background-color:var(--gray-50);font-size:1.1rem;color:var(--gray-800);transition:all .3s ease;cursor:pointer;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 1rem center;background-size:1.5rem}.document-type-dropdown[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--primary-800);box-shadow:0 0 0 4px var(--primary-100);background-color:#fff}.document-type-dropdown[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{padding:1rem;font-size:1rem}.toggle-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:2rem 0;padding:1.25rem;background-color:var(--gray-50);border-radius:12px;border:2px solid var(--gray-200);transition:all .3s ease}.toggle-container[_ngcontent-%COMP%]:hover{border-color:var(--gray-300);box-shadow:0 4px 12px #0000000d}.labelForSwitch[_ngcontent-%COMP%]{display:flex;align-items:center}.toggle-label[_ngcontent-%COMP%]{font-weight:600;color:var(--gray-700);font-size:1.1rem}.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:56px;height:28px}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;inset:0;background-color:var(--gray-300);transition:.4s;border-radius:28px}.slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:20px;width:20px;left:4px;bottom:4px;background-color:#fff;transition:.4s;border-radius:50%;box-shadow:0 2px 4px #0000001a}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:var(--primary-800)}input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{box-shadow:0 0 1px var(--primary-600)}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translate(28px)}.file-list[_ngcontent-%COMP%]{margin:2rem 0}.file-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:1.5rem;background-color:var(--gray-50);border-radius:12px;border:2px solid var(--gray-200);transition:all .3s ease}.file-item[_ngcontent-%COMP%]:hover{border-color:var(--gray-300);box-shadow:0 8px 20px #0000000d;transform:translateY(-2px)}.file-info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem}.file-icon[_ngcontent-%COMP%]{font-size:2rem;color:var(--primary-800);margin-right:1.25rem}.file-details[_ngcontent-%COMP%]{flex:1}.file-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:1.1rem;color:var(--gray-800);display:block;margin-bottom:.25rem}.file-size[_ngcontent-%COMP%]{display:block;font-size:.95rem;color:var(--gray-500);margin-top:.25rem}.remove-button[_ngcontent-%COMP%]{background:none;border:none;color:var(--red-500);cursor:pointer;font-size:1.1rem;padding:.5rem;border-radius:8px;transition:all .3s ease;display:flex;align-items:center;justify-content:center;width:36px;height:36px}.remove-button[_ngcontent-%COMP%]:hover{background-color:var(--red-100);transform:scale(1.1)}.preview-container[_ngcontent-%COMP%]{margin-top:1.25rem;width:100%}.preview-box[_ngcontent-%COMP%]{width:100%;height:250px;overflow:hidden;border-radius:12px;border:2px solid var(--gray-200);display:flex;align-items:center;justify-content:center;background-color:var(--gray-100);transition:all .3s ease}.preview-box[_ngcontent-%COMP%]:hover{border-color:var(--gray-300);box-shadow:0 8px 20px #0000000d}.preview-image[_ngcontent-%COMP%]{max-width:100%;max-height:100%;object-fit:contain;transition:transform .3s ease}.preview-box[_ngcontent-%COMP%]:hover   .preview-image[_ngcontent-%COMP%]{transform:scale(1.02)}.upload-button[_ngcontent-%COMP%], .download-button[_ngcontent-%COMP%], .back-button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;padding:1.25rem;border:none;border-radius:12px;font-size:1.1rem;font-weight:600;cursor:pointer;transition:all .3s ease;position:relative;overflow:hidden}.upload-button[_ngcontent-%COMP%]:after, .download-button[_ngcontent-%COMP%]:after, .back-button[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(#ffffff1a,#fff0);pointer-events:none}.upload-button[_ngcontent-%COMP%]{background:var(--primary-800);color:#fff;margin-top:2rem}.upload-button[_ngcontent-%COMP%]:hover:not(:disabled){background:var(--primary-700);transform:translateY(-3px);box-shadow:0 10px 25px #6d28d94d}.upload-button[_ngcontent-%COMP%]:disabled{background:var(--gray-300);cursor:not-allowed;opacity:.7}.upload-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .download-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .back-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:.75rem;font-size:1.2rem}.spinner[_ngcontent-%COMP%]{display:inline-block;width:24px;height:24px;border-radius:50%;border:3px solid rgba(255,255,255,.3);border-top-color:#fff;animation:_ngcontent-%COMP%_spin 1s linear infinite}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}.success-screen[_ngcontent-%COMP%]{text-align:center;padding:2rem;animation:_ngcontent-%COMP%_fadeIn .5s ease}.success-icon[_ngcontent-%COMP%]{font-size:4rem;color:var(--green-500);margin:1.5rem 0;animation:_ngcontent-%COMP%_scaleIn .5s ease}@keyframes _ngcontent-%COMP%_scaleIn{0%{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}.success-screen[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.75rem;color:var(--gray-800);margin-bottom:.75rem;font-weight:700}.success-screen[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray-500);margin-bottom:2rem;font-size:1.1rem;line-height:1.6}.download-button[_ngcontent-%COMP%]{background:var(--primary-800);color:#fff;margin-bottom:1.25rem}.download-button[_ngcontent-%COMP%]:hover{background:var(--primary-700);transform:translateY(-3px);box-shadow:0 10px 25px var(--primary-100)}.back-button[_ngcontent-%COMP%]{background:var(--gray-100);color:var(--gray-600);font-weight:600;border:1px solid var(--gray-200)}.back-button[_ngcontent-%COMP%]:hover{background:var(--gray-200);transform:translateY(-3px);box-shadow:0 10px 25px #0000001a}.error-message[_ngcontent-%COMP%]{margin-top:1.5rem;padding:1rem;background-color:var(--red-100);color:var(--red-600);border-radius:10px;font-size:1rem;display:flex;align-items:center;border-left:4px solid var(--red-500);animation:_ngcontent-%COMP%_slideIn .3s ease}@keyframes _ngcontent-%COMP%_slideIn{0%{transform:translate(-10px);opacity:0}to{transform:translate(0);opacity:1}}.error-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:.75rem;font-size:1.25rem}@media (max-width: 768px){.page-title[_ngcontent-%COMP%]{font-size:2.25rem}.page-description[_ngcontent-%COMP%]{font-size:1.1rem}.upload[_ngcontent-%COMP%]{padding:1.75rem}.upload-wrapper[_ngcontent-%COMP%]{padding:1rem}}@media (max-width: 480px){.page-title[_ngcontent-%COMP%]{font-size:2rem}.page-header[_ngcontent-%COMP%]{padding:1.5rem}.toggle-container[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.switch[_ngcontent-%COMP%]{margin-top:1rem}.header-box[_ngcontent-%COMP%]{flex-direction:column;gap:1rem;text-align:center}.header-content[_ngcontent-%COMP%]:after{left:50%;transform:translate(-50%)}.upload-button[_ngcontent-%COMP%], .download-button[_ngcontent-%COMP%], .back-button[_ngcontent-%COMP%]{padding:1rem}}`,
    ],
  });
};
export { X as UploadComponent };
