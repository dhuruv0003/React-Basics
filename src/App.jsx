import "./App.css";
import Title2 from "./Title.jsx";

function Description(){
  return <h2>This is description</h2>
}

function App() {
  return <div>
    <Title2></Title2>
    <h1>This is my first app component</h1>
    <h3>Inside the app we have : </h3>
    <Title2/>
    <Description/>
      </div>
}

export default App
