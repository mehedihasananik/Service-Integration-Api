!(function (t, n) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define([], n)
    : "object" == typeof exports
    ? (exports.TwoPayClient = n())
    : (t.TwoPayClient = n());
})(window, function () {
  return (function (t) {
    var n = {};
    function e(r) {
      if (n[r]) return n[r].exports;
      var o = (n[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
    }
    return (
      (e.m = t),
      (e.c = n),
      (e.d = function (t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
      }),
      (e.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (e.t = function (t, n) {
        if ((1 & n && (t = e(t)), 8 & n)) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (e.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: t }),
          2 & n && "string" != typeof t)
        )
          for (var o in t)
            e.d(
              r,
              o,
              function (n) {
                return t[n];
              }.bind(null, o)
            );
        return r;
      }),
      (e.n = function (t) {
        var n =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return e.d(n, "a", n), n;
      }),
      (e.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (e.p = ""),
      e((e.s = 189))
    );
  })([
    function (t, n) {
      var e = Array.isArray;
      t.exports = e;
    },
    function (t, n, e) {
      var r = e(37),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = r || o || Function("return this")();
      t.exports = i;
    },
    function (t, n) {
      t.exports = function (t) {
        var n = typeof t;
        return null != t && ("object" == n || "function" == n);
      };
    },
    function (t, n, e) {
      (t.exports = e(160)), (t.exports.default = t.exports);
    },
    function (t, n) {
      t.exports = function (t) {
        return null != t && "object" == typeof t;
      };
    },
    function (t, n, e) {
      var r = e(97),
        o = e(100);
      t.exports = function (t, n) {
        var e = o(t, n);
        return r(e) ? e : void 0;
      };
    },
    function (t, n, e) {
      window,
        (t.exports = (function (t) {
          var n = {};
          function e(r) {
            if (n[r]) return n[r].exports;
            var o = (n[r] = { i: r, l: !1, exports: {} });
            return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
          }
          return (
            (e.m = t),
            (e.c = n),
            (e.d = function (t, n, r) {
              e.o(t, n) ||
                Object.defineProperty(t, n, { enumerable: !0, get: r });
            }),
            (e.r = function (t) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (e.t = function (t, n) {
              if ((1 & n && (t = e(t)), 8 & n)) return t;
              if (4 & n && "object" == typeof t && t && t.__esModule) return t;
              var r = Object.create(null);
              if (
                (e.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: t,
                }),
                2 & n && "string" != typeof t)
              )
                for (var o in t)
                  e.d(
                    r,
                    o,
                    function (n) {
                      return t[n];
                    }.bind(null, o)
                  );
              return r;
            }),
            (e.n = function (t) {
              var n =
                t && t.__esModule
                  ? function () {
                      return t.default;
                    }
                  : function () {
                      return t;
                    };
              return e.d(n, "a", n), n;
            }),
            (e.o = function (t, n) {
              return Object.prototype.hasOwnProperty.call(t, n);
            }),
            (e.p = ""),
            e((e.s = 0))
          );
        })([
          function (t, n, e) {
            "use strict";
            function r(t, n, e) {
              return (r = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
                ? Reflect.construct
                : function (t, n, e) {
                    var r = [null];
                    r.push.apply(r, n);
                    var i = new (Function.bind.apply(t, r))();
                    return e && o(i, e.prototype), i;
                  }).apply(null, arguments);
            }
            function o(t, n) {
              return (o =
                Object.setPrototypeOf ||
                function (t, n) {
                  return (t.__proto__ = n), t;
                })(t, n);
            }
            function i(t) {
              return (
                (function (t) {
                  if (Array.isArray(t)) {
                    for (var n = 0, e = new Array(t.length); n < t.length; n++)
                      e[n] = t[n];
                    return e;
                  }
                })(t) ||
                (function (t) {
                  if (
                    Symbol.iterator in Object(t) ||
                    "[object Arguments]" === Object.prototype.toString.call(t)
                  )
                    return Array.from(t);
                })(t) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to spread non-iterable instance"
                  );
                })()
              );
            }
            function u(t, n) {
              for (var e = 0; e < n.length; e++) {
                var r = n[e];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(t, r.key, r);
              }
            }
            e.r(n);
            var a,
              c,
              f = (function () {
                function t() {
                  return (
                    (function (t, n) {
                      if (!(t instanceof n))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, t),
                    this.constructor.instance ||
                      ((this.constructor.instance = this),
                      (this._container = {})),
                    this.constructor.instance
                  );
                }
                var n, e, o;
                return (
                  (n = t),
                  (o = [
                    {
                      key: "isClass",
                      value: function (t) {
                        return (
                          "function" == typeof t &&
                          (/^class\s/.test(
                            Function.prototype.toString.call(t)
                          ) ||
                            /_classCallCheck/gim.test(
                              Function.prototype.toString.call(t)
                            ))
                        );
                      },
                    },
                    {
                      key: "isFunction",
                      value: function (t) {
                        return "function" == typeof t;
                      },
                    },
                  ]),
                  (e = [
                    {
                      key: "register",
                      value: function (t, n, e) {
                        var o = this;
                        (n = n.map(function (t) {
                          return "string" == typeof t && o.get(t)
                            ? o.get(t)
                            : t;
                        })),
                          this.constructor.isClass(e)
                            ? (this._container[t] = r(e, i(n)))
                            : this.constructor.isFunction(e)
                            ? (this._container[t] = e.apply(void 0, i(n)))
                            : (this._container[t] = e);
                      },
                    },
                    {
                      key: "get",
                      value: function (t) {
                        return this._container[t];
                      },
                    },
                  ]) && u(n.prototype, e),
                  o && u(n, o),
                  t
                );
              })();
            (c = "instance") in (a = f)
              ? Object.defineProperty(a, c, {
                  value: null,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (a[c] = null),
              (n.default = new f());
          },
        ]));
    },
    function (t, n, e) {
      var r = e(11),
        o = e(74),
        i = e(75),
        u = r ? r.toStringTag : void 0;
      t.exports = function (t) {
        return null == t
          ? void 0 === t
            ? "[object Undefined]"
            : "[object Null]"
          : u && u in Object(t)
          ? o(t)
          : i(t);
      };
    },
    function (t, n, e) {
      var r = e(26),
        o = e(24);
      t.exports = function (t) {
        return null != t && o(t.length) && !r(t);
      };
    },
    function (t, n) {
      t.exports = function (t, n) {
        return t === n || (t != t && n != n);
      };
    },
    function (t, n) {
      var e;
      e = (function () {
        return this;
      })();
      try {
        e = e || new Function("return this")();
      } catch (t) {
        "object" == typeof window && (e = window);
      }
      t.exports = e;
    },
    function (t, n, e) {
      var r = e(1).Symbol;
      t.exports = r;
    },
    function (t, n) {
      t.exports = function (t) {
        return t;
      };
    },
    function (t, n, e) {
      var r = e(87),
        o = e(88),
        i = e(89),
        u = e(90),
        a = e(91);
      function c(t) {
        var n = -1,
          e = null == t ? 0 : t.length;
        for (this.clear(); ++n < e; ) {
          var r = t[n];
          this.set(r[0], r[1]);
        }
      }
      (c.prototype.clear = r),
        (c.prototype.delete = o),
        (c.prototype.get = i),
        (c.prototype.has = u),
        (c.prototype.set = a),
        (t.exports = c);
    },
    function (t, n, e) {
      var r = e(9);
      t.exports = function (t, n) {
        for (var e = t.length; e--; ) if (r(t[e][0], n)) return e;
        return -1;
      };
    },
    function (t, n, e) {
      var r = e(5)(Object, "create");
      t.exports = r;
    },
    function (t, n, e) {
      var r = e(109);
      t.exports = function (t, n) {
        var e = t.__data__;
        return r(n) ? e["string" == typeof n ? "string" : "hash"] : e.map;
      };
    },
    function (t, n, e) {
      var r = e(31);
      t.exports = function (t) {
        if ("string" == typeof t || r(t)) return t;
        var n = t + "";
        return "0" == n && 1 / t == -1 / 0 ? "-0" : n;
      };
    },
    function (t, n, e) {
      var r = e(36),
        o = e(80),
        i = e(8);
      t.exports = function (t) {
        return i(t) ? r(t) : o(t);
      };
    },
    function (t, n, e) {
      var r = e(73),
        o = e(4),
        i = Object.prototype,
        u = i.hasOwnProperty,
        a = i.propertyIsEnumerable,
        c = r(
          (function () {
            return arguments;
          })()
        )
          ? r
          : function (t) {
              return o(t) && u.call(t, "callee") && !a.call(t, "callee");
            };
      t.exports = c;
    },
    function (t, n, e) {
      (function (t) {
        var r = e(1),
          o = e(76),
          i = n && !n.nodeType && n,
          u = i && "object" == typeof t && t && !t.nodeType && t,
          a = u && u.exports === i ? r.Buffer : void 0,
          c = (a ? a.isBuffer : void 0) || o;
        t.exports = c;
      }).call(this, e(21)(t));
    },
    function (t, n) {
      t.exports = function (t) {
        return (
          t.webpackPolyfill ||
            ((t.deprecate = function () {}),
            (t.paths = []),
            t.children || (t.children = []),
            Object.defineProperty(t, "loaded", {
              enumerable: !0,
              get: function () {
                return t.l;
              },
            }),
            Object.defineProperty(t, "id", {
              enumerable: !0,
              get: function () {
                return t.i;
              },
            }),
            (t.webpackPolyfill = 1)),
          t
        );
      };
    },
    function (t, n) {
      var e = /^(?:0|[1-9]\d*)$/;
      t.exports = function (t, n) {
        var r = typeof t;
        return (
          !!(n = null == n ? 9007199254740991 : n) &&
          ("number" == r || ("symbol" != r && e.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < n
        );
      };
    },
    function (t, n, e) {
      var r = e(77),
        o = e(78),
        i = e(79),
        u = i && i.isTypedArray,
        a = u ? o(u) : r;
      t.exports = a;
    },
    function (t, n) {
      t.exports = function (t) {
        return (
          "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        );
      };
    },
    function (t, n) {
      var e = Object.prototype;
      t.exports = function (t) {
        var n = t && t.constructor;
        return t === (("function" == typeof n && n.prototype) || e);
      };
    },
    function (t, n, e) {
      var r = e(7),
        o = e(2);
      t.exports = function (t) {
        if (!o(t)) return !1;
        var n = r(t);
        return (
          "[object Function]" == n ||
          "[object GeneratorFunction]" == n ||
          "[object AsyncFunction]" == n ||
          "[object Proxy]" == n
        );
      };
    },
    function (t, n, e) {
      var r = e(13),
        o = e(92),
        i = e(93),
        u = e(94),
        a = e(95),
        c = e(96);
      function f(t) {
        var n = (this.__data__ = new r(t));
        this.size = n.size;
      }
      (f.prototype.clear = o),
        (f.prototype.delete = i),
        (f.prototype.get = u),
        (f.prototype.has = a),
        (f.prototype.set = c),
        (t.exports = f);
    },
    function (t, n, e) {
      var r = e(5)(e(1), "Map");
      t.exports = r;
    },
    function (t, n, e) {
      var r = e(101),
        o = e(108),
        i = e(110),
        u = e(111),
        a = e(112);
      function c(t) {
        var n = -1,
          e = null == t ? 0 : t.length;
        for (this.clear(); ++n < e; ) {
          var r = t[n];
          this.set(r[0], r[1]);
        }
      }
      (c.prototype.clear = r),
        (c.prototype.delete = o),
        (c.prototype.get = i),
        (c.prototype.has = u),
        (c.prototype.set = a),
        (t.exports = c);
    },
    function (t, n, e) {
      var r = e(0),
        o = e(31),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        u = /^\w*$/;
      t.exports = function (t, n) {
        if (r(t)) return !1;
        var e = typeof t;
        return (
          !(
            "number" != e &&
            "symbol" != e &&
            "boolean" != e &&
            null != t &&
            !o(t)
          ) ||
          u.test(t) ||
          !i.test(t) ||
          (null != n && t in Object(n))
        );
      };
    },
    function (t, n, e) {
      var r = e(7),
        o = e(4);
      t.exports = function (t) {
        return "symbol" == typeof t || (o(t) && "[object Symbol]" == r(t));
      };
    },
    function (t, n, e) {
      var r = e(57);
      t.exports = function (t, n, e) {
        "__proto__" == n && r
          ? r(t, n, {
              configurable: !0,
              enumerable: !0,
              value: e,
              writable: !0,
            })
          : (t[n] = e);
      };
    },
    function (t, n) {
      var e,
        r,
        o = (t.exports = {});
      function i() {
        throw new Error("setTimeout has not been defined");
      }
      function u() {
        throw new Error("clearTimeout has not been defined");
      }
      function a(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === i || !e) && setTimeout)
          return (e = setTimeout), setTimeout(t, 0);
        try {
          return e(t, 0);
        } catch (n) {
          try {
            return e.call(null, t, 0);
          } catch (n) {
            return e.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          e = "function" == typeof setTimeout ? setTimeout : i;
        } catch (t) {
          e = i;
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : u;
        } catch (t) {
          r = u;
        }
      })();
      var c,
        f = [],
        s = !1,
        l = -1;
      function h() {
        s &&
          c &&
          ((s = !1), c.length ? (f = c.concat(f)) : (l = -1), f.length && p());
      }
      function p() {
        if (!s) {
          var t = a(h);
          s = !0;
          for (var n = f.length; n; ) {
            for (c = f, f = []; ++l < n; ) c && c[l].run();
            (l = -1), (n = f.length);
          }
          (c = null),
            (s = !1),
            (function (t) {
              if (r === clearTimeout) return clearTimeout(t);
              if ((r === u || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(t);
              try {
                r(t);
              } catch (n) {
                try {
                  return r.call(null, t);
                } catch (n) {
                  return r.call(this, t);
                }
              }
            })(t);
        }
      }
      function d(t, n) {
        (this.fun = t), (this.array = n);
      }
      function v() {}
      (o.nextTick = function (t) {
        var n = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
        f.push(new d(t, n)), 1 !== f.length || s || a(p);
      }),
        (d.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (o.title = "browser"),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ""),
        (o.versions = {}),
        (o.on = v),
        (o.addListener = v),
        (o.once = v),
        (o.off = v),
        (o.removeListener = v),
        (o.removeAllListeners = v),
        (o.emit = v),
        (o.prependListener = v),
        (o.prependOnceListener = v),
        (o.listeners = function (t) {
          return [];
        }),
        (o.binding = function (t) {
          throw new Error("process.binding is not supported");
        }),
        (o.cwd = function () {
          return "/";
        }),
        (o.chdir = function (t) {
          throw new Error("process.chdir is not supported");
        }),
        (o.umask = function () {
          return 0;
        });
    },
    function (t, n, e) {
      var r = e(70),
        o = e(82)(r);
      t.exports = o;
    },
    function (t, n, e) {
      var r = e(71)();
      t.exports = r;
    },
    function (t, n, e) {
      var r = e(72),
        o = e(19),
        i = e(0),
        u = e(20),
        a = e(22),
        c = e(23),
        f = Object.prototype.hasOwnProperty;
      t.exports = function (t, n) {
        var e = i(t),
          s = !e && o(t),
          l = !e && !s && u(t),
          h = !e && !s && !l && c(t),
          p = e || s || l || h,
          d = p ? r(t.length, String) : [],
          v = d.length;
        for (var y in t)
          (!n && !f.call(t, y)) ||
            (p &&
              ("length" == y ||
                (l && ("offset" == y || "parent" == y)) ||
                (h &&
                  ("buffer" == y || "byteLength" == y || "byteOffset" == y)) ||
                a(y, v))) ||
            d.push(y);
        return d;
      };
    },
    function (t, n, e) {
      (function (n) {
        var e = "object" == typeof n && n && n.Object === Object && n;
        t.exports = e;
      }).call(this, e(10));
    },
    function (t, n) {
      t.exports = function (t, n) {
        return function (e) {
          return t(n(e));
        };
      };
    },
    function (t, n) {
      t.exports = function (t, n) {
        for (var e = -1, r = null == t ? 0 : t.length, o = Array(r); ++e < r; )
          o[e] = n(t[e], e, t);
        return o;
      };
    },
    function (t, n) {
      var e = Function.prototype.toString;
      t.exports = function (t) {
        if (null != t) {
          try {
            return e.call(t);
          } catch (t) {}
          try {
            return t + "";
          } catch (t) {}
        }
        return "";
      };
    },
    function (t, n, e) {
      var r = e(113),
        o = e(4);
      t.exports = function t(n, e, i, u, a) {
        return (
          n === e ||
          (null == n || null == e || (!o(n) && !o(e))
            ? n != n && e != e
            : r(n, e, i, u, t, a))
        );
      };
    },
    function (t, n, e) {
      var r = e(114),
        o = e(117),
        i = e(118);
      t.exports = function (t, n, e, u, a, c) {
        var f = 1 & e,
          s = t.length,
          l = n.length;
        if (s != l && !(f && l > s)) return !1;
        var h = c.get(t),
          p = c.get(n);
        if (h && p) return h == n && p == t;
        var d = -1,
          v = !0,
          y = 2 & e ? new r() : void 0;
        for (c.set(t, n), c.set(n, t); ++d < s; ) {
          var w = t[d],
            g = n[d];
          if (u) var m = f ? u(g, w, d, n, t, c) : u(w, g, d, t, n, c);
          if (void 0 !== m) {
            if (m) continue;
            v = !1;
            break;
          }
          if (y) {
            if (
              !o(n, function (t, n) {
                if (!i(y, n) && (w === t || a(w, t, e, u, c))) return y.push(n);
              })
            ) {
              v = !1;
              break;
            }
          } else if (w !== g && !a(w, g, e, u, c)) {
            v = !1;
            break;
          }
        }
        return c.delete(t), c.delete(n), v;
      };
    },
    function (t, n, e) {
      var r = e(1).Uint8Array;
      t.exports = r;
    },
    function (t, n, e) {
      var r = e(2);
      t.exports = function (t) {
        return t == t && !r(t);
      };
    },
    function (t, n) {
      t.exports = function (t, n) {
        return function (e) {
          return null != e && e[t] === n && (void 0 !== n || t in Object(e));
        };
      };
    },
    function (t, n, e) {
      var r = e(47),
        o = e(17);
      t.exports = function (t, n) {
        for (var e = 0, i = (n = r(n, t)).length; null != t && e < i; )
          t = t[o(n[e++])];
        return e && e == i ? t : void 0;
      };
    },
    function (t, n, e) {
      var r = e(0),
        o = e(30),
        i = e(137),
        u = e(48);
      t.exports = function (t, n) {
        return r(t) ? t : o(t, n) ? [t] : i(u(t));
      };
    },
    function (t, n, e) {
      var r = e(49);
      t.exports = function (t) {
        return null == t ? "" : r(t);
      };
    },
    function (t, n, e) {
      var r = e(11),
        o = e(39),
        i = e(0),
        u = e(31),
        a = r ? r.prototype : void 0,
        c = a ? a.toString : void 0;
      t.exports = function t(n) {
        if ("string" == typeof n) return n;
        if (i(n)) return o(n, t) + "";
        if (u(n)) return c ? c.call(n) : "";
        var e = n + "";
        return "0" == e && 1 / n == -1 / 0 ? "-0" : e;
      };
    },
    function (t, n, e) {
      var r = e(152),
        o = e(153),
        i = e(154);
      t.exports = function (t, n, e) {
        return n == n ? i(t, n, e) : r(t, o, e);
      };
    },
    function (t, n) {},
    function (t, n) {},
    function (t, n) {},
    function (t, n) {},
    function (t, n) {},
    function (t, n, e) {
      var r = e(32),
        o = e(9);
      t.exports = function (t, n, e) {
        ((void 0 !== e && !o(t[n], e)) || (void 0 === e && !(n in t))) &&
          r(t, n, e);
      };
    },
    function (t, n, e) {
      var r = e(5),
        o = (function () {
          try {
            var t = r(Object, "defineProperty");
            return t({}, "", {}), t;
          } catch (t) {}
        })();
      t.exports = o;
    },
    function (t, n, e) {
      var r = e(38)(Object.getPrototypeOf, Object);
      t.exports = r;
    },
    function (t, n) {
      t.exports = function (t, n) {
        if (
          ("constructor" !== n || "function" != typeof t[n]) &&
          "__proto__" != n
        )
          return t[n];
      };
    },
    function (t, n, e) {
      var r = e(36),
        o = e(178),
        i = e(8);
      t.exports = function (t) {
        return i(t) ? r(t, !0) : o(t);
      };
    },
    function (t, n) {},
    function (t, n, e) {
      var r = e(69),
        o = e(34),
        i = e(83),
        u = e(0);
      t.exports = function (t, n) {
        return (u(t) ? r : o)(t, i(n));
      };
    },
    function (t, n, e) {
      var r = e(39),
        o = e(84),
        i = e(146),
        u = e(0);
      t.exports = function (t, n) {
        return (u(t) ? r : i)(t, o(n, 3));
      };
    },
    function (t, n, e) {
      var r = e(49),
        o = e(147),
        i = e(149),
        u = e(151),
        a = e(155),
        c = e(156),
        f = e(48);
      t.exports = function (t, n, e) {
        if ((t = f(t)) && (e || void 0 === n)) return o(t);
        if (!t || !(n = r(n))) return t;
        var s = c(t),
          l = c(n),
          h = a(s, l),
          p = u(s, l) + 1;
        return i(s, h, p).join("");
      };
    },
    function (t, n) {
      var e = [
          "input",
          "select",
          "textarea",
          "a[href]",
          "button",
          "[tabindex]",
          "audio[controls]",
          "video[controls]",
          '[contenteditable]:not([contenteditable="false"])',
        ],
        r = e.join(","),
        o =
          "undefined" == typeof Element
            ? function () {}
            : Element.prototype.matches ||
              Element.prototype.msMatchesSelector ||
              Element.prototype.webkitMatchesSelector;
      function i(t, n) {
        n = n || {};
        var e,
          i,
          a,
          c = [],
          l = [],
          h = t.querySelectorAll(r);
        for (
          n.includeContainer &&
            o.call(t, r) &&
            (h = Array.prototype.slice.apply(h)).unshift(t),
            e = 0;
          e < h.length;
          e++
        )
          u((i = h[e])) &&
            (0 === (a = f(i))
              ? c.push(i)
              : l.push({ documentOrder: e, tabIndex: a, node: i }));
        return l
          .sort(s)
          .map(function (t) {
            return t.node;
          })
          .concat(c);
      }
      function u(t) {
        return !(
          !a(t) ||
          (function (t) {
            return (
              (function (t) {
                return l(t) && "radio" === t.type;
              })(t) &&
              !(function (t) {
                if (!t.name) return !0;
                var n = (function (t) {
                  for (var n = 0; n < t.length; n++)
                    if (t[n].checked) return t[n];
                })(
                  t.ownerDocument.querySelectorAll(
                    'input[type="radio"][name="' + t.name + '"]'
                  )
                );
                return !n || n === t;
              })(t)
            );
          })(t) ||
          f(t) < 0
        );
      }
      function a(t) {
        return !(
          t.disabled ||
          (function (t) {
            return l(t) && "hidden" === t.type;
          })(t) ||
          (function (t) {
            return (
              null === t.offsetParent ||
              "hidden" === getComputedStyle(t).visibility
            );
          })(t)
        );
      }
      (i.isTabbable = function (t) {
        if (!t) throw new Error("No node provided");
        return !1 !== o.call(t, r) && u(t);
      }),
        (i.isFocusable = function (t) {
          if (!t) throw new Error("No node provided");
          return !1 !== o.call(t, c) && a(t);
        });
      var c = e.concat("iframe").join(",");
      function f(t) {
        var n = parseInt(t.getAttribute("tabindex"), 10);
        return isNaN(n)
          ? (function (t) {
              return "true" === t.contentEditable;
            })(t)
            ? 0
            : t.tabIndex
          : n;
      }
      function s(t, n) {
        return t.tabIndex === n.tabIndex
          ? t.documentOrder - n.documentOrder
          : t.tabIndex - n.tabIndex;
      }
      function l(t) {
        return "INPUT" === t.tagName;
      }
      t.exports = i;
    },
    function (t, n, e) {
      var r = e(165),
        o = e(180)(function (t, n, e) {
          r(t, n, e);
        });
      t.exports = o;
    },
    function (t, n, e) {
      "use strict";
      t.exports = e(68).polyfill();
    },
    function (t, n, e) {
      (function (n, e) {
        var r;
        (r = function () {
          "use strict";
          function t(t) {
            return "function" == typeof t;
          }
          var r = Array.isArray
              ? Array.isArray
              : function (t) {
                  return "[object Array]" === Object.prototype.toString.call(t);
                },
            o = 0,
            i = void 0,
            u = void 0,
            a = function (t, n) {
              (d[o] = t), (d[o + 1] = n), 2 === (o += 2) && (u ? u(v) : b());
            },
            c = "undefined" != typeof window ? window : void 0,
            f = c || {},
            s = f.MutationObserver || f.WebKitMutationObserver,
            l =
              "undefined" == typeof self &&
              void 0 !== n &&
              "[object process]" === {}.toString.call(n),
            h =
              "undefined" != typeof Uint8ClampedArray &&
              "undefined" != typeof importScripts &&
              "undefined" != typeof MessageChannel;
          function p() {
            var t = setTimeout;
            return function () {
              return t(v, 1);
            };
          }
          var d = new Array(1e3);
          function v() {
            for (var t = 0; t < o; t += 2)
              (0, d[t])(d[t + 1]), (d[t] = void 0), (d[t + 1] = void 0);
            o = 0;
          }
          var y,
            w,
            g,
            m,
            b = void 0;
          function _(t, n) {
            var e = this,
              r = new this.constructor(E);
            void 0 === r[j] && D(r);
            var o = e._state;
            if (o) {
              var i = arguments[o - 1];
              a(function () {
                return W(o, r, i, e._result);
              });
            } else T(e, r, t, n);
            return r;
          }
          function x(t) {
            if (t && "object" == typeof t && t.constructor === this) return t;
            var n = new this(E);
            return P(n, t), n;
          }
          l
            ? (b = function () {
                return n.nextTick(v);
              })
            : s
            ? ((w = 0),
              (g = new s(v)),
              (m = document.createTextNode("")),
              g.observe(m, { characterData: !0 }),
              (b = function () {
                m.data = w = ++w % 2;
              }))
            : h
            ? (((y = new MessageChannel()).port1.onmessage = v),
              (b = function () {
                return y.port2.postMessage(0);
              }))
            : (b =
                void 0 === c
                  ? (function () {
                      try {
                        var t = Function("return this")().require("vertx");
                        return void 0 !== (i = t.runOnLoop || t.runOnContext)
                          ? function () {
                              i(v);
                            }
                          : p();
                      } catch (t) {
                        return p();
                      }
                    })()
                  : p());
          var j = Math.random().toString(36).substring(2);
          function E() {}
          function O(n, e, r) {
            e.constructor === n.constructor &&
            r === _ &&
            e.constructor.resolve === x
              ? (function (t, n) {
                  1 === n._state
                    ? S(t, n._result)
                    : 2 === n._state
                    ? k(t, n._result)
                    : T(
                        n,
                        void 0,
                        function (n) {
                          return P(t, n);
                        },
                        function (n) {
                          return k(t, n);
                        }
                      );
                })(n, e)
              : void 0 === r
              ? S(n, e)
              : t(r)
              ? (function (t, n, e) {
                  a(function (t) {
                    var r = !1,
                      o = (function (t, n, e, r) {
                        try {
                          t.call(n, e, r);
                        } catch (t) {
                          return t;
                        }
                      })(
                        e,
                        n,
                        function (e) {
                          r || ((r = !0), n !== e ? P(t, e) : S(t, e));
                        },
                        function (n) {
                          r || ((r = !0), k(t, n));
                        },
                        t._label
                      );
                    !r && o && ((r = !0), k(t, o));
                  }, t);
                })(n, e, r)
              : S(n, e);
          }
          function P(t, n) {
            if (t === n)
              k(t, new TypeError("You cannot resolve a promise with itself"));
            else if (
              ((o = typeof (r = n)),
              null === r || ("object" !== o && "function" !== o))
            )
              S(t, n);
            else {
              var e = void 0;
              try {
                e = n.then;
              } catch (n) {
                return void k(t, n);
              }
              O(t, n, e);
            }
            var r, o;
          }
          function A(t) {
            t._onerror && t._onerror(t._result), R(t);
          }
          function S(t, n) {
            void 0 === t._state &&
              ((t._result = n),
              (t._state = 1),
              0 !== t._subscribers.length && a(R, t));
          }
          function k(t, n) {
            void 0 === t._state && ((t._state = 2), (t._result = n), a(A, t));
          }
          function T(t, n, e, r) {
            var o = t._subscribers,
              i = o.length;
            (t._onerror = null),
              (o[i] = n),
              (o[i + 1] = e),
              (o[i + 2] = r),
              0 === i && t._state && a(R, t);
          }
          function R(t) {
            var n = t._subscribers,
              e = t._state;
            if (0 !== n.length) {
              for (
                var r = void 0, o = void 0, i = t._result, u = 0;
                u < n.length;
                u += 3
              )
                (r = n[u]), (o = n[u + e]), r ? W(e, r, o, i) : o(i);
              t._subscribers.length = 0;
            }
          }
          function W(n, e, r, o) {
            var i = t(r),
              u = void 0,
              a = void 0,
              c = !0;
            if (i) {
              try {
                u = r(o);
              } catch (t) {
                (c = !1), (a = t);
              }
              if (e === u)
                return void k(
                  e,
                  new TypeError(
                    "A promises callback cannot return that same promise."
                  )
                );
            } else u = o;
            void 0 !== e._state ||
              (i && c
                ? P(e, u)
                : !1 === c
                ? k(e, a)
                : 1 === n
                ? S(e, u)
                : 2 === n && k(e, u));
          }
          var I = 0;
          function D(t) {
            (t[j] = I++),
              (t._state = void 0),
              (t._result = void 0),
              (t._subscribers = []);
          }
          var C = (function () {
              function t(t, n) {
                (this._instanceConstructor = t),
                  (this.promise = new t(E)),
                  this.promise[j] || D(this.promise),
                  r(n)
                    ? ((this.length = n.length),
                      (this._remaining = n.length),
                      (this._result = new Array(this.length)),
                      0 === this.length
                        ? S(this.promise, this._result)
                        : ((this.length = this.length || 0),
                          this._enumerate(n),
                          0 === this._remaining &&
                            S(this.promise, this._result)))
                    : k(
                        this.promise,
                        new Error("Array Methods must be provided an Array")
                      );
              }
              return (
                (t.prototype._enumerate = function (t) {
                  for (var n = 0; void 0 === this._state && n < t.length; n++)
                    this._eachEntry(t[n], n);
                }),
                (t.prototype._eachEntry = function (t, n) {
                  var e = this._instanceConstructor,
                    r = e.resolve;
                  if (r === x) {
                    var o = void 0,
                      i = void 0,
                      u = !1;
                    try {
                      o = t.then;
                    } catch (t) {
                      (u = !0), (i = t);
                    }
                    if (o === _ && void 0 !== t._state)
                      this._settledAt(t._state, n, t._result);
                    else if ("function" != typeof o)
                      this._remaining--, (this._result[n] = t);
                    else if (e === M) {
                      var a = new e(E);
                      u ? k(a, i) : O(a, t, o), this._willSettleAt(a, n);
                    } else
                      this._willSettleAt(
                        new e(function (n) {
                          return n(t);
                        }),
                        n
                      );
                  } else this._willSettleAt(r(t), n);
                }),
                (t.prototype._settledAt = function (t, n, e) {
                  var r = this.promise;
                  void 0 === r._state &&
                    (this._remaining--,
                    2 === t ? k(r, e) : (this._result[n] = e)),
                    0 === this._remaining && S(r, this._result);
                }),
                (t.prototype._willSettleAt = function (t, n) {
                  var e = this;
                  T(
                    t,
                    void 0,
                    function (t) {
                      return e._settledAt(1, n, t);
                    },
                    function (t) {
                      return e._settledAt(2, n, t);
                    }
                  );
                }),
                t
              );
            })(),
            M = (function () {
              function n(t) {
                (this[j] = I++),
                  (this._result = this._state = void 0),
                  (this._subscribers = []),
                  E !== t &&
                    ("function" != typeof t &&
                      (function () {
                        throw new TypeError(
                          "You must pass a resolver function as the first argument to the promise constructor"
                        );
                      })(),
                    this instanceof n
                      ? (function (t, n) {
                          try {
                            n(
                              function (n) {
                                P(t, n);
                              },
                              function (n) {
                                k(t, n);
                              }
                            );
                          } catch (n) {
                            k(t, n);
                          }
                        })(this, t)
                      : (function () {
                          throw new TypeError(
                            "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                          );
                        })());
              }
              return (
                (n.prototype.catch = function (t) {
                  return this.then(null, t);
                }),
                (n.prototype.finally = function (n) {
                  var e = this.constructor;
                  return t(n)
                    ? this.then(
                        function (t) {
                          return e.resolve(n()).then(function () {
                            return t;
                          });
                        },
                        function (t) {
                          return e.resolve(n()).then(function () {
                            throw t;
                          });
                        }
                      )
                    : this.then(n, n);
                }),
                n
              );
            })();
          return (
            (M.prototype.then = _),
            (M.all = function (t) {
              return new C(this, t).promise;
            }),
            (M.race = function (t) {
              var n = this;
              return r(t)
                ? new n(function (e, r) {
                    for (var o = t.length, i = 0; i < o; i++)
                      n.resolve(t[i]).then(e, r);
                  })
                : new n(function (t, n) {
                    return n(new TypeError("You must pass an array to race."));
                  });
            }),
            (M.resolve = x),
            (M.reject = function (t) {
              var n = new this(E);
              return k(n, t), n;
            }),
            (M._setScheduler = function (t) {
              u = t;
            }),
            (M._setAsap = function (t) {
              a = t;
            }),
            (M._asap = a),
            (M.polyfill = function () {
              var t = void 0;
              if (void 0 !== e) t = e;
              else if ("undefined" != typeof self) t = self;
              else
                try {
                  t = Function("return this")();
                } catch (t) {
                  throw new Error(
                    "polyfill failed because global object is unavailable in this environment"
                  );
                }
              var n = t.Promise;
              if (n) {
                var r = null;
                try {
                  r = Object.prototype.toString.call(n.resolve());
                } catch (t) {}
                if ("[object Promise]" === r && !n.cast) return;
              }
              t.Promise = M;
            }),
            (M.Promise = M),
            M
          );
        }),
          (t.exports = r());
      }).call(this, e(33), e(10));
    },
    function (t, n) {
      t.exports = function (t, n) {
        for (
          var e = -1, r = null == t ? 0 : t.length;
          ++e < r && !1 !== n(t[e], e, t);

        );
        return t;
      };
    },
    function (t, n, e) {
      var r = e(35),
        o = e(18);
      t.exports = function (t, n) {
        return t && r(t, n, o);
      };
    },
    function (t, n) {
      t.exports = function (t) {
        return function (n, e, r) {
          for (var o = -1, i = Object(n), u = r(n), a = u.length; a--; ) {
            var c = u[t ? a : ++o];
            if (!1 === e(i[c], c, i)) break;
          }
          return n;
        };
      };
    },
    function (t, n) {
      t.exports = function (t, n) {
        for (var e = -1, r = Array(t); ++e < t; ) r[e] = n(e);
        return r;
      };
    },
    function (t, n, e) {
      var r = e(7),
        o = e(4);
      t.exports = function (t) {
        return o(t) && "[object Arguments]" == r(t);
      };
    },
    function (t, n, e) {
      var r = e(11),
        o = Object.prototype,
        i = o.hasOwnProperty,
        u = o.toString,
        a = r ? r.toStringTag : void 0;
      t.exports = function (t) {
        var n = i.call(t, a),
          e = t[a];
        try {
          t[a] = void 0;
          var r = !0;
        } catch (t) {}
        var o = u.call(t);
        return r && (n ? (t[a] = e) : delete t[a]), o;
      };
    },
    function (t, n) {
      var e = Object.prototype.toString;
      t.exports = function (t) {
        return e.call(t);
      };
    },
    function (t, n) {
      t.exports = function () {
        return !1;
      };
    },
    function (t, n, e) {
      var r = e(7),
        o = e(24),
        i = e(4),
        u = {};
      (u["[object Float32Array]"] =
        u["[object Float64Array]"] =
        u["[object Int8Array]"] =
        u["[object Int16Array]"] =
        u["[object Int32Array]"] =
        u["[object Uint8Array]"] =
        u["[object Uint8ClampedArray]"] =
        u["[object Uint16Array]"] =
        u["[object Uint32Array]"] =
          !0),
        (u["[object Arguments]"] =
          u["[object Array]"] =
          u["[object ArrayBuffer]"] =
          u["[object Boolean]"] =
          u["[object DataView]"] =
          u["[object Date]"] =
          u["[object Error]"] =
          u["[object Function]"] =
          u["[object Map]"] =
          u["[object Number]"] =
          u["[object Object]"] =
          u["[object RegExp]"] =
          u["[object Set]"] =
          u["[object String]"] =
          u["[object WeakMap]"] =
            !1),
        (t.exports = function (t) {
          return i(t) && o(t.length) && !!u[r(t)];
        });
    },
    function (t, n) {
      t.exports = function (t) {
        return function (n) {
          return t(n);
        };
      };
    },
    function (t, n, e) {
      (function (t) {
        var r = e(37),
          o = n && !n.nodeType && n,
          i = o && "object" == typeof t && t && !t.nodeType && t,
          u = i && i.exports === o && r.process,
          a = (function () {
            try {
              var t = i && i.require && i.require("util").types;
              return t || (u && u.binding && u.binding("util"));
            } catch (t) {}
          })();
        t.exports = a;
      }).call(this, e(21)(t));
    },
    function (t, n, e) {
      var r = e(25),
        o = e(81),
        i = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        if (!r(t)) return o(t);
        var n = [];
        for (var e in Object(t))
          i.call(t, e) && "constructor" != e && n.push(e);
        return n;
      };
    },
    function (t, n, e) {
      var r = e(38)(Object.keys, Object);
      t.exports = r;
    },
    function (t, n, e) {
      var r = e(8);
      t.exports = function (t, n) {
        return function (e, o) {
          if (null == e) return e;
          if (!r(e)) return t(e, o);
          for (
            var i = e.length, u = n ? i : -1, a = Object(e);
            (n ? u-- : ++u < i) && !1 !== o(a[u], u, a);

          );
          return e;
        };
      };
    },
    function (t, n, e) {
      var r = e(12);
      t.exports = function (t) {
        return "function" == typeof t ? t : r;
      };
    },
    function (t, n, e) {
      var r = e(85),
        o = e(135),
        i = e(12),
        u = e(0),
        a = e(143);
      t.exports = function (t) {
        return "function" == typeof t
          ? t
          : null == t
          ? i
          : "object" == typeof t
          ? u(t)
            ? o(t[0], t[1])
            : r(t)
          : a(t);
      };
    },
    function (t, n, e) {
      var r = e(86),
        o = e(134),
        i = e(45);
      t.exports = function (t) {
        var n = o(t);
        return 1 == n.length && n[0][2]
          ? i(n[0][0], n[0][1])
          : function (e) {
              return e === t || r(e, t, n);
            };
      };
    },
    function (t, n, e) {
      var r = e(27),
        o = e(41);
      t.exports = function (t, n, e, i) {
        var u = e.length,
          a = u,
          c = !i;
        if (null == t) return !a;
        for (t = Object(t); u--; ) {
          var f = e[u];
          if (c && f[2] ? f[1] !== t[f[0]] : !(f[0] in t)) return !1;
        }
        for (; ++u < a; ) {
          var s = (f = e[u])[0],
            l = t[s],
            h = f[1];
          if (c && f[2]) {
            if (void 0 === l && !(s in t)) return !1;
          } else {
            var p = new r();
            if (i) var d = i(l, h, s, t, n, p);
            if (!(void 0 === d ? o(h, l, 3, i, p) : d)) return !1;
          }
        }
        return !0;
      };
    },
    function (t, n) {
      t.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    function (t, n, e) {
      var r = e(14),
        o = Array.prototype.splice;
      t.exports = function (t) {
        var n = this.__data__,
          e = r(n, t);
        return (
          !(e < 0) &&
          (e == n.length - 1 ? n.pop() : o.call(n, e, 1), --this.size, !0)
        );
      };
    },
    function (t, n, e) {
      var r = e(14);
      t.exports = function (t) {
        var n = this.__data__,
          e = r(n, t);
        return e < 0 ? void 0 : n[e][1];
      };
    },
    function (t, n, e) {
      var r = e(14);
      t.exports = function (t) {
        return r(this.__data__, t) > -1;
      };
    },
    function (t, n, e) {
      var r = e(14);
      t.exports = function (t, n) {
        var e = this.__data__,
          o = r(e, t);
        return o < 0 ? (++this.size, e.push([t, n])) : (e[o][1] = n), this;
      };
    },
    function (t, n, e) {
      var r = e(13);
      t.exports = function () {
        (this.__data__ = new r()), (this.size = 0);
      };
    },
    function (t, n) {
      t.exports = function (t) {
        var n = this.__data__,
          e = n.delete(t);
        return (this.size = n.size), e;
      };
    },
    function (t, n) {
      t.exports = function (t) {
        return this.__data__.get(t);
      };
    },
    function (t, n) {
      t.exports = function (t) {
        return this.__data__.has(t);
      };
    },
    function (t, n, e) {
      var r = e(13),
        o = e(28),
        i = e(29);
      t.exports = function (t, n) {
        var e = this.__data__;
        if (e instanceof r) {
          var u = e.__data__;
          if (!o || u.length < 199)
            return u.push([t, n]), (this.size = ++e.size), this;
          e = this.__data__ = new i(u);
        }
        return e.set(t, n), (this.size = e.size), this;
      };
    },
    function (t, n, e) {
      var r = e(26),
        o = e(98),
        i = e(2),
        u = e(40),
        a = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        f = Object.prototype,
        s = c.toString,
        l = f.hasOwnProperty,
        h = RegExp(
          "^" +
            s
              .call(l)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      t.exports = function (t) {
        return !(!i(t) || o(t)) && (r(t) ? h : a).test(u(t));
      };
    },
    function (t, n, e) {
      var r,
        o = e(99),
        i = (r = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + r
          : "";
      t.exports = function (t) {
        return !!i && i in t;
      };
    },
    function (t, n, e) {
      var r = e(1)["__core-js_shared__"];
      t.exports = r;
    },
    function (t, n) {
      t.exports = function (t, n) {
        return null == t ? void 0 : t[n];
      };
    },
    function (t, n, e) {
      var r = e(102),
        o = e(13),
        i = e(28);
      t.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new r(),
            map: new (i || o)(),
            string: new r(),
          });
      };
    },
    function (t, n, e) {
      var r = e(103),
        o = e(104),
        i = e(105),
        u = e(106),
        a = e(107);
      function c(t) {
        var n = -1,
          e = null == t ? 0 : t.length;
        for (this.clear(); ++n < e; ) {
          var r = t[n];
          this.set(r[0], r[1]);
        }
      }
      (c.prototype.clear = r),
        (c.prototype.delete = o),
        (c.prototype.get = i),
        (c.prototype.has = u),
        (c.prototype.set = a),
        (t.exports = c);
    },
    function (t, n, e) {
      var r = e(15);
      t.exports = function () {
        (this.__data__ = r ? r(null) : {}), (this.size = 0);
      };
    },
    function (t, n) {
      t.exports = function (t) {
        var n = this.has(t) && delete this.__data__[t];
        return (this.size -= n ? 1 : 0), n;
      };
    },
    function (t, n, e) {
      var r = e(15),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var n = this.__data__;
        if (r) {
          var e = n[t];
          return "__lodash_hash_undefined__" === e ? void 0 : e;
        }
        return o.call(n, t) ? n[t] : void 0;
      };
    },
    function (t, n, e) {
      var r = e(15),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var n = this.__data__;
        return r ? void 0 !== n[t] : o.call(n, t);
      };
    },
    function (t, n, e) {
      var r = e(15);
      t.exports = function (t, n) {
        var e = this.__data__;
        return (
          (this.size += this.has(t) ? 0 : 1),
          (e[t] = r && void 0 === n ? "__lodash_hash_undefined__" : n),
          this
        );
      };
    },
    function (t, n, e) {
      var r = e(16);
      t.exports = function (t) {
        var n = r(this, t).delete(t);
        return (this.size -= n ? 1 : 0), n;
      };
    },
    function (t, n) {
      t.exports = function (t) {
        var n = typeof t;
        return "string" == n || "number" == n || "symbol" == n || "boolean" == n
          ? "__proto__" !== t
          : null === t;
      };
    },
    function (t, n, e) {
      var r = e(16);
      t.exports = function (t) {
        return r(this, t).get(t);
      };
    },
    function (t, n, e) {
      var r = e(16);
      t.exports = function (t) {
        return r(this, t).has(t);
      };
    },
    function (t, n, e) {
      var r = e(16);
      t.exports = function (t, n) {
        var e = r(this, t),
          o = e.size;
        return e.set(t, n), (this.size += e.size == o ? 0 : 1), this;
      };
    },
    function (t, n, e) {
      var r = e(27),
        o = e(42),
        i = e(119),
        u = e(122),
        a = e(129),
        c = e(0),
        f = e(20),
        s = e(23),
        l = "[object Object]",
        h = Object.prototype.hasOwnProperty;
      t.exports = function (t, n, e, p, d, v) {
        var y = c(t),
          w = c(n),
          g = y ? "[object Array]" : a(t),
          m = w ? "[object Array]" : a(n),
          b = (g = "[object Arguments]" == g ? l : g) == l,
          _ = (m = "[object Arguments]" == m ? l : m) == l,
          x = g == m;
        if (x && f(t)) {
          if (!f(n)) return !1;
          (y = !0), (b = !1);
        }
        if (x && !b)
          return (
            v || (v = new r()),
            y || s(t) ? o(t, n, e, p, d, v) : i(t, n, g, e, p, d, v)
          );
        if (!(1 & e)) {
          var j = b && h.call(t, "__wrapped__"),
            E = _ && h.call(n, "__wrapped__");
          if (j || E) {
            var O = j ? t.value() : t,
              P = E ? n.value() : n;
            return v || (v = new r()), d(O, P, e, p, v);
          }
        }
        return !!x && (v || (v = new r()), u(t, n, e, p, d, v));
      };
    },
    function (t, n, e) {
      var r = e(29),
        o = e(115),
        i = e(116);
      function u(t) {
        var n = -1,
          e = null == t ? 0 : t.length;
        for (this.__data__ = new r(); ++n < e; ) this.add(t[n]);
      }
      (u.prototype.add = u.prototype.push = o),
        (u.prototype.has = i),
        (t.exports = u);
    },
    function (t, n) {
      t.exports = function (t) {
        return this.__data__.set(t, "__lodash_hash_undefined__"), this;
      };
    },
    function (t, n) {
      t.exports = function (t) {
        return this.__data__.has(t);
      };
    },
    function (t, n) {
      t.exports = function (t, n) {
        for (var e = -1, r = null == t ? 0 : t.length; ++e < r; )
          if (n(t[e], e, t)) return !0;
        return !1;
      };
    },
    function (t, n) {
      t.exports = function (t, n) {
        return t.has(n);
      };
    },
    function (t, n, e) {
      var r = e(11),
        o = e(43),
        i = e(9),
        u = e(42),
        a = e(120),
        c = e(121),
        f = r ? r.prototype : void 0,
        s = f ? f.valueOf : void 0;
      t.exports = function (t, n, e, r, f, l, h) {
        switch (e) {
          case "[object DataView]":
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            (t = t.buffer), (n = n.buffer);
          case "[object ArrayBuffer]":
            return !(t.byteLength != n.byteLength || !l(new o(t), new o(n)));
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return i(+t, +n);
          case "[object Error]":
            return t.name == n.name && t.message == n.message;
          case "[object RegExp]":
          case "[object String]":
            return t == n + "";
          case "[object Map]":
            var p = a;
          case "[object Set]":
            var d = 1 & r;
            if ((p || (p = c), t.size != n.size && !d)) return !1;
            var v = h.get(t);
            if (v) return v == n;
            (r |= 2), h.set(t, n);
            var y = u(p(t), p(n), r, f, l, h);
            return h.delete(t), y;
          case "[object Symbol]":
            if (s) return s.call(t) == s.call(n);
        }
        return !1;
      };
    },
    function (t, n) {
      t.exports = function (t) {
        var n = -1,
          e = Array(t.size);
        return (
          t.forEach(function (t, r) {
            e[++n] = [r, t];
          }),
          e
        );
      };
    },
    function (t, n) {
      t.exports = function (t) {
        var n = -1,
          e = Array(t.size);
        return (
          t.forEach(function (t) {
            e[++n] = t;
          }),
          e
        );
      };
    },
    function (t, n, e) {
      var r = e(123),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t, n, e, i, u, a) {
        var c = 1 & e,
          f = r(t),
          s = f.length;
        if (s != r(n).length && !c) return !1;
        for (var l = s; l--; ) {
          var h = f[l];
          if (!(c ? h in n : o.call(n, h))) return !1;
        }
        var p = a.get(t),
          d = a.get(n);
        if (p && d) return p == n && d == t;
        var v = !0;
        a.set(t, n), a.set(n, t);
        for (var y = c; ++l < s; ) {
          var w = t[(h = f[l])],
            g = n[h];
          if (i) var m = c ? i(g, w, h, n, t, a) : i(w, g, h, t, n, a);
          if (!(void 0 === m ? w === g || u(w, g, e, i, a) : m)) {
            v = !1;
            break;
          }
          y || (y = "constructor" == h);
        }
        if (v && !y) {
          var b = t.constructor,
            _ = n.constructor;
          b == _ ||
            !("constructor" in t) ||
            !("constructor" in n) ||
            ("function" == typeof b &&
              b instanceof b &&
              "function" == typeof _ &&
              _ instanceof _) ||
            (v = !1);
        }
        return a.delete(t), a.delete(n), v;
      };
    },
    function (t, n, e) {
      var r = e(124),
        o = e(126),
        i = e(18);
      t.exports = function (t) {
        return r(t, i, o);
      };
    },
    function (t, n, e) {
      var r = e(125),
        o = e(0);
      t.exports = function (t, n, e) {
        var i = n(t);
        return o(t) ? i : r(i, e(t));
      };
    },
    function (t, n) {
      t.exports = function (t, n) {
        for (var e = -1, r = n.length, o = t.length; ++e < r; ) t[o + e] = n[e];
        return t;
      };
    },
    function (t, n, e) {
      var r = e(127),
        o = e(128),
        i = Object.prototype.propertyIsEnumerable,
        u = Object.getOwnPropertySymbols,
        a = u
          ? function (t) {
              return null == t
                ? []
                : ((t = Object(t)),
                  r(u(t), function (n) {
                    return i.call(t, n);
                  }));
            }
          : o;
      t.exports = a;
    },
    function (t, n) {
      t.exports = function (t, n) {
        for (
          var e = -1, r = null == t ? 0 : t.length, o = 0, i = [];
          ++e < r;

        ) {
          var u = t[e];
          n(u, e, t) && (i[o++] = u);
        }
        return i;
      };
    },
    function (t, n) {
      t.exports = function () {
        return [];
      };
    },
    function (t, n, e) {
      var r = e(130),
        o = e(28),
        i = e(131),
        u = e(132),
        a = e(133),
        c = e(7),
        f = e(40),
        s = f(r),
        l = f(o),
        h = f(i),
        p = f(u),
        d = f(a),
        v = c;
      ((r && "[object DataView]" != v(new r(new ArrayBuffer(1)))) ||
        (o && "[object Map]" != v(new o())) ||
        (i && "[object Promise]" != v(i.resolve())) ||
        (u && "[object Set]" != v(new u())) ||
        (a && "[object WeakMap]" != v(new a()))) &&
        (v = function (t) {
          var n = c(t),
            e = "[object Object]" == n ? t.constructor : void 0,
            r = e ? f(e) : "";
          if (r)
            switch (r) {
              case s:
                return "[object DataView]";
              case l:
                return "[object Map]";
              case h:
                return "[object Promise]";
              case p:
                return "[object Set]";
              case d:
                return "[object WeakMap]";
            }
          return n;
        }),
        (t.exports = v);
    },
    function (t, n, e) {
      var r = e(5)(e(1), "DataView");
      t.exports = r;
    },
    function (t, n, e) {
      var r = e(5)(e(1), "Promise");
      t.exports = r;
    },
    function (t, n, e) {
      var r = e(5)(e(1), "Set");
      t.exports = r;
    },
    function (t, n, e) {
      var r = e(5)(e(1), "WeakMap");
      t.exports = r;
    },
    function (t, n, e) {
      var r = e(44),
        o = e(18);
      t.exports = function (t) {
        for (var n = o(t), e = n.length; e--; ) {
          var i = n[e],
            u = t[i];
          n[e] = [i, u, r(u)];
        }
        return n;
      };
    },
    function (t, n, e) {
      var r = e(41),
        o = e(136),
        i = e(140),
        u = e(30),
        a = e(44),
        c = e(45),
        f = e(17);
      t.exports = function (t, n) {
        return u(t) && a(n)
          ? c(f(t), n)
          : function (e) {
              var u = o(e, t);
              return void 0 === u && u === n ? i(e, t) : r(n, u, 3);
            };
      };
    },
    function (t, n, e) {
      var r = e(46);
      t.exports = function (t, n, e) {
        var o = null == t ? void 0 : r(t, n);
        return void 0 === o ? e : o;
      };
    },
    function (t, n, e) {
      var r = e(138),
        o =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g,
        u = r(function (t) {
          var n = [];
          return (
            46 === t.charCodeAt(0) && n.push(""),
            t.replace(o, function (t, e, r, o) {
              n.push(r ? o.replace(i, "$1") : e || t);
            }),
            n
          );
        });
      t.exports = u;
    },
    function (t, n, e) {
      var r = e(139);
      t.exports = function (t) {
        var n = r(t, function (t) {
            return 500 === e.size && e.clear(), t;
          }),
          e = n.cache;
        return n;
      };
    },
    function (t, n, e) {
      var r = e(29);
      function o(t, n) {
        if ("function" != typeof t || (null != n && "function" != typeof n))
          throw new TypeError("Expected a function");
        var e = function () {
          var r = arguments,
            o = n ? n.apply(this, r) : r[0],
            i = e.cache;
          if (i.has(o)) return i.get(o);
          var u = t.apply(this, r);
          return (e.cache = i.set(o, u) || i), u;
        };
        return (e.cache = new (o.Cache || r)()), e;
      }
      (o.Cache = r), (t.exports = o);
    },
    function (t, n, e) {
      var r = e(141),
        o = e(142);
      t.exports = function (t, n) {
        return null != t && o(t, n, r);
      };
    },
    function (t, n) {
      t.exports = function (t, n) {
        return null != t && n in Object(t);
      };
    },
    function (t, n, e) {
      var r = e(47),
        o = e(19),
        i = e(0),
        u = e(22),
        a = e(24),
        c = e(17);
      t.exports = function (t, n, e) {
        for (var f = -1, s = (n = r(n, t)).length, l = !1; ++f < s; ) {
          var h = c(n[f]);
          if (!(l = null != t && e(t, h))) break;
          t = t[h];
        }
        return l || ++f != s
          ? l
          : !!(s = null == t ? 0 : t.length) &&
              a(s) &&
              u(h, s) &&
              (i(t) || o(t));
      };
    },
    function (t, n, e) {
      var r = e(144),
        o = e(145),
        i = e(30),
        u = e(17);
      t.exports = function (t) {
        return i(t) ? r(u(t)) : o(t);
      };
    },
    function (t, n) {
      t.exports = function (t) {
        return function (n) {
          return null == n ? void 0 : n[t];
        };
      };
    },
    function (t, n, e) {
      var r = e(46);
      t.exports = function (t) {
        return function (n) {
          return r(n, t);
        };
      };
    },
    function (t, n, e) {
      var r = e(34),
        o = e(8);
      t.exports = function (t, n) {
        var e = -1,
          i = o(t) ? Array(t.length) : [];
        return (
          r(t, function (t, r, o) {
            i[++e] = n(t, r, o);
          }),
          i
        );
      };
    },
    function (t, n, e) {
      var r = e(148),
        o = /^\s+/;
      t.exports = function (t) {
        return t ? t.slice(0, r(t) + 1).replace(o, "") : t;
      };
    },
    function (t, n) {
      var e = /\s/;
      t.exports = function (t) {
        for (var n = t.length; n-- && e.test(t.charAt(n)); );
        return n;
      };
    },
    function (t, n, e) {
      var r = e(150);
      t.exports = function (t, n, e) {
        var o = t.length;
        return (e = void 0 === e ? o : e), !n && e >= o ? t : r(t, n, e);
      };
    },
    function (t, n) {
      t.exports = function (t, n, e) {
        var r = -1,
          o = t.length;
        n < 0 && (n = -n > o ? 0 : o + n),
          (e = e > o ? o : e) < 0 && (e += o),
          (o = n > e ? 0 : (e - n) >>> 0),
          (n >>>= 0);
        for (var i = Array(o); ++r < o; ) i[r] = t[r + n];
        return i;
      };
    },
    function (t, n, e) {
      var r = e(50);
      t.exports = function (t, n) {
        for (var e = t.length; e-- && r(n, t[e], 0) > -1; );
        return e;
      };
    },
    function (t, n) {
      t.exports = function (t, n, e, r) {
        for (var o = t.length, i = e + (r ? 1 : -1); r ? i-- : ++i < o; )
          if (n(t[i], i, t)) return i;
        return -1;
      };
    },
    function (t, n) {
      t.exports = function (t) {
        return t != t;
      };
    },
    function (t, n) {
      t.exports = function (t, n, e) {
        for (var r = e - 1, o = t.length; ++r < o; ) if (t[r] === n) return r;
        return -1;
      };
    },
    function (t, n, e) {
      var r = e(50);
      t.exports = function (t, n) {
        for (var e = -1, o = t.length; ++e < o && r(n, t[e], 0) > -1; );
        return e;
      };
    },
    function (t, n, e) {
      var r = e(157),
        o = e(158),
        i = e(159);
      t.exports = function (t) {
        return o(t) ? i(t) : r(t);
      };
    },
    function (t, n) {
      t.exports = function (t) {
        return t.split("");
      };
    },
    function (t, n) {
      var e = RegExp(
        "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"
      );
      t.exports = function (t) {
        return e.test(t);
      };
    },
    function (t, n) {
      var e = "[\\ud800-\\udfff]",
        r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        o = "\\ud83c[\\udffb-\\udfff]",
        i = "[^\\ud800-\\udfff]",
        u = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        a = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        c = "(?:" + r + "|" + o + ")" + "?",
        f =
          "[\\ufe0e\\ufe0f]?" +
          c +
          ("(?:\\u200d(?:" +
            [i, u, a].join("|") +
            ")[\\ufe0e\\ufe0f]?" +
            c +
            ")*"),
        s = "(?:" + [i + r + "?", r, u, a, e].join("|") + ")",
        l = RegExp(o + "(?=" + o + ")|" + s + f, "g");
      t.exports = function (t) {
        return t.match(l) || [];
      };
    },
    function (t, n, e) {
      (function (n, e, r) {
        var o;
        "undefined" != typeof self && self,
          (o = function () {
            return (function (t) {
              var n = {};
              function e(r) {
                if (n[r]) return n[r].exports;
                var o = (n[r] = { i: r, l: !1, exports: {} });
                return (
                  t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports
                );
              }
              return (
                (e.m = t),
                (e.c = n),
                (e.d = function (t, n, r) {
                  e.o(t, n) ||
                    Object.defineProperty(t, n, { enumerable: !0, get: r });
                }),
                (e.r = function (t) {
                  "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                      value: "Module",
                    }),
                    Object.defineProperty(t, "__esModule", { value: !0 });
                }),
                (e.t = function (t, n) {
                  if ((1 & n && (t = e(t)), 8 & n)) return t;
                  if (4 & n && "object" == typeof t && t && t.__esModule)
                    return t;
                  var r = Object.create(null);
                  if (
                    (e.r(r),
                    Object.defineProperty(r, "default", {
                      enumerable: !0,
                      value: t,
                    }),
                    2 & n && "string" != typeof t)
                  )
                    for (var o in t)
                      e.d(
                        r,
                        o,
                        function (n) {
                          return t[n];
                        }.bind(null, o)
                      );
                  return r;
                }),
                (e.n = function (t) {
                  var n =
                    t && t.__esModule
                      ? function () {
                          return t.default;
                        }
                      : function () {
                          return t;
                        };
                  return e.d(n, "a", n), n;
                }),
                (e.o = function (t, n) {
                  return Object.prototype.hasOwnProperty.call(t, n);
                }),
                (e.p = ""),
                e((e.s = 0))
              );
            })([
              function (t, n, r) {
                "use strict";
                function o(t) {
                  return (
                    "[object RegExp]" === Object.prototype.toString.call(t)
                  );
                }
                r.r(n);
                var i = "mock:",
                  u = "file:",
                  a = "about:",
                  c = "iframe",
                  f = "popup",
                  s = "Call was rejected by callee.\r\n";
                function l(t) {
                  return (
                    void 0 === t && (t = window), t.location.protocol === a
                  );
                }
                function h(t) {
                  if ((void 0 === t && (t = window), t))
                    try {
                      if (t.parent && t.parent !== t) return t.parent;
                    } catch (t) {}
                }
                function p(t) {
                  if ((void 0 === t && (t = window), t && !h(t)))
                    try {
                      return t.opener;
                    } catch (t) {}
                }
                function d(t) {
                  try {
                    return t && t.location && t.location.href, !0;
                  } catch (t) {}
                  return !1;
                }
                function v(t) {
                  void 0 === t && (t = window);
                  var n = t.location;
                  if (!n) throw new Error("Can not read window location");
                  var e = n.protocol;
                  if (!e) throw new Error("Can not read window protocol");
                  if (e === u) return u + "//";
                  if (e === a) {
                    var r = h(t);
                    return r && d(r) ? v(r) : a + "//";
                  }
                  var o = n.host;
                  if (!o) throw new Error("Can not read window host");
                  return e + "//" + o;
                }
                function y(t) {
                  void 0 === t && (t = window);
                  var n = v(t);
                  return n && t.mockDomain && 0 === t.mockDomain.indexOf(i)
                    ? t.mockDomain
                    : n;
                }
                function w(t) {
                  if (
                    !(function (t) {
                      try {
                        if (t === window) return !0;
                      } catch (t) {}
                      try {
                        var n = Object.getOwnPropertyDescriptor(t, "location");
                        if (n && !1 === n.enumerable) return !1;
                      } catch (t) {}
                      try {
                        if (l(t) && d(t)) return !0;
                      } catch (t) {}
                      try {
                        if (v(t) === v(window)) return !0;
                      } catch (t) {}
                      return !1;
                    })(t)
                  )
                    return !1;
                  try {
                    if (t === window) return !0;
                    if (l(t) && d(t)) return !0;
                    if (y(window) === y(t)) return !0;
                  } catch (t) {}
                  return !1;
                }
                function g(t) {
                  if (!w(t))
                    throw new Error("Expected window to be same domain");
                  return t;
                }
                function m(t, n) {
                  if (!t || !n) return !1;
                  var e = h(n);
                  return e
                    ? e === t
                    : -1 !==
                        (function (t) {
                          var n = [];
                          try {
                            for (; t.parent !== t; )
                              n.push(t.parent), (t = t.parent);
                          } catch (t) {}
                          return n;
                        })(n).indexOf(t);
                }
                function b(t) {
                  var n,
                    e,
                    r = [];
                  try {
                    n = t.frames;
                  } catch (e) {
                    n = t;
                  }
                  try {
                    e = n.length;
                  } catch (t) {}
                  if (0 === e) return r;
                  if (e) {
                    for (var o = 0; o < e; o++) {
                      var i = void 0;
                      try {
                        i = n[o];
                      } catch (t) {
                        continue;
                      }
                      r.push(i);
                    }
                    return r;
                  }
                  for (var u = 0; u < 100; u++) {
                    var a = void 0;
                    try {
                      a = n[u];
                    } catch (t) {
                      return r;
                    }
                    if (!a) return r;
                    r.push(a);
                  }
                  return r;
                }
                function _(t) {
                  for (var n = [], e = 0, r = b(t); e < r.length; e++) {
                    var o = r[e];
                    n.push(o);
                    for (var i = 0, u = _(o); i < u.length; i++) {
                      var a = u[i];
                      n.push(a);
                    }
                  }
                  return n;
                }
                function x(t) {
                  void 0 === t && (t = window);
                  try {
                    if (t.top) return t.top;
                  } catch (t) {}
                  if (h(t) === t) return t;
                  try {
                    if (m(window, t) && window.top) return window.top;
                  } catch (t) {}
                  try {
                    if (m(t, window) && window.top) return window.top;
                  } catch (t) {}
                  for (var n = 0, e = _(t); n < e.length; n++) {
                    var r = e[n];
                    try {
                      if (r.top) return r.top;
                    } catch (t) {}
                    if (h(r) === r) return r;
                  }
                }
                var j = [],
                  E = [];
                function O(t, n) {
                  void 0 === n && (n = !0);
                  try {
                    if (t === window) return !1;
                  } catch (t) {
                    return !0;
                  }
                  try {
                    if (!t) return !0;
                  } catch (t) {
                    return !0;
                  }
                  try {
                    if (t.closed) return !0;
                  } catch (t) {
                    return !t || t.message !== s;
                  }
                  if (n && w(t))
                    try {
                      if (t.mockclosed) return !0;
                    } catch (t) {}
                  try {
                    if (!t.parent || !t.top) return !0;
                  } catch (t) {}
                  var e = (function (t, n) {
                    for (var e = 0; e < t.length; e++)
                      try {
                        if (t[e] === n) return e;
                      } catch (t) {}
                    return -1;
                  })(j, t);
                  if (-1 !== e) {
                    var r = E[e];
                    if (
                      r &&
                      (function (t) {
                        if (!t.contentWindow) return !0;
                        if (!t.parentNode) return !0;
                        var n = t.ownerDocument;
                        return !(
                          !n ||
                          !n.documentElement ||
                          n.documentElement.contains(t)
                        );
                      })(r)
                    )
                      return !0;
                  }
                  return !1;
                }
                function P(t) {
                  void 0 === t && (t = window);
                  var n = p((t = t || window));
                  if (n) return n;
                  var e = h(t);
                  return e || void 0;
                }
                function A(t, n) {
                  if ("string" == typeof t) {
                    if ("string" == typeof n) return "*" === t || n === t;
                    if (o(n)) return !1;
                    if (Array.isArray(n)) return !1;
                  }
                  return o(t)
                    ? o(n)
                      ? t.toString() === n.toString()
                      : !Array.isArray(n) && Boolean(n.match(t))
                    : !!Array.isArray(t) &&
                        (Array.isArray(n)
                          ? JSON.stringify(t) === JSON.stringify(n)
                          : !o(n) &&
                            t.some(function (t) {
                              return A(t, n);
                            }));
                }
                function S(t) {
                  try {
                    if (t === window) return !0;
                  } catch (t) {
                    if (t && t.message === s) return !0;
                  }
                  try {
                    if ("[object Window]" === Object.prototype.toString.call(t))
                      return !0;
                  } catch (t) {
                    if (t && t.message === s) return !0;
                  }
                  try {
                    if (window.Window && t instanceof window.Window) return !0;
                  } catch (t) {
                    if (t && t.message === s) return !0;
                  }
                  try {
                    if (t && t.self === t) return !0;
                  } catch (t) {
                    if (t && t.message === s) return !0;
                  }
                  try {
                    if (t && t.parent === t) return !0;
                  } catch (t) {
                    if (t && t.message === s) return !0;
                  }
                  try {
                    if (t && t.top === t) return !0;
                  } catch (t) {
                    if (t && t.message === s) return !0;
                  }
                  try {
                    if (
                      t &&
                      "__unlikely_value__" ===
                        t.__cross_domain_utils_window_check__
                    )
                      return !1;
                  } catch (t) {
                    return !0;
                  }
                  return !1;
                }
                function k(t) {
                  try {
                    t.close();
                  } catch (t) {}
                }
                function T(t) {
                  try {
                    if (!t) return !1;
                    if ("undefined" != typeof Promise && t instanceof Promise)
                      return !0;
                    if (
                      "undefined" != typeof window &&
                      "function" == typeof window.Window &&
                      t instanceof window.Window
                    )
                      return !1;
                    if (
                      "undefined" != typeof window &&
                      "function" == typeof window.constructor &&
                      t instanceof window.constructor
                    )
                      return !1;
                    var n = {}.toString;
                    if (n) {
                      var e = n.call(t);
                      if (
                        "[object Window]" === e ||
                        "[object global]" === e ||
                        "[object DOMWindow]" === e
                      )
                        return !1;
                    }
                    if ("function" == typeof t.then) return !0;
                  } catch (t) {
                    return !1;
                  }
                  return !1;
                }
                var R,
                  W = [],
                  I = [],
                  D = 0;
                function C() {
                  if (!D && R) {
                    var t = R;
                    (R = null), t.resolve();
                  }
                }
                function M() {
                  D += 1;
                }
                function B() {
                  (D -= 1), C();
                }
                var L = (function () {
                  function t(t) {
                    var n = this;
                    if (
                      ((this.resolved = void 0),
                      (this.rejected = void 0),
                      (this.errorHandled = void 0),
                      (this.value = void 0),
                      (this.error = void 0),
                      (this.handlers = void 0),
                      (this.dispatching = void 0),
                      (this.stack = void 0),
                      (this.resolved = !1),
                      (this.rejected = !1),
                      (this.errorHandled = !1),
                      (this.handlers = []),
                      t)
                    ) {
                      var e,
                        r,
                        o = !1,
                        i = !1,
                        u = !1;
                      M();
                      try {
                        t(
                          function (t) {
                            u ? n.resolve(t) : ((o = !0), (e = t));
                          },
                          function (t) {
                            u ? n.reject(t) : ((i = !0), (r = t));
                          }
                        );
                      } catch (t) {
                        return B(), void this.reject(t);
                      }
                      B(), (u = !0), o ? this.resolve(e) : i && this.reject(r);
                    }
                  }
                  var n = t.prototype;
                  return (
                    (n.resolve = function (t) {
                      if (this.resolved || this.rejected) return this;
                      if (T(t))
                        throw new Error(
                          "Can not resolve promise with another promise"
                        );
                      return (
                        (this.resolved = !0),
                        (this.value = t),
                        this.dispatch(),
                        this
                      );
                    }),
                    (n.reject = function (t) {
                      var n = this;
                      if (this.resolved || this.rejected) return this;
                      if (T(t))
                        throw new Error(
                          "Can not reject promise with another promise"
                        );
                      if (!t) {
                        var e =
                          t && "function" == typeof t.toString
                            ? t.toString()
                            : Object.prototype.toString.call(t);
                        t = new Error(
                          "Expected reject to be called with Error, got " + e
                        );
                      }
                      return (
                        (this.rejected = !0),
                        (this.error = t),
                        this.errorHandled ||
                          setTimeout(function () {
                            n.errorHandled ||
                              (function (t, n) {
                                if (-1 === W.indexOf(t)) {
                                  W.push(t),
                                    setTimeout(function () {
                                      throw t;
                                    }, 1);
                                  for (var e = 0; e < I.length; e++) I[e](t, n);
                                }
                              })(t, n);
                          }, 1),
                        this.dispatch(),
                        this
                      );
                    }),
                    (n.asyncReject = function (t) {
                      return (this.errorHandled = !0), this.reject(t), this;
                    }),
                    (n.dispatch = function () {
                      var n = this.dispatching,
                        e = this.resolved,
                        r = this.rejected,
                        o = this.handlers;
                      if (!n && (e || r)) {
                        (this.dispatching = !0), M();
                        for (
                          var i = function (t, n) {
                              return t.then(
                                function (t) {
                                  n.resolve(t);
                                },
                                function (t) {
                                  n.reject(t);
                                }
                              );
                            },
                            u = 0;
                          u < o.length;
                          u++
                        ) {
                          var a = o[u],
                            c = a.onSuccess,
                            f = a.onError,
                            s = a.promise,
                            l = void 0;
                          if (e)
                            try {
                              l = c ? c(this.value) : this.value;
                            } catch (t) {
                              s.reject(t);
                              continue;
                            }
                          else if (r) {
                            if (!f) {
                              s.reject(this.error);
                              continue;
                            }
                            try {
                              l = f(this.error);
                            } catch (t) {
                              s.reject(t);
                              continue;
                            }
                          }
                          l instanceof t && (l.resolved || l.rejected)
                            ? (l.resolved
                                ? s.resolve(l.value)
                                : s.reject(l.error),
                              (l.errorHandled = !0))
                            : T(l)
                            ? l instanceof t && (l.resolved || l.rejected)
                              ? l.resolved
                                ? s.resolve(l.value)
                                : s.reject(l.error)
                              : i(l, s)
                            : s.resolve(l);
                        }
                        (o.length = 0), (this.dispatching = !1), B();
                      }
                    }),
                    (n.then = function (n, e) {
                      if (n && "function" != typeof n && !n.call)
                        throw new Error(
                          "Promise.then expected a function for success handler"
                        );
                      if (e && "function" != typeof e && !e.call)
                        throw new Error(
                          "Promise.then expected a function for error handler"
                        );
                      var r = new t();
                      return (
                        this.handlers.push({
                          promise: r,
                          onSuccess: n,
                          onError: e,
                        }),
                        (this.errorHandled = !0),
                        this.dispatch(),
                        r
                      );
                    }),
                    (n.catch = function (t) {
                      return this.then(void 0, t);
                    }),
                    (n.finally = function (n) {
                      if (n && "function" != typeof n && !n.call)
                        throw new Error("Promise.finally expected a function");
                      return this.then(
                        function (e) {
                          return t.try(n).then(function () {
                            return e;
                          });
                        },
                        function (e) {
                          return t.try(n).then(function () {
                            throw e;
                          });
                        }
                      );
                    }),
                    (n.timeout = function (t, n) {
                      var e = this;
                      if (this.resolved || this.rejected) return this;
                      var r = setTimeout(function () {
                        e.resolved ||
                          e.rejected ||
                          e.reject(
                            n ||
                              new Error("Promise timed out after " + t + "ms")
                          );
                      }, t);
                      return this.then(function (t) {
                        return clearTimeout(r), t;
                      });
                    }),
                    (n.toPromise = function () {
                      if ("undefined" == typeof Promise)
                        throw new TypeError("Could not find Promise");
                      return Promise.resolve(this);
                    }),
                    (t.resolve = function (n) {
                      return n instanceof t
                        ? n
                        : T(n)
                        ? new t(function (t, e) {
                            return n.then(t, e);
                          })
                        : new t().resolve(n);
                    }),
                    (t.reject = function (n) {
                      return new t().reject(n);
                    }),
                    (t.asyncReject = function (n) {
                      return new t().asyncReject(n);
                    }),
                    (t.all = function (n) {
                      var e = new t(),
                        r = n.length,
                        o = [];
                      if (!r) return e.resolve(o), e;
                      for (
                        var i = function (t, n, i) {
                            return n.then(
                              function (n) {
                                (o[t] = n), 0 == (r -= 1) && e.resolve(o);
                              },
                              function (t) {
                                i.reject(t);
                              }
                            );
                          },
                          u = 0;
                        u < n.length;
                        u++
                      ) {
                        var a = n[u];
                        if (a instanceof t) {
                          if (a.resolved) {
                            (o[u] = a.value), (r -= 1);
                            continue;
                          }
                        } else if (!T(a)) {
                          (o[u] = a), (r -= 1);
                          continue;
                        }
                        i(u, t.resolve(a), e);
                      }
                      return 0 === r && e.resolve(o), e;
                    }),
                    (t.hash = function (n) {
                      var e = {};
                      return t
                        .all(
                          Object.keys(n).map(function (r) {
                            return t.resolve(n[r]).then(function (t) {
                              e[r] = t;
                            });
                          })
                        )
                        .then(function () {
                          return e;
                        });
                    }),
                    (t.map = function (n, e) {
                      return t.all(n.map(e));
                    }),
                    (t.onPossiblyUnhandledException = function (t) {
                      return (function (t) {
                        return (
                          I.push(t),
                          {
                            cancel: function () {
                              I.splice(I.indexOf(t), 1);
                            },
                          }
                        );
                      })(t);
                    }),
                    (t.try = function (n, e, r) {
                      if (n && "function" != typeof n && !n.call)
                        throw new Error("Promise.try expected a function");
                      var o;
                      M();
                      try {
                        o = n.apply(e, r || []);
                      } catch (n) {
                        return B(), t.reject(n);
                      }
                      return B(), t.resolve(o);
                    }),
                    (t.delay = function (n) {
                      return new t(function (t) {
                        setTimeout(t, n);
                      });
                    }),
                    (t.isPromise = function (n) {
                      return !!(n && n instanceof t) || T(n);
                    }),
                    (t.flush = function () {
                      return (n = t), (e = R = R || new n()), C(), e;
                      var n, e;
                    }),
                    t
                  );
                })();
                function U() {
                  return (U =
                    Object.assign ||
                    function (t) {
                      for (var n = 1; n < arguments.length; n++) {
                        var e = arguments[n];
                        for (var r in e)
                          Object.prototype.hasOwnProperty.call(e, r) &&
                            (t[r] = e[r]);
                      }
                      return t;
                    }).apply(this, arguments);
                }
                function z(t, n) {
                  for (var e = 0; e < t.length; e++)
                    try {
                      if (t[e] === n) return e;
                    } catch (t) {}
                  return -1;
                }
                var N,
                  Y = (function () {
                    function t() {
                      if (
                        ((this.name = void 0),
                        (this.weakmap = void 0),
                        (this.keys = void 0),
                        (this.values = void 0),
                        (this.name =
                          "__weakmap_" + ((1e9 * Math.random()) >>> 0) + "__"),
                        (function () {
                          if ("undefined" == typeof WeakMap) return !1;
                          if (void 0 === Object.freeze) return !1;
                          try {
                            var t = new WeakMap(),
                              n = {};
                            return (
                              Object.freeze(n),
                              t.set(n, "__testvalue__"),
                              "__testvalue__" === t.get(n)
                            );
                          } catch (t) {
                            return !1;
                          }
                        })())
                      )
                        try {
                          this.weakmap = new WeakMap();
                        } catch (t) {}
                      (this.keys = []), (this.values = []);
                    }
                    var n = t.prototype;
                    return (
                      (n._cleanupClosedWindows = function () {
                        for (
                          var t = this.weakmap, n = this.keys, e = 0;
                          e < n.length;
                          e++
                        ) {
                          var r = n[e];
                          if (S(r) && O(r)) {
                            if (t)
                              try {
                                t.delete(r);
                              } catch (t) {}
                            n.splice(e, 1), this.values.splice(e, 1), (e -= 1);
                          }
                        }
                      }),
                      (n.isSafeToReadWrite = function (t) {
                        if (S(t)) return !1;
                        try {
                          t && t.self, t && t[this.name];
                        } catch (t) {
                          return !1;
                        }
                        return !0;
                      }),
                      (n.set = function (t, n) {
                        if (!t) throw new Error("WeakMap expected key");
                        var e = this.weakmap;
                        if (e)
                          try {
                            e.set(t, n);
                          } catch (t) {
                            delete this.weakmap;
                          }
                        if (this.isSafeToReadWrite(t))
                          try {
                            var r = this.name,
                              o = t[r];
                            return void (o && o[0] === t
                              ? (o[1] = n)
                              : Object.defineProperty(t, r, {
                                  value: [t, n],
                                  writable: !0,
                                }));
                          } catch (t) {}
                        this._cleanupClosedWindows();
                        var i = this.keys,
                          u = this.values,
                          a = z(i, t);
                        -1 === a ? (i.push(t), u.push(n)) : (u[a] = n);
                      }),
                      (n.get = function (t) {
                        if (!t) throw new Error("WeakMap expected key");
                        var n = this.weakmap;
                        if (n)
                          try {
                            if (n.has(t)) return n.get(t);
                          } catch (t) {
                            delete this.weakmap;
                          }
                        if (this.isSafeToReadWrite(t))
                          try {
                            var e = t[this.name];
                            return e && e[0] === t ? e[1] : void 0;
                          } catch (t) {}
                        this._cleanupClosedWindows();
                        var r = z(this.keys, t);
                        if (-1 !== r) return this.values[r];
                      }),
                      (n.delete = function (t) {
                        if (!t) throw new Error("WeakMap expected key");
                        var n = this.weakmap;
                        if (n)
                          try {
                            n.delete(t);
                          } catch (t) {
                            delete this.weakmap;
                          }
                        if (this.isSafeToReadWrite(t))
                          try {
                            var e = t[this.name];
                            e && e[0] === t && (e[0] = e[1] = void 0);
                          } catch (t) {}
                        this._cleanupClosedWindows();
                        var r = this.keys,
                          o = z(r, t);
                        -1 !== o && (r.splice(o, 1), this.values.splice(o, 1));
                      }),
                      (n.has = function (t) {
                        if (!t) throw new Error("WeakMap expected key");
                        var n = this.weakmap;
                        if (n)
                          try {
                            if (n.has(t)) return !0;
                          } catch (t) {
                            delete this.weakmap;
                          }
                        if (this.isSafeToReadWrite(t))
                          try {
                            var e = t[this.name];
                            return !(!e || e[0] !== t);
                          } catch (t) {}
                        return (
                          this._cleanupClosedWindows(), -1 !== z(this.keys, t)
                        );
                      }),
                      (n.getOrSet = function (t, n) {
                        if (this.has(t)) return this.get(t);
                        var e = n();
                        return this.set(t, e), e;
                      }),
                      t
                    );
                  })();
                function F(t) {
                  return t.name || t.__name__ || t.displayName || "anonymous";
                }
                function $(t, n) {
                  try {
                    delete t.name, (t.name = n);
                  } catch (t) {}
                  return (t.__name__ = t.displayName = n), t;
                }
                function q(t) {
                  if ("function" == typeof btoa)
                    return btoa(
                      encodeURIComponent(t).replace(
                        /%([0-9A-F]{2})/g,
                        function (t, n) {
                          return String.fromCharCode(parseInt(n, 16));
                        }
                      )
                    );
                  if (void 0 !== e) return e.from(t, "utf8").toString("base64");
                  throw new Error("Can not find window.btoa or Buffer");
                }
                function H() {
                  var t = "0123456789abcdef";
                  return (
                    "xxxxxxxxxx".replace(/./g, function () {
                      return t.charAt(Math.floor(Math.random() * t.length));
                    }) +
                    "_" +
                    q(new Date().toISOString().slice(11, 19).replace("T", "."))
                      .replace(/[^a-zA-Z0-9]/g, "")
                      .toLowerCase()
                  );
                }
                function J(t) {
                  try {
                    return JSON.stringify(
                      Array.prototype.slice.call(t),
                      function (t, n) {
                        return "function" == typeof n
                          ? "memoize[" +
                              (function (t) {
                                if (
                                  ((N = N || new Y()),
                                  null == t ||
                                    ("object" != typeof t &&
                                      "function" != typeof t))
                                )
                                  throw new Error("Invalid object");
                                var n = N.get(t);
                                return (
                                  n ||
                                    ((n = typeof t + ":" + H()), N.set(t, n)),
                                  n
                                );
                              })(n) +
                              "]"
                          : n;
                      }
                    );
                  } catch (t) {
                    throw new Error(
                      "Arguments not serializable -- can not be used to memoize"
                    );
                  }
                }
                function V(t) {
                  var n = {};
                  function e() {
                    for (
                      var e = this,
                        r = arguments,
                        o = arguments.length,
                        i = new Array(o),
                        u = 0;
                      u < o;
                      u++
                    )
                      i[u] = arguments[u];
                    var a = J(i);
                    return (
                      n.hasOwnProperty(a) ||
                        (n[a] = L.try(function () {
                          return t.apply(e, r);
                        }).finally(function () {
                          delete n[a];
                        })),
                      n[a]
                    );
                  }
                  return (
                    (e.reset = function () {
                      n = {};
                    }),
                    $(e, F(t) + "::promiseMemoized")
                  );
                }
                function Z() {}
                function K(t, n) {
                  if ((void 0 === n && (n = 1), n >= 3))
                    return "stringifyError stack overflow";
                  try {
                    if (!t)
                      return (
                        "<unknown error: " +
                        Object.prototype.toString.call(t) +
                        ">"
                      );
                    if ("string" == typeof t) return t;
                    if (t instanceof Error) {
                      var e = t && t.stack,
                        r = t && t.message;
                      if (e && r) return -1 !== e.indexOf(r) ? e : r + "\n" + e;
                      if (e) return e;
                      if (r) return r;
                    }
                    return t && t.toString && "function" == typeof t.toString
                      ? t.toString()
                      : Object.prototype.toString.call(t);
                  } catch (t) {
                    return "Error while stringifying error: " + K(t, n + 1);
                  }
                }
                function X(t) {
                  return "string" == typeof t
                    ? t
                    : t && t.toString && "function" == typeof t.toString
                    ? t.toString()
                    : Object.prototype.toString.call(t);
                }
                function G(t, n) {
                  var e;
                  return (
                    (function r() {
                      e = setTimeout(function () {
                        t(), r();
                      }, n);
                    })(),
                    {
                      cancel: function () {
                        clearTimeout(e);
                      },
                    }
                  );
                }
                function Q(t) {
                  return (
                    "[object RegExp]" === Object.prototype.toString.call(t)
                  );
                }
                function tt(t, n, e) {
                  if (t.hasOwnProperty(n)) return t[n];
                  var r = e();
                  return (t[n] = r), r;
                }
                function nt(t) {
                  this.message = t;
                }
                nt.prototype = Object.create(Error.prototype);
                var et = "postrobot_message_request",
                  rt = "postrobot_message_response",
                  ot = "postrobot_message_ack",
                  it = "success",
                  ut = "error",
                  at = "postrobot_method",
                  ct = "postrobot_hello",
                  ft = "cross_domain_zalgo_promise",
                  st = "cross_domain_function",
                  lt = "cross_domain_window";
                function ht(t) {
                  return (
                    void 0 === t && (t = window),
                    t !== window
                      ? t.__post_robot_10_0_29__
                      : (t.__post_robot_10_0_29__ =
                          t.__post_robot_10_0_29__ || {})
                  );
                }
                var pt = function () {
                  return {};
                };
                function dt(t, n) {
                  return (
                    void 0 === t && (t = "store"),
                    void 0 === n && (n = pt),
                    tt(ht(), t, function () {
                      var t = n();
                      return {
                        has: function (n) {
                          return t.hasOwnProperty(n);
                        },
                        get: function (n, e) {
                          return t.hasOwnProperty(n) ? t[n] : e;
                        },
                        set: function (n, e) {
                          return (t[n] = e), e;
                        },
                        del: function (n) {
                          delete t[n];
                        },
                        getOrSet: function (n, e) {
                          return tt(t, n, e);
                        },
                        reset: function () {
                          t = n();
                        },
                        keys: function () {
                          return Object.keys(t);
                        },
                      };
                    })
                  );
                }
                var vt = function () {};
                function yt() {
                  var t = ht();
                  return (
                    (t.WINDOW_WILDCARD = t.WINDOW_WILDCARD || new vt()),
                    t.WINDOW_WILDCARD
                  );
                }
                function wt(t, n) {
                  return (
                    void 0 === t && (t = "store"),
                    void 0 === n && (n = pt),
                    dt("windowStore").getOrSet(t, function () {
                      var e = new Y(),
                        r = function (t) {
                          return e.getOrSet(t, n);
                        };
                      return {
                        has: function (n) {
                          return r(n).hasOwnProperty(t);
                        },
                        get: function (n, e) {
                          var o = r(n);
                          return o.hasOwnProperty(t) ? o[t] : e;
                        },
                        set: function (n, e) {
                          return (r(n)[t] = e), e;
                        },
                        del: function (n) {
                          delete r(n)[t];
                        },
                        getOrSet: function (n, e) {
                          return tt(r(n), t, e);
                        },
                      };
                    })
                  );
                }
                function gt() {
                  return dt("instance").getOrSet("instanceID", H);
                }
                function mt(t, n) {
                  var e = n.domain,
                    r = wt("helloPromises"),
                    o = r.get(t);
                  o && o.resolve({ domain: e });
                  var i = L.resolve({ domain: e });
                  return r.set(t, i), i;
                }
                function bt(t, n) {
                  return (0, n.send)(
                    t,
                    ct,
                    { instanceID: gt() },
                    { domain: "*", timeout: -1 }
                  ).then(function (n) {
                    var e = n.origin,
                      r = n.data.instanceID;
                    return (
                      mt(t, { domain: e }), { win: t, domain: e, instanceID: r }
                    );
                  });
                }
                function _t(t, n) {
                  var e = n.send;
                  return wt("windowInstanceIDPromises").getOrSet(
                    t,
                    function () {
                      return bt(t, { send: e }).then(function (t) {
                        return t.instanceID;
                      });
                    }
                  );
                }
                function xt(t) {
                  var n = t.on,
                    e = t.send;
                  return dt("builtinListeners").getOrSet(
                    "helloListener",
                    function () {
                      var t = n(ct, { domain: "*" }, function (t) {
                          return (
                            mt(t.source, { domain: t.origin }),
                            { instanceID: gt() }
                          );
                        }),
                        r = P();
                      return r && bt(r, { send: e }).catch(Z), t;
                    }
                  );
                }
                function jt(t, n, e) {
                  void 0 === n && (n = 5e3), void 0 === e && (e = "Window");
                  var r = (function (t) {
                    return wt("helloPromises").getOrSet(t, function () {
                      return new L();
                    });
                  })(t);
                  return (
                    -1 !== n &&
                      (r = r.timeout(
                        n,
                        new Error(e + " did not load after " + n + "ms")
                      )),
                    r
                  );
                }
                function Et(t) {
                  wt("knownWindows").set(t, !0);
                }
                var Ot,
                  Pt = "function",
                  At = "error",
                  St = "promise",
                  kt = "regex",
                  Tt = "date",
                  Rt = "array",
                  Wt = "object",
                  It = "string",
                  Dt = "number",
                  Ct = "boolean",
                  Mt = "null",
                  Bt = "undefined";
                function Lt(t) {
                  return (
                    "object" == typeof t &&
                    null !== t &&
                    "string" == typeof t.__type__
                  );
                }
                function Ut(t) {
                  return void 0 === t
                    ? Bt
                    : null === t
                    ? Mt
                    : Array.isArray(t)
                    ? Rt
                    : "function" == typeof t
                    ? Pt
                    : "object" == typeof t
                    ? t instanceof Error
                      ? At
                      : "function" == typeof t.then
                      ? St
                      : "[object RegExp]" === Object.prototype.toString.call(t)
                      ? kt
                      : "[object Date]" === Object.prototype.toString.call(t)
                      ? Tt
                      : Wt
                    : "string" == typeof t
                    ? It
                    : "number" == typeof t
                    ? Dt
                    : "boolean" == typeof t
                    ? Ct
                    : void 0;
                }
                function zt(t, n) {
                  return { __type__: t, __val__: n };
                }
                var Nt,
                  Yt =
                    (((Ot = {})[Pt] = function () {}),
                    (Ot[At] = function (t) {
                      var n = t.message,
                        e = t.stack,
                        r = t.code;
                      return zt(At, { message: n, stack: e, code: r });
                    }),
                    (Ot[St] = function () {}),
                    (Ot[kt] = function (t) {
                      return zt(kt, t.source);
                    }),
                    (Ot[Tt] = function (t) {
                      return zt(Tt, t.toJSON());
                    }),
                    (Ot[Rt] = function (t) {
                      return t;
                    }),
                    (Ot[Wt] = function (t) {
                      return t;
                    }),
                    (Ot[It] = function (t) {
                      return t;
                    }),
                    (Ot[Dt] = function (t) {
                      return t;
                    }),
                    (Ot[Ct] = function (t) {
                      return t;
                    }),
                    (Ot[Mt] = function (t) {
                      return t;
                    }),
                    Ot),
                  Ft = {},
                  $t =
                    (((Nt = {})[Pt] = function () {
                      throw new Error(
                        "Function serialization is not implemented; nothing to deserialize"
                      );
                    }),
                    (Nt[At] = function (t) {
                      var n = t.message,
                        e = t.stack,
                        r = t.code,
                        o = new Error(n);
                      return (o.code = r), (o.stack = e + "\n\n" + o.stack), o;
                    }),
                    (Nt[St] = function () {
                      throw new Error(
                        "Promise serialization is not implemented; nothing to deserialize"
                      );
                    }),
                    (Nt[kt] = function (t) {
                      return new RegExp(t);
                    }),
                    (Nt[Tt] = function (t) {
                      return new Date(t);
                    }),
                    (Nt[Rt] = function (t) {
                      return t;
                    }),
                    (Nt[Wt] = function (t) {
                      return t;
                    }),
                    (Nt[It] = function (t) {
                      return t;
                    }),
                    (Nt[Dt] = function (t) {
                      return t;
                    }),
                    (Nt[Ct] = function (t) {
                      return t;
                    }),
                    (Nt[Mt] = function (t) {
                      return t;
                    }),
                    Nt),
                  qt = {};
                function Ht() {
                  for (
                    var t = dt("idToProxyWindow"), n = 0, e = t.keys();
                    n < e.length;
                    n++
                  ) {
                    var r = e[n];
                    t.get(r).shouldClean() && t.del(r);
                  }
                }
                function Jt(t, n) {
                  var e = n.send,
                    r = n.id,
                    o = void 0 === r ? H() : r,
                    i = t.then(function (t) {
                      if (w(t)) return g(t).name;
                    });
                  return {
                    id: o,
                    getType: function () {
                      return t.then(function (t) {
                        return p(t) ? f : c;
                      });
                    },
                    getInstanceID: V(function () {
                      return t.then(function (t) {
                        return _t(t, { send: e });
                      });
                    }),
                    close: function () {
                      return t.then(k);
                    },
                    getName: function () {
                      return t.then(function (t) {
                        if (!O(t)) return w(t) ? g(t).name : i;
                      });
                    },
                    focus: function () {
                      return t.then(function (t) {
                        t.focus();
                      });
                    },
                    isClosed: function () {
                      return t.then(function (t) {
                        return O(t);
                      });
                    },
                    setLocation: function (n) {
                      return t.then(function (t) {
                        if (w(t))
                          try {
                            if (
                              t.location &&
                              "function" == typeof t.location.replace
                            )
                              return void t.location.replace(n);
                          } catch (t) {}
                        t.location = n;
                      });
                    },
                    setName: function (n) {
                      return t.then(function (t) {
                        var e = w(t),
                          r = (function (t) {
                            if (w(t)) return g(t).frameElement;
                            for (
                              var n = 0,
                                e = document.querySelectorAll("iframe");
                              n < e.length;
                              n++
                            ) {
                              var r = e[n];
                              if (r && r.contentWindow && r.contentWindow === t)
                                return r;
                            }
                          })(t);
                        if (!e)
                          throw new Error(
                            "Can not set name for cross-domain window: " + n
                          );
                        (g(t).name = n),
                          r && r.setAttribute("name", n),
                          (i = L.resolve(n));
                      });
                    },
                  };
                }
                new L(function (t) {
                  if (window.document && window.document.body)
                    return t(window.document.body);
                  var n = setInterval(function () {
                    if (window.document && window.document.body)
                      return clearInterval(n), t(window.document.body);
                  }, 10);
                });
                var Vt = (function () {
                  function t(t) {
                    var n = t.send,
                      e = t.win,
                      r = t.serializedWindow;
                    (this.id = void 0),
                      (this.isProxyWindow = !0),
                      (this.serializedWindow = void 0),
                      (this.actualWindow = void 0),
                      (this.actualWindowPromise = void 0),
                      (this.send = void 0),
                      (this.name = void 0),
                      (this.actualWindowPromise = new L()),
                      (this.serializedWindow =
                        r || Jt(this.actualWindowPromise, { send: n })),
                      dt("idToProxyWindow").set(this.getID(), this),
                      e && this.setWindow(e, { send: n });
                  }
                  var n = t.prototype;
                  return (
                    (n.getID = function () {
                      return this.serializedWindow.id;
                    }),
                    (n.getType = function () {
                      return this.serializedWindow.getType();
                    }),
                    (n.isPopup = function () {
                      return this.getType().then(function (t) {
                        return t === f;
                      });
                    }),
                    (n.setLocation = function (t) {
                      var n = this;
                      return this.serializedWindow
                        .setLocation(t)
                        .then(function () {
                          return n;
                        });
                    }),
                    (n.getName = function () {
                      return this.serializedWindow.getName();
                    }),
                    (n.setName = function (t) {
                      var n = this;
                      return this.serializedWindow.setName(t).then(function () {
                        return n;
                      });
                    }),
                    (n.close = function () {
                      var t = this;
                      return this.serializedWindow.close().then(function () {
                        return t;
                      });
                    }),
                    (n.focus = function () {
                      var t = this,
                        n = this.isPopup(),
                        e = this.getName(),
                        r = L.hash({ isPopup: n, name: e }).then(function (t) {
                          var n = t.isPopup,
                            e = t.name;
                          n && e && window.open("", e);
                        }),
                        o = this.serializedWindow.focus();
                      return L.all([r, o]).then(function () {
                        return t;
                      });
                    }),
                    (n.isClosed = function () {
                      return this.serializedWindow.isClosed();
                    }),
                    (n.getWindow = function () {
                      return this.actualWindow;
                    }),
                    (n.setWindow = function (t, n) {
                      var e = n.send;
                      (this.actualWindow = t),
                        this.actualWindowPromise.resolve(this.actualWindow),
                        (this.serializedWindow = Jt(this.actualWindowPromise, {
                          send: e,
                          id: this.getID(),
                        })),
                        wt("winToProxyWindow").set(t, this);
                    }),
                    (n.awaitWindow = function () {
                      return this.actualWindowPromise;
                    }),
                    (n.matchWindow = function (t, n) {
                      var e = this,
                        r = n.send;
                      return L.try(function () {
                        return e.actualWindow
                          ? t === e.actualWindow
                          : L.hash({
                              proxyInstanceID: e.getInstanceID(),
                              knownWindowInstanceID: _t(t, { send: r }),
                            }).then(function (n) {
                              var o =
                                n.proxyInstanceID === n.knownWindowInstanceID;
                              return o && e.setWindow(t, { send: r }), o;
                            });
                      });
                    }),
                    (n.unwrap = function () {
                      return this.actualWindow || this;
                    }),
                    (n.getInstanceID = function () {
                      return this.serializedWindow.getInstanceID();
                    }),
                    (n.shouldClean = function () {
                      return Boolean(this.actualWindow && O(this.actualWindow));
                    }),
                    (n.serialize = function () {
                      return this.serializedWindow;
                    }),
                    (t.unwrap = function (n) {
                      return t.isProxyWindow(n) ? n.unwrap() : n;
                    }),
                    (t.serialize = function (n, e) {
                      var r = e.send;
                      return Ht(), t.toProxyWindow(n, { send: r }).serialize();
                    }),
                    (t.deserialize = function (n, e) {
                      var r = e.send;
                      return (
                        Ht(),
                        dt("idToProxyWindow").get(n.id) ||
                          new t({ serializedWindow: n, send: r })
                      );
                    }),
                    (t.isProxyWindow = function (t) {
                      return Boolean(t && !S(t) && t.isProxyWindow);
                    }),
                    (t.toProxyWindow = function (n, e) {
                      var r = e.send;
                      if ((Ht(), t.isProxyWindow(n))) return n;
                      var o = n;
                      return (
                        wt("winToProxyWindow").get(o) ||
                        new t({ win: o, send: r })
                      );
                    }),
                    t
                  );
                })();
                function Zt(t, n, e, r, o) {
                  var i = wt("methodStore"),
                    u = dt("proxyWindowMethods");
                  Vt.isProxyWindow(r)
                    ? u.set(t, { val: n, name: e, domain: o, source: r })
                    : (u.del(t),
                      (i.getOrSet(r, function () {
                        return {};
                      })[t] = { domain: o, name: e, val: n, source: r }));
                }
                function Kt(t, n) {
                  var e = wt("methodStore"),
                    r = dt("proxyWindowMethods");
                  return (
                    e.getOrSet(t, function () {
                      return {};
                    })[n] || r.get(n)
                  );
                }
                function Xt(t, n, e, r, o) {
                  !(function (t) {
                    var n = t.on,
                      e = t.send;
                    dt("builtinListeners").getOrSet(
                      "functionCalls",
                      function () {
                        return n(at, { domain: "*" }, function (t) {
                          var n = t.source,
                            r = t.origin,
                            o = t.data,
                            i = o.id,
                            u = o.name,
                            a = Kt(n, i);
                          if (!a)
                            throw new Error(
                              "Could not find method '" +
                                u +
                                "' with id: " +
                                o.id +
                                " in " +
                                y(window)
                            );
                          var c = a.source,
                            f = a.domain,
                            s = a.val;
                          return L.try(function () {
                            if (!A(f, r))
                              throw new Error(
                                "Method '" +
                                  o.name +
                                  "' domain " +
                                  JSON.stringify(
                                    Q(a.domain) ? a.domain.source : a.domain
                                  ) +
                                  " does not match origin " +
                                  r +
                                  " in " +
                                  y(window)
                              );
                            if (Vt.isProxyWindow(c))
                              return c
                                .matchWindow(n, { send: e })
                                .then(function (t) {
                                  if (!t)
                                    throw new Error(
                                      "Method call '" +
                                        o.name +
                                        "' failed - proxy window does not match source in " +
                                        y(window)
                                    );
                                });
                          })
                            .then(
                              function () {
                                return s.apply(
                                  { source: n, origin: r },
                                  o.args
                                );
                              },
                              function (t) {
                                return L.try(function () {
                                  if (s.onError) return s.onError(t);
                                }).then(function () {
                                  throw (
                                    (t.stack &&
                                      (t.stack =
                                        "Remote call to " +
                                        u +
                                        "()\n\n" +
                                        t.stack),
                                    t)
                                  );
                                });
                              }
                            )
                            .then(function (t) {
                              return { result: t, id: i, name: u };
                            });
                        });
                      }
                    );
                  })({ on: o.on, send: o.send });
                  var i = e.__id__ || H();
                  t = Vt.unwrap(t);
                  var u = e.__name__ || e.name || r;
                  return (
                    "string" == typeof u &&
                      "function" == typeof u.indexOf &&
                      0 === u.indexOf("anonymous::") &&
                      (u = u.replace("anonymous::", r + "::")),
                    Vt.isProxyWindow(t)
                      ? (Zt(i, e, u, t, n),
                        t.awaitWindow().then(function (t) {
                          Zt(i, e, u, t, n);
                        }))
                      : Zt(i, e, u, t, n),
                    zt(st, { id: i, name: u })
                  );
                }
                function Gt(t, n, e, r) {
                  var o,
                    i = r.on,
                    u = r.send;
                  return (function (t, n) {
                    void 0 === n && (n = Ft);
                    var e = JSON.stringify(t, function (t) {
                      var e = this[t];
                      if (Lt(this)) return e;
                      var r = Ut(e);
                      if (!r) return e;
                      var o = n[r] || Yt[r];
                      return o ? o(e, t) : e;
                    });
                    return void 0 === e ? Bt : e;
                  })(
                    e,
                    (((o = {})[St] = function (e, r) {
                      return (function (t, n, e, r, o) {
                        var i = o.on,
                          u = o.send;
                        return zt(ft, {
                          then: Xt(
                            t,
                            n,
                            function (t, n) {
                              return e.then(t, n);
                            },
                            r,
                            { on: i, send: u }
                          ),
                        });
                      })(t, n, e, r, { on: i, send: u });
                    }),
                    (o[Pt] = function (e, r) {
                      return Xt(t, n, e, r, { on: i, send: u });
                    }),
                    (o[Wt] = function (t) {
                      return S(t) || Vt.isProxyWindow(t)
                        ? (function (t, n, e, r) {
                            var o = r.send;
                            return zt(lt, Vt.serialize(e, { send: o }));
                          })(0, 0, t, { on: i, send: u })
                        : t;
                    }),
                    o)
                  );
                }
                function Qt(t, n, e, r) {
                  var o,
                    i = r.on,
                    u = r.send;
                  return (function (t, n) {
                    if ((void 0 === n && (n = qt), t !== Bt))
                      return JSON.parse(t, function (t, e) {
                        if (Lt(this)) return e;
                        var r, o;
                        if (
                          (Lt(e)
                            ? ((r = e.__type__), (o = e.__val__))
                            : ((r = Ut(e)), (o = e)),
                          !r)
                        )
                          return o;
                        var i = n[r] || $t[r];
                        return i ? i(o, t) : o;
                      });
                  })(
                    e,
                    (((o = {})[ft] = function (t) {
                      return (function (t, n, e) {
                        var r = e.then;
                        return new L(r);
                      })(0, 0, t);
                    }),
                    (o[st] = function (e) {
                      return (function (t, n, e, r) {
                        var o = e.id,
                          i = e.name,
                          u = r.send,
                          a = function (e) {
                            function r() {
                              var a = arguments;
                              return Vt.toProxyWindow(t, { send: u })
                                .awaitWindow()
                                .then(function (t) {
                                  var c = Kt(t, o);
                                  if (c && c.val !== r)
                                    return c.val.apply(
                                      { source: window, origin: y() },
                                      a
                                    );
                                  var f = {
                                      domain: n,
                                      fireAndForget: e.fireAndForget,
                                    },
                                    s = Array.prototype.slice.call(a);
                                  return u(
                                    t,
                                    at,
                                    { id: o, name: i, args: s },
                                    f
                                  ).then(function (t) {
                                    if (!e.fireAndForget) return t.data.result;
                                  });
                                })
                                .catch(function (t) {
                                  throw t;
                                });
                            }
                            return (
                              void 0 === e && (e = {}),
                              (r.__name__ = i),
                              (r.__origin__ = n),
                              (r.__source__ = t),
                              (r.__id__ = o),
                              (r.origin = n),
                              r
                            );
                          },
                          c = a();
                        return (c.fireAndForget = a({ fireAndForget: !0 })), c;
                      })(t, n, e, { on: i, send: u });
                    }),
                    (o[lt] = function (t) {
                      return (function (t, n, e, r) {
                        var o = r.send;
                        return Vt.deserialize(e, { send: o });
                      })(0, 0, t, { send: u });
                    }),
                    o)
                  );
                }
                var tn,
                  nn = {};
                function en(t, n, e, r) {
                  var o,
                    i = r.on,
                    u = r.send;
                  if (O(t)) throw new Error("Window is closed");
                  for (
                    var a = Gt(
                        t,
                        n,
                        (((o = {}).__post_robot_10_0_29__ = U(
                          { id: H(), origin: y(window) },
                          e
                        )),
                        o),
                        { on: i, send: u }
                      ),
                      c = Object.keys(nn),
                      f = [],
                      s = 0;
                    s < c.length;
                    s++
                  ) {
                    var l = c[s];
                    try {
                      nn[l](t, a, n);
                    } catch (t) {
                      f.push(t);
                    }
                  }
                  if (f.length === c.length)
                    throw new Error(
                      "All post-robot messaging strategies failed:\n\n" +
                        f
                          .map(function (t, n) {
                            return n + ". " + K(t);
                          })
                          .join("\n\n")
                    );
                }
                function rn(t) {
                  return dt("responseListeners").get(t);
                }
                function on(t) {
                  dt("responseListeners").del(t);
                }
                function un(t) {
                  return dt("erroredResponseListeners").has(t);
                }
                function an(t) {
                  var n = t.name,
                    e = t.win,
                    r = t.domain,
                    o = wt("requestListeners");
                  if (("*" === e && (e = null), "*" === r && (r = null), !n))
                    throw new Error("Name required to get request listener");
                  for (var i = 0, u = [e, yt()]; i < u.length; i++) {
                    var a = u[i];
                    if (a) {
                      var c = o.get(a);
                      if (c) {
                        var f = c[n];
                        if (f) {
                          if (r && "string" == typeof r) {
                            if (f[r]) return f[r];
                            if (f.__domain_regex__)
                              for (
                                var s = 0, l = f.__domain_regex__;
                                s < l.length;
                                s++
                              ) {
                                var h = l[s],
                                  p = h.regex,
                                  d = h.listener;
                                if (A(p, r)) return d;
                              }
                          }
                          if (f["*"]) return f["*"];
                        }
                      }
                    }
                  }
                }
                nn.postrobot_post_message = function (t, n, e) {
                  (Array.isArray(e) ? e : "string" == typeof e ? [e] : ["*"])
                    .map(function (t) {
                      return 0 === t.indexOf(u) ? "*" : t;
                    })
                    .forEach(function (e) {
                      t.postMessage(n, e);
                    });
                };
                var cn =
                  (((tn = {})[et] = function (t, n, e, r) {
                    var o = r.on,
                      i = r.send,
                      u = an({ name: e.name, win: t, domain: n }),
                      a =
                        e.name === at &&
                        e.data &&
                        "string" == typeof e.data.name
                          ? e.data.name + "()"
                          : e.name;
                    function c(r, u, c) {
                      if ((void 0 === c && (c = {}), !e.fireAndForget && !O(t)))
                        try {
                          en(
                            t,
                            n,
                            U(
                              { type: r, ack: u, hash: e.hash, name: e.name },
                              c
                            ),
                            { on: o, send: i }
                          );
                        } catch (t) {
                          throw new Error(
                            "Send response message failed for " +
                              a +
                              " in " +
                              y() +
                              "\n\n" +
                              K(t)
                          );
                        }
                    }
                    return L.all([
                      c(ot),
                      L.try(function () {
                        if (!u)
                          throw new Error(
                            "No handler found for post message: " +
                              e.name +
                              " from " +
                              n +
                              " in " +
                              window.location.protocol +
                              "//" +
                              window.location.host +
                              window.location.pathname
                          );
                        if (!A(u.domain, n))
                          throw new Error(
                            "Request origin " +
                              n +
                              " does not match domain " +
                              u.domain.toString()
                          );
                        var r = e.data;
                        return u.handler({ source: t, origin: n, data: r });
                      }).then(
                        function (t) {
                          return c(rt, it, { data: t });
                        },
                        function (t) {
                          return c(rt, ut, { error: t });
                        }
                      ),
                    ])
                      .then(Z)
                      .catch(function (t) {
                        if (u && u.handleError) return u.handleError(t);
                        throw t;
                      });
                  }),
                  (tn[ot] = function (t, n, e) {
                    if (!un(e.hash)) {
                      var r = rn(e.hash);
                      if (!r)
                        throw new Error(
                          "No handler found for post message ack for message: " +
                            e.name +
                            " from " +
                            n +
                            " in " +
                            window.location.protocol +
                            "//" +
                            window.location.host +
                            window.location.pathname
                        );
                      try {
                        if (!A(r.domain, n))
                          throw new Error(
                            "Ack origin " +
                              n +
                              " does not match domain " +
                              r.domain.toString()
                          );
                        if (t !== r.win)
                          throw new Error(
                            "Ack source does not match registered window"
                          );
                      } catch (t) {
                        r.promise.reject(t);
                      }
                      r.ack = !0;
                    }
                  }),
                  (tn[rt] = function (t, n, e) {
                    if (!un(e.hash)) {
                      var r,
                        i = rn(e.hash);
                      if (!i)
                        throw new Error(
                          "No handler found for post message response for message: " +
                            e.name +
                            " from " +
                            n +
                            " in " +
                            window.location.protocol +
                            "//" +
                            window.location.host +
                            window.location.pathname
                        );
                      if (!A(i.domain, n))
                        throw new Error(
                          "Response origin " +
                            n +
                            " does not match domain " +
                            ((r = i.domain),
                            Array.isArray(r)
                              ? "(" + r.join(" | ") + ")"
                              : o(r)
                              ? "RegExp(" + r.toString()
                              : r.toString())
                        );
                      if (t !== i.win)
                        throw new Error(
                          "Response source does not match registered window"
                        );
                      on(e.hash),
                        e.name === at &&
                        e.data &&
                        "string" == typeof e.data.name
                          ? e.data.name
                          : e.name,
                        e.ack === ut
                          ? i.promise.reject(e.error)
                          : e.ack === it &&
                            i.promise.resolve({
                              source: t,
                              origin: n,
                              data: e.data,
                            });
                    }
                  }),
                  tn);
                function fn(t, n) {
                  var e = n.on,
                    r = n.send,
                    o = dt("receivedMessages");
                  try {
                    if (!window || window.closed || !t.source) return;
                  } catch (t) {
                    return;
                  }
                  var i = t.source,
                    a = t.origin,
                    c = (function (t, n, e, r) {
                      var o,
                        i = r.on,
                        u = r.send;
                      try {
                        o = Qt(n, e, t, { on: i, send: u });
                      } catch (t) {
                        return;
                      }
                      if (
                        o &&
                        "object" == typeof o &&
                        null !== o &&
                        (o = o.__post_robot_10_0_29__) &&
                        "object" == typeof o &&
                        null !== o &&
                        o.type &&
                        "string" == typeof o.type &&
                        cn[o.type]
                      )
                        return o;
                    })(t.data, i, a, { on: e, send: r });
                  c &&
                    (Et(i),
                    o.has(c.id) ||
                      (o.set(c.id, !0),
                      (O(i) && !c.fireAndForget) ||
                        (0 === c.origin.indexOf(u) && (a = u + "//"),
                        cn[c.type](i, a, c, { on: e, send: r }))));
                }
                function sn(t) {
                  var n = t.on,
                    e = t.send;
                  return dt().getOrSet("postMessageListener", function () {
                    return (function (t, n, e) {
                      return (
                        t.addEventListener(n, e),
                        {
                          cancel: function () {
                            t.removeEventListener(n, e);
                          },
                        }
                      );
                    })(window, "message", function (t) {
                      !(function (t, n) {
                        var e = n.on,
                          r = n.send;
                        try {
                          t.source;
                        } catch (t) {
                          return;
                        }
                        var o = t.source || t.sourceElement,
                          i =
                            t.origin ||
                            (t.originalEvent && t.originalEvent.origin),
                          a = t.data;
                        if (("null" === i && (i = u + "//"), o)) {
                          if (!i)
                            throw new Error(
                              "Post message did not have origin domain"
                            );
                          fn(
                            { source: o, origin: i, data: a },
                            { on: e, send: r }
                          );
                        }
                      })(t, { on: n, send: e });
                    });
                  });
                }
                function ln(t, n, e) {
                  if (!t) throw new Error("Expected name");
                  if (("function" == typeof n && ((e = n), (n = {})), !e))
                    throw new Error("Expected handler");
                  ((n = n || {}).name = t), (n.handler = e || n.handler);
                  var r = n.window,
                    o = n.domain,
                    i = (function t(n, e) {
                      var r = n.name,
                        o = n.win,
                        i = n.domain,
                        u = wt("requestListeners");
                      if (!r || "string" != typeof r)
                        throw new Error(
                          "Name required to add request listener"
                        );
                      if (Array.isArray(o)) {
                        for (var a = [], c = 0, f = o; c < f.length; c++) {
                          var s = f[c];
                          a.push(t({ name: r, domain: i, win: s }, e));
                        }
                        return {
                          cancel: function () {
                            for (var t = 0; t < a.length; t++) a[t].cancel();
                          },
                        };
                      }
                      if (Array.isArray(i)) {
                        for (var l = [], h = 0, p = i; h < p.length; h++) {
                          var d = p[h];
                          l.push(t({ name: r, win: o, domain: d }, e));
                        }
                        return {
                          cancel: function () {
                            for (var t = 0; t < l.length; t++) l[t].cancel();
                          },
                        };
                      }
                      var v = an({ name: r, win: o, domain: i });
                      if (((o && "*" !== o) || (o = yt()), (i = i || "*"), v))
                        throw o && i
                          ? new Error(
                              "Request listener already exists for " +
                                r +
                                " on domain " +
                                i.toString() +
                                " for " +
                                (o === yt() ? "wildcard" : "specified") +
                                " window"
                            )
                          : o
                          ? new Error(
                              "Request listener already exists for " +
                                r +
                                " for " +
                                (o === yt() ? "wildcard" : "specified") +
                                " window"
                            )
                          : i
                          ? new Error(
                              "Request listener already exists for " +
                                r +
                                " on domain " +
                                i.toString()
                            )
                          : new Error(
                              "Request listener already exists for " + r
                            );
                      var y,
                        w,
                        g = u.getOrSet(o, function () {
                          return {};
                        }),
                        m = tt(g, r, function () {
                          return {};
                        }),
                        b = i.toString();
                      return (
                        Q(i)
                          ? ((y = tt(m, "__domain_regex__", function () {
                              return [];
                            })),
                            (w = { regex: i, listener: e }),
                            y.push(w))
                          : (m[b] = e),
                        {
                          cancel: function () {
                            delete m[b],
                              w &&
                                (y.splice(y.indexOf(w, 1)),
                                y.length || delete m.__domain_regex__),
                              Object.keys(m).length || delete g[r],
                              o && !Object.keys(g).length && u.del(o);
                          },
                        }
                      );
                    })(
                      { name: t, win: r, domain: o },
                      {
                        handler: n.handler,
                        handleError:
                          n.errorHandler ||
                          function (t) {
                            throw t;
                          },
                        window: r,
                        domain: o || "*",
                        name: t,
                      }
                    );
                  return {
                    cancel: function () {
                      i.cancel();
                    },
                  };
                }
                function hn(t, n, e) {
                  "function" == typeof (n = n || {}) && ((e = n), (n = {}));
                  var r,
                    o = new L();
                  return (
                    (n.errorHandler = function (t) {
                      r.cancel(), o.reject(t);
                    }),
                    (r = ln(t, n, function (t) {
                      if ((r.cancel(), o.resolve(t), e)) return e(t);
                    })),
                    (o.cancel = r.cancel),
                    o
                  );
                }
                var pn = function t(n, e, r, o) {
                  var i = (o = o || {}).domain || "*",
                    u = o.timeout || -1,
                    a = o.timeout || 5e3,
                    c = o.fireAndForget || !1;
                  return L.try(function () {
                    if (
                      ((function (t, n, e) {
                        if (!t) throw new Error("Expected name");
                        if (
                          e &&
                          "string" != typeof e &&
                          !Array.isArray(e) &&
                          !Q(e)
                        )
                          throw new TypeError(
                            "Expected domain to be a string, array, or regex"
                          );
                        if (O(n)) throw new Error("Target window is closed");
                      })(e, n, i),
                      (function (t, n) {
                        var e = P(n);
                        if (e) return e === t;
                        if (n === t) return !1;
                        if (x(n) === n) return !1;
                        for (var r = 0, o = b(t); r < o.length; r++)
                          if (o[r] === n) return !0;
                        return !1;
                      })(window, n))
                    )
                      return jt(n, a);
                  })
                    .then(function (e) {
                      var r = (void 0 === e ? {} : e).domain;
                      return (function (t, n, e, r) {
                        var o = r.send;
                        return "string" == typeof n
                          ? L.resolve(n)
                          : L.try(function () {
                              return (
                                e ||
                                bt(t, { send: o }).then(function (t) {
                                  return t.domain;
                                })
                              );
                            }).then(function (t) {
                              if (!A(n, n))
                                throw new Error(
                                  "Domain " + X(n) + " does not match " + X(n)
                                );
                              return t;
                            });
                      })(n, i, r, { send: t });
                    })
                    .then(function (o) {
                      i = o;
                      var a =
                          e === at && r && "string" == typeof r.name
                            ? r.name + "()"
                            : e,
                        f = new L(),
                        s = e + "_" + H();
                      if (!c) {
                        var l = { name: e, win: n, domain: i, promise: f };
                        !(function (t, n) {
                          dt("responseListeners").set(t, n);
                        })(s, l);
                        var h = wt("requestPromises").getOrSet(n, function () {
                          return [];
                        });
                        h.push(f),
                          f.catch(function () {
                            !(function (t) {
                              dt("erroredResponseListeners").set(t, !0);
                            })(s),
                              on(s);
                          });
                        var p = (function (t) {
                            return wt("knownWindows").get(t, !1);
                          })(n)
                            ? 1e4
                            : 2e3,
                          d = u,
                          v = p,
                          w = d,
                          g = G(function () {
                            return O(n)
                              ? f.reject(
                                  new Error(
                                    "Window closed for " +
                                      e +
                                      " before " +
                                      (l.ack ? "response" : "ack")
                                  )
                                )
                              : l.cancelled
                              ? f.reject(
                                  new Error(
                                    "Response listener was cancelled for " + e
                                  )
                                )
                              : ((v = Math.max(v - 500, 0)),
                                -1 !== w && (w = Math.max(w - 500, 0)),
                                l.ack || 0 !== v
                                  ? 0 === w
                                    ? f.reject(
                                        new Error(
                                          "No response for postMessage " +
                                            a +
                                            " in " +
                                            y() +
                                            " in " +
                                            d +
                                            "ms"
                                        )
                                      )
                                    : void 0
                                  : f.reject(
                                      new Error(
                                        "No ack for postMessage " +
                                          a +
                                          " in " +
                                          y() +
                                          " in " +
                                          p +
                                          "ms"
                                      )
                                    ));
                          }, 500);
                        f.finally(function () {
                          g.cancel(), h.splice(h.indexOf(f, 1));
                        }).catch(Z);
                      }
                      try {
                        en(
                          n,
                          i,
                          {
                            type: et,
                            hash: s,
                            name: e,
                            data: r,
                            fireAndForget: c,
                          },
                          { on: ln, send: t }
                        );
                      } catch (t) {
                        throw new Error(
                          "Send request message failed for " +
                            a +
                            " in " +
                            y() +
                            "\n\n" +
                            K(t)
                        );
                      }
                      return c ? f.resolve() : f;
                    });
                };
                function dn(t, n, e) {
                  return Gt(t, n, e, { on: ln, send: pn });
                }
                function vn(t, n, e) {
                  return Qt(t, n, e, { on: ln, send: pn });
                }
                function yn(t) {
                  return new Vt({ send: pn, win: t });
                }
                function wn(t) {
                  return Vt.toProxyWindow(t, { send: pn });
                }
                function gn() {
                  ht().initialized ||
                    ((ht().initialized = !0),
                    (function (t) {
                      var n = t.on,
                        e = t.send,
                        r = ht();
                      r.receiveMessage =
                        r.receiveMessage ||
                        function (t) {
                          return fn(t, { on: n, send: e });
                        };
                    })({ on: ln, send: pn }),
                    sn({ on: ln, send: pn }),
                    xt({ on: ln, send: pn }));
                }
                function mn() {
                  var t;
                  !(function () {
                    for (
                      var t = dt("responseListeners"), n = 0, e = t.keys();
                      n < e.length;
                      n++
                    ) {
                      var r = e[n],
                        o = t.get(r);
                      o && (o.cancelled = !0), t.del(r);
                    }
                  })(),
                    (t = dt().get("postMessageListener")) && t.cancel(),
                    delete window.__post_robot_10_0_29__;
                }
                function bn(t) {
                  for (
                    var n = 0, e = wt("requestPromises").get(t, []);
                    n < e.length;
                    n++
                  )
                    e[n]
                      .reject(new Error("Window cleaned up before response"))
                      .catch(Z);
                }
                r.d(n, "bridge", function () {}),
                  r.d(n, "Promise", function () {
                    return L;
                  }),
                  r.d(n, "TYPES", function () {
                    return !0;
                  }),
                  r.d(n, "ProxyWindow", function () {
                    return Vt;
                  }),
                  r.d(n, "setup", function () {
                    return gn;
                  }),
                  r.d(n, "destroy", function () {
                    return mn;
                  }),
                  r.d(n, "serializeMessage", function () {
                    return dn;
                  }),
                  r.d(n, "deserializeMessage", function () {
                    return vn;
                  }),
                  r.d(n, "createProxyWindow", function () {
                    return yn;
                  }),
                  r.d(n, "toProxyWindow", function () {
                    return wn;
                  }),
                  r.d(n, "on", function () {
                    return ln;
                  }),
                  r.d(n, "once", function () {
                    return hn;
                  }),
                  r.d(n, "send", function () {
                    return pn;
                  }),
                  r.d(n, "markWindowKnown", function () {
                    return Et;
                  }),
                  r.d(n, "cleanUpWindow", function () {
                    return bn;
                  }),
                  gn();
              },
            ]);
          }),
          (t.exports = o());
      }).call(this, e(33), e(161).Buffer, e(10));
    },
    function (t, n, e) {
      "use strict";
      (function (t) {
        var r = e(162),
          o = e(163),
          i = e(164);
        function u() {
          return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function a(t, n) {
          if (u() < n) throw new RangeError("Invalid typed array length");
          return (
            c.TYPED_ARRAY_SUPPORT
              ? ((t = new Uint8Array(n)).__proto__ = c.prototype)
              : (null === t && (t = new c(n)), (t.length = n)),
            t
          );
        }
        function c(t, n, e) {
          if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c))
            return new c(t, n, e);
          if ("number" == typeof t) {
            if ("string" == typeof n)
              throw new Error(
                "If encoding is specified then the first argument must be a string"
              );
            return l(this, t);
          }
          return f(this, t, n, e);
        }
        function f(t, n, e, r) {
          if ("number" == typeof n)
            throw new TypeError('"value" argument must not be a number');
          return "undefined" != typeof ArrayBuffer && n instanceof ArrayBuffer
            ? (function (t, n, e, r) {
                if ((n.byteLength, e < 0 || n.byteLength < e))
                  throw new RangeError("'offset' is out of bounds");
                if (n.byteLength < e + (r || 0))
                  throw new RangeError("'length' is out of bounds");
                n =
                  void 0 === e && void 0 === r
                    ? new Uint8Array(n)
                    : void 0 === r
                    ? new Uint8Array(n, e)
                    : new Uint8Array(n, e, r);
                c.TYPED_ARRAY_SUPPORT
                  ? ((t = n).__proto__ = c.prototype)
                  : (t = h(t, n));
                return t;
              })(t, n, e, r)
            : "string" == typeof n
            ? (function (t, n, e) {
                ("string" == typeof e && "" !== e) || (e = "utf8");
                if (!c.isEncoding(e))
                  throw new TypeError(
                    '"encoding" must be a valid string encoding'
                  );
                var r = 0 | d(n, e),
                  o = (t = a(t, r)).write(n, e);
                o !== r && (t = t.slice(0, o));
                return t;
              })(t, n, e)
            : (function (t, n) {
                if (c.isBuffer(n)) {
                  var e = 0 | p(n.length);
                  return 0 === (t = a(t, e)).length || n.copy(t, 0, 0, e), t;
                }
                if (n) {
                  if (
                    ("undefined" != typeof ArrayBuffer &&
                      n.buffer instanceof ArrayBuffer) ||
                    "length" in n
                  )
                    return "number" != typeof n.length || (r = n.length) != r
                      ? a(t, 0)
                      : h(t, n);
                  if ("Buffer" === n.type && i(n.data)) return h(t, n.data);
                }
                var r;
                throw new TypeError(
                  "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                );
              })(t, n);
        }
        function s(t) {
          if ("number" != typeof t)
            throw new TypeError('"size" argument must be a number');
          if (t < 0)
            throw new RangeError('"size" argument must not be negative');
        }
        function l(t, n) {
          if ((s(n), (t = a(t, n < 0 ? 0 : 0 | p(n))), !c.TYPED_ARRAY_SUPPORT))
            for (var e = 0; e < n; ++e) t[e] = 0;
          return t;
        }
        function h(t, n) {
          var e = n.length < 0 ? 0 : 0 | p(n.length);
          t = a(t, e);
          for (var r = 0; r < e; r += 1) t[r] = 255 & n[r];
          return t;
        }
        function p(t) {
          if (t >= u())
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                u().toString(16) +
                " bytes"
            );
          return 0 | t;
        }
        function d(t, n) {
          if (c.isBuffer(t)) return t.length;
          if (
            "undefined" != typeof ArrayBuffer &&
            "function" == typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
          )
            return t.byteLength;
          "string" != typeof t && (t = "" + t);
          var e = t.length;
          if (0 === e) return 0;
          for (var r = !1; ; )
            switch (n) {
              case "ascii":
              case "latin1":
              case "binary":
                return e;
              case "utf8":
              case "utf-8":
              case void 0:
                return z(t).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * e;
              case "hex":
                return e >>> 1;
              case "base64":
                return N(t).length;
              default:
                if (r) return z(t).length;
                (n = ("" + n).toLowerCase()), (r = !0);
            }
        }
        function v(t, n, e) {
          var r = !1;
          if (((void 0 === n || n < 0) && (n = 0), n > this.length)) return "";
          if (((void 0 === e || e > this.length) && (e = this.length), e <= 0))
            return "";
          if ((e >>>= 0) <= (n >>>= 0)) return "";
          for (t || (t = "utf8"); ; )
            switch (t) {
              case "hex":
                return k(this, n, e);
              case "utf8":
              case "utf-8":
                return P(this, n, e);
              case "ascii":
                return A(this, n, e);
              case "latin1":
              case "binary":
                return S(this, n, e);
              case "base64":
                return O(this, n, e);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return T(this, n, e);
              default:
                if (r) throw new TypeError("Unknown encoding: " + t);
                (t = (t + "").toLowerCase()), (r = !0);
            }
        }
        function y(t, n, e) {
          var r = t[n];
          (t[n] = t[e]), (t[e] = r);
        }
        function w(t, n, e, r, o) {
          if (0 === t.length) return -1;
          if (
            ("string" == typeof e
              ? ((r = e), (e = 0))
              : e > 2147483647
              ? (e = 2147483647)
              : e < -2147483648 && (e = -2147483648),
            (e = +e),
            isNaN(e) && (e = o ? 0 : t.length - 1),
            e < 0 && (e = t.length + e),
            e >= t.length)
          ) {
            if (o) return -1;
            e = t.length - 1;
          } else if (e < 0) {
            if (!o) return -1;
            e = 0;
          }
          if (("string" == typeof n && (n = c.from(n, r)), c.isBuffer(n)))
            return 0 === n.length ? -1 : g(t, n, e, r, o);
          if ("number" == typeof n)
            return (
              (n &= 255),
              c.TYPED_ARRAY_SUPPORT &&
              "function" == typeof Uint8Array.prototype.indexOf
                ? o
                  ? Uint8Array.prototype.indexOf.call(t, n, e)
                  : Uint8Array.prototype.lastIndexOf.call(t, n, e)
                : g(t, [n], e, r, o)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function g(t, n, e, r, o) {
          var i,
            u = 1,
            a = t.length,
            c = n.length;
          if (
            void 0 !== r &&
            ("ucs2" === (r = String(r).toLowerCase()) ||
              "ucs-2" === r ||
              "utf16le" === r ||
              "utf-16le" === r)
          ) {
            if (t.length < 2 || n.length < 2) return -1;
            (u = 2), (a /= 2), (c /= 2), (e /= 2);
          }
          function f(t, n) {
            return 1 === u ? t[n] : t.readUInt16BE(n * u);
          }
          if (o) {
            var s = -1;
            for (i = e; i < a; i++)
              if (f(t, i) === f(n, -1 === s ? 0 : i - s)) {
                if ((-1 === s && (s = i), i - s + 1 === c)) return s * u;
              } else -1 !== s && (i -= i - s), (s = -1);
          } else
            for (e + c > a && (e = a - c), i = e; i >= 0; i--) {
              for (var l = !0, h = 0; h < c; h++)
                if (f(t, i + h) !== f(n, h)) {
                  l = !1;
                  break;
                }
              if (l) return i;
            }
          return -1;
        }
        function m(t, n, e, r) {
          e = Number(e) || 0;
          var o = t.length - e;
          r ? (r = Number(r)) > o && (r = o) : (r = o);
          var i = n.length;
          if (i % 2 != 0) throw new TypeError("Invalid hex string");
          r > i / 2 && (r = i / 2);
          for (var u = 0; u < r; ++u) {
            var a = parseInt(n.substr(2 * u, 2), 16);
            if (isNaN(a)) return u;
            t[e + u] = a;
          }
          return u;
        }
        function b(t, n, e, r) {
          return Y(z(n, t.length - e), t, e, r);
        }
        function _(t, n, e, r) {
          return Y(
            (function (t) {
              for (var n = [], e = 0; e < t.length; ++e)
                n.push(255 & t.charCodeAt(e));
              return n;
            })(n),
            t,
            e,
            r
          );
        }
        function x(t, n, e, r) {
          return _(t, n, e, r);
        }
        function j(t, n, e, r) {
          return Y(N(n), t, e, r);
        }
        function E(t, n, e, r) {
          return Y(
            (function (t, n) {
              for (
                var e, r, o, i = [], u = 0;
                u < t.length && !((n -= 2) < 0);
                ++u
              )
                (e = t.charCodeAt(u)),
                  (r = e >> 8),
                  (o = e % 256),
                  i.push(o),
                  i.push(r);
              return i;
            })(n, t.length - e),
            t,
            e,
            r
          );
        }
        function O(t, n, e) {
          return 0 === n && e === t.length
            ? r.fromByteArray(t)
            : r.fromByteArray(t.slice(n, e));
        }
        function P(t, n, e) {
          e = Math.min(t.length, e);
          for (var r = [], o = n; o < e; ) {
            var i,
              u,
              a,
              c,
              f = t[o],
              s = null,
              l = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
            if (o + l <= e)
              switch (l) {
                case 1:
                  f < 128 && (s = f);
                  break;
                case 2:
                  128 == (192 & (i = t[o + 1])) &&
                    (c = ((31 & f) << 6) | (63 & i)) > 127 &&
                    (s = c);
                  break;
                case 3:
                  (i = t[o + 1]),
                    (u = t[o + 2]),
                    128 == (192 & i) &&
                      128 == (192 & u) &&
                      (c = ((15 & f) << 12) | ((63 & i) << 6) | (63 & u)) >
                        2047 &&
                      (c < 55296 || c > 57343) &&
                      (s = c);
                  break;
                case 4:
                  (i = t[o + 1]),
                    (u = t[o + 2]),
                    (a = t[o + 3]),
                    128 == (192 & i) &&
                      128 == (192 & u) &&
                      128 == (192 & a) &&
                      (c =
                        ((15 & f) << 18) |
                        ((63 & i) << 12) |
                        ((63 & u) << 6) |
                        (63 & a)) > 65535 &&
                      c < 1114112 &&
                      (s = c);
              }
            null === s
              ? ((s = 65533), (l = 1))
              : s > 65535 &&
                ((s -= 65536),
                r.push(((s >>> 10) & 1023) | 55296),
                (s = 56320 | (1023 & s))),
              r.push(s),
              (o += l);
          }
          return (function (t) {
            var n = t.length;
            if (n <= 4096) return String.fromCharCode.apply(String, t);
            var e = "",
              r = 0;
            for (; r < n; )
              e += String.fromCharCode.apply(String, t.slice(r, (r += 4096)));
            return e;
          })(r);
        }
        (n.Buffer = c),
          (n.SlowBuffer = function (t) {
            +t != t && (t = 0);
            return c.alloc(+t);
          }),
          (n.INSPECT_MAX_BYTES = 50),
          (c.TYPED_ARRAY_SUPPORT =
            void 0 !== t.TYPED_ARRAY_SUPPORT
              ? t.TYPED_ARRAY_SUPPORT
              : (function () {
                  try {
                    var t = new Uint8Array(1);
                    return (
                      (t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function () {
                          return 42;
                        },
                      }),
                      42 === t.foo() &&
                        "function" == typeof t.subarray &&
                        0 === t.subarray(1, 1).byteLength
                    );
                  } catch (t) {
                    return !1;
                  }
                })()),
          (n.kMaxLength = u()),
          (c.poolSize = 8192),
          (c._augment = function (t) {
            return (t.__proto__ = c.prototype), t;
          }),
          (c.from = function (t, n, e) {
            return f(null, t, n, e);
          }),
          c.TYPED_ARRAY_SUPPORT &&
            ((c.prototype.__proto__ = Uint8Array.prototype),
            (c.__proto__ = Uint8Array),
            "undefined" != typeof Symbol &&
              Symbol.species &&
              c[Symbol.species] === c &&
              Object.defineProperty(c, Symbol.species, {
                value: null,
                configurable: !0,
              })),
          (c.alloc = function (t, n, e) {
            return (function (t, n, e, r) {
              return (
                s(n),
                n <= 0
                  ? a(t, n)
                  : void 0 !== e
                  ? "string" == typeof r
                    ? a(t, n).fill(e, r)
                    : a(t, n).fill(e)
                  : a(t, n)
              );
            })(null, t, n, e);
          }),
          (c.allocUnsafe = function (t) {
            return l(null, t);
          }),
          (c.allocUnsafeSlow = function (t) {
            return l(null, t);
          }),
          (c.isBuffer = function (t) {
            return !(null == t || !t._isBuffer);
          }),
          (c.compare = function (t, n) {
            if (!c.isBuffer(t) || !c.isBuffer(n))
              throw new TypeError("Arguments must be Buffers");
            if (t === n) return 0;
            for (
              var e = t.length, r = n.length, o = 0, i = Math.min(e, r);
              o < i;
              ++o
            )
              if (t[o] !== n[o]) {
                (e = t[o]), (r = n[o]);
                break;
              }
            return e < r ? -1 : r < e ? 1 : 0;
          }),
          (c.isEncoding = function (t) {
            switch (String(t).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (c.concat = function (t, n) {
            if (!i(t))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            if (0 === t.length) return c.alloc(0);
            var e;
            if (void 0 === n)
              for (n = 0, e = 0; e < t.length; ++e) n += t[e].length;
            var r = c.allocUnsafe(n),
              o = 0;
            for (e = 0; e < t.length; ++e) {
              var u = t[e];
              if (!c.isBuffer(u))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              u.copy(r, o), (o += u.length);
            }
            return r;
          }),
          (c.byteLength = d),
          (c.prototype._isBuffer = !0),
          (c.prototype.swap16 = function () {
            var t = this.length;
            if (t % 2 != 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var n = 0; n < t; n += 2) y(this, n, n + 1);
            return this;
          }),
          (c.prototype.swap32 = function () {
            var t = this.length;
            if (t % 4 != 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var n = 0; n < t; n += 4)
              y(this, n, n + 3), y(this, n + 1, n + 2);
            return this;
          }),
          (c.prototype.swap64 = function () {
            var t = this.length;
            if (t % 8 != 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var n = 0; n < t; n += 8)
              y(this, n, n + 7),
                y(this, n + 1, n + 6),
                y(this, n + 2, n + 5),
                y(this, n + 3, n + 4);
            return this;
          }),
          (c.prototype.toString = function () {
            var t = 0 | this.length;
            return 0 === t
              ? ""
              : 0 === arguments.length
              ? P(this, 0, t)
              : v.apply(this, arguments);
          }),
          (c.prototype.equals = function (t) {
            if (!c.isBuffer(t))
              throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === c.compare(this, t);
          }),
          (c.prototype.inspect = function () {
            var t = "",
              e = n.INSPECT_MAX_BYTES;
            return (
              this.length > 0 &&
                ((t = this.toString("hex", 0, e).match(/.{2}/g).join(" ")),
                this.length > e && (t += " ... ")),
              "<Buffer " + t + ">"
            );
          }),
          (c.prototype.compare = function (t, n, e, r, o) {
            if (!c.isBuffer(t))
              throw new TypeError("Argument must be a Buffer");
            if (
              (void 0 === n && (n = 0),
              void 0 === e && (e = t ? t.length : 0),
              void 0 === r && (r = 0),
              void 0 === o && (o = this.length),
              n < 0 || e > t.length || r < 0 || o > this.length)
            )
              throw new RangeError("out of range index");
            if (r >= o && n >= e) return 0;
            if (r >= o) return -1;
            if (n >= e) return 1;
            if (this === t) return 0;
            for (
              var i = (o >>>= 0) - (r >>>= 0),
                u = (e >>>= 0) - (n >>>= 0),
                a = Math.min(i, u),
                f = this.slice(r, o),
                s = t.slice(n, e),
                l = 0;
              l < a;
              ++l
            )
              if (f[l] !== s[l]) {
                (i = f[l]), (u = s[l]);
                break;
              }
            return i < u ? -1 : u < i ? 1 : 0;
          }),
          (c.prototype.includes = function (t, n, e) {
            return -1 !== this.indexOf(t, n, e);
          }),
          (c.prototype.indexOf = function (t, n, e) {
            return w(this, t, n, e, !0);
          }),
          (c.prototype.lastIndexOf = function (t, n, e) {
            return w(this, t, n, e, !1);
          }),
          (c.prototype.write = function (t, n, e, r) {
            if (void 0 === n) (r = "utf8"), (e = this.length), (n = 0);
            else if (void 0 === e && "string" == typeof n)
              (r = n), (e = this.length), (n = 0);
            else {
              if (!isFinite(n))
                throw new Error(
                  "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                );
              (n |= 0),
                isFinite(e)
                  ? ((e |= 0), void 0 === r && (r = "utf8"))
                  : ((r = e), (e = void 0));
            }
            var o = this.length - n;
            if (
              ((void 0 === e || e > o) && (e = o),
              (t.length > 0 && (e < 0 || n < 0)) || n > this.length)
            )
              throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var i = !1; ; )
              switch (r) {
                case "hex":
                  return m(this, t, n, e);
                case "utf8":
                case "utf-8":
                  return b(this, t, n, e);
                case "ascii":
                  return _(this, t, n, e);
                case "latin1":
                case "binary":
                  return x(this, t, n, e);
                case "base64":
                  return j(this, t, n, e);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return E(this, t, n, e);
                default:
                  if (i) throw new TypeError("Unknown encoding: " + r);
                  (r = ("" + r).toLowerCase()), (i = !0);
              }
          }),
          (c.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        function A(t, n, e) {
          var r = "";
          e = Math.min(t.length, e);
          for (var o = n; o < e; ++o) r += String.fromCharCode(127 & t[o]);
          return r;
        }
        function S(t, n, e) {
          var r = "";
          e = Math.min(t.length, e);
          for (var o = n; o < e; ++o) r += String.fromCharCode(t[o]);
          return r;
        }
        function k(t, n, e) {
          var r = t.length;
          (!n || n < 0) && (n = 0), (!e || e < 0 || e > r) && (e = r);
          for (var o = "", i = n; i < e; ++i) o += U(t[i]);
          return o;
        }
        function T(t, n, e) {
          for (var r = t.slice(n, e), o = "", i = 0; i < r.length; i += 2)
            o += String.fromCharCode(r[i] + 256 * r[i + 1]);
          return o;
        }
        function R(t, n, e) {
          if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
          if (t + n > e)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function W(t, n, e, r, o, i) {
          if (!c.isBuffer(t))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (n > o || n < i)
            throw new RangeError('"value" argument is out of bounds');
          if (e + r > t.length) throw new RangeError("Index out of range");
        }
        function I(t, n, e, r) {
          n < 0 && (n = 65535 + n + 1);
          for (var o = 0, i = Math.min(t.length - e, 2); o < i; ++o)
            t[e + o] =
              (n & (255 << (8 * (r ? o : 1 - o)))) >>> (8 * (r ? o : 1 - o));
        }
        function D(t, n, e, r) {
          n < 0 && (n = 4294967295 + n + 1);
          for (var o = 0, i = Math.min(t.length - e, 4); o < i; ++o)
            t[e + o] = (n >>> (8 * (r ? o : 3 - o))) & 255;
        }
        function C(t, n, e, r, o, i) {
          if (e + r > t.length) throw new RangeError("Index out of range");
          if (e < 0) throw new RangeError("Index out of range");
        }
        function M(t, n, e, r, i) {
          return i || C(t, 0, e, 4), o.write(t, n, e, r, 23, 4), e + 4;
        }
        function B(t, n, e, r, i) {
          return i || C(t, 0, e, 8), o.write(t, n, e, r, 52, 8), e + 8;
        }
        (c.prototype.slice = function (t, n) {
          var e,
            r = this.length;
          if (
            ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            (n = void 0 === n ? r : ~~n) < 0
              ? (n += r) < 0 && (n = 0)
              : n > r && (n = r),
            n < t && (n = t),
            c.TYPED_ARRAY_SUPPORT)
          )
            (e = this.subarray(t, n)).__proto__ = c.prototype;
          else {
            var o = n - t;
            e = new c(o, void 0);
            for (var i = 0; i < o; ++i) e[i] = this[i + t];
          }
          return e;
        }),
          (c.prototype.readUIntLE = function (t, n, e) {
            (t |= 0), (n |= 0), e || R(t, n, this.length);
            for (var r = this[t], o = 1, i = 0; ++i < n && (o *= 256); )
              r += this[t + i] * o;
            return r;
          }),
          (c.prototype.readUIntBE = function (t, n, e) {
            (t |= 0), (n |= 0), e || R(t, n, this.length);
            for (var r = this[t + --n], o = 1; n > 0 && (o *= 256); )
              r += this[t + --n] * o;
            return r;
          }),
          (c.prototype.readUInt8 = function (t, n) {
            return n || R(t, 1, this.length), this[t];
          }),
          (c.prototype.readUInt16LE = function (t, n) {
            return n || R(t, 2, this.length), this[t] | (this[t + 1] << 8);
          }),
          (c.prototype.readUInt16BE = function (t, n) {
            return n || R(t, 2, this.length), (this[t] << 8) | this[t + 1];
          }),
          (c.prototype.readUInt32LE = function (t, n) {
            return (
              n || R(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            );
          }),
          (c.prototype.readUInt32BE = function (t, n) {
            return (
              n || R(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
          (c.prototype.readIntLE = function (t, n, e) {
            (t |= 0), (n |= 0), e || R(t, n, this.length);
            for (var r = this[t], o = 1, i = 0; ++i < n && (o *= 256); )
              r += this[t + i] * o;
            return r >= (o *= 128) && (r -= Math.pow(2, 8 * n)), r;
          }),
          (c.prototype.readIntBE = function (t, n, e) {
            (t |= 0), (n |= 0), e || R(t, n, this.length);
            for (var r = n, o = 1, i = this[t + --r]; r > 0 && (o *= 256); )
              i += this[t + --r] * o;
            return i >= (o *= 128) && (i -= Math.pow(2, 8 * n)), i;
          }),
          (c.prototype.readInt8 = function (t, n) {
            return (
              n || R(t, 1, this.length),
              128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            );
          }),
          (c.prototype.readInt16LE = function (t, n) {
            n || R(t, 2, this.length);
            var e = this[t] | (this[t + 1] << 8);
            return 32768 & e ? 4294901760 | e : e;
          }),
          (c.prototype.readInt16BE = function (t, n) {
            n || R(t, 2, this.length);
            var e = this[t + 1] | (this[t] << 8);
            return 32768 & e ? 4294901760 | e : e;
          }),
          (c.prototype.readInt32LE = function (t, n) {
            return (
              n || R(t, 4, this.length),
              this[t] |
                (this[t + 1] << 8) |
                (this[t + 2] << 16) |
                (this[t + 3] << 24)
            );
          }),
          (c.prototype.readInt32BE = function (t, n) {
            return (
              n || R(t, 4, this.length),
              (this[t] << 24) |
                (this[t + 1] << 16) |
                (this[t + 2] << 8) |
                this[t + 3]
            );
          }),
          (c.prototype.readFloatLE = function (t, n) {
            return n || R(t, 4, this.length), o.read(this, t, !0, 23, 4);
          }),
          (c.prototype.readFloatBE = function (t, n) {
            return n || R(t, 4, this.length), o.read(this, t, !1, 23, 4);
          }),
          (c.prototype.readDoubleLE = function (t, n) {
            return n || R(t, 8, this.length), o.read(this, t, !0, 52, 8);
          }),
          (c.prototype.readDoubleBE = function (t, n) {
            return n || R(t, 8, this.length), o.read(this, t, !1, 52, 8);
          }),
          (c.prototype.writeUIntLE = function (t, n, e, r) {
            ((t = +t), (n |= 0), (e |= 0), r) ||
              W(this, t, n, e, Math.pow(2, 8 * e) - 1, 0);
            var o = 1,
              i = 0;
            for (this[n] = 255 & t; ++i < e && (o *= 256); )
              this[n + i] = (t / o) & 255;
            return n + e;
          }),
          (c.prototype.writeUIntBE = function (t, n, e, r) {
            ((t = +t), (n |= 0), (e |= 0), r) ||
              W(this, t, n, e, Math.pow(2, 8 * e) - 1, 0);
            var o = e - 1,
              i = 1;
            for (this[n + o] = 255 & t; --o >= 0 && (i *= 256); )
              this[n + o] = (t / i) & 255;
            return n + e;
          }),
          (c.prototype.writeUInt8 = function (t, n, e) {
            return (
              (t = +t),
              (n |= 0),
              e || W(this, t, n, 1, 255, 0),
              c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              (this[n] = 255 & t),
              n + 1
            );
          }),
          (c.prototype.writeUInt16LE = function (t, n, e) {
            return (
              (t = +t),
              (n |= 0),
              e || W(this, t, n, 2, 65535, 0),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[n] = 255 & t), (this[n + 1] = t >>> 8))
                : I(this, t, n, !0),
              n + 2
            );
          }),
          (c.prototype.writeUInt16BE = function (t, n, e) {
            return (
              (t = +t),
              (n |= 0),
              e || W(this, t, n, 2, 65535, 0),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[n] = t >>> 8), (this[n + 1] = 255 & t))
                : I(this, t, n, !1),
              n + 2
            );
          }),
          (c.prototype.writeUInt32LE = function (t, n, e) {
            return (
              (t = +t),
              (n |= 0),
              e || W(this, t, n, 4, 4294967295, 0),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[n + 3] = t >>> 24),
                  (this[n + 2] = t >>> 16),
                  (this[n + 1] = t >>> 8),
                  (this[n] = 255 & t))
                : D(this, t, n, !0),
              n + 4
            );
          }),
          (c.prototype.writeUInt32BE = function (t, n, e) {
            return (
              (t = +t),
              (n |= 0),
              e || W(this, t, n, 4, 4294967295, 0),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[n] = t >>> 24),
                  (this[n + 1] = t >>> 16),
                  (this[n + 2] = t >>> 8),
                  (this[n + 3] = 255 & t))
                : D(this, t, n, !1),
              n + 4
            );
          }),
          (c.prototype.writeIntLE = function (t, n, e, r) {
            if (((t = +t), (n |= 0), !r)) {
              var o = Math.pow(2, 8 * e - 1);
              W(this, t, n, e, o - 1, -o);
            }
            var i = 0,
              u = 1,
              a = 0;
            for (this[n] = 255 & t; ++i < e && (u *= 256); )
              t < 0 && 0 === a && 0 !== this[n + i - 1] && (a = 1),
                (this[n + i] = (((t / u) >> 0) - a) & 255);
            return n + e;
          }),
          (c.prototype.writeIntBE = function (t, n, e, r) {
            if (((t = +t), (n |= 0), !r)) {
              var o = Math.pow(2, 8 * e - 1);
              W(this, t, n, e, o - 1, -o);
            }
            var i = e - 1,
              u = 1,
              a = 0;
            for (this[n + i] = 255 & t; --i >= 0 && (u *= 256); )
              t < 0 && 0 === a && 0 !== this[n + i + 1] && (a = 1),
                (this[n + i] = (((t / u) >> 0) - a) & 255);
            return n + e;
          }),
          (c.prototype.writeInt8 = function (t, n, e) {
            return (
              (t = +t),
              (n |= 0),
              e || W(this, t, n, 1, 127, -128),
              c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              t < 0 && (t = 255 + t + 1),
              (this[n] = 255 & t),
              n + 1
            );
          }),
          (c.prototype.writeInt16LE = function (t, n, e) {
            return (
              (t = +t),
              (n |= 0),
              e || W(this, t, n, 2, 32767, -32768),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[n] = 255 & t), (this[n + 1] = t >>> 8))
                : I(this, t, n, !0),
              n + 2
            );
          }),
          (c.prototype.writeInt16BE = function (t, n, e) {
            return (
              (t = +t),
              (n |= 0),
              e || W(this, t, n, 2, 32767, -32768),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[n] = t >>> 8), (this[n + 1] = 255 & t))
                : I(this, t, n, !1),
              n + 2
            );
          }),
          (c.prototype.writeInt32LE = function (t, n, e) {
            return (
              (t = +t),
              (n |= 0),
              e || W(this, t, n, 4, 2147483647, -2147483648),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[n] = 255 & t),
                  (this[n + 1] = t >>> 8),
                  (this[n + 2] = t >>> 16),
                  (this[n + 3] = t >>> 24))
                : D(this, t, n, !0),
              n + 4
            );
          }),
          (c.prototype.writeInt32BE = function (t, n, e) {
            return (
              (t = +t),
              (n |= 0),
              e || W(this, t, n, 4, 2147483647, -2147483648),
              t < 0 && (t = 4294967295 + t + 1),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[n] = t >>> 24),
                  (this[n + 1] = t >>> 16),
                  (this[n + 2] = t >>> 8),
                  (this[n + 3] = 255 & t))
                : D(this, t, n, !1),
              n + 4
            );
          }),
          (c.prototype.writeFloatLE = function (t, n, e) {
            return M(this, t, n, !0, e);
          }),
          (c.prototype.writeFloatBE = function (t, n, e) {
            return M(this, t, n, !1, e);
          }),
          (c.prototype.writeDoubleLE = function (t, n, e) {
            return B(this, t, n, !0, e);
          }),
          (c.prototype.writeDoubleBE = function (t, n, e) {
            return B(this, t, n, !1, e);
          }),
          (c.prototype.copy = function (t, n, e, r) {
            if (
              (e || (e = 0),
              r || 0 === r || (r = this.length),
              n >= t.length && (n = t.length),
              n || (n = 0),
              r > 0 && r < e && (r = e),
              r === e)
            )
              return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (n < 0) throw new RangeError("targetStart out of bounds");
            if (e < 0 || e >= this.length)
              throw new RangeError("sourceStart out of bounds");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length),
              t.length - n < r - e && (r = t.length - n + e);
            var o,
              i = r - e;
            if (this === t && e < n && n < r)
              for (o = i - 1; o >= 0; --o) t[o + n] = this[o + e];
            else if (i < 1e3 || !c.TYPED_ARRAY_SUPPORT)
              for (o = 0; o < i; ++o) t[o + n] = this[o + e];
            else Uint8Array.prototype.set.call(t, this.subarray(e, e + i), n);
            return i;
          }),
          (c.prototype.fill = function (t, n, e, r) {
            if ("string" == typeof t) {
              if (
                ("string" == typeof n
                  ? ((r = n), (n = 0), (e = this.length))
                  : "string" == typeof e && ((r = e), (e = this.length)),
                1 === t.length)
              ) {
                var o = t.charCodeAt(0);
                o < 256 && (t = o);
              }
              if (void 0 !== r && "string" != typeof r)
                throw new TypeError("encoding must be a string");
              if ("string" == typeof r && !c.isEncoding(r))
                throw new TypeError("Unknown encoding: " + r);
            } else "number" == typeof t && (t &= 255);
            if (n < 0 || this.length < n || this.length < e)
              throw new RangeError("Out of range index");
            if (e <= n) return this;
            var i;
            if (
              ((n >>>= 0),
              (e = void 0 === e ? this.length : e >>> 0),
              t || (t = 0),
              "number" == typeof t)
            )
              for (i = n; i < e; ++i) this[i] = t;
            else {
              var u = c.isBuffer(t) ? t : z(new c(t, r).toString()),
                a = u.length;
              for (i = 0; i < e - n; ++i) this[i + n] = u[i % a];
            }
            return this;
          });
        var L = /[^+\/0-9A-Za-z-_]/g;
        function U(t) {
          return t < 16 ? "0" + t.toString(16) : t.toString(16);
        }
        function z(t, n) {
          var e;
          n = n || 1 / 0;
          for (var r = t.length, o = null, i = [], u = 0; u < r; ++u) {
            if ((e = t.charCodeAt(u)) > 55295 && e < 57344) {
              if (!o) {
                if (e > 56319) {
                  (n -= 3) > -1 && i.push(239, 191, 189);
                  continue;
                }
                if (u + 1 === r) {
                  (n -= 3) > -1 && i.push(239, 191, 189);
                  continue;
                }
                o = e;
                continue;
              }
              if (e < 56320) {
                (n -= 3) > -1 && i.push(239, 191, 189), (o = e);
                continue;
              }
              e = 65536 + (((o - 55296) << 10) | (e - 56320));
            } else o && (n -= 3) > -1 && i.push(239, 191, 189);
            if (((o = null), e < 128)) {
              if ((n -= 1) < 0) break;
              i.push(e);
            } else if (e < 2048) {
              if ((n -= 2) < 0) break;
              i.push((e >> 6) | 192, (63 & e) | 128);
            } else if (e < 65536) {
              if ((n -= 3) < 0) break;
              i.push((e >> 12) | 224, ((e >> 6) & 63) | 128, (63 & e) | 128);
            } else {
              if (!(e < 1114112)) throw new Error("Invalid code point");
              if ((n -= 4) < 0) break;
              i.push(
                (e >> 18) | 240,
                ((e >> 12) & 63) | 128,
                ((e >> 6) & 63) | 128,
                (63 & e) | 128
              );
            }
          }
          return i;
        }
        function N(t) {
          return r.toByteArray(
            (function (t) {
              if (
                (t = (function (t) {
                  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
                })(t).replace(L, "")).length < 2
              )
                return "";
              for (; t.length % 4 != 0; ) t += "=";
              return t;
            })(t)
          );
        }
        function Y(t, n, e, r) {
          for (var o = 0; o < r && !(o + e >= n.length || o >= t.length); ++o)
            n[o + e] = t[o];
          return o;
        }
      }).call(this, e(10));
    },
    function (t, n, e) {
      "use strict";
      (n.byteLength = function (t) {
        var n = f(t),
          e = n[0],
          r = n[1];
        return (3 * (e + r)) / 4 - r;
      }),
        (n.toByteArray = function (t) {
          var n,
            e,
            r = f(t),
            u = r[0],
            a = r[1],
            c = new i(
              (function (t, n, e) {
                return (3 * (n + e)) / 4 - e;
              })(0, u, a)
            ),
            s = 0,
            l = a > 0 ? u - 4 : u;
          for (e = 0; e < l; e += 4)
            (n =
              (o[t.charCodeAt(e)] << 18) |
              (o[t.charCodeAt(e + 1)] << 12) |
              (o[t.charCodeAt(e + 2)] << 6) |
              o[t.charCodeAt(e + 3)]),
              (c[s++] = (n >> 16) & 255),
              (c[s++] = (n >> 8) & 255),
              (c[s++] = 255 & n);
          2 === a &&
            ((n = (o[t.charCodeAt(e)] << 2) | (o[t.charCodeAt(e + 1)] >> 4)),
            (c[s++] = 255 & n));
          1 === a &&
            ((n =
              (o[t.charCodeAt(e)] << 10) |
              (o[t.charCodeAt(e + 1)] << 4) |
              (o[t.charCodeAt(e + 2)] >> 2)),
            (c[s++] = (n >> 8) & 255),
            (c[s++] = 255 & n));
          return c;
        }),
        (n.fromByteArray = function (t) {
          for (
            var n, e = t.length, o = e % 3, i = [], u = 0, a = e - o;
            u < a;
            u += 16383
          )
            i.push(s(t, u, u + 16383 > a ? a : u + 16383));
          1 === o
            ? ((n = t[e - 1]), i.push(r[n >> 2] + r[(n << 4) & 63] + "=="))
            : 2 === o &&
              ((n = (t[e - 2] << 8) + t[e - 1]),
              i.push(r[n >> 10] + r[(n >> 4) & 63] + r[(n << 2) & 63] + "="));
          return i.join("");
        });
      for (
        var r = [],
          o = [],
          i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          u =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          a = 0,
          c = u.length;
        a < c;
        ++a
      )
        (r[a] = u[a]), (o[u.charCodeAt(a)] = a);
      function f(t) {
        var n = t.length;
        if (n % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var e = t.indexOf("=");
        return -1 === e && (e = n), [e, e === n ? 0 : 4 - (e % 4)];
      }
      function s(t, n, e) {
        for (var o, i, u = [], a = n; a < e; a += 3)
          (o =
            ((t[a] << 16) & 16711680) +
            ((t[a + 1] << 8) & 65280) +
            (255 & t[a + 2])),
            u.push(
              r[((i = o) >> 18) & 63] +
                r[(i >> 12) & 63] +
                r[(i >> 6) & 63] +
                r[63 & i]
            );
        return u.join("");
      }
      (o["-".charCodeAt(0)] = 62), (o["_".charCodeAt(0)] = 63);
    },
    function (t, n) {
      (n.read = function (t, n, e, r, o) {
        var i,
          u,
          a = 8 * o - r - 1,
          c = (1 << a) - 1,
          f = c >> 1,
          s = -7,
          l = e ? o - 1 : 0,
          h = e ? -1 : 1,
          p = t[n + l];
        for (
          l += h, i = p & ((1 << -s) - 1), p >>= -s, s += a;
          s > 0;
          i = 256 * i + t[n + l], l += h, s -= 8
        );
        for (
          u = i & ((1 << -s) - 1), i >>= -s, s += r;
          s > 0;
          u = 256 * u + t[n + l], l += h, s -= 8
        );
        if (0 === i) i = 1 - f;
        else {
          if (i === c) return u ? NaN : (1 / 0) * (p ? -1 : 1);
          (u += Math.pow(2, r)), (i -= f);
        }
        return (p ? -1 : 1) * u * Math.pow(2, i - r);
      }),
        (n.write = function (t, n, e, r, o, i) {
          var u,
            a,
            c,
            f = 8 * i - o - 1,
            s = (1 << f) - 1,
            l = s >> 1,
            h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = r ? 0 : i - 1,
            d = r ? 1 : -1,
            v = n < 0 || (0 === n && 1 / n < 0) ? 1 : 0;
          for (
            n = Math.abs(n),
              isNaN(n) || n === 1 / 0
                ? ((a = isNaN(n) ? 1 : 0), (u = s))
                : ((u = Math.floor(Math.log(n) / Math.LN2)),
                  n * (c = Math.pow(2, -u)) < 1 && (u--, (c *= 2)),
                  (n += u + l >= 1 ? h / c : h * Math.pow(2, 1 - l)) * c >= 2 &&
                    (u++, (c /= 2)),
                  u + l >= s
                    ? ((a = 0), (u = s))
                    : u + l >= 1
                    ? ((a = (n * c - 1) * Math.pow(2, o)), (u += l))
                    : ((a = n * Math.pow(2, l - 1) * Math.pow(2, o)), (u = 0)));
            o >= 8;
            t[e + p] = 255 & a, p += d, a /= 256, o -= 8
          );
          for (
            u = (u << o) | a, f += o;
            f > 0;
            t[e + p] = 255 & u, p += d, u /= 256, f -= 8
          );
          t[e + p - d] |= 128 * v;
        });
    },
    function (t, n) {
      var e = {}.toString;
      t.exports =
        Array.isArray ||
        function (t) {
          return "[object Array]" == e.call(t);
        };
    },
    function (t, n, e) {
      var r = e(27),
        o = e(56),
        i = e(35),
        u = e(166),
        a = e(2),
        c = e(60),
        f = e(59);
      t.exports = function t(n, e, s, l, h) {
        n !== e &&
          i(
            e,
            function (i, c) {
              if ((h || (h = new r()), a(i))) u(n, e, c, s, t, l, h);
              else {
                var p = l ? l(f(n, c), i, c + "", n, e, h) : void 0;
                void 0 === p && (p = i), o(n, c, p);
              }
            },
            c
          );
      };
    },
    function (t, n, e) {
      var r = e(56),
        o = e(167),
        i = e(168),
        u = e(170),
        a = e(171),
        c = e(19),
        f = e(0),
        s = e(173),
        l = e(20),
        h = e(26),
        p = e(2),
        d = e(174),
        v = e(23),
        y = e(59),
        w = e(175);
      t.exports = function (t, n, e, g, m, b, _) {
        var x = y(t, e),
          j = y(n, e),
          E = _.get(j);
        if (E) r(t, e, E);
        else {
          var O = b ? b(x, j, e + "", t, n, _) : void 0,
            P = void 0 === O;
          if (P) {
            var A = f(j),
              S = !A && l(j),
              k = !A && !S && v(j);
            (O = j),
              A || S || k
                ? f(x)
                  ? (O = x)
                  : s(x)
                  ? (O = u(x))
                  : S
                  ? ((P = !1), (O = o(j, !0)))
                  : k
                  ? ((P = !1), (O = i(j, !0)))
                  : (O = [])
                : d(j) || c(j)
                ? ((O = x), c(x) ? (O = w(x)) : (p(x) && !h(x)) || (O = a(j)))
                : (P = !1);
          }
          P && (_.set(j, O), m(O, j, g, b, _), _.delete(j)), r(t, e, O);
        }
      };
    },
    function (t, n, e) {
      (function (t) {
        var r = e(1),
          o = n && !n.nodeType && n,
          i = o && "object" == typeof t && t && !t.nodeType && t,
          u = i && i.exports === o ? r.Buffer : void 0,
          a = u ? u.allocUnsafe : void 0;
        t.exports = function (t, n) {
          if (n) return t.slice();
          var e = t.length,
            r = a ? a(e) : new t.constructor(e);
          return t.copy(r), r;
        };
      }).call(this, e(21)(t));
    },
    function (t, n, e) {
      var r = e(169);
      t.exports = function (t, n) {
        var e = n ? r(t.buffer) : t.buffer;
        return new t.constructor(e, t.byteOffset, t.length);
      };
    },
    function (t, n, e) {
      var r = e(43);
      t.exports = function (t) {
        var n = new t.constructor(t.byteLength);
        return new r(n).set(new r(t)), n;
      };
    },
    function (t, n) {
      t.exports = function (t, n) {
        var e = -1,
          r = t.length;
        for (n || (n = Array(r)); ++e < r; ) n[e] = t[e];
        return n;
      };
    },
    function (t, n, e) {
      var r = e(172),
        o = e(58),
        i = e(25);
      t.exports = function (t) {
        return "function" != typeof t.constructor || i(t) ? {} : r(o(t));
      };
    },
    function (t, n, e) {
      var r = e(2),
        o = Object.create,
        i = (function () {
          function t() {}
          return function (n) {
            if (!r(n)) return {};
            if (o) return o(n);
            t.prototype = n;
            var e = new t();
            return (t.prototype = void 0), e;
          };
        })();
      t.exports = i;
    },
    function (t, n, e) {
      var r = e(8),
        o = e(4);
      t.exports = function (t) {
        return o(t) && r(t);
      };
    },
    function (t, n, e) {
      var r = e(7),
        o = e(58),
        i = e(4),
        u = Function.prototype,
        a = Object.prototype,
        c = u.toString,
        f = a.hasOwnProperty,
        s = c.call(Object);
      t.exports = function (t) {
        if (!i(t) || "[object Object]" != r(t)) return !1;
        var n = o(t);
        if (null === n) return !0;
        var e = f.call(n, "constructor") && n.constructor;
        return "function" == typeof e && e instanceof e && c.call(e) == s;
      };
    },
    function (t, n, e) {
      var r = e(176),
        o = e(60);
      t.exports = function (t) {
        return r(t, o(t));
      };
    },
    function (t, n, e) {
      var r = e(177),
        o = e(32);
      t.exports = function (t, n, e, i) {
        var u = !e;
        e || (e = {});
        for (var a = -1, c = n.length; ++a < c; ) {
          var f = n[a],
            s = i ? i(e[f], t[f], f, e, t) : void 0;
          void 0 === s && (s = t[f]), u ? o(e, f, s) : r(e, f, s);
        }
        return e;
      };
    },
    function (t, n, e) {
      var r = e(32),
        o = e(9),
        i = Object.prototype.hasOwnProperty;
      t.exports = function (t, n, e) {
        var u = t[n];
        (i.call(t, n) && o(u, e) && (void 0 !== e || n in t)) || r(t, n, e);
      };
    },
    function (t, n, e) {
      var r = e(2),
        o = e(25),
        i = e(179),
        u = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        if (!r(t)) return i(t);
        var n = o(t),
          e = [];
        for (var a in t)
          ("constructor" != a || (!n && u.call(t, a))) && e.push(a);
        return e;
      };
    },
    function (t, n) {
      t.exports = function (t) {
        var n = [];
        if (null != t) for (var e in Object(t)) n.push(e);
        return n;
      };
    },
    function (t, n, e) {
      var r = e(181),
        o = e(188);
      t.exports = function (t) {
        return r(function (n, e) {
          var r = -1,
            i = e.length,
            u = i > 1 ? e[i - 1] : void 0,
            a = i > 2 ? e[2] : void 0;
          for (
            u = t.length > 3 && "function" == typeof u ? (i--, u) : void 0,
              a && o(e[0], e[1], a) && ((u = i < 3 ? void 0 : u), (i = 1)),
              n = Object(n);
            ++r < i;

          ) {
            var c = e[r];
            c && t(n, c, r, u);
          }
          return n;
        });
      };
    },
    function (t, n, e) {
      var r = e(12),
        o = e(182),
        i = e(184);
      t.exports = function (t, n) {
        return i(o(t, n, r), t + "");
      };
    },
    function (t, n, e) {
      var r = e(183),
        o = Math.max;
      t.exports = function (t, n, e) {
        return (
          (n = o(void 0 === n ? t.length - 1 : n, 0)),
          function () {
            for (
              var i = arguments, u = -1, a = o(i.length - n, 0), c = Array(a);
              ++u < a;

            )
              c[u] = i[n + u];
            u = -1;
            for (var f = Array(n + 1); ++u < n; ) f[u] = i[u];
            return (f[n] = e(c)), r(t, this, f);
          }
        );
      };
    },
    function (t, n) {
      t.exports = function (t, n, e) {
        switch (e.length) {
          case 0:
            return t.call(n);
          case 1:
            return t.call(n, e[0]);
          case 2:
            return t.call(n, e[0], e[1]);
          case 3:
            return t.call(n, e[0], e[1], e[2]);
        }
        return t.apply(n, e);
      };
    },
    function (t, n, e) {
      var r = e(185),
        o = e(187)(r);
      t.exports = o;
    },
    function (t, n, e) {
      var r = e(186),
        o = e(57),
        i = e(12),
        u = o
          ? function (t, n) {
              return o(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: r(n),
                writable: !0,
              });
            }
          : i;
      t.exports = u;
    },
    function (t, n) {
      t.exports = function (t) {
        return function () {
          return t;
        };
      };
    },
    function (t, n) {
      var e = Date.now;
      t.exports = function (t) {
        var n = 0,
          r = 0;
        return function () {
          var o = e(),
            i = 16 - (o - r);
          if (((r = o), i > 0)) {
            if (++n >= 800) return arguments[0];
          } else n = 0;
          return t.apply(void 0, arguments);
        };
      };
    },
    function (t, n, e) {
      var r = e(9),
        o = e(8),
        i = e(22),
        u = e(2);
      t.exports = function (t, n, e) {
        if (!u(e)) return !1;
        var a = typeof n;
        return (
          !!("number" == a
            ? o(e) && i(n, e.length)
            : "string" == a && n in e) && r(e[n], t)
        );
      };
    },
    function (t, n, e) {
      "use strict";
      e.r(n);
      var r = {};
      e.r(r),
        e.d(r, "app", function () {
          return u;
        });
      e(67);
      var o = e(6),
        i = e.n(o),
        u = {
          merchant: "",
          language: "en",
          iframeHost:
            window.TWO_PAY_IFRAME_HOST ||
            "https://2pay-js.2checkout.com/v1/private.html",
          stylingDisabled: !1,
          version: "1",
        },
        a = e(62),
        c = e.n(a),
        f = e(63),
        s = e.n(f),
        l = e(64),
        h = e.n(l);
      function p(t) {
        return (p =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function d(t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          e = w(t);
        return n || (n = document.body), n.appendChild(e), e;
      }
      function v(t, n) {
        var e,
          r = (e = t) instanceof HTMLElement ? e : document.querySelector(e);
        if (r && "object" === p(n))
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) &&
              (r.style[m(o)] = n[o]);
        return r;
      }
      function y(t, n) {
        null == n && (n = {});
        var e = Object.keys(n)
            .map(function (t) {
              return null === n[t] ? null : t + "=" + n[t];
            })
            .filter(function (t) {
              return null !== t;
            })
            .join("&"),
          r = s()(t, function (t) {
            return h()(t, "/");
          }).join("/");
        return e.length > 0 && (r = r + "?" + e), r;
      }
      function w(t) {
        if ("string" == typeof t) return document.createTextNode(t);
        var n = document.createElement(t.type);
        return (
          t.children && c()(t.children.map(w), n.appendChild.bind(n)),
          (function (t, n) {
            for (var e in n)
              if (Object.prototype.hasOwnProperty.call(n, e)) {
                var r = e,
                  o = n[e];
                switch (r) {
                  case "className":
                    r = "class";
                    break;
                  case "style":
                    o = g(n[e]);
                }
                var i = document.createAttribute(r);
                (i.value = o), t.setAttributeNode(i);
              }
          })(n, t.props),
          n
        );
      }
      function g(t) {
        var n = [];
        for (var e in t)
          "string" == typeof t[e] && n.push("".concat(m(e), ": ").concat(t[e]));
        return n.join("; ");
      }
      function m(t) {
        return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      }
      var b = e(3),
        _ = e.n(b),
        x = (e(51), e(52), e(53), e(54), e(55), e(65)),
        j = e.n(x),
        E = e(66),
        O = e.n(E);
      e(61);
      function P(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var A = (function () {
        function t() {
          !(function (t, n) {
            if (!(t instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
        }
        var n, e, r;
        return (
          (n = t),
          (e = [
            {
              key: "map",
              value: function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = {};
                return t
                  ? (Object.hasOwnProperty.call(t, "scope") &&
                      (n.scope = t.scope),
                    n)
                  : n;
              },
            },
          ]) && P(n.prototype, e),
          r && P(n, r),
          t
        );
      })();
      function S(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var k = (function () {
        function t() {
          !(function (t, n) {
            if (!(t instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
        }
        var n, e, r;
        return (
          (n = t),
          (e = [
            {
              key: "map",
              value: function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = {};
                return t
                  ? Object.hasOwnProperty.call(t, "name")
                    ? Object.assign({}, { billing: { name: t.name } })
                    : (Object.hasOwnProperty.call(t, "billing") &&
                        (n = Object.assign({}, { billing: t.billing })),
                      n)
                  : n;
              },
            },
          ]) && S(n.prototype, e),
          r && S(n, r),
          t
        );
      })();
      function T(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var R = (function () {
          function t() {
            !(function (t, n) {
              if (!(t instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.scopeParamMapper = new A()),
              (this.billingParamMapper = new k());
          }
          var n, e, r;
          return (
            (n = t),
            (e = [
              {
                key: "mapParameters",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return O()(
                    {},
                    this.scopeParamMapper.map(t),
                    this.billingParamMapper.map(t)
                  );
                },
              },
            ]) && T(n.prototype, e),
            r && T(n, r),
            t
          );
        })(),
        W = {
          iframe: {
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
            width: "100%",
            height: "100%",
            border: "0px",
            background: "none transparent",
          },
        };
      function I(t, n) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function D(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? I(Object(e), !0).forEach(function (n) {
                C(t, n, e[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : I(Object(e)).forEach(function (n) {
                Object.defineProperty(
                  t,
                  n,
                  Object.getOwnPropertyDescriptor(e, n)
                );
              });
        }
        return t;
      }
      function C(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      function M(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function B(t) {
        return (B =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function L(t, n) {
        if (!(t instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      function U(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function z(t, n, e) {
        return (z =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, n, e) {
                var r = (function (t, n) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, n) &&
                    null !== (t = $(t));

                  );
                  return t;
                })(t, n);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, n);
                  return o.get ? o.get.call(e) : o.value;
                }
              })(t, n, e || t);
      }
      function N(t, n) {
        return (N =
          Object.setPrototypeOf ||
          function (t, n) {
            return (t.__proto__ = n), t;
          })(t, n);
      }
      function Y(t) {
        var n = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var e,
            r = $(t);
          if (n) {
            var o = $(this).constructor;
            e = Reflect.construct(r, arguments, o);
          } else e = r.apply(this, arguments);
          return F(this, e);
        };
      }
      function F(t, n) {
        return !n || ("object" !== B(n) && "function" != typeof n)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : n;
      }
      function $(t) {
        return ($ = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var q = (function (t) {
        !(function (t, n) {
          if ("function" != typeof n && null !== n)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(n && n.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            n && N(t, n);
        })(i, t);
        var n,
          e,
          r,
          o = Y(i);
        function i() {
          return L(this, i), o.apply(this, arguments);
        }
        return (
          (n = i),
          (e = [
            {
              key: "initComponent",
              value: function () {
                var t = this;
                if (
                  (z($(i.prototype), "initComponent", this).call(this),
                  !this.windowData)
                )
                  throw new Error("The window data is not ready");
                var n = {
                    merchantCode: this.$config.app.merchant,
                    language: this.$config.app.language,
                    type: "card",
                    style: this.$style,
                  },
                  e = { domain: this.windowData.domain, timeout: 15e3 };
                return (
                  _.a
                    .send(this.windowData.window, "create:component", n, e)
                    .then(function () {
                      return t.show();
                    })
                    .catch(function () {
                      throw new Error(
                        "Timeout of ".concat(
                          e.timeout,
                          "ms exceeded for iframe initialization"
                        )
                      );
                    }),
                  this
                );
              },
            },
          ]) && U(n.prototype, e),
          r && U(n, r),
          i
        );
      })(
        (function () {
          function t(n, e) {
            !(function (t, n) {
              if (!(t instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.$config = n),
              (this.$style = e);
          }
          var n, e, r;
          return (
            (n = t),
            (e = [
              {
                key: "render",
                value: function () {
                  return (
                    (this.tabbableHiddenInput = d(
                      this.inputTemplate,
                      this.$parentNode
                    )),
                    (this.iframe = d(this.template, this.$parentNode)),
                    this.hide(),
                    this
                  );
                },
              },
              {
                key: "checkRender",
                value: function () {
                  return this.iframe || this.render(), this;
                },
              },
              {
                key: "mount",
                value: function (t) {
                  return (
                    (this.$parentNode = document.querySelector(t)),
                    this.checkRender(),
                    this.initComponent(),
                    this.addHeightEventListener(),
                    this.addTabbableEventListeners(),
                    this
                  );
                },
              },
              {
                key: "initComponent",
                value: function () {
                  return this;
                },
              },
              {
                key: "hide",
                value: function () {
                  return (
                    this.iframe.classList.remove("show-iframe"),
                    this.iframe.classList.add("hide-iframe"),
                    this
                  );
                },
              },
              {
                key: "show",
                value: function () {
                  return (
                    this.iframe.classList.remove("hide-iframe"),
                    this.iframe.classList.add("show-iframe"),
                    this
                  );
                },
              },
              {
                key: "generateToken",
                value: function (t) {
                  var n = this;
                  return new Promise(function (e, r) {
                    if (!n.windowData)
                      return r(new Error("The window is not ready."));
                    var o = new R().mapParameters(t),
                      i = { domain: n.windowData.domain };
                    return _.a
                      .send(n.windowData.window, "generate:token", o, i)
                      .then(function (t) {
                        t.data.token
                          ? e(t.data.token)
                          : r(new Error(t.data.error));
                      })
                      .catch(r);
                  });
                },
              },
              {
                key: "resetForm",
                value: function () {
                  var t = this;
                  return new Promise(function (n, e) {
                    if (!t.windowData)
                      return e(new Error("The window is not ready."));
                    var r = { domain: t.windowData.domain };
                    return _.a
                      .send(t.windowData.window, "form:reset", {}, r)
                      .then(n)
                      .catch(e);
                  });
                },
              },
              {
                key: "addHeightEventListener",
                value: function () {
                  if (!this.windowData)
                    throw new Error("The window data is not ready.");
                  var t = { window: this.windowData.window };
                  return (
                    _.a.on("update:height", t, function (t) {
                      v("#card-element", { height: t.data + "px" });
                    }),
                    this
                  );
                },
              },
              {
                key: "addTabbableEventListeners",
                value: function () {
                  if (!this.windowData)
                    throw new Error("The window data is not ready.");
                  var t = { window: this.windowData.window };
                  return (
                    this.sendFocusEventToIframe(t),
                    this.listenIframeUpperInputFocus(t),
                    this
                  );
                },
              },
              {
                key: "sendFocusEventToIframe",
                value: function (t) {
                  var n = this;
                  this.tabbableHiddenInput.addEventListener(
                    "focus",
                    function () {
                      if (!n.windowData)
                        throw new Error("The window data is not ready.");
                      _.a.send(
                        n.windowData.window,
                        "focusEvent:tab-above-the-iframe",
                        {},
                        t
                      );
                    }
                  );
                },
              },
              {
                key: "listenIframeUpperInputFocus",
                value: function (t) {
                  var n = this;
                  _.a.on(
                    "focusEvent:shift-tab-first-iframe-element",
                    t,
                    function () {
                      n.retrieveAndFocusUpperInput();
                    }
                  );
                },
              },
              {
                key: "retrieveAndFocusUpperInput",
                value: function () {
                  var t = this.getUpperInput();
                  t instanceof HTMLElement && t.focus();
                },
              },
              {
                key: "getTabbableNodes",
                value: function () {
                  return j()(document);
                },
              },
              {
                key: "getUpperInput",
                value: function () {
                  var t = this.getTabbableNodes(),
                    n = t.indexOf(this.tabbableHiddenInput);
                  return n <= 0 ? null : t[n - 1];
                },
              },
              {
                key: "template",
                get: function () {
                  return {
                    type: "iframe",
                    props: D(
                      {
                        id: "two-co-iframe",
                        src: y([this.$config.app.iframeHost], {}),
                        class: "two-co-iframe-template",
                      },
                      this.$config.app.stylingDisabled
                        ? {}
                        : { style: W.iframe }
                    ),
                  };
                },
              },
              {
                key: "inputTemplate",
                get: function () {
                  return {
                    type: "div",
                    props: {
                      id: "2checkout-above-iframe-hidden-tabbable-input",
                      tabIndex: 0,
                      class: "two-co-iframe-hidden-tabbable",
                    },
                  };
                },
              },
              {
                key: "windowData",
                get: function () {
                  if (!this._windowData) {
                    var t = this.iframe.getAttribute("src");
                    if (t) {
                      var n = this.iframe.contentWindow,
                        e = document.createElement("a");
                      e.href = t;
                      var r =
                          80 !== parseInt(e.port) &&
                          443 !== parseInt(e.port) &&
                          "" !== e.port
                            ? ":" + e.port
                            : "",
                        o = e.protocol + "//" + e.hostname + r;
                      this._windowData = { domain: o, window: n };
                    }
                  }
                  return this._windowData;
                },
              },
              {
                key: "windowDomain",
                get: function () {
                  return this.windowData ? this.windowData.domain : null;
                },
              },
            ]) && M(n.prototype, e),
            r && M(n, r),
            t
          );
        })()
      );
      function H(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var J = (function () {
        function t(n) {
          !(function (t, n) {
            if (!(t instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.$config = n);
        }
        var n, e, r;
        return (
          (n = t),
          (e = [
            {
              key: "create",
              value: function (t, n) {
                if ("card" !== t)
                  throw new Error("This component is not supported");
                return (
                  (this.$component = new q(this.$config, n)), this.$component
                );
              },
            },
          ]) && H(n.prototype, e),
          r && H(n, r),
          t
        );
      })();
      function V(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var Z = (function () {
        function t(n) {
          !(function (t, n) {
            if (!(t instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.$config = n);
        }
        var n, e, r;
        return (
          (n = t),
          (e = [
            {
              key: "setMerchant",
              value: function (t) {
                return (this.$config.app.merchant = t), this;
              },
            },
            {
              key: "setHost",
              value: function (t) {
                return (this.$config.app.iframeHost = t), this;
              },
            },
            {
              key: "setLanguage",
              value: function (t) {
                return (this.$config.app.language = t), this;
              },
            },
            {
              key: "disableIframeStyles",
              value: function () {
                return (this.$config.app.stylingDisabled = !0), this;
              },
            },
          ]) && V(n.prototype, e),
          r && V(n, r),
          t
        );
      })();
      function K(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var X = (function () {
        function t() {
          !(function (t, n) {
            if (!(t instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
        }
        var n, e, r;
        return (
          (n = t),
          (e = [
            {
              key: "reset",
              value: function (t) {
                return t.resetForm();
              },
            },
          ]) && K(n.prototype, e),
          r && K(n, r),
          t
        );
      })();
      function G(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var Q = (function () {
          function t() {
            !(function (t, n) {
              if (!(t instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
          }
          var n, e, r;
          return (
            (n = t),
            (e = [
              {
                key: "generate",
                value: function (t, n) {
                  return t.generateToken(n);
                },
              },
            ]) && G(n.prototype, e),
            r && G(n, r),
            t
          );
        })(),
        tt = function (t) {
          return new Z(t);
        },
        nt = function (t) {
          return new J(t);
        },
        et = function () {
          return new Q();
        },
        rt = function () {
          return new X();
        };
      function ot(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      e.d(n, "default", function () {
        return ut;
      });
      var it =
          (i.a.register("config", [], r),
          i.a.register("setupService", ["config"], tt),
          i.a.register("componentService", ["config"], nt),
          i.a.register("tokenService", [], et),
          i.a.register("formService", [], rt),
          i.a),
        ut = (function () {
          function t(n) {
            !(function (t, n) {
              if (!(t instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              it.get("setupService").setMerchant(n);
          }
          var n, e, r;
          return (
            (n = t),
            (e = [
              {
                key: "setup",
                get: function () {
                  return it.get("setupService");
                },
              },
              {
                key: "components",
                get: function () {
                  return it.get("componentService");
                },
              },
              {
                key: "tokens",
                get: function () {
                  return it.get("tokenService");
                },
              },
              {
                key: "form",
                get: function () {
                  return it.get("formService");
                },
              },
            ]) && ot(n.prototype, e),
            r && ot(n, r),
            t
          );
        })();
    },
  ]).default;
});
