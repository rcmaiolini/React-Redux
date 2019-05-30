import React, { Component } from "react"

export default class Counter extends Component {
  // Soluçao 01 - Bind no construtor
  // constructor(props) {
  //   super(props)
  //   this.addNumber = this.addNumber.bind(this)
  // }

  state = {
    number: this.props.numberInit
  }

  // Soluçao 03 - Funçao Arrow
  // addNumber = () => this.setState({ number: this.state.number + 1 })
  addNumber = (e) => {
    console.log(e)
    this.fullChange(1)
  }

  // subNumber = () => this.setState({ number: this.state.number - 1 })
  subNumber = () => this.fullChange(-1)

  fullChange = dif => this.setState({ number: this.state.number + dif })

  render() {
    return (
      <div>
        <p>Number: {this.state.number}</p>
        <button onClick={this.addNumber}>Increase +</button>
        {/* Soluçao 02 - Funçao Arrow no onclick*/}
        {/* <button onClick={() => this.addNumber()}>Increase +</button> */}
        <button onClick={this.subNumber}>Decrease -</button>
        <br/>
        <button onClick={() => this.fullChange(10)}>Increase +10</button>
        <button onClick={() => this.fullChange(-10)}>Decrease -10</button>
      </div>
    );
  }
}