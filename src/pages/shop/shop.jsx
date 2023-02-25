import React,{ useEffect,useState } from 'react'
import { debounce } from 'lodash'
import Product from '../../components/product'
import { PRODUCTS } from '../../utlis/products'
import './shop.css'

export default function Shop() {
  const [products,setProducts] = useState(PRODUCTS)
  useEffect(() => {
  },[products])

  function handleSearch(query) {
    console.log({ query });
    let currQuery = query.toLowerCase().trim()
    if (!currQuery || currQuery.length < 3) return setProducts(PRODUCTS)
    const newProducts = [...PRODUCTS].filter((it,_) => {
      const productName = it.productName.toLowerCase().trim()
      return productName.match(currQuery)
    })
    setProducts(newProducts)
  }
  const handleSearchDebounce = debounce((e) => {
    handleSearch(e.target.value)
  },500)
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>My Shop</h1>
      </div>
      <div className='searchBar'>
        <input type="text" placeholder='Type your product....' onInput={handleSearchDebounce} />
      </div>
      <div className="products">
        {
          products.map((prod,idx) => {
            return (<div key={idx}>
              <Product data={prod} />
            </div>)
          })
        }
      </div>
      {
        products.length < 1 && (
          <div>
            <h1 style={{ textAlign: 'center' }}>Not Found</h1>
          </div>
        )
      }
    </div>
  )
}