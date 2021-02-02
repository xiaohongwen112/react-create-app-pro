// Promise是一种异步编程的处理方案
// 有三种状态，pending（进行中）、resolved（已完成）、rejected（已失败）
// js原生实现promise.all和promise.race
// all
// 按照你写的先后顺序来输出的
const all = function (iterable) {
  return new Promise((resolve,reject)=>{
      let count = 0,ans = new Array(count)
      for(const i in iterable){  // 遍历所有的对象
          const v = iterable[i]
          if(typeof v === 'object' && typeof v.then ==='function'){ // 如果当前这个对象是promise类型
              v.then((res)=>{
                  ans[i] = res
                  if(--count===0) resolve(ans) // 当resolve时就count就-1，直到为0时整个promise变为resolve状态
              },reject) // 如果当前这个promise实例的状态为reject，整个promise就变为reject状态。
              count++ // 计算所有的promise类型的个数
          }else{
              ans[i] = v
          }
      }
  })
}

//race
//时间输出的谁执行的快就输出谁
const race = function (iterable) {
  return new Promise((resolve,reject)=>{
      for(const i in iterable){
          const v = iterable[i]
          if (typeof v === 'object' && typeof v.then === 'function') {
              v.then(resolve, reject)
          } else {
              resolve(v)
          }
      }
  })
}

let p1 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve();
  }, 1000)
})

let p2 = 2
let p3 = '1'

all([p1, p2, p3]).then((res) =>{
  console.log(res)
}).catch((err) => {
  console.log(err)
})