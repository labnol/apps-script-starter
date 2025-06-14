var app = (function (d) {
  "use strict";
  const x = () => {
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
  function u(r, e) {
    try {
      return [decodeURIComponent(r.join(""))];
    } catch {}
    if (r.length === 1) return r;
    e = e || 1;
    const t = r.slice(0, e),
      n = r.slice(e);
    return Array.prototype.concat.call([], u(t), u(n));
  }
  function U(r) {
    try {
      return decodeURIComponent(r);
    } catch {
      let e = r.match(h) || [];
      for (let t = 1; t < e.length; t++)
        (r = u(e, t).join("")), (e = r.match(h) || []);
      return r;
    }
  }
  function $(r) {
    const e = { "%FE%FF": "��", "%FF%FE": "��" };
    let t = b.exec(r);
    for (; t; ) {
      try {
        e[t[0]] = decodeURIComponent(t[0]);
      } catch {
        const a = U(t[0]);
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
      return $(r);
    }
  }
  function L(r, e) {
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
          const i = r[n];
          e(n, i, r) && Object.defineProperty(t, n, a);
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
  const R = (r) => r == null,
    D = (r) =>
      encodeURIComponent(r).replaceAll(
        /[!'()*]/g,
        (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`,
      ),
    l = Symbol("encodeFragmentIdentifier");
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
          const i = typeof n == "string" && n.includes(r.arrayFormatSeparator),
            f =
              typeof n == "string" &&
              !i &&
              o(n, r).includes(r.arrayFormatSeparator);
          n = f ? o(n, r) : n;
          const c =
            i || f
              ? n.split(r.arrayFormatSeparator).map((y) => o(y, r))
              : n === null
                ? n
                : o(n, r);
          a[t] = c;
        };
      case "bracket-separator":
        return (t, n, a) => {
          const i = /(\[])$/.test(t);
          if (((t = t.replace(/\[]$/, "")), !i)) {
            a[t] = n && o(n, r);
            return;
          }
          const f = n === null ? [] : o(n, r).split(r.arrayFormatSeparator);
          if (a[t] === void 0) {
            a[t] = f;
            return;
          }
          a[t] = [...a[t], ...f];
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
    return e.encode ? (e.strict ? D(r) : encodeURIComponent(r)) : r;
  }
  function o(r, e) {
    return e.decode ? I(r) : r;
  }
  function A(r) {
    return Array.isArray(r)
      ? r.sort()
      : typeof r == "object"
        ? A(Object.keys(r))
            .sort((e, t) => Number(e) - Number(t))
            .map((e) => r[e])
        : r;
  }
  function N(r) {
    const e = r.indexOf("#");
    return e !== -1 && (r = r.slice(0, e)), r;
  }
  function G(r) {
    let e = "";
    const t = r.indexOf("#");
    return t !== -1 && (e = r.slice(t)), e;
  }
  function w(r, e, t) {
    return t === "string" && typeof r == "string"
      ? r
      : typeof t == "function" && typeof r == "string"
        ? t(r)
        : t === "boolean" &&
            r !== null &&
            (r.toLowerCase() === "true" || r.toLowerCase() === "false")
          ? r.toLowerCase() === "true"
          : t === "boolean" &&
              r !== null &&
              (r.toLowerCase() === "1" || r.toLowerCase() === "0")
            ? r.toLowerCase() === "1"
            : t === "string[]" &&
                e.arrayFormat !== "none" &&
                typeof r == "string"
              ? [r]
              : t === "number[]" &&
                  e.arrayFormat !== "none" &&
                  !Number.isNaN(Number(r)) &&
                  typeof r == "string" &&
                  r.trim() !== ""
                ? [Number(r)]
                : t === "number" &&
                    !Number.isNaN(Number(r)) &&
                    typeof r == "string" &&
                    r.trim() !== ""
                  ? Number(r)
                  : e.parseBooleans &&
                      r !== null &&
                      (r.toLowerCase() === "true" ||
                        r.toLowerCase() === "false")
                    ? r.toLowerCase() === "true"
                    : e.parseNumbers &&
                        !Number.isNaN(Number(r)) &&
                        typeof r == "string" &&
                        r.trim() !== ""
                      ? Number(r)
                      : r;
  }
  function m(r) {
    r = N(r);
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
      const i = e.decode ? a.replaceAll("+", " ") : a;
      let [f, c] = S(i, "=");
      f === void 0 && (f = i),
        (c =
          c === void 0
            ? null
            : ["comma", "separator", "bracket-separator"].includes(
                  e.arrayFormat,
                )
              ? c
              : o(c, e)),
        t(o(f, e), c, n);
    }
    for (const [a, i] of Object.entries(n))
      if (typeof i == "object" && i !== null && e.types[a] !== "string")
        for (const [f, c] of Object.entries(i)) {
          const y = e.types[a] ? e.types[a].replace("[]", "") : void 0;
          i[f] = w(c, e, y);
        }
      else
        typeof i == "object" && i !== null && e.types[a] === "string"
          ? (n[a] = Object.values(i).join(e.arrayFormatSeparator))
          : (n[a] = w(i, e, e.types[a]));
    return e.sort === !1
      ? n
      : (e.sort === !0
          ? Object.keys(n).sort()
          : Object.keys(n).sort(e.sort)
        ).reduce((a, i) => {
          const f = n[i];
          return (
            (a[i] = f && typeof f == "object" && !Array.isArray(f) ? A(f) : f),
            a
          );
        }, Object.create(null));
  }
  function p(r, e) {
    if (!r) return "";
    (e = {
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      ...e,
    }),
      O(e.arrayFormatSeparator);
    const t = (f) =>
        (e.skipNull && R(r[f])) || (e.skipEmptyString && r[f] === ""),
      n = M(e),
      a = {};
    for (const [f, c] of Object.entries(r)) t(f) || (a[f] = c);
    const i = Object.keys(a);
    return (
      e.sort !== !1 && i.sort(e.sort),
      i
        .map((f) => {
          const c = r[f];
          return c === void 0
            ? ""
            : c === null
              ? s(f, e)
              : Array.isArray(c)
                ? c.length === 0 && e.arrayFormat === "bracket-separator"
                  ? s(f, e) + "[]"
                  : c.reduce(n(f), []).join("&")
                : s(f, e) + "=" + s(c, e);
        })
        .filter((f) => f.length > 0)
        .join("&")
    );
  }
  function j(r, e) {
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
          ? { fragmentIdentifier: o(n, e) }
          : {}),
      }
    );
  }
  function C(r, e) {
    e = { encode: !0, strict: !0, [l]: !0, ...e };
    const t = N(r.url).split("?")[0] || "",
      n = m(r.url),
      a = { ...g(n, { sort: !1 }), ...r.query };
    let i = p(a, e);
    i && (i = `?${i}`);
    let f = G(r.url);
    if (typeof r.fragmentIdentifier == "string") {
      const c = new URL(t);
      (c.hash = r.fragmentIdentifier),
        (f = e[l] ? c.hash : `#${r.fragmentIdentifier}`);
    }
    return `${t}${i}${f}`;
  }
  function E(r, e, t) {
    t = { parseFragmentIdentifier: !0, [l]: !1, ...t };
    const { url: n, query: a, fragmentIdentifier: i } = j(r, t);
    return C({ url: n, query: L(a, e), fragmentIdentifier: i }, t);
  }
  function P(r, e, t) {
    const n = Array.isArray(e) ? (a) => !e.includes(a) : (a, i) => !e(a, i);
    return E(r, n, t);
  }
  const q = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          exclude: P,
          extract: m,
          parse: g,
          parseUrl: j,
          pick: E,
          stringify: p,
          stringifyUrl: C,
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
    (d.doGet = V),
    (d.getGmailAliases = x),
    (d.makeQueryString = H),
    Object.defineProperty(d, Symbol.toStringTag, { value: "Module" }),
    d
  );
})({});

const doGet = (...args) => app.doGet(...args);
const getGmailAliases = (...args) => app.getGmailAliases(...args);
const makeQueryString = (...args) => app.makeQueryString(...args);
