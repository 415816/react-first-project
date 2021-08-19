import * as axios from 'axios';
import React from "react";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`,
                {withCredentials: true}).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })}
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersOnPage}`,
            {withCredentials: true}).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        })}

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users {...this.props} onPageChanged={this.onPageChanged} componentDidMount={this.componentDidMount}
                /*totalUsersCount={this.props.totalUsersCount}
                usersOnPage={this.props.usersOnPage}
                unfollow={this.props.unfollow}
                follow={this.props.follow}

                currentPage={this.props.currentPage}
                users={this.props.users}*//></>}}
export default UsersContainer;