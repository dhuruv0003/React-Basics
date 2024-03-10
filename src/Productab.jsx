import Product from "./Product"
import './ProductTab.css'
function ProductTab() {
    let features1 = ["khao", "piyo", "aish", "karo"] // array as arguement
    let features2 = { a: "mast", b: "Hai", c: "bro" }
    return (

        <div className="ProductTab">
            <Product title="phone" price={20000} features={features1}></Product>
            <Product title="car" price={700000} features={features1}></Product>
            <Product title="laptop" price={5800} features={["raju","Bangya"]} feature2={features2}></Product>
        </div>

    )
}
export default ProductTab