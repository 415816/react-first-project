import { rerenderAll } from './../render';

let state = {
    arrPosts: [
        { likes: 5, textPost: 'Hi, how are you?' },
        { likes: 3, textPost: 'It is my first post!' },
        { likes: 18, textPost: 'It is my zero post!' }
    ],

    newPost: '',

    collectPeople: [
        { id: 1, name: 'Bulochka' },
        { id: 2, name: 'Nastya' },
        { id: 3, name: 'Tony' },
        { id: 4, name: 'Mashka-Kakashka' }
    ],

    collectMessages: [
        { id: 1, messag: "Hi!" },
        { id: 2, messag: "How are you?" },
        { id: 3, messag: "Are you sleep?" },
        { id: 4, messag: "I am kakashka!" }
    ],

    sidebar: [
        { id: 1, name: 'Oly' },
        { id: 2, name: 'Mas' },
        { id: 3, name: 'Vas' },
    ],
}

window.state = state;

export const changeNewPost = (postNewLetters) => {
    state.newPost = postNewLetters;
    rerenderAll(state);
}

export const addNewMessage = (textNewMessage) => {
    let newItem = {
        id: 5,
        messag: textNewMessage
    }
    state.collectMessages.push(newItem);
    rerenderAll(state);
}

export const addNewPost = (textNewPost) => {
    let newPost = {
        likes: 0,
        textPost: textNewPost
    }
    state.arrPosts.push(newPost);
    rerenderAll(state);
}

export default state;