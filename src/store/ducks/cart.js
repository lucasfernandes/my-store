import { createActions, createReducer } from 'reduxsauce';

/* Types & Creators */

const { Types, Creators } = createActions({
  // categoriesRequest: null,
  // categoriesSuccess: ['data'],
  // categoriesFailure: null,
  cartAddToCart: ['categoryID', 'productID'],
  cartRemoveFromCart: ['categoryID', 'productID'],
});

export { Types };
export default Creators;

/* Initial State */
const INITIAL_STATE = {
  data: [],
  loading: false,
  added: false,
  error: false,
};

/* Reducers */

export const addToCart = (state, action) => ({
  ...state,
  data: [
    {
      categoryID: action.categoryID,
      productID: action.productID,
    },
    ...state.data,
  ],
});

export const removeFromCart = (state, action) => (
  console.tron.log(action),
  state.data.filter(item => console.tron.log(item)),
  {
  ...state,
  data: state.data.filter(item =>
    !(item.categoryId === action.categoryId &&
      item.productId === action.productId)),
});

// export const request = state => ({
//   ...state,
//   loading: true,
// });

// export const success = (state, action) => ({
//   ...state,
//   data: action.data,
//   loading: false,
//   error: false,
// });

// export const failure = () => ({
//   data: [],
//   loading: false,
//   error: true,
// });

export const reducer = createReducer(INITIAL_STATE, {
  // [Types.CATEGORIES_REQUEST]: request,
  // [Types.CATEGORIES_SUCCESS]: success,
  // [Types.CATEGORIES_FAILURE]: failure,
  [Types.CART_ADD_TO_CART]: addToCart,
  [Types.CART_REMOVE_FROM_CART]: removeFromCart,
});
