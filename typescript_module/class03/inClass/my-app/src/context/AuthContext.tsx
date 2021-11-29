import React, { useState,useEffect } from 'react'
import { createContext } from 'react'
import api from '../api'
import { useNavigate } from 'react-router'

const AuthContext = createContext({})

interface LoginDTO {
    usuario:string,
    senha:string
  }

const AuthProvider: React.FC<any> = ({children}) => {

    const [auth,setAuth] = useState<boolean>(false);
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState<any>({})
    const navigate = useNavigate()


        useEffect(() =>{
            const token = localStorage.getItem('token');
            if(token){
                api.defaults.headers.common['Authorization'] = token;
                setAuth(true)
            }
            setLoading(false)
            
        },[])

        const handleLogin = async (user:LoginDTO) =>{
            const {data} = await api.post('/auth', user)
            console.log(data)
            localStorage.setItem('token', data)
            api.defaults.headers.common['Authorization'] = data;
            navigate('/people')
            // window.location.href = '/people';
            setAuth(true);
        }

        const handleLogout = () => {
            localStorage.removeItem('token');
            api.defaults.headers.common['Authorization'] = '';
            window.location.href = '/';
            setAuth(false);
        }

     

        // if(loading){
        //     return(
        //         <h1>Test</h1>
        //     )
        // }

    return (
       <AuthContext.Provider value={{auth,handleLogin, handleLogout,setAuth,navigate, user, setUser, loading,setLoading}}>
           {children}
       </AuthContext.Provider>
    )
}

export {AuthProvider, AuthContext}

