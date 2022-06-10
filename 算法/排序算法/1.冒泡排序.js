function betterBubbleSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = false
    for (let j = 0; j < (arr.length - 1 - i); j++) {
      if (arr[j] > arr[j + 1]) {
        // p = arr[j]
        // arr[j] = arr[j + 1]
        // arr[j + 1] = p
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        flag = true
      }
    }
    if (flag == false) return arr;
  }
  return arr
}


let arr = [3, 6, 1, 5, 8, 2, 5, 10, 3, 4, 6, 0]
let res = betterBubbleSort(arr)
console.log(res)