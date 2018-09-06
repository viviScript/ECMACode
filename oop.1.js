var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.showMe = function () {
        console.log(this.name, this.age);
    };
    return Person;
}());
var per = new Person('wangshuang', 18);
per.showMe();
