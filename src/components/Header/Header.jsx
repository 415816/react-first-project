import he from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={he.heade}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/07/Social_networking_services.jpg"></img>
            { props.isAuth === true
                ? <div className={he.authLogin}>{props.login} <button onClick={props.logOutThunk}>LogOut</button></div>
                : <NavLink to={'/login'}><button className={he.authLogin}>Login</button></NavLink>}
        </div>)
};

export default Header;