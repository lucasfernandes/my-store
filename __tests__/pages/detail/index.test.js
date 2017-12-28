import React from 'react';

import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import CartActions from 'store/ducks/cart';

import { Platform, Text } from 'react-native';

import Detail from 'pages/detail';

const initialState = {
  navigation: {
    state: {
      params: {
        mixedID: '#1@1',
        product: {
          id: 1,
          name: 'Camiseta Hyperas Preta',
          brand: 'Quiksilver',
          image: 'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
          price: 49.99,
        },
      },
    },
  },
  cart: {
    data: [],
    loading: false,
    added: false,
    error: false,
    badges: 0,
  },
};

const fullState = {
  navigation: {
    state: {
      params: {
        mixedID: '#1@1',
        product: {
          id: 1,
          name: 'Camiseta Hyperas Preta',
          brand: 'Quiksilver',
          image: 'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
          price: 49.99,
        },
      },
    },
  },
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
    added: true,
    error: false,
    badges: 2,
  },
};

const mockStore = configureStore([]);

describe('Testing Detail', () => {
  let store = mockStore(initialState);

  const createWrapper = (state = initialState) => shallow(
    <Detail
      navigation={state.navigation}
    />,
    { context: { store } },
  );

  it('render as expected', () => {
    const wrapper = createWrapper();
    expect(wrapper.prop('navigation')).toEqual(initialState.navigation);

    expect(wrapper.dive().find(Text)
      .first()
      .children()
      .text()).toEqual(initialState.navigation.state.params.product.name);
  });

  it('render correct price', () => {
    Platform.OS = 'android';
    const wrapper = createWrapper();

    expect(wrapper.dive().find(Text)
      .last()
      .children()
      .text()).toEqual(`R$${initialState.navigation.state.params.product.price.toFixed(2)}`);
  });

  it('can add to cart', () => {
    const wrapper = createWrapper();
    const { mixedID, product } = initialState.navigation.state.params;

    wrapper.dive().find({ id: 'button' }).simulate('press');

    expect(store.getActions())
      .toContainEqual(CartActions.cartAddToCart(mixedID, product));
  });

  it('can remove from cart', () => {
    store = mockStore(fullState);
    const wrapper = createWrapper(fullState);
    const { id, product } = wrapper.prop('cart').data[0];

    wrapper.dive().find({ id: 'button' }).simulate('press');
    expect(store.getActions()).toContainEqual(CartActions.cartRemoveFromCart(id, product));
  });
});
