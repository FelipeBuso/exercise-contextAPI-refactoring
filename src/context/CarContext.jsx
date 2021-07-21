import React, { Component, createContext } from 'react'

export default class CarContext extends Component {
  constructor() {
    super();
    this.state = {
      red: false,
      blue: false,
      yellow: false,
    }
  }

  moveCar(car, side) {
    this.setState({
      [car]: side,
    })

  }
  
  render() {
    const MyContex = createContext(this.state, this.handleChangeCar);
    const { children } = this.props
    return (
      <MyContex.Provider value={ MyContex }>
          <children />
      </MyContex.Provider>
    )
  }
}
