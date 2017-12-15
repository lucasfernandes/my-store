/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Image, Text, TouchableOpacity } from 'react-native';

/* Redux */
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import styles from './styles';

export class Product extends Component {
  static propTypes = {
    categoryID: PropTypes.number.isRequired,
    product: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      brand: PropTypes.string,
      price: PropTypes.number,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  static state = {}

  navigateToDetail = () => {
    const { categoryID, product, dispatch } = this.props;

    return dispatch(NavigationActions.navigate({
      routeName: 'Detail',
      params: { categoryID, product },
    }));
  }

  render() {
    const { product } = this.props;
    const formatedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price);

    return (
      <TouchableOpacity
        style={styles.productContainer}
        onPress={() => this.navigateToDetail(product)}
        activeOpacity={0.6}
      >
        <Image
          style={styles.image}
          source={{ uri: product.image }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.brand}>{product.brand}</Text>
          <Text style={styles.price}>{formatedPrice}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default connect()(Product);

