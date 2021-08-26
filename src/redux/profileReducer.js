import {profileAPI} from "../api/API";


let initialState = {
    arrPosts: [
        {id: 0, likes: 5, textPost: 'Hi, how are you?'},
        {id: 1, likes: 3, textPost: 'It is my first post!'},
        {id: 2, likes: 18, textPost: 'It is my zero post!'}
    ],
    newPost: '',
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE-NEW-POST': {
            return {
                ...state,
                newPost: action.postNewLetters
            }
        }
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

        default:
            return state;
    }
}

export const setProfile = (profile) => ({type: 'SET-PROFILE', profile: profile});
export const getStatus = (status) => ({type: 'GET-STATUS', status: status});
export const setStatus = (status) => ({type: 'SET-STATUS', status: status});

export default profileReducer;

export const chooseProfileThunk = (id) => {
    return (dispatch) => {
        profileAPI.chooseProfile(id).then(response => {
            dispatch(setProfile(response.data));
        })
    }
}

export const getStatusFromAPIThunk = (id) => {
    return (dispatch) => {
        profileAPI.getStatus(id).then(response => {
            dispatch(setStatus(response.data));
        })
    }
}

export const updateStatusFromUIThunk = (status) => {
    return (dispatch) => {
        profileAPI.updateStatusFromUIThunk(status).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
    }
}