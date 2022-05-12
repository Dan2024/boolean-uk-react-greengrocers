import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'

import initialStoreItems from './store-items'
import Header from './Header'
import Main from './Main'
import FlatIconInfo from './FlatIconInfo'

export default function App() {
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [cart, setCart] = useState([])

  function addToCart(storeItem) {
    const itemInCart = cart.find(i => i.storeItem.name === storeItem.name)

    if (!itemInCart) {
      const cartItem = { storeItem, quantity: 1 }
      setCart([...cart, cartItem])
    } else {
      itemInCart.quantity++
      setCart([...cart])
    }
  }

  function calcTotalPrice() {
    return cart
      .reduce((total, item) => total + item.quantity * item.storeItem.price, 0)
      .toFixed(2)
  }

  function decreaseQuantity(item) {
    if (item.quantity > 1) {
      item.quantity--
      setCart([...cart])
    } else {
      const newCart = cart.filter(i => i.storeItem.name !== item.storeItem.name)

      setCart([...newCart])
    }
  }

  function increaseQuantity(item) {
    item.quantity++
    setCart([...cart])
  }

  return (
    <>
      <Header storeItems={storeItems} addToCart={addToCart} />

      <Main
        cart={cart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        totalPrice={calcTotalPrice()}
      />

      <FlatIconInfo />
    </>
  )
}
