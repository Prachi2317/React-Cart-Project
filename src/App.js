import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      products:[],
      loading:true
    }
    this.db=firebase.firestore();
  }
  componentDidMount(){

    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot)=>{
    //     //console.log(snapshot);
    //     snapshot.docs.map((doc)=>{
          
    //       // data fumction retrives all the data from 
    //       console.log(doc.data());
    //     });
    //     const products=snapshot.docs.map((doc)=>{
    //       const data=doc.data();
    //       data['id']=doc.id;
    //       return data;
    //     })
    //     console.log(products);
    //     this.setState({
    //       // when you have the same name of variable and key so you can omit key name
    //      // products
    //       products:products,
    //       loading:false

    //     })
    //   })

      this.db
      .collection('products')
      .onSnapshot((snapshot)=>{
        snapshot.docs.map((doc)=>{ 
          console.log(doc.data());
        });
        const products=snapshot.docs.map((doc)=>{
          const data=doc.data();
          data['id']=doc.id;
          return data;
        })
        console.log(products);
        this.setState({
          products:products,
          loading:false

        })
      })

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
  getCartTotal=()=>{
    const {products}=this.state
    let cartTotal=0;
    products.map((product)=>{
       cartTotal+=product.price*product.qty;
    })
    return cartTotal;
  }
  addProduct=()=>{
    this.db
    .collection('products')
    .add({
      img:'',
      price:900,
      qty:3,
      title:'washing machine'
    }).then((docRef)=>{
      console.log("product has been added",docRef);
    })
    .catch((error)=>{
      console.log('Error :',error);
    })
  }
   render(){
    const {products,loading}=this.state
    return (
      <div className="App">
     <h1>cart</h1>
     <Navbar 
       count={this.getCartCount()}
     />
     <button onClick={this.addProduct} style={{padding:20,fontSize:20}}>Add a button</button>
     <Cart
      products={products}
      onIncreaseQuantity={this.handleIncreaseQunatity}
      onDecreaseQuantity={this.handleDecreaseQunatity}
      onDeleteProduct={this.handleDeleteProduct}
     />
     {loading && <h1>loading products....</h1>}
     <div style={{padding:10,fontSize:20,color:'pink'}}>Total:{this.getCartTotal()}</div>
      </div>
    );
   }
}

export default App;
