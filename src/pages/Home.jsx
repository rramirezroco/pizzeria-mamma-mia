import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { pizzasJson } from '../data/pizzas'

const Home = () => {
    // 1. declarar constantes
    const [pizzas, setPizzas] = useState([]);

    // 3 - Llamamos a la función consultarApi al momento de montar el componente
    useEffect(() => {
        consultarApi();
    }, []);

    // 2 - Función que consulta la API
    const consultarApi = async () => {
        try {
            const url = "http://localhost:5000/api/pizzas";
            const response = await fetch(url);
            const data = await response.json();
            setPizzas(data);
        } catch (error) {
            setPizzas(pizzasJson)
        }
    };

    return (
        <div>
            <Header />
            <main className="container">
                <section className="row">
                    {pizzas.map((pizza) =>
                        <CardPizza
                            key={pizza.id}
                            parameters={pizza} />)}
                </section>
            </main>

        </div>

    )
}

export default Home
