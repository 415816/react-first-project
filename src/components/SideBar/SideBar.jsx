import sb from './SideBar.module.css';

const SideBar = () => {
    return (<div className={sb.sidebar}>
        <div><a href="/Profile">Profile</a></div>
        <div><a href="/Messages">Messages</a></div>
        <div><a href="/News">News</a></div>
        <div><a href="/Music">Music</a></div>
        <div><a href="/Settings">Settings</a></div>
    </div>)
};
export default SideBar;