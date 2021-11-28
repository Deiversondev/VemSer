import React from "react";
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


const routers = () => {
    return (
        <div>
            <BrowserRouter>
                 <AuthProvider>
                   <PessoaProvider>
                     <Header/>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/people" element={<People/>}/>
                            <Route path="/create" element={<Create/>}/>
                            <Route path="/update" element={<Update/>}/>
                        </Routes>
                        <Footer/>
                   </PessoaProvider>
                 </AuthProvider>
            </BrowserRouter>
        </div>
    )
}

export default routers;