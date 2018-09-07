// // function printLabel(labelledObj: {label: string}) {
// //     console.log(labelledObj.label);
// // }
// let myObj = {
//     size: 10,
//     label: 'Size 10 Object'
// };

// // printLabel(myObj)

// interface LabelledValue {
//     label: string
// }

// function printLabel(labelledObj: LabelledValue) {
//     console.log(labelledObj.label)
// }

// printLabel(myObj)

// interface SquareConfig {
//     color?: string,
//     width?: number
// }
// function createSquare(config: SquareConfig): {color: string, area: number} {
//     let newSquare = {
//         color: 'white',
//         area: 100
//     }
//     if (config.color) {
//         newSquare.color = config.color
//     }
//     if (config.width) {
//         newSquare.area = config.width
//     }
//     return newSquare
// }

// let mySquare = createSquare({color: 'black'});
// console.log(mySquare)

// interface Point {
//     readonly x: number,
//     readonly y: number
// }

// let p1: Point = {x: 10, y: 20};

// // p1.x = 5; // error

// let a:number[] = [1,2,3,4]
// let ro:ReadonlyArray<number> = a;

// // ro[0] = 12;
// // ro.push(5)

// a = ro as number[]

// interface SquareConfig1 {
//     color?: string;
//     width: number;
//     [propName: string]: any
// }

// function createSquare1(config: SquareConfig): {color:string;area:number} {

// }

// let mySquare1 = createSquare1({
//     opacity: 0.5,
//     width:100
// } as SquareConfig1)

interface SearchFunc {
    (
        source: string,
        subString: string
    ): boolean
}
let mySearch: SearchFunc;

mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ['Bob', 'Fred'];

let mySte: string = myArray[0]

class Animal {
    name: string;
}

class Dog extends Animal {
    breed: string;
}

interface NotOkay {
    [x: string]: Animal;
    [x: string]: Dog;
}

interface ClockInterface {
    currentTime: Date
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h:number,m:number) {}
}

interface ClockInterface {
    cureentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) {}}

    interface Shape {
        color: string;
    }

    interface Square extends Shape {
        sideLength: number;
    }

    let square = <Square>{}

    square.color = 'blue';
    square.sideLength = 10;

    interface Counter {
        (start: number): string;
        interval: number;
        reset(): void;
    }

    function getCount(): Counter {
        let counter = <Counter>function (start: number) {}
        counter.interval = 123;
        counter.reset = function() {}
        return counter;
    }