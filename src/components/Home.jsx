import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import { pizzas } from '../data/pizzas'

const Home = () => {
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
