import './Product.css'
function Product({ title, price,features=["hi","hello","kasie ho"] }) {
    return (
        <div className="Product">
            <h1>Product Title: {title}</h1>
            <h3>Product Price : {price}</h3>
            <h2>{features.toString().split(",").join("->")}</h2>
        </div>
    );
}

export default Product

// Note we can also set default var;ue for the props 

// Product({ title="kuch ni", price =2})
