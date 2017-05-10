"use strict";

webpackJsonp([1], { 26: function _(t, n, e) {
    "use strict";
    var i = e(7),
        a = e(71),
        r = e(68),
        o = e.n(r);i.a.use(a.a), n.a = new a.a({ routes: [{ path: "/", name: "Hello", component: o.a }] });
  }, 27: function _(t, n, e) {
    "use strict";
    var i = e(36),
        a = e.n(i),
        r = e(7),
        o = e(15),
        s = e(32),
        u = e(33);r.a.use(o.a);var c = { titleBar: { title: "主页" }, spinner: !1, play: { list: [], current: { data: { singer: [{ name: "" }], songname: "" } }, currentLyricList: {}, status: { total: 1e4, position: 0, playing: !1, mode: 1, rotate: !1, showLyric: !1, volume: 1, seekTo: 0, autoPlay: !0 }, isShow: !0, showMusicContent: !1, popList: { pop: !1 }, info: { show: !1, isMusicContent: !1, current: { data: { singer: [{ name: "" }], songname: "" } } } }, like: { list: [] }, myDiss: { list: [] }, list: { singer: [], album: [], mv: [] }, search: { keyword: "", page: 1, list: [], zhida: { pic: "", singerName: "", id: "", mid: "" } }, count: 0, fontSize: 0, barStatus: 2 },
        l = { INIT: function INIT(t, n) {
        n.playList && (t.play.list = n.playList), n.playCurrent && (t.play.current = n.playCurrent), n.playStatus && (t.play.status = n.playStatus), n.likeList && (t.like.list = n.likeList), n.myDissList && (t.myDiss.list = n.myDissList), n.playStatus && (t.play.status.autoPlay = !1, t.play.status.playing = !1, t.play.status.position = 0, t.play.status.rotate = !1);
      }, PLAY_SONG: function PLAY_SONG(t, n) {
        t.play.status.autoPlay = !0;var e = !1,
            i = !0,
            r = !1,
            o = void 0;try {
          for (var s, u = a()(t.play.list); !(i = (s = u.next()).done); i = !0) {
            if (s.value.data.songid === n.data.songid) {
              e = !0;break;
            }
          }
        } catch (t) {
          r = !0, o = t;
        } finally {
          try {
            !i && u.return && u.return();
          } finally {
            if (r) throw o;
          }
        }e ? t.play.current.data.songid !== n.data.songid && (t.play.status.rotate = !1, t.play.current = n, t.play.status.playing = !0) : (t.play.status.rotate = !1, t.play.list.push(n), t.play.current = n, t.play.status.playing = !0);
      }, SWITCH_MUSIC_CONTENT: function SWITCH_MUSIC_CONTENT(t, n) {
        t.play.showMusicContent = n;
      }, NEXT_SONG: function NEXT_SONG(t) {
        t.play.status.autoPlay = !0;var n = t.play.list;if (0 !== n.length && 1 !== n.length && 0 !== t.play.status.mode) if (t.play.status.rotate = !1, t.play.status.playing = !0, 1 === t.play.status.mode) {
          var e = 0,
              i = !0,
              r = !1,
              o = void 0;try {
            for (var s, u = a()(n); !(i = (s = u.next()).done); i = !0) {
              var c = s.value;if (c.data.songid === t.play.current.data.songid) break;e += 1;
            }
          } catch (t) {
            r = !0, o = t;
          } finally {
            try {
              !i && u.return && u.return();
            } finally {
              if (r) throw o;
            }
          }t.play.current = n[e === n.length - 1 ? 0 : e + 1];
        } else t.play.current = n[Math.floor(Math.random() * n.length)];
      }, LAST_SONG: function LAST_SONG(t) {
        t.play.status.autoPlay = !0;var n = t.play.list;if (0 !== n.length && 1 !== n.length && 0 !== t.play.status.mode) if (t.play.status.rotate = !1, t.play.status.playing = !0, 1 === t.play.status.mode) {
          var e = 0,
              i = !0,
              r = !1,
              o = void 0;try {
            for (var s, u = a()(n); !(i = (s = u.next()).done); i = !0) {
              var c = s.value;if (c.data.songid === t.play.current.data.songid) break;e += 1;
            }
          } catch (t) {
            r = !0, o = t;
          } finally {
            try {
              !i && u.return && u.return();
            } finally {
              if (r) throw o;
            }
          }t.play.current = n[0 === e ? n.length - 1 : e - 1];
        } else t.play.current = n[Math.floor(Math.random() * n.length)];
      }, SWITCH_LIKE: function SWITCH_LIKE(t, n) {
        var e = 0,
            i = !1,
            r = !0,
            o = !1,
            s = void 0;try {
          for (var u, c = a()(t.like.list); !(r = (u = c.next()).done); r = !0) {
            if (u.value.data.songid === n.data.songid) {
              i = !0;break;
            }e += 1;
          }
        } catch (t) {
          o = !0, s = t;
        } finally {
          try {
            !r && c.return && c.return();
          } finally {
            if (o) throw s;
          }
        }i ? t.like.list.splice(e, 1) : t.like.list.push(n);
      }, REMOVE_FROM_PLAY_LIST: function REMOVE_FROM_PLAY_LIST(t, n) {
        var e = t.play.list,
            i = 0,
            r = !0,
            o = !1,
            s = void 0;try {
          for (var u, c = a()(e); !(r = (u = c.next()).done); r = !0) {
            if (u.value.data.songid === n.data.songid) break;i += 1;
          }
        } catch (t) {
          o = !0, s = t;
        } finally {
          try {
            !r && c.return && c.return();
          } finally {
            if (o) throw s;
          }
        }1 === e.length ? (t.play.status.playing = !1, t.play.status.position = 0, t.play.status.rotate = !1, t.play.status.total = 1e4, t.play.current = { data: { singer: [{ name: "" }], songname: "" } }) : n.data.songid === t.play.current.data.songid && (t.play.current = e[i === e.length - 1 ? 0 : i + 1]), e.splice(i, 1);
      }, CLEAN_PLAY_LIST: function CLEAN_PLAY_LIST(t) {
        t.play.list = [], t.play.status.playing = !1, t.play.status.position = 0, t.play.status.rotate = !1, t.play.status.total = 1e4, t.play.popList.pop = !1, t.play.current = { data: { singer: [{ name: "" }], songname: "" } };
      }, UPDATE_POP_LIST: function UPDATE_POP_LIST(t, n) {
        t.play.popList.pop = n;
      }, SWITCH_LYRIC: function SWITCH_LYRIC(t) {
        t.play.status.showLyric = !t.play.status.showLyric;
      }, UPDATE_LYRIC_LIST: function UPDATE_LYRIC_LIST(t, n) {
        t.play.currentLyricList = n;
      }, SWITCH_INFO: function SWITCH_INFO(t, n) {
        n ? (t.play.info.current = n.current, t.play.info.show = !0, t.play.info.isMusicContent = n.isMusicContent) : t.play.info.show = !1;
      }, SET_FONT_SIZE: function SET_FONT_SIZE(t, n) {
        t.fontSize = n;
      }, SEEK_TO: function SEEK_TO(t, n) {
        t.seekTo = n;
      }, SET_VOLUME: function SET_VOLUME(t, n) {
        t.play.status.volume = n;
      }, UPDATE_PROGRESS: function UPDATE_PROGRESS(t, n) {
        t.play.status.total = n.total, t.play.status.position = n.position;
      }, SWITCH_PLAYER_STATUS: function SWITCH_PLAYER_STATUS(t) {
        t.play.status.autoPlay = !0, t.play.status.playing = !t.play.status.playing;
      }, PLAYER_STATUS: function PLAYER_STATUS(t) {
        t.play.status.playing = !0;
      }, SWITCH_ROTATE: function SWITCH_ROTATE(t, n) {
        t.play.status.rotate = n;
      }, UPDATE_TITLE: function UPDATE_TITLE(t, n) {
        t.titleBar.title = n;
      }, SWITCH_SONG: function SWITCH_SONG(t, n) {
        t.play.status.playing = !0, t.play.current = n;
      }, SWITCH_MODE: function SWITCH_MODE(t) {
        0 === t.play.status.mode ? t.play.status.mode = 1 : 1 === t.play.status.mode ? t.play.status.mode = 2 : t.play.status.mode = 0;
      }, SWITCH_BAR: function SWITCH_BAR(t, n) {
        t.barStatus = n;
      }, ADD_MAIN_LIST: function ADD_MAIN_LIST(t, n) {
        n.list.map(function (e) {
          t.list[n.name].push(e);
        });
      }, SET_SEARCH_LIST: function SET_SEARCH_LIST(t, n) {
        t.search.list = n.song.list, n.zhida.hasOwnProperty("zhida_singer") ? (t.search.zhida.id = n.zhida.zhida_singer.singerID, t.search.zhida.mid = n.zhida.zhida_singer.singerMID, t.search.zhida.pic = "//y.gtimg.cn/music/photo_new/T001R150x150M000" + t.search.zhida.mid + ".jpg?max_age=2592000", t.search.zhida.singerName = n.zhida.zhida_singer.singerName) : t.search.zhida.mid = "";
      }, ADD_NEXT: function ADD_NEXT(t, n) {
        var e = t.play.list,
            i = 0,
            r = !1,
            o = !1,
            s = !0,
            u = !1,
            c = void 0;try {
          for (var l, d = a()(e); !(s = (l = d.next()).done); s = !0) {
            if (l.value.data.songid === n.data.songid) {
              r = !0;break;
            }i += 1;
          }
        } catch (t) {
          u = !0, c = t;
        } finally {
          try {
            !s && d.return && d.return();
          } finally {
            if (u) throw c;
          }
        }r && e.splice(i, 1), i = 0;var f = !0,
            p = !1,
            m = void 0;try {
          for (var y, h = a()(e); !(f = (y = h.next()).done); f = !0) {
            if (y.value.data.songid === t.play.current.data.songid) {
              o = !0;break;
            }i += 1;
          }
        } catch (t) {
          p = !0, m = t;
        } finally {
          try {
            !f && h.return && h.return();
          } finally {
            if (p) throw m;
          }
        }o ? e.splice(i + 1, 0, n) : (t.play.status.rotate = !1, t.play.list.push(n), t.play.current = n, t.play.status.playing = !0);
      }, ADD_MYDISS: function ADD_MYDISS(t, n) {
        var e = !1,
            i = !0,
            r = !1,
            o = void 0;try {
          for (var s, u = a()(t.myDiss.list); !(i = (s = u.next()).done); i = !0) {
            if (s.value.data.songid === n.data.songid) {
              e = !0;break;
            }
          }
        } catch (t) {
          r = !0, o = t;
        } finally {
          try {
            !i && u.return && u.return();
          } finally {
            if (r) throw o;
          }
        }e || t.myDiss.list.push(n);
      }, ADD_SEARCH_LIST: function ADD_SEARCH_LIST(t, n) {
        n.song.list.map(function (n) {
          t.search.list.push(n);
        });
      }, UPDATE_KEYWORD: function UPDATE_KEYWORD(t, n) {
        t.search.keyword = n;
      }, UPDATE_SEARCH_PAGE: function UPDATE_SEARCH_PAGE(t, n) {
        t.search.page = n;
      }, CLEAN_SEARCH: function CLEAN_SEARCH(t) {
        t.search.list = [], t.search.page = 1, t.search.zhida = { pic: "", singerName: "", id: "", mid: "" };
      } };n.a = new o.a.Store({ state: c, mutations: l, actions: s, getters: u });
  }, 28: function _(t, n, e) {
    "use strict";
    n.a = { wlScreen: function wlScreen() {
        return { minHeight: "", currentHeight: "", currentWidth: "", landscape: !0, orientation: "0" };
      }, autoSize: function autoSize(t) {
        this.wlScreen().currentHeight = window.innerHeight, this.wlScreen().currentWidth = window.innerWidth, this.wlScreen().minHeight = this.wlScreen().currentHeight - 150, this.wlScreen().landscape = "0" === window.orientation, this.wlScreen().orientation = window.orientation;var n = document.documentElement,
            e = 100;!isNaN(t) && t > 0 && (e = t);var i = window.screen.width < window.screen.height ? window.screen.width : window.screen.height,
            a = this.isPC() ? 400 : i > 640 ? 640 : i;n.style.fontSize = a / 640 * e + "px";var r = new RegExp("(\\s|^)hide(\\s|$)");document.body.className = document.body.className.replace(r, " "), console.log("autoSize");
      }, trim: function trim(t) {
        if (void 0 != t && null != t) return t.replace(/(^\s*)|(\s*$)/g, "");
      }, scroll: { getScrollTop: function getScrollTop() {
          var t = 0;return document.documentElement && document.documentElement.scrollTop ? t = document.documentElement.scrollTop : document.body && (t = document.body.scrollTop), t;
        }, getClientHeight: function getClientHeight() {
          return document.body.clientHeight && document.documentElement.clientHeight ? Math.min(document.body.clientHeight, document.documentElement.clientHeight) : Math.max(document.body.clientHeight, document.documentElement.clientHeight);
        }, getScrollHeight: function getScrollHeight() {
          return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        } }, system: function system() {
        var t = navigator.userAgent;navigator.appVersion;return { trident: t.indexOf("Trident") > -1, presto: t.indexOf("Presto") > -1, webKit: t.indexOf("AppleWebKit") > -1, gecko: t.indexOf("Gecko") > -1 && -1 == t.indexOf("KHTML"), mobile: !!t.match(/AppleWebKit.*Mobile/i) || !!t.match(/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/), ios: !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), android: t.indexOf("Android") > -1 || t.indexOf("Linux") > -1, iPhone: t.indexOf("iPhone") > -1, iPad: t.indexOf("iPad") > -1, weixin: t.indexOf("MicroMessenger") > -1, qq: -1 !== t.indexOf("QQBrowser") };
      }, isPC: function isPC() {
        for (var t = navigator.userAgent, n = ["Android", "Linux", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], e = !0, i = 0; i < n.length; i++) {
          if (t.indexOf(n[i]) > 0) {
            e = !1;break;
          }
        }return e;
      }, dateFormat: function dateFormat(t) {
        var n = new Date(),
            e = { "M+": n.getMonth() + 1, "d+": n.getDate(), "h+": n.getHours(), "m+": n.getMinutes(), "s+": n.getSeconds(), "q+": Math.floor((n.getMonth() + 3) / 3), S: n.getMilliseconds() };/(y+)/.test(t) && (t = t.replace(RegExp.$1, (n.getFullYear() + "").substr(4 - RegExp.$1.length)));for (var i in e) {
          new RegExp("(" + i + ")").test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? e[i] : ("00" + e[i]).substr(("" + e[i]).length)));
        }return t;
      }, showApi: { appSecret: "32a7b9412fff4da0a5c688b77151b736", appId: "27598" } };
  }, 29: function _(t, n, e) {
    e(67);var i = e(25)(e(34), e(70), null, null);t.exports = i.exports;
  }, 31: function _(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });var i = e(7),
        a = e(29),
        r = e.n(a),
        o = e(26),
        s = e(30),
        u = e(15),
        c = e(27),
        l = e(28);i.a.config.productionTip = !1, i.a.use(s.a), i.a.use(u.a), l.a.autoSize(), new i.a({ el: "#app", router: o.a, store: c.a, template: "<App/>", components: { App: r.a } });
  }, 32: function _(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }), e.d(n, "playSong", function () {
      return i;
    }), e.d(n, "lastSong", function () {
      return a;
    }), e.d(n, "nextSong", function () {
      return r;
    }), e.d(n, "updateTitle", function () {
      return o;
    }), e.d(n, "setFontSize", function () {
      return s;
    }), e.d(n, "togglePopList", function () {
      return u;
    }), e.d(n, "removeFromPlayList", function () {
      return c;
    }), e.d(n, "cleanPlayList", function () {
      return l;
    }), e.d(n, "switchLike", function () {
      return d;
    }), e.d(n, "progress", function () {
      return f;
    }), e.d(n, "switchPlayerStatus", function () {
      return p;
    }), e.d(n, "playerStatus", function () {
      return m;
    }), e.d(n, "switchMode", function () {
      return y;
    }), e.d(n, "switchMusicContent", function () {
      return h;
    }), e.d(n, "switchLyric", function () {
      return g;
    }), e.d(n, "updateLyricList", function () {
      return _;
    }), e.d(n, "switchInfo", function () {
      return S;
    }), e.d(n, "addNext", function () {
      return v;
    }), e.d(n, "addMyDiss", function () {
      return T;
    }), e.d(n, "switchRotate", function () {
      return E;
    }), e.d(n, "seekTo", function () {
      return L;
    }), e.d(n, "setVolume", function () {
      return w;
    }), e.d(n, "init", function () {
      return A;
    }), e.d(n, "switchBar", function () {
      return I;
    }), e.d(n, "addMainList", function () {
      return P;
    }), e.d(n, "setSearchList", function () {
      return O;
    }), e.d(n, "addSearchList", function () {
      return C;
    }), e.d(n, "updateKeyword", function () {
      return b;
    }), e.d(n, "cleanSearch", function () {
      return D;
    }), e.d(n, "updateSearchPage", function () {
      return M;
    });var i = function i(t, n) {
      (0, t.commit)("PLAY_SONG", n);
    },
        a = function a(t) {
      (0, t.commit)("LAST_SONG");
    },
        r = function r(t) {
      (0, t.commit)("NEXT_SONG");
    },
        o = function o(t, n) {
      var e = t.commit;document.title = n, e("UPDATE_TITLE", n);
    },
        s = function s(t, n) {
      (0, t.commit)("SET_FONT_SIZE", n);
    },
        u = function u(t, n) {
      (0, t.commit)("UPDATE_POP_LIST", n);
    },
        c = function c(t, n) {
      (0, t.commit)("REMOVE_FROM_PLAY_LIST", n);
    },
        l = function l(t) {
      (0, t.commit)("CLEAN_PLAY_LIST");
    },
        d = function d(t, n) {
      (0, t.commit)("SWITCH_LIKE", n);
    },
        f = function f(t, n) {
      (0, t.commit)("UPDATE_PROGRESS", n);
    },
        p = function p(t) {
      (0, t.commit)("SWITCH_PLAYER_STATUS");
    },
        m = function m(t) {
      (0, t.commit)("PLAYER_STATUS");
    },
        y = function y(t) {
      (0, t.commit)("SWITCH_MODE");
    },
        h = function h(t, n) {
      (0, t.commit)("SWITCH_MUSIC_CONTENT", n);
    },
        g = function g(t) {
      (0, t.commit)("SWITCH_LYRIC");
    },
        _ = function _(t, n) {
      (0, t.commit)("UPDATE_LYRIC_LIST", n);
    },
        S = function S(t, n) {
      (0, t.commit)("SWITCH_INFO", n);
    },
        v = function v(t, n) {
      (0, t.commit)("ADD_NEXT", n);
    },
        T = function T(t, n) {
      (0, t.commit)("ADD_MYDISS", n);
    },
        E = function E(t, n) {
      (0, t.commit)("SWITCH_ROTATE", n);
    },
        L = function L(t, n) {
      (0, t.commit)("SEEK_TO", n);
    },
        w = function w(t, n) {
      (0, t.commit)("SET_VOLUME", n);
    },
        A = function A(t, n) {
      (0, t.commit)("INIT", n);
    },
        I = function I(t, n) {
      (0, t.commit)("SWITCH_BAR", n);
    },
        P = function P(t, n) {
      (0, t.commit)("ADD_MAIN_LIST", n);
    },
        O = function O(t, n) {
      (0, t.commit)("SET_SEARCH_LIST", n);
    },
        C = function C(t, n) {
      (0, t.commit)("ADD_SEARCH_LIST", n);
    },
        b = function b(t, n) {
      (0, t.commit)("UPDATE_KEYWORD", n);
    },
        D = function D(t) {
      (0, t.commit)("CLEAN_SEARCH");
    },
        M = function M(t, n) {
      (0, t.commit)("UPDATE_SEARCH_PAGE", n);
    };
  }, 33: function _(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }), e.d(n, "getCount", function () {
      return i;
    });var i = function i(t) {
      return t.state;
    };
  }, 34: function _(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }), n.default = { name: "app" };
  }, 35: function _(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }), n.default = { name: "hello", data: function data() {
        return { msg: "Welcome to Your Vue.js App" };
      } };
  }, 66: function _(t, n) {}, 67: function _(t, n) {}, 68: function _(t, n, e) {
    e(66);var i = e(25)(e(35), e(69), "data-v-01d776a7", null);t.exports = i.exports;
  }, 69: function _(t, n) {
    t.exports = { render: function render() {
        var t = this,
            n = t.$createElement,
            e = t._self._c || n;return e("div", { staticClass: "hello" }, [e("h1", [t._v(t._s(t.msg))]), t._v(" "), e("h2", [t._v("Essential Links")]), t._v(" "), t._m(0), t._v(" "), e("h2", [t._v("Ecosystem")]), t._v(" "), t._m(1)]);
      }, staticRenderFns: [function () {
        var t = this,
            n = t.$createElement,
            e = t._self._c || n;return e("ul", [e("li", [e("a", { attrs: { href: "https://vuejs.org", target: "_blank" } }, [t._v("Core Docs")])]), t._v(" "), e("li", [e("a", { attrs: { href: "https://forum.vuejs.org", target: "_blank" } }, [t._v("Forum")])]), t._v(" "), e("li", [e("a", { attrs: { href: "https://gitter.im/vuejs/vue", target: "_blank" } }, [t._v("Gitter Chat")])]), t._v(" "), e("li", [e("a", { attrs: { href: "https://twitter.com/vuejs", target: "_blank" } }, [t._v("Twitter")])]), t._v(" "), e("br"), t._v(" "), e("li", [e("a", { attrs: { href: "http://vuejs-templates.github.io/webpack/", target: "_blank" } }, [t._v("Docs for This Template")])])]);
      }, function () {
        var t = this,
            n = t.$createElement,
            e = t._self._c || n;return e("ul", [e("li", [e("a", { attrs: { href: "http://router.vuejs.org/", target: "_blank" } }, [t._v("vue-router")])]), t._v(" "), e("li", [e("a", { attrs: { href: "http://vuex.vuejs.org/", target: "_blank" } }, [t._v("vuex")])]), t._v(" "), e("li", [e("a", { attrs: { href: "http://vue-loader.vuejs.org/", target: "_blank" } }, [t._v("vue-loader")])]), t._v(" "), e("li", [e("a", { attrs: { href: "https://github.com/vuejs/awesome-vue", target: "_blank" } }, [t._v("awesome-vue")])])]);
      }] };
  }, 70: function _(t, n) {
    t.exports = { render: function render() {
        var t = this,
            n = t.$createElement,
            e = t._self._c || n;return e("div", { attrs: { id: "app" } }, [e("router-view")], 1);
      }, staticRenderFns: [] };
  }, 74: function _(t, n) {} }, [31]);
//# sourceMappingURL=app.82522e7b6bdf82471af0.js.map