export const loginUser = (credential) => {
    console.log(credential)
    return (dispatch) => {
       return dispatch({
            type: "LOGIN_USER"
        })
    }
}