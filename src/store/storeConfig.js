import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numbers: (state, action) => {
    return {
      min: 7,
      max: 54,
    };
  },
});

export default () => createStore(reducers);
