export default function StoreItem({ item, addToCart }) {
  return (
    <li>
      <div className="store--item-icon">
        <img src={`/assets/icons/${item.id}.svg`} alt="beetroot" />
      </div>
      <button onClick={() => addToCart(item)}>Add To Cart</button>
    </li>
  )
}
