webpackJsonp([4], {
  271: function(t, e, o) {
    function a(t) {
      o(510)
    }
    var n = o(1)(o(392), o(464), a, "data-v-005cec46", null);
    t.exports = n.exports
  },
  275: function(t, e, o) {
    e = t.exports = o(4)(!0), e.push([t.i, ".footer[data-v-6f1f6396]{margin-top:44px;color:#a3a8ad}.icon[data-v-6f1f6396]{width:44px;height:33px}section[data-v-6f1f6396]{padding:22px;display:-webkit-box;display:-ms-flexbox;display:flex;align-item:center}section.dark[data-v-6f1f6396]{background-color:#65696e;color:#d5dae0;margin-top:22px;text-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}section.dark .social[data-v-6f1f6396]{color:#d5dae0;margin-top:22px;height:44px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}header[data-v-6f1f6396],p[data-v-6f1f6396]{margin-left:44px;position:relative}header[data-v-6f1f6396]{font-family:Circular-Pro-Book,serif;color:#65696e;margin-bottom:11px}p>.icon[data-v-6f1f6396]{color:#989ca1;position:absolute;left:-55px;top:-5.5px}a>.icon[data-v-6f1f6396]{color:#fff}", "", {
      version: 3,
      sources: ["/var/lib/jenkins/workspace/let_platform-content_master-FRN7CKU26WU762PWBLZQ73ICWCRE76BSFSIX6TSBTA776LUYY3SA/components/SupportFooter.vue"],
      names: [],
      mappings: "AACA,yBAAyB,gBAAgB,aAAa,CACrD,AACD,uBAAuB,WAAW,WAAW,CAC5C,AACD,yBAAyB,aAAkB,oBAAoB,oBAAoB,aAAa,iBAAiB,CAChH,AACD,8BAA8B,yBAAyB,cAAc,gBAAgB,kBAAkB,4BAA4B,6BAA6B,0BAA0B,qBAAqB,CAC9M,AACD,sCAAsC,cAAc,gBAAgB,YAAY,oBAAoB,oBAAoB,aAAa,wBAAwB,qBAAqB,sBAAsB,CACvM,AACD,2CAA2C,iBAAiB,iBAAiB,CAC5E,AACD,wBAAwB,oCAAuC,cAAc,kBAAkB,CAC9F,AACD,yBAAyB,cAAc,kBAAkB,WAAW,UAAU,CAC7E,AACD,yBAAyB,UAAW,CACnC",
      file: "SupportFooter.vue",
      sourcesContent: ['\n.footer[data-v-6f1f6396]{margin-top:44px;color:#A3A8AD\n}\n.icon[data-v-6f1f6396]{width:44px;height:33px\n}\nsection[data-v-6f1f6396]{padding:22px 22px;display:-webkit-box;display:-ms-flexbox;display:flex;align-item:center\n}\nsection.dark[data-v-6f1f6396]{background-color:#65696e;color:#D5DAE0;margin-top:22px;text-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column\n}\nsection.dark .social[data-v-6f1f6396]{color:#D5DAE0;margin-top:22px;height:44px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center\n}\np[data-v-6f1f6396],header[data-v-6f1f6396]{margin-left:44px;position:relative\n}\nheader[data-v-6f1f6396]{font-family:"Circular-Pro-Book", serif;color:#65696e;margin-bottom:11px\n}\np>.icon[data-v-6f1f6396]{color:#989ca1;position:absolute;left:-55px;top:-5.5px\n}\na>.icon[data-v-6f1f6396]{color:white\n}\n'],
      sourceRoot: ""
    }])
  },
  276: function(t, e, o) {
    function a(t) {
      o(278)
    }
    var n = o(1)(null, o(277), a, "data-v-6f1f6396", null);
    t.exports = n.exports
  },
  277: function(t, e) {
    t.exports = {
      render: function() {
        var t = this,
          e = t.$createElement,
          o = t._self._c || e;
        return o("footer", {
          staticClass: "footer"
        }, [o("section", {
          staticClass: "dark"
        }, [o("div", {
          staticClass: "copyright"
        }, [o("div", [o("external-link", {
          attrs: {
            to: "https://breadwallet.com/privacy-policy/"
          }
        }, [t._v(t._s(t.$t("support.footer.privacy-policy")))]), t._v("\n          |\n          "), o("external-link", {
          attrs: {
            to: "mailto:support@breadwallet.com"
          }
        }, [t._v(t._s(t.$t("support.footer.email-us")))])], 1)]), o("div", {
          staticClass: "social"
        }, [o("external-link", {
          attrs: {
            to: "https://twitter.com/breadwalletapp"
          }
        }, [o("icon", {
          attrs: {
            name: "social-twitter"
          }
        })], 1), o("external-link", {
          attrs: {
            to: "https://www.reddit.com/r/breadwallet"
          }
        }, [o("icon", {
          attrs: {
            name: "social-reddit"
          }
        })], 1), o("external-link", {
          attrs: {
            to: "https://breadwallet.com/blog/"
          }
        }, [o("icon", {
          attrs: {
            name: "social-rss"
          }
        })], 1)], 1)])])
      },
      staticRenderFns: []
    }
  },
  278: function(t, e, o) {
    var a = o(275);
    "string" == typeof a && (a = [
      [t.i, a, ""]
    ]), a.locals && (t.exports = a.locals);
    o(5)("a282f166", a, !0)
  },
  281: function(t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = {
      props: ["articles"]
    }
  },
  284: function(t, e, o) {
    e = t.exports = o(4)(!0), e.push([t.i, 'ul[data-v-67a83e5f]{padding:0 22px 0 44px;list-style:none}a[data-v-67a83e5f]{text-decoration:none}a li[data-v-67a83e5f]{padding:5.5px 0;color:#4c98fc;text-indent:-15.4px}a li[data-v-67a83e5f]:before{content:"\\2022   ";color:#000}', "", {
      version: 3,
      sources: ["/var/lib/jenkins/workspace/let_platform-content_master-FRN7CKU26WU762PWBLZQ73ICWCRE76BSFSIX6TSBTA776LUYY3SA/components/ArticleList.vue"],
      names: [],
      mappings: "AACA,oBAAoB,sBAAsB,eAAe,CACxD,AACD,mBAAmB,oBAAoB,CACtC,AACD,sBAAsB,gBAAgB,cAAc,mBAAmB,CACtE,AACD,6BAA8B,mBAAa,UAAW,CACrD",
      file: "ArticleList.vue",
      sourcesContent: ['\nul[data-v-67a83e5f]{padding:0 22px 0 44px;list-style:none\n}\na[data-v-67a83e5f]{text-decoration:none\n}\na li[data-v-67a83e5f]{padding:5.5px 0;color:#4C98FC;text-indent:-15.4px\n}\na li[data-v-67a83e5f]::before{content:"• ";color:black\n}\n'],
      sourceRoot: ""
    }])
  },
  289: function(t, e, o) {
    function a(t) {
      o(294)
    }
    var n = o(1)(o(281), o(291), a, "data-v-67a83e5f", null);
    t.exports = n.exports
  },
  291: function(t, e) {
    t.exports = {
      render: function() {
        var t = this,
          e = t.$createElement,
          o = t._self._c || e;
        return o("ul", t._l(t.articles, function(e) {
          return o("nuxt-link", {
            key: e.id,
            attrs: {
              to: "/support/article?id=" + e.id
            }
          }, [o("li", [t._v(t._s(t._f("translate")(e, "title")))])])
        }))
      },
      staticRenderFns: []
    }
  },
  294: function(t, e, o) {
    var a = o(284);
    "string" == typeof a && (a = [
      [t.i, a, ""]
    ]), a.locals && (t.exports = a.locals);
    o(5)("7dff775f", a, !0)
  },
  392: function(t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var a = o(13),
      n = o.n(a),
      i = o(24),
      r = (o(73), o(32)),
      s = o(289),
      c = o.n(s),
      l = o(276),
      A = o.n(l);
    e.default = {
      layout: "support",
      components: {
        ArticleList: c.a,
        SupportFooter: A.a
      },
      computed: n()({
        id: function() {
          return this.$route.query.id
        }
      }, o.i(i.mapState)({
        section: function(t) {
          return t.support.sections[this.id]
        },
        articles: function(t) {
          var e = this;
          return o.i(r.g)(t.support.articles, function(t) {
            return t.section_id == e.id
          })
        }
      }))
    }
  },
  394: function(t, e, o) {
    e = t.exports = o(4)(!0), e.push([t.i, "h1[data-v-005cec46]{font-family:Circular-Pro-Book,serif;font-size:22px;padding:22px}.articles[data-v-005cec46]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}", "", {
      version: 3,
      sources: ["/var/lib/jenkins/workspace/let_platform-content_master-FRN7CKU26WU762PWBLZQ73ICWCRE76BSFSIX6TSBTA776LUYY3SA/pages/support/section.vue"],
      names: [],
      mappings: "AACA,oBAAoB,oCAAuC,eAAe,YAAY,CACrF,AACD,2BAA2B,mBAAmB,oBAAoB,WAAW,CAC5E",
      file: "section.vue",
      sourcesContent: ['\nh1[data-v-005cec46]{font-family:"Circular-Pro-Book", serif;font-size:22px;padding:22px\n}\n.articles[data-v-005cec46]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1\n}\n'],
      sourceRoot: ""
    }])
  },
  464: function(t, e) {
    t.exports = {
      render: function() {
        var t = this,
          e = t.$createElement,
          o = t._self._c || e;
        return t.section ? o("scroll", {
          attrs: {
            "scroller-style": {
              display: "flex",
              "flex-direction": "column"
            }
          }
        }, [o("portal", {
          attrs: {
            to: "mobile-title"
          }
        }, [t._v("\n    " + t._s(t.$t("support.title")) + "\n  ")]), o("h1", [t._v(t._s(t._f("translate")(t.section, "title")))]), o("article-list", {
          staticClass: "articles",
          attrs: {
            articles: t.articles
          }
        }), o("support-footer")], 1) : t._e()
      },
      staticRenderFns: []
    }
  },
  510: function(t, e, o) {
    var a = o(394);
    "string" == typeof a && (a = [
      [t.i, a, ""]
    ]), a.locals && (t.exports = a.locals);
    o(5)("51845126", a, !0)
  }
});
