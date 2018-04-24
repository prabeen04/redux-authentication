import { LOGOUT_USER, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE } from '../action_types/logout_actiontypes';

const initialState = {
    isLoggedOut: false,
    isLoading: false,
    isLogoutError: false
}
export const logoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT_USER:
            return Object.assign({}, state, { isLoggedOut: true,  isLoggedOut: true  })
        case LOGOUT_USER_SUCCESS:
            return Object.assign({}, state, { isLoading: false, isLoggedOut: true })
        case LOGOUT_USER_FAILURE:
            return Object.assign({}, state, { isLoading: false, isLogoutError: true })
        default:
            return state;    
    }
    return state;
}