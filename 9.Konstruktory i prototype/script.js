// Zadanie 1

function Person(name, surname, age, country, city, language){

    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;

    this.modifyAge = (age) => (this.age = age);
    this.modifyCity = (city) => (this.city = city);

    this.show = function(){
        console.log(`Person: ${this.name} ${this.surname} age: ${this.age} country: ${this.country}
        city: ${this.city} language: ${this.language}`);
    }

}

const Person1 = new Person("Julia", "Nowak", 20, "Poland", "Bielsko", "Polish");
const Person2 = new Person("Kasia", "Kowalska", 28, "Poland", "Katowice", "Polish");
const Person3 = new Person("Tomek", "Rak", 21, "Poland", "Katowice", "Polish");
const Person4 = new Person("Magda", "Kowalska", 28, "Poland", "Katowice", "Polish");
const Person5 = new Person("Anna", "Kowalska", 30, "Poland", "Poznan", "Polish");

console.log(Person1.age);
console.log(Person1.city);

Person1.modifyAge(12);
Person1.modifyCity("Gdańsk");

console.log(Person1.age);
console.log(Person1.city);

Person1.show();

// Zadanie 2

function Calculator(number1){

    this.sum = number1;

    this.addition = (number2) => {

        this.sum += number2;
        console.log(this.sum);
    }

    this.substraction = (number2) => {

        this.sum -= number2;
        console.log(this.sum);
    }

    this.division = (number2) => {

        this.sum /= number2;
        console.log(this.sum);
    }

    this.multiplication = (number2) => {

        this.sum *= number2;
        console.log(this.sum);
    }

    this.showSum = () =>{
        console.log(this.sum);
    }

    this.clean = () => {
        this.sum = 0;
    }
}

console.log("First calculator: ");

var calc = new calculator(10);
calc.showSum();
calc.addition(5);
calc.substraction(2);
calc.multiplication(5);
calc.substraction(5);
calc.division(10);
calc.clean();
calc.showSum();

console.log("Second calculator: ");

var calc2 = new calculator(25);
calc.addition(25);
calc.substraction(5);
calc.multiplication(2);
calc.substraction(4);
calc.division(2);
calc.clean();
calc.showSum();

// Zadanie 3

function Game() {

    this.changeNumber = function () {
        Game.prototype.changeNumberInterval = setInterval(function () {
            Game.prototype.number = Math.round(Math.random() * 10);
        }, 1000);
    };

    this.checkStopExecute = function () {
        Game.prototype.checkStopExecuteInterval = setInterval(() => {
            console.log("Check stop execute for number: " + Game.prototype.number);

            if (Game.prototype.number <= 5) {
                return;
            }

            clearInterval(Game.prototype.changeNumberInterval);
            clearInterval(Game.prototype.checkStopExecuteInterval);
        }, 1000);
    };
}

const Game1 = new Game();
const Game2 = new Game();
Game1.changeNumber();
Game2.checkStopExecute();