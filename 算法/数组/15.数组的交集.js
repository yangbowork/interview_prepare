// 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

// 示例 1：
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]

// 链接：https://leetcode-cn.com/problems/intersection-of-two-arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let res = []
  let map1 = new Map()
  // let map2 = new Set()
  for (let i = 0; i < nums1.length; i++) {
    if (!map1.has(nums1[i])) {
      map1.set(nums1[i], false)
    }
  }
  for (let j = 0; j < nums2.length; j++){
    if (map1.has(nums2[j])&&!map1.get(nums2[j])) {
      map1.set(nums2[j],true)
      res.push(nums2[j])
    }
  }
  return res
};
console.log(intersection([1,2,2,1],[2,2]));