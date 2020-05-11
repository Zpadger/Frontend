## JS中的正则表达式详解 

### 10个应用案例  
* 去除字符串内指定元素的标签。例如：  

>function trimTag(tagName, htmlStr) {  
&emsp;&emsp;let reg = new RegExp(`<${tagName}(\\s.*)*>(\\n|.)*<\\/${tagName}>`, "g")
&emsp;&emsp;return htmlStr.replace(reg,'')
} 
  

sayName函数作为对象obj的方法调用，所以函数体中的this就代表obj对象。  

 
