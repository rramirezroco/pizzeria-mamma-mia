import React from 'react'
import { useState } from 'react'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")


    function verificaDatos(e) {
        e.preventDefault();

        if (email.trim() == "" || password.trim() == "" || passwordConfirm.trim() == "") {
            alert("Debe completar todos los datos");
            return
        }
        if (password.length < 6) {
            alert("La contraseña debe tener un mínimo de 6 caracteres")
            return
        }
        if (password !== passwordConfirm) {
            alert("Las contraseñas no coinciden")
            return
        }
    }

    return (
        <div className='div-formulario-register p-5'>
            <h2 className='text-center'>Register</h2>
            <form className='formulario-column' onSubmit={verificaDatos}>
                <label>Email</label>
                <input type='email' value={email} placeholder='Ingrese Email' onChange={(e) => setEmail(e.target.value)} />
                <label>Contraseña</label>
                <input type='password' value={password} placeholder='Ingrese Password' onInput={(e) => setPassword(e.target.value)} />
                <label>Confirme Contraseña</label>
                <input type='password' value={passwordConfirm} placeholder='Confirme Password' onInput={(e) => setPasswordConfirm(e.target.value)} />
                <button className='button-form mt-3' type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Register
