function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number {
    return x + y;
}

let myAdd1: (x: number, y: number) => number = 
    function (x: number, y: number): number {return x + y;}

function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
        return firstName + " " + lastName
    } else {
        return firstName
    }
}

let result1 = buildName('Bob', 'Adams')

function buildName1(firstName: string, ...restofName:string[]) {
    return firstName + " " + restofName.join('');
}

let employeeName = buildName1('Joseph', 'asfsaf', 'aasgasg', 'agasgasg')


let buildNameFun: (fname: string, ...rest: string[]) => string = buildName

interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
    suits: ['']
}

let suits = ['hearts', 'spades', 'clubs', 'diamonds'];

function pickCard(x: {suit:string; card: number}[]): number;

function pickCard(x: number): {suit: string; card: number};

function pickCard(x): any {
    if (typeof x === 'object') {
        let pickedCard = Math.floor(Math.random() * x.lenght);
        return pickedCard
    } 
    else if (typeof x === 'number') {
        let pickedSuit = Math.floor(x / 13);
        return {
            suit: suits[pickedSuit],
            card: x % 13
        }
    }
}

let myDeck = [
    {suit: 'diamonds', card: 2},
    {suit: 'speads', card: 10}
]


let pickedCard2 = myDeck[pickCard(myDeck)]
