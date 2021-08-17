import he from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    debugger
    return (
        <div className={he.heade}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/07/Social_networking_services.jpg"></img>
            { props.resultCode === 0 ? <div className={he.authLogin}>{props.login}</div> : <NavLink to={'/auth'}><div className={he.authLogin}>Login</div></NavLink>}
        </div>)
};

export default Header;