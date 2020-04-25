import { createStore, combineReducers } from "redux";
import { signUpReducer } from "./reducers/signUpReducer";
import { eventTypeReducer } from "./reducers/eventTypeReducer";

const reducer = combineReducers({
  userData: signUpReducer,
  eventType: eventTypeReducer,
});

const store = createStore((state, action) => reducer(state, action), {});

export default store;
