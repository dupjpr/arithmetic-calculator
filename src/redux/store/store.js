import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

const initialState = {
  keyBoardLabels: {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ','],
    operations: ['/', 'X', '-', '+', '='],
    utilities: ['AC', '+/-', '%']
  }
}

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
