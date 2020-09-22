function shellSort(arr) {
    // 获取增量
    let gap = Math.floor(arr.length / 2);
    // 增量等于 1，即为插入排序
    while (gap >= 1){
        // 进行插入排序
        for (let i = gap; i < arr.length; i++){
            let j = i;
            let tmp = arr[i];
            while (j > gap - 1 && arr[j - gap] > tmp){
                arr[j] = arr[j - gap];
                j -= gap;
            }
            arr[j] = tmp;
        }
        // 缩小增量
        gap = Math.floor(gap / 2);
    }
    return arr;
}
let myArr = [5, 3, 4, 8, 1, 7, 2, 9, 6];
console.log(shellSort(myArr));