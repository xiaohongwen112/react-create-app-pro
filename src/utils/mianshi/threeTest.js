function convert(jsonObj) {
  // 请实现
  let allObj = {}
  const check = (item, els) => {
     const obj = {}
     const newD = item.split('_'); // 转化成数组
      const newF = newD.shift(); // 取出第一个
      let newKey, leftKey, newK = ''
      newD.forEach(el => {
        newKey = el[0].toUpperCase()
        leftKey = el.substring(1, el.length)
        newK =`${newK}${newF}${newKey}${leftKey}`
      })
      if(els) obj[newK] = els[item]
      else obj[newK] = jsonObj[item]
      if(typeof jsonObj[item] == 'object' ) {
        convert(jsonObj[item])
      }
      return obj
  }
  Object.keys(jsonObj).forEach(item => {
    if(jsonObj[item] instanceof Array) { // 判断是否为对象 
      (jsonObj[item] || []).forEach(els => {
        check(Object.keys(els)[0], els)
      })
    } else {
      allObj = check(item)
    }
  })
  return allObj
}


// ------ 测试 ---------
// console.log(convert({ 'a_bc_def': 1 }));
// console.log(convert({ 'a_bc_def': { 'foo_bar': 2 } }));
console.log(convert({ 'a_bc_def': [{ 'foo_bar': 2 }, { 'goo_xyz': 3 }] }));
