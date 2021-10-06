import {profileAPI} from "../api/API";


let initialState = {
    arrPosts: [
        {id: 0, likes: 5, textPost: 'Hi, how are you?'},
        {id: 1, likes: 3, textPost: 'It is my first post!'},
        {id: 2, likes: 18, textPost: 'It is my zero post!'}
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-NEW-POST': {
            let newPost = {
                likes: 0,
                textPost: action.textNewPost
            };
            return {
                ...state,
                arrPosts: [...state.arrPosts, newPost],
                newPost: ''
            }
        }
        case 'SET-PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'SET-STATUS': {
            return {...state, status: action.status}
        }
        case 'SET-AVATAR': {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        case 'UPDATE-PROFILE-DATA': {
            return {...state,  profile: {...state.profile, aboutMe: action.profile.aboutMe,
                                                        lookingForAJob: action.profile.lookingForAJob,
                                                        lookingForAJobDescription: action.profile.lookingForAJobDescription,
                                                        fullName: action.profile.fullName}}
        }

        default:
            return state;
    }
}

export const setProfile = (profile) => ({type: 'SET-PROFILE', profile: profile});
export const getStatus = (status) => ({type: 'GET-STATUS', status: status});
export const setStatus = (status) => ({type: 'SET-STATUS', status: status});
export const addNewPost = (textNewPost) => ({type: 'ADD-NEW-POST', textNewPost: textNewPost});
export const setAvatar = (photos) => ({type: 'SET-AVATAR', photos});
export const updateProfileData = (profile) => ({type: 'UPDATE-PROFILE-DATA', profile: profile});
export default profileReducer;

export const chooseProfileThunk = (id) => {
    return async (dispatch) => {
        const response = await profileAPI.chooseProfile(id);
        dispatch(setProfile(response.data));
    }
}

export const getStatusFromAPIThunk = (id) => {
    return async (dispatch) => {
        const response = await profileAPI.getStatus(id);
        dispatch(setStatus(response.data));
    }
}

export const updateStatusFromUIThunk = (status) => {
    return async (dispatch) => {
        const response = await profileAPI.updateStatusFromUI(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}

export const setProfilePhotoThunk = (photo) => {
    return async (dispatch) => {
        const response = await profileAPI.setPhoto(photo);
        if (response.data.resultCode === 0) {
            dispatch(setAvatar(response.data.data.photos));
        }
    }
}
export const updateProfileDataFromUIThunk = (profil) => {
    return async (dispatch) => {
        const response = await profileAPI.updateProfileDataFromUI(profil);
        if (response.data.resultCode === 0) {
            dispatch(updateProfileData(profil));
        }
    }
}