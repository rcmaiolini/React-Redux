import React from "react"
import "./Button.css"

export default props => {
  let classes = "button "
  classes += props.operators ? "operators" : ""
  classes += props.double ? "double" : ""
  classes += props.triple ? "triple" : ""

  return (
    <button 
      className={classes}
      onClick={() => props.click && props.click(props.label)}>
      {props.label}
    </button>
  )
}
  