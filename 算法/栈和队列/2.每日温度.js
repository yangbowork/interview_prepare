// 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指在第 i 天之后，才会有更高的温度。如果气温在这之后都不会升高，请在该位置用 0 来代替。

// 示例 1:
// 输入: temperatures = [73,74,75,71,69,72,76,73]
// 输出: [1,1,4,2,1,1,0,0]

// 链接：https://leetcode-cn.com/problems/daily-temperatures

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  if (temperatures.length == 1) return [0]
  const stack = [0]
  // const res = Array(temperatures.length).fill(0)
  for (let i = 1; i < temperatures.length; i++) {
    if (temperatures[i] <= temperatures[stack[stack.length - 1]]) {
    } else {
      while (temperatures[i] > temperatures[stack[stack.length - 1]]) {
        let index = stack.pop()
        temperatures[index] = i-index
        // res[index] = i - index
      }
    }
    stack.push(i)
  }
  while (stack.length) {
    temperatures[stack.pop()] = 0
  }
  return temperatures
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));