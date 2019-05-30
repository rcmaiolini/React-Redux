import React, { useState, useEffect } from "react"

export default props => {
  const [counter, setCounter] = useState(0)
  const [status, setStatus] = useState("Numero Par")

  useEffect(() => {
    counter % 2 === 0 ? setStatus("Numero Par") : setStatus("Numero Impar")
  })

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase ++</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease --</button>
      <p>{status}</p>
    </div>
  )
}