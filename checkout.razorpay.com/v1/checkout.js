var Razorpay = function() {
    var e = function(e, n) {
            var t = {
                tags: n
            };
            switch (!0) {
                case !e:
                    t.message = "NA";
                    break;
                case "string" == typeof e:
                    t.message = e;
                    break;
                case "object" == typeof e:
                    var r = e.name,
                        a = e.message,
                        i = e.stack,
                        o = e.fileName,
                        u = e.lineNumber,
                        c = e.columnNumber;
                    t = window.Object.assign(JSON.parse(JSON.stringify(e)), {
                        name: r,
                        message: a,
                        stack: i,
                        fileName: o,
                        lineNumber: u,
                        columnNumber: c,
                        tags: n
                    });
                    break;
                default:
                    t.message = JSON.stringify(e)
            }
            return t
        },
        n = "S0",
        t = "S1",
        r = !1;

    function a(e, n) {
        return [{
            name: "checkout.sessionErrored.metrics",
            labels: [{
                type: e,
                severity: n
            }]
        }]
    }
    var i = function(i, o) {
            var u, l, d, m, f = o.analytics,
                p = o.severity,
                h = void 0 === p ? t : p,
                v = o.unhandled,
                _ = void 0 !== v && v;
            try {
                var y = f || {},
                    g = y.event,
                    b = y.data,
                    w = y.immediately,
                    k = void 0 === w || w,
                    E = "string" == typeof g ? g : "js_error";
                try {
                    if ((h === n || h === t) && !r) {
                        var S = {
                            metrics: a("session_errored", h)
                        };
                        s({
                            url: "https://lumberjack-metrics.razorpay.com/v1/frontend-metrics",
                            data: {
                                key: "ZmY5N2M0YzVkN2JiYzkyMWM1ZmVmYWJk",
                                data: window.encodeURIComponent(window.btoa(window.unescape(window.encodeURIComponent(JSON.stringify(S)))))
                            }
                        });
                        var A = JSON.stringify({
                            data: {
                                data: {
                                    sessionErrored: !0
                                }
                            },
                            topic: "syncAvailability",
                            source: "__razorpay",
                            time: window.Date.now()
                        });
                        window.postMessage(A, "*"), r = !0
                    }
                } catch (e) {}
                u = E, l = {
                    data: window.Object.assign({}, "object" == typeof b ? b : {}, {
                        error: e(i, {
                            severity: h,
                            unhandled: _
                        })
                    }),
                    immediately: window.Boolean(k),
                    isError: !0
                }, d = (void 0 === l ? {} : l).data, m = {
                    event: u,
                    properties: {
                        data: void 0 === d ? {} : d,
                        build_number: 3288045102
                    },
                    timestamp: window.Date.now()
                }, c.push(m)
            } catch (e) {}
        },
        o = ["https://checkout.razorpay.com", "https://checkout-static.razorpay.com"];

    function u(e) {
        var n, t = e.error;
        if (t && (e.filename || t.stack) && (n = e.filename || e.error.stack, o.some((function(e) {
                return -1 !== n.indexOf(e)
            })))) {
            var r = {
                message: t.message,
                lineNumber: e.lineno,
                fileName: e.filename,
                columnNumber: e.colno,
                stack: t.stack
            };
            i(t, {
                unhandled: !0,
                analytics: {
                    event: "js_error",
                    data: r
                }
            })
        }
    }
    var c = [];

    function s(e) {
        try {
            var n = "sendBeacon" in window.navigator,
                t = !1;
            n && (t = window.navigator.sendBeacon(e.url, JSON.stringify(e.data))), t || fetch(e.url, {
                method: "POST",
                body: JSON.stringify(e.data)
            })
        } catch (e) {}
    }
    window.setInterval((function() {
        ! function() {
            if (c.length) {
                var e = {
                    context: {
                        platform: window.CheckoutBridge ? "mobile_sdk" : "browser"
                    },
                    addons: [{
                        name: "ua_parser",
                        input_key: "user_agent",
                        output_key: "user_agent_parsed"
                    }],
                    events: c.splice(0, 5)
                };
                s({
                    url: "https://lumberjack.razorpay.com/v1/track",
                    data: {
                        key: "ZmY5N2M0YzVkN2JiYzkyMWM1ZmVmYWJk",
                        data: window.encodeURIComponent(window.btoa(window.unescape(window.encodeURIComponent(JSON.stringify(e)))))
                    }
                })
            }
        }()
    }), 1e3);
    try {
        -1 === "production".indexOf("TRAFFIC_ENV") && (window.addEventListener("message", (function(e) {
            var n = {};
            try {
                n = JSON.parse(e.data)
            } catch (e) {}
            try {
                var t = (n || {}).topic;
                t && "clearMountErrorListener" === t && window.removeEventListener("error", u, {
                    capture: !0
                })
            } catch (e) {}
        })), window.addEventListener("error", u, {
            capture: !0
        }))
    } catch (e) {}
    var l = window,
        d = l.document,
        m = l.Boolean,
        f = l.Array,
        p = l.Object,
        h = l.String,
        v = l.Number,
        _ = l.Date,
        y = l.Math,
        g = l.setTimeout,
        b = l.setInterval,
        w = l.clearTimeout,
        k = l.clearInterval,
        E = l.parseInt,
        S = l.encodeURIComponent,
        A = l.decodeURIComponent,
        C = l.btoa,
        R = l.unescape,
        x = l.TypeError,
        I = l.navigator,
        D = l.location,
        P = l.XMLHttpRequest,
        N = l.NodeList,
        T = l.FormData;

    function M(e) {
        var n = this.constructor;
        return this.then((function(t) {
            return n.resolve(e()).then((function() {
                return t
            }))
        }), (function(t) {
            return n.resolve(e()).then((function() {
                return n.reject(t)
            }))
        }))
    }

    function L(e) {
        return new this((function(n, t) {
            if (!e || void 0 === e.length) return t(new x(typeof e + " " + e + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
            var r = f.prototype.slice.call(e);
            if (0 === r.length) return n([]);
            var a = r.length;

            function i(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) {
                    var o = t.then;
                    if ("function" == typeof o) return void o.call(t, (function(n) {
                        i(e, n)
                    }), (function(t) {
                        r[e] = {
                            status: "rejected",
                            reason: t
                        }, 0 == --a && n(r)
                    }))
                }
                r[e] = {
                    status: "fulfilled",
                    value: t
                }, 0 == --a && n(r)
            }
            for (var o = 0; o < r.length; o++) i(o, r[o])
        }))
    }
    var O = g;

    function B(e) {
        return m(e && void 0 !== e.length)
    }

    function F() {}

    function z(e) {
        if (!(this instanceof z)) throw new x("Promises must be constructed via new");
        if ("function" != typeof e) throw new x("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], G(e, this)
    }

    function K(e, n) {
        for (; 3 === e._state;) e = e._value;
        0 !== e._state ? (e._handled = !0, z._immediateFn((function() {
            var t = 1 === e._state ? n.onFulfilled : n.onRejected;
            if (null !== t) {
                var r;
                try {
                    r = t(e._value)
                } catch (e) {
                    return void $(n.promise, e)
                }
                U(n.promise, r)
            } else(1 === e._state ? U : $)(n.promise, e._value)
        }))) : e._deferreds.push(n)
    }

    function U(e, n) {
        try {
            if (n === e) throw new x("A promise cannot be resolved with itself.");
            if (n && ("object" == typeof n || "function" == typeof n)) {
                var t = n.then;
                if (n instanceof z) return e._state = 3, e._value = n, void j(e);
                if ("function" == typeof t) return void G((r = t, a = n, function() {
                    r.apply(a, arguments)
                }), e)
            }
            e._state = 1, e._value = n, j(e)
        } catch (n) {
            $(e, n)
        }
        var r, a
    }

    function $(e, n) {
        e._state = 2, e._value = n, j(e)
    }

    function j(e) {
        2 === e._state && 0 === e._deferreds.length && z._immediateFn((function() {
            e._handled || z._unhandledRejectionFn(e._value)
        }));
        for (var n = 0, t = e._deferreds.length; n < t; n++) K(e, e._deferreds[n]);
        e._deferreds = null
    }

    function H(e, n, t) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof n ? n : null, this.promise = t
    }

    function G(e, n) {
        var t = !1;
        try {
            e((function(e) {
                t || (t = !0, U(n, e))
            }), (function(e) {
                t || (t = !0, $(n, e))
            }))
        } catch (e) {
            if (t) return;
            t = !0, $(n, e)
        }
    }
    z.prototype.catch = function(e) {
        return this.then(null, e)
    }, z.prototype.then = function(e, n) {
        var t = new this.constructor(F);
        return K(this, new H(e, n, t)), t
    }, z.prototype.finally = M, z.all = function(e) {
        return new z((function(n, t) {
            if (!B(e)) return t(new x("Promise.all accepts an array"));
            var r = f.prototype.slice.call(e);
            if (0 === r.length) return n([]);
            var a = r.length;

            function i(e, o) {
                try {
                    if (o && ("object" == typeof o || "function" == typeof o)) {
                        var u = o.then;
                        if ("function" == typeof u) return void u.call(o, (function(n) {
                            i(e, n)
                        }), t)
                    }
                    r[e] = o, 0 == --a && n(r)
                } catch (e) {
                    t(e)
                }
            }
            for (var o = 0; o < r.length; o++) i(o, r[o])
        }))
    }, z.allSettled = L, z.resolve = function(e) {
        return e && "object" == typeof e && e.constructor === z ? e : new z((function(n) {
            n(e)
        }))
    }, z.reject = function(e) {
        return new z((function(n, t) {
            t(e)
        }))
    }, z.race = function(e) {
        return new z((function(n, t) {
            if (!B(e)) return t(new x("Promise.race accepts an array"));
            for (var r = 0, a = e.length; r < a; r++) z.resolve(e[r]).then(n, t)
        }))
    }, z._immediateFn = "function" == typeof setImmediate && function(e) {
        setImmediate(e)
    } || function(e) {
        O(e, 0)
    }, z._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console
    };
    var Y = function() {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if (void 0 !== l) return l;
        throw new Error("unable to locate global object")
    }();
    "function" != typeof Y.Promise ? Y.Promise = z : (Y.Promise.prototype.finally || (Y.Promise.prototype.finally = M), Y.Promise.allSettled || (Y.Promise.allSettled = L)), p.entries || (p.entries = function(e) {
        for (var n = p.keys(e), t = n.length, r = new f(t); t--;) r[t] = [n[t], e[n[t]]];
        return r
    }), p.values || (p.values = function(e) {
        for (var n = p.keys(e), t = n.length, r = new f(t); t--;) r[t] = e[n[t]];
        return r
    }), "function" != typeof p.assign && p.defineProperty(p, "assign", {
        value: function(e) {
            if (null == e) throw new x("Cannot convert undefined or null to object");
            for (var n = p(e), t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                if (null != r)
                    for (var a in r) p.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a])
            }
            return n
        },
        writable: !0,
        configurable: !0
    }), window.NodeList && !N.prototype.forEach && (N.prototype.forEach = f.prototype.forEach), f.prototype.find || (f.prototype.find = function(e) {
        if ("function" != typeof e) throw new x("callback must be a function");
        for (var n = arguments[1] || this, t = 0; t < this.length; t++)
            if (e.call(n, this[t], t, this)) return this[t]
    }), f.prototype.includes || (f.prototype.includes = function() {
        return -1 !== f.prototype.indexOf.apply(this, arguments)
    }), f.prototype.flatMap || (f.prototype.flatMap = function(e, n) {
        for (var t = n || this, r = [], a = p(t), i = a.length >>> 0, o = 0; o < i; ++o)
            if (o in a) {
                var u = e.call(t, a[o], o, a);
                r = r.concat(u)
            }
        return r
    }), f.prototype.findIndex || (f.prototype.findIndex = function(e) {
        if ("function" != typeof e) throw new x("callback must be a function");
        for (var n = arguments[1] || this, t = 0; t < this.length; t++)
            if (e.call(n, this[t], t, this)) return t;
        return -1
    }), h.prototype.endsWith || (h.prototype.endsWith = function(e, n) {
        return n < this.length ? n |= 0 : n = this.length, this.substr(n - e.length, e.length) === e
    });
    var V, Z, W, q, J, Q = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function X() {
        return X = p.assign || function(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var r in t) p.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }
            return e
        }, X.apply(this, arguments)
    }
    h.prototype.includes || (h.prototype.includes = function() {
        return -1 !== h.prototype.indexOf.apply(this, arguments)
    }), h.prototype.startsWith || (h.prototype.startsWith = function() {
        return 0 === h.prototype.indexOf.apply(this, arguments)
    }), f.from || (f.from = (V = p.prototype.toString, Z = function(e) {
        return "function" == typeof e || "[object Function]" === V.call(e)
    }, W = y.pow(2, 53) - 1, q = function(e) {
        var n = function(e) {
            var n = v(e);
            return isNaN(n) ? 0 : 0 !== n && isFinite(n) ? (n > 0 ? 1 : -1) * y.floor(y.abs(n)) : n
        }(e);
        return y.min(y.max(n, 0), W)
    }, J = function(e) {
        var n = [];
        return e.forEach((function(e) {
            return n.push(e)
        })), n
    }, function(e) {
        if (e instanceof Set) return J(e);
        var n = this,
            t = p(e);
        if (null == e) throw new x("Array.from requires an array-like object - not null or undefined");
        var r, a = arguments.length > 1 ? arguments[1] : void 0;
        if (void 0 !== a) {
            if (!Z(a)) throw new x("Array.from: when provided, the second argument must be a function");
            arguments.length > 2 && (r = arguments[2])
        }
        for (var i, o = q(t.length), u = Z(n) ? p(new n(o)) : new f(o), c = 0; c < o;) i = t[c], u[c] = a ? void 0 === r ? a(i, c) : a.call(r, i, c) : i, c += 1;
        return u.length = o, u
    })), f.prototype.fill || p.defineProperty(f.prototype, "fill", {
        value: function(e) {
            if (null == this) throw new x("this is null or not defined");
            for (var n = p(this), t = n.length >>> 0, r = arguments[1], a = r >> 0, i = a < 0 ? y.max(t + a, 0) : y.min(a, t), o = arguments[2], u = void 0 === o ? t : o >> 0, c = u < 0 ? y.max(t + u, 0) : y.min(u, t); i < c;) n[i] = e, i++;
            return n
        }
    }), "function" != typeof p.assign && p.defineProperty(p, "assign", {
        value: function(e) {
            if (null == e) throw new x("Cannot convert undefined or null to object");
            for (var n = p(e), t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                if (null != r)
                    for (var a in r) p.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a])
            }
            return n
        },
        writable: !0,
        configurable: !0
    }), Q.alert.name || p.defineProperty(Function.prototype, "name", {
        get: function() {
            var e = (this.toString().replace(/\n/g, "").match(/^function\s*([^\s(]+)/) || [])[1];
            return p.defineProperty(this, "name", {
                value: e
            }), e
        },
        configurable: !0
    }), f.prototype.filter || (f.prototype.filter = function(e) {
        for (var n = [], t = this.length, r = 0; r < t; r++) e(this[r], r, this) && n.push(this[r]);
        return n
    });
    var ee = "behav",
        ne = "render",
        te = "metric",
        re = "integration",
        ae = "error",
        ie = Object.freeze({
            __proto__: null,
            BEHAV: ee,
            RENDER: ne,
            METRIC: te,
            DEBUG: "debug",
            INTEGRATION: re,
            API: "api",
            ERROR: ae
        }),
        oe = function() {
            return oe = p.assign || function(e) {
                for (var n, t = 1, r = arguments.length; t < r; t++)
                    for (var a in n = arguments[t]) p.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                return e
            }, oe.apply(this, arguments)
        };

    function ue(e, n, t) {
        if (t || 2 === arguments.length)
            for (var r, a = 0, i = n.length; a < i; a++) !r && a in n || (r || (r = f.prototype.slice.call(n, 0, a)), r[a] = n[a]);
        return e.concat(r || f.prototype.slice.call(n))
    }
    var ce = {
        _storage: {},
        setItem: function(e, n) {
            this._storage[e] = n
        },
        getItem: function(e) {
            return this._storage[e] || null
        },
        removeItem: function(e) {
            delete this._storage[e]
        }
    };
    var se = function() {
            var e = _.now();
            try {
                l.localStorage.setItem("_storage", e);
                var n = l.localStorage.getItem("_storage");
                return l.localStorage.removeItem("_storage"), e !== E(h(n)) ? ce : l.localStorage
            } catch (e) {
                return ce
            }
        }(),
        le = "rzp_checkout_exp",
        de = function() {
            function e(n) {
                void 0 === n && (n = {});
                var t = this;
                this.getExperiment = function(e) {
                    return e ? t.experiments[e] : null
                }, this.getAllActiveExperimentsName = function() {
                    return p.keys(t.experiments)
                }, this.getRegisteredExperiments = function() {
                    return t.experiments
                }, this.clearOldExperiments = function() {
                    var n = e.getExperimentsFromStorage(),
                        r = t.getAllActiveExperimentsName().reduce((function(e, t) {
                            return void 0 !== n[t] && (e[t] = n[t]), e
                        }), {});
                    e.setExperimentsInStorage(r)
                }, this.create = function(e, n, r) {
                    var a;
                    void 0 === r && (r = {});
                    var i = r.evaluatorArg,
                        o = r.overrideFn;
                    var u = n;
                    if ("number" == typeof n && (u = function() {
                            return y.random() < n ? 0 : 1
                        }), "function" != typeof u) throw new Error("evaluatorFn must be a function or number");
                    var c = {
                        name: e,
                        enabled: function() {
                            return 1 === this.getSegmentOrCreate(e, i, o)
                        }.bind(t),
                        evaluator: u
                    };
                    return "number" == typeof n && (c.rolloutValue = n), t.register(((a = {})[e] = c, a)), c
                }, this.experiments = n
            }
            return e.setExperimentsInStorage = function(e) {
                if (e && "object" == typeof e) try {
                    se.setItem(le, JSON.stringify(e))
                } catch (e) {
                    return
                }
            }, e.getExperimentsFromStorage = function() {
                var e;
                try {
                    e = JSON.parse(se.getItem(le))
                } catch (e) {}
                return e && "object" == typeof e && !f.isArray(e) ? e : {}
            }, e.prototype.setSegment = function(n, t, r) {
                var a = this.getExperiment(n);
                if (a) {
                    var i = ("function" == typeof r ? r : a.evaluator)(t),
                        o = e.getExperimentsFromStorage();
                    return o[a.name] = i, e.setExperimentsInStorage(o), i
                }
            }, e.prototype.getSegment = function(n) {
                return e.getExperimentsFromStorage()[n]
            }, e.prototype.getSegmentOrCreate = function(e, n, t) {
                var r = this.getSegment(e);
                return "function" == typeof t ? t(n) : void 0 === r ? this.setSegment(e, n, t) : r
            }, e.prototype.register = function(e) {
                this.experiments = oe(oe({}, this.experiments), e)
            }, e
        }();
    new de({});
    var me = ["rzp_test_mZcDnA8WJMFQQD", "rzp_live_ENneAQv5t7kTEQ", "rzp_test_kD8QgcxVGzYSOU", "rzp_live_alEMh9FVT4XpwM"];

    function fe(e, n, t) {
        return void 0 === t && (t = null), pe(e) ? ("string" == typeof n && (n = n.split(".")), n.reduce((function(e, n) {
            return e && void 0 !== e[n] ? e[n] : t
        }), e)) : e
    }

    function pe(e) {
        return null !== e && "object" == typeof e
    }
    var he = function(e, n) {
            return !!pe(e) && n in e
        },
        ve = function(e) {
            return !p.keys(e || {}).length
        },
        _e = function(e, n) {
            return p.keys(e).reduce((function(t, r) {
                return t[r] = n(e[r], r, e), t
            }), {})
        },
        ye = function(e, n) {
            void 0 === e && (e = {}), void 0 === n && (n = "");
            var t = {};
            return p.entries(e).forEach((function(e) {
                var r = e[0],
                    a = e[1],
                    i = n ? "".concat(n, ".").concat(r) : r;
                a && "object" == typeof a ? p.assign(t, ye(a, i)) : t[i] = a
            })), t
        },
        ge = function(e) {
            void 0 === e && (e = {});
            var n, t = {};
            return p.entries(e).forEach((function(e) {
                var r = e[0],
                    a = e[1],
                    i = (r = r.replace(/\[([^[\]]+)\]/g, "".concat(".", "$1"))).split("."),
                    o = t;
                i.forEach((function(e, t) {
                    t < i.length - 1 ? (o[e] || (o[e] = {}), n = o[e], o = n) : o[e] = a
                }))
            })), t
        },
        be = function(e) {
            return pe(e) ? JSON.parse(JSON.stringify(e)) : e
        },
        we = function(e, n) {
            pe(e) && p.keys(e).forEach((function(t) {
                return n(e[t], t, e)
            }))
        },
        ke = function(e) {
            try {
                return JSON.parse(e)
            } catch (e) {}
        },
        Ee = function() {
            function e() {
                var e = this;
                this.instance = null, this.preferenceResponse = {}, this.isEmbedded = !1, this.subscription = [], this.updateInstance = function(n) {
                    e.razorpayInstance = n
                }, this.triggerInstanceMethod = function(n, t) {
                    if (void 0 === t && (t = []), e.instance) return e.instance[n].apply(e.instance, t)
                }, this.set = function() {
                    for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                    return e.triggerInstanceMethod("set", n)
                }, this.subscribe = function(n) {
                    e.subscription.push(n)
                }, this.get = function() {
                    for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                    return n.length ? e.triggerInstanceMethod("get", n) : e.instance
                }, this.getMerchantOption = function(n) {
                    void 0 === n && (n = "");
                    var t = e.triggerInstanceMethod("get") || {};
                    return n ? fe(t, n) : t
                }, this.isIRCTC = function() {
                    return me.indexOf(e.get("key")) >= 0
                }, this.getCardFeatures = function(n) {
                    return e.instance.getCardFeatures(n)
                }, this.subscription = []
            }
            return p.defineProperty(e.prototype, "razorpayInstance", {
                get: function() {
                    return this.instance
                },
                set: function(e) {
                    this.instance = e, this.preferenceResponse = e.preferences, this.subscription.forEach((function(n) {
                        "function" == typeof n && n(e)
                    })), this.isIRCTC() && this.set("theme.image_frame", !1)
                },
                enumerable: !1,
                configurable: !0
            }), p.defineProperty(e.prototype, "preferences", {
                get: function() {
                    return this.preferenceResponse
                },
                enumerable: !1,
                configurable: !0
            }), e
        }(),
        Se = new Ee,
        Ae = {
            AED: {
                code: "784",
                denomination: 100,
                min_value: 10,
                min_auth_value: 100,
                symbol: "د.إ",
                name: "Emirati Dirham"
            },
            ALL: {
                code: "008",
                denomination: 100,
                min_value: 221,
                min_auth_value: 100,
                symbol: "Lek",
                name: "Albanian Lek"
            },
            AMD: {
                code: "051",
                denomination: 100,
                min_value: 975,
                min_auth_value: 100,
                symbol: "֏",
                name: "Armenian Dram"
            },
            ARS: {
                code: "032",
                denomination: 100,
                min_value: 80,
                min_auth_value: 100,
                symbol: "ARS",
                name: "Argentine Peso"
            },
            AUD: {
                code: "036",
                denomination: 100,
                min_value: 50,
                min_auth_value: 100,
                symbol: "A$",
                name: "Australian Dollar"
            },
            AWG: {
                code: "533",
                denomination: 100,
                min_value: 10,
                min_auth_value: 100,
                symbol: "Afl.",
                name: "Aruban or Dutch Guilder"
            },
            BBD: {
                code: "052",
                denomination: 100,
                min_value: 10,
                min_auth_value: 100,
                symbol: "Bds$",
                name: "Barbadian or Bajan Dollar"
            },
            BDT: {
                code: "050",
                denomination: 100,
                min_value: 168,
                min_auth_value: 100,
                symbol: "৳",
                name: "Bangladeshi Taka"
            },
            BMD: {
                code: "060",
                denomination: 100,
                min_value: 10,
                min_auth_value: 100,
                symbol: "$",
                name: "Bermudian Dollar"
            },
            BND: {
                code: "096",
                denomination: 100,
                min_value: 10,
                min_auth_value: 100,
                symbol: "BND",
                name: "Bruneian Dollar"
            },
            BOB: {
                code: "068",
                denomination: 100,
                min_value: 14,
                min_auth_value: 100,
                symbol: "Bs",
                name: "Bolivian Bolíviano"
            },
            BSD: {
                code: "044",
                denomination: 100,
                min_value: 10,
                min_auth_value: 100,
                symbol: "BSD",
                name: "Bahamian Dollar"
            },
            BWP: {
                code: "072",
                denomination: 100,
                min_value: 22,
                min_auth_value: 100,
                symbol: "P",
                name: "Botswana Pula"
            },
            BZD: {
                code: "084",
                denomination: 100,
                min_value: 10,
                min_auth_value: 100,
                symbol: "BZ$",
                name: "Belizean Dollar"
            },
            CAD: {
                code: "124",
                denomination: 100,
                min_value: 50,
                min_auth_value: 100,
                symbol: "C$",
                name: "Canadian Dollar"
            },
            CHF: {
                code: "756",
                denomination: 100,
                min_value: 50,
                min_auth_value: 100,
                symbol: "CHf",
                name: "Swiss Franc"
            },
            CNY: {
                code: "156",
                denomination: 100,
                min_value: 14,
                min_auth_value: 100,
                symbol: "¥",
                name: "Chinese Yuan Renminbi"
            },
            COP: {
                code: "170",
                denomination: 100,
                min_value: 1e3,
                min_auth_value: 100,
                symbol: "COL$",
                name: "Colombian Peso"
            },
            CRC: {
                code: "188",
                denomination: 100,
                min_value: 1e3,
                min_auth_value: 100,
                symbol: "₡",
                name: "Costa Rican Colon"
            },
            CUP: {
                code: "192",
                denomination: 100,
                min_value: 53,
                min_auth_value: 100,
                symbol: "$MN",
                name: "Cuban Peso"
            },
            CZK: {
                code: "203",
                denomination: 100,
                min_value: 46,
                min_auth_value: 100,
                symbol: "Kč",
                name: "Czech Koruna"
            },
            DKK: {
                code: "208",
                denomination: 100,
                min_value: 250,
                min_auth_value: 100,
                symbol: "DKK",
                name: "Danish Krone"
            },
            DOP: {
                code: "214",
                denomination: 100,
                min_value: 102,
                min_auth_value: 100,
                symbol: "RD$",
                name: "Dominican Peso"
            },
            DZD: {
                code: "012",
                denomination: 100,
                min_value: 239,
                min_auth_value: 100,
                symbol: "د.ج",
                name: "Algerian Dinar"
            },
            EGP: {
                code: "818",
                denomination: 100,
                min_value: 35,
                min_auth_value: 100,
                symbol: "E£",
                name: "Egyptian Pound"
            },
            ETB: {
                code: "230",
                denomination: 100,
                min_value: 57,
                min_auth_value: 100,
                symbol: "ብር",
                name: "Ethiopian Birr"
            },
            EUR: {
                code: "978",
                denomination: 100,
                min_value: 50,
                min_auth_value: 100,
                symbol: "€",
                name: "Euro"
            },
            FJD: {
                code: "242",
                denomination: 100,
                min_value: 10,
                min_auth_value: 100,
                symbol: "FJ$",
                name: "Fijian Dollar"
            },
            GBP: {
                code: "826",
                denomination: 100,
                min_value: 30,
                min_auth_value: 100,
                symbol: "£",
                name: "British Pound"
            },
            GIP: {
                code: "292",
                denomination: 100,
                min_value: 10,
                min_auth_value: 100,
                symbol: "GIP",
                name: "Gibraltar Pound"
            },
            GMD: {
                code: "270",
                denomination: 100,
                min_value: 100,
                min_auth_value: 100,
                symbol: "D",
                name: "Gambian Dalasi"
            },
            GTQ: {
                code: "320",
                denomination: 100,
                min_value: 16,
                min_auth_value: 100,
                symbol: "Q",
                name: "Guatemalan Quetzal"
            },
            GYD: {
                code: "328",
                denomination: 100,
                min_value: 418,
                min_auth_value: 100,
                symbol: "G$",
                name: "Guyanese Dollar"
            },
            HKD: {
                code: "344",
                denomination: 100,
                min_value: 400,
                min_auth_value: 100,
                symbol: "HK$",
                name: "Hong Kong Dollar"
            },
            HNL: {
                code: "340",
                denomination: 100,
                min_value: 49,
                min_auth_value: 100,
                symbol: "HNL",
                name: "Honduran Lempira"
            },
            HRK: {
                code: "191",
                denomination: 100,
                min_value: 14,
                min_auth_value: 100,
                symbol: "kn",
                name: "Croatian Kuna"
            },
            HTG: {
                code: "332",
                denomination: 100,
                min_value: 167,
                min_auth_value: 100,
                symbol: "G",
                name: "Haitian Gourde"
            },
            HUF: {
                code: "348",
                denomination: 100,
                min_value: 555,
                min_auth_value: 100,
                symbol: "Ft",
                name: "Hungarian Forint"
            },
            IDR: {
                code: "360",
                denomination: 100,
                min_value: 1e3,
                min_auth_value: 100,
                symbol: "Rp",
                name: "Indonesian Rupiah"
            },
            ILS: {
                code: "376",
                denomination: 100,
                min_value: 10,
                min_auth_value: 100,
                symbol: "₪",
                name: "Israeli Shekel"
            },
            INR: {
                code: "356",
                denomination: 100,
                min_value: 100,
                min_auth_value: 100,
                symbol: "₹",
                name: "Indian Rupee"
            },
            JMD: {
                code: "388",
                denomination: 100,
                min_value: 250,
                min_auth_value: 100,
                symbol: "J$",
                name: "Jamaican Dollar"
            },
            KES: {
                code: "404",
                denomination: 100,
                min_value: 201,
                min_auth_value: 100,
                symbol: "Ksh",
                name: "Kenyan Shilling"
            },
            KGS: {
                code: "417",
                denomination: 100,
                min_value: 140,
                min_auth_value: 100,
                symbol: "Лв",
                name: "Kyrgyzstani Som"
            },
            KHR: {
                code: "116",
                denomination: 100,
                min_value: 1e3,
                min_auth_value: 100,
                symbol: "៛",
                name: "Cambodian Riel"
            },
            KYD: {
                code: "136",
                denomination: 100,
                min_value: 10,
                min_auth_value: 100,
                symbol: "CI$",
                name: "Caymanian Dollar"
            },
            KZT: {
                code: "398",
                denomination: 100,
                min_value: 759,
                min_auth_value: 100,
                symbol: "₸",
                name: "Kazakhstani Tenge"
            },
            LAK: {
                code: "418",
                denomination: 100,
                min_value: 1e3,
                min_auth_value: 100,
                symbol: "₭",
                name: "Lao Kip"
            },
            LBP: {
                code: "422",
                denomination: 100,
                min_value: 1e3,
                min_auth_value: 100,
                symbol: "&#1604;.&#1604;.",
                name: "Lebanese Pound"
            },
            LKR: {
                code: "144",
                denomination: 100,
                min_value: 358,
                min_auth_value: 100,
                symbol: "රු",
                name: "Sri Lankan Rupee"
            },
            LRD: {
                code: "430",
                denomination: 100,
                min_value: 325,
                min_auth_value: 100,
                symbol: "L$",
                name: "Liberian Dollar"
            },
            LSL: {
                code: "426",
                denomination: 100,
                min_value: 29,
                min_auth_value: 100,
                symbol: "LSL",
                name: "Basotho Loti"
            },
            MAD: {
                code: "504",
                denomination: 100,
                min_value: 20,
                min_auth_value: 100,
                symbol: "د.م.",
                name: "Moroccan Dirham"
            },
            MDL: {
                code: "498",
                denomination: 100,
                min_value: 35,
                min_auth_value: 100,
                symbol: "MDL",
                name: "Moldovan Leu"
            },
            MKD: {
                code: "807",
                denomination: 100,
                min_value: 109,
                min_auth_value: 100,
                symbol: "ден",
                name: "Macedonian Denar"
            },
            MMK: {
                code: "104",
                denomination: 100,
                min_value: 1e3,
                min_auth_value: 100,
                symbol: "MMK",
                name: "Burmese Kyat"
            },
            MNT: {
                code: "496",
                denomination: 100,
                min_value: 1e3,
                min_auth_value: 100,
                symbol: "₮",
                name: "Mongolian Tughrik"
            },
            MOP: {
                code: "446",
                denomination: 100,
                min_value: 17,
                min_auth_value: 100,
                symbol: "MOP$",
                name: "Macau Pataca"
            },
            MUR: {
                code: "480",
                denomination: 100,
                min_value: 70,
                min_auth_value: 100,
                symbol: "₨",
                name: "Mauritian Rupee"
            },
            MVR: {
                code: "462",
                denomination: 100,
                min_value: 31,
                min_auth_value: 100,
                symbol: "Rf",
                name: "Maldivian Rufiyaa"
            },
            MWK: {
                code: "454",
                denomination: 100,
                min_value: 1e3,
                min_auth_value: 100,
                symbol: "MK",
                name: "Malawian Kwacha"
            },
            MXN: {
                code: "484",
                denomination: 100,
                min_value: 39,
                min_auth_value: 100,
                symbol: "Mex$",
                name: "Mexican Peso"
            },
            MYR: {
                code: "458",
                denomination: 100,
                min_value: 10,
                min_auth_value: 100,
                symbol: "RM",
                name: "Malaysian Ringgit"
            },
            NAD: {
                code: "516",
                denomination: 100,
                min_value: 29,
                min_auth_value: 100,
                symbol: "N$",
                name: "Namibian Dollar"
            },
            NGN: {
                code: "566",
                denomination: 100,
                min_value: 723,
                min_auth_value: 100,
                symbol: "₦",
                name: "Nigerian Naira"
            },
            NIO: {
                code: "558",
                denomination: 100,
                min_value: 66,
                min_auth_value: 100,
                symbol: "NIO",
                name: "Nicaraguan Cordoba"
            },
            NOK: {
                code: "578",
                denomination: 100,
                min_value: 300,
                min_auth_value: 100,
                symbol: "NOK",
                name: "Norwegian Krone"
            },
            NPR: {
                code: "524",
                denomination: 100,
                min_value: 221,
                min_auth_value: 100,
                symbol: "रू",
                name: "Nepalese Rupee"
            },
            NZD: {
                code: "554",
                denomination: 100,
                min_value: 50,
                min_auth_value: 100,
                symbol: "NZ$",
                name: "New Zealand Dollar"
            },
            PEN: {
                code: "604",
                denomination: 100,
                min_value: 10,
                min_auth_value: 100,
                symbol: "S/",
                name: "Peruvian Sol"
            },
            PGK: {
                code: "598",
                denomination: 100,
                min_value: 10,
                min_auth_value: 100,
                symbol: "PGK",
                name: "Papua New Guinean Kina"
            },
            PHP: {
                code: "608",
                denomination: 100,
                min_value: 106,
                min_auth_value: 100,
                symbol: "₱",
                name: "Philippine Peso"
            },
            PKR: {
                code: "586",
                denomination: 100,
                min_value: 227,
                min_auth_value: 100,
                symbol: "₨",
                name: "Pakistani Rupee"
            },
            QAR: {
                code: "634",
                denomination: 100,
                min_value: 10,
                min_auth_value: 100,
                symbol: "QR",
                name: "Qatari Riyal"
            },
            RUB: {
                code: "643",
                denomination: 100,
                min_value: 130,
                min_auth_value: 100,
                symbol: "₽",
                name: "Russian Ruble"
            },
            SAR: {
                code: "682",
                denomination: 100,
                min_value: 10,
                min_auth_value: 100,
                symbol: "SR",
                name: "Saudi Arabian Riyal"
            },
            SCR: {
                code: "690",
                denomination: 100,
                min_value: 28,
                min_auth_value: 100,
                symbol: "SRe",
                name: "Seychellois Rupee"
            },
            SEK: {
                code: "752",
                denomination: 100,
                min_value: 300,
                min_auth_value: 100,
                symbol: "SEK",
                name: "Swedish Krona"
            },
            SGD: {
                code: "702",
                denomination: 100,
                min_value: 50,
                min_auth_value: 100,
                symbol: "S$",
                name: "Singapore Dollar"
            },
            SLL: {
                code: "694",
                denomination: 100,
                min_value: 1e3,
                min_auth_value: 100,
                symbol: "Le",
                name: "Sierra Leonean Leone"
            },
            SOS: {
                code: "706",
                denomination: 100,
                min_value: 1e3,
                min_auth_value: 100,
                symbol: "Sh.so.",
                name: "Somali Shilling"
            },
            SSP: {
                code: "728",
                denomination: 100,
                min_value: 100,
                min_auth_value: 100,
                symbol: "SS£",
                name: "South Sudanese Pound"
            },
            SVC: {
                code: "222",
                denomination: 100,
                min_value: 18,
                min_auth_value: 100,
                symbol: "₡",
                name: "Salvadoran Colon"
            },
            SZL: {
                code: "748",
                denomination: 100,
                min_value: 29,
                min_auth_value: 100,
                symbol: "E",
                name: "Swazi Lilangeni"
            },
            THB: {
                code: "764",
                denomination: 100,
                min_value: 64,
                min_auth_value: 100,
                symbol: "฿",
                name: "Thai Baht"
            },
            TTD: {
                code: "780",
                denomination: 100,
                min_value: 14,
                min_auth_value: 100,
                symbol: "TT$",
                name: "Trinidadian Dollar"
            },
            TZS: {
                code: "834",
                denomination: 100,
                min_value: 1e3,
                min_auth_value: 100,
                symbol: "Sh",
                name: "Tanzanian Shilling"
            },
            USD: {
                code: "840",
                denomination: 100,
                min_value: 50,
                min_auth_value: 100,
                symbol: "$",
                name: "US Dollar"
            },
            UYU: {
                code: "858",
                denomination: 100,
                min_value: 67,
                min_auth_value: 100,
                symbol: "$U",
                name: "Uruguayan Peso"
            },
            UZS: {
                code: "860",
                denomination: 100,
                min_value: 1e3,
                min_auth_value: 100,
                symbol: "so'm",
                name: "Uzbekistani Som"
            },
            YER: {
                code: "886",
                denomination: 100,
                min_value: 501,
                min_auth_value: 100,
                symbol: "﷼",
                name: "Yemeni Rial"
            },
            ZAR: {
                code: "710",
                denomination: 100,
                min_value: 29,
                min_auth_value: 100,
                symbol: "R",
                name: "South African Rand"
            }
        },
        Ce = function(e, n) {
            return void 0 === n && (n = "."),
                function(t) {
                    for (var r = n, a = 0; a < e; a++) r += "0";
                    return t.replace(r, "")
                }
        },
        Re = function(e, n) {
            return void 0 === n && (n = ","), e.replace(/\./, n)
        },
        xe = {
            three: function(e, n) {
                var t = h(e).replace(new RegExp("(.{1,3})(?=(...)+(\\..{" + n + "})$)", "g"), "$1,");
                return Ce(n)(t)
            },
            threecommadecimal: function(e, n) {
                var t = Re(h(e)).replace(new RegExp("(.{1,3})(?=(...)+(\\,.{" + n + "})$)", "g"), "$1.");
                return Ce(n, ",")(t)
            },
            threespaceseparator: function(e, n) {
                var t = h(e).replace(new RegExp("(.{1,3})(?=(...)+(\\..{" + n + "})$)", "g"), "$1 ");
                return Ce(n)(t)
            },
            threespacecommadecimal: function(e, n) {
                var t = Re(h(e)).replace(new RegExp("(.{1,3})(?=(...)+(\\,.{" + n + "})$)", "g"), "$1 ");
                return Ce(n, ",")(t)
            },
            szl: function(e, n) {
                var t = h(e).replace(new RegExp("(.{1,3})(?=(...)+(\\..{" + n + "})$)", "g"), "$1, ");
                return Ce(n)(t)
            },
            chf: function(e, n) {
                var t = h(e).replace(new RegExp("(.{1,3})(?=(...)+(\\..{" + n + "})$)", "g"), "$1'");
                return Ce(n)(t)
            },
            inr: function(e, n) {
                var t = h(e).replace(new RegExp("(.{1,2})(?=.(..)+(\\..{" + n + "})$)", "g"), "$1,");
                return Ce(n)(t)
            },
            none: function(e) {
                return h(e)
            }
        },
        Ie = {
            default: {
                decimals: 2,
                format: xe.three,
                minimum: 100
            },
            AED: {
                minor: "fil",
                minimum: 10
            },
            AFN: {
                minor: "pul"
            },
            ALL: {
                minor: "qindarka",
                minimum: 221
            },
            AMD: {
                minor: "luma",
                minimum: 975
            },
            ANG: {
                minor: "cent"
            },
            AOA: {
                minor: "lwei"
            },
            ARS: {
                format: xe.threecommadecimal,
                minor: "centavo",
                minimum: 80
            },
            AUD: {
                format: xe.threespaceseparator,
                minimum: 50,
                minor: "cent"
            },
            AWG: {
                minor: "cent",
                minimum: 10
            },
            AZN: {
                minor: "qäpik"
            },
            BAM: {
                minor: "fenning"
            },
            BBD: {
                minor: "cent",
                minimum: 10
            },
            BDT: {
                minor: "paisa",
                minimum: 168
            },
            BGN: {
                minor: "stotinki"
            },
            BHD: {
                dir: "rtl",
                decimals: 3,
                minor: "fils"
            },
            BIF: {
                decimals: 0,
                major: "franc",
                minor: "centime"
            },
            BMD: {
                minor: "cent",
                minimum: 10
            },
            BND: {
                minor: "sen",
                minimum: 10
            },
            BOB: {
                minor: "centavo",
                minimum: 14
            },
            BRL: {
                format: xe.threecommadecimal,
                minimum: 50,
                minor: "centavo"
            },
            BSD: {
                minor: "cent",
                minimum: 10
            },
            BTN: {
                minor: "chetrum"
            },
            BWP: {
                minor: "thebe",
                minimum: 22
            },
            BYR: {
                decimals: 0,
                major: "ruble"
            },
            BZD: {
                minor: "cent",
                minimum: 10
            },
            CAD: {
                minimum: 50,
                minor: "cent"
            },
            CDF: {
                minor: "centime"
            },
            CHF: {
                format: xe.chf,
                minimum: 50,
                minor: "rappen"
            },
            CLP: {
                decimals: 0,
                format: xe.none,
                major: "peso",
                minor: "centavo"
            },
            CNY: {
                minor: "jiao",
                minimum: 14
            },
            COP: {
                format: xe.threecommadecimal,
                minor: "centavo",
                minimum: 1e3
            },
            CRC: {
                format: xe.threecommadecimal,
                minor: "centimo",
                minimum: 1e3
            },
            CUC: {
                minor: "centavo"
            },
            CUP: {
                minor: "centavo",
                minimum: 53
            },
            CVE: {
                minor: "centavo"
            },
            CZK: {
                format: xe.threecommadecimal,
                minor: "haler",
                minimum: 46
            },
            DJF: {
                decimals: 0,
                major: "franc",
                minor: "centime"
            },
            DKK: {
                minimum: 250,
                minor: "øre"
            },
            DOP: {
                minor: "centavo",
                minimum: 102
            },
            DZD: {
                minor: "centime",
                minimum: 239
            },
            EGP: {
                minor: "piaster",
                minimum: 35
            },
            ERN: {
                minor: "cent"
            },
            ETB: {
                minor: "cent",
                minimum: 57
            },
            EUR: {
                minimum: 50,
                minor: "cent"
            },
            FJD: {
                minor: "cent",
                minimum: 10
            },
            FKP: {
                minor: "pence"
            },
            GBP: {
                minimum: 30,
                minor: "pence"
            },
            GEL: {
                minor: "tetri"
            },
            GHS: {
                minor: "pesewas",
                minimum: 3
            },
            GIP: {
                minor: "pence",
                minimum: 10
            },
            GMD: {
                minor: "butut"
            },
            GTQ: {
                minor: "centavo",
                minimum: 16
            },
            GYD: {
                minor: "cent",
                minimum: 418
            },
            HKD: {
                minimum: 400,
                minor: "cent"
            },
            HNL: {
                minor: "centavo",
                minimum: 49
            },
            HRK: {
                format: xe.threecommadecimal,
                minor: "lipa",
                minimum: 14
            },
            HTG: {
                minor: "centime",
                minimum: 167
            },
            HUF: {
                decimals: 0,
                format: xe.none,
                major: "forint",
                minimum: 555
            },
            IDR: {
                format: xe.threecommadecimal,
                minor: "sen",
                minimum: 1e3
            },
            ILS: {
                minor: "agorot",
                minimum: 10
            },
            INR: {
                format: xe.inr,
                minor: "paise"
            },
            IQD: {
                decimals: 3,
                minor: "fil"
            },
            IRR: {
                minor: "rials"
            },
            ISK: {
                decimals: 0,
                format: xe.none,
                major: "króna",
                minor: "aurar"
            },
            JMD: {
                minor: "cent",
                minimum: 250
            },
            JOD: {
                decimals: 3,
                minor: "fil"
            },
            JPY: {
                decimals: 0,
                minimum: 50,
                minor: "sen"
            },
            KES: {
                minor: "cent",
                minimum: 201
            },
            KGS: {
                minor: "tyyn",
                minimum: 140
            },
            KHR: {
                minor: "sen",
                minimum: 1e3
            },
            KMF: {
                decimals: 0,
                major: "franc",
                minor: "centime"
            },
            KPW: {
                minor: "chon"
            },
            KRW: {
                decimals: 0,
                major: "won",
                minor: "chon"
            },
            KWD: {
                dir: "rtl",
                decimals: 3,
                minor: "fil"
            },
            KYD: {
                minor: "cent",
                minimum: 10
            },
            KZT: {
                minor: "tiyn",
                minimum: 759
            },
            LAK: {
                minor: "at",
                minimum: 1e3
            },
            LBP: {
                format: xe.threespaceseparator,
                minor: "piastre",
                minimum: 1e3
            },
            LKR: {
                minor: "cent",
                minimum: 358
            },
            LRD: {
                minor: "cent",
                minimum: 325
            },
            LSL: {
                minor: "lisente",
                minimum: 29
            },
            LTL: {
                format: xe.threespacecommadecimal,
                minor: "centu"
            },
            LVL: {
                minor: "santim"
            },
            LYD: {
                decimals: 3,
                minor: "dirham"
            },
            MAD: {
                minor: "centime",
                minimum: 20
            },
            MDL: {
                minor: "ban",
                minimum: 35
            },
            MGA: {
                decimals: 0,
                major: "ariary"
            },
            MKD: {
                minor: "deni"
            },
            MMK: {
                minor: "pya",
                minimum: 1e3
            },
            MNT: {
                minor: "mongo",
                minimum: 1e3
            },
            MOP: {
                minor: "avo",
                minimum: 17
            },
            MRO: {
                minor: "khoum"
            },
            MUR: {
                minor: "cent",
                minimum: 70
            },
            MVR: {
                minor: "lari",
                minimum: 31
            },
            MWK: {
                minor: "tambala",
                minimum: 1e3
            },
            MXN: {
                minor: "centavo",
                minimum: 39
            },
            MYR: {
                minor: "sen",
                minimum: 10
            },
            MZN: {
                decimals: 0,
                major: "metical"
            },
            NAD: {
                minor: "cent",
                minimum: 29
            },
            NGN: {
                minor: "kobo",
                minimum: 723
            },
            NIO: {
                minor: "centavo",
                minimum: 66
            },
            NOK: {
                format: xe.threecommadecimal,
                minimum: 300,
                minor: "øre"
            },
            NPR: {
                minor: "paise",
                minimum: 221
            },
            NZD: {
                minimum: 50,
                minor: "cent"
            },
            OMR: {
                dir: "rtl",
                minor: "baiza",
                decimals: 3
            },
            PAB: {
                minor: "centesimo"
            },
            PEN: {
                minor: "centimo",
                minimum: 10
            },
            PGK: {
                minor: "toea",
                minimum: 10
            },
            PHP: {
                minor: "centavo",
                minimum: 106
            },
            PKR: {
                minor: "paisa",
                minimum: 227
            },
            PLN: {
                format: xe.threespacecommadecimal,
                minor: "grosz"
            },
            PYG: {
                decimals: 0,
                major: "guarani",
                minor: "centimo"
            },
            QAR: {
                minor: "dirham",
                minimum: 10
            },
            RON: {
                format: xe.threecommadecimal,
                minor: "bani"
            },
            RUB: {
                format: xe.threecommadecimal,
                minor: "kopeck",
                minimum: 130
            },
            RWF: {
                decimals: 0,
                major: "franc",
                minor: "centime"
            },
            SAR: {
                minor: "halalat",
                minimum: 10
            },
            SBD: {
                minor: "cent"
            },
            SCR: {
                minor: "cent",
                minimum: 28
            },
            SEK: {
                format: xe.threespacecommadecimal,
                minimum: 300,
                minor: "öre"
            },
            SGD: {
                minimum: 50,
                minor: "cent"
            },
            SHP: {
                minor: "new pence"
            },
            SLL: {
                minor: "cent",
                minimum: 1e3
            },
            SOS: {
                minor: "centesimi",
                minimum: 1e3
            },
            SRD: {
                minor: "cent"
            },
            STD: {
                minor: "centimo"
            },
            SSP: {
                minor: "piaster"
            },
            SVC: {
                minor: "centavo",
                minimum: 18
            },
            SYP: {
                minor: "piaster"
            },
            SZL: {
                format: xe.szl,
                minor: "cent",
                minimum: 29
            },
            THB: {
                minor: "satang",
                minimum: 64
            },
            TJS: {
                minor: "diram"
            },
            TMT: {
                minor: "tenga"
            },
            TND: {
                decimals: 3,
                minor: "millime"
            },
            TOP: {
                minor: "seniti"
            },
            TRY: {
                minor: "kurus"
            },
            TTD: {
                minor: "cent",
                minimum: 14
            },
            TWD: {
                minor: "cent"
            },
            TZS: {
                minor: "cent",
                minimum: 1e3
            },
            UAH: {
                format: xe.threespacecommadecimal,
                minor: "kopiyka"
            },
            UGX: {
                minor: "cent"
            },
            USD: {
                minimum: 50,
                minor: "cent"
            },
            UYU: {
                format: xe.threecommadecimal,
                minor: "centé",
                minimum: 67
            },
            UZS: {
                minor: "tiyin",
                minimum: 1e3
            },
            VND: {
                format: xe.none,
                minor: "hao,xu"
            },
            VUV: {
                decimals: 0,
                major: "vatu",
                minor: "centime"
            },
            WST: {
                minor: "sene"
            },
            XAF: {
                decimals: 0,
                major: "franc",
                minor: "centime"
            },
            XCD: {
                minor: "cent"
            },
            XPF: {
                decimals: 0,
                major: "franc",
                minor: "centime"
            },
            YER: {
                minor: "fil",
                minimum: 501
            },
            ZAR: {
                format: xe.threespaceseparator,
                minor: "cent",
                minimum: 29
            },
            ZMK: {
                minor: "ngwee"
            }
        },
        De = function(e) {
            return Ie[e] ? Ie[e] : Ie.default
        },
        Pe = ["AED", "ALL", "AMD", "ARS", "AUD", "AWG", "BBD", "BDT", "BHD", "BMD", "BND", "BOB", "BSD", "BWP", "BZD", "CAD", "CHF", "CNY", "COP", "CRC", "CUP", "CZK", "DKK", "DOP", "DZD", "EGP", "ETB", "EUR", "FJD", "GBP", "GHS", "GIP", "GMD", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "JMD", "KES", "KGS", "KHR", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "MAD", "MDL", "MKD", "MMK", "MNT", "MOP", "MUR", "MVR", "MWK", "MXN", "MYR", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PEN", "PGK", "PHP", "PKR", "QAR", "RUB", "SAR", "SCR", "SEK", "SGD", "SLL", "SOS", "SSP", "SVC", "SZL", "THB", "TTD", "TZS", "USD", "UYU", "UZS", "YER", "ZAR"],
        Ne = {
            AED: "د.إ",
            AFN: "&#x60b;",
            ALL: "Lek",
            AMD: "֏",
            ANG: "NAƒ",
            AOA: "Kz",
            ARS: "ARS",
            AUD: "A$",
            AWG: "Afl.",
            AZN: "ман",
            BAM: "KM",
            BBD: "Bds$",
            BDT: "৳",
            BGN: "лв",
            BHD: "د.ب",
            BIF: "FBu",
            BMD: "$",
            BND: "BND",
            BOB: "Bs.",
            BRL: "R$",
            BSD: "BSD",
            BTN: "Nu.",
            BWP: "P",
            BYR: "Br",
            BZD: "BZ$",
            CAD: "C$",
            CDF: "FC",
            CHF: "CHf",
            CLP: "CLP$",
            CNY: "¥",
            COP: "COL$",
            CRC: "₡",
            CUC: "&#x20b1;",
            CUP: "$MN",
            CVE: "Esc",
            CZK: "Kč",
            DJF: "Fdj",
            DKK: "DKK",
            DOP: "RD$",
            DZD: "د.ج",
            EGP: "E£",
            ERN: "Nfa",
            ETB: "ብር",
            EUR: "€",
            FJD: "FJ$",
            FKP: "FK&#163;",
            GBP: "£",
            GEL: "ლ",
            GHS: "&#x20b5;",
            GIP: "GIP",
            GMD: "D",
            GNF: "FG",
            GTQ: "Q",
            GYD: "G$",
            HKD: "HK$",
            HNL: "HNL",
            HRK: "kn",
            HTG: "G",
            HUF: "Ft",
            IDR: "Rp",
            ILS: "₪",
            INR: "₹",
            IQD: "ع.د",
            IRR: "&#xfdfc;",
            ISK: "ISK",
            JMD: "J$",
            JOD: "د.ا",
            JPY: "&#165;",
            KES: "Ksh",
            KGS: "Лв",
            KHR: "៛",
            KMF: "CF",
            KPW: "KPW",
            KRW: "KRW",
            KWD: "د.ك",
            KYD: "CI$",
            KZT: "₸",
            LAK: "₭",
            LBP: "&#1604;.&#1604;.",
            LD: "LD",
            LKR: "රු",
            LRD: "L$",
            LSL: "LSL",
            LTL: "Lt",
            LVL: "Ls",
            LYD: "LYD",
            MAD: "د.م.",
            MDL: "MDL",
            MGA: "Ar",
            MKD: "ден",
            MMK: "MMK",
            MNT: "₮",
            MOP: "MOP$",
            MRO: "UM",
            MUR: "₨",
            MVR: "Rf",
            MWK: "MK",
            MXN: "Mex$",
            MYR: "RM",
            MZN: "MT",
            NAD: "N$",
            NGN: "₦",
            NIO: "NIO",
            NOK: "NOK",
            NPR: "रू",
            NZD: "NZ$",
            OMR: "ر.ع.",
            PAB: "B/.",
            PEN: "S/",
            PGK: "PGK",
            PHP: "₱",
            PKR: "₨",
            PLN: "Zł",
            PYG: "&#x20b2;",
            QAR: "QR",
            RON: "RON",
            RSD: "Дин.",
            RUB: "₽",
            RWF: "RF",
            SAR: "SR",
            SBD: "SI$",
            SCR: "SRe",
            SDG: "&#163;Sd",
            SEK: "SEK",
            SFR: "Fr",
            SGD: "S$",
            SHP: "&#163;",
            SLL: "Le",
            SOS: "Sh.so.",
            SRD: "Sr$",
            SSP: "SS£",
            STD: "Db",
            SVC: "₡",
            SYP: "S&#163;",
            SZL: "E",
            THB: "฿",
            TJS: "SM",
            TMT: "M",
            TND: "د.ت",
            TOP: "T$",
            TRY: "TL",
            TTD: "TT$",
            TWD: "NT$",
            TZS: "Sh",
            UAH: "&#x20b4;",
            UGX: "USh",
            USD: "$",
            UYU: "$U",
            UZS: "so'm",
            VEF: "Bs",
            VND: "&#x20ab;",
            VUV: "VT",
            WST: "T",
            XAF: "FCFA",
            XCD: "EC$",
            XOF: "CFA",
            XPF: "CFPF",
            YER: "﷼",
            ZAR: "R",
            ZMK: "ZK",
            ZWL: "Z$"
        },
        Te = function(e) {
            we(e, (function(n, t) {
                Ie[t] = p.assign({}, Ie.default, Ie[t] || {}), Ie[t].code = t, e[t] && (Ie[t].symbol = e[t])
            }))
        };

    function Me(e, n) {
        var t = De(n),
            r = e / y.pow(10, t.decimals);
        return t.format(r.toFixed(t.decimals), t.decimals)
    }

    function Le(e, n) {
        return e ? fe(Se.preferences, e, n) : Se.preferences
    }

    function Oe(e) {
        return e ? Se.get(e) : Se.triggerInstanceMethod("get")
    }! function(e) {
        var n = {};
        we(e, (function(t, r) {
            Ae[r] = t, Ie[r] = Ie[r] || {}, e[r].min_value && (Ie[r].minimum = e[r].min_value), e[r].denomination && (Ie[r].decimals = y.LOG10E * y.log(e[r].denomination)), n[r] = e[r].symbol
        })), p.assign(Ne, n), Te(n)
    }(Ae), Te(Ne), Pe.reduce((function(e, n) {
        return e[n] = Ne[n], e
    }), {});
    var Be = Se.isIRCTC;

    function Fe() {
        return Oe("payout")
    }
    var ze, Ke = (ze = "callback_url", function() {
        return Oe(ze)
    });
    var Ue = function() {
            return fe(null === Oe("config") ? null : {
                display: Oe("config.display")
            }, "display.language")
        },
        $e = function() {
            return Ue() || Le("language_code")
        },
        je = function() {
            return Oe("amount")
        },
        He = function() {
            return Le("methods", {}) || {}
        },
        Ge = function() {
            return Le("order")
        },
        Ye = function() {
            return Le("order.method")
        },
        Ve = function(e, n) {
            return Le("features.".concat(e), n)
        };

    function Ze() {
        return "INR" !== Oe("currency")
    }
    var We = function() {
        return Le("methods.recurring")
    };

    function qe() {
        return !("emandate" !== Ye() || !We()) || (Le("subscription") || Oe("recurring"))
    }

    function Je() {
        return qe() && Le("subscription")
    }

    function Qe(e) {
        if (void 0 === e && (e = null), !Le("subscription")) return !1;
        if (!e) return !0;
        var n = Le();
        return n.subscription[e] && !1 !== n.subscription[e]
    }
    var Xe = function() {
            return Le("experiments.recurring_upi_intent_qr")
        },
        en = function() {
            return Le("invoice.order_id") || Oe("order_id")
        },
        nn = function(e) {
            return function(n, t) {
                return arguments.length < 2 ? function(t) {
                    return e.call(null, t, n)
                } : e.call(null, n, t)
            }
        },
        tn = function(e) {
            return function(n, t, r) {
                return arguments.length < 3 ? function(r) {
                    return e.call(null, r, n, t)
                } : e.call(null, n, t, r)
            }
        };

    function rn() {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        return function(n) {
            return function() {
                for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return e.every((function(e, n) {
                    if (e(t[n])) return !0;
                    l.dispatchEvent(new Dn("rzp_error", {
                        detail: new Error("wrong ".concat(n, "th argtype ").concat(t[n]))
                    }))
                })) ? n.apply(null, ue([], t, !0)) : t[0]
            }
        }
    }
    var an = nn((function(e, n) {
            return typeof e === n
        })),
        on = an("boolean"),
        un = an("number"),
        cn = an("string"),
        sn = an("function"),
        ln = an("object"),
        dn = f.isArray,
        mn = an("undefined"),
        fn = function(e) {
            return pn(e) && 1 === e.nodeType
        },
        pn = function(e) {
            return ! function(e) {
                return null === e
            }(e) && ln(e)
        },
        hn = nn((function(e, n) {
            return e && e[n]
        })),
        vn = hn("length"),
        _n = hn("prototype"),
        yn = nn((function(e, n) {
            return e instanceof n
        })),
        gn = _.now,
        bn = y.random,
        wn = y.floor,
        kn = function() {
            var e = gn();
            return function() {
                return gn() - e
            }
        };

    function En(e, n) {
        void 0 === n && (n = "");
        var t = {
            description: h(e)
        };
        return n && (t.field = n), t
    }

    function Sn(e, n) {
        return void 0 === n && (n = ""), {
            error: En(e, n)
        }
    }

    function An(e) {
        throw new Error(e)
    }
    var Cn = function(e) {
        return /data:image\/[^;]+;base64/.test(e)
    };

    function Rn(e, n) {
        var t = {};
        if (!pn(e)) return t;
        var r = null == n;
        return p.keys(e).forEach((function(a) {
            var i = e[a],
                o = r ? a : "".concat(n, "[").concat(a, "]");
            if ("object" == typeof i) {
                var u = Rn(i, o);
                p.keys(u).forEach((function(e) {
                    t[e] = u[e]
                }))
            } else t[o] = i
        })), t
    }

    function xn(e) {
        var n = Rn(e);
        return p.keys(n).map((function(e) {
            return "".concat(S(e), "=").concat(S(n[e]))
        })).join("&")
    }

    function In(e, n) {
        var t = n;
        return pn(n) && (t = xn(n)), t && (e += (null == e ? void 0 : e.indexOf("?")) > 0 ? "&" : "?", e += t), e
    }

    function Dn(e, n) {
        n = n || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var t = d.createEvent("CustomEvent");
        return t.initCustomEvent(e, n.bubbles, n.cancelable, n.detail), t
    }
    var Pn = l.Element,
        Nn = function(e) {
            return d.createElement(e || "div")
        },
        Tn = function(e) {
            return e.parentNode
        },
        Mn = rn(fn),
        Ln = rn(fn, fn),
        On = rn(fn, cn),
        Bn = rn(fn, cn, (function() {
            return !0
        })),
        Fn = rn(fn, pn),
        zn = nn(Ln((function(e, n) {
            return n.appendChild(e)
        }))),
        Kn = nn(Ln((function(e, n) {
            return zn(n, e), e
        }))),
        Un = Mn((function(e) {
            var n = Tn(e);
            return n && n.removeChild(e), e
        }));
    Mn(hn("selectionStart")), Mn(hn("selectionEnd")), nn(rn(fn, un)((function(e, n) {
        return e.selectionStart = e.selectionEnd = n, e
    })));
    var $n = tn(Bn((function(e, n, t) {
            return e.setAttribute(n, t), e
        }))),
        jn = tn(Bn((function(e, n, t) {
            return e.style[n] = t, e
        }))),
        Hn = nn(Fn((function(e, n) {
            return we(n, (function(n, t) {
                return $n(e, t, n)
            })), e
        }))),
        Gn = nn(Fn((function(e, n) {
            return we(n, (function(n, t) {
                return jn(e, t, n)
            })), e
        }))),
        Yn = nn(On((function(e, n) {
            return e.innerHTML = n, e
        }))),
        Vn = nn(On((function(e, n) {
            return jn(e, "display", n)
        })));
    Vn("none"), Vn("block"), Vn("inline-block");
    var Zn, Wn, qn, Jn = hn("offsetWidth"),
        Qn = hn("offsetHeight"),
        Xn = _n(Pn),
        et = Xn.matches || Xn.matchesSelector || Xn.webkitMatchesSelector || Xn.mozMatchesSelector || Xn.msMatchesSelector || Xn.oMatchesSelector,
        nt = nn(On((function(e, n) {
            return et.call(e, n)
        }))),
        tt = function(e, n, t, r) {
            if (!yn(e, Pn)) return function(a) {
                var i = n;
                return cn(t) ? i = function(e) {
                        for (var r = e.target; !nt(r, t) && r !== a;) r = Tn(r);
                        r !== a && (e.delegateTarget = r, n(e))
                    } : r = t, r = !!r, a.addEventListener(e, i, r),
                    function() {
                        return a.removeEventListener(e, i, r)
                    }
            }
        },
        rt = P,
        at = Sn("Network error"),
        it = 0,
        ot = !1,
        ut = 0;

    function ct() {
        ot && (ot = !1), st(0)
    }

    function st(e) {
        isNaN(e) || (ut = +e)
    }

    function lt(e) {
        return ct(), this ? this(e) : null
    }

    function dt(e, n) {
        return function(e, n, t) {
            var r;
            return n && t ? In(e, xn(((r = {})[n] = t, r))) : e
        }(e, "keyless_header", n)
    }

    function mt(e) {
        if (!yn(this, mt)) return new mt(e);
        this.options = function(e) {
            var n = e;
            cn(e) && (n = {
                url: e
            });
            if (n) {
                var t = n.method,
                    r = n.headers,
                    a = n.callback,
                    i = n.data;
                return r || (n.headers = {}), t || (n.method = "get"), a || (n.callback = function(e) {
                    return e
                }), pn(i) && !yn(i, T) && (i = xn(i)), n.data = i, n
            }
            return e
        }(e), this.defer()
    }
    var ft = {
        options: {
            url: "",
            method: "get",
            callback: function(e) {
                return e
            }
        },
        setReq: function(e, n) {
            return this.abort(), this.type = e, this.req = n, this
        },
        till: function(e, n, t) {
            var r = this;
            if (void 0 === n && (n = 0), void 0 === t && (t = 3e3), !ot) {
                var a = ut ? ut * t : t;
                return this.setReq("timeout", g((function() {
                    r.call((function(a) {
                        a.error && n > 0 ? r.till(e, n - 1, t) : e(a) ? r.till(e, n, t) : r.options.callback && r.options.callback(a)
                    }))
                }), a))
            }
            g((function() {
                r.till(e, n, t)
            }), t)
        },
        abort: function() {
            var e = this.req,
                n = this.type;
            e && ("ajax" === n ? e.abort() : "jsonp" === n ? l.Razorpay[e] = function(e) {
                return e
            } : w(e), this.req = null)
        },
        defer: function() {
            var e = this;
            this.req = g((function() {
                return e.call()
            }))
        },
        call: function(e) {
            void 0 === e && (e = this.options.callback);
            var n = this.options,
                t = n.method,
                r = n.data,
                a = n.headers,
                i = void 0 === a ? {} : a,
                o = this.options.url;
            o = dt(o, qn);
            var u = new rt;
            this.setReq("ajax", u), u.open(t, o, !0), u.onreadystatechange = function() {
                if (4 === u.readyState && u.status) {
                    var n = ke(u.responseText);
                    n || ((n = Sn("Parsing error")).xhr = {
                        status: u.status,
                        text: u.responseText
                    }), n.error && l.dispatchEvent(Dn("rzp_network_error", {
                        detail: {
                            method: t,
                            url: o,
                            baseUrl: null == o ? void 0 : o.split("?")[0],
                            status: u.status,
                            xhrErrored: !1,
                            response: n
                        }
                    })), n.status_code = u.status, e(n)
                }
            }, u.onerror = function() {
                var n = at;
                n.xhr = {
                    status: 0
                }, l.dispatchEvent(Dn("rzp_network_error", {
                    detail: {
                        method: t,
                        url: o,
                        baseUrl: null == o ? void 0 : o.split("?")[0],
                        status: 0,
                        xhrErrored: !0,
                        response: n
                    }
                })), e(n)
            }, Zn && (i["X-Razorpay-SessionId"] = Zn), Wn && (i["X-Razorpay-TrackId"] = Wn), we(i, (function(e, n) {
                return u.setRequestHeader(n, e)
            })), u.send(r)
        }
    };
    ft.constructor = mt, mt.prototype = ft, mt.post = lt.bind((function(e) {
        return e.method = "post", e.headers || (e.headers = {}), e.headers["Content-type"] || (e.headers["Content-type"] = "application/x-www-form-urlencoded"), mt(e)
    })), mt.patch = lt.bind((function(e) {
        return e.method = "PATCH", e.headers || (e.headers = {}), e.headers["Content-type"] || (e.headers["Content-type"] = "application/x-www-form-urlencoded"), mt(e)
    })), mt.put = lt.bind((function(e) {
        return e.method = "put", e.headers || (e.headers = {}), e.headers["Content-type"] || (e.headers["Content-type"] = "application/x-www-form-urlencoded"), mt(e)
    })), mt.delete = function(e) {
        return e.method = "delete", e.headers || (e.headers = {}), e.headers["Content-type"] || (e.headers["Content-type"] = "application/x-www-form-urlencoded"), mt(e)
    }, mt.setSessionId = function(e) {
        Zn = e
    }, mt.setTrackId = function(e) {
        Wn = e
    }, mt.setKeylessHeader = function(e) {
        qn = e
    }, mt.jsonp = lt.bind((function(e) {
        e.data || (e.data = {});
        var n = it++,
            t = 0,
            r = new mt(e);
        return e = r.options, r.call = function(r) {
            void 0 === r && (r = e.callback), t++;
            var a = "jsonp".concat(n, "_").concat(t),
                i = !1,
                o = function() {
                    i || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (i = !0, this.onload = this.onreadystatechange = null, Un(this))
                },
                u = l.Razorpay[a] = function(e) {
                    delete e.http_status_code, r(e), delete l.Razorpay[a]
                };
            this.setReq("jsonp", u);
            var c = In(e.url, e.data);
            c = In(c = dt(c, qn), xn({
                callback: "Razorpay.".concat(a)
            }));
            var s = Nn("script");
            p.assign(s, {
                src: c,
                async: !0,
                onerror: function() {
                    return r(at)
                },
                onload: o,
                onreadystatechange: o
            }), zn(s, d.documentElement)
        }, r
    })), mt.pausePoll = function() {
        ot || (ot = !0)
    }, mt.resumePoll = ct, mt.setPollDelayBy = st;
    var pt = l !== l.parent,
        ht = pt ? l.parent : l.opener,
        vt = 3288045102,
        _t = "production",
        yt = "69dc45b454a9c3c78d3694ff57de6a2bce7f4128",
        gt = function() {
            function e() {}
            return e.setId = function(n) {
                e.id = n, e.sendMessage("updateInterfaceId", n)
            }, e.subscribe = function(n, t) {
                e.subscriptions[n] || (e.subscriptions[n] = []), e.subscriptions[n].push(t)
            }, e.resetSubscriptions = function(n) {
                n ? e.subscriptions[n] = [] : e.subscriptions = {}
            }, e.publishToParent = function(n, t) {
                if (void 0 === t && (t = {}), ht) {
                    e.source || e.updateSource();
                    var r = {
                            data: t,
                            id: e.id,
                            source: e.source || "reset"
                        },
                        a = JSON.stringify({
                            data: r,
                            topic: n,
                            source: r.source,
                            time: _.now()
                        });
                    ht.postMessage(a, "*")
                }
            }, e.updateSource = function() {
                pt && window && window.location && (e.source = "checkout-frame")
            }, e.sendMessage = function(n, t) {
                var r = e.iframeReference && e.iframeReference.contentWindow ? e.iframeReference.contentWindow : window;
                r && r.postMessage(JSON.stringify({
                    topic: n,
                    data: {
                        data: t,
                        id: e.id,
                        source: "checkoutjs"
                    },
                    time: _.now(),
                    source: "checkoutjs",
                    _module: "interface"
                }), "*")
            }, e.subscriptions = {}, e
        }();
    gt.updateSource(), pt && (gt.publishToParent("ready"), gt.subscribe("updateInterfaceId", (function(e) {
        gt.id = e.data
    }))), window.addEventListener("message", (function(e) {
        var n = {};
        try {
            n = JSON.parse(e.data)
        } catch (e) {}
        var t = n || {},
            r = t.topic,
            a = t.data;
        r && gt.subscriptions[r] && gt.subscriptions[r].forEach((function(e) {
            e(a)
        }))
    }));
    var bt = "session_created",
        wt = "session_errored",
        kt = !1,
        Et = !1,
        St = _t;
    try {
        if (0 === D.href.indexOf("https://api.razorpay.com/v1/checkout/public")) {
            var At = "traffic_env=",
                Ct = D.search.slice(1).split("&").filter((function(e) {
                    return 0 === e.indexOf(At)
                }))[0];
            Ct && (St = Ct.slice(At.length))
        }
    } catch (e) {}

    function Rt(e, n) {
        var t = function(e) {
                return e === bt ? ("checkout." + St + ".sessionCreated.metrics").replace(".production", "") : ("checkout." + St + ".sessionErrored.metrics").replace(".production", "")
            }(e),
            r = [{
                name: t,
                labels: [{
                    type: e,
                    env: St
                }]
            }];
        return n && (r[0].labels[0].severity = n), r
    }

    function xt(e, n) {
        var t = he(I, "sendBeacon"),
            r = {
                metrics: Rt(e, n)
            },
            a = {
                url: "https://lumberjack-metrics.razorpay.com/v1/frontend-metrics",
                data: {
                    key: "ZmY5N2M0YzVkN2JiYzkyMWM1ZmVmYWJk",
                    data: S(C(R(S(JSON.stringify(r)))))
                }
            },
            i = Le("merchant_key") || Oe("key") || "",
            o = e === wt;
        if (!(i && i.indexOf("test_") > -1 || !i && !o) && (!kt && e === bt || !Et && e === wt)) try {
            t ? I.sendBeacon(a.url, JSON.stringify(a.data)) : mt.post(a), e === bt && (kt = !0), e === wt && (Et = !0),
                function(e, n) {
                    pt ? gt.publishToParent("syncAvailability", {
                        sessionCreated: e,
                        sessionErrored: n
                    }) : gt.sendMessage("syncAvailability", {
                        sessionCreated: e,
                        sessionErrored: n
                    })
                }(kt, Et)
        } catch (e) {}
    }
    gt.subscribe("syncAvailability", (function(e) {
        var n = e.data || {},
            t = n.sessionCreated,
            r = n.sessionErrored;
        kt = "boolean" == typeof t ? t : kt, Et = "boolean" == typeof r ? r : Et
    }));
    var It, Dt, Pt, Nt = "rzp_device_id",
        Tt = 1,
        Mt = "",
        Lt = "",
        Ot = l.screen;
    try {
        (Pt = [I.userAgent, I.language, (new _).getTimezoneOffset(), I.platform, I.cpuClass, I.hardwareConcurrency, Ot.colorDepth, I.deviceMemory, Ot.width + Ot.height, Ot.width * Ot.height, l.devicePixelRatio], It = Pt.join(), Dt = new l.TextEncoder("utf-8").encode(It), l.crypto.subtle.digest("SHA-1", Dt).then((function(e) {
            return Mt = function(e) {
                for (var n = [], t = new l.DataView(e), r = 0; r < t.byteLength; r += 4) {
                    var a = "00000000",
                        i = (a + t.getUint32(r).toString(16)).slice(-a.length);
                    n.push(i)
                }
                return n.join("")
            }(e)
        }))).then((function(e) {
            e && (Mt = e, function(e) {
                if (e) {
                    try {
                        Lt = se.getItem(Nt)
                    } catch (e) {}
                    if (!Lt) {
                        Lt = [Tt, e, _.now(), y.random().toString().slice(-8)].join(".");
                        try {
                            se.setItem(Nt, Lt)
                        } catch (e) {}
                    }
                }
            }(e))
        })).catch(m)
    } catch (e) {}

    function Bt() {
        var e;
        return null != (e = Lt) ? e : null
    }
    var Ft = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
        zt = Ft.split("").reduce((function(e, n, t) {
            var r;
            return X({}, e, ((r = {})[n] = t, r))
        }), {});

    function Kt(e) {
        for (var n = ""; e;) n = Ft[e % 62] + n, e = wn(e / 62);
        return n
    }

    function Ut() {
        var e, n = Kt(h(gn() - 13885344e5) + h("000000" + wn(1e6 * bn())).slice(-6)) + Kt(wn(238328 * bn())) + "0",
            t = 0;
        return n.split("").forEach((function(r, a) {
            e = zt[n[n.length - 1 - a]], (n.length - a) % 2 && (e *= 2), e >= 62 && (e = e % 62 + 1), t += e
        })), (e = t % 62) && (e = Ft[62 - e]), h(n).slice(0, 13) + e
    }
    var $t = Ut(),
        jt = {
            library: "checkoutjs",
            platform: "browser",
            referer: D.href,
            env: ""
        };

    function Ht(e) {
        var n, t = {
            checkout_id: e ? e.id : $t,
            "device.id": null != (n = Bt()) ? n : ""
        };
        return ["device", "env", "integration", "library", "os_version", "os", "platform_version", "platform", "referer"].forEach((function(e) {
            jt[e] && (t[e] = jt[e])
        })), t
    }
    var Gt, Yt, Vt = [],
        Zt = [],
        Wt = function(e) {
            if (e && (Gt = e), Vt.length && "live" === Gt) {
                Vt.forEach((function(e) {
                    ("open" === e.event || "submit" === e.event && "razorpayjs" === qt.props.library) && xt("session_created")
                }));
                var n = he(I, "sendBeacon"),
                    t = {
                        context: Yt,
                        addons: [{
                            name: "ua_parser",
                            input_key: "user_agent",
                            output_key: "user_agent_parsed"
                        }],
                        events: Vt.splice(0, 5)
                    },
                    r = {
                        url: "https://lumberjack.razorpay.com/v1/track",
                        data: {
                            key: "ZmY5N2M0YzVkN2JiYzkyMWM1ZmVmYWJk",
                            data: S(C(R(S(JSON.stringify(t)))))
                        }
                    };
                try {
                    var a = !1;
                    n && (a = I.sendBeacon(r.url, JSON.stringify(r.data))), a || mt.post(r)
                } catch (e) {}
            }
        };

    function qt(e, n, t, r) {
        e ? "test" !== (Gt = e.getMode()) && g((function() {
            t instanceof Error && (t = {
                message: t.message,
                stack: t.stack
            });
            var a = Ht(e);
            a.user_agent = null, a.mode = "live";
            var i = en();
            i && (a.order_id = i);
            var o = {},
                u = {
                    options: o
                };
            t && (u.data = t), o = p.assign(o, ge(e.get())), "function" == typeof e.get("handler") && (o.handler = !0);
            var c = e.get("callback_url");
            c && "string" == typeof c && (o.callback_url = !0), he(o, "prefill") && ["card"].forEach((function(e) {
                he(o.prefill, e) && (o.prefill[e] = !0)
            })), o.image && Cn(o.image) && (o.image = "base64");
            var s = e.get("external.wallets") || [];
            o.external_wallets = s.reduce((function(e, n) {
                var t;
                return X({}, e, ((t = {})[n] = !0, t))
            }), {}), $t && (u.local_order_id = $t), u.build_number = vt, u.experiments = de.getExperimentsFromStorage();
            var l, d = Le("experiments");
            try {
                pe(d) && (u.backendExperiments = X({}, d))
            } catch (e) {}
            l = {
                event: n,
                properties: u,
                timestamp: gn()
            }, Vt.push(l), Yt = a, r && Wt()
        })) : Zt.push([n, t, r])
    }
    b((function() {
        Wt()
    }), 1e3), qt.dispatchPendingEvents = function(e) {
        if (e) {
            var n = qt.bind(qt, e);
            Zt.splice(0, Zt.length).forEach((function(e) {
                n.apply(qt, e)
            }))
        }
    }, qt.parseAnalyticsData = function(e) {
        pn(e) && we(e, (function(e, n) {
            jt[n] = e
        }))
    }, qt.makeUid = Ut, qt.common = Ht, qt.props = jt, qt.id = $t, qt.updateUid = function(e) {
        $t = e, qt.id = e
    }, qt.flush = Wt;
    var Jt, Qt = function(e, n) {
            var t = {
                tags: n
            };
            switch (!0) {
                case !e:
                    t.message = "NA";
                    break;
                case "string" == typeof e:
                    t.message = e;
                    break;
                case "object" == typeof e:
                    var r = e.name,
                        a = e.message,
                        i = e.stack,
                        o = e.fileName,
                        u = e.lineNumber,
                        c = e.columnNumber;
                    t = X({}, JSON.parse(JSON.stringify(e)), {
                        name: r,
                        message: a,
                        stack: i,
                        fileName: o,
                        lineNumber: u,
                        columnNumber: c,
                        tags: n
                    });
                    break;
                default:
                    t.message = JSON.stringify(e)
            }
            return t
        },
        Xt = "S0",
        er = "S1",
        nr = "S2",
        tr = "S3",
        rr = "js_error",
        ar = {},
        ir = {},
        or = {
            setR: function(e) {
                Jt = e, qt.dispatchPendingEvents(e)
            },
            track: function(e, n) {
                var t, r = void 0 === n ? {} : n,
                    a = r.type,
                    i = r.data,
                    o = void 0 === i ? {} : i,
                    u = r.r,
                    c = void 0 === u ? Jt : u,
                    s = r.immediately,
                    l = void 0 !== s && s,
                    d = r.isError;
                try {
                    d && !c && (c = {
                        id: qt.id,
                        getMode: function() {
                            return "live"
                        },
                        get: function(e) {
                            return "string" != typeof e && {}
                        }
                    });
                    var m = (t = ye(ar), we(t, (function(e, n) {
                        sn(e) && (t[n] = e.call())
                    })), t);
                    o = function(e) {
                        var n = be(e || {});
                        return ["token"].forEach((function(e) {
                            n[e] && (n[e] = "__REDACTED__")
                        })), n
                    }(o), (o = pn(o) ? be(o) : {
                        data: o
                    }).meta && pn(o.meta) && (m = p.assign(m, o.meta)), o.meta = m, o.meta.request_index = c ? ir[c.id] : null, a && (e = a + ":" + e), qt(c, e, o, l)
                } catch (e) {
                    qt(c, rr, {
                        data: {
                            error: Qt(e, {
                                severity: nr,
                                unhandled: !1
                            })
                        }
                    }, !0)
                }
            },
            setMeta: function(e, n) {
                ar[e] = n
            },
            removeMeta: function(e) {
                delete ar[e]
            },
            getMeta: function() {
                return ge(ar)
            },
            updateRequestIndex: function(e) {
                if (!Jt || !e) return 0;
                he(ir, Jt.id) || (ir[Jt.id] = {});
                var n = ir[Jt.id];
                return he(n, e) || (n[e] = -1), n[e] += 1, n[e]
            }
        },
        ur = function(e, n) {
            if (!e) return n;
            var t = {};
            return p.keys(n).forEach((function(r) {
                var a = n[r];
                "__PREFIX" !== r || "__PREFIX" !== a ? t[r] = e + ":" + a : t[e.toUpperCase()] = "" + e
            })), t
        },
        cr = ur("card", X({}, {
            ADD_NEW_CARD: "add_new"
        }, {
            APP_SELECT: "app:select",
            ADD_CARD_SCREEN_RENDERED: "1cc_payments_add_new_card_screen_loaded",
            SAVED_CARD_SCREEN_RENDERED: "1cc_payments_saved_card_screen_loaded"
        })),
        sr = ur("saved_cards", {
            __PREFIX: "__PREFIX",
            CHECK_SAVED_CARDS: "check",
            HIDE_SAVED_CARDS: "hide",
            SHOW_SAVED_CARDS: "show",
            SKIP_SAVED_CARDS: "skip",
            EMI_PLAN_VIEW_SAVED_CARDS: "emi:plans:view",
            OTP_SUBMIT_SAVED_CARDS: "save:otp:submit",
            ACCESS_OTP_SUBMIT_SAVED_CARDS: "access:otp:submit",
            USER_CONSENT_FOR_TOKENIZATION: "user_consent_for_tokenization",
            TOKENIZATION_KNOW_MORE_MODAL: "tokenization_know_more_modal"
        }),
        lr = ur("emi", {
            VIEW_EMI_PLANS: "plans:view",
            EDIT_EMI_PLANS: "plans:edit",
            PAY_WITHOUT_EMI: "pay_without",
            VIEW_ALL_EMI_PLANS: "plans:view:all",
            SELECT_EMI_PLAN: "plan:select",
            CHOOSE_EMI_PLAN: "plan:choose",
            EMI_PLANS: "plans",
            EMI_CONTACT: "contact",
            EMI_CONTACT_FILLED: "contact:filled"
        }),
        dr = X({}, {
            SHOW_AVS_SCREEN: "avs_screen:show",
            LOAD_AVS_FORM: "avs_screen:load_form",
            AVS_FORM_DATA_INPUT: "avs_screen:form_data_input",
            AVS_FORM_SUBMIT: "avs_screen:form_submit"
        }, {
            HIDE_ADD_CARD_SCREEN: "add_cards:hide"
        }, {
            SHOW_PAYPAL_RETRY_SCREEN: "paypal_retry:show",
            SHOW_PAYPAL_RETRY_ON_OTP_SCREEN: "paypal_retry:show:otp_screen",
            PAYPAL_RETRY_CANCEL_BTN_CLICK: "paypal_retry:cancel_click",
            PAYPAL_RETRY_PAYPAL_BTN_CLICK: "paypal_retry:paypal_click",
            PAYPAL_RETRY_PAYPAL_ENABLED: "paypal_retry:paypal_enabled"
        });
    X({}, cr, sr, lr, dr);
    var mr = ur("cred", {
        ELIGIBILITY_CHECK: "eligibility_check",
        SUBTEXT_OFFER_EXPERIMENT: "subtext_offer_experiment",
        EXPERIMENT_OFFER_SELECTED: "experiment_offer_selected"
    });
    ur("offer", X({}, {
        APPLY: "apply"
    }));
    ur("p13n", X({}, {
        INSTRUMENTS_SHOWN: "instruments_shown",
        INSTRUMENTS_LIST: "instruments:list"
    }));
    ur("home", X({}, {
        HOME_LOADED: "checkoutHomeScreenLoaded",
        HOME_LOADED_V2: "1cc_payment_home_screen_loaded",
        PAYMENT_INSTRUMENT_SELECTED: "checkoutPaymentInstrumentSelected",
        PAYMENT_INSTRUMENT_SELECTED_V2: "1cc_payment_home_screen_instrument_selected",
        PAYMENT_METHOD_SELECTED: "checkoutPaymentMethodSelected",
        PAYMENT_METHOD_SELECTED_V2: "1cc_payment_home_screen_method_selected",
        METHODS_SHOWN: "methods:shown",
        METHODS_HIDE: "methods:hide",
        P13N_EXPERIMENT: "p13n:experiment",
        LANDING: "landing",
        PROCEED: "proceed",
        CONTACT_SCREEN_LOAD: "complete:contact_details",
        PAYPAL_RENDERED: "paypal:render"
    }));
    ur("order", X({}, {
        INVALID_TPV: "invalid_tpv"
    }));
    var fr = "automatic_checkout_open",
        pr = "automatic_checkout_click",
        hr = "intl_missing";
    ur("downtime", X({}, {
        ALERT_SHOW: "alert:show",
        CALLOUT_SHOW: "callout:show",
        DOWNTIME_ALERTSHOW: "alert:show"
    }));
    var vr = function() {
        var e = {};
        return p.keys(ie).forEach((function(n) {
            var t = ie[n],
                r = "Track" + t.charAt(0).toUpperCase() + t.slice(1);
            e[r] = function(e, n) {
                or.track(e, {
                    type: t,
                    data: n
                })
            }
        })), e.Track = function(e, n) {
            or.track(e, {
                data: n
            })
        }, e
    }();

    function _r(e) {
        return e
    }

    function yr() {
        return this._evts = {}, this._defs = {}, this
    }

    function gr(e, n, t, r, a, i, o) {
        try {
            var u = e[i](o),
                c = u.value
        } catch (e) {
            return void t(e)
        }
        u.done ? n(c) : Promise.resolve(c).then(r, a)
    }
    vr = function(e) {
        return X({}, e, {
            setMeta: or.setMeta,
            removeMeta: or.removeMeta,
            updateRequestIndex: or.updateRequestIndex,
            setR: or.setR
        })
    }(vr), yr.prototype = {
        onNew: _r,
        def: function(e, n) {
            this._defs[e] = n
        },
        on: function(e, n) {
            if (cn(e) && sn(n)) {
                var t = this._evts;
                t[e] || (t[e] = []), !1 !== this.onNew(e, n) && t[e].push(n)
            }
            return this
        },
        once: function(e, n) {
            var t = n,
                r = this;
            return n = function n() {
                t.apply(r, arguments), r.off(e, n)
            }, this.on(e, n)
        },
        off: function(e, n) {
            var t = arguments.length;
            if (!t) return yr.call(this);
            var r = this._evts;
            if (2 === t) {
                var a = r[e];
                if (!sn(n) || !dn(a)) return;
                if (a.splice(a.indexOf(n), 1), a.length) return
            }
            return r[e] ? delete r[e] : (e += ".", we(r, (function(n, t) {
                t.indexOf(e) || delete r[t]
            }))), this
        },
        emit: function(e, n) {
            var t = this;
            return (this._evts[e] || []).forEach((function(e) {
                try {
                    e.call(t, n)
                } catch (e) {
                    console.error
                }
            })), this
        },
        emitter: function() {
            var e = arguments,
                n = this;
            return function() {
                n.emit.apply(n, e)
            }
        }
    };
    var br, wr, kr = (br = function(e) {
            var n = function(e) {
                var n, t = p.prototype,
                    r = t.hasOwnProperty,
                    a = "function" == typeof Symbol ? Symbol : {},
                    i = a.iterator || "@@iterator",
                    o = a.asyncIterator || "@@asyncIterator",
                    u = a.toStringTag || "@@toStringTag";

                function c(e, n, t) {
                    return p.defineProperty(e, n, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[n]
                }
                try {
                    c({}, "")
                } catch (e) {
                    c = function(e, n, t) {
                        return e[n] = t
                    }
                }

                function s(e, n, t, r) {
                    var a = n && n.prototype instanceof _ ? n : _,
                        i = p.create(a.prototype),
                        o = new D(r || []);
                    return i._invoke = function(e, n, t) {
                        var r = d;
                        return function(a, i) {
                            if (r === f) throw new Error("Generator is already running");
                            if (r === h) {
                                if ("throw" === a) throw i;
                                return N()
                            }
                            for (t.method = a, t.arg = i;;) {
                                var o = t.delegate;
                                if (o) {
                                    var u = C(o, t);
                                    if (u) {
                                        if (u === v) continue;
                                        return u
                                    }
                                }
                                if ("next" === t.method) t.sent = t._sent = t.arg;
                                else if ("throw" === t.method) {
                                    if (r === d) throw r = h, t.arg;
                                    t.dispatchException(t.arg)
                                } else "return" === t.method && t.abrupt("return", t.arg);
                                r = f;
                                var c = l(e, n, t);
                                if ("normal" === c.type) {
                                    if (r = t.done ? h : m, c.arg === v) continue;
                                    return {
                                        value: c.arg,
                                        done: t.done
                                    }
                                }
                                "throw" === c.type && (r = h, t.method = "throw", t.arg = c.arg)
                            }
                        }
                    }(e, t, o), i
                }

                function l(e, n, t) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(n, t)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = s;
                var d = "suspendedStart",
                    m = "suspendedYield",
                    f = "executing",
                    h = "completed",
                    v = {};

                function _() {}

                function y() {}

                function g() {}
                var b = {};
                b[i] = function() {
                    return this
                };
                var w = p.getPrototypeOf,
                    k = w && w(w(P([])));
                k && k !== t && r.call(k, i) && (b = k);
                var E = g.prototype = _.prototype = p.create(b);

                function S(e) {
                    ["next", "throw", "return"].forEach((function(n) {
                        c(e, n, (function(e) {
                            return this._invoke(n, e)
                        }))
                    }))
                }

                function A(e, n) {
                    function t(a, i, o, u) {
                        var c = l(e[a], e, i);
                        if ("throw" !== c.type) {
                            var s = c.arg,
                                d = s.value;
                            return d && "object" == typeof d && r.call(d, "__await") ? n.resolve(d.__await).then((function(e) {
                                t("next", e, o, u)
                            }), (function(e) {
                                t("throw", e, o, u)
                            })) : n.resolve(d).then((function(e) {
                                s.value = e, o(s)
                            }), (function(e) {
                                return t("throw", e, o, u)
                            }))
                        }
                        u(c.arg)
                    }
                    var a;
                    this._invoke = function(e, r) {
                        function i() {
                            return new n((function(n, a) {
                                t(e, r, n, a)
                            }))
                        }
                        return a = a ? a.then(i, i) : i()
                    }
                }

                function C(e, t) {
                    var r = e.iterator[t.method];
                    if (r === n) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = n, C(e, t), "throw" === t.method)) return v;
                            t.method = "throw", t.arg = new x("The iterator does not provide a 'throw' method")
                        }
                        return v
                    }
                    var a = l(r, e.iterator, t.arg);
                    if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, v;
                    var i = a.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = n), t.delegate = null, v) : i : (t.method = "throw", t.arg = new x("iterator result is not an object"), t.delegate = null, v)
                }

                function R(e) {
                    var n = {
                        tryLoc: e[0]
                    };
                    1 in e && (n.catchLoc = e[1]), 2 in e && (n.finallyLoc = e[2], n.afterLoc = e[3]), this.tryEntries.push(n)
                }

                function I(e) {
                    var n = e.completion || {};
                    n.type = "normal", delete n.arg, e.completion = n
                }

                function D(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(R, this), this.reset(!0)
                }

                function P(e) {
                    if (e) {
                        var t = e[i];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var a = -1,
                                o = function t() {
                                    for (; ++a < e.length;)
                                        if (r.call(e, a)) return t.value = e[a], t.done = !1, t;
                                    return t.value = n, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: N
                    }
                }

                function N() {
                    return {
                        value: n,
                        done: !0
                    }
                }
                return y.prototype = E.constructor = g, g.constructor = y, y.displayName = c(g, u, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var n = "function" == typeof e && e.constructor;
                    return !!n && (n === y || "GeneratorFunction" === (n.displayName || n.name))
                }, e.mark = function(e) {
                    return p.setPrototypeOf ? p.setPrototypeOf(e, g) : (e.__proto__ = g, c(e, u, "GeneratorFunction")), e.prototype = p.create(E), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, S(A.prototype), A.prototype[o] = function() {
                    return this
                }, e.AsyncIterator = A, e.async = function(n, t, r, a, i) {
                    void 0 === i && (i = Promise);
                    var o = new A(s(n, t, r, a), i);
                    return e.isGeneratorFunction(t) ? o : o.next().then((function(e) {
                        return e.done ? e.value : o.next()
                    }))
                }, S(E), c(E, u, "Generator"), E[i] = function() {
                    return this
                }, E.toString = function() {
                    return "[object Generator]"
                }, e.keys = function(e) {
                    var n = [];
                    for (var t in e) n.push(t);
                    return n.reverse(),
                        function t() {
                            for (; n.length;) {
                                var r = n.pop();
                                if (r in e) return t.value = r, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, e.values = P, D.prototype = {
                    constructor: D,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(I), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function a(r, a) {
                            return u.type = "throw", u.arg = e, t.next = r, a && (t.method = "next", t.arg = n), !!a
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i],
                                u = o.completion;
                            if ("root" === o.tryLoc) return a("end");
                            if (o.tryLoc <= this.prev) {
                                var c = r.call(o, "catchLoc"),
                                    s = r.call(o, "finallyLoc");
                                if (c && s) {
                                    if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return a(o.finallyLoc)
                                } else if (c) {
                                    if (this.prev < o.catchLoc) return a(o.catchLoc, !0)
                                } else {
                                    if (!s) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return a(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, n) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var i = a;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= n && n <= i.finallyLoc && (i = null);
                        var o = i ? i.completion : {};
                        return o.type = e, o.arg = n, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(o)
                    },
                    complete: function(e, n) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && n && (this.next = n), v
                    },
                    finish: function(e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var t = this.tryEntries[n];
                            if (t.finallyLoc === e) return this.complete(t.completion, t.afterLoc), I(t), v
                        }
                    },
                    catch: function(e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var t = this.tryEntries[n];
                            if (t.tryLoc === e) {
                                var r = t.completion;
                                if ("throw" === r.type) {
                                    var a = r.arg;
                                    I(t)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: P(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = n), v
                    }
                }, e
            }(e.exports);
            try {
                regeneratorRuntime = n
            } catch (e) {
                Function("r", "regeneratorRuntime = r")(n)
            }
        }, br(wr = {
            exports: {}
        }, wr.exports), wr.exports),
        Er = kr,
        Sr = I.userAgent,
        Ar = I.vendor;

    function Cr(e) {
        return e.test(Sr)
    }

    function Rr(e) {
        return e.test(Ar)
    }
    var xr = Cr(/MSIE |Trident\//),
        Ir = Cr(/iPhone/),
        Dr = Ir || Cr(/iPad/),
        Pr = Cr(/Android/),
        Nr = Cr(/iPad/),
        Tr = Cr(/Windows NT/),
        Mr = Cr(/Linux/),
        Lr = Cr(/Mac OS/);
    Cr(/^((?!chrome|android).)*safari/i) || Rr(/Apple/), Cr(/firefox/), Cr(/Chrome/) && Rr(/Google Inc/);
    var Or = Cr(/; wv\) |Gecko\) Version\/[^ ]+ Chrome/);
    Cr(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/);
    var Br = Cr(/Instagram/);
    Cr(/SamsungBrowser/);
    var Fr = Cr(/FB_IAB/),
        zr = Cr(/FBAN/),
        Kr = Fr || zr;

    function Ur() {
        return Kr || Br
    }
    var $r = Cr(/; wv\) |Gecko\) Version\/[^ ]+ Chrome|Windows Phone|Opera Mini|UCBrowser|CriOS/) || Ur() || Dr || Cr(/Android 4/);
    Cr(/iPhone/), Sr.match(/Chrome\/(\d+)/);
    var jr = function() {
            var e;
            return !l.matchMedia || (null == (e = l.matchMedia("(max-device-height: 485px),(max-device-width: 485px)")) ? void 0 : e.matches)
        },
        Hr = function() {
            var e = function(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var i = e.apply(n, t);

                        function o(e) {
                            gr(i, r, a, o, u, "next", e)
                        }

                        function u(e) {
                            gr(i, r, a, o, u, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }(Er.mark((function e() {
                return Er.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!I.brave) {
                                e.next = 10;
                                break
                            }
                            return e.prev = 1, e.next = 4, I.brave.isBrave();
                        case 4:
                            return e.abrupt("return", e.sent);
                        case 7:
                            return e.prev = 7, e.t0 = e.catch(1), e.abrupt("return", !1);
                        case 10:
                            return e.abrupt("return", !1);
                        case 11:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 7]
                ])
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }();
    Cr(/(Vivo|HeyTap|Realme|Oppo)Browser/);
    var Gr = function() {
        return Ir ? "iPhone" : Nr ? "iPad" : Pr ? "android" : jr() ? "mobile" : "desktop"
    };
    var Yr = {
        key: "",
        account_id: "",
        image: "",
        amount: 100,
        currency: "INR",
        order_id: "",
        invoice_id: "",
        subscription_id: "",
        auth_link_id: "",
        payment_link_id: "",
        notes: null,
        disable_redesign_v15: null,
        callback_url: "",
        redirect: !1,
        description: "",
        customer_id: "",
        recurring: null,
        payout: null,
        contact_id: "",
        signature: "",
        retry: !0,
        target: "",
        subscription_card_change: null,
        display_currency: "",
        display_amount: "",
        recurring_token: {
            max_amount: 0,
            expire_by: 0
        },
        checkout_config_id: "",
        send_sms_hash: !1,
        show_address: !0,
        show_coupons: !0,
        mandatory_login: !1,
        enable_ga_analytics: !1,
        enable_fb_analytics: !1,
        customer_cart: {},
        script_coupon_applied: !1,
        disable_emi_ux: null
    };

    function Vr(e, n, t, r) {
        var a = n[t = t.toLowerCase()],
            i = typeof a;
        "object" === i && null === a ? cn(r) && ("true" === r || "1" === r ? r = !0 : "false" !== r && "0" !== r || (r = !1)) : "string" === i && (un(r) || on(r)) ? r = h(r) : "number" === i ? r = v(r) : "boolean" === i && (cn(r) ? "true" === r || "1" === r ? r = !0 : "false" !== r && "0" !== r || (r = !1) : un(r) && (r = !!r)), null !== a && i !== typeof r || (e[t] = r)
    }

    function Zr(e, n, t) {
        we(e[n], (function(r, a) {
            var i = typeof r;
            "string" !== i && "number" !== i && "boolean" !== i || (a = n + t[0] + a, t.length > 1 && (a += t[1]), e[a] = r)
        })), delete e[n]
    }

    function Wr(e, n) {
        var t = {};
        return we(e, (function(e, r) {
            r in qr ? we(e, (function(e, a) {
                Vr(t, n, r + "." + a, e)
            })) : Vr(t, n, r, e)
        })), t
    }
    var qr = {};

    function Jr(e) {
        e = function(e) {
            return "object" == typeof e.retry && "boolean" == typeof e.retry.enabled && (e.retry = e.retry.enabled), e
        }(e), we(Yr, (function(e, n) {
            pn(e) && ! function(e) {
                return !vn(p.keys(e))
            }(e) && (qr[n] = !0, we(e, (function(e, t) {
                Yr[n + "." + t] = e
            })), delete Yr[n])
        })), (e = Wr(e, Yr)).callback_url && $r && (e.redirect = !0), this.get = function(n) {
            return arguments.length ? n in e ? e[n] : Yr[n] : e
        }, this.set = function(n, t) {
            e[n] = t
        }, this.unset = function(n) {
            delete e[n]
        }
    }
    var Qr = "com.google.android.apps.nbu.paisa.user",
        Xr = function(e, n) {
            void 0 === n && (n = {});
            var t = be(e);
            t.default_dcc_currency && delete t.default_dcc_currency, n.feesRedirect && (t.view = "html"), ["amount", "currency", "signature", "description", "order_id", "account_id", "notes", "subscription_id", "auth_link_id", "payment_link_id", "customer_id", "recurring", "subscription_card_change", "recurring_token.max_amount", "recurring_token.expire_by"].forEach((function(e) {
                if (!t.hasOwnProperty(e)) {
                    var n = "order_id" === e ? en() : Oe(e);
                    n && ("boolean" == typeof n && (n = 1), t[e.replace(/\.(\w+)/g, "[$1]")] = n)
                }
            }));
            var r = Oe("key");
            !t.key_id && r && (t.key_id = r), n.avoidPopup && "wallet" === t.method && (t["_[source]"] = "checkoutjs"), (n.tez || n.gpay) && (t["_[flow]"] = "intent", t["_[app]"] || (t["_[app]"] = Qr));
            ["integration", "integration_version", "integration_parent_version"].forEach((function(e) {
                var n = Oe("_." + e);
                n && (t["_[" + e + "]"] = n)
            }));
            var a, i = null != (a = Mt) ? a : null;
            i && (t["_[shield][fhash]"] = i);
            var o = Bt();
            o && (t["_[device_id]"] = o), t["_[shield][tz]"] = -(new _).getTimezoneOffset(), t["_[build]"] = vt, Zr(t, "notes", "[]"), Zr(t, "card", "[]");
            var u = t["card[expiry]"];
            return cn(u) && (t["card[expiry_month]"] = u.slice(0, 2), t["card[expiry_year]"] = u.slice(-2), delete t["card[expiry]"]), t._ = qt.common(), Zr(t, "_", "[]"), t
        };

    function ea(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new f(n); t < n; t++) r[t] = e[t];
        return r
    }

    function na(e) {
        return function(e) {
            if (f.isArray(e)) return ea(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return f.from(e)
        }(e) || function(e, n) {
            if (e) {
                if ("string" == typeof e) return ea(e, n);
                var t = p.prototype.toString.call(e).slice(8, -1);
                return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? f.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? ea(e, n) : void 0
            }
        }(e) || function() {
            throw new x("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var ta, ra = {
        api: "https://api.razorpay.com/",
        version: "v1/",
        frameApi: "/",
        cdn: "https://cdn.razorpay.com/"
    };
    try {
        p.assign(ra, l.Razorpay.config)
    } catch (e) {}

    function aa(e) {
        return aa = p.setPrototypeOf ? p.getPrototypeOf : function(e) {
            return e.__proto__ || p.getPrototypeOf(e)
        }, aa(e)
    }

    function ia(e, n) {
        return ia = p.setPrototypeOf || function(e, n) {
            return e.__proto__ = n, e
        }, ia(e, n)
    }

    function oa() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return m.prototype.valueOf.call(Reflect.construct(m, [], (function() {}))), !0
        } catch (e) {
            return !1
        }
    }

    function ua(e, n, t) {
        return ua = oa() ? Reflect.construct : function(e, n, t) {
            var r = [null];
            r.push.apply(r, n);
            var a = new(Function.bind.apply(e, r));
            return t && ia(a, t.prototype), a
        }, ua.apply(null, arguments)
    }

    function ca(e) {
        var n = "function" == typeof Map ? new Map : void 0;
        return ca = function(e) {
            if (null === e || ! function(e) {
                    return -1 !== Function.toString.call(e).indexOf("[native code]")
                }(e)) return e;
            if ("function" != typeof e) throw new x("Super expression must either be null or a function");
            if (void 0 !== n) {
                if (n.has(e)) return n.get(e);
                n.set(e, t)
            }

            function t() {
                return ua(e, arguments, aa(this).constructor)
            }
            return t.prototype = p.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), ia(t, e)
        }, ca(e)
    }

    function sa(e, n) {
        e.prototype = p.create(n.prototype), e.prototype.constructor = e, ia(e, n)
    }

    function la() {}

    function da(e) {
        return e()
    }

    function ma() {
        return Object.create(null)
    }

    function fa(e) {
        e.forEach(da)
    }

    function pa(e) {
        return "function" == typeof e
    }

    function ha(e, n) {
        return e != e ? n == n : e !== n || e && "object" == typeof e || "function" == typeof e
    }

    function va(e) {
        if (null == e) return la;
        for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
        var a = e.subscribe.apply(e, t);
        return a.unsubscribe ? function() {
            return a.unsubscribe()
        } : a
    }

    function _a(e) {
        var n;
        return va(e, (function(e) {
            return n = e
        }))(), n
    }

    function ya(e, n, t, r) {
        return e[1] && r ? function(e, n) {
            for (var t in n) e[t] = n[t];
            return e
        }(t.ctx.slice(), e[1](r(n))) : t.ctx
    }

    function ga(e, n) {
        e.appendChild(n)
    }

    function ba(e, n, t) {
        e.insertBefore(n, t || null)
    }

    function wa(e) {
        e.parentNode.removeChild(e)
    }

    function ka(e) {
        return document.createElement(e)
    }

    function Ea(e) {
        return document.createElementNS("http://www.w3.org/2000/svg", e)
    }

    function Sa(e) {
        return document.createTextNode(e)
    }

    function Aa(e, n, t) {
        null == t ? e.removeAttribute(n) : e.getAttribute(n) !== t && e.setAttribute(n, t)
    }

    function Ca(e, n, t, r) {
        e.style.setProperty(n, t, r ? "important" : "")
    }

    function Ra(e) {
        ta = e
    }

    function xa() {
        var e = function() {
            if (!ta) throw new Error("Function called outside component initialization");
            return ta
        }();
        return function(n, t) {
            var r = e.$$.callbacks[n];
            if (r) {
                var a = function(e, n, t) {
                    void 0 === t && (t = !1);
                    var r = document.createEvent("CustomEvent");
                    return r.initCustomEvent(e, t, !1, n), r
                }(n, t);
                r.slice().forEach((function(n) {
                    n.call(e, a)
                }))
            }
        }
    }
    var Ia = [],
        Da = [],
        Pa = [],
        Na = [],
        Ta = Promise.resolve(),
        Ma = !1;

    function La(e) {
        Pa.push(e)
    }
    var Oa = !1,
        Ba = new Set;

    function Fa() {
        if (!Oa) {
            Oa = !0;
            do {
                for (var e = 0; e < Ia.length; e += 1) {
                    var n = Ia[e];
                    Ra(n), za(n.$$)
                }
                for (Ra(null), Ia.length = 0; Da.length;) Da.pop()();
                for (var t = 0; t < Pa.length; t += 1) {
                    var r = Pa[t];
                    Ba.has(r) || (Ba.add(r), r())
                }
                Pa.length = 0
            } while (Ia.length);
            for (; Na.length;) Na.pop()();
            Ma = !1, Oa = !1, Ba.clear()
        }
    }

    function za(e) {
        if (null !== e.fragment) {
            e.update(), fa(e.before_update);
            var n = e.dirty;
            e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, n), e.after_update.forEach(La)
        }
    }
    var Ka = new Set;

    function Ua(e, n) {
        e && e.i && (Ka.delete(e), e.i(n))
    }

    function $a(e, n) {
        -1 === e.$$.dirty[0] && (Ia.push(e), Ma || (Ma = !0, Ta.then(Fa)), e.$$.dirty.fill(0)), e.$$.dirty[n / 31 | 0] |= 1 << n % 31
    }

    function ja(e, n, t, r, a, i, o, u) {
        void 0 === u && (u = [-1]);
        var c = ta;
        Ra(e);
        var s = e.$$ = {
            fragment: null,
            ctx: null,
            props: i,
            update: la,
            not_equal: a,
            bound: ma(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(n.context || (c ? c.$$.context : [])),
            callbacks: ma(),
            dirty: u,
            skip_bound: !1,
            root: n.target || c.$$.root
        };
        o && o(s.root);
        var l = !1;
        if (s.ctx = t ? t(e, n.props || {}, (function(n, t) {
                var r = !(arguments.length <= 2) && arguments.length - 2 ? arguments.length <= 2 ? void 0 : arguments[2] : t;
                return s.ctx && a(s.ctx[n], s.ctx[n] = r) && (!s.skip_bound && s.bound[n] && s.bound[n](r), l && $a(e, n)), t
            })) : [], s.update(), l = !0, fa(s.before_update), s.fragment = !!r && r(s.ctx), n.target) {
            if (n.hydrate) {
                var d = function(e) {
                    return Array.from(e.childNodes)
                }(n.target);
                s.fragment && s.fragment.l(d), d.forEach(wa)
            } else s.fragment && s.fragment.c();
            n.intro && Ua(e.$$.fragment),
                function(e, n, t, r) {
                    var a = e.$$,
                        i = a.fragment,
                        o = a.on_mount,
                        u = a.on_destroy,
                        c = a.after_update;
                    i && i.m(n, t), r || La((function() {
                        var n = o.map(da).filter(pa);
                        u ? u.push.apply(u, na(n)) : fa(n), e.$$.on_mount = []
                    })), c.forEach(La)
                }(e, n.target, n.anchor, n.customElement), Fa()
        }
        Ra(c)
    }
    var Ha = function() {
        function e() {}
        var n = e.prototype;
        return n.$destroy = function() {
            var e, n;
            e = 1, null !== (n = this.$$).fragment && (fa(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []), this.$destroy = la
        }, n.$on = function(e, n) {
            var t = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
            return t.push(n),
                function() {
                    var e = t.indexOf(n); - 1 !== e && t.splice(e, 1)
                }
        }, n.$set = function(e) {
            var n;
            this.$$set && (n = e, 0 !== Object.keys(n).length) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
        }, e
    }();

    function Ga(e, n) {
        var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (t) return (t = t.call(e)).next.bind(t);
        if (Array.isArray(e) || (t = function(e, n) {
                if (!e) return;
                if ("string" == typeof e) return Ya(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === t && e.constructor && (t = e.constructor.name);
                if ("Map" === t || "Set" === t) return Array.from(e);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ya(e, n)
            }(e)) || n && e && "number" == typeof e.length) {
            t && (e = t);
            var r = 0;
            return function() {
                return r >= e.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: e[r++]
                }
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function Ya(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r
    }
    var Va = [];

    function Za(e, n) {
        var t;
        void 0 === n && (n = la);
        var r = new Set;

        function a(n) {
            if (ha(e, n) && (e = n, t)) {
                for (var a, i = !Va.length, o = Ga(r); !(a = o()).done;) {
                    var u = a.value;
                    u[1](), Va.push(u, e)
                }
                if (i) {
                    for (var c = 0; c < Va.length; c += 2) Va[c][0](Va[c + 1]);
                    Va.length = 0
                }
            }
        }
        return {
            set: a,
            update: function(n) {
                a(n(e))
            },
            subscribe: function(i, o) {
                void 0 === o && (o = la);
                var u = [i, o];
                return r.add(u), 1 === r.size && (t = n(a) || la), i(e),
                    function() {
                        r.delete(u), 0 === r.size && (t(), t = null)
                    }
            }
        }
    }

    function Wa(e, n, t) {
        var r, a = !Array.isArray(e),
            i = a ? [e] : e,
            o = n.length < 2;
        return r = function(e) {
            var t = !1,
                r = [],
                u = 0,
                c = la,
                s = function() {
                    if (!u) {
                        c();
                        var t = n(a ? r[0] : r, e);
                        o ? e(t) : c = pa(t) ? t : la
                    }
                },
                l = i.map((function(e, n) {
                    return va(e, (function(e) {
                        r[n] = e, u &= ~(1 << n), t && s()
                    }), (function() {
                        u |= 1 << n
                    }))
                }));
            return t = !0, s(),
                function() {
                    fa(l), c()
                }
        }, {
            subscribe: Za(t, r).subscribe
        }
    }
    var qa = {
        properties: ["providers"],
        payment: ["provider"],
        groupedToIndividual: function(e) {
            var n = be(e);
            return delete n.providers, (e.providers || []).map((function(e) {
                return p.assign({
                    provider: e
                }, n)
            }))
        },
        isValid: function(e) {
            return m(e.providers) && e.providers.length > 0
        }
    };

    function Ja(e, n, t) {
        n = be(n);
        var r = e.method,
            a = ti[r].payment;
        if (n.method = r, a.forEach((function(t) {
                var r = e[t];
                mn(r) || (n[t] = r)
            })), e.token_id && t) {
            var i = fe(t, "tokens.items", []).find((function(n) {
                return n.id === e.token_id
            }));
            i && (n.token = i.token)
        }
        return n
    }

    function Qa() {
        return !0
    }

    function Xa(e) {
        return [e]
    }
    var ei = ["types", "iins", "issuers", "networks", "token_id"],
        ni = ["flows", "apps", "token_id", "vpas"],
        ti = {
            card: {
                properties: ei,
                payment: ["token"],
                groupedToIndividual: function(e, n) {
                    var t = fe(n, "tokens.items", []),
                        r = be(e);
                    if (ei.forEach((function(e) {
                            delete r[e]
                        })), e.token_id) {
                        var a = e.token_id,
                            i = t.find((function(e) {
                                return e.id === a
                            }));
                        if (i) return [p.assign({
                            token_id: a,
                            type: i.card.type,
                            issuer: i.card.issuer,
                            network: i.card.network
                        }, r)]
                    }
                    var o = function(e, n) {
                        void 0 === n && (n = []);
                        var t = [];
                        return n.forEach((function(n) {
                            var r = e[n];
                            if (r && r.length) {
                                var a = n.slice(0, -1);
                                if (0 === t.length) t = r.map((function(e) {
                                    var n;
                                    return (n = {})[a] = e, n
                                }));
                                else {
                                    var i = r.flatMap((function(e) {
                                        return t.map((function(n) {
                                            var t;
                                            return p.assign(((t = {})[a] = e, t), n)
                                        }))
                                    }));
                                    t = i
                                }
                            }
                        })), t
                    }(e, ["issuers", "networks", "types", "iins"]);
                    return o.map((function(e) {
                        return p.assign(e, r)
                    }))
                },
                isValid: function(e) {
                    var n = m(e.issuers),
                        t = m(e.networks),
                        r = m(e.types);
                    return !(n && !e.issuers.length) && (!(t && !e.networks.length) && !(r && !e.types.length))
                }
            },
            netbanking: {
                properties: ["banks"],
                payment: ["bank"],
                groupedToIndividual: function(e) {
                    var n = be(e);
                    return delete n.banks, (e.banks || []).map((function(e) {
                        return p.assign({
                            bank: e
                        }, n)
                    }))
                },
                isValid: function(e) {
                    return m(e.banks) && e.banks.length > 0
                }
            },
            wallet: {
                properties: ["wallets"],
                payment: ["wallet"],
                groupedToIndividual: function(e) {
                    var n = be(e);
                    return delete n.wallets, (e.wallets || []).map((function(e) {
                        return p.assign({
                            wallet: e
                        }, n)
                    }))
                },
                isValid: function(e) {
                    return m(e.wallets) && e.wallets.length > 0
                }
            },
            upi: {
                properties: ni,
                payment: ["flow", "app", "token", "vpa"],
                groupedToIndividual: function(e, n) {
                    var t = [],
                        r = [],
                        a = [],
                        i = [],
                        o = fe(n, "tokens.items", []),
                        u = be(e);
                    if (ni.forEach((function(e) {
                            delete u[e]
                        })), e.flows && (t = e.flows), e.vpas && (a = e.vpas), e.apps && (r = e.apps), t.includes("collect") && a.length) {
                        var c = a.map((function(n) {
                            var t = p.assign({
                                vpa: n,
                                flow: "collect"
                            }, u);
                            if (e.token_id) {
                                var r = e.token_id;
                                o.find((function(e) {
                                    return e.id === r
                                })) && (t.token_id = r)
                            }
                            return t
                        }));
                        i = i.concat(c)
                    }
                    if (t.includes("intent") && r.length) {
                        var s = r.map((function(e) {
                            return p.assign({
                                app: e,
                                flow: "intent"
                            }, u)
                        }));
                        i = i.concat(s)
                    }
                    if (t.length > 0) {
                        var l = t.map((function(e) {
                            var n = p.assign({
                                flow: e
                            }, u);
                            if (!("intent" === e && r.length || "collect" === e && a.length)) return n
                        })).filter(m);
                        i = i.concat(l)
                    }
                    return i
                },
                getPaymentPayload: function(e, n, t) {
                    return "collect" === (n = Ja(e, n, t)).flow && (n.flow = "directpay", n.token && n.vpa && delete n.vpa), "qr" === n.flow && (n["_[upiqr]"] = 1, n.flow = "intent"), n.flow && (n["_[flow]"] = n.flow, delete n.flow), n.app && (n.upi_app = n.app, delete n.app), n
                },
                isValid: function(e) {
                    var n = m(e.flows),
                        t = m(e.apps);
                    if (!n || !e.flows.length) return !1;
                    if (t) {
                        if (!e.apps.length) return !1;
                        if (!n || !e.flows.includes("intent")) return !1
                    }
                    return !0
                }
            },
            cardless_emi: {
                properties: ["providers"],
                payment: ["provider"],
                groupedToIndividual: function(e) {
                    var n = be(e);
                    return delete n.providers, (e.providers || []).map((function(e) {
                        return p.assign({
                            provider: e
                        }, n)
                    }))
                },
                isValid: function(e) {
                    return m(e.providers) && e.providers.length > 0
                }
            },
            paylater: {
                properties: ["providers"],
                payment: ["provider"],
                groupedToIndividual: function(e) {
                    var n = be(e);
                    return delete n.providers, (e.providers || []).map((function(e) {
                        return p.assign({
                            provider: e
                        }, n)
                    }))
                },
                isValid: function(e) {
                    return m(e.providers) && e.providers.length > 0
                }
            },
            app: {
                properties: ["providers"],
                payment: ["provider"],
                groupedToIndividual: function(e) {
                    var n = be(e);
                    return delete n.providers, (e.providers || []).map((function(e) {
                        return p.assign({
                            provider: e
                        }, n)
                    }))
                },
                isValid: function(e) {
                    return m(e.providers) && e.providers.length > 0
                }
            },
            international: qa,
            intl_bank_transfer: qa
        };

    function ri(e) {
        var n = e.method,
            t = ti[n];
        if (!t) return !1;
        var r = p.keys(e);
        return t.properties.every((function(e) {
            return !r.includes(e)
        }))
    }
    ti.emi = ti.card, ti.credit_card = ti.card, ti.debit_card = ti.card, ti.upi_otm = ti.upi, ti.emandate = ti.netbanking, ["card", "upi", "netbanking", "wallet", "upi_otm", "gpay", "emi", "cardless_emi", "qr", "paylater", "paypal", "bank_transfer", "offline_challan", "nach", "app", "emandate", "cod", "international", "intl_bank_transfer"].forEach((function(e) {
        ti[e] || (ti[e] = {})
    })), we(ti, (function(e, n) {
        ti[n] = p.assign({
            getPaymentPayload: Ja,
            groupedToIndividual: Xa,
            isValid: Qa,
            properties: [],
            payment: []
        }, ti[n])
    }));
    var ai = Za(""),
        ii = Za("");
    Za("");
    var oi = Wa([ai, ii], (function(e) {
        var n = e[0],
            t = e[1];
        return t ? n + t : ""
    }));
    Za({});
    var ui = Za(""),
        ci = Za("");
    Wa([ui, ci], (function(e) {
        var n = e[0],
            t = e[1];
        return t ? n + t : ""
    })), ai.subscribe((function(e) {
        ui.set(e)
    })), ii.subscribe((function(e) {
        ci.set(e)
    })), Za(""), Za(""), Za(""), Za(""), Za(""), Za("netbanking");
    var si = Za(),
        li = Za(""),
        di = Wa(Za([]), (function(e) {
            return e.flatMap((function(e) {
                return e.instruments
            }))
        }));
    Za([]), Za([]), Za([]);
    var mi = Wa([di, Za(null)], (function(e) {
        var n = e[0],
            t = void 0 === n ? [] : n,
            r = e[1],
            a = void 0 === r ? null : r;
        return t.find((function(e) {
            return e.id === a
        }))
    }));
    Za(""), Wa(mi, (function(e) {
        return e && (ri(e) || function(e) {
            var n = ri(e),
                t = ["card", "emi"].includes(e.method);
            if ("emandate" === e.method) return !0;
            if (n) return !0;
            if (t) return !e.token_id;
            if ("upi" === e.method && e.flows) {
                if (e.flows.length > 1) return !0;
                if (e.flows.includes("omnichannel")) return !0;
                if (e.flows.includes("collect")) {
                    var r = e._ungrouped;
                    if (1 === r.length) {
                        var a = r[0],
                            i = a.flow,
                            o = a.vpa;
                        if ("collect" === i && o) return !1
                    }
                    return !0
                }
                if (e.flows.includes("intent") && !e.apps) return !0
            }
            return e._ungrouped.length > 1
        }(e)) ? e : null
    })), Wa(oi, (function(e) {
        return e && "+91" !== e && "+" !== e
    })), Za([]), Wa([oi], (function(e) {
        return e[0].startsWith("+91")
    }));
    var fi = ra.cdn,
        pi = {
            TRUSTLY: "trustly",
            POLI: "poli",
            SOFORT: "sofort",
            GIROPAY: "giropay"
        },
        hi = ra.cdn;

    function vi(e) {
        this.name = e, this._exists = !1, this.platform = "", this.bridge = {}, this.init()
    }

    function _i(e) {
        var n = e.doc,
            t = void 0 === n ? window.document : n,
            r = e.url,
            a = e.method,
            i = void 0 === a ? "post" : a,
            o = e.target,
            u = e.params,
            c = void 0 === u ? {} : u;
        if (c = wi(c), i && "get" === i.toLowerCase()) {
            var s = bi(r, c || "");
            o ? window.open(s, o) : t !== window.document ? t.location.assign(s) : window.location.assign(s)
        } else {
            var l = t.createElement("form");
            l.method = i, l.action = r, o && (l.target = o), yi({
                doc: t,
                form: l,
                data: c
            }), t.body.appendChild(l), l.submit()
        }
    }

    function yi(e) {
        var n = e.doc,
            t = void 0 === n ? window.document : n,
            r = e.form,
            a = e.data;
        if (pe(a))
            for (var i in a)
                if (a.hasOwnProperty(i)) {
                    var o = gi({
                        doc: t,
                        name: i,
                        value: a[i]
                    });
                    r.appendChild(o)
                }
    }

    function gi(e) {
        var n = e.doc,
            t = void 0 === n ? window.document : n,
            r = e.name,
            a = e.value,
            i = t.createElement("input");
        return i.type = "hidden", i.name = r, i.value = a, i
    }

    function bi(e, n) {
        return "object" == typeof n && null !== n && (n = function(e) {
            pe(e) || (e = {});
            var n = [];
            for (var t in e) e.hasOwnProperty(t) && n.push(S(t) + "=" + S(e[t]));
            return n.join("&")
        }(n)), n && (e += e.indexOf("?") > 0 ? "&" : "?", e += n), e
    }

    function wi(e) {
        var n = e;
        pe(n) || (n = {});
        var t = {};
        if (0 === p.keys(n).length) return {};
        return function e(n, r) {
            if (p(n) !== n) t[r] = n;
            else if (f.isArray(n)) {
                for (var a = n.length, i = 0; i < a; i++) e(n[i], r + "[" + i + "]");
                0 === a && (t[r] = [])
            } else {
                var o = !0;
                for (var u in n) o = !1, e(n[u], r ? r + "[" + u + "]" : u);
                o && r && (t[r] = {})
            }
        }(n, ""), t
    }
    X({
        google_pay: {
            code: "google_pay",
            logo: hi + "app/googlepay.svg",
            card_logo: hi + "card/googlepay.svg",
            verify_registration: !0,
            externalSDK: "googlepay",
            isCompatibleWithSDK: function(e) {
                return "android" === e.platform
            }
        },
        cred: {
            code: "cred",
            logo: hi + "checkout/cred.png",
            uri: "credpay",
            package_name: "com.dreamplug.androidapp",
            isCompatibleWithSDK: function(e) {
                var n = e.platform;
                return "android" === n || "ios" === n
            }
        }
    }, function() {
        var e = {};
        return p.keys(pi).forEach((function(n) {
            e[pi[n]] = {
                code: pi[n],
                logo: fi + "international/" + pi[n] + ".png",
                uri: "",
                package_name: "",
                isCompatibleWithSDK: function(e) {
                    var n = e.platform;
                    return "android" === n || "ios" === n
                }
            }
        })), e
    }()), vi.prototype = {
        init: function() {
            var e = this.name,
                n = window[e],
                t = ((window.webkit || {}).messageHandlers || {})[e];
            t ? (this._exists = !0, this.bridge = t, this.platform = "ios") : n && (this._exists = !0, this.bridge = n, this.platform = "android")
        },
        exists: function() {
            return this._exists
        },
        get: function(e) {
            if (this.exists())
                if ("android" === this.platform) {
                    if (sn(this.bridge[e])) return this.bridge[e]
                } else if ("ios" === this.platform) return this.bridge.postMessage
        },
        has: function(e) {
            return !(!this.exists() || !this.get(e))
        },
        callAndroid: function(e) {
            for (var n = arguments.length, t = new f(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
            t = t.map((function(e) {
                return "object" == typeof e ? JSON.stringify(e) : e
            }));
            var a = this.get(e);
            if (a) return a.apply(this.bridge, t)
        },
        callIos: function(e) {
            var n = this.get(e);
            if (n) try {
                var t = {
                        action: e
                    },
                    r = arguments.length <= 1 ? void 0 : arguments[1];
                return r && (t.body = r), n.call(this.bridge, t)
            } catch (e) {}
        },
        call: function(e) {
            for (var n = arguments.length, t = new f(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
            var a = this.get(e);
            t = [e].concat(t), a && (this.callAndroid.apply(this, t), this.callIos.apply(this, t))
        }
    };
    var ki = d.body,
        Ei = l.innerHeight,
        Si = l.pageYOffset,
        Ai = window.scrollBy,
        Ci = window.scrollTo,
        Ri = window.requestAnimationFrame,
        xi = d.querySelector.bind(d),
        Ii = d.querySelectorAll.bind(d);
    d.getElementById.bind(d), l.getComputedStyle.bind(l);
    var Di, Pi = function(e) {
        return "string" == typeof e ? xi(e) : e
    };

    function Ni(e) {
        if (!e.target && l !== l.parent) return l.Razorpay.sendMessage({
            event: "redirect",
            data: e
        });
        _i({
            url: e.url,
            params: e.content,
            method: e.method,
            target: e.target
        })
    }

    function Ti(e) {
        var n = {};
        return null == e || e.querySelectorAll("[name]").forEach((function(e) {
            n[e.name] = e.value
        })), n
    }

    function Mi(e) {
        ! function(e) {
            if (!l.requestAnimationFrame) return Ai(0, e);
            Di && w(Di);
            Di = g((function() {
                var n = Si,
                    t = y.min(n + e, Qn(ki) - Ei);
                e = t - n;
                var r = 0,
                    a = l.performance.now();

                function i(o) {
                    if ((r += (o - a) / 300) >= 1) return Ci(0, t);
                    var u = y.sin(Li * r / 2);
                    Ci(0, n + y.round(e * u)), a = o, Ri(i)
                }
                Ri(i)
            }), 100)
        }(e - Si)
    }
    var Li = y.PI;
    new vi("CheckoutBridge"), new vi("StorageBridge");
    var Oi = {};
    [{
        package_name: Qr,
        method: "upi"
    }, {
        package_name: "com.phonepe.app",
        method: "upi"
    }, {
        package_name: "cred",
        method: "app"
    }].forEach((function(e) {
        Oi[e.package_name] = !1
    }));
    var Bi, Fi, zi, Ki = (void 0 === Bi && (Bi = D.search), cn(Bi) ? (Fi = Bi.slice(1), zi = {}, Fi.split(/=|&/).forEach((function(e, n, t) {
            n % 2 && (zi[t[n - 1]] = A(e))
        })), zi) : {}),
        Ui = {
            all: [],
            filtered: []
        };

    function $i() {
        return fe(window, "webkit.messageHandlers.CheckoutBridge") ? {
            platform: "ios"
        } : {
            platform: Ki.platform || "web",
            library: "checkoutjs",
            version: (Ki.version || vt) + ""
        }
    }

    function ji(e) {
        return {
            "_[agent][platform]": $i().platform,
            "_[agent][device]": (null == e ? void 0 : e.cred) ? "desktop" !== Gr() ? "mobile" : "desktop" : Gr(),
            "_[agent][os]": Ir || Nr ? "iOS" : Pr ? "android" : Tr ? "windows" : Mr ? "linux" : Lr ? "macOS" : "other"
        }
    }

    function Hi(e, n) {
        return void 0 === e && (e = ""), void 0 === n && (n = !0), ["checkoutjs", "hosted"].includes(qt.props.library) && l.session_token && n ? function(e, n) {
            return void 0 === e && (e = ""), bi(ra.api + ra.version + "standard_checkout/" + e, {
                session_token: n
            })
        }(e, l.session_token) : ra.api + ra.version + e
    }
    var Gi = ["key", "order_id", "invoice_id", "subscription_id", "auth_link_id", "payment_link_id", "contact_id", "checkout_config_id"];
    var Yi, Vi, Zi, Wi, qi, Ji = {},
        Qi = "avoidPopup",
        Xi = "forceIframeFlow",
        eo = "onlyPhoneRequired",
        no = "forcePopupCustomCheckout",
        to = "disableWalletAmountCheck",
        ro = {
            wallet: {
                paytm: (Yi = {}, Yi["popupIframe"] = !0, Yi),
                paypal: (Vi = {}, Vi[to] = !0, Vi)
            },
            cardless_emi: {
                walnut369: (Zi = {}, Zi[Xi] = !0, Zi[eo] = !0, Zi[no] = !0, Zi)
            },
            app: {
                twid: (Wi = {}, Wi[no] = !0, Wi)
            },
            cod: ((qi = {})[Qi] = !0, qi)
        };

    function ao(e) {
        return e.reduce((function(e, n) {
            return e[n.name] = {
                enabled: n.enabled,
                loaded: n.loaded,
                pendingQ: null,
                config: n
            }, e
        }), {})
    }
    Za({}), Za({}), Za(""), Za("");
    var io = function() {};

    function oo(e, n) {
        var t, r, a, i = (n = n || {}).initial || [],
            o = n.max || 1 / 0,
            u = n.interval || 1e3,
            c = n.onEmpty || io,
            s = n.onPause || io;

        function l(n) {
            k(t);
            var r = i.splice(0, o);
            return r.length && e(r, i), i.length ? n ? l() : d() : (a = !1, c())
        }

        function d() {
            a = !0, t = b(l, u)
        }
        return i.length && d(), {
            flush: function(e) {
                void 0 === e && (e = !1), l(e)
            },
            resume: l,
            push: function(e) {
                return r = i.push(e), a || d(), r
            },
            size: function() {
                return i.length
            },
            pause: function(e) {
                void 0 === e && (e = !1), e && l(), k(t), a = !1, s(i)
            }
        }
    }
    var uo = {
        USER_ID_UPDATED: "userIdUpdated",
        ANON_ID_UPDATED: "anonymousIdUpdated"
    };

    function co(e, n, t, r) {
        void 0 === t && (t = {
            isImmediate: !1
        });
        var a, i = new _(_.now()).toISOString(),
            o = oe(oe({}, e), {
                originalTimestamp: i
            });
        (a = n.plugins, p.keys(a).filter((function(e) {
            var n;
            return !!(null === (n = a[e]) || void 0 === n ? void 0 : n.enabled)
        })).map((function(e) {
            return a[e]
        }))).forEach((function(e) {
            var n, a = null === (n = e.config) || void 0 === n ? void 0 : n[r];
            "function" == typeof a && ((null == e ? void 0 : e.loaded()) ? a(o, t) : function(e, n, t, r) {
                var a, i = null === (a = e.config) || void 0 === a ? void 0 : a[r];
                e.pendingQ || (e.pendingQ = oo((function(n) {
                    n.forEach((function(n) {
                        var r;
                        e.loaded() ? i && i(n, t) : null === (r = e.pendingQ) || void 0 === r || r.push(n)
                    }))
                }), {
                    interval: 1e3
                })), e.pendingQ.push(n)
            }(e, o, t, r))
        }))
    }

    function so() {
        var e = window.crypto || window.msCrypto;
        if (void 0 !== e && e.getRandomValues) {
            var n = new Uint16Array(8);
            e.getRandomValues(n), n[3] = 4095 & n[3] | 16384, n[4] = 16383 & n[4] | 32768;
            var t = function(e) {
                for (var n = e.toString(16); n.length < 4;) n = "0".concat(n);
                return n
            };
            return t(n[0]) + t(n[1]) + t(n[2]) + t(n[3]) + t(n[4]) + t(n[5]) + t(n[6]) + t(n[7])
        }
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
            var n = 16 * y.random() | 0;
            return ("x" === e ? n : 3 & n | 8).toString(16)
        }))
    }

    function lo(e, n, t) {
        e[n].forEach((function(e) {
            e(t)
        }))
    }
    var mo, fo = function() {
        function e(e) {
            var n, t, r, a, i = e.app,
                o = e.plugins,
                u = void 0 === o ? [] : o,
                c = {
                    locale: (n = I, t = n.language, r = n.languages, a = n.userLanguage, a || (r && r.length ? r[0] : t) || ""),
                    userAgent: I.userAgent,
                    referrer: d.referrer,
                    screen: {
                        height: window.screen.height,
                        width: window.screen.width,
                        availHeight: window.screen.availHeight,
                        availWidth: window.screen.availWidth,
                        innerHeight: window.innerHeight,
                        innerWidth: window.innerWidth
                    },
                    platform: Gr()
                };
            this.flattenedContext = ye(c), this.userIdKey = "".concat(i, "_user_id"), this.anonIdKey = "".concat(i, "_anon_id"), se.getItem(this.anonIdKey) || this.setAnonymousId(so()), this.state = {
                app: i,
                anonymousId: se.getItem(this.anonIdKey) || "",
                userId: se.getItem(this.userIdKey) || "",
                context: c,
                plugins: ao(u),
                subscriptions: p.keys(uo).reduce((function(e, n) {
                    return e[uo[n]] = [], e
                }), {})
            }, co({}, this.state, {}, "initialize")
        }
        return e.prototype.setAnonymousId = function(e) {
            se.setItem(this.anonIdKey, e), this.state && (this.state.anonymousId = e, lo(this.state.subscriptions, uo.ANON_ID_UPDATED, e))
        }, e.prototype.setUserId = function(e) {
            se.setItem(this.userIdKey, e), this.state && (this.state.userId = e, lo(this.state.subscriptions, uo.USER_ID_UPDATED, e))
        }, e.prototype.on = function(e, n) {
            p.values(uo).includes(e) && function(e, n, t) {
                e[n].push(t)
            }(this.state.subscriptions, e, n)
        }, e.prototype.setContext = function(e, n) {
            this.flattenedContext[e] = n
        }, e.prototype.track = function(e, n, t) {
            co({
                event: e,
                properties: n,
                userId: this.state.userId,
                anonymousId: this.state.anonymousId,
                context: ge(this.flattenedContext),
                type: "track"
            }, this.state, t, "track")
        }, e.prototype.identify = function(e, n, t) {
            this.setUserId(e), co({
                anonymousId: this.state.anonymousId,
                userId: e,
                traits: n,
                type: "identify"
            }, this.state, t, "identify")
        }, e.prototype.reset = function() {
            this.setAnonymousId(so()), this.setUserId("")
        }, e.prototype.getState = function() {
            return oe(oe({}, this.state), {
                context: ge(this.flattenedContext)
            })
        }, e
    }();

    function po(e) {
        var n = e.method,
            t = void 0 === n ? "post" : n,
            r = e.url,
            a = e.key,
            i = e.data,
            o = void 0 === i ? {} : i;
        try {
            return new Promise((function(e, n) {
                mt({
                    method: t,
                    url: r,
                    data: JSON.stringify(o),
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Basic ".concat(C("".concat(a, ":")))
                    },
                    callback: function(t) {
                        200 !== t.status_code && n(t), e(t)
                    }
                })
            }))
        } catch (e) {
            return Promise.reject()
        }
    }

    function ho(e) {
        var n = e.url,
            t = e.key,
            r = e.events,
            a = e.useBeacon;
        try {
            var i = !1;
            return a && (i = function(e) {
                var n = e.url,
                    t = e.key,
                    r = e.data;
                try {
                    var a = JSON.stringify(r),
                        i = new Blob([a], {
                            type: "text/plain"
                        });
                    return I.sendBeacon("".concat(n, "?writeKey=").concat(t), i)
                } catch (e) {
                    return !1
                }
            }({
                url: "".concat(n, "/beacon/v1/batch"),
                key: t,
                data: {
                    batch: r
                }
            })), i ? Promise.resolve() : po({
                url: "".concat(n, "/v1/batch"),
                key: t,
                data: {
                    batch: r
                }
            })
        } catch (e) {
            return Promise.reject()
        }
    }! function(e) {
        e.CONSOLE_PLUGIN = "CONSOLE_PLUGIN", e.RUDDERSTACK_PLUGIN = "RUDDERSTACK_PLUGIN"
    }(mo || (mo = {}));
    var vo = void 0 !== I && I && "function" == typeof I.sendBeacon;
    var _o, yo, go = "checkout.id",
        bo = "checkout.referrerType",
        wo = "checkout.integration.name",
        ko = "checkout.integration.type",
        Eo = "checkout.integration.version",
        So = "checkout.integration.parentVersion",
        Ao = "checkout.integration.platform",
        Co = "checkout.library",
        Ro = "checkout.order.id",
        xo = "checkout.version",
        Io = "locale",
        Do = "traits.contact",
        Po = "traits.email",
        No = "referrer",
        To = ra.api.startsWith("https://api.razorpay.com") || ra.api.startsWith("https://api-dark.razorpay.com"),
        Mo = To ? "https://rudderstack.razorpay.com" : "https://rudderstack.ext.dev.razorpay.in",
        Lo = To ? "2Fle0rY1hHoLCMetOdzYFs1RIJF" : "27TM2uVMCl4nm4d7gqR4tysvdU1";
    ! function(e) {
        e.INTEGRATION = "integration", e.RZP_APP = "rzp_app", e.EXTERNAL = "external"
    }(_o || (_o = {})),
    function(e) {
        e.WEB = "web", e.PLUGIN = "plugin", e.SDK = "sdk"
    }(yo || (yo = {}));
    var Oo, Bo, Fo, zo, Ko, Uo = new fo({
        app: "rzp_checkout",
        plugins: [{
            name: mo.CONSOLE_PLUGIN,
            track: function(e) {},
            identify: function(e) {},
            loaded: function() {
                return !0
            },
            enabled: !1
        }, oe(oe({}, (Oo = {
            domainUrl: Mo,
            key: Lo
        }, Bo = Oo.domainUrl, Fo = Oo.key, zo = null, Ko = !0, {
            name: mo.RUDDERSTACK_PLUGIN,
            initialize: function() {
                zo = oo((function(e) {
                    try {
                        var n = new _(_.now()).toISOString();
                        e = e.map((function(e) {
                            return oe(oe({}, "object" == typeof e ? e : null), {
                                sentAt: n
                            })
                        })), ho({
                            url: Bo,
                            key: Fo,
                            events: e,
                            useBeacon: Ko && vo
                        })
                    } catch (e) {}
                }), {
                    max: 10,
                    interval: 1e3
                }), window.addEventListener("beforeunload", (function() {
                    Ko = !0, null == zo || zo.flush(!0)
                })), window.addEventListener("offline", (function() {
                    null == zo || zo.pause()
                })), window.addEventListener("online", (function() {
                    null == zo || zo.resume()
                }))
            },
            track: function(e, n) {
                null == zo || zo.push(e), n.isImmediate && (null == zo || zo.flush())
            },
            identify: function(e) {
                ! function(e) {
                    var n = e.url,
                        t = e.key,
                        r = e.payload;
                    po({
                        url: "".concat(n, "/v1/identify"),
                        key: t,
                        data: r
                    })
                }({
                    url: Bo,
                    key: Fo,
                    payload: e
                })
            },
            loaded: function() {
                return !0
            },
            enabled: !0
        })), {
            enabled: !0
        })]
    });
    gt.subscribe("syncContext", (function(e) {
        var n, t;
        e.data && (n = e.data.key, t = e.data.value), n && Uo.setContext(n, t)
    })), gt.subscribe("syncAnonymousId", (function(e) {
        var n;
        (null === (n = e.data) || void 0 === n ? void 0 : n.anonymousId) && Uo.setAnonymousId(e.data.anonymousId)
    })), gt.subscribe("syncUserId", (function(e) {
        var n;
        (null === (n = e.data) || void 0 === n ? void 0 : n.userId) && Uo.setUserId(e.data.userId)
    }));
    var $o = {};

    function jo(e, n) {
        var t = (void 0 === n ? {
                skipEvents: !1
            } : n).skipEvents,
            r = p.keys(e),
            a = {};
        return r.forEach((function(n) {
            a[n] = function(e, n, t) {
                return function() {
                    for (var r = [], a = 0; a < arguments.length; a++) r[a] = arguments[a];
                    if (!t) {
                        var i = e[n],
                            o = r[0],
                            u = r[1];
                        if ("string" == typeof i) Uo.track(i, o, u);
                        else if (i.name) {
                            var c = i.name;
                            i.type && (c = "".concat(i.type, " ").concat(c), $o[i.type] = {
                                event: c
                            }), Uo.track(c, o, u)
                        }
                    }
                }
            }(e, n, t)
        })), a
    }
    var Ho, Go = {
            setContext: function(e, n, t) {
                void 0 === t && (t = !0), Uo.setContext(e, n), t && function(e, n) {
                    pt ? gt.publishToParent("syncContext", {
                        key: e,
                        value: n
                    }) : gt.sendMessage("syncContext", {
                        key: e,
                        value: n
                    })
                }(e, n)
            },
            getState: function() {
                return oe(oe({}, Uo.getState()), {
                    last: $o
                })
            },
            Identify: Uo.identify.bind(Uo),
            Reset: Uo.reset.bind(Uo),
            createTrackMethodForModule: jo
        },
        Yo = jo({
            TRIGGERED: {
                name: "triggered",
                type: ae
            }
        }),
        Vo = ra.cdn + "bank/";
    Ho = {
        ICIC_C: "ICICI Corporate",
        UTIB_C: "Axis Corporate",
        SBIN: "SBI",
        HDFC: "HDFC",
        ICIC: "ICICI",
        UTIB: "Axis",
        KKBK: "Kotak",
        YESB: "Yes",
        IBKL: "IDBI",
        BARB_R: "BOB",
        PUNB_R: "PNB",
        IOBA: "IOB",
        FDRL: "Federal",
        CORP: "Corporate",
        IDFB: "IDFC",
        INDB: "IndusInd",
        VIJB: "Vijaya Bank",
        BARB: "BOB",
        RATN: "RBL"
    }, p.entries(Ho).map((function(e) {
        return {
            name: e[1],
            code: e[0],
            logo: (n = e[0], "" + Vo + n.slice(0, 4) + ".gif")
        };
        var n
    }));
    var Zo = ([{
        code: "KKBK",
        name: "Kotak Mahindra Bank"
    }, {
        code: "KKBK_DC",
        name: "Kotak Debit Cards"
    }, {
        code: "HDFC_DC",
        name: "HDFC Debit Cards"
    }, {
        code: "HDFC",
        name: "HDFC Credit Cards"
    }, {
        code: "UTIB",
        name: "Axis Bank"
    }, {
        code: "INDB",
        name: "Indusind Bank"
    }, {
        code: "RATN",
        name: "RBL Bank"
    }, {
        code: "ICIC",
        name: "ICICI Bank"
    }, {
        code: "SCBL",
        name: "Standard Chartered Bank"
    }, {
        code: "YESB",
        name: "Yes Bank"
    }, {
        code: "AMEX",
        name: "American Express"
    }, {
        code: "SBIN",
        name: "State Bank of India"
    }, {
        code: "BARB",
        name: "Bank of Baroda"
    }, {
        code: "BAJAJ",
        name: "Bajaj Finserv"
    }, {
        code: "CITI",
        name: "CITI Bank"
    }, {
        code: "HSBC",
        name: "HSBC Credit Cards"
    }, {
        code: "FDRL",
        name: "Federal Bank"
    }, {
        code: "IDFB",
        name: "IDFC First Bank"
    }, {
        code: "onecard",
        name: "OneCard"
    }] || []).reduce((function(e, n) {
        return e[n.code] = n, e
    }), {});

    function Wo(e) {
        return Zo[e]
    }

    function qo(e) {
        void 0 === e && (e = {});
        var n = 1 / 0;
        return we(e, (function(e) {
            e.min_amount < n && (n = e.min_amount)
        })), n
    }
    var Jo = ra.cdn,
        Qo = Jo + "cardless_emi/",
        Xo = Jo + "cardless_emi-sq/",
        eu = {
            min_amount: 3e5,
            headless: !0,
            fee_bearer_customer: !0
        },
        nu = _e({
            walnut369: {
                name: "axio",
                fee_bearer_customer: !1,
                headless: !1,
                pushToFirst: !0,
                min_amount: 100
            },
            bajaj: {
                name: "Bajaj Finserv"
            },
            sezzle: {
                name: "Sezzle",
                headless: !1,
                fee_bearer_customer: !1,
                min_amount: 2e4
            },
            earlysalary: {
                name: "EarlySalary",
                fee_bearer_customer: !1
            },
            zestmoney: {
                name: "ZestMoney",
                min_amount: 9900,
                fee_bearer_customer: !1
            },
            flexmoney: {
                name: "Cardless EMI by InstaCred",
                headless: !1,
                fee_bearer_customer: !1
            },
            barb: {
                name: "Bank of Baroda Cardless EMI",
                headless: !1
            },
            fdrl: {
                name: "Federal Bank Cardless EMI",
                headless: !1
            },
            hdfc: {
                name: "HDFC Bank Cardless EMI",
                headless: !1
            },
            idfb: {
                name: "IDFC First Bank Cardless EMI",
                headless: !1
            },
            kkbk: {
                name: "Kotak Mahindra Bank Cardless EMI",
                headless: !1
            },
            icic: {
                name: "ICICI Bank Cardless EMI",
                headless: !1
            },
            hcin: {
                name: "Home Credit Ujjwal Card",
                headless: !1,
                min_amount: 5e4
            },
            onecard: {
                name: "OneCard"
            }
        }, (function(e, n) {
            return p.assign({}, eu, {
                code: n,
                logo: Qo + n + ".svg",
                sqLogo: Xo + n + ".svg"
            }, e)
        }));

    function tu(e, n) {
        var t = {};
        return n ? (we(n, (function(r, a) {
            n[a] && nu[a] && nu[a].min_amount <= e && (t[a] = nu[a] || {})
        })), t) : t
    }
    var ru = ra.cdn,
        au = ru + "paylater/",
        iu = ru + "paylater-sq/",
        ou = {
            min_amount: 3e5
        };
    _e({
        epaylater: {
            name: "ePayLater",
            display_name: "ePayLater"
        },
        getsimpl: {
            name: "Simpl",
            display_name: "Simpl"
        },
        icic: {
            name: "ICICI Bank PayLater",
            display_name: "ICICI"
        },
        hdfc: {
            name: "FlexiPay by HDFC Bank",
            display_name: "FlexiPay"
        },
        lazypay: {
            name: "LazyPay",
            display_name: "LazyPay"
        },
        kkbk: {
            name: "kkbk",
            display_name: "Kotak Mahindra Bank"
        }
    }, (function(e, n) {
        return p.assign({}, ou, {
            code: n,
            logo: au + n + ".svg",
            sqLogo: iu + n + ".svg"
        }, e)
    }));
    var uu = ra.cdn,
        cu = uu + "wallet/",
        su = uu + "wallet-sq/",
        lu = ["phonepe", "amazonpay", "mobikwik", "freecharge", "airtelmoney", "olamoney", "jiomoney", "paytm", "paypal"];
    var du, mu = ["mobikwik", "freecharge", "payumoney"],
        fu = _e({
            airtelmoney: ["Airtel Money", 32],
            amazonpay: ["Amazon Pay", 28],
            citrus: ["Citrus Wallet", 32],
            freecharge: ["Freecharge", 18],
            jiomoney: ["JioMoney", 68],
            mobikwik: ["Mobikwik", 20],
            olamoney: ["Ola Money (Postpaid + Wallet)", 22],
            paypal: ["PayPal", 20],
            paytm: ["Paytm", 18],
            payumoney: ["PayUMoney", 18],
            payzapp: ["PayZapp", 24],
            phonepe: ["PhonePe", 20],
            sbibuddy: ["SBI Buddy", 22],
            zeta: ["Zeta", 25],
            citibankrewards: ["Citibank Reward Points", 20],
            itzcash: ["Itz Cash", 20],
            paycash: ["PayCash", 20]
        }, (function(e, n) {
            return {
                power: -1 !== mu.indexOf(n),
                name: e[0],
                h: e[1],
                code: n,
                logo: cu + n + ".png",
                sqLogo: su + n + ".png"
            }
        }));

    function pu(e) {
        return e.type === du.literal
    }

    function hu(e) {
        return e.type === du.argument
    }

    function vu(e) {
        return e.type === du.number
    }

    function _u(e) {
        return e.type === du.date
    }

    function yu(e) {
        return e.type === du.time
    }

    function gu(e) {
        return e.type === du.select
    }

    function bu(e) {
        return e.type === du.plural
    }

    function wu(e) {
        return e.type === du.pound
    }

    function ku(e) {
        return !(!e || "object" != typeof e || 0 !== e.type)
    }

    function Eu(e) {
        return !(!e || "object" != typeof e || 1 !== e.type)
    }! function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound"
    }(du || (du = {}));
    var Su, Au = (Su = function(e, n) {
            return Su = p.setPrototypeOf || {
                __proto__: []
            }
            instanceof f && function(e, n) {
                e.__proto__ = n
            } || function(e, n) {
                for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t])
            }, Su(e, n)
        }, function(e, n) {
            function t() {
                this.constructor = e
            }
            Su(e, n), e.prototype = null === n ? p.create(n) : (t.prototype = n.prototype, new t)
        }),
        Cu = function() {
            return Cu = p.assign || function(e) {
                for (var n, t = 1, r = arguments.length; t < r; t++)
                    for (var a in n = arguments[t]) p.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                return e
            }, Cu.apply(this, arguments)
        },
        Ru = function(e) {
            function n(t, r, a, i) {
                var o = e.call(this) || this;
                return o.message = t, o.expected = r, o.found = a, o.location = i, o.name = "SyntaxError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(o, n), o
            }
            return Au(n, e), n.buildMessage = function(e, n) {
                function t(e) {
                    return e.charCodeAt(0).toString(16).toUpperCase()
                }

                function r(e) {
                    return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (function(e) {
                        return "\\x0" + t(e)
                    })).replace(/[\x10-\x1F\x7F-\x9F]/g, (function(e) {
                        return "\\x" + t(e)
                    }))
                }

                function a(e) {
                    return e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (function(e) {
                        return "\\x0" + t(e)
                    })).replace(/[\x10-\x1F\x7F-\x9F]/g, (function(e) {
                        return "\\x" + t(e)
                    }))
                }

                function i(e) {
                    switch (e.type) {
                        case "literal":
                            return '"' + r(e.text) + '"';
                        case "class":
                            var n = e.parts.map((function(e) {
                                return f.isArray(e) ? a(e[0]) + "-" + a(e[1]) : a(e)
                            }));
                            return "[" + (e.inverted ? "^" : "") + n + "]";
                        case "any":
                            return "any character";
                        case "end":
                            return "end of input";
                        case "other":
                            return e.description
                    }
                }
                return "Expected " + function(e) {
                    var n, t, r = e.map(i);
                    if (r.sort(), r.length > 0) {
                        for (n = 1, t = 1; n < r.length; n++) r[n - 1] !== r[n] && (r[t] = r[n], t++);
                        r.length = t
                    }
                    switch (r.length) {
                        case 1:
                            return r[0];
                        case 2:
                            return r[0] + " or " + r[1];
                        default:
                            return r.slice(0, -1).join(", ") + ", or " + r[r.length - 1]
                    }
                }(e) + " but " + (((o = n) ? '"' + r(o) + '"' : "end of input") + " found.");
                var o
            }, n
        }(Error);
    var xu = function(e, n) {
            n = void 0 !== n ? n : {};
            var t, r = {},
                a = {
                    start: Ne
                },
                i = Ne,
                o = Ce("#", !1),
                u = xe("argumentElement"),
                c = "{",
                s = Ce("{", !1),
                l = "}",
                d = Ce("}", !1),
                m = xe("numberSkeletonId"),
                f = /^['\/{}]/,
                p = Re(["'", "/", "{", "}"], !1, !1),
                h = {
                    type: "any"
                },
                v = xe("numberSkeletonTokenOption"),
                _ = Ce("/", !1),
                y = xe("numberSkeletonToken"),
                g = "::",
                b = Ce("::", !1),
                w = function(e) {
                    return tn.pop(), e.replace(/\s*$/, "")
                },
                k = ",",
                S = Ce(",", !1),
                A = "number",
                C = Ce("number", !1),
                R = function(e, n, t) {
                    return Cu({
                        type: "number" === n ? du.number : "date" === n ? du.date : du.time,
                        style: t && t[2],
                        value: e
                    }, an())
                },
                x = "'",
                I = Ce("'", !1),
                D = /^[^']/,
                P = Re(["'"], !0, !1),
                N = /^[^a-zA-Z'{}]/,
                T = Re([
                    ["a", "z"],
                    ["A", "Z"], "'", "{", "}"
                ], !0, !1),
                M = /^[a-zA-Z]/,
                L = Re([
                    ["a", "z"],
                    ["A", "Z"]
                ], !1, !1),
                O = "date",
                B = Ce("date", !1),
                F = "time",
                z = Ce("time", !1),
                K = "plural",
                U = Ce("plural", !1),
                $ = "selectordinal",
                j = Ce("selectordinal", !1),
                H = "offset:",
                G = Ce("offset:", !1),
                Y = "select",
                V = Ce("select", !1),
                Z = Ce("=", !1),
                W = xe("whitespace"),
                q = /^[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
                J = Re([
                    ["\t", "\r"], " ", "", " ", " ", [" ", " "], "\u2028", "\u2029", " ", " ", "　"
                ], !1, !1),
                Q = xe("syntax pattern"),
                X = /^[!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/,
                ee = Re([
                    ["!", "/"],
                    [":", "@"],
                    ["[", "^"], "`", ["{", "~"],
                    ["¡", "§"], "©", "«", "¬", "®", "°", "±", "¶", "»", "¿", "×", "÷", ["‐", "‧"],
                    ["‰", "‾"],
                    ["⁁", "⁓"],
                    ["⁕", "⁞"],
                    ["←", "⑟"],
                    ["─", "❵"],
                    ["➔", "⯿"],
                    ["⸀", "⹿"],
                    ["、", "〃"],
                    ["〈", "〠"], "〰", "﴾", "﴿", "﹅", "﹆"
                ], !1, !1),
                ne = xe("optional whitespace"),
                te = xe("number"),
                re = Ce("-", !1),
                ae = xe("double apostrophes"),
                ie = "''",
                oe = Ce("''", !1),
                ue = function(e) {
                    return !("{" === e || rn() && "#" === e || tn.length > 1 && "}" === e)
                },
                ce = Ce("\n", !1),
                se = xe("argNameOrNumber"),
                le = xe("argNumber"),
                de = Ce("0", !1),
                me = /^[1-9]/,
                fe = Re([
                    ["1", "9"]
                ], !1, !1),
                pe = /^[0-9]/,
                he = Re([
                    ["0", "9"]
                ], !1, !1),
                ve = xe("argName"),
                _e = 0,
                ye = 0,
                ge = [{
                    line: 1,
                    column: 1
                }],
                be = 0,
                we = [],
                ke = 0;
            if (void 0 !== n.startRule) {
                if (!(n.startRule in a)) throw new Error("Can't start parsing from rule \"" + n.startRule + '".');
                i = a[n.startRule]
            }

            function Ee() {
                return e.substring(ye, _e)
            }

            function Se() {
                return De(ye, _e)
            }

            function Ae(e, n) {
                throw function(e, n) {
                    return new Ru(e, [], "", n)
                }(e, n = void 0 !== n ? n : De(ye, _e))
            }

            function Ce(e, n) {
                return {
                    type: "literal",
                    text: e,
                    ignoreCase: n
                }
            }

            function Re(e, n, t) {
                return {
                    type: "class",
                    parts: e,
                    inverted: n,
                    ignoreCase: t
                }
            }

            function xe(e) {
                return {
                    type: "other",
                    description: e
                }
            }

            function Ie(n) {
                var t, r = ge[n];
                if (r) return r;
                for (t = n - 1; !ge[t];) t--;
                for (r = {
                        line: (r = ge[t]).line,
                        column: r.column
                    }; t < n;) 10 === e.charCodeAt(t) ? (r.line++, r.column = 1) : r.column++, t++;
                return ge[n] = r, r
            }

            function De(e, n) {
                var t = Ie(e),
                    r = Ie(n);
                return {
                    start: {
                        offset: e,
                        line: t.line,
                        column: t.column
                    },
                    end: {
                        offset: n,
                        line: r.line,
                        column: r.column
                    }
                }
            }

            function Pe(e) {
                _e < be || (_e > be && (be = _e, we = []), we.push(e))
            }

            function Ne() {
                return Te()
            }

            function Te() {
                var e, n;
                for (e = [], n = Me(); n !== r;) e.push(n), n = Me();
                return e
            }

            function Me() {
                var n;
                return (n = function() {
                    var e, n;
                    e = _e, (n = Le()) !== r && (ye = e, t = n, n = Cu({
                        type: du.literal,
                        value: t
                    }, an()));
                    var t;
                    return e = n
                }()) === r && (n = function() {
                    var n, t, a, i;
                    ke++, n = _e, 123 === e.charCodeAt(_e) ? (t = c, _e++) : (t = r, 0 === ke && Pe(s));
                    t !== r && Ge() !== r && (a = qe()) !== r && Ge() !== r ? (125 === e.charCodeAt(_e) ? (i = l, _e++) : (i = r, 0 === ke && Pe(d)), i !== r ? (ye = n, o = a, n = t = Cu({
                        type: du.argument,
                        value: o
                    }, an())) : (_e = n, n = r)) : (_e = n, n = r);
                    var o;
                    ke--, n === r && (t = r, 0 === ke && Pe(u));
                    return n
                }()) === r && (n = function() {
                    var n;
                    (n = function() {
                        var n, t, a, i, o, u, m, f, p;
                        n = _e, 123 === e.charCodeAt(_e) ? (t = c, _e++) : (t = r, 0 === ke && Pe(s));
                        t !== r && Ge() !== r && (a = qe()) !== r && Ge() !== r ? (44 === e.charCodeAt(_e) ? (i = k, _e++) : (i = r, 0 === ke && Pe(S)), i !== r && Ge() !== r ? (e.substr(_e, 6) === A ? (o = A, _e += 6) : (o = r, 0 === ke && Pe(C)), o !== r && Ge() !== r ? (u = _e, 44 === e.charCodeAt(_e) ? (m = k, _e++) : (m = r, 0 === ke && Pe(S)), m !== r && (f = Ge()) !== r ? (p = function() {
                            var n, t, a;
                            n = _e, e.substr(_e, 2) === g ? (t = g, _e += 2) : (t = r, 0 === ke && Pe(b));
                            t !== r ? (a = function() {
                                var e, n, t;
                                if (e = _e, n = [], (t = Fe()) !== r)
                                    for (; t !== r;) n.push(t), t = Fe();
                                else n = r;
                                n !== r && (ye = e, n = Cu({
                                    type: 0,
                                    tokens: n
                                }, an()));
                                return e = n
                            }(), a !== r ? (ye = n, n = t = a) : (_e = n, n = r)) : (_e = n, n = r);
                            n === r && (n = _e, ye = _e, tn.push("numberArgStyle"), (t = (t = !0) ? void 0 : r) !== r && (a = Le()) !== r ? (ye = n, n = t = w(a)) : (_e = n, n = r));
                            return n
                        }(), p !== r ? u = m = [m, f, p] : (_e = u, u = r)) : (_e = u, u = r), u === r && (u = null), u !== r && (m = Ge()) !== r ? (125 === e.charCodeAt(_e) ? (f = l, _e++) : (f = r, 0 === ke && Pe(d)), f !== r ? (ye = n, n = t = R(a, o, u)) : (_e = n, n = r)) : (_e = n, n = r)) : (_e = n, n = r)) : (_e = n, n = r)) : (_e = n, n = r);
                        return n
                    }()) === r && (n = function() {
                        var n, t, a, i, o, u, m, f, p;
                        n = _e, 123 === e.charCodeAt(_e) ? (t = c, _e++) : (t = r, 0 === ke && Pe(s));
                        t !== r && Ge() !== r && (a = qe()) !== r && Ge() !== r ? (44 === e.charCodeAt(_e) ? (i = k, _e++) : (i = r, 0 === ke && Pe(S)), i !== r && Ge() !== r ? (e.substr(_e, 4) === O ? (o = O, _e += 4) : (o = r, 0 === ke && Pe(B)), o === r && (e.substr(_e, 4) === F ? (o = F, _e += 4) : (o = r, 0 === ke && Pe(z))), o !== r && Ge() !== r ? (u = _e, 44 === e.charCodeAt(_e) ? (m = k, _e++) : (m = r, 0 === ke && Pe(S)), m !== r && (f = Ge()) !== r ? (p = function() {
                            var n, t, a;
                            n = _e, e.substr(_e, 2) === g ? (t = g, _e += 2) : (t = r, 0 === ke && Pe(b));
                            t !== r ? (a = function() {
                                var n, t, a, i;
                                n = _e, t = _e, a = [], (i = ze()) === r && (i = Ke());
                                if (i !== r)
                                    for (; i !== r;) a.push(i), (i = ze()) === r && (i = Ke());
                                else a = r;
                                t = a !== r ? e.substring(t, _e) : a;
                                t !== r && (ye = n, t = Cu({
                                    type: 1,
                                    pattern: t
                                }, an()));
                                return n = t
                            }(), a !== r ? (ye = n, n = t = a) : (_e = n, n = r)) : (_e = n, n = r);
                            n === r && (n = _e, ye = _e, tn.push("dateOrTimeArgStyle"), (t = (t = !0) ? void 0 : r) !== r && (a = Le()) !== r ? (ye = n, n = t = w(a)) : (_e = n, n = r));
                            return n
                        }(), p !== r ? u = m = [m, f, p] : (_e = u, u = r)) : (_e = u, u = r), u === r && (u = null), u !== r && (m = Ge()) !== r ? (125 === e.charCodeAt(_e) ? (f = l, _e++) : (f = r, 0 === ke && Pe(d)), f !== r ? (ye = n, n = t = R(a, o, u)) : (_e = n, n = r)) : (_e = n, n = r)) : (_e = n, n = r)) : (_e = n, n = r)) : (_e = n, n = r);
                        return n
                    }());
                    return n
                }()) === r && (n = function() {
                    var n, t, a, i, o, u, m, f, p, h, v;
                    n = _e, 123 === e.charCodeAt(_e) ? (t = c, _e++) : (t = r, 0 === ke && Pe(s));
                    if (t !== r)
                        if (Ge() !== r)
                            if ((a = qe()) !== r)
                                if (Ge() !== r)
                                    if (44 === e.charCodeAt(_e) ? (i = k, _e++) : (i = r, 0 === ke && Pe(S)), i !== r)
                                        if (Ge() !== r)
                                            if (e.substr(_e, 6) === K ? (o = K, _e += 6) : (o = r, 0 === ke && Pe(U)), o === r && (e.substr(_e, 13) === $ ? (o = $, _e += 13) : (o = r, 0 === ke && Pe(j))), o !== r)
                                                if (Ge() !== r)
                                                    if (44 === e.charCodeAt(_e) ? (u = k, _e++) : (u = r, 0 === ke && Pe(S)), u !== r)
                                                        if (Ge() !== r)
                                                            if (m = _e, e.substr(_e, 7) === H ? (f = H, _e += 7) : (f = r, 0 === ke && Pe(G)), f !== r && (p = Ge()) !== r && (h = Ye()) !== r ? m = f = [f, p, h] : (_e = m, m = r), m === r && (m = null), m !== r)
                                                                if ((f = Ge()) !== r) {
                                                                    if (p = [], (h = $e()) !== r)
                                                                        for (; h !== r;) p.push(h), h = $e();
                                                                    else p = r;
                                                                    p !== r && (h = Ge()) !== r ? (125 === e.charCodeAt(_e) ? (v = l, _e++) : (v = r, 0 === ke && Pe(d)), v !== r ? (ye = n, t = function(e, n, t, r) {
                                                                        return Cu({
                                                                            type: du.plural,
                                                                            pluralType: "plural" === n ? "cardinal" : "ordinal",
                                                                            value: e,
                                                                            offset: t ? t[2] : 0,
                                                                            options: r.reduce((function(e, n) {
                                                                                var t = n.id,
                                                                                    r = n.value,
                                                                                    a = n.location;
                                                                                return t in e && Ae('Duplicate option "' + t + '" in plural element: "' + Ee() + '"', Se()), e[t] = {
                                                                                    value: r,
                                                                                    location: a
                                                                                }, e
                                                                            }), {})
                                                                        }, an())
                                                                    }(a, o, m, p), n = t) : (_e = n, n = r)) : (_e = n, n = r)
                                                                } else _e = n, n = r;
                    else _e = n, n = r;
                    else _e = n, n = r;
                    else _e = n, n = r;
                    else _e = n, n = r;
                    else _e = n, n = r;
                    else _e = n, n = r;
                    else _e = n, n = r;
                    else _e = n, n = r;
                    else _e = n, n = r;
                    else _e = n, n = r;
                    else _e = n, n = r;
                    return n
                }(), n === r && (n = function() {
                    var n, t, a, i, o, u, m, f, p;
                    n = _e, 123 === e.charCodeAt(_e) ? (t = c, _e++) : (t = r, 0 === ke && Pe(s));
                    if (t !== r)
                        if (Ge() !== r)
                            if ((a = qe()) !== r)
                                if (Ge() !== r)
                                    if (44 === e.charCodeAt(_e) ? (i = k, _e++) : (i = r, 0 === ke && Pe(S)), i !== r)
                                        if (Ge() !== r)
                                            if (e.substr(_e, 6) === Y ? (o = Y, _e += 6) : (o = r, 0 === ke && Pe(V)), o !== r)
                                                if (Ge() !== r)
                                                    if (44 === e.charCodeAt(_e) ? (u = k, _e++) : (u = r, 0 === ke && Pe(S)), u !== r)
                                                        if (Ge() !== r) {
                                                            if (m = [], (f = Ue()) !== r)
                                                                for (; f !== r;) m.push(f), f = Ue();
                                                            else m = r;
                                                            m !== r && (f = Ge()) !== r ? (125 === e.charCodeAt(_e) ? (p = l, _e++) : (p = r, 0 === ke && Pe(d)), p !== r ? (ye = n, t = function(e, n) {
                                                                return Cu({
                                                                    type: du.select,
                                                                    value: e,
                                                                    options: n.reduce((function(e, n) {
                                                                        var t = n.id,
                                                                            r = n.value,
                                                                            a = n.location;
                                                                        return t in e && Ae('Duplicate option "' + t + '" in select element: "' + Ee() + '"', Se()), e[t] = {
                                                                            value: r,
                                                                            location: a
                                                                        }, e
                                                                    }), {})
                                                                }, an())
                                                            }(a, m), n = t) : (_e = n, n = r)) : (_e = n, n = r)
                                                        } else _e = n, n = r;
                    else _e = n, n = r;
                    else _e = n, n = r;
                    else _e = n, n = r;
                    else _e = n, n = r;
                    else _e = n, n = r;
                    else _e = n, n = r;
                    else _e = n, n = r;
                    else _e = n, n = r;
                    else _e = n, n = r;
                    return n
                }(), n === r && (n = function() {
                    var n, t;
                    n = _e, 35 === e.charCodeAt(_e) ? (t = "#", _e++) : (t = r, 0 === ke && Pe(o));
                    t !== r && (ye = n, t = Cu({
                        type: du.pound
                    }, an()));
                    return n = t
                }()))), n
            }

            function Le() {
                var e, n, t;
                if (e = _e, n = [], (t = Ve()) === r && (t = Ze()) === r && (t = We()), t !== r)
                    for (; t !== r;) n.push(t), (t = Ve()) === r && (t = Ze()) === r && (t = We());
                else n = r;
                return n !== r && (ye = e, n = n.join("")), e = n
            }

            function Oe() {
                var n, t, a, i, o;
                if (ke++, n = _e, t = [], a = _e, i = _e, ke++, (o = je()) === r && (f.test(e.charAt(_e)) ? (o = e.charAt(_e), _e++) : (o = r, 0 === ke && Pe(p))), ke--, o === r ? i = void 0 : (_e = i, i = r), i !== r ? (e.length > _e ? (o = e.charAt(_e), _e++) : (o = r, 0 === ke && Pe(h)), o !== r ? a = i = [i, o] : (_e = a, a = r)) : (_e = a, a = r), a !== r)
                    for (; a !== r;) t.push(a), a = _e, i = _e, ke++, (o = je()) === r && (f.test(e.charAt(_e)) ? (o = e.charAt(_e), _e++) : (o = r, 0 === ke && Pe(p))), ke--, o === r ? i = void 0 : (_e = i, i = r), i !== r ? (e.length > _e ? (o = e.charAt(_e), _e++) : (o = r, 0 === ke && Pe(h)), o !== r ? a = i = [i, o] : (_e = a, a = r)) : (_e = a, a = r);
                else t = r;
                return n = t !== r ? e.substring(n, _e) : t, ke--, n === r && (t = r, 0 === ke && Pe(m)), n
            }

            function Be() {
                var n, t, a;
                return ke++, n = _e, 47 === e.charCodeAt(_e) ? (t = "/", _e++) : (t = r, 0 === ke && Pe(_)), t !== r && (a = Oe()) !== r ? (ye = n, n = t = a) : (_e = n, n = r), ke--, n === r && (t = r, 0 === ke && Pe(v)), n
            }

            function Fe() {
                var e, n, t, a, i;
                if (ke++, e = _e, (n = Ge()) !== r)
                    if ((t = Oe()) !== r) {
                        for (a = [], i = Be(); i !== r;) a.push(i), i = Be();
                        a !== r ? (ye = e, n = function(e, n) {
                            return {
                                stem: e,
                                options: n
                            }
                        }(t, a), e = n) : (_e = e, e = r)
                    } else _e = e, e = r;
                else _e = e, e = r;
                return ke--, e === r && (n = r, 0 === ke && Pe(y)), e
            }

            function ze() {
                var n, t, a, i;
                if (n = _e, 39 === e.charCodeAt(_e) ? (t = x, _e++) : (t = r, 0 === ke && Pe(I)), t !== r) {
                    if (a = [], (i = Ve()) === r && (D.test(e.charAt(_e)) ? (i = e.charAt(_e), _e++) : (i = r, 0 === ke && Pe(P))), i !== r)
                        for (; i !== r;) a.push(i), (i = Ve()) === r && (D.test(e.charAt(_e)) ? (i = e.charAt(_e), _e++) : (i = r, 0 === ke && Pe(P)));
                    else a = r;
                    a !== r ? (39 === e.charCodeAt(_e) ? (i = x, _e++) : (i = r, 0 === ke && Pe(I)), i !== r ? n = t = [t, a, i] : (_e = n, n = r)) : (_e = n, n = r)
                } else _e = n, n = r;
                if (n === r)
                    if (n = [], (t = Ve()) === r && (N.test(e.charAt(_e)) ? (t = e.charAt(_e), _e++) : (t = r, 0 === ke && Pe(T))), t !== r)
                        for (; t !== r;) n.push(t), (t = Ve()) === r && (N.test(e.charAt(_e)) ? (t = e.charAt(_e), _e++) : (t = r, 0 === ke && Pe(T)));
                    else n = r;
                return n
            }

            function Ke() {
                var n, t;
                if (n = [], M.test(e.charAt(_e)) ? (t = e.charAt(_e), _e++) : (t = r, 0 === ke && Pe(L)), t !== r)
                    for (; t !== r;) n.push(t), M.test(e.charAt(_e)) ? (t = e.charAt(_e), _e++) : (t = r, 0 === ke && Pe(L));
                else n = r;
                return n
            }

            function Ue() {
                var n, t, a, i, o, u, m;
                return n = _e, Ge() !== r && (t = Qe()) !== r && Ge() !== r ? (123 === e.charCodeAt(_e) ? (a = c, _e++) : (a = r, 0 === ke && Pe(s)), a !== r ? (ye = _e, tn.push("select"), (!0 ? void 0 : r) !== r && (i = Te()) !== r ? (125 === e.charCodeAt(_e) ? (o = l, _e++) : (o = r, 0 === ke && Pe(d)), o !== r ? (ye = n, u = t, m = i, tn.pop(), n = Cu({
                    id: u,
                    value: m
                }, an())) : (_e = n, n = r)) : (_e = n, n = r)) : (_e = n, n = r)) : (_e = n, n = r), n
            }

            function $e() {
                var n, t, a, i, o, u, m;
                return n = _e, Ge() !== r ? (t = function() {
                    var n, t, a, i;
                    return n = _e, t = _e, 61 === e.charCodeAt(_e) ? (a = "=", _e++) : (a = r, 0 === ke && Pe(Z)), a !== r && (i = Ye()) !== r ? t = a = [a, i] : (_e = t, t = r), (n = t !== r ? e.substring(n, _e) : t) === r && (n = Qe()), n
                }(), t !== r && Ge() !== r ? (123 === e.charCodeAt(_e) ? (a = c, _e++) : (a = r, 0 === ke && Pe(s)), a !== r ? (ye = _e, tn.push("plural"), (!0 ? void 0 : r) !== r && (i = Te()) !== r ? (125 === e.charCodeAt(_e) ? (o = l, _e++) : (o = r, 0 === ke && Pe(d)), o !== r ? (ye = n, u = t, m = i, tn.pop(), n = Cu({
                    id: u,
                    value: m
                }, an())) : (_e = n, n = r)) : (_e = n, n = r)) : (_e = n, n = r)) : (_e = n, n = r)) : (_e = n, n = r), n
            }

            function je() {
                var n;
                return ke++, q.test(e.charAt(_e)) ? (n = e.charAt(_e), _e++) : (n = r, 0 === ke && Pe(J)), ke--, n === r && 0 === ke && Pe(W), n
            }

            function He() {
                var n;
                return ke++, X.test(e.charAt(_e)) ? (n = e.charAt(_e), _e++) : (n = r, 0 === ke && Pe(ee)), ke--, n === r && 0 === ke && Pe(Q), n
            }

            function Ge() {
                var n, t, a;
                for (ke++, n = _e, t = [], a = je(); a !== r;) t.push(a), a = je();
                return n = t !== r ? e.substring(n, _e) : t, ke--, n === r && (t = r, 0 === ke && Pe(ne)), n
            }

            function Ye() {
                var n, t, a, i, o;
                return ke++, n = _e, 45 === e.charCodeAt(_e) ? (t = "-", _e++) : (t = r, 0 === ke && Pe(re)), t === r && (t = null), t !== r && (a = Je()) !== r ? (ye = n, i = t, n = t = (o = a) ? i ? -o : o : 0) : (_e = n, n = r), ke--, n === r && (t = r, 0 === ke && Pe(te)), n
            }

            function Ve() {
                var n, t;
                return ke++, n = _e, e.substr(_e, 2) === ie ? (t = ie, _e += 2) : (t = r, 0 === ke && Pe(oe)), t !== r && (ye = n, t = "'"), ke--, (n = t) === r && (t = r, 0 === ke && Pe(ae)), n
            }

            function Ze() {
                var n, t, a, i, o, u;
                if (n = _e, 39 === e.charCodeAt(_e) ? (t = x, _e++) : (t = r, 0 === ke && Pe(I)), t !== r)
                    if (a = function() {
                            var n, t, a, i;
                            n = _e, t = _e, e.length > _e ? (a = e.charAt(_e), _e++) : (a = r, 0 === ke && Pe(h));
                            a !== r ? (ye = _e, i = function(e) {
                                return "{" === e || "}" === e || rn() && "#" === e
                            }(a), (i = i ? void 0 : r) !== r ? t = a = [a, i] : (_e = t, t = r)) : (_e = t, t = r);
                            n = t !== r ? e.substring(n, _e) : t;
                            return n
                        }(), a !== r) {
                        for (i = _e, o = [], e.substr(_e, 2) === ie ? (u = ie, _e += 2) : (u = r, 0 === ke && Pe(oe)), u === r && (D.test(e.charAt(_e)) ? (u = e.charAt(_e), _e++) : (u = r, 0 === ke && Pe(P))); u !== r;) o.push(u), e.substr(_e, 2) === ie ? (u = ie, _e += 2) : (u = r, 0 === ke && Pe(oe)), u === r && (D.test(e.charAt(_e)) ? (u = e.charAt(_e), _e++) : (u = r, 0 === ke && Pe(P)));
                        (i = o !== r ? e.substring(i, _e) : o) !== r ? (39 === e.charCodeAt(_e) ? (o = x, _e++) : (o = r, 0 === ke && Pe(I)), o === r && (o = null), o !== r ? (ye = n, n = t = a + i.replace("''", "'")) : (_e = n, n = r)) : (_e = n, n = r)
                    } else _e = n, n = r;
                else _e = n, n = r;
                return n
            }

            function We() {
                var n, t, a, i;
                return n = _e, t = _e, e.length > _e ? (a = e.charAt(_e), _e++) : (a = r, 0 === ke && Pe(h)), a !== r ? (ye = _e, (i = (i = ue(a)) ? void 0 : r) !== r ? t = a = [a, i] : (_e = t, t = r)) : (_e = t, t = r), t === r && (10 === e.charCodeAt(_e) ? (t = "\n", _e++) : (t = r, 0 === ke && Pe(ce))), n = t !== r ? e.substring(n, _e) : t
            }

            function qe() {
                var n, t;
                return ke++, n = _e, (t = Je()) === r && (t = Qe()), n = t !== r ? e.substring(n, _e) : t, ke--, n === r && (t = r, 0 === ke && Pe(se)), n
            }

            function Je() {
                var n, t, a, i, o;
                if (ke++, n = _e, 48 === e.charCodeAt(_e) ? (t = "0", _e++) : (t = r, 0 === ke && Pe(de)), t !== r && (ye = n, t = 0), (n = t) === r) {
                    if (n = _e, t = _e, me.test(e.charAt(_e)) ? (a = e.charAt(_e), _e++) : (a = r, 0 === ke && Pe(fe)), a !== r) {
                        for (i = [], pe.test(e.charAt(_e)) ? (o = e.charAt(_e), _e++) : (o = r, 0 === ke && Pe(he)); o !== r;) i.push(o), pe.test(e.charAt(_e)) ? (o = e.charAt(_e), _e++) : (o = r, 0 === ke && Pe(he));
                        i !== r ? t = a = [a, i] : (_e = t, t = r)
                    } else _e = t, t = r;
                    t !== r && (ye = n, t = E(t.join(""), 10)), n = t
                }
                return ke--, n === r && (t = r, 0 === ke && Pe(le)), n
            }

            function Qe() {
                var n, t, a, i, o;
                if (ke++, n = _e, t = [], a = _e, i = _e, ke++, (o = je()) === r && (o = He()), ke--, o === r ? i = void 0 : (_e = i, i = r), i !== r ? (e.length > _e ? (o = e.charAt(_e), _e++) : (o = r, 0 === ke && Pe(h)), o !== r ? a = i = [i, o] : (_e = a, a = r)) : (_e = a, a = r), a !== r)
                    for (; a !== r;) t.push(a), a = _e, i = _e, ke++, (o = je()) === r && (o = He()), ke--, o === r ? i = void 0 : (_e = i, i = r), i !== r ? (e.length > _e ? (o = e.charAt(_e), _e++) : (o = r, 0 === ke && Pe(h)), o !== r ? a = i = [i, o] : (_e = a, a = r)) : (_e = a, a = r);
                else t = r;
                return n = t !== r ? e.substring(n, _e) : t, ke--, n === r && (t = r, 0 === ke && Pe(ve)), n
            }
            var Xe, en, nn, tn = ["root"];

            function rn() {
                return "plural" === tn[tn.length - 1]
            }

            function an() {
                return n && n.captureLocation ? {
                    location: Se()
                } : {}
            }
            if ((t = i()) !== r && _e === e.length) return t;
            throw t !== r && _e < e.length && Pe({
                type: "end"
            }), Xe = we, en = be < e.length ? e.charAt(be) : null, nn = be < e.length ? De(be, be + 1) : De(be, be), new Ru(Ru.buildMessage(Xe, en), Xe, en, nn)
        },
        Iu = function() {
            for (var e = 0, n = 0, t = arguments.length; n < t; n++) e += arguments[n].length;
            var r = f(e),
                a = 0;
            for (n = 0; n < t; n++)
                for (var i = arguments[n], o = 0, u = i.length; o < u; o++, a++) r[a] = i[o];
            return r
        },
        Du = /(^|[^\\])#/g;

    function Pu(e) {
        e.forEach((function(e) {
            (bu(e) || gu(e)) && p.keys(e.options).forEach((function(n) {
                for (var t, r = e.options[n], a = -1, i = void 0, o = 0; o < r.value.length; o++) {
                    var u = r.value[o];
                    if (pu(u) && Du.test(u.value)) {
                        a = o, i = u;
                        break
                    }
                }
                if (i) {
                    var c = i.value.replace(Du, "$1{" + e.value + ", number}"),
                        s = xu(c);
                    (t = r.value).splice.apply(t, Iu([a, 1], s))
                }
                Pu(r.value)
            }))
        }))
    }
    var Nu = function() {
            return Nu = p.assign || function(e) {
                for (var n, t = 1, r = arguments.length; t < r; t++)
                    for (var a in n = arguments[t]) p.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                return e
            }, Nu.apply(this, arguments)
        },
        Tu = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

    function Mu(e) {
        var n = {};
        return e.replace(Tu, (function(e) {
            var t = e.length;
            switch (e[0]) {
                case "G":
                    n.era = 4 === t ? "long" : 5 === t ? "narrow" : "short";
                    break;
                case "y":
                    n.year = 2 === t ? "2-digit" : "numeric";
                    break;
                case "Y":
                case "u":
                case "U":
                case "r":
                    throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
                case "q":
                case "Q":
                    throw new RangeError("`q/Q` (quarter) patterns are not supported");
                case "M":
                case "L":
                    n.month = ["numeric", "2-digit", "short", "long", "narrow"][t - 1];
                    break;
                case "w":
                case "W":
                    throw new RangeError("`w/W` (week) patterns are not supported");
                case "d":
                    n.day = ["numeric", "2-digit"][t - 1];
                    break;
                case "D":
                case "F":
                case "g":
                    throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
                case "E":
                    n.weekday = 4 === t ? "short" : 5 === t ? "narrow" : "short";
                    break;
                case "e":
                    if (t < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
                    n.weekday = ["short", "long", "narrow", "short"][t - 4];
                    break;
                case "c":
                    if (t < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
                    n.weekday = ["short", "long", "narrow", "short"][t - 4];
                    break;
                case "a":
                    n.hour12 = !0;
                    break;
                case "b":
                case "B":
                    throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
                case "h":
                    n.hourCycle = "h12", n.hour = ["numeric", "2-digit"][t - 1];
                    break;
                case "H":
                    n.hourCycle = "h23", n.hour = ["numeric", "2-digit"][t - 1];
                    break;
                case "K":
                    n.hourCycle = "h11", n.hour = ["numeric", "2-digit"][t - 1];
                    break;
                case "k":
                    n.hourCycle = "h24", n.hour = ["numeric", "2-digit"][t - 1];
                    break;
                case "j":
                case "J":
                case "C":
                    throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
                case "m":
                    n.minute = ["numeric", "2-digit"][t - 1];
                    break;
                case "s":
                    n.second = ["numeric", "2-digit"][t - 1];
                    break;
                case "S":
                case "A":
                    throw new RangeError("`S/A` (second) pattenrs are not supported, use `s` instead");
                case "z":
                    n.timeZoneName = t < 4 ? "short" : "long";
                    break;
                case "Z":
                case "O":
                case "v":
                case "V":
                case "X":
                case "x":
                    throw new RangeError("`Z/O/v/V/X/x` (timeZone) pattenrs are not supported, use `z` instead")
            }
            return ""
        })), n
    }
    var Lu = /^\.(?:(0+)(\+|#+)?)?$/g,
        Ou = /^(@+)?(\+|#+)?$/g;

    function Bu(e) {
        var n = {};
        return e.replace(Ou, (function(e, t, r) {
            return "string" != typeof r ? (n.minimumSignificantDigits = t.length, n.maximumSignificantDigits = t.length) : "+" === r ? n.minimumSignificantDigits = t.length : "#" === t[0] ? n.maximumSignificantDigits = t.length : (n.minimumSignificantDigits = t.length, n.maximumSignificantDigits = t.length + ("string" == typeof r ? r.length : 0)), ""
        })), n
    }

    function Fu(e) {
        switch (e) {
            case "sign-auto":
                return {
                    signDisplay: "auto"
                };
            case "sign-accounting":
                return {
                    currencySign: "accounting"
                };
            case "sign-always":
                return {
                    signDisplay: "always"
                };
            case "sign-accounting-always":
                return {
                    signDisplay: "always",
                    currencySign: "accounting"
                };
            case "sign-except-zero":
                return {
                    signDisplay: "exceptZero"
                };
            case "sign-accounting-except-zero":
                return {
                    signDisplay: "exceptZero",
                    currencySign: "accounting"
                };
            case "sign-never":
                return {
                    signDisplay: "never"
                }
        }
    }

    function zu(e) {
        var n = Fu(e);
        return n || {}
    }

    function Ku(e) {
        for (var n = {}, t = 0, r = e; t < r.length; t++) {
            var a = r[t];
            switch (a.stem) {
                case "percent":
                    n.style = "percent";
                    continue;
                case "currency":
                    n.style = "currency", n.currency = a.options[0];
                    continue;
                case "group-off":
                    n.useGrouping = !1;
                    continue;
                case "precision-integer":
                    n.maximumFractionDigits = 0;
                    continue;
                case "measure-unit":
                    n.style = "unit", n.unit = a.options[0].replace(/^(.*?)-/, "");
                    continue;
                case "compact-short":
                    n.notation = "compact", n.compactDisplay = "short";
                    continue;
                case "compact-long":
                    n.notation = "compact", n.compactDisplay = "long";
                    continue;
                case "scientific":
                    n = Nu(Nu(Nu({}, n), {
                        notation: "scientific"
                    }), a.options.reduce((function(e, n) {
                        return Nu(Nu({}, e), zu(n))
                    }), {}));
                    continue;
                case "engineering":
                    n = Nu(Nu(Nu({}, n), {
                        notation: "engineering"
                    }), a.options.reduce((function(e, n) {
                        return Nu(Nu({}, e), zu(n))
                    }), {}));
                    continue;
                case "notation-simple":
                    n.notation = "standard";
                    continue;
                case "unit-width-narrow":
                    n.currencyDisplay = "narrowSymbol", n.unitDisplay = "narrow";
                    continue;
                case "unit-width-short":
                    n.currencyDisplay = "code", n.unitDisplay = "short";
                    continue;
                case "unit-width-full-name":
                    n.currencyDisplay = "name", n.unitDisplay = "long";
                    continue;
                case "unit-width-iso-code":
                    n.currencyDisplay = "symbol";
                    continue
            }
            if (Lu.test(a.stem)) {
                if (a.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
                a.stem.replace(Lu, (function(e, t, r) {
                    return "." === e ? n.maximumFractionDigits = 0 : "+" === r ? n.minimumFractionDigits = r.length : "#" === t[0] ? n.maximumFractionDigits = t.length : (n.minimumFractionDigits = t.length, n.maximumFractionDigits = t.length + ("string" == typeof r ? r.length : 0)), ""
                })), a.options.length && (n = Nu(Nu({}, n), Bu(a.options[0])))
            } else if (Ou.test(a.stem)) n = Nu(Nu({}, n), Bu(a.stem));
            else {
                var i = Fu(a.stem);
                i && (n = Nu(Nu({}, n), i))
            }
        }
        return n
    }

    function Uu(e, n) {
        var t = xu(e, n);
        return n && !1 === n.normalizeHashtagInPlural || Pu(t), t
    }
    var $u = function() {
        for (var e = 0, n = 0, t = arguments.length; n < t; n++) e += arguments[n].length;
        var r = f(e),
            a = 0;
        for (n = 0; n < t; n++)
            for (var i = arguments[n], o = 0, u = i.length; o < u; o++, a++) r[a] = i[o];
        return r
    };

    function ju(e) {
        return JSON.stringify(e.map((function(e) {
            return e && "object" == typeof e ? function(e) {
                return p.keys(e).sort().map((function(n) {
                    var t;
                    return (t = {})[n] = e[n], t
                }))
            }(e) : e
        })))
    }
    var Hu, Gu = function(e, n) {
            return void 0 === n && (n = {}),
                function() {
                    for (var t, r = [], a = 0; a < arguments.length; a++) r[a] = arguments[a];
                    var i = ju(r),
                        o = i && n[i];
                    return o || (o = new((t = e).bind.apply(t, $u([void 0], r))), i && (n[i] = o)), o
                }
        },
        Yu = function() {
            var e = function(n, t) {
                return e = p.setPrototypeOf || {
                    __proto__: []
                }
                instanceof f && function(e, n) {
                    e.__proto__ = n
                } || function(e, n) {
                    for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t])
                }, e(n, t)
            };
            return function(n, t) {
                function r() {
                    this.constructor = n
                }
                e(n, t), n.prototype = null === t ? p.create(t) : (r.prototype = t.prototype, new r)
            }
        }(),
        Vu = function() {
            for (var e = 0, n = 0, t = arguments.length; n < t; n++) e += arguments[n].length;
            var r = f(e),
                a = 0;
            for (n = 0; n < t; n++)
                for (var i = arguments[n], o = 0, u = i.length; o < u; o++, a++) r[a] = i[o];
            return r
        },
        Zu = function(e) {
            function n(n, t) {
                var r = e.call(this, n) || this;
                return r.variableId = t, r
            }
            return Yu(n, e), n
        }(Error);

    function Wu(e, n, t, r, a, i, o) {
        if (1 === e.length && pu(e[0])) return [{
            type: 0,
            value: e[0].value
        }];
        for (var u, c = [], s = 0, l = e; s < l.length; s++) {
            var d = l[s];
            if (pu(d)) c.push({
                type: 0,
                value: d.value
            });
            else if (wu(d)) "number" == typeof i && c.push({
                type: 0,
                value: t.getNumberFormat(n).format(i)
            });
            else {
                var m = d.value;
                if (!a || !(m in a)) throw new Zu('The intl string context variable "' + m + '" was not provided to the string "' + o + '"');
                var f = a[m];
                if (hu(d)) f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? h(f) : ""), c.push({
                    type: 1,
                    value: f
                });
                else if (_u(d)) {
                    var v = "string" == typeof d.style ? r.date[d.style] : void 0;
                    c.push({
                        type: 0,
                        value: t.getDateTimeFormat(n, v).format(f)
                    })
                } else if (yu(d)) {
                    v = "string" == typeof d.style ? r.time[d.style] : Eu(d.style) ? Mu(d.style.pattern) : void 0;
                    c.push({
                        type: 0,
                        value: t.getDateTimeFormat(n, v).format(f)
                    })
                } else if (vu(d)) {
                    v = "string" == typeof d.style ? r.number[d.style] : ku(d.style) ? Ku(d.style.tokens) : void 0;
                    c.push({
                        type: 0,
                        value: t.getNumberFormat(n, v).format(f)
                    })
                } else if (gu(d)) {
                    if (!(_ = d.options[f] || d.options.other)) throw new RangeError('Invalid values for "' + d.value + '": "' + f + '". Options are "' + p.keys(d.options).join('", "') + '"');
                    c.push.apply(c, Wu(_.value, n, t, r, a))
                } else if (bu(d)) {
                    var _;
                    if (!(_ = d.options["=" + f])) {
                        if (!Intl.PluralRules) throw new Zu('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n');
                        var y = t.getPluralRules(n, {
                            type: d.pluralType
                        }).select(f - (d.offset || 0));
                        _ = d.options[y] || d.options.other
                    }
                    if (!_) throw new RangeError('Invalid values for "' + d.value + '": "' + f + '". Options are "' + p.keys(d.options).join('", "') + '"');
                    c.push.apply(c, Wu(_.value, n, t, r, a, f - (d.offset || 0)))
                } else;
            }
        }
        return (u = c).length < 2 ? u : u.reduce((function(e, n) {
            var t = e[e.length - 1];
            return t && 0 === t.type && 0 === n.type ? t.value += n.value : e.push(n), e
        }), [])
    }
    var qu = /@@(\d+_\d+)@@/g,
        Ju = 0;

    function Qu(e, n) {
        return e.split(qu).filter(m).map((function(e) {
            return null != n[e] ? n[e] : e
        })).reduce((function(e, n) {
            return e.length && "string" == typeof n && "string" == typeof e[e.length - 1] ? e[e.length - 1] += n : e.push(n), e
        }), [])
    }
    var Xu = /(<([0-9a-zA-Z-_]*?)>(.*?)<\/([0-9a-zA-Z-_]*?)>)|(<[0-9a-zA-Z-_]*?\/>)/,
        ec = _.now() + "@@",
        nc = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"];

    function tc(e, n, t) {
        var r = e.tagName,
            a = e.outerHTML,
            i = e.textContent,
            o = e.childNodes;
        if (!r) return Qu(i || "", n);
        r = r.toLowerCase();
        var u = ~nc.indexOf(r),
            c = t[r];
        if (c && u) throw new Zu(r + " is a self-closing tag and can not be used, please use another tag name.");
        if (!o.length) return [a];
        var s = f.prototype.slice.call(o).reduce((function(e, r) {
            return e.concat(tc(r, n, t))
        }), []);
        return c ? "function" == typeof c ? [c.apply(void 0, s)] : [c] : Vu(["<" + r + ">"], s, ["</" + r + ">"])
    }

    function rc(e, n, t, r, a, i) {
        var o = Wu(e, n, t, r, a, void 0, i),
            u = {},
            c = o.reduce((function(e, n) {
                if (0 === n.type) return e + n.value;
                var t = _.now() + "_" + ++Ju;
                return u[t] = n.value, e + "@@" + t + "@@"
            }), "");
        if (!Xu.test(c)) return Qu(c, u);
        if (!a) throw new Zu("Message has placeholders but no values was given");
        if ("undefined" == typeof DOMParser) throw new Zu("Cannot format XML message without DOMParser");
        Hu || (Hu = new DOMParser);
        var s = Hu.parseFromString('<formatted-message id="' + ec + '">' + c + "</formatted-message>", "text/html").getElementById(ec);
        if (!s) throw new Zu("Malformed HTML message " + c);
        var l = p.keys(a).filter((function(e) {
            return !!s.getElementsByTagName(e).length
        }));
        if (!l.length) return Qu(c, u);
        var d = l.filter((function(e) {
            return e !== e.toLowerCase()
        }));
        if (d.length) throw new Zu("HTML tag must be lowercased but the following tags are not: " + d.join(", "));
        return f.prototype.slice.call(s.childNodes).reduce((function(e, n) {
            return e.concat(tc(n, u, a))
        }), [])
    }
    var ac = function() {
        return ac = p.assign || function(e) {
            for (var n, t = 1, r = arguments.length; t < r; t++)
                for (var a in n = arguments[t]) p.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            return e
        }, ac.apply(this, arguments)
    };

    function ic(e, n) {
        return n ? p.keys(e).reduce((function(t, r) {
            var a, i;
            return t[r] = (a = e[r], (i = n[r]) ? ac(ac(ac({}, a || {}), i || {}), p.keys(a).reduce((function(e, n) {
                return e[n] = ac(ac({}, a[n]), i[n] || {}), e
            }), {})) : a), t
        }), ac({}, e)) : e
    }
    var oc, uc = function() {
            function e(n, t, r, a) {
                var i, o = this;
                if (void 0 === t && (t = e.defaultLocale), this.formatterCache = {
                        number: {},
                        dateTime: {},
                        pluralRules: {}
                    }, this.format = function(e) {
                        return function(e, n, t, r, a, i) {
                            var o = Wu(e, n, t, r, a, void 0, i);
                            return 1 === o.length ? o[0].value : o.reduce((function(e, n) {
                                return e + n.value
                            }), "")
                        }(o.ast, o.locales, o.formatters, o.formats, e, o.message)
                    }, this.formatToParts = function(e) {
                        return Wu(o.ast, o.locales, o.formatters, o.formats, e, void 0, o.message)
                    }, this.formatHTMLMessage = function(e) {
                        return rc(o.ast, o.locales, o.formatters, o.formats, e, o.message)
                    }, this.resolvedOptions = function() {
                        return {
                            locale: Intl.NumberFormat.supportedLocalesOf(o.locales)[0]
                        }
                    }, this.getAst = function() {
                        return o.ast
                    }, "string" == typeof n) {
                    if (this.message = n, !e.__parse) throw new x("IntlMessageFormat.__parse must be set to process `message` of type `string`");
                    this.ast = e.__parse(n, {
                        normalizeHashtagInPlural: !1
                    })
                } else this.ast = n;
                if (!f.isArray(this.ast)) throw new x("A message must be provided as a String or AST.");
                this.formats = ic(e.formats, r), this.locales = t, this.formatters = a && a.formatters || (void 0 === (i = this.formatterCache) && (i = {
                    number: {},
                    dateTime: {},
                    pluralRules: {}
                }), {
                    getNumberFormat: Gu(Intl.NumberFormat, i.number),
                    getDateTimeFormat: Gu(Intl.DateTimeFormat, i.dateTime),
                    getPluralRules: Gu(Intl.PluralRules, i.pluralRules)
                })
            }
            return e.defaultLocale = (new Intl.NumberFormat).resolvedOptions().locale, e.__parse = Uu, e.formats = {
                number: {
                    currency: {
                        style: "currency"
                    },
                    percent: {
                        style: "percent"
                    }
                },
                date: {
                    short: {
                        month: "numeric",
                        day: "numeric",
                        year: "2-digit"
                    },
                    medium: {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                    },
                    long: {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    },
                    full: {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    }
                },
                time: {
                    short: {
                        hour: "numeric",
                        minute: "numeric"
                    },
                    medium: {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric"
                    },
                    long: {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        timeZoneName: "short"
                    },
                    full: {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        timeZoneName: "short"
                    }
                }
            }, e
        }(),
        cc = function e(n, t) {
            void 0 === t && (t = "");
            var r = {};
            for (var a in n) {
                var i = t + a;
                "object" == typeof n[a] ? p.assign(r, e(n[a], i + ".")) : r[i] = n[a]
            }
            return r
        },
        sc = Za({});

    function lc(e) {
        return e in oc
    }

    function dc(e) {
        return null == e || lc(e) ? e : dc(Rc(e))
    }

    function mc(e) {
        for (var n = arguments.length, t = new f(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
        var a = t.map((function(e) {
            return cc(e)
        }));
        sc.update((function(n) {
            return n[e] = p.assign.apply(p, [n[e] || {}].concat(na(a))), n
        }))
    }
    Wa([sc], (function(e) {
        var n = e[0];
        return p.keys(n)
    })), sc.subscribe((function(e) {
        return oc = e
    }));
    var fc = {};

    function pc(e) {
        return fc[e]
    }

    function hc(e) {
        return xc(e).reverse().some((function(e) {
            var n;
            return null === (n = pc(e)) || void 0 === n ? void 0 : n.size
        }))
    }

    function vc(e, n) {
        return Promise.all(n.map((function(n) {
            return function(e, n) {
                fc[e].delete(n), 0 === fc[e].size && delete fc[e]
            }(e, n), n().then((function(e) {
                return e.default || e
            }))
        }))).then((function(n) {
            return mc.apply(void 0, [e].concat(na(n)))
        }))
    }
    var _c = {};

    function yc(e) {
        if (!hc(e)) return e in _c ? _c[e] : void 0;
        var n = function(e) {
            return xc(e).reverse().map((function(e) {
                var n = pc(e);
                return [e, n ? na(n) : []]
            })).filter((function(e) {
                return e[1].length > 0
            }))
        }(e);
        return _c[e] = Promise.all(n.map((function(e) {
            return vc(e[0], e[1])
        }))).then((function() {
            if (hc(e)) return yc(e);
            delete _c[e]
        })), _c[e]
    }

    function gc(e, n) {
        var t = {};
        for (var r in e) p.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
        if (null != e && "function" == typeof p.getOwnPropertySymbols) {
            var a = 0;
            for (r = p.getOwnPropertySymbols(e); a < r.length; a++) n.indexOf(r[a]) < 0 && p.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]])
        }
        return t
    }
    var bc = {
        fallbackLocale: null,
        initialLocale: null,
        loadingDelay: 200,
        formats: {
            number: {
                scientific: {
                    notation: "scientific"
                },
                engineering: {
                    notation: "engineering"
                },
                compactLong: {
                    notation: "compact",
                    compactDisplay: "long"
                },
                compactShort: {
                    notation: "compact",
                    compactDisplay: "short"
                }
            },
            date: {
                short: {
                    month: "numeric",
                    day: "numeric",
                    year: "2-digit"
                },
                medium: {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                },
                long: {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                },
                full: {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }
            },
            time: {
                short: {
                    hour: "numeric",
                    minute: "numeric"
                },
                medium: {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                },
                long: {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    timeZoneName: "short"
                },
                full: {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    timeZoneName: "short"
                }
            }
        },
        warnOnMissingMessages: !0
    };

    function wc() {
        return bc
    }
    var kc, Ec = Za(!1),
        Sc = Za(null);

    function Ac(e, n) {
        return 0 === n.indexOf(e) && e !== n
    }

    function Cc(e, n) {
        return e === n || Ac(e, n) || Ac(n, e)
    }

    function Rc(e) {
        var n = e.lastIndexOf("-");
        if (n > 0) return e.slice(0, n);
        var t = wc().fallbackLocale;
        return t && !Cc(e, t) ? t : null
    }

    function xc(e) {
        var n = e.split("-").map((function(e, n, t) {
                return t.slice(0, n + 1).join("-")
            })),
            t = wc().fallbackLocale;
        return t && !Cc(e, t) ? n.concat(xc(t)) : n
    }

    function Ic() {
        return kc
    }
    Sc.subscribe((function(e) {
        kc = e, "undefined" != typeof window && d.documentElement.setAttribute("lang", e)
    }));
    var Dc = Sc.set;
    Sc.set = function(e) {
        if (dc(e) && hc(e)) {
            var n, t = wc().loadingDelay;
            return "undefined" != typeof window && null != Ic() && t ? n = window.setTimeout((function() {
                return Ec.set(!0)
            }), t) : Ec.set(!0), yc(e).then((function() {
                Dc(e)
            })).finally((function() {
                w(n), Ec.set(!1)
            }))
        }
        return Dc(e)
    }, Sc.update = function(e) {
        return Dc(e(kc))
    };
    var Pc = {},
        Nc = function e(n, t) {
            if (null == t) return null;
            var r = function(e, n) {
                if (lc(e)) {
                    var t = function(e) {
                        return oc[e] || null
                    }(e);
                    if (n in t) return t[n]
                }
                return null
            }(t, n);
            return r || e(n, Rc(t))
        },
        Tc = function(e) {
            var n = p.create(null);
            return function(t) {
                var r = JSON.stringify(t);
                return r in n ? n[r] : n[r] = e(t)
            }
        },
        Mc = function(e, n) {
            var t = wc().formats;
            if (e in t && n in t[e]) return t[e][n];
            throw new Error('[svelte-i18n] Unknown "' + n + '" ' + e + " format.")
        },
        Lc = Tc((function(e) {
            var n = e.locale,
                t = e.format,
                r = gc(e, ["locale", "format"]);
            if (null == n) throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
            return t && (r = Mc("number", t)), new Intl.NumberFormat(n, r)
        })),
        Oc = Tc((function(e) {
            var n = e.locale,
                t = e.format,
                r = gc(e, ["locale", "format"]);
            if (null == n) throw new Error('[svelte-i18n] A "locale" must be set to format dates');
            return t ? r = Mc("date", t) : 0 === p.keys(r).length && (r = Mc("date", "short")), new Intl.DateTimeFormat(n, r)
        })),
        Bc = Tc((function(e) {
            var n = e.locale,
                t = e.format,
                r = gc(e, ["locale", "format"]);
            if (null == n) throw new Error('[svelte-i18n] A "locale" must be set to format time values');
            return t ? r = Mc("time", t) : 0 === p.keys(r).length && (r = Mc("time", "short")), new Intl.DateTimeFormat(n, r)
        })),
        Fc = Tc((function(e, n) {
            return void 0 === n && (n = Ic()), new uc(e, n, wc().formats)
        })),
        zc = function(e, n) {
            void 0 === n && (n = {}), "object" == typeof e && (e = (n = e).id);
            var t = n,
                r = t.values,
                a = t.locale,
                i = void 0 === a ? Ic() : a,
                o = t.default;
            if (null == i) throw new Error("[svelte-i18n] Cannot format a message without first setting the initial locale.");
            var u = function(e, n) {
                if (n in Pc && e in Pc[n]) return Pc[n][e];
                var t = Nc(e, n);
                return t ? function(e, n, t) {
                    return t ? (n in Pc || (Pc[n] = {}), e in Pc[n] || (Pc[n][e] = t), t) : t
                }(e, n, t) : null
            }(e, i);
            return u ? r ? Fc(u, i).format(r) : u : (wc().warnOnMissingMessages, o || e)
        },
        Kc = function(e, n) {
            return function(e) {
                void 0 === e && (e = {});
                var n = e.locale,
                    t = void 0 === n ? Ic() : n,
                    r = gc(e, ["locale"]);
                return Bc(p.assign({
                    locale: t
                }, r))
            }(n).format(e)
        },
        Uc = function(e, n) {
            return function(e) {
                void 0 === e && (e = {});
                var n = e.locale,
                    t = void 0 === n ? Ic() : n,
                    r = gc(e, ["locale"]);
                return Oc(p.assign({
                    locale: t
                }, r))
            }(n).format(e)
        },
        $c = function(e, n) {
            return function(e) {
                void 0 === e && (e = {});
                var n = e.locale,
                    t = void 0 === n ? Ic() : n,
                    r = gc(e, ["locale"]);
                return Lc(p.assign({
                    locale: t
                }, r))
            }(n).format(e)
        };
    Wa([Sc, sc], (function() {
        return zc
    })), Wa([Sc], (function() {
        return Kc
    })), Wa([Sc], (function() {
        return Uc
    })), Wa([Sc], (function() {
        return $c
    }));
    var jc = ["va_usd", "va_eur", "va_cad", "va_gbp"];

    function Hc() {
        return Ur() && !Ke()
    }
    var Gc = {
            card: function() {
                var e, n;
                if (je() && Oe("method.card")) return Qe() ? Qe("card") && (null == (e = We()) ? void 0 : e.card) : qe() ? null == (n = We()) ? void 0 : n.card : He().card
            },
            prepaid_card: function() {
                var e, n;
                if (qe()) return null == (e = We()) || null == (n = e.card) ? void 0 : n.prepaid
            },
            credit_card: function() {
                var e, n;
                if (je() && Oe("method.card") && Oe("method.credit_card")) return qe() ? null == (e = We()) || null == (n = e.card) ? void 0 : n.credit : He().credit_card
            },
            debit_card: function() {
                var e, n;
                if (je() && Oe("method.card") && Oe("method.debit_card")) return qe() ? null == (e = We()) || null == (n = e.card) ? void 0 : n.debit : He().debit_card
            },
            netbanking: function() {
                return vn(p.keys(je() && !qe() && !Ze() && !1 !== Oe("method.netbanking") && function() {
                    var e = He().netbanking;
                    if (ve(e)) return {};
                    return e
                }() || {}))
            },
            wallet: function() {
                return Xc().length
            },
            nach: function() {
                var e, n;
                return !je() && "nach" === (null == (e = Ge()) ? void 0 : e.method) && (null == (n = We()) ? void 0 : n.nach)
            },
            emandate: function() {
                var e, n;
                return Qe() && !Ze() ? Qe("emandate") && (null == (n = We()) ? void 0 : n.emandate) : "emandate" === Ye() && !Ze() && !ve(null == (e = We()) ? void 0 : e.emandate)
            },
            emi: function() {
                return je() && Oe("method.emi") && He().emi && He().card && !Ze() && !qe() && !ve(Qc())
            },
            upi: function() {
                var e, n = p.keys(Wc).some(Jc);
                return Je() ? Qe("upi") && (null == (e = We()) ? void 0 : e.upi) && n : qe() ? "upi" === Ye() && n : n
            },
            app: function() {
                var e = !1;
                return we(He().app, (function(n) {
                    n && (e = !0)
                })), !(!e && !He().gpay)
            },
            qr: function() {
                return Jc("qr")
            },
            cardless_emi: function() {
                if (!je() || Ze() || qe()) return !1;
                var e = function() {
                    var e = {};
                    Qc().BAJAJ && (e.bajaj = !0);
                    n = Oe("disable_emi_ux"), t = Le("experiments.emi_ux_revamp"), "boolean" == typeof n && (t = !n), t && Qc().onecard && (e.onecard = !0);
                    var n, t;
                    e = X({}, e, He().cardless_emi), ve(e) && (e = {});
                    var r = tu(je(), e);
                    Le("fee_bearer") && (r = function(e) {
                        var n = {};
                        return p.keys(e).forEach((function(t) {
                            e[t].fee_bearer_customer && (n[t] = e[t])
                        })), n
                    }(r));
                    return r
                }();
                return (!1 !== Oe("method.cardless_emi") || e.bajaj) && !ve(e)
            },
            paylater: function() {
                return je() && !qe() && !Ze() && !ve(He().paylater)
            },
            bank_transfer: function() {
                var e = Le("order.amount"),
                    n = Le("order.amount_due"),
                    t = "full" !== _a(si) && _a(li) ? 100 * parseFloat(_a(li)) : "",
                    r = n ? e === n && !t : !t,
                    a = Le("order.partial_payment") && e === t || r;
                return !qe() && je() && He().bank_transfer && !Ze() && Oe("method.bank_transfer") && a && en()
            },
            offline_challan: function() {
                return !qe() && !Ze() && je() && He().offline && Oe("method.offline_challan") && en()
            },
            paypal: function() {
                var e;
                return !qe() && Ze() && (null == (e = He().wallet) ? void 0 : e.paypal)
            },
            gpay: function() {
                return qc() && Be()
            },
            upi_otm: function() {
                return !1 !== Oe("method.upi_otm") && He().upi_otm && (je() < 1e7 || "upi_otm" === (null == (e = Ge()) ? void 0 : e.method)) && !Ze() && !qe() && je();
                var e
            },
            cod: function() {
                return Oe("method.cod") && He().cod && function() {
                    var e;
                    return m((null === (e = Ge()) || void 0 === e ? void 0 : e.line_items_total) && Le("features.one_click_checkout"))
                }()
            },
            international: function() {
                return n = (null == (e = He()) ? void 0 : e.app) || {}, p.values(pi).some((function(e) {
                    return n[e]
                }));
                var e, n
            },
            intl_bank_transfer: function() {
                return je() && function() {
                    var e, n = null === (e = He()) || void 0 === e ? void 0 : e.intl_bank_transfer;
                    return !(!n || "object" != typeof n) && jc.some((function(e) {
                        return n[e]
                    }))
                }()
            }
        },
        Yc = {
            credit_card: function() {
                return !0
            },
            debit_card: function() {
                return !0
            },
            card: function() {
                return !0
            },
            upi: function() {
                return !0
            },
            wallet: function() {
                return Xc().length > 0
            },
            cod: function() {
                return !0
            }
        };

    function Vc(e) {
        var n = Ye(),
            t = function(e) {
                return m(Gc[e] && Gc[e].call() && function(e) {
                    if (Hc()) {
                        var n = Yc[e];
                        return !!n && n()
                    }
                    return !0
                }(e))
            };
        if (n && n !== e) {
            if ("card" === n && e.includes("_" + n)) return t(e);
            if ("upi" !== n || "qr" !== e) return !1
        }
        return t(e)
    }

    function Zc() {
        var e, n = ["card", "emi", "netbanking", "emandate", "nach", "upi_otm", "upi", "wallet", "paypal", "bank_transfer", "offline_challan", "international"];
        if (Ye()) return Ye();
        var t = function() {
            var e = Ge(),
                n = null == e ? void 0 : e.method;
            e && qe() && je() && (n = e.method || "card");
            var t = p.keys(Gc);
            return n && (t = [n]), t.filter(Vc)
        }();
        return 1 === (t = t.filter((function(e) {
            return n.includes(e)
        }))).length ? (n.some((function(n) {
            if (n === t[0]) return e = n, !0
        })), e) : void 0
    }
    var Wc = {
        collect: function() {
            return m(Le("methods.upi_type.collect", 1))
        },
        omnichannel: function() {
            return !qe() && !Fe() && Ve("google_pay_omnichannel")
        },
        qr: function() {
            var e = !Fe() && Oe("method.qr") && !jr() && He().upi_intent && m(Le("methods.upi_type.intent", 1));
            if (qe()) {
                var n, t = e && (null == (n = We()) ? void 0 : n.upi) && Xe();
                return Je() ? Qe("upi") && t : "upi" === Zc() && t
            }
            return e
        },
        intent: function() {
            var e = !Fe() && He().upi_intent && m(Le("methods.upi_type.intent", 1)) && Ui.all.length;
            if (qe()) {
                var n = e && Xe();
                return Je() ? Qe("upi") && n : "upi" === Zc() && n
            }
            return e
        },
        intentUrl: function() {
            var e;
            return !qe() && !Fe() && !l.CheckoutBridge && !Or && !Ur() && He().upi_intent && m(Le("methods.upi_type.intent", 1)) && function() {
                var e = Oe("method.upi");
                if (pe(e) && !1 === e.intent) return !1;
                return !0
            }() && "web" === (null == (e = $i()) ? void 0 : e.platform) && (Pr || Dr && Le("experiments.reuse_upi_paymentId"))
        }
    };

    function qc() {
        var e;
        return !1 !== Oe("method.upi") && He().upi && (je() <= 1e7 || "upi" === (null == (e = Ge()) ? void 0 : e.method)) && !Ze() && je()
    }

    function Jc(e) {
        var n = Oe("method.upi");
        return (!pe(n) || !1 !== n[e]) && (qc() && Wc[e]())
    }

    function Qc(e) {
        var n = He().emi_options;
        if (ve(n)) return {};
        var t = function(e, n) {
            var t = {};
            return we(n, (function(n, r) {
                if (Wo(r)) {
                    var a = n.filter((function(n) {
                        return n.min_amount <= e
                    }));
                    a.length && (t[r] = a.reduce((function(e, n) {
                        return e[n.duration] = n, e
                    }), {}))
                }
            })), t
        }(e || je(), n);
        return (t = _e(t, (function(e, n) {
            return X({}, Wo(n), {
                plans: e,
                min_amount: qo(e)
            })
        }))).BAJAJ && function(e, n) {
            if (nu[e]) nu[e] = p.assign(nu[e], n), nu[e]
        }("bajaj", {
            min_amount: t.BAJAJ.min_amount
        }), t
    }

    function Xc() {
        var e, n = Oe("method.wallet"),
            t = (null == (e = He()) ? void 0 : e.wallet) || {},
            r = function(e) {
                return void 0 === e && (e = []), je() >= 1e7 ? e.filter((function(e) {
                    var n, t;
                    return m(null == (n = ro.wallet) || null == (t = n[e]) ? void 0 : t[to])
                })) : e
            }(p.keys(t));
        if (function(e) {
                var n = Oe("external.wallets");
                we(n, (function(n) {
                    fu[n] && (fu[n].custom = !0, e.includes(n) || e.unshift(n))
                }))
            }(r), !je() || !1 === n || 0 === r.length || qe() || Ze()) return [];
        n && "object" == typeof n && (r = r.filter((function(e) {
            return !1 !== n[e]
        })));
        var a = Hc(),
            i = r.map((function(e) {
                return fu[e]
            })).filter((function(e) {
                return !!e && (!a || e.power)
            }));
        return function(e) {
            return e.sort((function(e, n) {
                var t = lu.includes(e.code),
                    r = lu.includes(n.code),
                    a = lu.indexOf(e.code),
                    i = lu.indexOf(n.code);
                return t && r ? a - i : t ? -1 : r ? 1 : 0
            }))
        }(i)
    }
    Za(!1);
    var es, ns = !1;

    function ts(e) {
        var n, t = this;
        if (!yn(this, ts)) return new ts(e);
        yr.call(this), this.id = qt.makeUid(), Go.setContext(go, this.id), or.setR(this);
        try {
            n = function(e) {
                e && "object" == typeof e || An("Invalid options");
                var n = new Jr(e);
                return function(e, n) {
                        void 0 === n && (n = []);
                        var t = !0;
                        e = e.get(), we(us, (function(r, a) {
                            if (!n.includes(a) && a in e) {
                                var i = r(e[a], e);
                                i && (t = !1, An("Invalid " + a + " (" + i + ")"))
                            }
                        }))
                    }(n, ["amount"]),
                    function(e) {
                        we(e, (function(n, t) {
                            cn(n) ? n.length > 254 && (e[t] = n.slice(0, 254)) : un(n) || on(n) || delete e[t]
                        }))
                    }(n.get("notes")), n
            }(e), this.get = n.get, this.set = n.set
        } catch (n) {
            var r = n.message;
            this.get && this.isLiveMode() || pe(e) && !e.parent && l.alert(r), An(r)
        }["integration", "integration_version", "integration_parent_version"].forEach((function(e) {
            var n = t.get("_." + e);
            n && (qt.props[e] = n)
        })), Gi.every((function(e) {
            return !n.get(e)
        })) && An("No key passed"), Se.updateInstance(this), this.postInit()
    }
    var rs = ts.prototype = new yr;

    function as(e, n) {
        return mt.jsonp({
            url: Hi("preferences"),
            data: e,
            callback: function(e) {
                Se.preferenceResponse = e, n(e)
            }
        })
    }

    function is(e) {
        if (e) {
            var n = {},
                t = Oe("key");
            t && (n.key_id = t);
            var r = [Oe("currency")],
                a = Oe("display_currency"),
                i = Oe("display_amount");
            a && ("" + i).length && r.push(a), n.currency = r, ["order_id", "customer_id", "invoice_id", "payment_link_id", "subscription_id", "auth_link_id", "recurring", "subscription_card_change", "account_id", "contact_id", "checkout_config_id", "amount"].forEach((function(e) {
                var t = Oe(e);
                t && (n[e] = t)
            })), n["_[build]"] = vt, n["_[checkout_id]"] = e.id, n["_[library]"] = qt.props.library, n["_[platform]"] = qt.props.platform, "desktop" === Gr() && (n.qr_required = !0);
            var o = ji() || {};
            return n = X({}, n, o)
        }
    }
    rs.postInit = _r, rs.onNew = function(e, n) {
        var t = this;
        "ready" === e && (this.prefs ? n(e, this.prefs) : as(is(this), (function(e) {
            e.methods && (t.prefs = e, t.methods = e.methods), n(t.prefs, e)
        })))
    }, rs.emi_calculator = function(e, n) {
        return ts.emi.calculator(this.get("amount") / 100, e, n)
    }, ts.emi = {
        calculator: function(e, n, t) {
            if (!t) return y.ceil(e / n);
            t /= 1200;
            var r = y.pow(1 + t, n);
            return E(e * t * r / (r - 1), 10)
        },
        calculatePlan: function(e, n, t) {
            var r = this.calculator(e, n, t);
            return {
                total: t ? r * n : e,
                installment: r
            }
        }
    }, ts.payment = {
        getMethods: function(e) {
            return as({
                key_id: ts.defaults.key
            }, (function(n) {
                e(n.methods || n)
            }))
        },
        getPrefs: function(e, n) {
            var t = kn();
            return or.track("prefs:start", {
                type: te
            }), pe(e) && (e["_[request_index]"] = or.updateRequestIndex("preferences")), ve(es) || ve(es.order) ? mt({
                url: In(Hi("preferences"), e),
                callback: function(r) {
                    if (or.track("prefs:end", {
                            type: te,
                            data: {
                                time: t()
                            }
                        }), r.xhr && 0 === r.xhr.status) return as(e, n);
                    n(r)
                }
            }) : (or.track("prefs:end", {
                type: te,
                data: {
                    time: t()
                }
            }), void n(es))
        },
        getRewards: function(e, n) {
            var t = kn();
            return or.track("rewards:start", {
                type: te
            }), mt({
                url: In(Hi("checkout/rewards"), e),
                callback: function(e) {
                    or.track("rewards:end", {
                        type: te,
                        data: {
                            time: t()
                        }
                    }), n(e)
                }
            })
        }
    }, rs.isLiveMode = function() {
        var e = this.preferences;
        return !e && /^rzp_l/.test(this.get("key")) || e && "live" === e.mode
    }, rs.getMode = function() {
        var e = this.preferences;
        return this.get("key") || e ? !e && /^rzp_l/.test(this.get("key")) || e && "live" === e.mode ? "live" : "test" : "pending"
    }, rs.calculateFees = function(e) {
        var n = this;
        return new Promise((function(t, r) {
            e = Xr(e, n), mt.post({
                url: Hi("payments/calculate/fees"),
                data: e,
                callback: function(e) {
                    return e.error ? r(e) : t(e)
                }
            })
        }))
    }, rs.fetchVirtualAccount = function(e) {
        var n = e.customer_id,
            t = e.order_id,
            r = e.notes;
        return new Promise((function(e, a) {
            if (t) {
                var i = {
                    customer_id: n,
                    notes: r
                };
                n || delete i.customer_id, r || delete i.notes;
                var o = Hi("orders/" + t + "/virtual_accounts?x_entity_id=" + t);
                mt.post({
                    url: o,
                    data: i,
                    callback: function(n) {
                        return n.error ? a(n) : e(n)
                    }
                })
            } else a("Order ID is required to fetch the account details")
        }))
    }, rs.checkCREDEligibility = function(e) {
        var n, t = this,
            r = (void 0 === n && (n = qt.id), Ji[n]),
            a = ji({
                cred: !0
            }) || {},
            i = function(e, n) {
                n = Hi(n);
                for (var t = 0; t < Gi.length; t++) {
                    var r = Gi[t],
                        a = Oe(r);
                    if (r = "key" === r ? "key_id" : "x_entity_id", a) {
                        var i = Oe("account_id");
                        return i && (a += "&account_id=" + i), n + (n.indexOf("?") >= 0 ? "&" : "?") + r + "=" + a
                    }
                }
                return n
            }(r && r.r, "payments/validate/account"),
            o = new Promise((function(n, o) {
                if (!e) return o(new Error("contact is required to check eligibility"));
                mt.post({
                    url: i,
                    data: X({
                        entity: "cred",
                        value: e,
                        "_[checkout_id]": (null == r ? void 0 : r.id) || (null == t ? void 0 : t.id),
                        "_[build]": vt,
                        "_[library]": qt.props.library,
                        "_[platform]": qt.props.platform
                    }, a),
                    callback: function(e) {
                        var t, r = "ELIGIBLE" === (null == (t = e.data) ? void 0 : t.state);
                        return vr.Track(mr.ELIGIBILITY_CHECK, {
                            source: "validate_api",
                            isEligible: r
                        }), r ? n(e) : o(e)
                    }
                })
            }));
        return o
    };
    var os, us = {
        notes: function(e) {
            if (pe(e) && vn(p.keys(e)) > 15) return "At most 15 notes are allowed"
        },
        amount: function(e, n) {
            var t, r, a = n.display_currency || n.currency || "INR",
                i = De(a),
                o = i.minimum,
                u = "";
            if (i.decimals && i.minor ? u = " " + i.minor : i.major && (u = " " + i.major), void 0 === (r = o) && (r = 100), (/[^0-9]/.test(t = e) || !((t = E(t, 10)) >= r)) && !n.recurring) return "should be passed in integer" + u + ". Minimum value is " + o + u + ", i.e. " + function(e, n, t) {
                return void 0 === t && (t = !0), [Ne[n], Me(e, n)].join(t ? " " : "")
            }(o, a)
        },
        currency: function(e) {
            if (!Pe.includes(e)) return "The provided currency is not currently supported"
        },
        display_currency: function(e) {
            if (!(e in Ne) && e !== ts.defaults.display_currency) return "This display currency is not supported"
        },
        display_amount: function(e) {
            if (!(e = h(e).replace(/([^0-9.])/g, "")) && e !== ts.defaults.display_amount) return ""
        },
        payout: function(e, n) {
            if (e) {
                if (!n.key) return "key is required for a Payout";
                if (!n.contact_id) return "contact_id is required for a Payout"
            }
        }
    };

    function cs(e, n) {
        for (var t = 0; t < n.length; t++) {
            var r = n[t];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), p.defineProperty(e, r.key, r)
        }
    }

    function ss(e, n, t) {
        return n && cs(e.prototype, n), t && cs(e, t), e
    }
    ts.configure = function(e, n) {
        void 0 === n && (n = {}), we(Wr(e, Yr), (function(e, n) {
            typeof Yr[n] == typeof e && (Yr[n] = e)
        })), n.library && (qt.props.library = n.library, Go.setContext(Co, n.library)), n.referer && (qt.props.referer = n.referer, Go.setContext(No, n.referer))
    }, ts.hasCheckoutFrameLoaded = function() {
        return ns
    }, ts.defaults = Yr, l.Razorpay = ts, Yr.timeout = 0, Yr.name = "", Yr.partnership_logo = "", Yr.nativeotp = !0, Yr.remember_customer = !1, Yr.personalization = !1, Yr.paused = !1, Yr.fee_label = "", Yr.force_terminal_id = "", Yr.is_donation_checkout = !1, Yr.keyless_header = "", Yr.min_amount_label = "", Yr.partial_payment = {
        min_amount_label: "",
        full_amount_label: "",
        partial_amount_label: "",
        partial_amount_description: "",
        select_partial: !1
    }, Yr.method = {
        netbanking: null,
        card: !0,
        credit_card: !0,
        debit_card: !0,
        cardless_emi: null,
        wallet: null,
        emi: !0,
        upi: null,
        upi_intent: !0,
        qr: !0,
        bank_transfer: !0,
        offline_challan: !0,
        upi_otm: !0,
        cod: !0
    }, Yr.prefill = {
        amount: "",
        wallet: "",
        provider: "",
        method: "",
        name: "",
        contact: "",
        email: "",
        vpa: "",
        coupon_code: "",
        "card[number]": "",
        "card[expiry]": "",
        "card[cvv]": "",
        "billing_address[line1]": "",
        "billing_address[line2]": "",
        "billing_address[postal_code]": "",
        "billing_address[city]": "",
        "billing_address[country]": "",
        "billing_address[state]": "",
        "billing_address[first_name]": "",
        "billing_address[last_name]": "",
        bank: "",
        "bank_account[name]": "",
        "bank_account[account_number]": "",
        "bank_account[account_type]": "",
        "bank_account[ifsc]": "",
        auth_type: ""
    }, Yr.features = {
        cardsaving: !0
    }, Yr.readonly = {
        contact: !1,
        email: !1,
        name: !1
    }, Yr.hidden = {
        contact: !1,
        email: !1
    }, Yr.modal = {
        confirm_close: !1,
        ondismiss: _r,
        onhidden: _r,
        escape: !0,
        animation: !l.matchMedia || !(null != (os = l.matchMedia("(prefers-reduced-motion: reduce)")) && os.matches),
        backdropclose: !1,
        handleback: !0
    }, Yr.external = {
        wallets: [],
        handler: _r
    }, Yr.challan = {
        fields: [],
        disclaimers: [],
        expiry: {}
    }, Yr.theme = {
        upi_only: !1,
        color: "",
        backdrop_color: "rgba(0,0,0,0.6)",
        image_padding: !0,
        image_frame: !0,
        close_button: !0,
        close_method_back: !1,
        hide_topbar: !1,
        branding: "",
        debit_card: !1
    }, Yr._ = {
        integration: null,
        integration_version: null,
        integration_parent_version: null,
        integration_type: null
    }, Yr.config = {
        display: {}
    };
    var ls = "https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap";

    function ds() {
        var e;
        e = ls, d.querySelector('link[href$="'.concat(e, '"]')) || function(e) {
            return new Promise((function(n, t) {
                var r = Nn("link");
                r.rel = "stylesheet", r.href = e, r.onload = n, r.onerror = t, d.head.appendChild(r)
            }))
        }(ls).catch((function(e) {
            vr.TrackMetric("inter_font_load_failure", {
                data: {
                    error: e
                }
            })
        }))
    }
    var ms = {
            PRODUCT: {
                page: "product",
                text: "Buy now with Magic"
            },
            PRODUCT_SM: {
                page: "product_sm",
                text: "Buy now"
            },
            CART: {
                page: "cart",
                text: "Checkout with Magic"
            },
            CART_SM: {
                page: "cart_sm",
                text: "Checkout"
            }
        },
        fs = ["page-type", "width", "border-radius", "bg-color", "title"];
    var ps = function(e) {
            return {}
        },
        hs = function(e) {
            return {}
        };

    function vs(e) {
        var n, t, r, a, i, o, u, c, s = e[8].title,
            l = function(e, n, t, r) {
                if (e) {
                    var a = ya(e, n, t, r);
                    return e[0](a)
                }
            }(s, e, e[7], hs),
            d = l || function(e) {
                var n, t, r = (e[3] || e[4]) + "";
                return {
                    c: function() {
                        n = ka("span"), t = Sa(r)
                    },
                    m: function(e, r) {
                        ba(e, n, r), ga(n, t)
                    },
                    p: function(e, n) {
                        24 & n && r !== (r = (e[3] || e[4]) + "") && function(e, n) {
                            n = "" + n, e.wholeText !== n && (e.data = n)
                        }(t, r)
                    },
                    d: function(e) {
                        e && wa(n)
                    }
                }
            }(e);
        return {
            c: function() {
                n = ka("button"), t = Ea("svg"), r = Ea("path"), a = Ea("path"), i = Sa(" "), d && d.c(), Aa(r, "d", "M5.14321 4.72412L4.47803 7.1758L8.28423 4.71034L5.7951 14.0119L8.32281 14.0142L11.9999 0.275635L5.14321 4.72412Z"), Aa(r, "fill", "#F4F6FE"), Aa(a, "d", "M1.04646 10.1036L0 14.0138H5.18124C5.18124 14.0138 7.3005 6.06116 7.30109 6.05884C7.2991 6.06011 1.04646 10.1036 1.04646 10.1036Z"), Aa(a, "fill", "#F4F6FE"), Aa(t, "width", "12"), Aa(t, "height", "15"), Aa(t, "viewBox", "0 0 12 15"), Aa(t, "fill", "none"), Aa(t, "xmlns", "http://www.w3.org/2000/svg"), Aa(t, "class", "icon"), Aa(n, "id", "razorpay-magic-btn"), Ca(n, "width", e[0], 1), Ca(n, "border-radius", e[1], 1), Ca(n, "background-color", e[2], 1), Aa(n, "data-testid", "razorpay-magic-btn")
            },
            m: function(s, l) {
                var m, f, p, h;
                ba(s, n, l), ga(n, t), ga(t, r), ga(t, a), ga(n, i), d && d.m(n, null), o = !0, u || (m = n, f = "click", p = e[5], m.addEventListener(f, p, h), c = function() {
                    return m.removeEventListener(f, p, h)
                }, u = !0)
            },
            p: function(e, t) {
                var r = t[0];
                l ? l.p && (!o || 128 & r) && function(e, n, t, r, a, i) {
                    if (a) {
                        var o = ya(n, t, r, i);
                        e.p(o, a)
                    }
                }(l, s, e, e[7], o ? function(e, n, t, r) {
                    if (e[2] && r) {
                        var a = e[2](r(t));
                        if (void 0 === n.dirty) return a;
                        if ("object" == typeof a) {
                            for (var i = [], o = Math.max(n.dirty.length, a.length), u = 0; u < o; u += 1) i[u] = n.dirty[u] | a[u];
                            return i
                        }
                        return n.dirty | a
                    }
                    return n.dirty
                }(s, e[7], r, ps) : function(e) {
                    if (e.ctx.length > 32) {
                        for (var n = [], t = e.ctx.length / 32, r = 0; r < t; r++) n[r] = -1;
                        return n
                    }
                    return -1
                }(e[7]), hs) : d && d.p && (!o || 24 & r) && d.p(e, o ? r : -1), (!o || 1 & r) && Ca(n, "width", e[0], 1), (!o || 2 & r) && Ca(n, "border-radius", e[1], 1), (!o || 4 & r) && Ca(n, "background-color", e[2], 1)
            },
            i: function(e) {
                o || (Ua(d, e), o = !0)
            },
            o: function(e) {
                ! function(e, n, t, r) {
                    if (e && e.o) {
                        if (Ka.has(e)) return;
                        Ka.add(e), (void 0).c.push((function() {
                            Ka.delete(e), r && (t && e.d(1), r())
                        })), e.o(n)
                    }
                }(d, e), o = !1
            },
            d: function(e) {
                e && wa(n), d && d.d(e), u = !1, c()
            }
        }
    }

    function _s(e, n, t) {
        var r, a = n.$$slots,
            i = void 0 === a ? {} : a,
            o = n.$$scope,
            u = n.width,
            c = void 0 === u ? "100%" : u,
            s = n.borderRadius,
            l = void 0 === s ? "4px" : s,
            d = n.pageType,
            m = void 0 === d ? ms.CART : d,
            f = n.bgColor,
            p = void 0 === f ? "#0460f8" : f,
            h = n.title,
            v = void 0 === h ? "" : h,
            _ = xa();
        return e.$$set = function(e) {
            "width" in e && t(0, c = e.width), "borderRadius" in e && t(1, l = e.borderRadius), "pageType" in e && t(6, m = e.pageType), "bgColor" in e && t(2, p = e.bgColor), "title" in e && t(3, v = e.title), "$$scope" in e && t(7, o = e.$$scope)
        }, e.$$.update = function() {
            if (64 & e.$$.dirty) {
                var n = ms.PRODUCT,
                    a = ms.PRODUCT_SM,
                    i = ms.CART,
                    o = ms.CART_SM;
                switch (m) {
                    case n.page:
                        t(4, r = n.text);
                        break;
                    case a.page:
                        t(4, r = a.text);
                        break;
                    case i.page:
                        t(4, r = i.text);
                        break;
                    case o.page:
                        t(4, r = o.text);
                        break;
                    default:
                        t(4, r = "Checkout with Magic")
                }
            }
        }, [c, l, p, v, r, function(e) {
            _("click", e)
        }, m, o, i]
    }
    var ys = function(e) {
            function n(n) {
                var t;
                return ja(function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(t = e.call(this) || this), n, _s, vs, ha, {
                    width: 0,
                    borderRadius: 1,
                    pageType: 6,
                    bgColor: 2,
                    title: 3
                }), t
            }
            return sa(n, e), ss(n, [{
                key: "width",
                get: function() {
                    return this.$$.ctx[0]
                },
                set: function(e) {
                    this.$$set({
                        width: e
                    }), Fa()
                }
            }, {
                key: "borderRadius",
                get: function() {
                    return this.$$.ctx[1]
                },
                set: function(e) {
                    this.$$set({
                        borderRadius: e
                    }), Fa()
                }
            }, {
                key: "pageType",
                get: function() {
                    return this.$$.ctx[6]
                },
                set: function(e) {
                    this.$$set({
                        pageType: e
                    }), Fa()
                }
            }, {
                key: "bgColor",
                get: function() {
                    return this.$$.ctx[2]
                },
                set: function(e) {
                    this.$$set({
                        bgColor: e
                    }), Fa()
                }
            }, {
                key: "title",
                get: function() {
                    return this.$$.ctx[3]
                },
                set: function(e) {
                    this.$$set({
                        title: e
                    }), Fa()
                }
            }]), n
        }(Ha),
        gs = d.createElement("template");
    if (gs.innerHTML = "\n  <style>\n  * {\n    padding: 0px;\n    margin: 0px;\n    border: 0px;\n    box-sizing: border-box;\n  }\n\n  #razorpay-magic-btn {\n    width: 100% !important;\n    padding: 14px !important;\n    background-color: #0460F8 !important;\n    color: #fff !important;\n    border-radius: 4px !important;\n    cursor: pointer !important;\n  }\n\n  #razorpay-magic-btn span {\n    font-family: 'Inter' !important;\n    font-weight: bold !important;\n    font-size: 14px !important;\n  }\n\n  #razorpay-magic-btn .icon {\n    margin-bottom: -1.1px;\n  }\n  </style>\n", !xr && "customElements" in window) {
        var bs = function(e) {
            function n() {
                var n;
                return (n = e.call(this) || this)._root = n.attachShadow({
                    mode: "closed"
                }), n._options = {}, n._rzp = null, ds(), n._root.appendChild(gs.content.cloneNode(!0)), n._button = new ys({
                    target: n._root
                }), n
            }
            sa(n, e);
            var t = n.prototype;
            return t.restyle = function() {
                var e = this;
                fs.forEach((function(n) {
                    var t = e.getAttribute(n);
                    if (t) {
                        var r = n.replace(/-([a-z])/g, (function(e, n) {
                            return n.toUpperCase()
                        }));
                        e._button[r] = t
                    }
                }))
            }, t.attributeChangedCallback = function(e, n, t) {
                t !== n && this.restyle()
            }, t.openRzpModal = function(e) {
                e.stopPropagation();
                var n = this._options,
                    t = n.key,
                    r = n.order_id,
                    a = n.amount;
                "true" === this.getAttribute("auto-checkout") && (t && a || r) && (this._rzp = new window.Razorpay(this._options), this._rzp.open()), this.dispatchEvent(new CustomEvent("click", e))
            }, t.connectedCallback = function() {
                var e = this;
                this._root.getElementById("razorpay-magic-btn").addEventListener("click", this.openRzpModal.bind(this)), g((function() {
                    var n = e.querySelector('[slot="title"]');
                    null != n && n.textContent && (e._button.title = n.textContent)
                })), this.restyle()
            }, t.disconnectedCallback = function() {
                this._button.removeEventListener("click", this.openRzpModal.bind(this))
            }, ss(n, [{
                key: "rzp",
                get: function() {
                    return this._rzp
                }
            }, {
                key: "options",
                set: function(e) {
                    this._options = e, this._rzp = new window.Razorpay(this._options)
                }
            }], [{
                key: "observedAttributes",
                get: function() {
                    return fs
                }
            }]), n
        }(ca(HTMLElement));
        window.customElements.get("magic-checkout-btn") || window.customElements.define("magic-checkout-btn", bs)
    }
    var ws = "page_view",
        ks = "payment_successful",
        Es = "payment_failed",
        Ss = "rzp_payments";

    function As(e, n, t) {
        var r;
        void 0 === e && (e = d.body), void 0 === t && (t = !1);
        try {
            if (t) {
                d.body.style.background = "#00000080";
                var a = Nn("style");
                a.innerText = "@keyframes rzp-rot{to{transform: rotate(360deg);}}@-webkit-keyframes rzp-rot{to{-webkit-transform: rotate(360deg);}}", zn(a, e)
            }(r = d.createElement("div")).className = "razorpay-loader";
            var i = "margin:-25px 0 0 -25px;height:50px;width:50px;animation:rzp-rot 1s infinite linear;-webkit-animation:rzp-rot 1s infinite linear;border: 1px solid rgba(255, 255, 255, 0.2);border-top-color: rgba(255, 255, 255, 0.7);border-radius: 50%;";
            return i += n ? "margin: 100px auto -150px;border: 1px solid rgba(0, 0, 0, 0.2);border-top-color: rgba(0, 0, 0, 0.7);" : "position:absolute;left:50%;top:50%;", r.setAttribute("style", i), zn(r, e), r
        } catch (e) {
            ! function(e, n) {
                var t = n.analytics,
                    r = n.severity,
                    a = void 0 === r ? er : r,
                    i = n.unhandled,
                    o = void 0 !== i && i;
                try {
                    var u, c = t || {},
                        s = c.event,
                        l = c.data,
                        d = c.immediately,
                        f = void 0 === d || d,
                        p = "string" == typeof s ? s : rr;
                    a !== Xt && a !== er || xt("session_errored", a), or.track(p, {
                        data: X({}, "object" == typeof l ? l : {}, {
                            error: Qt(e, {
                                severity: a,
                                unhandled: o
                            })
                        }),
                        immediately: m(f),
                        isError: !0
                    }), Yo.TRIGGERED({
                        error: Qt(e, {
                            severity: a,
                            unhandled: o
                        }),
                        last: null == (u = Go.getState()) ? void 0 : u.last
                    })
                } catch (e) {}
            }(e, {
                severity: tr,
                unhandled: !1
            })
        }
    }

    function Cs(e, n) {
        var t;
        if (null != (t = window) && t.ga)
            for (var r = window.ga, a = "function" == typeof r.getAll ? r.getAll() : [], i = 0; i < a.length; i++) {
                r(a[i].get("name") + "." + e, n)
            }
    }

    function Rs() {
        try {
            undefined
        } catch (e) {}
    }
    var xs, Is, Ds, Ps, Ns = l,
        Ts = Ns.screen,
        Ms = Ns.scrollTo,
        Ls = Ir,
        Os = !1,
        Bs = {
            overflow: "",
            metas: null,
            orientationchange: function() {
                Bs.resize.call(this), Bs.scroll.call(this)
            },
            resize: function() {
                var e = l.innerHeight || Ts.height;
                Us.container.style.position = e < 450 ? "absolute" : "fixed", this.el.style.height = y.max(e, 460) + "px"
            },
            scroll: function() {
                if ("number" == typeof l.pageYOffset)
                    if (l.innerHeight < 460) {
                        var e = 460 - l.innerHeight;
                        l.pageYOffset > e + 120 && Mi(e)
                    } else this.isFocused || Mi(0)
            }
        };

    function Fs() {
        return Bs.metas || (Bs.metas = Ii('head meta[name=viewport],head meta[name="theme-color"]')), Bs.metas
    }

    function zs(e) {
        var n = ra.frame;
        if (!n) {
            n = Hi("checkout", !1);
            var t = is(e);
            t ? n = In(n, t) : n += "/public"
        }
        return n = In(n, {
            traffic_env: _t,
            build: yt
        })
    }

    function Ks(e) {
        try {
            Us.backdrop.style.background = e
        } catch (e) {}
    }

    function Us(e) {
        if (xs = d.body, Is = d.head, Ds = xs.style, e) return this.getEl(e), this.openRzp(e);
        this.getEl(), this.time = gn()
    }
    Us.prototype = {
        getEl: function(e) {
            if (!this.el) {
                var n = {
                    style: "opacity: 1; height: 100%; position: relative; background: none; display: block; border: 0 none transparent; margin: 0px; padding: 0px; z-index: 2;",
                    allowtransparency: !0,
                    frameborder: 0,
                    width: "100%",
                    height: "100%",
                    allowpaymentrequest: !0,
                    src: zs(e),
                    class: "razorpay-checkout-frame"
                };
                this.el = Hn(Nn("iframe"), n)
            }
            return this.el
        },
        openRzp: function(e) {
            var n = Gn(this.el, {
                    width: "100%",
                    height: "100%"
                }),
                t = e.get("parent");
            t && (t = Pi(t));
            var r = t || Us.container;
            Ps || (Ps = As(r, t)), e !== this.rzp && (Tn(n) !== r && Kn(r, n), this.rzp = e),
                function() {
                    var e = Oe("prefill.contact"),
                        n = Oe("prefill.email");
                    e && Go.setContext(Do, e), n && Go.setContext(Po, n), en() && Go.setContext(Ro, en());
                    var t = Oe("_.integration");
                    t && Go.setContext(wo, t);
                    var r = Oe("_.integration_version");
                    r && Go.setContext(Eo, r);
                    var a = _o.INTEGRATION,
                        i = yo.WEB,
                        o = Oe("_.integration_type");
                    o && (o === _o.RZP_APP ? a = _o.RZP_APP : o === yo.PLUGIN && (i = yo.PLUGIN), Go.setContext(ko, o)), Go.setContext(bo, a), Go.setContext(Ao, i);
                    var u = Oe("_.integration_parent_version");
                    u && Go.setContext(So, u)
                }(), t ? (jn(n, "minHeight", "530px"), this.embedded = !0) : (Jn(jn(r, "display", "block")), Ks(e.get("theme.backdrop_color")), /^rzp_t/.test(e.get("key")) && Us.ribbon && (Us.ribbon.style.opacity = 1), this.setMetaAndOverflow()), this.bind(), this.onload()
        },
        makeMessage: function(e, n) {
            var t = this.rzp,
                r = t.get(),
                a = {
                    integration: qt.props.integration,
                    referer: qt.props.referer || D.href,
                    options: r,
                    library: qt.props.library,
                    id: t.id
                };
            return e && (a.event = e), t._order && (a._order = t._order), t._prefs && (a._prefs = t._prefs), t.metadata && (a.metadata = t.metadata), n && (a.extra = n), we(t.modal.options, (function(e, n) {
                    r["modal." + n] = e
                })), this.embedded && (delete r.parent, a.embedded = !0),
                function(e) {
                    var n = e.image;
                    if (n && cn(n)) {
                        if (Cn(n)) return;
                        if (n.indexOf("http")) {
                            var t = D.protocol + "//" + D.hostname + (D.port ? ":" + D.port : ""),
                                r = "";
                            "/" !== n[0] && "/" !== (r += D.pathname.replace(/[^/]*$/g, ""))[0] && (r = "/" + r), e.image = t + r + n
                        }
                    }
                }(r), a
        },
        close: function() {
            Ks(""), Us.ribbon && (Us.ribbon.style.opacity = 0),
                function(e) {
                    e && e.forEach(Un);
                    var n = Fs();
                    n && n.forEach(zn(Is))
                }(this.$metas), Ds.overflow = Bs.overflow, this.unbind(), Ls && Ms(0, Bs.oldY), Rs(), qt.flush()
        },
        bind: function() {
            var e = this;
            if (!this.listeners) {
                this.listeners = [];
                var n = {};
                Ls && (n.orientationchange = Bs.orientationchange, this.rzp.get("parent") || (n.resize = Bs.resize)), we(n, (function(n, t) {
                    e.listeners.push(tt(t, n.bind(e))(window))
                }))
            }
        },
        unbind: function() {
            this.listeners.forEach((function(e) {
                "function" == typeof e && e()
            })), this.listeners = null
        },
        setMetaAndOverflow: function() {
            Is && (Fs().forEach((function(e) {
                return Un(e)
            })), this.$metas = [Hn(Nn("meta"), {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            }), Hn(Nn("meta"), {
                name: "theme-color",
                content: this.rzp.get("theme.color")
            })], this.$metas.forEach(zn(Is)), Bs.overflow = Ds.overflow, Ds.overflow = "hidden", Ls && (Bs.oldY = l.pageYOffset, l.scrollTo(0, 0), Bs.orientationchange.call(this)))
        },
        postMessage: function(e) {
            var n, t;
            e.id = this.rzp.id, e = JSON.stringify(e), null == (n = this.el) || null == (t = n.contentWindow) || t.postMessage(e, "*")
        },
        prefetchPrefs: function(e) {
            e !== this.rzp && (this.rzp = e), this.postMessage(this.makeMessage("prefetch"))
        },
        makeCheckoutCallForShopify: function(e, n) {
            e !== this.rzp && (this.rzp = e), Os ? this.postMessage(this.makeMessage("1cc_shopify_checkout_initiate", n)) : this.onevent({
                event: "shopify_failure"
            })
        },
        onmessage: function(e) {
            var n = ke(e.data);
            if (n) {
                var t = n.event,
                    r = this.rzp;
                if (e.origin && "frame" === n.source && e.source === this.el.contentWindow) {
                    try {
                        0 === ra.api.indexOf(e.origin) || /.*[.]razorpay.(com|in)$/.test(e.origin) || or.track("postmessage_origin_redflag", {
                            type: te,
                            data: {
                                origin: e.origin
                            },
                            immediately: !0
                        })
                    } catch (e) {}
                    n = n.data, this["on" + t](n), "dismiss" !== t && "fault" !== t || or.track(t, {
                        data: n,
                        r: r,
                        immediately: !0
                    })
                }
            }
        },
        onload: function(e) {
            e && "checkout-frame" === e.origin && (Os = !0, ns = !0), this.rzp && this.postMessage(this.makeMessage())
        },
        onfocus: function() {
            this.isFocused = !0
        },
        onblur: function() {
            this.isFocused = !1, Bs.orientationchange.call(this)
        },
        onrender: function() {
            Ps && (Un(Ps), Ps = null), this.rzp.emit("render")
        },
        onevent: function(e) {
            this.rzp.emit(e.event, e.data)
        },
        ongaevent: function(e) {
            var n, t, r = e.event,
                a = e.category,
                i = e.params,
                o = void 0 === i ? {} : i;
            this.rzp.set("enable_ga_analytics", !0), null != (n = window) && n.gtag && "function" == typeof window.gtag && window.gtag("event", r, X({
                event_category: a
            }, o)), null != (t = window) && t.ga && "function" == typeof window.ga && Cs("send", r === ws ? {
                hitType: "pageview",
                title: a
            } : {
                hitType: "event",
                eventCategory: a,
                eventAction: r
            })
        },
        onfbaevent: function(e) {
            var n, t = e.eventType,
                r = void 0 === t ? "trackCustom" : t,
                a = e.event,
                i = e.category,
                o = e.params,
                u = void 0 === o ? {} : o;
            null != (n = window) && n.fbq && "function" == typeof window.fbq && (this.rzp.set("enable_fb_analytics", !0), i && (u.page = i), window.fbq(r, a, u))
        },
        onredirect: function(e) {
            qt.flush(), e.target || (e.target = this.rzp.get("target") || "_top"), Ni(e)
        },
        onsubmit: function(e) {
            qt.flush();
            var n = this.rzp;
            "wallet" === e.method && (n.get("external.wallets") || []).forEach((function(t) {
                if (t === e.wallet) try {
                    n.get("external.handler").call(n, e)
                } catch (e) {}
            })), n.emit("payment.submit", {
                method: e.method
            })
        },
        ondismiss: function(e) {
            this.close();
            var n = this.rzp.get("modal.ondismiss");
            sn(n) && g((function() {
                return n(e)
            }))
        },
        onhidden: function() {
            qt.flush(), this.afterClose();
            var e = this.rzp.get("modal.onhidden");
            sn(e) && e()
        },
        oncomplete: function(e) {
            var n = this.rzp.get(),
                t = n.enable_ga_analytics,
                r = n.enable_fb_analytics;
            t && this.ongaevent({
                event: ks,
                category: Ss
            }), r && this.onfbaevent({
                event: ks,
                category: Ss
            }), this.close();
            var a = this.rzp,
                i = a.get("handler");
            or.track("checkout_success", {
                r: a,
                data: e,
                immediately: !0
            }), sn(i) && g((function() {
                i.call(a, e)
            }), 200)
        },
        onpaymenterror: function(e) {
            qt.flush();
            var n = this.rzp.get(),
                t = n.enable_ga_analytics,
                r = n.enable_fb_analytics;
            t && this.ongaevent({
                event: Es,
                category: Ss
            }), r && this.onfbaevent({
                event: Es,
                category: Ss
            });
            try {
                var a, i = this.rzp.get("callback_url"),
                    o = this.rzp.get("redirect") || $r,
                    u = this.rzp.get("retry");
                if (o && i && !1 === u) return null != e && null != (a = e.error) && a.metadata && (e.error.metadata = JSON.stringify(e.error.metadata)), void Ni({
                    url: i,
                    content: e,
                    method: "post",
                    target: this.rzp.get("target") || "_top"
                });
                this.rzp.emit("payment.error", e), this.rzp.emit("payment.failed", e)
            } catch (e) {}
        },
        onfailure: function(e) {
            var n = this.rzp.get(),
                t = n.enable_ga_analytics,
                r = n.enable_fb_analytics;
            t && this.ongaevent({
                event: Es,
                category: Ss
            }), r && this.onfbaevent({
                event: Es,
                category: Ss
            }), this.ondismiss(), l.alert("Payment Failed.\n" + e.error.description), this.onhidden()
        },
        onfault: function(e) {
            var n = "Something went wrong.";
            cn(e) ? n = e : ln(e) && (e.message || e.description) && (n = e.message || e.description), qt.flush(), this.rzp.close(), this.rzp.emit("fault.close");
            var t = this.rzp.get("callback_url");
            (this.rzp.get("redirect") || $r) && t ? _i({
                url: t,
                params: {
                    error: e
                },
                method: "POST"
            }) : l.alert("Oops! Something went wrong.\n" + n), this.afterClose()
        },
        afterClose: function() {
            Rs(), Us.container.style.display = "none"
        },
        onflush: function(e) {
            qt.flush(e)
        }
    };
    X({
        name_label: "Full Name",
        pincode_label: "Pincode",
        city_label: "City",
        state_label: "State",
        international_pincode_label: "Pincode/Zipcode",
        international_state_label: "State/Province",
        country_label: "Country",
        house_label: "House Number, Apartment",
        area_label: "Area, Colony, Street, Sector*",
        landmark_label: "Landmark",
        landmark_optional_label: "Landmark (Optional)",
        shipping_address_label: "Delivery Address",
        save_label: "Save As",
        cta_label: "Continue",
        save_consent_label: "Save address",
        save_consent_label_tnc: "Terms and Conditions",
        save_consent_label_privacy: "Privacy Policy",
        save_consent_label_and: "and",
        save_consent_tooltip: "I agree to save my details as per Razorpay’s",
        input_error_label: "Please enter your {field}",
        house_error_label: "Enter a minimum of 10 characters",
        area_error_label: "Enter a minimum of 5 characters",
        add_address_label: "Add New Address",
        non_serviceable_label: "This order cannot be delivered to this location.",
        saved_address_phone_label: "Phone no",
        saved_address_landmark_label: "Landmark",
        saved_address_cta_label: "Use your Saved Address",
        shipping_charges_label: "{charge} delivery charges added",
        same_address_checkbox_label: "Billing address same as delivery address",
        saved_address_label: "Your address has been saved",
        error_label: "Address should be less than 255 characters",
        landmark_error_label: "Enter characters between 2 to 32 only.",
        city_state_error_label: "Enter alphabets (a-z) only.",
        name_lang_error: "Enter your name in English only.",
        address_lang_error: "Enter an address in English only.",
        name_error_label: "Enter characters between 2 to 64 only.",
        unserviceable_label: "Unserviceable",
        serviceable_label: "Serviceable",
        order_update_failure: "We could not proceed due to some technical error.",
        state_search_all: "All states",
        state_search_placeholder: "Search a state",
        custom_tag_label: "Save As",
        required_label: "Required",
        zipcode_error_label: "Invalid zipcode entered.",
        generic_pattern_error_label: "Inalid input entered.",
        indian_contact_error_label: "Enter a 10-digit number only.",
        contact_error_label: "Enter a valid mobile number.",
        pincode_error_message: "Enter a 6-digit pincode only.",
        edit_address_label: "Edit",
        pincode_non_serviceable_label: "This pincode is not serviceable. Try again with another address",
        add_landmark: "Add Landmark",
        optional: "(Optional)",
        address_tags_heading: "Save address as",
        home: "Home",
        office: "Office",
        others: "Others"
    }, {
        billing_address_label: "Billing Address"
    }, {
        consent_modal_title: "Use saved addresses?",
        consent_modal_content_label: "Allow using addresses saved earlier on other Razorpay products.",
        consent_modal_cta_label: "Continue",
        consent_banner_title: "Can't find your address?",
        consent_banner_content_label: "We’ve found a few addresses you’ve saved earlier on other Razorpay products.",
        consent_banner_cta_label: "Allow using saved addresses",
        consent_error_title: "Address load failed",
        consent_error_content_label: "We are unable to load your saved addresses. Please try again or add a new address.",
        consent_error_cta_label: "Retry"
    });
    X({
        add_another_card_btn: "Add another card",
        auth_type_header: "Complete Payment Using",
        auth_type_otp: "OTP / Password",
        auth_type_pin: "ATM PIN",
        bank_verification_action_continue: "Continue",
        bank_verification_description: "Click continue to complete the payment on the bank page",
        bank_verification_title: "Bank verification required",
        card_number_help: "Please enter a valid card number.",
        card_number_help_amex: "Amex cards are not supported for this transaction.",
        card_number_help_recurring: "Card does not support recurring payments.",
        card_number_help_unsupported: "This card is not supported for the payment",
        card_number_label: "Card Number",
        card_expiry_help: "Invalid expiry date",
        cards_saved_on_apps_label: "Pay with card on other apps",
        cards_saved_on_rzp_label: "YOUR SAVED CARDS",
        cards_saved_on_rzp_label_redesign: "Saved Cards",
        cards_saved_label_one_cc: "All cards supported",
        checking_cred_eligibility: "Checking you eligibility status on CRED",
        cvv_help: "It's a {length} digit code printed on the back of your card.",
        cvv_label: "CVV",
        enter_card_details_option_label: "Or, Enter card details",
        expiry_label: "Expiry",
        name_help: "Please enter name on your card",
        name_label: "Card Holder's name",
        no_cred_account: "You're currently not a CRED member. Become a CRED member to pay via CRED Pay and earn special perks. To proceed for now, try a different payment method.",
        nocvv_label: "My Maestro Card doesn't have Expiry/CVV",
        recurring_callout: "Future payments on this card will be charged automatically.",
        save_card_text: "Keep card saved for future payments",
        save_card_text_new_card: "Save card securely for future payments",
        know_more: "Know More",
        saved_card_label: "Card ending with <b>{last4}<b>",
        saved_card_checkbox_tooltip: "Required for recurring payments",
        subscription_callout: "This card will be linked to the subscription and future payments will be charged automatically.",
        subscription_refund_callout: "The charge is to enable subscription on this card and it will be refunded.",
        use_saved_cards_btn: "Use saved cards",
        use_saved_cards_on_rzp_btn: "Use saved cards on Razorpay",
        view_all_emi_plans: "View all EMI Plans",
        international_currency_charges: "Relevant currency conversion charges might be applicable, as Amex will process the transaction in INR. To avoid currency conversion charges please use MasterCard or Visa.",
        avs_form_address_line_1: "Address Line 1*",
        avs_form_address_line_2: "Address Line 2",
        avs_form_zip_code: "Zipcode*",
        avs_form_country: "Country*",
        avs_form_state: "State*",
        avs_form_city: "City*",
        avs_country_search_title: "Select Country",
        avs_state_search_title: "Search for a State",
        avs_info_title: "Help us verify the transaction",
        avs_heading: "Verify your billing address linked to the bank",
        avs_info_message_1: "This is the address on your bank’s record and is used to send your account statements.",
        avs_info_message_2: "The billing address verification helps us protect you from fraud transactions.",
        avs_info_message_3: "Your address is used only for verification and is securely processed via encrypted servers.",
        avs_country_all: "All Countries",
        avs_state_all: "All States",
        avs_form_input_required: "This field is required",
        save_card_know_more_existing_card_modal_title: "Keep card saved for future payments",
        save_card_know_more_existing_card_modal_content: "As per RBI guidelines, your permission is required to continue keeping this card saved securely on Razorpay.",
        save_card_know_more_existing_card_modal_content_bullet1: "Skip entering card details everytime for a faster experience",
        save_card_know_more_existing_card_modal_content_bullet2: "Protect sensitive card information & increase security",
        save_card_know_more_add_card_modal_title: "Save cards securely for future payments",
        save_card_know_more_add_card_modal_subtitle_caw: "Future payments on this card will be charged automatically.",
        save_card_know_more_add_card_modal_subtitle_subscription: "This card will be linked to the subscription and future payments will be charged automatically.",
        save_card_know_more_add_card_modal_content1: "Your card will be stored securely as a saved payment method as per RBI’s latest guidelines.",
        save_card_know_more_add_card_modal_content_international: "Saving the card is required to automatically charge your card for future payments on Razorpay",
        save_card_know_more_add_card_modal_content_international1: "All saved cards are compliant with the latest security guidelines.",
        save_card_know_more_add_card_modal_content_recurring: "As per RBI’s latest guidelines, your permission is required to continue keeping this card saved securely for future payments on Razorpay.",
        save_card_know_more_add_card_modal_content_recurring_without_merchant_name: "Your card will be stored securely as a saved payment method on Razorpay as per RBI’s latest guidelines.",
        save_card_know_more_add_card_modal_recurring_content: "This is required to automatically charge your card for recurring payments.",
        save_card_compliant_with_guidelines: "All saved cards are compliant with the latest security guidelines",
        enter_cvv: "Enter CVV",
        use_bank_card: "Use {bank} {type} card only",
        enter_bank_card_to_avail_emi: "Enter a {bank} {type} card to avail EMI or try another EMI option.",
        emi_not_supported: "EMI not supported on this card. Try again with another {bank} {type} card or pay full amount.",
        saved_cards: "Saved Cards",
        credit_debit_card: "{type} Card"
    }, {
        pay_with_saved_cards: "Pay With Your Saved Card",
        pay_with_saved_cards_subtitle: "Access securely with OTP",
        add_new_card: "Add New Card"
    }), X({
        cancel_reason_back_action: "Back",
        cancel_reason_collect_not_received: "Did not receive collect request",
        cancel_reason_failed_in_app: "Payment failed in UPI app",
        cancel_reason_money_deducted: "Money got deducted but payment is still processing",
        cancel_reason_other: "Other",
        cancel_reason_submit_action: "Submit",
        cancel_reason_title: "Please give us a reason before we cancel the payment",
        collect_block_heading: "Pay using UPI ID",
        collect_block_subheading: "You will receive a payment request on your UPI app",
        collect_enter_upi_id: "Enter your UPI ID",
        collect_new_vpa_help: "Please enter a valid VPA of the form username@bank",
        collect_securely_save: "Securely save your UPI ID",
        gpay_block_heading: "Pay using Gpay App",
        gpay_web_api_title: "Google Pay",
        intent_accept_request: "Please accept the request from Razorpay's VPA on your UPI app",
        intent_block_heading: "Pay Using Apps",
        intent_no_apps_error: "No UPI App on this device. Select other UPI option to proceed.",
        intent_select_app: "Select UPI App in your device",
        invalid_vpa_default_message: "Invalid VPA, please try again with correct VPA",
        new_vpa_subtitle: "Google Pay, BHIM, PhonePe & more",
        new_vpa_subtitle_upi_otm: "Phonepe, GooglePay, PayTM & BHIM",
        new_vpa_title_logged_in: "Add UPI ID",
        new_vpa_title_logged_out: "UPI ID",
        omni_block_heading: "Or, pay using phone number",
        omni_enter_number: "Enter your phone number",
        omni_error: "Please ensure the same number is linked to the Google Pay account.",
        omni_gpay_number: "Google Pay phone number",
        omni_gpay_subtitle: "Instant payment using Google Pay App",
        omni_verifying_phone: "Verifying mobile number with Google Pay..",
        qr_block_heading: "Pay using QR Code",
        recommended: "Recommended",
        recurring_subscription_callout: "The charge is to enable subscription on this card and it will be refunded.",
        recurring_caw_callout_all_data: "This is a recurring payment and upto {maxAmount} will be charged now. {merchantName} can charge upto {amount} on a {recurringFrequency} basis till {endDate}.",
        recurring_caw_callout_no_frequency: "This is a recurring payment and {maxAmount} will be charged now. {merchantName} can charge upto {amount} anytime till {endDate}.",
        recurring_caw_callout_no_name: "This is a recurring payment and upto {maxAmount} will be charged now. You will be charged upto {amount} on a {recurringFrequency} basis till {endDate}.",
        recurring_caw_callout_no_name_no_frequency: "This is a recurring payment and {maxAmount} will be charged now. You will be charged upto {amount} anytime till {endDate}.",
        recurring_caw_callout_as_presented: "This is a recurring payment and upto {maxAmount} will be charged now. {merchantName} can automatically charge upto {amount} for each payment in the future.",
        redirect_to_app: "You will be redirected to your UPI app",
        redirect_to_app_v2: "Choose the app installed on your phone to make the payment directly using the app",
        ux_failed_app_callout: "Payment failed with <b>{appName}<b>. Please retry payment with a different UPI app",
        scan_qr_code: "Scan the QR code using your UPI app",
        upi_id_linked_to_bank: "UPI ID is linked to",
        show_other_apps: "Show other UPI apps",
        show_qr_code: "Show QR Code",
        subscription_refund_callout: "This card will be linked to the subscription and future payments will be charged automatically.",
        upi_otm_callout: "<strong>{amount}<strong> will be blocked on your account by clicking pay. Your account will be charged {nameString} between <strong>{startDate}<strong> to <strong>{endDate}<strong>.",
        use_saved_cards_btn: "Use saved cards",
        use_saved_cards_on_rzp_btn: "Use saved cards on Razorpay",
        view_all_emi_plans: "View all EMI Plans",
        verifying_vpa_info: "Verifying your VPA"
    }, {
        pay_with_installed_or_others: "Pay with installed app, or use others",
        qr_timer_callout_text: "QR Code is valid for ",
        qr_timer_callout: '<span color="red">{minutes}<span color="red"> minutes',
        qr_expired: "The previous QR got expired",
        qr_refresh: "Refresh QR",
        qr_show: "Show QR",
        qr_scan_on_phone: "Scan the QR using any UPI app on your phone.",
        pay_with_upi_qr: "Pay With UPI QR",
        apps_plural: "are",
        apps_singular: "is",
        facing_issues: "facing issues. Please use other UPI apps."
    }), Za(!1);
    var $s = p.keys({
        en: "English",
        ben: "বাংলা",
        hi: "हिंदी",
        mar: "मराठी",
        guj: "ગુજરાતી",
        tam: "தமிழ்",
        tel: "తెలుగు",
        kan: "ಕನ್ನಡ"
    });

    function js(e) {
        return $s.some((function(n) {
            return e === n
        }))
    }

    function Hs() {
        var e = $e();
        if ("auto" === e) {
            var n = "undefined" == typeof window ? null : window.navigator.language || window.navigator.languages[0];
            n && (e = n.split("-")[0])
        }
        return js(e) ? e : null
    }
    var Gs, Ys = jo({
            OPEN: {
                name: "checkout_open",
                type: ne
            },
            INVOKED: {
                name: "checkout_invoked",
                type: re
            },
            CONTACT_NUMBER_FILLED: {
                name: "contact_number_filled",
                type: ee
            },
            EMAIL_FILLED: {
                name: "email_filled",
                type: ee
            },
            CONTACT_DETAILS: {
                name: "contact_details",
                type: ne
            },
            METHOD_SELECTION_SCREEN: {
                name: "method_selection_screen",
                type: ne
            },
            CONTACT_DETAILS_PROCEED_CLICK: {
                name: "contact_details_proceed_clicked",
                type: ee
            },
            INSTRUMENTATION_SELECTION_SCREEN: {
                name: "Instrument_selection_screen",
                type: ne
            },
            METHOD_SELECTED: {
                name: "Method:selected",
                type: ee
            },
            INSTRUMENT_SELECTED: {
                name: "instrument:selected",
                type: ee
            },
            USER_LOGGED_IN: {
                name: "user_logged_in",
                type: ee
            },
            RETRY_BUTTON: {
                name: "retry_button",
                type: ne
            },
            RETRY_CLICKED: {
                name: "retry_ckicked",
                type: ee
            },
            AFTER_RETRY_SCREEN: {
                name: "after_retry_screen",
                type: ne
            },
            RETRY_VANISHED: {
                name: "retry_vanished",
                type: ee
            },
            PAYMENT_CANCELLED: {
                name: "payment_cancelled",
                type: ee
            }
        }),
        Vs = _n(ts);

    function Zs(e) {
        return function n() {
            return Gs ? e.call(this) : (g(n.bind(this), 99), this)
        }
    }! function e() {
        (Gs = d.body || d.getElementsByTagName("body")[0]) || g(e, 99)
    }();
    var Ws, qs = d.currentScript || (Ws = Ii("script"))[Ws.length - 1];

    function Js(e) {
        var n = Tn(qs);
        yi({
            form: n,
            data: wi(e)
        }), n.onsubmit = _r, n.submit()
    }
    var Qs, Xs;

    function el() {
        var e = {};
        we(qs.attributes, (function(n) {
            var t = n.name.toLowerCase();
            if (/^data-/.test(t)) {
                var r = e;
                t = t.replace(/^data-/, "");
                var a = n.value;
                "true" === a ? a = !0 : "false" === a && (a = !1), /^notes\./.test(t) && (e.notes || (e.notes = {}), r = e.notes, t = t.replace(/^notes\./, "")), r[t] = a
            }
        }));
        var n = e.key;
        if (n && n.length > 0) {
            e.handler = Js;
            var t = ts(e);
            e.parent || (vr.TrackRender(fr, t), function(e) {
                var n = Tn(qs);
                Kn(n, p.assign(Nn("input"), {
                    type: "submit",
                    value: e.get("buttontext"),
                    className: "razorpay-payment-button"
                })).onsubmit = function(n) {
                    n.preventDefault();
                    var t = this,
                        r = t.action,
                        a = t.method,
                        i = t.target,
                        o = e.get();
                    if (cn(r) && r && !o.callback_url) {
                        var u = {
                            url: r,
                            content: Ti(t),
                            method: cn(a) ? a : "get",
                            target: cn(i) && i
                        };
                        try {
                            var c = C(JSON.stringify({
                                request: u,
                                options: JSON.stringify(o),
                                back: D.href
                            }));
                            o.callback_url = Hi("checkout/onyx") + "?data=" + c
                        } catch (e) {}
                    }
                    return e.open(), vr.TrackBehav(pr), !1
                }
            }(t))
        }
    }

    function nl() {
        if (!Qs) {
            var e = Nn();
            e.className = "razorpay-container", Yn(e, "<style>@keyframes rzp-rot{to{transform: rotate(360deg);}}@-webkit-keyframes rzp-rot{to{-webkit-transform: rotate(360deg);}}</style>"), Gn(e, {
                zIndex: 2147483647,
                position: "fixed",
                top: 0,
                display: "none",
                left: 0,
                height: "100%",
                width: "100%",
                "-webkit-overflow-scrolling": "touch",
                "-webkit-backface-visibility": "hidden",
                "overflow-y": "visible"
            }), Qs = zn(e, Gs), Us.container = Qs;
            var n = (r = Qs, (a = Nn()).className = "razorpay-backdrop", Gn(a, {
                "min-height": "100%",
                transition: "0.3s ease-out",
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            }), zn(a, r));
            Us.backdrop = n;
            var t = function(e) {
                var n = "rotate(45deg)",
                    t = "opacity 0.3s ease-in",
                    r = Nn("span");
                return r.textContent = "Test Mode", Gn(r, {
                    "text-decoration": "none",
                    background: "#D64444",
                    border: "1px dashed white",
                    padding: "3px",
                    opacity: "0",
                    "-webkit-transform": n,
                    "-moz-transform": n,
                    "-ms-transform": n,
                    "-o-transform": n,
                    transform: n,
                    "-webkit-transition": t,
                    "-moz-transition": t,
                    transition: t,
                    "font-family": "lato,ubuntu,helvetica,sans-serif",
                    color: "white",
                    position: "absolute",
                    width: "200px",
                    "text-align": "center",
                    right: "-50px",
                    top: "50px"
                }), zn(r, e)
            }(n);
            Us.ribbon = t
        }
        var r, a;
        return Qs
    }
    var tl, rl = !1,
        al = (tl = function(e) {
            try {
                var n = localStorage.getItem(e);
                if (!n) return null;
                var t = JSON.parse(n);
                return (new _).getTime() > t.expiry ? (localStorage.removeItem(e), null) : t
            } catch (e) {
                return null
            }
        }("razorpay_affordability_widget_fid"), (null == tl ? void 0 : tl.id) ? tl.id : null);

    function il(e) {
        return Xs ? Xs.openRzp(e) : (Xs = new Us(e), gt.iframeReference = Xs.el, gt.setId(qt.id), tt("message", Xs.onmessage.bind(Xs))(l), Kn(Qs, Xs.el)), Xs
    }
    Hr().then((function(e) {
        rl = e
    })), ts.open = function(e) {
        return ts(e).open()
    }, Vs.postInit = function() {
        this.modal = {
            options: {}
        }, this.get("parent") && this.open()
    };
    var ol = Vs.onNew;
    Vs.onNew = function(e, n) {
        "payment.error" === e && qt(this, "event_paymenterror", D.href), sn(ol) && ol.call(this, e, n)
    }, Vs.initAndPrefetchPrefs = function() {
        return Xs.prefetchPrefs(this), this
    }, Vs.createCheckoutAndFetchPrefs = function(e) {
        Xs ? Xs.makeCheckoutCallForShopify(this, e) : this.emit("shopify_failure")
    }, Vs.open = Zs((function() {
        this.metadata || (this.metadata = {
            isBrave: rl
        }, al && (this.metadata.affordability_widget_fid = al)), this.metadata.openedAt = _.now();
        var e, n = this.checkoutFrame = il(this);
        qt(this, "open");
        try {
            Ys.INVOKED({
                prefill: {
                    contact: Oe("prefill.contact"),
                    email: Oe("prefill.email"),
                    method: Oe("prefll.method") || ""
                }
            })
        } catch (e) {}
        return !Ve("checkout_disable_i18n") && !Fe() && !Vc("nach") && (e = function() {
            try {
                var e = l.localStorage.getItem("locale");
                if (js(e)) return e
            } catch (e) {}
            return null
        }() || Hs() || "en"), Go.setContext(Io, e), n.el.contentWindow || (n.close(), n.afterClose(), l.alert("This browser is not supported.\nPlease try payment in another browser.")), "-new.js" === qs.src.slice(-7) && qt(this, "oldscript", D.href), this
    })), Vs.resume = function(e) {
        var n = this.checkoutFrame;
        n && n.postMessage({
            event: "resume",
            data: e
        })
    }, Vs.close = function() {
        var e = this.checkoutFrame;
        e && e.postMessage({
            event: "close"
        })
    };
    var ul = Zs((function() {
        nl(), window.Intl ? Xs = il() : vr.Track(hr);
        try {
            el()
        } catch (e) {}
    }));
    l.addEventListener("rzp_error", (function(e) {
        var n = e.detail;
        or.track("cfu_error", {
            data: {
                error: n
            },
            immediately: !0
        })
    })), l.addEventListener("rzp_network_error", (function(e) {
        var n = e.detail;
        n && "https://lumberjack.razorpay.com/v1/track" === n.baseUrl || or.track("network_error", {
            data: n,
            immediately: !0
        })
    }));
    var cl = "checkoutjs";
    return qt.props.library = cl, Go.setContext(Co, cl), Go.setContext(xo, yt), Yr.handler = function(e) {
        if (yn(this, ts)) {
            var n = this.get("callback_url");
            n && _i({
                url: n,
                params: e,
                method: "POST"
            })
        }
    }, Yr.buttontext = "Pay Now", Yr.parent = null, us.parent = function(e) {
        if (!Pi(e)) return "parent provided for embedded mode doesn't exist"
    }, ul(), ts
}();
//# sourceMappingURL=checkout.js.map