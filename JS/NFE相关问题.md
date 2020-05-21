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

**2.** 代码中<code>A = 1</code>试图改变自由变量<code>A</code>的值，但是没有生效！  
```JavaScript
(function A() {
    console.log(A); // [Function A]
    A = 1;
    console.log(window.A); // undefined
    console.log(A); // [Function A]
}()) 
```
这是一个**立即执行函数表达式(Immediately-invoked function expression, IIFE)** ，更特殊的是，该函数是一个**具名函数表达式(Named function expression, NFE)** 。  
NFE相关特性：  
* 作为函数名的标识符(在这里是<code>A</code>)只能从函数体内部访问，在函数外部访问不到(IE9+)。[ES5 Section13](http://ecma-international.org/ecma-262/5.1/#sec-13)特别提到了这一点：  
>The Identifier in a FunctionExpression can be referenced from inside the FunctionExpression's FunctionBody to allow the function to call itself recursively. However, unlike in a FunctionDeclaration, the Identifier in a FunctionExpression cannot be referenced from and does not affect the scope enclosing the FunctionExpression.
  
* 绑定为函数名的标识符(这里是<code>A</code>)，不能再绑定为其他值，即该标识符绑定是不可更改的(immutable)，所以在NFE函数体内对<code>A</code>重新赋值是无效的。ES5 Section 13 详细描述了创建 NFE 的机制：  
>The production FunctionExpression : function Identifier(FormalParameterListopt){ FunctionBody }is evaluated as follows:  
    (1)Let funcEnv be the result of calling NewDeclarativeEnvironment passing the running execution context’s Lexical           Environment as the argument.  
    (2)Let envRec be funcEnv’s environment record.  
    (3)Call the CreateImmutableBinding concrete method of envRec passing the String value of Identifier as the argument.  
    (4)Let closure be the result of creating a new Function object as specified in 13.2 with parameters specified by           FormalParameterListopt and body specified by FunctionBody. Pass in funcEnv as the Scope. Pass in true as the Strict flag     if the FunctionExpression is contained in strict code or if its FunctionBody is strict code.  
    (5)Call the InitializeImmutableBinding concrete method of envRec passing the String value of Identifier and closure as the arguments.  
    (6)Return closure.
 
注意步骤 3 和 5，分别调用了 createImmutableBinding 和 InitializeImmutableBinding 内部方法，创建的是不可更改的绑定。  
要理解这两个特性，最重要的是搞清楚标识符<code>A</code>的绑定记录保存在哪里。让我们问自己几个问题：  
1.标识符<code>A</code>与该 NFE 是什么关系？  
两层关系：首先，该 NFE 的<code>name</code>属性是字符串<code>'A'</code>；更重要的是，<code>A</code>是该 NFE 的一个自由变量。在函数体内部，我们引用了<code>A</code>，**但<code>A</code>既不是该 NFE 的形参，又不是它的局部变量，那它不是自由变量是什么！** 解析自由变量，要从函数的 [[scope]] 内部属性所保存的词法环境 (Lexical Environment) 中查找变量的绑定记录。

2.标识符<code>A</code>保存在全局执行环境（Global Execution Context）的词法环境(Lexical Environment)中吗？  
答案是否。如果你仔细看过 ES5 Section 13 这一节，会发现创建 NFE 比创建 匿名函数表达式 （Anonymous Function Expression, AFE） 和 函数声明 (Function Declaration) 的过程要复杂得多。  

那为什么创建 NFE 要搞得那么复杂呢？就是为了**实现 NFE 的只能从函数内部访问<code>A</code>，而不能从外部访问这一特性！**  
创建 NFE 时，创建了一个专门的词法环境用于保存<code>A</code>的绑定记录(见上面步骤 1~3)！对于 NFE, 有如下关系：  
```Javascript
A.[[scope]] --->  Lexical Environment {'environment record': {A: function ...}, outer: --}----> Lexical Environment of Global Context {'environment record': {...}, outer --}---> null
```  

可见，<code>A</code>的绑定记录不在全局执行上下文的词法环境中，故不能从外部访问！

如果简单理解的话：  
**NFE其实就简单两条规则：1.只能在函数体内访问，2.函数名变量可以理解为常量，不可变。**  
假如函数内部声明了同名变量<code>A</code>，或者提供了形参<code>A</code>，又或者内部声明一个函数<code>A</code>，局部变量或局部函数会遮蔽 (shadow) 自由变量。请看例子如下所示：  

### 例题详解
**例一**  
```JavaScript
(function A() {
    console.log(A); // undefined
    var A = 1;
    console.log(window.A); // undefined
    console.log(A); // 1
}()) 
```

**解析**   
这个还是很好理解的，var语句被hoist到函数顶端，函数内定义了变量<code>A</code>但是没有赋值，所以第一个log是undefined，因为有var，并没有向global添加属性，因此window.A也是undefined。

**例二**  
```JavaScript
function A() {
    console.log(A); // [Function A]
    A = 1;
    console.log(window.A); // 1
    console.log(A); // 1
}
A();
```

**解析**  
不在立即执行这个函数，结果也很符合直觉，打第一个log时，函数作用域内没有找到<code>A</code>，因此向上层查找，找到函数<code>A</code>；然后<code>A = 1</code>使得window对象多了一个属性，第二个log结果是1，第三个log显然也是1。



终于搞明白了！

