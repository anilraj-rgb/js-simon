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