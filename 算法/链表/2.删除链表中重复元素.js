// 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。

// 示例 1:
// 输入: 1->1->2
// 输出: 1->2

// 示例 2:
// 输入: 1->1->2->3->3
// 输出: 1->2->3

// https://leetcode.cn/problems/remove-duplicates-from-sorted-list/

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
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head
  let preNode = head
  let curNode = head.next
  while (curNode) {

    if (preNode.val == curNode.val) {
      curNode = curNode.next
      preNode.next = curNode
    } else {
      curNode = curNode.next
      preNode = preNode.next
    }
  }
  return head
};

let head = new ListNode(1, new ListNode(1, new ListNode(2)))
console.log(deleteDuplicates(head));