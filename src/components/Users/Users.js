import us from './Users.module.css'
import {NavLink} from "react-router-dom";
import ava from '../../img/defaultAvatar.gif'
import React from "react";
import * as axios from "axios";

const Users = (props) => {

    let pages = [];
    let pagesCount = Math.ceil(props.totalUsersCount / props.usersOnPage);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={us.container}>
            {props.users.map(u =>
                <div className={us.usersContainer}>
                    <div className={us.usersAvaBut}>
                        <NavLink to={'/profile/' + u.id}><img
                            src={u.photos.small != null ? u.photos.small : ava}/></NavLink>
                        {u.followed ?
                            <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "c4eff3f5-e6a4-43aa-9d00-4c706b418609"
                                    }}).then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unfollow(u.id)}})                            }
                            }>Unfollow</button> :
                            <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "c4eff3f5-e6a4-43aa-9d00-4c706b418609"
                                    }}).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)}})}
                            }>Follow</button>}
                    </div>
                    <div className={us.usersData}>
                        <div className={us.name}>{u.name}</div>
                        <div className={us.place}> {"u.city"}, {"u.country"}</div>
                        <div className={us.discription}>{u.status}</div>
                        <div><NavLink to="/messages">
                            <button>Send message</button>
                        </NavLink></div>
                    </div>
                </div>
            )
            }
            <div className={us.numerationPages}>
                {pages.map(p => {
                    return <span onClick={() => props.onPageChanged(p)}
                                 className={p === props.currentPage && us.selectedPage}>{p}</span>
                })}

            </div>
        </div>
    )
}

export default Users;