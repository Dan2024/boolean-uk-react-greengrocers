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
            <li>
              <img
                class="cart--item-icon"
                src={`assets/icons/${item.id}.svg`}
                alt={item.name}
              />
              <p>{item.name}</p>
              <button class="quantity-btn remove-btn center">-</button>
              <span class="quantity-text center">1</span>
              <button class="quantity-btn add-btn center">+</button>
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
