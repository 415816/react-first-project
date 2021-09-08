import React from 'react';
import nP from './NewPost.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLength, requaredField} from "../../../../utils/validators/validator";
import {Input} from "../../../FormControls/Input";

const maxLength15 = maxLength(15);

const NewPost = (props) => {
    const addNewPos = (value) => {props.addNewPost(value.newPostBody);}

    return <NewPostReduxForm onSubmit={addNewPos} />
}

const NewPostForm = (props) => {
    return(
    <form className={nP.newPost} onSubmit={props.handleSubmit}>
        <Field
            component={Input}
            name='newPostBody'
            validate={[requaredField, maxLength15]}
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