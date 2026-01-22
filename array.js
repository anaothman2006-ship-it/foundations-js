/*
const a = [ ["t", "h", "m", "a"], 
            ["i", "n",]
          ];
a[0].unshift("o");
a[0].push("n");

a[1].unshift("k")
a[1].push("g")

console.log(a[0]);
console.log(a[1]);
const table = [ 
   ["t", "h", "m", "a"], 
   ["i", "n",]
];

const firstRaw = table[0];

firstRaw.unshift("O");
firstRaw.push("n")
console.log("Firstrow", firstRaw)


const secondRow = table[1];

secondRow.unshift("K");
secondRow.push("g");
console.log("Secondrow", secondRow)

const a = [
   ["O", "t", "h", "m"],
   [24, 6, 2006]
];
a[0] = 1
console.log(a[1])


let fruits = ["apple", "orange", "plum",];

fruits[2] = "banana"
fruits[3] = "lemon"
console.log(fruits)
console.log(fruits.length)

let arr = ['apple', {name: 'john'}, true, function() {console.log("hello")}];
console.log(arr[1].name);
arr[3]();  


let arr = ["banana", "apple", "lemon",];
console.log(arr[-1]); undefined
console.log(arr[arr.length-1] ); // arr.length = 3 -1 = 2
console.log(arr.at(-1)); // best way
console.log(arr);

let arr = ["banana", "apple", "lemon",];
console.log(arr.at(-1))

let arr = ["banana", "apple", "lemon", "strawberry",];
alert(arr.pop()); // remove "Pear" and alert it
console.log(arr)

let arr = ["banana", "apple", "lemon", "strawberry",];
arr.push("Othman");
console.log(arr)

let arr = ["banana", "apple", "lemon", "strawberry",];
alert(arr.shift(0)); // remove Apple and alert it
console.log(arr);

let arr = ["banana", "apple", "lemon", "strawberry",];
arr.unshift("hello");
console.log(arr)
// Methods push and unshift can add multiple elements at once:
*/
let arr = ["lemon"];
arr.unshift('strawberry', 'lemon');
arr.push('orange', 'pineapple');
console.log(arr)