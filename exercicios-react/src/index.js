import React from "react"
import ReactDom from "react-dom"

// import FirstComponent from "./components/FirstComponent"
// import {CompA, CompB as B} from "./components/MultipleComponents"
// import CompA, { CompB as B } from "./components/MultipleComponents"
// import MultiElements from "./components/MultipleElements"
// import MaioliniFamily from "./components/MaioliniFamily"
// import Family from "./components/Family"
// import Member from "./components/Member"
// import ComponentWithFunction from "./components/ComponentWithFunction"
// import Father from "./components/Father"
// import ClassComponent from "./components/ClassComponent"
// import Counter from "./components/Counter"
import Hooks from "./components/Hooks"

const el = document.getElementById("root")
ReactDom.render(
  <div>
    <Hooks />
    {/* <Counter numberInit={0} /> */}
    {/* <ClassComponent text="Hello Class Component!!!" /> */}
    {/* <Father /> */}
    {/* <ComponentWithFunction /> */}
    {/* <Family sobrenome="de Matos">
      <Member nome="Ivone" idade="75" />
      <Member nome="Solange" idade="65" />
      <Member nome="Tatiane" idade="35" />
    </Family>
    <Family sobrenome="Manoel">
      <Member nome="Luiz" idade="68" />
      <Member nome="Renata" idade="65" />
      <Member nome="Lucio" idade="35" />
      <Member nome="Nadia" idade="32" />
    </Family>
    <MaioliniFamily sobrenome="Maiolini" /> */}
    {/* <FirstComponent valor="Passando Prop" qqNomeDeProp={Math.pow(2, 8)} /> */}
    {/* <CompA valor="Valor 1" /> */}
    {/* <B valor="Valor 2" /> */}
    {/* <MultiElements /> */}
  </div>, 
  el
)