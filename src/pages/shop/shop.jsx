import React,{ useEffect } from 'react'
import Product from '../../components/product'
import { PRODUCTS } from '../../utlis/products'
import './shop.css'

export default function Shop() {

  useEffect(() => {
  },[])
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>My Shop</h1>
      </div>

      <div className="products">
        {
          PRODUCTS.map((prod,idx) => {
            return (<div key={idx}>
              <Product data={prod} />
            </div>)
          })
        }
      </div>
    </div>
  )
}