/* Core */
import React from 'react';

/* Presentational */
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const CartListItem = ({
  cartListItem: { image, name, brand, price }
}) => (
  <View style={styles.listContainer}>
    <Image
      style={styles.image}
      source={{ uri: image }}
    />

    <View style={styles.textContainer}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.brand}>{brand}</Text>
      <Text style={styles.price}>
        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}
      </Text>
    </View>

    <View style={styles.right}>
      <TextInput
        style={styles.textInput}
        underlineColorAndroid="transparent"
        maxLength={2}
        defaultValue="1"
      />
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {}}
      >
        <Icon name="times" size={20} color="#999999" />
      </TouchableOpacity>
    </View>
  </View>
);

export default CartListItem;


// /* Core */
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// /* Presentational */
// import { View, Text, TouchableOpacity } from 'react-native';

// /* Redux */
// import { connect } from 'react-redux';
// import CategoriesActions from 'store/ducks/categories';
// import CategoryProductsActions from 'store/ducks/categoryProducts';

// import styles from './styles';

// export class CartListItem extends Component {
//   static propTypes = {
//     category: PropTypes.shape({
//       id: PropTypes.number,
//       title: PropTypes.string,
//     }).isRequired,
//     active: PropTypes.bool.isRequired,
//     setActiveCategory: PropTypes.func.isRequired,
//     categoryProductsRequest: PropTypes.func.isRequired,
//   };

//   setActiveCategory = (category) => {
//     this.props.setActiveCategory(category);
//     this.props.categoryProductsRequest(category);
//   }

//   render() {
//     const { category: { id, title }, active } = this.props;
//     return (
//       <View style={[styles.category, active ? styles['category-active'] : {}]}>
//         <TouchableOpacity
//           onPress={() => this.setActiveCategory(id)}
//           style={styles.button}
//         >
//           <Text style={[styles.title, active ? styles['title-active'] : {}]}>{title.toUpperCase()}</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   setActiveCategory: category => dispatch(CategoriesActions.categoriesSetActiveCategory(category)),
//   categoryProductsRequest: category =>
//     dispatch(CategoryProductsActions.categoryProductsRequest(category)),
// });


// export default connect(null, mapDispatchToProps)(CartListItem);

