// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。
// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

// 示例 1：
// 输入：s = ["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]

// 链接：https://leetcode-cn.com/problems/reverse-string

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
   let temp = null
   let l = 0
   let r = s.length - 1 
   function swap (arr, l, r) {
     temp = arr[l]
     arr[l] = arr[r]
     arr[r] = temp
   }
   while (l < r) {
     swap(s, l, r)
     l++
     r--
   }
   return s
};