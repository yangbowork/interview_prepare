// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:
// 输入: ["flower","flow","flight"]
// 输出: "fl"

// 示例 2:
// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。

// 链接：https://leetcode-cn.com/problems/longest-common-prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function (strs) {
//   if (strs.length == 0) return ""
//   let res = strs[0].split("")
//   let len = res.length
//   let ans = ""
//   for (let i = 1; i < strs.length; i++) {
//     let currentArray = strs[i].split('')
//     for (let j = 0; j < len; j++) {
//       if (currentArray[j] != res[j]) {
//         len = j + 1
//         break
//       }
//     }
//   }
//   for (let k = 0; k < len; k++) {
//     ans += res[k]
//   }

//   return ans
// };

var longestCommonPrefix = function (strs) {
  let str = strs[0]
  if (str == '') return ''
  let res = ''
  for (let i = 0; i < str.length; i++) {
    let flag = strs.every(item => item[i] == str[i])
    if (flag) {
      res += str[i]
    } else {
      return res
    }
  }
  return res
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));