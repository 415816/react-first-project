import Avatar from "./Avatar/Avatar";
import MainInfo from "./MainInfo/MainInfo";
import MyPosts from "./MyPosts/MyPosts";
import mP from "./Profile.module.css";

const Profile = (props) => {
    return (<div className={mP.profile}>
        <Avatar />
        <MainInfo />
        <MyPosts store={props.store} arrPosts={props.arrPosts} dispatch={props.dispatch} newPost={props.newPost}/>
    </div>)
}

export default Profile;