// let cody = new Object();

// cody.living = true;
// cody.age = 33;
// cody.gender = 'male';
// cody.getGenter = function () {
//     return cody.gender;
// }
// console.log(cody);
// console.log(cody.getGenter());

// let myObject = new Object()

// myObject['0'] = 'f';
// myObject['1'] = 'o';
// myObject['2'] = 'o';

// console.log(myObject);

// let myString = new String('foo');
// console.log(myString)

// let Person = function(living, age, gender) {
//     this.living = living;
//     this.age = age;
//     this.gender = gender;
//     this.getGenter = function() {
//         return this.gender;
//     }
// }

// let codyA = new Person(true, 33, 'male');

// console.log(typeof codyA);
// console.log(codyA);
// console.log(codyA.constructor);

// let myArray = new Array();

// console.log(typeof myArray);
// console.log(myArray);
// console.log(myArray.constructor);


// let myNumber = new Number(23); // 对象
// let myNumberLiteral = 23;   // 原始数字值，而非对象

// let myString = new String('male');  // 对象
// let myStringLiteral = 'male'    // 原始字符值，而非对象

// let myBoolean = new Boolean(false);  // 对象
// let myBooleanLiteral = false;   // 原始布尔值，而非对象

// let myObject = new Object();
// let myObjectLiteral = {};

// let myArray = new Array('foo','bar');
// let myArrayLiteral = ['foo','bar'];

// let myFunction = new Function();
// let myFunctionLiteral = function () {};

// let myRegExp = new RegExp();
// let myRegExpLiteral = /\bt[a-z]+\b/;

// // 验证创建 自同样的构造函数的字面量

// console.log(myNumber.constructor, myNumberLiteral.construtor);
// console.log(myString.constructor, myStringLiteral.construtor);
// console.log(myBoolean.constructor, myBooleanLiteral.construtor);
// console.log(myObject.constructor, myBooleanLiteral.construtor);
// console.log(myArray.constructor, myArrayLiteral.construtor);
// console.log(myFunction.constructor, myFunctionLiteral.construtor);
// console.log(myRegExp.constructor, myRegExpLiteral.construtor);
let myObject = {
    myString: 'string',
    myNumber: 10,
    myBoolean: false,
    myNull: null,
    myUndefined: undefined
}

console.log(myObject)


let myString = 'foo';
let myStringCopy = myString;
myString = null
console.log(myString, myStringCopy)

let a = 1;
let b = a;
a = 3;
console.log(a,b)