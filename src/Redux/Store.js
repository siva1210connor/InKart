import {createStore} from 'redux';
import {counterReducer} from './Reducer';

//store

const store = createStore(counterReducer);

export default store;
