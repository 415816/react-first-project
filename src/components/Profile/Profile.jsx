import Avatar from "./Avatar/Avatar";
import MainInfo from "./MainInfo/MainInfo";

import mP from "./Profile.module.css";
import MyPostsWrapper from "./MyPosts/MyPostsWrapper";
import MyStatus from "./MyStatus";

const Profile = (props) => {
    return (<div className={mP.profile}>
        <Avatar profile={props.profile}/>
        <MainInfo profile={props.profile}/>
        <MyStatus />
        <MyPostsWrapper />
    </div>)
}

export default Profile;