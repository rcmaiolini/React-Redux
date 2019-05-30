import React from "react"
import Child from "./Child"

export default props => {
  const notifyFunc = place => alert(`You are free to go to ${place}`)

  return (
    <div>
      <Child notifyProp={notifyFunc} />
    </div>
  )
}