import React from "react";
import CartItem from './CartItem';
// this is a class based component
// creating a class cartItem that inherits the properties from component class of react library
class Cart extends React.Component{
   // when i am inheriting something from parent class then you need to call the  constructor of parent class and (super) call the constructor of parent class
   constructor(){
    super();
    this.state={
      products:[{
        price:999,
        title:'phone',
        qty:1,
        img:'',
        id:1
      },{
        price:999,
        title:'phone',
        qty:1,
        img:'',
        id:2
      },{
        price:999,
        title:'phone',
        qty:1,
        img:'',
        id:3
      }]
    }

}
  render(){
    const {products}=this.state;
    return(
    <div className="Cart">
      {
        products.map((product)=>{
          return <CartItem 
          product={product} 
          key={product.id}/>
        })
      }
    </div>
    );
  }
}
export default Cart;