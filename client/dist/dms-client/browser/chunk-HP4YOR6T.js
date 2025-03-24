import { a as x } from "./chunk-5QNQV3N7.js";
import "./chunk-2PQBQFV5.js";
import "./chunk-UD6YS3BW.js";
import { d as h, f as v } from "./chunk-E5QSSROS.js";
import "./chunk-6GCQ5O75.js";
import "./chunk-OMR3M7LI.js";
import {
  $a as l,
  Db as e,
  Eb as t,
  Fb as i,
  Jc as u,
  Lb as f,
  Wb as n,
  _a as m,
  fb as d,
  mb as p,
  yb as s,
} from "./chunk-4KGF3EVT.js";
var O = class g {
  constructor(r) {
    this.authService = r;
  }
  navigate = "/dashboard";
  animationObserver = null;
  ngOnInit() {
    localStorage.getItem("authToken") || (this.navigate = "/sign-in"),
      this.setupScrollAnimations();
  }
  ngAfterViewInit() {
    this.checkScrollAnimations();
  }
  ngOnDestroy() {
    this.animationObserver && this.animationObserver.disconnect();
  }
  onWindowScroll() {
    this.checkScrollAnimations();
  }
  setupScrollAnimations() {
    let r = { root: null, rootMargin: "0px", threshold: 0.1 };
    (this.animationObserver = new IntersectionObserver((o, a) => {
      o.forEach((c) => {
        c.isIntersecting &&
          (c.target.classList.add("visible"), a.unobserve(c.target));
      });
    }, r)),
      setTimeout(() => {
        document.querySelectorAll(".animate-on-scroll").forEach((a) => {
          this.animationObserver?.observe(a);
        });
      }, 100);
  }
  checkScrollAnimations() {
    document
      .querySelectorAll(".animate-on-scroll:not(.visible)")
      .forEach((o) => {
        let a = o.getBoundingClientRect(),
          c = window.innerHeight || document.documentElement.clientHeight;
        a.top <= c * 0.8 && o.classList.add("visible");
      });
  }
  static ɵfac = function (o) {
    return new (o || g)(d(x));
  };
  static ɵcmp = p({
    type: g,
    selectors: [["app-home"]],
    hostBindings: function (o, a) {
      o & 1 &&
        f(
          "scroll",
          function (C) {
            return a.onWindowScroll(C);
          },
          !1,
          m,
        );
    },
    decls: 130,
    vars: 2,
    consts: [
      [1, "home-container"],
      [1, "hero-section"],
      [1, "container"],
      [1, "hero-content"],
      [1, "hero-text"],
      [1, "hero-title", "animate-fade-in"],
      [1, "hero-subtitle", "animate-fade-in-delay-1"],
      [1, "cta-container", "animate-fade-in-delay-2"],
      [1, "btn", "btn-primary", "btn-lg", 3, "routerLink"],
      ["href", "#features", 1, "btn", "btn-outline", "btn-lg"],
      [1, "hero-image", "animate-fade-in-delay-1"],
      [
        "src",
        "assets/hero_img.png",
        "alt",
        "Privacy illustration",
        1,
        "img-fluid",
      ],
      ["id", "features", 1, "section"],
      [1, "section-header"],
      [1, "section-title"],
      [1, "section-subtitle"],
      [1, "feature-grid"],
      [1, "feature-card", "animate-on-scroll"],
      [1, "feature-icon"],
      [1, "fas", "fa-shield-alt"],
      [1, "fas", "fa-eye-slash"],
      [1, "fas", "fa-lock"],
      [1, "fas", "fa-share-alt"],
      [1, "section", "section-alt"],
      [1, "content-row"],
      [1, "content-text"],
      [1, "feature-list"],
      [1, "fas", "fa-check"],
      [1, "content-image", "animate-on-scroll"],
      [
        "src",
        "assets/security.png",
        "alt",
        "Security illustration",
        1,
        "img-fluid",
      ],
      [1, "section"],
      [1, "content-row", "reverse"],
      [
        "src",
        "assets/ethics.png",
        "alt",
        "Ethics illustration",
        1,
        "img-fluid",
      ],
      [
        "src",
        "assets/Use.png",
        "alt",
        "Free to use illustration",
        1,
        "img-fluid",
      ],
      [1, "cta-section"],
      [1, "cta-content"],
    ],
    template: function (o, a) {
      o & 1 &&
        (e(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(
          5,
          "h1",
          5,
        ),
        n(6, " Giving You the Power of Privacy "),
        t(),
        e(7, "p", 6),
        n(
          8,
          " Our app empowers you to securely share files and encrypt text while safeguarding your privacy. ",
        ),
        t(),
        e(9, "div", 7)(10, "a", 8),
        n(11, "Get Started"),
        t(),
        e(12, "a", 9),
        n(13, "How It Works"),
        t()()(),
        e(14, "div", 10),
        i(15, "img", 11),
        t()()()(),
        e(16, "section", 12)(17, "div", 2)(18, "div", 13)(19, "h2", 14),
        n(20, "How It Works"),
        t(),
        e(21, "p", 15),
        n(
          22,
          " Our powerful technology combines advanced algorithms to protect your data ",
        ),
        t()(),
        e(23, "div", 16)(24, "div", 17)(25, "div", 18),
        i(26, "i", 19),
        t(),
        e(27, "h3"),
        n(28, "Intelligent Scanning"),
        t(),
        e(29, "p"),
        n(
          30,
          " Our web app combines image processing techniques and advanced machine learning algorithms to comprehensively analyze your files. ",
        ),
        t()(),
        e(31, "div", 17)(32, "div", 18),
        i(33, "i", 20),
        t(),
        e(34, "h3"),
        n(35, "PII Detection"),
        t(),
        e(36, "p"),
        n(
          37,
          " We identify and isolate sensitive content, such as images, credit card numbers, addresses, and various types of predefined PII. ",
        ),
        t()(),
        e(38, "div", 17)(39, "div", 18),
        i(40, "i", 21),
        t(),
        e(41, "h3"),
        n(42, "Secure Encryption"),
        t(),
        e(43, "p"),
        n(
          44,
          " Military-grade encryption algorithms ensure your sensitive data remains protected when sharing with authorized users. ",
        ),
        t()(),
        e(45, "div", 17)(46, "div", 18),
        i(47, "i", 22),
        t(),
        e(48, "h3"),
        n(49, "Controlled Sharing"),
        t(),
        e(50, "p"),
        n(
          51,
          " Share your documents with confidence, knowing that sensitive information is protected from unauthorized access. ",
        ),
        t()()()()(),
        e(52, "section", 23)(53, "div", 2)(54, "div", 24)(55, "div", 25)(
          56,
          "h2",
        ),
        n(57, "Security at its Core"),
        t(),
        e(58, "p"),
        n(
          59,
          " We understand the value of your sensitive data and are committed to ensuring its confidentiality. Our automated process meticulously detects and allows you to blur sensitive information, rendering it indecipherable to unauthorized users. ",
        ),
        t(),
        e(60, "ul", 26)(61, "li"),
        i(62, "i", 27),
        n(63, " Real-time PII detection"),
        t(),
        e(64, "li"),
        i(65, "i", 27),
        n(66, " End-to-end encryption"),
        t(),
        e(67, "li"),
        i(68, "i", 27),
        n(69, " Secure document sharing"),
        t(),
        e(70, "li"),
        i(71, "i", 27),
        n(72, " Personal control over your data "),
        t()()(),
        e(73, "div", 28),
        i(74, "img", 29),
        t()()()(),
        e(75, "section", 30)(76, "div", 2)(77, "div", 31)(78, "div", 28),
        i(79, "img", 32),
        t(),
        e(80, "div", 25)(81, "h2"),
        n(82, "Our Ethics"),
        t(),
        e(83, "p"),
        n(
          84,
          " We prioritize privacy by employing encryption and adhering to best practices in data handling. Your documents are processed swiftly and efficiently, leaving no room for data leaks or breaches. ",
        ),
        t(),
        e(85, "ul", 26)(86, "li"),
        i(87, "i", 27),
        n(88, " No data retention"),
        t(),
        e(89, "li"),
        i(90, "i", 27),
        n(91, " Transparent processing"),
        t(),
        e(92, "li"),
        i(93, "i", 27),
        n(94, " Privacy-first approach"),
        t(),
        e(95, "li"),
        i(96, "i", 27),
        n(97, " Regular security audits"),
        t()()()()()(),
        e(98, "section", 23)(99, "div", 2)(100, "div", 24)(101, "div", 25)(
          102,
          "h2",
        ),
        n(103, "Free to Use!"),
        t(),
        e(104, "p"),
        n(
          105,
          " Whether you're an individual or an enterprise, our web app has you covered. We believe privacy is a right, not a privilege. ",
        ),
        t(),
        e(106, "ul", 26)(107, "li"),
        i(108, "i", 27),
        n(109, " No hidden costs"),
        t(),
        e(110, "li"),
        i(111, "i", 27),
        n(112, " Full feature access"),
        t(),
        e(113, "li"),
        i(114, "i", 27),
        n(115, " Regular updates"),
        t(),
        e(116, "li"),
        i(117, "i", 27),
        n(118, " Community support"),
        t()()(),
        e(119, "div", 28),
        i(120, "img", 33),
        t()()()(),
        e(121, "section", 34)(122, "div", 2)(123, "div", 35)(124, "h2"),
        n(125, "Ready to Secure Your Data?"),
        t(),
        e(126, "p"),
        n(
          127,
          " Share sensitive content confidently, knowing that your data is shielded by the latest advancements in technology. ",
        ),
        t(),
        e(128, "a", 8),
        n(129, "Get Started Now"),
        t()()()()()),
        o & 2 &&
          (l(10),
          s("routerLink", a.navigate),
          l(118),
          s("routerLink", a.navigate));
    },
    dependencies: [u, v, h],
    styles: [
      "body[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0;padding:0}body[_ngcontent-%COMP%]{font-family:Arial,sans-serif}.landing-page-header[_ngcontent-%COMP%]{background-color:#fff;display:flex;justify-content:center;align-items:center;padding:80px 0}.header-content[_ngcontent-%COMP%]{margin-left:10px;max-width:1000px;display:flex;justify-content:space-between;align-items:center}.left-content[_ngcontent-%COMP%]{flex:1;padding:0 50px}.left-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:38px;color:#036}.left-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;margin-top:15px;color:#416992;font-weight:700}.cta-button[_ngcontent-%COMP%]{display:inline-block;margin-top:30px;padding:12px 20px;background-color:#036;color:#fff;border:none;border-radius:5px;text-decoration:none;font-size:16px;transition:background-color .3s}.cta-button[_ngcontent-%COMP%]:hover{background-color:#93b4d9;color:#000}.hero-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;height:auto}.left-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;height:auto;background-color:none}.feature-section[_ngcontent-%COMP%]{padding:20px 0;text-align:center;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;margin-left:100px}.feature-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:32px;margin-bottom:10px;color:#036}.feature-content[_ngcontent-%COMP%]{flex:1;max-width:500px;padding:0 20px;text-align:justify;font-size:20px}.right-content[_ngcontent-%COMP%]{flex:1;text-align:center;margin-left:250px}.right-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;height:auto;background-color:none}.feature-section.alternate[_ngcontent-%COMP%]   .feature-content[_ngcontent-%COMP%]{margin-right:250px;margin-left:50px;font-size:20px}.get-started-section[_ngcontent-%COMP%]{padding:80px 0;text-align:center;justify-content:center;background-color:#3e80c3;color:#fff}.get-started-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:20px;font-size:18px}.home-container[_ngcontent-%COMP%]{overflow-x:hidden}.hero-section[_ngcontent-%COMP%]{padding:var(--spacing-16) 0;background-color:var(--gray-50);position:relative}.hero-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:var(--spacing-10)}.hero-text[_ngcontent-%COMP%]{flex:1;max-width:600px}.hero-title[_ngcontent-%COMP%]{font-size:3rem;font-weight:700;color:var(--primary-900);margin-bottom:var(--spacing-4);line-height:1.2}.hero-subtitle[_ngcontent-%COMP%]{font-size:var(--font-xl);color:var(--gray-600);margin-bottom:var(--spacing-8);line-height:1.5}.cta-container[_ngcontent-%COMP%]{display:flex;gap:var(--spacing-4);margin-top:var(--spacing-6)}.btn-lg[_ngcontent-%COMP%]{padding:var(--spacing-3) var(--spacing-6);font-size:var(--font-lg)}.hero-image[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center;align-items:center}.hero-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}.section[_ngcontent-%COMP%]{padding:var(--spacing-16) 0}.section-alt[_ngcontent-%COMP%]{background-color:var(--gray-50)}.section-header[_ngcontent-%COMP%]{text-align:center;max-width:800px;margin:0 auto var(--spacing-12)}.section-title[_ngcontent-%COMP%]{font-size:var(--font-3xl);color:var(--primary-900);margin-bottom:var(--spacing-3)}.section-subtitle[_ngcontent-%COMP%]{font-size:var(--font-lg);color:var(--gray-600)}.feature-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:var(--spacing-6);margin-top:var(--spacing-8)}.feature-card[_ngcontent-%COMP%]{background-color:#fff;border-radius:var(--radius-lg);padding:var(--spacing-6);box-shadow:var(--shadow-md);transition:transform var(--transition-normal),box-shadow var(--transition-normal);text-align:center}.feature-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:var(--shadow-lg)}.feature-icon[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:64px;height:64px;background-color:var(--primary-100);color:var(--primary-700);border-radius:var(--radius-full);margin-bottom:var(--spacing-4);font-size:var(--font-2xl)}.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:var(--font-xl);color:var(--gray-900);margin-bottom:var(--spacing-3)}.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray-600);line-height:1.6;margin:0}.content-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--spacing-12)}.content-row.reverse[_ngcontent-%COMP%]{flex-direction:row-reverse}.content-text[_ngcontent-%COMP%]{flex:1}.content-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:var(--font-3xl);color:var(--primary-900);margin-bottom:var(--spacing-4)}.content-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray-600);line-height:1.6;margin-bottom:var(--spacing-6)}.feature-list[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:var(--spacing-3);color:var(--gray-700)}.feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--success);margin-right:var(--spacing-2);font-size:var(--font-lg)}.content-image[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center}.content-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}.cta-section[_ngcontent-%COMP%]{background-color:var(--primary-800);color:#fff;padding:var(--spacing-16) 0;text-align:center}.cta-content[_ngcontent-%COMP%]{max-width:800px;margin:0 auto}.cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:var(--font-3xl);margin-bottom:var(--spacing-4);color:#fff}.cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:var(--font-lg);margin-bottom:var(--spacing-8);color:var(--gray-200)}.cta-content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-top:var(--spacing-4)}.animate-fade-in[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .8s ease-in-out}.animate-fade-in-delay-1[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .8s ease-in-out .3s both}.animate-fade-in-delay-2[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .8s ease-in-out .6s both}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.animate-on-scroll[_ngcontent-%COMP%]{opacity:0;transform:translateY(30px);transition:opacity .6s ease-out,transform .6s ease-out}.animate-on-scroll.visible[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.img-fluid[_ngcontent-%COMP%]{max-width:100%;height:auto}@media (max-width: 992px){.hero-title[_ngcontent-%COMP%]{font-size:2.5rem}.hero-subtitle[_ngcontent-%COMP%]{font-size:var(--font-lg)}.content-row[_ngcontent-%COMP%]{gap:var(--spacing-8)}}@media (max-width: 768px){.hero-section[_ngcontent-%COMP%]{padding:var(--spacing-8) 0}.hero-content[_ngcontent-%COMP%]{flex-direction:column;text-align:center}.hero-text[_ngcontent-%COMP%]{order:1}.hero-image[_ngcontent-%COMP%]{order:0;margin-bottom:var(--spacing-8)}.cta-container[_ngcontent-%COMP%]{justify-content:center}.content-row[_ngcontent-%COMP%]{flex-direction:column;gap:var(--spacing-8)}.content-row.reverse[_ngcontent-%COMP%]{flex-direction:column}.content-text[_ngcontent-%COMP%]{text-align:center}.feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{justify-content:center}.section[_ngcontent-%COMP%]{padding:var(--spacing-10) 0}}",
    ],
  });
};
export { O as HomeComponent };
