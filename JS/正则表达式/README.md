## JS中的正则表达式详解 

### 10个应用案例  
* 去除字符串内指定元素的标签。例如：  

>function trimTag(tagName, htmlStr) {  
&emsp;&emsp;let reg = new RegExp(`<${tagName}(\\s.*)*>(\\n|.)*<\\/${tagName}>`, "g")  
&emsp;&emsp;return htmlStr.replace(reg,'')  
} 
  

* 短横线转驼峰命名, flag = 0为小驼峰, 1为大驼峰。例如：  
>function toCamelCase(str, flag = 0) {  
&emsp;&emsp;if (flag){  
&emsp;&emsp;&emsp;&emsp;return str[0].toUpperCase() + str.slice(1).replace(/-(\w)/g, ($0, $1) => $1.toUpperCase())  
&emsp;&emsp;}else {  
&emsp;&emsp;&emsp;&emsp;return str.replace(/-(\w)/g, ($0, $1) => $1.toUpperCase())  
&emsp;&emsp;}  
}


* 去除字符串中的空格符。例如：  
>function trimAll(str) {  
&emsp;&emsp;return str.replace(/\s*/g,"")  
}


* 判断指定格式的数据输入合法性。例如：  
>function numCheck(str, specialNum) {  
&emsp;&emsp;if(str.indexOf(',') > -1) {  
&emsp;&emsp;&emsp;&emsp;return str.splite(',').every(item=>this.numCheck(item));  
&emsp;&emsp;}else {  
&emsp;&emsp;&emsp;&emsp;return str.split(specialNum).length === 2;  
&emsp;&emsp;}  
}


* 去除url参数字符串中值为空的字段。例如：  
>const trimParmas = (parmaStr:string = '') => {  
&emsp;&emsp;return parmaStr.replace(/((\w*?)=&|(&\w*?=)$)/g, '')  
}


* 将浏览器参数字符串转化为参数对象。例如：  
>function unParams(params = '?a=1&b=2&c=3') {  
&emsp;&emsp;let obj = {}  
&emsp;&emsp;params && params.replace(/((\w*)=([\.a-z0-9A-Z]*)?)?/g, (m,a,b,c) => {  
&emsp;&emsp;&emsp;&emsp;if(b || c) obj[b] = c  
&emsp;&emsp;})  
&emsp;&emsp;return obj  
}


* 计算字符串字节数，一个中文占两个字节，一个英文占一个字节。例如：  
>function computeStringByte(str) {  
&emsp;&emsp;let size = 0,  
&emsp;&emsp;&emsp;&emsp;strArr = str.split(''),  
&emsp;&emsp;reg = /[\u4e00-\u9fa5]/&emsp;&emsp;// 判断是否为中文  
&emsp;&emsp;for(let i = strArr.length; i--; i>=0) {  
&emsp;&emsp;&emsp;&emsp;if(reg.test(strArr[i])) {  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;size+= 2  
&emsp;&emsp;&emsp;&emsp;}else {  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;size += 1  
&emsp;&emsp;&emsp;&emsp;}  
&emsp;&emsp;}  
&emsp;&emsp;return size  
}


* 匹配是否包含中文字符。例如：  
>function hasCn(str) {  
&emsp;&emsp;let reg = /[\u4e00-\u9fa5]/g  
&emsp;&emsp;return reg.test(str)  
}  


* 实现搜索联想功能。例如：  
>function searchLink(keyword) {  
&emsp;&emsp;// 模拟后端返回数据  
&emsp;&emsp;let list = ['abc', 'ab', 'a', 'bcd', 'edf', 'abd'];  
&emsp;&emsp;let reg = new RegExp(keyword, 'i');  
&emsp;&emsp;return list.filter(item => reg.test(item))  
}


* 实现一个简单的模板引擎。
