## JavaScript立即执行的具名函数 


### 首先举个例子    

以下代码输出是什么？ 
```JavaScript
(function A() {
    console.log(A); // [Function A]
    A = 1;
    // console.log(window.A); // undefined
    console.log(A); // [Function A]
}())
```

答案是：  
```JavaScript
[Function: A]
[Function: A]
```


### 知识点讲解
**1.** 首先说注释问题  
```JavaScript
// console.log(window.A); // undefined 
```
node.js中不存在window这个全局变量，window是浏览器的规范，并非JS的规范，所以在node.js中当然不能使用。如果不注释掉，会运行报错：  
```JavaScript
    console.log(window.A);
                ^

ReferenceError: window is not defined
    at A (/Users/zhangpeiji/WebstormProjects/JS/test.js:4:17)
    at Object.<anonymous> (/Users/zhangpeiji/WebstormProjects/JS/test.js:6:2)
    at Module._compile (internal/modules/cjs/loader.js:1185:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1205:10)
    at Module.load (internal/modules/cjs/loader.js:1034:32)
    at Function.Module._load (internal/modules/cjs/loader.js:923:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at internal/main/run_main_module.js:17:47 
```


#### string
要被解析的值。如果参数不是一个字符串，则将其转换为字符串(使用  ToString 抽象操作)。字符串开头的空白符将会被忽略。


#### radix
一个介于2和36之间的整数(数学系统的基础)，表示上述字符串的**基数**。比如参数"10"表示使用我们通常使用的十进制数值系统。**始终指定此参数**可以消除阅读该代码时的困惑并且保证转换结果可预测。当未指定基数时，不同的实现会产生不同的结果，通常将值**默认为10**。


**2.** map 函数等价于  
```JavaScript
['1', '2', '3'].map((string, index) => return parseInt(string, index)) 
```


**3.** 返回值  
返回一个整数或NaN


**4.** 规约1  
如果**parseInt**遇到了不属于**radix**参数所指定的基数中的字符那么该字符和其后的字符都将被忽略。接着返回已经解析的整数部分。**parseInt**将截取整数部分。开头和结尾的空白符允许存在，会被忽略。


**5.** 规约2  
在基数为**undefined**，或者基数为**0**或者没有指定的情况下，JavaScript 作如下处理：  
* 如果字符串**string**以"0x"或者"0X"开头, 则基数是**16 (16进制)** 。 
* 如果字符串**string**以"0"开头, 基数是**8（八进制）或者10（十进制）**，那么具体是哪个基数由实现环境决定。ECMAScript 5 规定使用10，但是并不是所有的浏览器都遵循这个规定。因此，**永远都要明确给出radix参数的值**。  
* 如果字符串**string**以其它任何值开头，则基数是**10 (十进制)**。  
如果第一个字符不能被转换成数字，**parseInt**返回**NaN**。


### 例题详解
**例一**  
```JavaScript
['1', '2', '3'].map(parseInt)  

//答案  
[1, NaN, NaN]
```

**解析**  
```JavaScript
// 答案解析  
['1', '2', '3'].map((string, index) => return parseInt(string, index)) === [parseInt('1', 0), parseInt('2', 1), parseInt('3', 2)]  

parseInt('1', 0) 按照 知识点5(规约2)，等价于 parseInt('1', 10) 等价于 parseInt('1', undefined) 等价于 parseInt('1') === 1  

parseInt('2', 1) 按照 知识点1(语法) 发现不满足radius在2~36之间，那么按照 知识点5(规约2)，匹配不到任何一种情况，按照知识点2，无法返回整数，那么就只能返回NaN  

parseInt('3', 2) 按照 知识点1（语法）发现，2代表二进制数，那么应该将'3'解析开始按照二进制进行解析，但是在二进制中，只能识别0和1,3是无法被识别的，所以返回NaN
```

**例二**  
```JavaScript
['10','10','10','10','10'].map(parseInt); 

//答案  
[10, NaN, 2, 3, 4]
```

**解析**  
```JavaScript
// 答案解析  

// 答案解析
['10','10','10','10','10'].map(parseInt); 
等价于  ['10','10','10','10','10'].map((string, index) => return parseInt(string, index)) === [parseInt('10', 0), parseInt('10', 1), parseInt('10', 2), parseInt('10', 3), parseInt('10', 4)]

parseInt('10', 0) 按照 知识点1，radius不满足，那么按照知识点5(规约2)，等价于 parseInt('10', 10) 等价于 parseInt('10', undefined) 等价于 parseInt('10') === 10

parseInt('10', 1) 按照 知识点1(语法) 发现不满足radius在2~36之间，那么按照 知识点5(规约2)，匹配不到任何一种情况，按照知识点2，无法返回整数，那么就只能返回NaN 

parseInt('10', 2) 按照 知识点1（语法）发现，2代表二进制数，那么应该将'10'解析开始按照二进制进行解析，那么该值等于 1* 2 + 0 * 1 = 2;也就是  1 * 2的1次方 + 0 * 2 的 0次方

parseInt('10', 3) 按照 知识点1（语法）发现，3代表三进制数，那么应该将'10'解析开始按照三进制进行解析，那么该值等于 1* 3 + 0 * 1 = 3;也就是  1 * 3的1次方 + 0 * 3 的 0次方

parseInt('10', 4) 按照 知识点1（语法）发现，4代表四进制数，那么应该将'10'解析开始按照四进制进行解析，那么该值等于 1* 4+ 0 * 1 = 4;也就是  1 * 4的1次方 + 0 * 4 的 0次方
```


**例三**  
```JavaScript
//上面的例子再延伸一下
['10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10','10'].map(parseInt);

//答案  
[10, NaN, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, NaN, NaN, NaN, NaN, NaN]
```

终于搞明白了！

