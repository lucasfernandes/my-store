import { StyleSheet } from 'react-native';
import { colors, metrics, fonts, general } from 'styles';

const styles = StyleSheet.create({

  ...general,

  listContainer: {
    flex: 1,
    minHeight: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.baseMargin,
    marginTop: metrics.smallMargin,
    marginHorizontal: metrics.baseMargin,
  },

  textContainer: {
    flex: 2,
    marginHorizontal: metrics.baseMargin,
  },

  image: {
    width: 41,
    height: 60,
    resizeMode: 'contain',
  },

  title: {
    fontSize: fonts.big,
    color: colors.darker,
    fontWeight: 'bold',
  },

  brand: {
    fontSize: fonts.small,
    color: colors.gray,
  },

  price: {
    marginTop: metrics.smallMargin / 2,
    fontSize: fonts.big,
    color: colors.green,
    fontWeight: 'bold',
  },

  textInput: {
    width: 40,
    height: 27,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: metrics.baseRadius,
    padding: 5,
    fontSize: fonts.big,
    color: colors.dark,
    fontWeight: 'bold',
  },

  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
