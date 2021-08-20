import us from './Users.module.css'
import {NavLink} from "react-router-dom";
import ava from '../../img/defaultAvatar.gif'
import React from "react";
import {usersAPI} from "../../api/API";

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
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id == u.id)} onClick={() => {
                                props.toggleIsFollowingInProgress(true, u.id);
                                usersAPI.unfollowUser(u.id).then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.toggleIsFollowingInProgress(false, u.id)
                                })
                            }
                            }>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id == u.id)} onClick={() => {
                                props.toggleIsFollowingInProgress(true, u.id)
                                usersAPI.followUser(u.id).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleIsFollowingInProgress(false, u.id)
                                })
                            }
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