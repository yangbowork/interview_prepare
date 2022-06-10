// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
//
// 示例 1：
// 输入：head = [1,2,3,4,5]
// 输出：[5, 4, 3, 2, 1]

// 示例 2：
// 输入：head = [1,2]
// 输出：[2,1]

// 示例 3：
// 输入：head = []
// 输出：[]

// 链接：https://leetcode.cn/problems/reverse-linked-list

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
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) return head
  let pre = null
  let cur = head
  let next = head.next
  while (cur) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
};

let head = new ListNode(1, new ListNode(2, new ListNode(3)))
console.log(reverseList(head));