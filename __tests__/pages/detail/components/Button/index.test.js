import React from 'react';

import { shallow } from 'enzyme';

import { Text } from 'react-native';

import Button from 'pages/detail/components/Button';

import { colors } from 'styles';


describe('Testing Badge', () => {
  it('render as expected', () => {
    const wrapper = shallow(<Button color={colors.green} onPress={() => {}}>My Button</Button>);

    expect(wrapper.find(Text).children().text()).toEqual('My Button');
  });
});
