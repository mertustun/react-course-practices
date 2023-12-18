// State hooks uding. Firstly useState is imported from react!
import { useState } from "react";

import './App.css';

function App() {
  // useState method used like below in code
  const [name, setName] = useState('Mert'), //We determine any variable that can be changed and then set it.
    [age, setAge] = useState(22), // We can pick a default state value for the variables.
    [friends, setFriends] = useState(['Can', 'Omer']), //array data type of useState.
    [address, setAddress] = useState({ title: "Istanbul", zip: 34000 }) //object data type of useState.

  return (
    <div className="App">
      <h1>HELLO {name} !</h1>
      <h2>{age}</h2>

      <button onClick={() => setName('Mert Ustun')}>Change Name</button>
      <button onClick={() => setAge(23)}>Change Age</button>

      <hr />
      <br />

      <h2>Friends</h2>
      {
        friends.map((friend, key) => (
          <h3 key={key}>
            {friend}
          </h3>
        ))
      }
      <br />
      <button onClick={
        () => setFriends([...friends, 'Ulas']) // It should be setted in same data type ex: arr-arr, num-num..
      }>
        add new Friend
      </button>

      <hr />
      <br />

      <h2>Address</h2>
      <h3>{address.title}</h3>
      <h3>{address.zip}</h3>
      <br />
      <button onClick={
        () => setAddress({ ...address, title: "ISTANBUL/BAKIRKOY", })//zip: 34111}) 
        // It should be setted in same data type ex: arr-arr, num-num..
        // If we just less than all datas in object change then we call the all object to not loss data. ...obj
      }>
        Change the address information
      </button>
    </div>
  );
}

export default App;
