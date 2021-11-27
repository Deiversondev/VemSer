import React, { useContext } from 'react'
import {
    Formik,
    Form,
    Field,
    FormikHelpers
  } from 'formik';
import { AuthContext } from '../context/AuthContext';
import styles from './Login.module.css'
import api from '../api';

export interface PessoasDTO {
    
        cpf:string,
        dataNascimento:string,
        email:string,
        idPessoa?:number,
        nome:string
   
}

   
const Create = () => {
    const {handleLogin, navigate} = useContext<any>(AuthContext);

    async function getList(){

    }
    return (
        <div>
            <h1>Login</h1>
        <div>
      
            <Formik
                initialValues={{
                    nome:'',
                    dataNascimento:'',
                    email:'',
                    cpf:''
                }}

                onSubmit={async (values:PessoasDTO, 
                {setSubmitting}: FormikHelpers<PessoasDTO>
                ) => {
                   await api.post('/pessoa',values)
                   console.log(values)
                   setSubmitting(false)
                   setTimeout(()=>{
                    navigate('/')
                   },500)
                  
                }}
            >
                <Form className={styles.form}>
              
                  <label htmlFor="nome">Usuario</label>
                  <Field className={styles.input} id="nome" name="nome" placeholder="Digite seu username" />

                  <label htmlFor="dataNascimento">Data de Nascimento</label>
                  <Field className={styles.input} id="dataNascimento" name="dataNascimento" placeholder="Digite seu username" />
                
                  <label htmlFor="email">Senha</label>
                  <Field type="email" className={styles.input} id="email" name="email" placeholder="Digite sua email" />

                  <label htmlFor="cpf">Usuario</label>
                  <Field className={styles.input} id="cpf" name="cpf" placeholder="Digite seu username" />
               
                <button  type="submit">Submit</button>
                </Form>
            </Formik>
            </div>
        </div>
    )
}

export default Create;