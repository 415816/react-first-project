import React, { createRef } from 'react';
import nP from './NewPost.module.css';

const NewPost = (props) => {
   const newPostText = React.createRef();

   const addNewPos = () =>{
      props.addNewPost(newPostText.current.value); 
      newPostText.current.value = '';
   }

   const changeNewPos = () => {
      props.changeNewPost(newPostText.current.value);
   }

return(<div className={nP.newPost}>
        <input ref={newPostText} value={props.newPost} onChange={changeNewPos} placeholder="Plese input your news"></input>
        <div><button onClick={addNewPos}>Send</button></div>
      </div>
   )
}

export default NewPost;