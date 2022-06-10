// 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。

// 示例 1：
// 输入：nums = [3,0,1]
// 输出：2
// 解释：n = 3，因为有 3 个数字，所以所有的数字都在范围 [0,3] 内。2 是丢失的数字，因为它没有出现在 nums 中。

// 链接：https://leetcode-cn.com/problems/missing-number

/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
   nums = nums.sort((a, b) => a - b)
   let i = 0
   while (i < nums.length) {
     if (i !== nums[i]) {
       return i
     }
     i++
   }
   return i
};

// var missingNumber = function(nums) {
//   let n = nums.length;
//   // 第一步，计算给出数组的总和
//   let sum = nums.reduce((result, item) => {
//       return result + item
//   })
//   // 第二步，计算假设插入数据后有序完整数组的总和
//   let total = (n+1) * n / 2
//   // 第三步，计算差值
//   return total - sum
// };