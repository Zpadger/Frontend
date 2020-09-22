function mergeSort(arr){
    const len = arr.length;
    if (len > 1){
        let middle = Math.floor(len / 2);
        let leftArr = mergeSort(arr.slice(0, middle));
        let rightArr = mergeSort(arr.slice(middle));
        arr = merge(leftArr, rightArr);
    }
    return arr;
}
function merge(left, right){
    let i = 0, j = 0;
    let res = [];
    while (i < left.length && j < right.length){
        res.push(left[i] < right[j] ? left[i++] : right[j++]);
    }
    return res.concat(i < left.length ? left.slice(i) : right.slice(j));
}
let myArr = [5, 3, 4, 8, 1, 7, 2, 9, 6];
console.log(mergeSort(myArr));