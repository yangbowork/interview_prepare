// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
// 你可以按 任何顺序 返回答案。

// 示例 1：
// 输入：n = 4, k = 2
// 输出：
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

// 示例 2：
// 输入：n = 1, k = 1
// 输出：[[1]]

// 链接：https://leetcode.cn/problems/combinations

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
   let res = []
   let stack = []
   function dfs (index) {
     if (stack.length == k) {
       res.push(stack.slice())
       return
     }
     for (let i = index; i <= n; i++){
       stack.push(i)
       dfs(i + 1)
       stack.pop()
     }
   }
   dfs(1)
   return res
};


console.log(combine(1,1));