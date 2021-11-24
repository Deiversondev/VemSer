import React from 'react'
import logo from '../images/logo.png'
import Menu from './Menu'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <a href="/"><img src={logo} alt="Logo" /></a>
            <Menu/>
        </div>
        
    )
}

export default Header
