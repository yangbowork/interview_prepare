// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

// 示例 1：
// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3], [9, 20], [15, 7]]

// 示例 2：
// 输入：root = [1]
// 输出：[[1]]

// 示例 3：
// 输入：root = []
// 输出：[]

// 链接：https://leetcode.cn/problems/binary-tree-level-order-traversal

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  let queue = []
  let result = []
  queue.push(root)
  while (queue.length) {
    let array = []
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let current = queue.shift()
      array.push(current.val)
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
    result.push(array)
  }
  return result
};

function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

function createTree (array, i) {
  if (i >= array.length) return null
  let node = new TreeNode(array[i])
  node.left = createTree(array, i * 2 + 1)
  node.right = createTree(array, i * 2 + 2)
  return node
}

let tree = createTree([0, 2, 4, 1, null, 3, -1, 5, 1, null, 6, null, 8], 0)

console.log(levelOrder(tree));