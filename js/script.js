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
btn.addEventListener('click', palindromeValidator);

// rendo più leggibile il codice separando l'evento del bottone dalla funzione creata 
function palindromeValidator(){
    resetAlert();
    resetArray();

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

    // inserisco le condizioni da verificare e il messaggio da stampare 
    for (let i = 0; i < parolaArray.length; i++){
        // if (parolaArray[i] === parolaArray.reverse()[i]){
        //     printMsg('La parola è palindroma!');
        // } else {
        //     printMsg('La parola non è palindroma.');
        // }

        // prova operatore ternario 
        (parolaArray[i] === parolaArray.reverse()[i]) ? printMsg('La parola è palindroma!') : printMsg('La parola non è palindroma.');
    }
}

// mi creo una funzione per stampare nell'html 
function printMsg (message) {
    const alert = document.querySelector ('.alert');
    alert.classList.remove ('d-none');
    alert.innerText = message;
}

// mi creo una funzione per resettare l'alert
function resetAlert (){
    const alert = document.querySelector ('.alert');
    alert.classList.add('d-none');

}

// mi creo una funzione per resettare la casella di input
function resetArray(){
    parolaArray = [];
}


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