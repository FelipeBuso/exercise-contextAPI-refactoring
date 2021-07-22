
import React, { Component } from 'react';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import TrafficContext from './context/TrafficContext';

// renderSignal = (signalColor) => {
//   if (signalColor === 'red') return redSignal;
//   if (signalColor === 'yellow') return yellowSignal;
//   if (signalColor === 'green') return greenSignal;
//   return null;
// };

class TrafficSignal extends Component {
  constructor() {
    super();
    this.renderSignal = this.renderSignal.bind(this);
  }

  renderSignal = (signalColor) => {
    if (signalColor === 'red') return redSignal;
    if (signalColor === 'yellow') return yellowSignal;
    if (signalColor === 'green') return greenSignal;
    return null;
  };

  render() {
    const { color, changeSignal } = this.context
    return (
      <div>
        <div className="button-container">
          <button onClick={() => changeSignal('red')} type="button">
            Red
          </button>
          <button onClick={() => changeSignal('yellow')} type="button">
            Yellow
          </button>
          <button onClick={() => changeSignal('green')} type="button">
            Green
          </button>
        </div>
        <img className="signal" src={ this.renderSignal(color) } alt="" />
      </div>
    );
  }
};

TrafficSignal.contextType = TrafficContext;

export default TrafficSignal;
