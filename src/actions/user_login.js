import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../action_types/login_actiontypes';
import axios from 'axios';
import history from '../helpers/history';

const baseURL = 'https://prabeen-restapi.herokuapp.com/api/users';

export const loginUser = (credential) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN
        })
        return axios.post(`${baseURL}`, credential)
        .then(response => {
            localStorage.setItem('token', response.data)
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => {
                console.log(error)
                dispatch({
                    type: LOGIN_FAILURE
                })
            })
    }
}