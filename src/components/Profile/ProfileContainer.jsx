import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {chooseProfileThunk} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {authThunk} from "../../redux/authReducer";


class ProfileContainer extends React.Component {
    async componentDidMount() {
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

let mapStateToProps = (state) => ({profile: state.profilePage.profile, myId: state.authReducer.id})

let WithURLProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, {chooseProfileThunk, authThunk})(WithURLProfileContainer)