/*
let test = "othman-is-the-king";

function camelize(str) {
    let result = str
       .split("-")
       .join("")
    return result
}
console.log(camelize(test))


let test = "othman-is-the-king";

function camelize(str) {
    let result = str.split("-")
    for (let i = 0; i < result.length; i++) {
        let word = result[i];
        result[i] = word.slice(0, 1).toUpperCase() + word.slice(1)
    }
    return
    
}
console.log(camelize(test))

let fruit = "apple,banana,orange";

function getSingleWord(word) {
    let result = word.split(",");
    result.map(item => item.length);
    return result
}
console.log(getSingleWord(fruit));

let fruits = ["apple", "banana", "orange"];
let newWord = " Fresh"
let arr = fruits.map(fruit => fruit + newWord);
console.log(arr)


let users = ["ali", "omar", "hind"];
for (let i = 0; i < users.length; i++) {
    let word = users[i];
    users[i] = word.slice(0, 1).toUpperCase() + word.slice(1)
}
console.log(users);



let users = ["ali", "omar", "hind"];
let camelizeArray = 
    users.map(word => word.slice(0, 1).toUpperCase() + word.slice(1));

console.log(users);
console.log(camelizeArray);
let users = ["ali", "omar", "hind"];
for (let i = 0; i < users.length; i++) {
    users[i] = users[i].slice(0, 1).toUpperCase() + users[i].slice(1)
}
console.log(users);



// First Task 

let test = "list-style-image";
let fruit = "apple-banana-apple"

function camelize(str) {
    let arr = str.split("-")
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if (i > 0) {
            arr[i] = word.slice(0, 1).toUpperCase() + word.slice(1)
        }
    } 
    let result = arr.join("")
    return result
}
console.log(camelize(test));
console.log(camelize(fruit));

let test = "list-style-image";
let fruit = "apple-banana-apple"

function camelize(str) {
    let arr = str.split("-");

    let camelizeWord = arr.map((item, index) => {
        if (index > 0) {
            return item.slice(0, 1).toUpperCase() + item.slice(1);
        }
        else if (index === 0) {
            return item
        }
    })
    let result = camelizeWord.join("")

    return result
}

console.log(camelize(test))



// Second Task

let array = [5, 3, 8, 1];

function filterRange(arr, a, b) {
return arr.filter(num => num >= a && num < b)
}
console.log(filterRange(array, 1, 5))
console.log(array)


// Third Task
let array = [5, 3, 8, 1, 7]

function filterRangeInPlace(arr, a, b) {
   for (let i = arr.length - 1; i >= 0; --i) {
    let val = arr[i];
    if (val < a || val > b) {
        arr.splice(i, 1)
    }
   }
}
filterRangeInPlace(array, 1, 4);
console.log(array)

// i = arr.length 5 -1 = i = index 4 i >= 0 
// let val = arr[i] = index 4 === 7 
// 7 < a || 7 > b true
// arr.splice(i, 1) (index 4 == 7, 1)



let evenNumbers = [1, 2, 4, 5, 6, 8, 4, 55];

function getEvenNumbers(arr) {
    for (let i = arr.length - 1; i >= 0; --i) {
        let num = arr[i]
        if (num % 2 != 0) {
            arr.splice(i, 1)
        }
    }
}
getEvenNumbers(evenNumbers)
console.log(evenNumbers)

let array = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    let result = []
    for (let i = 0; i < arr.length; i++){
        let num = arr[i];
        if (num >= a && num < b ) {
            result.push(num)
        }
    }
return result
}
console.log(filterRange(array, 1, 5))


// Fourth Task

let arr = [5, 2, 1, -10, 8];
arr.sort()
console.log(sortArray(arr))



// Fifth Task

let arr = ["HTML", "JavaScript", "CSS"];

function sortArray(arr) {
    return arr.slice().sort()
}

let result = sortArray(arr);

console.log(result);
console.log(arr)

let original = [
    {name: "Othman", age: 19}
]

let copy = original.map(item => item);

copy[0].age = 20;

console.log(original[0].age)

let original = [
    {name: "Othman", age: 19},
]
console.log(original[0].age)
let copy = original.map(item => item);
copy[0].age = 20
console.log(original[0].age)



let names = ["Othman", "Ali", "Zaid"];

let sortedNames = [...names].sort((a, b) => a.length - b.length);
console.log(names);
console.log(sortedNames);


let numbers = [1, 2, 3, 4, 5, 6];

let arr = numbers.slice().copyWithin(0, 1, 3);

console.log(numbers)
console.log(arr)


let students = [
  { name: "Othman", age: 19 },
  { name: "Ali", age: 22 },
  { name: "Zaid", age: 18 }
];
let sortedStudents = structuredClone(students).sort((a, b) => a.name.length - b.name.length);
sortedStudents[0].age = 20;

console.log(students)
console.log(sortedStudents)


let numbers = [1, 2, 3, 4];

numbers.forEach((num, index) => {
  console.log(`Processing: ${num}`);
  if (num === 2) {
    numbers.shift();
  }
});

console.log(numbers);


let numbers = [1, 2, 3, 4];
let filterNumbers = numbers.filter(num => num !== 2);
console.log(numbers);
console.log(filterNumbers)



const arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 2,
};

console.log(Array.prototype.join.call(arrayLike, "+"))


const a = { length: 0.7 };
Array.prototype.push.call(a);
console.log(a.length); // 0
// 


let arr = ["othman", "ahmed", "reda", "oumayma"];

let filterArr = arr.filter(item => item.startsWith("o"));// what is better charAt(0) or slice(0, 1);

console.log(arr);
console.log(filterArr);


let prices = [10, 20, 30, 40];

let totalPrice = prices
        .map(price => price + 10)
        .filter(price => price > 25)
        .reduce((acc, curr) => acc + curr)

console.log(prices);
console.log(totalPrice);


let getUserName = prompt("Enter your name and replace the space with -: ");

let splitUserName = getUserName
        .split("-")
        .map(item => item.trim())
        .filter(item => item)

console.log(splitUserName);


function getSplitUserName() {
    let getUserName = prompt("Enter your name and replace the space with -: ");
    if (!getUserName) {
        return []
    }
    let splitUserName = getUserName
            .split("-")
            .map(item => item.trim())
            .filter(item => item)

   
    return splitUserName;
}
let names = getSplitUserName();
console.log(names);
names.forEach(name => {
    console.log(`Welcome ${name}`)
});

const fruits = ["Apple", "Banana"];
const fruitsString = fruits.join(", ");
console.log(fruitsString);


const names = ["Othman", "ahmed"];
const strNames = names.join(" & ");
console.log(names);

let colors = ["Red", "Green", "Blue", "Yellow"];
let arr = colors.slice(1, 3);
console.log(colors);
console.log(arr);


const names = ["Othman", "Ahmed", "Sara", "Ali"];
const spliceNames = names.toSpliced(0, 2);
const result = spliceNames.join(" & ")

console.log(result)


const names = ["Othman", "Ahmed", "Sara", "Ali"];
const result = names
        .slice(-2)
        .join(" & ")

console.log(result)


const fruits = ["banana", "apple"];
console.log(fruits.indexOf(1))


const fruits = ["banana", "apple"];
console.log(fruits.includes("cherry"));
console.log(fruits.includes("banana"));

console.log(fruits.indexOf("banana"));
console.log(fruits.indexOf("banana") !== -1)


const fruits = ["Apple", "Banana"];
const newLength = fruits.push("banana");
console.log(fruits)
console.log(newLength); //  length


const fruits = ["Apple", "Banana", "Orange"];
const removedItem = fruits.pop();
console.log(fruits);
alert(removedItem);



const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const start = -2;
const removedItems = fruits.splice(start);
console.log(fruits);
console.log(removedItems);


const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const removedFirstItem = fruits.shift();
console.log(fruits);
console.log(removedFirstItem);


const arr = ["Othman", "is", "not", "the", "king"];
const start = 2;
const deleteCount = 1;
const removedItems = arr.splice(start, deleteCount);
console.log(arr);
console.log(`removed Item: ${removedItems}`);


const arr = ["is", "the", "king",];
const newLength = arr.unshift("Othman");
console.log(arr);
console.log(newLength);



const arr = ["Othman", "is", "not", "the", "king"];
const start = 2;
const deleteCount = 1;
const addedItem = "Always"
const removedItems = arr.splice(start, deleteCount, addedItem);
console.log(arr);
console.log(`removed Item: ${removedItems}`);

const names = [
  "Othman", "Ahmed", "Sami", "Zain", "Nasser", 
  "Omar", "Mariam", "Laila", "Yassine", "Hamza",
  "Sara", "Ali", "Hassan", "Nour", "Fatima",
  "Yousef", "Ibrahim", "Khaled", "Amira", "Rayan"
];
const start = names.indexOf("Mariam");
console.log(start);
const deleteCount = 1;
const addNewName = "Safaaaaaaaaaaaaaaa"
const removedNames = names.splice(start, deleteCount, addNewName);

console.log(names);



// #############################
const names = [
  "Othman", "Ahmed", "Sami", "Zain", "Nasser", 
  "Omar", "Mariam", "Laila", "Yassine", "Hamza",
  "Sara", "Ali", "Hassan", "Nour", "Fatima",
  "Yousef", "Ibrahim", "Khaled", "Amira", "Rayan"
];

console.log(names)

function findName() {
    const userInput = prompt("Enter the name in the array you want to change: ");
    const changedUserInput = prompt("Enter the name you want to changed with: ")

    const appropriateUserInput = userInput.slice(0, 1).toUpperCase() + userInput.slice(1).toLowerCase();
    
    const start = names.indexOf(appropriateUserInput);
    const deleteCount = 1;
    const addNewName = changedUserInput;

    if (start !== -1) {
        names.splice(start, deleteCount, changedUserInput);
        return {
            message: `${userInput} => ${addNewName}`,
            updateList: names
        };
    }    
     else {
        return {
           message: "Name not found!",
           updateList: names
        }
    }

}
const result = findName();
console.log(result.message);
console.log(result.updateList)



const employees = ["Ahmed", "Sara", "Othman", "Mariam", "Ali"];

function getNewName() {
    const userNameInput = prompt("Enter the employe name you looking for:");
    if (!userNameInput) {
        return {message: "Operation Cancelled", updateList: employees}
    }
    const validNameInput = userNameInput.slice(0, 1).toUpperCase() + userNameInput.slice(1).toLowerCase();
    const start = employees.indexOf(validNameInput);

    if (start !== -1) {
        const newUserName = prompt("Enter the New name: ");
        employees.splice(start, 1, newUserName);
        return {
            message: `${validNameInput} has been changed to ${newUserName} in index ${start}`,
            updateList: employees
        };
    }
    else {
        employees.push(validNameInput);
        const index = employees.length - 1
        return {
            message: `new employee has been added in index ${index}`,
            updateList: employees,
        }
    }
}
const result = getNewName();
console.log(result.message);
console.table(result.updateList);




const fruits = ["Apple", "Banana", "Strawberry"];
const start = -2;
const deleteCount = 2;
const removedItems = fruits.splice(start, deleteCount, "Mango", "Cherry");
console.log(fruits);
console.log(removedItems);

for (const fruit of fruits) {
    console.log(fruit)
}



const fruits = ["Apple", "Banana", "Strawberry"];
fruits.forEach(fruit => {
    console.log(fruit)
});

const numbers = [5, 5, 5, 23, 24];
const check = numbers.every(num => num > 1);
console.log(numbers);
console.log(check)


const arr = ["Othman", "the"];
const arr2 = ["king"];
const combinedarr = arr.concat(arr2);
const removedItems = combinedarr.splice(1, 0, "is", "always");
console.log(combinedarr);

const arr = [1, 2, 3, 4, 5];
const newArr = arr.slice(0, 1);
console.log(arr);
console.log(newArr);


const fruits = ["Strawberry", "Mango"];
const fruitsCopy = fruits.slice();
const removedItems = fruitsCopy.splice(0, 1, "banana");
console.log(fruits);
console.log(fruitsCopy);
console.log(removedItems);


const fruits = ["Strawberry", "Mango", [24, 6, 2005]];
const fruitsCopy = fruits.slice();
fruitsCopy[2][2] = 2006;
console.log(fruits);
console.log(fruitsCopy);

const arr = ["Othman", "King", [24, 6, 2005]];
const arrCopy = JSON.parse(JSON.stringify(arr));
// or const arrCopy = structuredClone(arr)
arrCopy[2][2] = 2006;
console.log(arr);
console.log(arrCopy);



const board = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"],
];
console.log(board.join("\n"));

board[4][4] = board[6][4];
board[6][4] = " "
console.log(board.join("\n"));
*/


const board = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"], 
];
console.log(board.join("\n"));
const board1 = board[7][0];
const board2 = board[5][0];

if (board2 > 0) {
    console.log("Error: Out of bounds!");
}
board2 = board1;

console.log(board.join("\n"));


