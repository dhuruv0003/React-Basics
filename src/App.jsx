import "./App.css"

function Title() {
  return <h1>Hello World</h1>;
}
function Description(){
  return <h2>This is description</h2>
}

function App() {
  return <div>
    <h1>This is my first app component</h1>
    <h3>Inside the app we have : </h3>
    <Title/>
    <Description/>
      </div>
}

export default App
