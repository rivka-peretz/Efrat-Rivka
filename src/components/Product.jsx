const Product = ({product, deleteProductF}) => {



    return (
        <div  className="d-flex">
            <h1>rivkaa</h1>
            <button onClick={() => deleteProduct(product.name)}>X</button>
        </div>
    )
}

export default Product;