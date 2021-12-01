// Function.prototype.call = function call(context, ...params) {
// 	context == null ? (context = window) : null
// 	!/^(function|object)$/.test(typeof context)
// 		? (context = Object(context))
// 		: null
// 	let key = Symbol('KEY')
// 	context[key] = this
// 	let result = context[key](...params)
// 	delete context[key]
// 	return result
// }

// let obj = {
// 	name: 'yb-tututu',
// 	age: 11,
// }

// function fn(x, y) {
// 	console.log(this)
// 	return x + y
// }

// let result = fn.call(0, 10, 20)
// console.log(result)

//  ==============================================================
Function.prototype.call = function call(context, ...params) {
	context == null ? (context = window) : null
	!/^(function|object)$/.test(typeof context)
		? (context = Object(context))
		: null
	let key = Symbol('KEY')
	context[key] = this
	let result = context[key](...params)
	delete context[key]
	return result
}

Function.prototype.bind = function bind(context, ...params) {
	let that = this
	return function (...arg) {
		params = params.concat(arg)
		let result = that.call(context, ...params)
		return result
	}
}

let obj = {
	name: 'yb-tututu',
	age: 11,
}

function fn2(x, y, ev) {
	console.log(this, ev, x + y)
	return x + y
}

document.body.onclick = fn2.bind(obj, 10, 20)
