// function indentity<T>(arg: T): T {
//     return arg;
// }

// let output = indentity<string>('myString')

// let myIndentity: <T>(arg: T) => T = indentity

interface GenericIdentituFn {
    <T>(arg: T): T;
}

function indentity<T>(arg: T): T {
    return arg
}

let myIndentity: GenericIdentituFn = indentity

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x,y) {return x + y}

interface LengthWise {
    length: number;
}

function loggongIdentity<T extends LengthWise>(arg: T): T {
    console.log(arg.length)
    return arg;
}