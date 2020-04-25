export const signUpReducer = (state = null, action) => {
  switch (action.type) {
    case "SIGNUP":
      return { ...state, ...action.payload };

    case "RESET":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
