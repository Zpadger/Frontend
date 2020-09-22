let arr = []

function arrData(num) {
    for (let i = 0; i < num; i++) {
        arr[i] = Math.floor(Math.random() * num + 1)
    }
}
arrData(10)

function selectSort(myArr) {
    let minIndex;
    for (let i = 0; i < myArr.length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < myArr.length; j++) {
            if (myArr[j] < myArr[minIndex]) {
                //寻找最小值的索引
                minIndex = j;
            }
        }
        //将当前（第i次查找）查找到的最小值 myArr[minIndex]和当前值（myArr[i]）位置互换
        //minIndex始终保存着最小值的位置的索引，随着i的自增，遍历的数组长度越来越短，直到完成排序
        [myArr[i], myArr[minIndex]] = [myArr[minIndex], myArr[i]];
    }
    return myArr;
}
console.log(selectSort(arr));
