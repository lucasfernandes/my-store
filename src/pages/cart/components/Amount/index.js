/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, Platform } from 'react-native';

/* Redux */
import { connect } from 'react-redux';
import { priceAmountSelector } from 'store/ducks/cart';

import styles from './styles';

const Amount = props => (
  <View style={styles.amountContainer}>
    <Text id="subtotal" style={styles.sub}>Subtotal</Text>
    <Text style={styles.price}>
      {
        Platform.OS === 'ios'
        ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.price)
        : `R$${props.price.toFixed(2)}`
      }
    </Text>
  </View>
);

Amount.propTypes = {
  price: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  price: priceAmountSelector(state),
});

export default connect(mapStateToProps)(Amount);
