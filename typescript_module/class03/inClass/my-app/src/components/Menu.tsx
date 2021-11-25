import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'
import logo from '../images/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Menu = () => {

    const {handleLogout, auth} = useContext<any>(AuthContext)
    return (
        <header>
            <nav>   
            <a href="/"><img src={logo} alt="Logo" /></a>
                <div className={styles.links}>
                <ul>
                <li><Link to="/login">Home</Link></li>
                <li><Link to="/people">Pessoa</Link></li>
                <li>{auth && <button onClick={handleLogout}>Log Out</button>}</li>
            </ul>
                </div>
            </nav>
        </header>
    )
}

export default Menu
