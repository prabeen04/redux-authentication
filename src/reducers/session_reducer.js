const initialState={
    isLoggedIn: true
}

export const sessionReducer = (state=initialState, action) => {
    switch(action.type){
        case "LOGIN_USER": 
            return Object.assign({}, state, { isLoggedIn: true})
        default: 
            return state
    }
    return state
}