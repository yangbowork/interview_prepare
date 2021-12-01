function isObject(target) {
	return typeof target === 'object' && target !== null
}

function deepClone(source, hash = new WeakMap()) {
	if (!isObject(source)) {
		return source
	}
	if (hash.has(source)) {
		return source
	}
	let target = Array.isArray(source) ? [] : {}
	hash.set(source, target)
	for (let item in source) {
		if (Object.prototype.hasOwnProperty.call(source, item)) {
			if (isObject(source[item])) {
				target[item] = deepClone(source[item], hash)
			} else {
				target[item] = source[item]
			}
		}
	}
	return target
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
