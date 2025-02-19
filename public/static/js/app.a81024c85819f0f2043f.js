webpackJsonp([1], {
    "6VF5": function(t, a, e) {
        "use strict";
        var s = {
            render: function() {
                this.$createElement;
                this._self._c;
                return this._m(0)
            },
            staticRenderFns: [function() {
                var t = this.$createElement,
                    a = this._self._c || t;
                return a("footer", {
                    staticClass: "footer"
                }, [a("div", {
                    staticClass: "container"
                }, [a("div", {
                    staticClass: "row"
                }, [a("div", {
                    staticClass: "col"
                }, [a("p", {
                    staticClass: "text-muted"
                }, [this._v("RU102J: Redis for Java Developers")])])])])])
            }]
        };
        a.a = s
    },
    DEtk: function(t, a) {},
    EYnv: function(t, a) {},
    NHnr: function(t, a, e) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var s = e("7+uW"),
            r = e("MdIv"),
            n = e("mtWM"),
            i = e.n(n),
            c = {
                name: "App",
                components: {
                    LMap: r.LMap,
                    LTileLayer: r.LTileLayer,
                    LMarker: r.LMarker
                },
                mounted: function() {
                    this.createMap(), this.getData()
                },
                methods: {
                    submitForm: function(t) {
                        var a = this;
                        this.markerLayers.clearLayers(), console.log(t.srcElement);
                        var e = {
                                params: {
                                    lat: t.target.lat.value,
                                    lng: t.target.lng.value,
                                    radius: t.target.radius.value,
                                    radiusUnit: t.target.radiusUnit.value,
                                    onlyExcessCapacity: t.target.onlyExcessCapacity.checked
                                }
                            },
                            s = [];
                        i.a.get("/api/sites", e).then(function(t) {
                            t.data.forEach(function(t) {
                                a.addMarker(t), s.push([t.coordinate.lat, t.coordinate.lng])
                            }), a.mymap.fitBounds(s)
                        }).catch(function(t) {
                            console.log(t)
                        })
                    },
                    getData: function() {
                        var t = this;
                        i.a.get("/api/sites").then(function(a) {
                            a.data.forEach(function(a) {
                                t.addMarker(a)
                            })
                        }).catch(function(t) {
                            console.log(t)
                        })
                    },
                    addMarker: function(t) {
                        var a = t.coordinate;
                        r.L.marker([a.lat, a.lng]).addTo(this.markerLayers).bindPopup("<b>" + t.address + "</b><br/>" + t.city + ", " + t.state + " " + t.postalCode + "<br>(" + t.coordinate.lat + ", " + t.coordinate.lng + ')<br/><a href="#/stats/' + t.id + '">Stats</a>')
                    },
                    createMap: function() {
                        this.mymap = r.L.map("mapid").setView([-6.891327821019719, 107.61070311105281], 17), this.markerLayers = r.L.featureGroup().addTo(this.mymap), r.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?", {
                            attribution: 'Map and Image data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors. <a href="https://www.openstreetmap.org/copyright">License</a>.'
                        }).addTo(this.mymap)
                    }
                }
            },
            o = {
                render: function() {
                    var t = this,
                        a = t.$createElement,
                        e = t._self._c || a;
                    return e("div", {
                        attrs: {
                            id: "app"
                        }
                    }, [t._m(0), t._v(" "), e("div", {
                        staticClass: "container"
                    }, [e("form", {
                        staticStyle: {
                            margin: "0.5em"
                        },
                        attrs: {
                            id: "search"
                        },
                        on: {
                            submit: function(a) {
                                return a.preventDefault(), t.submitForm(a)
                            }
                        }
                    }, [t._m(1)])]), t._v(" "), e("div", {
                        staticClass: "container",
                        attrs: {
                            id: "mapid"
                        }
                    })])
                },
                staticRenderFns: [function() {
                    var t = this.$createElement,
                        a = this._self._c || t;
                    return a("div", {
                        staticClass: "container"
                    }, [a("h1", {
                        staticClass: "header"
                    }, [this._v("Crowd Point Map")])])
                }, function() {
                    var t = this,
                        a = t.$createElement,
                        e = t._self._c || a;
                    return e("div", {
                        staticClass: "form-row m-1"
                    }, [e("div", {
                        staticClass: "col px-1"
                    }, [e("input", {
                        staticClass: "form-control",
                        attrs: {
                            id: "lat",
                            name: "latitude",
                            type: "text",
                            placeholder: "Latitude"
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "col px-1"
                    }, [e("input", {
                        staticClass: "form-control",
                        attrs: {
                            id: "lng",
                            name: "longitude",
                            type: "text",
                            placeholder: "Longitude"
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "col-sm-1 px-1"
                    }, [e("input", {
                        staticClass: "form-control",
                        attrs: {
                            name: "radius",
                            type: "text",
                            placeholder: "Radius"
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "col2 px-1"
                    }, [e("select", {
                        staticClass: "custom-select",
                        attrs: {
                            name: "radiusUnit"
                        }
                    }, [e("option", {
                        attrs: {
                            selected: "selected",
                            value: "KM"
                        }
                    }, [t._v("KM (Kilometers)")]), t._v(" "), e("option", {
                        attrs: {
                            value: "MI"
                        }
                    }, [t._v("MI (Miles)")])])]), t._v(" "), e("div", {
                        staticClass: "col2 px-1 form-check form-check-inline"
                    }, [e("input", {
                        staticClass: "form-check-input",
                        attrs: {
                            type: "checkbox",
                            name: "onlyExcessCapacity",
                            id: "excessCapacityCheck"
                        }
                    }), t._v(" "), e("label", {
                        staticClass: "form-check-label",
                        attrs: {
                            for: "excessCapacityCheck"
                        }
                    }, [t._v("Excess Capacity")])]), t._v(" "), e("div", {
                        staticClass: "col2 px-1"
                    }, [e("button", {
                        staticClass: "btn btn-primary",
                        attrs: {
                            type: "submit"
                        }
                    }, [t._v("Submit")])])])
                }]
            };
        var l = e("VU/8")(c, o, !1, function(t) {
                e("k6kf")
            }, null, null).exports,
            d = e("g2+m"),
            u = e("WaEV"),
            h = e.n(u),
            p = {
                name: "Chart",
                data: function() {
                    return {
                        siteId: null
                    }
                },
                mounted: function() {
                    this.resetColor(), this.createChart(), this.getData(this)
                },
                watch: {
                    $route: function(t, a) {
                        this.clearChartData(this), this.resetColor(), this.getData(this)
                    }
                },
                methods: {
                    resetColor: function() {
                        this.currentColor = {
                            r: 66,
                            g: 134,
                            b: 234
                        }
                    },
                    cycleRGBColor: function(t) {
                        return t + 20 <= 255 ? t + 20 : 255 - t + 20
                    },
                    getBorderColor: function() {
                        return this.currentColor.r = this.cycleRGBColor(this.currentColor.r), this.currentColor.g = this.cycleRGBColor(this.currentColor.g), this.currentColor.b = this.cycleRGBColor(this.currentColor.b), "rgb(" + this.currentColor.r + ", " + this.currentColor.g + ", " + this.currentColor.b + ")"
                    },
                    clearChartData: function(t) {
                        t.chart.data.datasets = [], t.chart.update()
                    },
                    getData: function(t) {
                        i.a.get("/api/metrics/" + t.$route.params.id).then(function(a) {
                            t.siteId = t.$route.params.id, a.data.forEach(function(a) {
                                t.chart.data.datasets.push({
                                    label: a.name,
                                    borderColor: t.getBorderColor(),
                                    data: a.measurements.map(function(t) {
                                        return {
                                            x: new Date(1e3 * t.dateTime),
                                            y: t.value.toPrecision(3)
                                        }
                                    })
                                }), t.chart.update()
                            })
                        }).catch(function(t) {
                            console.log("Got error"), console.log(t)
                        })
                    },
                    createChart: function() {
                        var t = document.getElementById("myChart").getContext("2d");
                        this.chart = new h.a(t, {
                            type: "line",
                            data: {
                                datasets: []
                            },
                            options: {
                                title: {
                                    text: "Time Scale"
                                },
                                scales: {
                                    xAxes: [{
                                        type: "time",
                                        time: {
                                            format: "MM/DD/YYYY HH:mm",
                                            tooltipFormat: "ll HH:mm"
                                        },
                                        scaleLabel: {
                                            display: !0,
                                            labelString: "Date"
                                        }
                                    }],
                                    yAxes: [{
                                        scaleLabel: {
                                            display: !0,
                                            labelString: "Watt-Hours"
                                        }
                                    }]
                                }
                            }
                        })
                    }
                }
            },
            m = {
                render: function() {
                    var t = this.$createElement,
                        a = this._self._c || t;
                    return a("div", {
                        attrs: {
                            id: "app"
                        }
                    }, [a("div", {
                        staticClass: "container"
                    }, [a("h1", {
                        staticClass: "header"
                    }, [this._v("Crowd Site " + this._s(this.siteId))]), this._v(" "), a("canvas", {
                        attrs: {
                            id: "myChart"
                        }
                    })])])
                },
                staticRenderFns: []
            };
        var g = e("VU/8")(p, m, !1, function(t) {
                e("b7gL")
            }, null, null).exports,
            f = {
                name: "Chart",
                data: function() {
                    return {
                        capacityTable: [],
                        minCapacityTable: []
                    }
                },
                mounted: function() {
                    this.resetColor(), this.createChart(), this.getData(this)
                },
                watch: {
                    $route: function(t, a) {
                        this.clearChartData(this), this.resetColor(), this.getData(this)
                    }
                },
                methods: {
                    resetColor: function() {
                        this.currentColor = {
                            r: 66,
                            g: 134,
                            b: 234
                        }
                    },
                    cycleRGBColor: function(t) {
                        return t + 20 <= 255 ? t + 20 : 255 - t + 20
                    },
                    getBorderColor: function() {
                        return this.currentColor.r = this.cycleRGBColor(this.currentColor.r), this.currentColor.g = this.cycleRGBColor(this.currentColor.g), this.currentColor.b = this.cycleRGBColor(this.currentColor.b), "rgb(" + this.currentColor.r + ", " + this.currentColor.g + ", " + this.currentColor.b + ")"
                    },
                    clearChartData: function(t) {
                        t.chart.data.datasets = [], t.chart.update()
                    },
                    getData: function(t) {
                        i.a.get("/api/capacity/").then(function(a) {
                            var e = [],
                                s = [];
                            a.data.highestCapacity.forEach(function(a) {
                                e.push({
                                    x: a.siteId,
                                    y: a.capacity
                                }), s.push("" + a.siteId), t.capacityTable.push(a)
                            }), t.maxChart.data.labels = s, t.maxChart.data.datasets.push({
                                labels: s,
                                backgroundColor: "#94c635",
                                borderColor: "#709628",
                                borderWidth: 1,
                                data: e
                            }), t.maxChart.update();
                            var r = [],
                                n = [];
                            a.data.lowestCapacity.forEach(function(a) {
                                n.push({
                                    x: a.siteId,
                                    y: a.capacity
                                }), r.push("" + a.siteId), t.minCapacityTable.push(a)
                            }), t.minChart.data.labels = r, t.minChart.data.datasets.push({
                                labels: r,
                                backgroundColor: "#A50104",
                                borderColor: "#590004",
                                borderWidth: 1,
                                data: n
                            }), t.minChart.update()
                        }).catch(function(t) {
                            console.log("Got error"), console.log(t)
                        })
                    },
                    createChart: function() {
                        var t = document.getElementById("maxChart").getContext("2d"),
                            a = document.getElementById("minChart").getContext("2d");
                        this.maxChart = new h.a(t, {
                            type: "bar",
                            data: {
                                datasets: []
                            },
                            options: {
                                legend: {
                                    display: !1
                                },
                                title: {
                                    display: !0
                                },
                                scales: {
                                    xAxes: [{
                                        labelString: "Site ID",
                                        barPercentage: 10,
                                        maxBarThickness: 60,
                                        minBarLength: 2,
                                        gridLines: {
                                            offsetGridLines: !0
                                        },
                                        scaleLabel: {
                                            labelString: "Site ID",
                                            display: !0
                                        }
                                    }],
                                    yAxes: [{
                                        scaleLabel: {
                                            labelString: "Count",
                                            display: !0
                                        }
                                    }]
                                }
                            }
                        }), this.minChart = new h.a(a, {
                            type: "bar",
                            data: {
                                datasets: []
                            },
                            options: {
                                legend: {
                                    display: !1
                                },
                                title: {
                                    display: !0
                                },
                                scales: {
                                    xAxes: [{
                                        labelString: "Site ID",
                                        barPercentage: 10,
                                        maxBarThickness: 60,
                                        minBarLength: 2,
                                        gridLines: {
                                            offsetGridLines: !0
                                        },
                                        scaleLabel: {
                                            labelString: "Site ID",
                                            display: !0
                                        }
                                    }],
                                    yAxes: [{
                                        scaleLabel: {
                                            labelString: "Count",
                                            display: !0
                                        }
                                    }]
                                }
                            }
                        })
                    }
                }
            },
            v = {
                render: function() {
                    var t = this,
                        a = t.$createElement,
                        e = t._self._c || a;
                    return e("div", {
                        attrs: {
                            id: "app"
                        }
                    }, [t._m(0), t._v(" "), e("div", {
                        staticClass: "container"
                    }, [e("table", {
                        staticClass: "table"
                    }, [t._m(1), t._v(" "), t._l(t.capacityTable, function(a) {
                        return e("tr", {
                            key: a.siteId
                        }, [e("td", [e("router-link", {
                            attrs: {
                                to: {
                                    name: "stats",
                                    params: {
                                        id: a.siteId
                                    }
                                }
                            }
                        }, [t._v(t._s(a.siteId))])], 1), t._v(" "), e("td", [t._v(t._s(a.capacity))])])
                    })], 2)]), t._v(" "), t._m(2), t._v(" "), e("div", {
                        staticClass: "container"
                    }, [e("table", {
                        staticClass: "table"
                    }, [t._m(3), t._v(" "), t._l(t.minCapacityTable, function(a) {
                        return e("tr", {
                            key: a.siteId
                        }, [e("td", [e("router-link", {
                            attrs: {
                                to: {
                                    name: "stats",
                                    params: {
                                        id: a.siteId
                                    }
                                }
                            }
                        }, [t._v(t._s(a.siteId))])], 1), t._v(" "), e("td", [t._v(t._s(a.capacity))])])
                    })], 2)])])
                },
                staticRenderFns: [function() {
                    var t = this.$createElement,
                        a = this._self._c || t;
                    return a("div", {
                        staticClass: "container"
                    }, [a("h1", {
                        staticClass: "header"
                    }, [this._v("Site Capacity")]), this._v(" "), a("h3", {
                        staticClass: "header"
                    }, [this._v("Under Maximum Capacity")]), this._v(" "), a("canvas", {
                        attrs: {
                            id: "maxChart"
                        }
                    })])
                }, function() {
                    var t = this.$createElement,
                        a = this._self._c || t;
                    return a("thead", [a("tr", [a("td", {
                        attrs: {
                            scope: "col"
                        }
                    }, [this._v("ID")]), this._v(" "), a("td", {
                        attrs: {
                            scope: "col"
                        }
                    }, [this._v("Capacity")])])])
                }, function() {
                    var t = this.$createElement,
                        a = this._self._c || t;
                    return a("div", {
                        staticClass: "container"
                    }, [a("h3", {
                        staticClass: "header",
                        staticStyle: {
                            "margin-top": "1em"
                        }
                    }, [this._v("Over Maximum Capacity")]), this._v(" "), a("canvas", {
                        attrs: {
                            id: "minChart"
                        }
                    })])
                }, function() {
                    var t = this.$createElement,
                        a = this._self._c || t;
                    return a("thead", [a("tr", [a("td", {
                        attrs: {
                            scope: "col"
                        }
                    }, [this._v("ID")]), this._v(" "), a("td", {
                        attrs: {
                            scope: "col"
                        }
                    }, [this._v("Capacity")])])])
                }]
            };
        var C = e("VU/8")(f, v, !1, function(t) {
                e("VkHU")
            }, null, null).exports,
            b = e("nq5D"),
            j = {
                name: "app",
                components: {
                    Map: l,
                    NavBar: d.default,
                    Stats: g,
                    Foot: b.default,
                    Capacity: C
                }
            },
            k = {
                render: function() {
                    var t = this.$createElement,
                        a = this._self._c || t;
                    return a("div", {
                        attrs: {
                            id: "app"
                        }
                    }, [a("nav-bar"), this._v(" "), a("router-view")], 1)
                },
                staticRenderFns: []
            };
        var y = e("VU/8")(j, k, !1, function(t) {
                e("q9fh")
            }, null, null).exports,
            x = e("/ocq"),
            A = {
                name: "Recent",
                data: function() {
                    return {
                        meterReadings: []
                    }
                },
                mounted: function() {
                    this.getData()
                },
                methods: {
                    getData: function() {
                        var t = this;
                        i.a.get("/api/meterReadings/").then(function(a) {
                            t.meterReadings = a.data
                        }).catch(function(t) {
                            console.log("Got error"), console.log(t)
                        })
                    }
                }
            },
            E = {
                render: function() {
                    var t = this,
                        a = t.$createElement,
                        e = t._self._c || a;
                    return e("div", {
                        attrs: {
                            id: "app"
                        }
                    }, [t._m(0), t._v(" "), e("div", {
                        staticClass: "container"
                    }, [e("table", {
                        staticClass: "table"
                    }, [t._m(1), t._v(" "), t._l(t.meterReadings, function(a) {
                        return e("tr", {
                            key: a.siteId
                        }, [e("td", [t._v(t._s(new Date(1e3 * a.dateTime).toISOString()))]), t._v(" "), e("td", [e("router-link", {
                            attrs: {
                                to: {
                                    name: "stats",
                                    params: {
                                        id: a.siteId
                                    }
                                }
                            }
                        }, [t._v(t._s(a.siteId))])], 1), t._v(" "), e("td", [t._v(t._s(Number.parseFloat(a.whGenerated).toPrecision(4)))]), t._v(" "), e("td", [t._v(t._s(Number.parseFloat(a.whUsed).toPrecision(4)))]), t._v(" "), e("td", [t._v(t._s(Number.parseFloat(a.tempC).toPrecision(4)))])])
                    })], 2)])])
                },
                staticRenderFns: [function() {
                    var t = this.$createElement,
                        a = this._self._c || t;
                    return a("div", {
                        staticClass: "container margin-md"
                    }, [a("h1", {
                        staticClass: "header"
                    }, [this._v("Recent Meter Readings")])])
                }, function() {
                    var t = this,
                        a = t.$createElement,
                        e = t._self._c || a;
                    return e("thead", [e("tr", [e("td", {
                        attrs: {
                            scope: "col"
                        }
                    }, [t._v("Timestamp")]), t._v(" "), e("td", {
                        attrs: {
                            scope: "col"
                        }
                    }, [t._v("Site ID")]), t._v(" "), e("td", {
                        attrs: {
                            scope: "col"
                        }
                    }, [t._v("Max Capacity")]), t._v(" "), e("td", {
                        attrs: {
                            scope: "col"
                        }
                    }, [t._v("Capacity Used")]), t._v(" ")])])
                }]
            };
        var w = e("VU/8")(A, E, !1, function(t) {
            e("Niou"), e("lUrd")
        }, null, null).exports;
        s.a.use(x.a);
        var z = new x.a({
            routes: [{
                path: "/",
                name: "Map",
                component: l
            }, {
                path: "/map",
                name: "Map",
                component: l
            }, {
                path: "/stats",
                name: "stats",
                component: g
            }, {
                path: "/capacity",
                name: "capacity",
                component: C
            }, {
                path: "/stats/:id",
                name: "stats",
                component: g
            }, {
                path: "/recent",
                name: "Recent",
                component: w
            }]
        });
        e("EYnv");
        s.a.component("l-map", r.LMap), s.a.component("l-tile-layer", r.LTileLayer), s.a.component("l-marker", r.LMarker), delete r.L.Icon.Default.prototype._getIconUrl, r.L.Icon.Default.mergeOptions({
            iconRetinaUrl: e("qXhe"),
            iconUrl: e("TJ5S"),
            shadowUrl: e("wkq0")
        }), s.a.config.productionTip = !1, new s.a({
            el: "#app",
            router: z,
            components: {
                App: y
            },
            template: "<App/>"
        })
    },
    Niou: function(t, a) {},
    SdHj: function(t, a) {},
    TJ5S: function(t, a) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII="
    },
    VkHU: function(t, a) {},
    b7gL: function(t, a) {},
    cMi8: function(t, a) {},
    "g2+m": function(t, a, e) {
        "use strict";
        var s = e("DEtk"),
            r = e.n(s),
            n = e("w8Q2");
        var i = function(t) {
                e("cMi8")
            },
            c = e("VU/8")(r.a, n.a, !1, i, "data-v-2253b308", null);
        a.default = c.exports
    },
    k6kf: function(t, a) {},
    lUrd: function(t, a) {},
    nq5D: function(t, a, e) {
        "use strict";
        var s = e("t2Vd"),
            r = e.n(s),
            n = e("6VF5");
        var i = function(t) {
                e("SdHj")
            },
            c = e("VU/8")(r.a, n.a, !1, i, "data-v-18a907dd", null);
        a.default = c.exports
    },
    q9fh: function(t, a) {},
    qXhe: function(t, a) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcY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"
    },
    t2Vd: function(t, a) {},
    uslO: function(t, a, e) {
        var s = {
            "./af": "3CJN",
            "./af.js": "3CJN",
            "./ar": "3MVc",
            "./ar-dz": "tkWw",
            "./ar-dz.js": "tkWw",
            "./ar-kw": "j8cJ",
            "./ar-kw.js": "j8cJ",
            "./ar-ly": "wPpW",
            "./ar-ly.js": "wPpW",
            "./ar-ma": "dURR",
            "./ar-ma.js": "dURR",
            "./ar-sa": "7OnE",
            "./ar-sa.js": "7OnE",
            "./ar-tn": "BEem",
            "./ar-tn.js": "BEem",
            "./ar.js": "3MVc",
            "./az": "eHwN",
            "./az.js": "eHwN",
            "./be": "3hfc",
            "./be.js": "3hfc",
            "./bg": "lOED",
            "./bg.js": "lOED",
            "./bm": "hng5",
            "./bm.js": "hng5",
            "./bn": "aM0x",
            "./bn.js": "aM0x",
            "./bo": "w2Hs",
            "./bo.js": "w2Hs",
            "./br": "OSsP",
            "./br.js": "OSsP",
            "./bs": "aqvp",
            "./bs.js": "aqvp",
            "./ca": "wIgY",
            "./ca.js": "wIgY",
            "./cs": "ssxj",
            "./cs.js": "ssxj",
            "./cv": "N3vo",
            "./cv.js": "N3vo",
            "./cy": "ZFGz",
            "./cy.js": "ZFGz",
            "./da": "YBA/",
            "./da.js": "YBA/",
            "./de": "DOkx",
            "./de-at": "8v14",
            "./de-at.js": "8v14",
            "./de-ch": "Frex",
            "./de-ch.js": "Frex",
            "./de.js": "DOkx",
            "./dv": "rIuo",
            "./dv.js": "rIuo",
            "./el": "CFqe",
            "./el.js": "CFqe",
            "./en-SG": "oYA3",
            "./en-SG.js": "oYA3",
            "./en-au": "Sjoy",
            "./en-au.js": "Sjoy",
            "./en-ca": "Tqun",
            "./en-ca.js": "Tqun",
            "./en-gb": "hPuz",
            "./en-gb.js": "hPuz",
            "./en-ie": "ALEw",
            "./en-ie.js": "ALEw",
            "./en-il": "QZk1",
            "./en-il.js": "QZk1",
            "./en-nz": "dyB6",
            "./en-nz.js": "dyB6",
            "./eo": "Nd3h",
            "./eo.js": "Nd3h",
            "./es": "LT9G",
            "./es-do": "7MHZ",
            "./es-do.js": "7MHZ",
            "./es-us": "INcR",
            "./es-us.js": "INcR",
            "./es.js": "LT9G",
            "./et": "XlWM",
            "./et.js": "XlWM",
            "./eu": "sqLM",
            "./eu.js": "sqLM",
            "./fa": "2pmY",
            "./fa.js": "2pmY",
            "./fi": "nS2h",
            "./fi.js": "nS2h",
            "./fo": "OVPi",
            "./fo.js": "OVPi",
            "./fr": "tzHd",
            "./fr-ca": "bXQP",
            "./fr-ca.js": "bXQP",
            "./fr-ch": "VK9h",
            "./fr-ch.js": "VK9h",
            "./fr.js": "tzHd",
            "./fy": "g7KF",
            "./fy.js": "g7KF",
            "./ga": "U5Iz",
            "./ga.js": "U5Iz",
            "./gd": "nLOz",
            "./gd.js": "nLOz",
            "./gl": "FuaP",
            "./gl.js": "FuaP",
            "./gom-latn": "+27R",
            "./gom-latn.js": "+27R",
            "./gu": "rtsW",
            "./gu.js": "rtsW",
            "./he": "Nzt2",
            "./he.js": "Nzt2",
            "./hi": "ETHv",
            "./hi.js": "ETHv",
            "./hr": "V4qH",
            "./hr.js": "V4qH",
            "./hu": "xne+",
            "./hu.js": "xne+",
            "./hy-am": "GrS7",
            "./hy-am.js": "GrS7",
            "./id": "yRTJ",
            "./id.js": "yRTJ",
            "./is": "upln",
            "./is.js": "upln",
            "./it": "FKXc",
            "./it-ch": "/E8D",
            "./it-ch.js": "/E8D",
            "./it.js": "FKXc",
            "./ja": "ORgI",
            "./ja.js": "ORgI",
            "./jv": "JwiF",
            "./jv.js": "JwiF",
            "./ka": "RnJI",
            "./ka.js": "RnJI",
            "./kk": "j+vx",
            "./kk.js": "j+vx",
            "./km": "5j66",
            "./km.js": "5j66",
            "./kn": "gEQe",
            "./kn.js": "gEQe",
            "./ko": "eBB/",
            "./ko.js": "eBB/",
            "./ku": "kI9l",
            "./ku.js": "kI9l",
            "./ky": "6cf8",
            "./ky.js": "6cf8",
            "./lb": "z3hR",
            "./lb.js": "z3hR",
            "./lo": "nE8X",
            "./lo.js": "nE8X",
            "./lt": "/6P1",
            "./lt.js": "/6P1",
            "./lv": "jxEH",
            "./lv.js": "jxEH",
            "./me": "svD2",
            "./me.js": "svD2",
            "./mi": "gEU3",
            "./mi.js": "gEU3",
            "./mk": "Ab7C",
            "./mk.js": "Ab7C",
            "./ml": "oo1B",
            "./ml.js": "oo1B",
            "./mn": "CqHt",
            "./mn.js": "CqHt",
            "./mr": "5vPg",
            "./mr.js": "5vPg",
            "./ms": "ooba",
            "./ms-my": "G++c",
            "./ms-my.js": "G++c",
            "./ms.js": "ooba",
            "./mt": "oCzW",
            "./mt.js": "oCzW",
            "./my": "F+2e",
            "./my.js": "F+2e",
            "./nb": "FlzV",
            "./nb.js": "FlzV",
            "./ne": "/mhn",
            "./ne.js": "/mhn",
            "./nl": "3K28",
            "./nl-be": "Bp2f",
            "./nl-be.js": "Bp2f",
            "./nl.js": "3K28",
            "./nn": "C7av",
            "./nn.js": "C7av",
            "./pa-in": "pfs9",
            "./pa-in.js": "pfs9",
            "./pl": "7LV+",
            "./pl.js": "7LV+",
            "./pt": "ZoSI",
            "./pt-br": "AoDM",
            "./pt-br.js": "AoDM",
            "./pt.js": "ZoSI",
            "./ro": "wT5f",
            "./ro.js": "wT5f",
            "./ru": "ulq9",
            "./ru.js": "ulq9",
            "./sd": "fW1y",
            "./sd.js": "fW1y",
            "./se": "5Omq",
            "./se.js": "5Omq",
            "./si": "Lgqo",
            "./si.js": "Lgqo",
            "./sk": "OUMt",
            "./sk.js": "OUMt",
            "./sl": "2s1U",
            "./sl.js": "2s1U",
            "./sq": "V0td",
            "./sq.js": "V0td",
            "./sr": "f4W3",
            "./sr-cyrl": "c1x4",
            "./sr-cyrl.js": "c1x4",
            "./sr.js": "f4W3",
            "./ss": "7Q8x",
            "./ss.js": "7Q8x",
            "./sv": "Fpqq",
            "./sv.js": "Fpqq",
            "./sw": "DSXN",
            "./sw.js": "DSXN",
            "./ta": "+7/x",
            "./ta.js": "+7/x",
            "./te": "Nlnz",
            "./te.js": "Nlnz",
            "./tet": "gUgh",
            "./tet.js": "gUgh",
            "./tg": "5SNd",
            "./tg.js": "5SNd",
            "./th": "XzD+",
            "./th.js": "XzD+",
            "./tl-ph": "3LKG",
            "./tl-ph.js": "3LKG",
            "./tlh": "m7yE",
            "./tlh.js": "m7yE",
            "./tr": "k+5o",
            "./tr.js": "k+5o",
            "./tzl": "iNtv",
            "./tzl.js": "iNtv",
            "./tzm": "FRPF",
            "./tzm-latn": "krPU",
            "./tzm-latn.js": "krPU",
            "./tzm.js": "FRPF",
            "./ug-cn": "To0v",
            "./ug-cn.js": "To0v",
            "./uk": "ntHu",
            "./uk.js": "ntHu",
            "./ur": "uSe8",
            "./ur.js": "uSe8",
            "./uz": "XU1s",
            "./uz-latn": "/bsm",
            "./uz-latn.js": "/bsm",
            "./uz.js": "XU1s",
            "./vi": "0X8Q",
            "./vi.js": "0X8Q",
            "./x-pseudo": "e/KL",
            "./x-pseudo.js": "e/KL",
            "./yo": "YXlc",
            "./yo.js": "YXlc",
            "./zh-cn": "Vz2w",
            "./zh-cn.js": "Vz2w",
            "./zh-hk": "ZUyn",
            "./zh-hk.js": "ZUyn",
            "./zh-tw": "BbgG",
            "./zh-tw.js": "BbgG"
        };

        function r(t) {
            return e(n(t))
        }

        function n(t) {
            var a = s[t];
            if (!(a + 1)) throw new Error("Cannot find module '" + t + "'.");
            return a
        }
        r.keys = function() {
            return Object.keys(s)
        }, r.resolve = n, t.exports = r, r.id = "uslO"
    },
    w8Q2: function(t, a, e) {
        "use strict";
        var s = {
            render: function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("nav", {
                    staticClass: "navbar navbar-expand-lg navbar-light bg-dark",
                    attrs: {
                        id: "main"
                    }
                }, [e("div", {
                    staticClass: "container"
                }, [e("img", {
                    staticClass: "navbar-brand",
                    attrs: {
                        src: "/static/img/crowdfide-logo.png",
                        alt: "crowdfide logo",
                        width: "99",
                        height: "52",
                    }
                }), t._v(" "), e("a", {
                    staticClass: "navbar-brand text-white",
                    attrs: {
                        href: "#"
                    }
                }, [t._v("Crowd Monitoring Dashboard")]), t._v(" "), t._m(0), t._v(" "), e("div", {
                    staticClass: "collapse navbar-collapse",
                    attrs: {
                        id: "navbarSupportedContent"
                    }
                }, [e("ul", {
                    staticClass: "navbar-nav mr-auto"
                }, [e("li", {
                    staticClass: "nav-item"
                }, [e("router-link", {
                    staticClass: "nav-link text-light",
                    attrs: {
                        to: "/map"
                    }
                }, [t._v("Map")])], 1), t._v(" "), e("li", {
                    staticClass: "nav-item"
                }, [e("router-link", {
                    staticClass: "nav-link text-light",
                    attrs: {
                        to: "/stats/1"
                    }
                }, [t._v("Stats")])], 1), t._v(" "), e("li", {
                    staticClass: "nav-item"
                }, [e("router-link", {
                    staticClass: "nav-link text-light",
                    attrs: {
                        to: "/capacity"
                    }
                }, [t._v("Capacity")])], 1), t._v(" "), e("li", {
                    staticClass: "nav-item"
                }, [e("router-link", {
                    staticClass: "nav-link text-light",
                    attrs: {
                        to: "/recent"
                    }
                }, [t._v("Recent")])], 1)])])])])
            },
            staticRenderFns: [function() {
                var t = this.$createElement,
                    a = this._self._c || t;
                return a("button", {
                    staticClass: "navbar-toggler",
                    attrs: {
                        type: "button",
                        "data-toggle": "collapse",
                        "data-target": "#navbarSupportedContent",
                        "aria-controls": "navbarSupportedContent",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation"
                    }
                }, [a("span", {
                    staticClass: "navbar-toggler-icon"
                })])
            }]
        };
        a.a = s
    },
    wkq0: function(t, a) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC"
    }
}, ["NHnr"]);
//# sourceMappingURL=app.a81024c85819f0f2043f.js.map
