import React from 'react'
import { connect } from 'react-redux'
import {useFormik} from 'formik';
import api from '../api';




function Create() {

    const formik = useFormik({
        initialValues: {
            nome:'',
            dataNascimento:'',
            email:'',
            cpf:''
        }, onSubmit: async (values) =>{
            await api.post('pessoa', values)
            // values.nome = ''
            // values.dataNascimento = ''
            // values.email = ''
            // values.cpf = ''
                formik.resetForm()
               
        }
    })

    return (
   
        <div>
         
         
                    <div>
                     
                        <form onSubmit={formik.handleSubmit}>
                <div ></div>
                <div >

                    <div >
                        <h4 htmlFor="nome">Nome</h4>
                        <input type="text" name="nome" id="nome" placeholder="Digite seu nome" onChange={formik.handleChange} value={formik.values.nome} />
                       
                    </div>
                    <div >
                        <h4 htmlFor="dataNascimento">Data de Nascimento</h4>
                        <input type="text" name="dataNascimento" type="date"id="dataNascimento" placeholder="Digite seu sobrenome" onChange={formik.handleChange} value={formik.values.dataNascimento} />
                      
                    </div>
                    <div >
                        <h4 htmlFor="email">Email</h4>
                        <input type="text" name="email" id="email" placeholder="Digite seu sobrenome" onChange={formik.handleChange} value={formik.values.email} />
                      
                    </div>

                    <div >
                        <h4 htmlFor="cpf">CPF</h4>
                        <input type="text" name="cpf" id="cpf" placeholder="Digite seu sobrenome" onChange={formik.handleChange} value={formik.values.cpf} />
                      
                    </div>

                    <div >
                        <button  type="submit"> Login </button>
                      
                    </div>
                </div>
            </form>
                    </div>
              
  
        </div>
    )
}

export default Create
