import { createContext, useState } from "react";
import api from "../api";
const Context = createContext();

function AuthProvider({children}){
    const [authenticated, setAuthenticated] = useState(false);

    async function handleLogin(){
        const {data: token} = await api.post('/authenticate');
        localStorage.setItem('token', JSON.stringify(token))
        console.log(token)
    }

    return (
        <Context.Provider value={{authenticated, handleLogin}}>
            {children}
        </Context.Provider>
    )
}

export {Context , AuthProvider};