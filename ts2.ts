function f(bool: boolean) {
    if (bool) {
        var x = 10;
    }
    return x
}

console.log(f(true));
console.log(f(false));

const numLivesForCat = 9;

const kitty = {
    name: 'wanshuang',
    numLives: numLivesForCat,
}

kitty.name = 'aaaa';
kitty.numLives--;
let input = [1,2]
function ff([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
ff(input)