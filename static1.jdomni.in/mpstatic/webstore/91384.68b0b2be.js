/*! For license information please see 91384.68b0b2be.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [91384], {
        94740: (e, t, a) => {
            "use strict";
            a.d(t, {
                E: () => o,
                I: () => l
            });
            var n = a(75147),
                s = a(2299);
            const o = e => (t, a) => {
                    e.isMobile = a().staticData.isMobile, e.cacheKey = (0, s.ah)(e), t({
                        type: n.Z.SET_CACHED_DATA,
                        payload: e
                    })
                },
                l = e => (t, a) => {
                    e.isMobile = a().staticData.isMobile, e.cacheKey = (0, s.ah)(e), t({
                        type: n.Z.UPDATE_CACHED_PRODUCTS,
                        payload: e
                    })
                }
        },
        13280: (e, t, a) => {
            "use strict";
            a.d(t, {
                Fk: () => s,
                me: () => o,
                w3: () => l,
                pO: () => r,
                St: () => i
            });
            var n = a(75147);
            const s = e => ({
                    type: n.Z.UPDATE_PRODUCT_VIEW,
                    payload: {
                        productView: e
                    }
                }),
                o = e => ({
                    type: n.Z.UPDATE_PRODUCT_LIST,
                    payload: e
                }),
                l = e => ({
                    type: n.Z.SET_MASTER_FILTER,
                    payload: e
                }),
                r = e => ({
                    type: n.Z.TOGGLE_PRODUCT_DATA_LOADING,
                    payload: e
                }),
                i = e => ({
                    type: n.Z.SET_IMAGE_DIM_INFO,
                    payload: e
                })
        },
        4378: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => E
            });
            var n = a(67294),
                s = a(14494),
                o = a(15727),
                l = a(16550),
                r = a(40684),
                i = a(2299),
                c = a(94740),
                d = a(98275),
                m = (a(94085), a(46834));
            const p = (0, r.ZP)({
                    resolved: {},
                    chunkName: () => "social",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => Promise.all([a.e(75514), a.e(46066), a.e(15091), a.e(30606), a.e(77443)]).then(a.bind(a, 42544)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve: () => 42544
                }, {
                    fallback: n.createElement("div", null, "Loading...")
                }),
                u = (0, r.ZP)({
                    resolved: {},
                    chunkName: () => "prod-listing-mob",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => Promise.all([a.e(75514), a.e(39705), a.e(23622), a.e(65471), a.e(64773), a.e(13076), a.e(41999), a.e(72342), a.e(58711), a.e(64306), a.e(21794)]).then(a.bind(a, 54479)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve: () => 54479
                }, {
                    fallback: n.createElement(d.Z, null)
                }),
                y = (0, r.ZP)({
                    resolved: {},
                    chunkName: () => "prod-listing-web",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => Promise.all([a.e(75514), a.e(39705), a.e(23622), a.e(65471), a.e(15012), a.e(13076), a.e(72342), a.e(58711), a.e(64306), a.e(1290)]).then(a.bind(a, 31334)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve: () => 31334
                }, {
                    fallback: n.createElement("div", null, "Loading...")
                }),
                h = ((0, r.ZP)({
                    resolved: {},
                    chunkName: () => "outlet-selection",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => a.e(60672).then(a.bind(a, 52432)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve: () => 52432
                }, {
                    fallback: n.createElement("div", null, "Loading...")
                }), (0, r.ZP)({
                    resolved: {},
                    chunkName: () => "category-homepage",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => a.e(91505).then(a.bind(a, 25277)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve: () => 25277
                }, {
                    fallback: n.createElement(d.Z, null)
                })),
                g = ({
                    library: e
                }) => e.deviceData.isMobile,
                b = ({
                    staticData: e
                }) => e.userInfo,
                v = ({
                    storeSettings: e
                }) => ({
                    socialWallEnabled: e.socialWallEnabled,
                    socialAsHome: "SOCIAL" == e.homePageType,
                    homePageType: e.homePageType
                }),
                E = e => {
                    const t = (0, s.v9)(v),
                        a = ((0, s.v9)((e => e.restaurantInfo && e.restaurantInfo.isLoaded)), (0, s.v9)((({
                            staticData: e
                        }) => e.isJdShop))),
                        o = (0, l.k6)(),
                        r = (0, s.I0)(),
                        c = (0, s.v9)(g),
                        d = (0, s.v9)((({
                            pagePermissions: t
                        }) => t[e.pageName + (e.pageId ? "-" + e.pageId : "")]), s.wU),
                        E = (0, s.v9)(b, s.wU);
                    return (0, n.useEffect)((() => {
                        var t;
                        (0, i.Bc)({
                            history: o,
                            isMobile: c,
                            pageId: e.pageId,
                            pageName: e.pageName,
                            permission: d,
                            customerId: E.customerId
                        }), (null === (t = localStorage.getItem("toastMessage")) || void 0 === t ? void 0 : t.length) > 0 && (r(m.Z.showMessage({
                            message: localStorage.getItem("toastMessage")
                        })), localStorage.removeItem("toastMessage"))
                    }), []), a && "homepage" == e.pageName ? "CATEGORY_LISTING" == t.homePageType ? n.createElement("div", {
                        className: "microsite-homepage"
                    }, n.createElement(h, e)) : c ? n.createElement(u, e) : n.createElement("div", {
                        className: "microsite-homepage"
                    }, n.createElement(y, e)) : t.socialWallEnabled && t.socialAsHome && "homepage" == e.pageName ? n.createElement(p, {
                        updateMobileHeader: e.updateMobileHeader
                    }) : d && !d.hasPagePermission ? null : n.createElement(f, {
                        pageId: e.pageId,
                        pageName: e.pageName,
                        history: o,
                        query: e.query,
                        confirmationModal: e.confirmationModal
                    })
                },
                f = e => {
                    (0, n.useEffect)((() => (document.body.classList.add("web-theme-background"), () => {
                        document.body.classList.remove("web-theme-background")
                    })));
                    const {
                        pageName: t,
                        pageId: a
                    } = e, l = (0, s.I0)(), r = (0, n.useCallback)((e => {
                        l((0, c.E)({
                            pageName: t,
                            pageId: a,
                            data: {
                                contentBlockIds: e.contentBlockIds
                            }
                        }))
                    }), [t, a]);
                    return n.createElement("div", {
                        className: "theme-bg-color test-commit-class"
                    }, n.createElement("div", {
                        className: "home-page"
                    }, n.createElement(o.default, {
                        pageId: e.pageId,
                        pageName: e.pageName,
                        updateCachedData: r,
                        history: e.history,
                        query: e.query,
                        confirmationModal: e.confirmationModal
                    })))
                }
        },
        92024: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => u,
                loadData: () => y,
                registerReducer: () => h
            });
            var n = a(9669),
                s = a.n(n),
                o = a(64997),
                l = a(98653),
                r = a.n(l),
                i = a(94740),
                c = a(2299),
                d = a(17563),
                m = a(13280),
                p = a(32712);
            const u = a(4378).Z,
                y = async ({
                    store: e,
                    routeParams: t,
                    location: a,
                    fetchInitialData: n
                }) => {
                    const {
                        pageId: l = ""
                    } = t;
                    let p = "homepage";
                    l && (p = "staticpage");
                    const u = "homepage" === p,
                        y = e.getState();
                    let h = !1;
                    const g = y.staticData.isJdShop && u;
                    g && (e.dispatch((0, m.pO)({
                        productDataLoading: !0
                    })), h = !0), "RESTAURANT" == y.storeSettings.homePageType && u && (h = !0);
                    let b = {};
                    try {
                        b = d.parse(a.search)
                    } catch (e) {
                        console.log(e)
                    }
                    const {
                        themeId: v,
                        supplierId: E,
                        outletInfo: f,
                        userInfo: k,
                        jdCMSPage: w,
                        mode: C,
                        sessionId: T,
                        outletDetails: S,
                        domainNameOriginal: P,
                        protocol: x,
                        baseUrl: N
                    } = y.staticData, A = p + (l ? "-" + l : ""), Z = y.pagePermissions[A] || {}, M = S.results, O = {
                        pageId: l,
                        pageName: p,
                        themeId: v,
                        query: b,
                        supplierId: E,
                        accountMongoId: f[0] + "-" + f[1],
                        customerId: k.customerId,
                        jdCMSPage: w,
                        mode: C,
                        sessionId: T,
                        protocol: x,
                        domainNameOriginal: P,
                        baseUrl: N,
                        themeCompanyName: y.themeData.companyName,
                        isCartAddButtonEnabled: !!M.isCartAddButtonEnabled,
                        outletDetails: {
                            companyname: M.companyname,
                            area: M.area,
                            city: M.city,
                            state: M.state,
                            country: M.country,
                            selectedVerticalsIds: M.selectedVerticalsIds,
                            selectedVerticals: M.selectedVerticals
                        }
                    };
                    async function I() {
                        let t = !0;
                        h ? (O.isOnlySEO = !0, t = !1) : n && (O.isOnlyData = !0), t = t && Z.hasPagePermission, Z.password && (O.password = Z.password);
                        let a, c = r().apiDomains[0] + "/marketplace/webstore/getStaticPageData.ns";
                        try {
                            a = await s().post(c, O)
                        } catch (e) {
                            console.log(e)
                        }
                        if (200 === a.status && a.data.isSuccess) {
                            if (a.data.notFoundPage) return {
                                notFoundPage: !0
                            };
                            e.dispatch((0, o.wR)({ ...a.data,
                                pageName: p,
                                pageId: l
                            })), e.dispatch((0, o.E5)({
                                seoData: a.data.seoData
                            })), t && e.dispatch((0, i.E)({
                                pageName: p,
                                pageId: l,
                                data: {
                                    contentBlockIds: e.getState().contentBlockInfo.contentBlockIds
                                }
                            }))
                        }
                    } {
                        if (g) return void I();
                        const t = (0, c.TL)({
                            pageName: p,
                            pageId: l
                        });
                        if (t) return e.dispatch((0, o.wR)({
                            contentBlockData: t.contentBlockIds
                        })), void I()
                    }
                    return await I()
                },
                h = ({
                    store: e
                }) => {
                    const t = e.getState();
                    return t.staticData.isJdShop ? (0, p.Z)(e, ["listing"]) : "SOCIAL" == t.storeSettings.homePageType ? (0, p.Z)(e, ["social"]) : "RESTAURANT" == t.storeSettings.homePageType ? (0, p.Z)(e, ["restaurantInfo", "dishItems", "restaurantCart", "restaurantDrawer"]) : void 0
                }
        },
        96255: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => l
            });
            a(91181);
            var n = a(67294),
                s = a(2299);
            const o = (0, a(40684).ZP)({
                    resolved: {},
                    chunkName: () => "jd-video-player",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => Promise.all([a.e(75514), a.e(74611)]).then(a.bind(a, 85150)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve: () => 85150
                }),
                l = e => {
                    const [t, a] = (0, n.useState)(!1);
                    let l = (0, s.mr)(!0);
                    l = { ...l,
                        height: 320
                    };
                    const r = (0, n.useRef)(l);
                    return (0, n.useEffect)((() => {
                        o.load().then((() => {
                            a(!0)
                        }))
                    }), []), t ? n.createElement(o, e) : n.createElement("div", {
                        className: "video-loader",
                        style: r.current
                    })
                }
        },
        2979: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => n
            });
            const n = (0, a(40684).ZP)({
                resolved: {},
                chunkName: () => "website-builder",
                isReady(e) {
                    const t = this.resolve(e);
                    return !0 === this.resolved[t] && !!a.m[t]
                },
                importAsync: () => Promise.all([a.e(82916), a.e(6030), a.e(46066), a.e(31137), a.e(98785), a.e(88814), a.e(55761), a.e(35622), a.e(15201), a.e(71508), a.e(56455), a.e(20793)]).then(a.bind(a, 80381)),
                requireAsync(e) {
                    const t = this.resolve(e);
                    return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                },
                requireSync(e) {
                    const t = this.resolve(e);
                    return a(t)
                },
                resolve: () => 80381
            })
        },
        46034: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => r
            });
            var n = a(67294),
                s = a(14494),
                o = a(19923);
            class l extends n.Component {
                constructor(e) {
                    super(e)
                }
                render() {
                    const e = "next" == this.props.arrowType ? "right" : "left",
                        t = -1 != (this.props.className || "").indexOf("slick-disabled");
                    return n.createElement("button", {
                        className: "slider-arrow-circle ".concat(e, "-circle icon-pagination-").concat(e, " slider-").concat(e, "-arrow slick-arrow ").concat(t ? "arrow-disabled" : ""),
                        style: {
                            display: "flex",
                            padding: 0
                        },
                        onClick: e => {
                            this.props.onClick(e), this.props.isCmsAndEditMode && (e.stopPropagation(), this.props.closeAllPopover())
                        }
                    })
                }
            }
            const r = (0, s.$j)(null, {
                closeAllPopover: o.ok
            })(l)
        },
        40130: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => i
            });
            var n = a(67294),
                s = a(46066),
                o = a(46034);

            function l() {
                return (l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function r(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            class i extends n.Component {
                constructor(...e) {
                    super(...e), r(this, "state", {
                        active: 1
                    }), r(this, "defaultSettings", {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: !1,
                        arrows: !0,
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        infinite: !0,
                        cssEase: "linear",
                        pauseOnFocus: !1,
                        useTransform: !0,
                        prevArrow: n.createElement(o.Z, {
                            arrowType: "prev"
                        }),
                        nextArrow: n.createElement(o.Z, {
                            arrowType: "next"
                        })
                    }), r(this, "visibleDotStart", 0), r(this, "numberOfDots", 7), r(this, "handleDotsOnChange", ((e, t) => {
                        if (this.element) {
                            const a = this.element.querySelector(".slick-dots");
                            if (a) {
                                const n = e - (Number(a.getAttribute("data-selected-index")) || 0),
                                    s = n > 0 ? " move-right" : " move-left";
                                a.setAttribute("data-selected-index", e);
                                const o = a.querySelectorAll("li"),
                                    l = this.visibleDotStart;
                                e <= this.visibleDotStart ? this.visibleDotStart = e - 1 : e >= this.visibleDotStart + this.numberOfDots - 1 && (this.visibleDotStart = e + 2 - this.numberOfDots), this.visibleDotStart + this.numberOfDots > o.length && (this.visibleDotStart = o.length - this.numberOfDots), this.visibleDotStart < 0 && (this.visibleDotStart = 0), t && this.setVisibleDots({
                                    index: e,
                                    allLis: o,
                                    indexDiff: n,
                                    direction: s,
                                    lastVisibleDotStart: l
                                })
                            }
                        }
                    })), r(this, "onSliderBeforeChange", (e => {
                        this.handleDotsOnChange(e, !0)
                    })), r(this, "onSlideAfterChange", (e => {
                        this.setState({
                            active: e + 1
                        }), this.handleDotsOnChange(e), this.props.onChange && this.props.onChange(e)
                    })), r(this, "setVisibleDots", (({
                        index: e = 0,
                        allLis: t,
                        indexDiff: a,
                        direction: n,
                        lastVisibleDotStart: s = 0,
                        fromMount: o
                    }) => {
                        const l = this.props.sliderOptions || {},
                            r = t[s] || {},
                            i = () => {
                                for (let a = 0; a < t.length; a++) {
                                    const n = t[a],
                                        s = n.querySelector(".slick-dot-indicator");
                                    a >= this.visibleDotStart && a < this.visibleDotStart + this.numberOfDots ? n.style.display = "inline-block" : n.style.display && (n.style.display = ""), a === this.visibleDotStart ? (s.style.display = "inline-block", s.style.left = Math.abs(e - this.visibleDotStart) * (this.dotWidth + this.spaceBetweenDots) + "px") : s.style.display && (s.style.display = "", s.style.left = "", s.className = s.className.replace(/ move-right| move-left/g, ""))
                                }
                            },
                            c = r.querySelector && r.querySelector(".slick-dot-indicator");
                        if (c) {
                            if (c.style.display = "inline-block", o) return void i();
                            a = (a = Math.abs(a)) > this.numberOfDots ? this.numberOfDots : a;
                            let t = e - s;
                            t = t < 0 ? 0 : t, c.className = c.className.replace(/ move-right| move-left/g, ""), c.className += n, c.style.left = t * (this.dotWidth + this.spaceBetweenDots) + "px", c.style.width = 2 * a * this.dotWidth + this.dotWidth + "px", setTimeout((() => {
                                c.style.width = "", i()
                            }), l.speed || 300)
                        }
                    })), r(this, "getSliderSettings", (() => {
                        const e = Object.assign({}, this.defaultSettings, this.props.sliderOptions);
                        return this.dotWidth = this.props.dotWidth || 8, this.spaceBetweenDots = this.props.spaceBetweenDots || 10, this.props.dotsEffect && (e.beforeChange = (e, t) => this.onSliderBeforeChange(t), e.customPaging = e => n.createElement("div", {
                            className: "pos-rel"
                        }, n.createElement("button", {
                            className: "slick-dot-indicator"
                        }, "-"), n.createElement("button", null, e))), e
                    }))
                }
                componentDidMount() {
                    this.props.dotsEffect && this.element && this.setVisibleDots({
                        allLis: this.element.querySelectorAll(".slick-dots li"),
                        fromMount: !0
                    })
                }
                render() {
                    const e = this.getSliderSettings(),
                        t = this.props.children.length,
                        a = this.state.active;
                    let o = this.props.arrowGradients ? " show-arrow-gradient" : "";
                    return 1 == a ? o += " slider-start" : (a == t || a + e.slidesToScroll > t) && (o += " slider-end"), n.createElement("div", {
                        className: "slider-wrapper".concat(o),
                        ref: e => this.element = e
                    }, this.props.showCount && t > 1 ? n.createElement("div", {
                        className: "slider-count"
                    }, "".concat(a, "/").concat(t)) : null, this.props.showAddToCatalouge && n.createElement("div", {
                        className: "not-present-catalouge"
                    }, "Not Present In Your Catalogue"), n.createElement(s.Z, l({}, e, {
                        afterChange: this.onSlideAfterChange,
                        className: "".concat(this.props.className, " ").concat(this.props.showAddToCatalouge ? "template-product" : ""),
                        ref: e => this.slider = e
                    }), this.props.children))
                }
            }
        },
        62468: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => m
            });
            var n = a(67294),
                s = a(81488),
                o = a(17745),
                l = a(21953),
                r = a(2979),
                i = a(3965);
            const c = {
                AmenityIcon: {
                    hoursopen: "icon-HoursOpen",
                    "24hoursopen": "icon-HoursOpen",
                    hourssecurity: "icon-HoursSecurity",
                    acroom: "icon-ACRoom",
                    advancebookingtimings: "icon-AdvanceBookingTimings",
                    airporttransfer: "icon-AirportTransfer",
                    alltimepowerbackup: "icon-AllTimePowerBackup",
                    ambulanceservice: "icon-AmbulanceService",
                    atmfacility: "icon-AtmFacility",
                    "24hoursatm": "icon-AtmFacility",
                    awardstrophies: "icon-AwardsTrophies",
                    badminton: "icon-Badminton",
                    bajajalliance: "icon-BajajAlliance",
                    banquethall: "icon-BanquetHall",
                    bar: "icon-Bar",
                    basketball: "icon-Basketball",
                    beautyparlour: "icon-BeautyParlour",
                    billiardspooltable: "icon-Billiardspooltable",
                    birthdayparty: "icon-BirthdayParty",
                    bloodbank: "icon-BloodBank",
                    bookshop: "icon-BookShop",
                    breakfast: "icon-Breakfast",
                    breakfastmenupresent: "icon-Breakfast",
                    alldaybreakfast: "icon-Breakfast",
                    buffet: "icon-Buffet",
                    buffetatvenue: "icon-Buffet",
                    cablesatellitetvservice: "icon-CableSatelliteTVService",
                    candlelightdinner: "icon-CandleLightDinner",
                    carparking: "icon-CarParking",
                    parking: "icon-CarParking",
                    carrental: "icon-CarRental",
                    cateringservices: "icon-CateringServices",
                    changingrooms: "icon-ChangingRooms",
                    changingroom: "icon-ChangingRooms",
                    checkin: "icon-CheckIn",
                    checkout: "icon-CheckOut",
                    chemist: "icon-Chemist",
                    conferenceroom: "icon-ConferenceRoom",
                    dancefloor: "icon-dance_floor",
                    deliveryboy: "icon-Delivery-Boy-2",
                    dessert: "icon-Dessert",
                    dinein: "icon-DineIn",
                    doctoroncall: "icon-DoctorOnCall",
                    ewallet: "icon-EWallet",
                    walletaccepted: "icon-EWallet",
                    extrabed: "icon-ExtraBed",
                    extramattress: "icon-ExtraMattress",
                    gym: "icon-FitnessCentre",
                    fitnesscentre: "icon-FitnessCentre",
                    goodplaceforkids: "icon-GoodPlaceforKids",
                    hairdryer: "icon-Hairdryer",
                    happyhours: "icon-HappyHours",
                    helpdesk: "icon-HelpDesk",
                    housekeeping: "icon-Housekeeping",
                    inhousepharmacy: "icon-InHousePharmacy",
                    inhouserestaurant: "icon-InHouseRestaurant",
                    internetaccess: "icon-Internet-Access",
                    jainfriendly: "icon-JainFriendly",
                    laundryservices: "icon-LaundryServices",
                    livemusic: "icon-live_music",
                    livescreening: "icon-screaning",
                    lounge: "icon-Lounge",
                    newspaper: "icon-Newspaper",
                    nightlife: "icon-night_life",
                    nonvegavailable: "icon-NonVegAvailable",
                    outdoorseating: "icon-OutdoorSeating",
                    pathologylab: "icon-PathologyLab",
                    pricefortwo: "icon-PriceForTwo",
                    purevegetarian: "icon-PureVegetarian",
                    railwaystationtransfer: "icon-RailwayStationTransfer",
                    roomservice: "icon-RoomService",
                    seatingnotavailable: "icon-SeatingNotAvailable",
                    servesalcohol: "icon-ServesAlcohol",
                    smokingareas: "icon-SmokingAreas",
                    smokingzone: "icon-SmokingAreas",
                    spa: "icon-Spa",
                    swimmingpool: "icon-SwimmingPool",
                    takeawayonly: "icon-TakeAwayOnly",
                    takeaway: "icon-TakeAwayOnly",
                    teacoffeemaker: "icon-TeaCoffeeMaker",
                    valetparking: "icon-ValetParking",
                    vouchersaccepted: "icon-VouchersAccepted",
                    wheelchairseatingservices: "icon-WheelChairSeatingServices",
                    wifiavailable: "icon-WifiAvailable",
                    wifi: "icon-WifiAvailable",
                    freewifi: "icon-WifiAvailable",
                    freehomedelivery: "icon-Delivery-Boy-2",
                    homedelivery: "icon-Delivery-Boy-2",
                    multiplepaymentmodes: "icon-paymentMode",
                    multiplepaymentmode: "icon-paymentMode",
                    halalmeatavailable: "icon-halal",
                    veganchoicesavailable: "icon-PureVegetarian",
                    cardpayment: "icon-card",
                    partyorders: "icon-BirthdayParty"
                }
            };

            function d() {
                return (d = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const m = ({
                data: e,
                element: t,
                cmsKey: a,
                parentProps: m
            }) => {
                const p = m.isCmsAndEditMode,
                    u = e.data.length,
                    y = { ...u ? (0, l.A1)(u + Number(p), m.isMobile, "amenities") : {},
                        ...e.commonData
                    },
                    h = e.style,
                    g = (e, t) => {
                        if (!e) {
                            let e = c.AmenityIcon[t.toLowerCase().replace(/\s/g, "")];
                            if (null == e) {
                                const e = t.search(/[a-z1-9]/i);
                                return "icon-text".concat(-1 == e ? "A" : t[e].toUpperCase())
                            }
                            return e
                        }
                        return e
                    };
                let b = e.data.map(((e, t) => {
                    const a = (e => {
                            const t = { ...e
                            };
                            try {
                                t.borderRadius = (t.borderRadius || "10px").split(" ").map((e => (e = parseInt(e)) ? e + t.borderWidth + "px" : e + "px")).join(" ")
                            } catch (e) {}
                            return t
                        })(h.image.style),
                        l = {
                            holderClass: "content para-1",
                            class: h.title.class + " not-editable para-1 font-size-16",
                            style: h.title.style,
                            text: e.title.text,
                            parentProps: m,
                            cmsKey: "data.data." + t + ".title",
                            styleKey: "data.style.title",
                            attrs: e.title.attr,
                            animationObj: e.title.animationObj
                        },
                        r = {
                            holderClass: "iconBox padding0",
                            cmsKey: "data.data." + t + ".image",
                            styleKey: "data.style.image",
                            attrs: e.image.attr,
                            class: "AmenitiesIconContainer clearfix iconContainer",
                            style: a,
                            parentProps: m,
                            animationObj: e.image.animationObj
                        };
                    return n.createElement("div", {
                        className: "amenities-block-container",
                        style: {
                            width: y.width + "%"
                        },
                        "data-index": t
                    }, n.createElement("div", {
                        className: "col-md-12 pdlr-10 marginT20 ".concat(m.isMobile ? "marginB15" : "")
                    }, n.createElement("div", {
                        className: "editable-icon-holder"
                    }, n.createElement(o.Z, d({}, r, {
                        blockType: "amenities"
                    }), n.createElement("div", {
                        className: "icon-holder ".concat(g(e.image.imgSrc, e.title.text))
                    }))), n.createElement("div", {
                        className: "marginT15 clearfix"
                    }, n.createElement(s.Z, d({}, l, {
                        blockType: "amenities"
                    })))))
                }));
                const v = {
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    ...y.containerStyle
                };
                return p && b.unshift(n.createElement(r.Z, {
                    buttonText: "Add New Amenity",
                    style: {
                        width: (y.width || 100) + "%"
                    },
                    holderClass: u ? "amenities-added" : "no-amenity-present",
                    buttonIcon: "icon-amenitiesSM service-icon",
                    onAddBtnClick: t => {
                        t && t.stopPropagation(), (0, i.iy)({
                            sliderType: "editAmenitiesServicesSlider",
                            subSliderType: "addAmenitiesServicesSlider",
                            selectedTemplate: "jd-amenities",
                            data: e.data,
                            commonData: e.commonData
                        })
                    },
                    hidePopoverOnClick: !0,
                    parentProps: m
                })), n.createElement("div", {
                    className: "col-md-12 col-xs-12 align-center"
                }, n.createElement("div", {
                    className: "amenities-block-slider ".concat(m.isMobile ? "amenity-mobile" : ""),
                    style: v
                }, b))
            }
        },
        17745: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => m
            });
            var n = a(67294),
                s = a(80097),
                o = a(99550),
                l = a(78048),
                r = a(17472),
                i = a(2299),
                c = a(13525);

            function d() {
                return (d = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const m = (0, o.Z)((0, c.Z)((e => {
                const {
                    animationStyle: t,
                    onTransitionEnd: a,
                    elementRef: o
                } = e, c = e.cmsKey, m = e.style || {}, p = { ...m,
                    ...t
                }, u = e.parentProps || {};
                if (p.backgroundImage && "layout" === u.type) {
                    const e = ((e = "") => e.replace(/url\((['"])?(.*?)\1\)/gi, "$2"))(p.backgroundImage),
                        t = (0, i.UE)(e, u.type, u.isWebpSupported, "", u.isMobile);
                    p.backgroundImage = "url(".concat(t, ")")
                }
                "amenities" !== e.blockType && delete p.backgroundColor;
                const y = !e.isMobile && e.parentProps && e.parentProps.isCmsAndEditMode;
                return n.createElement("div", d({
                    className: "change-color-holder ".concat(e.holderClass, " ").concat(e.isUnderEdit ? "under-edit" : ""),
                    style: p,
                    onClick: t => e.onClick(t, {
                        blockType: e.blockType
                    })
                }, {}, {
                    onTransitionEnd: a,
                    ref: o
                }), n.createElement(r.Z, e, n.createElement("div", {
                    className: "change-color ".concat(e.class),
                    style: {
                        backgroundColor: m.backgroundColor || null
                    }
                }, e.rows && n.createElement(s.Z, {
                    element: e,
                    data: e.data,
                    cmsKey: c,
                    parentProps: e.parentProps,
                    ignoreParentElement: !0,
                    blockType: e.blockType || ""
                }), e.children)), y && n.createElement(l.Z, null))
            })), "background")
        },
        82275: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => y
            });
            var n = a(67294),
                s = a(14494),
                o = a(40130),
                l = a(40684),
                r = a(46034),
                i = a(81809),
                c = a(2979);

            function d() {
                return (d = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function m(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            const p = (0, l.ZP)({
                resolved: {},
                chunkName: () => "website-builder",
                isReady(e) {
                    const t = this.resolve(e);
                    return !0 === this.resolved[t] && !!a.m[t]
                },
                importAsync: () => Promise.all([a.e(82916), a.e(6030), a.e(46066), a.e(31137), a.e(98785), a.e(88814), a.e(55761), a.e(35622), a.e(15201), a.e(71508), a.e(56455), a.e(20793)]).then(a.bind(a, 29336)),
                requireAsync(e) {
                    const t = this.resolve(e);
                    return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                },
                requireSync(e) {
                    const t = this.resolve(e);
                    return a(t)
                },
                resolve: () => 29336
            });
            class u extends n.PureComponent {
                constructor(e) {
                    super(e), m(this, "getZindexForBanner", ((e, t, a, n) => {
                        this.diffBetweenBanner = t - a == 1 ? "next" == e ? n - 2 : n - 1 : a - t == 1 || 0 == a && t == n - 1 ? "next" == e ? n - 1 : n - 2 : a == n - 1 && 0 == t ? "next" == e ? n - 2 : n - 1 : 0
                    })), m(this, "getVisibleBannerList", ((e, t) => {
                        let a = [];
                        for (var n = 0; n < e.length; n++) {
                            let s = e[n];
                            s[t] && (s.cmsKey = n, a.push(s))
                        }
                        return a
                    })), m(this, "getSlickArrow", (e => n.createElement(r.Z, {
                        arrowType: e,
                        onClick: () => this.slideBanner(e, !0)
                    }))), m(this, "getNonSlickDots", (e => {
                        let t = e.map(((e, t) => {
                            let a = this.state.selectedIndex === t ? "slick-active" : "",
                                s = n.createElement("li", {
                                    className: a
                                }, n.createElement("button", null, t));
                            return 0 === t && (s = n.createElement("li", {
                                className: a
                            }, n.createElement("div", {
                                className: "pos-rel"
                            }, n.createElement("button", {
                                className: "slick-dot-indicator"
                            }, "-"), n.createElement("button", null, t)))), s
                        }));
                        return n.createElement("ul", {
                            className: "slick-dots",
                            "data-selected-index": this.state.selectedIndex
                        }, t)
                    })), m(this, "onDotBeforeChange", (e => {
                        let t;
                        if (this.wrapper && (t = this.wrapper.querySelector(".slick-dots")), t) {
                            const a = e - (Number(t.getAttribute("data-selected-index")) || 0),
                                n = a > 0 ? " move-right" : " move-left";
                            t.setAttribute("data-selected-index", e);
                            let s = t.querySelector(".slick-dot-indicator");
                            const o = () => {
                                s.style.width = "", s.removeEventListener("transitionend", o), s.removeEventListener("webkitTransitionEnd", o), s.removeEventListener("oTransitionEnd", o)
                            };
                            s.addEventListener("transitionend", o), s.addEventListener("webkitTransitionEnd", o), s.addEventListener("oTransitionEnd", o), s.className = s.className.replace(/ move-right| move-left/g, ""), s.className += n, s.style.left = 18 * Math.abs(e) + "px", s.style.width = 16 * Math.abs(a) + 8 + "px"
                        }
                    })), m(this, "componentDidMount", (() => {
                        window.bannerRefs = window.bannerRefs || {}, window.bannerRefs[this.props.parentProps.contentBlockId] = {
                            getRef: () => this.wrapper,
                            activeBanner: () => this.state.selectedIndex
                        };
                        const e = this.props.parentProps.isMobile ? "mobileImg" : "webImg",
                            t = this.getVisibleBannerList(this.props.data.data, e).length;
                        !this.props.parentProps.isCmsAndEditMode && t > 1 && this.isNonSlickSlider(this.props.data.commonData.transitionType) && (this.prevInterval = setInterval(this.slideBanner, 3e3))
                    })), m(this, "isNonSlickSlider", (e => !["slide-in", "slide-up", "slide"].includes(e))), m(this, "slideBanner", ((e = "next", t) => {
                        t && clearInterval(this.prevInterval), this.slideDirection = e;
                        const a = this.props.parentProps.isMobile ? "mobileImg" : "webImg",
                            n = this.getVisibleBannerList(this.props.data.data, a).length;
                        let s = this.state.selectedIndex;
                        s = "next" === e ? s === n - 1 ? 0 : s + 1 : s ? s - 1 : n - 1, this.onDotBeforeChange(s), this.setState({
                            selectedIndex: s
                        }, (() => {
                            const e = this.animationRefs[this.state.selectedIndex];
                            e && e.resetAnimation && e.resetAnimation()
                        }))
                    })), m(this, "getBannerSlider", ((e, t) => {
                        const a = this.props.data.commonData,
                            s = this.props.parentProps.isMobile ? "mobileImg" : "webImg";
                        return e.map(((o, l) => {
                            if (!o[s]) return;
                            const r = this.state.selectedIndex === l,
                                c = "item cropped-image-map edit-banner banner-holder-".concat(l, " ").concat(a.bannerType, " ").concat(a.isSeparate ? "separate-banner" : "", " ").concat(t ? " non-slick-slider" : "slick-slider", " ").concat(r && t ? " active-banner" : "");
                            let d = {
                                key: o.id
                            };
                            this.getZindexForBanner(this.slideDirection, l, this.state.selectedIndex, e.length);
                            const m = {
                                zIndex: r && t ? e.length : this.diffBetweenBanner
                            };
                            let p = { ...o.seoObj
                            };
                            return p.alt = p.alt || this.props.defaultSeo, p.title = p.title || this.props.defaultSeo, n.createElement(i.Z, {
                                key: l,
                                selectedIndex: this.state.selectedIndex,
                                customImage: !0,
                                holderClass: c,
                                holderAttrs: d,
                                parentProps: this.props.parentProps,
                                imgSrc: o[s],
                                imgClass: "bannerImg",
                                imgAttrs: {
                                    draggable: "false"
                                },
                                animationObj: a.animationObj,
                                holderStyle: m,
                                linkObj: o.linkObj,
                                seoObj: p,
                                blockType: "bannerImage",
                                cmsKey: "data.data.".concat(o.cmsKey),
                                updateAnimation: e => this.animationRefs[l] = e
                            })
                        }))
                    })), this.state = {
                        selectedIndex: 0,
                        imageHeightObj: {}
                    }, this.animationRefs = {}, this.diffBetweenBanner = 0, this.slideDirection = "next", this.prevInterval = null
                }
                render() {
                    const {
                        data: e,
                        cmsKey: t = "",
                        parentProps: a
                    } = this.props, s = e.commonData, l = a.isCmsAndEditMode, r = this.getVisibleBannerList(e.data, a.isMobile ? "mobileImg" : "webImg"), i = {
                        containerClass: "for-banner" + (r.length > 0 ? " has-image" : ""),
                        curBlockInfo: {
                            blockUnderEdit: a.contentBlockId,
                            blockType: "bannerImage",
                            type: "noBlockData",
                            curImageCount: e.data.length,
                            maxImageCount: 10,
                            separateImg: !!s.isSeparate,
                            templateType: s.bannerType
                        }
                    };
                    let m = this.isNonSlickSlider(s.transitionType);
                    const u = !!s.isSeparate;
                    if (r.length) {
                        const e = {
                                arrows: !a.isMobile && r.length > 1,
                                autoplay: !l,
                                dots: a.isMobile,
                                autoplaySpeed: 3e3,
                                swipe: a.isMobile,
                                vertical: "slide-up" == s.transitionType,
                                customPaging: e => {
                                    let t = n.createElement("button", null, e);
                                    return 0 == e && (t = n.createElement("div", {
                                        className: "pos-rel"
                                    }, n.createElement("button", {
                                        className: "slick-dot-indicator"
                                    }, "-"), n.createElement("button", null, e))), t
                                },
                                beforeChange: (e, t) => {
                                    this.onDotBeforeChange(t)
                                }
                            },
                            t = {
                                margin: "auto"
                            };
                        "fade" === s.transitionType && (e.fade = !0, e.speed = 1e3);
                        let c = "".concat(u && a.isMobile ? "mobile_banner_" : "web_banner_").concat(s.bannerType);
                        const y = !a.isMobile && r.length > 1,
                            h = a.isMobile && r.length > 1;
                        let g = n.createElement("div", {
                            ref: e => this.wrapper = e,
                            className: "banner-wrapper in-banner ".concat(s.bannerType, " ").concat(m ? "non-slick-slider-item" : "", " "),
                            "data-tempid": c
                        }, m ? n.createElement("div", {
                            className: "img-bx"
                        }, y && this.getSlickArrow("prev"), n.createElement("div", {
                            className: "".concat(m ? "non-slick-slider-item" : "", " ").concat(u ? "separate-banner" : "", " single-item transition-").concat(s.transitionType),
                            style: t
                        }, this.getBannerSlider(r, m)), h && this.getNonSlickDots(r), y && this.getSlickArrow("next")) : n.createElement("div", {
                            className: "img-bx"
                        }, n.createElement(o.Z, {
                            ref: e => this.wrapper = e,
                            className: "single-item-transition-".concat(s.transitionType),
                            sliderOptions: e,
                            style: t,
                            onChange: e => {
                                this.setState({
                                    selectedIndex: e
                                })
                            }
                        }, this.getBannerSlider(r, m))));
                        return l && !a.isMobile && (g = n.createElement(p, d({}, i, {
                            isMobile: a.isMobile
                        }), g)), g
                    } {
                        if (!l) return null;
                        let t = "Add Image for Banner";
                        return e.data.length && (t = "No Banner added for ".concat(a.isMobile ? "mobile" : "web", " view")), n.createElement(p, i, n.createElement(c.Z, {
                            holderClass: "item cropped-image-map default-add-banner " + s.bannerType,
                            parentProps: a,
                            onAddBtnClick: e => {
                                e && e.stopPropagation()
                            },
                            blockType: "bannerImage"
                        }, n.createElement("div", {
                            className: "add-image-banner-btn cursor-pointer"
                        }, n.createElement("div", {
                            className: "banner-img-container add-image-to-banner"
                        }, !a.isMobile && n.createElement("div", {
                            className: "drag-drop-text"
                        }), n.createElement("div", {
                            className: "cms-add-action-button"
                        }, n.createElement("div", {
                            className: "icon-cameraNew"
                        }), n.createElement("div", {
                            className: "add-image-text"
                        }, t)), !a.isMobile && n.createElement("div", {
                            className: "drag-drop-text"
                        }, n.createElement("span", null, "Drag and Drop Files to Upload"))))))
                    }
                }
            }
            const y = (0, s.$j)((({
                staticData: e
            }, t) => ({ ...t,
                defaultSeo: e.seoData.defaultBannerSeo
            })), null)(u)
        },
        20078: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => c
            });
            var n = a(67294),
                s = a(80097),
                o = a(99550),
                l = a(17472),
                r = a(2299);

            function i() {
                return (i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const c = (0, o.Z)((e => {
                const {
                    cmsKey: t,
                    style: a = {},
                    data: o,
                    parentProps: c = {}
                } = e, {
                    scrollEffect: d
                } = { ...o.commonData
                }, m = { ...a
                };
                let p = c.isMobile ? e.mobileImg : e.webImg;
                p && (p = (0, r.UE)(p, c.type, c.isWebpSupported, "", c.isMobile), m.backgroundImage = "url(".concat(p, ")")), delete m.backgroundColor, delete m.paddingTop, delete m.paddingBottom;
                const u = (0, r.eG)(a.backgroundColor),
                    y = u[3] ? {
                        "data-transParency_value": u[3]
                    } : {
                        "data-transParency_value": 1
                    },
                    h = {
                        "data-web-bg-img": e.webImg || "",
                        "data-mob-bg-img": e.mobileImg || ""
                    };
                return n.createElement("div", i({
                    className: "template-main-container ".concat("gallery" == e.parentProps.type && e.data.commonData.blockType ? e.data.commonData.blockType : "", " ").concat(e.holderClass, " ").concat({
                        reveal: "background-attachment-fixed",
                        parallax: "background-parallax",
                        "zoom-in": "background-position-center background-no-repeat",
                        "fade-in": "",
                        "none-effect": ""
                    }[d || "none-effect"]),
                    style: m
                }, y, h, {
                    onClick: t => e.onClick(t, {
                        blockType: e.blockType
                    })
                }, e.seoObj || {}), n.createElement(l.Z, e, n.createElement("div", {
                    className: "custom-template ".concat(e.class),
                    style: {
                        backgroundColor: a.backgroundColor || null,
                        ...(0, r.Lw)(a, e.parentProps.isMobile)
                    }
                }, e.children ? e.children : e.rows && n.createElement(s.Z, {
                    element: e,
                    data: o,
                    cmsKey: t,
                    parentProps: e.parentProps,
                    ignoreParentElement: !0,
                    blockType: e.blockType
                }))))
            }), "blockBackground")
        },
        98891: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => d
            });
            var n = a(67294),
                s = a(99550),
                o = a(78048),
                l = a(17472),
                r = a(2299),
                i = a(13525);

            function c() {
                return (c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const d = (0, s.Z)((0, i.Z)((e => {
                const {
                    animationStyle: t,
                    onTransitionEnd: a,
                    elementRef: s
                } = e, i = (0, n.useRef)(null);
                let d = "";
                e.hoverStyleId && (d += " hoverStyle" + e.hoverStyleId);
                const m = {
                    blockType: e.blockType,
                    customLinkObj: e.customLinkObj
                };
                e.onSubmit && (m.goToLinkElement = i.current);
                const p = !e.disableEditing && e.contentEditable && e.isUnderEdit,
                    u = "buttonDesign" != e.blockType,
                    y = e.parentProps && !e.parentProps.isMobile && e.parentProps.isCmsAndEditMode || "buttonDesign" == e.blockType,
                    h = e.text ? {
                        dangerouslySetInnerHTML: {
                            __html: e.text
                        }
                    } : {
                        children: e.children || null
                    };
                return n.createElement("div", {
                    className: "editable-content-holder editable-button ".concat(e.holderClass || "", " ").concat(e.isUnderEdit ? "under-edit" : ""),
                    onClick: t => e.onClick(t, m)
                }, n.createElement(l.Z, e, n.createElement("div", c({
                    className: "editable-content"
                }, {}), n.createElement("div", c({
                    class: "btn button ".concat(e.class, " ").concat(d),
                    style: { ...e.style || {},
                        ...t
                    },
                    contentEditable: p && u,
                    onClick: t => {
                        (0, r.FL)(t) || e.onSubmit && e.onSubmit(t)
                    },
                    onBlur: e.onBlur,
                    ref: e => {
                        i.current = e, s && (s.current = e)
                    },
                    onTransitionEnd: a
                }, h)))), y && !(p && u) && n.createElement(o.Z, null))
            })), "button")
        },
        89912: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => o
            });
            var n = a(67294),
                s = a(80097);
            const o = e => n.createElement("div", {
                className: "editable-button-container ".concat(e.class)
            }, e.rows && n.createElement(s.Z, {
                element: e,
                cmsKey: e.cmsKey,
                parentProps: e.parentProps,
                ignoreParentElement: !0,
                blockType: e.blockType
            }))
        },
        10666: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => p
            });
            var n = a(67294),
                s = a(9669),
                o = a.n(s),
                l = a(14494),
                r = a(17563),
                i = a(46834),
                c = a(64997);

            function d() {
                return (d = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const m = ({
                data: e = {}
            }) => o()({
                url: "/functions/market/ajxgrocpharmaction.php",
                method: "post",
                data: r.stringify({ ...e,
                    type: "BUSINESS",
                    action: "saveEnquiryDetails",
                    otp: window.otp,
                    from: window.source
                })
            }).then((({
                data: e
            }) => 0 == e.errors.code));

            function p(e) {
                class t extends n.Component {
                    constructor(...e) {
                        var t, a;
                        super(...e), a = ({
                            mobileNo: e,
                            emailId: t,
                            customerName: a,
                            query: n,
                            onComplete: s = (() => {})
                        }) => {
                            const {
                                outletDetails: {
                                    results: {
                                        outletid: o,
                                        isMobileMandatoryForEnquiry: l
                                    }
                                },
                                userInfo: r
                            } = this.props, i = {
                                supid: this.props.supplierId,
                                outletid: o,
                                mobile: e,
                                emailId: t,
                                customername: a,
                                query: n,
                                otp: window.otp,
                                from: window.source
                            };
                            r.phone || r.email || !l ? m({
                                data: i
                            }).then(s) : this.props.toggleSliderModal({
                                key: "OTPModal",
                                show: !0,
                                mobileNo: e,
                                callerType: "enquiry",
                                completeCb: (e, t) => {
                                    "success" == e && (i.mobile = t, m({
                                        data: i
                                    }).then(s))
                                }
                            })
                        }, (t = "onSubmit") in this ? Object.defineProperty(this, t, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : this[t] = a
                    }
                    render() {
                        return n.createElement(e, d({}, this.props, {
                            onSubmit: this.onSubmit
                        }))
                    }
                }
                return (0, l.$j)((({
                    staticData: e
                }, t) => ({ ...t,
                    supplierId: e.supplierId,
                    outletDetails: e.outletDetails,
                    userInfo: e.userInfo
                })), {
                    showToastMessage: i.Z.showMessage,
                    toggleSliderModal: c.L7
                })(t)
            }
        },
        59230: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => s
            });
            var n = a(67294);
            const s = e => e.error ? n.createElement(n.Fragment, null, n.createElement("i", {
                className: "icon-error"
            }), n.createElement("span", null, e.error)) : null
        },
        73115: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => i
            });
            var n = a(67294),
                s = a(81777),
                o = a(98891),
                l = a(19095),
                r = a(59230);
            const i = (0, a(10666).Z)((e => {
                const {
                    name: t,
                    emailId: a,
                    mobileNo: i,
                    message: c,
                    handleSubmit: d,
                    resetForm: m
                } = (0, l.Z)(), p = e.data.style.input, u = e.data.style.button, y = {
                    holderClass: "col-md-4 col-xs-12 input-content",
                    class: "edit-input ".concat(p.class),
                    style: p.style,
                    parentProps: e.parentProps,
                    styleKey: "data.style.input",
                    animationObj: e.data.data && e.data.data.input ? e.data.data.input.animationObj : {}
                }, h = {
                    type: "text",
                    placeholder: "Full Name",
                    maxLength: "50",
                    cmsKey: "data.0.input",
                    inputClass: "form-control cust-placeholder",
                    ...t,
                    ...y
                };
                t.error && (h.class += " validation_error");
                const g = {
                    type: "text",
                    placeholder: "Email ID",
                    cmsKey: "data.1.input",
                    inputClass: "form-control cust-placeholder",
                    ...a,
                    ...y
                };
                a.error && (g.class += " validation_error");
                const b = {
                    type: "text",
                    placeholder: "Mobile Number",
                    cmsKey: "data.2.input",
                    inputClass: "form-control cust-placeholder",
                    maxLength: "10",
                    ...i,
                    ...y
                };
                i.error && (b.class += " validation_error");
                const v = {
                    inputType: "textArea",
                    type: "text",
                    placeholder: "Message",
                    cmsKey: "data.3.input",
                    inputClass: "form-control cust-placeholder",
                    rows: "1",
                    ...c,
                    ...y,
                    holderClass: "col-md-12 col-xs-12 input-content"
                };
                c.error && (v.class += " validation_error");
                const E = {
                    holderClass: u.holderClass,
                    class: "button-shape align-center ".concat(u.class),
                    text: e.data.data ? e.data.data.button.text : "Submit Now",
                    parentProps: e.parentProps,
                    cmsKey: "data.data.button",
                    styleKey: "data.style.button",
                    blockType: "contactUs",
                    style: u.style,
                    onSubmit: n => {
                        d(n) || e.onSubmit({
                            mobileNo: i.value,
                            customerName: t.value,
                            emailId: a.value,
                            query: c.value,
                            onComplete: t => {
                                t && (e.showToastMessage({
                                    message: "Your enquiry has been sent",
                                    type: "success"
                                }), m())
                            }
                        })
                    },
                    hoverStyleId: u.hoverStyleId,
                    animationObj: e.data.data && e.data.data.button ? e.data.data.button.animationObj : {}
                };
                return n.createElement(n.Fragment, null, n.createElement("div", {
                    className: "col-md-12 col-xs-12 paddingLR0"
                }, n.createElement(s.Z, h, n.createElement(r.Z, t)), n.createElement(s.Z, g, n.createElement(r.Z, a)), n.createElement(s.Z, b, n.createElement(r.Z, i))), n.createElement("div", {
                    class: "col-md-12 col-xs-12 editable-content-holder input-content"
                }, n.createElement(s.Z, v, n.createElement(r.Z, c))), n.createElement("div", {
                    class: "col-md-12 align-left col-xs-12"
                }, n.createElement(o.Z, E)))
            }))
        },
        63010: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => i
            });
            var n = a(67294),
                s = a(81777),
                o = a(98891),
                l = a(19095),
                r = a(59230);
            const i = (0, a(10666).Z)((e => {
                const {
                    name: t,
                    emailId: a,
                    mobileNo: i,
                    message: c,
                    handleSubmit: d,
                    resetForm: m
                } = (0, l.Z)(), p = e.data.style.input, u = e.data.style.button, y = {
                    holderClass: "col-md-10 col-xs-12 input-content",
                    class: "edit-input ".concat(p.class),
                    style: p.style,
                    parentProps: e.parentProps,
                    styleKey: "data.style.input",
                    animationObj: e.data.data && e.data.data.input ? e.data.data.input.animationObj : {}
                }, h = {
                    type: "text",
                    placeholder: "YOUR NAME",
                    maxLength: "50",
                    cmsKey: "data.0.input",
                    inputClass: "",
                    ...t,
                    ...y
                };
                t.error && (h.class += " validation_error");
                const g = {
                    type: "text",
                    placeholder: "YOUR EMAIL",
                    cmsKey: "data.1.input",
                    inputClass: "",
                    ...a,
                    ...y
                };
                a.error && (g.class += " validation_error");
                const b = {
                    type: "text",
                    placeholder: "YOUR CONTACT NO.",
                    cmsKey: "data.2.input",
                    inputClass: "",
                    maxLength: "10",
                    ...i,
                    ...y
                };
                i.error && (b.class += " validation_error");
                const v = {
                    inputType: "textArea",
                    type: "text",
                    placeholder: "YOUR MESSAGE",
                    cmsKey: "data.3.input",
                    inputClass: "",
                    rows: "1",
                    ...c,
                    ...y
                };
                c.error && (v.class += " validation_error");
                const E = {
                    holderClass: u.holderClass,
                    class: "contact_submit primary-btn-color ".concat(u.class),
                    text: e.data.data && e.data.data.button ? e.data.data.button.text : "SUBMIT",
                    parentProps: e.parentProps,
                    cmsKey: "data.data.button",
                    styleKey: "data.style.button",
                    blockType: "contactUs",
                    onSubmit: n => {
                        d(n) || e.onSubmit({
                            mobileNo: i.value,
                            customerName: t.value,
                            emailId: a.value,
                            query: c.value,
                            onComplete: t => {
                                t && (e.showToastMessage({
                                    message: "Your enquiry has been sent",
                                    type: "success"
                                }), m())
                            }
                        })
                    },
                    style: u.style,
                    hoverStyleId: u.hoverStyleId,
                    animationObj: e.data.data && e.data.data.button ? e.data.data.button.animationObj : {}
                };
                return n.createElement(n.Fragment, null, n.createElement(s.Z, h, n.createElement(r.Z, t)), n.createElement(s.Z, g, n.createElement(r.Z, a)), n.createElement(s.Z, b, n.createElement(r.Z, i)), n.createElement(s.Z, v, n.createElement(r.Z, c)), n.createElement("div", {
                    class: "col-md-10 col-xs-12 paddingLR0"
                }, n.createElement(o.Z, E)))
            }))
        },
        47942: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => i
            });
            var n = a(67294),
                s = a(81777),
                o = a(98891),
                l = a(19095),
                r = a(59230);
            const i = (0, a(10666).Z)((e => {
                const {
                    name: t,
                    emailId: a,
                    mobileNo: i,
                    message: c,
                    handleSubmit: d,
                    resetForm: m
                } = (0, l.Z)(), p = e.data.style.input, u = e.data.style.button, y = {
                    holderClass: "input-content",
                    class: "edit-input ".concat(p.class),
                    style: p.style,
                    parentProps: e.parentProps,
                    styleKey: "data.style.input",
                    animationObj: e.data.data && e.data.data.input ? e.data.data.input.animationObj : {}
                }, h = {
                    type: "text",
                    placeholder: "Full Name*",
                    maxLength: "50",
                    cmsKey: "data.0.input",
                    inputClass: "",
                    ...t,
                    ...y
                };
                t.error && (h.class += " validation_error");
                const g = {
                    type: "text",
                    placeholder: "Email Id",
                    cmsKey: "data.1.input",
                    inputClass: "",
                    ...a,
                    ...y
                };
                a.error && (g.class += " validation_error");
                const b = {
                    type: "text",
                    placeholder: "Contact No.*",
                    cmsKey: "data.2.input",
                    inputClass: "",
                    maxLength: "10",
                    ...i,
                    ...y
                };
                i.error && (b.class += " validation_error");
                const v = {
                    inputType: "textArea",
                    type: "text",
                    placeholder: "Your Message*",
                    cmsKey: "data.3.input",
                    inputClass: "",
                    rows: "1",
                    ...c,
                    ...y
                };
                c.error && (v.class += " validation_error");
                const E = {
                    holderClass: u.holderClass,
                    class: "contact_submit primary-btn-color ".concat(u.class),
                    text: e.data.data ? e.data.data.button.text : "SUBMIT",
                    parentProps: e.parentProps,
                    cmsKey: "data.data.button",
                    styleKey: "data.style.button",
                    blockType: "contactUs",
                    onSubmit: n => {
                        d(n) || e.onSubmit({
                            mobileNo: i.value,
                            customerName: t.value,
                            emailId: a.value,
                            query: c.value,
                            onComplete: t => {
                                t && (e.showToastMessage({
                                    message: "Your enquiry has been sent",
                                    type: "success"
                                }), m())
                            }
                        })
                    },
                    style: u.style,
                    hoverStyleId: u.hoverStyleId,
                    animationObj: e.data.data && e.data.data.button ? e.data.data.button.animationObj : {}
                };
                return n.createElement(n.Fragment, null, n.createElement("div", {
                    className: "col-md-10 col-xs-12 paddingLR0"
                }, n.createElement("div", {
                    className: "col-md-6 col-xs-12 paddingLR0"
                }, n.createElement(s.Z, h, n.createElement(r.Z, t))), n.createElement("div", {
                    className: "col-md-6 col-xs-12 paddingLR0"
                }, n.createElement(s.Z, b, n.createElement(r.Z, i)))), n.createElement("div", {
                    className: "col-md-10 col-xs-12 paddingLR0"
                }, n.createElement(s.Z, g, n.createElement(r.Z, a))), n.createElement("div", {
                    class: "col-md-10 col-xs-12 paddingLR0"
                }, n.createElement(s.Z, v, n.createElement(r.Z, c))), n.createElement("div", {
                    class: "col-md-10 col-xs-12 paddingLR0"
                }, n.createElement(o.Z, E)))
            }))
        },
        68830: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => c
            });
            var n = a(67294),
                s = a(81777),
                o = a(98891),
                l = a(19095),
                r = a(10666),
                i = a(59230);
            const c = (0, r.Z)((e => {
                const {
                    name: t,
                    emailId: a,
                    mobileNo: r,
                    message: c,
                    handleSubmit: d,
                    resetForm: m
                } = (0, l.Z)(), p = e.data.style.input, u = p.style && p.style.color ? {
                    color: p.style.color
                } : {}, y = e.data.style.button, h = {
                    holderClass: "paddingLR0 input-content",
                    class: "edit-input ".concat(p.class),
                    style: p.style,
                    parentProps: e.parentProps,
                    styleKey: "data.style.input",
                    animationObj: e.data.data && e.data.data.input ? e.data.data.input.animationObj : {}
                };
                let g = "";
                const b = {
                    type: "text",
                    placeholder: "Name",
                    maxLength: "50",
                    cmsKey: "data.0.input",
                    inputClass: "input paddingL40",
                    ...h,
                    ...t
                };
                t.error && (b.class += " validation_error", g = "Required Field");
                const v = {
                    type: "text",
                    placeholder: "Mobile",
                    maxLength: "10",
                    cmsKey: "data.1.input",
                    inputClass: "input paddingL40",
                    ...h,
                    ...r
                };
                r.error && (v.class += " validation_error", g = "Required Field");
                const E = {
                    type: "text",
                    placeholder: "Email",
                    maxLength: "50",
                    cmsKey: "data.2.input",
                    inputClass: "input paddingL40",
                    ...h,
                    ...a
                };
                a.error && (E.class += " validation_error", g || (g = "Invalid Email ID"));
                const f = {
                    inputType: "textArea",
                    type: "text",
                    placeholder: "Your Message",
                    rows: "3",
                    cmsKey: "data.3.input",
                    inputClass: "input paddingL40",
                    ...h,
                    ...c
                };
                c.error && (f.class += " validation_error");
                const k = {
                    holderClass: y.holderClass,
                    class: "button-shape contact_submit ".concat(y.class),
                    text: e.data.data ? e.data.data.button.text : "GET A QUOTE",
                    parentProps: e.parentProps,
                    cmsKey: "data.data.button",
                    styleKey: "data.style.button",
                    blockType: "contactUs",
                    style: y.style,
                    onSubmit: n => {
                        d(n) || e.onSubmit({
                            mobileNo: r.value,
                            customerName: t.value,
                            emailId: a.value,
                            query: c.value,
                            onComplete: t => {
                                t && (e.showToastMessage({
                                    message: "Your enquiry has been sent",
                                    type: "success"
                                }), m())
                            }
                        })
                    },
                    hoverStyleId: y.hoverStyleId,
                    animationObj: e.data.data && e.data.data.button ? e.data.data.button.animationObj : {}
                };
                return n.createElement(n.Fragment, null, n.createElement("div", {
                    className: "row"
                }, n.createElement("div", {
                    className: "col-md-12"
                }, n.createElement(s.Z, b, n.createElement("i", {
                    className: "icon-customerEnquiry icon-position",
                    style: u
                }), n.createElement(i.Z, t))), n.createElement("div", {
                    className: "col-md-12"
                }, n.createElement(s.Z, v, n.createElement("i", {
                    className: "icon-mobileView icon-position",
                    style: u
                }), n.createElement(i.Z, r))), n.createElement("div", {
                    className: "col-md-12"
                }, n.createElement(s.Z, E, n.createElement("i", {
                    className: "icon-atNew icon-position",
                    style: u
                }), n.createElement(i.Z, a))), n.createElement("div", {
                    className: "col-md-12"
                }, n.createElement(s.Z, f, n.createElement("i", {
                    className: "icon-view_rfq2 icon-view_rfq icon-position",
                    style: u
                }), n.createElement(i.Z, c))), n.createElement("div", {
                    className: "col-md-12"
                }, n.createElement(o.Z, k))))
            }))
        },
        98293: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => c
            });
            var n = a(67294),
                s = a(81777),
                o = a(98891),
                l = a(19095),
                r = a(59230),
                i = a(10666);
            a(46834);
            const c = (0, i.Z)((e => {
                const {
                    name: t,
                    emailId: a,
                    mobileNo: i,
                    message: c,
                    handleSubmit: d,
                    resetForm: m
                } = (0, l.Z)(), p = e.data.style.input, u = e.data.style.button, y = {
                    holderClass: "col-md-12 paddingLR0 pull-right col-xs-12 input-content",
                    class: "edit-input ".concat(p.class),
                    style: p.style,
                    parentProps: e.parentProps,
                    styleKey: "data.style.input",
                    animationObj: e.data.data && e.data.data.input ? e.data.data.input.animationObj : {}
                }, h = {
                    type: "text",
                    placeholder: "Full Name",
                    maxLength: "50",
                    cmsKey: "data.0.input",
                    ...t,
                    ...y
                };
                t.error && (h.class += " validation_error");
                const g = {
                    type: "text",
                    placeholder: "Email ID",
                    cmsKey: "data.2.input",
                    ...a,
                    ...y
                };
                a.error && (g.class += " validation_error");
                const b = {
                    type: "text",
                    placeholder: "Mobile Number",
                    maxLength: "10",
                    cmsKey: "data.1.input",
                    ...i,
                    ...y
                };
                i.error && (b.class += " validation_error");
                const v = {
                    inputType: "textArea",
                    type: "text",
                    placeholder: "Message",
                    rows: "3",
                    cmsKey: "data.3.input",
                    ...c,
                    ...y
                };
                c.error && (v.class += " validation_error");
                const E = {
                    holderClass: u.holderClass,
                    class: "contact_submit ".concat(u.class),
                    text: e.data.data ? e.data.data.button.text : "SUBMIT",
                    parentProps: e.parentProps,
                    cmsKey: "data.data.button",
                    styleKey: "data.style.button",
                    blockType: "contactUs",
                    onSubmit: n => {
                        d(n) || e.onSubmit({
                            mobileNo: i.value,
                            customerName: t.value,
                            emailId: a.value,
                            query: c.value,
                            onComplete: t => {
                                t && (e.showToastMessage({
                                    message: "Your enquiry has been sent",
                                    type: "success"
                                }), m())
                            }
                        })
                    },
                    style: u.style,
                    hoverStyleId: u.hoverStyleId,
                    animationObj: e.data.data && e.data.data.button ? e.data.data.button.animationObj : {}
                };
                return n.createElement(n.Fragment, null, n.createElement("div", {
                    className: "col-md-12 col-xs-12"
                }, n.createElement("div", {
                    className: "col-md-6 col-xs-12 paddingLR0"
                }, n.createElement(s.Z, h, n.createElement(r.Z, t)), n.createElement(s.Z, b, n.createElement(r.Z, i)), n.createElement(s.Z, g, n.createElement(r.Z, a))), n.createElement("div", {
                    className: "col-md-6 col-xs-12 paddingLR0 textarea-container"
                }, n.createElement(s.Z, v, n.createElement(r.Z, c)))), n.createElement("div", {
                    className: "col-md-12 align-center col-xs-12"
                }, n.createElement(o.Z, E)))
            }))
        },
        95102: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => q
            });
            var n = a(67294),
                s = a(81488),
                o = a(81777),
                l = a(74517),
                r = a(73160),
                i = a(98891),
                c = a(88739),
                d = a(89912),
                m = a(81809),
                p = a(80097),
                u = a(17745),
                y = a(20078),
                h = a(39613),
                g = a(21953),
                b = a(62468),
                v = a(97),
                E = a(849),
                f = a(98293),
                k = a(68830),
                w = a(73115),
                C = a(63010),
                T = a(47942),
                S = a(52290),
                P = a(68778),
                x = a(7858),
                N = a(11309),
                A = a(82275),
                Z = a(41277),
                M = a(25650),
                O = a(40768),
                I = a(92988),
                _ = a(2299);

            function D() {
                return (D = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const B = (0, M.Z)({
                    resolved: {},
                    chunkName: () => "featured-product",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => Promise.all([a.e(75514), a.e(39705), a.e(23622), a.e(63680), a.e(13076), a.e(95639)]).then(a.bind(a, 21847)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve: () => 21847
                }),
                j = {
                    text: s.Z,
                    image: m.Z,
                    button: i.Z,
                    icon: c.Z,
                    buttonGroup: d.Z,
                    map: l.Z,
                    video: r.Z,
                    input: o.Z,
                    background: u.Z,
                    blockBackground: y.Z,
                    customHtml: I.Z,
                    customForm: O.Z
                },
                L = {
                    dynamicVideo: h.Z,
                    dynamicServiceBlock: g.ZP,
                    enquiryFormT90: f.Z,
                    enquiryFormT54: k.Z,
                    enquiryFormT103: w.Z,
                    enquiryFormT108: C.Z,
                    enquiryFormT109: T.Z,
                    singleTestimonial: S.Z,
                    twoTestimonial: P.Z,
                    threeTestimonial: x.Z,
                    notification: N.Z,
                    amenitiesBlock: b.Z,
                    galleryBlock: v.Z,
                    bannerBlock: A.Z,
                    featuredCat: Z.Z,
                    featuredProd: B,
                    marqueeBlock: E.Z
                },
                q = e => {
                    let {
                        elements: t,
                        data: a,
                        cmsKey: s = "",
                        parentProps: o
                    } = e;
                    const l = {
                        element: t,
                        data: a,
                        cmsKey: s,
                        parentProps: o
                    };
                    if (L[t.type]) {
                        const a = L[t.type];
                        return n.createElement(a, D({}, l, {
                            blockType: e.blockType || ""
                        }))
                    }
                    if (t.rows && -1 == ["background", "buttonGroup", "blockBackground"].indexOf(t.type)) return n.createElement(p.Z, D({}, l, {
                        blockType: e.blockType || ""
                    }));
                    const r = j[t.type];
                    return t.styleKey && (t = { ...t,
                        ...(0, _.ju)({
                            data: a
                        }, t.styleKey)
                    }), r ? n.createElement(r, D({}, t, {
                        data: a,
                        cmsKey: s,
                        parentProps: o,
                        blockType: e.blockType || ""
                    })) : null
                }
        },
        40768: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => l
            }), a(91181);
            var n = a(67294),
                s = a(9669),
                o = a.n(s);

            function l(e) {
                const [t, a] = (0, n.useState)("");
                return (0, n.useEffect)((() => {
                    o().get("/api/getCustomForm?btnText=" + e.btnText + "&formId=" + e.formId + "&isMobile=" + e.parentProps.isMobile).then((({
                        data: e
                    }) => {
                        a(e.customFormHtml)
                    }))
                }), []), n.createElement(n.Fragment, null, n.createElement("div", {
                    className: "clearfix"
                }), n.createElement("div", {
                    className: "custom-form-block enquiryForm",
                    id: "searchForm"
                }, t ? n.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: t
                    }
                }) : n.createElement("div", {
                    className: "feature-product-loader"
                }, n.createElement("div", {
                    className: "loader"
                }, n.createElement("svg", {
                    className: "circle-loader",
                    width: "100",
                    height: "100",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n.createElement("circle", {
                    cx: "50",
                    cy: "50",
                    r: "16"
                }))))))
            }
        },
        92988: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                Z: () => __WEBPACK_DEFAULT_EXPORT__
            });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294),
                _CMS_CMSBlocksHoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99550),
                react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14494);
            const CustomHTML = props => {
                    const customHtml = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),
                        storeReady = (0, react_redux__WEBPACK_IMPORTED_MODULE_2__.v9)((e => e.staticData.storeReady), react_redux__WEBPACK_IMPORTED_MODULE_2__.wU);
                    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((() => {
                        if (storeReady) {
                            var scriptTag = $(customHtml.current).find("script");
                            for (let i = 0; i < scriptTag.length; i++) {
                                var scriptSrc = scriptTag.eq(i).attr("src");
                                if (scriptSrc) {
                                    var scriptEle = document.createElement("script");
                                    $(scriptTag[i].attributes).each((function() {
                                        scriptEle.setAttribute(this.nodeName, this.nodeValue)
                                    })), customHtml.current.appendChild(scriptEle)
                                } else {
                                    var script = scriptTag.eq(i).text();
                                    if (script) try {
                                        eval(script)
                                    } catch (e) {}
                                }
                            }
                        }
                    }), [props.html]), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                        onClick: props.onClick,
                        className: props.holderClass || "",
                        dangerouslySetInnerHTML: {
                            __html: props.html
                        },
                        ref: customHtml
                    })
                },
                __WEBPACK_DEFAULT_EXPORT__ = (0, _CMS_CMSBlocksHoc__WEBPACK_IMPORTED_MODULE_1__.Z)(CustomHTML, "customHtml")
        },
        39613: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => l
            });
            var n = a(67294),
                s = a(73160),
                o = a(81488);
            class l extends n.Component {
                render() {
                    const e = this.props,
                        {
                            data: t,
                            parentProps: a
                        } = e,
                        l = [];
                    let r = [],
                        i = 1,
                        c = 1;
                    a.isCmsAndEditMode && r.push(n.createElement(s.Z, {
                        extraClass: t.data.length ? "video-added" : "no-video-present",
                        parentProps: a,
                        key: i++
                    }));
                    const d = a.isMobile ? 1 : 2;
                    return r.length == d && (l.push(n.createElement("div", {
                        className: "video-row",
                        key: c++
                    }, r)), r = []), t.data.forEach(((e, m) => {
                        const p = t.style.video,
                            u = t.style.title,
                            y = t.style.description,
                            h = {
                                class: "col-md-12 paddingLR0 " + p.class,
                                type: "video",
                                style: p.style,
                                cmsKey: "data.data.".concat(m, ".video"),
                                styleKey: "data.style.video",
                                parentProps: a,
                                ...e.video,
                                blockType: "dynamicVideo"
                            },
                            g = {
                                holderClass: "col-md-12 editable-title paddingLR0",
                                class: "not-editable " + u.class,
                                type: "text",
                                style: u.style,
                                cmsKey: "data.data.".concat(m, ".title"),
                                styleKey: "data.style.title",
                                parentProps: a,
                                ...e.title,
                                disableEditing: !0,
                                blockType: "dynamicVideo"
                            },
                            b = {
                                holderClass: "col-md-12 editable-description paddingLR0",
                                class: "not-editable " + y.class,
                                type: "text",
                                dataKey: "description",
                                style: y.style,
                                cmsKey: "data.data.".concat(m, ".description"),
                                styleKey: "data.style.description",
                                parentProps: a,
                                ...e.description,
                                disableEditing: !0,
                                blockType: "dynamicVideo"
                            };
                        r.push(n.createElement("div", {
                            className: "col-md-6 col-xs-12 video-desc-holder",
                            key: i++
                        }, n.createElement(s.Z, h), g.text ? n.createElement(o.Z, g) : null, b.text ? n.createElement(o.Z, b) : null)), r.length == d && (l.push(n.createElement("div", {
                            className: "video-row",
                            key: c++
                        }, r)), r = [])
                    })), r.length && l.push(n.createElement("div", {
                        className: "video-row",
                        key: c++
                    }, r)), l
                }
            }
        },
        41277: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => E
            }), a(91181);
            var n = a(67294),
                s = a(14494),
                o = a(46066),
                l = a(46034),
                r = a(17745),
                i = a(81809),
                c = a(17472),
                d = a(81488);
            const m = ({
                catData: e,
                index: t,
                isShowDesc: a,
                styleJsonData: s,
                parentProps: o,
                blockType: l
            }) => {
                const {
                    name: r = {},
                    desc: i = {}
                } = s;
                let c = "editable-content not-editable two-line-ellipsis ".concat(o.isMobile ? "clearfix fntclr33 catname" : "");
                r.class && (c += " " + r.class);
                const m = {
                        holderClass: "para-1 linked-section",
                        class: c,
                        style: r.style,
                        text: e.catname,
                        parentProps: o,
                        cmsKey: "data.data." + t + ".name",
                        styleKey: "data.style.name",
                        blockType: l,
                        disableEditing: !0
                    },
                    p = {
                        holderClass: "para-2 linked-section",
                        class: i.class ? i.class : "editable-content not-editable align-center",
                        style: i.style,
                        text: e.description,
                        parentProps: o,
                        cmsKey: "data.data." + t + ".desc",
                        styleKey: "data.style.desc",
                        blockType: l,
                        disableEditing: !0
                    };
                return n.createElement(n.Fragment, null, n.createElement(d.Z, m), " ", e.description && a && n.createElement(d.Z, p), " ")
            };
            var p = a(2299);

            function u() {
                return (u = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const y = e => {
                const {
                    catData: t,
                    template: a,
                    index: s,
                    parentProps: o,
                    isMobile: l
                } = e, d = "bigThumbnailBlock" == a, y = t.imgpath.includes("no-image"), {
                    image: h = {},
                    colorHolder: g = {}
                } = e.styleJsonData, b = ["", "bigThumbnailBlock"].includes(a) || l && "featuredCat" == a;
                let v = "".concat(e.isMoreThanThreshold && s > e.thresholdIndex ? "more-than-threshold" : "");
                const E = "featuredCat",
                    f = d ? ".thumbnail" : "",
                    k = n.createElement(c.Z, u({}, e, {
                        linkObj: {
                            href: t.url
                        }
                    }), n.createElement(m, u({}, e, {
                        blockType: E
                    }))),
                    w = {
                        style: g.style,
                        parentProps: o,
                        cmsKey: "data.data." + s + ".colorHolder",
                        styleKey: "data.style.colorHolder",
                        blockType: E + f
                    },
                    C = (0, n.useRef)((0, p.mr)(y));
                let T = t.imgpath + "?fit=inside|500:500";
                y && (T = l && ["featuredCatAmz", "withDesc"].includes(a) ? "https://image1.jdomni.in/jdomni_email/noImageText_1903191738.png" : "https://image1.jdomni.in/jdomni_email/NoImage_2_1812051829.png");
                const S = {
                        holderClass: "prod-image-container feat-cat-image".concat(y ? " no-image" : "").concat(b ? " square-image" : ""),
                        class: "prod-image-holder",
                        imgSrc: T,
                        imgAttrs: {
                            "data-homeleafcaturl": t.url
                        },
                        seoObj: {
                            alt: t.imageAlt,
                            title: t.imageTitle
                        },
                        attrs: {
                            style: { ...h.style || {},
                                backgroundColor: y ? C.current.background : ""
                            }
                        },
                        parentProps: o,
                        cmsKey: "data.data." + s + ".image",
                        styleKey: "data.style.image",
                        blockType: E + f,
                        linkHolderClass: "dynamic-linked-image",
                        linkObj: {
                            href: t.url
                        }
                    },
                    P = n.createElement("div", {
                        className: "cat-container"
                    }, n.createElement(i.Z, S), d ? n.createElement(r.Z, w, k) : k);
                return n.createElement("div", {
                    className: "home-cat-box grid_view ".concat(v),
                    style: e.boxStyle
                }, P)
            };
            var h = a(2979),
                g = a(80138),
                b = a(3965);

            function v() {
                return (v = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const E = e => {
                const t = (0, s.v9)((e => e.staticData.isMobile), s.wU),
                    [a, r] = (0, n.useState)(!1),
                    i = (0, n.useRef)(null),
                    c = (0, n.useRef)(null),
                    {
                        parentProps: {
                            template: d,
                            isCmsAndEditMode: m,
                            catData: p = [],
                            contentBlockId: u
                        },
                        data: {
                            commonData: {
                                isDropShowOn: E
                            }
                        }
                    } = e;
                (0, n.useEffect)((() => {
                    if (a) {
                        const e = $("#contentBlock" + u).find(".home-cat-box:not(.more-than-threshold)").last();
                        if (e[0] && !t) {
                            let t = $("#staticHeader")[0];
                            t && (t = t.getBoundingClientRect().height), window.scrollTo({
                                top: e[0].getBoundingClientRect().top + window.pageYOffset - (t || 100),
                                behavior: "smooth"
                            })
                        }
                    }
                }), [a]);
                const f = (0, n.useCallback)((() => {
                        (e => {
                            if (c.current) {
                                const a = c.current.children[0];
                                a && t && a.scrollIntoView({
                                    block: e,
                                    behavior: "smooth",
                                    inline: "nearest"
                                })
                            }
                        })(a ? "center" : "start"), a ? setTimeout((() => {
                            r(!a)
                        }), 300) : r(!a)
                    }), [a]),
                    k = p.length,
                    w = !t && ["featuredCat", "featuredCatAmz", "withDesc"].includes(d),
                    {
                        box: C,
                        container: T,
                        blocksInOneRow: S
                    } = (({
                        template: e,
                        isMobile: t,
                        catCount: a,
                        isCmsAndEditMode: n
                    }) => {
                        const s = n ? a + 1 : a,
                            o = {
                                box: {},
                                container: {}
                            };
                        if (!a) return o;
                        if ("" == e) {
                            let e = 0;
                            return t ? e = 2 : (s <= 5 ? (e = s, o.container = {
                                width: 35 * e + "%",
                                margin: "auto",
                                float: "none"
                            }) : e = s % 3 == 0 && s % 4 != 0 ? 3 : s % 4 == 0 || (s + 1) % 4 == 0 ? 4 : 5, s % 5 == 0 && (e = 5)), o.box.width = 100 / e + "%", o.blocksInOneRow = e, o
                        }
                        if (t) {
                            switch (e) {
                                case "withDesc":
                                case "featuredCatAmz":
                                    o.box.width = "25%"
                            }
                            return o
                        }
                        switch (e) {
                            case "bigThumbnailBlock":
                                o.box.width = "33.33%";
                                break;
                            default:
                                o.box.width = "232px"
                        }
                        return o
                    })({
                        template: d,
                        catCount: k,
                        isMobile: t,
                        isCmsAndEditMode: m
                    });
                let P = null;
                const x = {
                        withDesc: 5,
                        featuredCatAmz: 4,
                        featuredCat: 4
                    },
                    N = m ? x[d] - 1 : x[d],
                    A = {
                        arrows: k > N,
                        infinite: k > N,
                        cssEase: "linear",
                        useTransform: !m,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        variableWidth: !0,
                        prevArrow: n.createElement(l.Z, {
                            arrowType: "prev",
                            isCmsAndEditMode: m
                        }),
                        nextArrow: n.createElement(l.Z, {
                            arrowType: "next",
                            isCmsAndEditMode: m
                        })
                    };
                P = (s => {
                    const o = e.data.commonData.isShowDesc && (!t || "featuredCat" == d);
                    let l = ((e, t, a, n, s) => {
                            let o = 4,
                                l = -1;
                            return a || "" == t ? -1 != ["withDesc", "featuredCatAmz"].indexOf(t) ? o = e > (n ? 7 : 8) ? 7 : 8 : "featuredCat" == t ? o = 3 : "" == t && (n ? (o = e, l = 0) : o = a ? e > 8 ? 6 : 8 : e > 15 ? 2 * s : 15) : (o = e, l = 0), n && (o += l), o
                        })(p.length, d, t, m, S),
                        r = "bigThumbnailBlock" != d && p.length > l,
                        i = [],
                        c = p.length - p.length % 3;
                    return m ? c-- : p.length % 3 == 0 && (c -= 3), i = p.map(((i, m) => {
                        const p = {
                            isShowDesc: o,
                            parentProps: e.parentProps,
                            catData: i,
                            template: d,
                            thresholdIndex: l,
                            isMoreThanThreshold: r,
                            index: m,
                            styleJsonData: e.data.style,
                            isMobile: t
                        };
                        let u = s;
                        return t || "bigThumbnailBlock" != d || m >= c && (u = { ...s,
                            marginBottom: 0
                        }), !r || a || m < l ? n.createElement(y, v({}, p, {
                            boxStyle: u,
                            key: i.catId
                        })) : null
                    })), (t || "" == d) && r && i.push(n.createElement(g.Z, {
                        blockBgColor: e.parentProps.blockBgColor,
                        showIcon: "" != d,
                        nameStyle: e.data.style.name || {},
                        template: d,
                        type: a ? "less" : "more",
                        onClick: f,
                        view: ["withDesc", "featuredCatAmz"].includes(d) ? "vertical" : "horizontal"
                    })), i
                })(C);
                let Z = null;
                return m && (Z = ((e, t, a, s) => {
                    const o = e.template;
                    let l = a;
                    if (!t) switch (o) {
                        case "":
                            l = { ...a,
                                width: "calc(".concat(a.width, " - 40px)")
                            };
                            break;
                        case "bigThumbnailBlock":
                            l = { ...a,
                                width: "calc(".concat(a.width, " - 30px)")
                            }
                    }
                    const r = "no-cat-block";
                    if (t) {
                        let t = "icon-categoryRight",
                            a = "button";
                        return ("featuredCat" == o || s && ["withDesc", "featuredCatAmz"].includes(o)) && (a = "section"), n.createElement("div", {
                            className: "no-block-container ".concat(r),
                            style: l
                        }, n.createElement(h.Z, {
                            buttonText: "" == o && s ? "Add Category" : "Add New Category",
                            buttonIcon: t,
                            holderClass: "",
                            onAddBtnClick: () => (0, b.QU)("add"),
                            parentProps: e,
                            style: {},
                            view: a
                        }))
                    }
                    return n.createElement(h.Z, {
                        buttonText: "Add New Category",
                        buttonIcon: "icon-categoryRight",
                        holderClass: r,
                        onAddBtnClick: () => (0, b.QU)("add"),
                        parentProps: e,
                        style: l,
                        view: "button"
                    })
                })(e.parentProps, t, C, k)), t && "featuredCat" == d ? n.createElement(n.Fragment, null, Z, P) : (w && k ? P = n.createElement(o.Z, v({}, A, {
                    ref: i,
                    className: "home-cat-row wrpr category-list-container",
                    style: T
                }), P) : k && (P = n.createElement("div", {
                    ref: c,
                    className: "home-cat-row wrpr category-list-container ".concat("bigThumbnailBlock" == d ? "bigThumbnail" : ""),
                    style: T
                }, Z, P)), n.createElement("div", {
                    style: {},
                    className: "feature-html cat-list-wrapper ".concat(E ? "drop-show-on" : "", " ").concat(k ? "" : "no-category")
                }, (w || !k) && Z, P))
            }
        },
        97: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => m
            });
            var n = a(67294),
                s = a(46066),
                o = a(81809),
                l = a(40684),
                r = a(46034),
                i = a(2979);

            function c() {
                return (c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const d = (0, l.ZP)({
                resolved: {},
                chunkName: () => "website-builder",
                isReady(e) {
                    const t = this.resolve(e);
                    return !0 === this.resolved[t] && !!a.m[t]
                },
                importAsync: () => Promise.all([a.e(82916), a.e(6030), a.e(46066), a.e(31137), a.e(98785), a.e(88814), a.e(55761), a.e(35622), a.e(15201), a.e(71508), a.e(56455), a.e(20793)]).then(a.bind(a, 29336)),
                requireAsync(e) {
                    const t = this.resolve(e);
                    return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                },
                requireSync(e) {
                    const t = this.resolve(e);
                    return a(t)
                },
                resolve: () => 29336
            });
            class m extends n.Component {
                constructor(...e) {
                    var t, a, s;
                    super(...e), s = (e, t) => n.createElement(i.Z, {
                        holderClass: "".concat(0 == e.data.length ? "no-image-in-gallery" : "image-in-gallery", " "),
                        parentProps: t,
                        onAddBtnClick: e => {
                            e && e.stopPropagation()
                        },
                        blockType: "gallery"
                    }, n.createElement("div", {
                        className: "add-image-gallery-btn"
                    }, n.createElement("div", {
                        className: "gallery-img-container add-image-to-gallery"
                    }, !t.isMobile && n.createElement("div", {
                        className: "drag-drop-text"
                    }), n.createElement("div", {
                        className: "cms-add-action-button "
                    }, n.createElement("i", {
                        className: "icon icon-cameraNew"
                    }), n.createElement("span", null, t.isMobile ? "Add Image" : "Add Image for Gallery")), !t.isMobile && n.createElement("div", {
                        className: "drag-drop-text"
                    }, "Drag and Drop Files to Upload")))), (a = "getCMSAddButton") in (t = this) ? Object.defineProperty(t, a, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[a] = s
                }
                render() {
                    const {
                        data: e,
                        cmsKey: t,
                        parentProps: a
                    } = this.props, l = a.isCmsAndEditMode, i = a.isMobile ? 54 : 9, m = {
                        containerClass: "for-gallery clearfix" + (e.data.length - 1 > 0 ? " has-image" : ""),
                        curBlockInfo: {
                            blockUnderEdit: a.contentBlockId,
                            blockType: "gallery",
                            type: "noBlockData",
                            curImageCount: e.data.length,
                            maxImageCount: 54
                        }
                    };
                    let p = null,
                        u = [];
                    !e.data.length && l && (u = this.getCMSAddButton(e, a));
                    let y = [];
                    const h = {
                            arrows: l ? e.data.length > 8 : e.data.length > 9,
                            infinite: !1,
                            cssEase: "linear",
                            pauseOnFocus: !1,
                            useTransform: !l,
                            prevArrow: n.createElement(r.Z, {
                                isCmsAndEditMode: l,
                                arrowType: "prev",
                                onClick: e => {
                                    this.slider.slickPrev()
                                }
                            }),
                            nextArrow: n.createElement(r.Z, {
                                isCmsAndEditMode: l,
                                arrowType: "next",
                                onClick: e => {
                                    this.slider.slickNext()
                                }
                            })
                        },
                        g = a.isMobile ? {
                            paddingLeft: "10",
                            paddingRight: "10"
                        } : {
                            width: "justdial-gallery-block" == e.commonData.blockType ? "calc(33.3% - 30px)" : "33.3%",
                            display: "inline-block",
                            padding: "30px 15px 0px 15px"
                        };
                    return a.isMobile && a.isEdit && (g.width = "90%", g.display = "inline-block", g.padding = "5px"), l && e.data.length < 54 && y.unshift(this.getCMSAddButton(e, a)), e.data.forEach(((t, s) => {
                        const r = {
                            holderClass: "editable-gallery",
                            class: "gallery-img-container ".concat(l ? "editable-content" : ""),
                            imgSrc: t.imgSrc,
                            seoObj: t.seoObj,
                            styleKey: "data.style.image",
                            parentProps: a,
                            cmsKey: "data.data." + s,
                            attrs: {
                                style: e.style.image.style,
                                onClick: () => a.onGalleryImageClick(a.contentBlockId, s)
                            },
                            imgAttrs: {
                                draggable: "false"
                            }
                        };
                        let d = n.createElement("div", {
                            key: s,
                            className: "".concat(a.isMobile ? "mobile-gallery-class" : ""),
                            style: g
                        }, n.createElement(o.Z, c({}, r, {
                            blockType: "gallery"
                        })));
                        y.push(d), y.length !== i && s !== e.data.length - 1 || (u.push(n.createElement("div", null, n.createElement("div", {
                            className: " ".concat(a.isMobile ? "mobileImgRow" : "imgRow", " ")
                        }, y))), y = [])
                    })), p = n.createElement("div", {
                        className: "col-xs-12 clearfix gallery-overflow paddingLR0"
                    }, a.isMobile ? n.createElement("div", {
                        className: "gallery-block "
                    }, u) : n.createElement(s.Z, c({}, h, {
                        ref: e => this.slider = e,
                        className: "gallery-block"
                    }), u)), l && !a.isMobile && (p = n.createElement(d, c({}, m, {
                        isMobile: a.isMobile
                    }), p)), p
                }
            }
        },
        88739: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => d
            });
            var n = a(67294),
                s = a(99550),
                o = a(78048),
                l = a(64997),
                r = a(14494),
                i = a(2299);

            function c() {
                return (c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const d = (0, s.Z)((e => {
                const {
                    animationStyle: t,
                    onTransitionEnd: a,
                    elementRef: s
                } = e, d = (0, n.useRef)(null), m = (0, r.I0)();
                let p = "";
                e.hoverStyleId && (p += " hoverStyle" + e.hoverStyleId);
                const u = {
                    blockType: e.blockType,
                    customLinkObj: e.customLinkObj
                };
                return e.onSubmit && (u.goToLinkElement = d.current), n.createElement("div", {
                    className: "editable-content-holder editable-icon ".concat(e.holderClass || "", " ").concat(e.isUnderEdit ? "under-edit" : ""),
                    onClick: t => e.parentProps.isCmsAndEditMode ? e.onClick(t, u) : void m((0, l.id)({
                        closed: !0
                    }))
                }, n.createElement("div", c({
                    className: "editable-content"
                }, {}), n.createElement("div", {
                    class: "".concat(e.class, " ").concat(p),
                    style: { ...e.style || {},
                        ...t
                    },
                    onClick: t => {
                        (0, i.FL)(t) || e.onSubmit && e.onSubmit(t)
                    },
                    onBlur: e.onBlur,
                    ref: e => {
                        d.current = e, s && (s.current = e)
                    },
                    onTransitionEnd: a
                })), e.parentProps.isCmsAndEditMode && !e.parentProps.isMobile && !e.isUnderEdit && n.createElement(o.Z, {
                    noText: !0
                }))
            }), "icon")
        },
        81809: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => y
            }), a(91181);
            var n = a(67294),
                s = a(99550),
                o = a(78048),
                l = a(17472),
                r = a(2979),
                i = a(72918),
                c = a(2299);
            const d = JSON.parse('{"template1":"4222X4222.png","template2":"3551X3551.png","template6":"2000X1111.png","template3":"601X601.png","template4":"5511X3039.png","template5":"2003X1102.png","template7":"392X231.png","template8":"856X541.png","template10":"200X200.png","template11":"308X307.png","template31":"373X360.png","template32":{"image-size-1":"400X400.png","image-size-2":"400X104.png"},"template33":"455X375.png","template34":"688X454.png","template35":"59X48.png","template36":"683X521.png","template37":"341X341.png","template38":"77X77.png","template39":"454X470.png","template40":"228X121.png","template43":"683X349.png","template42":"683X500.png","template41":"421X250.png","template44":"490X280.png","template45":"298X299.png","template48":{"image-size-1":"345X255.png","image-size-2":"384X397.png"},"template51":"650X325.png","template52":"322X500.png","template53":"100X100.png","template56":"1306X500.png","template57":"260X225.png","template58":{"image-size-1":"800X600.png","image-size-2":"476X285.png"},"template59":{"image-size-1":"100X100.png","image-size-2":"357X238.png"},"template60":{"image-size-1":"623X510.png","image-size-2":"312X240.png"},"template61":"638X325.png","template62":"304X254.png","template63":{"image-size-1":"400X400.png","image-size-2":"400X104.png","image-size-3":"252X283.png"},"template64":{"image-size-1":"400X400.png","image-size-2":"252X283.png"},"template66":"93X73.png","template67":"637X325.png","template68":"82X40.png","template69":{"image-size-1":"638X342.png","image-size-2":"193X193.png"},"template70":{"image-size-1":"452X342.png","image-size-2":"156X156.png","image-size-3":"82X40.png"},"template71":"250X200.png","template72":"137X115.png","template73":"638X180.png","template74":{"image-size-1":"493X230.png","image-size-2":"160X208.png"},"template75":{"image-size-1":"638X320.png","image-size-2":"638X440.png"},"template76":"304X260.png","template77":{"image-size-1":"261X220.png","image-size-2":"261X280.png"},"template78":"261X330.png","template79":"1306X300.png","template80":"415X365.png","template81":"638X440.png","template82":"638X300.png","template83":{"image-size-1":"415X650.png","image-size-2":"862X325.png","image-size-3":"862X132.png"},"template84":"157X157.png","template85":{"image-size-1":"60X60.png","image-size-2":"637X262.png"},"template86":{"image-size-1":"863X300.png","image-size-2":"415X300.png"},"template87":{"image-size-1":"237X185.png","image-size-2":"237X400.png","image-size-3":"504X184.png"},"template88":"415X230.png","template89":"264X65.png","template91":"550X300.png","template92":{"image-size-1":"413X212.png","image-size-2":"90X90.png"},"template96":"401X270.png","template97":"112X111.png","template102":"25X21.png","template106":"59X37.png","template107":"40X40.png","template108":"40X40.png","template110":"237X400.png","template111":"290X290.png","notification1":"67X67.png","mobile_banner_large":"1024X550.png","mobile_banner_small":"1024X400.png","web_banner_large":"1366X550.png","web_banner_small":"1366X284.png","service1":"Services_no_image.jpg","topQuoteTestimonial":"25X26.png","bottomQuoteTestimonial":"30X24.png","pepperFryTestimonial":"490X280.png","customTestimonial":"60X50.png"}');
            var m = a(13525);

            function p() {
                return (p = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const u = ({
                    blockType: e,
                    cmsKey: t,
                    parentProps: a
                }) => {
                    const {
                        holderClass: s,
                        useSmallDiv: o
                    } = (0, c.rv)(a.template);
                    return n.createElement(r.Z, {
                        holderClass: s,
                        parentProps: a,
                        useSmallDiv: o,
                        buttonText: "Add New Image",
                        buttonIcon: "icon-cameraNew",
                        cmsKey: t,
                        onAddBtnClick: e => {
                            e && e.stopPropagation()
                        },
                        blockType: e || "imageUpload",
                        type: "image"
                    })
                },
                y = (0, s.Z)((0, m.Z)((e => {
                    const {
                        animationStyle: t,
                        onTransitionEnd: a,
                        elementRef: s,
                        resetAnimation: r
                    } = e;
                    (0, n.useEffect)((() => {
                        e.updateAnimation && e.updateAnimation({
                            resetAnimation: r
                        })
                    }), [r]);
                    const m = { ...e.attrs || {}
                        },
                        y = { ...e.imgAttrs || {},
                            ...e.seoObj || {}
                        },
                        h = e.parentProps;
                    let g = e.imgSrc,
                        b = d[h.template] || "";
                    b = e.imageSize ? b[e.imageSize] : b;
                    const [v, E] = (0, c.gP)(b);
                    let f = g ? "" : "no-image";
                    if (g) g = (0, c.UE)(g, h.type, h.isWebpSupported, v, e.parentProps.isMobile);
                    else {
                        let t = d[h.template] || "";
                        t = e.imageSize ? t[e.imageSize] : t, g = "https://image1.jdomni.in/banner/transparent_" + t
                    }
                    let k = e.randomColorObj || {
                            paddingBottom: 100 * (E / v || 1) + "%",
                            ...(0, c.mr)(!0)
                        },
                        w = !1;
                    h && h.contentBlockIndex < 2 && (w = !0);
                    let C = n.createElement(i.Z, {
                        blockType: e.blockType || "",
                        randomColorObj: k,
                        imageSrc: g,
                        imgSrc: e.imgSrc,
                        style: e.style,
                        imgClass: e.imgClass,
                        imgAttrs: y,
                        smartFillObj: e.smartFillObj,
                        disableLazyLoad: e.disableLazyLoad || w,
                        lazyLoadOffset: e.lazyLoadOffset,
                        setImageDimensionInfo: e.setImageDimensionInfo,
                        isPreviewDomain: e.isPreviewDomain,
                        contentBlockId: null == h ? void 0 : h.contentBlockId
                    });
                    return e.customImage ? n.createElement("div", p({
                        className: "".concat(e.holderClass || ""),
                        onClick: t => e.onClick(t, {
                            blockType: e.blockType
                        })
                    }, e.holderAttrs || {}, {
                        style: { ...e.holderStyle || {},
                            ...t || {}
                        },
                        onTransitionEnd: a,
                        ref: s
                    }), n.createElement(l.Z, e, C)) : n.createElement("div", {
                        className: "editable-image-holder ".concat(f, " ").concat(e.holderClass || ""),
                        "data-cropperId": e.cropperId,
                        onMouseDown: e => {
                            e.stopPropagation()
                        },
                        onClick: t => e.onClick(t, {
                            blockType: e.blockType,
                            customLinkObj: e.customLinkObj
                        }),
                        style: e.holderStyle || {}
                    }, n.createElement(l.Z, e, n.createElement("div", p({
                        className: "editable-content ".concat(f, " ").concat(e.class || "", " ").concat(e.isUnderEdit ? "under-edit" : "", " ")
                    }, m, {
                        style: { ...m.style || {},
                            ...t || {}
                        },
                        onTransitionEnd: a,
                        ref: s
                    }), C, !e.imgSrc && h.isCmsAndEditMode ? n.createElement(u, e) : null, e.children)), h.isCmsAndEditMode && !e.parentProps.isMobile && e.imgSrc && !e.isUnderEdit && n.createElement(o.Z, {
                        type: "image"
                    }))
                })), "image")
        },
        81777: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => i
            });
            var n = a(67294),
                s = a(99550),
                o = a(78048),
                l = a(13525);

            function r() {
                return (r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const i = (0, s.Z)((0, l.Z)((e => {
                const {
                    animationStyle: t,
                    onTransitionEnd: a,
                    elementRef: s
                } = e, l = (0, n.useRef)();
                let i = null;
                (0, n.useEffect)((() => {
                    e.isUnderEdit && e.contentEditable && !e.shouldAutoFocus && l.current.focus()
                }), [e.contentEditable]);
                const c = e.parentProps.isCmsAndEditMode,
                    d = (0, n.useMemo)((() => c && e.isUnderEdit && e.contentEditable && e.shouldAutoFocus ? {
                        autoFocus: !0,
                        key: +new Date
                    } : null), [e.contentEditable]);
                return i = "textArea" === e.inputType ? n.createElement("textarea", {
                    style: e.style || {},
                    rows: e.rows || 1,
                    className: "form-control ".concat(e.inputClass),
                    placeholder: e.placeholder,
                    value: e.value,
                    onChange: e.onChange,
                    readOnly: c && !(e.isUnderEdit && e.contentEditable),
                    ref: l,
                    seleniumid: "sel_srcBox"
                }) : n.createElement("input", r({
                    type: e.type,
                    style: e.style || {},
                    className: "form-control ".concat(e.inputClass),
                    placeholder: e.placeholder,
                    maxLength: e.maxLength,
                    value: e.value,
                    onChange: e.onChange,
                    readOnly: c && !(e.isUnderEdit && e.contentEditable)
                }, d, {
                    ref: l,
                    seleniumid: "sel_srcBox"
                })), n.createElement("div", {
                    className: "editable-content-holder ".concat(e.holderClass, " ").concat(e.isUnderEdit ? "under-edit" : ""),
                    onClick: e.onClick
                }, n.createElement("div", {
                    className: "editable-content ".concat(e.class),
                    style: {
                        minHeight: "auto",
                        ...t
                    },
                    onTransitionEnd: a,
                    ref: s
                }, i, e.children), c && !e.parentProps.isMobile && !e.isUnderEdit && n.createElement(o.Z, null))
            })), "input", {
                keysToCompare: ["value"]
            })
        },
        74517: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => p
            });
            var n = a(67294),
                s = a(99550),
                o = a(14494),
                l = a(78048),
                r = a(2299);

            function i() {
                return (i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            let d = !1;
            class m extends n.Component {
                constructor(e) {
                    super(e), c(this, "initializeMap", (e => {
                        let t = e || this.props.companyName;
                        d ? gmapInitialize(this.contentBlockId, t) : a.e(35922).then(a.bind(a, 87237)).then((() => {
                            d = !0, gmapInitialize(this.contentBlockId, t)
                        }))
                    })), c(this, "getMapData", (e => {
                        let t = e.data.mapData;
                        const a = e.parentProps;
                        return t && t[a.outletId] && (t = t[a.outletId]), t
                    })), this.mapData = this.getMapData(e), this.contentBlockId = e.parentProps.contentBlockId
                }
                componentDidMount() {
                    this.initializeMap()
                }
                componentWillReceiveProps(e) {
                    e.companyName !== this.props.companyName && this.initializeMap(e.companyName)
                }
                shouldComponentUpdate(e) {
                    const t = this.getMapData(e);
                    return (e.assetLoaded != this.props.assetLoaded || this.mapData.lat != t.lat || this.mapData.long != t.long) && (this.mapData = t, !0)
                }
                componentDidUpdate() {
                    this.initializeMap()
                }
                render() {
                    let e = (0, r.mr)(!0);
                    e = { ...e,
                        height: "100%"
                    };
                    let t = {};
                    const a = this.mapData;
                    return a && (t = {
                        "data-latitude": a.lat,
                        "data-longitude": a.long,
                        "data-location-name": a.locationName,
                        "data-zoom": a.zoomLevel,
                        "data-placeid": a.placeId
                    }), n.createElement("div", {
                        className: this.props.class + " editable-content-holder",
                        onClick: e => {
                            e.stopPropagation(), this.props.onClick(e)
                        }
                    }, n.createElement("div", {
                        id: "getDirections",
                        className: "getdirections store-initial-color store-bg-color",
                        onClick: e => e.stopPropagation()
                    }, n.createElement("div", {
                        className: "paddingR5"
                    }, "Get Direction"), n.createElement("i", {
                        className: "icon-direction"
                    })), n.createElement("div", i({
                        id: "map" + this.contentBlockId,
                        className: "map-holder"
                    }, t), n.createElement("div", {
                        style: e
                    }), n.createElement("div", {
                        className: "map-info-holder"
                    }, n.createElement("p", {
                        className: "map-info"
                    }, "Use two fingers to move the map"))), n.createElement("div", {
                        id: "maptext",
                        className: "maptext"
                    }, "Location information not available."), this.props.parentProps.isCmsAndEditMode && n.createElement(l.Z, {
                        onClick: this.props.onClick
                    }))
                }
            }
            const p = (0, s.Z)((0, o.$j)(((e, t) => ({ ...t,
                companyName: e.themeData.companyName
            })), null)(m, "map"))
        },
        5701: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => p
            });
            a(91181);
            var n = a(67294),
                s = a(46066),
                o = a(81809),
                l = a(40684),
                r = a(46034),
                i = a(2979);

            function c() {
                return (c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const d = (0, l.ZP)({
                    resolved: {},
                    chunkName: () => "website-builder",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => Promise.all([a.e(82916), a.e(6030), a.e(46066), a.e(31137), a.e(98785), a.e(88814), a.e(55761), a.e(35622), a.e(15201), a.e(71508), a.e(56455), a.e(20793)]).then(a.bind(a, 29336)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve: () => 29336
                }),
                m = e => {
                    const t = (0, n.useRef)(null),
                        a = ((0, n.useRef)(null), (0, n.useRef)(null)),
                        [l, m] = (0, n.useState)(!0),
                        [p, u] = (0, n.useState)(!1),
                        [y, h] = (0, n.useState)(0),
                        {
                            data: g,
                            cmsKey: b,
                            parentProps: v
                        } = e,
                        {
                            commonData: E
                        } = g;
                    let f = E.hasOwnProperty("webLayout") && E.webLayout;
                    v.isMobile && (f = E.hasOwnProperty("mobileLayout") && E.mobileLayout);
                    const k = "autoscroll" == f;
                    let w = g.data ? g.data.length : 1;
                    (0, n.useMemo)((() => {
                        setTimeout((() => {
                            (() => {
                                if ("autoscroll" == f && t && t.current) {
                                    let e = t.current.props,
                                        a = t.current.state,
                                        {
                                            breakpoint: n
                                        } = a,
                                        s = n ? e.responsive.find((e => e.breakpoint == n)) : {};
                                    e.autoplay || s.settings && s.settings.autoplay ? t.current.slickPlay() : t.current.slickPause()
                                } else t && t.current && t.current.slickPause()
                            })()
                        }), 200)
                    }), [f]);
                    const C = e => {
                        "autoscroll" == f && a.current && (a.current.contains(e.target) && t.current ? t.current.slickPause() : t && t.current && t.current.slickPlay())
                    };
                    (0, n.useEffect)((() => (document.addEventListener("click", C, !0), () => {
                        document.removeEventListener("click", C, !0)
                    })), []);
                    const T = v.isCmsAndEditMode,
                        S = k ? 1 : 1e4,
                        P = {
                            containerClass: "for-marquee clearfix" + (g.data.length - 1 > 0 ? " has-image" : ""),
                            curBlockInfo: {
                                blockUnderEdit: v.contentBlockId,
                                blockType: "marquee",
                                type: "noBlockData",
                                curImageCount: g.data.length
                            }
                        };
                    let x = null,
                        N = [],
                        A = [];
                    w > 2 && !T && (w -= 1);
                    let Z = "scroll" == f && !v.isMobile,
                        M = k && T;
                    const O = {
                            accessibility: !1,
                            infinite: w > 9 && "autoscroll" == f,
                            arrows: !1,
                            autoplaySpeed: -500,
                            speed: 4e3,
                            cssEase: "linear",
                            pauseOnHover: !0,
                            autoplay: !0,
                            useTransform: !0,
                            prevArrow: n.createElement(r.Z, {
                                isCmsAndEditMode: T,
                                arrowType: "prev",
                                onClick: e => {
                                    t.current.slickPrev()
                                }
                            }),
                            nextArrow: n.createElement(r.Z, {
                                isCmsAndEditMode: T,
                                arrowType: "next",
                                onClick: e => {
                                    t.current.slickPrev()
                                }
                            }),
                            slidesToShow: M ? 9 : 10,
                            slidesToScroll: 1,
                            variableWidth: !1,
                            lazyLoad: !l,
                            waitForAnimate: !0,
                            onLazyLoad: e => {
                                m(e)
                            },
                            beforeChange: (e, t) => {
                                h(e)
                            },
                            responsive: [{
                                breakpoint: 1289,
                                settings: {
                                    infinite: w > 8 && "autoscroll" == f,
                                    autoplay: "autoscroll" == f && w > 8,
                                    slidesToShow: M ? 8 : 9
                                }
                            }, {
                                breakpoint: 1216,
                                settings: {
                                    slidesToShow: M ? 7 : 8,
                                    slidesToScroll: M ? 7 : 8,
                                    arrows: w > 7 && Z
                                }
                            }, {
                                breakpoint: 1100,
                                settings: {
                                    infinite: w > 7 && "autoscroll" == f,
                                    autoplay: "autoscroll" == f && w > 7,
                                    slidesToShow: M ? 7 : 8
                                }
                            }, {
                                breakpoint: 768,
                                settings: {
                                    infinite: w > 4 && "autoscroll" == f,
                                    autoplay: "autoscroll" == f && w > 4,
                                    slidesToShow: M ? 4 : 5
                                }
                            }, {
                                breakpoint: 500,
                                settings: {
                                    infinite: w > 3 && "autoscroll" == f,
                                    autoplay: "autoscroll" == f && w >= 3,
                                    slidesToShow: M ? 3 : 4
                                }
                            }, {
                                breakpoint: 410,
                                settings: {
                                    infinite: w > 2 && "autoscroll" == f,
                                    autoplay: "autoscroll" == f && w > 2,
                                    slidesToShow: M ? 2 : 3
                                }
                            }]
                        },
                        I = (e, t) => n.createElement(i.Z, {
                            holderClass: "".concat(0 == e.data.length ? "no-image-in-marquee" : "image-in-marquee", " "),
                            parentProps: t,
                            onAddBtnClick: e => {
                                e && e.stopPropagation()
                            },
                            blockType: "marquee"
                        }, n.createElement("div", {
                            className: "add-image-marquee-btn"
                        }, n.createElement("div", {
                            className: "marquee-img-container add-image-to-marquee"
                        }, n.createElement("div", {
                            className: "cms-add-action-button "
                        }, n.createElement("i", {
                            className: "icon icon-cameraNew"
                        }), n.createElement("span", null, 0 == e.data.length ? "Add New Image" : t.isMobile ? "" : "Add Image")))));
                    !k && T && g.data.length && A.unshift(I(g, v));
                    let _ = g.data;
                    _ && _.forEach(((e, t) => {
                        const a = e.linkObj,
                            s = {
                                holderClass: "editable-marquee",
                                class: "marquee-img-container ".concat(T ? "editable-cms-content" : ""),
                                imgSrc: e.imgSrc,
                                seoObj: e.seoObj,
                                styleKey: "data.style.image",
                                parentProps: v,
                                cmsKey: "data.data." + t,
                                attrs: {
                                    onClick: e => C(e)
                                },
                                imgAttrs: {
                                    style: g.style.image.style,
                                    draggable: "false"
                                },
                                linkObj: a,
                                customLinkObj: e.linkObj,
                                blockType: "marquee"
                            };
                        let l = n.createElement("div", {
                            key: t,
                            className: "".concat(v.isMobile ? "mobile-marquee-class" : "web-marquee-class")
                        }, n.createElement(o.Z, s));
                        A.push(l), (k && A.length === S || t === g.data.length - 1) && (N.push(n.createElement("div", null, n.createElement("div", {
                            className: "marquee-imgRow"
                        }, A))), A = [])
                    }));
                    const D = k && T && g.data.length || T && !g.data.length;
                    let B = "100%";
                    "scroll" == f && T && p ? B = "calc(100% - 153px)" : "scroll" == f && T ? B = "calc(100% - 129px)" : D && (B = "calc(100% - 124px)"), v.isMobile && T && k ? B = "calc(100% - 100px)" : v.isMobile && !T && k && (B = "100%");
                    let j = {
                        paddingLeft: 0,
                        paddingRight: 0
                    };
                    return !v.isMobile && T && k && (j = { ...j,
                        marginRight: "10px"
                    }), x = n.createElement("div", {
                        className: "col-xs-12 clearfix marquee-overflow paddingLR0"
                    }, n.createElement("div", {
                        className: "marquee-scroll-view autoscroll-mode ".concat(T ? "edit-marquee-wrapper" : "", " ").concat(0 === _.length ? "block-without-images" : ""),
                        style: p && T && "scroll" == f ? {
                            paddingRight: "20px"
                        } : {}
                    }, D ? n.createElement("div", {
                        className: "marquee-block",
                        style: "scroll" == f && p ? j : {}
                    }, n.createElement("div", {
                        className: "marquee-imgRow",
                        style: N.length ? {} : {
                            padding: "0 15px"
                        }
                    }, I(g, v))) : "", n.createElement("div", {
                        style: {
                            width: B
                        },
                        ref: a
                    }, k ? n.createElement(s.Z, c({}, O, {
                        ref: t,
                        className: "marquee-block"
                    }), N) : ""))), T && !v.isMobile && (x = n.createElement(d, c({}, P, {
                        isMobile: v.isMobile
                    }), x)), x
                },
                p = n.memo(m)
        },
        23740: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => p
            });
            a(91181);
            var n = a(67294),
                s = a(46066),
                o = a(81809),
                l = a(40684),
                r = a(46034),
                i = a(2979);

            function c() {
                return (c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const d = (0, l.ZP)({
                    resolved: {},
                    chunkName: () => "website-builder",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => Promise.all([a.e(82916), a.e(6030), a.e(46066), a.e(31137), a.e(98785), a.e(88814), a.e(55761), a.e(35622), a.e(15201), a.e(71508), a.e(56455), a.e(20793)]).then(a.bind(a, 29336)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve: () => 29336
                }),
                m = e => {
                    const t = (0, n.useRef)(null),
                        a = (0, n.useRef)(null),
                        [l, m] = (0, n.useState)(!0),
                        [p, u] = (0, n.useState)(!1),
                        {
                            data: y,
                            cmsKey: h,
                            parentProps: g
                        } = e,
                        {
                            commonData: b
                        } = y;
                    let v = b.hasOwnProperty("webLayout") && b.webLayout;
                    g.isMobile && (v = b.hasOwnProperty("mobileLayout") && b.mobileLayout);
                    const E = "scroll" == v;
                    let f = y.data ? y.data.length : 1;
                    (0, n.useMemo)((() => {
                        setTimeout((() => {
                            (() => {
                                if ("scroll" == v && t && t.current) {
                                    let e = t.current.props,
                                        a = t.current.state,
                                        {
                                            breakpoint: n
                                        } = a,
                                        s = n ? e.responsive.find((e => e.breakpoint == n)) : {};
                                    t.current.slickGoTo(0, !0), s.settings && s.settings.arrows ? u(!0) : u(!1)
                                }
                            })()
                        }), 200)
                    }), [v]);
                    const k = g.isCmsAndEditMode,
                        w = E ? 1 : 1e4,
                        C = {
                            containerClass: "for-marquee clearfix" + (y.data.length - 1 > 0 ? " has-image" : ""),
                            curBlockInfo: {
                                blockUnderEdit: g.contentBlockId,
                                blockType: "marquee",
                                type: "noBlockData",
                                curImageCount: y.data.length
                            }
                        };
                    let T = null,
                        S = [],
                        P = [];
                    f > 2 && !k && (f -= 1);
                    let x = "scroll" == v && !g.isMobile,
                        N = E && k;
                    const A = {
                            accessibility: g.isMobile,
                            infinite: !1,
                            arrows: f > 9 && x,
                            speed: 500,
                            cssEase: "linear",
                            pauseOnHover: !0,
                            autoplay: !1,
                            useTransform: !0,
                            prevArrow: n.createElement(r.Z, {
                                isCmsAndEditMode: k,
                                arrowType: "prev",
                                onClick: e => {
                                    t.current.slickPrev()
                                }
                            }),
                            nextArrow: n.createElement(r.Z, {
                                isCmsAndEditMode: k,
                                arrowType: "next",
                                onClick: e => {
                                    t.current.slickPrev()
                                }
                            }),
                            slidesToShow: N ? 9 : 10,
                            slidesToScroll: N ? 9 : 10,
                            variableWidth: "grid" == v,
                            draggable: !1,
                            touchMove: !1,
                            swipeToSlide: !1,
                            lazyLoad: !l,
                            onLazyLoad: e => {
                                m(e)
                            },
                            responsive: [{
                                breakpoint: 1289,
                                settings: {
                                    arrows: f > 8 && x,
                                    slidesToShow: N ? 8 : 9,
                                    slidesToScroll: N ? 8 : 9
                                }
                            }, {
                                breakpoint: 1216,
                                settings: {
                                    slidesToShow: N ? 7 : 8,
                                    slidesToScroll: N ? 7 : 8,
                                    arrows: f > 7 && x
                                }
                            }, {
                                breakpoint: 1100,
                                settings: {
                                    slidesToShow: N ? 7 : 8,
                                    slidesToScroll: 1,
                                    arrows: !1,
                                    draggable: !0,
                                    touchMove: !0,
                                    swipeToSlide: !0
                                }
                            }, {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: N ? 4 : 5,
                                    slidesToScroll: 1,
                                    arrows: !1,
                                    draggable: !0,
                                    touchMove: !0,
                                    swipeToSlide: !0
                                }
                            }, {
                                breakpoint: 500,
                                settings: {
                                    slidesToShow: N ? 3 : 4,
                                    slidesToScroll: 1,
                                    arrows: !1,
                                    draggable: !0,
                                    touchMove: !0,
                                    swipeToSlide: !0
                                }
                            }, {
                                breakpoint: 410,
                                settings: {
                                    slidesToShow: N ? 2 : 3,
                                    slidesToScroll: 1,
                                    arrows: !1,
                                    draggable: !0,
                                    touchMove: !0,
                                    swipeToSlide: !0
                                }
                            }]
                        },
                        Z = (e, t) => n.createElement(i.Z, {
                            holderClass: "".concat(0 == e.data.length ? "no-image-in-marquee" : "image-in-marquee", " "),
                            parentProps: t,
                            onAddBtnClick: e => {
                                e && e.stopPropagation()
                            },
                            blockType: "marquee"
                        }, n.createElement("div", {
                            className: "add-image-marquee-btn"
                        }, n.createElement("div", {
                            className: "marquee-img-container add-image-to-marquee"
                        }, n.createElement("div", {
                            className: "cms-add-action-button "
                        }, n.createElement("i", {
                            className: "icon icon-cameraNew"
                        }), n.createElement("span", null, 0 == e.data.length ? "Add New Image" : t.isMobile ? "" : "Add Image")))));
                    !E && k && y.data.length && P.unshift(Z(y, g));
                    let M = y.data;
                    M && M.forEach(((e, t) => {
                        const a = e.linkObj,
                            s = {
                                holderClass: "editable-marquee",
                                class: "marquee-img-container ".concat(k ? "editable-cms-content" : ""),
                                imgSrc: e.imgSrc,
                                seoObj: e.seoObj,
                                styleKey: "data.style.image",
                                parentProps: g,
                                cmsKey: "data.data." + t,
                                imgAttrs: {
                                    style: y.style.image.style,
                                    draggable: "false"
                                },
                                linkObj: a,
                                customLinkObj: e.linkObj,
                                blockType: "marquee"
                            };
                        let l = n.createElement("div", {
                            key: t,
                            className: "".concat(g.isMobile ? "mobile-marquee-class" : "web-marquee-class")
                        }, n.createElement(o.Z, s));
                        P.push(l), (E && P.length === w || t === y.data.length - 1) && (S.push(n.createElement("div", null, n.createElement("div", {
                            className: "marquee-imgRow"
                        }, P))), P = [])
                    }));
                    const O = E && k && y.data.length || k && !y.data.length;
                    let I = [...S],
                        _ = "100%";
                    "scroll" == v && k && p ? _ = "calc(100% - 153px)" : "scroll" == v && k ? _ = "calc(100% - 129px)" : O && (_ = "calc(100% - 124px)"), g.isMobile && k && E ? _ = "calc(100% - 100px)" : g.isMobile && !k && E && (_ = "100%");
                    let D = {
                        paddingLeft: 0,
                        paddingRight: 0
                    };
                    return !g.isMobile && k && E && (D = { ...D,
                        marginRight: "10px"
                    }), T = n.createElement("div", {
                        className: "col-xs-12 clearfix marquee-overflow paddingLR0"
                    }, n.createElement("div", {
                        className: "marquee-".concat(E ? "scroll" : "grid", "-view ").concat(E ? "scroll-mode" : "", " ").concat(k ? "edit-marquee-wrapper" : "", " ").concat(0 === M.length ? "block-without-images" : ""),
                        style: p && k && "scroll" == v ? {
                            paddingRight: "20px"
                        } : {}
                    }, !O || "scroll" != v && "grid" != v ? "" : n.createElement("div", {
                        className: "marquee-block",
                        style: "scroll" == v && p ? D : {}
                    }, n.createElement("div", {
                        className: "marquee-imgRow",
                        style: S.length ? {} : {
                            padding: "0 15px"
                        }
                    }, Z(y, g))), n.createElement("div", {
                        style: {
                            width: _
                        },
                        ref: a
                    }, "scroll" == v || "grid" == v ? n.createElement(s.Z, c({}, A, {
                        ref: t,
                        className: "marquee-block"
                    }), I) : ""))), k && !g.isMobile && (T = n.createElement(d, c({}, C, {
                        isMobile: g.isMobile
                    }), T)), T
                },
                p = n.memo(m)
        },
        849: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => i
            });
            var n = a(67294),
                s = (a(46066), a(81809), a(40684)),
                o = (a(46034), a(2979), a(5701)),
                l = a(23740);
            (0, s.ZP)({
                resolved: {},
                chunkName: () => "website-builder",
                isReady(e) {
                    const t = this.resolve(e);
                    return !0 === this.resolved[t] && !!a.m[t]
                },
                importAsync: () => Promise.all([a.e(82916), a.e(6030), a.e(46066), a.e(31137), a.e(98785), a.e(88814), a.e(55761), a.e(35622), a.e(15201), a.e(71508), a.e(56455), a.e(20793)]).then(a.bind(a, 29336)),
                requireAsync(e) {
                    const t = this.resolve(e);
                    return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                },
                requireSync(e) {
                    const t = this.resolve(e);
                    return a(t)
                },
                resolve: () => 29336
            });
            const r = e => {
                    const {
                        data: t,
                        cmsKey: a,
                        parentProps: s
                    } = e, {
                        commonData: r
                    } = t;
                    let i = r.hasOwnProperty("webLayout") && r.webLayout;
                    return s.isMobile && (i = r.hasOwnProperty("mobileLayout") && r.mobileLayout), n.createElement(n.Fragment, null, "autoscroll" == i ? n.createElement(o.Z, e) : n.createElement(l.Z, e), " ")
                },
                i = n.memo(r)
        },
        11309: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => d
            }), a(91181);
            var n = a(67294),
                s = a(20078),
                o = a(80097),
                l = a(14494),
                r = a(64997),
                i = a(2299);

            function c(e = "") {
                const t = e.split(" ");
                return 1 == t.length ? t[3] = t[2] = t[1] = t[0] : 2 == t.length ? (t[2] = t[0], t[3] = t[1]) : 3 == t.length && (t[3] = t[1]), t
            }
            const d = (0, l.$j)(((e, t) => ({ ...t,
                showNotificationCard: e.contentBlockInfo.showNotificationCard
            })), {
                updateNotificationCardView: r.Iy
            })((e => {
                const [t, a] = (0, n.useState)(e.showNotificationCard), [l, r] = (0, n.useState)(e.showNotificationCard ? "" : "hide-change-color-holder"), d = e.showNotificationCard;
                let {
                    element: m,
                    data: p,
                    cmsKey: u = "",
                    parentProps: y
                } = e;
                m = JSON.parse(JSON.stringify(m));
                const h = (0, i.Cl)({
                    elements: m,
                    data: p
                }, {
                    key: "eleKey",
                    keyValue: "notification-container"
                });
                let g = h && h[0];
                if (g) {
                    let e = (0, i.Cl)({
                        elements: m,
                        data: p
                    }, {
                        key: "eleKey",
                        keyValue: "left-bg-holder"
                    });
                    e = e && e[0];
                    let t = (0, i.Cl)({
                        elements: m,
                        data: p
                    }, {
                        key: "eleKey",
                        keyValue: "right-bg-holder"
                    });
                    t = t && t[0];
                    let a = [];
                    if (e) {
                        const t = c((e.style || {}).borderRadius || "");
                        a = [t[0], 0, 0, t[3]]
                    }
                    if (t) {
                        const e = c((t.style || {}).borderRadius || "");
                        a.length ? (a[1] = e[1], a[2] = e[2]) : a = e
                    }
                    g.style.borderRadius = a.join(" ")
                }
                const b = { ...m,
                    data: p,
                    cmsKey: u,
                    parentProps: y,
                    blockType: "notification"
                };
                y.isFullView = d, d || (b.holderClass += " min-view"), b.holderClass += " " + l;
                const v = t => {
                    d ? a(!1) : (r(""), setTimeout((() => {
                        a(!0)
                    }), 250)), e.updateNotificationCardView({
                        isFullView: !d
                    }), d && setTimeout((function() {
                        r("hide-change-color-holder")
                    }), 250)
                };
                let E = !1;
                try {
                    E = y.query && y.query.forScreenshot
                } catch (e) {}
                return E ? null : n.createElement(s.Z, b, n.createElement("div", {
                    onClick: d ? "" : v
                }, b.rows && n.createElement(o.Z, {
                    element: b,
                    data: b.data,
                    cmsKey: u,
                    parentProps: b.parentProps,
                    ignoreParentElement: !0,
                    blockType: b.blockType
                }), d && n.createElement("div", {
                    className: "minimize-notification",
                    onClick: d ? v : "",
                    style: {
                        color: "rgb(154, 154, 154)",
                        backgroundColor: "rgb(255, 255, 255)",
                        transition: "all 0.5s",
                        opacity: t ? 1 : 0
                    }
                }, n.createElement("i", {
                    className: "icon icon-minus minimize-icon"
                }))))
            }))
        },
        80097: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => o
            });
            var n = a(67294),
                s = a(49272);
            const o = e => {
                const {
                    cmsKey: t,
                    element: a,
                    data: o,
                    parentProps: l,
                    blockType: r = ""
                } = e;
                if (!a.rows) return null;
                const i = a.style || {},
                    c = a.rows.map(((e, a) => n.createElement(s.Z, {
                        key: a,
                        elements: e,
                        data: o,
                        parentProps: l,
                        cmsKey: (t ? t + ".rows." : "") + a,
                        blockType: r
                    })));
                return e.ignoreParentElement ? c : n.createElement("div", {
                    className: a.class,
                    style: i
                }, c)
            }
        },
        21953: (e, t, a) => {
            "use strict";
            a.d(t, {
                A1: () => h,
                ZP: () => g
            });
            a(91181);
            var n = a(67294),
                s = a(81488),
                o = a(81809),
                l = a(40684),
                r = a(98891),
                i = a(2979),
                c = a(82281),
                d = a(3965);

            function m() {
                return (m = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const p = (0, l.ZP)({
                    resolved: {},
                    chunkName: () => "bulk-upload-slider",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => Promise.all([a.e(23622), a.e(13182), a.e(85998), a.e(29788)]).then(a.bind(a, 68349)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve: () => 68349
                }),
                u = l.ZP.lib({
                    resolved: {},
                    chunkName: () => "bulk-upload-slider",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!a.m[t]
                    },
                    importAsync: () => Promise.all([a.e(23622), a.e(13182), a.e(85998), a.e(29788)]).then(a.bind(a, 67101)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return a(t)
                    },
                    resolve: () => 67101
                }),
                y = e => n.createElement("div", {
                    className: "view-more-less marginTB10 ".concat(e.showMore ? "less-services-block" : "more-services-block"),
                    style: e.style,
                    onClick: e.toggleShowMore
                }, n.createElement("div", {
                    className: "buttonContainer"
                }, n.createElement("span", {
                    className: "".concat(e.showMore ? "view-less" : "view-more")
                }, e.showMore ? "View Less" : "View More"), n.createElement("span", {
                    className: "icon icon-down-arrow-circle"
                }))),
                h = (e, t, a) => {
                    let n, s, o = 0,
                        l = {},
                        r = {
                            services: t ? 2 : 5,
                            amenities: t ? 4 : 8
                        };
                    r = r[a];
                    const i = "amenities" == a ? 20 : 35;
                    return t ? (n = Math.ceil(e / r), s = Math.ceil(e / n), o = 100 / s) : (n = Math.ceil(e / r), s = Math.ceil(e / n), o = 100 / s, s <= parseInt(r / 2) && (l.width = s * i + "%", l.margin = "auto")), {
                        width: o,
                        contentOneRow: s,
                        numRows: n,
                        threshold: 2 * Math.ceil(e / Math.ceil(e / 5)),
                        containerStyle: l
                    }
                },
                g = ({
                    data: e,
                    element: t,
                    cmsKey: a,
                    parentProps: l
                }) => {
                    const [g, b] = (0, n.useState)(!1), [v, E] = (0, n.useState)(!1);
                    let f = e.data.length;
                    l.isCmsAndEditMode && f++;
                    const k = { ...e.data.length ? h(f, l.isMobile, "services") : {},
                            ...e.commonData
                        },
                        w = e.style;
                    let C = e.data.map(((e, t) => {
                        if (t >= k.threshold && !g) return;
                        if (!e.image && !e.title && !e.subTitle) return;
                        const a = e.button.linkObj || {
                                linkType: "enquiryForm"
                            },
                            i = e.image ? {
                                linkObj: a,
                                customLinkObj: a
                            } : null,
                            c = e.title ? {
                                holderClass: "content para-1",
                                class: w.title.class + " not-editable para-1",
                                style: w.title.style,
                                text: e.title.text,
                                parentProps: l,
                                cmsKey: "data.data." + t + ".title",
                                styleKey: "data.style.title",
                                animationObj: e.title.animationObj,
                                attrs: e.title.attr,
                                disableEditing: !0,
                                linkObj: a,
                                customLinkObj: a
                            } : null,
                            d = e.subTitle ? {
                                holderClass: "content para-2",
                                class: w.subTitle.class + " not-editable para-2",
                                style: w.subTitle.style,
                                text: e.subTitle.text,
                                parentProps: l,
                                cmsKey: "data.data." + t + ".subTitle",
                                styleKey: "data.style.subTitle",
                                animationObj: e.subTitle.animationObj,
                                attrs: e.subTitle.attr,
                                disableEditing: !0,
                                linkObj: a,
                                customLinkObj: a
                            } : null;
                        e.button.text = e.button.text || "Enquire Now";
                        const p = e.button ? {
                            holderClass: "linked-section" + w.button.holderClass,
                            class: "".concat(w.button.class ? w.button.class : ""),
                            text: e.button.text,
                            titleText: e.title ? e.title.text : "",
                            cmsKey: "data.data." + t + ".button",
                            styleKey: "data.style.button",
                            parentProps: l,
                            animationObj: e.button.animationObj,
                            attrs: e.button.attr,
                            style: w.button.style,
                            linkObj: a,
                            customLinkObj: a,
                            disableEditing: !1,
                            hoverStyleId: w.button.hoverStyleId
                        } : null;
                        return n.createElement("div", {
                            className: "services-block-container marginB20",
                            style: {
                                width: k.width + "%"
                            },
                            "data-index": t,
                            key: t
                        }, n.createElement("div", {
                            className: "col-md-12 services-column",
                            style: l && l.isMobile && l.isCmsAndEditMode && 0 == t ? {
                                display: "block"
                            } : {}
                        }, n.createElement("div", {
                            className: "marginT10 clearfix"
                        }, n.createElement(o.Z, m({
                            holderClass: "editable-image-holder services-image dynamic-block-image",
                            imgSrc: e.image.imgSrc || l.isCmsAndEditMode ? e.image.imgSrc : "https://image1.jdomni.in/jdomni_email/noimage_1911281647.jpg",
                            attrs: e.image.attr,
                            imgClass: "services-image-tag",
                            parentProps: l,
                            class: "".concat(w.image.class, " marginB15"),
                            style: w.image.style,
                            blockType: "services",
                            cmsKey: "data.data." + t + ".image",
                            styleKey: "data.style.image",
                            animationObj: e.image.animationObj
                        }, i))), e.title && e.title.text ? n.createElement("div", {
                            className: "marginT10 clearfix"
                        }, n.createElement(s.Z, m({}, c, {
                            blockType: "services"
                        }))) : null, e.subTitle && e.subTitle.text ? n.createElement("div", {
                            className: "clearfix services-desc"
                        }, n.createElement(s.Z, m({}, d, {
                            blockType: "services"
                        }))) : null, k.showInquiryButton && n.createElement("div", {
                            className: "clearfix enquire-btn"
                        }, n.createElement(r.Z, m({}, p, {
                            blockType: "services"
                        })))))
                    }));
                    if (l.isCmsAndEditMode) {
                        let t = {
                            buttonText: "Add New Service",
                            holderClass: "marginB15 noblock-service",
                            style: {
                                width: (k.width || 100) + "%"
                            },
                            buttonIcon: "icon-service service-icon",
                            onAddBtnClick: t => {
                                t && t.stopPropagation(), (0, d.iy)({
                                    sliderType: "editAmenitiesServicesSlider",
                                    subSliderType: "addAmenitiesServicesSlider",
                                    selectedTemplate: "jd-services",
                                    data: e.data,
                                    commonData: e.commonData
                                })
                            },
                            parentProps: l
                        };
                        if (l.isMobile) {
                            t.buttonText = "Add Service", t.buttonIcon = "icon-AddService service-icon", t.holderClass = "no-amenityService-block ".concat(C.length ? "med-div" : ""), t.style = {
                                width: "auto"
                            };
                            let e = {
                                buttonText: "Bulk Upload Service",
                                holderClass: "marginB15 noblock-service no-amenityService-block ".concat(C.length ? "med-div" : ""),
                                style: {
                                    width: "auto"
                                },
                                buttonIcon: "icon-BulkService service-icon",
                                onAddBtnClick: e => {
                                    e && e.stopPropagation(), u.load().then((e => {
                                        const t = e.default;
                                        for (var a in t)(0, c.Q6)(a, t[a]);
                                        E(!0)
                                    }))
                                },
                                parentProps: l
                            };
                            const a = n.createElement("div", {
                                className: "no-block-parent",
                                style: {
                                    width: "".concat(C.length ? "50%" : "100%")
                                }
                            }, n.createElement(i.Z, t), n.createElement(i.Z, e));
                            C.unshift(a)
                        }
                        l.isMobile || C.unshift(n.createElement(i.Z, t))
                    }
                    const T = {
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        ...k.containerStyle,
                        marginTop: "10px"
                    };
                    return f > k.threshold && C.push(n.createElement(y, {
                        showMore: g,
                        toggleShowMore: e => {
                            e && e.stopPropagation(), b(!g)
                        }
                    })), n.createElement(n.Fragment, null, n.createElement("div", {
                        className: "col-md-12 col-xs-12 align-center"
                    }, n.createElement("div", {
                        className: "services-block-slider marginT5",
                        style: T
                    }, C)), v && n.createElement(p, {
                        onHidden: () => {
                            window.updateCMSBlocks && window.updateCMSBlocks({
                                type: "getAllContentBlocks"
                            }, (() => {
                                E(!1)
                            }))
                        },
                        bulkUploadServices: !0,
                        openSortServicesSlider: (e = (() => {})) => {
                            event && event.stopPropagation(), window.updateCMSBlocks({
                                type: "getAllContentBlocks"
                            }, (() => {
                                (0, d.iy)({
                                    selectedTemplate: "jd-services",
                                    subSliderType: "sortAmenitiesServicesSlider",
                                    sliderType: "sortAmenitiesServicesSlider"
                                }), e(), E(!1)
                            }))
                        },
                        contentBlockId: l.contentBlockId,
                        closeSlider: () => {
                            window.updateCMSBlocks && window.updateCMSBlocks({
                                type: "getAllContentBlocks"
                            }, (() => {
                                E(!1)
                            }))
                        }
                    }))
                }
        },
        52290: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => d
            });
            var n = a(67294),
                s = a(46066),
                o = a(81488),
                l = a(81809),
                r = a(2979),
                i = a(3965);

            function c() {
                return (c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            class d extends n.Component {
                render() {
                    const e = this.props,
                        t = e.data.data.length;
                    let a, d = !1,
                        m = !1;
                    e.parentProps.isCmsAndEditMode || (d = !0, a = 3e3, m = !0);
                    const p = {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: t > 1,
                            arrows: !1,
                            autoplay: d,
                            autoplaySpeed: a,
                            infinite: !0,
                            cssEase: "linear",
                            pauseOnFocus: !1,
                            useTransform: m,
                            beforeChange: (e, t) => {}
                        },
                        u = e.data.data.map(((t, a) => {
                            const s = {
                                    holderClass: "content para-1 align-center",
                                    class: e.data.style.comment.class,
                                    style: e.data.style.comment.style,
                                    text: t.comment.text,
                                    parentProps: e.parentProps,
                                    cmsKey: "data.data." + a + ".comment",
                                    styleKey: "data.style.comment",
                                    disableEditing: !0,
                                    animationObj: t.comment.animationObj || {}
                                },
                                r = {
                                    holderClass: "content para-2",
                                    class: e.data.style.title1.class,
                                    style: e.data.style.title1.style,
                                    text: t.title1.text,
                                    parentProps: e.parentProps,
                                    cmsKey: "data.data." + a + ".title1",
                                    styleKey: "data.style.title1",
                                    disableEditing: !0,
                                    animationObj: t.title1.animationObj || {}
                                },
                                i = {
                                    holderClass: "content para-3",
                                    class: e.data.style.title2.class,
                                    style: e.data.style.title2.style,
                                    text: t.title2.text,
                                    parentProps: e.parentProps,
                                    cmsKey: "data.data." + a + ".title2",
                                    styleKey: "data.style.title2",
                                    disableEditing: !0,
                                    animationObj: t.title2.animationObj || {}
                                };
                            let d = {};
                            if (t.image && "customTestimonial" == e.parentProps.template) {
                                let n = e.data.style.image.class;
                                !e.parentProps.isCmsAndEditMode && t.image.imgSrc && -1 != t.image.imgSrc.indexOf("jdomni_email/vbv.png") && (n += " hide"), d = {
                                    holderClass: "user-image-holder dynamic-block-image",
                                    class: n,
                                    imgSrc: t.image.imgSrc,
                                    parentProps: e.parentProps,
                                    style: e.data.style.image.style,
                                    cmsKey: "data.data." + a + ".image",
                                    styleKey: "data.style.image"
                                }
                            }
                            let m = null;
                            return m = t.image && "customTestimonial" == e.parentProps.template ? n.createElement("div", {
                                class: "profile-holder"
                            }, n.createElement(l.Z, c({}, d, {
                                blockType: "testimonial"
                            })), n.createElement("div", {
                                class: "profile-data-holder"
                            }, t.title1.text ? n.createElement(o.Z, c({}, r, {
                                blockType: "testimonial"
                            })) : null, t.title2.text ? n.createElement(o.Z, c({}, i, {
                                blockType: "testimonial"
                            })) : null)) : n.createElement("div", {
                                className: "without-image-profile ".concat(t.title2.text ? "" : "no-user-title")
                            }, t.title1.text ? n.createElement(o.Z, c({}, r, {
                                blockType: "testimonial"
                            })) : null, "topQuoteTestimonial" == e.parentProps.template && t.title2.text ? n.createElement("span", {
                                className: "comma-holder"
                            }, ",  ") : null, t.title2.text ? n.createElement(o.Z, c({}, i, {
                                blockType: "testimonial"
                            })) : null), n.createElement("div", {
                                className: "content-wrapper"
                            }, e.data.commonData && e.data.commonData.quoteImageLeft ? n.createElement(l.Z, c({}, e.data.commonData.quoteImageLeft, {
                                parentProps: e.parentProps,
                                blockType: "",
                                cmsKey: "data.commonData.quoteImageLeft"
                            })) : null, t.comment.text ? n.createElement(o.Z, c({}, s, {
                                blockType: "testimonial"
                            })) : null, e.data.commonData && e.data.commonData.quoteImageRight ? n.createElement(l.Z, c({}, e.data.commonData.quoteImageRight, {
                                parentProps: e.parentProps,
                                cmsKey: "data.commonData.quoteImageRight",
                                blockType: ""
                            })) : null, m)
                        }));
                    return u.length ? n.createElement(s.Z, c({}, p, {
                        className: "slider-content",
                        ref: e => this.slider = e
                    }), u) : e.parentProps.isCmsAndEditMode && n.createElement(r.Z, {
                        buttonText: "Add New Testimonial",
                        holderClass: "no-testimonial",
                        buttonIcon: "icon-testimonial",
                        parentProps: e.parentProps,
                        onAddBtnClick: t => {
                            t && t.stopPropagation(), (0, i.H)({
                                subSliderType: "addTestimonialSlider",
                                testimonialData: e.data.data
                            })
                        }
                    })
                }
            }
        },
        7858: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => m
            });
            var n = a(67294),
                s = a(46066),
                o = a(81488),
                l = a(46034),
                r = a(81809),
                i = a(2979),
                c = a(3965);

            function d() {
                return (d = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            class m extends n.Component {
                render() {
                    const e = this.props,
                        t = e.data.data.length;
                    let a = "",
                        m = !1;
                    for (var p = 0; p < e.data.data.length; p++)
                        if (e.data.data[p].image.imgSrc && -1 == e.data.data[p].image.imgSrc.indexOf("jdomni.in/jdomni_email/vbv.png")) {
                            m = !0;
                            break
                        }
                    a = m || e.parentProps.isCmsAndEditMode ? "" : " hide";
                    const u = e.data.data.map(((t, s) => {
                        const l = {
                                holderClass: "content para-1 align-center",
                                class: e.data.style.comment.class,
                                style: e.data.style.comment.style,
                                text: t.comment.text,
                                parentProps: e.parentProps,
                                cmsKey: "data.data." + s + ".comment",
                                styleKey: "data.style.comment"
                            },
                            i = {
                                holderClass: "content para-2",
                                class: e.data.style.title1.class,
                                style: e.data.style.title1.style,
                                text: t.title1.text,
                                parentProps: e.parentProps,
                                cmsKey: "data.data." + s + ".title1",
                                styleKey: "data.style.title1"
                            },
                            c = {
                                holderClass: "content para-3",
                                class: e.data.style.title2.class,
                                style: e.data.style.title2.style,
                                text: t.title2.text,
                                parentProps: e.parentProps,
                                cmsKey: "data.data." + s + ".title2",
                                styleKey: "data.style.title2"
                            },
                            m = {
                                holderClass: "user-image-holder dynamic-block-image",
                                class: e.data.style.image.class + a,
                                imgSrc: t.image.imgSrc,
                                parentProps: e.parentProps,
                                style: e.data.style.image.style,
                                cmsKey: "data.data." + s + ".image",
                                styleKey: "data.style.image"
                            };
                        return n.createElement("div", {
                            key: s,
                            className: "col-md-4 col-xs-12 single-container"
                        }, n.createElement(r.Z, d({}, m, {
                            blockType: "testimonial"
                        })), t.title1.text ? n.createElement("div", {
                            className: "col-md-12 marginT10 clearfix"
                        }, n.createElement(o.Z, d({}, i, {
                            blockType: "testimonial"
                        }))) : null, t.title2.text ? n.createElement("div", {
                            className: "col-md-12 clearfix"
                        }, n.createElement(o.Z, d({}, c, {
                            blockType: "testimonial"
                        }))) : null, t.comment.text ? n.createElement("div", {
                            className: "col-md-12 clearfix marginT10"
                        }, n.createElement(o.Z, d({}, l, {
                            blockType: "testimonial"
                        }))) : null)
                    }));
                    let y, h = !1,
                        g = !1;
                    const b = e.parentProps.isMobile;
                    e.parentProps.isCmsAndEditMode || (h = !0, y = 3e3, g = !0);
                    const v = b ? 1 : 3,
                        E = {
                            slidesToShow: v,
                            slidesToScroll: v,
                            centerMode: !0,
                            centerPadding: b ? "0" : "15px 0px",
                            dots: b,
                            arrows: !b && t > 1,
                            autoplay: h,
                            autoplaySpeed: y,
                            infinite: u.length >= v,
                            pauseOnFocus: !1,
                            prevArrow: n.createElement(l.Z, {
                                arrowType: "prev",
                                onClick: () => this.slider.slickPrev(),
                                isCmsAndEditMode: e.parentProps.isCmsAndEditMode
                            }),
                            nextArrow: n.createElement(l.Z, {
                                arrowType: "next",
                                onClick: () => this.slider.slickNext(),
                                isCmsAndEditMode: e.parentProps.isCmsAndEditMode
                            }),
                            useTransform: g,
                            beforeChange: (e, t) => {}
                        };
                    return u.length ? n.createElement(s.Z, d({}, E, {
                        ref: e => this.slider = e,
                        className: "three-testimonial-slider"
                    }), u) : e.parentProps.isCmsAndEditMode && n.createElement(i.Z, {
                        buttonText: "Add New Testimonial",
                        buttonIcon: "icon-testimonial",
                        holderClass: "no-testimonial",
                        parentProps: e.parentProps,
                        onAddBtnClick: t => {
                            t && t.stopPropagation(), (0, c.H)({
                                subSliderType: "addTestimonialSlider",
                                testimonialData: e.data.data
                            })
                        }
                    })
                }
            }
        },
        68778: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => m
            });
            var n = a(67294),
                s = a(46066),
                o = a(81488),
                l = a(46034),
                r = a(81809),
                i = a(2979),
                c = a(3965);

            function d() {
                return (d = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            class m extends n.Component {
                render() {
                    const e = this.props,
                        t = e.data.data.length;
                    let a, m = !1,
                        p = !1;
                    e.parentProps.isCmsAndEditMode || (m = !0, a = 3e3, p = !0);
                    const u = [];
                    e.data.data.forEach(((t, a) => {
                        const s = {
                                holderClass: "content para-1",
                                class: e.data.style.comment.class,
                                style: e.data.style.comment.style,
                                text: t.comment.text,
                                parentProps: e.parentProps,
                                cmsKey: "data.data." + a + ".comment",
                                styleKey: "data.style.comment"
                            },
                            l = {
                                holderClass: "content para-2",
                                class: e.data.style.title1.class,
                                style: e.data.style.title1.style,
                                text: t.title1.text,
                                parentProps: e.parentProps,
                                cmsKey: "data.data." + a + ".title1",
                                styleKey: "data.style.title1"
                            };
                        let i = a % 2 + 1,
                            c = e.data.commonData["quoteImage" + i].imgSrc,
                            m = e.data.commonData["quoteImage" + i].style || {
                                width: "31px",
                                height: "24px"
                            };
                        const p = !c || -1 != c.indexOf(this.emptyImagesString),
                            y = {
                                class: "not-editable quote-image quote-image-".concat(i, " ").concat(p ? "no-image" : ""),
                                cmsKey: "data.commonData.quoteImage" + i,
                                parentProps: e.parentProps,
                                style: m
                            };
                        u.push(n.createElement("div", {
                            className: "col-md-6 col-xs-12 data-container",
                            key: a
                        }, n.createElement(r.Z, d({
                            holderClass: "col-xs-2",
                            imgSrc: c,
                            blockType: ""
                        }, y)), n.createElement("div", {
                            className: "col-xs-9 padding-0"
                        }, t.title1.text ? n.createElement(o.Z, d({}, l, {
                            blockType: "testimonial"
                        })) : null, t.comment.text ? n.createElement(o.Z, d({}, s, {
                            blockType: "testimonial"
                        })) : null)))
                    }));
                    const y = e.parentProps.isMobile,
                        h = y ? 1 : 2,
                        g = {
                            slidesToShow: h,
                            slidesToScroll: h,
                            dots: y,
                            arrows: !y && t > 1,
                            autoplay: m,
                            autoplaySpeed: a,
                            infinite: u.length >= h,
                            pauseOnFocus: !1,
                            prevArrow: n.createElement(l.Z, {
                                arrowType: "prev",
                                isCmsAndEditMode: e.parentProps.isCmsAndEditMode
                            }),
                            nextArrow: n.createElement(l.Z, {
                                arrowType: "next",
                                isCmsAndEditMode: e.parentProps.isCmsAndEditMode
                            }),
                            useTransform: p,
                            beforeChange: (e, t) => {}
                        };
                    return u.length ? n.createElement(s.Z, d({}, g, {
                        className: "two-testimonial-slider col-md-8 col-xs-12",
                        ref: e => this.slider = e
                    }), u) : e.parentProps.isCmsAndEditMode && n.createElement(i.Z, {
                        buttonText: "Add New Testimonial",
                        buttonIcon: "icon-testimonial",
                        holderClass: "no-testimonial",
                        hidePopoverOnClick: !0,
                        parentProps: e.parentProps,
                        onAddBtnClick: t => {
                            t && t.stopPropagation(), (0, c.H)({
                                subSliderType: "addTestimonialSlider",
                                testimonialData: e.data.data
                            })
                        }
                    })
                }
            }
        },
        73160: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => i
            });
            var n = a(67294),
                s = a(96255),
                o = a(99550),
                l = a(78048),
                r = a(2979);
            const i = (0, o.Z)((e => {
                const t = e.style || {};
                if (!e.src) return n.createElement("div", {
                    className: "editable-video-holder no-video ".concat(e.extraClass || "")
                }, n.createElement(r.Z, {
                    buttonText: "Add New Video",
                    buttonIcon: "icon-videoNew",
                    onAddBtnClick: t => {
                        e.onClick(t, {
                            blockType: "addVideo"
                        })
                    },
                    holderClass: "no-video-div"
                }));
                let a = "";
                !e.videoUploaded && e.videoType && "youtube" != e.videoType && (a = " video-".concat(e.videoType));
                let o = e.parentProps.contentBlockId + "" + e.cmsKey.replace(/[^\d]/gi, "");
                const i = n.createElement(n.Fragment, null, n.createElement("div", {
                    className: "video-player-holder",
                    "data-src": e.src,
                    "data-youtubeurl": e.youtubeUrl,
                    "data-poster": e.poster,
                    "data-video-uploaded": e.videoUploaded,
                    "data-video-type": e.videoType,
                    onClick: e => e.stopPropagation()
                }), e.parentProps.isCmsAndEditMode ? n.createElement(l.Z, {
                    onClick: t => e.onClick(t, {
                        blockType: e.blockType
                    }),
                    type: "video"
                }) : null);
                let c = (e.class || "") + a + " editable-video-holder " + (e.isUnderEdit ? "under-edit" : "");
                return n.createElement(s.Z, {
                    blockId: o,
                    isMobile: e.parentProps.isMobile,
                    videoAutoPlay: e.parentProps.videoAutoPlay,
                    query: e.parentProps.query,
                    className: c,
                    style: t,
                    src: e.src,
                    isUnderEdit: e.isUnderEdit
                }, i)
            }), "video")
        },
        80138: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => o
            }), a(91181);
            var n = a(67294);

            function s() {
                return (s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const o = ({
                type: e,
                onClick: t,
                view: a = "horizontal",
                template: o,
                nameStyle: l = {},
                showIcon: r = !0,
                blockBgColor: i,
                contentId: c,
                blockStyle: d = {},
                isMobile: m
            }) => {
                const [p, u] = (0, n.useState)(!1);
                if ("" == o && "less" == e) return null;
                let y = {
                    icon: "vertical" == a ? "icon-moreThin" : "icon-down-arrow-circle",
                    text: "View More",
                    textClass: ""
                };
                "less" == e && (y = {
                    icon: "vertical" == a ? "icon-upThinNew" : "icon-down-arrow-circle",
                    text: "View Less"
                });
                let h = {},
                    g = {},
                    b = "",
                    v = {};
                const {
                    style: E,
                    class: f
                } = l;
                "basic-feat-prod" == o ? (h = {
                    color: E.color
                }, g = p ? {
                    color: d.backgroundColor || "rgb(255, 255, 255)",
                    backgroundColor: l.style.color || "#333"
                } : {
                    color: l.style.color || "#333",
                    backgroundColor: d.backgroundColor || "rgb(255, 255, 255)"
                }) : ["featuredCatAmz", "withDesc"].includes(o) && (g = {
                    color: E.color
                }, y.textClass = f + " editable-content", b = "editable-content-holder", v = {
                    color: E.color
                });
                const k = {},
                    w = {};
                return m ? k.onClick = e => {
                    e.stopPropagation(), t && t(e)
                } : w.onClick = e => {
                    e.stopPropagation(), t && t(e)
                }, n.createElement("div", s({
                    className: "toggle-div view-".concat(e, " ").concat(a, "-view ").concat(b)
                }, k, {
                    style: l.style || h,
                    id: "CB".concat(c)
                }, w), n.createElement("div", s({
                    style: g
                }, w, {
                    className: "less-more-text ".concat(y.textClass),
                    onMouseOver: () => u(!0),
                    onMouseOut: () => u(!1)
                }), y.text), r && n.createElement("i", {
                    className: "".concat(y.icon, " toggle-icon"),
                    style: v
                }))
            }
        },
        19095: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => s
            }), a(91181);
            var n = a(67294);
            const s = () => {
                const [e, t] = (0, n.useState)({
                    value: "",
                    error: ""
                }), [a, s] = (0, n.useState)({
                    value: "",
                    error: ""
                }), [o, l] = (0, n.useState)({
                    value: "",
                    error: ""
                }), [r, i] = (0, n.useState)({
                    value: "",
                    error: ""
                }), c = /^[a-zA-Z0-9][a-zA-Z0-9_\-\+]*(?:[\.][a-zA-Z0-9_\-\+]+)*\@(?:[a-zA-Z0-9_\-\+]+\.)+[a-zA-Z0-9_\-\+]*[a-zA-Z0-9]$/;
                return {
                    name: { ...e,
                        onChange: e => {
                            t({
                                value: e.target.value,
                                error: ""
                            })
                        }
                    },
                    emailId: { ...a,
                        onChange: e => {
                            s({
                                value: e.target.value,
                                error: ""
                            })
                        }
                    },
                    mobileNo: { ...o,
                        onChange: e => {
                            const t = e.target.value;
                            (0 == t.length || t.match(/^[6789]\d{0,9}$/)) && l({
                                value: t,
                                error: ""
                            })
                        }
                    },
                    message: { ...r,
                        onChange: e => {
                            i({
                                value: e.target.value,
                                error: ""
                            })
                        }
                    },
                    handleSubmit: n => {
                        if (n.preventDefault(), (() => {
                                let n = !1;
                                if (e.value ? t({
                                        value: e.value,
                                        error: ""
                                    }) : (t({
                                        value: e.value,
                                        error: "Please Enter Name"
                                    }), n = !0), 10 != o.value.length) {
                                    const e = o ? "Please Enter Valid Mobile Number" : "Please Enter Mobile Number";
                                    l({
                                        value: o.value,
                                        error: e
                                    }), n = !0
                                } else l({
                                    value: o.value,
                                    error: ""
                                });
                                return a.value && !c.test(a.value) ? (s({
                                    value: a.value,
                                    error: "Please Enter Valid Email ID"
                                }), n = !0) : s({
                                    value: a.value,
                                    error: ""
                                }), r.value ? i({
                                    value: r.value,
                                    error: ""
                                }) : (i({
                                    value: r.value,
                                    error: "Please Enter Message"
                                }), n = !0), n
                            })()) return !0
                    },
                    resetForm: () => {
                        t({
                            value: "",
                            error: ""
                        }), s({
                            value: "",
                            error: ""
                        }), l({
                            value: "",
                            error: ""
                        }), i({
                            value: "",
                            error: ""
                        })
                    }
                }
            }
        },
        94184: (e, t) => {
            var a;
            ! function() {
                "use strict";
                var n = {}.hasOwnProperty;

                function s() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var a = arguments[t];
                        if (a) {
                            var o = typeof a;
                            if ("string" === o || "number" === o) e.push(a);
                            else if (Array.isArray(a)) {
                                if (a.length) {
                                    var l = s.apply(null, a);
                                    l && e.push(l)
                                }
                            } else if ("object" === o)
                                if (a.toString === Object.prototype.toString)
                                    for (var r in a) n.call(a, r) && a[r] && e.push(r);
                                else e.push(a.toString())
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (s.default = s, e.exports = s) : void 0 === (a = function() {
                    return s
                }.apply(t, [])) || (e.exports = a)
            }()
        }
    }
]);