import "./App.css";
// import {Title,NewTitle} from "./Title.jsx";
import Title from "./Title.jsx"
import Shit from "./shit.jsx"
import Product from "./Product.jsx"
import ProductTab from "./Productab.jsx";
import NewProdTab from "./newprodtab.jsx";

function Description() {
  return <h2 className="raju">This is description</h2>
}

function App() {
  return (<>
    {/* <Title ></Title>
    <h1 className="raju">This is my first app component</h1>
    <h3>Inside the app we have : </h3>
    <Title />
    <Shit/>
    <Description></Description> <ProductTab></ProductTab> */}
    <NewProdTab></NewProdTab>
  </>)
}

export default App
