// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。

// 示例 1：
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

// 链接：https://leetcode-cn.com/problems/3sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return []
  let result = []
  nums = nums.sort((a, b) => a - b)
  let len1 = nums.length - 2
  let len2 = nums.length - 1
  for (let i = 0; i < len1; i++) {
    let a = nums[i]
    if (nums[i] > 0) return result;
    if (i > 0 && nums[i] == nums[i - 1]) continue
    let j = i + 1
    let k = nums.length - 1
    while (j < k) {
      if (nums[j] + nums[k] > -a) {
        k--
      } else if (nums[j] + nums[k] < -a) {
        j++
      } else {
        result.push([nums[i], nums[j], nums[k]])
        j++
        k--
        while (j < len2 && nums[j] == nums[j - 1]) {
          j++
        }
        while (k > i + 1 && nums[j] == nums[k + 1]) {
          k--
        }
      }
    }

  };
  return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));