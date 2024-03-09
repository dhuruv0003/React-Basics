import Product from "./Product"
function ProductTab() {
    return (
        <div className="">
            <Product title="phone" price="20k"></Product>
            <Product title ="car" price="7lakh"></Product>
            <Product title="laptop" price={5800}></Product>
        </div>

    )
}
export default ProductTab