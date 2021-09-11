import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import mes from "./Messages.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLength, requaredField} from "../../utils/validators/validator";
import {TextArea} from "../FormControls/FormControl";


const maxLeng30 = maxLength(30);

const Messages = (props) => {
    let dialog = props.collectPeople.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messa = props.collectMessages.map(m => <Message textMessage={m.messag} key={m.id} />);

    let addNewMessage = (value) => {
        props.addNewMessage(value.newMessageBody)
    }

    return (
        <div className={mes.messagesContainer}>
            <div className="dialogs">
                {dialog}
            </div>
            <div className="messages">
                {messa}
                <NewMessageReduxForm  onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

export default Messages;


const NewMessageForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <Field component={TextArea}
               type='text'
               validate={[requaredField, maxLeng30]}
               name='newMessageBody'
               value={props.newMessage}
               placeholder="Please enter your message"/>
        <button>Send</button>
    </form>
    )
}

const NewMessageReduxForm = reduxForm({
    form: 'newMessage'
})(NewMessageForm)
