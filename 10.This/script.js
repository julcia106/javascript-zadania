// Zadanie 1 i 2

const person = {

    name: "Julia",
    surname: "Kowalska",
    age: 21,
    country: "Poland",
    city: "Cracow",
    showInfo: show,
    incrementAge: incrAge,
}

const person2 = {
    
    name: "Kasia",
    surname: "Motyl",
    age: 2,
    country: "Poland",
    city: "Cracow",
    showInfo: show,
    incrementAge: incrAge
}

person.favouriteMeal = [];
person2.favouriteMeal = [];

function showMeal(){
    console.log("Favourite meals: ", this.favouriteMeal.join(", "));
}

function addMeal(meal){
    this.favouriteMeal.push(meal);
}

function show() {
    console.log(`${this.name} ${this.surname},  age: ${this.age} country: ${this.country}
    city: ${this.city}`);
}

function incrAge(){
    this.age++;
}

person.showMeal = showMeal;
person.addMeal = addMeal;
person2.showMeal = showMeal;
person2.addMeal = addMeal;

person.addMeal("ButterChicken");
person.addMeal("GongBao");

person2.addMeal("FruitSalad");
person2.addMeal("Dumplings");

person.showInfo();
person.incrementAge();
person.showInfo();

person.showMeal();

person2.showInfo();
person2.incrementAge();
person2.showInfo();

person2.showMeal();

// Zadanie 3

function Calculator(a,b) {

    this.a = a;
    this.b = b;

    this.sum = function() {
        console.log(this.a + this.b);
    }

    this.sub = function() {
        console.log(this.a - this.b);
    }

    this.div = function() {

        if(this.b == 0){
            console.log("Nie można podzielić przez 0");
        }
        else {

            console.log(this.a / this.b);
        }
    }

    this.mult = function() {
        console.log(this.a * this.b);
    }
}

const calc = new Calculator(10,2);
calc.sum();
calc.sub();
calc.mult();
calc.div();

const calc2 = new Calculator(10,0);
calc2.div();

// Zadanie 4

function Ladder() {

    this.steps = 0;

    this.up = function() {
        this.steps++;
    }

    this.down = function() {
        if(this.steps > 0){
            this.steps--;
        }
        else{
            console.log("Jesteś na ziemi");
        }
    }

    this.showLevel = function() {
        console.log(this.steps);
    }
}

const ladder = new Ladder();
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.showLevel();
ladder.down();
ladder.showLevel();
ladder.down();
ladder.down();
ladder.down();
ladder.showLevel();