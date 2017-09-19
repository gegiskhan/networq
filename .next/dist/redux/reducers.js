'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
    html: '',
    css: '',
    js: ''
};

var CodeCombiner = function CodeCombiner() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case 'HTML_SUBMIT':
            return (0, _assign2.default)({}, state, { html: action.html });
        case 'CSS_SUBMIT':
            return (0, _assign2.default)({}, state, { css: action.css });
        case 'JS_SUBMIT':
            return (0, _assign2.default)({}, state, { js: action.js });
        default:
            return state;
    }
};

exports.default = CodeCombiner;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4XFxyZWR1Y2Vycy5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJodG1sIiwiY3NzIiwianMiLCJDb2RlQ29tYmluZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU07VUFBZSxBQUVqQjtTQUZpQixBQUdqQjtRQUhKLEFBQXFCO0FBQUEsQUFDakI7O0FBS0osSUFBTSxlQUFlLFNBQWYsQUFBZSxlQUFrQztRQUFqQyxBQUFpQyw0RUFBekIsQUFBeUI7UUFBWCxBQUFXLG1CQUNuRDs7WUFBTyxPQUFQLEFBQWMsQUFDVjthQUFBLEFBQUssQUFBZTttQkFBTyxzQkFBQSxBQUFjLElBQWQsQUFBa0IsT0FBTyxFQUFDLE1BQU0sT0FBdkMsQUFBTyxBQUF5QixBQUFjLEFBQ2xFO2FBQUEsQUFBSyxBQUFjO21CQUFPLHNCQUFBLEFBQWMsSUFBZCxBQUFrQixPQUFPLEVBQUMsS0FBSyxPQUF0QyxBQUFPLEFBQXlCLEFBQWEsQUFDaEU7YUFBQSxBQUFLLEFBQWE7bUJBQU8sc0JBQUEsQUFBYyxJQUFkLEFBQWtCLE9BQU8sRUFBQyxJQUFJLE9BQXJDLEFBQU8sQUFBeUIsQUFBWSxBQUM5RDtBQUFTO21CQUpiLEFBSWEsQUFBTyxBQUV2Qjs7QUFQRCxBQVNBOztrQkFBQSxBQUFlIiwiZmlsZSI6InJlZHVjZXJzLmpzIiwic291cmNlUm9vdCI6IkU6L1Byb2plY3RzIGFuZCBJZGVhcy9TdGFydHZlcnNpdHkvbmV0d29ycSJ9