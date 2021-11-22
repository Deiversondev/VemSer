import React from 'react'
import { useEffect } from 'react';
import {useRouter } from 'next/dist/client/router'

const notFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/home')
        }, 2000)
    },[])
    return (
        <div>
            <h1>Page not Found</h1>
        </div>
    )
}

export default notFound;
