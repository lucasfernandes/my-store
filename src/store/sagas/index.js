import { takeLatest } from 'redux-saga/effects';

/* Types */
import { Types as CategoriesTypes } from 'store/ducks/categories';
import { Types as CategoryProductsTypes } from 'store/ducks/categoryProducts';

/* Sagas */
import { getCategories } from './categories';
import { getCategoryProducts } from './categoryProducts';

export default function* root() {
  yield [
    takeLatest(CategoriesTypes.CATEGORIES_REQUEST, getCategories),
    takeLatest(CategoryProductsTypes.CATEGORY_PRODUCTS_REQUEST, getCategoryProducts),
  ];
}
