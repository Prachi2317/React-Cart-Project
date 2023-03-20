import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      products:[{
        price:999,
        title:'phone',
        qty:1,
        img:'https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        id:1
      },{
        price:999,
        title:'Watch',
        qty:1,
        img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
        id:2
      },{
        price:999,
        title:'camera',
        qty:1,
        img:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
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
  getCartCount=()=>{
    const {products}=this.state
     let count=0;
     products.forEach(product => {
      count+=product.qty
     });
     return count;
  }
   render(){
    const {products}=this.state
    return (
      <div className="App">
     <h1>cart</h1>
     <Navbar 
       count={this.getCartCount()}
     />
     <Cart
      products={products}
      onIncreaseQuantity={this.handleIncreaseQunatity}
      onDecreaseQuantity={this.handleDecreaseQunatity}
      onDeleteProduct={this.handleDeleteProduct}
     
     />
      </div>
    );
   }
}

export default App;
