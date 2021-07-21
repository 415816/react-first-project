import React, {createRef} from 'react';
import NewPost from "./NewPost";

const NewPostWrapper = (props) => {

    const addNewPos = (type, textNewPost) => {
        props.store.dispatch({type: type, textNewPost: textNewPost});
    }

    const changeNewPos = (type, postNewLetters) => {
        props.store.dispatch({type: type, postNewLetters: postNewLetters});
    }

    const nwPost = props.store.getState();
        let newPost = nwPost.profilePage.newPost;
    return (<NewPost addNewPos={addNewPos} changeNewPos={changeNewPos} newPost={newPost}/>)
}

export default NewPostWrapper;