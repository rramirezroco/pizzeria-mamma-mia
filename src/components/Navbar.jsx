import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { PizzaContext } from '../context/PizzaContext';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
    const { total } = useContext(PizzaContext);
    const { token, logout } = useContext(UserContext);


    return (
        <nav className='navbar'>
            <div className='div-menu'>
                <label>Pizzería Mamma Mía</label>
                <Link to="/" className='button-main'>🍕Home</Link>
                {token ?
                    <Link to="/profile" className='button-main'>🔓Profile</Link>
                    :
                    <Link to="/login" className='button-main'>🔐Login</Link>
                }
                {token ?
                    <Link to="/" className='button-main' onClick={() => logout()}>🔒Logout</Link>
                    :
                    <Link to="/register" className='button-main'>🔐Register</Link>
                }

            </div>
            <div className='button-main-right'>
                <Link to="/cart" className='button-main'>🛒Total: $ {total().toLocaleString()}</Link>
            </div>
        </nav>
    )
}

export default Navbar
