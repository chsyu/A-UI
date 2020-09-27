const initialAppState = {
  open: false,
};
const appReducer = (state, action) => {
  switch (action.type) {
    case "openAside":
      return { ...state, open: true };
    case "closeAside":
      return { ...state, open: false };
  }
};

export { initialAppState, appReducer };