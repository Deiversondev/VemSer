import React, {useState, useEffect, useContext} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import People from "./Pages/People";

const Routers = () => {
   return  (
       <div>
           <BrowserRouter>
           <Header/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/people' element={<People/>}></Route>
            </Routes>
       </BrowserRouter>
       </div>
    )

}

export default Routers