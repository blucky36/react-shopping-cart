import React from 'react'
import CartItem from "./cartItem.js"

const CartItems = (props) => {
  return (
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        {props.items.map((e,i)=><CartItem key = {`${i}`}product = {e.product.name} price = {e.product.priceInCents} quantity = {e.quantity}/>)}
      </div>
    </div>
  )
}

export default CartItems
