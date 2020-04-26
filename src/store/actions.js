export const handleSignUp = (payload) => ({
  type: "SIGNUP",
  payload: payload,
});

export const handleLogin = (payload) => ({
  type: "LOGIN",
  payload: payload,
});

export const handleReset = (payload) => ({
  type: "RESET",
  payload: payload,
});

//Event type actions
export const addEventType = (payload) => ({
  type: "ADDTYPE",
  payload: payload,
});
export const editEventType = (payload) => ({
  type: "EDITTYPE",
  payload: payload,
});

export const storeTime = (payload) => ({
  type: "TEMPDATA",
  payload: payload,
});

export const meetData = (payload) => ({
  type: "MEETDETAILS",
  payload: payload,
});
