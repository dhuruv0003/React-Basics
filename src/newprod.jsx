import './Product.css'

function NewProd({ title, price, features }) {
    // Applying styling 
    let isdiscount=price>1500
    let isstyles = { backgroundColor: isdiscount && "red"  };
   
    return (
        <div className='Product' style={isstyles}>
            <h1>title : {title}</h1>
            <h3>price : {price}</h3>
            <h2>features are : {features} </h2>
        </div>
    );
}

export default NewProd;