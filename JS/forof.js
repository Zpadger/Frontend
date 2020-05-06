// for-of 循环使用例子

let iterable = [10, 20, 30];

for (let value of iterable){
    console.log(value);
}

let iterable = [10, 20, 30];

for (const value of iterable) {
    console.log(value);
}

let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let [key, value] of iterable) {
    console.log(value);
}
// 1
// 2
// 3

for (let entry of iterable) {
    console.log(entry);
}
// [a, 1]
// [b, 2]
// [c, 3]