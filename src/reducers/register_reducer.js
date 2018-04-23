import { REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE } from '../action_types/register_actiontypes';
const initialState = {
    isRegistering: false,
    user: {},
    isError: ''
}

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            return Object.assign({}, state, { isRegistering: true })
        case REGISTER_SUCCESS:
            return Object.assign({}, state, { isRegistering: false, user: action.payload })
        case REGISTER_FAILURE:
            return Object.assign({}, state, { isRegistering: false, error:'Some error occoured...' })
        default:
            return state
    }
    return state
}