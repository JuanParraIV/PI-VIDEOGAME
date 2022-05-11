import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

 const store = createStore(rootReducer, applyMiddleware(thunk));  // applyMiddleware(thunk) is a function that takes a reducer and returns a new reducer.

export default store