(() => {
	var __webpack_modules__ = {
			1361: function(t) {
				var e = 4,
					n = .001,
					i = 1e-7,
					a = 10,
					r = 11,
					s = .1,
					o = "function" == typeof Float32Array;

				function l(t, e) {
					return 1 - 3 * e + 3 * t
				}

				function c(t, e) {
					return 3 * e - 6 * t
				}

				function u(t) {
					return 3 * t
				}

				function f(t, e, n) {
					return ((l(e, n) * t + c(e, n)) * t + u(e)) * t
				}

				function h(t, e, n) {
					return 3 * l(e, n) * t * t + 2 * c(e, n) * t + u(e)
				}

				function d(t, e, n, r, s) {
					var o, l, c = 0;
					do(o = f(l = e + (n - e) / 2, r, s) - t) > 0 ? n = l : e = l; while (Math.abs(o) > i && ++c < a);
					return l
				}

				function p(t, n, i, a) {
					for (var r = 0; r < e; ++r) {
						var s = h(n, i, a);
						if (0 === s) break;
						var o = f(n, i, a) - t;
						n -= o / s
					}
					return n
				}
				t.exports = function(t, e, i, a) {
					if (!(0 <= t && t <= 1 && 0 <= i && i <= 1)) throw Error("bezier x values must be in [0, 1] range");
					var l = o ? new Float32Array(r) : Array(r);
					if (t !== e || i !== a)
						for (var c = 0; c < r; ++c) l[c] = f(c * s, t, i);

					function u(e) {
						for (var a = 0, o = 1, c = r - 1; o !== c && l[o] <= e; ++o) a += s;
						var u = a + (e - l[--o]) / (l[o + 1] - l[o]) * s,
							f = h(u, t, i);
						return f >= n ? p(e, u, t, i) : 0 === f ? u : d(e, a, a + s, t, i)
					}
					return function(n) {
						return t === e && i === a ? n : 0 === n ? 0 : 1 === n ? 1 : f(u(n), e, a)
					}
				}
			},
			8439: function(t, e, n) {
				var i = n(3442),
					a = n(3422),
					r = n(8295),
					s = i.TypeError;
				t.exports = function(t) {
					if (a(t)) return t;
					throw s(r(t) + " is not a function")
				}
			},
			7759: function(t, e, n) {
				var i = n(3608),
					a = n(9638),
					r = n(5827),
					s = i("unscopables"),
					o = Array.prototype;
				void 0 == o[s] && r.f(o, s, {
					configurable: !0,
					value: a(null)
				}), t.exports = function(t) {
					o[s][t] = !0
				}
			},
			287: function(t, e, n) {
				var i = n(3442),
					a = n(3292),
					r = i.String,
					s = i.TypeError;
				t.exports = function(t) {
					if (a(t)) return t;
					throw s(r(t) + " is not an object")
				}
			},
			9373: function(t, e, n) {
				"use strict";
				var i = n(4026),
					a = n(2631),
					r = n(8281),
					s = n(6990),
					o = n(958),
					l = n(306),
					c = n(5963),
					u = n(7755),
					f = n(9642),
					h = n(3608),
					d = n(7769),
					p = n(3488).toArray,
					m = h("asyncIterator"),
					g = u("Array").values;
				t.exports = function(t) {
					var e = this,
						n = arguments.length,
						u = n > 1 ? arguments[1] : void 0,
						h = n > 2 ? arguments[2] : void 0;
					return new(f("Promise"))(function(n) {
						var f = a(t);
						void 0 !== u && (u = i(u, h));
						var y = c(f, m),
							v = y ? void 0 : l(f) || g,
							b = r(e) ? new e : [];
						n(p(y ? s(f, y) : new d(o(f, v)), u, b))
					})
				}
			},
			4885: function(t) {
				t.exports = function(t, e) {
					for (var n = 0, i = e.length, a = new t(i); i > n;) a[n] = e[n++];
					return a
				}
			},
			4655: function(t, e, n) {
				var i = n(3442),
					a = n(4026),
					r = n(6201),
					s = n(5249),
					o = n(2631),
					l = n(5024),
					c = n(7218),
					u = n(9638),
					f = n(4885),
					h = i.Array,
					d = r([].push);
				t.exports = function(t, e, n, i) {
					for (var r, p, m, g = o(t), y = s(g), v = a(e, n), b = u(null), E = c(y), T = 0; E > T; T++)(p = l(v(m = y[T], T, g))) in b ? d(b[p], m) : b[p] = [m];
					if (i && (r = i(g)) !== h)
						for (p in b) b[p] = f(r, b[p]);
					return b
				}
			},
			6030: function(t, e, n) {
				var i = n(4920),
					a = n(9892),
					r = n(7218),
					s = function(t) {
						return function(e, n, s) {
							var o, l = i(e),
								c = r(l),
								u = a(s, c);
							if (t && n != n) {
								for (; c > u;)
									if ((o = l[u++]) != o) return !0
							} else
								for (; c > u; u++)
									if ((t || u in l) && l[u] === n) return t || u || 0;
							return !t && -1
						}
					};
				t.exports = {
					includes: s(!0),
					indexOf: s(!1)
				}
			},
			3539: function(t, e, n) {
				var i = n(4026),
					a = n(6201),
					r = n(5249),
					s = n(2631),
					o = n(7218),
					l = n(8004),
					c = a([].push),
					u = function(t) {
						var e = 1 == t,
							n = 2 == t,
							a = 3 == t,
							u = 4 == t,
							f = 6 == t,
							h = 7 == t,
							d = 5 == t || f;
						return function(p, m, g, y) {
							for (var v, b, E = s(p), T = r(E), _ = i(m, g), I = o(T), x = 0, A = y || l, S = e ? A(p, I) : n || h ? A(p, 0) : void 0; I > x; x++)
								if ((d || x in T) && (b = _(v = T[x], x, E), t)) {
									if (e) S[x] = b;
									else if (b) switch (t) {
										case 3:
											return !0;
										case 5:
											return v;
										case 6:
											return x;
										case 2:
											c(S, v)
									} else switch (t) {
										case 4:
											return !1;
										case 7:
											c(S, v)
									}
								} return f ? -1 : a || u ? u : S
						}
					};
				t.exports = {
					forEach: u(0),
					map: u(1),
					filter: u(2),
					some: u(3),
					every: u(4),
					find: u(5),
					findIndex: u(6),
					filterReject: u(7)
				}
			},
			1924: function(t, e, n) {
				var i = n(3442),
					a = n(6937),
					r = n(8281),
					s = n(3292),
					o = n(3608)("species"),
					l = i.Array;
				t.exports = function(t) {
					var e;
					return a(t) && (r(e = t.constructor) && (e === l || a(e.prototype)) ? e = void 0 : s(e) && null === (e = e[o]) && (e = void 0)), void 0 === e ? l : e
				}
			},
			8004: function(t, e, n) {
				var i = n(1924);
				t.exports = function(t, e) {
					return new(i(t))(0 === e ? 0 : e)
				}
			},
			9022: function(t, e, n) {
				"use strict";
				var i = n(9642),
					a = n(6201),
					r = n(8439),
					s = n(7218),
					o = n(2631),
					l = n(8004),
					c = i("Map"),
					u = c.prototype,
					f = a(u.forEach),
					h = a(u.has),
					d = a(u.set),
					p = a([].push);
				t.exports = function(t) {
					var e, n, i, a = o(this),
						u = s(a),
						m = l(a, 0),
						g = new c,
						y = null != t ? r(t) : function(t) {
							return t
						};
					for (e = 0; e < u; e++) !h(g, i = y(n = a[e])) && d(g, i, n);
					return f(g, function(t) {
						p(m, t)
					}), m
				}
			},
			7769: function(t, e, n) {
				"use strict";
				var i = n(1168),
					a = n(287),
					r = n(9638),
					s = n(5963),
					o = n(2275),
					l = n(5723),
					c = n(9642),
					u = n(8419),
					f = c("Promise"),
					h = l.set,
					d = l.get,
					p = function(t, e, n) {
						var i = t.done;
						f.resolve(t.value).then(function(t) {
							e({
								done: i,
								value: t
							})
						}, n)
					},
					m = function(t) {
						h(this, {
							iterator: a(t),
							next: t.next
						})
					};
				m.prototype = o(r(u), {
					next: function(t) {
						var e = d(this),
							n = !!arguments.length;
						return new f(function(r, s) {
							p(a(i(e.next, e.iterator, n ? [t] : [])), r, s)
						})
					},
					return: function(t) {
						var e = d(this).iterator,
							n = !!arguments.length;
						return new f(function(r, o) {
							var l = s(e, "return");
							if (void 0 === l) return r({
								done: !0,
								value: t
							});
							p(a(i(l, e, n ? [t] : [])), r, o)
						})
					},
					throw: function(t) {
						var e = d(this).iterator,
							n = !!arguments.length;
						return new f(function(r, o) {
							var l = s(e, "throw");
							if (void 0 === l) return o(t);
							p(a(i(l, e, n ? [t] : [])), r, o)
						})
					}
				}), t.exports = m
			},
			3488: function(t, e, n) {
				"use strict";
				var i = n(3442),
					a = n(3702),
					r = n(8439),
					s = n(287),
					o = n(9642),
					l = n(5963),
					c = 0x1fffffffffffff,
					u = i.TypeError,
					f = function(t) {
						var e = 0 == t,
							n = 1 == t,
							i = 2 == t,
							f = 3 == t;
						return function(t, h, d) {
							s(t);
							var p = o("Promise"),
								m = r(t.next),
								g = 0,
								y = void 0 !== h;
							return (y || !e) && r(h), new p(function(r, o) {
								var v = function(e, n) {
										try {
											var i = l(t, "return");
											if (i) return p.resolve(a(i, t)).then(function() {
												e(n)
											}, function(t) {
												o(t)
											})
										} catch (t) {
											return o(t)
										}
										e(n)
									},
									b = function(t) {
										v(o, t)
									},
									E = function() {
										try {
											if (e && g > c && y) throw u("The allowed number of iterations has been exceeded");
											p.resolve(s(a(m, t))).then(function(t) {
												try {
													if (s(t).done) e ? (d.length = g, r(d)) : r(!f && (i || void 0));
													else {
														var a = t.value;
														y ? p.resolve(e ? h(a, g) : h(a)).then(function(t) {
															n ? E() : i ? t ? E() : v(r, !1) : e ? (d[g++] = t, E()) : t ? v(r, f || a) : E()
														}, b) : (d[g++] = a, E())
													}
												} catch (t) {
													b(t)
												}
											}, b)
										} catch (t) {
											b(t)
										}
									};
								E()
							})
						}
					};
				t.exports = {
					toArray: f(0),
					forEach: f(1),
					every: f(2),
					some: f(3),
					find: f(4)
				}
			},
			8419: function(t, e, n) {
				var i, a, r = n(3442),
					s = n(1219),
					o = n(3422),
					l = n(9638),
					c = n(327),
					u = n(8238),
					f = n(3608),
					h = n(3581),
					d = "USE_FUNCTION_CONSTRUCTOR",
					p = f("asyncIterator"),
					m = r.AsyncIterator,
					g = s.AsyncIteratorPrototype;
				if (g) i = g;
				else if (o(m)) i = m.prototype;
				else if (s[d] || r[d]) try {
					a = c(c(c(Function("return async function*(){}()")()))), c(a) === Object.prototype && (i = a)
				} catch (t) {}
				i ? h && (i = l(i)) : i = {}, !o(i[p]) && u(i, p, function() {
					return this
				}), t.exports = i
			},
			9674: function(t, e, n) {
				var i = n(6201),
					a = i({}.toString),
					r = i("".slice);
				t.exports = function(t) {
					return r(a(t), 8, -1)
				}
			},
			229: function(t, e, n) {
				var i = n(3442),
					a = n(4756),
					r = n(3422),
					s = n(9674),
					o = n(3608)("toStringTag"),
					l = i.Object,
					c = "Arguments" == s(function() {
						return arguments
					}()),
					u = function(t, e) {
						try {
							return t[e]
						} catch (t) {}
					};
				t.exports = a ? s : function(t) {
					var e, n, i;
					return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = u(e = l(t), o)) ? n : c ? s(e) : "Object" == (i = s(e)) && r(e.callee) ? "Arguments" : i
				}
			},
			5111: function(t, e, n) {
				var i = n(4831),
					a = n(8620),
					r = n(5722),
					s = n(5827);
				t.exports = function(t, e) {
					for (var n = a(e), o = s.f, l = r.f, c = 0; c < n.length; c++) {
						var u = n[c];
						!i(t, u) && o(t, u, l(e, u))
					}
				}
			},
			6738: function(t, e, n) {
				var i = n(4198);
				t.exports = !i(function() {
					function t() {}
					return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
				})
			},
			9756: function(t, e, n) {
				var i = n(4562),
					a = n(5827),
					r = n(8821);
				t.exports = i ? function(t, e, n) {
					return a.f(t, e, r(1, n))
				} : function(t, e, n) {
					return t[e] = n, t
				}
			},
			8821: function(t) {
				t.exports = function(t, e) {
					return {
						enumerable: !(1 & t),
						configurable: !(2 & t),
						writable: !(4 & t),
						value: e
					}
				}
			},
			4562: function(t, e, n) {
				var i = n(4198);
				t.exports = !i(function() {
					return 7 != Object.defineProperty({}, 1, {
						get: function() {
							return 7
						}
					})[1]
				})
			},
			4459: function(t, e, n) {
				var i = n(3442),
					a = n(3292),
					r = i.document,
					s = a(r) && a(r.createElement);
				t.exports = function(t) {
					return s ? r.createElement(t) : {}
				}
			},
			9841: function(t, e, n) {
				var i = n(9642);
				t.exports = i("navigator", "userAgent") || ""
			},
			4733: function(t, e, n) {
				var i, a, r = n(3442),
					s = n(9841),
					o = r.process,
					l = r.Deno,
					c = o && o.versions || l && l.version,
					u = c && c.v8;
				u && (a = (i = u.split("."))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])), !a && s && (!(i = s.match(/Edge\/(\d+)/)) || i[1] >= 74) && (i = s.match(/Chrome\/(\d+)/)) && (a = +i[1]), t.exports = a
			},
			7755: function(t, e, n) {
				var i = n(3442);
				t.exports = function(t) {
					return i[t].prototype
				}
			},
			5906: function(t) {
				t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
			},
			5545: function(t, e, n) {
				var i = n(3442),
					a = n(5722).f,
					r = n(9756),
					s = n(8238),
					o = n(4669),
					l = n(5111),
					c = n(8387);
				t.exports = function(t, e) {
					var n, u, f, h, d, p = t.target,
						m = t.global,
						g = t.stat;
					if (n = m ? i : g ? i[p] || o(p, {}) : (i[p] || {}).prototype)
						for (u in e) {
							if (h = e[u], f = t.noTargetGet ? (d = a(n, u)) && d.value : n[u], !c(m ? u : p + (g ? "." : "#") + u, t.forced) && void 0 !== f) {
								if (typeof h == typeof f) continue;
								l(h, f)
							}(t.sham || f && f.sham) && r(h, "sham", !0), s(n, u, h, t)
						}
				}
			},
			4198: function(t) {
				t.exports = function(t) {
					try {
						return !!t()
					} catch (t) {
						return !0
					}
				}
			},
			1168: function(t) {
				var e = Function.prototype,
					n = e.apply,
					i = e.bind,
					a = e.call;
				t.exports = "object" == typeof Reflect && Reflect.apply || (i ? a.bind(n) : function() {
					return a.apply(n, arguments)
				})
			},
			4026: function(t, e, n) {
				var i = n(6201),
					a = n(8439),
					r = i(i.bind);
				t.exports = function(t, e) {
					return a(t), void 0 === e ? t : r ? r(t, e) : function() {
						return t.apply(e, arguments)
					}
				}
			},
			3702: function(t) {
				var e = Function.prototype.call;
				t.exports = e.bind ? e.bind(e) : function() {
					return e.apply(e, arguments)
				}
			},
			7101: function(t, e, n) {
				var i = n(4562),
					a = n(4831),
					r = Function.prototype,
					s = i && Object.getOwnPropertyDescriptor,
					o = a(r, "name"),
					l = o && "something" === (function() {}).name,
					c = o && (!i || i && s(r, "name").configurable);
				t.exports = {
					EXISTS: o,
					PROPER: l,
					CONFIGURABLE: c
				}
			},
			6201: function(t) {
				var e = Function.prototype,
					n = e.bind,
					i = e.call,
					a = n && n.bind(i);
				t.exports = n ? function(t) {
					return t && a(i, t)
				} : function(t) {
					return t && function() {
						return i.apply(t, arguments)
					}
				}
			},
			6990: function(t, e, n) {
				var i = n(3702),
					a = n(7769),
					r = n(287),
					s = n(958),
					o = n(5963),
					l = n(3608)("asyncIterator");
				t.exports = function(t, e) {
					var n = arguments.length < 2 ? o(t, l) : e;
					return n ? r(i(n, t)) : new a(s(t))
				}
			},
			9642: function(t, e, n) {
				var i = n(3442),
					a = n(3422),
					r = function(t) {
						return a(t) ? t : void 0
					};
				t.exports = function(t, e) {
					return arguments.length < 2 ? r(i[t]) : i[t] && i[t][e]
				}
			},
			306: function(t, e, n) {
				var i = n(229),
					a = n(5963),
					r = n(3759),
					s = n(3608)("iterator");
				t.exports = function(t) {
					if (void 0 != t) return a(t, s) || a(t, "@@iterator") || r[i(t)]
				}
			},
			958: function(t, e, n) {
				var i = n(3442),
					a = n(3702),
					r = n(8439),
					s = n(287),
					o = n(8295),
					l = n(306),
					c = i.TypeError;
				t.exports = function(t, e) {
					var n = arguments.length < 2 ? l(t) : e;
					if (r(n)) return s(a(n, t));
					throw c(o(t) + " is not iterable")
				}
			},
			5963: function(t, e, n) {
				var i = n(8439);
				t.exports = function(t, e) {
					var n = t[e];
					return null == n ? void 0 : i(n)
				}
			},
			3442: function(t, e, n) {
				var i = function(t) {
					return t && t.Math == Math && t
				};
				t.exports = i("object" == typeof globalThis && globalThis) || i("object" == typeof window && window) || i("object" == typeof self && self) || i("object" == typeof n.g && n.g) || function() {
					return this
				}() || Function("return this")()
			},
			4831: function(t, e, n) {
				var i = n(6201),
					a = n(2631),
					r = i({}.hasOwnProperty);
				t.exports = Object.hasOwn || function(t, e) {
					return r(a(t), e)
				}
			},
			2511: function(t) {
				t.exports = {}
			},
			5231: function(t, e, n) {
				var i = n(9642);
				t.exports = i("document", "documentElement")
			},
			8907: function(t, e, n) {
				var i = n(4562),
					a = n(4198),
					r = n(4459);
				t.exports = !i && !a(function() {
					return 7 != Object.defineProperty(r("div"), "a", {
						get: function() {
							return 7
						}
					}).a
				})
			},
			5249: function(t, e, n) {
				var i = n(3442),
					a = n(6201),
					r = n(4198),
					s = n(9674),
					o = i.Object,
					l = a("".split);
				t.exports = r(function() {
					return !o("z").propertyIsEnumerable(0)
				}) ? function(t) {
					return "String" == s(t) ? l(t, "") : o(t)
				} : o
			},
			705: function(t, e, n) {
				var i = n(6201),
					a = n(3422),
					r = n(1219),
					s = i(Function.toString);
				!a(r.inspectSource) && (r.inspectSource = function(t) {
					return s(t)
				}), t.exports = r.inspectSource
			},
			5723: function(t, e, n) {
				var i, a, r, s = n(1585),
					o = n(3442),
					l = n(6201),
					c = n(3292),
					u = n(9756),
					f = n(4831),
					h = n(1219),
					d = n(5511),
					p = n(2511),
					m = "Object already initialized",
					g = o.TypeError,
					y = o.WeakMap,
					v = function(t) {
						return r(t) ? a(t) : i(t, {})
					},
					b = function(t) {
						return function(e) {
							var n;
							if (!c(e) || (n = a(e)).type !== t) throw g("Incompatible receiver, " + t + " required");
							return n
						}
					};
				if (s || h.state) {
					var E = h.state || (h.state = new y),
						T = l(E.get),
						_ = l(E.has),
						I = l(E.set);
					i = function(t, e) {
						if (_(E, t)) throw new g(m);
						return e.facade = t, I(E, t, e), e
					}, a = function(t) {
						return T(E, t) || {}
					}, r = function(t) {
						return _(E, t)
					}
				} else {
					var x = d("state");
					p[x] = !0, i = function(t, e) {
						if (f(t, x)) throw new g(m);
						return e.facade = t, u(t, x, e), e
					}, a = function(t) {
						return f(t, x) ? t[x] : {}
					}, r = function(t) {
						return f(t, x)
					}
				}
				t.exports = {
					set: i,
					get: a,
					has: r,
					enforce: v,
					getterFor: b
				}
			},
			6937: function(t, e, n) {
				var i = n(9674);
				t.exports = Array.isArray || function(t) {
					return "Array" == i(t)
				}
			},
			3422: function(t) {
				t.exports = function(t) {
					return "function" == typeof t
				}
			},
			8281: function(t, e, n) {
				var i = n(6201),
					a = n(4198),
					r = n(3422),
					s = n(229),
					o = n(9642),
					l = n(705),
					c = function() {},
					u = [],
					f = o("Reflect", "construct"),
					h = /^\s*(?:class|function)\b/,
					d = i(h.exec),
					p = !h.exec(c),
					m = function(t) {
						if (!r(t)) return !1;
						try {
							return f(c, u, t), !0
						} catch (t) {
							return !1
						}
					},
					g = function(t) {
						if (!r(t)) return !1;
						switch (s(t)) {
							case "AsyncFunction":
							case "GeneratorFunction":
							case "AsyncGeneratorFunction":
								return !1
						}
						return p || !!d(h, l(t))
					};
				t.exports = !f || a(function() {
					var t;
					return m(m.call) || !m(Object) || !m(function() {
						t = !0
					}) || t
				}) ? g : m
			},
			8387: function(t, e, n) {
				var i = n(4198),
					a = n(3422),
					r = /#|\.prototype\./,
					s = function(t, e) {
						var n = l[o(t)];
						return n == u || n != c && (a(e) ? i(e) : !!e)
					},
					o = s.normalize = function(t) {
						return String(t).replace(r, ".").toLowerCase()
					},
					l = s.data = {},
					c = s.NATIVE = "N",
					u = s.POLYFILL = "P";
				t.exports = s
			},
			3292: function(t, e, n) {
				var i = n(3422);
				t.exports = function(t) {
					return "object" == typeof t ? null !== t : i(t)
				}
			},
			3581: function(t) {
				t.exports = !1
			},
			8924: function(t, e, n) {
				var i = n(3442),
					a = n(9642),
					r = n(3422),
					s = n(9914),
					o = n(2233),
					l = i.Object;
				t.exports = o ? function(t) {
					return "symbol" == typeof t
				} : function(t) {
					var e = a("Symbol");
					return r(e) && s(e.prototype, l(t))
				}
			},
			3759: function(t) {
				t.exports = {}
			},
			7218: function(t, e, n) {
				var i = n(5248);
				t.exports = function(t) {
					return i(t.length)
				}
			},
			5555: function(t, e, n) {
				var i = n(4733),
					a = n(4198);
				t.exports = !!Object.getOwnPropertySymbols && !a(function() {
					var t = Symbol();
					return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && i && i < 41
				})
			},
			1585: function(t, e, n) {
				var i = n(3442),
					a = n(3422),
					r = n(705),
					s = i.WeakMap;
				t.exports = a(s) && /native code/.test(r(s))
			},
			9638: function(t, e, n) {
				var i, a = n(287),
					r = n(3561),
					s = n(5906),
					o = n(2511),
					l = n(5231),
					c = n(4459),
					u = n(5511),
					f = ">",
					h = "<",
					d = "prototype",
					p = "script",
					m = u("IE_PROTO"),
					g = function() {},
					y = function(t) {
						return h + p + f + t + h + "/" + p + f
					},
					v = function(t) {
						t.write(y("")), t.close();
						var e = t.parentWindow.Object;
						return t = null, e
					},
					b = function() {
						var t, e = c("iframe"),
							n = "java" + p + ":";
						return e.style.display = "none", l.appendChild(e), e.src = String(n), (t = e.contentWindow.document).open(), t.write(y("document.F=Object")), t.close(), t.F
					},
					E = function() {
						try {
							i = new ActiveXObject("htmlfile")
						} catch (t) {}
						E = "undefined" != typeof document ? document.domain && i ? v(i) : b() : v(i);
						for (var t = s.length; t--;) delete E[d][s[t]];
						return E()
					};
				o[m] = !0, t.exports = Object.create || function(t, e) {
					var n;
					return null !== t ? (g[d] = a(t), n = new g, g[d] = null, n[m] = t) : n = E(), void 0 === e ? n : r(n, e)
				}
			},
			3561: function(t, e, n) {
				var i = n(4562),
					a = n(5827),
					r = n(287),
					s = n(4920),
					o = n(2475);
				t.exports = i ? Object.defineProperties : function(t, e) {
					r(t);
					for (var n, i = s(e), l = o(e), c = l.length, u = 0; c > u;) a.f(t, n = l[u++], i[n]);
					return t
				}
			},
			5827: function(t, e, n) {
				var i = n(3442),
					a = n(4562),
					r = n(8907),
					s = n(287),
					o = n(5024),
					l = i.TypeError,
					c = Object.defineProperty;
				e.f = a ? c : function(t, e, n) {
					if (s(t), e = o(e), s(n), r) try {
						return c(t, e, n)
					} catch (t) {}
					if ("get" in n || "set" in n) throw l("Accessors not supported");
					return "value" in n && (t[e] = n.value), t
				}
			},
			5722: function(t, e, n) {
				var i = n(4562),
					a = n(3702),
					r = n(9626),
					s = n(8821),
					o = n(4920),
					l = n(5024),
					c = n(4831),
					u = n(8907),
					f = Object.getOwnPropertyDescriptor;
				e.f = i ? f : function(t, e) {
					if (t = o(t), e = l(e), u) try {
						return f(t, e)
					} catch (t) {}
					if (c(t, e)) return s(!a(r.f, t, e), t[e])
				}
			},
			4671: function(t, e, n) {
				var i = n(8834),
					a = n(5906).concat("length", "prototype");
				e.f = Object.getOwnPropertyNames || function(t) {
					return i(t, a)
				}
			},
			1089: function(t, e) {
				e.f = Object.getOwnPropertySymbols
			},
			327: function(t, e, n) {
				var i = n(3442),
					a = n(4831),
					r = n(3422),
					s = n(2631),
					o = n(5511),
					l = n(6738),
					c = o("IE_PROTO"),
					u = i.Object,
					f = u.prototype;
				t.exports = l ? u.getPrototypeOf : function(t) {
					var e = s(t);
					if (a(e, c)) return e[c];
					var n = e.constructor;
					return r(n) && e instanceof n ? n.prototype : e instanceof u ? f : null
				}
			},
			9914: function(t, e, n) {
				var i = n(6201);
				t.exports = i({}.isPrototypeOf)
			},
			8834: function(t, e, n) {
				var i = n(6201),
					a = n(4831),
					r = n(4920),
					s = n(6030).indexOf,
					o = n(2511),
					l = i([].push);
				t.exports = function(t, e) {
					var n, i = r(t),
						c = 0,
						u = [];
					for (n in i) !a(o, n) && a(i, n) && l(u, n);
					for (; e.length > c;) a(i, n = e[c++]) && (~s(u, n) || l(u, n));
					return u
				}
			},
			2475: function(t, e, n) {
				var i = n(8834),
					a = n(5906);
				t.exports = Object.keys || function(t) {
					return i(t, a)
				}
			},
			9626: function(t, e) {
				"use strict";
				var n = {}.propertyIsEnumerable,
					i = Object.getOwnPropertyDescriptor,
					a = i && !n.call({
						1: 2
					}, 1);
				e.f = a ? function(t) {
					var e = i(this, t);
					return !!e && e.enumerable
				} : n
			},
			9295: function(t, e, n) {
				var i = n(3442),
					a = n(3702),
					r = n(3422),
					s = n(3292),
					o = i.TypeError;
				t.exports = function(t, e) {
					var n, i;
					if ("string" === e && r(n = t.toString) && !s(i = a(n, t)) || r(n = t.valueOf) && !s(i = a(n, t)) || "string" !== e && r(n = t.toString) && !s(i = a(n, t))) return i;
					throw o("Can't convert object to primitive value")
				}
			},
			8620: function(t, e, n) {
				var i = n(9642),
					a = n(6201),
					r = n(4671),
					s = n(1089),
					o = n(287),
					l = a([].concat);
				t.exports = i("Reflect", "ownKeys") || function(t) {
					var e = r.f(o(t)),
						n = s.f;
					return n ? l(e, n(t)) : e
				}
			},
			2275: function(t, e, n) {
				var i = n(8238);
				t.exports = function(t, e, n) {
					for (var a in e) i(t, a, e[a], n);
					return t
				}
			},
			8238: function(t, e, n) {
				var i = n(3442),
					a = n(3422),
					r = n(4831),
					s = n(9756),
					o = n(4669),
					l = n(705),
					c = n(5723),
					u = n(7101).CONFIGURABLE,
					f = c.get,
					h = c.enforce,
					d = String(String).split("String");
				(t.exports = function(t, e, n, l) {
					var c, f = !!l && !!l.unsafe,
						p = !!l && !!l.enumerable,
						m = !!l && !!l.noTargetGet,
						g = l && void 0 !== l.name ? l.name : e;
					if (a(n) && ("Symbol(" === String(g).slice(0, 7) && (g = "[" + String(g).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!r(n, "name") || u && n.name !== g) && s(n, "name", g), !(c = h(n)).source && (c.source = d.join("string" == typeof g ? g : ""))), t === i) {
						p ? t[e] = n : o(e, n);
						return
					}
					f ? !m && t[e] && (p = !0) : delete t[e];
					p ? t[e] = n : s(t, e, n)
				})(Function.prototype, "toString", function() {
					return a(this) && f(this).source || l(this)
				})
			},
			8369: function(t, e, n) {
				var i = n(3442).TypeError;
				t.exports = function(t) {
					if (void 0 == t) throw i("Can't call method on " + t);
					return t
				}
			},
			4669: function(t, e, n) {
				var i = n(3442),
					a = Object.defineProperty;
				t.exports = function(t, e) {
					try {
						a(i, t, {
							value: e,
							configurable: !0,
							writable: !0
						})
					} catch (n) {
						i[t] = e
					}
					return e
				}
			},
			5511: function(t, e, n) {
				var i = n(4147),
					a = n(6760),
					r = i("keys");
				t.exports = function(t) {
					return r[t] || (r[t] = a(t))
				}
			},
			1219: function(t, e, n) {
				var i = n(3442),
					a = n(4669),
					r = "__core-js_shared__",
					s = i[r] || a(r, {});
				t.exports = s
			},
			4147: function(t, e, n) {
				var i = n(3581),
					a = n(1219);
				(t.exports = function(t, e) {
					return a[t] || (a[t] = void 0 !== e ? e : {})
				})("versions", []).push({
					version: "3.19.0",
					mode: i ? "pure" : "global",
					copyright: "\xa9 2021 Denis Pushkarev (zloirock.ru)"
				})
			},
			9892: function(t, e, n) {
				var i = n(8063),
					a = Math.max,
					r = Math.min;
				t.exports = function(t, e) {
					var n = i(t);
					return n < 0 ? a(n + e, 0) : r(n, e)
				}
			},
			4920: function(t, e, n) {
				var i = n(5249),
					a = n(8369);
				t.exports = function(t) {
					return i(a(t))
				}
			},
			8063: function(t) {
				var e = Math.ceil,
					n = Math.floor;
				t.exports = function(t) {
					var i = +t;
					return i != i || 0 === i ? 0 : (i > 0 ? n : e)(i)
				}
			},
			5248: function(t, e, n) {
				var i = n(8063),
					a = Math.min;
				t.exports = function(t) {
					return t > 0 ? a(i(t), 0x1fffffffffffff) : 0
				}
			},
			2631: function(t, e, n) {
				var i = n(3442),
					a = n(8369),
					r = i.Object;
				t.exports = function(t) {
					return r(a(t))
				}
			},
			194: function(t, e, n) {
				var i = n(3442),
					a = n(3702),
					r = n(3292),
					s = n(8924),
					o = n(5963),
					l = n(9295),
					c = n(3608),
					u = i.TypeError,
					f = c("toPrimitive");
				t.exports = function(t, e) {
					if (!r(t) || s(t)) return t;
					var n, i = o(t, f);
					if (i) {
						if (void 0 === e && (e = "default"), !r(n = a(i, t, e)) || s(n)) return n;
						throw u("Can't convert object to primitive value")
					}
					return void 0 === e && (e = "number"), l(t, e)
				}
			},
			5024: function(t, e, n) {
				var i = n(194),
					a = n(8924);
				t.exports = function(t) {
					var e = i(t, "string");
					return a(e) ? e : e + ""
				}
			},
			4756: function(t, e, n) {
				var i = n(3608)("toStringTag"),
					a = {};
				a[i] = "z", t.exports = "[object z]" === String(a)
			},
			8295: function(t, e, n) {
				var i = n(3442).String;
				t.exports = function(t) {
					try {
						return i(t)
					} catch (t) {
						return "Object"
					}
				}
			},
			6760: function(t, e, n) {
				var i = n(6201),
					a = 0,
					r = Math.random(),
					s = i(1..toString);
				t.exports = function(t) {
					return "Symbol(" + (void 0 === t ? "" : t) + ")_" + s(++a + r, 36)
				}
			},
			2233: function(t, e, n) {
				var i = n(5555);
				t.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator
			},
			3608: function(t, e, n) {
				var i = n(3442),
					a = n(4147),
					r = n(4831),
					s = n(6760),
					o = n(5555),
					l = n(2233),
					c = a("wks"),
					u = i.Symbol,
					f = u && u.for,
					h = l ? u : u && u.withoutSetter || s;
				t.exports = function(t) {
					if (!r(c, t) || !(o || "string" == typeof c[t])) {
						var e = "Symbol." + t;
						o && r(u, t) ? c[t] = u[t] : l && f ? c[t] = f(e) : c[t] = h(e)
					}
					return c[t]
				}
			},
			233: function(t, e, n) {
				"use strict";
				var i = n(5545),
					a = n(3539).filterReject,
					r = n(7759);
				i({
					target: "Array",
					proto: !0
				}, {
					filterOut: function(t) {
						return a(this, t, arguments.length > 1 ? arguments[1] : void 0)
					}
				}), r("filterOut")
			},
			9754: function(t, e, n) {
				"use strict";
				var i = n(5545),
					a = n(3539).filterReject,
					r = n(7759);
				i({
					target: "Array",
					proto: !0
				}, {
					filterReject: function(t) {
						return a(this, t, arguments.length > 1 ? arguments[1] : void 0)
					}
				}), r("filterReject")
			},
			2897: function(t, e, n) {
				n(5545)({
					target: "Array",
					stat: !0
				}, {
					fromAsync: n(9373)
				})
			},
			971: function(t, e, n) {
				"use strict";
				var i = n(5545),
					a = n(4655),
					r = n(1924),
					s = n(7759);
				i({
					target: "Array",
					proto: !0
				}, {
					groupBy: function(t) {
						var e = arguments.length > 1 ? arguments[1] : void 0;
						return a(this, t, e, r)
					}
				}), s("groupBy")
			},
			2374: function(t, e, n) {
				var i = n(5545),
					a = n(6937),
					r = Object.isFrozen,
					s = function(t, e) {
						if (!r || !a(t) || !r(t)) return !1;
						for (var n, i = 0, s = t.length; i < s;)
							if (!("string" == typeof(n = t[i++]) || e && void 0 === n)) return !1;
						return 0 !== s
					};
				i({
					target: "Array",
					stat: !0
				}, {
					isTemplateObject: function(t) {
						if (!s(t, !0)) return !1;
						var e = t.raw;
						return !!(e.length === t.length && s(e, !1)) || !1
					}
				})
			},
			5152: function(t, e, n) {
				"use strict";
				var i = n(4562),
					a = n(7759),
					r = n(2631),
					s = n(7218),
					o = n(5827).f;
				i && !("lastIndex" in []) && (o(Array.prototype, "lastIndex", {
					configurable: !0,
					get: function() {
						var t = s(r(this));
						return 0 == t ? 0 : t - 1
					}
				}), a("lastIndex"))
			},
			5273: function(t, e, n) {
				"use strict";
				var i = n(4562),
					a = n(7759),
					r = n(2631),
					s = n(7218),
					o = n(5827).f;
				i && !("lastItem" in []) && (o(Array.prototype, "lastItem", {
					configurable: !0,
					get: function() {
						var t = r(this),
							e = s(t);
						return 0 == e ? void 0 : t[e - 1]
					},
					set: function(t) {
						var e = r(this),
							n = s(e);
						return e[0 == n ? 0 : n - 1] = t
					}
				}), a("lastItem"))
			},
			172: function(t, e, n) {
				"use strict";
				var i = n(5545),
					a = n(7759);
				i({
					target: "Array",
					proto: !0
				}, {
					uniqueBy: n(9022)
				}), a("uniqueBy")
			},
			8172: function(t, e, n) {
				var i = n(440)(n(5238), "DataView");
				t.exports = i
			},
			1796: function(t, e, n) {
				var i = n(7322),
					a = n(2937),
					r = n(207),
					s = n(2165),
					o = n(7523);

				function l(t) {
					var e = -1,
						n = null == t ? 0 : t.length;
					for (this.clear(); ++e < n;) {
						var i = t[e];
						this.set(i[0], i[1])
					}
				}
				l.prototype.clear = i, l.prototype.delete = a, l.prototype.get = r, l.prototype.has = s, l.prototype.set = o, t.exports = l
			},
			4281: function(t, e, n) {
				var i = n(5940),
					a = n(4382),
					r = 0xffffffff;

				function s(t) {
					this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = r, this.__views__ = []
				}
				s.prototype = i(a.prototype), s.prototype.constructor = s, t.exports = s
			},
			283: function(t, e, n) {
				var i = n(7435),
					a = n(8438),
					r = n(3067),
					s = n(9679),
					o = n(2426);

				function l(t) {
					var e = -1,
						n = null == t ? 0 : t.length;
					for (this.clear(); ++e < n;) {
						var i = t[e];
						this.set(i[0], i[1])
					}
				}
				l.prototype.clear = i, l.prototype.delete = a, l.prototype.get = r, l.prototype.has = s, l.prototype.set = o, t.exports = l
			},
			9675: function(t, e, n) {
				var i = n(5940),
					a = n(4382);

				function r(t, e) {
					this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0
				}
				r.prototype = i(a.prototype), r.prototype.constructor = r, t.exports = r
			},
			9036: function(t, e, n) {
				var i = n(440)(n(5238), "Map");
				t.exports = i
			},
			4544: function(t, e, n) {
				var i = n(6409),
					a = n(5335),
					r = n(5601),
					s = n(1533),
					o = n(151);

				function l(t) {
					var e = -1,
						n = null == t ? 0 : t.length;
					for (this.clear(); ++e < n;) {
						var i = t[e];
						this.set(i[0], i[1])
					}
				}
				l.prototype.clear = i, l.prototype.delete = a, l.prototype.get = r, l.prototype.has = s, l.prototype.set = o, t.exports = l
			},
			44: function(t, e, n) {
				var i = n(440)(n(5238), "Promise");
				t.exports = i
			},
			6656: function(t, e, n) {
				var i = n(440)(n(5238), "Set");
				t.exports = i
			},
			3290: function(t, e, n) {
				var i = n(4544),
					a = n(1760),
					r = n(5484);

				function s(t) {
					var e = -1,
						n = null == t ? 0 : t.length;
					for (this.__data__ = new i; ++e < n;) this.add(t[e])
				}
				s.prototype.add = s.prototype.push = a, s.prototype.has = r, t.exports = s
			},
			1902: function(t, e, n) {
				var i = n(283),
					a = n(6063),
					r = n(7727),
					s = n(3281),
					o = n(6667),
					l = n(1270);

				function c(t) {
					var e = this.__data__ = new i(t);
					this.size = e.size
				}
				c.prototype.clear = a, c.prototype.delete = r, c.prototype.get = s, c.prototype.has = o, c.prototype.set = l, t.exports = c
			},
			4886: function(t, e, n) {
				var i = n(5238).Symbol;
				t.exports = i
			},
			8965: function(t, e, n) {
				var i = n(5238).Uint8Array;
				t.exports = i
			},
			3283: function(t, e, n) {
				var i = n(440)(n(5238), "WeakMap");
				t.exports = i
			},
			9198: function(t) {
				function e(t, e, n) {
					switch (n.length) {
						case 0:
							return t.call(e);
						case 1:
							return t.call(e, n[0]);
						case 2:
							return t.call(e, n[0], n[1]);
						case 3:
							return t.call(e, n[0], n[1], n[2])
					}
					return t.apply(e, n)
				}
				t.exports = e
			},
			4970: function(t) {
				function e(t, e) {
					for (var n = -1, i = null == t ? 0 : t.length; ++n < i && !1 !== e(t[n], n, t););
					return t
				}
				t.exports = e
			},
			2654: function(t) {
				function e(t, e) {
					for (var n = -1, i = null == t ? 0 : t.length, a = 0, r = []; ++n < i;) {
						var s = t[n];
						e(s, n, t) && (r[a++] = s)
					}
					return r
				}
				t.exports = e
			},
			4979: function(t, e, n) {
				var i = n(1682),
					a = n(9732),
					r = n(6377),
					s = n(6018),
					o = n(9251),
					l = n(8586),
					c = Object.prototype.hasOwnProperty;

				function u(t, e) {
					var n = r(t),
						u = !n && a(t),
						f = !n && !u && s(t),
						h = !n && !u && !f && l(t),
						d = n || u || f || h,
						p = d ? i(t.length, String) : [],
						m = p.length;
					for (var g in t)(e || c.call(t, g)) && !(d && ("length" == g || f && ("offset" == g || "parent" == g) || h && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || o(g, m))) && p.push(g);
					return p
				}
				t.exports = u
			},
			1098: function(t) {
				function e(t, e) {
					for (var n = -1, i = null == t ? 0 : t.length, a = Array(i); ++n < i;) a[n] = e(t[n], n, t);
					return a
				}
				t.exports = e
			},
			5741: function(t) {
				function e(t, e) {
					for (var n = -1, i = e.length, a = t.length; ++n < i;) t[a + n] = e[n];
					return t
				}
				t.exports = e
			},
			2607: function(t) {
				function e(t, e, n, i) {
					var a = -1,
						r = null == t ? 0 : t.length;
					for (i && r && (n = t[++a]); ++a < r;) n = e(n, t[a], a, t);
					return n
				}
				t.exports = e
			},
			3955: function(t) {
				function e(t, e) {
					for (var n = -1, i = null == t ? 0 : t.length; ++n < i;)
						if (e(t[n], n, t)) return !0;
					return !1
				}
				t.exports = e
			},
			609: function(t, e, n) {
				var i = n(2726)("length");
				t.exports = i
			},
			3615: function(t, e, n) {
				var i = n(2676),
					a = n(4071),
					r = Object.prototype.hasOwnProperty;

				function s(t, e, n) {
					var s = t[e];
					(!(r.call(t, e) && a(s, n)) || void 0 === n && !(e in t)) && i(t, e, n)
				}
				t.exports = s
			},
			8357: function(t, e, n) {
				var i = n(4071);

				function a(t, e) {
					for (var n = t.length; n--;)
						if (i(t[n][0], e)) return n;
					return -1
				}
				t.exports = a
			},
			2676: function(t, e, n) {
				var i = n(9833);

				function a(t, e, n) {
					"__proto__" == e && i ? i(t, e, {
						configurable: !0,
						enumerable: !0,
						value: n,
						writable: !0
					}) : t[e] = n
				}
				t.exports = a
			},
			2009: function(t) {
				function e(t, e, n) {
					return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t
				}
				t.exports = e
			},
			5940: function(t, e, n) {
				var i = n(8532),
					a = Object.create,
					r = function() {
						function t() {}
						return function(e) {
							if (!i(e)) return {};
							if (a) return a(e);
							t.prototype = e;
							var n = new t;
							return t.prototype = void 0, n
						}
					}();
				t.exports = r
			},
			8264: function(t, e, n) {
				var i = n(3406),
					a = n(2679)(i);
				t.exports = a
			},
			2056: function(t) {
				function e(t, e, n, i) {
					for (var a = t.length, r = n + (i ? 1 : -1); i ? r-- : ++r < a;)
						if (e(t[r], r, t)) return r;
					return -1
				}
				t.exports = e
			},
			5265: function(t, e, n) {
				var i = n(5741),
					a = n(1668);

				function r(t, e, n, s, o) {
					var l = -1,
						c = t.length;
					for (n || (n = a), o || (o = []); ++l < c;) {
						var u = t[l];
						e > 0 && n(u) ? e > 1 ? r(u, e - 1, n, s, o) : i(o, u) : !s && (o[o.length] = u)
					}
					return o
				}
				t.exports = r
			},
			1: function(t, e, n) {
				var i = n(132)();
				t.exports = i
			},
			3406: function(t, e, n) {
				var i = n(1),
					a = n(7361);

				function r(t, e) {
					return t && i(t, e, a)
				}
				t.exports = r
			},
			1957: function(t, e, n) {
				var i = n(3835),
					a = n(8481);

				function r(t, e) {
					e = i(e, t);
					for (var n = 0, r = e.length; null != t && n < r;) t = t[a(e[n++])];
					return n && n == r ? t : void 0
				}
				t.exports = r
			},
			7743: function(t, e, n) {
				var i = n(5741),
					a = n(6377);

				function r(t, e, n) {
					var r = e(t);
					return a(t) ? r : i(r, n(t))
				}
				t.exports = r
			},
			3757: function(t, e, n) {
				var i = n(4886),
					a = n(5118),
					r = n(7070),
					s = "[object Null]",
					o = "[object Undefined]",
					l = i ? i.toStringTag : void 0;

				function c(t) {
					return null == t ? void 0 === t ? o : s : l && l in Object(t) ? a(t) : r(t)
				}
				t.exports = c
			},
			6993: function(t) {
				function e(t, e) {
					return null != t && e in Object(t)
				}
				t.exports = e
			},
			841: function(t, e, n) {
				var i = n(3757),
					a = n(7013),
					r = "[object Arguments]";

				function s(t) {
					return a(t) && i(t) == r
				}
				t.exports = s
			},
			5447: function(t, e, n) {
				var i = n(906),
					a = n(7013);

				function r(t, e, n, s, o) {
					return t === e || (null != t && null != e && (a(t) || a(e)) ? i(t, e, n, s, r, o) : t != t && e != e)
				}
				t.exports = r
			},
			906: function(t, e, n) {
				var i = n(1902),
					a = n(4476),
					r = n(9027),
					s = n(8714),
					o = n(9937),
					l = n(6377),
					c = n(6018),
					u = n(8586),
					f = 1,
					h = "[object Arguments]",
					d = "[object Array]",
					p = "[object Object]",
					m = Object.prototype.hasOwnProperty;

				function g(t, e, n, g, y, v) {
					var b = l(t),
						E = l(e),
						T = b ? d : o(t),
						_ = E ? d : o(e);
					T = T == h ? p : T, _ = _ == h ? p : _;
					var I = T == p,
						x = _ == p,
						A = T == _;
					if (A && c(t)) {
						if (!c(e)) return !1;
						b = !0, I = !1
					}
					if (A && !I) return v || (v = new i), b || u(t) ? a(t, e, n, g, y, v) : r(t, e, T, n, g, y, v);
					if (!(n & f)) {
						var S = I && m.call(t, "__wrapped__"),
							w = x && m.call(e, "__wrapped__");
						if (S || w) {
							var O = S ? t.value() : t,
								C = w ? e.value() : e;
							return v || (v = new i), y(O, C, n, g, v)
						}
					}
					return !!A && (v || (v = new i), s(t, e, n, g, y, v))
				}
				t.exports = g
			},
			7293: function(t, e, n) {
				var i = n(1902),
					a = n(5447),
					r = 1,
					s = 2;

				function o(t, e, n, o) {
					var l = n.length,
						c = l,
						u = !o;
					if (null == t) return !c;
					for (t = Object(t); l--;) {
						var f = n[l];
						if (u && f[2] ? f[1] !== t[f[0]] : !(f[0] in t)) return !1
					}
					for (; ++l < c;) {
						var h = (f = n[l])[0],
							d = t[h],
							p = f[1];
						if (u && f[2]) {
							if (void 0 === d && !(h in t)) return !1
						} else {
							var m = new i;
							if (o) var g = o(d, p, h, t, e, m);
							if (!(void 0 === g ? a(p, d, r | s, o, m) : g)) return !1
						}
					}
					return !0
				}
				t.exports = o
			},
			692: function(t, e, n) {
				var i = n(6644),
					a = n(3417),
					r = n(8532),
					s = n(1473),
					o = /[\\^$.*+?()[\]{}|]/g,
					l = /^\[object .+?Constructor\]$/,
					c = Object.prototype,
					u = Function.prototype.toString,
					f = c.hasOwnProperty,
					h = RegExp("^" + u.call(f).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

				function d(t) {
					return !(!r(t) || a(t)) && (i(t) ? h : l).test(s(t))
				}
				t.exports = d
			},
			2195: function(t, e, n) {
				var i = n(3757),
					a = n(7924),
					r = n(7013),
					s = "[object Arguments]",
					o = "[object Array]",
					l = "[object Boolean]",
					c = "[object Date]",
					u = "[object Error]",
					f = "[object Function]",
					h = "[object Map]",
					d = "[object Number]",
					p = "[object Object]",
					m = "[object RegExp]",
					g = "[object Set]",
					y = "[object String]",
					v = "[object WeakMap]",
					b = "[object ArrayBuffer]",
					E = "[object DataView]",
					T = "[object Float64Array]",
					_ = "[object Int8Array]",
					I = "[object Int16Array]",
					x = "[object Int32Array]",
					A = "[object Uint8Array]",
					S = "[object Uint8ClampedArray]",
					w = "[object Uint16Array]",
					O = "[object Uint32Array]",
					C = {};

				function P(t) {
					return r(t) && a(t.length) && !!C[i(t)]
				}
				C["[object Float32Array]"] = C[T] = C[_] = C[I] = C[x] = C[A] = C[S] = C[w] = C[O] = !0, C[s] = C[o] = C[b] = C[l] = C[E] = C[c] = C[u] = C[f] = C[h] = C[d] = C[p] = C[m] = C[g] = C[y] = C[v] = !1, t.exports = P
			},
			5462: function(t, e, n) {
				var i = n(6358),
					a = n(4503),
					r = n(1622),
					s = n(6377),
					o = n(8303);

				function l(t) {
					return "function" == typeof t ? t : null == t ? r : "object" == typeof t ? s(t) ? a(t[0], t[1]) : i(t) : o(t)
				}
				t.exports = l
			},
			7407: function(t, e, n) {
				var i = n(8857),
					a = n(2440),
					r = Object.prototype.hasOwnProperty;

				function s(t) {
					if (!i(t)) return a(t);
					var e = [];
					for (var n in Object(t)) r.call(t, n) && "constructor" != n && e.push(n);
					return e
				}
				t.exports = s
			},
			9237: function(t, e, n) {
				var i = n(8532),
					a = n(8857),
					r = n(1308),
					s = Object.prototype.hasOwnProperty;

				function o(t) {
					if (!i(t)) return r(t);
					var e = a(t),
						n = [];
					for (var o in t) !("constructor" == o && (e || !s.call(t, o))) && n.push(o);
					return n
				}
				t.exports = o
			},
			4382: function(t) {
				function e() {}
				t.exports = e
			},
			6358: function(t, e, n) {
				var i = n(7293),
					a = n(7145),
					r = n(4167);

				function s(t) {
					var e = a(t);
					return 1 == e.length && e[0][2] ? r(e[0][0], e[0][1]) : function(n) {
						return n === t || i(n, t, e)
					}
				}
				t.exports = s
			},
			4503: function(t, e, n) {
				var i = n(5447),
					a = n(4738),
					r = n(9290),
					s = n(7074),
					o = n(1542),
					l = n(4167),
					c = n(8481),
					u = 1,
					f = 2;

				function h(t, e) {
					return s(t) && o(e) ? l(c(t), e) : function(n) {
						var s = a(n, t);
						return void 0 === s && s === e ? r(n, t) : i(e, s, u | f)
					}
				}
				t.exports = h
			},
			7100: function(t, e, n) {
				var i = n(1957),
					a = n(5495),
					r = n(3835);

				function s(t, e, n) {
					for (var s = -1, o = e.length, l = {}; ++s < o;) {
						var c = e[s],
							u = i(t, c);
						n(u, c) && a(l, r(c, t), u)
					}
					return l
				}
				t.exports = s
			},
			2726: function(t) {
				function e(t) {
					return function(e) {
						return null == e ? void 0 : e[t]
					}
				}
				t.exports = e
			},
			1374: function(t, e, n) {
				var i = n(1957);

				function a(t) {
					return function(e) {
						return i(e, t)
					}
				}
				t.exports = a
			},
			9864: function(t) {
				function e(t, e, n, i, a) {
					return a(t, function(t, a, r) {
						n = i ? (i = !1, t) : e(n, t, a, r)
					}), n
				}
				t.exports = e
			},
			5495: function(t, e, n) {
				var i = n(3615),
					a = n(3835),
					r = n(9251),
					s = n(8532),
					o = n(8481);

				function l(t, e, n, l) {
					if (!s(t)) return t;
					e = a(e, t);
					for (var c = -1, u = e.length, f = u - 1, h = t; null != h && ++c < u;) {
						var d = o(e[c]),
							p = n;
						if ("__proto__" === d || "constructor" === d || "prototype" === d) break;
						if (c != f) {
							var m = h[d];
							void 0 === (p = l ? l(m, d, h) : void 0) && (p = s(m) ? m : r(e[c + 1]) ? [] : {})
						}
						i(h, d, p), h = h[d]
					}
					return t
				}
				t.exports = l
			},
			2422: function(t, e, n) {
				var i = n(5055),
					a = n(9833),
					r = n(1622),
					s = a ? function(t, e) {
						return a(t, "toString", {
							configurable: !0,
							enumerable: !1,
							value: i(e),
							writable: !0
						})
					} : r;
				t.exports = s
			},
			1682: function(t) {
				function e(t, e) {
					for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n);
					return i
				}
				t.exports = e
			},
			9653: function(t, e, n) {
				var i = n(4886),
					a = n(1098),
					r = n(6377),
					s = n(1359),
					o = 1 / 0,
					l = i ? i.prototype : void 0,
					c = l ? l.toString : void 0;

				function u(t) {
					if ("string" == typeof t) return t;
					if (r(t)) return a(t, u) + "";
					if (s(t)) return c ? c.call(t) : "";
					var e = t + "";
					return "0" == e && 1 / t == -o ? "-0" : e
				}
				t.exports = u
			},
			1072: function(t, e, n) {
				var i = n(3230),
					a = /^\s+/;

				function r(t) {
					return t ? t.slice(0, i(t) + 1).replace(a, "") : t
				}
				t.exports = r
			},
			7509: function(t) {
				function e(t) {
					return function(e) {
						return t(e)
					}
				}
				t.exports = e
			},
			2471: function(t) {
				function e(t, e) {
					return t.has(e)
				}
				t.exports = e
			},
			8269: function(t, e, n) {
				var i = n(1622);

				function a(t) {
					return "function" == typeof t ? t : i
				}
				t.exports = a
			},
			3835: function(t, e, n) {
				var i = n(6377),
					a = n(7074),
					r = n(8997),
					s = n(6214);

				function o(t, e) {
					return i(t) ? t : a(t, e) ? [t] : r(s(t))
				}
				t.exports = o
			},
			8606: function(t) {
				function e(t, e) {
					var n = -1,
						i = t.length;
					for (e || (e = Array(i)); ++n < i;) e[n] = t[n];
					return e
				}
				t.exports = e
			},
			5772: function(t, e, n) {
				var i = n(5238)["__core-js_shared__"];
				t.exports = i
			},
			2679: function(t, e, n) {
				var i = n(508);

				function a(t, e) {
					return function(n, a) {
						if (null == n) return n;
						if (!i(n)) return t(n, a);
						for (var r = n.length, s = e ? r : -1, o = Object(n);
							(e ? s-- : ++s < r) && !1 !== a(o[s], s, o););
						return n
					}
				}
				t.exports = a
			},
			132: function(t) {
				function e(t) {
					return function(e, n, i) {
						for (var a = -1, r = Object(e), s = i(e), o = s.length; o--;) {
							var l = s[t ? o : ++a];
							if (!1 === n(r[l], l, r)) break
						}
						return e
					}
				}
				t.exports = e
			},
			727: function(t, e, n) {
				var i = n(5462),
					a = n(508),
					r = n(7361);

				function s(t) {
					return function(e, n, s) {
						var o = Object(e);
						if (!a(e)) {
							var l = i(n, 3);
							e = r(e), n = function(t) {
								return l(o[t], t, o)
							}
						}
						var c = t(e, n, s);
						return c > -1 ? o[l ? e[c] : c] : void 0
					}
				}
				t.exports = s
			},
			914: function(t, e, n) {
				var i = n(9675),
					a = n(4502),
					r = n(6007),
					s = n(195),
					o = n(6377),
					l = n(6252),
					c = "Expected a function",
					u = 8,
					f = 32,
					h = 128,
					d = 256;

				function p(t) {
					return a(function(e) {
						var n = e.length,
							a = n,
							p = i.prototype.thru;
						for (t && e.reverse(); a--;) {
							var m = e[a];
							if ("function" != typeof m) throw TypeError(c);
							if (p && !g && "wrapper" == s(m)) var g = new i([], !0)
						}
						for (a = g ? a : n; ++a < n;) {
							var y = s(m = e[a]),
								v = "wrapper" == y ? r(m) : void 0;
							g = v && l(v[0]) && v[1] == (h | u | f | d) && !v[4].length && 1 == v[9] ? g[s(v[0])].apply(g, v[3]) : 1 == m.length && l(m) ? g[y]() : g.thru(m)
						}
						return function() {
							var t = arguments,
								i = t[0];
							if (g && 1 == t.length && o(i)) return g.plant(i).value();
							for (var a = 0, r = n ? e[a].apply(this, t) : i; ++a < n;) r = e[a].call(this, r);
							return r
						}
					})
				}
				t.exports = p
			},
			9833: function(t, e, n) {
				var i = n(440),
					a = function() {
						try {
							var t = i(Object, "defineProperty");
							return t({}, "", {}), t
						} catch (t) {}
					}();
				t.exports = a
			},
			4476: function(t, e, n) {
				var i = n(3290),
					a = n(3955),
					r = n(2471),
					s = 1,
					o = 2;

				function l(t, e, n, l, c, u) {
					var f = n & s,
						h = t.length,
						d = e.length;
					if (h != d && !(f && d > h)) return !1;
					var p = u.get(t),
						m = u.get(e);
					if (p && m) return p == e && m == t;
					var g = -1,
						y = !0,
						v = n & o ? new i : void 0;
					for (u.set(t, e), u.set(e, t); ++g < h;) {
						var b = t[g],
							E = e[g];
						if (l) var T = f ? l(E, b, g, e, t, u) : l(b, E, g, t, e, u);
						if (void 0 !== T) {
							if (T) continue;
							y = !1;
							break
						}
						if (v) {
							if (!a(e, function(t, e) {
									if (!r(v, e) && (b === t || c(b, t, n, l, u))) return v.push(e)
								})) {
								y = !1;
								break
							}
						} else if (!(b === E || c(b, E, n, l, u))) {
							y = !1;
							break
						}
					}
					return u.delete(t), u.delete(e), y
				}
				t.exports = l
			},
			9027: function(t, e, n) {
				var i = n(4886),
					a = n(8965),
					r = n(4071),
					s = n(4476),
					o = n(7170),
					l = n(2779),
					c = 1,
					u = 2,
					f = "[object Boolean]",
					h = "[object Date]",
					d = "[object Error]",
					p = "[object Map]",
					m = "[object Number]",
					g = "[object RegExp]",
					y = "[object Set]",
					v = "[object String]",
					b = "[object Symbol]",
					E = "[object ArrayBuffer]",
					T = "[object DataView]",
					_ = i ? i.prototype : void 0,
					I = _ ? _.valueOf : void 0;

				function x(t, e, n, i, _, x, A) {
					switch (n) {
						case T:
							if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) break;
							t = t.buffer, e = e.buffer;
						case E:
							if (t.byteLength != e.byteLength || !x(new a(t), new a(e))) break;
							return !0;
						case f:
						case h:
						case m:
							return r(+t, +e);
						case d:
							return t.name == e.name && t.message == e.message;
						case g:
						case v:
							return t == e + "";
						case p:
							var S = o;
						case y:
							var w = i & c;
							if (S || (S = l), t.size != e.size && !w) break;
							var O = A.get(t);
							if (O) return O == e;
							i |= u, A.set(t, e);
							var C = s(S(t), S(e), i, _, x, A);
							return A.delete(t), C;
						case b:
							if (I) return I.call(t) == I.call(e)
					}
					return !1
				}
				t.exports = x
			},
			8714: function(t, e, n) {
				var i = n(3948),
					a = 1,
					r = Object.prototype.hasOwnProperty;

				function s(t, e, n, s, o, l) {
					var c = n & a,
						u = i(t),
						f = u.length;
					if (f != i(e).length && !c) return !1;
					for (var h = f; h--;) {
						var d = u[h];
						if (!(c ? d in e : r.call(e, d))) return !1
					}
					var p = l.get(t),
						m = l.get(e);
					if (p && m) return p == e && m == t;
					var g = !0;
					l.set(t, e), l.set(e, t);
					for (var y = c; ++h < f;) {
						var v = t[d = u[h]],
							b = e[d];
						if (s) var E = c ? s(b, v, d, e, t, l) : s(v, b, d, t, e, l);
						if (!(void 0 === E ? v === b || o(v, b, n, s, l) : E)) {
							g = !1;
							break
						}
						y || (y = "constructor" == d)
					}
					if (g && !y) {
						var T = t.constructor,
							_ = e.constructor;
						T != _ && "constructor" in t && "constructor" in e && !("function" == typeof T && T instanceof T && "function" == typeof _ && _ instanceof _) && (g = !1)
					}
					return l.delete(t), l.delete(e), g
				}
				t.exports = s
			},
			4502: function(t, e, n) {
				var i = n(6380),
					a = n(6813),
					r = n(2413);

				function s(t) {
					return r(a(t, void 0, i), t + "")
				}
				t.exports = s
			},
			2593: function(t, e, n) {
				var i = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
				t.exports = i
			},
			3948: function(t, e, n) {
				var i = n(7743),
					a = n(6230),
					r = n(7361);

				function s(t) {
					return i(t, r, a)
				}
				t.exports = s
			},
			9254: function(t, e, n) {
				var i = n(7743),
					a = n(2992),
					r = n(3747);

				function s(t) {
					return i(t, r, a)
				}
				t.exports = s
			},
			6007: function(t, e, n) {
				var i = n(900),
					a = n(6032),
					r = i ? function(t) {
						return i.get(t)
					} : a;
				t.exports = r
			},
			195: function(t, e, n) {
				var i = n(8564),
					a = Object.prototype.hasOwnProperty;

				function r(t) {
					for (var e = t.name + "", n = i[e], r = a.call(i, e) ? n.length : 0; r--;) {
						var s = n[r],
							o = s.func;
						if (null == o || o == t) return s.name
					}
					return e
				}
				t.exports = r
			},
			1143: function(t, e, n) {
				var i = n(6669);

				function a(t, e) {
					var n = t.__data__;
					return i(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
				}
				t.exports = a
			},
			7145: function(t, e, n) {
				var i = n(1542),
					a = n(7361);

				function r(t) {
					for (var e = a(t), n = e.length; n--;) {
						var r = e[n],
							s = t[r];
						e[n] = [r, s, i(s)]
					}
					return e
				}
				t.exports = r
			},
			440: function(t, e, n) {
				var i = n(692),
					a = n(8974);

				function r(t, e) {
					var n = a(t, e);
					return i(n) ? n : void 0
				}
				t.exports = r
			},
			6095: function(t, e, n) {
				var i = n(6512)(Object.getPrototypeOf, Object);
				t.exports = i
			},
			5118: function(t, e, n) {
				var i = n(4886),
					a = Object.prototype,
					r = a.hasOwnProperty,
					s = a.toString,
					o = i ? i.toStringTag : void 0;

				function l(t) {
					var e = r.call(t, o),
						n = t[o];
					try {
						t[o] = void 0;
						var i = !0
					} catch (t) {}
					var a = s.call(t);
					return i && (e ? t[o] = n : delete t[o]), a
				}
				t.exports = l
			},
			6230: function(t, e, n) {
				var i = n(2654),
					a = n(1036),
					r = Object.prototype.propertyIsEnumerable,
					s = Object.getOwnPropertySymbols,
					o = s ? function(t) {
						return null == t ? [] : i(s(t = Object(t)), function(e) {
							return r.call(t, e)
						})
					} : a;
				t.exports = o
			},
			2992: function(t, e, n) {
				var i = n(5741),
					a = n(6095),
					r = n(6230),
					s = n(1036),
					o = Object.getOwnPropertySymbols ? function(t) {
						for (var e = []; t;) i(e, r(t)), t = a(t);
						return e
					} : s;
				t.exports = o
			},
			9937: function(t, e, n) {
				var i = n(8172),
					a = n(9036),
					r = n(44),
					s = n(6656),
					o = n(3283),
					l = n(3757),
					c = n(1473),
					u = "[object Map]",
					f = "[object Object]",
					h = "[object Promise]",
					d = "[object Set]",
					p = "[object WeakMap]",
					m = "[object DataView]",
					g = c(i),
					y = c(a),
					v = c(r),
					b = c(s),
					E = c(o),
					T = l;
				(i && T(new i(new ArrayBuffer(1))) != m || a && T(new a) != u || r && T(r.resolve()) != h || s && T(new s) != d || o && T(new o) != p) && (T = function(t) {
					var e = l(t),
						n = e == f ? t.constructor : void 0,
						i = n ? c(n) : "";
					if (i) switch (i) {
						case g:
							return m;
						case y:
							return u;
						case v:
							return h;
						case b:
							return d;
						case E:
							return p
					}
					return e
				}), t.exports = T
			},
			8974: function(t) {
				function e(t, e) {
					return null == t ? void 0 : t[e]
				}
				t.exports = e
			},
			7635: function(t, e, n) {
				var i = n(3835),
					a = n(9732),
					r = n(6377),
					s = n(9251),
					o = n(7924),
					l = n(8481);

				function c(t, e, n) {
					e = i(e, t);
					for (var c = -1, u = e.length, f = !1; ++c < u;) {
						var h = l(e[c]);
						if (!(f = null != t && n(t, h))) break;
						t = t[h]
					}
					return f || ++c != u ? f : !!(u = null == t ? 0 : t.length) && o(u) && s(h, u) && (r(t) || a(t))
				}
				t.exports = c
			},
			9520: function(t) {
				var e = RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");

				function n(t) {
					return e.test(t)
				}
				t.exports = n
			},
			7322: function(t, e, n) {
				var i = n(7305);

				function a() {
					this.__data__ = i ? i(null) : {}, this.size = 0
				}
				t.exports = a
			},
			2937: function(t) {
				function e(t) {
					var e = this.has(t) && delete this.__data__[t];
					return this.size -= e ? 1 : 0, e
				}
				t.exports = e
			},
			207: function(t, e, n) {
				var i = n(7305),
					a = "__lodash_hash_undefined__",
					r = Object.prototype.hasOwnProperty;

				function s(t) {
					var e = this.__data__;
					if (i) {
						var n = e[t];
						return n === a ? void 0 : n
					}
					return r.call(e, t) ? e[t] : void 0
				}
				t.exports = s
			},
			2165: function(t, e, n) {
				var i = n(7305),
					a = Object.prototype.hasOwnProperty;

				function r(t) {
					var e = this.__data__;
					return i ? void 0 !== e[t] : a.call(e, t)
				}
				t.exports = r
			},
			7523: function(t, e, n) {
				var i = n(7305),
					a = "__lodash_hash_undefined__";

				function r(t, e) {
					var n = this.__data__;
					return this.size += this.has(t) ? 0 : 1, n[t] = i && void 0 === e ? a : e, this
				}
				t.exports = r
			},
			1668: function(t, e, n) {
				var i = n(4886),
					a = n(9732),
					r = n(6377),
					s = i ? i.isConcatSpreadable : void 0;

				function o(t) {
					return r(t) || a(t) || !!(s && t && t[s])
				}
				t.exports = o
			},
			9251: function(t) {
				var e = 0x1fffffffffffff,
					n = /^(?:0|[1-9]\d*)$/;

				function i(t, i) {
					var a = typeof t;
					return !!(i = null == i ? e : i) && ("number" == a || "symbol" != a && n.test(t)) && t > -1 && t % 1 == 0 && t < i
				}
				t.exports = i
			},
			7074: function(t, e, n) {
				var i = n(6377),
					a = n(1359),
					r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
					s = /^\w*$/;

				function o(t, e) {
					if (i(t)) return !1;
					var n = typeof t;
					return !!("number" == n || "symbol" == n || "boolean" == n || null == t || a(t)) || s.test(t) || !r.test(t) || null != e && t in Object(e)
				}
				t.exports = o
			},
			6669: function(t) {
				function e(t) {
					var e = typeof t;
					return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
				}
				t.exports = e
			},
			6252: function(t, e, n) {
				var i = n(4281),
					a = n(6007),
					r = n(195),
					s = n(6985);

				function o(t) {
					var e = r(t),
						n = s[e];
					if ("function" != typeof n || !(e in i.prototype)) return !1;
					if (t === n) return !0;
					var o = a(n);
					return !!o && t === o[0]
				}
				t.exports = o
			},
			3417: function(t, e, n) {
				var i = n(5772),
					a = function() {
						var t = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "");
						return t ? "Symbol(src)_1." + t : ""
					}();

				function r(t) {
					return !!a && a in t
				}
				t.exports = r
			},
			8857: function(t) {
				var e = Object.prototype;

				function n(t) {
					var n = t && t.constructor;
					return t === ("function" == typeof n && n.prototype || e)
				}
				t.exports = n
			},
			1542: function(t, e, n) {
				var i = n(8532);

				function a(t) {
					return t == t && !i(t)
				}
				t.exports = a
			},
			7435: function(t) {
				function e() {
					this.__data__ = [], this.size = 0
				}
				t.exports = e
			},
			8438: function(t, e, n) {
				var i = n(8357),
					a = Array.prototype.splice;

				function r(t) {
					var e = this.__data__,
						n = i(e, t);
					return !(n < 0) && (n == e.length - 1 ? e.pop() : a.call(e, n, 1), --this.size, !0)
				}
				t.exports = r
			},
			3067: function(t, e, n) {
				var i = n(8357);

				function a(t) {
					var e = this.__data__,
						n = i(e, t);
					return n < 0 ? void 0 : e[n][1]
				}
				t.exports = a
			},
			9679: function(t, e, n) {
				var i = n(8357);

				function a(t) {
					return i(this.__data__, t) > -1
				}
				t.exports = a
			},
			2426: function(t, e, n) {
				var i = n(8357);

				function a(t, e) {
					var n = this.__data__,
						a = i(n, t);
					return a < 0 ? (++this.size, n.push([t, e])) : n[a][1] = e, this
				}
				t.exports = a
			},
			6409: function(t, e, n) {
				var i = n(1796),
					a = n(283),
					r = n(9036);

				function s() {
					this.size = 0, this.__data__ = {
						hash: new i,
						map: new(r || a),
						string: new i
					}
				}
				t.exports = s
			},
			5335: function(t, e, n) {
				var i = n(1143);

				function a(t) {
					var e = i(this, t).delete(t);
					return this.size -= e ? 1 : 0, e
				}
				t.exports = a
			},
			5601: function(t, e, n) {
				var i = n(1143);

				function a(t) {
					return i(this, t).get(t)
				}
				t.exports = a
			},
			1533: function(t, e, n) {
				var i = n(1143);

				function a(t) {
					return i(this, t).has(t)
				}
				t.exports = a
			},
			151: function(t, e, n) {
				var i = n(1143);

				function a(t, e) {
					var n = i(this, t),
						a = n.size;
					return n.set(t, e), this.size += n.size == a ? 0 : 1, this
				}
				t.exports = a
			},
			7170: function(t) {
				function e(t) {
					var e = -1,
						n = Array(t.size);
					return t.forEach(function(t, i) {
						n[++e] = [i, t]
					}), n
				}
				t.exports = e
			},
			4167: function(t) {
				function e(t, e) {
					return function(n) {
						return null != n && n[t] === e && (void 0 !== e || t in Object(n))
					}
				}
				t.exports = e
			},
			6141: function(t, e, n) {
				var i = n(4984),
					a = 500;

				function r(t) {
					var e = i(t, function(t) {
							return n.size === a && n.clear(), t
						}),
						n = e.cache;
					return e
				}
				t.exports = r
			},
			900: function(t, e, n) {
				var i = n(3283),
					a = i && new i;
				t.exports = a
			},
			7305: function(t, e, n) {
				var i = n(440)(Object, "create");
				t.exports = i
			},
			2440: function(t, e, n) {
				var i = n(6512)(Object.keys, Object);
				t.exports = i
			},
			1308: function(t) {
				function e(t) {
					var e = [];
					if (null != t)
						for (var n in Object(t)) e.push(n);
					return e
				}
				t.exports = e
			},
			895: function(t, e, n) {
				t = n.nmd(t);
				var i = n(2593),
					a = e && !e.nodeType && e,
					r = a && t && !t.nodeType && t,
					s = r && r.exports === a && i.process,
					o = function() {
						try {
							var t = r && r.require && r.require("util").types;
							if (t) return t;
							return s && s.binding && s.binding("util")
						} catch (t) {}
					}();
				t.exports = o
			},
			7070: function(t) {
				var e = Object.prototype.toString;

				function n(t) {
					return e.call(t)
				}
				t.exports = n
			},
			6512: function(t) {
				function e(t, e) {
					return function(n) {
						return t(e(n))
					}
				}
				t.exports = e
			},
			6813: function(t, e, n) {
				var i = n(9198),
					a = Math.max;

				function r(t, e, n) {
					return e = a(void 0 === e ? t.length - 1 : e, 0),
						function() {
							for (var r = arguments, s = -1, o = a(r.length - e, 0), l = Array(o); ++s < o;) l[s] = r[e + s];
							s = -1;
							for (var c = Array(e + 1); ++s < e;) c[s] = r[s];
							return c[e] = n(l), i(t, this, c)
						}
				}
				t.exports = r
			},
			8564: function(t) {
				var e = {};
				t.exports = e
			},
			5238: function(t, e, n) {
				var i = n(2593),
					a = "object" == typeof self && self && self.Object === Object && self,
					r = i || a || Function("return this")();
				t.exports = r
			},
			1760: function(t) {
				var e = "__lodash_hash_undefined__";

				function n(t) {
					return this.__data__.set(t, e), this
				}
				t.exports = n
			},
			5484: function(t) {
				function e(t) {
					return this.__data__.has(t)
				}
				t.exports = e
			},
			2779: function(t) {
				function e(t) {
					var e = -1,
						n = Array(t.size);
					return t.forEach(function(t) {
						n[++e] = t
					}), n
				}
				t.exports = e
			},
			2413: function(t, e, n) {
				var i = n(2422),
					a = n(7890)(i);
				t.exports = a
			},
			7890: function(t) {
				var e = 800,
					n = 16,
					i = Date.now;

				function a(t) {
					var a = 0,
						r = 0;
					return function() {
						var s = i(),
							o = n - (s - r);
						if (r = s, o > 0) {
							if (++a >= e) return arguments[0]
						} else a = 0;
						return t.apply(void 0, arguments)
					}
				}
				t.exports = a
			},
			6063: function(t, e, n) {
				var i = n(283);

				function a() {
					this.__data__ = new i, this.size = 0
				}
				t.exports = a
			},
			7727: function(t) {
				function e(t) {
					var e = this.__data__,
						n = e.delete(t);
					return this.size = e.size, n
				}
				t.exports = e
			},
			3281: function(t) {
				function e(t) {
					return this.__data__.get(t)
				}
				t.exports = e
			},
			6667: function(t) {
				function e(t) {
					return this.__data__.has(t)
				}
				t.exports = e
			},
			1270: function(t, e, n) {
				var i = n(283),
					a = n(9036),
					r = n(4544),
					s = 200;

				function o(t, e) {
					var n = this.__data__;
					if (n instanceof i) {
						var o = n.__data__;
						if (!a || o.length < s - 1) return o.push([t, e]), this.size = ++n.size, this;
						n = this.__data__ = new r(o)
					}
					return n.set(t, e), this.size = n.size, this
				}
				t.exports = o
			},
			6749: function(t, e, n) {
				var i = n(609),
					a = n(9520),
					r = n(9668);

				function s(t) {
					return a(t) ? r(t) : i(t)
				}
				t.exports = s
			},
			8997: function(t, e, n) {
				var i = n(6141),
					a = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
					r = /\\(\\)?/g,
					s = i(function(t) {
						var e = [];
						return 46 === t.charCodeAt(0) && e.push(""), t.replace(a, function(t, n, i, a) {
							e.push(i ? a.replace(r, "$1") : n || t)
						}), e
					});
				t.exports = s
			},
			8481: function(t, e, n) {
				var i = n(1359),
					a = 1 / 0;

				function r(t) {
					if ("string" == typeof t || i(t)) return t;
					var e = t + "";
					return "0" == e && 1 / t == -a ? "-0" : e
				}
				t.exports = r
			},
			1473: function(t) {
				var e = Function.prototype.toString;

				function n(t) {
					if (null != t) {
						try {
							return e.call(t)
						} catch (t) {}
						try {
							return t + ""
						} catch (t) {}
					}
					return ""
				}
				t.exports = n
			},
			3230: function(t) {
				var e = /\s/;

				function n(t) {
					for (var n = t.length; n-- && e.test(t.charAt(n)););
					return n
				}
				t.exports = n
			},
			9668: function(t) {
				var e = "\ud800-\udfff",
					n = "[" + e + "]",
					i = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
					a = "\ud83c[\udffb-\udfff]",
					r = "[^" + e + "]",
					s = "(?:\ud83c[\udde6-\uddff]){2}",
					o = "[\ud800-\udbff][\udc00-\udfff]",
					l = "(?:" + i + "|" + a + ")?",
					c = "[\\ufe0e\\ufe0f]?",
					u = "(?:\\u200d(?:" + [r, s, o].join("|") + ")" + c + l + ")*",
					f = c + l + u,
					h = RegExp(a + "(?=" + a + ")|" + ("(?:" + [r + i + "?", i, s, o, n].join("|") + ")") + f, "g");

				function d(t) {
					for (var e = h.lastIndex = 0; h.test(t);) ++e;
					return e
				}
				t.exports = d
			},
			219: function(t, e, n) {
				var i = n(4281),
					a = n(9675),
					r = n(8606);

				function s(t) {
					if (t instanceof i) return t.clone();
					var e = new a(t.__wrapped__, t.__chain__);
					return e.__actions__ = r(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
				}
				t.exports = s
			},
			3789: function(t, e, n) {
				var i = n(2009),
					a = n(6127);

				function r(t, e, n) {
					return void 0 === n && (n = e, e = void 0), void 0 !== n && (n = (n = a(n)) == n ? n : 0), void 0 !== e && (e = (e = a(e)) == e ? e : 0), i(a(t), e, n)
				}
				t.exports = r
			},
			5055: function(t) {
				function e(t) {
					return function() {
						return t
					}
				}
				t.exports = e
			},
			8305: function(t, e, n) {
				var i = n(8532),
					a = n(806),
					r = n(6127),
					s = "Expected a function",
					o = Math.max,
					l = Math.min;

				function c(t, e, n) {
					var c, u, f, h, d, p, m = 0,
						g = !1,
						y = !1,
						v = !0;
					if ("function" != typeof t) throw TypeError(s);

					function b(e) {
						var n = c,
							i = u;
						return c = u = void 0, m = e, h = t.apply(i, n)
					}

					function E(t) {
						return m = t, d = setTimeout(I, e), g ? b(t) : h
					}

					function T(t) {
						var n = t - p,
							i = t - m,
							a = e - n;
						return y ? l(a, f - i) : a
					}

					function _(t) {
						var n = t - p,
							i = t - m;
						return void 0 === p || n >= e || n < 0 || y && i >= f
					}

					function I() {
						var t = a();
						if (_(t)) return x(t);
						d = setTimeout(I, T(t))
					}

					function x(t) {
						return (d = void 0, v && c) ? b(t) : (c = u = void 0, h)
					}

					function A() {
						void 0 !== d && clearTimeout(d), m = 0, c = p = u = d = void 0
					}

					function S() {
						return void 0 === d ? h : x(a())
					}

					function w() {
						var t = a(),
							n = _(t);
						if (c = arguments, u = this, p = t, n) {
							if (void 0 === d) return E(p);
							if (y) return clearTimeout(d), d = setTimeout(I, e), b(p)
						}
						return void 0 === d && (d = setTimeout(I, e)), h
					}
					return e = r(e) || 0, i(n) && (g = !!n.leading, f = (y = "maxWait" in n) ? o(r(n.maxWait) || 0, e) : f, v = "trailing" in n ? !!n.trailing : v), w.cancel = A, w.flush = S, w
				}
				t.exports = c
			},
			4075: function(t) {
				function e(t, e) {
					return null == t || t != t ? e : t
				}
				t.exports = e
			},
			4071: function(t) {
				function e(t, e) {
					return t === e || t != t && e != e
				}
				t.exports = e
			},
			9777: function(t, e, n) {
				var i = n(727)(n(3142));
				t.exports = i
			},
			3142: function(t, e, n) {
				var i = n(2056),
					a = n(5462),
					r = n(8536),
					s = Math.max;

				function o(t, e, n) {
					var o = null == t ? 0 : t.length;
					if (!o) return -1;
					var l = null == n ? 0 : r(n);
					return l < 0 && (l = s(o + l, 0)), i(t, a(e, 3), l)
				}
				t.exports = o
			},
			5720: function(t, e, n) {
				var i = n(727)(n(3758));
				t.exports = i
			},
			3758: function(t, e, n) {
				var i = n(2056),
					a = n(5462),
					r = n(8536),
					s = Math.max,
					o = Math.min;

				function l(t, e, n) {
					var l = null == t ? 0 : t.length;
					if (!l) return -1;
					var c = l - 1;
					return void 0 !== n && (c = r(n), c = n < 0 ? s(l + c, 0) : o(c, l - 1)), i(t, a(e, 3), c, !0)
				}
				t.exports = l
			},
			6380: function(t, e, n) {
				var i = n(5265);

				function a(t) {
					return (null == t ? 0 : t.length) ? i(t, 1) : []
				}
				t.exports = a
			},
			5801: function(t, e, n) {
				var i = n(914)();
				t.exports = i
			},
			2397: function(t, e, n) {
				var i = n(4970),
					a = n(8264),
					r = n(8269),
					s = n(6377);

				function o(t, e) {
					return (s(t) ? i : a)(t, r(e))
				}
				t.exports = o
			},
			4738: function(t, e, n) {
				var i = n(1957);

				function a(t, e, n) {
					var a = null == t ? void 0 : i(t, e);
					return void 0 === a ? n : a
				}
				t.exports = a
			},
			9290: function(t, e, n) {
				var i = n(6993),
					a = n(7635);

				function r(t, e) {
					return null != t && a(t, e, i)
				}
				t.exports = r
			},
			1622: function(t) {
				function e(t) {
					return t
				}
				t.exports = e
			},
			9732: function(t, e, n) {
				var i = n(841),
					a = n(7013),
					r = Object.prototype,
					s = r.hasOwnProperty,
					o = r.propertyIsEnumerable,
					l = i(function() {
						return arguments
					}()) ? i : function(t) {
						return a(t) && s.call(t, "callee") && !o.call(t, "callee")
					};
				t.exports = l
			},
			6377: function(t) {
				var e = Array.isArray;
				t.exports = e
			},
			508: function(t, e, n) {
				var i = n(6644),
					a = n(7924);

				function r(t) {
					return null != t && a(t.length) && !i(t)
				}
				t.exports = r
			},
			6018: function(t, e, n) {
				t = n.nmd(t);
				var i = n(5238),
					a = n(5786),
					r = e && !e.nodeType && e,
					s = r && t && !t.nodeType && t,
					o = s && s.exports === r ? i.Buffer : void 0,
					l = (o ? o.isBuffer : void 0) || a;
				t.exports = l
			},
			6633: function(t, e, n) {
				var i = n(7407),
					a = n(9937),
					r = n(9732),
					s = n(6377),
					o = n(508),
					l = n(6018),
					c = n(8857),
					u = n(8586),
					f = "[object Map]",
					h = "[object Set]",
					d = Object.prototype.hasOwnProperty;

				function p(t) {
					if (null == t) return !0;
					if (o(t) && (s(t) || "string" == typeof t || "function" == typeof t.splice || l(t) || u(t) || r(t))) return !t.length;
					var e = a(t);
					if (e == f || e == h) return !t.size;
					if (c(t)) return !i(t).length;
					for (var n in t)
						if (d.call(t, n)) return !1;
					return !0
				}
				t.exports = p
			},
			6644: function(t, e, n) {
				var i = n(3757),
					a = n(8532),
					r = "[object AsyncFunction]",
					s = "[object Function]",
					o = "[object GeneratorFunction]",
					l = "[object Proxy]";

				function c(t) {
					if (!a(t)) return !1;
					var e = i(t);
					return e == s || e == o || e == r || e == l
				}
				t.exports = c
			},
			7924: function(t) {
				var e = 0x1fffffffffffff;

				function n(t) {
					return "number" == typeof t && t > -1 && t % 1 == 0 && t <= e
				}
				t.exports = n
			},
			8532: function(t) {
				function e(t) {
					var e = typeof t;
					return null != t && ("object" == e || "function" == e)
				}
				t.exports = e
			},
			7013: function(t) {
				function e(t) {
					return null != t && "object" == typeof t
				}
				t.exports = e
			},
			1085: function(t, e, n) {
				var i = n(3757),
					a = n(6377),
					r = n(7013),
					s = "[object String]";

				function o(t) {
					return "string" == typeof t || !a(t) && r(t) && i(t) == s
				}
				t.exports = o
			},
			1359: function(t, e, n) {
				var i = n(3757),
					a = n(7013),
					r = "[object Symbol]";

				function s(t) {
					return "symbol" == typeof t || a(t) && i(t) == r
				}
				t.exports = s
			},
			8586: function(t, e, n) {
				var i = n(2195),
					a = n(7509),
					r = n(895),
					s = r && r.isTypedArray,
					o = s ? a(s) : i;
				t.exports = o
			},
			7361: function(t, e, n) {
				var i = n(4979),
					a = n(7407),
					r = n(508);

				function s(t) {
					return r(t) ? i(t) : a(t)
				}
				t.exports = s
			},
			3747: function(t, e, n) {
				var i = n(4979),
					a = n(9237),
					r = n(508);

				function s(t) {
					return r(t) ? i(t, !0) : a(t)
				}
				t.exports = s
			},
			3729: function(t, e, n) {
				var i = n(2676),
					a = n(3406),
					r = n(5462);

				function s(t, e) {
					var n = {};
					return e = r(e, 3), a(t, function(t, a, r) {
						i(n, a, e(t, a, r))
					}), n
				}
				t.exports = s
			},
			4984: function(t, e, n) {
				var i = n(4544),
					a = "Expected a function";

				function r(t, e) {
					if ("function" != typeof t || null != e && "function" != typeof e) throw TypeError(a);
					var n = function() {
						var i = arguments,
							a = e ? e.apply(this, i) : i[0],
							r = n.cache;
						if (r.has(a)) return r.get(a);
						var s = t.apply(this, i);
						return n.cache = r.set(a, s) || r, s
					};
					return n.cache = new(r.Cache || i), n
				}
				r.Cache = i, t.exports = r
			},
			3103: function(t) {
				var e = "Expected a function";

				function n(t) {
					if ("function" != typeof t) throw TypeError(e);
					return function() {
						var e = arguments;
						switch (e.length) {
							case 0:
								return !t.call(this);
							case 1:
								return !t.call(this, e[0]);
							case 2:
								return !t.call(this, e[0], e[1]);
							case 3:
								return !t.call(this, e[0], e[1], e[2])
						}
						return !t.apply(this, e)
					}
				}
				t.exports = n
			},
			6032: function(t) {
				function e() {}
				t.exports = e
			},
			806: function(t, e, n) {
				var i = n(5238),
					a = function() {
						return i.Date.now()
					};
				t.exports = a
			},
			3452: function(t, e, n) {
				var i = n(5462),
					a = n(3103),
					r = n(4103);

				function s(t, e) {
					return r(t, a(i(e)))
				}
				t.exports = s
			},
			4103: function(t, e, n) {
				var i = n(1098),
					a = n(5462),
					r = n(7100),
					s = n(9254);

				function o(t, e) {
					if (null == t) return {};
					var n = i(s(t), function(t) {
						return [t]
					});
					return e = a(e), r(t, n, function(t, n) {
						return e(t, n[0])
					})
				}
				t.exports = o
			},
			8303: function(t, e, n) {
				var i = n(2726),
					a = n(1374),
					r = n(7074),
					s = n(8481);

				function o(t) {
					return r(t) ? i(s(t)) : a(t)
				}
				t.exports = o
			},
			1455: function(t, e, n) {
				var i = n(2607),
					a = n(8264),
					r = n(5462),
					s = n(9864),
					o = n(6377);

				function l(t, e, n) {
					var l = o(t) ? i : s,
						c = arguments.length < 3;
					return l(t, r(e, 4), n, c, a)
				}
				t.exports = l
			},
			4659: function(t, e, n) {
				var i = n(7407),
					a = n(9937),
					r = n(508),
					s = n(1085),
					o = n(6749),
					l = "[object Map]",
					c = "[object Set]";

				function u(t) {
					if (null == t) return 0;
					if (r(t)) return s(t) ? o(t) : t.length;
					var e = a(t);
					return e == l || e == c ? t.size : i(t).length
				}
				t.exports = u
			},
			1036: function(t) {
				function e() {
					return []
				}
				t.exports = e
			},
			5786: function(t) {
				function e() {
					return !1
				}
				t.exports = e
			},
			5082: function(t, e, n) {
				var i = n(8305),
					a = n(8532),
					r = "Expected a function";

				function s(t, e, n) {
					var s = !0,
						o = !0;
					if ("function" != typeof t) throw TypeError(r);
					return a(n) && (s = "leading" in n ? !!n.leading : s, o = "trailing" in n ? !!n.trailing : o), i(t, e, {
						leading: s,
						maxWait: e,
						trailing: o
					})
				}
				t.exports = s
			},
			5597: function(t, e, n) {
				var i = n(6127),
					a = 1 / 0,
					r = 17976931348623157e292;

				function s(t) {
					return t ? (t = i(t)) === a || t === -a ? (t < 0 ? -1 : 1) * r : t == t ? t : 0 : 0 === t ? t : 0
				}
				t.exports = s
			},
			8536: function(t, e, n) {
				var i = n(5597);

				function a(t) {
					var e = i(t),
						n = e % 1;
					return e == e ? n ? e - n : e : 0
				}
				t.exports = a
			},
			6127: function(t, e, n) {
				var i = n(1072),
					a = n(8532),
					r = n(1359),
					s = 0 / 0,
					o = /^[-+]0x[0-9a-f]+$/i,
					l = /^0b[01]+$/i,
					c = /^0o[0-7]+$/i,
					u = parseInt;

				function f(t) {
					if ("number" == typeof t) return t;
					if (r(t)) return s;
					if (a(t)) {
						var e = "function" == typeof t.valueOf ? t.valueOf() : t;
						t = a(e) ? e + "" : e
					}
					if ("string" != typeof t) return 0 === t ? t : +t;
					t = i(t);
					var n = l.test(t);
					return n || c.test(t) ? u(t.slice(2), n ? 2 : 8) : o.test(t) ? s : +t
				}
				t.exports = f
			},
			6214: function(t, e, n) {
				var i = n(9653);

				function a(t) {
					return null == t ? "" : i(t)
				}
				t.exports = a
			},
			6985: function(t, e, n) {
				var i = n(4281),
					a = n(9675),
					r = n(4382),
					s = n(6377),
					o = n(7013),
					l = n(219),
					c = Object.prototype.hasOwnProperty;

				function u(t) {
					if (o(t) && !s(t) && !(t instanceof i)) {
						if (t instanceof a) return t;
						if (c.call(t, "__wrapped__")) return l(t)
					}
					return new a(t)
				}
				u.prototype = r.prototype, u.prototype.constructor = u, t.exports = u
			},
			8724: function(module, exports) {
				"undefined" != typeof navigator && function(t, e) {
					module.exports = e()
				}(0, function() {
					"use strict";
					var svgNS = "http://www.w3.org/2000/svg",
						locationHref = "",
						_useWebWorker = !1,
						initialDefaultFrame = -999999,
						setWebWorker = function(t) {
							_useWebWorker = !!t
						},
						getWebWorker = function() {
							return _useWebWorker
						},
						setLocationHref = function(t) {
							locationHref = t
						},
						getLocationHref = function() {
							return locationHref
						};

					function createTag(t) {
						return document.createElement(t)
					}

					function extendPrototype(t, e) {
						var n, i, a = t.length;
						for (n = 0; n < a; n += 1)
							for (var r in i = t[n].prototype) Object.prototype.hasOwnProperty.call(i, r) && (e.prototype[r] = i[r])
					}

					function getDescriptor(t, e) {
						return Object.getOwnPropertyDescriptor(t, e)
					}

					function createProxyFunction(t) {
						function e() {}
						return e.prototype = t, e
					}
					var audioControllerFactory = function() {
							function t(t) {
								this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
							}
							return t.prototype = {
									addAudio: function(t) {
										this.audios.push(t)
									},
									pause: function() {
										var t, e = this.audios.length;
										for (t = 0; t < e; t += 1) this.audios[t].pause()
									},
									resume: function() {
										var t, e = this.audios.length;
										for (t = 0; t < e; t += 1) this.audios[t].resume()
									},
									setRate: function(t) {
										var e, n = this.audios.length;
										for (e = 0; e < n; e += 1) this.audios[e].setRate(t)
									},
									createAudio: function(t) {
										return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
											src: [t]
										}) : {
											isPlaying: !1,
											play: function() {
												this.isPlaying = !0
											},
											seek: function() {
												this.isPlaying = !1
											},
											playing: function() {},
											rate: function() {},
											setVolume: function() {}
										}
									},
									setAudioFactory: function(t) {
										this.audioFactory = t
									},
									setVolume: function(t) {
										this._volume = t, this._updateVolume()
									},
									mute: function() {
										this._isMuted = !0, this._updateVolume()
									},
									unmute: function() {
										this._isMuted = !1, this._updateVolume()
									},
									getVolume: function() {
										return this._volume
									},
									_updateVolume: function() {
										var t, e = this.audios.length;
										for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
									}
								},
								function() {
									return new t
								}
						}(),
						createTypedArray = function() {
							function t(t, e) {
								var n, i = 0,
									a = [];
								switch (t) {
									case "int16":
									case "uint8c":
										n = 1;
										break;
									default:
										n = 1.1
								}
								for (i = 0; i < e; i += 1) a.push(n);
								return a
							}
							return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, n) {
								return "float32" === e ? new Float32Array(n) : "int16" === e ? new Int16Array(n) : "uint8c" === e ? new Uint8ClampedArray(n) : t(e, n)
							} : t
						}();

					function createSizedArray(t) {
						return Array.apply(null, {
							length: t
						})
					}

					function _typeof$6(t) {
						return (_typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
							return typeof t
						} : function(t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
						})(t)
					}
					var subframeEnabled = !0,
						expressionsPlugin = null,
						expressionsInterfaces = null,
						idPrefix$1 = "",
						isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
						_shouldRoundValues = !1,
						bmPow = Math.pow,
						bmSqrt = Math.sqrt,
						bmFloor = Math.floor,
						bmMax = Math.max,
						bmMin = Math.min,
						BMMath = {};

					function ProjectInterface$1() {
						return {}
					}! function() {
						var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
							n = e.length;
						for (t = 0; t < n; t += 1) BMMath[e[t]] = Math[e[t]]
					}(), BMMath.random = Math.random, BMMath.abs = function(t) {
						if ("object" === _typeof$6(t) && t.length) {
							var e, n = createSizedArray(t.length),
								i = t.length;
							for (e = 0; e < i; e += 1) n[e] = Math.abs(t[e]);
							return n
						}
						return Math.abs(t)
					};
					var defaultCurveSegments = 150,
						degToRads = Math.PI / 180,
						roundCorner = .5519;

					function roundValues(t) {
						_shouldRoundValues = !!t
					}

					function bmRnd(t) {
						return _shouldRoundValues ? Math.round(t) : t
					}

					function styleDiv(t) {
						t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d"
					}

					function BMEnterFrameEvent(t, e, n, i) {
						this.type = t, this.currentTime = e, this.totalTime = n, this.direction = i < 0 ? -1 : 1
					}

					function BMCompleteEvent(t, e) {
						this.type = t, this.direction = e < 0 ? -1 : 1
					}

					function BMCompleteLoopEvent(t, e, n, i) {
						this.type = t, this.currentLoop = n, this.totalLoops = e, this.direction = i < 0 ? -1 : 1
					}

					function BMSegmentStartEvent(t, e, n) {
						this.type = t, this.firstFrame = e, this.totalFrames = n
					}

					function BMDestroyEvent(t, e) {
						this.type = t, this.target = e
					}

					function BMRenderFrameErrorEvent(t, e) {
						this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
					}

					function BMConfigErrorEvent(t) {
						this.type = "configError", this.nativeError = t
					}

					function BMAnimationConfigErrorEvent(t, e) {
						this.type = t, this.nativeError = e
					}
					var _count, createElementID = (_count = 0, function() {
						return idPrefix$1 + "__lottie_element_" + (_count += 1)
					});

					function HSVtoRGB(t, e, n) {
						var i, a, r, s, o, l, c, u;
						switch (l = n * (1 - e), c = n * (1 - (o = 6 * t - (s = Math.floor(6 * t))) * e), u = n * (1 - (1 - o) * e), s % 6) {
							case 0:
								i = n, a = u, r = l;
								break;
							case 1:
								i = c, a = n, r = l;
								break;
							case 2:
								i = l, a = n, r = u;
								break;
							case 3:
								i = l, a = c, r = n;
								break;
							case 4:
								i = u, a = l, r = n;
								break;
							case 5:
								i = n, a = l, r = c
						}
						return [i, a, r]
					}

					function RGBtoHSV(t, e, n) {
						var i, a = Math.max(t, e, n),
							r = Math.min(t, e, n),
							s = a - r,
							o = 0 === a ? 0 : s / a,
							l = a / 255;
						switch (a) {
							case r:
								i = 0;
								break;
							case t:
								i = (e - n + s * (e < n ? 6 : 0)) / (6 * s);
								break;
							case e:
								i = (n - t + 2 * s) / (6 * s);
								break;
							case n:
								i = (t - e + 4 * s) / (6 * s)
						}
						return [i, o, l]
					}

					function addSaturationToRGB(t, e) {
						var n = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
						return n[1] += e, n[1] > 1 ? n[1] = 1 : n[1] <= 0 && (n[1] = 0), HSVtoRGB(n[0], n[1], n[2])
					}

					function addBrightnessToRGB(t, e) {
						var n = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
						return n[2] += e, n[2] > 1 ? n[2] = 1 : n[2] < 0 && (n[2] = 0), HSVtoRGB(n[0], n[1], n[2])
					}

					function addHueToRGB(t, e) {
						var n = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
						return n[0] += e / 360, n[0] > 1 ? n[0] -= 1 : n[0] < 0 && (n[0] += 1), HSVtoRGB(n[0], n[1], n[2])
					}
					var rgbToHex = function() {
							var t, e, n = [];
							for (t = 0; t < 256; t += 1) e = t.toString(16), n[t] = 1 === e.length ? "0" + e : e;
							return function(t, e, i) {
								return t < 0 && (t = 0), e < 0 && (e = 0), i < 0 && (i = 0), "#" + n[t] + n[e] + n[i]
							}
						}(),
						setSubframeEnabled = function(t) {
							subframeEnabled = !!t
						},
						getSubframeEnabled = function() {
							return subframeEnabled
						},
						setExpressionsPlugin = function(t) {
							expressionsPlugin = t
						},
						getExpressionsPlugin = function() {
							return expressionsPlugin
						},
						setExpressionInterfaces = function(t) {
							expressionsInterfaces = t
						},
						getExpressionInterfaces = function() {
							return expressionsInterfaces
						},
						setDefaultCurveSegments = function(t) {
							defaultCurveSegments = t
						},
						getDefaultCurveSegments = function() {
							return defaultCurveSegments
						},
						setIdPrefix = function(t) {
							idPrefix$1 = t
						},
						getIdPrefix = function() {
							return idPrefix$1
						};

					function createNS(t) {
						return document.createElementNS(svgNS, t)
					}

					function _typeof$5(t) {
						return (_typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
							return typeof t
						} : function(t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
						})(t)
					}
					var dataManager = function() {
							var t, e, n = 1,
								i = [],
								a = {
									onmessage: function() {},
									postMessage: function(e) {
										t({
											data: e
										})
									}
								},
								r = {
									postMessage: function(t) {
										a.onmessage({
											data: t
										})
									}
								};

							function s() {
								e || ((e = function(e) {
									if (window.Worker && window.Blob && getWebWorker()) {
										var n = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()], {
											type: "text/javascript"
										});
										return new Worker(URL.createObjectURL(n))
									}
									return t = e, a
								}(function(t) {
									if (r.dataManager || (r.dataManager = function() {
											function t(a, r) {
												var s, o, l, c, u, h, d = a.length;
												for (o = 0; o < d; o += 1)
													if ("ks" in (s = a[o]) && !s.completed) {
														if (s.completed = !0, s.hasMask) {
															var p = s.masksProperties;
															for (c = p.length, l = 0; l < c; l += 1)
																if (p[l].pt.k.i) i(p[l].pt.k);
																else
																	for (h = p[l].pt.k.length, u = 0; u < h; u += 1) p[l].pt.k[u].s && i(p[l].pt.k[u].s[0]), p[l].pt.k[u].e && i(p[l].pt.k[u].e[0])
														}
														0 === s.ty ? (s.layers = e(s.refId, r), t(s.layers, r)) : 4 === s.ty ? n(s.shapes) : 5 === s.ty && f(s)
													}
											}

											function e(t, e) {
												var n = function(t, e) {
													for (var n = 0, i = e.length; n < i;) {
														if (e[n].id === t) return e[n];
														n += 1
													}
													return null
												}(t, e);
												return n ? n.layers.__used ? JSON.parse(JSON.stringify(n.layers)) : (n.layers.__used = !0, n.layers) : null
											}

											function n(t) {
												var e, a, r;
												for (e = t.length - 1; e >= 0; e -= 1)
													if ("sh" === t[e].ty) {
														if (t[e].ks.k.i) i(t[e].ks.k);
														else
															for (r = t[e].ks.k.length, a = 0; a < r; a += 1) t[e].ks.k[a].s && i(t[e].ks.k[a].s[0]), t[e].ks.k[a].e && i(t[e].ks.k[a].e[0])
													} else "gr" === t[e].ty && n(t[e].it)
											}

											function i(t) {
												var e, n = t.i.length;
												for (e = 0; e < n; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
											}

											function a(t, e) {
												var n = e ? e.split(".") : [100, 100, 100];
												return t[0] > n[0] || !(n[0] > t[0]) && (t[1] > n[1] || !(n[1] > t[1]) && (t[2] > n[2] || !(n[2] > t[2]) && null))
											}
											var r, s = function() {
													var t = [4, 4, 14];

													function e(t) {
														var e, n, i, a = t.length;
														for (e = 0; e < a; e += 1) 5 === t[e].ty && (i = void 0, i = (n = t[e]).t.d, n.t.d = {
															k: [{
																s: i,
																t: 0
															}]
														})
													}
													return function(n) {
														if (a(t, n.v) && (e(n.layers), n.assets)) {
															var i, r = n.assets.length;
															for (i = 0; i < r; i += 1) n.assets[i].layers && e(n.assets[i].layers)
														}
													}
												}(),
												o = (r = [4, 7, 99], function(t) {
													if (t.chars && !a(r, t.v)) {
														var e, i = t.chars.length;
														for (e = 0; e < i; e += 1) {
															var s = t.chars[e];
															s.data && s.data.shapes && (n(s.data.shapes), s.data.ip = 0, s.data.op = 99999, s.data.st = 0, s.data.sr = 1, s.data.ks = {
																p: {
																	k: [0, 0],
																	a: 0
																},
																s: {
																	k: [100, 100],
																	a: 0
																},
																a: {
																	k: [0, 0],
																	a: 0
																},
																r: {
																	k: 0,
																	a: 0
																},
																o: {
																	k: 100,
																	a: 0
																}
															}, t.chars[e].t || (s.data.shapes.push({
																ty: "no"
															}), s.data.shapes[0].it.push({
																p: {
																	k: [0, 0],
																	a: 0
																},
																s: {
																	k: [100, 100],
																	a: 0
																},
																a: {
																	k: [0, 0],
																	a: 0
																},
																r: {
																	k: 0,
																	a: 0
																},
																o: {
																	k: 100,
																	a: 0
																},
																sk: {
																	k: 0,
																	a: 0
																},
																sa: {
																	k: 0,
																	a: 0
																},
																ty: "tr"
															})))
														}
													}
												}),
												l = function() {
													var t = [5, 7, 15];

													function e(t) {
														var e, n, i = t.length;
														for (e = 0; e < i; e += 1) 5 === t[e].ty && (n = void 0, "number" == typeof(n = t[e].t.p).a && (n.a = {
															a: 0,
															k: n.a
														}), "number" == typeof n.p && (n.p = {
															a: 0,
															k: n.p
														}), "number" == typeof n.r && (n.r = {
															a: 0,
															k: n.r
														}))
													}
													return function(n) {
														if (a(t, n.v) && (e(n.layers), n.assets)) {
															var i, r = n.assets.length;
															for (i = 0; i < r; i += 1) n.assets[i].layers && e(n.assets[i].layers)
														}
													}
												}(),
												c = function() {
													var t = [4, 1, 9];

													function e(t) {
														var n, i, a, r = t.length;
														for (n = 0; n < r; n += 1)
															if ("gr" === t[n].ty) e(t[n].it);
															else if ("fl" === t[n].ty || "st" === t[n].ty) {
															if (t[n].c.k && t[n].c.k[0].i)
																for (a = t[n].c.k.length, i = 0; i < a; i += 1) t[n].c.k[i].s && (t[n].c.k[i].s[0] /= 255, t[n].c.k[i].s[1] /= 255, t[n].c.k[i].s[2] /= 255, t[n].c.k[i].s[3] /= 255), t[n].c.k[i].e && (t[n].c.k[i].e[0] /= 255, t[n].c.k[i].e[1] /= 255, t[n].c.k[i].e[2] /= 255, t[n].c.k[i].e[3] /= 255);
															else t[n].c.k[0] /= 255, t[n].c.k[1] /= 255, t[n].c.k[2] /= 255, t[n].c.k[3] /= 255
														}
													}

													function n(t) {
														var n, i = t.length;
														for (n = 0; n < i; n += 1) 4 === t[n].ty && e(t[n].shapes)
													}
													return function(e) {
														if (a(t, e.v) && (n(e.layers), e.assets)) {
															var i, r = e.assets.length;
															for (i = 0; i < r; i += 1) e.assets[i].layers && n(e.assets[i].layers)
														}
													}
												}(),
												u = function() {
													var t = [4, 4, 18];

													function e(t) {
														var n, i, a;
														for (n = t.length - 1; n >= 0; n -= 1)
															if ("sh" === t[n].ty) {
																if (t[n].ks.k.i) t[n].ks.k.c = t[n].closed;
																else
																	for (a = t[n].ks.k.length, i = 0; i < a; i += 1) t[n].ks.k[i].s && (t[n].ks.k[i].s[0].c = t[n].closed), t[n].ks.k[i].e && (t[n].ks.k[i].e[0].c = t[n].closed)
															} else "gr" === t[n].ty && e(t[n].it)
													}

													function n(t) {
														var n, i, a, r, s, o, l = t.length;
														for (i = 0; i < l; i += 1) {
															if ((n = t[i]).hasMask) {
																var c = n.masksProperties;
																for (r = c.length, a = 0; a < r; a += 1)
																	if (c[a].pt.k.i) c[a].pt.k.c = c[a].cl;
																	else
																		for (o = c[a].pt.k.length, s = 0; s < o; s += 1) c[a].pt.k[s].s && (c[a].pt.k[s].s[0].c = c[a].cl), c[a].pt.k[s].e && (c[a].pt.k[s].e[0].c = c[a].cl)
															}
															4 === n.ty && e(n.shapes)
														}
													}
													return function(e) {
														if (a(t, e.v) && (n(e.layers), e.assets)) {
															var i, r = e.assets.length;
															for (i = 0; i < r; i += 1) e.assets[i].layers && n(e.assets[i].layers)
														}
													}
												}();

											function f(t) {
												0 === t.t.a.length && t.t.p
											}
											var h = {
												completeData: function(n) {
													n.__complete || (c(n), s(n), o(n), l(n), u(n), t(n.layers, n.assets), function(n, i) {
														if (n) {
															var a = 0,
																r = n.length;
															for (a = 0; a < r; a += 1) 1 === n[a].t && (n[a].data.layers = e(n[a].data.refId, i), t(n[a].data.layers, i))
														}
													}(n.chars, n.assets), n.__complete = !0)
												}
											};
											return h.checkColors = c, h.checkChars = o, h.checkPathProperties = l, h.checkShapes = u, h.completeLayers = t, h
										}()), r.assetLoader || (r.assetLoader = function() {
											function t(t) {
												var e = t.getResponseHeader("content-type");
												return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" === _typeof$5(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
											}
											return {
												load: function(e, n, i, a) {
													var r, s = new XMLHttpRequest;
													try {
														s.responseType = "json"
													} catch (t) {}
													s.onreadystatechange = function() {
														if (4 === s.readyState) {
															if (200 === s.status) i(r = t(s));
															else try {
																r = t(s), i(r)
															} catch (t) {
																a && a(t)
															}
														}
													};
													try {
														s.open("GET", e, !0)
													} catch (t) {
														s.open("GET", n + "/" + e, !0)
													}
													s.send()
												}
											}
										}()), "loadAnimation" === t.data.type) r.assetLoader.load(t.data.path, t.data.fullPath, function(e) {
										r.dataManager.completeData(e), r.postMessage({
											id: t.data.id,
											payload: e,
											status: "success"
										})
									}, function() {
										r.postMessage({
											id: t.data.id,
											status: "error"
										})
									});
									else if ("complete" === t.data.type) {
										var e = t.data.animation;
										r.dataManager.completeData(e), r.postMessage({
											id: t.data.id,
											payload: e,
											status: "success"
										})
									} else "loadData" === t.data.type && r.assetLoader.load(t.data.path, t.data.fullPath, function(e) {
										r.postMessage({
											id: t.data.id,
											payload: e,
											status: "success"
										})
									}, function() {
										r.postMessage({
											id: t.data.id,
											status: "error"
										})
									})
								})).onmessage = function(t) {
									var e = t.data,
										n = e.id,
										a = i[n];
									i[n] = null, "success" === e.status ? a.onComplete(e.payload) : a.onError && a.onError()
								})
							}

							function o(t, e) {
								var a = "processId_" + (n += 1);
								return i[a] = {
									onComplete: t,
									onError: e
								}, a
							}
							return {
								loadAnimation: function(t, n, i) {
									s();
									var a = o(n, i);
									e.postMessage({
										type: "loadAnimation",
										path: t,
										fullPath: window.location.origin + window.location.pathname,
										id: a
									})
								},
								loadData: function(t, n, i) {
									s();
									var a = o(n, i);
									e.postMessage({
										type: "loadData",
										path: t,
										fullPath: window.location.origin + window.location.pathname,
										id: a
									})
								},
								completeAnimation: function(t, n, i) {
									s();
									var a = o(n, i);
									e.postMessage({
										type: "complete",
										animation: t,
										id: a
									})
								}
							}
						}(),
						ImagePreloader = function() {
							var t = function() {
								var t = createTag("canvas");
								t.width = 1, t.height = 1;
								var e = t.getContext("2d");
								return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
							}();

							function e() {
								this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
							}

							function n() {
								this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
							}

							function i(t, e, n) {
								var i = "";
								if (t.e) i = t.p;
								else if (e) {
									var a = t.p; - 1 !== a.indexOf("images/") && (a = a.split("/")[1]), i = e + a
								} else i = n + (t.u ? t.u : "") + t.p;
								return i
							}

							function a(t) {
								var e = 0,
									n = setInterval((function() {
										(t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(n)), e += 1
									}).bind(this), 50)
							}

							function r(t) {
								var e = {
										assetData: t
									},
									n = i(t, this.assetsPath, this.path);
								return dataManager.loadData(n, (function(t) {
									e.img = t, this._footageLoaded()
								}).bind(this), (function() {
									e.img = {}, this._footageLoaded()
								}).bind(this)), e
							}

							function s() {
								this._imageLoaded = e.bind(this), this._footageLoaded = n.bind(this), this.testImageLoaded = a.bind(this), this.createFootageData = r.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
							}
							return s.prototype = {
								loadAssets: function(t, e) {
									this.imagesLoadedCb = e;
									var n, i = t.length;
									for (n = 0; n < i; n += 1) t[n].layers || (t[n].t && "seq" !== t[n].t ? 3 === t[n].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[n]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[n]))))
								},
								setAssetsPath: function(t) {
									this.assetsPath = t || ""
								},
								setPath: function(t) {
									this.path = t || ""
								},
								loadedImages: function() {
									return this.totalImages === this.loadedAssets
								},
								loadedFootages: function() {
									return this.totalFootages === this.loadedFootagesCount
								},
								destroy: function() {
									this.imagesLoadedCb = null, this.images.length = 0
								},
								getAsset: function(t) {
									for (var e = 0, n = this.images.length; e < n;) {
										if (this.images[e].assetData === t) return this.images[e].img;
										e += 1
									}
									return null
								},
								createImgData: function(e) {
									var n = i(e, this.assetsPath, this.path),
										a = createTag("img");
									a.crossOrigin = "anonymous", a.addEventListener("load", this._imageLoaded, !1), a.addEventListener("error", (function() {
										r.img = t, this._imageLoaded()
									}).bind(this), !1), a.src = n;
									var r = {
										img: a,
										assetData: e
									};
									return r
								},
								createImageData: function(e) {
									var n = i(e, this.assetsPath, this.path),
										a = createNS("image");
									isSafari ? this.testImageLoaded(a) : a.addEventListener("load", this._imageLoaded, !1), a.addEventListener("error", (function() {
										r.img = t, this._imageLoaded()
									}).bind(this), !1), a.setAttributeNS("http://www.w3.org/1999/xlink", "href", n), this._elementHelper.append ? this._elementHelper.append(a) : this._elementHelper.appendChild(a);
									var r = {
										img: a,
										assetData: e
									};
									return r
								},
								imageLoaded: e,
								footageLoaded: n,
								setCacheType: function(t, e) {
									"svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
								}
							}, s
						}();

					function BaseEvent() {}
					BaseEvent.prototype = {
						triggerEvent: function(t, e) {
							if (this._cbs[t])
								for (var n = this._cbs[t], i = 0; i < n.length; i += 1) n[i](e)
						},
						addEventListener: function(t, e) {
							return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), (function() {
								this.removeEventListener(t, e)
							}).bind(this)
						},
						removeEventListener: function(t, e) {
							if (e) {
								if (this._cbs[t]) {
									for (var n = 0, i = this._cbs[t].length; n < i;) this._cbs[t][n] === e && (this._cbs[t].splice(n, 1), n -= 1, i -= 1), n += 1;
									this._cbs[t].length || (this._cbs[t] = null)
								}
							} else this._cbs[t] = null
						}
					};
					var markerParser = function() {
							function t(t) {
								for (var e, n = t.split("\r\n"), i = {}, a = 0, r = 0; r < n.length; r += 1) 2 === (e = n[r].split(":")).length && (i[e[0]] = e[1].trim(), a += 1);
								if (0 === a) throw Error();
								return i
							}
							return function(e) {
								for (var n = [], i = 0; i < e.length; i += 1) {
									var a = e[i],
										r = {
											time: a.tm,
											duration: a.dr
										};
									try {
										r.payload = JSON.parse(e[i].cm)
									} catch (n) {
										try {
											r.payload = t(e[i].cm)
										} catch (t) {
											r.payload = {
												name: e[i].cm
											}
										}
									}
									n.push(r)
								}
								return n
							}
						}(),
						ProjectInterface = function() {
							function t(t) {
								this.compositions.push(t)
							}
							return function() {
								function e(t) {
									for (var e = 0, n = this.compositions.length; e < n;) {
										if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
										e += 1
									}
									return null
								}
								return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
							}
						}(),
						renderers = {},
						registerRenderer = function(t, e) {
							renderers[t] = e
						};

					function getRenderer(t) {
						return renderers[t]
					}

					function getRegisteredRenderer() {
						if (renderers.canvas) return "canvas";
						for (var t in renderers)
							if (renderers[t]) return t;
						return ""
					}

					function _typeof$4(t) {
						return (_typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
							return typeof t
						} : function(t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
						})(t)
					}
					var AnimationItem = function() {
						this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin()
					};
					extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
						(t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
						var e = "svg";
						t.animType ? e = t.animType : t.renderer && (e = t.renderer);
						var n = getRenderer(e);
						this.renderer = new n(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError))
					}, AnimationItem.prototype.onSetupError = function() {
						this.trigger("data_failed")
					}, AnimationItem.prototype.setupAnimation = function(t) {
						dataManager.completeAnimation(t, this.configAnimation)
					}, AnimationItem.prototype.setData = function(t, e) {
						e && "object" !== _typeof$4(e) && (e = JSON.parse(e));
						var n = {
								wrapper: t,
								animationData: e
							},
							i = t.attributes;
						n.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", n.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
						var a = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
						"false" === a ? n.loop = !1 : "true" === a ? n.loop = !0 : "" !== a && (n.loop = parseInt(a, 10));
						var r = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
						n.autoplay = "false" !== r, n.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (n.prerender = !1), n.path ? this.setParams(n) : this.trigger("destroy")
					}, AnimationItem.prototype.includeLayers = function(t) {
						t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
						var e, n, i = this.animationData.layers,
							a = i.length,
							r = t.layers,
							s = r.length;
						for (n = 0; n < s; n += 1)
							for (e = 0; e < a;) {
								if (i[e].id === r[n].id) {
									i[e] = r[n];
									break
								}
								e += 1
							}
						if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
							for (a = t.assets.length, e = 0; e < a; e += 1) this.animationData.assets.push(t.assets[e]);
						this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
					}, AnimationItem.prototype.onSegmentComplete = function(t) {
						this.animationData = t;
						var e = getExpressionsPlugin();
						e && e.initExpressions(this), this.loadNextSegment()
					}, AnimationItem.prototype.loadNextSegment = function() {
						var t = this.animationData.segments;
						if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
						var e = t.shift();
						this.timeCompleted = e.time * this.frameRate;
						var n = this.path + this.fileName + "_" + this.segmentPos + ".json";
						this.segmentPos += 1, dataManager.loadData(n, this.includeLayers.bind(this), (function() {
							this.trigger("data_failed")
						}).bind(this))
					}, AnimationItem.prototype.loadSegments = function() {
						this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
					}, AnimationItem.prototype.imagesLoaded = function() {
						this.trigger("loaded_images"), this.checkLoaded()
					}, AnimationItem.prototype.preloadImages = function() {
						this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
					}, AnimationItem.prototype.configAnimation = function(t) {
						if (this.renderer) try {
							this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
						} catch (t) {
							this.triggerConfigError(t)
						}
					}, AnimationItem.prototype.waitForFontsLoaded = function() {
						this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
					}, AnimationItem.prototype.checkLoaded = function() {
						if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
							this.isLoaded = !0;
							var t = getExpressionsPlugin();
							t && t.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
								this.trigger("DOMLoaded")
							}).bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
						}
					}, AnimationItem.prototype.resize = function(t, e) {
						var n = "number" == typeof t ? t : void 0,
							i = "number" == typeof e ? e : void 0;
						this.renderer.updateContainerSize(n, i)
					}, AnimationItem.prototype.setSubframe = function(t) {
						this.isSubframeEnabled = !!t
					}, AnimationItem.prototype.gotoFrame = function() {
						this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
					}, AnimationItem.prototype.renderFrame = function() {
						if (!1 !== this.isLoaded && this.renderer) try {
							this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
						} catch (t) {
							this.triggerRenderFrameError(t)
						}
					}, AnimationItem.prototype.play = function(t) {
						t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
					}, AnimationItem.prototype.pause = function(t) {
						t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
					}, AnimationItem.prototype.togglePause = function(t) {
						t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
					}, AnimationItem.prototype.stop = function(t) {
						t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
					}, AnimationItem.prototype.getMarkerData = function(t) {
						for (var e, n = 0; n < this.markers.length; n += 1)
							if ((e = this.markers[n]).payload && e.payload.name === t) return e;
						return null
					}, AnimationItem.prototype.goToAndStop = function(t, e, n) {
						if (!n || this.name === n) {
							if (isNaN(Number(t))) {
								var i = this.getMarkerData(t);
								i && this.goToAndStop(i.time, !0)
							} else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
							this.pause()
						}
					}, AnimationItem.prototype.goToAndPlay = function(t, e, n) {
						if (!n || this.name === n) {
							var i = Number(t);
							if (isNaN(i)) {
								var a = this.getMarkerData(t);
								a && (a.duration ? this.playSegments([a.time, a.time + a.duration], !0) : this.goToAndStop(a.time, !0))
							} else this.goToAndStop(i, e, n);
							this.play()
						}
					}, AnimationItem.prototype.advanceTime = function(t) {
						if (!0 !== this.isPaused && !1 !== this.isLoaded) {
							var e = this.currentRawFrame + t * this.frameModifier,
								n = !1;
							e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (n = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (n = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), n && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
						}
					}, AnimationItem.prototype.adjustSegment = function(t, e) {
						this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
					}, AnimationItem.prototype.setSegment = function(t, e) {
						var n = -1;
						this.isPaused && (this.currentRawFrame + this.firstFrame < t ? n = t : this.currentRawFrame + this.firstFrame > e && (n = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== n && this.goToAndStop(n, !0)
					}, AnimationItem.prototype.playSegments = function(t, e) {
						if (e && (this.segments.length = 0), "object" === _typeof$4(t[0])) {
							var n, i = t.length;
							for (n = 0; n < i; n += 1) this.segments.push(t[n])
						} else this.segments.push(t);
						this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
					}, AnimationItem.prototype.resetSegments = function(t) {
						this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
					}, AnimationItem.prototype.checkSegments = function(t) {
						return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
					}, AnimationItem.prototype.destroy = function(t) {
						t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
					}, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
						this.currentRawFrame = t, this.gotoFrame()
					}, AnimationItem.prototype.setSpeed = function(t) {
						this.playSpeed = t, this.updaFrameModifier()
					}, AnimationItem.prototype.setDirection = function(t) {
						this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
					}, AnimationItem.prototype.setLoop = function(t) {
						this.loop = t
					}, AnimationItem.prototype.setVolume = function(t, e) {
						e && this.name !== e || this.audioController.setVolume(t)
					}, AnimationItem.prototype.getVolume = function() {
						return this.audioController.getVolume()
					}, AnimationItem.prototype.mute = function(t) {
						t && this.name !== t || this.audioController.mute()
					}, AnimationItem.prototype.unmute = function(t) {
						t && this.name !== t || this.audioController.unmute()
					}, AnimationItem.prototype.updaFrameModifier = function() {
						this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
					}, AnimationItem.prototype.getPath = function() {
						return this.path
					}, AnimationItem.prototype.getAssetsPath = function(t) {
						var e = "";
						if (t.e) e = t.p;
						else if (this.assetsPath) {
							var n = t.p; - 1 !== n.indexOf("images/") && (n = n.split("/")[1]), e = this.assetsPath + n
						} else e = this.path + (t.u ? t.u : "") + t.p;
						return e
					}, AnimationItem.prototype.getAssetData = function(t) {
						for (var e = 0, n = this.assets.length; e < n;) {
							if (t === this.assets[e].id) return this.assets[e];
							e += 1
						}
						return null
					}, AnimationItem.prototype.hide = function() {
						this.renderer.hide()
					}, AnimationItem.prototype.show = function() {
						this.renderer.show()
					}, AnimationItem.prototype.getDuration = function(t) {
						return t ? this.totalFrames : this.totalFrames / this.frameRate
					}, AnimationItem.prototype.updateDocumentData = function(t, e, n) {
						try {
							this.renderer.getElementByPath(t).updateDocumentData(e, n)
						} catch (t) {}
					}, AnimationItem.prototype.trigger = function(t) {
						if (this._cbs && this._cbs[t]) switch (t) {
							case "enterFrame":
								this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
								break;
							case "drawnFrame":
								this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
								break;
							case "loopComplete":
								this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
								break;
							case "complete":
								this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
								break;
							case "segmentStart":
								this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
								break;
							case "destroy":
								this.triggerEvent(t, new BMDestroyEvent(t, this));
								break;
							default:
								this.triggerEvent(t)
						}
						"enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
					}, AnimationItem.prototype.triggerRenderFrameError = function(t) {
						var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
						this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
					}, AnimationItem.prototype.triggerConfigError = function(t) {
						var e = new BMConfigErrorEvent(t, this.currentFrame);
						this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
					};
					var animationManager = function() {
							var t = {},
								e = [],
								n = 0,
								i = 0,
								a = 0,
								r = !0,
								s = !1;

							function o(t) {
								for (var n = 0, a = t.target; n < i;) e[n].animation === a && (e.splice(n, 1), n -= 1, i -= 1, a.isPaused || u()), n += 1
							}

							function l(t, n) {
								if (!t) return null;
								for (var a = 0; a < i;) {
									if (e[a].elem === t && null !== e[a].elem) return e[a].animation;
									a += 1
								}
								var r = new AnimationItem;
								return f(r, t), r.setData(t, n), r
							}

							function c() {
								a += 1, p()
							}

							function u() {
								a -= 1
							}

							function f(t, n) {
								t.addEventListener("destroy", o), t.addEventListener("_active", c), t.addEventListener("_idle", u), e.push({
									elem: n,
									animation: t
								}), i += 1
							}

							function h(t) {
								var o, l = t - n;
								for (o = 0; o < i; o += 1) e[o].animation.advanceTime(l);
								n = t, a && !s ? window.requestAnimationFrame(h) : r = !0
							}

							function d(t) {
								n = t, window.requestAnimationFrame(h)
							}

							function p() {
								!s && a && r && (window.requestAnimationFrame(d), r = !1)
							}
							return t.registerAnimation = l, t.loadAnimation = function(t) {
								var e = new AnimationItem;
								return f(e, null), e.setParams(t), e
							}, t.setSpeed = function(t, n) {
								var a;
								for (a = 0; a < i; a += 1) e[a].animation.setSpeed(t, n)
							}, t.setDirection = function(t, n) {
								var a;
								for (a = 0; a < i; a += 1) e[a].animation.setDirection(t, n)
							}, t.play = function(t) {
								var n;
								for (n = 0; n < i; n += 1) e[n].animation.play(t)
							}, t.pause = function(t) {
								var n;
								for (n = 0; n < i; n += 1) e[n].animation.pause(t)
							}, t.stop = function(t) {
								var n;
								for (n = 0; n < i; n += 1) e[n].animation.stop(t)
							}, t.togglePause = function(t) {
								var n;
								for (n = 0; n < i; n += 1) e[n].animation.togglePause(t)
							}, t.searchAnimations = function(t, e, n) {
								var i, a = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
									r = a.length;
								for (i = 0; i < r; i += 1) n && a[i].setAttribute("data-bm-type", n), l(a[i], t);
								if (e && 0 === r) {
									n || (n = "svg");
									var s = document.getElementsByTagName("body")[0];
									s.innerText = "";
									var o = createTag("div");
									o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", n), s.appendChild(o), l(o, t)
								}
							}, t.resize = function() {
								var t;
								for (t = 0; t < i; t += 1) e[t].animation.resize()
							}, t.goToAndStop = function(t, n, a) {
								var r;
								for (r = 0; r < i; r += 1) e[r].animation.goToAndStop(t, n, a)
							}, t.destroy = function(t) {
								var n;
								for (n = i - 1; n >= 0; n -= 1) e[n].animation.destroy(t)
							}, t.freeze = function() {
								s = !0
							}, t.unfreeze = function() {
								s = !1, p()
							}, t.setVolume = function(t, n) {
								var a;
								for (a = 0; a < i; a += 1) e[a].animation.setVolume(t, n)
							}, t.mute = function(t) {
								var n;
								for (n = 0; n < i; n += 1) e[n].animation.mute(t)
							}, t.unmute = function(t) {
								var n;
								for (n = 0; n < i; n += 1) e[n].animation.unmute(t)
							}, t.getRegisteredAnimations = function() {
								var t, n = e.length,
									i = [];
								for (t = 0; t < n; t += 1) i.push(e[t].animation);
								return i
							}, t
						}(),
						BezierFactory = function() {
							var t = {
									getBezierEasing: function(t, n, i, a, r) {
										var s = r || ("bez_" + t + "_" + n + "_" + i + "_" + a).replace(/\./g, "p");
										if (e[s]) return e[s];
										var o = new c([t, n, i, a]);
										return e[s] = o, o
									}
								},
								e = {},
								n = .1,
								i = "function" == typeof Float32Array;

							function a(t, e) {
								return 1 - 3 * e + 3 * t
							}

							function r(t, e) {
								return 3 * e - 6 * t
							}

							function s(t) {
								return 3 * t
							}

							function o(t, e, n) {
								return ((a(e, n) * t + r(e, n)) * t + s(e)) * t
							}

							function l(t, e, n) {
								return 3 * a(e, n) * t * t + 2 * r(e, n) * t + s(e)
							}

							function c(t) {
								this._p = t, this._mSampleValues = i ? new Float32Array(11) : Array(11), this._precomputed = !1, this.get = this.get.bind(this)
							}
							return c.prototype = {
								get: function(t) {
									var e = this._p[0],
										n = this._p[1],
										i = this._p[2],
										a = this._p[3];
									return this._precomputed || this._precompute(), e === n && i === a ? t : 0 === t ? 0 : 1 === t ? 1 : o(this._getTForX(t), n, a)
								},
								_precompute: function() {
									var t = this._p[0],
										e = this._p[1],
										n = this._p[2],
										i = this._p[3];
									this._precomputed = !0, t === e && n === i || this._calcSampleValues()
								},
								_calcSampleValues: function() {
									for (var t = this._p[0], e = this._p[2], i = 0; i < 11; ++i) this._mSampleValues[i] = o(i * n, t, e)
								},
								_getTForX: function(t) {
									for (var e = this._p[0], i = this._p[2], a = this._mSampleValues, r = 0, s = 1; 10 !== s && a[s] <= t; ++s) r += n;
									var c = r + (t - a[--s]) / (a[s + 1] - a[s]) * n,
										u = l(c, e, i);
									return u >= .001 ? function(t, e, n, i) {
										for (var a = 0; a < 4; ++a) {
											var r = l(e, n, i);
											if (0 === r) break;
											e -= (o(e, n, i) - t) / r
										}
										return e
									}(t, c, e, i) : 0 === u ? c : function(t, e, n, i, a) {
										var r, s, l = 0;
										do(r = o(s = e + (n - e) / 2, i, a) - t) > 0 ? n = s : e = s; while (Math.abs(r) > 1e-7 && ++l < 10);
										return s
									}(t, r, r + n, e, i)
								}
							}, t
						}(),
						pooling = {
							double: function(t) {
								return t.concat(createSizedArray(t.length))
							}
						},
						poolFactory = function(t, e, n) {
							var i = 0,
								a = t,
								r = createSizedArray(a);
							return {
								newElement: function() {
									return i ? r[i -= 1] : e()
								},
								release: function(t) {
									i === a && (r = pooling.double(r), a *= 2), n && n(t), r[i] = t, i += 1
								}
							}
						},
						bezierLengthPool = poolFactory(8, function() {
							return {
								addedLength: 0,
								percents: createTypedArray("float32", getDefaultCurveSegments()),
								lengths: createTypedArray("float32", getDefaultCurveSegments())
							}
						}),
						segmentsLengthPool = poolFactory(8, function() {
							return {
								lengths: [],
								totalLength: 0
							}
						}, function(t) {
							var e, n = t.lengths.length;
							for (e = 0; e < n; e += 1) bezierLengthPool.release(t.lengths[e]);
							t.lengths.length = 0
						});

					function bezFunction() {
						var t = Math;

						function e(t, e, n, i, a, r) {
							var s = t * i + e * a + n * r - a * i - r * t - n * e;
							return s > -.001 && s < .001
						}
						var n = function(t, e, n, i) {
							var a, r, s, o, l, c, u = getDefaultCurveSegments(),
								f = 0,
								h = [],
								d = [],
								p = bezierLengthPool.newElement();
							for (s = n.length, a = 0; a < u; a += 1) {
								for (l = a / (u - 1), c = 0, r = 0; r < s; r += 1) o = bmPow(1 - l, 3) * t[r] + 3 * bmPow(1 - l, 2) * l * n[r] + 3 * (1 - l) * bmPow(l, 2) * i[r] + bmPow(l, 3) * e[r], h[r] = o, null !== d[r] && (c += bmPow(h[r] - d[r], 2)), d[r] = h[r];
								c && (f += c = bmSqrt(c)), p.percents[a] = l, p.lengths[a] = f
							}
							return p.addedLength = f, p
						};

						function i(t) {
							this.segmentLength = 0, this.points = Array(t)
						}

						function a(t, e) {
							this.partialLength = t, this.point = e
						}
						var r, s = (r = {}, function(t, n, s, o) {
							var l = (t[0] + "_" + t[1] + "_" + n[0] + "_" + n[1] + "_" + s[0] + "_" + s[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
							if (!r[l]) {
								var c, u, f, h, d, p, m, g = getDefaultCurveSegments(),
									y = 0,
									v = null;
								2 === t.length && (t[0] !== n[0] || t[1] !== n[1]) && e(t[0], t[1], n[0], n[1], t[0] + s[0], t[1] + s[1]) && e(t[0], t[1], n[0], n[1], n[0] + o[0], n[1] + o[1]) && (g = 2);
								var b = new i(g);
								for (f = s.length, c = 0; c < g; c += 1) {
									for (m = createSizedArray(f), d = c / (g - 1), p = 0, u = 0; u < f; u += 1) h = bmPow(1 - d, 3) * t[u] + 3 * bmPow(1 - d, 2) * d * (t[u] + s[u]) + 3 * (1 - d) * bmPow(d, 2) * (n[u] + o[u]) + bmPow(d, 3) * n[u], m[u] = h, null !== v && (p += bmPow(m[u] - v[u], 2));
									y += p = bmSqrt(p), b.points[c] = new a(p, m), v = m
								}
								b.segmentLength = y, r[l] = b
							}
							return r[l]
						});

						function o(t, e) {
							var n = e.percents,
								i = e.lengths,
								a = n.length,
								r = bmFloor((a - 1) * t),
								s = t * e.addedLength,
								o = 0;
							if (r === a - 1 || 0 === r || s === i[r]) return n[r];
							for (var l = i[r] > s ? -1 : 1, c = !0; c;)
								if (i[r] <= s && i[r + 1] > s ? (o = (s - i[r]) / (i[r + 1] - i[r]), c = !1) : r += l, r < 0 || r >= a - 1) {
									if (r === a - 1) return n[r];
									c = !1
								} return n[r] + (n[r + 1] - n[r]) * o
						}
						var l = createTypedArray("float32", 8);
						return {
							getSegmentsLength: function(t) {
								var e, i = segmentsLengthPool.newElement(),
									a = t.c,
									r = t.v,
									s = t.o,
									o = t.i,
									l = t._length,
									c = i.lengths,
									u = 0;
								for (e = 0; e < l - 1; e += 1) c[e] = n(r[e], r[e + 1], s[e], o[e + 1]), u += c[e].addedLength;
								return a && l && (c[e] = n(r[e], r[0], s[e], o[0]), u += c[e].addedLength), i.totalLength = u, i
							},
							getNewSegment: function(e, n, i, a, r, s, c) {
								r < 0 ? r = 0 : r > 1 && (r = 1);
								var u, f = o(r, c),
									h = o(s = s > 1 ? 1 : s, c),
									d = e.length,
									p = 1 - f,
									m = 1 - h,
									g = p * p * p,
									y = f * p * p * 3,
									v = f * f * p * 3,
									b = f * f * f,
									E = p * p * m,
									T = f * p * m + p * f * m + p * p * h,
									_ = f * f * m + p * f * h + f * p * h,
									I = f * f * h,
									x = p * m * m,
									A = f * m * m + p * h * m + p * m * h,
									S = f * h * m + p * h * h + f * m * h,
									w = f * h * h,
									O = m * m * m,
									C = h * m * m + m * h * m + m * m * h,
									P = h * h * m + m * h * h + h * m * h,
									M = h * h * h;
								for (u = 0; u < d; u += 1) l[4 * u] = t.round(1e3 * (g * e[u] + y * i[u] + v * a[u] + b * n[u])) / 1e3, l[4 * u + 1] = t.round(1e3 * (E * e[u] + T * i[u] + _ * a[u] + I * n[u])) / 1e3, l[4 * u + 2] = t.round(1e3 * (x * e[u] + A * i[u] + S * a[u] + w * n[u])) / 1e3, l[4 * u + 3] = t.round(1e3 * (O * e[u] + C * i[u] + P * a[u] + M * n[u])) / 1e3;
								return l
							},
							getPointInSegment: function(e, n, i, a, r, s) {
								var l = o(r, s),
									c = 1 - l;
								return [t.round(1e3 * (c * c * c * e[0] + (l * c * c + c * l * c + c * c * l) * i[0] + (l * l * c + c * l * l + l * c * l) * a[0] + l * l * l * n[0])) / 1e3, t.round(1e3 * (c * c * c * e[1] + (l * c * c + c * l * c + c * c * l) * i[1] + (l * l * c + c * l * l + l * c * l) * a[1] + l * l * l * n[1])) / 1e3]
							},
							buildBezierData: s,
							pointOnLine2D: e,
							pointOnLine3D: function(n, i, a, r, s, o, l, c, u) {
								if (0 === a && 0 === o && 0 === u) return e(n, i, r, s, l, c);
								var f, h = t.sqrt(t.pow(r - n, 2) + t.pow(s - i, 2) + t.pow(o - a, 2)),
									d = t.sqrt(t.pow(l - n, 2) + t.pow(c - i, 2) + t.pow(u - a, 2)),
									p = t.sqrt(t.pow(l - r, 2) + t.pow(c - s, 2) + t.pow(u - o, 2));
								return (f = h > d ? h > p ? h - d - p : p - d - h : p > d ? p - d - h : d - h - p) > -1e-4 && f < 1e-4
							}
						}
					}
					var bez = bezFunction(),
						initFrame = initialDefaultFrame,
						mathAbs = Math.abs;

					function interpolateValue(t, e) {
						var n, i, a, r, s, o, l = this.offsetTime;
						"multidimensional" === this.propType && (o = createTypedArray("float32", this.pv.length));
						for (var c, u, f, h, d, p, m, g, y, v = e.lastIndex, b = v, E = this.keyframes.length - 1, T = !0; T;) {
							if (c = this.keyframes[b], u = this.keyframes[b + 1], b === E - 1 && t >= u.t - l) {
								c.h && (c = u), v = 0;
								break
							}
							if (u.t - l > t) {
								v = b;
								break
							}
							b < E - 1 ? b += 1 : (v = 0, T = !1)
						}
						f = this.keyframesMetadata[b] || {};
						var _, I = u.t - l,
							x = c.t - l;
						if (c.to) {
							f.bezierData || (f.bezierData = bez.buildBezierData(c.s, u.s || c.e, c.to, c.ti));
							var A = f.bezierData;
							if (t >= I || t < x) {
								var S = t >= I ? A.points.length - 1 : 0;
								for (d = A.points[S].point.length, h = 0; h < d; h += 1) o[h] = A.points[S].point[h]
							} else {
								f.__fnct ? y = f.__fnct : (y = BezierFactory.getBezierEasing(c.o.x, c.o.y, c.i.x, c.i.y, c.n).get, f.__fnct = y), p = y((t - x) / (I - x));
								var w, O = A.segmentLength * p,
									C = e.lastFrame < t && e._lastKeyframeIndex === b ? e._lastAddedLength : 0;
								for (g = e.lastFrame < t && e._lastKeyframeIndex === b ? e._lastPoint : 0, T = !0, m = A.points.length; T;) {
									if (C += A.points[g].partialLength, 0 === O || 0 === p || g === A.points.length - 1) {
										for (d = A.points[g].point.length, h = 0; h < d; h += 1) o[h] = A.points[g].point[h];
										break
									}
									if (O >= C && O < C + A.points[g + 1].partialLength) {
										for (w = (O - C) / A.points[g + 1].partialLength, d = A.points[g].point.length, h = 0; h < d; h += 1) o[h] = A.points[g].point[h] + (A.points[g + 1].point[h] - A.points[g].point[h]) * w;
										break
									}
									g < m - 1 ? g += 1 : T = !1
								}
								e._lastPoint = g, e._lastAddedLength = C - A.points[g].partialLength, e._lastKeyframeIndex = b
							}
						} else if (E = c.s.length, _ = u.s || c.e, this.sh && 1 !== c.h) t >= I ? (o[0] = _[0], o[1] = _[1], o[2] = _[2]) : t <= x ? (o[0] = c.s[0], o[1] = c.s[1], o[2] = c.s[2]) : quaternionToEuler(o, slerp(createQuaternion(c.s), createQuaternion(_), (t - x) / (I - x)));
						else
							for (b = 0; b < E; b += 1) 1 !== c.h && (t >= I ? p = 1 : t < x ? p = 0 : (c.o.x.constructor === Array ? (f.__fnct || (f.__fnct = []), f.__fnct[b] ? y = f.__fnct[b] : (n = void 0 === c.o.x[b] ? c.o.x[0] : c.o.x[b], i = void 0 === c.o.y[b] ? c.o.y[0] : c.o.y[b], a = void 0 === c.i.x[b] ? c.i.x[0] : c.i.x[b], r = void 0 === c.i.y[b] ? c.i.y[0] : c.i.y[b], y = BezierFactory.getBezierEasing(n, i, a, r).get, f.__fnct[b] = y)) : f.__fnct ? y = f.__fnct : (n = c.o.x, i = c.o.y, a = c.i.x, r = c.i.y, y = BezierFactory.getBezierEasing(n, i, a, r).get, c.keyframeMetadata = y), p = y((t - x) / (I - x)))), _ = u.s || c.e, s = 1 === c.h ? c.s[b] : c.s[b] + (_[b] - c.s[b]) * p, "multidimensional" === this.propType ? o[b] = s : o = s;
						return e.lastIndex = v, o
					}

					function slerp(t, e, n) {
						var i, a, r, s, o, l = [],
							c = t[0],
							u = t[1],
							f = t[2],
							h = t[3],
							d = e[0],
							p = e[1],
							m = e[2],
							g = e[3];
						return (a = c * d + u * p + f * m + h * g) < 0 && (a = -a, d = -d, p = -p, m = -m, g = -g), 1 - a > 1e-6 ? (r = Math.sin(i = Math.acos(a)), s = Math.sin((1 - n) * i) / r, o = Math.sin(n * i) / r) : (s = 1 - n, o = n), l[0] = s * c + o * d, l[1] = s * u + o * p, l[2] = s * f + o * m, l[3] = s * h + o * g, l
					}

					function quaternionToEuler(t, e) {
						var n = e[0],
							i = e[1],
							a = e[2],
							r = e[3],
							s = Math.atan2(2 * i * r - 2 * n * a, 1 - 2 * i * i - 2 * a * a),
							o = Math.asin(2 * n * i + 2 * a * r),
							l = Math.atan2(2 * n * r - 2 * i * a, 1 - 2 * n * n - 2 * a * a);
						t[0] = s / degToRads, t[1] = o / degToRads, t[2] = l / degToRads
					}

					function createQuaternion(t) {
						var e = t[0] * degToRads,
							n = t[1] * degToRads,
							i = t[2] * degToRads,
							a = Math.cos(e / 2),
							r = Math.cos(n / 2),
							s = Math.cos(i / 2),
							o = Math.sin(e / 2),
							l = Math.sin(n / 2),
							c = Math.sin(i / 2);
						return [o * l * s + a * r * c, o * r * s + a * l * c, a * l * s - o * r * c, a * r * s - o * l * c]
					}

					function getValueAtCurrentTime() {
						var t = this.comp.renderedFrame - this.offsetTime,
							e = this.keyframes[0].t - this.offsetTime,
							n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
						if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= n && t >= n || this._caching.lastFrame < e && t < e))) {
							this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
							var i = this.interpolateValue(t, this._caching);
							this.pv = i
						}
						return this._caching.lastFrame = t, this.pv
					}

					function setVValue(t) {
						var e;
						if ("unidimensional" === this.propType) e = t * this.mult, mathAbs(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
						else
							for (var n = 0, i = this.v.length; n < i;) e = t[n] * this.mult, mathAbs(this.v[n] - e) > 1e-5 && (this.v[n] = e, this._mdf = !0), n += 1
					}

					function processEffectsSequence() {
						if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) {
							if (this.lock) this.setVValue(this.pv);
							else {
								this.lock = !0, this._mdf = this._isFirstFrame;
								var t, e = this.effectsSequence.length,
									n = this.kf ? this.pv : this.data.k;
								for (t = 0; t < e; t += 1) n = this.effectsSequence[t](n);
								this.setVValue(n), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
							}
						}
					}

					function addEffect(t) {
						this.effectsSequence.push(t), this.container.addDynamicProperty(this)
					}

					function ValueProperty(t, e, n, i) {
						this.propType = "unidimensional", this.mult = n || 1, this.data = e, this.v = n ? e.k * n : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
					}

					function MultiDimensionalProperty(t, e, n, i) {
						this.propType = "multidimensional", this.mult = n || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
						var a, r = e.k.length;
						for (this.v = createTypedArray("float32", r), this.pv = createTypedArray("float32", r), this.vel = createTypedArray("float32", r), a = 0; a < r; a += 1) this.v[a] = e.k[a] * this.mult, this.pv[a] = e.k[a];
						this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
					}

					function KeyframedValueProperty(t, e, n, i) {
						this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
							lastFrame: initFrame,
							lastIndex: 0,
							value: 0,
							_lastKeyframeIndex: -1
						}, this.k = !0, this.kf = !0, this.data = e, this.mult = n || 1, this.elem = t, this.container = i, this.comp = t.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
					}

					function KeyframedMultidimensionalProperty(t, e, n, i) {
						this.propType = "multidimensional";
						var a, r, s, o, l, c = e.k.length;
						for (a = 0; a < c - 1; a += 1) e.k[a].to && e.k[a].s && e.k[a + 1] && e.k[a + 1].s && (r = e.k[a].s, s = e.k[a + 1].s, o = e.k[a].to, l = e.k[a].ti, (2 === r.length && (r[0] !== s[0] || r[1] !== s[1]) && bez.pointOnLine2D(r[0], r[1], s[0], s[1], r[0] + o[0], r[1] + o[1]) && bez.pointOnLine2D(r[0], r[1], s[0], s[1], s[0] + l[0], s[1] + l[1]) || 3 === r.length && (r[0] !== s[0] || r[1] !== s[1] || r[2] !== s[2]) && bez.pointOnLine3D(r[0], r[1], r[2], s[0], s[1], s[2], r[0] + o[0], r[1] + o[1], r[2] + o[2]) && bez.pointOnLine3D(r[0], r[1], r[2], s[0], s[1], s[2], s[0] + l[0], s[1] + l[1], s[2] + l[2])) && (e.k[a].to = null, e.k[a].ti = null), r[0] === s[0] && r[1] === s[1] && 0 === o[0] && 0 === o[1] && 0 === l[0] && 0 === l[1] && (2 === r.length || r[2] === s[2] && 0 === o[2] && 0 === l[2]) && (e.k[a].to = null, e.k[a].ti = null));
						this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = n || 1, this.elem = t, this.container = i, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
						var u = e.k[0].s.length;
						for (this.v = createTypedArray("float32", u), this.pv = createTypedArray("float32", u), a = 0; a < u; a += 1) this.v[a] = initFrame, this.pv[a] = initFrame;
						this._caching = {
							lastFrame: initFrame,
							lastIndex: 0,
							value: createTypedArray("float32", u)
						}, this.addEffect = addEffect
					}
					var PropertyFactory = {
						getProp: function(t, e, n, i, a) {
							var r;
							if (e.sid && (e = t.globalData.slotManager.getProp(e)), e.k.length) {
								if ("number" == typeof e.k[0]) r = new MultiDimensionalProperty(t, e, i, a);
								else switch (n) {
									case 0:
										r = new KeyframedValueProperty(t, e, i, a);
										break;
									case 1:
										r = new KeyframedMultidimensionalProperty(t, e, i, a)
								}
							} else r = new ValueProperty(t, e, i, a);
							return r.effectsSequence.length && a.addDynamicProperty(r), r
						}
					};

					function DynamicPropertyContainer() {}
					DynamicPropertyContainer.prototype = {
						addDynamicProperty: function(t) {
							-1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
						},
						iterateDynamicProperties: function() {
							this._mdf = !1;
							var t, e = this.dynamicProperties.length;
							for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
						},
						initDynamicPropertyContainer: function(t) {
							this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
						}
					};
					var pointPool = poolFactory(8, function() {
						return createTypedArray("float32", 2)
					});

					function ShapePath() {
						this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
					}
					ShapePath.prototype.setPathData = function(t, e) {
						this.c = t, this.setLength(e);
						for (var n = 0; n < e;) this.v[n] = pointPool.newElement(), this.o[n] = pointPool.newElement(), this.i[n] = pointPool.newElement(), n += 1
					}, ShapePath.prototype.setLength = function(t) {
						for (; this._maxLength < t;) this.doubleArrayLength();
						this._length = t
					}, ShapePath.prototype.doubleArrayLength = function() {
						this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
					}, ShapePath.prototype.setXYAt = function(t, e, n, i, a) {
						var r;
						switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), n) {
							case "v":
								r = this.v;
								break;
							case "i":
								r = this.i;
								break;
							case "o":
								r = this.o;
								break;
							default:
								r = []
						}
						r[i] && (!r[i] || a) || (r[i] = pointPool.newElement()), r[i][0] = t, r[i][1] = e
					}, ShapePath.prototype.setTripleAt = function(t, e, n, i, a, r, s, o) {
						this.setXYAt(t, e, "v", s, o), this.setXYAt(n, i, "o", s, o), this.setXYAt(a, r, "i", s, o)
					}, ShapePath.prototype.reverse = function() {
						var t = new ShapePath;
						t.setPathData(this.c, this._length);
						var e = this.v,
							n = this.o,
							i = this.i,
							a = 0;
						this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], n[0][0], n[0][1], 0, !1), a = 1);
						var r, s = this._length - 1,
							o = this._length;
						for (r = a; r < o; r += 1) t.setTripleAt(e[s][0], e[s][1], i[s][0], i[s][1], n[s][0], n[s][1], r, !1), s -= 1;
						return t
					}, ShapePath.prototype.length = function() {
						return this._length
					};
					var factory, shapePool = (factory = poolFactory(4, function() {
						return new ShapePath
					}, function(t) {
						var e, n = t._length;
						for (e = 0; e < n; e += 1) pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
						t._length = 0, t.c = !1
					}), factory.clone = function(t) {
						var e, n = factory.newElement(),
							i = void 0 === t._length ? t.v.length : t._length;
						for (n.setLength(i), n.c = t.c, e = 0; e < i; e += 1) n.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
						return n
					}, factory);

					function ShapeCollection() {
						this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
					}
					ShapeCollection.prototype.addShape = function(t) {
						this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
					}, ShapeCollection.prototype.releaseShapes = function() {
						var t;
						for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
						this._length = 0
					};
					var ob, _length, _maxLength, pool, shapeCollectionPool = (ob = {
							newShapeCollection: function() {
								return _length ? pool[_length -= 1] : new ShapeCollection
							},
							release: function(t) {
								var e, n = t._length;
								for (e = 0; e < n; e += 1) shapePool.release(t.shapes[e]);
								t._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = t, _length += 1
							}
						}, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob),
						ShapePropertyFactory = function() {
							var t = -999999;

							function e(t, e, n) {
								var i, a, r, s, o, l, c, u, f, h = n.lastIndex,
									d = this.keyframes;
								if (t < d[0].t - this.offsetTime) i = d[0].s[0], r = !0, h = 0;
								else if (t >= d[d.length - 1].t - this.offsetTime) i = d[d.length - 1].s ? d[d.length - 1].s[0] : d[d.length - 2].e[0], r = !0;
								else {
									for (var p, m, g, y, v = h, b = d.length - 1, E = !0; E && (m = d[v], !((g = d[v + 1]).t - this.offsetTime > t));) v < b - 1 ? v += 1 : E = !1;
									y = this.keyframesMetadata[v] || {}, h = v, !(r = 1 === m.h) && (t >= g.t - this.offsetTime ? u = 1 : t < m.t - this.offsetTime ? u = 0 : (y.__fnct ? p = y.__fnct : (p = BezierFactory.getBezierEasing(m.o.x, m.o.y, m.i.x, m.i.y).get, y.__fnct = p), u = p((t - (m.t - this.offsetTime)) / (g.t - this.offsetTime - (m.t - this.offsetTime)))), a = g.s ? g.s[0] : m.e[0]), i = m.s[0]
								}
								for (l = e._length, c = i.i[0].length, n.lastIndex = h, s = 0; s < l; s += 1)
									for (o = 0; o < c; o += 1) f = r ? i.i[s][o] : i.i[s][o] + (a.i[s][o] - i.i[s][o]) * u, e.i[s][o] = f, f = r ? i.o[s][o] : i.o[s][o] + (a.o[s][o] - i.o[s][o]) * u, e.o[s][o] = f, f = r ? i.v[s][o] : i.v[s][o] + (a.v[s][o] - i.v[s][o]) * u, e.v[s][o] = f
							}

							function n() {
								var e = this.comp.renderedFrame - this.offsetTime,
									n = this.keyframes[0].t - this.offsetTime,
									i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
									a = this._caching.lastFrame;
								return a !== t && (a < n && e < n || a > i && e > i) || (this._caching.lastIndex = a < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
							}

							function i() {
								this.paths = this.localShapeCollection
							}

							function a(t) {
								(function(t, e) {
									if (t._length !== e._length || t.c !== e.c) return !1;
									var n, i = t._length;
									for (n = 0; n < i; n += 1)
										if (t.v[n][0] !== e.v[n][0] || t.v[n][1] !== e.v[n][1] || t.o[n][0] !== e.o[n][0] || t.o[n][1] !== e.o[n][1] || t.i[n][0] !== e.i[n][0] || t.i[n][1] !== e.i[n][1]) return !1;
									return !0
								})(this.v, t) || (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
							}

							function r() {
								if (this.elem.globalData.frameId !== this.frameId) {
									if (this.effectsSequence.length) {
										if (this.lock) this.setVValue(this.pv);
										else {
											this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
											var t, e, n = this.effectsSequence.length;
											for (e = 0; e < n; e += 1) t = this.effectsSequence[e](t);
											this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
										}
									} else this._mdf = !1
								}
							}

							function s(t, e, n) {
								this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
								var a = 3 === n ? e.pt.k : e.ks.k;
								this.v = shapePool.clone(a), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
							}

							function o(t) {
								this.effectsSequence.push(t), this.container.addDynamicProperty(this)
							}

							function l(e, a, r) {
								this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === r ? a.pt.k : a.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
								var s = this.keyframes[0].s[0].i.length;
								this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, s), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = {
									lastFrame: t,
									lastIndex: 0
								}, this.effectsSequence = [n.bind(this)]
							}
							s.prototype.interpolateShape = e, s.prototype.getValue = r, s.prototype.setVValue = a, s.prototype.addEffect = o, l.prototype.getValue = r, l.prototype.interpolateShape = e, l.prototype.setVValue = a, l.prototype.addEffect = o;
							var c = function() {
									var t = roundCorner;

									function e(t, e) {
										this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
									}
									return e.prototype = {
										reset: i,
										getValue: function() {
											this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
										},
										convertEllToPath: function() {
											var e = this.p.v[0],
												n = this.p.v[1],
												i = this.s.v[0] / 2,
												a = this.s.v[1] / 2,
												r = 3 !== this.d,
												s = this.v;
											s.v[0][0] = e, s.v[0][1] = n - a, s.v[1][0] = r ? e + i : e - i, s.v[1][1] = n, s.v[2][0] = e, s.v[2][1] = n + a, s.v[3][0] = r ? e - i : e + i, s.v[3][1] = n, s.i[0][0] = r ? e - i * t : e + i * t, s.i[0][1] = n - a, s.i[1][0] = r ? e + i : e - i, s.i[1][1] = n - a * t, s.i[2][0] = r ? e + i * t : e - i * t, s.i[2][1] = n + a, s.i[3][0] = r ? e - i : e + i, s.i[3][1] = n + a * t, s.o[0][0] = r ? e + i * t : e - i * t, s.o[0][1] = n - a, s.o[1][0] = r ? e + i : e - i, s.o[1][1] = n + a * t, s.o[2][0] = r ? e - i * t : e + i * t, s.o[2][1] = n + a, s.o[3][0] = r ? e - i : e + i, s.o[3][1] = n - a * t
										}
									}, extendPrototype([DynamicPropertyContainer], e), e
								}(),
								u = function() {
									function t(t, e) {
										this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
									}
									return t.prototype = {
										reset: i,
										getValue: function() {
											this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
										},
										convertStarToPath: function() {
											var t, e, n, i, a = 2 * Math.floor(this.pt.v),
												r = 2 * Math.PI / a,
												s = !0,
												o = this.or.v,
												l = this.ir.v,
												c = this.os.v,
												u = this.is.v,
												f = 2 * Math.PI * o / (2 * a),
												h = 2 * Math.PI * l / (2 * a),
												d = -Math.PI / 2;
											d += this.r.v;
											var p = 3 === this.data.d ? -1 : 1;
											for (this.v._length = 0, t = 0; t < a; t += 1) {
												n = s ? c : u, i = s ? f : h;
												var m = (e = s ? o : l) * Math.cos(d),
													g = e * Math.sin(d),
													y = 0 === m && 0 === g ? 0 : g / Math.sqrt(m * m + g * g),
													v = 0 === m && 0 === g ? 0 : -m / Math.sqrt(m * m + g * g);
												m += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(m, g, m - y * i * n * p, g - v * i * n * p, m + y * i * n * p, g + v * i * n * p, t, !0), s = !s, d += r * p
											}
										},
										convertPolygonToPath: function() {
											var t, e = Math.floor(this.pt.v),
												n = 2 * Math.PI / e,
												i = this.or.v,
												a = this.os.v,
												r = 2 * Math.PI * i / (4 * e),
												s = -(.5 * Math.PI),
												o = 3 === this.data.d ? -1 : 1;
											for (s += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
												var l = i * Math.cos(s),
													c = i * Math.sin(s),
													u = 0 === l && 0 === c ? 0 : c / Math.sqrt(l * l + c * c),
													f = 0 === l && 0 === c ? 0 : -l / Math.sqrt(l * l + c * c);
												l += +this.p.v[0], c += +this.p.v[1], this.v.setTripleAt(l, c, l - u * r * a * o, c - f * r * a * o, l + u * r * a * o, c + f * r * a * o, t, !0), s += n * o
											}
											this.paths.length = 0, this.paths[0] = this.v
										}
									}, extendPrototype([DynamicPropertyContainer], t), t
								}(),
								f = function() {
									function t(t, e) {
										this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
									}
									return t.prototype = {
										convertRectToPath: function() {
											var t = this.p.v[0],
												e = this.p.v[1],
												n = this.s.v[0] / 2,
												i = this.s.v[1] / 2,
												a = bmMin(n, i, this.r.v),
												r = a * (1 - roundCorner);
											this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + n, e - i + a, t + n, e - i + a, t + n, e - i + r, 0, !0), this.v.setTripleAt(t + n, e + i - a, t + n, e + i - r, t + n, e + i - a, 1, !0), 0 !== a ? (this.v.setTripleAt(t + n - a, e + i, t + n - a, e + i, t + n - r, e + i, 2, !0), this.v.setTripleAt(t - n + a, e + i, t - n + r, e + i, t - n + a, e + i, 3, !0), this.v.setTripleAt(t - n, e + i - a, t - n, e + i - a, t - n, e + i - r, 4, !0), this.v.setTripleAt(t - n, e - i + a, t - n, e - i + r, t - n, e - i + a, 5, !0), this.v.setTripleAt(t - n + a, e - i, t - n + a, e - i, t - n + r, e - i, 6, !0), this.v.setTripleAt(t + n - a, e - i, t + n - r, e - i, t + n - a, e - i, 7, !0)) : (this.v.setTripleAt(t - n, e + i, t - n + r, e + i, t - n, e + i, 2), this.v.setTripleAt(t - n, e - i, t - n, e - i + r, t - n, e - i, 3))) : (this.v.setTripleAt(t + n, e - i + a, t + n, e - i + r, t + n, e - i + a, 0, !0), 0 !== a ? (this.v.setTripleAt(t + n - a, e - i, t + n - a, e - i, t + n - r, e - i, 1, !0), this.v.setTripleAt(t - n + a, e - i, t - n + r, e - i, t - n + a, e - i, 2, !0), this.v.setTripleAt(t - n, e - i + a, t - n, e - i + a, t - n, e - i + r, 3, !0), this.v.setTripleAt(t - n, e + i - a, t - n, e + i - r, t - n, e + i - a, 4, !0), this.v.setTripleAt(t - n + a, e + i, t - n + a, e + i, t - n + r, e + i, 5, !0), this.v.setTripleAt(t + n - a, e + i, t + n - r, e + i, t + n - a, e + i, 6, !0), this.v.setTripleAt(t + n, e + i - a, t + n, e + i - a, t + n, e + i - r, 7, !0)) : (this.v.setTripleAt(t - n, e - i, t - n + r, e - i, t - n, e - i, 1, !0), this.v.setTripleAt(t - n, e + i, t - n, e + i - r, t - n, e + i, 2, !0), this.v.setTripleAt(t + n, e + i, t + n - r, e + i, t + n, e + i, 3, !0)))
										},
										getValue: function() {
											this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
										},
										reset: i
									}, extendPrototype([DynamicPropertyContainer], t), t
								}();
							return {
								getShapeProp: function(t, e, n) {
									var i;
									return 3 === n || 4 === n ? i = (3 === n ? e.pt : e.ks).k.length ? new l(t, e, n) : new s(t, e, n) : 5 === n ? i = new f(t, e) : 6 === n ? i = new c(t, e) : 7 === n && (i = new u(t, e)), i.k && t.addDynamicProperty(i), i
								},
								getConstructorFunction: function() {
									return s
								},
								getKeyframedConstructorFunction: function() {
									return l
								}
							}
						}(),
						Matrix = function() {
							var t = Math.cos,
								e = Math.sin,
								n = Math.tan,
								i = Math.round;

							function a() {
								return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
							}

							function r(n) {
								if (0 === n) return this;
								var i = t(n),
									a = e(n);
								return this._t(i, -a, 0, 0, a, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
							}

							function s(n) {
								if (0 === n) return this;
								var i = t(n),
									a = e(n);
								return this._t(1, 0, 0, 0, 0, i, -a, 0, 0, a, i, 0, 0, 0, 0, 1)
							}

							function o(n) {
								if (0 === n) return this;
								var i = t(n),
									a = e(n);
								return this._t(i, 0, a, 0, 0, 1, 0, 0, -a, 0, i, 0, 0, 0, 0, 1)
							}

							function l(n) {
								if (0 === n) return this;
								var i = t(n),
									a = e(n);
								return this._t(i, -a, 0, 0, a, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
							}

							function c(t, e) {
								return this._t(1, e, t, 1, 0, 0)
							}

							function u(t, e) {
								return this.shear(n(t), n(e))
							}

							function f(i, a) {
								var r = t(a),
									s = e(a);
								return this._t(r, s, 0, 0, -s, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, n(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(r, -s, 0, 0, s, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
							}

							function h(t, e, n) {
								return n || 0 === n || (n = 1), 1 === t && 1 === e && 1 === n ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1)
							}

							function d(t, e, n, i, a, r, s, o, l, c, u, f, h, d, p, m) {
								return this.props[0] = t, this.props[1] = e, this.props[2] = n, this.props[3] = i, this.props[4] = a, this.props[5] = r, this.props[6] = s, this.props[7] = o, this.props[8] = l, this.props[9] = c, this.props[10] = u, this.props[11] = f, this.props[12] = h, this.props[13] = d, this.props[14] = p, this.props[15] = m, this
							}

							function p(t, e, n) {
								return n = n || 0, 0 !== t || 0 !== e || 0 !== n ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, n, 1) : this
							}

							function m(t, e, n, i, a, r, s, o, l, c, u, f, h, d, p, m) {
								var g = this.props;
								if (1 === t && 0 === e && 0 === n && 0 === i && 0 === a && 1 === r && 0 === s && 0 === o && 0 === l && 0 === c && 1 === u && 0 === f) return g[12] = g[12] * t + g[15] * h, g[13] = g[13] * r + g[15] * d, g[14] = g[14] * u + g[15] * p, g[15] *= m, this._identityCalculated = !1, this;
								var y = g[0],
									v = g[1],
									b = g[2],
									E = g[3],
									T = g[4],
									_ = g[5],
									I = g[6],
									x = g[7],
									A = g[8],
									S = g[9],
									w = g[10],
									O = g[11],
									C = g[12],
									P = g[13],
									M = g[14],
									k = g[15];
								return g[0] = y * t + v * a + b * l + E * h, g[1] = y * e + v * r + b * c + E * d, g[2] = y * n + v * s + b * u + E * p, g[3] = y * i + v * o + b * f + E * m, g[4] = T * t + _ * a + I * l + x * h, g[5] = T * e + _ * r + I * c + x * d, g[6] = T * n + _ * s + I * u + x * p, g[7] = T * i + _ * o + I * f + x * m, g[8] = A * t + S * a + w * l + O * h, g[9] = A * e + S * r + w * c + O * d, g[10] = A * n + S * s + w * u + O * p, g[11] = A * i + S * o + w * f + O * m, g[12] = C * t + P * a + M * l + k * h, g[13] = C * e + P * r + M * c + k * d, g[14] = C * n + P * s + M * u + k * p, g[15] = C * i + P * o + M * f + k * m, this._identityCalculated = !1, this
							}

							function g(t) {
								var e = t.props;
								return this.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
							}

							function y() {
								return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
							}

							function v(t) {
								for (var e = 0; e < 16;) {
									if (t.props[e] !== this.props[e]) return !1;
									e += 1
								}
								return !0
							}

							function b(t) {
								var e;
								for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
								return t
							}

							function E(t) {
								var e;
								for (e = 0; e < 16; e += 1) this.props[e] = t[e]
							}

							function T(t, e, n) {
								return {
									x: t * this.props[0] + e * this.props[4] + n * this.props[8] + this.props[12],
									y: t * this.props[1] + e * this.props[5] + n * this.props[9] + this.props[13],
									z: t * this.props[2] + e * this.props[6] + n * this.props[10] + this.props[14]
								}
							}

							function _(t, e, n) {
								return t * this.props[0] + e * this.props[4] + n * this.props[8] + this.props[12]
							}

							function I(t, e, n) {
								return t * this.props[1] + e * this.props[5] + n * this.props[9] + this.props[13]
							}

							function x(t, e, n) {
								return t * this.props[2] + e * this.props[6] + n * this.props[10] + this.props[14]
							}

							function A() {
								var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
									e = this.props[5] / t,
									n = -this.props[1] / t,
									i = -this.props[4] / t,
									a = this.props[0] / t,
									r = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
									s = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
									o = new Matrix;
								return o.props[0] = e, o.props[1] = n, o.props[4] = i, o.props[5] = a, o.props[12] = r, o.props[13] = s, o
							}

							function S(t) {
								return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
							}

							function w(t) {
								var e, n = t.length,
									i = [];
								for (e = 0; e < n; e += 1) i[e] = S(t[e]);
								return i
							}

							function O(t, e, n) {
								var i = createTypedArray("float32", 6);
								if (this.isIdentity()) i[0] = t[0], i[1] = t[1], i[2] = e[0], i[3] = e[1], i[4] = n[0], i[5] = n[1];
								else {
									var a = this.props[0],
										r = this.props[1],
										s = this.props[4],
										o = this.props[5],
										l = this.props[12],
										c = this.props[13];
									i[0] = t[0] * a + t[1] * s + l, i[1] = t[0] * r + t[1] * o + c, i[2] = e[0] * a + e[1] * s + l, i[3] = e[0] * r + e[1] * o + c, i[4] = n[0] * a + n[1] * s + l, i[5] = n[0] * r + n[1] * o + c
								}
								return i
							}

							function C(t, e, n) {
								return this.isIdentity() ? [t, e, n] : [t * this.props[0] + e * this.props[4] + n * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + n * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + n * this.props[10] + this.props[14]]
							}

							function P(t, e) {
								if (this.isIdentity()) return t + "," + e;
								var n = this.props;
								return Math.round(100 * (t * n[0] + e * n[4] + n[12])) / 100 + "," + Math.round(100 * (t * n[1] + e * n[5] + n[13])) / 100
							}

							function M() {
								for (var t = 0, e = this.props, n = "matrix3d("; t < 16;) n += i(1e4 * e[t]) / 1e4, n += 15 === t ? ")" : ",", t += 1;
								return n
							}

							function k(t) {
								return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? i(1e4 * t) / 1e4 : t
							}

							function L() {
								var t = this.props;
								return "matrix(" + k(t[0]) + "," + k(t[1]) + "," + k(t[4]) + "," + k(t[5]) + "," + k(t[12]) + "," + k(t[13]) + ")"
							}
							return function() {
								this.reset = a, this.rotate = r, this.rotateX = s, this.rotateY = o, this.rotateZ = l, this.skew = u, this.skewFromAxis = f, this.shear = c, this.scale = h, this.setTransform = d, this.translate = p, this.transform = m, this.multiply = g, this.applyToPoint = T, this.applyToX = _, this.applyToY = I, this.applyToZ = x, this.applyToPointArray = C, this.applyToTriplePoints = O, this.applyToPointStringified = P, this.toCSS = M, this.to2dCSS = L, this.clone = b, this.cloneFromProps = E, this.equals = v, this.inversePoints = w, this.inversePoint = S, this.getInverseMatrix = A, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
							}
						}();

					function _typeof$3(t) {
						return (_typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
							return typeof t
						} : function(t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
						})(t)
					}
					var lottie = {},
						standalone = "__[STANDALONE]__",
						animationData = "__[ANIMATIONDATA]__",
						renderer = "";

					function setLocation(t) {
						setLocationHref(t)
					}

					function searchAnimations() {
						!0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
					}

					function setSubframeRendering(t) {
						setSubframeEnabled(t)
					}

					function setPrefix(t) {
						setIdPrefix(t)
					}

					function loadAnimation(t) {
						return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
					}

					function setQuality(t) {
						if ("string" == typeof t) switch (t) {
							case "high":
								setDefaultCurveSegments(200);
								break;
							default:
							case "medium":
								setDefaultCurveSegments(50);
								break;
							case "low":
								setDefaultCurveSegments(10)
						} else !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
						getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
					}

					function inBrowser() {
						return "undefined" != typeof navigator
					}

					function installPlugin(t, e) {
						"expressions" === t && setExpressionsPlugin(e)
					}

					function getFactory(t) {
						switch (t) {
							case "propertyFactory":
								return PropertyFactory;
							case "shapePropertyFactory":
								return ShapePropertyFactory;
							case "matrix":
								return Matrix;
							default:
								return null
						}
					}

					function checkReady() {
						"complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
					}

					function getQueryVariable(t) {
						for (var e = queryString.split("&"), n = 0; n < e.length; n += 1) {
							var i = e[n].split("=");
							if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1])
						}
						return null
					}
					lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
					var queryString = "";
					if (standalone) {
						var scripts = document.getElementsByTagName("script"),
							index = scripts.length - 1,
							myScript = scripts[index] || {
								src: ""
							};
						queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer")
					}
					var readyStateCheckInterval = setInterval(checkReady, 100);
					try {
						"object" === _typeof$3(exports) || "function" == typeof define && define.amd || (window.bodymovin = lottie)
					} catch (t) {}
					var ShapeModifiers = function() {
						var t = {},
							e = {};
						return t.registerModifier = function(t, n) {
							e[t] || (e[t] = n)
						}, t.getModifier = function(t, n, i) {
							return new e[t](n, i)
						}, t
					}();

					function ShapeModifier() {}

					function TrimModifier() {}

					function PuckerAndBloatModifier() {}
					ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
						if (!this.closed) {
							t.sh.container.addDynamicProperty(t.sh);
							var e = {
								shape: t.sh,
								data: t,
								localShapeCollection: shapeCollectionPool.newShapeCollection()
							};
							this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
						}
					}, ShapeModifier.prototype.init = function(t, e) {
						this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
					}, ShapeModifier.prototype.processKeys = function() {
						this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
					}, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
						this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
					}, TrimModifier.prototype.addShapeToModifier = function(t) {
						t.pathsData = []
					}, TrimModifier.prototype.calculateShapeEdges = function(t, e, n, i, a) {
						var r, s, o = [];
						e <= 1 ? o.push({
							s: t,
							e: e
						}) : t >= 1 ? o.push({
							s: t - 1,
							e: e - 1
						}) : (o.push({
							s: t,
							e: 1
						}), o.push({
							s: 0,
							e: e - 1
						}));
						var l, c, u = [],
							f = o.length;
						for (l = 0; l < f; l += 1) !((c = o[l]).e * a < i || c.s * a > i + n) && (r = c.s * a <= i ? 0 : (c.s * a - i) / n, s = c.e * a >= i + n ? 1 : (c.e * a - i) / n, u.push([r, s]));
						return u.length || u.push([0, 0]), u
					}, TrimModifier.prototype.releasePathsData = function(t) {
						var e, n = t.length;
						for (e = 0; e < n; e += 1) segmentsLengthPool.release(t[e]);
						return t.length = 0, t
					}, TrimModifier.prototype.processShapes = function(t) {
						if (this._mdf || t) {
							var e = this.o.v % 360 / 360;
							if (e < 0 && (e += 1), (i = this.s.v > 1 ? 1 + e : this.s.v < 0 ? 0 + e : this.s.v + e) > (a = this.e.v > 1 ? 1 + e : this.e.v < 0 ? 0 + e : this.e.v + e)) {
								var n = i;
								i = a, a = n
							}
							i = 1e-4 * Math.round(1e4 * i), a = 1e-4 * Math.round(1e4 * a), this.sValue = i, this.eValue = a
						} else i = this.sValue, a = this.eValue;
						var i, a, r, s, o, l, c, u, f, h = this.shapes.length,
							d = 0;
						if (a === i)
							for (s = 0; s < h; s += 1) this.shapes[s].localShapeCollection.releaseShapes(), this.shapes[s].shape._mdf = !0, this.shapes[s].shape.paths = this.shapes[s].localShapeCollection, this._mdf && (this.shapes[s].pathsData.length = 0);
						else if (1 === a && 0 === i || 0 === a && 1 === i) {
							if (this._mdf)
								for (s = 0; s < h; s += 1) this.shapes[s].pathsData.length = 0, this.shapes[s].shape._mdf = !0
						} else {
							var p, m, g = [];
							for (s = 0; s < h; s += 1)
								if ((p = this.shapes[s]).shape._mdf || this._mdf || t || 2 === this.m) {
									if (l = (r = p.shape.paths)._length, f = 0, !p.shape._mdf && p.pathsData.length) f = p.totalShapeLength;
									else {
										for (c = this.releasePathsData(p.pathsData), o = 0; o < l; o += 1) u = bez.getSegmentsLength(r.shapes[o]), c.push(u), f += u.totalLength;
										p.totalShapeLength = f, p.pathsData = c
									}
									d += f, p.shape._mdf = !0
								} else p.shape.paths = p.localShapeCollection;
							var y, v = i,
								b = a,
								E = 0;
							for (s = h - 1; s >= 0; s -= 1)
								if ((p = this.shapes[s]).shape._mdf) {
									for ((m = p.localShapeCollection).releaseShapes(), 2 === this.m && h > 1 ? (y = this.calculateShapeEdges(i, a, p.totalShapeLength, E, d), E += p.totalShapeLength) : y = [
											[v, b]
										], l = y.length, o = 0; o < l; o += 1) {
										v = y[o][0], b = y[o][1], g.length = 0, b <= 1 ? g.push({
											s: p.totalShapeLength * v,
											e: p.totalShapeLength * b
										}) : v >= 1 ? g.push({
											s: p.totalShapeLength * (v - 1),
											e: p.totalShapeLength * (b - 1)
										}) : (g.push({
											s: p.totalShapeLength * v,
											e: p.totalShapeLength
										}), g.push({
											s: 0,
											e: p.totalShapeLength * (b - 1)
										}));
										var T = this.addShapes(p, g[0]);
										if (g[0].s !== g[0].e) {
											if (g.length > 1) {
												if (p.shape.paths.shapes[p.shape.paths._length - 1].c) {
													var _ = T.pop();
													this.addPaths(T, m), T = this.addShapes(p, g[1], _)
												} else this.addPaths(T, m), T = this.addShapes(p, g[1])
											}
											this.addPaths(T, m)
										}
									}
									p.shape.paths = m
								}
						}
					}, TrimModifier.prototype.addPaths = function(t, e) {
						var n, i = t.length;
						for (n = 0; n < i; n += 1) e.addShape(t[n])
					}, TrimModifier.prototype.addSegment = function(t, e, n, i, a, r, s) {
						a.setXYAt(e[0], e[1], "o", r), a.setXYAt(n[0], n[1], "i", r + 1), s && a.setXYAt(t[0], t[1], "v", r), a.setXYAt(i[0], i[1], "v", r + 1)
					}, TrimModifier.prototype.addSegmentFromArray = function(t, e, n, i) {
						e.setXYAt(t[1], t[5], "o", n), e.setXYAt(t[2], t[6], "i", n + 1), i && e.setXYAt(t[0], t[4], "v", n), e.setXYAt(t[3], t[7], "v", n + 1)
					}, TrimModifier.prototype.addShapes = function(t, e, n) {
						var i, a, r, s, o, l, c, u, f = t.pathsData,
							h = t.shape.paths.shapes,
							d = t.shape.paths._length,
							p = 0,
							m = [],
							g = !0;
						for (n ? (o = n._length, u = n._length) : (n = shapePool.newElement(), o = 0, u = 0), m.push(n), i = 0; i < d; i += 1) {
							for (l = f[i].lengths, n.c = h[i].c, r = h[i].c ? l.length : l.length + 1, a = 1; a < r; a += 1)
								if (p + (s = l[a - 1]).addedLength < e.s) p += s.addedLength, n.c = !1;
								else {
									if (p > e.e) {
										n.c = !1;
										break
									}
									e.s <= p && e.e >= p + s.addedLength ? (this.addSegment(h[i].v[a - 1], h[i].o[a - 1], h[i].i[a], h[i].v[a], n, o, g), g = !1) : (c = bez.getNewSegment(h[i].v[a - 1], h[i].v[a], h[i].o[a - 1], h[i].i[a], (e.s - p) / s.addedLength, (e.e - p) / s.addedLength, l[a - 1]), this.addSegmentFromArray(c, n, o, g), g = !1, n.c = !1), p += s.addedLength, o += 1
								} if (h[i].c && l.length) {
								if (s = l[a - 1], p <= e.e) {
									var y = l[a - 1].addedLength;
									e.s <= p && e.e >= p + y ? (this.addSegment(h[i].v[a - 1], h[i].o[a - 1], h[i].i[0], h[i].v[0], n, o, g), g = !1) : (c = bez.getNewSegment(h[i].v[a - 1], h[i].v[0], h[i].o[a - 1], h[i].i[0], (e.s - p) / y, (e.e - p) / y, l[a - 1]), this.addSegmentFromArray(c, n, o, g), g = !1, n.c = !1)
								} else n.c = !1;
								p += s.addedLength, o += 1
							}
							if (n._length && (n.setXYAt(n.v[u][0], n.v[u][1], "i", u), n.setXYAt(n.v[n._length - 1][0], n.v[n._length - 1][1], "o", n._length - 1)), p > e.e) break;
							i < d - 1 && (n = shapePool.newElement(), g = !0, m.push(n), o = 0)
						}
						return m
					}, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
						this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
					}, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
						var n = e / 100,
							i = [0, 0],
							a = t._length,
							r = 0;
						for (r = 0; r < a; r += 1) i[0] += t.v[r][0], i[1] += t.v[r][1];
						i[0] /= a, i[1] /= a;
						var s, o, l, c, u, f, h = shapePool.newElement();
						for (h.c = t.c, r = 0; r < a; r += 1) s = t.v[r][0] + (i[0] - t.v[r][0]) * n, o = t.v[r][1] + (i[1] - t.v[r][1]) * n, l = t.o[r][0] + -((i[0] - t.o[r][0]) * n), c = t.o[r][1] + -((i[1] - t.o[r][1]) * n), u = t.i[r][0] + -((i[0] - t.i[r][0]) * n), f = t.i[r][1] + -((i[1] - t.i[r][1]) * n), h.setTripleAt(s, o, l, c, u, f, r);
						return h
					}, PuckerAndBloatModifier.prototype.processShapes = function(t) {
						var e, n, i, a, r, s, o = this.shapes.length,
							l = this.amount.v;
						if (0 !== l)
							for (n = 0; n < o; n += 1) {
								if (s = (r = this.shapes[n]).localShapeCollection, r.shape._mdf || this._mdf || t)
									for (s.releaseShapes(), r.shape._mdf = !0, e = r.shape.paths.shapes, a = r.shape.paths._length, i = 0; i < a; i += 1) s.addShape(this.processPath(e[i], l));
								r.shape.paths = r.localShapeCollection
							}
						this.dynamicProperties.length || (this._mdf = !1)
					};
					var TransformPropertyFactory = function() {
						var t = [0, 0];

						function e(t, e, n) {
							if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(n || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
									k: [0, 0, 0]
								}, 1, 0, this), e.rx) {
								if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
									var i, a = e.or.k.length;
									for (i = 0; i < a; i += 1) e.or.k[i].to = null, e.or.k[i].ti = null
								}
								this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
							} else this.r = PropertyFactory.getProp(t, e.r || {
								k: 0
							}, 0, degToRads, this);
							e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
								k: [0, 0, 0]
							}, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
								k: [100, 100, 100]
							}, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
								_mdf: !1,
								v: 1
							}, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
						}
						return e.prototype = {
							applyToMatrix: function(t) {
								var e = this._mdf;
								this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
							},
							getValue: function(e) {
								if (this.elem.globalData.frameId !== this.frameId) {
									if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
										if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
											if (n = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (i = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / n, 0), a = this.p.getValueAtTime(this.p.keyframes[0].t / n, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (i = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / n, 0), a = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / n, 0)) : (i = this.p.pv, a = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / n, this.p.offsetTime));
											else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
												i = [], a = [];
												var n, i, a, r = this.px,
													s = this.py;
												r._caching.lastFrame + r.offsetTime <= r.keyframes[0].t ? (i[0] = r.getValueAtTime((r.keyframes[0].t + .01) / n, 0), i[1] = s.getValueAtTime((s.keyframes[0].t + .01) / n, 0), a[0] = r.getValueAtTime(r.keyframes[0].t / n, 0), a[1] = s.getValueAtTime(s.keyframes[0].t / n, 0)) : r._caching.lastFrame + r.offsetTime >= r.keyframes[r.keyframes.length - 1].t ? (i[0] = r.getValueAtTime(r.keyframes[r.keyframes.length - 1].t / n, 0), i[1] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / n, 0), a[0] = r.getValueAtTime((r.keyframes[r.keyframes.length - 1].t - .01) / n, 0), a[1] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / n, 0)) : (i = [r.pv, s.pv], a[0] = r.getValueAtTime((r._caching.lastFrame + r.offsetTime - .01) / n, r.offsetTime), a[1] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / n, s.offsetTime))
											} else i = a = t;
											this.v.rotate(-Math.atan2(i[1] - a[1], i[0] - a[0]))
										}
										this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
									}
									this.frameId = this.elem.globalData.frameId
								}
							},
							precalculateMatrix: function() {
								if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
									if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
										if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
										this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
									}
									this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
								}
							},
							autoOrient: function() {}
						}, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(t) {
							this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
						}, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
							getTransformProperty: function(t, n, i) {
								return new e(t, n, i)
							}
						}
					}();

					function RepeaterModifier() {}

					function RoundCornersModifier() {}

					function floatEqual(t, e) {
						return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e))
					}

					function floatZero(t) {
						return 1e-5 >= Math.abs(t)
					}

					function lerp(t, e, n) {
						return t * (1 - n) + e * n
					}

					function lerpPoint(t, e, n) {
						return [lerp(t[0], e[0], n), lerp(t[1], e[1], n)]
					}

					function quadRoots(t, e, n) {
						if (0 === t) return [];
						var i = e * e - 4 * t * n;
						if (i < 0) return [];
						var a = -e / (2 * t);
						if (0 === i) return [a];
						var r = Math.sqrt(i) / (2 * t);
						return [a - r, a + r]
					}

					function polynomialCoefficients(t, e, n, i) {
						return [3 * e - t - 3 * n + i, 3 * t - 6 * e + 3 * n, -3 * t + 3 * e, t]
					}

					function singlePoint(t) {
						return new PolynomialBezier(t, t, t, t, !1)
					}

					function PolynomialBezier(t, e, n, i, a) {
						a && pointEqual(t, e) && (e = lerpPoint(t, i, 1 / 3)), a && pointEqual(n, i) && (n = lerpPoint(t, i, 2 / 3));
						var r = polynomialCoefficients(t[0], e[0], n[0], i[0]),
							s = polynomialCoefficients(t[1], e[1], n[1], i[1]);
						this.a = [r[0], s[0]], this.b = [r[1], s[1]], this.c = [r[2], s[2]], this.d = [r[3], s[3]], this.points = [t, e, n, i]
					}

					function extrema(t, e) {
						var n = t.points[0][e],
							i = t.points[t.points.length - 1][e];
						if (n > i) {
							var a = i;
							i = n, n = a
						}
						for (var r = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), s = 0; s < r.length; s += 1)
							if (r[s] > 0 && r[s] < 1) {
								var o = t.point(r[s])[e];
								o < n ? n = o : o > i && (i = o)
							} return {
							min: n,
							max: i
						}
					}

					function intersectData(t, e, n) {
						var i = t.boundingBox();
						return {
							cx: i.cx,
							cy: i.cy,
							width: i.width,
							height: i.height,
							bez: t,
							t: (e + n) / 2,
							t1: e,
							t2: n
						}
					}

					function splitData(t) {
						var e = t.bez.split(.5);
						return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)]
					}

					function boxIntersect(t, e) {
						return 2 * Math.abs(t.cx - e.cx) < t.width + e.width && 2 * Math.abs(t.cy - e.cy) < t.height + e.height
					}

					function intersectsImpl(t, e, n, i, a, r) {
						if (boxIntersect(t, e)) {
							if (n >= r || t.width <= i && t.height <= i && e.width <= i && e.height <= i) a.push([t.t, e.t]);
							else {
								var s = splitData(t),
									o = splitData(e);
								intersectsImpl(s[0], o[0], n + 1, i, a, r), intersectsImpl(s[0], o[1], n + 1, i, a, r), intersectsImpl(s[1], o[0], n + 1, i, a, r), intersectsImpl(s[1], o[1], n + 1, i, a, r)
							}
						}
					}

					function crossProduct(t, e) {
						return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
					}

					function lineIntersection(t, e, n, i) {
						var a = [t[0], t[1], 1],
							r = [e[0], e[1], 1],
							s = [n[0], n[1], 1],
							o = [i[0], i[1], 1],
							l = crossProduct(crossProduct(a, r), crossProduct(s, o));
						return floatZero(l[2]) ? null : [l[0] / l[2], l[1] / l[2]]
					}

					function polarOffset(t, e, n) {
						return [t[0] + Math.cos(e) * n, t[1] - Math.sin(e) * n]
					}

					function pointDistance(t, e) {
						return Math.hypot(t[0] - e[0], t[1] - e[1])
					}

					function pointEqual(t, e) {
						return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1])
					}

					function ZigZagModifier() {}

					function setPoint(t, e, n, i, a, r, s) {
						var o = n - Math.PI / 2,
							l = n + Math.PI / 2,
							c = e[0] + Math.cos(n) * i * a,
							u = e[1] - Math.sin(n) * i * a;
						t.setTripleAt(c, u, c + Math.cos(o) * r, u - Math.sin(o) * r, c + Math.cos(l) * s, u - Math.sin(l) * s, t.length())
					}

					function getPerpendicularVector(t, e) {
						var n = [e[0] - t[0], e[1] - t[1]],
							i = -(.5 * Math.PI);
						return [Math.cos(i) * n[0] - Math.sin(i) * n[1], Math.sin(i) * n[0] + Math.cos(i) * n[1]]
					}

					function getProjectingAngle(t, e) {
						var n = 0 === e ? t.length() - 1 : e - 1,
							i = (e + 1) % t.length(),
							a = getPerpendicularVector(t.v[n], t.v[i]);
						return Math.atan2(0, 1) - Math.atan2(a[1], a[0])
					}

					function zigZagCorner(t, e, n, i, a, r, s) {
						var o = getProjectingAngle(e, n),
							l = e.v[n % e._length],
							c = e.v[0 === n ? e._length - 1 : n - 1],
							u = e.v[(n + 1) % e._length],
							f = 2 === r ? Math.sqrt(Math.pow(l[0] - c[0], 2) + Math.pow(l[1] - c[1], 2)) : 0,
							h = 2 === r ? Math.sqrt(Math.pow(l[0] - u[0], 2) + Math.pow(l[1] - u[1], 2)) : 0;
						setPoint(t, e.v[n % e._length], o, s, i, h / (2 * (a + 1)), f / (2 * (a + 1)), r)
					}

					function zigZagSegment(t, e, n, i, a, r) {
						for (var s = 0; s < i; s += 1) {
							var o = (s + 1) / (i + 1),
								l = 2 === a ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
								c = e.normalAngle(o);
							setPoint(t, e.point(o), c, r, n, l / (2 * (i + 1)), l / (2 * (i + 1)), a), r = -r
						}
						return r
					}

					function linearOffset(t, e, n) {
						var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
						return [polarOffset(t, i, n), polarOffset(e, i, n)]
					}

					function offsetSegment(t, e) {
						n = (l = linearOffset(t.points[0], t.points[1], e))[0], i = l[1], a = (l = linearOffset(t.points[1], t.points[2], e))[0], r = l[1], s = (l = linearOffset(t.points[2], t.points[3], e))[0], o = l[1];
						var n, i, a, r, s, o, l, c = lineIntersection(n, i, a, r);
						null === c && (c = i);
						var u = lineIntersection(s, o, a, r);
						return null === u && (u = s), new PolynomialBezier(n, c, u, o)
					}

					function joinLines(t, e, n, i, a) {
						var r = e.points[3],
							s = n.points[0];
						if (3 === i || pointEqual(r, s)) return r;
						if (2 === i) {
							var o = -e.tangentAngle(1),
								l = -n.tangentAngle(0) + Math.PI,
								c = lineIntersection(r, polarOffset(r, o + Math.PI / 2, 100), s, polarOffset(s, o + Math.PI / 2, 100)),
								u = c ? pointDistance(c, r) : pointDistance(r, s) / 2,
								f = polarOffset(r, o, 2 * u * roundCorner);
							return t.setXYAt(f[0], f[1], "o", t.length() - 1), f = polarOffset(s, l, 2 * u * roundCorner), t.setTripleAt(s[0], s[1], s[0], s[1], f[0], f[1], t.length()), s
						}
						var h = lineIntersection(pointEqual(r, e.points[2]) ? e.points[0] : e.points[2], r, s, pointEqual(s, n.points[1]) ? n.points[3] : n.points[1]);
						return h && pointDistance(h, r) < a ? (t.setTripleAt(h[0], h[1], h[0], h[1], h[0], h[1], t.length()), h) : r
					}

					function getIntersection(t, e) {
						var n = t.intersections(e);
						return n.length && floatEqual(n[0][0], 1) && n.shift(), n.length ? n[0] : null
					}

					function pruneSegmentIntersection(t, e) {
						var n = t.slice(),
							i = e.slice(),
							a = getIntersection(t[t.length - 1], e[0]);
						return a && (n[t.length - 1] = t[t.length - 1].split(a[0])[0], i[0] = e[0].split(a[1])[1]), t.length > 1 && e.length > 1 && (a = getIntersection(t[0], e[e.length - 1])) ? [
							[t[0].split(a[0])[0]],
							[e[e.length - 1].split(a[1])[1]]
						] : [n, i]
					}

					function pruneIntersections(t) {
						for (var e, n = 1; n < t.length; n += 1) e = pruneSegmentIntersection(t[n - 1], t[n]), t[n - 1] = e[0], t[n] = e[1];
						return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t
					}

					function offsetSegmentSplit(t, e) {
						var n, i, a, r, s = t.inflectionPoints();
						if (0 === s.length) return [offsetSegment(t, e)];
						if (1 === s.length || floatEqual(s[1], 1)) return n = (a = t.split(s[0]))[0], i = a[1], [offsetSegment(n, e), offsetSegment(i, e)];
						n = (a = t.split(s[0]))[0];
						var o = (s[1] - s[0]) / (1 - s[0]);
						return r = (a = a[1].split(o))[0], i = a[1], [offsetSegment(n, e), offsetSegment(r, e), offsetSegment(i, e)]
					}

					function OffsetPathModifier() {}

					function getFontProperties(t) {
						for (var e = t.fStyle ? t.fStyle.split(" ") : [], n = "normal", i = "normal", a = e.length, r = 0; r < a; r += 1) switch (e[r].toLowerCase()) {
							case "italic":
								i = "italic";
								break;
							case "bold":
								n = "700";
								break;
							case "black":
								n = "900";
								break;
							case "medium":
								n = "500";
								break;
							case "regular":
							case "normal":
								n = "400";
								break;
							case "light":
							case "thin":
								n = "200"
						}
						return {
							style: i,
							weight: t.fWeight || n
						}
					}
					extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
						this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
					}, RepeaterModifier.prototype.applyTransforms = function(t, e, n, i, a, r) {
						var s = r ? -1 : 1,
							o = i.s.v[0] + (1 - i.s.v[0]) * (1 - a),
							l = i.s.v[1] + (1 - i.s.v[1]) * (1 - a);
						t.translate(i.p.v[0] * s * a, i.p.v[1] * s * a, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * s * a), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), n.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), n.scale(r ? 1 / o : o, r ? 1 / l : l), n.translate(i.a.v[0], i.a.v[1], i.a.v[2])
					}, RepeaterModifier.prototype.init = function(t, e, n, i) {
						for (this.elem = t, this.arr = e, this.pos = n, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[n]); n > 0;) n -= 1, this._elements.unshift(e[n]);
						this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
					}, RepeaterModifier.prototype.resetElements = function(t) {
						var e, n = t.length;
						for (e = 0; e < n; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
					}, RepeaterModifier.prototype.cloneElements = function(t) {
						var e = JSON.parse(JSON.stringify(t));
						return this.resetElements(e), e
					}, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
						var n, i = t.length;
						for (n = 0; n < i; n += 1) t[n]._render = e, "gr" === t[n].ty && this.changeGroupRender(t[n].it, e)
					}, RepeaterModifier.prototype.processShapes = function(t) {
						var e, n, i, a, r, s = !1;
						if (this._mdf || t) {
							var o, l = Math.ceil(this.c.v);
							if (this._groups.length < l) {
								for (; this._groups.length < l;) {
									var c = {
										it: this.cloneElements(this._elements),
										ty: "gr"
									};
									c.it.push({
										a: {
											a: 0,
											ix: 1,
											k: [0, 0]
										},
										nm: "Transform",
										o: {
											a: 0,
											ix: 7,
											k: 100
										},
										p: {
											a: 0,
											ix: 2,
											k: [0, 0]
										},
										r: {
											a: 1,
											ix: 6,
											k: [{
												s: 0,
												e: 0,
												t: 0
											}, {
												s: 0,
												e: 0,
												t: 1
											}]
										},
										s: {
											a: 0,
											ix: 3,
											k: [100, 100]
										},
										sa: {
											a: 0,
											ix: 5,
											k: 0
										},
										sk: {
											a: 0,
											ix: 4,
											k: 0
										},
										ty: "tr"
									}), this.arr.splice(0, 0, c), this._groups.splice(0, 0, c), this._currentCopies += 1
								}
								this.elem.reloadShapes(), s = !0
							}
							for (r = 0, i = 0; i <= this._groups.length - 1; i += 1) {
								if (o = r < l, this._groups[i]._render = o, this.changeGroupRender(this._groups[i].it, o), !o) {
									var u = this.elemsData[i].it,
										f = u[u.length - 1];
									0 !== f.transform.op.v ? (f.transform.op._mdf = !0, f.transform.op.v = 0) : f.transform.op._mdf = !1
								}
								r += 1
							}
							this._currentCopies = l;
							var h = this.o.v,
								d = h % 1,
								p = h > 0 ? Math.floor(h) : Math.ceil(h),
								m = this.pMatrix.props,
								g = this.rMatrix.props,
								y = this.sMatrix.props;
							this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
							var v, b, E = 0;
							if (h > 0) {
								for (; E < p;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), E += 1;
								d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, d, !1), E += d)
							} else if (h < 0) {
								for (; E > p;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), E -= 1;
								d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -d, !0), E -= d)
							}
							for (i = 1 === this.data.m ? 0 : this._currentCopies - 1, a = 1 === this.data.m ? 1 : -1, r = this._currentCopies; r;) {
								if (b = (n = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), 0 !== E) {
									for ((0 !== i && 1 === a || i !== this._currentCopies - 1 && -1 === a) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), v = 0; v < b; v += 1) n[v] = this.matrix.props[v];
									this.matrix.reset()
								} else
									for (this.matrix.reset(), v = 0; v < b; v += 1) n[v] = this.matrix.props[v];
								E += 1, r -= 1, i += a
							}
						} else
							for (r = this._currentCopies, i = 0, a = 1; r;) n = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, r -= 1, i += a;
						return s
					}, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
						this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
					}, RoundCornersModifier.prototype.processPath = function(t, e) {
						var n, i = shapePool.newElement();
						i.c = t.c;
						var a, r, s, o, l, c, u, f, h, d, p, m, g = t._length,
							y = 0;
						for (n = 0; n < g; n += 1) a = t.v[n], s = t.o[n], r = t.i[n], a[0] === s[0] && a[1] === s[1] && a[0] === r[0] && a[1] === r[1] ? 0 !== n && n !== g - 1 || t.c ? (o = 0 === n ? t.v[g - 1] : t.v[n - 1], c = (l = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, u = p = a[0] + (o[0] - a[0]) * c, f = m = a[1] - (a[1] - o[1]) * c, h = u - (u - a[0]) * roundCorner, d = f - (f - a[1]) * roundCorner, i.setTripleAt(u, f, h, d, p, m, y), y += 1, o = n === g - 1 ? t.v[0] : t.v[n + 1], c = (l = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, u = h = a[0] + (o[0] - a[0]) * c, f = d = a[1] + (o[1] - a[1]) * c, p = u - (u - a[0]) * roundCorner, m = f - (f - a[1]) * roundCorner, i.setTripleAt(u, f, h, d, p, m, y)) : i.setTripleAt(a[0], a[1], s[0], s[1], r[0], r[1], y) : i.setTripleAt(t.v[n][0], t.v[n][1], t.o[n][0], t.o[n][1], t.i[n][0], t.i[n][1], y), y += 1;
						return i
					}, RoundCornersModifier.prototype.processShapes = function(t) {
						var e, n, i, a, r, s, o = this.shapes.length,
							l = this.rd.v;
						if (0 !== l)
							for (n = 0; n < o; n += 1) {
								if (s = (r = this.shapes[n]).localShapeCollection, r.shape._mdf || this._mdf || t)
									for (s.releaseShapes(), r.shape._mdf = !0, e = r.shape.paths.shapes, a = r.shape.paths._length, i = 0; i < a; i += 1) s.addShape(this.processPath(e[i], l));
								r.shape.paths = r.localShapeCollection
							}
						this.dynamicProperties.length || (this._mdf = !1)
					}, PolynomialBezier.prototype.point = function(t) {
						return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]]
					}, PolynomialBezier.prototype.derivative = function(t) {
						return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]]
					}, PolynomialBezier.prototype.tangentAngle = function(t) {
						var e = this.derivative(t);
						return Math.atan2(e[1], e[0])
					}, PolynomialBezier.prototype.normalAngle = function(t) {
						var e = this.derivative(t);
						return Math.atan2(e[0], e[1])
					}, PolynomialBezier.prototype.inflectionPoints = function() {
						var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
						if (floatZero(t)) return [];
						var e = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t,
							n = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
						if (n < 0) return [];
						var i = Math.sqrt(n);
						return floatZero(i) ? i > 0 && i < 1 ? [e] : [] : [e - i, e + i].filter(function(t) {
							return t > 0 && t < 1
						})
					}, PolynomialBezier.prototype.split = function(t) {
						if (t <= 0) return [singlePoint(this.points[0]), this];
						if (t >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
						var e = lerpPoint(this.points[0], this.points[1], t),
							n = lerpPoint(this.points[1], this.points[2], t),
							i = lerpPoint(this.points[2], this.points[3], t),
							a = lerpPoint(e, n, t),
							r = lerpPoint(n, i, t),
							s = lerpPoint(a, r, t);
						return [new PolynomialBezier(this.points[0], e, a, s, !0), new PolynomialBezier(s, r, i, this.points[3], !0)]
					}, PolynomialBezier.prototype.bounds = function() {
						return {
							x: extrema(this, 0),
							y: extrema(this, 1)
						}
					}, PolynomialBezier.prototype.boundingBox = function() {
						var t = this.bounds();
						return {
							left: t.x.min,
							right: t.x.max,
							top: t.y.min,
							bottom: t.y.max,
							width: t.x.max - t.x.min,
							height: t.y.max - t.y.min,
							cx: (t.x.max + t.x.min) / 2,
							cy: (t.y.max + t.y.min) / 2
						}
					}, PolynomialBezier.prototype.intersections = function(t, e, n) {
						void 0 === e && (e = 2), void 0 === n && (n = 7);
						var i = [];
						return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, i, n), i
					}, PolynomialBezier.shapeSegment = function(t, e) {
						var n = (e + 1) % t.length();
						return new PolynomialBezier(t.v[e], t.o[e], t.i[n], t.v[n], !0)
					}, PolynomialBezier.shapeSegmentInverted = function(t, e) {
						var n = (e + 1) % t.length();
						return new PolynomialBezier(t.v[n], t.i[n], t.o[e], t.v[e], !0)
					}, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(t, e) {
						this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
					}, ZigZagModifier.prototype.processPath = function(t, e, n, i) {
						var a = t._length,
							r = shapePool.newElement();
						if (r.c = t.c, t.c || (a -= 1), 0 === a) return r;
						var s = -1,
							o = PolynomialBezier.shapeSegment(t, 0);
						zigZagCorner(r, t, 0, e, n, i, s);
						for (var l = 0; l < a; l += 1) s = zigZagSegment(r, o, e, n, i, -s), o = l !== a - 1 || t.c ? PolynomialBezier.shapeSegment(t, (l + 1) % a) : null, zigZagCorner(r, t, l + 1, e, n, i, s);
						return r
					}, ZigZagModifier.prototype.processShapes = function(t) {
						var e, n, i, a, r, s, o = this.shapes.length,
							l = this.amplitude.v,
							c = Math.max(0, Math.round(this.frequency.v)),
							u = this.pointsType.v;
						if (0 !== l)
							for (n = 0; n < o; n += 1) {
								if (s = (r = this.shapes[n]).localShapeCollection, r.shape._mdf || this._mdf || t)
									for (s.releaseShapes(), r.shape._mdf = !0, e = r.shape.paths.shapes, a = r.shape.paths._length, i = 0; i < a; i += 1) s.addShape(this.processPath(e[i], l, c, u));
								r.shape.paths = r.localShapeCollection
							}
						this.dynamicProperties.length || (this._mdf = !1)
					}, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
						this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
					}, OffsetPathModifier.prototype.processPath = function(t, e, n, i) {
						var a = shapePool.newElement();
						a.c = t.c;
						var r, s, o, l = t.length();
						t.c || (l -= 1);
						var c = [];
						for (r = 0; r < l; r += 1) o = PolynomialBezier.shapeSegment(t, r), c.push(offsetSegmentSplit(o, e));
						if (!t.c)
							for (r = l - 1; r >= 0; r -= 1) o = PolynomialBezier.shapeSegmentInverted(t, r), c.push(offsetSegmentSplit(o, e));
						c = pruneIntersections(c);
						var u = null,
							f = null;
						for (r = 0; r < c.length; r += 1) {
							var h = c[r];
							for (f && (u = joinLines(a, f, h[0], n, i)), f = h[h.length - 1], s = 0; s < h.length; s += 1) o = h[s], u && pointEqual(o.points[0], u) ? a.setXYAt(o.points[1][0], o.points[1][1], "o", a.length() - 1) : a.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], a.length()), a.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], a.length()), u = o.points[3]
						}
						return c.length && joinLines(a, f, c[0][0], n, i), a
					}, OffsetPathModifier.prototype.processShapes = function(t) {
						var e, n, i, a, r, s, o = this.shapes.length,
							l = this.amount.v,
							c = this.miterLimit.v,
							u = this.lineJoin;
						if (0 !== l)
							for (n = 0; n < o; n += 1) {
								if (s = (r = this.shapes[n]).localShapeCollection, r.shape._mdf || this._mdf || t)
									for (s.releaseShapes(), r.shape._mdf = !0, e = r.shape.paths.shapes, a = r.shape.paths._length, i = 0; i < a; i += 1) s.addShape(this.processPath(e[i], l, u, c));
								r.shape.paths = r.localShapeCollection
							}
						this.dynamicProperties.length || (this._mdf = !1)
					};
					var FontManager = function() {
						var t = {
								w: 0,
								size: 0,
								shapes: [],
								data: {
									shapes: []
								}
							},
							e = [];
						e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
						var n = 127988,
							i = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

						function a(t, e) {
							var n = createTag("span");
							n.setAttribute("aria-hidden", !0), n.style.fontFamily = e;
							var i = createTag("span");
							i.innerText = "giItT1WQy@!-/#", n.style.position = "absolute", n.style.left = "-10000px", n.style.top = "-10000px", n.style.fontSize = "300px", n.style.fontVariant = "normal", n.style.fontStyle = "normal", n.style.fontWeight = "normal", n.style.letterSpacing = "0", n.appendChild(i), document.body.appendChild(n);
							var a = i.offsetWidth;
							return i.style.fontFamily = function(t) {
								var e, n = t.split(","),
									i = n.length,
									a = [];
								for (e = 0; e < i; e += 1) "sans-serif" !== n[e] && "monospace" !== n[e] && a.push(n[e]);
								return a.join(",")
							}(t) + ", " + e, {
								node: i,
								w: a,
								parent: n
							}
						}

						function r(t, e) {
							var n, i = document.body && e ? "svg" : "canvas",
								a = getFontProperties(t);
							if ("svg" === i) {
								var r = createNS("text");
								r.style.fontSize = "100px", r.setAttribute("font-family", t.fFamily), r.setAttribute("font-style", a.style), r.setAttribute("font-weight", a.weight), r.textContent = "1", t.fClass ? (r.style.fontFamily = "inherit", r.setAttribute("class", t.fClass)) : r.style.fontFamily = t.fFamily, e.appendChild(r), n = r
							} else {
								var s = new OffscreenCanvas(500, 500).getContext("2d");
								s.font = a.style + " " + a.weight + " 100px " + t.fFamily, n = s
							}
							return {
								measureText: function(t) {
									return "svg" === i ? (n.textContent = t, n.getComputedTextLength()) : n.measureText(t).width
								}
							}
						}

						function s(t) {
							var e = 0,
								n = t.charCodeAt(0);
							if (n >= 55296 && n <= 56319) {
								var i = t.charCodeAt(1);
								i >= 56320 && i <= 57343 && (e = 1024 * (n - 55296) + i - 56320 + 65536)
							}
							return e
						}

						function o(t) {
							var e = s(t);
							return e >= 127462 && e <= 127487
						}
						var l = function() {
							this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
						};
						l.isModifier = function(t, e) {
							var n = t.toString(16) + e.toString(16);
							return -1 !== i.indexOf(n)
						}, l.isZeroWidthJoiner = function(t) {
							return 8205 === t
						}, l.isFlagEmoji = function(t) {
							return o(t.substr(0, 2)) && o(t.substr(2, 2))
						}, l.isRegionalCode = o, l.isCombinedCharacter = function(t) {
							return -1 !== e.indexOf(t)
						}, l.isRegionalFlag = function(t, e) {
							var i = s(t.substr(e, 2));
							if (i !== n) return !1;
							var a = 0;
							for (e += 2; a < 5;) {
								if ((i = s(t.substr(e, 2))) < 917601 || i > 917626) return !1;
								a += 1, e += 2
							}
							return 917631 === s(t.substr(e, 2))
						}, l.isVariationSelector = function(t) {
							return 65039 === t
						}, l.BLACK_FLAG_CODE_POINT = n;
						var c = {
							addChars: function(t) {
								if (t) {
									this.chars || (this.chars = []);
									var e, n, i, a = t.length,
										r = this.chars.length;
									for (e = 0; e < a; e += 1) {
										for (n = 0, i = !1; n < r;) this.chars[n].style === t[e].style && this.chars[n].fFamily === t[e].fFamily && this.chars[n].ch === t[e].ch && (i = !0), n += 1;
										i || (this.chars.push(t[e]), r += 1)
									}
								}
							},
							addFonts: function(t, e) {
								if (t) {
									if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
									if (!document.body) return this.isLoaded = !0, t.list.forEach(function(t) {
										t.helper = r(t), t.cache = {}
									}), void(this.fonts = t.list);
									var n, i = t.list,
										s = i.length,
										o = s;
									for (n = 0; n < s; n += 1) {
										var l, c, u = !0;
										if (i[n].loaded = !1, i[n].monoCase = a(i[n].fFamily, "monospace"), i[n].sansCase = a(i[n].fFamily, "sans-serif"), i[n].fPath) {
											if ("p" === i[n].fOrigin || 3 === i[n].origin) {
												if ((l = document.querySelectorAll('style[f-forigin="p"][f-family="' + i[n].fFamily + '"], style[f-origin="3"][f-family="' + i[n].fFamily + '"]')).length > 0 && (u = !1), u) {
													var f = createTag("style");
													f.setAttribute("f-forigin", i[n].fOrigin), f.setAttribute("f-origin", i[n].origin), f.setAttribute("f-family", i[n].fFamily), f.type = "text/css", f.innerText = "@font-face {font-family: " + i[n].fFamily + "; font-style: normal; src: url('" + i[n].fPath + "');}", e.appendChild(f)
												}
											} else if ("g" === i[n].fOrigin || 1 === i[n].origin) {
												for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), c = 0; c < l.length; c += 1) - 1 !== l[c].href.indexOf(i[n].fPath) && (u = !1);
												if (u) {
													var h = createTag("link");
													h.setAttribute("f-forigin", i[n].fOrigin), h.setAttribute("f-origin", i[n].origin), h.type = "text/css", h.rel = "stylesheet", h.href = i[n].fPath, document.body.appendChild(h)
												}
											} else if ("t" === i[n].fOrigin || 2 === i[n].origin) {
												for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), c = 0; c < l.length; c += 1) i[n].fPath === l[c].src && (u = !1);
												if (u) {
													var d = createTag("link");
													d.setAttribute("f-forigin", i[n].fOrigin), d.setAttribute("f-origin", i[n].origin), d.setAttribute("rel", "stylesheet"), d.setAttribute("href", i[n].fPath), e.appendChild(d)
												}
											}
										} else i[n].loaded = !0, o -= 1;
										i[n].helper = r(i[n], e), i[n].cache = {}, this.fonts.push(i[n])
									}
									0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
								} else this.isLoaded = !0
							},
							getCharData: function(e, n, i) {
								for (var a = 0, r = this.chars.length; a < r;) {
									if (this.chars[a].ch === e && this.chars[a].style === n && this.chars[a].fFamily === i) return this.chars[a];
									a += 1
								}
								return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, n, i)), t
							},
							getFontByName: function(t) {
								for (var e = 0, n = this.fonts.length; e < n;) {
									if (this.fonts[e].fName === t) return this.fonts[e];
									e += 1
								}
								return this.fonts[0]
							},
							measureText: function(t, e, n) {
								var i = this.getFontByName(e),
									a = t;
								if (!i.cache[a]) {
									var r = i.helper;
									if (" " === t) {
										var s = r.measureText("|" + t + "|"),
											o = r.measureText("||");
										i.cache[a] = (s - o) / 100
									} else i.cache[a] = r.measureText(t) / 100
								}
								return i.cache[a] * n
							},
							checkLoadedFonts: function() {
								var t, e, n, i = this.fonts.length,
									a = i;
								for (t = 0; t < i; t += 1) this.fonts[t].loaded ? a -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, n = this.fonts[t].monoCase.w, e.offsetWidth !== n ? (a -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, n = this.fonts[t].sansCase.w, e.offsetWidth !== n && (a -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
								0 !== a && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
							},
							setIsLoaded: function() {
								this.isLoaded = !0
							}
						};
						return l.prototype = c, l
					}();

					function SlotManager(t) {
						this.animationData = t
					}

					function slotFactory(t) {
						return new SlotManager(t)
					}

					function RenderableElement() {}
					SlotManager.prototype.getProp = function(t) {
						return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t
					}, RenderableElement.prototype = {
						initRenderable: function() {
							this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
						},
						addRenderableComponent: function(t) {
							-1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
						},
						removeRenderableComponent: function(t) {
							-1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
						},
						prepareRenderableFrame: function(t) {
							this.checkLayerLimits(t)
						},
						checkTransparency: function() {
							this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
						},
						checkLayerLimits: function(t) {
							this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
						},
						renderRenderable: function() {
							var t, e = this.renderableComponents.length;
							for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
						},
						sourceRectAtTime: function() {
							return {
								top: 0,
								left: 0,
								width: 100,
								height: 100
							}
						},
						getLayerSize: function() {
							return 5 === this.data.ty ? {
								w: this.data.textData.width,
								h: this.data.textData.height
							} : {
								w: this.data.width,
								h: this.data.height
							}
						}
					};
					var blendModeEnums, getBlendMode = (blendModeEnums = {
						0: "source-over",
						1: "multiply",
						2: "screen",
						3: "overlay",
						4: "darken",
						5: "lighten",
						6: "color-dodge",
						7: "color-burn",
						8: "hard-light",
						9: "soft-light",
						10: "difference",
						11: "exclusion",
						12: "hue",
						13: "saturation",
						14: "color",
						15: "luminosity"
					}, function(t) {
						return blendModeEnums[t] || ""
					});

					function SliderEffect(t, e, n) {
						this.p = PropertyFactory.getProp(e, t.v, 0, 0, n)
					}

					function AngleEffect(t, e, n) {
						this.p = PropertyFactory.getProp(e, t.v, 0, 0, n)
					}

					function ColorEffect(t, e, n) {
						this.p = PropertyFactory.getProp(e, t.v, 1, 0, n)
					}

					function PointEffect(t, e, n) {
						this.p = PropertyFactory.getProp(e, t.v, 1, 0, n)
					}

					function LayerIndexEffect(t, e, n) {
						this.p = PropertyFactory.getProp(e, t.v, 0, 0, n)
					}

					function MaskIndexEffect(t, e, n) {
						this.p = PropertyFactory.getProp(e, t.v, 0, 0, n)
					}

					function CheckboxEffect(t, e, n) {
						this.p = PropertyFactory.getProp(e, t.v, 0, 0, n)
					}

					function NoValueEffect() {
						this.p = {}
					}

					function EffectsManager(t, e) {
						var n, i = t.ef || [];
						this.effectElements = [];
						var a, r = i.length;
						for (n = 0; n < r; n += 1) a = new GroupEffect(i[n], e), this.effectElements.push(a)
					}

					function GroupEffect(t, e) {
						this.init(t, e)
					}

					function BaseElement() {}

					function FrameElement() {}

					function FootageElement(t, e, n) {
						this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, n)
					}

					function AudioElement(t, e, n) {
						this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, n), this._isPlaying = !1, this._canPlay = !1;
						var i = this.globalData.getAssetsPath(this.assetData);
						this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
							_placeholder: !0
						}, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {
							k: [100]
						}, 1, .01, this)
					}

					function BaseRenderer() {}
					extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
						this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
						var n, i, a = this.data.ef.length,
							r = this.data.ef;
						for (n = 0; n < a; n += 1) {
							switch (i = null, r[n].ty) {
								case 0:
									i = new SliderEffect(r[n], e, this);
									break;
								case 1:
									i = new AngleEffect(r[n], e, this);
									break;
								case 2:
									i = new ColorEffect(r[n], e, this);
									break;
								case 3:
									i = new PointEffect(r[n], e, this);
									break;
								case 4:
								case 7:
									i = new CheckboxEffect(r[n], e, this);
									break;
								case 10:
									i = new LayerIndexEffect(r[n], e, this);
									break;
								case 11:
									i = new MaskIndexEffect(r[n], e, this);
									break;
								case 5:
									i = new EffectsManager(r[n], e, this);
									break;
								default:
									i = new NoValueEffect(r[n], e, this)
							}
							i && this.effectElements.push(i)
						}
					}, BaseElement.prototype = {
						checkMasks: function() {
							if (!this.data.hasMask) return !1;
							for (var t = 0, e = this.data.masksProperties.length; t < e;) {
								if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
								t += 1
							}
							return !1
						},
						initExpressions: function() {
							var t = getExpressionInterfaces();
							if (t) {
								var e = t("layer"),
									n = t("effects"),
									i = t("shape"),
									a = t("text"),
									r = t("comp");
								this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
								var s = n.createEffectsInterface(this, this.layerInterface);
								this.layerInterface.registerEffectsInterface(s), 0 === this.data.ty || this.data.xt ? this.compInterface = r(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = i(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = a(this), this.layerInterface.text = this.layerInterface.textInterface)
							}
						},
						setBlendMode: function() {
							var t = getBlendMode(this.data.bm);
							(this.baseElement || this.layerElement).style["mix-blend-mode"] = t
						},
						initBaseData: function(t, e, n) {
							this.globalData = e, this.comp = n, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
						},
						getType: function() {
							return this.type
						},
						sourceRectAtTime: function() {}
					}, FrameElement.prototype = {
						initFrame: function() {
							this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
						},
						prepareProperties: function(t, e) {
							var n, i = this.dynamicProperties.length;
							for (n = 0; n < i; n += 1)(e || this._isParent && "transform" === this.dynamicProperties[n].propType) && (this.dynamicProperties[n].getValue(), this.dynamicProperties[n]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
						},
						addDynamicProperty: function(t) {
							-1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
						}
					}, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
						return null
					}, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
						var t = getExpressionInterfaces();
						if (t) {
							var e = t("footage");
							this.layerInterface = e(this)
						}
					}, FootageElement.prototype.getFootageData = function() {
						return this.footageData
					}, AudioElement.prototype.prepareFrame = function(t) {
						if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
						else {
							var e = this.tm.v;
							this._currentTime = e
						}
						this._volume = this.lv.v[0];
						var n = this._volume * this._volumeMultiplier;
						this._previousVolume !== n && (this._previousVolume = n, this.audio.volume(n))
					}, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
						this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
					}, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
						this.audio.pause(), this._isPlaying = !1
					}, AudioElement.prototype.pause = function() {
						this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
					}, AudioElement.prototype.resume = function() {
						this._canPlay = !0
					}, AudioElement.prototype.setRate = function(t) {
						this.audio.rate(t)
					}, AudioElement.prototype.volume = function(t) {
						this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume)
					}, AudioElement.prototype.getBaseElement = function() {
						return null
					}, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, BaseRenderer.prototype.checkLayers = function(t) {
						var e, n, i = this.layers.length;
						for (this.completeLayers = !0, e = i - 1; e >= 0; e -= 1) this.elements[e] || (n = this.layers[e]).ip - n.st <= t - this.layers[e].st && n.op - n.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
						this.checkPendingElements()
					}, BaseRenderer.prototype.createItem = function(t) {
						switch (t.ty) {
							case 2:
								return this.createImage(t);
							case 0:
								return this.createComp(t);
							case 1:
								return this.createSolid(t);
							case 3:
							default:
								return this.createNull(t);
							case 4:
								return this.createShape(t);
							case 5:
								return this.createText(t);
							case 6:
								return this.createAudio(t);
							case 13:
								return this.createCamera(t);
							case 15:
								return this.createFootage(t)
						}
					}, BaseRenderer.prototype.createCamera = function() {
						throw Error("You're using a 3d camera. Try the html renderer.")
					}, BaseRenderer.prototype.createAudio = function(t) {
						return new AudioElement(t, this.globalData, this)
					}, BaseRenderer.prototype.createFootage = function(t) {
						return new FootageElement(t, this.globalData, this)
					}, BaseRenderer.prototype.buildAllItems = function() {
						var t, e = this.layers.length;
						for (t = 0; t < e; t += 1) this.buildItem(t);
						this.checkPendingElements()
					}, BaseRenderer.prototype.includeLayers = function(t) {
						this.completeLayers = !1;
						var e, n, i = t.length,
							a = this.layers.length;
						for (e = 0; e < i; e += 1)
							for (n = 0; n < a;) {
								if (this.layers[n].id === t[e].id) {
									this.layers[n] = t[e];
									break
								}
								n += 1
							}
					}, BaseRenderer.prototype.setProjectInterface = function(t) {
						this.globalData.projectInterface = t
					}, BaseRenderer.prototype.initItems = function() {
						this.globalData.progressiveLoad || this.buildAllItems()
					}, BaseRenderer.prototype.buildElementParenting = function(t, e, n) {
						for (var i = this.elements, a = this.layers, r = 0, s = a.length; r < s;) a[r].ind == e && (i[r] && !0 !== i[r] ? (n.push(i[r]), i[r].setAsParent(), void 0 !== a[r].parent ? this.buildElementParenting(t, a[r].parent, n) : t.setHierarchy(n)) : (this.buildItem(r), this.addPendingElement(t))), r += 1
					}, BaseRenderer.prototype.addPendingElement = function(t) {
						this.pendingElements.push(t)
					}, BaseRenderer.prototype.searchExtraCompositions = function(t) {
						var e, n = t.length;
						for (e = 0; e < n; e += 1)
							if (t[e].xt) {
								var i = this.createComp(t[e]);
								i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
							}
					}, BaseRenderer.prototype.getElementById = function(t) {
						var e, n = this.elements.length;
						for (e = 0; e < n; e += 1)
							if (this.elements[e].data.ind === t) return this.elements[e];
						return null
					}, BaseRenderer.prototype.getElementByPath = function(t) {
						var e, n = t.shift();
						if ("number" == typeof n) e = this.elements[n];
						else {
							var i, a = this.elements.length;
							for (i = 0; i < a; i += 1)
								if (this.elements[i].data.nm === n) {
									e = this.elements[i];
									break
								}
						}
						return 0 === t.length ? e : e.getElementByPath(t)
					}, BaseRenderer.prototype.setupGlobalData = function(t, e) {
						this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
							w: t.w,
							h: t.h
						}
					};
					var effectTypes = {
						TRANSFORM_EFFECT: "transformEFfect"
					};

					function TransformElement() {}

					function MaskElement(t, e, n) {
						this.data = t, this.element = e, this.globalData = n, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
						var i, a, r, s = this.globalData.defs,
							o = this.masksProperties ? this.masksProperties.length : 0;
						this.viewData = createSizedArray(o), this.solidPath = "";
						var l, c, u, f, h, d, p = this.masksProperties,
							m = 0,
							g = [],
							y = createElementID(),
							v = "clipPath",
							b = "clip-path";
						for (a = 0; a < o; a += 1)
							if (("a" !== p[a].mode && "n" !== p[a].mode || p[a].inv || 100 !== p[a].o.k || p[a].o.x) && (v = "mask", b = "mask"), "s" !== p[a].mode && "i" !== p[a].mode || 0 !== m ? u = null : ((u = createNS("rect")).setAttribute("fill", "#ffffff"), u.setAttribute("width", this.element.comp.data.w || 0), u.setAttribute("height", this.element.comp.data.h || 0), g.push(u)), r = createNS("path"), "n" === p[a].mode) this.viewData[a] = {
								op: PropertyFactory.getProp(this.element, p[a].o, 0, .01, this.element),
								prop: ShapePropertyFactory.getShapeProp(this.element, p[a], 3),
								elem: r,
								lastPath: ""
							}, s.appendChild(r);
							else {
								if (m += 1, r.setAttribute("fill", "s" === p[a].mode ? "#000000" : "#ffffff"), r.setAttribute("clip-rule", "nonzero"), 0 !== p[a].x.k ? (v = "mask", b = "mask", d = PropertyFactory.getProp(this.element, p[a].x, 0, null, this.element), i = createElementID(), (f = createNS("filter")).setAttribute("id", i), (h = createNS("feMorphology")).setAttribute("operator", "erode"), h.setAttribute("in", "SourceGraphic"), h.setAttribute("radius", "0"), f.appendChild(h), s.appendChild(f), r.setAttribute("stroke", "s" === p[a].mode ? "#000000" : "#ffffff")) : (h = null, d = null), this.storedData[a] = {
										elem: r,
										x: d,
										expan: h,
										lastPath: "",
										lastOperator: "",
										filterId: i,
										lastRadius: 0
									}, "i" === p[a].mode) {
									c = g.length;
									var E = createNS("g");
									for (l = 0; l < c; l += 1) E.appendChild(g[l]);
									var T = createNS("mask");
									T.setAttribute("mask-type", "alpha"), T.setAttribute("id", y + "_" + m), T.appendChild(r), s.appendChild(T), E.setAttribute("mask", "url(" + getLocationHref() + "#" + y + "_" + m + ")"), g.length = 0, g.push(E)
								} else g.push(r);
								p[a].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[a] = {
									elem: r,
									lastPath: "",
									op: PropertyFactory.getProp(this.element, p[a].o, 0, .01, this.element),
									prop: ShapePropertyFactory.getShapeProp(this.element, p[a], 3),
									invRect: u
								}, this.viewData[a].prop.k || this.drawPath(p[a], this.viewData[a].prop.v, this.viewData[a])
							} for (this.maskElement = createNS(v), o = g.length, a = 0; a < o; a += 1) this.maskElement.appendChild(g[a]);
						m > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(b, "url(" + getLocationHref() + "#" + y + ")"), s.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
					}
					TransformElement.prototype = {
						initTransform: function() {
							var t = new Matrix;
							this.finalTransform = {
								mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
									o: 0
								},
								_matMdf: !1,
								_localMatMdf: !1,
								_opMdf: !1,
								mat: t,
								localMat: t,
								localOpacity: 1
							}, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
						},
						renderTransform: function() {
							if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
								var t, e = this.finalTransform.mat,
									n = 0,
									i = this.hierarchy.length;
								if (!this.finalTransform._matMdf)
									for (; n < i;) {
										if (this.hierarchy[n].finalTransform.mProp._mdf) {
											this.finalTransform._matMdf = !0;
											break
										}
										n += 1
									}
								if (this.finalTransform._matMdf)
									for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), n = 0; n < i; n += 1) e.multiply(this.hierarchy[n].finalTransform.mProp.v)
							}
							this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
						},
						renderLocalTransform: function() {
							if (this.localTransforms) {
								var t = 0,
									e = this.localTransforms.length;
								if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
									for (; t < e;) this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), t += 1;
								if (this.finalTransform._localMatMdf) {
									var n = this.finalTransform.localMat;
									for (this.localTransforms[0].matrix.clone(n), t = 1; t < e; t += 1) {
										var i = this.localTransforms[t].matrix;
										n.multiply(i)
									}
									n.multiply(this.finalTransform.mat)
								}
								if (this.finalTransform._opMdf) {
									var a = this.finalTransform.localOpacity;
									for (t = 0; t < e; t += 1) a *= .01 * this.localTransforms[t].opacity;
									this.finalTransform.localOpacity = a
								}
							}
						},
						searchEffectTransforms: function() {
							if (this.renderableEffectsManager) {
								var t = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
								if (t.length) {
									this.localTransforms = [], this.finalTransform.localMat = new Matrix;
									var e = 0,
										n = t.length;
									for (e = 0; e < n; e += 1) this.localTransforms.push(t[e])
								}
							}
						},
						globalToLocal: function(t) {
							var e = [];
							e.push(this.finalTransform);
							for (var n, i = !0, a = this.comp; i;) a.finalTransform ? (a.data.hasMask && e.splice(0, 0, a.finalTransform), a = a.comp) : i = !1;
							var r, s = e.length;
							for (n = 0; n < s; n += 1) r = e[n].mat.applyToPointArray(0, 0, 0), t = [t[0] - r[0], t[1] - r[1], 0];
							return t
						},
						mHelper: new Matrix
					}, MaskElement.prototype.getMaskProperty = function(t) {
						return this.viewData[t].prop
					}, MaskElement.prototype.renderFrame = function(t) {
						var e, n = this.element.finalTransform.mat,
							i = this.masksProperties.length;
						for (e = 0; e < i; e += 1)
							if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", n.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
								var a = this.storedData[e].expan;
								this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[e].filterId + ")")), a.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
							}
					}, MaskElement.prototype.getMaskelement = function() {
						return this.maskElement
					}, MaskElement.prototype.createLayerSolidPath = function() {
						var t = "M0,0 ";
						return t + (" h" + this.globalData.compSize.w + (" v" + this.globalData.compSize.h) + (" h-" + this.globalData.compSize.w) + (" v-" + this.globalData.compSize.h + " "))
					}, MaskElement.prototype.drawPath = function(t, e, n) {
						var i, a, r = " M" + e.v[0][0] + "," + e.v[0][1];
						for (a = e._length, i = 1; i < a; i += 1) r += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[i][0] + "," + e.i[i][1] + " " + e.v[i][0] + "," + e.v[i][1];
						if (e.c && a > 1 && (r += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), n.lastPath !== r) {
							var s = "";
							n.elem && (e.c && (s = t.inv ? this.solidPath + r : r), n.elem.setAttribute("d", s)), n.lastPath = r
						}
					}, MaskElement.prototype.destroy = function() {
						this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
					};
					var filtersFactory = function() {
							var t = {};
							return t.createFilter = function(t, e) {
								var n = createNS("filter");
								return n.setAttribute("id", t), !0 !== e && (n.setAttribute("filterUnits", "objectBoundingBox"), n.setAttribute("x", "0%"), n.setAttribute("y", "0%"), n.setAttribute("width", "100%"), n.setAttribute("height", "100%")), n
							}, t.createAlphaToLuminanceFilter = function() {
								var t = createNS("feColorMatrix");
								return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
							}, t
						}(),
						featureSupport = function() {
							var t = {
								maskType: !0,
								svgLumaHidden: !0,
								offscreenCanvas: "undefined" != typeof OffscreenCanvas
							};
							return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t
						}(),
						registeredEffects$1 = {},
						idPrefix = "filter_result_";

					function SVGEffects(t) {
						var e, n, i = "SourceGraphic",
							a = t.data.ef ? t.data.ef.length : 0,
							r = createElementID(),
							s = filtersFactory.createFilter(r, !0),
							o = 0;
						for (this.filters = [], e = 0; e < a; e += 1) {
							n = null;
							var l = t.data.ef[e].ty;
							registeredEffects$1[l] && (n = new registeredEffects$1[l].effect(s, t.effectsManager.effectElements[e], t, idPrefix + o, i), i = idPrefix + o, registeredEffects$1[l].countsAsEffect && (o += 1)), n && this.filters.push(n)
						}
						o && (t.globalData.defs.appendChild(s), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + r + ")")), this.filters.length && t.addRenderableComponent(this)
					}

					function registerEffect$1(t, e, n) {
						registeredEffects$1[t] = {
							effect: e,
							countsAsEffect: n
						}
					}

					function SVGBaseElement() {}

					function HierarchyElement() {}

					function RenderableDOMElement() {}

					function IImageElement(t, e, n) {
						this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, n), this.sourceRect = {
							top: 0,
							left: 0,
							width: this.assetData.w,
							height: this.assetData.h
						}
					}

					function ProcessedElement(t, e) {
						this.elem = t, this.pos = e
					}

					function IShapeElement() {}
					SVGEffects.prototype.renderFrame = function(t) {
						var e, n = this.filters.length;
						for (e = 0; e < n; e += 1) this.filters[e].renderFrame(t)
					}, SVGEffects.prototype.getEffects = function(t) {
						var e, n = this.filters.length,
							i = [];
						for (e = 0; e < n; e += 1) this.filters[e].type === t && i.push(this.filters[e]);
						return i
					}, SVGBaseElement.prototype = {
						initRendererElement: function() {
							this.layerElement = createNS("g")
						},
						createContainerElements: function() {
							this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
							var t = null;
							if (this.data.td) {
								this.matteMasks = {};
								var e = createNS("g");
								e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e)
							} else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
							if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
								var n = createNS("clipPath"),
									i = createNS("path");
								i.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
								var a = createElementID();
								if (n.setAttribute("id", a), n.appendChild(i), this.globalData.defs.appendChild(n), this.checkMasks()) {
									var r = createNS("g");
									r.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")"), r.appendChild(this.layerElement), this.transformedElement = r, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
								} else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")")
							}
							0 !== this.data.bm && this.setBlendMode()
						},
						renderElement: function() {
							this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
						},
						destroyBaseElement: function() {
							this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
						},
						getBaseElement: function() {
							return this.data.hd ? null : this.baseElement
						},
						createRenderableComponents: function() {
							this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms()
						},
						getMatte: function(t) {
							if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
								var e, n, i, a, r = this.layerId + "_" + t;
								if (1 === t || 3 === t) {
									var s = createNS("mask");
									s.setAttribute("id", r), s.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"), (i = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), s.appendChild(i), this.globalData.defs.appendChild(s), featureSupport.maskType || 1 !== t || (s.setAttribute("mask-type", "luminance"), e = createElementID(), n = filtersFactory.createFilter(e), this.globalData.defs.appendChild(n), n.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (a = createNS("g")).appendChild(i), s.appendChild(a), a.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"))
								} else if (2 === t) {
									var o = createNS("mask");
									o.setAttribute("id", r), o.setAttribute("mask-type", "alpha");
									var l = createNS("g");
									o.appendChild(l), e = createElementID(), n = filtersFactory.createFilter(e);
									var c = createNS("feComponentTransfer");
									c.setAttribute("in", "SourceGraphic"), n.appendChild(c);
									var u = createNS("feFuncA");
									u.setAttribute("type", "table"), u.setAttribute("tableValues", "1.0 0.0"), c.appendChild(u), this.globalData.defs.appendChild(n);
									var f = createNS("rect");
									f.setAttribute("width", this.comp.data.w), f.setAttribute("height", this.comp.data.h), f.setAttribute("x", "0"), f.setAttribute("y", "0"), f.setAttribute("fill", "#ffffff"), f.setAttribute("opacity", "0"), l.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"), l.appendChild(f), (i = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(i), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), n.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), l.appendChild(f), a.appendChild(this.layerElement), l.appendChild(a)), this.globalData.defs.appendChild(o)
								}
								this.matteMasks[t] = r
							}
							return this.matteMasks[t]
						},
						setMatte: function(t) {
							this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")")
						}
					}, HierarchyElement.prototype = {
						initHierarchy: function() {
							this.hierarchy = [], this._isParent = !1, this.checkParenting()
						},
						setHierarchy: function(t) {
							this.hierarchy = t
						},
						setAsParent: function() {
							this._isParent = !0
						},
						checkParenting: function() {
							void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
						}
					}, extendPrototype([RenderableElement, createProxyFunction({
						initElement: function(t, e, n) {
							this.initFrame(), this.initBaseData(t, e, n), this.initTransform(t, e, n), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
						},
						hide: function() {
							this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
						},
						show: function() {
							this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
						},
						renderFrame: function() {
							this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
						},
						renderInnerContent: function() {},
						prepareFrame: function(t) {
							this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
						},
						destroy: function() {
							this.innerElem = null, this.destroyBaseElement()
						}
					})], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
						var t = this.globalData.getAssetsPath(this.assetData);
						this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
					}, IImageElement.prototype.sourceRectAtTime = function() {
						return this.sourceRect
					}, IShapeElement.prototype = {
						addShapeToModifiers: function(t) {
							var e, n = this.shapeModifiers.length;
							for (e = 0; e < n; e += 1) this.shapeModifiers[e].addShape(t)
						},
						isShapeInAnimatedModifiers: function(t) {
							for (var e = this.shapeModifiers.length; 0 < e;)
								if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
							return !1
						},
						renderModifiers: function() {
							if (this.shapeModifiers.length) {
								var t, e = this.shapes.length;
								for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
								for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
							}
						},
						searchProcessedElement: function(t) {
							for (var e = this.processedElements, n = 0, i = e.length; n < i;) {
								if (e[n].elem === t) return e[n].pos;
								n += 1
							}
							return 0
						},
						addProcessedElement: function(t, e) {
							for (var n = this.processedElements, i = n.length; i;)
								if (n[i -= 1].elem === t) return void(n[i].pos = e);
							n.push(new ProcessedElement(t, e))
						},
						prepareFrame: function(t) {
							this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
						}
					};
					var lineCapEnum = {
							1: "butt",
							2: "round",
							3: "square"
						},
						lineJoinEnum = {
							1: "miter",
							2: "round",
							3: "bevel"
						};

					function SVGShapeData(t, e, n) {
						this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = n, this.lvl = e, this._isAnimated = !!n.k;
						for (var i = 0, a = t.length; i < a;) {
							if (t[i].mProps.dynamicProperties.length) {
								this._isAnimated = !0;
								break
							}
							i += 1
						}
					}

					function SVGStyleData(t, e) {
						this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
					}

					function DashProperty(t, e, n, i) {
						this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = n, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
						var a, r, s = e.length || 0;
						for (a = 0; a < s; a += 1) r = PropertyFactory.getProp(t, e[a].v, 0, 0, this), this.k = r.k || this.k, this.dataProps[a] = {
							n: e[a].n,
							p: r
						};
						this.k || this.getValue(!0), this._isAnimated = this.k
					}

					function SVGStrokeStyleData(t, e, n) {
						this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = n, this._isAnimated = !!this._isAnimated
					}

					function SVGFillStyleData(t, e, n) {
						this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = n
					}

					function SVGNoStyleData(t, e, n) {
						this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = n
					}

					function GradientProperty(t, e, n) {
						this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
						var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
						this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(n), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
					}

					function SVGGradientFillStyleData(t, e, n) {
						this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, n)
					}

					function SVGGradientStrokeStyleData(t, e, n) {
						this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, n), this._isAnimated = !!this._isAnimated
					}

					function ShapeGroupData() {
						this.it = [], this.prevViewData = [], this.gr = createNS("g")
					}

					function SVGTransformData(t, e, n) {
						this.transform = {
							mProps: t,
							op: e,
							container: n
						}, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
					}
					SVGShapeData.prototype.setAsAnimated = function() {
						this._isAnimated = !0
					}, SVGStyleData.prototype.reset = function() {
						this.d = "", this._mdf = !1
					}, DashProperty.prototype.getValue = function(t) {
						if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
							var e = 0,
								n = this.dataProps.length;
							for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < n; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
						}
					}, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(t, e) {
						for (var n = 0, i = this.o.length / 2; n < i;) {
							if (Math.abs(t[4 * n] - t[4 * e + 2 * n]) > .01) return !1;
							n += 1
						}
						return !0
					}, GradientProperty.prototype.checkCollapsable = function() {
						if (this.o.length / 2 != this.c.length / 4) return !1;
						if (this.data.k.k[0].s)
							for (var t = 0, e = this.data.k.k.length; t < e;) {
								if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
								t += 1
							} else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
						return !0
					}, GradientProperty.prototype.getValue = function(t) {
						if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
							var e, n, i, a = 4 * this.data.p;
							for (e = 0; e < a; e += 1) n = e % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[e] * n), this.c[e] !== i && (this.c[e] = i, this._cmdf = !t);
							if (this.o.length)
								for (a = this.prop.v.length, e = 4 * this.data.p; e < a; e += 1) n = e % 2 == 0 ? 100 : 1, i = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i, this._omdf = !t);
							this._mdf = !t
						}
					}, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, n) {
						this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
							k: 0
						}, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
							k: 0
						}, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = n, this.stops = [], this.setGradientData(n.pElem, e), this.setGradientOpacity(e, n), this._isAnimated = !!this._isAnimated
					}, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
						var n = createElementID(),
							i = createNS(1 === e.t ? "linearGradient" : "radialGradient");
						i.setAttribute("id", n), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
						var a, r, s, o = [];
						for (s = 4 * e.g.p, r = 0; r < s; r += 4) a = createNS("stop"), i.appendChild(a), o.push(a);
						t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + n + ")"), this.gf = i, this.cst = o
					}, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
						if (this.g._hasOpacity && !this.g._collapsable) {
							var n, i, a, r = createNS("mask"),
								s = createNS("path");
							r.appendChild(s);
							var o = createElementID(),
								l = createElementID();
							r.setAttribute("id", l);
							var c = createNS(1 === t.t ? "linearGradient" : "radialGradient");
							c.setAttribute("id", o), c.setAttribute("spreadMethod", "pad"), c.setAttribute("gradientUnits", "userSpaceOnUse"), a = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
							var u = this.stops;
							for (i = 4 * t.g.p; i < a; i += 2)(n = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), c.appendChild(n), u.push(n);
							s.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), "gs" === t.ty && (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)), this.of = c, this.ms = r, this.ost = u, this.maskId = l, e.msElem = s
						}
					}, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
					var buildShapeString = function(t, e, n, i) {
							if (0 === e) return "";
							var a, r = t.o,
								s = t.i,
								o = t.v,
								l = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
							for (a = 1; a < e; a += 1) l += " C" + i.applyToPointStringified(r[a - 1][0], r[a - 1][1]) + " " + i.applyToPointStringified(s[a][0], s[a][1]) + " " + i.applyToPointStringified(o[a][0], o[a][1]);
							return n && e && (l += " C" + i.applyToPointStringified(r[a - 1][0], r[a - 1][1]) + " " + i.applyToPointStringified(s[0][0], s[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]) + "z"), l
						},
						SVGElementsRenderer = function() {
							var t = new Matrix,
								e = new Matrix;

							function n(t, e, n) {
								(n || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (n || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
							}

							function i() {}

							function a(n, i, a) {
								var r, s, o, l, c, u, f, h, d, p, m = i.styles.length,
									g = i.lvl;
								for (u = 0; u < m; u += 1) {
									if (l = i.sh._mdf || a, i.styles[u].lvl < g) {
										for (h = e.reset(), d = g - i.styles[u].lvl, p = i.transformers.length - 1; !l && d > 0;) l = i.transformers[p].mProps._mdf || l, d -= 1, p -= 1;
										if (l)
											for (d = g - i.styles[u].lvl, p = i.transformers.length - 1; d > 0;) h.multiply(i.transformers[p].mProps.v), d -= 1, p -= 1
									} else h = t;
									if (s = (f = i.sh.paths)._length, l) {
										for (o = "", r = 0; r < s; r += 1)(c = f.shapes[r]) && c._length && (o += buildShapeString(c, c._length, c.c, h));
										i.caches[u] = o
									} else o = i.caches[u];
									i.styles[u].d += !0 === n.hd ? "" : o, i.styles[u]._mdf = l || i.styles[u]._mdf
								}
							}

							function r(t, e, n) {
								var i = e.style;
								(e.c._mdf || n) && i.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || n) && i.pElem.setAttribute("fill-opacity", e.o.v)
							}

							function s(t, e, n) {
								o(t, e, n), l(t, e, n)
							}

							function o(t, e, n) {
								var i, a, r, s, o, l = e.gf,
									c = e.g._hasOpacity,
									u = e.s.v,
									f = e.e.v;
								if (e.o._mdf || n) {
									var h = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
									e.style.pElem.setAttribute(h, e.o.v)
								}
								if (e.s._mdf || n) {
									var d = 1 === t.t ? "x1" : "cx",
										p = "x1" === d ? "y1" : "cy";
									l.setAttribute(d, u[0]), l.setAttribute(p, u[1]), c && !e.g._collapsable && (e.of.setAttribute(d, u[0]), e.of.setAttribute(p, u[1]))
								}
								if (e.g._cmdf || n) {
									i = e.cst;
									var m = e.g.c;
									for (r = i.length, a = 0; a < r; a += 1)(s = i[a]).setAttribute("offset", m[4 * a] + "%"), s.setAttribute("stop-color", "rgb(" + m[4 * a + 1] + "," + m[4 * a + 2] + "," + m[4 * a + 3] + ")")
								}
								if (c && (e.g._omdf || n)) {
									var g = e.g.o;
									for (r = (i = e.g._collapsable ? e.cst : e.ost).length, a = 0; a < r; a += 1) s = i[a], e.g._collapsable || s.setAttribute("offset", g[2 * a] + "%"), s.setAttribute("stop-opacity", g[2 * a + 1])
								}
								if (1 === t.t)(e.e._mdf || n) && (l.setAttribute("x2", f[0]), l.setAttribute("y2", f[1]), c && !e.g._collapsable && (e.of.setAttribute("x2", f[0]), e.of.setAttribute("y2", f[1])));
								else if ((e.s._mdf || e.e._mdf || n) && (o = Math.sqrt(Math.pow(u[0] - f[0], 2) + Math.pow(u[1] - f[1], 2)), l.setAttribute("r", o), c && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || n) {
									o || (o = Math.sqrt(Math.pow(u[0] - f[0], 2) + Math.pow(u[1] - f[1], 2)));
									var y = Math.atan2(f[1] - u[1], f[0] - u[0]),
										v = e.h.v;
									v >= 1 ? v = .99 : v <= -1 && (v = -.99);
									var b = o * v,
										E = Math.cos(y + e.a.v) * b + u[0],
										T = Math.sin(y + e.a.v) * b + u[1];
									l.setAttribute("fx", E), l.setAttribute("fy", T), c && !e.g._collapsable && (e.of.setAttribute("fx", E), e.of.setAttribute("fy", T))
								}
							}

							function l(t, e, n) {
								var i = e.style,
									a = e.d;
								a && (a._mdf || n) && a.dashStr && (i.pElem.setAttribute("stroke-dasharray", a.dashStr), i.pElem.setAttribute("stroke-dashoffset", a.dashoffset[0])), e.c && (e.c._mdf || n) && i.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || n) && i.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || n) && (i.pElem.setAttribute("stroke-width", e.w.v), i.msElem && i.msElem.setAttribute("stroke-width", e.w.v))
							}
							return {
								createRenderFunction: function(t) {
									switch (t.ty) {
										case "fl":
											return r;
										case "gf":
											return o;
										case "gs":
											return s;
										case "st":
											return l;
										case "sh":
										case "el":
										case "rc":
										case "sr":
											return a;
										case "tr":
											return n;
										case "no":
											return i;
										default:
											return null
									}
								}
							}
						}();

					function SVGShapeElement(t, e, n) {
						this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, n), this.prevViewData = []
					}

					function LetterProps(t, e, n, i, a, r) {
						this.o = t, this.sw = e, this.sc = n, this.fc = i, this.m = a, this.p = r, this._mdf = {
							o: !0,
							sw: !!e,
							sc: !!n,
							fc: !!i,
							m: !0,
							p: !0
						}
					}

					function TextProperty(t, e) {
						this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
							ascent: 0,
							boxWidth: this.defaultBoxWidth,
							f: "",
							fStyle: "",
							fWeight: "",
							fc: "",
							j: "",
							justifyOffset: "",
							l: [],
							lh: 0,
							lineWidths: [],
							ls: "",
							of: "",
							s: "",
							sc: "",
							sw: 0,
							t: 0,
							tr: 0,
							sz: 0,
							ps: null,
							fillColorAnim: !1,
							strokeColorAnim: !1,
							strokeWidthAnim: !1,
							yOffset: 0,
							finalSize: 0,
							finalText: [],
							finalLineHeight: 0,
							__complete: !1
						}, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
					}
					extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
						this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
					}, SVGShapeElement.prototype.filterUniqueShapes = function() {
						var t, e, n, i, a = this.shapes.length,
							r = this.stylesList.length,
							s = [],
							o = !1;
						for (n = 0; n < r; n += 1) {
							for (i = this.stylesList[n], o = !1, s.length = 0, t = 0; t < a; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(i) && (s.push(e), o = e._isAnimated || o);
							s.length > 1 && o && this.setShapesAsAnimated(s)
						}
					}, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
						var e, n = t.length;
						for (e = 0; e < n; e += 1) t[e].setAsAnimated()
					}, SVGShapeElement.prototype.createStyleElement = function(t, e) {
						var n, i = new SVGStyleData(t, e),
							a = i.pElem;
						return "st" === t.ty ? n = new SVGStrokeStyleData(this, t, i) : "fl" === t.ty ? n = new SVGFillStyleData(this, t, i) : "gf" === t.ty || "gs" === t.ty ? (n = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, i), this.globalData.defs.appendChild(n.gf), n.maskId && (this.globalData.defs.appendChild(n.ms), this.globalData.defs.appendChild(n.of), a.setAttribute("mask", "url(" + getLocationHref() + "#" + n.maskId + ")"))) : "no" === t.ty && (n = new SVGNoStyleData(this, t, i)), "st" !== t.ty && "gs" !== t.ty || (a.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), a.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), a.setAttribute("fill-opacity", "0"), 1 === t.lj && a.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && a.setAttribute("fill-rule", "evenodd"), t.ln && a.setAttribute("id", t.ln), t.cl && a.setAttribute("class", t.cl), t.bm && (a.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, n), n
					}, SVGShapeElement.prototype.createGroupElement = function(t) {
						var e = new ShapeGroupData;
						return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
					}, SVGShapeElement.prototype.createTransformElement = function(t, e) {
						var n = TransformPropertyFactory.getTransformProperty(this, t, this),
							i = new SVGTransformData(n, n.o, e);
						return this.addToAnimatedContents(t, i), i
					}, SVGShapeElement.prototype.createShapeElement = function(t, e, n) {
						var i = 4;
						"rc" === t.ty ? i = 5 : "el" === t.ty ? i = 6 : "sr" === t.ty && (i = 7);
						var a = new SVGShapeData(e, n, ShapePropertyFactory.getShapeProp(this, t, i, this));
						return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a
					}, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
						for (var n = 0, i = this.animatedContents.length; n < i;) {
							if (this.animatedContents[n].element === e) return;
							n += 1
						}
						this.animatedContents.push({
							fn: SVGElementsRenderer.createRenderFunction(t),
							element: e,
							data: t
						})
					}, SVGShapeElement.prototype.setElementStyles = function(t) {
						var e, n = t.styles,
							i = this.stylesList.length;
						for (e = 0; e < i; e += 1) this.stylesList[e].closed || n.push(this.stylesList[e])
					}, SVGShapeElement.prototype.reloadShapes = function() {
						this._isFirstFrame = !0;
						var t, e = this.itemsData.length;
						for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
						for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
						this.renderModifiers()
					}, SVGShapeElement.prototype.searchShapes = function(t, e, n, i, a, r, s) {
						var o, l, c, u, f, h, d = [].concat(r),
							p = t.length - 1,
							m = [],
							g = [];
						for (o = p; o >= 0; o -= 1) {
							if ((h = this.searchProcessedElement(t[o])) ? e[o] = n[h - 1] : t[o]._render = s, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty) h ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], a), t[o]._render && e[o].style.pElem.parentNode !== i && i.appendChild(e[o].style.pElem), m.push(e[o].style);
							else if ("gr" === t[o].ty) {
								if (h)
									for (c = e[o].it.length, l = 0; l < c; l += 1) e[o].prevViewData[l] = e[o].it[l];
								else e[o] = this.createGroupElement(t[o]);
								this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, a + 1, d, s), t[o]._render && e[o].gr.parentNode !== i && i.appendChild(e[o].gr)
							} else "tr" === t[o].ty ? (h || (e[o] = this.createTransformElement(t[o], i)), u = e[o].transform, d.push(u)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (h || (e[o] = this.createShapeElement(t[o], d, a)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty || "zz" === t[o].ty || "op" === t[o].ty ? (h ? (f = e[o]).closed = !1 : ((f = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = f, this.shapeModifiers.push(f)), g.push(f)) : "rp" === t[o].ty && (h ? (f = e[o]).closed = !0 : (f = ShapeModifiers.getModifier(t[o].ty), e[o] = f, f.init(this, t, o, e), this.shapeModifiers.push(f), s = !1), g.push(f));
							this.addProcessedElement(t[o], o + 1)
						}
						for (p = m.length, o = 0; o < p; o += 1) m[o].closed = !0;
						for (p = g.length, o = 0; o < p; o += 1) g[o].closed = !0
					}, SVGShapeElement.prototype.renderInnerContent = function() {
						this.renderModifiers();
						var t, e = this.stylesList.length;
						for (t = 0; t < e; t += 1) this.stylesList[t].reset();
						for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
					}, SVGShapeElement.prototype.renderShape = function() {
						var t, e, n = this.animatedContents.length;
						for (t = 0; t < n; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
					}, SVGShapeElement.prototype.destroy = function() {
						this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
					}, LetterProps.prototype.update = function(t, e, n, i, a, r) {
						this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
						var s = !1;
						return this.o !== t && (this.o = t, this._mdf.o = !0, s = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, s = !0), this.sc !== n && (this.sc = n, this._mdf.sc = !0, s = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, s = !0), this.m !== a && (this.m = a, this._mdf.m = !0, s = !0), r.length && (this.p[0] !== r[0] || this.p[1] !== r[1] || this.p[4] !== r[4] || this.p[5] !== r[5] || this.p[12] !== r[12] || this.p[13] !== r[13]) && (this.p = r, this._mdf.p = !0, s = !0), s
					}, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
						return t
					}, TextProperty.prototype.setCurrentData = function(t) {
						t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
					}, TextProperty.prototype.searchProperty = function() {
						return this.searchKeyframes()
					}, TextProperty.prototype.searchKeyframes = function() {
						return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
					}, TextProperty.prototype.addEffect = function(t) {
						this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
					}, TextProperty.prototype.getValue = function(t) {
						if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
							this.currentData.t = this.data.d.k[this.keysIndex].s.t;
							var e = this.currentData,
								n = this.keysIndex;
							if (this.lock) this.setCurrentData(this.currentData);
							else {
								this.lock = !0, this._mdf = !1;
								var i, a = this.effectsSequence.length,
									r = t || this.data.d.k[this.keysIndex].s;
								for (i = 0; i < a; i += 1) r = n !== this.keysIndex ? this.effectsSequence[i](r, r.t) : this.effectsSequence[i](this.currentData, r.t);
								e !== r && this.setCurrentData(r), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
							}
						}
					}, TextProperty.prototype.getKeyframeValue = function() {
						for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, n = 0, i = t.length; n <= i - 1 && !(n === i - 1 || t[n + 1].t > e);) n += 1;
						return this.keysIndex !== n && (this.keysIndex = n), this.data.d.k[this.keysIndex].s
					}, TextProperty.prototype.buildFinalText = function(t) {
						for (var e, n, i = [], a = 0, r = t.length, s = !1, o = !1, l = ""; a < r;) s = o, o = !1, e = t.charCodeAt(a), l = t.charAt(a), FontManager.isCombinedCharacter(e) ? s = !0 : e >= 55296 && e <= 56319 ? FontManager.isRegionalFlag(t, a) ? l = t.substr(a, 14) : (n = t.charCodeAt(a + 1)) >= 56320 && n <= 57343 && (FontManager.isModifier(e, n) ? (l = t.substr(a, 2), s = !0) : l = FontManager.isFlagEmoji(t.substr(a, 4)) ? t.substr(a, 4) : t.substr(a, 2)) : e > 56319 ? (n = t.charCodeAt(a + 1), FontManager.isVariationSelector(e) && (s = !0)) : FontManager.isZeroWidthJoiner(e) && (s = !0, o = !0), s ? (i[i.length - 1] += l, s = !1) : i.push(l), a += l.length;
						return i
					}, TextProperty.prototype.completeTextData = function(t) {
						t.__complete = !0;
						var e, n, i, a, r, s, o, l = this.elem.globalData.fontManager,
							c = this.data,
							u = [],
							f = 0,
							h = c.m.g,
							d = 0,
							p = 0,
							m = 0,
							g = [],
							y = 0,
							v = 0,
							b = l.getFontByName(t.f),
							E = 0,
							T = getFontProperties(b);
						t.fWeight = T.weight, t.fStyle = T.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), n = t.finalText.length, t.finalLineHeight = t.lh;
						var _, I = t.tr / 1e3 * t.finalSize;
						if (t.sz)
							for (var x, A, S = !0, w = t.sz[0], O = t.sz[1]; S;) {
								x = 0, y = 0, n = (A = this.buildFinalText(t.t)).length, I = t.tr / 1e3 * t.finalSize;
								var C = -1;
								for (e = 0; e < n; e += 1) _ = A[e].charCodeAt(0), i = !1, " " === A[e] ? C = e : 13 !== _ && 3 !== _ || (y = 0, i = !0, x += t.finalLineHeight || 1.2 * t.finalSize), l.chars ? (o = l.getCharData(A[e], b.fStyle, b.fFamily), E = i ? 0 : o.w * t.finalSize / 100) : E = l.measureText(A[e], t.f, t.finalSize), y + E > w && " " !== A[e] ? (-1 === C ? n += 1 : e = C, x += t.finalLineHeight || 1.2 * t.finalSize, A.splice(e, C === e ? 1 : 0, "\r"), C = -1, y = 0) : (y += E, y += I);
								x += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && O < x ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = A, n = t.finalText.length, S = !1)
							}
						y = -I, E = 0;
						var P, M = 0;
						for (e = 0; e < n; e += 1)
							if (i = !1, 13 === (_ = (P = t.finalText[e]).charCodeAt(0)) || 3 === _ ? (M = 0, g.push(y), v = y > v ? y : v, y = -2 * I, a = "", i = !0, m += 1) : a = P, l.chars ? (o = l.getCharData(P, b.fStyle, l.getFontByName(t.f).fFamily), E = i ? 0 : o.w * t.finalSize / 100) : E = l.measureText(a, t.f, t.finalSize), " " === P ? M += E + I : (y += E + I + M, M = 0), u.push({
									l: E,
									an: E,
									add: d,
									n: i,
									anIndexes: [],
									val: a,
									line: m,
									animatorJustifyOffset: 0
								}), 2 == h) {
								if (d += E, "" === a || " " === a || e === n - 1) {
									for ("" !== a && " " !== a || (d -= E); p <= e;) u[p].an = d, u[p].ind = f, u[p].extra = E, p += 1;
									f += 1, d = 0
								}
							} else if (3 == h) {
							if (d += E, "" === a || e === n - 1) {
								for ("" === a && (d -= E); p <= e;) u[p].an = d, u[p].ind = f, u[p].extra = E, p += 1;
								d = 0, f += 1
							}
						} else u[f].ind = f, u[f].extra = 0, f += 1;
						if (t.l = u, v = y > v ? y : v, g.push(y), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
						else switch (t.boxWidth = v, t.j) {
							case 1:
								t.justifyOffset = -t.boxWidth;
								break;
							case 2:
								t.justifyOffset = -t.boxWidth / 2;
								break;
							default:
								t.justifyOffset = 0
						}
						t.lineWidths = g;
						var k, L, R, F, D = c.a;
						s = D.length;
						var N = [];
						for (r = 0; r < s; r += 1) {
							for ((k = D[r]).a.sc && (t.strokeColorAnim = !0), k.a.sw && (t.strokeWidthAnim = !0), (k.a.fc || k.a.fh || k.a.fs || k.a.fb) && (t.fillColorAnim = !0), F = 0, R = k.s.b, e = 0; e < n; e += 1)(L = u[e]).anIndexes[r] = F, (1 == R && "" !== L.val || 2 == R && "" !== L.val && " " !== L.val || 3 == R && (L.n || " " == L.val || e == n - 1) || 4 == R && (L.n || e == n - 1)) && (1 === k.s.rn && N.push(F), F += 1);
							c.a[r].s.totalChars = F;
							var V, B = -1;
							if (1 === k.s.rn)
								for (e = 0; e < n; e += 1) B != (L = u[e]).anIndexes[r] && (B = L.anIndexes[r], V = N.splice(Math.floor(Math.random() * N.length), 1)[0]), L.anIndexes[r] = V
						}
						t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100
					}, TextProperty.prototype.updateDocumentData = function(t, e) {
						e = void 0 === e ? this.keysIndex : e;
						var n = this.copyData({}, this.data.d.k[e].s);
						n = this.copyData(n, t), this.data.d.k[e].s = n, this.recalculate(e), this.setCurrentData(n), this.elem.addDynamicProperty(this)
					}, TextProperty.prototype.recalculate = function(t) {
						var e = this.data.d.k[t].s;
						e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
					}, TextProperty.prototype.canResizeFont = function(t) {
						this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
					}, TextProperty.prototype.setMinimumFontSize = function(t) {
						this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
					};
					var TextSelectorProp = function() {
						var t = Math.max,
							e = Math.min,
							n = Math.floor;

						function i(t, e) {
							this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
								k: 0
							}, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
								v: 100
							}, this.o = PropertyFactory.getProp(t, e.o || {
								k: 0
							}, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
								k: 0
							}, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
								k: 0
							}, 0, 0, this), this.sm = PropertyFactory.getProp(t, e.sm || {
								k: 100
							}, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
						}
						return i.prototype = {
							getMult: function(i) {
								this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
								var a = 0,
									r = 0,
									s = 1,
									o = 1;
								this.ne.v > 0 ? a = this.ne.v / 100 : r = -this.ne.v / 100, this.xe.v > 0 ? s = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
								var l = BezierFactory.getBezierEasing(a, r, s, o).get,
									c = 0,
									u = this.finalS,
									f = this.finalE,
									h = this.data.sh;
								if (2 === h) c = l(c = f === u ? i >= f ? 1 : 0 : t(0, e(.5 / (f - u) + (i - u) / (f - u), 1)));
								else if (3 === h) c = l(c = f === u ? i >= f ? 0 : 1 : 1 - t(0, e(.5 / (f - u) + (i - u) / (f - u), 1)));
								else if (4 === h) f === u ? c = 0 : (c = t(0, e(.5 / (f - u) + (i - u) / (f - u), 1))) < .5 ? c *= 2 : c = 1 - 2 * (c - .5), c = l(c);
								else if (5 === h) {
									if (f === u) c = 0;
									else {
										var d = f - u,
											p = -d / 2 + (i = e(t(0, i + .5 - u), f - u)),
											m = d / 2;
										c = Math.sqrt(1 - p * p / (m * m))
									}
									c = l(c)
								} else 6 === h ? c = l(c = f === u ? 0 : (1 + Math.cos(Math.PI + 2 * Math.PI * (i = e(t(0, i + .5 - u), f - u)) / (f - u))) / 2) : (i >= n(u) && (c = t(0, e(i - u < 0 ? e(f, 1) - (u - i) : f - i, 1))), c = l(c));
								if (100 !== this.sm.v) {
									var g = .01 * this.sm.v;
									0 === g && (g = 1e-8);
									var y = .5 - .5 * g;
									c < y ? c = 0 : (c = (c - y) / g) > 1 && (c = 1)
								}
								return c * this.a.v
							},
							getValue: function(t) {
								this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
								var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
									n = this.o.v / e,
									i = this.s.v / e + n,
									a = this.e.v / e + n;
								if (i > a) {
									var r = i;
									i = a, a = r
								}
								this.finalS = i, this.finalE = a
							}
						}, extendPrototype([DynamicPropertyContainer], i), {
							getTextSelectorProp: function(t, e, n) {
								return new i(t, e, n)
							}
						}
					}();

					function TextAnimatorDataProperty(t, e, n) {
						var i = {
								propType: !1
							},
							a = PropertyFactory.getProp,
							r = e.a;
						this.a = {
							r: r.r ? a(t, r.r, 0, degToRads, n) : i,
							rx: r.rx ? a(t, r.rx, 0, degToRads, n) : i,
							ry: r.ry ? a(t, r.ry, 0, degToRads, n) : i,
							sk: r.sk ? a(t, r.sk, 0, degToRads, n) : i,
							sa: r.sa ? a(t, r.sa, 0, degToRads, n) : i,
							s: r.s ? a(t, r.s, 1, .01, n) : i,
							a: r.a ? a(t, r.a, 1, 0, n) : i,
							o: r.o ? a(t, r.o, 0, .01, n) : i,
							p: r.p ? a(t, r.p, 1, 0, n) : i,
							sw: r.sw ? a(t, r.sw, 0, 0, n) : i,
							sc: r.sc ? a(t, r.sc, 1, 0, n) : i,
							fc: r.fc ? a(t, r.fc, 1, 0, n) : i,
							fh: r.fh ? a(t, r.fh, 0, 0, n) : i,
							fs: r.fs ? a(t, r.fs, 0, .01, n) : i,
							fb: r.fb ? a(t, r.fb, 0, .01, n) : i,
							t: r.t ? a(t, r.t, 0, 0, n) : i
						}, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, n), this.s.t = e.s.t
					}

					function TextAnimatorProperty(t, e, n) {
						this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = n, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
							alignment: {}
						}, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(n)
					}

					function ITextElement() {}
					TextAnimatorProperty.prototype.searchProperties = function() {
						var t, e, n = this._textData.a.length,
							i = PropertyFactory.getProp;
						for (t = 0; t < n; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
						this._textData.p && "m" in this._textData.p ? (this._pathData = {
							a: i(this._elem, this._textData.p.a, 0, 0, this),
							f: i(this._elem, this._textData.p.f, 0, 0, this),
							l: i(this._elem, this._textData.p.l, 0, 0, this),
							r: i(this._elem, this._textData.p.r, 0, 0, this),
							p: i(this._elem, this._textData.p.p, 0, 0, this),
							m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
						}, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
					}, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
						if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
							this._isFirstFrame = !1;
							var n, i, a, r, s, o, l, c, u, f, h, d, p, m, g, y, v, b, E, T = this._moreOptions.alignment.v,
								_ = this._animatorsData,
								I = this._textData,
								x = this.mHelper,
								A = this._renderType,
								S = this.renderedLetters.length,
								w = t.l;
							if (this._hasMaskedPath) {
								if (E = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
									var O, C = E.v;
									for (this._pathData.r.v && (C = C.reverse()), s = {
											tLength: 0,
											segments: []
										}, r = C._length - 1, y = 0, a = 0; a < r; a += 1) O = bez.buildBezierData(C.v[a], C.v[a + 1], [C.o[a][0] - C.v[a][0], C.o[a][1] - C.v[a][1]], [C.i[a + 1][0] - C.v[a + 1][0], C.i[a + 1][1] - C.v[a + 1][1]]), s.tLength += O.segmentLength, s.segments.push(O), y += O.segmentLength;
									a = r, E.v.c && (O = bez.buildBezierData(C.v[a], C.v[0], [C.o[a][0] - C.v[a][0], C.o[a][1] - C.v[a][1]], [C.i[0][0] - C.v[0][0], C.i[0][1] - C.v[0][1]]), s.tLength += O.segmentLength, s.segments.push(O), y += O.segmentLength), this._pathData.pi = s
								}
								if (s = this._pathData.pi, o = this._pathData.f.v, h = 0, f = 1, c = 0, u = !0, m = s.segments, o < 0 && E.v.c)
									for (s.tLength < Math.abs(o) && (o = -Math.abs(o) % s.tLength), f = (p = m[h = m.length - 1].points).length - 1; o < 0;) o += p[f].partialLength, (f -= 1) < 0 && (f = (p = m[h -= 1].points).length - 1);
								d = (p = m[h].points)[f - 1], g = (l = p[f]).partialLength
							}
							r = w.length, n = 0, i = 0;
							var P, M, k, L, R, F = 1.2 * t.finalSize * .714,
								D = !0;
							k = _.length;
							var N, V, B, U, G, j, z, X, W, Y, H, q, Q = -1,
								K = o,
								Z = h,
								J = f,
								tt = -1,
								te = "",
								tn = this.defaultPropsArray;
							if (2 === t.j || 1 === t.j) {
								var ti = 0,
									ta = 0,
									tr = 2 === t.j ? -.5 : -1,
									ts = 0,
									to = !0;
								for (a = 0; a < r; a += 1)
									if (w[a].n) {
										for (ti && (ti += ta); ts < a;) w[ts].animatorJustifyOffset = ti, ts += 1;
										ti = 0, to = !0
									} else {
										for (M = 0; M < k; M += 1)(P = _[M].a).t.propType && (to && 2 === t.j && (ta += P.t.v * tr), (R = _[M].s.getMult(w[a].anIndexes[M], I.a[M].s.totalChars)).length ? ti += P.t.v * R[0] * tr : ti += P.t.v * R * tr);
										to = !1
									} for (ti && (ti += ta); ts < a;) w[ts].animatorJustifyOffset = ti, ts += 1
							}
							for (a = 0; a < r; a += 1) {
								if (x.reset(), U = 1, w[a].n) n = 0, i += t.yOffset, i += D ? 1 : 0, o = K, D = !1, this._hasMaskedPath && (f = J, d = (p = m[h = Z].points)[f - 1], g = (l = p[f]).partialLength, c = 0), te = "", H = "", W = "", q = "", tn = this.defaultPropsArray;
								else {
									if (this._hasMaskedPath) {
										if (tt !== w[a].line) {
											switch (t.j) {
												case 1:
													o += y - t.lineWidths[w[a].line];
													break;
												case 2:
													o += (y - t.lineWidths[w[a].line]) / 2
											}
											tt = w[a].line
										}
										Q !== w[a].ind && (w[Q] && (o += w[Q].extra), o += w[a].an / 2, Q = w[a].ind), o += T[0] * w[a].an * .005;
										var tl = 0;
										for (M = 0; M < k; M += 1)(P = _[M].a).p.propType && ((R = _[M].s.getMult(w[a].anIndexes[M], I.a[M].s.totalChars)).length ? tl += P.p.v[0] * R[0] : tl += P.p.v[0] * R), P.a.propType && ((R = _[M].s.getMult(w[a].anIndexes[M], I.a[M].s.totalChars)).length ? tl += P.a.v[0] * R[0] : tl += P.a.v[0] * R);
										for (u = !0, this._pathData.a.v && (o = .5 * w[0].an + (y - this._pathData.f.v - .5 * w[0].an - .5 * w[w.length - 1].an) * Q / (r - 1) + this._pathData.f.v); u;) c + g >= o + tl || !p ? (v = (o + tl - c) / l.partialLength, V = d.point[0] + (l.point[0] - d.point[0]) * v, B = d.point[1] + (l.point[1] - d.point[1]) * v, x.translate(-T[0] * w[a].an * .005, -T[1] * F * .01), u = !1) : p && (c += l.partialLength, (f += 1) >= p.length && (f = 0, m[h += 1] ? p = m[h].points : E.v.c ? (f = 0, p = m[h = 0].points) : (c -= l.partialLength, p = null)), p && (d = l, g = (l = p[f]).partialLength));
										N = w[a].an / 2 - w[a].add, x.translate(-N, 0, 0)
									} else N = w[a].an / 2 - w[a].add, x.translate(-N, 0, 0), x.translate(-T[0] * w[a].an * .005, -T[1] * F * .01, 0);
									for (M = 0; M < k; M += 1)(P = _[M].a).t.propType && (R = _[M].s.getMult(w[a].anIndexes[M], I.a[M].s.totalChars), 0 === n && 0 === t.j || (this._hasMaskedPath ? R.length ? o += P.t.v * R[0] : o += P.t.v * R : R.length ? n += P.t.v * R[0] : n += P.t.v * R));
									for (t.strokeWidthAnim && (j = t.sw || 0), t.strokeColorAnim && (G = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (z = [t.fc[0], t.fc[1], t.fc[2]]), M = 0; M < k; M += 1)(P = _[M].a).a.propType && ((R = _[M].s.getMult(w[a].anIndexes[M], I.a[M].s.totalChars)).length ? x.translate(-P.a.v[0] * R[0], -P.a.v[1] * R[1], P.a.v[2] * R[2]) : x.translate(-P.a.v[0] * R, -P.a.v[1] * R, P.a.v[2] * R));
									for (M = 0; M < k; M += 1)(P = _[M].a).s.propType && ((R = _[M].s.getMult(w[a].anIndexes[M], I.a[M].s.totalChars)).length ? x.scale(1 + (P.s.v[0] - 1) * R[0], 1 + (P.s.v[1] - 1) * R[1], 1) : x.scale(1 + (P.s.v[0] - 1) * R, 1 + (P.s.v[1] - 1) * R, 1));
									for (M = 0; M < k; M += 1) {
										if (P = _[M].a, R = _[M].s.getMult(w[a].anIndexes[M], I.a[M].s.totalChars), P.sk.propType && (R.length ? x.skewFromAxis(-P.sk.v * R[0], P.sa.v * R[1]) : x.skewFromAxis(-P.sk.v * R, P.sa.v * R)), P.r.propType && (R.length ? x.rotateZ(-P.r.v * R[2]) : x.rotateZ(-P.r.v * R)), P.ry.propType && (R.length ? x.rotateY(P.ry.v * R[1]) : x.rotateY(P.ry.v * R)), P.rx.propType && (R.length ? x.rotateX(P.rx.v * R[0]) : x.rotateX(P.rx.v * R)), P.o.propType && (R.length ? U += (P.o.v * R[0] - U) * R[0] : U += (P.o.v * R - U) * R), t.strokeWidthAnim && P.sw.propType && (R.length ? j += P.sw.v * R[0] : j += P.sw.v * R), t.strokeColorAnim && P.sc.propType)
											for (X = 0; X < 3; X += 1) R.length ? G[X] += (P.sc.v[X] - G[X]) * R[0] : G[X] += (P.sc.v[X] - G[X]) * R;
										if (t.fillColorAnim && t.fc) {
											if (P.fc.propType)
												for (X = 0; X < 3; X += 1) R.length ? z[X] += (P.fc.v[X] - z[X]) * R[0] : z[X] += (P.fc.v[X] - z[X]) * R;
											P.fh.propType && (z = R.length ? addHueToRGB(z, P.fh.v * R[0]) : addHueToRGB(z, P.fh.v * R)), P.fs.propType && (z = R.length ? addSaturationToRGB(z, P.fs.v * R[0]) : addSaturationToRGB(z, P.fs.v * R)), P.fb.propType && (z = R.length ? addBrightnessToRGB(z, P.fb.v * R[0]) : addBrightnessToRGB(z, P.fb.v * R))
										}
									}
									for (M = 0; M < k; M += 1)(P = _[M].a).p.propType && (R = _[M].s.getMult(w[a].anIndexes[M], I.a[M].s.totalChars), this._hasMaskedPath ? R.length ? x.translate(0, P.p.v[1] * R[0], -P.p.v[2] * R[1]) : x.translate(0, P.p.v[1] * R, -P.p.v[2] * R) : R.length ? x.translate(P.p.v[0] * R[0], P.p.v[1] * R[1], -P.p.v[2] * R[2]) : x.translate(P.p.v[0] * R, P.p.v[1] * R, -P.p.v[2] * R));
									if (t.strokeWidthAnim && (W = j < 0 ? 0 : j), t.strokeColorAnim && (Y = "rgb(" + Math.round(255 * G[0]) + "," + Math.round(255 * G[1]) + "," + Math.round(255 * G[2]) + ")"), t.fillColorAnim && t.fc && (H = "rgb(" + Math.round(255 * z[0]) + "," + Math.round(255 * z[1]) + "," + Math.round(255 * z[2]) + ")"), this._hasMaskedPath) {
										if (x.translate(0, -t.ls), x.translate(0, T[1] * F * .01 + i, 0), this._pathData.p.v) {
											var tc = 180 * Math.atan(b = (l.point[1] - d.point[1]) / (l.point[0] - d.point[0])) / Math.PI;
											l.point[0] < d.point[0] && (tc += 180), x.rotate(-tc * Math.PI / 180)
										}
										x.translate(V, B, 0), o -= T[0] * w[a].an * .005, w[a + 1] && Q !== w[a + 1].ind && (o += w[a].an / 2, o += .001 * t.tr * t.finalSize)
									} else {
										switch (x.translate(n, i, 0), t.ps && x.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
											case 1:
												x.translate(w[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[w[a].line]), 0, 0);
												break;
											case 2:
												x.translate(w[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[w[a].line]) / 2, 0, 0)
										}
										x.translate(0, -t.ls), x.translate(N, 0, 0), x.translate(T[0] * w[a].an * .005, T[1] * F * .01, 0), n += w[a].l + .001 * t.tr * t.finalSize
									}
									"html" === A ? te = x.toCSS() : "svg" === A ? te = x.to2dCSS() : tn = [x.props[0], x.props[1], x.props[2], x.props[3], x.props[4], x.props[5], x.props[6], x.props[7], x.props[8], x.props[9], x.props[10], x.props[11], x.props[12], x.props[13], x.props[14], x.props[15]], q = U
								}
								S <= a ? (L = new LetterProps(q, W, Y, H, te, tn), this.renderedLetters.push(L), S += 1, this.lettersChangedFlag = !0) : (L = this.renderedLetters[a], this.lettersChangedFlag = L.update(q, W, Y, H, te, tn) || this.lettersChangedFlag)
							}
						}
					}, TextAnimatorProperty.prototype.getValue = function() {
						this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
					}, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(t, e, n) {
						this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, n), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, n), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
					}, ITextElement.prototype.prepareFrame = function(t) {
						this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
					}, ITextElement.prototype.createPathShape = function(t, e) {
						var n, i, a = e.length,
							r = "";
						for (n = 0; n < a; n += 1) "sh" === e[n].ty && (r += buildShapeString(i = e[n].ks.k, i.i.length, !0, t));
						return r
					}, ITextElement.prototype.updateDocumentData = function(t, e) {
						this.textProperty.updateDocumentData(t, e)
					}, ITextElement.prototype.canResizeFont = function(t) {
						this.textProperty.canResizeFont(t)
					}, ITextElement.prototype.setMinimumFontSize = function(t) {
						this.textProperty.setMinimumFontSize(t)
					}, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, n, i, a) {
						switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
							case 1:
								e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[n]), 0, 0);
								break;
							case 2:
								e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[n]) / 2, 0, 0)
						}
						e.translate(i, a, 0)
					}, ITextElement.prototype.buildColor = function(t) {
						return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
					}, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, ITextElement.prototype.validateText = function() {
						(this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
					};
					var emptyShapeData = {
						shapes: []
					};

					function SVGTextLottieElement(t, e, n) {
						this.textSpans = [], this.renderType = "svg", this.initElement(t, e, n)
					}

					function ISolidElement(t, e, n) {
						this.initElement(t, e, n)
					}

					function NullElement(t, e, n) {
						this.initFrame(), this.initBaseData(t, e, n), this.initFrame(), this.initTransform(t, e, n), this.initHierarchy()
					}

					function SVGRendererBase() {}

					function ICompElement() {}

					function SVGCompElement(t, e, n) {
						this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, n), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
							_placeholder: !0
						}
					}

					function SVGRenderer(t, e) {
						this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
						var n = "";
						if (e && e.title) {
							var i = createNS("title"),
								a = createElementID();
							i.setAttribute("id", a), i.textContent = e.title, this.svgElement.appendChild(i), n += a
						}
						if (e && e.description) {
							var r = createNS("desc"),
								s = createElementID();
							r.setAttribute("id", s), r.textContent = e.description, this.svgElement.appendChild(r), n += " " + s
						}
						n && this.svgElement.setAttribute("aria-labelledby", n);
						var o = createNS("defs");
						this.svgElement.appendChild(o);
						var l = createNS("g");
						this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
							preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
							imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
							contentVisibility: e && e.contentVisibility || "visible",
							progressiveLoad: e && e.progressiveLoad || !1,
							hideOnTransparent: !(e && !1 === e.hideOnTransparent),
							viewBoxOnly: e && e.viewBoxOnly || !1,
							viewBoxSize: e && e.viewBoxSize || !1,
							className: e && e.className || "",
							id: e && e.id || "",
							focusable: e && e.focusable,
							filterSize: {
								width: e && e.filterSize && e.filterSize.width || "100%",
								height: e && e.filterSize && e.filterSize.height || "100%",
								x: e && e.filterSize && e.filterSize.x || "0%",
								y: e && e.filterSize && e.filterSize.y || "0%"
							},
							width: e && e.width,
							height: e && e.height,
							runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
						}, this.globalData = {
							_mdf: !1,
							frameNum: -1,
							defs: o,
							renderConfig: this.renderConfig
						}, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
					}

					function ShapeTransformManager() {
						this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
					}
					extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
						this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
					}, SVGTextLottieElement.prototype.buildTextContents = function(t) {
						for (var e = 0, n = t.length, i = [], a = ""; e < n;) "\r" === t[e] || "\x03" === t[e] ? (i.push(a), a = "") : a += t[e], e += 1;
						return i.push(a), i
					}, SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
						if (t.shapes && t.shapes.length) {
							var n = t.shapes[0];
							if (n.it) {
								var i = n.it[n.it.length - 1];
								i.s && (i.s.k[0] = e, i.s.k[1] = e)
							}
						}
						return t
					}, SVGTextLottieElement.prototype.buildNewText = function() {
						this.addDynamicProperty(this);
						var t = this.textProperty.currentData;
						this.renderedLetters = createSizedArray(t ? t.l.length : 0), t.fc ? this.layerElement.setAttribute("fill", this.buildColor(t.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), t.sc && (this.layerElement.setAttribute("stroke", this.buildColor(t.sc)), this.layerElement.setAttribute("stroke-width", t.sw)), this.layerElement.setAttribute("font-size", t.finalSize);
						var e = this.globalData.fontManager.getFontByName(t.f);
						if (e.fClass) this.layerElement.setAttribute("class", e.fClass);
						else {
							this.layerElement.setAttribute("font-family", e.fFamily);
							var n = t.fWeight,
								i = t.fStyle;
							this.layerElement.setAttribute("font-style", i), this.layerElement.setAttribute("font-weight", n)
						}
						this.layerElement.setAttribute("aria-label", t.t);
						var a, r, s, o = t.l || [],
							l = !!this.globalData.fontManager.chars;
						r = o.length;
						var c = this.mHelper,
							u = this.data.singleShape,
							f = 0,
							h = 0,
							d = !0,
							p = .001 * t.tr * t.finalSize;
						if (!u || l || t.sz) {
							var m, g = this.textSpans.length;
							for (a = 0; a < r; a += 1) {
								if (this.textSpans[a] || (this.textSpans[a] = {
										span: null,
										childSpan: null,
										glyph: null
									}), !l || !u || 0 === a) {
									if (s = g > a ? this.textSpans[a].span : createNS(l ? "g" : "text"), g <= a) {
										if (s.setAttribute("stroke-linecap", "butt"), s.setAttribute("stroke-linejoin", "round"), s.setAttribute("stroke-miterlimit", "4"), this.textSpans[a].span = s, l) {
											var y, v = createNS("g");
											s.appendChild(v), this.textSpans[a].childSpan = v
										}
										this.textSpans[a].span = s, this.layerElement.appendChild(s)
									}
									s.style.display = "inherit"
								}
								if (c.reset(), u && (o[a].n && (f = -p, h += t.yOffset, h += d ? 1 : 0, d = !1), this.applyTextPropertiesToMatrix(t, c, o[a].line, f, h), f += o[a].l || 0, f += p), l) {
									if (1 === (m = this.globalData.fontManager.getCharData(t.finalText[a], e.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)).t) y = new SVGCompElement(m.data, this.globalData, this);
									else {
										var b = emptyShapeData;
										m.data && m.data.shapes && (b = this.buildShapeData(m.data, t.finalSize)), y = new SVGShapeElement(b, this.globalData, this)
									}
									if (this.textSpans[a].glyph) {
										var E = this.textSpans[a].glyph;
										this.textSpans[a].childSpan.removeChild(E.layerElement), E.destroy()
									}
									this.textSpans[a].glyph = y, y._debug = !0, y.prepareFrame(0), y.renderFrame(), this.textSpans[a].childSpan.appendChild(y.layerElement), 1 === m.t && this.textSpans[a].childSpan.setAttribute("transform", "scale(" + t.finalSize / 100 + "," + t.finalSize / 100 + ")")
								} else u && s.setAttribute("transform", "translate(" + c.props[12] + "," + c.props[13] + ")"), s.textContent = o[a].val, s.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
							}
							u && s && s.setAttribute("d", "")
						} else {
							var T = this.textContainer,
								_ = "start";
							switch (t.j) {
								case 1:
									_ = "end";
									break;
								case 2:
									_ = "middle";
									break;
								default:
									_ = "start"
							}
							T.setAttribute("text-anchor", _), T.setAttribute("letter-spacing", p);
							var I = this.buildTextContents(t.finalText);
							for (r = I.length, h = t.ps ? t.ps[1] + t.ascent : 0, a = 0; a < r; a += 1)(s = this.textSpans[a].span || createNS("tspan")).textContent = I[a], s.setAttribute("x", 0), s.setAttribute("y", h), s.style.display = "inherit", T.appendChild(s), this.textSpans[a] || (this.textSpans[a] = {
								span: null,
								glyph: null
							}), this.textSpans[a].span = s, h += t.finalLineHeight;
							this.layerElement.appendChild(T)
						}
						for (; a < this.textSpans.length;) this.textSpans[a].span.style.display = "none", a += 1;
						this._sizeChanged = !0
					}, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
						if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
							this._sizeChanged = !1;
							var t = this.layerElement.getBBox();
							this.bbox = {
								top: t.y,
								left: t.x,
								width: t.width,
								height: t.height
							}
						}
						return this.bbox
					}, SVGTextLottieElement.prototype.getValue = function() {
						var t, e, n = this.textSpans.length;
						for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < n; t += 1)(e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = !0))
					}, SVGTextLottieElement.prototype.renderInnerContent = function() {
						if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
							this._sizeChanged = !0;
							var t, e, n, i, a, r = this.textAnimator.renderedLetters,
								s = this.textProperty.currentData.l;
							for (e = s.length, t = 0; t < e; t += 1) s[t].n || (n = r[t], i = this.textSpans[t].span, (a = this.textSpans[t].glyph) && a.renderFrame(), n._mdf.m && i.setAttribute("transform", n.m), n._mdf.o && i.setAttribute("opacity", n.o), n._mdf.sw && i.setAttribute("stroke-width", n.sw), n._mdf.sc && i.setAttribute("stroke", n.sc), n._mdf.fc && i.setAttribute("fill", n.fc))
						}
					}, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
						var t = createNS("rect");
						t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
					}, NullElement.prototype.prepareFrame = function(t) {
						this.prepareProperties(t, !0)
					}, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
						return null
					}, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(t) {
						return new NullElement(t, this.globalData, this)
					}, SVGRendererBase.prototype.createShape = function(t) {
						return new SVGShapeElement(t, this.globalData, this)
					}, SVGRendererBase.prototype.createText = function(t) {
						return new SVGTextLottieElement(t, this.globalData, this)
					}, SVGRendererBase.prototype.createImage = function(t) {
						return new IImageElement(t, this.globalData, this)
					}, SVGRendererBase.prototype.createSolid = function(t) {
						return new ISolidElement(t, this.globalData, this)
					}, SVGRendererBase.prototype.configAnimation = function(t) {
						this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
						var e = this.globalData.defs;
						this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
						var n = createNS("clipPath"),
							i = createNS("rect");
						i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
						var a = createElementID();
						n.setAttribute("id", a), n.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")"), e.appendChild(n), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
					}, SVGRendererBase.prototype.destroy = function() {
						this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
						var t, e = this.layers ? this.layers.length : 0;
						for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
						this.elements.length = 0, this.destroyed = !0, this.animationItem = null
					}, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(t) {
						var e = 0,
							n = this.layers.length;
						for (e = 0; e < n; e += 1)
							if (this.layers[e].ind === t) return e;
						return -1
					}, SVGRendererBase.prototype.buildItem = function(t) {
						var e = this.elements;
						if (!e[t] && 99 !== this.layers[t].ty) {
							e[t] = !0;
							var n = this.createItem(this.layers[t]);
							if (e[t] = n, getExpressionsPlugin() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(n), n.initExpressions()), this.appendElementInPos(n, t), this.layers[t].tt) {
								var i = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
								if (-1 === i) return;
								if (this.elements[i] && !0 !== this.elements[i]) {
									var a = e[i].getMatte(this.layers[t].tt);
									n.setMatte(a)
								} else this.buildItem(i), this.addPendingElement(n)
							}
						}
					}, SVGRendererBase.prototype.checkPendingElements = function() {
						for (; this.pendingElements.length;) {
							var t = this.pendingElements.pop();
							if (t.checkParenting(), t.data.tt)
								for (var e = 0, n = this.elements.length; e < n;) {
									if (this.elements[e] === t) {
										var i = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
											a = this.elements[i].getMatte(this.layers[e].tt);
										t.setMatte(a);
										break
									}
									e += 1
								}
						}
					}, SVGRendererBase.prototype.renderFrame = function(t) {
						if (this.renderedFrame !== t && !this.destroyed) {
							null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
							var e, n = this.layers.length;
							for (this.completeLayers || this.checkLayers(t), e = n - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
							if (this.globalData._mdf)
								for (e = 0; e < n; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
						}
					}, SVGRendererBase.prototype.appendElementInPos = function(t, e) {
						var n = t.getBaseElement();
						if (n) {
							for (var i, a = 0; a < e;) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement() && (i = this.elements[a].getBaseElement()), a += 1;
							i ? this.layerElement.insertBefore(n, i) : this.layerElement.appendChild(n)
						}
					}, SVGRendererBase.prototype.hide = function() {
						this.layerElement.style.display = "none"
					}, SVGRendererBase.prototype.show = function() {
						this.layerElement.style.display = "block"
					}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, n) {
						this.initFrame(), this.initBaseData(t, e, n), this.initTransform(t, e, n), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
					}, ICompElement.prototype.prepareFrame = function(t) {
						if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
							if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
							else {
								var e = this.tm.v;
								e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
							}
							var n, i = this.elements.length;
							for (this.completeLayers || this.checkLayers(this.renderedFrame), n = i - 1; n >= 0; n -= 1)(this.completeLayers || this.elements[n]) && (this.elements[n].prepareFrame(this.renderedFrame - this.layers[n].st), this.elements[n]._mdf && (this._mdf = !0))
						}
					}, ICompElement.prototype.renderInnerContent = function() {
						var t, e = this.layers.length;
						for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
					}, ICompElement.prototype.setElements = function(t) {
						this.elements = t
					}, ICompElement.prototype.getElements = function() {
						return this.elements
					}, ICompElement.prototype.destroyElements = function() {
						var t, e = this.layers.length;
						for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
					}, ICompElement.prototype.destroy = function() {
						this.destroyElements(), this.destroyBaseElement()
					}, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(t) {
						return new SVGCompElement(t, this.globalData, this)
					}, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
						return new SVGCompElement(t, this.globalData, this)
					}, ShapeTransformManager.prototype = {
						addTransformSequence: function(t) {
							var e, n = t.length,
								i = "_";
							for (e = 0; e < n; e += 1) i += t[e].transform.key + "_";
							var a = this.sequences[i];
							return a || (a = {
								transforms: [].concat(t),
								finalTransform: new Matrix,
								_mdf: !1
							}, this.sequences[i] = a, this.sequenceList.push(a)), a
						},
						processSequence: function(t, e) {
							for (var n = 0, i = t.transforms.length, a = e; n < i && !e;) {
								if (t.transforms[n].transform.mProps._mdf) {
									a = !0;
									break
								}
								n += 1
							}
							if (a)
								for (t.finalTransform.reset(), n = i - 1; n >= 0; n -= 1) t.finalTransform.multiply(t.transforms[n].transform.mProps.v);
							t._mdf = a
						},
						processSequences: function(t) {
							var e, n = this.sequenceList.length;
							for (e = 0; e < n; e += 1) this.processSequence(this.sequenceList[e], t)
						},
						getNewKey: function() {
							return this.transform_key_count += 1, "_" + this.transform_key_count
						}
					};
					var lumaLoader = function() {
						var t = "__lottie_element_luma_buffer",
							e = null,
							n = null,
							i = null;

						function a() {
							var a, r, s;
							e || (a = createNS("svg"), r = createNS("filter"), s = createNS("feColorMatrix"), r.setAttribute("id", t), s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), r.appendChild(s), a.appendChild(r), a.setAttribute("id", t + "_svg"), featureSupport.svgLumaHidden && (a.style.display = "none"), i = a, document.body.appendChild(i), (n = (e = createTag("canvas")).getContext("2d")).filter = "url(#" + t + ")", n.fillStyle = "rgba(0,0,0,0)", n.fillRect(0, 0, 1, 1))
						}
						return {
							load: a,
							get: function(i) {
								return e || a(), e.width = i.width, e.height = i.height, n.filter = "url(#" + t + ")", e
							}
						}
					};

					function createCanvas(t, e) {
						if (featureSupport.offscreenCanvas) return new OffscreenCanvas(t, e);
						var n = createTag("canvas");
						return n.width = t, n.height = e, n
					}
					var assetLoader = {
							loadLumaCanvas: lumaLoader.load,
							getLumaCanvas: lumaLoader.get,
							createCanvas: createCanvas
						},
						registeredEffects = {};

					function CVEffects(t) {
						var e, n, i = t.data.ef ? t.data.ef.length : 0;
						for (this.filters = [], e = 0; e < i; e += 1) {
							n = null;
							var a = t.data.ef[e].ty;
							registeredEffects[a] && (n = new registeredEffects[a].effect(t.effectsManager.effectElements[e], t)), n && this.filters.push(n)
						}
						this.filters.length && t.addRenderableComponent(this)
					}

					function registerEffect(t, e) {
						registeredEffects[t] = {
							effect: e
						}
					}

					function CVMaskElement(t, e) {
						this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
						var n, i = this.masksProperties.length,
							a = !1;
						for (n = 0; n < i; n += 1) "n" !== this.masksProperties[n].mode && (a = !0), this.viewData[n] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[n], 3);
						this.hasMasks = a, a && this.element.addRenderableComponent(this)
					}

					function CVBaseElement() {}
					CVEffects.prototype.renderFrame = function(t) {
						var e, n = this.filters.length;
						for (e = 0; e < n; e += 1) this.filters[e].renderFrame(t)
					}, CVEffects.prototype.getEffects = function(t) {
						var e, n = this.filters.length,
							i = [];
						for (e = 0; e < n; e += 1) this.filters[e].type === t && i.push(this.filters[e]);
						return i
					}, CVMaskElement.prototype.renderFrame = function() {
						if (this.hasMasks) {
							var t, e, n, i, a = this.element.finalTransform.mat,
								r = this.element.canvasContext,
								s = this.masksProperties.length;
							for (r.beginPath(), t = 0; t < s; t += 1)
								if ("n" !== this.masksProperties[t].mode) {
									this.masksProperties[t].inv && (r.moveTo(0, 0), r.lineTo(this.element.globalData.compSize.w, 0), r.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), r.lineTo(0, this.element.globalData.compSize.h), r.lineTo(0, 0)), i = this.viewData[t].v, e = a.applyToPointArray(i.v[0][0], i.v[0][1], 0), r.moveTo(e[0], e[1]);
									var o, l = i._length;
									for (o = 1; o < l; o += 1) n = a.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]), r.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
									n = a.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]), r.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5])
								} this.element.globalData.renderer.save(!0), r.clip()
						}
					}, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
						this.element = null
					};
					var operationsMap = {
						1: "source-in",
						2: "source-out",
						3: "source-in",
						4: "source-out"
					};

					function CVShapeData(t, e, n, i) {
						this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
						var a, r = 4;
						"rc" === e.ty ? r = 5 : "el" === e.ty ? r = 6 : "sr" === e.ty && (r = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, r, t);
						var s, o = n.length;
						for (a = 0; a < o; a += 1) n[a].closed || (s = {
							transforms: i.addTransformSequence(n[a].transforms),
							trNodes: []
						}, this.styledShapes.push(s), n[a].elements.push(s))
					}

					function CVShapeElement(t, e, n) {
						this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, n)
					}

					function CVTextElement(t, e, n) {
						this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
							fill: "rgba(0,0,0,0)",
							stroke: "rgba(0,0,0,0)",
							sWidth: 0,
							fValue: ""
						}, this.initElement(t, e, n)
					}

					function CVImageElement(t, e, n) {
						this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, n)
					}

					function CVSolidElement(t, e, n) {
						this.initElement(t, e, n)
					}

					function CanvasRendererBase() {}

					function CanvasContext() {
						this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random()
					}

					function CVContextData() {
						var t;
						for (this.stack = [], this.cArrPos = 0, this.cTr = new Matrix, t = 0; t < 15; t += 1) {
							var e = new CanvasContext;
							this.stack[t] = e
						}
						this._length = 15, this.nativeContext = null, this.transformMat = new Matrix, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = ""
					}

					function CVCompElement(t, e, n) {
						this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, n), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
							_placeholder: !0
						}
					}

					function CanvasRenderer(t, e) {
						this.animationItem = t, this.renderConfig = {
							clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
							context: e && e.context || null,
							progressiveLoad: e && e.progressiveLoad || !1,
							preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
							imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
							contentVisibility: e && e.contentVisibility || "visible",
							className: e && e.className || "",
							id: e && e.id || "",
							runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
						}, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
							frameNum: -1,
							_mdf: !1,
							renderConfig: this.renderConfig,
							currentGlobalAlpha: -1
						}, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
					}

					function HBaseElement() {}

					function HSolidElement(t, e, n) {
						this.initElement(t, e, n)
					}

					function HShapeElement(t, e, n) {
						this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, n), this.prevViewData = [], this.currentBBox = {
							x: 999999,
							y: -999999,
							h: 0,
							w: 0
						}
					}

					function HTextElement(t, e, n) {
						this.textSpans = [], this.textPaths = [], this.currentBBox = {
							x: 999999,
							y: -999999,
							h: 0,
							w: 0
						}, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, n)
					}

					function HCameraElement(t, e, n) {
						this.initFrame(), this.initBaseData(t, e, n), this.initHierarchy();
						var i = PropertyFactory.getProp;
						if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
							var a, r = t.ks.or.k.length;
							for (a = 0; a < r; a += 1) t.ks.or.k[a].to = null, t.ks.or.k[a].ti = null
						}
						this.or = i(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, t.ks.rx, 0, degToRads, this), this.ry = i(this, t.ks.ry, 0, degToRads, this), this.rz = i(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
							mProp: this
						}
					}

					function HImageElement(t, e, n) {
						this.assetData = e.getAssetData(t.refId), this.initElement(t, e, n)
					}

					function HybridRendererBase(t, e) {
						this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
							className: e && e.className || "",
							imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
							hideOnTransparent: !(e && !1 === e.hideOnTransparent),
							filterSize: {
								width: e && e.filterSize && e.filterSize.width || "400%",
								height: e && e.filterSize && e.filterSize.height || "400%",
								x: e && e.filterSize && e.filterSize.x || "-100%",
								y: e && e.filterSize && e.filterSize.y || "-100%"
							}
						}, this.globalData = {
							_mdf: !1,
							frameNum: -1,
							renderConfig: this.renderConfig
						}, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
					}

					function HCompElement(t, e, n) {
						this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, n), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
							_placeholder: !0
						}
					}

					function HybridRenderer(t, e) {
						this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
							className: e && e.className || "",
							imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
							hideOnTransparent: !(e && !1 === e.hideOnTransparent),
							filterSize: {
								width: e && e.filterSize && e.filterSize.width || "400%",
								height: e && e.filterSize && e.filterSize.height || "400%",
								x: e && e.filterSize && e.filterSize.x || "-100%",
								y: e && e.filterSize && e.filterSize.y || "-100%"
							},
							runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
						}, this.globalData = {
							_mdf: !1,
							frameNum: -1,
							renderConfig: this.renderConfig
						}, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
					}
					CVBaseElement.prototype = {
						createElements: function() {},
						initRendererElement: function() {},
						createContainerElements: function() {
							if (this.data.tt >= 1) {
								this.buffers = [];
								var t = this.globalData.canvasContext,
									e = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
								this.buffers.push(e);
								var n = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
								this.buffers.push(n), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
							}
							this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms()
						},
						createContent: function() {},
						setBlendMode: function() {
							var t = this.globalData;
							if (t.blendMode !== this.data.bm) {
								t.blendMode = this.data.bm;
								var e = getBlendMode(this.data.bm);
								t.canvasContext.globalCompositeOperation = e
							}
						},
						createRenderableComponents: function() {
							this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)
						},
						hideElement: function() {
							this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
						},
						showElement: function() {
							this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
						},
						clearCanvas: function(t) {
							t.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
						},
						prepareLayer: function() {
							if (this.data.tt >= 1) {
								var t = this.buffers[0].getContext("2d");
								this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
							}
						},
						exitLayer: function() {
							if (this.data.tt >= 1) {
								var t = this.buffers[1],
									e = t.getContext("2d");
								if (this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
									var n = assetLoader.getLumaCanvas(this.canvasContext.canvas);
									n.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(n, 0, 0)
								}
								this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(t, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
							}
						},
						renderFrame: function(t) {
							if (!this.hidden && !this.data.hd && (1 !== this.data.td || t)) {
								this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
								var e = 0 === this.data.ty;
								this.prepareLayer(), this.globalData.renderer.save(e), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(e), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
							}
						},
						destroy: function() {
							this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
						},
						mHelper: new Matrix
					}, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
						opacity: 1,
						_opMdf: !1
					}, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
						this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
					}, CVShapeElement.prototype.createStyleElement = function(t, e) {
						var n = {
								data: t,
								type: t.ty,
								preTransforms: this.transformsManager.addTransformSequence(e),
								transforms: [],
								elements: [],
								closed: !0 === t.hd
							},
							i = {};
						if ("fl" === t.ty || "st" === t.ty ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (n.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || {
								k: 0
							}, 0, .01, this), i.a = PropertyFactory.getProp(this, t.a || {
								k: 0
							}, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) {
							if (n.lc = lineCapEnum[t.lc || 2], n.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (n.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (n.wi = i.w.v), t.d) {
								var a = new DashProperty(this, t.d, "canvas", this);
								i.d = a, i.d.k || (n.da = i.d.dashArray, n.do = i.d.dashoffset[0])
							}
						} else n.r = 2 === t.r ? "evenodd" : "nonzero";
						return this.stylesList.push(n), i.style = n, i
					}, CVShapeElement.prototype.createGroupElement = function() {
						return {
							it: [],
							prevViewData: []
						}
					}, CVShapeElement.prototype.createTransformElement = function(t) {
						return {
							transform: {
								opacity: 1,
								_opMdf: !1,
								key: this.transformsManager.getNewKey(),
								op: PropertyFactory.getProp(this, t.o, 0, .01, this),
								mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
							}
						}
					}, CVShapeElement.prototype.createShapeElement = function(t) {
						var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
						return this.shapes.push(e), this.addShapeToModifiers(e), e
					}, CVShapeElement.prototype.reloadShapes = function() {
						this._isFirstFrame = !0;
						var t, e = this.itemsData.length;
						for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
						for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
						this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
					}, CVShapeElement.prototype.addTransformToStyleList = function(t) {
						var e, n = this.stylesList.length;
						for (e = 0; e < n; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
					}, CVShapeElement.prototype.removeTransformFromStyleList = function() {
						var t, e = this.stylesList.length;
						for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
					}, CVShapeElement.prototype.closeStyles = function(t) {
						var e, n = t.length;
						for (e = 0; e < n; e += 1) t[e].closed = !0
					}, CVShapeElement.prototype.searchShapes = function(t, e, n, i, a) {
						var r, s, o, l, c, u, f = t.length - 1,
							h = [],
							d = [],
							p = [].concat(a);
						for (r = f; r >= 0; r -= 1) {
							if ((l = this.searchProcessedElement(t[r])) ? e[r] = n[l - 1] : t[r]._shouldRender = i, "fl" === t[r].ty || "st" === t[r].ty || "gf" === t[r].ty || "gs" === t[r].ty) l ? e[r].style.closed = !1 : e[r] = this.createStyleElement(t[r], p), h.push(e[r].style);
							else if ("gr" === t[r].ty) {
								if (l)
									for (o = e[r].it.length, s = 0; s < o; s += 1) e[r].prevViewData[s] = e[r].it[s];
								else e[r] = this.createGroupElement(t[r]);
								this.searchShapes(t[r].it, e[r].it, e[r].prevViewData, i, p)
							} else "tr" === t[r].ty ? (l || (u = this.createTransformElement(t[r]), e[r] = u), p.push(e[r]), this.addTransformToStyleList(e[r])) : "sh" === t[r].ty || "rc" === t[r].ty || "el" === t[r].ty || "sr" === t[r].ty ? l || (e[r] = this.createShapeElement(t[r])) : "tm" === t[r].ty || "rd" === t[r].ty || "pb" === t[r].ty || "zz" === t[r].ty || "op" === t[r].ty ? (l ? (c = e[r]).closed = !1 : ((c = ShapeModifiers.getModifier(t[r].ty)).init(this, t[r]), e[r] = c, this.shapeModifiers.push(c)), d.push(c)) : "rp" === t[r].ty && (l ? (c = e[r]).closed = !0 : (c = ShapeModifiers.getModifier(t[r].ty), e[r] = c, c.init(this, t, r, e), this.shapeModifiers.push(c), i = !1), d.push(c));
							this.addProcessedElement(t[r], r + 1)
						}
						for (this.removeTransformFromStyleList(), this.closeStyles(h), f = d.length, r = 0; r < f; r += 1) d[r].closed = !0
					}, CVShapeElement.prototype.renderInnerContent = function() {
						this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
					}, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
						(t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
					}, CVShapeElement.prototype.drawLayer = function() {
						var t, e, n, i, a, r, s, o, l, c = this.stylesList.length,
							u = this.globalData.renderer,
							f = this.globalData.canvasContext;
						for (t = 0; t < c; t += 1)
							if (("st" !== (o = (l = this.stylesList[t]).type) && "gs" !== o || 0 !== l.wi) && l.data._shouldRender && 0 !== l.coOp && 0 !== this.globalData.currentGlobalAlpha) {
								for (u.save(), r = l.elements, "st" === o || "gs" === o ? (u.ctxStrokeStyle("st" === o ? l.co : l.grd), u.ctxLineWidth(l.wi), u.ctxLineCap(l.lc), u.ctxLineJoin(l.lj), u.ctxMiterLimit(l.ml || 0)) : u.ctxFillStyle("fl" === o ? l.co : l.grd), u.ctxOpacity(l.coOp), "st" !== o && "gs" !== o && f.beginPath(), u.ctxTransform(l.preTransforms.finalTransform.props), n = r.length, e = 0; e < n; e += 1) {
									for ("st" !== o && "gs" !== o || (f.beginPath(), l.da && (f.setLineDash(l.da), f.lineDashOffset = l.do)), a = (s = r[e].trNodes).length, i = 0; i < a; i += 1) "m" === s[i].t ? f.moveTo(s[i].p[0], s[i].p[1]) : "c" === s[i].t ? f.bezierCurveTo(s[i].pts[0], s[i].pts[1], s[i].pts[2], s[i].pts[3], s[i].pts[4], s[i].pts[5]) : f.closePath();
									"st" !== o && "gs" !== o || (u.ctxStroke(), l.da && f.setLineDash(this.dashResetter))
								}
								"st" !== o && "gs" !== o && this.globalData.renderer.ctxFill(l.r), u.restore()
							}
					}, CVShapeElement.prototype.renderShape = function(t, e, n, i) {
						var a, r;
						for (r = t, a = e.length - 1; a >= 0; a -= 1) "tr" === e[a].ty ? (r = n[a].transform, this.renderShapeTransform(t, r)) : "sh" === e[a].ty || "el" === e[a].ty || "rc" === e[a].ty || "sr" === e[a].ty ? this.renderPath(e[a], n[a]) : "fl" === e[a].ty ? this.renderFill(e[a], n[a], r) : "st" === e[a].ty ? this.renderStroke(e[a], n[a], r) : "gf" === e[a].ty || "gs" === e[a].ty ? this.renderGradientFill(e[a], n[a], r) : "gr" === e[a].ty ? this.renderShape(r, e[a].it, n[a].it) : e[a].ty;
						i && this.drawLayer()
					}, CVShapeElement.prototype.renderStyledShape = function(t, e) {
						if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
							var n, i, a, r = t.trNodes,
								s = e.paths,
								o = s._length;
							r.length = 0;
							var l = t.transforms.finalTransform;
							for (a = 0; a < o; a += 1) {
								var c = s.shapes[a];
								if (c && c.v) {
									for (i = c._length, n = 1; n < i; n += 1) 1 === n && r.push({
										t: "m",
										p: l.applyToPointArray(c.v[0][0], c.v[0][1], 0)
									}), r.push({
										t: "c",
										pts: l.applyToTriplePoints(c.o[n - 1], c.i[n], c.v[n])
									});
									1 === i && r.push({
										t: "m",
										p: l.applyToPointArray(c.v[0][0], c.v[0][1], 0)
									}), c.c && i && (r.push({
										t: "c",
										pts: l.applyToTriplePoints(c.o[n - 1], c.i[0], c.v[0])
									}), r.push({
										t: "z"
									}))
								}
							}
							t.trNodes = r
						}
					}, CVShapeElement.prototype.renderPath = function(t, e) {
						if (!0 !== t.hd && t._shouldRender) {
							var n, i = e.styledShapes.length;
							for (n = 0; n < i; n += 1) this.renderStyledShape(e.styledShapes[n], e.sh)
						}
					}, CVShapeElement.prototype.renderFill = function(t, e, n) {
						var i = e.style;
						(e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || n._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * n.opacity)
					}, CVShapeElement.prototype.renderGradientFill = function(t, e, n) {
						var i, a = e.style;
						if (!a.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
							var r, s = this.globalData.canvasContext,
								o = e.s.v,
								l = e.e.v;
							if (1 === t.t) i = s.createLinearGradient(o[0], o[1], l[0], l[1]);
							else {
								var c = Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)),
									u = Math.atan2(l[1] - o[1], l[0] - o[0]),
									f = e.h.v;
								f >= 1 ? f = .99 : f <= -1 && (f = -.99);
								var h = c * f,
									d = Math.cos(u + e.a.v) * h + o[0],
									p = Math.sin(u + e.a.v) * h + o[1];
								i = s.createRadialGradient(d, p, 0, o[0], o[1], c)
							}
							var m = t.g.p,
								g = e.g.c,
								y = 1;
							for (r = 0; r < m; r += 1) e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * r + 1]), i.addColorStop(g[4 * r] / 100, "rgba(" + g[4 * r + 1] + "," + g[4 * r + 2] + "," + g[4 * r + 3] + "," + y + ")");
							a.grd = i
						}
						a.coOp = e.o.v * n.opacity
					}, CVShapeElement.prototype.renderStroke = function(t, e, n) {
						var i = e.style,
							a = e.d;
						a && (a._mdf || this._isFirstFrame) && (i.da = a.dashArray, i.do = a.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || n._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * n.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v)
					}, CVShapeElement.prototype.destroy = function() {
						this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
					}, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
						var t = this.textProperty.currentData;
						this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
						var e = !1;
						t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
						var n = !1;
						t.sc && (n = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
						var i, a, r, s, o, l, c, u, f, h, d, p, m = this.globalData.fontManager.getFontByName(t.f),
							g = t.l,
							y = this.mHelper;
						this.stroke = n, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, a = t.finalText.length;
						var v = this.data.singleShape,
							b = .001 * t.tr * t.finalSize,
							E = 0,
							T = 0,
							_ = !0,
							I = 0;
						for (i = 0; i < a; i += 1) {
							s = (r = this.globalData.fontManager.getCharData(t.finalText[i], m.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && r.data || {}, y.reset(), v && g[i].n && (E = -b, T += t.yOffset, T += _ ? 1 : 0, _ = !1), f = (c = s.shapes ? s.shapes[0].it : []).length, y.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, y, g[i].line, E, T), d = createSizedArray(f - 1);
							var x = 0;
							for (u = 0; u < f; u += 1)
								if ("sh" === c[u].ty) {
									for (l = c[u].ks.k.i.length, h = c[u].ks.k, p = [], o = 1; o < l; o += 1) 1 === o && p.push(y.applyToX(h.v[0][0], h.v[0][1], 0), y.applyToY(h.v[0][0], h.v[0][1], 0)), p.push(y.applyToX(h.o[o - 1][0], h.o[o - 1][1], 0), y.applyToY(h.o[o - 1][0], h.o[o - 1][1], 0), y.applyToX(h.i[o][0], h.i[o][1], 0), y.applyToY(h.i[o][0], h.i[o][1], 0), y.applyToX(h.v[o][0], h.v[o][1], 0), y.applyToY(h.v[o][0], h.v[o][1], 0));
									p.push(y.applyToX(h.o[o - 1][0], h.o[o - 1][1], 0), y.applyToY(h.o[o - 1][0], h.o[o - 1][1], 0), y.applyToX(h.i[0][0], h.i[0][1], 0), y.applyToY(h.i[0][0], h.i[0][1], 0), y.applyToX(h.v[0][0], h.v[0][1], 0), y.applyToY(h.v[0][0], h.v[0][1], 0)), d[x] = p, x += 1
								} v && (E += g[i].l, E += b), this.textSpans[I] ? this.textSpans[I].elem = d : this.textSpans[I] = {
								elem: d
							}, I += 1
						}
					}, CVTextElement.prototype.renderInnerContent = function() {
						this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
						var t, e, n, i, a, r, s, o = this.textAnimator.renderedLetters,
							l = this.textProperty.currentData.l;
						e = l.length;
						var c, u, f = null,
							h = null,
							d = null,
							p = this.globalData.renderer;
						for (t = 0; t < e; t += 1)
							if (!l[t].n) {
								if ((s = o[t]) && (p.save(), p.ctxTransform(s.p), p.ctxOpacity(s.o)), this.fill) {
									for (s && s.fc ? f !== s.fc && (p.ctxFillStyle(s.fc), f = s.fc) : f !== this.values.fill && (f = this.values.fill, p.ctxFillStyle(this.values.fill)), i = (c = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), n = 0; n < i; n += 1)
										for (r = (u = c[n]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), a = 2; a < r; a += 6) this.globalData.canvasContext.bezierCurveTo(u[a], u[a + 1], u[a + 2], u[a + 3], u[a + 4], u[a + 5]);
									this.globalData.canvasContext.closePath(), p.ctxFill()
								}
								if (this.stroke) {
									for (s && s.sw ? d !== s.sw && (d = s.sw, p.ctxLineWidth(s.sw)) : d !== this.values.sWidth && (d = this.values.sWidth, p.ctxLineWidth(this.values.sWidth)), s && s.sc ? h !== s.sc && (h = s.sc, p.ctxStrokeStyle(s.sc)) : h !== this.values.stroke && (h = this.values.stroke, p.ctxStrokeStyle(this.values.stroke)), i = (c = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), n = 0; n < i; n += 1)
										for (r = (u = c[n]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), a = 2; a < r; a += 6) this.globalData.canvasContext.bezierCurveTo(u[a], u[a + 1], u[a + 2], u[a + 3], u[a + 4], u[a + 5]);
									this.globalData.canvasContext.closePath(), p.ctxStroke()
								}
								s && this.globalData.renderer.restore()
							}
					}, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
						if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
							var t = createTag("canvas");
							t.width = this.assetData.w, t.height = this.assetData.h;
							var e, n, i = t.getContext("2d"),
								a = this.img.width,
								r = this.img.height,
								s = a / r,
								o = this.assetData.w / this.assetData.h,
								l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
							s > o && "xMidYMid slice" === l || s < o && "xMidYMid slice" !== l ? e = (n = r) * o : n = (e = a) / o, i.drawImage(this.img, (a - e) / 2, (r - n) / 2, e, n, 0, 0, this.assetData.w, this.assetData.h), this.img = t
						}
					}, CVImageElement.prototype.renderInnerContent = function() {
						this.canvasContext.drawImage(this.img, 0, 0)
					}, CVImageElement.prototype.destroy = function() {
						this.img = null
					}, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
						this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
					}, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(t) {
						return new CVShapeElement(t, this.globalData, this)
					}, CanvasRendererBase.prototype.createText = function(t) {
						return new CVTextElement(t, this.globalData, this)
					}, CanvasRendererBase.prototype.createImage = function(t) {
						return new CVImageElement(t, this.globalData, this)
					}, CanvasRendererBase.prototype.createSolid = function(t) {
						return new CVSolidElement(t, this.globalData, this)
					}, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(t) {
						1 === t[0] && 0 === t[1] && 0 === t[4] && 1 === t[5] && 0 === t[12] && 0 === t[13] || this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
					}, CanvasRendererBase.prototype.ctxOpacity = function(t) {
						this.canvasContext.globalAlpha *= t < 0 ? 0 : t
					}, CanvasRendererBase.prototype.ctxFillStyle = function(t) {
						this.canvasContext.fillStyle = t
					}, CanvasRendererBase.prototype.ctxStrokeStyle = function(t) {
						this.canvasContext.strokeStyle = t
					}, CanvasRendererBase.prototype.ctxLineWidth = function(t) {
						this.canvasContext.lineWidth = t
					}, CanvasRendererBase.prototype.ctxLineCap = function(t) {
						this.canvasContext.lineCap = t
					}, CanvasRendererBase.prototype.ctxLineJoin = function(t) {
						this.canvasContext.lineJoin = t
					}, CanvasRendererBase.prototype.ctxMiterLimit = function(t) {
						this.canvasContext.miterLimit = t
					}, CanvasRendererBase.prototype.ctxFill = function(t) {
						this.canvasContext.fill(t)
					}, CanvasRendererBase.prototype.ctxFillRect = function(t, e, n, i) {
						this.canvasContext.fillRect(t, e, n, i)
					}, CanvasRendererBase.prototype.ctxStroke = function() {
						this.canvasContext.stroke()
					}, CanvasRendererBase.prototype.reset = function() {
						this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
					}, CanvasRendererBase.prototype.save = function() {
						this.canvasContext.save()
					}, CanvasRendererBase.prototype.restore = function(t) {
						this.renderConfig.clearCanvas ? (t && (this.globalData.blendMode = "source-over"), this.contextData.restore(t)) : this.canvasContext.restore()
					}, CanvasRendererBase.prototype.configAnimation = function(t) {
						if (this.animationItem.wrapper) {
							this.animationItem.container = createTag("canvas");
							var e = this.animationItem.container.style;
							e.width = "100%", e.height = "100%";
							var n = "0px 0px 0px";
							e.transformOrigin = n, e.mozTransformOrigin = n, e.webkitTransformOrigin = n, e["-webkit-transform"] = n, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
						} else this.canvasContext = this.renderConfig.context;
						this.contextData.setContext(this.canvasContext), this.data = t, this.layers = t.layers, this.transformCanvas = {
							w: t.w,
							h: t.h,
							sx: 0,
							sy: 0,
							tx: 0,
							ty: 0
						}, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
					}, CanvasRendererBase.prototype.updateContainerSize = function(t, e) {
						var n, i, a, r;
						if (this.reset(), t ? (n = t, i = e, this.canvasContext.canvas.width = n, this.canvasContext.canvas.height = i) : (this.animationItem.wrapper && this.animationItem.container ? (n = this.animationItem.wrapper.offsetWidth, i = this.animationItem.wrapper.offsetHeight) : (n = this.canvasContext.canvas.width, i = this.canvasContext.canvas.height), this.canvasContext.canvas.width = n * this.renderConfig.dpr, this.canvasContext.canvas.height = i * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
							var s = this.renderConfig.preserveAspectRatio.split(" "),
								o = s[1] || "meet",
								l = s[0] || "xMidYMid",
								c = l.substr(0, 4),
								u = l.substr(4);
							a = n / i, (r = this.transformCanvas.w / this.transformCanvas.h) > a && "meet" === o || r < a && "slice" === o ? (this.transformCanvas.sx = n / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = n / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === c && (r < a && "meet" === o || r > a && "slice" === o) ? (n - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === c && (r < a && "meet" === o || r > a && "slice" === o) ? (n - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === u && (r > a && "meet" === o || r < a && "slice" === o) ? (i - this.transformCanvas.h * (n / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === u && (r > a && "meet" === o || r < a && "slice" === o) ? (i - this.transformCanvas.h * (n / this.transformCanvas.w)) * this.renderConfig.dpr : 0
						} else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = n / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0;
						this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
					}, CanvasRendererBase.prototype.destroy = function() {
						var t;
						for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
						this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
					}, CanvasRendererBase.prototype.renderFrame = function(t, e) {
						if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
							this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
							var n, i = this.layers.length;
							for (this.completeLayers || this.checkLayers(t), n = i - 1; n >= 0; n -= 1)(this.completeLayers || this.elements[n]) && this.elements[n].prepareFrame(t - this.layers[n].st);
							if (this.globalData._mdf) {
								for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), n = i - 1; n >= 0; n -= 1)(this.completeLayers || this.elements[n]) && this.elements[n].renderFrame();
								!0 !== this.renderConfig.clearCanvas && this.restore()
							}
						}
					}, CanvasRendererBase.prototype.buildItem = function(t) {
						var e = this.elements;
						if (!e[t] && 99 !== this.layers[t].ty) {
							var n = this.createItem(this.layers[t], this, this.globalData);
							e[t] = n, n.initExpressions()
						}
					}, CanvasRendererBase.prototype.checkPendingElements = function() {
						for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
					}, CanvasRendererBase.prototype.hide = function() {
						this.animationItem.container.style.display = "none"
					}, CanvasRendererBase.prototype.show = function() {
						this.animationItem.container.style.display = "block"
					}, CVContextData.prototype.duplicate = function() {
						var t = 2 * this._length,
							e = 0;
						for (e = this._length; e < t; e += 1) this.stack[e] = new CanvasContext;
						this._length = t
					}, CVContextData.prototype.reset = function() {
						this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1
					}, CVContextData.prototype.restore = function(t) {
						this.cArrPos -= 1;
						var e, n = this.stack[this.cArrPos],
							i = n.transform,
							a = this.cTr.props;
						for (e = 0; e < 16; e += 1) a[e] = i[e];
						if (t) {
							this.nativeContext.restore();
							var r = this.stack[this.cArrPos + 1];
							this.appliedFillStyle = r.fillStyle, this.appliedStrokeStyle = r.strokeStyle, this.appliedLineWidth = r.lineWidth, this.appliedLineCap = r.lineCap, this.appliedLineJoin = r.lineJoin, this.appliedMiterLimit = r.miterLimit
						}
						this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), (t || -1 !== n.opacity && this.currentOpacity !== n.opacity) && (this.nativeContext.globalAlpha = n.opacity, this.currentOpacity = n.opacity), this.currentFillStyle = n.fillStyle, this.currentStrokeStyle = n.strokeStyle, this.currentLineWidth = n.lineWidth, this.currentLineCap = n.lineCap, this.currentLineJoin = n.lineJoin, this.currentMiterLimit = n.miterLimit
					}, CVContextData.prototype.save = function(t) {
						t && this.nativeContext.save();
						var e = this.cTr.props;
						this._length <= this.cArrPos && this.duplicate();
						var n, i = this.stack[this.cArrPos];
						for (n = 0; n < 16; n += 1) i.transform[n] = e[n];
						this.cArrPos += 1;
						var a = this.stack[this.cArrPos];
						a.opacity = i.opacity, a.fillStyle = i.fillStyle, a.strokeStyle = i.strokeStyle, a.lineWidth = i.lineWidth, a.lineCap = i.lineCap, a.lineJoin = i.lineJoin, a.miterLimit = i.miterLimit
					}, CVContextData.prototype.setOpacity = function(t) {
						this.stack[this.cArrPos].opacity = t
					}, CVContextData.prototype.setContext = function(t) {
						this.nativeContext = t
					}, CVContextData.prototype.fillStyle = function(t) {
						this.stack[this.cArrPos].fillStyle !== t && (this.currentFillStyle = t, this.stack[this.cArrPos].fillStyle = t)
					}, CVContextData.prototype.strokeStyle = function(t) {
						this.stack[this.cArrPos].strokeStyle !== t && (this.currentStrokeStyle = t, this.stack[this.cArrPos].strokeStyle = t)
					}, CVContextData.prototype.lineWidth = function(t) {
						this.stack[this.cArrPos].lineWidth !== t && (this.currentLineWidth = t, this.stack[this.cArrPos].lineWidth = t)
					}, CVContextData.prototype.lineCap = function(t) {
						this.stack[this.cArrPos].lineCap !== t && (this.currentLineCap = t, this.stack[this.cArrPos].lineCap = t)
					}, CVContextData.prototype.lineJoin = function(t) {
						this.stack[this.cArrPos].lineJoin !== t && (this.currentLineJoin = t, this.stack[this.cArrPos].lineJoin = t)
					}, CVContextData.prototype.miterLimit = function(t) {
						this.stack[this.cArrPos].miterLimit !== t && (this.currentMiterLimit = t, this.stack[this.cArrPos].miterLimit = t)
					}, CVContextData.prototype.transform = function(t) {
						this.transformMat.cloneFromProps(t);
						var e = this.cTr;
						this.transformMat.multiply(e), e.cloneFromProps(this.transformMat.props);
						var n = e.props;
						this.nativeContext.setTransform(n[0], n[1], n[4], n[5], n[12], n[13])
					}, CVContextData.prototype.opacity = function(t) {
						var e = this.stack[this.cArrPos].opacity;
						e *= t < 0 ? 0 : t, this.stack[this.cArrPos].opacity !== e && (this.currentOpacity !== t && (this.nativeContext.globalAlpha = t, this.currentOpacity = t), this.stack[this.cArrPos].opacity = e)
					}, CVContextData.prototype.fill = function(t) {
						this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(t)
					}, CVContextData.prototype.fillRect = function(t, e, n, i) {
						this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(t, e, n, i)
					}, CVContextData.prototype.stroke = function() {
						this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke()
					}, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
						var t, e = this.canvasContext;
						for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
					}, CVCompElement.prototype.destroy = function() {
						var t;
						for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
						this.layers = null, this.elements = null
					}, CVCompElement.prototype.createComp = function(t) {
						return new CVCompElement(t, this.globalData, this)
					}, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(t) {
						return new CVCompElement(t, this.globalData, this)
					}, HBaseElement.prototype = {
						checkBlendMode: function() {},
						initRendererElement: function() {
							this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
						},
						createContainerElements: function() {
							this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
						},
						renderElement: function() {
							var t = this.transformedElement ? this.transformedElement.style : {};
							if (this.finalTransform._matMdf) {
								var e = this.finalTransform.mat.toCSS();
								t.transform = e, t.webkitTransform = e
							}
							this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
						},
						renderFrame: function() {
							this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
						},
						destroy: function() {
							this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
						},
						createRenderableComponents: function() {
							this.maskManager = new MaskElement(this.data, this, this.globalData)
						},
						addEffects: function() {},
						setMatte: function() {}
					}, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
						var t;
						this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
					}, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
						var t;
						if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
						else {
							t = createNS("svg");
							var e = this.comp.data ? this.comp.data : this.globalData.compSize;
							t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
						}
						this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
					}, HShapeElement.prototype.getTransformedPoint = function(t, e) {
						var n, i = t.length;
						for (n = 0; n < i; n += 1) e = t[n].mProps.v.applyToPointArray(e[0], e[1], 0);
						return e
					}, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
						var n, i, a, r, s, o = t.sh.v,
							l = t.transformers,
							c = o._length;
						if (!(c <= 1)) {
							for (n = 0; n < c - 1; n += 1) i = this.getTransformedPoint(l, o.v[n]), a = this.getTransformedPoint(l, o.o[n]), r = this.getTransformedPoint(l, o.i[n + 1]), s = this.getTransformedPoint(l, o.v[n + 1]), this.checkBounds(i, a, r, s, e);
							o.c && (i = this.getTransformedPoint(l, o.v[n]), a = this.getTransformedPoint(l, o.o[n]), r = this.getTransformedPoint(l, o.i[0]), s = this.getTransformedPoint(l, o.v[0]), this.checkBounds(i, a, r, s, e))
						}
					}, HShapeElement.prototype.checkBounds = function(t, e, n, i, a) {
						this.getBoundsOfCurve(t, e, n, i);
						var r = this.shapeBoundingBox;
						a.x = bmMin(r.left, a.x), a.xMax = bmMax(r.right, a.xMax), a.y = bmMin(r.top, a.y), a.yMax = bmMax(r.bottom, a.yMax)
					}, HShapeElement.prototype.shapeBoundingBox = {
						left: 0,
						right: 0,
						top: 0,
						bottom: 0
					}, HShapeElement.prototype.tempBoundingBox = {
						x: 0,
						xMax: 0,
						y: 0,
						yMax: 0,
						width: 0,
						height: 0
					}, HShapeElement.prototype.getBoundsOfCurve = function(t, e, n, i) {
						for (var a, r, s, o, l, c, u, f = [
								[t[0], i[0]],
								[t[1], i[1]]
							], h = 0; h < 2; ++h) r = 6 * t[h] - 12 * e[h] + 6 * n[h], a = -3 * t[h] + 9 * e[h] - 9 * n[h] + 3 * i[h], s = 3 * e[h] - 3 * t[h], r |= 0, s |= 0, 0 == (a |= 0) && 0 === r || (0 === a ? (o = -s / r) > 0 && o < 1 && f[h].push(this.calculateF(o, t, e, n, i, h)) : (l = r * r - 4 * s * a) >= 0 && ((c = (-r + bmSqrt(l)) / (2 * a)) > 0 && c < 1 && f[h].push(this.calculateF(c, t, e, n, i, h)), (u = (-r - bmSqrt(l)) / (2 * a)) > 0 && u < 1 && f[h].push(this.calculateF(u, t, e, n, i, h))));
						this.shapeBoundingBox.left = bmMin.apply(null, f[0]), this.shapeBoundingBox.top = bmMin.apply(null, f[1]), this.shapeBoundingBox.right = bmMax.apply(null, f[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, f[1])
					}, HShapeElement.prototype.calculateF = function(t, e, n, i, a, r) {
						return bmPow(1 - t, 3) * e[r] + 3 * bmPow(1 - t, 2) * t * n[r] + 3 * (1 - t) * bmPow(t, 2) * i[r] + bmPow(t, 3) * a[r]
					}, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
						var n, i = t.length;
						for (n = 0; n < i; n += 1) t[n] && t[n].sh ? this.calculateShapeBoundingBox(t[n], e) : t[n] && t[n].it ? this.calculateBoundingBox(t[n].it, e) : t[n] && t[n].style && t[n].w && this.expandStrokeBoundingBox(t[n].w, e)
					}, HShapeElement.prototype.expandStrokeBoundingBox = function(t, e) {
						var n = 0;
						if (t.keyframes) {
							for (var i = 0; i < t.keyframes.length; i += 1) {
								var a = t.keyframes[i].s;
								a > n && (n = a)
							}
							n *= t.mult
						} else n = t.v * t.mult;
						e.x -= n, e.xMax += n, e.y -= n, e.yMax += n
					}, HShapeElement.prototype.currentBoxContains = function(t) {
						return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
					}, HShapeElement.prototype.renderInnerContent = function() {
						if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
							var t = this.tempBoundingBox,
								e = 999999;
							if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, !this.currentBoxContains(t)) {
								var n = !1;
								if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), n = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), n = !0), n || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
									this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
									var i = this.shapeCont.style,
										a = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
									i.transform = a, i.webkitTransform = a
								}
							}
						}
					}, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
						if (this.isMasked = this.checkMasks(), this.isMasked) {
							this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
							var t = createNS("g");
							this.maskedElement.appendChild(t), this.innerElem = t
						} else this.renderType = "html", this.innerElem = this.layerElement;
						this.checkParenting()
					}, HTextElement.prototype.buildNewText = function() {
						var t = this.textProperty.currentData;
						this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
						var e = this.innerElem.style,
							n = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
						e.fill = n, e.color = n, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
						var i, a, r = this.globalData.fontManager.getFontByName(t.f);
						if (!this.globalData.fontManager.chars) {
							if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", r.fClass) this.innerElem.className = r.fClass;
							else {
								e.fontFamily = r.fFamily;
								var s = t.fWeight,
									o = t.fStyle;
								e.fontStyle = o, e.fontWeight = s
							}
						}
						var l, c, u, f = t.l;
						a = f.length;
						var h, d = this.mHelper,
							p = "",
							m = 0;
						for (i = 0; i < a; i += 1) {
							if (this.globalData.fontManager.chars ? (this.textPaths[m] ? l = this.textPaths[m] : ((l = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), l.setAttribute("stroke-linejoin", lineJoinEnum[2]), l.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? u = (c = this.textSpans[m]).children[0] : ((c = createTag("div")).style.lineHeight = 0, (u = createNS("svg")).appendChild(l), styleDiv(c)))) : this.isMasked ? l = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (c = this.textSpans[m], l = this.textPaths[m]) : (styleDiv(c = createTag("span")), styleDiv(l = createTag("span")), c.appendChild(l)), this.globalData.fontManager.chars) {
								var g, y = this.globalData.fontManager.getCharData(t.finalText[i], r.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
								if (g = y ? y.data : null, d.reset(), g && g.shapes && g.shapes.length && (h = g.shapes[0].it, d.scale(t.finalSize / 100, t.finalSize / 100), p = this.createPathShape(d, h), l.setAttribute("d", p)), this.isMasked) this.innerElem.appendChild(l);
								else {
									if (this.innerElem.appendChild(c), g && g.shapes) {
										document.body.appendChild(u);
										var v = u.getBBox();
										u.setAttribute("width", v.width + 2), u.setAttribute("height", v.height + 2), u.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
										var b = u.style,
											E = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
										b.transform = E, b.webkitTransform = E, f[i].yOffset = v.y - 1
									} else u.setAttribute("width", 1), u.setAttribute("height", 1);
									c.appendChild(u)
								}
							} else if (l.textContent = f[i].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(l);
							else {
								this.innerElem.appendChild(c);
								var T = l.style,
									_ = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
								T.transform = _, T.webkitTransform = _
							}
							this.isMasked ? this.textSpans[m] = l : this.textSpans[m] = c, this.textSpans[m].style.display = "block", this.textPaths[m] = l, m += 1
						}
						for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
					}, HTextElement.prototype.renderInnerContent = function() {
						var t;
						if (this.validateText(), this.data.singleShape) {
							if (!this._isFirstFrame && !this.lettersChangedFlag) return;
							if (this.isMasked && this.finalTransform._matMdf) {
								this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
								var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
								t.transform = e, t.webkitTransform = e
							}
						}
						if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
							var n, i, a, r, s, o = 0,
								l = this.textAnimator.renderedLetters,
								c = this.textProperty.currentData.l;
							for (i = c.length, n = 0; n < i; n += 1) c[n].n ? o += 1 : (r = this.textSpans[n], s = this.textPaths[n], a = l[o], o += 1, a._mdf.m && (this.isMasked ? r.setAttribute("transform", a.m) : (r.style.webkitTransform = a.m, r.style.transform = a.m)), r.style.opacity = a.o, a.sw && a._mdf.sw && s.setAttribute("stroke-width", a.sw), a.sc && a._mdf.sc && s.setAttribute("stroke", a.sc), a.fc && a._mdf.fc && (s.setAttribute("fill", a.fc), s.style.color = a.fc));
							if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
								var u = this.innerElem.getBBox();
								if (this.currentBBox.w !== u.width && (this.currentBBox.w = u.width, this.svgElement.setAttribute("width", u.width)), this.currentBBox.h !== u.height && (this.currentBBox.h = u.height, this.svgElement.setAttribute("height", u.height)), this.currentBBox.w !== u.width + 2 || this.currentBBox.h !== u.height + 2 || this.currentBBox.x !== u.x - 1 || this.currentBBox.y !== u.y - 1) {
									this.currentBBox.w = u.width + 2, this.currentBBox.h = u.height + 2, this.currentBBox.x = u.x - 1, this.currentBBox.y = u.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
									var f = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
									t.transform = f, t.webkitTransform = f
								}
							}
						}
					}, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
						var t, e, n, i, a = this.comp.threeDElements.length;
						for (t = 0; t < a; t += 1)
							if ("3d" === (e = this.comp.threeDElements[t]).type) {
								n = e.perspectiveElem.style, i = e.container.style;
								var r = this.pe.v + "px",
									s = "0px 0px 0px",
									o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
								n.perspective = r, n.webkitPerspective = r, i.transformOrigin = s, i.mozTransformOrigin = s, i.webkitTransformOrigin = s, n.transform = o, n.webkitTransform = o
							}
					}, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
						var t, e, n = this._isFirstFrame;
						if (this.hierarchy)
							for (e = this.hierarchy.length, t = 0; t < e; t += 1) n = this.hierarchy[t].finalTransform.mProp._mdf || n;
						if (n || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
							if (this.mat.reset(), this.hierarchy)
								for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
									var i, a, r, s = this.hierarchy[t].finalTransform.mProp;
									this.mat.translate(-s.p.v[0], -s.p.v[1], s.p.v[2]), this.mat.rotateX(-s.or.v[0]).rotateY(-s.or.v[1]).rotateZ(s.or.v[2]), this.mat.rotateX(-s.rx.v).rotateY(-s.ry.v).rotateZ(s.rz.v), this.mat.scale(1 / s.s.v[0], 1 / s.s.v[1], 1 / s.s.v[2]), this.mat.translate(s.a.v[0], s.a.v[1], s.a.v[2])
								}
							if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
								var o, l = Math.sqrt(Math.pow((o = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]])[0], 2) + Math.pow(o[1], 2) + Math.pow(o[2], 2)),
									c = [o[0] / l, o[1] / l, o[2] / l],
									u = Math.sqrt(c[2] * c[2] + c[0] * c[0]),
									f = Math.atan2(c[1], u),
									h = Math.atan2(c[0], -c[2]);
								this.mat.rotateY(h).rotateX(-f)
							}
							this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
							var d = !this._prevMat.equals(this.mat);
							if ((d || this.pe._mdf) && this.comp.threeDElements) {
								for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
									if ("3d" === (i = this.comp.threeDElements[t]).type) {
										if (d) {
											var p = this.mat.toCSS();
											(r = i.container.style).transform = p, r.webkitTransform = p
										}
										this.pe._mdf && ((a = i.perspectiveElem.style).perspective = this.pe.v + "px", a.webkitPerspective = this.pe.v + "px")
									} this.mat.clone(this._prevMat)
							}
						}
						this._isFirstFrame = !1
					}, HCameraElement.prototype.prepareFrame = function(t) {
						this.prepareProperties(t, !0)
					}, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
						return null
					}, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
						var t = this.globalData.getAssetsPath(this.assetData),
							e = new Image;
						this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
					}, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
						for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
					}, HybridRendererBase.prototype.appendElementInPos = function(t, e) {
						var n = t.getBaseElement();
						if (n) {
							var i = this.layers[e];
							if (i.ddd && this.supports3d) this.addTo3dContainer(n, e);
							else if (this.threeDElements) this.addTo3dContainer(n, e);
							else {
								for (var a, r, s = 0; s < e;) this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement && (r = this.elements[s], a = (this.layers[s].ddd ? this.getThreeDContainerByPos(s) : r.getBaseElement()) || a), s += 1;
								a ? i.ddd && this.supports3d || this.layerElement.insertBefore(n, a) : i.ddd && this.supports3d || this.layerElement.appendChild(n)
							}
						}
					}, HybridRendererBase.prototype.createShape = function(t) {
						return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
					}, HybridRendererBase.prototype.createText = function(t) {
						return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
					}, HybridRendererBase.prototype.createCamera = function(t) {
						return this.camera = new HCameraElement(t, this.globalData, this), this.camera
					}, HybridRendererBase.prototype.createImage = function(t) {
						return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
					}, HybridRendererBase.prototype.createSolid = function(t) {
						return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
					}, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(t) {
						for (var e = 0, n = this.threeDElements.length; e < n;) {
							if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
							e += 1
						}
						return null
					}, HybridRendererBase.prototype.createThreeDContainer = function(t, e) {
						var n, i, a = createTag("div");
						styleDiv(a);
						var r = createTag("div");
						if (styleDiv(r), "3d" === e) {
							(n = a.style).width = this.globalData.compSize.w + "px", n.height = this.globalData.compSize.h + "px";
							var s = "50% 50%";
							n.webkitTransformOrigin = s, n.mozTransformOrigin = s, n.transformOrigin = s;
							var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
							(i = r.style).transform = o, i.webkitTransform = o
						}
						a.appendChild(r);
						var l = {
							container: r,
							perspectiveElem: a,
							startPos: t,
							endPos: t,
							type: e
						};
						return this.threeDElements.push(l), l
					}, HybridRendererBase.prototype.build3dContainers = function() {
						var t, e, n = this.layers.length,
							i = "";
						for (t = 0; t < n; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? "3d" !== i && (i = "3d", e = this.createThreeDContainer(t, "3d")) : "2d" !== i && (i = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t);
						for (t = (n = this.threeDElements.length) - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
					}, HybridRendererBase.prototype.addTo3dContainer = function(t, e) {
						for (var n = 0, i = this.threeDElements.length; n < i;) {
							if (e <= this.threeDElements[n].endPos) {
								for (var a, r = this.threeDElements[n].startPos; r < e;) this.elements[r] && this.elements[r].getBaseElement && (a = this.elements[r].getBaseElement()), r += 1;
								a ? this.threeDElements[n].container.insertBefore(t, a) : this.threeDElements[n].container.appendChild(t);
								break
							}
							n += 1
						}
					}, HybridRendererBase.prototype.configAnimation = function(t) {
						var e = createTag("div"),
							n = this.animationItem.wrapper,
							i = e.style;
						i.width = t.w + "px", i.height = t.h + "px", this.resizerElem = e, styleDiv(e), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), n.appendChild(e), i.overflow = "hidden";
						var a = createNS("svg");
						a.setAttribute("width", "1"), a.setAttribute("height", "1"), styleDiv(a), this.resizerElem.appendChild(a);
						var r = createNS("defs");
						a.appendChild(r), this.data = t, this.setupGlobalData(t, a), this.globalData.defs = r, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
					}, HybridRendererBase.prototype.destroy = function() {
						this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
						var t, e = this.layers ? this.layers.length : 0;
						for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
						this.elements.length = 0, this.destroyed = !0, this.animationItem = null
					}, HybridRendererBase.prototype.updateContainerSize = function() {
						var t, e, n, i, a = this.animationItem.wrapper.offsetWidth,
							r = this.animationItem.wrapper.offsetHeight,
							s = a / r;
						this.globalData.compSize.w / this.globalData.compSize.h > s ? (t = a / this.globalData.compSize.w, e = a / this.globalData.compSize.w, n = 0, i = (r - this.globalData.compSize.h * (a / this.globalData.compSize.w)) / 2) : (t = r / this.globalData.compSize.h, e = r / this.globalData.compSize.h, n = (a - this.globalData.compSize.w * (r / this.globalData.compSize.h)) / 2, i = 0);
						var o = this.resizerElem.style;
						o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + n + "," + i + ",0,1)", o.transform = o.webkitTransform
					}, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
						this.resizerElem.style.display = "none"
					}, HybridRendererBase.prototype.show = function() {
						this.resizerElem.style.display = "block"
					}, HybridRendererBase.prototype.initItems = function() {
						if (this.buildAllItems(), this.camera) this.camera.setup();
						else {
							var t, e = this.globalData.compSize.w,
								n = this.globalData.compSize.h,
								i = this.threeDElements.length;
							for (t = 0; t < i; t += 1) {
								var a = this.threeDElements[t].perspectiveElem.style;
								a.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(n, 2)) + "px", a.perspective = a.webkitPerspective
							}
						}
					}, HybridRendererBase.prototype.searchExtraCompositions = function(t) {
						var e, n = t.length,
							i = createTag("div");
						for (e = 0; e < n; e += 1)
							if (t[e].xt) {
								var a = this.createComp(t[e], i, this.globalData.comp, null);
								a.initExpressions(), this.globalData.projectInterface.registerComposition(a)
							}
					}, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
						this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
					}, HCompElement.prototype.addTo3dContainer = function(t, e) {
						for (var n, i = 0; i < e;) this.elements[i] && this.elements[i].getBaseElement && (n = this.elements[i].getBaseElement()), i += 1;
						n ? this.layerElement.insertBefore(t, n) : this.layerElement.appendChild(t)
					}, HCompElement.prototype.createComp = function(t) {
						return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
					}, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(t) {
						return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
					};
					var CompExpressionInterface = function(t) {
						function e(e) {
							for (var n = 0, i = t.layers.length; n < i;) {
								if (t.layers[n].nm === e || t.layers[n].ind === e) return t.elements[n].layerInterface;
								n += 1
							}
							return null
						}
						return Object.defineProperty(e, "_name", {
							value: t.data.nm
						}), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
					};

					function _typeof$2(t) {
						return (_typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
							return typeof t
						} : function(t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
						})(t)
					}

					function seedRandom(t, e) {
						var n = this,
							i = 256,
							a = e.pow(i, 6),
							r = e.pow(2, 52),
							s = 2 * r,
							o = 255;

						function l(t) {
							var e, n = t.length,
								a = this,
								r = 0,
								s = a.i = a.j = 0,
								l = a.S = [];
							for (n || (t = [n++]); r < i;) l[r] = r++;
							for (r = 0; r < i; r++) l[r] = l[s = o & s + t[r % n] + (e = l[r])], l[s] = e;
							a.g = function(t) {
								for (var e, n = 0, r = a.i, s = a.j, l = a.S; t--;) e = l[r = o & r + 1], n = n * i + l[o & (l[r] = l[s = o & s + e]) + (l[s] = e)];
								return a.i = r, a.j = s, n
							}
						}

						function c(t, e) {
							return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
						}

						function u(t, e) {
							var n, i = [],
								a = _typeof$2(t);
							if (e && "object" == a)
								for (n in t) try {
									i.push(u(t[n], e - 1))
								} catch (t) {}
							return i.length ? i : "string" == a ? t : t + "\0"
						}

						function f(t, e) {
							for (var n, i = t + "", a = 0; a < i.length;) e[o & a] = o & (n ^= 19 * e[o & a]) + i.charCodeAt(a++);
							return h(e)
						}

						function h(t) {
							return String.fromCharCode.apply(0, t)
						}
						e.seedrandom = function(o, d, p) {
							var m = [],
								g = f(u((d = !0 === d ? {
									entropy: !0
								} : d || {}).entropy ? [o, h(t)] : null === o ? function() {
									try {
										var e = new Uint8Array(i);
										return (n.crypto || n.msCrypto).getRandomValues(e), h(e)
									} catch (e) {
										var a = n.navigator,
											r = a && a.plugins;
										return [+new Date, n, r, n.screen, h(t)]
									}
								}() : o, 3), m),
								y = new l(m),
								v = function() {
									for (var t = y.g(6), e = a, n = 0; t < r;) t = (t + n) * i, e *= i, n = y.g(1);
									for (; t >= s;) t /= 2, e /= 2, n >>>= 1;
									return (t + n) / e
								};
							return v.int32 = function() {
								return 0 | y.g(4)
							}, v.quick = function() {
								return y.g(4) / 0x100000000
							}, v.double = v, f(h(y.S), t), (d.pass || p || function(t, n, i, a) {
								return a && (a.S && c(a, y), t.state = function() {
									return c(y, {})
								}), i ? (e.random = t, n) : t
							})(v, g, "global" in d ? d.global : this == e, d.state)
						}, f(e.random(), t)
					}

					function initialize$2(t) {
						seedRandom([], t)
					}
					var propTypes = {
						SHAPE: "shape"
					};

					function _typeof$1(t) {
						return (_typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
							return typeof t
						} : function(t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
						})(t)
					}
					var ExpressionManager = function() {
							var ob = {},
								Math = BMMath,
								window = null,
								document = null,
								XMLHttpRequest = null,
								fetch = null,
								frames = null,
								_lottieGlobal = {};

							function resetFrame() {
								_lottieGlobal = {}
							}

							function $bm_isInstanceOfArray(t) {
								return t.constructor === Array || t.constructor === Float32Array
							}

							function isNumerable(t, e) {
								return "number" === t || e instanceof Number || "boolean" === t || "string" === t
							}

							function $bm_neg(t) {
								var e = _typeof$1(t);
								if ("number" === e || t instanceof Number || "boolean" === e) return -t;
								if ($bm_isInstanceOfArray(t)) {
									var n, i = t.length,
										a = [];
									for (n = 0; n < i; n += 1) a[n] = -t[n];
									return a
								}
								return t.propType ? t.v : -t
							}
							initialize$2(BMMath);
							var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
								easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
								easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

							function sum(t, e) {
								var n = _typeof$1(t),
									i = _typeof$1(e);
								if (isNumerable(n, t) && isNumerable(i, e) || "string" === n || "string" === i) return t + e;
								if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] += e, t;
								if (isNumerable(n, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
								if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
									for (var a = 0, r = t.length, s = e.length, o = []; a < r || a < s;)("number" == typeof t[a] || t[a] instanceof Number) && ("number" == typeof e[a] || e[a] instanceof Number) ? o[a] = t[a] + e[a] : o[a] = void 0 === e[a] ? t[a] : t[a] || e[a], a += 1;
									return o
								}
								return 0
							}
							var add = sum;

							function sub(t, e) {
								var n = _typeof$1(t),
									i = _typeof$1(e);
								if (isNumerable(n, t) && isNumerable(i, e)) return "string" === n && (t = parseInt(t, 10)), "string" === i && (e = parseInt(e, 10)), t - e;
								if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] -= e, t;
								if (isNumerable(n, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
								if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
									for (var a = 0, r = t.length, s = e.length, o = []; a < r || a < s;)("number" == typeof t[a] || t[a] instanceof Number) && ("number" == typeof e[a] || e[a] instanceof Number) ? o[a] = t[a] - e[a] : o[a] = void 0 === e[a] ? t[a] : t[a] || e[a], a += 1;
									return o
								}
								return 0
							}

							function mul(t, e) {
								var n, i, a, r = _typeof$1(t),
									s = _typeof$1(e);
								if (isNumerable(r, t) && isNumerable(s, e)) return t * e;
								if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) {
									for (n = createTypedArray("float32", a = t.length), i = 0; i < a; i += 1) n[i] = t[i] * e;
									return n
								}
								if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) {
									for (n = createTypedArray("float32", a = e.length), i = 0; i < a; i += 1) n[i] = t * e[i];
									return n
								}
								return 0
							}

							function div(t, e) {
								var n, i, a, r = _typeof$1(t),
									s = _typeof$1(e);
								if (isNumerable(r, t) && isNumerable(s, e)) return t / e;
								if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) {
									for (n = createTypedArray("float32", a = t.length), i = 0; i < a; i += 1) n[i] = t[i] / e;
									return n
								}
								if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) {
									for (n = createTypedArray("float32", a = e.length), i = 0; i < a; i += 1) n[i] = t / e[i];
									return n
								}
								return 0
							}

							function mod(t, e) {
								return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e
							}
							var $bm_sum = sum,
								$bm_sub = sub,
								$bm_mul = mul,
								$bm_div = div,
								$bm_mod = mod;

							function clamp(t, e, n) {
								if (e > n) {
									var i = n;
									n = e, e = i
								}
								return Math.min(Math.max(t, e), n)
							}

							function radiansToDegrees(t) {
								return t / degToRads
							}
							var radians_to_degrees = radiansToDegrees;

							function degreesToRadians(t) {
								return t * degToRads
							}
							var degrees_to_radians = radiansToDegrees,
								helperLengthArray = [0, 0, 0, 0, 0, 0];

							function length(t, e) {
								if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
								e || (e = helperLengthArray);
								var n, i = Math.min(t.length, e.length),
									a = 0;
								for (n = 0; n < i; n += 1) a += Math.pow(e[n] - t[n], 2);
								return Math.sqrt(a)
							}

							function normalize(t) {
								return div(t, length(t))
							}

							function rgbToHsl(t) {
								var e, n, i = t[0],
									a = t[1],
									r = t[2],
									s = Math.max(i, a, r),
									o = Math.min(i, a, r),
									l = (s + o) / 2;
								if (s === o) e = 0, n = 0;
								else {
									var c = s - o;
									switch (n = l > .5 ? c / (2 - s - o) : c / (s + o), s) {
										case i:
											e = (a - r) / c + (a < r ? 6 : 0);
											break;
										case a:
											e = (r - i) / c + 2;
											break;
										case r:
											e = (i - a) / c + 4
									}
									e /= 6
								}
								return [e, n, l, t[3]]
							}

							function hue2rgb(t, e, n) {
								return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
							}

							function hslToRgb(t) {
								var e, n, i, a = t[0],
									r = t[1],
									s = t[2];
								if (0 === r) e = s, i = s, n = s;
								else {
									var o = s < .5 ? s * (1 + r) : s + r - s * r,
										l = 2 * s - o;
									e = hue2rgb(l, o, a + 1 / 3), n = hue2rgb(l, o, a), i = hue2rgb(l, o, a - 1 / 3)
								}
								return [e, n, i, t[3]]
							}

							function linear(t, e, n, i, a) {
								if (void 0 !== i && void 0 !== a || (i = e, a = n, e = 0, n = 1), n < e) {
									var r = n;
									n = e, e = r
								}
								if (t <= e) return i;
								if (t >= n) return a;
								var s, o = n === e ? 0 : (t - e) / (n - e);
								if (!i.length) return i + (a - i) * o;
								var l = i.length,
									c = createTypedArray("float32", l);
								for (s = 0; s < l; s += 1) c[s] = i[s] + (a[s] - i[s]) * o;
								return c
							}

							function random(t, e) {
								if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
									var n, i = e.length;
									t || (t = createTypedArray("float32", i));
									var a = createTypedArray("float32", i),
										r = BMMath.random();
									for (n = 0; n < i; n += 1) a[n] = t[n] + r * (e[n] - t[n]);
									return a
								}
								return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
							}

							function createPath(t, e, n, i) {
								var a, r = t.length,
									s = shapePool.newElement();
								s.setPathData(!!i, r);
								var o, l, c = [0, 0];
								for (a = 0; a < r; a += 1) o = e && e[a] ? e[a] : c, l = n && n[a] ? n[a] : c, s.setTripleAt(t[a][0], t[a][1], l[0] + t[a][0], l[1] + t[a][1], o[0] + t[a][0], o[1] + t[a][1], a, !0);
								return s
							}

							function initiateExpression(elem, data, property) {
								function noOp(t) {
									return t
								}
								if (!elem.globalData.renderConfig.runExpressions) return noOp;
								var transform, $bm_transform, content, effect, val = data.x,
									needsVelocity = /velocity(?![\w\d])/.test(val),
									_needsRandom = -1 !== val.indexOf("random"),
									elemType = elem.data.ty,
									thisProperty = property;
								thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
									get: function() {
										return thisProperty.v
									}
								}), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
								var loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, inPoint = elem.data.ip / elem.comp.globalData.frameRate,
									outPoint = elem.data.op / elem.comp.globalData.frameRate,
									width = elem.data.sw ? elem.data.sw : 0,
									height = elem.data.sh ? elem.data.sh : 0,
									name = elem.data.nm,
									expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
									numKeys = property.kf ? data.k.length : 0,
									active = !this.data || !0 !== this.data.hd,
									wiggle = (function(t, e) {
										var n, i, a = this.pv.length ? this.pv.length : 1,
											r = createTypedArray("float32", a),
											s = Math.floor(5 * time);
										for (n = 0, i = 0; n < s;) {
											for (i = 0; i < a; i += 1) r[i] += -e + 2 * e * BMMath.random();
											n += 1
										}
										var o = 5 * time,
											l = o - Math.floor(o),
											c = createTypedArray("float32", a);
										if (a > 1) {
											for (i = 0; i < a; i += 1) c[i] = this.pv[i] + r[i] + (-e + 2 * e * BMMath.random()) * l;
											return c
										}
										return this.pv + r[0] + (-e + 2 * e * BMMath.random()) * l
									}).bind(this);

								function loopInDuration(t, e) {
									return loopIn(t, e, !0)
								}

								function loopOutDuration(t, e) {
									return loopOut(t, e, !0)
								}
								thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
								var time, velocity, value, text, textIndex, textTotal, selectorValue, comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);

								function lookAt(t, e) {
									var n = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
										i = Math.atan2(n[0], Math.sqrt(n[1] * n[1] + n[2] * n[2])) / degToRads;
									return [-Math.atan2(n[1], n[2]) / degToRads, i, 0]
								}

								function easeOut(t, e, n, i, a) {
									return applyEase(easeOutBez, t, e, n, i, a)
								}

								function easeIn(t, e, n, i, a) {
									return applyEase(easeInBez, t, e, n, i, a)
								}

								function ease(t, e, n, i, a) {
									return applyEase(easeInOutBez, t, e, n, i, a)
								}

								function applyEase(t, e, n, i, a, r) {
									void 0 === a ? (a = n, r = i) : e = (e - n) / (i - n), e > 1 ? e = 1 : e < 0 && (e = 0);
									var s = t(e);
									if ($bm_isInstanceOfArray(a)) {
										var o, l = a.length,
											c = createTypedArray("float32", l);
										for (o = 0; o < l; o += 1) c[o] = (r[o] - a[o]) * s + a[o];
										return c
									}
									return (r - a) * s + a
								}

								function nearestKey(t) {
									var e, n, i, a = data.k.length;
									if (data.k.length && "number" != typeof data.k[0]) {
										if (n = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) n = 1, i = data.k[0].t;
										else {
											for (e = 0; e < a - 1; e += 1) {
												if (t === data.k[e].t) {
													n = e + 1, i = data.k[e].t;
													break
												}
												if (t > data.k[e].t && t < data.k[e + 1].t) {
													t - data.k[e].t > data.k[e + 1].t - t ? (n = e + 2, i = data.k[e + 1].t) : (n = e + 1, i = data.k[e].t);
													break
												}
											} - 1 === n && (n = e + 1, i = data.k[e].t)
										}
									} else n = 0, i = 0;
									var r = {};
									return r.index = n, r.time = i / elem.comp.globalData.frameRate, r
								}

								function key(t) {
									if (!data.k.length || "number" == typeof data.k[0]) throw Error("The property has no keyframe at index " + t);
									t -= 1, e = {
										time: data.k[t].t / elem.comp.globalData.frameRate,
										value: []
									};
									var e, n, i, a = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
									for (i = a.length, n = 0; n < i; n += 1) e[n] = a[n], e.value[n] = a[n];
									return e
								}

								function framesToTime(t, e) {
									return e || (e = elem.comp.globalData.frameRate), t / e
								}

								function timeToFrames(t, e) {
									return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
								}

								function seedRandom(t) {
									BMMath.seedrandom(randSeed + t)
								}

								function sourceRectAtTime() {
									return elem.sourceRectAtTime()
								}

								function substring(t, e) {
									return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
								}

								function substr(t, e) {
									return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
								}

								function posterizeTime(t) {
									time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
								}
								var parent, index = elem.data.ind,
									hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
									randSeed = Math.floor(1e6 * Math.random()),
									globalData = elem.globalData;

								function executeExpression(t) {
									return value = t, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || ($bm_transform = transform = elem.layerInterface("ADBE Transform Group"), transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
								}
								return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
							}
							return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob
						}(),
						Expressions = function() {
							var t = {};
							return t.initExpressions = function(t) {
								var e = 0,
									n = [];
								t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
									e += 1
								}, t.renderer.globalData.popExpression = function() {
									0 == (e -= 1) && function() {
										var t, e = n.length;
										for (t = 0; t < e; t += 1) n[t].release();
										n.length = 0
									}()
								}, t.renderer.globalData.registerExpressionProperty = function(t) {
									-1 === n.indexOf(t) && n.push(t)
								}
							}, t.resetFrame = ExpressionManager.resetFrame, t
						}(),
						MaskManagerInterface = function() {
							function t(t, e) {
								this._mask = t, this._data = e
							}
							return Object.defineProperty(t.prototype, "maskPath", {
									get: function() {
										return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
									}
								}), Object.defineProperty(t.prototype, "maskOpacity", {
									get: function() {
										return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
									}
								}),
								function(e) {
									var n, i = createSizedArray(e.viewData.length),
										a = e.viewData.length;
									for (n = 0; n < a; n += 1) i[n] = new t(e.viewData[n], e.masksProperties[n]);
									return function(t) {
										for (n = 0; n < a;) {
											if (e.masksProperties[n].nm === t) return i[n];
											n += 1
										}
										return null
									}
								}
						}(),
						ExpressionPropertyInterface = function() {
							var t = {
									pv: 0,
									v: 0,
									mult: 1
								},
								e = {
									pv: [0, 0, 0],
									v: [0, 0, 0],
									mult: 1
								};

							function n(t, e, n) {
								Object.defineProperty(t, "velocity", {
									get: function() {
										return e.getVelocityAtTime(e.comp.currentFrame)
									}
								}), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(i) {
									if (!t.numKeys) return 0;
									var a = "";
									a = "s" in e.keyframes[i - 1] ? e.keyframes[i - 1].s : "e" in e.keyframes[i - 2] ? e.keyframes[i - 2].e : e.keyframes[i - 2].s;
									var r = "unidimensional" === n ? new Number(a) : Object.assign({}, a);
									return r.time = e.keyframes[i - 1].t / e.elem.comp.globalData.frameRate, r.value = "unidimensional" === n ? a[0] : a, r
								}, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
							}

							function i() {
								return t
							}
							return function(a) {
								return a ? "unidimensional" === a.propType ? function(e) {
									e && "pv" in e || (e = t);
									var i = 1 / e.mult,
										a = e.pv * i,
										r = new Number(a);
									return r.value = a, n(r, e, "unidimensional"),
										function() {
											return e.k && e.getValue(), a = e.v * i, r.value !== a && ((r = new Number(a)).value = a, n(r, e, "unidimensional")), r
										}
								}(a) : function(t) {
									t && "pv" in t || (t = e);
									var i = 1 / t.mult,
										a = t.data && t.data.l || t.pv.length,
										r = createTypedArray("float32", a),
										s = createTypedArray("float32", a);
									return r.value = s, n(r, t, "multidimensional"),
										function() {
											t.k && t.getValue();
											for (var e = 0; e < a; e += 1) s[e] = t.v[e] * i, r[e] = s[e];
											return r
										}
								}(a) : i
							}
						}(),
						TransformExpressionInterface = function(t) {
							var e, n, i, a;

							function r(t) {
								switch (t) {
									case "scale":
									case "Scale":
									case "ADBE Scale":
									case 6:
										return r.scale;
									case "rotation":
									case "Rotation":
									case "ADBE Rotation":
									case "ADBE Rotate Z":
									case 10:
										return r.rotation;
									case "ADBE Rotate X":
										return r.xRotation;
									case "ADBE Rotate Y":
										return r.yRotation;
									case "position":
									case "Position":
									case "ADBE Position":
									case 2:
										return r.position;
									case "ADBE Position_0":
										return r.xPosition;
									case "ADBE Position_1":
										return r.yPosition;
									case "ADBE Position_2":
										return r.zPosition;
									case "anchorPoint":
									case "AnchorPoint":
									case "Anchor Point":
									case "ADBE AnchorPoint":
									case 1:
										return r.anchorPoint;
									case "opacity":
									case "Opacity":
									case 11:
										return r.opacity;
									default:
										return null
								}
							}
							return Object.defineProperty(r, "rotation", {
								get: ExpressionPropertyInterface(t.r || t.rz)
							}), Object.defineProperty(r, "zRotation", {
								get: ExpressionPropertyInterface(t.rz || t.r)
							}), Object.defineProperty(r, "xRotation", {
								get: ExpressionPropertyInterface(t.rx)
							}), Object.defineProperty(r, "yRotation", {
								get: ExpressionPropertyInterface(t.ry)
							}), Object.defineProperty(r, "scale", {
								get: ExpressionPropertyInterface(t.s)
							}), t.p ? a = ExpressionPropertyInterface(t.p) : (e = ExpressionPropertyInterface(t.px), n = ExpressionPropertyInterface(t.py), t.pz && (i = ExpressionPropertyInterface(t.pz))), Object.defineProperty(r, "position", {
								get: function() {
									return t.p ? a() : [e(), n(), i ? i() : 0]
								}
							}), Object.defineProperty(r, "xPosition", {
								get: ExpressionPropertyInterface(t.px)
							}), Object.defineProperty(r, "yPosition", {
								get: ExpressionPropertyInterface(t.py)
							}), Object.defineProperty(r, "zPosition", {
								get: ExpressionPropertyInterface(t.pz)
							}), Object.defineProperty(r, "anchorPoint", {
								get: ExpressionPropertyInterface(t.a)
							}), Object.defineProperty(r, "opacity", {
								get: ExpressionPropertyInterface(t.o)
							}), Object.defineProperty(r, "skew", {
								get: ExpressionPropertyInterface(t.sk)
							}), Object.defineProperty(r, "skewAxis", {
								get: ExpressionPropertyInterface(t.sa)
							}), Object.defineProperty(r, "orientation", {
								get: ExpressionPropertyInterface(t.or)
							}), r
						},
						LayerExpressionInterface = function() {
							function t(t) {
								var e = new Matrix;
								return void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e), e
							}

							function e(t, e) {
								var n = this.getMatrix(e);
								return n.props[12] = 0, n.props[13] = 0, n.props[14] = 0, this.applyPoint(n, t)
							}

							function n(t, e) {
								var n = this.getMatrix(e);
								return this.applyPoint(n, t)
							}

							function i(t, e) {
								var n = this.getMatrix(e);
								return n.props[12] = 0, n.props[13] = 0, n.props[14] = 0, this.invertPoint(n, t)
							}

							function a(t, e) {
								var n = this.getMatrix(e);
								return this.invertPoint(n, t)
							}

							function r(t, e) {
								if (this._elem.hierarchy && this._elem.hierarchy.length) {
									var n, i = this._elem.hierarchy.length;
									for (n = 0; n < i; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(t)
								}
								return t.applyToPointArray(e[0], e[1], e[2] || 0)
							}

							function s(t, e) {
								if (this._elem.hierarchy && this._elem.hierarchy.length) {
									var n, i = this._elem.hierarchy.length;
									for (n = 0; n < i; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(t)
								}
								return t.inversePoint(e)
							}

							function o(t) {
								var e = new Matrix;
								if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
									var n, i = this._elem.hierarchy.length;
									for (n = 0; n < i; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(e)
								}
								return e.inversePoint(t)
							}

							function l() {
								return [1, 1, 1, 1]
							}
							return function(c) {
								function u(t) {
									switch (t) {
										case "ADBE Root Vectors Group":
										case "Contents":
										case 2:
											return u.shapeInterface;
										case 1:
										case 6:
										case "Transform":
										case "transform":
										case "ADBE Transform Group":
											return f;
										case 4:
										case "ADBE Effect Parade":
										case "effects":
										case "Effects":
											return u.effect;
										case "ADBE Text Properties":
											return u.textInterface;
										default:
											return null
									}
								}
								u.getMatrix = t, u.invertPoint = s, u.applyPoint = r, u.toWorld = n, u.toWorldVec = e, u.fromWorld = a, u.fromWorldVec = i, u.toComp = n, u.fromComp = o, u.sampleImage = l, u.sourceRectAtTime = c.sourceRectAtTime.bind(c), u._elem = c;
								var f, h = getDescriptor(f = TransformExpressionInterface(c.finalTransform.mProp), "anchorPoint");
								return Object.defineProperties(u, {
									hasParent: {
										get: function() {
											return c.hierarchy.length
										}
									},
									parent: {
										get: function() {
											return c.hierarchy[0].layerInterface
										}
									},
									rotation: getDescriptor(f, "rotation"),
									scale: getDescriptor(f, "scale"),
									position: getDescriptor(f, "position"),
									opacity: getDescriptor(f, "opacity"),
									anchorPoint: h,
									anchor_point: h,
									transform: {
										get: function() {
											return f
										}
									},
									active: {
										get: function() {
											return c.isInRange
										}
									}
								}), u.startTime = c.data.st, u.index = c.data.ind, u.source = c.data.refId, u.height = 0 === c.data.ty ? c.data.h : 100, u.width = 0 === c.data.ty ? c.data.w : 100, u.inPoint = c.data.ip / c.comp.globalData.frameRate, u.outPoint = c.data.op / c.comp.globalData.frameRate, u._name = c.data.nm, u.registerMaskInterface = function(t) {
									u.mask = new MaskManagerInterface(t, c)
								}, u.registerEffectsInterface = function(t) {
									u.effect = t
								}, u
							}
						}(),
						propertyGroupFactory = function(t, e) {
							return function(n) {
								return (n = void 0 === n ? 1 : n) <= 0 ? t : e(n - 1)
							}
						},
						PropertyInterface = function(t, e) {
							var n = {
								_name: t
							};
							return function(t) {
								return (t = void 0 === t ? 1 : t) <= 0 ? n : e(t - 1)
							}
						},
						EffectsExpressionInterface = function() {
							function t(n, i, a, r) {
								function s(t) {
									for (var e = n.ef, i = 0, a = e.length; i < a;) {
										if (t === e[i].nm || t === e[i].mn || t === e[i].ix) return 5 === e[i].ty ? c[i] : c[i]();
										i += 1
									}
									throw Error()
								}
								var o, l = propertyGroupFactory(s, a),
									c = [],
									u = n.ef.length;
								for (o = 0; o < u; o += 1) 5 === n.ef[o].ty ? c.push(t(n.ef[o], i.effectElements[o], i.effectElements[o].propertyGroup, r)) : c.push(e(i.effectElements[o], n.ef[o].ty, r, l));
								return "ADBE Color Control" === n.mn && Object.defineProperty(s, "color", {
									get: function() {
										return c[0]()
									}
								}), Object.defineProperties(s, {
									numProperties: {
										get: function() {
											return n.np
										}
									},
									_name: {
										value: n.nm
									},
									propertyGroup: {
										value: l
									}
								}), s.enabled = 0 !== n.en, s.active = s.enabled, s
							}

							function e(t, e, n, i) {
								var a = ExpressionPropertyInterface(t.p);
								return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", i)),
									function() {
										return 10 === e ? n.comp.compInterface(t.p.v) : a()
									}
							}
							return {
								createEffectsInterface: function(e, n) {
									if (e.effectsManager) {
										var i, a = [],
											r = e.data.ef,
											s = e.effectsManager.effectElements.length;
										for (i = 0; i < s; i += 1) a.push(t(r[i], e.effectsManager.effectElements[i], n, e));
										var o = e.data.ef || [],
											l = function(t) {
												for (i = 0, s = o.length; i < s;) {
													if (t === o[i].nm || t === o[i].mn || t === o[i].ix) return a[i];
													i += 1
												}
												return null
											};
										return Object.defineProperty(l, "numProperties", {
											get: function() {
												return o.length
											}
										}), l
									}
									return null
								}
							}
						}(),
						ShapePathInterface = function(t, e, n) {
							var i = e.sh;

							function a(t) {
								return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? a.path : null
							}
							var r = propertyGroupFactory(a, n);
							return i.setGroupProperty(PropertyInterface("Path", r)), Object.defineProperties(a, {
								path: {
									get: function() {
										return i.k && i.getValue(), i
									}
								},
								shape: {
									get: function() {
										return i.k && i.getValue(), i
									}
								},
								_name: {
									value: t.nm
								},
								ix: {
									value: t.ix
								},
								propertyIndex: {
									value: t.ix
								},
								mn: {
									value: t.mn
								},
								propertyGroup: {
									value: n
								}
							}), a
						},
						ShapeExpressionInterface = function() {
							function t(t, o, d) {
								var p, m = [],
									g = t ? t.length : 0;
								for (p = 0; p < g; p += 1) "gr" === t[p].ty ? m.push(e(t[p], o[p], d)) : "fl" === t[p].ty ? m.push(n(t[p], o[p], d)) : "st" === t[p].ty ? m.push(r(t[p], o[p], d)) : "tm" === t[p].ty ? m.push(s(t[p], o[p], d)) : "tr" === t[p].ty || ("el" === t[p].ty ? m.push(l(t[p], o[p], d)) : "sr" === t[p].ty ? m.push(c(t[p], o[p], d)) : "sh" === t[p].ty ? m.push(ShapePathInterface(t[p], o[p], d)) : "rc" === t[p].ty ? m.push(u(t[p], o[p], d)) : "rd" === t[p].ty ? m.push(f(t[p], o[p], d)) : "rp" === t[p].ty ? m.push(h(t[p], o[p], d)) : "gf" === t[p].ty ? m.push(i(t[p], o[p], d)) : m.push(a(t[p], o[p])));
								return m
							}

							function e(e, n, i) {
								var a = function(t) {
									switch (t) {
										case "ADBE Vectors Group":
										case "Contents":
										case 2:
											return a.content;
										default:
											return a.transform
									}
								};
								a.propertyGroup = propertyGroupFactory(a, i);
								var r = function(e, n, i) {
										var a, r = function(t) {
											for (var e = 0, n = a.length; e < n;) {
												if (a[e]._name === t || a[e].mn === t || a[e].propertyIndex === t || a[e].ix === t || a[e].ind === t) return a[e];
												e += 1
											}
											return "number" == typeof t ? a[t - 1] : null
										};
										r.propertyGroup = propertyGroupFactory(r, i), a = t(e.it, n.it, r.propertyGroup), r.numProperties = a.length;
										var s = o(e.it[e.it.length - 1], n.it[n.it.length - 1], r.propertyGroup);
										return r.transform = s, r.propertyIndex = e.cix, r._name = e.nm, r
									}(e, n, a.propertyGroup),
									s = o(e.it[e.it.length - 1], n.it[n.it.length - 1], a.propertyGroup);
								return a.content = r, a.transform = s, Object.defineProperty(a, "_name", {
									get: function() {
										return e.nm
									}
								}), a.numProperties = e.np, a.propertyIndex = e.ix, a.nm = e.nm, a.mn = e.mn, a
							}

							function n(t, e, n) {
								function i(t) {
									return "Color" === t || "color" === t ? i.color : "Opacity" === t || "opacity" === t ? i.opacity : null
								}
								return Object.defineProperties(i, {
									color: {
										get: ExpressionPropertyInterface(e.c)
									},
									opacity: {
										get: ExpressionPropertyInterface(e.o)
									},
									_name: {
										value: t.nm
									},
									mn: {
										value: t.mn
									}
								}), e.c.setGroupProperty(PropertyInterface("Color", n)), e.o.setGroupProperty(PropertyInterface("Opacity", n)), i
							}

							function i(t, e, n) {
								function i(t) {
									return "Start Point" === t || "start point" === t ? i.startPoint : "End Point" === t || "end point" === t ? i.endPoint : "Opacity" === t || "opacity" === t ? i.opacity : null
								}
								return Object.defineProperties(i, {
									startPoint: {
										get: ExpressionPropertyInterface(e.s)
									},
									endPoint: {
										get: ExpressionPropertyInterface(e.e)
									},
									opacity: {
										get: ExpressionPropertyInterface(e.o)
									},
									type: {
										get: function() {
											return "a"
										}
									},
									_name: {
										value: t.nm
									},
									mn: {
										value: t.mn
									}
								}), e.s.setGroupProperty(PropertyInterface("Start Point", n)), e.e.setGroupProperty(PropertyInterface("End Point", n)), e.o.setGroupProperty(PropertyInterface("Opacity", n)), i
							}

							function a() {
								return function() {
									return null
								}
							}

							function r(t, e, n) {
								var i, a = propertyGroupFactory(c, n),
									r = propertyGroupFactory(l, a);

								function s(n) {
									Object.defineProperty(l, t.d[n].nm, {
										get: ExpressionPropertyInterface(e.d.dataProps[n].p)
									})
								}
								var o = t.d ? t.d.length : 0,
									l = {};
								for (i = 0; i < o; i += 1) s(i), e.d.dataProps[i].p.setGroupProperty(r);

								function c(t) {
									return "Color" === t || "color" === t ? c.color : "Opacity" === t || "opacity" === t ? c.opacity : "Stroke Width" === t || "stroke width" === t ? c.strokeWidth : null
								}
								return Object.defineProperties(c, {
									color: {
										get: ExpressionPropertyInterface(e.c)
									},
									opacity: {
										get: ExpressionPropertyInterface(e.o)
									},
									strokeWidth: {
										get: ExpressionPropertyInterface(e.w)
									},
									dash: {
										get: function() {
											return l
										}
									},
									_name: {
										value: t.nm
									},
									mn: {
										value: t.mn
									}
								}), e.c.setGroupProperty(PropertyInterface("Color", a)), e.o.setGroupProperty(PropertyInterface("Opacity", a)), e.w.setGroupProperty(PropertyInterface("Stroke Width", a)), c
							}

							function s(t, e, n) {
								function i(e) {
									return e === t.e.ix || "End" === e || "end" === e ? i.end : e === t.s.ix ? i.start : e === t.o.ix ? i.offset : null
								}
								var a = propertyGroupFactory(i, n);
								return i.propertyIndex = t.ix, e.s.setGroupProperty(PropertyInterface("Start", a)), e.e.setGroupProperty(PropertyInterface("End", a)), e.o.setGroupProperty(PropertyInterface("Offset", a)), i.propertyIndex = t.ix, i.propertyGroup = n, Object.defineProperties(i, {
									start: {
										get: ExpressionPropertyInterface(e.s)
									},
									end: {
										get: ExpressionPropertyInterface(e.e)
									},
									offset: {
										get: ExpressionPropertyInterface(e.o)
									},
									_name: {
										value: t.nm
									}
								}), i.mn = t.mn, i
							}

							function o(t, e, n) {
								function i(e) {
									return t.a.ix === e || "Anchor Point" === e ? i.anchorPoint : t.o.ix === e || "Opacity" === e ? i.opacity : t.p.ix === e || "Position" === e ? i.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? i.rotation : t.s.ix === e || "Scale" === e ? i.scale : t.sk && t.sk.ix === e || "Skew" === e ? i.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? i.skewAxis : null
								}
								var a = propertyGroupFactory(i, n);
								return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", a)), e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", a)), e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", a)), e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", a)), e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", a)), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", a)), e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", a))), e.transform.op.setGroupProperty(PropertyInterface("Opacity", a)), Object.defineProperties(i, {
									opacity: {
										get: ExpressionPropertyInterface(e.transform.mProps.o)
									},
									position: {
										get: ExpressionPropertyInterface(e.transform.mProps.p)
									},
									anchorPoint: {
										get: ExpressionPropertyInterface(e.transform.mProps.a)
									},
									scale: {
										get: ExpressionPropertyInterface(e.transform.mProps.s)
									},
									rotation: {
										get: ExpressionPropertyInterface(e.transform.mProps.r)
									},
									skew: {
										get: ExpressionPropertyInterface(e.transform.mProps.sk)
									},
									skewAxis: {
										get: ExpressionPropertyInterface(e.transform.mProps.sa)
									},
									_name: {
										value: t.nm
									}
								}), i.ty = "tr", i.mn = t.mn, i.propertyGroup = n, i
							}

							function l(t, e, n) {
								function i(e) {
									return t.p.ix === e ? i.position : t.s.ix === e ? i.size : null
								}
								var a = propertyGroupFactory(i, n);
								i.propertyIndex = t.ix;
								var r = "tm" === e.sh.ty ? e.sh.prop : e.sh;
								return r.s.setGroupProperty(PropertyInterface("Size", a)), r.p.setGroupProperty(PropertyInterface("Position", a)), Object.defineProperties(i, {
									size: {
										get: ExpressionPropertyInterface(r.s)
									},
									position: {
										get: ExpressionPropertyInterface(r.p)
									},
									_name: {
										value: t.nm
									}
								}), i.mn = t.mn, i
							}

							function c(t, e, n) {
								function i(e) {
									return t.p.ix === e ? i.position : t.r.ix === e ? i.rotation : t.pt.ix === e ? i.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? i.outerRadius : t.os.ix === e ? i.outerRoundness : t.ir && (t.ir.ix === e || "ADBE Vector Star Inner Radius" === e) ? i.innerRadius : t.is && t.is.ix === e ? i.innerRoundness : null
								}
								var a = propertyGroupFactory(i, n),
									r = "tm" === e.sh.ty ? e.sh.prop : e.sh;
								return i.propertyIndex = t.ix, r.or.setGroupProperty(PropertyInterface("Outer Radius", a)), r.os.setGroupProperty(PropertyInterface("Outer Roundness", a)), r.pt.setGroupProperty(PropertyInterface("Points", a)), r.p.setGroupProperty(PropertyInterface("Position", a)), r.r.setGroupProperty(PropertyInterface("Rotation", a)), t.ir && (r.ir.setGroupProperty(PropertyInterface("Inner Radius", a)), r.is.setGroupProperty(PropertyInterface("Inner Roundness", a))), Object.defineProperties(i, {
									position: {
										get: ExpressionPropertyInterface(r.p)
									},
									rotation: {
										get: ExpressionPropertyInterface(r.r)
									},
									points: {
										get: ExpressionPropertyInterface(r.pt)
									},
									outerRadius: {
										get: ExpressionPropertyInterface(r.or)
									},
									outerRoundness: {
										get: ExpressionPropertyInterface(r.os)
									},
									innerRadius: {
										get: ExpressionPropertyInterface(r.ir)
									},
									innerRoundness: {
										get: ExpressionPropertyInterface(r.is)
									},
									_name: {
										value: t.nm
									}
								}), i.mn = t.mn, i
							}

							function u(t, e, n) {
								function i(e) {
									return t.p.ix === e ? i.position : t.r.ix === e ? i.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? i.size : null
								}
								var a = propertyGroupFactory(i, n),
									r = "tm" === e.sh.ty ? e.sh.prop : e.sh;
								return i.propertyIndex = t.ix, r.p.setGroupProperty(PropertyInterface("Position", a)), r.s.setGroupProperty(PropertyInterface("Size", a)), r.r.setGroupProperty(PropertyInterface("Rotation", a)), Object.defineProperties(i, {
									position: {
										get: ExpressionPropertyInterface(r.p)
									},
									roundness: {
										get: ExpressionPropertyInterface(r.r)
									},
									size: {
										get: ExpressionPropertyInterface(r.s)
									},
									_name: {
										value: t.nm
									}
								}), i.mn = t.mn, i
							}

							function f(t, e, n) {
								function i(e) {
									return t.r.ix === e || "Round Corners 1" === e ? i.radius : null
								}
								var a = propertyGroupFactory(i, n),
									r = e;
								return i.propertyIndex = t.ix, r.rd.setGroupProperty(PropertyInterface("Radius", a)), Object.defineProperties(i, {
									radius: {
										get: ExpressionPropertyInterface(r.rd)
									},
									_name: {
										value: t.nm
									}
								}), i.mn = t.mn, i
							}

							function h(t, e, n) {
								function i(e) {
									return t.c.ix === e || "Copies" === e ? i.copies : t.o.ix === e || "Offset" === e ? i.offset : null
								}
								var a = propertyGroupFactory(i, n),
									r = e;
								return i.propertyIndex = t.ix, r.c.setGroupProperty(PropertyInterface("Copies", a)), r.o.setGroupProperty(PropertyInterface("Offset", a)), Object.defineProperties(i, {
									copies: {
										get: ExpressionPropertyInterface(r.c)
									},
									offset: {
										get: ExpressionPropertyInterface(r.o)
									},
									_name: {
										value: t.nm
									}
								}), i.mn = t.mn, i
							}
							return function(e, n, i) {
								var a;

								function r(t) {
									if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? i : a[t - 1];
									for (var e = 0, n = a.length; e < n;) {
										if (a[e]._name === t) return a[e];
										e += 1
									}
									return null
								}
								return r.propertyGroup = propertyGroupFactory(r, function() {
									return i
								}), a = t(e, n, r.propertyGroup), r.numProperties = a.length, r._name = "Contents", r
							}
						}(),
						TextExpressionInterface = function(t) {
							var e;

							function n(t) {
								return "ADBE Text Document" === t ? n.sourceText : null
							}
							return Object.defineProperty(n, "sourceText", {
								get: function() {
									t.textProperty.getValue();
									var n = t.textProperty.currentData.t;
									return e && n === e.value || ((e = new String(n)).value = n || new String(n), Object.defineProperty(e, "style", {
										get: function() {
											return {
												fillColor: t.textProperty.currentData.fc
											}
										}
									})), e
								}
							}), n
						};

					function _typeof(t) {
						return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
							return typeof t
						} : function(t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
						})(t)
					}
					var dataInterfaceFactory, FootageInterface = (dataInterfaceFactory = function(t) {
							function e(t) {
								return "Outline" === t ? e.outlineInterface() : null
							}
							return e._name = "Outline", e.outlineInterface = function(t) {
								var e = "",
									n = t.getFootageData();

								function i(t) {
									if (n[t]) return e = t, "object" === _typeof(n = n[t]) ? i : n;
									var a = t.indexOf(e);
									if (-1 !== a) {
										var r = parseInt(t.substr(a + e.length), 10);
										return "object" === _typeof(n = n[r]) ? i : n
									}
									return ""
								}
								return function() {
									return e = "", n = t.getFootageData(), i
								}
							}(t), e
						}, function(t) {
							function e(t) {
								return "Data" === t ? e.dataInterface : null
							}
							return e._name = "Data", e.dataInterface = dataInterfaceFactory(t), e
						}),
						interfaces = {
							layer: LayerExpressionInterface,
							effects: EffectsExpressionInterface,
							comp: CompExpressionInterface,
							shape: ShapeExpressionInterface,
							text: TextExpressionInterface,
							footage: FootageInterface
						};

					function getInterface(t) {
						return interfaces[t] || null
					}
					var expressionHelpers = {
						searchExpressions: function(t, e, n) {
							e.x && (n.k = !0, n.x = !0, n.initiateExpression = ExpressionManager.initiateExpression, n.effectsSequence.push(n.initiateExpression(t, e, n).bind(n)))
						},
						getSpeedAtTime: function(t) {
							var e, n = this.getValueAtTime(t),
								i = this.getValueAtTime(t + -.01),
								a = 0;
							if (n.length) {
								for (e = 0; e < n.length; e += 1) a += Math.pow(i[e] - n[e], 2);
								a = 100 * Math.sqrt(a)
							} else a = 0;
							return a
						},
						getVelocityAtTime: function(t) {
							if (void 0 !== this.vel) return this.vel;
							var e, n, i = -.001,
								a = this.getValueAtTime(t),
								r = this.getValueAtTime(t + i);
							if (a.length)
								for (e = createTypedArray("float32", a.length), n = 0; n < a.length; n += 1) e[n] = (r[n] - a[n]) / i;
							else e = (r - a) / i;
							return e
						},
						getValueAtTime: function(t) {
							return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
						},
						getStaticValueAtTime: function() {
							return this.pv
						},
						setGroupProperty: function(t) {
							this.propertyGroup = t
						}
					};

					function addPropertyDecorator() {
						function t(t, e, n) {
							if (!this.k || !this.keyframes) return this.pv;
							t = t ? t.toLowerCase() : "";
							var i, a, r, s, o, l = this.comp.renderedFrame,
								c = this.keyframes,
								u = c[c.length - 1].t;
							if (l <= u) return this.pv;
							if (n ? a = u - (i = e ? Math.abs(u - this.elem.comp.globalData.frameRate * e) : Math.max(0, u - this.elem.data.ip)) : ((!e || e > c.length - 1) && (e = c.length - 1), i = u - (a = c[c.length - 1 - e].t)), "pingpong" === t) {
								if (Math.floor((l - a) / i) % 2 != 0) return this.getValueAtTime((i - (l - a) % i + a) / this.comp.globalData.frameRate, 0)
							} else {
								if ("offset" === t) {
									var f = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
										h = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
										d = this.getValueAtTime(((l - a) % i + a) / this.comp.globalData.frameRate, 0),
										p = Math.floor((l - a) / i);
									if (this.pv.length) {
										for (s = (o = Array(f.length)).length, r = 0; r < s; r += 1) o[r] = (h[r] - f[r]) * p + d[r];
										return o
									}
									return (h - f) * p + d
								}
								if ("continue" === t) {
									var m = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
										g = this.getValueAtTime((u - .001) / this.comp.globalData.frameRate, 0);
									if (this.pv.length) {
										for (s = (o = Array(m.length)).length, r = 0; r < s; r += 1) o[r] = m[r] + (m[r] - g[r]) * ((l - u) / this.comp.globalData.frameRate) / 5e-4;
										return o
									}
									return m + (l - u) / .001 * (m - g)
								}
							}
							return this.getValueAtTime(((l - a) % i + a) / this.comp.globalData.frameRate, 0)
						}

						function e(t, e, n) {
							if (!this.k) return this.pv;
							t = t ? t.toLowerCase() : "";
							var i, a, r, s, o, l = this.comp.renderedFrame,
								c = this.keyframes,
								u = c[0].t;
							if (l >= u) return this.pv;
							if (n ? a = u + (i = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - u)) : ((!e || e > c.length - 1) && (e = c.length - 1), i = (a = c[e].t) - u), "pingpong" === t) {
								if (Math.floor((u - l) / i) % 2 == 0) return this.getValueAtTime(((u - l) % i + u) / this.comp.globalData.frameRate, 0)
							} else {
								if ("offset" === t) {
									var f = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
										h = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
										d = this.getValueAtTime((i - (u - l) % i + u) / this.comp.globalData.frameRate, 0),
										p = Math.floor((u - l) / i) + 1;
									if (this.pv.length) {
										for (s = (o = Array(f.length)).length, r = 0; r < s; r += 1) o[r] = d[r] - (h[r] - f[r]) * p;
										return o
									}
									return d - (h - f) * p
								}
								if ("continue" === t) {
									var m = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
										g = this.getValueAtTime((u + .001) / this.comp.globalData.frameRate, 0);
									if (this.pv.length) {
										for (s = (o = Array(m.length)).length, r = 0; r < s; r += 1) o[r] = m[r] + (m[r] - g[r]) * (u - l) / .001;
										return o
									}
									return m + (m - g) * (u - l) / .001
								}
							}
							return this.getValueAtTime((i - ((u - l) % i + u)) / this.comp.globalData.frameRate, 0)
						}

						function n(t, e) {
							if (!this.k || (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1)) return this.pv;
							var n, i, a = this.comp.renderedFrame / this.comp.globalData.frameRate,
								r = a - t,
								s = e > 1 ? (a + t - r) / (e - 1) : 1,
								o = 0,
								l = 0;
							for (n = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
								if (i = this.getValueAtTime(r + o * s), this.pv.length)
									for (l = 0; l < this.pv.length; l += 1) n[l] += i[l];
								else n += i;
								o += 1
							}
							if (this.pv.length)
								for (l = 0; l < this.pv.length; l += 1) n[l] /= e;
							else n /= e;
							return n
						}

						function i(t) {
							this._transformCachingAtTime || (this._transformCachingAtTime = {
								v: new Matrix
							});
							var e = this._transformCachingAtTime.v;
							if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
								var n = this.a.getValueAtTime(t);
								e.translate(-n[0] * this.a.mult, -n[1] * this.a.mult, n[2] * this.a.mult)
							}
							if (this.appliedTransformations < 2) {
								var i = this.s.getValueAtTime(t);
								e.scale(i[0] * this.s.mult, i[1] * this.s.mult, i[2] * this.s.mult)
							}
							if (this.sk && this.appliedTransformations < 3) {
								var a = this.sk.getValueAtTime(t),
									r = this.sa.getValueAtTime(t);
								e.skewFromAxis(-a * this.sk.mult, r * this.sa.mult)
							}
							if (this.r && this.appliedTransformations < 4) {
								var s = this.r.getValueAtTime(t);
								e.rotate(-s * this.r.mult)
							} else if (!this.r && this.appliedTransformations < 4) {
								var o = this.rz.getValueAtTime(t),
									l = this.ry.getValueAtTime(t),
									c = this.rx.getValueAtTime(t),
									u = this.or.getValueAtTime(t);
								e.rotateZ(-o * this.rz.mult).rotateY(l * this.ry.mult).rotateX(c * this.rx.mult).rotateZ(-u[2] * this.or.mult).rotateY(u[1] * this.or.mult).rotateX(u[0] * this.or.mult)
							}
							if (this.data.p && this.data.p.s) {
								var f = this.px.getValueAtTime(t),
									h = this.py.getValueAtTime(t);
								if (this.data.p.z) {
									var d = this.pz.getValueAtTime(t);
									e.translate(f * this.px.mult, h * this.py.mult, -d * this.pz.mult)
								} else e.translate(f * this.px.mult, h * this.py.mult, 0)
							} else {
								var p = this.p.getValueAtTime(t);
								e.translate(p[0] * this.p.mult, p[1] * this.p.mult, -p[2] * this.p.mult)
							}
							return e
						}

						function a() {
							return this.v.clone(new Matrix)
						}
						var r = TransformPropertyFactory.getTransformProperty;
						TransformPropertyFactory.getTransformProperty = function(t, e, n) {
							var s = r(t, e, n);
							return s.dynamicProperties.length ? s.getValueAtTime = i.bind(s) : s.getValueAtTime = a.bind(s), s.setGroupProperty = expressionHelpers.setGroupProperty, s
						};
						var s = PropertyFactory.getProp;
						PropertyFactory.getProp = function(i, a, r, o, l) {
							var c = s(i, a, r, o, l);
							c.kf ? c.getValueAtTime = expressionHelpers.getValueAtTime.bind(c) : c.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(c), c.setGroupProperty = expressionHelpers.setGroupProperty, c.loopOut = t, c.loopIn = e, c.smooth = n, c.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(c), c.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(c), c.numKeys = 1 === a.a ? a.k.length : 0, c.propertyIndex = a.ix;
							var u = 0;
							return 0 !== r && (u = createTypedArray("float32", 1 === a.a ? a.k[0].s.length : a.k.length)), c._cachingAtTime = {
								lastFrame: initialDefaultFrame,
								lastIndex: 0,
								value: u
							}, expressionHelpers.searchExpressions(i, a, c), c.k && l.addDynamicProperty(c), c
						};
						var o = ShapePropertyFactory.getConstructorFunction(),
							l = ShapePropertyFactory.getKeyframedConstructorFunction();

						function c() {}
						c.prototype = {
							vertices: function(t, e) {
								this.k && this.getValue();
								var n, i = this.v;
								void 0 !== e && (i = this.getValueAtTime(e, 0));
								var a = i._length,
									r = i[t],
									s = i.v,
									o = createSizedArray(a);
								for (n = 0; n < a; n += 1) o[n] = "i" === t || "o" === t ? [r[n][0] - s[n][0], r[n][1] - s[n][1]] : [r[n][0], r[n][1]];
								return o
							},
							points: function(t) {
								return this.vertices("v", t)
							},
							inTangents: function(t) {
								return this.vertices("i", t)
							},
							outTangents: function(t) {
								return this.vertices("o", t)
							},
							isClosed: function() {
								return this.v.c
							},
							pointOnPath: function(t, e) {
								var n = this.v;
								void 0 !== e && (n = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(n));
								for (var i, a = this._segmentsLength, r = a.lengths, s = a.totalLength * t, o = 0, l = r.length, c = 0; o < l;) {
									if (c + r[o].addedLength > s) {
										var u = o,
											f = n.c && o === l - 1 ? 0 : o + 1,
											h = (s - c) / r[o].addedLength;
										i = bez.getPointInSegment(n.v[u], n.v[f], n.o[u], n.i[f], h, r[o]);
										break
									}
									c += r[o].addedLength, o += 1
								}
								return i || (i = n.c ? [n.v[0][0], n.v[0][1]] : [n.v[n._length - 1][0], n.v[n._length - 1][1]]), i
							},
							vectorOnPath: function(t, e, n) {
								1 == t ? t = this.v.c : 0 == t && (t = .999);
								var i = this.pointOnPath(t, e),
									a = this.pointOnPath(t + .001, e),
									r = a[0] - i[0],
									s = a[1] - i[1],
									o = Math.sqrt(Math.pow(r, 2) + Math.pow(s, 2));
								return 0 === o ? [0, 0] : "tangent" === n ? [r / o, s / o] : [-s / o, r / o]
							},
							tangentOnPath: function(t, e) {
								return this.vectorOnPath(t, e, "tangent")
							},
							normalOnPath: function(t, e) {
								return this.vectorOnPath(t, e, "normal")
							},
							setGroupProperty: expressionHelpers.setGroupProperty,
							getValueAtTime: expressionHelpers.getStaticValueAtTime
						}, extendPrototype([c], o), extendPrototype([c], l), l.prototype.getValueAtTime = function(t) {
							return this._cachingAtTime || (this._cachingAtTime = {
								shapeValue: shapePool.clone(this.pv),
								lastIndex: 0,
								lastTime: initialDefaultFrame
							}), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
						}, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
						var u = ShapePropertyFactory.getShapeProp;
						ShapePropertyFactory.getShapeProp = function(t, e, n, i, a) {
							var r = u(t, e, n, i, a);
							return r.propertyIndex = e.ix, r.lock = !1, 3 === n ? expressionHelpers.searchExpressions(t, e.pt, r) : 4 === n && expressionHelpers.searchExpressions(t, e.ks, r), r.k && t.addDynamicProperty(r), r
						}
					}

					function initialize$1() {
						addPropertyDecorator()
					}

					function addDecorator() {
						TextProperty.prototype.getExpressionValue = function(t, e) {
							var n = this.calculateExpression(e);
							if (t.t !== n) {
								var i = {};
								return this.copyData(i, t), i.t = n.toString(), i.__complete = !1, i
							}
							return t
						}, TextProperty.prototype.searchProperty = function() {
							var t = this.searchKeyframes(),
								e = this.searchExpressions();
							return this.kf = t || e, this.kf
						}, TextProperty.prototype.searchExpressions = function() {
							return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
						}
					}

					function initialize() {
						addDecorator()
					}

					function SVGComposableEffect() {}
					SVGComposableEffect.prototype = {
						createMergeNode: function(t, e) {
							var n, i, a = createNS("feMerge");
							for (a.setAttribute("result", t), i = 0; i < e.length; i += 1)(n = createNS("feMergeNode")).setAttribute("in", e[i]), a.appendChild(n), a.appendChild(n);
							return a
						}
					};
					var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

					function SVGTintFilter(t, e, n, i, a) {
						this.filterManager = e;
						var r = createNS("feColorMatrix");
						r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = r, r.setAttribute("result", i + "_tint_1"), t.appendChild(r), (r = createNS("feColorMatrix")).setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), r.setAttribute("result", i + "_tint_2"), t.appendChild(r), this.matrixFilter = r;
						var s = this.createMergeNode(i, [a, i + "_tint_1", i + "_tint_2"]);
						t.appendChild(s)
					}

					function SVGFillFilter(t, e, n, i) {
						this.filterManager = e;
						var a = createNS("feColorMatrix");
						a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", i), t.appendChild(a), this.matrixFilter = a
					}

					function SVGStrokeEffect(t, e, n) {
						this.initialized = !1, this.filterManager = e, this.elem = n, this.paths = []
					}

					function SVGTritoneFilter(t, e, n, i) {
						this.filterManager = e;
						var a = createNS("feColorMatrix");
						a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(a);
						var r = createNS("feComponentTransfer");
						r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("result", i), this.matrixFilter = r;
						var s = createNS("feFuncR");
						s.setAttribute("type", "table"), r.appendChild(s), this.feFuncR = s;
						var o = createNS("feFuncG");
						o.setAttribute("type", "table"), r.appendChild(o), this.feFuncG = o;
						var l = createNS("feFuncB");
						l.setAttribute("type", "table"), r.appendChild(l), this.feFuncB = l, t.appendChild(r)
					}

					function SVGProLevelsFilter(t, e, n, i) {
						this.filterManager = e;
						var a = this.filterManager.effectElements,
							r = createNS("feComponentTransfer");
						(a[10].p.k || 0 !== a[10].p.v || a[11].p.k || 1 !== a[11].p.v || a[12].p.k || 1 !== a[12].p.v || a[13].p.k || 0 !== a[13].p.v || a[14].p.k || 1 !== a[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", r)), (a[17].p.k || 0 !== a[17].p.v || a[18].p.k || 1 !== a[18].p.v || a[19].p.k || 1 !== a[19].p.v || a[20].p.k || 0 !== a[20].p.v || a[21].p.k || 1 !== a[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", r)), (a[24].p.k || 0 !== a[24].p.v || a[25].p.k || 1 !== a[25].p.v || a[26].p.k || 1 !== a[26].p.v || a[27].p.k || 0 !== a[27].p.v || a[28].p.k || 1 !== a[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", r)), (a[31].p.k || 0 !== a[31].p.v || a[32].p.k || 1 !== a[32].p.v || a[33].p.k || 1 !== a[33].p.v || a[34].p.k || 0 !== a[34].p.v || a[35].p.k || 1 !== a[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", r)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r)), (a[3].p.k || 0 !== a[3].p.v || a[4].p.k || 1 !== a[4].p.v || a[5].p.k || 1 !== a[5].p.v || a[6].p.k || 0 !== a[6].p.v || a[7].p.k || 1 !== a[7].p.v) && ((r = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("result", i), t.appendChild(r), this.feFuncRComposed = this.createFeFunc("feFuncR", r), this.feFuncGComposed = this.createFeFunc("feFuncG", r), this.feFuncBComposed = this.createFeFunc("feFuncB", r))
					}

					function SVGDropShadowEffect(t, e, n, i, a) {
						var r = e.container.globalData.renderConfig.filterSize,
							s = e.data.fs || r;
						t.setAttribute("x", s.x || r.x), t.setAttribute("y", s.y || r.y), t.setAttribute("width", s.width || r.width), t.setAttribute("height", s.height || r.height), this.filterManager = e;
						var o = createNS("feGaussianBlur");
						o.setAttribute("in", "SourceAlpha"), o.setAttribute("result", i + "_drop_shadow_1"), o.setAttribute("stdDeviation", "0"), this.feGaussianBlur = o, t.appendChild(o);
						var l = createNS("feOffset");
						l.setAttribute("dx", "25"), l.setAttribute("dy", "0"), l.setAttribute("in", i + "_drop_shadow_1"), l.setAttribute("result", i + "_drop_shadow_2"), this.feOffset = l, t.appendChild(l);
						var c = createNS("feFlood");
						c.setAttribute("flood-color", "#00ff00"), c.setAttribute("flood-opacity", "1"), c.setAttribute("result", i + "_drop_shadow_3"), this.feFlood = c, t.appendChild(c);
						var u = createNS("feComposite");
						u.setAttribute("in", i + "_drop_shadow_3"), u.setAttribute("in2", i + "_drop_shadow_2"), u.setAttribute("operator", "in"), u.setAttribute("result", i + "_drop_shadow_4"), t.appendChild(u);
						var f = this.createMergeNode(i, [i + "_drop_shadow_4", a]);
						t.appendChild(f)
					}
					extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(t) {
						if (t || this.filterManager._mdf) {
							var e = this.filterManager.effectElements[0].p.v,
								n = this.filterManager.effectElements[1].p.v,
								i = this.filterManager.effectElements[2].p.v / 100;
							this.linearFilter.setAttribute("values", linearFilterValue + " " + i + " 0"), this.matrixFilter.setAttribute("values", n[0] - e[0] + " 0 0 0 " + e[0] + " " + (n[1] - e[1]) + " 0 0 0 " + e[1] + " " + (n[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0")
						}
					}, SVGFillFilter.prototype.renderFrame = function(t) {
						if (t || this.filterManager._mdf) {
							var e = this.filterManager.effectElements[2].p.v,
								n = this.filterManager.effectElements[6].p.v;
							this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + n + " 0")
						}
					}, SVGStrokeEffect.prototype.initialize = function() {
						var t, e, n, i, a = this.elem.layerElement.children || this.elem.layerElement.childNodes;
						for (1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length, n = 0) : i = (n = this.filterManager.effectElements[0].p.v - 1) + 1, (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); n < i; n += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
							p: t,
							m: n
						});
						if (3 === this.filterManager.effectElements[10].p.v) {
							var r = createNS("mask"),
								s = createElementID();
							r.setAttribute("id", s), r.setAttribute("mask-type", "alpha"), r.appendChild(e), this.elem.globalData.defs.appendChild(r);
							var o = createNS("g");
							for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + s + ")"); a[0];) o.appendChild(a[0]);
							this.elem.layerElement.appendChild(o), this.masker = r, e.setAttribute("stroke", "#fff")
						} else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
							if (2 === this.filterManager.effectElements[10].p.v)
								for (a = this.elem.layerElement.children || this.elem.layerElement.childNodes; a.length;) this.elem.layerElement.removeChild(a[0]);
							this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
						}
						this.initialized = !0, this.pathMasker = e
					}, SVGStrokeEffect.prototype.renderFrame = function(t) {
						this.initialized || this.initialize();
						var e, n, i, a = this.paths.length;
						for (e = 0; e < a; e += 1)
							if (-1 !== this.paths[e].m && (n = this.elem.maskManager.viewData[this.paths[e].m], i = this.paths[e].p, (t || this.filterManager._mdf || n.prop._mdf) && i.setAttribute("d", n.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || n.prop._mdf)) {
								if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
									var r = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
										s = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
										o = i.getTotalLength();
									l = "0 0 0 " + o * r + " ";
									var l, c, u = Math.floor(o * (s - r) / (1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01));
									for (c = 0; c < u; c += 1) l += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
									l += "0 " + 10 * o + " 0 0"
								} else l = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
								i.setAttribute("stroke-dasharray", l)
							} if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
							var f = this.filterManager.effectElements[3].p.v;
							this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * f[0]) + "," + bmFloor(255 * f[1]) + "," + bmFloor(255 * f[2]) + ")")
						}
					}, SVGTritoneFilter.prototype.renderFrame = function(t) {
						if (t || this.filterManager._mdf) {
							var e = this.filterManager.effectElements[0].p.v,
								n = this.filterManager.effectElements[1].p.v,
								i = this.filterManager.effectElements[2].p.v,
								a = i[0] + " " + n[0] + " " + e[0],
								r = i[1] + " " + n[1] + " " + e[1],
								s = i[2] + " " + n[2] + " " + e[2];
							this.feFuncR.setAttribute("tableValues", a), this.feFuncG.setAttribute("tableValues", r), this.feFuncB.setAttribute("tableValues", s)
						}
					}, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
						var n = createNS(t);
						return n.setAttribute("type", "table"), e.appendChild(n), n
					}, SVGProLevelsFilter.prototype.getTableValue = function(t, e, n, i, a) {
						for (var r, s, o = 0, l = Math.min(t, e), c = Math.max(t, e), u = Array.call(null, {
								length: 256
							}), f = 0, h = a - i, d = e - t; o <= 256;) s = (r = o / 256) <= l ? d < 0 ? a : i : r >= c ? d < 0 ? i : a : i + h * Math.pow((r - t) / d, 1 / n), u[f] = s, f += 1, o += 256 / 255;
						return u.join(" ")
					}, SVGProLevelsFilter.prototype.renderFrame = function(t) {
						if (t || this.filterManager._mdf) {
							var e, n = this.filterManager.effectElements;
							this.feFuncRComposed && (t || n[3].p._mdf || n[4].p._mdf || n[5].p._mdf || n[6].p._mdf || n[7].p._mdf) && (e = this.getTableValue(n[3].p.v, n[4].p.v, n[5].p.v, n[6].p.v, n[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || n[10].p._mdf || n[11].p._mdf || n[12].p._mdf || n[13].p._mdf || n[14].p._mdf) && (e = this.getTableValue(n[10].p.v, n[11].p.v, n[12].p.v, n[13].p.v, n[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || n[17].p._mdf || n[18].p._mdf || n[19].p._mdf || n[20].p._mdf || n[21].p._mdf) && (e = this.getTableValue(n[17].p.v, n[18].p.v, n[19].p.v, n[20].p.v, n[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || n[24].p._mdf || n[25].p._mdf || n[26].p._mdf || n[27].p._mdf || n[28].p._mdf) && (e = this.getTableValue(n[24].p.v, n[25].p.v, n[26].p.v, n[27].p.v, n[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || n[31].p._mdf || n[32].p._mdf || n[33].p._mdf || n[34].p._mdf || n[35].p._mdf) && (e = this.getTableValue(n[31].p.v, n[32].p.v, n[33].p.v, n[34].p.v, n[35].p.v), this.feFuncA.setAttribute("tableValues", e))
						}
					}, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(t) {
						if (t || this.filterManager._mdf) {
							if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
								var e = this.filterManager.effectElements[0].p.v;
								this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
							}
							if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
								var n = this.filterManager.effectElements[3].p.v,
									i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
									a = n * Math.cos(i),
									r = n * Math.sin(i);
								this.feOffset.setAttribute("dx", a), this.feOffset.setAttribute("dy", r)
							}
						}
					};
					var _svgMatteSymbols = [];

					function SVGMatte3Effect(t, e, n) {
						this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = n, n.matteElement = createNS("g"), n.matteElement.appendChild(n.layerElement), n.matteElement.appendChild(n.transformedElement), n.baseElement = n.matteElement
					}

					function SVGGaussianBlurEffect(t, e, n, i) {
						t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
						var a = createNS("feGaussianBlur");
						a.setAttribute("result", i), t.appendChild(a), this.feGaussianBlur = a
					}

					function TransformEffect() {}

					function SVGTransformEffect(t, e) {
						this.init(e)
					}

					function CVTransformEffect(t) {
						this.init(t)
					}
					return SVGMatte3Effect.prototype.findSymbol = function(t) {
						for (var e = 0, n = _svgMatteSymbols.length; e < n;) {
							if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
							e += 1
						}
						return null
					}, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
						var n = t.layerElement.parentNode;
						if (n) {
							for (var i, a = n.children, r = 0, s = a.length; r < s && a[r] !== t.layerElement;) r += 1;
							r <= s - 2 && (i = a[r + 1]);
							var o = createNS("use");
							o.setAttribute("href", "#" + e), i ? n.insertBefore(o, i) : n.appendChild(o)
						}
					}, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
						if (!this.findSymbol(e)) {
							var n = createElementID(),
								i = createNS("mask");
							i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
							var a = t.globalData.defs;
							a.appendChild(i);
							var r = createNS("symbol");
							r.setAttribute("id", n), this.replaceInParent(e, n), r.appendChild(e.layerElement), a.appendChild(r);
							var s = createNS("use");
							s.setAttribute("href", "#" + n), i.appendChild(s), e.data.hd = !1, e.show()
						}
						t.setMatte(e.layerId)
					}, SVGMatte3Effect.prototype.initialize = function() {
						for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, n = 0, i = e.length; n < i;) e[n] && e[n].data.ind === t && this.setElementAsMask(this.elem, e[n]), n += 1;
						this.initialized = !0
					}, SVGMatte3Effect.prototype.renderFrame = function() {
						this.initialized || this.initialize()
					}, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
						if (t || this.filterManager._mdf) {
							var e = .3 * this.filterManager.effectElements[0].p.v,
								n = this.filterManager.effectElements[1].p.v,
								i = 3 == n ? 0 : e,
								a = 2 == n ? 0 : e;
							this.feGaussianBlur.setAttribute("stdDeviation", i + " " + a);
							var r = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
							this.feGaussianBlur.setAttribute("edgeMode", r)
						}
					}, TransformEffect.prototype.init = function(t) {
						this.effectsManager = t, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
					}, TransformEffect.prototype.renderFrame = function(t) {
						if (this._opMdf = !1, this._mdf = !1, t || this.effectsManager._mdf) {
							var e = this.effectsManager.effectElements,
								n = e[0].p.v,
								i = e[1].p.v,
								a = 1 === e[2].p.v,
								r = e[3].p.v,
								s = a ? r : e[4].p.v,
								o = e[5].p.v,
								l = e[6].p.v,
								c = e[7].p.v;
							this.matrix.reset(), this.matrix.translate(-n[0], -n[1], n[2]), this.matrix.scale(.01 * s, .01 * r, 1), this.matrix.rotate(-c * degToRads), this.matrix.skewFromAxis(-o * degToRads, (l + 90) * degToRads), this.matrix.translate(i[0], i[1], 0), this._mdf = !0, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = !0)
						}
					}, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
				})
			},
			9516: function(t, e, n) {
				"use strict";
				n.r(e), n.d(e, {
					combineReducers: () => P,
					applyMiddleware: () => F,
					createStore: () => w,
					compose: () => L,
					bindActionCreators: () => k
				});
				let i = "object" == typeof global && global && global.Object === Object && global;
				var a = "object" == typeof self && self && self.Object === Object && self;
				let r = (i || a || Function("return this")()).Symbol;
				var s = Object.prototype,
					o = s.hasOwnProperty,
					l = s.toString,
					c = r ? r.toStringTag : void 0;
				let u = function t(t) {
					var e = o.call(t, c),
						n = t[c];
					try {
						t[c] = void 0;
						var i = !0
					} catch (t) {}
					var a = l.call(t);
					return i && (e ? t[c] = n : delete t[c]), a
				};
				var f = Object.prototype.toString;
				let h = function t(t) {
					return f.call(t)
				};
				var d = "[object Null]",
					p = "[object Undefined]",
					m = r ? r.toStringTag : void 0;
				let g = function t(t) {
						return null == t ? void 0 === t ? p : d : m && m in Object(t) ? u(t) : h(t)
					},
					y = function t(t, e) {
						return function(n) {
							return t(e(n))
						}
					}(Object.getPrototypeOf, Object),
					v = function t(t) {
						return null != t && "object" == typeof t
					};
				var b = "[object Object]",
					E = Object.prototype,
					T = Function.prototype.toString,
					_ = E.hasOwnProperty,
					I = T.call(Object);
				let x = function t(t) {
					if (!v(t) || g(t) != b) return !1;
					var e = y(t);
					if (null === e) return !0;
					var n = _.call(e, "constructor") && e.constructor;
					return "function" == typeof n && n instanceof n && T.call(n) == I
				};
				var A = n("3485"),
					S = {
						INIT: "@@redux/INIT"
					};

				function w(t, e, n) {
					if ("function" == typeof e && void 0 === n && (n = e, e = void 0), void 0 !== n) {
						if ("function" != typeof n) throw Error("Expected the enhancer to be a function.");
						return n(w)(t, e)
					}
					if ("function" != typeof t) throw Error("Expected the reducer to be a function.");
					var i, a = t,
						r = e,
						s = [],
						o = s,
						l = !1;

					function c() {
						o === s && (o = s.slice())
					}

					function u() {
						return r
					}

					function f(t) {
						if ("function" != typeof t) throw Error("Expected listener to be a function.");
						var e = !0;
						return c(), o.push(t),
							function() {
								if (!!e) {
									e = !1, c();
									var n = o.indexOf(t);
									o.splice(n, 1)
								}
							}
					}

					function h(t) {
						if (!x(t)) throw Error("Actions must be plain objects. Use custom middleware for async actions.");
						if (void 0 === t.type) throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
						if (l) throw Error("Reducers may not dispatch actions.");
						try {
							l = !0, r = a(r, t)
						} finally {
							l = !1
						}
						for (var e = s = o, n = 0; n < e.length; n++) e[n]();
						return t
					}

					function d(t) {
						if ("function" != typeof t) throw Error("Expected the nextReducer to be a function.");
						a = t, h({
							type: S.INIT
						})
					}

					function p() {
						var t, e = f;
						return (t = {
							subscribe: function(t) {
								if ("object" != typeof t) throw TypeError("Expected the observer to be an object.");

								function n() {
									t.next && t.next(u())
								}
								return n(), {
									unsubscribe: e(n)
								}
							}
						})[A.Z] = function() {
							return this
						}, t
					}
					return h({
						type: S.INIT
					}), (i = {
						dispatch: h,
						subscribe: f,
						getState: u,
						replaceReducer: d
					})[A.Z] = p, i
				}

				function O(t, e) {
					var n = e && e.type;
					return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
				}

				function C(t) {
					Object.keys(t).forEach(function(e) {
						var n = t[e];
						if (void 0 === n(void 0, {
								type: S.INIT
							})) throw Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
						if (void 0 === n(void 0, {
								type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
							})) throw Error('Reducer "' + e + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + S.INIT) + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')
					})
				}

				function P(t) {
					for (var e, n = Object.keys(t), i = {}, a = 0; a < n.length; a++) {
						var r = n[a];
						"function" == typeof t[r] && (i[r] = t[r])
					}
					var s = Object.keys(i);
					try {
						C(i)
					} catch (t) {
						e = t
					}
					return function() {
						var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
							n = arguments[1];
						if (e) throw e;
						for (var a = !1, r = {}, o = 0; o < s.length; o++) {
							var l = s[o],
								c = i[l],
								u = t[l],
								f = c(u, n);
							if (void 0 === f) throw Error(O(l, n));
							r[l] = f, a = a || f !== u
						}
						return a ? r : t
					}
				}

				function M(t, e) {
					return function() {
						return e(t.apply(void 0, arguments))
					}
				}

				function k(t, e) {
					if ("function" == typeof t) return M(t, e);
					if ("object" != typeof t || null === t) throw Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
					for (var n = Object.keys(t), i = {}, a = 0; a < n.length; a++) {
						var r = n[a],
							s = t[r];
						"function" == typeof s && (i[r] = M(s, e))
					}
					return i
				}

				function L() {
					for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
					if (0 === e.length) return function(t) {
						return t
					};
					if (1 === e.length) return e[0];
					var i = e[e.length - 1],
						a = e.slice(0, -1);
					return function() {
						return a.reduceRight(function(t, e) {
							return e(t)
						}, i.apply(void 0, arguments))
					}
				}
				var R = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
					}
					return t
				};

				function F() {
					for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
					return function(t) {
						return function(n, i, a) {
							var r = t(n, i, a),
								s = r.dispatch,
								o = [],
								l = {
									getState: r.getState,
									dispatch: function(t) {
										return s(t)
									}
								};
							return o = e.map(function(t) {
								return t(l)
							}), s = L.apply(void 0, o)(r.dispatch), R({}, r, {
								dispatch: s
							})
						}
					}
				}
			},
			3485: function(t, e, n) {
				"use strict";
				var i;

				function a(t) {
					var e, n = t.Symbol;
					return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e
				}
				n.d(e, {
					Z: () => r
				}), t = n.hmd(t), "undefined" != typeof self ? i = self : "undefined" != typeof window ? i = window : void 0 !== n.g ? i = n.g : i = t;
				let r = a(i)
			},
			1185: function(t, e) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				};
				e.clone = o, e.addLast = u, e.addFirst = f, e.removeLast = h, e.removeFirst = d, e.insert = p, e.removeAt = m, e.replaceAt = g, e.getIn = y, e.set = v, e.setIn = E, e.update = T, e.updateIn = _, e.merge = I, e.mergeDeep = x, e.mergeIn = A, e.omit = S, e.addDefaults = w;
				var i = "INVALID_ARGS";

				function a(t) {
					throw Error(t)
				}

				function r(t) {
					var e = Object.keys(t);
					return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e
				}
				var s = {}.hasOwnProperty;

				function o(t) {
					if (Array.isArray(t)) return t.slice();
					for (var e = r(t), n = {}, i = 0; i < e.length; i++) {
						var a = e[i];
						n[a] = t[a]
					}
					return n
				}

				function l(t, e, n) {
					var s = n;
					null != s || a(i);
					for (var u = !1, f = arguments.length, h = Array(f > 3 ? f - 3 : 0), d = 3; d < f; d++) h[d - 3] = arguments[d];
					for (var p = 0; p < h.length; p++) {
						var m = h[p];
						if (null != m) {
							var g = r(m);
							if (g.length)
								for (var y = 0; y <= g.length; y++) {
									var v = g[y];
									if (!t || void 0 === s[v]) {
										var b = m[v];
										e && c(s[v]) && c(b) && (b = l(t, e, s[v], b)), void 0 !== b && b !== s[v] && (!u && (u = !0, s = o(s)), s[v] = b)
									}
								}
						}
					}
					return s
				}

				function c(t) {
					var e = void 0 === t ? "undefined" : n(t);
					return null != t && ("object" === e || "function" === e)
				}

				function u(t, e) {
					return Array.isArray(e) ? t.concat(e) : t.concat([e])
				}

				function f(t, e) {
					return Array.isArray(e) ? e.concat(t) : [e].concat(t)
				}

				function h(t) {
					return t.length ? t.slice(0, t.length - 1) : t
				}

				function d(t) {
					return t.length ? t.slice(1) : t
				}

				function p(t, e, n) {
					return t.slice(0, e).concat(Array.isArray(n) ? n : [n]).concat(t.slice(e))
				}

				function m(t, e) {
					return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1))
				}

				function g(t, e, n) {
					if (t[e] === n) return t;
					for (var i = t.length, a = Array(i), r = 0; r < i; r++) a[r] = t[r];
					return a[e] = n, a
				}

				function y(t, e) {
					if (Array.isArray(e) || a(i), null != t) {
						for (var n = t, r = 0; r < e.length; r++) {
							var s = e[r];
							if (void 0 === (n = null != n ? n[s] : void 0)) break
						}
						return n
					}
				}

				function v(t, e, n) {
					var i = "number" == typeof e ? [] : {},
						a = null == t ? i : t;
					if (a[e] === n) return a;
					var r = o(a);
					return r[e] = n, r
				}

				function b(t, e, n, i) {
					var a = void 0,
						r = e[i];
					return a = i === e.length - 1 ? n : b(c(t) && c(t[r]) ? t[r] : "number" == typeof e[i + 1] ? [] : {}, e, n, i + 1), v(t, r, a)
				}

				function E(t, e, n) {
					return e.length ? b(t, e, n, 0) : n
				}

				function T(t, e, n) {
					var i = n(null == t ? void 0 : t[e]);
					return v(t, e, i)
				}

				function _(t, e, n) {
					var i = n(y(t, e));
					return E(t, e, i)
				}

				function I(t, e, n, i, a, r) {
					for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), c = 6; c < s; c++) o[c - 6] = arguments[c];
					return o.length ? l.call.apply(l, [null, !1, !1, t, e, n, i, a, r].concat(o)) : l(!1, !1, t, e, n, i, a, r)
				}

				function x(t, e, n, i, a, r) {
					for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), c = 6; c < s; c++) o[c - 6] = arguments[c];
					return o.length ? l.call.apply(l, [null, !1, !0, t, e, n, i, a, r].concat(o)) : l(!1, !0, t, e, n, i, a, r)
				}

				function A(t, e, n, i, a, r, s) {
					var o = y(t, e);
					null == o && (o = {});
					for (var c = void 0, u = arguments.length, f = Array(u > 7 ? u - 7 : 0), h = 7; h < u; h++) f[h - 7] = arguments[h];
					return E(t, e, c = f.length ? l.call.apply(l, [null, !1, !1, o, n, i, a, r, s].concat(f)) : l(!1, !1, o, n, i, a, r, s))
				}

				function S(t, e) {
					for (var n = Array.isArray(e) ? e : [e], i = !1, a = 0; a < n.length; a++)
						if (s.call(t, n[a])) {
							i = !0;
							break
						} if (!i) return t;
					for (var o = {}, l = r(t), c = 0; c < l.length; c++) {
						var u = l[c];
						!(n.indexOf(u) >= 0) && (o[u] = t[u])
					}
					return o
				}

				function w(t, e, n, i, a, r) {
					for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), c = 6; c < s; c++) o[c - 6] = arguments[c];
					return o.length ? l.call.apply(l, [null, !0, !1, t, e, n, i, a, r].concat(o)) : l(!0, !1, t, e, n, i, a, r)
				}
				var O = {
					clone: o,
					addLast: u,
					addFirst: f,
					removeLast: h,
					removeFirst: d,
					insert: p,
					removeAt: m,
					replaceAt: g,
					getIn: y,
					set: v,
					setIn: E,
					update: T,
					updateIn: _,
					merge: I,
					mergeDeep: x,
					mergeIn: A,
					omit: S,
					addDefaults: w
				};
				e.default = O
			},
			5897: function(t, e, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
						value: !0
					}),
					function t(t, e) {
						for (var n in e) Object.defineProperty(t, n, {
							enumerable: !0,
							get: e[n]
						})
					}(e, {
						cleanupElement: function() {
							return m
						},
						createInstance: function() {
							return p
						},
						destroy: function() {
							return y
						},
						init: function() {
							return g
						},
						ready: function() {
							return v
						}
					}), n(2897), n(233), n(9754), n(971), n(2374), n(5152), n(5273), n(172);
				let i = r(n(3142)),
					a = n(7933);

				function r(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				let s = t => t.Webflow.require("lottie").lottie,
					o = t => !!(t.Webflow.env("design") || t.Webflow.env("preview")),
					l = {
						Playing: "playing",
						Stopped: "stopped"
					};
				class c {
					_cache = [];
					set(t, e) {
						let n = (0, i.default)(this._cache, ({
							wrapper: e
						}) => e === t); - 1 !== n && this._cache.splice(n, 1), this._cache.push({
							wrapper: t,
							instance: e
						})
					}
					delete(t) {
						let e = (0, i.default)(this._cache, ({
							wrapper: e
						}) => e === t); - 1 !== e && this._cache.splice(e, 1)
					}
					get(t) {
						let e = (0, i.default)(this._cache, ({
							wrapper: e
						}) => e === t);
						return -1 !== e ? this._cache[e].instance : null
					}
				}
				let u = new c,
					f = {};
				class h {
					config = null;
					currentState = l.Stopped;
					animationItem;
					handlers = {
						enterFrame: [],
						complete: [],
						loop: [],
						dataReady: [],
						destroy: [],
						error: []
					};
					load(t) {
						let e = (t.dataset || f).src || "";
						e.endsWith(".lottie") ? (0, a.fetchLottie)(e).then(e => {
							this._loadAnimation(t, e)
						}) : this._loadAnimation(t, void 0), u.set(t, this), this.container = t
					}
					_loadAnimation(t, e) {
						let n = t.dataset || f,
							i = n.src || "",
							a = n.preserveAspectRatio || "xMidYMid meet",
							r = n.renderer || "svg",
							c = 1 === parseFloat(n.loop),
							u = parseFloat(n.direction) || 1,
							h = 1 === parseFloat(n.autoplay),
							d = parseFloat(n.duration) || 0,
							p = 1 === parseFloat(n.isIx2Target),
							m = parseFloat(n.ix2InitialState);
						isNaN(m) && (m = null);
						let g = {
							src: i,
							loop: c,
							autoplay: h,
							renderer: r,
							direction: u,
							duration: d,
							hasIx2: p,
							ix2InitialValue: m,
							preserveAspectRatio: a
						};
						if (this.animationItem && this.config && this.config.src === i && r === this.config.renderer && a === this.config.preserveAspectRatio) {
							if (c !== this.config.loop && this.setLooping(c), !p && (u !== this.config.direction && this.setDirection(u), d !== this.config.duration && (d > 0 && d !== this.duration ? this.setSpeed(this.duration / d) : this.setSpeed(1))), h && this.play(), m && m !== this.config.ix2InitialValue) {
								let t = m / 100;
								this.goToFrame(this.frames * t)
							}
							this.config = g;
							return
						}
						let y = {
								container: t,
								loop: c,
								autoplay: h,
								renderer: r,
								rendererSettings: {
									preserveAspectRatio: a,
									progressiveLoad: !0,
									hideOnTransparent: !0
								}
							},
							v = t.ownerDocument.defaultView;
						try {
							this.animationItem && this.destroy(), this.animationItem = s(v).loadAnimation({
								...y,
								...e ? {
									animationData: e
								} : {
									path: i
								}
							})
						} catch (t) {
							this.handlers.error.forEach(e => e(t));
							return
						}
						this.animationItem && (o(v) && (this.animationItem.addEventListener("enterFrame", () => {
							if (!this.isPlaying) return;
							let {
								currentFrame: t,
								totalFrames: e,
								playDirection: n
							} = this.animationItem, i = t / e * 100, a = Math.round(1 === n ? i : 100 - i);
							this.handlers.enterFrame.forEach(e => e(a, t))
						}), this.animationItem.addEventListener("complete", () => {
							if (this.currentState !== l.Playing || !this.animationItem.loop) {
								this.handlers.complete.forEach(t => t());
								return
							}
							this.currentState = l.Stopped
						}), this.animationItem.addEventListener("loopComplete", t => {
							this.handlers.loop.forEach(e => e(t))
						}), this.animationItem.addEventListener("data_failed", t => {
							this.handlers.error.forEach(e => e(t))
						}), this.animationItem.addEventListener("error", t => {
							this.handlers.error.forEach(e => e(t))
						})), this.isLoaded ? (this.handlers.dataReady.forEach(t => t()), h && this.play()) : this.animationItem.addEventListener("data_ready", () => {
							if (this.handlers.dataReady.forEach(t => t()), !p && (this.setDirection(u), d > 0 && d !== this.duration && this.setSpeed(this.duration / d), h && this.play()), m) {
								let t = m / 100;
								this.goToFrame(this.frames * t)
							}
						}), this.config = g)
					}
					onFrameChange(t) {
						-1 === this.handlers.enterFrame.indexOf(t) && this.handlers.enterFrame.push(t)
					}
					onPlaybackComplete(t) {
						-1 === this.handlers.complete.indexOf(t) && this.handlers.complete.push(t)
					}
					onLoopComplete(t) {
						-1 === this.handlers.loop.indexOf(t) && this.handlers.loop.push(t)
					}
					onDestroy(t) {
						-1 === this.handlers.destroy.indexOf(t) && this.handlers.destroy.push(t)
					}
					onDataReady(t) {
						-1 === this.handlers.dataReady.indexOf(t) && this.handlers.dataReady.push(t)
					}
					onError(t) {
						-1 === this.handlers.error.indexOf(t) && this.handlers.error.push(t)
					}
					play() {
						if (!this.animationItem) return;
						let t = 1 === this.animationItem.playDirection ? 0 : this.frames;
						this.animationItem.goToAndPlay(t, !0), this.currentState = l.Playing
					}
					stop() {
						if (this.animationItem) {
							if (this.isPlaying) {
								let {
									playDirection: t
								} = this.animationItem, e = 1 === t ? 0 : this.frames;
								this.animationItem.goToAndStop(e, !0)
							}
							this.currentState = l.Stopped
						}
					}
					destroy() {
						this.animationItem && (this.isPlaying && this.stop(), this.handlers.destroy.forEach(t => t()), this.container && u.delete(this.container), this.animationItem.destroy(), Object.keys(this.handlers).forEach(t => this.handlers[t].length = 0), this.animationItem = null, this.container = null, this.config = null)
					}
					get isPlaying() {
						return !!this.animationItem && !this.animationItem.isPaused
					}
					get isPaused() {
						return !!this.animationItem && this.animationItem.isPaused
					}
					get duration() {
						return this.animationItem ? this.animationItem.getDuration() : 0
					}
					get frames() {
						return this.animationItem ? this.animationItem.totalFrames : 0
					}
					get direction() {
						return this.animationItem ? this.animationItem.playDirection : 1
					}
					get isLoaded() {
						return !this.animationItem, this.animationItem.isLoaded
					}
					get ix2InitialValue() {
						return this.config ? this.config.ix2InitialValue : null
					}
					goToFrame(t) {
						this.animationItem && this.animationItem.setCurrentRawFrameValue(t)
					}
					setSubframe(t) {
						this.animationItem && this.animationItem.setSubframe(t)
					}
					setSpeed(t = 1) {
						this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setSpeed(t))
					}
					setLooping(t) {
						this.animationItem && (this.isPlaying && this.stop(), this.animationItem.loop = t)
					}
					setDirection(t) {
						this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setDirection(t), this.goToFrame(1 === t ? 0 : this.frames))
					}
				}
				let d = () => Array.from(document.querySelectorAll('[data-animation-type="lottie"]')),
					p = t => {
						let e = u.get(t);
						return null == e && (e = new h), e.load(t), e
					},
					m = t => {
						let e = u.get(t);
						e && e.destroy()
					},
					g = () => {
						d().forEach(t => {
							1 !== parseFloat(t.getAttribute("data-is-ix2-target")) && m(t), p(t)
						})
					},
					y = () => {
						d().forEach(m)
					},
					v = g
			},
			2444: function(t, e, n) {
				"use strict";
				var i = n(3949),
					a = n(5897),
					r = n(8724);
				i.define("lottie", t.exports = function() {
					return {
						lottie: r,
						createInstance: a.createInstance,
						cleanupElement: a.cleanupElement,
						init: a.init,
						destroy: a.destroy,
						ready: a.ready
					}
				})
			},
			9904: function() {
				"use strict";
				! function() {
					if ("undefined" == typeof window) return;
					let t = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
						e = !!t && parseInt(t[1], 10) >= 16;
					if ("objectFit" in document.documentElement.style != !1 && !e) {
						window.objectFitPolyfill = function() {
							return !1
						};
						return
					}
					let n = function(t) {
							let e = window.getComputedStyle(t, null),
								n = e.getPropertyValue("position"),
								i = e.getPropertyValue("overflow"),
								a = e.getPropertyValue("display");
							(!n || "static" === n) && (t.style.position = "relative"), "hidden" !== i && (t.style.overflow = "hidden"), (!a || "inline" === a) && (t.style.display = "block"), 0 === t.clientHeight && (t.style.height = "100%"), -1 === t.className.indexOf("object-fit-polyfill") && (t.className += " object-fit-polyfill")
						},
						i = function(t) {
							let e = window.getComputedStyle(t, null),
								n = {
									"max-width": "none",
									"max-height": "none",
									"min-width": "0px",
									"min-height": "0px",
									top: "auto",
									right: "auto",
									bottom: "auto",
									left: "auto",
									"margin-top": "0px",
									"margin-right": "0px",
									"margin-bottom": "0px",
									"margin-left": "0px"
								};
							for (let i in n) e.getPropertyValue(i) !== n[i] && (t.style[i] = n[i])
						},
						a = function(t) {
							let e = t.parentNode;
							n(e), i(t), t.style.position = "absolute", t.style.height = "100%", t.style.width = "auto", t.clientWidth > e.clientWidth ? (t.style.top = "0", t.style.marginTop = "0", t.style.left = "50%", t.style.marginLeft = -(t.clientWidth / 2) + "px") : (t.style.width = "100%", t.style.height = "auto", t.style.left = "0", t.style.marginLeft = "0", t.style.top = "50%", t.style.marginTop = -(t.clientHeight / 2) + "px")
						},
						r = function(t) {
							if (void 0 === t || t instanceof Event) t = document.querySelectorAll("[data-object-fit]");
							else if (t && t.nodeName) t = [t];
							else if ("object" != typeof t || !t.length || !t[0].nodeName) return !1;
							for (let n = 0; n < t.length; n++) {
								if (!t[n].nodeName) continue;
								let i = t[n].nodeName.toLowerCase();
								if ("img" === i) {
									if (e) continue;
									t[n].complete ? a(t[n]) : t[n].addEventListener("load", function() {
										a(this)
									})
								} else "video" === i ? t[n].readyState > 0 ? a(t[n]) : t[n].addEventListener("loadedmetadata", function() {
									a(this)
								}) : a(t[n])
							}
							return !0
						};
					"loading" === document.readyState ? document.addEventListener("DOMContentLoaded", r) : r(), window.addEventListener("resize", r), window.objectFitPolyfill = r
				}()
			},
			1724: function() {
				"use strict";
				! function() {
					function t(t) {
						if (!Webflow.env("design")) $("video").each(function() {
							t && $(this).prop("autoplay") ? this.play() : this.pause()
						}), $(".w-background-video--control").each(function() {
							t ? n($(this)) : e($(this))
						})
					}

					function e(t) {
						t.find("> span").each(function(t) {
							$(this).prop("hidden", () => 0 === t)
						})
					}

					function n(t) {
						t.find("> span").each(function(t) {
							$(this).prop("hidden", () => 1 === t)
						})
					}
					"undefined" != typeof window && $(document).ready(() => {
						let i = window.matchMedia("(prefers-reduced-motion: reduce)");
						i.addEventListener("change", e => {
							t(!e.matches)
						}), i.matches && t(!1), $("video:not([autoplay])").each(function() {
							$(this).parent().find(".w-background-video--control").each(function() {
								e($(this))
							})
						}), $(document).on("click", ".w-background-video--control", function(t) {
							if (Webflow.env("design")) return;
							let i = $(t.currentTarget),
								a = $(`video#${i.attr("aria-controls")}`).get(0);
							if (a) {
								if (a.paused) {
									let t = a.play();
									n(i), t && "function" == typeof t.catch && t.catch(() => {
										e(i)
									})
								} else a.pause(), e(i)
							}
						})
					})
				}()
			},
			5487: function() {
				"use strict";
				window.tram = function(t) {
					function e(t, e) {
						return (new N.Bare).init(t, e)
					}

					function n(t) {
						return t.replace(/[A-Z]/g, function(t) {
							return "-" + t.toLowerCase()
						})
					}

					function i(t) {
						var e = parseInt(t.slice(1), 16);
						return [e >> 16 & 255, e >> 8 & 255, 255 & e]
					}

					function a(t, e, n) {
						return "#" + (0x1000000 | t << 16 | e << 8 | n).toString(16).slice(1)
					}

					function r() {}

					function s(t, e) {
						c("Type warning: Expected: [" + t + "] Got: [" + typeof e + "] " + e)
					}

					function o(t, e, n) {
						c("Units do not match [" + t + "]: " + e + ", " + n)
					}

					function l(t, e, n) {
						if (void 0 !== e && (n = e), void 0 === t) return n;
						var i = n;
						return Z.test(t) || !J.test(t) ? i = parseInt(t, 10) : J.test(t) && (i = 1e3 * parseFloat(t)), 0 > i && (i = 0), i == i ? i : n
					}

					function c(t) {
						W.debug && window && window.console.warn(t)
					}

					function u(t) {
						for (var e = -1, n = t ? t.length : 0, i = []; ++e < n;) {
							var a = t[e];
							a && i.push(a)
						}
						return i
					}
					var f = function(t, e, n) {
							function i(t) {
								return "object" == typeof t
							}

							function a(t) {
								return "function" == typeof t
							}

							function r() {}

							function s(o, l) {
								function c() {
									var t = new u;
									return a(t.init) && t.init.apply(t, arguments), t
								}

								function u() {}
								l === n && (l = o, o = Object), c.Bare = u;
								var f, h = r[t] = o[t],
									d = u[t] = c[t] = new r;
								return d.constructor = c, c.mixin = function(e) {
									return u[t] = c[t] = s(c, e)[t], c
								}, c.open = function(t) {
									if (f = {}, a(t) ? f = t.call(c, d, h, c, o) : i(t) && (f = t), i(f))
										for (var n in f) e.call(f, n) && (d[n] = f[n]);
									return a(d.init) || (d.init = o), c
								}, c.open(l)
							}
							return s
						}("prototype", {}.hasOwnProperty),
						h = {
							ease: ["ease", function(t, e, n, i) {
								var a = (t /= i) * t,
									r = a * t;
								return e + n * (-2.75 * r * a + 11 * a * a + -15.5 * r + 8 * a + .25 * t)
							}],
							"ease-in": ["ease-in", function(t, e, n, i) {
								var a = (t /= i) * t,
									r = a * t;
								return e + n * (-1 * r * a + 3 * a * a + -3 * r + 2 * a)
							}],
							"ease-out": ["ease-out", function(t, e, n, i) {
								var a = (t /= i) * t,
									r = a * t;
								return e + n * (.3 * r * a + -1.6 * a * a + 2.2 * r + -1.8 * a + 1.9 * t)
							}],
							"ease-in-out": ["ease-in-out", function(t, e, n, i) {
								var a = (t /= i) * t,
									r = a * t;
								return e + n * (2 * r * a + -5 * a * a + 2 * r + 2 * a)
							}],
							linear: ["linear", function(t, e, n, i) {
								return n * t / i + e
							}],
							"ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(t, e, n, i) {
								return n * (t /= i) * t + e
							}],
							"ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(t, e, n, i) {
								return -n * (t /= i) * (t - 2) + e
							}],
							"ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(t, e, n, i) {
								return (t /= i / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
							}],
							"ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(t, e, n, i) {
								return n * (t /= i) * t * t + e
							}],
							"ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(t, e, n, i) {
								return n * ((t = t / i - 1) * t * t + 1) + e
							}],
							"ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(t, e, n, i) {
								return (t /= i / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
							}],
							"ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(t, e, n, i) {
								return n * (t /= i) * t * t * t + e
							}],
							"ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(t, e, n, i) {
								return -n * ((t = t / i - 1) * t * t * t - 1) + e
							}],
							"ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(t, e, n, i) {
								return (t /= i / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
							}],
							"ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(t, e, n, i) {
								return n * (t /= i) * t * t * t * t + e
							}],
							"ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(t, e, n, i) {
								return n * ((t = t / i - 1) * t * t * t * t + 1) + e
							}],
							"ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(t, e, n, i) {
								return (t /= i / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
							}],
							"ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(t, e, n, i) {
								return -n * Math.cos(t / i * (Math.PI / 2)) + n + e
							}],
							"ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(t, e, n, i) {
								return n * Math.sin(t / i * (Math.PI / 2)) + e
							}],
							"ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(t, e, n, i) {
								return -n / 2 * (Math.cos(Math.PI * t / i) - 1) + e
							}],
							"ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(t, e, n, i) {
								return 0 === t ? e : n * Math.pow(2, 10 * (t / i - 1)) + e
							}],
							"ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(t, e, n, i) {
								return t === i ? e + n : n * (-Math.pow(2, -10 * t / i) + 1) + e
							}],
							"ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(t, e, n, i) {
								return 0 === t ? e : t === i ? e + n : (t /= i / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (-Math.pow(2, -10 * --t) + 2) + e
							}],
							"ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(t, e, n, i) {
								return -n * (Math.sqrt(1 - (t /= i) * t) - 1) + e
							}],
							"ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(t, e, n, i) {
								return n * Math.sqrt(1 - (t = t / i - 1) * t) + e
							}],
							"ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(t, e, n, i) {
								return (t /= i / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
							}],
							"ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(t, e, n, i, a) {
								return void 0 === a && (a = 1.70158), n * (t /= i) * t * ((a + 1) * t - a) + e
							}],
							"ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(t, e, n, i, a) {
								return void 0 === a && (a = 1.70158), n * ((t = t / i - 1) * t * ((a + 1) * t + a) + 1) + e
							}],
							"ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(t, e, n, i, a) {
								return void 0 === a && (a = 1.70158), (t /= i / 2) < 1 ? n / 2 * t * t * (((a *= 1.525) + 1) * t - a) + e : n / 2 * ((t -= 2) * t * (((a *= 1.525) + 1) * t + a) + 2) + e
							}]
						},
						d = {
							"ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
							"ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
							"ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
						},
						p = window,
						m = "bkwld-tram",
						g = /[\-\.0-9]/g,
						y = /[A-Z]/,
						v = "number",
						b = /^(rgb|#)/,
						E = /(em|cm|mm|in|pt|pc|px)$/,
						T = /(em|cm|mm|in|pt|pc|px|%)$/,
						_ = /(deg|rad|turn)$/,
						I = "unitless",
						x = /(all|none) 0s ease 0s/,
						A = /^(width|height)$/,
						S = " ",
						w = document.createElement("a"),
						O = ["Webkit", "Moz", "O", "ms"],
						C = ["-webkit-", "-moz-", "-o-", "-ms-"],
						P = function(t) {
							if (t in w.style) return {
								dom: t,
								css: t
							};
							var e, n, i = "",
								a = t.split("-");
							for (e = 0; e < a.length; e++) i += a[e].charAt(0).toUpperCase() + a[e].slice(1);
							for (e = 0; e < O.length; e++)
								if ((n = O[e] + i) in w.style) return {
									dom: n,
									css: C[e] + t
								}
						},
						M = e.support = {
							bind: Function.prototype.bind,
							transform: P("transform"),
							transition: P("transition"),
							backface: P("backface-visibility"),
							timing: P("transition-timing-function")
						};
					if (M.transition) {
						var k = M.timing.dom;
						if (w.style[k] = h["ease-in-back"][0], !w.style[k])
							for (var L in d) h[L][0] = d[L]
					}
					var R = e.frame = function() {
							var t = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
							return t && M.bind ? t.bind(p) : function(t) {
								p.setTimeout(t, 16)
							}
						}(),
						F = e.now = function() {
							var t = p.performance,
								e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
							return e && M.bind ? e.bind(t) : Date.now || function() {
								return +new Date
							}
						}(),
						D = f(function(e) {
							function i(t, e) {
								var n = u(("" + t).split(S)),
									i = n[0];
								e = e || {};
								var a = Q[i];
								if (!a) return c("Unsupported property: " + i);
								if (!e.weak || !this.props[i]) {
									var r = a[0],
										s = this.props[i];
									return s || (s = this.props[i] = new r.Bare), s.init(this.$el, n, a, e), s
								}
							}

							function a(t, e, n) {
								if (t) {
									var a = typeof t;
									if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == a && e) return this.timer = new z({
										duration: t,
										context: this,
										complete: o
									}), void(this.active = !0);
									if ("string" == a && e) {
										switch (t) {
											case "hide":
												p.call(this);
												break;
											case "stop":
												f.call(this);
												break;
											case "redraw":
												g.call(this);
												break;
											default:
												i.call(this, t, n && n[1])
										}
										return o.call(this)
									}
									if ("function" == a) return void t.call(this, this);
									if ("object" == a) {
										var r = 0;
										E.call(this, t, function(t, e) {
											t.span > r && (r = t.span), t.stop(), t.animate(e)
										}, function(t) {
											"wait" in t && (r = l(t.wait, 0))
										}), b.call(this), r > 0 && (this.timer = new z({
											duration: r,
											context: this
										}), this.active = !0, e && (this.timer.complete = o));
										var s = this,
											c = !1,
											u = {};
										R(function() {
											E.call(s, t, function(t) {
												t.active && (c = !0, u[t.name] = t.nextStyle)
											}), c && s.$el.css(u)
										})
									}
								}
							}

							function r(t) {
								t = l(t, 0), this.active ? this.queue.push({
									options: t
								}) : (this.timer = new z({
									duration: t,
									context: this,
									complete: o
								}), this.active = !0)
							}

							function s(t) {
								return this.active ? (this.queue.push({
									options: t,
									args: arguments
								}), void(this.timer.complete = o)) : c("No active transition timer. Use start() or wait() before then().")
							}

							function o() {
								if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
									var t = this.queue.shift();
									a.call(this, t.options, !0, t.args)
								}
							}

							function f(t) {
								var e;
								this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof t ? (e = {})[t] = 1 : e = "object" == typeof t && null != t ? t : this.props, E.call(this, e, T), b.call(this)
							}

							function h(t) {
								f.call(this, t), E.call(this, t, _, I)
							}

							function d(t) {
								"string" != typeof t && (t = "block"), this.el.style.display = t
							}

							function p() {
								f.call(this), this.el.style.display = "none"
							}

							function g() {
								this.el.offsetHeight
							}

							function v() {
								f.call(this), t.removeData(this.el, m), this.$el = this.el = null
							}

							function b() {
								var t, e, n = [];
								for (t in this.upstream && n.push(this.upstream), this.props)(e = this.props[t]).active && n.push(e.string);
								n = n.join(","), this.style !== n && (this.style = n, this.el.style[M.transition.dom] = n)
							}

							function E(t, e, a) {
								var r, s, o, l, c = e !== T,
									u = {};
								for (r in t) o = t[r], r in K ? (u.transform || (u.transform = {}), u.transform[r] = o) : (y.test(r) && (r = n(r)), r in Q ? u[r] = o : (l || (l = {}), l[r] = o));
								for (r in u) {
									if (o = u[r], !(s = this.props[r])) {
										if (!c) continue;
										s = i.call(this, r)
									}
									e.call(this, s, o)
								}
								a && l && a.call(this, l)
							}

							function T(t) {
								t.stop()
							}

							function _(t, e) {
								t.set(e)
							}

							function I(t) {
								this.$el.css(t)
							}

							function A(t, n) {
								e[t] = function() {
									return this.children ? w.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
								}
							}

							function w(t, e) {
								var n, i = this.children.length;
								for (n = 0; i > n; n++) t.apply(this.children[n], e);
								return this
							}
							e.init = function(e) {
								if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, W.keepInherited && !W.fallback) {
									var n = H(this.el, "transition");
									n && !x.test(n) && (this.upstream = n)
								}
								M.backface && W.hideBackface && Y(this.el, M.backface.css, "hidden")
							}, A("add", i), A("start", a), A("wait", r), A("then", s), A("next", o), A("stop", f), A("set", h), A("show", d), A("hide", p), A("redraw", g), A("destroy", v)
						}),
						N = f(D, function(e) {
							function n(e, n) {
								var i = t.data(e, m) || t.data(e, m, new D.Bare);
								return i.el || i.init(e), n ? i.start(n) : i
							}
							e.init = function(e, i) {
								var a = t(e);
								if (!a.length) return this;
								if (1 === a.length) return n(a[0], i);
								var r = [];
								return a.each(function(t, e) {
									r.push(n(e, i))
								}), this.children = r, this
							}
						}),
						V = f(function(t) {
							function e() {
								var t = this.get();
								this.update("auto");
								var e = this.get();
								return this.update(t), e
							}

							function n(t, e, n) {
								return void 0 !== e && (n = e), t in h ? t : n
							}

							function i(t) {
								var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
								return (e ? a(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
							}
							var r = 500,
								o = "ease",
								c = 0;
							t.init = function(t, e, i, a) {
								this.$el = t, this.el = t[0];
								var s = e[0];
								i[2] && (s = i[2]), q[s] && (s = q[s]), this.name = s, this.type = i[1], this.duration = l(e[1], this.duration, r), this.ease = n(e[2], this.ease, o), this.delay = l(e[3], this.delay, c), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = A.test(this.name), this.unit = a.unit || this.unit || W.defaultUnit, this.angle = a.angle || this.angle || W.defaultAngle, W.fallback || a.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + S + this.duration + "ms" + ("ease" != this.ease ? S + h[this.ease][0] : "") + (this.delay ? S + this.delay + "ms" : ""))
							}, t.set = function(t) {
								t = this.convert(t, this.type), this.update(t), this.redraw()
							}, t.transition = function(t) {
								this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t
							}, t.fallback = function(t) {
								var n = this.el.style[this.name] || this.convert(this.get(), this.type);
								t = this.convert(t, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new j({
									from: n,
									to: t,
									duration: this.duration,
									delay: this.delay,
									ease: this.ease,
									update: this.update,
									context: this
								})
							}, t.get = function() {
								return H(this.el, this.name)
							}, t.update = function(t) {
								Y(this.el, this.name, t)
							}, t.stop = function() {
								(this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, Y(this.el, this.name, this.get()));
								var t = this.tween;
								t && t.context && t.destroy()
							}, t.convert = function(t, e) {
								if ("auto" == t && this.auto) return t;
								var n, a = "number" == typeof t,
									r = "string" == typeof t;
								switch (e) {
									case v:
										if (a) return t;
										if (r && "" === t.replace(g, "")) return +t;
										n = "number(unitless)";
										break;
									case b:
										if (r) {
											if ("" === t && this.original) return this.original;
											if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : i(t)
										}
										n = "hex or rgb string";
										break;
									case E:
										if (a) return t + this.unit;
										if (r && e.test(t)) return t;
										n = "number(px) or string(unit)";
										break;
									case T:
										if (a) return t + this.unit;
										if (r && e.test(t)) return t;
										n = "number(px) or string(unit or %)";
										break;
									case _:
										if (a) return t + this.angle;
										if (r && e.test(t)) return t;
										n = "number(deg) or string(angle)";
										break;
									case I:
										if (a || r && T.test(t)) return t;
										n = "number(unitless) or string(unit or %)"
								}
								return s(n, t), t
							}, t.redraw = function() {
								this.el.offsetHeight
							}
						}),
						B = f(V, function(t, e) {
							t.init = function() {
								e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), b))
							}
						}),
						U = f(V, function(t, e) {
							t.init = function() {
								e.init.apply(this, arguments), this.animate = this.fallback
							}, t.get = function() {
								return this.$el[this.name]()
							}, t.update = function(t) {
								this.$el[this.name](t)
							}
						}),
						G = f(V, function(t, e) {
							function n(t, e) {
								var n, i, a, r, s;
								for (n in t) a = (r = K[n])[0], i = r[1] || n, s = this.convert(t[n], a), e.call(this, i, s, a)
							}
							t.init = function() {
								e.init.apply(this, arguments), this.current || (this.current = {}, K.perspective && W.perspective && (this.current.perspective = W.perspective, Y(this.el, this.name, this.style(this.current)), this.redraw()))
							}, t.set = function(t) {
								n.call(this, t, function(t, e) {
									this.current[t] = e
								}), Y(this.el, this.name, this.style(this.current)), this.redraw()
							}, t.transition = function(t) {
								var e = this.values(t);
								this.tween = new X({
									current: this.current,
									values: e,
									duration: this.duration,
									delay: this.delay,
									ease: this.ease
								});
								var n, i = {};
								for (n in this.current) i[n] = n in e ? e[n] : this.current[n];
								this.active = !0, this.nextStyle = this.style(i)
							}, t.fallback = function(t) {
								var e = this.values(t);
								this.tween = new X({
									current: this.current,
									values: e,
									duration: this.duration,
									delay: this.delay,
									ease: this.ease,
									update: this.update,
									context: this
								})
							}, t.update = function() {
								Y(this.el, this.name, this.style(this.current))
							}, t.style = function(t) {
								var e, n = "";
								for (e in t) n += e + "(" + t[e] + ") ";
								return n
							}, t.values = function(t) {
								var e, i = {};
								return n.call(this, t, function(t, n, a) {
									i[t] = n, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, a))
								}), i
							}
						}),
						j = f(function(e) {
							function n(t) {
								1 === d.push(t) && R(s)
							}

							function s() {
								var t, e, n, i = d.length;
								if (i)
									for (R(s), e = F(), t = i; t--;)(n = d[t]) && n.render(e)
							}

							function l(e) {
								var n, i = t.inArray(e, d);
								i >= 0 && (n = d.slice(i + 1), d.length = i, n.length && (d = d.concat(n)))
							}

							function c(t) {
								return Math.round(t * p) / p
							}

							function u(t, e, n) {
								return a(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]))
							}
							var f = {
								ease: h.ease[1],
								from: 0,
								to: 1
							};
							e.init = function(t) {
								this.duration = t.duration || 0, this.delay = t.delay || 0;
								var e = t.ease || f.ease;
								h[e] && (e = h[e][1]), "function" != typeof e && (e = f.ease), this.ease = e, this.update = t.update || r, this.complete = t.complete || r, this.context = t.context || this, this.name = t.name;
								var n = t.from,
									i = t.to;
								void 0 === n && (n = f.from), void 0 === i && (i = f.to), this.unit = t.unit || "", "number" == typeof n && "number" == typeof i ? (this.begin = n, this.change = i - n) : this.format(i, n), this.value = this.begin + this.unit, this.start = F(), !1 !== t.autoplay && this.play()
							}, e.play = function() {
								this.active || (this.start || (this.start = F()), this.active = !0, n(this))
							}, e.stop = function() {
								this.active && (this.active = !1, l(this))
							}, e.render = function(t) {
								var e, n = t - this.start;
								if (this.delay) {
									if (n <= this.delay) return;
									n -= this.delay
								}
								if (n < this.duration) {
									var i = this.ease(n, 0, 1, this.duration);
									return e = this.startRGB ? u(this.startRGB, this.endRGB, i) : c(this.begin + i * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value)
								}
								e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
							}, e.format = function(t, e) {
								if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = i(e), this.endRGB = i(t), this.endHex = t, this.begin = 0, void(this.change = 1);
								if (!this.unit) {
									var n = e.replace(g, "");
									n !== t.replace(g, "") && o("tween", e, t), this.unit = n
								}
								e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e
							}, e.destroy = function() {
								this.stop(), this.context = null, this.ease = this.update = this.complete = r
							};
							var d = [],
								p = 1e3
						}),
						z = f(j, function(t) {
							t.init = function(t) {
								this.duration = t.duration || 0, this.complete = t.complete || r, this.context = t.context, this.play()
							}, t.render = function(t) {
								t - this.start < this.duration || (this.complete.call(this.context), this.destroy())
							}
						}),
						X = f(j, function(t, e) {
							t.init = function(t) {
								var e, n;
								for (e in this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current, t.values) n = t.values[e], this.current[e] !== n && this.tweens.push(new j({
									name: e,
									from: this.current[e],
									to: n,
									duration: t.duration,
									delay: t.delay,
									ease: t.ease,
									autoplay: !1
								}));
								this.play()
							}, t.render = function(t) {
								var e, n, i = this.tweens.length,
									a = !1;
								for (e = i; e--;)(n = this.tweens[e]).context && (n.render(t), this.current[n.name] = n.value, a = !0);
								return a ? void(this.update && this.update.call(this.context)) : this.destroy()
							}, t.destroy = function() {
								if (e.destroy.call(this), this.tweens) {
									var t, n;
									for (t = this.tweens.length; t--;) this.tweens[t].destroy();
									this.tweens = null, this.current = null
								}
							}
						}),
						W = e.config = {
							debug: !1,
							defaultUnit: "px",
							defaultAngle: "deg",
							keepInherited: !1,
							hideBackface: !1,
							perspective: "",
							fallback: !M.transition,
							agentTests: []
						};
					e.fallback = function(t) {
						if (!M.transition) return W.fallback = !0;
						W.agentTests.push("(" + t + ")");
						var e = RegExp(W.agentTests.join("|"), "i");
						W.fallback = e.test(navigator.userAgent)
					}, e.fallback("6.0.[2-5] Safari"), e.tween = function(t) {
						return new j(t)
					}, e.delay = function(t, e, n) {
						return new z({
							complete: e,
							duration: t,
							context: n
						})
					}, t.fn.tram = function(t) {
						return e.call(null, this, t)
					};
					var Y = t.style,
						H = t.css,
						q = {
							transform: M.transform && M.transform.css
						},
						Q = {
							color: [B, b],
							background: [B, b, "background-color"],
							"outline-color": [B, b],
							"border-color": [B, b],
							"border-top-color": [B, b],
							"border-right-color": [B, b],
							"border-bottom-color": [B, b],
							"border-left-color": [B, b],
							"border-width": [V, E],
							"border-top-width": [V, E],
							"border-right-width": [V, E],
							"border-bottom-width": [V, E],
							"border-left-width": [V, E],
							"border-spacing": [V, E],
							"letter-spacing": [V, E],
							margin: [V, E],
							"margin-top": [V, E],
							"margin-right": [V, E],
							"margin-bottom": [V, E],
							"margin-left": [V, E],
							padding: [V, E],
							"padding-top": [V, E],
							"padding-right": [V, E],
							"padding-bottom": [V, E],
							"padding-left": [V, E],
							"outline-width": [V, E],
							opacity: [V, v],
							top: [V, T],
							right: [V, T],
							bottom: [V, T],
							left: [V, T],
							"font-size": [V, T],
							"text-indent": [V, T],
							"word-spacing": [V, T],
							width: [V, T],
							"min-width": [V, T],
							"max-width": [V, T],
							height: [V, T],
							"min-height": [V, T],
							"max-height": [V, T],
							"line-height": [V, I],
							"scroll-top": [U, v, "scrollTop"],
							"scroll-left": [U, v, "scrollLeft"]
						},
						K = {};
					M.transform && (Q.transform = [G], K = {
						x: [T, "translateX"],
						y: [T, "translateY"],
						rotate: [_],
						rotateX: [_],
						rotateY: [_],
						scale: [v],
						scaleX: [v],
						scaleY: [v],
						skew: [_],
						skewX: [_],
						skewY: [_]
					}), M.transform && M.backface && (K.z = [T, "translateZ"], K.rotateZ = [_], K.scaleZ = [v], K.perspective = [E]);
					var Z = /ms/,
						J = /s|\./;
					return t.tram = e
				}(window.jQuery)
			},
			5756: function(t, e, n) {
				"use strict";
				var i = window.$,
					a = n(5487) && i.tram;
				t.exports = function() {
					var t = {};
					t.VERSION = "1.6.0-Webflow";
					var e = {},
						n = Array.prototype,
						i = Object.prototype,
						r = Function.prototype;
					n.push;
					var s = n.slice,
						o = (n.concat, i.toString, i.hasOwnProperty),
						l = n.forEach,
						c = n.map,
						u = (n.reduce, n.reduceRight, n.filter),
						f = (n.every, n.some),
						h = n.indexOf,
						d = (n.lastIndexOf, Object.keys);
					r.bind;
					var p = t.each = t.forEach = function(n, i, a) {
						if (null == n) return n;
						if (l && n.forEach === l) n.forEach(i, a);
						else if (n.length === +n.length) {
							for (var r = 0, s = n.length; r < s; r++)
								if (i.call(a, n[r], r, n) === e) return
						} else {
							for (var o = t.keys(n), r = 0, s = o.length; r < s; r++)
								if (i.call(a, n[o[r]], o[r], n) === e) return
						}
						return n
					};
					t.map = t.collect = function(t, e, n) {
						var i = [];
						return null == t ? i : c && t.map === c ? t.map(e, n) : (p(t, function(t, a, r) {
							i.push(e.call(n, t, a, r))
						}), i)
					}, t.find = t.detect = function(t, e, n) {
						var i;
						return m(t, function(t, a, r) {
							if (e.call(n, t, a, r)) return i = t, !0
						}), i
					}, t.filter = t.select = function(t, e, n) {
						var i = [];
						return null == t ? i : u && t.filter === u ? t.filter(e, n) : (p(t, function(t, a, r) {
							e.call(n, t, a, r) && i.push(t)
						}), i)
					};
					var m = t.some = t.any = function(n, i, a) {
						i || (i = t.identity);
						var r = !1;
						return null == n ? r : f && n.some === f ? n.some(i, a) : (p(n, function(t, n, s) {
							if (r || (r = i.call(a, t, n, s))) return e
						}), !!r)
					};
					t.contains = t.include = function(t, e) {
						return null != t && (h && t.indexOf === h ? -1 != t.indexOf(e) : m(t, function(t) {
							return t === e
						}))
					}, t.delay = function(t, e) {
						var n = s.call(arguments, 2);
						return setTimeout(function() {
							return t.apply(null, n)
						}, e)
					}, t.defer = function(e) {
						return t.delay.apply(t, [e, 1].concat(s.call(arguments, 1)))
					}, t.throttle = function(t) {
						var e, n, i;
						return function() {
							!e && (e = !0, n = arguments, i = this, a.frame(function() {
								e = !1, t.apply(i, n)
							}))
						}
					}, t.debounce = function(e, n, i) {
						var a, r, s, o, l, c = function() {
							var u = t.now() - o;
							u < n ? a = setTimeout(c, n - u) : (a = null, !i && (l = e.apply(s, r), s = r = null))
						};
						return function() {
							s = this, r = arguments, o = t.now();
							var u = i && !a;
							return !a && (a = setTimeout(c, n)), u && (l = e.apply(s, r), s = r = null), l
						}
					}, t.defaults = function(e) {
						if (!t.isObject(e)) return e;
						for (var n = 1, i = arguments.length; n < i; n++) {
							var a = arguments[n];
							for (var r in a) void 0 === e[r] && (e[r] = a[r])
						}
						return e
					}, t.keys = function(e) {
						if (!t.isObject(e)) return [];
						if (d) return d(e);
						var n = [];
						for (var i in e) t.has(e, i) && n.push(i);
						return n
					}, t.has = function(t, e) {
						return o.call(t, e)
					}, t.isObject = function(t) {
						return t === Object(t)
					}, t.now = Date.now || function() {
						return new Date().getTime()
					}, t.templateSettings = {
						evaluate: /<%([\s\S]+?)%>/g,
						interpolate: /<%=([\s\S]+?)%>/g,
						escape: /<%-([\s\S]+?)%>/g
					};
					var g = /(.)^/,
						y = {
							"'": "'",
							"\\": "\\",
							"\r": "r",
							"\n": "n",
							"\u2028": "u2028",
							"\u2029": "u2029"
						},
						v = /\\|'|\r|\n|\u2028|\u2029/g,
						b = function(t) {
							return "\\" + y[t]
						},
						E = /^\s*(\w|\$)+\s*$/;
					return t.template = function(e, n, i) {
						!n && i && (n = i);
						var a, r = RegExp([((n = t.defaults({}, n, t.templateSettings)).escape || g).source, (n.interpolate || g).source, (n.evaluate || g).source].join("|") + "|$", "g"),
							s = 0,
							o = "__p+='";
						e.replace(r, function(t, n, i, a, r) {
							return o += e.slice(s, r).replace(v, b), s = r + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"), t
						}), o += "';\n";
						var l = n.variable;
						if (l) {
							if (!E.test(l)) throw Error("variable is not a bare identifier: " + l)
						} else o = "with(obj||{}){\n" + o + "}\n", l = "obj";
						o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
						try {
							a = Function(n.variable || "obj", "_", o)
						} catch (t) {
							throw t.source = o, t
						}
						var c = function(e) {
							return a.call(this, e, t)
						};
						return c.source = "function(" + l + "){\n" + o + "}", c
					}, t
				}()
			},
			9461: function(t, e, n) {
				"use strict";
				var i = n(3949);
				i.define("brand", t.exports = function(t) {
					var e, n = {},
						a = document,
						r = t("html"),
						s = t("body"),
						o = ".w-webflow-badge",
						l = window.location,
						c = /PhantomJS/i.test(navigator.userAgent),
						u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

					function f() {
						var n = a.fullScreen || a.mozFullScreen || a.webkitIsFullScreen || a.msFullscreenElement || !!a.webkitFullscreenElement;
						t(e).attr("style", n ? "display: none !important;" : "")
					}

					function h() {
					return;
					}

					function d() {
						var t = s.children(o),
							n = t.length && t.get(0) === e,
							a = i.env("editor");
						if (n) {
							a && t.remove();
							return
						}
						t.length && t.remove(), !a && s.append(e)
					}
					return n.ready = function() {
						var n = r.attr("data-wf-status"),
							i = r.attr("data-wf-domain") || "";
						/\.webflow\.io$/i.test(i) && l.hostname !== i && (n = !0), n && !c && (e = e || h(), d(), setTimeout(d, 500), t(a).off(u, f).on(u, f))
					}, n
				})
			},
			322: function(t, e, n) {
				"use strict";
				var i = n(3949);

				function a() {
					try {
						return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST)
					} catch (t) {
						return !1
					}
				}
				i.define("edit", t.exports = function(t, e, n) {
					if (n = n || {}, (i.env("test") || i.env("frame")) && !n.fixture && !a()) return {
						exit: 1
					};
					var r, s = {},
						o = t(window),
						l = t(document.documentElement),
						c = document.location,
						u = "hashchange",
						f = n.load || p,
						h = !1;
					try {
						h = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
					} catch (t) {}

					function d() {
						if (!r) /\?edit/.test(c.hash) && f()
					}

					function p() {
						r = !0, window.WebflowEditor = !0, o.off(u, d), E(function(e) {
							t.ajax({
								url: b("https://editor-api.webflow.com/api/editor/view"),
								data: {
									siteId: l.attr("data-wf-site")
								},
								xhrFields: {
									withCredentials: !0
								},
								dataType: "json",
								crossDomain: !0,
								success: m(e)
							})
						})
					}

					function m(t) {
						return function(e) {
							if (!e) {
								console.error("Could not load editor data");
								return
							}
							e.thirdPartyCookiesSupported = t, g(v(e.scriptPath), function() {
								window.WebflowEditor(e)
							})
						}
					}

					function g(e, n) {
						t.ajax({
							type: "GET",
							url: e,
							dataType: "script",
							cache: !0
						}).then(n, y)
					}

					function y(t, e, n) {
						throw console.error("Could not load editor script: " + e), n
					}

					function v(t) {
						return t.indexOf("//") >= 0 ? t : b("https://editor-api.webflow.com" + t)
					}

					function b(t) {
						return t.replace(/([^:])\/\//g, "$1/")
					}

					function E(t) {
						var e = window.document.createElement("iframe");
						e.src = "https://webflow.com/site/third-party-cookie-check.html", e.style.display = "none", e.sandbox = "allow-scripts allow-same-origin";
						var n = function(i) {
							"WF_third_party_cookies_unsupported" === i.data ? (T(e, n), t(!1)) : "WF_third_party_cookies_supported" === i.data && (T(e, n), t(!0))
						};
						e.onerror = function() {
							T(e, n), t(!1)
						}, window.addEventListener("message", n, !1), window.document.body.appendChild(e)
					}

					function T(t, e) {
						window.removeEventListener("message", e, !1), t.remove()
					}
					return h ? f() : c.search ? (/[?&](edit)(?:[=&?]|$)/.test(c.search) || /\?edit$/.test(c.href)) && f() : o.on(u, d).triggerHandler(u), s
				})
			},
			2338: function(t, e, n) {
				"use strict";
				n(3949).define("focus-visible", t.exports = function() {
					function t(t) {
						var e = !0,
							n = !1,
							i = null,
							a = {
								text: !0,
								search: !0,
								url: !0,
								tel: !0,
								email: !0,
								password: !0,
								number: !0,
								date: !0,
								month: !0,
								week: !0,
								time: !0,
								datetime: !0,
								"datetime-local": !0
							};

						function r(t) {
							return !!t && t !== document && "HTML" !== t.nodeName && "BODY" !== t.nodeName && "classList" in t && "contains" in t.classList || !1
						}

						function s(t) {
							var e = t.type,
								n = t.tagName;
							return "INPUT" === n && !!a[e] && !t.readOnly || "TEXTAREA" === n && !t.readOnly || !!t.isContentEditable || !1
						}

						function o(t) {
							if (!t.getAttribute("data-wf-focus-visible")) t.setAttribute("data-wf-focus-visible", "true")
						}

						function l(t) {
							if (!!t.getAttribute("data-wf-focus-visible")) t.removeAttribute("data-wf-focus-visible")
						}

						function c(n) {
							if (!n.metaKey && !n.altKey && !n.ctrlKey) r(t.activeElement) && o(t.activeElement), e = !0
						}

						function u() {
							e = !1
						}

						function f(t) {
							if (!!r(t.target))(e || s(t.target)) && o(t.target)
						}

						function h(t) {
							if (!!r(t.target)) t.target.hasAttribute("data-wf-focus-visible") && (n = !0, window.clearTimeout(i), i = window.setTimeout(function() {
								n = !1
							}, 100), l(t.target))
						}

						function d() {
							"hidden" === document.visibilityState && (n && (e = !0), p())
						}

						function p() {
							document.addEventListener("mousemove", g), document.addEventListener("mousedown", g), document.addEventListener("mouseup", g), document.addEventListener("pointermove", g), document.addEventListener("pointerdown", g), document.addEventListener("pointerup", g), document.addEventListener("touchmove", g), document.addEventListener("touchstart", g), document.addEventListener("touchend", g)
						}

						function m() {
							document.removeEventListener("mousemove", g), document.removeEventListener("mousedown", g), document.removeEventListener("mouseup", g), document.removeEventListener("pointermove", g), document.removeEventListener("pointerdown", g), document.removeEventListener("pointerup", g), document.removeEventListener("touchmove", g), document.removeEventListener("touchstart", g), document.removeEventListener("touchend", g)
						}

						function g(t) {
							if (!t.target.nodeName || "html" !== t.target.nodeName.toLowerCase()) e = !1, m()
						}
						document.addEventListener("keydown", c, !0), document.addEventListener("mousedown", u, !0), document.addEventListener("pointerdown", u, !0), document.addEventListener("touchstart", u, !0), document.addEventListener("visibilitychange", d, !0), p(), t.addEventListener("focus", f, !0), t.addEventListener("blur", h, !0)
					}
					return {
						ready: function e() {
							if ("undefined" != typeof document) try {
								document.querySelector(":focus-visible")
							} catch (e) {
								t(document)
							}
						}
					}
				})
			},
			8334: function(t, e, n) {
				"use strict";
				var i = n(3949);
				i.define("focus", t.exports = function() {
					var t = [],
						e = !1;

					function n(n) {
						e && (n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation(), t.unshift(n))
					}

					function a(t) {
						var e = t.target,
							n = e.tagName;
						return /^a$/i.test(n) && null != e.href || /^(button|textarea)$/i.test(n) && !0 !== e.disabled || /^input$/i.test(n) && /^(button|reset|submit|radio|checkbox)$/i.test(e.type) && !e.disabled || !/^(button|input|textarea|select|a)$/i.test(n) && !Number.isNaN(Number.parseFloat(e.tabIndex)) || /^audio$/i.test(n) || /^video$/i.test(n) && !0 === e.controls
					}

					function r(n) {
						a(n) && (e = !0, setTimeout(() => {
							for (e = !1, n.target.focus(); t.length > 0;) {
								var i = t.pop();
								i.target.dispatchEvent(new MouseEvent(i.type, i))
							}
						}, 0))
					}
					return {
						ready: function t() {
							"undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within") && i.env.safari && (document.addEventListener("mousedown", r, !0), document.addEventListener("mouseup", n, !0), document.addEventListener("click", n, !0))
						}
					}
				})
			},
			7199: function(t) {
				"use strict";
				var e = window.jQuery,
					n = {},
					i = [],
					a = ".w-ix",
					r = {
						reset: function(t, e) {
							e.__wf_intro = null
						},
						intro: function(t, i) {
							if (!i.__wf_intro) i.__wf_intro = !0, e(i).triggerHandler(n.types.INTRO)
						},
						outro: function(t, i) {
							if (!!i.__wf_intro) i.__wf_intro = null, e(i).triggerHandler(n.types.OUTRO)
						}
					};
				n.triggers = {}, n.types = {
					INTRO: "w-ix-intro" + a,
					OUTRO: "w-ix-outro" + a
				}, n.init = function() {
					for (var t = i.length, a = 0; a < t; a++) {
						var s = i[a];
						s[0](0, s[1])
					}
					i = [], e.extend(n.triggers, r)
				}, n.async = function() {
					for (var t in r) {
						var e = r[t];
						if (!!r.hasOwnProperty(t)) n.triggers[t] = function(t, n) {
							i.push([e, n])
						}
					}
				}, n.async(), t.exports = n
			},
			5134: function(t, e, n) {
				"use strict";
				var i = n(7199);

				function a(t, e) {
					var n = document.createEvent("CustomEvent");
					n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n)
				}
				var r = window.jQuery,
					s = {},
					o = ".w-ix",
					l = {
						reset: function(t, e) {
							i.triggers.reset(t, e)
						},
						intro: function(t, e) {
							i.triggers.intro(t, e), a(e, "COMPONENT_ACTIVE")
						},
						outro: function(t, e) {
							i.triggers.outro(t, e), a(e, "COMPONENT_INACTIVE")
						}
					};
				s.triggers = {}, s.types = {
					INTRO: "w-ix-intro" + o,
					OUTRO: "w-ix-outro" + o
				}, r.extend(s.triggers, l), t.exports = s
			},
			941: function(t, e, n) {
				"use strict";
				var i = n(3949),
					a = n(6011);
				a.setEnv(i.env), i.define("ix2", t.exports = function() {
					return a
				})
			},
			3949: function(t, e, n) {
				"use strict";
				var i, a, r = {},
					s = {},
					o = [],
					l = window.Webflow || [],
					c = window.jQuery,
					u = c(window),
					f = c(document),
					h = c.isFunction,
					d = r._ = n(5756),
					p = r.tram = n(5487) && c.tram,
					m = !1,
					g = !1;

				function y(t) {
					r.env() && (h(t.design) && u.on("__wf_design", t.design), h(t.preview) && u.on("__wf_preview", t.preview)), h(t.destroy) && u.on("__wf_destroy", t.destroy), t.ready && h(t.ready) && v(t)
				}

				function v(t) {
					if (m) {
						t.ready();
						return
					}
					if (!d.contains(o, t.ready)) o.push(t.ready)
				}

				function b(t) {
					h(t.design) && u.off("__wf_design", t.design), h(t.preview) && u.off("__wf_preview", t.preview), h(t.destroy) && u.off("__wf_destroy", t.destroy), t.ready && h(t.ready) && E(t)
				}

				function E(t) {
					o = d.filter(o, function(e) {
						return e !== t.ready
					})
				}
				p.config.hideBackface = !1, p.config.keepInherited = !0, r.define = function(t, e, n) {
					s[t] && b(s[t]);
					var i = s[t] = e(c, d, n) || {};
					return y(i), i
				}, r.require = function(t) {
					return s[t]
				}, r.push = function(t) {
					if (m) {
						h(t) && t();
						return
					}
					l.push(t)
				}, r.env = function(t) {
					var e = window.__wf_design,
						n = void 0 !== e;
					return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n
				};
				var T = navigator.userAgent.toLowerCase(),
					_ = r.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
					I = r.env.chrome = /chrome/.test(T) && /Google/.test(navigator.vendor) && parseInt(T.match(/chrome\/(\d+)\./)[1], 10),
					x = r.env.ios = /(ipod|iphone|ipad)/.test(T);
				r.env.safari = /safari/.test(T) && !I && !x, _ && f.on("touchstart mousedown", function(t) {
					i = t.target
				}), r.validClick = _ ? function(t) {
					return t === i || c.contains(t, i)
				} : function() {
					return !0
				};
				var A = "resize.webflow orientationchange.webflow load.webflow",
					S = "scroll.webflow " + A;

				function w(t, e) {
					var n = [],
						i = {};
					return i.up = d.throttle(function(t) {
						d.each(n, function(e) {
							e(t)
						})
					}), t && e && t.on(e, i.up), i.on = function(t) {
						if (!("function" != typeof t || d.contains(n, t))) n.push(t)
					}, i.off = function(t) {
						if (!arguments.length) {
							n = [];
							return
						}
						n = d.filter(n, function(e) {
							return e !== t
						})
					}, i
				}

				function O(t) {
					h(t) && t()
				}

				function C() {
					g = !1, d.each(s, y)
				}

				function P() {
					a && (a.reject(), u.off("load", a.resolve)), a = new c.Deferred, u.on("load", a.resolve)
				}
				r.resize = w(u, A), r.scroll = w(u, S), r.redraw = w(), r.location = function(t) {
					window.location = t
				}, r.env() && (r.location = function() {}), r.ready = function() {
					m = !0, g ? C() : d.each(o, O), d.each(l, O), r.resize.up()
				}, r.load = function(t) {
					a.then(t)
				}, r.destroy = function(t) {
					t = t || {}, g = !0, u.triggerHandler("__wf_destroy"), null != t.domready && (m = t.domready), d.each(s, b), r.resize.off(), r.scroll.off(), r.redraw.off(), o = [], l = [], "pending" === a.state() && P()
				}, c(r.ready), P(), t.exports = window.Webflow = r
			},
			7624: function(t, e, n) {
				"use strict";
				var i = n(3949);
				i.define("links", t.exports = function(t, e) {
					var n, a, r, s = {},
						o = t(window),
						l = i.env(),
						c = window.location,
						u = document.createElement("a"),
						f = "w--current",
						h = /index\.(html|php)$/,
						d = /\/$/;

					function p() {
						n = l && i.env("design"), r = i.env("slug") || c.pathname || "", i.scroll.off(g), a = [];
						for (var t = document.links, e = 0; e < t.length; ++e) m(t[e]);
						a.length && (i.scroll.on(g), g())
					}

					function m(e) {
						if (e.getAttribute("hreflang")) return;
						var i = n && e.getAttribute("href-disabled") || e.getAttribute("href");
						if (u.href = i, i.indexOf(":") >= 0) return;
						var s = t(e);
						if (u.hash.length > 1 && u.host + u.pathname === c.host + c.pathname) {
							if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash)) return;
							var o = t(u.hash);
							o.length && a.push({
								link: s,
								sec: o,
								active: !1
							});
							return
						}
						if ("#" !== i && "" !== i) y(s, f, u.href === c.href || i === r || h.test(i) && d.test(r))
					}

					function g() {
						var t = o.scrollTop(),
							n = o.height();
						e.each(a, function(e) {
							if (e.link.attr("hreflang")) return;
							var i = e.link,
								a = e.sec,
								r = a.offset().top,
								s = a.outerHeight(),
								o = .5 * n,
								l = a.is(":visible") && r + s - o >= t && r + o <= t + n;
							if (e.active !== l) e.active = l, y(i, f, l)
						})
					}

					function y(t, e, n) {
						var i = t.hasClass(e);
						if ((!n || !i) && (!!n || !!i)) n ? t.addClass(e) : t.removeClass(e)
					}
					return s.ready = s.design = s.preview = p, s
				})
			},
			286: function(t, e, n) {
				"use strict";
				var i = n(3949);
				i.define("scroll", t.exports = function(t) {
					var e = {
							WF_CLICK_EMPTY: "click.wf-empty-link",
							WF_CLICK_SCROLL: "click.wf-scroll"
						},
						n = window.location,
						a = m() ? null : window.history,
						r = t(window),
						s = t(document),
						o = t(document.body),
						l = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(t) {
							window.setTimeout(t, 15)
						},
						c = i.env("editor") ? ".w-editor-body" : "body",
						u = "header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])",
						f = 'a[href="#"]',
						h = 'a[href*="#"]:not(.w-tab-link):not(' + f + ")",
						d = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
						p = document.createElement("style");

					function m() {
						try {
							return !!window.frameElement
						} catch (t) {
							return !0
						}
					}
					p.appendChild(document.createTextNode(d));
					var g = /^#[a-zA-Z0-9][\w:.-]*$/;

					function y(t) {
						return g.test(t.hash) && t.host + t.pathname === n.host + n.pathname
					}
					let v = "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");

					function b() {
						return "none" === document.body.getAttribute("data-wf-scroll-motion") || v.matches
					}

					function E(t, e) {
						var n;
						switch (e) {
							case "add":
								(n = t.attr("tabindex")) ? t.attr("data-wf-tabindex-swap", n): t.attr("tabindex", "-1");
								break;
							case "remove":
								(n = t.attr("data-wf-tabindex-swap")) ? (t.attr("tabindex", n), t.removeAttr("data-wf-tabindex-swap")) : t.removeAttr("tabindex")
						}
						t.toggleClass("wf-force-outline-none", "add" === e)
					}

					function T(e) {
						var n = e.currentTarget;
						if (!(i.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(n.className))) {
							var a = y(n) ? n.hash : "";
							if ("" !== a) {
								var r = t(a);
								if (!r.length) return;
								e && (e.preventDefault(), e.stopPropagation()), _(a, e), window.setTimeout(function() {
									I(r, function() {
										E(r, "add"), r.get(0).focus({
											preventScroll: !0
										}), E(r, "remove")
									})
								}, e ? 0 : 300)
							}
						}
					}

					function _(t) {
						n.hash !== t && a && a.pushState && !(i.env.chrome && "file:" === n.protocol) && (a.state && a.state.hash) !== t && a.pushState({
							hash: t
						}, "", t)
					}

					function I(t, e) {
						var n = r.scrollTop(),
							i = x(t);
						if (n !== i) {
							var a = A(t, n, i),
								s = Date.now(),
								o = function() {
									var t = Date.now() - s;
									window.scroll(0, S(n, i, t, a)), t <= a ? l(o) : "function" == typeof e && e()
								};
							l(o)
						}
					}

					function x(e) {
						var n = t(u),
							i = "fixed" === n.css("position") ? n.outerHeight() : 0,
							a = e.offset().top - i;
						if ("mid" === e.data("scroll")) {
							var s = r.height() - i,
								o = e.outerHeight();
							o < s && (a -= Math.round((s - o) / 2))
						}
						return a
					}

					function A(t, e, n) {
						if (b()) return 0;
						var i = 1;
						return o.add(t).each(function(t, e) {
							var n = parseFloat(e.getAttribute("data-scroll-time"));
							!isNaN(n) && n >= 0 && (i = n)
						}), (472.143 * Math.log(Math.abs(e - n) + 125) - 2e3) * i
					}

					function S(t, e, n, i) {
						return n > i ? e : t + (e - t) * w(n / i)
					}

					function w(t) {
						return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
					}
					return {
						ready: function t() {
							var {
								WF_CLICK_EMPTY: t,
								WF_CLICK_SCROLL: n
							} = e;
							s.on(n, h, T), s.on(t, f, function(t) {
								t.preventDefault()
							}), document.head.insertBefore(p, document.head.firstChild)
						}
					}
				})
			},
			3695: function(t, e, n) {
				"use strict";
				n(3949).define("touch", t.exports = function(t) {
					var e = {},
						n = window.getSelection;

					function i(t) {
						var e, i, r = !1,
							s = !1,
							o = Math.min(Math.round(.04 * window.innerWidth), 40);

						function l(t) {
							var n = t.touches;
							if (!n || !(n.length > 1)) r = !0, n ? (s = !0, e = n[0].clientX) : e = t.clientX, i = e
						}

						function c(t) {
							if (!!r) {
								if (s && "mousemove" === t.type) {
									t.preventDefault(), t.stopPropagation();
									return
								}
								var e = t.touches,
									l = e ? e[0].clientX : t.clientX,
									c = l - i;
								i = l, Math.abs(c) > o && n && "" === String(n()) && (a("swipe", t, {
									direction: c > 0 ? "right" : "left"
								}), f())
							}
						}

						function u(t) {
							if (!!r) {
								if (r = !1, s && "mouseup" === t.type) {
									t.preventDefault(), t.stopPropagation(), s = !1;
									return
								}
							}
						}

						function f() {
							r = !1
						}

						function h() {
							t.removeEventListener("touchstart", l, !1), t.removeEventListener("touchmove", c, !1), t.removeEventListener("touchend", u, !1), t.removeEventListener("touchcancel", f, !1), t.removeEventListener("mousedown", l, !1), t.removeEventListener("mousemove", c, !1), t.removeEventListener("mouseup", u, !1), t.removeEventListener("mouseout", f, !1), t = null
						}
						t.addEventListener("touchstart", l, !1), t.addEventListener("touchmove", c, !1), t.addEventListener("touchend", u, !1), t.addEventListener("touchcancel", f, !1), t.addEventListener("mousedown", l, !1), t.addEventListener("mousemove", c, !1), t.addEventListener("mouseup", u, !1), t.addEventListener("mouseout", f, !1), this.destroy = h
					}

					function a(e, n, i) {
						var a = t.Event(e, {
							originalEvent: n
						});
						t(n.target).trigger(a, i)
					}
					return t.event.special.tap = {
						bindType: "click",
						delegateType: "click"
					}, e.init = function(e) {
						return (e = "string" == typeof e ? t(e).get(0) : e) ? new i(e) : null
					}, e.instance = e.init(document), e
				})
			},
			6524: function(t, e) {
				"use strict";
				var n;

				function i(t, e, n, i, a, r, s, o, l, c, u, f, h) {
					return function(d) {
						t(d);
						var p = d.form,
							m = {
								name: p.attr("data-name") || p.attr("name") || "Untitled Form",
								pageId: p.attr("data-wf-page-id") || "",
								elementId: p.attr("data-wf-element-id") || "",
								domain: f("html").attr("data-wf-domain") || null,
								source: e.href,
								test: n.env(),
								fields: {},
								fileUploads: {},
								dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(p.html()),
								trackingCookies: i()
							};
						let g = p.attr("data-wf-flow");
						g && (m.wfFlow = g), a(d);
						var y = r(p, m.fields);
						if (y) return s(y);
						if (m.fileUploads = o(p), l(d), !c) {
							u(d);
							return
						}
						f.ajax({
							url: h,
							type: "POST",
							data: m,
							dataType: "json",
							crossDomain: !0
						}).done(function(t) {
							t && 200 === t.code && (d.success = !0), u(d)
						}).fail(function() {
							u(d)
						})
					}
				}
				n = {
					value: !0
				}, Object.defineProperty(e, "default", {
					enumerable: !0,
					get: function() {
						return i
					}
				})
			},
			7527: function(t, e, n) {
				"use strict";
				var i = n(3949);
				let a = (t, e, n, i) => {
					let a = document.createElement("div");
					e.appendChild(a), turnstile.render(a, {
						sitekey: t,
						callback: function(t) {
							n(t)
						},
						"error-callback": function() {
							i()
						}
					})
				};
				i.define("forms", t.exports = function(t, e) {
					let r;
					let s = "TURNSTILE_LOADED";
					var o, l, c, u, f, h = {},
						d = t(document),
						p = window.location,
						m = window.XDomainRequest && !window.atob,
						g = ".w-form",
						y = /e(-)?mail/i,
						v = /^\S+@\S+$/,
						b = window.alert,
						E = i.env();
					let T = d.find("[data-turnstile-sitekey]").data("turnstile-sitekey");
					var _ = /list-manage[1-9]?.com/i,
						I = e.debounce(function() {
							b("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
						}, 100);

					function x() {
						if (u = "https://webflow.com/api/v1/form/" + (l = t("html").attr("data-wf-site")), m && u.indexOf("https://webflow.com") >= 0 && (u = u.replace("https://webflow.com", "https://formdata.webflow.com")), f = `${u}/signFile`, !!(o = t(g + " form")).length) o.each(S)
					}

					function A() {
						T && ((r = document.createElement("script")).src = "https://challenges.cloudflare.com/turnstile/v0/api.js", document.head.appendChild(r), r.onload = () => {
							d.trigger(s)
						})
					}

					function S(e, r) {
						var o = t(r),
							c = t.data(r, g);
						!c && (c = t.data(r, g, {
							form: o
						})), O(c);
						var f = o.closest("div.w-form");
						c.done = f.find("> .w-form-done"), c.fail = f.find("> .w-form-fail"), c.fileUploads = f.find(".w-file-upload"), c.fileUploads.each(function(t) {
							V(t, c)
						}), T && (c.wait = !1, C(c), d.on("undefined" != typeof turnstile ? "ready" : s, function() {
							a(T, r, t => {
								c.turnstileToken = t, O(c)
							}, () => {
								C(c)
							})
						}));
						var h = c.form.attr("aria-label") || c.form.attr("data-name") || "Form";
						!c.done.attr("aria-label") && c.form.attr("aria-label", h), c.done.attr("tabindex", "-1"), c.done.attr("role", "region"), !c.done.attr("aria-label") && c.done.attr("aria-label", h + " success"), c.fail.attr("tabindex", "-1"), c.fail.attr("role", "region"), !c.fail.attr("aria-label") && c.fail.attr("aria-label", h + " failure");
						var m = c.action = o.attr("action");
						if (c.handler = null, c.redirect = o.attr("data-redirect"), _.test(m)) {
							c.handler = F;
							return
						}
						if (!m) {
							if (l) {
								c.handler = (() => (0, n(6524).default)(O, p, i, L, N, P, b, M, C, l, D, t, u))();
								return
							}
							I()
						}
					}

					function w() {
						c = !0, d.on("submit", g + " form", function(e) {
							var n = t.data(this, g);
							n.handler && (n.evt = e, n.handler(n))
						});
						let e = ".w-checkbox-input",
							n = ".w-radio-input",
							i = "w--redirected-checked",
							a = "w--redirected-focus",
							r = "w--redirected-focus-visible",
							s = ":focus-visible, [data-wf-focus-visible]",
							o = [
								["checkbox", e],
								["radio", n]
							];
						d.on("change", g + ' form input[type="checkbox"]:not(' + e + ")", n => {
							t(n.target).siblings(e).toggleClass(i)
						}), d.on("change", g + ' form input[type="radio"]', a => {
							t(`input[name="${a.target.name}"]:not(${e})`).map((e, a) => t(a).siblings(n).removeClass(i));
							let r = t(a.target);
							!r.hasClass("w-radio-input") && r.siblings(n).addClass(i)
						}), o.forEach(([e, n]) => {
							d.on("focus", g + ` form input[type="${e}"]:not(` + n + ")", e => {
								t(e.target).siblings(n).addClass(a), t(e.target).filter(s).siblings(n).addClass(r)
							}), d.on("blur", g + ` form input[type="${e}"]:not(` + n + ")", e => {
								t(e.target).siblings(n).removeClass(`${a} ${r}`)
							})
						})
					}

					function O(t) {
						var e = t.btn = t.form.find(':input[type="submit"]');
						t.wait = t.btn.attr("data-wait") || null, t.success = !1, e.prop("disabled", !!(T && !t.turnstileToken)), t.label && e.val(t.label)
					}

					function C(t) {
						var e = t.btn,
							n = t.wait;
						e.prop("disabled", !0), n && (t.label = e.val(), e.val(n))
					}

					function P(e, n) {
						var i = null;
						return n = n || {}, e.find(':input:not([type="submit"]):not([type="file"])').each(function(a, r) {
							var s = t(r),
								o = s.attr("type"),
								l = s.attr("data-name") || s.attr("name") || "Field " + (a + 1);
							l = encodeURIComponent(l);
							var c = s.val();
							if ("checkbox" === o) c = s.is(":checked");
							else if ("radio" === o) {
								if (null === n[l] || "string" == typeof n[l]) return;
								c = e.find('input[name="' + s.attr("name") + '"]:checked').val() || null
							}
							"string" == typeof c && (c = t.trim(c)), n[l] = c, i = i || R(s, o, l, c)
						}), i
					}

					function M(e) {
						var n = {};
						return e.find(':input[type="file"]').each(function(e, i) {
							var a = t(i),
								r = a.attr("data-name") || a.attr("name") || "File " + (e + 1),
								s = a.attr("data-value");
							"string" == typeof s && (s = t.trim(s)), n[r] = s
						}), n
					}
					h.ready = h.design = h.preview = function() {
						A(), x(), !E && !c && w()
					};
					let k = {
						_mkto_trk: "marketo"
					};

					function L() {
						return document.cookie.split("; ").reduce(function(t, e) {
							let n = e.split("="),
								i = n[0];
							if (i in k) {
								let e = k[i],
									a = n.slice(1).join("=");
								t[e] = a
							}
							return t
						}, {})
					}

					function R(t, e, n, i) {
						var a = null;
						return "password" === e ? a = "Passwords cannot be submitted." : t.attr("required") ? i ? y.test(t.attr("type")) && !v.test(i) && (a = "Please enter a valid email address for: " + n) : a = "Please fill out the required field: " + n : "g-recaptcha-response" === n && !i && (a = "Please confirm youâ€™re not a robot."), a
					}

					function F(n) {
						O(n);
						var i, a = n.form,
							r = {};
						if (/^https/.test(p.href) && !/^https/.test(n.action)) {
							a.attr("method", "post");
							return
						}
						N(n);
						var s = P(a, r);
						if (s) return b(s);
						C(n), e.each(r, function(t, e) {
							y.test(e) && (r.EMAIL = t), /^((full[ _-]?)?name)$/i.test(e) && (i = t), /^(first[ _-]?name)$/i.test(e) && (r.FNAME = t), /^(last[ _-]?name)$/i.test(e) && (r.LNAME = t)
						}), i && !r.FNAME && (i = i.split(" "), r.FNAME = i[0], r.LNAME = r.LNAME || i[1]);
						var o = n.action.replace("/post?", "/post-json?") + "&c=?",
							l = o.indexOf("u=") + 2;
						l = o.substring(l, o.indexOf("&", l));
						var c = o.indexOf("id=") + 3;
						r["b_" + l + "_" + (c = o.substring(c, o.indexOf("&", c)))] = "", t.ajax({
							url: o,
							data: r,
							dataType: "jsonp"
						}).done(function(t) {
							n.success = "success" === t.result || /already/.test(t.msg), !n.success && console.info("MailChimp error: " + t.msg), D(n)
						}).fail(function() {
							D(n)
						})
					}

					function D(t) {
						var e = t.form,
							n = t.redirect,
							a = t.success;
						if (a && n) {
							i.location(n);
							return
						}
						t.done.toggle(a), t.fail.toggle(!a), a ? t.done.focus() : t.fail.focus(), e.toggle(!a), O(t)
					}

					function N(t) {
						t.evt && t.evt.preventDefault(), t.evt = null
					}

					function V(e, n) {
						if (!!n.fileUploads && !!n.fileUploads[e]) {
							var i, a = t(n.fileUploads[e]),
								r = a.find("> .w-file-upload-default"),
								s = a.find("> .w-file-upload-uploading"),
								o = a.find("> .w-file-upload-success"),
								l = a.find("> .w-file-upload-error"),
								c = r.find(".w-file-upload-input"),
								u = r.find(".w-file-upload-label"),
								f = u.children(),
								h = l.find(".w-file-upload-error-msg"),
								d = o.find(".w-file-upload-file"),
								p = o.find(".w-file-remove-link"),
								m = d.find(".w-file-upload-file-name"),
								g = h.attr("data-w-size-error"),
								y = h.attr("data-w-type-error"),
								v = h.attr("data-w-generic-error");
							if (!E && u.on("click keydown", function(t) {
									if ("keydown" !== t.type || 13 === t.which || 32 === t.which) t.preventDefault(), c.click()
								}), u.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), p.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), E) c.on("click", function(t) {
								t.preventDefault()
							}), u.on("click", function(t) {
								t.preventDefault()
							}), f.on("click", function(t) {
								t.preventDefault()
							});
							else {
								p.on("click keydown", function(t) {
									if ("keydown" === t.type) {
										if (13 !== t.which && 32 !== t.which) return;
										t.preventDefault()
									}
									c.removeAttr("data-value"), c.val(""), m.html(""), r.toggle(!0), o.toggle(!1), u.focus()
								}), c.on("change", function(t) {
									if (!!(i = t.target && t.target.files && t.target.files[0])) r.toggle(!1), l.toggle(!1), s.toggle(!0), s.focus(), m.text(i.name), !x() && C(n), n.fileUploads[e].uploading = !0, B(i, _)
								});
								var b = u.outerHeight();
								c.height(b), c.width(1)
							}
						}

						function T(t) {
							var i = t.responseJSON && t.responseJSON.msg,
								a = v;
							"string" == typeof i && 0 === i.indexOf("InvalidFileTypeError") ? a = y : "string" == typeof i && 0 === i.indexOf("MaxFileSizeError") && (a = g), h.text(a), c.removeAttr("data-value"), c.val(""), s.toggle(!1), r.toggle(!0), l.toggle(!0), l.focus(), n.fileUploads[e].uploading = !1, !x() && O(n)
						}

						function _(t, e) {
							if (t) return T(t);
							var n = e.fileName,
								a = e.postData,
								r = e.fileId,
								s = e.s3Url;
							c.attr("data-value", r), U(s, a, i, n, I)
						}

						function I(t) {
							if (t) return T(t);
							s.toggle(!1), o.css("display", "inline-block"), o.focus(), n.fileUploads[e].uploading = !1, !x() && O(n)
						}

						function x() {
							return (n.fileUploads && n.fileUploads.toArray() || []).some(function(t) {
								return t.uploading
							})
						}
					}

					function B(e, n) {
						var i = new URLSearchParams({
							name: e.name,
							size: e.size
						});
						t.ajax({
							type: "GET",
							url: `${f}?${i}`,
							crossDomain: !0
						}).done(function(t) {
							n(null, t)
						}).fail(function(t) {
							n(t)
						})
					}

					function U(e, n, i, a, r) {
						var s = new FormData;
						for (var o in n) s.append(o, n[o]);
						s.append("file", i, a), t.ajax({
							type: "POST",
							url: e,
							data: s,
							processData: !1,
							contentType: !1
						}).done(function() {
							r(null)
						}).fail(function(t) {
							r(t)
						})
					}
					return h
				})
			},
			3487: function(t, e) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
						value: !0
					}),
					function t(t, e) {
						for (var n in e) Object.defineProperty(t, n, {
							enumerable: !0,
							get: e[n]
						})
					}(e, {
						strFromU8: function() {
							return W
						},
						unzip: function() {
							return Q
						}
					});
				let n = {},
					i = function(t, e, i, a, r) {
						let s = new Worker(n[e] || (n[e] = URL.createObjectURL(new Blob([t + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], {
							type: "text/javascript"
						}))));
						return s.onmessage = function(t) {
							let e = t.data,
								n = e.$e$;
							if (n) {
								let t = Error(n[0]);
								t.code = n[1], t.stack = n[2], r(t, null)
							} else r(null, e)
						}, s.postMessage(i, a), s
					},
					a = Uint8Array,
					r = Uint16Array,
					s = Uint32Array,
					o = new a([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
					l = new a([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
					c = new a([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
					u = function(t, e) {
						let n = new r(31);
						for (var i = 0; i < 31; ++i) n[i] = e += 1 << t[i - 1];
						let a = new s(n[30]);
						for (i = 1; i < 30; ++i)
							for (let t = n[i]; t < n[i + 1]; ++t) a[t] = t - n[i] << 5 | i;
						return [n, a]
					},
					f = u(o, 2),
					h = f[0],
					d = f[1];
				h[28] = 258, d[258] = 28;
				let p = u(l, 0)[0],
					m = new r(32768);
				for (var g = 0; g < 32768; ++g) {
					let t = (43690 & g) >>> 1 | (21845 & g) << 1;
					t = (61680 & (t = (52428 & t) >>> 2 | (13107 & t) << 2)) >>> 4 | (3855 & t) << 4, m[g] = ((65280 & t) >>> 8 | (255 & t) << 8) >>> 1
				}
				let y = function(t, e, n) {
						let i;
						let a = t.length,
							s = 0,
							o = new r(e);
						for (; s < a; ++s) t[s] && ++o[t[s] - 1];
						let l = new r(e);
						for (s = 0; s < e; ++s) l[s] = l[s - 1] + o[s - 1] << 1;
						if (n) {
							i = new r(1 << e);
							let n = 15 - e;
							for (s = 0; s < a; ++s)
								if (t[s]) {
									let a = s << 4 | t[s],
										r = e - t[s],
										o = l[t[s] - 1]++ << r;
									for (let t = o | (1 << r) - 1; o <= t; ++o) i[m[o] >>> n] = a
								}
						} else
							for (i = new r(a), s = 0; s < a; ++s) t[s] && (i[s] = m[l[t[s] - 1]++] >>> 15 - t[s]);
						return i
					},
					v = new a(288);
				for (g = 0; g < 144; ++g) v[g] = 8;
				for (g = 144; g < 256; ++g) v[g] = 9;
				for (g = 256; g < 280; ++g) v[g] = 7;
				for (g = 280; g < 288; ++g) v[g] = 8;
				let b = new a(32);
				for (g = 0; g < 32; ++g) b[g] = 5;
				let E = y(v, 9, 1),
					T = y(b, 5, 1),
					_ = function(t) {
						let e = t[0];
						for (let n = 1; n < t.length; ++n) t[n] > e && (e = t[n]);
						return e
					},
					I = function(t, e, n) {
						let i = e / 8 | 0;
						return (t[i] | t[i + 1] << 8) >> (7 & e) & n
					},
					x = function(t, e) {
						let n = e / 8 | 0;
						return (t[n] | t[n + 1] << 8 | t[n + 2] << 16) >> (7 & e)
					},
					A = function(t) {
						return (t + 7) / 8 | 0
					},
					S = function(t, e, n) {
						(null == e || e < 0) && (e = 0), (null == n || n > t.length) && (n = t.length);
						let i = new(2 === t.BYTES_PER_ELEMENT ? r : 4 === t.BYTES_PER_ELEMENT ? s : a)(n - e);
						return i.set(t.subarray(e, n)), i
					},
					w = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"];
				var O = function(t, e, n) {
					let i = Error(e || w[t]);
					if (i.code = t, Error.captureStackTrace && Error.captureStackTrace(i, O), !n) throw i;
					return i
				};
				let C = function(t, e, n) {
						let i = t.length;
						if (!i || n && n.f && !n.l) return e || new a(0);
						let r = !e || n,
							s = !n || n.i;
						n || (n = {}), e || (e = new a(3 * i));
						let u = function(t) {
								let n = e.length;
								if (t > n) {
									let i = new a(Math.max(2 * n, t));
									i.set(e), e = i
								}
							},
							f = n.f || 0,
							d = n.p || 0,
							m = n.b || 0,
							g = n.l,
							v = n.d,
							b = n.m,
							w = n.n,
							C = 8 * i;
						do {
							if (!g) {
								f = I(t, d, 1);
								let o = I(t, d + 1, 3);
								if (d += 3, !o) {
									let a = t[(M = A(d) + 4) - 4] | t[M - 3] << 8,
										o = M + a;
									if (o > i) {
										s && O(0);
										break
									}
									r && u(m + a), e.set(t.subarray(M, o), m), n.b = m += a, n.p = d = 8 * o, n.f = f;
									continue
								}
								if (1 === o) g = E, v = T, b = 9, w = 5;
								else if (2 === o) {
									let e = I(t, d, 31) + 257,
										n = I(t, d + 10, 15) + 4,
										i = e + I(t, d + 5, 31) + 1;
									d += 14;
									let r = new a(i),
										s = new a(19);
									for (var P = 0; P < n; ++P) s[c[P]] = I(t, d + 3 * P, 7);
									d += 3 * n;
									let o = _(s),
										l = (1 << o) - 1,
										u = y(s, o, 1);
									for (P = 0; P < i;) {
										let e = u[I(t, d, l)];
										if (d += 15 & e, (M = e >>> 4) < 16) r[P++] = M;
										else {
											var M, k = 0;
											let e = 0;
											for (16 === M ? (e = 3 + I(t, d, 3), d += 2, k = r[P - 1]) : 17 === M ? (e = 3 + I(t, d, 7), d += 3) : 18 === M && (e = 11 + I(t, d, 127), d += 7); e--;) r[P++] = k
										}
									}
									let f = r.subarray(0, e);
									var L = r.subarray(e);
									b = _(f), w = _(L), g = y(f, b, 1), v = y(L, w, 1)
								} else O(1);
								if (d > C) {
									s && O(0);
									break
								}
							}
							r && u(m + 131072);
							let S = (1 << b) - 1,
								F = (1 << w) - 1,
								D = d;
							for (;; D = d) {
								let n = (k = g[x(t, d) & S]) >>> 4;
								if ((d += 15 & k) > C) {
									s && O(0);
									break
								}
								if (k || O(2), n < 256) e[m++] = n;
								else {
									if (256 === n) {
										D = d, g = null;
										break
									} {
										let i = n - 254;
										if (n > 264) {
											var R = o[P = n - 257];
											i = I(t, d, (1 << R) - 1) + h[P], d += R
										}
										let a = v[x(t, d) & F],
											c = a >>> 4;
										if (a || O(3), d += 15 & a, L = p[c], c > 3 && (R = l[c], L += x(t, d) & (1 << R) - 1, d += R), d > C) {
											s && O(0);
											break
										}
										r && u(m + 131072);
										let f = m + i;
										for (; m < f; m += 4) e[m] = e[m - L], e[m + 1] = e[m + 1 - L], e[m + 2] = e[m + 2 - L], e[m + 3] = e[m + 3 - L];
										m = f
									}
								}
							}
							n.l = g, n.p = D, n.b = m, n.f = f, g && (f = 1, n.m = b, n.d = v, n.n = w)
						} while (!f);
						return m === e.length ? e : S(e, 0, m)
					},
					P = function(t, e) {
						let n = {};
						for (var i in t) n[i] = t[i];
						for (var i in e) n[i] = e[i];
						return n
					},
					M = function(t, e, n) {
						let i = t(),
							a = t.toString(),
							r = a.slice(a.indexOf("[") + 1, a.lastIndexOf("]")).replace(/\s+/g, "").split(",");
						for (let t = 0; t < i.length; ++t) {
							let a = i[t],
								s = r[t];
							if ("function" == typeof a) {
								e += ";" + s + "=";
								let t = a.toString();
								if (a.prototype) {
									if (-1 !== t.indexOf("[native code]")) {
										let n = t.indexOf(" ", 8) + 1;
										e += t.slice(n, t.indexOf("(", n))
									} else
										for (let n in e += t, a.prototype) e += ";" + s + ".prototype." + n + "=" + a.prototype[n].toString()
								} else e += t
							} else n[s] = a
						}
						return [e, n]
					},
					k = [],
					L = function(t) {
						let e = [];
						for (let n in t) t[n].buffer && e.push((t[n] = new t[n].constructor(t[n])).buffer);
						return e
					},
					R = function(t, e, n, a) {
						let r;
						if (!k[n]) {
							let e = "",
								i = {},
								a = t.length - 1;
							for (let n = 0; n < a; ++n) e = (r = M(t[n], e, i))[0], i = r[1];
							k[n] = M(t[a], e, i)
						}
						let s = P({}, k[n][1]);
						return i(k[n][0] + ";onmessage=function(e){for(var kz in e.data)self[kz]=e.data[kz];onmessage=" + e.toString() + "}", n, s, L(s), a)
					},
					F = function() {
						return [a, r, s, o, l, c, h, p, E, T, m, w, y, _, I, x, A, S, O, C, j, D, N]
					};
				var D = function(t) {
						return postMessage(t, [t.buffer])
					},
					N = function(t) {
						return t && t.size && new a(t.size)
					};
				let V = function(t, e, n, i, a, r) {
						var s = R(n, i, a, function(t, e) {
							s.terminate(), r(t, e)
						});
						return s.postMessage([t, e], e.consume ? [t.buffer] : []),
							function() {
								s.terminate()
							}
					},
					B = function(t, e) {
						return t[e] | t[e + 1] << 8
					},
					U = function(t, e) {
						return (t[e] | t[e + 1] << 8 | t[e + 2] << 16 | t[e + 3] << 24) >>> 0
					};

				function G(t, e, n) {
					return n || (n = e, e = {}), "function" != typeof n && O(7), V(t, e, [F], function(t) {
						return D(j(t.data[0], N(t.data[1])))
					}, 1, n)
				}

				function j(t, e) {
					return C(t, e)
				}
				let z = "undefined" != typeof TextDecoder && new TextDecoder,
					X = function(t) {
						for (let e = "", n = 0;;) {
							let i = t[n++],
								a = (i > 127) + (i > 223) + (i > 239);
							if (n + a > t.length) return [e, S(t, n - 1)];
							a ? 3 === a ? e += String.fromCharCode(55296 | (i = ((15 & i) << 18 | (63 & t[n++]) << 12 | (63 & t[n++]) << 6 | 63 & t[n++]) - 65536) >> 10, 56320 | 1023 & i) : e += 1 & a ? String.fromCharCode((31 & i) << 6 | 63 & t[n++]) : String.fromCharCode((15 & i) << 12 | (63 & t[n++]) << 6 | 63 & t[n++]) : e += String.fromCharCode(i)
						}
					};

				function W(t, e) {
					if (e) {
						let e = "";
						for (let n = 0; n < t.length; n += 16384) e += String.fromCharCode.apply(null, t.subarray(n, n + 16384));
						return e
					}
					if (z) return z.decode(t);
					{
						let e = X(t),
							n = e[0];
						return e[1].length && O(8), n
					}
				}
				let Y = function(t, e) {
						return e + 30 + B(t, e + 26) + B(t, e + 28)
					},
					H = function(t, e, n) {
						let i = B(t, e + 28),
							a = W(t.subarray(e + 46, e + 46 + i), !(2048 & B(t, e + 8))),
							r = e + 46 + i,
							s = U(t, e + 20),
							o = n && 0xffffffff === s ? z64e(t, r) : [s, U(t, e + 24), U(t, e + 42)],
							l = o[0],
							c = o[1],
							u = o[2];
						return [B(t, e + 10), l, c, a, r + B(t, e + 30) + B(t, e + 32), u]
					},
					q = "function" == typeof queueMicrotask ? queueMicrotask : "function" == typeof setTimeout ? setTimeout : function(t) {
						t()
					};

				function Q(t, e, n) {
					n || (n = e, e = {}), "function" != typeof n && O(7);
					let i = [],
						r = function() {
							for (let t = 0; t < i.length; ++t) i[t]()
						},
						s = {},
						o = function(t, e) {
							q(function() {
								n(t, e)
							})
						};
					q(function() {
						o = n
					});
					let l = t.length - 22;
					for (; 0x6054b50 !== U(t, l); --l)
						if (!l || t.length - l > 65558) return o(O(13, 0, 1), null), r;
					let c = B(t, l + 8);
					if (c) {
						let n = c,
							u = U(t, l + 16),
							f = 0xffffffff === u || 65535 === n;
						if (f) {
							let e = U(t, l - 12);
							(f = 0x6064b50 === U(t, e)) && (n = c = U(t, e + 32), u = U(t, e + 48))
						}
						let h = e && e.filter,
							d = function() {
								let e = H(t, u, f),
									n = e[0],
									l = e[1],
									d = e[2],
									p = e[3],
									m = e[4],
									g = Y(t, e[5]);
								u = m;
								let y = function(t, e) {
									t ? (r(), o(t, null)) : (e && (s[p] = e), --c || o(null, s))
								};
								if (!h || h({
										name: p,
										size: l,
										originalSize: d,
										compression: n
									})) {
									if (n) {
										if (8 === n) {
											let e = t.subarray(g, g + l);
											if (l < 32e4) try {
												y(null, j(e, new a(d)))
											} catch (t) {
												y(t, null)
											} else i.push(G(e, {
												size: d
											}, y))
										} else y(O(14, "unknown compression type " + n, 1), null)
									} else y(null, S(t, g, g + l))
								} else y(null, null)
							};
						for (let t = 0; t < n; ++t) d(t)
					} else o(null, {});
					return r
				}
			},
			7933: function(t, e, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
						value: !0
					}),
					function t(t, e) {
						for (var n in e) Object.defineProperty(t, n, {
							enumerable: !0,
							get: e[n]
						})
					}(e, {
						fetchLottie: function() {
							return f
						},
						unZipDotLottie: function() {
							return u
						}
					});
				let i = n(3487);

				function a(t) {
					let e = JSON.parse(t);
					if (!("animations" in e)) throw Error("Manifest not found");
					if (0 === e.animations.length) throw Error("No animations listed in the manifest");
					return e
				}

				function r(t) {
					let e = new Uint8Array(t, 0, 32);
					return 80 === e[0] && 75 === e[1] && 3 === e[2] && 4 === e[3]
				}
				async function s(t) {
					return await fetch(new URL(t, window?.location?.href).href).then(t => t.arrayBuffer())
				}
				async function o(t) {
					return (await new Promise(e => {
						let n = new FileReader;
						n.readAsDataURL(new Blob([t])), n.onload = () => e(n.result)
					})).split(",", 2)[1]
				}
				async function l(t) {
					let e = new Uint8Array(t),
						n = await new Promise((t, n) => {
							(0, i.unzip)(e, (e, i) => e ? n(e) : t(i))
						});
					return {
						read: t => (0, i.strFromU8)(n[t]),
						readB64: async t => await o(n[t])
					}
				}
				async function c(t, e) {
					if (!("assets" in t)) return t;
					async function n(t) {
						let {
							p: n
						} = t;
						if (null == n || null == e.read(`images/${n}`)) return t;
						let i = n.split(".").pop(),
							a = await e.readB64(`images/${n}`);
						if (i?.startsWith("data:")) return t.p = i, t.e = 1, t;
						switch (i) {
							case "svg":
							case "svg+xml":
								t.p = `data:image/svg+xml;base64,${a}`;
								break;
							case "png":
							case "jpg":
							case "jpeg":
							case "gif":
							case "webp":
								t.p = `data:image/${i};base64,${a}`;
								break;
							default:
								t.p = `data:;base64,${a}`
						}
						return t.e = 1, t
					}
					return (await Promise.all(t.assets.map(n))).map((e, n) => {
						t.assets[n] = e
					}), t
				}
				async function u(t) {
					let e = await l(t),
						n = a(e.read("manifest.json"));
					return (await Promise.all(n.animations.map(t => c(JSON.parse(e.read(`animations/${t.id}.json`)), e))))[0]
				}
				async function f(t) {
					let e = await s(t);
					return r(e) ? await u(e) : JSON.parse(new TextDecoder().decode(e))
				}
			},
			3946: function(t, e, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
						value: !0
					}),
					function t(t, e) {
						for (var n in e) Object.defineProperty(t, n, {
							enumerable: !0,
							get: e[n]
						})
					}(e, {
						actionListPlaybackChanged: function() {
							return z
						},
						animationFrameChanged: function() {
							return N
						},
						clearRequested: function() {
							return L
						},
						elementStateChanged: function() {
							return j
						},
						eventListenerAdded: function() {
							return R
						},
						eventStateChanged: function() {
							return D
						},
						instanceAdded: function() {
							return B
						},
						instanceRemoved: function() {
							return G
						},
						instanceStarted: function() {
							return U
						},
						mediaQueriesDefined: function() {
							return W
						},
						parameterChanged: function() {
							return V
						},
						playbackRequested: function() {
							return M
						},
						previewRequested: function() {
							return P
						},
						rawDataImported: function() {
							return S
						},
						sessionInitialized: function() {
							return w
						},
						sessionStarted: function() {
							return O
						},
						sessionStopped: function() {
							return C
						},
						stopRequested: function() {
							return k
						},
						testFrameRendered: function() {
							return F
						},
						viewportWidthChanged: function() {
							return X
						}
					});
				let i = n(7087),
					a = n(9468),
					{
						IX2_RAW_DATA_IMPORTED: r,
						IX2_SESSION_INITIALIZED: s,
						IX2_SESSION_STARTED: o,
						IX2_SESSION_STOPPED: l,
						IX2_PREVIEW_REQUESTED: c,
						IX2_PLAYBACK_REQUESTED: u,
						IX2_STOP_REQUESTED: f,
						IX2_CLEAR_REQUESTED: h,
						IX2_EVENT_LISTENER_ADDED: d,
						IX2_TEST_FRAME_RENDERED: p,
						IX2_EVENT_STATE_CHANGED: m,
						IX2_ANIMATION_FRAME_CHANGED: g,
						IX2_PARAMETER_CHANGED: y,
						IX2_INSTANCE_ADDED: v,
						IX2_INSTANCE_STARTED: b,
						IX2_INSTANCE_REMOVED: E,
						IX2_ELEMENT_STATE_CHANGED: T,
						IX2_ACTION_LIST_PLAYBACK_CHANGED: _,
						IX2_VIEWPORT_WIDTH_CHANGED: I,
						IX2_MEDIA_QUERIES_DEFINED: x
					} = i.IX2EngineActionTypes,
					{
						reifyState: A
					} = a.IX2VanillaUtils,
					S = t => ({
						type: r,
						payload: {
							...A(t)
						}
					}),
					w = ({
						hasBoundaryNodes: t,
						reducedMotion: e
					}) => ({
						type: s,
						payload: {
							hasBoundaryNodes: t,
							reducedMotion: e
						}
					}),
					O = () => ({
						type: o
					}),
					C = () => ({
						type: l
					}),
					P = ({
						rawData: t,
						defer: e
					}) => ({
						type: c,
						payload: {
							defer: e,
							rawData: t
						}
					}),
					M = ({
						actionTypeId: t = i.ActionTypeConsts.GENERAL_START_ACTION,
						actionListId: e,
						actionItemId: n,
						eventId: a,
						allowEvents: r,
						immediate: s,
						testManual: o,
						verbose: l,
						rawData: c
					}) => ({
						type: u,
						payload: {
							actionTypeId: t,
							actionListId: e,
							actionItemId: n,
							testManual: o,
							eventId: a,
							allowEvents: r,
							immediate: s,
							verbose: l,
							rawData: c
						}
					}),
					k = t => ({
						type: f,
						payload: {
							actionListId: t
						}
					}),
					L = () => ({
						type: h
					}),
					R = (t, e) => ({
						type: d,
						payload: {
							target: t,
							listenerParams: e
						}
					}),
					F = (t = 1) => ({
						type: p,
						payload: {
							step: t
						}
					}),
					D = (t, e) => ({
						type: m,
						payload: {
							stateKey: t,
							newState: e
						}
					}),
					N = (t, e) => ({
						type: g,
						payload: {
							now: t,
							parameters: e
						}
					}),
					V = (t, e) => ({
						type: y,
						payload: {
							key: t,
							value: e
						}
					}),
					B = t => ({
						type: v,
						payload: {
							...t
						}
					}),
					U = (t, e) => ({
						type: b,
						payload: {
							instanceId: t,
							time: e
						}
					}),
					G = t => ({
						type: E,
						payload: {
							instanceId: t
						}
					}),
					j = (t, e, n, i) => ({
						type: T,
						payload: {
							elementId: t,
							actionTypeId: e,
							current: n,
							actionItem: i
						}
					}),
					z = ({
						actionListId: t,
						isPlaying: e
					}) => ({
						type: _,
						payload: {
							actionListId: t,
							isPlaying: e
						}
					}),
					X = ({
						width: t,
						mediaQueries: e
					}) => ({
						type: I,
						payload: {
							width: t,
							mediaQueries: e
						}
					}),
					W = () => ({
						type: x
					})
			},
			6011: function(t, e, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
						value: !0
					}),
					function t(t, e) {
						for (var n in e) Object.defineProperty(t, n, {
							enumerable: !0,
							get: e[n]
						})
					}(e, {
						actions: function() {
							return s
						},
						destroy: function() {
							return d
						},
						init: function() {
							return h
						},
						setEnv: function() {
							return f
						},
						store: function() {
							return u
						}
					});
				let i = n(9516),
					a = o(n(7243)),
					r = n(1970),
					s = c(n(3946));

				function o(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}

				function l(t) {
					if ("function" != typeof WeakMap) return null;
					var e = new WeakMap,
						n = new WeakMap;
					return (l = function(t) {
						return t ? n : e
					})(t)
				}

				function c(t, e) {
					if (!e && t && t.__esModule) return t;
					if (null === t || "object" != typeof t && "function" != typeof t) return {
						default: t
					};
					var n = l(e);
					if (n && n.has(t)) return n.get(t);
					var i = {
							__proto__: null
						},
						a = Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var r in t)
						if ("default" !== r && Object.prototype.hasOwnProperty.call(t, r)) {
							var s = a ? Object.getOwnPropertyDescriptor(t, r) : null;
							s && (s.get || s.set) ? Object.defineProperty(i, r, s) : i[r] = t[r]
						} return i.default = t, n && n.set(t, i), i
				}
				let u = (0, i.createStore)(a.default);

				function f(t) {
					t() && (0, r.observeRequests)(u)
				}

				function h(t) {
					d(), (0, r.startEngine)({
						store: u,
						rawData: t,
						allowEvents: !0
					})
				}

				function d() {
					(0, r.stopEngine)(u)
				}
			},
			5012: function(t, e, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
						value: !0
					}),
					function t(t, e) {
						for (var n in e) Object.defineProperty(t, n, {
							enumerable: !0,
							get: e[n]
						})
					}(e, {
						elementContains: function() {
							return y
						},
						getChildElements: function() {
							return b
						},
						getClosestElement: function() {
							return T
						},
						getProperty: function() {
							return h
						},
						getQuerySelector: function() {
							return p
						},
						getRefType: function() {
							return _
						},
						getSiblingElements: function() {
							return E
						},
						getStyle: function() {
							return f
						},
						getValidDocument: function() {
							return m
						},
						isSiblingNode: function() {
							return v
						},
						matchSelector: function() {
							return d
						},
						queryDocument: function() {
							return g
						},
						setStyle: function() {
							return u
						}
					});
				let i = n(9468),
					a = n(7087),
					{
						ELEMENT_MATCHES: r
					} = i.IX2BrowserSupport,
					{
						IX2_ID_DELIMITER: s,
						HTML_ELEMENT: o,
						PLAIN_OBJECT: l,
						WF_PAGE: c
					} = a.IX2EngineConstants;

				function u(t, e, n) {
					t.style[e] = n
				}

				function f(t, e) {
					return e.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(e) : t.style instanceof CSSStyleDeclaration ? t.style[e] : void 0
				}

				function h(t, e) {
					return t[e]
				}

				function d(t) {
					return e => e[r](t)
				}

				function p({
					id: t,
					selector: e
				}) {
					if (t) {
						let e = t;
						if (-1 !== t.indexOf(s)) {
							let n = t.split(s),
								i = n[0];
							if (e = n[1], i !== document.documentElement.getAttribute(c)) return null
						}
						return `[data-w-id="${e}"], [data-w-id^="${e}_instance"]`
					}
					return e
				}

				function m(t) {
					return null == t || t === document.documentElement.getAttribute(c) ? document : null
				}

				function g(t, e) {
					return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t))
				}

				function y(t, e) {
					return t.contains(e)
				}

				function v(t, e) {
					return t !== e && t.parentNode === e.parentNode
				}

				function b(t) {
					let e = [];
					for (let n = 0, {
							length: i
						} = t || []; n < i; n++) {
						let {
							children: i
						} = t[n], {
							length: a
						} = i;
						if (!!a)
							for (let t = 0; t < a; t++) e.push(i[t])
					}
					return e
				}

				function E(t = []) {
					let e = [],
						n = [];
					for (let i = 0, {
							length: a
						} = t; i < a; i++) {
						let {
							parentNode: a
						} = t[i];
						if (!a || !a.children || !a.children.length || -1 !== n.indexOf(a)) continue;
						n.push(a);
						let r = a.firstElementChild;
						for (; null != r;) - 1 === t.indexOf(r) && e.push(r), r = r.nextElementSibling
					}
					return e
				}
				let T = Element.prototype.closest ? (t, e) => document.documentElement.contains(t) ? t.closest(e) : null : (t, e) => {
					if (!document.documentElement.contains(t)) return null;
					let n = t;
					do {
						if (n[r] && n[r](e)) return n;
						n = n.parentNode
					} while (null != n);
					return null
				};

				function _(t) {
					return null != t && "object" == typeof t ? t instanceof Element ? o : l : null
				}
			},
			1970: function(t, e, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
						value: !0
					}),
					function t(t, e) {
						for (var n in e) Object.defineProperty(t, n, {
							enumerable: !0,
							get: e[n]
						})
					}(e, {
						observeRequests: function() {
							return Z
						},
						startActionGroup: function() {
							return tA
						},
						startEngine: function() {
							return ts
						},
						stopActionGroup: function() {
							return tx
						},
						stopAllActionGroups: function() {
							return tI
						},
						stopEngine: function() {
							return tc
						}
					});
				let i = g(n(9777)),
					a = g(n(4738)),
					r = g(n(4659)),
					s = g(n(3452)),
					o = g(n(6633)),
					l = g(n(3729)),
					c = g(n(2397)),
					u = g(n(5082)),
					f = n(7087),
					h = n(9468),
					d = n(3946),
					p = v(n(5012)),
					m = g(n(8955));

				function g(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}

				function y(t) {
					if ("function" != typeof WeakMap) return null;
					var e = new WeakMap,
						n = new WeakMap;
					return (y = function(t) {
						return t ? n : e
					})(t)
				}

				function v(t, e) {
					if (!e && t && t.__esModule) return t;
					if (null === t || "object" != typeof t && "function" != typeof t) return {
						default: t
					};
					var n = y(e);
					if (n && n.has(t)) return n.get(t);
					var i = {
							__proto__: null
						},
						a = Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var r in t)
						if ("default" !== r && Object.prototype.hasOwnProperty.call(t, r)) {
							var s = a ? Object.getOwnPropertyDescriptor(t, r) : null;
							s && (s.get || s.set) ? Object.defineProperty(i, r, s) : i[r] = t[r]
						} return i.default = t, n && n.set(t, i), i
				}
				let b = Object.keys(f.QuickEffectIds),
					E = t => b.includes(t),
					{
						COLON_DELIMITER: T,
						BOUNDARY_SELECTOR: _,
						HTML_ELEMENT: I,
						RENDER_GENERAL: x,
						W_MOD_IX: A
					} = f.IX2EngineConstants,
					{
						getAffectedElements: S,
						getElementId: w,
						getDestinationValues: O,
						observeStore: C,
						getInstanceId: P,
						renderHTMLElement: M,
						clearAllStyles: k,
						getMaxDurationItemIndex: L,
						getComputedStyle: R,
						getInstanceOrigin: F,
						reduceListToGroup: D,
						shouldNamespaceEventParameter: N,
						getNamespacedParameterId: V,
						shouldAllowMediaQuery: B,
						cleanupHTMLElement: U,
						clearObjectCache: G,
						stringifyTarget: j,
						mediaQueriesEqual: z,
						shallowEqual: X
					} = h.IX2VanillaUtils,
					{
						isPluginType: W,
						createPluginInstance: Y,
						getPluginDuration: H
					} = h.IX2VanillaPlugins,
					q = navigator.userAgent,
					Q = q.match(/iPad/i) || q.match(/iPhone/),
					K = 12;

				function Z(t) {
					C({
						store: t,
						select: ({
							ixRequest: t
						}) => t.preview,
						onChange: te
					}), C({
						store: t,
						select: ({
							ixRequest: t
						}) => t.playback,
						onChange: ti
					}), C({
						store: t,
						select: ({
							ixRequest: t
						}) => t.stop,
						onChange: ta
					}), C({
						store: t,
						select: ({
							ixRequest: t
						}) => t.clear,
						onChange: tr
					})
				}

				function J(t) {
					C({
						store: t,
						select: ({
							ixSession: t
						}) => t.mediaQueryKey,
						onChange: () => {
							tc(t), k({
								store: t,
								elementApi: p
							}), ts({
								store: t,
								allowEvents: !0
							}), tn()
						}
					})
				}

				function tt(t, e) {
					let n = C({
						store: t,
						select: ({
							ixSession: t
						}) => t.tick,
						onChange: t => {
							e(t), n()
						}
					})
				}

				function te({
					rawData: t,
					defer: e
				}, n) {
					let i = () => {
						ts({
							store: n,
							rawData: t,
							allowEvents: !0
						}), tn()
					};
					e ? setTimeout(i, 0) : i()
				}

				function tn() {
					document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
				}

				function ti(t, e) {
					let {
						actionTypeId: n,
						actionListId: i,
						actionItemId: a,
						eventId: r,
						allowEvents: s,
						immediate: o,
						testManual: l,
						verbose: c = !0
					} = t, {
						rawData: u
					} = t;
					if (i && a && u && o) {
						let t = u.actionLists[i];
						t && (u = D({
							actionList: t,
							actionItemId: a,
							rawData: u
						}))
					}
					if (ts({
							store: e,
							rawData: u,
							allowEvents: s,
							testManual: l
						}), i && n === f.ActionTypeConsts.GENERAL_START_ACTION || E(n)) {
						tx({
							store: e,
							actionListId: i
						}), t_({
							store: e,
							actionListId: i,
							eventId: r
						});
						let t = tA({
							store: e,
							eventId: r,
							actionListId: i,
							immediate: o,
							verbose: c
						});
						c && t && e.dispatch((0, d.actionListPlaybackChanged)({
							actionListId: i,
							isPlaying: !o
						}))
					}
				}

				function ta({
					actionListId: t
				}, e) {
					t ? tx({
						store: e,
						actionListId: t
					}) : tI({
						store: e
					}), tc(e)
				}

				function tr(t, e) {
					tc(e), k({
						store: e,
						elementApi: p
					})
				}

				function ts({
					store: t,
					rawData: e,
					allowEvents: n,
					testManual: i
				}) {
					let {
						ixSession: a
					} = t.getState();
					e && t.dispatch((0, d.rawDataImported)(e)), !a.active && (t.dispatch((0, d.sessionInitialized)({
						hasBoundaryNodes: !!document.querySelector(_),
						reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
					})), n && (td(t), to(), t.getState().ixSession.hasDefinedMediaQueries && J(t)), t.dispatch((0, d.sessionStarted)()), tl(t, i))
				}

				function to() {
					let {
						documentElement: t
					} = document; - 1 === t.className.indexOf(A) && (t.className += ` ${A}`)
				}

				function tl(t, e) {
					let n = i => {
						let {
							ixSession: a,
							ixParameters: r
						} = t.getState();
						a.active && (t.dispatch((0, d.animationFrameChanged)(i, r)), e ? tt(t, n) : requestAnimationFrame(n))
					};
					n(window.performance.now())
				}

				function tc(t) {
					let {
						ixSession: e
					} = t.getState();
					if (e.active) {
						let {
							eventListeners: n
						} = e;
						n.forEach(tu), G(), t.dispatch((0, d.sessionStopped)())
					}
				}

				function tu({
					target: t,
					listenerParams: e
				}) {
					t.removeEventListener.apply(t, e)
				}

				function tf({
					store: t,
					eventStateKey: e,
					eventTarget: n,
					eventId: i,
					eventConfig: r,
					actionListId: s,
					parameterGroup: o,
					smoothing: l,
					restingValue: c
				}) {
					let {
						ixData: u,
						ixSession: h
					} = t.getState(), {
						events: d
					} = u, m = d[i], {
						eventTypeId: g
					} = m, y = {}, v = {}, b = [], {
						continuousActionGroups: E
					} = o, {
						id: I
					} = o;
					N(g, r) && (I = V(e, I));
					let x = h.hasBoundaryNodes && n ? p.getClosestElement(n, _) : null;
					E.forEach(t => {
						let {
							keyframe: e,
							actionItems: i
						} = t;
						i.forEach(t => {
							let {
								actionTypeId: i
							} = t, {
								target: a
							} = t.config;
							if (!a) return;
							let r = a.boundaryMode ? x : null,
								s = j(a) + T + i;
							if (v[s] = th(v[s], e, t), !y[s]) {
								y[s] = !0;
								let {
									config: e
								} = t;
								S({
									config: e,
									event: m,
									eventTarget: n,
									elementRoot: r,
									elementApi: p
								}).forEach(t => {
									b.push({
										element: t,
										key: s
									})
								})
							}
						})
					}), b.forEach(({
						element: e,
						key: n
					}) => {
						let r = v[n],
							o = (0, a.default)(r, "[0].actionItems[0]", {}),
							{
								actionTypeId: u
							} = o,
							h = (u === f.ActionTypeConsts.PLUGIN_RIVE ? 0 === (o.config?.target?.selectorGuids || []).length : W(u)) ? Y(u)(e, o) : null,
							d = O({
								element: e,
								actionItem: o,
								elementApi: p
							}, h);
						tS({
							store: t,
							element: e,
							eventId: i,
							actionListId: s,
							actionItem: o,
							destination: d,
							continuous: !0,
							parameterId: I,
							actionGroups: r,
							smoothing: l,
							restingValue: c,
							pluginInstance: h
						})
					})
				}

				function th(t = [], e, n) {
					let i;
					let a = [...t];
					return a.some((t, n) => t.keyframe === e && (i = n, !0)), null == i && (i = a.length, a.push({
						keyframe: e,
						actionItems: []
					})), a[i].actionItems.push(n), a
				}

				function td(t) {
					let {
						ixData: e
					} = t.getState(), {
						eventTypeMap: n
					} = e;
					tg(t), (0, c.default)(n, (e, n) => {
						let i = m.default[n];
						if (!i) {
							console.warn(`IX2 event type not configured: ${n}`);
							return
						}
						tE({
							logic: i,
							store: t,
							events: e
						})
					});
					let {
						ixSession: i
					} = t.getState();
					i.eventListeners.length && tm(t)
				}
				let tp = ["resize", "orientationchange"];

				function tm(t) {
					let e = () => {
						tg(t)
					};
					tp.forEach(n => {
						window.addEventListener(n, e), t.dispatch((0, d.eventListenerAdded)(window, [n, e]))
					}), e()
				}

				function tg(t) {
					let {
						ixSession: e,
						ixData: n
					} = t.getState(), i = window.innerWidth;
					if (i !== e.viewportWidth) {
						let {
							mediaQueries: e
						} = n;
						t.dispatch((0, d.viewportWidthChanged)({
							width: i,
							mediaQueries: e
						}))
					}
				}
				let ty = (t, e) => (0, s.default)((0, l.default)(t, e), o.default),
					tv = (t, e) => {
						(0, c.default)(t, (t, n) => {
							t.forEach((t, i) => {
								let a = n + T + i;
								e(t, n, a)
							})
						})
					},
					tb = t => S({
						config: {
							target: t.target,
							targets: t.targets
						},
						elementApi: p
					});

				function tE({
					logic: t,
					store: e,
					events: n
				}) {
					tT(n);
					let {
						types: s,
						handler: o
					} = t, {
						ixData: l
					} = e.getState(), {
						actionLists: h
					} = l, p = ty(n, tb);
					if (!(0, r.default)(p)) return;
					(0, c.default)(p, (t, r) => {
						let s = n[r],
							{
								action: o,
								id: c,
								mediaQueries: u = l.mediaQueryKeys
							} = s,
							{
								actionListId: p
							} = o.config;
						!z(u, l.mediaQueryKeys) && e.dispatch((0, d.mediaQueriesDefined)()), o.actionTypeId === f.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(s.config) ? s.config : [s.config]).forEach(n => {
							let {
								continuousParameterGroupId: r
							} = n, s = (0, a.default)(h, `${p}.continuousParameterGroups`, []), o = (0, i.default)(s, ({
								id: t
							}) => t === r), l = (n.smoothing || 0) / 100, u = (n.restingState || 0) / 100;
							if (!!o) t.forEach((t, i) => {
								tf({
									store: e,
									eventStateKey: c + T + i,
									eventTarget: t,
									eventId: c,
									eventConfig: n,
									actionListId: p,
									parameterGroup: o,
									smoothing: l,
									restingValue: u
								})
							})
						}), (o.actionTypeId === f.ActionTypeConsts.GENERAL_START_ACTION || E(o.actionTypeId)) && t_({
							store: e,
							actionListId: p,
							eventId: c
						})
					});
					let m = t => {
							let {
								ixSession: i
							} = e.getState();
							tv(p, (a, r, s) => {
								let c = n[r],
									u = i.eventState[s],
									{
										action: h,
										mediaQueries: p = l.mediaQueryKeys
									} = c;
								if (!B(p, i.mediaQueryKey)) return;
								let m = (n = {}) => {
									let i = o({
										store: e,
										element: a,
										event: c,
										eventConfig: n,
										nativeEvent: t,
										eventStateKey: s
									}, u);
									!X(i, u) && e.dispatch((0, d.eventStateChanged)(s, i))
								};
								h.actionTypeId === f.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(c.config) ? c.config : [c.config]).forEach(m) : m()
							})
						},
						g = (0, u.default)(m, K),
						y = ({
							target: t = document,
							types: n,
							throttle: i
						}) => {
							n.split(" ").filter(Boolean).forEach(n => {
								let a = i ? g : m;
								t.addEventListener(n, a), e.dispatch((0, d.eventListenerAdded)(t, [n, a]))
							})
						};
					Array.isArray(s) ? s.forEach(y) : "string" == typeof s && y(t)
				}

				function tT(t) {
					if (!Q) return;
					let e = {},
						n = "";
					for (let i in t) {
						let {
							eventTypeId: a,
							target: r
						} = t[i], s = p.getQuerySelector(r);
						if (!e[s])(a === f.EventTypeConsts.MOUSE_CLICK || a === f.EventTypeConsts.MOUSE_SECOND_CLICK) && (e[s] = !0, n += s + "{cursor: pointer;touch-action: manipulation;}")
					}
					if (n) {
						let t = document.createElement("style");
						t.textContent = n, document.body.appendChild(t)
					}
				}

				function t_({
					store: t,
					actionListId: e,
					eventId: n
				}) {
					let {
						ixData: i,
						ixSession: r
					} = t.getState(), {
						actionLists: s,
						events: o
					} = i, l = o[n], c = s[e];
					if (c && c.useFirstGroupAsInitialState) {
						let s = (0, a.default)(c, "actionItemGroups[0].actionItems", []);
						if (!B((0, a.default)(l, "mediaQueries", i.mediaQueryKeys), r.mediaQueryKey)) return;
						s.forEach(i => {
							let {
								config: a,
								actionTypeId: r
							} = i, s = S({
								config: a?.target?.useEventTarget === !0 && a?.target?.objectId == null ? {
									target: l.target,
									targets: l.targets
								} : a,
								event: l,
								elementApi: p
							}), o = W(r);
							s.forEach(a => {
								let s = o ? Y(r)(a, i) : null;
								tS({
									destination: O({
										element: a,
										actionItem: i,
										elementApi: p
									}, s),
									immediate: !0,
									store: t,
									element: a,
									eventId: n,
									actionItem: i,
									actionListId: e,
									pluginInstance: s
								})
							})
						})
					}
				}

				function tI({
					store: t
				}) {
					let {
						ixInstances: e
					} = t.getState();
					(0, c.default)(e, e => {
						if (!e.continuous) {
							let {
								actionListId: n,
								verbose: i
							} = e;
							tw(e, t), i && t.dispatch((0, d.actionListPlaybackChanged)({
								actionListId: n,
								isPlaying: !1
							}))
						}
					})
				}

				function tx({
					store: t,
					eventId: e,
					eventTarget: n,
					eventStateKey: i,
					actionListId: r
				}) {
					let {
						ixInstances: s,
						ixSession: o
					} = t.getState(), l = o.hasBoundaryNodes && n ? p.getClosestElement(n, _) : null;
					(0, c.default)(s, n => {
						let s = (0, a.default)(n, "actionItem.config.target.boundaryMode"),
							o = !i || n.eventStateKey === i;
						if (n.actionListId === r && n.eventId === e && o) {
							if (l && s && !p.elementContains(l, n.element)) return;
							tw(n, t), n.verbose && t.dispatch((0, d.actionListPlaybackChanged)({
								actionListId: r,
								isPlaying: !1
							}))
						}
					})
				}

				function tA({
					store: t,
					eventId: e,
					eventTarget: n,
					eventStateKey: i,
					actionListId: r,
					groupIndex: s = 0,
					immediate: o,
					verbose: l
				}) {
					let {
						ixData: c,
						ixSession: u
					} = t.getState(), {
						events: f
					} = c, h = f[e] || {}, {
						mediaQueries: d = c.mediaQueryKeys
					} = h, {
						actionItemGroups: m,
						useFirstGroupAsInitialState: g
					} = (0, a.default)(c, `actionLists.${r}`, {});
					if (!m || !m.length) return !1;
					s >= m.length && (0, a.default)(h, "config.loop") && (s = 0), 0 === s && g && s++;
					let y = (0 === s || 1 === s && g) && E(h.action?.actionTypeId) ? h.config.delay : void 0,
						v = (0, a.default)(m, [s, "actionItems"], []);
					if (!v.length || !B(d, u.mediaQueryKey)) return !1;
					let b = u.hasBoundaryNodes && n ? p.getClosestElement(n, _) : null,
						T = L(v),
						I = !1;
					return v.forEach((a, c) => {
						let {
							config: u,
							actionTypeId: f
						} = a, d = W(f), {
							target: m
						} = u;
						if (!!m) S({
							config: u,
							event: h,
							eventTarget: n,
							elementRoot: m.boundaryMode ? b : null,
							elementApi: p
						}).forEach((u, h) => {
							let m = d ? Y(f)(u, a) : null,
								g = d ? H(f)(u, a) : null;
							I = !0;
							let v = T === c && 0 === h,
								b = R({
									element: u,
									actionItem: a
								}),
								E = O({
									element: u,
									actionItem: a,
									elementApi: p
								}, m);
							tS({
								store: t,
								element: u,
								actionItem: a,
								eventId: e,
								eventTarget: n,
								eventStateKey: i,
								actionListId: r,
								groupIndex: s,
								isCarrier: v,
								computedStyle: b,
								destination: E,
								immediate: o,
								verbose: l,
								pluginInstance: m,
								pluginDuration: g,
								instanceDelay: y
							})
						})
					}), I
				}

				function tS(t) {
					let e;
					let {
						store: n,
						computedStyle: i,
						...a
					} = t, {
						element: r,
						actionItem: s,
						immediate: o,
						pluginInstance: l,
						continuous: c,
						restingValue: u,
						eventId: h
					} = a, m = !c, g = P(), {
						ixElements: y,
						ixSession: v,
						ixData: b
					} = n.getState(), E = w(y, r), {
						refState: T
					} = y[E] || {}, _ = p.getRefType(r), I = v.reducedMotion && f.ReducedMotionTypes[s.actionTypeId];
					if (I && c) switch (b.events[h]?.eventTypeId) {
						case f.EventTypeConsts.MOUSE_MOVE:
						case f.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
							e = u;
							break;
						default:
							e = .5
					}
					let x = F(r, T, i, s, p, l);
					if (n.dispatch((0, d.instanceAdded)({
							instanceId: g,
							elementId: E,
							origin: x,
							refType: _,
							skipMotion: I,
							skipToValue: e,
							...a
						})), tO(document.body, "ix2-animation-started", g), o) {
						tC(n, g);
						return
					}
					C({
						store: n,
						select: ({
							ixInstances: t
						}) => t[g],
						onChange: tP
					}), m && n.dispatch((0, d.instanceStarted)(g, v.tick))
				}

				function tw(t, e) {
					tO(document.body, "ix2-animation-stopping", {
						instanceId: t.id,
						state: e.getState()
					});
					let {
						elementId: n,
						actionItem: i
					} = t, {
						ixElements: a
					} = e.getState(), {
						ref: r,
						refType: s
					} = a[n] || {};
					s === I && U(r, i, p), e.dispatch((0, d.instanceRemoved)(t.id))
				}

				function tO(t, e, n) {
					let i = document.createEvent("CustomEvent");
					i.initCustomEvent(e, !0, !0, n), t.dispatchEvent(i)
				}

				function tC(t, e) {
					let {
						ixParameters: n
					} = t.getState();
					t.dispatch((0, d.instanceStarted)(e, 0)), t.dispatch((0, d.animationFrameChanged)(performance.now(), n));
					let {
						ixInstances: i
					} = t.getState();
					tP(i[e], t)
				}

				function tP(t, e) {
					let {
						active: n,
						continuous: i,
						complete: a,
						elementId: r,
						actionItem: s,
						actionTypeId: o,
						renderType: l,
						current: c,
						groupIndex: u,
						eventId: f,
						eventTarget: h,
						eventStateKey: m,
						actionListId: g,
						isCarrier: y,
						styleProp: v,
						verbose: b,
						pluginInstance: E
					} = t, {
						ixData: T,
						ixSession: _
					} = e.getState(), {
						events: A
					} = T, {
						mediaQueries: S = T.mediaQueryKeys
					} = A && A[f] ? A[f] : {};
					if (!!B(S, _.mediaQueryKey)) {
						if (i || n || a) {
							if (c || l === x && a) {
								e.dispatch((0, d.elementStateChanged)(r, o, c, s));
								let {
									ixElements: t
								} = e.getState(), {
									ref: n,
									refType: i,
									refState: a
								} = t[r] || {}, u = a && a[o];
								(i === I || W(o)) && M(n, a, u, f, s, v, p, l, E)
							}
							if (a) {
								if (y) {
									let t = tA({
										store: e,
										eventId: f,
										eventTarget: h,
										eventStateKey: m,
										actionListId: g,
										groupIndex: u + 1,
										verbose: b
									});
									b && !t && e.dispatch((0, d.actionListPlaybackChanged)({
										actionListId: g,
										isPlaying: !1
									}))
								}
								tw(t, e)
							}
						}
					}
				}
			},
			8955: function(t, e, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), Object.defineProperty(e, "default", {
					enumerable: !0,
					get: function() {
						return ty
					}
				});
				let i = u(n(5801)),
					a = u(n(4738)),
					r = u(n(3789)),
					s = n(7087),
					o = n(1970),
					l = n(3946),
					c = n(9468);

				function u(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				let {
					MOUSE_CLICK: f,
					MOUSE_SECOND_CLICK: h,
					MOUSE_DOWN: d,
					MOUSE_UP: p,
					MOUSE_OVER: m,
					MOUSE_OUT: g,
					DROPDOWN_CLOSE: y,
					DROPDOWN_OPEN: v,
					SLIDER_ACTIVE: b,
					SLIDER_INACTIVE: E,
					TAB_ACTIVE: T,
					TAB_INACTIVE: _,
					NAVBAR_CLOSE: I,
					NAVBAR_OPEN: x,
					MOUSE_MOVE: A,
					PAGE_SCROLL_DOWN: S,
					SCROLL_INTO_VIEW: w,
					SCROLL_OUT_OF_VIEW: O,
					PAGE_SCROLL_UP: C,
					SCROLLING_IN_VIEW: P,
					PAGE_FINISH: M,
					ECOMMERCE_CART_CLOSE: k,
					ECOMMERCE_CART_OPEN: L,
					PAGE_START: R,
					PAGE_SCROLL: F
				} = s.EventTypeConsts, D = "COMPONENT_ACTIVE", N = "COMPONENT_INACTIVE", {
					COLON_DELIMITER: V
				} = s.IX2EngineConstants, {
					getNamespacedParameterId: B
				} = c.IX2VanillaUtils, U = t => e => !!("object" == typeof e && t(e)) || e, G = U(({
					element: t,
					nativeEvent: e
				}) => t === e.target), j = U(({
					element: t,
					nativeEvent: e
				}) => t.contains(e.target)), z = (0, i.default)([G, j]), X = (t, e) => {
					if (e) {
						let {
							ixData: n
						} = t.getState(), {
							events: i
						} = n, a = i[e];
						if (a && !tt[a.eventTypeId]) return a
					}
					return null
				}, W = ({
					store: t,
					event: e
				}) => {
					let {
						action: n
					} = e, {
						autoStopEventId: i
					} = n.config;
					return !!X(t, i)
				}, Y = ({
					store: t,
					event: e,
					element: n,
					eventStateKey: i
				}, r) => {
					let {
						action: s,
						id: l
					} = e, {
						actionListId: c,
						autoStopEventId: u
					} = s.config, f = X(t, u);
					return f && (0, o.stopActionGroup)({
						store: t,
						eventId: u,
						eventTarget: n,
						eventStateKey: u + V + i.split(V)[1],
						actionListId: (0, a.default)(f, "action.config.actionListId")
					}), (0, o.stopActionGroup)({
						store: t,
						eventId: l,
						eventTarget: n,
						eventStateKey: i,
						actionListId: c
					}), (0, o.startActionGroup)({
						store: t,
						eventId: l,
						eventTarget: n,
						eventStateKey: i,
						actionListId: c
					}), r
				}, H = (t, e) => (n, i) => !0 === t(n, i) ? e(n, i) : i, q = {
					handler: H(z, Y)
				}, Q = {
					...q,
					types: [D, N].join(" ")
				}, K = [{
					target: window,
					types: "resize orientationchange",
					throttle: !0
				}, {
					target: document,
					types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
					throttle: !0
				}], Z = "mouseover mouseout", J = {
					types: K
				}, tt = {
					PAGE_START: R,
					PAGE_FINISH: M
				}, te = (() => {
					let t = void 0 !== window.pageXOffset,
						e = "CSS1Compat" === document.compatMode ? document.documentElement : document.body;
					return () => ({
						scrollLeft: t ? window.pageXOffset : e.scrollLeft,
						scrollTop: t ? window.pageYOffset : e.scrollTop,
						stiffScrollTop: (0, r.default)(t ? window.pageYOffset : e.scrollTop, 0, e.scrollHeight - window.innerHeight),
						scrollWidth: e.scrollWidth,
						scrollHeight: e.scrollHeight,
						clientWidth: e.clientWidth,
						clientHeight: e.clientHeight,
						innerWidth: window.innerWidth,
						innerHeight: window.innerHeight
					})
				})(), tn = (t, e) => !(t.left > e.right || t.right < e.left || t.top > e.bottom || t.bottom < e.top), ti = ({
					element: t,
					nativeEvent: e
				}) => {
					let {
						type: n,
						target: i,
						relatedTarget: a
					} = e, r = t.contains(i);
					if ("mouseover" === n && r) return !0;
					let s = t.contains(a);
					return "mouseout" === n && !!r && !!s || !1
				}, ta = t => {
					let {
						element: e,
						event: {
							config: n
						}
					} = t, {
						clientWidth: i,
						clientHeight: a
					} = te(), r = n.scrollOffsetValue, s = "PX" === n.scrollOffsetUnit ? r : a * (r || 0) / 100;
					return tn(e.getBoundingClientRect(), {
						left: 0,
						top: s,
						right: i,
						bottom: a - s
					})
				}, tr = t => (e, n) => {
					let {
						type: i
					} = e.nativeEvent, a = -1 !== [D, N].indexOf(i) ? i === D : n.isActive, r = {
						...n,
						isActive: a
					};
					return n && r.isActive === n.isActive ? r : t(e, r) || r
				}, ts = t => (e, n) => {
					let i = {
						elementHovered: ti(e)
					};
					return (n ? i.elementHovered !== n.elementHovered : i.elementHovered) && t(e, i) || i
				}, to = t => (e, n) => {
					let i = {
						...n,
						elementVisible: ta(e)
					};
					return (n ? i.elementVisible !== n.elementVisible : i.elementVisible) && t(e, i) || i
				}, tl = t => (e, n = {}) => {
					let i, a;
					let {
						stiffScrollTop: r,
						scrollHeight: s,
						innerHeight: o
					} = te(), {
						event: {
							config: l,
							eventTypeId: c
						}
					} = e, {
						scrollOffsetValue: u,
						scrollOffsetUnit: f
					} = l, h = "PX" === f, d = s - o, p = Number((r / d).toFixed(2));
					if (n && n.percentTop === p) return n;
					let m = (h ? u : o * (u || 0) / 100) / d,
						g = 0;
					n && (i = p > n.percentTop, g = (a = n.scrollingDown !== i) ? p : n.anchorTop);
					let y = c === S ? p >= g + m : p <= g - m,
						v = {
							...n,
							percentTop: p,
							inBounds: y,
							anchorTop: g,
							scrollingDown: i
						};
					return n && y && (a || v.inBounds !== n.inBounds) && t(e, v) || v
				}, tc = (t, e) => t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom, tu = t => (e, n) => {
					let i = {
						finished: "complete" === document.readyState
					};
					return i.finished && !(n && n.finshed) && t(e), i
				}, tf = t => (e, n) => {
					let i = {
						started: !0
					};
					return !n && t(e), i
				}, th = t => (e, n = {
					clickCount: 0
				}) => {
					let i = {
						clickCount: n.clickCount % 2 + 1
					};
					return i.clickCount !== n.clickCount && t(e, i) || i
				}, td = (t = !0) => ({
					...Q,
					handler: H(t ? z : G, tr((t, e) => e.isActive ? q.handler(t, e) : e))
				}), tp = (t = !0) => ({
					...Q,
					handler: H(t ? z : G, tr((t, e) => e.isActive ? e : q.handler(t, e)))
				}), tm = {
					...J,
					handler: to((t, e) => {
						let {
							elementVisible: n
						} = e, {
							event: i,
							store: a
						} = t, {
							ixData: r
						} = a.getState(), {
							events: s
						} = r;
						return !s[i.action.config.autoStopEventId] && e.triggered ? e : i.eventTypeId === w === n ? (Y(t), {
							...e,
							triggered: !0
						}) : e
					})
				}, tg = .05, ty = {
					[b]: td(),
					[E]: tp(),
					[v]: td(),
					[y]: tp(),
					[x]: td(!1),
					[I]: tp(!1),
					[T]: td(),
					[_]: tp(),
					[L]: {
						types: "ecommerce-cart-open",
						handler: H(z, Y)
					},
					[k]: {
						types: "ecommerce-cart-close",
						handler: H(z, Y)
					},
					[f]: {
						types: "click",
						handler: H(z, th((t, {
							clickCount: e
						}) => {
							W(t) ? 1 === e && Y(t) : Y(t)
						}))
					},
					[h]: {
						types: "click",
						handler: H(z, th((t, {
							clickCount: e
						}) => {
							2 === e && Y(t)
						}))
					},
					[d]: {
						...q,
						types: "mousedown"
					},
					[p]: {
						...q,
						types: "mouseup"
					},
					[m]: {
						types: Z,
						handler: H(z, ts((t, e) => {
							e.elementHovered && Y(t)
						}))
					},
					[g]: {
						types: Z,
						handler: H(z, ts((t, e) => {
							!e.elementHovered && Y(t)
						}))
					},
					[A]: {
						types: "mousemove mouseout scroll",
						handler: ({
							store: t,
							element: e,
							eventConfig: n,
							nativeEvent: i,
							eventStateKey: a
						}, r = {
							clientX: 0,
							clientY: 0,
							pageX: 0,
							pageY: 0
						}) => {
							let {
								basedOn: o,
								selectedAxis: c,
								continuousParameterGroupId: u,
								reverse: f,
								restingState: h = 0
							} = n, {
								clientX: d = r.clientX,
								clientY: p = r.clientY,
								pageX: m = r.pageX,
								pageY: g = r.pageY
							} = i, y = "X_AXIS" === c, v = "mouseout" === i.type, b = h / 100, E = u, T = !1;
							switch (o) {
								case s.EventBasedOn.VIEWPORT:
									b = y ? Math.min(d, window.innerWidth) / window.innerWidth : Math.min(p, window.innerHeight) / window.innerHeight;
									break;
								case s.EventBasedOn.PAGE: {
									let {
										scrollLeft: t,
										scrollTop: e,
										scrollWidth: n,
										scrollHeight: i
									} = te();
									b = y ? Math.min(t + m, n) / n : Math.min(e + g, i) / i;
									break
								}
								case s.EventBasedOn.ELEMENT:
								default: {
									E = B(a, u);
									let t = 0 === i.type.indexOf("mouse");
									if (t && !0 !== z({
											element: e,
											nativeEvent: i
										})) break;
									let n = e.getBoundingClientRect(),
										{
											left: r,
											top: s,
											width: o,
											height: l
										} = n;
									if (!t && !tc({
											left: d,
											top: p
										}, n)) break;
									T = !0, b = y ? (d - r) / o : (p - s) / l
								}
							}
							return v && (b > 1 - tg || b < tg) && (b = Math.round(b)), (o !== s.EventBasedOn.ELEMENT || T || T !== r.elementHovered) && (b = f ? 1 - b : b, t.dispatch((0, l.parameterChanged)(E, b))), {
								elementHovered: T,
								clientX: d,
								clientY: p,
								pageX: m,
								pageY: g
							}
						}
					},
					[F]: {
						types: K,
						handler: ({
							store: t,
							eventConfig: e
						}) => {
							let {
								continuousParameterGroupId: n,
								reverse: i
							} = e, {
								scrollTop: a,
								scrollHeight: r,
								clientHeight: s
							} = te(), o = a / (r - s);
							o = i ? 1 - o : o, t.dispatch((0, l.parameterChanged)(n, o))
						}
					},
					[P]: {
						types: K,
						handler: ({
							element: t,
							store: e,
							eventConfig: n,
							eventStateKey: i
						}, a = {
							scrollPercent: 0
						}) => {
							let {
								scrollLeft: r,
								scrollTop: o,
								scrollWidth: c,
								scrollHeight: u,
								clientHeight: f
							} = te(), {
								basedOn: h,
								selectedAxis: d,
								continuousParameterGroupId: p,
								startsEntering: m,
								startsExiting: g,
								addEndOffset: y,
								addStartOffset: v,
								addOffsetValue: b = 0,
								endOffsetValue: E = 0
							} = n, T = "X_AXIS" === d;
							if (h === s.EventBasedOn.VIEWPORT) {
								let t = T ? r / c : o / u;
								return t !== a.scrollPercent && e.dispatch((0, l.parameterChanged)(p, t)), {
									scrollPercent: t
								}
							} {
								let n = B(i, p),
									r = t.getBoundingClientRect(),
									s = (v ? b : 0) / 100,
									o = (y ? E : 0) / 100;
								s = m ? s : 1 - s, o = g ? o : 1 - o;
								let c = r.top + Math.min(r.height * s, f),
									h = Math.min(f + (r.top + r.height * o - c), u),
									d = Math.min(Math.max(0, f - c), h) / h;
								return d !== a.scrollPercent && e.dispatch((0, l.parameterChanged)(n, d)), {
									scrollPercent: d
								}
							}
						}
					},
					[w]: tm,
					[O]: tm,
					[S]: {
						...J,
						handler: tl((t, e) => {
							e.scrollingDown && Y(t)
						})
					},
					[C]: {
						...J,
						handler: tl((t, e) => {
							!e.scrollingDown && Y(t)
						})
					},
					[M]: {
						types: "readystatechange IX2_PAGE_UPDATE",
						handler: H(G, tu(Y))
					},
					[R]: {
						types: "readystatechange IX2_PAGE_UPDATE",
						handler: H(G, tf(Y))
					}
				}
			},
			4609: function(t, e, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), Object.defineProperty(e, "ixData", {
					enumerable: !0,
					get: function() {
						return a
					}
				});
				let {
					IX2_RAW_DATA_IMPORTED: i
				} = n(7087).IX2EngineActionTypes, a = (t = Object.freeze({}), e) => {
					if (e.type === i) return e.payload.ixData || Object.freeze({});
					return t
				}
			},
			7718: function(t, e, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), Object.defineProperty(e, "ixInstances", {
					enumerable: !0,
					get: function() {
						return T
					}
				});
				let i = n(7087),
					a = n(9468),
					r = n(1185),
					{
						IX2_RAW_DATA_IMPORTED: s,
						IX2_SESSION_STOPPED: o,
						IX2_INSTANCE_ADDED: l,
						IX2_INSTANCE_STARTED: c,
						IX2_INSTANCE_REMOVED: u,
						IX2_ANIMATION_FRAME_CHANGED: f
					} = i.IX2EngineActionTypes,
					{
						optimizeFloat: h,
						applyEasing: d,
						createBezierEasing: p
					} = a.IX2EasingUtils,
					{
						RENDER_GENERAL: m
					} = i.IX2EngineConstants,
					{
						getItemConfigByKey: g,
						getRenderType: y,
						getStyleProp: v
					} = a.IX2VanillaUtils,
					b = (t, e) => {
						let n, i, a, s;
						let {
							position: o,
							parameterId: l,
							actionGroups: c,
							destinationKeys: u,
							smoothing: f,
							restingValue: p,
							actionTypeId: m,
							customEasingFn: y,
							skipMotion: v,
							skipToValue: b
						} = t, {
							parameters: E
						} = e.payload, T = Math.max(1 - f, .01), _ = E[l];
						null == _ && (T = 1, _ = p);
						let I = h((Math.max(_, 0) || 0) - o),
							x = v ? b : h(o + I * T),
							A = 100 * x;
						if (x === o && t.current) return t;
						for (let t = 0, {
								length: e
							} = c; t < e; t++) {
							let {
								keyframe: e,
								actionItems: r
							} = c[t];
							if (0 === t && (n = r[0]), A >= e) {
								n = r[0];
								let o = c[t + 1],
									l = o && A !== e;
								i = l ? o.actionItems[0] : null, l && (a = e / 100, s = (o.keyframe - e) / 100)
							}
						}
						let S = {};
						if (n && !i)
							for (let t = 0, {
									length: e
								} = u; t < e; t++) {
								let e = u[t];
								S[e] = g(m, e, n.config)
							} else if (n && i && void 0 !== a && void 0 !== s) {
								let t = (x - a) / s,
									e = d(n.config.easing, t, y);
								for (let t = 0, {
										length: a
									} = u; t < a; t++) {
									let a = u[t],
										r = g(m, a, n.config),
										s = (g(m, a, i.config) - r) * e + r;
									S[a] = s
								}
							} return (0, r.merge)(t, {
							position: x,
							current: S
						})
					},
					E = (t, e) => {
						let {
							active: n,
							origin: i,
							start: a,
							immediate: s,
							renderType: o,
							verbose: l,
							actionItem: c,
							destination: u,
							destinationKeys: f,
							pluginDuration: p,
							instanceDelay: g,
							customEasingFn: y,
							skipMotion: v
						} = t, b = c.config.easing, {
							duration: E,
							delay: T
						} = c.config;
						null != p && (E = p), T = null != g ? g : T, o === m ? E = 0 : (s || v) && (E = T = 0);
						let {
							now: _
						} = e.payload;
						if (n && i) {
							let e = _ - (a + T);
							if (l) {
								let e = E + T,
									n = h(Math.min(Math.max(0, (_ - a) / e), 1));
								t = (0, r.set)(t, "verboseTimeElapsed", e * n)
							}
							if (e < 0) return t;
							let n = h(Math.min(Math.max(0, e / E), 1)),
								s = d(b, n, y),
								o = {},
								c = null;
							return f.length && (c = f.reduce((t, e) => {
								let n = u[e],
									a = parseFloat(i[e]) || 0,
									r = (parseFloat(n) - a) * s + a;
								return t[e] = r, t
							}, {})), o.current = c, o.position = n, 1 === n && (o.active = !1, o.complete = !0), (0, r.merge)(t, o)
						}
						return t
					},
					T = (t = Object.freeze({}), e) => {
						switch (e.type) {
							case s:
								return e.payload.ixInstances || Object.freeze({});
							case o:
								return Object.freeze({});
							case l: {
								let {
									instanceId: n,
									elementId: i,
									actionItem: a,
									eventId: s,
									eventTarget: o,
									eventStateKey: l,
									actionListId: c,
									groupIndex: u,
									isCarrier: f,
									origin: h,
									destination: d,
									immediate: m,
									verbose: g,
									continuous: b,
									parameterId: E,
									actionGroups: T,
									smoothing: _,
									restingValue: I,
									pluginInstance: x,
									pluginDuration: A,
									instanceDelay: S,
									skipMotion: w,
									skipToValue: O
								} = e.payload, {
									actionTypeId: C
								} = a, P = y(C), M = v(P, C), k = Object.keys(d).filter(t => null != d[t] && "string" != typeof d[t]), {
									easing: L
								} = a.config;
								return (0, r.set)(t, n, {
									id: n,
									elementId: i,
									active: !1,
									position: 0,
									start: 0,
									origin: h,
									destination: d,
									destinationKeys: k,
									immediate: m,
									verbose: g,
									current: null,
									actionItem: a,
									actionTypeId: C,
									eventId: s,
									eventTarget: o,
									eventStateKey: l,
									actionListId: c,
									groupIndex: u,
									renderType: P,
									isCarrier: f,
									styleProp: M,
									continuous: b,
									parameterId: E,
									actionGroups: T,
									smoothing: _,
									restingValue: I,
									pluginInstance: x,
									pluginDuration: A,
									instanceDelay: S,
									skipMotion: w,
									skipToValue: O,
									customEasingFn: Array.isArray(L) && 4 === L.length ? p(L) : void 0
								})
							}
							case c: {
								let {
									instanceId: n,
									time: i
								} = e.payload;
								return (0, r.mergeIn)(t, [n], {
									active: !0,
									complete: !1,
									start: i
								})
							}
							case u: {
								let {
									instanceId: n
								} = e.payload;
								if (!t[n]) return t;
								let i = {},
									a = Object.keys(t),
									{
										length: r
									} = a;
								for (let e = 0; e < r; e++) {
									let r = a[e];
									r !== n && (i[r] = t[r])
								}
								return i
							}
							case f: {
								let n = t,
									i = Object.keys(t),
									{
										length: a
									} = i;
								for (let s = 0; s < a; s++) {
									let a = i[s],
										o = t[a],
										l = o.continuous ? b : E;
									n = (0, r.set)(n, a, l(o, e))
								}
								return n
							}
							default:
								return t
						}
					}
			},
			1540: function(t, e, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), Object.defineProperty(e, "ixParameters", {
					enumerable: !0,
					get: function() {
						return s
					}
				});
				let {
					IX2_RAW_DATA_IMPORTED: i,
					IX2_SESSION_STOPPED: a,
					IX2_PARAMETER_CHANGED: r
				} = n(7087).IX2EngineActionTypes, s = (t = {}, e) => {
					switch (e.type) {
						case i:
							return e.payload.ixParameters || {};
						case a:
							return {};
						case r: {
							let {
								key: n,
								value: i
							} = e.payload;
							return t[n] = i, t
						}
						default:
							return t
					}
				}
			},
			7243: function(t, e, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), Object.defineProperty(e, "default", {
					enumerable: !0,
					get: function() {
						return f
					}
				});
				let i = n(9516),
					a = n(4609),
					r = n(628),
					s = n(5862),
					o = n(9468),
					l = n(7718),
					c = n(1540),
					{
						ixElements: u
					} = o.IX2ElementsReducer,
					f = (0, i.combineReducers)({
						ixData: a.ixData,
						ixRequest: r.ixRequest,
						ixSession: s.ixSession,
						ixElements: u,
						ixInstances: l.ixInstances,
						ixParameters: c.ixParameters
					})
			},
			628: function(t, e, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), Object.defineProperty(e, "ixRequest", {
					enumerable: !0,
					get: function() {
						return f
					}
				});
				let i = n(7087),
					a = n(1185),
					{
						IX2_PREVIEW_REQUESTED: r,
						IX2_PLAYBACK_REQUESTED: s,
						IX2_STOP_REQUESTED: o,
						IX2_CLEAR_REQUESTED: l
					} = i.IX2EngineActionTypes,
					c = {
						preview: {},
						playback: {},
						stop: {},
						clear: {}
					},
					u = Object.create(null, {
						[r]: {
							value: "preview"
						},
						[s]: {
							value: "playback"
						},
						[o]: {
							value: "stop"
						},
						[l]: {
							value: "clear"
						}
					}),
					f = (t = c, e) => {
						if (e.type in u) {
							let n = [u[e.type]];
							return (0, a.setIn)(t, [n], {
								...e.payload
							})
						}
						return t
					}
			},
			5862: function(t, e, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), Object.defineProperty(e, "ixSession", {
					enumerable: !0,
					get: function() {
						return y
					}
				});
				let i = n(7087),
					a = n(1185),
					{
						IX2_SESSION_INITIALIZED: r,
						IX2_SESSION_STARTED: s,
						IX2_TEST_FRAME_RENDERED: o,
						IX2_SESSION_STOPPED: l,
						IX2_EVENT_LISTENER_ADDED: c,
						IX2_EVENT_STATE_CHANGED: u,
						IX2_ANIMATION_FRAME_CHANGED: f,
						IX2_ACTION_LIST_PLAYBACK_CHANGED: h,
						IX2_VIEWPORT_WIDTH_CHANGED: d,
						IX2_MEDIA_QUERIES_DEFINED: p
					} = i.IX2EngineActionTypes,
					m = {
						active: !1,
						tick: 0,
						eventListeners: [],
						eventState: {},
						playbackState: {},
						viewportWidth: 0,
						mediaQueryKey: null,
						hasBoundaryNodes: !1,
						hasDefinedMediaQueries: !1,
						reducedMotion: !1
					},
					g = 20,
					y = (t = m, e) => {
						switch (e.type) {
							case r: {
								let {
									hasBoundaryNodes: n,
									reducedMotion: i
								} = e.payload;
								return (0, a.merge)(t, {
									hasBoundaryNodes: n,
									reducedMotion: i
								})
							}
							case s:
								return (0, a.set)(t, "active", !0);
							case o: {
								let {
									payload: {
										step: n = g
									}
								} = e;
								return (0, a.set)(t, "tick", t.tick + n)
							}
							case l:
								return m;
							case f: {
								let {
									payload: {
										now: n
									}
								} = e;
								return (0, a.set)(t, "tick", n)
							}
							case c: {
								let n = (0, a.addLast)(t.eventListeners, e.payload);
								return (0, a.set)(t, "eventListeners", n)
							}
							case u: {
								let {
									stateKey: n,
									newState: i
								} = e.payload;
								return (0, a.setIn)(t, ["eventState", n], i)
							}
							case h: {
								let {
									actionListId: n,
									isPlaying: i
								} = e.payload;
								return (0, a.setIn)(t, ["playbackState", n], i)
							}
							case d: {
								let {
									width: n,
									mediaQueries: i
								} = e.payload, r = i.length, s = null;
								for (let t = 0; t < r; t++) {
									let {
										key: e,
										min: a,
										max: r
									} = i[t];
									if (n >= a && n <= r) {
										s = e;
										break
									}
								}
								return (0, a.merge)(t, {
									viewportWidth: n,
									mediaQueryKey: s
								})
							}
							case p:
								return (0, a.set)(t, "hasDefinedMediaQueries", !0);
							default:
								return t
						}
					}
			},
			7377: function(t, e) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
						value: !0
					}),
					function t(t, e) {
						for (var n in e) Object.defineProperty(t, n, {
							enumerable: !0,
							get: e[n]
						})
					}(e, {
						clearPlugin: function() {
							return l
						},
						createPluginInstance: function() {
							return s
						},
						getPluginConfig: function() {
							return n
						},
						getPluginDestination: function() {
							return r
						},
						getPluginDuration: function() {
							return i
						},
						getPluginOrigin: function() {
							return a
						},
						renderPlugin: function() {
							return o
						}
					});
				let n = t => t.value,
					i = (t, e) => {
						if ("auto" !== e.config.duration) return null;
						let n = parseFloat(t.getAttribute("data-duration"));
						return n > 0 ? 1e3 * n : 1e3 * parseFloat(t.getAttribute("data-default-duration"))
					},
					a = t => t || {
						value: 0
					},
					r = t => ({
						value: t.value
					}),
					s = t => {
						let e = window.Webflow.require("lottie").createInstance(t);
						return e.stop(), e.setSubframe(!0), e
					},
					o = (t, e, n) => {
						if (!t) return;
						let i = e[n.actionTypeId].value / 100;
						t.goToFrame(t.frames * i)
					},
					l = t => {
						window.Webflow.require("lottie").createInstance(t).stop()
					}
			},
			2570: function(t, e) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
						value: !0
					}),
					function t(t, e) {
						for (var n in e) Object.defineProperty(t, n, {
							enumerable: !0,
							get: e[n]
						})
					}(e, {
						clearPlugin: function() {
							return h
						},
						createPluginInstance: function() {
							return u
						},
						getPluginConfig: function() {
							return s
						},
						getPluginDestination: function() {
							return c
						},
						getPluginDuration: function() {
							return o
						},
						getPluginOrigin: function() {
							return l
						},
						renderPlugin: function() {
							return f
						}
					});
				let n = "--wf-rive-fit",
					i = "--wf-rive-alignment",
					a = t => document.querySelector(`[data-w-id="${t}"]`),
					r = () => window.Webflow.require("rive"),
					s = (t, e) => t.value.inputs[e],
					o = () => null,
					l = (t, e) => {
						if (t) return t;
						let n = {},
							{
								inputs: i = {}
							} = e.config.value;
						for (let t in i) null == i[t] && (n[t] = 0);
						return n
					},
					c = t => t.value.inputs ?? {},
					u = (t, e) => {
						if ((e.config?.target?.selectorGuids || []).length > 0) return t;
						let n = e?.config?.target?.pluginElement;
						return n ? a(n) : null
					},
					f = (t, {
						PLUGIN_RIVE: e
					}, a) => {
						let s = r(),
							o = s.getInstance(t),
							l = s.rive.StateMachineInputType,
							{
								name: c,
								inputs: u = {}
							} = a.config.value || {};

						function f(t) {
							if (t.loaded) a();
							else {
								let e = () => {
									a(), t?.off("load", e)
								};
								t?.on("load", e)
							}

							function a() {
								let a = t.stateMachineInputs(c);
								if (null != a) {
									if (!t.isPlaying && t.play(c, !1), n in u || i in u) {
										let e = t.layout,
											a = u[n] ?? e.fit,
											r = u[i] ?? e.alignment;
										(a !== e.fit || r !== e.alignment) && (t.layout = e.copyWith({
											fit: a,
											alignment: r
										}))
									}
									for (let t in u) {
										if (t === n || t === i) continue;
										let r = a.find(e => e.name === t);
										if (null != r) switch (r.type) {
											case l.Boolean:
												if (null != u[t]) {
													let e = !!u[t];
													r.value = e
												}
												break;
											case l.Number: {
												let n = e[t];
												null != n && (r.value = n);
												break
											}
											case l.Trigger:
												u[t] && r.fire()
										}
									}
								}
							}
						}
						o?.rive ? f(o.rive) : s.setLoadHandler(t, f)
					},
					h = (t, e) => null
			},
			2866: function(t, e) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
						value: !0
					}),
					function t(t, e) {
						for (var n in e) Object.defineProperty(t, n, {
							enumerable: !0,
							get: e[n]
						})
					}(e, {
						clearPlugin: function() {
							return h
						},
						createPluginInstance: function() {
							return u
						},
						getPluginConfig: function() {
							return r
						},
						getPluginDestination: function() {
							return c
						},
						getPluginDuration: function() {
							return s
						},
						getPluginOrigin: function() {
							return l
						},
						renderPlugin: function() {
							return f
						}
					});
				let n = t => document.querySelector(`[data-w-id="${t}"]`),
					i = () => window.Webflow.require("spline"),
					a = (t, e) => t.filter(t => !e.includes(t)),
					r = (t, e) => t.value[e],
					s = () => null,
					o = Object.freeze({
						positionX: 0,
						positionY: 0,
						positionZ: 0,
						rotationX: 0,
						rotationY: 0,
						rotationZ: 0,
						scaleX: 1,
						scaleY: 1,
						scaleZ: 1
					}),
					l = (t, e) => {
						let n = Object.keys(e.config.value);
						if (t) {
							let e = a(n, Object.keys(t));
							return e.length ? e.reduce((t, e) => (t[e] = o[e], t), t) : t
						}
						return n.reduce((t, e) => (t[e] = o[e], t), {})
					},
					c = t => t.value,
					u = (t, e) => {
						let i = e?.config?.target?.pluginElement;
						return i ? n(i) : null
					},
					f = (t, e, n) => {
						let a = i(),
							r = a.getInstance(t),
							s = n.config.target.objectId,
							o = t => {
								if (!t) throw Error("Invalid spline app passed to renderSpline");
								let n = s && t.findObjectById(s);
								if (!n) return;
								let {
									PLUGIN_SPLINE: i
								} = e;
								null != i.positionX && (n.position.x = i.positionX), null != i.positionY && (n.position.y = i.positionY), null != i.positionZ && (n.position.z = i.positionZ), null != i.rotationX && (n.rotation.x = i.rotationX), null != i.rotationY && (n.rotation.y = i.rotationY), null != i.rotationZ && (n.rotation.z = i.rotationZ), null != i.scaleX && (n.scale.x = i.scaleX), null != i.scaleY && (n.scale.y = i.scaleY), null != i.scaleZ && (n.scale.z = i.scaleZ)
							};
						r ? o(r.spline) : a.setLoadHandler(t, o)
					},
					h = () => null
			},
			1407: function(t, e, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
						value: !0
					}),
					function t(t, e) {
						for (var n in e) Object.defineProperty(t, n, {
							enumerable: !0,
							get: e[n]
						})
					}(e, {
						clearPlugin: function() {
							return f
						},
						createPluginInstance: function() {
							return l
						},
						getPluginConfig: function() {
							return a
						},
						getPluginDestination: function() {
							return o
						},
						getPluginDuration: function() {
							return r
						},
						getPluginOrigin: function() {
							return s
						},
						renderPlugin: function() {
							return u
						}
					});
				let i = n(380),
					a = (t, e) => t.value[e],
					r = () => null,
					s = (t, e) => {
						if (t) return t;
						let n = e.config.value,
							a = e.config.target.objectId,
							r = getComputedStyle(document.documentElement).getPropertyValue(a);
						return null != n.size ? {
							size: parseInt(r, 10)
						} : "%" === n.unit || "-" === n.unit ? {
							size: parseFloat(r)
						} : null != n.red && null != n.green && null != n.blue ? (0, i.normalizeColor)(r) : void 0
					},
					o = t => t.value,
					l = () => null,
					c = {
						color: {
							match: ({
								red: t,
								green: e,
								blue: n,
								alpha: i
							}) => [t, e, n, i].every(t => null != t),
							getValue: ({
								red: t,
								green: e,
								blue: n,
								alpha: i
							}) => `rgba(${t}, ${e}, ${n}, ${i})`
						},
						size: {
							match: ({
								size: t
							}) => null != t,
							getValue: ({
								size: t
							}, e) => {
								if ("-" === e) return t;
								return `${t}${e}`
							}
						}
					},
					u = (t, e, n) => {
						let {
							target: {
								objectId: i
							},
							value: {
								unit: a
							}
						} = n.config, r = e.PLUGIN_VARIABLE, s = Object.values(c).find(t => t.match(r, a));
						s && document.documentElement.style.setProperty(i, s.getValue(r, a))
					},
					f = (t, e) => {
						let n = e.config.target.objectId;
						document.documentElement.style.removeProperty(n)
					}
			},
			3690: function(t, e, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), Object.defineProperty(e, "pluginMethodMap", {
					enumerable: !0,
					get: function() {
						return u
					}
				});
				let i = n(7087),
					a = c(n(7377)),
					r = c(n(2866)),
					s = c(n(2570)),
					o = c(n(1407));

				function l(t) {
					if ("function" != typeof WeakMap) return null;
					var e = new WeakMap,
						n = new WeakMap;
					return (l = function(t) {
						return t ? n : e
					})(t)
				}

				function c(t, e) {
					if (!e && t && t.__esModule) return t;
					if (null === t || "object" != typeof t && "function" != typeof t) return {
						default: t
					};
					var n = l(e);
					if (n && n.has(t)) return n.get(t);
					var i = {
							__proto__: null
						},
						a = Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var r in t)
						if ("default" !== r && Object.prototype.hasOwnProperty.call(t, r)) {
							var s = a ? Object.getOwnPropertyDescriptor(t, r) : null;
							s && (s.get || s.set) ? Object.defineProperty(i, r, s) : i[r] = t[r]
						} return i.default = t, n && n.set(t, i), i
				}
				let u = new Map([
					[i.ActionTypeConsts.PLUGIN_LOTTIE, {
						...a
					}],
					[i.ActionTypeConsts.PLUGIN_SPLINE, {
						...r
					}],
					[i.ActionTypeConsts.PLUGIN_RIVE, {
						...s
					}],
					[i.ActionTypeConsts.PLUGIN_VARIABLE, {
						...o
					}]
				])
			},
			8023: function(t, e) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
						value: !0
					}),
					function t(t, e) {
						for (var n in e) Object.defineProperty(t, n, {
							enumerable: !0,
							get: e[n]
						})
					}(e, {
						IX2_ACTION_LIST_PLAYBACK_CHANGED: function() {
							return v
						},
						IX2_ANIMATION_FRAME_CHANGED: function() {
							return h
						},
						IX2_CLEAR_REQUESTED: function() {
							return c
						},
						IX2_ELEMENT_STATE_CHANGED: function() {
							return y
						},
						IX2_EVENT_LISTENER_ADDED: function() {
							return u
						},
						IX2_EVENT_STATE_CHANGED: function() {
							return f
						},
						IX2_INSTANCE_ADDED: function() {
							return p
						},
						IX2_INSTANCE_REMOVED: function() {
							return g
						},
						IX2_INSTANCE_STARTED: function() {
							return m
						},
						IX2_MEDIA_QUERIES_DEFINED: function() {
							return E
						},
						IX2_PARAMETER_CHANGED: function() {
							return d
						},
						IX2_PLAYBACK_REQUESTED: function() {
							return o
						},
						IX2_PREVIEW_REQUESTED: function() {
							return s
						},
						IX2_RAW_DATA_IMPORTED: function() {
							return n
						},
						IX2_SESSION_INITIALIZED: function() {
							return i
						},
						IX2_SESSION_STARTED: function() {
							return a
						},
						IX2_SESSION_STOPPED: function() {
							return r
						},
						IX2_STOP_REQUESTED: function() {
							return l
						},
						IX2_TEST_FRAME_RENDERED: function() {
							return T
						},
						IX2_VIEWPORT_WIDTH_CHANGED: function() {
							return b
						}
					});
				let n = "IX2_RAW_DATA_IMPORTED",
					i = "IX2_SESSION_INITIALIZED",
					a = "IX2_SESSION_STARTED",
					r = "IX2_SESSION_STOPPED",
					s = "IX2_PREVIEW_REQUESTED",
					o = "IX2_PLAYBACK_REQUESTED",
					l = "IX2_STOP_REQUESTED",
					c = "IX2_CLEAR_REQUESTED",
					u = "IX2_EVENT_LISTENER_ADDED",
					f = "IX2_EVENT_STATE_CHANGED",
					h = "IX2_ANIMATION_FRAME_CHANGED",
					d = "IX2_PARAMETER_CHANGED",
					p = "IX2_INSTANCE_ADDED",
					m = "IX2_INSTANCE_STARTED",
					g = "IX2_INSTANCE_REMOVED",
					y = "IX2_ELEMENT_STATE_CHANGED",
					v = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
					b = "IX2_VIEWPORT_WIDTH_CHANGED",
					E = "IX2_MEDIA_QUERIES_DEFINED",
					T = "IX2_TEST_FRAME_RENDERED"
			},
			2686: function(t, e) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
						value: !0
					}),
					function t(t, e) {
						for (var n in e) Object.defineProperty(t, n, {
							enumerable: !0,
							get: e[n]
						})
					}(e, {
						ABSTRACT_NODE: function() {
							return tt
						},
						AUTO: function() {
							return j
						},
						BACKGROUND: function() {
							return D
						},
						BACKGROUND_COLOR: function() {
							return F
						},
						BAR_DELIMITER: function() {
							return W
						},
						BORDER_COLOR: function() {
							return N
						},
						BOUNDARY_SELECTOR: function() {
							return s
						},
						CHILDREN: function() {
							return Y
						},
						COLON_DELIMITER: function() {
							return X
						},
						COLOR: function() {
							return V
						},
						COMMA_DELIMITER: function() {
							return z
						},
						CONFIG_UNIT: function() {
							return p
						},
						CONFIG_VALUE: function() {
							return u
						},
						CONFIG_X_UNIT: function() {
							return f
						},
						CONFIG_X_VALUE: function() {
							return o
						},
						CONFIG_Y_UNIT: function() {
							return h
						},
						CONFIG_Y_VALUE: function() {
							return l
						},
						CONFIG_Z_UNIT: function() {
							return d
						},
						CONFIG_Z_VALUE: function() {
							return c
						},
						DISPLAY: function() {
							return B
						},
						FILTER: function() {
							return M
						},
						FLEX: function() {
							return U
						},
						FONT_VARIATION_SETTINGS: function() {
							return k
						},
						HEIGHT: function() {
							return R
						},
						HTML_ELEMENT: function() {
							return Z
						},
						IMMEDIATE_CHILDREN: function() {
							return H
						},
						IX2_ID_DELIMITER: function() {
							return n
						},
						OPACITY: function() {
							return P
						},
						PARENT: function() {
							return Q
						},
						PLAIN_OBJECT: function() {
							return J
						},
						PRESERVE_3D: function() {
							return K
						},
						RENDER_GENERAL: function() {
							return tn
						},
						RENDER_PLUGIN: function() {
							return ta
						},
						RENDER_STYLE: function() {
							return ti
						},
						RENDER_TRANSFORM: function() {
							return te
						},
						ROTATE_X: function() {
							return x
						},
						ROTATE_Y: function() {
							return A
						},
						ROTATE_Z: function() {
							return S
						},
						SCALE_3D: function() {
							return I
						},
						SCALE_X: function() {
							return E
						},
						SCALE_Y: function() {
							return T
						},
						SCALE_Z: function() {
							return _
						},
						SIBLINGS: function() {
							return q
						},
						SKEW: function() {
							return w
						},
						SKEW_X: function() {
							return O
						},
						SKEW_Y: function() {
							return C
						},
						TRANSFORM: function() {
							return m
						},
						TRANSLATE_3D: function() {
							return b
						},
						TRANSLATE_X: function() {
							return g
						},
						TRANSLATE_Y: function() {
							return y
						},
						TRANSLATE_Z: function() {
							return v
						},
						WF_PAGE: function() {
							return i
						},
						WIDTH: function() {
							return L
						},
						WILL_CHANGE: function() {
							return G
						},
						W_MOD_IX: function() {
							return r
						},
						W_MOD_JS: function() {
							return a
						}
					});
				let n = "|",
					i = "data-wf-page",
					a = "w-mod-js",
					r = "w-mod-ix",
					s = ".w-dyn-item",
					o = "xValue",
					l = "yValue",
					c = "zValue",
					u = "value",
					f = "xUnit",
					h = "yUnit",
					d = "zUnit",
					p = "unit",
					m = "transform",
					g = "translateX",
					y = "translateY",
					v = "translateZ",
					b = "translate3d",
					E = "scaleX",
					T = "scaleY",
					_ = "scaleZ",
					I = "scale3d",
					x = "rotateX",
					A = "rotateY",
					S = "rotateZ",
					w = "skew",
					O = "skewX",
					C = "skewY",
					P = "opacity",
					M = "filter",
					k = "font-variation-settings",
					L = "width",
					R = "height",
					F = "backgroundColor",
					D = "background",
					N = "borderColor",
					V = "color",
					B = "display",
					U = "flex",
					G = "willChange",
					j = "AUTO",
					z = ",",
					X = ":",
					W = "|",
					Y = "CHILDREN",
					H = "IMMEDIATE_CHILDREN",
					q = "SIBLINGS",
					Q = "PARENT",
					K = "preserve-3d",
					Z = "HTML_ELEMENT",
					J = "PLAIN_OBJECT",
					tt = "ABSTRACT_NODE",
					te = "RENDER_TRANSFORM",
					tn = "RENDER_GENERAL",
					ti = "RENDER_STYLE",
					ta = "RENDER_PLUGIN"
			},
			262: function(t, e) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
						value: !0
					}),
					function t(t, e) {
						for (var n in e) Object.defineProperty(t, n, {
							enumerable: !0,
							get: e[n]
						})
					}(e, {
						ActionAppliesTo: function() {
							return i
						},
						ActionTypeConsts: function() {
							return n
						}
					});
				let n = {
						TRANSFORM_MOVE: "TRANSFORM_MOVE",
						TRANSFORM_SCALE: "TRANSFORM_SCALE",
						TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
						TRANSFORM_SKEW: "TRANSFORM_SKEW",
						STYLE_OPACITY: "STYLE_OPACITY",
						STYLE_SIZE: "STYLE_SIZE",
						STYLE_FILTER: "STYLE_FILTER",
						STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
						STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
						STYLE_BORDER: "STYLE_BORDER",
						STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
						OBJECT_VALUE: "OBJECT_VALUE",
						PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
						PLUGIN_SPLINE: "PLUGIN_SPLINE",
						PLUGIN_RIVE: "PLUGIN_RIVE",
						PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
						GENERAL_DISPLAY: "GENERAL_DISPLAY",
						GENERAL_START_ACTION: "GENERAL_START_ACTION",
						GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
						GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
						GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
						GENERAL_LOOP: "GENERAL_LOOP",
						STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
					},
					i = {
						ELEMENT: "ELEMENT",
						ELEMENT_CLASS: "ELEMENT_CLASS",
						TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
					}
			},
			7087: function(t, e, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
						value: !0
					}),
					function t(t, e) {
						for (var n in e) Object.defineProperty(t, n, {
							enumerable: !0,
							get: e[n]
						})
					}(e, {
						ActionTypeConsts: function() {
							return a.ActionTypeConsts
						},
						IX2EngineActionTypes: function() {
							return r
						},
						IX2EngineConstants: function() {
							return s
						},
						QuickEffectIds: function() {
							return i.QuickEffectIds
						}
					});
				let i = o(n(1833), e),
					a = o(n(262), e);
				o(n(8704), e), o(n(3213), e);
				let r = c(n(8023)),
					s = c(n(2686));

				function o(t, e) {
					return Object.keys(t).forEach(function(n) {
						"default" !== n && !Object.prototype.hasOwnProperty.call(e, n) && Object.defineProperty(e, n, {
							enumerable: !0,
							get: function() {
								return t[n]
							}
						})
					}), t
				}

				function l(t) {
					if ("function" != typeof WeakMap) return null;
					var e = new WeakMap,
						n = new WeakMap;
					return (l = function(t) {
						return t ? n : e
					})(t)
				}

				function c(t, e) {
					if (!e && t && t.__esModule) return t;
					if (null === t || "object" != typeof t && "function" != typeof t) return {
						default: t
					};
					var n = l(e);
					if (n && n.has(t)) return n.get(t);
					var i = {
							__proto__: null
						},
						a = Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var r in t)
						if ("default" !== r && Object.prototype.hasOwnProperty.call(t, r)) {
							var s = a ? Object.getOwnPropertyDescriptor(t, r) : null;
							s && (s.get || s.set) ? Object.defineProperty(i, r, s) : i[r] = t[r]
						} return i.default = t, n && n.set(t, i), i
				}
			},
			3213: function(t, e, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), Object.defineProperty(e, "ReducedMotionTypes", {
					enumerable: !0,
					get: function() {
						return u
					}
				});
				let {
					TRANSFORM_MOVE: i,
					TRANSFORM_SCALE: a,
					TRANSFORM_ROTATE: r,
					TRANSFORM_SKEW: s,
					STYLE_SIZE: o,
					STYLE_FILTER: l,
					STYLE_FONT_VARIATION: c
				} = n(262).ActionTypeConsts, u = {
					[i]: !0,
					[a]: !0,
					[r]: !0,
					[s]: !0,
					[o]: !0,
					[l]: !0,
					[c]: !0
				}
			},
			1833: function(t, e) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
						value: !0
					}),
					function t(t, e) {
						for (var n in e) Object.defineProperty(t, n, {
							enumerable: !0,
							get: e[n]
						})
					}(e, {
						EventAppliesTo: function() {
							return i
						},
						EventBasedOn: function() {
							return a
						},
						EventContinuousMouseAxes: function() {
							return r
						},
						EventLimitAffectedElements: function() {
							return s
						},
						EventTypeConsts: function() {
							return n
						},
						QuickEffectDirectionConsts: function() {
							return l
						},
						QuickEffectIds: function() {
							return o
						}
					});
				let n = {
						NAVBAR_OPEN: "NAVBAR_OPEN",
						NAVBAR_CLOSE: "NAVBAR_CLOSE",
						TAB_ACTIVE: "TAB_ACTIVE",
						TAB_INACTIVE: "TAB_INACTIVE",
						SLIDER_ACTIVE: "SLIDER_ACTIVE",
						SLIDER_INACTIVE: "SLIDER_INACTIVE",
						DROPDOWN_OPEN: "DROPDOWN_OPEN",
						DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
						MOUSE_CLICK: "MOUSE_CLICK",
						MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
						MOUSE_DOWN: "MOUSE_DOWN",
						MOUSE_UP: "MOUSE_UP",
						MOUSE_OVER: "MOUSE_OVER",
						MOUSE_OUT: "MOUSE_OUT",
						MOUSE_MOVE: "MOUSE_MOVE",
						MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
						SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
						SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
						SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
						ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
						ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
						PAGE_START: "PAGE_START",
						PAGE_FINISH: "PAGE_FINISH",
						PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
						PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
						PAGE_SCROLL: "PAGE_SCROLL"
					},
					i = {
						ELEMENT: "ELEMENT",
						CLASS: "CLASS",
						PAGE: "PAGE"
					},
					a = {
						ELEMENT: "ELEMENT",
						VIEWPORT: "VIEWPORT"
					},
					r = {
						X_AXIS: "X_AXIS",
						Y_AXIS: "Y_AXIS"
					},
					s = {
						CHILDREN: "CHILDREN",
						SIBLINGS: "SIBLINGS",
						IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
					},
					o = {
						FADE_EFFECT: "FADE_EFFECT",
						SLIDE_EFFECT: "SLIDE_EFFECT",
						GROW_EFFECT: "GROW_EFFECT",
						SHRINK_EFFECT: "SHRINK_EFFECT",
						SPIN_EFFECT: "SPIN_EFFECT",
						FLY_EFFECT: "FLY_EFFECT",
						POP_EFFECT: "POP_EFFECT",
						FLIP_EFFECT: "FLIP_EFFECT",
						JIGGLE_EFFECT: "JIGGLE_EFFECT",
						PULSE_EFFECT: "PULSE_EFFECT",
						DROP_EFFECT: "DROP_EFFECT",
						BLINK_EFFECT: "BLINK_EFFECT",
						BOUNCE_EFFECT: "BOUNCE_EFFECT",
						FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
						FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
						RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
						JELLO_EFFECT: "JELLO_EFFECT",
						GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
						SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
						PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
					},
					l = {
						LEFT: "LEFT",
						RIGHT: "RIGHT",
						BOTTOM: "BOTTOM",
						TOP: "TOP",
						BOTTOM_LEFT: "BOTTOM_LEFT",
						BOTTOM_RIGHT: "BOTTOM_RIGHT",
						TOP_RIGHT: "TOP_RIGHT",
						TOP_LEFT: "TOP_LEFT",
						CLOCKWISE: "CLOCKWISE",
						COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
					}
			},
			8704: function(t, e) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), Object.defineProperty(e, "InteractionTypeConsts", {
					enumerable: !0,
					get: function() {
						return n
					}
				});
				let n = {
					MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
					MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
					MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
					SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
					SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
					MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
					PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
					PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
					PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
					NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
					DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
					ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
					TAB_INTERACTION: "TAB_INTERACTION",
					SLIDER_INTERACTION: "SLIDER_INTERACTION"
				}
			},
			380: function(t, e) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), Object.defineProperty(e, "normalizeColor", {
					enumerable: !0,
					get: function() {
						return i
					}
				});
				let n = {
					aliceblue: "#F0F8FF",
					antiquewhite: "#FAEBD7",
					aqua: "#00FFFF",
					aquamarine: "#7FFFD4",
					azure: "#F0FFFF",
					beige: "#F5F5DC",
					bisque: "#FFE4C4",
					black: "#000000",
					blanchedalmond: "#FFEBCD",
					blue: "#0000FF",
					blueviolet: "#8A2BE2",
					brown: "#A52A2A",
					burlywood: "#DEB887",
					cadetblue: "#5F9EA0",
					chartreuse: "#7FFF00",
					chocolate: "#D2691E",
					coral: "#FF7F50",
					cornflowerblue: "#6495ED",
					cornsilk: "#FFF8DC",
					crimson: "#DC143C",
					cyan: "#00FFFF",
					darkblue: "#00008B",
					darkcyan: "#008B8B",
					darkgoldenrod: "#B8860B",
					darkgray: "#A9A9A9",
					darkgreen: "#006400",
					darkgrey: "#A9A9A9",
					darkkhaki: "#BDB76B",
					darkmagenta: "#8B008B",
					darkolivegreen: "#556B2F",
					darkorange: "#FF8C00",
					darkorchid: "#9932CC",
					darkred: "#8B0000",
					darksalmon: "#E9967A",
					darkseagreen: "#8FBC8F",
					darkslateblue: "#483D8B",
					darkslategray: "#2F4F4F",
					darkslategrey: "#2F4F4F",
					darkturquoise: "#00CED1",
					darkviolet: "#9400D3",
					deeppink: "#FF1493",
					deepskyblue: "#00BFFF",
					dimgray: "#696969",
					dimgrey: "#696969",
					dodgerblue: "#1E90FF",
					firebrick: "#B22222",
					floralwhite: "#FFFAF0",
					forestgreen: "#228B22",
					fuchsia: "#FF00FF",
					gainsboro: "#DCDCDC",
					ghostwhite: "#F8F8FF",
					gold: "#FFD700",
					goldenrod: "#DAA520",
					gray: "#808080",
					green: "#008000",
					greenyellow: "#ADFF2F",
					grey: "#808080",
					honeydew: "#F0FFF0",
					hotpink: "#FF69B4",
					indianred: "#CD5C5C",
					indigo: "#4B0082",
					ivory: "#FFFFF0",
					khaki: "#F0E68C",
					lavender: "#E6E6FA",
					lavenderblush: "#FFF0F5",
					lawngreen: "#7CFC00",
					lemonchiffon: "#FFFACD",
					lightblue: "#ADD8E6",
					lightcoral: "#F08080",
					lightcyan: "#E0FFFF",
					lightgoldenrodyellow: "#FAFAD2",
					lightgray: "#D3D3D3",
					lightgreen: "#90EE90",
					lightgrey: "#D3D3D3",
					lightpink: "#FFB6C1",
					lightsalmon: "#FFA07A",
					lightseagreen: "#20B2AA",
					lightskyblue: "#87CEFA",
					lightslategray: "#778899",
					lightslategrey: "#778899",
					lightsteelblue: "#B0C4DE",
					lightyellow: "#FFFFE0",
					lime: "#00FF00",
					limegreen: "#32CD32",
					linen: "#FAF0E6",
					magenta: "#FF00FF",
					maroon: "#800000",
					mediumaquamarine: "#66CDAA",
					mediumblue: "#0000CD",
					mediumorchid: "#BA55D3",
					mediumpurple: "#9370DB",
					mediumseagreen: "#3CB371",
					mediumslateblue: "#7B68EE",
					mediumspringgreen: "#00FA9A",
					mediumturquoise: "#48D1CC",
					mediumvioletred: "#C71585",
					midnightblue: "#191970",
					mintcream: "#F5FFFA",
					mistyrose: "#FFE4E1",
					moccasin: "#FFE4B5",
					navajowhite: "#FFDEAD",
					navy: "#000080",
					oldlace: "#FDF5E6",
					olive: "#808000",
					olivedrab: "#6B8E23",
					orange: "#FFA500",
					orangered: "#FF4500",
					orchid: "#DA70D6",
					palegoldenrod: "#EEE8AA",
					palegreen: "#98FB98",
					paleturquoise: "#AFEEEE",
					palevioletred: "#DB7093",
					papayawhip: "#FFEFD5",
					peachpuff: "#FFDAB9",
					peru: "#CD853F",
					pink: "#FFC0CB",
					plum: "#DDA0DD",
					powderblue: "#B0E0E6",
					purple: "#800080",
					rebeccapurple: "#663399",
					red: "#FF0000",
					rosybrown: "#BC8F8F",
					royalblue: "#4169E1",
					saddlebrown: "#8B4513",
					salmon: "#FA8072",
					sandybrown: "#F4A460",
					seagreen: "#2E8B57",
					seashell: "#FFF5EE",
					sienna: "#A0522D",
					silver: "#C0C0C0",
					skyblue: "#87CEEB",
					slateblue: "#6A5ACD",
					slategray: "#708090",
					slategrey: "#708090",
					snow: "#FFFAFA",
					springgreen: "#00FF7F",
					steelblue: "#4682B4",
					tan: "#D2B48C",
					teal: "#008080",
					thistle: "#D8BFD8",
					tomato: "#FF6347",
					turquoise: "#40E0D0",
					violet: "#EE82EE",
					wheat: "#F5DEB3",
					white: "#FFFFFF",
					whitesmoke: "#F5F5F5",
					yellow: "#FFFF00",
					yellowgreen: "#9ACD32"
				};

				function i(t) {
					let e, i, a;
					let r = 1,
						s = t.replace(/\s/g, "").toLowerCase(),
						o = ("string" == typeof n[s] ? n[s].toLowerCase() : null) || s;
					if (o.startsWith("#")) {
						let t = o.substring(1);
						3 === t.length || 4 === t.length ? (e = parseInt(t[0] + t[0], 16), i = parseInt(t[1] + t[1], 16), a = parseInt(t[2] + t[2], 16), 4 === t.length && (r = parseInt(t[3] + t[3], 16) / 255)) : (6 === t.length || 8 === t.length) && (e = parseInt(t.substring(0, 2), 16), i = parseInt(t.substring(2, 4), 16), a = parseInt(t.substring(4, 6), 16), 8 === t.length && (r = parseInt(t.substring(6, 8), 16) / 255))
					} else if (o.startsWith("rgba")) {
						let t = o.match(/rgba\(([^)]+)\)/)[1].split(",");
						e = parseInt(t[0], 10), i = parseInt(t[1], 10), a = parseInt(t[2], 10), r = parseFloat(t[3])
					} else if (o.startsWith("rgb")) {
						let t = o.match(/rgb\(([^)]+)\)/)[1].split(",");
						e = parseInt(t[0], 10), i = parseInt(t[1], 10), a = parseInt(t[2], 10)
					} else if (o.startsWith("hsla")) {
						let t, n, s;
						let l = o.match(/hsla\(([^)]+)\)/)[1].split(","),
							c = parseFloat(l[0]),
							u = parseFloat(l[1].replace("%", "")) / 100,
							f = parseFloat(l[2].replace("%", "")) / 100;
						r = parseFloat(l[3]);
						let h = (1 - Math.abs(2 * f - 1)) * u,
							d = h * (1 - Math.abs(c / 60 % 2 - 1)),
							p = f - h / 2;
						c >= 0 && c < 60 ? (t = h, n = d, s = 0) : c >= 60 && c < 120 ? (t = d, n = h, s = 0) : c >= 120 && c < 180 ? (t = 0, n = h, s = d) : c >= 180 && c < 240 ? (t = 0, n = d, s = h) : c >= 240 && c < 300 ? (t = d, n = 0, s = h) : (t = h, n = 0, s = d), e = Math.round((t + p) * 255), i = Math.round((n + p) * 255), a = Math.round((s + p) * 255)
					} else if (o.startsWith("hsl")) {
						let t, n, r;
						let s = o.match(/hsl\(([^)]+)\)/)[1].split(","),
							l = parseFloat(s[0]),
							c = parseFloat(s[1].replace("%", "")) / 100,
							u = parseFloat(s[2].replace("%", "")) / 100,
							f = (1 - Math.abs(2 * u - 1)) * c,
							h = f * (1 - Math.abs(l / 60 % 2 - 1)),
							d = u - f / 2;
						l >= 0 && l < 60 ? (t = f, n = h, r = 0) : l >= 60 && l < 120 ? (t = h, n = f, r = 0) : l >= 120 && l < 180 ? (t = 0, n = f, r = h) : l >= 180 && l < 240 ? (t = 0, n = h, r = f) : l >= 240 && l < 300 ? (t = h, n = 0, r = f) : (t = f, n = 0, r = h), e = Math.round((t + d) * 255), i = Math.round((n + d) * 255), a = Math.round((r + d) * 255)
					}
					if (Number.isNaN(e) || Number.isNaN(i) || Number.isNaN(a)) throw Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${t}'`);
					return {
						red: e,
						green: i,
						blue: a,
						alpha: r
					}
				}
			},
			9468: function(t, e, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
						value: !0
					}),
					function t(t, e) {
						for (var n in e) Object.defineProperty(t, n, {
							enumerable: !0,
							get: e[n]
						})
					}(e, {
						IX2BrowserSupport: function() {
							return i
						},
						IX2EasingUtils: function() {
							return r
						},
						IX2Easings: function() {
							return a
						},
						IX2ElementsReducer: function() {
							return s
						},
						IX2VanillaPlugins: function() {
							return o
						},
						IX2VanillaUtils: function() {
							return l
						}
					});
				let i = u(n(2662)),
					a = u(n(8686)),
					r = u(n(3767)),
					s = u(n(5861)),
					o = u(n(1799)),
					l = u(n(4124));

				function c(t) {
					if ("function" != typeof WeakMap) return null;
					var e = new WeakMap,
						n = new WeakMap;
					return (c = function(t) {
						return t ? n : e
					})(t)
				}

				function u(t, e) {
					if (!e && t && t.__esModule) return t;
					if (null === t || "object" != typeof t && "function" != typeof t) return {
						default: t
					};
					var n = c(e);
					if (n && n.has(t)) return n.get(t);
					var i = {
							__proto__: null
						},
						a = Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var r in t)
						if ("default" !== r && Object.prototype.hasOwnProperty.call(t, r)) {
							var s = a ? Object.getOwnPropertyDescriptor(t, r) : null;
							s && (s.get || s.set) ? Object.defineProperty(i, r, s) : i[r] = t[r]
						} return i.default = t, n && n.set(t, i), i
				}
			},
			2662: function(t, e, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
						value: !0
					}),
					function t(t, e) {
						for (var n in e) Object.defineProperty(t, n, {
							enumerable: !0,
							get: e[n]
						})
					}(e, {
						ELEMENT_MATCHES: function() {
							return o
						},
						FLEX_PREFIXED: function() {
							return l
						},
						IS_BROWSER_ENV: function() {
							return r
						},
						TRANSFORM_PREFIXED: function() {
							return c
						},
						TRANSFORM_STYLE_PREFIXED: function() {
							return f
						},
						withBrowser: function() {
							return s
						}
					});
				let i = a(n(9777));

				function a(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				let r = "undefined" != typeof window,
					s = (t, e) => r ? t() : e,
					o = s(() => (0, i.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], t => t in Element.prototype)),
					l = s(() => {
						let t = document.createElement("i"),
							e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
							n = "";
						try {
							let {
								length: i
							} = e;
							for (let n = 0; n < i; n++) {
								let i = e[n];
								if (t.style.display = i, t.style.display === i) return i
							}
							return n
						} catch (t) {
							return n
						}
					}, "flex"),
					c = s(() => {
						let t = document.createElement("i");
						if (null == t.style.transform) {
							let e = ["Webkit", "Moz", "ms"],
								n = "Transform",
								{
									length: i
								} = e;
							for (let a = 0; a < i; a++) {
								let i = e[a] + n;
								if (void 0 !== t.style[i]) return i
							}
						}
						return "transform"
					}, "transform"),
					u = c.split("transform")[0],
					f = u ? u + "TransformStyle" : "transformStyle"
			},
			3767: function(t, e, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
						value: !0
					}),
					function t(t, e) {
						for (var n in e) Object.defineProperty(t, n, {
							enumerable: !0,
							get: e[n]
						})
					}(e, {
						applyEasing: function() {
							return u
						},
						createBezierEasing: function() {
							return c
						},
						optimizeFloat: function() {
							return l
						}
					});
				let i = o(n(8686)),
					a = r(n(1361));

				function r(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}

				function s(t) {
					if ("function" != typeof WeakMap) return null;
					var e = new WeakMap,
						n = new WeakMap;
					return (s = function(t) {
						return t ? n : e
					})(t)
				}

				function o(t, e) {
					if (!e && t && t.__esModule) return t;
					if (null === t || "object" != typeof t && "function" != typeof t) return {
						default: t
					};
					var n = s(e);
					if (n && n.has(t)) return n.get(t);
					var i = {
							__proto__: null
						},
						a = Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var r in t)
						if ("default" !== r && Object.prototype.hasOwnProperty.call(t, r)) {
							var o = a ? Object.getOwnPropertyDescriptor(t, r) : null;
							o && (o.get || o.set) ? Object.defineProperty(i, r, o) : i[r] = t[r]
						} return i.default = t, n && n.set(t, i), i
				}

				function l(t, e = 5, n = 10) {
					let i = Math.pow(n, e),
						a = Number(Math.round(t * i) / i);
					return Math.abs(a) > 1e-4 ? a : 0
				}

				function c(t) {
					return (0, a.default)(...t)
				}

				function u(t, e, n) {
					return 0 === e ? 0 : 1 === e ? 1 : n ? l(e > 0 ? n(e) : e) : l(e > 0 && t && i[t] ? i[t](e) : e)
				}
			},
			8686: function(t, e, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
						value: !0
					}),
					function t(t, e) {
						for (var n in e) Object.defineProperty(t, n, {
							enumerable: !0,
							get: e[n]
						})
					}(e, {
						bounce: function() {
							return G
						},
						bouncePast: function() {
							return j
						},
						ease: function() {
							return s
						},
						easeIn: function() {
							return o
						},
						easeInOut: function() {
							return c
						},
						easeOut: function() {
							return l
						},
						inBack: function() {
							return k
						},
						inCirc: function() {
							return O
						},
						inCubic: function() {
							return d
						},
						inElastic: function() {
							return F
						},
						inExpo: function() {
							return A
						},
						inOutBack: function() {
							return R
						},
						inOutCirc: function() {
							return P
						},
						inOutCubic: function() {
							return m
						},
						inOutElastic: function() {
							return N
						},
						inOutExpo: function() {
							return w
						},
						inOutQuad: function() {
							return h
						},
						inOutQuart: function() {
							return v
						},
						inOutQuint: function() {
							return T
						},
						inOutSine: function() {
							return x
						},
						inQuad: function() {
							return u
						},
						inQuart: function() {
							return g
						},
						inQuint: function() {
							return b
						},
						inSine: function() {
							return _
						},
						outBack: function() {
							return L
						},
						outBounce: function() {
							return M
						},
						outCirc: function() {
							return C
						},
						outCubic: function() {
							return p
						},
						outElastic: function() {
							return D
						},
						outExpo: function() {
							return S
						},
						outQuad: function() {
							return f
						},
						outQuart: function() {
							return y
						},
						outQuint: function() {
							return E
						},
						outSine: function() {
							return I
						},
						swingFrom: function() {
							return B
						},
						swingFromTo: function() {
							return V
						},
						swingTo: function() {
							return U
						}
					});
				let i = a(n(1361));

				function a(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				let r = 1.70158,
					s = (0, i.default)(.25, .1, .25, 1),
					o = (0, i.default)(.42, 0, 1, 1),
					l = (0, i.default)(0, 0, .58, 1),
					c = (0, i.default)(.42, 0, .58, 1);

				function u(t) {
					return Math.pow(t, 2)
				}

				function f(t) {
					return -(Math.pow(t - 1, 2) - 1)
				}

				function h(t) {
					return (t /= .5) < 1 ? .5 * Math.pow(t, 2) : -.5 * ((t -= 2) * t - 2)
				}

				function d(t) {
					return Math.pow(t, 3)
				}

				function p(t) {
					return Math.pow(t - 1, 3) + 1
				}

				function m(t) {
					return (t /= .5) < 1 ? .5 * Math.pow(t, 3) : .5 * (Math.pow(t - 2, 3) + 2)
				}

				function g(t) {
					return Math.pow(t, 4)
				}

				function y(t) {
					return -(Math.pow(t - 1, 4) - 1)
				}

				function v(t) {
					return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
				}

				function b(t) {
					return Math.pow(t, 5)
				}

				function E(t) {
					return Math.pow(t - 1, 5) + 1
				}

				function T(t) {
					return (t /= .5) < 1 ? .5 * Math.pow(t, 5) : .5 * (Math.pow(t - 2, 5) + 2)
				}

				function _(t) {
					return -Math.cos(Math.PI / 2 * t) + 1
				}

				function I(t) {
					return Math.sin(Math.PI / 2 * t)
				}

				function x(t) {
					return -.5 * (Math.cos(Math.PI * t) - 1)
				}

				function A(t) {
					return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
				}

				function S(t) {
					return 1 === t ? 1 : -Math.pow(2, -10 * t) + 1
				}

				function w(t) {
					return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
				}

				function O(t) {
					return -(Math.sqrt(1 - t * t) - 1)
				}

				function C(t) {
					return Math.sqrt(1 - Math.pow(t - 1, 2))
				}

				function P(t) {
					return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
				}

				function M(t) {
					if (t < 1 / 2.75) return 7.5625 * t * t;
					if (t < 2 / 2.75) return 7.5625 * (t -= 1.5 / 2.75) * t + .75;
					if (t < 2.5 / 2.75) return 7.5625 * (t -= 2.25 / 2.75) * t + .9375;
					else return 7.5625 * (t -= 2.625 / 2.75) * t + .984375
				}

				function k(t) {
					let e = r;
					return t * t * ((e + 1) * t - e)
				}

				function L(t) {
					let e = r;
					return (t -= 1) * t * ((e + 1) * t + e) + 1
				}

				function R(t) {
					let e = r;
					return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
				}

				function F(t) {
					let e = r,
						n = 0,
						i = 1;
					return 0 === t ? 0 : 1 === t ? 1 : (!n && (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * Math.PI * (t - e) / n)))
				}

				function D(t) {
					let e = r,
						n = 0,
						i = 1;
					return 0 === t ? 0 : 1 === t ? 1 : (!n && (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin(2 * Math.PI * (t - e) / n) + 1)
				}

				function N(t) {
					let e = r,
						n = 0,
						i = 1;
					return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (!n && (n = .3 * 1.5), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), t < 1) ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * Math.PI * (t - e) / n)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * Math.PI * (t - e) / n) * .5 + 1
				}

				function V(t) {
					let e = r;
					return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
				}

				function B(t) {
					let e = r;
					return t * t * ((e + 1) * t - e)
				}

				function U(t) {
					let e = r;
					return (t -= 1) * t * ((e + 1) * t + e) + 1
				}

				function G(t) {
					if (t < 1 / 2.75) return 7.5625 * t * t;
					if (t < 2 / 2.75) return 7.5625 * (t -= 1.5 / 2.75) * t + .75;
					if (t < 2.5 / 2.75) return 7.5625 * (t -= 2.25 / 2.75) * t + .9375;
					else return 7.5625 * (t -= 2.625 / 2.75) * t + .984375
				}

				function j(t) {
					if (t < 1 / 2.75) return 7.5625 * t * t;
					if (t < 2 / 2.75) return 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75);
					if (t < 2.5 / 2.75) return 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375);
					else return 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
				}
			},
			1799: function(t, e, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
						value: !0
					}),
					function t(t, e) {
						for (var n in e) Object.defineProperty(t, n, {
							enumerable: !0,
							get: e[n]
						})
					}(e, {
						clearPlugin: function() {
							return d
						},
						createPluginInstance: function() {
							return f
						},
						getPluginConfig: function() {
							return o
						},
						getPluginDestination: function() {
							return u
						},
						getPluginDuration: function() {
							return c
						},
						getPluginOrigin: function() {
							return l
						},
						isPluginType: function() {
							return r
						},
						renderPlugin: function() {
							return h
						}
					});
				let i = n(2662),
					a = n(3690);

				function r(t) {
					return a.pluginMethodMap.has(t)
				}
				let s = t => e => {
						if (!i.IS_BROWSER_ENV) return () => null;
						let n = a.pluginMethodMap.get(e);
						if (!n) throw Error(`IX2 no plugin configured for: ${e}`);
						let r = n[t];
						if (!r) throw Error(`IX2 invalid plugin method: ${t}`);
						return r
					},
					o = s("getPluginConfig"),
					l = s("getPluginOrigin"),
					c = s("getPluginDuration"),
					u = s("getPluginDestination"),
					f = s("createPluginInstance"),
					h = s("renderPlugin"),
					d = s("clearPlugin")
			},
			4124: function(t, e, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
						value: !0
					}),
					function t(t, e) {
						for (var n in e) Object.defineProperty(t, n, {
							enumerable: !0,
							get: e[n]
						})
					}(e, {
						cleanupHTMLElement: function() {
							return tJ
						},
						clearAllStyles: function() {
							return tQ
						},
						clearObjectCache: function() {
							return tu
						},
						getActionListProgress: function() {
							return t5
						},
						getAffectedElements: function() {
							return tb
						},
						getComputedStyle: function() {
							return tE
						},
						getDestinationValues: function() {
							return tO
						},
						getElementId: function() {
							return tp
						},
						getInstanceId: function() {
							return th
						},
						getInstanceOrigin: function() {
							return tx
						},
						getItemConfigByKey: function() {
							return tw
						},
						getMaxDurationItemIndex: function() {
							return t2
						},
						getNamespacedParameterId: function() {
							return t4
						},
						getRenderType: function() {
							return tC
						},
						getStyleProp: function() {
							return tP
						},
						mediaQueriesEqual: function() {
							return t7
						},
						observeStore: function() {
							return ty
						},
						reduceListToGroup: function() {
							return t3
						},
						reifyState: function() {
							return tm
						},
						renderHTMLElement: function() {
							return tM
						},
						shallowEqual: function() {
							return l.default
						},
						shouldAllowMediaQuery: function() {
							return t9
						},
						shouldNamespaceEventParameter: function() {
							return t6
						},
						stringifyTarget: function() {
							return t8
						}
					});
				let i = d(n(4075)),
					a = d(n(1455)),
					r = d(n(5720)),
					s = n(1185),
					o = n(7087),
					l = d(n(7164)),
					c = n(3767),
					u = n(380),
					f = n(1799),
					h = n(2662);

				function d(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				let {
					BACKGROUND: p,
					TRANSFORM: m,
					TRANSLATE_3D: g,
					SCALE_3D: y,
					ROTATE_X: v,
					ROTATE_Y: b,
					ROTATE_Z: E,
					SKEW: T,
					PRESERVE_3D: _,
					FLEX: I,
					OPACITY: x,
					FILTER: A,
					FONT_VARIATION_SETTINGS: S,
					WIDTH: w,
					HEIGHT: O,
					BACKGROUND_COLOR: C,
					BORDER_COLOR: P,
					COLOR: M,
					CHILDREN: k,
					IMMEDIATE_CHILDREN: L,
					SIBLINGS: R,
					PARENT: F,
					DISPLAY: D,
					WILL_CHANGE: N,
					AUTO: V,
					COMMA_DELIMITER: B,
					COLON_DELIMITER: U,
					BAR_DELIMITER: G,
					RENDER_TRANSFORM: j,
					RENDER_GENERAL: z,
					RENDER_STYLE: X,
					RENDER_PLUGIN: W
				} = o.IX2EngineConstants, {
					TRANSFORM_MOVE: Y,
					TRANSFORM_SCALE: H,
					TRANSFORM_ROTATE: q,
					TRANSFORM_SKEW: Q,
					STYLE_OPACITY: K,
					STYLE_FILTER: Z,
					STYLE_FONT_VARIATION: J,
					STYLE_SIZE: tt,
					STYLE_BACKGROUND_COLOR: te,
					STYLE_BORDER: tn,
					STYLE_TEXT_COLOR: ti,
					GENERAL_DISPLAY: ta,
					OBJECT_VALUE: tr
				} = o.ActionTypeConsts, ts = t => t.trim(), to = Object.freeze({
					[te]: C,
					[tn]: P,
					[ti]: M
				}), tl = Object.freeze({
					[h.TRANSFORM_PREFIXED]: m,
					[C]: p,
					[x]: x,
					[A]: A,
					[w]: w,
					[O]: O,
					[S]: S
				}), tc = new Map;

				function tu() {
					tc.clear()
				}
				let tf = 1;

				function th() {
					return "i" + tf++
				}
				let td = 1;

				function tp(t, e) {
					for (let n in t) {
						let i = t[n];
						if (i && i.ref === e) return i.id
					}
					return "e" + td++
				}

				function tm({
					events: t,
					actionLists: e,
					site: n
				} = {}) {
					let i = (0, a.default)(t, (t, e) => {
							let {
								eventTypeId: n
							} = e;
							return !t[n] && (t[n] = {}), t[n][e.id] = e, t
						}, {}),
						r = n && n.mediaQueries,
						s = [];
					return r ? s = r.map(t => t.key) : (r = [], console.warn("IX2 missing mediaQueries in site data")), {
						ixData: {
							events: t,
							actionLists: e,
							eventTypeMap: i,
							mediaQueries: r,
							mediaQueryKeys: s
						}
					}
				}
				let tg = (t, e) => t === e;

				function ty({
					store: t,
					select: e,
					onChange: n,
					comparator: i = tg
				}) {
					let {
						getState: a,
						subscribe: r
					} = t, s = r(l), o = e(a());

					function l() {
						let r = e(a());
						if (null == r) {
							s();
							return
						}!i(r, o) && n(o = r, t)
					}
					return s
				}

				function tv(t) {
					let e = typeof t;
					if ("string" === e) return {
						id: t
					};
					if (null != t && "object" === e) {
						let {
							id: e,
							objectId: n,
							selector: i,
							selectorGuids: a,
							appliesTo: r,
							useEventTarget: s
						} = t;
						return {
							id: e,
							objectId: n,
							selector: i,
							selectorGuids: a,
							appliesTo: r,
							useEventTarget: s
						}
					}
					return {}
				}

				function tb({
					config: t,
					event: e,
					eventTarget: n,
					elementRoot: i,
					elementApi: a
				}) {
					let r, s, l;
					if (!a) throw Error("IX2 missing elementApi");
					let {
						targets: c
					} = t;
					if (Array.isArray(c) && c.length > 0) return c.reduce((t, r) => t.concat(tb({
						config: {
							target: r
						},
						event: e,
						eventTarget: n,
						elementRoot: i,
						elementApi: a
					})), []);
					let {
						getValidDocument: u,
						getQuerySelector: f,
						queryDocument: d,
						getChildElements: p,
						getSiblingElements: m,
						matchSelector: g,
						elementContains: y,
						isSiblingNode: v
					} = a, {
						target: b
					} = t;
					if (!b) return [];
					let {
						id: E,
						objectId: T,
						selector: _,
						selectorGuids: I,
						appliesTo: x,
						useEventTarget: A
					} = tv(b);
					if (T) return [tc.has(T) ? tc.get(T) : tc.set(T, {}).get(T)];
					if (x === o.EventAppliesTo.PAGE) {
						let t = u(E);
						return t ? [t] : []
					}
					let S = (e?.action?.config?.affectedElements ?? {})[E || _] || {},
						w = !!(S.id || S.selector),
						O = e && f(tv(e.target));
					if (w ? (r = S.limitAffectedElements, s = O, l = f(S)) : s = l = f({
							id: E,
							selector: _,
							selectorGuids: I
						}), e && A) {
						let t = n && (l || !0 === A) ? [n] : d(O);
						if (l) {
							if (A === F) return d(l).filter(e => t.some(t => y(e, t)));
							if (A === k) return d(l).filter(e => t.some(t => y(t, e)));
							if (A === R) return d(l).filter(e => t.some(t => v(t, e)))
						}
						return t
					}
					if (null == s || null == l) return [];
					if (h.IS_BROWSER_ENV && i) return d(l).filter(t => i.contains(t));
					if (r === k) return d(s, l);
					if (r === L) return p(d(s)).filter(g(l));
					if (r === R) return m(d(s)).filter(g(l));
					else return d(l)
				}

				function tE({
					element: t,
					actionItem: e
				}) {
					if (!h.IS_BROWSER_ENV) return {};
					let {
						actionTypeId: n
					} = e;
					switch (n) {
						case tt:
						case te:
						case tn:
						case ti:
						case ta:
							return window.getComputedStyle(t);
						default:
							return {}
					}
				}
				let tT = /px/,
					t_ = (t, e) => e.reduce((t, e) => (null == t[e.type] && (t[e.type] = tL[e.type]), t), t || {}),
					tI = (t, e) => e.reduce((t, e) => (null == t[e.type] && (t[e.type] = tR[e.type] || e.defaultValue || 0), t), t || {});

				function tx(t, e = {}, n = {}, a, r) {
					let {
						getStyle: s
					} = r, {
						actionTypeId: o
					} = a;
					if ((0, f.isPluginType)(o)) return (0, f.getPluginOrigin)(o)(e[o], a);
					switch (a.actionTypeId) {
						case Y:
						case H:
						case q:
						case Q:
							return e[a.actionTypeId] || tk[a.actionTypeId];
						case Z:
							return t_(e[a.actionTypeId], a.config.filters);
						case J:
							return tI(e[a.actionTypeId], a.config.fontVariations);
						case K:
							return {
								value: (0, i.default)(parseFloat(s(t, x)), 1)
							};
						case tt: {
							let e, r;
							let o = s(t, w),
								l = s(t, O);
							return e = a.config.widthUnit === V ? tT.test(o) ? parseFloat(o) : parseFloat(n.width) : (0, i.default)(parseFloat(o), parseFloat(n.width)), {
								widthValue: e,
								heightValue: r = a.config.heightUnit === V ? tT.test(l) ? parseFloat(l) : parseFloat(n.height) : (0, i.default)(parseFloat(l), parseFloat(n.height))
							}
						}
						case te:
						case tn:
						case ti:
							return tW({
								element: t,
								actionTypeId: a.actionTypeId,
								computedStyle: n,
								getStyle: s
							});
						case ta:
							return {
								value: (0, i.default)(s(t, D), n.display)
							};
						case tr:
							return e[a.actionTypeId] || {
								value: 0
							};
						default:
							return
					}
				}
				let tA = (t, e) => (e && (t[e.type] = e.value || 0), t),
					tS = (t, e) => (e && (t[e.type] = e.value || 0), t),
					tw = (t, e, n) => {
						if ((0, f.isPluginType)(t)) return (0, f.getPluginConfig)(t)(n, e);
						switch (t) {
							case Z: {
								let t = (0, r.default)(n.filters, ({
									type: t
								}) => t === e);
								return t ? t.value : 0
							}
							case J: {
								let t = (0, r.default)(n.fontVariations, ({
									type: t
								}) => t === e);
								return t ? t.value : 0
							}
							default:
								return n[e]
						}
					};

				function tO({
					element: t,
					actionItem: e,
					elementApi: n
				}) {
					if ((0, f.isPluginType)(e.actionTypeId)) return (0, f.getPluginDestination)(e.actionTypeId)(e.config);
					switch (e.actionTypeId) {
						case Y:
						case H:
						case q:
						case Q: {
							let {
								xValue: t,
								yValue: n,
								zValue: i
							} = e.config;
							return {
								xValue: t,
								yValue: n,
								zValue: i
							}
						}
						case tt: {
							let {
								getStyle: i,
								setStyle: a,
								getProperty: r
							} = n, {
								widthUnit: s,
								heightUnit: o
							} = e.config, {
								widthValue: l,
								heightValue: c
							} = e.config;
							if (!h.IS_BROWSER_ENV) return {
								widthValue: l,
								heightValue: c
							};
							if (s === V) {
								let e = i(t, w);
								a(t, w, ""), l = r(t, "offsetWidth"), a(t, w, e)
							}
							if (o === V) {
								let e = i(t, O);
								a(t, O, ""), c = r(t, "offsetHeight"), a(t, O, e)
							}
							return {
								widthValue: l,
								heightValue: c
							}
						}
						case te:
						case tn:
						case ti: {
							let {
								rValue: i,
								gValue: a,
								bValue: r,
								aValue: s,
								globalSwatchId: o
							} = e.config;
							if (o && o.startsWith("--")) {
								let {
									getStyle: e
								} = n, i = e(t, o), a = (0, u.normalizeColor)(i);
								return {
									rValue: a.red,
									gValue: a.green,
									bValue: a.blue,
									aValue: a.alpha
								}
							}
							return {
								rValue: i,
								gValue: a,
								bValue: r,
								aValue: s
							}
						}
						case Z:
							return e.config.filters.reduce(tA, {});
						case J:
							return e.config.fontVariations.reduce(tS, {});
						default: {
							let {
								value: t
							} = e.config;
							return {
								value: t
							}
						}
					}
				}

				function tC(t) {
					return /^TRANSFORM_/.test(t) ? j : /^STYLE_/.test(t) ? X : /^GENERAL_/.test(t) ? z : /^PLUGIN_/.test(t) ? W : void 0
				}

				function tP(t, e) {
					return t === X ? e.replace("STYLE_", "").toLowerCase() : null
				}

				function tM(t, e, n, i, a, r, s, o, l) {
					switch (o) {
						case j:
							return tN(t, e, n, a, s);
						case X:
							return tY(t, e, n, a, r, s);
						case z:
							return tH(t, a, s);
						case W: {
							let {
								actionTypeId: t
							} = a;
							if ((0, f.isPluginType)(t)) return (0, f.renderPlugin)(t)(l, e, a)
						}
					}
				}
				let tk = {
						[Y]: Object.freeze({
							xValue: 0,
							yValue: 0,
							zValue: 0
						}),
						[H]: Object.freeze({
							xValue: 1,
							yValue: 1,
							zValue: 1
						}),
						[q]: Object.freeze({
							xValue: 0,
							yValue: 0,
							zValue: 0
						}),
						[Q]: Object.freeze({
							xValue: 0,
							yValue: 0
						})
					},
					tL = Object.freeze({
						blur: 0,
						"hue-rotate": 0,
						invert: 0,
						grayscale: 0,
						saturate: 100,
						sepia: 0,
						contrast: 100,
						brightness: 100
					}),
					tR = Object.freeze({
						wght: 0,
						opsz: 0,
						wdth: 0,
						slnt: 0
					}),
					tF = (t, e) => {
						let n = (0, r.default)(e.filters, ({
							type: e
						}) => e === t);
						if (n && n.unit) return n.unit;
						switch (t) {
							case "blur":
								return "px";
							case "hue-rotate":
								return "deg";
							default:
								return "%"
						}
					},
					tD = Object.keys(tk);

				function tN(t, e, n, i, a) {
					let r = tD.map(t => {
							let n = tk[t],
								{
									xValue: i = n.xValue,
									yValue: a = n.yValue,
									zValue: r = n.zValue,
									xUnit: s = "",
									yUnit: o = "",
									zUnit: l = ""
								} = e[t] || {};
							switch (t) {
								case Y:
									return `${g}(${i}${s}, ${a}${o}, ${r}${l})`;
								case H:
									return `${y}(${i}${s}, ${a}${o}, ${r}${l})`;
								case q:
									return `${v}(${i}${s}) ${b}(${a}${o}) ${E}(${r}${l})`;
								case Q:
									return `${T}(${i}${s}, ${a}${o})`;
								default:
									return ""
							}
						}).join(" "),
						{
							setStyle: s
						} = a;
					tq(t, h.TRANSFORM_PREFIXED, a), s(t, h.TRANSFORM_PREFIXED, r), tU(i, n) && s(t, h.TRANSFORM_STYLE_PREFIXED, _)
				}

				function tV(t, e, n, i) {
					let r = (0, a.default)(e, (t, e, i) => `${t} ${i}(${e}${tF(i,n)})`, ""),
						{
							setStyle: s
						} = i;
					tq(t, A, i), s(t, A, r)
				}

				function tB(t, e, n, i) {
					let r = (0, a.default)(e, (t, e, n) => (t.push(`"${n}" ${e}`), t), []).join(", "),
						{
							setStyle: s
						} = i;
					tq(t, S, i), s(t, S, r)
				}

				function tU({
					actionTypeId: t
				}, {
					xValue: e,
					yValue: n,
					zValue: i
				}) {
					return t === Y && void 0 !== i || t === H && void 0 !== i || t === q && (void 0 !== e || void 0 !== n)
				}
				let tG = "\\(([^)]+)\\)",
					tj = /^rgb/,
					tz = RegExp(`rgba?${tG}`);

				function tX(t, e) {
					let n = t.exec(e);
					return n ? n[1] : ""
				}

				function tW({
					element: t,
					actionTypeId: e,
					computedStyle: n,
					getStyle: a
				}) {
					let r = to[e],
						s = a(t, r),
						o = tX(tz, tj.test(s) ? s : n[r]).split(B);
					return {
						rValue: (0, i.default)(parseInt(o[0], 10), 255),
						gValue: (0, i.default)(parseInt(o[1], 10), 255),
						bValue: (0, i.default)(parseInt(o[2], 10), 255),
						aValue: (0, i.default)(parseFloat(o[3]), 1)
					}
				}

				function tY(t, e, n, i, a, r) {
					let {
						setStyle: s
					} = r;
					switch (i.actionTypeId) {
						case tt: {
							let {
								widthUnit: e = "",
								heightUnit: a = ""
							} = i.config, {
								widthValue: o,
								heightValue: l
							} = n;
							void 0 !== o && (e === V && (e = "px"), tq(t, w, r), s(t, w, o + e)), void 0 !== l && (a === V && (a = "px"), tq(t, O, r), s(t, O, l + a));
							break
						}
						case Z:
							tV(t, n, i.config, r);
							break;
						case J:
							tB(t, n, i.config, r);
							break;
						case te:
						case tn:
						case ti: {
							let e = to[i.actionTypeId],
								a = Math.round(n.rValue),
								o = Math.round(n.gValue),
								l = Math.round(n.bValue),
								c = n.aValue;
							tq(t, e, r), s(t, e, c >= 1 ? `rgb(${a},${o},${l})` : `rgba(${a},${o},${l},${c})`);
							break
						}
						default: {
							let {
								unit: e = ""
							} = i.config;
							tq(t, a, r), s(t, a, n.value + e)
						}
					}
				}

				function tH(t, e, n) {
					let {
						setStyle: i
					} = n;
					if (e.actionTypeId === ta) {
						let {
							value: n
						} = e.config;
						i(t, D, n === I && h.IS_BROWSER_ENV ? h.FLEX_PREFIXED : n);
						return
					}
				}

				function tq(t, e, n) {
					if (!h.IS_BROWSER_ENV) return;
					let i = tl[e];
					if (!i) return;
					let {
						getStyle: a,
						setStyle: r
					} = n, s = a(t, N);
					if (!s) {
						r(t, N, i);
						return
					}
					let o = s.split(B).map(ts); - 1 === o.indexOf(i) && r(t, N, o.concat(i).join(B))
				}

				function t$(t, e, n) {
					if (!h.IS_BROWSER_ENV) return;
					let i = tl[e];
					if (!i) return;
					let {
						getStyle: a,
						setStyle: r
					} = n, s = a(t, N);
					if (!!s && -1 !== s.indexOf(i)) r(t, N, s.split(B).map(ts).filter(t => t !== i).join(B))
				}

				function tQ({
					store: t,
					elementApi: e
				}) {
					let {
						ixData: n
					} = t.getState(), {
						events: i = {},
						actionLists: a = {}
					} = n;
					Object.keys(i).forEach(t => {
						let n = i[t],
							{
								config: r
							} = n.action,
							{
								actionListId: s
							} = r,
							o = a[s];
						o && tK({
							actionList: o,
							event: n,
							elementApi: e
						})
					}), Object.keys(a).forEach(t => {
						tK({
							actionList: a[t],
							elementApi: e
						})
					})
				}

				function tK({
					actionList: t = {},
					event: e,
					elementApi: n
				}) {
					let {
						actionItemGroups: i,
						continuousParameterGroups: a
					} = t;
					i && i.forEach(t => {
						tZ({
							actionGroup: t,
							event: e,
							elementApi: n
						})
					}), a && a.forEach(t => {
						let {
							continuousActionGroups: i
						} = t;
						i.forEach(t => {
							tZ({
								actionGroup: t,
								event: e,
								elementApi: n
							})
						})
					})
				}

				function tZ({
					actionGroup: t,
					event: e,
					elementApi: n
				}) {
					let {
						actionItems: i
					} = t;
					i.forEach(t => {
						let i;
						let {
							actionTypeId: a,
							config: r
						} = t;
						i = (0, f.isPluginType)(a) ? e => (0, f.clearPlugin)(a)(e, t) : t0({
							effect: t1,
							actionTypeId: a,
							elementApi: n
						}), tb({
							config: r,
							event: e,
							elementApi: n
						}).forEach(i)
					})
				}

				function tJ(t, e, n) {
					let {
						setStyle: i,
						getStyle: a
					} = n, {
						actionTypeId: r
					} = e;
					if (r === tt) {
						let {
							config: n
						} = e;
						n.widthUnit === V && i(t, w, ""), n.heightUnit === V && i(t, O, "")
					}
					a(t, N) && t0({
						effect: t$,
						actionTypeId: r,
						elementApi: n
					})(t)
				}
				let t0 = ({
					effect: t,
					actionTypeId: e,
					elementApi: n
				}) => i => {
					switch (e) {
						case Y:
						case H:
						case q:
						case Q:
							t(i, h.TRANSFORM_PREFIXED, n);
							break;
						case Z:
							t(i, A, n);
							break;
						case J:
							t(i, S, n);
							break;
						case K:
							t(i, x, n);
							break;
						case tt:
							t(i, w, n), t(i, O, n);
							break;
						case te:
						case tn:
						case ti:
							t(i, to[e], n);
							break;
						case ta:
							t(i, D, n)
					}
				};

				function t1(t, e, n) {
					let {
						setStyle: i
					} = n;
					t$(t, e, n), i(t, e, ""), e === h.TRANSFORM_PREFIXED && i(t, h.TRANSFORM_STYLE_PREFIXED, "")
				}

				function t2(t) {
					let e = 0,
						n = 0;
					return t.forEach((t, i) => {
						let {
							config: a
						} = t, r = a.delay + a.duration;
						r >= e && (e = r, n = i)
					}), n
				}

				function t5(t, e) {
					let {
						actionItemGroups: n,
						useFirstGroupAsInitialState: i
					} = t, {
						actionItem: a,
						verboseTimeElapsed: r = 0
					} = e, s = 0, o = 0;
					return n.forEach((t, e) => {
						if (i && 0 === e) return;
						let {
							actionItems: n
						} = t, l = n[t2(n)], {
							config: c,
							actionTypeId: u
						} = l;
						a.id === l.id && (o = s + r);
						let f = tC(u) === z ? 0 : c.duration;
						s += c.delay + f
					}), s > 0 ? (0, c.optimizeFloat)(o / s) : 0
				}

				function t3({
					actionList: t,
					actionItemId: e,
					rawData: n
				}) {
					let {
						actionItemGroups: i,
						continuousParameterGroups: a
					} = t, r = [], o = t => (r.push((0, s.mergeIn)(t, ["config"], {
						delay: 0,
						duration: 0
					})), t.id === e);
					return i && i.some(({
						actionItems: t
					}) => t.some(o)), a && a.some(t => {
						let {
							continuousActionGroups: e
						} = t;
						return e.some(({
							actionItems: t
						}) => t.some(o))
					}), (0, s.setIn)(n, ["actionLists"], {
						[t.id]: {
							id: t.id,
							actionItemGroups: [{
								actionItems: r
							}]
						}
					})
				}

				function t6(t, {
					basedOn: e
				}) {
					return t === o.EventTypeConsts.SCROLLING_IN_VIEW && (e === o.EventBasedOn.ELEMENT || null == e) || t === o.EventTypeConsts.MOUSE_MOVE && e === o.EventBasedOn.ELEMENT
				}

				function t4(t, e) {
					return t + U + e
				}

				function t9(t, e) {
					return null == e || -1 !== t.indexOf(e)
				}

				function t7(t, e) {
					return (0, l.default)(t && t.sort(), e && e.sort())
				}

				function t8(t) {
					if ("string" == typeof t) return t;
					if (t.pluginElement && t.objectId) return t.pluginElement + G + t.objectId;
					if (t.objectId) return t.objectId;
					let {
						id: e = "",
						selector: n = "",
						useEventTarget: i = ""
					} = t;
					return e + G + n + G + i
				}
			},
			7164: function(t, e) {
				"use strict";

				function n(t, e) {
					return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e
				}
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), Object.defineProperty(e, "default", {
					enumerable: !0,
					get: function() {
						return i
					}
				});
				let i = function t(t, e) {
					if (n(t, e)) return !0;
					if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
					let i = Object.keys(t),
						a = Object.keys(e);
					if (i.length !== a.length) return !1;
					for (let a = 0; a < i.length; a++)
						if (!Object.hasOwn(e, i[a]) || !n(t[i[a]], e[i[a]])) return !1;
					return !0
				}
			},
			5861: function(t, e, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
						value: !0
					}),
					function t(t, e) {
						for (var n in e) Object.defineProperty(t, n, {
							enumerable: !0,
							get: e[n]
						})
					}(e, {
						createElementState: function() {
							return _
						},
						ixElements: function() {
							return T
						},
						mergeActionState: function() {
							return I
						}
					});
				let i = n(1185),
					a = n(7087),
					{
						HTML_ELEMENT: r,
						PLAIN_OBJECT: s,
						ABSTRACT_NODE: o,
						CONFIG_X_VALUE: l,
						CONFIG_Y_VALUE: c,
						CONFIG_Z_VALUE: u,
						CONFIG_VALUE: f,
						CONFIG_X_UNIT: h,
						CONFIG_Y_UNIT: d,
						CONFIG_Z_UNIT: p,
						CONFIG_UNIT: m
					} = a.IX2EngineConstants,
					{
						IX2_SESSION_STOPPED: g,
						IX2_INSTANCE_ADDED: y,
						IX2_ELEMENT_STATE_CHANGED: v
					} = a.IX2EngineActionTypes,
					b = {},
					E = "refState",
					T = (t = b, e = {}) => {
						switch (e.type) {
							case g:
								return b;
							case y: {
								let {
									elementId: n,
									element: a,
									origin: r,
									actionItem: s,
									refType: o
								} = e.payload, {
									actionTypeId: l
								} = s, c = t;
								return (0, i.getIn)(c, [n, a]) !== a && (c = _(c, a, o, n, s)), I(c, n, l, r, s)
							}
							case v: {
								let {
									elementId: n,
									actionTypeId: i,
									current: a,
									actionItem: r
								} = e.payload;
								return I(t, n, i, a, r)
							}
							default:
								return t
						}
					};

				function _(t, e, n, a, r) {
					let o = n === s ? (0, i.getIn)(r, ["config", "target", "objectId"]) : null;
					return (0, i.mergeIn)(t, [a], {
						id: a,
						ref: e,
						refId: o,
						refType: n
					})
				}

				function I(t, e, n, a, r) {
					let s = A(r),
						o = [e, E, n];
					return (0, i.mergeIn)(t, o, a, s)
				}
				let x = [
					[l, h],
					[c, d],
					[u, p],
					[f, m]
				];

				function A(t) {
					let {
						config: e
					} = t;
					return x.reduce((t, n) => {
						let i = n[0],
							a = n[1],
							r = e[i],
							s = e[a];
						return null != r && null != s && (t[a] = s), t
					}, {})
				}
			},
			6326: function() {
				Webflow.require("ix2").init({
					events: {
						"e-2": {
							id: "e-2",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_MOVE",
							action: {
								id: "",
								actionTypeId: "GENERAL_CONTINUOUS_ACTION",
								config: {
									actionListId: "a-3",
									affectedElements: {},
									duration: 0
								}
							},
							mediaQueries: ["main"],
							target: {
								selector: ".nav_link-1",
								originalId: "66c25a9b5225e40f63e2efd0|5a796393-5f34-8cd7-047e-a70302f01542",
								appliesTo: "CLASS"
							},
							targets: [{
								selector: ".nav_link-1",
								originalId: "66c25a9b5225e40f63e2efd0|5a796393-5f34-8cd7-047e-a70302f01542",
								appliesTo: "CLASS"
							}],
							config: [{
								continuousParameterGroupId: "a-3-p",
								selectedAxis: "X_AXIS",
								basedOn: "ELEMENT",
								reverse: !1,
								smoothing: 80,
								restingState: 50
							}, {
								continuousParameterGroupId: "a-3-p-2",
								selectedAxis: "Y_AXIS",
								basedOn: "ELEMENT",
								reverse: !1,
								smoothing: 80,
								restingState: 50
							}],
							createdOn: 0x18fc05f039f
						},
						"e-37": {
							id: "e-37",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OVER",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-27",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-214"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|2a89dc10-8125-a418-c025-de273c91e519",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|2a89dc10-8125-a418-c025-de273c91e519",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x1919e0d34d5
						},
						"e-38": {
							id: "e-38",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OUT",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-28",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-92"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|2a89dc10-8125-a418-c025-de273c91e519",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|2a89dc10-8125-a418-c025-de273c91e519",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x1919e0d34d6
						},
						"e-40": {
							id: "e-40",
							name: "",
							animationType: "custom",
							eventTypeId: "SCROLLING_IN_VIEW",
							action: {
								id: "",
								actionTypeId: "GENERAL_CONTINUOUS_ACTION",
								config: {
									actionListId: "a-31",
									affectedElements: {},
									duration: 0
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|c8e4efa1-e476-ee35-18b0-c9a2d30d0866",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|c8e4efa1-e476-ee35-18b0-c9a2d30d0866",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: [{
								continuousParameterGroupId: "a-31-p",
								smoothing: 90,
								startsEntering: !0,
								addStartOffset: !1,
								addOffsetValue: 50,
								startsExiting: !1,
								addEndOffset: !1,
								endOffsetValue: 50
							}],
							createdOn: 0x192972068af
						},
						"e-41": {
							id: "e-41",
							name: "",
							animationType: "preset",
							eventTypeId: "SCROLLING_IN_VIEW",
							action: {
								id: "",
								actionTypeId: "GENERAL_CONTINUOUS_ACTION",
								config: {
									actionListId: "a-31",
									affectedElements: {},
									duration: 0
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|76f6dcf4-e62e-cf22-dc1a-0666f7b910aa",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|76f6dcf4-e62e-cf22-dc1a-0666f7b910aa",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: [{
								continuousParameterGroupId: "a-31-p",
								smoothing: 90,
								startsEntering: !0,
								addStartOffset: !1,
								addOffsetValue: 50,
								startsExiting: !1,
								addEndOffset: !1,
								endOffsetValue: 50
							}],
							createdOn: 0x1929724f071
						},
						"e-49": {
							id: "e-49",
							name: "",
							animationType: "preset",
							eventTypeId: "SCROLLING_IN_VIEW",
							action: {
								id: "",
								actionTypeId: "GENERAL_CONTINUOUS_ACTION",
								config: {
									actionListId: "a-29",
									affectedElements: {},
									duration: 0
								}
							},
							mediaQueries: ["main"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|6f8f9859-c262-4f38-89f2-75705767207a",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|6f8f9859-c262-4f38-89f2-75705767207a",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: [{
								continuousParameterGroupId: "a-29-p",
								smoothing: 95,
								startsEntering: !1,
								addStartOffset: !1,
								addOffsetValue: 50,
								startsExiting: !1,
								addEndOffset: !0,
								endOffsetValue: 15
							}],
							createdOn: 0x192ac342e8c
						},
						"e-73": {
							id: "e-73",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OVER",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-55",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-206"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								selector: ".github_button",
								originalId: "66c25a9b5225e40f63e2efd0|065befd7-03eb-6d4d-2f1d-f44503e7aa31",
								appliesTo: "CLASS"
							},
							targets: [{
								selector: ".github_button",
								originalId: "66c25a9b5225e40f63e2efd0|065befd7-03eb-6d4d-2f1d-f44503e7aa31",
								appliesTo: "CLASS"
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x19152a949ad
						},
						"e-74": {
							id: "e-74",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OUT",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-56",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-200"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								selector: ".github_button",
								originalId: "66c25a9b5225e40f63e2efd0|065befd7-03eb-6d4d-2f1d-f44503e7aa31",
								appliesTo: "CLASS"
							},
							targets: [{
								selector: ".github_button",
								originalId: "66c25a9b5225e40f63e2efd0|065befd7-03eb-6d4d-2f1d-f44503e7aa31",
								appliesTo: "CLASS"
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x19152a949ae
						},
						"e-127": {
							id: "e-127",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_OVER",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-44",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-128"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "67080a3cfa37aa26a574328e|382b41b2-9cb5-6c55-2bc9-521402d72c91",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|382b41b2-9cb5-6c55-2bc9-521402d72c91",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192d603c900
						},
						"e-128": {
							id: "e-128",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_OUT",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-45",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-127"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "67080a3cfa37aa26a574328e|382b41b2-9cb5-6c55-2bc9-521402d72c91",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|382b41b2-9cb5-6c55-2bc9-521402d72c91",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192d603c900
						},
						"e-130": {
							id: "e-130",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_SECOND_CLICK",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-47",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-129"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "67080a3cfa37aa26a574328e|382b41b2-9cb5-6c55-2bc9-521402d72c91",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|382b41b2-9cb5-6c55-2bc9-521402d72c91",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192d603c900
						},
						"e-131": {
							id: "e-131",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_CLICK",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-22",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-132"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "67080a3cfa37aa26a574328e|382b41b2-9cb5-6c55-2bc9-521402d72c91",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|382b41b2-9cb5-6c55-2bc9-521402d72c91",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192d603c900
						},
						"e-133": {
							id: "e-133",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_MOVE",
							action: {
								id: "",
								actionTypeId: "GENERAL_CONTINUOUS_ACTION",
								config: {
									actionListId: "a-26",
									affectedElements: {},
									duration: 0
								}
							},
							mediaQueries: ["main"],
							target: {
								id: "67080a3cfa37aa26a574328e|382b41b2-9cb5-6c55-2bc9-521402d72c9a",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|382b41b2-9cb5-6c55-2bc9-521402d72c9a",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: [{
								continuousParameterGroupId: "a-26-p",
								selectedAxis: "X_AXIS",
								basedOn: "ELEMENT",
								reverse: !1,
								smoothing: 50,
								restingState: 50
							}, {
								continuousParameterGroupId: "a-26-p-2",
								selectedAxis: "Y_AXIS",
								basedOn: "ELEMENT",
								reverse: !1,
								smoothing: 50,
								restingState: 50
							}],
							createdOn: 0x192d603c900
						},
						"e-134": {
							id: "e-134",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_CLICK",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-24",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-135"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "67080a3cfa37aa26a574328e|382b41b2-9cb5-6c55-2bc9-521402d72c9f",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|382b41b2-9cb5-6c55-2bc9-521402d72c9f",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192d603c900
						},
						"e-136": {
							id: "e-136",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_CLICK",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-23",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-137"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "67080a3cfa37aa26a574328e|382b41b2-9cb5-6c55-2bc9-521402d72c9f",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|382b41b2-9cb5-6c55-2bc9-521402d72c9f",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192d603c900
						},
						"e-138": {
							id: "e-138",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_CLICK",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-47",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-139"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "67080a3cfa37aa26a574328e|382b41b2-9cb5-6c55-2bc9-521402d72c9f",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|382b41b2-9cb5-6c55-2bc9-521402d72c9f",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192d603c900
						},
						"e-140": {
							id: "e-140",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_CLICK",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-23",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-141"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "67080a3cfa37aa26a574328e|382b41b2-9cb5-6c55-2bc9-521402d72ca3",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|382b41b2-9cb5-6c55-2bc9-521402d72ca3",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192d603c900
						},
						"e-142": {
							id: "e-142",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_CLICK",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-46",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-143"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "67080a3cfa37aa26a574328e|382b41b2-9cb5-6c55-2bc9-521402d72ca3",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|382b41b2-9cb5-6c55-2bc9-521402d72ca3",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192d603c900
						},
						"e-144": {
							id: "e-144",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_CLICK",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-47",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-145"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "67080a3cfa37aa26a574328e|382b41b2-9cb5-6c55-2bc9-521402d72ca3",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|382b41b2-9cb5-6c55-2bc9-521402d72ca3",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192d603c900
						},
						"e-146": {
							id: "e-146",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_CLICK",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-23",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-147"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "67080a3cfa37aa26a574328e|382b41b2-9cb5-6c55-2bc9-521402d72ca7",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|382b41b2-9cb5-6c55-2bc9-521402d72ca7",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192d603c900
						},
						"e-148": {
							id: "e-148",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_CLICK",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-23",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-149"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "67080a3cfa37aa26a574328e|382b41b2-9cb5-6c55-2bc9-521402d72cab",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|382b41b2-9cb5-6c55-2bc9-521402d72cab",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192d603c900
						},
						"e-154": {
							id: "e-154",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OVER",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-59",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-155"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|e235f3ae-3ee2-17b1-a460-254bca83b27f",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|e235f3ae-3ee2-17b1-a460-254bca83b27f",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192d7c6d884
						},
						"e-155": {
							id: "e-155",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OUT",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-60",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-154"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|e235f3ae-3ee2-17b1-a460-254bca83b27f",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|e235f3ae-3ee2-17b1-a460-254bca83b27f",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192d7c6d885
						},
						"e-156": {
							id: "e-156",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OVER",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-59",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-157"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|4537c0b9-dec9-6a2d-ab27-c90fded97ba1",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|4537c0b9-dec9-6a2d-ab27-c90fded97ba1",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192d7c795c1
						},
						"e-157": {
							id: "e-157",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OUT",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-60",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-156"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|4537c0b9-dec9-6a2d-ab27-c90fded97ba1",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|4537c0b9-dec9-6a2d-ab27-c90fded97ba1",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192d7c795c2
						},
						"e-158": {
							id: "e-158",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OVER",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-59",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-159"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|4537c0b9-dec9-6a2d-ab27-c90fded97b9d",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|4537c0b9-dec9-6a2d-ab27-c90fded97b9d",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192d7c877f5
						},
						"e-159": {
							id: "e-159",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OUT",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-60",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-158"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|4537c0b9-dec9-6a2d-ab27-c90fded97b9d",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|4537c0b9-dec9-6a2d-ab27-c90fded97b9d",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192d7c877f5
						},
						"e-160": {
							id: "e-160",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OVER",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-59",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-161"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|4537c0b9-dec9-6a2d-ab27-c90fded97b9f",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|4537c0b9-dec9-6a2d-ab27-c90fded97b9f",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192d7c93683
						},
						"e-161": {
							id: "e-161",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OUT",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-60",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-160"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|4537c0b9-dec9-6a2d-ab27-c90fded97b9f",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|4537c0b9-dec9-6a2d-ab27-c90fded97b9f",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192d7c93683
						},
						"e-170": {
							id: "e-170",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_OVER",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-59",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-171"
								}
							},
							mediaQueries: ["main"],
							target: {
								selector: ".social_link",
								originalId: "67080a3cfa37aa26a574328e|1c7b7655-d80c-e670-e435-4b7578326c30",
								appliesTo: "CLASS"
							},
							targets: [{
								selector: ".social_link",
								originalId: "67080a3cfa37aa26a574328e|1c7b7655-d80c-e670-e435-4b7578326c30",
								appliesTo: "CLASS"
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192ec75b833
						},
						"e-171": {
							id: "e-171",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_OUT",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-60",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-170"
								}
							},
							mediaQueries: ["main"],
							target: {
								selector: ".social_link",
								originalId: "67080a3cfa37aa26a574328e|1c7b7655-d80c-e670-e435-4b7578326c30",
								appliesTo: "CLASS"
							},
							targets: [{
								selector: ".social_link",
								originalId: "67080a3cfa37aa26a574328e|1c7b7655-d80c-e670-e435-4b7578326c30",
								appliesTo: "CLASS"
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192ec75b833
						},
						"e-178": {
							id: "e-178",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OVER",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-61",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-179"
								}
							},
							mediaQueries: ["main"],
							target: {
								id: "67080a3cfa37aa26a574328e|d929b0bb-6d91-d832-adb7-1b3c58ac110b",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|d929b0bb-6d91-d832-adb7-1b3c58ac110b",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192eccf4d57
						},
						"e-179": {
							id: "e-179",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OUT",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-62",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-178"
								}
							},
							mediaQueries: ["main"],
							target: {
								id: "67080a3cfa37aa26a574328e|d929b0bb-6d91-d832-adb7-1b3c58ac110b",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|d929b0bb-6d91-d832-adb7-1b3c58ac110b",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192eccf4d58
						},
						"e-199": {
							id: "e-199",
							name: "",
							animationType: "custom",
							eventTypeId: "SCROLLING_IN_VIEW",
							action: {
								id: "",
								actionTypeId: "GENERAL_CONTINUOUS_ACTION",
								config: {
									actionListId: "a-67",
									affectedElements: {},
									duration: 0
								}
							},
							mediaQueries: ["main"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|c4c5b12d-1cc4-3687-3960-2a9e353116eb",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|c4c5b12d-1cc4-3687-3960-2a9e353116eb",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: [{
								continuousParameterGroupId: "a-67-p",
								smoothing: 40,
								startsEntering: !1,
								addStartOffset: !1,
								addOffsetValue: 20,
								startsExiting: !1,
								addEndOffset: !0,
								endOffsetValue: 15
							}],
							createdOn: 0x178048cfcb5
						},
						"e-200": {
							id: "e-200",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OVER",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-68",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-206"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								selector: ".github_button",
								originalId: "66c25a9b5225e40f63e2efd0|c4c5b12d-1cc4-3687-3960-2a9e35311723",
								appliesTo: "CLASS"
							},
							targets: [{
								selector: ".github_button",
								originalId: "66c25a9b5225e40f63e2efd0|c4c5b12d-1cc4-3687-3960-2a9e35311723",
								appliesTo: "CLASS"
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x19152a949ad
						},
						"e-201": {
							id: "e-201",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OUT",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-58",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-204"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|c4c5b12d-1cc4-3687-3960-2a9e35311713",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|c4c5b12d-1cc4-3687-3960-2a9e35311713",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192d597a3c0
						},
						"e-202": {
							id: "e-202",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OVER",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-57",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-203"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|c4c5b12d-1cc4-3687-3960-2a9e3531172c",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|c4c5b12d-1cc4-3687-3960-2a9e3531172c",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192d59d5f27
						},
						"e-203": {
							id: "e-203",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OUT",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-58",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-202"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|c4c5b12d-1cc4-3687-3960-2a9e3531172c",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|c4c5b12d-1cc4-3687-3960-2a9e3531172c",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192d59d5f27
						},
						"e-204": {
							id: "e-204",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OVER",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-57",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-201"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|c4c5b12d-1cc4-3687-3960-2a9e35311713",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|c4c5b12d-1cc4-3687-3960-2a9e35311713",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192d597a3c0
						},
						"e-205": {
							id: "e-205",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OUT",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-58",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-207"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|c4c5b12d-1cc4-3687-3960-2a9e353116f1",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|c4c5b12d-1cc4-3687-3960-2a9e353116f1",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192d59b17c7
						},
						"e-206": {
							id: "e-206",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OUT",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-69",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-200"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								selector: ".github_button",
								originalId: "66c25a9b5225e40f63e2efd0|c4c5b12d-1cc4-3687-3960-2a9e35311723",
								appliesTo: "CLASS"
							},
							targets: [{
								selector: ".github_button",
								originalId: "66c25a9b5225e40f63e2efd0|c4c5b12d-1cc4-3687-3960-2a9e35311723",
								appliesTo: "CLASS"
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x19152a949ae
						},
						"e-207": {
							id: "e-207",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OVER",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-57",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-205"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|c4c5b12d-1cc4-3687-3960-2a9e353116f1",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|c4c5b12d-1cc4-3687-3960-2a9e353116f1",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x192d59b17c7
						},
						"e-212": {
							id: "e-212",
							name: "",
							animationType: "preset",
							eventTypeId: "SCROLL_INTO_VIEW",
							action: {
								id: "",
								actionTypeId: "FADE_EFFECT",
								instant: !1,
								config: {
									actionListId: "fadeIn",
									autoStopEventId: "e-213"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|16508392-1550-fbd6-613e-0b4b678f61c6",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|16508392-1550-fbd6-613e-0b4b678f61c6",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: 4,
								scrollOffsetUnit: "%",
								delay: 700,
								direction: null,
								effectIn: !0
							},
							createdOn: 0x193adfdf430
						},
						"e-214": {
							id: "e-214",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OVER",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-70",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-215"
								}
							},
							mediaQueries: ["main", "medium"],
							target: {
								selector: ".link-02",
								originalId: "66c25a9b5225e40f63e2efd0|20a0e4ab-2969-0876-a468-9ac07f556a7b",
								appliesTo: "CLASS"
							},
							targets: [{
								selector: ".link-02",
								originalId: "66c25a9b5225e40f63e2efd0|20a0e4ab-2969-0876-a468-9ac07f556a7b",
								appliesTo: "CLASS"
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x18731982f88
						},
						"e-215": {
							id: "e-215",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OUT",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-71",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-214"
								}
							},
							mediaQueries: ["main", "medium"],
							target: {
								selector: ".link-02",
								originalId: "66c25a9b5225e40f63e2efd0|20a0e4ab-2969-0876-a468-9ac07f556a7b",
								appliesTo: "CLASS"
							},
							targets: [{
								selector: ".link-02",
								originalId: "66c25a9b5225e40f63e2efd0|20a0e4ab-2969-0876-a468-9ac07f556a7b",
								appliesTo: "CLASS"
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x18731982f89
						},
						"e-216": {
							id: "e-216",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_OVER",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-59",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-217"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "67080a3cfa37aa26a574328e|8855542a-5bff-ff6a-d844-a17561f03d1f",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|8855542a-5bff-ff6a-d844-a17561f03d1f",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x193bd811de8
						},
						"e-217": {
							id: "e-217",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_OUT",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-60",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-216"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "67080a3cfa37aa26a574328e|8855542a-5bff-ff6a-d844-a17561f03d1f",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|8855542a-5bff-ff6a-d844-a17561f03d1f",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x193bd811de8
						},
						"e-218": {
							id: "e-218",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_OVER",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-59",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-219"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "67080a3cfa37aa26a574328e|8855542a-5bff-ff6a-d844-a17561f03d21",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|8855542a-5bff-ff6a-d844-a17561f03d21",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x193bd811de8
						},
						"e-219": {
							id: "e-219",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_OUT",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-60",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-218"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "67080a3cfa37aa26a574328e|8855542a-5bff-ff6a-d844-a17561f03d21",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|8855542a-5bff-ff6a-d844-a17561f03d21",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x193bd811de8
						},
						"e-220": {
							id: "e-220",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_OVER",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-59",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-221"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "67080a3cfa37aa26a574328e|8855542a-5bff-ff6a-d844-a17561f03d23",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|8855542a-5bff-ff6a-d844-a17561f03d23",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x193bd811de8
						},
						"e-221": {
							id: "e-221",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_OUT",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-60",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-220"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "67080a3cfa37aa26a574328e|8855542a-5bff-ff6a-d844-a17561f03d23",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|8855542a-5bff-ff6a-d844-a17561f03d23",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x193bd811de8
						},
						"e-222": {
							id: "e-222",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_OVER",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-59",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-223"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "67080a3cfa37aa26a574328e|8855542a-5bff-ff6a-d844-a17561f03d25",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|8855542a-5bff-ff6a-d844-a17561f03d25",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x193bd811de8
						},
						"e-223": {
							id: "e-223",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_OUT",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-60",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-222"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "67080a3cfa37aa26a574328e|8855542a-5bff-ff6a-d844-a17561f03d25",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|8855542a-5bff-ff6a-d844-a17561f03d25",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x193bd811de8
						},
						"e-228": {
							id: "e-228",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_OVER",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-44",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-229"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|967fa52b-fb83-905f-2892-31401d61af09",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|967fa52b-fb83-905f-2892-31401d61af09",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x194fb33b0d4
						},
						"e-229": {
							id: "e-229",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_OUT",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-45",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-228"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|967fa52b-fb83-905f-2892-31401d61af09",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|967fa52b-fb83-905f-2892-31401d61af09",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x194fb33b0d4
						},
						"e-231": {
							id: "e-231",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_SECOND_CLICK",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-47",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-230"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|967fa52b-fb83-905f-2892-31401d61af09",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|967fa52b-fb83-905f-2892-31401d61af09",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x194fb33b0d4
						},
						"e-232": {
							id: "e-232",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_CLICK",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-22",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-233"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|967fa52b-fb83-905f-2892-31401d61af09",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|967fa52b-fb83-905f-2892-31401d61af09",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x194fb33b0d4
						},
						"e-234": {
							id: "e-234",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_MOVE",
							action: {
								id: "",
								actionTypeId: "GENERAL_CONTINUOUS_ACTION",
								config: {
									actionListId: "a-26",
									affectedElements: {},
									duration: 0
								}
							},
							mediaQueries: ["main"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|967fa52b-fb83-905f-2892-31401d61af12",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|967fa52b-fb83-905f-2892-31401d61af12",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: [{
								continuousParameterGroupId: "a-26-p",
								selectedAxis: "X_AXIS",
								basedOn: "ELEMENT",
								reverse: !1,
								smoothing: 50,
								restingState: 50
							}, {
								continuousParameterGroupId: "a-26-p-2",
								selectedAxis: "Y_AXIS",
								basedOn: "ELEMENT",
								reverse: !1,
								smoothing: 50,
								restingState: 50
							}],
							createdOn: 0x194fb33b0d4
						},
						"e-235": {
							id: "e-235",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_CLICK",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-23",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-236"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|967fa52b-fb83-905f-2892-31401d61af17",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|967fa52b-fb83-905f-2892-31401d61af17",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x194fb33b0d4
						},
						"e-237": {
							id: "e-237",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_CLICK",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-24",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-238"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|967fa52b-fb83-905f-2892-31401d61af17",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|967fa52b-fb83-905f-2892-31401d61af17",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x194fb33b0d4
						},
						"e-239": {
							id: "e-239",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_CLICK",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-47",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-240"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|967fa52b-fb83-905f-2892-31401d61af17",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|967fa52b-fb83-905f-2892-31401d61af17",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x194fb33b0d4
						},
						"e-241": {
							id: "e-241",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_CLICK",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-23",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-242"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|967fa52b-fb83-905f-2892-31401d61af1b",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|967fa52b-fb83-905f-2892-31401d61af1b",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x194fb33b0d4
						},
						"e-243": {
							id: "e-243",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_CLICK",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-47",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-244"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|967fa52b-fb83-905f-2892-31401d61af1b",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|967fa52b-fb83-905f-2892-31401d61af1b",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x194fb33b0d4
						},
						"e-245": {
							id: "e-245",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_CLICK",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-46",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-246"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|967fa52b-fb83-905f-2892-31401d61af1b",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|967fa52b-fb83-905f-2892-31401d61af1b",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x194fb33b0d4
						},
						"e-247": {
							id: "e-247",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_CLICK",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-23",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-248"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|967fa52b-fb83-905f-2892-31401d61af1f",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|967fa52b-fb83-905f-2892-31401d61af1f",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x194fb33b0d4
						},
						"e-249": {
							id: "e-249",
							name: "",
							animationType: "preset",
							eventTypeId: "MOUSE_CLICK",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-23",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-250"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|967fa52b-fb83-905f-2892-31401d61af23",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|967fa52b-fb83-905f-2892-31401d61af23",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x194fb33b0d4
						},
						"e-253": {
							id: "e-253",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OVER",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-61",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-254"
								}
							},
							mediaQueries: ["main"],
							target: {
								id: "67080a3cfa37aa26a574328e|08982a46-f235-ffaf-f665-5e11322bf223",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|08982a46-f235-ffaf-f665-5e11322bf223",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x193a927a458
						},
						"e-254": {
							id: "e-254",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OUT",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-62",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-253"
								}
							},
							mediaQueries: ["main"],
							target: {
								id: "67080a3cfa37aa26a574328e|08982a46-f235-ffaf-f665-5e11322bf223",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|08982a46-f235-ffaf-f665-5e11322bf223",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x193a927a459
						},
						"e-255": {
							id: "e-255",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OVER",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-61",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-256"
								}
							},
							mediaQueries: ["main"],
							target: {
								id: "67080a3cfa37aa26a574328e|cf2dbd4c-aba6-c8dc-a6ee-becbb6be0125",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|cf2dbd4c-aba6-c8dc-a6ee-becbb6be0125",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x194ff5e46cc
						},
						"e-256": {
							id: "e-256",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OUT",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-62",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-255"
								}
							},
							mediaQueries: ["main"],
							target: {
								id: "67080a3cfa37aa26a574328e|cf2dbd4c-aba6-c8dc-a6ee-becbb6be0125",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|cf2dbd4c-aba6-c8dc-a6ee-becbb6be0125",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x194ff5e46cd
						},
						"e-257": {
							id: "e-257",
							name: "",
							animationType: "preset",
							eventTypeId: "SCROLL_INTO_VIEW",
							action: {
								id: "",
								actionTypeId: "FADE_EFFECT",
								instant: !1,
								config: {
									actionListId: "fadeIn",
									autoStopEventId: "e-258"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "66c25a9b5225e40f63e2efd0|ba41a8ac-5030-cd3a-150b-83cb3a6c06af",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "66c25a9b5225e40f63e2efd0|ba41a8ac-5030-cd3a-150b-83cb3a6c06af",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: 4,
								scrollOffsetUnit: "%",
								delay: 700,
								direction: null,
								effectIn: !0
							},
							createdOn: 0x195044f136a
						},
						"e-259": {
							id: "e-259",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_CLICK",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-77",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-260"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "67080a3cfa37aa26a574328e|6835de5d-efb6-f3b1-fea2-a33ee0dd0e15",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|6835de5d-efb6-f3b1-fea2-a33ee0dd0e15",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x19509abba9c
						},
						"e-261": {
							id: "e-261",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_CLICK",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-77",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-262"
								}
							},
							mediaQueries: ["main", "medium", "small", "tiny"],
							target: {
								id: "67080a3cfa37aa26a574328e|5ae19243-85f1-8cc5-10c0-ba61a8af3480",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|5ae19243-85f1-8cc5-10c0-ba61a8af3480",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x19509acabbe
						},
						"e-265": {
							id: "e-265",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OVER",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-79",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-266"
								}
							},
							mediaQueries: ["main"],
							target: {
								id: "67080a3cfa37aa26a574328e|53a1d139-5f7d-ca4d-d9fa-882c1844071a",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|53a1d139-5f7d-ca4d-d9fa-882c1844071a",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x19509b2344a
						},
						"e-266": {
							id: "e-266",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_OUT",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-80",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-265"
								}
							},
							mediaQueries: ["main"],
							target: {
								id: "67080a3cfa37aa26a574328e|53a1d139-5f7d-ca4d-d9fa-882c1844071a",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							},
							targets: [{
								id: "67080a3cfa37aa26a574328e|53a1d139-5f7d-ca4d-d9fa-882c1844071a",
								appliesTo: "ELEMENT",
								styleBlockIds: []
							}],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x19509b2344b
						},
						"e-267": {
							id: "e-267",
							name: "",
							animationType: "custom",
							eventTypeId: "MOUSE_CLICK",
							action: {
								id: "",
								actionTypeId: "GENERAL_START_ACTION",
								config: {
									delay: 0,
									easing: "",
									duration: 0,
									actionListId: "a-78",
									affectedElements: {},
									playInReverse: !1,
									autoStopEventId: "e-268"
								}
							},
							mediaQueries: ["main", "medium", "small"],
							target: {
								appliesTo: "ELEMENT",
								styleBlockIds: [],
								id: "67080a3cfa37aa26a574328e|53a1d139-5f7d-ca4d-d9fa-882c1844071a"
							},
							targets: [],
							config: {
								loop: !1,
								playInReverse: !1,
								scrollOffsetValue: null,
								scrollOffsetUnit: null,
								delay: null,
								direction: null,
								effectIn: null
							},
							createdOn: 0x19509e4ae09
						}
					},
					actionLists: {
						"a-3": {
							id: "a-3",
							title: "New Mouse Animation",
							continuousParameterGroups: [{
								id: "a-3-p",
								type: "MOUSE_X",
								parameterLabel: "Mouse X",
								continuousActionGroups: [{
									keyframe: 0,
									actionItems: [{
										id: "a-3-n",
										actionTypeId: "TRANSFORM_MOVE",
										config: {
											delay: 0,
											easing: "",
											duration: 500,
											target: {
												useEventTarget: !0,
												id: "66c25a9b5225e40f63e2efd0|5a796393-5f34-8cd7-047e-a70302f01542"
											},
											xValue: -25,
											xUnit: "%",
											yUnit: "PX",
											zUnit: "PX"
										}
									}]
								}, {
									keyframe: 100,
									actionItems: [{
										id: "a-3-n-2",
										actionTypeId: "TRANSFORM_MOVE",
										config: {
											delay: 0,
											easing: "",
											duration: 500,
											target: {
												useEventTarget: !0,
												id: "66c25a9b5225e40f63e2efd0|5a796393-5f34-8cd7-047e-a70302f01542"
											},
											xValue: 25,
											xUnit: "%",
											yUnit: "PX",
											zUnit: "PX"
										}
									}]
								}]
							}, {
								id: "a-3-p-2",
								type: "MOUSE_Y",
								parameterLabel: "Mouse Y",
								continuousActionGroups: [{
									keyframe: 0,
									actionItems: [{
										id: "a-3-n-3",
										actionTypeId: "TRANSFORM_MOVE",
										config: {
											delay: 0,
											easing: "",
											duration: 500,
											target: {
												useEventTarget: !0,
												id: "66c25a9b5225e40f63e2efd0|5a796393-5f34-8cd7-047e-a70302f01542"
											},
											xValue: null,
											yValue: -30,
											xUnit: "%",
											yUnit: "%",
											zUnit: "PX"
										}
									}]
								}, {
									keyframe: 100,
									actionItems: [{
										id: "a-3-n-4",
										actionTypeId: "TRANSFORM_MOVE",
										config: {
											delay: 0,
											easing: "",
											duration: 500,
											target: {
												useEventTarget: !0,
												id: "66c25a9b5225e40f63e2efd0|5a796393-5f34-8cd7-047e-a70302f01542"
											},
											yValue: 30,
											xUnit: "PX",
											yUnit: "%",
											zUnit: "PX"
										}
									}]
								}]
							}],
							createdOn: 0x18fc05f4283
						},
						"a-27": {
							id: "a-27",
							title: "github_in",
							actionItemGroups: [{
								actionItems: [{
									id: "a-27-n",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											id: "66c25a9b5225e40f63e2efd0|2a89dc10-8125-a418-c025-de273c91e519"
										},
										xValue: 1,
										yValue: 1,
										locked: !0
									}
								}]
							}, {
								actionItems: [{
									id: "a-27-n-2",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 0,
										easing: "easeIn",
										duration: 200,
										target: {
											id: "66c25a9b5225e40f63e2efd0|2a89dc10-8125-a418-c025-de273c91e519"
										},
										xValue: 1.1,
										yValue: 1.1,
										locked: !0
									}
								}]
							}],
							useFirstGroupAsInitialState: !0,
							createdOn: 0x1919e0d6911
						},
						"a-28": {
							id: "a-28",
							title: "github_out",
							actionItemGroups: [{
								actionItems: [{
									id: "a-28-n",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											id: "66c25a9b5225e40f63e2efd0|2a89dc10-8125-a418-c025-de273c91e519"
										},
										xValue: 1.1,
										yValue: 1.1,
										locked: !0
									}
								}]
							}, {
								actionItems: [{
									id: "a-28-n-2",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 0,
										easing: "easeOut",
										duration: 200,
										target: {
											id: "66c25a9b5225e40f63e2efd0|2a89dc10-8125-a418-c025-de273c91e519"
										},
										xValue: 1,
										yValue: 1,
										locked: !0
									}
								}]
							}],
							useFirstGroupAsInitialState: !0,
							createdOn: 0x1919e0d6911
						},
						"a-31": {
							id: "a-31",
							title: "card_into-view",
							continuousParameterGroups: [{
								id: "a-31-p",
								type: "SCROLL_PROGRESS",
								parameterLabel: "Scroll",
								continuousActionGroups: [{
									keyframe: 0,
									actionItems: [{
										id: "a-31-n",
										actionTypeId: "TRANSFORM_SCALE",
										config: {
											delay: 0,
											easing: "",
											duration: 500,
											target: {
												useEventTarget: !0,
												id: "66c25a9b5225e40f63e2efd0|c8e4efa1-e476-ee35-18b0-c9a2d30d0866"
											},
											xValue: .75,
											yValue: .75,
											locked: !0
										}
									}]
								}, {
									keyframe: 40,
									actionItems: [{
										id: "a-31-n-2",
										actionTypeId: "TRANSFORM_SCALE",
										config: {
											delay: 0,
											easing: "inQuint",
											duration: 500,
											target: {
												useEventTarget: !0,
												id: "66c25a9b5225e40f63e2efd0|c8e4efa1-e476-ee35-18b0-c9a2d30d0866"
											},
											xValue: 1,
											yValue: 1,
											locked: !0
										}
									}]
								}]
							}],
							createdOn: 0x19297180bcc
						},
						"a-29": {
							id: "a-29",
							title: "Horizontal scroll animation",
							continuousParameterGroups: [{
								id: "a-29-p",
								type: "SCROLL_PROGRESS",
								parameterLabel: "Scroll",
								continuousActionGroups: [{
									keyframe: 0,
									actionItems: [{
										id: "a-29-n",
										actionTypeId: "TRANSFORM_MOVE",
										config: {
											delay: 0,
											easing: "",
											duration: 500,
											target: {},
											xValue: 0,
											xUnit: "vh",
											yUnit: "PX",
											zUnit: "PX"
										}
									}]
								}, {
									keyframe: 100,
									actionItems: [{
										id: "a-29-n-2",
										actionTypeId: "TRANSFORM_MOVE",
										config: {
											delay: 0,
											easing: "",
											duration: 500,
											target: {},
											xValue: -200,
											xUnit: "vh",
											yUnit: "PX",
											zUnit: "PX"
										}
									}]
								}]
							}],
							createdOn: 0x177fa2a27b2
						},
						"a-55": {
							id: "a-55",
							title: "Button - Hover In",
							actionItemGroups: [{
								actionItems: [{
									id: "a-55-n",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".button-block-transition",
											selectorGuids: ["1d9818a2-5eed-8d08-0abc-4d6e2aac397a"]
										},
										yValue: 100,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-55-n-2",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {},
										yValue: 0,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-55-n-3",
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {},
										value: 1,
										unit: ""
									}
								}, {
									id: "a-55-n-4",
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".button-text.button-text-primary",
											selectorGuids: ["1d9818a2-5eed-8d08-0abc-4d6e2aac397c", "1d9818a2-5eed-8d08-0abc-4d6e2aac3980"]
										},
										value: 1,
										unit: ""
									}
								}, {
									id: "a-55-n-5",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".button-text.button-text-primary",
											selectorGuids: ["1d9818a2-5eed-8d08-0abc-4d6e2aac397c", "1d9818a2-5eed-8d08-0abc-4d6e2aac3980"]
										},
										yValue: 0,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-55-n-6",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".button-block-transition",
											selectorGuids: ["1d9818a2-5eed-8d08-0abc-4d6e2aac397a"]
										},
										xValue: .95,
										yValue: .95,
										locked: !0
									}
								}, {
									id: "a-55-n-7",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {},
										yValue: 100,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-55-n-8",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {},
										xValue: .95,
										yValue: .95,
										locked: !0
									}
								}]
							}, {
								actionItems: [{
									id: "a-55-n-9",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 0,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".button-block-transition",
											selectorGuids: ["1d9818a2-5eed-8d08-0abc-4d6e2aac397a"]
										},
										yValue: 0,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-55-n-10",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 0,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".button-text.button-text-primary",
											selectorGuids: ["1d9818a2-5eed-8d08-0abc-4d6e2aac397c", "1d9818a2-5eed-8d08-0abc-4d6e2aac3980"]
										},
										yValue: 100,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-55-n-11",
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 0,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".button-text.button-text-primary",
											selectorGuids: ["1d9818a2-5eed-8d08-0abc-4d6e2aac397c", "1d9818a2-5eed-8d08-0abc-4d6e2aac3980"]
										},
										value: 0,
										unit: ""
									}
								}, {
									id: "a-55-n-12",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 0,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".button-block-transition",
											selectorGuids: ["1d9818a2-5eed-8d08-0abc-4d6e2aac397a"]
										},
										xValue: 1,
										yValue: 1,
										locked: !0
									}
								}, {
									id: "a-55-n-13",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 100,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {},
										yValue: 0,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-55-n-14",
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 100,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {},
										value: 0,
										unit: ""
									}
								}, {
									id: "a-55-n-15",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 100,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {},
										yValue: 100,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-55-n-16",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 100,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {},
										xValue: 1,
										yValue: 1,
										locked: !0
									}
								}]
							}],
							useFirstGroupAsInitialState: !0,
							createdOn: 0x18c3ea18964
						},
						"a-56": {
							id: "a-56",
							title: "Button - Hover Out",
							actionItemGroups: [{
								actionItems: [{
									id: "a-56-n",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 0,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".button-block-transition",
											selectorGuids: ["1d9818a2-5eed-8d08-0abc-4d6e2aac397a"]
										},
										yValue: 100,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-56-n-2",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 0,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".button-text.button-text-primary",
											selectorGuids: ["1d9818a2-5eed-8d08-0abc-4d6e2aac397c", "1d9818a2-5eed-8d08-0abc-4d6e2aac3980"]
										},
										yValue: 0,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-56-n-3",
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 0,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".button-text.button-text-primary",
											selectorGuids: ["1d9818a2-5eed-8d08-0abc-4d6e2aac397c", "1d9818a2-5eed-8d08-0abc-4d6e2aac3980"]
										},
										value: 1,
										unit: ""
									}
								}, {
									id: "a-56-n-4",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 0,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".button-block-transition",
											selectorGuids: ["1d9818a2-5eed-8d08-0abc-4d6e2aac397a"]
										},
										xValue: .9,
										yValue: .9,
										locked: !0
									}
								}, {
									id: "a-56-n-5",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 100,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {},
										yValue: 100,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-56-n-6",
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 100,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {},
										value: 1,
										unit: ""
									}
								}, {
									id: "a-56-n-7",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 100,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {},
										yValue: 0,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-56-n-8",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 100,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {},
										xValue: .9,
										yValue: .9,
										locked: !0
									}
								}]
							}],
							useFirstGroupAsInitialState: !1,
							createdOn: 0x18c3ea18964
						},
						"a-44": {
							id: "a-44",
							title: "Nav Btn Hover On 3",
							actionItemGroups: [{
								actionItems: [{
									id: "a-44-n",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".nav-line-9",
											selectorGuids: ["324e99c5-7eec-b228-c46d-79d2b6afe683"]
										},
										widthValue: 100,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}, {
									id: "a-44-n-2",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".nav-line-8",
											selectorGuids: ["324e99c5-7eec-b228-c46d-79d2b6afe682"]
										},
										widthValue: 0,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}, {
									id: "a-44-n-3",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".nav-line-11",
											selectorGuids: ["324e99c5-7eec-b228-c46d-79d2b6afe687"]
										},
										widthValue: 100,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}, {
									id: "a-44-n-4",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".nav-line-10",
											selectorGuids: ["324e99c5-7eec-b228-c46d-79d2b6afe685"]
										},
										widthValue: 0,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}]
							}, {
								actionItems: [{
									id: "a-44-n-5",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "ease",
										duration: 400,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".nav-line-9",
											selectorGuids: ["324e99c5-7eec-b228-c46d-79d2b6afe683"]
										},
										widthValue: 0,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}, {
									id: "a-44-n-6",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "ease",
										duration: 400,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".nav-line-11",
											selectorGuids: ["324e99c5-7eec-b228-c46d-79d2b6afe687"]
										},
										widthValue: 0,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}, {
									id: "a-44-n-7",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 200,
										easing: "ease",
										duration: 400,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".nav-line-8",
											selectorGuids: ["324e99c5-7eec-b228-c46d-79d2b6afe682"]
										},
										widthValue: 100,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}, {
									id: "a-44-n-8",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 200,
										easing: "ease",
										duration: 400,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".nav-line-10",
											selectorGuids: ["324e99c5-7eec-b228-c46d-79d2b6afe685"]
										},
										widthValue: 100,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}]
							}],
							useFirstGroupAsInitialState: !0,
							createdOn: 0x16def4c3bb3
						},
						"a-45": {
							id: "a-45",
							title: "Nav Btn Hover Off 3",
							actionItemGroups: [{
								actionItems: [{
									id: "a-45-n",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "",
										duration: 10,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".nav-line-8",
											selectorGuids: ["324e99c5-7eec-b228-c46d-79d2b6afe682"]
										},
										widthValue: 0,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}, {
									id: "a-45-n-2",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "",
										duration: 10,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".nav-line-10",
											selectorGuids: ["324e99c5-7eec-b228-c46d-79d2b6afe685"]
										},
										widthValue: 0,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}, {
									id: "a-45-n-3",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "",
										duration: 10,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".nav-line-9",
											selectorGuids: ["324e99c5-7eec-b228-c46d-79d2b6afe683"]
										},
										widthValue: 100,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}, {
									id: "a-45-n-4",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "",
										duration: 10,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".nav-line-11",
											selectorGuids: ["324e99c5-7eec-b228-c46d-79d2b6afe687"]
										},
										widthValue: 100,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}]
							}],
							useFirstGroupAsInitialState: !1,
							createdOn: 0x16def4c3bb3
						},
						"a-47": {
							id: "a-47",
							title: "Nav Btn Click Off 3",
							actionItemGroups: [{
								actionItems: [{
									id: "a-47-n",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "ease",
										duration: 300,
										target: {
											selector: ".x-right",
											selectorGuids: ["176a206b-b951-7dcc-9c5b-91cceb6a7afe"]
										},
										heightValue: 0,
										widthUnit: "PX",
										heightUnit: "%",
										locked: !1
									}
								}, {
									id: "a-47-n-2",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "ease",
										duration: 300,
										target: {
											selector: ".x-left",
											selectorGuids: ["176a206b-b951-7dcc-9c5b-91cceb6a7aff"]
										},
										widthValue: 0,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}, {
									id: "a-47-n-3",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 250,
										easing: "ease",
										duration: 400,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".nav-line-11",
											selectorGuids: ["324e99c5-7eec-b228-c46d-79d2b6afe687"]
										},
										widthValue: 100,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}, {
									id: "a-47-n-4",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 250,
										easing: "ease",
										duration: 400,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".nav-line-9",
											selectorGuids: ["324e99c5-7eec-b228-c46d-79d2b6afe683"]
										},
										widthValue: 100,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}, {
									id: "a-47-n-5",
									actionTypeId: "GENERAL_DISPLAY",
									config: {
										delay: 300,
										easing: "ease",
										duration: 0,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".nav-open",
											selectorGuids: ["176a206b-b951-7dcc-9c5b-91cceb6a7afc"]
										},
										value: "flex"
									}
								}, {
									id: "a-47-n-6",
									actionTypeId: "GENERAL_DISPLAY",
									config: {
										delay: 300,
										easing: "ease",
										duration: 0,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".nav-close",
											selectorGuids: ["176a206b-b951-7dcc-9c5b-91cceb6a7b01"]
										},
										value: "flex"
									}
								}]
							}],
							useFirstGroupAsInitialState: !1,
							createdOn: 0x16def58cf36
						},
						"a-22": {
							id: "a-22",
							title: "Nav Btn Open 2",
							actionItemGroups: [{
								actionItems: [{
									id: "a-22-n",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											selector: ".hover_nav-menu",
											selectorGuids: ["e020c188-a6f3-430e-f032-f40bebd73d94"]
										},
										yValue: -100,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-22-n-2",
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											selector: ".menu-link-wrap-bottom",
											selectorGuids: ["e020c188-a6f3-430e-f032-f40bebd73d97"]
										},
										value: 0,
										unit: ""
									}
								}, {
									id: "a-22-n-3",
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											selector: ".flex-cms",
											selectorGuids: ["e020c188-a6f3-430e-f032-f40bebd73d92"]
										},
										value: 0,
										unit: ""
									}
								}, {
									id: "a-22-n-4",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											selector: ".flex-cms",
											selectorGuids: ["e020c188-a6f3-430e-f032-f40bebd73d92"]
										},
										xValue: 50,
										xUnit: "%",
										yUnit: "PX",
										zUnit: "PX"
									}
								}]
							}, {
								actionItems: [{
									id: "a-22-n-5",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 0,
										easing: "inOutExpo",
										duration: 1e3,
										target: {
											selector: ".hover_nav-menu",
											selectorGuids: ["e020c188-a6f3-430e-f032-f40bebd73d94"]
										},
										yValue: 0,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-22-n-6",
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 0,
										easing: "inOutExpo",
										duration: 2e3,
										target: {
											selector: ".flex-cms",
											selectorGuids: ["e020c188-a6f3-430e-f032-f40bebd73d92"]
										},
										value: 1,
										unit: ""
									}
								}, {
									id: "a-22-n-7",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 0,
										easing: "inOutExpo",
										duration: 1500,
										target: {
											selector: ".flex-cms",
											selectorGuids: ["e020c188-a6f3-430e-f032-f40bebd73d92"]
										},
										xValue: 0,
										xUnit: "%",
										yUnit: "PX",
										zUnit: "PX"
									}
								}, {
									id: "a-22-n-8",
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 500,
										easing: "inOutExpo",
										duration: 1500,
										target: {
											selector: ".menu-link-wrap-bottom",
											selectorGuids: ["e020c188-a6f3-430e-f032-f40bebd73d97"]
										},
										value: 1,
										unit: ""
									}
								}]
							}],
							useFirstGroupAsInitialState: !0,
							createdOn: 0x16def58cf36
						},
						"a-26": {
							id: "a-26",
							title: "Horizontal Parallax Hover 3",
							continuousParameterGroups: [{
								id: "a-26-p",
								type: "MOUSE_X",
								parameterLabel: "Mouse X",
								continuousActionGroups: [{
									keyframe: 0,
									actionItems: [{
										id: "a-26-n",
										actionTypeId: "TRANSFORM_MOVE",
										config: {
											delay: 0,
											easing: "",
											duration: 500,
											target: {
												id: "66c25a9b5225e40f63e2efd0|9f8e7b5a-deb1-f9aa-4b47-f9a249cd77bf"
											},
											xValue: 20,
											xUnit: "%",
											yUnit: "PX",
											zUnit: "PX"
										}
									}, {
										id: "a-26-n-3",
										actionTypeId: "TRANSFORM_MOVE",
										config: {
											delay: 0,
											easing: "",
											duration: 500,
											target: {
												useEventTarget: "CHILDREN",
												selector: ".flex-cms",
												selectorGuids: ["e020c188-a6f3-430e-f032-f40bebd73d92"]
											},
											xValue: 20,
											xUnit: "%",
											yUnit: "PX",
											zUnit: "PX"
										}
									}]
								}, {
									keyframe: 100,
									actionItems: [{
										id: "a-26-n-2",
										actionTypeId: "TRANSFORM_MOVE",
										config: {
											delay: 0,
											easing: "",
											duration: 500,
											target: {
												id: "66c25a9b5225e40f63e2efd0|9f8e7b5a-deb1-f9aa-4b47-f9a249cd77bf"
											},
											xValue: -60,
											xUnit: "%",
											yUnit: "PX",
											zUnit: "PX"
										}
									}, {
										id: "a-26-n-4",
										actionTypeId: "TRANSFORM_MOVE",
										config: {
											delay: 0,
											easing: "",
											duration: 500,
											target: {
												useEventTarget: "CHILDREN",
												selector: ".flex-cms",
												selectorGuids: ["e020c188-a6f3-430e-f032-f40bebd73d92"]
											},
											xValue: -60,
											xUnit: "%",
											yUnit: "PX",
											zUnit: "PX"
										}
									}]
								}]
							}, {
								id: "a-26-p-2",
								type: "MOUSE_Y",
								parameterLabel: "Mouse Y",
								continuousActionGroups: []
							}],
							createdOn: 0x1665732a070
						},
						"a-24": {
							id: "a-24",
							title: "Nav Btn Click On 2",
							actionItemGroups: [{
								actionItems: [{
									id: "a-24-n",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											selector: ".x-right",
											selectorGuids: ["176a206b-b951-7dcc-9c5b-91cceb6a7afe"]
										},
										heightValue: 0,
										widthUnit: "PX",
										heightUnit: "%",
										locked: !1
									}
								}, {
									id: "a-24-n-2",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											selector: ".x-left",
											selectorGuids: ["176a206b-b951-7dcc-9c5b-91cceb6a7aff"]
										},
										widthValue: 0,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}]
							}, {
								actionItems: [{
									id: "a-24-n-3",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "ease",
										duration: 300,
										target: {},
										widthValue: 0,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}, {
									id: "a-24-n-4",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "ease",
										duration: 300,
										target: {},
										widthValue: 0,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}, {
									id: "a-24-n-5",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "ease",
										duration: 300,
										target: {},
										widthValue: 0,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}, {
									id: "a-24-n-6",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "ease",
										duration: 300,
										target: {},
										widthValue: 0,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}, {
									id: "a-24-n-7",
									actionTypeId: "GENERAL_DISPLAY",
									config: {
										delay: 0,
										easing: "",
										duration: 0,
										target: {
											useEventTarget: "SIBLINGS",
											selector: ".nav-close",
											selectorGuids: ["176a206b-b951-7dcc-9c5b-91cceb6a7b01"]
										},
										value: "flex"
									}
								}, {
									id: "a-24-n-8",
									actionTypeId: "GENERAL_DISPLAY",
									config: {
										delay: 300,
										easing: "",
										duration: 0,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".nav-open",
											selectorGuids: ["176a206b-b951-7dcc-9c5b-91cceb6a7afc"]
										},
										value: "none"
									}
								}]
							}, {
								actionItems: [{
									id: "a-24-n-9",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "ease",
										duration: 300,
										target: {
											selector: ".x-right",
											selectorGuids: ["176a206b-b951-7dcc-9c5b-91cceb6a7afe"]
										},
										heightValue: 100,
										widthUnit: "PX",
										heightUnit: "%",
										locked: !1
									}
								}, {
									id: "a-24-n-10",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "ease",
										duration: 300,
										target: {
											selector: ".x-left",
											selectorGuids: ["176a206b-b951-7dcc-9c5b-91cceb6a7aff"]
										},
										widthValue: 100,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}]
							}],
							useFirstGroupAsInitialState: !0,
							createdOn: 0x16def58cf36
						},
						"a-23": {
							id: "a-23",
							title: "Nav Btn Close 2",
							actionItemGroups: [{
								actionItems: [{
									id: "a-23-n",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 0,
										easing: "inOutExpo",
										duration: 800,
										target: {
											selector: ".flex-cms",
											selectorGuids: ["e020c188-a6f3-430e-f032-f40bebd73d92"]
										},
										xValue: 50,
										xUnit: "%",
										yUnit: "PX",
										zUnit: "PX"
									}
								}, {
									id: "a-23-n-2",
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 0,
										easing: "inOutExpo",
										duration: 500,
										target: {
											selector: ".flex-cms",
											selectorGuids: ["e020c188-a6f3-430e-f032-f40bebd73d92"]
										},
										value: 0,
										unit: ""
									}
								}, {
									id: "a-23-n-3",
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 200,
										easing: "inOutExpo",
										duration: 500,
										target: {
											selector: ".menu-link-wrap-bottom",
											selectorGuids: ["e020c188-a6f3-430e-f032-f40bebd73d97"]
										},
										value: 0,
										unit: ""
									}
								}, {
									id: "a-23-n-4",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 500,
										easing: "inOutExpo",
										duration: 500,
										target: {
											selector: ".hover_nav-menu",
											selectorGuids: ["e020c188-a6f3-430e-f032-f40bebd73d94"]
										},
										yValue: -100,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-23-n-7",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 500,
										easing: "inOutQuart",
										duration: 500,
										target: {
											selector: ".nav_btn_wrapper",
											selectorGuids: ["176a206b-b951-7dcc-9c5b-91cceb6a7afa"]
										},
										xValue: 0,
										xUnit: "px",
										yUnit: "PX",
										zUnit: "PX"
									}
								}, {
									id: "a-23-n-8",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 500,
										easing: "inOutQuart",
										duration: 500,
										target: {
											selector: ".nav_btn_wrapper",
											selectorGuids: ["176a206b-b951-7dcc-9c5b-91cceb6a7afa"]
										},
										xValue: 1,
										yValue: 1,
										locked: !0
									}
								}]
							}],
							useFirstGroupAsInitialState: !1,
							createdOn: 0x16def58cf36
						},
						"a-46": {
							id: "a-46",
							title: "Nav Btn Click On 3",
							actionItemGroups: [{
								actionItems: [{
									id: "a-46-n",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											selector: ".x-right",
											selectorGuids: ["176a206b-b951-7dcc-9c5b-91cceb6a7afe"]
										},
										heightValue: 0,
										widthUnit: "PX",
										heightUnit: "%",
										locked: !1
									}
								}, {
									id: "a-46-n-2",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											selector: ".x-left",
											selectorGuids: ["176a206b-b951-7dcc-9c5b-91cceb6a7aff"]
										},
										widthValue: 0,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}]
							}, {
								actionItems: [{
									id: "a-46-n-3",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "ease",
										duration: 300,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".nav-line-10",
											selectorGuids: ["324e99c5-7eec-b228-c46d-79d2b6afe685"]
										},
										widthValue: 0,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}, {
									id: "a-46-n-4",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "ease",
										duration: 300,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".nav-line-11",
											selectorGuids: ["324e99c5-7eec-b228-c46d-79d2b6afe687"]
										},
										widthValue: 0,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}, {
									id: "a-46-n-5",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "ease",
										duration: 300,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".nav-line-9",
											selectorGuids: ["324e99c5-7eec-b228-c46d-79d2b6afe683"]
										},
										widthValue: 0,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}, {
									id: "a-46-n-6",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "ease",
										duration: 300,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".nav-line-8",
											selectorGuids: ["324e99c5-7eec-b228-c46d-79d2b6afe682"]
										},
										widthValue: 0,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}, {
									id: "a-46-n-7",
									actionTypeId: "GENERAL_DISPLAY",
									config: {
										delay: 0,
										easing: "",
										duration: 0,
										target: {
											useEventTarget: "SIBLINGS",
											selector: ".nav-close",
											selectorGuids: ["176a206b-b951-7dcc-9c5b-91cceb6a7b01"]
										},
										value: "flex"
									}
								}, {
									id: "a-46-n-8",
									actionTypeId: "GENERAL_DISPLAY",
									config: {
										delay: 300,
										easing: "",
										duration: 0,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".nav-open",
											selectorGuids: ["176a206b-b951-7dcc-9c5b-91cceb6a7afc"]
										},
										value: "none"
									}
								}]
							}, {
								actionItems: [{
									id: "a-46-n-9",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "ease",
										duration: 300,
										target: {
											selector: ".x-right",
											selectorGuids: ["176a206b-b951-7dcc-9c5b-91cceb6a7afe"]
										},
										heightValue: 100,
										widthUnit: "PX",
										heightUnit: "%",
										locked: !1
									}
								}, {
									id: "a-46-n-10",
									actionTypeId: "STYLE_SIZE",
									config: {
										delay: 0,
										easing: "ease",
										duration: 300,
										target: {
											selector: ".x-left",
											selectorGuids: ["176a206b-b951-7dcc-9c5b-91cceb6a7aff"]
										},
										widthValue: 100,
										widthUnit: "%",
										heightUnit: "PX",
										locked: !1
									}
								}]
							}],
							useFirstGroupAsInitialState: !0,
							createdOn: 0x16def58cf36
						},
						"a-59": {
							id: "a-59",
							title: "link_hover-in",
							actionItemGroups: [{
								actionItems: [{
									id: "a-59-n",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											useEventTarget: "PARENT",
											selector: ".social_link",
											selectorGuids: ["ba485193-aa13-fbff-73ae-1b761a81c835"]
										},
										xValue: 1,
										yValue: 1,
										locked: !0
									}
								}]
							}, {
								actionItems: [{
									id: "a-59-n-2",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 0,
										easing: "inOutQuart",
										duration: 200,
										target: {
											useEventTarget: "PARENT",
											selector: ".social_link",
											selectorGuids: ["ba485193-aa13-fbff-73ae-1b761a81c835"]
										},
										xValue: 1.1,
										yValue: 1.1,
										locked: !0
									}
								}]
							}],
							useFirstGroupAsInitialState: !0,
							createdOn: 0x192d7c32431
						},
						"a-60": {
							id: "a-60",
							title: "link_hover-out",
							actionItemGroups: [{
								actionItems: [{
									id: "a-60-n",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 0,
										easing: "inOutQuart",
										duration: 200,
										target: {
											useEventTarget: "PARENT",
											selector: ".social_link",
											selectorGuids: ["ba485193-aa13-fbff-73ae-1b761a81c835"]
										},
										xValue: 1.1,
										yValue: 1.1,
										locked: !0
									}
								}]
							}, {
								actionItems: [{
									id: "a-60-n-2",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 0,
										easing: "inOutQuart",
										duration: 200,
										target: {
											useEventTarget: "PARENT",
											selector: ".social_link",
											selectorGuids: ["ba485193-aa13-fbff-73ae-1b761a81c835"]
										},
										xValue: 1,
										yValue: 1,
										locked: !0
									}
								}]
							}],
							useFirstGroupAsInitialState: !1,
							createdOn: 0x192d7c4e8bb
						},
						"a-61": {
							id: "a-61",
							title: "card2_hover-in",
							actionItemGroups: [{
								actionItems: [{
									id: "a-61-n",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											useEventTarget: "PARENT",
											selector: ".card-wrapper",
											selectorGuids: ["ca81b918-71d8-8900-475d-577f626122e7"]
										},
										xValue: 1,
										yValue: 1,
										locked: !0
									}
								}]
							}, {
								actionItems: [{
									id: "a-61-n-2",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 0,
										easing: "inOutQuart",
										duration: 300,
										target: {
											useEventTarget: "PARENT",
											selector: ".card-wrapper",
											selectorGuids: ["ca81b918-71d8-8900-475d-577f626122e7"]
										},
										xValue: 1.04,
										yValue: 1.04,
										locked: !0
									}
								}]
							}],
							useFirstGroupAsInitialState: !0,
							createdOn: 0x192eccf5eeb
						},
						"a-62": {
							id: "a-62",
							title: "card2_hover-out",
							actionItemGroups: [{
								actionItems: [{
									id: "a-62-n-2",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 0,
										easing: "",
										duration: 0,
										target: {
											useEventTarget: "PARENT",
											selector: ".card-wrapper",
											selectorGuids: ["ca81b918-71d8-8900-475d-577f626122e7"]
										},
										xValue: 1.04,
										yValue: 1.04,
										locked: !0
									}
								}]
							}, {
								actionItems: [{
									id: "a-62-n-3",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 0,
										easing: "inOutQuart",
										duration: 300,
										target: {
											useEventTarget: "PARENT",
											selector: ".card-wrapper",
											selectorGuids: ["ca81b918-71d8-8900-475d-577f626122e7"]
										},
										xValue: 1,
										yValue: 1,
										locked: !0
									}
								}]
							}],
							useFirstGroupAsInitialState: !1,
							createdOn: 0x192ecd0cdc8
						},
						"a-67": {
							id: "a-67",
							title: "Horizontal scroll animation 3",
							continuousParameterGroups: [{
								id: "a-67-p",
								type: "SCROLL_PROGRESS",
								parameterLabel: "Scroll",
								continuousActionGroups: [{
									keyframe: 10,
									actionItems: [{
										id: "a-67-n",
										actionTypeId: "TRANSFORM_MOVE",
										config: {
											delay: 0,
											easing: "",
											duration: 500,
											target: {
												useEventTarget: "CHILDREN",
												selector: ".frame",
												selectorGuids: ["c076a9fa-7470-0c52-a4f6-543c50649d69"]
											},
											xValue: 0,
											xUnit: "%",
											yUnit: "PX",
											zUnit: "PX"
										}
									}]
								}, {
									keyframe: 100,
									actionItems: [{
										id: "a-67-n-2",
										actionTypeId: "TRANSFORM_MOVE",
										config: {
											delay: 0,
											easing: "",
											duration: 500,
											target: {
												useEventTarget: "CHILDREN",
												selector: ".frame",
												selectorGuids: ["c076a9fa-7470-0c52-a4f6-543c50649d69"]
											},
											xValue: -300,
											xUnit: "%",
											yUnit: "PX",
											zUnit: "PX"
										}
									}]
								}]
							}],
							createdOn: 0x177fa2a27b2
						},
						"a-68": {
							id: "a-68",
							title: "Button - Hover In 2",
							actionItemGroups: [{
								actionItems: [{
									id: "a-68-n",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".button-block-transition",
											selectorGuids: ["1d9818a2-5eed-8d08-0abc-4d6e2aac397a"]
										},
										yValue: 100,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-68-n-2",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {},
										yValue: 0,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-68-n-3",
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {},
										value: 1,
										unit: ""
									}
								}, {
									id: "a-68-n-4",
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".button-text-3.button-text-primary",
											selectorGuids: ["c076a9fa-7470-0c52-a4f6-543c50649d6b", "c076a9fa-7470-0c52-a4f6-543c50649d6d"]
										},
										value: 1,
										unit: ""
									}
								}, {
									id: "a-68-n-5",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".button-text-3.button-text-primary",
											selectorGuids: ["c076a9fa-7470-0c52-a4f6-543c50649d6b", "c076a9fa-7470-0c52-a4f6-543c50649d6d"]
										},
										yValue: 0,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-68-n-6",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".button-block-transition",
											selectorGuids: ["1d9818a2-5eed-8d08-0abc-4d6e2aac397a"]
										},
										xValue: .95,
										yValue: .95,
										locked: !0
									}
								}, {
									id: "a-68-n-7",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {},
										yValue: 100,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-68-n-8",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {},
										xValue: .95,
										yValue: .95,
										locked: !0
									}
								}]
							}, {
								actionItems: [{
									id: "a-68-n-9",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 0,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".button-block-transition",
											selectorGuids: ["1d9818a2-5eed-8d08-0abc-4d6e2aac397a"]
										},
										yValue: 0,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-68-n-10",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 0,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".button-text-3.button-text-primary",
											selectorGuids: ["c076a9fa-7470-0c52-a4f6-543c50649d6b", "c076a9fa-7470-0c52-a4f6-543c50649d6d"]
										},
										yValue: 100,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-68-n-11",
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 0,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".button-text-3.button-text-primary",
											selectorGuids: ["c076a9fa-7470-0c52-a4f6-543c50649d6b", "c076a9fa-7470-0c52-a4f6-543c50649d6d"]
										},
										value: 0,
										unit: ""
									}
								}, {
									id: "a-68-n-12",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 0,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".button-block-transition",
											selectorGuids: ["1d9818a2-5eed-8d08-0abc-4d6e2aac397a"]
										},
										xValue: 1,
										yValue: 1,
										locked: !0
									}
								}, {
									id: "a-68-n-13",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 100,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {},
										yValue: 0,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-68-n-14",
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 100,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {},
										value: 0,
										unit: ""
									}
								}, {
									id: "a-68-n-15",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 100,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {},
										yValue: 100,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-68-n-16",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 100,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {},
										xValue: 1,
										yValue: 1,
										locked: !0
									}
								}]
							}],
							useFirstGroupAsInitialState: !0,
							createdOn: 0x18c3ea18964
						},
						"a-58": {
							id: "a-58",
							title: "img_hover-out",
							actionItemGroups: [{
								actionItems: [{
									id: "a-58-n-2",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 0,
										easing: "outQuad",
										duration: 200,
										target: {
											useEventTarget: "PARENT",
											selector: ".card_container-bento.image",
											selectorGuids: ["8a4eb5a2-5df2-90c6-0859-36011275193b", "cf23577b-b5b4-d0a6-7d4a-98af5c355e10"]
										},
										xValue: 1,
										yValue: 1,
										locked: !0
									}
								}]
							}],
							useFirstGroupAsInitialState: !1,
							createdOn: 0x192d59659c4
						},
						"a-57": {
							id: "a-57",
							title: "img_hover-in",
							actionItemGroups: [{
								actionItems: [{
									id: "a-57-n",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 0,
										easing: "",
										duration: 300,
										target: {
											useEventTarget: "PARENT",
											selector: ".card_container-bento.image",
											selectorGuids: ["8a4eb5a2-5df2-90c6-0859-36011275193b", "cf23577b-b5b4-d0a6-7d4a-98af5c355e10"]
										},
										xValue: 1,
										yValue: 1,
										locked: !0
									}
								}]
							}, {
								actionItems: [{
									id: "a-57-n-2",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 0,
										easing: "outQuad",
										duration: 200,
										target: {
											useEventTarget: "PARENT",
											selector: ".card_container-bento.image",
											selectorGuids: ["8a4eb5a2-5df2-90c6-0859-36011275193b", "cf23577b-b5b4-d0a6-7d4a-98af5c355e10"]
										},
										xValue: 1.03,
										yValue: 1.03,
										locked: !0
									}
								}]
							}],
							useFirstGroupAsInitialState: !0,
							createdOn: 0x192d594b040
						},
						"a-69": {
							id: "a-69",
							title: "Button - Hover Out 2",
							actionItemGroups: [{
								actionItems: [{
									id: "a-69-n",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 0,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".button-block-transition",
											selectorGuids: ["1d9818a2-5eed-8d08-0abc-4d6e2aac397a"]
										},
										yValue: 100,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-69-n-2",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 0,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".button-text-3.button-text-primary",
											selectorGuids: ["c076a9fa-7470-0c52-a4f6-543c50649d6b", "c076a9fa-7470-0c52-a4f6-543c50649d6d"]
										},
										yValue: 0,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-69-n-3",
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 0,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".button-text-3.button-text-primary",
											selectorGuids: ["c076a9fa-7470-0c52-a4f6-543c50649d6b", "c076a9fa-7470-0c52-a4f6-543c50649d6d"]
										},
										value: 1,
										unit: ""
									}
								}, {
									id: "a-69-n-4",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 0,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".button-block-transition",
											selectorGuids: ["1d9818a2-5eed-8d08-0abc-4d6e2aac397a"]
										},
										xValue: .9,
										yValue: .9,
										locked: !0
									}
								}, {
									id: "a-69-n-5",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 100,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {},
										yValue: 100,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-69-n-6",
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 100,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {},
										value: 1,
										unit: ""
									}
								}, {
									id: "a-69-n-7",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 100,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {},
										yValue: 0,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-69-n-8",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 100,
										easing: [.556, -.04, .427, .995],
										duration: 400,
										target: {},
										xValue: .9,
										yValue: .9,
										locked: !0
									}
								}]
							}],
							useFirstGroupAsInitialState: !1,
							createdOn: 0x18c3ea18964
						},
						"a-70": {
							id: "a-70",
							title: "02/ link-02-hover-in",
							actionItemGroups: [{
								actionItems: [{
									id: "a-70-n",
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".link-text.is-02.is-hidden",
											selectorGuids: ["dbc6233c-86ba-651d-d54f-ee431484bdd0", "dbc6233c-86ba-651d-d54f-ee431484bdd2", "dbc6233c-86ba-651d-d54f-ee431484bdd3"]
										},
										value: 0,
										unit: ""
									}
								}, {
									id: "a-70-n-2",
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".link-02_underline",
											selectorGuids: ["dbc6233c-86ba-651d-d54f-ee431484bdd1"]
										},
										value: 0,
										unit: ""
									}
								}]
							}, {
								actionItems: [{
									id: "a-70-n-3",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 0,
										easing: [.165, .84, .44, 1],
										duration: 600,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".link-text.is-02",
											selectorGuids: ["dbc6233c-86ba-651d-d54f-ee431484bdd0", "dbc6233c-86ba-651d-d54f-ee431484bdd2"]
										},
										yValue: -100,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-70-n-4",
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 0,
										easing: [.165, .84, .44, 1],
										duration: 600,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".link-text.is-02",
											selectorGuids: ["dbc6233c-86ba-651d-d54f-ee431484bdd0", "dbc6233c-86ba-651d-d54f-ee431484bdd2"]
										},
										value: 0,
										unit: ""
									}
								}, {
									id: "a-70-n-5",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 150,
										easing: [.165, .84, .44, 1],
										duration: 580,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".link-text.is-02.is-hidden",
											selectorGuids: ["dbc6233c-86ba-651d-d54f-ee431484bdd0", "dbc6233c-86ba-651d-d54f-ee431484bdd2", "dbc6233c-86ba-651d-d54f-ee431484bdd3"]
										},
										yValue: -100,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-70-n-6",
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 150,
										easing: [.165, .84, .44, 1],
										duration: 600,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".link-text.is-02.is-hidden",
											selectorGuids: ["dbc6233c-86ba-651d-d54f-ee431484bdd0", "dbc6233c-86ba-651d-d54f-ee431484bdd2", "dbc6233c-86ba-651d-d54f-ee431484bdd3"]
										},
										value: 1,
										unit: ""
									}
								}, {
									id: "a-70-n-7",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 150,
										easing: [.165, .84, .44, 1],
										duration: 600,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".link-02_underline",
											selectorGuids: ["dbc6233c-86ba-651d-d54f-ee431484bdd1"]
										},
										yValue: 10,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-70-n-8",
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 250,
										easing: [.165, .84, .44, 1],
										duration: 600,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".link-02_underline",
											selectorGuids: ["dbc6233c-86ba-651d-d54f-ee431484bdd1"]
										},
										value: 1,
										unit: ""
									}
								}]
							}],
							useFirstGroupAsInitialState: !0,
							createdOn: 0x18447f529b3
						},
						"a-71": {
							id: "a-71",
							title: "02/ link-02-hover-out",
							actionItemGroups: [{
								actionItems: [{
									id: "a-71-n",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 0,
										easing: [.165, .84, .44, 1],
										duration: 600,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".link-text.is-02",
											selectorGuids: ["dbc6233c-86ba-651d-d54f-ee431484bdd0", "dbc6233c-86ba-651d-d54f-ee431484bdd2"]
										},
										yValue: 0,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-71-n-2",
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 0,
										easing: [.165, .84, .44, 1],
										duration: 600,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".link-text.is-02",
											selectorGuids: ["dbc6233c-86ba-651d-d54f-ee431484bdd0", "dbc6233c-86ba-651d-d54f-ee431484bdd2"]
										},
										value: 1,
										unit: ""
									}
								}, {
									id: "a-71-n-3",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 0,
										easing: [.165, .84, .44, 1],
										duration: 600,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".link-text.is-02.is-hidden",
											selectorGuids: ["dbc6233c-86ba-651d-d54f-ee431484bdd0", "dbc6233c-86ba-651d-d54f-ee431484bdd2", "dbc6233c-86ba-651d-d54f-ee431484bdd3"]
										},
										yValue: 0,
										xUnit: "PX",
										yUnit: "%",
										zUnit: "PX"
									}
								}, {
									id: "a-71-n-4",
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 0,
										easing: [.165, .84, .44, 1],
										duration: 600,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".link-text.is-02.is-hidden",
											selectorGuids: ["dbc6233c-86ba-651d-d54f-ee431484bdd0", "dbc6233c-86ba-651d-d54f-ee431484bdd2", "dbc6233c-86ba-651d-d54f-ee431484bdd3"]
										},
										value: 0,
										unit: ""
									}
								}, {
									id: "a-71-n-5",
									actionTypeId: "TRANSFORM_MOVE",
									config: {
										delay: 0,
										easing: [.165, .84, .44, 1],
										duration: 600,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".link-02_underline",
											selectorGuids: ["dbc6233c-86ba-651d-d54f-ee431484bdd1"]
										},
										yValue: .35,
										xUnit: "PX",
										yUnit: "rem",
										zUnit: "PX"
									}
								}, {
									id: "a-71-n-6",
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 0,
										easing: [.165, .84, .44, 1],
										duration: 600,
										target: {
											useEventTarget: "CHILDREN",
											selector: ".link-02_underline",
											selectorGuids: ["dbc6233c-86ba-651d-d54f-ee431484bdd1"]
										},
										value: 0,
										unit: ""
									}
								}]
							}],
							useFirstGroupAsInitialState: !1,
							createdOn: 0x18447f529b3
						},
						"a-77": {
							id: "a-77",
							title: "modal-close",
							actionItemGroups: [{
								actionItems: [{
									id: "a-77-n",
									actionTypeId: "GENERAL_DISPLAY",
									config: {
										delay: 0,
										easing: "",
										duration: 0,
										target: {
											useEventTarget: "PARENT",
											selector: ".modal-wrapper",
											selectorGuids: ["c01662a7-f60b-6c90-aeb1-5fbe1e3dd056"]
										},
										value: "none"
									}
								}]
							}],
							useFirstGroupAsInitialState: !1,
							createdOn: 0x19509abd22c
						},
						"a-79": {
							id: "a-79",
							title: "polaroid-in",
							actionItemGroups: [{
								actionItems: [{
									id: "a-79-n",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 0,
										easing: "",
										duration: 500,
										target: {
											useEventTarget: !0,
											id: "67080a3cfa37aa26a574328e|53a1d139-5f7d-ca4d-d9fa-882c1844071a"
										},
										xValue: 1,
										yValue: 1,
										locked: !0
									}
								}]
							}, {
								actionItems: [{
									id: "a-79-n-2",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 0,
										easing: "outQuart",
										duration: 200,
										target: {
											useEventTarget: !0,
											id: "67080a3cfa37aa26a574328e|53a1d139-5f7d-ca4d-d9fa-882c1844071a"
										},
										xValue: 1.05,
										yValue: 1.05,
										locked: !0
									}
								}]
							}],
							useFirstGroupAsInitialState: !0,
							createdOn: 0x19509b2d61d
						},
						"a-80": {
							id: "a-80",
							title: "polaroid-out",
							actionItemGroups: [{
								actionItems: [{
									id: "a-80-n",
									actionTypeId: "TRANSFORM_SCALE",
									config: {
										delay: 0,
										easing: "outQuad",
										duration: 200,
										target: {
											useEventTarget: !0,
											id: "67080a3cfa37aa26a574328e|53a1d139-5f7d-ca4d-d9fa-882c1844071a"
										},
										xValue: 1,
										yValue: 1,
										locked: !0
									}
								}]
							}],
							useFirstGroupAsInitialState: !1,
							createdOn: 0x19509b4411b
						},
						"a-78": {
							id: "a-78",
							title: "modal-open",
							actionItemGroups: [{
								actionItems: [{
									id: "a-78-n",
									actionTypeId: "GENERAL_DISPLAY",
									config: {
										delay: 0,
										easing: "",
										duration: 0,
										target: {
											selector: ".modal-wrapper",
											selectorGuids: ["c01662a7-f60b-6c90-aeb1-5fbe1e3dd056"]
										},
										value: "flex"
									}
								}]
							}],
							useFirstGroupAsInitialState: !1,
							createdOn: 0x19509ae6268
						},
						fadeIn: {
							id: "fadeIn",
							useFirstGroupAsInitialState: !0,
							actionItemGroups: [{
								actionItems: [{
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 0,
										duration: 0,
										target: {
											id: "N/A",
											appliesTo: "TRIGGER_ELEMENT",
											useEventTarget: !0
										},
										value: 0
									}
								}]
							}, {
								actionItems: [{
									actionTypeId: "STYLE_OPACITY",
									config: {
										delay: 0,
										easing: "outQuart",
										duration: 1e3,
										target: {
											id: "N/A",
											appliesTo: "TRIGGER_ELEMENT",
											useEventTarget: !0
										},
										value: 1
									}
								}]
							}]
						}
					},
					site: {
						mediaQueries: [{
							key: "main",
							min: 992,
							max: 1e4
						}, {
							key: "medium",
							min: 768,
							max: 991
						}, {
							key: "small",
							min: 480,
							max: 767
						}, {
							key: "tiny",
							min: 0,
							max: 479
						}]
					}
				})
			}
		},
		__webpack_module_cache__ = {};

	function __webpack_require__(t) {
		var e = __webpack_module_cache__[t];
		if (void 0 !== e) return e.exports;
		var n = __webpack_module_cache__[t] = {
			id: t,
			loaded: !1,
			exports: {}
		};
		return __webpack_modules__[t].call(n.exports, n, n.exports, __webpack_require__), n.loaded = !0, n.exports
	}(() => {
		__webpack_require__.d = function(t, e) {
			for (var n in e) __webpack_require__.o(e, n) && !__webpack_require__.o(t, n) && Object.defineProperty(t, n, {
				enumerable: !0,
				get: e[n]
			})
		}
	})(), (() => {
		__webpack_require__.hmd = function(t) {
			return !(t = Object.create(t)).children && (t.children = []), Object.defineProperty(t, "exports", {
				enumerable: !0,
				set: function() {
					throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + t.id)
				}
			}), t
		}
	})(), (() => {
		__webpack_require__.g = function() {
			if ("object" == typeof globalThis) return globalThis;
			try {
				return this || Function("return this")()
			} catch (t) {
				if ("object" == typeof window) return window
			}
		}()
	})(), (() => {
		__webpack_require__.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}
	})(), (() => {
		__webpack_require__.r = function(t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(t, "__esModule", {
				value: !0
			})
		}
	})(), (() => {
		__webpack_require__.nmd = function(t) {
			return t.paths = [], !t.children && (t.children = []), t
		}
	})(), (() => {
		__webpack_require__.rv = function() {
			return "1.1.8"
		}
	})(), (() => {
		__webpack_require__.ruid = "bundler=rspack@1.1.8"
	})();
	var __webpack_exports__ = {};
	__webpack_require__(9461), __webpack_require__(7624), __webpack_require__(286), __webpack_require__(8334), __webpack_require__(2338), __webpack_require__(3695), __webpack_require__(322), __webpack_require__(941), __webpack_require__(5134), __webpack_require__(2444), __webpack_require__(9904), __webpack_require__(1724), __webpack_require__(7527), __webpack_require__(6326)
})();