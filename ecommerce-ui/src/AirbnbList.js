import React from 'react';
import PropTypes from 'prop-types';
import Airbnb from './Airbnb.js';
import CardDeck from 'react-bootstrap/CardDeck';

export default class AirbnbList extends React.Component {

  static propTypes = {
    items: PropTypes.array,
    onAddToCart: PropTypes.func
  }

  render() {
    const airbnbList = this.props.items
    .map((item, idx) => {
      return (
        <Airbnb
        title={item.title}
        houseType={item.houseType}
        image={item.image}
        city={item.location.city}
        country={item.location.country}
        cost={item.payment.cost}
        buttonText="Add to cart"
        buttonVarient="primary"
        onClick={this.props.onAddToCart}
        description={item.payment.description}
        isInCart={false}
        idx={idx}
        key={idx}
      />
      );
    });

      return (
        <div>
          <CardDeck>
          {airbnbList}
          </CardDeck>
        </div>
      )
    }
}