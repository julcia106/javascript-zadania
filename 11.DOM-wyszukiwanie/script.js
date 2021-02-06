// Zadanie 1

var test = document.getElementsByClassName("list");
console.log(test);

// Zadanie 2

function getElementsByTag(tag) {
    return document.querySelectorAll(tag);
}

const elements = getElementsByTag("li");
console.log(elements);

// Zadanie 3

var test = document.getElementById("list");
console.log(test);

// Zadanie 4

function showElements(selector){
    console.log(selector);
}

showElements(document.querySelectorAll('li'));
showElements(document.querySelectorAll('ul'));    
showElements(document.querySelectorAll('span'));    
showElements(document.querySelectorAll('div.list span'));    
showElements(document.querySelectorAll('div#spans span'));    

