export const loginUser = (dispatch) => {
    console.log(dispatch)
    return (dispatch) => {
       return dispatch({
            type: "LOGIN_USER"
        })
    }
}