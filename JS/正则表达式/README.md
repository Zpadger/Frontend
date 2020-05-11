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
>function numCheck(str, specialNum) {  
&emsp;&emsp;if(str.indexOf(',') > -1) {  
&emsp;&emsp;&emsp;&emsp;return str.splite(',').every(item=>this.numCheck(item));  
&emsp;&emsp;}else {  
&emsp;&emsp;&emsp;&emsp;return str.split(specialNum).length === 2;  
&emsp;&emsp;}  
}






