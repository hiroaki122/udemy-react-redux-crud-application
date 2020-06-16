// import React from 'react';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';


const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = { count: 0}
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1})
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1})
  }

  render() {
    return (
    <React.Fragment>
      <div>count: {this.state.count}</div>
      <button onClick={this.handlePlusButton}>+1</button>
      <button onClick={this.handleMinusButton}>-1</button>
    </React.Fragment>
    )
  }
}



export default App;
