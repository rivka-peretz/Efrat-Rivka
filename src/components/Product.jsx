const Product = ({product, deleteProductF}) => {
const F=()=>{
    return "rivka"
}

    return (
        <div  className="d-flex">
            <h2>{product.name} ------- {product.amount}</h2>
            <button onClick={() => deleteProduct(product.name)}>X</button>

        </div>
    )
}

export default Product;