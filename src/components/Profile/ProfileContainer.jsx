import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {chooseProfileThunk, updateStatusFromUIThunk, getStatusFromAPIThunk} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {authThunk} from "../../redux/authReducer";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID;
        this.props.authThunk();
        if (!userID) {
            userID = this.props.myId;
        }
        this.props.chooseProfileThunk(userID);
        this.props.getStatusFromAPIThunk(userID);
    }

    render() {
        return <Profile {...this.props} /*profile={this.props.profile} status={this.props.status}*//>
    }
}

let mapStateToProps = (state) => ({profile: state.profilePage.profile, myId: state.authReducer.id, status: state.profilePage.status});

export default compose(
    connect(mapStateToProps, {chooseProfileThunk, authThunk, updateStatusFromUIThunk, getStatusFromAPIThunk}),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer)