// // var obj = new Proxy({}, {
// //   get: function (target, propKey, receiver) {
// //     console.log(`getting ${propKey}!`);
// //     return Reflect.get(target, propKey, receiver);
// //   },
// //   set: function (target, propKey, value, receiver) {
// //     console.log(`setting ${propKey}!`);
// //     return Reflect.set(target, propKey, value, receiver);
// //   }
// // });


// // obj.a = 1
// // obj.a++


// // const objs = new Proxy({}, {
// //   get: () => {
// //    console.log('objs get')
// //    return 111
// //   },
// //   set: () => {
// //     console.log('objs set')
// //     return 222
// //   }
// // })

// // objs.b = 2
// // objs.b++
// // console.log(objs.b)


// let validator = {
//   get: function(target, propKey) {
//     if (propKey in target) {
//       return target[propKey];
//     } else {
//       // throw new ReferenceError("Prop name \"" + propKey + "\" does not exist.");
//     }
//   },
//   set: function(obj, prop, value) {
//     console.log(111)
//     if (prop === 'age') {
//       if (!Number.isInteger(value)) {
//         throw new TypeError('The age is not an integer');
//       }
//       if (value > 200) {
//         throw new RangeError('The age seems invalid');
//       }
//     }

//     // 对于满足条件的 age 属性以及其他属性，直接保存
//     obj[prop] = value;
//   }
// };

// let person = new Proxy({}, validator);

// person.age = 100;
// person.a++

// console.log(person.age)  // 100
// console.log(person.a)  // 100
// // person.age = 'young' // 报错
// // person.age = 300 // 报错


/** 
 * in判断的是对象的所有属性，包括对象自身及其原型的属性； 
    而hasOwnProperty则是判断对象自身是否具有某个属性。
 */
class AA {
  constructor() {
    this.names = 1
  }
  name() {
    console.log('1234')
  }
}
function BB() {}
BB.prototype.names = 'xiao'
BB.prototype.name = () => {
  console.log('b name')
}
const b = new BB();
const a = new AA();
console.log(b.hasOwnProperty("names")); //false
console.log("name" in b); //true
console.log(b.names); //"allen"

console.log("name" in a); //true
console.log(a, b); //false
console.log(a.hasOwnProperty("names")); //false

// console.log(a.__proto__ === AA.prototype)
// console.log(Object.prototype.hasOwnProperty.call(AA, a))
