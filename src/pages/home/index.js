/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, ActivityIndicator } from 'react-native';
import Header from 'components/Header';
import Categories from 'pages/home/components/Categories';
import Products from 'pages/home/components/Products';

/* Redux */
import { connect } from 'react-redux';
import CategoriesActions from 'store/ducks/categories';
import CategoryProductsActions from 'store/ducks/categoryProducts';

import { colors } from 'styles';
import styles from './styles';

class Home extends Component {
  static propTypes = {
    categoriesRequest: PropTypes.func.isRequired,
    categoryProductsRequest: PropTypes.func.isRequired,
    categories: PropTypes.shape({
      data: Categories.propTypes.category,
      loading: PropTypes.bool,
      error: PropTypes.bool,
      active: PropTypes.number,
    }).isRequired,
    categoryProducts: PropTypes.shape({
      data: PropTypes.shape({
        id: PropTypes.number,
        products: Products.propTypes.product,
      }),
      loading: PropTypes.bool,
      error: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    this.props.categoriesRequest();
    if (Object.keys(this.props.categoryProducts.data).length === 0) {
      this.props.categoryProductsRequest(1);
    }
  }

  render() {
    const { id: categoryID, products } = this.props.categoryProducts.data;
    return (
      <View style={styles.container}>
        <Header title="Minha Loja" />
        <Categories categories={this.props.categories.data} active={this.props.categories.active} />
        { this.props.categoryProducts.loading
            ? <ActivityIndicator size="large" color={colors.darker} style={styles.loading} />
            : <Products categoryID={categoryID} products={products} /> }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  categoryProducts: state.categoryProducts,
});

const mapDispatchToProps = dispatch => ({
  categoriesRequest: () => dispatch(CategoriesActions.categoriesRequest()),
  categoryProductsRequest: category =>
    dispatch(CategoryProductsActions.categoryProductsRequest(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
