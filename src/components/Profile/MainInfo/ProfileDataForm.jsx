import {Field, reduxForm} from "redux-form";
import {Input, TextArea} from "../../FormControls/FormControl";

export const ProfileDataForm = (props) => {

    return (<form>
        <div><b>Full name: </b> <Field component={Input} name={'fullname'} placeholder={'fullname'} type={'text'}/> </div>
        <div><b>About me: </b> <Field component={Input} name={'adoutMe'} placeholder={'about me'} type={'text'}/></div>
        <div><b>looking For A Job: </b><Field component={'input'} name={'looking For A Job'} type={'checkBox'}/></div>
        <div><b>looking For A Job Description: </b><Field component={TextArea} name={'looking For A Job Description'} placeholder={'main skills'} type={'text'}/></div>

    </form>)
}


export const ProfileDataReduxForm = reduxForm({form: 'profile'})(ProfileDataForm)
