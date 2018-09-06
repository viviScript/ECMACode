// function ajax(url:string, 
//         success:(res:string,code:number)=>void,
//         error:(code:number)=>void) {
//         }
// ajax(
//     '1.txt',
//     function (str: number, code: number) {
//     },
//     function (code: number) {
//     }
// )
function Person(num) {
    this.num = num;
}
Person.prototype.addNum = function () {
    this.num++;
};
Person.prototype.getNum = function () {
    return this.num;
};
var person = new Person(11);
console.log(person.getNum());
console.log(person.getNum());
console.log(person.getNum());
console.log(person.getNum());
console.log(person.getNum());
