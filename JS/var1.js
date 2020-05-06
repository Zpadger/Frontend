// 基本类型的变量是存放在栈内存Stack里面的

var a, b;
a = "zpj";
b = a;
console.log(a);
console.log(b);

a = "呵呵"; //改变a的值，但不影响b的值
console.log(a);
console.log(b);
