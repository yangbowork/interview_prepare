// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

// 示例 1：
// 输入：nums = [1,2,3]
// 输出：[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

// 示例 2：
// 输入：nums = [0,1]
// 输出：[[0, 1], [1, 0]]

// 示例 3：
// 输入：nums = [1]
// 输出：[[1]]

// 链接：https://leetcode.cn/problems/permutations

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let array = []
  let result = []
  let set1 = new Set()
  function dfs (level, set) {
    if (level == nums.length) {
      array.push(result.slice()) // 注意这里如果直接push一个数组 最后会有问题push的是一个地址 而不是当时的切片数据
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (!set.has(nums[i])) {
        result.push(nums[i])
        set.add(nums[i])
        dfs(level + 1, set)
        set.delete(nums[i])
        result.pop(nums[i])
      }
    }
  }
  dfs(0, set1)
  return array
};

let nums = [1, 2, 3]
console.log(permute(nums));