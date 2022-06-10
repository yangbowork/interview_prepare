// 给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。

// 示例 1：
// 输入：nums = [1,2,3]
// 输出：6

// 示例 2：
// 输入：nums = [1,2,3,4]
// 输出：24

// 示例 3：
// 输入：nums = [-1,-2,-3]
// 输出：-6

// 链接：https://leetcode-cn.com/problems/maximum-product-of-three-numbers

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums = nums.sort((a, b) => a - b)
  let length = nums.length
  let max1 = nums[length - 2] * nums[length - 1] * nums[length - 3]
  return nums[length - 1] > 0 ? Math.max(max1, nums[0] * nums[1] * nums[length - 1]) : max1
};