import React, { Component } from 'react'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import CartHeader from "./components/cartHeader.js"
import CartFooter from "./components/cartFooter.js"
import CartItems from "./components/cartItems.js"
import CartItem from "./components/cartItem.js"
import AddItem from "./components/addItem.js"
import Total from "./components/total.js"

class App extends Component {
  state = {
    cartItemsList: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ],
    products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ]
  }

  onAddItem = ({quantity, product}) => {
    const nextID = this.state.cartItemsList.reduce((acc, item) => {
      return Math.max(acc, item.id)
    }, 0) + 1
    const newItem = { quantity, product, id: nextID }
    const newItems = [...this.state.cartItemsList, newItem]

    this.setState({
      ...this.state,
      cartItemsList: newItems
    })
  }

  render() {
    return (
      <div className="App">
        <CartHeader/>
        <CartItems items={this.state.cartItemsList}/>
        <Total items = {this.state.cartItemsList}/>
        <AddItem products={this.state.products} onAddItem = {this.onAddItem}/>
        <CartFooter year= "2019"/>
      </div>
    )
  }
}

export default App
