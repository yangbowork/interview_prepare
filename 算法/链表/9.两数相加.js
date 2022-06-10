// 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

// 你可以假设除了数字 0 之外，这两个数字都不会以零开头。

// 示例1：
// 输入：l1 = [7,2,4,3], l2 = [5,6,4]
// 输出：[7, 8, 0, 7]

// 示例2：
// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[8, 0, 7]

// 示例3：
// 输入：l1 = [0], l2 = [0]
// 输出：[0]

// 链接：https://leetcode.cn/problems/add-two-numbers-ii

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  // 逆序处理先想栈
};