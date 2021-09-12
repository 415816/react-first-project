import * as axios from "axios";
import {updateStatusFromUIThunk} from "../redux/profileReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "c4eff3f5-e6a4-43aa-9d00-4c706b418609"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, usersOnPage = 10) {
        return instance.get(`users?page=${currentPage}&count=${usersOnPage}`).then(response => response.data)
    },
    followUser(id) {
        return instance.post(`follow/${id}`)
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
    }
}

export const authAPI = {
    exeAuth() {
        return instance.get('auth/me').then(response => response.data);
    },
    logIn(email, password, rememberMe = false, captcha = false) {
        return instance.post('/auth/login', {email, password, rememberMe, captcha}).then(response => response.data);
    },
    logOut() {
        return instance.delete('/auth/login').then(response => response.data);
    },
}

export const profileAPI = {
    chooseProfile(id) {
        return instance.get(`profile/${id}`);
    },
    getStatus(id) {
        return instance.get('profile/status/' + id);
    },
    updateStatusFromUIThunk(status) {
        return instance.put('profile/status', {status: status});
    }
}