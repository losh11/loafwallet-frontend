webpackJsonp([20], {
  267: function(e, n, t) {
    function o(e) {
      t(526)
    }
    var r = t(1)(t(388), t(482), o, "data-v-42e53dc9", null);
    e.exports = r.exports
  },
  388: function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t(74);
    n.default = {
      components: o.a,
      navTitle: function() {
        return "test phone"
      },
      data: function() {
        return {
          phone: null
        }
      },
      methods: {},
      computed: {},
      watch: {}
    }
  },
  410: function(e, n, t) {
    n = e.exports = t(4)(!0), n.push([e.i, "", "", {
      version: 3,
      sources: [],
      names: [],
      mappings: "",
      file: "phone.vue",
      sourceRoot: ""
    }])
  },
  482: function(e, n) {
    e.exports = {
      render: function() {
        var e = this,
          n = e.$createElement,
          t = e._self._c || n;
        return t("div", [t("h1", [e._v("Test phone field.")]), e._v("\n  Phone: " + e._s(e.phone) + "\n  "), t("bw-validated_phone", {
          attrs: {
            value: e.phone
          },
          on: {
            input: function(n) {
              e.phone = arguments[0]
            },
            ready: function(n) {
              e.alert("ready")
            }
          }
        })], 1)
      },
      staticRenderFns: []
    }
  },
  526: function(e, n, t) {
    var o = t(410);
    "string" == typeof o && (o = [
      [e.i, o, ""]
    ]), o.locals && (e.exports = o.locals);
    t(5)("0481dec2", o, !0)
  }
});
