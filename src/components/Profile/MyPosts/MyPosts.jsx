import mp from './MyPosts.module.css';
import Post from './Post/Post';
import NewPostWrapper from "./NewPost/NewPostWrapper";

const MyPosts = (props) => {
  let posts = props.posts.map(pos => <Post message={pos.textPost} key={pos.id} likes={pos.likes} />);

return (<div className={mp.my_posts}><h3>My posts</h3>
    <NewPostWrapper />
    {posts}
  </div>)
}
export default MyPosts;