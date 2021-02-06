// Zadanie 1
let num1 = 4;
let num2 = 5;

if(num1 > num2){
    console.log(num1);
}else
{
    console.log(num2);
}

// Zadanie 2
let num1 = 40;
let num2 = 5;
let num3 = 10;

if(num1 > num2 && num1 > num3)
{
    console.log(num1);
}
else if(num2> num1 && num2 > num3)
{
    console.log(num2);
}
else
{
    console.log(num3);
}

// Zadanie 3
let str = 'Lubię JavaScript';

for(let i = 0; i < 10; i++)
{
    console.log(i + ": " + str);
}

// Zadanie 4
let result = 0;

for(let i = 1; i<= 10; i++)
{
    result += i;
}
console.log(result);

// Zadanie 5

var n = 5;

for (let i= 0; i<= n; i++)
{
    if(i%2==0)
    {
        console.log(i + " - parzysta");
    }
    else
    {
        console.log(i + " - nieparzysta");
    }
}

// Zadanie 6

for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log("i= " + i + ", j= " + j);
    }
}

// Zadanie 7

for(let i= 0; i<= 100; i++)
{
    if( i % 15 == 0)
    {
        console.log(" FizzBuzz ");
    }
    else if(i % 5 == 0)
    {
        console.log(" Buzz ");
    }
    else if( i % 3 == 0)
    {
        console.log(" Fizz ");
    }
    else
    {
        console.log(i + " ");
    }
}

// Zadanie 8

// a)

let x = 5;

for(let i = 1; i <= x; i++)
  {
    let str = "";

    for( let j = 1; j <= i ; j++)
      {
        str += '*'
      }
    console.log(str);
  }

  // b)

  for (let i = 0; i < 5; i++) {

    let str = '';

    for (let x = 0; x < 5 - i; x++) {

        str += ' ';
    }

    for (let y = 0; y < i + 1; y++) {
        str += ' ' + '*';
    }

    console.log(str);
}

// c)


for (let i = 0; i < 5; i++) {

  let str = '';

  for (let x = 0; x < 5 - i; x++) {

      str += ' ';
  }

  for (let y = 0; y < (2 * i + 1); y++) {

      str += '*';
  }

  console.log(str);
}

// d)

for (let i = 0; i < 5; i++) {

  let str = '';

  for (let x = 0; x < i + 1; x++) {

      str += '*';
  }

  for (let y = 0; y < 5 - (i + 1); y++) {

      str += (y + 1);
  }

  console.log(str);
}

console.log('-----');

for (let i = 0; i < 5; i++) {

  let str = '';

  for (let x = 0; x < (5 - i); x++) {

      str += "*";
  }

  for (let y = 0; y < 5 - (5 - i); y++) {

      str += 5 - ((5 - (5 - i)) - y);
  }

  console.log(str);
}

// e)

for (let i = 1; i <= 5; i++) {

  let str = "";

  for (let j = 5 - i; j > 0; j--) {

      str += " ";
  }
  for (let j = i * 2 - 1; j > 0; j--) {

      if(j % 2){

        str += "*";

      } else {

        str += " ";
      }
  }
  console.log(str);
}

for(let k = 0; k < 3; k++){

    console.log("    *");
}