import React from "react"

export function loopChildWithProps (props) {
  return React.Children.map(props.children, compChild => {
      return React.cloneElement(compChild, { ...props })
    }
  )
}