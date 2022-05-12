import { useState } from 'react'

export default function StoreItem({ item, addToCart }) {
  const [active, setActive] = useState(false)
  return (
    <li onClick={() => setActive(!active)}>
      <div className="store--item-icon">
        <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
      </div>
      {active && <div>cool fact {item.coolFact}</div>}
      <button onClick={() => addToCart(item)}>Add To Cart</button>
    </li>
  )
}
