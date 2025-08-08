import React, { useContext } from 'react'
//import { pizzaCart } from '../data/pizzas'
import { useState } from 'react'
import { PizzaContext } from '../context/PizzaContext'
import { UserContext } from '../context/UserContext'

const Cart = () => {
    const { listadoCart, total, aumentaCantidad, disminuyeCantidad } = useContext(PizzaContext)
    const { token } = useContext(UserContext);

    const pagar = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/checkouts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                cart: listadoCart,
            }),
        });
        /*
        */
        const data = await response.json();

        alert(data?.error || "Authentication successful!");
        localStorage.setItem("token", data.token);


    };

    return (
        <div>
            <main className="cartResumen">
                <h5>Detalles del pedido:</h5>
                <section className="row resumenCarritoCompra">
                    {listadoCart.map((pizza, index) =>
                        <article className='detalleCarritoCompra' key={pizza.id}>
                            <div>
                                <img src={pizza.img} alt={pizza.name}></img>
                                <label className='fw-semibold'>{pizza.name}</label>
                            </div>
                            <div className='precioCantidad'>
                                <label className='fw-semibold'>$ {(pizza.price).toLocaleString()}</label>
                                <button type='button' className='btn btn-outline-danger' onClick={() => disminuyeCantidad(pizza)}> - </button>
                                <label className='fw-semibold'> {pizza.count} </label>
                                <button type='button' className='btn btn-outline-primary' onClick={() => aumentaCantidad(pizza)}> + </button>
                                <label className='fw-semibold'>$ {(pizza.price * pizza.count).toLocaleString()}</label>
                            </div>
                        </article>
                    )}
                </section>
                <h3>Total: $ <label className="totalCart">{total().toLocaleString()}</label></h3>
                {token && <button type='button' className='btn btn-dark' onClick={pagar}>Pagar</button>}

            </main>
        </div>
    )
}

export default Cart
