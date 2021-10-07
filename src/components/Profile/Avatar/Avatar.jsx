import av from './Avatar.module.css';
import Preloader from "../../Preloader/Preloader";
import ava from './../../../img/defaultAvatar.gif'


const Avatar = (props) => {
    if (props.profile == null) {return <Preloader/>}
    const changeAva = (e) => {
        props.setProfilePhotoThunk(e.target.files[0]);
    }

    return (<div>
        <img className={av.avatar} src={props.profile.photos.large || ava}></img>
        {!props.isOwner && <div><label htmlFor={av.inputAva} id={av.labelAva}> Choose avatar </label><input id={av.inputAva} type="file" onChange={changeAva}/></div>  }
    </div>)
}
export default Avatar;