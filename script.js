/*
let i = 0;
while (i < 3) {
   console.log(i);
   i++
}

let i = 3;
while (i) {
   console.log(i)
   i--;
}
let j = 0;
while (j != 101) {
   console.log(j)
   j++;
}

let i = 10;
while (i >= 0) {
    if (i % 2 === 0) {
      console.log(i)
   }
   i--;
}

let i = 10;
while (i >= 0) {
   console.log(i);
   i = i - 2;
}

let i = 3;
while (i) alert(i--)
   

let i = 3;
do {
   alert(i);
   i--
} while (i >= 0)

let i = 0;
do {
   alert(i);
   i++;
} while (i <= 3)

for (let i = 1; i <= 3; i++) {
   alert(i)

let i = 0;

for (i = 0; i < 3; i++) { // use an existing variable
  alert(i); // 0, 1, 2
}

alert(i); // 3, visible, because declared outside of the loop}
// 

let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');
  if (!value) {
   break;
  }

  sum += value;

}
alert( 'Sum: ' + sum );

let sum = 0;
while (true) {
   let value = +prompt("enter a number: ")
   if (!value) {
      break
   }
   sum = value + sum
}
alert(sum)

for (let i = 0; i < 10; i++) {

  if (i % 2) {
    console.log( i );
  }

}

for (let i = 0; i <= 10; i++) {
   if (i % 2 != 0) continue
   console.log(i)
}
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');
    if (!input) break outer; // ktkhdem ghir 3la loop tanya  w loop lewla kt3awd tkhedm loop tanya aras taro
  }
}

alert('Done!');

let i = 3;
while(i) {
   alert(i--)
}
// i = 3 = true 3
// i = 2 = true 2
// i = 1 = true 1
// i = 0 = false

let i = 0;
while (++i < 5) alert( i );
// 1 + i = 1 < 5 true 1
// 1 + i = 2 < 5 true 2
// 1 + i = 3 < 5 true 3
// 1 + i = 4 < 5 true 4
// 1 + i = 5 < 5 false

let i = 0;
while (i++ < 5) alert( i );

// i = 0 < 5 i + 1 = true 1
// i = 1 < 5 i + 1 = true 2
// i = 2 < 5 i + 1 = true 3
// i = 3 < 5 i + 1 = true 4
// i = 4 < 5 i + 1 = true 5
// i = 5 < 5 = false

// Use the for loop to output even numbers from 2 to 10.
for (let i = 2; i <= 10; i++)
   console.log(i)


//Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

let i = 0;
while (i < 3) alert(`number ${i++}!`)

for (;;) {
   let input = +(prompt("enter a number greater than 100: "));
   if ((input => 100) || (!input)) {
      break;
   }
}

let num;
do {
   num = prompt("enter a number greater than 100: ")
} while(num <= 100 && num)

// cancel 
//  num <= 100 ghadi t7ewl num mn null lnumber 0 y3ni true
//  && num hyya null ye3ni false
// ayw9ef loop

// Write the code which outputs prime numbers in the interval from 2 to n.

 for (let i = 2; i <= 10; i++) {
     
   for (let j = 2; j < i; j++) {
      if (i % j == 0) {
         break;
      }
      
   }
   console.log(i)
}

// j = 2 i = 2 j < i false 
// i = 2

// j = 2 i = 3 j < i true 
// 3 % 2 == 0  false 
// j = 3 i = 3 j < i false
// i = 3

// j = 2 i = 4 j < i true
// 4 % 2 == true 
// continue 

// j = 2 i = 5 j < i true 
// 5 % 2 == 0 false
// j = 3 i = 5 j < i true 
// 5 % 3 == 0 false
// j = 4 i = 5 j < i true 
// 5 % 4 == 0 false 
// j = 5 i = 5 j < i false
// i = 5 
*/
/*
let allStudents = ["Ahmed", "Sara", "Ali", "Mona"];
let attended = ["Sara", "Mona"];

studentLoop: for (let i = 0; i < allStudents.length; i++) {

   for (let j = 0; j < attended.length; j++) {
      if (allStudents[i] == attended[j]) {
         continue studentLoop;
        
      }
   }

   console.log(allStudents[i] + " absent!")
}

// i = 0 ya3ni allstudents[i] ahmed
// allstudents[i] = ahmed == attended[j] = sara. false
// ++j =  1 
// let j = 1 < attended.legth = true
// allstudents[i] = ahmed == attended[j] = mona. false
// ++j = 1
// let j = 2 < attended.legth = false
// console.log(allStudents[i] + " absent!") = ahmed

let allStudents = ["Ahmed", "Sara", "Ali", "Mona"];
let attended = ["Sara", "Mona"];

studentLoop: for (let i = 0; i < allStudents.length; i++) {

   for (let j = 0; j < attended.length; j++) {
      if (allStudents[i] == attended[j]) {
         console.log(allStudents[i] + " checked!")
        
      }
   }

}

let allStudents = ["Ahmed", "Sara", "Ali", "Mona"];
let attended = ["Sara", "Mona"];

studentLoop: for (let i = 0; i < allStudents.length; i++) {

   for (let j = 0; j < attended.length; j++) {
       if (allStudents[i] == attended[j]) {
         continue studentLoop;
       }
   }
   console.log(allStudents[i])
}

primeNumber: for (let i = 2; i < 10; i++) {

   for (let j = 2; j < i; j++) {
      if (i % j == 0) {
         continue primeNumber;
      }
   }
   console.log(i)
}
// 2 < 2 no console.log(i) = 2
// 3 % 2 == 0 false i++ 3 < 3 no console.log(i) = 3
// 4 % 2 == 0 true continue 
// 5 % 2 == 0 false i++ 5 % 3 == 0 false 5 % 4 == 0 false 5 < 5 no console.log(i) == 5
