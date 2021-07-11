import mp from './MyPosts.module.css';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

let arrPosts = [
  { likes: 5, textPost: 'Hi, how are you?' },
  { likes: 3, textPost: 'It is my first post!' },
  { likes: 18, textPost: 'It is my zero post!' },
];

let posts = arrPosts.map(pos => <Post message={pos.textPost} likes={pos.likes} />);

const MyPosts = () => {
  return (<div className={mp.my_posts}><h3>My posts</h3>
    <NewPost />
    {posts}
  </div>)
}

export default MyPosts;