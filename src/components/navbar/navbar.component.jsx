import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/Pramodize_Logo_Symbol_Black.svg';
import {auth} from '../../firebase/firebase.utils';
import './navbar.styles.sass';


const Navbar = ({currentUser}) => (
    <div className="navbar">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>SHOP</Link>
            <Link className="option" to='/contact'>CONTACT</Link>
            {
                currentUser ?  <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>: <Link className="option" to='/signin'>SIGN IN</Link>
            }
        </div>
    </div>
)


export default Navbar;