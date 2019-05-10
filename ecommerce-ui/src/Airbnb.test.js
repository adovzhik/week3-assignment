import React from 'react';
import Airbnb from './Airbnb';
import { shallow } from 'enzyme';

it('shallow renders', () => {
  const wrapper = shallow(
    <Airbnb
      title={"test property"}
      houseType={"house"}
      image={"https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"}
      city={"Portland"}
      country={"USA"}
      cost={100}
      onClick={() => console.log("clicked!")}
      description={"test description"}
      isInCart={false}
      buttonText={"Add"}
      buttonVarient={"primary"}
      idx={0}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
