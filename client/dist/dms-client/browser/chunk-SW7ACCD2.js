import { h as d } from "./chunk-GTDEETYW.js";
import { a as s } from "./chunk-2PQBQFV5.js";
import { a as c } from "./chunk-UD6YS3BW.js";
import { ca as l, e as a, ha as p } from "./chunk-4KGF3EVT.js";
var u = class n {
  constructor(e) {
    this.toastr = e;
  }
  apiUrl = `${c.apiUrl}/api/documents`;
  token = localStorage.getItem("authToken");
  publicUploadDocument(e) {
    return a(this, null, function* () {
      let r = new FormData();
      r.append("documentType", e.documentType), r.append("file", e.file);
      try {
        let o = yield s.post(`${this.apiUrl}/public-upload`, r, {
          headers: {
            Authorization: `Bearer ${this.token}`,
            "Content-Type": "multipart/form-data",
          },
          responseType: "blob",
          onUploadProgress: (t) => {
            let m = Math.round((t.loaded * 100) / (t.total || 100));
          },
        });
        console.log(o.data);
        let i = yield o.data.text();
        try {
          let t = JSON.parse(i);
          return t?.message?.includes("No PII data found")
            ? { message: t.message, isNoPII: !0 }
            : t;
        } catch {
          return {
            directBlob: o.data,
            fileType: o.headers["content-type"],
            fileName: e.file.name,
          };
        }
      } catch (o) {
        throw (
          (console.error("Error in uploadDocument service:", o),
          o.response?.status === 413
            ? new Error("File size too large. Please upload a smaller file.")
            : o.response?.status === 415
              ? new Error(
                  "Invalid file type. Please upload a supported file format.",
                )
              : new Error("Failed to upload document. Please try again."))
        );
      }
    });
  }
  uploadDocument(e) {
    return a(this, null, function* () {
      let r = new FormData();
      r.append("documentType", e.documentType),
        r.append("file", e.file),
        r.append("isSave", e.isSave.toString());
      try {
        let o = yield s.post(`${this.apiUrl}/upload`, r, {
            headers: {
              Authorization: `Bearer ${this.token}`,
              "Content-Type": "multipart/form-data",
            },
            responseType: "blob",
            onUploadProgress: (t) => {
              let m = Math.round((t.loaded * 100) / (t.total || 100));
            },
          }),
          i = yield o.data.text();
        try {
          let t = JSON.parse(i);
          return t?.message?.includes("No PII data found")
            ? { message: t.message, isNoPII: !0 }
            : t;
        } catch {
          return {
            directBlob: o.data,
            fileType: o.headers["content-type"],
            fileName: e.file.name,
          };
        }
      } catch (o) {
        throw (
          (console.error("Error in uploadDocument service:", o),
          o.response?.status === 413
            ? new Error("File size too large. Please upload a smaller file.")
            : o.response?.status === 415
              ? new Error(
                  "Invalid file type. Please upload a supported file format.",
                )
              : o.response?.status === 401
                ? new Error("Session expired. Please login again.")
                : new Error("Failed to upload document. Please try again."))
        );
      }
    });
  }
  getUserDocuments() {
    return a(this, null, function* () {
      try {
        return (yield s.get(`${this.apiUrl}/user-docs`, {
          headers: { Authorization: `Bearer ${this.token}` },
        })).data;
      } catch (e) {
        throw (
          (e.response?.status === 401 &&
            this.toastr.error("Session expired. Please login again.", "", {
              positionClass: "toast-top-center",
            }),
          e)
        );
      }
    });
  }
  downloadDocument(e) {
    return a(this, null, function* () {
      try {
        return (yield s.get(`${this.apiUrl}/download/${e}`, {
          responseType: "blob",
          headers: { Authorization: `Bearer ${this.token}` },
        })).data;
      } catch (r) {
        throw r.response?.status === 404
          ? new Error("File not found or has been deleted.")
          : r.response?.status === 401
            ? new Error("Session expired. Please login again.")
            : new Error("Failed to download document. Please try again.");
      }
    });
  }
  deleteDocument(e) {
    return a(this, null, function* () {
      try {
        return (yield s.delete(`${this.apiUrl}/delete/${e}`, {
          headers: { Authorization: `Bearer ${this.token}` },
        })).data;
      } catch (r) {
        throw r.response?.status === 404
          ? new Error("File not found or already deleted.")
          : r.response?.status === 401
            ? new Error("Session expired. Please login again.")
            : new Error("Failed to delete document. Please try again.");
      }
    });
  }
  static ɵfac = function (r) {
    return new (r || n)(p(d));
  };
  static ɵprov = l({ token: n, factory: n.ɵfac, providedIn: "root" });
};
export { u as a };
