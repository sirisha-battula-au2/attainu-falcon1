var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calculator = function (_React$Component) {
    _inherits(Calculator, _React$Component);

    function Calculator(props) {
        _classCallCheck(this, Calculator);

        var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

        _this.state = {
            number1: 0,
            number2: 0,
            result: 0
        };

        _this.onChangeNumberOne = _this.onChangeNumberOne.bind(_this);
        _this.onChangeNumberTwo = _this.onChangeNumberTwo.bind(_this);
        _this.add = _this.add.bind(_this);
        _this.subtract = _this.subtract.bind(_this);
        _this.multiply = _this.multiply.bind(_this);
        _this.divide = _this.divide.bind(_this);
        return _this;
    }

    _createClass(Calculator, [{
        key: "onChangeNumberOne",
        value: function onChangeNumberOne(event) {
            var _this2 = this;

            this.setState({
                number1: parseInt(event.target.value)
            }, function () {
                console.log(_this2.state.number1);
            });
        }
    }, {
        key: "onChangeNumberTwo",
        value: function onChangeNumberTwo(event) {
            this.setState({
                number2: parseInt(event.target.value)
            });
        }
    }, {
        key: "add",
        value: function add() {
            var num1 = this.state.number1;
            var num2 = this.state.number2;
            var result = num1 + num2;
            this.setState({
                result: result
            });
        }
    }, {
        key: "subtract",
        value: function subtract() {
            var num1 = this.state.number1;
            var num2 = this.state.number2;
            var result = num1 - num2;
            this.setState({
                result: result
            });
        }
    }, {
        key: "multiply",
        value: function multiply() {
            var num1 = this.state.number1;
            var num2 = this.state.number2;
            var result = num1 * num2;
            this.setState({
                result: result
            });
        }
    }, {
        key: "divide",
        value: function divide() {
            var num1 = this.state.number1;
            var num2 = this.state.number2;
            var result = num1 / num2;
            this.setState({
                result: result
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "container", style: { marginTop: '10%' } },
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-md-4 offset-md-4", style: { backgroundColor: 'orange' } },
                        React.createElement(
                            "h3",
                            null,
                            "CALCULATOR"
                        ),
                        React.createElement("input", { type: "number", className: "form-control", onChange: this.onChangeNumberOne }),
                        React.createElement("br", null),
                        React.createElement("input", { type: "number", className: "form-control", onChange: this.onChangeNumberTwo }),
                        React.createElement("br", null),
                        React.createElement(
                            "div",
                            { className: "row justify-content-around" },
                            React.createElement(
                                "button",
                                { onClick: this.add },
                                "+"
                            ),
                            React.createElement(
                                "button",
                                { onClick: this.subtract },
                                "-"
                            ),
                            React.createElement(
                                "button",
                                { onClick: this.multiply },
                                "*"
                            ),
                            React.createElement(
                                "button",
                                { onClick: this.divide },
                                "/"
                            )
                        ),
                        React.createElement(
                            "h3",
                            null,
                            "Result is:",
                            this.state.result
                        )
                    )
                )
            );
        }
    }]);

    return Calculator;
}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.getElementById("app"));