import { REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE } from '../action_types/register_actiontypes';
import axios from 'axios';

const baseURL = 'https://prabeen-restapi.herokuapp.com/api/register';

export const registerUser = (credential) => {
    return (dispatch) => {
        dispatch({
            type: REGISTER
        })
        return axios.post(`${baseURL}`, credential)
        .then(response => {
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => {
                console.log(error)
                dispatch({
                    type: REGISTER_FAILURE
                })
            })
    }
}