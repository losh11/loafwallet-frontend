webpackJsonp([22], {
  265: function(e, t, n) {
    function r(e) {
      n(539)
    }
    var s = n(1)(n(386), n(496), r, "data-v-93eb763a", null);
    e.exports = s.exports
  },
  386: function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(9),
      s = n.n(r),
      i = n(8),
      a = n.n(i),
      o = n(73),
      c = n(32);
    t.default = {
      navTitle: function() {
        return n.i(o.t)("LibertyX Create Token")
      },
      data: function() {
        return {
          token: null,
          status: null,
          error: null,
          notAuthenticated: !1,
          pin: "",
          done: !1,
          polling: !1,
          refreshing: !1
        }
      },
      mounted: function() {
        function e() {
          return t.apply(this, arguments)
        }
        var t = a()(s.a.mark(function e() {
          return s.a.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                this.refresh();
              case 1:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }(),
      beforeDestroy: function() {
        function e() {
          return t.apply(this, arguments)
        }
        var t = a()(s.a.mark(function e() {
          return s.a.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                this.polling = !1, this._destroyed = !0;
              case 2:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }(),
      computed: {
        expired: function() {
          return new Date(this.token.expires) < new Date
        },
        service: n.i(c.e)("service")
      },
      methods: {
        refresh: function() {
          function e() {
            return t.apply(this, arguments)
          }
          var t = a()(s.a.mark(function e() {
            var t, n;
            return s.a.wrap(function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, this.$http.get("/_wallet/info");
                case 2:
                  return t = e.sent, n = t.receive_address, e.next = 6, this.service.newToken({
                    address: {
                      value: n
                    }
                  });
                case 6:
                  this.token = e.sent, this.token.error || this.poll(), "User is not authenticated against LibertyX" == this.token.error ? this.notAuthenticated = !0 : this.notAuthenticated = !1;
                case 9:
                case "end":
                  return e.stop()
              }
            }, e, this)
          }));
          return e
        }(),
        poll: function() {
          function e() {
            return t.apply(this, arguments)
          }
          var t = a()(s.a.mark(function e() {
            var t;
            return s.a.wrap(function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  if (!this.polling) {
                    e.next = 2;
                    break
                  }
                  return e.abrupt("return");
                case 2:
                  console.log("Start polling"), this.polling = !0;
                case 4:
                  if (!this.polling || this._destroyed) {
                    e.next = 18;
                    break
                  }
                  if (console.log("poll..."), t = this.service.token, !this.token || !this.token.token) {
                    e.next = 14;
                    break
                  }
                  return this.refreshing = !0, e.next = 11, this.$http.get("/_api/exchange/services/libertyx/token-status/" + this.token.token, {
                    headers: {
                      "X-Service-Token": t,
                      "X-Should-Authenticate": "Yes",
                      "X-Should-Verify": "Yes"
                    }
                  });
                case 11:
                  this.status = e.sent, console.log("Status: ", this.status), this.refreshing = !1;
                case 14:
                  return e.next = 16, n.i(c.c)(5e3);
                case 16:
                  e.next = 4;
                  break;
                case 18:
                case "end":
                  return e.stop()
              }
            }, e, this)
          }));
          return e
        }()
      }
    }
  },
  423: function(e, t, n) {
    t = e.exports = n(4)(!0), t.push([e.i, ".token[data-v-93eb763a]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;min-height:330px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.token h1[data-v-93eb763a]{padding:22px}", "", {
      version: 3,
      sources: ["/var/lib/jenkins/workspace/let_platform-content_master-FRN7CKU26WU762PWBLZQ73ICWCRE76BSFSIX6TSBTA776LUYY3SA/pages/buy/libertyx/token.vue"],
      names: [],
      mappings: "AACA,wBAAwB,oBAAoB,oBAAoB,aAAa,4BAA4B,6BAA6B,0BAA0B,sBAAsB,yBAAyB,sBAAsB,mBAAmB,kBAAkB,iBAAiB,yBAAyB,sBAAsB,6BAA6B,CACtW,AACD,2BAA2B,YAAY,CACtC",
      file: "token.vue",
      sourcesContent: ["\n.token[data-v-93eb763a]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;min-height:330px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between\n}\n.token h1[data-v-93eb763a]{padding:22px\n}\n"],
      sourceRoot: ""
    }])
  },
  496: function(e, t) {
    e.exports = {
      render: function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("loader", {
          attrs: {
            data: e.token,
            retry: e.refresh
          }
        }, [n("div", {
          staticClass: "token"
        }, [n("h1", [e._v("LibX Token: " + e._s(e.token.token))]), n("p", [e._v("Expires: " + e._s(new Date(e.token.expires).toLocaleString()))]), e.expired ? n("stateful-button", {
          attrs: {
            click: e.refresh
          }
        }, [e._v("Refresh")]) : e._e(), n("loader", {
          attrs: {
            data: e.status
          }
        }, [n("h2", [e._v("Status:")]), n("p", [e._v("Fees: " + e._s(e.status.fees.formatted_currency || "none"))]), n("p", [e._v("Rate: " + e._s(e.status.rate.formatted_currency || "none"))]), n("p", [e._v("Sent: " + e._s(e.status.sent.formatted_currency || "none"))]), e.refreshing ? n("div", [e._v("Refreshing...")]) : n("div", [e._v(" ")])])], 1)])
      },
      staticRenderFns: []
    }
  },
  539: function(e, t, n) {
    var r = n(423);
    "string" == typeof r && (r = [
      [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    n(5)("955ff33a", r, !0)
  }
});
