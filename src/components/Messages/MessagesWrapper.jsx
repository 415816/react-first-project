import React from "react";
import Messages from "./Messages";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";
import {addNewMessage} from "../../redux/messagesReduser";


let mapStateToProps = (state) => {
    return {
        newMessage: state.messagePage.newMessage,
        collectPeople: state.messagePage.collectPeople,
        collectMessages: state.messagePage.collectMessages,
        myLogin: state.authReducer.login,
    }
}


export default compose (
    connect(mapStateToProps, {addNewMessage}),
    WithAuthRedirect
)(Messages)