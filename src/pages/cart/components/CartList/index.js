/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { ScrollView } from 'react-native';

import CartListItemComponent, { CartListItem } from './components/CartListItem';
import styles from './styles';

const CartList = ({ cartList }) => (

  <ScrollView style={styles.container}>
    { cartList.map(cartListItem => (
      <CartListItemComponent
        key={cartListItem.id}
        cartListItem={cartListItem}
      />
    ))}
  </ScrollView>
);

CartList.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.shape({
    cartListItem: CartListItem.propTypes.cartListItem,
  })),
};

CartList.defaultProps = {
  cartList: [],
};

export default CartList;
