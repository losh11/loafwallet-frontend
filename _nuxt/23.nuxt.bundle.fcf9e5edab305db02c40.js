webpackJsonp([23], {
  264: function(e, t, r) {
    function n(e) {
      r(518)
    }
    var s = r(1)(r(385), r(472), n, "data-v-169a56f8", null);
    e.exports = s.exports
  },
  385: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = r(9),
      s = r.n(n),
      i = r(8),
      a = r.n(i),
      u = r(73),
      c = r(32);
    t.default = {
      navTitle: function() {
        return r.i(u.t)("LibertyX Status")
      },
      data: function() {
        return {
          details: null,
          error: null
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
      watch: {
        service: function() {
          this.refresh()
        }
      },
      computed: {
        service: r.i(c.e)("service")
      },
      methods: {
        refresh: function() {
          function e() {
            return t.apply(this, arguments)
          }
          var t = a()(s.a.mark(function e() {
            return s.a.wrap(function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, this.service.details();
                case 2:
                  this.details = e.sent;
                case 3:
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
  402: function(e, t, r) {
    t = e.exports = r(4)(!0), t.push([e.i, "", "", {
      version: 3,
      sources: [],
      names: [],
      mappings: "",
      file: "status.vue",
      sourceRoot: ""
    }])
  },
  472: function(e, t) {
    e.exports = {
      render: function() {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r("loader", {
          attrs: {
            data: e.details
          }
        }, [e.details ? r("div", [r("h2", [e._v("Limits")]), r("p", [e._v("Daily use: " + e._s(e.details.limits[0].consumed.formatted_currency) + " of " + e._s(e.details.limits[0].amount.formatted_currency))]), r("p", [e._v("Weekly use: " + e._s(e.details.limits[1].consumed.formatted_currency) + " of " + e._s(e.details.limits[1].amount.formatted_currency))])]) : e._e()])
      },
      staticRenderFns: []
    }
  },
  518: function(e, t, r) {
    var n = r(402);
    "string" == typeof n && (n = [
      [e.i, n, ""]
    ]), n.locals && (e.exports = n.locals);
    r(5)("27be682a", n, !0)
  }
});
