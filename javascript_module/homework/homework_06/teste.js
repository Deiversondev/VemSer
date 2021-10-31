class Marcacao {
    dia = 0;
    hora = 0;

    constructor(dia,hora){
        this.dia = dia;
        this.hora = hora;
    }
    
}

class Colaborador {
    id = 0;
    nome = '';
    codProjeto = 45;
    marcacoesPonto = [];

    constructor(id,nome,codProjeto,marcacoesPonto) {
        this.id = id;
        this.nome = nome;
        this.codProjeto = codProjeto;
        this.marcacoesPonto = marcacoesPonto;
    }

    cadastraColaborador(id,nome,codProjeto){ 
       let colaborador = new Colaborador(id, nome,codProjeto);
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

    constructor(codigo,titulo,colaboradoresAlocados){
        this.codigo = codigo;
        this.titulo = titulo;
        this.colaboradoresAlocados = colaboradoresAlocados;
    }

    alocarColaboradores(colaborador){
        this.colaboradoresAlocados.push(colaborador);
        return this.colaboradoresAlocados;
    }
} 

// let colaborador = new Colaborador();
// colaborador.cadastraColaborador()

let criarColaborador = () =>{
    let id = Math.floor(Math.random() * 40);
    let name = prompt('Your name');
    let codProjeto = 0;
    let colaborador = new Colaborador();
    colaborador.cadastraColaborador(id,name,codProjeto);
    console.log(colaborador);
}
criarColaborador();