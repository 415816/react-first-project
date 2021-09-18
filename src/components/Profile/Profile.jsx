import Avatar from "./Avatar/Avatar";
import MainInfo from "./MainInfo/MainInfo";

import mP from "./Profile.module.css";
import MyPostsWrapper from "./MyPosts/MyPostsWrapper";
import MyStatus from "./MyStatus";
import MyStatusWithHooks from "./MyStatusWithHooks";

const Profile = (props) => {
    return (<div className={mP.profile}>
        <Avatar profile={props.profile}/>
        <MainInfo profile={props.profile}/>
        <MyStatusWithHooks status={props.status} updateStatusFromUIThunk={props.updateStatusFromUIThunk}/>
        <MyPostsWrapper />
    </div>)
}

export default Profile;