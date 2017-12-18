import { StackNavigator, TabNavigator } from 'react-navigation';

import Footer from 'components/Footer';

import Home from 'pages/home';
import Detail from 'pages/detail';
import Cart from 'pages/cart';

const HomeRoutes = StackNavigator({
  Home: { screen: Home },
  Detail: { screen: Detail },
}, {
  headerMode: 'none',
});

const Routes = TabNavigator({
  Home: { screen: HomeRoutes },
  Cart: { screen: Cart },
}, {
  swipeEnabled: false,
  animationEnabled: false,
  lazy: false,
  tabBarPosition: 'bottom',
  tabBarComponent: Footer,
});

export default Routes;
