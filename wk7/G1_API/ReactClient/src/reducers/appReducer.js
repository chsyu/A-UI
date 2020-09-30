import { OPEN_ASIDE, CLOSE_ASIDE, SET_PRODUCTS_DATA, SET_PRODUCT_DATA } from "../constants/appConstants"

const initialAppState = {
  open: false,
  products: [],
  product: {},
};
const appReducer = (state, action) => {
  switch (action.type) {
    case OPEN_ASIDE:
      return { ...state, open: true };
    case CLOSE_ASIDE:
      return { ...state, open: false };
    case SET_PRODUCTS_DATA:
      return { ...state, products: action.payload };
    case SET_PRODUCT_DATA:
      return { ...state, product: action.payload };
    default:
      return state;
  }
};

export { initialAppState, appReducer };