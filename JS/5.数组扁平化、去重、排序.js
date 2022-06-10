// 已知如下数组：var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]
let arr1 = Array.from(new Set(arr.flat(Infinity))).sort((a, b) => a - b)
console.log(arr1)


// // 扁平化
// const flattenDeep = (array) => array.flat(Infinity)

// // 去重
// const unique = (array) => Array.from(new Set(array))

// // 排序
// const sort = (array) => array.sort((a, b) => a-b)

// // 函数组合
// const compose = (...fns) => (initValue) => fns.reduceRight((y, fn) => fn(y), initValue)

// // 组合后函数
// const flatten_unique_sort = compose( sort, unique, flattenDeep)

// // 测试
// var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]
// console.log(flatten_unique_sort(arr))
// // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

/**
 * 数组扁平化、去重、排序
 */
const list = [1, [2, 3, 8], [3, 6, 4], [5, [6, 7, [8, 1, 2]]]];

function flat (arr) {
  return arr.reduce((array, item) => array.concat(Array.isArray(item) ? flat(item) : item), [])
}

function unique (arr) {
  return arr.reduce((acc, cur) => {
    if (!acc.includes(cur)) acc.push(cur);
    return acc;
  }, []);
}