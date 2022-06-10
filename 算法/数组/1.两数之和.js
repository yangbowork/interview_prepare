// 真题描述： 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

// 链接：https://leetcode-cn.com/problems/two-sum


// Map方法
// const twoSum = function (nums, target) {
//   let map = new Map()
//   for (let i = 0; i < nums.length; i++) {
//     let val = nums[i]
//     if (map.has(target - val)) {
//       return [map.get(target - val), i]
//     }
//     map.set(val, i)
//   }
//   return null
// };

// console.log(twoSum([2, 7, 11, 15], 9));