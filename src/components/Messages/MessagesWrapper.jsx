import React from "react";
import Messages from "./Messages";

const MessagesWrapper = (props) => {

    let addNewMessage = (typ, text) => {
        props.store.dispatch({type: typ, textNewMessage: text});
    }

    const changeNewMessa = (typ, newLetters) => {
        props.store.dispatch({type: typ, messageNewLetters: newLetters})
    }

    return (
        <Messages
            addNewMessa={addNewMessage}
            changeNewMessa={changeNewMessa}
            newMessage={props.store.getState().messagePage.newMessage}
            collectPeople={props.store.getState().messagePage.collectPeople}
            collectMessages={props.store.getState().messagePage.collectMessages}
        />
    )
}

export default MessagesWrapper;