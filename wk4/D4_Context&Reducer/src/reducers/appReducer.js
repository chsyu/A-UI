import { OPEN_ASIDE, CLOSE_ASIDE} from "../constants/appConstants"

const initialAppState = {
  open: false,
};
const appReducer = (state, action) => {
  switch (action.type) {
    case OPEN_ASIDE:
      return { ...state, open: true };
    case CLOSE_ASIDE:
      return { ...state, open: false };
  }
};

export { initialAppState, appReducer };