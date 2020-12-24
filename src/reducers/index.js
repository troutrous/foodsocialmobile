import { combineReducers } from 'redux';

import counterReducer from '../reducers/counter'
import signReducer from '../reducers/sign'
import tokenReducer from '../reducers/token'
import profileReducer from '../reducers/profile'

const allReducers = combineReducers({
    counter: counterReducer,
    sign: signReducer,
    token: tokenReducer,
    profile: profileReducer
})

export default allReducers;