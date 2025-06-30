import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    function verificaDatos(e) {
        e.preventDefault();

        if (email.trim() == "" || password.trim() == "") {
            alert("Debe completar todos los datos");
            return
        }
        if (password.length < 6) {
            alert("La contraseña debe tener un mínimo de 6 caracteres")
            return
        }

        alert("Autentication successfull!")
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
            </form>
        </div>
    )
}

export default Login
