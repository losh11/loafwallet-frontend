webpackJsonp([21], {
  266: function(e, t, n) {
    function a(e) {
      n(512)
    }
    var i = n(1)(n(387), n(466), a, "data-v-02c4f612", null);
    e.exports = i.exports
  },
  387: function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var a = n(74);
    t.default = {
      components: a.a,
      navTitle: function() {
        return "test email"
      },
      data: function() {
        return {
          email: null
        }
      },
      methods: {},
      computed: {},
      watch: {}
    }
  },
  396: function(e, t, n) {
    t = e.exports = n(4)(!0), t.push([e.i, "", "", {
      version: 3,
      sources: [],
      names: [],
      mappings: "",
      file: "email.vue",
      sourceRoot: ""
    }])
  },
  466: function(e, t) {
    e.exports = {
      render: function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", [n("h1", [e._v("Test email fields.")]), e._v("\n  Email: " + e._s(e.email) + "\n  "), n("bw-validated_email", {
          attrs: {
            value: e.email
          },
          on: {
            input: function(t) {
              e.email = arguments[0]
            },
            ready: function(t) {
              e.alert("ready")
            }
          }
        })], 1)
      },
      staticRenderFns: []
    }
  },
  512: function(e, t, n) {
    var a = n(396);
    "string" == typeof a && (a = [
      [e.i, a, ""]
    ]), a.locals && (e.exports = a.locals);
    n(5)("3791b3c0", a, !0)
  }
});
