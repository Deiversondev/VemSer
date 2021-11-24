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


const routers = () => {
    return (
        <div>
            <BrowserRouter>
               <Header/>
                <Routes>
                    <Route path="login" element={<Login/>}/>
                    <Route path="/people" element={<People/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default routers;
