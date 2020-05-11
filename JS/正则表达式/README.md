## JS中的正则表达式详解 

### 10个应用案例  
* 去除字符串内指定元素的标签。例如：  

>function trimTag(tagName, htmlStr) {  
&emsp;&emsp;let reg = new RegExp(`<${tagName}(\\s.*)*>(\\n|.)*<\\/${tagName}>`, "g")  
return htmlStr.replace(reg,'')  
} 
  

* 短横线转驼峰命名, flag = 0为小驼峰, 1为大驼峰。例如：  
>function toCamelCase(str, flag = 0) {  
&emsp;&emsp;if (flag){  
&emsp;&emsp;&emsp;&emsp;return str[0].toUpperCase() + str.slice(1).replace(/-(\w)/g, ($0, $1) => $1.toUpperCase())  
&emsp;&emsp;}else {  
&emsp;&emsp;&emsp;&emsp;return str.replace(/-(\w)/g, ($0, $1) => $1.toUpperCase())  
&emsp;&emsp;}  
}


 
