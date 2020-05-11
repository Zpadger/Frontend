// 空白字符/非空白字符匹配\s\S
// \s匹配一个空白字符 包括空格、制表符、换页符和换行符
// \S匹配一个非空白字符

let str = 'xuxi is'
let reg1 = /.*\s/g
let reg2 = /\S\w*/g
console.log(reg1.exec(str)) //[xuxi] (1)
console.log(reg2.exec(str)) //[xuxi] (2)

// (1)(2)执行之后都匹配xuxi 一个是空白字符之前的匹配 一个是非空白字符的匹配