'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _store = require('../redux/store');

var _store2 = _interopRequireDefault(_store);

var _actions = require('../redux/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Projects and Ideas\\Startversity\\networq\\components\\Css.js';


var Css = function (_React$Component) {
    (0, _inherits3.default)(Css, _React$Component);

    function Css(props) {
        (0, _classCallCheck3.default)(this, Css);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Css.__proto__ || (0, _getPrototypeOf2.default)(Css)).call(this, props));

        _this.state = {
            content: _this.props.initialContent
        };
        return _this;
    }

    (0, _createClass3.default)(Css, [{
        key: '_updateState',
        value: function _updateState(content) {
            this.setState({ content: content });
            _store2.default.dispatch((0, _actions.CSS_SUBMIT)(this.state.content));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, 'CSS'), _react2.default.createElement('textarea', { style: { resize: 'none' },
                onChange: function onChange(node) {
                    return _this2._updateState(node.target.value);
                },
                rows: 20,
                cols: 100,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, this.state.content), _react2.default.createElement('button', { onClick: function onClick() {
                    return _store2.default.dispatch((0, _actions.CSS_SUBMIT)(_this2.state.content));
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, 'Submit CSS'));
        }
    }]);

    return Css;
}(_react2.default.Component);

exports.default = Css;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENzcy5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsIkNTU19TVUJNSVQiLCJDc3MiLCJwcm9wcyIsInN0YXRlIiwiY29udGVudCIsImluaXRpYWxDb250ZW50Iiwic2V0U3RhdGUiLCJkaXNwYXRjaCIsInJlc2l6ZSIsIm5vZGUiLCJfdXBkYXRlU3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUTs7Ozs7OztJQUVGLEE7aUNBQ0Y7O2lCQUFBLEFBQVksT0FBTzs0Q0FBQTs7b0lBQUEsQUFDVCxBQUNOOztjQUFBLEFBQUs7cUJBQ1EsTUFBQSxBQUFLLE1BSEgsQUFFZixBQUFhLEFBQ1c7QUFEWCxBQUNUO2VBRVA7Ozs7O3FDLEFBRVksU0FBUSxBQUNqQjtpQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFmLEFBQWMsQUFDZDs0QkFBQSxBQUFNLFNBQVMseUJBQVcsS0FBQSxBQUFLLE1BQS9CLEFBQWUsQUFBc0IsQUFDeEM7Ozs7aUNBRVE7eUJBQ0w7O21DQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHdCQUFBLGNBQUEsY0FBVSxPQUFPLEVBQUUsUUFBbkIsQUFBaUIsQUFBVSxBQUNuQjswQkFBVSxrQkFBQSxBQUFDLE1BQUQ7MkJBQVEsT0FBQSxBQUFLLGFBQWEsS0FBQSxBQUFLLE9BQS9CLEFBQVEsQUFBOEI7QUFEeEQsQUFFUTtzQkFGUixBQUVjLEFBQ047c0JBSFIsQUFHYzs7OEJBSGQ7Z0NBQUEsQUFLSztBQUxMO29CQUtLLEFBQUssTUFQZCxBQUVJLEFBS2dCLEFBRWhCLDBCQUFBLGNBQUEsWUFBUSxTQUFTLG1CQUFBOzJCQUFNLGdCQUFBLEFBQU0sU0FBUyx5QkFBVyxPQUFBLEFBQUssTUFBckMsQUFBTSxBQUFlLEFBQXNCO0FBQTVEOzhCQUFBO2dDQUFBO0FBQUE7ZUFWUixBQUNJLEFBU0ksQUFHWDs7Ozs7RUEzQmEsZ0JBQU0sQSxBQStCeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQ3NzLmpzIiwic291cmNlUm9vdCI6IkU6L1Byb2plY3RzIGFuZCBJZGVhcy9TdGFydHZlcnNpdHkvbmV0d29ycSJ9