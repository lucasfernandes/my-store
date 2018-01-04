import CartActions, { reducer } from 'store/ducks/cart';

const initialState = {
  data: [],
  loading: false,
  added: false,
  error: false,
  badges: 0,
};

const oneProductState = {
  data: [
    {
      id: '#1@1',
      product: {
        id: 1,
        name: 'Camiseta Hyperas Preta',
        brand: 'Quiksilver',
        image: 'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
        price: 49.99,
      },
      amount: 1,
    },
  ],
  loading: false,
  added: false,
  error: false,
  badges: 1,
};

describe('Testing Cart Reducer', () => {
  it('can add products to cart', () => {
    const state = reducer(
      initialState,
      CartActions.cartAddToCart(oneProductState.data[0].id, oneProductState.data[0].product),
    );

    expect(state.data[0].product).toEqual(oneProductState.data[0].product);
  });

  it('can remove products from cart', () => {
    const state = reducer(
      oneProductState,
      CartActions.cartRemoveFromCart(oneProductState.data[0].id),
    );

    expect(state.data).toHaveLength(0);
  });

  it('can remove products from cart', () => {
    const state = reducer(
      oneProductState,
      CartActions.cartRemoveFromCart(oneProductState.data[0].id),
    );

    expect(state.data).toHaveLength(0);
    expect(state.badges).toBe(0);

    const stateWithouBadge = reducer(
      { ...oneProductState, badges: 0 },
      CartActions.cartRemoveFromCart(oneProductState.data[0].id),
    );

    expect(stateWithouBadge.data).toHaveLength(0);
    expect(stateWithouBadge.badges).toBe(0);
  });

  it('can update products amount', () => {
    const state = reducer(
      oneProductState,
      CartActions.cartUpdateProductAmount(oneProductState.data[0].id, 2),
    );

    expect(state.data[0].amount).toBe(2);
  });

  it('should not update with a wrong product id', () => {
    const state = reducer(
      oneProductState,
      CartActions.cartUpdateProductAmount('fail', 2),
    );

    expect(state.data[0].amount).toBe(1);
  });

  it('should reset badges to 0', () => {
    const state = reducer(
      oneProductState,
      CartActions.cartResetBadges(),
    );

    expect(state.badges).toBe(0);
  });
});
