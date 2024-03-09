import './Product.css'
function Product({ title, price }) {
    return (
        <div className="Product">
            <h1>Product Title: {title}</h1>
            <h3>Product Price : {price}</h3>
        </div>
    );
}

export default Product