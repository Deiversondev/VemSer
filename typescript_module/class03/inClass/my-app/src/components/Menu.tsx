import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'
import logo from '../images/logo.png'

const Menu = () => {
    return (
        <header>
            <nav>   
            <a href="/"><img src={logo} alt="Logo" /></a>
                <div className={styles.links}>
                    <ul>
                        <li><Link to="/login">Home</Link></li>
                        <li><Link to="/people">People</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Menu
