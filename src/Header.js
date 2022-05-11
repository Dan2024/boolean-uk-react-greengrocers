import StoreItem from './StoreItem'

export default function Header({ storeItems, addToCart }) {
  return (
    <header id="store">
      <h1>Greengrocers</h1>

      {/* store item list */}
      <ul className="item-list store--item-list">
        {storeItems.map(item => (
          <StoreItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </ul>
    </header>
  )
}
