import {Field, reduxForm} from "redux-form";

import {maxLength, requaredField} from "../../utils/validators/validator";
import {Input} from "../FormControls/FormControl";

export const LoginForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div><Field component={Input} validate={[requaredField, props.maxLength15]} name={'login'} placeholder={'login'}/></div>
        <div><Field component={Input} validate={[requaredField, props.maxLength15]} name={'pass'} placeholder={'password'}/></div>
        <div><Field component={'input'} name={'remember me'} type={'checkBox'}/>remember me</div>
        <div><button value={'btnLogin'}>Login</button></div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)

export const Login = () => {
    const onSubmit = (allData) => {
        console.log(allData);
    }
    const maxLength15 = maxLength(15);
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm maxLength15={maxLength15} onSubmit={onSubmit}/>
        </div>
    )
}
export default Login;