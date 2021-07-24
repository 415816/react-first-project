let initialState = {
    arrPosts: [
        {likes: 5, textPost: 'Hi, how are you?'},
        {likes: 3, textPost: 'It is my first post!'},
        {likes: 18, textPost: 'It is my zero post!'}
    ],
    newPost: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE-NEW-POST': {
            let stateCopy = {...state};
            stateCopy.newPost = action.postNewLetters;
            return stateCopy;
        }
        case 'ADD-NEW-POST': {
            let newPost = {
                likes: 0,
                textPost: action.textNewPost
            };
            let stateCopy = {...state};
            stateCopy.arrPosts = [...state.arrPosts];
            stateCopy.arrPosts.push(newPost);
            stateCopy.newPost = '';
            return stateCopy;
        }
        default:
            return state;
    }
}
export default profileReducer;