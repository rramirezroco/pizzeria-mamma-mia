import React, { useContext } from 'react'
import { useState } from 'react'
import { UserContext } from '../context/UserContext';

const Register = () => {
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const { email, password, register, setEmail, setPassword, msgError, setMsgError } = useContext(UserContext);


    function verificaDatos(e) {
        e.preventDefault();
        if (password !== passwordConfirm) {
            setMsgError("Las contraseñas no coinciden")
            return
        }
        register()
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
                {msgError != "" && (
                    <div style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>
                        {msgError}
                    </div>

                )}
            </form>
        </div>
    )
}

export default Register
