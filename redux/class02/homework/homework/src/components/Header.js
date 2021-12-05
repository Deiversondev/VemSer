import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/people'>Pessoas</Link></li>
                    <li><Link to='/form'>Form</Link></li>
                    <li><Link to='/create'>Form2</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
