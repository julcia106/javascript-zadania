// Zadanie 1

const sayHello = () => "Udało się!";
console.log(sayHello());

// Zadanie 2

const sayHello = name => "Hello " + name;

console.log(sayHello("Julia"));

// Zadanie 3

const tab = [1,2,3,4];

const showTab = t => t;

console.log(showTab(tab));

// Zadanie 4 

const showString = (str) => {
    let c = 0;
    let time = setInterval(() => {
        console.log(str);
    if(++c >= 5){
        clearInterval(time);
        console.log('Koniec')
    }
    }, 3000)
}
showString('Hello');