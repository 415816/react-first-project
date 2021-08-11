import us from './Users.module.css'
import {NavLink} from "react-router-dom";
import ava from '../../img/defaultAvatar.gif'
import React from "react";

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
                            <img src={u.photos.small != null ? u.imgSrc : ava}/>
                            {u.following ?
                                <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button> :
                                <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                        <div className={us.usersData}>
                            <div className={us.name}>{u.name}</div>
                            <div className={us.place}> {"u.city"}, {"u.country"}</div>
                            <div className={us.discription}>{u.status}</div>
                            <div><NavLink to="/Messages">
                                <button>Send message</button>
                            </NavLink></div>
                        </div>
                    </div>
                )
                }
                <div className={us.numerationPages}>
                    {pages.map(p => {
                        return <span onClick={() => props.changeCurrentPage(p)}
                                     className={p === props.currentPage && us.selectedPage}>{p}</span>
                    })}

                </div>
            </div>
        )
}

export default Users;