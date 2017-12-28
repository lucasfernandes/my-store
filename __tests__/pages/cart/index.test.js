import React from 'react';

import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import Cart from 'pages/cart';

const initialState = {
  cart: {
    data: [],
    loading: false,
    added: false,
    error: false,
    badges: 0,
  },
};

const fullState = {
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
      },
    ],
    loading: false,
    added: false,
    error: false,
    badges: 0,
  },
};

const mockStore = configureStore([]);

describe('Testing Cart', () => {
  const store = mockStore(initialState);

  it('render empty', () => {
    const wrapper = shallow(<Cart />, { context: { store } });

    expect(wrapper.dive().children().last().children()
      .text()).toEqual('Adicione um produto a sua lista de compras.');
  });

  it('render as expected', () => {
    const newStore = mockStore(fullState);
    const wrapper = shallow(<Cart />, { context: { store: newStore } });

    expect(wrapper.dive().children().last().dive()
      .first()
      .text()).toBe('<Amount />');
  });
});
