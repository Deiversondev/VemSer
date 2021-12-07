import React from 'react'
import {useFormik} from 'formik';
import api from '../api';
import styles from './Form.module.css'
import axios from 'axios';




function Create() {

    const formik = useFormik({
        initialValues: {
            cep: '',
            cidade: '',
            complemento:'',
            estado:'',
            logradouro:'',
            number:0,
            pais:''
        }, onSubmit: async (values) =>{
            const {data} = await axios.get(`https://viacep.com.br/ws/${values.cep}/json/`)
                   
                   values.cep = data.cep
                   values.cidade = data.localidade
                   values.estado = data.uf
                   values.logradouro = data.logradouro
                   values.complemento = data.complemento
           
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
                        <h4 htmlFor="cep">CEP</h4>
                        <input type="text" name="cep" id="cep" placeholder="Digite seu cep" onChange={formik.handleChange} value={formik.values.cep} />
                        
                       
                    </div>
                    <div >
                        <h4 htmlFor="cidade">Data de Nascimento</h4>
                        <input type="text" name="cidade" type="text"id="cidade"  onChange={formik.handleChange} value={formik.values.cidade} />
                      
                    </div>
                    <div >
                        <h4 htmlFor="estado">Email</h4>
                        <input type="text" name="estado" id="estado" placeholder="Digite seu estado" onChange={formik.handleChange} value={formik.values.estado} />
                        
                      
                    </div>

                    <div >
                        <h4 htmlFor="logradouro">CPF</h4>
                        <input type="text" name="logradouro" id="logradouro" placeholder="Digite seu CPF" onChange={formik.handleChange} value={formik.values.logradouro} />
                        
                        
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
