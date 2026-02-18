import React from "react"
import Count from "./Count"

export default function App(props) {
    const [count, setCount] = React.useState(props.startState)
    
    function add() {
        setCount(prevCount => prevCount + 1)
    }
    
    function subtract() {
        setCount(prevCount => prevCount - 1)
    }    

    function reset() {
      setCount(0)
    }
    
    return (
        <main className="container">
            <h1>Counter on React</h1>
            <div className="counter">
                <button 
                  className="minus" 
                  onClick={subtract} 
                  aria-label="Decrease count">–</button>
                <Count number={count} />
                <button 
                  className="plus" 
                  onClick={add} 
                  aria-label="Increase count">+</button>
                <button className="reset" onClick={reset} >Reset to 0</button>
            </div>
        </main>
    )
}
