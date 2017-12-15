/* Core */
import React from 'react';

/* Presentational */
import { View } from 'react-native';
import NavigationTabs from './components/NavigationTabs';

const Footer = props => (
  <View>
    <NavigationTabs {...props} />
  </View>
);

export default Footer;
