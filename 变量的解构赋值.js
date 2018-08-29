// let [a, b, c] = [1, 2, 3]
// console.log(a,b,c)

// let [foo, [[bar], baz]] = [1, [[2], 3]]
// console.log(foo, bar, baz)

// let [,, third] = ['foo', 'bar', 'baz']
// console.log(third)

// let [x, , y] = [1,2,3]
// console.log(x,y)

// let [head, ...tail] = [1,2,3,4,5,6,7,8,9]
// console.log(head, tail) 

// let [aa, bb, ...cc] = ['a'] 
// console.log(aa,bb,cc) 

// let [foo] = [] 
// let [bar, foo2] = [1] 
// console.log(foo, bar, foo2)

// let [x,y] = [1,2,3]
// console.log(x,y)

// let [a,[b], d] = [1,[2,3],4]
// console.log(a,b,d)

// 报错
// let [foo] = 1
// let [foo] = false
// let [foo] = NaN
// let [foo] = undefined
// let [foo] = undefined
// let [foo] = null
// let [foo] = {}

// let [x,y,z] = new Set(['a','b','c'])
// console.log(x,y,z)

function *fibs() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a,b] = [b,a + b]
    }
}
let {first, second, third, fourth, fifth, sixth} = fibs()
console.log(first, second, third, fourth, fifth, sixth)
