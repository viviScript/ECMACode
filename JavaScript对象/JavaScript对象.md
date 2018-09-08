# JavaScript对象

## 创建对象

* 在JavaScript中，对象为‘王’。
* 对象只是一组有命名的值（也称属性）集合的容器。

```javascript
// 创建对象
let cody = new Object();

// 为cody对象的各种属性赋值（使用点表示法）
cody.living = true;
cody.age = 33;
cody.gender = 'male';

console.log(cody); // 输出object {living = true, age = 33, gender = 'male'}

Cody对象是一个值，通过创建对象将这个值表示JavaScript对象，给对象命名，然后将属性赋值给对象。
```

* 对象是属性的容器，每个属性都有一个名称和一个值。
* JavaScript采用具有命名值属性的容器（即对象）这一概念作为在JavaScript中表达值的构建快。

* ```在JavaScript中，方法是包含Function()对象的属性，其目的是对函数内部的对象进行操作。```

```javascript
// 创建对象
let cody = new Object();

// 为cody对象的各种属性赋值（使用点表示法）
cody.living = true;
cody.age = 33;
cody.gender = 'male';
cody.getGender = function() {return cody.gender;};

console.log(cody.getGenter()); // 输出'male'

如果没有方法，除了用于存储静态属性意外，对象就没有其他太多用途。
```

* 将构造函数视为模板或者饼干模具，来生成预定义对象。

由Object()构造函数创建的对象与通过string()构造函数创建的字符串对象没有太大区别。

```javascript
let myObject = new Object();    // 生成一个Object对象
myObject['0'] = 'f';
myObject['1'] = 'o';
myObject['2'] = 'o';

console.log(myObject);  // 输出Object{0='f',1='o',2='o'};

let myString = new String('foo');   // 生成一个string()对象

console.log(myString);  // 输出 foo{0='f',1='o',2='o'}
```

* ```javaScript是用对象来表示值的。```

```javascript
// 使用Object()构造函数创建codyA对象

let codyA = new Object();
codyA.living = true;
codyA.age = 33;
codyA.gender = 'male';
codyA.getGenter = function() {return codyA.gender;};

console.log(codyA); // 输出Object{living= true,age=33,gender='male',...}

/*
*使用自定义Person()构造函数创建，然后使用'new'关键字进行实例化
*/

let Person = function (living, age, gender) {
    this.living = living;
    this.age = age;
    this.gender = gender;
    this.getGenter = function () {
        return this.gender;
    }
};

 // 输出Object{living= true,age=33,gender='male',...}
let codyB = new Person(true, 33, 'male');
console.log(codyB);
```

* ```JavaScript实际上是一种预包装若干原生对象构造函数的语言。这些构造函数生成一些表达特定类型值（如数字，字符串，函数，对象，数组）的复杂对象。```
* ```也可通过Function()对象创建自定义的对象构造函数，不管是否是用于创建对象的模式，产生的最终结果通常是创建一个复杂的对象。```

## JavaScript构造函数构建并返回对象实例

* 构造函数的作用是创建多个共享特定特性和行为的对象。
* 构造函数主要是一种用于生成对象的模型或者饼干模具，这些对象具有默认属性和属性方法。

* 如果使用'new'关键字调用某函数，JavaScript会给予该函数特殊待遇，将该函数的this设置为正在构建的新对象，还默认返回新创建的对象（即this），而不是虚假值。该函数返回的新对象则被认为是构建该对象的构造函数的实例。

```javascript
// person是一个构造函数，可以使用new关键字进行实例化
let Person = function(living, age, gender) {

    // 下面this表示即将创建的新对象（即，this = new Object();）
    this.living = living;
    this.age = age;
    this.gender = gender;
    this.getGender = function () {
        return this.gender;
    }
    // 一旦该Person函数使用new关键字调用，就返回this，而不是undefined。
};

// 实例化Person对象，命名为Cody
let cody = new Person(true, 33, 'male');

// cody是一个对象，并且是Person()的一个实例
console.log(tyoeof cody);   // 输出Objec
console.log(cody);  // 输出cody内部的属性和值
console.log(cody.constructor);  // 输出Person()函数
```

自定义构造函数创建对象，与使用Array()构造函数创建Array()对象没有什么不同；

```javascript
// 实例化Array对象，命名为myArray
let myArray = new Array();  // myArray是Array的一个实例

// myArray是一个对象，并且是Array()构造函数的一个实例

console.log(typeof myArray);    // 输出Object

console.log(myArray);   // []

console.log(myArray.constructor);   // 输出Array()
```

* ```在JavaScript中，大多数值（不包括原始值），都涉及到正在被创建的对象，或者是从构造函数实例化的对象。构造函数返回的对象被称为实例。```

## JavaScript原生/内置对象构造函数

* JavaScript语言包含9哥原生（或内置）对象构造函数。
  * Number()
  * String()
  * Boolean()
  * Object()
  * Array()
  * Function()
  * Date()
  * RegExp()
  * Error()
* JavaScript主要是由这9个对象（以及字符串，数字，布尔原始值）来创建的。
* ```Math对象是一个静态对象，而不是构造函数。我们可以直接使用它，而不必使用new关键字去调用。实际上Math只是一个由JavaScript设置的对象命名空间，用于存储数学函数。```
* 原生对象也被称为‘全局对象’，在JavaScript中原生就是可以使用的对象，它是作用域链中的最高层级。
* Number()、String()、Boolean()构造函数不仅能构建对象，而且能为字符串、数字、布尔值提供原始值。如果直接调用这些构造函数，就会返回一个复杂对象。而如果只是简单的在代码中表示一个数字、字符串、布尔值，那么构造函数将返回一个原始值，而不是复杂的对象值。

## 用户自定义/非原生对象构造函数

* ```自定义的构造函数，可以生成多个自定义对象实例。```

```javascript
// person是一个构造函数，可以使用new关键字进行实例化
let Person = function(living, age, gender) {

    // 下面this表示即将创建的新对象（即，this = new Object();）
    this.living = living;
    this.age = age;
    this.gender = gender;
    this.getGender = function () {
        return this.gender;
    }
    // 一旦该Person函数使用new关键字调用，就返回this，而不是undefined。
};

// 实例化Person对象，命名为Cody
let cody = new Person(true, 33, 'male');
console.log(cody);  // 输出object{living=true,age=33,gender='male',...};

let cody = new Person(true, 34, 'male');
console.log(cody);  // 输出object{living=true,age=34,gender='male',...};

```

* ```创建自定义构造函数，只是在使用JavaScript本身在原生构造函数中所使用的相同的模式。```
* ```创建将要与new操作符一起使用的自定义构造函数时，最佳的做法是保持构造函数名称的第一个字符大写：Person(),而不是person()。```

## 使用new操作符实例化构造函数

* ```构造函数从根本上来说时用于创建预配置对象的模具模版。```

```javascript
let myString = new String('foo');

console.log(myString);  // 输出foo{0='f',1='o',2='o'}

```

* JavaScript语言具有9种原生预定义的构造函数，可以在任意一个构造函数上应用new操作符来实例化一个对象实例。

```javascript
// 使用new关键字实例化每个原生构造函数

let myNumber = new Number(33);
let myString = new String('male');
let myBoolean = new Boolean(false);
let myObject = new Object();
let myArray = new Array('foo','bar');
let myFunction = new Function('x','y','return x*y');
let myDate = new Date();
let myRegExp = new RegExp();
let myError = new Error();

// 输出/验证哪个构造函数创建了该对象
console.log(myNumber.constructor);  // 输出Number()
console.log(myString.constructor);  // 输出String()
console.log(myBoolean.constructor);  // 输出Boolean()
console.log(myArray.constructor);  // 输出Array()
console.log(myFunction.constructor);  // 输出Function()
console.log(myDate.constructor);  // 输出Date()
console.log(myRegExp.constructor);  // 输出RegExp()
console.log(myError.constructor);  // 输出Error()
```

* ```Math是一个静态对象---其他方法的容器，它不是使用new运算符的构造函数。```

## 从构造函数创建字面量值

```javascript
let myNumber = new Number(23); // 对象
let myNumberLiteral = 23;   // 原始数字值，而非对象

let myString = new String('male');  // 对象
let myStringLiteral = 'male'    // 原始字符值，而非对象

let myBoolean = new Boolean(false);  // 对象
let myBooleanLiteral = false;   // 原始布尔值，而非对象

let myObject = new Object();
let myObjectLiteral = {};

let myArray = new Array('foo','bar');
let myArrayLiteral = ['foo','bar'];

let myFunction = new Function();
let myFunctionLiteral = function () {};

let myRegExp = new RegExp();
let myRegExpLiteral = /\bt[a-z]+\b/;

// 验证创建 自同样的构造函数的字面量

console.log(myNumber.constructor, myNumberLiteral.construtor);
console.log(myString.constructor, myStringLiteral.construtor);
console.log(myBoolean.constructor, myBooleanLiteral.construtor);
console.log(myObject.constructor, myBooleanLiteral.construtor);
console.log(myArray.constructor, myArrayLiteral.construtor);
console.log(myFunction.constructor, myFunctionLiteral.construtor);
console.log(myRegExp.constructor, myRegExpLiteral.construtor);

// 都将输出对象，undefined。
```

* 在针对字符串、数字和布尔值使用字面量值时，只有在该值被视为对象的情况下才会创建实际的复杂对象。

## 原始值（或简单值）

* ```数值、字符串、boolean、null、undefined等JavaScript值被视为原始值。因为他们是不可细化的。```

```javascript
let myString = 'string';
let myNumber = 10;
let myBoolean = false;
let myNull = null;
let myUndefined = undefined;

console.log(myString,myNumber,myBoolean,myNull,myUndefined);

// 假设一个像数组或对象这样的复杂对象可以由多个原始值组成，变成一个复杂的多值集

let myObject = {
    myString: 'string',
    myNumber: 10,
    myBoolean: false,
    myNull: null,
    myUndefined: undefined
}

console.log(myObject)

let myArray = ['string', 10, false, null, undefined]

console.log(myArray)
```

* ```原始值是表示JavaScript中可用的数据/信息的最底层形式（即最简单形式）```

## null、undefined、'string'、10、true和false等原始值不是对象

* ```原始值的特殊之处在于他们是用于表示简单值。```

## 如何存储和赋值原始值

* ```原始值是作为不可细化的值进行存储和操作的。引用他们会转移其值。```
* ```原始值的赋值与存储是会重新指向值的引用地址,而复杂值则不会更改引用地址```

```javascript
let myString = 'foo';   // 创建原始值字符对象
let myStringcopy = myString;    // 复制字符并存储到新变量上

let myString = null;    //  操作存储在myString变量中的值

/*
*原来的值从myString赋值到了myStringcopy上，更新myString后，再检测myStringcopy可证实
*/

console.log(myString, myStringcopy);    // 输出null, foo
```

## 原始值比较 采用 值比较

* 可以通过比较原始值来确定其值在字面量上是否相同。

```javascript
let price1 = 10;
let price2 =10;
let price3 = new Number('10');  // 复杂数字对象，因为使用了new
let price4 = price3

console.log(price1 === price2); // 输出true

// 输出false，因为price3包含了复杂数字变量，而price1是原始值
console.log(price1 === price3)

// 输出true，因为复杂对象采用引用比较，而不是值比较
console.log(price3 === priec4)

// 如果price4的值为原始值
price4 = 10;
console.log(price4 === price3); // false，price4此刻是原始值，而非复杂对象
```

## 原始值(String,Number,Boolean)在被用作对象时就像对象

* ```原始值被当作构造函数创建的一个对象来使用时，JavaScript会将其转换为一个对象，以便可以使用对象的特性，而后抛弃对象性质，并将它变回原始值。```

```javascript
// 生成原始值
let mynull = null
let myUndefined = undefined;
let primitiveString1 = 'foo';
let primitiveString2 = String('foo')
let primitiveNumber1 = 10;
let primitiveNumber2 = Number('10')

// 把原始值当对象使用时，原始值就会转化为对象

// 输出string string
console.log(primitiveString1.toString(), primitiveString2.toString())

```

## 复杂值（或组合值)

* ```原生对象构造函数Object()、Array()、Function()、Date()、Error()、RegExp()是复杂类型，因为它们包含一个或多个原始值或复杂值。```

* ```本质上，复杂值可以由很多不同类型的JavaScript对象组成。```

```javascript
// 简单的原始值，原始值不能代表复杂值，而复杂值可以封装成任意JavaScript值
let myString = 'string';
let myNumber = 10;
let myBoolean = false;
let myNull = null;
let myUndefined = undefined;

console.log(myString,myNumber,myBoolean,myNull,myUndefined);

// 假设一个像数组或对象这样的复杂对象可以由多个原始值组成，变成一个复杂的多值集

let myObject = {
    myString: 'string',
    myNumber: 10,
    myBoolean: false,
    myNull: null,
    myUndefined: undefined
}

console.log(myObject)

let myArray = ['string', 10, false, null, undefined]

console.log(myArray)
```

* ```复杂值是各种值的组合，并且在复杂性和组合方面与原始值不同。```

## 如何存储或复制复杂值

* ```复杂值是通过引用进行存储和操作的```
* ```创建一个包含复杂对象的变量时，其值是内存中的一个引用地址。```
* ```引用一个对象时，使用它的名称（即变量或对象属性）通过内存中的引用地址获取该对象值```

```javascript
let myObject = {}
let copyOfMyObject = myObject;  // 没有复制值，而是复制了引用

myObject.foo = 'bar'    // 操作myObject中的值

// 输出myObject和copyOfMyObject的值，则均会输出foo属性，因为他们引用的是同一个地址
console.log(myObject,copyOfMyObject);   // 输出 Object{foo='bar'}
```

* ```复杂值的内存引用地址未改变，所以都指向的同一个内存地址，因为都会改变```
* ```当更改复杂值时，所有引用相同地址的变量的值都会被修改，因为复杂值是通过引用进行存储的。```

## 复杂对象比较 采用 引用比较

* 复杂对象只有在引用相同的对象（即有相同的地址）时才相等。

```javascript
let objectFoo = { same: 'same' }
let objectBar = { same: 'same' }

// 输出false，JS并不关注他们的类型是否相同
console.log(objectFoo === objectBar)

// 复杂对象如何才相等
let objectA = {foo: 'bar'};
let objectB = objectA;

console.log(objectA === objectB);   // true,因为他们引用的是同一个内存地址
```

* ```指向内存中复杂对象的变量，只有在引用相同‘地址’的情况下才是相等的。相反，两个单独创建的对象，即使具有相同的类型并拥有完全相同的属性，他们也是不相等的。```

## 复杂对象具有动态属性

* ```复杂对象可以根据需求有任意多个引用，即使对象改变，他们也总指向同一个对象。```

```javascript
let objA = {property: 'value'};
let pointer1 = objA;
var pointer2 = pointer1;

// 更新objA.property，所有引用都会被更新了
ObjA.property = null;

// 输出‘null null null'，因为objA,proter1,proter2引用的都是同一对象.
console.log(objA.property,proter1.property,proter2.property)
```

## typeof操作符

* typeof操作符用于返回正在使用的类型。

## 构造函数实例都拥有指向其构造函数的Constructor属性

* ```任何对象实例化时，都是在幕后将constructor属性创建为对象/实例的属性。这是指创建对象的构造函数。```

```javascript
let foo = {};
coonsole.log(foo.constructor === Object);   // 输出true 因为object()构建了foo

console.log(foo.constructor);   // 指向object()构造函数
```