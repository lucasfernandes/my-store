import React from 'react';

import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import { ScrollView } from 'react-native';
import Categories from 'pages/home/components/Categories';
// import { ItemCategory } from 'pages/home/components/Categories/components/ItemCategory';

const initialState = {
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
};

const mockStore = configureStore([]);

describe('Testing Categories', () => {
  const store = mockStore(initialState);

  it('render map list', () => {
    const wrapper = shallow(
      <Categories
        active={initialState.categories.active}
        categories={initialState.categories.data}
      />,
      { context: { store } },
    );

    expect(wrapper.find(ScrollView).children()).toHaveLength(6);
    expect(wrapper.find(ScrollView).children().first().dive()
      .first()
      .name()).toEqual('ItemCategory');
  });
});
