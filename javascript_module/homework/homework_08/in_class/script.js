// const moment = require("moment");

const validarEmail = () => { // deve retornar um boolean (true = válido, false = inválido)
    /* 
        adicionar um eventListener para o evento "change" do input email-input que terá como ação esta função de validarEmail
        deve validar as seguintes regras:
        1 - obrigatório ter uma letra como primeiro caractér;
        2 - obrigatório possuir um '@';
        3 - obrigatório possuir pelo menos um '.' (ponto) depois do '@' e não podem estar juntos, ex: email@.ig // inválido pois o ponto está junto do arroba;
        4 - não pode terminar com '.' (ponto), ex: "email@pessoal.";
        5 - deve ter pelo menos duas letras depois de um '.' (ponto), ex: "email@pessoal.c" // inválido pois tem somente o 'c' depois do '.';

        obs: caso o email (value) que está no input for inválido deverá alterar a class da span com id="email-registration-error" para que fique somente com text-danger, sem a parte que diz 'd-none' (display: none) para que mostre a mensagem de erro
            e caso o email seja válido adicione a class d-none para que o aviso suma
    */
}


const validarSenha = () => { // deve retornar um boolean (true = válido, false = inválido)
    /* 
        adicionar um eventListener para o evento "change" do input password-input que terá como ação esta função de validarSenha
        deve validar as seguintes regras:
        2 - obrigatório ter ao menos um número;
        3 - obrigatório ter ao menos um carácter especial;
        4 - obrigatório ter ao menos 8 caractéres;
        
        // TODO: falta fazer
        1 - obrigatório ter ao menos uma letra minúscula;
        5 - a senha não pode conter espaços em branco;
        6 - obrigatório ter ao menos uma letra maiúscula;

        obs: caso a senha (value) que está no input for inválido deverá alterar a class da span com id="password-registration-error" para que fique somente com text-danger, sem a parte que diz 'd-none' (display: none) para que mostre a mensagem de erro
            e caso a senha seja válida adicione a class d-none para que o aviso suma
    */

    let ehValido = true;

    let senhaDigitada = document.getElementById('password-input-registration').value;

    let possuiOitoCaracteres = senhaDigitada.length >= 8;

    let arrayChar = [ ...senhaDigitada ]; // Ex: 'banana123' =>  ['b', 'a', 'n' ....]

    let possuiLetra = arrayChar.some( char => char.toLowerCase() !== char.toUpperCase() );

    let possuiLetraMinuscula = arrayChar.some(char => char !== char.toUpperCase());

    let possuiLetraMaiuscula = arrayChar.some(char => char !== char.toLowerCase());

    let naoPossuiEspacos = arrayChar.some(char => char === ' ');
    // é um caracter especial
    let possuiCharEspecial = arrayChar.some( char => char.toLowerCase() === char.toUpperCase() && isNaN(parseInt(char)) );

    //                                          (      aqui vemos que não é letra     )    ( aqui vemos que é número )
    let possuiNumero = arrayChar.some( char => char.toLowerCase() === char.toUpperCase() && !isNaN(parseInt(char)) );

    // TODO: adicionar regras
    

    if(!possuiOitoCaracteres) {
        ehValido = false;
        console.log('caiu aqui 8');
    }
    if(!possuiLetra) {
        ehValido = false;
        console.log('caiu aqui letra');
    }
    if(!possuiCharEspecial) {
        ehValido = false;
        console.log('caiu aqui Especial');
    }    
    if(!possuiNumero) {
        ehValido = false;
        console.log('caiu aqui numero');
    }
    if (!possuiLetraMaiuscula) {
        ehValido = false;
        console.log('caiu aqui MAIUSCULA');
    }
    if (!possuiLetraMinuscula) {
        ehValido = false;
        console.log('caiu aqui minuscula');
    }
    if (naoPossuiEspacos) {
        ehValido = false;
        console.log('caiu aqui espaço');
    }    

    if(ehValido === true){
        console.log('caiu aqui sucesso');
    }

    ehValido = possuiOitoCaracteres && possuiLetraMaiuscula && possuiLetraMinuscula && possuiCharEspecial && possuiNumero && naoPossuiEspacos;
        
    
    return ehValido;
}



const validarData = () => { // deve retornar um boolean (true = válido, false = inválido)

    

    /* 
        adicionar um eventListener para o evento "change" do input date-input que terá como ação esta função de validarSenha
        deve validar as seguintes regras:
        1 - deve ser uma data válida; +
        2 - não pode ser uma data futura;
        3 - deve ser uma data de no mínimo 18 anos atrás; (idade > 18) +

        obs: caso a data (value) que está no input for inválido deverá alterar a class da span com id="date-registration-error" para que fique somente com text-danger, sem a parte que diz 'd-none' (display: none) para que mostre a mensagem de erro
            e caso a data seja válida adicione a class d-none para que o aviso suma
    */

    let inputData = document.getElementById('date-input-registration');
    
    
    
     let test = moment();
     console.log(test);
  
    let dataDigitada = inputData.value;
    let array = [...dataDigitada]
    if(array.length === 2){
        dataDigitada + '/';
    }
   
    
    
    let dataSemBarras = dataDigitada.replaceAll('/','');
    
    let idade = moment();
    let dataConvertida = moment(dataSemBarras, 'DDMMYYYY').isValid();
    let ano = dataSemBarras.slice(4);
    let anoInt = parseInt(ano);
    if(ano > 2021){
        console.log('Data inválida');
    }

    console.log(ano);
    console.log(dataConvertida)
    // console.log(dataConvertida);
   
    let temDezoitoAnos = idade.diff(dataConvertida,'years');

    if (temDezoitoAnos >= 18) {
        console.log('Maior de idade');
    }
    else {
        console.log('Menor de idade');
    }
    













    // dia, ou seja os dois primeiros caracteres, possuem os valores de 01 até 31;
    // let dia = parseInt(dataDigitada.substr(0, 2));
    
    // dataConvertida.format('DD/M')
    // os dois primeiros

    


    // mes, ou seja os dois caracteres do meio, possuem os valores de 01 até 12;

    // ano, ou seja os últimos quatro caracteres, possuem os valores de 0001 até 2003;
}

validarData();



// const validarCadastro = () => {
//     alert( validarSenha()  ? 'válido!' : 'inválido');
// }

// `Cadastro ${validarData() && validarEmail() &&


const programa = () => {
    
}



programa();