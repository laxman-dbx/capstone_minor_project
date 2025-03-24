import { a as o } from "./chunk-UD6YS3BW.js";
import { a as t, c as n } from "./chunk-OMR3M7LI.js";
import { ca as i, ha as a } from "./chunk-4KGF3EVT.js";
var h = class r {
  constructor(e) {
    this.http = e;
  }
  token = localStorage.getItem("authToken");
  baseUrl = o.apiUrl;
  encryptText(e, s, p) {
    return this.http.post(
      `${this.baseUrl}/api/users/encrypt-text`,
      { id: e, receiverIds: s, text: p },
      { headers: { Authorization: `Bearer ${this.token}` } },
    );
  }
  decryptText(e) {
    return this.http.post(
      `${this.baseUrl}/api/users/decrypt-text`,
      { dataId: e },
      { headers: { Authorization: `Bearer ${this.token}` } },
    );
  }
  getUsers() {
    return this.http.get(`${this.baseUrl}/api/users/getUsers`, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }
  getSharedByMe() {
    return this.http.get(`${this.baseUrl}/api/users/shared-by-me`, {
      headers: new t({ Authorization: `Bearer ${this.token}` }),
    });
  }
  getSharedWithMe() {
    return this.http.get(`${this.baseUrl}/api/users/shared-to-me`, {
      headers: new t({ Authorization: `Bearer ${this.token}` }),
    });
  }
  deleteSharedMessage(e) {
    return this.http.delete(`${this.baseUrl}/api/users/deleteEntry/${e}`, {
      headers: new t({ Authorization: `Bearer ${this.token}` }),
    });
  }
  static ɵfac = function (s) {
    return new (s || r)(a(n));
  };
  static ɵprov = i({ token: r, factory: r.ɵfac, providedIn: "root" });
};
export { h as a };
