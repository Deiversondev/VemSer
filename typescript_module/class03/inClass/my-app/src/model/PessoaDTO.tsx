export interface PessoaDTO {
    pessoas: {
        cpf:string,
        dataNascimento:string,
        email:string,
        idPessoa:number,
        nome:string,
    }[]
}

export interface PessoasDTO {
    pessoas: {
        cpf:string,
        dataNascimento:string,
        email:string,
        idPessoa:number,
        nome:string,
    }
}