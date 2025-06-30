import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='notFound'>
            <h3 className='textoNotFound'>Upsss . . . Sitio web no encontrado . . .</h3>
            <Link to="/" className='textoNotFound h6 text-decoration-none'>Haz click aquí para volver al inicio</Link>
        </div>
    )
}

export default NotFound
