import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/login">Home</Link></li>
                    <li><Link to="/people">People</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu
