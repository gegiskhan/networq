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

var _Result = require('../components/Result');

var _Result2 = _interopRequireDefault(_Result);

var _Css = require('../components/Css');

var _Css2 = _interopRequireDefault(_Css);

var _JS = require('../components/JS');

var _JS2 = _interopRequireDefault(_JS);

var _Html = require('../components/Html');

var _Html2 = _interopRequireDefault(_Html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Projects and Ideas\\Startversity\\networq\\pages\\index.js?entry';


var Index = function (_React$Component) {
    (0, _inherits3.default)(Index, _React$Component);

    function Index() {
        (0, _classCallCheck3.default)(this, Index);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this));

        _this.state = {
            type: 'result'
        };
        return _this;
    }

    (0, _createClass3.default)(Index, [{
        key: '_changeTitle',
        value: function _changeTitle(type) {
            this.setState({ type: type });
        }
    }, {
        key: '_renderElement',
        value: function _renderElement() {
            switch (this.state.type) {
                case 'result':
                    return _react2.default.createElement(_Result2.default, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 21
                        }
                    });
                    break;
                case 'html':
                    return _react2.default.createElement(_Html2.default, { initialContent: "<p>HTML Rendered</p>", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 23
                        }
                    });
                    break;
                case 'css':
                    return _react2.default.createElement(_Css2.default, { initialContent: "p{color:green;}", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 25
                        }
                    });
                    break;
                default:
                    return _react2.default.createElement(_JS2.default, { initialContent: "console.log('JavaScript rendered!')", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        }
                    });
                    break;

            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('button', { onClick: function onClick() {
                    return _this2._changeTitle('result');
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, 'Result'), _react2.default.createElement('button', { onClick: function onClick() {
                    return _this2._changeTitle('html');
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, 'HTML'), _react2.default.createElement('button', { onClick: function onClick() {
                    return _this2._changeTitle('css');
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, 'CSS'), _react2.default.createElement('button', { onClick: function onClick() {
                    return _this2._changeTitle('js');
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, 'JavaScript'), this._renderElement());
        }
    }]);

    return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsIlJlc3VsdCIsIkNzcyIsIkpzIiwiSHRtbCIsIkluZGV4Iiwic3RhdGUiLCJ0eXBlIiwic2V0U3RhdGUiLCJfY2hhbmdlVGl0bGUiLCJfcmVuZGVyRWxlbWVudCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBRVAsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0ksQUFFRDttQ0FDRjs7cUJBQWE7NENBQUE7O2tJQUVUOztjQUFBLEFBQUs7a0JBRkksQUFFVCxBQUFhLEFBQ0g7QUFERyxBQUNUO2VBRVA7Ozs7O3FDQUNZLEEsTUFBSyxBQUNkO2lCQUFBLEFBQUssU0FBUyxFQUFDLE1BQWYsQUFBYyxBQUNqQjs7Ozt5Q0FFZSxBQUNaO29CQUFRLEtBQUEsQUFBSyxNQUFiLEFBQW1CLEFBQ2Y7cUJBQUEsQUFBSyxBQUFVOzJDQUFRLEFBQUM7O3NDQUFEO3dDQUFSLEFBQVEsQUFDUDtBQURPO0FBQUEscUJBQUE7QUFFdkI7cUJBQUEsQUFBSyxBQUFROzJDQUFRLEFBQUMsZ0NBQUssZ0JBQU4sQUFBc0I7c0NBQXRCO3dDQUFSLEFBQVEsQUFDVDtBQURTO3FCQUFBO0FBRXJCO3FCQUFBLEFBQUssQUFBTzsyQ0FBUSxBQUFDLCtCQUFJLGdCQUFMLEFBQXFCO3NDQUFyQjt3Q0FBUixBQUFRLEFBQ1I7QUFEUTtxQkFBQTtBQUVwQjtBQUFTOzJDQUFRLEFBQUMsOEJBQUcsZ0JBQUosQUFBb0I7c0NBQXBCO3dDQUFSLEFBQVEsQUFDTDtBQURLO3FCQUFBO0FBUHJCLEFBV0g7Ozs7OztpQ0FFTzt5QkFDSjs7bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBLFlBQVEsU0FBUyxtQkFBQTsyQkFBSSxPQUFBLEFBQUssYUFBVCxBQUFJLEFBQWtCO0FBQXZDOzhCQUFBO2dDQUFBO0FBQUE7ZUFESixBQUNJLEFBQ0EsMkJBQUEsY0FBQSxZQUFRLFNBQVMsbUJBQUE7MkJBQUksT0FBQSxBQUFLLGFBQVQsQUFBSSxBQUFrQjtBQUF2Qzs4QkFBQTtnQ0FBQTtBQUFBO2VBRkosQUFFSSxBQUNBLHlCQUFBLGNBQUEsWUFBUSxTQUFTLG1CQUFBOzJCQUFJLE9BQUEsQUFBSyxhQUFULEFBQUksQUFBa0I7QUFBdkM7OEJBQUE7Z0NBQUE7QUFBQTtlQUhKLEFBR0ksQUFDQSx3QkFBQSxjQUFBLFlBQVEsU0FBUyxtQkFBQTsyQkFBSSxPQUFBLEFBQUssYUFBVCxBQUFJLEFBQWtCO0FBQXZDOzhCQUFBO2dDQUFBO0FBQUE7ZUFKSixBQUlJLEFBQ0Msb0JBTlQsQUFDSSxBQUtLLEFBQUssQUFHakI7Ozs7O0VBbkNlLGdCQUFNLEEsQUF1QzFCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L1Byb2plY3RzIGFuZCBJZGVhcy9TdGFydHZlcnNpdHkvbmV0d29ycSJ9