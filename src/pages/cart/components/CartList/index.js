/* Core */
import React from 'react';

/* Presentational */
import { View, ScrollView } from 'react-native';

import CartListItem from './components/CartListItem';
import styles from './styles';


const CartList = ({ cartList }) => (

  <ScrollView style={styles.container}>
    { cartList.map(cartListItem => (
      <CartListItem
        key={cartListItem.id}
        cartListItem={cartListItem}
      />
    ))}

    {/* <CartListItem />
    <CartListItem />
    <CartListItem /> */}
  </ScrollView>
);

export default CartList;

/* Core */
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// /* Presentational */
// import { ScrollView, View } from 'react-native';
// import CartListItemComponent, { CartListItem } from './components/CartListItem';

// import styles from './styles';

// class CartList extends Component {
//   static propTypes = {
//     cartList: PropTypes.arrayOf(CartListItem.propTypes.cartList),
//   };

//   static defaultProps = {
//     cartList: [],
//   };

//   static state = {}

//   render() {
//     return (
//       <View style={styles.container}>
//         <ScrollView
//           style={styles.categoriesContainer}
//           contentContainerStyle={styles.contentCategoriesContainer}
//           showsHorizontalScrollIndicator={false}
//           horizontal
//         >
//           {this.props.cartList.map(cartListItem => (
//             <CartListItemComponent
//               key={cartListItem.id}
//               cartListItem={cartListItem}
//             />
//           ))}
//         </ScrollView>
//       </View>
//     );
//   }
// }

// export default CartList;

