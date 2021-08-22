import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {chooseProfileThunk} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {authThunk} from "../../redux/authReducer";

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
        if (this.props.myLogin === null) return <Redirect to='/login/' />
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => ({profile: state.profilePage.profile, myId: state.authReducer.id, myLogin: state.authReducer.login})

let WithURLProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, {chooseProfileThunk, authThunk})(WithURLProfileContainer)