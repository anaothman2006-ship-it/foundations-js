/*
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
*/