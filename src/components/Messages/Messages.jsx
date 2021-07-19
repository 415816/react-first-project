import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import mes from "./Messages.module.css";

const Messages = (props) => {
    let dialog = props.collectPeople.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messa = props.collectMessages.map(m => <Message textMessage={m.messag} /* addNewMessage={props.addNewMessage} *//>);
    
    let messageText = React.createRef();

    let addNewMessage = () => {
        let text = messageText.current.value;
        props.dispatch({type: 'ADD-NEW-MESSAGE', textNewMessage: text});
        // messageText.current.value = '';
    }

    const changeNewMessa = () => {
        props.dispatch({type: 'CHANGE-NEW-MESSAGE', messageNewLetters: messageText.current.value})
    }

    return (
        <div className={mes.messagesContainer}>
            <div className="dialogs">
                {dialog}
            </div>
            <div className="messages">
                {messa}
                <div>
                    <input ref={messageText} onChange={changeNewMessa} value={props.newMessage} type="text" placeholder="Please enter your message"/>
                    <button onClick={addNewMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Messages;