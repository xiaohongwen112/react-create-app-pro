"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var trap = function trap(height) {
  var all = 0;
  var maxH = Math.max.apply(Math, _toConsumableArray(height));
  var heightLen = height.length;

  for (var k = 1; k <= maxH; k++) {
    var _loop = function _loop(i) {
      var floor = k - 1;
      var preN = height[i - 1] - floor;
      var nowN = height[i] - floor;
      var nestN = height[i + 1] - floor;

      var arr = _toConsumableArray(height).splice(i, i);

      var preArr = _toConsumableArray(height).splice(i, i).filter(function (e) {
        return e > floor;
      });

      var newArr = arr.filter(function (e) {
        return e > floor;
      });

      if (preN >= k && nestN >= k && nowN < preN && nowN === floor && newArr.length > 0 && preArr.length > 0) {
        // if(nowN < preN && nowN < floor &&  newArr.length> 0 && preArr.length > 0) {
        all++;
      }
    };

    for (var i = 0; i < heightLen; i++) {
      _loop(i);
    }
  }

  return all;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));