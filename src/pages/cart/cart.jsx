import React,{ useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../../context/shop-context'
import { PRODUCTS } from '../../utlis/products'
import CartItem from '../../components/cart-item'
import './cart.css'

export default function Cart() {
  const navigate = useNavigate();
  const { cartItems,getTotalAmount } = useContext(ShopContext)
  const currentProducts = PRODUCTS.reduce((acc,product) => {
    if (cartItems[product.id] > 0) return [...acc,product]
    return acc
  },[])
  const totalAmount = getTotalAmount();
  return (
    <div className='cart'>
      <div>
        <h1>Your cart Items</h1>
      </div>
      <div className="cartItems">
        {
          currentProducts.map((product,idx) => {
            return <div key={idx}>
              <CartItem data={product} />
            </div>
          })
        }
      </div>
      {
        currentProducts.length > 0
          ? (
            <div className="checkout">
              <p style={{ 'textAlign': 'center' }}>
                Subtotal: ${totalAmount}
              </p>
              <button onClick={(e) => {
                navigate('/')
              }}>Continue Shopping</button>
              <button>Checkout</button>
            </div>
          )
          : (<h1>Your cart is Empty</h1>)
      }
    </div>
  )
}
