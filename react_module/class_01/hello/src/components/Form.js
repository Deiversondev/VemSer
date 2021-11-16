import React from 'react'
import { useState } from 'react';

const Form = () => {

    function CadastraUsuario(e){
        e.preventDefault();
        console.log(nome)
    }

const [nome, setNome] = useState('Joãozinho');
const [telefone,setTelefone] = useState();
const [listUser , setListUser] = useState(['João', 'Tiago']);
    
    return (
        <>
            <h1>Meu cadastro</h1>
            <form onSubmit={CadastraUsuario}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input onChange={(e) => setNome(e.target.value)} type="text" placeholder="Digite o seu nome" />
                </div>
                <div>
                    <label htmlFor="nome">Telefone</label>
                    <input onChange={(e) => setTelefone(e.target.value)} type="text" placeholder="Digite o seu telefone" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
            <div>{nome}</div>
            <div>{telefone}</div>
            <div>{listUser.map(user => {
                <p>{user}</p>
            })}</div>
        </>
    )
}

export default Form
