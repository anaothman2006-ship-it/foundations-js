/*
/// task 1

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user.name);
*/

/*
/// task 2
let schedule = {};
function isEmpty(obj) {
    for (let key in obj) {
        return false
    }
    return true
}

console.log(isEmpty(schedule));

schedule["8:30"] = "get up";
console.log(isEmpty(schedule));
*/

/*
/// task 3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);
*/

/*
/// task 4
let menu = {
    width: 200,
    height: 300,
    title: "My menu",
}

function multipleNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2
        }
    }
}
multipleNumeric(menu);
console.log(menu);
*/

/*
let jhon = {name: "Jhon", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 28};
const users = [jhon, pete, mary];
let names = users.map((user) => user.name);
console.log(names);
*/


/*
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id,
}));
console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);
*/

/* 
function sortByAge(users) {
    users.sort((a, b) => a.age - b.age);
}

let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 28};

let arr = [john, pete, mary];

sortByAge(arr);
console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);
*/

/*
function getAverageAge(users) {
    return Math.ceil(users.reduce((acc, curr) => acc + curr.age, 0) / users.length);
}

let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 28};

let arr = [john, pete, mary];

console.log(getAverageAge(arr));
*/

/*
function groupById(users) {
    return users.reduce((acc, curr) => {
        acc[curr.id] = curr
        return acc
    }, {});
}

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);
console.log(usersById)
*/

/*
function libaryOrganizer(obj) {
    return obj.reduce((acc, curr) => {
        acc[curr.author] = curr
        return acc
    }, {})
}

let books = [
  {title: "The Hobbit", author: "J.R.R. Tolkien"},
  {title: "Harry Potter", author: "J.K. Rowling"},
  {title: "The Great Gatsby", author: "F. Scott Fitzgerald"}
];

let libary = libaryOrganizer(books);
console.log(libary);
*/

/*
const sum = function(numbers) {
   return numbers.reduce((acc, val) => acc + val ,0);
};

console.log(sum([]));
*/

/*
const multiply = function(numbers) {
  return numbers.reduce((acc, val) => acc * val)
};

console.log(multiply([2, 4, 6, 8, 10, 12, 14]));
*/

/*
const power = function(a, b) {
	return a ** b
};

console.log(power(3, 10));
*/

/*
const factorial = function(num) {
    let val = 1;
    for (let i = 2; i <= num; i++) {
        val *= i;
    }
    return val
};

console.log(factorial(2));
*/
/*
const factorial = function (n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

*/

/*
const palindromes = function (string) {
    const cleanString = string.toLowerCase().replace(/[^a-z0-9]/gi, "");
    const reversedString = cleanString.split("").reverse().join("");
    return cleanString === reversedString;
}
console.log(palindromes("ZZZZ car, a man, a maracaz."));
*/
/*
const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanedString = string
        .toLowerCase()
        .split("")
        .filter(character => alphanumerical.includes(character))
        .join("");
    const reversedString = cleanedString.split("").reverse().join("");
    return cleanedString === reversedString;
}
console.log(palindromes("Racecar!"));
*/

/*
const fibonancci = function(num) {
    let prev = 1;
    let current = 1;
    if (num == 0) return 0;
    if (num < 0) return "OOPS";
    for (let i = 3; i <= num; i++) {
        let temp = prev
        prev = current
        current = temp + current;
    }
    return current;
}
console.log(fibonancci("0"));
*/
/*
const fibonancci = function (countArg) {
    let count;
    if (typeof countArg !== "number") {
        count = parseInt(countArg);
    } else {
        count = countArg;
    }
    
    if (count < 0) return "OOPS";
    if (count == 0) return 0;

    let firstPrev = 1;
    let secondPrev = 0;
    for (let i = 2; i <= count; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }
    return firstPrev;
}

console.log(fibonancci())
*/


/*
const factorial = function (num) {
    let count;
    if (typeof num !== "number") {
        count = parseInt(num);
    } else {
        count = num;
    }
    if (count < 0) return "OOPS";
    let curr = 1;
    for (let i = 1; i <= count; i++) {
        curr = curr * i;
    }
    return curr
}
console.log(factorial(4));
*/

/*
const factorial = function(num) {
    let curr = 1;
    for (let i = num; i > 1; i--) {
        curr = curr * i
    }
    return curr;
}
console.log(factorial(4))
*/

/*
 const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ]

const getTheTitles = function(books) {
    return books.map(book => book.title);
};

console.log(getTheTitles(books));
*/



/*
const people = [
      {
        name: "Carly",
        yearOfBirth: 1055,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
]

/*const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();
    return array.reduce((a, b) => ((a.yearOfDeath || currentYear) - a.yearOfBirth) > ((b.yearOfDeath || currentYear) - b.yearOfBirth) ? a: b);
}
console.log(findTheOldest(people).name);
*/
/*
const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, currentPerson.yearOfDeath);
        const currentAge = getAge(oldest.yearOfBirth, currentPerson.yearOfDeath);
    return oldestAge < currentAge ? currentPerson : oldest
});
}

console.log(findTheOldest(people));

*/


/*
const products = [
  { name: "Laptop", price: 1000, discount: 100 },
  { name: "Phone", price: 500, discount: 50 },
  { name: "Tablet", price: 950, discount: 200 },
  { name: "Monitor", price: 850 },
  { name: "Keyboard", price: 100, discount: 20 }
];

const getPrice = function(price, discount) {
    if (!discount) {
        discount = 0;
    }
    return price - discount;
}

const findMostExpensive = function(products) {
    return products.reduce((expProduct, currProduct) => {
        const expensiveProduct = getPrice(expProduct.price, expProduct.discount);
        const currentProduct = getPrice(currProduct.price, currProduct.discount);
        return expensiveProduct > currentProduct ? expProduct : currProduct;
    });
}

console.log(findMostExpensive(products));
*/


/*
const hobby = "name";

const user = {
  name: "Omar",
  hobby: "Coding"
};

console.log(user["hobby"]); 

console.log(user[hobby]); 
*/




///  eval()

