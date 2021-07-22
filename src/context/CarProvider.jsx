import React, { Component } from 'react'
import CarContext from './CarContext';

export default class CarProvider extends Component {
  constructor() {
    super();
    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar: false,
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      [car]: side,
    })
  }
  
  render() {
    const { children } = this.props;
    return (
      <CarContext.Provider value={ { ...this.state, moveCar: this.moveCar } }>
         { children }
      </CarContext.Provider>
    )
  }
}
