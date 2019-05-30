import React from "react"
import { loopChildWithProps } from "../Utils"

export default props => 
  <div>
    <h1>Family</h1>

    {loopChildWithProps(props)}

    {/* {React.Children.map(
      props.children,
      compChild => {
        return React.cloneElement(compChild, { ...props })
      }
    )} */}

    {/* {React.cloneElement(
      props.children,
      {...props}
    )} */}

    {/* {React.cloneElement(
      props.children,
      props
    )} */}

    {/* {React.cloneElement(
      props.children,
      { sobrenome: props.sobrenome }
    )} */}

    {/* {props.children} */}
  </div>