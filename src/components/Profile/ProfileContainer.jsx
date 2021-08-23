import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {chooseProfileThunk} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {authThunk} from "../../redux/authReducer";

import Messages from "../Messages/Messages";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";

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
let AuthRedirect = WithAuthRedirect(ProfileContainer);
let mapStateToPropsForRedirect = (state) => ({myLogin: state.authReducer.login});
AuthRedirect = connect(mapStateToPropsForRedirect)(AuthRedirect);


let WithURLProfileContainer = withRouter(AuthRedirect);
let mapStateToProps = (state) => ({profile: state.profilePage.profile, myId: state.authReducer.id});
export default connect(mapStateToProps, {chooseProfileThunk, authThunk})(WithURLProfileContainer)