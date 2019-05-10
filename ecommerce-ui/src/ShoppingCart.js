import React from 'react';
import PropTypes from 'prop-types';
import Airbnb from './Airbnb.js';

export default class ShoppingCart extends React.Component {

  static propTypes = {
    items: PropTypes.array,
    onRemoveFromCart: PropTypes.func
  }

  render() {
    const items = this.props.items
    .map((item, idx) => {
      return (
        <Airbnb
        title={item.title} 
        houseType={item.houseType}
        image={item.image}
        city={item.location.city}
        country={item.location.country}
        cost={item.payment.cost}
        onClick={this.props.onRemoveFromCart}
        buttonText="Remove from cart"
        buttonVarient="danger"
        description={item.payment.description}
        isInCart={true}
        idx={idx}
        key={idx}
      />
      );
    });

    const total = this.props.items.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.payment.cost;
      }, 0);

      let innerCart;
        if (total > 0) {
          innerCart = <div className='price'>{items.length} Items <br />Total: ${total}</div>
        } else {
          innerCart = <div>Shopping Cart is empty!</div>
        }

      return (
        <div>
          <h2>Shopping Cart</h2>
          <div className='ShoppingCart'>
            {items}
            {innerCart}
          </div>
        </div>
      );
    }
}