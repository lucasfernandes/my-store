import React from 'react';
import { shallow } from 'enzyme';

import CartList from 'pages/cart/components/CartList';

const state = {
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
      {
        id: '#1@2',
        product: {
          id: 1,
          name: 'Calça Hyperas Preta 2',
          brand: 'Quiksilver',
          image: 'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
          price: 50.99,
        },
      },
    ],
    loading: false,
    added: false,
    error: false,
    badges: 0,
  },
};

describe('Testing Cart', () => {
  it('render an empty list', () => {
    const wrapper = shallow(<CartList />);
    expect(wrapper.children()).toHaveLength(0);
  });

  it('should render 2 items', () => {
    const wrapper = shallow(<CartList cartList={state.cart.data} />);

    expect(wrapper.children()).toHaveLength(2);
  });
});
