import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  amountContainer: {
    flex: 1,
    minHeight: 100,
    backgroundColor: colors.white,
    borderColor: colors.morning,
    borderTopWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sub: {
    fontSize: fonts.big,
    fontWeight: 'bold',
    color: colors.gray,
  },

  price: {
    lineHeight: 40,
    fontSize: fonts.cyclop,
    fontWeight: 'bold',
    color: colors.green,
  },
});

export default styles;
