import React from "react";
// this is a class based component
// creating a class cartItem that inherits the properties from component class of react library
class CartItem extends React.Component{
   // when i am inheriting something from parent class then you need to call the  constructor of parent class and (super) call the constructor of parent class
    
  
    // arrow function binds the value of this keyword to the reference of this class
    // increaseQuantity=()=> {
    //   // by using (this.state.qty++) only increases the qty value but react doesn't know that it has to re render the component .to solve this we use (setState) function thai is inherited from component class
    //   //this.state.qty++;
    //  //  console.log("this ",this.state);
    //  //setState form 1
    //  // by using setState we can rerender our component with the updated state value
    // //  this.setState({
    // //   qty:this.state.qty+1
    // //   });
    

    // // setState form 2
    // this.setState((prevState)=>{
    // return{
    //   // it will take the current qty value from prevState and incremented the value and asign it to qty and after that it will shallow merge the value to its state
    //   // if previous state requires use 
    //   qty:prevState.qty+1
    // }
    // }
    // // we are apssing another argument as a callback function it is going to be executed when the setState function completes its call.so it gives you updated state value
    // ,()=>{
    //   console.log('this.state',this.state);
    // });
    // }
    // decreaseQuantity=()=>{
    //   this.setState((prevState)=>{
    //      if(prevState.qty===0){
    //       return;
    //      }
    //     return {
    //       qty:prevState.qty-1
    //     }
    //   });
    // }
  render(){
    // object destructuring
    const{price,title,qty}=this.props.product;
    const{product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=this.props
    return(
        <div className="cart-item">
            <div className="left-block">
               <img style={styles.image}/>
            </div>
            <div className="right-block">
                <div style={{fontSize:25,color:'blue'}}>{title}</div>
                <div style={{color:'blue'}}>{price}</div>
                <div style={{color:'blue'}}>{qty}</div>
                <div className="cart-item-action">
                    {/* Buttons */}
                    <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/3524/3524388.png" onClick={()=>onIncreaseQuantity(this.props.product)} />
                    <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" onClick={()=>onDecreaseQuantity(this.props.product)} />
                    <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" onClick={()=>onDeleteProduct(product.id)} />

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