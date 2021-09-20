import React, {PureComponent} from "react";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

class UsersContainer extends PureComponent {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.usersOnPage)}

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunk(pageNumber, this.props.usersOnPage)}


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users {...this.props} onPageChanged={this.onPageChanged} componentDidMount={this.componentDidMount} /></>}}
export default UsersContainer;