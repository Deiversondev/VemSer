let colaboradores = [{id:34,nome:'Deivid',codProjeto:23,marcacoesPonto:[]}];
let projetos = [{codigo:23, titulo: 'Test', colaboradoresAlocados:[]},{codigo:13, titulo: 'Test2', colaboradoresAlocados:[]}];
var id = 0;
var codigo = 0;
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

let cadastrarColaborador = (nome) => {
    nome = prompt('Digite seu nome');
    let novoColaborador = new Colaborador();
    novoColaborador.cadastraColaborador(nome);
}

let cadastrarProjeto = (titulo) =>{
    titulo = prompt('Qual é o nome do projeto?');
    let novoProjeto = new Projeto();
    novoProjeto.cadastrarProjeto(titulo);
}

let alocarColaborador = () =>{
    let employee = prompt('Nome do colaborador');
    let encontrarColaborador = colaboradores.find(colaborador => colaborador.nome === employee );
    console.log(encontrarColaborador);
    let project = parseInt(prompt('Qual o código do projeto?'));
    let encontrarProjeto = projetos.find(projeto => projeto.codigo === project )
    encontrarColaborador.codProjeto = encontrarProjeto.codigo;
    console.log(encontrarProjeto);
    encontrarProjeto.colaboradoresAlocados.push(encontrarColaborador);
}


let desalocarColaborador = () =>{
    let project = parseInt(prompt('Qual o código do projeto?'));
    let projetoEncontrado = projetos.find(projeto => projeto.codigo === project )
    console.log(projetoEncontrado)
    let employee = prompt('Nome do colaborador');
    let index = projetoEncontrado.colaboradoresAlocados.indexOf(employee)
    let colaboradorEncontrado = projetoEncontrado.colaboradoresAlocados.find(colaborador => colaborador.nome === employee );
    colaboradorEncontrado.codProjeto = 0;
    console.log(colaboradorEncontrado);
    // colaboradores.push(colaboradorEncontrado)
    projetoEncontrado.colaboradoresAlocados.splice(index,1)
    console.log(projetoEncontrado);
    
}

let marcarPonto = () => {
    let employee = prompt('Qual é o seu nome?');
    let colaborador = colaboradores.find(colaborador => colaborador.nome === employee )
    let dia = parseInt(prompt('Informe a data que deseja registrar'));
    let numHoras = parseInt(prompt('Informe o numero de horas que deseja registrar'));
    let horas = new Marcacao(dia,numHoras);
    colaborador.marcarPonto(horas);
}

let colaboradoresSemProjeto = () => {
    let employees = colaboradores.filter( employee => employee.codProjeto === 0);
    console.log(employees);
}


let projetosSemColaboradores = () =>{
    let projects = projetos.filter(project => project.colaboradoresAlocados.length === 0)
    console.log(projects);
}

let colaboradoresSemMarcacaoDePonto = () => {
    let employees = colaboradores.filter(employee => employee.marcacoesPonto.length === 0);
    console.log(employees);
}

cadastrarColaborador();
cadastrarProjeto();
colaboradoresSemMarcacaoDePonto();

// colaboradoresSemProjeto();

// projetosSemColaboradores();
// alocarColaborador();
// desalocarColaborador();
// marcarPonto();


// let projeto = new Projeto(0,'teste',[]);
// projeto.alocarColaboradores(colaborador);




























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



