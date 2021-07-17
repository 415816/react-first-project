let store = {
    _state: {
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
    },

    getState(){
        return this._state;
    },

    dispatch(action){
        if (action.type === 'CHANGE-NEW-POST'){
            this._state.newPost = action.postNewLetters;
            store.rerenderAll(this);
        } else if (action.type === 'ADD-NEW-MESSAGE'){
            let newItem = {
                id: 5,
                messag: action.textNewMessage
            }
            this._state.collectMessages.push(newItem);
            store.rerenderAll(this);
        } else if (action.type === 'ADD-NEW-POST'){
            let newPost = {
                likes: 0,
                textPost: action.textNewPost
            }
            this._state.arrPosts.push(newPost);
            store.rerenderAll(this);
        }
    }
    /* changeNewPost(postNewLetters) {
        this._state.newPost = postNewLetters;
        store.rerenderAll(this);
    },

    addNewMessage(textNewMessage) {
        let newItem = {
            id: 5,
            messag: textNewMessage
        }
        this._state.collectMessages.push(newItem);
        store.rerenderAll(this);
    },

    addNewPost(textNewPost) {
        let newPost = {
            likes: 0,
            textPost: textNewPost
        }
        this._state.arrPosts.push(newPost);
        store.rerenderAll(this);
    } */,
    
    _rerenderAll() {
        console.log('It is a template of function');
    },    
    callbackrerender(observer) {
        store.rerenderAll = observer;
    }
}

window.store = store;

export default store;