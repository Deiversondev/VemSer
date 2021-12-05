import api from '../api'
import { useFormik} from 'formik'
import { useState } from 'react'
import {connect} from 'react-redux'
import { handleLogin } from '../actions/AuthActions'
import {handleLogout } from '../actions/AuthActions'
import { useNavigate } from 'react-router'

function Login({auth,dispatch}) {

    const navigate = useNavigate()


    console.log(auth)
    const formik = useFormik({
        initialValues: {
            usuario:'',
            senha:''
        }, onSubmit: async (values) =>{
               
                setTimeout(() =>{
                    navigate('/people')
                },10)
                
            handleLogin(values,dispatch)
            
                formik.resetForm()
               
        }
    })

    return (
        <>
       
            <div>
            <form onSubmit={formik.handleSubmit}>
                <div ></div>
                <div >

                    <div >
                        <h4 htmlFor="usuario">Nome</h4>
                        <input type="text" name="usuario" id="usuario" placeholder="Digite seu nome" onChange={formik.handleChange} value={formik.values.usuario} />
                       
                    </div>

                    <div >
                        <h4 htmlFor="senha">Sobrenome</h4>
                        <input type="text" name="senha" id="senha" placeholder="Digite seu sobrenome" onChange={formik.handleChange} value={formik.values.senha} />
                      
                    </div>

                    <div >
                        <button  type="submit"> Login </button>
                      
                    </div>
                </div>
            </form>
                <div >
                <button onClick={() => handleLogout(auth,dispatch)}>LogOut</button>
                </div>
        </div> 
            
        </>
    );
}

const mapStateToProps = state => ({
    auth: state.AuthReducer.auth
})


export default   connect(mapStateToProps) (Login);
