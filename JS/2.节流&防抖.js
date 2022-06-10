function debounce (func, wait = 200, immediate = false) {
  let timer = null
  return function (...params) {
    let now = !timer && immediate
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      !immediate ? func.call(this, ...params) : null
    }, wait)
    now ? func.call(this, ...params) : null
  }
}

function handle () {
  console.log('OK!')
}

submit.onclick = debounce(handle, 500, true)

function throttle (func, wait = 200) {
  let timer = null
  let previous = 0
  return function (...params) {
    let now = new Date()
    let remain = wait - (now - previous)
    if (remain > 0) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        previous = now
        fn.call(this, ...params)
      }, wait)
    } else if (!timer) {
      timer = setTimeout(() => {
        timer = null
        previous = new Date()
        func.call(this, ...params)
      }, remain)
    }
  }
}

function throtte(func, time){
  let activeTime = 0;
  return () => {
    const current = Date.now();
    if(current - activeTime > time) {
      func.apply(this, arguments);
      activeTime = Date.now();
    }
  }
}