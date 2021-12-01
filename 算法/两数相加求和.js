// 真题描述： 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]

// 对象版
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const twoSum1 = function(nums, target) {
  // 这里我用对象来模拟 map 的能力
  const diffs = {}
  // 缓存数组长度
  const len = nums.length
  // 遍历数组
  for(let i=0;i<len;i++) {
      // 判断当前值对应的 target 差值是否存在（是否已遍历过）
      if(diffs[target-nums[i]]!==undefined) {
          // 若有对应差值，那么答案get！
          return [diffs[target - nums[i]], i]
      }
      // 若没有对应差值，则记录当前值
      diffs[nums[i]]=i
  }
};

// map版
const twoSum2 = function (arr, target) {
	const map = new Map()
	for (let i = 0; i < arr.length; i++) {
		if (map.get(target - arr[i]) !== undefined) {
			return [map.get(target - arr[i]), i]
		}
		map.set(arr[i], i)
	}
}

let arr = [1, 2, 7, 9]
console.log(twoSum1(arr, 10))
console.log(twoSum2(arr, 10))