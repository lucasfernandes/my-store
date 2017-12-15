/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

import styles from './styles';

const TabItem = ({
  icon,
  onPress,
  active,
}) => (
  <TouchableOpacity
    style={styles.tabItem}
    onPress={onPress}
    activeOpacity={0.6}
  >
    <Icon name={icon} size={20} style={active ? styles.activeIcon : styles.inactiveIcon} />
  </TouchableOpacity>
);

TabItem.propTypes = {
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default TabItem;
