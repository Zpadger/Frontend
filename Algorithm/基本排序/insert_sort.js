let arr = []

function arrData(num) {
    for (let i = 0; i < num; i++) {
        arr[i] = Math.floor(Math.random() * num + 1)
    }
}
arrData(10);

function insertsort(myArr) {
    let tmp, j;
    for (let i = 1; i < myArr.length; i++){
        tmp = myArr[i];
        j = i;
        while (j > 0 && myArr[j - 1] > tmp){
            myArr[j] = myArr[j - 1];
            j--;
        }
        myArr[j] = tmp;
    }
    return myArr;
}
console.log(insertsort(arr));
