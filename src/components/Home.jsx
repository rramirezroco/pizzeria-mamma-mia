import React, { useEffect, useState } from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
//import { pizzas } from '../data/pizzas'

const Home = () => {
    // 1. declarar constantes
    const [pizzas, setPizzas] = useState([]);

    // 3 - Llamamos a la función consultarApi al momento de montar el componente
    useEffect(() => {
        consultarApi();
    }, []);

    // 2 - Función que consulta la API
    const consultarApi = async () => {
        const url = "http://localhost:5000/api/pizzas";
        const response = await fetch(url);
        const data = await response.json();
        setPizzas(data);
    };

    return (
        <div>
            <Header />
            <main className="container">
                <section className="row">
                    {pizzas.map((pizza) =>
                        <CardPizza
                            key={pizza.id}
                            name={pizza.name}
                            price={pizza.price}
                            ingredients={pizza.ingredients}
                            img={pizza.img} />)}
                </section>
            </main>

        </div>

    )
}

export default Home
