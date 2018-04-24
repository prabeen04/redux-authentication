import { LOGOUT_USER, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE } from '../action_types/logout_actiontypes';
// import { createHashHistory } from 'history'
// const history = createHashHistory()

const baseURL = 'https://prabeen-restapi.herokuapp.com/api/login';

export const logoutUser = (user) => {
    console.log(user)
    localStorage.removeItem('token');
    // history.push('/')
    return (dispatch) => {
        dispatch({
            type: LOGOUT_USER
        })
        
    
        // return axios.post(`${baseURL}`, credential)
        // .then(response => {
        //     localStorage.setItem('token', response.data)
        //         dispatch({
        //             type: LOGOUT_USER_SUCCESS,
        //             payload: response.data
        //         })
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         dispatch({
        //             type: LOGOUT_USER_FAILURE
        //         })
        //     })
    }
}