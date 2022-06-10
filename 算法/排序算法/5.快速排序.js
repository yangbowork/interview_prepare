function quickSort (arr) {
  if (arr.length < 1) {
    return arr
  }
  let midIndex = Math.floor(arr.length / 2)
  let mid = arr.splice(midIndex, 1)[0]
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= mid) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return quickSort(left).concat(mid, quickSort(right))
}
let arr = [3, 6, 1, 5, 8, 2, 5, 10, 3, 4, 6, 0, 1]
let res = quickSort(arr)
console.log(res)