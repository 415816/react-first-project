import {Field, reduxForm} from "redux-form";

export const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field component={'input'} name={'login'} placeholder={'login'}/></div>
        <div><Field component={'input'} name={'pass'} placeholder={'password'}/></div>
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
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export default Login;