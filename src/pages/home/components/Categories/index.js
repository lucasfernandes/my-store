/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { ScrollView, View } from 'react-native';
import ItemCategoryComponent, { ItemCategory } from './components/ItemCategory';

import styles from './styles';

class Categories extends Component {
  static propTypes = {
    categories: PropTypes.arrayOf(ItemCategory.propTypes.category),
    active: PropTypes.number,
  };

  static defaultProps = {
    categories: [],
    active: 1,
  };

  static state = {}

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.categoriesContainer}
          contentContainerStyle={styles.contentCategoriesContainer}
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          {this.props.categories.map(category => (
            <ItemCategoryComponent
              key={category.id}
              category={category}
              active={(this.props.active === category.id)}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default Categories;
