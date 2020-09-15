import { createStore, combineReducers } from "redux";

import reducerNumbers from "../reducers/reducerNumbers";

const reducers = combineReducers({
  numbers: reducerNumbers,
});

export default () => createStore(reducers);
