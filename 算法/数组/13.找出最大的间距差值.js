// 假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？

// 示例 1:
// 输入: [7,1,5,3,6,4]
// 输出: 5
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。

// 链接：https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
//  var maxProfit = function(prices) {
//    profit = 0
//    min = prices[0]
//    max = prices[0]
//    for (let i = 1; i < prices.length; i++){
//      let current = prices[i]
//      if (current < min) {
//        min = current
//        max = current
//      } else if(current > max) {
//        max = current
//        profit = Math.max(max-min, profit)
//      }
//    }
//    return profit
// };

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  profit = 0
  min = prices[0]
  for (let i = 1; i < prices.length; i++) {
    let current = prices[i]
    if (current < min) {
      min = current
    } else if (current > min && (current - min) > profit) {
      profit = current - min
    }
  }
  return profit
};

console.log(maxProfit([3, 2, 6, 5, 0, 3]));