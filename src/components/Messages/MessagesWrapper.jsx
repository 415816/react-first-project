import React from "react";
import Messages from "./Messages";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newMessage: state.messagePage.newMessage,
        collectPeople: state.messagePage.collectPeople,
        collectMessages: state.messagePage.collectMessages,
        myLogin: state.authReducer.login,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessa: (typ, text) => {
            dispatch({type: typ, textNewMessage: text});
        },
        changeNewMessa: (typ, newLetters) => {
            dispatch({type: typ, messageNewLetters: newLetters})
        }
    }
}

const MessagesWrapper = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesWrapper;