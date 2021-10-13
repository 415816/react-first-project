import {Field, reduxForm} from "redux-form";
import {maxLength, requaredField} from "../../utils/validators/validator";
import {Input} from "../FormControls/FormControl";
import {connect} from "react-redux";
import {logInThunk, logOutThunk} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import si from "../FormControls/FormControl.module.css"

export const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field component={Input} validate={[requaredField, props.maxLength15]} name={'login'} placeholder={'login'} type={'email'}/></div>
        <div><Field component={Input} validate={[requaredField, props.maxLength15]} name={'pass'} placeholder={'password'} type={'password'}/></div>
        <div><Field component={'input'} name={'rememberMe'} type={'checkBox'}/>remember me</div>
        {props.error && <div className={si.borderRed}>
            {props.error}
        </div>}
        {props.captcha && <img src={props.captcha}/>}
        {props.captcha && <div><Field component={Input} validate={[requaredField]} name={'captcha'} placeholder={'captcha'} type={'text'}/></div>}
        <div><button value={'btnLogin'}>Login</button></div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export const Login = (props) => {
    const onSubmit = (allData) => {
        console.log(allData.login, allData.pass, allData.rememberMe);
        props.logInThunk(allData.login, allData.pass, allData.rememberMe, allData.captcha);
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    const maxLength15 = maxLength(15);
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm maxLength15={maxLength15} onSubmit={onSubmit} captcha={props.captcha}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    captcha: state.authReducer.captcha
})

export default connect(mapStateToProps, {logInThunk, logOutThunk})(Login);