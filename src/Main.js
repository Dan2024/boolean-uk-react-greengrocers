export default function Main({
  cart,
  increaseQuantity,
  decreaseQuantity,
  totalPrice
}) {
  return (
    <main id="cart">
      <h2>Your Cart</h2>

      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {cart.map(item => (
            <li key={item.storeItem.id}>
              <img
                className="cart--item-icon"
                src={`assets/icons/${item.storeItem.id}.svg`}
                alt={item.storeItem.name}
              />
              <p>{item.storeItem.name}</p>
              <button
                className="quantity-btn remove-btn center"
                onClick={() => decreaseQuantity(item)}
              >
                -
              </button>
              <span className="quantity-text center">{item.quantity}</span>
              <button
                className="quantity-btn add-btn center"
                onClick={() => increaseQuantity(item)}
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <span className="total-number">£{totalPrice}</span>
        </div>
      </div>
    </main>
  )
}
