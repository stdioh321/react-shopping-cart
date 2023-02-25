import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../utlis/products'

export const ShopContext = createContext(null)

function getDefaultCart(){
  let cart = {}
  for(let i = 0; i < PRODUCTS.length; i++){
    cart[PRODUCTS[i].id] = 0
  }
  return cart;
}


export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())
  const addToCart = (id, qnt=1) => {
    setCartItems((prev) => ({...prev, [id]: prev[id] + qnt}))
  }
  const removeFromCart = (id, qnt=1) => {
    setCartItems((prev) => {
      const newValue = prev[id] - qnt
      const newCart = {...prev, [id]: newValue < 1 ? 0 : newValue}
      return newCart
    })
  }
  const updateAmount = (amount, id) => {
    setCartItems((prev) =>
    ({...prev, [id]: amount < 1 ? 0 : amount}))
  }
  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems){
      let itemInfo = PRODUCTS.find(it => it.id === Number(item))
      totalAmount += cartItems[itemInfo.id] * itemInfo.price
    }

    return totalAmount
  }


  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateAmount,
    getTotalAmount
  }
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}