import actionType from "../constants";

const initialAppState = {
  open: false,
  products: [],
  product: {},
};

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

    default:
      return state;
  }
};

export { initialAppState, appReducer };
