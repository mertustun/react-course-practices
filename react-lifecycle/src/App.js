import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // React hooks cannot be called conditionally. They must be called in the exact same order! (ex: useState..)
  const [num, setNum] = useState(0),
    [name, setName] = useState('Mert')

  /* useEffect(() => {
    console.log("State was updated!");
  }) // If any updating or changing in state, we can catch the moment and
     // do anything we need with using useEffect!  
  */
  useEffect(() => {
    console.log("Component made it mount!");
  }, []) // [] --> dependency array if it is bring it blank like that It means catch the moment of component mounted!
  // MOUNTING is the initial phase in which the instance of the component is created and inserted into the DOM.
  useEffect(() => {
    console.log("Number state was updated : ", num);
  }, [num]) // Only write the changing of num state!!
  useEffect(() => {
    console.log("Name state was updated : ", name);
  }, [name]) // Only catch and write the Name's state!!! 
  return (
    <div className="App">
      <h1>number : {num}</h1>
      <button onClick={() => { setNum(num + 1) }}>Click Me to increase the number!</button>

      <br />
      <hr />

      <h1>NAME : {name}</h1>
      <button onClick={() => { setName("Mert Ustun") }}>Click Me to change the name!</button>
    </div>
  );
}

export default App;
