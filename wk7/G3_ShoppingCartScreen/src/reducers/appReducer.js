import actionType from "../constants";

const initialAppState = {
  open: false,
  products: [],
  product: {},
  cartItems: [],
};

let cartItems = {};

const appReducer = (state, action) => {
  switch (action.type) {
    case actionType.OPEN_ASIDE:
      return { ...state, open: true };
    case actionType.CLOSE_ASIDE:
      return { ...state, open: false };
    case actionType.SET_PRODUCTS_DATA:
      return { ...state, products: action.payload };
    case actionType.SET_PRODUCT_DATA:
      return { ...state, product: action.payload };

    case actionType.CART_ADD_ITEM:
      const item = action.payload;
      const product = state.cartItems.find((x) => x.product === item.product);
      if (product) {
        cartItems = state.cartItems.map((x) =>
          x.product === product.product ? item : x
        );
        return { ...state, cartItems };
      }
      cartItems = [...state.cartItems, item];
      return { ...state, cartItems };
    case actionType.CART_REMOVE_ITEM:
      cartItems = state.cartItems.filter((x) => x.product !== action.payload);
      return { ...state, cartItems };

    default:
      return state;
  }
};

export { initialAppState, appReducer };
