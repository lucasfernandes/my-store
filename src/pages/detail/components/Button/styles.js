import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  buttonContainer: {
    height: 45,
    borderRadius: metrics.baseRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: fonts.big,
    color: colors.white,
    fontWeight: 'bold',
  },

  'button-color-green': {
    backgroundColor: colors.green,
  },

  'button-color-red': {
    backgroundColor: colors.red,
  },
});

export default styles;
