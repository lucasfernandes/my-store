import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },

  activeIcon: {
    color: colors.red,
  },

  inactiveIcon: {
    color: colors.gray,
  },

});

export default styles;
