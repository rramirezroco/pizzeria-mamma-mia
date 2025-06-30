import React from 'react'

const Profile = () => {
    return (
        <main className='pagesPizza p-5'>
            <h5>Mi Cuenta</h5>
            <section className='seccionProfile'>
                <article className='datosProfile'>
                    <label className='text-body-tertiary'>Nombre:</label>
                    <label className='text-body-tertiary'>Email:</label>
                </article>
                <article>
                    <label className='text-dark-emphasis'>Rosa Ramírez</label>
                    <label className='text-dark-emphasis'>rosa@ramirez.com</label>
                </article>
            </section>
            <button className='button-main mt-5' type='submit'>Cerrar Sesión</button>
        </main>
    )
}

export default Profile
