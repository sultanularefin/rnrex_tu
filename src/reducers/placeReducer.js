// placeReducer.js

import { ADD_PLACE } from './../actions/types';

const initialState = {
  placeName: '',
  places: []
};

// So, here, we have defined the function called placeReducer that accepts the two arguments.
// 1. state
// 2. action
// The first time, it will take the initial state of our application, and then we pass whatever argument,

// it takes that argument and operates based on the case execution.

// The second argument is action, which consists of type and payload.

// The payload is the place name, we have entered inside the text box.

// So it adds the text box’s value inside places array.

// Remeber here; we have returned a new state and not existing state. So we have modified the state in the pure manner and not existing state.

const placeReducer = (state = initialState, action) => {

  console.log("state at placeReducer is: ",state);
  console.log("action at placeReducer is: ",action);

  switch(action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          value: action.payload
        })
      };
    default:
      return state;
  }
};

export default placeReducer;