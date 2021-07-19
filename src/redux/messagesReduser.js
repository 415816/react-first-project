const messageReduser = (state, action) => {
    switch (action.type) {
        case 'CHANGE-NEW-MESSAGE':
            state.newMessage = action.messageNewLetters;
            break;
        case 'ADD-NEW-MESSAGE':
            let newItem = {
                id: 5,
                messag: action.textNewMessage
            };
            state.collectMessages.push(newItem);
            state.newMessage = '';
            break;
    }
    return state;
}
export default messageReduser;
