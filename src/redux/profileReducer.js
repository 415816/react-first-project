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
        case 'CHANGE-NEW-POST':
            state.newPost = action.postNewLetters;
            break;
        case 'ADD-NEW-POST':
            let newPost = {
                likes: 0,
                textPost: action.textNewPost
            };
            state.arrPosts.push(newPost);
            state.newPost = '';
            break;
    }
    return state;
}
export default profileReducer;
