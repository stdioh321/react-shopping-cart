import { useContext } from "react"
import { ShopContext } from "../context/shop-context"

export default function Product({ data }) {
  const { id,productName,price,productImage } = data
  const { addToCart,cartItems } = useContext(ShopContext)

  const cartItemAmount = cartItems[id]

  return <div className="product">
    <img src={productImage} alt="" />
    <div className="description">
      <b>
        {productName}
      </b>
      <p>
        ${price}
      </p>
    </div>
    <button className="addToCartBttn" onClick={(e) => {
      addToCart(id,1)
    }}>Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
  </div>
}