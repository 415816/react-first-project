import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {chooseProfileThunk} from "../../redux/profileReducer";
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
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => ({profile: state.profilePage.profile, myId: state.authReducer.id});

export default compose(
    connect(mapStateToProps, {chooseProfileThunk, authThunk}),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer)

/*
let AuthRedirect = WithAuthRedirect(ProfileContainer);

let WithURLProfileContainer = withRouter(AuthRedirect);
export default connect(mapStateToProps, {chooseProfileThunk, authThunk})(WithURLProfileContainer)*/
