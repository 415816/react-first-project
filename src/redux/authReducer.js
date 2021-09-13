import {authAPI} from "../api/API";
import {stopSubmit} from "redux-form";

let stateInit = {
    id: 19055,
    login: null,
    email: null,
    isAuth: null,
    isFetching: false
};

const authReducer = (state = stateInit, action) => {
    switch (action.type) {
        case 'SET-AUTH-USER': {
            return {
                ...state,
                ...action.data,
                isAuth: action.data.isAuth
            }
        }
        default:
            return state;
    }
}

export const setAuthUser = (id, login, email, isAuth) => ({type: 'SET-AUTH-USER', data: {id, login, email, isAuth}});

export default authReducer;

export const authThunk = () => (dispatch) => {
    authAPI.exeAuth().then(response => {
        if (response.resultCode === 0) {
            dispatch(setAuthUser(response.data.id, response.data.login, response.data.email, true));
        }
    })
}
export const logInThunk = (email, password, rememberMe) => (dispatch) => {
    authAPI.logIn(email, password, rememberMe).then(response => {
        if (response.resultCode === 0) {
            dispatch(authThunk());
        } else {
            let action = stopSubmit('login', {_error: response.messages[0]});
            dispatch(action);
        }
    })
}
export const logOutThunk = () => (dispatch) => {
    authAPI.logOut().then(response => {
        if (response.resultCode === 0) {
            dispatch(setAuthUser(null, null, null, false));
        }
    })
}