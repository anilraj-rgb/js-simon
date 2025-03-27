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
