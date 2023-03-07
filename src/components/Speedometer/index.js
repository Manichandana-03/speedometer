// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  accelerateOnClick = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  applyBreakOnClick = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="img-size"
        />
        <h1 className="Speed-change-para">Speed is {speed}mph</h1>
        <p className="Speed-change-para">
          Min Limit is 0mph, Max Limit is 200mph
        </p>
        <div className="buttons-container">
          <div>
            <button
              type="button"
              className="accelerate-button button"
              onClick={this.accelerateOnClick}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="apply-brake-button button"
              onClick={this.applyBreakOnClick}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
