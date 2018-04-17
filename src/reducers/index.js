import { combineReducers, applyMiddleware } from  'redux'
import { sessionReducer } from './session_reducer' 

export const rootReducer = combineReducers({
    sessionReducer
})