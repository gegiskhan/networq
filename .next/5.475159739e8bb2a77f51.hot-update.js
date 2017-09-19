webpackHotUpdate(5,{

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(60);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(61);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(63);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(27);

var _react2 = _interopRequireDefault(_react);

var _store = __webpack_require__(568);

var _store2 = _interopRequireDefault(_store);

var _actions = __webpack_require__(569);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Projects and Ideas\\Startversity\\networq\\components\\JS.js';


var Js = function (_React$Component) {
    (0, _inherits3.default)(Js, _React$Component);

    function Js(props) {
        (0, _classCallCheck3.default)(this, Js);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Js.__proto__ || (0, _getPrototypeOf2.default)(Js)).call(this, props));

        _this.state = {
            content: _this.props.initialContent
        };
        return _this;
    }

    (0, _createClass3.default)(Js, [{
        key: '_updateState',
        value: function _updateState(content) {
            this.setState({ content: content });
            _store2.default.dispatch((0, _actions.JS_SUBMIT)(this.state.content));
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
            }, 'JavaScript'), _react2.default.createElement('textarea', { style: { resize: 'none' },
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
                    return _store2.default.dispatch((0, _actions.JS_SUBMIT)(_this2.state.content));
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, 'Submit JS'));
        }
    }]);

    return Js;
}(_react2.default.Component);

exports.default = Js;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEpTLmpzIl0sIm5hbWVzIjpbInN0b3JlIiwiSlNfU1VCTUlUIiwiSnMiLCJwcm9wcyIsInN0YXRlIiwiY29udGVudCIsImluaXRpYWxDb250ZW50Iiwic2V0U3RhdGUiLCJkaXNwYXRjaCIsInJlc2l6ZSIsIm5vZGUiLCJfdXBkYXRlU3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUTs7Ozs7OztJQUVGLEE7Z0NBQ0Y7O2dCQUFBLEFBQVksT0FBTzs0Q0FBQTs7a0lBQUEsQUFDVCxBQUNOOztjQUFBLEFBQUs7cUJBQ1EsTUFBQSxBQUFLLE1BSEgsQUFFZixBQUFhLEFBQ1c7QUFEWCxBQUNUO2VBRVA7Ozs7O3FDLEFBRVksU0FBUSxBQUNqQjtpQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFmLEFBQWMsQUFDZDs0QkFBQSxBQUFNLFNBQVMsd0JBQVUsS0FBQSxBQUFLLE1BQTlCLEFBQWUsQUFBcUIsQUFDdkM7Ozs7aUNBRVE7eUJBQ0w7O21DQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLCtCQUFBLGNBQUEsY0FBVSxPQUFPLEVBQUUsUUFBbkIsQUFBaUIsQUFBVSxBQUNuQjswQkFBVSxrQkFBQSxBQUFDLE1BQUQ7MkJBQVEsT0FBQSxBQUFLLGFBQWEsS0FBQSxBQUFLLE9BQS9CLEFBQVEsQUFBOEI7QUFEeEQsQUFFUTtzQkFGUixBQUVjLEFBQ047c0JBSFIsQUFHYzs7OEJBSGQ7Z0NBQUEsQUFLSztBQUxMO29CQUtLLEFBQUssTUFQZCxBQUVJLEFBS2dCLEFBRWhCLDBCQUFBLGNBQUEsWUFBUSxTQUFTLG1CQUFBOzJCQUFNLGdCQUFBLEFBQU0sU0FBUyx3QkFBVSxPQUFBLEFBQUssTUFBcEMsQUFBTSxBQUFlLEFBQXFCO0FBQTNEOzhCQUFBO2dDQUFBO0FBQUE7ZUFWUixBQUNJLEFBU0ksQUFHWDs7Ozs7RUEzQlksZ0JBQU0sQSxBQStCdkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiSlMuanMiLCJzb3VyY2VSb290IjoiRTovUHJvamVjdHMgYW5kIElkZWFzL1N0YXJ0dmVyc2l0eS9uZXR3b3JxIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\Projects and Ideas\\Startversity\\networq\\components\\JS.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Projects and Ideas\\Startversity\\networq\\components\\JS.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40NzUxNTk3MzllOGJiMmE3N2Y1MS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9KUy5qcz84NTU5NDAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yZSBmcm9tICcuLi9yZWR1eC9zdG9yZSdcclxuaW1wb3J0IHtKU19TVUJNSVR9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnXHJcblxyXG5jbGFzcyBKcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLnByb3BzLmluaXRpYWxDb250ZW50XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBfdXBkYXRlU3RhdGUoY29udGVudCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29udGVudH0pXHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goSlNfU1VCTUlUKHRoaXMuc3RhdGUuY29udGVudCkpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDI+SmF2YVNjcmlwdDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgc3R5bGU9e3sgcmVzaXplOiAnbm9uZSd9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhub2RlKT0+dGhpcy5fdXBkYXRlU3RhdGUobm9kZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17MjB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXsxMDB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29udGVudH1cclxuICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHN0b3JlLmRpc3BhdGNoKEpTX1NVQk1JVCh0aGlzLnN0YXRlLmNvbnRlbnQpKX0+U3VibWl0IEpTPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9KUy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBOzs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTs7QUFIQTtBQUtBO0FBTEE7QUFLQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7Ozs7QUEzQkE7QUFDQTtBQThCQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9