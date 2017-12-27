import React from 'react';

import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import CategoriesActions from 'store/ducks/categories';
import CategoryProductsActions from 'store/ducks/categoryProducts';

import { ActivityIndicator } from 'react-native';

import Home from 'pages/home';

const initialState = {
  categories: {
    data: [],
    loading: false,
    active: 1,
    error: false,
  },
  categoryProducts: {
    data: {},
    loading: false,
    error: false,
  },
};

const categoriesState = {
  categories: {
    data: [
      {
        id: 1,
        title: 'Camisetas',
      },
      {
        id: 2,
        title: 'Camisas',
      },
      {
        id: 3,
        title: 'Calças',
      },
      {
        id: 4,
        title: 'Blusas',
      },
      {
        id: 5,
        title: 'Bonés',
      },
      {
        id: 6,
        title: 'Casacos',
      },
    ],
    loading: false,
    active: 1,
    error: false,
  },
  categoryProducts: {
    data: {},
    loading: false,
    error: false,
  },
};

const stateLoading = {
  categories: {
    data: [
      {
        id: 1,
        title: 'Camisetas',
      },
      {
        id: 2,
        title: 'Camisas',
      },
      {
        id: 3,
        title: 'Calças',
      },
      {
        id: 4,
        title: 'Blusas',
      },
      {
        id: 5,
        title: 'Bonés',
      },
      {
        id: 6,
        title: 'Casacos',
      },
    ],
    loading: false,
    active: 1,
    error: false,
  },
  categoryProducts: {
    data: {},
    loading: true,
    error: false,
  },
};

const lastState = {
  categories: {
    data: [
      {
        id: 1,
        title: 'Camisetas',
      },
      {
        id: 2,
        title: 'Camisas',
      },
      {
        id: 3,
        title: 'Calças',
      },
      {
        id: 4,
        title: 'Blusas',
      },
      {
        id: 5,
        title: 'Bonés',
      },
      {
        id: 6,
        title: 'Casacos',
      },
    ],
    loading: false,
    active: 1,
    error: false,
  },
  categoryProducts: {
    data: {
      id: 1,
      products: [
        {
          id: 1,
          name: 'Camiseta Hyperas Preta',
          brand: 'Quiksilver',
          image: 'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
          price: 49.99,
        },
        {
          id: 2,
          name: 'Camiseta Double Tap Preta',
          brand: 'Quiksilver',
          image: 'https://t-static.dafiti.com.br/EpEXepU-tSbgo6ZMl4Y5BOdjelw=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-double-tap-preta-7115-8165043-1-product.jpg',
          price: 59.99,
        },
        {
          id: 3,
          name: 'Camiseta Logo Azul',
          brand: 'Red Bull',
          image: 'https://t-static.dafiti.com.br/aC9871vKWfL3bDgbhLx5sFLa7xs=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fred-bull-camiseta-red-bull-logo-azul-0272-7714033-1-product.jpg',
          price: 54.99,
        },
        {
          id: 4,
          name: 'Camiseta Primo Tipper',
          brand: 'Rip Curl',
          image: 'https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg',
          price: 39.99,
        },
      ],
    },
    loading: false,
    error: false,
  },
};

const mockStore = configureStore([]);

describe('Testing Home', () => {
  let store = mockStore(initialState);

  function createWrapper(state = initialState) {
    store = mockStore(state);
    return shallow(
      <Home />,
      { context: { store } },
    );
  }

  it('shows loading when requesting data', () => {
    const wrapper = createWrapper(stateLoading);
    expect(wrapper.prop('categoryProducts').loading).toBe(true);
    expect(wrapper.dive().find(ActivityIndicator)).toHaveLength(1);
  });

  it('can request categories when did mount', () => {
    const wrapper = createWrapper();

    wrapper.dive().instance().componentDidMount();
    expect(store.getActions()).toContainEqual(CategoriesActions.categoriesRequest());
  });

  it('can request categories and products when did mount', () => {
    const wrapper = createWrapper(categoriesState);

    wrapper.dive().instance().componentDidMount();
    const actions = store.getActions();

    expect(actions[0]).toEqual(CategoriesActions.categoriesRequest());
    expect(actions[1]).toEqual(CategoryProductsActions.categoryProductsRequest(1));
  });

  it('should not request products when its already loaded', () => {
    const wrapper = createWrapper(lastState);

    wrapper.dive().instance().componentDidMount();

    expect(store.getActions()).not.toContainEqual(CategoryProductsActions.categoryProductsRequest);
  });
});
