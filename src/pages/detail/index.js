/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Image, Text } from 'react-native';

/* Redux */
import { connect } from 'react-redux';
import CartActions from 'store/ducks/cart';

import Header from 'components/Header';
import { Product } from 'pages/home/components/Products/components/Product';
import styles from './styles';
import Button from './components/Button';

export class Detail extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          categoryID: PropTypes.number,
          product: Product.propTypes.product,
        }),
      }),
    }).isRequired,
    cart: PropTypes.shape({
      // data:
    }).isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
  };

  toogleItemCart = () => {
    const { categoryID, product } = this.props.navigation.state.params;
    const added = this.checkIsAdded(categoryID, product.id, this.props.cart.data);

    if (added) {
      this.props.removeFromCart(categoryID, product.id);
    } else {
      this.props.addToCart(categoryID, product.id);
    }
  }

  checkIsAdded = (categoryID, productID, data) => (
    data.some(item =>
      item.categoryID === categoryID && item.productID === productID)
  );


  render() {
    const { categoryID, product } = this.props.navigation.state.params;
    const formatedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price);
    const added = this.checkIsAdded(categoryID, product.id, this.props.cart.data);

    // console.tron.log(this.props.cart.data);

    return (
      <View style={styles.container}>
        <Header title="Detalhes" backEnabled />

        <View
          style={styles.productContainer}
          onPress={() => this.navigateToDetail(product)}
          activeOpacity={0.6}
        >
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
  addToCart: (categoryID, productID) => dispatch(CartActions.cartAddToCart(categoryID, productID)),
  removeFromCart: (categoryID, productID) =>
    dispatch(CartActions.cartRemoveFromCart(categoryID, productID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

