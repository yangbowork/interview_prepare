// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

// 示例 1：
// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

// 链接：https://leetcode-cn.com/problems/merge-intervals

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length == 0) return []
  intervals.sort((a, b) => {
    return (a[0] - b[0])
  })
  const result = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    let startIntervals = intervals[i][0]
    let endIntervals = intervals[i][1]
    let len = result.length
    let pre = result[len - 1]
    if (pre[1] >= startIntervals) {
      pre[1] = Math.max(pre[1], endIntervals)
    } else {
      result.push(intervals[i])
    }
  }
  return result
};
console.log(merge([[1, 3], [0, 3], [9, 10], [2, 6], [8, 10], [15, 18]]));