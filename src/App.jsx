import "./App.css";
// import {Title,NewTitle} from "./Title.jsx";
import Title from "./Title.jsx"

function Description(){
  return <h2>This is description</h2>
}

function App() {
  return <div>
    <Title></Title>
    <h1>This is my first app component</h1>
    <h3>Inside the app we have : </h3>
    <Title/>
    <Description></Description>
      </div> 
}

export default App
