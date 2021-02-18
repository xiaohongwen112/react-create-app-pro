const resquestFn = (flag) => {
  return new Promise((resolve, reject) => {
    if(flag) {
      setTimeout(() => {
        data = {success: 1}
        resolve(data)
      }, 1000)
    } else {
      reject('error111')
    }
  })
}

"use strict"
var  a = resquestFn(true);
var b = resquestFn(true)

a.then((data) => {
  console.log('then', data)
  flag = true
  return Promise.reject('出错了')
}).then((data1) => {
  console.log('then1', data1)
}).finally((data) => {
  console.log('finally', data)
}).catch((err) => {
  console.log('catch', err)
})