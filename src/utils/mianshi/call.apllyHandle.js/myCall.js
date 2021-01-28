Function.prototype.myCall = (context) => {
  // 判断调用的myucall是不是一个函数
  // this指向判断
  if(typeof this !== 'function') {
    throw new Error('not a function');
  }

  // 不传参的情况
  context = context || window

  // 保存this 
  context.fn = this
  // 保存参数

  let args = Array.from(arguments).slice(1) // slice 不改变自身数组 splice 改变 跟 shift pop 类似

  let result = context.fn(...args)
  delete context.fn
  return result
}