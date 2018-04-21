import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../action_types/login_actiontypes';

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
        default:
            return state
    }
    return state
}