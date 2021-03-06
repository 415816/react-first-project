import {Field, reduxForm} from "redux-form";
import {Input, TextArea} from "../../FormControls/FormControl";
import si from "../../FormControls/FormControl.module.css";

export const ProfileDataForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        {props.error && <div className={si.borderRed}>
            {props.error}
        </div>}
        <div>
            <button value={'btnProfile'}>Update profile</button>
        </div>
        <div><b>Full name: </b> <Field component={Input} name={'fullName'} placeholder={'fullname'} type={'text'}/>
        </div>
        <div><b>About me: </b> <Field component={Input} name={'aboutMe'} placeholder={'about me'} type={'text'}/></div>
        <div><b>looking For A Job: </b><Field component={'input'} name={'lookingForAJob'} type={'checkBox'}/></div>
        <div><b>looking For A Job Description: </b><Field component={TextArea} name={'lookingForAJobDescription'}
                                                          placeholder={'main skills'} type={'text'}/></div>
        <div>
            <b>Contacts: </b>
            {Object.keys(props.profile.contacts).map(key => {
                return <div key={key}><b>{key}: </b>
                    <Field component={Input}
                           name={'contacts.' + key}
                           placeholder={key}
                           type={'text'}/></div>
            })
            }
        </div>
    </form>)
}


export const ProfileDataReduxForm = reduxForm({form: 'profile'})(ProfileDataForm)
