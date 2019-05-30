import React from "react"

let conditional = true
let someFunction = (val1, val2) => {
  return <span>{val1 * val2}</span>
}

export default (props) => 
  <div>
    <h1>{props.valor}</h1>
    <h2>{props.qqNomeDeProp}</h2>
    <p>{1 + 1}</p>
    <p>Verdadeiro? {conditional ? "sim" : "Nao"}</p>
    <p>{Math.random()}</p>
    <p>{someFunction(10, 100)}</p>
  </div>

// export default () => <h1>Primeiro Component! (Arrow)</h1>

// export default function () {
//     return <h1>Primeiro Component!</h1>
// }

// function firstComponent () {
//     return <h1>Primeiro Component!</h1>
// }

// export default firstComponent