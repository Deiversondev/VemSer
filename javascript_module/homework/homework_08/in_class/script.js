//#region Validação Email
const validarEmail = () => {
    let emailDigitado = document.getElementById('email-input-registration').value;
    let listaCaracteres = emailDigitado.split(''); // [...emailDigitado]

    let emailSplit = emailDigitado.split('@');
    
    let possuiArroba = emailSplit.length > 1;

    let dominioEmail = possuiArroba ? emailSplit[1] : '';
    let dominioEmailSplit = dominioEmail.split('.');

    let possuiPontosNoDominio = dominioEmailSplit.length > 1;

    let possuiCaracteresEntrePontos = dominioEmailSplit.every( d => d.length > 1 );

    let comecaComLetra = listaCaracteres.length ? listaCaracteres[0].toUpperCase() !== listaCaracteres[0].toLowerCase() : false;

    let ehValido = possuiArroba && possuiPontosNoDominio && possuiCaracteresEntrePontos && comecaComLetra;

    // para setar o texto de erro em vermelho
    let erroEmail = document.getElementById('email-registration-error');
    erroEmail.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

    return ehValido;
}
//#endregion Validação Email

//#region Validação Senha
const validarSenha = () => {
    let senhaDigitada = document.getElementById('password-input-registration').value;
    let listaCaracteres = senhaDigitada.split('');

    let letras = listaCaracteres.filter( char => char.toLowerCase() !== char.toUpperCase() );

    let possuiLetraMaiuscula = letras.some( l => l.toUpperCase() === l ); // "A".toUppercase() === "A"
    let possuiLetraMinuscula = letras.some( l => l.toLowerCase() === l );

    let possuiCharEspecial = listaCaracteres.some( char => char.toLowerCase() === char.toUpperCase() && isNaN(parseInt(char)) );
    let possuiNumero = listaCaracteres.some( char => char.toLowerCase() === char.toUpperCase() && !isNaN(parseInt(char)) );

    let possuiOitoCaracteres = senhaDigitada.length >= 8;

    let naoPossuiEspacos = !senhaDigitada.includes(' ');

    let ehValido = possuiOitoCaracteres && possuiLetraMaiuscula && possuiLetraMinuscula && 
        possuiCharEspecial && possuiNumero && naoPossuiEspacos;

    // para setar o texto de erro em vermelho
    let erroSenha = document.getElementById('password-registration-error');
    erroSenha.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

    return ehValido;
}
//#endregion Validação Senha

//#region Validação Data
const validarData = () => { 
    let inputData = document.getElementById('date-input-registration');
    let dataDigitada = inputData.value;

    adicionarMascaraData(inputData, dataDigitada);

    let dataConvertida = moment(dataDigitada, 'DDMMYYYY');

    let dezoitoAnosAtras = moment().diff(dataConvertida, 'years') >= 18;

    // comparações de data - date1.isBefore(date2)  /  date1.isAfter(date2)  /  date1.isSameOrBefore(date2)  /  date1.isSameOrAfter(date2)
    let dataAnteriorHoje = dataConvertida.isBefore(moment());

    let ehValido = dataConvertida.isValid() && dataAnteriorHoje && dezoitoAnosAtras && dataDigitada.length === 10; // 10/05/2001

    // para setar o texto de erro em vermelho
    let erroData = document.getElementById('date-registration-error');
    erroData.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

    return ehValido;
}

const adicionarMascaraData = (input, data) => {
    let listaCaracteres = [...data];
    // [ '1', '0', '0', '5' ]
    
    if(listaCaracteres && listaCaracteres.length) {
        let dataDigitada = listaCaracteres.filter(c => !isNaN(parseInt(c))).reduce((a, b) => a + b);
        // 10052
        const { length } = dataDigitada;

        switch(length) { 
            case 0: case 1: case 2:
                input.value = dataDigitada; 
                break;
            case 3: case 4:
                input.value = `${dataDigitada.substr(0, 2)}/${dataDigitada.substr(2, 2)}`; // 10/05
                break;
            default:
                input.value = `${dataDigitada.substr(0, 2)}/${dataDigitada.substr(2, 2)}/${dataDigitada.substr(4, 4)}`;
        }
    }
}
//#endregion Validação Data


const resetarCampos = (...campos) => {
    campos.forEach(c => c.value = '');
}

const irPara = (origem, destino) => {
    let elementoOrigem = document.getElementById(origem);
    let elementoDestino = document.getElementById(destino);
    elementoDestino.className = elementoDestino.className.replace('d-none', 'd-flex');
    elementoOrigem.className = elementoOrigem.className.replace('d-flex', 'd-none');
}

const irParaEdicao = (event) =>{
    let elementoOrigem = document.getElementById('home');
    let elementoDestino = document.getElementById('edit');
    elementoOrigem.className = elementoOrigem.className.replace('d-flex', 'd-none');
    elementoDestino.className = elementoDestino.className.replace('d-none', 'd-flex');

    let id = event.target.id;
    console.log(id)
    let nomeInput =  document.getElementById('nome-input-edit');
    let dataInput = document.getElementById('date-input-edit');
    let emailInput = document.getElementById('email-input-edit');
    let senhaInput = document.getElementById('password-input-edit');

    axios.get(`http://localhost:3000/colaboradores/${id}`)
    .then((response) => {
    let responseData = response.data;
    nomeInput.value = responseData.nome;
    dataInput.value = responseData.dataNascimento;
    emailInput.value = responseData.email;
    senhaInput.value = responseData.senha;
    })
}

const voltarDeEdicaoParaHome = () => {
    let elementoOrigem = document.getElementById('edit');
    let elementoDestino = document.getElementById('home');
    elementoOrigem.className = elementoOrigem.className.replace('d-flex', 'd-none');
    elementoDestino.className = elementoDestino.className.replace('d-none', 'd-flex');
}

const validarLogin = () => {
    axios.get('http://localhost:3000/colaboradores')
        .then(response => {
            let emailDigitado = document.getElementById('email-input-login').value;
            let senhaDigitada = document.getElementById('password-input-login').value;
            
            let podeLogar = response.data.some(c => c.email === emailDigitado && c.senha === senhaDigitada);

            if(podeLogar) {
                irPara('login', 'home');
            }
        })
        .catch(error => console.error(error));
}



    const listarUsuarios = () =>{
   

        // let query = document.querySelector('#query').value;
        axios.get('http://localhost:3000/colaboradores')
        .then((response) => {
            let responseData = response.data;
            responseData.forEach(user => {
                console.log(user)
                let liUser = document.createElement('li');
                let editBtn = document.createElement('button');
                // editBtn.type = 'su';
                editBtn.innerText = 'Editar';
                // liUser.setAttribute('id','li')
                editBtn.setAttribute('id',user.id)
                let deleteBtn = document.createElement('input')
                deleteBtn.type = 'button';
                deleteBtn.value = 'Excluir';
                let userList = document.querySelector('#user-list');
                liUser.innerText = user.nome;
                liUser.append(editBtn);
                liUser.append(deleteBtn);
                userList.append(liUser);
                editBtn.onclick = addEventListener('click',irParaEdicao);
            })
        })
            
            
    };

    
    // let editPage = document.querySelector('#edit');
    //         editPage.onclick = editarColaborador();
      


    const listarUsuariosPorNome = () => {
    
        let query = document.querySelector('#query').value;
        axios.get('http://localhost:3000/colaboradores').then((response) => {
            let responseData = response.data;
            console.log(responseData);
            let userFound = responseData.find(user => user.nome === query);
            console.log(userFound)
            let liUser = document.createElement('li');
            let editBtn = document.createElement('input');
            editBtn.type = 'button';
            editBtn.value = 'Editar';
            
            let deleteBtn = document.createElement('input')
            deleteBtn.type = 'button';
            deleteBtn.value = 'Excluir';
            let userList = document.querySelector('#user-list');
            liUser.innerText = userFound.nome;
            liUser.append(editBtn);
            liUser.append(deleteBtn);
            userList.append(liUser);

        })
        
        
    }



const validarCadastro = () => {
    let cadastroValido = validarData() && validarEmail() && validarSenha();
    console.log(`Cadastro ${cadastroValido ? 'válido!' : 'inválido'}`);

    if(cadastroValido) {
        cadastrarUsuario();
    }
}

const cadastrarUsuario = () => {
    let nomeInput =  document.getElementById('nome-input-registration');
    let dataInput = document.getElementById('date-input-registration');
    let emailInput = document.getElementById('email-input-registration');
    let senhaInput = document.getElementById('password-input-registration');

    // aqui entra lógica de POST para salvar usuário

    let colaborador = { 
        nome : nomeInput.value,
        email: emailInput.value,
        senha: senhaInput.value,
        dataNascimento: dataInput.value 
    }

    axios.post('http://localhost:3000/colaboradores', colaborador)
    .then((response) => {
        console.log('Colaborador cadastrado => ', response.data);
        resetarCampos(nomeInput,dataInput, emailInput, senhaInput);
        irPara('registration', 'login');
    })
    .catch((error) => {
        console.log('Erro => ', error);
    });
    
    };

    // Endpoint
    

        
// const listarUsuarios = () => {
//     axios.get('http://localhost:3000/colaboradores', colaborador)
//     let listaDeColaboradores = colaborador.email;
//     console.log(listaDeColaboradores);
// };



