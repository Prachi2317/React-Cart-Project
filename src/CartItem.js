import React from "react";
// this is a class based component
// creating a class cartItem that inherits the properties from component class of react library
class CartItem extends React.Component{
   // when i am inheriting something from parent class then you need to call the  constructor of parent class and (super) call the constructor of parent class
    
    constructor(){
        super();
        this.state={
          price:999,
          title:'phone',
          qty:1,
          img:''
        }
       // this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    // arrow function binds the value of this keyword to the reference of this class
    increaseQuantity=()=> {
     console.log(this.state);
    }
  render(){
    // object destructuring
    const{price,title,qty}=this.state;
    return(
        <div className="cart-item">
            <div className="left-block">
               <img style={styles.image}/>
            </div>
            <div className="right-block">
                <div style={{fontSize:25,color:'blue'}}>{this.state.title}</div>
                <div style={{color:'blue'}}>{price}</div>
                <div style={{color:'blue'}}>{qty}</div>
                <div className="cart-item-action">
                    {/* Buttons */}
                    <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/3524/3524388.png" onClick={this.increaseQuantity} />
                    <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                    <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" />

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