import React from 'react';

import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import CartActions from 'store/ducks/cart';

import { Text, TouchableOpacity, Platform, TextInput } from 'react-native';

import CartListItemComponent from 'pages/cart/components/CartList/components/CartListItem';

const state = {
  data:
  {
    id: '#1@1',
    amount: 1,
    product: {
      id: 1,
      name: 'Camiseta Hyperas Preta',
      brand: 'Quiksilver',
      image: 'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
      price: 49.99,
    },
  },
};

const mockStore = configureStore([]);

describe('Testing Cart List Item', () => {
  const store = mockStore(state);

  const createWrapper = () => shallow(
    <CartListItemComponent cartListItem={state.data} />,
    { context: { store } },
  );

  it('render as expected', () => {
    const wrapper = createWrapper();

    expect(wrapper.prop('cartListItem')).toEqual(state.data);
    expect(wrapper.dive().find(Text).first().children()
      .text()).toEqual(state.data.product.name);
  });

  it('render item with correct price', () => {
    Platform.OS = 'android';
    const wrapper = createWrapper();

    expect(wrapper.dive().find(Text)
      .last()
      .children()
      .text()).toEqual(`R$${state.data.product.price.toFixed(2)}`);
  });

  it('can remove form item from cart', () => {
    const wrapper = createWrapper();

    wrapper.dive().find(TouchableOpacity).simulate('press');
    expect(store.getActions()).toContainEqual(CartActions.cartRemoveFromCart(state.data.id));
  });

  it('can change the item quantity', () => {
    const wrapper = createWrapper();
    wrapper.dive().find(TextInput).simulate('changeText', '3');

    expect(store.getActions())
      .toContainEqual(CartActions.cartUpdateProductAmount(state.data.id, 3));
  });

  it('cannot change the item quantity with wrong value', () => {
    const wrapper = createWrapper();
    wrapper.dive().find(TextInput).simulate('changeText', 'L');

    expect(store.getActions())
      .not
      .toContainEqual(CartActions.cartUpdateProductAmount(state.data.id, 'L'));
  });
});
