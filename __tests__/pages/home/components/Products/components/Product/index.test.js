import React from 'react';
import { NavigationActions } from 'react-navigation';

import { shallow } from 'enzyme';
import sinon from 'sinon';
import configureStore from 'redux-mock-store';
// import CategoryProductsActions from 'store/ducks/categoryProducts';

import { TouchableOpacity, Text, Platform } from 'react-native';
import ProductComponent from 'pages/home/components/Products/components/Product';
// import styles from 'pages/home/components/Products/components/Product/styles';

const initialState = {
  mixedID: '#1@1',
  product: {
    id: 1,
    name: 'Camiseta Hyperas Preta',
    brand: 'Quiksilver',
    image: 'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
    price: 49.99,
  },
};

const mockStore = configureStore([]);

describe('Testing Product', () => {
  const store = mockStore(initialState);
  const createWrapper = () => shallow(
    <ProductComponent
      mixedID={initialState.mixedID}
      product={initialState.product}
    />,
    { context: { store } },
  );

  it('render as expected', () => {
    const wrapper = createWrapper();

    expect(wrapper.dive().find(Text)
      .first()
      .children()
      .text()).toEqual(initialState.product.name);
  });

  it('render correct price', () => {
    Platform.OS = 'android';
    const wrapper = createWrapper();

    expect(wrapper.dive().find(Text)
      .last()
      .children()
      .text()).toEqual(`R$${initialState.product.price.toFixed(2)}`);
  });

  it('can press button to navigate', () => {
    sinon.spy(NavigationActions, 'navigate');
    const wrapper = createWrapper();

    wrapper.dive().find(TouchableOpacity).simulate('press');
    expect(NavigationActions.navigate.calledOnce).toBe(true);
  });
});
