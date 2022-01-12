import React from "react"
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter ,setCounter]= React.useState(1)

  const handleIncre = (value) => {
    setCounter(value+counter)
  }
  const handleD = (value) => {
    setCounter(value*counter)
  }
  return (
    <div className="App">
     <h1>Counter</h1>
     <h2>{counter}</h2>
     <button onClick={ () => handleIncre(1)}>Add</button>
     <button onClick={ () => handleIncre(-1)} >Sub</button>
     <button onClick={ () => handleD(2)} >double</button>

    </div>
  );
}

export default App;
