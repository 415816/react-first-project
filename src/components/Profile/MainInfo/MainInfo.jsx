import mi from './MainInfo.module.css';
import Preloader from "../../Preloader/Preloader";
import {useState} from "react";
import {ProfileDataReduxForm} from "./ProfileDataForm";

const MainInfo = (props) => {
    const [editMode, toggleEditMode] = useState(false);

    const editModeOn = () => {
        toggleEditMode(true);
    }

    if (props.profile == null) {
        return <Preloader/>
    }


    return (
        <div className={mi.main_info}>
            {editMode ? <ProfileDataReduxForm profile={props.profile} /> : <ProfileData editModeOn={editModeOn} isOwner={props.isOwner} profile={props.profile}/>}
            <div>
                <b>Contacts: </b>
                {Object.keys(props.profile.contacts).map(key => {
                    return <Contacts contactName={key} contactValue={props.profile.contacts[key]}/>
                })
                }
            </div>
            <div><b>ID: </b>{props.profile.userId || props.myId}</div>

        </div>)
}

export default MainInfo;

const Contacts = ({contactName, contactValue}) => {
    if (contactValue && (!contactValue.includes('https'))) {
        contactValue = 'https://' + contactValue;
    }
    return contactValue && <div><b>{contactName}: </b> <a href={contactValue}>{contactValue} </a></div>
}

const ProfileData = (props) => {
    return (<>
        {!props.isOwner && <button onClick={props.editModeOn}>edit</button>}
        <div><b>Full name: </b> {props.profile.fullName}</div>
        <div><b>About me: </b>{props.profile.aboutMe}</div>
        <div><b>looking For A Job: </b>{props.profile.lookingForAJob ? "yes" : "no"}</div>
        {
            props.profile.lookingForAJob &&
            <div><b>looking For A Job Description: </b>{props.profile.lookingForAJobDescription} </div>
        }
    </>)
}