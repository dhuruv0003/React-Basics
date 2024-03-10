import './Product.css'
function Product({ title, price, features = ["hi", "hello", "kasie ho"], feature2 }) {
    const list = features.map((feature) => (<li>{feature}</li>))
    let discount = price >= 20000 ? <p>Discount 5%</p> : null
    // alse we can do .
    
    return (
        <div className="Product">
            <h1>Product Title: {title}</h1>
            <h3>Product Price : {price}</h3>
            <h2>{features.toString().split(",").join("->")}</h2>
            <h2>{list}</h2>
            <h2>{discount}</h2>
            {/* also we can do . */}
            <h2>    {price<15000 && <p>Hello Ji No discount</p>}    </h2>
        </div>
    );
}

export default Product

// Note we can also set default var;ue for the props

// Product({ title="kuch ni", price =2})
