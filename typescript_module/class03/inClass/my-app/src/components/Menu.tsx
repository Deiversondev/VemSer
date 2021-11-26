import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'
import logo from '../images/logo.jpg'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Menu = () => {

    const {handleLogout, auth} = useContext<any>(AuthContext)
    return (
        <header>
            <nav>   
            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>
            <h1>Test</h1>
                <div className={styles.links}>
                <ul>
                <li><Link to="/login">Home</Link></li>
                <li><Link to="/people">Pessoa</Link></li>
                {auth && <button className={styles.logout} onClick={handleLogout}>Logout</button>}
            </ul>
                </div>
            </nav>
        </header>
    )
}

export default Menu
