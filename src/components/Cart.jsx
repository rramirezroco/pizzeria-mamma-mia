import React from 'react'
import { pizzaCart } from '../data/pizzas'
import { useState } from 'react'

const Cart = () => {
    const [listadoCart, setListadoCart] = useState(pizzaCart)

    const aumentaCantidad = (e) => {
        setListadoCart(
            listadoCart.map((item) =>
                item.id === e ? { ...item, count: item.count + 1 } : item
            )
        )
    }

    const verificaStock = () => {
        const eliminar = listadoCart.map((item, index) =>
            item.count != 0 ? item : listadoCart.splice(index, 1)
        )
    }

    const disminuyeCantidad = (e) => {
        const newCount = listadoCart.map((item, index) =>
            item.id === e ? { ...item, count: item.count - 1 } : item
        )
        setListadoCart(newCount)
    }

    const total = () => {
        let total = 0;
        listadoCart.map((item) => {
            total += item.count * item.price
        })

        return total;
    }

    verificaStock()

    return (
        <div>
            <main className="container cartResumen">
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
                                <button type='button' className='btn btn-outline-danger' onClick={() => disminuyeCantidad(pizza.id)}> - </button>
                                <label className='fw-semibold'> {pizza.count} </label>
                                <button type='button' className='btn btn-outline-primary' onClick={() => aumentaCantidad(pizza.id)}> + </button>
                                <label className='fw-semibold'>$ {(pizza.price * pizza.count).toLocaleString()}</label>
                            </div>
                        </article>
                    )}
                </section>
                <h3>Total: $ <label className="totalCart">{total().toLocaleString()}</label></h3>
                <button type='button' className='btn btn-dark'>Pagar</button>
            </main>
        </div>
    )
}

export default Cart
