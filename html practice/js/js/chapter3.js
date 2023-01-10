// let a = "0123456789"
// console.log(a.slice(2,8))

let str = "The amount of this T-shirt is Rs 1000";
console.log(str);
let amount = parseInt(str.slice("The amount of this T-shirt is Rs ".length));
console.log(typeof amount);
