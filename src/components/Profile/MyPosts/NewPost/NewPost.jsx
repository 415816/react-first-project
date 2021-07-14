import React, { createRef } from 'react';
import nP from './NewPost.module.css';



const NewPost = () => {
   let newPostText = React.createRef();

   let addNewPost = () =>{
      let text = newPostText.current.value;
      alert(text);
   }
   

return(<div className={nP.newPost}>
        <input ref={newPostText}  placeholder="Plese input your news"></input>
        <div><button onClick={addNewPost}>Send</button></div>
      </div>
   )
}

export default NewPost;