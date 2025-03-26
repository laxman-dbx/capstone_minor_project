import { a as ie } from "./chunk-VTYR22FF.js";
import "./chunk-5QNQV3N7.js";
import {
  b as q,
  e as G,
  h as J,
  k as K,
  l as X,
  m as Z,
  q as ee,
} from "./chunk-ZOHBZ4HP.js";
import "./chunk-2PQBQFV5.js";
import { a as te } from "./chunk-UD6YS3BW.js";
import { c as Y } from "./chunk-E5QSSROS.js";
import "./chunk-6GCQ5O75.js";
import { b as $, c as Q } from "./chunk-6FEKEJIW.js";
import {
  $a as o,
  $b as T,
  Ab as M,
  Bb as y,
  Db as i,
  Eb as n,
  Ec as N,
  Fb as d,
  Fc as W,
  Hc as L,
  Ib as b,
  Jc as H,
  Lb as _,
  Mb as f,
  Qb as D,
  Rb as A,
  Sb as j,
  Vb as F,
  Wb as a,
  Xb as v,
  Yb as w,
  ac as P,
  bc as O,
  ca as R,
  e as p,
  ec as E,
  fb as C,
  gc as I,
  ha as V,
  hc as U,
  lc as B,
  mb as z,
  oa as m,
  pa as u,
  rb as h,
  x,
  yb as g,
} from "./chunk-4KGF3EVT.js";
var S = class c {
  constructor(t) {
    this.http = t;
  }
  apiUrl = `${te.apiUrl}/api/tickets`;
  getAuthToken() {
    let t = localStorage.getItem("authToken");
    return t || console.error("Auth token not found"), t || "";
  }
  getUserTickets() {
    return p(this, null, function* () {
      try {
        return yield x(
          this.http.get(`${this.apiUrl}/user`, {
            headers: { Authorization: `Bearer ${this.getAuthToken()}` },
          }),
        );
      } catch (t) {
        throw (this.handleError(t, "Error fetching user tickets"), t);
      }
    });
  }
  createTicket(t) {
    return p(this, null, function* () {
      try {
        return yield x(
          this.http.post(`${this.apiUrl}`, t, {
            headers: { Authorization: `Bearer ${this.getAuthToken()}` },
          }),
        );
      } catch (e) {
        throw (this.handleError(e, "Error creating ticket"), e);
      }
    });
  }
  getTicketMessages(t) {
    return p(this, null, function* () {
      try {
        return yield x(
          this.http.get(`${this.apiUrl}/${t}/messages`, {
            headers: { Authorization: `Bearer ${this.getAuthToken()}` },
          }),
        );
      } catch (e) {
        throw (this.handleError(e, "Error fetching ticket messages"), e);
      }
    });
  }
  handleError(t, e) {
    console.error(e, t),
      t instanceof $ &&
        t.status === 401 &&
        console.error("Authentication error. Token may be invalid or expired.");
  }
  static ɵfac = function (e) {
    return new (e || c)(V(Q));
  };
  static ɵprov = R({ token: c, factory: c.ɵfac, providedIn: "root" });
};
var oe = ["messageContainer"];
function se(c, t) {
  c & 1 &&
    (i(0, "div", 27),
    d(1, "div", 28),
    i(2, "p", 29),
    a(3, "Loading tickets..."),
    n()());
}
function ce(c, t) {
  c & 1 &&
    (i(0, "div", 30),
    d(1, "i", 31),
    i(2, "p"),
    a(3, "No tickets yet. Create one to get support."),
    n()());
}
function le(c, t) {
  if (c & 1) {
    let e = b();
    i(0, "div", 32),
      _("click", function () {
        let s = m(e).$implicit,
          l = f();
        return u(l.selectTicket(s._id));
      }),
      i(1, "div", 33)(2, "span", 34),
      a(3),
      n(),
      i(4, "span"),
      a(5),
      n()(),
      i(6, "div", 35)(7, "p", 36),
      a(8),
      n()(),
      i(9, "div", 37)(10, "span"),
      a(11),
      n(),
      i(12, "span", 38),
      a(13),
      E(14, "date"),
      n()(),
      i(15, "button", 39),
      _("click", function () {
        let s = m(e).$implicit,
          l = f();
        return u(l.selectTicket(s._id));
      }),
      d(16, "i", 40),
      a(17, " Open "),
      n()();
  }
  if (c & 2) {
    let e = t.$implicit,
      r = f();
    M(
      "selected",
      e._id === (r.selectedTicket == null ? null : r.selectedTicket._id),
    ),
      o(3),
      w("#", e._id.substring(0, 8), ""),
      o(),
      y("status-badge status-" + e.status),
      o(),
      v(e.status),
      o(3),
      v(e.issue),
      o(2),
      y("priority-badge priority-" + e.priority),
      o(),
      v(e.priority),
      o(2),
      v(I(14, 11, e.createdAt, "short"));
  }
}
function de(c, t) {
  c & 1 &&
    (i(0, "div", 58),
    d(1, "i", 59),
    i(2, "p"),
    a(3, "No messages yet. Start the conversation!"),
    n()());
}
function ge(c, t) {
  if (
    (c & 1 &&
      (i(0, "div", 60)(1, "div", 61),
      d(2, "i"),
      n(),
      i(3, "div", 62)(4, "div", 63)(5, "span", 64),
      a(6),
      n(),
      i(7, "span", 65),
      a(8),
      E(9, "date"),
      n()(),
      i(10, "div", 66),
      a(11),
      n()()()),
    c & 2)
  ) {
    let e = t.$implicit;
    M("user-message", e.sender === "user")(
      "admin-message",
      e.sender === "admin",
    ),
      o(2),
      y(e.sender === "user" ? "fas fa-user" : "fas fa-headset"),
      o(4),
      v(e.sender === "user" ? "You" : "Support Agent"),
      o(2),
      v(I(9, 9, e.timestamp, "short")),
      o(3),
      v(e.message);
  }
}
function pe(c, t) {
  c & 1 &&
    (i(0, "div", 67),
    d(1, "i", 68),
    a(
      2,
      " This ticket has been resolved. Create a new ticket if you need further assistance. ",
    ),
    n());
}
function me(c, t) {
  if (c & 1) {
    let e = b();
    i(0, "div", 41)(1, "div", 42)(2, "div", 43)(3, "div", 44)(4, "h2", 45),
      a(5),
      i(6, "span", 46),
      a(7),
      n()(),
      i(8, "p", 47),
      a(9),
      n()()(),
      i(10, "div", 48),
      h(11, de, 4, 0, "div", 49),
      i(12, "div", 50, 1),
      h(14, ge, 12, 12, "div", 51),
      d(15, "div", null, 2),
      n()(),
      i(17, "div", 52)(18, "div", 53)(19, "textarea", 54),
      O("ngModelChange", function (s) {
        m(e);
        let l = f();
        return P(l.newMessage, s) || (l.newMessage = s), u(s);
      }),
      _("keydown.enter", function (s) {
        m(e);
        let l = f();
        return s.preventDefault(), u(l.sendMessage());
      }),
      n(),
      i(20, "button", 55),
      _("click", function () {
        m(e);
        let s = f();
        return u(s.sendMessage());
      }),
      d(21, "i", 56),
      n()(),
      h(22, pe, 3, 0, "div", 57),
      n()()();
  }
  if (c & 2) {
    let e = f();
    o(5),
      w(
        " Ticket #",
        e.selectedTicket._id.substr(e.selectedTicket._id.length - 6),
        " ",
      ),
      o(),
      y(e.getStatusClass(e.selectedTicket.status)),
      o(),
      w(" ", e.selectedTicket.status, " "),
      o(2),
      v(e.selectedTicket.issue),
      o(2),
      g("ngIf", e.selectedTicket.messages.length === 0),
      o(3),
      g("ngForOf", e.selectedTicket.messages),
      o(3),
      M("disabled", e.isTicketResolved()),
      o(2),
      T("ngModel", e.newMessage),
      g(
        "placeholder",
        e.isTicketResolved()
          ? "Chat disabled - Ticket resolved"
          : "Type your message...",
      )("disabled", e.isTicketResolved()),
      o(),
      g("disabled", !e.newMessage.trim() || e.isTicketResolved()),
      o(2),
      g("ngIf", e.isTicketResolved());
  }
}
function ue(c, t) {
  c & 1 &&
    (i(0, "div", 69)(1, "div", 70)(2, "div", 71),
    d(3, "i", 59),
    i(4, "h3"),
    a(5, "Select a ticket to view the conversation"),
    n(),
    i(6, "p"),
    a(
      7,
      " Choose a ticket from the list on the left or create a new one to get started. ",
    ),
    n()()()());
}
var ne = class c {
  constructor(t, e, r, s) {
    this.userTicketService = t;
    this.socketService = e;
    this.cdRef = r;
    this.router = s;
    let l = this.router.getCurrentNavigation();
    l?.extras.state && (this.ticketId = l.extras.state.ticketId);
  }
  messageContainer;
  tickets = [];
  selectedTicket = null;
  newMessage = "";
  newTicket = { issue: "", priority: "low" };
  loading = !1;
  ticketId = "";
  messagesSubscription;
  ngOnInit() {
    this.loadTickets().then(() => {
      this.ticketId && this.selectTicket(this.ticketId);
    }),
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
    this.messagesSubscription?.unsubscribe(),
      this.selectedTicket &&
        this.socketService.leaveChat(this.selectedTicket._id),
      this.socketService.disconnect();
  }
  loadTickets() {
    return p(this, null, function* () {
      this.loading = !0;
      try {
        let t = yield this.userTicketService.getUserTickets();
        (this.tickets = t),
          this.tickets.sort((e, r) => {
            let s = { open: 0, "in-progress": 1, resolved: 2 };
            return s[e.status] !== s[r.status]
              ? s[e.status] - s[r.status]
              : new Date(r.createdAt).getTime() -
                  new Date(e.createdAt).getTime();
          }),
          this.cdRef.detectChanges();
      } catch (t) {
        console.error("Failed to load tickets:", t);
      } finally {
        this.loading = !1;
      }
    });
  }
  createTicket() {
    return p(this, null, function* () {
      if (this.newTicket.issue.trim()) {
        this.loading = !0;
        try {
          yield this.userTicketService.createTicket(this.newTicket),
            this.loadTickets(),
            (this.newTicket = { issue: "", priority: "low" });
        } catch (t) {
          console.error("Failed to create ticket:", t);
        } finally {
          this.loading = !1;
        }
      }
    });
  }
  selectTicket(t) {
    return p(this, null, function* () {
      if (!t) return;
      let e = this.tickets.find((r) => r._id === t);
      if (!e) {
        console.error("Ticket not found");
        return;
      }
      this.selectedTicket &&
        this.socketService.leaveChat(this.selectedTicket._id),
        (this.selectedTicket = e),
        this.socketService.joinChat(this.selectedTicket),
        this.scrollToBottom();
    });
  }
  sendMessage() {
    return p(this, null, function* () {
      if (
        !this.selectedTicket ||
        !this.newMessage.trim() ||
        this.isTicketResolved()
      )
        return;
      let t = {
        ticketId: this.selectedTicket._id,
        sender: "user",
        message: this.newMessage,
        timestamp: new Date(),
      };
      (this.selectedTicket.messages = this.selectedTicket.messages || []),
        this.cdRef.detectChanges(),
        (this.newMessage = "");
      try {
        yield this.socketService.sendMessage(t.ticketId, t.message),
          this.scrollToBottom();
      } catch (e) {
        console.error("Failed to send message:", e),
          (this.selectedTicket.messages = this.selectedTicket.messages.filter(
            (r) => r !== t,
          )),
          this.cdRef.detectChanges();
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
    return t.toLowerCase().replace("_", "-");
  }
  getPriorityClass(t) {
    return t.toLowerCase();
  }
  isTicketResolved() {
    return this.selectedTicket?.status === "resolved";
  }
  static ɵfac = function (e) {
    return new (e || c)(C(S), C(ie), C(B), C(Y));
  };
  static ɵcmp = z({
    type: c,
    selectors: [["app-user-support-ticket"]],
    viewQuery: function (e, r) {
      if ((e & 1 && D(oe, 5), e & 2)) {
        let s;
        A((s = j())) && (r.messageContainer = s.first);
      }
    },
    decls: 41,
    vars: 8,
    consts: [
      ["selectTicketPrompt", ""],
      ["messageContainer", ""],
      ["scrollAnchor", ""],
      [1, "support-dashboard"],
      [1, "tickets-container"],
      [1, "card", "create-ticket-card"],
      [1, "card-title"],
      [1, "form-group"],
      ["for", "ticketIssue", 1, "form-label"],
      [
        "id",
        "ticketIssue",
        "placeholder",
        "Please describe your issue in detail...",
        "rows",
        "3",
        1,
        "form-control",
        3,
        "ngModelChange",
        "ngModel",
      ],
      ["for", "ticketPriority", 1, "form-label"],
      [1, "select-wrapper"],
      [
        "id",
        "ticketPriority",
        1,
        "form-control",
        3,
        "ngModelChange",
        "ngModel",
      ],
      ["value", "low"],
      ["value", "medium"],
      ["value", "high"],
      [1, "tooltip", "priority-tooltip"],
      [1, "fas", "fa-info-circle"],
      [1, "tooltip-text"],
      [1, "btn", "btn-primary", 3, "click", "disabled"],
      [1, "fas", "fa-plus"],
      [1, "card1", "tickets-list-card"],
      ["class", "loading-container", 4, "ngIf"],
      ["class", "no-tickets", 4, "ngIf"],
      [1, "ticket-list"],
      [
        "class",
        "ticket-list-item",
        3,
        "selected",
        "click",
        4,
        "ngFor",
        "ngForOf",
      ],
      ["class", "chat-container", 4, "ngIf", "ngIfElse"],
      [1, "loading-container"],
      [1, "loading-spinner"],
      [1, "loading-text"],
      [1, "no-tickets"],
      [1, "fas", "fa-ticket-alt"],
      [1, "ticket-list-item", 3, "click"],
      [1, "ticket-header"],
      [1, "ticket-id"],
      [1, "ticket-content"],
      [1, "ticket-issue"],
      [1, "ticket-footer"],
      [1, "ticket-date"],
      [1, "btn", "btn-open-ticket", 3, "click"],
      [1, "fas", "fa-folder-open"],
      [1, "chat-container"],
      [1, "card"],
      [1, "chat-header"],
      [1, "ticket-info"],
      [1, "chat-title"],
      [1, "ticket-status"],
      [1, "issue-text"],
      [1, "messages-container", "fixed-height"],
      ["class", "no-messages", 4, "ngIf"],
      [1, "messages"],
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
      [1, "message-input-container"],
      [1, "input-wrapper"],
      [
        "rows",
        "2",
        1,
        "message-input",
        3,
        "ngModelChange",
        "keydown.enter",
        "ngModel",
        "placeholder",
        "disabled",
      ],
      [1, "btn", "btn-primary", "send-button", 3, "click", "disabled"],
      [1, "fas", "fa-paper-plane"],
      ["class", "ticket-resolved-message", 4, "ngIf"],
      [1, "no-messages"],
      [1, "fas", "fa-comments"],
      [1, "message"],
      [1, "message-avatar"],
      [1, "message-content"],
      [1, "message-header"],
      [1, "sender-name"],
      [1, "message-time"],
      [1, "message-text"],
      [1, "ticket-resolved-message"],
      [1, "fas", "fa-check-circle"],
      [1, "chat-container", "empty-state"],
      [1, "card", "empty-card"],
      [1, "empty-content"],
    ],
    template: function (e, r) {
      if (e & 1) {
        let s = b();
        i(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "h2", 6),
          a(4, "Create Support Ticket"),
          n(),
          i(5, "div", 7)(6, "label", 8),
          a(7, "Describe your issue"),
          n(),
          i(8, "textarea", 9),
          O("ngModelChange", function (k) {
            return (
              m(s), P(r.newTicket.issue, k) || (r.newTicket.issue = k), u(k)
            );
          }),
          n()(),
          i(9, "div", 7)(10, "label", 10),
          a(11, "Priority"),
          n(),
          i(12, "div", 11)(13, "select", 12),
          O("ngModelChange", function (k) {
            return (
              m(s),
              P(r.newTicket.priority, k) || (r.newTicket.priority = k),
              u(k)
            );
          }),
          i(14, "option", 13),
          a(15, "Low"),
          n(),
          i(16, "option", 14),
          a(17, "Medium"),
          n(),
          i(18, "option", 15),
          a(19, "High"),
          n()(),
          i(20, "div", 16),
          d(21, "i", 17),
          i(22, "span", 18),
          a(23, " Low: General questions"),
          d(24, "br"),
          a(25, " Medium: Issues affecting workflow"),
          d(26, "br"),
          a(27, " High: Critical problems "),
          n()()()(),
          i(28, "button", 19),
          _("click", function () {
            return m(s), u(r.createTicket());
          }),
          d(29, "i", 20),
          a(30, " Create Ticket "),
          n()(),
          i(31, "div", 21)(32, "h2", 6),
          a(33, "Your Tickets"),
          n(),
          h(34, se, 4, 0, "div", 22)(35, ce, 4, 0, "div", 23),
          i(36, "div", 24),
          h(37, le, 18, 14, "div", 25),
          n()()(),
          h(38, me, 23, 14, "div", 26)(39, ue, 8, 0, "ng-template", null, 0, U),
          n();
      }
      if (e & 2) {
        let s = F(40);
        o(8),
          T("ngModel", r.newTicket.issue),
          o(5),
          T("ngModel", r.newTicket.priority),
          o(15),
          g("disabled", !r.newTicket.issue.trim() || r.loading),
          o(6),
          g("ngIf", r.loading),
          o(),
          g("ngIf", r.tickets.length === 0 && !r.loading),
          o(2),
          g("ngForOf", r.tickets),
          o(),
          g("ngIf", r.selectedTicket)("ngIfElse", s);
      }
    },
    dependencies: [H, N, W, L, ee, X, Z, q, K, G, J],
    styles: [
      ".support-dashboard[_ngcontent-%COMP%]{display:flex;gap:var(--spacing-6);max-width:var(--container-width);margin:var(--spacing-8) auto;padding:0 var(--spacing-4)}.tickets-container[_ngcontent-%COMP%]{flex:1;max-width:400px;display:flex;flex-direction:column;gap:var(--spacing-6)}.chat-container[_ngcontent-%COMP%]{flex:2;min-width:0}.card[_ngcontent-%COMP%]{background-color:#fff;border-radius:var(--radius-lg);box-shadow:var(--shadow-md);overflow:hidden;display:flex;flex-direction:column}.card1[_ngcontent-%COMP%]{background-color:#fff;border-radius:var(--radius-lg);box-shadow:var(--shadow-md);overflow:hidden;height:100%;display:flex;flex-direction:column}.card-title[_ngcontent-%COMP%]{font-size:var(--font-xl);margin-bottom:var(--spacing-4);color:var(--primary-900)}.create-ticket-card[_ngcontent-%COMP%]{padding:var(--spacing-6)}.select-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center}.priority-tooltip[_ngcontent-%COMP%]{margin-left:var(--spacing-2);color:var(--gray-500)}.priority-tooltip[_ngcontent-%COMP%]   .tooltip-text[_ngcontent-%COMP%]{width:220px;text-align:left;white-space:normal;line-height:1.4}.tickets-list-card[_ngcontent-%COMP%]{padding:var(--spacing-6);flex:1;min-height:400px;display:flex;flex-direction:column}.ticket-list[_ngcontent-%COMP%]{margin-top:var(--spacing-4);overflow-y:auto;flex:1}.ticket-list-item[_ngcontent-%COMP%]{position:relative;padding:var(--spacing-4);border-radius:var(--radius-md);margin-bottom:var(--spacing-3);background-color:var(--gray-50);transition:all var(--transition-normal);border-left:4px solid transparent;overflow:hidden}.ticket-list-item[_ngcontent-%COMP%]:hover{background-color:var(--gray-100)}.ticket-list-item.selected[_ngcontent-%COMP%]{background-color:var(--primary-50);border-left-color:var(--primary-500)}.ticket-list-item.resolved[_ngcontent-%COMP%]{opacity:.7}.ticket-status-indicator[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:4px;height:100%}.ticket-status-indicator.open[_ngcontent-%COMP%]{background-color:var(--info)}.ticket-status-indicator.in-progress[_ngcontent-%COMP%]{background-color:var(--warning)}.ticket-status-indicator.resolved[_ngcontent-%COMP%]{background-color:var(--success)}.ticket-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:var(--spacing-2);font-size:var(--font-sm)}.ticket-id[_ngcontent-%COMP%]{color:var(--gray-600);font-family:monospace;font-weight:600}.ticket-date[_ngcontent-%COMP%]{color:var(--gray-500)}.ticket-issue[_ngcontent-%COMP%]{margin-bottom:var(--spacing-3);font-size:var(--font-sm);color:var(--gray-900);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ticket-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;font-size:var(--font-xs)}.ticket-priority[_ngcontent-%COMP%], .ticket-status[_ngcontent-%COMP%]{padding:var(--spacing-1) var(--spacing-2);border-radius:var(--radius-md);text-transform:capitalize;font-weight:500}.ticket-priority.low[_ngcontent-%COMP%]{background-color:var(--gray-200);color:var(--gray-700)}.ticket-priority.medium[_ngcontent-%COMP%]{background-color:var(--warning);color:var(--gray-900)}.ticket-priority.high[_ngcontent-%COMP%]{background-color:var(--error);color:#fff}.ticket-status.open[_ngcontent-%COMP%]{background-color:var(--info);color:#fff}.ticket-status.in-progress[_ngcontent-%COMP%]{background-color:var(--warning);color:var(--gray-900)}.ticket-status.resolved[_ngcontent-%COMP%]{background-color:var(--success);color:#fff}.loading-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:var(--spacing-6) 0}.loading-spinner[_ngcontent-%COMP%]{width:40px;height:40px;border:3px solid var(--gray-200);border-radius:50%;border-top-color:var(--primary-500);animation:_ngcontent-%COMP%_spinner 1s linear infinite;margin-bottom:var(--spacing-3)}@keyframes _ngcontent-%COMP%_spinner{to{transform:rotate(360deg)}}.loading-text[_ngcontent-%COMP%]{color:var(--gray-500)}.error-message[_ngcontent-%COMP%]{padding:var(--spacing-4);border-radius:var(--radius-md);background-color:#dc35451a;color:var(--error);display:flex;align-items:center;gap:var(--spacing-2)}.no-tickets[_ngcontent-%COMP%], .no-messages[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:var(--spacing-10) 0;color:var(--gray-500);text-align:center}.no-tickets[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .no-messages[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:var(--font-3xl);margin-bottom:var(--spacing-3);opacity:.5}.chat-header[_ngcontent-%COMP%]{padding:var(--spacing-6);border-bottom:1px solid var(--gray-200)}.chat-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--spacing-3);margin-bottom:var(--spacing-2)}.issue-text[_ngcontent-%COMP%]{color:var(--gray-600);margin:0;font-size:var(--font-sm)}.messages-container[_ngcontent-%COMP%]{flex:1;overflow:hidden;display:flex;flex-direction:column;position:relative}.messages-container.fixed-height[_ngcontent-%COMP%]{height:400px;max-height:400px;min-height:400px}.messages[_ngcontent-%COMP%]{padding:var(--spacing-4);overflow-y:auto;overflow-x:hidden;flex:1;display:flex;flex-direction:column;gap:var(--spacing-4);max-height:100%;scrollbar-width:thin;scrollbar-color:var(--gray-400) var(--gray-100)}.messages[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.messages[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:var(--gray-100);border-radius:4px}.messages[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--gray-400);border-radius:4px}.no-messages[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%}.message[_ngcontent-%COMP%]{display:flex;max-width:80%;animation:_ngcontent-%COMP%_fadeIn .3s ease-out}.user-message[_ngcontent-%COMP%]{align-self:flex-end;flex-direction:row-reverse}.admin-message[_ngcontent-%COMP%]{align-self:flex-start}.message-avatar[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:var(--radius-full);background-color:var(--gray-200);display:flex;align-items:center;justify-content:center;color:var(--gray-700);flex-shrink:0}.user-message[_ngcontent-%COMP%]   .message-avatar[_ngcontent-%COMP%]{background-color:var(--primary-100);color:var(--primary-700);margin-left:var(--spacing-2)}.admin-message[_ngcontent-%COMP%]   .message-avatar[_ngcontent-%COMP%]{background-color:var(--secondary-100);color:var(--secondary-700);margin-right:var(--spacing-2)}.message-content[_ngcontent-%COMP%]{background-color:#fff;border-radius:var(--radius-lg);padding:var(--spacing-3) var(--spacing-4);box-shadow:var(--shadow-sm)}.user-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]{background-color:var(--primary-100);color:var(--primary-900)}.admin-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]{background-color:var(--secondary-100);color:var(--secondary-900)}.message-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:var(--spacing-1);font-size:var(--font-xs)}.sender-name[_ngcontent-%COMP%]{font-weight:600}.message-time[_ngcontent-%COMP%]{color:var(--gray-500)}.message-text[_ngcontent-%COMP%]{font-size:var(--font-sm);line-height:1.5}.message-input-container[_ngcontent-%COMP%]{padding:var(--spacing-4);border-top:1px solid var(--gray-200)}.input-wrapper[_ngcontent-%COMP%]{display:flex;align-items:flex-end;gap:var(--spacing-2)}.message-input[_ngcontent-%COMP%]{flex:1;resize:none;padding:var(--spacing-3);border:1px solid var(--gray-300);border-radius:var(--radius-md);font-size:var(--font-sm);line-height:1.5;transition:border-color var(--transition-normal)}.message-input[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--primary-400);box-shadow:0 0 0 3px #4299e133}.send-button[_ngcontent-%COMP%]{align-self:stretch;padding:0 var(--spacing-4);border-radius:var(--radius-md)}.ticket-resolved-message[_ngcontent-%COMP%]{margin-top:var(--spacing-3);padding:var(--spacing-3);background-color:var(--gray-100);border-radius:var(--radius-md);font-size:var(--font-sm);color:var(--gray-700);display:flex;align-items:center;gap:var(--spacing-2)}.ticket-resolved-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--success)}.empty-state[_ngcontent-%COMP%]{height:100%}.empty-card[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.empty-content[_ngcontent-%COMP%]{padding:var(--spacing-16) var(--spacing-6);text-align:center;color:var(--gray-500)}.empty-content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:4rem;margin-bottom:var(--spacing-4);opacity:.3}.empty-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:var(--spacing-3);color:var(--gray-700)}.empty-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray-500);max-width:300px;margin:0 auto}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@media (max-width: 992px){.support-dashboard[_ngcontent-%COMP%]{flex-direction:column;margin:var(--spacing-4) auto}.tickets-container[_ngcontent-%COMP%], .chat-container[_ngcontent-%COMP%]{max-width:100%;width:100%}.tickets-container[_ngcontent-%COMP%]{order:1}.chat-container[_ngcontent-%COMP%]{order:0;margin-bottom:var(--spacing-6)}}.btn-open-ticket[_ngcontent-%COMP%]{display:block;width:100%;margin-top:var(--spacing-3);padding:var(--spacing-2) var(--spacing-3);background-color:var(--primary-500);color:#fff;border:none;border-radius:var(--radius-md);font-size:var(--font-sm);font-weight:500;cursor:pointer;transition:background-color var(--transition-normal)}.btn-open-ticket[_ngcontent-%COMP%]:hover{background-color:var(--primary-600)}.btn-open-ticket[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:var(--spacing-2)}",
    ],
  });
};
export { ne as SupportTicketComponent };
