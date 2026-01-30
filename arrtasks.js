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
*/

const nums = [10, 20, 30, 40];
const arr = nums.splice(1, 2);
console.log(nums);
console.log(arr)

