import React from 'react';

import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import Amount from 'pages/cart/components/Amount';
// import { ItemCategory } from 'pages/home/components/Categories/components/ItemCategory';

import { Platform } from 'react-native';

const initialState = {
  cart: {
    data: [
      {
        id: '#1@1',
        product: {
          id: 1,
          name: 'Camiseta Hyperas Preta',
          brand: 'Quiksilver',
          image: 'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
          price: 49.99,
        },
        amount: 1,
      },
    ],
    loading: false,
    added: false,
    error: false,
    badges: 0,
  },
};

const mockStore = configureStore([]);

describe('Testing Amount', () => {
  const store = mockStore(initialState);

  it('render as expected', () => {
    const wrapper = shallow(
      <Amount />,
      { context: { store } },
    );

    expect(wrapper.dive().children().last().children()
      .text()).toEqual('R$49,99');
  });

  it('render correct price when is andoid', () => {
    Platform.OS = 'android';

    const wrapper = shallow(
      <Amount />,
      { context: { store } },
    );

    expect(wrapper.dive().children().last().children()
      .text()).toEqual('R$49.99');
  });
});
