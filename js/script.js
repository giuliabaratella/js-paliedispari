// Palindroma
// Chiedere all’utente di inserire una parola,
// Creare una funzione per capire se la parola inserita è palindroma.

const btn = document.getElementById('button');
const inputBox = document.getElementById ('data');
const inputBoxLabel = document.getElementById('data-label');

inputBoxLabel.innerHTML= 'Inserisci una parola e verifica se è palindroma'

// creo un array vuoto che conterrà le lettere della parola da analizzare 
let parolaArray = [];

// creo l'evento al click del bottone 
btn.addEventListener('click', function() {

    // raccolgo la parola scritta dall'utente 
    let parola = inputBox.value ;
    console.log (parola);

    // ciclo per ogni lettera della parola scritta che inserisce una lettera nell'array
    for (let i = 0; i < parola.length; i++){
        parolaArray.push (parola[i]);
    }

    // controllo l'array e il suo reverse 
    console.log (parolaArray);
    console.log(parolaArray.reverse())


}
)



// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
// Sommiamo i due numeri,
// Stabiliamo se la somma dei due numeri è pari o dispari,
// Dichiariamo chi ha vinto.

// utility
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }