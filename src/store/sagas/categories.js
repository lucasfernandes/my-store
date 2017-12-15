import api from 'services/api';

import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/categories';

export function* getCategories() {
  const response = yield call(api.get, '/categories');

  if (response.ok) {
    yield put(ActionCreators.categoriesSuccess(response.data));
  } else {
    yield put(ActionCreators.categoriesFailure());
  }
}
