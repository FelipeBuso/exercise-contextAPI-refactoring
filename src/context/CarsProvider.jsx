import React, { Component } from 'react'
import CarsContext from './CarsContext';

class CarsProvider extends Component {
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
      <div>
        <CarsContext.Provider value={ { ...this.state, moveCar: this.moveCar }}>
          { children }
        </CarsContext.Provider>
      </div>
    )
  }
}

export default CarsProvider;
