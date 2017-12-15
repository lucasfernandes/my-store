import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  productContainer: {
    width: (metrics.screenWidth / 2) - (metrics.baseMargin + metrics.smallMargin),
    minHeight: 264,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    marginRight: metrics.baseMargin,
  },

  image: {
    width: 124,
    height: 180,
    alignSelf: 'center',
    resizeMode: 'contain',
  },

  title: {
    marginTop: metrics.smallMargin,
    fontSize: fonts.big,
    color: colors.darker,
    fontWeight: 'bold',
  },

  brand: {
    marginTop: metrics.smallMargin / 3,
    fontSize: fonts.small,
    color: colors.gray,
  },

  price: {
    marginTop: metrics.smallMargin,
    fontSize: fonts.big,
    color: colors.green,
    fontWeight: 'bold',
  },
});

export default styles;
