// 后行断言(?<=y)x
// 匹配'x'仅当'x'前面是'y'

let str = 'xuxiA'
let reg = /(?<=xuxi)A/
console.log(reg.test(str))  //true

// /(?<=xuxi)A/会匹配到A仅当它前面为xuxi 但是xuxi不属于匹配结果的一部分