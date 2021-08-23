import React from "react";
import Messages from "./Messages";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";


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

let addRedirect = WithAuthRedirect (Messages);

const MessagesWrapper = connect(mapStateToProps, mapDispatchToProps)(addRedirect);

export default MessagesWrapper;