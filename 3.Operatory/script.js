// Zadanie 1
let one = true;
let two = true;

console.log(one===two);

let three = false;
let four = true;

console.log(three===four);

// Zadanie 2
let num1 = 15;
let num2 = 10;
let moduloResult = 0;

moduloResult = num1 % num2;
console.log(moduloResult);

// Zadanie 3
let str1 = 'Ala ma';
let str2 = ' kota.';
let stringsResult = "";

stringsResult = str1.concat(str2);
console.log(stringsResult);

// Zadanie 4
var someNumber = 425;
var someString = "425";

console.log(someNumber==someString); // true- operandy są równie.
console.log(someNumber===someString); // false- operandy są równie lecz nie są tego samego typu.

// Zadanie 5
let counter = 30;
console.log(counter);

counter++;
console.log(counter);

counter--;
console.log(counter);

// Zadanie 6
let num1 = 20;
let num2 = 35;
let result = null;

result = (num1 > num2);
console.log(result);