export const eventTypeReducer = (state = [], action) => {
  switch (action.type) {
    case "ADDTYPE":
      // localStorage.setItem(
      //   "eventType",
      //   JSON.stringify([...state, ...action.payload])
      // );
      return [...state, ...action.payload];

    case "EDITTYPE":
      let storeState = state;
      let formattedData = storeState.map((item, index) => {
        if (item.id == action.payload[index].id) {
          return {
            ...item,
            id: action.payload[index].id,
            eventTypeName: action.payload[index].eventTypeName,
            eventDuration: action.payload[index].eventDuration,
          };
        } else {
          return { ...item };
        }
      });
      return formattedData;
    default:
      return state;
  }
};
