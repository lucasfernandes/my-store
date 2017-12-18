import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  tabItem: {
    flex: 1,
    height: metrics.tabBarHeight,
    justifyContent: 'center',
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
