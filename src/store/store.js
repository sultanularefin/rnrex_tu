// store.js

import { createStore, combineReducers,applyMiddleware } from 'redux';
import placeReducer from './../reducers/placeReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


// Here, we have created the redux store and passed the reducer to that store. The
// combineReducer function combines all the different reducers into one
// and forms the global state.

// So this is the global state of our whole application.

const rootReducer = combineReducers({
  places: placeReducer
});

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

// const store = createStore(reducer, composeEnhancers(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// ));



const configureStore = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )

    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
};

export default configureStore;



