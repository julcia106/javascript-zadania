// Zadanie 1
console.log(document.getElementById("buz").parentNode);
console.log(document.getElementById("baz").previousElementSibling);
console.log(document.getElementById("foo").children);
console.log(document.getElementById("foo").parentNode);
console.log(document.getElementById("foo").firstElementChild);

var elem = document.getElementById("foo").children;
console.log(elem[Math.floor(elem.length/2)]);

// Zadanie 2

function showText (selector) {
    document.getElementById(selector).addEventListener("click", event => {
        console.log(event.target.querySelector('div').innerText);
    });
}

showText("ex2");

// // Zadanie 3

const ex3 = document.querySelectorAll("#ex3 button");

ex3.forEach(btn => {

    btn.addEventListener("click", function(){

        if(btn.nextElementSibling.style.display === "none")
            btn.nextElementSibling.style.display = 'inline';
        else 
            btn.nextElementSibling.style.display = 'none';
    })
})

// zad 3 ew.

const addEventOnButtons = () =>{
    const buttons = document.getElementById("ex3").getElementsByTagName("button");

    for(let i = 0; i< buttons.length; i++){
        buttons[i].addEventListener("click", function() {
            changeParenColor(this.parentElement);
            const span = this.parentElement.getElementsByTagName("span")[0];

            span.style.display = 
                span.style.display === "inline-block" ? "none" : "inline-block";
        });
    }
};

// Zadanie 4 TODO

document.querySelectorAll('div#ex3 button').forEach((el) => {
    el.addEventListener('click', () => {
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        el.parentElement.style.backgroundColor = randomColor;
    });
});

// Zadanie 5
 
const option = 1;
document.querySelectorAll('#ex5 div').forEach((div) => {

    div.addEventListener('mouseover', function(){

        let color = this.style.backgroundColor;
        let element;

        if(option === 1) {
            element = div.parentElement.querySelectorAll('li:first-of-type');
        }else if (option === 2){
            element = div.parentElement.querySelectorAll('li:last-of-type');
        }else if (option === 3){
            element = div.parentElement.querySelectorAll('li:nth-of-type(even)');
        }else if (option === 4){
            element = div.parentElement.querySelectorAll('li');
        }else if (option === 5){
            element = div.parentElement.querySelectorAll('ul');
        }

        element.forEach((elem) => {
            console.log(elem.style.backgroundColor)
            elem.style.backgroundColor = color;
        })
    })
})

// Zadanie 6

var elem = document.getElementById("ex6");

var firstElem = elem.firstElementChild.firstElementChild.firstElementChild;

var secondElem = elem.firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;

var thirdElem = elem.parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;

console.log(firstElem, secondElem, thirdElem);