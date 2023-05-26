let parola = prompt('Inserire parola per verificare se è palindroma').toLowerCase();

function reverseWord(str){
    let strReverse = str.split('').reverse('').join('');
    return strReverse;
}


let parolaInversa = reverseWord(parola);

if(parola === parolaInversa){
    console.log('La parola è palindroma')
}
else{
    console.log("La parola non è palindroma")
}


//secondo problema

//DEFINISCO LA FUNZIONE CHE GENERA IL NUMERO RANDOM
function randomNumber(){
    return Math.floor(Math.random() * 6);
}

//DEFINISCO LA FUNZIONE CHE STABILISCE SE IL NUMERO (SOMMA) E' PARI O DISPARI
function checkOddEven(num){
    if(num% 2 === 0){
        return "pari";
    }

    return "dispari";
}
//PERMETTO ALL'UTENTE DI SCEGLIERE PARI O DISPARI
let choice = prompt('Inserire "pari" o "dispari');

//PERMETTO ALL'UTENTE DI INSERIRE UN NUMERO COMPRESO TRA 1 E 5
let number = parseInt(prompt('Inserire un numero compreso tra 1 e 5'));

//CONTROLLO SULLA CONFORMITA' DEL VALORE INSERITO
while(choice !== 'pari' && choice != 'dispari'){
    choice = prompt('Inserisci nuovamente la parola chiave "pari" o "dispari"');
}

//CONTROLLO DELLA CONFORMITA' DEL NUMERO INSERITO
while(isNaN(number) || number < 1 || number > 5){
    number = prompt('Inserisci nuovamente il numero');
}

//DEFINISCO UNA VARIABILE CHE CONTIENE IL NUMERO GENERATO PER IL PC
let pc_number = randomNumber();
console.log(pc_number)

//ESEGUO LA SOMMA DEI DUE NUMERI
let somma = pc_number + number;
console.log(somma)

//CHIAMO LA FUNZIONE E SALVO IL SUO RISULTATO IN UNA VARIABILE
let check_odd_even = checkOddEven(somma);

//CONTROLLLIAMO CHI HA VINTO
if(check_odd_even === choice){ //check_odd_even === true && choice === pari
    console.log('Vincitore: utente')
}
else{
    console.log('Vincitore: computer')
}