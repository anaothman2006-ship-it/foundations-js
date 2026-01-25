/*
function getMaxSubSum(arr) {
    let maxSum = 0;
    let currentSum = 0;

    for (let num of arr) {
        currentSum = currentSum + num; // 0 + number of array

        if (currentSum > maxSum) {
            maxSum = currentSum; 
        }
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return maxSum;
}
let result = getMaxSubSum([1, 4, -3, 4]);
console.log(result)
// currentSum = 0; num = 1
//currentSum = currentSum + num === 1
// if currentSum > maxSum; 1 > 0 = maxSum = currentSum === 1
//if currentSum < 0 = 1 < 0

// currentSum = 1; num = 4
//currentSum = currentSum + num === 5
// if currentSum > maxSum; 5 > 1 = maxSum = currentSum === 5
//if currentSum < 1 = 5 < 1

// currentSum = 5; num = -3
// currentSum = currentSum + num = 2
//if currentSum > maxSum; 2 > 5
//if current < 0; 2 < 0 

// currentSum = 2; num 4
// currentSum = currentSum + num === 6
// currentSum > maxSum; 6 > 5 = maxSum = currentSum == 6
//if currentSum < 0 = 6 < 0




function getMaxTemp(arr) {
    let maxTemp = 0;
    for (const temp of arr) {
        if (temp > maxTemp) {
            maxTemp = temp
        }
    }
    return maxTemp;
}
console.log(getMaxTemp([15, 22, 18, 30, 25, 20]))

// 15 > 0 maxtem = 15
// 15 > 22 
// maxtemp == 22
// 22 > 18 
// maxtemp == 22
// 22 > 30 
// maxtemp = 
// 



function getMinTemp(arr) {
    let minTemp = arr[0];// 15
    for (const temp of arr) {
        if (temp < minTemp) {
            minTemp = temp
        }
    }
    return minTemp;
}
console.log(getMinTemp([15, 22, 18, 30, 25, 20]))



function getMaxSubSum(arr) {
    let currentSum = 0;
    let maxSum = 0;
    for (const sum of arr) {
        currentSum += sum;
        if (currentSum > maxSum) {
            maxSum = currentSum
        }
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return maxSum;
}
console.log(getMaxSubSum([-1, 2, 3, -9, 11]))

//  let arr [4, 55, 4, 44, -4]
// 

let arr = ["Apple", "Banana", "Strwaberry"];
delete arr[0];
console.log(arr)

let arr = ["Apple", "Banana", "Strwaberry"];
arr.splice(0, 1);
console.log(arr)
console.log(arr.length)

let arr = ["I", "Love", "Strwaberry"];
arr.splice(2, 2, "Programing", "so", "much");
console.log(arr)

let colors = ["Red", "blue", "green", "white", "black"];
colors.splice(1, 0, "yellow",);
colors.splice(3, 0, "pink")
console.log(colors);
console.log(colors.length);

let names = ["Ali", "Sara", "John"];
names.splice(1, 1, "Sami");
alert(names)

let arr = ["I", "Love", "Spending", "My", "Time", "Learning", "Javascript"];
let removed = arr.splice(2, 4);
console.log(arr);
console.log(removed)


let arr = [1, 2, 5];
arr.splice(-1, 0, 3, 4);
console.log(arr)


let arr = [10, 20, 30, 40, 33, 434, 20, 60]
arr.splice(-2, 1);
console.log(arr)


let arr = ["o", "t", "h", "m", "a", "n"];
console.log(arr.slice(1, 5));
console.log(arr.slice(-3))


let fruits = ["Apple"];
let moreFruits = fruits.concat(["Orange", "Banana"], "Mango", 24);
console.log(moreFruits)


let arr = [1, 2];
console.log(arr.concat([3, 4]));
console.log(arr.concat([3, 4], [5, 6]));
console.log(arr.concat([3, 4], [5, 6], 7, 8));

let arr = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};

console.log( arr.concat(arrayLike));


let arr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

console.log( arr.concat(arrayLike) );


let names = ["Ali", "Sara"];

// 2. ننادي العامل (forEach) ونعطيه "خطة العمل"
names.forEach( (name) => {
    console.log("Hello " + name);
});


let names = ["Othman", "King"];
names.forEach( (name, i) => {
    console.log(`${name} is number ${i}`)
})


let prices = [10, 20, 50];
prices.forEach((price) => {
    console.log(`the new price is ${price + 2}`)
})


let prices = [10, 20, 40];
prices.forEach(function(price) {
    console.log(`the new price is ${price +2}`)
})


let arr = [1, 2, false];
console.log(arr.indexOf(false));
alert(arr.includes(1, 1))

let fruits = ["Apple", "banana", "strawberry", "banana", "lemon"];
console.log(fruits.indexOf("banana"));
console.log(fruits.lastIndexOf("banana"));

let arr = [NaN];
alert(arr.indexOf(NaN));
alert(arr.includes(NaN));


let users = [
    {id: 1, name: "john"},
    {id: 2, name: "betty"},
    {id: 3, name: "Othman"},
]
let user = users.find(function(item) {
    return item.id == 1
})
console.log(user.name)

let users = [
    {id: 1, name: "john", city: "kenitra"},
    {id: 2, name: "betty"},
    {id: 3, name: "Othman"},
]

let user = users.find(item => item.id == 1);
console.log(user.city)


let users = [
    {name: "Othman", city: "Kenitra", id: 19},
    {name: "Salma", city: "rabat", id: 20},
    {name: "Othman", city: "rabat", id: 19},
    {name: "kendall", city: "Sale", id: 21},
]
let userIndex = users.findIndex(user => user.id == 19);
console.log(userIndex)
console.log(users.findLastIndex(item => item.id == 19))



let users = [
    {name: "othman", id: 1, city: "kenitra"},
    {name: "ahmed", id: 2, city: "sale"},
    {name: "kendall", id: 3, city: "tangier"},
    {name: "charlie", id: 4, city: "rabat"},
    {name: "kirk", id: 5, city: "fes"},
]
let someUsers = users.filter(user => user.id < 5);
console.log(someUsers.length); // 4 


let lengths = ["othman", "is", "the", "king"];
let result = lengths.map(length => length.length);
console.log(result) 

let lengths = ["othman", "is", "the", "king"];
let result = lengths.map(length => length.slice(0, 1).toUpperCase() + length.slice(1));
console.log(result) 


let arr = [1, 2, 3, 20];
arr.sort();
console.log(arr)

let arr = [1, 323, 44, 3, 44, 42, 232, 32, 434, 4343, 2323]
function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
arr.sort(compare)                
console.log(arr)

let names = ["am", "I", "the", "king",];
names.sort(function(a, b) {
   return a.length - b.length
})
console.log(names)
*/

let products = [
    { name: "Mouse", price: 20 },
    { name: "Laptop", price: 1000 },
    { name: "Keyboard", price: 50 },
    { name: "Monitor", price: 300 }
];
products.sort((a, b) => a.price - b.price)
console.log(products)
/*
function (a, b) {
if (a.price > b.price) {
return 1
}
if (a.price < b.price) {
return -1
}
if (a.price == b.price) {
return 0
}
}
*/