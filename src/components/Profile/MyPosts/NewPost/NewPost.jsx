import React from 'react';
import nP from './NewPost.module.css';
import {Field, reduxForm} from "redux-form";

const NewPost = (props) => {
    const addNewPos = (value) => {props.addNewPost(value.newPostBody);}

    return <NewPostReduxForm onSubmit={addNewPos} />
}

const NewPostForm = (props) => {
    return(
    <form className={nP.newPost} onSubmit={props.handleSubmit}>
        <Field
            component={'input'}
            name='newPostBody'
            placeholder="Plese input your news" />
        <div>
            <button>Send</button>
        </div>
    </form>
    )
}

const NewPostReduxForm = reduxForm({
    form: 'newPost'
})(NewPostForm)

export default NewPost;