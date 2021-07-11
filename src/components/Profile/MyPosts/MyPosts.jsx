import mp from './MyPosts.module.css';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const MyPosts = (props) => {
  let posts = props.arrPosts.map(pos => <Post message={pos.textPost} likes={pos.likes} />);

return (<div className={mp.my_posts}><h3>My posts</h3>
    <NewPost />
    {posts}
  </div>)
}

export default MyPosts;