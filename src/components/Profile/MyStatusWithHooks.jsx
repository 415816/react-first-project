import React, {useState} from "react";

const MyStatus = (props) => {

    const [editModeOn, toggleEditMode] = useState(false);
    const [status, editStatus] = useState(props.status);

    const activatedEditMode = () => {
        toggleEditMode(true);
    }
    const editStatusCB = (e) => {
        editStatus (e.currentTarget.value);
    }
    const deactivatedEditMode = () => {
        toggleEditMode(false);
        props.updateStatusFromUIThunk(status);
    }

    return <>
        {!editModeOn && <div onClick={activatedEditMode}>{props.status || 'Что нового?'}</div>}
        {editModeOn && <input onChange={editStatusCB} value={status} autoFocus={true} onBlur={deactivatedEditMode}/>}
    </>
}
export default MyStatus;