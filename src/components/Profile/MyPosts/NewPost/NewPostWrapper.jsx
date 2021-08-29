import React from 'react';
import NewPost from "./NewPost";
import {connect} from "react-redux";
import {addNewPost} from "../../../../redux/profileReducer";

let mapStateToProps = (state) => {
    return{
        newPost: state.profilePage.newPost
    }
}

const NewPostWrapper = connect(mapStateToProps, {addNewPost})(NewPost);

export default NewPostWrapper;