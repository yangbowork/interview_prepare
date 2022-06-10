function _new (func, ...args) {
  let obj = Object.create(func.prototype)
  let result = func.call(obj, ...args)
  if (result !== null && /^(object|function)$/.test(typeof result)) {
    return result
  }
  return obj
}

function __new (func) {
  
}

function Dog (name, age) {
  this.name = name
  this.age = age
  // return { a: 1 }
}
Dog.prototype.sayName = function () {
  console.log(this.name)
}
Dog.prototype.sayAge = function () {
  console.log(this.age)
}

let sanmao = _new(Dog, 'sanmao')
console.log(sanmao)
let sanmao1 = new Dog('sanmao')
console.log(sanmao1)