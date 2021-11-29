export interface PessoaDTO {
        cpf:string;
        dataNascimento:string;
        email:string;
        idPessoa:number;
        nome:string;
}

export interface PessoasDTO {
    
        cpf:string,
        dataNascimento:string,
        email:string,
        idPessoa?:number,
        nome:string
   
}

export interface newsDTO{
        author:string,
        title:string,
        description:string,
        urlToImage:string,
        content:string
        url:string
}