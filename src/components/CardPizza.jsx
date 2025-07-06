import React, { useContext } from 'react'
import { PizzaContext } from '../context/PizzaContext';

const CardPizza = (props) => {
    const ingredientes = props.parameters.ingredients;
    const { aumentaCantidad } = useContext(PizzaContext)

    return (

        <article className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4">
            <div className="card mx-2">
                <img src={props.parameters.img} className="card-img-top" alt="Pizza" />
                <div className="card-body">
                    <h5 className="card-title ">
                        Pizza {props.parameters.name}
                    </h5>
                    <hr />
                    <p className="card-text text-center h6 fw-light text-secondary">🍕 Ingredientes:
                    </p>
                    <ul className='m-0'>
                        {ingredientes.map((item, index) => <li className='listado-ingredientes' key={index}>{item}</li>
                        )}
                    </ul>
                    <hr />
                    <p className="card-text text-center h5 ">Precio: ${props.parameters.price.toLocaleString()}</p>

                    <div className='buttons-cards mt-4'>
                        <button className='p-1'>Ver Más 👀</button>
                        <button className='bg-dark text-white p-1' onClick={() => aumentaCantidad(props.parameters)}>Añadir 🛒</button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default CardPizza
