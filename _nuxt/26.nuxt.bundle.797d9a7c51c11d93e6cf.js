webpackJsonp([26], {
  259: function(e, t, n) {
    function i(e) {
      n(523)
    }
    var r = n(1)(n(380), n(479), i, "data-v-316be405", null);
    e.exports = r.exports
  },
  380: function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(32),
      r = n(73);
    t.default = {
      navTitle: function() {
        return n.i(r.t)("Buy Bitcoin")
      },
      data: function() {
        return {}
      },
      components: {
        "cash-type": function() {
          return n.e(44).then(n.bind(null, 460))
        },
        "credit-type": function() {
          return n.e(43).then(n.bind(null, 461))
        },
        "bank-type": function() {
          return n.e(42).then(n.bind(null, 459))
        }
      },
      computed: {
        service: n.i(i.e)("service"),
        type: function() {
          return this.service && this.service.type && this.service.type + "-type"
        }
      },
      methods: {
        back: function() {
          if ("function" == typeof this.$refs.component.back) return this.$refs.component.back()
        }
      }
    }
  },
  407: function(e, t, n) {
    t = e.exports = n(4)(!0), t.push([e.i, "", "", {
      version: 3,
      sources: [],
      names: [],
      mappings: "",
      file: "index.vue",
      sourceRoot: ""
    }])
  },
  479: function(e, t) {
    e.exports = {
      render: function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", [n("portal", {
          attrs: {
            to: "mobile-title"
          }
        }, [e._v(e._s(e.$t("buy-bitcoin")))]), n(e.type, {
          key: e.type,
          ref: "component",
          tag: "component",
          attrs: {
            service: e.service
          }
        })], 1)
      },
      staticRenderFns: []
    }
  },
  523: function(e, t, n) {
    var i = n(407);
    "string" == typeof i && (i = [
      [e.i, i, ""]
    ]), i.locals && (e.exports = i.locals);
    n(5)("55824d78", i, !0)
  }
});
