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

  function updateCart(newItem) {
    if (newItem) {
      if (Array.isArray(newItem)) {
        // replace cart
        setCart([...newItem])
      } else {
        // add item to cart
        setCart([...cart, newItem])
      }
    } else {
      // replace cart with self (for react to know chnage has happened)
      setCart([...cart])
    }
  }

  function addToCart(storeItem) {
    const itemInCart = cart.find(i => i.storeItem.name === storeItem.name)

    if (!itemInCart) {
      const cartItem = { storeItem, quantity: 1 }
      updateCart(cartItem)
    } else {
      itemInCart.quantity++
      updateCart()
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
      updateCart()
    } else {
      const newCart = cart.filter(i => i.storeItem.name !== item.storeItem.name)

      updateCart(newCart)
    }
  }

  function increaseQuantity(item) {
    item.quantity++
    updateCart()
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
