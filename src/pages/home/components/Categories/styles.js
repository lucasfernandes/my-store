import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

const styles = StyleSheet.create({
  categoriesContainer: {
    height: metrics.navBarHeight,
    backgroundColor: colors.red,
  },

  contentCategoriesContainer: {
    paddingHorizontal: metrics.baseMargin,
  },
});

export default styles;
