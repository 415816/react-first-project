import p from './Post.module.css';

const Post = (props) => {
      return (
            <div className={p.post}>
                  <img src="https://i.pinimg.com/originals/5b/1a/9a/5b1a9ab141ba1ade4ab06c8215059225.jpg" />
                  {props.message}
                  <div><button className={p.butt}>like </button> {props.likes}</div>
            </div>
      )
}

export default Post;