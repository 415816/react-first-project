import mi from './MainInfo.module.css';
import Preloader from "../../Preloader/Preloader";
import {useState} from "react";
import {ProfileDataForm, ProfileDataReduxForm} from "./ProfileDataReduxForm";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../FormControls/FormControl";


const MainInfo = (props) => {
    const [editMode, toggleEditMode] = useState(false);

    const editModeOn = () => {
        toggleEditMode(true);
    }

    if (props.profile == null) {
        return <Preloader/>
    }
    const onSubmit = async (allData) => {
        console.log(allData);
        await props.updateProfileDataFromUIThunk(allData);
        toggleEditMode(false);
    }

    return (
        <div className={mi.main_info}>
            {editMode
                ? <ProfileDataReduxForm initialValues={props.profile} profile={props.profile}  onSubmit={onSubmit}/>
                : <ProfileData editModeOn={editModeOn} isOwner={props.isOwner} profile={props.profile}/>}
            <div><b>ID: </b>{props.profile.userId || props.myId}</div>

        </div>)
}

export default MainInfo;

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
        <div>
            <b>Contacts: </b>
            {Object.keys(props.profile.contacts).map(key => {
                return <div key={key}> <b>{key}: </b> <span>{props.profile.contacts[key]}</span> </div>
            })
            }
        </div>
    </>)
}

export const MainInfoReduxForm = reduxForm({form: 'profile'})(MainInfo)