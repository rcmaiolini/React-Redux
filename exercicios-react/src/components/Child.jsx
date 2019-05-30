import React from  "react"

export default props => 
  <div>
    <button onClick={() => props.notifyProp("shopping")}>
      I am going
    </button>
  </div>