/*let count = 10;
while (count >= 0) {
    if (count === 10) {
        console.log(`Countdown ${count}`)
    }
    else if (count === 0) {
        console.log("Blast Off!")
    }
    else {
        console.log(count)
    }
    count--;
}

for (let number = 10; number >= 0; number--) {
    if (number === 10) {
        console.log(`Countdown ${number}`)
    }
    else if (number === 0) {
        console.log("Blast Off!")
    }
    else {
        console.log(number)
    }
}
*/

/*
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
const admitted = "Welcome!";
let refused = "Refused";
for (const guest of people) {
    if (guest == "Lola" || guest == "Phil") {
        console.log(`${refused} ${guest}`);
    }
    else {
        console.log(`${admitted} ${guest}`);
    }
}
*/
/*
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
let refused = "Rufesd: ";
let addmited = "Addmited: ";
for (const guest of people) {
    if (guest == "Lola" || guest == "Phil") {
        refused += guest + " ,"
    }
    else {
        addmited += guest + " ,"
    }
}
addmited = addmited.slice(0, -2);
refused = refused.slice(0, -2);

console.log(addmited);
console.log(refused);
*/
/*
const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const search = 'Mary';
for (const contact of contacts) {
   let splitContact = contact.split(":");
   if (splitContact[0] === search) {
    console.log(splitContact[1])
    break;
   }
    
}
*/

const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const input = 'sarah';
const search = input.charAt(0).toUpperCase() + input.slice(1);
let found = false;
for (const contact of contacts) {
   let splitContact = contact.split(":");
   if (splitContact[0] === search) {
    console.log(splitContact[1]);
    found = true;
    break;
   }
   
}
   if (found === false) {
    console.log("Name Not found!")
   }