import { combineReducers } from  'redux'
import { sessionReducer } from './session_reducer' 
import { logoutReducer } from './logout_reducer' 
import { registerReducer } from './register_reducer' 

export const rootReducer = combineReducers({
    sessionReducer
})