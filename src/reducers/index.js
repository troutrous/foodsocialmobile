import { combineReducers } from 'redux';

import counterReducer from '../reducers/counter'

const allReducers = combineReducers({
    counter: counterReducer
})

export default allReducers;