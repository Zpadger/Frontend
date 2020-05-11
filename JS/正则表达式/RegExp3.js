

let str = '英雄联盟'
let reg = /英(?=雄)/
console.log(reg.test(str))  // true

// '/英(?=雄)/'会匹配到“英”仅当它后面跟着“雄”
// 但是“雄”不属于匹配结果的一部分