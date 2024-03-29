﻿if (window.ActiveXObject || "ActiveXObject" in window) {
    var script = document.createElement("script");
    script.type = "text/javaScript",
        script.src = "http://cdn.jsdelivr.net/bluebird/3.5.0/bluebird.min.js",
        document.getElementsByTagName("head")[0].appendChild(script)
} !
    function (a) {
        function c(d) {
            if (b[d]) return b[d].exports;
            var e = b[d] = {
                i: d,
                l: !1,
                exports: {}
            };
            return a[d].call(e.exports, e, e.exports, c),
                e.l = !0,
                e.exports
        }
        var b = {};
        c.m = a,
            c.c = b,
            c.d = function (a, b, d) {
                c.o(a, b) || Object.defineProperty(a, b, {
                    enumerable: !0,
                    get: d
                })
            },
            c.r = function (a) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(a, "__esModule", {
                        value: !0
                    })
            },
            c.t = function (a, b) {
                var d, e;
                if (1 & b && (a = c(a)), 8 & b) return a;
                if (4 & b && "object" == typeof a && a && a.__esModule) return a;
                if (d = Object.create(null), c.r(d), Object.defineProperty(d, "default", {
                    enumerable: !0,
                    value: a
                }), 2 & b && "string" != typeof a) for (e in a) c.d(d, e,
                    function (b) {
                        return a[b]
                    }.bind(null, e));
                return d
            },
            c.n = function (a) {
                var b = a && a.__esModule ?
                    function () {
                        return a.
                            default
                    } :
                    function () {
                        return a
                    };
                return c.d(b, "a", b),
                    b
            },
            c.o = function (a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            },
            c.p = "",
            c(c.s = 1)
    }([function (a) {
        a.exports = '<div class="ui__alert_bg in"></div>\n<div class="ui__alert_content in">\n    <div class="ui__content_body"></div>\n    <div class="ui__content_foot"></div>\n</div>'
    },
    function (a, b, c) {
        "use strict";
        c.r(b),
            c(2);
        var d = c(0),
            e = c.n(d);
        document.createElement("div").innerHTML = e.a,
            function (a, b) {
                function f(a) {
                    return function (d) {
                        var f, h, i, j, k, l;
                        return "string" == typeof d && (d = {
                            content: d
                        }),
                            !1 === d.title && d.title,
                            d.type = a,
                            f = b.createElement("div"),
                            f.className = "ui__alert",
                            f.style.zIndex = c++ ,
                            f.innerHTML = e.a,
                            h = d.title || "友情提示",
                            i = d.cancelText || "取消",
                            j = d.doneText || "确认",
                            k = '<h4 class="ui__title">' + h + "</h4>",
                            k += "<div>" + d.content + "</div>",
                            l = '<a class="btn_done">' + j + "</a>",
                            "confirm" === d.type && (l += '<a class="btn_cancel">' + i + "</a>"),
                            f.querySelector(".ui__content_body").innerHTML = k,
                            f.querySelector(".ui__content_foot").innerHTML = l,
                            b.body.appendChild(f),
                            new Promise(function (a, b) {
                                f.querySelector(".btn_done").onclick = function () {
                                    g(f),
                                        a()
                                },
                                    "confirm" === d.type && (f.querySelector(".btn_cancel").onclick = function () {
                                        g(f),
                                            b()
                                    })
                            })
                    }
                }
                function g(a) {
                    var c = a.children[0];
                    c.addEventListener("animationend",
                        function () {
                            b.body.removeChild(a)
                        }),
                        c.addEventListener("webkitAnimationEnd",
                            function () {
                                b.body.removeChild(a)
                            }),
                        a.children[0].className = "ui__alert_bg out",
                        a.children[1].className = "ui__alert_content out"
                }
                a.alert = f("alert"),
                    a.confirm = f("confirm"),
                    a.dialog = f("alert");
                var c = 9999,
                    d = b.createElement("style");
                d.innerHTML = ".",
                    b.head.appendChild(d),
                    a.toast = function (a) {
                        var c, d;
                        "string" == typeof a && (a = {
                            content: a
                        }),
                            c = b.createElement("div"),
                            c.innerHTML = '<div class="ui__toast_bg"></div><div class="ui__toast_text">' + a.content + "</div>",
                            b.body.appendChild(c),
                            d = setTimeout(function () {
                                clearTimeout(d),
                                    b.body.removeChild(c)
                            },
                                a.time || 2e3)
                    }
            }(window, document)
    },
    function (a, b, c) {
        var e, d = c(3);
        "string" == typeof d && (d = [[a.i, d, ""]]),
            e = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            },
            c(5)(d, e),
            d.locals && (a.exports = d.locals)
    },
    function (a, b, c) {
        (a.exports = c(4)(!1)).push([a.i, ".ui__alert * {\n  padding: 0;\n  margin: 0;\n}\n.ui__alert .ui__alert_bg {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9998;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.2);\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n}\n.ui__alert .ui__alert_bg.in {\n  -webkit-animation-name: bgFadeIn;\n          animation-name: bgFadeIn;\n}\n.ui__alert .ui__alert_bg.out {\n  -webkit-animation-name: bgFadeOut;\n          animation-name: bgFadeOut;\n}\n.ui__alert .ui__alert_content {\n  text-align: center;\n  position: fixed;\n  min-width: 250px;\n  max-width: 280px;\n  z-index: 9999;\n  background: #fff;\n  border-radius: 10px;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n}\n.ui__alert .ui__alert_content.in {\n  -webkit-animation-name: contentZoomIn;\n          animation-name: contentZoomIn;\n}\n.ui__alert .ui__alert_content.out {\n  -webkit-animation-name: contentZoomOut;\n          animation-name: contentZoomOut;\n}\n.ui__alert .ui__alert_content .ui__content_body {\n  font-size: 14px;\n  padding: 18px;\n  border-bottom: 1px solid #eee;\n}\n.ui__alert .ui__alert_content .ui__content_body .ui__title {\n  margin-bottom: 5px;\n  font-size: 16px;\n}\n.ui__alert .ui__alert_content .ui__content_foot {\n cursor: pointer; flex;\n display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.ui__alert .ui__alert_content .ui__content_foot a {\n  font-size: 14px;\n  color: #017aff;\n  display: block;\n  text-decoration: none;\n  flex: 1;\n  text-align: center;\n  line-height: 40px;\n  border-left: 1px solid #eee;\n}\n.ui__alert .ui__alert_content .ui__content_foot a:first-child {\n  border-left: none;\n}\n.ui__toast_bg {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9998;\n  position: fixed;\n}\n.ui__toast_text {\n  line-height: 1;\n  text-align: center;\n  position: fixed;\n  max-width: 200px;\n  z-index: 9999;\n  padding: 14px;\n  color: #fff;\n  background: #000;\n  border-radius: 5px;\n  left: 50%;\n  top: 50%;\n  font-size: 14px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n@-webkit-keyframes bgFadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes bgFadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes bgFadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes bgFadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes contentZoomIn {\n  0% {\n    -webkit-transform: translate(-50%, -30%);\n            transform: translate(-50%, -30%);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    opacity: 1;\n  }\n}\n@keyframes contentZoomIn {\n  0% {\n    -webkit-transform: translate(-50%, -30%);\n            transform: translate(-50%, -30%);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes contentZoomOut {\n  0% {\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: translate(-50%, -30%);\n            transform: translate(-50%, -30%);\n    opacity: 0;\n  }\n}\n@keyframes contentZoomOut {\n  0% {\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: translate(-50%, -30%);\n            transform: translate(-50%, -30%);\n    opacity: 0;\n  }\n}\n", ""])
    },
    function (a) {
        "use strict";
        a.exports = function (a) {
            var b = [];
            return b.toString = function () {
                return this.map(function (b) {
                    var c = function (a, b) {
                        var e, f, g, c = a[1] || "",
                            d = a[3];
                        return d ? b && "function" == typeof btoa ? (g = d, e = "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(g)))) + " */", f = d.sources.map(function (a) {
                            return "/*# sourceURL=" + d.sourceRoot + a + " */"
                        }), [c].concat(f).concat([e]).join("\n")) : [c].join("\n") : c
                    }(b, a);
                    return b[2] ? "@media " + b[2] + "{" + c + "}" : c
                }).join("")
            },
                b.i = function (a, c) {
                    var d, e, f, g;
                    for ("string" == typeof a && (a = [[null, a, ""]]), d = {},
                        e = 0; e < this.length; e++) f = this[e][0],
                            null != f && (d[f] = !0);
                    for (e = 0; e < a.length; e++) g = a[e],
                        null != g[0] && d[g[0]] || (c && !g[2] ? g[2] = c : c && (g[2] = "(" + g[2] + ") and (" + c + ")"), b.push(g))
                },
                b
        }
    },
    function (a, b, c) {
        function m(a, b) {
            var c, d, e, g, h;
            for (c = 0; c < a.length; c++) if (d = a[c], e = f[d.id]) {
                for (e.refs++ , g = 0; g < e.parts.length; g++) e.parts[g](d.parts[g]);
                for (; g < d.parts.length; g++) e.parts.push(s(d.parts[g], b))
            } else {
                for (h = [], g = 0; g < d.parts.length; g++) h.push(s(d.parts[g], b));
                f[d.id] = {
                    id: d.id,
                    refs: 1,
                    parts: h
                }
            }
        }
        function n(a, b) {
            var c, d, e, f, g, h;
            for (c = [], d = {},
                e = 0; e < a.length; e++) f = a[e],
                    g = b.base ? f[0] + b.base : f[0],
                    h = {
                        css: f[1],
                        media: f[2],
                        sourceMap: f[3]
                    },
                    d[g] ? d[g].parts.push(h) : c.push(d[g] = {
                        id: g,
                        parts: [h]
                    });
            return c
        }
        function o(a, b) {
            var d, e, c = h(a.insertInto);
            if (!c) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            if (d = k[k.length - 1], "top" === a.insertAt) d ? d.nextSibling ? c.insertBefore(b, d.nextSibling) : c.appendChild(b) : c.insertBefore(b, c.firstChild),
                k.push(b);
            else if ("bottom" === a.insertAt) c.appendChild(b);
            else {
                if ("object" != typeof a.insertAt || !a.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                e = h(a.insertAt.before, c),
                    c.insertBefore(b, e)
            }
        }
        function p(a) {
            if (null === a.parentNode) return !1;
            a.parentNode.removeChild(a);
            var b = k.indexOf(a);
            b >= 0 && k.splice(b, 1)
        }
        function q(a) {
            var d, b = document.createElement("style");
            return void 0 === a.attrs.type && (a.attrs.type = "text/css"),
                void 0 === a.attrs.nonce && (d = function () {
                    return c.nc
                }(), d && (a.attrs.nonce = d)),
                r(b, a.attrs),
                o(a, b),
                b
        }
        function r(a, b) {
            Object.keys(b).forEach(function (c) {
                a.setAttribute(c, b[c])
            })
        }
        function s(a, b) {
            var c, d, e, f, g;
            if (b.transform && a.css) {
                if (!(f = "function" == typeof b.transform ? b.transform(a.css) : b.transform.
                    default(a.css))) return function () { };
                a.css = f
            }
            return b.singleton ? (g = j++ , c = i || (i = q(b)), d = v.bind(null, c, g, !1), e = v.bind(null, c, g, !0)) : a.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (c = function (a) {
                var b = document.createElement("link");
                return void 0 === a.attrs.type && (a.attrs.type = "text/css"),
                    a.attrs.rel = "stylesheet",
                    r(b, a.attrs),
                    o(a, b),
                    b
            }(b), d = function (a, b, c) {
                var g, h, d = c.css,
                    e = c.sourceMap,
                    f = void 0 === b.convertToAbsoluteUrls && e; (b.convertToAbsoluteUrls || f) && (d = l(d)),
                        e && (d += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"),
                        g = new Blob([d], {
                            type: "text/css"
                        }),
                        h = a.href,
                        a.href = URL.createObjectURL(g),
                        h && URL.revokeObjectURL(h)
            }.bind(null, c, b), e = function () {
                p(c),
                    c.href && URL.revokeObjectURL(c.href)
            }) : (c = q(b), d = function (a, b) {
                var c = b.css,
                    d = b.media;
                if (d && a.setAttribute("media", d), a.styleSheet) a.styleSheet.cssText = c;
                else {
                    for (; a.firstChild;) a.removeChild(a.firstChild);
                    a.appendChild(document.createTextNode(c))
                }
            }.bind(null, c), e = function () {
                p(c)
            }),
                d(a),
                function (b) {
                    if (b) {
                        if (b.css === a.css && b.media === a.media && b.sourceMap === a.sourceMap) return;
                        d(a = b)
                    } else e()
                }
        }
        function v(a, b, c, d) {
            var f, g, e = c ? "" : d.css;
            a.styleSheet ? a.styleSheet.cssText = u(b, e) : (f = document.createTextNode(e), g = a.childNodes, g[b] && a.removeChild(g[b]), g.length ? a.insertBefore(f, g[b]) : a.appendChild(f))
        }
        var d, e, t, u, f = {},
            g = (d = function () {
                return window && document && document.all && !window.atob
            },
                function () {
                    return void 0 === e && (e = d.apply(this, arguments)),
                        e
                }),
            h = function () {
                var b = {};
                return function (a, c) {
                    if ("function" == typeof a) return a();
                    if (void 0 === b[a]) {
                        var d = function (a, b) {
                            return b ? b.querySelector(a) : document.querySelector(a)
                        }.call(this, a, c);
                        if (window.HTMLIFrameElement && d instanceof window.HTMLIFrameElement) try {
                            d = d.contentDocument.head
                        } catch (a) {
                            d = null
                        }
                        b[a] = d
                    }
                    return b[a]
                }
            }(),
            i = null,
            j = 0,
            k = [],
            l = c(6);
        a.exports = function (a, b) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment"); (b = b || {}).attrs = "object" == typeof b.attrs ? b.attrs : {},
                b.singleton || "boolean" == typeof b.singleton || (b.singleton = g()),
                b.insertInto || (b.insertInto = "head"),
                b.insertAt || (b.insertAt = "bottom");
            var c = n(a, b);
            return m(c, b),
                function (a) {
                    var d, e, g, h, i;
                    for (d = [], e = 0; e < c.length; e++) g = c[e],
                        (h = f[g.id]).refs-- ,
                        d.push(h);
                    for (a && m(n(a, b), b), e = 0; e < d.length; e++) if (0 === (h = d[e]).refs) {
                        for (i = 0; i < h.parts.length; i++) h.parts[i]();
                        delete f[h.id]
                    }
                }
        },
            t = [],
            u = function (a, b) {
                return t[a] = b,
                    t.filter(Boolean).join("\n")
            }
    },
    function (a) {
        a.exports = function (a) {
            var c, d, b = "undefined" != typeof window && window.location;
            if (!b) throw new Error("fixUrls requires window.location");
            return a && "string" == typeof a ? (c = b.protocol + "//" + b.host, d = c + b.pathname.replace(/\/[^\/]*$/, "/"), a.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
                function (a, b) {
                    var e, f = b.trim().replace(/^"(.*)"$/,
                        function (a, b) {
                            return b
                        }).replace(/^'(.*)'$/,
                            function (a, b) {
                                return b
                            });
                    return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(f) ? a : (e = 0 === f.indexOf("//") ? f : 0 === f.indexOf("/") ? c + f : d + f.replace(/^\.\//, ""), "url(" + JSON.stringify(e) + ")")
                })) : a
        }
    }]),
    function (a) {
        function e(a) {
            a.element.children(".menuUl").find("li").children(".menuUl").hide();
            var b = a.element.children(".menuUl").find("li").find("i[ischek='true']");
            b.attr("ischek", "false"),
                b.removeClass(a.mouIconOpen).addClass(a.mouIconClose)
        }
        var f, g, b = "list-style-type: none;  margin: 10px 0;  cursor: pointer;",
            c = "margin-right: 10px; top: 0px; cursor: pointer; color: #161616;",
            d = function (a, b) {
                this.element = a,
                    this.JSONArr = b.arr,
                    this.simIcon = b.simIcon || "",
                    this.sign = b.sign || !1,
                    this.mouIconOpen = b.mouIconOpen || "fa fa-minus-square",
                    this.mouIconClose = b.mouIconClose || "fa fa-plus-square",
                    this.callback = b.callback ||
                    function () { },
                    this.init()
            };
        d.prototype.init = function () {
            var a = this;
            this.element.append(this.toHTML(this.JSONArr)),
                this.sign && e(a),
                this.bindEvent()
        },
            d.prototype.toHTML = function (a) {
                var d = "<ul class='menuUl'>",
                    e = this;
                return a.map(function (a) {
                    var g, f = "<li style='" + b + "'>";
                    a.child && a.child.length > 0 ? (f += "<i style='" + c + "' p-id='" + a.id + "' ischek='true' class='" + e.mouIconOpen + "'></i>" + "<span p-id='" + a.id + "'>" + a.name + "</span>", g = e.toHTML(a.child), f += g + "</li>") : f += "<i style='" + c + "' p-id='" + a.id + "' class='" + e.simIcon + "'></i>" + "<span p-id='" + a.id + "'>" + a.name + "</span></li>",
                        d += f
                }),
                    d += "</ul>"
            },
            d.prototype.bindEvent = function () {
                var b = this;
                this.element.find(".menuUl li i").click(function () {
                    var c = a(this).attr("ischek"),
                        d = a(this).closest("li").children(".menuUl");
                    "true" == c ? (a(this).removeClass(b.mouIconOpen).addClass(b.mouIconClose), d.hide(), a(this).attr("ischek", "false")) : "false" == c && (d.show(), a(this).removeClass(b.mouIconClose).addClass(b.mouIconOpen), a(this).attr("ischek", "true"))
                }),
                    this.element.find(".menuUl li span,.menuUl li i").click(function () {
                        var c = a(this).attr("p-id");
                        b.callback(c)
                    })
            },
            f = function (a, b) {
                this.element = a,
                    this.JSONArr = b.arr,
                    this.simIcon = b.simIcon || "",
                    this.Method = b.Method || "POST",
                    this.Demo = b.Demo || !1,
                    this.DemoData = [{
                        id: 1,
                        name: "一级菜单A",
                        type: "leaf"
                    },
                    {
                        id: 2,
                        name: "一级菜单B",
                        type: "mid"
                    },
                    {
                        id: 3,
                        name: "一级菜单C",
                        type: "leaf"
                    }],
                    this.mouIconOpen = b.mouIconOpen || "fa fa-minus-square",
                    this.mouIconClose = b.mouIconClose || "fa fa-plus-square",
                    this.callback = b.callback ||
                    function () { },
                    this.url = b.url,
                    this.init(0)
            },
            f.prototype.init = function (b) {
                var c = this;
                c.Demo ? (c.element.append(c.toOneHTML(c.DemoData)), console.log("初始化加载"), c.bindEvent()) : a.
                    ({
                    url: c.url,
                    type: c.Method,
                    data: {
                        id: b
                    },
                    dataType: "json",
                    success: function (a) {
                        200 == a.code ? (c.element.append(c.toOneHTML(a.data)), console.log("初始化加载"), c.bindEvent()) : alert(a.msg)
                    }
                })
            },
            f.prototype.toOneHTML = function (a) {
                var d = "<ul class='menuUl'>",
                    e = this;
                return a.map(function (a) {
                    d += "<li style='" + b + "'>",
                        d += "leaf" != a.type ? "<i style='" + c + "' p-id='" + a.id + "' lu-sign='" + a.type + "' ischek='false' class='" + e.mouIconClose + "' unLoaded></i>" + "<span p-id='" + a.id + "' lu-sign='" + a.type + "' ischek='false'>" + a.name + "</span></li>" : "<i style='" + c + "' p-id='" + a.id + "' class='" + e.simIcon + "'></i>" + "<span p-id='" + a.id + "'>" + a.name + "</span></li>"
                }),
                    d += "</ul>"
            },
            f.prototype.update = function (b, c) {
                var d = this;
                d.Demo ? (b.parent().append(d.toOneHTML(d.DemoData)), b.removeAttr("unLoaded"), d.bindEvent(), console.log("对" + c + "节点更新")) : a.ajax({
                    url: d.url,
                    type: d.Method,
                    data: {
                        id: c
                    },
                    dataType: "json",
                    success: function (a) {
                        b.parent().append(d.toOneHTML(a.data)),
                            b.removeAttr("unLoaded"),
                            d.bindEvent(),
                            console.log("对" + c + "节点更新")
                    }
                })
            },
            f.prototype.bindEvent = function () {
                var b = this;
                console.log("事件绑定"),
                    this.element.find(".menuUl li i[loaded]").unbind(),
                    this.element.find(".menuUl li i[unLoaded]").unbind(),
                    this.element.find(".menuUl li span,.menuUl li i").unbind(),
                    this.element.find(".menuUl li i[loaded]").click(function () {
                        var c = a(this),
                            d = c.attr("ischek"),
                            e = c.closest("li").children(".menuUl");
                        c.attr("p-id"),
                            console.log("触发已加载事件"),
                            "true" == d ? (e.hide(), c.removeClass(b.mouIconOpen).addClass(b.mouIconClose), c.attr("ischek", "false")) : "false" == d && (e.show(), c.removeClass(b.mouIconClose).addClass(b.mouIconOpen), c.attr("ischek", "true"))
                    }),
                    this.element.find(".menuUl li span,.menuUl li i").click(function () {
                        var c = a(this).attr("p-id");
                        b.callback(c)
                    }),
                    this.element.find(".menuUl li i[unLoaded]").click(function () {
                        var c = a(this),
                            d = c.attr("p-id");
                        c.attr("loaded", ""),
                            c.removeClass(b.mouIconClose).addClass(b.mouIconOpen),
                            c.attr("ischek", "true"),
                            console.log("触发未加载事件"),
                            b.update(c, d)
                    })
            },
            g = function (a, b) {
                this.element = a,
                    this.JSONArr = b.arr,
                    this.Method = b.Method || "POST",
                    this.Demo = b.Demo || !1,
                    this.DemoData = {
                        0: [{
                            id: 1,
                            name: "一级菜单A",
                            type: "leaf"
                        },
                        {
                            id: 2,
                            name: "一级菜单B",
                            type: "mid"
                        },
                        {
                            id: 3,
                            name: "一级菜单C",
                            type: "leaf"
                        }],
                        2: [{
                            id: 5,
                            name: "二级级菜单A",
                            type: "leaf"
                        }]
                    },
                    this.simIcon = b.simIcon || "",
                    this.mouIconOpen = b.mouIconOpen || "fa fa-minus-square",
                    this.mouIconClose = b.mouIconClose || "fa fa-plus-square",
                    this.callback = b.callback ||
                    function () { },
                    this.url = b.url,
                    this.init(0)
            },
            g.prototype.init = function (b) {
                var c = this;
                c.Demo ? (c.element.append(c.toOneHTML(c.DemoData[b], !0)), console.log("初始化加载"), c.bindEvent()) : a.ajax({
                    url: c.url,
                    type: c.Method,
                    data: {
                        id: b,
                        type: "query"
                    },
                    dataType: "json",
                    success: function (a) {
                        debugger
                        200 == a.code ? (c.element.append(c.toOneHTML(a.data, !0)), console.log("初始化加载"), c.bindEvent()) : alert(a.msg)
                    }
                })
            },
            g.prototype.toOneHTML = function (a, d) {
                var f, g, e = "border: none;background: #eee;width: auto;height: 25px;border-radius: 5px;cursor: pointer;margin-left:10px";
                return f = d ? "<ul class='menuUl'><li style='" + b + "'><button style='" + e + "' p-id='0' lu-sign='topAdd' lu-type='createChild'>新增</button></li>" : "<ul class='menuUl'>",
                    g = this,
                    a.map(function (a) {
                        f += "<li style='" + b + "'>",
                            f += "leaf" != a.type ? "<i style='" + c + "' p-id='" + a.id + "' lu-sign='" + a.type + "' ischek='false' class='" + g.mouIconClose + "' unLoaded></i>" + "<span p-id='" + a.id + "' lu-sign='" + a.type + "' ischek='false'>" + a.name + "</span>" + "<button style='" + e + "' p-id='" + a.id + "' lu-sign='" + a.type + "' lu-type='createChild'>新增子菜单</button>" + "<button style='" + e + "' p-id='" + a.id + "' lu-sign='" + a.type + "' lu-type='delete'>删除</button></li>" : "<i style='" + c + "' p-id='" + a.id + "' class='" + g.simIcon + "'></i>" + "<span p-id='" + a.id + "'>" + a.name + "</span>" + "<button style='" + e + "' p-id='" + a.id + "' lu-sign='" + a.type + "' lu-type='createChild'>新增子菜单</button>" + "<button style='" + e + "' p-id='" + a.id + "' lu-sign='" + a.type + "' lu-type='delete'>删除</button></li>"
                    }),
                    f += "</ul>"
            },
            g.prototype.update = function (b, c) {
                var d = this;
                d.Demo ? (b.parent().append(d.toOneHTML(d.DemoData[c])), b.removeAttr("unLoaded"), d.bindEvent(), console.log("对" + c + "节点更新")) : a.ajax({
                    url: d.url,
                    type: d.Method,
                    data: {
                        id: c,
                        type: "query"
                    },
                    dataType: "json",
                    success: function (a) {
                        200 == a.code ? (b.parent().append(d.toOneHTML(a.data)), b.removeAttr("unLoaded"), d.bindEvent(), console.log("对" + c + "节点更新")) : alert(a.msg)
                    }
                })
            },
            g.prototype.bindEvent = function () {
                var e, d = this;
                console.log("事件绑定"),
                    e = a("button"),
                    this.element.find(".menuUl li i[loaded]").unbind(),
                    this.element.find(".menuUl li i[unLoaded]").unbind(),
                    this.element.find(".menuUl li span,.menuUl li i").unbind(),
                    e.unbind(),
                    this.element.find(".menuUl li i[loaded]").click(function () {
                        var b = a(this),
                            c = b.attr("ischek"),
                            e = b.closest("li").children(".menuUl");
                        b.attr("p-id"),
                            console.log("触发已加载事件"),
                            "true" == c ? (e.hide(), b.removeClass(d.mouIconOpen).addClass(d.mouIconClose), b.attr("ischek", "false")) : "false" == c && (e.show(), b.removeClass(d.mouIconClose).addClass(d.mouIconOpen), b.attr("ischek", "true"))
                    }),
                    this.element.find(".menuUl li span,.menuUl li i").click(function () {
                        var b = a(this).attr("p-id");
                        d.callback(b)
                    }),
                    this.element.find(".menuUl li i[unLoaded]").click(function () {
                        var b = a(this),
                            c = b.attr("p-id");
                        b.attr("loaded", ""),
                            b.removeClass(d.mouIconClose).addClass(d.mouIconOpen),
                            b.attr("ischek", "true"),
                            console.log("触发未加载事件"),
                            d.update(b, c)
                    }),
                    e.click(function () {
                        var i, j, k, e = a(this),
                            f = e.attr("p-id"),
                            g = e.attr("lu-type"),
                            h = e.attr("lu-sign");
                        console.log("id:" + f),
                            console.log("type:" + g),
                            i = "border: none;background: #eee;width: auto;height: 25px;border-radius: 5px;cursor: pointer;margin-left:10px",
                            j = "height: 30px;padding: 10px; outline:medium;background:transparent;outline:none;border:1px solid deepskyblue;border-radius: 8px;",
                            "createChild" == g ? confirm({
                                title: "请输入",
                                content: '<input id="name" style="' + j + '" type="text" />',
                                doneText: "新增",
                                cancalText: "取消"
                            }).then(function () {
                                var j, k, l, m, n;
                                return console.log("已确认"),
                                    j = a("#name").val(),
                                    "" == j ? (alert("请输入内容"), !1) : (d.Demo ? (d.DemoData[f] = new Array, k = {
                                        id: f + 10,
                                        name: j,
                                        type: "leaf"
                                    },
                                        d.DemoData[f].push(k), "leaf" != h ? (l = k, m = "<li style='" + b + "'>" + "<i style='" + c + "' p-id='" + l.id + "' class='" + d.simIcon + "'></i>" + "<span p-id='" + l.id + "'>" + j + "</span>" + "<button style='" + i + "' p-id='" + l.id + "' lu-sign='" + l.type + "' lu-type='createChild'>新增子菜单</button>" + "<button style='" + i + "' p-id='" + l.id + "' lu-sign='" + l.type + "' lu-type='delete'>删除</button></li>", "topAdd" == h ? e.parent().parent().append(m) : e.parent().find(">ul").append(m), d.bindEvent()) : (n = e.parent().find(">i"), n.removeClass(d.simIcon), n.addClass(d.mouIconClose), n.attr("lu-sign", "mid"), n.attr("unLoaded", ""), e.attr("lu-sign", "mid"), n.attr("ischek", "false"), d.bindEvent(), alert(k.msg))) : a.ajax({
                                            url: d.url,
                                            type: d.Method,
                                            data: {
                                                id: f,
                                                name: j,
                                                type: g
                                            },
                                            dataType: "json",
                                            success: function (a) {
                                                var f, g, k;
                                                200 == a.code ? "leaf" != h ? (f = a.data[0], g = "<li style='" + b + "'>" + "<i style='" + c + "' p-id='" + f.id + "' class='" + d.simIcon + "'></i>" + "<span p-id='" + f.id + "'>" + j + "</span>" + "<button style='" + i + "' p-id='" + f.id + "' lu-sign='" + f.type + "' lu-type='createChild'>新增子菜单</button>" + "<button style='" + i + "' p-id='" + f.id + "' lu-sign='" + f.type + "' lu-type='delete'>删除</button></li>", "topAdd" == h ? e.parent().parent().append(g) : e.parent().find(">ul").append(g), d.bindEvent()) : (k = e.parent().find(">i"), k.removeClass(d.simIcon), k.addClass(d.mouIconClose), k.attr("lu-sign", "mid"), k.attr("unLoaded", ""), e.attr("lu-sign", "mid"), k.attr("ischek", "false"), d.bindEvent(), alert(a.msg)) : alert(a.msg)
                                            }
                                        }), void 0)
                            }).
                                catch(function () {
                                    console.log("已取消")
                                }) : "delete" == g && (k = "leaf" == h ? "确定删除？" : "将会删除所有子目录，确定操作？", confirm({
                                    title: "温馨提示",
                                    content: k,
                                    doneText: "是",
                                    cancalText: "否"
                                }).then(function () {
                                    console.log("已确认删除"),
                                        d.Demo ? (e.parent().remove(), alert("删除成功")) : a.ajax({
                                            url: d.url,
                                            type: d.Method,
                                            data: {
                                                id: f,
                                                type: g
                                            },
                                            dataType: "json",
                                            success: function (a) {
                                                200 == a.code ? (e.parent().remove(), alert(a.msg)) : alert(a.msg)
                                            }
                                        })
                                }).
                                    catch(function () {
                                        console.log("已取消")
                                    }))
                    })
            },
            a.fn.extend({
                LuTree: function (b) {
                    return new d(a(this), b)
                },
                LuAjaxTree: function (b) {
                    return new f(a(this), b)
                },
                LuUpdateTree: function (b) {
                    return new g(a(this), b)
                }
            })
    }(jQuery);