import React from 'react'
import { connect } from 'react-redux'
import {useFormik} from 'formik';
import api from '../api';
import styles from './Form.module.css'




function Create() {

    const validate = values => {
        const errors = {};
    
        if (!values.nome) {
          errors.nome = 'Nome Obrigatório';
        } else if (!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/.test(values.nome)) {
          errors.nome = 'Números ou espaços não são permitidos';
        }else if(values.nome.length > 32){
          errors.nome = 'Permitido apenas 32 caracteres';
        };
    
        // if (!values.lastName) {
        //   errors.lastName = 'Sobrenome Obrigatório';
        // } else if (!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/.test(values.lastName)) {
        //   errors.lastName = 'Números não são permitidos';
        // }
         if(values.nome.length > 32){
          errors.nome = 'Permitido apenas 32 caracteres';
        };
        if((values.cpf.length > 11) || (values.cpf.length < 11)){
            errors.cpf = 'Digite um CPF válido';
          };
        
    
        if (!values.email) {
          errors.email = 'E-mail Obrigatório';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Email Invalido';
        };
    
        // if (!values.address) {
        //   errors.address = 'Endereço Obrigatório';
        // };
    
        // if(!values.cellPhoneNumber){
        //   errors.cellPhoneNumber = 'Número Obrigatório';
        // }else if(/_/.test(values.cellPhoneNumber)){
        //   errors.cellPhoneNumber = 'Digite todos os números';
        // };
    
        return errors;
      };

    const formik = useFormik({
        initialValues: {
            nome:'',
            dataNascimento:'',
            email:'',
            cpf:''
        },validate, onSubmit: async (values) =>{
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
         
         <h1>Cadastrar</h1>
         
                    <div className={styles.form}>
                     
                        <form onSubmit={formik.handleSubmit}>
                <div >

                    <div >
                        <h4 htmlFor="nome">Nome</h4>
                        <input type="text" name="nome" id="nome" placeholder="Digite seu nome" onChange={formik.handleChange} value={formik.values.nome} />
                        {formik.errors.nome ? <p className={styles.errors}>{formik.errors.nome}</p> : null}
                       
                    </div>
                    <div >
                        <h4 htmlFor="dataNascimento">Data de Nascimento</h4>
                        <input type="text" name="dataNascimento" type="date"id="dataNascimento" placeholder="Digite seu sobrenome" onChange={formik.handleChange} value={formik.values.dataNascimento} />
                      
                    </div>
                    <div >
                        <h4 htmlFor="email">Email</h4>
                        <input type="text" name="email" id="email" placeholder="Digite seu sobrenome" onChange={formik.handleChange} value={formik.values.email} />
                        {formik.errors.email ? <p>Email Invalido</p> : null}
                      
                    </div>

                    <div >
                        <h4 htmlFor="cpf">CPF</h4>
                        <input type="text" name="cpf" id="cpf" placeholder="Digite seu sobrenome" onChange={formik.handleChange} value={formik.values.cpf} />
                        {formik.errors.cpf ? <p>Test</p> : null}
                        
                    </div>

                    <div className={styles.btn}>
                        <button  type="submit">Cadastrar</button>
                      
                    </div>
                </div>
            </form>
                    </div>
              
  
        </div>
    )
}

export default Create
