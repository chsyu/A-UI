const initialAppState = {
  open: false,
  jsonData: [],
};
const appReducer = (state, action) => {
  switch (action.type) {
    case "OPENASIDE":
      return { ...state, open: true };
    case "CLOSEASIDE":
      return { ...state, open: false };
    case "SETJSONDATA":
      return { ...state, jsonData: action.payload };
    default:
      return state;
  }
};

export { initialAppState, appReducer };