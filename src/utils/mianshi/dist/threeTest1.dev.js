"use strict";

// function convert (str) {
//   var p = /_[\w]/g
//   var match = str.match(p)
//   match.forEach((item) => {
//     str = str.replace(item, item.split('')[1].toUpperCase())
//   })
//   return str
// }
// convert('deploy_list_items')  // "deployListItems"
// ------ 测试 ---------
// console.log(convert({ 'a_bc_def': 1 }));
// console.log(convert({ 'a_bc_def': { 'foo_bar': 2 } }));
// console.log(convert({ 'a_bc_def': [{ 'foo_bar': 2 }, { 'goo_xyz': 3 }] }));
// const convert = (str) => { // 数组拼接
//   const newD = str.split('_'); // 转化成数组
//   const newF = newD.shift(); // 取出第一个
//   let newKey, leftKey, newK = ''
//   newD.forEach(el => {
//     newKey = el[0].toUpperCase()
//     leftKey = el.substring(1, el.length)
//     newK =`${newK}${newKey}${leftKey}`
//   })
//   return `${newF}${newK}`
// }
var convert = function convert(str) {
  //正则
  if (typeof str !== 'string') str = JSON.stringify(str);
  var p = /_[\w]/g;
  var matchVal = str.match(p); // 返回一个数组

  matchVal.forEach(function (e) {
    return str = str.replace(e, e.split('')[1].toUpperCase());
  });
  return JSON.parse(str);
}; // const convert = (data) => {
//   const obj = {};
//   if(typeof data == 'object' || data !== null) { // null 在二进制中表现 000 开头，被误判为object
//     Object.keys(data).forEach(el => {
//       const newKey = convertc(el)
//       if(data[el] instanceof Array) {
//         convert(data[el])
//       } else obj[newKey] = data[el]
//     })
//   }
//   return obj
// }
// console.log(convert({ 'a_bc_def': 1, 'c_c_c':2 }));
// console.log(convert({ 'a_bc_def': { 'foo_bar': 2 } }));


console.log(convert({
  'a_bc_def': [{
    'foo_bar': 2
  }, {
    'goo_xyz': 3
  }]
})); // console.log(convert('a_bc_def'));