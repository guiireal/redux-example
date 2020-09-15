import { NUM_MIN_CHANGE, NUM_MAX_CHANGE } from "./actionTypes";

export const numMinChange = (newNumber) => ({
  type: NUM_MIN_CHANGE,
  payload: newNumber,
});

export const numMaxChange = (newNumber) => ({
  type: NUM_MAX_CHANGE,
  payload: newNumber,
});
