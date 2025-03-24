import { a } from "./chunk-2PQBQFV5.js";
import { a as p } from "./chunk-UD6YS3BW.js";
import { ca as s, e as n, p as i } from "./chunk-4KGF3EVT.js";
var g = class o {
  apiUrl = `${p.apiUrl}/api/auth`;
  isLoggedInSubject = new i(this.checkLoginStatus());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  constructor() {}
  signUp(t) {
    return n(this, null, function* () {
      try {
        let e = new FormData();
        e.append("email", t.email),
          e.append("password", t.password),
          e.append("name", t.name),
          e.append("phone", t.phone),
          t.profileImage && e.append("file", t.profileImage);
        let r = yield a.post(`${this.apiUrl}/signup`, e);
        return this.storeToken(r.data.token), r.data;
      } catch (e) {
        throw e.response?.data || "Signup failed!";
      }
    });
  }
  signIn(t) {
    return n(this, null, function* () {
      try {
        let e = yield a.post(`${this.apiUrl}/signin`, t);
        return this.storeToken(e.data.token), e.data;
      } catch (e) {
        throw e.response?.data || "Login failed!";
      }
    });
  }
  storeToken(t) {
    localStorage.setItem("authToken", t), this.isLoggedInSubject.next(!0);
  }
  getToken() {
    return localStorage.getItem("authToken");
  }
  logout() {
    localStorage.removeItem("authToken"), this.isLoggedInSubject.next(!1);
  }
  checkLoginStatus() {
    return !!localStorage.getItem("authToken");
  }
  static ɵfac = function (e) {
    return new (e || o)();
  };
  static ɵprov = s({ token: o, factory: o.ɵfac, providedIn: "root" });
};
export { g as a };
