function debounce (fn, time) {
  let _time = null
  return function () {
    let _arg = arguments;
    let _this = this;
    if(_time) {
      clearTimeout(_time)
    }
    _time = setTimeout(() => {
      fn.apply(_this, _arg)
    }, time)
  }
}
// throttle throttle
function throttle(fn, time) {
  let isWorking = false;
  return function () {
    let _arg = arguments
    if(!isWorking) {
      isWorking = true;
      let _this = this;
      setTimeout(() => {
        fn.apply(_this,_arg)
        isWorking = false
      }, time)
    }
  }
}

// representational state transfer