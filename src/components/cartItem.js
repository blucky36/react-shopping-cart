import React from 'react'

const formatValues = (p) => {
  let arr = p.toString().split("")
  return arr.map((e,i)=>{
    if(i === 0){
      return `$${e}`
    }else if(i === arr.length - 2){
      return `.${e}`
    }else{
      return e
    }
  }).join("")
}

const CartItem = (props) => {
  return (
    <div className = "list-group-item">
      <div className="collection-item">
        <div className="row">
          <div className="col-md-8">{props.product}</div>
          <div className="col-md-2">{formatValues(props.price)}</div>
          <div className="col-md-2">{props.quantity}</div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
