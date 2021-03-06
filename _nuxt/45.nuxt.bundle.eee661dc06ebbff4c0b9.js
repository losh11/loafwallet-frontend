webpackJsonp([45], {
  300: function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r, a = n(75),
      i = n.n(a),
      o = n(77),
      c = n.n(o),
      u = n(50),
      s = n.n(u),
      l = n(32);
    t.default = (r = {
      props: {
        value: {
          type: Object,
          required: !1,
          default: {}
        },
        currencies: {
          type: Object,
          required: !1
        }
      },
      data: function() {
        var e = null;
        if (e = this.value ? {
            numerator: this.value.numerator,
            denominator: this.value.denominator,
            currency: this.value.currency
          } : {
            numerator: null,
            denominator: null,
            currency: null
          }, null == e.currency && this.currencies) {
          var t = s()(this.currencies)[0],
            n = this.currencies[t];
          e.currency = t, e.denominator = Math.pow(10, n.scale)
        }
        return e.tickle = 1, e
      },
      watch: {
        value: function() {
          this.numerator = String(this.value.numerator), this.denominator = this.value.denominator, this.currency = this.value.currency
        },
        currencies: function() {}
      },
      computed: {
        symbol: function() {
          var e = this.currencies,
            t = this.currency;
          return e && t && e[t] ? e[t].symbol : ""
        },
        scale: function() {
          return c()(this.denominator || 1)
        },
        amount: function() {
          var e = (this.tickle, String(this.numerator || "0")),
            t = e.length,
            r = t - this.scale,
            a = n.i(l.a)(e.substring(r), this.scale, "0");
          return (e.substring(0, r) || "0") + "." + a
        }
      }
    }, i()(r, "watch", {
      currency: function() {
        var e = this.currencies[this.currency],
          t = Math.pow(10, e.scale);
        this.denominator != t && (this.numerator = 0), this.denominator = t
      },
      amount: function() {
        this.$emit("input", {
          numerator: this.numerator,
          denominator: this.denominator,
          currency: this.currency
        })
      }
    }), i()(r, "methods", {
      amountChanged: function(e) {
        this.numerator = e.replace(/[^0-9]/g, "").match(/^0*(\d*?)$/)[1], this.tickle++
      },
      blockPeriod: function(e) {
        190 == e.keyCode && (e.preventDefault(), e.stopPropagation())
      }
    }), r)
  },
  313: function(e, t, n) {
    t = e.exports = n(4)(!0), t.push([e.i, "input[data-v-6a98cea4]::-webkit-inner-spin-button,input[data-v-6a98cea4]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.currency-input[data-v-6a98cea4]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}input[data-v-6a98cea4]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;background-color:transparent;border:none;left:22px;right:44px}.symbol[data-v-6a98cea4],input[data-v-6a98cea4]{font-size:42.9px;line-height:66px;height:66px;color:#4b5e63}select[data-v-6a98cea4]{display:block;height:22px;border:1px solid #000;border-radius:2px;background-color:#fff;margin:11px}", "", {
      version: 3,
      sources: ["/var/lib/jenkins/workspace/let_platform-content_master-FRN7CKU26WU762PWBLZQ73ICWCRE76BSFSIX6TSBTA776LUYY3SA/components/CurrencyInput.vue"],
      names: [],
      mappings: "AACA,oGAAoG,wBAAwB,QAAQ,CACnI,AACD,iCAAiC,kBAAkB,oBAAoB,oBAAoB,aAAa,yBAAyB,sBAAsB,kBAAkB,CACxK,AACD,uBAAuB,mBAAmB,oBAAoB,YAAY,6BAA6B,YAAY,UAAU,UAAU,CACtI,AACD,gDAAgD,iBAAiB,iBAAiB,YAAY,aAAa,CAC1G,AACD,wBAAwB,cAAc,YAAY,sBAAuB,kBAAkB,sBAAuB,WAAW,CAC5H",
      file: "CurrencyInput.vue",
      sourcesContent: ["\ninput[data-v-6a98cea4]::-webkit-outer-spin-button,input[data-v-6a98cea4]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0\n}\n.currency-input[data-v-6a98cea4]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center\n}\ninput[data-v-6a98cea4]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;background-color:transparent;border:none;left:22px;right:44px\n}\n.symbol[data-v-6a98cea4],input[data-v-6a98cea4]{font-size:42.9px;line-height:66px;height:66px;color:#4B5E63\n}\nselect[data-v-6a98cea4]{display:block;height:22px;border:1px solid black;border-radius:2px;background-color:white;margin:11px\n}\n"],
      sourceRoot: ""
    }])
  },
  321: function(e, t, n) {
    function r(e) {
      n(341)
    }
    var a = n(1)(n(300), n(333), r, "data-v-6a98cea4", null);
    e.exports = a.exports
  },
  333: function(e, t) {
    e.exports = {
      render: function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", {
          staticClass: "currency-input"
        }, [n("span", {
          staticClass: "symbol"
        }, [e._v(e._s(e.symbol))]), n("input", {
          attrs: {
            type: "tel"
          },
          domProps: {
            value: e.amount
          },
          on: {
            input: function(t) {
              e.amountChanged(t.target.value)
            },
            keydown: e.blockPeriod,
            keyup: e.blockPeriod
          }
        }), e.currencies.length > 1 ? n("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: e.currency,
            expression: "currency"
          }],
          staticClass: "currency",
          on: {
            change: function(t) {
              var n = Array.prototype.filter.call(t.target.options, function(e) {
                return e.selected
              }).map(function(e) {
                return "_value" in e ? e._value : e.value
              });
              e.currency = t.target.multiple ? n : n[0]
            }
          }
        }, e._l(Object.keys(e.currencies), function(t, r) {
          return n("option", {
            domProps: {
              value: t
            }
          }, [e._v("\n      " + e._s(t) + "\n    ")])
        })) : e._e()])
      },
      staticRenderFns: []
    }
  },
  341: function(e, t, n) {
    var r = n(313);
    "string" == typeof r && (r = [
      [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    n(5)("2377cd7e", r, !0)
  }
});
