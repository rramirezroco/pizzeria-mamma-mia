import React, { createContext, useState } from 'react'

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [listadoCart, setListadoCart] = useState([])

  const aumentaCantidad = (obj) => {
    if (listadoCart.map(e => e.id).indexOf(obj.id) == -1) {
      agregaPizzaCart(obj)
    } else {
      setListadoCart(
        listadoCart.map((item) =>
          item.id === obj.id ? { ...item, count: item.count + 1 } : item
        )
      )
    }
  }

  const agregaPizzaCart = (obj) => {
    let pizzaCart = {
      id: obj.id,
      name: obj.name,
      price: obj.price,
      count: 1,
      img: obj.img,
    }
    setListadoCart([...listadoCart, pizzaCart])
  }

  const verificaStock = () => {
    const eliminar = listadoCart.map((item, index) =>
      item.count != 0 ? item : listadoCart.splice(index, 1)
    )
  }

  const disminuyeCantidad = (obj) => {
    const newCount = listadoCart.map((item, index) =>
      item.id === obj.id ? { ...item, count: item.count - 1 } : item
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
    <PizzaContext.Provider value={{ listadoCart, setListadoCart, total, aumentaCantidad, disminuyeCantidad }}>
      {children}
    </PizzaContext.Provider>

  )
}

export default PizzaProvider
