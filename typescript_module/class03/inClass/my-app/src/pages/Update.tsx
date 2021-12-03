import React, { useContext } from 'react'
import {
    Formik,
    Form,
    Field,
    FormikHelpers,
    FormikErrors
  } from 'formik';
import { AuthContext } from '../context/AuthContext';
import styles from './Login.module.css'
import api from '../api';
import { PessoaContext } from '../context/PessoaContext';
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

   
const Update = () => {
    const {navigate} = useContext<any>(AuthContext);
    const {userEdit} = useContext(PessoaContext)

    return (
        <div>
            <h1>Editar</h1>
        <div>
      
            <Formik
                initialValues={ {
                    nome:userEdit.nome,
                    dataNascimento:userEdit.dataNascimento,
                    email:userEdit.email,
                    cpf:userEdit.cpf
                }}

                onSubmit={async (values:PessoasDTO, 
                {setSubmitting}: FormikHelpers<PessoasDTO>
                ) => {

                   
                  try{
                    await api.put(`/pessoa/${userEdit.idPessoa}`,values)
                    console.log(values)
                    setSubmitting(false)
                    setTimeout(()=>{
                     navigate('/people')
                    },1)
                  }catch(err){
                      alert('Você digitou algo errado!')
                  }
                  
                }}
            >
                <Form className={styles.form}>
              
                <label htmlFor="nome"><FaUserCircle/> Nome</label>
                  <Field className={styles.input} id="nome" name="nome" placeholder="Digite seu Nome" />

                  <label htmlFor="dataNascimento"><BsCalendarDate/> Data de Nascimento</label>
                  <Field type="date" className={styles.input} id="dataNascimento" name="dataNascimento" />
                
                  <label htmlFor="email"><MdOutlineAlternateEmail/> Email</label>
                  <Field type="email" className={styles.input} id="email" name="email"  placeholder="Digite seu Email" />
                  
                  <label htmlFor="cpf"><TiBusinessCard/> CPF</label>
                  <Field   maxLength={11}className={styles.input} id="cpf" name="cpf" placeholder="Digite seu CPF" />
               
               <div className={styles.btn}>
               <button  type="submit">Salvar</button>
                <button onClick={() => navigate('/people')} type="submit">Cancelar</button>
               </div>
                </Form>
            </Formik>
            </div>
        </div>
    )
}

export default Update;