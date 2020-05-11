// 字符集合和反向字符集合的用法[xyz]/[^xyz]
//[xyz]一个字符集合 匹配方括号中的任意字符 包括转义序列 可以用一个破折号- 来指定字符范围
//[^xyz]一个反向字符集 匹配任何没有包含在方括号中的字符 可以用一个破折号- 来指定一个字符范围

let str = 'abcd'
let reg1 = /[a-c]+/
let reg2 = /[^d]$/

console.log(reg1.test(str)) // true (1)
console.log(reg2.test(str)) // false (2)

//(1)中将返回true 因为字符串中包含a-c中的字符
//(2)中返回false 因为字符串结尾为d 但正则reg2需要匹配结尾不为d的字符串