/*
    +===============================================================+
    |                SISTEMA DE PROJETOS E ALOCACOES                |
    +===============================================================+

    Nesse nosso sistema teremos os seguintes modelos de Entidade/Objeto/Classe ("sinônimos"):

    Marcacao {
        dia; (só um number mesmo, ex: 22 )
        horas; (também só um number, ex: 9)
    }

    Colaborador {
        id (unique number);
        nome;
        ?codProjeto;
        marcacoesPonto; (um array de marcação de horas, ex: [ { dia: 22, horas: 9 } ]);
        

        marcarPonto( d, h );
    };

    Projeto {
        codigo (unique number),
        titulo,
        ?colaboradoresAlocados = [],
    };

    Crie também uma classe de 'Validacoes' que terá métodos úteis de validação para usar em várias partes do sistema;
    Ex: Validacoes { 
        validaAlgo() {
            return ehValido;
        }
    }

    Para utilizar essas validações, 
    Ex: var mensagem;
    if(new Validacoes().validaAlgo(mensagem)) {
        // só pra exemplificar como utilizar
    }


    Vamos criar um sistema da seguinte forma;
    Deve ser apresentado para o usuário um "menu" para ele escolher uma ação a ser realizada;


    As opções serão:

    1 - Cadastrar Colaborador; O
    2 - Cadastrar Projeto; O
    3 - Alocar Colaborador; (à algum projeto) O
    4 - Desalocar Colaborador; O
    5 - Marcar Ponto; O
    6 - Ver Lista de Colaboradores Sem Projeto; O
    7 - Ver Lista de Projetos Sem Colaboradores; O
    8 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto;O
    9 - Encerrar Execução do Sistema;
*/