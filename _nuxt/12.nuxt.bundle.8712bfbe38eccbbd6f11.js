webpackJsonp([12], {
  252: function(t, e, i) {
    function n(t) {
      i(543)
    }
    var a = i(1)(i(371), i(500), n, "data-v-b97d5722", null);
    t.exports = a.exports
  },
  274: function(t, e, i) {
    "use strict";
    var n = i(9),
      a = i.n(n),
      r = i(8),
      o = i.n(r);
    e.a = {
      props: ["value", "definition"],
      data: function() {
        return {
          dirty: !1,
          saving: !1
        }
      },
      mounted: function() {
        function t() {
          return e.apply(this, arguments)
        }
        var e = o()(a.a.mark(function t() {
          var e;
          return a.a.wrap(function(t) {
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
                e = t.sent, this.valid(e) && this.$emit("input", e), t.next = 10;
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
            return e.apply(this, arguments)
          }
          var e = o()(a.a.mark(function t() {
            var e;
            return a.a.wrap(function(t) {
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
                  return e = t.sent, this.valid && this.$emit("input", e), t.next = 11, this.writeToKv();
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
            return e.apply(this, arguments)
          }
          var e = o()(a.a.mark(function t() {
            var e, i;
            return a.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (e = this.kvFieldName()) {
                    t.next = 3;
                    break
                  }
                  return t.abrupt("return");
                case 3:
                  return t.next = 5, this.$kv.get(e);
                case 5:
                  if (!(i = t.sent)) {
                    t.next = 11;
                    break
                  }
                  return console.log("FROM FORM: ", i), this.$emit("input", i), t.next = 11, this.fromForm(i);
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
            return e.apply(this, arguments)
          }
          var e = o()(a.a.mark(function t() {
            var e, i;
            return a.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (e = this.kvFieldName()) {
                    t.next = 3;
                    break
                  }
                  return t.abrupt("return");
                case 3:
                  return t.next = 5, this.toForm();
                case 5:
                  return i = t.sent, t.next = 8, this.$kv.set(e, i);
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
  371: function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var n = i(9),
      a = i.n(n),
      r = i(8),
      o = i.n(r),
      s = i(274);
    e.default = {
      mixins: [s.a],
      props: ["value", "definition"],
      data: function() {
        return {
          resend: !1,
          email: "",
          confirmed: !1,
          confirming: !1,
          code: null
        }
      },
      computed: {
        emailValid: function() {
          return this.email.match(/.*?@.+?\..+?/)
        },
        codeValid: function() {
          return this.code && 6 == this.code.replace(/\s+/g, "").length
        }
      },
      methods: {
        present: function(t) {
          return !!t && !!t.email
        },
        valid: function(t) {
          return !!t && (!!t.email && !!t.hash)
        },
        kvFieldName: function() {
          return "email"
        },
        toForm: function() {
          var t = this.email;
          return t ? {
            email: t,
            hash: t
          } : null
        },
        fromForm: function(t) {
          "string" == typeof t ? (this.email = t, this.confirmed = !0) : t && t.email && (this.email = t.email, this.confirmed = !0)
        },
        emailChanged: function(t) {
          this.email = t, this.confirmed && (this.confirmed = !1, this.confirming = !1, this.resend = !1, this.code = null, this.$emit("input", null))
        },
        send: function() {
          function t() {
            return e.apply(this, arguments)
          }
          var e = o()(a.a.mark(function t() {
            var e;
            return a.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return this.confirmed = !1, t.next = 3, this.$http.post("/_api/me/email", {
                    email: this.email
                  }, {
                    headers: {
                      "X-Should-Verify": "Yes"
                    }
                  });
                case 3:
                  if (e = t.sent, 200 != e.status || "success" != e.value) {
                    t.next = 9;
                    break
                  }
                  this.confirming = !0, this.resend = !0, t.next = 10;
                  break;
                case 9:
                  throw new Error(e.error);
                case 10:
                  this.$refs.code.focus();
                case 11:
                case "end":
                  return t.stop()
              }
            }, t, this)
          }));
          return t
        }(),
        confirm: function() {
          function t() {
            return e.apply(this, arguments)
          }
          var e = o()(a.a.mark(function t() {
            var e;
            return a.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2, this.$http.post("/_api/me/email/confirm", {
                    otp: (this.code || "").replace(/\s+/g, "")
                  }, {
                    headers: {
                      "X-Should-Verify": "Yes"
                    }
                  });
                case 2:
                  if (e = t.sent, 200 != e.status || "success" != e.value) {
                    t.next = 11;
                    break
                  }
                  return t.next = 6, this.save();
                case 6:
                  this.confirming = !1, this.confirmed = !0, this.resend = !1, t.next = 12;
                  break;
                case 11:
                  throw new Error(e.error || e.value || e);
                case 12:
                  this.$emit("done");
                case 13:
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
  427: function(t, e, i) {
    e = t.exports = i(4)(!0), e.push([t.i, ".confirmation-code[data-v-b97d5722],.email[data-v-b97d5722]{position:relative;background-color:#fafcfc;border-bottom:1px solid rgba(75,94,99,.16)}.confirmation-code .icon[data-v-b97d5722],.email .icon[data-v-b97d5722]{height:15.4px;width:15.4px;margin-right:5.5px}.confirmation-code label[data-v-b97d5722],.email label[data-v-b97d5722]{position:absolute;top:11px;left:22px;color:#a3a8ad;font-size:14.3px;line-height:22px;height:22px;opacity:0;-webkit-transition:opacity .2s linear;-o-transition:opacity .2s linear;transition:opacity .2s linear}.confirmation-code.active label[data-v-b97d5722],.confirmation-code label.active[data-v-b97d5722],.email.active label[data-v-b97d5722],.email label.active[data-v-b97d5722]{opacity:1}.confirmation-code input[data-v-b97d5722],.email input[data-v-b97d5722]{padding:33px 22px 11px;background-color:#fafcfc;font-size:17.875px;line-height:27.5px;height:27.5px;font-family:Circular-Pro-Book;height:66px;border:none;width:100%}.confirmation-code.error input[data-v-b97d5722],.email.error input[data-v-b97d5722]{color:red}.confirmation-code .icon[data-v-b97d5722],.email .icon[data-v-b97d5722]{color:green;position:absolute;display:block;right:5.5px;bottom:5.5px;height:22px;width:22px}.confirmation-code .send[data-v-b97d5722]{position:absolute;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}", "", {
      version: 3,
      sources: ["/var/lib/jenkins/workspace/let_platform-content_master-FRN7CKU26WU762PWBLZQ73ICWCRE76BSFSIX6TSBTA776LUYY3SA/components/fields/ValidatedEmail.vue"],
      names: [],
      mappings: "AACA,4DAA8E,kBAAkB,yBAAyB,0CAA2C,CACnK,AACD,wEAAwE,cAAc,aAAa,kBAAkB,CACpH,AACD,wEAAwE,kBAAkB,SAAS,UAAU,cAAc,iBAAiB,iBAAiB,YAAY,UAAU,sCAAwC,iCAAmC,6BAA+B,CAC5R,AAGD,4KAAsF,SAAS,CAC9F,AACD,wEAAwE,uBAAuB,yBAAyB,mBAAmB,mBAAmB,cAAc,8BAA8B,YAAY,YAAY,UAAU,CAC3O,AACD,oFAAoF,SAAS,CAC5F,AACD,wEAAwE,YAAY,kBAAkB,cAAc,YAAY,aAAa,YAAY,UAAU,CAClK,AACD,0CAA0C,kBAAkB,QAAQ,MAAM,SAAS,oBAAoB,oBAAoB,aAAa,yBAAyB,sBAAsB,kBAAkB,CACxM",
      file: "ValidatedEmail.vue",
      sourcesContent: ["\n.email[data-v-b97d5722],.confirmation-code[data-v-b97d5722]{position:relative;position:relative;background-color:#FAFCFC;border-bottom:1px solid rgba(75,94,99,0.16)\n}\n.email .icon[data-v-b97d5722],.confirmation-code .icon[data-v-b97d5722]{height:15.4px;width:15.4px;margin-right:5.5px\n}\n.email label[data-v-b97d5722],.confirmation-code label[data-v-b97d5722]{position:absolute;top:11px;left:22px;color:#A3A8AD;font-size:14.3px;line-height:22px;height:22px;opacity:0;-webkit-transition:opacity 200ms linear;-o-transition:opacity 200ms linear;transition:opacity 200ms linear\n}\n.email label.active[data-v-b97d5722],.confirmation-code label.active[data-v-b97d5722]{opacity:1\n}\n.email.active label[data-v-b97d5722],.confirmation-code.active label[data-v-b97d5722]{opacity:1\n}\n.email input[data-v-b97d5722],.confirmation-code input[data-v-b97d5722]{padding:33px 22px 11px;background-color:#FAFCFC;font-size:17.875px;line-height:27.5px;height:27.5px;font-family:Circular-Pro-Book;height:66px;border:none;width:100%\n}\n.email.error input[data-v-b97d5722],.confirmation-code.error input[data-v-b97d5722]{color:red\n}\n.email .icon[data-v-b97d5722],.confirmation-code .icon[data-v-b97d5722]{color:green;position:absolute;display:block;right:5.5px;bottom:5.5px;height:22px;width:22px\n}\n.confirmation-code .send[data-v-b97d5722]{position:absolute;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center\n}\n"],
      sourceRoot: ""
    }])
  },
  500: function(t, e) {
    t.exports = {
      render: function() {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", {
          staticClass: "validated-email"
        }, [i("div", [i("div", {
          class: {
            email: !0, error: !!t.$slots.error
          }
        }, [i("label", {
          class: {
            active: !!t.email
          }
        }, [t._v(t._s(t.$t("email")))]), i("input", {
          ref: "input",
          attrs: {
            type: "email",
            placeholder: t.email ? null : t.$t("email")
          },
          domProps: {
            value: t.email
          },
          on: {
            input: function(e) {
              t.emailChanged(e.target.value)
            }
          }
        }), t.confirmed ? i("icon", {
          staticClass: "confirmed",
          attrs: {
            name: "checkmark-circled"
          }
        }) : t._e(), t.$slots.error ? i("field-error", [t._t("error")], 2) : t._e()], 1), t.confirmed ? t._e() : i("div", [t.resend ? t._e() : i("div", [i("stateful-button", {
          attrs: {
            disabled: !t.emailValid,
            click: t.send
          }
        }, [t._v(t._s(t.$t("verified-email.verify")))])], 1)])]), t.confirming ? i("div", [i("div", {
          staticClass: "confirmation-code"
        }, [i("label", {
          class: {
            active: !!t.code
          }
        }, [t._v(t._s(t.$t("confirmation-code")))]), i("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: t.code,
            expression: "code"
          }],
          ref: "code",
          attrs: {
            type: "tel",
            placeholder: t.code ? null : t.$t("confirmation-code")
          },
          domProps: {
            value: t.code
          },
          on: {
            input: function(e) {
              e.target.composing || (t.code = e.target.value)
            }
          }
        }), t.resend ? i("div", {
          staticClass: "send"
        }, [i("stateful-button", {
          attrs: {
            "button-style": "small-transparent",
            click: t.send
          }
        }, [t._v(t._s(t.$t("verified-email.reverify")))])], 1) : t._e()]), i("stateful-button", {
          attrs: {
            disabled: !t.codeValid,
            click: t.confirm
          }
        }, [t._v(t._s(t.$t("verified-email.confirm")))])], 1) : t._e()])
      },
      staticRenderFns: []
    }
  },
  543: function(t, e, i) {
    var n = i(427);
    "string" == typeof n && (n = [
      [t.i, n, ""]
    ]), n.locals && (t.exports = n.locals);
    i(5)("ba12a408", n, !0)
  }
});
