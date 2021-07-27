import us from './Users.module.css'
import {NavLink} from "react-router-dom";

const Users = (props) => {
    return <div className={us.container}>
        {
            props.users.map(u =>
                <div className={us.usersContainer}>
                    <div className={us.usersAvaBut}>
                        <img src={u.imgSrc}/>
                        {u.following ?
                            <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> :
                            <button onClick={() => props.follow(u.id)}>Follow</button>}
                    </div>
                    <div className={us.usersData}>
                        <div className={us.name}>{u.name}</div>
                        <div className={us.place}> {u.city}, {u.country}</div>
                        <div className={us.discription}>{u.discription}</div>
                        <div><NavLink to="/Messages"><button>Send message</button></NavLink></div>
                    </div>
                </div>
            )
        }
    </div>
}
export default Users;