import React from "react";
import CartItem from './CartItem';
// this is a class based component
// creating a class cartItem that inherits the properties from component class of react library
const Cart=(props)=>{
   // when i am inheriting something from parent class then you need to call the  constructor of parent class and (super) call the constructor of parent class
    const {products}=props;
    return(
    <div className="Cart">
      {
        products.map((product)=>{
          return <CartItem 
          product={product} 
          key={product.id}
          onIncreaseQuantity={props.onIncreaseQuantity}
          onDecreaseQuantity={props.onDecreaseQuantity}
          onDeleteProduct={props.onDeleteProduct}
          
          />
        })
      }
    </div>
    );
  
}
export default Cart;