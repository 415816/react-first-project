import mp from './MyPosts.module.css';
import Post from './Post/Post';
import NewPostWrapper from "./NewPost/NewPostWrapper";

const MyPosts = (props) => {
  let posts = props.arrPosts.map(pos => <Post message={pos.textPost} likes={pos.likes} />);

return (<div className={mp.my_posts}><h3>My posts</h3>
    <NewPostWrapper store={props.store}/>
    {posts}
  </div>)
}

export default MyPosts;