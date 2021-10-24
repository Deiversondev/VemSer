let T1 = parseFloat(prompt('Qual foi a sua primeira nota?'));
let T2 = parseFloat(prompt('Qual foi a sua segunda nota?'));
let P1 = parseFloat(prompt('Qual foi a sua terceira nota?'));

if ((typeof T1 === 'number' && T1.toString() !== 'NaN') && (typeof T2 === 'number' && T2.toString() !== 'NaN') && (typeof P1 === 'number' && P1.toString() !== 'NaN')) {
    let media = T1 + T2 + P1;
    let mediaFinal = media / 3;
    console.log(mediaFinal)


    if (mediaFinal < 5) {
        alert('Você foi reprovado!')
    } else if (mediaFinal >= 5 && mediaFinal <= 7) {
        alert('Você está na recuperação');
    } else {
        alert('Parabéns! Você foi aprovado! ')
    }
} else {
    {
        alert('Insira números válidos');
    }
}