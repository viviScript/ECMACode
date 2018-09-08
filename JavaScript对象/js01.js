let cody = new Object();

cody.living = true;
cody.age = 33;
cody.gender = 'male';
cody.getGenter = function () {
    return cody.gender;
}
console.log(cody);
console.log(cody.getGenter());

let myObject = new Object()

myObject['0'] = 'f';
myObject['1'] = 'o';
myObject['2'] = 'o';

console.log(myObject);

let myString = new String('foo');
console.log(myString)

let Person = function(living, age, gender) {
    this.living = living;
    this.age = age;
    this.gender = gender;
    this.getGenter = function() {
        return this.gender;
    }
}

let codyA = new Person(true, 33, 'male');

console.log(typeof codyA);
console.log(codyA);
console.log(codyA.constructor);

let myArray = new Array();

console.log(typeof myArray);
console.log(myArray);
console.log(myArray.constructor);
