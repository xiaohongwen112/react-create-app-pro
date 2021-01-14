"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function convert(jsonObj) {
  // 请实现
  var allObj = {};

  var check = function check(item, els) {
    var obj = {};
    var newD = item.split('_'); // 转化成数组

    var newF = newD.shift(); // 取出第一个

    var newKey,
        leftKey,
        newK = '';
    newD.forEach(function (el) {
      newKey = el[0].toUpperCase();
      leftKey = el.substring(1, el.length);
      newK = "".concat(newK).concat(newF).concat(newKey).concat(leftKey);
    });
    if (els) obj[newK] = els[item];else obj[newK] = jsonObj[item];

    if (_typeof(jsonObj[item]) == 'object') {
      convert(jsonObj[item]);
    }

    return obj;
  };

  Object.keys(jsonObj).forEach(function (item) {
    if (jsonObj[item] instanceof Array) {
      // 判断是否为对象 
      (jsonObj[item] || []).forEach(function (els) {
        check(Object.keys(els)[0], els);
      });
    } else {
      allObj = check(item);
    }
  });
  return allObj;
} // ------ 测试 ---------
// console.log(convert({ 'a_bc_def': 1 }));
// console.log(convert({ 'a_bc_def': { 'foo_bar': 2 } }));


console.log(convert({
  'a_bc_def': [{
    'foo_bar': 2
  }, {
    'goo_xyz': 3
  }]
}));