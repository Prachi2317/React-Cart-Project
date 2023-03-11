import React from "react";
// this is a class based component
// creating a class cartItem that inherits the properties from component class of react library
class CartItem extends React.Component{
  render(){
    return(
        <div className="cart-item">
            <div className="left-block">
               <img style={styles.image}/>
            </div>
            <div className="right-block">
                <div style={{fontSize:25,color:'blue'}}>Phone</div>
                <div style={{color:'blue'}}>RS 999</div>
                <div style={{color:'blue'}}>Qty: 1</div>
                <div className="cart-item-action">
                    {/* Buttons */}
                </div>
            </div>
        </div>
    );
  }
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