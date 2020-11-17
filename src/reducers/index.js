import { combineReducers } from 'redux';

import counterReducer from '../reducers/counter'
import signReducer from '../reducers/sign'

const allReducers = combineReducers({
    counter: counterReducer,
    sign: signReducer
})

export default allReducers;