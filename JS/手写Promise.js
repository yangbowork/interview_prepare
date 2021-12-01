const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class Promise {
	constructor(executor) {
		if (typeof executor !== 'function') {
			throw new TypeError(`Promise resolver ${executor} is not a function`)
		}
		this.PromiseState = PENDING
		this.PromiseResult = undefined
		this.onFulfilledCallbacks = []
		this.onRejectedCallbacks = []

		let run = (status, value) => {
			if (this.PromiseState !== PENDING) return
			this.PromiseState = status
			this.PromiseResult = value
			let arr =
				this.PromiseState === FULFILLED
					? this.onFulfilledCallbacks
					: this.onRejectedCallbacks
			arr.forEach((fn) => fn())
		}

		let resolve = (value) => {
			run(FULFILLED, value)
		}

		let reject = (reason) => {
			run(REJECTED, reason)
		}

		try {
			executor(resolve, reject)
		} catch (err) {
			reject(err)
		}
	}

	then(onfulfilled, onrejected) {
		onfulfilled =
			typeof onfulfilled === 'function' ? onfulfilled : (value) => value
		onrejected =
			typeof onrejected === 'function'
				? onrejected
				: (reason) => {
						throw reason
				  }
		let promise = new Promise((resolve, reject) => {
			switch (this.PromiseState) {
				case FULFILLED:
					setTimeout(() => {
						try {
							let x = onfulfilled(this.PromiseResult)
							resolvePromise(promise, x, resolve, reject)
						} catch (err) {
							reject(err)
						}
					})
					break
				case REJECTED:
					setTimeout(() => {
						try {
							let x = onrejected(this.PromiseResult)
							resolvePromise(promise, x, resolve, reject)
						} catch (err) {
							reject(err)
						}
					})
					break
				default:
					this.onFulfilledCallbacks.push(() => {
						setTimeout(() => {
							try {
								let x = onfulfilled(this.PromiseResult)
								resolvePromise(promise, x, resolve, reject)
							} catch (err) {
								reject(err)
							}
						})
					})
					this.onRejectedCallbacks.push(() => {
						setTimeout(() => {
							try {
								let x = onrejected(this.PromiseResult)
								resolvePromise(promise, x, resolve, reject)
							} catch (err) {
								reject(err)
							}
						})
					})
					break
			}
		})
		return promise
	}
}

const resolvePromise = (promise, x, resolve, reject) => {
	if (promise === x) {
		return reject(
			new TypeError('Chaining cycle detected for promise #<Promise>')
		)
	}
	let called
	if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
		try {
			let then = x.then
			if (typeof then === 'function') {
				then.call(
					x,
					(y) => {
						if (called) return
						called = true
						resolvePromise(promise, y, resolve, reject)
					},
					(r) => {
						if (called) return
						called = true
						reject(r)
					}
				)
			} else {
				resolve(x)
			}
		} catch (err) {
			if (called) return
			called = true
			reject(err)
		}
	} else {
		resolve(x)
	}
}

Promise.resolve = (value) => {
	if (value instanceof Promise) {
		return value
	}
	return new Promise((resolve) => resolve(value))
}

Promise.reject = (reason) => {
	return new Promise((_, reject) => {
		reject(reason)
	})
}

Promise.all = (PromiseArr) => {
	let promise = new Promise((resolve, reject) => {
		let index = 0
		let result = []
		PromiseArr.forEach((item) => {
			Promise.resolve(item).then(
				(value) => {
					index++
					result[index] = value
					if (result.length === PromiseArr.length) {
						resolve(result)
					}
				},
				(reason) => {
					reject(reason)
				}
			)
		})
	})
	return promise
}

// let p1 = new Promise((resolve, reject) => {
// 	reject('111')
// 	resolve('122')
// })
// console.log(p1)

// p1.then(
// 	(resolve) => {
// 		console.log('resolve' + resolve)
// 	},
// 	(reason) => {
// 		console.log('reason' + reason)
// 	}
// )
