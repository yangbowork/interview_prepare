// 防抖
function debounce(func, wait = 300, immediate = false) {
	let timer = null
	return function (...params) {
		let now = immediate && !timer
		clearTimeout(timer)
		timer = setTimeout(() => {
			timer = null
			!immediate ? func.call(this, ...params) : null
		}, wait)
		now ? func.call(this, ...params) : null
	}
}

function handle() {
	console.log('OK!')
}

submit.onclick = debounce(handle, 500, true)
