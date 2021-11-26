import React from 'react'
import { useContext, useEffect, useState } from 'react';
import api from '../api';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { PessoaDTO } from '../model/PessoaDTO';
import {PessoaContext} from '../context/PessoaContext'
import Card from '../components/Card';

const People = () => {
    const {list,setList} = useContext(PessoaContext)
    // const [list,setList] = useState<PessoaDTO['pessoas']>([]);

    const {setAuth} = useContext<any>(AuthContext)

    useEffect(() => {
        setAuth(true)
    },[])

    useEffect(() =>{
        (async()=>{
            const {data} = await api.get('/pessoa');
            console.log(data);
            setList(data)
            console.log(list)
        })();
    },[])

    return (
        <div>
            <Card />
        </div>
    )
}

export default People;