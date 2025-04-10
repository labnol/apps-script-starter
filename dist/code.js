var app = (function (o) {
  "use strict";
  const U = () => {
      try {
        const { sendAs: r = [] } = Gmail.Users.Settings.SendAs.list("me");
        if (r.length) return r.map((e) => e.sendAsEmail);
      } catch (r) {
        Logger.log(r.message);
      }
      return [Session.getActiveUser().getEmail()];
    },
    F = "%[a-f0-9]{2}",
    h = new RegExp("(" + F + ")|([^%]+?)", "gi"),
    b = new RegExp("(" + F + ")+", "gi");
  function l(r, e) {
    try {
      return [decodeURIComponent(r.join(""))];
    } catch {}
    if (r.length === 1) return r;
    e = e || 1;
    const t = r.slice(0, e),
      n = r.slice(e);
    return Array.prototype.concat.call([], l(t), l(n));
  }
  function $(r) {
    try {
      return decodeURIComponent(r);
    } catch {
      let e = r.match(h) || [];
      for (let t = 1; t < e.length; t++)
        (r = l(e, t).join("")), (e = r.match(h) || []);
      return r;
    }
  }
  function C(r) {
    const e = { "%FE%FF": "��", "%FF%FE": "��" };
    let t = b.exec(r);
    for (; t; ) {
      try {
        e[t[0]] = decodeURIComponent(t[0]);
      } catch {
        const a = $(t[0]);
        a !== t[0] && (e[t[0]] = a);
      }
      t = b.exec(r);
    }
    e["%C2"] = "�";
    const n = Object.keys(e);
    for (const a of n) r = r.replace(new RegExp(a, "g"), e[a]);
    return r;
  }
  function I(r) {
    if (typeof r != "string")
      throw new TypeError(
        "Expected `encodedURI` to be of type `string`, got `" + typeof r + "`",
      );
    try {
      return decodeURIComponent(r);
    } catch {
      return C(r);
    }
  }
  function R(r, e) {
    const t = {};
    if (Array.isArray(e))
      for (const n of e) {
        const a = Object.getOwnPropertyDescriptor(r, n);
        a != null && a.enumerable && Object.defineProperty(t, n, a);
      }
    else
      for (const n of Reflect.ownKeys(r)) {
        const a = Object.getOwnPropertyDescriptor(r, n);
        if (a.enumerable) {
          const f = r[n];
          e(n, f, r) && Object.defineProperty(t, n, a);
        }
      }
    return t;
  }
  function S(r, e) {
    if (!(typeof r == "string" && typeof e == "string"))
      throw new TypeError("Expected the arguments to be of type `string`");
    if (r === "" || e === "") return [];
    const t = r.indexOf(e);
    return t === -1 ? [] : [r.slice(0, t), r.slice(t + e.length)];
  }
  const D = (r) => r == null,
    L = (r) =>
      encodeURIComponent(r).replaceAll(
        /[!'()*]/g,
        (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`,
      ),
    u = Symbol("encodeFragmentIdentifier");
  function M(r) {
    switch (r.arrayFormat) {
      case "index":
        return (e) => (t, n) => {
          const a = t.length;
          return n === void 0 ||
            (r.skipNull && n === null) ||
            (r.skipEmptyString && n === "")
            ? t
            : n === null
              ? [...t, [s(e, r), "[", a, "]"].join("")]
              : [...t, [s(e, r), "[", s(a, r), "]=", s(n, r)].join("")];
        };
      case "bracket":
        return (e) => (t, n) =>
          n === void 0 ||
          (r.skipNull && n === null) ||
          (r.skipEmptyString && n === "")
            ? t
            : n === null
              ? [...t, [s(e, r), "[]"].join("")]
              : [...t, [s(e, r), "[]=", s(n, r)].join("")];
      case "colon-list-separator":
        return (e) => (t, n) =>
          n === void 0 ||
          (r.skipNull && n === null) ||
          (r.skipEmptyString && n === "")
            ? t
            : n === null
              ? [...t, [s(e, r), ":list="].join("")]
              : [...t, [s(e, r), ":list=", s(n, r)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const e = r.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (t) => (n, a) =>
          a === void 0 ||
          (r.skipNull && a === null) ||
          (r.skipEmptyString && a === "")
            ? n
            : ((a = a === null ? "" : a),
              n.length === 0
                ? [[s(t, r), e, s(a, r)].join("")]
                : [[n, s(a, r)].join(r.arrayFormatSeparator)]);
      }
      default:
        return (e) => (t, n) =>
          n === void 0 ||
          (r.skipNull && n === null) ||
          (r.skipEmptyString && n === "")
            ? t
            : n === null
              ? [...t, s(e, r)]
              : [...t, [s(e, r), "=", s(n, r)].join("")];
    }
  }
  function T(r) {
    let e;
    switch (r.arrayFormat) {
      case "index":
        return (t, n, a) => {
          if (((e = /\[(\d*)]$/.exec(t)), (t = t.replace(/\[\d*]$/, "")), !e)) {
            a[t] = n;
            return;
          }
          a[t] === void 0 && (a[t] = {}), (a[t][e[1]] = n);
        };
      case "bracket":
        return (t, n, a) => {
          if (((e = /(\[])$/.exec(t)), (t = t.replace(/\[]$/, "")), !e)) {
            a[t] = n;
            return;
          }
          if (a[t] === void 0) {
            a[t] = [n];
            return;
          }
          a[t] = [...a[t], n];
        };
      case "colon-list-separator":
        return (t, n, a) => {
          if (((e = /(:list)$/.exec(t)), (t = t.replace(/:list$/, "")), !e)) {
            a[t] = n;
            return;
          }
          if (a[t] === void 0) {
            a[t] = [n];
            return;
          }
          a[t] = [...a[t], n];
        };
      case "comma":
      case "separator":
        return (t, n, a) => {
          const f = typeof n == "string" && n.includes(r.arrayFormatSeparator),
            c =
              typeof n == "string" &&
              !f &&
              d(n, r).includes(r.arrayFormatSeparator);
          n = c ? d(n, r) : n;
          const i =
            f || c
              ? n.split(r.arrayFormatSeparator).map((y) => d(y, r))
              : n === null
                ? n
                : d(n, r);
          a[t] = i;
        };
      case "bracket-separator":
        return (t, n, a) => {
          const f = /(\[])$/.test(t);
          if (((t = t.replace(/\[]$/, "")), !f)) {
            a[t] = n && d(n, r);
            return;
          }
          const c = n === null ? [] : d(n, r).split(r.arrayFormatSeparator);
          if (a[t] === void 0) {
            a[t] = c;
            return;
          }
          a[t] = [...a[t], ...c];
        };
      default:
        return (t, n, a) => {
          if (a[t] === void 0) {
            a[t] = n;
            return;
          }
          a[t] = [...[a[t]].flat(), n];
        };
    }
  }
  function O(r) {
    if (typeof r != "string" || r.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string",
      );
  }
  function s(r, e) {
    return e.encode ? (e.strict ? L(r) : encodeURIComponent(r)) : r;
  }
  function d(r, e) {
    return e.decode ? I(r) : r;
  }
  function p(r) {
    return Array.isArray(r)
      ? r.sort()
      : typeof r == "object"
        ? p(Object.keys(r))
            .sort((e, t) => Number(e) - Number(t))
            .map((e) => r[e])
        : r;
  }
  function A(r) {
    const e = r.indexOf("#");
    return e !== -1 && (r = r.slice(0, e)), r;
  }
  function G(r) {
    let e = "";
    const t = r.indexOf("#");
    return t !== -1 && (e = r.slice(t)), e;
  }
  function j(r, e, t) {
    return t === "string" && typeof r == "string"
      ? r
      : typeof t == "function" && typeof r == "string"
        ? t(r)
        : e.parseBooleans &&
            r !== null &&
            (r.toLowerCase() === "true" || r.toLowerCase() === "false")
          ? r.toLowerCase() === "true"
          : (t === "number" &&
                !Number.isNaN(Number(r)) &&
                typeof r == "string" &&
                r.trim() !== "") ||
              (e.parseNumbers &&
                !Number.isNaN(Number(r)) &&
                typeof r == "string" &&
                r.trim() !== "")
            ? Number(r)
            : r;
  }
  function m(r) {
    r = A(r);
    const e = r.indexOf("?");
    return e === -1 ? "" : r.slice(e + 1);
  }
  function g(r, e) {
    (e = {
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1,
      types: Object.create(null),
      ...e,
    }),
      O(e.arrayFormatSeparator);
    const t = T(e),
      n = Object.create(null);
    if (typeof r != "string" || ((r = r.trim().replace(/^[?#&]/, "")), !r))
      return n;
    for (const a of r.split("&")) {
      if (a === "") continue;
      const f = e.decode ? a.replaceAll("+", " ") : a;
      let [c, i] = S(f, "=");
      c === void 0 && (c = f),
        (i =
          i === void 0
            ? null
            : ["comma", "separator", "bracket-separator"].includes(
                  e.arrayFormat,
                )
              ? i
              : d(i, e)),
        t(d(c, e), i, n);
    }
    for (const [a, f] of Object.entries(n))
      if (typeof f == "object" && f !== null && e.types[a] !== "string")
        for (const [c, i] of Object.entries(f)) {
          const y = e.types[a] ? e.types[a].replace("[]", "") : void 0;
          f[c] = j(i, e, y);
        }
      else
        typeof f == "object" && f !== null && e.types[a] === "string"
          ? (n[a] = Object.values(f).join(e.arrayFormatSeparator))
          : (n[a] = j(f, e, e.types[a]));
    return e.sort === !1
      ? n
      : (e.sort === !0
          ? Object.keys(n).sort()
          : Object.keys(n).sort(e.sort)
        ).reduce((a, f) => {
          const c = n[f];
          return (
            (a[f] = c && typeof c == "object" && !Array.isArray(c) ? p(c) : c),
            a
          );
        }, Object.create(null));
  }
  function N(r, e) {
    if (!r) return "";
    (e = {
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      ...e,
    }),
      O(e.arrayFormatSeparator);
    const t = (c) =>
        (e.skipNull && D(r[c])) || (e.skipEmptyString && r[c] === ""),
      n = M(e),
      a = {};
    for (const [c, i] of Object.entries(r)) t(c) || (a[c] = i);
    const f = Object.keys(a);
    return (
      e.sort !== !1 && f.sort(e.sort),
      f
        .map((c) => {
          const i = r[c];
          return i === void 0
            ? ""
            : i === null
              ? s(c, e)
              : Array.isArray(i)
                ? i.length === 0 && e.arrayFormat === "bracket-separator"
                  ? s(c, e) + "[]"
                  : i.reduce(n(c), []).join("&")
                : s(c, e) + "=" + s(i, e);
        })
        .filter((c) => c.length > 0)
        .join("&")
    );
  }
  function E(r, e) {
    var a;
    e = { decode: !0, ...e };
    let [t, n] = S(r, "#");
    return (
      t === void 0 && (t = r),
      {
        url:
          ((a = t == null ? void 0 : t.split("?")) == null ? void 0 : a[0]) ??
          "",
        query: g(m(r), e),
        ...(e && e.parseFragmentIdentifier && n
          ? { fragmentIdentifier: d(n, e) }
          : {}),
      }
    );
  }
  function w(r, e) {
    e = { encode: !0, strict: !0, [u]: !0, ...e };
    const t = A(r.url).split("?")[0] || "",
      n = m(r.url),
      a = { ...g(n, { sort: !1 }), ...r.query };
    let f = N(a, e);
    f && (f = `?${f}`);
    let c = G(r.url);
    if (typeof r.fragmentIdentifier == "string") {
      const i = new URL(t);
      (i.hash = r.fragmentIdentifier),
        (c = e[u] ? i.hash : `#${r.fragmentIdentifier}`);
    }
    return `${t}${f}${c}`;
  }
  function x(r, e, t) {
    t = { parseFragmentIdentifier: !0, [u]: !1, ...t };
    const { url: n, query: a, fragmentIdentifier: f } = E(r, t);
    return w({ url: n, query: R(a, e), fragmentIdentifier: f }, t);
  }
  function P(r, e, t) {
    const n = Array.isArray(e) ? (a) => !e.includes(a) : (a, f) => !e(a, f);
    return x(r, n, t);
  }
  const q = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          exclude: P,
          extract: m,
          parse: g,
          parseUrl: E,
          pick: x,
          stringify: N,
          stringifyUrl: w,
        },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    ),
    H = () => {
      const r = "https://example.com",
        e = {
          name: "amit",
          location: "india",
          interests: ["workspace", "apps script"],
        },
        t = q.stringify(e, { sort: !1, arrayFormat: "bracket" }),
        n = `${r}?${t}`;
      Logger.log(`URL: ${n}`);
    },
    V = () =>
      HtmlService.createHtmlOutputFromFile("index.html")
        .setTitle("Google Apps Script")
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
  return (
    (o.doGet = V),
    (o.getGmailAliases = U),
    (o.makeQueryString = H),
    Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }),
    o
  );
})({});

const doGet = (...args) => app.doGet(...args);
const getGmailAliases = (...args) => app.getGmailAliases(...args);
const makeQueryString = (...args) => app.makeQueryString(...args);
