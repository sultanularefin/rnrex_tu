// Action type is the reducer’s operation type. Based on the action type the
// reducer case will be executed, and we modify the state in such a way that it remains
// pure. So we create a copy of the existing state and return a new state.


export const ADD_PLACE = 'ADD_PLACE'