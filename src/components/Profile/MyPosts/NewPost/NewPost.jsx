import React, {createRef} from 'react';
import nP from './NewPost.module.css';

const NewPost = (props) => {
    const newPostText = React.createRef();

    const addNewPos = () => {
        let typ = 'ADD-NEW-POST';
        let text = newPostText.current.value;
        props.addNewPos(typ, text);
    }

    const changeNewPos = () => {
        let typ = 'CHANGE-NEW-POST';
        let letters = newPostText.current.value;
        props.changeNewPos(typ, letters);
    }

    return (<div className={nP.newPost}>
            <input ref={newPostText} value={props.newPost} onChange={changeNewPos}
                   placeholder="Plese input your news" />
            <div>
                <button onClick={addNewPos}>Send</button>
            </div>
        </div>
    )
}

export default NewPost;