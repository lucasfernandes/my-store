/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text } from 'react-native';
import Header from 'components/Header';

/* Redux */
import { connect } from 'react-redux';

import CartList from './components/CartList';
import Amount from './components/Amount';
import styles from './styles';

const renderEmpty = () => (
  <Text style={styles.empty}>
    Adicione um produto a sua lista de compras.
  </Text>
);

const Cart = props => (
  <View style={styles.container}>
    <Header title="Carrinho" />
    <CartList cartList={props.cart.data} />
    { props.cart.data.length > 0
      ? <Amount />
      : renderEmpty()}
  </View>
);

Cart.propTypes = {
  cart: PropTypes.shape({
    data: CartList.propTypes.cartListItem,
  }).isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
