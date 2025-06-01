import React from 'react'

const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
        <div className='navbar'>
            <div className='div-menu'>
                <label>Pizzería Mamma Mía</label>
                <button className='button-main'>🍕Home</button>
                {token ?
                    <button className='button-main'>🔓Profile</button>
                    :
                    <button className='button-main'>🔐Login</button>
                }
                {token ?
                    <button className='button-main'>🔒Logout</button>
                    :
                    <button className='button-main'>🔐Register</button>
                }

            </div>
            <div className='button-main-right'>
                <button className='button-main'>🛒Total: $ {total.toLocaleString()}</button>
            </div>
        </div>
    )
}

export default Navbar
