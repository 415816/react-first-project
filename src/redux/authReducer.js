import {authAPI} from "../api/API";
import {stopSubmit} from "redux-form";

let stateInit = {
    id: 19055,
    login: null,
    email: null,
    isAuth: null,
    isFetching: false,
    captcha: null,
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
        case 'SET-URL-CAPTCHA': {
            return {
                ...state,
                captcha: action.url
            }
        }

        default:
            return state;
    }
}

export const setAuthUser = (id, login, email, isAuth) => ({type: 'SET-AUTH-USER', data: {id, login, email, isAuth}});
export const getCaptcha = (urlCaptcha) => ({type: 'SET-URL-CAPTCHA', url: urlCaptcha});

export default authReducer;

export const authThunk = () => async (dispatch) => {
    const response = await authAPI.exeAuth();
    if (response.resultCode === 0) {
        dispatch(setAuthUser(response.data.id, response.data.login, response.data.email, true));
    }
}

export const logInThunk = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await authAPI.logIn(email, password, rememberMe, captcha);
    if (response.resultCode === 0) {
        dispatch(authThunk());
    } else {
        if (response.resultCode === 10) {
            const response = await authAPI.captcha();
            dispatch(getCaptcha(response));
        }
        let action = stopSubmit('login', {_error: response.messages[0]});
        dispatch(action);
    }
}
export const logOutThunk = () => async (dispatch) => {
    const response = await authAPI.logOut()
    if (response.resultCode === 0) {
        dispatch(setAuthUser(null, null, null, false));
    }
}