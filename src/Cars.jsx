// src/Cars.jsx

// import PropTypes from 'prop-types';
import React from 'react';
// import { connect } from 'react-redux';
import MyContext from './context/CarContext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
// import { moveCar } from './redux/actionCreators';

function Cars({ redCar, blueCar, yellowCar }) {
  return (
    <MyContext.Consumer>
      { (value) => (
      <div>
        <div>
          <img
            className={value.redCar ? 'car-right' : 'car-left'}
            src={carRed}
            alt="red car"
          />
          <button
            onClick={() => value.moveCar('red', !redCar)}
            type="button"
          >
            Move
          </button>
        </div>
        <div>
          <img
            className={value.blueCar ? 'car-right' : 'car-left'}
            src={carBlue}
            alt="blue car"
          />
          <button
            onClick={() => value.moveCar('blue', !blueCar)}
            type="button"
          >
            Move
          </button>
        </div>
        <div>
          <img
            className={value.yellowCar ? 'car-right' : 'car-left'}
            src={carYellow}
            alt="yellow car"
          />
          <button
            onClick={() => value.moveCar('yellow', !yellowCar)}
            type="button"
          >
            Move
          </button>
        </div>
      </div>
      )
    }
    </MyContext.Consumer>
  );
}

// Cars.propTypes = {
//   moveCar: PropTypes.func.isRequired,
//   blueCar: PropTypes.bool.isRequired,
//   redCar: PropTypes.bool.isRequired,
//   yellowCar: PropTypes.bool.isRequired,
// };

// const mapStateToProps = (state) => ({
//   redCar: state.cars.red,
//   blueCar: state.cars.blue,
//   yellowCar: state.cars.yellow});

// const mapDispatchToProps = { moveCar };

export default Cars;
