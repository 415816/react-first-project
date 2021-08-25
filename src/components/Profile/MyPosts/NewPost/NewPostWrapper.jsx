import React, {createRef} from 'react';
import NewPost from "./NewPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        newPost: state.profilePage.newPost
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addNewPos: (type, textNewPost) => {
            dispatch({type: type, textNewPost: textNewPost});
        },

        changeNewPos: (type, postNewLetters) => {
            dispatch({type: type, postNewLetters: postNewLetters});
        }
    }
}

const NewPostWrapper = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostWrapper;