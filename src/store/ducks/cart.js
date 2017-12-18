import { createActions, createReducer } from 'reduxsauce';
import { createSelector } from 'reselect';

/* Types & Creators */

const { Types, Creators } = createActions({
  cartAddToCart: ['id', 'product'],
  cartRemoveFromCart: ['id'],
  cartUpdateProductAmount: ['id', 'amount'],
  cartResetBadges: null,
});

export { Types };
export default Creators;

/* Initial State */
const INITIAL_STATE = {
  data: [],
  loading: false,
  added: false,
  error: false,
  badges: 0,
};

/* Reducers */

export const addToCart = (state, action) => ({
  ...state,
  data: [
    {
      id: action.id,
      product: action.product,
      amount: 1,
    },
    ...state.data,
  ],
  badges: state.badges + 1,
});

export const removeFromCart = (state, action) => ({
  ...state,
  data: state.data.filter(item => item.id !== action.id),
  badges: state.badges > 0 ? state.badges - 1 : state.badges,
});

export const updateProductAmount = (state, action) => ({
  ...state,
  data: state.data.map((item) => {
    if (item.id === action.id) {
      return { ...item, amount: action.amount };
    }
    return item;
  }),
});

export const resetBadges = state => ({
  ...state,
  badges: 0,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CART_ADD_TO_CART]: addToCart,
  [Types.CART_REMOVE_FROM_CART]: removeFromCart,
  [Types.CART_RESET_BADGES]: resetBadges,
  [Types.CART_UPDATE_PRODUCT_AMOUNT]: updateProductAmount,
});

/* Selectors */

const cartDataSelector = state => state.cart.data;

const priceAmountSelector = createSelector(
  cartDataSelector,
  cart => cart.reduce((amount, item) =>
    amount + (item.product.price * item.amount), 0.0),
);

export {
  priceAmountSelector,
};

