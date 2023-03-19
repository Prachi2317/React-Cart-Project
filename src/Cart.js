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
        title:'tv',
        qty:1,
        img:'',
        id:2
      },{
        price:999,
        title:'camera',
        qty:1,
        img:'',
        id:3
      }],
    }
  

}
handleIncreaseQunatity=(product)=>{
  const {products}=this.state;
const index=products.indexOf(product);
  products[index].qty+=1;
  this.setState({
    products:products
  })
}
handleDecreaseQunatity=(product)=>{
  const {products}=this.state;
  const index=products.indexOf(product);
  if(products[index].qty===0){
    return;
  }
    products[index].qty-=1;
    this.setState({
      products:products
    })
  }
 
  handleDeleteProduct=(id)=>{
    const {products}=this.state
    const items=products.filter((item)=>{
            return item.id!==id;
    })
      this.setState({
        products:items
      })
  }

  render(){
    const {products}=this.state;
    return(
    <div className="Cart">
      {
        products.map((product)=>{
          return <CartItem 
          product={product} 
          key={product.id}
          onIncreaseQuantity={this.handleIncreaseQunatity}
          onDecreaseQuantity={this.handleDecreaseQunatity}
          onDeleteProduct={this.handleDeleteProduct}
          
          />
        })
      }
    </div>
    );
  }
}
export default Cart;