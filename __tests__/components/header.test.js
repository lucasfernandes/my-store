import React from 'react';
import { NavigationActions } from 'react-navigation';

import { shallow } from 'enzyme';
import sinon from 'sinon';
import configureStore from 'redux-mock-store';

import { TouchableOpacity } from 'react-native';
import Header from 'components/Header/';

const initialState = {
  title: 'Carrinho',
  backEnabled: true,
};

const mockStore = configureStore([]);

describe('Testing Header', () => {
  const store = mockStore(initialState);

  it('should navigate back', () => {
    sinon.spy(NavigationActions, 'back');

    const wrapper = shallow(
      <Header {...initialState} />,
      { context: { store } },
    );

    expect(wrapper.prop('backEnabled')).toEqual(initialState.backEnabled);
    wrapper.dive().find(TouchableOpacity).simulate('press');

    expect(NavigationActions.back.calledOnce).toEqual(true);
    expect(NavigationActions.back.returnValues).toEqual([{ type: 'Navigation/BACK', key: undefined }]);
  });
});
