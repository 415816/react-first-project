import Avatar from "./Avatar/Avatar";
import MainInfo from "./MainInfo/MainInfo";

import mP from "./Profile.module.css";
import MyPostsWrapper from "./MyPosts/MyPostsWrapper";

const Profile = (props) => {
    return (<div className={mP.profile}>
        <Avatar />
        <MainInfo />
        <MyPostsWrapper />
    </div>)
}

export default Profile;