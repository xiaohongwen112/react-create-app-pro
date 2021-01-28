Function.prototype.myApply = (context) => {
  if(typeof this !== 'function') {
    throw new Error('this is not a function')
  }

  let result

  context = context || window

  context.fn = this
  if(arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}