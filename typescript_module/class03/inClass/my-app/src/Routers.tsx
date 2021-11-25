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


const routers = () => {
    return (
        <div>
            <BrowserRouter>
                 <AuthProvider>
                    <Header/>
                        <Routes>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/people" element={<People/>}/>
                        </Routes>
                        <Footer/>
                 </AuthProvider>
            </BrowserRouter>
        </div>
    )
}

export default routers;