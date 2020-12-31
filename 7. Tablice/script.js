// Zadanie 1 

const tab = ["Ala", "ma", "kota"];

for(let i of tab){
    console.log(i);
}

// Zadanie 2

const tab = ["Julia", "Kasia", "Ala", 1, 2, 3];

console.log(tab[0] + " " + tab[1]);

console.log(tab[tab.length -1]);

for(let i of tab){
    console.log(i);
}

for(let i = 0; i < tab.length; i += 2){
    console.log(tab[i]);
}

for(let i of tab){
    if(typeof i === 'string'){
        console.log(i);
    }
}

for(let i of tab){
    if(typeof i === 'number'){
        console.log(i);
    }
}

// Zadanie 3

//1
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0; 
for(let i of tab){
    sum += i;
}
console.log(sum);

//2
let sum = 0; 
for(let i of tab){
    sum -= i;
}
console.log(sum);

//3
let sum = 0; 
for(let i of tab){
    sum += i;
}
console.log(sum / tab.length);

//4
tab.forEach((i)=>{
    if((tab[i] % 2) != 0)
        console.log(i);
})

//5
tab.forEach((i)=>{
    if((tab[i] % 2) == 0)
        console.log(i);
})

//6
let min = tab[0]; 

for(let i = 0; i < tab.length; i++){
    if(min > tab[i]){
        min = tab[i]
    }
}
console.log(min);

//7
let max = tab[0]; 

for(let i = 0; i< tab.length; i++){
    if(max < tab[i]){
        max = tab[i]
    }
}
console.log(max);

//8
for(let i = tab.length - 1; i >= 0; i--){
    console.log(tab[i]);
}

//lub za pomocą reverse()
tab.reverse().forEach(el => {
    console.log(el);
});

// Zadanie 4

function showTab(t){
    return t.reduce((a , b) => a + b);
}
console.log(showTab(tab));

// Zadanie 5

function showTab(t) {
    const sum = t.reduce((a , b) => a + b);
    const avg = sum / t.length;
    const result = t.map(el => console.log(el * avg ))
}
showTab(tab)

// Zadanie 6

function showAverage(t){

    let count = 0;
    let sum = 0;

    t.forEach(i => {

        if((tab[i] % 2) == 0){

            sum += t[i];
            count++;
        }
    });
    console.log(sum / count);
}
   
showAverage(tab);

// Zadanie 7

const tab = [4, 2, 6, 1, 12, 65, 3];

const sortTab = tab.sort((a , b) => a - b);
console.log(sortTab);

// Zadanie 8

const arrayA = [1,2,3];
const arrayB = [4,5,6];

function sumArrayValue(arrayA, arrayB){
    let newArray = [];

    arrayA.forEach((num1, i) => {
        newArray.push(num1 + arrayB[i]);
    });
    return newArray;
}
console.log(sumArrayValue(arrayA, arrayB));

// Zadanie 9

let numArray = [1,2,3,4,5,-21,-10,0];

function reverseNumber(t){

    let newArray = [];

    for(let i = 0; i < numArray.length; i++){

        if( t[i] == 0)
            newArray.push(0);
        else
            newArray.push((t[i] * (-1))); 
    }

    return newArray;
}

console.log(reverseNumber(numArray));
