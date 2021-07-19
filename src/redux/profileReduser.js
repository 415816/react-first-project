const profileReduser = (state, action) => {
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
export default profileReduser;
