import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'

import initialStoreItems from './store-items'
import Header from './Header'
import Main from './Main'
import FlatIconInfo from './FlatIconInfo'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

export default function App() {
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  function addToCart(item) {
    const desiredItem = storeItems.find(
      storeItem => storeItem.name === item.name
    )

    setCart([...cart, desiredItem])
  }

  function decreaseQuantity() {}
  function increaseQuantity() {}

  return (
    <>
      <Header storeItems={storeItems} addToCart={addToCart} />

      <Main
        cart={cart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        totalPrice={totalPrice}
      />

      <FlatIconInfo />
    </>
  )
}
