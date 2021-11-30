import {
    Formik,
    Form,
    Field,
    FormikHelpers
  } from 'formik';
import styles from './Login.module.css'
import { Address } from '../model/AddressDTO';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

   
const Addresss = () => {

    const {navigate} = useContext<any>(AuthContext)


    return (
        <div>
            <h1>Endereço</h1>
        <div>
      
            <Formik
                initialValues={{
                   cep: '',
                   cidade: '',
                   complemento:'',
                   estado:'',
                   logradouro:'',
                   number:0,
                   pais:''

                }}

                onSubmit={async (values:Address, 
                {setSubmitting}: FormikHelpers<Address>
                ) => {
                
                   setSubmitting(false)
                   const {data} = await axios.get(`https://viacep.com.br/ws/${values.cep}/json/`)
                   
                   values.cep = data.cep
                   values.cidade = data.localidade
                   values.estado = data.uf
                   values.logradouro = data.logradouro
                   values.complemento = data.complemento
                     
                }}
            >
                <Form className={styles.form}>
              
                  <label htmlFor="cep">Cep</label>
                  <Field className={styles.input} id="cep" name="cep" placeholder="Digite seu Cep" />

                  <label htmlFor="cidade"> Cidade</label>
                  <Field  className={styles.input} id="cidade" name="cidade"  />
                
                  <label htmlFor="complemento"> Complemento</label>
                  <Field type="complemento" className={styles.input} id="complemento" name="complemento"  />

                  <label htmlFor="estado">Estado</label>
                  <Field  className={styles.input} id="estado" name="estado"  />

                  <label htmlFor="logradouro">Logradouro</label>
                  <Field  className={styles.input} id="logradouro" name="logradouro"  />

                  <label htmlFor="number"> Número</label>
                  <Field  className={styles.input} id="number" name="number" />

                  <label htmlFor="pais">País</label>
                  <Field  className={styles.input} id="pais" name="pais" />
               
               <div className={styles.btn}>
               <button  type="submit">Cadastrar</button>
                <button onClick={() => navigate('/people')} type="submit">Voltar</button>
               </div>
                </Form>
            </Formik>
            </div>
        </div>
    )
}

export default Addresss;