let initialState = {
    arrPosts: [
        {id: 0, likes: 5, textPost: 'Hi, how are you?'},
        {id: 1, likes: 3, textPost: 'It is my first post!'},
        {id: 2, likes: 18, textPost: 'It is my zero post!'}
    ],
    newPost: '',
    profile: null
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
            return {...state, profile: action.profile}            }

            default:
                return state;
            }
        }
        export default profileReducer;

export const setProfile = (profile) => ({type: 'SET-PROFILE', profile: profile})