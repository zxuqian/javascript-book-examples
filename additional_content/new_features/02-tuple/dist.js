"use strict";

var _recordTuplePolyfill = require("@bloomberg/record-tuple-polyfill");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var tuple = (0, _recordTuplePolyfill.Tuple)(1, 2, 3, 4);
console.log(tuple); // 访问 tuple 的值

console.log(tuple[0]); // 不能直接修改 tuple的值
// tuple[0] = 5;
// console.log(tuple);
// 可以使用 with()

var newTuple = tuple["with"](0, 5);
console.log(newTuple, newTuple === tuple); // 也可以使用 array 方法

console.log(tuple.map(function (x) {
  return x * 2;
})); // 或者使用 spread 运算符，注意 tuple 里只能包含tuple 和record类型

var newTuple2 = _recordTuplePolyfill.Tuple.apply(void 0, _toConsumableArray(tuple).concat([5])); // const newTuple2 = #[...tuple, 5, [6, 7]]; // 错误


console.log(newTuple2); // 也可以解构赋值

var _tuple = _slicedToArray(tuple, 2),
    a = _tuple[0],
    b = _tuple[1];

console.log(a, b);
