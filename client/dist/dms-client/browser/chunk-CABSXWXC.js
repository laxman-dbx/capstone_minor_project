import { a as u } from "./chunk-2PQBQFV5.js";
import { a } from "./chunk-UD6YS3BW.js";
import { c as g } from "./chunk-6FEKEJIW.js";
import { ca as c, e as i, ha as p, p as l, x as o } from "./chunk-4KGF3EVT.js";
var h = class r {
  constructor(e) {
    this.http = e;
  }
  apiUrl = `${a.apiUrl}/api/admin`;
  token = localStorage.getItem("authToken");
  getTickets() {
    return i(this, null, function* () {
      return o(
        this.http.get(`${this.apiUrl}/tickets`, {
          headers: { Authorization: `Bearer ${this.token}` },
        }),
      );
    });
  }
  updateTicketStatus(e, t) {
    return i(this, null, function* () {
      return o(
        this.http.put(
          `${this.apiUrl}/tickets/${e}/status`,
          { status: t },
          { headers: { Authorization: `Bearer ${this.token}` } },
        ),
      );
    });
  }
  getFullAnalytics() {
    return i(this, null, function* () {
      return o(
        this.http.get(`${a.apiUrl}/api/analytics/admin/analytics/full`, {
          headers: { Authorization: `Bearer ${this.token}` },
        }),
      );
    });
  }
  getActivityLogs(e = 1, t = 20, s) {
    return i(this, null, function* () {
      let n = `${a.apiUrl}/api/analytics/admin/analytics/activity-logs?page=${e}&limit=${t}`;
      return (
        s && (n += `&email=${s}`),
        o(
          this.http.get(n, {
            headers: { Authorization: `Bearer ${this.token}` },
          }),
        )
      );
    });
  }
  isLoggedInSubject = new l(this.checkLoginStatus());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  signIn(e) {
    return i(this, null, function* () {
      try {
        let t = yield u.post(`${this.apiUrl}/signin`, e);
        return this.storeToken(t.data.token), t.data;
      } catch (t) {
        throw t.response?.data || "Login failed!";
      }
    });
  }
  storeToken(e) {
    localStorage.setItem("authToken", e), this.isLoggedInSubject.next(!0);
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
  static ɵfac = function (t) {
    return new (t || r)(p(g));
  };
  static ɵprov = c({ token: r, factory: r.ɵfac, providedIn: "root" });
};
export { h as a };
