import { createActions, createReducer } from 'reduxsauce';

/* Types & Creators */

const { Types, Creators } = createActions({
  categoryProductsRequest: ['category'],
  categoryProductsSuccess: ['data'],
  categoryProductsFailure: null,
});

export { Types };
export default Creators;

/* Initial State */
const INITIAL_STATE = {
  data: {},
  loading: false,
  error: false,
};

/* Reducers */

export const request = state => ({
  ...state,
  loading: true,
});

export const success = (state, action) => ({
  data: action.data,
  loading: false,
  error: false,
});

export const failure = () => ({
  data: {},
  loading: false,
  error: true,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CATEGORY_PRODUCTS_REQUEST]: request,
  [Types.CATEGORY_PRODUCTS_SUCCESS]: success,
  [Types.CATEGORY_PRODUCTS_FAILURE]: failure,
});
