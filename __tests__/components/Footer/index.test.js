import React from 'react';

import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import Footer from 'components/Footer';
import NavigationTabs from 'components/Footer/components/NavigationTabs';

const props = {
  layout: {
    measured: true,
    height: 647,
    width: 375,
  },
  navigationState: {
    routes: [
      {
        index: 0,
        routes: [
          {
            routeName: 'Home',
            key: 'Init-id-1514075852616-0',
          },
        ],
        key: 'Home',
        routeName: 'Home',
      },
      {
        key: 'Cart',
        routeName: 'Cart',
      },
    ],
    index: 0,
  },
  position: 0,
  jumpToIndex: 'fn()',
  getLastPosition: 'fn()',
  subscribe: 'fn()',
  navigation: {
    dispatch: 'fn()',
    state: {
      routes: [
        {
          index: 0,
          routes: [
            {
              routeName: 'Home',
              key: 'Init-id-1514075852616-0',
            },
          ],
          key: 'Home',
          routeName: 'Home',
        },
        {
          key: 'Cart',
          routeName: 'Cart',
        },
      ],
      index: 0,
    },
    goBack: 'goBack()',
    navigate: 'navigate()',
    setParams: 'setParams()',
  },
  getLabel: 'fn()',
  getTestIDProps: 'fn()',
  getOnPress: 'fn()',
  renderIcon: 'fn()',
  animationEnabled: false,
};

const initialState = {
  cart: {
    data: [
      {
        id: '#3@4',
        product: {
          id: 4,
          name: 'Camiseta Primo Tipper',
          brand: 'Rip Curl',
          image: 'https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg',
          price: 39.99,
        },
        amount: 1,
      },
      {
        id: '#1@2',
        product: {
          id: 2,
          name: 'Camiseta Double Tap Preta',
          brand: 'Quiksilver',
          image: 'https://t-static.dafiti.com.br/EpEXepU-tSbgo6ZMl4Y5BOdjelw=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-double-tap-preta-7115-8165043-1-product.jpg',
          price: 59.99,
        },
        amount: 1,
      },
    ],
    loading: false,
    added: false,
    error: false,
    badges: 1,
  },
};

const mockStore = configureStore([]);

describe('Testing Footer', () => {
  it('render as expected', () => {
    const store = mockStore(initialState);

    const wrapper = shallow(<Footer {...props} />, { context: { store } });
    const navWrapper = shallow(<NavigationTabs {...props} />, { context: { store } });

    expect(wrapper.first().children().dive().text()).toEqual(navWrapper.text());
  });
});

