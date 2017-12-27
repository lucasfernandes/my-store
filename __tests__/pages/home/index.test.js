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
});
