import SagaTester from 'redux-saga-tester';
import MockAdapter from 'axios-mock-adapter';

import api from 'services/api';
import rootSaga from 'store/sagas';
import CategoriesActions from 'store/ducks/categories';

const categoriesFixture = require('./fixtures/categories.json');

describe('Testing Categories SAGA', () => {
  let sagaTester = null;
  let apiMock = null;

  beforeEach(() => {
    sagaTester = new SagaTester({});
    apiMock = new MockAdapter(api.axiosInstance);

    sagaTester.start(rootSaga);
  });

  it('can request categories user', async () => {
    apiMock.onGet('/categories')
      .reply(200, categoriesFixture['/categories']);

    sagaTester.dispatch(CategoriesActions.categoriesRequest());

    await sagaTester.waitFor(CategoriesActions.categoriesSuccess().type);

    expect(sagaTester.getLatestCalledAction())
      .toEqual(CategoriesActions.categoriesSuccess(categoriesFixture['/categories']));
  });

  it('throws error when categories doesnt exists', async () => {
    apiMock.onGet('/categories/fail')
      .reply(400);

    sagaTester.dispatch(CategoriesActions.categoriesRequest());

    await sagaTester.waitFor(CategoriesActions.categoriesFailure().type);

    expect(sagaTester.getLatestCalledAction())
      .toEqual(CategoriesActions.categoriesFailure());
  });
});
