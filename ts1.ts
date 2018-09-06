let isDone:boolean = false;

let decLiteral: number = 5;

let nam: string = 'bob';

nam = 'smith';


let list: number[] = [1,2,3];

let list2: Array<number> = [1,2,3,4]

let x: [string, number];

x = ['hello', 10];

// x = [10, 'hello']


enum Color {
    RED,
    GREEN,
    BLUE
}

let c: Color = Color.RED

enum Color {
    Red = 1,
    Green = 2,
    Blue = 3
}

let cc:Color = Color.Green

let notSure: any = 4;
notSure = 'aaa';
notSure = true

let list3: any[] = [1,true, 'aaa'];

list[1] = 100


function warnUser():void {
    alert('没有返回值')
}

let unusable: void = undefined;


function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error('Something failed')
}

function infiniteLoop(): never {
    while (true) {

    }
}