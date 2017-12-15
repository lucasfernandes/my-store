import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: metrics.baseMargin,
    height: metrics.navBarHeight,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
  },

  title: {
    color: colors.red,
    fontSize: fonts.bigger,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  leftButton: {
    width: 20,
  },

  rightHidden: {
    width: 20,
  },
});

export default styles;
