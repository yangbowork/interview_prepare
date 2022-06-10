// 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
//
// 示例 1：
// 输入：head = [1,2,3,4,5], left = 2, right = 4
// 输出：[1, 4, 3, 2, 5]

// 示例 2：
// 输入：head = [5], left = 1, right = 1
// 输出：[5]

// 链接：https://leetcode.cn/problems/reverse-linked-list-ii

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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (top, left, right) {
  if (!top || !top.next || left === right) return top
  let list = new ListNode(-1, top)
  let head = list
  for (let i = 1; i < left; i++) {
    head = head.next
  }
  let pre = head.next
  let cur = pre.next
  let next
  for (let j = left; j < right; j++) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  head.next.next = cur
  head.next = pre
  return list.next
};

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
console.log(reverseBetween(head,2,3));