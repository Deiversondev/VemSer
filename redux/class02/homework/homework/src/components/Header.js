import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { handleLogout } from '../actions/AuthActions';
import styles from './Header.module.css'
function Header({auth,dispatch}) {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    {/* {auth.auth && <li><Link to='/people'>Pessoas</Link></li>}
                    {auth.auth && <li><Link to='/create'>Form2</Link></li>}
                    {auth.auth && <button onClick={() => handleLogout(auth,dispatch)}>LogOut</button> } */}
                     {
                         auth.auth && (
                             <>
                             <li><Link to='/people'>Pessoas</Link></li>
                             <li><Link to='/create'>Cadastrar</Link></li>
                            <button onClick={() => handleLogout(auth,dispatch)}>LogOut</button> 
                              </>
                         )
                     }
                </ul>
            </nav>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.AuthReducer.auth
})


export default   connect(mapStateToProps)(Header);
