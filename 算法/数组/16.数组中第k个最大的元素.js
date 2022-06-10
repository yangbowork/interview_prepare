// 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// 示例 1:
// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5

// 示例 2:
// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4

// https://leetcode-cn.com/problems/kth-largest-element-in-an-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let array = []
  for (let i = 0; i < nums.length; i++){
    if (array.length < k) {
      
    }
  }
  // let left = 0
  // let right = nums.length - 1
  // let l = left
  // let r = right
  // let i
  // let position = nums.length - k
  // while (l <= r) {
  //   console.log(l,r);
  //   if (l == r) {
  //     if (l == position) {
  //       console.log(position,11111111);
  //       return nums[position]
  //     } else if (l < position) {
  //       left = l + 1
  //     } else {
  //       right = l - 1

  //     }
  //     l = left
  //     r = right
  //   }
  //   if (nums[l] <= nums[r]) {
  //     l++
  //   } else {
  //     i = nums[l]
  //     nums[l] = nums[r]
  //     nums[r] = i
  //     r--
  //   }
  // }
};

console.log(findKthLargest([3,2,1,5,6,4],2))