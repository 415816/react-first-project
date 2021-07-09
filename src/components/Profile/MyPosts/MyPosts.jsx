import mp from './MyPosts.module.css';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const MyPosts = () => {
return(<div className={mp.my_posts}><h3>My posts</h3>
      <NewPost />
      <Post message='Hi, how are you?' likes='5'/>
      <Post message='It is my first post!' likes='3'/>
      <Post message='It is my zero post!' likes='18'/>

      
    </div>)
}

export default MyPosts;