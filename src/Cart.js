import React from "react";
import CartItem from './CartItem';
// this is a class based component
// creating a class cartItem that inherits the properties from component class of react library
class Cart extends React.Component{
   // when i am inheriting something from parent class then you need to call the  constructor of parent class and (super) call the constructor of parent class
    
  render(){
    return(
    <div className="Cart">
   <CartItem/>
   <CartItem/>
   <CartItem/>
    </div>
    );
  }
}
export default Cart;