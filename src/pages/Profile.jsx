import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext';

const Profile = () => {

    const { user, logout, me } = useContext(UserContext);

    useEffect(() => {
        me();
    }, []);

    return (
        <main className='pagesPizza p-5'>
            <h5>Mi Cuenta</h5>
            <section className='seccionProfile'>
                <article className='datosProfile'>
                    <label className='text-body-tertiary'>Email:</label>
                </article>
                <article>
                    {user ? (
                        <label className='text-dark-emphasis'> {user.email} </label>
                    ) : (
                        <p>Ingrese al Login.</p>
                    )}
                </article>
            </section>
            <button className='button-main mt-5' onClick={() => logout()}>Cerrar Sesión</button>
        </main>
    )
}

export default Profile
