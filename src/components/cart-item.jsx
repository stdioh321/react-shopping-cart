import React,{ useContext } from 'react'
import { ShopContext } from '../context/shop-context'

export default function CartItem({ data }) {
  const { id,productName,price,productImage } = data
  const { cartItems,addToCart,removeFromCart,updateAmount } = useContext(ShopContext)
  const itemAmount = Number(cartItems[id])

  return (
    <div className='cartItem'>
      <img src={productImage} alt={productName} title={productName} />
      <div className="description">
        <p>
          <b>
            {productName}
          </b>
        </p>
        <p>
          ${price}
        </p>
        <div className="countHandler">
          <button onClick={(e) => {
            removeFromCart(id,1)
          }} >-</button>
          <input type="text" value={itemAmount} onInput={(e) => {
            const value = Number(e.target.value)
            if (isNaN(value)) return
            updateAmount(Math.abs(value),id)
          }} />
          <button onClick={(e) => {
            addToCart(id,1)
          }} >+</button>
        </div>
      </div>
    </div>
  )
}
