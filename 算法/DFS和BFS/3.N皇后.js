// n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
// 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
// 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
// 皇后的走法是：可以横直斜走，格数不限。因此要求皇后彼此之间不能相互攻击，等价于要求任何两个皇后都不能在同一行、同一列以及同一条斜线上。

// 示例 1：
// 输入：n = 4
// 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// 解释：如上图所示，4 皇后问题存在两个不同的解法。

// 示例 2：
// 输入：n = 1
// 输出：[["Q"]]

// 链接：https://leetcode.cn/problems/n-queens

const solveNQueens = (n) => {
  const board = new Array(n)
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.')
  }
  // console.log(board)
  const res = []
  let cols = new Set()
  let diagonal1 = new Set()
  let diagonal2 = new Set()
  function helper (row) {
    // console.log(row, n)
    if (row === n) {
      let cur = board.slice()
      for (let i = 0; i < n; i++) {
        // console.log(cur[i])
        cur[i] = cur[i].join('')
        // console.log(res)
      }
      res.push(cur)
      return
    }
    for (let col = 0; col < n; col++) {
      // console.log(cols.has(col))
      if (!cols.has(col) && !diagonal1.has(col + row) && !diagonal2.has(col - row)) {
        // console.log(row, col)
        cols.add(col)
        diagonal1.add(col + row)
        diagonal2.add(col - row)
        board[row][col] = 'Q'
        helper(row + 1)
        board[row][col] = '.'
        cols.delete(col)
        diagonal1.delete(col + row)
        diagonal2.delete(col - row)
      }
    }
  }
  helper(0)
  return res
};

console.log(solveNQueens(4));