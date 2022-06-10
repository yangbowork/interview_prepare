// 给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

// 示例 1：
// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]
// 示例 2：

// 输入：head = [1], n = 1
// 输出：[]
// 示例 3：

// 输入：head = [1,2], n = 1
// 输出：[1]

// 链接：https://leetcode.cn/problems/SLwz0R

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let head2 = pre = new ListNode(-1, head)
  let cur = pre
  for (let i = n; i > 0; i--) {
    cur = cur.next
  }
  while (cur.next) {
    pre = pre.next
    cur = cur.next
  }
  pre.next = pre.next.next
  return head2.next
};

let head = new ListNode(1)
console.log(removeNthFromEnd(head, 1));