import profileReducer from "./profileReducer";
import messagesReduser from "./messagesReduser";

let store = {
    _state: {
        arrPosts: [
            {likes: 5, textPost: 'Hi, how are you?'},
            {likes: 3, textPost: 'It is my first post!'},
            {likes: 18, textPost: 'It is my zero post!'}
        ],

        newPost: '',

        collectPeople: [
            {id: 1, name: 'Bulochka'},
            {id: 2, name: 'Nastya'},
            {id: 3, name: 'Tony'},
            {id: 4, name: 'Mashka-Kakashka'}
        ],

        collectMessages: [
            {id: 1, messag: "Hi!"},
            {id: 2, messag: "How are you?"},
            {id: 3, messag: "Are you sleep?"},
            {id: 4, messag: "I am kakashka!"}
        ],

        newMessage: '',

        sidebar: [
            {id: 1, name: 'Oly'},
            {id: 2, name: 'Mas'},
            {id: 3, name: 'Vas'},
        ],
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state = profileReducer(this._state, action);
        store._rerenderAll(this._state);
        this._state = messagesReduser(this._state, action);
        store._rerenderAll(this._state);
    },

    _rerenderAll() {
        console.log('It is a template of function');
    },

    rerenderAll(observer) {
        store._rerenderAll = observer;
    }

}
window.store = store;

export default store;


// формирователь action в state