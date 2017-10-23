webpackJsonp([28], {
  238: function(t, r, n) {
    function e(t) {
      n(293)
    }
    var i = n(1)(n(282), n(290), e, "data-v-42aba4b7", null);
    t.exports = i.exports
  },
  282: function(t, r, n) {
    "use strict";
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var e = n(9),
      i = n.n(e),
      s = n(8),
      a = n.n(s),
      o = n(13),
      u = n.n(o);
    n(32);
    r.default = {
      props: ["value", "definition", "immediate"],
      data: function() {
        return {
          signing: !1,
          current: !1,
          uri: null,
          bitId: null
        }
      },
      watch: {},
      mounted: function() {
        1 == this.immediate ? this.sign() : this.$emit("ready")
      },
      methods: {
        focus: function() {
          this.$emit("done")
        },
        save: function() {
          this.$emit("input", u()({
            uri: this.uri
          }, this.bitId))
        },
        beforeSave: function() {
          function t() {
            return r.apply(this, arguments)
          }
          var r = a()(i.a.mark(function t() {
            return i.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (this.bitId) {
                    t.next = 4;
                    break
                  }
                  return t.next = 3, this.sign();
                case 3:
                  return t.abrupt("return", t.sent);
                case 4:
                case "end":
                  return t.stop()
              }
            }, t, this)
          }));
          return t
        }(),
        retry: function() {
          function t() {
            return r.apply(this, arguments)
          }
          var r = a()(i.a.mark(function t() {
            return i.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return this.signing && (this.signing = !1), this.current = null, t.next = 4, this.sign();
                case 4:
                  return t.abrupt("return", t.sent);
                case 5:
                case "end":
                  return t.stop()
              }
            }, t, this)
          }));
          return t
        }(),
        sign: function() {
          function t() {
            return r.apply(this, arguments)
          }
          var r = a()(i.a.mark(function t() {
            var r, n, e, s;
            return i.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (!this.signing) {
                    t.next = 2;
                    break
                  }
                  return t.abrupt("return");
                case 2:
                  if (this.definition && this.definition.uri) {
                    t.next = 4;
                    break
                  }
                  return t.abrupt("return");
                case 4:
                  return this.signing = !0, r = this.definition.uri, this.uri = r + "?x=" + Date.now(), n = {
                    prompt_string: "Authenticate Glidera",
                    string_to_sign: this.uri,
                    bitid_url: r,
                    bitid_index: "0"
                  }, e = this.current = this.$http.post("/_wallet/sign_bitid", n, {
                    timeout: !1
                  }), t.next = 11, this.current;
                case 11:
                  if (s = t.sent, !(this.current == e && "address" in s && "signature" in s)) {
                    t.next = 18;
                    break
                  }
                  this.bitId = s, this.save(), this.signing = !1, t.next = 19;
                  break;
                case 18:
                  throw new Error(s.error || s.message || s.status || s);
                case 19:
                case "end":
                  return t.stop()
              }
            }, t, this)
          }));
          return t
        }()
      }
    }
  },
  283: function(t, r, n) {
    r = t.exports = n(4)(!0), r.push([t.i, ".error[data-v-42aba4b7]{background-color:red;color:#fff;margin:22px;border-radius:5.5px;-webkit-box-shadow:0 3px 9px rgba(0,0,0,.12),0 2px 6px rgba(0,0,0,.24);box-shadow:0 3px 9px rgba(0,0,0,.12),0 2px 6px rgba(0,0,0,.24)}", "", {
      version: 3,
      sources: ["/var/lib/jenkins/workspace/let_platform-content_master-FRN7CKU26WU762PWBLZQ73ICWCRE76BSFSIX6TSBTA776LUYY3SA/components/fields/BitID.vue"],
      names: [],
      mappings: "AACA,wBAAwB,qBAAqB,WAAY,YAAY,oBAAoB,uEAAyE,8DAAgE,CACjO",
      file: "BitID.vue",
      sourcesContent: ["\n.error[data-v-42aba4b7]{background-color:red;color:white;margin:22px;border-radius:5.5px;-webkit-box-shadow:0 3px 9px rgba(0,0,0,0.12),0 2px 6px rgba(0,0,0,0.24);box-shadow:0 3px 9px rgba(0,0,0,0.12),0 2px 6px rgba(0,0,0,0.24)\n}\n"],
      sourceRoot: ""
    }])
  },
  290: function(t, r) {
    t.exports = {
      render: function() {
        var t = this,
          r = t.$createElement,
          n = t._self._c || r;
        return t.$slots.error ? n("div", {
          staticClass: "error"
        }, [t._v("BitID error: "), t._t("error"), t._v(".  Try re-submitting the form.")], 2) : t._e()
      },
      staticRenderFns: []
    }
  },
  293: function(t, r, n) {
    var e = n(283);
    "string" == typeof e && (e = [
      [t.i, e, ""]
    ]), e.locals && (t.exports = e.locals);
    n(5)("2681e0a3", e, !0)
  }
});
