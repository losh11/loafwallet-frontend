webpackJsonp([11], {
  257: function(t, e, r) {
    function n(t) {
      r(519)
    }
    var i = r(1)(r(378), r(475), n, "data-v-29cc2702", null);
    t.exports = i.exports
  },
  279: function(t, e, r) {
    "use strict";

    function n(t, e) {
      for (var r = 0; r < t.capabilities.length; r++)
        for (var n = t.capabilities[r], i = 0; i < n.links.length; i++) {
          var a = n.links[i];
          e(n, a)
        }
    }

    function i(t) {
      for (var e = t.split("-"), r = 1; r < e.length; r++) e[r] = e[r][0].toUpperCase() + e[r].substring(1);
      return e.join("")
    }

    function a(t, e) {
      return new u.a(function(r) {
        return t.$once(e, r)
      })
    }
    r.d(e, "a", function() {
      return k
    });
    var s = r(50),
      o = r.n(s),
      c = r(7),
      u = r.n(c),
      l = r(9),
      f = r.n(l),
      h = r(8),
      p = r.n(h),
      d = r(0),
      v = r.n(d),
      A = r(73),
      b = {
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
            return A.i18n.t("buy-index.slogans." + this.type)
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
            var r = this.capability(t),
              n = r.links.find(function(t) {
                return t.rel == e
              });
            return n && n.href
          },
          toolbarStyle: function() {
            return "bank" == this.type ? {
              color: "white"
            } : null
          }
        }
      },
      x = function() {
        var t = p()(f.a.mark(function t(e) {
          var r, s, c, u, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return f.a.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return r = {
                  data: function() {
                    return e
                  },
                  mixins: [b],
                  methods: {}
                }, l && (r.tokenKey = function() {
                  return l
                }), n(e, function(t, e) {
                  r.methods[e.rel] || (r.methods[i(e.rel)] = p()(f.a.mark(function t() {
                    var r, n, i, a, s, c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return f.a.wrap(function(t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          r = e.href, n = r.match(/:(\w+)/g);
                          for (i in n || [])(a = n[i].substring(1)) in c && (s = c[a], delete c[a], r = r.replace(":" + a, s));
                          if (0 != o()(c).length) {
                            t.next = 7;
                            break
                          }
                          return t.next = 6, this.$http.get("/_api" + r, {
                            headers: this.headers
                          });
                        case 6:
                          return t.abrupt("return", t.sent);
                        case 7:
                          return t.next = 9, this.$http.post("/_api" + r, c, {
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
                }), r.methods.accounts && (s = r.methods.accounts, r.methods.accounts = p()(f.a.mark(function t() {
                  var e, r = arguments;
                  return f.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, s.apply(this, r);
                      case 2:
                        return e = t.sent, e && !e.error && (this.hasAccount = e.length > 0), t.abrupt("return", e);
                      case 5:
                      case "end":
                        return t.stop()
                    }
                  }, t, this)
                }))), r.methods.register && (c = r.methods.register, r.methods.register = p()(f.a.mark(function t() {
                  for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                  var i;
                  return f.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, c.apply(this, r);
                      case 2:
                        return i = t.sent, r.length > 0 && (this.token = i.token, this.$kv.set(this.$options.tokenKey.call(this), this.token)), t.abrupt("return", i);
                      case 5:
                      case "end":
                        return t.stop()
                    }
                  }, t, this)
                })), r.methods.logout = function() {
                  if (this.token) {
                    throw new Error("Logout Failed")
                  }
                  return null
                }), u = new v.a(r), t.next = 8, a(u, "ready");
              case 8:
                return t.abrupt("return", u);
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
      g = {},
      k = function() {
        var t = p()(f.a.mark(function t(e) {
          var r = this,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return f.a.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return g[e] || (g[e] = new u.a(function() {
                  var t = p()(f.a.mark(function t(i, a) {
                    var s, o;
                    return f.a.wrap(function(t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          return t.next = 2, v.a.prototype.$http.get("/_api" + e);
                        case 2:
                          return o = t.sent, t.prev = 3, t.next = 6, x(o, n);
                        case 6:
                          s = t.sent, s.href = e, g[e] = s, i(s), t.next = 16;
                          break;
                        case 12:
                          t.prev = 12, t.t0 = t.catch(3), g[e] = null, a(t.t0);
                        case 16:
                        case "end":
                          return t.stop()
                      }
                    }, t, r, [
                      [3, 12]
                    ])
                  }));
                  return function(e, r) {
                    return t.apply(this, arguments)
                  }
                }())), t.next = 3, g[e];
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
  378: function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var n = r(9),
      i = r.n(n),
      a = r(8),
      s = r.n(a),
      o = r(279),
      c = r(32);
    e.default = {
      data: function() {
        return {
          service: this.service || null,
          serviceLatch: null == this.service ? new c.f : null
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
                return t.prev = 0, t.next = 3, this.fetchService();
              case 3:
                t.next = 7;
                break;
              case 5:
                t.prev = 5, t.t0 = t.catch(0);
              case 7:
              case "end":
                return t.stop()
            }
          }, t, this, [
            [0, 5]
          ])
        }));
        return t
      }(),
      methods: {
        back: function() {
          return this.$router.replace("/buy"), "clear"
        },
        fetchService: function() {
          function t() {
            return e.apply(this, arguments)
          }
          var e = s()(i.a.mark(function t() {
            var e;
            return i.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, e = this.$route.params.name, t.next = 4, r.i(o.a)("/exchange/services/" + e);
                case 4:
                  this.service = t.sent, this.serviceLatch && (this.serviceLatch.resolve(this.service), this.serviceLatch = null), t.next = 13;
                  break;
                case 8:
                  throw t.prev = 8, t.t0 = t.catch(0), this.service = {
                    error: t.t0.message
                  }, this.serviceLatch && (this.serviceLatch.reject(this.service), this.serviceLatch = null), t.t0;
                case 13:
                case "end":
                  return t.stop()
              }
            }, t, this, [
              [0, 8]
            ])
          }));
          return t
        }()
      }
    }
  },
  403: function(t, e, r) {
    e = t.exports = r(4)(!0), e.push([t.i, ".container[data-v-29cc2702],.full[data-v-29cc2702]{position:absolute;top:0;bottom:0;left:0;right:0}.container[data-v-29cc2702]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.switcher[data-v-29cc2702]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;border-top:1px solid rgba(75,94,99,.16);border-bottom:1px solid rgba(75,94,99,.16);background-color:#fafcfc}.switcher>a[data-v-29cc2702]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-align:center;color:#4b5e63;display:block;padding:5.5px;margin:5.5px;border-radius:5.5px}.switcher>a.nuxt-link-exact-active[data-v-29cc2702]{background:-webkit-gradient(linear,left top,right top,from(#f9a538),to(#ff4f94));background:-o-linear-gradient(left,#f9a538,#ff4f94);background:linear-gradient(90deg,#f9a538,#ff4f94);color:#fff}.content[data-v-29cc2702]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;position:relative}", "", {
      version: 3,
      sources: ["/var/lib/jenkins/workspace/let_platform-content_master-FRN7CKU26WU762PWBLZQ73ICWCRE76BSFSIX6TSBTA776LUYY3SA/pages/buy/_name.vue"],
      names: [],
      mappings: "AACA,mDAAmD,kBAAkB,MAAM,SAAS,OAAO,OAAO,CACjG,AACD,4BAA4B,oBAAoB,oBAAoB,aAAa,4BAA4B,6BAA6B,0BAA0B,qBAAqB,CACxL,AACD,2BAA2B,WAAW,oBAAoB,oBAAoB,aAAa,wCAAyC,2CAA4C,wBAAwB,CACvM,AACD,6BAA6B,mBAAmB,oBAAoB,YAAY,kBAAkB,cAAc,cAAc,cAAc,aAAa,mBAAmB,CAC3K,AACD,oDAAoD,iFAAqF,oDAAsD,kDAAuD,UAAU,CAC/P,AACD,0BAA0B,mBAAmB,oBAAoB,YAAY,iBAAiB,CAC7F",
      file: "_name.vue",
      sourcesContent: ["\n.full[data-v-29cc2702],.container[data-v-29cc2702]{position:absolute;top:0;bottom:0;left:0;right:0\n}\n.container[data-v-29cc2702]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column\n}\n.switcher[data-v-29cc2702]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;border-top:1px solid rgba(75,94,99,0.16);border-bottom:1px solid rgba(75,94,99,0.16);background-color:#FAFCFC\n}\n.switcher>a[data-v-29cc2702]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-align:center;color:#4B5E63;display:block;padding:5.5px;margin:5.5px;border-radius:5.5px\n}\n.switcher>a.nuxt-link-exact-active[data-v-29cc2702]{background:-webkit-gradient(linear, left top, right top, from(#f9a538), to(#ff4f94));background:-o-linear-gradient(left, #f9a538, #ff4f94);background:linear-gradient(to right, #f9a538, #ff4f94);color:#fff\n}\n.content[data-v-29cc2702]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;position:relative\n}\n"],
      sourceRoot: ""
    }])
  },
  475: function(t, e) {
    t.exports = {
      render: function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r("loader", {
          attrs: {
            data: t.service,
            retry: t.fetchService
          }
        }, [r("div", {
          staticClass: "container"
        }, [t.service && "history" in t.service && t.service.readyToUse ? r("div", {
          staticClass: "switcher"
        }, [r("nuxt-link", {
          attrs: {
            to: "/buy/" + t.service.slug
          }
        }, [t._v(t._s(t.$t("buy.purchase")))]), "history" in t.service ? r("nuxt-link", {
          attrs: {
            to: "/buy/" + t.service.slug + "/history"
          }
        }, [t._v(t._s(t.$t("buy.history.title")))]) : t._e(), "details" in t.service ? r("nuxt-link", {
          attrs: {
            to: "/buy/" + t.service.slug + "/settings"
          }
        }, [t._v(t._s(t.$t("buy.settings.title")))]) : t._e()], 1) : t._e(), r("div", {
          staticClass: "content"
        }, [r("nuxt-child", {
          staticClass: "full"
        })], 1)])])
      },
      staticRenderFns: []
    }
  },
  519: function(t, e, r) {
    var n = r(403);
    "string" == typeof n && (n = [
      [t.i, n, ""]
    ]), n.locals && (t.exports = n.locals);
    r(5)("265d01f0", n, !0)
  }
});
