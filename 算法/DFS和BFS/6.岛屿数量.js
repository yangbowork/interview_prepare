// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
// 此外，你可以假设该网格的四条边均被水包围。

// 示例 1：
// 输入：grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// 输出：1

// 示例 2：
// 输入：grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// 输出：3

// 链接：https://leetcode.cn/problems/number-of-islands

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let max = 0
  let res = 0
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
        if (dfs(i, j)) {
          res++
        }
      }
    }
  }
  return res
};

console.log(numIslands([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
]));