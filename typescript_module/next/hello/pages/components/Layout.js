import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Header from './Header'


const Layout = ({children}) => {
    return (
        <div>
            <Head>
                <h1>Vem Ser DBC</h1>
            </Head>
            <Header/>
                {children}
            
        </div>
    )
}

export default Layout
