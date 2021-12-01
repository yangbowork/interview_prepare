// 节流
function throttle(func, wait = 300) {
	let timer = null
	let previous = 0
	return function (...params) {
		let now = new Date()
		let remain = wait - (now - previous)
		if (remain < 0) {
			clearTimeout(timer)
			timer = null
			previous = now
			func.call(this, ...params)
		} else if (!timer) {
			timer = setTimeout(() => {
				timer = null
				previous = new Date()
				func.call(this, ...params)
			}, remain)
		}
	}
}

function handle() {
	console.log('OK')
}

window.onscroll = throttle(handle)
