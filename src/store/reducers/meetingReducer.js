export const meetingReducer = (state = [], action) => {
  switch (action.type) {
    case "TEMPDATA":
      //   console.log(action.payload);
      return [...action.payload];

    case "MEETDETAILS":
      console.log(...action.payload);
      return [...state, ...action.payload];
    default:
      return state;
  }
};
