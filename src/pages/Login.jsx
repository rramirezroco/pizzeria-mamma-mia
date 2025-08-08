import React, { useContext } from 'react'
import { useState } from 'react'
import { UserContext } from '../context/UserContext'

const Login = () => {
    const { login, email, password, setEmail, setPassword, user, msgError } = useContext(UserContext);
    function verificaDatos(e) {
        e.preventDefault();

        login()
    }

    return (

        <div className='div-formulario-register p-5'>


            <h2 className='text-center'>Login</h2>
            <form className='formulario-column' onSubmit={verificaDatos}>
                <label>Email</label>
                <input type='email' value={email} placeholder='Ingrese Email' onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type='password' value={password} placeholder='Ingrese Password' onInput={(e) => setPassword(e.target.value)} />
                <button className='button-main mt-3' type='submit'>Login</button>
                {msgError != "" && (
                    <div style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>
                        {msgError}
                    </div>
                )}
            </form>
        </div>
    )
}

export default Login
