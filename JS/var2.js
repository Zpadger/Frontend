// 引用类型的值是保存在堆内存Heap中的对象Object

var a = {name:"percy"};
var b;
b = a;
a.name = "zpj";
console.log(b.name);

b.age = 22;
console.log(a.age);

var c = {
    name:"zpj",
    age:22
};
console.log(c.name);
console.log(c.age);