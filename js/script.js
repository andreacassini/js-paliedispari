let parola = prompt('').toLowerCase();

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