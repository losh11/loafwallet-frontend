webpackJsonp([10], {
  247: function(t, e, a) {
    function r(t) {
      a(525)
    }
    var n = a(1)(a(366), a(481), r, "data-v-37fb65aa", null);
    t.exports = n.exports
  },
  366: function(t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = a(9),
      n = a.n(r),
      o = a(8),
      i = a.n(o);
    e.default = {
      props: ["value", "definition"],
      data: function() {
        return {
          photoId: null
        }
      },
      methods: {
        capture: function() {
          function t() {
            return e.apply(this, arguments)
          }
          var e = i()(n.a.mark(function t() {
            var e, a, r, o, i, s;
            return n.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2, this.$http.get("/_camera/take_picture", {
                    timeout: !1
                  });
                case 2:
                  if (e = t.sent, !e.error) {
                    t.next = 5;
                    break
                  }
                  throw new Error(e.error);
                case 5:
                  return a = e.id, t.next = 8, this.$http.get("/_camera/picture/" + a + "?base64=1");
                case 8:
                  if (r = t.sent, !r.error) {
                    t.next = 11;
                    break
                  }
                  throw new Error(r.error);
                case 11:
                  o = r.value.match(/^data:(.*?);base64,(.*?)$/), i = o[1], s = o[2], this.$emit("input", {
                    data: s,
                    content_type: i
                  }), this.photoId = a;
                case 14:
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
  409: function(t, e, a) {
    e = t.exports = a(4)(!0), e.push([t.i, "p[data-v-37fb65aa]{max-width:280px;margin:auto}.photo-container[data-v-37fb65aa]{position:relative;margin:5.5px;height:352px}img[data-v-37fb65aa]{border:1px solid rgba(75,94,99,.16);max-width:100%;max-height:100%}.dummy-photo[data-v-37fb65aa]{background:url(" + a(435) + ") no-repeat 50%;width:100%;height:100%}", "", {
      version: 3,
      sources: ["/var/lib/jenkins/workspace/let_platform-content_master-FRN7CKU26WU762PWBLZQ73ICWCRE76BSFSIX6TSBTA776LUYY3SA/components/fields/Image.vue"],
      names: [],
      mappings: "AACA,mBAAmB,gBAAgB,WAAW,CAC7C,AACD,kCAAkC,kBAAkB,aAAa,YAAY,CAC5E,AACD,qBAAqB,oCAAqC,eAAe,eAAe,CACvF,AACD,8BAA8B,uDAA2D,WAAW,WAAW,CAC9G",
      file: "Image.vue",
      sourcesContent: ['\np[data-v-37fb65aa]{max-width:280px;margin:auto\n}\n.photo-container[data-v-37fb65aa]{position:relative;margin:5.5px;height:352px\n}\nimg[data-v-37fb65aa]{border:1px solid rgba(75,94,99,0.16);max-width:100%;max-height:100%\n}\n.dummy-photo[data-v-37fb65aa]{background:url("~assets/img/id-card.svg") no-repeat center;width:100%;height:100%\n}\n'],
      sourceRoot: ""
    }])
  },
  435: function(t, e, a) {
    t.exports = a.p + "img/id-card.5691b8c.svg"
  },
  481: function(t, e) {
    t.exports = {
      render: function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return t.definition ? a("div", [a("div", [a("p", [t._v(t._s(t.definition.description))]), a("div", {
          staticClass: "photo-container"
        }, [t.photoId ? a("img", {
          attrs: {
            src: "/_camera/picture/" + t.photoId
          }
        }) : a("div", {
          staticClass: "dummy-photo"
        }), t.$slots.error ? a("field-error", [t._t("error")], 2) : t._e()], 1), t.photoId ? a("stateful-button", {
          attrs: {
            click: t.capture
          }
        }, [t._v("Retake")]) : a("stateful-button", {
          attrs: {
            click: t.capture
          }
        }, [t._v("Take Picture")])], 1)]) : t._e()
      },
      staticRenderFns: []
    }
  },
  525: function(t, e, a) {
    var r = a(409);
    "string" == typeof r && (r = [
      [t.i, r, ""]
    ]), r.locals && (t.exports = r.locals);
    a(5)("2cea2668", r, !0)
  }
});
