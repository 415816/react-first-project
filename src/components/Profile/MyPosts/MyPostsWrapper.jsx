import {connect} from "react-redux";
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.arrPosts
    }
}

const MyPostsWrapper = connect(mapStateToProps)(MyPosts);

export default MyPostsWrapper;