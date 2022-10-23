(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [41999], {
        72918: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => p
            });
            var a = n(67294),
                r = n(1216),
                i = n(9669),
                o = n.n(i);

            function s() {
                return (s = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a])
                    }
                    return t
                }).apply(this, arguments)
            }

            function l(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            const d = {},
                c = {};
            let u = !1;
            const m = /image\d\.jdomni\.in/,
                f = ({
                    randomColorObj: t
                }) => a.createElement("div", {
                    style: t
                });
            class p extends a.Component {
                constructor(...t) {
                    super(...t), l(this, "state", {
                        loaded: d[this.props.imageSrc]
                    }), l(this, "imageRef", a.createRef(null)), l(this, "componentDidMount", (() => {
                        const t = this.imageRef.current;
                        t && t.complete && (0 != t.naturalWidth ? this.onLoad() : this.onError())
                    })), l(this, "onLoad", (() => {
                        if (d[this.props.imageSrc] = !0, this.props.setImageDimensionInfo && this.imageRef.current) {
                            let t = this.imageRef.current.naturalWidth,
                                e = this.imageRef.current.naturalHeight;
                            this.props.setImageDimensionInfo({
                                ratio: t / e,
                                width: t,
                                height: e
                            })
                        }
                        this.setState((() => ({
                            loaded: !0
                        })))
                    })), l(this, "onError", (() => {
                        var t;
                        u || "gallery" !== this.props.blockType || ((t = "") => t.match(m))(this.props.imageSrc) || !this.props.contentBlockId || (t = this.props.contentBlockId, o().get("/marketplace/cms/nj/genio/update-gallery?contentBlockId=" + t), u = !0), c[this.props.imageSrc] = !0, this.setState((() => ({
                            loaded: !1
                        })))
                    })), l(this, "getSmartFillDiv", (() => a.createElement("div", s({
                        key: "smart-fill-div"
                    }, this.props.smartFillObj))))
                }
                render() {
                    const {
                        imageSrc: t,
                        imgSrc: e,
                        style: n,
                        imgClass: i,
                        imgAttrs: o,
                        randomColorObj: l,
                        smartFillObj: d,
                        lazyLoadOffset: u,
                        isPreviewDomain: m = !1
                    } = this.props, p = this.props.disableLazyLoad || m, h = p || this.state.loaded ? "img-loaded" : "img-loading";
                    let g = t;
                    c[g] && (g = e);
                    const y = !p && !this.state.loaded;
                    let b = a.createElement(a.Fragment, null, d && this.getSmartFillDiv(), y && a.createElement(f, {
                        randomColorObj: l
                    }), a.createElement("img", s({
                        ref: this.imageRef,
                        src: g,
                        style: e && n || {},
                        alt: "",
                        className: "".concat(i || "", " ").concat(h)
                    }, o, {
                        onLoad: this.onLoad,
                        onError: this.onError
                    })));
                    return !p && !this.state.loaded && (b = a.createElement(r.ZP, s({
                        offset: u || 650,
                        once: !0,
                        placeholder: y ? a.createElement(f, {
                            randomColorObj: l
                        }) : void 0
                    }, this.props.lazyLoadProps), b)), b
                }
            }
        },
        17472: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => l
            });
            var a = n(67294),
                r = n(14494),
                i = n(2299),
                o = n(16550),
                s = n(32990);
            const l = (0, r.$j)(((t, e) => ({
                baseUrl: t.staticData.baseUrl,
                ...e
            })))((t => {
                const e = t.parentProps || {};
                if (t.jdCMSPage || !t.linkObj || "noLink" == t.linkObj.linkType || t.forHeaderDesign || e.isCmsAndEditMode && "layout" === e.type) return t.children;
                const n = (0, o.k6)(),
                    r = { ...t.linkObj
                    };
                let l = {
                    href: r.href || "javascript:void(0)",
                    className: (t.linkHolderClass || r.linkClass || "") + " link-content"
                };
                if ("contentBlock" === r.linkType) {
                    const e = "/" == n.location.pathname,
                        a = r.href || "",
                        i = n ? n.location.pathname : "";
                    (a ? -1 != i.indexOf(a) : e) && "_blank" != r.target ? (r.linkId = r.id, delete l.href) : (r.target && (l.target = r.target), r.linkType = r.type = "url", l.href = t.baseUrl + a + "/?scrollTo=" + r.id)
                }
                const d = (0, s.Z)({
                    type: r.linkType,
                    options: {
                        linkId: "enquiryForm" == r.linkType ? r.linkedFormId : r.linkId,
                        href: r.href
                    },
                    preventCMSClick: !0
                });
                if (d) {
                    const {
                        onClick: t
                    } = d;
                    l = { ...l,
                        onClick: t
                    }
                } else l = { ...l,
                    "data-linktype": r.linkType
                }, r.target && (l.target = r.target);
                if ("bannerImage" === t.blockType && (l.draggable = !1), l.href) {
                    if (("New Window" == l.target || "_blank" == l.target) && "undefined" != typeof window && window.jdInterface) {
                        const t = "forceIntent=true&load=loadInIOSExternalSafari"; - 1 == l.href.indexOf("?") ? l.href += "?" + t : l.href += "&" + t
                    }
                    l.href = (0, i.m7)(l.href)
                }
                return a.createElement("a", l, t.children)
            }))
        },
        81488: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => c
            });
            var a = n(67294),
                r = n(99550),
                i = n(78048),
                o = n(17472),
                s = n(13525);

            function l() {
                return (l = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a])
                    }
                    return t
                }).apply(this, arguments)
            }
            const d = {
                    jdCmsTagCompAddContactAndEmail: "jd-cms-tag-comp-add-contact-email",
                    jdCmsTagCompanyAddress: "jd-cms-tag-company-address",
                    jdCmsTagCompanyDescription: "jd-cms-tag-company-description",
                    jdCmsTagContactAndEmail: "jd-cms-tag-contact-email notranslate",
                    jdCmsTagContactNo: "jd-cms-tag-contact-no notranslate",
                    jdCmsTagEmail: "jd-cms-tag-email notranslate",
                    jdCmsTagWorkingHours: "jd-cms-tag-working-hours"
                },
                c = (0, r.Z)((0, s.Z)((t => {
                    const {
                        animationStyle: e,
                        onTransitionEnd: n,
                        elementRef: r
                    } = t;
                    if (!t.parentProps.isCmsAndEditMode && !t.children && !t.text) return null;
                    const s = t.style || {};
                    let c = e => {
                            t.onClick(e, {
                                blockType: t.blockType
                            })
                        },
                        u = t.class || "",
                        m = t.holderClass || "";
                    t.notEditable ? c = void 0 : (u += " editable-content", m += " editable-content-holder  ".concat(t.isUnderEdit ? "under-edit" : ""));
                    let f = t.children ? {
                        dangerouslySetInnerHTML: null,
                        children: t.children
                    } : {
                        dangerouslySetInnerHTML: {
                            __html: t.text
                        }
                    };
                    const p = { ...t.seoObj || {}
                    };
                    t.hoverStyleId && (u += " hoverStyle" + t.hoverStyleId);
                    const h = !t.disableEditing && t.contentEditable && t.isUnderEdit,
                        g = t.parentProps && t.parentProps.isCmsAndEditMode && !t.notEditable;
                    let y = "div";
                    !t.parentProps.isCmsAndEditMode && p.tagName && (y = p.tagName), u = u.replace(/jd-cms-tag-[^\s]*/gi, ""), u = u.replace(/jd-cms-tag/gi, "");
                    const b = t.tagName;
                    return b && d[b] && (u += " jd-cms-tag " + d[b]), a.createElement("div", {
                        className: m,
                        onClick: c
                    }, a.createElement(o.Z, t, a.createElement(y, l({
                        className: u,
                        style: { ...s,
                            ...e
                        },
                        contentEditable: h,
                        onBlur: t.customBlurHandler || t.onBlur
                    }, p, f, {
                        onTransitionEnd: n,
                        ref: r
                    }))), g && !t.parentProps.isMobile && !h && !t.isUnderEdit && a.createElement(i.Z, null))
                })), "text")
        },
        13525: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => s
            }), n(91181);
            var a = n(67294),
                r = n(14494);
            const i = function() {
                var t = ["translate3d(", ", 0)"];
                const e = [];
                let n = {};
                const a = [];
                return {
                    rotate: function(t) {
                        return this.transform("rotate(" + t + "deg)"), this
                    },
                    transform: function(t) {
                        return e.push(t), this
                    },
                    set: function(t, e) {
                        return "object" == typeof t ? n = { ...n,
                            ...t
                        } : (this.transition(t), n[t] = e), this
                    },
                    scale: function(t, e) {
                        return this.transform("scale(" + t + ", " + (e || t) + ")")
                    },
                    transition: function(t) {
                        return a.indexOf(t) ? (a.push(t), this) : this
                    },
                    translate: function(t, e) {
                        return this.to(t, e)
                    },
                    to: function(e, n) {
                        return this.transform(t.join(e + "px, " + (n || 0) + "px"))
                    },
                    duration: function(t) {
                        return t = this._duration = "string" == typeof t ? 1e3 * parseFloat(t) : t, this.setVendorProperty("transition-duration", t + "ms")
                    },
                    setVendorProperty: function(t, e) {
                        return this.setProperty("-webkit-" + t, e), this.setProperty("-moz-" + t, e), this.setProperty("-ms-" + t, e), this.setProperty("-o-" + t, e), this
                    },
                    setProperty: function(t, e) {
                        return n[t] = e, this
                    },
                    delay: function(t) {
                        return t = 1e3 * parseFloat(t), this.setVendorProperty("transition-delay", t + "ms")
                    },
                    end: function() {
                        return e.length && this.setVendorProperty("transform", e.join(" ")), this.setVendorProperty("transition-properties", a.join(", ")), n
                    }
                }
            };

            function o() {
                return (o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a])
                    }
                    return t
                }).apply(this, arguments)
            }
            const s = t => {
                const e = e => {
                    const {
                        animationStyle: n,
                        onTransitionEnd: r,
                        elementRef: s,
                        resetAnimation: l
                    } = (t => {
                        t = t || {};
                        let e = {};
                        const n = (0, a.useRef)(null),
                            r = (0, a.useRef)(0),
                            o = (0, a.useRef)(null),
                            [, s] = (0, a.useState)(0),
                            l = (0, a.useRef)("INIT"),
                            d = (0, a.useRef)(!1),
                            c = t => {
                                t != l.current && (l.current = t, s((t => !t)))
                            };

                        function u() {
                            const e = document.querySelector(".sticky-footer");
                            let n = e ? e.offsetHeight : 0,
                                a = o.current,
                                r = t["data-a-key"];
                            const i = t["data-a-everytime"];
                            if (!a) return;
                            let s = window.scrollY,
                                u = window.innerHeight,
                                m = function(t) {
                                    let e = {
                                        top: 0,
                                        left: 0
                                    };
                                    void 0 !== t.getBoundingClientRect && (e = t.getBoundingClientRect());
                                    const n = window,
                                        a = document.documentElement;
                                    return {
                                        top: e.top + (n.pageYOffset || a.scrollTop) - (a.clientTop || 0),
                                        left: e.left + (n.pageXOffset || a.scrollLeft) - (a.clientLeft || 0)
                                    }
                                }(a).top,
                                f = a.getBoundingClientRect().height / 10,
                                p = window.getComputedStyle(a).transform;
                            if (p = p.replace(/[^0-9\,]/g, ""), p) {
                                p = p.split(",");
                                let t = Number(p[3]) || 1;
                                p = Number(p[5]) || 0, f /= t
                            }
                            m -= p, f > u / 10 && (f = u / 10), "expand-in" == r && "INIT" == l.current && (m -= f), u += s, f += m, u -= n;
                            let h = f <= u;
                            if (!h && u + 10 < m) {
                                if ("INIT" == l.current) return !1;
                                f >= u + n && i && c("INIT")
                            }
                            if ("INIT" != l.current) return !1;
                            h && (c("ANIMATE"), d.current = !0)
                        }(0, a.useEffect)((() => {
                            const e = t["data-a-key"];
                            let a = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
                            return e && (u(), a ? n.current = a((function t() {
                                let e = window.scrollY;
                                r.current != e && (r.current = e, u()), a(t)
                            })) : document.addEventListener("scroll", u)), () => {
                                e && (a ? cancelAnimationFrame(n.current) : document.removeEventListener("scroll", u))
                            }
                        }), []);
                        const {
                            initialState: m,
                            finalState: f
                        } = function(t) {
                            let e = t["data-a-delay"] || 0,
                                n = t["data-a-duration"];
                            if (n) switch (n += "s", t["data-a-key"]) {
                                case "spin-in":
                                    {
                                        let a = Number(t["data-a-spin"]) || 0,
                                            r = Number(t["data-a-direction"]);
                                        if (!a) return;
                                        return {
                                            finalState: i().rotate(360 * r * a).duration(n).delay(e).end()
                                        }
                                    }
                                case "fade-in":
                                    return {
                                        initialState: i().set("opacity", 0).duration(0).end(),
                                        finalState: i().set("opacity", 1).duration(n).delay(e).end()
                                    };
                                case "float-in":
                                    {
                                        let a = 0,
                                            r = 0;
                                        switch (t["data-a-direction"]) {
                                            case "r":
                                                a = 100;
                                                break;
                                            case "l":
                                                a = -100;
                                                break;
                                            case "t":
                                                r = -100;
                                                break;
                                            case "b":
                                                r = 100
                                        }
                                        return {
                                            initialState: i().set("opacity", 0).translate(a, r).duration(0).end(),
                                            finalState: i().set("opacity", 1).translate(0, 0).duration(n).delay(e).end()
                                        }
                                    }
                                case "expand-in":
                                case "puff-in":
                                    {
                                        let a = "expand-in" == t["data-a-key"] ? 0 : 3;
                                        return {
                                            initialState: i().scale(a, a).duration(0).delay(0).end(),
                                            finalState: i().scale(1, 1).duration(n).delay(e).end()
                                        }
                                    }
                                case "fly-in":
                                    {
                                        let a = t["data-a-direction"],
                                            r = 0,
                                            o = 0;a = a.split("");
                                        let s = 0;
                                        for (; a[s];) {
                                            switch (a[s]) {
                                                case "r":
                                                    r = 100;
                                                    break;
                                                case "l":
                                                    r = -100;
                                                    break;
                                                case "t":
                                                    o = -100;
                                                    break;
                                                case "b":
                                                    o = 100
                                            }
                                            s++
                                        }
                                        return {
                                            initialState: i().translate(r, o).duration(0).delay(0).end(),
                                            finalState: i().translate(0, 0).duration(n).delay(e).end()
                                        }
                                    }
                                case "turn-in":
                                    {
                                        let a = 0,
                                            r = 90;
                                        switch (t["data-a-direction"]) {
                                            case "r":
                                                a = "50%";
                                                break;
                                            case "l":
                                                a = "-50%", r = -90
                                        }
                                        return {
                                            initialState: i().rotate(r).set("transform-origin", a).duration(0).end(),
                                            finalState: i().rotate(0).set("transform-origin", a).duration(n).delay(e).end()
                                        }
                                    }
                                case "fold-in":
                                case "flip-in":
                                    {
                                        let a = t["data-a-direction"],
                                            r = 0,
                                            o = 0;
                                        switch (a) {
                                            case "r":
                                                a = "right", o = 1;
                                                break;
                                            case "l":
                                                a = "left", o = 1;
                                                break;
                                            case "t":
                                                a = "top", r = 1;
                                                break;
                                            case "b":
                                                a = "bottom", r = 1
                                        }
                                        return "flip-in" == t["data-a-key"] && (a = "center"),
                                        {
                                            initialState: i().set("transform", "rotate3d(" + r + "," + o + " , 0, 90deg)").set("transform-origin", a).duration(0).end(),
                                            finalState: i().set("transform", "rotate3d(" + r + "," + o + " , 0, 0deg)").set("transform-origin", a).duration(n).delay(e).end()
                                        }
                                    }
                                case "glide-in":
                                    {
                                        let a = Number(t["data-a-distance"]) || 0,
                                            r = Number(t["data-a-spin"]) || 0,
                                            o = 1,
                                            s = 1,
                                            l = 0;
                                        if (!a) return;r <= 90 ? (l = 90 - r, s = -1) : r <= 180 ? l = r - 90 : r <= 270 ? (l = 270 - r, o = -1) : (l = r - 270, o = -1, s = -1);
                                        let d = Math.round(a * Math.cos(l * Math.PI / 180)),
                                            c = Math.round(a * Math.sin(l * Math.PI / 180));
                                        return o *= d,
                                        s *= c,
                                        {
                                            initialState: i().translate(o, s).duration(0).end(),
                                            finalState: i().translate(0, 0).duration(n).delay(e).end()
                                        }
                                    }
                            }
                        }(t || {}) || {};
                        return e = "ANIMATE" == l.current ? f : "DONE" == l.current ? null : m, e = e || {}, {
                            animationStyle: e,
                            onTransitionEnd: () => {
                                d.current && (c("DONE"), d.current = !1)
                            },
                            elementRef: o,
                            resetAnimation: () => {
                                c("INIT"), setTimeout((() => {
                                    u()
                                }), 100)
                            }
                        }
                    })(e.animationObj);
                    return (0, a.useEffect)((() => {
                        e.isUnderEdit && e.toCallAnimation && l()
                    }), [e.isUnderEdit, e.toCallAnimation]), a.createElement(t, o({}, e, {
                        animationStyle: n,
                        onTransitionEnd: r,
                        elementRef: s,
                        resetAnimation: l
                    }))
                };
                return n => {
                    const i = (0, r.v9)((t => t.staticData.userAgent), r.wU);
                    let o = !1;
                    return (i.indexOf("MSIE ") > 0 || i.indexOf("Trident/") > 0) && (o = !0), !o && n.animationObj && n.animationObj["data-a-key"] ? a.createElement(e, n) : a.createElement(t, n)
                }
            }
        }
    }
]);