webpackJsonp([2], {
  270: function(t, e, o) {
    function a(t) {
      o(536)
    }
    var i = o(1)(o(391), o(493), a, "data-v-768695f3", null);
    t.exports = i.exports
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
    var i = o(1)(null, o(277), a, "data-v-6f1f6396", null);
    t.exports = i.exports
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
    var i = o(1)(o(281), o(291), a, "data-v-67a83e5f", null);
    t.exports = i.exports
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
  299: function(t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var a = o(50),
      i = o.n(a),
      n = o(24),
      r = {
        "confirm-phrase": 115000757733,
        "display-currency": 234756748,
        "enable-fingerprint-authentication": 234758948,
        "fingerprint-spending-limit": 235053348,
        "import-wallet": 234979507,
        "paper-key": 115009772648,
        "re-scan": 115000752694,
        "receive-bitcoin": 115000763394,
        "reset-pin-paper-key": 115000763654,
        "security-center": 115000749354,
        "send-bitcoin": 235062488,
        "set-pin": 115000757753,
        "transaction-details": 115000763374,
        "transaction-fees": 234758088,
        "wipe-wallet": 115000757773,
        "write-phrase": 115000757793,
        "wallet-disabled": 115000757893,
        "recover-wallet": 115000763694
      };
    e.default = {
      props: ["slug", "id"],
      computed: o.i(n.mapState)({
        articles: function(t) {
          return !!t.support && (!!t.support.articles && 0 != i()(t.support.articles).length)
        },
        article: function(t) {
          var e = this.slug,
            o = this.id;
          return o = o || r[e], t.support.articles ? t.support.articles[o] : {}
        }
      })
    }
  },
  308: function(t, e, o) {
    e = t.exports = o(4)(!0), e.push([t.i, "h1[data-v-0341213e]{font-family:Circular-Pro-Book,serif;font-size:22px;padding:22px}.body[data-v-0341213e]{padding:0 22px}.body p[data-v-0341213e]{padding:11px 0}", "", {
      version: 3,
      sources: ["/var/lib/jenkins/workspace/let_platform-content_master-FRN7CKU26WU762PWBLZQ73ICWCRE76BSFSIX6TSBTA776LUYY3SA/components/ArticleShow.vue"],
      names: [],
      mappings: "AACA,oBAAoB,oCAAuC,eAAe,YAAY,CACrF,AACD,uBAAuB,cAAc,CACpC,AACD,yBAAyB,cAAc,CACtC",
      file: "ArticleShow.vue",
      sourcesContent: ['\nh1[data-v-0341213e]{font-family:"Circular-Pro-Book", serif;font-size:22px;padding:22px\n}\n.body[data-v-0341213e]{padding:0 22px\n}\n.body p[data-v-0341213e]{padding:11px 0\n}\n'],
      sourceRoot: ""
    }])
  },
  320: function(t, e, o) {
    function a(t) {
      o(336)
    }
    var i = o(1)(o(299), o(327), a, "data-v-0341213e", null);
    t.exports = i.exports
  },
  327: function(t, e) {
    t.exports = {
      render: function() {
        var t = this,
          e = t.$createElement,
          o = t._self._c || e;
        return o("div", [t.articles ? t.article ? o("div", [o("h1", [t._v(t._s(t._f("translate")(t.article, "title")))]), o("div", {
          staticClass: "body",
          domProps: {
            innerHTML: t._s(t.$options.filters.translate(t.article, "body"))
          }
        })]) : o("div", [o("h1", [t._v("Article Not Found")])]) : o("div", [t._v("\n    Loading...\n  ")])])
      },
      staticRenderFns: []
    }
  },
  336: function(t, e, o) {
    var a = o(308);
    "string" == typeof a && (a = [
      [t.i, a, ""]
    ]), a.locals && (t.exports = a.locals);
    o(5)("16501c56", a, !0)
  },
  391: function(t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var a = o(13),
      i = o.n(a),
      n = o(24),
      r = (o(73), o(289)),
      s = o.n(r),
      l = o(320),
      c = o.n(l),
      A = o(78),
      p = o(276),
      d = o.n(p),
      f = {
        115001977747: {
          icon: o(436),
          css: {
            "background-color": "#4C98FC",
            "background-image": "radial-gradient(50% 160%, rgba(255,255,255,0.30) 61%, rgba(255,255,255,0.00) 100%)",
            color: "white"
          }
        },
        115001977707: {
          icon: o(447),
          css: {
            "background-color": "white"
          }
        },
        115001986188: {
          icon: o(434),
          css: {
            "background-color": "white"
          }
        },
        115001977727: {
          icon: o(448),
          css: {
            "background-image": "linear-gradient(-90deg, #F7A445 2%, #FC5394 100%)",
            color: "white"
          }
        }
      };
    e.default = {
      layout: "support",
      data: function() {
        return {
          limit: 5
        }
      },
      components: {
        "article-show": c.a,
        "article-list": s.a,
        "support-footer": d.a,
        "inline-svg": A.a
      },
      computed: o.i(n.mapState)({
        articles: function(t) {
          return t.support.articles.ordered.slice(0, this.limit || 100).map(function(e) {
            return t.support.articles[e]
          })
        },
        styledSections: function(t) {
          var e = [],
            o = {};
          return t.support.sections.ordered.forEach(function(a) {
            var n = f[a];
            if (n) {
              var r = i()({}, t.support.sections[a]);
              r.articles = [], r.style = n, e.push(r), o[a] = r
            }
          }), e
        },
        sections: function(t) {
          var e = [],
            o = {};
          return t.support.sections.ordered.forEach(function(a) {
            if (!(a in f)) {
              var n = i()({}, t.support.sections[a]);
              n.articles = [], e.push(n), o[a] = n
            }
          }), e
        }
      })
    }
  },
  420: function(t, e, o) {
    e = t.exports = o(4)(!0), e.push([t.i, "header[data-v-768695f3]{height:44px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;font-size:16.5px;font-family:Circular-Pro-Bold;padding-left:16.5px;margin-bottom:11px}.articles-action[data-v-768695f3]{display:block;padding:22px;color:#a3a8ae;text-decoration:none;font-weight:100}.styled-section[data-v-768695f3]{border-radius:11px;-webkit-box-shadow:0 4px 8px -2px rgba(0,0,0,.15);box-shadow:0 4px 8px -2px rgba(0,0,0,.15);margin:22px;padding:22px;text-align:center;font-family:Circular-Pro-Book,serif}.styled-section h1[data-v-768695f3]{font-size:22px}.styled-section h2[data-v-768695f3]{font-size:16.5px}.sections[data-v-768695f3]{background-color:#fff;padding:0 22px;border-top:1px solid rgba(75,94,99,.16);border-bottom:1px solid rgba(75,94,99,.16)}.sections a[data-v-768695f3]{display:block;padding:22px 0;border-bottom:1px solid rgba(75,94,99,.16)}.sections a[data-v-768695f3]:last-child{border-bottom:none}.sections li[data-v-768695f3]{list-style:none;font-size:16.5px}", "", {
      version: 3,
      sources: ["/var/lib/jenkins/workspace/let_platform-content_master-FRN7CKU26WU762PWBLZQ73ICWCRE76BSFSIX6TSBTA776LUYY3SA/pages/support/index.vue"],
      names: [],
      mappings: "AACA,wBAAwB,YAAY,oBAAoB,oBAAoB,aAAa,sBAAsB,mBAAmB,qBAAqB,iBAAiB,8BAA8B,oBAAoB,kBAAkB,CAC3O,AACD,kCAAkC,cAAc,aAAa,cAAc,qBAAqB,eAAe,CAC9G,AACD,iCAAiC,mBAAmB,kDAAmD,0CAA2C,YAAY,aAAa,kBAAkB,mCAAsC,CAClO,AACD,oCAAoC,cAAc,CACjD,AACD,oCAAoC,gBAAgB,CACnD,AACD,2BAA2B,sBAAuB,eAAe,wCAAyC,0CAA2C,CACpJ,AACD,6BAA6B,cAAc,eAAe,0CAA2C,CACpG,AACD,wCAAwC,kBAAkB,CACzD,AACD,8BAA8B,gBAAgB,gBAAgB,CAC7D",
      file: "index.vue",
      sourcesContent: ['\nheader[data-v-768695f3]{height:44px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;font-size:16.5px;font-family:Circular-Pro-Bold;padding-left:16.5px;margin-bottom:11px\n}\n.articles-action[data-v-768695f3]{display:block;padding:22px;color:#a3a8ae;text-decoration:none;font-weight:100\n}\n.styled-section[data-v-768695f3]{border-radius:11px;-webkit-box-shadow:0 4px 8px -2px rgba(0,0,0,0.15);box-shadow:0 4px 8px -2px rgba(0,0,0,0.15);margin:22px;padding:22px;text-align:center;font-family:"Circular-Pro-Book", serif\n}\n.styled-section h1[data-v-768695f3]{font-size:22px\n}\n.styled-section h2[data-v-768695f3]{font-size:16.5px\n}\n.sections[data-v-768695f3]{background-color:white;padding:0 22px;border-top:1px solid rgba(75,94,99,0.16);border-bottom:1px solid rgba(75,94,99,0.16)\n}\n.sections a[data-v-768695f3]{display:block;padding:22px 0;border-bottom:1px solid rgba(75,94,99,0.16)\n}\n.sections a[data-v-768695f3]:last-child{border-bottom:none\n}\n.sections li[data-v-768695f3]{list-style:none;font-size:16.5px\n}\n'],
      sourceRoot: ""
    }])
  },
  434: function(t, e, o) {
    t.exports = o.p + "img/buy-and-sell-bitcoin.e5f0427.svg"
  },
  436: function(t, e, o) {
    t.exports = o.p + "img/import-wallet.b9fb6cf.svg"
  },
  447: function(t, e, o) {
    t.exports = o.p + "img/send-and-receive-bitcoin.df167e8.svg"
  },
  448: function(t, e, o) {
    t.exports = o.p + "img/settings-and-security.21a6988.svg"
  },
  493: function(t, e) {
    t.exports = {
      render: function() {
        var t = this,
          e = t.$createElement,
          o = t._self._c || e;
        return o("scroll", [t.$route.query && t.$route.query.slug ? o("div", [o("article-show", {
          attrs: {
            slug: t.$route.query.slug
          }
        })], 1) : o("div", [o("portal", {
          attrs: {
            to: "mobile-title"
          }
        }, [t._v("\n      " + t._s(t.$t("support.title")) + "\n    ")]), o("header", [t._v(t._s(t.$t("support.faq")))]), o("article-list", {
          attrs: {
            articles: t.articles
          }
        }), t.limit > 0 ? o("a", {
          staticClass: "articles-action",
          attrs: {
            href: "#"
          },
          on: {
            click: function(e) {
              t.limit = 0
            }
          }
        }, [t._v("See More")]) : t._e(), 0 == t.limit ? o("a", {
          staticClass: "articles-action",
          attrs: {
            href: "#"
          },
          on: {
            click: function(e) {
              t.limit = 5
            }
          }
        }, [t._v("See Less")]) : t._e(), t._l(t.styledSections, function(e) {
          return o("nuxt-link", {
            key: e.id,
            attrs: {
              to: "/support/section?id=" + e.id
            }
          }, [o("div", {
            staticClass: "styled-section",
            style: e.style.css
          }, [e.style.icon ? o("img", {
            attrs: {
              src: e.style.icon
            }
          }) : t._e(), o("h1", [t._v(t._s(t._f("translate")(e, "title")))]), o("h2", [t._v("See Articles "), o("icon", {
            attrs: {
              name: "chevron-right"
            }
          })], 1)])])
        }), t.sections.length ? o("div", [o("header", [t._v(t._s(t.$t("support.browse_topics")))]), o("ul", {
          staticClass: "sections"
        }, t._l(t.sections, function(e) {
          return o("nuxt-link", {
            key: e.id,
            attrs: {
              to: "/support/section?id=" + e.id
            }
          }, [o("li", {
            staticClass: "section"
          }, [t._v("\n            " + t._s(e.name) + "\n          ")])])
        }))]) : t._e(), o("support-footer")], 2)])
      },
      staticRenderFns: []
    }
  },
  536: function(t, e, o) {
    var a = o(420);
    "string" == typeof a && (a = [
      [t.i, a, ""]
    ]), a.locals && (t.exports = a.locals);
    o(5)("9ddd4710", a, !0)
  }
});
