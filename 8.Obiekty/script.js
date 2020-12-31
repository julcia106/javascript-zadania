// Zadanie 1 i 2

const car = {
    brand : "Volvo",
    colour : "Blue",
    price : 100000,
    changeColour (newColour){
        this.colour = newColour;
        console.log("New car colour: " + car.colour);
    }
};

console.log("Marka: " + car.brand);
console.log("Kolor: " + car.colour);
console.log("Cena: " + car.price)
car.changeColour("White");

// Zadanie 3

const array = [1,2,3,4,5];

let tab = {
    sum: 0,
    sumTab(t) {

        let innerSum = 0;

        for(let i of t){

            innerSum += i;
        }

        this.sum = innerSum;

        console.log(this.sum);
    }
};

console.log(tab.sum);
tab.sumTab(array);
console.log(tab.sum);

// Zadanie 4

const car = {
    Brand: "Volvo",
    Age: 5,
    Colour: "Blue",
};

for(let key in car){
    console.log(key + ": " + car[key]);
}

// Zadanie 5

const car = {

    Brand: "Volvo",
    Age: 5,
    Colour: "Blue",

    Interior : {
        Material: "Leather",
        Colour: "Brown",
        Price: 12000,
    },
};

for(let key in car.Interior){

    console.log(key + ": " + car.Interior[key]);
}

// Zadanie 6

const car = {

    Brand: "Volvo",
    Age: 5,
    Colour: "Blue",
};

car.Name = "Augusta";

car.Show = () => {

    console.log("Hello");
}

console.log(car.Name);
car.Show();