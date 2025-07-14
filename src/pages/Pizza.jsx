import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Pizza = () => {
    // 1. declarar constantes
    const [pizza, setPizza] = useState("");
    const [ingredientes, setIngredientes] = useState([]);
    const [precio, setPrecio] = useState(0);
    const [descipcion, setDescripcion] = useState("");

    const { id } = useParams()

    // 3 - Llamamos a la función consultarApi al momento de montar el componente
    useEffect(() => {
        consultarPizza();
    }, []);

    // 2 - Función que consulta la API
    const consultarPizza = async () => {
        const url = `http://localhost:5000/api/pizzas/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setPizza(data);
        setIngredientes(data.ingredients)
        setPrecio(data.price)
    };

    return (
        <div className='divDetallePizza'>
            <main className="container pt-2">
                <section className="row">
                    <article className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 my-12">
                        <div className="card mx-2">
                            <h3 className="card-title text-center mt-2 mb-2">
                                Pizza {pizza.name}
                            </h3>
                            <div className="card-body cardDetallePizza pt-0">
                                <div className="imagenPizza">
                                    <img src={pizza.img} className="card-img-top" alt="Pizza" />
                                </div>
                                <div className="ingredientesPizza">
                                    <div>
                                        <p className="card-text h5 text-secondary">🍕 Ingredientes:
                                        </p>
                                        <ul className='m-0'>
                                            {ingredientes.map((item, index) => <li className='listado-ingredientes' key={index}>{item}</li>
                                            )}
                                        </ul>
                                        <p className="card-text h5 pt-5">Precio: $ {precio.toLocaleString()} </p>
                                    </div>
                                </div>
                                <div className="descripcionPizza">
                                    <p className="card-text h6 fw-light text-secondary">
                                        {pizza.desc}
                                    </p>
                                    <div className="precioPizza">
                                        <button className='btn btn-sm bg-dark text-center text-white p-1'>Añadir 🛒</button>
                                    </div>
                                    <div className="precioPizza pt-1">
                                        <Link to='/' className='btn btn-sm bg-dark text-center text-white p-1'>Volver </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </main>

        </div>
    )
}

export default Pizza
