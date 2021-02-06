// Zadanie 1

const newElem = document.createElement("div");
newElem.innerText = "To jest nowy element";
document.body.appendChild(newElem);

//Zadanie 2

const favouriteFruits = ['arbuz','jabłko','banan','kiwi','gruszka','borówki','śliwki'];

const ul = document.createElement("ul");
favouriteFruits.forEach(v => {
    const li = document.createElement("li");
    li.innerText = v;
    ul.appendChild(li);
});
document.body.appendChild(ul);

// Zadanie 3

document.body.addEventListener('click', () => {
    const list = document.querySelectorAll("ul li");
    list.forEach((element, i) => {
        if (i % 2 === 0) element.remove();
    });
});

// Zadanie 4

const buttonToRemove = document.createElement('button');
buttonToRemove.innerText = 'Click me';
document.body.appendChild(buttonToRemove);

buttonToRemove.addEventListener('click', () => {
    buttonToRemove.remove();
});

// Zadanie 5

const randomNumber = Math.floor((Math.random() * 10) + 1);

for (let i = 0; i < randomNumber; i++) {

    const div = document.createElement('div');
    div.innerText = `This is div number ${i}`;
    document.body.appendChild(div);
}

// Zadanie 6

const object = { div1: 'to jest div', span1: 'to jest span', div2: { div3: 'to jest div', }, span2: 'to jest span'};

function htmlStructFromObj(obj, parent = document.body) {

    Object.getOwnPropertyNames(obj).forEach(id => {

        if (typeof (obj[id]) !== 'string') {

            const innerParentTag = id.replace(/[0-9]/g, '');
            const innerParent = document.createElement(innerParentTag);
            innerParent.id = id;
            parent.appendChild(innerParent);
            htmlStructFromObj(obj[id], innerParent);
            return;

        }

        const tagElement = id.replace(/[0-9]/g, '');
        const newElement = document.createElement(tagElement);
        newElement.innerText = obj[id];
        newElement.id = id;
        parent.appendChild(newElement);
        
    })
}

htmlStructFromObj(object);

// Zadanie 7

const animals = ['pies','kot','koń','tygrys','motyl',"pantera","lew","antylopa"];

const list1 = document.createElement("ul");
const list2 = document.createElement("ul");

animals.forEach(v => {

    const li = document.createElement("li");
    li.innerText = v;
    list1.appendChild(li);
    
});

const arrayList = [list1, list2];

const buttons = [document.createElement("button"), document.createElement("button")];

function checkButtonDisabled() {

    arrayList.forEach((ul, i) => {

        if (ul.childElementCount <= 1){
            buttons[i].disabled = true;
        } else {
            buttons[i].disabled = false;
        }
    })
}

arrayList.forEach((ul, i) => {

    buttons[i].innerText = 'Przenieś do drugiej listy';

    buttons[i].addEventListener('click', () => {

        const listItems = ul.querySelectorAll('li');

        const childToTransfer = listItems[listItems.length - 1];
        if (i === 0) {
            list2.insertBefore(childToTransfer, buttons[1]);
        } else {
            list1.insertBefore(childToTransfer, buttons[0]);
        }
        checkButtonDisabled();
    });
    ul.appendChild(buttons[i]);
    document.body.appendChild(ul);
});

checkButtonDisabled();

// Zadanie 8

let form = document.createElement('form');

let elementType = document.createElement('input');
elementType.placeholder = "Type of element(ex.li): ";

let yourText = document.createElement('input');
yourText.placeholder = "Your text: ";

let textColor = document.createElement('input');
textColor.placeholder = "Text Color: ";

let elementCounter = document.createElement('input');
elementCounter.placeholder = "How many times: ";

let createButton = document.createElement('button');
createButton.innerText = "Create";
createButton.type = "submit";

form.appendChild(elementType);
form.appendChild(yourText);
form.appendChild(textColor);
form.appendChild(elementCounter);
form.appendChild(createButton);

document.querySelector("#root").appendChild(form);

createButton.addEventListener('click', (event) => {
    event.preventDefault();

    for (let i = 0; i < parseInt(elementCounter.value); i++) {

      let newElement = document.createElement(`${elementType.value}`);

      newElement.style.color = `${textColor.value}`;
      newElement.innerText = yourText.value;

      root.appendChild(newElement);

    }
});

// Zadanie 9

let container = document.createElement("div");

document.body.appendChild(container);

function renderForm(){
    let form = document.createElement('form');
    form.classList.add('zad9-form');

    let name = document.createElement('input');
    name.placeholder = "Imię";
    name.setAttribute('name', 'name');

    let surname = document.createElement('input');
    surname.placeholder = "Nazwisko";
    surname.setAttribute('name', 'surname');

    let age = document.createElement('input');
    age.placeholder = "Wiek";
    age.setAttribute('name', 'age');

    let numberOfKids = document.createElement('input');
    numberOfKids.placeholder = "Ilość dzieci";
    numberOfKids.setAttribute('name', 'numberOfKids');

    form.appendChild(name);
	form.appendChild(surname);
	form.appendChild(age);
    form.appendChild(numberOfKids);
    return form;
}

container.appendChild(renderForm());

let addButton = document.createElement('button');
addButton.innerText = "Utwórz";
addButton.addEventListener("click", () => {
	table.innerHTML += createTable();
});
container.appendChild(addButton);


let moreButton = document.createElement('button');
moreButton.innerText = "Więcej";
moreButton.addEventListener("click", () => {
	container.appendChild(renderForm()); 
});
container.appendChild(moreButton);

let table = document.createElement("table");
table.classList.add('table-form');


document.body.appendChild(table);

function createTable() {
	const outputTable = document.querySelector(".table-form");
	
	let html = "";
	let forms = document.querySelectorAll(".zad9-form");
	
	if(outputTable.innerHTML === ""){
		html += "<tr><td>Imię</td><td>Nazwisko</td><td>Wiek</td><td>Liczba dzieci</td></tr>";
	}
	
	forms.forEach((form) => {
        let name = uppercaseFirstLetter(form.querySelector("input[name='name']").value);
        let surname = uppercaseFirstLetter(form.querySelector("input[name='surname']").value);
        let age = uppercaseFirstLetter(form.querySelector("input[name='age']").value);
		let numberOfKids = uppercaseFirstLetter(form.querySelector("input[name='numberOfKids']").value);
		
		html += `<tr><th>${name}</th><th>${surname}</th><th>${age}</th><th>${numberOfKids}</th></tr>`;
	});
	
	return html;
}

// Zadanie 10

function uppercaseFirstLetter(string){
	if(string !== ""){
		string = string[0].toUpperCase() + string.substr(1, string.length);
		return string;
	}
	else{
		return string;
	}
}

// Zadanie 11

numInString('julia12ania3kasia10');

function numInString(params) {

    const numbers = params.match(/[0-9]+/g);

    if (numbers.length > 0) {

        console.log(
            'Sum of numbers in string: ' + numbers.reduce((a, b) => Number(a) + Number(b))
        );

        const multiplication = numbers.reduce((a, b) => Number(a) * Number(b));

        for (let i = 0; i < multiplication; i++) {

            const div = document.createElement('div');
            div.innerText = `div${i}`;
            document.body.appendChild(div);
        }
    }
}

// Zadanie 12

function someString(str) {

    let obj = {name : str};

    if (str.includes("Ala")) {

        obj.name = str.replace("Ala", "Ola");
        console.log(`${obj.name}`)
    } 
    else 
    {
        let root = document.getElementById("root");
        let div = createNewElement("div");
        div.innerHTML = "Słowo Ala nie występuje w tekście.";
        root.appendChild(div);
    }
}

let str = "Ala ma kota";
someString(str);

// Zadanie 13

let strArr = ['Julia','12','Kasia','22'];

function numberOfLetters (params){

    let numbersCounter = 0;
    params.forEach(v => {
        numbersCounter += v.length;
    });

    return numbersCounter;
}

function sum(params) {

    const num = params.map(v => v.match(/[0-9]+/g));
    const allNum = num.flat();

    return allNum.reduce((a, b) => Number(a) + Number(b));
}

function average(params) {

    const num = params.map(v => v.match(/[0-9]+/g));
    const allNum = num.flat().filter(v => v);
    const sum = allNum.reduce((a, b) => Number(a) + Number(b));

    return sum / allNum.length;
}

console.log('Numbers of letters: ' + numberOfLetters(strArr));
console.log('Sum of numbers in string: ' + sum(strArr));
console.log('Average of numbers in string: ' + average(strArr));

// Zadanie 14

const obj = {
    name: '',
    surname: '',
    age: ''
  }
  console.log(obj);

  const modifyObj = (obj, _name, _surname, _age) => {

    obj.name = _name,
    obj.surname = _surname,
    obj.age = _age

    console.log(obj);

    if(obj.name.length > 5 || obj.surname.length > 5){

      const btn = document.createElement('button');
      btn.innerText = "Restore";

      btn.addEventListener('click', () => {

        obj.name =  '';
        obj.surname = '';
        obj.age =  '';
        console.log(obj);
      })

      root.appendChild(btn);
    }
  }
  
  modifyObj(obj, 'Kasia', 'Kowalska', 10);



