import nP from './NewPost.module.css';

const NewPost = () => {
return(<div className={nP.newPost}>
        <input placeholder="Plese input your news"></input>
        <div><button>Send</button></div>
      </div>
   )
}

export default NewPost;