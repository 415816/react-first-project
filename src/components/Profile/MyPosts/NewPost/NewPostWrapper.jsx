import React, {createRef} from 'react';
import NewPost from "./NewPost";
import {connect} from "react-redux";

// const NewPostWrapper = (props) => {
//
//     const addNewPos = (type, textNewPost) => {
//         props.store.dispatch({type: type, textNewPost: textNewPost});
//     }
//
//     const changeNewPos = (type, postNewLetters) => {
//         props.store.dispatch({type: type, postNewLetters: postNewLetters});
//     }
//
//     // const nwPost = props.store.getState();
//     //     let newPost = nwPost.profilePage.newPost;
//     return (<NewPost addNewPos={addNewPos} changeNewPos={changeNewPos} newPost={newPost}/>)
// }

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