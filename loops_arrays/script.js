/*const prices = [10, 20, 30, 40]
let total = 0;
for (const price of prices) {
    console.log(`here you go gemini ${price + 5}`)
}
console.log(total)*/

//create variable named prices
//creat variable named tax 
//creat for loop of 
/*const prices = [5, 20, 15];
let tax = 2;
let finalTotal = 0;
for (const price of prices) {
    console.log(price + tax)
    finalTotal = finalTotal + price
}
console.log(finalTotal)


let i = 0;
while (i <= 10) {
    console.log(i++)
}

let count = 10;
while (count > 7) {
    console.log("Welcome");
    count--;
}



for (let i = 0; i <= 10; i++) {
    if (i == 4){
        continue;
    }
    console.log("King")
}

const names = ["Ali", "Satan", "Sara", "Noor"]
for (const name of names) {
    if (name === "Satan") {
        continue;
    }
    console.log(name)
}

const search = ["othman", "king", "programer", "kin"];
for (const s of search) {
    if (s === "kin") {
        console.log("found her")
        break;
    }
    console.log("checking " + s)
}
*/
/*
const cats = ["Tiger", "Cat", "Lion"];
const loudCats = cats.map(function(cat) {
    return cat.toUpperCase();
});
console.log(loudCats)
/*
const cats = ["Tiger", "Cat", "Lion"];
const loudCats = cats.map(cat => cat.toUpperCase())
console.log(loudCats)*/

for (let i = 10; i >= 0; i--) {
    if (i == 0) {
        console.log("Blast Off!")
    }
    else if (i == 10) {
        console.log("Countdown! " + i)
    }
    console.log(i)
}

let i = 10;

while (i >= 0) {
    // هنا تكتب الشروط (if...else)
    if (i === 10) {
        console.log("Countdown 10");
    } else if (i === 0) {
        console.log("Blast off!");
    } else {
        console.log(i);
    }
    
    i--; // هذا الجزء ضروري جداً لكي لا يدخل المتصفح في حلقة لانهائية (Infinite Loop)
}