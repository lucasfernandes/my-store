import React from 'react';

import { shallow } from 'enzyme';
import sinon from 'sinon';

import Footer from 'components/Footer';
import NavigationTabs from 'components/Footer/components/NavigationTabs';
import TabItem from 'components/Footer/components/NavigationTabs/components/TabItem';

import { View } from 'react-native';

const props = {
  "navigationState": {
    "routes": [
      {
        "index": 0,
        "routes": [
          {
            "routeName": "Home",
            "key": "Init-id-1513555993000-0"
          }
        ],
        "key": "Home",
        "routeName": "Home"
      },
      {
        "key": "Cart",
        "routeName": "Cart"
      }
    ],
    "index": 0
  },
};

describe('Testing Footer', () => {
  it('render as expected', () => {
    // const wrapper = shallow(<Footer {...props} />);
    // console.log(wrapper.find(View));
  });
});

