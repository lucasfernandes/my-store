import CategoriesActions, { reducer } from 'store/ducks/categories';

const initialState = {
  data: [
    {
      id: 1,
      title: 'Camisetas',
    },
    {
      id: 2,
      title: 'Camisas',
    },
    {
      id: 3,
      title: 'Calças',
    },
    {
      id: 4,
      title: 'Blusas',
    },
    {
      id: 5,
      title: 'Bonés',
    },
    {
      id: 6,
      title: 'Casacos',
    },
  ],
  loading: false,
  active: 1,
  error: false,
};

describe('Testing Categories Reducer', () => {
  it('can request a category', () => {
    const state = reducer(
      [],
      CategoriesActions.categoriesRequest(),
    );

    expect(state.loading).toBe(true);
  });

  it('can successfully receive categories', () => {
    const state = reducer(
      [],
      CategoriesActions.categoriesSuccess(initialState.data),
    );

    expect(state.data).toEqual(initialState.data);
  });

  it('receives failure when request goes wrong', () => {
    const state = reducer(
      [],
      CategoriesActions.categoriesFailure(),
    );

    expect(state.data).not.toEqual(initialState.data);
  });

  it('can set a category as active', () => {
    const state = reducer(
      initialState,
      CategoriesActions.categoriesSetActiveCategory(initialState.data[2].id),
    );

    expect(state.data[2]).toEqual(initialState.data[2]);
  });
});
