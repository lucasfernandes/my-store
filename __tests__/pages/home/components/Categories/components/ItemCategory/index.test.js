import React from 'react';

import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import CategoriesActions from 'store/ducks/categories';

import { TouchableOpacity, Text } from 'react-native';
import ItemCategoryComponent from 'pages/home/components/Categories/components/ItemCategory';


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
  let store = mockStore(initialState);

  const createWrapper = (category, active) => shallow(
    <ItemCategoryComponent
      category={category}
      active={(category.id === active)}
    />,
    { context: { store } },
  );

  it('render as expected', () => {
    store = mockStore(initialState);
    const wrapper = createWrapper(initialState.categories.data[0], 1);

    expect(wrapper.dive().find(TouchableOpacity)).toHaveLength(1);
    expect(wrapper.dive().find(Text).prop('children'))
      .toEqual(initialState.categories.data[0].title.toUpperCase());
  });

  it('set active category and request its products', () => {
    store = mockStore(initialState);
    const wrapper = createWrapper(initialState.categories.data[0], 1);

    expect(wrapper.dive().find(TouchableOpacity)).toHaveLength(1);

    wrapper.dive().find(TouchableOpacity).simulate('press');

    const actions = store.getActions();
    expect(actions[0]).toEqual(CategoriesActions.categoriesSetActiveCategory(1));
  });

  it('should toogle between active items', () => {
    store = mockStore(initialState);
    const wrapper = createWrapper(initialState.categories.data[0], 2);

    expect(wrapper.prop('active')).toBe(false);
    expect(wrapper.dive().find(Text).hasClass('title-active')).toBe(false);

    const wrapperActive = createWrapper(initialState.categories.data[0], 1);
    expect(wrapperActive.prop('active')).toBe(true);
    expect(wrapperActive.dive().find(Text).hasClass('title-active')).toBe(true);
  });
});
