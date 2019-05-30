import React from "react"

const personNames = [
  "Ricardo",
  "Tatiane",
  "Lucio",
  "Tassia",
  "Pedro",
  "George",
  "Dani",
  "Rafael",
  "Juliana"
]

export default props => {
  const loopNames = names => {
    return names.map(name => <li key={name}>{name}</li>)
  }

  return ( 
    <ul>
      {loopNames(personNames)}
    </ul> 
  )
}