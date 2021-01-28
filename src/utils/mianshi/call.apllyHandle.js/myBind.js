Function.prototype.myBind = function(context) {
  if(typeof this !== 'function') {
    throw new Error('not function');
  }

  const _this = this
  const args = Array.prototype.slice.call(arguments, 1);
  return function F() {
    if(this instanceof F) {
      return new _this(...args, ...arguments);
    } else {
      return _this.apply(context, [args, ...arguments])
    }
  } 
}