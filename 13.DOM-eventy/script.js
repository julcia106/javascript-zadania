// Zadanie 1

document.getElementById('test-event').addEventListener('click', (event) => { console.log(event)});
    
document.addEventListener("mousemove",(event) => { console.log(event)});

document.getElementById('test-event').addEventListener('mouseover', (event) => { console.log(event)});

document.addEventListener("keydown", (event) => { console.log(event)});

document.addEventListener('scroll', (event) => { console.log(event)});

document.getElementById('input-test').addEventListener('input', (event) => { console.log(event)});

// Zadanie 2

function printText(){

    const button = document.getElementById('ex2');
    
    button.addEventListener('click', enterText => {
        let dataText= enterText.target.dataset.text;
        let belowElement= enterText.target.nextElementSibling;
        belowElement.innerText = dataText;
    });
}
printText();

// Zadanie 3

function changeColor() {
    const square = document.getElementById('ex3');

    square.addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = 'blue';
    });

    square.addEventListener('mouseleave', (event) => {
        event.target.style.backgroundColor = 'red';
    });
}

changeColor();

// Zadanie 4

const input = document.querySelector('#input-test');
const alert = document.createElement('div');
alert.textContent = "You can't write a number.";

const validate = (e) => {
    if(e.target.value.match (/\d+/g)){
        input.parentElement.appendChild(alert);
    }else{
        alert.remove();
    }
};

input.addEventListener('input', validate);


// Zadanie 5

let counter = 0;

function counterFunction(){
    if(counter >= 10){
        document.getElementById("ex5-button").removeEventListener("click", counterFunction);
    }else {
        counter++;
        this.nextElementSibling.innerHTML = counter;
    }
}

document.getElementById("ex5-button").addEventListener("click",counterFunction);

// Zadanie 6

document.addEventListener("scroll", function(){

    if (window.scrollY > 200) {
        document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "white";
    }

});

// Zadanie 7

let calcInput = document.querySelector('#calculator > input');
let isEval = false;
let isClear = false;

document.querySelectorAll('#calculator > div > button').forEach((element) => {
    element.addEventListener('click', (event) => {
        if (isClear == true) {
            calcInput.value = "";
            isClear = false;
        }
        
        calcInput.value = calcInput.value + event.target.innerText;

        if (isEval == true) {
            calcInput.value = eval(calcInput.value);
            isEval = false;
            isClear = true;
        }

        if (['/', '*', '+', '-'].includes(event.target.innerText)) {
            isEval = true;
        }
    });
});



