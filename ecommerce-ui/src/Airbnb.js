import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Airbnb extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    houseType: PropTypes.string,
    image: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    cost: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    description: PropTypes.string,
    isInCart: PropTypes.bool,
    buttonText: PropTypes.string.isRequired,
    buttonVarient: PropTypes.string,
    idx: PropTypes.number
  }

  render() {
    const {
      title, houseType, image, city, country, cost, onClick, 
      description, isInCart, buttonText, buttonVarient, idx
    } = this.props;

    return (
      <Card style={isInCart ? { width: '12rem' } : null}>
        <Card.Img src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <small>{city}, {country} • {houseType}</small>
            <br />
            ${cost} per night
            <br />
            <i>{description}</i>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button
            variant={buttonVarient}
            onClick={() => onClick(idx)}>
            {buttonText}
          </Button>
        </Card.Footer>
      </Card>
    );
  }
}

export default Airbnb;
