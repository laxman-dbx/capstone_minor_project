import { a as p } from "./chunk-UD6YS3BW.js";
import { c as n } from "./chunk-6FEKEJIW.js";
import { ca as a, e, ha as s, x as o } from "./chunk-4KGF3EVT.js";
var c = class i {
  constructor(r) {
    this.http = r;
  }
  apiUrl = `${p.apiUrl}/api/users`;
  getToken() {
    return localStorage.getItem("authToken");
  }
  getUserProfile() {
    return e(this, null, function* () {
      try {
        return yield o(
          this.http.get(`${this.apiUrl}/profile`, {
            headers: { Authorization: `Bearer ${this.getToken()}` },
          }),
        );
      } catch (r) {
        throw (console.error("Error fetching user profile:", r), r);
      }
    });
  }
  updateUserProfile(r) {
    return e(this, null, function* () {
      try {
        return yield o(
          this.http.put(`${this.apiUrl}/profile`, r, {
            headers: { Authorization: `Bearer ${this.getToken()}` },
          }),
        );
      } catch (t) {
        throw (console.error("Error updating profile:", t), t);
      }
    });
  }
  updateProfileImage(r) {
    return e(this, null, function* () {
      try {
        let t = new FormData();
        return (
          r && t.append("file", r),
          yield o(
            this.http.post(`${this.apiUrl}/update-profile-image`, t, {
              headers: { Authorization: `Bearer ${this.getToken()}` },
            }),
          )
        );
      } catch (t) {
        throw (console.error("Error updating profile image:", t), t);
      }
    });
  }
  changePassword(r) {
    return e(this, null, function* () {
      try {
        return yield o(
          this.http.post(
            `${this.apiUrl}/change-password`,
            { password: r },
            { headers: { Authorization: `Bearer ${this.getToken()}` } },
          ),
        );
      } catch (t) {
        throw (console.error("Error changing password:", t), t);
      }
    });
  }
  deleteUser() {
    return e(this, null, function* () {
      try {
        return yield o(
          this.http.delete(`${this.apiUrl}/delete`, {
            headers: { Authorization: `Bearer ${this.getToken()}` },
          }),
        );
      } catch (r) {
        throw (console.error("Error deleting user:", r), r);
      }
    });
  }
  getUserNotifications() {
    return e(this, null, function* () {
      try {
        return yield o(
          this.http.get(`${this.apiUrl}/notifications`, {
            headers: { Authorization: `Bearer ${this.getToken()}` },
          }),
        );
      } catch (r) {
        return console.error("Error fetching notifications:", r), [];
      }
    });
  }
  markNotificationAsRead(r) {
    return e(this, null, function* () {
      try {
        yield o(
          this.http.put(
            `${this.apiUrl}/notification/${r}/read`,
            {},
            { headers: { Authorization: `Bearer ${this.getToken()}` } },
          ),
        );
      } catch (t) {
        console.error("Error marking notification as read:", t);
      }
    });
  }
  static ɵfac = function (t) {
    return new (t || i)(s(n));
  };
  static ɵprov = a({ token: i, factory: i.ɵfac, providedIn: "root" });
};
export { c as a };
