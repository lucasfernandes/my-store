import React from 'react';

import { shallow } from 'enzyme';

import TabItem from 'components/Footer/components/NavigationTabs/components/TabItem';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from 'styles';

const props = {
  icon: 'shopping-cart',
  onPress: () => {},
  active: true,
  badges: 1,
};

describe('Testing TabItem', () => {
  it('render as expected', () => {
    const wrapper = shallow(<TabItem {...props} />);

    expect(wrapper.find(TouchableOpacity)).toHaveLength(1);
    expect(wrapper.find(Icon)).toHaveLength(1);
  });

  it('render inactive tab', () => {
    const wrapper = shallow(<TabItem {...props} active={false} />);

    expect(wrapper.find(Icon).prop('style')).toEqual({ color: colors.gray });
  });
});
