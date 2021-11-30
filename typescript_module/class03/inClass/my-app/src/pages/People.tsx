import React from 'react'
import { useContext, useEffect } from 'react';
import api from '../api';
import { AuthContext } from '../context/AuthContext';
import {PessoaContext} from '../context/PessoaContext'
import Card from '../components/Card';
import Loading from '../components/Loading';

const People = () => {
    const {list,setList,loading,setLoading} = useContext(PessoaContext)
    const {setAuth} = useContext<any>(AuthContext)

    useEffect(() => {
        setAuth(true)
    },[])
    
    useEffect(() =>{
 
        (async()=>{
            setLoading(true)
            const {data} = await api.get('/pessoa');
            setList(data)
            setLoading(false)
            console.log(list)
        })();
    },[])

    return (
        <div>

            <h1>Pessoas</h1>
            {
                loading ? <Loading/> : <Card />
            }
        </div>
    )
}

export default People;