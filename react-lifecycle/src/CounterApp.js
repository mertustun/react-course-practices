import React, { useState } from 'react'
import Counter from "./components/Counter";
import './App.css'

function CounterApp() {
    const [isVisible, setIsVisible] = useState(true)
    // We set up the toggle button's state hook and we write condition to show the Counter component below.
  return (
    <div>
        {isVisible && <Counter />}
        <button onClick={() => setIsVisible(!isVisible)}>
            !Toggle visibility of Counter! 
            {/* The state situation is changed in each click! */}
        </button>
    </div>
  )
}

export default CounterApp
