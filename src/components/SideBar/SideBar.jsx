import { NavLink } from 'react-router-dom';
import sb from './SideBar.module.css';
import FrendsWrapper from "./Frends/FrendsWrapper";

const SideBar = (props) => {
    return (<div className={sb.sidebar}>
        <div><NavLink to="/profile/" activeClassName={sb.active}>Profile</NavLink></div>
        <div><NavLink to="/messages" activeClassName={sb.active}>Messages</NavLink></div>
        <div><NavLink to="/users" activeClassName={sb.active}>Users</NavLink></div>
        <div><NavLink to="/news" activeClassName={sb.active}>News</NavLink></div>
        <div><NavLink to="/music" activeClassName={sb.active}>Music</NavLink></div>
        <div><NavLink to="/settings" activeClassName={sb.active}>Settings</NavLink></div>

        <div className={sb.fren}>
            <FrendsWrapper />
        </div>
    </div>)
};
export default SideBar;