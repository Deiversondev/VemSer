import React, { useContext } from 'react'
import {
    Formik,
    Form,
    Field,
    FormikHelpers
  } from 'formik';
import { AuthContext } from '../context/AuthContext';
import styles from './Login.module.css'

  interface LoginDTO {
    usuario:string,
    senha:string
  }

   
const Login = () => {
    const {handleLogin} = useContext<any>(AuthContext);

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
              
                  <label htmlFor="usuario">Usuario</label>
                  <Field className={styles.input} id="usuario" name="usuario" placeholder="Digite seu username" />
                
                  <label htmlFor="senha">Senha</label>
                  <Field type="password" className={styles.input} id="senha" name="senha" placeholder="Digite sua senha" />
               
                <button type="submit">Submit</button>
                </Form>
            </Formik>
            </div>
        </div>
    )
}

export default Login;