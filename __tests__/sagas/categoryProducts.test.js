import SagaTester from 'redux-saga-tester';
import MockAdapter from 'axios-mock-adapter';

import api from 'services/api';
import rootSaga from 'store/sagas';
import CategoryProductsActions from 'store/ducks/categoryProducts';

const categoryProductsFixture = require('./fixtures/categoryProducts.json');

describe('Testing Category Products SAGA', () => {
  let sagaTester = null;
  let apiMock = null;

  beforeEach(() => {
    sagaTester = new SagaTester({});
    apiMock = new MockAdapter(api.axiosInstance);

    sagaTester.start(rootSaga);
  });

  it('can request products form a category', async () => {
    apiMock.onGet('/category_products/1')
      .reply(200, categoryProductsFixture['category_products/1']);

    sagaTester.dispatch(CategoryProductsActions.categoryProductsRequest(1));

    await sagaTester.waitFor(CategoryProductsActions.categoryProductsSuccess().type);

    expect(sagaTester.getLatestCalledAction())
      .toEqual(CategoryProductsActions.categoryProductsSuccess(categoryProductsFixture['category_products/1']));
  });

  it('throws error when categories doesnt exists', async () => {
    apiMock.onGet('/categoryProducts/fail')
      .reply(400);

    sagaTester.dispatch(CategoryProductsActions.categoryProductsRequest());

    await sagaTester.waitFor(CategoryProductsActions.categoryProductsFailure().type);

    expect(sagaTester.getLatestCalledAction())
      .toEqual(CategoryProductsActions.categoryProductsFailure());
  });
});
