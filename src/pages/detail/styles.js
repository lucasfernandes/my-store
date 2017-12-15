import { StyleSheet } from 'react-native';
import { colors, metrics, fonts, general } from 'styles';

const styles = StyleSheet.create({

  ...general,

  productContainer: {
    flex: 1,
    minHeight: 458,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.baseMargin,
    margin: metrics.baseMargin,
  },

  image: {
    width: '100%',
    height: 285,
    alignSelf: 'center',
    resizeMode: 'contain',
  },

  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: metrics.baseMargin,
  },

  left: {
    flex: 1,
  },

  title: {
    marginTop: metrics.smallMargin,
    fontSize: fonts.huge,
    color: colors.darker,
    fontWeight: 'bold',
  },

  brand: {
    marginTop: metrics.smallMargin / 3,
    fontSize: fonts.regular,
    color: colors.gray,
  },

  price: {
    marginTop: metrics.smallMargin,
    fontSize: fonts.cyclop,
    color: colors.green,
    fontWeight: 'bold',
  },

  hidden: {
    width: metrics.baseMargin,
  },

  button: {
    marginTop: metrics.baseMargin,
  },
});

export default styles;
