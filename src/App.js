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
