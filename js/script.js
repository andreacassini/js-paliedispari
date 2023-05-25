let parola = prompt('');
console.log(parola);

/* let parolaDivisa = parola.split('');
console.log(parolaDivisa);

parolaDivisa = parolaDivisa.reverse();
console.log(parolaDivisa);

parolaDivisa = parolaDivisa.join();
console.log(parolaDivisa); */

function reverseWord(str){
    let strReverse = str.split('').reverse('').join('');
    return strReverse;
}

let parolaInversa = reverseWord(parola);
console.log(parolaInversa)