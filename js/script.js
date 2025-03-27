// Creo variabile countdown
const countdown = document.getElementById('countdown'); 
console.log(countdown);

// Riprendo lista dei numeri randomici
const numeriRandom = document.getElementById('numbers-list');

//Riprendo le istruzioni
const istructions = document.getElementById('instructions');

//Riprendo bottone
const bottone = document.querySelector('button');

//Riprendo form
const form = document.getElementById('answers-form');

//Numeri randomici fino a 50
const random = Math.floor(Math.random() * 50) + 1;

// Aggiorna il countdown ogni secondo
let tempoRimasto = 5; 

const timer = setInterval(() => {
    if (tempoRimasto > 0) {
        countdown.innerHTML = tempoRimasto; // Mostra il countdown sullo schermo
        tempoRimasto--;
    } else {
        clearInterval(timer);
        istructions.innerText = 'Inserisci i numeri che hai visto in precedenza'; // Mostra le istruzioni
        form.classList.remove('d-none'); // Mostra il form
        numeriRandom.classList.add('d-none'); // Nascondi la lista dei numeri   
        countdown.innerHTML = 'Tempo scaduto'; // Mostra il messaggio di fine countdown
    }
}, 1000);

//Riprendo i numeri da generare e inserire randomicamente

function generateRandomNumbers(min,max) {
    const numeri = [];
    const numeriArray = 5;
    for(let i = 0; i < numeriArray; i++) {
        let random = Math.floor(Math.random() * (max - min + 1) + min);
        numeri.push(random);
    }
    return numeri;
}
const numbers = generateRandomNumbers(1, 50);
console.log(numbers);

//creo una lista di numeri random
for(let i = 0; i<numbers.length; i++) {
    const listItem = document.createElement('li');
    listItem.innerText = numbers[i];
    numeriRandom.appendChild(listItem);
}

// Aggiungo event listener al form
form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const userNumbers = [];
    const inputs = form.querySelectorAll('input');

    inputs.forEach(input => {
        const value = parseInt(input.value);
        if (!isNaN(value)) {
            userNumbers.push(value);
        }
    });

    const correctNumbers = numbers.filter(num => userNumbers.includes(num));
    
    if (correctNumbers.length === numbers.length) {
        istructions.innerText = 'Complimenti! Hai indovinato tutti i numeri!';
    } else {
        istructions.innerText = `Hai indovinato ${correctNumbers.length} numeri su ${numbers.length}. I numeri corretti erano: ${numbers.join(', ')}`;
    }

    istructions.classList.remove('d-none'); // Mostra il messaggio
    form.classList.add('d-none'); // Nasconde il form
});