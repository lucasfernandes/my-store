/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text } from 'react-native';

import styles from './styles';

const Badge = props => (
  <View style={styles.container}>
    <Text style={styles.content}>{props.value}</Text>
  </View>
);

Badge.propTypes = {
  value: PropTypes.number,
};

Badge.defaultProps = {
  value: 0,
};

export default Badge;
