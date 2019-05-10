import React, { Component } from 'react';
import airbnbs from './data/airbnbs.json';
import AirbnbList from './AirbnbList.js';
import ShoppingCart from './ShoppingCart.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      airbnbs: airbnbs,
      selectedAirbnbs: []
    }
  }

  addToCart = (idx) => {
    const selectedAirbnb = this.state.airbnbs[idx];
    if (this.state.selectedAirbnbs.includes(selectedAirbnb)) {
      alert('You already selected that option!');
      return;
    }

    this.setState(prevState => {
      return {
        selectedAirbnbs: [...prevState.selectedAirbnbs, selectedAirbnb]
      };
    });
  }

  removeFromCart = (idx) => {
    this.setState(prevState => {
      const selectedAirbnbs = [...prevState.selectedAirbnbs];
      selectedAirbnbs.splice(idx, 1);

      return {
        selectedAirbnbs
      }
    })
  }

  render() {
    return (
      <div className="App">
        <ShoppingCart
          items={this.state.selectedAirbnbs}
          onRemoveFromCart={this.removeFromCart}
        />
        <hr />
        <h1>Book your next stay now!</h1>
        <AirbnbList
          items={this.state.airbnbs}
          onAddToCart={this.addToCart}
        />
      </div>
    )
  }
}

export default App;
