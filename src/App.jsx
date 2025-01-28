import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewProduct from './components/NewProduct'
import Product from './components/Product'


function App() {

  const [products, setProducts] = useState([
    {
      name: "prodcut1",
      amount: 60
    },
    {
      name: "product2",
      amount: 90
    }
  ]);

  const addProduct = (newProduct) => {
    const newProductsArr = [...products, newProduct];
    setProducts(newProductsArr);
  }

  const deleteProduct = (name) => {
    const newProductArr = products.filter((p) => {
      return p.name !== name;
    } );
    setProducts(newProductArr)
  }

  const updateProduct = (updatedProduct) => {
    const newProductsArr = products.map((p) => {
      if (p.name === updatedProduct.name) {
        return { ...updatedProduct };
      }
      else return p;
    })
    setProducts(newProductsArr)
  }

  return (
    <>
      <NewProduct addProductF={addProduct} updateProductF={updateProduct}></NewProduct>
      {
        products.map((p, index) =>
          <Product key={index} product={p} deleteProductF={deleteProduct}></Product>
        )
      }
      {products.length === 0 && <h4>no products</h4>}
    </>
  )
}

export default App
