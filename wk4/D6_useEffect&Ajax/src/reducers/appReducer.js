import { OPEN_ASIDE, CLOSE_ASIDE, SET_JSON_DATA } from "../constants/appConstants"

const initialAppState = {
  open: false,
  jsonData: [],
};
const appReducer = (state, action) => {
  switch (action.type) {
    case OPEN_ASIDE:
      return { ...state, open: true };
    case CLOSE_ASIDE:
      return { ...state, open: false };
    case SET_JSON_DATA:
      return { ...state, jsonData: action.payload };
    default:
      return state;
  }
};

export { initialAppState, appReducer };