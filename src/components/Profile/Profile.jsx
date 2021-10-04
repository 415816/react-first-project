import Avatar from "./Avatar/Avatar";
import MainInfo from "./MainInfo/MainInfo";

import mP from "./Profile.module.css";
import MyPostsWrapper from "./MyPosts/MyPostsWrapper";
import MyStatusWithHooks from "./MyStatusWithHooks";

const Profile = (props) => {
    return (<div className={mP.profile}>
        <Avatar setProfilePhotoThunk={props.setProfilePhotoThunk} profile={props.profile} isOwner={props.match.params.userID}/>
        <MainInfo profile={props.profile} myId={props.myId} isOwner={props.match.params.userID}/>
        <MyStatusWithHooks status={props.status} updateStatusFromUIThunk={props.updateStatusFromUIThunk}/>
        <MyPostsWrapper />
    </div>)
}

export default Profile;
