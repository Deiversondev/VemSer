let userInput = prompt('Você gosta de programar?');
if( userInput === 'SIM'){
    alert('Parabéns!');
}
else if (userInput === 'Não') {
    alert(`Acho que você não pensou bem antes de responder, já que sua resposta foi " ${userInput} "`);
}

else{
    alert('Você tem noções dos seus atos?');
}