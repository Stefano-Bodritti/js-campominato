/* Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.*/

// funzioni
// funzione che genere numeri random
function numeroRandom(min, max) {
  var numeroRandom = Math.floor((Math.random() * (max - min + 1)) + min);
  return numeroRandom;
}

// definisco variabili globali
var arrayRandom = [];
var arrayUtente = [];
var temp;
var numeroUtente;
var n = 0;

// 1. genero 5 numeri numeri random diversi
for (var i = 0; i < 5; i++) {
  // 1a. se il numero non è già presente nell'array, lo inserisco nell'array
  do {
    temp = numeroRandom(1, 15);
  } while ( arrayRandom.includes(temp) );
  arrayRandom.push(temp);
}

// 2. chiedo all'utente numeri finchè non inserisce un numero vietato o li inserisce tutti
do {
  // 2a. verifico che l'utente non inserisca più volte lo stesso numero
  numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e 15"));
  while ( arrayUtente.includes(numeroUtente) ) {
    numeroUtente = parseInt(prompt(" Non fare il furbo, hai già inserito il numero "+ numeroUtente + ", riprova"));
  }
  arrayUtente.push(numeroUtente);
  n++;
} while ( !arrayRandom.includes(numeroUtente) );

console.log(arrayRandom);
console.log(arrayUtente);
alert("Hai beccato la bomba! Dopo aver inserito ben " + n + " numeri");