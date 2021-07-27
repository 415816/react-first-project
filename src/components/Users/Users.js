import us from './Users.module.css'
import {NavLink} from "react-router-dom";
import * as axios from 'axios';
import ava from '../../img/defaultAvatar.jpg'

const Users = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items);
            })
    }

    return <div className={us.container}>
        {
            props.users.map(u =>
                <div className={us.usersContainer}>
                    <div className={us.usersAvaBut}>
                        <img src={u.photos.small != null ? u.imgSrc : ava }/>
                        {u.following ?
                            <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> :
                            <button onClick={() => props.follow(u.id)}>Follow</button>}
                    </div>
                    <div className={us.usersData}>
                        <div className={us.name}>{u.name}</div>
                        <div className={us.place}> {"u.city"}, {"u.country"}</div>
                        <div className={us.discription}>{u.status}</div>
                        <div><NavLink to="/Messages"><button>Send message</button></NavLink></div>
                    </div>
                </div>
            )
        }
    </div>
}
export default Users;