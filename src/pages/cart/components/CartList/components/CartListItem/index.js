/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Image, Text, TextInput, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Redux */
import { connect } from 'react-redux';
import CartActions from 'store/ducks/cart';

import styles from './styles';

export class CartListItem extends Component {
  static propTypes = {
    cartListItem: PropTypes.shape({
      id: PropTypes.string,
      product: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        brand: PropTypes.string,
        price: PropTypes.number,
      }),
      amount: PropTypes.number,
    }),
    removeFromCart: PropTypes.func.isRequired,
    updateProductAmount: PropTypes.func.isRequired,
  };

  static defaultProps = {
    cartListItem: [],
  };

  handleInputChange = (amount) => {
    if (/^\d+$/.test(amount)) {
      this.props.updateProductAmount(this.props.cartListItem.id, parseInt(amount, 10));
    }
  }

  render() {
    const {
      cartListItem: {
        id, amount, product: {
          image, name, brand, price,
        },
      },
    } = this.props;

    return (
      <View style={styles.listContainer}>
        <Image
          style={styles.image}
          source={{ uri: image }}
        />

        <View style={styles.textContainer}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.brand}>{brand}</Text>
          <Text style={styles.price}>
            {
              Platform.OS === 'ios'
                ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)
                : `R$${price.toFixed(2)}`
            }
          </Text>
        </View>

        <View style={styles.right}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            maxLength={3}
            defaultValue={amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleInputChange}
          />
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => this.props.removeFromCart(id)}
          >
            <Icon name="times" size={20} color="#999999" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeFromCart: id => dispatch(CartActions.cartRemoveFromCart(id)),
  updateProductAmount: (id, amount) => dispatch(CartActions.cartUpdateProductAmount(id, amount)),
});

export default connect(null, mapDispatchToProps)(CartListItem);
