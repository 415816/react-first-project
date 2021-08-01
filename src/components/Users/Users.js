import us from './Users.module.css'
import {NavLink} from "react-router-dom";
import * as axios from 'axios';
import ava from '../../img/defaultAvatar.gif'
import React from "react";

class Users extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items);
            })
        }
    }


    render() {
        let pages = [];
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.usersOnPage);
        for (let i=1; i <= pagesCount; i++){
            pages.push(i);
        }

        return (
            <div className={us.container}>
                    <div>
                        {pages.map(p => {
                            return <span className={if (p === this.props.currentPage)}>{p}</span>
                        })}

                    </div>
                {this.props.users.map(u =>
                        <div className={us.usersContainer}>
                            <div className={us.usersAvaBut}>
                                <img src={u.photos.small != null ? u.imgSrc : ava}/>
                                {u.following ?
                                    <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</button> :
                                    <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
            </div>
        )
    }


}

export default Users;