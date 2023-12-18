import React, { useEffect } from 'react'
import { useState } from 'react'
function Counter() {
    const [num, setNum] = useState(0);
    useEffect(() => {
        console.log("Component was mounted!");
        const interval = setInterval(() => {
            setNum((n) => n + 1) //n parameter is same with num in useState hook! It is also used like that as a func!!
        }, 1000)
        /* We got an error like react state update on an unmounted component. This is a no-op but it 
            indicates a memory leak in our application. To fix, cancel all subs and asyns's tasks
            in a useEffect cleanup function.
            AND WE SHOULD DO THAT RETURN THE LAST LINE BEFORE CLOSED BRACKETS FUNC AND CLEAR FUNCTION!
        */
        return () => {
            console.log("The component was unmounted!");
            clearInterval(interval)
        }        
        
    /* Those method cen be used where interval calculations or the process like we have got a component
    which is start to connection web socket when it is mounted. To sample, when we close the component
    like this, the data comes from socket try to make a connection continouslyif we stop the connection 
    like above!!
    */

    }, []) // [] --> that is querying all component as a mounted or unmounted. 
  return (
    <div className='App'>
      <h1>number : {num}</h1>
      {/* <button onClick={() => { setNum(num + 1) }}>Click Me to increase the number!</button> */}

    </div>
  )
}

export default Counter
