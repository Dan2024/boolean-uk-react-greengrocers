export default function StoreItem({
  item,
  addToCart,
  isActive,
  setActiveStoreItem
}) {
  return (
    <li>
      <div
        onClick={() => setActiveStoreItem(item)}
        className="store--item-icon"
      >
        <img
          src={`/assets/icons/${item.id}.svg`}
          title={item.name}
          alt={item.name}
        />
      </div>
      {isActive && <div>cool fact {item.coolFact}</div>}
      <button onClick={() => addToCart(item)}>Add To Cart</button>
    </li>
  )
}
