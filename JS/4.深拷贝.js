function isObject (obj) {
  return Object.prototype.toString.call(obj) === "[object Object]"
}

function deepClone (target, hash = new WeakMap()) {
  if (!isObject(target)) {
    return target
  }
  if (hash.has(target)) {
    return target
  }
  let source = Array.isArray(target) ? [] : {}
  hash.set(target,source)
  for (let item in target) {
    if (Object.prototype.hasOwnProperty.call(target, item)) {
      if (isObject(target[item])) {
        source[item] = deepClone(target[item], hash)
      } else {
        source[item] = target[item]
      }
    }
  }
  return source
}
var a = {
	name: 'muyiy',
	book: {
		title: "You Don't Know JS",
		price: '45',
	},
	a1: undefined,
	a2: [1, 2, 3],
	a3: 123,
}

a.circleRef = a

let b = deepClone(a)
console.log(b)
console.log(b.a2 == a.a2)