import * as axios from 'axios';
import React from "react";
import Users from "./Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
        }
    }

    changeCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersOnPage}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render () {
        return <Users
            totalUsersCount = {this.props.totalUsersCount}
            usersOnPage = {this.props.usersOnPage}
            unfollow = {this.props.unfollow}
            follow = {this.props.follow}
            changeCurrentPage={this.changeCurrentPage}
            currentPage = {this.props.currentPage}
            users = {this.props.users}
        />
    }
}
export default UsersContainer;