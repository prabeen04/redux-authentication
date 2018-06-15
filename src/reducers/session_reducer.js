import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../action_types/login_actiontypes';
import { LOGOUT_USER, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE } from '../action_types/logout_actiontypes';

const initialState = {
    isLoggedIn: false,
    token: '',
    loggingIn: false,
    error: ''
}

export const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, { loggingIn: true })
        case LOGIN_SUCCESS:
            return Object.assign({}, state, { loggingIn: false, token: action.payload, isLoggedIn: true })
        case LOGIN_FAILURE:
            return Object.assign({}, state, { loggingIn: false, error:'Some error occoured...' })
        case LOGOUT_USER:
            return Object.assign({}, state, { loggingIn: false })    
        default:
            return state
    }
    return state
}