import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  category: {
    marginLeft: 30,
    justifyContent: 'center',
  },

  'category-active': {
    borderBottomColor: colors.white,
    borderBottomWidth: 5,
    paddingTop: 5,
  },

  title: {
    color: colors.white,
    fontSize: fonts.regular,
    fontWeight: 'bold',
    opacity: 0.6,
  },

  'title-active': {
    opacity: 1,
  },

  button: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
