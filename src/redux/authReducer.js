import * as axios from "axios";
import {authAPI} from "../api/API";

let stateInit = {
    id: 19055,
    login: null,
    email: null,
    resultCode: null,
    isFetching: false
};

const authReducer = (state = stateInit, action) => {
    switch (action.type) {
        case 'SET-AUTH-USER': {
            return {
                ...state,
                ...action.data,
                resultCode: 0
            }
        }
        default:
            return state;
    }
}

export const setAuthUser = (id, login, email) => ({type: 'SET-AUTH-USER', data: {id, login, email}});

export default authReducer;

export const authThunk = () => (dispatch) => {
        authAPI.exeAuth().then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUser(response.data.id, response.data.login, response.data.email));
            }
        })
    }