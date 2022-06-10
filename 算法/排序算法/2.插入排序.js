function insertSort (arr) {
  let len = arr.length
  let temp
  for (let i = 1; i < len; i++) {
    temp = arr[i]
    let j = i
    while (j > 0 && temp < arr[j - 1]) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }
  return arr
}
let arr = [3, 6, 1, 5, 8, 2, 5, 10, 3, 4, 6, 0]
let res = insertSort(arr)
console.log(res)