interface A {
    x: number,
    y: number
}

interface B {
    x: number,
    y: number,
    z: number
}

let str:A | B

console.log(str.z)