class Pet {
    nome = '';
    raca = '';
    idade = 0;

    constructor (nome,raca,idade){
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }

    latirOuMiar(){
        console.log(`Oi meu nome é ${this.nome} , minha raca é ${this.raca} e eu tenho ${this.idade} aninhos`)
    }
}

let Mel = new Pet('Mel','Rotweiller',5);
Mel.latirOuMiar();