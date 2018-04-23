import { LOGOUT_USER, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE } from '../action_types/logout_actiontypes';

initialState = {
    isLoggedOut: false,
    isLoading: false,
    isLogoutError: false
}
export const logoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT:
            return Object.assign({}, state, { isLoading: true })
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, { isLoading: false, isLoggedOut: true })
        case LOGOUT_USER_FAILURE:
            return Object.assign({}, state, { isLoading: false, isLogoutError: true })
    }
    return state;
}