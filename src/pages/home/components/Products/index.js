/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { ScrollView } from 'react-native';
import ProductComponent, { Product } from 'pages/home/components/Products/components/Product';

import styles from './styles';

const Products = props => (
  <ScrollView
    style={styles.productsContainer}
    contentContainerStyle={styles.productsContentContainer}
    showsVerticalScrollIndicator={false}
  >
    { props.products.map(product => (
      <ProductComponent
        key={product.id}
        categoryID={props.categoryID}
        product={product}
      />
    ))}
  </ScrollView>
);

Products.propTypes = {
  categoryID: PropTypes.number,
  products: PropTypes.arrayOf(Product.propTypes.product),
};

Products.defaultProps = {
  categoryID: 1,
  products: [],
};

export default Products;

