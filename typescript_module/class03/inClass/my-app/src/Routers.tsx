import React, {useState, useEffect, useContext} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from "./pages/Login";
import People from "./pages/People";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from './context/AuthContext';
import { PessoaContext, PessoaProvider } from "./context/PessoaContext";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";
import NotFound from "./components/NotFound";
import Addresss from "./pages/Address";


const Routers = () => {

    const [isLogin, setIsLogin] = useState(false)
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        setIsLogin(true)
      }
    
    }, [])
    console.log(isLogin)

    return (
        <div>
            <BrowserRouter>
                 <AuthProvider>
                   <PessoaProvider>
                     <Header/>
                       {
                         isLogin ? (
                          <Routes>
                          <Route path="/" element={<Home/>}/>
                          <Route path="/people" element={<People/>}/>
                          <Route path="/create" element={<Create/>}/>
                          <Route path="/update" element={<Update/>}/>
                          <Route path="/address" element={<Addresss/>}/>
                          <Route path="*" element={<NotFound/>}/>
                      </Routes>
                         ) : ( <Routes>
                          <Route path="/" element={<Home/>}/>
                          <Route path="/login" element={<Login/>}/>   
                          <Route path="*" element={<NotFound/>}/>
                      </Routes>)
                       }
                        <Footer/>
                   </PessoaProvider>
                 </AuthProvider>
            </BrowserRouter>
        </div>
    )
}

export default Routers;