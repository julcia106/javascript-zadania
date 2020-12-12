// // Zadanie 1

let i = 0;

const time = setInterval(() => {
    i++;
    console.log('Cześć po raz ' + i);

    if (i >= 15) {
        clearInterval(time);
    }
}, 3000);

// Zadanie 2

const tab = [1, 2, 3, 4];

setTimeout(() => {
    console.log(tab);
}, 2000);

setTimeout(()=>{
    let i = 0;
    const time = setInterval(() => {
      
        console.log(tab[i]);
        i++;
        if(i == tab.length){
            clearInterval(time);
        }
    
    }, 3000);
}, 2000)