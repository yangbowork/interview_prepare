// 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
// k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
// 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

// 示例 1：
// 输入：head = [1,2,3,4,5], k = 2
// 输出：[2, 1, 4, 3, 5]

// 示例 2：
// 输入：head = [1,2,3,4,5], k = 3
// 输出：[3,2,1,4,5]

// 链接：https://leetcode.cn/problems/reverse-nodes-in-k-group

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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head || k == 1) return head
  let dummy = new ListNode(-1, head)
  let isSatisfy = true
  let prehead = dummy
  let pre = dummy
  let cur = head
  let next
  let mid
  while (isSatisfy) {
    for (let i = 0; i < k; i++) {
      if (!cur) {
        isSatisfy = false
        break
      }
      cur = cur.next
    }
    if (!isSatisfy) break
    pre = pre.next
    cur = pre.next
    for (let i = 1; i < k; i++) {
      next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }
    mid = prehead.next
    prehead.next.next = cur
    prehead.next = pre
    prehead = mid
    pre = prehead
  }
  return dummy.next
};

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
console.log(reverseKGroup(head, 2));