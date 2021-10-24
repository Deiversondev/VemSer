let isFriday = prompt('Hoje é sexta-feira?');

if (isFriday === 'Sim') {
    isFriday = true;
}
else{
    isFriday = false;
}

let isTwoGreaterThanFour = false;

let isValueEmpty = prompt('Diga alguma coisa')
if ((isValueEmpty === null) || (isValueEmpty === '') || (isValueEmpty === undefined)) {
    alert('Ue, não vai dizer nada ? ')

}
else {
    alert('Obrigado!!')
}