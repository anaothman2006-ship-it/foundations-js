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
let targetRow = 4;

if (targetRow < 0 || targetRow > board.length) {
    console.log("Error: Out Of bounds!")
}
else {
    if (!board[targetRow][0].trim()) {
        board[targetRow][0] = board[7][0];
        board[7][0] = " ";
    }
    else {
        console.log("The place is occupied!");
    }
}
console.log(board.join("\n"));


const values = [];
for (let x = 0; x < 10; x++) {
  values.push([2 ** x, 2 * x ** 2]);//1, 0 ||  2, 2 || 4, 8
}
console.table(values);


// what if : const row = [];
const board = []
for (let x = 0; x < 8; x++) {
const row = [];
for (let i = 0; i < 8; i++) {
    if (i % 2 === 0) {
        row.push("B");
    }
    else {
        row.push("W");
    }
}
board.push(row)
}
console.log(board.join("\n"))


const fridge = [];
const bag = ["Apple"]; // الحقيبة بدأت بتفاحة واحدة

for (let i = 0; i < 2; i++) {
    bag.push("Orange"); // نضيف برتقالة في كل دورة
    fridge.push(bag);
}

// السؤال: ماذا سيطبع الحاسوب في النهاية؟
console.log(fridge);
*/

/*
fridge[["Apple", "Orange", "Orange"] ["Apple", "Orange", Orange]]
bag["Apple", "Orange", Orange]

i = 0 < 2
bag.push("Orange")
fridge.push(bag)

i = 1 < 2
bag.push("Orange")
fridge.push(bag)

i = 2 < 2
console.log(fridge) 
fridge[["Apple", "Orange", "Orange"] ["Apple", "Orange", Orange]]



const fridge = [];

for (let i = 0; i < 2; i++) {
    const bag = ["Apple"]; // الحقيبة تُخلق من جديد في كل دورة
    bag.push("Orange");
    fridge.push(bag);
}

console.log(fridge);
/* 

fridge [["Apple", "Orange"] ["Apple", "Orange"]] 

i = 0 < 2
bag["Apple", "Orange"]
bag.push("Orange")
fridge.push(bag)

i = 1 < 2
bag["Apple", "Orange"]
bag.push("Orange")
fridge.push(bag)

i = 2 < 2
console.log(fridge)
fridge [["Apple", "Orange"] ["Apple", "Orange"]] 


const myRe = /k(e)(n)(d)(a)(l+)/i;
const exicResult = myRe.exec("ahmedkendallothman");

console.log(exicResult);


const myRe = /k.*e.*n.*d.*a.*l.*l/i;
const exicResult = myRe.exec("dfksfdedfdfnsfdfdsfsfasfslsfl");
console.log(exicResult);




const numbers = [10, 20, 30, 40];

numbers.forEach((item, i, arr) => {
  if (i > 0) {
    arr[i - 1] = arr[i - 1] + 5;
  }
  console.log(`At index ${i}, item is: ${item}`);
});

// 0 > 0 false
// [10, 20, 30, 40]
// 1 > 0 true
// arr[1 - 1] = arr[1 - 1] = arr[0] + 5; 10 + 5 === 15
// [15, 20, 30, 40]

// 2 > 0 true
// arr[2 - 1] = arr[2 - 1] arr[1] + 5; 20 + 5 === 25
// [15, 25, 30, 40]

// 3 > 0 true
// arr[3 - 1] = arr[3 - 1] arr[2] + 5; 30 + 5 === 35
// [15, 25, 35, 40]

const numbers = [1, 1, 1];

numbers.forEach((item, i, arr) => {
  if (i + 1 < arr.length) {
    arr[i + 1] = arr[i + 1] + item;
  }
  console.log(item); 
});

/*
0
0 + 1 < 3 = true
arr[0 + 1] =+ item
arr[1] = 1 + 1 = 2
[1, 2, 1]

1 
1 + 1 < 3 = true
arr[1 + 1] =+ item
arr[2] + 2
[1, 2, 3]

2
2 + 1 < 3 = false


const numbers = [2, 2, 2];

numbers.forEach((item, i, arr) => {
  if (i + 1 < arr.length) {
    arr[i + 1] = arr[i + 1] * item;
  }
  console.log(item);
});


/*
0
0 + 1 < 3 true
arr[0 + 1] =+ arr[0 + 1] * item
arr[1] * 2 === 4
[2, 4, 2]

1
1 + 1 < 3 true
arr[1 + 1] = +arr[1 + 1] * item
arr[2] * item = 8
[2, 4, 8]

2
2 + 1 < 3 false



function testSideEffect(effect) {
    const arr = ["A", "b"];

    effect(arr, 0)
    console.log(arr)
};

testSideEffect((arr, index) => {
    if (index + 1 < arr.length) {
        arr[index + 1] = "B"
    }
})

// 1 < 3
// arr[1] = "B"
// ["A", "B"]

// 2 < 2 false


function testSideEffect() {
  const arr = ["e1", "e2", "e3", "e4"];
  arr.forEach((elem, index, arr) => {
    console.log(`array: [${arr.join(", ")}], index: ${index}, elem: ${elem}`);
    ((arr, index) => {
    if (index + 1 < arr.length) arr[index + 1] += "*";
    })(arr, index);
  });
  console.log(`Final array: [${arr.join(", ")}]`);
}
testSideEffect()




function challenge() {
  const arr = ["Apple", "Banana", "Cherry"];

  arr.forEach((item, index, currentArr) => {
    console.log(`Current: ${item}`);

    ((a, i) => {
      if (i === 0) {
        a[i + 1] = "Date"; 
      }
    })(currentArr, index);
  });
}

challenge();

/*
0
current = "apple";
a[0 + 1] = "data"
a[1] = "data"
["Apple", "Data", "Cherry"]

1
current "data"
1 === 0 false

2
current = "Cherry"
2 === 0 false


    



function mathMachine(num, action) {
  const result = num * 2;
  action(result); 
}

mathMachine(5, (output) => {
  console.log(output + 1);
});

/*
num = 5
action = (output) => {
  console.log(output + 1);
})


output = result


console.log(output + 1)
11



function multiplyNumber(effect) {
    const arr = [4, 5, 77, 86, 8, 878, 989, 5554];

    console.log(effect(arr));
    
    console.log("Done")
}

multiplyNumber(test => test.filter(num => num % 2 === 0));


function testSideEffect(effect) {
  const arr = ["e1", "e2", "e3", "e4"];
  arr.forEach((elem, index, arr) => {
    console.log(`array: [${arr.join(", ")}], index: ${index}, elem: ${elem}`);
    effect(arr, index);
  });
  console.log(`Final array: [${arr.join(", ")}]`);
}

testSideEffect((arr, index) => {
  if (index + 1 < arr.length) arr[index + 1] += "*";
});
*/
/*
0
array: ["e1", "e2", "e3", "e4"], index: 0, elem: e1;
arr = arr
index = index
if index + 1 < arr.length, 0 + 1 = 1 < 4 {
arr[index + 1] = arr[0 + 1]
arr[1] += *
    //["e1", "e2*", "e3", "e4"]

1
array: ["e1", "e2*", "e3", "e4"], index: 1, elem: e2*;
if index + 1 < arr.length, 1 + 1 = 1 < 4 {
arr[1 + 1] = arr[2] += *
    //["e1", "e2*", "e3*", "e4"]

2
array: ["e1", "e2*", "e3*", "e4"], index: 2, elem: e3*;
if index + 1 < arr.length = 2 + 1 < 4 {
arr[2 + 1] = arr[3] += *
    //["e1", "e2*", "e3*", "e*"]

3
array: ["e1", "e2*", "e3*", "e4*"], index: 3, elem: e4*;
if index + 1 < arr.length = 4 < 4 false

}


}
}



const numbers = [1, 2, 3];

numbers.forEach((num, index) => {
  console.log(`Index: ${index}, Num: ${num}`);
  if (index === 0) {
    numbers.unshift(0); 
  }
});
/*
[1, 2, 3]
index: 0, num: 1
if index === 0 true
unshift 0
[0, 1, 2, 3]

index: 1, num: 1

index: 2, num: 2

index: 3, num: 3




function testSideEffect(effect) {
  const arr = ["e1", "e2", "e3", "e4"];
  arr.forEach((elem, index, arr) => {
    console.log(`array: [${arr.join(", ")}], index: ${index}, elem: ${elem}`);
    effect(arr, index);
  });
  console.log(`Final array: [${arr.join(", ")}]`);
}

testSideEffect((arr, index) => {
    if (index > 0) arr[index - 1] += "*";
});
*/
/*
array: ["e1", "e2", "e3", "e4"], index: 0, elem: e1
index > 0 false

array: ["e1", "e2", "e3", "e4"], index: 1, elem: e2
index > 0 true  arr[1 - 1] += "*" 
///["e1*", "e2", "e3", "e4"]

array: ["e1*", "e2", "e3", "e4"], index: 2, elem: e3
index > 0 true  arr[2 - 1] += "*" 
///["e1*", "e2*", "e3", "e4"]

array: ["e1*", "e2*", "e3", "e4"], index: 3, elem: e4
index > 0 true  arr[3 - 1] += "*" 
///["e1*", "e2*", "e3*", "e4"]

final array: ["e1*", "e2*", "e3*", "e4"]




function testSideEffect(effect) {
  const arr = ["e1", "e2", "e3", "e4"];
  arr.forEach((elem, index, arr) => {
    console.log(`array: [${arr.join(", ")}], index: ${index}, elem: ${elem}`);
    effect(arr, index);
  });
  console.log(`Final array: [${arr.join(", ")}]`);
};


testSideEffect((arr, index) => {
  if (index === 1) arr.splice(2, 0, "new");
});
*/

/* 
array: ["e1", "e2", "e3", "e4"], index: 0, elem: e1
index === 1 false

array: ["e1", "e2", "e3", "e4"], index: 1, elem: e2
index === 1 true arr.splice(2, 0, "new")
["e1", "e2", "new", "e3", "e4"]

array: ["e1", "e2", "new", "e3", "e4"], index: 2, elem: new
index === 1 false

array: ["e1", "e2", "new", "e3", "e4"], index: 3, elem: e3
index === 1 false


final array: ["e1", "e2", "new", "e3", "e4"]

function testSideEffect(effect) {
  const arr = ["e1", "e2", "e3", "e4"];
  arr.forEach((elem, index, arr) => {
    console.log(`array: [${arr.join(", ")}], index: ${index}, elem: ${elem}`);
    effect(arr, index);
  });
  console.log(`Final array: [${arr.join(", ")}]`);
};

testSideEffect((arr) => arr.push("new"));
*/

/*
array: ["e1", "e2", "e3", "e4"], index: 0, elem: e1
arr.push("new")
///["e1", "e2", "e3", "e4", "new"];

array: ["e1", "e2", "e3", "e4", "new"], index: 1, elem: e2
arr.push("new")
///["e1", "e2", "e3", "e4", "new", "new"];

array: ["e1", "e2", "e3", "e4", "new", "new"], index: 2, elem: e3
arr.push("new")
///["e1", "e2", "e3", "e4", "new", "new", "new"];

array: ["e1", "e2", "e3", "e4", "new", "new", "new"], index: 3, elem: e4
arr.push("new")
///["e1", "e2", "e3", "e4", "new", "new", "new", "new"];

final array: ["e1", "e2", "e3", "e4", "new", "new", "new", "new"];


function testSideEffect(effect) {
  const arr = ["e1", "e2", "e3", "e4"];
  arr.forEach((elem, index, arr) => {
    console.log(`array: [${arr.join(", ")}], index: ${index}, elem: ${elem}`);
    effect(arr, index);
  });
  console.log(`Final array: [${arr.join(", ")}]`);
};

testSideEffect((arr, index) => arr.splice(index, 0, "new"));
*/
/*
array: ["e1", "e2", "e3", "e4"], index: 0, elem: e1
arr.splice(index, 0, "new")
   ///["new", "e1", "e2", "e3", "e4"]

array: ["new", "e1", "e2", "e3", "e4"], index: 1, elem: e1
arr.splice(index, 0, "new")
   ///["new", "new", "e1", "e2", "e3", "e4"]

array: ["new", "new", "e1", "e2", "e3", "e4"], index: 2, elem: e1
arr.splice(index, 0, "new")
   ///["new", "new", "new", "e1", "e2", "e3", "e4"]

array: ["new", "new", "new", "e1", "e2", "e3", "e4"], index: 3, elem: e1
arr.splice(index, 0, "new")
   ///["new", "new", "new", "new", "e1", "e2", "e3", "e4"]

final array: ["new", "new", "new", "new", "e1", "e2", "e3", "e4"]


function testSideEffect(effect) {
  const arr = ["e1", "e2", "e3", "e4"];
  arr.forEach((elem, index, arr) => {
    console.log(`array: [${arr.join(", ")}], index: ${index}, elem: ${elem}`);
    effect(arr, index);
  });
  console.log(`Final array: [${arr.join(", ")}]`);
};

testSideEffect((arr, index) => {
  if (index === 1) arr.splice(2, 1);
});
*/

/*
array: ["e1", "e2", "e3", "e4"], index: 0, elem: e1
index === 1 = false

array: ["e1", "e2", "e3", "e4"], index: 1, elem: e2
index === 1 = true arr.splice(2, 1)
  //// ["e1", "e2", "e4"]

array: ["e1", "e2", "e4"], index: 2, elem: e4
index === 1 false

final array: ["e1", "e2", "e4"]


const arr2 = ["e1", "e2", "e3", "e4"];
arr2.find((elem, index, arr) => {
    console.log(`array: ${arr.join(", ")}, index: ${index}, elem: ${elem}`);
    if (index === 1) arr.splice(2, 1);
});
*/
/*
array: ["e1", "e2", "e3", "e4"], index: 0, elem: e1
index === 1 false

array: ["e1", "e2", "e3", "e4"], index: 1, elem: e2
index === 1 true arr.splice(2, 1)
   //// ["e1", "e2", "e4"]

array: ["e1", "e2", "e4"], index: 2, elem: e4
index === 1 false

array: ["e1", "e2", "e4"], index: 3, elem: undefined
index === 1 false



function testSideEffect(effect) {
  const arr = ["e1", "e2", "e3", "e4"];
  arr.forEach((elem, index, arr) => {
    console.log(`array: [${arr.join(", ")}], index: ${index}, elem: ${elem}`);
    effect(arr, index);
  });
  console.log(`Final array: [${arr.join(", ")}]`);
};

testSideEffect((arr, index) => arr.splice(index, 1));
*/
/*
array: ["e1", "e2", "e3", "e4"], index: 0, elem: e1
arr.splice(index, 1);
///["e2", "e3", "e4"]

array: ["e2", "e3", "e4"], index: 1, elem: e3
arr.splice(index, 1)
///["e2", "e4"]

final array: ["e2", "e4"]


const arr2 = ["e1", "e2", "e3", "e4"];
arr2.find((elem, index, arr) => {
  console.log(`array: [${arr.join(", ")}], index: ${index}, elem: ${elem}`);
  arr.splice(index, 1);
  return false;
});
*/

/*
array: ["e1", "e2", "e3", "e4"], index: 0, elem: e1
arr.splice(index, 1);
///["e2", "e3", "e4"]

array: ["e2", "e3", "e4"], index: 1, elem: e3
arr.splice(index, 1)
///["e2", "e4"]

array: ["e2", "e4"], index: 2, elem: undefined

array: ["e2", "e4"], index: 3, elem: undefined




const data = ["Apple", "Boy", "Art", "Cat"];

data.forEach((elem, index, arr) => {

    if (elem.startsWith("A")) {
        arr[index] = "Deleted"
    }
    else {
        arr[index] = elem.toUpperCase()
    }
});

const filteredData = data.filter((elem => elem !== "Deleted"));
console.log(data);
console.log(filteredData)

function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      const tripleEvenNumber = array[i] * 3;

      sum += tripleEvenNumber;
    }
  }
  return sum;
}

console.log(sumOfTripledEvens([3, 4, 645, 34, 232, 45]))

function sumOfTripledEvens(array) {
  return array
       .filter(item => item % 2 === 0)
       .map(item => item * 3)
       .reduce((total, item) => total + item, 0)
  
}
console.log(sumOfTripledEvens([3, 4, 645, 34, 232, 45]))

function addOne(num) {
  return num + 1;
}
const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.map(addOne);
console.log(mappedArr); 

function isOdd(item) {
  return item % 2 !== 0;
};
const arr = [1, 2, 3, 5, 6];
const oddNum = arr.filter(isOdd);
console.log(arr);
console.log(oddNum);

const arr = [1, 2, 3, 4, 5, 6];
const reduceArr = arr.reduce((total, item) => {
  return total * item
}, 1);
console.log(reduceArr);


// tasks


function camelize(str) {
  let arr = str.split("-")
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  };
  const result = arr.join("");
  return result;
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));


function camelize(str) {
  let arr = str.split("-")
  const updateData = arr.map((elem, index) => index > 0 ? elem[0].toUpperCase() + elem.slice(1) : elem);
  const result = updateData.join("");
  return result;
}
const arr = "list-style-image";

console.log(camelize(arr));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

function camelize(str) {
  return str
      .split("-")
      .map((elem, index) => {
        if (!elem) return elem;
        return index === 0 ? elem : elem[0].toUpperCase() + elem.slice(1)
      })
      .join("")
};

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("--webkit-transition"));



// task 2

function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <=b);
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);
const filtered = filterRange(arr, 2, 6);
console.log(filtered);


// task3

function filterRangeInPlace(arr, a, b) {
  for (let i = arr.length - 1; i >= 0; i--) {
    const val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1)
    }
  }
}
const array = [1, 2, 3, 4, 5, 6, 7, 2, 9];

filterRangeInPlace(array, 3, 9);

console.log(array);


// task 4

const arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
console.log(arr);



// task 5

function copySorted(arr) {
  return [...arr].sort((a, b) => a.length - b.length);
}

const array = ["html", "javascript", "css"];
const sortedArr = copySorted(array);
console.log(array);
console.log(sortedArr);

function copySorted(arr) {
  return arr.slice().sort();
};
const arr = ["HTML", "JAVASCRIPT", "CSS"];
console.log(arr);
const sortedArr = copySorted(arr);
console.log(sortedArr);



// task 6


const arr = [1, 2, 3];
const updateData = [];
const index = Math.floor(Math.random() * arr.length);
console.log(index);
updateData.push(arr[index])
console.log(updateData);


function shuffle(array) {
const updateData = [];
for (let i = array.length - 1; i >= 0; i--) {
  const randomIndex = Math.floor(Math.random() * array.length);
  updateData.push(arr[randomIndex]);
  array.splice(randomIndex, 1);
};
console.log(updateData);
};

const arr = [1, 2, 3];
shuffle(arr);
shuffle(arr);
shuffle(arr);


*/
/*
updateData [2,3,1]
2 >= 0
1
updateData.push(arr[randomIndex]);
array.splice(1, 1)
arr [1,3]

1 >= 0
1
updateData.push(arr[randomIndex]);
array.splice(1, 1)
arr [1]

0 >= 0
0
updateData.push(arr[randomIndex]);
array.splice(0, 1)
arr []


function shuffle(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = temp
  }
  console.log(array);
};

const arr = [1, 3, 2];

shuffle(arr);
shuffle(arr);



function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];
shuffle(arr);
console.log(arr);


// task 7

function unique(arr) {
  return arr.filter((item, index, arr) => {
    return index === arr.indexOf(item)
});
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings));

/*
arr[Hare, Krishna,]
indexOf(Hare) === 0
if index 0 === 0 true

indexOf(Krishna) === 1
if index 1 === 1 true

indexOf(Hare) === 0
if index 2 === 0 false




const removeFromArray = function(array, ...args) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (!args.includes(array[i])) {
      result.push(array[i])
    }
  }
  return result
}
console.log(removeFromArray([1, 2, 3, 4], 3, 2));

const removeFromArray = function(array, ...args) {
  return array.filter((item) => !args.includes(item));
}

console.log(removeFromArray([1, 2, 3, 4], 3, 2));



const sumAll = function(a, b) {
  const hasError = a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)
  if (hasError){
    return "ERROR!"
  }
  if (a > b) {
    const n = a - b + 1
    const sum = n * (a + b) / 2
    return sum
  }
  else {
    const n = b - a + 1
    const sum = n * (a + b) / 2
    return sum
  }
};

console.log(sumAll(4, 2.2));



const sumAll = function(a, b) {
  const hasError = a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)
  if (hasError){
    return "ERROR"
  }
  const n = Math.abs(a - b) + 1
  const sum = n * (a + b) / 2
  return sum
};

console.log(sumAll(123, 1));

const sumAll = function(a, b) {
  const hasError = a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b);
  if (hasError) {
    return "ERROR"
  }
  if (a > b) {
    let temp = a
    a = b
    b = temp
  }
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i
  }
  return sum
}
console.log(sumAll(4, 2));


const leapYear = function(year) {
  const isYearDivisibleByFour = year % 4 === 0;
  const isCentury = year % 100 === 0;
  const isYearDivisibleByFourHundred = year % 400 === 0

  if (
    isYearDivisibleByFour &&
    (!isCentury || isYearDivisibleByFourHundred)
  ) {
    return true
  }
  else {
    return false
  }
}

console.log(leapYear(700));

*/


/*
نضرب الدرجة (17) في 1.8 
$\approx$ 30.6.نضيف عليها 32 (نقطة الصفر لديهم) 
$\approx$ 62.6.بالتقريب تصبح 63.


const convertToCelsius = function(fahrenheit) {
  const OFFSET = 32;
  const constantSum = fahrenheit - OFFSET;
  const offsetSum = constantSum * 5/9;
  const roundedTemp = +offsetSum.toFixed(1);
  return roundedTemp
};

const convertToFahrenheit = function(celsius) {
  const FACTOR = 1.8;
  const OFFSET = 32;
  const scalingSum = celsius * FACTOR;
  const offsetSum = scalingSum + OFFSET;
  const roundedTemp = +offsetSum.toFixed(1)
  return roundedTemp;
};

console.log("to Fahrenheit", convertToFahrenheit(-38));
console.log("to Celsius", convertToCelsius(100.4));
*/

const convertToCelsius = function(fahrenheit) {
  return Math.round((fahrenheit - 32) * (5/9) * 10) / 10;
};
const convertToFahrenheit = function(celsius) {
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
}
console.log(convertToFahrenheit(17));

console.log(convertToCelsius(100));