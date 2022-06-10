function selectSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i

    for (let j = i; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}


let arr = [3, 6, 1, 5, 8, 2, 5, 10, 3, 4, 6, 0]
let res = selectSort(arr)
console.log(res)