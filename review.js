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


let products = [
    { name: "Mouse", price: 20 }, // a
    { name: "Laptop", price: 1000 },// b 
    { name: "Keyboard", price: 50 }, // a
    { name: "Monitor", price: 300 }, // b
    { name: "USB Cable", price: 5 } // a
];
const filter = products.filter(product => product.price > 30);
console.log(filter);

products.sort((a, b) => b.price - a.price)
console.log(products)

products.sort(function (a, b) {
    if (a.price - b.price > 0) return 1;
    if (a.price - b.price < 0) return -1;
    if (a.price - b.price == 0) return 0;
})
console.log(products)

 
const map = products.map(names => names.name);
console.log(map);

let products = [
    { name: "Mouse", price: 20 }, // a
    { name: "Laptop", price: 1000 },// b 
    { name: "Keyboard", price: 50 }, // a
    { name: "Monitor", price: 300 }, // b
    { name: "USB Cable", price: 5 } // a
];

const result = products
    .filter(product => product.price > 30)
    .sort((a, b) => b.price - a.price)
    .map(names => names.name)
console.log(result)

let arr = [1, 2, 3];
console.log(arr.concat([4, 5, 6], "king"))

let arr = [1,2,3,4,5,6];
console.log(arr)
arr.reverse();
console.log(arr)

let arr = [10, 20, 30, 40, 33, 434, 20, 60]
arr.splice(-3, 2);
console.log(arr)


let fruitsStr = "Apple, Banana, Orange";
let fruitsArr = fruitsStr.split(", ");
console.log(fruitsArr)

let names = 'Othman, kendall, jack, jimmy';
const arr = names.split(", ", 3);

for (const name of arr) {
    console.log(`new message to ${name}`)
}


let str = 'test';
console.log(arr.split(''));


let path = "Users/Documents/Projects/JavaScript/FullStack";
const arr = path.split("/", 3);
const str = arr.join('> ');
console.log(str)

let arr = [1, 2, 3, 4, 5]
function maxSum() {
    currentNum = 0;
    sum = 0;
    for (const num of arr) {
        currentNum = currentNum + num
        if (currentNum > sum) {
            sum = currentNum 
        }
    }
    return sum;
}
console.log(maxSum())
*/


/*
let arr = [1, 2, 3, 4, 5]

let totalSum = arr.reduce((sum, num) => sum + num, 0);
console.log(arr)
console.log(totalSum)



let arr = [1, 3, 34, 23, 23]
function getMaxSum() {
    sum = 0;
    for (const num of arr) {
        sum += num // sum + num
    }
    return sum
}
console.log(getMaxSum())


let arr = [32, 32, 323, 323, 234, 232];
const totalSum = arr.reduce((sum, num) => sum + num, 0);
console.log(totalSum)


// دالة "ذكية" تأخذ أي مصفوفة وتعالجها
const multiplyArray = (arr) => {
    return arr.reduce((acc, current) => acc * current,);
};

const myNumbers = [2, 4, 5];
console.log(multiplyArray(myNumbers)); // نمرر البيانات هنا

let arr = [24, 6, 2006];
let arr2 = [23, 4, 1999];
let arr3 = [30, 3, 2002];

const total = (dataArray) => {
    return dataArray[0] + dataArray[1] + dataArray[2];
}
console.log(total(arr));
console.log(total(arr2));
console.log(total(arr3));

let arr = [2, 4, 4, 4]
const multiplyAll = (numbers) => numbers[0] + numbers[1];
console.log(multiplyAll(arr))

let arr = [23, 42, 42, 44]
const multiplyAll = arr.reduce(function (acc, current, index, arr) {
    console.log(`acc => ${acc}`);
    console.log(`current element ${current}`);
    console.log(`current element index ${index}`);
    console.log(`array => ${arr}`);
    console.log(acc + current);
    console.log("###############")
    return acc + current;
}, 0)
console.log(multiplyAll)


let shopingList = [50, 100, 25, 40];
let shopingList2 = [323, 43, 4343, 4, 34, 34, 3, 3,]

const calculateInvoice = (prices) => {
    return prices.reduce((acc, current) => acc + current, 0)
}
let total = calculateInvoice(shopingList)

console.log(`your total is $${total}`)


let evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

const evens = (number) => number.filter((num) => num % 2 === 0)

console.log(evens(evenNumbers))


let fruits = ["apple", "banana", "kiwi", "strawberry", "orange"];

const longFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(longFruits)


let prices = [10, 0, 25, 0, 50, 5];
const paidRequiest = prices.filter((requiest) => requiest > 0);
const total = paidRequiest.reduce((acc, current) => acc + current);
alert(`Your total is ${total}`)



let prices = [10, 0, 25, 0, 50, 5];

const total = prices
   .filter((p) => p > 0)
   .reduce((acc, current) => acc + current, 0);

console.log(total)



let names = ["othman", "kendall", "ahmed"];

const upperCase = names.map((str) => str.slice(0, 1).toUpperCase() + str.slice(1));
console.log(upperCase);


const studentGrades = [12, 5, 18, 10, 4, 20];
let result = studentGrades
    .filter(grade => grade >= 10)
    .map(grade => grade + 2)
    .reduce((acc, current) => acc + current, 0)

console.log(result)


const numbers = [10, 9, 5];
const result = [];

for (let i = 0; i < numbers.length; i++) {
    let squared = numbers[i] * numbers[i];// numbers 10 * numbers 10 = 100

    if (squared > 10) {
        result.push(squared) // true 100 > 10
    }

}
console.log(result)



let arr = [3, 2, 3, 4];

let multiplyAll = function (array) {
    return array.map(num => num ** num);
}
console.log(multiplyAll(arr));


const numbers = [3, 5, 6];
const result = [];

for (let i = 0; i < numbers.length; i++) {
    let multiply = numbers[i] ** numbers[i];
    result.push(multiply)
}
console.log(result);


let numbers = [3, 5, 6];
for (let i = 0; i < numbers.length; i++) {
    numbers = numbers[i] ** numbers[i];
}
console.log(numbers);


let arr = [3, 2, 3, 4];

let multiplyAll = (array) => {
    return array.map(num => num ** 3);
}
console.log(multiplyAll(arr));


let mix = [10, "Hello", [1, 2, 3], {name: "Ali"}, true];

let array = mix.filter(element => Array.isArray(element));
console.log(array)


function getMultiply(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] * 2);
    }
    return result
}
let arr = [2, 3, 4, 6];
console.log(arr)

console.log(getMultiply(arr))


let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let users = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
]; 

let soldiers = users.filter(user => army.canJoin(user));
console.log(soldiers)


let store = {
  discountAmount: 5, 
  
  applyDiscount(price) {
     return price - this.discountAmount;
  }
};

let prices = [20, 50, 100];

let finalPrices = prices.map(p => store.applyDiscount(p));

console.log(finalPrices);

let radar = {
    speedLimit: 120,
    isOverSpeed (speed) {
        return speed > this.speedLimit;
    }
}
let carSpeed = [100, 130, 80, 150, 110];
let speeders = carSpeed.filter(s => radar.isOverSpeed(s));
console.log(speeders)


let radar = {
    speedLimits: 120,

    isOverSpeed(speed){
        return speed > this.speedLimits;
    }
}

let carSpeed = [100, 344, 200, 120, 300];
let speeders = [];

for (let i = 0; i < carSpeed.length; i++) {
    let current = carSpeed[i];
    if (radar.isOverSpeed(current)) {
        speeders.push(current)
    }
}
console.log(speeders);

function arraysEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

console.log( arraysEqual([1, 2], [1, 2])); // true




const club = {
    minAge: 18,
    isAge (age) {
        return age >= this.minAge
    }
}

let guests = [
    {name: "ahmed", age: 17},
    {name: "salma", age: 39},
    {name: "hajar", age: 16},
    {name: "kendall", age: 20},
    {name: "meryem", age: 18},
]
let acceptableGuests = [];
for (let i = 0; i < guests.length; i++) {
    guest = guests[i]
    if (club.isAge(guest.age)) {
        acceptableGuests.push(guest)
    }
}
console.log(acceptableGuests)


const club = {
    minAge: 18
}

let guests = [
    {name: "othman", age: 18},
    {name: "kendall", age: 19},
    {name: "gigi", age: 20},
    {name: "klaus", age: 40}
]

let acceptableGuests = [];
for (let i = 0; i < guests.length; i++) {
    guest = guests[i];
    if (guest.age > club.minAge) {
        acceptableGuests.push(guest)
    }
}
console.log(acceptableGuests)
*/

const club = {
    minAge: 18
}

let guests = [
    {name: "kendall", age:30},
    {name: "Othman", age:19},
    {name: "ahmed", age:15},
    {name: "salma", age:17},
    {name: "saad", age:24},
]

let acceptableGuests = guests
    .filter(guest => guest.age > club.minAge)
    .map(guest => guest.name.toUpperCase())

console.log(acceptableGuests)
