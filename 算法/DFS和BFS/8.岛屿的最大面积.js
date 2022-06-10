// 给定一个由 0 和 1 组成的非空二维数组 grid ，用来表示海洋岛屿地图。
// 一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。
// 找到给定的二维数组中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。

// 示例 1:
// 输入: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// 输出: 6
// 解释: 对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。

// 示例 2:
// 输入: grid = [[0,0,0,0,0,0,0,0]]
// 输出: 0

// 链接：https://leetcode.cn/problems/ZL6zAn

/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let max = 0
  function dfs (level, index) {
    let cur = 0
    let top = 0, left = 0, right = 0, bottom = 0
    if (grid[level][index] == "1") {
      cur = 1
      grid[level][index] = "0"
      if (index - 1 >= 0 && grid[level][index - 1] == "1") {
        left = dfs(level, index - 1)
      }
      if (level - 1 >= 0 && grid[level - 1][index] == "1") {
        top = dfs(level - 1, index)
      }
      if (index + 1 < grid[0].length && grid[level][index + 1] == "1") {
        right = dfs(level, index + 1)
      }
      if (level + 1 < grid.length && grid[level + 1][index] == "1") {
        bottom = dfs(level + 1, index)
      }
    }

    return cur + top + left + right + bottom
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == "1") {
        max = Math.max(max, dfs(i, j))
      }
    }
  }
  return max
};

console.log(numIslands([
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]));