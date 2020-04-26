import { createStore, combineReducers } from "redux";
import { signUpReducer } from "./reducers/signUpReducer";
import { eventTypeReducer } from "./reducers/eventTypeReducer";
import { meetingReducer } from "./reducers/meetingReducer";

const reducer = combineReducers({
  userData: signUpReducer,
  eventType: eventTypeReducer,
  meetingDetails: meetingReducer,
});

const store = createStore((state, action) => reducer(state, action), {});

export default store;
