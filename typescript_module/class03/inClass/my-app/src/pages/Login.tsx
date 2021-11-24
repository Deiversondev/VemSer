import React, { useContext } from 'react'
import {
    Formik,
    Form,
    Field,
    FormikHelpers
  } from 'formik';
import { AuthContext } from '../context/AuthContext';

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
      <h1>My Example</h1>
            <Formik
                initialValues={{
                    usuario: '',
                    senha: ''
                }}

                onSubmit={(values:LoginDTO, 
                {setSubmitting}: FormikHelpers<LoginDTO>
                ) => {
                   setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                   handleLogin()
                   setSubmitting(false)
                   },1000)
                }}
            >
                <Form>
                <label htmlFor="usuario">Usuario</label>
                <Field id="usuario" name="usuario" placeholder="First Name" />
                <label htmlFor="senha">Senha</label>
                <Field id="senha" name="senha" placeholder="senha" />
                <button type="submit">Submit</button>
                </Form>
            </Formik>
            </div>
        </div>
    )
}

export default Login;