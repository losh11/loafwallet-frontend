webpackJsonp([15], {
  246: function(t, n, e) {
    function r(t) {
      e(531)
    }
    var i = e(1)(e(365), e(487), r, "data-v-59784b45", null);
    t.exports = i.exports
  },
  274: function(t, n, e) {
    "use strict";
    var r = e(9),
      i = e.n(r),
      s = e(8),
      a = e.n(s);
    n.a = {
      props: ["value", "definition"],
      data: function() {
        return {
          dirty: !1,
          saving: !1
        }
      },
      mounted: function() {
        function t() {
          return n.apply(this, arguments)
        }
        var n = a()(i.a.mark(function t() {
          var n;
          return i.a.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if (!this.value || !this.present(this.value)) {
                  t.next = 9;
                  break
                }
                return t.next = 3, this.fromForm(this.value);
              case 3:
                return t.next = 5, this.toForm();
              case 5:
                n = t.sent, this.valid(n) && this.$emit("input", n), t.next = 10;
                break;
              case 9:
                this.readFromKv();
              case 10:
              case "end":
                return t.stop()
            }
          }, t, this)
        }));
        return t
      }(),
      watch: {
        value: function() {
          this.value && this.fromForm(this.value)
        }
      },
      computed: {},
      methods: {
        kvFieldName: function() {
          return this.definition ? "field-" + this.definition.slug : null
        },
        present: function(t) {
          return !!t
        },
        valid: function(t) {
          return t && this.present(t)
        },
        focus: function() {
          this.$refs.input && this.$refs.input.focus()
        },
        save: function() {
          function t() {
            return n.apply(this, arguments)
          }
          var n = a()(i.a.mark(function t() {
            var n;
            return i.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (this.dirty = !0, !this.saving) {
                    t.next = 3;
                    break
                  }
                  return t.abrupt("return");
                case 3:
                  if (!this.dirty) {
                    t.next = 13;
                    break
                  }
                  return this.dirty = !1, t.next = 7, this.toForm();
                case 7:
                  return n = t.sent, this.valid && this.$emit("input", n), t.next = 11, this.writeToKv();
                case 11:
                  t.next = 3;
                  break;
                case 13:
                  this.saving = !1;
                case 14:
                case "end":
                  return t.stop()
              }
            }, t, this)
          }));
          return t
        }(),
        readFromKv: function() {
          function t() {
            return n.apply(this, arguments)
          }
          var n = a()(i.a.mark(function t() {
            var n, e;
            return i.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (n = this.kvFieldName()) {
                    t.next = 3;
                    break
                  }
                  return t.abrupt("return");
                case 3:
                  return t.next = 5, this.$kv.get(n);
                case 5:
                  if (!(e = t.sent)) {
                    t.next = 11;
                    break
                  }
                  return console.log("FROM FORM: ", e), this.$emit("input", e), t.next = 11, this.fromForm(e);
                case 11:
                case "end":
                  return t.stop()
              }
            }, t, this)
          }));
          return t
        }(),
        writeToKv: function() {
          function t() {
            return n.apply(this, arguments)
          }
          var n = a()(i.a.mark(function t() {
            var n, e;
            return i.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (n = this.kvFieldName()) {
                    t.next = 3;
                    break
                  }
                  return t.abrupt("return");
                case 3:
                  return t.next = 5, this.toForm();
                case 5:
                  return e = t.sent, t.next = 8, this.$kv.set(n, e);
                case 8:
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
  365: function(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var r, i = e(75),
      s = e.n(i),
      a = e(13),
      o = e.n(a),
      u = e(274),
      c = e(74);
    n.default = (r = {
      mixins: [u.a],
      components: c.a,
      data: function() {
        return {
          form: {}
        }
      }
    }, s()(r, "components", c.a), s()(r, "methods", {
      input: function(t, n, e) {
        this.form = o()({}, this.form, s()({}, t, n)), this.save()
      },
      toForm: function() {
        return o()({}, this.form)
      },
      fromForm: function(t) {
        this.form = o()({}, t)
      }
    }), r)
  },
  415: function(t, n, e) {
    n = t.exports = e(4)(!0), n.push([t.i, "h2[data-v-59784b45]{text-align:center}", "", {
      version: 3,
      sources: ["/var/lib/jenkins/workspace/let_platform-content_master-FRN7CKU26WU762PWBLZQ73ICWCRE76BSFSIX6TSBTA776LUYY3SA/components/fields/Form.vue"],
      names: [],
      mappings: "AACA,oBAAoB,iBAAiB,CACpC",
      file: "Form.vue",
      sourcesContent: ["\nh2[data-v-59784b45]{text-align:center\n}\n"],
      sourceRoot: ""
    }])
  },
  487: function(t, n) {
    t.exports = {
      render: function() {
        var t = this,
          n = t.$createElement,
          e = t._self._c || n;
        return e("div", [e("h2", [t._v(t._s(t.definition.description))]), t._l(t.definition.fields, function(n, r) {
          return e("div", {
            key: n.slug
          }, [e("bw-" + n.type, {
            ref: "fields",
            refInFor: !0,
            tag: "component",
            attrs: {
              definition: n,
              value: t.form[n.slug]
            },
            on: {
              input: function(e) {
                t.input(n.slug, arguments[0], r)
              },
              ready: function(n) {
                t.ready(r)
              }
            }
          })], 1)
        })], 2)
      },
      staticRenderFns: []
    }
  },
  531: function(t, n, e) {
    var r = e(415);
    "string" == typeof r && (r = [
      [t.i, r, ""]
    ]), r.locals && (t.exports = r.locals);
    e(5)("a6577a10", r, !0)
  }
});
