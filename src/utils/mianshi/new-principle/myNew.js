function myNew (fn, ...args){
  let obj = {}
  if(fn) {
    obj.__Proto__ = fn.prototype
  } else {
    throw new Error('not detecte any function')
  }
  let result = fn.apply(obj, args)
  return result instanceof Object ? result : obj
}