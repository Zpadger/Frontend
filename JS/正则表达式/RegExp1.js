// 模式匹配的用法(x)
// 模式匹配主要用来匹配某一类字符串并记住匹配项

let str = 'xuxi is xuxi is'
let reg = /(xuxi) (is) \1 \2/g
console.log(reg.test(str))  // (1)
console.log(str.replace(reg, '$1 $2'))  //(2)

// 其中，括号被成为捕获括号，模式中的\1和\2表示第一个和第二个被捕获括号匹配的字符串
// 即xuxi和is，匹配了原字符串中的后两个单词，因此在(1)中运行结果为true
// 当我们在字符串中使用replace时，我们可以使用$1 $2来获取第n个匹配项
// 并用来替换字符串，如(2)中的运行结果