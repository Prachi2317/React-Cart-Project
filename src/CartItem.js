import React from "react";
// this is a class based component
// creating a class cartItem that inherits the properties from component class of react library
const CartItem =(props)=>{
    // object destructuring
    const{price,title,qty}=props.product;
    const{product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=props
    return(
        <div className="cart-item">
            <div className="left-block">
               <img style={styles.image}  src={product.img}/>
            </div>
            <div className="right-block">
                <div style={{fontSize:25,color:'blue'}}>{title}</div>
                <div style={{color:'blue'}}>{price}</div>
                <div style={{color:'blue'}}>{qty}</div>
                <div className="cart-item-action">
                    {/* Buttons */}
                    <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/3524/3524388.png" onClick={()=>onIncreaseQuantity(props.product)} />
                    <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" onClick={()=>onDecreaseQuantity(props.product)} />
                    <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" onClick={()=>onDeleteProduct(product.id)} />

                </div>
            </div>
        </div>
    );
  
}
//creating a style object
const styles={
 image:{
    height:110,
    width:110,
    borderRadius:4,
    background:'grey'
 }
}
export default CartItem;