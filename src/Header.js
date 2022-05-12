import StoreItem from './StoreItem'
import { useState } from 'react'

export default function Header({ storeItems, addToCart }) {
  const [foodFilter, setFoodFilter] = useState('select')
  const [sort, setSort] = useState('select')

  function filterStoreItems(foodType) {
    if (foodType === 'select') return storeItems
    return storeItems.filter(item => item.type === foodType)
  }

  function sortStoreItems(filteredStore, sortParam) {
    if (sortParam === 'select') return filteredStore

    let sortedStore = [...filteredStore]
    if (sortParam === 'A - Z') {
      sortedStore.sort((a, b) => (a.name > b.name ? 1 : -1))
      return sortedStore
    }
    if (sortParam === 'Z - A') {
      sortedStore.sort((a, b) => (a.name < b.name ? 1 : -1))
      return sortedStore
    }
  }

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
            setSort(e.target.value)
          }}
        >
          <option value="select">Select...</option>
          <option value="A - Z">A - Z</option>
          <option value="Z - A">Z - A</option>
        </select>
      </div>

      {/* store item list */}
      <ul className="item-list store--item-list">
        {sortStoreItems(filterStoreItems(foodFilter), sort).map(item => (
          <StoreItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </ul>
    </header>
  )
}
