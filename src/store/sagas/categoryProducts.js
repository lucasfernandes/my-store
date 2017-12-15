import api from 'services/api';

import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/categoryProducts';

export function* getCategoryProducts(action) {
  const response = yield call(api.get, `/category_products/${action.category}`);

  if (response.ok) {
    yield put(ActionCreators.categoryProductsSuccess(response.data));
  } else {
    yield put(ActionCreators.categoryProductsFailure());
  }
}
