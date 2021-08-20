import * as axios from 'axios';
import React from "react";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {usersAPI} from "../../api/API";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.usersOnPage).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
                this.props.setTotalCount(response.totalCount);
            })}
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.usersOnPage).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.items);
        })}

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users {...this.props} /*totalUsersCount={this.props.totalUsersCount}
                   usersOnPage={this.props.usersOnPage}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   currentPage={this.props.currentPage}
                   users={this.props.users}*/
                   onPageChanged={this.onPageChanged}
                   componentDidMount={this.componentDidMount}
                   /*followingInProgress={this.props.followingInProgress}
                   toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}*/
            /></>}}
export default UsersContainer;