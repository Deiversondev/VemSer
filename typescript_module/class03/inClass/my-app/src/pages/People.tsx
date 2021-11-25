import React from 'react'
import { useContext, useEffect } from 'react';
// import api from '../api';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const People = () => {

    const {auth,setAuth} = useContext<any>(AuthContext)

    useEffect(() => {
        setAuth(true)
    },[])

    useEffect(() =>{
        (async()=>{
            const response = await axios.get('https://my-application-teste.herokuapp.com/pessoa');
            console.log(response.data);
        })();
    },[])

    return (
        <div>
            <h1>Hi there people</h1>
        </div>
    )
}

export default People;
