### 问题  
给出一个url链接，如何将?后面的字符串转换成对象保存？
### 思路  
1.先对url进行处理，获取 ？后的字符串  
> 'postid=10457794&actiontip=保存修改成功'  
2.字符串通过&标识，不同参数转为数组  
> ["postid=10457794", "actiontip=保存修改成功"]  
3.分别将 = 左右两边拆分为数组, 动态变为键值对  
> ["postid", "10457794"]  
### 代码 
```javascript
function getParamsFromUrl(url){
    if (url.indexOf("?") !== -1){
        // 获取 "?" 后面的字符串
        var index = url.indexOf("?") + 1;
        var str = url.substr(index);
        // 创建键值对对象
        var paramsObj = {};
        // 以 "&" 分解字符串
        var arrs = str.split("&");
        for (let i = 0; i < arrs.length; i++){
            // 键值对赋值
            paramsObj[arrs[i].split("=")[0]] = arrs[i].split("=")[1];
        }
    }
    return paramsObj;
}
let res = getParamsFromUrl('https://www.baidu.com?postid=10457794&actiontip=保存修改成功&details=123334&today=9837349');
console.log(res);
```
