/*
@license

dhtmlxGantt v.6.0.7 Standard
This software is covered by GPL license. You also can obtain Commercial or Enterprise license to use it in non-GPL project - please contact sales@dhtmlx.com. Usage without proper license is prohibited.

(c) Dinamenta, UAB.

*/
! function (t) {
    var e = {};

    function o(i) {
        if (e[i]) return e[i].exports;
        var n = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(n.exports, n, n.exports, o), n.l = !0, n.exports
    }
    o.m = t, o.c = e, o.d = function (t, e, i) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, o.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function (t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (o.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) o.d(i, n, function (e) {
                return t[e]
            }.bind(null, n));
        return i
    }, o.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "/codebase/", o(o.s = 187)
}({
    1: function (t, e) {
        function o(t) {
            var e = 0,
                o = 0,
                i = 0,
                n = 0;
            if (t.getBoundingClientRect) {
                var r = t.getBoundingClientRect(),
                    a = document.body,
                    l = document.documentElement || document.body.parentNode || document.body,
                    s = window.pageYOffset || l.scrollTop || a.scrollTop,
                    c = window.pageXOffset || l.scrollLeft || a.scrollLeft,
                    u = l.clientTop || a.clientTop || 0,
                    f = l.clientLeft || a.clientLeft || 0;
                e = r.top + s - u, o = r.left + c - f, i = document.body.offsetWidth - r.right, n = document.body.offsetHeight - r.bottom
            } else {
                for (; t;) e += parseInt(t.offsetTop, 10), o += parseInt(t.offsetLeft, 10), t = t.offsetParent;
                i = document.body.offsetWidth - t.offsetWidth - o, n = document.body.offsetHeight - t.offsetHeight - e
            }
            return {
                y: Math.round(e),
                x: Math.round(o),
                width: t.offsetWidth,
                height: t.offsetHeight,
                right: Math.round(i),
                bottom: Math.round(n)
            }
        }

        function i(t) {
            var e = !1,
                o = !1;
            if (window.getComputedStyle) {
                var i = window.getComputedStyle(t, null);
                e = i.display, o = i.visibility
            } else t.currentStyle && (e = t.currentStyle.display, o = t.currentStyle.visibility);
            return "none" != e && "hidden" != o
        }

        function n(t) {
            return !isNaN(t.getAttribute("tabindex")) && 1 * t.getAttribute("tabindex") >= 0
        }

        function r(t) {
            return !{
                a: !0,
                area: !0
            } [t.nodeName.loLowerCase()] || !!t.getAttribute("href")
        }

        function a(t) {
            return !{
                input: !0,
                select: !0,
                textarea: !0,
                button: !0,
                object: !0
            } [t.nodeName.toLowerCase()] || !t.hasAttribute("disabled")
        }

        function l(t) {
            if (!t) return "";
            var e = t.className || "";
            return e.baseVal && (e = e.baseVal), e.indexOf || (e = ""), u(e)
        }
        var s = document.createElement("div");

        function c(t) {
            return t.tagName ? t : (t = t || window.event).target || t.srcElement
        }

        function u(t) {
            return (String.prototype.trim || function () {
                return this.replace(/^\s+|\s+$/g, "")
            }).apply(t)
        }
        t.exports = {
            getNodePosition: o,
            getFocusableNodes: function (t) {
                for (var e = t.querySelectorAll(["a[href]", "area[href]", "input", "select", "textarea", "button", "iframe", "object", "embed", "[tabindex]", "[contenteditable]"].join(", ")), o = Array.prototype.slice.call(e, 0), l = 0; l < o.length; l++) {
                    var s = o[l];
                    (n(s) || a(s) || r(s)) && i(s) || (o.splice(l, 1), l--)
                }
                return o
            },
            getScrollSize: function () {
                var t = document.createElement("div");
                t.style.cssText = "visibility:hidden;position:absolute;left:-1000px;width:100px;padding:0px;margin:0px;height:110px;min-height:100px;overflow-y:scroll;", document.body.appendChild(t);
                var e = t.offsetWidth - t.clientWidth;
                return document.body.removeChild(t), e
            },
            getClassName: l,
            addClassName: function (t, e) {
                e && -1 === t.className.indexOf(e) && (t.className += " " + e)
            },
            removeClassName: function (t, e) {
                e = e.split(" ");
                for (var o = 0; o < e.length; o++) {
                    var i = new RegExp("\\s?\\b" + e[o] + "\\b(?![-_.])", "");
                    t.className = t.className.replace(i, "")
                }
            },
            insertNode: function (t, e) {
                s.innerHTML = e;
                var o = s.firstChild;
                return t.appendChild(o), o
            },
            removeNode: function (t) {
                t && t.parentNode && t.parentNode.removeChild(t)
            },
            getChildNodes: function (t, e) {
                for (var o = t.childNodes, i = o.length, n = [], r = 0; r < i; r++) {
                    var a = o[r];
                    a.className && -1 !== a.className.indexOf(e) && n.push(a)
                }
                return n
            },
            toNode: function (t) {
                return "string" == typeof t ? document.getElementById(t) || document.querySelector(t) || document.body : t || document.body
            },
            locateClassName: function (t, e, o) {
                var i = c(t),
                    n = "";
                for (void 0 === o && (o = !0); i;) {
                    if (n = l(i)) {
                        var r = n.indexOf(e);
                        if (r >= 0) {
                            if (!o) return i;
                            var a = 0 === r || !u(n.charAt(r - 1)),
                                s = r + e.length >= n.length || !u(n.charAt(r + e.length));
                            if (a && s) return i
                        }
                    }
                    i = i.parentNode
                }
                return null
            },
            locateAttribute: function (t, e) {
                if (e) {
                    for (var o = c(t); o;) {
                        if (o.getAttribute && o.getAttribute(e)) return o;
                        o = o.parentNode
                    }
                    return null
                }
            },
            getTargetNode: c,
            getRelativeEventPosition: function (t, e) {
                var i = document.documentElement,
                    n = o(e);
                return {
                    x: t.clientX + i.scrollLeft - i.clientLeft - n.x + e.scrollLeft,
                    y: t.clientY + i.scrollTop - i.clientTop - n.y + e.scrollTop
                }
            },
            isChildOf: function (t, e) {
                if (!t || !e) return !1;
                for (; t && t != e;) t = t.parentNode;
                return t === e
            },
            hasClass: function (t, e) {
                return "classList" in t ? t.classList.contains(e) : new RegExp("\\b" + e + "\\b").test(t.className)
            }
        }
    },
    187: function (t, e, o) {
        ! function () {
            function t() {
                return gantt.$task_data || gantt.$root
            }
            gantt._tooltip = {}, gantt._tooltip_class = "gantt_tooltip", gantt.config.tooltip_timeout = 30, gantt.config.tooltip_offset_y = 20, gantt.config.tooltip_offset_x = 10, gantt._create_tooltip = function () {
                return this._tooltip_html || (this._tooltip_html = document.createElement("div"), this._tooltip_html.className = gantt._tooltip_class, this._waiAria.tooltipAttr(this._tooltip_html)), this._tooltip_html
            }, gantt._is_cursor_under_tooltip = function (t, e) {
                return t.x >= e.pos.x && t.x <= e.pos.x + e.width || t.y >= e.pos.y && t.y <= e.pos.y + e.height
            }, gantt._show_tooltip = function (e, o) {
                if (!gantt.config.touch || gantt.config.touch_tooltip) {
                    var i = this._create_tooltip();
                    i.innerHTML = e, t().appendChild(i);
                    var n = i.offsetWidth + 20,
                        r = i.offsetHeight + 40,
                        a = gantt.$task || gantt.$root,
                        l = a.offsetHeight,
                        s = a.offsetWidth,
                        c = this.getScrollState();
                    a === gantt.$root && (c = {
                        x: 0,
                        y: 0
                    }), gantt._waiAria.tooltipVisibleAttr(i), o.y += c.y;
                    var u = {
                        x: o.x,
                        y: o.y
                    };
                    o.x += 1 * gantt.config.tooltip_offset_x || 0, o.y += 1 * gantt.config.tooltip_offset_y || 0, o.y = Math.min(Math.max(c.y, o.y), c.y + l - r), o.x = Math.min(Math.max(c.x, o.x), c.x + s - n), gantt._is_cursor_under_tooltip(u, {
                        pos: o,
                        width: n,
                        height: r
                    }) && (u.x + n > s + c.x && (o.x = u.x - (n - 20) - (1 * gantt.config.tooltip_offset_x || 0)), u.y + r > l + c.y && (o.y = u.y - (r - 40) - (1 * gantt.config.tooltip_offset_y || 0))), i.style.left = o.x + "px", i.style.top = o.y + "px"
                }
            }, gantt._hide_tooltip = function () {
                this._tooltip_html && this._waiAria.tooltipHiddenAttr(this._tooltip_html), this._tooltip_html && this._tooltip_html.parentNode && this._tooltip_html.parentNode.removeChild(this._tooltip_html), this._tooltip_id = 0
            }, gantt._is_tooltip = function (t) {
                var e = t.target || t.srcElement;
                return gantt._is_node_child(e, function (t) {
                    return t.className == this._tooltip_class
                })
            }, gantt._is_task_line = function (t) {
                var e = t.target || t.srcElement;
                return gantt._is_node_child(e, function (t) {
                    return t == this.$task_data
                })
            }, gantt._is_node_child = function (t, e) {
                for (var o = !1; t && !o;) o = e.call(gantt, t), t = t.parentNode;
                return o
            }, gantt._tooltip_pos = function (e) {
                if (e.pageX || e.pageY) var i = {
                    x: e.pageX,
                    y: e.pageY
                };
                var n = document.documentElement || document.body.parentNode || document.body,
                    r = (i = {
                        x: e.clientX + n.scrollLeft - n.clientLeft,
                        y: e.clientY + n.scrollTop - n.clientTop
                    }, o(1).getNodePosition(t()));
                return i.x = i.x - r.x, i.y = i.y - r.y, i
            }, gantt.attachEvent("onMouseMove", function (t, e) {
                if (this.config.tooltip_timeout) {
                    document.createEventObject && !document.createEvent && (e = document.createEventObject(e));
                    var o = this.config.tooltip_timeout;
                    this._tooltip_id && !t && (isNaN(this.config.tooltip_hide_timeout) || (o = this.config.tooltip_hide_timeout)), clearTimeout(gantt._tooltip_ev_timer), gantt._tooltip_ev_timer = setTimeout(function () {
                        gantt._init_tooltip(t, e)
                    }, o)
                } else gantt._init_tooltip(t, e)
            }), gantt._init_tooltip = function (t, e) {
                if (!this._is_tooltip(e) && (t != this._tooltip_id || this._is_task_line(e))) {
                    if (!t) return this._hide_tooltip();
                    if (!this.isTaskExists(t)) return this._hide_tooltip();
                    this._tooltip_id = t;
                    var o = this.getTask(t),
                        i = this.templates.tooltip_text(o.start_date, o.end_date, o);
                    i ? this._show_tooltip(i, this._tooltip_pos(e)) : this._hide_tooltip()
                }
            }, gantt.attachEvent("onMouseLeave", function (t) {
                gantt._is_tooltip(t) || this._hide_tooltip()
            })
        }()
    }
});
//# sourceMappingURL=dhtmlxgantt_tooltip.js.map