import React from 'react'
import { useContext, useEffect } from 'react';
import api from '../api';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const People = () => {

    const {setAuth} = useContext<any>(AuthContext)

    useEffect(() => {
        setAuth(true)
    },[])

    useEffect(() =>{
        (async()=>{
            const {data} = await api.get('/pessoa');
            console.log(data);
        })();
    },[])

    return (
        <div>
            <h1>Hi there people</h1>
        </div>
    )
}

export default People;