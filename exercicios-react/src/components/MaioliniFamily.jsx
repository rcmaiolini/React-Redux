import React from "react"
import Family from "./Family"
import Member from "./Member"

export default props => 
  <div>
    <Family sobrenome={props.sobrenome}>
      <Member nome="Roberto" idade="66" />
      <Member nome="Margareth" idade="62" />
      <Member nome="Renato" idade="35" />
      <Member nome="Tico" idade="12" />
      <Member nome="Keka" idade="15" />
    </Family>
  </div>