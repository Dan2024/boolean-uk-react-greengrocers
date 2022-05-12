import StoreItem from './StoreItem'
import { useState } from 'react'

export default function Header({ storeItems, addToCart }) {
  const [foodFilter, setFoodFilter] = useState('select')
  const [sortOrder, setSortOrder] = useState('select')
  const [activeStoreItem, setActiveStoreItem] = useState(false)

  function filterStoreItems() {
    if (foodFilter === 'select') return storeItems
    return storeItems.filter(item => item.type === foodFilter)
  }

  function sortStoreItems(filteredStore) {
    if (sortOrder === 'select') return filteredStore

    let sortedStore = [...filteredStore]
    if (sortOrder === 'A - Z') {
      sortedStore.sort((a, b) => (a.name > b.name ? 1 : -1))
      return sortedStore
    }
    if (sortOrder === 'Z - A') {
      sortedStore.sort((a, b) => (a.name < b.name ? 1 : -1))
      return sortedStore
    }
  }

  function filterAndSortItems() {
    const filteredItems = filterStoreItems()
    return sortStoreItems(filteredItems)
  }

  function setActiveItem(item) {
    if (activeStoreItem === item) {
      setActiveStoreItem(false)
    } else setActiveStoreItem(item)
  }

  const itemsToDisplay = filterAndSortItems()

  return (
    <header id="store">
      <h1>Greengrocers</h1>

      <div>
        <label>filter by food type </label>
        <select
          onChange={e => {
            setFoodFilter(e.target.value)
          }}
        >
          <option value="select">Select...</option>
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
        </select>
      </div>

      <div>
        <label>sort by name </label>
        <select
          onChange={e => {
            setSortOrder(e.target.value)
          }}
        >
          <option value="select">Select...</option>
          <option value="A - Z">A - Z</option>
          <option value="Z - A">Z - A</option>
        </select>
      </div>

      {/* store item list */}
      <ul className="item-list store--item-list">
        {itemsToDisplay.map(item => (
          <StoreItem
            isActive={activeStoreItem === item}
            setActiveStoreItem={item => setActiveItem(item)}
            key={item.id}
            item={item}
            addToCart={addToCart}
          />
        ))}
      </ul>
    </header>
  )
}

// keep state here which item active
// change active state name
// add comments
