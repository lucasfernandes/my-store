/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Image, Text, Platform } from 'react-native';

/* Redux */
import { connect } from 'react-redux';
import CartActions from 'store/ducks/cart';

import Header from 'components/Header';
import { Product } from 'pages/home/components/Products/components/Product';
import CartList from 'pages/cart/components/CartList';

import styles from './styles';
import Button from './components/Button';

class Detail extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          mixedID: PropTypes.string,
          product: Product.propTypes.product,
        }),
      }),
    }).isRequired,
    cart: PropTypes.shape({
      data: CartList.propTypes.cartListItem,
    }).isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
  };

  toogleItemCart = () => {
    const { mixedID, product } = this.props.navigation.state.params;
    const added = this.checkIsAdded(mixedID, this.props.cart.data);

    if (added) {
      this.props.removeFromCart(mixedID);
    } else {
      this.props.addToCart(mixedID, product);
    }
  }

  checkIsAdded = (id, data) => (
    data.some(item => item.id === id)
  );

  render() {
    const { mixedID, product } = this.props.navigation.state.params;
    const formatedPrice = Platform.OS === 'ios'
      ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)
      : `R$${product.price.toFixed(2)}`;

    const added = this.checkIsAdded(mixedID, this.props.cart.data);

    return (
      <View style={styles.container}>
        <Header title="Detalhes" backEnabled />

        <View style={styles.productContainer}>
          <Image
            style={styles.image}
            source={{ uri: product.image }}
          />
          <View style={styles.textContainer}>
            <View style={styles.left}>
              <Text style={styles.title}>{product.name}</Text>
              <Text style={styles.brand}>{product.brand}</Text>
            </View>
            <View style={styles.hidden} />
            <Text style={styles.price}>{formatedPrice}</Text>
          </View>

          <Button
            color={added ? 'red' : 'green'}
            onPress={this.toogleItemCart}
            style={styles.button}
            id="button"
          >
            {added ? 'Remover do carinho' : 'Adicionar ao carrinho'}
          </Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  addToCart: (id, product) =>
    dispatch(CartActions.cartAddToCart(id, product)),
  removeFromCart: id =>
    dispatch(CartActions.cartRemoveFromCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

