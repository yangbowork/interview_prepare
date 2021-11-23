(function () {
  function Promise(executor) {
    if (typeof executor !== 'function') {
      throw TypeError(`Promise resolver ${executor} is not a function`)
    }

    var self = this
    self.PromiseState = 'pending'
    self.PromiseResult = undefined
    self.onFulfilledCallbacks = []
    self.onRejectedCallbacks = []

    var run = function (status, value) {
      if (self.PromiseState !== 'pending') return
      self.PromiseState = status
      self.PromiseResult = value
      setTimeout(function () {
        var arr = self.PromiseState === 'fulfilled' ? self.onFulfilledCallbacks : self.onRejectedCallbacks
        for (var i = 0; i < arr.length; i++) {
          var itemFunc = arr[i]
          if (typeof itemFunc === 'function') {
            itemFunc(self.PromiseResult)
          }
        }
      })
    }

    var resolve = function (value) {
      run('fulfilled', value)
    }

    var reject = function (reason) {
      run('rejected', reason)
    }

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  Promise.prototype = {
    isSelf: true,
    constructor: Promise,
    then: function (onfulfilled, onrejected) {
      var self = this
      switch (self.PromiseState) {
        case 'fulfilled':
          setTimeout(function () {
            resolved(self.PromiseResult)
          })
          break;
        case 'rejected':
          setTimeout(function () {
            rejected(self.PromiseResult)
          })
          break;
        default:
          self.onFulfilledCallbacks.push(onfulfilled)
          self.onRejectedCallbacks.push(onrejected)
      }
    }
  }

  window.Promise = Promise
})()

let p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve('11111')
    console.log(3333);
  })
})

p1.then(resolved => {
  console.log('OK' + resolved);
}, rejected => {
  console.log('NO');
})
p1.then(resolved => {
  console.log('OK');
}, rejected => {
  console.log('NO');
})
p1.then(resolved => {
  console.log('OK');
}, rejected => {
  console.log('NO');
})
p1.then(resolved => {
  console.log('OK');
}, rejected => {
  console.log('NO');
})
p1.then(resolved => {
  console.log('OK');
}, rejected => {
  console.log('NO');
})
console.log(222);