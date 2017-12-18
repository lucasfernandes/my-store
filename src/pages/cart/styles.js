import { StyleSheet } from 'react-native';
import { general, fonts, colors } from 'styles';

const styles = StyleSheet.create({
  ...general,

  empty: {
    flex: 1,
    alignSelf: 'center',
    fontSize: fonts.big,
    color: colors.dark,
  },
});

export default styles;
