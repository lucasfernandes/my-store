/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View } from 'react-native';
import TabItem from 'components/Footer/components/NavigationTabs/components/TabItem';

/* Redux */
import { connect } from 'react-redux';
import CartActions from 'store/ducks/cart';

import styles from './styles';

const tabs = [
  { index: 0, icon: 'home' },
  { index: 1, icon: 'shopping-cart' },
];

const NavigationTabs = props => (
  <View style={styles.tabBar}>
    { tabs.map(tab => (
      <TabItem
        key={tab.index}
        icon={tab.icon}
        active={(tab.index === props.navigationState.index)}
        onPress={() => [
          props.jumpToIndex(tab.index),
          tab.index === 1 && props.resetBadges()]}
        badges={tab.index === 1 ? props.cart.badges : 0}
      />
    ))}
  </View>
);

NavigationTabs.propTypes = {
  navigationState: PropTypes.shape({
    index: PropTypes.number,
  }).isRequired,
  cart: PropTypes.shape({
    data: PropTypes
      .arrayOf(PropTypes.shape({ categoryID: PropTypes.number, productID: PropTypes.number })),
    badges: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  resetBadges: () => dispatch(CartActions.cartResetBadges()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationTabs);
