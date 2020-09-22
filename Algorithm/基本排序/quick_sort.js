let arr = [];

function arrData(num){
    for (let i = 0; i < num; i++){
        arr[i] = Math.floor(Math.random() * num + 1);
    }
}

arrData(10);

function quickSort(myArr){
    if (myArr.length === 0) return [];
    let smallArr = [];
    let bigArr = [];
    let pivot = myArr[0];
    for (let i = 1; i < myArr.length; i++){
        if (myArr[i] < pivot){
            smallArr.push(myArr[i]);
        }else {
            bigArr.push(myArr[i]);
        }
    }
    return quickSort(smallArr).concat(pivot, quickSort(bigArr));
}
console.log(quickSort(arr));
