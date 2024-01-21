import { legacy_createStore as createStore } from 'redux'
import userReducer from './module/userReducer'
import tokenReducer from './module/tokenReducer'
import { combineReducers } from 'redux'

const reducers = combineReducers({
    user:userReducer,
    token:tokenReducer
})

const store = createStore(reducers)

export default store

