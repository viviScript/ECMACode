class Calc<T>{
    a: T;
    b: T;
    constructor(a:T,b:T) {
        this.a = a;
        this.b = b;
    }
    show(c:T) {
        alert(this.a)
        alert(this.b)
        alert(c)
    }
}

var obj = new Calc<number>(1,2);

obj.a = 12;
// obj.b = '111';