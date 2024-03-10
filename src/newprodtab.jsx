import NewProd from "./newprod.jsx";

function NewProdTab() {
    let newfeature=["Hello","Hi","Kaise","Ho"]
    let list=newfeature.map((feat)=><ul type="square"><li>{feat}</li></ul>)
    return(
    <div className="ProductTab">
        <NewProd title="Maharaj" price={2000} features={["Hello","Hi","Kaise","Ho"]} />
        <NewProd title="Raju" price={5000} features={list}/>
    </div>
    );
}

export default NewProdTab