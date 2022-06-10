// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
//

// 示例 1：

// 输入：s = "()"
// 输出：true
// 示例 2：

// 输入：s = "()[]{}"
// 输出：true

// 链接：https://leetcode-cn.com/problems/valid-parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []
  let array = s.split("")
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "(") {
      stack.push(')')
    } else if (array[i] == "{") {
      stack.push('}')
    } else if (array[i] == "[") {
      stack.push(']')
    } else {
      if (stack[stack.length - 1] !== array[i]) {
        return false
      } else {
        stack.pop()
      }
    }
  }
  return !stack.length
};

console.log(isValid('()'));