import { createActions, createReducer } from 'reduxsauce';

/* Types & Creators */

const { Types, Creators } = createActions({
  categoriesRequest: null,
  categoriesSuccess: ['data'],
  categoriesFailure: null,
  categoriesSetActiveCategory: ['data'],
});

export { Types };
export default Creators;

/* Initial State */
const INITIAL_STATE = {
  data: [],
  loading: false,
  active: 1,
  error: false,
};

/* Reducers */

export const request = state => ({
  ...state,
  loading: true,
});

export const success = (state, action) => ({
  ...state,
  data: action.data,
  loading: false,
  error: false,
});

export const failure = () => ({
  data: [],
  loading: false,
  error: true,
});

export const setActiveCategory = (state, action) => ({
  ...state,
  active: action.data,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CATEGORIES_REQUEST]: request,
  [Types.CATEGORIES_SUCCESS]: success,
  [Types.CATEGORIES_FAILURE]: failure,
  [Types.CATEGORIES_SET_ACTIVE_CATEGORY]: setActiveCategory,
});
