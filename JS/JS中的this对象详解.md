## JS中的this对象详解 

### 一、方法调用模式  
* 当函数被保存为一个对象的属性时，它就可称为这个对象的方法。当一个方法被调用时，this被绑定到这个对象上。如果调用表达式包含一个提取属性的动作(.或[])，那么被称为方法调用。例如：  

```JavaScript
var name = "window";  
var obj = {  
  name: "kxy",  
  sayName: function(){  
    console.log(this.name);  
  }  
};  
obj.sayName();&emsp;&emsp;//kxy
```

sayName函数作为对象obj的方法调用，所以函数体中的this就代表obj对象。  

 

### 二、函数调用模式    

* 当一个函数并非一个对象的属性时，那么它就是被当做函数来调用的。在此模式下，this被绑定为全局变量，在浏览器环境下就是window对象。例如：

```JavaScript
var name = "window";  
function sayName(){  
  console.log(this.name);  
}  
sayName();
```

sayName以函数调用模式调用，所以函数体重的this代表window对象。  


### 三、构造函数模式
* 如果在一个函数前面加上new关键字来调用，那么就会创建一个连接到该函数的prototype成员的新对象，同时，this会被绑定到这个新对象上。这种情况下，这个函数就可以成为此对象的构造函数。例如：  

```JavaScript
function Obj(){  
  this.name = "kxy";
var person = new Obj();  
console.log(person.name); //kxy
```

Obj作为构造函数被调用，函数体内的this被绑定为新创建的对象person。


### 四、apply调用模式
* 在JS中，函数也是对象，所有函数对象都有两个方法：apply和call，这两个方法可以让我们构建一个参数数组传递给调用函数，也允许我们改变this的值。例如：  

```JavaScript
var name = "window";  
var person = {  
  name: "kxy"  
};  
function sayName(){  
  console.log(this.name);  
}  
sayName();  //window  
sayName.apply(person);  //kxy  
sayName.apply();  //window
```

当以函数调用模式调用sayName时，this代表window；当用apply模式调用sayName，并给它传入第一个参数person时，this被绑定到person对象上。如果不给apply传入任何参数，则this代表window。

### 例子  
* 相关练习：  
```JavaScript
var name = "window";  
function showName(){  
  console.log(this.name);  
}  
var person1 = {  
  name: "kxy",  
  sayName: showName  
}  
var person2 = {  
  name: "Jake",  
  sayName: function(){  
  var fun = person1.sayName;  
    fun();  
  }  
}  
person1.sayName();&emsp;&emsp;  //kxy  
person2.sayName();&emsp;&emsp;  //window 
```

首先时刻提醒自己this是在函数执行时被绑定的，不要被赋值语句扰乱。  
先看第一个执行语句：person1.sayName();这是方法调用模式，对象为person1，再看sayName被赋值为全局函数对象showName，在showName执行时，this绑定的
是person1，所以结果是"kxy"。  

再看第二个执行语句：person2.sayName(); 这还是方法调用模式，对象为person2，调用的是它的sayName方法。再看sayName函数体，发现函数体最终执行的函数是fun，fun是用函数调用模式调用的。而fun最终也被赋值为showName函数，因为fun是用函数调用模式调用的，所以这里的this绑定为window，结果为”window“。
