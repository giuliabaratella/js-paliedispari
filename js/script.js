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
    let checkArray = false;
    for (let i = 0; i < parolaArray.length; i++){
        if (parolaArray[i] !== parolaArray.reverse()[i]){
            checkArray = true;
        }
    }
    if (checkArray){
        printMsg('La parola non è palindroma.')
    } else {
        printMsg('La parola è palindroma!')
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

const btn2 = document.getElementById('button2');
const inputBox2 = document.getElementById ('data2');
const inputBoxLabel2 = document.getElementById('data-label-2');
const inputBox3 = document.getElementById ('data3');
const inputBoxLabel3 = document.getElementById('data-label-3');
const nComputerBox = document.getElementById('computer-number');
const resultBox = document.getElementById('result');
inputBoxLabel2.innerHTML= 'Scegli se pari o dispari'
inputBoxLabel3.innerHTML= 'Scegli un numero da 1 a 5'
const winnerBox = document.getElementById('winnerbox');
const gameBox = document.getElementById('game-box');
let nComputer;

btn2.addEventListener('click', function() {
    gameBox.classList.remove ('d-none');
    resetWinnerBox ();
    resetAlert2();
    let oddOrEven = inputBox2.value;

    let nPlayer = parseInt(inputBox3.value);
    console.log (nPlayer);

    // controllo se i dati inseriti dall'utente sono validi 
    let check = numberValidator();
    if (check) {

        // genero numero randomico per il computer 
        nComputer = getRndInteger(1,5);
        console.log (nComputer);
        nComputerBox.innerText = nComputer;
        let result = nPlayer + nComputer;
        // controllo se la somma è pari o dispari 
        let resultCheck = isEven(result);
        if (resultCheck){
            resultBox.innerHTML = (result +', pari')
        } else {
            resultBox.innerHTML = (result + ', dispari')
        }

        // dichiaro chi ha vinto 
        if ((resultCheck && oddOrEven === 'Even') || (!resultCheck && oddOrEven === 'Odd')){
            winnerBox.classList.remove ('d-none');
            winnerBox.innerText = 'Hai vinto!';
        } else if ((resultCheck && oddOrEven === 'Odd') || (!resultCheck && oddOrEven === 'Even')){
            winnerBox.classList.remove ('d-none');
            winnerBox.innerText = 'Hai perso :(';
        }
    } else {
        printMsg2 ('i valori inseriti non sono validi');
        gameBox.classList.add ('d-none');
    }
})

function numberValidator(){
    let oddOrEven = inputBox2.value;
    let nPlayer = parseInt(inputBox3.value);
    if (!isNaN(nPlayer) && nPlayer <= 5 && nPlayer >=1 && oddOrEven !== ''){
        return true; 
    } else {
        return false;
    }
}

function printMsg2 (message) {
    const alert2 = document.querySelector('.alert2');
    alert2.classList.remove ('d-none');
    alert2.innerText = message;
}

function isEven (n){
    return (n % 2 === 0) ? true : false;
}

function resetAlert2 (){
    const alert2 = document.querySelector ('.alert2');
    alert2.classList.add('d-none');

}
function resetWinnerBox (){
    const winnerBox = document.getElementById('winnerbox');
    winnerBox.classList.add('d-none');

}


// utility
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }