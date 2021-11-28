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
import { PessoaDTO } from '../model/PessoaDTO';
import { PessoasDTO } from '../model/PessoaDTO';
import {FaUserCircle} from 'react-icons/fa'
import {BsCalendarDate} from  'react-icons/bs'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import {TiBusinessCard} from 'react-icons/ti'

// export interface PessoasDTO {
    
//         cpf:string,
//         dataNascimento:string,
//         email:string,
//         idPessoa?:number,
//         nome:string
   
// }

   
const Create = () => {

    const {handleLogin, navigate} = useContext<any>(AuthContext);

    return (
        <div>
            <h1>Cadastrar</h1>
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
              
                  <label htmlFor="nome"><FaUserCircle/> Nome</label>
                  <Field className={styles.input} id="nome" name="nome" placeholder="Digite seu username" />

                  <label htmlFor="dataNascimento"><BsCalendarDate/> Data de Nascimento</label>
                  <Field type="date" className={styles.input} id="dataNascimento" name="dataNascimento" placeholder="Digite seu username" />
                
                  <label htmlFor="email"><MdOutlineAlternateEmail/> Email</label>
                  <Field type="email" className={styles.input} id="email" name="email" placeholder="Digite sua email" />

                  <label htmlFor="cpf"><TiBusinessCard/> CPF</label>
                  <Field className={styles.input} id="cpf" name="cpf" placeholder="Digite seu username" />
               
                <button  type="submit">Cadastrar</button>
                <button onClick={() => navigate('/')} type="submit">Cancelar</button>
                </Form>
            </Formik>
            </div>
        </div>
    )
}

export default Create;