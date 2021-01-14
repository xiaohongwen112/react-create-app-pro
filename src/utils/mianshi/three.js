function convert(jsonObj: object | object[]) {
  // 请实现
  const check = (item: string) => {
     const newD = item.split('_'); // 转化成数组
      const newF = newD.shift(); // 取出第一个
      let newKey, leftKey
      newD.forEach(el => {
        newKey = el[0].toUpperCase()
        leftKey = el.substring(1, el.length)
      })
      const newK =`${newF}${newKey}${leftKey}`
      return {newK: jsonObj[item]}
  }
  Object.keys(jsonObj).forEach(item => {
    if(jsonObj[item] instanceof Array) { // 判断是否为对象 
      (jsonObj[item] || []).forEach(els => {
        convert(els)
      })
    } else {
     check(item)
    }
  })
}


// ------ 测试 ---------
console.log(convert({ 'a_bc_def': 1 }));
console.log(convert({ 'a_bc_def': { 'foo_bar': 2 } }));
console.log(convert({ 'a_bc_def': [{ 'foo_bar': 2 }, { 'goo_xyz': 3 }] }));
