import React from 'react';
import ShoppingCart from './ShoppingCart';
import { shallow } from 'enzyme';

const testAirbnb = {
  "title": "Denver apartment outside Union Station",
  "houseType": "Apartment",
  "image": "https://images.unsplash.com/photo-1519424187720-db6d0fc5a5d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=19f783ae564d7c6da4777cde1a84c1c9&auto=format&fit=crop&w=500&q=80",
  "location": {
    "city": "Denver",
    "country": "USA"
  },
  "payment": {
    "cost": 130,
    "description": ""
  },
  "host": {
    "name": "Jamie",
    "isSuperhost": true
  },
  "rating": {
    "stars": 4.5,
    "reviews": 381
  }
};

it('shallow renders ShoppingCart', () => {
  const wrapper = shallow(
    <ShoppingCart
      items={[testAirbnb]}
      onRemoveFromCart={() => { }}
    />
  );
  expect(wrapper).toMatchSnapshot();
});