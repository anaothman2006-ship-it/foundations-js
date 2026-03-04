/*
let user = {
    name: "Othman", 
    age: 39,
    isAdmin: true
}
delete user.age;
user.isAdmin = false
console.log(user.isAdmin);
*/

/*
let user = {};
user["likes birds"] = true;
console.log(user["likes birds"]);
delete user["likes birds"];
*/

/*
let user = {};
let key = "likes birds";
user[key] = true;
console.log(user["likes birds"]);
*/

/*
let user = {
    name: "Othman",
    age: 19,
}

const propertyFromUser = prompt("what do want to know about the user (name/age)");

console.log(user[propertyFromUser]);
*/

/*
let fruit = prompt("which fruit to buy?", "apple");
let bag = {
    [fruit]: 5,
}
console.log(bag.apple);
*/

/*
let fruit = prompt("which fruit to buy?", "apple");
let bag = {};
console.log(bag[fruit] = 5);
*/

/*
let fruit = "apple";
let bag = {
    [fruit + 'Banana']: "deleciouse",
}
console.log(bag.appleBanana);
*/

/*
function makeUser(name, age) {
    return {
        name: name,
        age: age,
    }
}
let user = makeUser("Othman", 19);

console.log(user.name);
*/

/*
let name = "Othman";
let user = {
    name,
    age: 19,
    isAdmin: true,
}
console.log(user.name);
*/

/*
let obj = {
    0: "test",
    name: "Othman",
}
console.log(obj["0"]);
*/

/*
let obj = {};
obj.__proto__ = 5;
console.log(obj.__proto__);
*/

/*
let obj = {};
console.log(obj.noSuchPorperty === undefined);
*/

/*
let user = {age: 19, name: "Othman"};
console.log("age" in user);
console.log("isAdmin" in user);
*/

/*
let user = {age: 19, name: "Othman"};
let key = "age";
console.log(key in user);
*/

/*
let obj = {
    test: undefined,
}
console.log(obj.test);
alert("test" in obj);
*/

/*
let user = {
    name: "Othman",
    age: 19,
    isAdmin: true,
}
for (let key in user) {
    console.log(key);
    console.log(user[key])
}
*/

/*
let obj = {
    "1": "Othman",
    "42": "kendall",
    "20": "jack",
}
for (let key in obj) {
    console.log(key);
    console.log(obj[key])
}
*/

/*
let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
}
codes["+212"] = "Morocco";
for (let code in codes) {
    console.log(code)
}
*/

/*
const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio() {
        console.log(`${this.name[0]} ${this.name[1]} ${this.age} years old.`);
    },
    introducself() {
        console.log(`Hi! I'm ${this.name[0]}.`)
    },
};

person.bio();
person.introducself();
*/

/*
const person = {
    name: {
        first: "Bob",
        last: "Smith",
    }
}
console.log(person.name.first)
*/
/*
const person = {
    name: "Othman",
    age: "19",
}

function logProperty(propertyName) {
    console.log(person[propertyName]);
}

logProperty("name")
*/

/*
const person = {
    name: {
        first: "Bob",
        last: "Smith",
    }
};
person.age = 45;
person["name"]["last"] = "Crashit";
person.farwell = function() {
    console.log("bye everbody!")
}
console.log(person.age)
console.log(person["name"]["last"]);

person.farwell()
*/

/*

const person = {};

const myDataName = "height";
const myDataValue = "175";

person[myDataName] = myDataValue;

console.log(person[myDataName])
*/

/*
function getUserInfo() {
    const user = {};
    const userName = "Name";
    const userNameValue = prompt("Enter your name:");
    const userAge = "Age";
    const userAgeValue = prompt("Enter your age: ");
    user[userName] = userNameValue;
    console.log(user[userName]);
    user[userAge] = userAgeValue;
    console.log(user[userAge]);
}
getUserInfo()
*/

/*
function test() {
    console.log(`Welcome! ${this.name}`);
}

const person1 = {
    name: "Othman",
    test,
}
person1.test()
const person2 = {
    name: "Kendall",
    test,
}
person2.test();
*/

/*
function showTasks() {
    console.log(`Welcome! ${this.owner}`);
}
function complete() {
    this.isCompleted = true;
}
function updateOwner() {
   const name = prompt("Update owner:")
    this.owner = name;
}

const taskManager = {
    owner: "Othman",
    taksk: ["Gym", "Reading", "Coding"],
    isCompleted: false,
    showTasks,
    complete,
    updateOwner,
}
taskManager.updateOwner();
taskManager.showTasks();
taskManager.complete();
console.log(taskManager);
*/

/*
function increaseCounterObject(objectCounter) {
    objectCounter.counter += 1;
}
function increasePrimitive(primitiveCounter) {
    primitiveCounter += 1
}
const obj = {counter: 0};
increaseCounterObject(obj);
console.log(obj.counter);

let primitive = 0;
increasePrimitive(primitive);
console.log(primitive);
*/
/*
let obj = {data: "dog"};
let objCopy = obj;

obj = {data: "cat"};
console.log(obj);
console.log(objCopy);
*/