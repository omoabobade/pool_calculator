'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var poolShapes = [{ name: "Kidney Shape", value: 1 }, { name: "Circular Shape", value: 2 }, { name: "Rectangular", value: 3 }];

var poolDepth = [{ name: "3-5-3", value: 1 }, { name: "3-4-5", value: 2 }, { name: "4-5-6", value: 3 }];
var cleaningSystem = [{ name: "Infloor", value: 1 }, { name: "Vacuum System", value: 2 }];
var waterFeatureItems = [{ name: "Scupper", value: 1 }, { name: "Spillways", value: 2 }, { name: "Sheer Descent", value: 3 }];
var firePot = [{ name: 1, value: 1 }, { name: 2, value: 2 }];

var poolLight = [{ name: "LED Pool light", value: 1 }, { name: "Halogen", value: 2 }, { name: "Incandescent", value: 3 }];

var interiorPoolFinish = [{ name: "Plaster", value: 1 }, { name: "Pebble", value: 2 }, { name: "Tile", value: 3 }];

var chlorination = [{ name: "Salt system", value: 1 }, { name: "Traditional Chlorination", value: 2 }, { name: "Ozone", value: 3 }];

var coping = [{ name: "Pavers", value: 1 }, { name: "Travertine", value: 2 }];

var backBeam = [{ name: "No", value: 1 }, { name: "Yes", value: 2 }];

var spa = [{ name: "6ftx6ft", value: 1 }, { name: "8ftx8ft", value: 2 }, { name: "10ftx10ft", value: 3 }];

var LikeButton = function (_React$Component) {
  _inherits(LikeButton, _React$Component);

  function LikeButton(props) {
    var _this$state;

    _classCallCheck(this, LikeButton);

    var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

    _this.doCalc = function (e) {
      var area = 0;
      var interiorarea = 0;
      var primesurfacearea = 0;
      var perimeter = 0;
      var cost = 0;
      var additionalCost = 0;
      var excavationCost = 7.5;
      var electricalRuns = 7;
      var shotCrete = 6.2;
      var pcup = 400;
      var cityPermit = 1.7;
      var costing = {};
      var post = {};
      switch (_this.state.data.poolShape) {
        case "1":
          if (_typeof(_this.state.data.a) != undefined && _typeof(_this.state.data.b) != undefined && _typeof(_this.state.data.length) != undefined) {
            var a = _this.state.data.a;
            var b = _this.state.data.b;
            var length = _this.state.data.length;
            area = (a + b) * length * 0.45;
            primesurfacearea = a - 1 + (b - 1) * (length - 1) * 0.45;
            _this.setState({ imgsrc: "http://tioenai.com/poolkaddy/wp-content/uploads/2018/12/kidney.png" });
          }
          break;
        case "2":
          if (_typeof(_this.state.data.radius) != undefined) {
            var radius = _this.state.data.radius;
            area = 22 / 7 * radius;
            primesurfacearea = 22 / 7 * (radius - 1);
            _this.setState({ imgsrc: "http://tioenai.com/poolkaddy/wp-content/uploads/2018/12/oval.png" });
          }
          break;
        case "3":
          if (_typeof(_this.state.data.length) != undefined && _typeof(_this.state.data.width) != undefined) {
            var _length = _this.state.data.length;
            var width = _this.state.data.width;
            area = _length * width;
            perimeter = 2 * _length + 2 * width;
            primesurfacearea = (_length - 1) * (width - 1);
            excavationCost = 8.2;
            _this.setState({ imgsrc: "http://tioenai.com/poolkaddy/wp-content/uploads/2018/12/rectangular.png" });
          }
          break;
      }
      post.poolShape = poolShapes[_this.state.data.poolShape];
      var baseCost = 0; /* 400+(cityPermit*area)+(excavationCost*area)+
                        (electricalRuns*area)+(shotCrete*area)+pcup; */
      if (area <= 300) {
        baseCost = 18188;
      } else if (area <= 350 && area >= 301) {
        baseCost = 21220;
      } else if (area <= 400 && area >= 351) {
        baseCost = 24250;
      } else if (area <= 450 && area >= 401) {
        baseCost = 27281;
      } else if (area <= 500 && area >= 451) {
        baseCost = 30313;
      } else if (area <= 550 && area >= 501) {
        baseCost = 33344;
      } else if (area <= 600 && area >= 551) {
        baseCost = 36375;
      } else if (area <= 650 && area >= 601) {
        baseCost = 39406;
      } else if (area <= 700 && area >= 651) {
        baseCost = 42438;
      } else if (area <= 750 && area >= 701) {
        baseCost = 45469;
      } else if (area <= 800 && area >= 751) {
        baseCost = 48500;
      } else if (area <= 850 && area >= 801) {
        baseCost = 51531;
      } else if (area <= 900 && area >= 851) {
        baseCost = 54563;
      } else if (area <= 950 && area >= 901) {
        baseCost = 57594;
      } else if (area <= 1000 && area >= 951) {
        baseCost = 60625;
      } else if (area > 1000) {
        alert("This pool area selected is an industrial size, kindly contact us to qet a quote.");
        return;
      }

      if (_this.state.data.cleaningSystem == 1) {
        additionalCost = 7 * area + 2500;
        costing.cleaningSystem = additionalCost;
        post.cleaningSystem = cleaningSystem[_this.state.data.cleaningSystem];
      } else if (_this.state.data.cleaningSystem == 2) {
        additionalCost = 500;
        costing.cleaningSystem = additionalCost;
        post.cleaningSystem = cleaningSystem[_this.state.data.cleaningSystem];
      }

      if (_this.state.data.raisedBackBeam == 2) {
        var _backBeam = 3.25 * area;
        additionalCost = additionalCost + _backBeam;
        costing.backBeam = _backBeam;
        post.raisedBackBeam = _backBeam[_this.state.data.raisedBackBeam];
      } else if (_this.state.data.raisedBackBeam == 1) {
        var _backBeam2 = 2.5 * area;
        additionalCost = additionalCost + _backBeam2;
        costing.backBeam = _backBeam2;
        post.raisedBackBeam = _backBeam2[_this.state.data.raisedBackBeam];
      }

      if (_this.state.data.columns) {
        var columns = 100 * _this.state.data.columns;
        additionalCost = additionalCost + columns;
        costing.columns = columns;
        post.columns = _this.state.data.columns;
      }

      if (_this.state.data.waterFeatures) {
        var wf = _this.state.data.waterFeatures;
        if (wf == 1) {
          additionalCost = additionalCost + 1500;
          costing.waterFeatures = 1500;
        } else if (wf == 2) {
          additionalCost = additionalCost + 1800;
          costing.waterFeatures = 1800;
        } else if (wf == 3) {
          additionalCost = additionalCost + 2200;
          costing.waterFeatures = 2200;
        }
        post.waterFeatures = waterFeatureItems[_this.state.data.waterFeatures];
      }

      if (_this.state.data.firePot) {
        var fp = _this.state.data.firePot;
        if (fp == 1) {
          additionalCost = additionalCost + 1400;
          costing.firePot = 1400;
        } else if (fp == 2) {
          additionalCost = additionalCost + 2500;
          costing.firePot = 2500;
        }
        post.firePot = firePot[_this.state.data.firePot];
      }

      if (_this.state.data.poolLight) {
        var pl = _this.state.data.poolLight;
        if (pl == 1) {
          additionalCost = additionalCost + 750;
          costing.poolLight = 750;
        } else if (pl == 2) {
          additionalCost = additionalCost + 300;
          costing.poolLight = 300;
        } else if (pl == 3) {
          additionalCost = additionalCost + 250;
          costing.poolLight = 250;
        }
        post.poolLight = poolLight[_this.state.data.poolLight];
      }

      if (_this.state.data.interiorPoolFinish) {
        var pf = _this.state.data.interiorPoolFinish;
        var _interiorPoolFinish = 0;
        if (pf == 1) {
          _interiorPoolFinish = 3.5 * area;
          additionalCost = _interiorPoolFinish + additionalCost;
        } else if (pf == 2) {
          _interiorPoolFinish = 5.5 * area;
          additionalCost = _interiorPoolFinish + additionalCost;
        } else if (pf == 3) {
          _interiorPoolFinish = 15 * area;
          additionalCost = _interiorPoolFinish + additionalCost;
        }
        costing.interiorPoolFinish = _interiorPoolFinish;
        post.interiorPoolFinish = _interiorPoolFinish[_this.state.data.interiorPoolFinish];
      }

      if (_this.state.data.chlorination) {
        var chlo = _this.state.data.chlorination;
        var _chlorination = 0;
        if (chlo == 1) {
          additionalCost = additionalCost + 2400;
          _chlorination = 2400;
        } else if (chlo == 2) {
          additionalCost = additionalCost + 300;
          _chlorination = 300;
        } else if (chlo == 3) {
          additionalCost = additionalCost + 1500;
          _chlorination = 1500;
        }
        costing.chlorination = _chlorination;
        post.chlorination = _chlorination[_this.state.data.chlorination];
      }

      if (_this.state.data.coping) {
        var _coping = _this.state.data.coping;
        var copingCost = 0;
        if (_coping == 1) {
          copingCost = 10 * primesurfacearea;
          additionalCost = additionalCost + copingCost;
        } else if (_coping == 2) {
          copingCost = 30 * primesurfacearea;
          additionalCost = additionalCost + copingCost;
        }
        costing.coping = copingCost;
        post.coping = _coping[_this.state.data.coping];
      }

      if (_this.state.data.spa) {
        var _spa = _this.state.data.spa;
        var spaCost = _spa == 1 ? 6000 : _spa == 2 ? 8000 : _spa == 3 ? 10000 : "";
        additionalCost = additionalCost + spaCost;
        costing.spa = spaCost;
        post.spa = _spa[_this.state.data.spa];
      }
      cost = additionalCost + baseCost;
      var poolShape = _this.getPoolShape(_this.state.data.poolShape);
      _this.setState({ cost: cost, area: area, costing: costing, poolShapeName: poolShape.name });
    };

    _this.parseMailBody = function (id, email) {
      var htmlEmail = "<p>A new Client with email <b>" + email + "</b> just subscribed with transaction Id <b>" + id + "</b>. Find the pool details below : </p><p> Pool Shape :" + _this.state.post.poolShape + "</p>";
      htmlEmail = +"<p> Pool Depth : " + _this.state.post.poolDepth + "</p><p>Cleaning System : " + _this.state.post.cleaningSystem + "</p><p>Raised Back Beam : " + _this.state.post.raisedBackBeam + "</p>";
      htmlEmail = +"<p> Water Features : " + _this.state.post.waterFeatures + "</p><p> Columns : " + _this.state.post.columns + "</p><p> Fire Pot" + _this.state.post.firePot + "</p>";
      htmlEmail = +"<p> Pool Lighting : " + _this.state.post.poolLight + "</p><p>Interior Pool Finishing : " + _this.state.post.interiorPoolFinish + "</p><p> Chlorination:" + _this.state.post.chlorination + "</p>";
      htmlEmail = +"<p>Coping : " + _this.state.post.coping + "</p>";
      return htmlEmail;
    };

    _this.state = (_this$state = {
      data: {},
      post: {},
      length: "",
      width: "",
      diameter: "",
      raisedBackBeam: false,
      columns: false,
      waterFeatures: false,
      coping: "",
      chlorinaton: "",
      interiorPoolFinish: "",
      poolLight: "",
      poolDepth: "",
      poolShapes: "",
      firePot: ""
    }, _defineProperty(_this$state, "waterFeatures", ""), _defineProperty(_this$state, "cleaningSystem", ""), _defineProperty(_this$state, "costing", {}), _defineProperty(_this$state, "showModal", false), _defineProperty(_this$state, "imgsrc", "http://tioenai.com/poolkaddy/wp-content/uploads/2018/12/rectangular.png"), _this$state);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.getPoolShape = _this.getPoolShape.bind(_this);
    return _this;
  }

  _createClass(LikeButton, [{
    key: "handleChange",
    value: function handleChange(e) {
      var data = this.state.data;
      data[[e.target.name]] = e.target.value;
      this.setState({
        data: data
      });
      this.doCalc();
    }
  }, {
    key: "getPoolShape",
    value: function getPoolShape(value) {
      var poolShape = poolShapes.filter(function (item) {
        if (item.value == value) {
          return item.name;
        }
      });
      return poolShape[0];
    }
  }, {
    key: "parseNum",
    value: function parseNum(x) {
      return Number.parseFloat(x).toFixed(2);
    }
  }, {
    key: "doSubscription",
    value: function doSubscription(id, email) {
      var mailBody = this.parseMailBody(id, email);
      fetch(window.location.href, {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        method: "POST", body: JSON.stringify({ body: mailBody })
      }).then(function (res) {
        this.setState({ showModal: false });
      }).catch(function (res) {
        console.log(res);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var env = "sandbox";
      var client = {
        sandbox: 'Ac8UHFXqHvz_toL1a2wNRllVHfHMhVFQYFVTcLhMZHVtcmgeYKPk011lbWaiGZoObzyocefFaBSZG6oB', // from https://developer.paypal.com/developer/applications/
        production: 'xxxxxxxxx'
      };

      var pay_option_1 = function pay_option_1(data, actions) {
        return actions.payment.create({
          transactions: [{
            amount: {
              total: '1000.00',
              currency: 'USD'
            }
          }]
        });
      };

      var pay_option_2 = function pay_option_2(data, actions) {
        return actions.payment.create({
          transactions: [{
            amount: {
              total: '2000.00',
              currency: 'USD'
            }
          }]
        });
      };

      var onAuthorize = function onAuthorize(data, actions) {
        return actions.payment.get().then(function (paymentDetails) {
          var _this2 = this;

          var payer = data.payer;
          return actions.payment.execute().then(function () {
            // Show a success page to the buyer
            alert("Payment Successful");
            var email = payer.payer_info.email;
            _this2.doSubscription(data.id, email);
          });
        });
      };
      var PayPalButton = paypal.Button.driver('react', { React: React, ReactDOM: ReactDOM });
      return React.createElement(
        "main",
        { role: "main", className: "container" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-4 order-md-2 mb-4" },
            React.createElement(
              "h4",
              { className: "d-flex justify-content-between align-items-center mb-3" },
              React.createElement(
                "span",
                { className: "text-muted" },
                "Estimator"
              )
            ),
            React.createElement(
              "ul",
              { className: "list-group mb-3" },
              React.createElement(
                "li",
                { className: "list-group-item d-flex justify-content-between lh-condensed" },
                React.createElement(
                  "div",
                  null,
                  React.createElement(
                    "h6",
                    { className: "my-0" },
                    "Area"
                  ),
                  React.createElement(
                    "small",
                    { className: "text-muted" },
                    "Pool Shape : ",
                    this.state.poolShapeName
                  )
                ),
                React.createElement(
                  "span",
                  { className: "text-muted" },
                  this.parseNum(this.state.area),
                  " sq.ft"
                )
              ),
              this.state.costing.cleaningSystem ? React.createElement(
                "li",
                { className: "list-group-item d-flex justify-content-between lh-condensed" },
                React.createElement(
                  "div",
                  null,
                  React.createElement(
                    "small",
                    { className: "text-muted" },
                    "Cleaning System"
                  )
                ),
                React.createElement(
                  "span",
                  { className: "text-muted" },
                  this.parseNum(this.state.costing.cleaningSystem)
                )
              ) : "",
              this.state.costing.backBeam ? React.createElement(
                "li",
                { className: "list-group-item d-flex justify-content-between bg-light" },
                React.createElement(
                  "div",
                  { className: "text-success" },
                  React.createElement(
                    "small",
                    null,
                    "Raised Back Beam"
                  )
                ),
                React.createElement(
                  "span",
                  { className: "text-success" },
                  this.parseNum(this.state.costing.backBeam)
                )
              ) : "",
              this.state.costing.columns ? React.createElement(
                "li",
                { className: "list-group-item d-flex justify-content-between bg-light" },
                React.createElement(
                  "div",
                  { className: "text-success" },
                  React.createElement(
                    "small",
                    null,
                    "Columns"
                  )
                ),
                React.createElement(
                  "span",
                  { className: "text-success" },
                  this.parseNum(this.state.costing.columns)
                )
              ) : "",
              this.state.costing.waterFeatures ? React.createElement(
                "li",
                { className: "list-group-item d-flex justify-content-between bg-light" },
                React.createElement(
                  "div",
                  { className: "text-success" },
                  React.createElement(
                    "small",
                    null,
                    "Water Features"
                  )
                ),
                React.createElement(
                  "span",
                  { className: "text-success" },
                  this.parseNum(this.state.costing.waterFeatures)
                )
              ) : "",
              this.state.costing.firePot ? React.createElement(
                "li",
                { className: "list-group-item d-flex justify-content-between bg-light" },
                React.createElement(
                  "div",
                  { className: "text-success" },
                  React.createElement(
                    "small",
                    null,
                    "Fire Pot"
                  )
                ),
                React.createElement(
                  "span",
                  { className: "text-success" },
                  this.parseNum(this.state.costing.firePot)
                )
              ) : "",
              this.state.costing.poolLight ? React.createElement(
                "li",
                { className: "list-group-item d-flex justify-content-between bg-light" },
                React.createElement(
                  "div",
                  { className: "text-success" },
                  React.createElement(
                    "small",
                    null,
                    "Pool Light"
                  )
                ),
                React.createElement(
                  "span",
                  { className: "text-success" },
                  this.parseNum(this.state.costing.poolLight)
                )
              ) : "",
              this.state.costing.interiorPoolFinish ? React.createElement(
                "li",
                { className: "list-group-item d-flex justify-content-between bg-light" },
                React.createElement(
                  "div",
                  { className: "text-success" },
                  React.createElement(
                    "small",
                    null,
                    "Interior Pool Finish"
                  )
                ),
                React.createElement(
                  "span",
                  { className: "text-success" },
                  this.parseNum(this.state.costing.interiorPoolFinish)
                )
              ) : "",
              this.state.costing.spa ? React.createElement(
                "li",
                { className: "list-group-item d-flex justify-content-between bg-light" },
                React.createElement(
                  "div",
                  { className: "text-success" },
                  React.createElement(
                    "small",
                    null,
                    "Spa"
                  )
                ),
                React.createElement(
                  "span",
                  { className: "text-success" },
                  this.parseNum(this.state.costing.spa)
                )
              ) : "",
              React.createElement(
                "li",
                { className: "list-group-item d-flex justify-content-between" },
                React.createElement(
                  "span",
                  null,
                  "Total (USD)"
                ),
                React.createElement(
                  "strong",
                  null,
                  this.parseNum(this.state.cost)
                )
              ),
              React.createElement(
                "li",
                { className: "list-group-item d-flex justify-content-between bg-light" },
                React.createElement(
                  "button",
                  { onClick: function onClick(e) {
                      _this3.state.cost ? _this3.setState({ showModal: true }) : "";
                    } },
                  "Click to send quote"
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-8 order-md-1" },
            React.createElement(
              "form",
              null,
              React.createElement(
                "div",
                { className: "form-row" },
                React.createElement(
                  "div",
                  { className: "form-group col-md-4" },
                  React.createElement(
                    "label",
                    { htmlFor: "poolShape" },
                    "Pool Shape"
                  ),
                  React.createElement(
                    "select",
                    { id: "poolShape", name: "poolShape", className: "form-control", onChange: this.handleChange },
                    React.createElement(
                      "option",
                      { defaultValue: true },
                      "Choose Pool Shape..."
                    ),
                    poolShapes.map(function (v, i) {
                      return React.createElement(
                        "option",
                        { value: v.value, key: i },
                        v.name
                      );
                    })
                  )
                ),
                React.createElement(
                  "div",
                  { className: "form-group col-md-4" },
                  React.createElement("img", { src: this.state.imgsrc, style: { width: "100%" } })
                ),
                this.state.data.poolShape ? React.createElement(
                  "div",
                  { className: "form-group col-md-4" },
                  React.createElement(
                    "label",
                    { htmlFor: "inputState" },
                    "Dimension"
                  ),
                  this.state.data.poolShape == 1 ? React.createElement(
                    "div",
                    { className: "form-row" },
                    React.createElement(
                      "div",
                      { className: "col" },
                      React.createElement(
                        "label",
                        { htmlFor: "inputState" },
                        "A (ft)"
                      ),
                      React.createElement("input", { type: "text", className: "form-control", name: "a", onBlur: this.handleChange })
                    ),
                    React.createElement(
                      "div",
                      { className: "col" },
                      React.createElement(
                        "label",
                        { htmlFor: "inputState" },
                        "B (ft)"
                      ),
                      React.createElement("input", { type: "text", className: "form-control", name: "b", onBlur: this.handleChange })
                    ),
                    React.createElement(
                      "div",
                      { className: "col" },
                      React.createElement(
                        "label",
                        { htmlFor: "inputState" },
                        "Length (ft)"
                      ),
                      React.createElement("input", { type: "text", className: "form-control", name: "length", onBlur: this.handleChange })
                    )
                  ) : this.state.data.poolShape == 2 ? React.createElement(
                    "div",
                    { className: "form-row" },
                    React.createElement(
                      "div",
                      { className: "col" },
                      React.createElement(
                        "label",
                        { htmlFor: "inputState" },
                        "Radius (ft)"
                      ),
                      React.createElement("input", { type: "text", className: "form-control", name: "radius", onBlur: this.handleChange })
                    )
                  ) : React.createElement(
                    "div",
                    { className: "form-row" },
                    React.createElement(
                      "div",
                      { className: "col" },
                      React.createElement(
                        "label",
                        { htmlFor: "inputState" },
                        "Length (ft)"
                      ),
                      React.createElement("input", { type: "text", className: "form-control", name: "lenght", onBlur: this.handleChange })
                    ),
                    React.createElement(
                      "div",
                      { className: "col" },
                      React.createElement(
                        "label",
                        { htmlFor: "inputState" },
                        "Width (ft)"
                      ),
                      React.createElement("input", { type: "text", className: "form-control", name: "width", onBlur: this.handleChange })
                    )
                  )
                ) : ""
              ),
              React.createElement(
                "div",
                { className: "form-row" },
                React.createElement(
                  "div",
                  { className: "form-group col-md-4" },
                  React.createElement(
                    "label",
                    { htmlFor: "inputState" },
                    "Pool Depth"
                  ),
                  React.createElement(
                    "select",
                    { id: "poolDepth", name: "poolDepth", className: "form-control", onChange: this.handleChange },
                    React.createElement(
                      "option",
                      { defaultValue: true },
                      "Choose..."
                    ),
                    poolDepth.map(function (v, i) {
                      return React.createElement(
                        "option",
                        { value: v.value, key: i },
                        v.name
                      );
                    })
                  )
                ),
                React.createElement(
                  "div",
                  { className: "form-group col-md-4" },
                  React.createElement(
                    "label",
                    { htmlFor: "inputState" },
                    "Cleaning System"
                  ),
                  React.createElement(
                    "select",
                    { id: "cleaningSystem", name: "cleaningSystem", className: "form-control", onChange: this.handleChange },
                    React.createElement(
                      "option",
                      { defaultValue: true },
                      "Choose..."
                    ),
                    cleaningSystem.map(function (v, i) {
                      return React.createElement(
                        "option",
                        { value: v.value, key: i },
                        v.name
                      );
                    })
                  )
                ),
                React.createElement(
                  "div",
                  { className: "form-group col-md-4" },
                  React.createElement(
                    "label",
                    { htmlFor: "inputState" },
                    "Chlorination"
                  ),
                  React.createElement(
                    "select",
                    { id: "chlorination", name: "chlorination", className: "form-control", onChange: this.handleChange },
                    React.createElement(
                      "option",
                      { defaultValue: true },
                      "Choose..."
                    ),
                    chlorination.map(function (v, i) {
                      return React.createElement(
                        "option",
                        { value: v.value, key: i },
                        v.name
                      );
                    })
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "form-row" },
                React.createElement(
                  "div",
                  { className: "form-group col-md-4" },
                  React.createElement(
                    "div",
                    { className: "form-row align-items-center" },
                    React.createElement(
                      "div",
                      { className: "col-auto my-1" },
                      React.createElement(
                        "div",
                        { className: "custom-control custom-checkbox mr-sm-2" },
                        React.createElement("input", { type: "checkbox", className: "custom-control-input", onChange: function onChange() {
                            _this3.setState({ firePot: !_this3.state.firePot });
                          }, id: "customFirePot" }),
                        React.createElement(
                          "label",
                          { className: "custom-control-label", htmlFor: "customFirePot" },
                          "Fire Pot?"
                        )
                      )
                    ),
                    this.state.firePot ? React.createElement(
                      "div",
                      { className: "col-auto my-1" },
                      React.createElement(
                        "select",
                        { id: "firePot", name: "firePot", className: "form-control", onChange: this.handleChange },
                        React.createElement(
                          "option",
                          { defaultValue: true },
                          "Choose..."
                        ),
                        firePot.map(function (v, i) {
                          return React.createElement(
                            "option",
                            { value: v.value, key: i },
                            v.name
                          );
                        })
                      )
                    ) : ""
                  )
                ),
                React.createElement(
                  "div",
                  { className: "form-group col-md-4" },
                  React.createElement(
                    "div",
                    { className: "form-row align-items-center" },
                    React.createElement(
                      "div",
                      { className: "col-auto my-1" },
                      React.createElement(
                        "div",
                        { className: "custom-control custom-checkbox mr-sm-2" },
                        React.createElement("input", { type: "checkbox", className: "custom-control-input", onChange: function onChange() {
                            _this3.setState({ backBeam: !_this3.state.backBeam });
                          }, id: "custombackbeam" }),
                        React.createElement(
                          "label",
                          { className: "custom-control-label", htmlFor: "custombackbeam" },
                          "Raised Back Beam?"
                        )
                      )
                    ),
                    this.state.backBeam ? React.createElement(
                      "div",
                      { className: "col-auto my-1" },
                      React.createElement(
                        "select",
                        { id: "raisedBackBeam", name: "raisedBackBeam", className: "form-control", onChange: this.handleChange },
                        React.createElement(
                          "option",
                          { defaultValue: true },
                          "Choose..."
                        ),
                        backBeam.map(function (v, i) {
                          return React.createElement(
                            "option",
                            { value: v.value, key: i },
                            v.name
                          );
                        })
                      )
                    ) : ""
                  )
                ),
                React.createElement(
                  "div",
                  { className: "form-group col-md-4" },
                  React.createElement(
                    "label",
                    { htmlFor: "inputState" },
                    "SPA"
                  ),
                  React.createElement(
                    "select",
                    { id: "cleaningSystem", name: "spa", className: "form-control", onChange: this.handleChange },
                    React.createElement(
                      "option",
                      { defaultValue: true },
                      "Choose..."
                    ),
                    React.createElement(
                      "option",
                      null,
                      "None"
                    ),
                    spa.map(function (v, i) {
                      return React.createElement(
                        "option",
                        { value: v.value, key: i },
                        v.name
                      );
                    })
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "form-row" },
                React.createElement(
                  "div",
                  { className: "form-group col-md-4" },
                  React.createElement(
                    "div",
                    { className: "form-row align-items-center" },
                    React.createElement(
                      "div",
                      { className: "col-auto my-1" },
                      React.createElement(
                        "div",
                        { className: "custom-control custom-checkbox mr-sm-2" },
                        React.createElement("input", { type: "checkbox", className: "custom-control-input", onChange: function onChange() {
                            _this3.setState({ poolLight: !_this3.state.poolLight });
                          }, id: "customPoolLighting" }),
                        React.createElement(
                          "label",
                          { className: "custom-control-label", htmlFor: "customPoolLighting" },
                          "Pool Lighting?"
                        )
                      )
                    ),
                    this.state.poolLight ? React.createElement(
                      "div",
                      { className: "col-auto my-1" },
                      React.createElement(
                        "select",
                        { id: "poolLight", name: "poolLight", className: "form-control", onChange: this.handleChange },
                        React.createElement(
                          "option",
                          { defaultValue: true },
                          "Choose..."
                        ),
                        poolLight.map(function (v, i) {
                          return React.createElement(
                            "option",
                            { value: v.value, key: i },
                            v.name
                          );
                        })
                      )
                    ) : ""
                  )
                ),
                React.createElement(
                  "div",
                  { className: "form-group col-md-4" },
                  React.createElement(
                    "div",
                    { className: "form-row align-items-center" },
                    React.createElement(
                      "div",
                      { className: "col-auto my-1" },
                      React.createElement(
                        "div",
                        { className: "custom-control custom-checkbox mr-sm-2" },
                        React.createElement("input", { type: "checkbox", className: "custom-control-input", onChange: function onChange() {
                            _this3.setState({ columns: !_this3.state.columns });
                          }, id: "customControlAutosizing" }),
                        React.createElement(
                          "label",
                          { className: "custom-control-label", htmlFor: "customControlAutosizing" },
                          "Columns?"
                        )
                      )
                    ),
                    this.state.columns ? React.createElement(
                      "div",
                      { className: "col-auto my-1" },
                      React.createElement(
                        "label",
                        { className: "mr-sm-2 sr-only", htmlFor: "columns" },
                        "Preference"
                      ),
                      React.createElement(
                        "select",
                        { className: "custom-select mr-sm-2", name: "columns", id: "columns", onChange: this.handleChange },
                        React.createElement(
                          "option",
                          { defaultValue: true },
                          "Choose how many"
                        ),
                        React.createElement(
                          "option",
                          { value: "1" },
                          "1"
                        ),
                        React.createElement(
                          "option",
                          { value: "2" },
                          "2"
                        ),
                        React.createElement(
                          "option",
                          { value: "3" },
                          "3"
                        ),
                        React.createElement(
                          "option",
                          { value: "4" },
                          "4"
                        )
                      )
                    ) : ""
                  )
                ),
                React.createElement(
                  "div",
                  { className: "form-group col-md-4" },
                  React.createElement(
                    "div",
                    { className: "form-row align-items-center" },
                    React.createElement(
                      "div",
                      { className: "col-auto my-1" },
                      React.createElement(
                        "div",
                        { className: "custom-control custom-checkbox mr-sm-2" },
                        React.createElement("input", { type: "checkbox", className: "custom-control-input", id: "cwf", onChange: function onChange() {
                            _this3.setState({ waterFeatures: !_this3.state.waterFeatures });
                          } }),
                        React.createElement(
                          "label",
                          { className: "custom-control-label", htmlFor: "cwf" },
                          "Water Features?"
                        )
                      )
                    ),
                    this.state.waterFeatures ? React.createElement(
                      "div",
                      { className: "col-auto my-1" },
                      React.createElement(
                        "label",
                        { className: "mr-sm-2 sr-only", htmlFor: "preference" },
                        "Preference"
                      ),
                      React.createElement(
                        "select",
                        { id: "waterFeatures", name: "waterFeatures", className: "form-control", onChange: this.handleChange },
                        React.createElement(
                          "option",
                          { defaultValue: true },
                          "Choose water features"
                        ),
                        waterFeatureItems.map(function (v, i) {
                          return React.createElement(
                            "option",
                            { value: v.value, key: i },
                            v.name
                          );
                        })
                      )
                    ) : ""
                  )
                )
              )
            )
          )
        ),
        this.state.showModal ? React.createElement(
          "div",
          { style: { fontSize: "11px" } },
          React.createElement(
            "div",
            { "class": "modal", id: "exampleModalCenter", tabindex: "-1", role: "dialog", "aria-labelledby": "exampleModalCenterTitle", "aria-hidden": "true", style: { paddingRight: "15px", display: "block" } },
            React.createElement(
              "div",
              { "class": "modal-dialog modal-dialog-centered", role: "document", style: { width: "80%", maxWidth: "100%" } },
              React.createElement(
                "div",
                { "class": "modal-content" },
                React.createElement(
                  "div",
                  { "class": "modal-header" },
                  React.createElement(
                    "h5",
                    { "class": "modal-title", id: "exampleModalCenterTitle" },
                    "Kindly choose a subscription"
                  ),
                  React.createElement(
                    "button",
                    { type: "button", "class": "close", "data-dismiss": "modal", "aria-label": "Close", onClick: function onClick() {
                        _this3.setState({ showModal: false });
                      } },
                    React.createElement(
                      "span",
                      { "aria-hidden": "true" },
                      "\xD7"
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { "class": "modal-body" },
                  React.createElement(
                    "div",
                    { "class": "container" },
                    React.createElement(
                      "div",
                      { "class": "card-deck mb-3 text-center" },
                      React.createElement(
                        "div",
                        { "class": "card mb-4 shadow-sm" },
                        React.createElement(
                          "div",
                          { "class": "card-header" },
                          React.createElement(
                            "h4",
                            { "class": "my-0 font-weight-normal" },
                            "Silver"
                          )
                        ),
                        React.createElement(
                          "div",
                          { "class": "card-body" },
                          React.createElement(
                            "h1",
                            { "class": "card-title pricing-card-title" },
                            "$1,000"
                          ),
                          React.createElement(
                            "ul",
                            { "class": "list-unstyled mt-3 mb-4", style: { textAlign: "left" } },
                            React.createElement(
                              "li",
                              null,
                              "6 Standard Pool Designs Pool Specification List Drawn to Industry Scale 1/8\u2033."
                            ),
                            React.createElement(
                              "li",
                              null,
                              "Planning Checklist"
                            ),
                            React.createElement(
                              "li",
                              null,
                              "Standard Structural Engineering Plan wet sealed by engineer. (If applicable by municipality)"
                            )
                          ),
                          React.createElement(PayPalButton, { env: env,
                            client: client,
                            payment: pay_option_1,
                            commit: true,
                            onAuthorize: onAuthorize })
                        )
                      ),
                      React.createElement(
                        "div",
                        { "class": "card mb-4 shadow-sm" },
                        React.createElement(
                          "div",
                          { "class": "card-header" },
                          React.createElement(
                            "h4",
                            { "class": "my-0 font-weight-normal" },
                            "Gold"
                          )
                        ),
                        React.createElement(
                          "div",
                          { "class": "card-body" },
                          React.createElement(
                            "h1",
                            { "class": "card-title pricing-card-title" },
                            "$2,000 "
                          ),
                          React.createElement(
                            "ul",
                            { "class": "list-unstyled mt-3 mb-4", style: { textAlign: "left" } },
                            React.createElement(
                              "li",
                              null,
                              "6 Standard Pool Designs Pool Specification List Drawn to Industry Scale 1/8\u2033."
                            ),
                            React.createElement(
                              "li",
                              null,
                              "Planning Checklist"
                            ),
                            React.createElement(
                              "li",
                              null,
                              "Custom Pool Design with 2 free revision"
                            ),
                            React.createElement(
                              "li",
                              null,
                              "Pool Sequence/Bid Sheet"
                            ),
                            React.createElement(
                              "li",
                              null,
                              "Construction process Checklist"
                            ),
                            React.createElement(
                              "li",
                              null,
                              "Standard Structural Engineering Plan wet sealed by engineer. (If applicable by municipality)"
                            ),
                            React.createElement(
                              "li",
                              null,
                              "Permit Application & Submittal Check sheet"
                            ),
                            React.createElement(
                              "li",
                              null,
                              "Property Site Plan; complete with City / County details & notes"
                            ),
                            React.createElement(
                              "li",
                              null,
                              "Pool Equipment Spec Sheet w/ Quote"
                            ),
                            React.createElement(
                              "li",
                              null,
                              "In-Floor Cleaner Design (if applicable)"
                            ),
                            React.createElement(
                              "li",
                              null,
                              "Email & Phone Construction Support. Get answers to your construction & bid questions via emails Construction Support. Get answers to your construction & bid questions."
                            )
                          ),
                          React.createElement(PayPalButton, { env: env,
                            client: client,
                            payment: pay_option_2,
                            commit: true,
                            onAuthorize: onAuthorize })
                        )
                      )
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { "class": "modal-footer" },
                  React.createElement(
                    "button",
                    { type: "button", "class": "btn btn-secondary", onClick: function onClick() {
                        _this3.setState({ showModal: false });
                      }, "data-dismiss": "modal" },
                    "Close"
                  )
                )
              )
            )
          ),
          React.createElement("div", { "class": "modal-backdrop fade show" })
        ) : ""
      );
    }
  }]);

  return LikeButton;
}(React.Component);

var domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);