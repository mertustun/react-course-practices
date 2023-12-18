import { useState } from 'react'
import '../../src/App.css';

function Counter() {
    const [count, setCount] = useState(0)

    const increaseProcess = () => {
        setCount(count + 1)
    }
    
    const decreaseProcess = () => {
        setCount(count - 1)
    }

    return (
        <div className='App centered'>
            <h1>{count}</h1>
            <div className="buttons">
                <button onClick={decreaseProcess}>DECREASE</button>
                <button onClick={increaseProcess}>INCREASE</button>
            </div>
        </div>
    )
}

export default Counter
