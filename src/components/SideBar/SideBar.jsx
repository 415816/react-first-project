import { NavLink } from 'react-router-dom';
import sb from './SideBar.module.css';
import Frends from './Frends/Frends'

const SideBar = (props) => {
    return (<div className={sb.sidebar}>
        <div><NavLink to="/Profile" activeClassName={sb.active}>Profile</NavLink></div>
        <div><NavLink to="/Messages"activeClassName={sb.active}>Messages</NavLink></div>
        <div><NavLink to="/News" activeClassName={sb.active}>News</NavLink></div>
        <div><NavLink to="/Music" activeClassName={sb.active}>Music</NavLink></div>
        <div><NavLink to="/Settings" activeClassName={sb.active}>Settings</NavLink></div>

        <div className={sb.fren}>
            <Frends sidebar={props.sidebar}/>
        </div>
    </div>)
};
export default SideBar;