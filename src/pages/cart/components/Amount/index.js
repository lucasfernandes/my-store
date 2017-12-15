/* Core */
import React from 'react';

/* Presentational */
import { View, Text } from 'react-native';

import styles from './styles';

const Amount = () => (
  <View style={styles.amountContainer}>
    <Text style={styles.sub}>Subtotal</Text>
    <Text style={styles.price}>R$200,00</Text>
  </View>
);

export default Amount;
