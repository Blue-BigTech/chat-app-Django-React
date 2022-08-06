import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducers';
import { composeWithDevTools } from 'redux-devtools-extension';

// import {} from 'redux'



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// const store = createStore(rootReducer, (applyMiddleware(thunk)));

export default store