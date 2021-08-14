import av from './Avatar.module.css';
import Preloader from "../../Preloader/Preloader";

const Avatar = (props) => {
    if (props.profile == null) {return <Preloader/>}
    return (<div>
        <img className={av.avatar} src={props.profile.photos.large}></img>
    </div>)
}
export default Avatar;