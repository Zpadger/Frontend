function varTest() {
    var x = 1;
    if (true){
        var x = 2;
        console.log(x); // 2
    }
    console.log(x); // 2
}
function letTest() {
    let x = 1;
    if (true){
        let x = 2;
        console.log(x); // 2
    }
    console.log(x); // 1
}
// let允许你声明一个作用域被限制在块级中的变量、语句或者表达式。在Function中局部变量推荐使用let变量，避免变量名冲突。
//
// 作用域规则
// let 声明的变量只在其声明的块或子块中可用，这一点，与var相似。二者之间最主要的区别在于var声明的变量的作用域是整个封闭函数。
