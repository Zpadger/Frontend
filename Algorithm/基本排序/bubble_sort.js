let arr = [];
function arrData(num){
    for (let i = 0; i < num; i++){
        arr[i] = Math.floor(Math.random() * num + 1);
    }
}
arrData(10);
console.log(arr);

// 利用sort冒泡排序
arr1 = arr.sort((a, b) => a - b);
console.log(arr1);

// 添加中间变量实现冒泡排序
function bubble_sort1(myArr) {
    for (let i = 0; i < myArr.length - 1; i++){
        for (let j = 0; j < myArr.length - 1; j++){
            if (myArr[j] > myArr[j + 1]){
                let tmp = myArr[j];
                myArr[j] = myArr[j + 1];
                myArr[j + 1] = tmp;
            }
        }
    }
    return myArr;
}

let arr2 = bubble_sort1(arr);
console.log(arr2);

// 不添加中间变量实现冒泡排序
function bubble_sort2(myArr) {
    for (let i = 0; i < myArr.length - 1; i++){
        for (let j = 0; j < myArr.length - 1; j++){
            if (myArr[j] > myArr[j + 1]){
                myArr[j] = myArr[j + 1] + myArr[j];
                myArr[j + 1] = myArr[j] - myArr[j + 1];
                myArr[j] = myArr[j] - myArr[j + 1];
            }
        }
    }
    return myArr;
}

let arr3 = bubble_sort1(arr);
console.log(arr3);

// ES6
function bubble_sort3(myArr) {
    for (let i = 0; i < myArr.length - 1; i++){
        for (let j = 0; j < myArr.length - 1; j++){
            if (myArr[j] > myArr[j + 1]){
                [myArr[j], myArr[j + 1]] = [myArr[j + 1], myArr[j]]
            }
        }
    }
    return myArr;
}
let arr4 = bubble_sort1(arr);
console.log(arr4);
