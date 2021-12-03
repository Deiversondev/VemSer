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
                    try{
                        await api.post('/pessoa',values)
                        console.log(values)
                        setSubmitting(false)
                        console.log(values.dataNascimento)
                       values.nome = ''
                       values.dataNascimento = ''
                       values.email = ''
                       values.cpf = ''
                       let keepOnThePage = window.confirm('Você gostaria de fazer outro cadastro?')
                       setTimeout(() =>{
                         if (!keepOnThePage) {
                             window.location.href = '/'  
                           }
                       },10)
                    } catch(error){
                        alert('Algum dado dos dados digitados não está correto! Corrija o erro e tente novamente')
                    }
                }}
            >
                <Form className={styles.form}>
              
                  <label htmlFor="nome"><FaUserCircle/> Nome</label>
                  <Field className={styles.input} id="nome" name="nome" placeholder="Digite seu Nome" />

                  <label htmlFor="dataNascimento"><BsCalendarDate/> Data de Nascimento</label>
                  <Field type="date" className={styles.input} id="dataNascimento" name="dataNascimento" />
                
                  <label htmlFor="email"><MdOutlineAlternateEmail/> Email</label>
                  <Field type="email" className={styles.input} id="email" name="email" placeholder="Digite seu Email" />

                  <label htmlFor="cpf"><TiBusinessCard/> CPF</label>
                  <Field maxLength={11} className={styles.input} id="cpf" name="cpf" placeholder="Digite seu CPF" />
               
               <div className={styles.btn}>
               <button  type="submit">Cadastrar</button>
                <button onClick={() => navigate('/')} type="submit">Voltar</button>
               </div>
                </Form>
            </Formik>
            </div>
        </div>
    )
}

export default Create;