import React from 'react';

import { shallow } from 'enzyme';

import { Text } from 'react-native';

import Badge from 'components/Footer/components/NavigationTabs/components/TabItem/components/Badge';


describe('Testing Badge', () => {
  it('render as expected', () => {
    const wrapper = shallow(<Badge value={10} />);

    expect(wrapper.find(Text).children().text()).toEqual('10');
  });
});
