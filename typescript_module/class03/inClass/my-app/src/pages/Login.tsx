import React, { useContext, useEffect } from 'react'
import {
    Formik,
    Form,
    Field,
    FormikHelpers
  } from 'formik';
import { AuthContext } from '../context/AuthContext';
import styles from './Login.module.css'
import {FaUserCircle} from 'react-icons/fa'
import {RiLockPasswordFill} from 'react-icons/ri'

  interface LoginDTO {
    usuario:string,
    senha:string
  }

   
const Login = () => {
    const {handleLogin,auth} = useContext<any>(AuthContext);
    useEffect(() =>{
      if(auth){
        window.location.href = '/'
      }
    },[])

    return (
        <div>
            <h1>Login</h1>
        <div>
      
            <Formik
                initialValues={{
                    usuario: '',
                    senha: ''
                }}

                onSubmit={(values:LoginDTO, 
                {setSubmitting}: FormikHelpers<LoginDTO>
                ) => {
                   
                  
                   handleLogin(values)
                   console.log(values)
                   setSubmitting(false)
                  
                }}
            >
                <Form className={styles.form}>
              
                  <label htmlFor="usuario"><FaUserCircle/> Usuario </label>
                  <Field className={styles.input} id="usuario" name="usuario" placeholder="Digite seu username" />
                
                  <label htmlFor="senha"><RiLockPasswordFill/> Senha </label>
                  <Field type="password" className={styles.input} id="senha" name="senha" placeholder="Digite sua senha" />
               
                <button type="submit">Submit</button>
                </Form>
            </Formik>
            </div>
        </div>
    )
}

export default Login;