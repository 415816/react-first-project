import profileReducer, {addNewPost} from "./profileReducer";

test('new post shoul be added', () => {
    // 1. input test data
    let state = {arrPosts: [
        {id: 0, likes: 5, textPost: 'Hi, how are you?'},
        {id: 1, likes: 3, textPost: 'It is my first post!'},
        {id: 2, likes: 18, textPost: 'It is my zero post!'}]}
    let action = addNewPost('Holla');

    let addnewpost = profileReducer(state, action);


    // 2. action

    // 3. expectation
    expect(addnewpost.arrPosts.length).toBe(4);
});