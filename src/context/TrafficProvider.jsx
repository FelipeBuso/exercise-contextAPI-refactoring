import React, { Component } from 'react';
import TrafficContext from './TrafficContext';

export default class TrafficProvider extends Component {
  constructor() {
    super();
    this.state = {
      color: 'red'
    }
    this.changeColorTraffic = this.changeColorTraffic.bind(this);
  }

  changeColorTraffic(color) {
    this.setState({
      color,
    })
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <TrafficContext.Provider value ={ { ...this.state, changeSignal: this.changeColorTraffic }}>
          { children }
        </TrafficContext.Provider>
      </div>
    )
  }
}
