import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../action_types/login_actiontypes';
import axios from 'axios';

const baseURL = 'https://prabeen-restapi.herokuapp.com/api/login';

export const loginUser = (credential) => {
    console.log(credential)
    return (dispatch) => {
        dispatch({
            type: LOGIN
        })
        console.log('before login')
        return axios.post(`${baseURL}`, credential)
            .then(response => {
                console.log(response)
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