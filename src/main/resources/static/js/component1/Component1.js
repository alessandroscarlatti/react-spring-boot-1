var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component1 = function (_React$Component) {
    _inherits(Component1, _React$Component);

    function Component1() {
        _classCallCheck(this, Component1);

        return _possibleConstructorReturn(this, (Component1.__proto__ || Object.getPrototypeOf(Component1)).apply(this, arguments));
    }

    _createClass(Component1, [{
        key: "render",
        value: function render() {

            for (var i = 0; i < 10; i++) {
                console.log("stuff");
            }

            return React.createElement(
                "div",
                null,
                "asdf what do you know await this amazing really amazing stuff and even more asdf qwer qwre qwerew"
            );
        }
    }]);

    return Component1;
}(React.Component);

ReactDOM.render(React.createElement(Component1, null), document.getElementById('root'));