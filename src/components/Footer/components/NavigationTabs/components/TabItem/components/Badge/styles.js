import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 12,
    left: 94,
    backgroundColor: colors.green,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    width: 18,
    height: 18,
  },

  content: {
    fontSize: 10,
    backgroundColor: colors.green,
    color: colors.white,
    marginBottom: 1,
    marginRight: 0.5,
    fontWeight: 'bold',
  },
});

export default styles;
