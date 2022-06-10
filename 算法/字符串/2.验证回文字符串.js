// 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

// 示例 1:
// 输入: s = "aba"
// 输出: true

// 示例 2:
// 输入: s = "abc"
// 输出: false

// https://leetcode-cn.com/problems/valid-palindrome-ii/

/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
   let l = 0
   let r = s.length - 1
   while (l < r) {
     if (s[l] == s[r]) {
      l++
      r--
     } else {
      return isPalindrome(l+1, r) || isPalindrome(l, r-1)
     }
   }
   return true
   function isPalindrome (l, r) {
     while (l < r) {
       if (s[l] != s[r]) {
         return false
       }
       l++
       r--
     }
     return true
   }
};

console.log(validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"));


// 进阶问题

// 给出一个字符串 s 和一个整数 k，请你帮忙判断这个字符串是不是一个「K 回文」。
// 所谓「K 回文」：如果可以通过从字符串中删去最多 k 个字符将其转换为回文，那么这个字符串就是一个「K 回文」。

// 示例 1:
// 输入: s = "abcdeca", k=2
// 输出: true
// 解释：删除字符“b”和“e”
// leetcode 1216