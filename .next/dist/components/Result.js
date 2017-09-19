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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Projects and Ideas\\Startversity\\networq\\components\\Result.js';


var Result = function (_React$Component) {
    (0, _inherits3.default)(Result, _React$Component);

    function Result(props) {
        (0, _classCallCheck3.default)(this, Result);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Result.__proto__ || (0, _getPrototypeOf2.default)(Result)).call(this, props));

        _this.state = {
            html: '',
            js: '',
            css: ''
        };
        return _this;
    }

    (0, _createClass3.default)(Result, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var stored = _store2.default.getState();
            document.getElementById('renderSc').innerHTML = '<style>' + _store2.default.getState().css + '</style>\n                      ' + _store2.default.getState().html + '<h3 style="color:aqua;"></h3>';
            eval(_store2.default.getState().js);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                id: 'renderSc',
                style: {
                    height: '90vh',
                    width: '50vw',
                    border: 'solid 1px black'
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            });
        }
    }]);

    return Result;
}(_react2.default.Component);

Result.unsubscribe = _store2.default.subscribe(function () {
    return console.log(_store2.default.getState());
});

exports.default = Result;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlc3VsdC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsIlJlc3VsdCIsInByb3BzIiwic3RhdGUiLCJodG1sIiwianMiLCJjc3MiLCJzdG9yZWQiLCJnZXRTdGF0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJldmFsIiwiaGVpZ2h0Iiwid2lkdGgiLCJib3JkZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7Ozs7Ozs7O0ksQUFFRDtvQ0FDRjs7b0JBQUEsQUFBWSxPQUFPOzRDQUFBOzswSUFBQSxBQUNULEFBQ047O2NBQUEsQUFBSztrQkFBUSxBQUNILEFBQ047Z0JBRlMsQUFFTCxBQUNKO2lCQUxXLEFBRWYsQUFBYSxBQUdKO0FBSEksQUFDVDtlQUlQOzs7Ozs0Q0FJbUIsQUFDaEI7Z0JBQUksU0FBUyxnQkFBYixBQUFhLEFBQU0sQUFDbkI7cUJBQUEsQUFDSyxlQURMLEFBQ29CLFlBRHBCLEFBRUssd0JBQXNCLGdCQUFBLEFBQU0sV0FGakMsQUFFNEMsMkNBQzVCLGdCQUFBLEFBQU0sV0FIdEIsQUFHaUMsT0FDakM7aUJBQUssZ0JBQUEsQUFBTSxXQUFYLEFBQXNCLEFBQ3pCOzs7O2lDQUVRLEFBQ0w7O29CQUNJLEFBQ08sQUFDSDs7NEJBQU8sQUFDQyxBQUNSOzJCQUZPLEFBRUEsQUFDUDs0QkFMSixBQUVXLEFBR0M7QUFIRCxBQUNQOzhCQUhKO2dDQURKLEFBQ0ksQUFRUDtBQVJPO0FBQ0ksYUFESjs7Ozs7RUF2QlMsZ0JBQU0sQTs7QUFBckIsQSxPLEFBVUssOEJBQWMsQUFBTSxVQUFVLFlBQUE7V0FBTSxRQUFBLEFBQVEsSUFBSSxnQkFBbEIsQUFBTSxBQUFZLEFBQU07QUFBeEMsQSxBQXdCekIsQ0F4QnlCOztrQkF3QnpCLEFBQWUiLCJmaWxlIjoiUmVzdWx0LmpzIiwic291cmNlUm9vdCI6IkU6L1Byb2plY3RzIGFuZCBJZGVhcy9TdGFydHZlcnNpdHkvbmV0d29ycSJ9