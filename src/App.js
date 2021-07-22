import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import CarsProvider from './context/CarsProvider';
import TrafficProvider from './context/TrafficProvider';

function App() {
  return (
    <div className="container">
      <CarsProvider>
        <Cars />
      </CarsProvider>
      <TrafficProvider>
        <TrafficSignal />
      </TrafficProvider>
    </div>
  );
}

export default App;
