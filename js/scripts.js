/* Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.*/

// funzioni
// funzione che genera numero random
function numeroRandom(min, max) {
  var numeroCasuale = Math.floor((Math.random() * (max - min + 1)) + min);
  return numeroCasuale;
}

// funzione che verifica l'inserimento corretto dell'utente
function verificaNumero(numMin, numMax) {
  do {
    var numeroInserito = parseInt(prompt("Inserisci un numero tra " + numMin + " e " + numMax + " compresi"));
  } while (isNaN(numeroInserito) || numeroInserito > numMax || numeroInserito < numMin);
  return numeroInserito;
}

// definisco variabili globali
var arrayRandom = [];
var arrayUtente = [];
var temp;
var numeroUtente;
var n = 0;
var difficult;
var numeroMassimo;
var bombe = 16;
var bombaEsplosa = false;

// 0. chiedo all'utente la difficoltà e la imposto di conseguenza
alert("Inserisci la difficoltà. 0 = facile, 1 = medio, 2 = difficile")
difficult = verificaNumero(0, 2);
if ( difficult == 0 ) {
  numeroMassimo = 100;
} else if ( difficult == 1 ) {
  numeroMassimo = 80;
} else {
  numeroMassimo = 50;
}

// 1. genero 16 numeri random diversi
for (var i = 0; i < bombe; i++) {
  // 1a. se il numero non è già presente nell'array, lo inserisco nell'array
  do {
    temp = numeroRandom(1, numeroMassimo);
  } while ( arrayRandom.includes(temp) );
  arrayRandom.push(temp);
}
console.log(arrayRandom);

// 2. chiedo all'utente numeri finchè non inserisce un numero vietato o li inserisce tutti
do {
  // 2a. verifico che l'utente non inserisca più volte lo stesso numero (o valori non consentiti)
  numeroUtente = verificaNumero(1, numeroMassimo);
  if ( arrayUtente.includes(numeroUtente) ) {
    alert("Non fare il furbo, hai già inserito il numero "+ numeroUtente + ", riprova");
  } else if ( arrayRandom.includes(numeroUtente) ) {
    bombaEsplosa = true;
  } else {
    arrayUtente.push(numeroUtente);
    n++;
  }

} while ( !bombaEsplosa && n < (numeroMassimo - bombe) );

console.log(arrayUtente);
// 3. stampo se l'utente ha vinto o perso
if ( bombaEsplosa == false ) {
  alert("Hai vinto!");
} else {
  // alert("Hai beccato la bomba! Dopo aver inserito ben " + n + " numeri consentiti");
}

var stampaNumeri = arrayRandom.join(" - ");
var stampaUtente = arrayUtente.join(" - ");

document.getElementById('bombe').innerHTML = stampaNumeri;
document.getElementById('numeri-utente').innerHTML = stampaUtente;
document.getElementById('punteggio').innerHTML = n;
