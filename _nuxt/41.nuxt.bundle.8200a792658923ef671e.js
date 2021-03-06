webpackJsonp([41, 28], {
  238: function(t, n, e) {
    function r(t) {
      e(293)
    }
    var a = e(1)(e(282), e(290), r, "data-v-42aba4b7", null);
    t.exports = a.exports
  },
  274: function(t, n, e) {
    "use strict";
    var r = e(9),
      a = e.n(r),
      i = e(8),
      o = e.n(i);
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
        var n = o()(a.a.mark(function t() {
          var n;
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
          var n = o()(a.a.mark(function t() {
            var n;
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
          var n = o()(a.a.mark(function t() {
            var n, e;
            return a.a.wrap(function(t) {
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
          var n = o()(a.a.mark(function t() {
            var n, e;
            return a.a.wrap(function(t) {
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
  280: function(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var r = e(9),
      a = e.n(r),
      i = e(8),
      o = e.n(i);
    e(32);
    n.default = {
      props: ["service"],
      data: function() {
        return {
          accounts: null,
          open: !1
        }
      },
      mounted: function() {
        this.refresh()
      },
      methods: {
        refresh: function() {
          function t() {
            return n.apply(this, arguments)
          }
          var n = o()(a.a.mark(function t() {
            return a.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2, this.service.accounts();
                case 2:
                  this.accounts = t.sent;
                case 3:
                case "end":
                  return t.stop()
              }
            }, t, this)
          }));
          return t
        }(),
        close: function() {
          this.open = !1
        },
        toggle: function() {
          this.open = !this.open
        },
        selector: function(t) {
          var n = this;
          return function() {
            return n.select(t)
          }
        },
        select: function() {
          function t(t) {
            return n.apply(this, arguments)
          }
          var n = o()(a.a.mark(function t(n) {
            var e;
            return a.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2, this.service.accountDetails({
                    id: n.id.value,
                    primary: {
                      value: !0
                    }
                  });
                case 2:
                  if (!(e = t.sent) || !e.error) {
                    t.next = 5;
                    break
                  }
                  throw new Error(e.error);
                case 5:
                  return this.accounts = null, t.next = 8, this.refresh();
                case 8:
                  this.open = !1;
                case 9:
                case "end":
                  return t.stop()
              }
            }, t, this)
          }));
          return t
        }()
      },
      computed: {
        otherAccounts: function() {
          return (this.accounts || []).filter(function(t) {
            return t.primary && !t.primary.value
          })
        },
        primaryAccount: function() {
          var t = this.accounts;
          return t ? t.find(function(t) {
            return t.primary && t.primary.value
          }) : null
        }
      },
      watch: {
        service: function() {
          this.refresh()
        }
      }
    }
  },
  282: function(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var r = e(9),
      a = e.n(r),
      i = e(8),
      o = e.n(i),
      s = e(13),
      c = e.n(s);
    e(32);
    n.default = {
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
          this.$emit("input", c()({
            uri: this.uri
          }, this.bitId))
        },
        beforeSave: function() {
          function t() {
            return n.apply(this, arguments)
          }
          var n = o()(a.a.mark(function t() {
            return a.a.wrap(function(t) {
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
            return n.apply(this, arguments)
          }
          var n = o()(a.a.mark(function t() {
            return a.a.wrap(function(t) {
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
            return n.apply(this, arguments)
          }
          var n = o()(a.a.mark(function t() {
            var n, e, r, i;
            return a.a.wrap(function(t) {
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
                  return this.signing = !0, n = this.definition.uri, this.uri = n + "?x=" + Date.now(), e = {
                    prompt_string: "Authenticate Glidera",
                    string_to_sign: this.uri,
                    bitid_url: n,
                    bitid_index: "0"
                  }, r = this.current = this.$http.post("/_wallet/sign_bitid", e, {
                    timeout: !1
                  }), t.next = 11, this.current;
                case 11:
                  if (i = t.sent, !(this.current == r && "address" in i && "signature" in i)) {
                    t.next = 18;
                    break
                  }
                  this.bitId = i, this.save(), this.signing = !1, t.next = 19;
                  break;
                case 18:
                  throw new Error(i.error || i.message || i.status || i);
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
  283: function(t, n, e) {
    n = t.exports = e(4)(!0), n.push([t.i, ".error[data-v-42aba4b7]{background-color:red;color:#fff;margin:22px;border-radius:5.5px;-webkit-box-shadow:0 3px 9px rgba(0,0,0,.12),0 2px 6px rgba(0,0,0,.24);box-shadow:0 3px 9px rgba(0,0,0,.12),0 2px 6px rgba(0,0,0,.24)}", "", {
      version: 3,
      sources: ["/var/lib/jenkins/workspace/let_platform-content_master-FRN7CKU26WU762PWBLZQ73ICWCRE76BSFSIX6TSBTA776LUYY3SA/components/fields/BitID.vue"],
      names: [],
      mappings: "AACA,wBAAwB,qBAAqB,WAAY,YAAY,oBAAoB,uEAAyE,8DAAgE,CACjO",
      file: "BitID.vue",
      sourcesContent: ["\n.error[data-v-42aba4b7]{background-color:red;color:white;margin:22px;border-radius:5.5px;-webkit-box-shadow:0 3px 9px rgba(0,0,0,0.12),0 2px 6px rgba(0,0,0,0.24);box-shadow:0 3px 9px rgba(0,0,0,0.12),0 2px 6px rgba(0,0,0,0.24)\n}\n"],
      sourceRoot: ""
    }])
  },
  285: function(t, n, e) {
    n = t.exports = e(4)(!0), n.push([t.i, ".container[data-v-c5b7c6f4]{position:relative;background-color:#fafcfc;border-top:1px solid rgba(75,94,99,.16);border-bottom:1px solid rgba(75,94,99,.16);margin:0;padding:0}.popup[data-v-c5b7c6f4]{position:absolute;top:45px;left:11px;right:11px;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);z-index:5;background-color:#fafcfc;border-top:3px #fafcfc}button.account.simple-button[data-v-c5b7c6f4],button.account.stateful-button[data-v-c5b7c6f4]{width:100%;border:none;padding:11px;margin-left:0;list-style:none;display:-webkit-box;display:-ms-flexbox;display:flex}button.account.stateful-button.button__unstyled.state-loading[data-v-c5b7c6f4]{background:#fff!important;text-align:center}.is-primary[data-v-c5b7c6f4]{padding-right:11px;width:33px}.kind[data-v-c5b7c6f4]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.description[data-v-c5b7c6f4]{-webkit-box-flex:2;-ms-flex-positive:2;flex-grow:2}", "", {
      version: 3,
      sources: ["/var/lib/jenkins/workspace/let_platform-content_master-FRN7CKU26WU762PWBLZQ73ICWCRE76BSFSIX6TSBTA776LUYY3SA/components/AccountPicker.vue"],
      names: [],
      mappings: "AACA,4BAA4B,kBAAkB,yBAAyB,wCAAyC,2CAA4C,SAAS,SAAS,CAC7K,AACD,wBAAwB,kBAAkB,SAAS,UAAU,WAAW,uEAAyE,+DAAiE,UAAU,yBAAyB,sBAAsB,CAC1Q,AACD,8FAA8F,WAAW,YAAY,aAAa,cAAc,gBAAgB,oBAAoB,oBAAoB,YAAY,CACnN,AACD,+EAA+E,0BAA4B,iBAAiB,CAC3H,AACD,6BAA6B,mBAAmB,UAAU,CACzD,AACD,uBAAuB,mBAAmB,oBAAoB,WAAW,CACxE,AACD,8BAA8B,mBAAmB,oBAAoB,WAAW,CAC/E",
      file: "AccountPicker.vue",
      sourcesContent: ["\n.container[data-v-c5b7c6f4]{position:relative;background-color:#FAFCFC;border-top:1px solid rgba(75,94,99,0.16);border-bottom:1px solid rgba(75,94,99,0.16);margin:0;padding:0\n}\n.popup[data-v-c5b7c6f4]{position:absolute;top:45px;left:11px;right:11px;-webkit-box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);z-index:5;background-color:#FAFCFC;border-top:3px #FAFCFC\n}\nbutton.account.simple-button[data-v-c5b7c6f4],button.account.stateful-button[data-v-c5b7c6f4]{width:100%;border:none;padding:11px;margin-left:0;list-style:none;display:-webkit-box;display:-ms-flexbox;display:flex\n}\nbutton.account.stateful-button.button__unstyled.state-loading[data-v-c5b7c6f4]{background:white !important;text-align:center\n}\n.is-primary[data-v-c5b7c6f4]{padding-right:11px;width:33px\n}\n.kind[data-v-c5b7c6f4]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1\n}\n.description[data-v-c5b7c6f4]{-webkit-box-flex:2;-ms-flex-positive:2;flex-grow:2\n}\n"],
      sourceRoot: ""
    }])
  },
  288: function(t, n, e) {
    function r(t) {
      e(295)
    }
    var a = e(1)(e(280), e(292), r, "data-v-c5b7c6f4", null);
    t.exports = a.exports
  },
  290: function(t, n) {
    t.exports = {
      render: function() {
        var t = this,
          n = t.$createElement,
          e = t._self._c || n;
        return t.$slots.error ? e("div", {
          staticClass: "error"
        }, [t._v("BitID error: "), t._t("error"), t._v(".  Try re-submitting the form.")], 2) : t._e()
      },
      staticRenderFns: []
    }
  },
  292: function(t, n) {
    t.exports = {
      render: function() {
        var t = this,
          n = t.$createElement,
          e = t._self._c || n;
        return e("loader", {
          class: {
            container: !0, container__open: t.open
          },
          attrs: {
            data: t.accounts
          }
        }, [e("div", {
          slot: "empty"
        }, [t._v("\n    No accounts found :(\n  ")]), t.primaryAccount ? e("simple-button", {
          staticClass: "account",
          attrs: {
            "button-style": "unstyled"
          },
          on: {
            click: function(n) {
              t.toggle()
            }
          }
        }, [e("span", {
          staticClass: "is-primary"
        }), e("span", {
          staticClass: "kind"
        }, [t._v("\n      " + t._s(t.primaryAccount.kind && t.primaryAccount.kind.value) + "\n    ")]), e("span", {
          staticClass: "description"
        }, [t._v("\n      " + t._s(t.primaryAccount.description && t.primaryAccount.description.value) + "\n    ")]), t.otherAccounts.length > 0 ? e("span", {
          staticClass: "disclosure"
        }, [t.open ? e("icon", {
          attrs: {
            name: "chevron-up"
          }
        }) : e("icon", {
          attrs: {
            name: "chevron-down"
          }
        })], 1) : t._e()]) : t._e(), t.open ? e("div", {
          staticClass: "popup"
        }, t._l(t.otherAccounts, function(n, r) {
          return e("stateful-button", {
            staticClass: "account",
            attrs: {
              "button-style": "unstyled",
              click: t.selector(n)
            }
          }, [e("span", {
            staticClass: "is-primary"
          }, [n.primary && n.primary.value ? e("icon", {
            attrs: {
              name: "checkmark"
            }
          }) : t._e()], 1), e("span", {
            staticClass: "kind"
          }, [t._v("\n        " + t._s(n.kind && n.kind.value) + "\n      ")]), e("span", {
            staticClass: "description"
          }, [t._v("\n        " + t._s(n.description && n.description.value) + "\n      ")])])
        })) : t._e()], 1)
      },
      staticRenderFns: []
    }
  },
  293: function(t, n, e) {
    var r = e(283);
    "string" == typeof r && (r = [
      [t.i, r, ""]
    ]), r.locals && (t.exports = r.locals);
    e(5)("2681e0a3", r, !0)
  },
  295: function(t, n, e) {
    var r = e(285);
    "string" == typeof r && (r = [
      [t.i, r, ""]
    ]), r.locals && (t.exports = r.locals);
    e(5)("7790b785", r, !0)
  },
  298: function(t, n, e) {
    "use strict";
    var r = e(13),
      a = e.n(r),
      i = e(9),
      o = e.n(i),
      s = e(8),
      c = e.n(s),
      u = e(326),
      p = e.n(u),
      d = e(288),
      l = e.n(d),
      f = e(323),
      b = e.n(f);
    n.a = {
      props: ["service"],
      data: function() {
        return {
          ready: !1,
          bank: null,
          registration: null,
          oauth: !1,
          detailsError: null,
          details: null,
          idv: null,
          idvError: null,
          signin: null,
          accounts: null,
          bankLoggedIn: null,
          bankError: null,
          mfaForm: null
        }
      },
      mounted: function() {
        function t() {
          return n.apply(this, arguments)
        }
        var n = c()(o.a.mark(function t() {
          return o.a.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, this.service.details();
              case 2:
                return this.details = t.sent, t.next = 5, this.service.idv();
              case 5:
                return this.idv = t.sent, t.next = 8, this.fetchAccounts();
              case 8:
                this.ready = !0;
              case 9:
              case "end":
                return t.stop()
            }
          }, t, this)
        }));
        return t
      }(),
      components: {
        "bank-chooser": p.a,
        "account-picker": l.a,
        "oauth-login": b.a
      },
      computed: {
        idvComplete: function() {
          var t = this.idv,
            n = t && t.status;
          return "verified" == n || "submitted" == n
        },
        detailsComplete: function() {
          var t = this.details,
            n = t && t.status;
          return "verified" == n || "submitted" == n
        },
        detailsOpen: function() {
          return !this.detailsComplete
        },
        idvOpen: function() {
          var t = this.detailsComplete,
            n = this.idvComplete;
          return t && !n
        },
        loginComplete: function() {
          var t = this.accounts;
          return t && t.length > 0
        },
        bankLoginOpen: function() {
          var t = this.idvComplete,
            n = this.loginComplete;
          return t && !n
        }
      },
      methods: {
        registered: function() {
          function t(t) {
            return n.apply(this, arguments)
          }
          var n = c()(o.a.mark(function t(n) {
            return o.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  n.form && "oauth1" == n.form.slug && (this.oauth = n);
                case 1:
                case "end":
                  return t.stop()
              }
            }, t, this)
          }));
          return t
        }(),
        logout: function() {
          function t() {
            return n.apply(this, arguments)
          }
          var n = c()(o.a.mark(function t() {
            return o.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2, this.service.logout();
                case 2:
                  this.$router.push("/buy");
                case 3:
                case "end":
                  return t.stop()
              }
            }, t, this)
          }));
          return t
        }(),
        detailsDone: function() {
          function t(t) {
            return n.apply(this, arguments)
          }
          var n = c()(o.a.mark(function t(n) {
            return o.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  this.details = n;
                case 1:
                case "end":
                  return t.stop()
              }
            }, t, this)
          }));
          return t
        }(),
        idvDone: function() {
          function t(t) {
            return n.apply(this, arguments)
          }
          var n = c()(o.a.mark(function t(n) {
            return o.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  "verified" == n.status ? (this.idv = a()({}, n), this.idvError = null) : this.idvError = "Unknown account status resolution: " + account.status;
                case 1:
                case "end":
                  return t.stop()
              }
            }, t, this)
          }));
          return t
        }(),
        loggedIn: function() {
          function t(t) {
            return n.apply(this, arguments)
          }
          var n = c()(o.a.mark(function t(n) {
            return o.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if ("pending" != n.status) {
                    t.next = 4;
                    break
                  }
                  this.mfaForm = n.question_form, t.next = 10;
                  break;
                case 4:
                  if ("verified" != n.status) {
                    t.next = 9;
                    break
                  }
                  this.bankLoggedIn = !0, this.fetchAccounts(), t.next = 10;
                  break;
                case 9:
                  throw new Error("Unknown account status: " + n.status);
                case 10:
                case "end":
                  return t.stop()
              }
            }, t, this)
          }));
          return t
        }(),
        mfaDone: function() {
          function t(t) {
            return n.apply(this, arguments)
          }
          var n = c()(o.a.mark(function t(n) {
            return o.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  "verified" == n.status ? (this.bankLoggedIn = !0, this.fetchAccounts()) : this.bankError = "Unknown account status: " + n.status;
                case 1:
                case "end":
                  return t.stop()
              }
            }, t, this)
          }));
          return t
        }(),
        fetchAccounts: function() {
          function t() {
            return n.apply(this, arguments)
          }
          var n = c()(o.a.mark(function t() {
            return o.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2, this.service.accounts();
                case 2:
                  this.accounts = t.sent, this.accounts.length > 0 && !this.accounts.error && (this.bankLoggedIn = !0, this.$emit("logged-in"));
                case 4:
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
  302: function(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var r = e(9),
      a = e.n(r),
      i = e(8),
      o = e.n(i),
      s = e(13),
      c = e.n(s),
      u = e(238),
      p = e.n(u);
    n.default = {
      props: ["form", "service", "registration"],
      data: function() {
        return {
          getBitId: !1,
          data: {},
          phone: null,
          finish: !1
        }
      },
      components: {
        "bw-bitid": p.a
      },
      methods: {
        gotBitId: function(t) {
          this.data = c()({}, this.data, {
            login_bitid: t
          }), this.submitEmail()
        },
        emailContinue: function() {
          function t() {
            return n.apply(this, arguments)
          }
          var n = o()(a.a.mark(function t() {
            return a.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  this.getBitId = !0;
                case 1:
                case "end":
                  return t.stop()
              }
            }, t, this)
          }));
          return t
        }(),
        submitEmail: function() {
          function t() {
            return n.apply(this, arguments)
          }
          var n = o()(a.a.mark(function t() {
            var n, e;
            return a.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return n = c()({}, this.data, {
                    send_email: {
                      value: !0
                    },
                    to_email: {
                      value: this.registration.email.email
                    },
                    account_email: {
                      value: this.registration.email.email
                    },
                    send_sms: {
                      value: !1
                    },
                    to_phone: null
                  }), t.next = 3, this.service.oauth1(n);
                case 3:
                  e = t.sent, this.finish = !0;
                case 5:
                case "end":
                  return t.stop()
              }
            }, t, this)
          }));
          return t
        }(),
        submitPhone: function() {}
      },
      computed: {},
      watch: {}
    }
  },
  306: function(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var r = e(9),
      a = e.n(r),
      i = e(23),
      o = e.n(i),
      s = e(8),
      c = e.n(s),
      u = e(274);
    n.default = {
      mixins: [u.a],
      props: ["service"],
      data: function() {
        return {
          banks: null,
          chosenBank: null
        }
      },
      mounted: function() {
        this.fetchBanks()
      },
      methods: {
        kvFieldName: function() {
          return "field-bank_code"
        },
        toForm: function() {
          return {
            value: this.chosenBank && this.chosenBank.code
          }
        },
        fromForm: function() {
          function t(t) {
            return n.apply(this, arguments)
          }
          var n = c()(a.a.mark(function t(n) {
            return a.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (n = n && "object" == (void 0 === n ? "undefined" : o()(n)) && "value" in n ? n.value : n, this.banks) {
                    t.next = 4;
                    break
                  }
                  return t.next = 4, this.fetchBanks();
                case 4:
                  this.chosenBank = this.banks.find(function(t) {
                    return t.code == n
                  });
                case 5:
                case "end":
                  return t.stop()
              }
            }, t, this)
          }));
          return t
        }(),
        chooseCb: function(t) {
          var n = this;
          return function() {
            return n.choose(t)
          }
        },
        choose: function() {
          function t(t) {
            return n.apply(this, arguments)
          }
          var n = c()(a.a.mark(function t(n) {
            return a.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  this.chosenBank = n, this.save();
                case 2:
                case "end":
                  return t.stop()
              }
            }, t, this)
          }));
          return t
        }(),
        fetchBanks: function() {
          function t() {
            return n.apply(this, arguments)
          }
          var n = c()(a.a.mark(function t() {
            return a.a.wrap(function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2, this.service.availableBanks();
                case 2:
                  this.banks = t.sent.banks;
                case 3:
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
  310: function(t, n, e) {
    n = t.exports = e(4)(!0), n.push([t.i, ".container.unchosen[data-v-3b198f24]{min-height:572px}.banks[data-v-3b198f24]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row;flex-flow:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:11px 0}.banks.chosen .bank[data-v-3b198f24]{-webkit-filter:saturate(50%);filter:saturate(50%)}.banks.chosen .bank .img[data-v-3b198f24]{opacity:.5}.banks.chosen .bank.chosen[data-v-3b198f24]{-webkit-filter:none;filter:none}.banks.chosen .bank.chosen .img[data-v-3b198f24]{opacity:1}.banks .bank.button-container[data-v-3b198f24]{padding:0 5.5px}.banks .bank.button-container button[data-v-3b198f24]{background-color:#fff;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.banks .bank.button-container .img[data-v-3b198f24]{width:110px;height:44px;margin:5.5px;background-size:contain;background-repeat:no-repeat;background-position:50%}.banks .bank.button-container.chosen[data-v-3b198f24]{-webkit-box-shadow:0 4px 8px -2px rgba(0,0,0,.15);box-shadow:0 4px 8px -2px rgba(0,0,0,.15)}.chosen[data-v-3b198f24]{text-align:center}.chosen .chosen--bank[data-v-3b198f24]{width:176px;height:110px;padding:22px;margin:22px auto;background-color:#fff;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);border-radius:5.5px}.chosen .img[data-v-3b198f24]{width:100%;height:100%;background-size:contain;background-repeat:no-repeat;background-position:50%}", "", {
      version: 3,
      sources: ["/var/lib/jenkins/workspace/let_platform-content_master-FRN7CKU26WU762PWBLZQ73ICWCRE76BSFSIX6TSBTA776LUYY3SA/components/fields/BankChooser.vue"],
      names: [],
      mappings: "AACA,qCAAqC,gBAAgB,CACpD,AACD,wBAAwB,oBAAoB,oBAAoB,aAAa,8BAA8B,6BAA6B,kBAAkB,cAAc,mBAAmB,eAAe,wBAAwB,qBAAqB,uBAAuB,cAAc,CAC3R,AACD,qCAAqC,6BAA6B,oBAAoB,CACrF,AACD,0CAA0C,UAAW,CACpD,AACD,4CAA4C,oBAAoB,WAAW,CAC1E,AACD,iDAAiD,SAAS,CACzD,AACD,+CAA+C,eAAe,CAC7D,AACD,sDAAsD,sBAAuB,uEAAyE,8DAAgE,CACrN,AACD,oDAAoD,YAAY,YAAY,aAAa,wBAAwB,4BAA4B,uBAA0B,CACtK,AACD,sDAAsD,kDAAmD,yCAA0C,CAClJ,AACD,yBAAyB,iBAAiB,CACzC,AACD,uCAAuC,YAAY,aAAa,aAAa,iBAAiB,sBAAuB,uEAAyE,+DAAiE,mBAAmB,CACjR,AACD,8BAA8B,WAAW,YAAY,wBAAwB,4BAA4B,uBAA0B,CAClI",
      file: "BankChooser.vue",
      sourcesContent: ["\n.container.unchosen[data-v-3b198f24]{min-height:572px\n}\n.banks[data-v-3b198f24]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row;flex-flow:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:11px 0\n}\n.banks.chosen .bank[data-v-3b198f24]{-webkit-filter:saturate(50%);filter:saturate(50%)\n}\n.banks.chosen .bank .img[data-v-3b198f24]{opacity:0.5\n}\n.banks.chosen .bank.chosen[data-v-3b198f24]{-webkit-filter:none;filter:none\n}\n.banks.chosen .bank.chosen .img[data-v-3b198f24]{opacity:1\n}\n.banks .bank.button-container[data-v-3b198f24]{padding:0 5.5px\n}\n.banks .bank.button-container button[data-v-3b198f24]{background-color:white;-webkit-box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24)\n}\n.banks .bank.button-container .img[data-v-3b198f24]{width:110px;height:44px;margin:5.5px;background-size:contain;background-repeat:no-repeat;background-position:center\n}\n.banks .bank.button-container.chosen[data-v-3b198f24]{-webkit-box-shadow:0 4px 8px -2px rgba(0,0,0,0.15);box-shadow:0 4px 8px -2px rgba(0,0,0,0.15)\n}\n.chosen[data-v-3b198f24]{text-align:center\n}\n.chosen .chosen--bank[data-v-3b198f24]{width:176px;height:110px;padding:22px;margin:22px auto;background-color:white;-webkit-box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);border-radius:5.5px\n}\n.chosen .img[data-v-3b198f24]{width:100%;height:100%;background-size:contain;background-repeat:no-repeat;background-position:center\n}\n"],
      sourceRoot: ""
    }])
  },
  315: function(t, n, e) {
    n = t.exports = e(4)(!0), n.push([t.i, ".button-group[data-v-e04559d2]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex}.button-group .button-container[data-v-e04559d2]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.group[data-v-e04559d2]{position:relative;background-color:#fafcfc;border-bottom:1px solid rgba(75,94,99,.16)}.group .icon[data-v-e04559d2]{height:15.4px;width:15.4px;margin-right:5.5px}.group input[data-v-e04559d2]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:33px 22px 11px;background-color:#fafcfc;font-size:17.875px;line-height:27.5px;height:27.5px;font-family:Circular-Pro-Book;height:66px;border:none}", "", {
      version: 3,
      sources: ["/var/lib/jenkins/workspace/let_platform-content_master-FRN7CKU26WU762PWBLZQ73ICWCRE76BSFSIX6TSBTA776LUYY3SA/components/OAuthLogin.vue"],
      names: [],
      mappings: "AACA,+BAA+B,WAAW,oBAAoB,oBAAoB,YAAY,CAC7F,AACD,iDAAiD,mBAAmB,oBAAoB,WAAW,CAClG,AACD,wBAAwB,kBAAkB,yBAAyB,0CAA2C,CAC7G,AACD,8BAA8B,cAAc,aAAa,kBAAkB,CAC1E,AACD,8BAA8B,mBAAmB,oBAAoB,YAAY,uBAAuB,yBAAyB,mBAAmB,mBAAmB,cAAc,8BAA8B,YAAY,WAAW,CACzO",
      file: "OAuthLogin.vue",
      sourcesContent: ["\n.button-group[data-v-e04559d2]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex\n}\n.button-group .button-container[data-v-e04559d2]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1\n}\n.group[data-v-e04559d2]{position:relative;background-color:#FAFCFC;border-bottom:1px solid rgba(75,94,99,0.16)\n}\n.group .icon[data-v-e04559d2]{height:15.4px;width:15.4px;margin-right:5.5px\n}\n.group input[data-v-e04559d2]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:33px 22px 11px;background-color:#FAFCFC;font-size:17.875px;line-height:27.5px;height:27.5px;font-family:Circular-Pro-Book;height:66px;border:none\n}\n"],
      sourceRoot: ""
    }])
  },
  323: function(t, n, e) {
    function r(t) {
      e(343)
    }
    var a = e(1)(e(302), e(335), r, "data-v-e04559d2", null);
    t.exports = a.exports
  },
  326: function(t, n, e) {
    function r(t) {
      e(338)
    }
    var a = e(1)(e(306), e(329), r, "data-v-3b198f24", null);
    t.exports = a.exports
  },
  329: function(t, n) {
    t.exports = {
      render: function() {
        var t = this,
          n = t.$createElement,
          e = t._self._c || n;
        return e("loader", {
          class: {
            container: !0, unchosen: !t.chosenBank
          },
          attrs: {
            data: t.banks
          }
        }, [t.chosenBank ? e("div", {
          staticClass: "chosen"
        }, [e("div", {
          staticClass: "chosen--bank",
          on: {
            click: function(n) {
              t.chooseCb(null)()
            }
          }
        }, [e("div", {
          staticClass: "img",
          style: {
            "background-image": "url('/img/banks/" + t.chosenBank.code + "/" + t.chosenBank.code + ".png')"
          }
        })])]) : e("div", {
          class: {
            banks: !0
          }
        }, t._l(t.banks, function(n) {
          return e("div", {
            staticClass: "bank button-container"
          }, [e("stateful-button", {
            key: n.code,
            class: {
              bank: !0, chosen: n == t.chosenBank
            },
            attrs: {
              "button-style": "unstyled",
              click: t.chooseCb(n)
            }
          }, [e("div", {
            staticClass: "img",
            style: {
              "background-image": "url('/img/banks/" + n.code + "/" + n.code + ".png')"
            }
          })])], 1)
        }))])
      },
      staticRenderFns: []
    }
  },
  335: function(t, n) {
    t.exports = {
      render: function() {
        var t = this,
          n = t.$createElement,
          e = t._self._c || n;
        return t.finish ? e("div", [t._v("\n  " + t._s(t.$t("oauth.continue")) + "\n  "), e("simple-button", {
          on: {
            click: function(n) {
              t.$emit("done")
            }
          }
        }, [t._v(t._s(t.$t("oauth.done")))])], 1) : e("div", [t._v("\n  " + t._s(t.$t("oauth.start")) + "\n\n  "), t.getBitId ? e("bw-bitid", {
          attrs: {
            definition: t.form.fields.find(function(t) {
              return "login_bitid" == t.slug
            }),
            immediate: !0
          },
          on: {
            input: function(n) {
              t.gotBitId(arguments[0])
            }
          }
        }) : t._e(), e("div", {
          staticClass: "group"
        }, [e("stateful-button", {
          attrs: {
            click: t.emailContinue
          }
        }, [t._v(t._s(t.$t("oauth.continue-email")))])], 1)], 1)
      },
      staticRenderFns: []
    }
  },
  338: function(t, n, e) {
    var r = e(310);
    "string" == typeof r && (r = [
      [t.i, r, ""]
    ]), r.locals && (t.exports = r.locals);
    e(5)("bdde7b68", r, !0)
  },
  343: function(t, n, e) {
    var r = e(315);
    "string" == typeof r && (r = [
      [t.i, r, ""]
    ]), r.locals && (t.exports = r.locals);
    e(5)("29e0a768", r, !0)
  },
  349: function(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var r = e(298);
    n.default = {
      mixins: [r.a]
    }
  },
  452: function(t, n, e) {
    var r = e(1)(e(349), e(502), null, null, null);
    t.exports = r.exports
  },
  502: function(t, n) {
    t.exports = {
      render: function() {
        var t = this,
          n = t.$createElement,
          e = t._self._c || n;
        return e("loader", {
          attrs: {
            data: t.ready
          }
        }, [e("accordion-section", {
          attrs: {
            name: "Registration",
            open: !t.service.token,
            complete: !!t.service.token,
            disabled: !!t.service.token
          }
        }, [t.oauth ? e("div", [e("oauth-login", {
          attrs: {
            form: t.oauth.form,
            service: t.service,
            registration: t.registration
          },
          on: {
            done: function(n) {
              t.oauth = !1
            }
          }
        }), e("simple-button", {
          on: {
            click: function(n) {
              t.oauth = !1
            }
          }
        }, [t._v("Cancel")])], 1) : e("div", [t.service.token ? e("div", [e("p", [t._v("You're logged in to " + t._s(t.service.name) + ".")])]) : e("smart-form", {
          attrs: {
            callback: t.service.register
          },
          on: {
            done: function(n) {
              t.registered(arguments[0])
            }
          },
          model: {
            value: t.registration,
            callback: function(n) {
              t.registration = n
            },
            expression: "registration"
          }
        })], 1)]), e("accordion-section", {
          attrs: {
            name: "Account Details",
            disabled: !t.service.token,
            open: t.detailsOpen,
            complete: t.detailsComplete
          }
        }, [e("smart-form", {
          attrs: {
            callback: t.service.details,
            value: t.details && t.details.data
          },
          on: {
            done: function(n) {
              t.detailsDone(arguments[0])
            }
          }
        })], 1), e("accordion-section", {
          attrs: {
            name: "ID Image",
            disabled: !t.service.token || !t.details,
            open: t.idvOpen,
            complete: t.idvComplete
          }
        }, [e("smart-form", {
          attrs: {
            callback: t.service.idv
          },
          on: {
            done: function(n) {
              t.idvDone(arguments[0])
            }
          }
        })], 1), e("accordion-section", {
          attrs: {
            name: "Bank Login",
            disabled: !t.service.token || !t.idv,
            open: t.bankLoginOpen,
            complete: t.loginComplete
          }
        }, [t.bankError ? e("div", {
          staticClass: "error"
        }, [t._v(t._s(t.bankError))]) : t._e(), e("smart-form", {
          attrs: {
            callback: t.service.signin
          },
          on: {
            done: function(n) {
              t.loggedIn(arguments[0])
            }
          }
        }), t.mfaForm ? e("smart-form", {
          attrs: {
            meta: t.mfaForm,
            service: t.service,
            callback: t.service.question
          },
          on: {
            done: function(n) {
              t.mfaDone(arguments[0])
            }
          }
        }) : t._e()], 1), e("accordion-section", {
          attrs: {
            name: "Account Preferences",
            disabled: !t.service.token || !t.accounts || 0 == t.accounts.length,
            open: t.loginComplete,
            complete: t.loginComplete
          }
        }, [e("account-picker", {
          attrs: {
            service: t.service
          }
        })], 1)], 1)
      },
      staticRenderFns: []
    }
  }
});
