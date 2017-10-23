webpackJsonp([30], {
  262: function(t, e, n) {
    var r = n(1)(n(383), n(503), null, null, null);
    t.exports = r.exports
  },
  279: function(t, e, n) {
    "use strict";

    function r(t, e) {
      for (var n = 0; n < t.capabilities.length; n++)
        for (var r = t.capabilities[n], i = 0; i < r.links.length; i++) {
          var a = r.links[i];
          e(r, a)
        }
    }

    function i(t) {
      for (var e = t.split("-"), n = 1; n < e.length; n++) e[n] = e[n][0].toUpperCase() + e[n].substring(1);
      return e.join("")
    }

    function a(t, e) {
      return new o.a(function(n) {
        return t.$once(e, n)
      })
    }
    n.d(e, "a", function() {
      return y
    });
    var s = n(50),
      u = n.n(s),
      c = n(7),
      o = n.n(c),
      h = n(9),
      f = n.n(h),
      l = n(8),
      p = n.n(l),
      d = n(0),
      v = n.n(d),
      g = n(73),
      k = {
        data: function() {
          return {
            token: null,
            href: null,
            hasAccount: !1
          }
        },
        computed: {
          headers: function() {
            return this.token ? {
              "X-Service-Token": this.token
            } : {}
          },
          slug: function() {
            return this.href.match(/([^\/]+)$/)[1]
          },
          logo: function() {
            return "bank" == this.type ? "https://www.glidera.io/resources/media/img/glidera.png" : null
          },
          description: function() {
            return g.i18n.t("buy-index.slogans." + this.type)
          },
          gradient: function() {
            switch (this.type) {
              case "bank":
                return "linear-gradient(to right, rgb(79, 110, 137), rgb(57, 69, 81))";
              case "cash":
                return "linear-gradient(to right, #b7c594, #00a99d)";
              case "credit":
                return "linear-gradient(to right, #7fb5ff, #4995ff)"
            }
            return null
          },
          appStyle: function() {
            return this.gradient ? {
              "background-image": this.gradient
            } : null
          },
          readyToUse: function() {
            return "bank" != this.type || this.hasAccount
          }
        },
        created: function() {
          function t() {
            return e.apply(this, arguments)
          }
          var e = p()(f.a.mark(function t() {
            var e;
            return f.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2, this.$kv.get(this.$options.tokenKey.call(this));
                case 2:
                  if (this.token = t.sent, "function" != typeof this.accounts) {
                    t.next = 10;
                    break
                  }
                  if (t.t0 = this.token, !t.t0) {
                    t.next = 9;
                    break
                  }
                  return t.next = 8, this.accounts();
                case 8:
                  t.t0 = t.sent;
                case 9:
                  e = t.t0;
                case 10:
                  this.$emit("ready");
                case 11:
                case "end":
                  return t.stop()
              }
            }, t, this)
          }));
          return t
        }(),
        tokenKey: function() {
          return this.name.toLowerCase() + "Token"
        },
        methods: {
          capability: function(t) {
            return this.capabilities.find(function(e) {
              return e.type == t
            })
          },
          link: function(t, e) {
            var n = this.capability(t),
              r = n.links.find(function(t) {
                return t.rel == e
              });
            return r && r.href
          },
          toolbarStyle: function() {
            return "bank" == this.type ? {
              color: "white"
            } : null
          }
        }
      },
      b = function() {
        var t = p()(f.a.mark(function t(e) {
          var n, s, c, o, h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return f.a.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return n = {
                  data: function() {
                    return e
                  },
                  mixins: [k],
                  methods: {}
                }, h && (n.tokenKey = function() {
                  return h
                }), r(e, function(t, e) {
                  n.methods[e.rel] || (n.methods[i(e.rel)] = p()(f.a.mark(function t() {
                    var n, r, i, a, s, c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return f.a.wrap(function(t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          n = e.href, r = n.match(/:(\w+)/g);
                          for (i in r || [])(a = r[i].substring(1)) in c && (s = c[a], delete c[a], n = n.replace(":" + a, s));
                          if (0 != u()(c).length) {
                            t.next = 7;
                            break
                          }
                          return t.next = 6, this.$http.get("/_api" + n, {
                            headers: this.headers
                          });
                        case 6:
                          return t.abrupt("return", t.sent);
                        case 7:
                          return t.next = 9, this.$http.post("/_api" + n, c, {
                            headers: this.headers
                          });
                        case 9:
                          return t.abrupt("return", t.sent);
                        case 10:
                        case "end":
                          return t.stop()
                      }
                    }, t, this)
                  })))
                }), n.methods.accounts && (s = n.methods.accounts, n.methods.accounts = p()(f.a.mark(function t() {
                  var e, n = arguments;
                  return f.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, s.apply(this, n);
                      case 2:
                        return e = t.sent, e && !e.error && (this.hasAccount = e.length > 0), t.abrupt("return", e);
                      case 5:
                      case "end":
                        return t.stop()
                    }
                  }, t, this)
                }))), n.methods.register && (c = n.methods.register, n.methods.register = p()(f.a.mark(function t() {
                  for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                  var i;
                  return f.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, c.apply(this, n);
                      case 2:
                        return i = t.sent, n.length > 0 && (this.token = i.token, this.$kv.set(this.$options.tokenKey.call(this), this.token)), t.abrupt("return", i);
                      case 5:
                      case "end":
                        return t.stop()
                    }
                  }, t, this)
                })), n.methods.logout = function() {
                  if (this.token) {
                    throw new Error("Logout Failed")
                  }
                  return null
                }), o = new v.a(n), t.next = 8, a(o, "ready");
              case 8:
                return t.abrupt("return", o);
              case 9:
              case "end":
                return t.stop()
            }
          }, t, this)
        }));
        return function(e) {
          return t.apply(this, arguments)
        }
      }(),
      x = {},
      y = function() {
        var t = p()(f.a.mark(function t(e) {
          var n = this,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return f.a.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return x[e] || (x[e] = new o.a(function() {
                  var t = p()(f.a.mark(function t(i, a) {
                    var s, u;
                    return f.a.wrap(function(t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          return t.next = 2, v.a.prototype.$http.get("/_api" + e);
                        case 2:
                          return u = t.sent, t.prev = 3, t.next = 6, b(u, r);
                        case 6:
                          s = t.sent, s.href = e, x[e] = s, i(s), t.next = 16;
                          break;
                        case 12:
                          t.prev = 12, t.t0 = t.catch(3), x[e] = null, a(t.t0);
                        case 16:
                        case "end":
                          return t.stop()
                      }
                    }, t, n, [
                      [3, 12]
                    ])
                  }));
                  return function(e, n) {
                    return t.apply(this, arguments)
                  }
                }())), t.next = 3, x[e];
              case 3:
                return t.abrupt("return", t.sent);
              case 4:
              case "end":
                return t.stop()
            }
          }, t, this)
        }));
        return function(e) {
          return t.apply(this, arguments)
        }
      }()
  },
  383: function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = n(9),
      i = n.n(r),
      a = n(8),
      s = n.n(a),
      u = n(279),
      c = {
        "liberty-x-guard": function() {
          return n.e(46).then(n.bind(null, 463))
        }
      };
    e.default = {
      navTitle: function() {
        return "LibertyX"
      },
      components: c,
      data: function() {
        return {
          service: null
        }
      },
      mounted: function() {
        function t() {
          return e.apply(this, arguments)
        }
        var e = s()(i.a.mark(function t() {
          return i.a.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, n.i(u.a)("/exchange/services/libertyx", "libxToken");
              case 2:
                this.service = t.sent;
              case 3:
              case "end":
                return t.stop()
            }
          }, t, this)
        }));
        return t
      }()
    }
  },
  503: function(t, e) {
    t.exports = {
      render: function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", [t.service ? n("liberty-x-guard", {
          attrs: {
            service: t.service
          }
        }, [n("nuxt-child")], 1) : t._e()], 1)
      },
      staticRenderFns: []
    }
  }
});
