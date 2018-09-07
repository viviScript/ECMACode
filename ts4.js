var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'Hello, ' + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('world');
// class Animal {
//     move (distanceInMeters: number = 0){
//         console.log(`Animal moved ${distanceInMeters}`)
//     }
// }
// class Dog extends Animal {
//     bark() {
//         console.log('Woof Woof');
//     }
// }
// const dog = new Dog();
// dog.bark();
// dog.move(10);
// class Animal2 {
//     name: string;
//     constructor(theName: string) {
//         this.name = theName;
//     }
//     move (distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}`)
//     }
// }
// class Snake extends Animal2 {
//     constructor (name: string) {
//         super(name);
//     }
//     move(distanceInMeters = 5) {
//         console.log('Slithering...');
//         super.move(distanceInMeters);
//     }
// }
// class Horse extends Animal2 {
//     constructor(name: string) {
//         super(name);
//     }
//     move(distanceInMeters = 45) {
//         console.log('Galloping...');
//         super.move(distanceInMeters)
//     }
// }
// let sam = new Snake('Sammy the Python');
// let tom: Animal2 = new Horse('Tommy the Palomino')
// sam.move();
// tom.move(34);
// class Animal3 {
//     public name: string;
//     public constructor(theName: string) {
//         this.name = theName;
//     }
//     public move(distanceInMeters: number) {
//         console.log(`${this.name} moved ${distanceInMeters}`)
//     }
// }
// new Animal3('ccc').name
// class Animal4 {
//     private name: string;
//     constructor(theName: string) {
//         this.name = theName
//     }
// }
// // new Animal4('cat').name
// class Person {
//     protected name: string;
//     protected constructor(name: string) {
//         this.name = name;
//     }
// }
// class Employee extends Person {
//     private department: string;
//     constructor(name: string, deparment: string) {
//         super(name);
//         this.department = deparment;
//     }
//     public getElevatorPitch() {
//         return `Hello, my name is ${this.name} and ${this.department}`
//     }
// }
// let howard = new Employee('howard', 'sales')
// console.log(howard.getElevatorPitch());
// console.log(howard.name);
// // new Person()
// class Octopus {
//     readonly name: string;
//     readonly numberOfLegs: number = 8;
//     constructor (theName: string) {
//         this.name = theName;
//     }
// }
// let dad = new Octopus('asfasfasf')
// dad.name = 'vvvvv'
// class Animal5 {
//     constructor (private name: string) {}
// }
// new Animal5('1');
// let passcode = 'secres passcode';
// class Employee1 {
//     private _fullName: string;
//     get fullName(): string {
//         return this._fullName;
//     }
//     set fullName(newName:string) {
//         this._fullName = newName
//     }
// }
// let employee = new Employee1();
// employee.fullName = 'Bob Smith';
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calulate = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = {
        x: 0,
        y: 0
    };
    return Grid;
}());
var grid1 = new Grid(1.0);
var grid2 = new Grid(5.0);
console.log(grid1.calulate({ x: 1, y: 3 }));
