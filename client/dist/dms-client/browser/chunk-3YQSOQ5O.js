import { a as M } from "./chunk-YJGY2TV4.js";
import { a as ae } from "./chunk-5COUX54G.js";
import { a as k, b as j } from "./chunk-7VLUVWKX.js";
import { a as re } from "./chunk-NTFNQ3FE.js";
import "./chunk-5QNQV3N7.js";
import {
  b as F,
  e as N,
  h as V,
  k as ne,
  l as ie,
  m as oe,
  q as z,
} from "./chunk-ZOHBZ4HP.js";
import "./chunk-2PQBQFV5.js";
import "./chunk-UD6YS3BW.js";
import "./chunk-OMR3M7LI.js";
import {
  $a as a,
  $b as A,
  Ab as R,
  Bb as P,
  Db as i,
  Dc as X,
  Eb as n,
  Ec as I,
  Fb as u,
  Fc as E,
  Hc as ee,
  Ib as O,
  Ic as te,
  Jc as C,
  Lb as f,
  Mb as m,
  Qb as T,
  Rb as w,
  Sb as S,
  Wb as s,
  Xb as p,
  Yb as b,
  Zb as J,
  _b as Y,
  ac as U,
  bc as D,
  e as _,
  ec as L,
  fb as v,
  fc as Z,
  gc as B,
  lc as K,
  mb as y,
  oa as x,
  pa as h,
  rb as g,
  yb as l,
} from "./chunk-4KGF3EVT.js";
var de = ["messageContainer"];
function pe(r, t) {
  r & 1 && (i(0, "div", 7), s(1, "Loading tickets..."), n());
}
function me(r, t) {
  if (r & 1) {
    let e = O();
    i(0, "div", 8),
      f("click", function () {
        let c = x(e).$implicit,
          d = m();
        return h(d.selectTicket(c));
      }),
      i(1, "div", 9)(2, "span", 10),
      s(3),
      n(),
      i(4, "span"),
      s(5),
      n()(),
      i(6, "div", 11)(7, "p", 12),
      s(8),
      n(),
      i(9, "p", 13),
      s(10),
      n()(),
      i(11, "div", 14)(12, "span", 15),
      s(13),
      L(14, "date"),
      n(),
      i(15, "span"),
      s(16),
      n()()();
  }
  if (r & 2) {
    let e = t.$implicit,
      o = m();
    R(
      "selected",
      (o.selectedTicket == null ? null : o.selectedTicket._id) === e._id,
    )("resolved", e.status === "resolved"),
      a(3),
      b("#", e._id.substring(0, 8), ""),
      a(),
      P(o.getPriorityClass(e.priority)),
      a(),
      p(e.priority),
      a(3),
      p(e.issue),
      a(2),
      p(o.displayUserInfo(e)),
      a(3),
      p(B(14, 14, e.createdAt, "short")),
      a(2),
      P("status-badge status-" + e.status),
      a(),
      p(e.status);
  }
}
function ge(r, t) {
  r & 1 && (i(0, "div", 32), s(1, " No messages yet "), n());
}
function ue(r, t) {
  if (
    (r & 1 &&
      (i(0, "div", 33)(1, "div", 34)(2, "span", 35),
      s(3),
      n(),
      s(4),
      n(),
      i(5, "div", 36),
      s(6),
      L(7, "date"),
      n()()),
    r & 2)
  ) {
    let e = t.$implicit,
      o = m(2);
    R("user-message", e.sender === "user")(
      "admin-message",
      e.sender === "admin",
    ),
      a(3),
      p(e.sender === "user" ? o.getUserName(o.selectedTicket) : "Admin"),
      a(),
      b(" ", e.message, " "),
      a(2),
      p(B(7, 7, e.timestamp, "short"));
  }
}
function fe(r, t) {
  if (r & 1) {
    let e = O();
    i(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "h3"),
      s(4),
      n(),
      i(5, "div", 19),
      s(6),
      n(),
      i(7, "div", 20)(8, "span", 21),
      s(9),
      n(),
      i(10, "select", 22),
      D("ngModelChange", function (c) {
        x(e);
        let d = m();
        return (
          U(d.selectedTicket.status, c) || (d.selectedTicket.status = c), h(c)
        );
      }),
      f("change", function () {
        x(e);
        let c = m();
        return h(
          c.updateTicketStatus(c.selectedTicket._id, c.selectedTicket.status),
        );
      }),
      i(11, "option", 23),
      s(12, "Open"),
      n(),
      i(13, "option", 24),
      s(14, "In Progress"),
      n(),
      i(15, "option", 25),
      s(16, "Resolved"),
      n()()()()(),
      i(17, "div", 26, 0),
      g(19, ge, 2, 0, "div", 27)(20, ue, 8, 10, "div", 28),
      n(),
      i(21, "div", 29)(22, "input", 30),
      D("ngModelChange", function (c) {
        x(e);
        let d = m();
        return U(d.newMessage, c) || (d.newMessage = c), h(c);
      }),
      f("keyup.enter", function () {
        x(e);
        let c = m();
        return h(c.sendMessage());
      }),
      n(),
      i(23, "button", 31),
      f("click", function () {
        x(e);
        let c = m();
        return h(c.sendMessage());
      }),
      s(24, " Send "),
      n()()();
  }
  if (r & 2) {
    let e = m();
    a(4),
      b("Ticket #", e.selectedTicket._id, ""),
      a(2),
      b(" ", e.displayUserInfo(e.selectedTicket), " "),
      a(2),
      P(e.getStatusClass(e.selectedTicket.status)),
      a(),
      b(" ", e.selectedTicket.status, " "),
      a(),
      A("ngModel", e.selectedTicket.status),
      l("disabled", e.selectedTicket.status === "resolved"),
      a(9),
      l("ngIf", e.selectedTicket.messages.length === 0),
      a(),
      l("ngForOf", e.selectedTicket.messages),
      a(),
      R("disabled", e.isTicketResolved()),
      a(),
      A("ngModel", e.newMessage),
      l(
        "placeholder",
        e.isTicketResolved()
          ? "Chat disabled - Ticket resolved"
          : "Type your message...",
      )("disabled", e.isTicketResolved()),
      a(),
      l("disabled", !e.newMessage.trim() || e.isTicketResolved());
  }
}
var $ = class r {
  constructor(t, e, o) {
    this.adminService = t;
    this.socketService = e;
    this.cdRef = o;
  }
  messageContainer;
  tickets = [];
  selectedTicket = null;
  newMessage = "";
  loading = !1;
  subscriptions = [];
  messagesSubscription;
  ngOnInit() {
    this.loadTickets(),
      this.socketService.connect(),
      (this.messagesSubscription = this.socketService
        .getMessages()
        .subscribe((t) => {
          this.selectedTicket &&
            ((this.selectedTicket.messages = t),
            this.cdRef.detectChanges(),
            this.scrollToBottom());
        }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach((t) => t.unsubscribe()),
      this.messagesSubscription?.unsubscribe(),
      this.selectedTicket &&
        this.socketService.leaveChat(this.selectedTicket._id),
      this.socketService.disconnect();
  }
  loadTickets() {
    return _(this, null, function* () {
      this.loading = !0;
      try {
        (this.tickets = yield this.adminService.getTickets()),
          this.tickets.sort((t, e) => {
            let o = { open: 0, "in-progress": 1, resolved: 2 };
            return o[t.status] !== o[e.status]
              ? o[t.status] - o[e.status]
              : new Date(e.createdAt).getTime() -
                  new Date(t.createdAt).getTime();
          }),
          this.cdRef.detectChanges();
      } catch (t) {
        console.error("Failed to load tickets:", t);
      } finally {
        this.loading = !1;
      }
    });
  }
  selectTicket(t) {
    return _(this, null, function* () {
      this.selectedTicket &&
        this.socketService.leaveChat(this.selectedTicket._id),
        (this.selectedTicket = t),
        this.socketService.joinChat(t),
        this.scrollToBottom();
    });
  }
  sendMessage() {
    return _(this, null, function* () {
      if (
        !this.selectedTicket ||
        !this.newMessage.trim() ||
        this.isTicketResolved()
      )
        return;
      let t = {
        ticketId: this.selectedTicket._id,
        sender: "admin",
        message: this.newMessage,
        timestamp: new Date(),
      };
      (this.selectedTicket.messages = this.selectedTicket.messages || []),
        this.cdRef.detectChanges(),
        this.scrollToBottom(),
        (this.newMessage = "");
      try {
        yield this.socketService.sendMessage(t.ticketId, t.message),
          this.scrollToBottom();
      } catch (e) {
        console.error("Failed to send message:", e),
          (this.selectedTicket.messages = this.selectedTicket.messages.filter(
            (o) => o !== t,
          )),
          this.cdRef.detectChanges();
      }
    });
  }
  updateTicketStatus(t, e) {
    return _(this, null, function* () {
      try {
        if (
          (yield this.adminService.updateTicketStatus(t, e),
          yield this.loadTickets(),
          this.selectedTicket && this.selectedTicket._id === t)
        ) {
          let o = this.tickets.find((c) => c._id === t);
          o && ((this.selectedTicket = o), this.cdRef.detectChanges());
        }
      } catch (o) {
        console.error("Error updating status:", o);
      }
    });
  }
  scrollToBottom() {
    this.messageContainer &&
      setTimeout(() => {
        this.messageContainer.nativeElement.scrollTop =
          this.messageContainer.nativeElement.scrollHeight;
      }, 0);
  }
  getStatusClass(t) {
    return `status-${t.toLowerCase()}`;
  }
  getPriorityClass(t) {
    return `priority-${t.toLowerCase()}`;
  }
  isTicketResolved() {
    return this.selectedTicket?.status === "resolved";
  }
  getUserName(t) {
    return t.user && typeof t.user == "object" && t.user.name
      ? t.user.name
      : t.userId && typeof t.userId == "object" && t.userId.name
        ? t.userId.name
        : "User";
  }
  displayUserInfo(t) {
    return t.user && typeof t.user == "object"
      ? `${t.user.name} (${t.user.email})`
      : t.userId && typeof t.userId == "object"
        ? `${t.userId.name} (${t.userId.email})`
        : `User ID: ${typeof t.user == "string" ? t.user : typeof t.userId == "string" ? t.userId : "Unknown"}`;
  }
  static ɵfac = function (e) {
    return new (e || r)(v(M), v(ae), v(K));
  };
  static ɵcmp = y({
    type: r,
    selectors: [["app-admin-support-ticket"]],
    viewQuery: function (e, o) {
      if ((e & 1 && T(de, 5), e & 2)) {
        let c;
        w((c = S())) && (o.messageContainer = c.first);
      }
    },
    decls: 9,
    vars: 3,
    consts: [
      ["messageContainer", ""],
      [1, "admin-dashboard"],
      [1, "tickets-section"],
      [1, "tickets-list"],
      ["class", "loading", 4, "ngIf"],
      [
        "class",
        "ticket-list-item",
        3,
        "selected",
        "resolved",
        "click",
        4,
        "ngFor",
        "ngForOf",
      ],
      ["class", "chat-section", 4, "ngIf"],
      [1, "loading"],
      [1, "ticket-list-item", 3, "click"],
      [1, "ticket-header"],
      [1, "ticket-id"],
      [1, "ticket-content"],
      [1, "ticket-issue"],
      [1, "ticket-user"],
      [1, "ticket-footer"],
      [1, "ticket-date"],
      [1, "chat-section"],
      [1, "chat-header"],
      [1, "ticket-info"],
      [1, "user-info"],
      [1, "status-controls"],
      [1, "current-status"],
      [3, "ngModelChange", "change", "ngModel", "disabled"],
      ["value", "open"],
      ["value", "in-progress"],
      ["value", "resolved"],
      [1, "messages"],
      ["class", "no-messages", 4, "ngIf"],
      [
        "class",
        "message",
        3,
        "user-message",
        "admin-message",
        4,
        "ngFor",
        "ngForOf",
      ],
      [1, "message-input"],
      [
        "type",
        "text",
        3,
        "ngModelChange",
        "keyup.enter",
        "ngModel",
        "placeholder",
        "disabled",
      ],
      [3, "click", "disabled"],
      [1, "no-messages"],
      [1, "message"],
      [1, "message-content"],
      [1, "sender-label"],
      [1, "message-time"],
    ],
    template: function (e, o) {
      e & 1 &&
        (i(0, "div", 1)(1, "div", 2)(2, "h2"),
        s(3, "Support Tickets"),
        n(),
        i(4, "div", 3),
        g(5, pe, 2, 0, "div", 4)(6, me, 17, 17, "div", 5),
        u(7, "hr"),
        n()(),
        g(8, fe, 25, 15, "div", 6),
        n()),
        e & 2 &&
          (a(5),
          l("ngIf", o.loading),
          a(),
          l("ngForOf", o.tickets),
          a(2),
          l("ngIf", o.selectedTicket));
    },
    dependencies: [C, I, E, ee, z, ie, oe, F, ne, N, V],
    styles: [
      ".admin-dashboard[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}h2[_ngcontent-%COMP%]{color:#444;font-weight:500;margin-bottom:15px;padding-bottom:8px;border-bottom:1px solid #e1e5eb}.tickets-section[_ngcontent-%COMP%]{margin-bottom:20px}.tickets-list[_ngcontent-%COMP%]{cursor:pointer;max-height:400px;overflow-y:auto;display:flex;flex-direction:column;gap:10px;box-shadow:0 2px 8px #0000000d;transition:transform .2s,box-shadow .2s}.ticket-list-item[_ngcontent-%COMP%]{background-color:#fff;border-radius:6px;padding:12px;cursor:pointer;box-shadow:0 2px 8px #0000000d;transition:transform .2s,box-shadow .2s}.ticket-list-item[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 4px 12px #0000001a}.ticket-list-item.selected[_ngcontent-%COMP%]{border-left:4px solid #3498db;background-color:#f5f7fa}.ticket-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}.ticket-id[_ngcontent-%COMP%]{font-size:12px;color:#7f8c8d}.ticket-status[_ngcontent-%COMP%]{padding:3px 8px;border-radius:12px;font-size:12px;text-transform:uppercase}.status-open[_ngcontent-%COMP%]{border-left:2px solid #f39c12;padding:0 3px;background-color:#e9d4b3;color:#000}.status-in-progress[_ngcontent-%COMP%]{border-left:2px solid #3498db;background-color:#a4c5db;padding:0 3px;color:#000}.status-resolved[_ngcontent-%COMP%]{border-left:2px solid #2ecc71;background-color:#97ccad;padding:0 3px;color:#000}.ticket-user[_ngcontent-%COMP%]{margin-bottom:5px;font-size:14px}.user-email[_ngcontent-%COMP%]{color:#7f8c8d;font-weight:400}.ticket-issue[_ngcontent-%COMP%]{margin-bottom:8px;font-size:14px;color:#34495e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ticket-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;font-size:12px}.ticket-priority[_ngcontent-%COMP%]{padding:2px 6px;border-radius:10px;text-transform:uppercase}.priority-low[_ngcontent-%COMP%]{border-left:2px solid #2ecc71;background-color:#97ccad;padding:0 3px;color:#000}.priority-medium[_ngcontent-%COMP%]{border-left:2px solid #f39c12;padding:0 3px;background-color:#e9d4b3;color:#000}.priority-high[_ngcontent-%COMP%]{border-left:2px solid #e74c3c;padding:0 3px;background-color:#ebb7b1;color:#000}.ticket-date[_ngcontent-%COMP%]{color:#7f8c8d}.chat-section[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;background-color:#fff;border-radius:6px;box-shadow:0 2px 8px #0000000d;overflow:hidden}.chat-header[_ngcontent-%COMP%]{padding:12px;border-bottom:1px solid #e1e5eb;background-color:#f5f7fa}.ticket-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:5px}.ticket-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;color:#2c3e50;font-weight:500}.user-info[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px;font-size:14px}.user-name[_ngcontent-%COMP%]{font-weight:500}.status-controls[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-top:8px}.current-status[_ngcontent-%COMP%]{padding:3px 8px;border-radius:12px;font-size:12px;text-transform:uppercase}.status-controls[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding:5px 10px;border:1px solid #ddd;border-radius:4px;background-color:#fff;font-size:14px}.messages[_ngcontent-%COMP%]{flex:1;padding:12px;overflow-y:auto;display:flex;flex-direction:column;gap:10px;max-height:400px}.no-messages[_ngcontent-%COMP%]{text-align:center;color:#7f8c8d;padding:20px}.message[_ngcontent-%COMP%]{padding:10px;border-radius:6px;max-width:80%;position:relative}.user-message[_ngcontent-%COMP%]{align-self:flex-start;background-color:#f1f1f1;border-top-left-radius:0}.admin-message[_ngcontent-%COMP%]{align-self:flex-end;background-color:#3498db;color:#fff;border-top-right-radius:0}.message-content[_ngcontent-%COMP%]{margin-bottom:5px}.sender-label[_ngcontent-%COMP%]{font-weight:500;font-size:12px;display:block;margin-bottom:3px}.message-time[_ngcontent-%COMP%]{font-size:10px;opacity:.7;text-align:right}.message-input[_ngcontent-%COMP%]{display:flex;padding:12px;border-top:1px solid #e1e5eb;background-color:#f5f7fa}.message-input.disabled[_ngcontent-%COMP%]{opacity:.7}.message-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:1;padding:8px 12px;border:1px solid #ddd;border-radius:4px;margin-right:8px;font-size:14px}.message-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:8px 16px;background-color:#3498db;color:#fff;border:none;border-radius:4px;cursor:pointer;transition:background-color .2s}.message-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled){background-color:#2980b9}.message-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:#bdc3c7;cursor:not-allowed}.loading[_ngcontent-%COMP%], .error-message[_ngcontent-%COMP%]{padding:20px;text-align:center;color:#7f8c8d}.error-message[_ngcontent-%COMP%]{color:#e74c3c}@media (max-width: 768px){.admin-dashboard[_ngcontent-%COMP%]{flex-direction:column}.tickets-section[_ngcontent-%COMP%], .chat-section[_ngcontent-%COMP%]{width:100%}}",
    ],
  });
};
k.register(...j);
var xe = ["userGrowthChart"],
  he = ["documentUploadsChart"],
  ve = ["documentTypesChart"];
function _e(r, t) {
  r & 1 && (i(0, "div", 6)(1, "p"), s(2, "Loading analytics data..."), n()());
}
function ye(r, t) {
  if ((r & 1 && (i(0, "div", 7)(1, "p"), s(2), n()()), r & 2)) {
    let e = m();
    a(2), p(e.error);
  }
}
function be(r, t) {
  if (
    (r & 1 &&
      (i(0, "tr")(1, "td"),
      s(2),
      n(),
      i(3, "td"),
      s(4),
      n(),
      i(5, "td"),
      s(6),
      n()()),
    r & 2)
  ) {
    let e = t.$implicit;
    a(2),
      p(e == null || e.user == null ? null : e.user.name),
      a(2),
      p(e == null || e.user == null ? null : e.user.email),
      a(2),
      p(e == null ? null : e.documentCount);
  }
}
function Ce(r, t) {
  if (
    (r & 1 &&
      (i(0, "div", 24)(1, "h3"),
      s(2, "Top Active Users"),
      n(),
      i(3, "table", 25)(4, "thead")(5, "tr")(6, "th"),
      s(7, "User"),
      n(),
      i(8, "th"),
      s(9, "Email"),
      n(),
      i(10, "th"),
      s(11, "Documents"),
      n()()(),
      i(12, "tbody"),
      g(13, be, 7, 3, "tr", 26),
      n()()()),
    r & 2)
  ) {
    let e = m(2);
    a(13),
      l("ngForOf", e.analytics == null ? null : e.analytics.topActiveUsers);
  }
}
function Me(r, t) {
  if (
    (r & 1 &&
      (i(0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "div", 11),
      u(4, "i", 12),
      n(),
      i(5, "div", 13)(6, "h3"),
      s(7, "Total Users"),
      n(),
      i(8, "p", 14),
      s(9),
      n()()(),
      i(10, "div", 10)(11, "div", 15),
      u(12, "i", 16),
      n(),
      i(13, "div", 13)(14, "h3"),
      s(15, "Total Documents"),
      n(),
      i(16, "p", 14),
      s(17),
      n()()(),
      i(18, "div", 10)(19, "div", 17),
      u(20, "i", 18),
      n(),
      i(21, "div", 13)(22, "h3"),
      s(23, "Masked Documents"),
      n(),
      i(24, "p", 14),
      s(25),
      n()()(),
      i(26, "div", 10)(27, "div", 19),
      u(28, "i", 20),
      n(),
      i(29, "div", 13)(30, "h3"),
      s(31, "Shared Texts"),
      n(),
      i(32, "p", 14),
      s(33),
      n()()()(),
      i(34, "div", 21)(35, "div", 22),
      u(36, "canvas", null, 0),
      n(),
      i(38, "div", 22),
      u(39, "canvas", null, 1),
      n()(),
      g(41, Ce, 14, 1, "div", 23),
      n()),
    r & 2)
  ) {
    let e = m();
    a(9),
      p(e.totalUsers),
      a(8),
      p(e.totalDocuments),
      a(8),
      p(e.maskedDocuments),
      a(8),
      p(e.sharedTexts),
      a(8),
      l(
        "ngIf",
        e.analytics == null || e.analytics.topActiveUsers == null
          ? null
          : e.analytics.topActiveUsers.length,
      );
  }
}
k.register(...j);
var G = class r {
  constructor(t) {
    this.adminService = t;
  }
  userGrowthChartRef;
  documentUploadsChartRef;
  documentTypesChartRef;
  loading = !0;
  error = "";
  analytics = null;
  charts = [];
  totalUsers = 0;
  totalDocuments = 0;
  maskedDocuments = 0;
  sharedTexts = 0;
  monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  ngOnInit() {
    this.loadAnalytics();
  }
  ngAfterViewInit() {}
  loadAnalytics() {
    return _(this, null, function* () {
      try {
        (this.analytics = yield this.adminService.getFullAnalytics()),
          this.analytics &&
            ((this.totalUsers = this.analytics.totalUsers),
            (this.totalDocuments = this.analytics.totalDocuments),
            (this.maskedDocuments = this.analytics.maskedDocuments),
            (this.sharedTexts = this.analytics.sharedTexts)),
          (this.loading = !1),
          setTimeout(() => {
            this.initializeCharts();
          }, 0);
      } catch (t) {
        console.error("Analytics Error:", t),
          (this.error = "Failed to load analytics"),
          (this.loading = !1);
      }
    });
  }
  initializeCharts() {
    this.analytics &&
      (this.charts.forEach((t) => t.destroy()),
      (this.charts = []),
      this.createUserGrowthChart(),
      this.createDocumentUploadsChart(),
      this.createDocumentTypesChart());
  }
  createUserGrowthChart() {
    if (!this.analytics || !this.userGrowthChartRef) return;
    let t = this.userGrowthChartRef.nativeElement.getContext("2d");
    if (
      !t ||
      !this.analytics.userGrowth ||
      this.analytics.userGrowth.length === 0
    )
      return;
    let e = this.analytics.userGrowth.map(
        (d) => `${this.monthNames[d._id.month - 1]} ${d._id.year}`,
      ),
      o = this.analytics.userGrowth.map((d) => d.count),
      c = new k(t, {
        type: "line",
        data: {
          labels: e,
          datasets: [
            {
              label: "New Users",
              data: o,
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              tension: 0.4,
              fill: !0,
            },
          ],
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          plugins: {
            title: { display: !0, text: "User Growth (Last 6 Months)" },
          },
          scales: { y: { beginAtZero: !0, ticks: { precision: 0 } } },
        },
      });
    this.charts.push(c);
  }
  createDocumentUploadsChart() {
    if (!this.analytics || !this.documentUploadsChartRef) return;
    let t = this.documentUploadsChartRef.nativeElement.getContext("2d");
    if (
      !t ||
      !this.analytics.documentUploads ||
      this.analytics.documentUploads.length === 0
    )
      return;
    let e = this.analytics.documentUploads.map(
        (d) => `${this.monthNames[d._id.month - 1]} ${d._id.year}`,
      ),
      o = this.analytics.documentUploads.map((d) => d.count),
      c = new k(t, {
        type: "bar",
        data: {
          labels: e,
          datasets: [
            {
              label: "Document Uploads",
              data: o,
              backgroundColor: "rgba(54, 162, 235, 0.5)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          plugins: {
            title: { display: !0, text: "Document Uploads (Last 6 Months)" },
          },
          scales: { y: { beginAtZero: !0, ticks: { precision: 0 } } },
        },
      });
    this.charts.push(c);
  }
  createDocumentTypesChart() {
    if (!this.analytics || !this.documentTypesChartRef) return;
    let t = this.documentTypesChartRef.nativeElement.getContext("2d");
    if (
      !t ||
      !this.analytics.documentTypes ||
      this.analytics.documentTypes.length === 0
    )
      return;
    let e = this.analytics.documentTypes.map((d) => d._id),
      o = this.analytics.documentTypes.map((d) => d.count),
      c = new k(t, {
        type: "doughnut",
        data: {
          labels: e,
          datasets: [
            {
              data: o,
              backgroundColor: [
                "rgba(255, 99, 132, 0.5)",
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 206, 86, 0.5)",
                "rgba(75, 192, 192, 0.5)",
                "rgba(153, 102, 255, 0.5)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          plugins: {
            title: { display: !0, text: "Document Types Distribution" },
            legend: { position: "right" },
          },
        },
      });
    this.charts.push(c);
  }
  static ɵfac = function (e) {
    return new (e || r)(v(M));
  };
  static ɵcmp = y({
    type: r,
    selectors: [["app-dashboard-analytics"]],
    viewQuery: function (e, o) {
      if ((e & 1 && (T(xe, 5), T(he, 5), T(ve, 5)), e & 2)) {
        let c;
        w((c = S())) && (o.userGrowthChartRef = c.first),
          w((c = S())) && (o.documentUploadsChartRef = c.first),
          w((c = S())) && (o.documentTypesChartRef = c.first);
      }
    },
    decls: 4,
    vars: 3,
    consts: [
      ["userGrowthChart", ""],
      ["documentTypesChart", ""],
      [1, "analytics-dashboard"],
      ["class", "loading", 4, "ngIf"],
      ["class", "error", 4, "ngIf"],
      ["class", "analytics-content", 4, "ngIf"],
      [1, "loading"],
      [1, "error"],
      [1, "analytics-content"],
      [1, "summary-cards"],
      [1, "card"],
      [1, "card-icon", "users-icon"],
      [1, "fas", "fa-users"],
      [1, "card-content"],
      [1, "card-value"],
      [1, "card-icon", "documents-icon"],
      [1, "fas", "fa-file-alt"],
      [1, "card-icon", "masked-icon"],
      [1, "fas", "fa-mask"],
      [1, "card-icon", "shared-icon"],
      [1, "fas", "fa-share-alt"],
      [1, "charts-grid"],
      [1, "chart-container"],
      ["class", "top-users-container", 4, "ngIf"],
      [1, "top-users-container"],
      [1, "top-users-table"],
      [4, "ngFor", "ngForOf"],
    ],
    template: function (e, o) {
      e & 1 &&
        (i(0, "div", 2),
        g(1, _e, 3, 0, "div", 3)(2, ye, 3, 1, "div", 4)(3, Me, 42, 5, "div", 5),
        n()),
        e & 2 &&
          (a(),
          l("ngIf", o.loading),
          a(),
          l("ngIf", o.error),
          a(),
          l("ngIf", !o.loading && !o.error));
    },
    dependencies: [C, I, E],
    styles: [
      ".analytics-dashboard[_ngcontent-%COMP%]{width:100%}.loading[_ngcontent-%COMP%], .error[_ngcontent-%COMP%]{padding:20px;text-align:center;background-color:#f9f9f9;border-radius:6px;margin-bottom:20px}.error[_ngcontent-%COMP%]{color:#e74c3c}.analytics-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}.summary-cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:15px}.card[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;padding:15px;display:flex;align-items:center;box-shadow:0 2px 8px #0000000d;transition:transform .2s,box-shadow .2s}.card[_ngcontent-%COMP%]:hover{transform:translateY(-3px);box-shadow:0 4px 12px #0000001a}.card-icon[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:15px;font-size:20px;color:#fff}.users-icon[_ngcontent-%COMP%]{background-color:#3498db}.documents-icon[_ngcontent-%COMP%]{background-color:#2ecc71}.masked-icon[_ngcontent-%COMP%]{background-color:#9b59b6}.shared-icon[_ngcontent-%COMP%]{background-color:#f39c12}.card-content[_ngcontent-%COMP%]{flex:1}.card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 5px;font-size:14px;color:#7f8c8d}.card-value[_ngcontent-%COMP%]{font-size:24px;font-weight:600;margin:0;color:#2c3e50}.charts-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px}.chart-container[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;padding:15px;box-shadow:0 2px 8px #0000000d;height:300px;position:relative}.top-users-container[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;padding:15px;box-shadow:0 2px 8px #0000000d}.top-users-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#2c3e50;font-weight:500;padding-bottom:10px;border-bottom:1px solid #ecf0f1}.top-users-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.top-users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .top-users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px;text-align:left;border-bottom:1px solid #ecf0f1}.top-users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:500;color:#7f8c8d}.top-users-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:none}.top-users-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background-color:#f9f9f9}@media (max-width: 768px){.summary-cards[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.charts-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}",
    ],
  });
};
function ke(r, t) {
  if (r & 1) {
    let e = O();
    i(0, "div", 13),
      f("click", function () {
        let c = x(e).$implicit,
          d = m(2);
        return h(d.selectUser(c));
      }),
      i(1, "span"),
      s(2),
      n(),
      i(3, "small"),
      s(4),
      n()();
  }
  if (r & 2) {
    let e = t.$implicit;
    a(2), p(e.name), a(2), p(e.email);
  }
}
function Pe(r, t) {
  if ((r & 1 && (i(0, "div", 11), g(1, ke, 5, 2, "div", 12), n()), r & 2)) {
    let e = m();
    a(), l("ngForOf", e.filteredUsers);
  }
}
function Oe(r, t) {
  r & 1 && (i(0, "div", 14)(1, "p"), s(2, "Loading activity logs..."), n()());
}
function Te(r, t) {
  if ((r & 1 && (i(0, "div", 15)(1, "p"), s(2), n()()), r & 2)) {
    let e = m();
    a(2), p(e.error);
  }
}
function we(r, t) {
  r & 1 && (i(0, "div", 22)(1, "p"), s(2, "No activity logs found."), n()());
}
function Se(r, t) {
  if ((r & 1 && (i(0, "div", 35), s(1), n()), r & 2)) {
    let e = m().$implicit;
    a(),
      J(
        " Document: ",
        e.documentId.originalName,
        " (",
        e.documentId.documentType,
        ") ",
      );
  }
}
function Ie(r, t) {
  if (
    (r & 1 &&
      (i(0, "span", 38)(1, "span", 39),
      s(2),
      n(),
      i(3, "pre", 40),
      s(4),
      n()()),
    r & 2)
  ) {
    let e = t.$implicit;
    a(2), b("", e.key, ":"), a(2), p(e.value + ", ");
  }
}
function Ee(r, t) {
  if (
    (r & 1 &&
      (i(0, "div", 36), g(1, Ie, 5, 2, "span", 37), L(2, "keyvalue"), n()),
    r & 2)
  ) {
    let e = m().$implicit;
    a(), l("ngForOf", Z(2, 1, e.metadata));
  }
}
function Ae(r, t) {
  if (
    (r & 1 &&
      (i(0, "div", 25)(1, "div", 26),
      u(2, "i"),
      n(),
      i(3, "div", 27)(4, "div", 28)(5, "span", 29),
      s(6),
      n(),
      i(7, "span", 30),
      s(8),
      n(),
      i(9, "span", 31),
      s(10),
      n()(),
      i(11, "div", 32),
      s(12),
      n(),
      g(13, Se, 2, 2, "div", 33)(14, Ee, 3, 3, "div", 34),
      n()()),
    r & 2)
  ) {
    let e = t.$implicit,
      o = m(3);
    l("ngClass", o.getActivityTypeClass(e.type)),
      a(2),
      P(o.getActivityTypeIcon(e.type)),
      a(4),
      p(o.getUserName(e.userId)),
      a(2),
      p(e.type),
      a(2),
      p(o.formatDate(e.createdAt)),
      a(2),
      p(e.text),
      a(),
      l("ngIf", e.documentId),
      a(),
      l("ngIf", e.metadata);
  }
}
function Ue(r, t) {
  if ((r & 1 && (i(0, "div", 23), g(1, Ae, 15, 9, "div", 24), n()), r & 2)) {
    let e = m(2);
    a(), l("ngForOf", e.activityLogs);
  }
}
function De(r, t) {
  if (r & 1) {
    let e = O();
    i(0, "div"),
      g(1, we, 3, 0, "div", 16)(2, Ue, 2, 1, "div", 17),
      i(3, "div", 18)(4, "div", 19),
      s(5),
      n(),
      i(6, "div", 20)(7, "button", 21),
      f("click", function () {
        x(e);
        let c = m();
        return h(c.prevPage());
      }),
      s(8, " Previous "),
      n(),
      i(9, "button", 21),
      f("click", function () {
        x(e);
        let c = m();
        return h(c.nextPage());
      }),
      s(10, " Next "),
      n()()()();
  }
  if (r & 2) {
    let e = m();
    a(),
      l("ngIf", e.activityLogs.length === 0),
      a(),
      l("ngIf", e.activityLogs.length > 0),
      a(3),
      Y(
        " Showing ",
        e.activityLogs.length,
        " of ",
        e.totalLogs,
        " logs | Page ",
        e.currentPage,
        " of ",
        e.totalPages,
        " ",
      ),
      a(2),
      l("disabled", e.currentPage === 1),
      a(2),
      l("disabled", e.currentPage === e.totalPages);
  }
}
var Q = class r {
  constructor(t, e) {
    this.adminService = t;
    this.encryptTextService = e;
  }
  activityLogs = [];
  loading = !0;
  error = "";
  currentPage = 1;
  totalPages = 1;
  totalLogs = 0;
  limit = 5;
  filterUserId = "";
  searchTerm = "";
  users = [];
  selectedUser = { _id: "", name: "", email: "" };
  filteredUsers = [];
  selectedUsers = [];
  ngOnInit() {
    this.loadActivityLogs(), this.fetchUsers();
  }
  loadActivityLogs() {
    return _(this, null, function* () {
      this.loading = !0;
      try {
        let t = yield this.adminService.getActivityLogs(
          this.currentPage,
          this.limit,
          this.filterUserId || void 0,
        );
        (this.activityLogs = t.activityLogs),
          (this.totalPages = t.pagination.totalPages),
          (this.totalLogs = t.pagination.totalLogs),
          (this.error = "");
      } catch (t) {
        console.error("Error loading activity logs:", t),
          (this.error = "Failed to load activity logs");
      } finally {
        this.loading = !1;
      }
    });
  }
  fetchUsers() {
    (this.loading = !0),
      this.encryptTextService.getUsers().subscribe({
        next: (t) => {
          (this.users = t), this.filterUsers(), (this.loading = !1);
        },
        error: (t) => {
          (this.error =
            "Failed to fetch users: " + (t.error?.message || t.message)),
            (this.loading = !1);
        },
      });
  }
  getActivityTypeIcon(t) {
    switch (t) {
      case "upload":
        return "fas fa-upload";
      case "download":
        return "fas fa-download";
      case "mask":
        return "fas fa-mask";
      case "share":
        return "fas fa-share-alt";
      case "delete":
        return "fas fa-trash";
      case "encrypt":
        return "fas fa-lock";
      case "decrypt":
        return "fas fa-unlock";
      default:
        return "fas fa-info-circle";
    }
  }
  filterUsers() {
    this.filteredUsers = this.searchTerm.trim()
      ? this.users.filter(
          (t) =>
            t.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            t.email.toLowerCase().includes(this.searchTerm.toLowerCase()),
        )
      : this.users;
  }
  selectUser(t) {
    (this.selectedUser = t),
      (this.filterUserId = this.selectedUser.email || ""),
      (this.searchTerm = this.selectedUser.name || ""),
      (this.filteredUsers = []);
  }
  getActivityTypeClass(t) {
    return t.toLowerCase();
  }
  formatDate(t) {
    return new Date(t).toLocaleString();
  }
  getUserName(t) {
    return (typeof t == "object" && t !== null && t.name) || "Unknown User";
  }
  nextPage() {
    this.currentPage < this.totalPages &&
      (this.currentPage++, this.loadActivityLogs());
  }
  prevPage() {
    this.currentPage > 1 && (this.currentPage--, this.loadActivityLogs());
  }
  applyFilter() {
    (this.currentPage = 1), this.loadActivityLogs();
  }
  clearFilter() {
    (this.filterUserId = ""), (this.currentPage = 1), this.loadActivityLogs();
  }
  static ɵfac = function (e) {
    return new (e || r)(v(M), v(re));
  };
  static ɵcmp = y({
    type: r,
    selectors: [["app-activity-logs"]],
    decls: 15,
    vars: 5,
    consts: [
      [1, "activity-logs-container"],
      [1, "activity-logs-header"],
      [1, "filter-controls"],
      [1, "search-box"],
      [
        "type",
        "text",
        "placeholder",
        "Filter by User email",
        1,
        "search-input",
        3,
        "ngModelChange",
        "input",
        "ngModel",
      ],
      [1, "filter-button", 3, "click"],
      [1, "clear-button", 3, "click"],
      ["class", "users-list", 4, "ngIf"],
      ["class", "loading", 4, "ngIf"],
      ["class", "error", 4, "ngIf"],
      [4, "ngIf"],
      [1, "users-list"],
      ["class", "user-item", 3, "click", 4, "ngFor", "ngForOf"],
      [1, "user-item", 3, "click"],
      [1, "loading"],
      [1, "error"],
      ["class", "no-logs", 4, "ngIf"],
      ["class", "activity-logs-list", 4, "ngIf"],
      [1, "pagination-controls"],
      [1, "pagination-info"],
      [1, "pagination-buttons"],
      [1, "pagination-button", 3, "click", "disabled"],
      [1, "no-logs"],
      [1, "activity-logs-list"],
      ["class", "activity-log-item", 3, "ngClass", 4, "ngFor", "ngForOf"],
      [1, "activity-log-item", 3, "ngClass"],
      [1, "activity-icon"],
      [1, "activity-content"],
      [1, "activity-header"],
      [1, "activity-user"],
      [1, "activity-type"],
      [1, "activity-time"],
      [1, "activity-text"],
      ["class", "activity-document", 4, "ngIf"],
      ["class", "activity-metadata", 4, "ngIf"],
      [1, "activity-document"],
      [1, "activity-metadata"],
      ["class", "metadata-item", 4, "ngFor", "ngForOf"],
      [1, "metadata-item"],
      [1, "metadata-key"],
      [1, "metadata-value"],
    ],
    template: function (e, o) {
      e & 1 &&
        (i(0, "div", 0)(1, "div", 1)(2, "h2"),
        s(3, "User Activity Logs"),
        n(),
        i(4, "div", 2)(5, "div", 3)(6, "input", 4),
        D("ngModelChange", function (d) {
          return U(o.searchTerm, d) || (o.searchTerm = d), d;
        }),
        f("input", function () {
          return o.filterUsers();
        }),
        n(),
        i(7, "button", 5),
        f("click", function () {
          return o.applyFilter();
        }),
        s(8, "Filter"),
        n(),
        i(9, "button", 6),
        f("click", function () {
          return o.clearFilter();
        }),
        s(10, "Clear"),
        n()()()(),
        g(11, Pe, 2, 1, "div", 7)(12, Oe, 3, 0, "div", 8)(
          13,
          Te,
          3,
          1,
          "div",
          9,
        )(14, De, 11, 8, "div", 10),
        n()),
        e & 2 &&
          (a(6),
          A("ngModel", o.searchTerm),
          a(5),
          l("ngIf", o.searchTerm && o.filteredUsers.length > 0),
          a(),
          l("ngIf", o.loading),
          a(),
          l("ngIf", o.error),
          a(),
          l("ngIf", !o.loading && !o.error));
    },
    dependencies: [C, X, I, E, te, z, F, N, V],
    styles: [
      ".activity-logs-container[_ngcontent-%COMP%]{width:100%}.activity-logs-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:15px}.activity-logs-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;color:#2c3e50;font-size:20px}.filter-controls[_ngcontent-%COMP%]{display:flex;gap:10px}.filter-group[_ngcontent-%COMP%]{display:flex;gap:8px}.filter-input[_ngcontent-%COMP%]{padding:8px 12px;border:1px solid #ddd;border-radius:4px;font-size:14px}.filter-button[_ngcontent-%COMP%], .clear-button[_ngcontent-%COMP%]{padding:8px 12px;border:none;border-radius:4px;cursor:pointer;font-weight:500;transition:background-color .2s}.filter-button[_ngcontent-%COMP%]{background-color:#3498db;color:#fff}.filter-button[_ngcontent-%COMP%]:hover{background-color:#2980b9}.search-input[_ngcontent-%COMP%]{width:100%;padding:12px;border:1px solid #ddd;border-radius:6px;font-size:16px;transition:border-color .3s}.search-input[_ngcontent-%COMP%]:focus{border-color:var(--primary-600);outline:none}.users-list[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #ddd;border-radius:6px;max-height:200px;overflow-y:auto;z-index:1000;box-shadow:0 4px 6px #0000001a}.user-item[_ngcontent-%COMP%]{padding:10px 15px;cursor:pointer;transition:background-color .2s;display:flex;flex-direction:column}.user-item[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}.user-item.disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.user-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500}.user-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#666;font-size:12px}.clear-button[_ngcontent-%COMP%]{background-color:#e74c3c;color:#fff}.clear-button[_ngcontent-%COMP%]:hover{background-color:#c0392b}.loading[_ngcontent-%COMP%], .error[_ngcontent-%COMP%], .no-logs[_ngcontent-%COMP%]{padding:20px;text-align:center;background-color:#f9f9f9;border-radius:6px;margin-bottom:15px}.error[_ngcontent-%COMP%]{color:#e74c3c}.activity-logs-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;margin-bottom:15px}.activity-log-item[_ngcontent-%COMP%]{display:flex;background-color:#fff;border-radius:6px;padding:12px;box-shadow:0 2px 8px #0000000d;border-left:4px solid #3498db}.activity-log-item.upload[_ngcontent-%COMP%]{border-left-color:#2ecc71}.activity-log-item.mask[_ngcontent-%COMP%]{border-left-color:#9b59b6}.activity-log-item.share[_ngcontent-%COMP%]{border-left-color:#f39c12}.activity-log-item.delete[_ngcontent-%COMP%]{border-left-color:#e74c3c}.activity-log-item.encrypt[_ngcontent-%COMP%]{border-left-color:#1abc9c}.activity-log-item.decrypt[_ngcontent-%COMP%]{border-left-color:#3498db}.activity-log-item.download[_ngcontent-%COMP%]{border-left-color:#34495e}.activity-icon[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px;font-size:16px;color:#fff;background-color:#3498db}.activity-content[_ngcontent-%COMP%]{flex:1}.activity-header[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:5px;flex-wrap:wrap;gap:8px}.activity-user[_ngcontent-%COMP%]{font-weight:600;color:#2c3e50}.activity-type[_ngcontent-%COMP%]{background-color:#f1f1f1;padding:3px 8px;border-radius:12px;font-size:12px;text-transform:uppercase;color:#7f8c8d}.activity-time[_ngcontent-%COMP%]{color:#95a5a6;font-size:12px;margin-left:auto}.activity-text[_ngcontent-%COMP%]{margin-bottom:5px;color:#34495e}.activity-document[_ngcontent-%COMP%], .activity-metadata[_ngcontent-%COMP%]{font-size:13px;color:#7f8c8d;margin-top:5px;display:flex}.metadata-item[_ngcontent-%COMP%]{display:flex;gap:5px}.metadata-key[_ngcontent-%COMP%]{font-weight:500}.pagination-controls[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:10px 0}.pagination-info[_ngcontent-%COMP%]{font-size:14px;color:#7f8c8d}.pagination-buttons[_ngcontent-%COMP%]{display:flex;gap:10px}.pagination-button[_ngcontent-%COMP%]{padding:6px 12px;background-color:#3498db;color:#fff;border:none;border-radius:4px;cursor:pointer;transition:background-color .2s}.pagination-button[_ngcontent-%COMP%]:hover:not(:disabled){background-color:#2980b9}.pagination-button[_ngcontent-%COMP%]:disabled{background-color:#bdc3c7;cursor:not-allowed}@media (max-width: 768px){.activity-logs-header[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;gap:10px}.filter-controls[_ngcontent-%COMP%], .filter-group[_ngcontent-%COMP%]{width:100%}.filter-input[_ngcontent-%COMP%]{flex:1}.pagination-controls[_ngcontent-%COMP%]{flex-direction:column;gap:10px}}",
    ],
  });
};
var ce = class r {
  constructor(t) {
    this.adminService = t;
  }
  signOut() {
    this.adminService.logout(), (window.location.href = "/admin/login");
  }
  static ɵfac = function (e) {
    return new (e || r)(v(M));
  };
  static ɵcmp = y({
    type: r,
    selectors: [["app-admin-dashboard"]],
    decls: 22,
    vars: 0,
    consts: [
      [1, "admin-dashboard"],
      [1, "dashboard-header"],
      [1, "header-actions"],
      [1, "sign-out", 3, "click"],
      [1, "dashboard-content"],
      [1, "main-content"],
      [1, "analytics-section"],
      [1, "activity-logs-section"],
      [1, "support-tickets-section"],
      [1, "admin-footer"],
    ],
    template: function (e, o) {
      e & 1 &&
        (i(0, "div", 0)(1, "div", 1)(2, "h1"),
        s(3, "Admin Dashboard"),
        n(),
        i(4, "div", 2)(5, "button", 3),
        f("click", function () {
          return o.signOut();
        }),
        s(6, "Sign out"),
        n()()(),
        i(7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "h2"),
        s(11, "Analytics"),
        n(),
        u(12, "app-dashboard-analytics"),
        n(),
        i(13, "div", 7)(14, "h2"),
        s(15, "Activity Logs"),
        n(),
        u(16, "app-activity-logs"),
        n()(),
        i(17, "div", 8),
        u(18, "app-admin-support-ticket"),
        n()(),
        i(19, "div", 9)(20, "h4"),
        s(
          21,
          " \xA9 2025 DMSClient | Document Management System. All rights reserved. ",
        ),
        n()()());
    },
    dependencies: [C, $, G, Q],
    styles: [
      ".admin-dashboard[_ngcontent-%COMP%]{padding:20px;background-color:#f5f7fa;min-height:100vh;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.dashboard-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;padding-bottom:15px;border-bottom:1px solid #e1e5eb}.admin-footer[_ngcontent-%COMP%]{display:flex;padding-top:15px;justify-content:space-between;align-items:center;margin-top:20px;border-top:1px solid #e1e5eb}.header-actions[_ngcontent-%COMP%]{display:flex;gap:10px}h1[_ngcontent-%COMP%]{margin-bottom:0;color:#333;font-weight:600}h2[_ngcontent-%COMP%]{color:#444;font-weight:500;margin-bottom:15px;padding-bottom:8px;border-bottom:1px solid #e1e5eb}.dashboard-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 350px;gap:20px}.main-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}.analytics-section[_ngcontent-%COMP%], .activity-logs-section[_ngcontent-%COMP%], .support-tickets-section[_ngcontent-%COMP%]{background:#fff;padding:20px;border-radius:8px;box-shadow:0 2px 10px #0000000d}.sign-out[_ngcontent-%COMP%]{padding:8px 16px;background-color:#e74c3c;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:500;transition:background-color .3s}.sign-out[_ngcontent-%COMP%]:hover{background-color:#c0392b}.analytics-toggle[_ngcontent-%COMP%]{padding:8px 16px;background-color:#3498db;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:500;transition:background-color .3s}.analytics-toggle[_ngcontent-%COMP%]:hover{background-color:#2980b9}.activity-logs-toggle[_ngcontent-%COMP%]{padding:8px 16px;background-color:#9b59b6;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:500;transition:background-color .3s}.activity-logs-toggle[_ngcontent-%COMP%]:hover{background-color:#8e44ad}.detailed-analytics[_ngcontent-%COMP%], .activity-logs-view[_ngcontent-%COMP%]{margin-bottom:20px}@media (max-width: 1200px){.dashboard-content[_ngcontent-%COMP%]{grid-template-columns:1fr}.support-tickets-section[_ngcontent-%COMP%]{order:1}}@media (max-width: 768px){.dashboard-header[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;gap:10px}.header-actions[_ngcontent-%COMP%]{width:100%}}",
    ],
  });
};
export { ce as AdminDashboardComponent };
