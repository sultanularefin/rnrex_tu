// place.js

// The addPlace() function returns an action. Now based on that action, reducers function’s case is executed.

// Action type [type: ADD_PLACE ] is the reducer’s operation type. Based on the action type the
// reducer case will be executed, and we modify the state in such a way that it remains
// pure. So we create a copy of the existing state and return a new state.

import { ADD_PLACE } from './types';

export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    payload: placeName
  }
};