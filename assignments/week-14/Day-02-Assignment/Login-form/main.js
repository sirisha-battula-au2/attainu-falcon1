var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputField = function (_React$Component) {
    _inherits(InputField, _React$Component);

    function InputField() {
        _classCallCheck(this, InputField);

        return _possibleConstructorReturn(this, (InputField.__proto__ || Object.getPrototypeOf(InputField)).apply(this, arguments));
    }

    _createClass(InputField, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "label",
                    { htmlFor: "exampleInputEmail1" },
                    "Email address"
                ),
                React.createElement("input", { type: "email", className: "form-control", id: "exampleInputEmail1", "aria-describedby": "emailHelp", placeholder: "Enter email" })
            );
        }
    }]);

    return InputField;
}(React.Component);

var Password = function (_React$Component2) {
    _inherits(Password, _React$Component2);

    function Password() {
        _classCallCheck(this, Password);

        return _possibleConstructorReturn(this, (Password.__proto__ || Object.getPrototypeOf(Password)).apply(this, arguments));
    }

    _createClass(Password, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "label",
                    { htmlFor: "exampleInputPassword1" },
                    "Password"
                ),
                React.createElement("input", { type: "password", className: "form-control", id: "exampleInputPassword1", placeholder: "Password" })
            );
        }
    }]);

    return Password;
}(React.Component);

var Button = function (_React$Component3) {
    _inherits(Button, _React$Component3);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "button",
                { type: "submit", className: "btn btn-primary" },
                "Submit"
            );
        }
    }]);

    return Button;
}(React.Component);

var Login = function (_React$Component4) {
    _inherits(Login, _React$Component4);

    function Login() {
        _classCallCheck(this, Login);

        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
    }

    _createClass(Login, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "container-fluid", style: { marginTop: '5%' } },
                React.createElement(
                    "div",
                    { className: "col-md-5 offset-md-4" },
                    React.createElement(InputField, null),
                    React.createElement(Password, null),
                    React.createElement(Button, null)
                )
            );
        }
    }]);

    return Login;
}(React.Component);

ReactDOM.render(React.createElement(Login, null), document.getElementById("app"));