// 真题描述：给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
// 输入:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6], n = 3
// 输出: [1,2,2,3,5,6]11

const merge = function (nums1, m, nums2, n) {
	let i = m - 1
	let j = n - 1
	let space = m + n - 1
	while (i >= 0 && j >= 0) {
		if (nums1[i] > nums2[j]) {
			nums[space] = nums1[i]
			i--
			space--
		} else {
			nums[space] = nums2[j]
			i--
			space--
		}
  }
  while(j>=0) {
    nums1[space] = nums2[j]  
    space-- 
    j--
}
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
