let colaboradores = [];
let projetos = [];
let id = 0;
let codigo = 0;

class Marcacao {
    dia = 0;
    horas = 0;

    constructor(dia,horas){
        this.dia = dia;
        this.horas = horas;
    }
    
}

class Colaborador {
    id = 0;
    nome = '';
    codProjeto = 0;
    marcacoesPonto = [];

    constructor(nome,codProjeto,marcacoesPonto) {
        this.id = id ++;
        this.nome = nome;
        this.codProjeto = codProjeto ? codProjeto : this.codProjeto;
        this.marcacoesPonto = marcacoesPonto ? marcacoesPonto : this.marcacoesPonto;
    }

    cadastraColaborador(nome){ 
        let colaborador = new Colaborador(nome);
        
        colaboradores.push(colaborador);
        console.log(colaborador);
    }

    marcarPonto(marcacao){
       this.marcacoesPonto.push(marcacao);
       return this.marcacoesPonto;
    }

}

class Projeto {
    codigo = 0;
    titulo = '';
    colaboradoresAlocados = [];

    constructor(titulo,colaboradoresAlocados){
        this.codigo = codigo++;
        this.titulo = titulo;
        this.colaboradoresAlocados = colaboradoresAlocados ? colaboradoresAlocados : this.colaboradoresAlocados;
    }

    cadastrarProjeto(titulo){
        let projeto = new Projeto(titulo);
        projetos.push(projeto);
        console.log(projeto);
    }

    alocarColaboradores(colaborador){
        this.colaboradoresAlocados.push(colaborador);
        return this.colaboradoresAlocados;
    }
} 

class Validacoes {
    isNotANumber(number){
        if(isNaN(number)){
            alert('Você precisa digitar números válidos!');
        }
    }
    notFound(index){
        if(index === -1 || index === undefined){
            alert('Esse colaborador não está alocado neste projeto');
        }
    }
}

let option = prompt('Bem vindo ao sistema de projetos e alocações! Escolha a ação que deseja \n 1 - Cadastrar colaborador \n 2 - Cadastrar projeto \n 3 - Alocar colaborador \n 4 - Desalocar colaborador \n 5 - Marcar ponto \n 6 - Lista de colaboradores sem projeto \n 7 - Lista de projetos sem colaboradores \n 8 - Lista de colaboradores que ainda não marcaram o ponto \n 9 - Fechar sistema');

while(option !== '9'){

if(option === '1'){
    let cadastrarColaborador = (nome) => {
        nome = prompt('Digite seu nome');
        let novoColaborador = new Colaborador();
        novoColaborador.cadastraColaborador(nome);
    }
    cadastrarColaborador();
}

else if(option === '2'){
    let cadastrarProjeto = (titulo) =>{
        titulo = prompt('Qual é o nome do projeto?');
        let novoProjeto = new Projeto();
        novoProjeto.cadastrarProjeto(titulo);
    }
    cadastrarProjeto();
}

else if(option === '3'){
    let alocarColaborador = () =>{
        let employee = prompt('Nome do colaborador');
        let encontrarColaborador = colaboradores.find(colaborador => colaborador.nome === employee );
        console.log(encontrarColaborador);
        let project = parseInt(prompt('Qual o código do projeto?'));
        if(new Validacoes().isNotANumber(project));
        else{
            let encontrarProjeto = projetos.find(projeto => projeto.codigo === project );
            encontrarColaborador.codProjeto = encontrarProjeto.codigo;
            console.log(encontrarProjeto);
            encontrarProjeto.colaboradoresAlocados.push(encontrarColaborador);
        }
        
    }
    alocarColaborador();
}

else if(option === '4'){
    let desalocarColaborador = () =>{
        let project = parseInt(prompt('Qual o código do projeto?'));
        if(new Validacoes().isNotANumber(project));
        else {
            let projetoEncontrado = projetos.find(projeto => projeto.codigo === project );
            console.log(projetoEncontrado);
            let employee = prompt('Nome do colaborador');
            let index = projetoEncontrado.colaboradoresAlocados.indexOf(employee);
            if (new Validacoes().notFound(index)) ;
            else{
                let colaboradorEncontrado = projetoEncontrado.colaboradoresAlocados.find(colaborador => colaborador.nome === employee );
                colaboradorEncontrado.codProjeto = 0;
                console.log(colaboradorEncontrado);
                // colaboradores.push(colaboradorEncontrado)
                projetoEncontrado.colaboradoresAlocados.splice(index,1);
                console.log(projetoEncontrado);
            }
            
        }
        
    }
    desalocarColaborador();
}


else if (option === '5') {
    let marcarPonto = () => {
        let employee = prompt('Qual é o seu nome?');
        let colaborador = colaboradores.find(colaborador => colaborador.nome === employee );
        
        let dia = parseInt(prompt('Informe a data que deseja registrar'));
        let numHoras = parseInt(prompt('Informe o numero de horas que deseja registrar'));
        if(new Validacoes().isNotANumber(dia) || new Validacoes().isNotANumber(numHoras));
        else {
            let horas = new Marcacao(dia,numHoras);
            colaborador.marcarPonto(horas);
        }
        
    }
    marcarPonto();
}


else if (option === '6'){
    let colaboradoresSemProjeto = () => {
        let employees = colaboradores.filter( employee => employee.codProjeto === 0);
        console.log(employees);
    }
    colaboradoresSemProjeto();
}


else if (option === '7'){
    let projetosSemColaboradores = () =>{
        let projects = projetos.filter(project => project.colaboradoresAlocados.length === 0);
        console.log(projects);
    }
    projetosSemColaboradores();
}

else if (option === '8'){
    let colaboradoresSemMarcacaoDePonto = () => {
        let employees = colaboradores.filter(employee => employee.marcacoesPonto.length === 0);
        console.log(employees);
    }
    colaboradoresSemMarcacaoDePonto();
}
option = prompt('O que mais deseja fazer? \n 1 - Cadastrar colaborador \n 2 - Cadastrar projeto \n 3 - Alocar colaborador \n 4 - Desalocar colaborador \n 5 - Marcar ponto \n 6 - Lista de colaboradores sem projeto \n 7 - Lista de projetos sem colaboradores \n 8 - Lista de colaboradores que ainda não marcaram o ponto \n 9 - Fechar sistema');
}

console.log('Sistema encerrado');




























// let cadastraColaborador = (id,nome,codProjeto) =>{
//     id = Math.floor(Math.random() * 40);
//     nome = prompt('What is your name?');
//     codProjeto = prompt('Your project ')
//     let colaborador = new Colaborador(id,nome,codProjeto);
//     console.log(colaborador);
// }


// let cadastrarProjetos = (codigo,titulo,colaboradoresAlocados) =>{
//     codigo = prompt('cod');
//     titulo = prompt('yeyeyeyy')
//     colaboradoresAlocados = [];
//     let project = new Projeto(codigo,titulo,colaboradoresAlocados);
//     console.log(project);
// }



// cadastrarProjetos()
// cadastraColaborador();



