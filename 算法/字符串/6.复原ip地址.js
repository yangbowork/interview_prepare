// 93. 复原IP地址
// 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

// 有效的 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

// 例如："0.1.2.201" 和 "192.168.1.1" 是 有效的 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效的 IP 地址。

// https://leetcode-cn.com/problems/restore-ip-addresses/

/**
 * @param {string} s
 * @return {string[]}
 */
 var restoreIpAddresses = function(s) {
   const SEG_COUNT = 4
   const segments = new Array(SEG_COUNT)
   const ans = []
   
   const dfs = (s, segId, segStart) => {
     if (segId == SEG_COUNT) {
       if (segStart == s.length) {
         ans.push(segments.join('.'))
       }
       return
     }
     if (segStart == s.length) return
     if (s.charAt(segStart) == '0') {
       segments[segId] = 0
       dfs(s,segId + 1, segStart + 1)
     }

     let addr = 0
     for (let segEnd = segStart; segEnd < s.length; segEnd++){
       addr = addr * 10 + (s.charAt(segEnd) - '0')
       if (addr > 0 && addr <= 0xFF) {
         segments[segId] = addr
         dfs(s, segId + 1, segEnd + 1)
       } else {
         break
       }
     }
   }

   dfs(s, 0, 0)
   return ans
};